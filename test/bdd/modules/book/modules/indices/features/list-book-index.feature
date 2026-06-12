# language: es

Característica: Listar índices de libro

  Escenario: Listar índices correctamente
    Dado que el administrador está autenticado para listar índices de libro
    Cuando lista los índices de libro registrados
    Entonces la lista de índices de libro responde con estado 200
    Y la lista de índices de libro contiene resultados
