import { tool } from "@langchain/core/tools";
import {
  WhatsAppClient,
  WhatsAppCloudMessage,
  SendTextMessagePayload,
} from "src/wb/messages/whatsapp-cloud-api";
import { z } from "zod";
import { database } from "@db/connection.db";
import { bookAudio } from "@db/tables/book-audio.table";
import { and, eq, isNull } from "drizzle-orm";

export const createSendAudioTranscriptionMessageTool = (
  accessToken: string,
  phoneNumberId: string,
  phone: string,
  templates: WhatsAppCloudMessage[],
  bookId: number | null | undefined,
) => {
  return tool(
    async ({ audioIndex }) => {
      console.log(`🔧 Running tool: send_audio_transcription | params: audioIndex="${audioIndex}"`);
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

        const transcription = audioRecord.transcription;
        if (!transcription) {
          return `Error: El audio con índice "${audioIndex}" existe pero no tiene ninguna transcripción registrada.`;
        }

        const payload: SendTextMessagePayload = {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: phone,
          type: "text",
          text: {
            preview_url: false,
            body: transcription,
          },
        };

        // Guardamos en los templates
        templates.push({ ...payload, _sent: true });

        // Enviamos el mensaje por WhatsApp
        await whatsappClient.sendTextMessage(payload);

        return `Transcripción del audio ${audioIndex} enviada exitosamente por WhatsApp al usuario de número ${phone}`;
      } catch (error) {
        console.error("Error en flujo de enviar transcripción del audio del libro:", error);
        return `Hubo un error al intentar enviar la transcripción del audio.`;
      }
    },
    {
      name: "send_audio_transcription",
      description:
        "Busca en la base de datos la transcripción de texto del audio solicitado utilizando su 'audioIndex' (ej. 3.1, 1.2, R1, etc.) para el libro actual del usuario, y envía ese texto por WhatsApp.",
      schema: z.object({
        audioIndex: z
          .string()
          .describe(
            "El número o índice del audio para buscar su transcripción de texto y enviarla (ej. 3.11, 4.1, 2.8, R1, R2...)",
          ),
      }),
    },
  );
};
