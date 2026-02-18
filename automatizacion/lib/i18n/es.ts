import type { LandingDictionary } from "./types";

export const es: LandingDictionary = {
	hero: {
		title:
			"Reducimos ausencias y llenamos tu agenda con automatizacion por WhatsApp",
		subtitle:
			"Implementamos flujos en n8n para responder rapido, confirmar citas y hacer seguimiento automatico.",
		bullets: [
			"Respuesta inmediata a nuevos pacientes",
			"Confirmacion + recordatorios de cita (menos no-shows)",
			"Seguimiento post-cita y reactivacion",
		],
		primaryCta: "Hablar por WhatsApp",
		secondaryCta: "Ver casos/Resultados",
	},
	proof: {
		title: "Resultados que puedes validar",
		cases: [
			{
				title: "Caso 1: Odontologia privada",
				before: "Antes: [Placeholder] no-shows por semana y respuestas tardias.",
				after:
					"Despues: recordatorios automaticos 24h y 2h + respuesta inicial en minutos.",
				result: "Resultado: [Placeholder] menos ausencias y agenda mas estable.",
			},
			{
				title: "Caso 2: Consultorio de medicina estetica",
				before: "Antes: leads sin seguimiento despues del primer contacto.",
				after:
					"Despues: flujo de calificacion por WhatsApp y seguimiento de reactivacion.",
				result: "Resultado: [Placeholder] mas citas recuperadas por mes.",
			},
			{
				title: "Caso 3: Consulta especializada",
				before: "Antes: confirmaciones manuales consumiendo horas del equipo.",
				after:
					"Despues: confirmacion automatica + actualizacion de estado en Sheets.",
				result: "Resultado: [Placeholder] horas administrativas liberadas por semana.",
			},
		],
		placeholderNote:
			"Nota: los placeholders se reemplazan con tus metricas reales. No inventamos datos.",
		integrationsTitle: "Compatible con",
		integrations: ["WhatsApp", "Google Sheets", "Gmail", "Google Calendar"],
	},
	automations: {
		title: "Que automatizamos en consultorios (MVP)",
		privacyNote:
			"Solo trabajamos datos operativos (nombre, contacto, estado de cita). No almacenamos datos clinicos sensibles.",
		items: [
			{
				title: "Lead capture",
				description: "Registro en Sheets/CRM simple + estado del lead.",
				example:
					"Ejemplo: nuevo lead de WhatsApp entra a hoja con estado \"por contactar\".",
			},
			{
				title: "Auto-reply + calificacion",
				description:
					"Respuesta automatica por WhatsApp con preguntas clave de filtro.",
				example:
					"Ejemplo: especialidad, horario preferido y ciudad antes de agendar.",
			},
			{
				title: "Confirmacion + recordatorios",
				description: "Mensajes automaticos 24h y 2h antes de la cita.",
				example:
					"Ejemplo: si el paciente confirma, se actualiza estado en la agenda.",
			},
			{
				title: "Post-cita y reactivacion",
				description: "Seguimiento para resena y control en semanas definidas.",
				example:
					"Ejemplo: envio automatico de mensaje de control a las X semanas.",
			},
			{
				title: "Pago/anticipo con link",
				description: "Envio de link de pago + confirmacion operativa automatica.",
				example:
					"Ejemplo: al detectar pago, se marca cita como confirmada (sin datos clinicos).",
			},
		],
	},
	packages: {
		title: "Paquetes",
		subtitle: "Elige alcance y activa por WhatsApp. Sin checkout en esta etapa.",
		recommendedLabel: "Recomendado",
		items: [
			{
				tier: "starter",
				name: "Starter (1-2 flujos)",
				forWho: "Para quien es: consultorio empezando automatizacion.",
				scope: [
					"Respuesta automatica inicial",
					"Confirmacion de citas",
					"Ajustes basicos de mensajes",
				],
				whatsappMessage:
					"Hola, tengo un consultorio y quiero automatizar respuesta + confirmacion de citas. Me interesa Starter...",
			},
			{
				tier: "pro",
				name: "Pro (3 flujos)",
				forWho: "Para quien es: equipos con agenda activa y no-shows recurrentes.",
				scope: [
					"Lead capture + calificacion",
					"Confirmacion + recordatorios",
					"Seguimiento post-cita",
				],
				whatsappMessage:
					"Hola, quiero reducir ausencias con confirmacion + recordatorios + seguimiento. Me interesa Pro...",
				recommended: true,
			},
			{
				tier: "full",
				name: "Full (5 flujos)",
				forWho: "Para quien es: consultorios que quieren sistema completo.",
				scope: [
					"Lead -> cita -> recordatorios",
					"Post-cita y reactivacion",
					"Anticipo con confirmacion automatica",
				],
				whatsappMessage:
					"Hola, quiero el sistema completo (lead->cita->recordatorio->post-cita). Me interesa Full...",
			},
		],
	},
	process: {
		title: "Como funciona",
		steps: [
			{
				title: "1) Diagnostico por WhatsApp (10-15 min)",
				description: "Revisamos proceso actual y definimos prioridad.",
			},
			{
				title: "2) Implementacion + pruebas",
				description: "Construimos y validamos flujos en n8n contigo.",
			},
			{
				title: "3) Entrega + soporte / ajustes",
				description: "Activamos operacion y afinamos segun resultados.",
			},
		],
	},
	faq: {
		title: "Preguntas frecuentes",
		items: [
			{
				question: "Que necesito para empezar?",
				answer:
					"Acceso a tu WhatsApp operativo, agenda/calendario y una llamada corta de diagnostico.",
			},
			{
				question: "Cuanto tarda?",
				answer:
					"Depende del alcance, pero el primer flujo suele quedar en pocos dias habiles.",
			},
			{
				question: "Funciona con mi sistema actual?",
				answer:
					"Normalmente si. Revisamos integraciones disponibles con tus herramientas antes de implementar.",
			},
			{
				question: "Incluye soporte?",
				answer: "Si, incluye soporte y ajustes segun el paquete elegido.",
			},
			{
				question: "Que pasa si quiero mas flujos despues?",
				answer:
					"Escalamos por fases. Puedes ampliar alcance sin rehacer lo ya implementado.",
			},
			{
				question: "Que datos guardan?",
				answer:
					"Solo datos operativos de gestion de citas y contacto. No guardamos datos clinicos sensibles.",
			},
		],
	},
	finalCta: {
		title: "Si quieres menos ausencias y mas agenda confirmada, hablemos hoy",
		description:
			"Te ayudamos a definir el flujo minimo viable para tu consultorio en una llamada corta por WhatsApp.",
		primaryCta: "Hablar por WhatsApp",
	},
	footer: "Automatizaciones para consultorios privados con n8n.",
};
