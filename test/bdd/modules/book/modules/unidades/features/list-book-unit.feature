# language: es

Característica: Listar unidades de libro

  Escenario: Listar unidades correctamente
    Dado que el administrador está autenticado para listar unidades de libro
    Cuando lista las unidades de libro registradas
    Entonces la lista de unidades de libro responde con estado 200
    Y la lista de unidades de libro contiene resultados
