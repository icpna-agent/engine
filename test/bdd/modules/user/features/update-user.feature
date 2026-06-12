# language: es

Característica: Editar usuario

  Escenario: Editar un usuario correctamente
    Dado que el administrador está autenticado para editar usuarios
    Cuando edita el usuario 1 con teléfono "+51977776666"
    Entonces el usuario editado responde con estado 200
    Y el usuario queda actualizado con teléfono "+51977776666"
