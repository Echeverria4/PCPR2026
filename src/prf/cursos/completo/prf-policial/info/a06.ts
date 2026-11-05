import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-06",
  resumo: {
    ideia:
      "Esta aula junta três temas: conversa em grupo por e-mail, arquivos de áudio e vídeo, e acesso a um computador à distância.",
    itens: [
      {
        termo: "Lista de distribuição",
        faz: "Uma coleção de contatos para enviar a mesma mensagem a muitas pessoas. É a mala direta.",
      },
      {
        termo: "Lista de discussão",
        faz: "Grupo que debate um assunto por e-mail. Escreve-se para o endereço da lista, e todos recebem.",
      },
      {
        termo: "Grupo de discussão",
        faz: "Também funciona por e-mail, mas as mensagens são vistas, em geral, em uma página web.",
      },
      {
        termo: "Formatos de vídeo",
        faz: "MPEG, MP4, MKV, MOV, WMV e AVI são exemplos.",
      },
      {
        termo: "Codec e contêiner",
        faz: "Codec comprime e descomprime. Contêiner guarda vídeo, áudio e legendas no mesmo arquivo.",
      },
      {
        termo: "Streaming",
        faz: "Reproduz o conteúdo enquanto os dados chegam, sem esperar o arquivo inteiro.",
      },
      {
        termo: "Telnet e SSH",
        faz: "Os dois dão acesso remoto por linha de comando. Telnet (porta 23) não criptografa. SSH (porta 22) criptografa.",
      },
      {
        termo: "Acesso gráfico",
        faz: "VNC, TeamViewer e LogMeIn mostram a tela da outra máquina.",
        pista: "A Conexão de Área de Trabalho Remota é nativa do Windows.",
      },
      {
        termo: "PuTTY",
        faz: "Programa cliente para acesso remoto por linha de comando.",
      },
    ],
    cuidado:
      "MP4 e MKV não são codecs. São contêineres, que guardam dados comprimidos por codecs.",
  },
  questoes: [
    {
      topico: "Multimídia",
      subassunto: "Contêiner e codec",
      dificuldade: 5,
      raciocinio: "Um embala, o outro comprime.",
      enunciado:
        "Um vídeo de fiscalização foi salvo em um único arquivo .mkv, com imagem, duas faixas de áudio e legendas. Sobre esse arquivo, é correto afirmar que",
      alternativas: [
        "o MKV é um contêiner, que guarda dados tratados por codecs",
        "o MKV é um codec só de áudio, que não aceita faixas de vídeo",
        "o MKV é um codec e impede o uso de legendas em outro idioma",
        "o contêiner comprime a imagem, e o codec só guarda as legendas",
        "cada faixa de áudio exige um arquivo .mkv próprio e separado",
      ],
      correta: 0,
      explicacao: "O contêiner reúne vídeo, áudio e legendas. Os codecs comprimem e descomprimem esses dados.",
      explicacaoErradas:
        "“codec só de áudio” e “é um codec” erram a natureza do MKV. “o contêiner comprime” inverte os papéis. “exige um arquivo próprio” nega a função do contêiner.",
      pegadinha: "Chamar a extensão do arquivo de codec.",
      conhecimento: "Contêiner é a caixa. Codec é a forma de comprimir o conteúdo.",
    },
    {
      topico: "Multimídia",
      subassunto: "Streaming",
      dificuldade: 4,
      raciocinio: "No streaming, a reprodução não espera o fim da transferência.",
      enunciado:
        "A central assiste à gravação de uma câmera pela rede, e a imagem começa alguns segundos depois do clique, sem que o arquivo inteiro tenha sido baixado. Isso caracteriza",
      alternativas: [
        "cópia completa do arquivo para o disco antes da exibição",
        "streaming, que reproduz enquanto os dados vão chegando",
        "compressão sem perda, que dispensa o uso da rede de dados",
        "envio por FTP, que só abre o vídeo no fim da transferência",
        "acesso remoto por SSH, que mostra a tela da outra máquina",
      ],
      correta: 1,
      explicacao: "No streaming, o conteúdo é reproduzido à medida que os dados chegam.",
      explicacaoErradas:
        "“cópia completa” é o download. “compressão sem perda” reduz o arquivo, mas não define o envio. “envio por FTP” transfere arquivos. “acesso remoto por SSH” é linha de comando.",
      pegadinha: "Confundir streaming com download. O download termina antes de abrir.",
      conhecimento: "Streaming: reproduzir durante a transferência.",
    },
    {
      topico: "Acesso remoto",
      subassunto: "Telnet e SSH",
      dificuldade: 4,
      raciocinio: "Linha de comando com criptografia aponta para o SSH.",
      enunciado:
        "Um técnico vai administrar um roteador à distância, por linha de comando, com a comunicação criptografada. O protocolo e a porta padrão adequados são",
      alternativas: [
        "Telnet, na porta 23, por criptografar a sessão",
        "FTP, na porta 21, por ser feito para comandos remotos",
        "HTTP, na porta 80, por proteger a linha de comando",
        "SSH, na porta 22",
        "Telnet, na porta 22, que é a sua versão com criptografia",
      ],
      correta: 3,
      explicacao: "O SSH dá acesso remoto por linha de comando, com criptografia, na porta 22.",
      explicacaoErradas:
        "“Telnet, na porta 23” não criptografa. “FTP” transfere arquivos. “HTTP” serve páginas web, sem proteção. “Telnet, na porta 22” mistura o protocolo com a porta do SSH.",
      pegadinha: "Achar que Telnet e SSH são iguais. Só o SSH protege a sessão.",
      conhecimento: "Telnet envia tudo em texto claro, inclusive a senha.",
    },
    {
      topico: "Acesso remoto",
      subassunto: "Ferramentas gráficas",
      dificuldade: 5,
      raciocinio: "O pedido é de tela completa e de recurso que já vem no Windows.",
      enunciado:
        "Um técnico quer ver e operar a tela de um computador Windows à distância, usando um recurso que já vem no sistema. A ferramenta adequada é",
      alternativas: [
        "a Conexão de Área de Trabalho Remota",
        "o PuTTY, nativo do Windows e com acesso à tela da máquina",
        "o Telnet, que exibe a interface gráfica do outro computador",
        "o VNC, que acompanha toda instalação padrão do Windows",
        "o TeamViewer, que vem instalado em toda cópia do Windows",
      ],
      correta: 0,
      explicacao: "A Conexão de Área de Trabalho Remota é nativa do Windows e mostra a tela do outro computador.",
      explicacaoErradas:
        "“PuTTY” é de terceiros e trabalha com linha de comando. “Telnet” não exibe interface gráfica. “VNC” e “TeamViewer” são gráficos, mas não vêm no Windows.",
      pegadinha: "Marcar uma ferramenta conhecida sem ver a condição de já vir no sistema.",
      conhecimento: "Gráfico e nativo do Windows: Área de Trabalho Remota.",
    },
    {
      topico: "Listas e grupos",
      subassunto: "Distribuição ou discussão",
      dificuldade: 5,
      raciocinio: "Se há debate entre os participantes, não é mala direta.",
      enunciado:
        "Agentes cadastrados enviam mensagens a um único endereço, que as repassa a todos. Eles respondem e debatem o tema pelo próprio e-mail, sem abrir nenhuma página. Isso é",
      alternativas: [
        "uma lista de distribuição, em que só o autor pode enviar",
        "uma lista de discussão",
        "um grupo de discussão, que só é lido por uma página web",
        "um fórum, que exige que todos usem o mesmo navegador web",
        "uma mala direta, em que todos os inscritos respondem a todos",
      ],
      correta: 1,
      explicacao: "Na lista de discussão, escreve-se para o endereço da lista, e os participantes debatem por e-mail.",
      explicacaoErradas:
        "“lista de distribuição” e “mala direta” são a mesma coisa, sem debate. “grupo de discussão” costuma ser visto em página web. “fórum” também é lido em página, e não exige navegador específico.",
      pegadinha: "Trocar distribuição por discussão. Só a segunda tem conversa.",
      conhecimento: "Usa-se o endereço da lista, e não o de cada participante.",
    },
    {
      topico: "Multimídia",
      subassunto: "Extensões de vídeo",
      dificuldade: 4,
      raciocinio: "Separar o que é vídeo do que é imagem e documento.",
      enunciado: "Todas as extensões abaixo são usadas para vídeo em",
      alternativas: [
        ".mp4, .jpg e .mkv",
        ".mov, .mkv e .csv",
        ".wmv, .png e .mp4",
        ".txt, .avi e .mov",
        ".mp4, .wmv e .mov",
      ],
      correta: 4,
      explicacao: "MP4, WMV e MOV são formatos de vídeo.",
      explicacaoErradas:
        "“.mp4, .jpg e .mkv” e “.wmv, .png e .mp4” têm extensões de imagem. “.mov, .mkv e .csv” tem uma extensão de planilha. “.txt, .avi e .mov” tem uma extensão de texto.",
      pegadinha: "Ler só as duas primeiras extensões de cada conjunto.",
      conhecimento: "A extensão indica o tipo do arquivo, mas não prova o conteúdo.",
    },
  ],
};
