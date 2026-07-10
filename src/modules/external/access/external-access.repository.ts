import { Injectable, NotFoundException } from "@nestjs/common";
import { and, eq, isNull } from "drizzle-orm";
import { database } from "@db/connection.db";
import { book, type Book } from "@db/tables/book.table";
import { user, type User, type UserInsert } from "@db/tables/user.table";

@Injectable()
export class ExternalAccessRepository {
  async findIntermediateFiveBook(): Promise<Book> {
    const [defaultBook] = await database
      .select()
      .from(book)
      .where(
        and(
          eq(book.level, "intermediate"),
          eq(book.subLevel, 5),
          eq(book.edition, "Intermediate 5"),
          isNull(book.deletedAt),
        ),
      );

    if (!defaultBook) {
      throw new NotFoundException('Default book "Intermediate 5" was not found');
    }

    return defaultBook;
  }

  async findActiveUserByPhone(phone: string): Promise<User | undefined> {
    const [existingUser] = await database
      .select()
      .from(user)
      .where(and(eq(user.phone, phone), isNull(user.deletedAt)));

    return existingUser;
  }

  async createUser(data: UserInsert): Promise<User> {
    const [created] = await database.insert(user).values(data).returning();
    return created;
  }

  async updateUser(id: number, data: Partial<UserInsert>): Promise<User> {
    const [updated] = await database
      .update(user)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(user.id, id), isNull(user.deletedAt)))
      .returning();

    return updated;
  }
}

