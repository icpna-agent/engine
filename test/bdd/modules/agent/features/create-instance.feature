# language: es

Característica: Crear instancia de WhatsApp

  Como administrador
  Quiero vincular una instancia de WhatsApp a un agente
  Para enviar y recibir mensajes desde Meta

  Escenario: Crear una instancia correctamente
    Dado que el administrador está autenticado para gestionar instancias
    Cuando crea una instancia de WhatsApp para el agente 1
    Entonces la instancia se crea con estado 201
    Y la instancia queda asociada al agente 1
