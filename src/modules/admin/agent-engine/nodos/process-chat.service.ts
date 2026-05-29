import { Injectable } from "@nestjs/common";
import { Context } from "@models/agent.model";
import { ChatRepository } from "@repositories/chat.repository";
import { extractSenderPhone } from "@functions/meta.function";

@Injectable()
export class ProcessChatService {
  constructor(private readonly chatRepository: ChatRepository) {}

  async process(context: Context): Promise<Context> {
    const botId = context.payload.bot.id;
    const userId = context.payload.user.id;

    const chat = await this.chatRepository.findOrCreate(botId, userId, "inbox");

    return {
      payload: { ...context.payload, chat: chat },
      result: { ...context.result },
    };
  }
}
