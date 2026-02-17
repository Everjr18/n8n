export type PlanTier = "tier1" | "tier2" | "tier3";

type ProofItem = {
	title: string;
	description: string;
};

type HowStep = {
	title: string;
	description: string;
};

type PricingPlan = {
	tier: PlanTier;
	name: string;
	price: string;
	period: string;
	audience: string;
	bullets: string[];
	cta: string;
	recommended?: boolean;
};

type FaqItem = {
	question: string;
	answer: string;
};

export type LandingDictionary = {
	hero: {
		badge: string;
		title: string;
		subtitle: string;
		outcomes: string[];
		primaryCta: string;
		secondaryCta: string;
		trustNote: string;
	};
	proof: {
		title: string;
		items: ProofItem[];
	};
	howItWorks: {
		title: string;
		steps: HowStep[];
	};
	includes: {
		title: string;
		items: string[];
	};
	pricing: {
		title: string;
		subtitle: string;
		recommendedLabel: string;
		afterPayment: string;
		plans: PricingPlan[];
	};
	faq: {
		title: string;
		items: FaqItem[];
	};
	finalCta: {
		title: string;
		description: string;
		primaryCta: string;
		secondaryCta: string;
	};
	checkout: {
		title: string;
		subtitle: string;
		emailLabel: string;
		emailPlaceholder: string;
		secureNote: string;
		backToPricing: string;
		paypalDisclaimer: string;
	};
	success: {
		title: string;
		subtitle: string;
		statusPending: string;
		dashboardCta: string;
	};
	cancel: {
		title: string;
		subtitle: string;
		retryCta: string;
	};
	footer: string;
};
