import type { LandingDictionary } from "./types";

export const es: LandingDictionary = {
	hero: {
		badge: "Automatizaciones n8n para equipos pequeños",
		title: "Convierte tareas manuales en flujos que trabajan solos",
		subtitle:
			"Implementa automatizaciones listas para producción, reduce errores operativos y libera tiempo para vender más.",
		outcomes: [
			"Ahorra entre 6 y 20 horas por semana en tareas repetitivas.",
			"Activa correos, alertas y actualizaciones sin seguimiento manual.",
			"Escala operaciones sin sumar herramientas complejas.",
		],
		primaryCta: "Ver planes",
		secondaryCta: "Cómo funciona",
		trustNote: "Más de 80 flujos implementados en proyectos LATAM.",
	},
	proof: {
		title: "Resultados que importan",
		items: [
			{
				title: "Implementación rápida",
				description: "Primer flujo funcional en pocos días, no semanas.",
			},
			{
				title: "Menos errores humanos",
				description: "Validaciones y notificaciones automáticas en puntos críticos.",
			},
			{
				title: "Soporte continuo",
				description: "Acompañamiento para ajustes y mejoras después del go-live.",
			},
		],
	},
	howItWorks: {
		title: "Cómo funciona",
		steps: [
			{
				title: "1. Diagnóstico",
				description:
					"Revisamos tu proceso actual y definimos el primer caso de mayor impacto.",
			},
			{
				title: "2. Implementación",
				description:
					"Construimos el flujo en n8n, conectamos tus herramientas y hacemos pruebas.",
			},
			{
				title: "3. Activación",
				description:
					"Publicamos en producción, medimos resultados y ajustamos si hace falta.",
			},
		],
	},
	includes: {
		title: "Qué incluye",
		items: [
			"Automatizaciones con n8n listas para producción.",
			"Conexión con formularios, CRM, correo, Sheets o APIs.",
			"Control de errores y alertas cuando algo falla.",
			"Documentación breve para operar sin depender del desarrollador.",
			"Sesión de onboarding para tu equipo.",
		],
	},
	pricing: {
		title: "Planes de suscripción",
		subtitle:
			"Máximo tres opciones para decidir rápido. Sin contratos largos ni costos ocultos.",
		recommendedLabel: "Recomendado",
		afterPayment:
			"Después del pago: activamos tu acceso, recibes onboarding y empezamos implementación.",
		plans: [
			{
				tier: "tier1",
				name: "Starter",
				price: "$49",
				period: "/mes",
				audience: "Para quién es: negocio con 1 flujo clave por automatizar.",
				bullets: [
					"1 flujo activo",
					"Soporte por email",
					"Actualizaciones menores",
				],
				cta: "Elegir Starter",
			},
			{
				tier: "tier2",
				name: "Growth",
				price: "$99",
				period: "/mes",
				audience: "Para quién es: equipo con varios procesos y prioridad en velocidad.",
				bullets: [
					"Hasta 3 flujos activos",
					"Soporte prioritario",
					"Optimización mensual",
				],
				cta: "Elegir Growth",
				recommended: true,
			},
			{
				tier: "tier3",
				name: "Scale",
				price: "$199",
				period: "/mes",
				audience:
					"Para quién es: operación con múltiples integraciones y mayor volumen.",
				bullets: [
					"Hasta 8 flujos activos",
					"Soporte en horario ampliado",
					"Roadmap trimestral",
				],
				cta: "Elegir Scale",
			},
		],
	},
	faq: {
		title: "Preguntas frecuentes",
		items: [
			{
				question: "¿Necesito saber programar?",
				answer:
					"No. Tú defines el resultado y nosotros implementamos la automatización.",
			},
			{
				question: "¿Puedo cancelar cuando quiera?",
				answer: "Sí. La suscripción es mensual y puedes cancelarla desde PayPal.",
			},
			{
				question: "¿Qué pasa si un flujo falla?",
				answer:
					"Configuramos alertas y revisamos la incidencia según el plan contratado.",
			},
			{
				question: "¿Incluye onboarding?",
				answer:
					"Sí. Después del pago coordinamos una sesión inicial para activar el trabajo.",
			},
		],
	},
	finalCta: {
		title: "Empieza con el flujo que más impacto tiene hoy",
		description:
			"Selecciona tu plan y activa la suscripción en minutos. Si tienes dudas, te ayudamos a elegir.",
		primaryCta: "Ir a checkout",
		secondaryCta: "Hablar por WhatsApp",
	},
	checkout: {
		title: "Activa tu suscripción",
		subtitle:
			"Selecciona plan, confirma tu correo y completa el pago con PayPal.",
		emailLabel: "Correo para activar el acceso",
		emailPlaceholder: "tu@empresa.com",
		secureNote: "Pago seguro procesado por PayPal.",
		backToPricing: "Volver a planes",
		paypalDisclaimer:
			"También puedes ver opción de tarjeta (Guest Checkout), según tu país y evaluación de riesgo de PayPal.",
	},
	success: {
		title: "Pago recibido",
		subtitle:
			"Tu suscripción está en proceso de activación automática. Te notificamos cuando quede activa.",
		statusPending: "Estado actual",
		dashboardCta: "Volver al inicio",
	},
	cancel: {
		title: "Pago cancelado",
		subtitle: "No se realizó ningún cobro. Puedes volver a intentarlo cuando quieras.",
		retryCta: "Volver a checkout",
	},
	footer: "Automatizaciones con n8n. Todos los derechos reservados.",
};
