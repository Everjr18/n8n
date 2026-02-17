import { CancelView } from "@/components/payments/cancel-view";
import { getDictionaryByLanguage, resolveLanguage } from "@/lib/i18n/get-dictionary";

type PageProps = {
	searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CancelPage({ searchParams }: PageProps) {
	const params = await searchParams;
	const requestedLang =
		typeof params.lang === "string" ? params.lang : (params.lang?.[0] ?? null);
	const lang = resolveLanguage(requestedLang);
	const plan =
		typeof params.plan === "string" ? params.plan : (params.plan?.[0] ?? "tier2");
	const dict = getDictionaryByLanguage(lang);

	return <CancelView dict={dict} lang={lang} plan={plan} />;
}
