# Erixcel Engine Agent Rules

Reglas clave para trabajar en `erixcel-engine`.

## Proyecto

- Backend NestJS en TypeScript para ICPNA Studio y flujos de WhatsApp/IA.
- ORM oficial: Drizzle ORM con PostgreSQL.
- No usar Prisma ni TypeORM.
- Mantener la arquitectura NestJS: module, controller, service, repository, DTOs.

## Arquitectura Backend

- `src/db/tables`: define tablas Drizzle, enums y tipos inferidos.
- `src/repositories`: unica capa con conexion directa a base de datos.
- `src/modules`: controladores, servicios y DTOs de funcionalidades HTTP.
- `src/features`: servicios reutilizables transversales, clientes externos y capacidades compartidas.
- `src/core`: configuracion global de arranque, Swagger, pipes y telemetry.
- `src/seeds`: datos iniciales.

## Base De Datos

- Tablas, columnas, enums, codigo y nombres tecnicos deben estar en ingles.
- Keys TypeScript en camelCase y nombres PostgreSQL en snake_case.
- Toda tabla nueva de dominio debe incluir `createdAt`, `updatedAt` y `deletedAt`.
- Usar soft delete mediante `deletedAt`, salvo que el usuario pida borrado fisico de forma explicita.
- Registrar cada tabla nueva en `src/db/connection.db.ts`.

## Dominio ICPNA Books

Las entidades objetivo para registrar libros ICPNA parten del diagrama compartido:

- `book`
- `bookIndex` usando tabla `book_index`
- `bookUnit` usando tabla `book_unit`
- `bookLesson` usando tabla `book_lesson`
- `bookPanel` usando tabla `book_panel`
- `bookAudio` usando tabla `book_audio`
- `bookImage` usando tabla `book_image`

Normalizar typos del diagrama al crear codigo:

- `tittle` -> `title`
- `gramar` -> `grammar`
- `url [int]` -> `url` como `text` si representa una URL
- `index [text]` en `book_audio` puede modelarse como `audioIndex` o `label` para evitar ambiguedad con SQL indexes

Regla obligatoria del esquema:

- `book_page` debe ser `NOT NULL` en todas las tablas hijas del libro: `book_index`, `book_unit`, `book_lesson`, `book_panel`, `book_audio` y `book_image`.

## Swagger y DTOs

- Todo controller HTTP debe usar `@ApiTags`, `@ApiOperation` y responses tipadas.
- Usar DTOs con `class-validator`, `class-transformer` y `@nestjs/swagger`.
- No declarar tipos inline en responses. Crear clases DTO documentadas.
- Para enums, importar el enum Drizzle desde `@db/tables/*.table`.

## Comandos

Permitidos para validar cambios:

- `npm run build`
- `npx tsc --noEmit`
- `npm run lint`
- `npm run test`

No ejecutar comandos destructivos de DB sin pedido explicito:

- `npm run db:reset`
- `npm run db:create`
- `npm run db:seed`
- `npx drizzle-kit generate`

## Path Aliases

Usar los aliases reales del repo:

- `@core/*`
- `@models/*`
- `@db/*`
- `@seeds/*`
- `@modules/*`
- `@controllers/*`
- `@services/*`
- `@repositories/*`
- `@functions/*`
- `@utils/*`
- `@config/*`
