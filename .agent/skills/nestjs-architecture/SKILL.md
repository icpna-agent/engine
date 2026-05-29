---
name: nestjs-architecture
description: |
  Guia de arquitectura para erixcel-engine. Usar cuando se creen o ajusten
  modulos NestJS, features, repositorios, tablas, seeds o estructura de archivos.
  Prioriza las convenciones reales del proyecto: NestJS, Drizzle ORM,
  TypeScript, aliases de tsconfig y dominio ICPNA Studio.
---

# NestJS Architecture - Erixcel Engine

Esta skill define la estructura y nombres para trabajar en `erixcel-engine`.

## File Naming

Usar el patron `[name].[type].ts`:

- Core setup: `*.core.ts`
- Functions: `*.function.ts`
- Tables: `*.table.ts`
- Repositories: `*.repository.ts`
- Seeds: `*.seed.ts`
- Modules: `*.module.ts`
- Controllers: `*.controller.ts`
- Services: `*.service.ts`
- DTOs: `*.dto.ts`

## Directorios Principales

```text
src/
├── core/              # Configuracion global: swagger, pipes, telemetry
├── db/                # Drizzle config, connection, scripts y tablas
│   └── tables/
├── features/          # Capacidades transversales: client, memory, schema
├── functions/         # Helpers puros reutilizables
├── models/            # Modelos compartidos
├── modules/           # Modulos HTTP/de dominio
├── repositories/      # Acceso a datos con Drizzle
└── seeds/             # Datos iniciales
```

## Modulo Con Base De Datos

Para un CRUD de dominio:

```text
src/modules/[feature]/
├── dto/
│   ├── [entity]-create.dto.ts
│   ├── [entity]-update.dto.ts
│   ├── [entity]-list.dto.ts
│   └── [entity]-result.dto.ts
├── [feature].controller.ts
├── [feature].module.ts
└── [feature].service.ts

src/db/tables/[entity].table.ts
src/repositories/[entity].repository.ts
src/seeds/[entity].seed.ts
```

## Dominio ICPNA Books

Cuando el trabajo trate de registrar libros ICPNA, partir de estas entidades del diagrama:

```text
book
book_index
book_unit
book_lesson
book_panel
book_audio
book_image
```

Nombres TypeScript recomendados:

- `book`
- `bookIndex`
- `bookUnit`
- `bookLesson`
- `bookPanel`
- `bookAudio`
- `bookImage`

Reglas de normalizacion:

- No crear una tabla llamada `index`; usar `book_index`.
- Corregir `tittle` a `title`.
- Corregir `gramar` a `grammar`.
- Si `url` almacena una URL, usar `text`, no `int`.
- Si un campo `index` representa el numero/etiqueta de `bookAudio`, preferir `audioIndex` o `label`.

## Path Aliases

Usar siempre los aliases reales:

```json
{
  "@core/*": ["src/core/*"],
  "@models/*": ["src/models/*"],
  "@db/*": ["src/db/*"],
  "@seeds/*": ["src/seeds/*"],
  "@modules/*": ["src/modules/*"],
  "@controllers/*": ["src/controllers/*"],
  "@services/*": ["src/services/*"],
  "@repositories/*": ["src/repositories/*"],
  "@functions/*": ["src/functions/*"],
  "@utils/*": ["src/utils/*"],
  "@config/*": ["src/config/*"]
}
```

## Reglas De Capas

- Controller: rutas, DTOs y Swagger.
- Service: logica de negocio, validaciones y transformacion.
- Repository: unica capa con queries Drizzle.
- Table: schema Drizzle y tipos inferidos.

No acceder a `database` fuera de repositories y scripts/seeds.
