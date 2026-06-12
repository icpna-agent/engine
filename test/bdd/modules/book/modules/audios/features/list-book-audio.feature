# language: es

Característica: Listar audios de libro

  Escenario: Listar audios correctamente
    Dado que el administrador está autenticado para listar audios de libro
    Cuando lista los audios de libro registrados
    Entonces la lista de audios de libro responde con estado 200
    Y la lista de audios de libro contiene resultados
