# language: es

Característica: Editar agente

  Escenario: Editar un agente correctamente
    Dado que el administrador está autenticado para editar agentes
    Cuando edita el agente 1 con nombre "ICPNA Studio Editado"
    Entonces el agente editado responde con estado 200
    Y el agente queda actualizado con nombre "ICPNA Studio Editado"
