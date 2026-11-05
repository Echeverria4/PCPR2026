import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-09",
  resumo: {
    ideia:
      "A Administração é fiscalizada por ela mesma, pelo Legislativo, com ajuda dos tribunais de contas, e pelo Judiciário. A aula mostra quem controla o quê e com quais limites.",
    itens: [
      {
        termo: "Controle administrativo",
        faz: "A própria Administração revê seus atos, de ofício ou por provocação. Olha legalidade e mérito.",
        pista: "É a autotutela da Súmula 473 do STF.",
      },
      {
        termo: "Meios de provocação",
        faz: "Representação, reclamação, pedido de reconsideração, recurso hierárquico e revisão.",
      },
      {
        termo: "Recurso hierárquico próprio",
        faz: "Vai à autoridade superior da mesma estrutura e não depende de lei expressa.",
      },
      {
        termo: "Recurso hierárquico impróprio",
        faz: "Vai a órgão fora da hierarquia e só existe com previsão legal.",
      },
      {
        termo: "Revisão",
        faz: "Reabre processo sancionador por fato novo ou circunstância relevante. Não pode agravar a sanção.",
      },
      {
        termo: "Controle parlamentar direto",
        faz: "Congresso julga as contas do Presidente, faz CPI e susta atos normativos que exorbitem.",
      },
      {
        termo: "Tribunal de contas",
        faz: "Dá parecer prévio nas contas do chefe do Executivo e julga as dos demais administradores.",
        pista: "Registra admissões e aposentadorias.",
      },
      {
        termo: "Sustação",
        faz: "O tribunal de contas susta ato. Contrato é sustado pelo Congresso; passados 90 dias sem medida, o tribunal decide.",
      },
      {
        termo: "Controle judicial",
        faz: "Depende de provocação e olha a legalidade. Anula, mas não revoga atos de outro Poder.",
      },
      {
        termo: "Ações de controle",
        faz: "Mandado de segurança, ação popular, ação civil pública, habeas data e mandado de injunção.",
        pista: "Só o cidadão propõe ação popular (Súmula 365 do STF).",
      },
    ],
    cuidado: "A Súmula Vinculante 21 proíbe exigir depósito ou arrolamento prévios para recurso administrativo.",
  },
  questoes: [
    {
      topico: "Controle administrativo",
      subassunto: "Classificação",
      dificuldade: 4,
      raciocinio: "Mesma estrutura e sem provocação: interno e de ofício.",
      enunciado:
        "A corregedoria de um órgão federal descobre, sem provocação de ninguém, um ato ilegal de um setor do próprio órgão e o anula. Esse controle é",
      alternativas: [
        "externo, por vir de um órgão especializado",
        "judicial, por produzir efeito de coisa julgada",
        "legislativo, pois decorre da lei que rege o órgão",
        "externo e popular, pois protege o interesse de todos",
        "interno e de ofício, pois decorre da autotutela",
      ],
      correta: 4,
      explicacao: "A própria estrutura revê seus atos, sem precisar ser provocada. É a autotutela, com base nas Súmulas 346 e 473 do STF.",
      explicacaoErradas:
        "“órgão especializado” não torna externo o controle. “coisa julgada” não é efeito do ato administrativo. “legislativo” exige atuação do Parlamento. “popular” é o feito pelo cidadão.",
      pegadinha: "Achar que a corregedoria é controle externo por ser órgão à parte.",
      conhecimento: "O controle interno dos Poderes está no art. 74 da CF.",
    },
    {
      topico: "Controle administrativo",
      subassunto: "Recursos",
      dificuldade: 5,
      raciocinio: "Entre entidades não há hierarquia. Por isso o recurso é impróprio.",
      enunciado:
        "A lei de certa autarquia federal prevê recurso da decisão do seu presidente ao ministro supervisor. Esse recurso é",
      alternativas: [
        "hierárquico próprio, pois há subordinação entre eles",
        "pedido de reconsideração, por ir a autoridade superior",
        "hierárquico impróprio, e só existe por previsão legal",
        "revisão, pois exige fatos novos para ser admitido",
        "representação, pois o ministro só pode ser informado",
      ],
      correta: 2,
      explicacao: "A autarquia não é subordinada ao ministério, e sim vinculada. Por isso o recurso a órgão fora da hierarquia é impróprio e depende de lei.",
      explicacaoErradas:
        "“subordinação” não existe entre ministério e autarquia. “pedido de reconsideração” vai à mesma autoridade. “revisão” trata de processo sancionador já encerrado. “representação” é denúncia de irregularidade.",
      pegadinha: "Tratar a tutela como hierarquia.",
      conhecimento: "O recurso hierárquico próprio decorre da hierarquia e não precisa de lei expressa.",
    },
    {
      topico: "Controle administrativo",
      subassunto: "Lei 9.784/1999",
      dificuldade: 4,
      raciocinio: "O recurso passa primeiro por quem decidiu.",
      enunciado:
        "Um interessado recorre de decisão em processo administrativo federal regido pela Lei 9.784/1999. O recurso é dirigido",
      alternativas: [
        "à autoridade que decidiu, que pode reconsiderar em 5 dias",
        "direto à autoridade superior, que é quem julga o caso",
        "à autoridade que decidiu, que fica impedida de rever",
        "ao Tribunal de Contas, que analisa a legalidade do ato",
        "ao chefe do Executivo, última instância em qualquer caso",
      ],
      correta: 0,
      explicacao: "Pelo art. 56, § 1º, o recurso vai a quem decidiu. Se não reconsiderar em 5 dias, essa autoridade o encaminha à superior.",
      explicacaoErradas:
        "“direto à autoridade superior” pula a etapa da reconsideração. “impedida de rever” contraria a lei. “Tribunal de Contas” não é instância recursal. “chefe do Executivo” não é a regra: a lei fala em até três instâncias, salvo disposição diversa.",
      pegadinha: "Pensar que o recurso é entregue diretamente ao superior.",
      conhecimento: "Em regra, o recurso administrativo não tem efeito suspensivo (art. 61).",
    },
    {
      topico: "Controle administrativo",
      subassunto: "Depósito prévio",
      dificuldade: 4,
      raciocinio: "Direito de recorrer não se compra.",
      enunciado:
        "Um órgão federal só aceita recurso administrativo se o interessado depositar antes 30% do valor discutido. Essa exigência é",
      alternativas: [
        "válida, pois evita recursos feitos só para protelar",
        "válida, desde que o valor volte ao fim do processo",
        "válida, se o recorrente não for pessoa de baixa renda",
        "inválida só para multas, e válida para os demais débitos",
        "inválida, pois é vedado exigir depósito para recorrer",
      ],
      correta: 4,
      explicacao: "A Súmula Vinculante 21 declara inconstitucional exigir depósito ou arrolamento prévios de dinheiro ou bens para o recurso administrativo.",
      explicacaoErradas:
        "“evita recursos” e “volte ao fim” não salvam a exigência. “baixa renda” cria distinção que a súmula não traz. “só para multas” limita onde a súmula não limita.",
      pegadinha: "Aceitar o depósito por ser devolvido depois.",
      conhecimento: "A Súmula Vinculante 28 trata da mesma ideia para ação judicial sobre crédito tributário.",
    },
    {
      topico: "Controle legislativo",
      subassunto: "Contas",
      dificuldade: 5,
      raciocinio: "Chefe do Executivo: parecer. Demais gestores: julgamento.",
      enunciado:
        "Nas contas anuais do Presidente da República e nas de um gestor de autarquia federal, o TCU, respectivamente,",
      alternativas: [
        "julga as duas, com decisão que vincula o Congresso",
        "dá parecer nas duas, e o Congresso julga ambas",
        "dá parecer prévio nas primeiras e julga as segundas",
        "julga as primeiras e dá parecer prévio nas segundas",
        "só registra as duas, sem fazer nenhum juízo de mérito",
      ],
      correta: 2,
      explicacao: "O art. 71, I, prevê parecer prévio nas contas do Presidente, julgadas pelo Congresso (art. 49, IX). O inciso II dá ao TCU o julgamento das contas dos demais responsáveis.",
      explicacaoErradas:
        "“julga as duas” e “julga as primeiras” invadem a competência do Congresso. “dá parecer nas duas” retira do TCU o julgamento do gestor. “só registra” é função ligada a atos de pessoal.",
      pegadinha: "Inverter parecer e julgamento.",
      conhecimento: "As decisões do TCU que imputam débito ou multa têm eficácia de título executivo.",
    },
    {
      topico: "Controle legislativo",
      subassunto: "Sustação",
      dificuldade: 5,
      raciocinio: "Ato: Tribunal. Contrato: Congresso, com plano B de 90 dias.",
      enunciado:
        "O TCU verifica ilegalidade num contrato federal, e o órgão não corrige no prazo dado. Pela Constituição, a sustação",
      alternativas: [
        "cabe ao Congresso, e o TCU decide se em 90 dias nada ocorrer",
        "cabe ao TCU de imediato, como ocorre com qualquer ato",
        "cabe só ao Judiciário, após ação do Ministério Público",
        "cabe ao Presidente da República, pelo poder hierárquico",
        "cabe ao Congresso, sem nenhuma atuação posterior do Tribunal de Contas",
      ],
      correta: 0,
      explicacao: "O art. 71, § 1º, dá a sustação de contrato ao Congresso. O § 2º diz que, sem medidas em 90 dias, o Tribunal decide.",
      explicacaoErradas:
        "“de imediato” vale para atos, e não para contratos. “só ao Judiciário” e “Presidente da República” não têm base no art. 71. “sem nenhuma atuação posterior” esquece o § 2º.",
      pegadinha: "Tratar ato e contrato do mesmo jeito.",
      conhecimento: "Em regra, o controle do TCU se faz depois, mas ele pode adotar medidas cautelares.",
    },
    {
      topico: "Controle judicial",
      subassunto: "Mérito",
      dificuldade: 4,
      raciocinio: "Judiciário anula o ilegal, e não troca a escolha legítima.",
      enunciado:
        "Um juiz entende que a decisão discricionária do órgão sobre onde instalar um posto, embora legal e razoável, não foi a melhor. Nesse caso, o juiz",
      alternativas: [
        "pode anular o ato, pois o mérito sempre é revisto",
        "pode revogar o ato, para escolher a melhor solução",
        "pode trocar a escolha, desde que motive a sentença",
        "só não pode decidir se o ato for ato de governo",
        "não pode invalidar o ato, pois não há ilegalidade",
      ],
      correta: 4,
      explicacao: "O Judiciário examina legalidade, inclusive razoabilidade e proporcionalidade, mas não troca a escolha legítima da Administração.",
      explicacaoErradas:
        "“mérito sempre é revisto” contraria a separação dos Poderes. “revogar” só cabe à própria Administração. “trocar a escolha” é a mesma invasão. “ato de governo” não muda a conclusão.",
      pegadinha: "Confundir controle de razoabilidade com controle de conveniência.",
      conhecimento: "Quando o ato é desproporcional, ele é ilegal, e aí pode ser anulado.",
    },
    {
      topico: "Controle judicial",
      subassunto: "Ação popular",
      dificuldade: 5,
      raciocinio: "Ação popular é do cidadão, pessoa física.",
      enunciado:
        "Uma associação de motoristas e um eleitor querem propor ação popular para anular contrato lesivo ao patrimônio público. A legitimidade é",
      alternativas: [
        "dos dois, pois ambos defendem o interesse coletivo",
        "só do eleitor, pois pessoa jurídica não propõe ação popular",
        "só da associação, pois o cidadão age por mandado de segurança",
        "do Ministério Público, que é o único autor da ação popular",
        "dos dois, desde que paguem custas e honorários antecipados",
      ],
      correta: 1,
      explicacao: "O art. 5º, LXXIII, da CF fala em cidadão, e a Súmula 365 do STF nega legitimidade à pessoa jurídica.",
      explicacaoErradas:
        "“dos dois” ignora a Súmula 365. “só da associação” inverte a regra. “único autor” confunde com a ação penal pública. “custas” contraria a isenção, salvo comprovada má-fé.",
      pegadinha: "Dar à associação a legitimidade da ação popular.",
      conhecimento: "A associação pode usar a ação civil pública, se atender aos requisitos.",
    },
    {
      topico: "Controle legislativo",
      subassunto: "Sustação de ato normativo",
      dificuldade: 4,
      raciocinio: "O Congresso pode sustar o que exorbita do poder regulamentar.",
      enunciado:
        "Um decreto do Presidente da República foi além do que a lei permitia regulamentar. O Congresso Nacional pode",
      alternativas: [
        "anular o decreto por lei ordinária, com a sanção do Presidente da República",
        "revogar o decreto por meio de resolução do Senado Federal",
        "pedir ao TCU que suste o decreto, que é ato normativo",
        "sustar o decreto, na parte que exorbitou do poder regulamentar",
        "julgar o decreto, pois o Legislativo tem controle de mérito",
      ],
      correta: 3,
      explicacao: "O art. 49, V, da CF dá ao Congresso a competência exclusiva de sustar atos normativos do Executivo que exorbitem do poder regulamentar.",
      explicacaoErradas:
        "“lei ordinária” e “resolução do Senado” não são o meio previsto. “pedir ao TCU” erra o órgão. “julgar” e “controle de mérito” não descrevem a sustação.",
      pegadinha: "Trocar sustar por anular ou revogar.",
      conhecimento: "A sustação se faz por decreto legislativo, sem sanção presidencial.",
    },
  ],
};
