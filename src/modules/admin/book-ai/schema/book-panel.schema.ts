import { z } from "zod";

export const bookPanelItemSchema = z.object({
  title: z.string().describe("El título del panel o recuadro (ej: Quantifiers)."),
  theme: z.string().optional().describe("El tema o categoría superior del panel (ej: Grammar)."),
  subTheme: z.string().optional().describe("El subtema o detalle adicional (ej: Large and small quantity)."),
  instruction: z.string().optional().describe("La instrucción que acompaña al panel o tip."),
  content: z.record(z.unknown()).optional().describe("El contenido estructurado del panel en formato clave-valor."),
  bookPage: z.number().describe("El número de página real de la imagen provista."),
  bookId: z.number().describe("El ID del libro al que pertenece."),
});

export const bookPanelResponseSchema = z.object({
  inserts: z.array(bookPanelItemSchema).describe("Lista de inserciones para book_panel."),
});

export type BookPanelResponseType = z.infer<typeof bookPanelResponseSchema>;
