import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { user, type User, type UserInsert } from '@db/tables/user.table';

@Injectable()
export class UserRepository {
  async findAll(): Promise<User[]> {
    return await database.select().from(user);
  }

  async findById(id: number): Promise<User | undefined> {
    const result = await database.select().from(user).where(eq(user.id, id));
    return result[0];
  }

  async findByPhone(phone: string): Promise<User | undefined> {
    const result = await database.select().from(user).where(eq(user.phone, phone));
    return result[0];
  }

  async create(data: UserInsert): Promise<User> {
    const result = await database.insert(user).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<UserInsert>): Promise<User | undefined> {
    const result = await database.update(user).set(data).where(eq(user.id, id)).returning();
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await database.delete(user).where(eq(user.id, id));
  }
}
