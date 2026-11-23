import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a07",
  resumo: {
    ideia:
      "O Google Chrome é o navegador mais usado. Ele é gratuito, mas não é software livre; livre é o Chromium, a base dele. A prova cobra Navegação segura, janela anônima, modo visitante, perfis e sincronização, página inicial e de inicialização, restaurar configurações, extensões e atalhos.",
    itens: [
      {
        termo: "Chrome x Chromium",
        faz: "O Chromium é o projeto de código aberto; o Chrome é a versão do Google feita sobre ele, distribuída de graça (freeware), com recursos e marca próprios. Os dois usam o motor Blink.",
        pista: "Edge, Opera e outros navegadores também são feitos sobre o Chromium.",
      },
      {
        termo: "Navegação segura",
        faz: "Protege contra phishing, sites e downloads perigosos. Proteção reforçada: mais rápida e proativa, compartilha mais dados com o Google. Proteção padrão: a que vem ligada. Sem proteção: não recomendada.",
      },
      {
        termo: "Janela anônima",
        faz: "Ctrl+Shift+N. Ao fechar, apaga histórico, cookies e dados de formulário da sessão. Por padrão, bloqueia cookies de terceiros. Favoritos criados e arquivos baixados continuam no computador.",
        pista: "Não esconde a navegação do empregador, da escola nem do provedor.",
      },
      {
        termo: "Modo visitante",
        faz: "Para quem usa o computador de outra pessoa: não mostra os favoritos, senhas e histórico de nenhum perfil e apaga o que foi feito ao fechar.",
        pista: "Anônima usa o perfil do dono sem gravar; visitante nem entra no perfil.",
      },
      {
        termo: "Perfis e sincronização",
        faz: "Cada perfil tem seus favoritos, senhas, histórico e extensões. Com a conta Google conectada e a sincronização ligada, esses dados aparecem nos outros aparelhos da mesma conta.",
      },
      {
        termo: "Página inicial x inicialização",
        faz: "Página inicial: a que abre ao clicar no botão da casinha. Página de inicialização: a que abre quando o Chrome é aberto. São opções separadas e podem ser diferentes.",
      },
      {
        termo: "Restaurar configurações",
        faz: "Volta ao padrão a página de inicialização, a nova guia, a pesquisa padrão e as guias fixadas; desativa as extensões e apaga dados temporários, como cookies. Favoritos, histórico e senhas salvas ficam.",
      },
      {
        termo: "Extensões",
        faz: "Pequenos programas que acrescentam funções ao navegador, instalados pela Chrome Web Store e geridos em chrome://extensions. Extensão de origem duvidosa pode espionar e mostrar anúncios.",
      },
      {
        termo: "Cookies e \"Não rastrear\"",
        faz: "Cookies são arquivos de texto que os sites gravam para reconhecer o visitante. O pedido \"Não rastrear\" só avisa os sites; cada site decide se respeita ou não.",
      },
      {
        termo: "Endereços internos",
        faz: "chrome://settings (configurações), chrome://history (histórico), chrome://downloads (downloads), chrome://extensions (extensões).",
      },
      {
        termo: "Atalhos",
        faz: "Ctrl+Shift+N: janela anônima. Ctrl+Shift+T: reabre guia fechada. Ctrl+Tab: próxima guia. Ctrl+9: última guia. Ctrl+L, Alt+D ou F6: barra de endereço. Ctrl+U: código-fonte. Shift+Esc: gerenciador de tarefas do Chrome. Ctrl+Shift+Delete: limpar dados.",
      },
    ],
  },
  questoes: [
    {
      topico: "Conceitos",
      subassunto: "Chrome e Chromium",
      dificuldade: 4,
      raciocinio: "Chromium é o código aberto; o Chrome é o produto gratuito do Google feito sobre ele.",
      enunciado: "Sobre o Google Chrome e o Chromium, assinale a alternativa correta.",
      alternativas: [
        "O Chrome é software livre com licença GPL, e o Chromium é a versão paga oferecida às empresas.",
        "O Chromium é o projeto de código aberto que serve de base ao Chrome, distribuído como freeware.",
        "O Chromium é a versão do Chrome feita só para celulares Android, sem nenhum suporte a extensões.",
        "Chrome e Chromium usam motores diferentes de navegação, e só o Chrome trabalha com o Blink.",
        "O Chromium só pode ser instalado no Linux, enquanto o Chrome só pode ser instalado no Windows.",
      ],
      correta: 1,
      explicacao:
        "O Google mantém o Chromium com código aberto e monta o Chrome sobre ele, com marca e recursos próprios. O Chrome é gratuito, mas não é livre.",
      explicacaoErradas:
        "O Chrome não é livre nem o Chromium é pago. O Chromium não é versão de celular. Os dois usam o Blink. Os dois existem para vários sistemas operacionais.",
      pegadinha: "Gratuito não é o mesmo que livre: o Chrome é de graça, mas o código dele não é aberto por inteiro.",
      conhecimento: "O Microsoft Edge também é feito sobre o Chromium.",
    },
    {
      topico: "Privacidade",
      subassunto: "Modo visitante",
      dificuldade: 5,
      raciocinio: "Para quem não é o dono do perfil, o certo é o visitante; a anônima ainda mostra os dados do perfil.",
      enunciado:
        "Um agente empresta o notebook a um colega. Não quer que ele veja, no Chrome, seus favoritos, senhas e histórico, nem que a navegação do colega fique gravada. A opção mais adequada é",
      alternativas: [
        "abrir uma janela anônima no perfil do dono, que esconde os favoritos já salvos.",
        "ligar a Navegação segura no nível de proteção reforçada antes de emprestar.",
        "desligar a sincronização da conta Google do dono enquanto o colega navega.",
        "abrir uma janela no modo visitante, que não usa os dados de nenhum perfil.",
        "enviar o pedido \"Não rastrear\" para todos os sites que o colega for abrir.",
      ],
      correta: 3,
      explicacao:
        "O modo visitante abre o Chrome sem os dados de nenhum perfil e apaga a navegação ao fechar. Serve justamente para quem usa o computador de outra pessoa.",
      explicacaoErradas:
        "A janela anônima continua no perfil do dono: os favoritos aparecem. A Navegação segura protege contra golpes, não esconde dados. Desligar a sincronização não esconde o que já está no computador. \"Não rastrear\" é só um pedido aos sites.",
      pegadinha: "Anônima não grava, mas mostra o perfil; visitante não mostra o perfil.",
      conhecimento: "O modo visitante fica no menu do perfil, no alto à direita.",
    },
    {
      topico: "Configurações",
      subassunto: "Página inicial e de inicialização",
      dificuldade: 4,
      raciocinio: "Casinha = página inicial; abrir o navegador = inicialização; são opções separadas.",
      enunciado:
        "No Google Chrome, a página que abre ao clicar no botão da casinha e a página que abre quando o navegador é iniciado",
      alternativas: [
        "são opções separadas nas configurações e podem ser páginas diferentes.",
        "são sempre a mesma página, escolhida num único campo das configurações.",
        "só podem ser a página de pesquisa do Google, sem outro endereço possível.",
        "dependem da janela anônima, que é a única capaz de escolher essas páginas.",
        "são definidas pela sincronização e não podem ser trocadas no computador.",
      ],
      correta: 0,
      explicacao:
        "A página inicial é a do botão da casinha (que pode até ficar escondido). A de inicialização é a que abre com o Chrome: nova guia, páginas da última sessão ou páginas escolhidas. Só são iguais se o usuário quiser.",
      explicacaoErradas:
        "Não há campo único para as duas. Qualquer endereço pode ser escolhido. A janela anônima não define essas páginas. A sincronização leva as configurações para outros aparelhos, mas elas podem ser trocadas no próprio computador.",
      pegadinha: "\"Inicial\" e \"inicialização\" parecem a mesma coisa, mas são opções diferentes.",
      conhecimento: "Em Ao iniciar, dá para mandar o Chrome continuar de onde parou.",
    },
    {
      topico: "Configurações",
      subassunto: "Restaurar configurações",
      dificuldade: 5,
      raciocinio: "Restaurar desativa extensões e apaga cookies, mas preserva favoritos, histórico e senhas.",
      enunciado: "Ao usar a opção de restaurar as configurações originais do Google Chrome,",
      alternativas: [
        "o Chrome é desinstalado e baixado de novo, com todos os dados do usuário apagados.",
        "os favoritos e as senhas salvas são apagados, mas as extensões continuam ativas.",
        "só a página inicial volta ao padrão; a pesquisa padrão e as extensões ficam como estavam.",
        "a conta Google é desconectada e a sincronização apaga os dados guardados na nuvem.",
        "as extensões são desativadas e os cookies apagados, mas os favoritos e senhas ficam.",
      ],
      correta: 4,
      explicacao:
        "A restauração volta ao padrão a inicialização, a nova guia, a pesquisa e as guias fixadas, desativa as extensões e apaga dados temporários, como cookies. Favoritos, histórico e senhas salvas são mantidos.",
      explicacaoErradas:
        "Nada é desinstalado. Favoritos e senhas não são apagados, e as extensões são desativadas. A pesquisa padrão também volta ao original. A conta Google não perde os dados na nuvem.",
      pegadinha: "Restaurar é \"arrumar a casa\", não \"jogar tudo fora\".",
      conhecimento: "Restaurar costuma resolver mudanças feitas por extensões indesejadas na página inicial e na busca.",
    },
    {
      topico: "Atalhos",
      subassunto: "Teclas do Chrome",
      dificuldade: 5,
      raciocinio: "Ctrl+9 = última guia; Shift+Esc = gerenciador; Ctrl+Shift+Delete = limpar; Ctrl+U = código-fonte.",
      enunciado:
        "Associe cada atalho do Google Chrome à sua função.\n(1) Shift+Esc\n(2) Ctrl+U\n(3) Ctrl+9\n(4) Ctrl+Shift+Delete\n( ) Vai para a última guia da janela.\n( ) Abre o gerenciador de tarefas do Chrome.\n( ) Abre a tela de limpar os dados de navegação.\n( ) Mostra o código-fonte da página.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 3, 4, 2.", "3, 2, 4, 1.", "3, 1, 4, 2.", "4, 1, 3, 2.", "3, 1, 2, 4."],
      correta: 2,
      explicacao:
        "Última guia: Ctrl+9 (3). Gerenciador de tarefas do Chrome: Shift+Esc (1). Limpar dados: Ctrl+Shift+Delete (4). Código-fonte: Ctrl+U (2).",
      explicacaoErradas:
        "As outras sequências trocam o gerenciador de tarefas com o código-fonte, a última guia com o gerenciador ou a limpeza de dados com o código-fonte.",
      pegadinha: "Ctrl+1 a Ctrl+8 vão para a guia daquela posição; o 9 sempre vai para a última.",
      conhecimento: "O gerenciador de tarefas do Chrome mostra quanta memória cada guia e extensão usa.",
    },
    {
      topico: "Recursos",
      subassunto: "Extensões, cookies e sincronização",
      dificuldade: 5,
      raciocinio: "\"Não rastrear\" é só um pedido; o site pode ignorar.",
      enunciado:
        "Julgue as afirmativas sobre o Google Chrome como verdadeiras (V) ou falsas (F).\n( ) Extensões são pequenos programas que acrescentam funções ao navegador e podem ser instaladas pela Chrome Web Store.\n( ) Ao ligar o pedido \"Não rastrear\", todos os sites ficam obrigados a parar de coletar dados do usuário.\n( ) Na janela anônima, o Chrome bloqueia por padrão os cookies de terceiros.\n( ) Com a sincronização ligada, favoritos, senhas e histórico podem aparecer em outros aparelhos da mesma conta Google.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, V, V.", "V, F, F, V.", "F, F, V, V.", "V, F, V, F.", "V, F, V, V."],
      correta: 4,
      explicacao:
        "Extensões vêm da Chrome Web Store (V). A anônima bloqueia cookies de terceiros por padrão (V). A sincronização leva os dados aos outros aparelhos (V). A segunda é falsa: \"Não rastrear\" é só um pedido, e cada site decide se atende.",
      explicacaoErradas:
        "Marcar V na segunda trata o pedido como obrigação. Marcar F na terceira ignora o bloqueio padrão da anônima. Marcar F na primeira ou na última nega recursos que o Chrome tem.",
      pegadinha: "Pedir não é bloquear: \"Não rastrear\" depende da boa vontade do site.",
      conhecimento: "As extensões instaladas ficam em chrome://extensions.",
    },
    {
      topico: "Privacidade",
      subassunto: "Janela anônima",
      dificuldade: 5,
      raciocinio: "O que se salva de propósito (favorito, download) fica; o que é rastro da sessão some.",
      enunciado: "Um usuário abre uma janela anônima no Chrome, salva um site nos favoritos e depois fecha a janela. Nesse caso,",
      alternativas: [
        "o favorito é apagado junto com o histórico, porque foi criado durante a sessão anônima.",
        "o empregador deixa de ver, pela rede da empresa, os sites visitados naquela sessão.",
        "o favorito continua salvo no perfil, mesmo depois que a janela anônima é fechada.",
        "os cookies não funcionaram durante a sessão, e por isso não foi possível fazer login.",
        "o histórico fica guardado e pode ser aberto depois, com a senha da conta Google do perfil.",
      ],
      correta: 2,
      explicacao:
        "Na janela anônima o Chrome não guarda histórico, cookies nem dados de formulário depois que ela é fechada. Mas o que o usuário salva de propósito, como favoritos e downloads, continua.",
      explicacaoErradas:
        "Favoritos não são apagados. A rede da empresa e o provedor continuam vendo o tráfego. Os cookies funcionam durante a sessão e só são apagados ao fechar. O histórico da anônima não é guardado nem com senha.",
      pegadinha: "Anônima apaga os rastros, não o que o usuário salvou de propósito.",
      conhecimento: "No Chrome, a janela anônima abre com Ctrl+Shift+N.",
    },
    {
      topico: "Segurança",
      subassunto: "Navegação segura",
      dificuldade: 4,
      raciocinio: "Mais rápida e proativa, com mais dados enviados ao Google = proteção reforçada.",
      enunciado:
        "Na Navegação segura do Chrome, a opção que oferece proteção mais rápida e proativa contra sites, downloads e extensões perigosos, compartilhando mais dados de navegação com o Google, é a",
      alternativas: [
        "Proteção reforçada.",
        "Proteção padrão.",
        "Sem proteção.",
        "Proteção contra rastreamento.",
        "Navegação anônima.",
      ],
      correta: 0,
      explicacao:
        "A proteção reforçada verifica as ameaças com mais rapidez e antecedência, mas, para isso, envia mais dados de navegação ao Google.",
      explicacaoErradas:
        "A proteção padrão é a que vem ligada e protege menos que a reforçada. Sem proteção não protege. Proteção contra rastreamento e janela anônima tratam de privacidade, não de sites perigosos.",
      pegadinha: "Mais proteção, nesse caso, tem um preço: mais dados enviados ao Google.",
      conhecimento: "A Navegação segura fica em Privacidade e segurança › Segurança.",
    },
    {
      topico: "Conceitos",
      subassunto: "Licença, guias, perfis e pesquisa",
      dificuldade: 4,
      raciocinio: "O Chrome aceita vários perfis; só a afirmativa III erra.",
      enunciado:
        "Sobre o Google Chrome, analise as afirmativas.\nI – É gratuito, mas não é software livre.\nII – Uma guia pode ser fixada na barra, ficando pequena e à esquerda.\nIII – Só é possível ter um perfil por computador.\nIV – É possível escolher outro mecanismo de pesquisa padrão em vez do Google.\nEstão corretas as afirmativas",
      alternativas: ["I e II, apenas.", "I, II e III, apenas.", "II, III e IV, apenas.", "I, II e IV, apenas.", "I, II, III e IV."],
      correta: 3,
      explicacao:
        "O Chrome é freeware (I). Guias fixadas ficam pequenas, à esquerda (II). A pesquisa padrão pode ser trocada nas configurações (IV).",
      explicacaoErradas:
        "A III está errada: o Chrome aceita vários perfis no mesmo computador, cada um com seus dados. Quem marca só I e II esquece a troca de mecanismo de pesquisa.",
      pegadinha: "Vários perfis no mesmo Chrome é justamente o jeito de separar os dados de cada pessoa.",
      conhecimento: "Clicar com o botão direito na guia mostra a opção Fixar.",
    },
    {
      topico: "Atalhos",
      subassunto: "Barra de endereço",
      dificuldade: 4,
      raciocinio: "Ctrl+L, Alt+D e F6 levam à barra de endereço.",
      enunciado:
        "Um usuário quer ir direto para a barra de endereço do Chrome, com o endereço atual já selecionado, para digitar outro. Ele pode usar",
      alternativas: [
        "Ctrl+D, Alt+F4 ou F5.",
        "Ctrl+L, Alt+D ou F6.",
        "Ctrl+H, Alt+Home ou F1.",
        "Ctrl+Shift+T, Alt+Tab ou F12.",
        "Ctrl+N, Alt+Esc ou F11.",
      ],
      correta: 1,
      explicacao: "Ctrl+L, Alt+D e F6 levam o cursor à barra de endereço e selecionam o endereço atual.",
      explicacaoErradas:
        "Ctrl+D favorita, Alt+F4 fecha a janela e F5 recarrega. Ctrl+H abre o histórico, Alt+Home vai à página inicial e F1 abre a ajuda. Ctrl+Shift+T reabre guia, Alt+Tab troca de programa e F12 abre as ferramentas do desenvolvedor. Ctrl+N abre janela e F11 liga a tela cheia.",
      pegadinha: "F5 recarrega a página; F6 vai para a barra de endereço.",
      conhecimento: "Esses três atalhos também funcionam no Edge e no Firefox.",
    },
  ],
};
