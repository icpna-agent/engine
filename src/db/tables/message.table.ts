import { pgTable, serial, integer, text, jsonb, timestamp } from 'drizzle-orm/pg-core';
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
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  deletedAt: timestamp('deleted_at'),
});

export type Message = typeof message.$inferSelect;
export type MessageInsert = typeof message.$inferInsert;
