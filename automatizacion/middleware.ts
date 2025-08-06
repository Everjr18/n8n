import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LANGS = ["en", "es", "pt"];
const DEFAULT_LANG = "es";

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	// Ignore _next or public files
	if (pathname.startsWith("/_next") || pathname.includes(".")) return;

	// If URL already has a locale prefix, skip
	const pathnameIsMissingLocale = SUPPORTED_LANGS.every(
		(lang) => !pathname.startsWith(`/${lang}`),
	);

	if (pathnameIsMissingLocale) {
		const browserLang =
			req.headers.get("accept-language")?.split(",")[0].split("-")[0] ||
			DEFAULT_LANG;
		const matchedLang = SUPPORTED_LANGS.includes(browserLang)
			? browserLang
			: DEFAULT_LANG;

		return NextResponse.redirect(
			new URL(`/${matchedLang}${pathname}`, req.url),
		);
	}

	return NextResponse.next();
}
