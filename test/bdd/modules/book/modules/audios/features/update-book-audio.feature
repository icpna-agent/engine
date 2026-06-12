# language: es

Característica: Editar audio de libro

  Escenario: Editar un audio correctamente
    Dado que el administrador está autenticado para editar audios de libro
    Cuando edita el audio de libro 1 con índice "7.2"
    Entonces el audio de libro editado responde con estado 200
    Y el audio de libro queda actualizado con índice "7.2"
