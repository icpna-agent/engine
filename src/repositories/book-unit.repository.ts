import { Injectable } from "@nestjs/common";
import { and, asc, count, eq, ilike, isNull } from "drizzle-orm";
import { database } from "@db/connection.db";
import {
  bookUnit,
  type BookUnit,
  type BookUnitDTO,
} from "@db/tables/book-unit.table";

export type BookUnitFindAllFilters = {
  search?: string;
  bookId?: number;
  number?: number;
};

@Injectable()
export class BookUnitRepository {
  async findAllPaginated(
    page = 1,
    limit = 10,
    filters?: BookUnitFindAllFilters,
  ): Promise<{ data: BookUnit[]; total: number }> {
    const offset = (page - 1) * limit;
    const conditions = [isNull(bookUnit.deletedAt)];

    if (filters?.search)
      conditions.push(ilike(bookUnit.title, `%${filters.search.trim()}%`));
    if (filters?.bookId) conditions.push(eq(bookUnit.bookId, filters.bookId));
    if (filters?.number) conditions.push(eq(bookUnit.number, filters.number));

    const whereClause = and(...conditions);
    const [{ total }] = await database
      .select({ total: count() })
      .from(bookUnit)
      .where(whereClause);
    const data = await database
      .select()
      .from(bookUnit)
      .where(whereClause)
      .orderBy(asc(bookUnit.createdAt))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findOne(id: number): Promise<BookUnit | undefined> {
    const result = await database
      .select()
      .from(bookUnit)
      .where(and(eq(bookUnit.id, id), isNull(bookUnit.deletedAt)));
    return result[0];
  }

  async create(data: BookUnitDTO): Promise<BookUnit> {
    const result = await database.insert(bookUnit).values(data).returning();
    return result[0];
  }

  async update(
    id: number,
    data: Partial<BookUnitDTO>,
  ): Promise<BookUnit | undefined> {
    const result = await database
      .update(bookUnit)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(bookUnit.id, id), isNull(bookUnit.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<BookUnit | undefined> {
    const result = await database
      .update(bookUnit)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(bookUnit.id, id), isNull(bookUnit.deletedAt)))
      .returning();
    return result[0];
  }
}
