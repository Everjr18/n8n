import { NextResponse } from "next/server";
import { getTierFromPlanId, isPlanTier } from "@/lib/billing/plans";
import {
	getPayPalSubscription,
	verifyPayPalWebhookSignature,
} from "@/lib/billing/paypal";
import { getSubscriptionById, upsertSubscription } from "@/lib/billing/store";
import type { PlanTier } from "@/lib/i18n/types";
import {
	extractSignatureHeaders,
	getSubscriptionId,
	mapWebhookStatus,
	parseCustomId,
	type WebhookEvent,
} from "@/lib/billing/webhook";

export const runtime = "nodejs";

export async function POST(request: Request) {
	try {
		const rawBody = await request.text();
		const event = JSON.parse(rawBody) as WebhookEvent;
		const signatureHeaders = extractSignatureHeaders(request);

		if (!signatureHeaders) {
			return NextResponse.json(
				{ ok: false, error: "Missing signature headers" },
				{ status: 400 },
			);
		}

		const verified = await verifyPayPalWebhookSignature(signatureHeaders, event);
		if (!verified) {
			return NextResponse.json(
				{ ok: false, error: "Webhook signature is invalid" },
				{ status: 401 },
			);
		}

		const eventType = event.event_type ?? "";
		const subscriptionId = getSubscriptionId(event);
		if (!subscriptionId) {
			return NextResponse.json({ ok: true, ignored: true });
		}

		const existing = await getSubscriptionById(subscriptionId);
		let subscription = event.resource;
		try {
			subscription = await getPayPalSubscription(subscriptionId);
		} catch {
			// Keep payload data when PayPal details endpoint is temporarily unavailable.
		}

		const custom = parseCustomId(subscription?.custom_id);
		const email =
			subscription?.subscriber?.email_address?.toLowerCase() ??
			custom.email ??
			existing?.email ??
			null;
		const customTier: PlanTier | null = isPlanTier(custom.tier ?? "")
			? (custom.tier as PlanTier)
			: null;
		const tier =
			getTierFromPlanId(subscription?.plan_id) ??
			customTier ??
			(existing?.planTier ?? null);

		if (!email || !tier) {
			return NextResponse.json({ ok: true, ignored: "missing_identity" });
		}

		await upsertSubscription({
			userId: existing?.userId ?? null,
			email,
			paypalCustomerId:
				subscription?.subscriber?.payer_id ?? existing?.paypalCustomerId ?? null,
			subscriptionId,
			status: mapWebhookStatus(eventType, subscription?.status),
			currentPeriodEnd:
				subscription?.billing_info?.next_billing_time ??
				existing?.currentPeriodEnd ??
				null,
			planTier: tier,
		});

		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json(
			{ ok: false, error: "Unable to process webhook" },
			{ status: 500 },
		);
	}
}
