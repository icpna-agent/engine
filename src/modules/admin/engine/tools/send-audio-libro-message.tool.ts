import { tool } from "@langchain/core/tools";
import {
  WhatsAppClient,
  WhatsAppCloudMessage,
  SendAudioMessageByIdPayload,
  SendAudioMessageByUrlPayload,
} from "src/wb/messages/whatsapp-cloud-api";
import { z } from "zod";
import { database } from "@db/connection.db";
import { bookAudio } from "@db/tables/book-audio.table";
import { and, eq, isNull } from "drizzle-orm";

export const createSendAudioLibroMessageTool = (
  accessToken: string,
  phoneNumberId: string,
  phone: string,
  templates: WhatsAppCloudMessage[],
  bookId: number | null | undefined,
) => {
  return tool(
    async ({ audioIndex }) => {
      if (!bookId) {
        return "Error: No se tiene un libro seleccionado actualmente para el usuario. Asigna un libro primero.";
      }

      const whatsappClient = new WhatsAppClient({
        accessToken,
        phoneNumberId,
      });

      try {
        const [audioRecord] = await database
          .select()
          .from(bookAudio)
          .where(
            and(
              eq(bookAudio.bookId, bookId),
              eq(bookAudio.audioIndex, audioIndex),
              isNull(bookAudio.deletedAt),
            ),
          );

        if (!audioRecord) {
          return `Error: No se encontró ningún audio con el índice "${audioIndex}" para el libro con ID ${bookId}.`;
        }

        const metaMediaId = audioRecord.metaMediaId;
        const url = audioRecord.url;

        if (url) {
          try {
            const payload: SendAudioMessageByUrlPayload = {
              messaging_product: "whatsapp",
              recipient_type: "individual",
              to: phone,
              type: "audio",
              audio: {
                link: url,
              },
            };

            templates.push({ ...payload, _sent: true });
            await whatsappClient.sendAudioMessageByUrl(payload);
            return `Audio de libro con índice ${audioIndex} enviado exitosamente usando url: ${url}`;
          } catch (sendError) {
            console.warn(`Falló el envío de audio usando url ${url}, intentando fallback a metaMediaId:`, sendError);
            if (metaMediaId) {
              const payload: SendAudioMessageByIdPayload = {
                messaging_product: "whatsapp",
                recipient_type: "individual",
                to: phone,
                type: "audio",
                audio: {
                  id: String(metaMediaId),
                },
              };

              templates.push({ ...payload, _sent: true });
              await whatsappClient.sendAudioMessageById(payload);
              return `Audio de libro con índice ${audioIndex} enviado exitosamente usando metaMediaId por fallo de URL: ${metaMediaId}`;
            }
            throw sendError;
          }
        } else if (metaMediaId) {
          const payload: SendAudioMessageByIdPayload = {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: phone,
            type: "audio",
            audio: {
              id: String(metaMediaId),
            },
          };

          templates.push({ ...payload, _sent: true });
          await whatsappClient.sendAudioMessageById(payload);
          return `Audio de libro con índice ${audioIndex} enviado exitosamente usando metaMediaId por defecto: ${metaMediaId}`;
        } else {
          return `Error: El registro del audio ${audioIndex} existe pero no tiene ni metaMediaId ni url asignados.`;
        }
      } catch (error) {
        console.error("Error en flujo de enviar audio del libro:", error);
        return `Hubo un error al intentar enviar el audio del libro.`;
      }
    },
    {
      name: "send_audio_libro_message",
      description:
        "Busca en la base de datos el audio del libro de trabajo del usuario utilizando el 'audioIndex' (ej. 3.11, 4.1, 2.8, R1, R2, etc.) y lo envía al usuario por WhatsApp. Si existe un 'metaMediaId' (ID de Meta) para el archivo, se enviará usando ese ID para mayor rapidez; de lo contrario, se enviará mediante la URL pública por defecto.",
      schema: z.object({
        audioIndex: z
          .string()
          .describe(
            "El número o índice del audio a buscar y enviar (ej. 3.11, 4.1, 2.8, R1, R2...)",
          ),
      }),
    },
  );
};
