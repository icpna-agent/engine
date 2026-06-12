# language: es

Característica: Editar unidad de libro

  Escenario: Editar una unidad correctamente
    Dado que el administrador está autenticado para editar unidades de libro
    Cuando edita la unidad de libro 1 con número 8
    Entonces la unidad de libro editada responde con estado 200
    Y la unidad de libro queda actualizada con número 8
