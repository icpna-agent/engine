import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  phone: text('phone').notNull().unique(),
});

export type User = typeof user.$inferSelect;
export type UserInsert = typeof user.$inferInsert;