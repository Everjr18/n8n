import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
const geistSans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "Automatizacion para consultorios | WhatsApp-first",
	description:
		"Reducimos ausencias y llenamos agenda en consultorios privados con automatizacion por WhatsApp y n8n.",
	icons: {
		icon: "/favicon.ico",
	},
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="antialiased">{children}</body>
		</html>
	);
}
