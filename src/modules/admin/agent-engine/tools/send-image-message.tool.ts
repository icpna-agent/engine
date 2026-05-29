import { tool } from "@langchain/core/tools";
import {
  WhatsAppClient,
  WhatsAppCloudMessage,
  SendImageMessageByUrlPayload,
} from "src/wb/messages/whatsapp-cloud-api";
import { z } from "zod";

export const createSendImageMessageTool = (
  accessToken: string,
  phoneNumberId: string,
  phone: string,
  templates: WhatsAppCloudMessage[],
) => {
  return tool(
    async ({ url }) => {
      const whatsappClient = new WhatsAppClient({
        accessToken,
        phoneNumberId,
      });

      try {
        const payload: SendImageMessageByUrlPayload = {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: phone,
          type: "image",
          image: {
            link: url,
          },
        };

        // Guardamos en los templates
        templates.push({ ...payload, _sent: true });

        // Enviamos el mensaje por WhatsApp
        await whatsappClient.sendImageMessageByUrl(payload);

        return `Imagen enviada exitosamente por WhatsApp al usuario de número ${phone}`;
      } catch (error) {
        console.error("Error en flujo de enviar imagen:", error);
        return `Hubo un error al intentar enviar la imagen.`;
      }
    },
    {
      name: "send_image_message",
      description:
        "Envía una imagen por WhatsApp al usuario a través de una URL pública.",
      schema: z.object({
        url: z
          .string()
          .url()
          .describe("La URL pública de la imagen que se enviará por WhatsApp"),
      }),
    },
  );
};
