#!/usr/bin/env node

const env = process.env.PAYPAL_ENV === "live" ? "live" : "sandbox";
const baseUrl =
	env === "live"
		? "https://api-m.paypal.com"
		: "https://api-m.sandbox.paypal.com";

const required = ["PAYPAL_CLIENT_ID", "PAYPAL_CLIENT_SECRET"];
for (const key of required) {
	if (!process.env[key]) {
		console.error(`Missing environment variable: ${key}`);
		process.exit(1);
	}
}

const config = {
	productName: process.env.PAYPAL_PRODUCT_NAME ?? "Automatizacion n8n",
	productDescription:
		process.env.PAYPAL_PRODUCT_DESCRIPTION ??
		"Suscripcion mensual de automatizacion y soporte",
	currency: process.env.PAYPAL_CURRENCY ?? "USD",
	prices: {
		tier1: process.env.PAYPAL_PRICE_TIER1 ?? "49",
		tier2: process.env.PAYPAL_PRICE_TIER2 ?? "99",
		tier3: process.env.PAYPAL_PRICE_TIER3 ?? "199",
	},
};

async function getAccessToken() {
	const credentials = Buffer.from(
		`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`,
	).toString("base64");

	const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
		method: "POST",
		headers: {
			Authorization: `Basic ${credentials}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: "grant_type=client_credentials",
	});

	if (!response.ok) {
		throw new Error(`Token error: ${response.status} ${await response.text()}`);
	}

	const data = await response.json();
	return data.access_token;
}

async function createProduct(token) {
	const payload = {
		name: config.productName,
		description: config.productDescription,
		type: "SERVICE",
		category: "SOFTWARE",
	};

	const response = await fetch(`${baseUrl}/v1/catalogs/products`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
			Prefer: "return=representation",
		},
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		throw new Error(`Product error: ${response.status} ${await response.text()}`);
	}

	return response.json();
}

async function createPlan(token, productId, tier, value) {
	const payload = {
		product_id: productId,
		name: `${tier.toUpperCase()} plan`,
		description: `Monthly ${tier.toUpperCase()} subscription`,
		billing_cycles: [
			{
				frequency: { interval_unit: "MONTH", interval_count: 1 },
				tenure_type: "REGULAR",
				sequence: 1,
				total_cycles: 0,
				pricing_scheme: {
					fixed_price: {
						value,
						currency_code: config.currency,
					},
				},
			},
		],
		payment_preferences: {
			auto_bill_outstanding: true,
			setup_fee_failure_action: "CONTINUE",
			payment_failure_threshold: 1,
		},
	};

	const response = await fetch(`${baseUrl}/v1/billing/plans`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
			Prefer: "return=representation",
		},
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		throw new Error(
			`Plan ${tier} error: ${response.status} ${await response.text()}`,
		);
	}

	return response.json();
}

async function main() {
	console.log(`Using PayPal environment: ${env}`);
	const token = await getAccessToken();
	const product = await createProduct(token);
	const plans = await Promise.all([
		createPlan(token, product.id, "tier1", config.prices.tier1),
		createPlan(token, product.id, "tier2", config.prices.tier2),
		createPlan(token, product.id, "tier3", config.prices.tier3),
	]);

	console.log("\nCreated product and plans:");
	console.log(`PAYPAL_PRODUCT_ID=${product.id}`);
	console.log(`PAYPAL_PLAN_TIER1_ID=${plans[0].id}`);
	console.log(`PAYPAL_PLAN_TIER2_ID=${plans[1].id}`);
	console.log(`PAYPAL_PLAN_TIER3_ID=${plans[2].id}`);
}

main().catch((error) => {
	console.error(error.message);
	process.exit(1);
});
