import { Fragment } from "react";
import type { Metadata } from "next";

const email = "everjosejr18@gmail.com";
const languages = ["en", "es", "pt"] as const;
type Lang = (typeof languages)[number];

const fallbackLang: Lang = "es";

type Section =
	| { kind: "paragraph"; title: string; body: string }
	| { kind: "list"; title: string; description?: string; items: string[] };

type PageCopy = {
	metadataTitle: string;
	metadataDescription: string;
	lastUpdatedLabel: string;
	lastUpdatedText: string;
	lastUpdatedISO: string;
	heading: string;
	intro: string;
	sections: Section[];
};

const copy: Record<Lang, PageCopy> = {
	es: {
		metadataTitle: "Eliminación de Datos | Automatizaciones con n8n",
		metadataDescription:
			"Solicita la eliminación de los datos que compartiste con nosotros para crear o mantener tus automatizaciones con n8n.",
		lastUpdatedLabel: "Última actualización",
		lastUpdatedText: "1 de julio de 2024",
		lastUpdatedISO: "2024-07-01",
		heading: "Eliminación de Datos",
		intro:
			"Si quieres que borremos la información que nos compartiste, sigue los pasos de esta guía. Atendemos todas las solicitudes en un máximo de 5 días hábiles.",
		sections: [
			{
				kind: "list",
				title: "1. Cómo solicitar la eliminación",
				description:
					"Envíanos un correo con el asunto 'Eliminación de datos' a {{email}} e incluye:",
				items: [
					"Tu nombre y datos de contacto.",
					"El flujo o proyecto asociado.",
					"Si deseas una eliminación total o parcial (por ejemplo, conservar configuraciones sin datos personales).",
				],
			},
			{
				kind: "paragraph",
				title: "2. Confirmación y alcance",
				body: "Te confirmaremos la recepción en menos de 24 horas hábiles y te detallaremos qué datos serán eliminados, incluyendo respaldos y accesos de terceros que utilicen integraciones.",
			},
			{
				kind: "paragraph",
				title: "3. Eliminación",
				body: "Una vez confirmada la solicitud, eliminaremos los datos de nuestros sistemas y te entregaremos un reporte de finalización. Si alguna integración externa requiere acciones adicionales, te guiaremos paso a paso.",
			},
			{
				kind: "paragraph",
				title: "4. Preguntas",
				body: "¿Tienes dudas antes de solicitar la eliminación? Escríbenos. Nuestro objetivo es que tengas control total sobre tus datos.",
			},
		],
	},
	en: {
		metadataTitle: "Data Deletion | Automations with n8n",
		metadataDescription:
			"Request the deletion of any data you shared while we built or supported your n8n automations.",
		lastUpdatedLabel: "Last updated",
		lastUpdatedText: "July 1, 2024",
		lastUpdatedISO: "2024-07-01",
		heading: "Data Deletion",
		intro:
			"If you need us to remove the information you shared, follow this guide. We respond to every request within five business days.",
		sections: [
			{
				kind: "list",
				title: "1. How to request deletion",
				description:
					"Send us an email with the subject 'Data deletion' to {{email}} and include:",
				items: [
					"Your name and contact details.",
					"The related workflow or project.",
					"Whether you prefer a full deletion or a partial one (for example, keeping configurations without personal data).",
				],
			},
			{
				kind: "paragraph",
				title: "2. Confirmation and scope",
				body: "We will confirm receipt within 24 business hours and detail which data will be removed, including backups and any third-party integrations involved.",
			},
			{
				kind: "paragraph",
				title: "3. Deletion",
				body: "Once we validate the request, we purge the data from our systems and send you a completion report. If external integrations require additional steps, we will guide you through them.",
			},
			{
				kind: "paragraph",
				title: "4. Questions",
				body: "Have questions before requesting deletion? Let us know. Our goal is to give you full control over your data.",
			},
		],
	},
	pt: {
		metadataTitle: "Exclusão de Dados | Automatizações com n8n",
		metadataDescription:
			"Solicite a exclusão dos dados que você compartilhou conosco durante a criação ou manutenção das suas automatizações com n8n.",
		lastUpdatedLabel: "Última atualização",
		lastUpdatedText: "1º de julho de 2024",
		lastUpdatedISO: "2024-07-01",
		heading: "Exclusão de Dados",
		intro:
			"Se quiser que removamos as informações que você nos enviou, siga este guia. Respondemos a todos os pedidos em até cinco dias úteis.",
		sections: [
			{
				kind: "list",
				title: "1. Como solicitar a exclusão",
				description:
					"Envie um e-mail com o assunto 'Exclusão de dados' para {{email}} e inclua:",
				items: [
					"Seu nome e dados de contato.",
					"O fluxo ou projeto relacionado.",
					"Se prefere uma exclusão total ou parcial (por exemplo, manter configurações sem dados pessoais).",
				],
			},
			{
				kind: "paragraph",
				title: "2. Confirmação e escopo",
				body: "Confirmaremos o recebimento em até 24 horas úteis e informaremos quais dados serão removidos, incluindo backups e acessos de integrações de terceiros.",
			},
			{
				kind: "paragraph",
				title: "3. Exclusão",
				body: "Depois de validar o pedido, removemos os dados dos nossos sistemas e enviamos um relatório de conclusão. Se alguma integração externa exigir passos adicionais, acompanharemos você em cada etapa.",
			},
			{
				kind: "paragraph",
				title: "4. Dúvidas",
				body: "Tem dúvidas antes de solicitar a exclusão? Fale conosco. Queremos que você tenha controle total sobre seus dados.",
			},
		],
	},
};

const containerClasses =
	"mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16";
const sectionTitleClasses = "text-lg font-semibold";
const paragraphClasses = "text-sm sm:text-base";

const renderTextWithEmail = (text: string) => {
	if (!text.includes("{{email}}")) {
		return text;
	}

	const segments = text.split("{{email}}");

	return (
		<>
			{segments.map((segment, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<Fragment key={index}>
					{segment}
					{index < segments.length - 1 && (
						<a className="underline" href={`mailto:${email}`}>
							{email}
						</a>
					)}
				</Fragment>
			))}
		</>
	);
};

const resolveLang = (value: string): Lang =>
	languages.includes(value as Lang) ? (value as Lang) : fallbackLang;

interface PageProps {
	params: Promise<{ lang: string }>;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: string }>;
}): Promise<Metadata> {
	const { lang } = await params;
	const dict = copy[resolveLang(lang)];

	return {
		title: dict.metadataTitle,
		description: dict.metadataDescription,
	};
}

export default async function DataDeletionPage({ params }: PageProps) {
	const { lang } = await params;
	const dict = copy[resolveLang(lang)];

	return (
		<main className={containerClasses}>
			<header className="space-y-4">
				<p className="text-sm uppercase tracking-wide text-muted-foreground">
					{dict.lastUpdatedLabel}:{" "}
					<time dateTime={dict.lastUpdatedISO}>{dict.lastUpdatedText}</time>
				</p>
				<h1 className="text-3xl font-bold sm:text-4xl">{dict.heading}</h1>
				<p className={paragraphClasses}>{dict.intro}</p>
			</header>

			{dict.sections.map((section) => (
				<section className="space-y-3" key={section.title}>
					<h2 className={sectionTitleClasses}>{section.title}</h2>
					{section.kind === "paragraph" && (
						<p className={paragraphClasses}>{section.body}</p>
					)}
					{section.kind === "list" && (
						<>
							{section.description && (
								<p className={paragraphClasses}>
									{renderTextWithEmail(section.description)}
								</p>
							)}
							<ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
								{section.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</>
					)}
				</section>
			))}
		</main>
	);
}

export function generateStaticParams() {
	return languages.map((lang) => ({ lang }));
}
