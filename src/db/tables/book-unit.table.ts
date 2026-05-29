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
    bookPage: integer("book_page").notNull(),
    bookId: integer("book_id")
      .notNull()
      .references(() => book.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at"),
  },
  (t) => [
    index("book_unit_book_id_idx").on(t.bookId),
    index("book_unit_number_idx").on(t.number),
    index("book_unit_created_at_idx").on(t.createdAt),
  ],
);

export type BookUnit = typeof bookUnit.$inferSelect;
export type BookUnitDTO = typeof bookUnit.$inferInsert;
