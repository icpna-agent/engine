import { tool } from "@langchain/core/tools";
import {
  WhatsAppClient,
  WhatsAppCloudMessage,
} from "src/wb/messages/whatsapp-cloud-api";
import { z } from "zod";
import { GoogleGenAI } from "@google/genai";
import { pcmToWav, convertWavToMp3 } from "@functions/audio.function";

export const createSendAudioMessageTool = (
  accessToken: string,
  phoneNumberId: string,
  phone: string,
  templates: WhatsAppCloudMessage[],
  genAI: GoogleGenAI,
) => {
  return tool(
    async ({ text }) => {
      const whatsappClient = new WhatsAppClient({
        accessToken,
        phoneNumberId,
      });

      try {
        const finalPrompt = `Instrucciones de estilo y personalidad: Genera una voz humana, cálida y muy empática. Habla con la cercanía y tranquilidad de alguien que te aprecia y te está ayudando con gusto. El ritmo debe ser el de una conversación casual del día a día.\n\nTexto a leer: ${text}`;

        const response = await genAI.models.generateContent({
          model: "gemini-3.1-flash-tts-preview",
          contents: finalPrompt,
          config: {
            responseModalities: ["AUDIO"],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: {
                  voiceName: "Sulafat",
                },
              },
            },
          },
        });

        const part = response.candidates?.[0]?.content?.parts?.[0];
        if (!part || !part.inlineData || !part.inlineData.data) {
          throw new Error("La API no devolvió datos de audio válidos.");
        }

        const audioBase64 = part.inlineData.data;
        const mimeType = part.inlineData.mimeType || "";

        const rateMatch = mimeType.match(/rate=(\d+)/);
        const sampleRate = rateMatch ? parseInt(rateMatch[1], 10) : 24000;

        const pcmBuffer = Buffer.from(audioBase64, "base64");
        const wavBuffer = pcmToWav(pcmBuffer, sampleRate);
        const mp3Buffer = await convertWavToMp3(wavBuffer);
        const fileBlob = new Blob([new Uint8Array(mp3Buffer)], {
          type: "audio/mpeg",
        });

        const uploadData = await whatsappClient.uploadAudio({
          file: fileBlob,
          messaging_product: "whatsapp",
        });

        const payload: WhatsAppCloudMessage = {
          recipient_type: "individual",
          messaging_product: "whatsapp",
          type: "audio",
          to: phone,
          audio: {
            id: uploadData.id,
          },
        };

        // Guardamos en templates
        templates.push({ ...payload, _sent: true });
        await whatsappClient.sendAudioMessageById(payload);

        return `Audio de contenido "${text}" enviado por WhatsApp al usuario de número ${phone}`;
      } catch (error) {
        console.error("Error en flujo Gemini -> WhatsApp:", error);
        return `Hubo un error al intentar enviar el mensaje de audio.`;
      }
    },
    {
      name: "send_audio_message",
      description:
        "Genera un mensaje de audio con voz humana y sintetizada a partir del texto proporcionado (Text-to-Speech) y lo envía al usuario por WhatsApp. Úsala para responder al usuario con un mensaje de voz cálido y empático.",
      schema: z.object({
        text: z
          .string()
          .describe(
            "El texto en español que se convertirá a voz (audio) y se enviará al usuario.",
          ),
      }),
    },
  );
};
