# language: es

Característica: Crear índice de libro

  Como administrador
  Quiero registrar índices de un libro
  Para ubicar secciones importantes del contenido

  Escenario: Crear un índice correctamente
    Dado que el administrador está autenticado para gestionar índices de libro
    Cuando crea un índice con título "Functional Language: Breaking the ice"
    Entonces el índice se crea con estado 201
    Y el índice queda registrado con título "Functional Language: Breaking the ice"
