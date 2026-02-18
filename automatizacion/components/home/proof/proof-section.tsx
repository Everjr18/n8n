import { BadgeCheck } from "lucide-react";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
};

export default function ProofSection({ dict }: Props) {
	return (
		<section id="proof" className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
					{dict.proof.title}
				</h2>

				<div className="mt-6 grid gap-4 lg:grid-cols-3">
					{dict.proof.cases.map((item) => (
						<article key={item.title} className="rounded-xl border bg-white p-5">
							<h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
							<ul className="mt-3 space-y-2 text-sm text-slate-700">
								<li>
									<strong>Antes:</strong> {item.before.replace("Antes: ", "")}
								</li>
								<li>
									<strong>Despues:</strong> {item.after.replace("Despues: ", "")}
								</li>
								<li>
									<strong>Resultado:</strong> {item.result.replace("Resultado: ", "")}
								</li>
							</ul>
						</article>
					))}
				</div>

				<p className="mt-4 text-sm text-slate-600">{dict.proof.placeholderNote}</p>

				<div className="mt-6 rounded-xl border bg-white p-5">
					<p className="text-sm font-medium text-slate-900">
						{dict.proof.integrationsTitle}
					</p>
					<div className="mt-3 flex flex-wrap gap-2">
						{dict.proof.integrations.map((integration) => (
							<span
								key={integration}
								className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs text-slate-700"
							>
								<BadgeCheck className="h-3.5 w-3.5 text-emerald-600" />
								{integration}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
