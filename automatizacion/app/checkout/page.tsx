import { CheckoutFlow } from "@/components/payments/checkout-flow";
import { getDictionaryByLanguage, resolveLanguage } from "@/lib/i18n/get-dictionary";
import type { PlanTier } from "@/lib/i18n/types";

type PageProps = {
	searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CheckoutPage({ searchParams }: PageProps) {
	const params = await searchParams;
	const requestedLang =
		typeof params.lang === "string" ? params.lang : (params.lang?.[0] ?? null);
	const lang = resolveLanguage(requestedLang);
	const dict = getDictionaryByLanguage(lang);
	const initialTier =
		typeof params.plan === "string" ? params.plan : (params.plan?.[0] ?? "tier2");

	const planIdByTier: Record<PlanTier, string | undefined> = {
		tier1: process.env.PAYPAL_PLAN_TIER1_ID,
		tier2: process.env.PAYPAL_PLAN_TIER2_ID,
		tier3: process.env.PAYPAL_PLAN_TIER3_ID,
	};

	return (
		<CheckoutFlow
			dict={dict}
			lang={lang}
			initialTier={initialTier}
			paypalClientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? process.env.PAYPAL_CLIENT_ID}
			planIdByTier={planIdByTier}
		/>
	);
}
