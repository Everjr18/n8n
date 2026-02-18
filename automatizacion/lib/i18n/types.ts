export type PackageTier = "starter" | "pro" | "full";

type ProofCase = {
	title: string;
	before: string;
	after: string;
	result: string;
};

type AutomationItem = {
	title: string;
	description: string;
	example: string;
};

type PackageItem = {
	tier: PackageTier;
	name: string;
	forWho: string;
	scope: string[];
	whatsappMessage: string;
	recommended?: boolean;
};

type ProcessStep = {
	title: string;
	description: string;
};

type FaqItem = {
	question: string;
	answer: string;
};

export type LandingDictionary = {
	hero: {
		title: string;
		subtitle: string;
		bullets: string[];
		primaryCta: string;
		secondaryCta: string;
	};
	proof: {
		title: string;
		cases: ProofCase[];
		placeholderNote: string;
		integrationsTitle: string;
		integrations: string[];
	};
	automations: {
		title: string;
		privacyNote: string;
		items: AutomationItem[];
	};
	packages: {
		title: string;
		subtitle: string;
		recommendedLabel: string;
		items: PackageItem[];
	};
	process: {
		title: string;
		steps: ProcessStep[];
	};
	faq: {
		title: string;
		items: FaqItem[];
	};
	finalCta: {
		title: string;
		description: string;
		primaryCta: string;
	};
	footer: string;
};
