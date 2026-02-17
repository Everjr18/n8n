import { NextResponse } from "next/server";
import { isPlanTier } from "@/lib/billing/plans";
import { upsertSubscription } from "@/lib/billing/store";

export const runtime = "nodejs";

type RequestBody = {
	email?: string;
	subscriptionId?: string;
	tier?: string;
};

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as RequestBody;
		const email = body.email?.trim().toLowerCase();
		const subscriptionId = body.subscriptionId?.trim();
		const tier = body.tier?.trim();

		if (!email || !subscriptionId || !tier || !isPlanTier(tier)) {
			return NextResponse.json(
				{ ok: false, error: "Invalid payload" },
				{ status: 400 },
			);
		}

		await upsertSubscription({
			userId: null,
			email,
			paypalCustomerId: null,
			subscriptionId,
			status: "PENDING",
			currentPeriodEnd: null,
			planTier: tier,
		});

		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json(
			{ ok: false, error: "Unable to process request" },
			{ status: 500 },
		);
	}
}
