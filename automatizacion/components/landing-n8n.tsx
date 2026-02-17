import HeroSection from "@/components/home/hero/hero-section";
import ProofSection from "@/components/home/proof/proof-section";
import HowItWorksSection from "@/components/home/howitworks/howitworks-section";
import ServicesSection from "@/components/home/services/services";
import PricingSection from "@/components/home/pricing/pricing-section";
import FaqSection from "@/components/home/faq/faq-section";
import FinalCtaSection from "@/components/home/final-cta/final-cta-section";
import { TrackOnMount } from "@/components/analytics/track-on-mount";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
	lang: string;
};

export default function LandingN8n({ dict, lang }: Props) {
	return (
		<div className="min-h-screen bg-white text-slate-900">
			<TrackOnMount eventName="landing_view" payload={{ lang }} />
			<HeroSection dict={dict} checkoutHref={`/checkout?plan=tier2&lang=${lang}`} />
			<ProofSection dict={dict} />
			<HowItWorksSection dict={dict} />
			<ServicesSection dict={dict} />
			<PricingSection dict={dict} lang={lang} />
			<FaqSection dict={dict} />
			<FinalCtaSection dict={dict} lang={lang} />

			<footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
				© {new Date().getFullYear()} {dict.footer}
			</footer>
		</div>
	);
}
