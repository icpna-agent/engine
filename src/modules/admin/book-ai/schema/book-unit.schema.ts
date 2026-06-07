import { z } from "zod";

export const bookUnitItemSchema = z.object({
  number: z.number().describe("El número identificador de la unidad (ej: 7)."),
  title: z.string().describe("El título de la unidad (ej: Is This Yours?)."),
  grammar: z.array(z.string()).optional().describe("Lista de temas de gramática enseñados en la unidad."),
  vocabulary: z.array(z.string()).optional().describe("Lista de temas de vocabulario enseñados en la unidad."),
  readingListening: z.array(z.string()).optional().describe("Lista de actividades/títulos de lectura y audios."),
  pronunciation: z.array(z.string()).optional().describe("Lista de temas de pronunciación."),
  bookPage: z.number().describe("El número de página real de la imagen provista."),
  bookId: z.number().describe("El ID del libro al que pertenece."),
});

export const bookUnitResponseSchema = z.object({
  inserts: z.array(bookUnitItemSchema).describe("Lista de inserciones para book_unit."),
});

export type BookUnitResponseType = z.infer<typeof bookUnitResponseSchema>;
