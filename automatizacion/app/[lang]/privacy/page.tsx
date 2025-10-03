import { Fragment } from "react";
import type { Metadata } from "next";

const email = "everjosejr18@gmail.com";
const languages = ["en", "es", "pt"] as const;
type Lang = (typeof languages)[number];

const fallbackLang: Lang = "es";

type Section =
	| { kind: "paragraph"; title: string; body: string }
	| { kind: "list"; title: string; items: string[] }
	| { kind: "contact"; title: string; body: string };

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
		metadataTitle: "Política de Privacidad | Automatizaciones con n8n",
		metadataDescription:
			"Conoce cómo recopilamos, utilizamos y protegemos los datos de los usuarios de nuestros servicios de automatización con n8n.",
		lastUpdatedLabel: "Última actualización",
		lastUpdatedText: "1 de julio de 2024",
		lastUpdatedISO: "2024-07-01",
		heading: "Política de Privacidad",
		intro:
			"Tu confianza es fundamental. Esta política explica qué datos recopilamos, cómo los usamos y qué opciones tienes sobre tu información.",
		sections: [
			{
				kind: "list",
				title: "1. Datos que recopilamos",
				items: [
					"Información de contacto: nombre, correo electrónico y número de WhatsApp.",
					"Detalles sobre los procesos que deseas automatizar.",
					"Datos técnicos mínimos para operar flujos (por ejemplo, identificadores o credenciales de integraciones) siempre bajo acuerdos de confidencialidad.",
				],
			},
			{
				kind: "paragraph",
				title: "2. Cómo usamos tus datos",
				body: "Utilizamos la información exclusivamente para diseñar, implementar y dar soporte a tus automatizaciones. No vendemos ni compartimos tus datos con terceros ajenos al proyecto.",
			},
			{
				kind: "paragraph",
				title: "3. Seguridad y confidencialidad",
				body: "Aplicamos buenas prácticas de seguridad, acceso restringido y acuerdos de confidencialidad. Solo el personal directamente involucrado en tu proyecto puede acceder a la información necesaria.",
			},
			{
				kind: "paragraph",
				title: "4. Conservación",
				body: "Guardamos los datos únicamente mientras dure la relación comercial o hasta que solicites su eliminación. Eliminamos o anonimizamos la información cuando deja de ser necesaria.",
			},
			{
				kind: "list",
				title: "5. Tus derechos",
				items: [
					"Acceder a los datos que tenemos sobre ti.",
					"Solicitar correcciones si la información es inexacta.",
					"Solicitar la eliminación de tus datos cuando lo desees.",
				],
			},
			{
				kind: "contact",
				title: "6. Contacto",
				body: "Si tienes preguntas o deseas ejercer cualquiera de tus derechos, escríbenos a {{email}}.",
			},
		],
	},
	en: {
		metadataTitle: "Privacy Policy | Automations with n8n",
		metadataDescription:
			"Learn how we collect, use, and protect the data you share while we build automations with n8n.",
		lastUpdatedLabel: "Last updated",
		lastUpdatedText: "July 1, 2024",
		lastUpdatedISO: "2024-07-01",
		heading: "Privacy Policy",
		intro:
			"Your trust matters. This policy explains what data we collect, how we use it, and the choices you have.",
		sections: [
			{
				kind: "list",
				title: "1. Data we collect",
				items: [
					"Contact information such as name, email address, and WhatsApp number.",
					"Details about the processes you want to automate.",
					"Minimal technical data required to run workflows (for example, integration identifiers or credentials) always under confidentiality agreements.",
				],
			},
			{
				kind: "paragraph",
				title: "2. How we use your data",
				body: "We use your information only to design, implement, and support your automations. We never sell or share your data with third parties unrelated to the project.",
			},
			{
				kind: "paragraph",
				title: "3. Security and confidentiality",
				body: "We apply good security practices, restricted access, and confidentiality agreements. Only the team directly involved in your project can access the data they need.",
			},
			{
				kind: "paragraph",
				title: "4. Retention",
				body: "We keep data only for the duration of our business relationship or until you request its deletion. We delete or anonymize information when it is no longer required.",
			},
			{
				kind: "list",
				title: "5. Your rights",
				items: [
					"Access the data we store about you.",
					"Request corrections if any information is inaccurate.",
					"Request the deletion of your data whenever you need it.",
				],
			},
			{
				kind: "contact",
				title: "6. Contact",
				body: "If you have questions or want to exercise your rights, email us at {{email}}.",
			},
		],
	},
	pt: {
		metadataTitle: "Política de Privacidade | Automatizações com n8n",
		metadataDescription:
			"Saiba como coletamos, utilizamos e protegemos os dados que você compartilha enquanto criamos automatizações com n8n.",
		lastUpdatedLabel: "Última atualização",
		lastUpdatedText: "1º de julho de 2024",
		lastUpdatedISO: "2024-07-01",
		heading: "Política de Privacidade",
		intro:
			"A sua confiança é essencial. Esta política explica quais dados coletamos, como usamos e quais opções você tem.",
		sections: [
			{
				kind: "list",
				title: "1. Dados que coletamos",
				items: [
					"Informações de contato: nome, e-mail e número de WhatsApp.",
					"Detalhes sobre os processos que você deseja automatizar.",
					"Dados técnicos mínimos para operar fluxos (como identificadores ou credenciais de integrações), sempre sob acordos de confidencialidade.",
				],
			},
			{
				kind: "paragraph",
				title: "2. Como usamos seus dados",
				body: "Usamos suas informações exclusivamente para desenhar, implementar e dar suporte às suas automatizações. Não vendemos nem compartilhamos seus dados com terceiros sem relação com o projeto.",
			},
			{
				kind: "paragraph",
				title: "3. Segurança e confidencialidade",
				body: "Aplicamos boas práticas de segurança, acesso restrito e acordos de confidencialidade. Apenas a equipe diretamente envolvida no seu projeto pode acessar os dados necessários.",
			},
			{
				kind: "paragraph",
				title: "4. Retenção",
				body: "Mantemos os dados somente enquanto durar o relacionamento comercial ou até que você solicite a exclusão. Eliminamos ou anonimizamos as informações quando deixam de ser necessárias.",
			},
			{
				kind: "list",
				title: "5. Seus direitos",
				items: [
					"Acessar os dados que mantemos sobre você.",
					"Solicitar correções caso alguma informação esteja incorreta.",
					"Solicitar a exclusão dos seus dados quando quiser.",
				],
			},
			{
				kind: "contact",
				title: "6. Contato",
				body: "Se tiver dúvidas ou quiser exercer seus direitos, escreva para {{email}}.",
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

export default async function PrivacyPage({ params }: PageProps) {
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
						<ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
							{section.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					)}
					{section.kind === "contact" && (
						<p className={paragraphClasses}>
							{renderTextWithEmail(section.body)}
						</p>
					)}
				</section>
			))}
		</main>
	);
}

export function generateStaticParams() {
	return languages.map((lang) => ({ lang }));
}
