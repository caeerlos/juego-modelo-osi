const osiLayers = [
  {
    number: 7,
    name: "Capa de Aplicación",
    icon: "✉️",
    simpleTitle: "El Mensaje",
    story: "Escribes tu carta o dibujo en la pantalla para enviárselo a tu amigo.",
    challenge: "¿Qué capa es la que interactúa directamente con el usuario?",
    options: ["Aplicación", "Red", "Física"],
    correctIndex: 0
  },
  {
    number: 6,
    name: "Capa de Presentación",
    icon: "🔐",
    simpleTitle: "El Traductor Secreto",
    story: "Traduce la carta a un código secreto o la comprime para que ocupe menos espacio.",
    challenge: "¿Quién traduce y cifra el mensaje?",
    options: ["Enlace de Datos", "Presentación", "Sesión"],
    correctIndex: 1
  },
  {
    number: 5,
    name: "Capa de Sesión",
    icon: "📞",
    simpleTitle: "La Llamada",
    story: "Asegura que ambos extremos estén listos para conversar antes de enviar.",
    challenge: "¿Qué capa inicia y mantiene abierta la conversación?",
    options: ["Transporte", "Física", "Sesión"],
    correctIndex: 2
  },
  {
    number: 4,
    name: "Capa de Transporte",
    icon: "📦",
    simpleTitle: "Las Cajas Numeradas",
    story: "Divide la carta en trozos pequeños numerados para que nada se pierda en el camino.",
    challenge: "¿Qué capa divide el mensaje en paquetes y revisa que lleguen todos?",
    options: ["Transporte", "Red", "Presentación"],
    correctIndex: 0
  },
  {
    number: 3,
    name: "Capa de Red",
    icon: "🗺️",
    simpleTitle: "El Mapa y la Dirección IP",
    story: "Pone la dirección de la ciudad y el código postal para saber qué camino tomar.",
    challenge: "¿Qué capa usa las direcciones IP para encontrar la mejor ruta?",
    options: ["Física", "Red", "Enlace de Datos"],
    correctIndex: 1
  },
  {
    number: 2,
    name: "Capa de Enlace de Datos",
    icon: "🚪",
    simpleTitle: "La Puerta del Vecino (MAC)",
    story: "El cartero revisa que el paquete cruce de puerta a puerta sin romperse en el vecindario.",
    challenge: "¿Qué capa se encarga del envío directo entre tarjetas de red cercanas?",
    options: ["Enlace de Datos", "Sesión", "Aplicación"],
    correctIndex: 0
  },
  {
    number: 1,
    name: "Capa de Física",
    icon: "⚡",
    simpleTitle: "El Cable y la Electricidad",
    story: "Convierte todo en pulsos de luz por fibra óptica, cables de cobre o señales de radio en el aire.",
    challenge: "¿Qué capa son los cables, conectores y ondas de radio?",
    options: ["Transporte", "Presentación", "Física"],
    correctIndex: 2
  }
];
