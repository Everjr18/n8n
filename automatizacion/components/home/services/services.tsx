"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Repeat, Mail, MessageCircle, Table, Workflow } from "lucide-react";

type Props = {
	dict: {
		services: {
			title: string;
			list: string[];
		};
	};
};

const icons = [Repeat, Mail, MessageCircle, Table, Workflow];

function ServicesSection({ dict }: Props) {
	const { title, list } = dict.services;

	return (
		<section className="bg-white py-16 px-6 text-center">
			<motion.h2
				className="text-2xl font-semibold mb-10"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				{title}
			</motion.h2>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
				{list.map((item, i) => {
					const Icon = icons[i] ?? Workflow;

					return (
						<motion.div
							key={item}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: i * 0.2 }}
							viewport={{ once: true }}
						>
							<Card className="hover:shadow-lg hover:scale-105 transition-transform h-full">
								<CardContent className="p-6 flex flex-col items-center gap-4 text-center">
									<div className="bg-primary/10 text-primary p-3 rounded-full">
										<Icon className="w-6 h-6" />
									</div>
									<p className="text-base font-medium">{item}</p>
								</CardContent>
							</Card>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}

export default ServicesSection;
