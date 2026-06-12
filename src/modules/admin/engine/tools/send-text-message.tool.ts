import { tool } from "@langchain/core/tools";
import {
  WhatsAppClient,
  WhatsAppCloudMessage,
  SendTextMessagePayload,
} from "src/wb/messages/whatsapp-cloud-api";
import { z } from "zod";

export const createSendTextMessageTool = (
  accessToken: string,
  phoneNumberId: string,
  phone: string,
  templates: WhatsAppCloudMessage[],
) => {
  return tool(
    async ({ text }) => {
      console.log(`🔧 Running tool: send_text_message | params: text="${text}"`);
      const whatsappClient = new WhatsAppClient({
        accessToken,
        phoneNumberId,
      });

      try {
        const payload: SendTextMessagePayload = {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: phone,
          type: "text",
          text: {
            preview_url: false,
            body: text,
          },
        };

        // Guardamos en los templates
        templates.push({ ...payload, _sent: true });

        // Enviamos el mensaje por WhatsApp
        await whatsappClient.sendTextMessage(payload);

        return `Texto enviado exitosamente por WhatsApp al usuario de número ${phone}`;
      } catch (error) {
        console.error("Error en flujo de enviar texto:", error);
        return `Hubo un error al intentar enviar el mensaje de texto.`;
      }
    },
    {
      name: "send_text_message",
      description: "Envía un mensaje de texto plano por WhatsApp al usuario.",
      schema: z.object({
        text: z
          .string()
          .describe("El mensaje de texto que se enviará por WhatsApp"),
      }),
    },
  );
};
