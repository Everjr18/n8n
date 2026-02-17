"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LandingDictionary } from "@/lib/i18n/types";
import { trackEvent } from "@/lib/analytics/track";

type Props = {
	dict: LandingDictionary;
	checkoutHref: string;
};

export default function HeroSection({ dict, checkoutHref }: Props) {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-white px-4 pb-14 pt-10 sm:px-6 lg:px-8">
			<div className="pointer-events-none absolute -right-20 top-8 h-52 w-52 rounded-full bg-blue-200/40 blur-3xl" />
			<div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />

			<div className="mx-auto max-w-5xl text-center">
				<p className="mb-4 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
					{dict.hero.badge}
				</p>
				<h1 className="text-balance text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
					{dict.hero.title}
				</h1>
				<p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
					{dict.hero.subtitle}
				</p>

				<ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-left">
					{dict.hero.outcomes.map((outcome) => (
						<li
							key={outcome}
							className="flex items-start gap-2 rounded-md border bg-white/70 p-3 text-sm text-slate-700"
						>
							<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
							<span>{outcome}</span>
						</li>
					))}
				</ul>

				<div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<Button
						asChild
						size="lg"
						className="w-full sm:w-auto"
						onClick={() => trackEvent("hero_click_primary_cta")}
					>
						<Link href={checkoutHref}>{dict.hero.primaryCta}</Link>
					</Button>
					<Button asChild size="lg" variant="ghost" className="w-full sm:w-auto">
						<a href="#how-it-works">{dict.hero.secondaryCta}</a>
					</Button>
				</div>

				<p className="mt-5 text-xs text-slate-500">{dict.hero.trustNote}</p>
			</div>
		</section>
	);
}
