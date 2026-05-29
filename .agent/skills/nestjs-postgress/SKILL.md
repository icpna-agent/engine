---
name: nestjs-postgress
description: |
  Guia para PostgreSQL y Drizzle en erixcel-engine. Usar cuando se configure
  conexion, schema, scripts DB, seeds, tablas o infraestructura de base de datos.
  No ejecutar comandos destructivos salvo pedido explicito del usuario.
---

# PostgreSQL & Drizzle - Erixcel Engine

El proyecto ya usa Drizzle ORM con PostgreSQL. Esta skill sirve para mantener o extender esa capa.

## Dependencias Base

El proyecto ya incluye:

```bash
drizzle-orm
drizzle-kit
postgres
pg
dotenv
```

No agregar otro ORM.

## Configuracion Existente

Archivos relevantes:

```text
drizzle.config.ts
src/db/config.db.ts
src/db/connection.db.ts
src/db/create.db.ts
src/db/reset.db.ts
src/db/seed.db.ts
src/db/tables/*.table.ts
```

`src/db/connection.db.ts` debe importar cada tabla y registrarla en `schema`:

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { dbConfig } from '@db/config.db';

import { book } from '@db/tables/book.table';
import { bookUnit } from '@db/tables/book-unit.table';

const pool = new Pool(dbConfig);

const schema = {
  book,
  bookUnit,
};

export const database = drizzle(pool, { schema });
```

## Reglas De DB

- Tablas PostgreSQL en singular y snake_case.
- Variables Drizzle en singular camelCase.
- Columnas PostgreSQL en snake_case.
- Keys TypeScript en camelCase.
- Toda tabla nueva de dominio debe incluir:
  - `createdAt: timestamp('created_at').defaultNow().notNull()`
  - `updatedAt: timestamp('updated_at').defaultNow().notNull()`
  - `deletedAt: timestamp('deleted_at')`
- Indexar foreign keys.
- Usar `uniqueIndex(...).where(sql\`${t.deletedAt} IS NULL\`)` cuando un campo deba ser unico solo entre registros activos.

## Dominio ICPNA Books

Tablas esperadas desde el diagrama:

- `book`
- `book_index`
- `book_unit`
- `book_lesson`
- `book_panel`
- `book_audio`
- `book_image`

Relaciones:

- `book_index.book_id -> book.id`
- `book_unit.book_id -> book.id`
- `book_lesson.book_id -> book.id`
- `book_panel.book_id -> book.id`
- `book_audio.book_id -> book.id`
- `book_image.book_id -> book.id`

## Comandos

Permitidos para validar:

```bash
npm run build
npx tsc --noEmit
npm run lint
npm run test
```

No ejecutar sin pedido explicito:

```bash
npm run db:reset
npm run db:create
npm run db:seed
npx drizzle-kit generate
```

## Seeds

Los seeds viven en `src/seeds/*.seed.ts` y se registran en `src/db/seed.db.ts`.

Orden sugerido para el dominio ICPNA:

```text
book
bookIndex
bookUnit
bookLesson
bookPanel
bookAudio
bookImage
```
