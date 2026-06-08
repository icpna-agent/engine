export function getBookLessonPrompt(bookPage: number, bookId: number): string {
  return `Analiza la imagen provista de una página de ejercicios o lección de un libro de inglés.
Extrae absolutamente todas las actividades, ejercicios o secciones individuales y estructúralas como una lista de objetos JSON para la tabla 'book_lesson'.

⚠️ REGLA CRÍTICA DE DIVISIÓN DE EJERCICIOS (EVITAR AGRUPACIÓN):
- Debes crear un objeto JSON separado para CADA ejercicio numerado (ej: 1, 2, 3, 4) y CADA sub-ejercicio con letra (ej: 1a, 1b, 3a, 3b).
- NO agrupes múltiples sub-ejercicios en un solo registro. Por ejemplo, si la página tiene "1 a" y "1 b", esto DEBE generar exactamente DOS objetos independientes en el arreglo "inserts" (el primero con activityNumber=1, letterNumber="a", y el segundo con activityNumber=1, letterNumber="b").
- Extrae todas las actividades de la página de principio a fin. Si hay actividades 1a, 1b, 2, 3a, 3b, 4, debes retornar exactamente 6 objetos en el arreglo "inserts".
- No mezcles las instrucciones, títulos ni el contenido de diferentes ejercicios. Cada objeto debe tener únicamente su propia instrucción y su propio contenido específico.

Reglas de extracción detalladas por campo:

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
   - Es una frase muy corta (de 1 a 5 palabras) que describe el tema de la lección (ej: "Alternative uses", "Photos & communication", "Present simple vs continuous").
   - NO coloques la instrucción completa del ejercicio aquí. Si no se puede deducir un tema, utiliza una o dos palabras clave del título general de la página o deja este campo nulo.

5. activityNumber:
   - El número identificador del ejercicio/actividad si está visible (ej: 1, 2, 3, 4, 5). Debe ser un entero.

6. letterNumber:
   - La letra del subejercicio si aplica (ej: "a", "b", "c", "d"). Debe ser texto en minúscula. Si el ejercicio no tiene letras (ej: solo dice "2"), deja este campo nulo.

7. instruction:
   - La instrucción o consigna principal del ejercicio redactada en inglés (ej: "Work in pairs. Look at the photos. Answer the questions.", "Listen to six people talking about the photos.").

8. content:
   - Debe ser un objeto JSON con una única propiedad llamada "text".
   - El valor de "text" debe contener únicamente el contenido específico del ejercicio (ej: preguntas, opciones para rellenar, oraciones completas, textos de lectura de ese subejercicio en específico).
   - Si no hay contenido adicional más allá de la instrucción (como en ejercicios simples de conversación en parejas), deja "text" como una cadena vacía o nula, pero NO mezcles contenido de otros ejercicios.

9. bookPage: El número de página real del libro provisto por parámetro: ${bookPage}.
10. bookId: El ID del libro provisto por parámetro: ${bookId}.

11. EXCEPCIÓN - PÁGINAS SIN EJERCICIOS/LECCIONES:
    - Si la página provista es una portada de unidad, una página de título general, o una página que contiene únicamente una foto/ilustración completa a página completa (como la página 5) y NO TIENE lecciones, actividades, preguntas ni ejercicios para extraer:
    - Retorna obligatoriamente un arreglo vacío en el campo "inserts" (es decir: { "inserts": [] }).

Retorna únicamente el objeto JSON que cumpla con esta estructura.`;
}
