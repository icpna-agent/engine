# language: es

Característica: Crear lección de libro

  Como administrador
  Quiero registrar lecciones de un libro
  Para alimentar las respuestas del agente con contenido estructurado

  Escenario: Crear una lección correctamente
    Dado que el administrador está autenticado para gestionar lecciones de libro
    Cuando crea una lección con título "Say Yes to Mess"
    Entonces la lección se crea con estado 201
    Y la lección queda registrada con título "Say Yes to Mess"
