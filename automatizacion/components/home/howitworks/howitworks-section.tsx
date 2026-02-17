import { Card, CardContent } from "@/components/ui/card";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
};

export default function HowItWorksSection({ dict }: Props) {
	return (
		<section id="how-it-works" className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
					{dict.howItWorks.title}
				</h2>
				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{dict.howItWorks.steps.map((step) => (
						<Card key={step.title} className="border-slate-200 bg-white">
							<CardContent className="space-y-2 p-5">
								<h3 className="text-base font-semibold text-slate-900">
									{step.title}
								</h3>
								<p className="text-sm text-slate-600">{step.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
