"use client";

import { useEffect, useRef } from "react";
import type { PlanTier } from "@/lib/i18n/types";

type PayPalButtonsActions = {
	subscription: {
		create: (payload: {
			plan_id: string;
			custom_id?: string;
			application_context?: {
				shipping_preference?: "NO_SHIPPING";
				user_action?: "SUBSCRIBE_NOW";
			};
		}) => Promise<string>;
	};
};

type PayPalButtons = {
	render: (selector: string) => Promise<void>;
	close?: () => void;
};

type PayPalNamespace = {
	Buttons: (config: {
		style?: Record<string, string>;
		createSubscription: (
			_data: unknown,
			actions: PayPalButtonsActions,
		) => Promise<string>;
		onApprove: (data: { subscriptionID?: string }) => Promise<void>;
		onCancel: () => void;
		onError: (error: unknown) => void;
	}) => PayPalButtons;
};

declare global {
	interface Window {
		paypal?: PayPalNamespace;
	}
}

type Props = {
	containerId: string;
	tier: PlanTier;
	planId?: string;
	email: string;
	disabled: boolean;
	onApprove: (subscriptionId: string) => void;
	onCancel: () => void;
	onError: (message: string) => void;
};

export function PayPalSubscribeButton({
	containerId,
	tier,
	planId,
	email,
	disabled,
	onApprove,
	onCancel,
	onError,
}: Props) {
	const buttonRef = useRef<PayPalButtons | null>(null);

	useEffect(() => {
		if (!planId || disabled) {
			return;
		}

		if (!window.paypal) {
			onError("PayPal SDK is not available.");
			return;
		}

		const paypalButtons = window.paypal.Buttons({
			style: {
				color: "gold",
				shape: "rect",
				label: "subscribe",
				layout: "vertical",
			},
			createSubscription: async (_, actions) => {
				const safeEmail = email.trim().toLowerCase();
				if (!safeEmail) {
					throw new Error("Email is required.");
				}

				return actions.subscription.create({
					plan_id: planId,
					custom_id: `${tier}|${safeEmail}`,
					application_context: {
						shipping_preference: "NO_SHIPPING",
						user_action: "SUBSCRIBE_NOW",
					},
				});
			},
			onApprove: async (data) => {
				const subscriptionId = data.subscriptionID;
				if (!subscriptionId) {
					onError("Missing subscription id.");
					return;
				}

				const response = await fetch("/api/paypal/checkout-complete", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: email.trim().toLowerCase(),
						subscriptionId,
						tier,
					}),
				});

				if (!response.ok) {
					onError("Unable to persist subscription.");
					return;
				}

				onApprove(subscriptionId);
			},
			onCancel: () => {
				onCancel();
			},
			onError: () => {
				onError("PayPal checkout failed.");
			},
		});

		buttonRef.current = paypalButtons;
		const container = document.getElementById(containerId);
		if (container) {
			container.innerHTML = "";
		}
		void paypalButtons.render(`#${containerId}`);

		return () => {
			buttonRef.current?.close?.();
			buttonRef.current = null;
		};
	}, [containerId, disabled, email, onApprove, onCancel, onError, planId, tier]);

	return <div id={containerId} />;
}
