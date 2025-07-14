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
		<div className="text-sm text-right p-4">
			<select
				className="border border-gray-300 rounded px-2 py-1"
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
