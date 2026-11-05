import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-15",
  resumo: {
    ideia:
      "A Resolução 735/2018 regula as cegonhas: CTV leva veículos e chassis, e CTVP leva veículos acabados e cargas sobre paletes ou racks. O ponto central é quando a AET é exigida.",
    itens: [
      {
        termo: "AET por altura",
        faz: "Até 4,70 m: dispensada. De 4,71 m a 4,95 m: dispensa a critério do órgão rodoviário. Limite: 4,95 m.",
        pista: "A dispensa exige largura e comprimento dentro do art. 3º.",
      },
      {
        termo: "Largura",
        faz: "2,60 m. Até 3,00 m só no transporte de ônibus, chassis de ônibus e de caminhões.",
      },
      {
        termo: "Comprimento",
        faz: "Simples: 14 m. Articulado ou com reboque: até 23 m.",
        pista: "No articulado, entre eixos extremos até 18 m.",
      },
      {
        termo: "Velocidade e horário",
        faz: "Máxima de 80 km/h, do amanhecer ao pôr do sol.",
      },
      {
        termo: "Até 19,80 m",
        faz: "Sem restrição de horário.",
      },
      {
        termo: "Acima de 19,80 m à noite",
        faz: "Só em pista dupla com separador e duas ou mais faixas. Em pista simples, só vazia ou com carga apenas na plataforma inferior.",
      },
      {
        termo: "AET",
        faz: "Validade máxima de 1 ano, com laudo técnico e ART de engenheiro mecânico ou automotivo.",
      },
      {
        termo: "Responsabilidade",
        faz: "O proprietário responde por danos à via, à sinalização e a terceiros.",
      },
      {
        termo: "Ancoragem",
        faz: "Todas as rodas presas com cintas de resistência mínima do dobro do peso do veículo.",
      },
      {
        termo: "CTV com paletes",
        faz: "Pode levar paletes, mas nunca veículos e outra carga ao mesmo tempo.",
      },
    ],
    cuidado: "Passar de 19,80 m não proíbe viajar à noite: depende da pista e da carga.",
  },
  questoes: [
    {
      topico: "AET",
      subassunto: "Altura",
      dificuldade: 5,
      raciocinio: "Há três faixas de altura.",
      enunciado:
        "Uma CTV com 4,80 m de altura, dentro dos limites de largura e comprimento do art. 3º, circula sem AET em rodovia federal. Pela Resolução Contran 735/2018, a situação é",
      alternativas: [
        "regular, pois a dispensa alcança qualquer altura até 4,95 m",
        "regular só se houver deliberação do órgão rodoviário dispensando a AET",
        "irregular em qualquer caso, pois a dispensa termina em 4,70 m",
        "irregular em qualquer caso, pois o limite absoluto da altura é 4,70 m",
        "regular se o laudo do engenheiro atestar a estabilidade do conjunto carregado",
      ],
      correta: 1,
      explicacao: "Até 4,70 m a dispensa é automática. Entre 4,71 m e 4,95 m, ela depende de deliberação e critério dos órgãos executivos rodoviários, pelo art. 1º, § 4º.",
      explicacaoErradas:
        "“qualquer altura até 4,95 m” apaga a deliberação. “irregular em qualquer caso” ignora o § 4º. “limite absoluto” erra: a altura máxima admitida é 4,95 m. “laudo” não substitui a deliberação.",
      pegadinha: "Unir as duas faixas.",
      conhecimento: "A altura de 4,95 m também depende de admissão a critério dos órgãos rodoviários, pelo art. 3º, I.",
    },
    {
      topico: "Horário",
      subassunto: "Noite",
      dificuldade: 5,
      raciocinio: "Olhe comprimento, pista e carga.",
      enunciado:
        "Às 21 h, em rodovia de pista simples, a PRF aborda uma combinação com 22 m, carregada nas plataformas inferior e superior. Pelo art. 4º da Resolução Contran 735/2018, o trânsito",
      alternativas: [
        "é regular, pois a noite só é vedada acima de 23 m",
        "é regular, se toda a sinalização estiver ativada",
        "é regular, pois combinações com AET não têm restrição de horário",
        "é irregular, pois a carga não está apenas na plataforma inferior",
        "é irregular, pois nenhuma combinação pode circular à noite",
      ],
      correta: 3,
      explicacao: "Acima de 19,80 m, em pista simples, a noite só é permitida vazia ou com carga apenas na plataforma inferior, ancorada e com toda a sinalização ativada.",
      explicacaoErradas:
        "“acima de 23 m” erra o marco. “toda a sinalização” é só parte da exigência. “não têm restrição” ignora o caput. “nenhuma combinação” ignora os §§ 1º a 3º.",
      pegadinha: "Lembrar só da sinalização.",
      conhecimento: "O § 4º admite horários distintos em trechos específicos, por proposta da autoridade com circunscrição sobre a via.",
    },
    {
      topico: "Horário",
      subassunto: "Até 19,80 m",
      dificuldade: 4,
      raciocinio: "O marco é 19,80 m.",
      enunciado:
        "Uma combinação com 19 m circula às 23 h em pista simples, carregada nas duas plataformas, a 80 km/h. Pelo art. 4º da Resolução Contran 735/2018, a conduta é",
      alternativas: [
        "regular, pois até 19,80 m não há restrição de horário",
        "irregular, pois a noite só é permitida em pista dupla",
        "irregular, pois a velocidade máxima à noite é de 60 km/h",
        "irregular, pois a combinação carregada só roda até o pôr do sol",
        "regular só com autorização especial própria para o trânsito noturno",
      ],
      correta: 0,
      explicacao: "O § 1º afasta a restrição de horário para combinações de no máximo 19,80 m. A velocidade máxima de 80 km/h foi respeitada.",
      explicacaoErradas:
        "“pista dupla” e “até o pôr do sol” valem para quem passa de 19,80 m. “60 km/h” não está no artigo. “autorização especial” para a noite não existe aqui.",
      pegadinha: "Aplicar a regra dos maiores a quem tem até 19,80 m.",
      conhecimento: "Acima de 19,80 m, o art. 3º, IX, exige sinalização especial na traseira do conjunto.",
    },
    {
      topico: "Limites",
      subassunto: "Largura",
      dificuldade: 4,
      raciocinio: "Os 3 m servem a um transporte específico.",
      enunciado:
        "Uma CTV que transporta automóveis de passeio tem 2,90 m de largura. Pelo art. 3º, II, da Resolução Contran 735/2018,",
      alternativas: [
        "está regular, pois todas as CTV podem ter até 3,00 m",
        "está regular, pois a largura só é medida em carga paletizada",
        "está regular, se a AET tiver sido expedida há menos de um ano",
        "está regular, pois o art. 3º só limita a largura da CTVP",
        "está irregular, pois os 3,00 m não valem para essa CTV",
      ],
      correta: 4,
      explicacao: "A regra geral é 2,60 m. Até 3,00 m só no transporte de ônibus, chassis de ônibus e de caminhões. Automóveis de passeio não entram.",
      explicacaoErradas:
        "“todas as CTV” amplia a exceção. “só é medida” e “só limita” criam restrições inexistentes. “menos de um ano” é a validade da AET, que não muda a largura.",
      pegadinha: "Generalizar os 3 metros.",
      conhecimento: "O art. 8º proíbe conceder AET à combinação que não atenda integralmente à resolução.",
    },
    {
      topico: "Carga",
      subassunto: "Art. 11",
      dificuldade: 5,
      raciocinio: "Pode ser um ou outro, não os dois.",
      enunciado:
        "Uma CTV de caminhão-trator 6x2 e semirreboque novo de dois eixos, construída para automóveis, é abordada levando três automóveis e paletes ao mesmo tempo. Pelo art. 11 da Resolução Contran 735/2018,",
      alternativas: [
        "a carga é regular, pois essa CTV pode levar paletes",
        "a carga é regular, se os paletes estiverem na plataforma inferior",
        "a carga é irregular, pois o espaço não pode ser compartilhado ao mesmo tempo",
        "a carga é irregular, pois nenhuma CTV pode levar palete ou rack em viagem alguma",
        "a carga é regular, se a CTV tiver sido transformada em CTVP antes da viagem",
      ],
      correta: 2,
      explicacao: "O art. 11 permite levar outras cargas paletizadas nessa CTV, mas o § 1º veda o compartilhamento simultâneo de espaço entre veículos e outra carga.",
      explicacaoErradas:
        "“pode levar paletes” esquece o § 1º. “plataforma inferior” é regra da CTVP e do trânsito noturno. “nenhuma CTV” contraria o caput. “transformada” é proibida pelo § 2º.",
      pegadinha: "Parar no caput.",
      conhecimento: "Na CTVP, a carga tem limites próprios: 10 m de comprimento, 2,40 m de largura e 2,25 m de altura.",
    },
    {
      topico: "AET",
      subassunto: "Validade",
      dificuldade: 4,
      raciocinio: "Quem usa a AET responde pelos danos.",
      enunciado:
        "Uma CTV com AET bate em uma passarela de rodovia cujo gabarito não permitia a passagem. Sobre a AET e seus efeitos, a Resolução Contran 735/2018 estabelece que",
      alternativas: [
        "a AET vale 2 anos, e o órgão que a expediu responde pela via escolhida",
        "a AET vale até 1 ano, e o proprietário responde pelos danos e pelo uso indevido da via",
        "a AET vale até 1 ano, e o engenheiro do laudo responde pelos danos causados a terceiros",
        "a AET não tem validade fixa, e o condutor responde sozinho pelos danos à via",
        "a AET vale até 5 anos, e o seguro obrigatório cobre os danos à sinalização",
      ],
      correta: 1,
      explicacao: "O art. 6º fixa validade máxima de 1 ano. O art. 9º faz o proprietário responder pelos danos à via, à sinalização e a terceiros e pelo uso indevido de vias sem gabarito.",
      explicacaoErradas:
        "“2 anos” e “5 anos” erram a validade. “órgão que a expediu” e “engenheiro do laudo” trocam o responsável. “condutor responde sozinho” contraria o art. 9º.",
      pegadinha: "Achar que a autorização transfere a responsabilidade.",
      conhecimento: "O laudo técnico deve vir com ART de engenheiro mecânico ou automotivo.",
    },
  ],
};
