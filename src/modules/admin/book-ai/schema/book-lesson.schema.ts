import { z } from "zod";
import { bookSkillZodEnum } from "./shared.schema";

export const bookLessonItemSchema = z.object({
  unitNumber: z.number().describe("El número de unidad de la lección (ej: 7.1)."),
  title: z.string().describe("El título de la lección o sección (ej: Say Yes to Mess)."),
  skill: bookSkillZodEnum.describe("La habilidad de la lección."),
  topic: z.string().optional().describe("El tema específico de la lección (ej: Organization)."),
  activityNumber: z.number().optional().describe("El número del ejercicio si aplica (ej: 1)."),
  letterNumber: z.string().optional().describe("La letra del subejercicio si aplica (ej: 'a')."),
  instruction: z.string().optional().describe("La instrucción o enunciado del ejercicio en inglés."),
  content: z.string().optional().describe("Contenido adicional o texto de la actividad."),
  bookPage: z.number().describe("El número de página real de la imagen provista."),
  bookId: z.number().describe("El ID del libro al que pertenece."),
});

export const bookLessonResponseSchema = z.object({
  inserts: z.array(bookLessonItemSchema).describe("Lista de inserciones para book_lesson."),
});

export type BookLessonResponseType = z.infer<typeof bookLessonResponseSchema>;
