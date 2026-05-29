import { Injectable } from '@nestjs/common';
import { eq, and, desc } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { chat, ChatRemote, type Chat, type ChatInsert } from '@db/tables/chat.table';

@Injectable()
export class ChatRepository {
  async findAll(): Promise<Chat[]> {
    return await database.select().from(chat);
  }

  async findById(id: number): Promise<Chat | undefined> {
    const result = await database.select().from(chat).where(eq(chat.id, id));
    return result[0];
  }

  async findByBotId(botId: number): Promise<Chat[]> {
    return await database.select().from(chat).where(eq(chat.bot_id, botId));
  }

  async findByUserId(userId: number): Promise<Chat[]> {
    return await database.select().from(chat).where(eq(chat.user_id, userId));
  }

  async findByBotAndUser(botId: number, userId: number): Promise<Chat | undefined> {
    const result = await database.select().from(chat).where(
      and(eq(chat.bot_id, botId), eq(chat.user_id, userId))
    );
    return result[0];
  }

  async findLastByBotAndUser(botId: number, userId: number): Promise<Chat | undefined> {
    const result = await database.select().from(chat).where(
      and(eq(chat.bot_id, botId), eq(chat.user_id, userId))
    ).orderBy(desc(chat.created)).limit(1);
    return result[0];
  }

  async findOrCreate(botId: number, userId: number, remote: ChatRemote): Promise<Chat> {
    let chat = await this.findByBotAndUser(botId, userId);
    
    if (!chat) {
      chat = await this.create({
        bot_id: botId,
        user_id: userId,
        remote: remote,
      });
    }
    
    return chat;
  }

  async create(data: ChatInsert): Promise<Chat> {
    const result = await database.insert(chat).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<ChatInsert>): Promise<Chat | undefined> {
    const result = await database.update(chat).set(data).where(eq(chat.id, id)).returning();
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await database.delete(chat).where(eq(chat.id, id));
  }
}
