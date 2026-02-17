"use client";

import { useEffect } from "react";
import { useRef } from "react";
import type { TrackingEvent } from "@/lib/analytics/track";
import { trackEvent } from "@/lib/analytics/track";

type Props = {
	eventName: TrackingEvent;
	payload?: Record<string, string | number | boolean | null | undefined>;
};

export function TrackOnMount({ eventName, payload }: Props) {
	const hasTrackedRef = useRef(false);

	useEffect(() => {
		if (hasTrackedRef.current) {
			return;
		}

		hasTrackedRef.current = true;
		trackEvent(eventName, payload ?? {});
	}, [eventName, payload]);

	return null;
}
