import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-14",
  resumo: {
    ideia:
      "O Windows 10 é um sistema operacional. O que mais cai: requisitos, edições, atalhos e o que acontece ao selecionar, mover e excluir arquivos.",
    itens: [
      {
        termo: "Requisitos mínimos",
        faz: "32 bits: 1 GHz, 1 GB de RAM e 16 GB de espaço. 64 bits: 1 GHz, 2 GB de RAM e 20 GB de espaço.",
      },
      {
        termo: "Edições",
        faz: "Home, Pro, Enterprise e Education. A Pro traz recursos como Active Directory e Área de Trabalho Remota.",
      },
      {
        termo: "Alternar janelas",
        faz: "Alt+Tab mostra a caixa de janelas. Alt+Esc alterna sem mostrar a caixa.",
      },
      {
        termo: "Selecionar arquivos",
        faz: "Shift seleciona em sequência. Ctrl seleciona alternados.",
      },
      {
        termo: "Arrastar arquivos",
        faz: "Na mesma unidade, move. Em outra unidade, copia.",
      },
      {
        termo: "Excluir",
        faz: "Delete manda para a Lixeira. Shift+Delete apaga sem passar por ela.",
        pista: "Arquivo apagado de pendrive não vai para a Lixeira.",
      },
      {
        termo: "Nomes de arquivo",
        faz: "Não aceitam estes caracteres: \\ / : * ? \" < > |",
      },
      {
        termo: "Painel de Controle",
        faz: "Organizado por categorias, como Sistema e Segurança, Rede e Internet, Programas e Contas de Usuário.",
      },
      {
        termo: "Suspender",
        faz: "Mantém a sessão aberta, com pouco consumo de energia.",
      },
    ],
    cuidado:
      "Copiar ou mover ao arrastar depende da unidade de destino, e não da pasta.",
  },
  questoes: [
    {
      topico: "Requisitos",
      subassunto: "32 e 64 bits",
      dificuldade: 5,
      raciocinio: "Conferir cada requisito nas duas versões.",
      enunciado:
        "Pelos requisitos mínimos, um computador de 1 GHz, com 1 GB de RAM e 20 GB de espaço, pode receber o Windows 10 em",
      alternativas: [
        "só a versão de 64 bits, que exige menos memória",
        "só a versão de 32 bits, que exige apenas 1 GB de RAM",
        "as duas versões, pois o espaço cobre as duas exigências",
        "nenhuma versão, pois as duas exigem 4 GB de memória RAM",
        "a versão de 64 bits, pois 20 GB bastam para qualquer caso",
      ],
      correta: 1,
      explicacao: "A versão de 32 bits pede 1 GB de RAM. A de 64 bits pede 2 GB, que o computador não tem.",
      explicacaoErradas:
        "“só a versão de 64 bits” e “a versão de 64 bits” ignoram a falta de memória. “as duas versões” olha só o espaço. “nenhuma versão” traz um número que não é do Windows 10.",
      pegadinha: "Ver os 20 GB e concluir que o computador atende aos 64 bits.",
      conhecimento: "Requisito é conjunto: basta um item faltar.",
    },
    {
      topico: "Arquivos e pastas",
      subassunto: "Arrastar arquivos",
      dificuldade: 4,
      raciocinio: "Mesma unidade move. Outra unidade copia.",
      enunciado:
        "No Explorador de Arquivos, sem usar teclas, um agente arrasta o arquivo A para outra pasta do mesmo disco e o arquivo B para um pendrive. O resultado é:",
      alternativas: [
        "A é copiado, e B é movido para o pendrive",
        "A e B são copiados, e os originais ficam onde estavam",
        "A e B são movidos, e os originais deixam a pasta de origem",
        "A abre em nova janela, e B vai para a Lixeira do pendrive",
        "A é movido, e B é copiado, com o original de B no disco",
      ],
      correta: 4,
      explicacao: "Na mesma unidade, arrastar move. Para outra unidade, arrastar copia.",
      explicacaoErradas:
        "“A é copiado, e B é movido” inverte a regra. “A e B são copiados” e “A e B são movidos” ignoram a mudança de unidade. “A abre em nova janela” não descreve a ação de arrastar.",
      pegadinha: "Olhar a pasta, e não a unidade.",
      conhecimento: "Ctrl força a cópia, e Shift força a movimentação.",
    },
    {
      topico: "Arquivos e pastas",
      subassunto: "Lixeira",
      dificuldade: 5,
      raciocinio: "A Lixeira atende às unidades internas, e não ao pendrive.",
      enunciado:
        "Um agente excluiu, com a tecla Delete, um arquivo do disco local e outro de um pendrive. Depois, abriu a Lixeira. Nela, encontra",
      alternativas: [
        "só o arquivo do disco local, pois o pendrive não usa a Lixeira",
        "só o arquivo do pendrive, pois o disco local apaga de vez",
        "os dois arquivos, pois Delete sempre manda para a Lixeira",
        "nenhum arquivo, pois Delete apaga sem passar pela Lixeira",
        "os dois arquivos, mas o do pendrive só volta com Shift+Delete",
      ],
      correta: 0,
      explicacao: "O arquivo do disco local vai para a Lixeira. O que é apagado do pendrive não vai.",
      explicacaoErradas:
        "“só o arquivo do pendrive” inverte a regra. “os dois arquivos” ignora o pendrive. “nenhum arquivo” descreve o Shift+Delete. “só volta com Shift+Delete” erra: esse atalho apaga, e não recupera.",
      pegadinha: "Achar que Delete sempre manda para a Lixeira.",
      conhecimento: "Antes de apagar do pendrive, confira: não há Lixeira para desfazer.",
    },
    {
      topico: "Arquivos e pastas",
      subassunto: "Seleção com Shift e Ctrl",
      dificuldade: 5,
      raciocinio: "Primeiro a sequência com Shift, depois o item solto com Ctrl.",
      enunciado:
        "Em uma lista de arquivos, um agente quer selecionar do 1º ao 5º e, além deles, o 9º. Ele deve",
      alternativas: [
        "clicar no 1º, usar Ctrl no 5º e usar Shift no 9º",
        "clicar no 1º, usar Shift no 9º e usar Ctrl no 5º",
        "usar Ctrl no 1º, no 5º e no 9º, nessa mesma ordem",
        "clicar no 1º, usar Shift no 5º e usar Ctrl no 9º",
        "usar Alt no 1º e usar Shift no 5º e também no 9º",
      ],
      correta: 3,
      explicacao: "Shift marca do 1º ao 5º. Ctrl acrescenta o 9º sem perder a seleção.",
      explicacaoErradas:
        "“usar Ctrl no 5º e usar Shift no 9º” marca outra sequência. “usar Shift no 9º e usar Ctrl no 5º” marca do 1º ao 9º e retira o 5º. “usar Ctrl no 1º, no 5º e no 9º” marca só três. “usar Alt” não serve para selecionar.",
      pegadinha: "Inverter Shift e Ctrl.",
      conhecimento: "Ctrl em item já marcado retira esse item da seleção.",
    },
    {
      topico: "Atalhos",
      subassunto: "Alternar janelas",
      dificuldade: 4,
      raciocinio: "Sem caixa: Alt+Esc.",
      enunciado: "Para alternar entre as janelas abertas, sem exibir a caixa de seleção de janelas, o atalho adequado é",
      alternativas: ["Alt+Tab", "Win+D", "Alt+Esc", "Ctrl+Esc", "Alt+F4"],
      correta: 2,
      explicacao: "Alt+Esc alterna as janelas sem mostrar a caixa.",
      explicacaoErradas:
        "“Alt+Tab” mostra a caixa. “Win+D” mostra a área de trabalho. “Ctrl+Esc” abre o menu Iniciar. “Alt+F4” fecha a janela.",
      pegadinha: "Marcar Alt+Tab por ser o atalho mais conhecido.",
      conhecimento: "Alt+Tab: com caixa. Alt+Esc: sem caixa.",
    },
    {
      topico: "Arquivos e pastas",
      subassunto: "Nomes de arquivo",
      dificuldade: 4,
      raciocinio: "Procurar o nome sem caracteres proibidos.",
      enunciado: "Entre os nomes abaixo, o Windows aceita",
      alternativas: [
        "multa:2026.pdf",
        "auto?prf.pdf",
        "posto*12.pdf",
        "multa_2026-1.pdf",
        "lista|prf.pdf",
      ],
      correta: 3,
      explicacao: "Sublinhado e hífen são aceitos. Os outros nomes trazem caracteres proibidos.",
      explicacaoErradas:
        "“multa:2026.pdf” tem dois-pontos. “auto?prf.pdf” tem interrogação. “posto*12.pdf” tem asterisco. “lista|prf.pdf” tem barra vertical.",
      pegadinha: "Achar que hífen e sublinhado são proibidos.",
      conhecimento: "Proibidos: \\ / : * ? \" < > |",
    },
  ],
};
