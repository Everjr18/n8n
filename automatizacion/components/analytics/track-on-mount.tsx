"use client";

import { useEffect, useRef } from "react";
import { trackEvent, type LandingEvent } from "@/lib/analytics/track";

type Props = {
	eventName: LandingEvent;
	payload?: Record<string, string | number | boolean | null | undefined>;
};

export default function TrackOnMount({ eventName, payload }: Props) {
	const sentRef = useRef(false);

	useEffect(() => {
		if (sentRef.current) {
			return;
		}

		sentRef.current = true;
		trackEvent(eventName, payload ?? {});
	}, [eventName, payload]);

	return null;
}
