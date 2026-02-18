"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const languages = [
	{ code: "es", label: "🇪🇸 Español" },
	{ code: "en", label: "🇺🇸 English" },
	{ code: "pt", label: "🇧🇷 Português" },
];

export default function LanguageSwitcher() {
	const router = useRouter();
	const pathname = usePathname();
	const [, startTransition] = useTransition();

	const handleChange = (lang: string) => {
		const parts = pathname.split("/").filter(Boolean);
		parts[0] = lang; // replace first segment
		const newPath = "/" + parts.join("/");
		startTransition(() => router.push(newPath));
	};

	return (
		<div className="px-4 pt-4 text-right">
			<label htmlFor="language-switcher" className="sr-only">
				Cambiar idioma
			</label>
			<select
				id="language-switcher"
				className="h-8 rounded-md border border-slate-300 bg-white px-2 text-xs text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
				defaultValue={pathname.split("/")[1] || "es"}
				onChange={(e) => handleChange(e.target.value)}
			>
				{languages.map((lang) => (
					<option key={lang.code} value={lang.code}>
						{lang.label}
					</option>
				))}
			</select>
		</div>
	);
}
