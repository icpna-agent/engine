# language: es

Característica: Crear unidad de libro

  Como administrador
  Quiero registrar unidades de un libro
  Para organizar las lecciones por bloques

  Escenario: Crear una unidad correctamente
    Dado que el administrador está autenticado para gestionar unidades de libro
    Cuando crea la unidad 7 con título "Is This Yours?"
    Entonces la unidad se crea con estado 201
    Y la unidad queda registrada con número 7
