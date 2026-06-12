import { tool } from "@langchain/core/tools";
import {
  WhatsAppClient,
  WhatsAppCloudMessage,
  SendImageMessageByIdPayload,
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

        const metaMediaId = imageRecord.metaMediaId;
        const url = imageRecord.url;

        let isUrlOk = false;
        if (url) {
          try {
            const res = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(2000) });
            isUrlOk = res.ok;
          } catch (err) {
            console.warn(`Error al verificar accesibilidad de la URL: ${url}`, err);
          }
        }

        if (url && isUrlOk) {
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

            templates.push({ ...payload, _sent: true });
            await whatsappClient.sendImageMessageByUrl(payload);
            return `Página del libro ${bookPage} enviada exitosamente usando url: ${url}`;
          } catch (sendError) {
            console.warn(`Falló el envío de imagen usando url ${url}, intentando fallback a metaMediaId:`, sendError);
            if (metaMediaId) {
              const payload: SendImageMessageByIdPayload = {
                messaging_product: "whatsapp",
                recipient_type: "individual",
                to: phone,
                type: "image",
                image: {
                  id: String(metaMediaId),
                },
              };

              templates.push({ ...payload, _sent: true });
              await whatsappClient.sendImageMessageById(payload);
              return `Página del libro ${bookPage} enviada exitosamente usando metaMediaId por fallo de URL: ${metaMediaId}`;
            }
            throw sendError;
          }
        } else if (metaMediaId) {
          const payload: SendImageMessageByIdPayload = {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: phone,
            type: "image",
            image: {
              id: String(metaMediaId),
            },
          };

          templates.push({ ...payload, _sent: true });
          await whatsappClient.sendImageMessageById(payload);
          return `Página del libro ${bookPage} enviada exitosamente usando metaMediaId (URL no disponible o expirada): ${metaMediaId}`;
        } else {
          return `Error: El registro de la página ${bookPage} existe pero no tiene ni metaMediaId ni url válida asignados.`;
        }
      } catch (error) {
        console.error("Error en flujo de enviar imagen del libro:", error);
        return `Hubo un error al intentar enviar la página del libro.`;
      }
    },
    {
      name: "send_image_libro_message",
      description:
        "Busca en la base de datos la página del libro de trabajo del usuario utilizando el 'bookPage' (número de página del libro) y la envía al usuario por WhatsApp. Si existe un 'metaMediaId' (ID de Meta) para el archivo, se enviará usando ese ID para mayor rapidez; de lo contrario, se enviará mediante la URL pública por defecto.",
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
