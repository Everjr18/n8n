"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrackOnMount } from "@/components/analytics/track-on-mount";
import type { LandingDictionary } from "@/lib/i18n/types";

type Props = {
	dict: LandingDictionary;
	lang: string;
	plan: string;
};

export function CancelView({ dict, lang, plan }: Props) {
	return (
		<div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6">
			<TrackOnMount eventName="checkout_cancel" payload={{ lang, plan }} />
			<div className="mx-auto max-w-xl">
				<Card>
					<CardContent className="space-y-4 p-6">
						<h1 className="text-3xl font-bold text-slate-900">{dict.cancel.title}</h1>
						<p className="text-sm text-slate-600">{dict.cancel.subtitle}</p>
						<Button asChild className="w-full">
							<Link href={`/checkout?plan=${plan}&lang=${lang}`}>
								{dict.cancel.retryCta}
							</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
