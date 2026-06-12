import { boolean, pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  phone: text('phone').notNull().unique(),
  enabled: boolean('enabled').default(true).notNull(),
  enabledFrom: timestamp('enabled_from'),
  enabledTo: timestamp('enabled_to'),
  currentBookId: integer('current_book_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  deletedAt: timestamp('deleted_at'),
});

export type User = typeof user.$inferSelect;
export type UserInsert = typeof user.$inferInsert;