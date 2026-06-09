export function getBookUnitPrompt(bookPage: number, bookId: number): string {
  return `Analiza la imagen provista de la tabla de contenidos/índice de un libro de inglés.
Identifica y extrae cada una de las unidades de enseñanza listadas (ej: Unit 10, Unit 11, Unit 12) y crea un objeto para cada unidad con las siguientes reglas:

Reglas de extracción detalladas:
1. number: El número identificador de la unidad como entero (ej: 10).
2. title: El título completo de la unidad (ej: "INSIGHTS AND INNOVATIONS", "A SENSE OF IDENTITY", "MEMORIES").
3. grammar: Lista de temas de gramática. Limpia las viñetas "•" y espacios extras (ej: ["Passives", "Who, that"]).
4. vocabulary: Lista de temas de vocabulario. Limpia las viñetas "•" y espacios extras (ej: ["Ideas & solutions", "Phrasal verbs (1)", "Footwear", "Metaphorical language"]).
5. readingListening: Lista de temas/actividades de lectura y escucha. Remueve las viñetas "•", los prefijos de iconos como "(R)" o "R " (de Reading) o "(L)" o "L " (de Listening) y limpia los espacios (ej: si dice "R A book review" debe guardarse como "A book review"; si dice "L A conversation" debe ser "A conversation").
6. pronunciation: Lista de temas de pronunciación. Limpia las viñetas "•" y espacios extras (ej: ["Sentence stress", "Intonation: Saying thanks"]).
7. bookPage: Identifica el número de página de inicio de la unidad que aparece justo debajo del título de la unidad (ej: para Unit 10 dice "page 2", extrae el entero 2; para Unit 11 dice "page 12", extrae el entero 12). Si no se encuentra ningún número de página para la unidad, usa el valor por defecto: ${bookPage}.
8. bookId: El ID del libro provisto por parámetro: ${bookId}.

Devuelve la respuesta en formato JSON encerrado en un bloque de código markdown \`\`\`json
{
  "inserts": [
    {
      "number": 1,
      "title": "...",
      "grammar": ["..."],
      "vocabulary": ["..."],
      "readingListening": ["..."],
      "pronunciation": ["..."],
      "bookPage": ${bookPage},
      "bookId": ${bookId}
    }
  ]
}
\`\`\`. No agregues explicaciones adicionales fuera de este bloque.`;
}


