import { Injectable } from '@nestjs/common';
import { eq, desc } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { message, type Message, type MessageInsert } from '@db/tables/message.table';

@Injectable()
export class MessageRepository {
  async findAll(): Promise<Message[]> {
    return await database.select().from(message);
  }

  async findById(id: number): Promise<Message | undefined> {
    const result = await database.select().from(message).where(eq(message.id, id));
    return result[0];
  }

  async findByCode(code: string): Promise<Message | undefined> {
    const result = await database.select().from(message).where(eq(message.code, code));
    return result[0];
  }

  async findByChatId(chatId: number): Promise<Message[]> {
    return await database.select().from(message).where(eq(message.chat_id, chatId)).orderBy(desc(message.id));
  }

  async findByChatIdWithLimit(chatId: number, limit: number): Promise<Message[]> {
    return await database.select().from(message).where(eq(message.chat_id, chatId)).orderBy(desc(message.id)).limit(limit);
  }

  async create(data: MessageInsert): Promise<Message> {
    const result = await database.insert(message).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<MessageInsert>): Promise<Message | undefined> {
    const result = await database.update(message).set(data).where(eq(message.id, id)).returning();
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await database.delete(message).where(eq(message.id, id));
  }
}
