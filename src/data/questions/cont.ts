import type { Question } from "../../lib/types";

export const QUESTOES_CONT: Question[] = [
  {
    id: "cont-001",
    materia: "cont",
    topico: "Conceitos básicos",
    enunciado:
      "Em contabilidade, o conjunto de bens, direitos e obrigações de uma entidade, em determinado momento, denomina-se:",
    alternativas: ["Receita", "Despesa", "Patrimônio", "Fluxo de caixa", "Resultado do exercício"],
    correta: 2,
    explicacao:
      "Patrimônio é o conjunto de bens, direitos e obrigações pertencentes a uma entidade em dado momento. A diferença entre bens/direitos (ativo) e obrigações (passivo) resulta no patrimônio líquido.",
    origem: "banco",
  },
  {
    id: "cont-002",
    materia: "cont",
    topico: "Orçamento público",
    enunciado:
      "No orçamento público brasileiro, a lei que estabelece as metas e prioridades da administração pública, orientando a elaboração da Lei Orçamentária Anual (LOA), é a:",
    alternativas: [
      "Lei de Responsabilidade Fiscal (LRF)",
      "Lei de Diretrizes Orçamentárias (LDO)",
      "Lei do Plano Plurianual (PPA)",
      "Lei Complementar nº 101/2000",
      "Lei Orçamentária Anual (LOA)",
    ],
    correta: 1,
    explicacao:
      "A LDO (Lei de Diretrizes Orçamentárias) estabelece metas e prioridades da administração para o exercício seguinte, orientando a elaboração da LOA. O PPA define objetivos de médio prazo (4 anos); a LOA estima receitas e fixa despesas para o exercício; a LRF (LC 101/2000) estabelece normas de gestão fiscal responsável.",
    origem: "banco",
  },
  {
    id: "cont-003",
    materia: "cont",
    topico: "Princípios de contabilidade",
    enunciado:
      "O princípio contábil segundo o qual as receitas e despesas devem ser reconhecidas no período em que ocorrem, independentemente do efetivo recebimento ou pagamento, é o princípio da:",
    alternativas: [
      "Prudência",
      "Competência",
      "Entidade",
      "Continuidade",
      "Oportunidade",
    ],
    correta: 1,
    explicacao:
      "O princípio da competência determina que receitas e despesas sejam reconhecidas no período em que ocorrem (fato gerador), independentemente de quando o dinheiro efetivamente entra ou sai do caixa (regime de caixa).",
    origem: "banco",
  },
  {
    id: "cont-004",
    materia: "cont",
    topico: "Patrimônio público",
    enunciado:
      "Na contabilidade pública, os bens de uso comum do povo (como praças, ruas e rodovias) são classificados, no âmbito patrimonial, como bens:",
    alternativas: ["De uso especial", "Dominicais", "De uso comum do povo", "Particulares", "Semoventes"],
    correta: 2,
    explicacao:
      "Os bens públicos de uso comum do povo (ruas, praças, estradas, mares, rios) são aqueles destinados ao uso indiscriminado pela coletividade. Diferem dos bens de uso especial (afetados a um serviço público específico, como prédios de repartições) e dos bens dominicais (patrimônio disponível do Estado, sem destinação específica).",
    origem: "banco",
  },
  {
    id: "cont-005",
    materia: "cont",
    topico: "Prestação de contas",
    enunciado:
      "O órgão responsável, em regra, pela fiscalização contábil, financeira e orçamentária da administração pública estadual, auxiliando o Poder Legislativo, é:",
    alternativas: [
      "O Ministério Público Estadual",
      "O Tribunal de Contas do Estado",
      "A Receita Federal",
      "O Banco Central",
      "A Controladoria-Geral da União",
    ],
    correta: 1,
    explicacao:
      "O Tribunal de Contas do Estado exerce o controle externo da administração pública estadual, auxiliando a Assembleia Legislativa na fiscalização contábil, financeira, orçamentária, operacional e patrimonial.",
    origem: "banco",
  },
  {
    id: "cont-006",
    materia: "cont",
    topico: "Conceitos básicos",
    enunciado:
      "Um aumento no valor do patrimônio líquido de uma entidade, decorrente de suas atividades normais (como a venda de um serviço), independentemente de seu reflexo no caixa, denomina-se, em contabilidade:",
    alternativas: ["Despesa", "Passivo", "Receita", "Ativo circulante", "Exigível"],
    correta: 2,
    explicacao:
      "Receita é o aumento do patrimônio líquido decorrente das atividades da entidade. Despesa, ao contrário, representa uma diminuição do patrimônio líquido decorrente do consumo de recursos.",
    origem: "banco",
  },
  {
    id: "cont-007",
    materia: "cont",
    topico: "Fundamentos e patrimônio",
    enunciado: "A equação fundamental da contabilidade estabelece que o Ativo de uma entidade é sempre igual a:",
    alternativas: [
      "Receita menos Despesa",
      "Passivo mais Patrimônio Líquido",
      "Patrimônio Líquido menos Passivo",
      "Receita mais Despesa",
      "Passivo Circulante apenas",
    ],
    correta: 1,
    explicacao:
      "A equação contábil fundamental é Ativo = Passivo + Patrimônio Líquido (A = P + PL). O Ativo representa os bens e direitos da entidade; o Passivo, suas obrigações com terceiros; e o Patrimônio Líquido, a diferença entre ambos — os recursos próprios da entidade (PL = A − P).",
    origem: "banco",
  },
  {
    id: "cont-008",
    materia: "cont",
    topico: "Regime de competência x caixa",
    enunciado:
      "Uma empresa prestou um serviço em dezembro/2025, mas só recebeu o pagamento em janeiro/2026. Pelo regime de competência, a receita deve ser reconhecida em:",
    alternativas: [
      "Janeiro/2026, quando o dinheiro efetivamente ingressou no caixa.",
      "Dezembro/2025, quando o serviço foi efetivamente prestado (fato gerador), independentemente do recebimento.",
      "Em ambos os meses, proporcionalmente.",
      "Na data da emissão da nota fiscal, ainda que anterior à prestação do serviço.",
      "Não deve ser reconhecida, pois não houve entrada de caixa no período.",
    ],
    correta: 1,
    explicacao:
      "Pelo regime de competência (obrigatório na contabilidade societária/pública), a receita é reconhecida no período em que o fato gerador ocorre — a prestação do serviço, em dezembro — independentemente de quando o pagamento é recebido. Pelo regime de caixa, o reconhecimento só ocorreria em janeiro, quando o dinheiro efetivamente entra.",
    origem: "banco",
  },
  {
    id: "cont-009",
    materia: "cont",
    topico: "Demonstrações contábeis",
    enunciado:
      "A demonstração contábil que evidencia, em determinada data, a posição patrimonial e financeira da entidade, apresentando o Ativo de um lado e o Passivo mais o Patrimônio Líquido de outro, é:",
    alternativas: [
      "Demonstração do Resultado do Exercício (DRE)",
      "Balanço Patrimonial (BP)",
      "Demonstração de Fluxo de Caixa (DFC)",
      "Demonstração das Mutações do Patrimônio Líquido (DMPL)",
      "Demonstração do Valor Adicionado (DVA)",
    ],
    correta: 1,
    explicacao:
      "O Balanço Patrimonial retrata a posição patrimonial e financeira da entidade em determinada data (uma \"fotografia\"), estruturado em Ativo de um lado e Passivo + PL de outro. A DRE apura o resultado do período; a DFC evidencia as movimentações de caixa; a DMPL detalha as variações do PL; a DVA mostra a riqueza gerada e sua distribuição.",
    origem: "banco",
  },
  {
    id: "cont-010",
    materia: "cont",
    topico: "Análise de índices",
    enunciado:
      "O índice de liquidez corrente, um dos principais indicadores extraídos do Balanço Patrimonial para avaliar a capacidade de pagamento de curto prazo de uma entidade, é calculado por:",
    alternativas: [
      "Ativo Total dividido pelo Passivo Total",
      "Ativo Circulante dividido pelo Passivo Circulante",
      "Patrimônio Líquido dividido pelo Ativo Total",
      "Receita Líquida dividida pelo Ativo Circulante",
      "Passivo Circulante dividido pelo Ativo Circulante",
    ],
    correta: 1,
    explicacao:
      "O índice de liquidez corrente = Ativo Circulante / Passivo Circulante, indicando quanto a entidade possui de bens e direitos de curto prazo para cada unidade monetária de obrigação de curto prazo. Um índice maior que 1 sugere, em princípio, capacidade de honrar compromissos de curto prazo.",
    origem: "banco",
  },
  {
    id: "cont-011",
    materia: "cont",
    topico: "Custos e ponto de equilíbrio",
    enunciado:
      "Em contabilidade de custos, um custo que permanece constante independentemente do volume de produção, dentro de certos limites de capacidade (como o aluguel de uma fábrica), é classificado como custo:",
    alternativas: ["Variável", "Direto", "Fixo", "Indireto", "Marginal"],
    correta: 2,
    explicacao:
      "Custos fixos não variam com o volume de produção dentro de uma faixa de capacidade (aluguel, depreciação, salários administrativos fixos), diferentemente dos custos variáveis, que oscilam proporcionalmente à produção (matéria-prima, comissões). A classificação em direto/indireto refere-se à facilidade de identificação do custo com o produto — um critério distinto de fixo/variável.",
    origem: "banco",
  },
  {
    id: "cont-012",
    materia: "cont",
    topico: "Custos e ponto de equilíbrio",
    enunciado: "O ponto de equilíbrio (break-even point) contábil de uma empresa representa o volume de vendas em que:",
    alternativas: [
      "O lucro é máximo.",
      "A receita total se iguala aos custos e despesas totais, resultando em lucro igual a zero.",
      "Os custos fixos se tornam iguais a zero.",
      "A empresa maximiza sua margem de contribuição unitária.",
      "O prejuízo é máximo.",
    ],
    correta: 1,
    explicacao:
      "No ponto de equilíbrio, a receita total gerada pelas vendas se iguala exatamente à soma dos custos e despesas totais (fixos + variáveis), de modo que o resultado é zero — abaixo desse ponto a empresa opera com prejuízo, e acima, com lucro.",
    origem: "banco",
  },
  {
    id: "cont-013",
    materia: "cont",
    topico: "Fraudes e lavagem de dinheiro",
    enunciado:
      "O processo de lavagem de dinheiro, criminalizado pela Lei nº 9.613/1998, é tradicionalmente descrito em três fases. A fase em que os recursos de origem ilícita são introduzidos no sistema financeiro formal, geralmente fracionados em pequenos valores para dificultar a detecção, denomina-se:",
    alternativas: ["Integração", "Ocultação (dissimulação)", "Colocação (placement)", "Convalidação", "Reciclagem"],
    correta: 2,
    explicacao:
      "A fase de colocação (placement) é a introdução dos valores ilícitos no sistema financeiro formal, muitas vezes fracionados (o chamado \"smurfing\") para não atingir limites que disparariam comunicações obrigatórias ao COAF. Em seguida vem a ocultação/dissimulação (transações para dificultar o rastreamento) e, por fim, a integração (os recursos retornam à economia formal com aparência lícita).",
    origem: "banco",
  },
  {
    id: "cont-014",
    materia: "cont",
    topico: "Fraudes e lavagem de dinheiro",
    enunciado:
      "A prática conhecida como \"caixa dois\", frequentemente associada a esquemas de corrupção e sonegação fiscal, consiste em:",
    alternativas: [
      "Manter um segundo caixa físico apenas para troco de clientes, prática lícita e regulamentada.",
      "Manter registros contábeis paralelos e não oficiais de receitas e despesas, ocultando movimentações financeiras do fisco e dos órgãos de controle.",
      "Um método legal de conciliação bancária entre duas contas correntes da mesma empresa.",
      "A reserva de capital constituída conforme a Lei das Sociedades Anônimas.",
      "Um tipo de demonstração contábil exigida pela Receita Federal.",
    ],
    correta: 1,
    explicacao:
      "O \"caixa dois\" consiste na manutenção de contabilidade paralela e não declarada, ocultando receitas, despesas ou movimentações financeiras reais — usado tanto para sonegação fiscal quanto para financiar propinas ou caixa de campanha ilegal, dificultando a fiscalização e a rastreabilidade dos recursos.",
    origem: "banco",
  },
];
