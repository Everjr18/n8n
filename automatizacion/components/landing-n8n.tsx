import { Card, CardContent } from "@/components/ui/card";
import { Mail, Zap, Workflow, MessageCircle, Database } from "lucide-react";
import type React from "react";
import Whatsapp from "./whatsapp";
import HeroSection from "./home/hero/hero-section";
import HowItWorksSection from "./home/howitworks/howitworks-section";
import ServicesSection from "./home/services/services";
import CasesSection from "./home/cases/cases";

type Props = {
	dict: Record<string, string>;
};

const LandingN8n: React.FC<Props> = ({ dict }) => {
	return (
		<div className="min-h-screen bg-white text-gray-800">
			<HeroSection dict={dict} />

			<HowItWorksSection dict={dict} />
			<ServicesSection dict={dict} />
			<CasesSection dict={dict} />

			<section className="py-16 px-6 max-w-5xl mx-auto">
				<h2 className="text-2xl font-semibold text-center mb-10">
					{dict.plansTitle}
				</h2>
				<div className="grid gap-6 md:grid-cols-3">
					<Card>
						<CardContent className="p-6 text-center">
							<h3 className="font-bold mb-2">{dict.plan1Title}</h3>
							<p>{dict.plan1Desc}</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6 text-center">
							<h3 className="font-bold mb-2">{dict.plan2Title}</h3>
							<p>{dict.plan2Desc}</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6 text-center">
							<h3 className="font-bold mb-2">{dict.plan3Title}</h3>
							<p>{dict.plan3Desc}</p>
						</CardContent>
					</Card>
				</div>
			</section>

			<section className="py-16 px-6 max-w-5xl mx-auto">
				<h2 className="text-2xl font-semibold text-center mb-10">
					{dict.casesTitle}
				</h2>
				<div className="grid gap-6 md:grid-cols-3">
					<Card>
						<CardContent className="p-6">{dict.case1}</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6">{dict.case2}</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6">{dict.case3}</CardContent>
					</Card>
				</div>
			</section>

			<section className="bg-gray-100 py-16 px-6 text-center">
				<h2 className="text-2xl font-semibold mb-6">{dict.trustTitle}</h2>
				<ul className="grid gap-4 max-w-xl mx-auto text-lg text-gray-700">
					<li>{dict.trust1}</li>
					<li>{dict.trust2}</li>
					<li>{dict.trust3}</li>
					<li>{dict.trust4}</li>
				</ul>
			</section>

			<footer className="text-center text-sm text-gray-500 py-6">
				© {new Date().getFullYear()} {dict.footer}
			</footer>

			<Whatsapp />
		</div>
	);
};

export default LandingN8n;
