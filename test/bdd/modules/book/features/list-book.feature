# language: es

Característica: Listar libros

  Escenario: Listar libros correctamente
    Dado que el administrador está autenticado para listar libros
    Cuando lista los libros registrados
    Entonces la lista de libros responde con estado 200
    Y la lista de libros contiene resultados
