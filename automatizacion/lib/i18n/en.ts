export const en = {
	hero: {
		title: "Automate your business with n8n",
		description:
			"Create workflows to save time, reduce errors, and scale your operations.",
		contactButton: "Message us on WhatsApp",
		contactSubtext: "No commitment — tell us what you need to automate.",
		trustNote: "Trusted by entrepreneurs and small businesses across LATAM",
	},

	howItWorks: {
		title: "How does it work?",
		steps: [
			"🧠 We discuss your needs",
			"🔧 We design an automated workflow",
			"🚀 We integrate and deploy it",
		],
	},

	services: {
		title: "What can I automate for you?",
		list: [
			"Repetitive task automation",
			"Automatic emails and alerts",
			"Integration with WhatsApp and Telegram",
			"Google Sheets or database updates",
			"Custom logical workflows",
		],
		callToAction: "Don't see what you need? Let's talk",
	},

	plans: {
		title: "Automation Plans",
		options: [
			{
				title: "🔹 Basic Plan",
				desc: "1 simple flow (Google Sheets, email)",
			},
			{
				title: "🔸 Pro Plan",
				desc: "Up to 5 automations with databases",
			},
			{
				title: "🔧 Custom Plan",
				desc: "Design and integration based on your needs",
			},
		],
	},

	cases: {
		title: "Real automation cases",
		cases: [
			{
				id: "ecommerce",
				title: "🛒 E-commerce",
				short:
					"An online store automated order logging and saves 15 hours per week.",
				full: `This flow triggers whenever a new purchase is made.
It queries the database, updates Google Sheets, and sends an email to the client.
It reduces manual work and avoids mistakes.`,
				image: "agregar-compra-flow.jpg",
				download: "see full image",
				message: "I want something like this 🚀",
			},
			{
				id: "rag",
				title: "🧠 RAG Linking",
				short: "An edtech project links questions with posts using AI.",
				full: `This automation generates embeddings from questions and links them with blog posts using ChromaDB.
The result is a more relevant and intelligent search experience.`,
				image: "rag.jpg",
				download: "see full image",
				message: "I want something like this 🚀",
			},
			{
				id: "desactivar",
				title: "⏳ Auto deactivation",
				short: "The system disables users when their plan expires.",
				full: `It checks Google Sheets and the database. If the plan is expired, it deactivates the user and sends a notification email.
Useful for managing subscriptions at scale.`,
				image: "desactivar.jpg",
				download: "see full image",
				message: "I want something like this 🚀",
			},
		],
	},

	trust: {
		title: "Why trust us?",
		list: [
			"Guaranteed privacy: your data stays safe",
			"100% no-code: just tell us what you need",
			"1-on-1 guidance: we support you end-to-end",
			"No risk: review results together before delivery",
		],
	},

	footer: "Automations with n8n. All rights reserved.",
};
