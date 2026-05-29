import { Injectable } from "@nestjs/common";
import { and, count, desc, eq, isNull } from "drizzle-orm";
import { database } from "@db/connection.db";
import {
  bookImage,
  type BookImage,
  type BookImageDTO,
} from "@db/tables/book-image.table";

export type BookImageFindAllFilters = {
  bookId?: number;
  bookPage?: number;
};

@Injectable()
export class BookImageRepository {
  async findAllPaginated(
    page = 1,
    limit = 10,
    filters?: BookImageFindAllFilters,
  ): Promise<{ data: BookImage[]; total: number }> {
    const offset = (page - 1) * limit;
    const conditions = [isNull(bookImage.deletedAt)];

    if (filters?.bookId) conditions.push(eq(bookImage.bookId, filters.bookId));
    if (filters?.bookPage)
      conditions.push(eq(bookImage.bookPage, filters.bookPage));

    const whereClause = and(...conditions);
    const [{ total }] = await database
      .select({ total: count() })
      .from(bookImage)
      .where(whereClause);
    const data = await database
      .select()
      .from(bookImage)
      .where(whereClause)
      .orderBy(desc(bookImage.createdAt))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findOne(id: number): Promise<BookImage | undefined> {
    const result = await database
      .select()
      .from(bookImage)
      .where(and(eq(bookImage.id, id), isNull(bookImage.deletedAt)));
    return result[0];
  }

  async create(data: BookImageDTO): Promise<BookImage> {
    const result = await database.insert(bookImage).values(data).returning();
    return result[0];
  }

  async update(
    id: number,
    data: Partial<BookImageDTO>,
  ): Promise<BookImage | undefined> {
    const result = await database
      .update(bookImage)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(bookImage.id, id), isNull(bookImage.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<BookImage | undefined> {
    const result = await database
      .update(bookImage)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(bookImage.id, id), isNull(bookImage.deletedAt)))
      .returning();
    return result[0];
  }
}
