import { z } from "zod";
import { bookSkillZodEnum } from "./shared.schema";

export const bookIndexItemSchema = z.object({
  title: z.string().describe("El título de la sección o tema indexado (ej: Insights and Innovations)."),
  page: z.string().describe("La página del índice donde se localiza el tema (ej: '5' o 'page 5')."),
  skill: bookSkillZodEnum.describe("La categoría o habilidad correspondiente al tema."),
  bookPage: z.number().describe("El número de página física del libro en la que está este índice."),
  bookId: z.number().describe("El ID del libro al que pertenece."),
});

export const bookIndexResponseSchema = z.object({
  inserts: z.array(bookIndexItemSchema).describe("Lista de inserciones para book_index."),
});

export type BookIndexResponseType = z.infer<typeof bookIndexResponseSchema>;
