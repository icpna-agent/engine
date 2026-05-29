---
name: nestjs-create-table
description: |
  Guia para crear tablas Drizzle, repositorios y seeds en erixcel-engine.
  Usar para nuevas entidades, campos, enums, relaciones, indices y estructuras
  de DB. Adaptada al dominio ICPNA Books: book, bookUnit, bookLesson,
  bookPanel, bookAudio, bookImage y bookIndex.
---

# Table Creation Workflow

Flujo para agregar una entidad persistente:

1. Definir tabla Drizzle.
2. Crear repository.
3. Crear seed si aplica.
4. Registrar tabla en `connection.db.ts`.
5. Registrar seed en `seed.db.ts` si aplica.

## 1. Table Pattern

Ejemplo base para `book.table.ts`:

```typescript
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const bookLevelEnum = pgEnum("book_level", [
  "basic",
  "intermediate",
  "advanced",
]);
export const bookLanguageEnum = pgEnum("book_language", ["english"]);
export const bookTargetProgramEnum = pgEnum("book_target_program", [
  "kids",
  "juniors",
  "adults",
]);
export const bookCefrEquivalentEnum = pgEnum("book_cefr_equivalent", [
  "a1",
  "a2",
  "b1",
  "b2",
  "c1",
]);

export const book = pgTable(
  "book",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    author: text("author"),
    publisher: text("publisher"),
    institution: text("institution").default("ICPNA").notNull(),
    edition: text("edition"),
    level: bookLevelEnum("level").notNull(),
    subLevel: integer("sub_level"),
    language: bookLanguageEnum("language").default("english").notNull(),
    targetProgram: bookTargetProgramEnum("target_program").notNull(),
    cefrEquivalent: bookCefrEquivalentEnum("cefr_equivalent"),
    active: boolean("active").default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at"),
  },
  (t) => [
    index("book_created_at_idx").on(t.createdAt),
    index("book_title_idx").using("gin", t.title.op("gin_trgm_ops")),
    uniqueIndex("book_title_edition_unique_active_idx")
      .on(t.title, t.edition)
      .where(sql`${t.deletedAt} IS NULL`),
  ],
);

export type Book = typeof book.$inferSelect;
export type BookDTO = typeof book.$inferInsert;
```

## 2. Child Table Pattern

Ejemplo para `book-unit.table.ts`:

```typescript
import {
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { book } from "./book.table";

export const bookUnit = pgTable(
  "book_unit",
  {
    id: serial("id").primaryKey(),
    number: integer("number").notNull(),
    title: text("title").notNull(),
    grammar: text("grammar").array(),
    vocabulary: text("vocabulary").array(),
    readingListening: text("reading_listening").array(),
    pronunciation: text("pronunciation").array(),
    bookPage: integer("book_page"),
    bookId: integer("book_id")
      .notNull()
      .references(() => book.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at"),
  },
  (t) => [
    index("book_unit_book_id_idx").on(t.bookId),
    index("book_unit_created_at_idx").on(t.createdAt),
  ],
);

export type BookUnit = typeof bookUnit.$inferSelect;
export type BookUnitDTO = typeof bookUnit.$inferInsert;
```

## 3. ICPNA Tables Cheat Sheet

Use these normalized field names from the diagram:

### book

- `id`
- `title`
- `author`
- `publisher`
- `institution`
- `edition`
- `level`
- `subLevel`
- `language`
- `targetProgram`
- `cefrEquivalent`
- `active`
- `createdAt`
- `updatedAt`
- `deletedAt`

### bookIndex (`book_index`)

- `id`
- `title`
- `page`
- `skill`
- `bookPage`
- `bookId`
- timestamps

`bookPage` is required and maps to a `book_page` NOT NULL column.

### bookUnit (`book_unit`)

- `id`
- `number`
- `title`
- `grammar`
- `vocabulary`
- `readingListening`
- `pronunciation`
- `bookPage`
- `bookId`
- timestamps

`bookPage` is required and maps to a `book_page` NOT NULL column.

### bookLesson (`book_lesson`)

- `id`
- `unitNumber`
- `title`
- `skill`
- `topic`
- `activityNumber`
- `letterNumber`
- `instruction`
- `content`
- `bookPage`
- `bookId`
- timestamps

`bookPage` is required and maps to a `book_page` NOT NULL column.

### bookPanel (`book_panel`)

- `id`
- `title`
- `theme`
- `subTheme`
- `instruction`
- `content`
- `bookPage`
- `bookId`
- timestamps

`bookPage` is required and maps to a `book_page` NOT NULL column.

### bookAudio (`book_audio`)

- `id`
- `url`
- `audioIndex` or `label`
- `transcription`
- `bookPage`
- `metaMediaId`
- `bookId`
- timestamps

`bookPage` is required and maps to a `book_page` NOT NULL column.

### bookImage (`book_image`)

- `id`
- `url`
- `bookPage`
- `metaMediaId`
- `bookId`
- timestamps

`bookPage` is required and maps to a `book_page` NOT NULL column.

## 4. Repository Pattern

```typescript
import { Injectable } from "@nestjs/common";
import { and, count, desc, eq, ilike, isNull, or } from "drizzle-orm";
import { database } from "@db/connection.db";
import { book, type BookDTO } from "@db/tables/book.table";

@Injectable()
export class BookRepository {
  async findAllPaginated(page = 1, limit = 10, filters?: { search?: string }) {
    const offset = (page - 1) * limit;
    const conditions = [isNull(book.deletedAt)];

    if (filters?.search) {
      const term = `%${filters.search.trim()}%`;
      conditions.push(or(ilike(book.title, term), ilike(book.author, term)));
    }

    const whereClause = and(...conditions);

    const [{ total }] = await database
      .select({ total: count() })
      .from(book)
      .where(whereClause);
    const data = await database
      .select()
      .from(book)
      .where(whereClause)
      .orderBy(desc(book.createdAt))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findOne(id: number) {
    const result = await database
      .select()
      .from(book)
      .where(and(eq(book.id, id), isNull(book.deletedAt)));
    return result[0];
  }

  async create(data: BookDTO) {
    const result = await database.insert(book).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<BookDTO>) {
    const result = await database
      .update(book)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(book.id, id), isNull(book.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number) {
    const result = await database
      .update(book)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(book.id, id), isNull(book.deletedAt)))
      .returning();
    return result[0];
  }
}
```

## 5. Seed Pattern

```typescript
import { database } from "@db/connection.db";
import { book } from "@db/tables/book.table";

export async function seedBooks() {
  const books = await database
    .insert(book)
    .values([
      {
        title: "ICPNA Studio Book 1",
        institution: "ICPNA",
        level: "basic",
        targetProgram: "adults",
        language: "english",
        active: true,
      },
    ])
    .returning();

  console.log("Books seeded");
  return books;
}
```
