import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "@/components/language-switcher";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Automatizaciones con n8n",
	description:
		"Automatiza procesos de tu negocio sin escribir código. Flujos personalizados con n8n: correos, WhatsApp, pagos, bases de datos y más.",
};

export default async function LangLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params; // aquí el await
	return (
		<html lang={lang}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<LanguageSwitcher />
				{children}
			</body>
		</html>
	);
}
