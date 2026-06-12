# language: es

Característica: Eliminar agente

  Escenario: Eliminar un agente correctamente
    Dado que el administrador está autenticado para eliminar agentes
    Cuando elimina el agente 1
    Entonces la eliminación del agente responde con estado 200
    Y la eliminación del agente queda confirmada
