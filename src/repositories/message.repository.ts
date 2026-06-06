import { Injectable } from '@nestjs/common';
import { eq, desc, and, isNull } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { message, type Message, type MessageInsert } from '@db/tables/message.table';

@Injectable()
export class MessageRepository {
  async findAll(): Promise<Message[]> {
    return await database.select().from(message).where(isNull(message.deletedAt));
  }

  async findById(id: number): Promise<Message | undefined> {
    const result = await database
      .select()
      .from(message)
      .where(and(eq(message.id, id), isNull(message.deletedAt)));
    return result[0];
  }

  async findByCode(code: string): Promise<Message | undefined> {
    const result = await database
      .select()
      .from(message)
      .where(and(eq(message.code, code), isNull(message.deletedAt)));
    return result[0];
  }

  async findByChatId(chatId: number): Promise<Message[]> {
    return await database
      .select()
      .from(message)
      .where(and(eq(message.chat_id, chatId), isNull(message.deletedAt)))
      .orderBy(desc(message.id));
  }

  async findByChatIdWithLimit(chatId: number, limit: number): Promise<Message[]> {
    return await database
      .select()
      .from(message)
      .where(and(eq(message.chat_id, chatId), isNull(message.deletedAt)))
      .orderBy(desc(message.id))
      .limit(limit);
  }

  async create(data: MessageInsert): Promise<Message> {
    const result = await database.insert(message).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<MessageInsert>): Promise<Message | undefined> {
    const result = await database
      .update(message)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(message.id, id), isNull(message.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await database
      .update(message)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(message.id, id), isNull(message.deletedAt)));
  }
}
