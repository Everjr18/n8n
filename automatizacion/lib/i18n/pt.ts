import type { LandingDictionary } from "./types";

export const pt: LandingDictionary = {
	hero: {
		title: "Reduzimos faltas e lotamos sua agenda com automacao no WhatsApp",
		subtitle:
			"Implementamos fluxos em n8n para responder rapido, confirmar consultas e fazer acompanhamento automatico.",
		bullets: [
			"Resposta imediata para novos pacientes",
			"Confirmacao + lembretes de consulta (menos faltas)",
			"Follow-up pos-consulta e reativacao",
		],
		primaryCta: "Falar no WhatsApp",
		secondaryCta: "Ver casos/Resultados",
	},
	proof: {
		title: "Resultados que voce pode validar",
		cases: [
			{
				title: "Caso 1: Clinica odontologica",
				before: "Antes: [Placeholder] faltas por semana e respostas lentas.",
				after:
					"Depois: lembretes automaticos em 24h e 2h + primeira resposta em minutos.",
				result: "Resultado: [Placeholder] menos faltas e agenda mais estavel.",
			},
			{
				title: "Caso 2: Clinica de estetica",
				before: "Antes: leads sem acompanhamento apos o primeiro contato.",
				after:
					"Depois: fluxo de qualificacao no WhatsApp e reativacao automatica.",
				result: "Resultado: [Placeholder] mais consultas recuperadas por mes.",
			},
			{
				title: "Caso 3: Consultorio especializado",
				before: "Antes: confirmacoes manuais consumindo horas da equipe.",
				after: "Depois: confirmacao automatica + atualizacao de status no Sheets.",
				result: "Resultado: [Placeholder] horas administrativas economizadas.",
			},
		],
		placeholderNote:
			"Nota: placeholders devem ser trocados por seus numeros reais. Nao inventamos dados.",
		integrationsTitle: "Compativel com",
		integrations: ["WhatsApp", "Google Sheets", "Gmail", "Google Calendar"],
	},
	automations: {
		title: "O que automatizamos em consultorios (MVP)",
		privacyNote:
			"Trabalhamos apenas com dados operacionais (nome, contato, status da consulta). Nao armazenamos dados clinicos sensiveis.",
		items: [
			{
				title: "Captura de lead",
				description: "Registro no Sheets/CRM simples + status do lead.",
				example: "Exemplo: novo lead entra com status \"a contatar\".",
			},
			{
				title: "Auto-reply + qualificacao",
				description: "Resposta automatica no WhatsApp com perguntas de filtro.",
				example: "Exemplo: especialidade, horario preferido e cidade.",
			},
			{
				title: "Confirmacao + lembretes",
				description: "Mensagens automaticas 24h e 2h antes da consulta.",
				example: "Exemplo: confirmou consulta e atualizou status na agenda.",
			},
			{
				title: "Pos-consulta e reativacao",
				description: "Follow-up para avaliacao e retorno em X semanas.",
				example: "Exemplo: mensagem automatica para retorno de controle.",
			},
			{
				title: "Link de pagamento antecipado",
				description: "Envio de link + confirmacao operacional automatica.",
				example:
					"Exemplo: ao detectar pagamento, consulta fica como confirmada.",
			},
		],
	},
	packages: {
		title: "Pacotes",
		subtitle: "Escolha o alcance e ative via WhatsApp. Sem checkout nesta etapa.",
		recommendedLabel: "Recomendado",
		items: [
			{
				tier: "starter",
				name: "Starter (1-2 fluxos)",
				forWho: "Para quem e: consultorio iniciando automacao.",
				scope: [
					"Resposta automatica inicial",
					"Confirmacao de consultas",
					"Ajustes basicos de mensagens",
				],
				whatsappMessage:
					"Hola, tengo un consultorio y quiero automatizar respuesta + confirmacion de citas. Me interesa Starter...",
			},
			{
				tier: "pro",
				name: "Pro (3 fluxos)",
				forWho: "Para quem e: equipes com agenda ativa e faltas recorrentes.",
				scope: [
					"Captura + qualificacao de leads",
					"Confirmacao + lembretes",
					"Follow-up pos-consulta",
				],
				whatsappMessage:
					"Hola, quiero reducir ausencias con confirmacion + recordatorios + seguimiento. Me interesa Pro...",
				recommended: true,
			},
			{
				tier: "full",
				name: "Full (5 fluxos)",
				forWho: "Para quem e: consultorios que querem fluxo completo.",
				scope: [
					"Lead -> consulta -> lembretes",
					"Pos-consulta e reativacao",
					"Confirmacao de antecipos",
				],
				whatsappMessage:
					"Hola, quiero el sistema completo (lead->cita->recordatorio->post-cita). Me interesa Full...",
			},
		],
	},
	process: {
		title: "Como funciona",
		steps: [
			{
				title: "1) Diagnostico por WhatsApp (10-15 min)",
				description: "Mapeamos o processo atual e prioridade.",
			},
			{
				title: "2) Implementacao + testes",
				description: "Construimos e validamos os fluxos em n8n com sua equipe.",
			},
			{
				title: "3) Entrega + suporte / ajustes",
				description: "Ativamos e refinamos com base nos primeiros resultados.",
			},
		],
	},
	faq: {
		title: "Perguntas frequentes",
		items: [
			{
				question: "O que preciso para comecar?",
				answer:
					"Acesso ao WhatsApp operacional, agenda/calendario e uma conversa curta de diagnostico.",
			},
			{
				question: "Quanto tempo leva?",
				answer: "Depende do escopo, mas o primeiro fluxo sai em poucos dias.",
			},
			{
				question: "Funciona com meu sistema atual?",
				answer: "Normalmente sim. Validamos as integracoes antes da implementacao.",
			},
			{
				question: "Inclui suporte?",
				answer: "Sim, inclui suporte e ajustes conforme o pacote.",
			},
			{
				question: "E se eu quiser mais fluxos depois?",
				answer: "Escalamos por fases sem refazer o que ja esta pronto.",
			},
			{
				question: "Quais dados voces guardam?",
				answer:
					"Apenas dados operacionais de contato e consulta. Nao guardamos dados clinicos sensiveis.",
			},
		],
	},
	finalCta: {
		title: "Se voce quer menos faltas e mais agenda confirmada, fale com a gente",
		description:
			"Definimos seu fluxo MVP de maior impacto em uma conversa curta no WhatsApp.",
		primaryCta: "Falar no WhatsApp",
	},
	footer: "Automacoes para consultorios privados com n8n.",
};
