import LandingN8n from "@/components/landing-n8n";
import { translations } from "@/lib/i18n";
interface PageProps {
	params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
	const { lang: paramsLang } = await params;

	const dict =
		translations[paramsLang as keyof typeof translations] ?? translations.es;

	return <LandingN8n dict={dict} />;
}
export function generateStaticParams() {
	return [{ lang: "en" }, { lang: "es" }, { lang: "pt" }];
}
