import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Zap, Workflow, MessageCircle, Database } from "lucide-react";
import type React from "react";
import Whatsapp from "./whatsapp";

type Props = {
	dict: Record<string, string>;
};

const LandingN8n: React.FC<Props> = ({ dict }) => {
	return (
		<div className="min-h-screen bg-white text-gray-800">
			<section className="text-center py-20 px-6 max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-4">{dict.title}</h1>
				<p className="text-lg mb-6">{dict.description}</p>
				<Button size="lg" className="text-lg px-6 py-3" asChild>
					<a
						href="https://wa.me/573003774663?text=Hola!%20Estoy%20interesado%20en%20automatizar%20mi%20negocio%20con%20n8n"
						target="_blank"
						rel="noopener noreferrer"
					>
						{dict.contactButton}
					</a>
				</Button>
			</section>

			<section className="bg-white py-16 px-6 max-w-5xl mx-auto text-center">
				<h2 className="text-2xl font-semibold mb-10">{dict.howItWorksTitle}</h2>
				<div className="grid md:grid-cols-3 gap-6 text-left">
					<Card>
						<CardContent className="p-6">{dict.step1}</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6">{dict.step2}</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6">{dict.step3}</CardContent>
					</Card>
				</div>
			</section>

			<section className="bg-gray-50 py-16 px-6">
				<h2 className="text-2xl font-semibold text-center mb-10">
					{dict.servicesTitle}
				</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
					<Card>
						<CardContent className="flex items-center gap-4 p-6">
							<Zap className="w-8 h-8 text-primary" />{" "}
							<span>{dict.service1}</span>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex items-center gap-4 p-6">
							<Mail className="w-8 h-8 text-primary" />{" "}
							<span>{dict.service2}</span>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex items-center gap-4 p-6">
							<MessageCircle className="w-8 h-8 text-primary" />{" "}
							<span>{dict.service3}</span>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex items-center gap-4 p-6">
							<Database className="w-8 h-8 text-primary" />{" "}
							<span>{dict.service4}</span>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex items-center gap-4 p-6">
							<Workflow className="w-8 h-8 text-primary" />{" "}
							<span>{dict.service5}</span>
						</CardContent>
					</Card>
				</div>
			</section>

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
