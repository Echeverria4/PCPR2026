import type { ResumoAula } from "./tipos";

export const INFO: Record<string, ResumoAula> = {
  "info-01": {
    ideia:
      "O Word é o editor de texto do Microsoft Office; a prova cobra atalhos em português, seções e formatos de arquivo.",
    itens: [
      {
        termo: "Atalhos de formatação",
        faz: "Ctrl+N negrito, Ctrl+I itálico, Ctrl+S sublinhado.",
        pista: "No Word em português, N de negrito e S de sublinhado.",
      },
      {
        termo: "Atalhos de arquivo",
        faz: "Ctrl+O novo documento, Ctrl+A abrir, Ctrl+B salvar, Ctrl+P imprimir.",
      },
      {
        termo: "Localizar e substituir",
        faz: "Ctrl+L localiza (painel Navegação); Ctrl+U substitui.",
        pista: "“Somente palavras inteiras” troca “ato” sem mexer em “contrato”.",
      },
      {
        termo: "Seções",
        faz: "Orientação, margens, colunas, cabeçalho e numeração valem por seção.",
        pista: "Uma só página em paisagem: quebra de seção antes e outra depois dela.",
      },
      {
        termo: "Formatos",
        faz: ".docx (padrão), .docm (com macros) e .dotx (modelo); exporta para PDF.",
      },
    ],
    cuidado:
      "Ctrl+Enter é quebra de página, não de seção; e os atalhos do Word não são os do Writer (Ctrl+B salva no Word e põe negrito no Writer).",
  },
  "info-02": {
    ideia:
      "O Excel organiza dados em células (coluna + linha, como B3) e calcula com fórmulas que começam com o sinal de igual.",
    itens: [
      {
        termo: "Referências",
        faz: "Relativa (A1) se ajusta ao copiar; absoluta ($A$1) fica fixa; mista ($A1 ou A$1) fixa só a coluna ou só a linha.",
        pista: "F4 alterna os tipos de referência.",
      },
      {
        termo: "Operadores",
        faz: "Dois-pontos indica intervalo (A1:A5); ponto e vírgula separa argumentos (A1;A5); & junta textos; ^ é potência.",
      },
      {
        termo: "Funções básicas",
        faz: "SOMA, MÉDIA, MÁXIMO, MÍNIMO; SE(teste;se_verdadeiro;se_falso); CONT.SE conta e SOMASE soma pelo critério.",
      },
      {
        termo: "PROCV",
        faz: "Procura o valor na primeira coluna da tabela e devolve a coluna pedida; com FALSO, só aceita valor exato.",
        pista: "#N/D: o valor não foi encontrado.",
      },
      {
        termo: "Erros",
        faz: "#DIV/0! divisão por zero; #NOME? nome errado; #REF! referência apagada; #VALOR! tipo errado; ##### coluna estreita.",
      },
    ],
    cuidado:
      "Copiar e colar uma fórmula ajusta as referências relativas; recortar e colar move a fórmula sem mudar nada.",
  },
  "info-03": {
    ideia:
      "O PowerPoint monta apresentações em slides; a prova cobra atalhos da exibição, modos de exibição, slide mestre e formatos.",
    itens: [
      {
        termo: "Iniciar e encerrar",
        faz: "F5 começa pelo primeiro slide; Shift+F5, pelo slide atual; Esc encerra.",
      },
      {
        termo: "Durante a exibição",
        faz: "B deixa a tela preta e W, branca; número do slide + Enter salta para ele.",
      },
      {
        termo: "Modos de exibição",
        faz: "Normal, Estrutura de Tópicos, Classificação de Slides, Anotações e Modo de Exibição de Leitura.",
        pista: "Anotações guardam o texto de apoio, que o público não vê.",
      },
      {
        termo: "Slide mestre",
        faz: "Guarda layout, fontes, cores e elementos repetidos; o que muda nele vale para todos os slides baseados nele.",
        pista: "Formatação feita direto no slide prevalece sobre o mestre.",
      },
      {
        termo: "Formatos",
        faz: ".pptx (padrão), .ppsx (abre direto na apresentação) e .potx (modelo).",
      },
    ],
    cuidado: "Ocultar slide não apaga nada: o slide continua no arquivo e só é pulado na exibição.",
  },
  "info-04": {
    ideia:
      "O Writer é o editor de texto livre do LibreOffice; parece com o Word, mas os atalhos e alguns menus mudam.",
    itens: [
      {
        termo: "Atalhos de formatação",
        faz: "Ctrl+B negrito, Ctrl+I itálico, Ctrl+U sublinhado.",
        pista: "Seguem o inglês: Bold, Italic, Underline.",
      },
      {
        termo: "Atalhos de arquivo",
        faz: "Ctrl+N novo, Ctrl+O abrir, Ctrl+S salvar, Ctrl+P imprimir.",
        pista: "New, Open, Save, Print.",
      },
      {
        termo: "Localizar e substituir",
        faz: "Ctrl+F abre a barra de pesquisa; Ctrl+H abre Localizar e Substituir.",
      },
      {
        termo: "Estilos de página",
        faz: "Uma página em paisagem sai de uma quebra manual que aplica o estilo de página Paisagem.",
      },
      {
        termo: "Formatos",
        faz: ".odt (padrão ODF) e .ott (modelo); também abre e salva .docx e exporta para PDF.",
      },
    ],
    cuidado: "Ctrl+B no Writer põe negrito, mas no Word salva; Ctrl+S no Writer salva, mas no Word sublinha.",
  },
  "info-05": {
    ideia:
      "O Impress é o programa de apresentações do LibreOffice; funciona como o PowerPoint, com alguns nomes diferentes.",
    itens: [
      {
        termo: "Iniciar e encerrar",
        faz: "F5 começa pelo primeiro slide; Shift+F5, pelo slide atual; Esc encerra.",
        pista: "Igual ao PowerPoint.",
      },
      {
        termo: "Modos de exibição",
        faz: "Normal, Estrutura de tópicos, Notas e Classificador de slides.",
      },
      {
        termo: "Slide mestre",
        faz: "Define fundo, layout e elementos repetidos; mudar o mestre muda todos os slides baseados nele.",
      },
      {
        termo: "Durante a exibição",
        faz: "B deixa a tela preta e W, branca; número do slide + Enter salta para ele.",
      },
      {
        termo: "Formatos",
        faz: ".odp (padrão) e .otp (modelo); também abre e salva .pptx.",
      },
    ],
    cuidado:
      "Os nomes mudam: no Impress é Notas e Classificador de slides; no PowerPoint, Anotações e Classificação de Slides.",
  },
  "info-06": {
    ideia:
      "Internet é a rede pública mundial; a intranet usa as mesmas tecnologias, mas é restrita a uma organização.",
    itens: [
      {
        termo: "Internet, intranet e extranet",
        faz: "Intranet: rede interna da organização. Extranet: parte dela aberta a parceiros autorizados.",
      },
      {
        termo: "Protocolos da web",
        faz: "HTTP transfere páginas; HTTPS faz o mesmo com criptografia; DNS traduz nomes em endereços IP; DHCP distribui IP automaticamente.",
      },
      {
        termo: "TCP × UDP",
        faz: "TCP entrega com confirmação e reenvio; UDP é mais leve, sem essas verificações (voz, vídeo ao vivo).",
      },
      {
        termo: "Endereço IP",
        faz: "IPv4 tem 32 bits (quatro números de 0 a 255); IPv6 tem 128 bits.",
      },
      {
        termo: "Tamanho das redes",
        faz: "PAN (pessoal), LAN (um prédio), MAN (uma cidade) e WAN (países e continentes).",
      },
    ],
    cuidado:
      "Intranet usa os mesmos protocolos da internet (TCP/IP, HTTP); o que muda é o acesso, restrito a quem tem autorização.",
  },
  "info-07": {
    ideia:
      "O navegador abre as páginas da web; a prova cobra atalhos, navegação anônima, cookies, cache e o cadeado do HTTPS.",
    itens: [
      {
        termo: "Guias",
        faz: "Ctrl+T abre guia nova; Ctrl+W fecha; Ctrl+Shift+T reabre a última fechada.",
      },
      {
        termo: "Outros atalhos",
        faz: "Ctrl+H histórico, Ctrl+J downloads, Ctrl+D favoritos, F5 atualiza, Ctrl+F localiza, F11 tela cheia.",
      },
      {
        termo: "Navegação anônima",
        faz: "Ctrl+Shift+N no Chrome e no Edge; Ctrl+Shift+P no Firefox. Ao fechar, somem histórico, cookies e formulários daquela sessão.",
        pista: "Downloads e favoritos criados continuam.",
      },
      {
        termo: "Cookies × cache",
        faz: "Cookies lembram login e preferências; cache guarda cópias de páginas para carregar mais rápido.",
      },
      {
        termo: "Cadeado e HTTPS",
        faz: "Indicam conexão criptografada com o site.",
        pista: "Não provam que o site é confiável.",
      },
    ],
    cuidado:
      "Navegação anônima não esconde o acesso da rede do órgão, do provedor nem dos sites visitados.",
  },
  "info-08": {
    ideia:
      "O e-mail troca mensagens por meio de servidores; a prova cobra os campos de destinatário, responder × encaminhar, os protocolos e os grupos de discussão.",
    itens: [
      {
        termo: "Para, Cc e Cco",
        faz: "Cc recebe e aparece para todos; Cco recebe, mas ninguém vê o endereço dele.",
      },
      {
        termo: "Responder × encaminhar",
        faz: "Responder vai ao remetente, sem os anexos; responder a todos inclui quem estava em Para e Cc; encaminhar repassa com os anexos.",
      },
      {
        termo: "Protocolos",
        faz: "SMTP envia; POP3 baixa as mensagens e, por padrão, apaga do servidor; IMAP sincroniza e mantém tudo no servidor.",
      },
      {
        termo: "Lista × fórum",
        faz: "Lista de discussão redistribui por e-mail a todos os inscritos; fórum fica numa página web, organizado em tópicos.",
      },
      {
        termo: "Moderador e netiqueta",
        faz: "O moderador aprova ou recusa mensagens; netiqueta: não escrever tudo em maiúsculas, manter o assunto e não mandar spam.",
      },
    ],
    cuidado: "Quem estava em Cco não recebe o “responder a todos”, porque o endereço dele não aparece para os outros.",
  },
  "info-09": {
    ideia:
      "Os buscadores aceitam operadores que deixam a pesquisa mais precisa; vários podem ser usados juntos.",
    itens: [
      {
        termo: "Aspas",
        faz: "Buscam a frase exata, com as palavras juntas e naquela ordem.",
      },
      {
        termo: "Sinal de menos",
        faz: "Colado à palavra, exclui o termo: radar -fixo.",
      },
      {
        termo: "site:",
        faz: "Restringe a busca a um site ou domínio: site:gov.br.",
      },
      {
        termo: "filetype:",
        faz: "Restringe ao tipo de arquivo: filetype:pdf.",
      },
      {
        termo: "OR",
        faz: "Em maiúsculas, aceita um termo ou outro: multa OR infração.",
      },
    ],
    cuidado:
      "Não se deixa espaço entre o operador e o termo (site:gov.br, e não site: gov.br); o sinal de mais não funciona mais como operador no Google.",
  },
  "info-10": {
    ideia:
      "O Calc é a planilha do LibreOffice; fórmulas e funções seguem a lógica do Excel, com algumas diferenças que caem na prova.",
    itens: [
      {
        termo: "Outra planilha do arquivo",
        faz: "No Calc, o ponto liga a aba à célula: Multas.B3. No Excel é a exclamação: Multas!B3.",
        pista: "Aba com espaço vai entre apóstrofos: 'Frota Leve'.C4.",
      },
      {
        termo: "Tipos de referência",
        faz: "Relativa (A1), absoluta ($A$1) e mista; no Calc, Shift+F4 alterna entre elas (no Excel, F4).",
      },
      {
        termo: "Alça de preenchimento",
        faz: "No Calc, arrastar um número cria a sequência de 1 em 1 (com Ctrl, repete); no Excel é o contrário.",
      },
      {
        termo: "Funções",
        faz: "SOMA, MÉDIA, SE, CONT.SE, SOMASE e PROCV, com os argumentos separados por ponto e vírgula.",
      },
      {
        termo: "Formatos",
        faz: ".ods (padrão) e .ots (modelo); também abre e salva .xlsx.",
      },
    ],
    cuidado: "Shift+F4 no Calc e F4 no Excel; ponto no Calc (Multas.B3) e exclamação no Excel (Multas!B3).",
  },
  "info-11": {
    ideia:
      "Sistema é um conjunto de partes que interagem por um objetivo comum; a Teoria Geral dos Sistemas, do biólogo Bertalanffy, vale para organismos, empresas e computadores.",
    itens: [
      {
        termo: "Partes de um sistema",
        faz: "Entrada, processamento, saída e retroalimentação (feedback), que corrige o funcionamento.",
      },
      {
        termo: "Aberto × fechado",
        faz: "O sistema aberto troca informação e energia com o ambiente; o fechado não troca.",
        pista: "Organizações e sistemas de informação são sistemas abertos.",
      },
      {
        termo: "Conceitos da teoria",
        faz: "Entropia: tendência à desordem. Homeostase: equilíbrio dinâmico. Sinergia: o todo vale mais que a soma das partes. Equifinalidade: mesmo resultado por caminhos diferentes.",
      },
      {
        termo: "Dado, informação e conhecimento",
        faz: "Dado é o registro bruto; informação é o dado com contexto; conhecimento é a informação interpretada pela experiência.",
        pista: "87 é dado; 87 km/h num trecho de limite 60 km/h é informação.",
      },
      {
        termo: "Tipos de sistema de informação",
        faz: "SPT registra as operações do dia a dia; SIG resume em relatórios para a gerência; SAD simula cenários; SAE dá painéis à alta direção; ERP integra as áreas.",
      },
    ],
    cuidado:
      "Dado sozinho não é informação: só vira informação quando ganha contexto e significado.",
  },
  "info-12": {
    ideia:
      "Segurança da informação protege os dados contra acesso, alteração e perda indevidos; a prova cobra os princípios, as pragas e as defesas.",
    itens: [
      {
        termo: "Princípios",
        faz: "Confidencialidade (só quem pode acessa), integridade (sem alteração indevida), disponibilidade (acessível quando preciso), autenticidade e não repúdio.",
      },
      {
        termo: "Pragas",
        faz: "Vírus precisa ser executado; worm se espalha sozinho pela rede; cavalo de troia finge ser útil; ransomware sequestra os dados; spyware espiona.",
      },
      {
        termo: "Golpes",
        faz: "Phishing imita uma instituição para roubar dados; pharming adultera o DNS e leva ao site falso mesmo com o endereço certo.",
      },
      {
        termo: "Defesas",
        faz: "Firewall filtra o tráfego; antivírus combate as pragas; backup em outro lugar recupera os dados; autenticação multifator reforça o login.",
      },
      {
        termo: "Criptografia e assinatura",
        faz: "Simétrica usa uma chave; assimétrica usa um par (pública e privada). A assinatura digital garante autenticidade, integridade e não repúdio.",
        pista: "Assinatura digital não garante sigilo.",
      },
    ],
    cuidado: "Firewall não substitui o antivírus, e o cadeado do HTTPS não prova que o site é confiável.",
  },
};
