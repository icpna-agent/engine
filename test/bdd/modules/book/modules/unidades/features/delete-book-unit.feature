# language: es

Característica: Eliminar unidad de libro

  Escenario: Eliminar una unidad correctamente
    Dado que el administrador está autenticado para eliminar unidades de libro
    Cuando elimina la unidad de libro 1
    Entonces la eliminación de la unidad de libro responde con estado 200
    Y la eliminación de la unidad de libro queda confirmada
