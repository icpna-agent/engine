# language: es

Característica: Editar índice de libro

  Escenario: Editar un índice correctamente
    Dado que el administrador está autenticado para editar índices de libro
    Cuando edita el índice de libro 1 con título "Functional Language Editado"
    Entonces el índice de libro editado responde con estado 200
    Y el índice de libro queda actualizado con título "Functional Language Editado"
