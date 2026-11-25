import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-a02",
  resumo: {
    ideia:
      "O art. 5º da CF/1988 tem 79 incisos e 4 parágrafos com os direitos individuais e coletivos: vida, liberdade, igualdade, segurança e propriedade, além das garantias penais e dos remédios constitucionais. A prova cobra muito a letra da lei, as exceções e as súmulas do STF.",
    itens: [
      {
        termo: "Quem tem os direitos",
        faz: "O caput fala em brasileiros e estrangeiros residentes no País. O STF estende a proteção ao estrangeiro de passagem e, no que couber, às pessoas jurídicas. Os direitos não são absolutos: um pode ceder diante de outro, conforme o caso.",
      },
      {
        termo: "Igualdade formal × material",
        faz: "Formal: todos são iguais perante a lei. Material: tratar os desiguais de forma desigual, na medida da desigualdade. Daí as ações afirmativas, políticas temporárias como as cotas; o STF julgou constitucionais as cotas raciais nas universidades (ADPF 186).",
      },
      {
        termo: "Legalidade e reserva legal",
        faz: "Legalidade (inciso II): ninguém é obrigado a fazer ou deixar de fazer algo senão em virtude de lei, em sentido amplo. Reserva legal: certos assuntos só podem ser tratados por lei em sentido estrito, feita pelo Legislativo.",
      },
      {
        termo: "Expressão e consciência",
        faz: "É livre a manifestação do pensamento, vedado o anonimato (IV), com direito de resposta proporcional ao agravo (V). É inviolável a liberdade de consciência e de crença (VI). Ninguém perde direitos por crença ou convicção, salvo se a invocar para fugir de obrigação legal a todos imposta e recusar a prestação alternativa (VIII).",
        pista: "O STF dispensou autorização prévia para publicar biografias (ADI 4815): vale a vedação à censura.",
      },
      {
        termo: "Casa (inciso XI)",
        faz: "Ninguém entra sem consentimento do morador, salvo: flagrante delito, desastre ou para prestar socorro (a qualquer hora) ou por determinação judicial (só durante o dia). Casa, para o STF, inclui escritório e quarto de hotel ocupado.",
        pista: "A Lei 13.869/2019 tornou abuso de autoridade cumprir mandado de busca domiciliar depois das 21h ou antes das 5h.",
      },
      {
        termo: "Sigilo (inciso XII)",
        faz: "São invioláveis a correspondência, as comunicações telegráficas, de dados e as telefônicas. Só a telefônica tem exceção expressa: ordem judicial, nas hipóteses da lei, para investigação criminal ou instrução processual penal.",
        pista: "A gravação feita por um dos interlocutores, sem o outro saber, é prova lícita quando não há dever legal de sigilo.",
      },
      {
        termo: "Reunião (inciso XVI)",
        faz: "Pacífica, sem armas, em local aberto ao público, sem autorização, desde que não frustre outra reunião antes convocada para o mesmo local. Exige apenas aviso prévio à autoridade competente.",
      },
      {
        termo: "Associação (incisos XVII a XXI)",
        faz: "Plena para fins lícitos, vedada a de caráter paramilitar. Criar associação e, na forma da lei, cooperativa independe de autorização. Suspender atividades exige decisão judicial; dissolver exige decisão judicial com trânsito em julgado. Ninguém é obrigado a se associar nem a continuar associado.",
      },
      {
        termo: "Júri (inciso XXXVIII)",
        faz: "Plenitude de defesa, sigilo das votações, soberania dos veredictos e competência para os crimes dolosos contra a vida. Súmula Vinculante 45: o júri prevalece sobre foro especial criado só pela Constituição Estadual.",
      },
      {
        termo: "Crimes sem fiança",
        faz: "Inafiançáveis e imprescritíveis: racismo (com reclusão) e ação de grupos armados contra a ordem constitucional e o Estado Democrático. Inafiançáveis e insuscetíveis de graça ou anistia: tortura, tráfico, terrorismo e hediondos; respondem mandantes, executores e quem podia evitar e se omitiu.",
        pista: "A Lei 14.532/2023 passou a tratar a injúria racial como crime de racismo.",
      },
      {
        termo: "Penas",
        faz: "Permitidas (XLVI): privação ou restrição da liberdade, perda de bens, multa, suspensão ou interdição de direitos e prestação social alternativa. Proibidas (XLVII): morte (salvo guerra declarada), perpétua, trabalhos forçados, banimento e cruéis. A pena não passa da pessoa do condenado; reparar o dano e o perdimento de bens alcançam os sucessores até o valor herdado.",
      },
      {
        termo: "Extradição (incisos LI e LII)",
        faz: "Brasileiro nato: nunca. Naturalizado: por crime comum praticado antes da naturalização ou por comprovado envolvimento em tráfico de drogas, na forma da lei. Estrangeiro: nunca por crime político ou de opinião.",
      },
      {
        termo: "Prisão e processo",
        faz: "Só se prende em flagrante ou por ordem escrita e fundamentada do juiz, salvo transgressão militar ou crime propriamente militar (LXI). Ninguém é culpado antes do trânsito em julgado (LVII). Prisão civil por dívida: a CF cita alimentos e depositário infiel, mas a Súmula Vinculante 25 proíbe a do depositário.",
      },
      {
        termo: "Remédios constitucionais",
        faz: "Habeas corpus: liberdade de locomoção. Habeas data: conhecer ou corrigir dados da própria pessoa em banco público. Mandado de injunção: falta de norma que torna inviável um direito. Mandado de segurança: direito líquido e certo não amparado pelos dois habeas. Ação popular: cidadão anula ato lesivo ao patrimônio público, à moralidade, ao meio ambiente ou ao patrimônio histórico e cultural.",
        pista: "São gratuitos o habeas corpus e o habeas data (LXXVII).",
      },
      {
        termo: "Parágrafos do art. 5º",
        faz: "§ 1º: aplicação imediata. § 2º: a lista não é fechada. § 3º: tratado de direitos humanos aprovado em cada Casa, em dois turnos, por três quintos dos membros, equivale a emenda. § 4º: o Brasil se submete ao Tribunal Penal Internacional.",
      },
    ],
  },
  questoes: [
    {
      topico: "Inviolabilidade da casa",
      subassunto: "Art. 5º, XI",
      dificuldade: 4,
      raciocinio: "De noite, sem consentimento, só flagrante, desastre ou socorro. Ordem judicial, mesmo de prisão, só se cumpre dentro da casa durante o dia.",
      enunciado:
        "Às 23h, sem o consentimento do morador, a entrada de policiais em uma casa é compatível com o art. 5º, XI, da Constituição Federal",
      alternativas: [
        "para cumprir mandado de busca e apreensão expedido pelo juiz naquela mesma tarde.",
        "para prender quem, lá dentro, mantém uma pessoa em cárcere privado naquele momento.",
        "para cumprir a ordem escrita do delegado de polícia que preside o inquérito policial.",
        "para cumprir mandado de prisão preventiva expedido pelo juiz criminal competente.",
        "para intimar o morador de audiência marcada por determinação do juiz da causa.",
      ],
      correta: 1,
      explicacao:
        "Cárcere privado é crime permanente: enquanto a vítima está presa, o flagrante continua. E o flagrante delito autoriza a entrada a qualquer hora, sem consentimento e sem mandado.",
      explicacaoErradas:
        "Ordem judicial (busca, prisão ou intimação) só permite entrar na casa durante o dia. Delegado não expede ordem para entrar em casa: é cláusula de reserva de jurisdição, só o juiz pode.",
      pegadinha: "Ter mandado do juiz não libera a entrada à noite; a exceção noturna é só flagrante, desastre ou socorro.",
      conhecimento: "Para o STF, a entrada forçada sem mandado exige fundadas razões, justificadas depois, de que há flagrante dentro da casa (RE 603.616).",
    },
    {
      topico: "Crimes inafiançáveis",
      subassunto: "Art. 5º, XLII a XLIV",
      dificuldade: 5,
      raciocinio: "Imprescritíveis são só dois: racismo e ação de grupos armados. Os 3TH (tortura, tráfico, terrorismo e hediondos) prescrevem.",
      enunciado:
        "Analise as afirmativas sobre os crimes tratados no art. 5º da Constituição Federal.\nI. O racismo é crime inafiançável e imprescritível, sujeito à pena de reclusão.\nII. A tortura e o terrorismo são inafiançáveis e insuscetíveis de graça ou anistia.\nIII. A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático é imprescritível.\nIV. O tráfico ilícito de entorpecentes, por ser equiparado a hediondo, é imprescritível.\nEstão corretas as afirmativas",
      alternativas: [
        "I e II, apenas.",
        "II e IV, apenas.",
        "I, III e IV, apenas.",
        "II, III e IV, apenas.",
        "I, II e III, apenas.",
      ],
      correta: 4,
      explicacao:
        "Racismo (XLII) e ação de grupos armados (XLIV) são inafiançáveis e imprescritíveis. Tortura, tráfico, terrorismo e hediondos (XLIII) são inafiançáveis e insuscetíveis de graça ou anistia, mas prescrevem.",
      explicacaoErradas:
        "A afirmativa IV erra ao chamar o tráfico de imprescritível. A CF só nega a ele fiança, graça e anistia; o prazo de prescrição corre normalmente.",
      pegadinha: "Inafiançável não quer dizer imprescritível: os 3TH não têm fiança, mas prescrevem.",
      conhecimento: "No crime do inciso XLIII respondem os mandantes, os executores e os que, podendo evitá-lo, se omitirem.",
    },
    {
      topico: "Remédios constitucionais",
      subassunto: "Objeto de cada remédio",
      dificuldade: 4,
      raciocinio: "Ligar cada remédio ao seu objeto: locomoção, dados da própria pessoa, falta de norma, ato lesivo ao patrimônio público ou à moralidade.",
      enunciado:
        "Associe cada remédio constitucional à situação em que ele é cabível.\n1. Habeas corpus\n2. Habeas data\n3. Mandado de injunção\n4. Ação popular\n( ) Anular contrato que lesa a moralidade administrativa.\n( ) Corrigir dado errado sobre o próprio impetrante em banco de dados de caráter público.\n( ) Afastar ameaça ilegal à liberdade de ir e vir.\n( ) Falta de norma regulamentadora que torna inviável um direito previsto na Constituição.\nA sequência correta, de cima para baixo, é",
      alternativas: [
        "4, 2, 1, 3.",
        "2, 4, 1, 3.",
        "4, 2, 3, 1.",
        "3, 2, 1, 4.",
        "4, 1, 2, 3.",
      ],
      correta: 0,
      explicacao:
        "Ação popular anula ato lesivo à moralidade (LXXIII). Habeas data corrige dados da própria pessoa (LXXII). Habeas corpus protege a locomoção (LXVIII). Mandado de injunção supre a falta de norma (LXXI).",
      explicacaoErradas:
        "As outras sequências trocam habeas data por habeas corpus ou mandado de injunção por ação popular. Cada remédio tem um objeto só, e a prova costuma trocar exatamente esses pares.",
      pegadinha: "Habeas data serve só para dados da própria pessoa; para dado de terceiro, o caminho é outro.",
      conhecimento: "O mandado de segurança é residual: cabe para direito líquido e certo quando não couber habeas corpus nem habeas data.",
    },
    {
      topico: "Penas",
      subassunto: "Art. 5º, XLV a XLVII",
      dificuldade: 4,
      raciocinio: "Perda de bens está na lista das penas permitidas (XLVI). Morte só em guerra declarada. Reparar o dano passa aos sucessores até o valor herdado.",
      enunciado:
        "Marque V (verdadeiro) ou F (falso) sobre as penas na Constituição Federal.\n( ) A pena de morte é admitida em caso de guerra declarada.\n( ) São proibidas as penas de caráter perpétuo e de trabalhos forçados.\n( ) A perda de bens é pena proibida, por atingir a família do condenado.\n( ) A obrigação de reparar o dano pode ser estendida aos sucessores, até o limite do patrimônio transferido.\nA sequência correta, de cima para baixo, é",
      alternativas: [
        "V, F, V, V.",
        "V, V, V, F.",
        "F, V, F, V.",
        "V, V, F, V.",
        "F, V, V, F.",
      ],
      correta: 3,
      explicacao:
        "A morte é a única pena proibida com exceção: guerra declarada (XLVII). Perpétua e trabalhos forçados são proibidas. A pena não passa do condenado, mas reparar o dano e o perdimento de bens alcançam os sucessores até o valor recebido (XLV).",
      explicacaoErradas:
        "O terceiro item é falso: a perda de bens é pena permitida (XLVI). A lista de permitidas tem ainda privação ou restrição da liberdade, multa, suspensão ou interdição de direitos e prestação social alternativa.",
      pegadinha: "Perda de bens (pena permitida) não é o mesmo que banimento (pena proibida).",
      conhecimento: "Banimento é expulsar o próprio nacional do país; a CF o proíbe junto com as penas cruéis.",
    },
    {
      topico: "Extradição",
      subassunto: "Art. 5º, LI e LII",
      dificuldade: 5,
      raciocinio: "Nato nunca. Naturalizado: crime comum antes da naturalização ou tráfico a qualquer tempo. Estrangeiro: nunca por crime político ou de opinião.",
      enunciado:
        "Sobre a extradição, segundo a Constituição Federal, é correto afirmar que",
      alternativas: [
        "o brasileiro nato pode ser extraditado quando comprovado o seu envolvimento com tráfico de drogas.",
        "o brasileiro naturalizado só pode ser extraditado por crime comum praticado depois da naturalização.",
        "o naturalizado pode ser extraditado por envolvimento comprovado em tráfico, a qualquer tempo.",
        "o estrangeiro pode ser extraditado por crime político, desde que o Supremo Tribunal Federal autorize.",
        "o estrangeiro não pode ser extraditado por crime de opinião, salvo se o ato envolveu grave violência.",
      ],
      correta: 2,
      explicacao:
        "O inciso LI permite extraditar o naturalizado em duas hipóteses: crime comum praticado antes da naturalização ou comprovado envolvimento em tráfico de drogas, na forma da lei. No tráfico, a CF não fixa momento: vale antes ou depois.",
      explicacaoErradas:
        "O nato nunca é extraditado, nem por tráfico. Para o naturalizado, o crime comum tem de ser anterior à naturalização, não posterior. O estrangeiro nunca é extraditado por crime político ou de opinião (LII), sem exceção na CF.",
      pegadinha: "No crime comum, o marco é a naturalização (antes); no tráfico, não há marco.",
      conhecimento: "O STF analisa o pedido; se ele nega a extradição, o Presidente fica vinculado. Se autoriza, o Presidente decide se entrega.",
    },
    {
      topico: "Tribunal do Júri",
      subassunto: "Súmula Vinculante 45",
      dificuldade: 5,
      raciocinio: "Foro criado só pela Constituição Estadual perde para o júri (SV 45). Foro previsto na CF, como o do prefeito (art. 29, X), vence o júri.",
      enunciado:
        "A Constituição de um Estado deu ao Tribunal de Justiça a competência para julgar os vice-prefeitos nos crimes comuns. A Constituição Federal não prevê foro para esse cargo. Um vice-prefeito comete homicídio doloso. Ele deve ser julgado",
      alternativas: [
        "pelo Tribunal do Júri, que prevalece sobre foro previsto apenas na Constituição Estadual.",
        "pelo Tribunal de Justiça, porque o foro estadual prevalece sobre a competência do júri.",
        "pelo Tribunal de Justiça, por ser crime comum, aplicando-se a mesma regra do prefeito.",
        "pelo Tribunal Regional Federal, porque crime de agente político é sempre de interesse da União.",
        "pelo juiz singular da comarca, porque o júri não julga quem exerce mandato eletivo.",
      ],
      correta: 0,
      explicacao:
        "Súmula Vinculante 45: a competência constitucional do Tribunal do Júri prevalece sobre o foro por prerrogativa de função estabelecido exclusivamente pela Constituição Estadual. Homicídio doloso é crime doloso contra a vida, competência do júri (art. 5º, XXXVIII, d).",
      explicacaoErradas:
        "O foro estadual não vence o júri, que está na própria CF. O prefeito é diferente porque o foro dele no Tribunal de Justiça está na CF (art. 29, X). Não há motivo para a Justiça Federal, e o júri julga quem tem mandato quando não há foro na CF.",
      pegadinha: "A regra do prefeito não se estende ao vice: o foro do prefeito vem da CF, o do vice viria só da Constituição Estadual.",
      conhecimento: "O júri tem quatro garantias: plenitude de defesa, sigilo das votações, soberania dos veredictos e competência para os crimes dolosos contra a vida.",
    },
    {
      topico: "Tratados de direitos humanos",
      subassunto: "Art. 5º, § 3º",
      dificuldade: 4,
      raciocinio: "Mesmo rito da emenda: cada Casa, dois turnos, três quintos dos membros.",
      enunciado:
        "Para que um tratado internacional sobre direitos humanos tenha equivalência às emendas constitucionais, ele deve ser aprovado",
      alternativas: [
        "em sessão conjunta do Congresso, em turno único, por maioria absoluta dos membros.",
        "em cada Casa do Congresso, em dois turnos, por maioria absoluta dos membros.",
        "em cada Casa do Congresso, em dois turnos, por três quintos dos votos dos membros.",
        "em cada Casa do Congresso, em turno único, por três quintos dos presentes à sessão.",
        "em sessão conjunta do Congresso, em dois turnos, por dois terços dos membros.",
      ],
      correta: 2,
      explicacao:
        "O § 3º do art. 5º copia o rito da emenda constitucional (art. 60, § 2º): votação em cada Casa do Congresso Nacional, em dois turnos, com três quintos dos votos dos respectivos membros.",
      explicacaoErradas:
        "Sessão conjunta, turno único, maioria absoluta e dois terços não aparecem nesse rito. Três quintos é dos membros da Casa, não dos presentes.",
      pegadinha: "O quórum é de três quintos dos membros, não dos presentes: ausência conta contra.",
      conhecimento: "Tratado de direitos humanos aprovado pelo rito comum tem, para o STF, status supralegal: abaixo da CF e acima das leis (RE 466.343).",
    },
    {
      topico: "Prisão civil",
      subassunto: "Art. 5º, LXVII",
      dificuldade: 5,
      raciocinio: "A CF cita duas exceções, mas a SV 25 afastou o depositário infiel por causa do Pacto de San José, que tem status supralegal. Alimentos: só débito recente.",
      enunciado:
        "Analise as afirmativas sobre a prisão civil por dívida.\nI. O texto da Constituição prevê duas exceções: o devedor de alimentos que não paga de forma voluntária e inescusável e o depositário infiel.\nII. Pela Súmula Vinculante 25, é ilícita a prisão civil do depositário infiel, qualquer que seja a modalidade do depósito.\nIII. A prisão do devedor de alimentos cabe para qualquer débito alimentar, por mais antigo que seja.\nIV. Para o STF, o Pacto de San José da Costa Rica, que só admite a prisão civil do devedor de alimentos, tem status supralegal.\nEstão corretas as afirmativas",
      alternativas: [
        "I e II, apenas.",
        "II e III, apenas.",
        "I, III e IV, apenas.",
        "II, III e IV, apenas.",
        "I, II e IV, apenas.",
      ],
      correta: 4,
      explicacao:
        "O inciso LXVII ainda cita o depositário infiel, mas o STF, com o Pacto de San José em posição supralegal, deixou sem efeito a lei que regulava essa prisão. Daí a Súmula Vinculante 25.",
      explicacaoErradas:
        "A afirmativa III é falsa: pela Súmula 309 do STJ, a prisão só cabe pelas três prestações anteriores ao ajuizamento da execução e pelas que vencerem no curso do processo. Dívida antiga se cobra por outros meios.",
      pegadinha: "O texto da CF não mudou: a proibição do depositário infiel vem da súmula, não de emenda.",
      conhecimento: "O inadimplemento tem de ser voluntário e inescusável: quem prova que não tinha como pagar não é preso.",
    },
    {
      topico: "Reunião e associação",
      subassunto: "Art. 5º, XVI a XXI",
      dificuldade: 4,
      raciocinio: "Reunião: só aviso. Associação: suspender exige decisão judicial; dissolver exige decisão judicial transitada em julgado.",
      enunciado:
        "Sobre as liberdades de reunião e de associação, é correto afirmar que",
      alternativas: [
        "a reunião pacífica em local aberto ao público depende de autorização prévia da autoridade.",
        "a associação só pode ser dissolvida à força por decisão judicial com trânsito em julgado.",
        "a suspensão das atividades de uma associação pode ser feita por ato administrativo motivado.",
        "a criação de cooperativas depende de autorização do poder público, na forma da lei.",
        "a associação pode representar seus filiados em ação comum sem autorização expressa deles.",
      ],
      correta: 1,
      explicacao:
        "Inciso XIX: as associações só podem ser compulsoriamente dissolvidas ou ter as atividades suspensas por decisão judicial, exigindo-se, para a dissolução, o trânsito em julgado.",
      explicacaoErradas:
        "A reunião exige só aviso prévio, não autorização. Suspender atividades exige decisão judicial, nunca ato administrativo. Associação e cooperativa independem de autorização. Para representar filiados, a associação precisa de autorização expressa (XXI).",
      pegadinha: "Suspender: basta decisão judicial. Dissolver: decisão judicial com trânsito em julgado.",
      conhecimento: "No mandado de segurança coletivo, a associação age em nome próprio e não precisa da autorização dos associados (Súmula 629 do STF).",
    },
    {
      topico: "Ação popular",
      subassunto: "Art. 5º, LXXIII",
      dificuldade: 4,
      raciocinio: "Autor: só o cidadão (eleitor). Objeto: patrimônio público, moralidade, meio ambiente, patrimônio histórico e cultural. Isento de custas, salvo má-fé.",
      enunciado:
        "Sobre a ação popular, segundo a Constituição Federal e a jurisprudência do STF, é correto afirmar que",
      alternativas: [
        "pode ser proposta por pessoa jurídica com sede no Brasil, para defender o patrimônio público.",
        "pode ser proposta por qualquer pessoa, nacional ou estrangeira, desde que resida no País.",
        "o autor que perder a ação paga as custas e os honorários, ainda que tenha agido de boa-fé.",
        "o cidadão pode propô-la contra ato lesivo ao meio ambiente, isento de custas, salvo má-fé.",
        "só pode ser proposta depois que o ato lesivo já produziu dano ao patrimônio público.",
      ],
      correta: 3,
      explicacao:
        "Qualquer cidadão é parte legítima para anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, ficando isento de custas e do ônus da sucumbência, salvo comprovada má-fé.",
      explicacaoErradas:
        "Pessoa jurídica não propõe ação popular (Súmula 365 do STF). Cidadão é quem está em dia com os direitos políticos, não qualquer residente. Sem má-fé não há custas nem honorários. A ação pode ser preventiva, antes do dano.",
      pegadinha: "Cidadão, aqui, é o eleitor: a prova se faz com o título de eleitor.",
      conhecimento: "A ação popular pode ser preventiva (antes do ato lesivo) ou repressiva (para corrigir o dano já causado).",
    },
  ],
};
