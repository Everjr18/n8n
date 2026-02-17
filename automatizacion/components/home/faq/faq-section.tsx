"use client";

import { ChevronDown } from "lucide-react";
import type { LandingDictionary } from "@/lib/i18n/types";
import { trackEvent } from "@/lib/analytics/track";

type Props = {
	dict: LandingDictionary;
};

export default function FaqSection({ dict }: Props) {
	return (
		<section id="faq" className="px-4 py-14 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-4xl">
				<h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
					{dict.faq.title}
				</h2>
				<div className="mt-8 space-y-3">
					{dict.faq.items.map((item) => (
						<details
							key={item.question}
							className="group rounded-lg border border-slate-200 bg-white p-4"
							onToggle={(event) => {
								const node = event.currentTarget;
								if (node.open) {
									trackEvent("faq_open", { question: item.question });
								}
							}}
						>
							<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium text-slate-900">
								{item.question}
								<ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
							</summary>
							<p className="mt-3 text-sm text-slate-600">{item.answer}</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
