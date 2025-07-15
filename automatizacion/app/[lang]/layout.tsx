import type { Metadata } from "next";
import LanguageSwitcher from "@/components/language-switcher";

export const metadata: Metadata = {
	title: "Automatizaciones con n8n",
	description:
		"Automatiza procesos de tu negocio sin escribir código. Flujos personalizados con n8n: correos, WhatsApp, pagos, bases de datos y más.",
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
