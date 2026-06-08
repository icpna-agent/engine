import { Injectable } from "@nestjs/common";
import { and, asc, count, eq, ilike, isNull, or } from "drizzle-orm";
import { database } from "@db/connection.db";
import {
  book,
  type Book,
  type BookCefrEquivalent,
  type BookDTO,
  type BookLevel,
  type BookTargetProgram,
} from "@db/tables/book.table";

export type BookFindAllFilters = {
  search?: string;
  level?: BookLevel;
  targetProgram?: BookTargetProgram;
  cefrEquivalent?: BookCefrEquivalent;
  active?: boolean;
};

@Injectable()
export class BookRepository {
  async findAllPaginated(
    page = 1,
    limit = 10,
    filters?: BookFindAllFilters,
  ): Promise<{ data: Book[]; total: number }> {
    const offset = (page - 1) * limit;
    const conditions = [isNull(book.deletedAt)];

    if (filters?.search) {
      const term = `%${filters.search.trim()}%`;
      conditions.push(
        or(
          ilike(book.title, term),
          ilike(book.author, term),
          ilike(book.publisher, term),
        ),
      );
    }

    if (filters?.level) conditions.push(eq(book.level, filters.level));
    if (filters?.targetProgram)
      conditions.push(eq(book.targetProgram, filters.targetProgram));
    if (filters?.cefrEquivalent)
      conditions.push(eq(book.cefrEquivalent, filters.cefrEquivalent));
    if (filters?.active !== undefined)
      conditions.push(eq(book.active, filters.active));

    const whereClause = and(...conditions);
    const [{ total }] = await database
      .select({ total: count() })
      .from(book)
      .where(whereClause);
    const data = await database
      .select()
      .from(book)
      .where(whereClause)
      .orderBy(asc(book.createdAt))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findOne(id: number): Promise<Book | undefined> {
    const result = await database
      .select()
      .from(book)
      .where(and(eq(book.id, id), isNull(book.deletedAt)));
    return result[0];
  }

  async create(data: BookDTO): Promise<Book> {
    const result = await database.insert(book).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<BookDTO>): Promise<Book | undefined> {
    const result = await database
      .update(book)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(book.id, id), isNull(book.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<Book | undefined> {
    const result = await database
      .update(book)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(book.id, id), isNull(book.deletedAt)))
      .returning();
    return result[0];
  }
}
