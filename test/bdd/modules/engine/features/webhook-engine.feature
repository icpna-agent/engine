# language: es

Característica: Webhook del motor conversacional

  Como sistema de mensajería
  Quiero que el motor confirme eventos entrantes de Meta
  Para procesar conversaciones de WhatsApp sin bloquear el webhook

  Escenario: Confirmar un evento entrante de WhatsApp
    Dado que el motor está listo para recibir eventos de Meta
    Cuando Meta envía un evento de mensaje al motor
    Entonces el motor responde con estado 200
    Y el motor confirma "EVENT_RECEIVED"
