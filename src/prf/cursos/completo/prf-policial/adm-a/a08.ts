import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-08",
  resumo: {
    ideia:
      "A segunda parte da Lei 14.133 mostra quando se contrata sem licitação, como alienar bens, a ordem das fases da disputa e os procedimentos auxiliares, como o registro de preços.",
    itens: [
      {
        termo: "Inexigibilidade (art. 74)",
        faz: "A competição é inviável. O rol é exemplificativo: fornecedor exclusivo, artista consagrado, serviço técnico com notória especialização, credenciamento e imóvel com características únicas.",
      },
      {
        termo: "Dispensa (art. 75)",
        faz: "A competição é possível, mas a lei libera a disputa. O rol é taxativo.",
        pista: "Os valores do art. 75 são atualizados todo ano por ato do Executivo federal.",
      },
      {
        termo: "Licitação deserta ou fracassada",
        faz: "Permite dispensa em até 1 ano, se todas as condições do edital forem mantidas.",
      },
      {
        termo: "Contratação direta indevida",
        faz: "Com dolo, fraude ou erro grosseiro, contratado e agente respondem de forma solidária pelo dano (art. 73).",
      },
      {
        termo: "Alienação",
        faz: "Pede interesse público justificado e avaliação. Imóvel pede ainda autorização legislativa e leilão.",
        pista: "Imóvel vindo de processo judicial ou dação em pagamento dispensa a autorização.",
      },
      {
        termo: "Fases (art. 17)",
        faz: "Preparatória, edital, propostas e lances, julgamento, habilitação, recursos e homologação.",
        pista: "A habilitação pode vir antes, por ato motivado e com previsão no edital.",
      },
      {
        termo: "Forma da licitação",
        faz: "Preferencialmente eletrônica. A presencial precisa de motivação e é gravada em áudio e vídeo.",
      },
      {
        termo: "Credenciamento",
        faz: "Chama todos os interessados. Serve para contratação paralela, seleção por terceiros e mercados fluidos.",
        pista: "A Lei 15.266/2025 acrescentou a hipótese de comércio eletrônico.",
      },
      {
        termo: "Registro de preços",
        faz: "Os preços obrigam o fornecedor, mas não obrigam a Administração a contratar. A ata vale 1 ano, prorrogável por igual período.",
      },
      {
        termo: "Manifestação de interesse",
        faz: "A Administração chama a iniciativa privada para estudos. Quem os faz não ganha preferência, e o vencedor paga por eles.",
      },
    ],
    cuidado: "Dispensa e inexigibilidade não se confundem: na dispensa a disputa seria possível, e na inexigibilidade ela não é.",
  },
  questoes: [
    {
      topico: "Contratação direta",
      subassunto: "Fornecedor exclusivo",
      dificuldade: 4,
      raciocinio: "Um só fornecedor, competição inviável.",
      enunciado:
        "Só uma empresa fornece, com exclusividade comprovada por documento idôneo, o equipamento que a PRF precisa comprar. A contratação direta ocorre por",
      alternativas: [
        "dispensa, pois o objeto é de valor elevado",
        "dispensa, pois a lei libera a compra de bens únicos",
        "inexigibilidade, desde que o edital cite a marca desejada",
        "dispensa, por ser medida de segurança nacional",
        "inexigibilidade, pois a competição é inviável",
      ],
      correta: 4,
      explicacao: "O art. 74, I, trata do fornecedor exclusivo. O § 1º exige prova da exclusividade e veda a preferência por marca específica.",
      explicacaoErradas:
        "As opções com “dispensa” partem de disputa possível, o que não é o caso. “cite a marca desejada” é justamente o que a lei veda.",
      pegadinha: "Trocar dispensa por inexigibilidade.",
      conhecimento: "A prova pode ser atestado ou contrato de exclusividade, declaração do fabricante ou outro documento idôneo.",
    },
    {
      topico: "Contratação direta",
      subassunto: "Natureza dos róis",
      dificuldade: 5,
      raciocinio: "“Em especial” indica exemplos.",
      enunciado:
        "Surge caso real de competição inviável que não aparece em nenhum inciso do art. 74 da Lei 14.133. Quanto à contratação direta,",
      alternativas: [
        "cabe inexigibilidade, pois o rol do art. 74 é exemplificativo",
        "não cabe contratação direta, pois o rol do art. 74 é taxativo",
        "cabe dispensa, pois o art. 75 aceita hipóteses análogas",
        "depende de lei específica para o caso, editada pelo ente",
        "cabe inexigibilidade só com aval do Tribunal de Contas",
      ],
      correta: 0,
      explicacao: "O art. 74 diz “em especial”, o que torna seu rol exemplificativo. Já o rol de dispensa do art. 75 é taxativo.",
      explicacaoErradas:
        "“rol do art. 74 é taxativo” inverte a regra. “hipóteses análogas” contraria o caráter taxativo do art. 75. “lei específica” e “aval do Tribunal” não são exigências.",
      pegadinha: "Inverter os róis de dispensa e inexigibilidade.",
      conhecimento: "A inviabilidade precisa ser demonstrada no processo (art. 72).",
    },
    {
      topico: "Contratação direta",
      subassunto: "Notória especialização",
      dificuldade: 5,
      raciocinio: "A lei tira a publicidade da inexigibilidade.",
      enunciado:
        "Para uma campanha de educação no trânsito, o órgão quer contratar sem licitação uma agência de publicidade de notória especialização. Pela Lei 14.133, a inexigibilidade",
      alternativas: [
        "é possível, pois a campanha é serviço técnico especializado",
        "é vedada para serviços de publicidade e divulgação",
        "é possível, se a agência provar sua notória especialização",
        "é possível, pois campanha educativa é de interesse público",
        "é vedada, pois serviço intelectual exige o pregão",
      ],
      correta: 1,
      explicacao: "O art. 74, III, permite inexigibilidade para serviços técnicos especializados, mas veda expressamente a de serviços de publicidade e divulgação.",
      explicacaoErradas:
        "“serviço técnico especializado” e “notória especialização” não superam a vedação expressa. “interesse público” também não. “exige o pregão” erra, pois o pregão não se aplica a serviço intelectual.",
      pegadinha: "Achar que a notória especialização resolve tudo.",
      conhecimento: "A contratação de publicidade por agências tem lei própria, a Lei 12.232/2010.",
    },
    {
      topico: "Contratação direta",
      subassunto: "Licitação deserta",
      dificuldade: 5,
      raciocinio: "Só vale se tudo do edital for mantido.",
      enunciado:
        "Dez meses após uma licitação sem interessados, o órgão quer contratar direto o mesmo objeto, mas com exigências de habilitação mais leves que as do edital. Pela Lei 14.133,",
      alternativas: [
        "cabe dispensa, pois a licitação anterior foi deserta",
        "cabe dispensa, pois o prazo de um ano foi respeitado",
        "cabe inexigibilidade, pois ninguém se interessou",
        "não cabe dispensa, pois as condições do edital se mantêm",
        "não cabe dispensa, pois a lei só aceita prazo de até seis meses",
      ],
      correta: 3,
      explicacao: "O art. 75, III, exige contratação que mantenha todas as condições do edital, realizado há menos de 1 ano.",
      explicacaoErradas:
        "“foi deserta” e “prazo de um ano” olham só parte do requisito. “ninguém se interessou” não torna a competição inviável. “até seis meses” erra o prazo.",
      pegadinha: "Olhar o prazo e esquecer a manutenção das condições.",
      conhecimento: "A regra vale também quando as propostas vieram com preços acima do mercado.",
    },
    {
      topico: "Contratação direta",
      subassunto: "Responsabilidade",
      dificuldade: 4,
      raciocinio: "Dolo, fraude ou erro grosseiro: os dois respondem juntos.",
      enunciado:
        "Uma contratação direta sem base legal foi feita com erro grosseiro do agente público e causou dano ao erário. Pelo art. 73 da Lei 14.133,",
      alternativas: [
        "agente e contratado respondem de forma solidária pelo dano",
        "só o agente responde, pois o contratado agiu de boa-fé presumida",
        "só o contratado responde, pois recebeu o valor indevido",
        "agente e contratado respondem só em caso de dolo comprovado",
        "a responsabilidade é sempre da autoridade que autorizou",
      ],
      correta: 0,
      explicacao: "O art. 73 prevê responsabilidade solidária do contratado e do agente na contratação direta indevida com dolo, fraude ou erro grosseiro.",
      explicacaoErradas:
        "“só o agente” e “só o contratado” afastam a solidariedade. “só em caso de dolo” esquece fraude e erro grosseiro. “sempre da autoridade” não está na lei.",
      pegadinha: "Exigir dolo em todo caso.",
      conhecimento: "Essa responsabilidade não exclui outras sanções legais.",
    },
    {
      topico: "Alienações",
      subassunto: "Imóveis",
      dificuldade: 5,
      raciocinio: "A origem do imóvel pode dispensar a autorização legislativa.",
      enunciado:
        "Uma autarquia federal recebeu um imóvel em dação em pagamento e quer vendê-lo. Pela Lei 14.133, a venda exige",
      alternativas: [
        "autorização legislativa, avaliação prévia e leilão",
        "apenas avaliação prévia e licitação na modalidade leilão",
        "autorização legislativa e concorrência, sem avaliação",
        "apenas decreto do chefe do Poder Executivo",
        "licitação dispensada, pela origem do bem, e venda direta",
      ],
      correta: 1,
      explicacao: "A regra para imóveis inclui autorização legislativa, mas o art. 76, § 1º, a dispensa no bem vindo de processo judicial ou dação em pagamento.",
      explicacaoErradas:
        "“autorização legislativa, avaliação prévia e leilão” é a regra geral, afastada aqui. “concorrência” não é a modalidade da alienação. “decreto” não basta. “venda direta” contraria o leilão exigido.",
      pegadinha: "Aplicar a regra geral sem olhar a origem do imóvel.",
      conhecimento: "Bens móveis não precisam de autorização legislativa.",
    },
    {
      topico: "Fases",
      subassunto: "Inversão",
      dificuldade: 4,
      raciocinio: "Regra: julgamento antes da habilitação. A inversão é exceção.",
      enunciado:
        "O edital de uma concorrência prevê que a habilitação ocorrerá antes da apresentação das propostas e do julgamento. Pela Lei 14.133, isso",
      alternativas: [
        "é a regra geral, sem necessidade de justificativa",
        "é vedado, pois a ordem das fases é sempre fixa",
        "é possível, com ato motivado e previsão no edital",
        "só vale para licitações realizadas de forma presencial",
        "depende de autorização do órgão de controle interno",
      ],
      correta: 2,
      explicacao: "A sequência do art. 17 põe o julgamento antes da habilitação. O § 1º permite antecipar a habilitação com ato motivado e previsão no edital.",
      explicacaoErradas:
        "“regra geral” inverte a lei. “sempre fixa” esquece o § 1º. “forma presencial” e “controle interno” não são condições previstas.",
      pegadinha: "Levar a ordem antiga da Lei 8.666 para a lei nova.",
      conhecimento: "A antecipação exige explicar os benefícios no ato motivado.",
    },
    {
      topico: "Fases",
      subassunto: "Forma",
      dificuldade: 4,
      raciocinio: "Presencial é exceção motivada e fica gravada.",
      enunciado:
        "Uma licitação será presencial, e não eletrônica. Pela Lei 14.133, essa escolha",
      alternativas: [
        "é proibida em todos os casos, sem exceção",
        "é livre, pois a lei só dá preferência à forma eletrônica",
        "exige só a presença de duas testemunhas na sessão",
        "torna opcional a ata, se houver vídeo da sessão",
        "deve ser motivada, com ata e gravação em áudio e vídeo",
      ],
      correta: 4,
      explicacao: "O art. 17, § 2º, prefere a forma eletrônica e admite a presencial com motivação, registro em ata e gravação em áudio e vídeo.",
      explicacaoErradas:
        "“proibida” exagera, pois a lei diz “preferencialmente”. “livre” dispensa a motivação exigida. “duas testemunhas” não consta da lei. “opcional a ata” contraria o registro exigido.",
      pegadinha: "Pensar que a forma eletrônica é obrigatória em tudo.",
      conhecimento: "A gravação deve ser juntada aos autos após a sessão.",
    },
    {
      topico: "Procedimentos auxiliares",
      subassunto: "Credenciamento",
      dificuldade: 5,
      raciocinio: "Quem escolhe o prestador é o próprio beneficiário.",
      enunciado:
        "Um órgão chama todos os laboratórios que aceitem suas condições, e cada servidor escolhe em qual fará os exames periódicos. Esse credenciamento é da hipótese",
      alternativas: [
        "de mercados fluidos, com preço em flutuação constante",
        "de seleção a critério de terceiros, os beneficiários",
        "de contratação excludente, com um só laboratório vencedor",
        "de pré-qualificação de bens, com prova de qualidade",
        "de dispensa, pois o valor de cada exame é pequeno",
      ],
      correta: 1,
      explicacao: "O art. 79, II, trata da seleção a critério de terceiros, em que a escolha do contratado cabe ao beneficiário direto da prestação.",
      explicacaoErradas:
        "“mercados fluidos” pede preço que muda sem parar. “excludente” é o oposto do credenciamento. “pré-qualificação” é outro procedimento. “dispensa” não descreve o caso, que é de inexigibilidade (art. 74, IV).",
      pegadinha: "Ler o credenciamento como dispensa.",
      conhecimento: "As outras hipóteses são a contratação paralela e não excludente, os mercados fluidos e o comércio eletrônico.",
    },
    {
      topico: "Procedimentos auxiliares",
      subassunto: "Registro de preços e estudos",
      dificuldade: 5,
      raciocinio: "Quem assina a ata se obriga. A Administração, não.",
      enunciado:
        "Há ata de registro de preços vigente para pneus, mas o órgão quer abrir licitação própria, de forma motivada, para a mesma compra. Pela Lei 14.133,",
      alternativas: [
        "é vedado, pois a ata obriga a Administração a contratar",
        "é vedado até o fim da ata, salvo se o preço subir",
        "é possível, pois o fornecedor da ata pode desistir sem motivo",
        "é possível, pois os preços registrados não obrigam a contratar",
        "é possível, desde que o órgão indenize o fornecedor da ata",
      ],
      correta: 3,
      explicacao: "O art. 83 diz que os preços registrados comprometem o fornecedor, mas não obrigam a Administração, que pode fazer licitação específica motivada.",
      explicacaoErradas:
        "“obriga a Administração” e “até o fim da ata” contrariam o art. 83. “pode desistir sem motivo” erra, pois o fornecedor fica comprometido. “indenize” não está previsto.",
      pegadinha: "Achar que a ata obriga os dois lados.",
      conhecimento: "A ata vigora por 1 ano, prorrogável por igual período se o preço for vantajoso (art. 84).",
    },
  ],
};
