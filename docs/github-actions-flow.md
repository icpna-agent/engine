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
  D --> E["Setup Node.js 20"]
  E --> F["npm ci"]
  F --> G["Unit tests<br/>npm test -- --runInBand --passWithNoTests"]
  G --> H["E2E tests<br/>npm run test:e2e"]
  H --> I["BDD tests<br/>npm run test:bdd"]
  I --> J["Build NestJS<br/>npm run build"]
  J --> K["Validate Docker image<br/>docker build"]

  K --> L{"Paso todo?"}
  L -->|"No"| M["Pipeline fallido<br/>No despliega"]
  L -->|"Si"| N{"Puede desplegar?"}

  N -->|"PR hacia main"| O["Solo validacion<br/>No despliega"]
  N -->|"Push a develop"| O
  N -->|"Push a main"| P["Deploy to Easypanel"]
  N -->|"Manual en main"| P

  P --> Q["Validar secret<br/>EASYPANEL_DEPLOY_WEBHOOK"]
  Q --> R["Llamar webhook de Easypanel"]
  R --> S["Easypanel reconstruye y publica"]
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

  A -.->|"Reglas internas del engine"| A1["test/bdd/modules/engine/tdd"]
  B -.->|"Endpoints reales con app Nest"| B1["test/e2e"]
  C -.->|"Comportamientos legibles"| C1["test/bdd/modules"]
```

## Regla Principal

El deploy a Easypanel solo ocurre cuando todo esto pasa correctamente:

1. Tests unitarios/TDD.
2. Tests E2E.
3. Tests BDD.
4. Build de NestJS.
5. Construccion de Docker.
6. Existencia del secret `EASYPANEL_DEPLOY_WEBHOOK`.

Si una parte falla, GitHub Actions detiene el flujo y no llama a Easypanel.
