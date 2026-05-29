import { pgTable, serial, integer, text, jsonb } from 'drizzle-orm/pg-core';
import { chat } from './chat.table';

export const message = pgTable('message', {
  id: serial('id').primaryKey(),
  code: text('code').notNull(),
  role: text('role').notNull(),
  text: text('text').notNull(),
  type: text('type').notNull(),
  media: jsonb('media'),
  quoted: jsonb('quoted'),
  chat_id: integer('chat_id').notNull().references(() => chat.id),
});

export type Message = typeof message.$inferSelect;
export type MessageInsert = typeof message.$inferInsert;
