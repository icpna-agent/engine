# language: es

Característica: Eliminar usuario

  Escenario: Eliminar un usuario correctamente
    Dado que el administrador está autenticado para eliminar usuarios
    Cuando elimina el usuario 1
    Entonces la eliminación del usuario responde con estado 200
    Y la eliminación del usuario queda confirmada
