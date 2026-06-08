import { z } from "zod";

export const bookAudioItemSchema = z.object({
  url: z.string().describe("URL de marcador de posición para el archivo de audio. Utilizar siempre: https://example.com/placeholder-audio.mp3"),
  audioIndex: z.string().describe("El índice o identificador del reproductor de audio visible en la página (ej: '7.1', '11.1')."),
  transcription: z.string().optional().describe("La transcripción del audio si está escrita explícitamente en la página, o una descripción muy breve de la actividad de audio."),
  bookPage: z.number().describe("El número de página real de la imagen provista."),
  bookId: z.number().describe("El ID del libro al que pertenece."),
});

export const bookAudioResponseSchema = z.object({
  inserts: z.array(bookAudioItemSchema).describe("Lista de inserciones para la tabla book_audio."),
});

export type BookAudioResponseType = z.infer<typeof bookAudioResponseSchema>;
