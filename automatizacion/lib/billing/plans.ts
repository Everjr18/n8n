import type { PlanTier } from "@/lib/i18n/types";

export const PLAN_TIERS: PlanTier[] = ["tier1", "tier2", "tier3"];

const PLAN_RANK: Record<PlanTier, number> = {
	tier1: 1,
	tier2: 2,
	tier3: 3,
};

export function isPlanTier(value: string): value is PlanTier {
	return PLAN_TIERS.includes(value as PlanTier);
}

export function planAtLeast(currentTier: PlanTier, requiredTier: PlanTier) {
	return PLAN_RANK[currentTier] >= PLAN_RANK[requiredTier];
}

export function getPaypalPlanId(tier: PlanTier) {
	const byTier: Record<PlanTier, string | undefined> = {
		tier1: process.env.PAYPAL_PLAN_TIER1_ID,
		tier2: process.env.PAYPAL_PLAN_TIER2_ID,
		tier3: process.env.PAYPAL_PLAN_TIER3_ID,
	};

	return byTier[tier];
}

export function getTierFromPlanId(planId?: string | null): PlanTier | null {
	if (!planId) {
		return null;
	}

	const map = new Map<string, PlanTier>([
		[process.env.PAYPAL_PLAN_TIER1_ID ?? "", "tier1"],
		[process.env.PAYPAL_PLAN_TIER2_ID ?? "", "tier2"],
		[process.env.PAYPAL_PLAN_TIER3_ID ?? "", "tier3"],
	]);

	return map.get(planId) ?? null;
}
