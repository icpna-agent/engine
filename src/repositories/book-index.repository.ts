import { Injectable } from "@nestjs/common";
import { and, asc, count, eq, ilike, isNull } from "drizzle-orm";
import { database } from "@db/connection.db";
import {
  bookIndex,
  type BookIndex,
  type BookIndexDTO,
  type BookSkill,
} from "@db/tables/book-index.table";

export type BookIndexFindAllFilters = {
  search?: string;
  bookId?: number;
  skill?: BookSkill;
};

@Injectable()
export class BookIndexRepository {
  async findAllPaginated(
    page = 1,
    limit = 10,
    filters?: BookIndexFindAllFilters,
  ): Promise<{ data: BookIndex[]; total: number }> {
    const offset = (page - 1) * limit;
    const conditions = [isNull(bookIndex.deletedAt)];

    if (filters?.search)
      conditions.push(ilike(bookIndex.title, `%${filters.search.trim()}%`));
    if (filters?.bookId) conditions.push(eq(bookIndex.bookId, filters.bookId));
    if (filters?.skill) conditions.push(eq(bookIndex.skill, filters.skill));

    const whereClause = and(...conditions);
    const [{ total }] = await database
      .select({ total: count() })
      .from(bookIndex)
      .where(whereClause);
    const data = await database
      .select()
      .from(bookIndex)
      .where(whereClause)
      .orderBy(asc(bookIndex.createdAt))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findOne(id: number): Promise<BookIndex | undefined> {
    const result = await database
      .select()
      .from(bookIndex)
      .where(and(eq(bookIndex.id, id), isNull(bookIndex.deletedAt)));
    return result[0];
  }

  async create(data: BookIndexDTO): Promise<BookIndex> {
    const result = await database.insert(bookIndex).values(data).returning();
    return result[0];
  }

  async update(
    id: number,
    data: Partial<BookIndexDTO>,
  ): Promise<BookIndex | undefined> {
    const result = await database
      .update(bookIndex)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(bookIndex.id, id), isNull(bookIndex.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<BookIndex | undefined> {
    const result = await database
      .update(bookIndex)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(bookIndex.id, id), isNull(bookIndex.deletedAt)))
      .returning();
    return result[0];
  }
}
