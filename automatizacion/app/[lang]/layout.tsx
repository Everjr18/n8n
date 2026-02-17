import type { Metadata } from "next";
import LanguageSwitcher from "@/components/language-switcher";

export const metadata: Metadata = {
	title: "Automatizaciones con n8n",
	description:
		"Automatiza procesos críticos con n8n, reduce tareas manuales y activa tu plan mensual en línea con suscripción PayPal.",
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
