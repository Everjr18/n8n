import type { PlanTier } from "@/lib/i18n/types";
import { planAtLeast } from "@/lib/billing/plans";
import { getLatestSubscriptionByEmail } from "@/lib/billing/store";

const ACCESSIBLE_STATUSES = new Set(["ACTIVE", "GRACE"]);

export async function checkEntitlement(email: string, requiredTier: PlanTier) {
	const subscription = await getLatestSubscriptionByEmail(email);
	if (!subscription) {
		return {
			allowed: false,
			reason: "NO_SUBSCRIPTION",
			subscription: null,
		};
	}

	const statusAllowsAccess = ACCESSIBLE_STATUSES.has(subscription.status);
	const planAllowsAccess = planAtLeast(subscription.planTier, requiredTier);
	const allowed = statusAllowsAccess && planAllowsAccess;

	return {
		allowed,
		reason: allowed
			? null
			: statusAllowsAccess
				? "PLAN_TOO_LOW"
				: "STATUS_BLOCKED",
		subscription,
	};
}
