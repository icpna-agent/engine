# language: es

Característica: Listar usuarios

  Escenario: Listar usuarios correctamente
    Dado que el administrador está autenticado para listar usuarios
    Cuando lista los usuarios registrados
    Entonces la lista de usuarios responde con estado 200
    Y la lista de usuarios contiene resultados
