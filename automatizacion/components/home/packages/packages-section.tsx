"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics/track";
import type { LandingDictionary, PackageTier } from "@/lib/i18n/types";
import { createWhatsAppHref } from "@/lib/whatsapp";

type Props = {
	dict: LandingDictionary;
};

const CLICK_EVENT: Record<
	PackageTier,
	| "package_whatsapp_click_starter"
	| "package_whatsapp_click_pro"
	| "package_whatsapp_click_full"
> = {
	starter: "package_whatsapp_click_starter",
	pro: "package_whatsapp_click_pro",
	full: "package_whatsapp_click_full",
};

export default function PackagesSection({ dict }: Props) {
	const sectionRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const node = sectionRef.current;
		if (!node) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries[0]?.isIntersecting) {
					return;
				}

				trackEvent("pricing_view");
				observer.disconnect();
			},
			{ threshold: 0.35 },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
					{dict.packages.title}
				</h2>
				<p className="mt-2 text-sm text-slate-600">{dict.packages.subtitle}</p>

				<div className="mt-6 grid gap-4 lg:grid-cols-3">
					{dict.packages.items.map((item) => (
						<article
							key={item.tier}
							className={`rounded-xl border bg-white p-5 ${
								item.recommended ? "ring-2 ring-emerald-600" : ""
							}`}
						>
							{item.recommended && (
								<p className="mb-3 inline-flex rounded-full bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
									{dict.packages.recommendedLabel}
								</p>
							)}
							<h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
							<p className="mt-2 text-sm text-slate-600">{item.forWho}</p>
							<ul className="mt-4 space-y-2">
								{item.scope.map((scope) => (
									<li key={scope} className="text-sm text-slate-700">
										- {scope}
									</li>
								))}
							</ul>
							<Button
								asChild
								size="lg"
								className="mt-5 h-11 w-full"
								onClick={() => trackEvent(CLICK_EVENT[item.tier])}
							>
								<a
									href={createWhatsAppHref(item.whatsappMessage)}
									target="_blank"
									rel="noopener noreferrer"
								>
									Hablar por WhatsApp
								</a>
							</Button>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
