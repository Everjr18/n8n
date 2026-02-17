"use client";

import Script from "next/script";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TrackOnMount } from "@/components/analytics/track-on-mount";
import { trackEvent } from "@/lib/analytics/track";
import { isPlanTier } from "@/lib/billing/plans";
import { PayPalSubscribeButton } from "@/components/payments/paypal-subscribe-button";
import type { LandingDictionary, PlanTier } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
	lang: string;
	initialTier: string;
	paypalClientId?: string;
	planIdByTier: Record<PlanTier, string | undefined>;
};

export function CheckoutFlow({
	dict,
	lang,
	initialTier,
	paypalClientId,
	planIdByTier,
}: Props) {
	const [selectedTier, setSelectedTier] = useState<PlanTier>(
		isPlanTier(initialTier) ? initialTier : "tier2",
	);
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [sdkLoaded, setSdkLoaded] = useState(false);

	const selectedPlan = useMemo(
		() => dict.pricing.plans.find((item) => item.tier === selectedTier),
		[dict.pricing.plans, selectedTier],
	);

	const selectedPlanId = planIdByTier[selectedTier];
	const buttonContainerId = `paypal-subscribe-${selectedTier}`;
	const emailIsValid = email.trim().includes("@");

	return (
		<div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
			<TrackOnMount eventName="checkout_start" payload={{ lang, tier: selectedTier }} />

			{paypalClientId && (
				<Script
					src={`https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(paypalClientId)}&vault=true&intent=subscription&components=buttons`}
					strategy="afterInteractive"
					onLoad={() => setSdkLoaded(true)}
				/>
			)}

			<div className="mx-auto max-w-4xl space-y-6">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-slate-900">{dict.checkout.title}</h1>
					<p className="mt-2 text-sm text-slate-600">{dict.checkout.subtitle}</p>
				</div>

				<div className="grid gap-4 md:grid-cols-3">
					{dict.pricing.plans.map((plan) => (
						<Card
							key={plan.tier}
							className={selectedTier === plan.tier ? "ring-2 ring-slate-900" : ""}
						>
							<CardHeader className="space-y-2">
								<CardTitle className="text-xl">{plan.name}</CardTitle>
								<p className="text-2xl font-bold">
									{plan.price}
									<span className="text-sm font-medium text-slate-500">
										{plan.period}
									</span>
								</p>
							</CardHeader>
							<CardContent className="space-y-3">
								<p className="text-xs text-slate-600">{plan.audience}</p>
								<Button
									type="button"
									variant={selectedTier === plan.tier ? "default" : "outline"}
									className="w-full"
									onClick={() => {
										setSelectedTier(plan.tier);
										trackEvent(`plan_select_${plan.tier}`, { source: "checkout" });
									}}
								>
									{plan.cta}
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				<Card>
					<CardContent className="space-y-4 p-6">
						<div className="space-y-2">
							<label
								htmlFor="checkout-email"
								className="text-sm font-medium text-slate-800"
							>
								{dict.checkout.emailLabel}
							</label>
							<Input
								id="checkout-email"
								type="email"
								value={email}
								placeholder={dict.checkout.emailPlaceholder}
								onChange={(event) => setEmail(event.target.value)}
								autoComplete="email"
							/>
						</div>

						<p className="text-sm text-slate-600">
							{selectedPlan?.name}: <strong>{selectedPlan?.price}</strong>{" "}
							{selectedPlan?.period}
						</p>
						<p className="text-xs text-slate-500">{dict.checkout.secureNote}</p>
						<p className="text-xs text-slate-500">{dict.checkout.paypalDisclaimer}</p>

						{!paypalClientId && (
							<p className="text-sm text-red-600">
								Missing `PAYPAL_CLIENT_ID`. Configure env vars before checkout.
							</p>
						)}
						{!selectedPlanId && (
							<p className="text-sm text-red-600">
								Selected tier is missing PayPal Plan ID.
							</p>
						)}
						{errorMessage && (
							<p className="text-sm text-red-600">{errorMessage}</p>
						)}

						<PayPalSubscribeButton
							containerId={buttonContainerId}
							tier={selectedTier}
							planId={selectedPlanId}
							email={email}
							disabled={!emailIsValid || !paypalClientId || !sdkLoaded}
							onApprove={(subscriptionId) => {
								window.location.assign(
									`/success?subscription_id=${encodeURIComponent(subscriptionId)}&plan=${selectedTier}&lang=${lang}`,
								);
							}}
							onCancel={() => {
								window.location.assign(`/cancel?plan=${selectedTier}&lang=${lang}`);
							}}
							onError={(message) => setErrorMessage(message)}
						/>
					</CardContent>
				</Card>

				<div className="text-center">
					<Link href={`/${lang}#pricing`} className="text-sm text-slate-600 underline">
						{dict.checkout.backToPricing}
					</Link>
				</div>
			</div>
		</div>
	);
}
