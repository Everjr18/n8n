export const es = {
	hero: {
		title: "Automatiza tu negocio con n8n",
		description:
			"Crea flujos automáticos para ahorrar tiempo, reducir errores y escalar tu operación.",
		contactButton: "Escríbenos por WhatsApp",
		contactSubtext: "Sin compromiso — cuéntanos qué necesitas automatizar.",
		trustNote: "Confiado por emprendedores y pymes en toda LATAM",
	},
	howItWorks: {
		title: "¿Cómo funciona?",
		steps: [
			"🧠 Hablamos sobre tu necesidad",
			"🔧 Diseñamos un flujo automatizado",
			"🚀 Lo integramos y queda funcionando",
		],
	},
	services: {
		title: "¿Qué puedo automatizar por ti?",
		list: [
			"Automatización de tareas repetitivas",
			"Emails y alertas automáticas",
			"Integración con WhatsApp y Telegram",
			"Actualización de Google Sheets o bases de datos",
			"Flujos lógicos personalizados",
		],
	},
	plans: {
		title: "Planes de automatización",
		options: [
			{
				title: "🔹 Plan Básico",
				desc: "1 flujo simple (Google Sheets, email)",
			},
			{
				title: "🔸 Plan Pro",
				desc: "Hasta 5 automatizaciones con bases de datos",
			},
			{
				title: "🔧 Plan Personalizado",
				desc: "Diseño e integración según tus necesidades",
			},
		],
	},
	cases: {
		title: "Casos reales de automatización",
		cases: [
			{
				id: "ecommerce",
				title: "🛒 E-commerce",
				short:
					"Una tienda automatizó el registro de compras y ahorra 15 horas semanales.",
				full: `Este flujo se activa cada vez que se realiza una nueva compra.
Consulta la base de datos, actualiza Google Sheets y envía un correo al cliente.
Ahorra trabajo manual y reduce errores.`,
				image: "agregar-compra-flow.jpg",
			},
			{
				id: "rag",
				title: "🧠 Vinculación RAG",
				short: "Un proyecto educativo relaciona preguntas con posts usando IA.",
				full: `Este flujo genera embeddings de preguntas y las relaciona con posts usando ChromaDB.
La búsqueda es más precisa y útil para los usuarios.`,
				image: "rag.png",
			},
			{
				id: "desactivar",
				title: "⏳ Desactivación automática",
				short: "El sistema desactiva usuarios cuando vence su plan.",
				full: `Consulta Google Sheets y la base de datos. Si el plan expiró, desactiva el usuario y envía un aviso por correo.
Automatización útil para gestión de suscripciones.`,
				image: "desactivar.png",
			},
		],
	},
	trust: {
		title: "¿Por qué confiar en nosotros?",
		list: [
			"🔒 Privacidad garantizada: tus datos están seguros",
			"🧑‍💻 100% sin código: solo dinos qué necesitas",
			"🎯 Atención personalizada 1 a 1",
			"🚀 Sin riesgo: te mostramos antes de entregar",
		],
	},
	footer: "Automatizaciones con n8n. Todos los derechos reservados.",
};
