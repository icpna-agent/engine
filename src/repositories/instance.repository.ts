import { Injectable } from '@nestjs/common';
import { and, count, desc, eq, ilike, isNull, or } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { instance, type Instance, type InstanceInsert } from '@db/tables/instance.table';

@Injectable()
export class InstanceRepository {
  async findAllPaginated(
    page = 1,
    limit = 10,
    filters?: { search?: string; botId?: number },
  ): Promise<{ data: Instance[]; total: number }> {
    const offset = (page - 1) * limit;
    const conditions = [isNull(instance.deletedAt)];

    if (filters?.search) {
      const term = `%${filters.search.trim()}%`;
      conditions.push(
        or(
          ilike(instance.display_phone_number, term),
          ilike(instance.business_id, term),
          ilike(instance.phone_number_id, term),
          ilike(instance.waba_id, term),
        ),
      );
    }

    if (filters?.botId) {
      conditions.push(eq(instance.bot_id, filters.botId));
    }

    const whereClause = and(...conditions);
    const [{ total }] = await database
      .select({ total: count() })
      .from(instance)
      .where(whereClause);
    const data = await database
      .select()
      .from(instance)
      .where(whereClause)
      .orderBy(desc(instance.id))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findAll(): Promise<Instance[]> {
    return await database.select().from(instance).where(isNull(instance.deletedAt));
  }

  async findById(id: number): Promise<Instance | undefined> {
    const result = await database
      .select()
      .from(instance)
      .where(and(eq(instance.id, id), isNull(instance.deletedAt)));
    return result[0];
  }

  async findByBotId(botId: number): Promise<Instance | undefined> {
    const result = await database
      .select()
      .from(instance)
      .where(and(eq(instance.bot_id, botId), isNull(instance.deletedAt)));
    return result[0];
  }

  async findByPhoneNumberId(phoneNumberId: string): Promise<Instance | undefined> {
    const result = await database
      .select()
      .from(instance)
      .where(and(eq(instance.phone_number_id, phoneNumberId), isNull(instance.deletedAt)));
    return result[0];
  }

  async findByDisplayPhoneNumber(displayPhoneNumber: string): Promise<Instance | undefined> {
    const result = await database
      .select()
      .from(instance)
      .where(and(eq(instance.display_phone_number, displayPhoneNumber), isNull(instance.deletedAt)));
    return result[0];
  }

  async create(data: InstanceInsert): Promise<Instance> {
    const result = await database.insert(instance).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<InstanceInsert>): Promise<Instance | undefined> {
    const result = await database
      .update(instance)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(instance.id, id), isNull(instance.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await database
      .update(instance)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(instance.id, id), isNull(instance.deletedAt)));
  }
}
