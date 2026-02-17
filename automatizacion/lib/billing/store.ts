import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { PlanTier } from "@/lib/i18n/types";

export type SubscriptionStatus = "ACTIVE" | "INACTIVE" | "GRACE" | "PENDING";

export type SubscriptionRecord = {
	userId: string | null;
	email: string;
	paypalCustomerId: string | null;
	subscriptionId: string;
	status: SubscriptionStatus;
	currentPeriodEnd: string | null;
	planTier: PlanTier;
	createdAt: string;
	updatedAt: string;
};

type SubscriptionStore = {
	subscriptions: SubscriptionRecord[];
};

const EMPTY_STORE: SubscriptionStore = {
	subscriptions: [],
};

function getStorePath() {
	return (
		process.env.SUBSCRIPTION_STORE_PATH ??
		path.join(process.cwd(), "data", "subscriptions.json")
	);
}

async function readStore(): Promise<SubscriptionStore> {
	try {
		const file = await readFile(getStorePath(), "utf8");
		const parsed = JSON.parse(file) as SubscriptionStore;
		return parsed.subscriptions ? parsed : EMPTY_STORE;
	} catch {
		return EMPTY_STORE;
	}
}

async function writeStore(store: SubscriptionStore) {
	const target = getStorePath();
	await mkdir(path.dirname(target), { recursive: true });
	await writeFile(target, JSON.stringify(store, null, 2), "utf8");
}

export async function upsertSubscription(
	nextRecord: Omit<SubscriptionRecord, "createdAt" | "updatedAt">,
) {
	const now = new Date().toISOString();
	const store = await readStore();
	const idx = store.subscriptions.findIndex(
		(item) => item.subscriptionId === nextRecord.subscriptionId,
	);

	if (idx === -1) {
		store.subscriptions.push({
			...nextRecord,
			createdAt: now,
			updatedAt: now,
		});
	} else {
		store.subscriptions[idx] = {
			...store.subscriptions[idx],
			...nextRecord,
			updatedAt: now,
		};
	}

	await writeStore(store);
	return store.subscriptions.find(
		(item) => item.subscriptionId === nextRecord.subscriptionId,
	);
}

export async function getSubscriptionById(subscriptionId: string) {
	const store = await readStore();
	return (
		store.subscriptions.find((item) => item.subscriptionId === subscriptionId) ??
		null
	);
}

export async function getLatestSubscriptionByEmail(email: string) {
	const store = await readStore();
	const candidates = store.subscriptions
		.filter((item) => item.email.toLowerCase() === email.toLowerCase())
		.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1));

	return candidates[0] ?? null;
}
