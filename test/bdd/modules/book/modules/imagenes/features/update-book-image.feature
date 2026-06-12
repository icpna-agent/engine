# language: es

Característica: Editar imagen de libro

  Escenario: Editar una imagen correctamente
    Dado que el administrador está autenticado para editar imágenes de libro
    Cuando edita la imagen de libro 1 para la página 3
    Entonces la imagen de libro editada responde con estado 200
    Y la imagen de libro queda actualizada para la página 3
