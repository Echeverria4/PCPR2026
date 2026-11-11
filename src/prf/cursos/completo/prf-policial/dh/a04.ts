import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "dh-04",
  resumo: {
    ideia:
      "A Declaração Universal dos Direitos Humanos (1948) é o documento central do sistema global: põe a dignidade como núcleo, reúne direitos civis e políticos e direitos econômicos, sociais e culturais, e, embora adotada como resolução, é tida pela corrente majoritária como juridicamente vinculante.",
    itens: [
      {
        termo: "Origem",
        faz: "Adotada pela Assembleia Geral da ONU na Resolução 217-A (III), em 10 de dezembro de 1948, depois das atrocidades da Segunda Guerra, sem votos contrários e com abstenções.",
      },
      {
        termo: "Natureza jurídica",
        faz: "Foi adotada como resolução, não como tratado. Prevalece que tem força vinculante: é interpretação autorizada da expressão “direitos humanos” da Carta da ONU e virou costume internacional e princípio geral de direito.",
      },
      {
        termo: "Estrutura",
        faz: "Preâmbulo com os fundamentos (dignidade, reação às barbáries, relações amistosas). Depois, direitos civis e políticos (até o art. 21), com consenso, e econômicos, sociais e culturais (a partir do art. 22), com divergência entre os blocos da Guerra Fria. Os de terceira dimensão não são desenvolvidos.",
      },
      {
        termo: "Preâmbulo",
        faz: "A dignidade inerente a todos e os direitos iguais e inalienáveis são fundamento da liberdade, da justiça e da paz. Os direitos devem ser protegidos pelo Estado de Direito, para que ninguém seja compelido à rebelião contra a tirania. A Declaração é ideal comum, promovido pelo ensino e pela educação.",
      },
      {
        termo: "Igualdade (arts. 1º, 2º e 7º)",
        faz: "Todos nascem livres e iguais em dignidade e direitos. Sem distinção de raça, cor, sexo, língua, religião, opinião, origem, riqueza, nascimento ou outra condição, nem pelo estatuto político do país ou território. Todos são iguais perante a lei.",
      },
      {
        termo: "Vida, escravidão e tortura (arts. 3º a 6º)",
        faz: "Vida, liberdade e segurança pessoal; proibição da escravidão, da servidão e do tráfico de escravos; proibição da tortura e de penas ou tratamentos cruéis, desumanos ou degradantes; reconhecimento da personalidade jurídica em todos os lugares.",
      },
      {
        termo: "Garantias processuais (arts. 8º a 11)",
        faz: "Recurso efetivo aos tribunais; ninguém arbitrariamente preso, detido ou exilado; julgamento justo e público por tribunal independente e imparcial; presunção de inocência até a culpa ser legalmente provada; nenhuma condenação por fato que não era delito nem pena mais grave que a da época.",
      },
      {
        termo: "Vida privada, circulação e asilo (arts. 12 a 14)",
        faz: "Proteção contra interferências arbitrárias na vida privada, na família, no lar e na correspondência. Circular e residir dentro de um Estado, deixar qualquer país, inclusive o próprio, e regressar. Asilo contra perseguição, não invocável por crime de direito comum ou atos contrários aos propósitos da ONU.",
      },
      {
        termo: "Liberdades (arts. 15 a 21)",
        faz: "Nacionalidade (sem privação arbitrária, com direito de mudá-la); casamento com livre e pleno consentimento; propriedade; pensamento, consciência e religião (inclusive mudar de religião); opinião e expressão sem fronteiras; reunião e associação pacíficas, sem obrigação de se associar; participação no governo, acesso igual ao serviço público e eleições periódicas com voto secreto.",
      },
      {
        termo: "Direitos sociais (arts. 22 a 27)",
        faz: "Segurança social; trabalho, livre escolha do emprego, proteção contra o desemprego, igual remuneração por igual trabalho, sindicatos; repouso, lazer, limitação razoável da jornada e férias pagas; padrão de vida digno; instrução gratuita ao menos nos graus elementares, com o elementar obrigatório; vida cultural.",
        pista: "Superior: acesso aberto a todos, pelo mérito.",
      },
      {
        termo: "Deveres e limites (arts. 29 e 30)",
        faz: "A pessoa tem deveres para com a comunidade. Os direitos só sofrem as limitações fixadas em lei para assegurar os direitos dos outros e as justas exigências da moral, da ordem pública e do bem-estar numa sociedade democrática. Nenhuma disposição pode ser usada para destruir os direitos da Declaração.",
      },
    ],
    cuidado:
      "A Declaração proíbe aplicar pena mais grave que a da época do fato, mas não manda aplicar a lei posterior mais benéfica: essa regra está na Convenção Americana (art. 9º) e na Constituição (art. 5º, XL).",
  },
  questoes: [
    {
      topico: "Declaração Universal",
      subassunto: "Natureza jurídica",
      dificuldade: 5,
      raciocinio: "Resolução, mas vinculante pela corrente majoritária.",
      enunciado:
        "Sobre a natureza jurídica da Declaração Universal dos Direitos Humanos, prevalece o entendimento de que ela:",
      alternativas: [
        "é tratado internacional ratificado pelo Brasil e aprovado pelo rito das emendas",
        "é simples recomendação da Assembleia Geral, sem nenhuma força jurídica",
        "foi adotada como resolução, mas tem força vinculante, como costume e interpretação da Carta da ONU",
        "só obriga os Estados que a assinaram em 1948, por ser acordo entre os presentes",
        "tem força de lei interna no Brasil desde que foi promulgada por decreto presidencial, como os demais tratados",
      ],
      correta: 2,
      explicacao:
        "A Declaração foi adotada pela Resolução 217-A (III) da Assembleia Geral, em 1948, e não como tratado. Ainda assim, prevalece que é vinculante: é interpretação autorizada da Carta da ONU e se tornou costume internacional e princípio geral de direito.",
      explicacaoErradas:
        "Ela não é “tratado internacional” e não passou pelo “rito das emendas”. A tese de “simples recomendação” é minoritária. Não depende de assinatura, pois não é “acordo entre os presentes”. E não foi “promulgada por decreto presidencial”.",
      pegadinha: "Concluir pela forma (resolução) que ela não obriga.",
      conhecimento: "A Declaração foi aprovada em 10 de dezembro de 1948, sem votos contrários.",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Estrutura",
      dificuldade: 4,
      raciocinio: "Civis e políticos com consenso; sociais com divergência; terceira dimensão não desenvolvida.",
      enunciado:
        "Sobre os direitos previstos na Declaração Universal, é correto afirmar que ela:",
      alternativas: [
        "trata só de direitos civis e políticos, deixando os sociais para outro documento",
        "trata só de direitos sociais, como reação às desigualdades do pós-guerra",
        "desenvolve em detalhes o direito ao meio ambiente e os direitos de solidariedade",
        "reúne direitos civis e políticos e direitos econômicos, sociais e culturais",
        "separa os direitos de liberdade, exigíveis, dos de igualdade, não exigíveis",
      ],
      correta: 3,
      explicacao:
        "A Declaração traz primeiro os direitos civis e políticos e depois os econômicos, sociais e culturais, como direitos de igual valor. Os sociais foram mais discutidos entre os blocos da época, mas entraram no texto. Os de terceira dimensão não são desenvolvidos.",
      explicacaoErradas:
        "Ela não trata “só de direitos civis e políticos” nem “só de direitos sociais”. Não desenvolve “o direito ao meio ambiente”. E não separa direitos de liberdade e de igualdade em “exigíveis” e “não exigíveis”: trata-os como indivisíveis.",
      pegadinha: "Achar que os direitos sociais ficaram de fora por causa da divergência política.",
      conhecimento: "Os direitos sociais, econômicos e culturais começam no art. 22, com a segurança social.",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Preâmbulo",
      dificuldade: 4,
      raciocinio: "Estado de Direito, para não forçar a rebelião contra a tirania.",
      enunciado:
        "No preâmbulo da Declaração Universal, considera-se essencial que os direitos humanos sejam protegidos pelo Estado de Direito para que:",
      alternativas: [
        "a pessoa não seja compelida, como último recurso, à rebelião contra a tirania e a opressão",
        "os Estados possam suspender os direitos em caso de guerra ou de comoção interna",
        "a ONU possa intervir militarmente em qualquer país que viole os direitos humanos de seu povo",
        "os direitos sociais só sejam garantidos depois de assegurados os direitos civis",
        "cada Estado escolha livremente quais direitos da Declaração vai reconhecer",
      ],
      correta: 0,
      explicacao:
        "O preâmbulo diz ser essencial que os direitos humanos sejam protegidos pelo Estado de Direito, para que o ser humano não seja compelido, como último recurso, à rebelião contra a tirania e a opressão.",
      explicacaoErradas:
        "O preâmbulo não trata de “suspender os direitos em caso de guerra”. Não autoriza a ONU a “intervir militarmente”. Não condiciona os direitos sociais aos civis. E a Declaração é ideal comum, não lista de que cada Estado “escolha livremente”.",
      pegadinha: "Confundir a menção à rebelião com um direito de rebelião armada.",
      conhecimento: "O preâmbulo põe a dignidade inerente a todos como fundamento da liberdade, da justiça e da paz.",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Igualdade",
      dificuldade: 5,
      raciocinio: "Art. 2º: nenhuma distinção, nem pelo estatuto político do território.",
      enunciado:
        "Pelo art. 2º da Declaração Universal, os direitos nela previstos valem para todos, sem distinção de raça, cor, sexo, língua, religião ou opinião e, além disso:",
      alternativas: [
        "desde que a pessoa seja nacional de um Estado membro das Nações Unidas",
        "salvo nos territórios sob tutela, que dependem da vontade da potência administradora do território",
        "desde que o país da pessoa tenha ratificado a Declaração por decreto interno",
        "sem distinção fundada no estatuto político do país ou território a que a pessoa pertença",
        "apenas para os adultos, pois os direitos das crianças ficaram para outro documento",
      ],
      correta: 3,
      explicacao:
        "O art. 2º proíbe distinção fundada no estatuto político, jurídico ou internacional do país ou território da pessoa, seja ele independente, sob tutela, sem governo próprio ou com soberania limitada.",
      explicacaoErradas:
        "A Declaração não exige ser “nacional de um Estado membro”. Não excetua “os territórios sob tutela”: inclui-os expressamente. Não depende de “ratificado por decreto”. E não se limita aos “adultos”: a infância tem proteção especial no art. 25.",
      pegadinha: "Achar que territórios sem soberania plena ficam fora da Declaração.",
      conhecimento: "Todos são iguais perante a lei e têm direito a igual proteção contra a discriminação (art. 7º).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Garantias processuais",
      dificuldade: 4,
      raciocinio: "Art. 9º: ninguém será arbitrariamente preso, detido ou exilado.",
      enunciado:
        "Numa fiscalização, um agente quer manter um condutor detido por horas, sem flagrante e sem ordem, só por desconfiança. Na Declaração Universal, essa conduta viola diretamente a regra de que:",
      alternativas: [
        "todos têm direito a repouso e lazer, com limitação razoável das horas de trabalho",
        "ninguém será arbitrariamente preso, detido ou exilado",
        "toda pessoa tem direito a uma nacionalidade e a mudar de nacionalidade",
        "toda pessoa tem direito à propriedade, só ou em sociedade com outros",
        "a vontade do povo será expressa em eleições periódicas e legítimas",
      ],
      correta: 1,
      explicacao:
        "O art. 9º da Declaração diz que ninguém será arbitrariamente preso, detido ou exilado. A detenção sem base legal, só por desconfiança, é arbitrária.",
      explicacaoErradas:
        "“Repouso e lazer” é direito social (art. 24). “Nacionalidade” está no art. 15. “Propriedade” está no art. 17. “Eleições periódicas” tratam da participação política (art. 21). Nenhum desses é o atingido.",
      pegadinha: "Nenhuma: questão de reconhecimento do artigo.",
      conhecimento: "Pela Constituição, ninguém será preso senão em flagrante ou por ordem escrita e fundamentada da autoridade judiciária competente (art. 5º, LXI).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Garantias processuais",
      dificuldade: 5,
      raciocinio: "DUDH: veda pena mais grave; não traz a retroatividade benéfica.",
      enunciado:
        "Sobre a lei penal no tempo, comparando a Declaração Universal com a Convenção Americana, é correto afirmar que:",
      alternativas: [
        "as duas proíbem pena mais grave que a da época do fato, mas só a Convenção manda aplicar a lei posterior mais leve",
        "só a Declaração manda aplicar a lei posterior mais leve, e a Convenção nada diz sobre a lei penal no tempo de forma expressa",
        "as duas admitem a condenação por fato que não era crime, se a conduta for grave e o país assim decidir",
        "nenhuma das duas trata da lei penal no tempo, que é assunto só da legislação interna de cada Estado",
        "a Declaração admite pena mais grave que a da época, desde que a lei nova seja aprovada antes da sentença",
      ],
      correta: 0,
      explicacao:
        "A Declaração (art. 11, 2) proíbe condenar por fato que não era delito e aplicar pena mais grave que a da época. A Convenção Americana (art. 9º) repete isso e acrescenta que, se lei posterior impuser pena mais leve, o condenado se beneficia.",
      explicacaoErradas:
        "Quem prevê a lei mais leve é a Convenção, não “só a Declaração”. Nenhuma delas admite “condenação por fato que não era crime”. Ambas tratam da lei penal no tempo, ao contrário de “nenhuma das duas trata”. E a Declaração não admite pena mais grave “antes da sentença”.",
      pegadinha: "Atribuir à Declaração a retroatividade da lei mais benéfica.",
      conhecimento: "A Constituição diz que a lei penal não retroagirá, salvo para beneficiar o réu (art. 5º, XL).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Garantias processuais",
      dificuldade: 4,
      raciocinio: "Art. 11: inocente até a culpa legalmente provada, em julgamento público com garantias.",
      enunciado:
        "Pela Declaração Universal, toda pessoa acusada de ato delituoso presume-se inocente até que:",
      alternativas: [
        "a polícia conclua o inquérito e aponte a autoria do fato",
        "o Ministério Público ofereça a denúncia e o juiz a receba",
        "seja presa em flagrante ou confesse o fato perante a autoridade",
        "sua culpa seja legalmente provada em julgamento público, com garantias de defesa",
        "o tribunal internacional confirme a decisão do tribunal nacional que o condenou em primeira instância",
      ],
      correta: 3,
      explicacao:
        "O art. 11, 1, diz que toda pessoa acusada tem direito a ser presumida inocente até que sua culpabilidade tenha sido provada de acordo com a lei, em julgamento público no qual lhe tenham sido asseguradas todas as garantias necessárias à defesa.",
      explicacaoErradas:
        "A conclusão do “inquérito”, o recebimento da “denúncia”, o “flagrante” e a “confissão” não afastam a presunção. E a Declaração não exige confirmação por “tribunal internacional”.",
      pegadinha: "Achar que o flagrante encerra a presunção de inocência.",
      conhecimento: "Na Constituição, ninguém será considerado culpado até o trânsito em julgado da sentença penal condenatória (art. 5º, LVII).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Circulação",
      dificuldade: 5,
      raciocinio: "Art. 13: circular dentro do Estado; deixar qualquer país, inclusive o próprio; regressar ao seu.",
      enunciado:
        "Sobre a liberdade de locomoção na Declaração Universal, é correto afirmar que toda pessoa tem direito de:",
      alternativas: [
        "entrar e fixar residência em qualquer país do mundo, sem autorização prévia",
        "deixar qualquer país, inclusive o próprio, e de regressar ao seu país",
        "circular livremente só no próprio país, sem direito de deixá-lo",
        "deixar o próprio país só com autorização prévia do governo local",
        "regressar ao seu país só se não tiver respondido a processo penal",
      ],
      correta: 1,
      explicacao:
        "Pelo art. 13, toda pessoa tem direito de circular livremente e escolher residência dentro de um Estado, e de deixar qualquer país, inclusive o próprio, e a ele regressar.",
      explicacaoErradas:
        "A Declaração não garante “entrar e fixar residência em qualquer país”: a circulação livre é dentro de um Estado. Ela garante deixar o país, ao contrário de “sem direito de deixá-lo”. Não exige “autorização prévia do governo”. E o regresso não depende de “não ter respondido a processo penal”.",
      pegadinha: "Ampliar o direito de sair para um direito de entrar em qualquer país.",
      conhecimento: "Na Constituição, a locomoção no território nacional em tempo de paz é livre, nos termos da lei (art. 5º, XV).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Asilo",
      dificuldade: 4,
      raciocinio: "Art. 14: não vale para crime de direito comum nem atos contra a ONU.",
      enunciado:
        "Uma pessoa procurada no seu país por roubos comuns pede asilo no Brasil, alegando perseguição. Pela Declaração Universal, o direito de asilo:",
      alternativas: [
        "vale para qualquer pessoa processada, por qualquer crime, pois o asilo é absoluto e irrestrito",
        "só pode ser concedido pela ONU, e não pelos Estados de destino",
        "não pode ser invocado em caso de perseguição motivada por crimes de direito comum",
        "só vale para quem é nacional de país membro do Conselho de Segurança da ONU",
        "obriga o Brasil a conceder nacionalidade brasileira a quem pede asilo",
      ],
      correta: 2,
      explicacao:
        "O art. 14 garante procurar e gozar asilo contra perseguição, mas o direito não pode ser invocado em caso de perseguição legitimamente motivada por crimes de direito comum ou por atos contrários aos propósitos e princípios das Nações Unidas.",
      explicacaoErradas:
        "O asilo não é “absoluto” nem vale para “qualquer crime”. É procurado em outros países, não concedido “pela ONU”. Não depende de ser nacional de membro do “Conselho de Segurança”. E não obriga a conceder “nacionalidade brasileira”.",
      pegadinha: "Achar que basta alegar perseguição.",
      conhecimento: "A concessão de asilo político é princípio do Brasil nas relações internacionais (CF, art. 4º, X).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Liberdades",
      dificuldade: 5,
      raciocinio: "Art. 15: nacionalidade, sem privação arbitrária e com direito de mudar.",
      enunciado:
        "Sobre a nacionalidade na Declaração Universal, é correto afirmar que:",
      alternativas: [
        "a pessoa pode ser privada da nacionalidade por decisão administrativa, se cometer crime",
        "toda pessoa tem direito a uma nacionalidade, mas não pode mudá-la depois de adulta",
        "a nacionalidade é concedida pela ONU a quem não tem pátria, como cidadania mundial",
        "ninguém será arbitrariamente privado de sua nacionalidade nem do direito de mudá-la",
        "só tem direito à nacionalidade quem nasceu dentro do casamento dos pais",
      ],
      correta: 3,
      explicacao:
        "O art. 15 garante a toda pessoa o direito a uma nacionalidade e diz que ninguém será arbitrariamente privado dela nem do direito de mudá-la.",
      explicacaoErradas:
        "A privação “por decisão administrativa” por crime seria arbitrária. A pessoa pode mudar de nacionalidade, ao contrário de “não pode mudá-la”. A ONU não concede “cidadania mundial”. E a Declaração não distingue filhos nascidos “dentro do casamento”: o art. 25 lhes dá a mesma proteção.",
      pegadinha: "Esquecer a segunda parte: o direito de mudar de nacionalidade.",
      conhecimento: "A Convenção Americana vai além: toda pessoa tem direito à nacionalidade do Estado em cujo território nasceu, se não tiver direito a outra (art. 20).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Liberdades",
      dificuldade: 4,
      raciocinio: "Art. 20: ninguém pode ser obrigado a fazer parte de uma associação.",
      enunciado:
        "Uma associação de servidores quer obrigar todos os policiais de uma unidade a se filiarem a ela. Pela Declaração Universal, essa exigência viola a regra de que:",
      alternativas: [
        "ninguém pode ser obrigado a fazer parte de uma associação",
        "só os sindicatos podem reunir trabalhadores de uma categoria",
        "a reunião depende de aviso prévio à autoridade competente",
        "o servidor público não tem direito de associação pacífica",
        "a filiação só é livre para quem não exerce função pública",
      ],
      correta: 0,
      explicacao:
        "O art. 20 garante a liberdade de reunião e de associação pacíficas e diz que ninguém pode ser obrigado a fazer parte de uma associação.",
      explicacaoErradas:
        "A Declaração não reserva a reunião de trabalhadores “só aos sindicatos”. O “aviso prévio” é regra da Constituição para reuniões, não do art. 20. O servidor tem, sim, direito de associação pacífica. E a liberdade de não se filiar não depende de “função pública”.",
      pegadinha: "Ver só a liberdade de associar-se e esquecer a de não se associar.",
      conhecimento: "Na Constituição, ninguém poderá ser compelido a associar-se ou a permanecer associado (art. 5º, XX).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Direitos políticos",
      dificuldade: 4,
      raciocinio: "Art. 21: acesso igual ao serviço público; eleições periódicas, sufrágio universal, voto secreto.",
      enunciado:
        "Sobre a participação política na Declaração Universal, é correto afirmar que toda pessoa tem direito de:",
      alternativas: [
        "votar só a partir do momento em que pague tributos ao Estado",
        "tomar parte no governo apenas por meio de representantes eleitos pelo voto",
        "acesso, em condições de igualdade, ao serviço público do seu país",
        "ocupar cargo público sem concurso, por indicação da comunidade",
        "votar em aberto, para que a vontade do povo fique registrada",
      ],
      correta: 2,
      explicacao:
        "Pelo art. 21, toda pessoa tem direito de tomar parte no governo, diretamente ou por representantes livremente escolhidos, e de acesso, em condições de igualdade, ao serviço público do seu país. A vontade do povo se expressa em eleições periódicas e legítimas, por sufrágio universal, com voto secreto ou processo equivalente.",
      explicacaoErradas:
        "O voto não depende de “pague tributos”: o sufrágio é universal. A participação pode ser direta ou por representantes, não “apenas por meio de representantes”. A Declaração não garante cargo “sem concurso, por indicação”. E o voto é “secreto”, não “em aberto”.",
      pegadinha: "Excluir a participação direta.",
      conhecimento: "A vontade do povo é a base da autoridade do governo (art. 21, 3).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Direitos sociais",
      dificuldade: 5,
      raciocinio: "Art. 26: elementar obrigatória; gratuita ao menos nos graus elementares; superior pelo mérito.",
      enunciado:
        "Sobre o direito à instrução na Declaração Universal, é correto afirmar que:",
      alternativas: [
        "toda instrução, inclusive a superior, deve ser gratuita e obrigatória para todos",
        "a instrução superior deve ser gratuita, e a elementar pode ser cobrada pelo Estado das famílias",
        "a escolha do gênero de instrução cabe só ao Estado, que fixa o ensino dos filhos",
        "a instrução técnico-profissional é reservada a quem já concluiu o ensino superior",
        "a instrução elementar é obrigatória, e o acesso à superior é aberto a todos pelo mérito",
      ],
      correta: 4,
      explicacao:
        "Pelo art. 26, a instrução é gratuita ao menos nos graus elementares e fundamentais; a elementar é obrigatória; a técnico-profissional deve ser acessível a todos; e a superior, aberta a todos em igualdade, com base no mérito. Os pais têm prioridade na escolha do gênero de instrução dos filhos.",
      explicacaoErradas:
        "A gratuidade obrigatória não alcança “inclusive a superior”. A elementar é que deve ser gratuita, ao contrário de “pode ser cobrada”. A escolha cabe com prioridade aos pais, não “só ao Estado”. E a técnico-profissional é acessível a todos, sem exigir “ensino superior”.",
      pegadinha: "Trocar elementar por superior na gratuidade.",
      conhecimento: "A instrução deve visar ao pleno desenvolvimento da personalidade e ao respeito aos direitos humanos (art. 26, 2).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Direitos sociais",
      dificuldade: 4,
      raciocinio: "Art. 23: igual remuneração por igual trabalho; art. 24: férias pagas.",
      enunciado:
        "Entre os direitos ligados ao trabalho, a Declaração Universal prevê expressamente:",
      alternativas: [
        "a estabilidade de todo trabalhador após dez anos no mesmo emprego",
        "a jornada máxima de quarenta horas semanais em todos os países",
        "a proibição de qualquer trabalho noturno para maiores de dezoito anos de idade",
        "a igual remuneração por igual trabalho e as férias remuneradas periódicas",
        "a participação obrigatória do trabalhador no lucro de toda empresa",
      ],
      correta: 3,
      explicacao:
        "A Declaração prevê o trabalho, a livre escolha do emprego, a proteção contra o desemprego, a igual remuneração por igual trabalho, a remuneração justa, os sindicatos (art. 23) e o repouso, o lazer, a limitação razoável das horas de trabalho e as férias remuneradas periódicas (art. 24).",
      explicacaoErradas:
        "A Declaração não fala em “estabilidade” após dez anos, em “quarenta horas semanais”, em proibir “trabalho noturno” para adultos nem em “participação obrigatória” nos lucros. Ela fala só em limitação razoável da jornada.",
      pegadinha: "Exigir da Declaração números que ela não fixa.",
      conhecimento: "Toda pessoa tem direito a organizar sindicatos e a neles ingressar (art. 23, 4).",
    },
    {
      topico: "Declaração Universal",
      subassunto: "Deveres e limites",
      dificuldade: 5,
      raciocinio: "Art. 29: limites só por lei e com finalidades fixadas; art. 30: proibição do abuso.",
      enunciado:
        "Sobre as limitações aos direitos na Declaração Universal, é correto afirmar que:",
      alternativas: [
        "os direitos da Declaração são absolutos e não admitem nenhuma limitação",
        "o Estado pode limitar qualquer direito por ato do Executivo, quando julgar conveniente",
        "uma pessoa pode invocar a Declaração para praticar atos que destruam direitos de outros",
        "sofrem só os limites fixados em lei para proteger os direitos alheios e a moral, a ordem pública e o bem-estar",
        "as limitações só valem em tempo de guerra declarada, com autorização prévia do Conselho de Segurança da ONU",
      ],
      correta: 3,
      explicacao:
        "Pelo art. 29, a pessoa tem deveres para com a comunidade, e os direitos só sofrem as limitações determinadas por lei para assegurar o respeito aos direitos dos outros e satisfazer as justas exigências da moral, da ordem pública e do bem-estar numa sociedade democrática. O art. 30 proíbe usar a Declaração para destruir os próprios direitos.",
      explicacaoErradas:
        "Os direitos “não são absolutos” em geral. A limitação depende de lei, não de “ato do Executivo” por conveniência. O art. 30 proíbe justamente invocar a Declaração para “destruir direitos de outros”. E as limitações não dependem de “guerra declarada”.",
      pegadinha: "Achar que a Declaração não fala em deveres.",
      conhecimento: "A pessoa tem deveres para com a comunidade, fora da qual não é possível o livre e pleno desenvolvimento da personalidade (art. 29, 1).",
    },
  ],
};
