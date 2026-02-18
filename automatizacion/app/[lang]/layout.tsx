import type { Metadata } from "next";
import LanguageSwitcher from "@/components/language-switcher";

export const metadata: Metadata = {
	title: "Automatizacion para consultorios",
	description:
		"Landing WhatsApp-first para consultorios privados: menos no-shows y mas citas confirmadas con n8n.",
};

export default async function LangLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<LanguageSwitcher />
			{children}
		</section>
	);
}
