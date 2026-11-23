import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-a04",
  resumo: {
    ideia:
      "Toda palavra é feita de pedaços com sentido (morfemas): o radical traz a ideia principal, e os outros pedaços mudam a classe, o gênero, o número ou o tempo. As palavras novas nascem por derivação (radical + afixo) ou por composição (radical + radical).",
    itens: [
      {
        termo: "Fonema × morfema",
        faz: "Fonema é o som, sem sentido sozinho (/p/, /a/). Morfema é o menor pedaço com sentido (in-, feliz, -mente).",
      },
      {
        termo: "Radical",
        faz: "A parte comum de uma família de palavras, com o sentido principal: pedr- em pedra, pedreiro, pedregulho; cant- em cantar, cantei, cantora.",
      },
      {
        termo: "Vogal temática e tema",
        faz: "Nos verbos, a vogal temática mostra a conjugação: -a- (cantar), -e- (vender), -i- (partir). Nos nomes, é o -a, -e ou -o final (casa, pente, cachorro). Tema = radical + vogal temática (canta-, vende-).",
        pista: "O -o de “cachorro” é vogal temática, e não marca de masculino. O masculino não tem marca; o feminino tem -a (cantor → cantora).",
      },
      {
        termo: "Desinências",
        faz: "São as terminações da flexão. Nomes: gênero (-a) e número (-s). Verbos: modo e tempo (-va-, -sse-, -ria-) e número e pessoa (-mos, -is, -m). Em “cantássemos”: cant (radical) + á (vogal temática) + sse (modo e tempo) + mos (número e pessoa).",
      },
      {
        termo: "Flexão × derivação",
        faz: "Flexão não cria palavra nova: só ajusta gênero, número, tempo, pessoa (cantora, casas, cantei). Derivação cria palavra nova (pedreiro, livraria, infeliz).",
      },
      {
        termo: "Prefixal, sufixal, prefixal e sufixal",
        faz: "Prefixal: re-fazer. Sufixal: feliz-mente. Prefixal e sufixal: in-feliz-mente, des-leal-dade. Aqui, tirar um dos afixos ainda deixa uma palavra que existe (infeliz, felizmente).",
      },
      {
        termo: "Parassintética",
        faz: "Prefixo e sufixo entram juntos, ao mesmo tempo: en-tard-ecer, a-pod-recer, em-pobr-ecer, des-alm-ado.",
        pista: "Teste: tire o prefixo ou o sufixo. Se sobrar algo que não existe (“entarde”, “tardecer”), é parassintética.",
      },
      {
        termo: "Regressiva",
        faz: "A palavra nova nasce tirando um pedaço: atacar → ataque, resgatar → resgate, pescar → pesca, chorar → choro.",
        pista: "Substantivo que indica ação costuma vir do verbo (regressiva). Substantivo que indica objeto costuma dar origem ao verbo (âncora → ancorar, planta → plantar).",
      },
      {
        termo: "Imprópria (conversão)",
        faz: "A palavra muda de classe sem mudar de forma: “o não”, “um sim”, “o olhar”, “o jantar”, “o porquê”.",
      },
      {
        termo: "Composição",
        faz: "Junta dois radicais. Justaposição: sem perder som (passatempo, girassol, guarda-chuva, pontapé). Aglutinação: com perda de som (planalto, aguardente, pernalta, embora, de “em boa hora”).",
      },
      {
        termo: "Hibridismo, neologismo e estrangeirismo",
        faz: "Hibridismo: pedaços de línguas diferentes (automóvel, televisão, sambódromo). Neologismo: palavra nova criada na própria língua. Estrangeirismo: palavra de outra língua usada no português.",
      },
      {
        termo: "Abreviatura, sigla e símbolo",
        faz: "Abreviatura: com ponto, minúscula, aceita plural e mantém o acento (pág., págs., séc.). Sigla: maiúsculas, sem ponto, plural com “s” minúsculo (APAEs). Símbolo: sem ponto e sem plural (km, kg, h).",
      },
    ],
    cuidado: "Nas questões de formação de palavras, faça o teste: tire cada pedaço e veja se o que sobra existe. Isso separa parassíntese de prefixo e sufixo, e composição de derivação.",
  },
  questoes: [
    {
      topico: "Formação de palavras",
      subassunto: "Derivação parassintética",
      dificuldade: 5,
      raciocinio: "Tirar o prefixo e depois o sufixo de cada palavra e ver se o que sobra existe.",
      enunciado: "Assinale a palavra formada por derivação parassintética.",
      alternativas: ["desalmado", "deslealdade", "infelizmente", "reorganização", "pernalta"],
      correta: 0,
      explicacao:
        "Em “desalmado”, nem “desalma” nem “almado” existem: o prefixo des- e o sufixo -ado entraram ao mesmo tempo no radical “alma”. É parassíntese.",
      explicacaoErradas:
        "“Desleal” e “lealdade” existem, então “deslealdade” é prefixal e sufixal. O mesmo vale para “infeliz” e “felizmente”, e para “reorganizar” e “organização”. “Pernalta” junta dois radicais: é composição por aglutinação.",
      pegadinha: "Ver prefixo e sufixo na mesma palavra e marcar parassíntese. Só é parassíntese quando um não funciona sem o outro.",
      conhecimento: "Parassintética: prefixo e sufixo entram juntos (entardecer, empobrecer, desalmado). Prefixal e sufixal: cada afixo funciona sozinho.",
    },
    {
      topico: "Formação de palavras",
      subassunto: "Derivação regressiva",
      dificuldade: 5,
      raciocinio: "Perguntar quem nasceu primeiro: o verbo ou o substantivo. Ação aponta para o verbo; objeto aponta para o substantivo.",
      enunciado:
        "Sobre a derivação regressiva, analise as afirmativas.\n\nI. “Ataque” e “resgate” vêm de “atacar” e “resgatar”, pela retirada da terminação verbal.\nII. “Âncora” vem de “ancorar” por derivação regressiva, pois também é um substantivo ligado a um verbo.\nIII. Um teste útil: quando o substantivo indica ação, em geral ele vem do verbo; quando indica objeto, em geral o verbo vem dele.\n\nEstá correto o que se afirma em:",
      alternativas: ["Apenas I.", "Apenas II.", "Apenas III.", "Apenas I e III.", "I, II e III."],
      correta: 3,
      explicacao:
        "I está certa: atacar → ataque, resgatar → resgate. III traz o teste certo. II erra: “âncora” é objeto e veio antes; o verbo “ancorar” nasceu dela, pelo acréscimo de sufixo.",
      explicacaoErradas:
        "Ficar só com I ou só com III deixa de fora uma afirmativa certa. Toda alternativa com II aceita que o objeto nasceu do verbo.",
      pegadinha: "II usa uma justificativa vaga (“também é ligado a um verbo”). Estar ligado ao verbo não diz quem veio primeiro.",
      conhecimento: "Regressiva forma substantivos que indicam ação a partir de verbos: pesca, choro, combate, ajuda, resgate.",
    },
    {
      topico: "Formação de palavras",
      subassunto: "Justaposição × aglutinação",
      dificuldade: 4,
      raciocinio: "Juntar os dois radicais e ver se algum som se perdeu no caminho.",
      enunciado:
        "Julgue as afirmativas como verdadeiras (V) ou falsas (F).\n\n( ) “Planalto” é formada por aglutinação, pois “plano” perde um som ao se juntar a “alto”.\n( ) “Passatempo” é formada por justaposição: os dois elementos se juntam sem perder som.\n( ) “Aguardente” é formada por justaposição, pois mantém inteiros os dois radicais.\n( ) “Embora” resulta da aglutinação de “em boa hora”.\n\nA sequência correta, de cima para baixo, é:",
      alternativas: ["V, F, F, V", "V, V, F, V", "F, V, V, V", "V, V, V, F", "F, F, V, V"],
      correta: 1,
      explicacao:
        "Planalto (plano + alto) perde o “o”: aglutinação. Passatempo (passa + tempo) não perde nada: justaposição. Embora vem de “em boa hora”, com perda de sons: aglutinação. Aguardente (água + ardente) perde um “a”, então também é aglutinação, e a terceira é falsa.",
      explicacaoErradas:
        "Marcar F na segunda esquece que passatempo não perde som. Marcar V na terceira não percebe a perda do “a” em água + ardente. Marcar F na quarta esquece a origem de “embora”.",
      pegadinha: "Em “aguardente”, as duas palavras ainda são fáceis de ver. Fácil de reconhecer não quer dizer que nada se perdeu.",
      conhecimento: "Justaposição: girassol, passatempo, pontapé, guarda-chuva. Aglutinação: planalto, aguardente, pernalta, embora, fidalgo.",
    },
    {
      topico: "Formação de palavras",
      subassunto: "Derivação imprópria",
      dificuldade: 4,
      raciocinio: "Procurar a palavra que mudou de classe sem ganhar nem perder pedaço.",
      enunciado: "Assinale a frase em que há palavra formada por derivação imprópria.",
      alternativas: [
        "O soldado desobedeceu à ordem do comandante e foi punido.",
        "A operação foi um sucesso por causa do planejamento.",
        "O comandante elogiou a lealdade da tropa na formatura.",
        "Os moradores reconstruíram a ponte em poucos meses.",
        "O sim do comandante chegou tarde demais para a tropa.",
      ],
      correta: 4,
      explicacao: "“Sim” é advérbio, mas, com o artigo “o”, virou substantivo, sem mudar a forma. Essa mudança de classe é a derivação imprópria.",
      explicacaoErradas:
        "“Desobedeceu” e “reconstruíram” ganharam prefixo (des-, re-). “Planejamento” e “lealdade” ganharam sufixo (-mento, -dade). Todas mudaram de forma.",
      pegadinha: "Procurar prefixo e sufixo. Na derivação imprópria, não há pedaço novo: o artigo antes da palavra é a pista.",
      conhecimento: "Imprópria (conversão): o não, um sim, o olhar, o jantar, o porquê. Muda a classe, não muda a forma.",
    },
    {
      topico: "Estrutura das palavras",
      subassunto: "Morfemas do verbo",
      dificuldade: 5,
      raciocinio: "Separar o verbo da esquerda para a direita: radical, vogal temática, modo e tempo, número e pessoa.",
      enunciado: "Na forma verbal “venderíamos”, os elementos “vend-”, “-e-”, “-ria-” e “-mos” são, nessa ordem:",
      alternativas: [
        "radical, desinência de gênero, desinência de modo-tempo e vogal temática.",
        "radical, vogal temática, desinência de número-pessoa e desinência de modo-tempo.",
        "radical, vogal temática, desinência de modo-tempo e desinência de número-pessoa.",
        "raiz, prefixo, sufixo de derivação e desinência de número-pessoa.",
        "tema, vogal de ligação, desinência de modo-tempo e desinência de número-pessoa.",
      ],
      correta: 2,
      explicacao:
        "“Vend-” é o radical; “-e-” é a vogal temática da 2ª conjugação; “-ria-” marca o futuro do pretérito do indicativo (modo e tempo); “-mos” marca a 1ª pessoa do plural (número e pessoa).",
      explicacaoErradas:
        "Verbo não tem desinência de gênero. Inverter as duas últimas troca o que marca tempo pelo que marca pessoa. Verbo flexionado não ganha prefixo nem sufixo de derivação. “Vend-” sozinho é o radical; o tema seria “vende-” (radical + vogal temática).",
      pegadinha: "A última opção quase acerta, mas chama o radical de tema. Tema sempre inclui a vogal temática.",
      conhecimento: "Ordem no verbo: radical + vogal temática + desinência de modo-tempo + desinência de número-pessoa.",
    },
    {
      topico: "Estrutura das palavras",
      subassunto: "Vogal temática e gênero",
      dificuldade: 5,
      raciocinio: "Lembrar que o masculino não tem marca e que a vogal final dos nomes costuma ser vogal temática.",
      enunciado:
        "Analise as afirmativas sobre a estrutura das palavras.\n\nI. Em “cachorro”, o “-o” final é vogal temática, e não desinência de gênero masculino.\nII. Em “cantora”, o “-a” final é desinência de gênero feminino.\nIII. Nos verbos, a vogal temática indica a conjugação: “-a-” na primeira, “-e-” na segunda e “-i-” na terceira.\n\nEstá correto o que se afirma em:",
      alternativas: ["I, II e III.", "Apenas I.", "Apenas II.", "Apenas I e III.", "Apenas II e III."],
      correta: 0,
      explicacao:
        "As três estão certas. O masculino não tem marca própria; o “-o” de cachorro é vogal temática. Em cantor → cantora, o “-a” marca o feminino. E a vogal temática dos verbos separa as três conjugações.",
      explicacaoErradas:
        "Toda alternativa sem I aceita o “-o” como marca de masculino. Toda alternativa sem II nega a marca de feminino em “cantora”. Toda alternativa sem III nega o papel da vogal temática nos verbos.",
      pegadinha: "A ideia de que “-o” é masculino e “-a” é feminino parece simétrica. Na análise da gramática, só o feminino tem desinência.",
      conhecimento: "Nomes terminados em -a, -e e -o (casa, pente, cachorro) têm vogal temática. O feminino recebe a desinência -a; o plural, a desinência -s.",
    },
    {
      topico: "Formação de palavras",
      subassunto: "Hibridismo",
      dificuldade: 4,
      raciocinio: "Procurar a palavra cujos pedaços vêm de línguas diferentes.",
      enunciado: "Assinale a palavra que é exemplo de hibridismo.",
      alternativas: ["pedreiro", "passatempo", "infelizmente", "automóvel", "ataque"],
      correta: 3,
      explicacao: "“Automóvel” junta “auto” (do grego, “por si mesmo”) e “móvel” (do latim). Pedaços de línguas diferentes formam o hibridismo.",
      explicacaoErradas:
        "“Pedreiro” e “infelizmente” são derivações com pedaços de origem latina. “Passatempo” é composição de duas palavras portuguesas. “Ataque” é derivação regressiva de “atacar”.",
      pegadinha: "Confundir hibridismo com composição. O hibridismo olha a origem dos pedaços, e não o processo de juntar.",
      conhecimento: "Outros hibridismos: televisão (grego + latim), sambódromo (africano + grego), burocracia (francês + grego), sociologia (latim + grego).",
    },
    {
      topico: "Abreviação",
      subassunto: "Abreviatura, sigla e símbolo",
      dificuldade: 4,
      raciocinio: "Lembrar as três regras: abreviatura tem ponto, sigla aceita plural com “s” minúsculo, símbolo não tem ponto nem plural.",
      enunciado: "Assinale a frase escrita de acordo com as regras de abreviaturas, siglas e símbolos.",
      alternativas: [
        "A viatura percorreu 120 kms até o posto da rodovia federal.",
        "O cel. chegou às 10 h. para assinar o documento da tropa.",
        "As APAEs da região receberam 300 kg de alimentos.",
        "O relatório citou as págs 12 e 13 do volume do inquérito.",
        "A carga apreendida pesava 5 Kg. e foi levada ao quartel.",
      ],
      correta: 2,
      explicacao: "A sigla faz plural com “s” minúsculo (APAEs), e o símbolo “kg” vem em minúsculas, sem ponto e sem plural.",
      explicacaoErradas:
        "Símbolo não tem plural: “120 km”. Símbolo não leva ponto: “10 h”. Abreviatura leva ponto: “págs.”. O símbolo do quilograma é “kg”, com minúscula e sem ponto.",
      pegadinha: "Achar que tudo que é curto segue a mesma regra. Abreviatura, sigla e símbolo têm regras diferentes de ponto e de plural.",
      conhecimento: "Abreviatura: pág., págs., séc., cel. Sigla: ONU, CNH, APAEs. Símbolo: km, kg, h, m (sem ponto e sem plural).",
    },
    {
      topico: "Formação de palavras",
      subassunto: "Processos de derivação",
      dificuldade: 5,
      raciocinio: "Fazer o teste de tirar os pedaços em cada palavra e ver qual mudou de classe sem mudar de forma.",
      enunciado:
        "Associe cada palavra ao seu processo de formação.\n\n1. deslealdade\n2. enraivecer\n3. combate, em “o combate ao crime”\n4. olhar, em “o olhar atento do vigia”\n\n( ) derivação imprópria\n( ) derivação regressiva\n( ) derivação prefixal e sufixal\n( ) derivação parassintética\n\nA sequência correta, de cima para baixo, é:",
      alternativas: ["4, 3, 2, 1", "3, 4, 1, 2", "4, 1, 3, 2", "2, 3, 1, 4", "4, 3, 1, 2"],
      correta: 4,
      explicacao:
        "“O olhar” é verbo que virou substantivo sem mudar de forma: imprópria (4). “Combate” vem de “combater” pela perda da terminação: regressiva (3). “Desleal” e “lealdade” existem: prefixal e sufixal (1). “Enraiva” e “raivecer” não existem: parassintética (2).",
      explicacaoErradas:
        "Trocar 1 e 2 confunde as duas derivações com prefixo e sufixo. Trocar 3 e 4 faz do “olhar” uma derivação regressiva, embora ele não tenha perdido nada.",
      pegadinha: "“Deslealdade” e “enraivecer” têm prefixo e sufixo. A diferença está no teste: em “deslealdade”, cada afixo funciona sozinho.",
      conhecimento: "Regressiva perde pedaço; imprópria só muda de classe; parassintética ganha prefixo e sufixo juntos.",
    },
    {
      topico: "Estrutura das palavras",
      subassunto: "Flexão × derivação",
      dificuldade: 4,
      raciocinio: "Ver se o pedaço acrescentado cria uma palavra nova ou só ajusta gênero e número.",
      enunciado: "Assinale a palavra em que o acréscimo ao radical é uma flexão, e não uma derivação.",
      alternativas: ["cantoras", "livraria", "pedreiro", "infeliz", "anoitecer"],
      correta: 0,
      explicacao: "Em “cantoras”, o “-a” marca o feminino e o “-s”, o plural. É a mesma palavra (cantor) flexionada, e não uma palavra nova.",
      explicacaoErradas:
        "“Livraria” (lugar) e “pedreiro” (profissão) são palavras novas, criadas por sufixo. “Infeliz” ganhou prefixo, com sentido novo. “Anoitecer” é parassintética.",
      pegadinha: "Ver o sufixo e pensar sempre em derivação. As desinências de gênero e de número também ficam no fim, mas só flexionam.",
      conhecimento: "Flexão nos nomes: gênero e número. Flexão nos verbos: modo, tempo, número e pessoa. Derivação forma outra palavra.",
    },
  ],
};
