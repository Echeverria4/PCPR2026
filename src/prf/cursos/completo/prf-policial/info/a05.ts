import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-05",
  resumo: {
    ideia:
      "O buscador não varre a web na hora da pesquisa. Ele consulta um índice montado antes, e os operadores deixam a busca mais precisa.",
    itens: [
      {
        termo: "Rastreador",
        faz: "Robô que percorre as páginas e coleta o conteúdo. Também é chamado de crawler.",
      },
      {
        termo: "Indexador",
        faz: "Organiza o que foi coletado em um índice, para a resposta sair rápido.",
      },
      {
        termo: "PageRank",
        faz: "Avalia a importância de uma página pela quantidade e pela qualidade dos links que apontam para ela.",
      },
      {
        termo: "SEO",
        faz: "Técnicas para melhorar a posição de um site nos resultados orgânicos.",
      },
      {
        termo: "Aspas",
        faz: "Buscam a expressão exata, com as palavras juntas e na mesma ordem.",
      },
      {
        termo: "Hífen",
        faz: "Exclui uma palavra dos resultados. Fica colado à palavra excluída.",
      },
      {
        termo: "Dois pontos seguidos",
        faz: "Buscam um intervalo de números: 2020..2024.",
      },
      {
        termo: "intitle e inurl",
        faz: "intitle procura no título da página. inurl procura no endereço.",
      },
      {
        termo: "define",
        faz: "Busca a definição de um termo.",
      },
    ],
    cuidado:
      "Entre o operador e a palavra não vai espaço. Um hífen solto não exclui nada.",
  },
  questoes: [
    {
      topico: "Operadores de busca",
      subassunto: "Aspas e hífen",
      dificuldade: 4,
      raciocinio: "Expressão exata entre aspas. Palavra excluída com hífen colado.",
      enunciado:
        "Um agente quer páginas com a expressão exata lei seca, mas sem a palavra cerveja. A pesquisa adequada é",
      alternativas: [
        '"lei seca" -cerveja',
        "lei seca -cerveja",
        '"lei seca" cerveja',
        '"lei seca" - cerveja',
        'intitle:cerveja "lei seca"',
      ],
      correta: 0,
      explicacao: "As aspas pedem a expressão exata. O hífen colado a cerveja retira essa palavra dos resultados.",
      explicacaoErradas:
        "“lei seca -cerveja” não exige as duas palavras juntas. A pesquisa sem hífen inclui cerveja. A que tem hífen solto não exclui a palavra. A que usa intitle exige cerveja no título.",
      pegadinha: "Colocar espaço depois do hífen. Assim, ele não funciona como operador.",
      conhecimento: "Operadores ficam colados ao termo.",
    },
    {
      topico: "Operadores de busca",
      subassunto: "Intervalo de números",
      dificuldade: 4,
      raciocinio: "Dois pontos seguidos entre números marcam um intervalo.",
      enunciado: "Na pesquisa radar 2020..2024, o buscador procura páginas",
      alternativas: [
        "com radar e apenas os números 2020 e 2024, sem os demais",
        "com radar e algum número entre 2020 e 2024",
        "sem os números de 2020 a 2024 no conteúdo da página",
        "publicadas entre 2020 e 2024 por sites que usam radar",
        "com a frase exata radar 2020 até 2024 no título da página",
      ],
      correta: 1,
      explicacao: "Os dois pontos seguidos indicam um intervalo de números, de 2020 a 2024.",
      explicacaoErradas:
        "“apenas os números 2020 e 2024” ignora os valores do meio. “sem os números” confunde com a exclusão. “publicadas entre” trata o número como data de publicação. “frase exata” confunde com aspas e intitle.",
      pegadinha: "Ler como data de publicação. O operador trabalha com números no conteúdo.",
      conhecimento: "Serve para anos, preços e medidas.",
    },
    {
      topico: "Como o buscador funciona",
      subassunto: "Rastreador e indexador",
      dificuldade: 5,
      raciocinio: "A resposta rápida vem de um índice já pronto.",
      enunciado: "Ao receber uma pesquisa, um buscador responde em frações de segundo porque",
      alternativas: [
        "percorre todos os sites da web no instante em que recebe a busca",
        "mostra apenas as páginas que pagaram para aparecer nos resultados",
        "abre cada site na hora para conferir o conteúdo de cada página",
        "recebe de cada site uma lista pronta, sem usar nenhum rastreador",
        "consulta um índice já montado com o que o rastreador coletou",
      ],
      correta: 4,
      explicacao: "O rastreador coleta as páginas antes, e o indexador as organiza. A busca consulta esse índice.",
      explicacaoErradas:
        "“percorre todos os sites” e “abre cada site” descrevem uma busca em tempo real, que seria inviável. “apenas as páginas que pagaram” confunde anúncio com resultado orgânico. “sem usar nenhum rastreador” nega a etapa de coleta.",
      pegadinha: "Achar que a pesquisa é na web ao vivo. Ela é feita no índice.",
      conhecimento: "Ordem: rastrear, indexar e, depois, responder.",
    },
    {
      topico: "Como o buscador funciona",
      subassunto: "PageRank",
      dificuldade: 5,
      raciocinio: "Importa quantos links chegam e de onde eles vêm.",
      enunciado:
        "A página A recebe poucos links, todos de sites muito relevantes. A página B recebe muitos links de sites irrelevantes. Pela lógica do PageRank,",
      alternativas: [
        "B sempre fica à frente, pois só a quantidade de links conta",
        "as duas empatam, pois o PageRank só avalia o texto da página",
        "A cai nos resultados, pois poucos links indicam página falsa",
        "A pode ficar à frente, pois a qualidade dos links também conta",
        "nenhuma aparece, pois o PageRank só avalia sites de governo",
      ],
      correta: 3,
      explicacao: "O PageRank considera a quantidade e a qualidade dos links. Um link de site relevante pesa mais.",
      explicacaoErradas:
        "“só a quantidade” ignora a qualidade. “só avalia o texto” ignora os links. “página falsa” inventa um critério. “sites de governo” inventa uma restrição.",
      pegadinha: "Olhar só a quantidade de links.",
      conhecimento: "O PageRank trata um link como um voto, e o voto tem peso.",
    },
    {
      topico: "Como o buscador funciona",
      subassunto: "SEO",
      dificuldade: 4,
      raciocinio: "Resultado orgânico é o que não vem de anúncio.",
      enunciado:
        "A equipe de um portal ajusta títulos, conteúdo e estrutura do site para subir nos resultados sem pagar anúncios. Esse conjunto de técnicas é chamado de",
      alternativas: [
        "PageRank, que o dono do site ajusta no painel do buscador",
        "SEO, que busca melhorar a posição nos resultados orgânicos",
        "rastreamento, que paga ao buscador por uma posição melhor",
        "cache, que deixa o site guardado no topo da lista de busca",
        "indexação paga, que troca o conteúdo das páginas do portal",
      ],
      correta: 1,
      explicacao: "SEO reúne técnicas para melhorar a visibilidade e a posição nos resultados orgânicos.",
      explicacaoErradas:
        "“PageRank” é calculado pelo buscador, e não ajustado pelo dono. “rastreamento” é a coleta das páginas. “cache” é cópia temporária. “indexação paga” não descreve a técnica.",
      pegadinha: "Confundir SEO com anúncio pago.",
      conhecimento: "SEO: otimização para mecanismos de busca.",
    },
    {
      topico: "Operadores de busca",
      subassunto: "inurl e intitle",
      dificuldade: 4,
      raciocinio: "O alvo é o endereço da página.",
      enunciado:
        "Para encontrar páginas que tenham a palavra multas no próprio endereço, e não apenas no texto, o operador adequado é",
      alternativas: ["inurl:multas", "intitle:multas", "define:multas", '"multas"', "-multas"],
      correta: 0,
      explicacao: "inurl restringe a busca ao endereço (URL) da página.",
      explicacaoErradas:
        "“intitle:multas” procura no título. “define:multas” procura a definição. A palavra entre aspas procura o termo exato no conteúdo. “-multas” exclui a palavra.",
      pegadinha: "Trocar inurl por intitle. URL é o endereço, e title é o título.",
      conhecimento: "O nome do operador indica o lugar da busca.",
    },
  ],
};
