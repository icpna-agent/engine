import { Injectable } from "@nestjs/common";
import { Context } from "@models/agent.model";
import { MessageRepository } from "@repositories/message.repository";

import { extractMessageId, extractTextBody } from "@functions/meta.function";

@Injectable()
export class ProcessMessagesService {
  constructor(private readonly messageRepository: MessageRepository) {}

  async process(context: Context): Promise<Context> {
    const chatId = context.payload.chat.id;
    const messageId = extractMessageId(context.payload.entry);
    const text = extractTextBody(context.payload.entry) || "";

    await this.messageRepository.create({
      chat_id: chatId,
      code: messageId,
      role: "user",
      text: text,
      type: "text",
    });

    const messages = await this.messageRepository.findByChatIdWithLimit(
      chatId,
      20,
    );

    return {
      payload: { ...context.payload, messages: messages.reverse() },
      result: { ...context.result },
    };
  }
}
