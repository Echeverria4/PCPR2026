import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "discursivas-08",
  resumo: {
    ideia:
      "Rodada de temas ligados à PRF e a direitos: fronteiras e contrabando, crimes de ódio e meio ambiente. A lição é responder ao recorte: quando o tema cita a PRF ou a fronteira, o texto precisa falar delas, e não só do fenômeno geral.",
    itens: [
      {
        termo: "Fronteira e PRF",
        faz: "A faixa de fronteira tem até 150 km de largura ao longo das fronteiras terrestres (art. 20, § 2º, da Constituição). As rodovias federais que a cortam são rota de contrabando, descaminho e tráfico de armas e drogas, e a PRF atua na fiscalização delas.",
      },
      {
        termo: "Contrabando x descaminho",
        faz: "Contrabando é importar ou exportar mercadoria proibida (art. 334-A do Código Penal); descaminho é iludir o imposto devido pela entrada ou saída de mercadoria permitida (art. 334).",
      },
      {
        termo: "Crime de ódio",
        faz: "Violência motivada por preconceito de raça, cor, etnia, religião, origem, orientação sexual ou identidade de gênero. A Lei 7.716/1989 pune o racismo, e o STF enquadrou a homotransfobia nessa lei em 2019 (ADO 26).",
      },
      {
        termo: "Meio ambiente",
        faz: "Art. 225 da Constituição: todos têm direito ao meio ambiente ecologicamente equilibrado, e o dever de defendê-lo é do poder público e da coletividade. A Lei 9.605/1998 trata dos crimes ambientais; nas rodovias, a PRF flagra transporte ilegal de madeira e de animais silvestres.",
      },
      {
        termo: "Introdução por citação de lei",
        faz: "Abrir com um dispositivo legal ligado ao tema é um começo seguro, desde que a citação venha seguida do tema e da tese.",
      },
      {
        termo: "Tangenciar o tema",
        faz: "Escrever sobre o assunto amplo e só encostar no recorte pedido. Os aspectos ficam sem resposta e a nota de conteúdo cai.",
      },
    ],
    cuidado:
      "Não confunda tangenciamento (fala do assunto e só roça o tema) com fuga ao tema (fala de outra coisa). A fuga costuma levar à nota zero; o tangenciamento derruba a nota de conteúdo.",
  },
  questoes: [
    {
      topico: "Planejamento pela proposta",
      subassunto: "Tangenciamento",
      dificuldade: 5,
      raciocinio: "Assunto geral sem o recorte pedido = tangenciar, não fugir.",
      enunciado:
        "O tema pedido é “a atuação da PRF no combate ao contrabando e ao tráfico nas regiões de fronteira”. O candidato escreve sobre o crime organizado em geral, suas causas e sua expansão nas cidades, sem mencionar a fronteira nem a PRF. Esse texto:",
      alternativas: [
        "cumpre a proposta, porque o crime organizado inclui o contrabando e, por isso, o tema fica implícito",
        "tem nota máxima de conteúdo, desde que a gramática esteja correta e as ideias, bem encadeadas",
        "foge totalmente ao tema, porque crime organizado e contrabando não têm nenhuma relação entre si",
        "deve ser corrigido só pela introdução, já que o desenvolvimento pode tratar de qualquer assunto",
        "fica no assunto geral e tangencia o tema, sem tratar da fronteira nem do papel da PRF pedidos",
      ],
      correta: 4,
      explicacao:
        "O texto trata do assunto (crime organizado) e não chega ao recorte (fronteira e PRF). É tangenciamento: o tema não foi abandonado, mas os aspectos pedidos ficam sem resposta, e a nota de conteúdo despenca.",
      explicacaoErradas:
        "O tema não pode ficar implícito: dizer que “o tema fica implícito” ignora o recorte pedido. Gramática boa não garante “nota máxima de conteúdo”. Crime organizado e contrabando se relacionam, então “não têm nenhuma relação entre si” é falso, e não há fuga total. E o texto é corrigido inteiro, não “só pela introdução”.",
      pegadinha: "Achar que o tema fica implícito no assunto, ou que qualquer desvio zera o texto.",
      conhecimento: "Quando o tema cita a PRF, a PRF tem de aparecer no texto.",
    },
    {
      topico: "Planejamento pela proposta",
      subassunto: "Introdução por citação de lei",
      dificuldade: 4,
      raciocinio: "Abrir com dispositivo legal = introdução por citação.",
      enunciado:
        "Em um tema sobre crimes ambientais nas rodovias federais, o candidato abre o texto assim: “Segundo o art. 225 da Constituição Federal de 1988, todos têm direito ao meio ambiente ecologicamente equilibrado.” Em seguida, apresenta o tema e a tese. Esse tipo de introdução é:",
      alternativas: [
        "por citação de lei, que dá base ao texto e precisa ser seguida do tema e da tese do candidato",
        "por questionamento, porque o leitor é levado a perguntar se tem ou não esse direito garantido pela Constituição",
        "por oposição, porque contrapõe o direito ao meio ambiente ao direito de ir e vir nas rodovias",
        "por roteiro, porque já anuncia, uma a uma, as partes que o desenvolvimento vai tratar depois",
        "proibida em dissertação, porque citar a Constituição na abertura é cópia do texto motivador",
      ],
      correta: 0,
      explicacao:
        "Abrir com um dispositivo legal é a introdução por citação de lei, doutrina ou jurisprudência. Ela dá base ao texto, desde que venha seguida do tema e da tese.",
      explicacaoErradas:
        "Não há pergunta no trecho, então não é “por questionamento”. Nada é refutado, por isso não é “por oposição”. O trecho não lista os tópicos do texto, como faria a introdução “por roteiro”. E a citação de lei é permitida: não é “proibida em dissertação”.",
      pegadinha: "Achar que citar a Constituição é o mesmo que copiar o texto motivador.",
      conhecimento: "Art. 225 da Constituição: meio ambiente ecologicamente equilibrado, dever do poder público e da coletividade.",
    },
  ],
};
