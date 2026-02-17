export type WebhookResource = {
	id?: string;
	billing_agreement_id?: string;
	status?: string;
	plan_id?: string;
	custom_id?: string;
	subscriber?: {
		email_address?: string;
		payer_id?: string;
	};
	billing_info?: {
		next_billing_time?: string;
	};
};

export type WebhookEvent = {
	event_type?: string;
	resource?: WebhookResource;
};

export function mapWebhookStatus(eventType: string, fallback?: string) {
	if (eventType === "BILLING.SUBSCRIPTION.ACTIVATED") {
		return "ACTIVE";
	}

	if (
		eventType === "BILLING.SUBSCRIPTION.CANCELLED" ||
		eventType === "BILLING.SUBSCRIPTION.EXPIRED"
	) {
		return "INACTIVE";
	}

	if (
		eventType === "BILLING.SUBSCRIPTION.SUSPENDED" ||
		eventType === "BILLING.SUBSCRIPTION.PAYMENT.FAILED"
	) {
		return "GRACE";
	}

	if (eventType === "PAYMENT.SALE.COMPLETED") {
		return "ACTIVE";
	}

	switch (fallback) {
		case "ACTIVE":
			return "ACTIVE";
		case "APPROVAL_PENDING":
			return "PENDING";
		case "SUSPENDED":
			return "GRACE";
		case "CANCELLED":
		case "EXPIRED":
			return "INACTIVE";
		default:
			return "PENDING";
	}
}

export function getSubscriptionId(event: WebhookEvent) {
	const resource = event.resource;
	if (!resource) {
		return null;
	}

	return resource.id ?? resource.billing_agreement_id ?? null;
}

export function parseCustomId(customId?: string) {
	if (!customId) {
		return { email: null, tier: null };
	}

	const [tier, email] = customId.split("|");
	return {
		email: email?.trim().toLowerCase() ?? null,
		tier: tier ?? null,
	};
}

export function extractSignatureHeaders(request: Request) {
	const authAlgo = request.headers.get("paypal-auth-algo");
	const certUrl = request.headers.get("paypal-cert-url");
	const transmissionId = request.headers.get("paypal-transmission-id");
	const transmissionSig = request.headers.get("paypal-transmission-sig");
	const transmissionTime = request.headers.get("paypal-transmission-time");

	if (
		!authAlgo ||
		!certUrl ||
		!transmissionId ||
		!transmissionSig ||
		!transmissionTime
	) {
		return null;
	}

	return {
		authAlgo,
		certUrl,
		transmissionId,
		transmissionSig,
		transmissionTime,
	};
}
