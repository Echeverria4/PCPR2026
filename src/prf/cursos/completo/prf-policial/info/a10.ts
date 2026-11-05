import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-10",
  resumo: {
    ideia:
      "O e-mail é assíncrono: quem recebe não precisa estar conectado no momento do envio. Um protocolo envia, e outros dois permitem ler.",
    itens: [
      {
        termo: "SMTP",
        faz: "Envia as mensagens, do cliente ao servidor e entre servidores. Portas 25 ou 587.",
      },
      {
        termo: "POP3",
        faz: "Baixa as mensagens. Por padrão, apaga do servidor, mas pode manter cópia. Porta 110.",
      },
      {
        termo: "IMAP",
        faz: "Mantém as mensagens no servidor, com acesso de vários aparelhos. Portas 143 ou 993, com SSL/TLS.",
      },
      {
        termo: "Cliente de e-mail",
        faz: "Programa instalado, como Outlook e Thunderbird.",
      },
      {
        termo: "Webmail",
        faz: "Acesso pelo navegador, sem instalar programa.",
      },
      {
        termo: "Cc",
        faz: "Envia cópia. Todos veem quem está em Cc.",
      },
      {
        termo: "Cco",
        faz: "Envia cópia oculta. Os outros destinatários não veem quem está em Cco.",
        pista: "“Responder a todos” não alcança quem está em Cco.",
      },
      {
        termo: "Responder e encaminhar",
        faz: "Responder não leva os anexos recebidos. Encaminhar leva.",
      },
      {
        termo: "Pastas",
        faz: "Caixa de Saída: aguardando envio. Itens Enviados: já saiu. Lixo Eletrônico: suspeitas de spam.",
      },
    ],
    cuidado:
      "IMAP não é o protocolo de envio. Mesmo com IMAP na leitura, quem envia é o SMTP.",
  },
  questoes: [
    {
      topico: "Campos da mensagem",
      subassunto: "Para, Cc e Cco",
      dificuldade: 5,
      raciocinio: "Quem está em Cco fica de fora da lista que os outros recebem.",
      enunciado:
        "Ana envia um e-mail com Bruno em Para, Carla em Cc e Davi em Cco. Bruno clica em “Responder a todos”. A resposta chega a",
      alternativas: [
        "Ana, Carla e Davi, pois Davi também recebeu a mensagem",
        "somente Ana, pois quem está em Cc nunca recebe respostas",
        "Ana e Carla, pois Bruno não sabe que Davi foi incluído",
        "somente Carla e Davi, pois a autora já tem a mensagem",
        "somente Davi, pois a cópia oculta recebe todas as respostas",
      ],
      correta: 2,
      explicacao: "Bruno vê Ana e Carla. Davi fica oculto, e por isso não entra na resposta.",
      explicacaoErradas:
        "“Ana, Carla e Davi” ignora o efeito da cópia oculta. “somente Ana” descreve o Responder simples. “somente Carla e Davi” retira a autora. “somente Davi” inverte a função do Cco.",
      pegadinha: "Achar que “todos” inclui quem está oculto.",
      conhecimento: "Quem está em Cco vê os outros, mas os outros não o veem.",
    },
    {
      topico: "Protocolos",
      subassunto: "POP3 e IMAP",
      dificuldade: 5,
      raciocinio: "Mesmas mensagens em vários aparelhos pedem que elas fiquem no servidor.",
      enunciado:
        "Um agente lê o e-mail no celular e no computador do posto e quer ver as mesmas mensagens e pastas nos dois. O protocolo adequado para a leitura é o",
      alternativas: [
        "POP3, pois ele sempre mantém tudo igual nos aparelhos",
        "SMTP, pois é ele que sincroniza as pastas nos aparelhos",
        "FTP, pois é o que transfere mensagens de um aparelho a outro",
        "IMAP, pois as mensagens seguem guardadas no servidor",
        "HTTP, pois o Outlook só lê mensagens por uma página web",
      ],
      correta: 3,
      explicacao: "O IMAP mantém as mensagens no servidor. Assim, os aparelhos veem o mesmo conteúdo.",
      explicacaoErradas:
        "“POP3” baixa as mensagens e, por padrão, as apaga do servidor. “SMTP” envia. “FTP” transfere arquivos, e não trata de e-mail. “HTTP” é usado no webmail, e o Outlook é um cliente instalado.",
      pegadinha: "Marcar POP3 só porque ele também lê mensagens.",
      conhecimento: "POP3 baixa. IMAP sincroniza.",
    },
    {
      topico: "Protocolos",
      subassunto: "Envio",
      dificuldade: 4,
      raciocinio: "Quem envia é o SMTP, seja qual for o protocolo de leitura.",
      enunciado: "Um cliente de e-mail está configurado com IMAP. Ao clicar em Enviar, a mensagem sai pelo protocolo",
      alternativas: [
        "SMTP, nas portas 25 ou 587",
        "IMAP, que usa as portas 143 ou 993",
        "POP3, na porta padrão 110",
        "IMAP, na porta padrão 110",
        "HTTP, na porta padrão 80",
      ],
      correta: 0,
      explicacao: "O SMTP cuida do envio. O IMAP trata apenas do acesso às mensagens recebidas.",
      explicacaoErradas:
        "“IMAP, que usa as portas 143 ou 993” é leitura. “POP3, na porta padrão 110” é leitura. “IMAP, na porta padrão 110” mistura um protocolo com a porta do POP3. “HTTP” não envia e-mail em um cliente instalado.",
      pegadinha: "Achar que o protocolo configurado para a leitura também envia.",
      conhecimento: "Envio: SMTP. Leitura: POP3 ou IMAP.",
    },
    {
      topico: "Ações sobre a mensagem",
      subassunto: "Responder e encaminhar",
      dificuldade: 4,
      raciocinio: "O anexo só segue junto no encaminhamento.",
      enunciado:
        "Uma mensagem chegou com um PDF anexo, e o agente precisa repassar esse PDF ao colega, sem salvar nada antes. Ele deve usar a opção",
      alternativas: [
        "Responder, que devolve o anexo ao autor da mensagem",
        "Responder a todos, que leva o anexo a toda a lista",
        "Encaminhar, que leva os anexos recebidos na mensagem",
        "Cco, que envia o anexo sem que o colega perceba nada",
        "Marcar como lida, que libera o anexo para outros colegas",
      ],
      correta: 2,
      explicacao: "Encaminhar reenvia a mensagem com os anexos. Responder não leva os anexos recebidos.",
      explicacaoErradas:
        "“Responder” e “Responder a todos” não levam os anexos recebidos. “Cco” é um campo de destinatário, e não uma ação. “Marcar como lida” só muda o estado da mensagem.",
      pegadinha: "Achar que “Responder a todos” leva tudo junto.",
      conhecimento: "Responder: sem anexo. Encaminhar: com anexo.",
    },
    {
      topico: "Pastas",
      subassunto: "Caixa de Saída",
      dificuldade: 4,
      raciocinio: "Saída é o que ainda não saiu.",
      enunciado:
        "Sem internet, um servidor clicou em Enviar no Outlook. A mensagem ficou aguardando a conexão. Enquanto isso, ela está em",
      alternativas: [
        "Itens Enviados, pois o envio é registrado ao clicar",
        "Lixo Eletrônico, pois ficou sem um servidor de destino",
        "Rascunhos, pois toda mensagem sem conexão perde o envio",
        "Caixa de Entrada, pois volta ao autor até a nova tentativa",
        "Caixa de Saída, pois está pendente de envio pelo programa",
      ],
      correta: 4,
      explicacao: "A Caixa de Saída guarda as mensagens que aguardam envio.",
      explicacaoErradas:
        "“Itens Enviados” guarda o que já saiu. “Lixo Eletrônico” guarda suspeitas de spam. “Rascunhos” guarda o que ainda não foi enviado pelo autor. “Caixa de Entrada” guarda o que foi recebido.",
      pegadinha: "Confundir Caixa de Saída com Itens Enviados.",
      conhecimento: "Saída: pendente. Enviados: concluído.",
    },
    {
      topico: "Formas de acesso",
      subassunto: "Webmail e cliente",
      dificuldade: 4,
      raciocinio: "Webmail depende do navegador. Cliente é programa instalado.",
      enunciado: "Sobre o uso do e-mail, é correto afirmar que",
      alternativas: [
        "o webmail exige instalar o Outlook no computador usado",
        "o Thunderbird é um webmail, aberto apenas pelo navegador",
        "o Outlook é um cliente, e o webmail é aberto no navegador",
        "o destinatário precisa estar online no momento do envio",
        "o cliente de e-mail dispensa o servidor de correio do provedor",
      ],
      correta: 2,
      explicacao: "Outlook e Thunderbird são clientes instalados. O webmail é usado pelo navegador.",
      explicacaoErradas:
        "“exige instalar o Outlook” contraria o webmail. “Thunderbird é um webmail” erra: é programa instalado. “precisa estar online” erra: o e-mail é assíncrono. “dispensa o servidor” erra: as mensagens passam por servidores.",
      pegadinha: "Esquecer que o e-mail é assíncrono.",
      conhecimento: "A mensagem espera no servidor até ser lida.",
    },
  ],
};
