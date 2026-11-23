import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a02",
  resumo: {
    ideia:
      "O Windows 11 é o sistema que faz a ponte entre o usuário e a máquina. A prova cobra as edições, os atalhos de teclado, o Explorador de Arquivos (mover, copiar, Lixeira), o OneDrive e as ferramentas que cuidam do disco. Quase tudo cai como \"qual atalho faz isso\" ou \"o que acontece se\".",
    itens: [
      {
        termo: "Características",
        faz: "Lançado em 2021 pela Microsoft. É software básico (faz o computador funcionar), proprietário (código fechado) e pago (licença).",
      },
      {
        termo: "Edições",
        faz: "Home: uso doméstico. Pro: soma recursos de empresa, como BitLocker (criptografia do disco), receber Área de Trabalho Remota e entrar no domínio da rede. Education e Pro for Workstations: escolas e cargas de trabalho pesadas.",
      },
      {
        termo: "CMD x PowerShell",
        faz: "CMD (cmd.exe) é o prompt tradicional, herdeiro do MS-DOS. PowerShell é mais avançado: usa cmdlets no formato verbo-substantivo (Get-Process), trabalha com objetos, roda scripts .ps1 e administra outros computadores pela rede.",
      },
      {
        termo: "Barra de tarefas",
        faz: "Vem centralizada por padrão. Windows + N abre as notificações; Windows + A, as configurações rápidas; Windows + W, os widgets; Windows + S, a pesquisa.",
      },
      {
        termo: "Janelas e áreas de trabalho",
        faz: "Alt + Tab alterna entre janelas. Windows + Z mostra os layouts de ajuste (Snap). Windows + Tab abre a Visão de Tarefas. Windows + Ctrl + D cria área de trabalho virtual; Windows + Ctrl + F4 fecha a atual.",
        pista: "Windows + D mostra a área de trabalho; Windows + vírgula só dá uma espiada enquanto as teclas estão apertadas.",
      },
      {
        termo: "Explorador de Arquivos",
        faz: "Windows + E abre. Ctrl + Shift + N cria pasta; F2 renomeia; Alt + Enter abre as Propriedades. Bibliotecas reúnem arquivos de várias pastas sem mudá-los de lugar. Atalho tem uma setinha no canto do ícone.",
      },
      {
        termo: "Arrastar com o mouse",
        faz: "Na mesma unidade, arrastar move; para outra unidade, arrastar copia. Ctrl + arrastar copia; Shift + arrastar move; Alt + arrastar cria atalho.",
      },
      {
        termo: "Lixeira",
        faz: "Guarda o que foi excluído das unidades internas. Pen drive e pasta da rede não mandam para a Lixeira: excluem de vez. Shift + Delete exclui sem passar pela Lixeira. Para abrir um arquivo da Lixeira, é preciso restaurá-lo antes.",
      },
      {
        termo: "OneDrive",
        faz: "Armazenamento na nuvem da Microsoft. Nuvem azul: arquivo só online, baixado ao abrir. Visto verde: disponível no computador. Setas circulares: sincronizando. X vermelho: erro.",
      },
      {
        termo: "Área de transferência",
        faz: "Windows + V abre o histórico, que precisa ser ativado. Ao reiniciar, só ficam os itens fixados. Pode sincronizar entre aparelhos com a conta Microsoft.",
      },
      {
        termo: "Ferramentas do disco",
        faz: "Limpeza de Disco: o usuário roda para apagar arquivos inúteis. Sensor de Armazenamento: faz isso sozinho, de tempos em tempos. Otimizar unidades: desfragmenta o HD. ReadyBoost: usa pen drive como cache.",
      },
      {
        termo: "Restauração do Sistema",
        faz: "Volta o sistema a um ponto anterior: tira programas, drivers e atualizações instalados depois dele, mas não mexe nos documentos e fotos.",
        pista: "Não é backup: não recupera arquivo pessoal apagado.",
      },
      {
        termo: "Registro e metadados",
        faz: "O Editor do Registro (regedit) é o banco de dados hierárquico das configurações do Windows. Metadados são dados sobre o arquivo (autor, data, tamanho), vistos na guia Detalhes das Propriedades.",
      },
      {
        termo: "Outros atalhos",
        faz: "Windows + L bloqueia; Windows + I abre as Configurações; Windows + R abre o Executar; Ctrl + Shift + Esc abre o Gerenciador de Tarefas; Windows + Shift + S faz captura de tela.",
      },
    ],
  },
  questoes: [
    {
      topico: "Atalhos de teclado",
      subassunto: "Teclas com Windows",
      dificuldade: 4,
      raciocinio: "Ligar cada letra à função: V de área de transferência, L de bloquear, Tab de tarefas, E de Explorador.",
      enunciado:
        "No Windows 11, associe cada atalho à sua função.\n(1) Windows + E\n(2) Windows + L\n(3) Windows + V\n(4) Windows + Tab\n( ) Abre o histórico da área de transferência.\n( ) Bloqueia a sessão do usuário.\n( ) Abre a Visão de Tarefas, com as áreas de trabalho virtuais.\n( ) Abre o Explorador de Arquivos.\nA sequência correta, de cima para baixo, é",
      alternativas: ["2, 3, 4, 1.", "3, 2, 1, 4.", "4, 2, 3, 1.", "3, 4, 2, 1.", "3, 2, 4, 1."],
      correta: 4,
      explicacao:
        "Windows + V abre o histórico da área de transferência (3). Windows + L bloqueia (2). Windows + Tab abre a Visão de Tarefas (4). Windows + E abre o Explorador (1).",
      explicacaoErradas:
        "As outras sequências trocam V com L, ou Tab com E. Alt + Tab só alterna janelas; quem abre a Visão de Tarefas é Windows + Tab.",
      pegadinha: "Ctrl + V cola o último item; Windows + V mostra a lista dos itens copiados.",
      conhecimento: "Windows + D mostra a área de trabalho; Windows + I abre as Configurações.",
    },
    {
      topico: "Explorador de Arquivos",
      subassunto: "Lixeira",
      dificuldade: 5,
      raciocinio: "Lembrar de onde a Lixeira recebe arquivos e o que se pode fazer dentro dela.",
      enunciado:
        "Sobre a Lixeira do Windows 11, analise as afirmativas.\nI – Um arquivo excluído de um pen drive com a tecla Delete não vai para a Lixeira.\nII – Shift + Delete exclui o arquivo sem passar pela Lixeira.\nIII – Dentro da Lixeira, é possível abrir e editar um arquivo antes de restaurá-lo.\nIV – Ao ser restaurado, o arquivo volta para a pasta de onde foi excluído.\nEstão corretas as afirmativas",
      alternativas: ["I, II e IV, apenas.", "I e III, apenas.", "II e IV, apenas.", "I, II e III, apenas.", "I, II, III e IV."],
      correta: 0,
      explicacao:
        "A Lixeira só recebe o que sai das unidades internas; do pen drive, a exclusão é definitiva (I). Shift + Delete pula a Lixeira (II). Restaurar devolve o arquivo à pasta original (IV).",
      explicacaoErradas:
        "A afirmativa III está errada: na Lixeira não se abre arquivo; é preciso restaurá-lo primeiro. A sequência II e IV esquece que o pen drive não usa a Lixeira.",
      pegadinha: "Excluir do pen drive parece igual a excluir do disco, mas não há volta pela Lixeira.",
      conhecimento: "Arquivo maior que o espaço reservado para a Lixeira também é excluído de vez, com aviso.",
    },
    {
      topico: "Explorador de Arquivos",
      subassunto: "Arrastar: mover ou copiar",
      dificuldade: 5,
      raciocinio: "Mesma unidade: arrastar move. Unidade diferente: arrastar copia.",
      enunciado:
        "No Explorador de Arquivos, sem segurar nenhuma tecla, um usuário arrasta o arquivo A da pasta C:\\Relatórios para a pasta C:\\Arquivo e arrasta o arquivo B da mesma pasta C:\\Relatórios para um pen drive (E:). O resultado é:",
      alternativas: [
        "A e B são movidos.",
        "A e B são copiados.",
        "A é copiado e B é movido.",
        "A é movido e B é copiado.",
        "A é movido e B vira atalho.",
      ],
      correta: 3,
      explicacao:
        "A foi para outra pasta da mesma unidade (C:), então foi movido. B foi para outra unidade (E:), então foi copiado e continua em C:\\Relatórios.",
      explicacaoErradas:
        "Tratar os dois do mesmo jeito ignora a regra da unidade. Inverter (A copiado, B movido) troca a regra. Atalho só se cria arrastando com Alt (ou com o botão direito, escolhendo a opção).",
      pegadinha: "O que decide não é a pasta, é a unidade (a letra do disco).",
      conhecimento: "Ctrl + arrastar sempre copia; Shift + arrastar sempre move.",
    },
    {
      topico: "OneDrive",
      subassunto: "Ícones de sincronização",
      dificuldade: 4,
      raciocinio: "Nuvem azul quer dizer que o arquivo está só na nuvem.",
      enunciado:
        "No Explorador de Arquivos, os arquivos do OneDrive exibem ícones de status. Sobre eles, assinale a alternativa correta.",
      alternativas: [
        "A nuvem azul indica que o arquivo existe só no computador, sem cópia na nuvem.",
        "A nuvem azul indica arquivo só online, que é baixado quando for aberto.",
        "O círculo verde preenchido indica que houve erro na sincronização do arquivo.",
        "As setas circulares indicam que o arquivo foi bloqueado com uma senha.",
        "O X vermelho indica que o arquivo ficará disponível offline para sempre.",
      ],
      correta: 1,
      explicacao:
        "A nuvem azul mostra arquivo guardado só na nuvem: ele não ocupa espaço no disco e é baixado quando o usuário o abre.",
      explicacaoErradas:
        "A nuvem azul é o contrário de \"só no computador\". O verde indica arquivo disponível no aparelho, não erro. As setas indicam sincronização em andamento. O X vermelho indica erro.",
      pegadinha: "Nuvem no ícone = o arquivo está na nuvem, não no disco.",
      conhecimento: "O círculo verde preenchido marca o arquivo para ficar sempre no computador.",
    },
    {
      topico: "Linha de comando",
      subassunto: "CMD e PowerShell",
      dificuldade: 4,
      raciocinio: "O PowerShell é o mais novo e avançado: cmdlets verbo-substantivo, objetos e acesso remoto.",
      enunciado: "Sobre o Prompt de Comando (CMD) e o Windows PowerShell, assinale a alternativa correta.",
      alternativas: [
        "O PowerShell é um programa à parte, que precisa ser comprado e instalado no Windows 11.",
        "O CMD trabalha com objetos, enquanto o PowerShell trabalha só com texto puro na saída.",
        "Os cmdlets do PowerShell seguem o formato verbo-substantivo, como em Get-Process.",
        "O CMD é o sucessor do PowerShell e executa os scripts gravados com a extensão .ps1.",
        "O PowerShell não permite administrar outros computadores pela rede, só o local.",
      ],
      correta: 2,
      explicacao:
        "Os comandos do PowerShell se chamam cmdlets e têm o formato verbo-substantivo, como Get-Process (obter processos) e Get-ChildItem (listar itens).",
      explicacaoErradas:
        "O PowerShell já vem no Windows 11. Quem trabalha com objetos é o PowerShell; o CMD trabalha com texto. O CMD é o mais antigo, herdeiro do MS-DOS, e os scripts .ps1 são do PowerShell. O PowerShell permite conexão remota.",
      pegadinha: "As bancas invertem os papéis: o avançado é o PowerShell, não o CMD.",
      conhecimento: "No CMD, dir lista arquivos, cd muda de pasta e cls limpa a tela.",
    },
    {
      topico: "Windows 11",
      subassunto: "Edições",
      dificuldade: 4,
      raciocinio: "BitLocker, receber Área de Trabalho Remota e entrar em domínio são recursos de empresa, ausentes no Home.",
      enunciado:
        "Uma empresa quer, nos notebooks, criptografar o disco com o BitLocker, permitir que eles recebam conexões de Área de Trabalho Remota e ingressá-los no domínio da rede. Entre as opções, a edição mais simples do Windows 11 que atende a tudo isso é",
      alternativas: [
        "Windows 11 Home.",
        "Windows 11 Pro.",
        "Windows 11 Home com conta Microsoft.",
        "Windows 11 Home em modo S.",
        "qualquer edição, pois todas têm os três recursos.",
      ],
      correta: 1,
      explicacao:
        "O Pro soma ao Home os recursos de empresa, entre eles o BitLocker, o servidor de Área de Trabalho Remota e o ingresso em domínio.",
      explicacaoErradas:
        "O Home, com ou sem conta Microsoft e no modo S, não recebe conexões de Área de Trabalho Remota nem entra em domínio. Por isso não são todas as edições que atendem.",
      pegadinha: "Conta Microsoft não transforma o Home em Pro; a diferença é a edição.",
      conhecimento: "O modo S só deixa instalar aplicativos da Microsoft Store.",
    },
    {
      topico: "Ferramentas do sistema",
      subassunto: "Restauração do Sistema",
      dificuldade: 5,
      raciocinio: "A restauração mexe no sistema (programas, drivers, atualizações), não nos arquivos pessoais.",
      enunciado:
        "Depois de instalar um driver, um computador passou a travar. O usuário usou a Restauração do Sistema e voltou a um ponto criado antes da instalação. Sobre o efeito dessa ação, é correto afirmar que",
      alternativas: [
        "os documentos e as fotos criados depois do ponto de restauração serão apagados.",
        "o Windows será reinstalado do zero, e todos os programas instalados serão perdidos.",
        "a ação também recupera os arquivos pessoais que já tinham sido apagados da Lixeira.",
        "o driver instalado depois do ponto será removido, e os arquivos pessoais ficam.",
        "a ação só pode ser feita se houver um backup completo do disco em mídia externa.",
      ],
      correta: 3,
      explicacao:
        "A Restauração do Sistema desfaz o que foi instalado depois do ponto (programas, drivers e atualizações), mas não mexe nos arquivos pessoais.",
      explicacaoErradas:
        "Documentos e fotos ficam onde estão. Não há reinstalação do Windows. Como não mexe em arquivos pessoais, também não recupera os que foram apagados. O ponto de restauração é criado pelo próprio Windows, sem exigir backup externo.",
      pegadinha: "Restauração do Sistema não é backup.",
      conhecimento: "O Windows costuma criar um ponto de restauração antes de instalar um driver ou uma atualização.",
    },
    {
      topico: "Ferramentas do sistema",
      subassunto: "Disco e Registro",
      dificuldade: 5,
      raciocinio: "Separar a ferramenta que o usuário roda da que roda sozinha e lembrar o que é o Registro.",
      enunciado:
        "Associe cada ferramenta do Windows 11 à sua descrição.\n(1) Limpeza de Disco\n(2) Otimizar unidades\n(3) Sensor de Armazenamento\n(4) Editor do Registro\n( ) Banco de dados hierárquico com as configurações do sistema, dos usuários e dos programas.\n( ) Junta os pedaços espalhados dos arquivos no HD para a leitura ficar mais rápida.\n( ) Libera espaço sozinho, de tempos em tempos, apagando temporários e esvaziando a Lixeira.\n( ) Ferramenta que o usuário executa para examinar e excluir os arquivos desnecessários de uma unidade.\nA sequência correta, de cima para baixo, é",
      alternativas: ["4, 2, 3, 1.", "4, 2, 1, 3.", "2, 4, 3, 1.", "4, 3, 2, 1.", "1, 2, 3, 4."],
      correta: 0,
      explicacao:
        "Banco de dados das configurações: Editor do Registro (4). Juntar pedaços dos arquivos: Otimizar unidades, o desfragmentador (2). Limpar sozinho: Sensor de Armazenamento (3). Limpar quando o usuário manda: Limpeza de Disco (1).",
      explicacaoErradas:
        "As outras sequências trocam a Limpeza de Disco com o Sensor de Armazenamento (o manual com o automático) ou o desfragmentador com o Registro.",
      pegadinha: "As duas ferramentas apagam arquivos inúteis; o Sensor é o que trabalha sozinho.",
      conhecimento: "Em SSD, o Otimizar unidades não desfragmenta como no HD; ele faz outra manutenção (TRIM).",
    },
    {
      topico: "Área de transferência",
      subassunto: "Histórico",
      dificuldade: 4,
      raciocinio: "Windows + V, precisa ativar, e só os itens fixados sobrevivem à reinicialização.",
      enunciado: "Sobre o histórico da área de transferência do Windows 11, assinale a alternativa correta.",
      alternativas: [
        "Já vem ativo e abre quando se segura Ctrl + V por dois segundos seguidos.",
        "Guarda itens sem limite, mesmo depois de reiniciar o computador.",
        "Abre com Windows + V e, ao reiniciar, mantém só os itens fixados.",
        "Só guarda textos; as imagens copiadas ficam fora do histórico.",
        "Sincroniza com outros aparelhos sem exigir conta de usuário.",
      ],
      correta: 2,
      explicacao:
        "O histórico abre com Windows + V. Ao reiniciar, os itens comuns são apagados e ficam só os que o usuário fixou.",
      explicacaoErradas:
        "O histórico precisa ser ativado e não abre com Ctrl + V. Há limite de itens e a lista é limpa ao reiniciar. Imagens também entram. A sincronização exige a conta Microsoft (ou a do trabalho).",
      pegadinha: "Fixar é o jeito de um item sobreviver à reinicialização.",
      conhecimento: "Para ativar: Configurações › Sistema › Área de transferência.",
    },
    {
      topico: "Atalhos de teclado",
      subassunto: "Janelas e áreas de trabalho virtuais",
      dificuldade: 5,
      raciocinio: "Conferir cada atalho; Alt + Tab é de janelas, não de áreas de trabalho.",
      enunciado:
        "Sobre atalhos do Windows 11, julgue as afirmativas como verdadeiras (V) ou falsas (F).\n( ) Windows + Ctrl + D cria uma nova área de trabalho virtual.\n( ) Windows + Ctrl + F4 fecha a área de trabalho virtual em uso.\n( ) Windows + Z mostra os layouts de ajuste (Snap) para a janela ativa.\n( ) Alt + Tab alterna só entre as áreas de trabalho virtuais, e não entre as janelas.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, F, F.", "V, F, V, F.", "F, V, V, F.", "V, V, V, V.", "V, V, V, F."],
      correta: 4,
      explicacao:
        "Windows + Ctrl + D cria (V), Windows + Ctrl + F4 fecha (V) e Windows + Z mostra os layouts de ajuste (V). A última é falsa: Alt + Tab alterna entre as janelas abertas.",
      explicacaoErradas:
        "As sequências com F nas três primeiras negam atalhos que existem. A que marca V na última confunde Alt + Tab com Windows + Ctrl + seta, que troca de área de trabalho.",
      pegadinha: "Para trocar de área de trabalho virtual, o atalho é Windows + Ctrl + seta para a direita ou para a esquerda.",
      conhecimento: "Os layouts de ajuste também aparecem ao parar o mouse sobre o botão de maximizar.",
    },
  ],
};
