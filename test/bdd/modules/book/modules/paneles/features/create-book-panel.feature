# language: es

Característica: Crear panel de libro

  Como administrador
  Quiero registrar paneles explicativos de un libro
  Para que el agente consulte reglas y notas de apoyo

  Escenario: Crear un panel correctamente
    Dado que el administrador está autenticado para gestionar paneles de libro
    Cuando crea un panel con título "Quantifiers"
    Entonces el panel se crea con estado 201
    Y el panel queda registrado con título "Quantifiers"
