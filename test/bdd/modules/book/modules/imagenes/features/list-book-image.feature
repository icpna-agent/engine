# language: es

Característica: Listar imágenes de libro

  Escenario: Listar imágenes correctamente
    Dado que el administrador está autenticado para listar imágenes de libro
    Cuando lista las imágenes de libro registradas
    Entonces la lista de imágenes de libro responde con estado 200
    Y la lista de imágenes de libro contiene resultados
