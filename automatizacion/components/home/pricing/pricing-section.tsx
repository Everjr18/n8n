"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics/track";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
	lang: string;
};

export default function PricingSection({ dict, lang }: Props) {
	const sectionRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const node = sectionRef.current;
		if (!node) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const current = entries[0];
				if (!current?.isIntersecting) {
					return;
				}

				trackEvent("pricing_view", { lang });
				observer.disconnect();
			},
			{ threshold: 0.3 },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [lang]);

	return (
		<section id="pricing" ref={sectionRef} className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
					{dict.pricing.title}
				</h2>
				<p className="mx-auto mt-3 max-w-3xl text-center text-sm text-slate-600 sm:text-base">
					{dict.pricing.subtitle}
				</p>

				<div className="mt-8 grid gap-4 lg:grid-cols-3">
					{dict.pricing.plans.map((plan) => (
						<Card
							key={plan.tier}
							className={`border-slate-200 ${
								plan.recommended ? "ring-2 ring-slate-900" : ""
							}`}
						>
							<CardHeader className="space-y-3">
								{plan.recommended && (
									<p className="inline-flex w-fit rounded-full bg-slate-900 px-2 py-1 text-xs font-medium text-white">
										{dict.pricing.recommendedLabel}
									</p>
								)}
								<CardTitle className="text-2xl text-slate-900">{plan.name}</CardTitle>
								<p className="text-3xl font-bold text-slate-900">
									{plan.price}
									<span className="text-base font-medium text-slate-500">
										{plan.period}
									</span>
								</p>
								<p className="text-sm text-slate-600">{plan.audience}</p>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									{plan.bullets.map((bullet) => (
										<li key={bullet} className="text-sm text-slate-700">
											• {bullet}
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Button
									asChild
									className="w-full"
									onClick={() => trackEvent(`plan_select_${plan.tier}`)}
								>
									<Link href={`/checkout?plan=${plan.tier}&lang=${lang}`}>
										{plan.cta}
									</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>

				<p className="mt-5 text-center text-sm text-slate-600">
					{dict.pricing.afterPayment}
				</p>
			</div>
		</section>
	);
}
