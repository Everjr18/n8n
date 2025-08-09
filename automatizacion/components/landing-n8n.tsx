import Whatsapp from "./whatsapp";
import HeroSection from "./home/hero/hero-section";
import HowItWorksSection from "./home/howitworks/howitworks-section";
import ServicesSection from "./home/services/services";
import CasesSection from "./home/cases/cases";
import TrustSection from "./home/trustsection/trust-section";

type Props = {
	dict: {
		hero: {
			title: string;
			description: string;
			contactButton: string;
			contactSubtext?: string;
			trustNote?: string;
		};
		howItWorks: {
			title: string;
			steps: string[];
		};
		cases: {
			title: string;
			cases: {
				id: string;
				title: string;
				short: string;
				full: string;
				image?: string;
				download?: string;
				message?: string;
			}[];
		};
		services: {
			title: string;
			list: string[];
			callToAction: string;
		};
		trust: {
			title: string;
			list: string[];
		};
		footer: string;
	};
};

function LandingN8n({ dict }: Props) {
	return (
		<div className="min-h-screen bg-white text-gray-800">
			<HeroSection dict={dict} />
			<HowItWorksSection dict={dict} />
			<CasesSection dict={dict} />
			<ServicesSection dict={dict} />
			<TrustSection dict={dict} />

			<footer className="text-center text-sm text-gray-500 py-6">
				© {new Date().getFullYear()} {dict.footer}
			</footer>

			<Whatsapp />
		</div>
	);
}

export default LandingN8n;
