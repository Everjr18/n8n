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
		metadataTitle: "Términos de Servicio | Automatizaciones con n8n",
		metadataDescription:
			"Consulta las condiciones generales para contratar nuestros servicios de automatización y mantenimiento con n8n.",
		lastUpdatedLabel: "Última actualización",
		lastUpdatedText: "1 de julio de 2024",
		lastUpdatedISO: "2024-07-01",
		heading: "Términos de Servicio",
		intro:
			"Al contratar o utilizar nuestros servicios aceptas estas condiciones. Están pensadas para brindarte claridad y transparencia sobre cómo trabajamos.",
		sections: [
			{
				kind: "paragraph",
				title: "1. Alcance del servicio",
				body: "Diseñamos, configuramos y mantenemos automatizaciones usando n8n y otras herramientas conectadas. El detalle de cada proyecto se acuerda por escrito antes de iniciar.",
			},
			{
				kind: "list",
				title: "2. Responsabilidades del cliente",
				items: [
					"Proporcionar información precisa y accesos necesarios para implementar las automatizaciones.",
					"Garantizar que el uso de los datos y herramientas cumple con las leyes aplicables de su región.",
					"Resguardar sus credenciales sensibles. Podemos ayudarte a gestionar accesos seguros cuando sea necesario.",
				],
			},
			{
				kind: "paragraph",
				title: "3. Entregables y soporte",
				body: "Cada entrega incluye documentación funcional y una sesión de revisión. Ofrecemos soporte posterior según el plan contratado. Cualquier ajuste fuera de alcance se cotiza por separado.",
			},
			{
				kind: "paragraph",
				title: "4. Pagos",
				body: "Los pagos se realizan según el cronograma pactado. Podemos solicitar un anticipo para iniciar el trabajo. Precios y monedas se definen en la propuesta comercial.",
			},
			{
				kind: "paragraph",
				title: "5. Confidencialidad",
				body: "Toda la información compartida se maneja de forma confidencial. Solo usaremos tus datos para el proyecto acordado, siguiendo nuestra Política de Privacidad.",
			},
			{
				kind: "paragraph",
				title: "6. Limitación de responsabilidad",
				body: "No somos responsables por daños indirectos o pérdida de oportunidades derivadas del uso del servicio. Siempre colaboraremos para minimizar riesgos y resolver incidencias.",
			},
			{
				kind: "paragraph",
				title: "7. Cambios en los términos",
				body: "Podemos actualizar estos términos para reflejar nuevos procesos o requisitos legales. Notificaremos cualquier cambio relevante a los clientes activos.",
			},
			{
				kind: "contact",
				title: "8. Contacto",
				body: "Para consultas sobre estos términos, escríbenos a {{email}}.",
			},
		],
	},
	en: {
		metadataTitle: "Terms of Service | Automations with n8n",
		metadataDescription:
			"Review the general conditions for hiring our automation and maintenance services with n8n.",
		lastUpdatedLabel: "Last updated",
		lastUpdatedText: "July 1, 2024",
		lastUpdatedISO: "2024-07-01",
		heading: "Terms of Service",
		intro:
			"By hiring or using our services you agree to these conditions. They are designed to give you clarity and transparency about how we work.",
		sections: [
			{
				kind: "paragraph",
				title: "1. Scope of service",
				body: "We design, configure, and maintain automations using n8n and other connected tools. The details of each project are agreed in writing before we begin.",
			},
			{
				kind: "list",
				title: "2. Client responsibilities",
				items: [
					"Provide accurate information and the access required to implement the automations.",
					"Ensure that the use of data and tools complies with the applicable laws in your region.",
					"Protect sensitive credentials. We can help you manage secure access when needed.",
				],
			},
			{
				kind: "paragraph",
				title: "3. Deliverables and support",
				body: "Each delivery includes functional documentation and a review session. We provide ongoing support according to the selected plan. Any out-of-scope adjustments are quoted separately.",
			},
			{
				kind: "paragraph",
				title: "4. Payments",
				body: "Payments follow the agreed schedule. We may request an upfront payment to start. Pricing and currencies are defined in the commercial proposal.",
			},
			{
				kind: "paragraph",
				title: "5. Confidentiality",
				body: "All shared information is handled confidentially. We use your data only for the agreed project, in line with our Privacy Policy.",
			},
			{
				kind: "paragraph",
				title: "6. Limitation of liability",
				body: "We are not liable for indirect damages or lost opportunities arising from the service. We always collaborate to minimize risks and resolve incidents.",
			},
			{
				kind: "paragraph",
				title: "7. Changes to the terms",
				body: "We may update these terms to reflect new processes or legal requirements. We will notify active clients of any relevant change.",
			},
			{
				kind: "contact",
				title: "8. Contact",
				body: "If you have questions about these terms, email us at {{email}}.",
			},
		],
	},
	pt: {
		metadataTitle: "Termos de Serviço | Automatizações com n8n",
		metadataDescription:
			"Confira as condições gerais para contratar nossos serviços de automação e manutenção com n8n.",
		lastUpdatedLabel: "Última atualização",
		lastUpdatedText: "1º de julho de 2024",
		lastUpdatedISO: "2024-07-01",
		heading: "Termos de Serviço",
		intro:
			"Ao contratar ou utilizar nossos serviços você concorda com estas condições. Elas existem para oferecer clareza e transparência sobre como trabalhamos.",
		sections: [
			{
				kind: "paragraph",
				title: "1. Escopo do serviço",
				body: "Projetamos, configuramos e mantemos automatizações usando n8n e outras ferramentas conectadas. Os detalhes de cada projeto são acordados por escrito antes do início.",
			},
			{
				kind: "list",
				title: "2. Responsabilidades do cliente",
				items: [
					"Fornecer informações precisas e os acessos necessários para implementar as automatizações.",
					"Garantir que o uso de dados e ferramentas está em conformidade com as leis aplicáveis da sua região.",
					"Proteger credenciais sensíveis. Podemos ajudar a administrar acessos seguros quando for necessário.",
				],
			},
			{
				kind: "paragraph",
				title: "3. Entregáveis e suporte",
				body: "Cada entrega inclui documentação funcional e uma sessão de revisão. Oferecemos suporte contínuo conforme o plano contratado. Qualquer ajuste fora do escopo é orçado separadamente.",
			},
			{
				kind: "paragraph",
				title: "4. Pagamentos",
				body: "Os pagamentos seguem o cronograma acordado. Podemos solicitar um adiantamento para iniciar o trabalho. Preços e moedas são definidos na proposta comercial.",
			},
			{
				kind: "paragraph",
				title: "5. Confidencialidade",
				body: "Todas as informações compartilhadas são tratadas de forma confidencial. Utilizamos seus dados apenas para o projeto acordado, conforme nossa Política de Privacidade.",
			},
			{
				kind: "paragraph",
				title: "6. Limitação de responsabilidade",
				body: "Não nos responsabilizamos por danos indiretos ou perda de oportunidades decorrentes do uso do serviço. Sempre colaboramos para reduzir riscos e resolver incidentes.",
			},
			{
				kind: "paragraph",
				title: "7. Alterações nos termos",
				body: "Podemos atualizar estes termos para refletir novos processos ou exigências legais. Notificaremos os clientes ativos sobre qualquer mudança relevante.",
			},
			{
				kind: "contact",
				title: "8. Contato",
				body: "Para dúvidas sobre estes termos, escreva para {{email}}.",
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

export default async function TermsPage({ params }: PageProps) {
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
