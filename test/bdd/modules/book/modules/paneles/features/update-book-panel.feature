# language: es

Característica: Editar panel de libro

  Escenario: Editar un panel correctamente
    Dado que el administrador está autenticado para editar paneles de libro
    Cuando edita el panel de libro 1 con título "Quantifiers Editado"
    Entonces el panel de libro editado responde con estado 200
    Y el panel de libro queda actualizado con título "Quantifiers Editado"
