"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics/track";
import type { LandingDictionary } from "@/lib/i18n/types";
import { createWhatsAppHref } from "@/lib/whatsapp";

type Props = {
	dict: LandingDictionary;
};

export default function HeroSection({ dict }: Props) {
	const whatsappHref = createWhatsAppHref(
		"Hola, tengo un consultorio y quiero reducir ausencias con automatizacion por WhatsApp.",
	);

	return (
		<section className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 lg:px-8">
			<div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/35 blur-3xl" />
			<div className="mx-auto max-w-5xl">
				<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
					<h1 className="text-balance text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
						{dict.hero.title}
					</h1>
					<p className="mt-3 max-w-3xl text-pretty text-base text-slate-600 sm:text-lg">
						{dict.hero.subtitle}
					</p>

					<ul className="mt-6 space-y-2">
						{dict.hero.bullets.map((bullet) => (
							<li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
								<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
								<span>{bullet}</span>
							</li>
						))}
					</ul>

					<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
						<Button
							asChild
							size="lg"
							className="h-12 px-7 text-base"
							onClick={() => trackEvent("hero_whatsapp_click")}
						>
							<a href={whatsappHref} target="_blank" rel="noopener noreferrer">
								{dict.hero.primaryCta}
							</a>
						</Button>
						<a
							href="#proof"
							className="inline-flex h-12 items-center rounded-md px-1 text-sm font-medium text-slate-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
						>
							{dict.hero.secondaryCta}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
