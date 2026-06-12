# language: es

Característica: Eliminar lección de libro

  Escenario: Eliminar una lección correctamente
    Dado que el administrador está autenticado para eliminar lecciones de libro
    Cuando elimina la lección de libro 1
    Entonces la eliminación de la lección de libro responde con estado 200
    Y la eliminación de la lección de libro queda confirmada
