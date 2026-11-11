import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "discursivas-06",
  resumo: {
    ideia:
      "Primeira rodada de temas: violência e segurança pública. Cada proposta traz textos motivadores, um tema e aspectos com valor em pontos. O texto é corrigido aspecto por aspecto, por isso o plano deve dar um bloco a cada aspecto e responder exatamente ao recorte pedido.",
    itens: [
      {
        termo: "Texto motivador",
        faz: "Serve só para dar ideias; não deve ser copiado. O que manda é o tema e os aspectos do comando.",
      },
      {
        termo: "Aspectos com valor",
        faz: "Cada aspecto vale uma parte da nota (por exemplo, 6,50, 6,00 e 6,50 pontos). Aspecto omitido não pontua, por melhor que seja o resto do texto.",
      },
      {
        termo: "Assunto x tema na proposta",
        faz: "Falar do assunto geral (tecnologia, violência) sem chegar ao recorte (reconhecimento facial e democracia; custos econômicos da violência) é fugir do que foi pedido.",
      },
      {
        termo: "Temas da rodada",
        faz: "Violência nas grandes cidades e seus custos; eficiência policial e direitos do cidadão; origem da criminalidade e papel do poder público; população carcerária e superlotação; tecnologia no trabalho policial; reconhecimento facial; direitos da criança e do adolescente.",
      },
      {
        termo: "Base constitucional",
        faz: "Art. 144 da Constituição: a segurança pública é dever do Estado, direito e responsabilidade de todos, exercida para preservar a ordem pública e a incolumidade das pessoas e do patrimônio.",
      },
      {
        termo: "Tese equilibrada",
        faz: "Nos temas sobre polícia e cidadania, a tese costuma unir eficiência e respeito aos direitos, e não opor uma coisa à outra.",
      },
    ],
    cuidado:
      "Os dados numéricos dos textos motivadores envelhecem. Use estatísticas só quando tiver segurança da fonte e do ano.",
  },
  questoes: [
    {
      topico: "Planejamento pela proposta",
      subassunto: "Aspectos com valor",
      dificuldade: 5,
      raciocinio: "Cada aspecto é pontuado à parte; omitir um não zera, mas perde o valor dele.",
      enunciado:
        "Uma proposta pede: (a) principais problemas de violência nas grandes cidades [6,50 pontos]; (b) custos econômicos da violência [6,00 pontos]; (c) ações de segurança pública para enfrentar o problema [6,50 pontos]. O candidato escreve ótimos parágrafos sobre (a) e (c) e esquece (b). Em regra, ele:",
      alternativas: [
        "não perde nada, porque os aspectos são só sugestões e o corretor avalia o texto como um todo",
        "tem o texto todo zerado por fuga ao tema, já que deixou de abordar um dos aspectos do comando",
        "perde só pontos de correção gramatical, porque o conteúdo é avaliado apenas quanto à clareza",
        "deixa de pontuar o aspecto omitido, que vale 6,00 pontos, mesmo com bons parágrafos nos outros",
        "ganha pontos extras nos aspectos desenvolvidos, que compensam o que ficou de fora do texto",
      ],
      correta: 3,
      explicacao:
        "Na correção por aspectos, cada um tem seu valor. O que não foi abordado não pontua, por melhor que seja o resto. Não é fuga ao tema, porque o texto trata do tema pedido.",
      explicacaoErradas:
        "Os aspectos não são “só sugestões”: o comando diz que devem ser abordados. Fuga ao tema é escrever sobre outra coisa, o que não ocorreu, então “tem o texto todo zerado” exagera. O conteúdo é avaliado, ao contrário de “perde só pontos de correção gramatical”. E não há “pontos extras” para compensar a omissão.",
      pegadinha: "Confundir omissão de um aspecto com fuga total ao tema.",
      conhecimento: "No plano, reserve um bloco de linhas para cada aspecto antes de escrever.",
    },
    {
      topico: "Planejamento pela proposta",
      subassunto: "Assunto x tema",
      dificuldade: 5,
      raciocinio: "Ficar no geral = falar do assunto e não do tema delimitado.",
      enunciado:
        "O tema pedido é “o reconhecimento facial como oportunidade para a segurança pública e como ameaça à democracia”. O candidato escreve um bom texto sobre “a tecnologia no mundo moderno”, com exemplos de celulares e redes sociais. O problema do texto é que ele:",
      alternativas: [
        "ficou no assunto, que é amplo, e não chegou ao tema, que é a delimitação pedida pela banca",
        "acertou, porque escrever sobre o assunto geral sempre garante a cobertura do tema específico",
        "ficou no tema, mas não chegou ao assunto, que precisa aparecer expresso já na primeira linha",
        "acertou só se usou introdução por conceito, que transforma o assunto em tema automaticamente",
        "errou apenas na tipologia, porque a tecnologia só pode ser tratada em dissertação expositiva",
      ],
      correta: 0,
      explicacao:
        "Assunto é o campo geral (tecnologia); tema é o recorte (reconhecimento facial entre segurança e democracia). O texto ficou no assunto e não respondeu ao que foi pedido.",
      explicacaoErradas:
        "Falar do geral não “garante a cobertura do tema”; ao contrário, afasta-se dele. É o tema, e não o assunto, que precisa aparecer expresso na introdução, por isso “ficou no tema, mas não chegou ao assunto” inverte a regra. Nenhuma introdução “transforma o assunto em tema automaticamente”. E não existe regra de tipologia para tecnologia.",
      pegadinha: "Inverter: o assunto pode ficar implícito; o tema não.",
      conhecimento: "O bom texto parte do assunto e chega ao tema logo na introdução.",
    },
    {
      topico: "Planejamento pela proposta",
      subassunto: "Tese em tema de polícia e cidadania",
      dificuldade: 4,
      raciocinio: "Tese que une eficiência policial e direitos do cidadão.",
      enunciado:
        "A proposta pede: relação entre eficiência policial e direitos do cidadão; finalidade da repressão policial e sua intensidade; aparelho policial como pilar da sociedade democrática. A frase que melhor serve de tese é:",
      alternativas: [
        "A eficiência policial depende de deixar de lado os direitos do cidadão quando a criminalidade cresce",
        "Os direitos do cidadão são o maior obstáculo ao trabalho policial e precisam ser reduzidos no país",
        "A polícia brasileira tem uma longa história, que começou ainda no período colonial do país",
        "A repressão policial deve ser sempre máxima, porque só a força garante a ordem em qualquer caso",
        "A polícia eficiente é a que reprime o crime na medida necessária e respeita os direitos de todos",
      ],
      correta: 4,
      explicacao:
        "A tese precisa abarcar os três aspectos: eficiência, repressão proporcional e polícia como pilar democrático. Unir eficiência e respeito aos direitos cumpre isso.",
      explicacaoErradas:
        "Dizer que a eficiência depende de “deixar de lado os direitos” contraria o pilar democrático. Tratar os direitos como “o maior obstáculo” vai no mesmo erro. A frase sobre “uma longa história” é dado histórico, não tese. E repressão “sempre máxima” ignora a intensidade adequada pedida no segundo aspecto.",
      pegadinha: "Escolher uma tese radical achando que ela é mais “forte”.",
      conhecimento: "Art. 144 da Constituição: segurança pública é dever do Estado, direito e responsabilidade de todos.",
    },
  ],
};
