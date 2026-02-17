import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
	lang: string;
};

export default function FinalCtaSection({ dict, lang }: Props) {
	return (
		<section className="bg-slate-900 px-4 py-14 text-white sm:px-6 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-balance text-2xl font-semibold sm:text-3xl">
					{dict.finalCta.title}
				</h2>
				<p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
					{dict.finalCta.description}
				</p>

				<div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
					<Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
						<Link href={`/checkout?plan=tier2&lang=${lang}`}>
							{dict.finalCta.primaryCta}
						</Link>
					</Button>
					<Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
						<a
							href="https://wa.me/573053335489?text=Quiero%20validar%20mi%20plan%20de%20automatizaci%C3%B3n"
							target="_blank"
							rel="noopener noreferrer"
						>
							{dict.finalCta.secondaryCta}
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
