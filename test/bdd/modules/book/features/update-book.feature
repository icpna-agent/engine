# language: es

Característica: Editar libro

  Escenario: Editar un libro correctamente
    Dado que el administrador está autenticado para editar libros
    Cuando edita el libro 1 con título "American Big Picture Editado"
    Entonces el libro editado responde con estado 200
    Y el libro queda actualizado con título "American Big Picture Editado"
