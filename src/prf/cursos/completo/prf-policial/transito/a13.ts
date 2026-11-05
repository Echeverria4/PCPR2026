import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-13",
  resumo: {
    ideia:
      "A Resolução 993/2023 reúne os equipamentos obrigatórios da frota. O texto principal traz as regras gerais, e o Anexo I lista os equipamentos por tipo de veículo.",
    itens: [
      {
        termo: "Art. 2º",
        faz: "Alcança automóveis, caminhões, ônibus, tratores, reboques, motos, ciclomotores, triciclos e quadriciclos.",
      },
      {
        termo: "Arts. 3º e 9º",
        faz: "Anexo I: equipamentos. Anexo II: requisitos técnicos. Os anexos ficam no site do órgão máximo.",
      },
      {
        termo: "Art. 4º",
        faz: "Inacabados, incompletos, mobilidade individual autopropelida e bicicleta com motor elétrico auxiliar têm regulamentação específica.",
      },
      {
        termo: "Art. 6º",
        faz: "Veículo registrado em outro país atende à resolução, salvo dispensa em convenção ou acordo ratificado.",
      },
      {
        termo: "Art. 7º",
        faz: "A resolução não se aplica ao veículo destinado à exportação.",
      },
      {
        termo: "Art. 8º",
        faz: "O descumprimento leva às penalidades do art. 230 do CTB, no que couber.",
        pista: "Art. 230, IX: grave, multa e retenção para regularização.",
      },
      {
        termo: "CTB, art. 105",
        faz: "Cinto, registrador, encosto de cabeça, controle de emissões e ruído, air bag frontal e luzes de rodagem diurna.",
      },
      {
        termo: "Estepe, macaco e chave",
        faz: "Dispensados em pneus que rodam sem ar, ônibus e micro-ônibus urbanos, caminhões de lixo e de concreto.",
      },
      {
        termo: "Bicicleta",
        faz: "Campainha, espelho esquerdo e sinalização noturna dianteira, traseira, lateral e nos pedais.",
        pista: "Em competição, espelho e campainha ficam dispensados.",
      },
    ],
    cuidado: "A resolução é de 15/06/2023 e entrou em vigor em 03/07/2023: não confunda as duas datas.",
  },
  questoes: [
    {
      topico: "Regras gerais",
      subassunto: "Veículo estrangeiro",
      dificuldade: 4,
      raciocinio: "A regra geral vale, com a ressalva dos tratados.",
      enunciado:
        "Em rodovia de fronteira, a PRF aborda um veículo registrado em outro país. Quanto aos equipamentos obrigatórios, o art. 6º da Resolução Contran 993/2023 determina que ele",
      alternativas: [
        "fica dispensado de todo equipamento, por estar registrado fora do território nacional",
        "só precisa portar o documento de origem, sem conferir o Anexo I",
        "segue as regras do país de registro, que prevalecem sobre as do Contran brasileiro",
        "fica sob a mesma regra da exportação, pois a norma não alcança veículo estrangeiro",
        "deve atender à resolução, salvo dispensa em convenção ou acordo ratificado",
      ],
      correta: 4,
      explicacao: "O art. 6º manda o veículo registrado em outro país atender à resolução, com a ressalva das dispensas previstas em convenções e acordos ratificados.",
      explicacaoErradas:
        "“dispensado de todo equipamento” e “documento de origem” apagam a regra. “prevalecem” inverte a ordem: a exceção vem do tratado ratificado. “regra da exportação” é a do art. 7º, para outro caso.",
      pegadinha: "Achar que placa estrangeira dispensa os equipamentos.",
      conhecimento: "Pelo art. 3º, § 2º, cabe à fiscalização constatar as condições de funcionamento dos equipamentos.",
    },
    {
      topico: "Regras gerais",
      subassunto: "Fora da resolução",
      dificuldade: 5,
      raciocinio: "Separe “não se aplica” de “regulamentação específica”.",
      enunciado:
        "Uma montadora consulta a Resolução Contran 993/2023 sobre três casos: (I) lote destinado à exportação; (II) veículos inacabados; (III) bicicletas com motor elétrico auxiliar. Pelos arts. 4º e 7º,",
      alternativas: [
        "vale para I e II, e o caso III fica fora por não ser veículo automotor",
        "não se aplica a I, e II e III têm regulamentação específica",
        "vale para todos, pois o art. 2º alcança toda a frota em circulação no país",
        "não se aplica a II, e I e III seguem o Anexo I sem nenhuma diferença",
        "vale para III, e I e II dependem de regulamentação específica do Contran",
      ],
      correta: 1,
      explicacao: "O art. 7º afasta a resolução dos veículos destinados à exportação. O art. 4º remete inacabados, incompletos e bicicletas com motor elétrico auxiliar à regulamentação específica.",
      explicacaoErradas:
        "“vale para I e II” e “vale para III” trocam os casos. “vale para todos” ignora as exceções. “não se aplica a II” confunde exportação com veículo inacabado.",
      pegadinha: "Tratar os três casos como iguais.",
      conhecimento: "O art. 4º também remete à regulamentação específica os equipamentos de mobilidade individual autopropelidos.",
    },
    {
      topico: "Penalidade",
      subassunto: "Art. 230",
      dificuldade: 4,
      raciocinio: "Equipamento inoperante cai no art. 230, IX.",
      enunciado:
        "Na abordagem, a PRF constata que o velocímetro de um caminhão está inoperante. Pela Resolução Contran 993/2023, combinada com o art. 230, IX, do CTB, a conduta é infração",
      alternativas: [
        "gravíssima, com multa e remoção do veículo ao depósito",
        "grave, com multa e apreensão do veículo",
        "média, com multa e recolhimento do CRLV-e",
        "grave, com multa e retenção para regularização",
        "leve, com multa e advertência por escrito",
      ],
      correta: 3,
      explicacao: "O art. 230, IX, trata de equipamento obrigatório ineficiente ou inoperante: infração grave, multa e retenção do veículo para regularização.",
      explicacaoErradas:
        "“gravíssima” e “remoção” são do bloco dos incisos I a VI. “apreensão” não é prevista aqui. “média” e “leve” erram a natureza.",
      pegadinha: "Trocar retenção por remoção.",
      conhecimento: "O art. 8º da resolução remete às penalidades do art. 230 do CTB, no que couber.",
    },
    {
      topico: "Anexo I",
      subassunto: "Estepe, macaco e chave",
      dificuldade: 4,
      raciocinio: "A dispensa olha o tipo de operação do veículo.",
      enunciado:
        "Entre os veículos abaixo, qual está dispensado da roda sobressalente, do macaco e da chave de roda?",
      alternativas: [
        "ônibus do sistema de transporte urbano",
        "automóvel de uso particular em viagem longa",
        "caminhão-trator em viagem interestadual",
        "micro-ônibus de turismo em linha rodoviária",
        "ônibus escolar em estrada não pavimentada",
      ],
      correta: 0,
      explicacao: "A dispensa alcança ônibus e micro-ônibus do sistema urbano, caminhões de lixo e de concreto e veículos com pneus que rodam sem ar ou enchimento automático emergencial.",
      explicacaoErradas:
        "“viagem longa”, “interestadual”, “linha rodoviária” e “não pavimentada” descrevem usos sem dispensa: o veículo circula longe de socorro rápido.",
      pegadinha: "Achar que todo ônibus é dispensado.",
      conhecimento: "O caminhão de lixo também entra na dispensa por sua operação específica.",
    },
    {
      topico: "Bicicletas",
      subassunto: "Art. 105, VI",
      dificuldade: 5,
      raciocinio: "O espelho é do lado esquerdo.",
      enunciado:
        "Uma bicicleta de aro 29, usada em via pública fora de competição, deve ter, pelo art. 105, VI, do CTB e pela Resolução Contran 993/2023:",
      alternativas: [
        "espelho do lado direito, buzina elétrica e farol branco alimentado por bateria",
        "espelho dos dois lados, campainha e sinalização noturna só dianteira e traseira",
        "campainha, espelho esquerdo e sinalização noturna dianteira, traseira, lateral e nos pedais",
        "campainha, espelho do lado direito e sinalização noturna dianteira, traseira, lateral e nos pedais",
        "apenas a sinalização noturna, pois espelho e campainha só valem para aro inferior a vinte",
      ],
      correta: 2,
      explicacao: "O art. 105, VI, exige campainha, sinalização noturna dianteira, traseira, lateral e nos pedais, e espelho retrovisor do lado esquerdo.",
      explicacaoErradas:
        "“lado direito” erra o espelho. “dois lados” e “só dianteira e traseira” mudam o texto. “aro inferior a vinte” inverte: a exigência da resolução é para aro superior a vinte.",
      pegadinha: "Trocar o lado do espelho.",
      conhecimento: "Na bicicleta de competição, a resolução dispensa espelho e campainha.",
    },
    {
      topico: "Anexo I",
      subassunto: "Moto x ciclomotor",
      dificuldade: 4,
      raciocinio: "Compare a lista da moto com a do ciclomotor.",
      enunciado:
        "Na lista de equipamentos obrigatórios, qual destes itens é exigido da motocicleta, mas não do ciclomotor?",
      alternativas: [
        "espelhos retrovisores dos dois lados",
        "farol dianteiro branco ou amarelo",
        "lanterna vermelha na parte traseira",
        "velocímetro e buzina em funcionamento",
        "lanterna de freio",
      ],
      correta: 4,
      explicacao: "A lista do ciclomotor é mais curta: ela não traz a lanterna de freio, presente na lista da motocicleta.",
      explicacaoErradas:
        "“espelhos”, “farol”, “lanterna vermelha” e “velocímetro” aparecem nas duas listas.",
      pegadinha: "Confundir lanterna traseira com lanterna de freio.",
      conhecimento: "Ambos precisam de dispositivo de controle de ruído.",
    },
  ],
};
