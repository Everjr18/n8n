import LandingN8n from "@/components/landing-n8n";
import { es } from "@/lib/i18n/es";
import { en } from "@/lib/i18n/en";
import { pt } from "@/lib/i18n/pt";
interface PageProps {
	params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
	const { lang: paramsLang } = await params;
	const dict =
		{
			es,
			en,
			pt,
		}[paramsLang] ?? es;

	return <LandingN8n dict={dict} />;
}
