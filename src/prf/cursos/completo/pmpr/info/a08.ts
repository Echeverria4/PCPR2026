import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a08",
  resumo: {
    ideia:
      "O Mozilla Firefox é o navegador livre mais conhecido e não é feito sobre o Chromium. A prova cobra a janela privativa, a proteção contra rastreamento, o modo somente HTTPS, o DNS sobre HTTPS, o modo leitura, a captura de tela, a sincronização e os atalhos que mudam em relação ao Chrome e ao Edge.",
    itens: [
      {
        termo: "Quem é o Firefox",
        faz: "Software livre (licença MPL), mantido pela Mozilla, com motor próprio, o Gecko. No Firefox as guias se chamam abas.",
        pista: "Chrome e Edge usam o Blink, do Chromium; o Firefox usa o Gecko.",
      },
      {
        termo: "Janela privativa",
        faz: "Ctrl+Shift+P. Ao fechar, apaga histórico, cookies e dados de formulário da sessão. Favoritos criados e downloads continuam. Não esconde a navegação do provedor nem da rede da empresa.",
        pista: "No Firefox, Ctrl+Shift+N reabre a última janela fechada.",
      },
      {
        termo: "Proteção aprimorada contra rastreamento",
        faz: "Padrão: equilíbrio entre proteção e desempenho, páginas carregam normalmente. Rigoroso: bloqueia mais e pode quebrar alguns sites. Personalizado: o usuário escolhe o que bloquear.",
      },
      {
        termo: "Conteúdo enganoso e software perigoso",
        faz: "Proteção ligada por padrão: avisa e bloqueia sites de phishing e downloads perigosos, comparando-os com listas de ameaças.",
      },
      {
        termo: "Modo somente HTTPS",
        faz: "Tenta abrir todos os sites com conexão criptografada (HTTPS) e avisa quando o site não oferece essa opção.",
      },
      {
        termo: "DNS sobre HTTPS",
        faz: "Envia criptografada a consulta que traduz o nome do site em endereço IP, dificultando que outros vejam quais sites o usuário acessa.",
      },
      {
        termo: "Modo leitura",
        faz: "Quando a página permite, aparece um ícone na barra de endereço: ao clicar, ficam só o texto e as imagens principais, sem anúncios e menus. Também lê o texto em voz alta.",
      },
      {
        termo: "Captura de tela",
        faz: "Ctrl+Shift+S: tira foto da parte visível, de uma área escolhida ou da página inteira, sem programa extra.",
      },
      {
        termo: "Firefox Relay",
        faz: "Cria endereços de e-mail que repassam as mensagens para o e-mail verdadeiro, que fica escondido dos sites. Ajuda contra spam e vazamentos.",
      },
      {
        termo: "Conta Mozilla e sincronização",
        faz: "Com a mesma conta Mozilla (antes chamada conta Firefox) em vários aparelhos, o Firefox sincroniza favoritos, senhas, histórico, abas abertas e complementos.",
      },
      {
        termo: "Extensões e temas",
        faz: "Gerenciador de complementos (Ctrl+Shift+A ou about:addons): instalar, desativar, remover extensões e trocar o tema. As configurações ficam em about:preferences.",
      },
      {
        termo: "Recursos que saíram",
        faz: "Os snippets (recados na página inicial) foram desligados na versão 89. O Pocket, que guardava páginas para ler depois, foi encerrado pela Mozilla em 2025, mas ainda aparece em questões antigas.",
      },
      {
        termo: "Atalhos",
        faz: "Ctrl+Shift+P: janela privativa. Ctrl+Shift+N: reabre janela fechada. Ctrl+Shift+T: reabre aba fechada. Ctrl+H: histórico na barra lateral. Ctrl+B: favoritos na barra lateral. Ctrl+J: downloads. Ctrl+Shift+Delete: limpar histórico recente.",
      },
    ],
  },
  questoes: [
    {
      topico: "Conceitos",
      subassunto: "Licença e motor",
      dificuldade: 4,
      raciocinio: "Firefox: livre, Mozilla, motor Gecko; não é Chromium.",
      enunciado: "Sobre o Mozilla Firefox, assinale a alternativa correta.",
      alternativas: [
        "É freeware fechado do Google, feito sobre o mesmo Chromium que serve de base ao Chrome.",
        "É o navegador que já vem no Windows 11 e só funciona se o usuário tiver conta Microsoft.",
        "Usa o motor Blink e, por isso, aceita só as extensões instaladas pela Chrome Web Store.",
        "É livre, mas só pode ser instalado no Linux, porque usa a mesma licença GPL do kernel.",
        "É software livre mantido pela Mozilla e usa o motor Gecko, e não o Blink do Chromium.",
      ],
      correta: 4,
      explicacao:
        "O Firefox tem código aberto (licença MPL), é mantido pela Mozilla e usa o motor Gecko, diferente do Blink usado por Chrome e Edge.",
      explicacaoErradas:
        "Não é do Google nem feito sobre o Chromium. O navegador que vem no Windows é o Edge. O Firefox tem loja própria de complementos. Existe para Windows, macOS, Linux, Android e iOS, e sua licença é a MPL, não a do kernel.",
      pegadinha: "Livre não quer dizer \"só para Linux\": o Firefox roda em vários sistemas.",
      conhecimento: "No Firefox, as guias do navegador são chamadas de abas.",
    },
    {
      topico: "Atalhos",
      subassunto: "Teclas do Firefox",
      dificuldade: 5,
      raciocinio: "P de privativa; N reabre janela; A de add-ons; S de screenshot.",
      enunciado:
        "Associe cada atalho do Mozilla Firefox à sua função.\n(1) Ctrl+Shift+P\n(2) Ctrl+Shift+N\n(3) Ctrl+Shift+A\n(4) Ctrl+Shift+S\n( ) Reabre a última janela fechada.\n( ) Faz uma captura de tela da página.\n( ) Abre uma janela privativa.\n( ) Abre o gerenciador de extensões e temas.\nA sequência correta, de cima para baixo, é",
      alternativas: ["2, 1, 4, 3.", "1, 4, 2, 3.", "2, 4, 1, 3.", "2, 4, 3, 1.", "4, 2, 1, 3."],
      correta: 2,
      explicacao:
        "Reabrir janela fechada: Ctrl+Shift+N (2). Captura de tela: Ctrl+Shift+S (4). Janela privativa: Ctrl+Shift+P (1). Extensões e temas: Ctrl+Shift+A (3).",
      explicacaoErradas:
        "As outras sequências trocam a janela privativa com a janela reaberta (o erro de quem pensa no Chrome), a captura com a privativa ou as extensões com a privativa.",
      pegadinha: "Ctrl+Shift+N abre a anônima no Chrome e a InPrivate no Edge, mas no Firefox reabre janela fechada.",
      conhecimento: "Ctrl+Shift+T reabre a última aba fechada nos três navegadores.",
    },
    {
      topico: "Atalhos",
      subassunto: "Ctrl+Shift+N no Firefox",
      dificuldade: 5,
      raciocinio: "O atalho de privativa do Firefox é Ctrl+Shift+P; o N reabre janela.",
      enunciado:
        "No Firefox, um usuário aperta Ctrl+Shift+N achando que vai abrir uma janela privativa, como faz no Chrome e no Edge. O que acontece?",
      alternativas: [
        "O Firefox reabre a última janela fechada; a janela privativa é aberta com Ctrl+Shift+P.",
        "Abre uma janela privativa, porque esse atalho é o mesmo em todos os navegadores do mercado.",
        "Abre uma nova aba em branco na mesma janela, com o mesmo efeito que o atalho Ctrl+T.",
        "Abre a tela de limpar o histórico recente, com os dados de navegação já selecionados.",
        "Nada acontece, porque o Firefox não oferece atalho de teclado para abrir janela privativa.",
      ],
      correta: 0,
      explicacao:
        "No Firefox, Ctrl+Shift+N desfaz o fechamento de uma janela. A janela privativa abre com Ctrl+Shift+P.",
      explicacaoErradas:
        "O atalho não é igual nos três navegadores. Nova aba é Ctrl+T. Limpar o histórico recente é Ctrl+Shift+Delete. O Firefox tem atalho para a privativa: Ctrl+Shift+P.",
      pegadinha: "O mesmo atalho faz coisas diferentes em navegadores diferentes.",
      conhecimento: "No antigo Internet Explorer, a janela InPrivate abria com Ctrl+Shift+P.",
    },
    {
      topico: "Privacidade",
      subassunto: "Proteção aprimorada contra rastreamento",
      dificuldade: 4,
      raciocinio: "Bloqueia mais e pode quebrar sites = Rigoroso.",
      enunciado:
        "Na proteção aprimorada contra rastreamento do Firefox, o nível que bloqueia mais rastreadores, com risco de alguns sites ou conteúdos não funcionarem direito, é o",
      alternativas: ["Padrão.", "Rigoroso.", "Personalizado.", "Somente HTTPS.", "Equilibrado."],
      correta: 1,
      explicacao:
        "O Rigoroso oferece proteção mais forte e pode quebrar partes de alguns sites. O Padrão equilibra proteção e desempenho.",
      explicacaoErradas:
        "Padrão é o nível que vem ligado e carrega as páginas normalmente. Personalizado deixa o usuário escolher o que bloquear. Somente HTTPS é outro recurso, de conexão criptografada. Equilibrado é o nome do nível padrão do Edge.",
      pegadinha: "Os nomes mudam de navegador para navegador: Equilibrado é do Edge, Padrão é do Firefox.",
      conhecimento: "No Edge, o nível mais forte se chama Estrito.",
    },
    {
      topico: "Segurança",
      subassunto: "DNS sobre HTTPS",
      dificuldade: 5,
      raciocinio: "Criptografar a consulta de nome → IP = DNS sobre HTTPS; não confundir com Modo somente HTTPS.",
      enunciado:
        "O recurso do Firefox que envia de forma criptografada a consulta que traduz o nome do site em endereço IP, dificultando que outros vejam quais sites o usuário acessa, é o",
      alternativas: [
        "Modo somente HTTPS.",
        "Proteção contra conteúdo enganoso.",
        "Firefox Relay.",
        "DNS sobre HTTPS.",
        "Modo leitura.",
      ],
      correta: 3,
      explicacao:
        "O DNS traduz nomes em IP. No DNS sobre HTTPS, essa consulta vai criptografada, e quem está no meio do caminho tem mais dificuldade de saber quais sites são pedidos.",
      explicacaoErradas:
        "O Modo somente HTTPS cuida da conexão com o site, não da consulta de nome. A proteção contra conteúdo enganoso bloqueia golpes. O Relay esconde o e-mail. O modo leitura limpa a página.",
      pegadinha: "\"Somente HTTPS\" e \"DNS sobre HTTPS\" têm HTTPS no nome, mas protegem coisas diferentes.",
      conhecimento: "DNS é o serviço que transforma um nome, como gov.br, em endereço IP.",
    },
    {
      topico: "Recursos",
      subassunto: "HTTPS, Relay, proteção e leitura",
      dificuldade: 5,
      raciocinio: "A proteção contra conteúdo enganoso já vem ligada.",
      enunciado:
        "Julgue as afirmativas sobre o Firefox como verdadeiras (V) ou falsas (F).\n( ) O Modo somente HTTPS tenta abrir os sites sempre com conexão criptografada e avisa quando o site não oferece HTTPS.\n( ) O Firefox Relay cria endereços de e-mail que repassam as mensagens ao e-mail verdadeiro, escondido dos sites.\n( ) A proteção contra conteúdo enganoso e software perigoso vem desligada e precisa ser ativada pelo usuário.\n( ) O modo leitura aparece como um ícone na barra de endereço quando a página permite.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, V, V.", "F, V, F, V.", "V, F, F, V.", "V, V, F, V.", "V, V, F, F."],
      correta: 3,
      explicacao:
        "Somente HTTPS força a conexão criptografada (V). O Relay esconde o e-mail verdadeiro (V). O ícone do modo leitura aparece na barra quando a página permite (V). A terceira é falsa: essa proteção já vem ligada.",
      explicacaoErradas:
        "Marcar V na terceira ignora que a proteção é padrão. Marcar F na primeira, na segunda ou na última nega recursos que o Firefox tem.",
      pegadinha: "A proteção contra golpes é ligada de fábrica; o usuário pode desligar, mas não precisa ligar.",
      conhecimento: "A proteção contra conteúdo enganoso fica em Privacidade e Segurança › Segurança.",
    },
    {
      topico: "Privacidade",
      subassunto: "Janela privativa",
      dificuldade: 4,
      raciocinio: "Privativa apaga os rastros no computador, mas não esconde da rede.",
      enunciado:
        "Sobre a janela privativa do Firefox, analise as afirmativas.\nI – Ao fechá-la, o histórico, os cookies e os dados de formulário da sessão são apagados.\nII – Os arquivos baixados durante a sessão continuam no computador.\nIII – Ela abre com o atalho Ctrl+Shift+P.\nIV – Ela esconde a navegação do provedor de internet e da rede da empresa.\nEstão corretas as afirmativas",
      alternativas: ["I e II, apenas.", "I, II e III, apenas.", "II, III e IV, apenas.", "I, II e IV, apenas.", "I, II, III e IV."],
      correta: 1,
      explicacao:
        "A privativa apaga os rastros da sessão ao ser fechada (I), mantém os downloads (II) e abre com Ctrl+Shift+P (III).",
      explicacaoErradas:
        "A IV está errada: o provedor e a rede da empresa continuam vendo o tráfego. Quem marca só I e II esquece o atalho correto.",
      pegadinha: "Privativa protege do próximo usuário do computador, não de quem controla a rede.",
      conhecimento: "Para esconder o tráfego da rede local, usa-se uma VPN.",
    },
    {
      topico: "Recursos",
      subassunto: "Sincronização",
      dificuldade: 4,
      raciocinio: "Sincronizar = mesma conta Mozilla nos dois aparelhos.",
      enunciado:
        "Um usuário quer ver no celular os favoritos, as senhas e as abas abertas do Firefox do computador. Para isso, ele deve",
      alternativas: [
        "exportar os favoritos para um arquivo e abri-los na janela privativa do celular.",
        "ligar o DNS sobre HTTPS, que copia os dados para os aparelhos da mesma rede.",
        "instalar o Firefox Relay, que encaminha as senhas salvas para o celular.",
        "tirar capturas de tela das abas com Ctrl+Shift+S e enviar as imagens ao celular.",
        "entrar com a mesma conta Mozilla nos dois aparelhos e ligar a sincronização.",
      ],
      correta: 4,
      explicacao:
        "Com a mesma conta Mozilla e a sincronização ligada, o Firefox leva favoritos, senhas, histórico, abas abertas e complementos de um aparelho para o outro.",
      explicacaoErradas:
        "Exportar arquivo leva só os favoritos, e a privativa não guarda nada. O DNS sobre HTTPS só criptografa consultas de nome. O Relay trata de e-mail, não de senhas. Captura de tela é só imagem.",
      pegadinha: "Sincronizar é pela conta, não pela rede Wi-Fi em comum.",
      conhecimento: "A conta Mozilla já se chamou conta Firefox.",
    },
    {
      topico: "Recursos",
      subassunto: "Modo leitura",
      dificuldade: 4,
      raciocinio: "Ícone de página na barra = modo leitura, que tira anúncios e menus.",
      enunciado:
        "Ao abrir uma notícia cheia de anúncios no Firefox, aparece na barra de endereço um ícone de página. Ao clicar nele,",
      alternativas: [
        "o modo leitura mostra só o texto e as imagens principais, sem anúncios e menus.",
        "a página é guardada na nuvem para ser lida depois, em qualquer outro aparelho.",
        "o Firefox tira uma captura de tela da página inteira e a salva em Downloads.",
        "a página passa para uma janela privativa, que não grava o histórico da visita.",
        "os rastreadores da página passam a ser bloqueados no nível Rigoroso de proteção.",
      ],
      correta: 0,
      explicacao:
        "O modo leitura deixa só o conteúdo principal, com tamanho do texto e cor ajustáveis, e pode ler o texto em voz alta.",
      explicacaoErradas:
        "Guardar para ler depois era o Pocket, já encerrado. A captura de tela é Ctrl+Shift+S. O ícone não troca a página de janela nem muda o nível de proteção.",
      pegadinha: "Modo leitura limpa a tela, mas não bloqueia rastreadores.",
      conhecimento: "No Edge, o recurso parecido se chama Leitura Avançada.",
    },
    {
      topico: "Comparação",
      subassunto: "Recursos de cada navegador",
      dificuldade: 4,
      raciocinio: "InPrivate e Leitura Avançada = Edge; anônima e visitante = Chrome; privativa e Relay = Firefox.",
      enunciado:
        "Associe cada recurso ao navegador em que ele tem esse nome.\n(1) Microsoft Edge\n(2) Google Chrome\n(3) Mozilla Firefox\n( ) Navegação InPrivate.\n( ) Janela anônima e modo visitante.\n( ) Janela privativa e Relay.\n( ) Leitura Avançada e Ler em voz alta.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 3, 2, 1.", "2, 1, 3, 3.", "1, 2, 3, 1.", "3, 2, 1, 1.", "1, 2, 3, 2."],
      correta: 2,
      explicacao:
        "InPrivate é do Edge (1). Anônima e visitante são do Chrome (2). Privativa e Relay são do Firefox (3). Leitura Avançada e Ler em voz alta são do Edge (1).",
      explicacaoErradas:
        "As outras sequências trocam o Chrome com o Firefox ou dão a Leitura Avançada a outro navegador.",
      pegadinha: "Os três têm navegação sem histórico, mas cada um dá um nome diferente.",
      conhecimento: "Os atalhos também mudam: Ctrl+Shift+N no Edge e no Chrome, Ctrl+Shift+P no Firefox.",
    },
  ],
};
