import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-02",
  resumo: {
    ideia:
      "Protocolos são as regras da conversa entre máquinas. O modelo OSI separa essa conversa em 7 camadas, e o TCP/IP é o conjunto usado na prática.",
    itens: [
      {
        termo: "Camadas do OSI",
        faz: "De baixo para cima: física, enlace, rede, transporte, sessão, apresentação e aplicação.",
        pista: "O OSI é um modelo teórico.",
      },
      {
        termo: "Sessão e apresentação",
        faz: "Sessão abre, mantém e encerra o diálogo. Apresentação cuida de formato, compressão e criptografia.",
      },
      {
        termo: "Transporte",
        faz: "TCP é confiável, confere a entrega e a ordem. UDP não abre conexão: é mais rápido e não confirma nada.",
      },
      {
        termo: "Rede",
        faz: "IP endereça e roteia. ICMP relata erros. ARP descobre o MAC a partir do IP. NAT traduz endereços.",
      },
      {
        termo: "Unidades e endereços",
        faz: "Enlace: quadro e MAC. Rede: datagrama e IP. Transporte: segmento e porta.",
      },
      {
        termo: "Portas web e arquivos",
        faz: "HTTP 80, HTTPS 443, FTP 20 e 21, SSH 22, Telnet 23, DNS 53.",
      },
      {
        termo: "Portas de e-mail",
        faz: "SMTP 25 ou 587 envia. POP3 110 e IMAP 143 recebem.",
        pista: "No Brasil, a porta 587 foi adotada contra o spam.",
      },
      {
        termo: "Serviços básicos",
        faz: "DHCP entrega IP automaticamente. DNS traduz nomes em IP.",
      },
      {
        termo: "Equipamentos",
        faz: "Hub repete o sinal para todas as portas. Switch envia só à porta de destino.",
      },
    ],
    cuidado:
      "Protocolo de aplicação não é programa. O HTTP é a regra da conversa, e o navegador é quem a usa.",
  },
  questoes: [
    {
      topico: "Modelo OSI",
      subassunto: "Função de cada camada",
      dificuldade: 5,
      raciocinio: "Tradução de formato e criptografia ficam logo abaixo da aplicação.",
      enunciado:
        "Em um sistema de consulta de placas, uma camada do modelo OSI converte o formato dos dados, comprime e criptografa as informações antes de entregá-las à aplicação. Essa camada é a de",
      alternativas: ["sessão", "transporte", "apresentação", "enlace", "rede"],
      correta: 2,
      explicacao: "A apresentação trata a forma dos dados: formato, compressão e criptografia.",
      explicacaoErradas:
        "“sessão” abre, mantém e encerra o diálogo. “transporte” cuida da entrega de ponta a ponta. “enlace” trata os quadros entre nós vizinhos. “rede” endereça e roteia os pacotes.",
      pegadinha: "Trocar sessão por apresentação. Uma cuida do diálogo, e a outra, da forma dos dados.",
      conhecimento: "Da quinta à sétima camada: sessão, apresentação e aplicação.",
    },
    {
      topico: "Camada de transporte",
      subassunto: "TCP ou UDP",
      dificuldade: 4,
      raciocinio: "Ao vivo, atraso pesa mais que a perda de um quadro.",
      enunciado:
        "As câmeras de um trecho transmitem imagens ao vivo para a central. Perder alguns quadros é aceitável, mas o atraso não é. O protocolo de transporte mais adequado é o",
      alternativas: [
        "TCP, pois reenvia cada quadro perdido sem gerar atraso",
        "ICMP, pois relata os erros e reenvia os quadros perdidos",
        "IP, pois garante a ordem de chegada dos quadros de vídeo",
        "UDP, pois não abre conexão nem confirma o recebimento",
        "TCP, pois não usa conexão e por isso é o mais rápido de todos",
      ],
      correta: 3,
      explicacao: "O UDP não abre conexão nem confirma a entrega. Perde confiabilidade e ganha rapidez.",
      explicacaoErradas:
        "“TCP, pois reenvia” traz justamente o atraso a evitar. “ICMP” só relata erros e fica na camada de rede. “IP” não garante ordem. “TCP, pois não usa conexão” descreve o UDP.",
      pegadinha: "Achar que o protocolo confiável é sempre o melhor. Em tempo real, ele atrasa.",
      conhecimento: "TCP: confiável. UDP: rápido e sem garantia.",
    },
    {
      topico: "Portas",
      subassunto: "Envio e recebimento de e-mail",
      dificuldade: 5,
      raciocinio: "Enviar é SMTP. Manter no servidor é IMAP.",
      enunciado:
        "Um agente configura um cliente de e-mail para enviar mensagens pela porta adotada no Brasil contra o spam e para ler as mensagens sem retirá-las do servidor. As portas padrão, nessa ordem, são",
      alternativas: ["25 e 110", "587 e 110", "143 e 587", "587 e 143", "443 e 143"],
      correta: 3,
      explicacao: "O envio usa SMTP, na porta 587. A leitura mantendo as mensagens no servidor usa IMAP, na porta 143.",
      explicacaoErradas:
        "“25 e 110” usa a porta antiga e o POP3. “587 e 110” acerta o envio, mas 110 é POP3. “143 e 587” inverte as duas. “443 e 143” usa HTTPS para enviar.",
      pegadinha: "Trocar POP3 por IMAP. Quem mantém a mensagem no servidor é o IMAP.",
      conhecimento: "POP3 baixa as mensagens. IMAP trabalha com elas no servidor.",
    },
    {
      topico: "Camada de rede",
      subassunto: "ARP e seus vizinhos",
      dificuldade: 4,
      raciocinio: "O computador tem o IP e quer o endereço físico.",
      enunciado:
        "Para entregar um pacote dentro da rede local, um computador sabe o IP do destino, mas precisa do endereço físico da placa de rede. O protocolo usado para isso é o",
      alternativas: ["RARP", "ARP", "ICMP", "DHCP", "DNS"],
      correta: 1,
      explicacao: "O ARP descobre o endereço MAC a partir do IP.",
      explicacaoErradas:
        "“RARP” faz o caminho inverso, do MAC para o IP. “ICMP” relata erros. “DHCP” entrega IP às máquinas. “DNS” traduz nomes em IP.",
      pegadinha: "Trocar ARP por RARP. O R indica o caminho reverso.",
      conhecimento: "ARP: IP para MAC. DNS: nome para IP.",
    },
    {
      topico: "Camadas e endereços",
      subassunto: "Unidade de dados por camada",
      dificuldade: 5,
      raciocinio: "Rede trabalha com IP. Enlace, com MAC. Transporte, com porta.",
      enunciado:
        "Quanto à unidade de dados e ao endereço usados em cada camada, a relação correta é",
      alternativas: [
        "enlace: segmento e endereço IP",
        "transporte: quadro e endereço MAC",
        "rede: datagrama e endereço IP",
        "física: datagrama e número de porta",
        "transporte: datagrama e endereço MAC",
      ],
      correta: 2,
      explicacao: "Na camada de rede, a unidade é o datagrama (pacote), e o endereço é o IP.",
      explicacaoErradas:
        "“enlace: segmento” erra: enlace usa quadro e MAC. “transporte: quadro” erra: transporte usa segmento e porta. “física” lida com bits, sem endereço. “transporte: datagrama” mistura duas camadas.",
      pegadinha: "Decorar só os nomes. Cada camada tem um par: unidade e endereço.",
      conhecimento: "Bits, quadros, datagramas e segmentos, de baixo para cima.",
    },
    {
      topico: "Serviços de rede",
      subassunto: "DHCP e DNS",
      dificuldade: 4,
      raciocinio: "Primeiro a máquina recebe o IP. Depois, o nome do site é traduzido.",
      enunciado:
        "Um notebook novo entra na rede do posto e recebe um IP sem configuração manual. Depois, o agente digita o nome de um site, que é traduzido para o IP do servidor. Esses serviços são, nessa ordem,",
      alternativas: [
        "DNS e DHCP, que atuam na camada de rede",
        "ARP e DNS, que atuam na camada de enlace",
        "DHCP e NAT, que traduzem os nomes dos sites",
        "NAT e DHCP, que distribuem os endereços IP",
        "DHCP e DNS, da camada de aplicação",
      ],
      correta: 4,
      explicacao: "O DHCP entrega o IP automaticamente. O DNS traduz o nome em IP. Os dois são da camada de aplicação.",
      explicacaoErradas:
        "“DNS e DHCP” inverte a ordem e erra a camada. “ARP e DNS” usa o ARP, que não entrega IP. “DHCP e NAT” erra: o NAT traduz endereços, não nomes. “NAT e DHCP” inverte os papéis.",
      pegadinha: "Trocar as funções. DHCP dá o endereço, e DNS traduz o nome.",
      conhecimento: "Sem DNS, seria preciso digitar o IP de cada site.",
    },
    {
      topico: "Equipamentos de rede",
      subassunto: "Hub e switch",
      dificuldade: 4,
      raciocinio: "O switch aprende em qual porta está cada MAC.",
      enunciado:
        "A troca do hub de um posto por um switch reduz o tráfego desnecessário na rede local porque o switch",
      alternativas: [
        "repete cada sinal para todas as portas, com maior potência",
        "traduz nomes de sites em endereços IP antes de transmitir",
        "envia cada quadro só à porta do destino, pelo endereço MAC",
        "cria redes sem fio para os computadores que estão no local",
        "atribui um endereço IP diferente a cada uma das suas portas",
      ],
      correta: 2,
      explicacao: "O switch lê o endereço MAC de destino e envia o quadro só à porta certa.",
      explicacaoErradas:
        "“repete cada sinal” descreve o hub. “traduz nomes” é função do DNS. “cria redes sem fio” é função do access point. “atribui um endereço IP” não é função do switch: quem entrega IP é o DHCP.",
      pegadinha: "Achar que hub e switch são iguais por terem a mesma aparência.",
      conhecimento: "Hub repete para todos. Switch encaminha ao destino.",
    },
  ],
};
