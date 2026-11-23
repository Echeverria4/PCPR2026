import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-a01",
  resumo: {
    ideia:
      "Interpretar é ler o que está escrito e também o que fica nas entrelinhas, sem inventar. Quase toda questão de texto pergunta uma destas coisas: o que o texto diz, o que ele deixa marcado sem dizer (pressuposto) e o que só o contexto sugere (subentendido).",
    itens: [
      {
        termo: "Compreender × interpretar",
        faz: "Compreender é achar a informação que está no texto (“de acordo com o texto”). Interpretar é tirar uma conclusão a partir dele (“infere-se”, “conclui-se”).",
        pista: "Alternativa que diz mais do que o texto permite, generaliza (“sempre”, “todos”) ou traz opinião sua está errada.",
      },
      {
        termo: "Critérios de textualidade",
        faz: "Além de coesão e coerência: intencionalidade (o objetivo de quem escreve), aceitabilidade (o leitor aceita como texto), situacionalidade (faz sentido naquela situação), informatividade (traz algo novo) e intertextualidade (dialoga com outros textos).",
        pista: "“Devagar: escola” só faz sentido perto de uma escola: é situacionalidade.",
      },
      {
        termo: "Funções da linguagem",
        faz: "Referencial (informa, foco no assunto), emotiva (foco em quem fala), conativa ou apelativa (quer convencer quem lê), fática (testa o canal: “Alô? Está me ouvindo?”), metalinguística (o código explica o código, como o dicionário) e poética (foco na forma da mensagem).",
        pista: "Anúncio pode ter rima, mas a função que predomina é a conativa: ele quer que você faça algo.",
      },
      {
        termo: "Intertextualidade",
        faz: "Um texto retoma outro. Citação (com aspas e fonte), paráfrase (diz o mesmo com outras palavras), paródia (imita para criticar ou fazer humor, mudando o sentido), alusão (só lembra o outro texto) e epígrafe (trecho no começo da obra).",
        pista: "Provérbio alterado (“Quem espera sempre cansa”) inverte o sentido original: é paródia, não paráfrase.",
      },
      {
        termo: "Níveis de leitura",
        faz: "Elementar (reconhecer as palavras), inspecional (folhear com tempo limitado, para ter uma ideia geral), analítica (leitura completa e minuciosa de uma obra) e sinóptica (comparar várias obras sobre o mesmo assunto).",
      },
      {
        termo: "Pressuposto",
        faz: "Informação que vem marcada por uma palavra da frase e continua valendo mesmo se a frase for negada. “Ele voltou a fumar” pressupõe que já fumou e parou.",
        pista: "Marcas comuns: deixar de, passar a, voltar a, continuar, ainda, já, também, até, adjetivos e verbos como “descobrir” e “lamentar”.",
      },
      {
        termo: "Subentendido",
        faz: "Sugestão que depende do contexto, sem palavra que a marque. Quem fala pode negar: “Eu não disse isso”. A ironia costuma morar aqui.",
        pista: "Pergunte: há palavra que obriga essa leitura? Se há, é pressuposto. Se só a situação sugere, é subentendido.",
      },
      {
        termo: "Marcas de opinião",
        faz: "Aspas, reticências, exclamação, pergunta retórica, adjetivos avaliativos (“lamentável”), advérbios como “infelizmente” e “felizmente”, diminutivos e verbos de dúvida (“parece”, “talvez”) mostram a posição de quem escreve.",
        pista: "Texto impessoal usa terceira pessoa, linguagem denotativa e evita esses sinais.",
      },
      {
        termo: "Níveis de linguagem e variação",
        faz: "Níveis: culto, comum e coloquial. Variação diatópica (região: mandioca, aipim, macaxeira), diastrática (grupo social: gíria de um grupo), diafásica (situação: a mesma pessoa fala diferente no trabalho e em casa) e diacrônica (tempo: vossa mercê, vosmecê, você).",
        pista: "Idioleto é o jeito de falar de uma só pessoa; registro é o vocabulário de uma profissão.",
      },
      {
        termo: "Frase nominal × verbal",
        faz: "Frase nominal não tem verbo flexionado (“Proibido fumar.”, “Que calor!”); frase verbal tem (“O ônibus atrasou.”). Tipos: declarativa, interrogativa direta (com “?”) ou indireta (sem “?”), exclamativa, imperativa e optativa (desejo: “Deus te acompanhe”).",
        pista: "“Quero saber onde ela mora.” é interrogativa indireta, mesmo terminando em ponto final.",
      },
      {
        termo: "Posição das palavras",
        faz: "Mudar a posição de “só”, “apenas” e “até” muda o sentido. “Apenas Maria usou o uniforme” (ninguém mais usou) × “Maria apenas usou o uniforme” (ela não fez mais nada).",
      },
      {
        termo: "Problemas da frase",
        faz: "De arrastão (orações curtas puxadas por aí, então, depois), de ladainha (fila longa de orações ligadas por “e”), entrecortada (só períodos curtos coordenados), fragmentária (pedaços soltos) e labiríntica ou centopeica (idas e vindas que fazem o leitor se perder).",
      },
    ],
    cuidado:
      "O erro mais comum é marcar a alternativa que é verdade no mundo, mas que o texto não diz. Responda só com o que o texto afirma, pressupõe ou permite concluir.",
  },
  questoes: [
    {
      topico: "Pressupostos e subentendidos",
      subassunto: "Marcas de pressuposição",
      dificuldade: 4,
      raciocinio: "Achar as palavras que marcam informação anterior (deixar de, passar a, também) e separar o que é afirmado do que só é sugerido.",
      enunciado:
        "Leia a frase: “Os moradores deixaram de reclamar do barulho depois que a fiscalização passou a atuar também à noite.” Analise as afirmativas.\n\nI. Pressupõe-se que os moradores reclamavam do barulho antes.\nII. Pressupõe-se que, antes da mudança, a fiscalização atuava só em outro horário.\nIII. Afirma-se que o barulho acabou depois da mudança na fiscalização.\n\nEstá correto o que se afirma em:",
      alternativas: ["Apenas I.", "Apenas I e II.", "Apenas I e III.", "Apenas II e III.", "I, II e III."],
      correta: 1,
      explicacao:
        "“Deixaram de reclamar” só é possível se havia reclamação antes (I). “Passou a atuar também à noite” marca que a fiscalização não atuava à noite e já atuava em outro horário (II). O texto diz que as reclamações pararam, não que o barulho acabou.",
      explicacaoErradas:
        "Ficar só com I esquece que “passou a” e “também” marcam o horário anterior da fiscalização. Incluir III troca o fim das reclamações pelo fim do barulho: as pessoas podem ter parado de reclamar por outro motivo.",
      pegadinha:
        "Achar que o barulho acabou porque é a conclusão mais natural. Isso é, no máximo, sugerido; o texto afirma apenas que as reclamações pararam.",
      conhecimento:
        "Verbos como deixar de, passar a, voltar a e continuar e palavras como também, ainda e já trazem pressupostos: informações dadas como certas, que seguem valendo mesmo se a frase for negada.",
    },
    {
      topico: "Pressupostos e subentendidos",
      subassunto: "Ironia e subentendido",
      dificuldade: 5,
      raciocinio: "Separar o que a palavra “voltou” obriga a entender do que só a situação (o atraso) sugere.",
      enunciado:
        "Um funcionário chega às 9h40 a uma reunião marcada para as 9h. A chefe comenta: “Que bom que o relógio da sua casa voltou a funcionar.” Assinale a análise correta da fala.",
      alternativas: [
        "A crítica ao atraso é pressuposto, porque vem marcada pela expressão “voltou a”.",
        "Não há pressuposto na fala, porque frases irônicas só trazem sentido subentendido.",
        "Que o relógio esteve parado é pressuposto; a crítica ao atraso é subentendido.",
        "Que o relógio esteve parado é subentendido, pois a chefe pode negar o que disse.",
        "A crítica ao atraso é afirmada de forma direta, pois o elogio é apenas aparente.",
      ],
      correta: 2,
      explicacao:
        "“Voltou a funcionar” marca, pela própria expressão, que o relógio ficou parado em algum momento: é pressuposto. A cobrança pelo atraso não está em nenhuma palavra; nasce da situação e da ironia, e a chefe poderia dizer que só falou do relógio. É subentendido.",
      explicacaoErradas:
        "“Voltou a” marca o relógio parado, não a crítica. Frase irônica também pode ter pressuposto. O relógio parado está marcado na frase, então não é subentendido. A crítica não é dita com todas as letras: depende do contexto.",
      pegadinha:
        "Pensar que, por ser ironia, tudo na frase é implícito do mesmo tipo. Uma mesma fala pode ter pressuposto (marcado) e subentendido (do contexto) ao mesmo tempo.",
      conhecimento:
        "Pressuposto tem marca na frase e não pode ser negado por quem fala sem contradição. Subentendido depende do contexto e quem fala pode negá-lo (“eu só falei do relógio”).",
    },
    {
      topico: "Funções da linguagem",
      subassunto: "Função predominante",
      dificuldade: 4,
      raciocinio: "Ver em qual elemento da comunicação cada texto se concentra: canal, código, receptor ou assunto.",
      enunciado:
        "Julgue as afirmativas como verdadeiras (V) ou falsas (F).\n\n( ) Em “Alô? Está me ouvindo bem?”, dito numa ligação que falha, predomina a função fática.\n( ) Um verbete de dicionário que explica o que é um verbete tem função predominantemente metalinguística.\n( ) Num anúncio rimado que diz “Doe sangue, doe vida, doe hoje”, predomina a função poética, porque a rima é o centro da mensagem.\n( ) Uma notícia que relata em terceira pessoa a interdição de uma ponte tem função predominantemente referencial.\n\nA sequência correta, de cima para baixo, é:",
      alternativas: ["V, V, F, V", "V, F, V, V", "F, V, F, V", "V, V, V, F", "F, F, V, V"],
      correta: 0,
      explicacao:
        "A pergunta no telefone testa o canal (fática). O verbete que explica o verbete usa o código para falar do código (metalinguística). O anúncio usa rima, mas seu objetivo é levar o leitor a doar: predomina a conativa. A notícia em terceira pessoa informa sobre o assunto (referencial).",
      explicacaoErradas:
        "Marcar V na terceira confunde um recurso poético com a função que predomina. Marcar F na primeira ou na segunda esquece que testar o canal é fática e que o código explicando o código é metalinguística.",
      pegadinha:
        "A rima chama a atenção e leva a marcar função poética. Em anúncio, o recurso poético está a serviço do apelo ao leitor: a função que predomina é a conativa.",
      conhecimento:
        "Todo texto pode ter várias funções, mas uma predomina. A conativa (ou apelativa) é a do anúncio, da propaganda e do pedido; costuma vir com verbo no imperativo e com “você”.",
    },
    {
      topico: "Variação linguística",
      subassunto: "Tipos de variação",
      dificuldade: 4,
      raciocinio: "Perguntar o que muda em cada caso: a região, o grupo social, a situação ou o tempo.",
      enunciado:
        "Relacione cada tipo de variação ao exemplo.\n\n1. Diatópica\n2. Diastrática\n3. Diafásica\n4. Diacrônica\n\n( ) A mesma raiz é chamada de mandioca, aipim ou macaxeira, conforme a região do país.\n( ) Uma juíza escreve “data venia” na sentença e, em casa, pergunta “bora jantar?”.\n( ) “Vossa mercê” virou “vosmecê” e, mais tarde, “você”.\n( ) Um grupo de skatistas usa gírias que pessoas de fora do grupo não entendem.\n\nA sequência correta, de cima para baixo, é:",
      alternativas: ["1, 2, 4, 3", "1, 3, 4, 2", "2, 3, 4, 1", "1, 3, 2, 4", "4, 3, 1, 2"],
      correta: 1,
      explicacao:
        "Mandioca, aipim e macaxeira variam pela região (diatópica). A juíza é a mesma pessoa falando de jeitos diferentes conforme a situação (diafásica). A mudança de “vossa mercê” até “você” aconteceu com o tempo (diacrônica). A gíria de um grupo é variação social (diastrática).",
      explicacaoErradas:
        "Pôr 2 no exemplo da juíza toma a profissão como grupo social, mas o exemplo mostra a mesma pessoa mudando de situação. Trocar 4 e 2 confunde mudança no tempo com variação de grupo. Começar com 2 ou 4 erra a variação por região, a mais fácil de reconhecer.",
      pegadinha:
        "Ver uma juíza e pensar em grupo profissional (diastrática). O que o exemplo contrasta é o trabalho e a casa: a mesma pessoa, situações diferentes, logo diafásica.",
      conhecimento:
        "Diatópica: lugar. Diastrática: grupo social (idade, classe, profissão, tribo). Diafásica: situação de uso, formal ou informal. Diacrônica: tempo.",
    },
    {
      topico: "Níveis de leitura",
      subassunto: "Analítica × sinóptica",
      dificuldade: 4,
      raciocinio: "Ver se a leitura é de uma obra só, feita a fundo, ou de várias obras comparadas.",
      enunciado:
        "Uma pesquisadora lê seis livros sobre acidentes em rodovias, confronta as teses de cada autor e monta uma visão própria a partir da comparação. Esse procedimento corresponde à leitura:",
      alternativas: ["analítica.", "inspecional.", "elementar.", "sinóptica.", "seletiva."],
      correta: 3,
      explicacao:
        "Ler várias obras sobre o mesmo assunto e relacioná-las entre si é a leitura sinóptica, o nível mais ativo e trabalhoso.",
      explicacaoErradas:
        "A analítica é a leitura completa e minuciosa de uma obra. A inspecional é folhear com tempo limitado para ter uma ideia geral. A elementar é reconhecer as palavras. “Seletiva” não é um dos quatro níveis dessa classificação.",
      pegadinha:
        "Marcar analítica porque a leitura é profunda. A diferença está na comparação entre várias obras, que é o traço da sinóptica.",
      conhecimento:
        "Os quatro níveis de leitura são elementar, inspecional, analítica e sinóptica, do mais simples ao mais complexo.",
    },
    {
      topico: "Intertextualidade",
      subassunto: "Paródia × paráfrase",
      dificuldade: 4,
      raciocinio: "Comparar o sentido do provérbio original com o do texto: foi mantido ou invertido?",
      enunciado:
        "Uma crônica sobre filas em postos de saúde tem por título “Quem espera sempre cansa”. Em relação ao provérbio “Quem espera sempre alcança”, o título constitui:",
      alternativas: [
        "paráfrase, pois mantém a estrutura e o sentido da frase original.",
        "citação, pois reproduz um texto anterior conhecido pelo leitor.",
        "paródia, pois imita a forma do original e inverte seu sentido.",
        "epígrafe, pois abre o texto com a frase de outro autor.",
        "alusão, pois apenas lembra o provérbio, sem retomar sua forma.",
      ],
      correta: 2,
      explicacao:
        "O título copia a forma do provérbio, troca uma palavra e passa a dizer o contrário (esperar não traz recompensa, só cansaço), com tom crítico. É paródia.",
      explicacaoErradas:
        "Paráfrase mantém o sentido, e aqui o sentido muda. Citação reproduz o texto sem alterá-lo. Epígrafe é um trecho de outro texto posto no começo da obra, sem mudança. Alusão não retoma a forma, e o título repete quase toda a estrutura.",
      pegadinha:
        "Ver a frase quase igual e marcar paráfrase. O que separa as duas é o sentido: paráfrase preserva, paródia subverte.",
      conhecimento:
        "Na intertextualidade explícita, a fonte aparece (citação, epígrafe). Na implícita, o leitor precisa reconhecer o texto de origem (alusão, paródia, paráfrase).",
    },
    {
      topico: "Frase",
      subassunto: "Frase nominal, verbal e tipos de frase",
      dificuldade: 5,
      raciocinio: "Em cada frase, ver se há verbo flexionado e qual é a intenção: informar, perguntar, ordenar ou desejar.",
      enunciado: "Assinale a alternativa em que a frase está corretamente classificada.",
      alternativas: [
        "“Que tarde abafada!” é frase verbal, porque exprime um sentimento de quem fala.",
        "“Deus te acompanhe na viagem.” é imperativa, porque o verbo está no subjuntivo.",
        "“Proibido estacionar.” é frase verbal, porque “proibido” é uma forma do verbo.",
        "“Saia agora da sala.” é declarativa, porque termina em ponto final, e não em “!”.",
        "“Perguntei se a ponte estava liberada.” traz interrogação indireta, sem “?”.",
      ],
      correta: 4,
      explicacao:
        "A pergunta está dentro de outra oração, introduzida por “se”, e não usa ponto de interrogação: é interrogativa indireta.",
      explicacaoErradas:
        "“Que tarde abafada!” não tem verbo: é frase nominal exclamativa. “Deus te acompanhe” exprime desejo: é optativa. “Proibido” é particípio sem verbo flexionado, então a frase é nominal. “Saia agora” dá uma ordem: é imperativa, com ou sem exclamação.",
      pegadinha:
        "Classificar pela pontuação. O tipo de frase vem da intenção de quem fala; e frase verbal exige verbo flexionado, não basta particípio.",
      conhecimento:
        "Frase nominal não tem verbo flexionado; frase verbal tem. Tipos: declarativa, interrogativa (direta ou indireta), exclamativa, imperativa e optativa.",
    },
    {
      topico: "Reescrita e sentido",
      subassunto: "Posição de “apenas”",
      dificuldade: 5,
      raciocinio: "Ver a que palavra “apenas” se liga em cada versão e o que passa a ser exclusivo.",
      enunciado:
        "Frase original: “Apenas a equipe de perícia analisou o laudo ontem.” Analise as reescritas quanto à manutenção do sentido original.\n\nI. A equipe de perícia apenas analisou o laudo ontem.\nII. A equipe de perícia analisou apenas o laudo ontem.\nIII. A equipe de perícia analisou o laudo apenas ontem.\nIV. Ninguém além da equipe de perícia analisou o laudo ontem.\n\nMantém o sentido original o que está em:",
      alternativas: ["Apenas I.", "Apenas IV.", "Apenas I e IV.", "Apenas II e IV.", "Apenas III e IV."],
      correta: 1,
      explicacao:
        "No original, “apenas” se liga a “a equipe de perícia”: ninguém mais analisou o laudo. Só a versão IV diz o mesmo.",
      explicacaoErradas:
        "Em I, a exclusividade passa para a ação (a equipe não fez nada além de analisar). Em II, passa para o objeto (só o laudo foi analisado, nenhum outro documento). Em III, passa para o tempo (só ontem, como se fosse tarde). As três mudam o sentido.",
      pegadinha:
        "Achar que a troca de lugar de “apenas” é só estilo. Cada posição restringe uma parte diferente da frase.",
      conhecimento:
        "“Só”, “apenas”, “até” e “mesmo” se ligam ao termo mais próximo. Questões de reescrita testam muito essa mudança de posição.",
    },
    {
      topico: "Critérios de textualidade",
      subassunto: "Situacionalidade",
      dificuldade: 4,
      raciocinio: "Ver o que faz o mesmo enunciado ter ou perder sentido: o leitor, a intenção, a novidade ou o lugar em que aparece.",
      enunciado:
        "A placa “Desvio a 200 m” orienta bem o motorista numa estrada em obras, mas, impressa num cardápio de restaurante, não teria sentido para o leitor. O critério de textualidade que explica essa diferença é a:",
      alternativas: ["informatividade.", "intencionalidade.", "aceitabilidade.", "intertextualidade.", "situacionalidade."],
      correta: 4,
      explicacao:
        "O texto é o mesmo; muda o lugar e a situação em que ele aparece. A adequação do texto à situação de comunicação é a situacionalidade.",
      explicacaoErradas:
        "Informatividade é o grau de novidade do texto. Intencionalidade é o objetivo de quem produz. Aceitabilidade é a disposição do leitor de tomar aquilo como texto coerente. Intertextualidade é o diálogo com outros textos.",
      pegadinha:
        "Marcar aceitabilidade porque o leitor do cardápio não entenderia. A causa da falta de sentido é a situação, e o critério ligado a ela é a situacionalidade.",
      conhecimento:
        "Além da coesão e da coerência, os critérios de textualidade são intencionalidade, aceitabilidade, situacionalidade, informatividade e intertextualidade.",
    },
    {
      topico: "Estrutura da frase",
      subassunto: "Problemas da frase",
      dificuldade: 5,
      raciocinio: "Ver como as orações estão ligadas: por que conectivo e em que extensão.",
      enunciado:
        "“O ônibus parou no posto e o fiscal subiu e conferiu as passagens e desceu e o motorista seguiu viagem e ninguém reclamou de nada.” Na classificação clássica dos problemas da frase, o trecho exemplifica a frase:",
      alternativas: ["entrecortada.", "fragmentária.", "labiríntica.", "de ladainha.", "nominal."],
      correta: 3,
      explicacao:
        "O período é uma longa fila de orações coordenadas ligadas sempre por “e”, sem subordinação: é a frase de ladainha.",
      explicacaoErradas:
        "A entrecortada usa períodos curtos separados, e aqui há um período só. A fragmentária é feita de pedaços soltos sem oração completa. A labiríntica tem idas e vindas e intercalações que fazem o leitor se perder. Frase nominal é a que não tem verbo, e o trecho tem vários.",
      pegadinha:
        "Confundir com a frase entrecortada por causa das ações curtas. Na entrecortada há vários períodos breves; na ladainha, tudo fica num só período, emendado por “e”.",
      conhecimento:
        "A frase de arrastão puxa orações curtas com “aí”, “então”, “depois”; a de ladainha é sua variante com uma sucessão interminável de “e”.",
    },
  ],
};
