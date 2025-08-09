"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Code2, Target, Rocket } from "lucide-react";

type Props = {
	dict: {
		trust: {
			title: string;
			list: string[]; // "Título: descripción"
		};
	};
};

const ICONS = [ShieldCheck, Code2, Target, Rocket]; // en orden de tus 4 bullets

export default function TrustSection({ dict }: Props) {
	const { title, list } = dict.trust;
	const reduce = useReducedMotion();

	const grid = {
		hidden: {},
		show: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
	};
	const item = {
		hidden: { opacity: 0, y: reduce ? 0 : 12 },
		show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
	};

	return (
		<section className="relative py-16 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
			<motion.h2
				className="text-2xl font-semibold mb-10"
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.45 }}
				viewport={{ once: true, amount: 0.2 }}
			>
				{title}
			</motion.h2>

			<motion.div
				className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
				variants={grid}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				{list.map((raw, i) => {
					const [ttl, ...rest] = raw.split(":");
					const desc = rest.join(":").trim();
					const titleText = (ttl ?? raw).trim();
					const Icon = ICONS[i] ?? ShieldCheck;

					return (
						<motion.div
							key={`${raw}-${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								i
							}`}
							variants={item}
							className="flex flex-col items-center text-center"
						>
							<div
								className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full
                           bg-white/70 ring-1 ring-gray-200 backdrop-blur
                           transition will-change-transform
                           hover:scale-105 hover:ring-primary/30"
								aria-hidden="true"
							>
								<Icon className="h-7 w-7 text-primary" />
							</div>

							<h3 className="text-base font-semibold text-gray-900">
								{titleText}
							</h3>
							{desc && (
								<p className="mt-1 text-sm text-muted-foreground max-w-[24ch]">
									{desc}
								</p>
							)}
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
