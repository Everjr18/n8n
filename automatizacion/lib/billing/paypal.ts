type PayPalSubscription = {
	id: string;
	plan_id?: string;
	status?: string;
	custom_id?: string;
	subscriber?: {
		email_address?: string;
		payer_id?: string;
	};
	billing_info?: {
		next_billing_time?: string;
	};
};

function getPayPalBaseUrl() {
	return process.env.PAYPAL_ENV === "live"
		? "https://api-m.paypal.com"
		: "https://api-m.sandbox.paypal.com";
}

function requiredEnv(name: "PAYPAL_CLIENT_ID" | "PAYPAL_CLIENT_SECRET") {
	const value = process.env[name];
	if (!value) {
		throw new Error(`Missing environment variable: ${name}`);
	}

	return value;
}

export async function getPayPalAccessToken() {
	const clientId = requiredEnv("PAYPAL_CLIENT_ID");
	const clientSecret = requiredEnv("PAYPAL_CLIENT_SECRET");
	const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
	const response = await fetch(`${getPayPalBaseUrl()}/v1/oauth2/token`, {
		method: "POST",
		headers: {
			Authorization: `Basic ${auth}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: "grant_type=client_credentials",
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error(`Unable to fetch PayPal token: ${response.status}`);
	}

	const data = (await response.json()) as { access_token: string };
	return data.access_token;
}

type SignatureHeaders = {
	authAlgo: string;
	certUrl: string;
	transmissionId: string;
	transmissionSig: string;
	transmissionTime: string;
};

export async function verifyPayPalWebhookSignature(
	signatureHeaders: SignatureHeaders,
	webhookEvent: unknown,
) {
	const webhookId = process.env.PAYPAL_WEBHOOK_ID;
	if (!webhookId) {
		throw new Error("Missing environment variable: PAYPAL_WEBHOOK_ID");
	}

	const accessToken = await getPayPalAccessToken();
	const response = await fetch(
		`${getPayPalBaseUrl()}/v1/notifications/verify-webhook-signature`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				auth_algo: signatureHeaders.authAlgo,
				cert_url: signatureHeaders.certUrl,
				transmission_id: signatureHeaders.transmissionId,
				transmission_sig: signatureHeaders.transmissionSig,
				transmission_time: signatureHeaders.transmissionTime,
				webhook_id: webhookId,
				webhook_event: webhookEvent,
			}),
			cache: "no-store",
		},
	);

	if (!response.ok) {
		return false;
	}

	const data = (await response.json()) as { verification_status?: string };
	return data.verification_status === "SUCCESS";
}

export async function getPayPalSubscription(subscriptionId: string) {
	const accessToken = await getPayPalAccessToken();
	const response = await fetch(
		`${getPayPalBaseUrl()}/v1/billing/subscriptions/${subscriptionId}`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
			cache: "no-store",
		},
	);

	if (!response.ok) {
		throw new Error(
			`Unable to fetch PayPal subscription ${subscriptionId}: ${response.status}`,
		);
	}

	return (await response.json()) as PayPalSubscription;
}
