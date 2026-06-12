# language: es

Característica: Crear imagen de libro

  Como administrador
  Quiero registrar imágenes de un libro
  Para que el agente pueda referenciar recursos visuales

  Escenario: Crear una imagen correctamente
    Dado que el administrador está autenticado para gestionar imágenes de libro
    Cuando crea una imagen para la página 2
    Entonces la imagen se crea con estado 201
    Y la imagen queda registrada para la página 2
