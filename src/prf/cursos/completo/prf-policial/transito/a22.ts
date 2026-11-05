import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-22",
  resumo: {
    ideia:
      "Duas normas ligadas ao art. 102 do CTB. A Resolução 946/2022 trata dos sólidos a granel, e a 945/2022 trata da amarração das cargas.",
    itens: [
      {
        termo: "Sólido a granel",
        faz: "Carga sólida fracionada, fragmentada ou em grãos, direto na carroceria, sem embalagem.",
      },
      {
        termo: "Carroceria",
        faz: "Se não for inteiramente fechada, precisa de guardas laterais fechadas ou de telas metálicas que segurem os fragmentos.",
      },
      {
        termo: "Lona",
        faz: "Cobre totalmente a carga, fica ancorada e em bom estado.",
      },
      {
        termo: "Enquadramento do granel",
        faz: "Sem proteção: art. 230, IX ou X. Derramando: art. 231, II.",
      },
      {
        termo: "Acima da carroceria",
        faz: "Sem passar das dimensões: art. 235. Passando também das dimensões: art. 231, IV.",
      },
      {
        termo: "Cana-de-açúcar",
        faz: "Corda só para cana inteira, de 1,50 m a 3,00 m, com no máximo 1,50 m entre as cordas.",
      },
      {
        termo: "Amarração",
        faz: "Cintas, correntes ou cabos de aço, com fator de segurança de pelo menos 2 vezes o peso da carga.",
      },
      {
        termo: "Corda na Resolução 945",
        faz: "É proibida para amarrar carga. Serve só para fixar a lona de cobertura.",
      },
      {
        termo: "Condutor",
        faz: "Confere o tensionamento durante o percurso e reaperta quando preciso.",
      },
      {
        termo: "Baú e sider",
        faz: "Paredes de carroceria fechada podem conter a carga. Lonas laterais do sider, não.",
      },
    ],
    cuidado: "A amarração frouxa vai ao art. 169. A falta de dispositivo ou o uso de corda vai ao art. 230, IX.",
  },
  questoes: [
    {
      topico: "Granel",
      subassunto: "Lona",
      dificuldade: 4,
      raciocinio: "A infração não depende de a carga cair.",
      enunciado:
        "Um caminhão de guardas laterais fechadas leva brita sem lona. Nenhum fragmento caiu na via, e a carga está dentro dos limites da carroceria. Pelos arts. 2º e 4º da Resolução Contran 946/2022, a conduta",
      alternativas: [
        "não é infração, pois não houve derramamento sobre a via",
        "é a do art. 231, II, por lançamento de carga sobre a via",
        "é a do art. 230, IX ou X, pois a carga deve ir toda coberta",
        "é a do art. 235 do CTB, por carga na parte externa do veículo",
        "é a do art. 231, IV, do CTB, por carga acima das dimensões",
      ],
      correta: 2,
      explicacao: "O § 1º do art. 2º exige cobertura total. Descumprido esse parágrafo, o art. 4º, I, leva ao art. 230, IX ou X.",
      explicacaoErradas:
        "“não houve derramamento” esquece que a lona é obrigatória mesmo sem queda. “art. 231, II” exige o derramamento. “art. 235” e “art. 231, IV” dependem de passar dos limites da carroceria.",
      pegadinha: "Achar que só há infração quando a carga cai.",
      conhecimento: "A lona pode ter acionamento manual, mecânico ou automático.",
    },
    {
      topico: "Granel",
      subassunto: "Limites da carroceria",
      dificuldade: 5,
      raciocinio: "Verifique dois limites: o da carroceria e o das dimensões.",
      enunciado:
        "Um caminhão leva areia acima dos limites da carroceria, mas o conjunto não passa de nenhum limite de dimensões fixado pelo Contran. Pelo art. 4º da Resolução Contran 946/2022, o enquadramento é",
      alternativas: [
        "o art. 231, IV, do CTB",
        "o art. 235 do CTB",
        "o art. 231, II, do CTB",
        "o art. 230, X, do CTB",
        "o art. 248 do CTB",
      ],
      correta: 1,
      explicacao: "O art. 4º, IV, leva ao art. 235 a carga que passa dos limites da carroceria sem passar das dimensões.",
      explicacaoErradas:
        "“art. 231, IV” exige passar dos dois limites ao mesmo tempo. “art. 231, II” é para derramamento. “art. 230, X” é para equipamento em desacordo. “art. 248” é para carga em veículo de passageiros.",
      pegadinha: "Usar o art. 231, IV, sempre que a carga estiver alta.",
      conhecimento: "O art. 235 é infração grave, com retenção do veículo para transbordo.",
    },
    {
      topico: "Granel",
      subassunto: "Cana-de-açúcar",
      dificuldade: 5,
      raciocinio: "A corda só cabe na cana inteira, e a medida importa.",
      enunciado:
        "Pelo art. 3º da Resolução Contran 946/2022, o uso de cordas para amarração é admitido no transporte de",
      alternativas: [
        "cana picada, com cordas a cada 1,20 m",
        "cana inteira de 3,40 m, com cordas a cada 1,20 m",
        "cana inteira de 2,50 m, com cordas a cada 2,00 m",
        "cana inteira de 2,50 m, com cordas a cada 1,20 m",
        "cana inteira de 1,20 m, com cordas a cada 1,50 m",
      ],
      correta: 3,
      explicacao: "A corda fica restrita à cana inteira, de 1,50 m a 3,00 m, com distância máxima de 1,50 m entre as cordas.",
      explicacaoErradas:
        "“picada” não é cana inteira. “3,40 m” e “1,20 m” de cana saem do intervalo. “a cada 2,00 m” passa da distância máxima.",
      pegadinha: "Olhar só a distância entre as cordas.",
      conhecimento: "As cordas devem impedir o derramamento da carga na via.",
    },
    {
      topico: "Granel",
      subassunto: "Conceito",
      dificuldade: 4,
      raciocinio: "Sem embalagem, direto na carroceria.",
      enunciado:
        "Pelo art. 2º, § 3º, da Resolução Contran 946/2022, é sólido a granel a carga de",
      alternativas: [
        "soja em grãos transportada direto na carroceria",
        "cimento em sacos empilhados sobre paletes",
        "ração em embalagens de 25 kg, presas com cinta",
        "combustível líquido levado em tanque próprio",
        "pedras decorativas em caixas de papelão",
      ],
      correta: 0,
      explicacao: "Sólido a granel é a carga sólida fracionada, fragmentada ou em grãos, transformada ou in natura, direto na carroceria e sem embalagem.",
      explicacaoErradas:
        "“em sacos”, “em embalagens” e “caixas” estão acondicionados. “combustível líquido” não é sólido.",
      pegadinha: "Pensar no material, e não na forma de transporte.",
      conhecimento: "Cargas com regulamentação específica ficam fora do art. 2º, pelo § 5º.",
    },
    {
      topico: "Amarração",
      subassunto: "Cordas",
      dificuldade: 4,
      raciocinio: "Na Resolução 945, a corda só prende a lona.",
      enunciado:
        "Um caminhão de carroceria aberta leva caixas de máquinas presas com cordas novas e bem tensionadas. Pelos arts. 4º, § 3º, e 11 da Resolução Contran 945/2022, a conduta",
      alternativas: [
        "é regular, pois as cordas estão novas e bem tensionadas",
        "é regular, se a resistência das cordas for o dobro do peso",
        "é a do art. 169, por dispositivo sem o devido tensionamento",
        "é a do art. 237, por falta de identificação do fabricante",
        "é a do art. 230, IX, pois a corda não pode amarrar a carga",
      ],
      correta: 4,
      explicacao: "O § 3º proíbe corda como dispositivo de amarração, e o art. 11, II, leva esse uso ao art. 230, IX.",
      explicacaoErradas:
        "“novas” e “o dobro do peso” não afastam a proibição. “art. 169” é para dispositivo frouxo. “art. 237” é para a falta da placa ou adesivo do fabricante.",
      pegadinha: "Avaliar a qualidade da corda.",
      conhecimento: "A corda é permitida só para fixar a lona de cobertura, quando exigível.",
    },
    {
      topico: "Amarração",
      subassunto: "Tensionamento",
      dificuldade: 5,
      raciocinio: "Dispositivo certo, mas solto, não é falta de equipamento.",
      enunciado:
        "Na abordagem, a PRF encontra cintas adequadas e em bom estado, mas frouxas depois de 200 km. Pelos arts. 4º, § 2º, e 11 da Resolução Contran 945/2022, a responsabilidade e o enquadramento são, respectivamente,",
      alternativas: [
        "do embarcador e art. 230, IX",
        "do condutor e art. 230, IX",
        "do condutor e art. 169",
        "do proprietário e art. 169",
        "do embarcador e art. 235",
      ],
      correta: 2,
      explicacao: "O § 2º manda o condutor verificar e reapertar durante o percurso. O art. 11, I, leva ao art. 169 o trânsito com dispositivos sem o devido tensionamento.",
      explicacaoErradas:
        "“embarcador” e “proprietário” não são os responsáveis citados no § 2º. “art. 230, IX” é para falta ou mau estado. “art. 235” é para carga acima do painel frontal.",
      pegadinha: "Tratar cinta frouxa como falta de equipamento.",
      conhecimento: "O art. 169 é infração leve.",
    },
    {
      topico: "Amarração",
      subassunto: "Guardas laterais",
      dificuldade: 5,
      raciocinio: "A regra tem exceção para a carga que ocupa todo o espaço.",
      enunciado:
        "Uma carga ocupa todo o espaço interno de uma carroceria aberta de guardas laterais rebatíveis, apoiada nas guardas, sem deixar passagem por dentro. As cintas passam pelo lado externo. Pelo art. 6º da Resolução Contran 945/2022,",
      alternativas: [
        "a conduta é a do art. 230, X, sem nenhuma exceção prevista",
        "a passagem externa é admitida nessa situação específica",
        "a conduta é a do art. 169, por cinta sem tensionamento",
        "a passagem externa só é admitida com carga a granel",
        "a passagem externa só é admitida com autorização da via",
      ],
      correta: 1,
      explicacao: "O § 1º proíbe a passagem externa, mas o § 2º excetua a carga que ocupa todo o espaço interno e impede a passagem por dentro.",
      explicacaoErradas:
        "“sem nenhuma exceção” ignora o § 2º. “art. 169” pede dispositivo frouxo, e isso não foi dito. “a granel” e “autorização da via” não constam do artigo.",
      pegadinha: "Parar na proibição do § 1º.",
      conhecimento: "Os pontos de amarração ficam na parte metálica ou no chassi, vedada a fixação só no piso de madeira.",
    },
    {
      topico: "Amarração",
      subassunto: "Baú e sider",
      dificuldade: 4,
      raciocinio: "Lona não segura carga. Parede fechada pode segurar.",
      enunciado:
        "Sobre a contenção da carga, a Resolução Contran 945/2022 estabelece que",
      alternativas: [
        "a lona lateral do sider é contenção suficiente, dispensados os pontos de amarração",
        "o baú frigorífico é obrigado a ter pontos internos de amarração, como o sider",
        "o furgão de carga geral não pode ter pontos internos, por ser inteiramente fechado",
        "a lona lateral do sider não é contenção, e o baú fechado pode usar as paredes",
        "a prancha dispensa amarração da máquina, desde que ela esteja com o freio acionado",
      ],
      correta: 3,
      explicacao: "O art. 9º nega à lona lateral do sider o papel de contenção e exige pontos de amarração. O art. 10 admite as paredes do veículo inteiramente fechado, com pontos internos opcionais.",
      explicacaoErradas:
        "“contenção suficiente” contraria o art. 9º. “obrigado” e “não pode ter” contrariam o art. 10, que torna opcionais os pontos. “dispensa amarração” contraria o art. 5º, que pede pelo menos 4 terminais.",
      pegadinha: "Igualar sider e baú.",
      conhecimento: "Na prancha, cada unidade de carga precisa de pelo menos 4 terminais de amarração.",
    },
  ],
};
