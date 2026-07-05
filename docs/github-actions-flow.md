# GitHub Actions flows

Los workflows de pruebas y despliegue de Erixcel Engine están aislados.

## Pruebas

El workflow `.github/workflows/tests.yml` se ejecuta en Pull Requests hacia
`main`, pushes a `main` y `develop`, y manualmente.

```mermaid
flowchart LR
  A["Cambio en GitHub"] --> B["PostgreSQL temporal"]
  B --> C["Unit tests"]
  C --> D["E2E tests"]
  D --> E["BDD tests"]
  E --> F["Reporte Allure"]
  F --> G{"Push a main"}
  G -->|"Sí"| H["GitHub Pages"]
  G -->|"No"| I["Artifact descargable"]
```

Este workflow no construye ni publica imágenes Docker y no realiza despliegues.

## Docker y Azure

El workflow `.github/workflows/deploy-azure.yml` usa la imagen
`${DOCKERHUB_USERNAME}/icpna-engine`.

```mermaid
flowchart LR
  A["Pull Request a main"] --> B["Validar Docker build"]
  C["Push a main"] --> D["Construir imagen linux/amd64"]
  D --> E["Publicar tags latest y commit SHA en Docker Hub"]
  E --> F["Actualizar Azure App Service icpna-engine"]
```

Secrets requeridos en GitHub:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `AZURE_WEBAPP_PUBLISH_PROFILE`

Easypanel ya no forma parte del CI/CD del proyecto.
