import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

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
