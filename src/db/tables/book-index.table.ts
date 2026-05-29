import {
  index,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { book } from "./book.table";

export const bookSkillEnum = pgEnum("book_skill", [
  "grammar",
  "vocabulary",
  "reading",
  "listening",
  "reading_listening",
  "pronunciation",
  "speaking",
  "writing",
  "functional_language",
  "writing_bank",
  "speaking_task",
  "review",
  "bring_it_together",
  "grammar_reference",
  "communication_bank",
  "selected_transcripts",
  "workbook",
]);

export const bookIndex = pgTable(
  "book_index",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    page: text("page").notNull(),
    skill: bookSkillEnum("skill").notNull(),
    bookPage: integer("book_page").notNull(),
    bookId: integer("book_id")
      .notNull()
      .references(() => book.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at"),
  },
  (t) => [
    index("book_index_book_id_idx").on(t.bookId),
    index("book_index_skill_idx").on(t.skill),
    index("book_index_created_at_idx").on(t.createdAt),
  ],
);

export type BookIndex = typeof bookIndex.$inferSelect;
export type BookIndexDTO = typeof bookIndex.$inferInsert;
export type BookSkill = (typeof bookSkillEnum.enumValues)[number];
