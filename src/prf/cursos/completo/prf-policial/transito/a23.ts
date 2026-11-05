import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-23",
  resumo: {
    ideia:
      "Duas normas fecham a matéria. A Resolução 911/2022 cuida do trânsito de veículos novos antes do registro, e a 926/2022 padroniza a autuação de infrações sem uso de veículo.",
    itens: [
      {
        termo: "Novo para cliente final",
        faz: "Porta DANFe ou documento alfandegário e vai só da origem ao órgão de trânsito do Município de destino.",
      },
      {
        termo: "Prazo",
        faz: "15 dias consecutivos, ou 30 nos Estados da Região Norte, contados da saída que consta no DANFe.",
      },
      {
        termo: "Inacabado",
        faz: "Só circula de dia, entre os pontos previstos, como fabricante, encarroçador e cliente final.",
      },
      {
        termo: "ATV",
        faz: "Autoriza o transporte remunerado em novo acabado. Vale 15 dias e pode ser prorrogada por força maior.",
        pista: "Em veículo inacabado, o transporte remunerado é vedado.",
      },
      {
        termo: "Remonta",
        faz: "Inacabado sobre inacabado. Conjunto de até 2,60 m de largura, 4,40 m de altura e 14,00 m de comprimento.",
      },
      {
        termo: "Exportação",
        faz: "Comunicação aos órgãos do trajeto com 5 dias úteis de antecedência, com DANFe ou fatura do fabricante a bordo.",
      },
      {
        termo: "Enquadramento da 911",
        faz: "À noite: art. 187, I. Fora do prazo ou do itinerário: art. 230, V. Sem documento: art. 232. Sem capacete: art. 169.",
      },
      {
        termo: "Resolução 926",
        faz: "Vale para infrações de pessoas físicas ou jurídicas sem uso de veículo, como as dos arts. 95, 243, 245 e 246.",
      },
      {
        termo: "Notificação da autuação",
        faz: "Sai em até 30 dias da constatação, com prazo de defesa não inferior a 30 dias.",
      },
      {
        termo: "AIT assinado",
        faz: "Vale como notificação da autuação, desde que traga o prazo de defesa.",
      },
      {
        termo: "Contagem",
        faz: "Dias consecutivos. Exclui o dia da notificação e inclui o do vencimento.",
        pista: "Sem expediente no último dia, o prazo vai ao primeiro dia útil.",
      },
    ],
    cuidado: "O PDF desta aula ainda traz a Resolução 789/2020, revogada pela 1.020/2025. Por isso ela ficou fora do resumo e das questões.",
  },
  questoes: [
    {
      topico: "Veículo novo",
      subassunto: "Prazo",
      dificuldade: 4,
      raciocinio: "A Região Norte tem prazo próprio, e o marco é a saída.",
      enunciado:
        "Um caminhão novo, ainda sem registro, vendido a cliente final, sai de uma concessionária de Belém rumo a um Município do interior do Pará, com DANFe que traz a data de saída. Pelo art. 4º da Resolução Contran 911/2022, o trânsito é autorizado",
      alternativas: [
        "por 15 dias consecutivos, contados da data de emissão da nota",
        "por 30 dias úteis, contados da data de saída do veículo",
        "por 15 dias úteis, contados da data da venda ao cliente",
        "por 60 dias consecutivos, contados da emissão do DANFe",
        "por 30 dias consecutivos, contados da data de saída no DANFe",
      ],
      correta: 4,
      explicacao: "O § 1º dá 30 dias consecutivos nos Estados da Região Norte. O § 2º conta o prazo da data de saída que consta no DANFe.",
      explicacaoErradas:
        "“15 dias consecutivos” é a regra das demais regiões. “dias úteis” contraria o texto, que fala em dias consecutivos. “60 dias” não existe nesse artigo. “data da venda” não é o marco do § 2º.",
      pegadinha: "Aplicar os 15 dias sem olhar a região.",
      conhecimento: "Na compra por meio eletrônico, o prazo conta da efetiva entrega do veículo.",
    },
    {
      topico: "Veículo novo",
      subassunto: "Inacabado",
      dificuldade: 5,
      raciocinio: "O documento está certo. O problema é o horário.",
      enunciado:
        "Às 22h, a PRF aborda um chassi novo de caminhão, inacabado, que segue do fabricante ao encarroçador com DANFe regular. Pelos arts. 2º e 11 da Resolução Contran 911/2022, a conduta é enquadrada",
      alternativas: [
        "no art. 187, I, do CTB",
        "no art. 230, V, do CTB",
        "no art. 230, IX, do CTB",
        "no art. 232 do CTB",
        "no art. 169 do CTB",
      ],
      correta: 0,
      explicacao: "Veículo inacabado circula em período diurno (art. 2º, § 1º). O art. 11, II, leva o trânsito noturno de inacabado ou remonta ao art. 187, I.",
      explicacaoErradas:
        "“art. 230, V” é para prazo, documento fiscal, finalidade ou itinerário. “art. 230, IX” é para falta de equipamento. “art. 232” é para falta de documento. “art. 169” é para o capacete da remonta.",
      pegadinha: "Achar que o DANFe regular resolve tudo.",
      conhecimento: "O art. 187, I, do CTB é infração média.",
    },
    {
      topico: "Veículo novo",
      subassunto: "ATV",
      dificuldade: 5,
      raciocinio: "Com pagamento pelo transporte, só o DANFe não basta.",
      enunciado:
        "Uma transportadora comprou um caminhão novo acabado e quer levar carga de terceiros, de forma remunerada, no caminho entre o Município de aquisição e o de registro. Pelo art. 6º da Resolução Contran 911/2022, o trânsito",
      alternativas: [
        "é vedado, pois veículo sem registro não pode levar carga remunerada",
        "depende só do DANFe, pois o percurso é o mesmo da entrega ao cliente",
        "depende de ATV válida por 30 dias, prorrogável por 15 dias",
        "depende de ATV válida por 15 dias, prorrogável por força maior",
        "depende de ATV do órgão do destino, válida até o primeiro registro",
      ],
      correta: 3,
      explicacao: "A ATV é obtida pelo comprador final no órgão do Estado de origem, com base no documento fiscal. Vale 15 dias consecutivos e pode ser prorrogada por igual período, por força maior.",
      explicacaoErradas:
        "“é vedado” vale para o veículo inacabado, não para o acabado. “só do DANFe” esquece a ATV. “30 dias” não é a validade. “órgão do destino” erra o emissor, que é o de origem.",
      pegadinha: "Trocar os 30 dias da Região Norte pela validade da ATV.",
      conhecimento: "A ATV sai em duas vias, física ou eletrônica, e a primeira vai no veículo.",
    },
    {
      topico: "Veículo novo",
      subassunto: "Remonta",
      dificuldade: 5,
      raciocinio: "O art. 11 manda o capacete para um artigo inesperado.",
      enunciado:
        "Na remonta, um chassi novo inacabado sem cabine circula de dia, com tempo bom, e o condutor está sem capacete. Pelos arts. 8º e 11 da Resolução Contran 911/2022, a conduta vai ao",
      alternativas: [
        "art. 244, I, do CTB",
        "art. 230, IX, do CTB",
        "art. 169 do CTB",
        "art. 187, I, do CTB",
        "art. 232 do CTB",
      ],
      correta: 2,
      explicacao: "O § 5º do art. 8º exige capacete motociclístico com viseira ou óculos. O art. 11, I, leva o descumprimento ao art. 169.",
      explicacaoErradas:
        "“art. 244, I” é de motocicleta, e o caso é de chassi. “art. 230, IX” é para equipamento do veículo. “art. 187, I” é para o trânsito noturno. “art. 232” é para documento.",
      pegadinha: "Associar capacete sempre ao art. 244.",
      conhecimento: "Nessa situação também é vedado o trânsito com chuva, neblina, cerração ou à noite.",
    },
    {
      topico: "Veículo novo",
      subassunto: "Exportação",
      dificuldade: 4,
      raciocinio: "Antes da viagem, comunicação. Durante a viagem, documento.",
      enunciado:
        "Uma montadora vai levar ônibus novos até a fronteira, para exportação. Pelos arts. 9º e 10 da Resolução Contran 911/2022, a circulação exige",
      alternativas: [
        "autorização do órgão de destino e porte da ATV, com validade de 15 dias",
        "comunicação com 5 dias úteis de antecedência e porte do DANFe ou da fatura",
        "comunicação com 15 dias corridos de antecedência e porte apenas da fatura",
        "comunicação com 5 dias corridos de antecedência e escolta em todo o trajeto",
        "autorização da PRF em cada trecho federal e registro provisório no Renavam",
      ],
      correta: 1,
      explicacao: "A comunicação vai aos órgãos com circunscrição sobre o itinerário, com pelo menos 5 dias úteis. O DANFe ou a fatura do fabricante comprova a exportação e deve ser portado.",
      explicacaoErradas:
        "“ATV” é do transporte remunerado. “15 dias corridos” e “5 dias corridos” erram a contagem. “apenas da fatura” esquece o DANFe. “escolta em todo o trajeto” não é regra fixa. “registro provisório” não existe na Resolução.",
      pegadinha: "Trocar dias úteis por dias corridos.",
      conhecimento: "Os órgãos podem determinar medidas de segurança para essa circulação.",
    },
    {
      topico: "Autuação sem veículo",
      subassunto: "Alcance",
      dificuldade: 4,
      raciocinio: "Há infração de trânsito sem placa de veículo.",
      enunciado:
        "Uma empreiteira deixa uma pilha de brita no acostamento de rodovia federal, sem autorização, e nenhum veículo está ligado ao fato. Pelo art. 1º da Resolução Contran 926/2022 e pelo art. 245 do CTB, a autuação",
      alternativas: [
        "é impossível, pois toda infração de trânsito depende de placa de veículo",
        "é lavrada em nome do proprietário do último caminhão que esteve no local",
        "é só comunicada ao Ministério Público, por ser crime ambiental",
        "é lavrada em nome do condutor que descarregou a brita, com pontos na CNH",
        "é lavrada contra a empresa, no procedimento próprio dessa Resolução",
      ],
      correta: 4,
      explicacao: "O art. 245 pune o uso da via para depósito de materiais sem autorização. A Resolução 926 regula o AIT e as notificações nessas infrações sem uso de veículo.",
      explicacaoErradas:
        "“impossível” ignora as infrações sem veículo. “último caminhão” e “condutor” presumem um vínculo que o caso exclui. “Ministério Público” não substitui a autuação de trânsito.",
      pegadinha: "Pensar que toda autuação precisa de placa.",
      conhecimento: "O art. 245 é infração grave, com remoção da mercadoria ou do material.",
    },
    {
      topico: "Autuação sem veículo",
      subassunto: "AIT assinado",
      dificuldade: 4,
      raciocinio: "A assinatura substitui a notificação, não a defesa.",
      enunciado:
        "Em infração regida pela Resolução Contran 926/2022, o infrator assina o AIT, que traz prazo de defesa de 30 dias. Pelos arts. 4º e 5º dessa Resolução,",
      alternativas: [
        "o AIT vale como notificação, e a defesa continua cabível",
        "o AIT só vale como notificação se o órgão enviar uma cópia em até 30 dias",
        "o AIT assinado impede a defesa, pois equivale à confissão do infrator",
        "a notificação ainda precisa ser expedida em até 30 dias da constatação",
        "o prazo de defesa cai para 15 dias, por ter havido a assinatura do AIT",
      ],
      correta: 0,
      explicacao: "O art. 5º faz o AIT assinado valer como NA, desde que contenha prazo de defesa não inferior a 30 dias. A defesa segue possível até a data fixada.",
      explicacaoErradas:
        "“cópia” e “15 dias” não constam da norma. “confissão” confunde assinatura com admissão da infração. “ainda precisa ser expedida” esquece a exceção que o art. 4º faz ao art. 5º.",
      pegadinha: "Tratar a assinatura como confissão.",
      conhecimento: "Quando não há assinatura, a NA sai em até 30 dias da constatação da infração.",
    },
    {
      topico: "Autuação sem veículo",
      subassunto: "Contagem do prazo",
      dificuldade: 5,
      raciocinio: "Exclua o primeiro dia. Depois veja se o último tem expediente.",
      enunciado:
        "Um edital de NA foi publicado na quinta-feira, 6 de agosto de 2026, com prazo de defesa de 30 dias. Pelo art. 12 da Resolução Contran 926/2022, considerando o feriado nacional de segunda-feira, 7 de setembro, o prazo termina em",
      alternativas: [
        "4 de setembro",
        "5 de setembro",
        "7 de setembro",
        "8 de setembro",
        "6 de setembro",
      ],
      correta: 3,
      explicacao: "Sem o dia 6 de agosto, o trigésimo dia é 5 de setembro, um sábado. O prazo vai ao primeiro dia útil. Domingo não serve e a segunda é feriado, então fica em 8 de setembro.",
      explicacaoErradas:
        "“4 de setembro” contou o dia da publicação. “5 de setembro” esqueceu a prorrogação. “6 de setembro” é domingo. “7 de setembro” é o feriado.",
      pegadinha: "Parar no sábado ou na segunda de feriado.",
      conhecimento: "A contagem é em dias consecutivos, excluindo o dia da publicação e incluindo o vencimento.",
    },
  ],
};
