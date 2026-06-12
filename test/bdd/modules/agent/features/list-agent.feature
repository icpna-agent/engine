# language: es

Característica: Listar agentes

  Escenario: Listar agentes correctamente
    Dado que el administrador está autenticado para listar agentes
    Cuando lista los agentes registrados
    Entonces la lista de agentes responde con estado 200
    Y la lista de agentes contiene resultados
