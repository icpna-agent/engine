# language: es

Característica: Editar instancia de WhatsApp

  Escenario: Editar una instancia correctamente
    Dado que el administrador está autenticado para editar instancias
    Cuando edita la instancia 1 para el agente 1
    Entonces la instancia editada responde con estado 200
    Y la instancia queda actualizada para el agente 1
