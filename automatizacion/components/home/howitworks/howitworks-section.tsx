"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Wrench, Rocket } from "lucide-react";
import type React from "react";

type Props = {
	dict: {
		howItWorks: {
			title: string;
			steps: string[];
		};
	};
};

const icons = [Brain, Wrench, Rocket];

const HowItWorksSection: React.FC<Props> = ({ dict }) => {
	const { title, steps } = dict.howItWorks;

	return (
		<section className="bg-gray-50 py-16 px-6 text-center">
			<motion.h2
				className="text-2xl font-semibold mb-10"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				{title}
			</motion.h2>

			<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
				{steps.map((step, i) => {
					const Icon = icons[i];

					return (
						<motion.div
							key={step}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: i * 0.2 }}
							viewport={{ once: true }}
						>
							<Card className="hover:shadow-lg hover:scale-105 transition-transform">
								<CardContent className="p-6 text-center flex flex-col items-center gap-4">
									<div className="bg-primary/10 text-primary p-3 rounded-full">
										<Icon className="w-6 h-6" />
									</div>
									<p className="text-base font-medium">
										{step.replace(/^[^a-zA-Z0-9]+/, "")}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default HowItWorksSection;
