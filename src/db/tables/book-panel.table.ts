import {
  index,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { book } from "./book.table";

export const bookPanel = pgTable(
  "book_panel",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    theme: text("theme"),
    subTheme: text("sub_theme"),
    instruction: text("instruction"),
    content: text("content"),
    bookPage: integer("book_page").notNull(),
    bookId: integer("book_id")
      .notNull()
      .references(() => book.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at"),
  },
  (t) => [
    index("book_panel_book_id_idx").on(t.bookId),
    index("book_panel_title_idx").using("gin", t.title.op("gin_trgm_ops")),
    index("book_panel_created_at_idx").on(t.createdAt),
  ],
);

export type BookPanel = typeof bookPanel.$inferSelect;
export type BookPanelDTO = typeof bookPanel.$inferInsert;
