# language: es

Característica: Eliminar índice de libro

  Escenario: Eliminar un índice correctamente
    Dado que el administrador está autenticado para eliminar índices de libro
    Cuando elimina el índice de libro 1
    Entonces la eliminación del índice de libro responde con estado 200
    Y la eliminación del índice de libro queda confirmada
