import { Injectable } from "@nestjs/common";
import { and, asc, count, eq, ilike, isNull, or } from "drizzle-orm";
import { database } from "@db/connection.db";
import {
  bookPanel,
  type BookPanel,
  type BookPanelDTO,
} from "@db/tables/book-panel.table";

export type BookPanelFindAllFilters = {
  search?: string;
  bookId?: number;
};

@Injectable()
export class BookPanelRepository {
  async findAllPaginated(
    page = 1,
    limit = 10,
    filters?: BookPanelFindAllFilters,
  ): Promise<{ data: BookPanel[]; total: number }> {
    const offset = (page - 1) * limit;
    const conditions = [isNull(bookPanel.deletedAt)];

    if (filters?.search) {
      const term = `%${filters.search.trim()}%`;
      conditions.push(
        or(
          ilike(bookPanel.title, term),
          ilike(bookPanel.theme, term),
          ilike(bookPanel.subTheme, term),
        ),
      );
    }

    if (filters?.bookId) conditions.push(eq(bookPanel.bookId, filters.bookId));

    const whereClause = and(...conditions);
    const [{ total }] = await database
      .select({ total: count() })
      .from(bookPanel)
      .where(whereClause);
    const data = await database
      .select()
      .from(bookPanel)
      .where(whereClause)
      .orderBy(asc(bookPanel.createdAt))
      .limit(limit)
      .offset(offset);

    return { data, total: Number(total) };
  }

  async findOne(id: number): Promise<BookPanel | undefined> {
    const result = await database
      .select()
      .from(bookPanel)
      .where(and(eq(bookPanel.id, id), isNull(bookPanel.deletedAt)));
    return result[0];
  }

  async create(data: BookPanelDTO): Promise<BookPanel> {
    const result = await database.insert(bookPanel).values(data).returning();
    return result[0];
  }

  async update(
    id: number,
    data: Partial<BookPanelDTO>,
  ): Promise<BookPanel | undefined> {
    const result = await database
      .update(bookPanel)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(bookPanel.id, id), isNull(bookPanel.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<BookPanel | undefined> {
    const result = await database
      .update(bookPanel)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(bookPanel.id, id), isNull(bookPanel.deletedAt)))
      .returning();
    return result[0];
  }
}
