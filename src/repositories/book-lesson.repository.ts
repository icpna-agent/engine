import { Injectable } from "@nestjs/common";
import { and, count, desc, eq, ilike, isNull } from "drizzle-orm";
import { database } from "@db/connection.db";
import { type BookSkill } from "@db/tables/book-index.table";
import {
  bookLesson,
  type BookLesson,
  type BookLessonDTO,
} from "@db/tables/book-lesson.table";

export type BookLessonFindAllFilters = {
  search?: string;
  bookId?: number;
  skill?: BookSkill;
  unitNumber?: number;
};

@Injectable()
export class BookLessonRepository {
  async findAllPaginated(
    page = 1,
    limit = 10,
    filters?: BookLessonFindAllFilters,
  ): Promise<{ data: BookLesson[]; total: number }> {
    const offset = (page - 1) * limit;
    const conditions = [isNull(bookLesson.deletedAt)];

    if (filters?.search)
      conditions.push(ilike(bookLesson.title, `%${filters.search.trim()}%`));
    if (filters?.bookId) conditions.push(eq(bookLesson.bookId, filters.bookId));
    if (filters?.skill) conditions.push(eq(bookLesson.skill, filters.skill));
    if (filters?.unitNumber)
      conditions.push(eq(bookLesson.unitNumber, filters.unitNumber));

    const whereClause = and(...conditions);
    const [{ total }] = await database
      .select({ total: count() })
      .from(bookLesson)
      .where(whereClause);
    const data = await database
      .select()
      .from(bookLesson)
      .where(whereClause)
      .orderBy(desc(bookLesson.createdAt))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findOne(id: number): Promise<BookLesson | undefined> {
    const result = await database
      .select()
      .from(bookLesson)
      .where(and(eq(bookLesson.id, id), isNull(bookLesson.deletedAt)));
    return result[0];
  }

  async create(data: BookLessonDTO): Promise<BookLesson> {
    const result = await database.insert(bookLesson).values(data).returning();
    return result[0];
  }

  async update(
    id: number,
    data: Partial<BookLessonDTO>,
  ): Promise<BookLesson | undefined> {
    const result = await database
      .update(bookLesson)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(bookLesson.id, id), isNull(bookLesson.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<BookLesson | undefined> {
    const result = await database
      .update(bookLesson)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(bookLesson.id, id), isNull(bookLesson.deletedAt)))
      .returning();
    return result[0];
  }
}
