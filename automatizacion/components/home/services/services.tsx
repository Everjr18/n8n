import { Check } from "lucide-react";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
};

export default function ServicesSection({ dict }: Props) {
	return (
		<section className="px-4 py-14 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
					{dict.includes.title}
				</h2>
				<div className="mt-8 grid gap-3 md:grid-cols-2">
					{dict.includes.items.map((item) => (
						<div
							key={item}
							className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4"
						>
							<div className="rounded-full bg-emerald-100 p-1.5">
								<Check className="h-4 w-4 text-emerald-700" />
							</div>
							<p className="text-sm text-slate-700">{item}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
