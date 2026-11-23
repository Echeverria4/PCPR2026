import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a03",
  resumo: {
    ideia:
      "O Linux é um sistema livre, parecido com o Unix, que chega ao usuário em forma de distribuições (Ubuntu, Debian, Fedora...). A prova cobra as características dele, os comandos do terminal, os redirecionamentos, as permissões (rwx e os números do chmod) e as pastas principais.",
    itens: [
      {
        termo: "Origem e licença",
        faz: "O kernel (núcleo) foi criado por Linus Torvalds em 1991, seguindo o padrão do Unix (POSIX). É software livre, sob a licença GPL.",
      },
      {
        termo: "Distribuição",
        faz: "É o kernel Linux somado a programas, interface gráfica e instalador. Exemplos: Ubuntu, Debian, Fedora, Mint, Red Hat. O Android também usa o kernel Linux.",
      },
      {
        termo: "Características",
        faz: "Multiusuário, multitarefa e case sensitive: Arquivo.txt e arquivo.txt são arquivos diferentes. Nome começado por ponto (.) fica oculto. A barra / não pode estar no nome e separa as pastas.",
      },
      {
        termo: "Root e prompt",
        faz: "Root é o superusuário, com poder total. No prompt, # costuma indicar o root, e $ um usuário comum. sudo roda um comando como root; su troca de usuário.",
      },
      {
        termo: "Comandos de pastas e arquivos",
        faz: "ls lista; cd muda de pasta; pwd mostra onde você está; mkdir cria pasta; rmdir apaga pasta vazia; rm apaga (rm -r apaga pasta com tudo dentro); cp copia; mv move ou renomeia; touch cria arquivo vazio; cat mostra o conteúdo.",
      },
      {
        termo: "Opções do ls",
        faz: "-l formato longo (permissões, dono, data); -a mostra também os ocultos; -R entra nas subpastas; -t ordena pela data de modificação.",
      },
      {
        termo: "Procurar e ler",
        faz: "grep procura um texto dentro de arquivos; find procura arquivos; head mostra as primeiras linhas e tail as últimas (10 por padrão).",
      },
      {
        termo: "Sistema",
        faz: "df: espaço das partições; du: espaço usado por pastas; free: memória RAM; ps: processos; top: processos em tempo real; kill: encerra um processo; man: manual do comando.",
      },
      {
        termo: "Redirecionamento",
        faz: "> grava a saída num arquivo, apagando o que havia; >> acrescenta no fim; < usa um arquivo como entrada; | (pipe) manda a saída de um comando para outro.",
        pista: "Um sinal de maior apaga; dois acrescentam.",
      },
      {
        termo: "Permissões",
        faz: "r ler, w gravar, x executar, para o dono (u), o grupo (g) e os outros (o). No ls -l, o 1º caractere é o tipo: d pasta, - arquivo, l link.",
      },
      {
        termo: "chmod com números",
        faz: "r = 4, w = 2, x = 1; soma-se cada trio. 7 = rwx, 6 = rw-, 5 = r-x, 4 = r--. Exemplo: chmod 755 dá rwxr-xr-x. chown muda o dono.",
      },
      {
        termo: "Pastas principais",
        faz: "/ raiz; /bin comandos; /boot inicialização; /dev dispositivos; /etc configurações; /home pastas dos usuários; /root pasta do root; /tmp temporários; /var/log registros (logs).",
      },
      {
        termo: "Atalhos do terminal",
        faz: "Tab completa nomes; seta para cima traz os comandos anteriores; Ctrl + C interrompe o processo; Ctrl + L limpa a tela. No Ubuntu, Ctrl + Alt + T abre o terminal.",
      },
    ],
  },
  questoes: [
    {
      topico: "Permissões",
      subassunto: "chmod com números",
      dificuldade: 5,
      raciocinio: "Separar 7, 5 e 4 em somas de 4, 2 e 1.",
      enunciado:
        "No Linux, após o comando chmod 754 relatorio.sh, o comando ls -l mostra, no início da linha do arquivo, o seguinte conjunto de tipo e permissões:",
      alternativas: ["-rwxrw-r--", "-rwxr-xr-x", "-rwxr-xr--", "-rw-r-xr--", "-r-xrwxr--"],
      correta: 2,
      explicacao:
        "7 = 4 + 2 + 1 = rwx para o dono. 5 = 4 + 1 = r-x para o grupo. 4 = r-- para os outros. O traço inicial indica arquivo comum.",
      explicacaoErradas:
        "rw- vale 6, não 5. r-x no fim daria 755. rw- no começo daria 6 para o dono. r-x para o dono e rwx para o grupo inverte os dois primeiros números.",
      pegadinha: "A ordem dos números é sempre dono, grupo e outros.",
      conhecimento: "chmod 644 dá rw-r--r--, comum para arquivos de texto.",
    },
    {
      topico: "Terminal",
      subassunto: "Redirecionamento",
      dificuldade: 5,
      raciocinio: "> apaga e grava; >> acrescenta. Vale o último comando.",
      enunciado:
        "Num terminal Linux, numa pasta em que o arquivo lista.txt ainda não existe, são executados, em sequência:\nls > lista.txt\nls >> lista.txt\nls > lista.txt\nAo final, o arquivo lista.txt",
      alternativas: [
        "tem a listagem três vezes, uma depois da outra, sem nada apagado.",
        "tem a listagem duas vezes, pois só o >> acrescenta conteúdo novo.",
        "fica vazio, porque o último > apaga o conteúdo e não grava nada.",
        "não existe, porque > só redireciona para arquivos que já existem.",
        "tem a listagem uma vez só, pois o último > sobrescreveu tudo.",
      ],
      correta: 4,
      explicacao:
        "O primeiro > cria o arquivo; o >> acrescenta uma segunda listagem; o último > apaga tudo e grava a listagem de novo. Sobra uma listagem.",
      explicacaoErradas:
        "Três ou duas listagens ignoram que o último > começa o arquivo do zero. O > apaga, mas grava a nova saída, então o arquivo não fica vazio. O > cria o arquivo quando ele não existe.",
      pegadinha: "O que vale é o último comando: um > apaga tudo o que veio antes.",
      conhecimento: "Para juntar a saída de um comando à entrada de outro, usa-se o pipe (|).",
    },
    {
      topico: "Estrutura de pastas",
      subassunto: "Pastas do sistema",
      dificuldade: 4,
      raciocinio: "etc é configuração, dev é dispositivo, var/log é registro, home é dos usuários.",
      enunciado:
        "Associe cada pasta do Linux ao seu conteúdo.\n(1) /etc\n(2) /home\n(3) /var/log\n(4) /dev\n( ) Arquivos que representam os dispositivos, como discos e terminais.\n( ) Arquivos de configuração do sistema e dos serviços.\n( ) Registros (logs) do sistema e dos serviços.\n( ) Pastas pessoais dos usuários comuns.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 4, 3, 2.", "4, 1, 3, 2.", "4, 3, 1, 2.", "2, 1, 3, 4.", "4, 1, 2, 3."],
      correta: 1,
      explicacao:
        "Dispositivos ficam em /dev (4). Configurações, em /etc (1). Registros, em /var/log (3). Pastas dos usuários comuns, em /home (2).",
      explicacaoErradas:
        "As outras sequências trocam /etc com /dev, /etc com /var/log ou /home com /var/log.",
      pegadinha: "A pasta pessoal do root não fica em /home: ela é a /root.",
      conhecimento: "A raiz de tudo é a barra (/); não há letras de unidade como C: no Linux.",
    },
    {
      topico: "Comandos",
      subassunto: "Pastas, arquivos e sistema",
      dificuldade: 4,
      raciocinio: "Conferir o que cada comando faz; rmdir só apaga pasta vazia.",
      enunciado:
        "Sobre comandos do Linux, analise as afirmativas.\nI – pwd mostra o caminho da pasta em que o usuário está.\nII – rmdir apaga uma pasta com arquivos dentro, sem pedir confirmação.\nIII – mv serve tanto para mover quanto para renomear um arquivo.\nIV – df mostra o espaço das partições, e free mostra a memória RAM.\nEstão corretas as afirmativas",
      alternativas: ["I, III e IV, apenas.", "I e III, apenas.", "II, III e IV, apenas.", "I, II e IV, apenas.", "I, II, III e IV."],
      correta: 0,
      explicacao:
        "pwd mostra a pasta atual (I). mv move e também renomeia (III). df trata das partições e free da RAM (IV).",
      explicacaoErradas:
        "A afirmativa II está errada: rmdir só apaga pasta vazia. Para apagar a pasta com o conteúdo, usa-se rm -r. A sequência I e III esquece que a IV também está certa.",
      pegadinha: "rmdir e rm -r parecem iguais, mas só o rm -r apaga o que está dentro.",
      conhecimento: "du mostra quanto cada pasta ocupa; df mostra as partições inteiras.",
    },
    {
      topico: "Características",
      subassunto: "Nomes, usuários e origem",
      dificuldade: 4,
      raciocinio: "Lembrar case sensitive, ponto para oculto, # para root e quem criou o kernel.",
      enunciado: "Sobre o Linux, assinale a alternativa correta.",
      alternativas: [
        "Não diferencia maiúsculas de minúsculas: Relatorio.txt e relatorio.txt são o mesmo.",
        "Um arquivo fica oculto quando seu nome termina com o caractere til (~).",
        "O kernel foi criado por Richard Stallman, o fundador da Free Software Foundation.",
        "No terminal, o símbolo # no fim do prompt costuma indicar que o usuário é o root.",
        "Por ser livre, o Linux não pode ser usado nos servidores de empresas privadas.",
      ],
      correta: 3,
      explicacao: "No prompt, # costuma indicar o superusuário (root), e $ indica um usuário comum.",
      explicacaoErradas:
        "O Linux é case sensitive: os dois nomes são arquivos diferentes. Fica oculto o arquivo cujo nome começa com ponto. O kernel é de Linus Torvalds; Stallman criou o projeto GNU. Software livre pode ser usado para qualquer fim, inclusive em empresas.",
      pegadinha: "Stallman é ligado ao software livre e ao GNU, mas o kernel Linux é de Linus Torvalds.",
      conhecimento: "Muitos dizem GNU/Linux porque as ferramentas básicas do sistema vêm do projeto GNU.",
    },
    {
      topico: "Comandos",
      subassunto: "grep, tail e pipe",
      dificuldade: 5,
      raciocinio: "Filtrar primeiro (grep) e só depois pegar as últimas (tail).",
      enunciado:
        "Um administrador quer ver as 5 últimas linhas do arquivo /var/log/syslog que contêm a palavra erro. O comando que faz exatamente isso é",
      alternativas: [
        "grep erro /var/log/syslog | tail -n 5",
        "tail -n 5 /var/log/syslog | grep erro",
        "grep erro /var/log/syslog | head -n 5",
        "grep -v erro /var/log/syslog | tail -n 5",
        "grep erro /var/log/syslog > tail -n 5",
      ],
      correta: 0,
      explicacao:
        "O grep separa as linhas com a palavra erro, e o pipe manda esse resultado para o tail, que mostra as 5 últimas delas.",
      explicacaoErradas:
        "Com tail primeiro, pegam-se as 5 últimas linhas do arquivo e só então se filtra: podem sobrar menos de 5. head mostra as 5 primeiras. grep -v inverte a busca (linhas sem a palavra). O > grava num arquivo chamado tail, em vez de passar para o comando.",
      pegadinha: "A ordem dos comandos no pipe muda o resultado.",
      conhecimento: "tail -f acompanha o arquivo ao vivo, mostrando as linhas novas que chegam.",
    },
    {
      topico: "Usuários",
      subassunto: "root, sudo, su e chown",
      dificuldade: 4,
      raciocinio: "sudo empresta o poder do root para um comando; chown muda o dono, não a permissão.",
      enunciado: "Sobre usuários e privilégios no Linux, assinale a alternativa correta.",
      alternativas: [
        "sudo troca de vez a senha do root pela senha do usuário que digitou aquele comando.",
        "chown muda as permissões de leitura, gravação e execução de um arquivo.",
        "sudo roda um comando com poderes de superusuário, se o usuário tiver autorização.",
        "su apaga o usuário informado e também a pasta pessoal dele em /home.",
        "A pasta pessoal do root fica em /home/root, como a de qualquer outro usuário.",
      ],
      correta: 2,
      explicacao:
        "O sudo executa só aquele comando com poderes de root, desde que o usuário esteja autorizado. Em geral, ele pede a senha do próprio usuário.",
      explicacaoErradas:
        "sudo não troca senha nenhuma. chown muda o dono; quem muda as permissões é o chmod. su troca de usuário; quem apaga é o userdel. A pasta do root é /root.",
      pegadinha: "chown (dono) e chmod (permissão) são parecidos no nome e caem juntos.",
      conhecimento: "passwd troca a senha; useradd cria usuário.",
    },
    {
      topico: "Terminal",
      subassunto: "Atalhos",
      dificuldade: 4,
      raciocinio: "Conferir cada atalho; Ctrl + L só limpa a tela.",
      enunciado:
        "Sobre atalhos no terminal do Linux, julgue as afirmativas como verdadeiras (V) ou falsas (F).\n( ) Tab completa o nome de comandos e de arquivos.\n( ) Ctrl + C interrompe o processo que está rodando no terminal.\n( ) A seta para cima mostra os comandos digitados antes.\n( ) Ctrl + L apaga todos os arquivos da pasta atual.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, F, F.", "V, F, V, F.", "F, V, V, F.", "V, V, V, F.", "V, V, V, V."],
      correta: 3,
      explicacao:
        "Tab completa (V), Ctrl + C interrompe (V) e a seta para cima percorre o histórico (V). Ctrl + L só limpa a tela, sem apagar nada (F).",
      explicacaoErradas:
        "As sequências com F nas três primeiras negam atalhos que funcionam. A que marca V na última confunde limpar a tela com apagar arquivos.",
      pegadinha: "No terminal, Ctrl + C não copia: interrompe o processo.",
      conhecimento: "O comando history lista os comandos digitados antes.",
    },
    {
      topico: "Distribuições",
      subassunto: "Kernel e distribuição",
      dificuldade: 4,
      raciocinio: "Distribuição = kernel + programas + interface + instalador.",
      enunciado: "Sobre o Linux e suas distribuições, assinale a alternativa correta.",
      alternativas: [
        "Ubuntu e Debian usam núcleos próprios, sem nenhuma relação com o kernel Linux.",
        "Distribuição é o nome dado a cada versão nova do kernel lançada pelo autor.",
        "O Linux é um sistema completo e fechado, criado do zero por uma única empresa.",
        "Toda distribuição Linux é paga, já que sempre vem com suporte técnico incluído.",
        "Distribuição é o kernel Linux junto com programas, interface e instalador.",
      ],
      correta: 4,
      explicacao:
        "Cada distribuição pega o kernel Linux e junta programas, interface gráfica e instalador. Por isso existem tantas: Ubuntu, Debian, Fedora, Mint.",
      explicacaoErradas:
        "Ubuntu e Debian usam o kernel Linux (o Ubuntu é baseado no Debian). Versão do kernel não é distribuição. O Linux é livre e feito por uma comunidade. Há distribuições gratuitas, e o suporte pago é opcional em algumas.",
      pegadinha: "Kernel é só o núcleo; o sistema que o usuário instala é a distribuição.",
      conhecimento: "O Android também usa o kernel Linux, com outra camada de programas por cima.",
    },
    {
      topico: "Comandos",
      subassunto: "Opções do ls",
      dificuldade: 5,
      raciocinio: "a de all (todos), l de long (longo), R de recursivo, t de time (tempo).",
      enunciado:
        "Associe cada opção do comando ls ao seu efeito.\n(1) ls -a\n(2) ls -l\n(3) ls -R\n(4) ls -t\n( ) Mostra também os arquivos ocultos.\n( ) Lista também o conteúdo das subpastas.\n( ) Ordena pela data de modificação, do mais recente para o mais antigo.\n( ) Lista em formato longo, com permissões, dono, tamanho e data.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 3, 2, 4.", "1, 3, 4, 2.", "3, 1, 4, 2.", "1, 2, 4, 3.", "2, 3, 4, 1."],
      correta: 1,
      explicacao:
        "-a mostra os ocultos (1). -R entra nas subpastas (3). -t ordena pela data (4). -l é o formato longo (2).",
      explicacaoErradas:
        "As outras sequências trocam -R com -a, -l com -t ou -l com -R.",
      pegadinha: "-R maiúsculo é recursivo; no Linux, maiúscula e minúscula fazem diferença também nas opções.",
      conhecimento: "As opções podem ser juntadas: ls -la lista tudo, inclusive os ocultos, em formato longo.",
    },
  ],
};
