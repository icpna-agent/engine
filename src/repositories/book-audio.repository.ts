import { Injectable } from "@nestjs/common";
import { and, asc, count, eq, ilike, isNull, or } from "drizzle-orm";
import { database } from "@db/connection.db";
import {
  bookAudio,
  type BookAudio,
  type BookAudioDTO,
} from "@db/tables/book-audio.table";

export type BookAudioFindAllFilters = {
  search?: string;
  bookId?: number;
  bookPage?: number;
};

@Injectable()
export class BookAudioRepository {
  async findAllPaginated(
    page = 1,
    limit = 10,
    filters?: BookAudioFindAllFilters,
  ): Promise<{ data: BookAudio[]; total: number }> {
    const offset = (page - 1) * limit;
    const conditions = [isNull(bookAudio.deletedAt)];

    if (filters?.search) {
      const term = `%${filters.search.trim()}%`;
      conditions.push(
        or(
          ilike(bookAudio.audioIndex, term),
          ilike(bookAudio.transcription, term),
        ),
      );
    }

    if (filters?.bookId) conditions.push(eq(bookAudio.bookId, filters.bookId));
    if (filters?.bookPage)
      conditions.push(eq(bookAudio.bookPage, filters.bookPage));

    const whereClause = and(...conditions);
    const [{ total }] = await database
      .select({ total: count() })
      .from(bookAudio)
      .where(whereClause);
    const data = await database
      .select()
      .from(bookAudio)
      .where(whereClause)
      .orderBy(asc(bookAudio.createdAt))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findOne(id: number): Promise<BookAudio | undefined> {
    const result = await database
      .select()
      .from(bookAudio)
      .where(and(eq(bookAudio.id, id), isNull(bookAudio.deletedAt)));
    return result[0];
  }

  async create(data: BookAudioDTO): Promise<BookAudio> {
    const result = await database.insert(bookAudio).values(data).returning();
    return result[0];
  }

  async update(
    id: number,
    data: Partial<BookAudioDTO>,
  ): Promise<BookAudio | undefined> {
    const result = await database
      .update(bookAudio)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(bookAudio.id, id), isNull(bookAudio.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<BookAudio | undefined> {
    const result = await database
      .update(bookAudio)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(bookAudio.id, id), isNull(bookAudio.deletedAt)))
      .returning();
    return result[0];
  }
}
