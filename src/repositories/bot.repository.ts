import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { bot, type Bot, type BotInsert } from '@db/tables/bot.table';

@Injectable()
export class BotRepository {
  async findAll(): Promise<Bot[]> {
    return await database.select().from(bot);
  }

  async findById(id: number): Promise<Bot | undefined> {
    const result = await database.select().from(bot).where(eq(bot.id, id));
    return result[0];
  }

  async findByPhone(phone: string): Promise<Bot | undefined> {
    const result = await database.select().from(bot).where(eq(bot.phone, phone));
    return result[0];
  }

  async create(data: BotInsert): Promise<Bot> {
    const result = await database.insert(bot).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<BotInsert>): Promise<Bot | undefined> {
    const result = await database.update(bot).set(data).where(eq(bot.id, id)).returning();
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await database.delete(bot).where(eq(bot.id, id));
  }
}
