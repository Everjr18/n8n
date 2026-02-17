import type { LandingDictionary } from "./types";

export const en: LandingDictionary = {
	hero: {
		badge: "n8n automation for lean teams",
		title: "Turn manual tasks into flows that run on their own",
		subtitle:
			"Launch production-ready automations, reduce operational errors, and free your team for higher-value work.",
		outcomes: [
			"Save 6 to 20 hours per week on repetitive operations.",
			"Trigger emails, alerts, and updates without manual follow-up.",
			"Scale your process stack without extra complexity.",
		],
		primaryCta: "View plans",
		secondaryCta: "How it works",
		trustNote: "80+ automation flows shipped for LATAM businesses.",
	},
	proof: {
		title: "Built for measurable outcomes",
		items: [
			{
				title: "Fast implementation",
				description: "Your first live workflow in days, not weeks.",
			},
			{
				title: "Fewer manual mistakes",
				description:
					"Critical process steps include validation and automatic alerts.",
			},
			{
				title: "Ongoing support",
				description:
					"Post-launch adjustments and iterative improvements are included.",
			},
		],
	},
	howItWorks: {
		title: "How it works",
		steps: [
			{
				title: "1. Process review",
				description:
					"We map your current workflow and select the highest-impact automation.",
			},
			{
				title: "2. Implementation",
				description:
					"We build in n8n, connect your tools, and run validation tests.",
			},
			{
				title: "3. Activation",
				description:
					"We launch in production, track results, and fine-tune as needed.",
			},
		],
	},
	includes: {
		title: "What is included",
		items: [
			"Production-ready n8n workflows.",
			"Integrations with forms, CRM, email, Sheets, and APIs.",
			"Error handling and alerting when a flow breaks.",
			"Concise operational documentation.",
			"Onboarding session for your team.",
		],
	},
	pricing: {
		title: "Subscription plans",
		subtitle:
			"Three options, no complexity. Monthly billing with clear scope per tier.",
		recommendedLabel: "Recommended",
		afterPayment:
			"After payment: we activate your access, send onboarding, and start implementation.",
		plans: [
			{
				tier: "tier1",
				name: "Starter",
				price: "$49",
				period: "/month",
				audience: "Who it is for: one key workflow to automate first.",
				bullets: ["1 active flow", "Email support", "Minor improvements"],
				cta: "Choose Starter",
			},
			{
				tier: "tier2",
				name: "Growth",
				price: "$99",
				period: "/month",
				audience: "Who it is for: teams with multiple recurring workflows.",
				bullets: [
					"Up to 3 active flows",
					"Priority support",
					"Monthly optimization review",
				],
				cta: "Choose Growth",
				recommended: true,
			},
			{
				tier: "tier3",
				name: "Scale",
				price: "$199",
				period: "/month",
				audience:
					"Who it is for: operations with multiple systems and higher volume.",
				bullets: [
					"Up to 8 active flows",
					"Extended support window",
					"Quarterly automation roadmap",
				],
				cta: "Choose Scale",
			},
		],
	},
	faq: {
		title: "Frequently asked questions",
		items: [
			{
				question: "Do I need to code?",
				answer:
					"No. You define the business outcome and we handle implementation.",
			},
			{
				question: "Can I cancel anytime?",
				answer: "Yes. Billing is monthly and cancellation is handled in PayPal.",
			},
			{
				question: "What happens if a flow fails?",
				answer:
					"We configure alerts and resolve incidents according to your plan tier.",
			},
			{
				question: "Is onboarding included?",
				answer:
					"Yes. After payment we schedule a kickoff and activate the first workflow.",
			},
		],
	},
	finalCta: {
		title: "Start with the workflow that impacts your business this week",
		description:
			"Choose a plan and activate your subscription in minutes. We can help you pick the right tier.",
		primaryCta: "Go to checkout",
		secondaryCta: "Message on WhatsApp",
	},
	checkout: {
		title: "Activate your subscription",
		subtitle: "Select your plan, confirm your email, and pay with PayPal.",
		emailLabel: "Email used to activate access",
		emailPlaceholder: "you@company.com",
		secureNote: "Secure payment processed by PayPal.",
		backToPricing: "Back to plans",
		paypalDisclaimer:
			"Guest Checkout (card without PayPal account) may be available depending on country and PayPal risk checks.",
	},
	success: {
		title: "Payment received",
		subtitle:
			"Your subscription is being activated automatically. We will notify you once it is active.",
		statusPending: "Current status",
		dashboardCta: "Back to landing",
	},
	cancel: {
		title: "Payment canceled",
		subtitle: "No charge was made. You can restart checkout at any time.",
		retryCta: "Return to checkout",
	},
	footer: "Automations with n8n. All rights reserved.",
};
