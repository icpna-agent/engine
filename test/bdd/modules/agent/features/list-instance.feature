# language: es

Característica: Listar instancias de WhatsApp

  Escenario: Listar instancias correctamente
    Dado que el administrador está autenticado para listar instancias
    Cuando lista las instancias registradas
    Entonces la lista de instancias responde con estado 200
    Y la lista de instancias contiene resultados
