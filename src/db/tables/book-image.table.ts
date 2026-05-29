import {
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { book } from "./book.table";

export const bookImage = pgTable(
  "book_image",
  {
    id: serial("id").primaryKey(),
    url: text("url").notNull(),
    bookPage: integer("book_page").notNull(),
    metaMediaId: integer("meta_media_id"),
    bookId: integer("book_id")
      .notNull()
      .references(() => book.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at"),
  },
  (t) => [
    index("book_image_book_id_idx").on(t.bookId),
    index("book_image_book_page_idx").on(t.bookPage),
    index("book_image_created_at_idx").on(t.createdAt),
  ],
);

export type BookImage = typeof bookImage.$inferSelect;
export type BookImageDTO = typeof bookImage.$inferInsert;
