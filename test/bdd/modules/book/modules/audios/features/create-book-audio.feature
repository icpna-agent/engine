# language: es

Característica: Crear audio de libro

  Como administrador
  Quiero registrar audios de un libro
  Para que el agente use transcripciones y recursos auditivos

  Escenario: Crear un audio correctamente
    Dado que el administrador está autenticado para gestionar audios de libro
    Cuando crea un audio con índice "7.1"
    Entonces el audio se crea con estado 201
    Y el audio queda registrado con índice "7.1"
