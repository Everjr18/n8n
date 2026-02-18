export type LandingEvent =
	| "landing_view"
	| "hero_whatsapp_click"
	| "pricing_view"
	| "package_whatsapp_click_starter"
	| "package_whatsapp_click_pro"
	| "package_whatsapp_click_full"
	| "faq_open";

type EventPayload = Record<string, string | number | boolean | null | undefined>;

type GtagFn = (
	command: "event",
	eventName: string,
	payload?: EventPayload,
) => void;

declare global {
	interface Window {
		gtag?: GtagFn;
		dataLayer?: Array<Record<string, unknown>>;
	}
}

export function trackEvent(eventName: LandingEvent, payload: EventPayload = {}) {
	if (typeof window === "undefined") {
		return;
	}

	window.dataLayer?.push({ event: eventName, ...payload });
	window.gtag?.("event", eventName, payload);
	window.dispatchEvent(
		new CustomEvent("landing:track", {
			detail: { eventName, payload },
		}),
	);
}
