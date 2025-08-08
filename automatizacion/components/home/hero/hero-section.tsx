"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type React from "react";

type Props = {
	dict: {
		hero: {
			title: string;
			description: string;
			contactButton: string;
			contactSubtext?: string;
			trustNote?: string;
		};
	};
};

function HeroSection({ dict }: Props) {
	const { title, description, contactButton, contactSubtext, trustNote } =
		dict.hero;

	return (
		<section className="min-h-[70vh] flex flex-col justify-center items-center bg-white px-6 text-center text-gray-800">
			<motion.h1
				className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl leading-tight"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				🚀 {title}
			</motion.h1>

			<motion.p
				className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				{description}
			</motion.p>

			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.4, delay: 0.4 }}
				className="flex flex-col items-center"
			>
				<Button
					size="lg"
					className="text-lg px-6 py-3 shadow-lg hover:scale-105 transition-transform"
					asChild
				>
					<a
						href="https://wa.me/573053335489?text=Hola!%20Estoy%20interesado%20en%20automatizar%20mi%20negocio%20con%20n8n"
						target="_blank"
						rel="noopener noreferrer"
					>
						💬 {contactButton}
					</a>
				</Button>

				{contactSubtext && (
					<p className="text-sm text-gray-500 mt-2">{contactSubtext}</p>
				)}
			</motion.div>

			{trustNote && <p className="mt-6 text-sm text-gray-500">{trustNote}</p>}
		</section>
	);
}

export default HeroSection;
