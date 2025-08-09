/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { Repeat, Mail, MessageCircle, Table, Workflow } from "lucide-react";
import Link from "next/link";

type Props = {
	dict: {
		services: {
			title: string;
			list: string[];
			callToAction: string;
			// opcional: ctaText?: string;
		};
	};
};

const iconMap = [Repeat, Mail, MessageCircle, Table, Workflow];

export default function ServicesSection({ dict }: Props) {
	const { title, list } = dict.services;
	const shouldReduce = useReducedMotion();

	const gridVariants = {
		hidden: {},
		show: {
			transition: { staggerChildren: shouldReduce ? 0 : 0.06 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
		show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
	};

	return (
		<section className="bg-gray-50 py-16 px-6 text-center">
			<motion.h2
				className="text-2xl font-semibold mb-10"
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.45 }}
				viewport={{ once: true, amount: 0.2 }}
			>
				{title}
			</motion.h2>

			{/** biome-ignore lint/a11y/useSemanticElements: <explanation> */}
			<motion.div
				className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left"
				variants={gridVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
				role="list"
			>
				{list.map((label, i) => {
					const Icon = iconMap[i] ?? Workflow;
					return (
						// biome-ignore lint/a11y/useSemanticElements: <explanation>
						<motion.div
							key={`${label}-${i}`}
							variants={itemVariants}
							role="listitem"
						>
							<Card
								className="group relative h-full overflow-hidden border transition
                           hover:-translate-y-0.5 hover:shadow-lg
                           focus-within:shadow-lg focus-within:-translate-y-0.5
                           focus-within:ring-2 focus-within:ring-primary/30"
								tabIndex={0}
							>
								{/* Acento superior */}
								<div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 transition-opacity group-hover:opacity-100" />

								<CardContent className="p-6 flex flex-col items-center gap-4 text-center">
									<div
										className="rounded-full p-3 ring-1 ring-primary/20 bg-primary/10
                               transition group-hover:bg-primary/15 group-hover:ring-primary/30"
										aria-hidden="true"
									>
										<Icon className="w-6 h-6 text-primary transition group-hover:scale-110" />
									</div>

									<p className="text-base font-medium text-gray-900">{label}</p>
								</CardContent>
							</Card>
						</motion.div>
					);
				})}
			</motion.div>

			<div className="mt-10">
				<Button asChild size="lg">
					<Link
						href="https://wa.me/573053335489?text=Quiero%20automatizar%20un%20proceso%20%F0%9F%9A%80"
						target="_blank"
						rel="noopener noreferrer"
					>
						{dict.services.callToAction}
					</Link>
				</Button>
			</div>
		</section>
	);
}
