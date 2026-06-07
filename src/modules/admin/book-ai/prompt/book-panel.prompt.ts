export function getBookPanelPrompt(bookPage: number, bookId: number): string {
  return `Analiza la imagen provista del panel, recuadro o sección de información de un libro de inglés (ej: cajas de tips, paneles de vocabulario, notas de gramática o pronunciación).
Extrae estos paneles de información y estructúralas como una lista de objetos JSON para la tabla 'book_panel'.

ADVERTENCIA CRÍTICA DE FALSOS POSITIVOS:
- Únicamente algunas paginas (entre la 2 y la 31) contienen algún panel de información real. Muchas páginas NO contienen ningún panel.
- Los paneles reales son cajas, cuadros o recuadros físicos bien delimitados por marcos, bordes o encabezados con fondos de COLOR AZUL o TURQUESA (ejemplos: recuadros de gramática con bordes/encabezados azules como "FUTURE TIME CLAUSES", "KEY VOCABULARY", "QUANTIFIERS", "NOTICE", etc.).
- Si la página analizada NO contiene ninguna de estas cajas o recuadros físicos de color turquesa/azul, NO debes extraer nada ni inventar datos. En su lugar, debes retornar obligatoriamente un arreglo vacío en el campo "inserts" (es decir: { "inserts": [] }).

Reglas de extracción detalladas:

1. title:
   - El título principal del panel en mayúsculas o negritas (ej: "KEY VOCABULARY", "QUANTIFIERS", "NOTICE"). Es obligatorio.

2. theme:
   - El tema general o sección del panel (ej: "Belongings", "Much & many", "Few & little").
   - Si no está definido en esa sección del panel, déjalo como null.

3. subTheme:
   - El subtema específico de la actividad si existe (ej: "A Nouns", "B Verbs associated with objects").
   - Si no existe, déjalo como null.

4. instruction:
   - La consigna o instrucción de la tarea en inglés si existe (ej: "Match the words in the box to the categories.", "Complete the chart with the verbs in the box.").
   - Si es un panel puramente explicativo (como notas gramaticales que no tienen una consigna de ejercicio), déjalo como null.

5. content:
   - Debe ser un objeto JSON súper simple con una única propiedad llamada "text".
   - El valor de "text" debe contener todo el contenido de texto, tablas, ejemplos o recuadros de palabras pertenecientes a ese bloque, ordenados de forma legible y estructurada, usando saltos de línea \\n para separar renglones.
   - Ejemplo:
     { "text": "articles belongings contents items\\n1 individual objects ___\\n2 objects in general ___" }

6. Regla de división (Multi-registro por panel):
   - Si un panel contiene múltiples actividades, instrucciones o secciones explicativas independientes (ej: la sección A tiene 2 ejercicios con instrucciones distintas; o el panel "QUANTIFIERS" se subdivide en explicaciones para "Much & many" y "Few & little"):
   - DEBES crear un registro/objeto separado para cada una de estas subsecciones o instrucciones.
   - Mantén el "title" común (ej: "KEY VOCABULARY") pero varía los campos de "theme", "subTheme", "instruction" y "content" para cada registro individual según corresponda.

7. bookPage: El número de página real del libro provisto por parámetro: ${bookPage}.
8. bookId: El ID del libro provisto por parámetro: ${bookId}.

Retorna únicamente el objeto JSON que cumpla con esta estructura.`;
}
