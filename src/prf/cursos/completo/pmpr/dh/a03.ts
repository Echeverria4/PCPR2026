import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "dh-a03",
  resumo: {
    ideia:
      "O Código de Conduta para os Funcionários Responsáveis pela Aplicação da Lei foi adotado pela Assembleia Geral da ONU em 17 de dezembro de 1979, pela Resolução 34/169. Tem só 8 artigos, todos sobre como o agente da lei deve agir: servir, respeitar a dignidade, usar a força só quando preciso, guardar sigilo, nunca torturar, cuidar da saúde de quem está preso, não se corromper e denunciar violações.",
    itens: [
      {
        termo: "Natureza",
        faz: "É resolução da Assembleia Geral da ONU, não tratado. Serve de guia de conduta para os Estados e as polícias, sem sanção própria.",
        pista: "Resolução 34/169, de 17/12/1979.",
      },
      {
        termo: "Quem é o funcionário (art. 1º)",
        faz: "Todos os agentes da lei, nomeados ou eleitos, que exerçam poderes policiais, sobretudo de prisão ou detenção. Onde esses poderes são exercidos por militares, fardados ou não, ou por forças de segurança do Estado, eles também estão incluídos.",
      },
      {
        termo: "Dever de servir (art. 1º)",
        faz: "O agente deve sempre cumprir o dever que a lei lhe impõe, servindo a comunidade e protegendo todas as pessoas contra atos ilegais, conforme o alto grau de responsabilidade da profissão.",
      },
      {
        termo: "Dignidade (art. 2º)",
        faz: "No cumprimento do dever, o agente deve respeitar e proteger a dignidade humana e manter e apoiar os direitos humanos de todas as pessoas.",
      },
      {
        termo: "Uso da força (art. 3º)",
        faz: "A força só pode ser usada quando estritamente necessária e na medida exigida para cumprir o dever. O uso deve ser excepcional; admite-se força razoável, mas nunca desproporcional ao objetivo legítimo.",
        pista: "Necessidade + proporção. Força é exceção, não regra.",
      },
      {
        termo: "Arma de fogo (comentário ao art. 3º)",
        faz: "É medida extrema: deve-se fazer todo esforço para evitar seu uso, sobretudo contra crianças. Em geral, só cabe quando o suspeito oferece resistência armada ou põe em risco a vida de outros, e meios menos graves não bastam para dominá-lo.",
        pista: "Todo disparo de arma de fogo deve ser relatado na hora às autoridades competentes.",
      },
      {
        termo: "Sigilo (art. 4º)",
        faz: "Os assuntos de natureza confidencial em poder do agente devem ficar em sigilo, a não ser que o cumprimento do dever ou a necessidade da justiça exijam estritamente outra conduta.",
      },
      {
        termo: "Proibição da tortura (art. 5º)",
        faz: "Nenhum agente pode infligir, instigar ou tolerar tortura ou outro tratamento ou pena cruel, desumano ou degradante. Também não pode invocar ordem superior nem circunstâncias excepcionais, como guerra, ameaça de guerra, ameaça à segurança nacional, instabilidade política ou outra emergência pública.",
        pista: "Três verbos: infligir, instigar ou tolerar. Nenhuma desculpa vale.",
      },
      {
        termo: "Saúde de quem está sob guarda (art. 6º)",
        faz: "O agente deve garantir a proteção da saúde de todas as pessoas sob sua guarda e, em especial, adotar medidas imediatas para que recebam cuidados médicos sempre que necessário.",
      },
      {
        termo: "Corrupção (art. 7º)",
        faz: "O agente não deve cometer atos de corrupção e deve também se opor com vigor a eles e combatê-los. A corrupção, como qualquer abuso de autoridade, é incompatível com a profissão, e a lei deve ser aplicada com rigor a quem a pratica.",
      },
      {
        termo: "Respeito ao Código e denúncia (art. 8º)",
        faz: "O agente deve respeitar a lei e o Código e, na medida do possível, evitar e se opor com rigor a qualquer violação. Se tiver motivos para acreditar que houve ou vai haver violação, deve comunicar aos superiores e, se necessário, a outras autoridades ou órgãos com poder de revisão e reparação.",
        pista: "Dever de agir também antes da violação: \"houve ou está para haver\".",
      },
    ],
  },
  questoes: [
    {
      topico: "Quem é o funcionário",
      subassunto: "Art. 1º",
      dificuldade: 4,
      raciocinio: "Art. 1º: todos os agentes da lei, nomeados ou eleitos, que exerçam poderes policiais, especialmente de prisão ou detenção. Não é só a polícia de carreira nem todo servidor.",
      enunciado:
        "Segundo o Código de Conduta para os Funcionários Responsáveis pela Aplicação da Lei, da ONU, essa expressão abrange",
      alternativas: [
        "apenas os policiais de carreira aprovados em concurso público, excluídos os que foram eleitos.",
        "somente os agentes das polícias civis, que exercem funções de polícia judiciária e de investigação.",
        "todos os agentes da lei, nomeados ou eleitos, que exerçam poderes policiais, sobretudo de prisão.",
        "apenas os servidores do sistema prisional, que fazem a guarda das pessoas presas e condenadas.",
        "todos os servidores públicos, de qualquer órgão, ainda que nunca exerçam poderes de polícia.",
      ],
      correta: 2,
      explicacao:
        "O comentário ao art. 1º diz que a expressão inclui todos os agentes da lei, quer nomeados, quer eleitos, que exerçam poderes policiais, especialmente poderes de prisão ou detenção.",
      explicacaoErradas:
        "O Código inclui os eleitos e não se limita aos concursados. Não fica restrito à polícia civil nem ao sistema prisional. E não alcança todo servidor: o que define é o exercício de poderes policiais.",
      pegadinha: "\"Nomeados ou eleitos\": o modo de ingresso não importa, o poder de polícia sim.",
      conhecimento: "Onde os poderes de polícia são exercidos por militares, fardados ou não, ou por forças de segurança do Estado, eles também se incluem na expressão.",
    },
    {
      topico: "Uso da força",
      subassunto: "Art. 3º",
      dificuldade: 4,
      raciocinio: "Art. 3º: força só quando estritamente necessária e na medida exigida pelo dever. Desobediência sem ameaça não abre espaço para qualquer força.",
      enunciado:
        "Durante uma abordagem, um homem desarmado se recusa a mostrar documentos e xinga a equipe, sem ameaçar ninguém. Pelo Código de Conduta da ONU, o uso da força pela equipe",
      alternativas: [
        "só cabe se for estritamente necessário e na medida exigida para cumprir o dever.",
        "é livre, porque a recusa a uma ordem legal já autoriza qualquer grau de força.",
        "pode incluir a arma de fogo, desde que o disparo seja comunicado no fim do turno.",
        "depende sempre de ordem prévia e por escrito do comandante da equipe na rua.",
        "é proibido em qualquer caso, porque o Código não admite o emprego da força.",
      ],
      correta: 0,
      explicacao:
        "O art. 3º só permite a força quando estritamente necessária e na medida exigida para o cumprimento do dever. O comentário acrescenta que ela é excepcional e nunca pode ser desproporcional ao objetivo legítimo.",
      explicacaoErradas:
        "A desobediência não autoriza qualquer grau de força. A arma de fogo é medida extrema, para resistência armada ou risco à vida, e o disparo se relata na hora. O Código não exige ordem escrita prévia. E admite a força razoável, quando necessária.",
      pegadinha: "Os dois extremos (força livre e força proibida) estão errados.",
      conhecimento: "Necessidade e proporcionalidade também guiam a Lei 13.060/2014, que trata do uso de instrumentos de menor potencial ofensivo.",
    },
    {
      topico: "Arma de fogo",
      subassunto: "Comentário ao art. 3º",
      dificuldade: 5,
      raciocinio: "Arma de fogo: medida extrema; evitar sobretudo contra crianças; só com resistência armada ou risco à vida de outros e meios menores insuficientes; todo disparo relatado na hora.",
      enunciado:
        "Julgue como verdadeira (V) ou falsa (F) cada afirmativa sobre o uso de arma de fogo no Código de Conduta da ONU.\n( ) O emprego de arma de fogo é medida extrema, e deve-se fazer todo esforço para evitá-lo, sobretudo contra crianças.\n( ) Em geral, a arma de fogo só deve ser usada quando o suspeito oferece resistência armada ou põe em risco a vida de outros, e meios menos graves não bastam.\n( ) O disparo só precisa ser relatado às autoridades se alguém for atingido.\n( ) A força pode ser desproporcional ao objetivo se o suspeito tiver antecedentes criminais.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, F, F, V.", "V, V, V, F.", "F, V, F, F.", "V, V, F, F.", "V, F, V, F."],
      correta: 3,
      explicacao:
        "O comentário ao art. 3º trata a arma de fogo como medida extrema, a evitar sobretudo contra crianças, e diz que, em geral, ela só cabe diante de resistência armada ou risco à vida de outros, quando meios menos graves não bastam. A terceira é falsa: todo disparo deve ser relatado de imediato. A quarta também: a força nunca pode ser desproporcional ao objetivo legítimo.",
      explicacaoErradas:
        "As sequências com V na terceira criam uma condição que o texto não tem. As que marcam V na quarta usam antecedentes como desculpa para a desproporção. As que marcam F na primeira ou na segunda negam o texto.",
      pegadinha: "\"Toda vez que uma arma de fogo for disparada\": não importa se atingiu alguém.",
      conhecimento: "Os Princípios Básicos da ONU sobre o Uso da Força e de Armas de Fogo (1990) detalham essas regras.",
    },
    {
      topico: "Proibição da tortura",
      subassunto: "Art. 5º",
      dificuldade: 5,
      raciocinio: "Art. 5º: nenhum agente pode infligir, instigar ou tolerar tortura nem tratamento cruel, desumano ou degradante; ordem superior e emergência (guerra, segurança nacional) não justificam.",
      enunciado:
        "Um superior ordena a um agente que use violência contra um preso para obter informações sobre um ataque que ameaça a segurança nacional. Pelo Código de Conduta da ONU, o agente",
      alternativas: [
        "pode cumprir a ordem, porque a responsabilidade passa toda para o superior que a deu.",
        "pode cumprir a ordem se houver guerra declarada, mas nunca em tempo de paz no país.",
        "pode tolerar a violência feita por outro agente, desde que não a pratique ele mesmo.",
        "pode cumprir a ordem se a violência for leve e sem marcas, por ser só degradante.",
        "não pode cumprir, pois nem a ordem nem a segurança nacional justificam a tortura.",
      ],
      correta: 4,
      explicacao:
        "O art. 5º proíbe infligir, instigar ou tolerar tortura ou tratamento cruel, desumano ou degradante, e afasta como justificativa as ordens superiores e as circunstâncias excepcionais, como estado de guerra, ameaça de guerra, ameaça à segurança nacional ou qualquer outra emergência pública.",
      explicacaoErradas:
        "Ordem superior não serve de desculpa, e a guerra também não. Tolerar a tortura praticada por outro já é proibido. Tratamento degradante está na mesma proibição, mesmo sem marcas.",
      pegadinha: "\"Tolerar\" também é conduta proibida.",
      conhecimento: "Na CF, a tortura é crime inafiançável e insuscetível de graça ou anistia (art. 5º, XLIII).",
    },
    {
      topico: "Sigilo",
      subassunto: "Art. 4º",
      dificuldade: 4,
      raciocinio: "Art. 4º: o confidencial fica em sigilo, salvo se o cumprimento do dever ou a necessidade da justiça exigirem estritamente outra conduta.",
      enunciado:
        "Um agente tem acesso a informações sobre a vida privada de uma vítima, registradas numa ocorrência. Pelo Código de Conduta da ONU, essas informações",
      alternativas: [
        "podem ser divulgadas à imprensa sempre que o caso despertar grande interesse do público.",
        "ficam em sigilo, salvo se o dever ou a necessidade da justiça exigirem outra conduta.",
        "podem ser contadas a parentes do agente, desde que não saiam do círculo familiar.",
        "ficam em sigilo sempre, ainda que a justiça precise delas para julgar o caso.",
        "podem ser usadas pelo agente para fins pessoais, se não causarem dano à vítima.",
      ],
      correta: 1,
      explicacao:
        "O art. 4º manda manter em sigilo os assuntos de natureza confidencial em poder do agente, a não ser que o cumprimento do dever ou a necessidade da justiça exijam estritamente outro comportamento.",
      explicacaoErradas:
        "Interesse do público, círculo familiar e uso pessoal não estão entre as exceções. E o sigilo não é absoluto: cede quando o dever ou a justiça exigem.",
      pegadinha: "\"Sempre\" torna absoluto o que o artigo deixa ceder diante da justiça.",
      conhecimento: "O comentário ao art. 4º lembra que o agente obtém informações sobre a vida privada das pessoas, e que usá-las fora do dever ou da justiça é impróprio.",
    },
    {
      topico: "Saúde de quem está sob guarda",
      subassunto: "Art. 6º",
      dificuldade: 4,
      raciocinio: "Art. 6º: proteger a saúde de todas as pessoas sob guarda e adotar medidas imediatas para cuidados médicos, sempre que necessário.",
      enunciado: "Um preso, sob a guarda de uma equipe, passa mal e reclama de forte dor no peito. Pelo Código de Conduta da ONU,",
      alternativas: [
        "a equipe só deve chamar socorro se houver advogado do preso presente no local.",
        "a equipe deve esperar a chegada à delegacia, para não atrasar o registro da prisão.",
        "a equipe só tem dever de proteger a saúde de presos já condenados por sentença.",
        "a equipe deve adotar medidas imediatas para garantir cuidados médicos ao preso.",
        "a equipe pode negar socorro se suspeitar que o preso está fingindo para fugir.",
      ],
      correta: 3,
      explicacao:
        "O art. 6º obriga o agente a garantir a proteção da saúde de todas as pessoas sob sua guarda e, em especial, a adotar medidas imediatas para que recebam cuidados médicos sempre que necessário.",
      explicacaoErradas:
        "O dever não depende de advogado, não espera a delegacia e vale para todas as pessoas sob guarda, condenadas ou não. A suspeita de fingimento não autoriza negar socorro: o agente cuida da segurança e do atendimento ao mesmo tempo.",
      pegadinha: "\"Todas as pessoas sob sua guarda\": não só os condenados.",
      conhecimento: "A CF garante ao preso o respeito à integridade física e moral (art. 5º, XLIX).",
    },
    {
      topico: "Corrupção",
      subassunto: "Art. 7º",
      dificuldade: 4,
      raciocinio: "Art. 7º: não cometer atos de corrupção e também se opor com vigor e combatê-los. Dever duplo: não fazer e combater.",
      enunciado: "Sobre a corrupção, o Código de Conduta da ONU determina que os funcionários responsáveis pela aplicação da lei",
      alternativas: [
        "não cometam atos de corrupção e também se oponham com vigor a eles e os combatam.",
        "não cometam atos de corrupção, sem nenhum dever quanto aos atos praticados pelos colegas.",
        "só respondam por corrupção quando o ato causar prejuízo ao dinheiro público.",
        "possam aceitar presentes de pequeno valor, desde que comuniquem o fato depois.",
        "tratem a corrupção como falta leve, resolvida só dentro da própria corporação.",
      ],
      correta: 0,
      explicacao:
        "O art. 7º diz que os agentes não devem cometer atos de corrupção e devem também opor-se vigorosamente a eles e combatê-los. O comentário afirma que a corrupção, como qualquer abuso de autoridade, é incompatível com a profissão.",
      explicacaoErradas:
        "O dever não para em não praticar: inclui combater a corrupção dos outros. O Código não exige prejuízo ao dinheiro público nem autoriza presentes. E pede que a lei seja aplicada com rigor, não que a corrupção seja tratada como falta leve.",
      pegadinha: "Ficar só com metade do dever (não praticar) e esquecer o combate.",
      conhecimento: "No Código Penal, a corrupção passiva (art. 317) é crime do funcionário público que solicita ou recebe vantagem indevida.",
    },
    {
      topico: "Respeito ao Código e denúncia",
      subassunto: "Art. 8º",
      dificuldade: 5,
      raciocinio: "Art. 8º: quem tiver motivos para crer que houve ou que está para haver violação comunica aos superiores e, se necessário, a outras autoridades ou órgãos de revisão e reparação.",
      enunciado:
        "Um agente percebe que colegas estão prestes a violar o Código de Conduta da ONU numa operação. Segundo o art. 8º do Código, ele deve",
      alternativas: [
        "ficar calado, para não quebrar a hierarquia e a disciplina da sua corporação.",
        "levar o fato só à imprensa, que é o meio mais rápido para impedir a violação.",
        "comunicar aos superiores e, se preciso, a outras autoridades ou órgãos de revisão.",
        "agir só depois que a violação ocorrer, pois não pode presumir conduta futura.",
        "comunicar o fato apenas ao Ministério Público, sem passar antes pelos seus superiores.",
      ],
      correta: 2,
      explicacao:
        "O art. 8º manda o agente que tiver motivos para acreditar que houve ou que está para haver uma violação do Código comunicar o fato aos seus superiores e, se necessário, a outras autoridades competentes ou órgãos com poderes de revisão e reparação.",
      explicacaoErradas:
        "Ficar calado contraria o dever de se opor às violações. A imprensa não é o primeiro caminho previsto. O dever existe também antes da violação (\"está para haver\"). E o caminho começa pelos superiores, indo a outras autoridades se necessário.",
      pegadinha: "\"Houve ou está para haver\": o dever de comunicar vale antes do fato.",
      conhecimento: "O mesmo artigo pede que o agente, na medida das suas possibilidades, evite e se oponha com rigor a qualquer violação da lei e do Código.",
    },
    {
      topico: "Natureza",
      subassunto: "Resolução 34/169 e arts. 1º e 2º",
      dificuldade: 5,
      raciocinio: "Código: Assembleia Geral da ONU, 1979, Resolução 34/169; não é tratado nem prevê sanção. Art. 1º: servir e proteger contra atos ilegais. Art. 2º: dignidade e direitos humanos.",
      enunciado:
        "Considere as afirmativas sobre o Código de Conduta para os Funcionários Responsáveis pela Aplicação da Lei.\nI. Foi adotado pela Assembleia Geral da ONU em 1979, pela Resolução 34/169.\nII. No cumprimento do dever, os agentes devem respeitar e proteger a dignidade humana e manter e apoiar os direitos humanos de todas as pessoas.\nIII. Os agentes devem cumprir o dever que a lei lhes impõe, servindo a comunidade e protegendo todas as pessoas contra atos ilegais.\nIV. Por ser resolução da Assembleia Geral, obriga os Estados como um tratado ratificado, com sanções previstas no próprio Código.\nEstão corretas as afirmativas",
      alternativas: ["I e II, apenas.", "I, II e III, apenas.", "II e IV, apenas.", "II, III e IV, apenas.", "I, II, III e IV."],
      correta: 1,
      explicacao:
        "I traz a data e a resolução de adoção. II reproduz o art. 2º, e III, o art. 1º. A IV está errada: resolução da Assembleia Geral não é tratado ratificado, e o Código não prevê sanções; ele orienta a conduta dos agentes e dos Estados.",
      explicacaoErradas:
        "As opções com a IV tratam a resolução como tratado com sanção, o que ela não é. A opção \"I e II, apenas\" deixa de fora a III, que está certa.",
      pegadinha: "Confundir resolução da ONU com tratado.",
      conhecimento: "A Declaração Universal de 1948 também é resolução da Assembleia Geral, e não tratado.",
    },
    {
      topico: "Arma de fogo",
      subassunto: "Arts. 3º, 4º e 8º",
      dificuldade: 5,
      raciocinio: "Arma de fogo só com resistência armada ou risco à vida de outros. Fuga de pessoa desarmada, sem ameaça, não basta.",
      enunciado: "Assinale a conduta que o Código de Conduta da ONU NÃO admite.",
      alternativas: [
        "Usar força razoável para conter alguém que resiste à prisão, na medida exigida.",
        "Manter em sigilo dados confidenciais, salvo quando o dever ou a justiça exigirem.",
        "Relatar de imediato às autoridades competentes todo disparo de arma de fogo.",
        "Comunicar a outras autoridades uma violação do Código, quando for necessário.",
        "Atirar num suspeito que apenas foge, desarmado e sem ameaçar a vida de ninguém.",
      ],
      correta: 4,
      explicacao:
        "Pelo comentário ao art. 3º, a arma de fogo, em geral, só cabe quando o suspeito oferece resistência armada ou põe em risco a vida de outros, e meios menos graves não bastam. A fuga de alguém desarmado, sem ameaça, não preenche essas condições.",
      explicacaoErradas:
        "Força razoável e proporcional é admitida (art. 3º). O sigilo com exceções é o art. 4º. O relato imediato do disparo está no comentário ao art. 3º. A comunicação a outras autoridades, se necessário, é o art. 8º.",
      pegadinha: "Na pergunta com NÃO, as certas são deveres; a errada é a força sem necessidade.",
      conhecimento: "Os Princípios Básicos da ONU de 1990 repetem que a arma de fogo só deve ser usada quando for estritamente inevitável para proteger a vida.",
    },
  ],
};
