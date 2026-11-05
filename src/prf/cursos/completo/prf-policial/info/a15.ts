import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-15",
  resumo: {
    ideia:
      "O Windows 11 mantém a base do Windows 10 e exige hardware mais novo. Cai: requisitos, Iniciar, atalhos e ferramentas de manutenção.",
    itens: [
      {
        termo: "Requisitos",
        faz: "Processador de 64 bits compatível, 4 GB de RAM, 64 GB de armazenamento, TPM 2.0 e Inicialização Segura.",
      },
      {
        termo: "Só 64 bits",
        faz: "Não há versão de 32 bits do Windows 11.",
      },
      {
        termo: "Menu Iniciar",
        faz: "Abre com a tecla Windows ou com Ctrl+Esc. É ajustado em Configurações, Personalização, Iniciar.",
      },
      {
        termo: "Visão de Tarefas",
        faz: "Mostra as janelas abertas e cria áreas de trabalho virtuais.",
      },
      {
        termo: "Layouts de Ajuste",
        faz: "Organizam as janelas em partes da tela.",
      },
      {
        termo: "Widgets",
        faz: "Painel com informações rápidas, como clima e notícias.",
      },
      {
        termo: "Limpeza de Disco",
        faz: "Remove arquivos desnecessários para liberar espaço.",
      },
      {
        termo: "Desfragmentar e Otimizar Unidades",
        faz: "Reorganiza os dados no disco para melhorar o acesso.",
      },
      {
        termo: "Gerenciador de Tarefas",
        faz: "Abre direto com Ctrl+Shift+Esc e encerra programas travados.",
      },
      {
        termo: "Perfis de rede",
        faz: "O firewall aplica regras diferentes para rede de domínio, particular e pública.",
      },
    ],
    cuidado:
      "Limpeza de Disco libera espaço. Desfragmentar organiza. Nenhuma das duas é antivírus nem backup.",
  },
  questoes: [
    {
      topico: "Requisitos",
      subassunto: "Só 64 bits",
      dificuldade: 5,
      raciocinio: "Sobra de memória não resolve a arquitetura.",
      enunciado:
        "Um computador tem processador de 32 bits, 8 GB de RAM e 256 GB de disco. Sobre a instalação do Windows 11 nele, é correto afirmar que",
      alternativas: [
        "não é possível, pois o sistema só existe em 64 bits",
        "é possível, pois a memória supera o mínimo exigido",
        "é possível, pois o disco supera o espaço mínimo exigido",
        "só é possível na edição Home, que ainda aceita 32 bits",
        "só é possível depois de ativar o modo de compatibilidade",
      ],
      correta: 0,
      explicacao: "O Windows 11 só existe em 64 bits. Memória e disco de sobra não mudam isso.",
      explicacaoErradas:
        "“a memória supera” e “o disco supera” olham só um item. “edição Home” inventa uma exceção. “modo de compatibilidade” serve a programas, e não à instalação do sistema.",
      pegadinha: "Olhar a memória alta e ignorar a arquitetura.",
      conhecimento: "No Windows 10 havia 32 bits. No Windows 11, não há.",
    },
    {
      topico: "Requisitos",
      subassunto: "Exigências mínimas",
      dificuldade: 4,
      raciocinio: "Lembrar do conjunto 4, 64 e TPM 2.0.",
      enunciado: "São exigências mínimas para instalar o Windows 11:",
      alternativas: [
        "2 GB de RAM, 20 GB de armazenamento e BIOS antiga",
        "1 GB de RAM, 16 GB de armazenamento e 32 bits",
        "8 GB de RAM, 1 TB de armazenamento e placa dedicada",
        "4 GB de RAM, 64 GB de armazenamento e chip TPM 2.0",
        "4 GB de RAM, 20 GB de armazenamento e nenhum TPM",
      ],
      correta: 3,
      explicacao: "O Windows 11 pede 4 GB de RAM, 64 GB de armazenamento e TPM 2.0, entre outros itens.",
      explicacaoErradas:
        "“2 GB de RAM” e “1 GB de RAM” trazem números do Windows 10. “8 GB de RAM” exagera. “20 GB de armazenamento e nenhum TPM” erra o espaço e nega o TPM.",
      pegadinha: "Misturar os números do Windows 10 com os do Windows 11.",
      conhecimento: "TPM é um chip de segurança ligado à proteção de chaves.",
    },
    {
      topico: "Ferramentas",
      subassunto: "Limpeza de Disco",
      dificuldade: 4,
      raciocinio: "Liberar espaço é limpar, e não organizar.",
      enunciado:
        "O disco de um computador do posto está quase cheio, com muitos arquivos temporários. Para liberar espaço com um recurso do Windows, a ferramenta adequada é",
      alternativas: [
        "Desfragmentar e Otimizar Unidades, que apaga os temporários",
        "Visão de Tarefas, que libera o espaço usado pelos arquivos",
        "Gerenciador de Tarefas, que exclui os arquivos temporários",
        "Layouts de Ajuste, que compactam os arquivos do disco",
        "Limpeza de Disco, que remove os arquivos desnecessários",
      ],
      correta: 4,
      explicacao: "A Limpeza de Disco remove arquivos desnecessários, como os temporários.",
      explicacaoErradas:
        "“Desfragmentar e Otimizar Unidades” reorganiza os dados. “Visão de Tarefas” mostra janelas. “Gerenciador de Tarefas” controla programas em execução. “Layouts de Ajuste” organizam janelas na tela.",
      pegadinha: "Trocar limpar por desfragmentar.",
      conhecimento: "Limpar libera espaço. Desfragmentar organiza.",
    },
    {
      topico: "Atalhos",
      subassunto: "Gerenciador de Tarefas",
      dificuldade: 4,
      raciocinio: "Esc com Ctrl abre o Iniciar. Com Shift, abre o Gerenciador.",
      enunciado: "Um programa travou, e o agente quer abrir direto o Gerenciador de Tarefas. O atalho adequado é",
      alternativas: ["Ctrl+Esc", "Ctrl+Shift+Esc", "Alt+Esc", "Ctrl+Alt+Tab", "Win+Tab"],
      correta: 1,
      explicacao: "Ctrl+Shift+Esc abre o Gerenciador de Tarefas sem passar por outra tela.",
      explicacaoErradas:
        "“Ctrl+Esc” abre o Iniciar. “Alt+Esc” alterna janelas. “Ctrl+Alt+Tab” mantém a caixa de janelas aberta. “Win+Tab” abre a Visão de Tarefas.",
      pegadinha: "Confundir os atalhos com Esc.",
      conhecimento: "Ctrl+Esc: Iniciar. Alt+Esc: alterna. Ctrl+Shift+Esc: Gerenciador.",
    },
    {
      topico: "Segurança",
      subassunto: "Perfis de rede",
      dificuldade: 5,
      raciocinio: "A regra acompanha o tipo de rede.",
      enunciado:
        "Um notebook funcional usa a rede de domínio do órgão e, depois, um Wi-Fi público em um terminal rodoviário. Nessa mudança, o Firewall do Windows",
      alternativas: [
        "aplica regras diferentes, conforme o perfil de rede em uso",
        "desliga sozinho ao sair da rede de domínio do órgão público",
        "mantém as mesmas regras, pois perfil não muda o firewall",
        "só funciona na rede de domínio, e nunca em redes públicas",
        "bloqueia todo o acesso à internet no Wi-Fi público usado",
      ],
      correta: 0,
      explicacao: "O firewall tem regras para perfil de domínio, particular e público.",
      explicacaoErradas:
        "“desliga sozinho” e “só funciona na rede de domínio” erram: ele segue ativo. “mantém as mesmas regras” ignora os perfis. “bloqueia todo o acesso” inventa um efeito.",
      pegadinha: "Achar que o firewall tem um único conjunto de regras.",
      conhecimento: "Rede pública pede regras mais rígidas.",
    },
    {
      topico: "Área de trabalho",
      subassunto: "Áreas de trabalho virtuais",
      dificuldade: 4,
      raciocinio: "Separar janelas em ambientes diferentes é papel da Visão de Tarefas.",
      enunciado:
        "Um agente quer separar as janelas do trabalho e as dos estudos em duas áreas de trabalho, alternando entre elas. O recurso adequado é",
      alternativas: [
        "a Limpeza de Disco, que separa os arquivos em duas áreas",
        "o Painel de Controle, que cria uma nova conta por janela",
        "o painel de Widgets, que agrupa as janelas por assunto",
        "o Gerenciador de Tarefas, que muda as janelas de área",
        "a Visão de Tarefas, que cria áreas de trabalho virtuais",
      ],
      correta: 4,
      explicacao: "A Visão de Tarefas mostra as janelas e permite criar áreas de trabalho virtuais.",
      explicacaoErradas:
        "“Limpeza de Disco” libera espaço. “Painel de Controle” não cria áreas por janela. “painel de Widgets” traz informações rápidas. “Gerenciador de Tarefas” controla programas.",
      pegadinha: "Confundir área de trabalho virtual com conta de usuário.",
      conhecimento: "Win+Tab abre a Visão de Tarefas.",
    },
  ],
};
