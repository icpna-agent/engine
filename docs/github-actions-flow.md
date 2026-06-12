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
  K --> L["Build NestJS<br/>npm run build"]
  L --> M["Validate Docker image<br/>docker build"]

  M --> N{"Paso todo?"}
  N -->|"No"| O["Pipeline fallido<br/>No despliega"]
  N -->|"Si"| P{"Puede desplegar?"}

  P -->|"PR hacia main"| Q["Solo validacion<br/>No despliega"]
  P -->|"Push a develop"| Q
  P -->|"Push a main"| R["Deploy to Easypanel"]
  P -->|"Manual en main"| R

  R --> S["Validar secret<br/>EASYPANEL_DEPLOY_WEBHOOK"]
  S --> T["Llamar webhook de Easypanel"]
  T --> U["Easypanel reconstruye y publica"]
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
  C --> D["Build NestJS"]
  D --> E["Docker build"]
  E --> F["Deploy Easypanel"]

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
6. Build de NestJS.
7. Construccion de Docker.
8. Existencia del secret `EASYPANEL_DEPLOY_WEBHOOK`.

Si una parte falla, GitHub Actions detiene el flujo y no llama a Easypanel.
