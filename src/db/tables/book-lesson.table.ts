import {
  index,
  integer,
  jsonb,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { book } from "./book.table";
import { bookSkillEnum } from "./book-index.table";

export const bookLesson = pgTable(
  "book_lesson",
  {
    id: serial("id").primaryKey(),
    unitNumber: numeric("unit_number", {
      mode: "number",
      precision: 4,
      scale: 1,
    }).notNull(),
    title: text("title").notNull(),
    skill: bookSkillEnum("skill").notNull(),
    topic: text("topic"),
    activityNumber: integer("activity_number"),
    letterNumber: text("letter_number"),
    instruction: text("instruction"),
    content: jsonb("content").$type<Record<string, unknown>>(),
    bookPage: integer("book_page").notNull(),
    bookId: integer("book_id")
      .notNull()
      .references(() => book.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at"),
  },
  (t) => [
    index("book_lesson_book_id_idx").on(t.bookId),
    index("book_lesson_skill_idx").on(t.skill),
    index("book_lesson_unit_number_idx").on(t.unitNumber),
    index("book_lesson_created_at_idx").on(t.createdAt),
  ],
);

export type BookLesson = typeof bookLesson.$inferSelect;
export type BookLessonDTO = typeof bookLesson.$inferInsert;
