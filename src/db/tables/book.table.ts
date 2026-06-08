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
  "c2",
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
    urlPreview: text("url_preview"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at"),
  },
  (t) => [
    index("book_title_idx").using("gin", t.title.op("gin_trgm_ops")),
    index("book_created_at_idx").on(t.createdAt),
    uniqueIndex("book_title_edition_unique_active_idx")
      .on(t.title, t.edition)
      .where(sql`${t.deletedAt} IS NULL`),
  ],
);

export type Book = typeof book.$inferSelect;
export type BookDTO = typeof book.$inferInsert;
export type BookLevel = (typeof bookLevelEnum.enumValues)[number];
export type BookLanguage = (typeof bookLanguageEnum.enumValues)[number];
export type BookTargetProgram = (typeof bookTargetProgramEnum.enumValues)[number];
export type BookCefrEquivalent = (typeof bookCefrEquivalentEnum.enumValues)[number];
