export type TrackingEvent =
	| "landing_view"
	| "hero_click_primary_cta"
	| "pricing_view"
	| "checkout_start"
	| "checkout_success"
	| "checkout_cancel"
	| "faq_open"
	| `plan_select_${"tier1" | "tier2" | "tier3"}`;

type EventPayload = Record<string, string | number | boolean | null | undefined>;

type GtagFn = (
	command: "event",
	eventName: string,
	params?: EventPayload,
) => void;

declare global {
	interface Window {
		gtag?: GtagFn;
		dataLayer?: Array<Record<string, unknown>>;
	}
}

export function trackEvent(eventName: TrackingEvent, payload: EventPayload = {}) {
	if (typeof window === "undefined") {
		return;
	}

	window.dataLayer?.push({ event: eventName, ...payload });
	window.gtag?.("event", eventName, payload);
	window.dispatchEvent(
		new CustomEvent("n8n:tracking", {
			detail: { eventName, payload },
		}),
	);
}
