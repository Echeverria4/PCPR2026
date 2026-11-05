import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-21",
  resumo: {
    ideia:
      "A Resolução 968/2022 regula a identificação de veículos do art. 114 do CTB: o que é gravado, onde, quem pode regravar e como regularizar motores.",
    itens: [
      {
        termo: "VIN",
        faz: "17 caracteres em três seções: WMI (3), VDS (6) e VIS (8).",
        pista: "O VIS é o que aparece nos vidros.",
      },
      {
        termo: "Ano-modelo",
        faz: "É o décimo caractere do VIN. Pode ser o ano anterior, o mesmo ou o seguinte ao de fabricação.",
      },
      {
        termo: "ETA",
        faz: "Etiqueta autocolante que se destrói ao ser removida. Traz pelo menos o VIS.",
      },
      {
        termo: "Regravação",
        faz: "Exige autorização prévia, razão justificada e empresa credenciada. Usa superfície virgem e o caractere “R”.",
      },
      {
        termo: "Anulação",
        faz: "A gravação adulterada ou deteriorada recebe um “A” no início e outro no final.",
      },
      {
        termo: "Erro de fábrica",
        faz: "O fabricante pode corrigir o próprio erro e usa a partícula “RF”.",
      },
      {
        termo: "Troca de motor",
        faz: "60 dias para regularizar a numeração, contados da nota fiscal da instalação ou da declaração da frotista.",
      },
      {
        termo: "Câmbio, eixos, cabine e carroceria",
        faz: "A troca é comunicada ao órgão. A nota fiscal vai em até 30 dias.",
      },
      {
        termo: "Motor adulterado",
        faz: "Vai de imediato à autoridade policial. Regulariza por documento dela (DA/UF) ou decisão judicial (DJ/UF).",
      },
      {
        termo: "Gravação do órgão",
        faz: "9 dígitos: sigla da UF com sequencial de 7 dígitos, em superfície virgem do bloco.",
      },
    ],
    cuidado: "A regravação mantém a identificação anterior, inclusive o ano de fabricação (art. 114, § 2º, do CTB).",
  },
  questoes: [
    {
      topico: "VIN",
      subassunto: "Seções",
      dificuldade: 4,
      raciocinio: "Vidro e etiqueta usam a última seção.",
      enunciado:
        "Na vistoria, o agente confere os caracteres marcados nos vidros de um automóvel. Pelos arts. 3º e 9º da Resolução Contran 968/2022, essa marcação traz",
      alternativas: [
        "o WMI, com 3 caracteres",
        "o VDS, com 6 caracteres",
        "o NIEV, com 17 caracteres",
        "o NICV, com 21 caracteres",
        "o VIS, com 8 caracteres",
      ],
      correta: 4,
      explicacao: "O art. 9º manda marcar o VIS nos vidros. O art. 3º, IV, define o VIS como a última seção do VIN, com 8 caracteres.",
      explicacaoErradas:
        "“WMI” identifica o fabricante e “VDS” descreve o veículo, mas nenhum dos dois vai aos vidros. “NIEV” é de carroceria implementada. “NICV” é de carroceria de ônibus.",
      pegadinha: "Pensar que o vidro traz o VIN completo.",
      conhecimento: "A marcação vai em um para-brisa, em um vidro traseiro e em pelo menos dois vidros de cada lado, quando existentes.",
    },
    {
      topico: "VIN",
      subassunto: "Ano-modelo",
      dificuldade: 4,
      raciocinio: "Uma casa para cada lado do ano de fabricação.",
      enunciado:
        "Um veículo tem 2025 como ano de fabricação. Pelo art. 5º, § 4º, da Resolução Contran 968/2022, o ano-modelo pode ser",
      alternativas: [
        "2024, 2025 ou 2026",
        "somente 2025 ou 2026",
        "somente 2025",
        "2025, 2026 ou 2027",
        "de 2023 a 2027",
      ],
      correta: 0,
      explicacao: "O ano-modelo só pode ser imediatamente anterior, igual ou imediatamente posterior ao ano de fabricação.",
      explicacaoErradas:
        "“somente 2025 ou 2026” esquece o ano anterior, que a norma admite. “somente 2025” iguala os dois. “2027” e “2023” saem do intervalo de um ano para cada lado.",
      pegadinha: "Achar que o ano-modelo nunca pode ser anterior.",
      conhecimento: "O ano-modelo corresponde ao décimo caractere do VIN, que pode ser alfanumérico.",
    },
    {
      topico: "Regravação",
      subassunto: "Erro de fábrica",
      dificuldade: 5,
      raciocinio: "Quem errou corrige, com partícula própria.",
      enunciado:
        "Um fabricante percebe que gravou incorretamente o VIN de um veículo. Pelo art. 15 da Resolução Contran 968/2022, a correção",
      alternativas: [
        "depende de empresa credenciada e usa o caractere “R” depois do VIN",
        "depende de autorização do Detran e usa a partícula “RM” depois do VIN",
        "é feita pelo fabricante, que anula com “A” e remarca com a partícula “RF”",
        "é feita pelo fabricante sobre a gravação errada, sem nenhuma anulação",
        "só pode ser feita por ordem judicial, com o diferencial DJ/UF no cadastro",
      ],
      correta: 2,
      explicacao: "O fabricante está autorizado a corrigir. A gravação errada recebe “A” no início e no fim, e o VIN correto vai em superfície virgem seguido de “RF”.",
      explicacaoErradas:
        "“R” é da regravação do art. 14. “RM” indica motor remanufaturado de fábrica. “sobre a gravação errada” contraria a superfície virgem do § 4º. “DJ/UF” é da regularização de motor.",
      pegadinha: "Confundir as partículas R, RF e RM.",
      conhecimento: "No cadastro, o VIN corrigido consta com a partícula “RF”.",
    },
    {
      topico: "Agregados",
      subassunto: "Prazos",
      dificuldade: 5,
      raciocinio: "Motor tem prazo próprio, maior que o dos demais agregados.",
      enunciado:
        "Um proprietário trocou o motor e a caixa de câmbio na mesma oficina. Pelos arts. 16 e 27 da Resolução Contran 968/2022, contados dos marcos de cada artigo, os prazos para regularizar o motor e para entregar a nota fiscal do câmbio são, respectivamente,",
      alternativas: [
        "30 e 60 dias",
        "60 e 30 dias",
        "30 e 30 dias",
        "60 e 60 dias",
        "90 e 30 dias",
      ],
      correta: 1,
      explicacao: "O art. 27 dá 60 dias para o motor. O art. 16, § 1º, dá no máximo 30 dias para o comprovante do agregado.",
      explicacaoErradas:
        "“30 e 60” inverte os prazos. “30 e 30” e “60 e 60” igualam regras diferentes. “90” não aparece nesses artigos.",
      pegadinha: "Inverter os dois prazos.",
      conhecimento: "O órgão de trânsito tem até 30 dias, contados da comunicação, para registrar a alteração no Renavam.",
    },
    {
      topico: "Motor",
      subassunto: "Adulteração",
      dificuldade: 5,
      raciocinio: "DA é decisão administrativa. DJ é decisão judicial.",
      enunciado:
        "A vistoria constata motor com numeração removida. O veículo é encaminhado à autoridade policial, e depois um juiz determina a regularização. Pelos arts. 31 e 32 da Resolução Contran 968/2022, o cadastro estadual receberá, depois do número do motor,",
      alternativas: [
        "a partícula “RM”, própria de motor remanufaturado",
        "o diferencial DA/UF, mesmo com a decisão judicial",
        "a partícula “REM”, por ser motor regravado",
        "o diferencial DJ/UF, em razão da decisão judicial",
        "a partícula “RF”, própria de correção de fábrica",
      ],
      correta: 3,
      explicacao: "O art. 31, II, manda encaminhar o veículo à autoridade policial. O art. 32, II, regulariza por determinação judicial, com o diferencial DJ/UF.",
      explicacaoErradas:
        "“DA/UF” segue documento da autoridade policial. “RM” e “RF” são marcações do fabricante. “REM” é referência de ocorrências anteriores à Resolução 282/2008, no art. 30.",
      pegadinha: "Trocar DA por DJ.",
      conhecimento: "Adulterar sinal identificador de veículo é crime do art. 311 do Código Penal.",
    },
    {
      topico: "Motor",
      subassunto: "Gravação",
      dificuldade: 5,
      raciocinio: "Numeração removida exige perícia antes da nova gravação.",
      enunciado:
        "Um bloco de motor teve a numeração original removida mecanicamente, e o caso será resolvido com nova gravação fornecida pelo órgão estadual. Pelo art. 34 da Resolução Contran 968/2022, essa gravação",
      alternativas: [
        "tem 17 caracteres, e o proprietário escolhe a oficina que fará o serviço",
        "repete o número antigo com “R”, no mesmo local da gravação original",
        "tem 9 dígitos, e pode ser feita sem perícia se houver nota fiscal do motor",
        "tem 7 dígitos, todos sequenciais, sem indicar a UF que autorizou o serviço",
        "tem 9 dígitos, em superfície virgem, e só é autorizada depois de perícia",
      ],
      correta: 4,
      explicacao: "São 2 dígitos da UF e 7 do sequencial, em superfície virgem do bloco, por empresa autorizada. Com a numeração removida mecanicamente, o § 2º exige perícia da autoridade policial.",
      explicacaoErradas:
        "“17 caracteres” é o VIN. “oficina” e “sem perícia” contrariam os §§ 1º e 2º. “com R” é da regravação do art. 14. “7 dígitos” esquece a sigla da UF.",
      pegadinha: "Dispensar a perícia por causa da nota fiscal.",
      conhecimento: "O sequencial começa em 0000001 e é fornecido pelo órgão estadual ou do DF.",
    },
    {
      topico: "ETA",
      subassunto: "Reposição",
      dificuldade: 4,
      raciocinio: "Vistoria, autorização, concessionária.",
      enunciado:
        "A ETA da coluna da porta de um veículo foi danificada. Pelos arts. 18, 20 e 24 da Resolução Contran 968/2022, a reposição exige",
      alternativas: [
        "vistoria e autorização de 60 dias, com pedido por meio de concessionária",
        "somente a compra em loja de autopeças, com a nota fiscal em nome do dono",
        "autorização judicial, com a etiqueta nova entregue pelo órgão de trânsito",
        "autorização de 30 dias, com pedido feito diretamente ao fabricante da marca",
        "perícia policial, com a nova etiqueta afixada por empresa de regravação",
      ],
      correta: 0,
      explicacao: "A autorização sai depois da vistoria, vale 60 dias e o pedido corre por concessionária autorizada escolhida pelo proprietário.",
      explicacaoErradas:
        "“autopeças” e “judicial” não constam desse procedimento. “30 dias” é o prazo para regularizar depois da nota fiscal. “diretamente ao fabricante” contraria o art. 20. “perícia policial” não é exigência da reposição.",
      pegadinha: "Trocar os 60 dias da autorização pelos 30 dias da regularização.",
      conhecimento: "A instalação cabe ao órgão de trânsito do Estado ou do DF ou à concessionária da marca.",
    },
  ],
};
