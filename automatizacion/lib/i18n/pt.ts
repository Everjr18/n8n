export const pt = {
	hero: {
		title: "Automatize seu negócio com n8n",
		description:
			"Crie fluxos de trabalho para economizar tempo, reduzir erros e escalar suas operações.",
		contactButton: "Fale conosco no WhatsApp",
		contactSubtext: "Sem compromisso — diga o que precisa automatizar.",
		trustNote:
			"Confiado por empreendedores e pequenas empresas em toda a América Latina",
	},
	howItWorks: {
		title: "Como funciona?",
		steps: [
			"🧠 Conversamos sobre sua necessidade",
			"🔧 Criamos um fluxo automatizado",
			"🚀 Integramos e deixamos funcionando",
		],
	},
	services: {
		title: "O que posso automatizar para você?",
		list: [
			"Automação de tarefas repetitivas",
			"Envio automático de e-mails e alertas",
			"Integração com WhatsApp e Telegram",
			"Atualizações de Google Sheets ou banco de dados",
			"Fluxos lógicos personalizados",
		],
	},
	plans: {
		title: "Planos de Automação",
		options: [
			{
				title: "🔹 Plano Básico",
				desc: "1 fluxo simples (Google Sheets, e-mail)",
			},
			{ title: "🔸 Plano Pro", desc: "Até 5 automações com banco de dados" },
			{
				title: "🔧 Plano Personalizado",
				desc: "Desenho e integração conforme sua necessidade",
			},
		],
	},
	cases: {
		title: "Casos reais de automação",
		cases: [
			{
				id: "ecommerce",
				title: "🛒 E-commerce",
				short:
					"Uma loja automatizou os pedidos e economiza 15 horas por semana.",
				full: `Esse fluxo é acionado a cada nova compra.
Consulta o banco de dados, atualiza o Google Sheets e envia um e-mail ao cliente.
Reduz o trabalho manual e evita erros.`,
				image: "agregar-compra-flow.jpg",
			},
			{
				id: "rag",
				title: "🧠 Vinculação com IA (RAG)",
				short: "Projeto educacional vincula perguntas com posts usando IA.",
				full: `Esse fluxo gera embeddings e os relaciona com posts do blog usando ChromaDB.
Melhora a relevância nas buscas dos usuários.`,
				image: "rag.png",
			},
			{
				id: "desactivar",
				title: "⏳ Desativação automática",
				short: "O sistema desativa usuários ao final do plano.",
				full: `Consulta Google Sheets e o banco de dados. Se o plano expirou, desativa o usuário e envia um e-mail.
Ideal para automação de assinaturas.`,
				image: "desactivar.png",
			},
		],
	},
	trust: {
		title: "Por que confiar em nós?",
		list: [
			"🔒 Privacidade garantida: seus dados estão seguros",
			"🧑‍💻 100% sem código: apenas diga o que precisa",
			"🎯 Atendimento personalizado 1 a 1",
			"🚀 Sem risco: mostramos antes de entregar",
		],
	},
	footer: "Automatizações com n8n. Todos os direitos reservados.",
};
