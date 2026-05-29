import {
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { book } from "./book.table";

export const bookAudio = pgTable(
  "book_audio",
  {
    id: serial("id").primaryKey(),
    url: text("url").notNull(),
    audioIndex: text("index").notNull(),
    transcription: text("transcription"),
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
    index("book_audio_book_id_idx").on(t.bookId),
    index("book_audio_index_idx").on(t.audioIndex),
    index("book_audio_created_at_idx").on(t.createdAt),
  ],
);

export type BookAudio = typeof bookAudio.$inferSelect;
export type BookAudioDTO = typeof bookAudio.$inferInsert;
