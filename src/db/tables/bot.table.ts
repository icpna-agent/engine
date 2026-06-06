import { pgTable, serial, text, pgEnum, timestamp } from 'drizzle-orm/pg-core';

export const botModel= pgEnum('bot_model', ['gpt', 'gemini']);

export const bot = pgTable('bot', {
  id: serial('id').primaryKey(),
  phone: text('phone').notNull().unique(),
  name: text('name').notNull(),
  prompt: text('prompt').notNull(),
  model: botModel('model').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  deletedAt: timestamp('deleted_at'),
});

export type Bot = typeof bot.$inferSelect;
export type BotInsert = typeof bot.$inferInsert;
export type BotModel = typeof botModel.enumValues[number];