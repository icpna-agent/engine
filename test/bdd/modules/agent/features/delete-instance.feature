# language: es

Característica: Eliminar instancia de WhatsApp

  Escenario: Eliminar una instancia correctamente
    Dado que el administrador está autenticado para eliminar instancias
    Cuando elimina la instancia 1
    Entonces la eliminación de la instancia responde con estado 200
    Y la eliminación de la instancia queda confirmada
