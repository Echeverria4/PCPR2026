import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-13",
  resumo: {
    ideia:
      "A LAI garante o acesso à informação pública, e a LC 131/2009 levou à LRF a transparência em tempo real do orçamento. Juntas, deixam o gasto público aberto a qualquer pessoa.",
    itens: [
      {
        termo: "Transparência ativa",
        faz: "O órgão divulga por conta própria, sem ninguém pedir.",
      },
      {
        termo: "Transparência passiva",
        faz: "O órgão responde a um pedido de informação.",
      },
      {
        termo: "Entidades privadas",
        faz: "Quem recebe dinheiro público fica sujeito à LAI só na parcela recebida e no seu destino (art. 2º).",
      },
      {
        termo: "Municípios pequenos",
        faz: "Até 10 mil habitantes: dispensa da internet obrigatória da LAI, mantida a execução orçamentária em tempo real.",
        pista: "A dispensa é parcial.",
      },
      {
        termo: "Art. 48 da LRF",
        faz: "Pede participação popular, dados em tempo real e sistema integrado com padrão mínimo.",
      },
      {
        termo: "Art. 48-A da LRF",
        faz: "Qualquer pessoa física ou jurídica tem acesso à despesa, com processo, bem ou serviço e beneficiário, e à receita, com lançamento e recebimento.",
      },
      {
        termo: "Art. 49 da LRF",
        faz: "As contas do Executivo ficam disponíveis no Legislativo e no órgão técnico durante todo o exercício.",
      },
      {
        termo: "Art. 73-A da LRF",
        faz: "Cidadão, partido, associação ou sindicato podem denunciar ao Tribunal de Contas e ao Ministério Público.",
      },
      {
        termo: "Art. 73-C da LRF",
        faz: "Quem não cumpre fica sem transferências voluntárias.",
        pista: "Transferência constitucional segue normal.",
      },
      {
        termo: "Art. 33 da LAI",
        faz: "Particular com vínculo com o poder público: advertência, multa, rescisão, suspensão de até 2 anos e inidoneidade.",
      },
    ],
    cuidado:
      "A publicidade é a regra e o sigilo é a exceção: dispensa da internet não libera o orçamento em tempo real.",
  },
  questoes: [
    {
      topico: "Municípios pequenos",
      subassunto: "Dispensa parcial",
      dificuldade: 5,
      raciocinio:
        "Veja o que o art. 8º, § 4º, da LAI retira e o que ele mantém.",
      enunciado:
        "Um município de 8 mil habitantes não mantém site oficial e alega estar livre de toda a transparência. Segundo a LAI, a dispensa dos municípios de até 10 mil habitantes",
      alternativas: [
        "alcança toda a transparência, ativa e passiva, do município",
        "não existe, pois todo município deve manter site com todos os dados",
        "vale só até o município alcançar a receita mínima definida em lei",
        "depende de autorização do Tribunal de Contas do respectivo estado",
        "atinge a internet, mas mantém a execução orçamentária em tempo real",
      ],
      correta: 4,
      explicacao:
        "O art. 8º, § 4º, da LAI dispensa esses municípios da divulgação obrigatória na internet. Ele mantém, porém, a divulgação em tempo real da execução orçamentária e financeira, nos termos da LRF.",
      explicacaoErradas:
        "“Toda a transparência” amplia a dispensa. “Não existe” nega um parágrafo expresso. “Receita mínima” troca o critério, que é o número de habitantes. “Autorização do Tribunal de Contas” cria uma exigência que a lei não traz.",
      pegadinha:
        "O pedido de informação, a transparência passiva, também segue valendo.",
      conhecimento:
        "A regra geral do art. 8º, § 2º, manda usar todos os meios legítimos, com divulgação obrigatória em sites oficiais.",
    },
    {
      topico: "Entidades privadas",
      subassunto: "Parcela de recursos públicos",
      dificuldade: 4,
      raciocinio:
        "A lei não cobre a vida toda da entidade, só o dinheiro público.",
      enunciado:
        "Uma associação privada sem fins lucrativos firmou termo de parceria com a União e recebeu recursos públicos. Um jornalista pediu informações a ela com base na LAI. A publicidade a que a associação se submete",
      alternativas: [
        "alcança toda a vida da entidade, mesmo as contas de recursos privados",
        "alcança a parcela de recursos públicos recebida e a sua destinação",
        "não existe, pois ela é pessoa jurídica de direito privado",
        "alcança só os salários dos dirigentes da associação",
        "depende de decisão do Tribunal de Contas ou do Ministério Público",
      ],
      correta: 1,
      explicacao:
        "Pelo art. 2º da LAI, a lei vale, no que couber, para entidades privadas sem fins lucrativos que recebem recursos públicos. O parágrafo único limita a publicidade à parcela recebida e à sua destinação, sem prejuízo das prestações de contas.",
      explicacaoErradas:
        "“Toda a vida da entidade” vai além do parágrafo único. “Não existe” ignora o art. 2º. “Só os salários” reduz o alcance sem base legal. “Decisão do Tribunal de Contas” cria uma condição que a lei não traz.",
      pegadinha:
        "A entidade é privada, mas o dinheiro público carrega a transparência.",
      conhecimento:
        "Termo de parceria, convênio, contrato de gestão e subvenção social são exemplos de vínculo citados no art. 2º.",
    },
    {
      topico: "Art. 48-A da LRF",
      subassunto: "Dados da despesa",
      dificuldade: 5,
      raciocinio:
        "A LC 131 quis mostrar a despesa ato por ato, com quem recebeu.",
      enunciado:
        "Depois da LC 131/2009, os entes devem dar a qualquer pessoa física ou jurídica acesso às informações sobre a despesa. Segundo o art. 48-A da LRF, isso inclui",
      alternativas: [
        "só o valor total pago em cada mês, sem citar quem recebeu",
        "só as despesas acima do limite de dispensa de licitação",
        "os atos da despesa, mas sem o nome do beneficiário do pagamento",
        "todos os atos da despesa, com o número do processo, o bem e o beneficiário",
        "somente os pagamentos feitos a servidores, com o nome e a remuneração de cada um",
      ],
      correta: 3,
      explicacao:
        "O art. 48-A, I, pede todos os atos das unidades gestoras na execução da despesa, no momento em que ocorrem, com no mínimo o número do processo, o bem ou serviço, o beneficiário do pagamento e, quando for o caso, a licitação.",
      explicacaoErradas:
        "“Só o valor total” e “sem o nome do beneficiário” retiram dado expresso da lei. “Acima do limite de dispensa” cria um corte inexistente. “Somente os pagamentos a servidores” reduz a despesa a uma parte dela.",
      pegadinha:
        "O dado mínimo inclui o beneficiário, seja pessoa física ou jurídica.",
      conhecimento:
        "Quanto à receita, o inciso II pede o lançamento e o recebimento de toda a receita, inclusive a extraordinária.",
    },
    {
      topico: "Art. 73-C da LRF",
      subassunto: "Sanção ao ente",
      dificuldade: 4,
      raciocinio:
        "A sanção atinge o caixa do ente, e só o repasse voluntário.",
      enunciado:
        "Um município deixou de disponibilizar as informações de execução orçamentária exigidas pela LC 131. Segundo o art. 73-C da LRF, até regularizar a situação, ele",
      alternativas: [
        "fica impedido de receber transferências voluntárias",
        "perde o direito às transferências constitucionais",
        "tem o prefeito afastado do cargo pelo Tribunal de Contas",
        "fica sujeito a intervenção automática do respectivo estado",
        "paga multa diária à União, fixada pelo Ministério Público",
      ],
      correta: 0,
      explicacao:
        "O art. 73-C manda aplicar a sanção do art. 23, § 3º, I, da LRF. Enquanto não regulariza, o ente não pode receber transferências voluntárias.",
      explicacaoErradas:
        "“Transferências constitucionais” não são atingidas. “Afastado do cargo”, “intervenção automática” e “multa diária” não são as consequências que a LRF prevê nesse artigo.",
      pegadinha:
        "Voluntária é o repasse que depende de acordo. A constitucional é obrigatória.",
      conhecimento:
        "O art. 73-B fixou prazos de 1, 2 e 4 anos para o início dessa exigência, conforme o tamanho do ente. Esses prazos já se esgotaram.",
    },
    {
      topico: "Art. 73-A da LRF",
      subassunto: "Quem pode denunciar",
      dificuldade: 4,
      raciocinio:
        "A lei lista quatro legitimados e dois destinatários.",
      enunciado:
        "Um sindicato percebeu que uma prefeitura descumpre as regras de transparência da LRF. Segundo o art. 73-A, o sindicato",
      alternativas: [
        "só pode agir por meio de partido político com representação",
        "depende de provar interesse direto, pois só quem foi lesado denuncia",
        "pode denunciar ao Tribunal de Contas e ao Ministério Público competentes",
        "pode denunciar somente à Câmara de Vereadores do próprio município",
        "deve antes pedir as informações por escrito e aguardar 30 dias para denunciar",
      ],
      correta: 2,
      explicacao:
        "O art. 73-A diz que qualquer cidadão, partido político, associação ou sindicato é parte legítima para denunciar ao Tribunal de Contas e ao órgão competente do Ministério Público o descumprimento da LRF.",
      explicacaoErradas:
        "“Por meio de partido” ignora o sindicato como legitimado. “Interesse direto” cria um requisito que a lei não traz. “Somente à Câmara” troca os destinatários. “Aguardar 30 dias” inventa uma etapa.",
      pegadinha:
        "A denúncia é aberta: não precisa de dano próprio.",
      conhecimento:
        "O art. 73-A foi incluído pela LC 131/2009.",
    },
    {
      topico: "Art. 48 da LRF",
      subassunto: "Instrumentos do § 1º",
      dificuldade: 4,
      raciocinio:
        "Pense em quem participa, quando o dado sai e por qual sistema.",
      enunciado:
        "Segundo o art. 48, § 1º, da LRF, a transparência será assegurada também por meio de",
      alternativas: [
        "participação popular, dados mensais e sistema próprio de cada ente",
        "participação popular, dados em tempo real e sistema integrado padrão",
        "audiência só depois de aprovado o orçamento e dados em tempo real",
        "consulta aos conselhos de contas e dados impressos na sede do ente",
        "dados em tempo real, com sigilo do beneficiário e do número do processo",
      ],
      correta: 1,
      explicacao:
        "O § 1º prevê incentivo à participação popular e audiências públicas durante a elaboração dos planos e orçamentos, informações detalhadas em tempo real, e sistema integrado com padrão mínimo de qualidade fixado pelo Executivo da União.",
      explicacaoErradas:
        "“Dados mensais” e “sistema próprio” contrariam o tempo real e o padrão mínimo. “Depois de aprovado” retira a participação da fase de elaboração. “Dados impressos” contraria os meios eletrônicos. “Sigilo do beneficiário” choca com o art. 48-A.",
      pegadinha:
        "A audiência acontece durante a elaboração, e não depois.",
      conhecimento:
        "A LC 224/2025 incluiu no § 1º o inciso IV, com a divulgação de benefícios tributários, financeiros e creditícios no Portal da Transparência.",
    },
    {
      topico: "Art. 33 da LAI",
      subassunto: "Sanções a particulares",
      dificuldade: 5,
      raciocinio:
        "Lembre da lista: advertência, multa, rescisão, suspensão e inidoneidade.",
      enunciado:
        "Uma empresa privada contratada pelo poder público divulgou, de forma indevida, informação sigilosa que detinha por causa do vínculo. Entre as sanções do art. 33 da LAI, ela pode receber",
      alternativas: [
        "apenas advertência, pois a LAI não prevê multa a entidade privada",
        "multa e suspensão de licitar pelo prazo mínimo de 5 anos",
        "demissão dos sócios e perda definitiva do direito de contratar",
        "só rescisão, sem chance de defesa, pela gravidade do fato",
        "multa, rescisão do vínculo e suspensão de licitar por até 2 anos",
      ],
      correta: 4,
      explicacao:
        "O art. 33 prevê advertência, multa, rescisão do vínculo, suspensão temporária de licitar e impedimento de contratar por prazo de até 2 anos, e declaração de inidoneidade. A multa pode vir junto das demais, sempre com defesa prévia.",
      explicacaoErradas:
        "“Não prevê multa” contraria o inciso II. “Mínimo de 5 anos” troca o prazo. “Demissão dos sócios” não existe na lei. “Sem chance de defesa” ignora o § 1º do art. 33.",
      pegadinha:
        "O limite de 2 anos é um teto, e não um piso.",
      conhecimento:
        "No caso da advertência, da rescisão e da suspensão, a defesa é de 10 dias, e a multa pode ser aplicada junto com elas.",
    },
  ],
};
