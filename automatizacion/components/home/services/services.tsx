import { Workflow } from "lucide-react";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
};

export default function ServicesSection({ dict }: Props) {
	return (
		<section className="px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
					{dict.automations.title}
				</h2>
				<p className="mt-2 max-w-3xl text-sm text-slate-600">
					{dict.automations.privacyNote}
				</p>

				<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
					{dict.automations.items.map((item) => (
						<article key={item.title} className="rounded-xl border bg-white p-5">
							<div className="flex items-start gap-3">
								<div className="rounded-md bg-emerald-100 p-2">
									<Workflow className="h-4 w-4 text-emerald-700" />
								</div>
								<div>
									<h3 className="text-base font-semibold text-slate-900">
										{item.title}
									</h3>
									<p className="mt-1 text-sm text-slate-700">{item.description}</p>
								</div>
							</div>
							<p className="mt-3 rounded-md bg-slate-50 p-3 text-xs text-slate-600">
								{item.example}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
