import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-10",
  resumo: {
    ideia:
      "Quando um agente público causa dano, o Estado responde sem que a vítima precise provar culpa. A aula mostra os requisitos, as excludentes, a omissão, o regresso e as teses do STF.",
    itens: [
      {
        termo: "Art. 37, § 6º, da CF",
        faz: "Pessoas de direito público e as privadas prestadoras de serviço público respondem por danos de seus agentes.",
      },
      {
        termo: "Risco administrativo",
        faz: "Responsabilidade objetiva. Bastam conduta, dano e nexo. Admite excludentes.",
      },
      {
        termo: "Excludentes",
        faz: "Culpa exclusiva da vítima, caso fortuito, força maior e ato de terceiro.",
        pista: "Culpa concorrente só reduz a indenização.",
      },
      {
        termo: "Risco integral",
        faz: "Não admite excludente. Aparece no dano nuclear e, pelo STJ, no dano ambiental.",
      },
      {
        termo: "Omissão",
        faz: "Na omissão genérica, exige-se culpa do serviço. Na específica, com dever concreto de agir, a responsabilidade é objetiva.",
      },
      {
        termo: "Teorias",
        faz: "Irresponsabilidade, atos de gestão, culpa civil, culpa administrativa, risco administrativo e risco integral.",
        pista: "Culpa do serviço: não funcionou, funcionou mal ou funcionou com atraso.",
      },
      {
        termo: "Usuário e não usuário",
        faz: "A prestadora privada responde de forma objetiva perante os dois (Tema 130 do STF).",
      },
      {
        termo: "Regresso",
        faz: "O Estado cobra do agente, desde que prove dolo ou culpa. A vítima não aciona o agente diretamente (Tema 940).",
      },
      {
        termo: "Presos",
        faz: "O Estado responde pela morte de detento quando falha no dever de proteção (Tema 592) e indeniza as condições degradantes (Tema 365).",
      },
      {
        termo: "Operações policiais",
        faz: "Morte ou ferimento geram responsabilidade pelo risco administrativo. A prova da excludente cabe ao Estado (Tema 1.237).",
      },
    ],
    cuidado: "Crime de foragido só gera responsabilidade se houver nexo direto entre o momento da fuga e a conduta (Tema 362).",
  },
  questoes: [
    {
      topico: "Risco administrativo",
      subassunto: "Requisitos",
      dificuldade: 4,
      raciocinio: "Vítima prova conduta, dano e nexo. Culpa fica fora.",
      enunciado:
        "Em perseguição regular e sem excesso, um policial rodoviário atira nos pneus de um veículo em fuga, e o ricochete fere um pedestre. Sobre a indenização ao pedestre,",
      alternativas: [
        "não há dever de indenizar, pois o policial agiu dentro da lei",
        "a União responde apenas se a vítima provar culpa do policial",
        "só o motorista em fuga responde, pois ele deu causa ao fato",
        "a União responde de forma objetiva, mesmo com ato lícito",
        "o policial responde sozinho, pois foi ele quem disparou",
      ],
      correta: 3,
      explicacao: "O art. 37, § 6º, dispensa a culpa e alcança também atos lícitos que causam dano anormal e específico a terceiro.",
      explicacaoErradas:
        "“dentro da lei” não afasta a responsabilidade objetiva. “provar culpa” é a teoria subjetiva. “só o motorista” não exclui o nexo, pois o disparo foi do agente. “responde sozinho” contraria o Tema 940.",
      pegadinha: "Pensar que ato lícito nunca gera indenização.",
      conhecimento: "Pelo Tema 1.237, cabe ao Estado provar eventual excludente em operações de segurança.",
    },
    {
      topico: "Risco administrativo",
      subassunto: "Excludentes",
      dificuldade: 5,
      raciocinio: "Culpa exclusiva exclui. Culpa concorrente só reduz.",
      enunciado:
        "Uma viatura em velocidade acima da permitida colide com um motorista que avançou o sinal vermelho. A perícia aponta que os dois contribuíram para o acidente. Nesse caso, a indenização devida pela União",
      alternativas: [
        "é reduzida, pois a culpa concorrente atenua a indenização",
        "é integral, pois o risco administrativo não aceita atenuantes",
        "desaparece, pois a culpa da vítima sempre exclui o nexo causal",
        "depende de sentença penal que condene o policial pelo fato",
        "é paga só pelo agente, pois a viatura estava acima do limite",
      ],
      correta: 0,
      explicacao: "A culpa exclusiva da vítima exclui o nexo. A culpa concorrente apenas reduz o valor, na medida da contribuição de cada um.",
      explicacaoErradas:
        "“não aceita atenuantes” descreve o risco integral. “sempre exclui” vale só para a culpa exclusiva. “sentença penal” não é exigida. “só pelo agente” contraria a responsabilidade da União.",
      pegadinha: "Tratar a culpa concorrente como exclusiva.",
      conhecimento: "O art. 945 do Código Civil traz essa ideia de repartir a indenização.",
    },
    {
      topico: "Prestadoras de serviço",
      subassunto: "Não usuário",
      dificuldade: 4,
      raciocinio: "O art. 37, § 6º, não separa usuário de terceiro.",
      enunciado:
        "Um caminhão de concessionária de rodovia federal, em serviço de manutenção, atinge um ciclista que usava uma via lateral e não pagava pedágio. A concessionária",
      alternativas: [
        "responde só se a vítima provar culpa, por não ser usuária",
        "não responde, pois não há relação de consumo com o ciclista",
        "responde objetivamente, pois a regra alcança não usuários",
        "responde só de forma subsidiária, depois da União",
        "não responde, pois a União é a titular do serviço",
      ],
      correta: 2,
      explicacao: "O STF fixou (Tema 130) que a responsabilidade das prestadoras é objetiva perante usuários e não usuários.",
      explicacaoErradas:
        "“provar culpa” e “relação de consumo” retomam entendimento superado. “subsidiária” inverte a ordem, pois a concessionária responde primeiro. “titular do serviço” não afasta a responsabilidade dela.",
      pegadinha: "Exigir que a vítima seja usuária.",
      conhecimento: "O poder concedente responde de forma subsidiária, se a concessionária não puder pagar.",
    },
    {
      topico: "Omissão",
      subassunto: "Genérica e específica",
      dificuldade: 5,
      raciocinio: "Havia dever concreto de agir naquele caso? Então é específica.",
      enunciado:
        "Avisada várias vezes de um buraco grande na pista, a equipe responsável nada faz por semanas, e um motociclista morre no local. Esse dano é típico de omissão",
      alternativas: [
        "genérica, que nunca gera dever de indenizar",
        "genérica, por exigir prova de crime do servidor",
        "de ato de terceiro, que afasta todo o nexo causal",
        "lícita, pois falta orçamento para reparar todas as vias",
        "específica, pois havia dever concreto de agir no caso",
      ],
      correta: 4,
      explicacao: "Com ciência do risco e dever concreto de agir, a inércia é causa direta do dano. A doutrina fala em omissão específica ou em culpa do serviço, e nos dois caminhos há dever de indenizar.",
      explicacaoErradas:
        "“nunca gera dever” erra, pois a omissão genérica pode gerar indenização se provada a culpa do serviço. “prova de crime” não se exige. “ato de terceiro” não existe aqui. “falta orçamento” não justifica a inércia.",
      pegadinha: "Afastar a indenização alegando reserva do possível.",
      conhecimento: "Pelo Tema 366, em danos de comércio de fogos, é preciso violação de dever específico de agir.",
    },
    {
      topico: "Omissão",
      subassunto: "Foragido",
      dificuldade: 5,
      raciocinio: "Sem nexo direto com a fuga, não há responsabilidade.",
      enunciado:
        "Um preso foge de um presídio federal e, dois anos depois, em outra cidade, comete um roubo. A vítima pede indenização à União. Pela tese do STF,",
      alternativas: [
        "a União responde, pois a fuga prova a falha na custódia",
        "a União responde, pois vale a teoria do risco integral",
        "a União não responde, salvo nexo direto com a fuga",
        "a vítima só pode acionar o diretor do presídio",
        "a União responde de forma subsidiária ao foragido",
      ],
      correta: 2,
      explicacao: "No Tema 362, o STF afastou a responsabilidade objetiva quando não há nexo causal direto entre o momento da fuga e o crime.",
      explicacaoErradas:
        "“a fuga prova a falha” ignora a exigência de nexo direto. “risco integral” não se aplica. “diretor do presídio” contraria o Tema 940. “subsidiária” não é a solução dada pelo STF.",
      pegadinha: "Ligar qualquer crime posterior à fuga.",
      conhecimento: "Se o crime ocorre logo na fuga, o nexo pode estar presente.",
    },
    {
      topico: "Pessoas sob custódia",
      subassunto: "Morte de detento",
      dificuldade: 4,
      raciocinio: "A morte só gera dever se o Estado podia e devia evitar.",
      enunciado:
        "Quanto à morte de detento em estabelecimento prisional, a tese do STF indica que o Estado",
      alternativas: [
        "responde sempre, mesmo se não pudesse evitar a morte",
        "nunca responde em caso de suicídio dentro do presídio",
        "responde se não cumprir o dever de proteção do preso",
        "só responde se o agente penitenciário for condenado",
        "só responde se a família provar a culpa do diretor",
      ],
      correta: 2,
      explicacao: "No Tema 592, o STF ligou a responsabilidade à falha no dever de proteção do art. 5º, XLIX, da CF. Se o Estado provar que não podia evitar, o nexo se rompe.",
      explicacaoErradas:
        "“responde sempre” descreve risco integral. “nunca responde” exagera, pois o suicídio pode gerar dever, conforme o caso. “agente condenado” e “culpa do diretor” não são exigências.",
      pegadinha: "Achar que toda morte na prisão gera indenização.",
      conhecimento: "Pelo Tema 365, condições degradantes também geram dever de indenizar.",
    },
    {
      topico: "Ação regressiva",
      subassunto: "Dolo ou culpa",
      dificuldade: 5,
      raciocinio: "Objetiva para o Estado. Subjetiva para o agente.",
      enunciado:
        "A União pagou indenização por acidente causado por policial rodoviário em serviço e quer cobrar o valor dele. Sobre essa ação,",
      alternativas: [
        "o agente responde sem culpa, pela mesma regra da União",
        "a cobrança exige prova de dolo ou culpa do agente",
        "o direito de regresso exige sentença penal condenatória",
        "a União só pode cobrar se o agente tiver sido demitido",
        "o agente responde de forma solidária desde o início do processo",
      ],
      correta: 1,
      explicacao: "A parte final do art. 37, § 6º, garante o regresso nos casos de dolo ou culpa. Para o agente, a responsabilidade é subjetiva.",
      explicacaoErradas:
        "“sem culpa” confunde a regra da União com a do agente. “sentença penal” e “demitido” não são exigidas. “solidária desde o início” contraria a tese do Tema 940.",
      pegadinha: "Levar a responsabilidade objetiva para o regresso.",
      conhecimento: "O Tema 940 afasta a ação direta da vítima contra o agente.",
    },
    {
      topico: "Teorias",
      subassunto: "Risco integral e culpa do serviço",
      dificuldade: 4,
      raciocinio: "Risco integral não aceita excludente.",
      enunciado:
        "Uma teoria faz o Estado indenizar mesmo com culpa exclusiva da vítima ou caso fortuito. Essa teoria é a do",
      alternativas: [
        "risco integral, ligada no Brasil a casos como o dano nuclear",
        "risco administrativo, adotada como regra geral na Constituição",
        "culpa administrativa, baseada na falha do serviço público",
        "culpa civil, pela qual o Estado responde como particular",
        "irresponsabilidade, pela qual o Estado não pode errar",
      ],
      correta: 0,
      explicacao: "O risco integral não admite excludentes. O art. 21, XXIII, “d”, da CF trata da responsabilidade por danos nucleares independentemente de culpa.",
      explicacaoErradas:
        "“risco administrativo” aceita excludentes. “culpa administrativa” exige falha do serviço. “culpa civil” exige culpa do agente. “irresponsabilidade” é a fase em que o Estado não indenizava.",
      pegadinha: "Trocar risco administrativo por integral.",
      conhecimento: "O STJ aplica o risco integral ao dano ambiental.",
    },
  ],
};
