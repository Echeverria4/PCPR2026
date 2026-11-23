import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a05",
  resumo: {
    ideia:
      "A internet é uma rede de redes que fala a mesma língua: o TCP/IP. Em cima dela rodam a web, o e-mail, a nuvem e a voz sobre IP. A prova cobra o papel de cada protocolo, a diferença entre TCP e UDP, os tipos de nuvem, intranet e extranet, os endereços (IP, MAC, URL) e os equipamentos de rede.",
    itens: [
      {
        termo: "Internet e web",
        faz: "A internet nasceu da ARPANET, rede militar dos EUA, e usa o TCP/IP. A web (WWW) é só um dos serviços da internet: páginas ligadas por links, abertas pelo navegador com HTTP.",
        pista: "Internet é a estrada; a web é um dos veículos que passam por ela.",
      },
      {
        termo: "Busca no Google",
        faz: "\"aspas\": frase exata; - (hífen): tira um termo; OR: um ou outro; site: só aquele site; filetype: só aquele tipo de arquivo; intitle: termo no título; .. intervalo (2000..2010); * coringa.",
      },
      {
        termo: "Nuvem: características",
        faz: "Autoatendimento sob demanda, amplo acesso pela rede, recursos compartilhados, elasticidade rápida (cresce ou diminui conforme a necessidade) e serviço medido (paga-se pelo uso).",
      },
      {
        termo: "Nuvem: implantação",
        faz: "Pública: aberta a qualquer cliente. Privada: de uma só organização. Comunitária: de um grupo de organizações com interesses comuns. Híbrida: junta duas ou mais dessas.",
      },
      {
        termo: "Nuvem: serviços",
        faz: "SaaS: o programa pronto, usado pelo navegador (e-mail na web, editor de texto online). PaaS: plataforma para programadores publicarem seus apps. IaaS: servidores, rede e armazenamento virtuais alugados.",
      },
      {
        termo: "Deep web e dark web",
        faz: "Deep web é tudo que os buscadores não indexam (caixas de e-mail, sistemas com senha). Dark web é uma parte pequena dela, acessada só com navegadores especiais, como o Tor.",
      },
      {
        termo: "Campos do e-mail",
        faz: "Para: destinatário principal. Cc: cópia, visível a todos. Cco: cópia oculta; os outros não sabem que essa pessoa recebeu.",
      },
      {
        termo: "Protocolos de e-mail",
        faz: "SMTP envia. POP3 baixa as mensagens para o aparelho. IMAP lê direto no servidor e mantém as pastas iguais em todos os aparelhos.",
      },
      {
        termo: "TCP x UDP",
        faz: "TCP: abre conexão, confirma a entrega, reenvia o que se perdeu e põe em ordem (páginas, e-mail, arquivos). UDP: sem conexão nem garantia, mais leve (vídeo ao vivo, chamada de voz, jogos).",
      },
      {
        termo: "Outros protocolos",
        faz: "HTTP (porta 80) e HTTPS (443, com criptografia): páginas. FTP: transferência de arquivos. DNS: traduz nome em IP. DHCP: dá IP automaticamente. ICMP: mensagens de erro e o ping.",
      },
      {
        termo: "Endereço IP",
        faz: "IPv4: 32 bits, 4 números de 0 a 255 (ex.: 192.168.0.10). IPv6: 128 bits, em hexadecimal, separados por dois-pontos; criado porque os endereços IPv4 estavam acabando.",
      },
      {
        termo: "Intranet, extranet e VPN",
        faz: "Intranet: rede privada com as tecnologias da internet. Extranet: parte da intranet aberta a parceiros autorizados de fora. VPN: túnel com criptografia sobre a internet, que permite acessar a rede privada de longe.",
      },
      {
        termo: "Identificadores",
        faz: "URL: endereço completo (protocolo://servidor/caminho). Domínio: nome fácil, como gov.br. MAC: 48 bits gravados na placa de rede. IMEI: identifica cada celular (aparece com *#06#). EID: identifica o chip embutido (eSIM).",
      },
      {
        termo: "Equipamentos",
        faz: "Hub: repete o sinal para todas as portas. Switch: entrega só na porta de destino, pelo MAC. Roteador: liga redes diferentes e escolhe o caminho pelo IP.",
      },
      {
        termo: "Meios e topologias",
        faz: "Fibra óptica: usa luz e não sofre interferência elétrica; monomodo vai mais longe que multimodo. ADSL: assimétrica, baixa mais rápido do que envia. Estrela: todos ligados a um ponto central (switch).",
        pista: "Latência é o atraso; jitter é a variação desse atraso.",
      },
    ],
  },
  questoes: [
    {
      topico: "Nuvem",
      subassunto: "SaaS, PaaS e IaaS",
      dificuldade: 5,
      raciocinio: "Programa pronto é SaaS; plataforma para publicar app é PaaS; máquina virtual alugada é IaaS.",
      enunciado:
        "Associe cada situação ao modelo de serviço em nuvem.\n(1) SaaS\n(2) PaaS\n(3) IaaS\n( ) Uma empresa aluga servidores virtuais, rede e armazenamento e instala neles o sistema operacional que quiser.\n( ) Um usuário edita um texto pelo navegador, sem instalar programa algum.\n( ) Uma equipe publica seu próprio aplicativo numa plataforma que já cuida do sistema e do servidor.\n( ) Um órgão contrata um e-mail corporativo pronto, acessado pela web.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 3, 2, 1.", "3, 2, 1, 1.", "2, 1, 3, 1.", "3, 1, 2, 1.", "3, 1, 2, 2."],
      correta: 3,
      explicacao:
        "Servidores virtuais com sistema à escolha: IaaS (3). Editor pelo navegador: SaaS (1). Plataforma para publicar o próprio app: PaaS (2). E-mail pronto na web: SaaS (1).",
      explicacaoErradas:
        "As outras sequências trocam IaaS com SaaS ou tratam o e-mail pronto como plataforma (PaaS). O cliente do PaaS é quem programa; o do SaaS só usa.",
      pegadinha: "Quanto mais pronto o serviço, mais perto do SaaS; quanto mais o cliente controla, mais perto do IaaS.",
      conhecimento: "No IaaS o cliente cuida do sistema operacional; no PaaS, não.",
    },
    {
      topico: "Nuvem",
      subassunto: "Características e implantação",
      dificuldade: 4,
      raciocinio: "Comunitária é de um grupo de organizações, não do público em geral.",
      enunciado:
        "Sobre a computação em nuvem, analise as afirmativas.\nI – Na elasticidade rápida, os recursos aumentam ou diminuem conforme a demanda.\nII – No serviço medido, o uso é monitorado e pode ser cobrado pelo que se consome.\nIII – Na nuvem híbrida, uma nuvem privada e uma pública são usadas em conjunto.\nIV – Na nuvem comunitária, o uso é aberto ao público em geral, sem restrição.\nEstão corretas as afirmativas",
      alternativas: ["I e II, apenas.", "I, II e III, apenas.", "I, III e IV, apenas.", "II, III e IV, apenas.", "I, II, III e IV."],
      correta: 1,
      explicacao:
        "Elasticidade é crescer ou diminuir conforme a demanda (I). Serviço medido é cobrar pelo uso (II). Híbrida junta tipos diferentes de nuvem (III).",
      explicacaoErradas:
        "A afirmativa IV está errada: aberta ao público é a nuvem pública; a comunitária atende a um grupo de organizações com interesses comuns. A sequência I e II esquece a III.",
      pegadinha: "\"Comunitária\" soa como \"para todos\", mas é só para uma comunidade de organizações.",
      conhecimento: "Contratar mais espaço quando o plano enche é um exemplo de elasticidade.",
    },
    {
      topico: "E-mail",
      subassunto: "Para, Cc e Cco",
      dificuldade: 5,
      raciocinio: "Quem está em Cco fica escondido dos outros, mas vê quem está em Para e em Cc.",
      enunciado:
        "Um servidor envia um e-mail com Ana no campo Para, Bruno no campo Cc e Carla no campo Cco. Quando a mensagem chega,",
      alternativas: [
        "Ana e Bruno não sabem que Carla recebeu, e Carla vê que Ana e Bruno receberam.",
        "todos sabem que Carla recebeu, mas não conseguem responder diretamente a ela.",
        "Carla não sabe que Bruno recebeu, porque Cc fica oculto para quem está em Cco.",
        "Bruno não vê Ana, porque quem está em Cc só consegue ver o remetente da mensagem.",
        "Ana vê Carla, porque só quem está no campo Cc deixa de ver os destinatários Cco.",
      ],
      correta: 0,
      explicacao:
        "Cco é cópia oculta: o nome de Carla não aparece para Ana nem para Bruno. Já Para e Cc aparecem para todos, inclusive para Carla.",
      explicacaoErradas:
        "Ninguém além do remetente sabe que Carla recebeu. Cc não é oculto: é visível para todos. Quem está em Cc vê quem está em Para. Quem está em Cco não aparece para nenhum outro destinatário.",
      pegadinha: "O oculto é só o Cco; Para e Cc são vistos por todos, inclusive por quem está no Cco.",
      conhecimento: "Usar Cco num envio para muitas pessoas protege os endereços de todas elas.",
    },
    {
      topico: "Protocolos",
      subassunto: "TCP e UDP",
      dificuldade: 4,
      raciocinio: "TCP é o confiável, com conexão; UDP é o leve, sem garantia.",
      enunciado: "Sobre os protocolos de transporte da internet, assinale a alternativa correta.",
      alternativas: [
        "O UDP confirma a entrega de cada pacote e, por isso, é usado na transferência de arquivos.",
        "O TCP não estabelece conexão antes de enviar, o que o torna mais rápido que o UDP.",
        "O UDP reenvia os pacotes perdidos e os entrega na ordem certa ao destino final.",
        "O TCP é o preferido nas chamadas de voz ao vivo, por não se importar com perdas.",
        "O TCP é orientado à conexão e confiável; o UDP é mais leve e não garante a entrega.",
      ],
      correta: 4,
      explicacao:
        "O TCP abre a conexão, confirma a entrega, reenvia o que se perdeu e põe os pacotes em ordem. O UDP manda sem conexão e sem garantia, por isso é mais leve.",
      explicacaoErradas:
        "Confirmar entrega, reenviar e ordenar são trabalho do TCP, não do UDP. O TCP estabelece conexão e é o mais lento dos dois. Nas chamadas ao vivo prefere-se o UDP, que não para para reenviar.",
      pegadinha: "Numa chamada de voz, é melhor perder um pedaço do que esperar o reenvio; por isso o UDP.",
      conhecimento: "Vídeo ao vivo, chamadas de voz e jogos online costumam usar UDP.",
    },
    {
      topico: "Protocolos",
      subassunto: "Aplicação",
      dificuldade: 4,
      raciocinio: "DNS traduz nome; SMTP envia; DHCP dá IP; IMAP lê no servidor.",
      enunciado:
        "Associe cada protocolo à sua função.\n(1) SMTP\n(2) IMAP\n(3) DHCP\n(4) DNS\n( ) Traduz nomes de domínio em endereços IP.\n( ) Envia as mensagens de e-mail.\n( ) Dá endereço IP automaticamente aos aparelhos da rede.\n( ) Lê os e-mails direto no servidor, mantendo as pastas iguais em todos os aparelhos.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 4, 3, 2.", "4, 2, 3, 1.", "4, 1, 3, 2.", "4, 1, 2, 3.", "3, 1, 4, 2."],
      correta: 2,
      explicacao:
        "Traduzir nome em IP: DNS (4). Enviar e-mail: SMTP (1). Dar IP automático: DHCP (3). Ler no servidor e sincronizar: IMAP (2).",
      explicacaoErradas:
        "As outras sequências trocam SMTP com IMAP (enviar com ler), DHCP com IMAP ou DNS com DHCP.",
      pegadinha: "DNS e DHCP lidam com IP, mas um traduz o nome e o outro distribui o número.",
      conhecimento: "O POP3 também recebe e-mail, mas baixa as mensagens para o aparelho.",
    },
    {
      topico: "Endereços",
      subassunto: "IPv4, IPv6 e MAC",
      dificuldade: 5,
      raciocinio: "IPv4 = 32 bits, números de 0 a 255; IPv6 = 128 bits; MAC é outra coisa.",
      enunciado: "Sobre endereços na rede, assinale a alternativa correta.",
      alternativas: [
        "O IPv4 tem 128 bits, escritos em 8 grupos hexadecimais separados por dois-pontos.",
        "No IPv4, cada um dos 4 números do endereço pode ir de 0 até 999.",
        "O IPv6 tem 128 bits e resolve a falta de endereços do IPv4, que tem 32 bits.",
        "O endereço 192.168.0.300 é um IPv4 válido, comum em redes domésticas.",
        "Endereço MAC e endereço IP são a mesma coisa, só que com nomes diferentes no Linux.",
      ],
      correta: 2,
      explicacao:
        "O IPv4 tem 32 bits (cerca de 4,3 bilhões de endereços), que ficaram poucos. O IPv6 tem 128 bits e oferece uma quantidade enorme de endereços.",
      explicacaoErradas:
        "128 bits em hexadecimal é o IPv6. No IPv4, cada número tem 8 bits e vai de 0 a 255; por isso 300 não vale. O MAC é gravado na placa de rede; o IP é o endereço lógico, dado pela rede.",
      pegadinha: "Um número acima de 255 já mostra que o IPv4 é inválido.",
      conhecimento: "Faixas como 192.168.x.x e 10.x.x.x são privadas, usadas dentro de casas e empresas.",
    },
    {
      topico: "Busca na web",
      subassunto: "Operadores do Google",
      dificuldade: 5,
      raciocinio: "Aspas para a frase exata, site: para o domínio e filetype: para o tipo de arquivo.",
      enunciado:
        "Um agente quer encontrar, no Google, apenas arquivos PDF publicados em sites gov.br que contenham a expressão exata Código de Trânsito. A pesquisa adequada é",
      alternativas: [
        "\"Código de Trânsito\" site:gov.br filetype:pdf",
        "Código de Trânsito site:gov.br -pdf",
        "\"Código de Trânsito\" intitle:gov.br filetype:pdf",
        "\"Código de Trânsito\" site:gov.br define:pdf",
        "Código OR Trânsito site:gov.br filetype:pdf",
      ],
      correta: 0,
      explicacao:
        "As aspas buscam a expressão exata; site:gov.br limita aos sites desse domínio; filetype:pdf traz só arquivos PDF.",
      explicacaoErradas:
        "O hífen exclui (-pdf tiraria os resultados com pdf). intitle: procura no título da página, não no domínio. define: mostra definições. OR traz páginas com uma palavra ou a outra, não a frase exata.",
      pegadinha: "O hífen colado na palavra não marca o tipo: ele exclui o termo.",
      conhecimento: "Dois pontos seguidos fazem intervalo: 2000..2010.",
    },
    {
      topico: "Redes privadas",
      subassunto: "Intranet, extranet e VPN",
      dificuldade: 4,
      raciocinio: "Intranet usa tecnologia da internet e pode ser acessada de fora com autorização, como pela VPN.",
      enunciado:
        "Julgue as afirmativas como verdadeiras (V) ou falsas (F).\n( ) A intranet é uma rede privada que usa as mesmas tecnologias da internet, como TCP/IP e HTTP.\n( ) A extranet permite que parceiros autorizados, de fora, acessem parte da rede privada.\n( ) A intranet não pode ser acessada de fora do prédio da organização em nenhuma hipótese.\n( ) Uma VPN cria um túnel protegido por criptografia sobre a internet.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, V, V.", "V, F, F, V.", "F, V, F, V.", "V, V, F, F.", "V, V, F, V."],
      correta: 4,
      explicacao:
        "A intranet usa TCP/IP e HTTP (V). A extranet abre parte dela a parceiros (V). A VPN é um túnel com criptografia (V). A terceira é falsa: com autorização, por exemplo pela VPN, a intranet pode ser acessada de fora.",
      explicacaoErradas:
        "Marcar V na terceira ignora o acesso remoto. Marcar F na primeira ou na segunda nega a definição de intranet e de extranet. Marcar F na última nega a criptografia da VPN.",
      pegadinha: "Intranet é privada, mas não é presa ao prédio.",
      conhecimento: "A intranet pode ter páginas, e-mail e sistemas iguais aos da internet, só que de acesso restrito.",
    },
    {
      topico: "Equipamentos",
      subassunto: "Switch e roteador",
      dificuldade: 4,
      raciocinio: "Entrega na porta certa pelo MAC é switch; liga redes pelo IP é roteador.",
      enunciado:
        "Numa rede local, um equipamento recebe os dados e os envia só para a porta do computador de destino, identificando-o pelo endereço MAC. Outro equipamento liga essa rede local à internet e escolhe o caminho dos pacotes pelo endereço IP. Esses equipamentos são, respectivamente,",
      alternativas: ["hub e switch.", "roteador e switch.", "hub e roteador.", "switch e roteador.", "switch e modem óptico."],
      correta: 3,
      explicacao:
        "O switch aprende em que porta está cada endereço MAC e entrega só ali. O roteador liga redes diferentes e decide o caminho pelo endereço IP.",
      explicacaoErradas:
        "O hub não escolhe porta: repete os dados para todas. Inverter switch e roteador troca os papéis. O modem converte o sinal da linha (telefone, cabo, fibra), mas não escolhe caminhos pelo IP.",
      pegadinha: "Hub manda para todos; switch manda só para o destino.",
      conhecimento: "Em casa, um único aparelho costuma juntar modem, roteador, switch e Wi-Fi.",
    },
    {
      topico: "Endereços",
      subassunto: "URL, MAC, IMEI e domínio",
      dificuldade: 5,
      raciocinio: "IMEI = celular; URL = endereço completo; MAC = placa de rede; domínio = nome fácil.",
      enunciado:
        "Associe cada identificador à sua descrição.\n(1) URL\n(2) Endereço MAC\n(3) IMEI\n(4) Nome de domínio\n( ) Número que identifica cada celular no mundo, exibido ao digitar *#06#.\n( ) Endereço completo de um recurso, com protocolo, servidor e caminho.\n( ) Identificador de 48 bits gravado na placa de rede.\n( ) Nome fácil de lembrar, como gov.br, que aponta para servidores na internet.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 3, 2, 4.", "3, 1, 2, 4.", "3, 2, 1, 4.", "4, 1, 2, 3.", "3, 1, 4, 2."],
      correta: 1,
      explicacao:
        "Identificar o celular: IMEI (3). Endereço completo: URL (1). 48 bits na placa de rede: MAC (2). Nome fácil: domínio (4).",
      explicacaoErradas:
        "As outras sequências trocam o IMEI com a URL, o MAC com a URL ou o MAC com o domínio.",
      pegadinha: "O domínio é só uma parte da URL; a URL traz também o protocolo e o caminho.",
      conhecimento: "No Windows, o comando ipconfig /all mostra o endereço MAC (endereço físico) da placa.",
    },
  ],
};
