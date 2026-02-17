import { NextResponse } from "next/server";
import { checkEntitlement } from "@/lib/billing/entitlements";
import { isPlanTier } from "@/lib/billing/plans";

export const runtime = "nodejs";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const email = searchParams.get("email")?.trim().toLowerCase();
	const requiredTier = searchParams.get("requiredTier") ?? "tier1";

	if (!email || !isPlanTier(requiredTier)) {
		return NextResponse.json(
			{ ok: false, error: "email and requiredTier are required" },
			{ status: 400 },
		);
	}

	const entitlement = await checkEntitlement(email, requiredTier);
	return NextResponse.json({
		ok: true,
		allowed: entitlement.allowed,
		reason: entitlement.reason,
		subscription: entitlement.subscription,
	});
}
