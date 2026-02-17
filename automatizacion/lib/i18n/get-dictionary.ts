import { translations, type SupportedLanguage } from "@/lib/i18n";

export function resolveLanguage(lang?: string | null): SupportedLanguage {
	if (lang && lang in translations) {
		return lang as SupportedLanguage;
	}

	return "es";
}

export function getDictionaryByLanguage(lang?: string | null) {
	return translations[resolveLanguage(lang)];
}
