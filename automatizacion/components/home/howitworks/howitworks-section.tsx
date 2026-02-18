import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
};

export default function HowItWorksSection({ dict }: Props) {
	return (
		<section className="px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
					{dict.process.title}
				</h2>
				<div className="mt-6 grid gap-4 md:grid-cols-3">
					{dict.process.steps.map((step) => (
						<article key={step.title} className="rounded-xl border bg-white p-5">
							<h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
							<p className="mt-2 text-sm text-slate-600">{step.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
