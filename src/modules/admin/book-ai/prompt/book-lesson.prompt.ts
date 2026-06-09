export function getBookLessonPrompt(bookPage: number, bookId: number): string {
  return `Analiza la imagen provista de una página de ejercicios o lección de un libro de inglés.
Extrae absolutamente todas las actividades, ejercicios o secciones individuales y estructúralas como una lista de objetos JSON para la tabla 'book_lesson'.

⚠️ REGLA CRÍTICA DE DIVISIÓN DE EJERCICIOS (EVITAR AGRUPACIÓN):
- Debes crear un objeto JSON separado para CADA ejercicio numerado (ej: 1, 2, 3, 4) y CADA sub-ejercicio con letra (ej: 1a, 1b, 3a, 3b).
- NO agrupes múltiples sub-ejercicios en un solo registro. Por ejemplo, si la página tiene "1 a" y "1 b", esto DEBE generar exactamente DOS objetos independientes en el arreglo "inserts" (el primero con activityNumber=1, letterNumber="a", y el segundo con activityNumber=1, letterNumber="b").
- Extrae todas las actividades de la página de principio a fin. Si hay actividades 1a, 1b, 2, 3a, 3b, 4, debes retornar exactamente 6 objetos en el arreglo "inserts".
- No mezcles las instrucciones, temas ni el contenido de diferentes ejercicios. Cada objeto debe tener únicamente sus propios campos específicos.

⚠️ EXCLUSIÓN CRÍTICA DE PANELES (EVITAR DUPLICADOS):
- NO extraigas como lecciones o ejercicios ningún contenido, ejercicio o cuadro explicativo que se encuentre dentro de un PANEL (caja, cuadro o recuadro físico delimitado por marcos, bordes o encabezados con fondos de COLOR AZUL o TURQUESA, como por ejemplo las cajas con títulos de "KEY VOCABULARY", "NOTICE", "FUTURE TIME CLAUSES", "GRAMMAR FOCUS", etc.).
- Todo lo que esté dentro de esas cajas azules/turquesas pertenece a la tabla de paneles y ya es procesado por otro agente.
- Únicamente extrae actividades y ejercicios de lección que estén fuera de estos recuadros (por ejemplo, ejercicios numerados que estén en el cuerpo normal de la página fuera de los recuadros turquesas).
- En la Página 3, por ejemplo:
  - Las secciones dentro de la caja "KEY VOCABULARY" (ejercicios A y B) y el recuadro "NOTICE" al final son paneles y DEBEN SER COMPLETAMENTE IGNORADOS aquí en lecciones.
  - Únicamente debes extraer el ejercicio "5 a" y "5 b" (Complete the questions...) que está abajo a la izquierda fuera del recuadro.

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
   - Es una frase muy corta (de 1 a 5 palabras) que describe el tema del ejercicio (ej: "Alternative uses", "Photos & communication", "Present simple vs continuous").
   - NO coloques la instrucción completa del ejercicio aquí. Si no se puede deducir un tema, utiliza una o dos palabras clave del título general de la página o deja este campo nulo.

5. activityNumber:
   - El número identificador del ejercicio/actividad si está visible (ej: 1, 2, 3, 4, 5). Debe ser un entero.

6. letterNumber:
   - La letra del subejercicio si aplica (ej: "a", "b", "c", "d"). Debe ser texto en minúscula. Si el ejercicio no tiene letras (ej: solo dice "2"), deja este campo nulo.

7. instruction:
   - La instrucción o consigna principal del ejercicio redactada en inglés (ej: "Work in pairs. Look at the photos. Answer the questions.", "Listen to six people talking about the photos.").
   - Es obligatorio rellenar este campo si está visible. NO coloques este texto dentro del campo 'topic'.

8. content:
   - Debe ser una cadena de texto (string) en inglés.
   - Contiene únicamente el contenido del ejercicio (ej: preguntas, frases para rellenar, opciones del cuadro de texto, opciones de opción múltiple, oraciones para completar) pertenecientes específicamente a ese sub-ejercicio.
   - Si hay múltiples líneas o ítems numerados dentro de la actividad (como "1 They're not just...", "2 This gesture..."), colócalos separados por saltos de línea '\\n'.
   - Si no hay contenido adicional más allá de la instrucción, pon este campo como nulo o cadena vacía, pero NO mezcles contenido de otros ejercicios vecinos.

9. bookPage: El número de página real del libro provisto por parámetro: ${bookPage}.
10. bookId: El ID del libro provisto por parámetro: ${bookId}.

11. EXCEPCIÓN - PÁGINAS SIN EJERCICIOS/LECCIONES:
    - Si la página provista es una portada de unidad, una página de título general, o una página que contiene únicamente una foto/ilustración completa a página completa (como la página 5) y NO TIENE lecciones, actividades, preguntas ni ejercicios para extraer:
    - Retorna obligatoriamente un arreglo vacío en el campo "inserts" (es decir: { "inserts": [] }).

Devuelve la respuesta en formato JSON encerrado en un bloque de código markdown \`\`\`json
{
  "inserts": [
    {
      "unitNumber": 1,
      "title": "COMMUNICATION",
      "skill": "speaking",
      "topic": "Photos analysis",
      "activityNumber": 1,
      "letterNumber": "a",
      "instruction": "Look at the photos...",
      "content": "Question 1... \nQuestion 2...",
      "bookPage": ${bookPage},
      "bookId": ${bookId}
    }
  ]
}
\`\`\`. No agregues explicaciones adicionales fuera de este bloque.`;
}


