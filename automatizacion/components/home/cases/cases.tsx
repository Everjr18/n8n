"use client";

import { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Case {
	id: string;
	title: string;
	short: string;
	full: string; // usa \n para separar bullets
	image?: string; // nombre del archivo en /public/cases/
	download?: string; // texto para el enlace de descarga
	message?: string; // mensaje para el enlace de WhatsApp
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
				className="text-3xl font-semibold mb-10"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				{title}
			</motion.h2>

			<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
				{cases.map((c, i) => (
					<Dialog key={c.id}>
						<DialogTrigger asChild>
							<motion.div
								className="cursor-pointer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: i * 0.15 }}
								viewport={{ once: true }}
								onClick={() => setSelectedCase(c)}
							>
								<Card className="transition-transform hover:scale-[1.02] hover:shadow-lg">
									{/* Miniatura */}
									<div className="p-4 pb-0">
										<AspectRatio
											ratio={16 / 9}
											className="rounded-lg border bg-muted"
										>
											{c.image ? (
												<Image
													src={`/cases/${c.image}`}
													alt={c.title}
													fill
													className="object-cover rounded-lg" // <-- llenar el cuadro
													sizes="(max-width:768px) 100vw, 33vw"
												/>
											) : (
												<div className="w-full h-full rounded-lg" />
											)}
										</AspectRatio>
									</div>

									<CardContent className="p-6 space-y-2">
										<CardTitle className="text-lg">{c.title}</CardTitle>
										<p className="text-sm text-muted-foreground">{c.short}</p>
									</CardContent>
								</Card>
							</motion.div>
						</DialogTrigger>

						<DialogContent className="sm:max-w-3xl p-0 overflow-hidden rounded-2xl border shadow-xl">
							{selectedCase && (
								<>
									<DialogHeader className="px-6 pt-5 pb-3">
										<DialogTitle className="text-xl font-semibold">
											{selectedCase.title}
										</DialogTitle>

										{selectedCase.full && (
											<DialogDescription asChild>
												<div className="mt-2 text-sm text-muted-foreground space-y-2">
													{selectedCase.full.split("\n").map((line, idx) => (
														// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
														<div key={idx} className="flex gap-2">
															<span className="mt-1 select-none">•</span>
															<p>{line}</p>
														</div>
													))}
												</div>
											</DialogDescription>
										)}
									</DialogHeader>

									{selectedCase.image && (
										<div className="px-6">
											<AspectRatio
												ratio={16 / 9}
												className="rounded-lg border bg-muted"
											>
												<Image
													src={`/cases/${selectedCase.image}`}
													alt={selectedCase.title}
													fill
													className="object-cover rounded-lg" // <-- llenar el cuadro
													sizes="(max-width:768px) 100vw, 1024px"
												/>
											</AspectRatio>
										</div>
									)}

									<DialogFooter className="px-6 py-5">
										<Button asChild>
											<a
												href="https://wa.me/573053335489?text=Quiero%20automatizar%20algo%20as%C3%AD%20%F0%9F%9A%80"
												target="_blank"
												rel="noopener noreferrer"
											>
												{selectedCase.message}
											</a>
										</Button>
										{selectedCase?.image && (
											<Button variant="outline" asChild>
												<a
													href={`/cases/${selectedCase.image}`}
													target="_blank"
													rel="noopener noreferrer"
													download
												>
													{selectedCase.download}
												</a>
											</Button>
										)}
									</DialogFooter>
								</>
							)}
						</DialogContent>
					</Dialog>
				))}
			</div>
		</section>
	);
}

export default CasesSection;
