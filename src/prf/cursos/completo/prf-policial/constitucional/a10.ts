import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-10",
  resumo: {
    ideia:
      "No presidencialismo, o Presidente é ao mesmo tempo Chefe de Estado e Chefe de Governo. Ele tem mandato fixo e responde por seus atos, com regras próprias de processo.",
    itens: [
      {
        termo: "República",
        faz: "Temporariedade, eletividade e responsabilidade do governante. Monarquia é o oposto.",
      },
      {
        termo: "Mandato",
        faz: "Quatro anos, com início em 5 de janeiro do ano seguinte ao da eleição. Uma reeleição seguida é permitida.",
      },
      {
        termo: "Posse",
        faz: "Se em 10 dias o eleito não assumir, sem força maior, o cargo é declarado vago.",
      },
      {
        termo: "Substituição",
        faz: "O Vice substitui e sucede. Presidente da Câmara, do Senado e do STF só substituem, nessa ordem.",
        pista: "Quem é réu no STF não entra na linha, mas segue chefiando a sua Casa.",
      },
      {
        termo: "Dupla vacância",
        faz: "Eleição direta em 90 dias. Nos dois últimos anos do mandato, indireta, em 30 dias, pelo Congresso.",
        pista: "O eleito só completa o período.",
      },
      {
        termo: "Decreto autônomo",
        faz: "Art. 84, VI: organização da administração sem aumento de despesa e sem criar ou extinguir órgão, e extinção de cargos vagos.",
      },
      {
        termo: "Delegação",
        faz: "Incisos VI, XII e XXV, primeira parte, a Ministros, ao PGR ou ao AGU.",
      },
      {
        termo: "Imunidades",
        faz: "Só no mandato: o Presidente não responde por atos estranhos às funções e só é preso com sentença condenatória.",
        pista: "Isso vale só para crime e não se estende a Governadores.",
      },
      {
        termo: "Crime comum",
        faz: "Câmara autoriza por 2/3, STF julga. Fica suspenso quando o STF recebe a denúncia.",
      },
      {
        termo: "Crime de responsabilidade",
        faz: "Câmara autoriza por 2/3, Senado julga, sob a presidência do Presidente do STF. Condena por 2/3: perda do cargo e 8 anos de inabilitação.",
        pista: "Fica suspenso quando o Senado instaura o processo.",
      },
      {
        termo: "Ministros e Conselhos",
        faz: "Ministro: brasileiro, mais de 21 anos, nos direitos políticos. Os Conselhos só opinam.",
      },
    ],
    cuidado:
      "Depois de 180 dias sem julgamento, cessa o afastamento do Presidente, mas o processo continua.",
  },
  questoes: [
    {
      topico: "Poder Executivo",
      subassunto: "Chefia de Estado e de Governo",
      dificuldade: 4,
      raciocinio:
        "Chefia de Estado olha para fora e representa o país.",
      enunciado:
        "Em uma semana, o Presidente exerceu a direção superior da administração federal, sancionou uma lei e celebrou um tratado com outro país. Nesse caso, o ato típico da Chefia de Estado é",
      alternativas: [
        "a sanção da lei, porque vale para todo o território nacional",
        "a direção superior da administração, pois envolve as polícias federais",
        "a sanção da lei e a direção da administração, porque são atos de poder",
        "os três atos, porque não existe diferença entre as chefias na CF",
        "a celebração do tratado, pois representa o país no plano externo",
      ],
      correta: 4,
      explicacao:
        "A Chefia de Estado representa o país no plano internacional, como ao manter relações e celebrar tratados (art. 84, VII e VIII). A direção da administração e a sanção de leis ligam-se à Chefia de Governo.",
      explicacaoErradas:
        "“Todo o território nacional” não faz da sanção um ato de Estado. “Polícias federais” não muda a natureza de governo. “Atos de poder” é critério vago. “Não existe diferença” erra: a mesma pessoa acumula funções diferentes.",
      pegadinha:
        "No presidencialismo, a mesma pessoa exerce as duas chefias. No parlamentarismo, costumam ser pessoas diferentes.",
      conhecimento:
        "O tratado celebrado pelo Presidente fica sujeito a referendo do Congresso Nacional.",
    },
    {
      topico: "Poder Executivo",
      subassunto: "Posse",
      dificuldade: 4,
      raciocinio:
        "Conte os dias a partir da data fixada.",
      enunciado:
        "Doze dias após a data fixada para a posse, o Presidente eleito não assumiu, sem qualquer motivo de força maior. Nesse caso, segundo a CF,",
      alternativas: [
        "o cargo será declarado vago, pois passaram dez dias sem a posse",
        "o Congresso marca nova data, até o limite de trinta dias",
        "o Presidente anterior permanece no cargo até o eleito tomar posse",
        "o cargo só será vago depois de uma decisão do Tribunal Superior Eleitoral",
        "o Presidente eleito deve ser julgado pelo Senado por crime de responsabilidade",
      ],
      correta: 0,
      explicacao:
        "O parágrafo único do art. 78 declara vago o cargo se, decorridos dez dias da data fixada, o Presidente ou o Vice não tiver assumido, salvo motivo de força maior.",
      explicacaoErradas:
        "“Até o limite de trinta dias” não está no art. 78. “O Presidente anterior permanece” não é a solução da CF. “Tribunal Superior Eleitoral” não precisa decidir. “Crime de responsabilidade” não cabe a quem ainda não assumiu.",
      pegadinha:
        "A regra dos dez dias tem uma ressalva: motivo de força maior.",
      conhecimento:
        "A posse ocorre em sessão do Congresso Nacional, com o compromisso de manter, defender e cumprir a Constituição.",
    },
    {
      topico: "Poder Executivo",
      subassunto: "Dupla vacância",
      dificuldade: 5,
      raciocinio:
        "Veja em qual metade do mandato a última vaga surgiu.",
      enunciado:
        "No início do terceiro ano do mandato, o Presidente morreu. Dois meses depois, o Vice, que havia assumido, renunciou. Sobre a escolha dos novos governantes, segundo a CF,",
      alternativas: [
        "será eleição direta noventa dias depois da última vaga, por novo mandato de quatro anos",
        "será eleição direta noventa dias depois da última vaga, para completar o período",
        "será eleição indireta trinta dias depois da última vaga, para completar o período",
        "será eleição indireta trinta dias depois da última vaga, por novo mandato de quatro anos",
        "o Presidente da Câmara assume e fica no cargo até o fim do mandato em curso",
      ],
      correta: 2,
      explicacao:
        "Se a vacância ocorre nos dois últimos anos do período, a eleição é feita pelo Congresso, trinta dias depois da última vaga (art. 81, § 1º). Os eleitos só completam o período (§ 2º).",
      explicacaoErradas:
        "“Eleição direta noventa dias depois” vale nos dois primeiros anos. “Novo mandato de quatro anos” contraria o § 2º. “Até o fim do mandato” erra: o Presidente da Câmara só substitui em caráter temporário.",
      pegadinha:
        "Só o Vice sucede. Os demais da linha apenas substituem até a posse dos eleitos.",
      conhecimento:
        "Nos Estados e Municípios, o STF reconhece autonomia para tratar da dupla vacância.",
    },
    {
      topico: "Poder Executivo",
      subassunto: "Linha de substituição",
      dificuldade: 5,
      raciocinio:
        "Se quem é réu no STF é afastado da Presidência, o substituto também não pode exercê-la.",
      enunciado:
        "O Presidente da Câmara virou réu em ação penal no STF. Em seguida, Presidente e Vice viajaram ao exterior ao mesmo tempo. Segundo o STF, esse Deputado",
      alternativas: [
        "assume a Presidência, pois a ordem do art. 80 não admite exceção",
        "não pode substituir o Presidente, mas segue presidindo a Câmara",
        "não pode substituir o Presidente e perde a presidência da Câmara",
        "assume a Presidência, se a Câmara autorizar por dois terços dos votos",
        "assume a Presidência, mas não pode assinar leis ou decretos no período",
      ],
      correta: 1,
      explicacao:
        "Na ADPF 402, o STF firmou que quem é réu em ação penal na Corte não pode substituir o Presidente da República, mas não precisa deixar a chefia da sua Casa. A vez passa ao seguinte da linha.",
      explicacaoErradas:
        "“Não admite exceção” ignora a decisão do STF. “Perde a presidência da Câmara” vai além da decisão. “Dois terços dos votos” é regra de outro momento. “Não pode assinar” é limite sem base.",
      pegadinha:
        "O efeito é só sair da linha de substituição.",
      conhecimento:
        "Nesse caso, o chamado será o Presidente do Senado e, depois dele, o Presidente do STF.",
    },
    {
      topico: "Poder Executivo",
      subassunto: "Decreto autônomo",
      dificuldade: 5,
      raciocinio:
        "Separe cargo vago de cargo ocupado e órgão de cargo.",
      enunciado:
        "Um decreto presidencial reorganizou a estrutura interna de um Ministério sem aumento de despesa, extinguiu cargos vagos e extinguiu uma secretaria. Esse decreto é",
      alternativas: [
        "válido em tudo, pois o decreto autônomo tem a mesma força das leis",
        "inválido em tudo, pois toda essa matéria exige lei formal",
        "válido em tudo, pois a extinção não aumentou nenhuma despesa",
        "inválido só na extinção da secretaria, pois órgão depende de lei",
        "inválido só quanto aos cargos vagos, pois cargos dependem de lei",
      ],
      correta: 3,
      explicacao:
        "O art. 84, VI, permite decreto para organizar a administração, sem aumento de despesa nem criação ou extinção de órgãos, e para extinguir funções ou cargos vagos. A secretaria é órgão, e extinguir órgão exige lei.",
      explicacaoErradas:
        "“Válido em tudo” esquece a vedação quanto a órgãos, mesmo sem despesa. “Inválido em tudo” ignora o inciso VI. “Só quanto aos cargos vagos” inverte a regra: é a alínea “b” que os permite.",
      pegadinha:
        "Cargo vago se extingue por decreto. Cargo ocupado depende de lei.",
      conhecimento:
        "O decreto autônomo é ato primário: retira o fundamento da própria CF, e não de uma lei.",
    },
    {
      topico: "Poder Executivo",
      subassunto: "Delegação de atribuições",
      dificuldade: 5,
      raciocinio:
        "Só três incisos, e um deles só em parte.",
      enunciado:
        "O Presidente quer delegar a um Ministro de Estado certas atribuições do art. 84. Pode ser delegado, segundo o parágrafo único desse artigo,",
      alternativas: [
        "o veto parcial a projetos de lei aprovados pelo Congresso",
        "a edição de medidas provisórias em caso de urgência",
        "a decretação do estado de defesa por tempo determinado",
        "a extinção de cargos públicos ocupados, na forma da lei",
        "a concessão de indulto e a comutação de penas",
      ],
      correta: 4,
      explicacao:
        "O parágrafo único permite delegar os incisos VI, XII e XXV, primeira parte, a Ministros, ao PGR ou ao AGU. O inciso XII trata do indulto e da comutação de penas.",
      explicacaoErradas:
        "“Veto parcial”, “medidas provisórias” e “estado de defesa” estão fora dos incisos delegáveis. “Cargos públicos ocupados” exige lei, e só a primeira parte do inciso XXV, o provimento, é delegável.",
      pegadinha:
        "O inciso XXV é delegável só em parte: prover, e não extinguir.",
      conhecimento:
        "O STF admite delegar também a demissão de servidor, como o outro lado do poder de prover.",
    },
    {
      topico: "Responsabilidade do Presidente",
      subassunto: "Irresponsabilidade temporária",
      dificuldade: 5,
      raciocinio:
        "A proteção é só penal, e só durante o mandato.",
      enunciado:
        "Antes de se eleger Presidente, uma pessoa cometeu crime comum e causou dano a terceiro. Já no mandato, a vítima ajuizou ação de indenização. Sobre esse caso,",
      alternativas: [
        "a ação civil pode correr, e o processo penal espera o fim do mandato",
        "as duas responsabilidades ficam suspensas até o fim do mandato",
        "a ação civil espera, e o processo penal segue depois de autorização",
        "o crime fica extinto, pois a CF dá imunidade material ao Presidente",
        "o processo penal corre logo, pois o crime é anterior ao mandato",
      ],
      correta: 0,
      explicacao:
        "O art. 86, § 4º, impede responsabilizar o Presidente, no mandato, por atos estranhos às funções. O STF limita isso à esfera penal. As ações civis podem correr, e o crime será apurado depois do mandato.",
      explicacaoErradas:
        "“As duas responsabilidades” estende a regra à esfera civil. “A ação civil espera” inverte a regra. “Imunidade material” não existe para o Presidente. “Corre logo” esquece que o ato é estranho às funções.",
      pegadinha:
        "A proteção é temporária: o Presidente não fica impune.",
      conhecimento:
        "Se o crime tiver relação com o exercício das funções, cabe o processo do art. 86, com autorização da Câmara.",
    },
    {
      topico: "Responsabilidade do Presidente",
      subassunto: "Prisão e Governadores",
      dificuldade: 5,
      raciocinio:
        "Essas regras protegem o Chefe de Estado.",
      enunciado:
        "Uma Constituição Estadual diz que o Governador só será preso após sentença condenatória e que só será processado com autorização da Assembleia. Segundo o STF, essas regras são",
      alternativas: [
        "válidas, por simetria com as prerrogativas do Presidente da República",
        "válidas apenas no ponto que exige autorização prévia da Assembleia",
        "inválidas, pois não se estendem ao Governador nem podem ser criadas",
        "válidas, se aprovadas por três quintos da Assembleia Legislativa",
        "inválidas somente quanto à exigência de uma sentença condenatória",
      ],
      correta: 2,
      explicacao:
        "A regra da prisão é exclusiva do Presidente, pois está ligada à Chefia de Estado. O STF também entende que os Estados não podem condicionar a ação penal contra o Governador à autorização da Assembleia.",
      explicacaoErradas:
        "“Por simetria” é o erro: essas prerrogativas não se repetem nos Estados. “Apenas no ponto” e “somente quanto” salvam uma regra inválida. “Três quintos” não muda a conclusão.",
      pegadinha:
        "Nem tudo que vale para o Presidente vale para o Governador.",
      conhecimento:
        "Governadores são julgados pelo STJ nos crimes comuns (art. 105, I, “a”).",
    },
    {
      topico: "Responsabilidade do Presidente",
      subassunto: "Afastamento",
      dificuldade: 5,
      raciocinio:
        "O afastamento depende de quem julga.",
      enunciado:
        "A Câmara autorizou o processo contra o Presidente por crime comum. Sobre as etapas seguintes, é certo que o Presidente",
      alternativas: [
        "fica suspenso de suas funções logo depois da autorização da Câmara",
        "fica suspenso quando o Senado Federal instaurar o processo",
        "fica preso até o fim do julgamento se houver flagrante em crime afiançável",
        "fica suspenso se o STF receber a denúncia, até o limite de 180 dias",
        "perde o cargo se o julgamento não terminar em 180 dias a partir do recebimento",
      ],
      correta: 3,
      explicacao:
        "Nas infrações comuns, o Presidente fica suspenso se o STF receber a denúncia ou queixa (art. 86, § 1º, I). Depois de 180 dias sem julgamento, cessa o afastamento, e o processo continua (§ 2º).",
      explicacaoErradas:
        "“Logo depois da autorização” erra: o STF pode não receber a denúncia. “Senado Federal” é o caminho do crime de responsabilidade. “Fica preso” contraria o § 3º. “Perde o cargo” contraria o § 2º.",
      pegadinha:
        "Crime comum: recebimento pelo STF. Crime de responsabilidade: instauração pelo Senado.",
      conhecimento:
        "Condenado por crime comum, o Presidente tem os direitos políticos suspensos e perde o mandato.",
    },
    {
      topico: "Responsabilidade do Presidente",
      subassunto: "Impeachment",
      dificuldade: 5,
      raciocinio:
        "Câmara autoriza, e o Senado decide se abre o processo.",
      enunciado:
        "A Câmara autorizou, por 2/3, o processo de impeachment contra o Presidente. Segundo a CF e o STF, a etapa no Senado",
      alternativas: [
        "é automática, pois o Senado fica vinculado ao que a Câmara decidiu",
        "pode terminar sem processo, pois o Senado decide se ele será instaurado",
        "é presidida pelo Presidente do Senado, que vota apenas se houver empate",
        "exige a maioria absoluta para a condenação à perda do cargo",
        "é encerrada se o Presidente renunciar na própria sessão de julgamento",
      ],
      correta: 1,
      explicacao:
        "Na ADPF 378, o STF decidiu que a Câmara só autoriza, e o Senado pode não instaurar o processo. Instaurado, o julgamento é presidido pelo Presidente do STF, e a condenação exige 2/3 dos votos (art. 52, parágrafo único).",
      explicacaoErradas:
        "“Automática” contraria a ADPF 378. “Presidente do Senado” erra quem preside. “Maioria absoluta” erra o quórum. “Renunciar” na sessão de julgamento não paralisa o processo, como o STF decidiu.",
      pegadinha:
        "A pena é a perda do cargo, com inabilitação por oito anos, sem prejuízo das demais sanções.",
      conhecimento:
        "A denúncia por crime de responsabilidade pode ser feita por qualquer cidadão.",
    },
    {
      topico: "Poder Executivo",
      subassunto: "Ministros de Estado",
      dificuldade: 4,
      raciocinio:
        "Lembre as idades e o cargo que exige brasileiro nato.",
      enunciado:
        "O Presidente quer nomear uma brasileira naturalizada de 22 anos, no gozo dos direitos políticos. Em relação ao cargo de Ministro de Estado, ela",
      alternativas: [
        "não pode ser Ministra, pois a idade mínima do cargo é de 35 anos",
        "não pode ser Ministra, pois todos os cargos exigem brasileiro nato",
        "pode ser Ministra, se o Senado aprovar a indicação feita pelo Presidente",
        "pode ser Ministra de qualquer pasta, sem nenhuma exceção prevista",
        "pode ser Ministra, exceto da pasta da Defesa, que é só de nato",
      ],
      correta: 4,
      explicacao:
        "O art. 87 pede brasileiros maiores de 21 anos, no exercício dos direitos políticos. Não exige que sejam natos, salvo o Ministro de Estado da Defesa (art. 12, § 3º, VII).",
      explicacaoErradas:
        "“35 anos” é a idade do Presidente. “Todos os cargos” erra: há só uma exceção. “Se o Senado aprovar” não se aplica: Ministro é de livre nomeação. “Sem nenhuma exceção” esquece a Defesa.",
      pegadinha:
        "A idade mínima de Ministro é maior que 21, e não 18 nem 35.",
      conhecimento:
        "Para o STF, a falta de referendo do Ministro não invalida o decreto do Presidente.",
    },
    {
      topico: "Poder Executivo",
      subassunto: "Conselhos",
      dificuldade: 5,
      raciocinio:
        "Os dois Conselhos têm só função de consulta.",
      enunciado:
        "O Presidente vai decretar estado de defesa e ouviu o Conselho da República, que opinou contra. Sobre esse Conselho, segundo a CF,",
      alternativas: [
        "a opinião não obriga o Presidente, pois o órgão é de consulta",
        "a opinião obriga o Presidente, pois o tema trata da ordem pública",
        "seis cidadãos natos integram o órgão, com mandato de quatro anos",
        "é presidido pelo Presidente do Senado Federal, com voto de qualidade",
        "o Ministro da Defesa integra o órgão como um membro permanente",
      ],
      correta: 0,
      explicacao:
        "O art. 89 chama o Conselho da República de órgão superior de consulta do Presidente. Ele se pronuncia sobre intervenção federal, estado de defesa e estado de sítio (art. 90, I), sem obrigar quem o ouviu.",
      explicacaoErradas:
        "“Obriga o Presidente” contraria a natureza consultiva. “Mandato de quatro anos” erra: são três anos, vedada a recondução. “Presidente do Senado” erra: quem convoca e preside é o da República. “Ministro da Defesa” é membro do outro Conselho.",
      pegadinha:
        "No Conselho da República está o Ministro da Justiça. No de Defesa Nacional, estão o da Justiça e o da Defesa, entre outros.",
      conhecimento:
        "Os seis cidadãos têm mais de 35 anos: dois nomeados pelo Presidente, dois eleitos pelo Senado e dois pela Câmara.",
    },
  ],
};
