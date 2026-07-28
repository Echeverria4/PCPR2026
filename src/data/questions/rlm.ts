import type { Question } from "../../lib/types";

export const QUESTOES_RLM: Question[] = [
  {
    id: "rlm-001",
    materia: "rlm",
    topico: "Lógica proposicional",
    enunciado:
      "Considere a proposição: \"Se o suspeito estava no local, então ele é o autor do crime.\" A negação lógica dessa proposição condicional é:",
    alternativas: [
      "Se o suspeito não estava no local, então ele não é o autor.",
      "O suspeito estava no local e ele não é o autor do crime.",
      "O suspeito não estava no local ou ele é o autor do crime.",
      "Se ele é o autor do crime, então o suspeito estava no local.",
      "O suspeito não estava no local e ele não é o autor do crime.",
    ],
    correta: 1,
    explicacao:
      "A negação de \"p → q\" é \"p e não q\". Logo, a negação de \"se estava no local, então é o autor\" é \"estava no local e não é o autor\" — a condicional só é falsa nesse caso específico.",
    origem: "banco",
  },
  {
    id: "rlm-002",
    materia: "rlm",
    topico: "Tabelas-verdade",
    enunciado:
      "Uma proposição composta pelo conectivo \"ou\" (disjunção inclusiva, p ∨ q) é FALSA somente quando:",
    alternativas: [
      "Ambas as proposições simples são verdadeiras",
      "Apenas uma das proposições simples é verdadeira",
      "Ambas as proposições simples são falsas",
      "Uma das proposições é verdadeira e a outra é falsa, em qualquer ordem",
      "Pelo menos uma das proposições é verdadeira",
    ],
    correta: 2,
    explicacao:
      "A disjunção inclusiva (p ∨ q) só é falsa quando ambos os termos são falsos. Em todos os demais casos (ao menos um verdadeiro), o resultado é verdadeiro.",
    origem: "banco",
  },
  {
    id: "rlm-003",
    materia: "rlm",
    topico: "Argumentos e silogismos",
    enunciado:
      "\"Todo policial civil é servidor público. Alguns servidores públicos atuam em investigação criminal.\" A partir dessas duas premissas, é CORRETO concluir que:",
    alternativas: [
      "Todo policial civil atua em investigação criminal.",
      "Nenhum policial civil atua em investigação criminal.",
      "Alguns servidores públicos são policiais civis.",
      "Não é possível concluir, com certeza lógica, que policiais civis atuam em investigação criminal a partir apenas dessas premissas.",
      "Todos os servidores públicos são policiais civis.",
    ],
    correta: 3,
    explicacao:
      "As premissas não garantem uma conclusão necessária ligando \"policial civil\" a \"investigação criminal\", pois o \"alguns servidores públicos\" da segunda premissa pode não incluir os policiais civis especificamente. Silogismos com premissa particular (\"alguns\") não permitem conclusões universais nem afirmações certas sobre subconjuntos não especificados.",
    origem: "banco",
  },
  {
    id: "rlm-004",
    materia: "rlm",
    topico: "Sequências e padrões",
    enunciado: "Considere a sequência numérica: 2, 6, 12, 20, 30, ... O próximo termo é:",
    alternativas: ["36", "40", "42", "38", "44"],
    correta: 2,
    explicacao:
      "As diferenças entre termos consecutivos são 4, 6, 8, 10, ou seja, aumentam de 2 em 2. O próximo salto é 12, logo 30 + 12 = 42. (Nota: os termos correspondem a n(n+1): 1·2=2, 2·3=6, 3·4=12, 4·5=20, 5·6=30, 6·7=42.)",
    origem: "banco",
  },
  {
    id: "rlm-005",
    materia: "rlm",
    topico: "Razão, proporção e porcentagem",
    enunciado:
      "Em uma delegacia, 40% dos 150 inquéritos abertos no mês foram concluídos. Quantos inquéritos ainda estão em andamento?",
    alternativas: ["60", "90", "45", "100", "50"],
    correta: 1,
    explicacao:
      "40% de 150 = 60 inquéritos concluídos. Os inquéritos em andamento são 150 − 60 = 90.",
    origem: "banco",
  },
  {
    id: "rlm-006",
    materia: "rlm",
    topico: "Análise combinatória e probabilidade",
    enunciado:
      "Uma equipe de investigação precisa formar uma dupla de plantão escolhendo 2 policiais entre 6 disponíveis. Quantas duplas distintas são possíveis?",
    alternativas: ["12", "15", "30", "36", "20"],
    correta: 1,
    explicacao:
      "Como a ordem não importa (é uma combinação), o número de duplas é C(6,2) = 6!/(2!·4!) = (6×5)/2 = 15.",
    origem: "banco",
  },
  {
    id: "rlm-007",
    materia: "rlm",
    topico: "Teoria dos conjuntos",
    enunciado:
      "Em uma pesquisa com 100 policiais, 60 afirmaram usar o sistema A, 45 afirmaram usar o sistema B, e 25 afirmaram usar ambos os sistemas. Quantos policiais não usam nenhum dos dois sistemas?",
    alternativas: ["10", "15", "20", "25", "30"],
    correta: 2,
    explicacao:
      "Pela fórmula da união: |A ∪ B| = |A| + |B| − |A ∩ B| = 60 + 45 − 25 = 80. Os que não usam nenhum sistema são o complementar: 100 − 80 = 20.",
    origem: "banco",
  },
  {
    id: "rlm-008",
    materia: "rlm",
    topico: "Lógica proposicional",
    enunciado:
      "A proposição \"Não é verdade que o suspeito confessou e ficou calado\" equivale logicamente a:",
    alternativas: [
      "O suspeito não confessou e não ficou calado.",
      "O suspeito não confessou ou não ficou calado.",
      "O suspeito confessou ou ficou calado.",
      "Se o suspeito confessou, então ficou calado.",
      "O suspeito confessou e não ficou calado.",
    ],
    correta: 1,
    explicacao:
      "Pela Lei de De Morgan, a negação de \"p e q\" é \"não p ou não q\". Logo, a negação de \"confessou e ficou calado\" é \"não confessou ou não ficou calado\".",
    origem: "banco",
  },
  {
    id: "rlm-009",
    materia: "rlm",
    topico: "Equivalências e negação de condicionais e quantificadores",
    enunciado:
      "A negação da proposição \"Todo policial civil que atua na área rural possui viatura 4x4\" é:",
    alternativas: [
      "Nenhum policial civil que atua na área rural possui viatura 4x4.",
      "Existe (ao menos um) policial civil que atua na área rural e não possui viatura 4x4.",
      "Todo policial civil que atua na área rural não possui viatura 4x4.",
      "Existe um policial civil que não atua na área rural e possui viatura 4x4.",
      "Nenhum policial civil possui viatura 4x4.",
    ],
    correta: 1,
    explicacao:
      "A negação de uma proposição universal afirmativa (\"Todo A é B\") é uma proposição particular negativa (\"Algum A não é B\", ou seja, existe pelo menos um A que não é B) — regra central da negação de quantificadores.",
    origem: "banco",
  },
  {
    id: "rlm-010",
    materia: "rlm",
    topico: "Equivalências e negação de condicionais e quantificadores",
    enunciado: "A negação da proposição \"Algum documento apreendido estava assinado\" é:",
    alternativas: [
      "Algum documento apreendido não estava assinado.",
      "Nenhum documento apreendido estava assinado.",
      "Todo documento apreendido estava assinado.",
      "Existe um documento apreendido que estava assinado.",
      "Nenhum documento estava assinado, mas todos foram apreendidos.",
    ],
    correta: 1,
    explicacao:
      "A negação de uma proposição particular afirmativa (\"Algum A é B\") é uma proposição universal negativa (\"Nenhum A é B\") — se não existe sequer um caso, então, para todos os elementos do conjunto, a propriedade não se verifica.",
    origem: "banco",
  },
  {
    id: "rlm-011",
    materia: "rlm",
    topico: "Equivalências e negação de condicionais e quantificadores",
    enunciado:
      "A proposição condicional \"Se o mandado é válido, então a busca é legal\" (p → q) é logicamente equivalente a:",
    alternativas: [
      "\"Se a busca é legal, então o mandado é válido\" (q → p) — a chamada proposição recíproca.",
      "\"Se a busca não é legal, então o mandado não é válido\" (~q → ~p) — a contrapositiva.",
      "\"Se o mandado não é válido, então a busca não é legal\" (~p → ~q) — a chamada inversa.",
      "\"O mandado é válido e a busca não é legal\" (p ∧ ~q).",
      "\"O mandado não é válido e a busca é legal\" (~p ∧ q).",
    ],
    correta: 1,
    explicacao:
      "Uma condicional (p → q) é logicamente equivalente apenas à sua contrapositiva (~q → ~p) — inverter e negar os dois termos simultaneamente. A recíproca (q → p) e a inversa (~p → ~q) NÃO são equivalentes à condicional original, apenas equivalentes entre si.",
    origem: "banco",
  },
  {
    id: "rlm-012",
    materia: "rlm",
    topico: "Porcentagem, razão e proporção",
    enunciado:
      "O valor de uma apreensão de mercadorias foi reavaliado: primeiro sofreu um aumento de 20%, e, em seguida, sobre o novo valor, uma redução de 10%. Em relação ao valor original, o resultado final corresponde a um(a):",
    alternativas: [
      "Aumento de 10%",
      "Aumento de 8%",
      "Redução de 8%",
      "Valor exatamente igual ao original (variação líquida nula)",
      "Aumento de 30%",
    ],
    correta: 1,
    explicacao:
      "Aumentos e reduções percentuais sucessivos se multiplicam como fatores, não se somam diretamente: 1,20 × 0,90 = 1,08, ou seja, um aumento líquido de 8% em relação ao valor original — e não os 10% que resultariam de uma soma ingênua (+20% − 10%).",
    origem: "banco",
  },
  {
    id: "rlm-013",
    materia: "rlm",
    topico: "Contagem e probabilidade básica",
    enunciado: "De quantas formas distintas podem ser dispostos, em fila, 4 policiais diferentes para uma foto oficial?",
    alternativas: ["4", "8", "16", "24", "12"],
    correta: 3,
    explicacao:
      "Trata-se de uma permutação simples de 4 elementos distintos: P4 = 4! = 4×3×2×1 = 24 formas distintas de ordená-los em fila.",
    origem: "banco",
  },
  {
    id: "rlm-014",
    materia: "rlm",
    topico: "Lógica proposicional e tabelas-verdade",
    enunciado: "Uma proposição composta pelo conectivo \"e\" (conjunção, p ∧ q) é VERDADEIRA:",
    alternativas: [
      "Sempre, independentemente do valor lógico de p e q.",
      "Somente quando ambas as proposições simples, p e q, forem verdadeiras.",
      "Quando ao menos uma das proposições for verdadeira.",
      "Somente quando ambas as proposições forem falsas.",
      "Nunca, pois a conjunção é sempre falsa por definição.",
    ],
    correta: 1,
    explicacao:
      "A conjunção (p ∧ q) só é verdadeira quando ambos os termos, p e q, são simultaneamente verdadeiros; basta que um deles seja falso para que toda a conjunção seja falsa — o oposto do comportamento da disjunção inclusiva (p ∨ q).",
    origem: "banco",
  },
];
