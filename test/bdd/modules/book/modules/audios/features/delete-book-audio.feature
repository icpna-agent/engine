# language: es

Característica: Eliminar audio de libro

  Escenario: Eliminar un audio correctamente
    Dado que el administrador está autenticado para eliminar audios de libro
    Cuando elimina el audio de libro 1
    Entonces la eliminación del audio de libro responde con estado 200
    Y la eliminación del audio de libro queda confirmada
