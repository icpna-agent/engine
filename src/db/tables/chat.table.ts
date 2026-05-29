import { pgTable, serial, integer, text, timestamp, boolean, pgEnum } from 'drizzle-orm/pg-core';
import { bot } from './bot.table';
import { user } from './user.table';

export const chatRemote = pgEnum('chat_remote', ['group', 'inbox']);

export const chat = pgTable('chats', {
  id: serial('id').primaryKey(),
  created: timestamp('created').defaultNow(),
  enabled: boolean('enabled').default(true),
  remote: chatRemote('remote').default('inbox').notNull(),
  bot_id: integer('bot_id').notNull().references(() => bot.id),
  user_id: integer('user_id').notNull().references(() => user.id),
});

export type Chat = typeof chat.$inferSelect;
export type ChatInsert = typeof chat.$inferInsert;
export type ChatRemote = typeof chatRemote.enumValues[number];