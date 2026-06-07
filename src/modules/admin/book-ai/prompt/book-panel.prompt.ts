export function getBookPanelPrompt(bookPage: number, bookId: number): string {
  return `Analiza la imagen provista del panel, recuadro o sección de información de un libro de inglés (ej: cajas de tips, recuadros de vocabulario, notas de cultura).
Extrae estos paneles de información y estructúralos como una lista de objetos JSON para la tabla 'book_panel'.

Reglas para los campos:
- title: El título del panel.
- theme: El tema del panel (ej: "Grammar").
- subTheme: El subtema del panel si aplica.
- instruction: La instrucción que acompaña al panel.
- content: Un objeto JSON estructurado con el contenido del panel (ej: definiciones, palabras clave, notas).
- bookPage: El número de página del libro (usa el valor provisto: ${bookPage}).
- bookId: El ID del libro (usa el valor provisto: ${bookId}).`;
}
