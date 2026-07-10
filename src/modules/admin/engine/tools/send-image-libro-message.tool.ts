import { tool } from "@langchain/core/tools";
import {
  WhatsAppClient,
  WhatsAppCloudMessage,
  SendImageMessageByUrlPayload,
} from "src/wb/messages/whatsapp-cloud-api";
import { z } from "zod";
import { database } from "@db/connection.db";
import { bookImage } from "@db/tables/book-image.table";
import { and, eq, isNull } from "drizzle-orm";

export const createSendImageLibroMessageTool = (
  accessToken: string,
  phoneNumberId: string,
  phone: string,
  templates: WhatsAppCloudMessage[],
  bookId: number | null | undefined,
) => {
  return tool(
    async ({ bookPage }) => {
      console.log(`🔧 Running tool: send_image_libro_message | params: bookPage=${bookPage}`);
      if (!bookId) {
        return "Error: No se tiene un libro seleccionado actualmente para el usuario. Asigna un libro primero.";
      }

      const whatsappClient = new WhatsAppClient({
        accessToken,
        phoneNumberId,
      });

      try {
        const [imageRecord] = await database
          .select()
          .from(bookImage)
          .where(
            and(
              eq(bookImage.bookId, bookId),
              eq(bookImage.bookPage, bookPage),
              isNull(bookImage.deletedAt),
            ),
          );

        if (!imageRecord) {
          return `Error: No se encontró ninguna página ${bookPage} para el libro con ID ${bookId}.`;
        }

        const url = imageRecord.url;

        // Las URLs firmadas de Richmond caducan y Meta no arroja error síncrono al intentar enviarlas (fallan en silencio).
        // Evitamos el HEAD request lento haciendo una comprobación síncrona instantánea.
        const isRichmondUrl = url?.includes("richmondlp.com");
        const useUrl = url && !isRichmondUrl;

        if (useUrl) {
          const payload: SendImageMessageByUrlPayload = {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: phone,
            type: "image",
            image: {
              link: url,
            },
          };

          templates.push({ ...payload, _sent: true });
          await whatsappClient.sendImageMessageByUrl(payload);
          return `Página del libro ${bookPage} enviada exitosamente usando url: ${url}`;
        } else {
          return `Error: El registro de la página ${bookPage} existe pero no tiene una URL pública válida asignada.`;
        }
      } catch (error) {
        console.error("Error en flujo de enviar imagen del libro:", error);
        return `Hubo un error al intentar enviar la página del libro.`;
      }
    },
    {
      name: "send_image_libro_message",
      description:
        "Busca en la base de datos la página del libro de trabajo del usuario utilizando el 'bookPage' (número de página del libro) y la envía al usuario por WhatsApp usando su URL pública de Azure.",
      schema: z.object({
        bookPage: z
          .number()
          .describe(
            "El número de la página del libro a buscar y enviar por WhatsApp (ej. 30, 31, 32...)",
          ),
      }),
    },
  );
};
