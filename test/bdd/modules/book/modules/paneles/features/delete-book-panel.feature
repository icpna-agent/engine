# language: es

Característica: Eliminar panel de libro

  Escenario: Eliminar un panel correctamente
    Dado que el administrador está autenticado para eliminar paneles de libro
    Cuando elimina el panel de libro 1
    Entonces la eliminación del panel de libro responde con estado 200
    Y la eliminación del panel de libro queda confirmada
