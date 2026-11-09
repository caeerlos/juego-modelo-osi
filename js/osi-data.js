const osiLayers = [
  {
    number: 7,
    icon: "✉️",
    summary: "Es la ventana directa con el usuario. Es donde escribes un correo, abres una página web o envías un chat a un amigo.",
    challenge: "El usuario presiona 'Enviar mensaje' en su aplicación favorita. ¿A qué capa corresponde?",
    options: ["Capa de Aplicación", "Capa de Red", "Capa Física"],
    correctIndex: 0
  },
  {
    number: 6,
    icon: "🔐",
    summary: "Es el traductor y empaquetador del sistema. Se encarga de convertir los datos a un formato comprensible, comprimirlos y cifrarlos en código secreto.",
    challenge: "El mensaje debe cifrarse para que nadie espía su contenido en el camino. ¿Quién hace esta traducción?",
    options: ["Capa de Enlace", "Capa de Presentación", "Capa de Sesión"],
    correctIndex: 1
  },
  {
    number: 5,
    icon: "📞",
    summary: "Es el moderador de la conversación. Abre la llamada, verifica que ambos extremos sigan conectados y cierra la charla al terminar.",
    challenge: "El sistema comprueba si el receptor sigue en línea antes de continuar enviando datos. ¿Quién gestiona esta conexión?",
    options: ["Capa de Transporte", "Capa Física", "Capa de Sesión"],
    correctIndex: 2
  },
  {
    number: 4,
    icon: "📦",
    summary: "Es el jefe de despacho. Si una carta es muy larga, la corta en piezas numeradas (1/3, 2/3, 3/3) y vigila que ninguna se pierda ni llegue desordenada.",
    challenge: "Un archivo grande se fragmentó en paquetes numerados y se verifica que lleguen sin errores. ¿Qué capa lo controla?",
    options: ["Capa de Transporte", "Capa de Red", "Capa de Presentación"],
    correctIndex: 0
  },
  {
    number: 3,
    icon: "🗺️",
    summary: "Es el mapa y el GPS mundial. Le pega a cada caja la dirección de destino (Dirección IP) y decide la mejor ruta entre ciudades o países.",
    challenge: "El paquete necesita saber qué camino tomar en internet usando una dirección IP lógica. ¿Qué capa se encarga?",
    options: ["Capa Física", "Capa de Red", "Capa de Enlace"],
    correctIndex: 1
  },
  {
    number: 2,
    icon: "🚪",
    summary: "Es el cartero del vecindario. Se encarga del salto directo entre tu equipo y el router más cercano usando la dirección física de la tarjeta de red (MAC).",
    challenge: "Los datos viajan de la tarjeta de red de tu computador al switch de tu casa sin chocar. ¿Qué capa trabaja aquí?",
    options: ["Capa de Enlace de Datos", "Capa de Sesión", "Capa de Aplicación"],
    correctIndex: 0
  },
  {
    number: 1,
    icon: "⚡",
    summary: "Son las carreteras y los vehículos reales. Transforma los ceros y unos en impulsos eléctricos por cables de cobre, destellos de luz o señales de radio WiFi.",
    challenge: "El cable de red Ethernet se desconectó y no pasa electricidad ni pulsos de luz. ¿En qué capa ocurrió el fallo?",
    options: ["Capa de Transporte", "Capa de Presentación", "Capa Física"],
    correctIndex: 2
  }
];
