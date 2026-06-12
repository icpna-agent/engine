# GitHub Actions CI/CD Flow

Este esquema resume el flujo definido en `.github/workflows/ci-cd.yml`.

```mermaid
flowchart TD
  A["Cambio en GitHub"] --> B{"Evento"}

  B -->|"Pull Request hacia main"| C["Ejecutar validacion"]
  B -->|"Push a develop"| C
  B -->|"Push a main"| C
  B -->|"Ejecucion manual"| C

  C --> D["Checkout repository"]
  D --> E["Setup Node.js 22"]
  E --> F["npm ci"]
  F --> G["Prepare test database<br/>npm run db:create"]
  G --> H["Seed test database<br/>npm run db:seed"]
  H --> I["Unit tests<br/>npm test -- --runInBand --passWithNoTests"]
  I --> J["E2E tests<br/>npm run test:e2e"]
  J --> K["BDD tests<br/>npm run test:bdd"]
  K --> L["Generate Allure report<br/>npm run report:allure"]
  L --> M["Upload Allure artifact<br/>allure-report"]
  M --> N{"Esta en main?"}
  N -->|"Si"| O["Upload report to GitHub Pages"]
  N -->|"No"| P["Solo artifact descargable"]
  O --> Q["Publish Allure report<br/>GitHub Pages"]
  P --> R["Build NestJS<br/>npm run build"]
  Q --> R
  R --> S["Validate Docker image<br/>docker build"]

  S --> T{"Paso todo?"}
  T -->|"No"| U["Pipeline fallido<br/>No despliega"]
  T -->|"Si"| V{"Puede desplegar?"}

  V -->|"PR hacia main"| W["Solo validacion<br/>No despliega"]
  V -->|"Push a develop"| W
  V -->|"Push a main"| X["Deploy to Easypanel"]
  V -->|"Manual en main"| X

  X --> Y["Validar secret<br/>EASYPANEL_DEPLOY_WEBHOOK"]
  Y --> Z["Llamar webhook de Easypanel"]
  Z --> AA["Easypanel reconstruye y publica"]
```

## Lectura Rapida

| Caso | Que ejecuta | Despliega |
| --- | --- | --- |
| Pull Request hacia `main` | Tests, build y Docker build | No |
| Push a `develop` | Tests, build y Docker build | No |
| Push a `main` | Tests, build, Docker build y webhook | Si |
| Ejecucion manual en `main` | Tests, build, Docker build y webhook | Si |

## Capas De Pruebas

```mermaid
flowchart LR
  A["Unit / TDD"] --> B["E2E"]
  B --> C["BDD / Cucumber"]
  C --> D["Allure report"]
  D --> E["GitHub Pages"]
  E --> F["Build NestJS"]
  F --> H["Docker build"]
  H --> I["Deploy Easypanel"]

  G["Postgres temporal en CI"] -.-> A
  G -.-> B
  G -.-> C
  A -.->|"Reglas internas del engine"| A1["test/bdd/modules/engine/tdd"]
  B -.->|"Endpoints reales con app Nest"| B1["test/e2e"]
  C -.->|"Comportamientos legibles"| C1["test/bdd/modules"]
```

## Regla Principal

El deploy a Easypanel solo ocurre cuando todo esto pasa correctamente:

1. Preparacion de la base temporal de pruebas.
2. Carga de datos semilla.
3. Tests unitarios/TDD.
4. Tests E2E.
5. Tests BDD.
6. Generacion y subida del reporte Allure como artifact.
7. Publicacion del reporte Allure en GitHub Pages cuando corre en `main`.
8. Build de NestJS.
9. Construccion de Docker.
10. Existencia del secret `EASYPANEL_DEPLOY_WEBHOOK`.

Si una parte falla, GitHub Actions detiene el flujo y no llama a Easypanel.
