import { Injectable } from '@nestjs/common';
import { and, eq, isNull } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { user, type User, type UserInsert } from '@db/tables/user.table';

@Injectable()
export class UserRepository {
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
