import { tool } from "@langchain/core/tools";
import {
  WhatsAppClient,
  WhatsAppCloudMessage,
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
      console.log(`🔧 Running tool: send_audio_libro_message | params: audioIndex="${audioIndex}"`);
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

        const url = audioRecord.url;

        if (url) {
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
        } else {
          return `Error: El registro del audio ${audioIndex} existe pero no tiene una URL pública válida asignada.`;
        }
      } catch (error) {
        console.error("Error en flujo de enviar audio del libro:", error);
        return `Hubo un error al intentar enviar el audio del libro.`;
      }
    },
    {
      name: "send_audio_libro_message",
      description:
        "Busca en la base de datos el audio del libro de trabajo del usuario utilizando el 'audioIndex' (ej. 3.11, 4.1, 2.8, R1, R2, etc.) y lo envía al usuario por WhatsApp usando su URL pública de Azure.",
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
