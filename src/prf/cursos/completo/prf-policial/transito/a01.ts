import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-01",
  resumo: {
    ideia:
      "O CTB rege todo trânsito nas vias terrestres abertas à circulação. Esta aula mostra o que é trânsito, quais vias entram na lei e quais velocidades valem quando não há placa.",
    itens: [
      {
        termo: "Trânsito",
        faz: "Uso das vias por pessoas, veículos e animais para circular, parar, estacionar e fazer carga ou descarga.",
      },
      {
        termo: "Trânsito seguro",
        faz: "Direito de todos e dever dos órgãos do Sistema Nacional de Trânsito.",
      },
      {
        termo: "Responsabilidade objetiva",
        faz: "O órgão responde por dano de ação, omissão ou erro, sem discussão de culpa.",
      },
      {
        termo: "Vias equiparadas",
        faz: "Praias abertas à circulação, vias internas de condomínio e estacionamento de estabelecimento privado de uso coletivo.",
      },
      {
        termo: "Rodovia e estrada",
        faz: "As duas são vias rurais. Rodovia é pavimentada. Estrada não é.",
      },
      {
        termo: "Via urbana sem placa",
        faz: "Trânsito rápido 80, arterial 60, coletora 40 e local 30 km/h.",
      },
      {
        termo: "Via rural sem placa",
        faz: "Pista dupla 110 e demais 90. Pista simples 100 e demais 90. Estrada 60 km/h.",
      },
      {
        termo: "Velocidade mínima",
        faz: "Não pode ser inferior à metade da máxima, respeitadas as condições da via e do trânsito.",
      },
    ],
    cuidado: "Camioneta, caminhonete e motocicleta ficam no grupo do automóvel. Caminhão e ônibus ficam nos 90 km/h.",
  },
  questoes: [
    {
      topico: "Disposições preliminares",
      subassunto: "Responsabilidade dos órgãos",
      dificuldade: 4,
      raciocinio: "O art. 1º, § 3º, fala em ação, omissão ou erro.",
      enunciado:
        "Um buraco conhecido e não reparado em rodovia causa dano a um veículo. Pelo art. 1º do CTB, o órgão do Sistema Nacional de Trânsito responsável pela manutenção responde",
      alternativas: [
        "só se a vítima provar a culpa do servidor que se omitiu",
        "objetivamente, pois o dano decorre de omissão na manutenção",
        "apenas se houver condenação penal do agente público do trecho",
        "de forma subsidiária, depois de esgotado o patrimônio do servidor",
        "somente por ação, pois omissão não gera dever de reparar o dano",
      ],
      correta: 1,
      explicacao:
        "O art. 1º, § 3º, diz que os órgãos respondem objetivamente por danos causados por ação, omissão ou erro na execução e manutenção de programas, projetos e serviços.",
      explicacaoErradas:
        "“provar a culpa” contraria a responsabilidade objetiva. “condenação penal” não é requisito. “subsidiária” inventa uma ordem. “somente por ação” ignora a palavra omissão da lei.",
      pegadinha: "Exigir culpa quando a lei diz objetivamente.",
      conhecimento: "O § 5º manda priorizar a defesa da vida, incluída a preservação da saúde e do meio ambiente.",
    },
    {
      topico: "Disposições preliminares",
      subassunto: "Vias equiparadas",
      dificuldade: 4,
      raciocinio: "O uso coletivo faz o local entrar no CTB.",
      enunciado: "Sobre o pátio de estacionamento de um supermercado aberto ao público, é correto afirmar que",
      alternativas: [
        "é via terrestre, por ser área de estabelecimento privado de uso coletivo",
        "fica fora do CTB, por ser propriedade particular, ainda que o público entre",
        "só é via terrestre se o órgão municipal autorizar a sinalização do local",
        "só entra no CTB se houver acordo entre o dono e o órgão de trânsito local",
        "equivale a via pública apenas durante o horário de abertura do comércio",
      ],
      correta: 0,
      explicacao:
        "O parágrafo único do art. 2º considera vias terrestres as vias e áreas de estacionamento de estabelecimentos privados de uso coletivo.",
      explicacaoErradas:
        "“propriedade particular” não afasta o CTB nesse caso. “autorizar a sinalização”, “acordo” e “horário de abertura” criam condições que a lei não traz.",
      pegadinha: "Pensar que área privada nunca segue o CTB.",
      conhecimento: "O mesmo parágrafo inclui praias abertas à circulação e vias internas de condomínios de unidades autônomas.",
    },
    {
      topico: "Velocidades",
      subassunto: "Rodovia de pista dupla",
      dificuldade: 4,
      raciocinio: "Separe o grupo do automóvel dos demais veículos.",
      enunciado:
        "Em rodovia de pista dupla sem sinalização regulamentadora, os limites máximos de uma motocicleta, de uma caminhonete e de um ônibus são, em km/h e nessa ordem,",
      alternativas: ["110, 90 e 90", "100, 100 e 90", "110, 100 e 90", "110, 110 e 90", "90, 110 e 90"],
      correta: 3,
      explicacao:
        "Na pista dupla, automóveis, camionetas, caminhonetes e motocicletas têm 110 km/h. Os demais veículos, como o ônibus, têm 90 km/h.",
      explicacaoErradas:
        "“110, 90 e 90” tira a caminhonete do grupo do automóvel. “100, 100 e 90” usa a pista simples. “110, 100 e 90” mistura as duas pistas. “90, 110 e 90” tira a motocicleta do grupo.",
      pegadinha: "Colocar a caminhonete com os veículos pesados.",
      conhecimento: "O órgão com circunscrição pode fixar velocidades maiores ou menores por sinalização.",
    },
    {
      topico: "Velocidades",
      subassunto: "Velocidade mínima",
      dificuldade: 5,
      raciocinio: "Ache a máxima e divida por dois.",
      enunciado:
        "A patrulha mede 52 km/h de um automóvel em rodovia de pista dupla sem placa de velocidade, com tráfego livre e tempo bom. Conclui-se que",
      alternativas: [
        "o condutor respeita a lei, pois só existe limite máximo de velocidade",
        "a mínima é 45 km/h, metade dos 90 km/h que valem para todos na rodovia",
        "ele está abaixo da mínima de 55 km/h, metade dos 110 km/h da via",
        "a mínima é 50 km/h, metade dos 100 km/h do automóvel em qualquer rodovia",
        "a mínima só existe quando uma placa específica indica esse valor",
      ],
      correta: 2,
      explicacao:
        "O automóvel tem 110 km/h em pista dupla sem placa, e o art. 62 fixa a mínima na metade da máxima: 55 km/h. Como não há motivo de trânsito ou da via, 52 km/h fica abaixo.",
      explicacaoErradas:
        "“só existe limite máximo” ignora o art. 62. “45 km/h” usa os 90 dos demais veículos. “50 km/h” usa a pista simples. “placa específica” contraria a regra geral do art. 62.",
      pegadinha: "Usar o limite de outro tipo de pista.",
      conhecimento: "O art. 62 ressalva as condições operacionais de trânsito e da via.",
    },
    {
      topico: "Classificação das vias",
      subassunto: "Via de trânsito rápido",
      dificuldade: 4,
      raciocinio: "Sem interseção em nível e sem acesso direto aos lotes.",
      enunciado:
        "Uma via urbana tem acessos especiais, trânsito livre, nenhuma interseção em nível, nenhum acesso direto aos lotes lindeiros e nenhuma travessia de pedestres em nível. Sem placa de velocidade, trata-se de",
      alternativas: [
        "via arterial, com limite de 60 km/h",
        "via coletora, com limite de 40 km/h",
        "rodovia de pista dupla, com limite de 110 km/h",
        "via de trânsito rápido, com limite de 80 km/h",
        "via local, com limite de 30 km/h",
      ],
      correta: 3,
      explicacao: "Essas características definem a via de trânsito rápido no Anexo I, e o art. 61 fixa 80 km/h para ela.",
      explicacaoErradas:
        "“via arterial” tem interseções em nível e acesso aos lotes. “via coletora” distribui o trânsito. “rodovia” é via rural. “via local” serve ao acesso local.",
      pegadinha: "Confundir via de trânsito rápido com rodovia.",
      conhecimento: "Lote lindeiro é o que fica ao longo da via.",
    },
    {
      topico: "Classificação das vias",
      subassunto: "Rodovia e estrada",
      dificuldade: 5,
      raciocinio: "Pavimento separa rodovia de estrada.",
      enunciado:
        "Uma via rural de terra, sem pavimento e sem sinalização de velocidade, liga duas fazendas a uma rodovia. Quanto à classificação e aos limites, ela é",
      alternativas: [
        "rodovia, com máxima de 90 km/h e mínima de 45 km/h",
        "via local, com máxima de 30 km/h e mínima de 15 km/h",
        "rodovia de pista simples, com máxima de 100 km/h e mínima de 50 km/h",
        "estrada, com máxima de 80 km/h e sem velocidade mínima definida em lei",
        "estrada, com máxima de 60 km/h e mínima de 30 km/h",
      ],
      correta: 4,
      explicacao: "Pelo Anexo I, estrada é via rural não pavimentada. O art. 61 dá 60 km/h, e o art. 62 dá a metade como mínima.",
      explicacaoErradas:
        "“rodovia” exige pavimento. “via local” é via urbana. “máxima de 80 km/h” erra o valor, e a mínima decorre do art. 62.",
      pegadinha: "Chamar de rodovia qualquer via fora da cidade.",
      conhecimento: "Via rural é gênero, e rodovia e estrada são as suas espécies.",
    },
    {
      topico: "Disposições preliminares",
      subassunto: "Conceito de trânsito",
      dificuldade: 4,
      raciocinio: "O conceito cobre pessoas, veículos e animais.",
      enunciado:
        "Em um trecho, há um rebanho conduzido por um guia, um pedestre parado em uma travessia e um caminhão em operação de descarga. Pelo art. 1º, § 1º, do CTB, há trânsito",
      alternativas: [
        "apenas no caso do caminhão, porque o CTB trata só de veículos",
        "nos três casos, pois a lei abrange pessoas, veículos e animais",
        "apenas nos casos com movimento, o que exclui a operação de descarga",
        "só nos casos do rebanho e do caminhão, pois o pedestre não usa a via",
        "só quando há condutor habilitado, o que exclui o rebanho e o pedestre",
      ],
      correta: 1,
      explicacao:
        "Trânsito é o uso das vias por pessoas, veículos e animais, isolados ou em grupos, conduzidos ou não, para circulação, parada, estacionamento e carga ou descarga.",
      explicacaoErradas:
        "“só de veículos” esquece pessoas e animais. “com movimento” esquece parada e carga ou descarga. “o pedestre não usa a via” contraria a lei. “condutor habilitado” não faz parte do conceito.",
      pegadinha: "Reduzir trânsito a veículo em movimento.",
      conhecimento: "O art. 3º alcança veículos nacionais e estrangeiros.",
    },
  ],
};
