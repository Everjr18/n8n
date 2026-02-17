import type { LandingDictionary } from "./types";

export const pt: LandingDictionary = {
	hero: {
		badge: "Automação n8n para equipes enxutas",
		title: "Transforme tarefas manuais em fluxos que rodam sozinhos",
		subtitle:
			"Implemente automações prontas para produção, reduza erros operacionais e ganhe tempo para crescer.",
		outcomes: [
			"Economize de 6 a 20 horas por semana em tarefas repetitivas.",
			"Dispare e-mails, alertas e atualizações sem acompanhamento manual.",
			"Escale a operação sem adicionar ferramentas complexas.",
		],
		primaryCta: "Ver planos",
		secondaryCta: "Como funciona",
		trustNote: "Mais de 80 fluxos entregues para negócios na América Latina.",
	},
	proof: {
		title: "Resultados práticos",
		items: [
			{
				title: "Implantação rápida",
				description: "Primeiro fluxo em produção em poucos dias.",
			},
			{
				title: "Menos erros manuais",
				description: "Validação e alertas automáticos nos pontos críticos.",
			},
			{
				title: "Suporte contínuo",
				description: "Ajustes e melhorias após o lançamento.",
			},
		],
	},
	howItWorks: {
		title: "Como funciona",
		steps: [
			{
				title: "1. Diagnóstico",
				description:
					"Mapeamos o processo atual e priorizamos a automação de maior impacto.",
			},
			{
				title: "2. Implementação",
				description:
					"Criamos o fluxo no n8n, conectamos suas ferramentas e testamos.",
			},
			{
				title: "3. Ativação",
				description:
					"Publicamos em produção, monitoramos resultados e ajustamos quando necessário.",
			},
		],
	},
	includes: {
		title: "O que está incluído",
		items: [
			"Fluxos n8n prontos para produção.",
			"Integrações com formulários, CRM, e-mail, Sheets e APIs.",
			"Tratamento de erros e alertas automáticos.",
			"Documentação curta para operação do time.",
			"Sessão de onboarding após ativação.",
		],
	},
	pricing: {
		title: "Planos de assinatura",
		subtitle:
			"Três opções objetivas, cobrança mensal e escopo claro por nível.",
		recommendedLabel: "Recomendado",
		afterPayment:
			"Após o pagamento: ativamos seu acesso, enviamos o onboarding e iniciamos a implementação.",
		plans: [
			{
				tier: "tier1",
				name: "Starter",
				price: "$49",
				period: "/mês",
				audience: "Para quem é: negócio com 1 fluxo prioritário.",
				bullets: ["1 fluxo ativo", "Suporte por e-mail", "Ajustes menores"],
				cta: "Escolher Starter",
			},
			{
				tier: "tier2",
				name: "Growth",
				price: "$99",
				period: "/mês",
				audience: "Para quem é: equipe com processos recorrentes em crescimento.",
				bullets: [
					"Até 3 fluxos ativos",
					"Suporte prioritário",
					"Revisão mensal de otimização",
				],
				cta: "Escolher Growth",
				recommended: true,
			},
			{
				tier: "tier3",
				name: "Scale",
				price: "$199",
				period: "/mês",
				audience: "Para quem é: operação com maior volume e várias integrações.",
				bullets: [
					"Até 8 fluxos ativos",
					"Janela de suporte estendida",
					"Roadmap trimestral",
				],
				cta: "Escolher Scale",
			},
		],
	},
	faq: {
		title: "Perguntas frequentes",
		items: [
			{
				question: "Preciso programar?",
				answer:
					"Não. Você define o resultado e nós cuidamos da implementação técnica.",
			},
			{
				question: "Posso cancelar a qualquer momento?",
				answer: "Sim. A assinatura é mensal e pode ser cancelada no PayPal.",
			},
			{
				question: "O que acontece se um fluxo falhar?",
				answer:
					"Configuramos alertas e tratamos incidentes conforme o plano contratado.",
			},
			{
				question: "Onboarding está incluído?",
				answer:
					"Sim. Depois do pagamento agendamos o kickoff e iniciamos o primeiro fluxo.",
			},
		],
	},
	finalCta: {
		title: "Comece com o fluxo que mais impacta seu negócio agora",
		description:
			"Escolha um plano e ative a assinatura em minutos. Podemos ajudar na decisão.",
		primaryCta: "Ir para checkout",
		secondaryCta: "Falar no WhatsApp",
	},
	checkout: {
		title: "Ative sua assinatura",
		subtitle: "Escolha o plano, confirme seu e-mail e pague com PayPal.",
		emailLabel: "E-mail para ativar o acesso",
		emailPlaceholder: "voce@empresa.com",
		secureNote: "Pagamento seguro processado pelo PayPal.",
		backToPricing: "Voltar aos planos",
		paypalDisclaimer:
			"O Guest Checkout (cartão sem conta PayPal) pode aparecer conforme país e análise de risco do PayPal.",
	},
	success: {
		title: "Pagamento recebido",
		subtitle:
			"Sua assinatura está sendo ativada automaticamente. Avisaremos quando estiver ativa.",
		statusPending: "Status atual",
		dashboardCta: "Voltar ao início",
	},
	cancel: {
		title: "Pagamento cancelado",
		subtitle: "Nenhuma cobrança foi feita. Você pode tentar novamente a qualquer momento.",
		retryCta: "Voltar ao checkout",
	},
	footer: "Automatizações com n8n. Todos os direitos reservados.",
};
