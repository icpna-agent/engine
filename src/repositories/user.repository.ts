import { Injectable } from '@nestjs/common';
import { and, count, desc, eq, ilike, isNull } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { user, type User, type UserInsert } from '@db/tables/user.table';

@Injectable()
export class UserRepository {
  async findAllPaginated(
    page = 1,
    limit = 10,
    filters?: { search?: string; enabled?: boolean },
  ): Promise<{ data: User[]; total: number }> {
    const offset = (page - 1) * limit;
    const conditions = [isNull(user.deletedAt)];

    if (filters?.search) {
      const term = `%${filters.search.trim()}%`;
      conditions.push(ilike(user.phone, term));
    }

    if (filters?.enabled !== undefined) {
      conditions.push(eq(user.enabled, filters.enabled));
    }

    const whereClause = and(...conditions);
    const [{ total }] = await database
      .select({ total: count() })
      .from(user)
      .where(whereClause);
    const data = await database
      .select()
      .from(user)
      .where(whereClause)
      .orderBy(desc(user.id))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findAll(): Promise<User[]> {
    return await database.select().from(user).where(isNull(user.deletedAt));
  }

  async findById(id: number): Promise<User | undefined> {
    const result = await database
      .select()
      .from(user)
      .where(and(eq(user.id, id), isNull(user.deletedAt)));
    return result[0];
  }

  async findByPhone(phone: string): Promise<User | undefined> {
    const result = await database
      .select()
      .from(user)
      .where(and(eq(user.phone, phone), isNull(user.deletedAt)));
    return result[0];
  }

  async create(data: UserInsert): Promise<User> {
    const result = await database.insert(user).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<UserInsert>): Promise<User | undefined> {
    const result = await database
      .update(user)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(user.id, id), isNull(user.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await database
      .update(user)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(user.id, id), isNull(user.deletedAt)));
  }

  isEnabled(u: User): boolean {
    if (!u.enabled) return false;
    const now = new Date();
    if (u.enabledFrom && now < u.enabledFrom) return false;
    if (u.enabledTo && now > u.enabledTo) return false;
    return true;
  }
}
