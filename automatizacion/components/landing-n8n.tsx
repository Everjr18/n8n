import TrackOnMount from "@/components/analytics/track-on-mount";
import HeroSection from "@/components/home/hero/hero-section";
import ProofSection from "@/components/home/proof/proof-section";
import ServicesSection from "@/components/home/services/services";
import PackagesSection from "@/components/home/packages/packages-section";
import HowItWorksSection from "@/components/home/howitworks/howitworks-section";
import FaqSection from "@/components/home/faq/faq-section";
import FinalCtaSection from "@/components/home/final-cta/final-cta-section";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
};

export default function LandingN8n({ dict }: Props) {
	return (
		<div className="min-h-screen bg-white text-slate-900">
			<TrackOnMount eventName="landing_view" />
			<HeroSection dict={dict} />
			<ProofSection dict={dict} />
			<ServicesSection dict={dict} />
			<PackagesSection dict={dict} />
			<HowItWorksSection dict={dict} />
			<FaqSection dict={dict} />
			<FinalCtaSection dict={dict} />

			<footer className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-500">
				© {new Date().getFullYear()} {dict.footer}
			</footer>
		</div>
	);
}
