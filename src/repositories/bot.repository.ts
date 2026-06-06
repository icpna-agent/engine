import { Injectable } from '@nestjs/common';
import { and, count, desc, eq, ilike, isNull, or } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { bot, type Bot, type BotInsert, type BotModel } from '@db/tables/bot.table';

@Injectable()
export class BotRepository {
  async findAllPaginated(
    page = 1,
    limit = 10,
    filters?: { search?: string; model?: BotModel },
  ): Promise<{ data: Bot[]; total: number }> {
    const offset = (page - 1) * limit;
    const conditions = [isNull(bot.deletedAt)];

    if (filters?.search) {
      const term = `%${filters.search.trim()}%`;
      conditions.push(
        or(
          ilike(bot.name, term),
          ilike(bot.phone, term),
          ilike(bot.prompt, term),
        ),
      );
    }

    if (filters?.model) {
      conditions.push(eq(bot.model, filters.model));
    }

    const whereClause = and(...conditions);
    const [{ total }] = await database
      .select({ total: count() })
      .from(bot)
      .where(whereClause);
    const data = await database
      .select()
      .from(bot)
      .where(whereClause)
      .orderBy(desc(bot.id))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findAll(): Promise<Bot[]> {
    return await database.select().from(bot).where(isNull(bot.deletedAt));
  }

  async findById(id: number): Promise<Bot | undefined> {
    const result = await database
      .select()
      .from(bot)
      .where(and(eq(bot.id, id), isNull(bot.deletedAt)));
    return result[0];
  }

  async findByPhone(phone: string): Promise<Bot | undefined> {
    const result = await database
      .select()
      .from(bot)
      .where(and(eq(bot.phone, phone), isNull(bot.deletedAt)));
    return result[0];
  }

  async create(data: BotInsert): Promise<Bot> {
    const result = await database.insert(bot).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<BotInsert>): Promise<Bot | undefined> {
    const result = await database
      .update(bot)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(bot.id, id), isNull(bot.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await database
      .update(bot)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(bot.id, id), isNull(bot.deletedAt)));
  }
}
