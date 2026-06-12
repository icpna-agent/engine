import { Injectable } from '@nestjs/common';
import { eq, and, desc, isNull } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { chat, ChatRemote, type Chat, type ChatInsert } from '@db/tables/chat.table';

@Injectable()
export class ChatRepository {
  async findAll(): Promise<Chat[]> {
    return await database.select().from(chat).where(isNull(chat.deletedAt));
  }

  async findById(id: number): Promise<Chat | undefined> {
    const result = await database
      .select()
      .from(chat)
      .where(and(eq(chat.id, id), isNull(chat.deletedAt)));
    return result[0];
  }

  async findByBotId(botId: number): Promise<Chat[]> {
    return await database
      .select()
      .from(chat)
      .where(and(eq(chat.bot_id, botId), isNull(chat.deletedAt)));
  }

  async findByUserId(userId: number): Promise<Chat[]> {
    return await database
      .select()
      .from(chat)
      .where(and(eq(chat.user_id, userId), isNull(chat.deletedAt)));
  }

  async findLastByUserId(userId: number): Promise<Chat | undefined> {
    const result = await database
      .select()
      .from(chat)
      .where(and(eq(chat.user_id, userId), isNull(chat.deletedAt)))
      .orderBy(desc(chat.createdAt))
      .limit(1);
    return result[0];
  }

  async findByBotAndUser(botId: number, userId: number): Promise<Chat | undefined> {
    const result = await database
      .select()
      .from(chat)
      .where(and(eq(chat.bot_id, botId), eq(chat.user_id, userId), isNull(chat.deletedAt)));
    return result[0];
  }

  async findLastByBotAndUser(botId: number, userId: number): Promise<Chat | undefined> {
    const result = await database
      .select()
      .from(chat)
      .where(and(eq(chat.bot_id, botId), eq(chat.user_id, userId), isNull(chat.deletedAt)))
      .orderBy(desc(chat.createdAt))
      .limit(1);
    return result[0];
  }

  async findOrCreate(botId: number, userId: number, remote: ChatRemote): Promise<Chat> {
    let lastChat = await this.findLastByBotAndUser(botId, userId);
    
    if (!lastChat || lastChat.enabled === false) {
      lastChat = await this.create({
        bot_id: botId,
        user_id: userId,
        remote: remote,
        enabled: true,
      });
    }
    
    return lastChat;
  }

  async create(data: ChatInsert): Promise<Chat> {
    const result = await database.insert(chat).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<ChatInsert>): Promise<Chat | undefined> {
    const result = await database
      .update(chat)
      .set({ ...data, updatedAt: new Date() })
      .where(and(eq(chat.id, id), isNull(chat.deletedAt)))
      .returning();
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await database
      .update(chat)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(chat.id, id), isNull(chat.deletedAt)));
  }
}
