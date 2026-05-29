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
      let textContent = "";
      let type = "text";

      // 1. Identificar el contenido y tipo para la base de datos
      if (isSendTextMessagePayload(template)) {
        textContent = template.text.body;
        type = "text";
      } else if (
        isSendImageMessageByUrlPayload(template) ||
        isSendImageMessageByIdPayload(template)
      ) {
        textContent = "[Imagen]";
        type = "image";
      } else if (
        isSendAudioMessageByUrlPayload(template) ||
        isSendAudioMessageByIdPayload(template)
      ) {
        textContent = "[Mensaje de Audio]";
        type = "audio";
      }

      // 2. Guardar en la base de datos
      const chatId = context.payload.chat?.id;
      if (chatId) {
        await this.messageRepository.create({
          chat_id: chatId,
          code: `AI-${Date.now()}`,
          role: "assistant",
          text: textContent,
          type: type,
          media: type !== "text" ? template : null,
        });
      }

      // 3. Enviar por WhatsApp si no ha sido enviado aún
      if (template._sent) {
        console.log(
          "El mensaje ya fue enviado por una tool, saltando envío...",
        );
        continue;
      }

      if (isSendTextMessagePayload(template)) {
        await api.sendTextMessage(template);
      } else if (isSendImageMessageByUrlPayload(template)) {
        await api.sendImageMessageByUrl(template);
      } else if (isSendImageMessageByIdPayload(template)) {
        await api.sendImageMessageById(template);
      } else if (isSendAudioMessageByUrlPayload(template)) {
        await api.sendAudioMessageByUrl(template);
      } else if (isSendAudioMessageByIdPayload(template)) {
        await api.sendAudioMessageById(template);
      } else {
        console.log(
          "El template introducido no es tratable por los procesadores de fallback conocidos.",
        );
      }
    }

    return {
      payload: { ...context.payload },
      result: { ...context.result },
    };
  }
}
