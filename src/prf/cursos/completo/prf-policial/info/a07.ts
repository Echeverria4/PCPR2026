import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-07",
  resumo: {
    ideia:
      "Rede social é uma estrutura de pessoas ou organizações ligadas por relações e interesses. A internet deu escala a isso, mas não criou a ideia.",
    itens: [
      {
        termo: "Conceito",
        faz: "Estrutura em que pessoas ou empresas se ligam por laços e interesses em comum.",
      },
      {
        termo: "Rede corporativa",
        faz: "Rede privada que reúne colaboradores, fornecedores, clientes e parceiros de uma empresa.",
      },
      {
        termo: "Avatar",
        faz: "Figura digital que representa o usuário.",
      },
      {
        termo: "Hashtag",
        faz: "Marca com # que agrupa publicações sobre um assunto.",
      },
      {
        termo: "Facebook",
        faz: "Rede pública e gratuita, com interação por postagens.",
      },
      {
        termo: "Instagram",
        faz: "Fotos e vídeos, com filtros digitais.",
      },
      {
        termo: "X, antigo Twitter",
        faz: "Microblog com mensagens curtas, em tempo real.",
      },
      {
        termo: "LinkedIn",
        faz: "Rede voltada a contatos profissionais.",
      },
      {
        termo: "Snapchat e Flickr",
        faz: "Snapchat: o autor escolhe por quanto tempo a imagem fica visível. Flickr: hospeda e organiza imagens.",
      },
    ],
    cuidado:
      "Perfil fechado não é cofre. Quem vê a publicação pode copiar e repassar.",
  },
  questoes: [
    {
      topico: "Conceito",
      subassunto: "Rede social e internet",
      dificuldade: 5,
      raciocinio: "O conceito é sobre relações, e não sobre tecnologia.",
      enunciado: "Sobre o conceito de rede social, é correto afirmar que",
      alternativas: [
        "surgiu só com a internet, pois antes não havia essas ligações",
        "exige um site público, pois sem ele não há relação entre pessoas",
        "só existe entre pessoas físicas, nunca entre as organizações",
        "é sinônimo de rede de computadores ligada por cabos e roteadores",
        "é uma estrutura de relações que existe também fora da internet",
      ],
      correta: 4,
      explicacao: "Rede social é uma estrutura de pessoas ou organizações ligadas por relações. Ela não depende da internet.",
      explicacaoErradas:
        "“surgiu só com a internet” e “exige um site público” confundem o conceito com as plataformas. “só existe entre pessoas físicas” erra: organizações também participam. “rede de computadores” confunde o tema com infraestrutura.",
      pegadinha: "Achar que rede social é sinônimo de aplicativo.",
      conhecimento: "A internet ampliou as redes sociais, mas elas já existiam.",
    },
    {
      topico: "Redes corporativas",
      subassunto: "Ambiente privado",
      dificuldade: 4,
      raciocinio: "Ambiente privado que reúne o público da empresa.",
      enunciado:
        "Uma empresa cria um ambiente digital privado que reúne colaboradores, fornecedores, clientes e parceiros para melhorar a comunicação. Trata-se de",
      alternativas: [
        "um microblog público, aberto a qualquer usuário da rede",
        "uma rede social corporativa",
        "um hospedeiro de imagens, voltado a ilustrações e fotos",
        "uma lista de distribuição, em que só a empresa pode escrever",
        "um mecanismo de busca, usado por colaboradores da empresa",
      ],
      correta: 1,
      explicacao: "A rede corporativa é privada e aproxima os públicos ligados à empresa.",
      explicacaoErradas:
        "“microblog público” é aberto a todos. “hospedeiro de imagens” não trata de comunicação interna. “lista de distribuição” não tem interação. “mecanismo de busca” não reúne pessoas.",
      pegadinha: "Achar que rede social é sempre pública.",
      conhecimento: "Há redes abertas e redes privadas.",
    },
    {
      topico: "Principais redes",
      subassunto: "Microblog",
      dificuldade: 4,
      raciocinio: "Mensagens curtas, em tempo real.",
      enunciado:
        "A rede que funciona como microblog, com mensagens curtas e interação em tempo real, é o",
      alternativas: ["X, ex-Twitter", "LinkedIn", "Flickr", "Snapchat", "YouTube"],
      correta: 0,
      explicacao: "O X, antigo Twitter, é o exemplo clássico de microblog.",
      explicacaoErradas:
        "“LinkedIn” é voltado a contatos profissionais. “Flickr” hospeda imagens. “Snapchat” trabalha com imagens de exibição temporária. “YouTube” é dedicado a vídeos.",
      pegadinha: "Marcar outra rede que também tenha textos. O formato curto é o que define o microblog.",
      conhecimento: "Microblog: blog de mensagens curtas.",
    },
    {
      topico: "Principais redes",
      subassunto: "Função de cada plataforma",
      dificuldade: 5,
      raciocinio: "Conferir cada par, e não só o primeiro nome.",
      enunciado: "A relação correta entre a rede e a sua função principal é",
      alternativas: [
        "Flickr: rede de contatos profissionais e currículos",
        "LinkedIn: hospedagem de fotografias e de ilustrações",
        "YouTube: microblog de mensagens curtas e em tempo real",
        "Snapchat: imagens com tempo de exibição definido",
        "Instagram: rede privada de uma única empresa",
      ],
      correta: 3,
      explicacao: "No Snapchat, o usuário escolhe por quanto tempo a imagem fica visível.",
      explicacaoErradas:
        "“Flickr” e “LinkedIn” estão trocados entre si. “YouTube” é dedicado a vídeos. “Instagram” é público, e não uma rede privada.",
      pegadinha: "Trocar Flickr e LinkedIn. Um é de imagens, e o outro é profissional.",
      conhecimento: "Cada plataforma nasceu com um foco próprio.",
    },
    {
      topico: "Recursos",
      subassunto: "Avatar e hashtag",
      dificuldade: 4,
      raciocinio: "Um representa a pessoa, o outro agrupa o assunto.",
      enunciado:
        "A figura digital que representa o usuário e a marca com # que agrupa publicações de um assunto são, nessa ordem,",
      alternativas: [
        "perfil e cookie",
        "avatar e cookie",
        "hashtag e avatar",
        "filtro e hashtag",
        "avatar e hashtag",
      ],
      correta: 4,
      explicacao: "Avatar é a figura que representa o usuário. Hashtag agrupa publicações do mesmo tema.",
      explicacaoErradas:
        "“perfil e cookie” e “avatar e cookie” usam cookie, que é um arquivo do navegador. “hashtag e avatar” inverte a ordem. “filtro e hashtag” usa filtro, que altera imagens.",
      pegadinha: "Inverter a ordem pedida.",
      conhecimento: "Clicar em uma hashtag mostra as publicações marcadas com ela.",
    },
    {
      topico: "Cuidados",
      subassunto: "Publicação em perfil fechado",
      dificuldade: 5,
      raciocinio: "Quem vê pode copiar.",
      enunciado:
        "Um servidor publica, em um perfil fechado, a foto de um documento de ocorrência. Sobre o risco dessa publicação, é correto afirmar que",
      alternativas: [
        "os seguidores podem copiar e repassar a imagem",
        "não há risco, pois perfil fechado impede a cópia da imagem",
        "o conteúdo some da rede ao fim do dia, de forma automática",
        "só há risco se a mesma foto for publicada também no Facebook",
        "a rede apaga dados sigilosos de qualquer imagem publicada",
      ],
      correta: 0,
      explicacao: "Perfil fechado limita quem vê, mas quem vê pode copiar e repassar o conteúdo.",
      explicacaoErradas:
        "“perfil fechado impede a cópia” erra: basta uma captura de tela. “some da rede” não ocorre de forma automática. “só há risco” erra: a plataforma não muda o problema. “a rede apaga dados” erra: isso não é feito.",
      pegadinha: "Confiar na configuração de privacidade como se fosse sigilo.",
      conhecimento: "Controle de quem vê não é controle do que será feito depois.",
    },
  ],
};
