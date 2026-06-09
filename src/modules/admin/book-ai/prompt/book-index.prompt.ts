export function getBookIndexPrompt(bookPage: number, bookId: number): string {
  return `Analiza la imagen provista del índice de un libro de inglés (Table of Contents / Index).
Extrae los temas o secciones indexados que tengan un número de página específico asociado.

Reglas críticas de extracción:
1. NO extraigas las unidades principales (ej: "10 INSIGHTS AND INNOVATIONS", "11 A SENSE OF IDENTITY") como entradas de índice.
2. ÚNICAMENTE extrae los elementos específicos que muestran explícitamente un número de página y un título (ej: "page 10 Functional Language: Getting things done", "page 11 Writing Task: Describing a process", "page 32 Review D, units 10-12", "page 36 Grammar Reference", "page 47 Workbook").
3. Para cada elemento extraído, define los siguientes campos:
   - title: El título descriptivo de la sección (ej: "Functional Language: Getting things done", "Writing Task: Describing a process", "Review D, units 10-12", "Grammar Reference").
   - page: El número de página física del índice limpia como texto (ej: "10", "11", "32", "36").
   - skill: La habilidad o categoría del libro que mejor se parezca de la siguiente lista de valores del enum:
     ["grammar", "vocabulary", "reading", "listening", "reading_listening", "pronunciation", "speaking", "writing", "functional_language", "writing_bank", "speaking_task", "review", "bring_it_together", "grammar_reference", "communication_bank", "selected_transcripts", "workbook"]
     Guía de mapeo de skill:
     - Temas de "Functional Language..." -> "functional_language"
     - Temas de "Writing Task..." o "Writing Bank..." -> "writing_bank"
     - Temas de "Speaking Task..." -> "speaking_task"
     - Temas de "Review..." -> "review" (mapea "Review A", "Review B", "Review C", "Review D" de forma general a "review")
     - Temas de "Bring It Together..." -> "bring_it_together"
     - Temas de "Grammar Reference..." -> "grammar_reference"
     - Temas de "Communication Bank..." -> "communication_bank"
     - Temas de "Selected Transcripts..." o "Workbook Transcripts" -> "selected_transcripts"
     - "Workbook", "Irregular Verbs", "Phonetic Chart", "Vodcast Series", "Skills Boost", "Workbook Progress Test" -> "workbook"
   - bookPage: El número de página real del libro provisto como parámetro: ${bookPage}.
   - bookId: El ID del libro provisto como parámetro: ${bookId}.

Devuelve la respuesta en formato JSON encerrado en un bloque de código markdown \`\`\`json
{
  "inserts": [
    {
      "title": "...",
      "page": "...",
      "skill": "...",
      "bookPage": ${bookPage},
      "bookId": ${bookId}
    }
  ]
}
\`\`\`. No agregues explicaciones adicionales fuera de este bloque.`;
}

