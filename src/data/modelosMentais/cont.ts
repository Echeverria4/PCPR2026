import type { ModeloMental } from "../../lib/types";

export const MODELOS_MENTAIS_CONT: ModeloMental[] = [
  {
    topico: "Fundamentos e patrimônio (Ativo = Passivo + PL)",
    origem: "oficial",
    gancho: "A equação contábil fundamental nunca desequilibra",
    modelo:
      "Ativo (bens e direitos) sempre é igual a Passivo (obrigações) mais Patrimônio Líquido (o que sobra para os donos). Toda transação contábil mexe em pelo menos duas contas para manter essa equação sempre em equilíbrio — é o princípio das partidas dobradas.",
  },
  {
    topico: "Operações e regime de competência x caixa",
    origem: "oficial",
    gancho: "Competência registra quando acontece; caixa registra quando o dinheiro muda de mão",
    modelo:
      "O regime de competência reconhece receitas e despesas no momento em que ocorrem, independente do pagamento — uma venda a prazo já vira receita na hora da venda. O regime de caixa só registra quando o dinheiro efetivamente entra ou sai. A contabilidade oficial usa competência como regra geral.",
  },
  {
    topico: "Demonstrações contábeis e análise de índices",
    origem: "oficial",
    gancho: "As demonstrações são a foto e o filme da empresa",
    modelo:
      "O balanço patrimonial é a foto de um momento — posição de ativos e passivos; a DRE é o filme de um período — o resultado, lucro ou prejuízo. Índices de liquidez, endividamento e rentabilidade transformam esses números em comparação: sozinho um número não diz muito, o índice contextualiza.",
  },
  {
    topico: "Custos e ponto de equilíbrio",
    origem: "oficial",
    gancho: "Ponto de equilíbrio é onde a empresa para de perder e ainda não começou a ganhar",
    modelo:
      "Custos fixos não mudam com a produção, como aluguel; custos variáveis mudam junto, como matéria-prima. O ponto de equilíbrio é a quantidade vendida em que a receita total cobre exatamente os custos totais — antes disso é prejuízo, depois é lucro.",
  },
  {
    topico: "Fraudes e ocultação patrimonial (lavagem de dinheiro)",
    origem: "oficial",
    gancho: "Lavagem de dinheiro tem três fases: colocação, ocultação, integração",
    modelo:
      "Colocação introduz o dinheiro ilícito no sistema financeiro; ocultação movimenta e disfarça a origem através de transações complexas; integração devolve o dinheiro \"limpo\" à economia formal, parecendo lícito — essas três fases clássicas conectam contabilidade com investigação criminal.",
  },
  {
    topico: "Estrutura do balanço patrimonial (Ativo Circulante/Não Circulante, Passivo, PL)",
    origem: "aposta",
    gancho: "Circulante é o que vira dinheiro rápido; não circulante é de longo prazo",
    modelo:
      "Ativo Circulante são bens e direitos realizáveis em até 1 ano, como caixa e estoque; Ativo Não Circulante é de prazo mais longo, como imobilizado e investimentos. Do lado do Passivo a mesma lógica de curto/longo prazo se aplica às obrigações, com o PL fechando a equação.",
  },
  {
    topico: "Indícios contábeis de lavagem de dinheiro em perícia contábil",
    origem: "aposta",
    gancho: "A perícia contábil procura o que não bate na história financeira da pessoa",
    modelo:
      "Sinais clássicos incluem patrimônio incompatível com a renda declarada, movimentação financeira sem lastro econômico aparente, empresas de fachada e transações fracionadas para evitar limites de reporte — a perícia cruza documentos para encontrar essas inconsistências.",
  },
];
