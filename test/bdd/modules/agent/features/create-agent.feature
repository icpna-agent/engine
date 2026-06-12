# language: es

Característica: Crear agente

  Como administrador
  Quiero registrar agentes de IA
  Para atender conversaciones desde WhatsApp

  Escenario: Crear un agente correctamente
    Dado que el administrador está autenticado para gestionar agentes
    Cuando crea un agente llamado "ICPNA Studio"
    Entonces el agente se crea con estado 201
    Y el agente queda registrado con nombre "ICPNA Studio"
