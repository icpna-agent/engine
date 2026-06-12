# language: es

Característica: Eliminar imagen de libro

  Escenario: Eliminar una imagen correctamente
    Dado que el administrador está autenticado para eliminar imágenes de libro
    Cuando elimina la imagen de libro 1
    Entonces la eliminación de la imagen de libro responde con estado 200
    Y la eliminación de la imagen de libro queda confirmada
