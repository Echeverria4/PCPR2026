import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a06",
  resumo: {
    ideia:
      "O Microsoft Edge é o navegador que vem no Windows. Desde 2020 ele usa a mesma base do Chrome (Chromium). A prova cobra o que cada recurso faz: InPrivate, SmartScreen, prevenção de rastreamento, Leitura Avançada, perfis, sincronização, guias suspensas e os atalhos mais usados.",
    itens: [
      {
        termo: "Base do Edge",
        faz: "Desde 2020 o Edge é feito sobre o Chromium, projeto de código aberto do Google, com o motor Blink. Por isso aceita as extensões da loja do Chrome. A pesquisa padrão é o Bing.",
      },
      {
        termo: "Navegação InPrivate",
        faz: "Ao fechar todas as janelas InPrivate, o Edge apaga histórico, cookies, dados de formulário e arquivos temporários daquela sessão. Favoritos criados e arquivos baixados continuam no computador.",
        pista: "InPrivate esconde do próprio computador, não da empresa, da escola nem do provedor de internet.",
      },
      {
        termo: "SmartScreen",
        faz: "Avisa e bloqueia sites de phishing (páginas falsas que roubam dados) e downloads de programas maliciosos conhecidos.",
      },
      {
        termo: "Prevenção de rastreamento",
        faz: "Limita os rastreadores que seguem o usuário de site em site. Básico: bloqueia só os prejudiciais. Equilibrado: o padrão, recomendado. Estrito: bloqueia a maioria e pode fazer partes de alguns sites não funcionarem.",
      },
      {
        termo: "Leitura Avançada",
        faz: "Tira anúncios, menus e enfeites da página e deixa só o texto e as imagens principais, com letra, espaçamento e cor ajustáveis.",
      },
      {
        termo: "Ler em voz alta",
        faz: "Recurso de acessibilidade: o Edge lê o texto da página e destaca cada palavra enquanto lê.",
      },
      {
        termo: "Perfis e sincronização",
        faz: "Cada perfil tem seus próprios favoritos, senhas, histórico e extensões. Entrando com a conta Microsoft, o Edge sincroniza esses dados entre computadores e celulares.",
      },
      {
        termo: "Sistema e desempenho",
        faz: "Guias suspensas: guias paradas há um tempo deixam de gastar memória e voltam a carregar ao serem clicadas. Modo de eficiência: economiza bateria e processamento.",
      },
      {
        termo: "Modo Internet Explorer",
        faz: "Abre, dentro do Edge, sites antigos que só funcionam no Internet Explorer.",
      },
      {
        termo: "Cookies e cache",
        faz: "Cookies: pequenos arquivos de texto que os sites gravam para reconhecer o visitante (login, carrinho, preferências); podem ser do próprio site ou de terceiros. Cache: cópias de partes das páginas, como imagens, para abrir mais rápido.",
      },
      {
        termo: "Barra lateral",
        faz: "Fica na lateral da janela e dá acesso rápido a ferramentas e aplicativos, como o assistente Copilot, sem sair da página aberta.",
      },
      {
        termo: "Atalhos",
        faz: "Ctrl+T: nova guia. Ctrl+N: nova janela. Ctrl+Shift+N: janela InPrivate. Ctrl+W: fecha a guia. Ctrl+Shift+T: reabre a última guia fechada. Ctrl+H: histórico. Ctrl+J: downloads. Ctrl+D: favoritar. Ctrl+Shift+B: barra de favoritos. Ctrl+Shift+Delete: limpar dados. F11: tela cheia.",
        pista: "No Edge, Ctrl+Shift+N abre a InPrivate; no Firefox, a janela privativa é Ctrl+Shift+P.",
      },
    ],
  },
  questoes: [
    {
      topico: "Privacidade",
      subassunto: "Navegação InPrivate",
      dificuldade: 5,
      raciocinio: "InPrivate apaga os rastros no próprio computador ao fechar; não esconde da rede nem apaga downloads.",
      enunciado: "Um usuário navega numa janela InPrivate do Microsoft Edge e depois fecha todas as janelas InPrivate. Nesse caso,",
      alternativas: [
        "o provedor de internet e a rede do trabalho deixam de registrar quais sites foram acessados na sessão.",
        "os arquivos baixados durante a sessão são apagados junto com o histórico, ao fechar a última janela.",
        "o histórico e os cookies da sessão são apagados, mas os arquivos baixados continuam no computador.",
        "os sites deixam de gravar cookies até durante a navegação, e por isso não é possível fazer login neles.",
        "o SmartScreen é desligado durante a sessão, para que os endereços visitados não fiquem registrados.",
      ],
      correta: 2,
      explicacao:
        "Ao fechar as janelas InPrivate, o Edge apaga histórico, cookies, dados de formulário e arquivos temporários daquela sessão. O que foi baixado e os favoritos criados ficam.",
      explicacaoErradas:
        "O provedor e a rede da empresa continuam vendo o tráfego. Downloads não são apagados. Durante a sessão os cookies funcionam normalmente (dá para fazer login); só são apagados ao fechar. O SmartScreen continua protegendo.",
      pegadinha: "\"Privado\" aqui é só no próprio computador.",
      conhecimento: "No Edge, a janela InPrivate abre com Ctrl+Shift+N.",
    },
    {
      topico: "Atalhos",
      subassunto: "Teclas do Edge",
      dificuldade: 4,
      raciocinio: "H de histórico, J de downloads, N com Shift de InPrivate, T com Shift de reabrir guia.",
      enunciado:
        "Associe cada atalho do Microsoft Edge à sua função.\n(1) Ctrl+H\n(2) Ctrl+J\n(3) Ctrl+Shift+N\n(4) Ctrl+Shift+T\n( ) Abre a lista de downloads.\n( ) Reabre a última guia fechada.\n( ) Abre o histórico.\n( ) Abre uma janela InPrivate.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 4, 2, 3.", "2, 3, 1, 4.", "4, 2, 1, 3.", "2, 4, 3, 1.", "2, 4, 1, 3."],
      correta: 4,
      explicacao:
        "Downloads: Ctrl+J (2). Reabrir a última guia fechada: Ctrl+Shift+T (4). Histórico: Ctrl+H (1). InPrivate: Ctrl+Shift+N (3).",
      explicacaoErradas:
        "As outras sequências trocam o histórico com os downloads, a InPrivate com a guia reaberta ou as duas coisas.",
      pegadinha: "Ctrl+T abre uma guia nova; com Shift, reabre a que foi fechada.",
      conhecimento: "Ctrl+Shift+Delete abre a tela para limpar os dados de navegação.",
    },
    {
      topico: "Privacidade",
      subassunto: "Prevenção de rastreamento",
      dificuldade: 5,
      raciocinio: "Equilibrado é o padrão; Estrito bloqueia mais e pode quebrar sites; funciona em qualquer janela.",
      enunciado:
        "Sobre a prevenção de rastreamento do Microsoft Edge, analise as afirmativas.\nI – O nível Equilibrado é o padrão recomendado.\nII – O nível Estrito bloqueia a maioria dos rastreadores e pode fazer partes de alguns sites não funcionarem.\nIII – O nível Básico bloqueia os rastreadores prejudiciais, mas permite a maioria dos outros, inclusive os que personalizam anúncios.\nIV – A prevenção de rastreamento só funciona nas janelas InPrivate; nas janelas comuns, nenhum rastreador é bloqueado.\nEstão corretas as afirmativas",
      alternativas: ["I, II e III, apenas.", "I e II, apenas.", "II e III, apenas.", "II, III e IV, apenas.", "I, II, III e IV."],
      correta: 0,
      explicacao:
        "Equilibrado é o padrão (I). Estrito bloqueia mais e pode atrapalhar alguns sites (II). Básico bloqueia só os prejudiciais (III).",
      explicacaoErradas:
        "A IV está errada: a prevenção de rastreamento vale também nas janelas comuns; na InPrivate há apenas a opção de usar sempre o nível Estrito. Quem marca só I e II, ou só II e III, deixa de fora uma afirmativa correta; quem inclui a IV aceita o erro.",
      pegadinha: "Mais bloqueio não é sempre melhor: o Estrito pode quebrar partes de sites.",
      conhecimento: "Rastreadores seguem o usuário de site em site para montar um perfil de anúncios.",
    },
    {
      topico: "Segurança",
      subassunto: "SmartScreen",
      dificuldade: 4,
      raciocinio: "SmartScreen = proteção contra phishing e downloads maliciosos.",
      enunciado: "No Microsoft Edge, o Microsoft Defender SmartScreen tem como função",
      alternativas: [
        "impedir que o histórico e os cookies fiquem gravados depois que o navegador é fechado.",
        "limpar a página, tirando anúncios e menus, para deixar a leitura mais confortável.",
        "limitar os rastreadores que seguem o usuário de site em site para montar seus anúncios.",
        "avisar e bloquear sites de phishing e downloads de programas maliciosos conhecidos.",
        "suspender as guias paradas há algum tempo, para economizar a memória e a bateria.",
      ],
      correta: 3,
      explicacao:
        "O SmartScreen compara sites e downloads com listas de ameaças conhecidas e mostra um aviso ou bloqueia o acesso.",
      explicacaoErradas:
        "Não gravar histórico é a InPrivate. Limpar a página é a Leitura Avançada. Limitar rastreadores é a prevenção de rastreamento. Suspender guias é recurso de Sistema e desempenho.",
      pegadinha: "Prevenção de rastreamento cuida da privacidade; SmartScreen cuida de golpes e pragas.",
      conhecimento: "Phishing é a página falsa que imita banco ou órgão para roubar senha e dados.",
    },
    {
      topico: "Acessibilidade",
      subassunto: "Leitura Avançada e Ler em voz alta",
      dificuldade: 4,
      raciocinio: "Tirar anúncios = Leitura Avançada; ler com destaque das palavras = Ler em voz alta.",
      enunciado:
        "Um usuário com dificuldade de leitura quer que o Edge tire anúncios e menus da página e, depois, leia o texto em voz alta destacando cada palavra. Os recursos adequados são, respectivamente,",
      alternativas: [
        "Prevenção de rastreamento e Copilot.",
        "Leitura Avançada e Ler em voz alta.",
        "Modo de eficiência e guias suspensas.",
        "Navegação InPrivate e SmartScreen.",
        "Barra lateral e Proteção para a família.",
      ],
      correta: 1,
      explicacao:
        "A Leitura Avançada deixa só o conteúdo principal da página. Ler em voz alta lê o texto e destaca as palavras.",
      explicacaoErradas:
        "Prevenção de rastreamento cuida de rastreadores. Modo de eficiência e guias suspensas economizam recursos. InPrivate e SmartScreen tratam de privacidade e segurança. Proteção para a família controla o uso por crianças.",
      pegadinha: "Bloquear rastreador não tira os anúncios da tela; quem limpa a página é a Leitura Avançada.",
      conhecimento: "Na Leitura Avançada dá para mudar o tamanho da letra, o espaçamento e a cor do fundo.",
    },
    {
      topico: "Recursos",
      subassunto: "Base, modo IE, guias e sincronização",
      dificuldade: 5,
      raciocinio: "Guia suspensa continua aberta; só para de gastar memória.",
      enunciado:
        "Julgue as afirmativas sobre o Microsoft Edge como verdadeiras (V) ou falsas (F).\n( ) Desde 2020, o Edge é feito sobre o Chromium, a mesma base de código aberto do Chrome.\n( ) O modo Internet Explorer permite abrir sites antigos que só funcionam no Internet Explorer.\n( ) As guias suspensas são fechadas de vez e precisam ser procuradas no histórico para voltar.\n( ) Entrando com a conta Microsoft, o Edge pode sincronizar favoritos, senhas e histórico entre aparelhos.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, V, V.", "V, V, F, V.", "F, V, F, V.", "V, F, F, V.", "V, V, F, F."],
      correta: 1,
      explicacao:
        "O Edge usa o Chromium (V). O modo IE abre sites antigos (V). A sincronização pela conta Microsoft leva favoritos, senhas e histórico (V). A terceira é falsa: a guia suspensa continua aberta na barra e volta a carregar ao ser clicada.",
      explicacaoErradas:
        "Marcar V na terceira confunde suspender com fechar. Marcar F na primeira ignora a troca de base feita em 2020. Marcar F na segunda ou na última nega recursos que o Edge tem.",
      pegadinha: "Suspensa não é fechada: a guia fica lá, só dormindo.",
      conhecimento: "Por usar o Chromium, o Edge aceita extensões da loja do Chrome.",
    },
    {
      topico: "Recursos",
      subassunto: "Perfis",
      dificuldade: 4,
      raciocinio: "Separar favoritos, senhas e histórico de cada pessoa é papel do perfil.",
      enunciado:
        "Duas pessoas usam o mesmo computador e cada uma quer, no Edge, os próprios favoritos, senhas e histórico, sem misturar com os da outra. O recurso adequado é",
      alternativas: [
        "usar só janelas InPrivate, que guardam os favoritos de cada pessoa à parte.",
        "ativar a prevenção de rastreamento no nível Estrito para cada uma delas.",
        "abrir os sites de cada pessoa no modo Internet Explorer, que separa os dados.",
        "criar um perfil para cada pessoa, com seus próprios dados e configurações.",
        "limpar os dados com Ctrl+Shift+Delete sempre que a outra pessoa for usar.",
      ],
      correta: 3,
      explicacao:
        "Cada perfil do Edge tem favoritos, senhas, histórico, extensões e configurações próprios, e pode sincronizar com a conta de cada pessoa.",
      explicacaoErradas:
        "A InPrivate não guarda histórico nem separa favoritos por pessoa. O nível Estrito só bloqueia rastreadores. O modo IE serve para sites antigos. Limpar os dados apaga tudo em vez de separar.",
      pegadinha: "Apagar não é separar: limpar os dados faz as duas pessoas perderem o que tinham.",
      conhecimento: "O botão do perfil fica no alto da janela, ao lado da barra de endereço.",
    },
    {
      topico: "Dados do navegador",
      subassunto: "Cookies e cache",
      dificuldade: 5,
      raciocinio: "Cache guarda cópias de partes da página para abrir mais rápido; cookie é arquivo de texto.",
      enunciado: "Sobre os dados que o navegador guarda no computador, assinale a alternativa correta.",
      alternativas: [
        "Cookies são programas executáveis que os sites instalam para controlar o computador.",
        "O cache guarda as senhas digitadas, para que o usuário não precise digitá-las de novo.",
        "Cookies só podem ser criados pelo site aberto na barra, nunca por terceiros.",
        "Apagar o cache faz o usuário perder todos os favoritos salvos naquele navegador.",
        "O cache guarda cópias de partes das páginas, como imagens, para abrirem mais rápido.",
      ],
      correta: 4,
      explicacao:
        "O cache guarda arquivos das páginas visitadas, como imagens e scripts, para não baixá-los de novo a cada visita.",
      explicacaoErradas:
        "Cookies são pequenos arquivos de texto, não programas. Senhas ficam no gerenciador de senhas, não no cache. Existem cookies de terceiros, gravados por anúncios e rastreadores de outros domínios. Favoritos não ficam no cache.",
      pegadinha: "Cookie de terceiro é justamente o usado pelos rastreadores de anúncios.",
      conhecimento: "Limpar o cache pode resolver página que aparece desatualizada.",
    },
    {
      topico: "Desempenho",
      subassunto: "Guias suspensas",
      dificuldade: 4,
      raciocinio: "Economizar memória com muitas guias abertas = guias suspensas.",
      enunciado:
        "Um notebook fica lento quando o usuário deixa muitas guias abertas no Edge. Uma opção de Sistema e desempenho que ajuda a economizar memória é",
      alternativas: [
        "pôr em suspensão as guias paradas há algum tempo, que voltam a carregar ao serem clicadas.",
        "abrir todas as guias em janelas InPrivate, que funcionam sem ocupar memória do computador.",
        "ativar o SmartScreen, que fecha sozinho as páginas pesadas antes que elas travem o sistema.",
        "desligar a sincronização da conta Microsoft, que mantém uma cópia de cada guia na memória.",
        "trocar a pesquisa padrão do Bing por outro site de busca, que deixa as páginas mais leves.",
      ],
      correta: 0,
      explicacao:
        "As guias suspensas deixam de usar memória e processador enquanto estão paradas e voltam ao serem clicadas.",
      explicacaoErradas:
        "Janela InPrivate ocupa memória como qualquer outra. O SmartScreen não fecha páginas pesadas. A sincronização não guarda cópia das guias na memória. Trocar o buscador não muda o peso das páginas abertas.",
      pegadinha: "InPrivate muda o que fica gravado, não o quanto a guia gasta.",
      conhecimento: "O modo de eficiência também reduz o consumo de bateria no notebook.",
    },
    {
      topico: "Atalhos",
      subassunto: "Guias, janelas e favoritos",
      dificuldade: 5,
      raciocinio: "Ctrl+N abre janela, não guia; guia nova é Ctrl+T.",
      enunciado:
        "Sobre atalhos do Microsoft Edge, analise as afirmativas.\nI – Ctrl+D adiciona a página aberta aos favoritos.\nII – Ctrl+N abre uma nova guia na mesma janela.\nIII – F11 liga e desliga a tela cheia.\nIV – Ctrl+Shift+B mostra ou esconde a barra de favoritos.\nEstão corretas as afirmativas",
      alternativas: ["I e III, apenas.", "I, II e III, apenas.", "I, III e IV, apenas.", "II, III e IV, apenas.", "I, II, III e IV."],
      correta: 2,
      explicacao:
        "Ctrl+D favorita a página (I). F11 alterna a tela cheia (III). Ctrl+Shift+B mostra ou esconde a barra de favoritos (IV).",
      explicacaoErradas:
        "A II está errada: Ctrl+N abre uma nova janela; a nova guia é Ctrl+T. Quem marca só I e III esquece a barra de favoritos.",
      pegadinha: "N de nova janela; T de tab, a guia.",
      conhecimento: "Ctrl+W fecha a guia atual.",
    },
  ],
};
