# language: es

Característica: Crear usuario

  Como administrador
  Quiero registrar usuarios habilitados
  Para permitirles interactuar con el agente

  Escenario: Crear un usuario correctamente
    Dado que el administrador está autenticado para gestionar usuarios
    Cuando crea un usuario con teléfono "+51988887777"
    Entonces el usuario se crea con estado 201
    Y el usuario queda registrado con teléfono "+51988887777"
