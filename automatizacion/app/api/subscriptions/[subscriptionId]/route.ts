import { NextResponse } from "next/server";
import { getSubscriptionById } from "@/lib/billing/store";

export const runtime = "nodejs";

export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ subscriptionId: string }> },
) {
	const { subscriptionId } = await params;
	const subscription = await getSubscriptionById(subscriptionId);

	if (!subscription) {
		return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
	}

	return NextResponse.json({ ok: true, subscription });
}
