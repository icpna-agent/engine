---
trigger: always_on
---

# Reglas Del Proyecto - Erixcel Engine

## Idioma Y Nombres

- El codigo, tablas, columnas, enums, variables, clases y archivos tecnicos deben estar en ingles.
- Los textos para usuarios, prompts, mensajes de WhatsApp y documentacion funcional pueden estar en espanol cuando el contexto ICPNA lo requiera.
- Usar TypeScript y convenciones NestJS.
- Usar Drizzle ORM con PostgreSQL. No usar Prisma ni TypeORM.

## Arquitectura De Capas

El proyecto sigue una arquitectura por capas:

1. **Table/Model** (`src/db/tables/*.table.ts`)
   - Define schemas con Drizzle ORM (`pgTable`, `pgEnum`).
   - Exporta tabla singular en camelCase, enums y tipos inferidos.
   - Keys TypeScript en camelCase y columnas PostgreSQL en snake_case.
   - Tablas nuevas de dominio deben incluir `createdAt`, `updatedAt`, `deletedAt`.

2. **Repository** (`src/repositories/*.repository.ts`)
   - Unico lugar para consultas Drizzle (`select`, `insert`, `update`, `delete`).
   - Implementa CRUD y paginacion cuando aplique.
   - Filtra soft delete con `isNull(table.deletedAt)` cuando la tabla tenga `deletedAt`.
   - Es `@Injectable()`.

3. **Service** (`src/modules/**/*.service.ts` o `src/features/**/*.service.ts`)
   - Contiene logica de negocio y transformaciones.
   - Inyecta repositories o features necesarias.
   - Nunca accede directo a `database`.
   - Lanza excepciones HTTP cuando corresponde.

4. **Controller** (`src/modules/**/*.controller.ts`)
   - Solo rutas, parametros, DTOs y documentacion Swagger.
   - Delega al service.
   - Usa `@ApiTags`, `@ApiOperation` y responses tipadas.

## Dominio ICPNA Books

Para registrar libros ICPNA, partir de estas entidades:

- `book`
- `bookIndex` con tabla `book_index`
- `bookUnit` con tabla `book_unit`
- `bookLesson` con tabla `book_lesson`
- `bookPanel` con tabla `book_panel`
- `bookAudio` con tabla `book_audio`
- `bookImage` con tabla `book_image`

Relaciones esperadas:

- `book` tiene muchos `bookIndex`, `bookUnit`, `bookLesson`, `bookPanel`, `bookAudio`, `bookImage`.
- Cada entidad hija contiene `bookId`.
- Cada entidad hija debe tener `bookPage` mapeado a `book_page` y debe ser obligatorio (`NOT NULL`).

Normalizaciones al pasar del diagrama a codigo:

- `tittle` debe ser `title`.
- `gramar` debe ser `grammar`.
- `url` debe ser `text` si almacena una URL.
- Evitar nombrar una tabla solo `index`; usar `book_index`.
- Evitar una propiedad llamada solo `index` en `bookAudio` si representa una etiqueta de audio; preferir `audioIndex` o `label`.

Enums sugeridos para el dominio:

- `bookLevelEnum`
- `bookLanguageEnum`
- `bookTargetProgramEnum`
- `bookCefrEquivalentEnum`
- `bookSkillEnum`
- `lessonSkillEnum`

Los valores exactos deben definirse cuando el usuario confirme el catalogo ICPNA real.

## DTOs

- `*-create.dto.ts`: datos de creacion, validacion y Swagger.
- `*-update.dto.ts`: extiende `PartialType(CreateDto)` desde `@nestjs/swagger`.
- `*-list.dto.ts`: `FiltersDto`, `ListItemDto`, `PaginationMetaDto`, `ListDto`.
- `*-result.dto.ts`: respuesta detallada de una entidad.
- Siempre usar `@ApiProperty()` o `@ApiPropertyOptional()`.
- No usar DTOs inline en controllers.

## Base De Datos

- Tablas en singular y snake_case en PostgreSQL.
- Variables Drizzle en singular camelCase.
- Foreign keys en camelCase (`bookId`) mapeadas a snake_case (`book_id`).
- Indexar FKs y campos usados para busqueda/ordenamiento.
- Usar unique indexes parciales con `deletedAt IS NULL` cuando aplique.

## Path Aliases

Usar aliases reales de `tsconfig.json`:

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

## Seeds

- Ubicacion: `src/seeds/*.seed.ts`.
- Exportar funciones `seedBooks`, `seedUnits`, etc.
- Registrar en `src/db/seed.db.ts` en orden de dependencia.
- No ejecutar seeds sin pedido explicito del usuario.

## Prohibiciones

- No acceder a DB desde services o controllers.
- No mezclar ORM.
- No crear nombres de dominio en espanol para tablas o columnas nuevas.
- No crear controladores sin Swagger.
- No ejecutar comandos destructivos de DB sin pedido explicito:
  - `npm run db:reset`
  - `npm run db:create`
  - `npm run db:seed`
  - `npx drizzle-kit generate`
