import { Injectable } from "@nestjs/common";
import { Context } from "@models/agent.model";
import {
  SendTextMessagePayload,
  WhatsAppClient,
  WhatsAppCloudMessage,
  SendImageMessageByUrlPayload,
  SendImageMessageByIdPayload,
  SendAudioMessageByUrlPayload,
  SendAudioMessageByIdPayload,
} from "src/wb/messages/whatsapp-cloud-api";

import { MessageRepository } from "@repositories/message.repository";
import { MessageMedia } from "@db/tables/message.table";
import { extractMessageId } from "@functions/meta.function";

@Injectable()
export class ProcessSendService {
  constructor(private readonly messageRepository: MessageRepository) {}

  async process(context: Context): Promise<Context> {
    const api = new WhatsAppClient({
      accessToken: context.payload.instance?.token || "",
      phoneNumberId: context.payload.instance?.phone_number_id || "",
    });

    // Type Guards Estrictos
    function isSendTextMessagePayload(
      template: WhatsAppCloudMessage,
    ): template is SendTextMessagePayload {
      return (
        "type" in template &&
        template.type === "text" &&
        "text" in template &&
        typeof template.text === "object" &&
        template.text !== null &&
        "body" in template.text
      );
    }

    function isSendImageMessageByUrlPayload(
      template: WhatsAppCloudMessage,
    ): template is SendImageMessageByUrlPayload {
      return (
        "type" in template &&
        template.type === "image" &&
        "image" in template &&
        typeof template.image === "object" &&
        template.image !== null &&
        "link" in template.image
      );
    }

    function isSendImageMessageByIdPayload(
      template: WhatsAppCloudMessage,
    ): template is SendImageMessageByIdPayload {
      return (
        "type" in template &&
        template.type === "image" &&
        "image" in template &&
        typeof template.image === "object" &&
        template.image !== null &&
        "id" in template.image
      );
    }

    function isSendAudioMessageByUrlPayload(
      template: WhatsAppCloudMessage,
    ): template is SendAudioMessageByUrlPayload {
      return (
        "type" in template &&
        template.type === "audio" &&
        "audio" in template &&
        typeof template.audio === "object" &&
        template.audio !== null &&
        "link" in template.audio
      );
    }

    function isSendAudioMessageByIdPayload(
      template: WhatsAppCloudMessage,
    ): template is SendAudioMessageByIdPayload {
      return (
        "type" in template &&
        template.type === "audio" &&
        "audio" in template &&
        typeof template.audio === "object" &&
        template.audio !== null &&
        "id" in template.audio
      );
    }

    const templates: WhatsAppCloudMessage[] = context.result?.templates || [];

    for (const template of templates) {
      let mediaData: MessageMedia | null = null;
      let textContent = "";
      let type = "text";

      // 1. Identificar el contenido y tipo para la base de datos
      const templateType = "type" in template ? template.type : undefined;
      switch (templateType) {
        case "text":
          if (isSendTextMessagePayload(template)) {
            textContent = template.text.body;
            type = "text";
          }
          break;
        case "image":
          textContent = "";
          type = "image";
          if (isSendImageMessageByUrlPayload(template)) {
            mediaData = {
              id: "",
              url: template.image.link,
              mimeType: "image/jpeg",
            };
          } else if (isSendImageMessageByIdPayload(template)) {
            mediaData = {
              id: template.image.id,
              url: "",
              mimeType: "image/jpeg",
            };
          }
          break;
        case "audio":
          textContent = "";
          type = "audio";
          if (isSendAudioMessageByUrlPayload(template)) {
            mediaData = {
              id: "",
              url: template.audio.link,
              mimeType: "audio/mpeg",
            };
          } else if (isSendAudioMessageByIdPayload(template)) {
            mediaData = {
              id: template.audio.id,
              url: "",
              mimeType: "audio/mpeg",
            };
          }
          break;
      }

      // 2. Guardar en la base de datos
      const chatId = context.payload.chat?.id;
      const code = extractMessageId(context.payload.entry);
      
      if (chatId) {
        await this.messageRepository.create({
          chat_id: chatId,
          code: code,
          role: "assistant",
          text: textContent,
          type: type,
          media: mediaData,
        });
      }
    }

    return {
      payload: { ...context.payload },
      result: { ...context.result },
    };
  }
}
