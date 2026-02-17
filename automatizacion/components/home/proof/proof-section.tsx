import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
};

export default function ProofSection({ dict }: Props) {
	return (
		<section className="px-4 py-14 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
					{dict.proof.title}
				</h2>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{dict.proof.items.map((item) => (
						<Card key={item.title} className="border-slate-200">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg text-slate-900">
									{item.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-600">{item.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
