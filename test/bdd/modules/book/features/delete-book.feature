# language: es

Característica: Eliminar libro

  Escenario: Eliminar un libro correctamente
    Dado que el administrador está autenticado para eliminar libros
    Cuando elimina el libro 1
    Entonces la eliminación del libro responde con estado 200
    Y la eliminación del libro queda confirmada
