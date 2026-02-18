import type { LandingDictionary } from "./types";

export const en: LandingDictionary = {
	hero: {
		title: "We reduce no-shows and fill your schedule with WhatsApp automation",
		subtitle:
			"We implement n8n workflows to reply faster, confirm appointments, and follow up automatically.",
		bullets: [
			"Immediate response to new patients",
			"Appointment confirmation + reminders (fewer no-shows)",
			"Post-visit follow-up and reactivation",
		],
		primaryCta: "Chat on WhatsApp",
		secondaryCta: "View cases/Results",
	},
	proof: {
		title: "Results you can validate",
		cases: [
			{
				title: "Case 1: Private dental clinic",
				before: "Before: [Placeholder] no-shows per week and slow responses.",
				after:
					"After: automatic reminders at 24h and 2h + first response in minutes.",
				result: "Result: [Placeholder] fewer missed appointments and steadier schedule.",
			},
			{
				title: "Case 2: Aesthetic medicine clinic",
				before: "Before: leads were lost after first contact.",
				after:
					"After: WhatsApp qualification flow and automated reactivation follow-ups.",
				result: "Result: [Placeholder] more recovered appointments per month.",
			},
			{
				title: "Case 3: Specialized office",
				before: "Before: manual confirmations consuming admin time.",
				after: "After: auto-confirmation + status updates in Sheets.",
				result: "Result: [Placeholder] admin hours saved each week.",
			},
		],
		placeholderNote:
			"Note: placeholders must be replaced with your real numbers. We do not invent data.",
		integrationsTitle: "Compatible with",
		integrations: ["WhatsApp", "Google Sheets", "Gmail", "Google Calendar"],
	},
	automations: {
		title: "What we automate for clinics (MVP)",
		privacyNote:
			"We only handle operational data (name, contact, appointment status). We do not store sensitive clinical data.",
		items: [
			{
				title: "Lead capture",
				description: "Registration in Sheets/simple CRM + lead status.",
				example: "Example: new lead is logged with status \"to contact\".",
			},
			{
				title: "Auto-reply + qualification",
				description: "WhatsApp auto-reply with qualification questions.",
				example: "Example: specialty, preferred time, and city before booking.",
			},
			{
				title: "Confirmation + reminders",
				description: "Automatic messages 24h and 2h before appointment.",
				example: "Example: patient confirms and status updates in schedule.",
			},
			{
				title: "Post-visit and reactivation",
				description: "Follow-up for reviews and checkup reactivation.",
				example: "Example: automatic reminder after X weeks for follow-up.",
			},
			{
				title: "Advance payment link",
				description: "Payment link sent + automatic operational confirmation.",
				example:
					"Example: when payment is detected, appointment is marked confirmed.",
			},
		],
	},
	packages: {
		title: "Packages",
		subtitle: "Choose scope and activate via WhatsApp. No checkout in this stage.",
		recommendedLabel: "Recommended",
		items: [
			{
				tier: "starter",
				name: "Starter (1-2 flows)",
				forWho: "Who it is for: clinics starting with automation.",
				scope: [
					"Initial automated reply",
					"Appointment confirmation",
					"Basic message adjustments",
				],
				whatsappMessage:
					"Hola, tengo un consultorio y quiero automatizar respuesta + confirmacion de citas. Me interesa Starter...",
			},
			{
				tier: "pro",
				name: "Pro (3 flows)",
				forWho: "Who it is for: teams with active schedules and no-shows.",
				scope: [
					"Lead capture + qualification",
					"Confirmation + reminders",
					"Post-visit follow-up",
				],
				whatsappMessage:
					"Hola, quiero reducir ausencias con confirmacion + recordatorios + seguimiento. Me interesa Pro...",
				recommended: true,
			},
			{
				tier: "full",
				name: "Full (5 flows)",
				forWho: "Who it is for: clinics needing full end-to-end flow.",
				scope: [
					"Lead -> booking -> reminders",
					"Post-visit and reactivation",
					"Advance payment confirmation",
				],
				whatsappMessage:
					"Hola, quiero el sistema completo (lead->cita->recordatorio->post-cita). Me interesa Full...",
			},
		],
	},
	process: {
		title: "How it works",
		steps: [
			{
				title: "1) WhatsApp diagnosis (10-15 min)",
				description: "We review your current process and top priority.",
			},
			{
				title: "2) Implementation + tests",
				description: "We build and validate n8n workflows with your team.",
			},
			{
				title: "3) Delivery + support / adjustments",
				description: "We launch and optimize based on early results.",
			},
		],
	},
	faq: {
		title: "Frequently asked questions",
		items: [
			{
				question: "What do I need to start?",
				answer:
					"Your operational WhatsApp access, schedule/calendar, and a short diagnosis call.",
			},
			{
				question: "How long does it take?",
				answer: "Depending on scope, first flow is usually ready within a few days.",
			},
			{
				question: "Does it work with my current system?",
				answer:
					"Usually yes. We validate available integrations before implementation.",
			},
			{
				question: "Is support included?",
				answer: "Yes. Support and adjustments are included by package scope.",
			},
			{
				question: "What if I need more flows later?",
				answer: "We scale in phases without rebuilding what is already done.",
			},
			{
				question: "What data do you store?",
				answer:
					"Only operational appointment/contact data. No sensitive clinical data is stored.",
			},
		],
	},
	finalCta: {
		title: "If you want fewer no-shows and more confirmed appointments, let's talk",
		description:
			"We help you define the minimum high-impact flow for your clinic via WhatsApp.",
		primaryCta: "Chat on WhatsApp",
	},
	footer: "Private clinic automation with n8n.",
};
