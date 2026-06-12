# language: es

Característica: Crear libro

  Como administrador
  Quiero registrar libros educativos
  Para organizar el contenido usado por los agentes

  Escenario: Crear un libro correctamente
    Dado que el administrador está autenticado para gestionar libros
    Cuando crea un libro con título "American Big Picture"
    Entonces el libro se crea con estado 201
    Y el libro queda registrado con título "American Big Picture"
