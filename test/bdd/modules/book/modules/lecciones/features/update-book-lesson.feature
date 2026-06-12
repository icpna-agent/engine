# language: es

Característica: Editar lección de libro

  Escenario: Editar una lección correctamente
    Dado que el administrador está autenticado para editar lecciones de libro
    Cuando edita la lección de libro 1 con título "Say Yes to Mess Editado"
    Entonces la lección de libro editada responde con estado 200
    Y la lección de libro queda actualizada con título "Say Yes to Mess Editado"
