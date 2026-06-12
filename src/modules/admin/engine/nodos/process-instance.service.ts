import { Injectable } from "@nestjs/common";
import { Context } from "@models/agent.model";
import { InstanceRepository } from "@repositories/instance.repository";
import { extractMessageId } from "@functions/meta.function";
import { WhatsAppClient } from "src/wb/messages/whatsapp-cloud-api";

@Injectable()
export class ProcessInstanceService {
  constructor(private readonly instanceRepository: InstanceRepository) { }

  async process(context: Context): Promise<Context> {
    const botId = context.payload.bot?.id;
    const instance = await this.instanceRepository.findByBotId(botId);

    const hasCredentials = instance?.token && instance?.phone_number_id;
    const messageId = extractMessageId(context.payload.entry);

    if (!hasCredentials || !messageId) {
      return {
        payload: { ...context.payload, instance: instance },
        result: { ...context.result },
      };
    }

    try {
      const api = new WhatsAppClient({
        accessToken: instance.token,
        phoneNumberId: instance.phone_number_id,
      });

      await api.sendTypingIndicatorAndReadReceipt({
        messaging_product: "whatsapp",
        status: "read",
        message_id: messageId,
        typing_indicator: {
          type: "text",
        },
      });
    } catch (error) {
      console.error("Error sending typing indicator / read receipt:", error);
    }

    return {
      payload: { ...context.payload, instance: instance },
      result: { ...context.result },
    };
  }
}


