# language: es

Característica: Listar lecciones de libro

  Escenario: Listar lecciones correctamente
    Dado que el administrador está autenticado para listar lecciones de libro
    Cuando lista las lecciones de libro registradas
    Entonces la lista de lecciones de libro responde con estado 200
    Y la lista de lecciones de libro contiene resultados
