import { SuccessView } from "@/components/payments/success-view";
import { getDictionaryByLanguage, resolveLanguage } from "@/lib/i18n/get-dictionary";

type PageProps = {
	searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function SuccessPage({ searchParams }: PageProps) {
	const params = await searchParams;
	const requestedLang =
		typeof params.lang === "string" ? params.lang : (params.lang?.[0] ?? null);
	const lang = resolveLanguage(requestedLang);
	const subscriptionId =
		typeof params.subscription_id === "string"
			? params.subscription_id
			: (params.subscription_id?.[0] ?? null);
	const dict = getDictionaryByLanguage(lang);

	return <SuccessView dict={dict} lang={lang} subscriptionId={subscriptionId} />;
}
