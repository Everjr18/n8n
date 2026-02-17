"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrackOnMount } from "@/components/analytics/track-on-mount";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
	lang: string;
	subscriptionId: string | null;
};

type SubscriptionResponse = {
	ok: boolean;
	subscription?: {
		status: string;
		planTier: string;
		email: string;
		currentPeriodEnd: string | null;
	};
};

export function SuccessView({ dict, lang, subscriptionId }: Props) {
	const [status, setStatus] = useState<string>("PENDING");
	const [details, setDetails] = useState<SubscriptionResponse["subscription"]>();

	useEffect(() => {
		if (!subscriptionId) {
			return;
		}

		const controller = new AbortController();
		void fetch(`/api/subscriptions/${subscriptionId}`, {
			signal: controller.signal,
			cache: "no-store",
		})
			.then((res) => res.json() as Promise<SubscriptionResponse>)
			.then((data) => {
				if (!data.ok || !data.subscription) {
					return;
				}

				setStatus(data.subscription.status);
				setDetails(data.subscription);
			})
			.catch(() => undefined);

		return () => controller.abort();
	}, [subscriptionId]);

	const accessIsActive = status === "ACTIVE";

	return (
		<div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6">
			<TrackOnMount
				eventName="checkout_success"
				payload={{ lang, subscriptionId: subscriptionId ?? "unknown" }}
			/>

			<div className="mx-auto max-w-xl space-y-4">
				<Card>
					<CardContent className="space-y-4 p-6">
						<h1 className="text-3xl font-bold text-slate-900">{dict.success.title}</h1>
						<p className="text-sm text-slate-600">{dict.success.subtitle}</p>
						<p className="rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-700">
							{dict.success.statusPending}:{" "}
							<strong>{accessIsActive ? "ACTIVE" : status}</strong>
						</p>

						{accessIsActive ? (
							<p className="text-sm text-emerald-700">
								Acceso activado. Ya puedes usar las funciones de tu plan.
							</p>
						) : (
							<p className="text-sm text-amber-700">
								Estamos confirmando el webhook de PayPal. Normalmente tarda pocos
								segundos.
							</p>
						)}

						{details && (
							<p className="text-xs text-slate-500">
								Plan: {details.planTier} | Correo: {details.email}
							</p>
						)}

						<Button asChild className="w-full">
							<Link href={`/${lang}`}>{dict.success.dashboardCta}</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
