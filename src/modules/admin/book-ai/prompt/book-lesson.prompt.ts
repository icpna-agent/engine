export function getBookLessonPrompt(bookPage: number, bookId: number): string {
  return `Analiza la imagen provista de una página de ejercicios o lección de un libro de inglés.
Extrae todas las actividades, ejercicios o secciones individuales y estructúralas como una lista de objetos JSON para la tabla 'book_lesson'.

Reglas de extracción detalladas:

1. unitNumber: 
   - Busca el número de unidad que suele aparecer arriba a la izquierda o arriba a la derecha de la página (ej: 10, 10.0, 10.1, 10.4, 10.5).
   - Extrae el número como un valor numérico limpio (puede ser entero o decimal).

2. title:
   - El título corresponde al encabezado de la sección o lección donde se ubica el ejercicio (ej: "INSIGHTS AND INNOVATIONS", "SPEAKING", "READING", "TUNE IN", "FOCUS ON LANGUAGE", "OVER TO YOU", "KEY VOCABULARY").
   - Utiliza el nombre de la sección correspondiente como el título del registro.

3. skill:
   - Identifica la habilidad (skill) que más se asemeje de la siguiente lista de enum:
     ["grammar", "vocabulary", "reading", "listening", "reading_listening", "pronunciation", "speaking", "writing", "functional_language", "writing_bank", "speaking_task", "review", "bring_it_together", "grammar_reference", "communication_bank", "selected_transcripts", "workbook"]
   - Guía de asignación:
     - Ejercicios de audio, reproducción de pistas, conversaciones grabadas o que incluyan icono de audífono -> "listening".
     - Ejercicios de hablar en parejas, debatir o bajo el título de "SPEAKING" -> "speaking" o "speaking_task".
     - Ejercicios de completar cajas de gramática o bajo el título de "GRAMMAR" -> "grammar".
     - Ejercicios de aprender palabras, emparejar significados o bajo el título de "VOCABULARY" -> "vocabulary".
     - Ejercicios de lectura de artículos o textos largos -> "reading".

4. topic:
   - Extrae el tema específico si existe explícitamente en la página en forma de etiquetas de color azul/gris o sub-secciones (ej: "tune in", "focus on language", "over to you", "practice passives", "talk about alternative uses for items").

5. activityNumber:
   - El número identificador del ejercicio/actividad si está visible (ej: 1, 2, 3, 4, 5). Debe ser un entero.

6. letterNumber:
   - La letra del subejercicio si aplica (ej: "a", "b", "c", "d"). Debe ser texto. Si el ejercicio no tiene letras (ej: solo dice "3"), deja este campo nulo.

7. instruction:
   - La instrucción o consigna principal del ejercicio redactada en inglés (ej: "Work in pairs. Look at the images of three innovations...", "Listen again and answer the questions.").

8. content:
   - Debe ser un objeto JSON súper simple con una única propiedad llamada "text".
   - El valor de "text" debe contener ABSOLUTAMENTE TODO el contenido de la actividad que va después de la instrucción hasta el comienzo del siguiente ejercicio (ej: preguntas, opciones para rellenar, oraciones completas, textos largos de lectura).
   - Ejemplo: Para un ejercicio de lectura 3 que tiene textos asociados A, B y C (como "A The Cycle Response Unit... B Coffee to go... C An e-bike adventure..."), guarda todo el texto de estos bloques separado por saltos de línea \\n dentro de la propiedad text:
     { "text": "A The Cycle Response Unit\\nAmbulances on two wheels are on the increase...\\nB Coffee to go\\n...\\nC An e-bike adventure\\n..." }

9. bookPage: El número de página real del libro provisto por parámetro: ${bookPage}.
10. bookId: El ID del libro provisto por parámetro: ${bookId}.

11. EXCEPCIÓN - PÁGINAS SIN EJERCICIOS/LECCIONES:
    - Si la página provista es una portada de unidad, una página de título general, o una página que contiene únicamente una foto/ilustración completa a página completa (como la página 5) y NO TIENE lecciones, actividades, preguntas ni ejercicios para extraer:
    - Retorna obligatoriamente un arreglo vacío en el campo "inserts" (es decir: { "inserts": [] }).

Retorna únicamente el objeto JSON que cumpla con esta estructura.`;
}
