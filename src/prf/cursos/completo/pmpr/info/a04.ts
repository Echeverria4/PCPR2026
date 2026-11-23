import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a04",
  resumo: {
    ideia:
      "O Android é o sistema do Google para celulares e outros aparelhos, feito sobre o kernel Linux e com código aberto. A prova cobra a origem, as versões com nome de doce (em ordem alfabética), a novidade marcante de algumas versões e o Android Go, a edição para aparelhos simples.",
    itens: [
      {
        termo: "Origem",
        faz: "A empresa Android foi fundada por Andy Rubin e comprada pelo Google em 2005. O sistema é conduzido pelo Google com a Open Handset Alliance. O Android 1.0 e o primeiro celular com ele (HTC Dream, o T-Mobile G1) são de 2008.",
      },
      {
        termo: "Base técnica",
        faz: "Roda sobre o kernel Linux e tem código aberto. Por isso os fabricantes podem adaptá-lo, e ele aparece também em TVs, relógios e carros.",
        pista: "Código aberto não impede aplicativos pagos na loja.",
      },
      {
        termo: "Nomes de doces",
        faz: "Seguiam o alfabeto: Cupcake (1.5), Donut (1.6), Eclair (2.0), Froyo (2.2), Gingerbread (2.3), Honeycomb (3.0), Ice Cream Sandwich (4.0), Jelly Bean (4.1), KitKat (4.4), Lollipop (5.0), Marshmallow (6.0), Nougat (7.0), Oreo (8.0), Pie (9).",
      },
      {
        termo: "Honeycomb e KitKat",
        faz: "O Honeycomb (3.0) foi feito para tablets. O KitKat (4.4) foi otimizado para rodar bem em aparelhos com pouca memória.",
      },
      {
        termo: "Lollipop a Oreo",
        faz: "Lollipop (5.0, 2014): visual Material Design. Marshmallow (6.0): permissões pedidas na hora do uso. Nougat (7.0): tela dividida. Oreo (8.0): vídeo em janela flutuante (picture-in-picture).",
      },
      {
        termo: "Pie e Android 10",
        faz: "Pie (9): navegação por gestos e Bem-estar digital (tempo de uso dos apps). Android 10 (2019): fim dos nomes de doces na divulgação e tema escuro em todo o sistema.",
      },
      {
        termo: "Android 11 e 12",
        faz: "11 (2020): área de conversas e permissão de uso única. 12 (2021): Material You, com cores tiradas do papel de parede, e ícones que avisam quando a câmera ou o microfone estão em uso.",
      },
      {
        termo: "Android 13 a 16",
        faz: "13 (2022) e 14 (2023): mais personalização e privacidade; o 14 melhorou o uso com aparelhos auditivos. 15 (2024): Espaço privado, área separada e bloqueada para apps. 16 (2025): visual renovado.",
      },
      {
        termo: "Android Go",
        faz: "Edição leve, de 2017, para aparelhos com pouca memória e armazenamento. Vem com versões enxutas dos apps (os apps Go), que gastam menos dados e bateria.",
      },
      {
        termo: "Curiosidade",
        faz: "O robô verde, mascote do sistema, é chamado internamente de Bugdroid.",
      },
    ],
  },
  questoes: [
    {
      topico: "Android",
      subassunto: "Origem e características",
      dificuldade: 4,
      raciocinio: "Kernel Linux, Google com a Open Handset Alliance, lançamento em 2008; código aberto não proíbe app pago.",
      enunciado:
        "Sobre o Android, analise as afirmativas.\nI – O Android roda sobre o núcleo (kernel) Linux.\nII – A empresa Android foi comprada pelo Google, que conduz o sistema com a Open Handset Alliance.\nIII – O primeiro celular vendido com Android chegou ao mercado em 2008.\nIV – Por ter código aberto, o Android não pode ter aplicativos pagos em sua loja.\nEstão corretas as afirmativas",
      alternativas: ["I, II e III, apenas.", "I e II, apenas.", "II e IV, apenas.", "II, III e IV, apenas.", "I, II, III e IV."],
      correta: 0,
      explicacao:
        "O Android usa o kernel Linux (I), pertence ao Google, que o conduz com a Open Handset Alliance (II), e o primeiro celular com ele, o HTC Dream, saiu em 2008 (III).",
      explicacaoErradas:
        "A afirmativa IV está errada: código aberto diz respeito ao sistema, não ao preço dos apps; a loja vende aplicativos pagos normalmente. A sequência I e II esquece a III.",
      pegadinha: "Código aberto não quer dizer que tudo seja grátis.",
      conhecimento: "O Google comprou a empresa Android em 2005, três anos antes do lançamento.",
    },
    {
      topico: "Versões",
      subassunto: "Nomes de doces",
      dificuldade: 4,
      raciocinio: "Os nomes seguiam o alfabeto: C, K, L, M, O.",
      enunciado:
        "Os nomes de doces das versões do Android seguiam a ordem alfabética. Assinale a alternativa em que as versões aparecem na ordem de lançamento.",
      alternativas: [
        "Cupcake, Lollipop, KitKat, Marshmallow, Oreo.",
        "Donut, Cupcake, KitKat, Lollipop, Oreo.",
        "KitKat, Jelly Bean, Lollipop, Nougat, Oreo.",
        "Cupcake, KitKat, Lollipop, Marshmallow, Oreo.",
        "Cupcake, KitKat, Marshmallow, Lollipop, Nougat.",
      ],
      correta: 3,
      explicacao: "C (Cupcake, 1.5), K (KitKat, 4.4), L (Lollipop, 5.0), M (Marshmallow, 6.0), O (Oreo, 8.0).",
      explicacaoErradas:
        "As outras sequências quebram o alfabeto: L antes de K, D antes de C, K antes de J ou M antes de L.",
      pegadinha: "Basta conferir a primeira letra de cada nome.",
      conhecimento: "Depois do Pie (9), o Android 10 deixou de usar nome de doce na divulgação.",
    },
    {
      topico: "Versões",
      subassunto: "Novidades marcantes",
      dificuldade: 5,
      raciocinio: "Lollipop = Material Design; Marshmallow = permissões no uso; Nougat = tela dividida; 12 = Material You.",
      enunciado:
        "Associe cada versão do Android à novidade que a marcou.\n(1) Android 5.0 Lollipop\n(2) Android 6.0 Marshmallow\n(3) Android 7.0 Nougat\n(4) Android 12\n( ) Material You, com cores do sistema tiradas do papel de parede.\n( ) Material Design, um novo visual para o sistema.\n( ) Tela dividida, com dois aplicativos lado a lado.\n( ) Permissões pedidas na hora do uso, e não só na instalação.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 4, 3, 2.", "4, 1, 2, 3.", "4, 3, 1, 2.", "2, 1, 3, 4.", "4, 1, 3, 2."],
      correta: 4,
      explicacao:
        "Material You é do Android 12 (4). Material Design é do Lollipop (1). Tela dividida é do Nougat (3). Permissões na hora do uso são do Marshmallow (2).",
      explicacaoErradas:
        "As outras sequências trocam o Material You com o Material Design (os nomes parecem iguais) ou a tela dividida com as permissões.",
      pegadinha: "Material Design (2014) e Material You (2021) são coisas diferentes: o You é o que puxa as cores do papel de parede.",
      conhecimento: "O Oreo (8.0) trouxe o vídeo em janela flutuante, o picture-in-picture.",
    },
    {
      topico: "Edições",
      subassunto: "Android Go",
      dificuldade: 4,
      raciocinio: "Go é a edição leve, para aparelhos com pouca memória.",
      enunciado: "O Android Go é",
      alternativas: [
        "a versão do Android para relógios inteligentes, que dispensa de vez o uso do celular.",
        "a versão paga do Android, sem anúncios e com suporte técnico direto do Google.",
        "uma edição leve do Android, para aparelhos com pouca memória, com apps enxutos.",
        "o nome oficial do Android 10, a versão que encerrou os nomes de doces.",
        "a loja oficial de aplicativos do Android, que substituiu de vez a Google Play.",
      ],
      correta: 2,
      explicacao:
        "O Android Go, de 2017, é uma edição otimizada para aparelhos simples, com pouca RAM e pouco armazenamento. Vem com apps Go, que gastam menos memória, dados e bateria.",
      explicacaoErradas:
        "O sistema dos relógios é outro (Wear OS). Não existe versão paga do Android para o usuário. O Android 10 não tem nome comercial. A loja continua sendo a Google Play.",
      pegadinha: "O Go não é uma versão numerada; é uma edição que acompanha as versões.",
      conhecimento: "Exemplos de apps Go: Gmail Go, Maps Go e Google Go.",
    },
    {
      topico: "Versões",
      subassunto: "Android 10",
      dificuldade: 4,
      raciocinio: "O 10 é o primeiro sem nome de doce na divulgação e trouxe o tema escuro geral.",
      enunciado: "Sobre o Android 10, lançado em 2019, assinale a alternativa correta.",
      alternativas: [
        "Foi a última versão com nome de doce, chamada oficialmente de Quindim no Brasil.",
        "Deixou os nomes de doces na divulgação e trouxe tema escuro para todo o sistema.",
        "Foi a primeira versão do Android a rodar sobre o kernel Linux, antes de outro núcleo.",
        "Foi feito só para tablets, como tinha acontecido antes com a versão Honeycomb.",
        "Trocou o kernel Linux por um núcleo próprio do Google, de código fechado.",
      ],
      correta: 1,
      explicacao:
        "O Android 10 foi o primeiro divulgado só com número, sem nome de doce, e trouxe o tema escuro para todo o sistema.",
      explicacaoErradas:
        "Não houve nome comercial de doce no 10. O Android usa o kernel Linux desde o início e continua usando. Feito só para tablets foi o Honeycomb (3.0).",
      pegadinha: "Durante o desenvolvimento ele se chamou Android Q, mas foi lançado como Android 10.",
      conhecimento: "O Android 10 também ampliou a navegação por gestos, que tinha começado no Pie.",
    },
    {
      topico: "Versões",
      subassunto: "Privacidade",
      dificuldade: 5,
      raciocinio: "Conferir cada recurso na sua versão; o 6.0 fez o contrário do que diz a última.",
      enunciado:
        "Julgue as afirmativas como verdadeiras (V) ou falsas (F).\n( ) No Android 12, ícones avisam quando a câmera ou o microfone estão em uso.\n( ) No Android 11, é possível dar a um app permissão de uso só uma vez.\n( ) No Android 15, o Espaço privado guarda apps numa área separada, com bloqueio próprio.\n( ) No Android 6.0, as permissões passaram a ser dadas todas de uma vez, na instalação.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, F, F.", "V, F, V, F.", "F, V, V, F.", "V, V, V, V.", "V, V, V, F."],
      correta: 4,
      explicacao:
        "Os indicadores de câmera e microfone são do 12 (V), a permissão única é do 11 (V) e o Espaço privado é do 15 (V). A última é falsa: o 6.0 passou a pedir as permissões na hora do uso.",
      explicacaoErradas:
        "As sequências com F nas três primeiras negam recursos que existem. A que marca V na última inverte a mudança do Marshmallow.",
      pegadinha: "O 6.0 acabou justamente com o \"aceita tudo na instalação\".",
      conhecimento: "No Android 12, o painel de privacidade mostra quais apps usaram câmera, microfone e localização.",
    },
    {
      topico: "Android",
      subassunto: "Código aberto e outros aparelhos",
      dificuldade: 4,
      raciocinio: "Código aberto permite que fabricantes adaptem o sistema para vários aparelhos.",
      enunciado: "Sobre o Android, assinale a alternativa correta.",
      alternativas: [
        "É exclusivo de celulares e tablets, porque depende sempre de uma tela sensível ao toque.",
        "Tem código aberto, o que deixa os fabricantes adaptá-lo para TVs, relógios e carros.",
        "Só pode ser instalado em aparelhos fabricados pelo próprio Google, como o Pixel.",
        "Tem código fechado, como o iOS, e cada fabricante paga para poder ver o código.",
        "Roda sobre o núcleo do Windows, adaptado pela Microsoft para os aparelhos móveis.",
      ],
      correta: 1,
      explicacao:
        "Por ter código aberto e ser personalizável, o Android é adaptado por vários fabricantes e aparece em TVs, relógios, carros e outros aparelhos.",
      explicacaoErradas:
        "Ele não é exclusivo de celulares nem de aparelhos do Google. O código é aberto, ao contrário do iOS. E o núcleo é o Linux, não o do Windows.",
      pegadinha: "O iOS, da Apple, é o sistema de código fechado; o Android é o aberto.",
      conhecimento: "Nos carros, o espelhamento do celular na central multimídia se chama Android Auto.",
    },
    {
      topico: "Versões",
      subassunto: "Android 9 Pie",
      dificuldade: 5,
      raciocinio: "Gestos no lugar dos botões e Bem-estar digital apareceram no Pie.",
      enunciado:
        "Numa versão do Android, os três botões da parte de baixo da tela começaram a dar lugar à navegação por gestos, e surgiu o Bem-estar digital, que mostra quanto tempo se passa em cada aplicativo. Essa versão é o",
      alternativas: ["Android 9 Pie.", "Android 4.4 KitKat.", "Android 2.2 Froyo.", "Android 3.0 Honeycomb.", "Android 1.5 Cupcake."],
      correta: 0,
      explicacao:
        "O Pie (9), de 2018, trouxe a navegação por gestos e o Bem-estar digital. O Android 10 ampliou os gestos depois.",
      explicacaoErradas:
        "KitKat, Froyo, Honeycomb e Cupcake são versões bem mais antigas, da época dos botões fixos, e não tinham o Bem-estar digital.",
      pegadinha: "O tempo de uso dos apps (Bem-estar digital) é recurso de versão recente, não das primeiras.",
      conhecimento: "O Pie foi a última versão com nome de doce.",
    },
    {
      topico: "Versões",
      subassunto: "Honeycomb, KitKat e outras",
      dificuldade: 4,
      raciocinio: "Honeycomb = tablets; KitKat = rodava bem com pouca memória.",
      enunciado: "Sobre versões do Android, assinale a alternativa correta.",
      alternativas: [
        "O Honeycomb (3.0) foi feito para relógios, antes de chegar aos celulares.",
        "O KitKat (4.4) exigia ao menos 4 GB de RAM e não rodava em aparelhos simples.",
        "O Lollipop (5.0) foi a primeira versão do sistema, lançada no ano de 2008.",
        "O Honeycomb (3.0) foi pensado para tablets, e não para os celulares.",
        "O Cupcake (1.5) foi a última versão do Android com nome de doce.",
      ],
      correta: 3,
      explicacao: "O Honeycomb (3.0) foi a versão feita para tablets; os celulares seguiram com o Gingerbread (2.3).",
      explicacaoErradas:
        "Relógio não era o foco do Honeycomb. O KitKat fez o contrário: foi otimizado para pouca memória. O Lollipop é de 2014; a primeira versão é a 1.0, de 2008. O Cupcake foi o primeiro nome de doce; o último foi o Pie.",
      pegadinha: "Cupcake abre a lista dos doces, não fecha.",
      conhecimento: "O Ice Cream Sandwich (4.0) juntou de novo celulares e tablets num só sistema.",
    },
    {
      topico: "Versões",
      subassunto: "Linha do tempo",
      dificuldade: 5,
      raciocinio: "2008 lançamento; 2014 Lollipop; 2017 Go; 2019 Android 10.",
      enunciado:
        "Associe cada ano ao fato da história do Android.\n(1) 2008\n(2) 2014\n(3) 2017\n(4) 2019\n( ) Apresentação do Android Go, para aparelhos simples.\n( ) Lançamento do Android 1.0.\n( ) Android 10, o primeiro sem nome de doce na divulgação.\n( ) Lollipop e o visual Material Design.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 3, 4, 2.", "3, 1, 2, 4.", "3, 1, 4, 2.", "3, 4, 1, 2.", "2, 1, 4, 3."],
      correta: 2,
      explicacao: "Android Go: 2017 (3). Android 1.0: 2008 (1). Android 10: 2019 (4). Lollipop: 2014 (2).",
      explicacaoErradas:
        "As outras sequências trocam o Lollipop com o Android 10 ou o Go com o lançamento do sistema.",
      pegadinha: "Android 10 não é de 2010: a numeração da versão não acompanha o ano.",
      conhecimento: "Desde o Lollipop, sai em média uma versão principal por ano.",
    },
  ],
};
