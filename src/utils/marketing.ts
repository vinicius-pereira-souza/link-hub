import type { FaqItemData } from "@/components/marketing/faq-accordion";

export const questionGuiaPage: FaqItemData[] = [
  {
    question: "Como posso personalizar as cores?",
    answer:
      "No menu de personalização, você pode escolher cores primárias, secundárias e o estilo do fundo. Oferecemos paletas prontas ou você pode inserir seus próprios códigos hexadecimais.",
  },
  {
    question: "Existe um limite de links?",
    answer:
      "No plano gratuito, você pode adicionar até 15 links. Usuários Pro têm acesso a links ilimitados, botões animados e destaques especiais.",
  },
  {
    question: "Como funcionam as métricas?",
    answer:
      "Acompanhamos visualizações totais, cliques individuais por link e a localização geográfica dos seus visitantes em um painel intuitivo atualizado diariamente.",
  },
];

export const questionPricingPage: FaqItemData[] = [
  {
    question: "Posso alterar meu plano mais tarde?",
    answer:
      "Sim, você pode fazer upgrade ou downgrade a qualquer momento. As alterações são refletidas imediatamente no seu ciclo de faturamento.",
  },
  {
    question: "Existe um teste gratuito para o plano Pro?",
    answer:
      "Oferecemos um teste gratuito de 14 dias para o plano Professional. Não é necessário cartão de crédito para começar.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos os principais cartões de crédito, PayPal e Apple Pay por meio do nosso gateway de pagamento seguro.",
  },
  {
    question: "Posso usar um domínio personalizado?",
    answer:
      "Domínios personalizados estão disponíveis em nossos planos Professional e Agency. Oferecemos guias completos de configuração de DNS.",
  },
];

export const optionsPlansData = [
  {
    title: "free",
    price: 0,
    advantages: ["links ilimitados", "análise básica", "1 tema (Clássico)"],
  },
  {
    title: "pro",
    price: 12,
    advantages: [
      "Análise avançada",
      "Todos os temas (Moderno, Ousado, Suave)",
      "Domínio personalizado",
      "Remoção da marca",
      "Suporte prioritário",
    ],
  },
  {
    title: "premiun",
    price: 48,
    advantages: [
      "Tudo do plano Pro",
      "Até 5 perfis",
      "Colaboração em equipe",
      "Gerente de conta dedicado",
    ],
  },
];

export const compareFeaturesTableHead: string[] = [
  "Recurso",
  "Gratuito",
  "Profissional",
  "Agência",
];

export const compareFeaturesTableData = [
  {
    feature: "Links ilimitados",
    free: true,
    professional: true,
    agency: true,
  },
  {
    feature: "Análise de dados",
    free: "Básico",
    professional: "Avançado",
    agency: "Tempo real",
  },
  {
    feature: "Domínios personalizados",
    free: false,
    professional: true,
    agency: true,
  },
  {
    feature: "Remoção de marca",
    free: false,
    professional: true,
    agency: true,
  },
  {
    feature: "Suporte",
    free: "Central de Ajuda",
    professional: "E-mail prioritário",
    agency: "Agente dedicado",
  },
];
