# language: es

Característica: Listar paneles de libro

  Escenario: Listar paneles correctamente
    Dado que el administrador está autenticado para listar paneles de libro
    Cuando lista los paneles de libro registrados
    Entonces la lista de paneles de libro responde con estado 200
    Y la lista de paneles de libro contiene resultados
