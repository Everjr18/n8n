"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Case {
	id: string;
	title: string;
	short: string;
	full: string;
	image?: string;
}

type Props = {
	dict: {
		cases: {
			title: string;
			cases: Case[];
		};
	};
};

function CasesSection({ dict }: Props) {
	const { title, cases } = dict.cases;
	const [selectedCase, setSelectedCase] = useState<Case | null>(null);

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

			<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
				{cases.map((c, i) => (
					<Dialog key={c.id}>
						<DialogTrigger asChild>
							<motion.div
								className="cursor-pointer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: i * 0.2 }}
								viewport={{ once: true }}
								onClick={() => setSelectedCase(c)}
							>
								<Card>
									<CardContent className="p-6">
										<h3 className="font-semibold mb-2">{c.title}</h3>
										<p className="text-sm text-gray-600">{c.short}</p>
									</CardContent>
								</Card>
							</motion.div>
						</DialogTrigger>

						<DialogContent className="max-w-2xl">
							{selectedCase && (
								<div className="space-y-4">
									<h3 className="text-lg font-semibold">
										{selectedCase.title}
									</h3>
									<p className="text-gray-700 text-sm whitespace-pre-line">
										{selectedCase.full}
									</p>
									{selectedCase.image && (
										<Image
											src={`/cases/${selectedCase.image}`}
											alt={selectedCase.title}
											width={800}
											height={400}
											className="rounded border mt-4"
										/>
									)}
								</div>
							)}
						</DialogContent>
					</Dialog>
				))}
			</div>
		</section>
	);
}

export default CasesSection;
