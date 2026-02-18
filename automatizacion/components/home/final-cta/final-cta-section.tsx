import { Button } from "@/components/ui/button";
import type { LandingDictionary } from "@/lib/i18n/types";
import { createWhatsAppHref } from "@/lib/whatsapp";

type Props = {
	dict: LandingDictionary;
};

export default function FinalCtaSection({ dict }: Props) {
	return (
		<section className="px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-5xl rounded-2xl bg-slate-900 p-6 text-white sm:p-10">
				<h2 className="text-balance text-2xl font-semibold sm:text-3xl">
					{dict.finalCta.title}
				</h2>
				<p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
					{dict.finalCta.description}
				</p>
				<Button asChild size="lg" className="mt-6 h-12 bg-emerald-500 text-base hover:bg-emerald-600">
					<a
						href={createWhatsAppHref(
							"Hola, quiero agendar diagnostico para automatizar mi consultorio.",
						)}
						target="_blank"
						rel="noopener noreferrer"
					>
						{dict.finalCta.primaryCta}
					</a>
				</Button>
			</div>
		</section>
	);
}
