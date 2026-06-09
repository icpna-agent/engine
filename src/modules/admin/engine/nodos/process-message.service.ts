import { Injectable } from "@nestjs/common";
import { Context } from "@models/agent.model";
import { MessageRepository } from "@repositories/message.repository";

import { extractMessageId, extractTextBody, extractMessageType, extractAudioData, extractImageData, extractImageCaption } from "@functions/meta.function";
import { MessageMedia } from "@db/tables/message.table";

@Injectable()
export class ProcessMessagesService {
  constructor(private readonly messageRepository: MessageRepository) {}

  async process(context: Context): Promise<Context> {
    const chatId = context.payload.chat.id;
    const entry = context.payload.entry;
    const messageId = extractMessageId(entry);

    let text = "";
    let type = "text";
    let media: MessageMedia | null = null;

    const messageType = extractMessageType(entry);

    switch (messageType) {
      case "audio":
        type = "audio";
        text = "[Mensaje de Voz]";
        media = extractAudioData(entry);
        break;
      case "image":
        type = "image";
        text = extractImageCaption(entry) || "[Imagen]";
        media = extractImageData(entry);
        break;
      default:
        text = extractTextBody(entry) || "";
        break;
    }

    await this.messageRepository.create({
      chat_id: chatId,
      code: messageId,
      role: "user",
      text: text,
      type: type,
      media: media || undefined,
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
