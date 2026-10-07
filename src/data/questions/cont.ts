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
  {
    id: "cont-015",
    materia: "cont",
    topico: "Estrutura do balanço patrimonial (Ativo Circulante/Não Circulante, Passivo, PL)",
    enunciado:
      "No balanço patrimonial, os bens e direitos realizáveis em até 12 meses, como caixa, estoques e contas a receber, são classificados como:",
    alternativas: [
      "Ativo Não Circulante.",
      "Ativo Circulante.",
      "Passivo Circulante.",
      "Patrimônio Líquido.",
      "Passivo Não Circulante.",
    ],
    correta: 1,
    explicacao:
      "O Ativo Circulante reúne os bens e direitos realizáveis em até 12 meses, como caixa, estoques e contas a receber — distinto do Ativo Não Circulante (realizável a longo prazo, investimentos, imobilizado e intangível), que abrange itens de realização superior a um ano.",
    origem: "banco",
  },
  {
    id: "cont-016",
    materia: "cont",
    topico: "Estrutura do balanço patrimonial (Ativo Circulante/Não Circulante, Passivo, PL)",
    enunciado:
      "No balanço patrimonial, o Patrimônio Líquido representa:",
    alternativas: [
      "O total de obrigações de curto prazo da entidade.",
      "A diferença entre ativos e passivos — o que sobra para os sócios.",
      "O total de bens e direitos realizáveis em até 12 meses.",
      "A soma de todas as contas a receber de clientes.",
      "O total de obrigações de longo prazo da entidade.",
    ],
    correta: 1,
    explicacao:
      "O Patrimônio Líquido representa a diferença entre ativos e passivos — o que sobra para os sócios após o cumprimento de todas as obrigações da entidade. O balanço patrimonial deve sempre se equilibrar: Ativo = Passivo + Patrimônio Líquido.",
    origem: "banco",
  },
  {
    id: "cont-017",
    materia: "cont",
    topico: "Indícios contábeis de lavagem de dinheiro em perícia contábil",
    enunciado:
      "O fracionamento de depósitos bancários realizado com o objetivo de evitar a comunicação obrigatória de operações suspeitas a órgãos de controle, como o COAF, é fenômeno conhecido tecnicamente como:",
    alternativas: [
      "Smurfing.",
      "Hedge.",
      "Leasing.",
      "Factoring.",
      "Compliance.",
    ],
    correta: 0,
    explicacao:
      "\"Smurfing\" é o fracionamento de depósitos em valores menores, realizado justamente para evitar a comunicação obrigatória de operações suspeitas a órgãos de controle como o COAF (atual UIF) — indício clássico investigado em perícia contábil voltada à lavagem de dinheiro. Hedge, leasing, factoring e compliance são institutos financeiros/administrativos lícitos, sem relação direta com esse tipo de fraude.",
    origem: "banco",
  },
  {
    id: "cont-018",
    materia: "cont",
    topico: "Indícios contábeis de lavagem de dinheiro em perícia contábil",
    enunciado:
      "São indícios contábeis clássicos investigados em perícia voltada à identificação de lavagem de dinheiro:",
    alternativas: [
      "Movimentação financeira compatível com a renda declarada e ausência de empresas de fachada.",
      "Uso de empresas de fachada, incompatibilidade patrimonial e transações com paraísos fiscais sem justificativa econômica aparente.",
      "Pagamento pontual de tributos e regularidade cadastral perante a Receita Federal.",
      "Emissão regular de notas fiscais compatíveis com o volume de vendas declarado.",
      "Manutenção de reservas de capital em conformidade com a Lei das Sociedades Anônimas.",
    ],
    correta: 1,
    explicacao:
      "Indícios clássicos de lavagem de dinheiro incluem movimentação financeira incompatível com a atividade econômica declarada, uso de empresas de fachada (sem estrutura operacional real, mas com faturamento elevado), fracionamento de depósitos (smurfing), superfaturamento/subfaturamento e transações com paraísos fiscais sem justificativa econômica — as demais alternativas descrevem, ao contrário, sinais de regularidade contábil.",
    origem: "banco",
  },

  {
    id: "cont-019",
    materia: "cont",
    topico: "Regime de competência — despesas antecipadas",
    enunciado:
      "Em dezembro/2025, uma empresa paga adiantado o valor integral do aluguel referente aos 12 meses de 2026. Pelo regime de competência, esse pagamento deve ser registrado, em dezembro/2025, como:",
    alternativas: [
      "despesa antecipada (um ativo), apropriada ao resultado gradualmente, mês a mês, ao longo de 2026.",
      "despesa integral do exercício de 2025, já que o desembolso financeiro ocorreu nesse exercício.",
      "receita diferida de 2025, a ser reconhecida no resultado ao longo do ano de 2026.",
      "passivo circulante, por representar uma obrigação futura da empresa com o locador do imóvel.",
      "perda do exercício de 2025, por se tratar de gasto sem contrapartida imediata no resultado.",
    ],
    correta: 0,
    explicacao:
      "Pelo regime de competência, a despesa é reconhecida no período a que se refere, não no do pagamento. Como o aluguel pago em 2025 cobre os 12 meses de 2026, o valor configura despesa antecipada — um ativo —, apropriada ao resultado mês a mês conforme o benefício é consumido em 2026, e não de uma só vez no exercício do desembolso.",
    origem: "banco",
  },
  {
    id: "cont-020",
    materia: "cont",
    topico: "Materialidade",
    enunciado:
      "No processo de elaboração e auditoria das demonstrações contábeis, o conceito de materialidade refere-se a:",
    alternativas: [
      "magnitude de uma omissão ou distorção que, isolada ou em conjunto, pode influenciar as decisões econômicas dos usuários da informação.",
      "percentual fixo, definido em lei, abaixo do qual nenhuma distorção contábil pode ser considerada relevante para o usuário.",
      "obrigatoriedade legal de auditoria externa independente para toda e qualquer sociedade, sem exceção quanto ao porte.",
      "proibição de registrar qualquer ativo por valor contábil superior ao seu valor de mercado na data do balanço.",
      "exigência normativa de que as demonstrações contábeis sejam elaboradas e arquivadas exclusivamente em meio físico impresso.",
    ],
    correta: 0,
    explicacao:
      "Materialidade (relevância) é um conceito qualitativo e contextual: uma distorção é material quando sua magnitude, isolada ou combinada a outras, pode influenciar as decisões econômicas dos usuários — não há percentual ou valor fixo definido em lei, pois o julgamento depende da natureza do item e do contexto. Além disso, uma distorção intencional deve ser corrigida independentemente de seu valor monetário, já que a intenção, por si só, já a torna relevante.",
    origem: "banco",
  },
  {
    id: "cont-021",
    materia: "cont",
    topico: "Demonstração do Resultado do Exercício (DRE)",
    enunciado:
      "Na Demonstração do Resultado do Exercício (DRE), a primeira linha, destinada a apurar a receita bruta de vendas, deve registrar:",
    alternativas: [
      "exclusivamente as receitas decorrentes das atividades operacionais da entidade, excluindo as receitas financeiras.",
      "a soma das receitas operacionais e financeiras, pois ambas compõem o faturamento total da entidade no período.",
      "apenas as receitas financeiras obtidas no período, como juros e rendimentos de aplicações.",
      "o resultado líquido do exercício, já apurado após todas as deduções e tributos incidentes.",
      "as receitas de exercícios anteriores, corrigidas pela inflação acumulada do período corrente.",
    ],
    correta: 0,
    explicacao:
      "A DRE começa pela receita bruta das atividades operacionais — venda de mercadorias, produtos ou serviços —, que, deduzida de impostos e devoluções, gera a receita líquida. Receitas financeiras (juros, rendimentos de aplicações) têm natureza não operacional e aparecem em linha própria, mais adiante na demonstração, sem compor a receita bruta inicial.",
    origem: "banco",
  },
  {
    id: "cont-022",
    materia: "cont",
    topico: "Mensuração de estoques",
    enunciado:
      "Conforme o CPC 16, os estoques devem ser mensurados, no balanço patrimonial, pelo:",
    alternativas: [
      "menor valor entre o custo de aquisição ou produção e o valor realizável líquido.",
      "valor de custo histórico de aquisição, sempre, independentemente de seu valor de mercado atual.",
      "valor de mercado corrente, sempre, mesmo quando superior ao custo original de aquisição.",
      "maior valor entre o custo de aquisição ou produção e o valor realizável líquido na data do balanço.",
      "valor de reposição dos itens, estimado pela administração ao encerramento de cada exercício social.",
    ],
    correta: 0,
    explicacao:
      "O CPC 16 determina que os estoques sejam mensurados pelo menor valor entre o custo de aquisição/produção e o valor realizável líquido — o preço de venda estimado, deduzido dos custos estimados para concluir a produção e das despesas necessárias para efetuar a venda, como frete e comissões. Essa regra evita que o estoque permaneça registrado por valor superior ao que efetivamente se espera recuperar com sua venda.",
    origem: "banco",
  },
  {
    id: "cont-023",
    materia: "cont",
    topico: "Valor justo (CPC 46)",
    enunciado:
      "O CPC 46, que trata da mensuração do valor justo, estabelece critérios aplicáveis a:",
    alternativas: [
      "ativos e passivos cuja mensuração a valor justo seja exigida ou permitida por outro pronunciamento contábil.",
      "receitas e despesas, exclusivamente, para fins de apuração do resultado contábil do exercício.",
      "patrimônio líquido, apenas, para fins de cálculo da distribuição de dividendos aos sócios.",
      "estoques, exclusivamente, substituindo integralmente as regras de mensuração do CPC 16.",
      "operações com partes relacionadas, apenas, para fins de evidenciação em notas explicativas.",
    ],
    correta: 0,
    explicacao:
      "O CPC 46 define valor justo e estabelece como mensurá-lo e divulgá-lo, mas não determina, por si só, quando um item deve ser mensurado a valor justo — isso depende de outro pronunciamento específico. Sua aplicação se restringe a ativos e passivos; não se aplica à mensuração direta de receitas e despesas, que seguem suas próprias regras de reconhecimento.",
    origem: "banco",
  },
  {
    id: "cont-024",
    materia: "cont",
    topico: "Ativo imobilizado — custo e depreciação",
    enunciado:
      "Para fins de composição do custo de um bem do ativo imobilizado que, ao final de sua vida útil, permanecerá instalado no local, sendo vendido já instalado e sem desmontagem, a estimativa de custo de desmontagem e remoção do bem:",
    alternativas: [
      "não deve ser incluída no custo do ativo, pois a obrigação de desmontagem não se concretizará nesse cenário.",
      "deve ser incluída integralmente no custo do ativo, independentemente do destino futuro dado ao bem.",
      "deve ser reconhecida como receita diferida, a ser apropriada ao longo da vida útil do bem.",
      "deve ser excluída do custo do bem, mas incluída na depreciação acumulada desde a sua aquisição.",
      "deve ser registrada em conta de ativo intangível, separadamente do ativo imobilizado correspondente.",
    ],
    correta: 0,
    explicacao:
      "O custo do imobilizado pode incluir a estimativa dos custos de desmontagem, remoção do ativo e restauração do local, quando a entidade tiver essa obrigação. Se o bem permanecerá instalado — por ser vendido já instalado no local, sem necessidade de remoção —, essa obrigação não existe, e o custo estimado de desmontagem não deve compor o valor do ativo.",
    origem: "banco",
  },
  {
    id: "cont-025",
    materia: "cont",
    topico: "Provisões e passivos contingentes",
    enunciado:
      "Segundo o CPC 25, uma provisão corresponde a uma obrigação presente cuja saída de recursos é provável e estimável com confiabilidade. O passivo contingente, em contraste, é:",
    alternativas: [
      "obrigação possível, cuja existência só será confirmada por eventos futuros incertos, fora do controle da entidade.",
      "obrigação futura de valor e prazo sempre certos, o que dispensa qualquer estimativa contábil prévia.",
      "obrigação já definitivamente liquidada, pendente apenas do registro contábil formal no exercício.",
      "ativo contingente, classificado no mesmo grupo patrimonial dos ativos circulantes da entidade.",
      "reserva de lucros constituída especificamente para cobrir contingências futuras da entidade.",
    ],
    correta: 0,
    explicacao:
      "A provisão é um passivo de prazo ou valor incertos, mas corresponde a uma obrigação presente da entidade, de saída de recursos provável e estimável com confiabilidade — por isso é reconhecida no balanço. O passivo contingente é uma obrigação possível, cuja existência depende da confirmação de eventos futuros incertos não totalmente sob controle da entidade (ou uma obrigação presente cuja saída não é provável ou não é mensurável com confiabilidade) — por isso, em regra, é apenas divulgado em notas explicativas, sem reconhecimento contábil.",
    origem: "banco",
  },
  {
    id: "cont-026",
    materia: "cont",
    topico: "Passivo circulante x não circulante — direito de postergar",
    enunciado:
      "Para que uma obrigação financeira seja classificada como passivo não circulante, mesmo vencendo dentro dos próximos 12 meses, a entidade deve possuir, na data do balanço:",
    alternativas: [
      "direito substantivo de postergar a liquidação da obrigação por, no mínimo, 12 meses após a data do balanço.",
      "mera intenção, declarada pela administração, de renegociar a dívida com a instituição credora.",
      "plano informal de refinanciamento da dívida, ainda não formalizado junto ao credor original.",
      "autorização genérica da assembleia de sócios para que a entidade contraia novas dívidas futuras.",
      "previsão orçamentária de caixa suficiente para o pagamento, independentemente de acordo contratual formal.",
    ],
    correta: 0,
    explicacao:
      "A classificação como não circulante exige um direito substantivo — não apenas uma expectativa, intenção ou cláusula condicional não exercível — de postergar a liquidação da obrigação por, no mínimo, 12 meses a partir da data do balanço. Cláusulas condicionadas a eventos futuros incertos, sem um plano concreto e exercível, não bastam para afastar a classificação como passivo circulante.",
    origem: "banco",
  },
  {
    id: "cont-027",
    materia: "cont",
    topico: "Ativo não circulante mantido para venda",
    enunciado:
      "Para que um ativo não circulante seja classificado como mantido para venda, é necessário que esteja disponível para venda imediata, nas condições atuais, e que:",
    alternativas: [
      "sua venda seja altamente provável, com plano ativo de venda em andamento e conclusão esperada em até um ano.",
      "sua venda só deva se concretizar em prazo superior a dois anos, por decisão estratégica da administração.",
      "o ativo já tenha sido oferecido a um único comprador específico, sem necessidade de divulgação pública da oferta.",
      "a entidade ainda esteja utilizando o ativo normalmente em suas operações, sem qualquer restrição de uso.",
      "o valor contábil do ativo seja inferior ao seu custo histórico original de aquisição.",
    ],
    correta: 0,
    explicacao:
      "Além de estar disponível para venda imediata nas condições atuais, a classificação como mantido para venda exige que a venda seja altamente provável — com plano ativo de venda em andamento, busca ativa de comprador e expectativa de conclusão em até um ano a partir da classificação. Uma venda prevista para prazo superior a um ano, em regra, afasta essa classificação, salvo hipóteses excepcionais previstas na norma.",
    origem: "banco",
  },
  {
    id: "cont-028",
    materia: "cont",
    topico: "Classificação de gastos — ativo x despesa",
    enunciado:
      "Uma empresa adquire, financiada em várias parcelas, uma máquina destinada ao uso em sua linha de produção por vários anos. Quanto à classificação contábil desse gasto, o fato de o pagamento ser a prazo, em vez de à vista:",
    alternativas: [
      "não altera a classificação: pelo benefício futuro a ser consumido em vários exercícios, o gasto é registrado no ativo imobilizado.",
      "determina o registro direto do gasto como despesa do exercício, por gerar uma dívida de longo prazo para a empresa.",
      "obriga o reconhecimento proporcional do valor como despesa financeira, mês a mês, conforme as parcelas pagas.",
      "transforma o gasto em passivo contingente da empresa, até a liquidação integral do financiamento contraído.",
      "impede o registro do bem no ativo imobilizado até a quitação completa da última parcela do financiamento.",
    ],
    correta: 0,
    explicacao:
      "A classificação de um gasto como ativo (investimento) ou despesa depende de seu potencial de gerar benefícios econômicos futuros a serem consumidos em mais de um exercício — não da forma como foi pago. A máquina financiada a prazo é registrada no ativo imobilizado pelo custo total desde a aquisição, com o financiamento lançado, em contrapartida, no passivo, e depreciada ao longo de sua vida útil: a forma de pagamento não interfere nessa classificação.",
    origem: "banco",
  },
  {
    id: "cont-029",
    materia: "cont",
    topico: "Métodos de custeio — custeio por absorção",
    enunciado:
      "No método de custeio por absorção, os custos apropriados aos produtos fabricados incluem:",
    alternativas: [
      "todos os custos de produção, fixos e variáveis, excluindo as despesas administrativas e comerciais.",
      "apenas os custos variáveis de produção da entidade, com exclusão total dos custos fixos incorridos.",
      "todos os gastos da empresa no período, incluindo despesas administrativas e comerciais, rateados pela produção.",
      "apenas a matéria-prima consumida e a mão de obra direta, excluindo os custos indiretos de fabricação.",
      "exclusivamente os custos indiretos de fabricação, rateados segundo algum critério de volume de produção.",
    ],
    correta: 0,
    explicacao:
      "O custeio por absorção apropria aos produtos todos os custos de produção — diretos e indiretos, fixos e variáveis —, sendo o método exigido pela legislação fiscal e pelas normas contábeis brasileiras para fins de demonstrações financeiras. Despesas administrativas e comerciais, por não serem custos de produção, não são apropriadas aos produtos: vão diretamente ao resultado do exercício em que ocorrem.",
    origem: "banco",
  },
  {
    id: "cont-030",
    materia: "cont",
    topico: "Custos diretos x indiretos",
    enunciado:
      "A classificação de um custo como direto, em contabilidade de custos, depende de:",
    alternativas: [
      "sua possibilidade de identificação objetiva em relação a um produto ou serviço específico, sem necessidade de rateio.",
      "seu comportamento frente ao volume produzido, isto é, se aumenta ou não junto com a produção da entidade.",
      "seu valor monetário total, sendo considerados diretos apenas os custos de maior relevância financeira.",
      "sua origem funcional, sendo diretos apenas os custos de mão de obra, e indiretos, todos os demais gastos.",
      "seu momento de pagamento, sendo considerados diretos exclusivamente os custos pagos à vista.",
    ],
    correta: 0,
    explicacao:
      "Custo direto é aquele que pode ser identificado ou mensurado objetivamente em relação a um produto, serviço ou centro de custo específico, sem necessidade de critérios de rateio (como a matéria-prima consumida por unidade). Custo indireto, ao contrário, não pode ser atribuído diretamente, exigindo rateio por algum critério (como horas-máquina ou área ocupada). Essa classificação é independente da de custo fixo/variável, que se refere ao comportamento do custo frente ao volume de produção.",
    origem: "banco",
  },
];
