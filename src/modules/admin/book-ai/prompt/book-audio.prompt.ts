export function getBookAudioPrompt(bookPage: number, bookId: number): string {
  return `Analiza la imagen provista de un libro de inglés para identificar reproductores de audio, pistas, tracks o ejercicios de escucha.
Extrae todos los componentes de audio identificados y estructúralos como una lista de objetos JSON para la tabla 'book_audio'.

Reglas de extracción detalladas:

1. url:
   - Dado que no puedes conocer la URL real del archivo desde una imagen, utiliza SIEMPRE el siguiente marcador de posición: "https://example.com/placeholder-audio.mp3".

2. audioIndex:
   - El índice, número o identificador de la pista de audio (ej: "7.1", "11.1", "12").
   - Trata de limpiar el valor para que sea principalmente el número decimal o entero (ej: de "Track 7.1" o "🎧 7.1" extrae únicamente "7.1").

3. transcription:
   - Si la página incluye la transcripción del diálogo o texto del audio (audio transcript), copia ese texto completo aquí.
   - Si no hay transcripción escrita pero sí hay una instrucción o descripción de la actividad (ej: "Listen to three conversations. What are they talking about?"), puedes incluir una descripción breve de la actividad o la instrucción del ejercicio como transcripción de referencia.
   - Si no hay nada de lo anterior, debes colocar obligatoriamente un punto "." por defecto.

4. bookPage: El número de página real del libro provisto por parámetro: ${bookPage}.
5. bookId: El ID del libro provisto por parámetro: ${bookId}.

Devuelve la respuesta en formato JSON encerrado en un bloque de código markdown \`\`\`json
{
  "inserts": [
    {
      "url": "https://example.com/placeholder-audio.mp3",
      "audioIndex": "...",
      "transcription": "...",
      "bookPage": ${bookPage},
      "bookId": ${bookId}
    }
  ]
}
\`\`\`. No agregues explicaciones adicionales fuera de este bloque.`;
}


