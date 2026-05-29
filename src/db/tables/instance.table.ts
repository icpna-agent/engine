import { pgTable, serial, integer, text, pgEnum } from 'drizzle-orm/pg-core';
import { bot } from './bot.table';

export const whatsappTypeEnum = pgEnum('whatsapp_type', ['business']);
export const providerTypeEnum = pgEnum('provider_type', ['meta']);

export const instance = pgTable('instance', {
  id: serial('id').primaryKey(),
  bot_id: integer('bot_id').notNull().references(() => bot.id),
  whatsapp_type: whatsappTypeEnum('whatsapp_type').notNull(),
  provider_type: providerTypeEnum('provider_type').notNull(),
  business_id: text('business_id').notNull(),
  phone_number_id: text('phone_number_id').notNull(),
  display_phone_number: text('display_phone_number').notNull(),
  waba_id: text('waba_id').notNull(),
  token: text('token').notNull(),
});

export type Instance = typeof instance.$inferSelect;
export type InstanceInsert = typeof instance.$inferInsert;