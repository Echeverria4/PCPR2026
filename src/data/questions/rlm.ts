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
  {
    id: "rlm-015",
    materia: "rlm",
    topico: "Sequências lógicas e sequências numéricas",
    enunciado:
      "Na sequência numérica 3, 6, 12, 24, 48, ..., o próximo termo é obtido pela regra de formação:",
    alternativas: [
      "Somar 6 ao termo anterior.",
      "Multiplicar o termo anterior por 2 (progressão geométrica de razão 2).",
      "Somar os dois termos anteriores (padrão de Fibonacci).",
      "Subtrair 3 do termo anterior.",
      "Elevar o termo anterior ao quadrado.",
    ],
    correta: 1,
    explicacao:
      "A sequência 3, 6, 12, 24, 48 segue uma progressão geométrica de razão 2: cada termo é o dobro do anterior (3×2=6, 6×2=12, 12×2=24, 24×2=48), portanto o próximo termo seria 96. A estratégia de calcular a razão entre termos consecutivos (em vez da diferença) é o que revela padrões multiplicativos como este.",
    origem: "banco",
  },
  {
    id: "rlm-016",
    materia: "rlm",
    topico: "Sequências lógicas e sequências numéricas",
    enunciado:
      "Na sequência de letras A, C, F, J, O, ..., usando a posição de cada letra no alfabeto como chave numérica (A=1, C=3, F=6, J=10, O=15), o padrão de formação identificado é:",
    alternativas: [
      "Soma-se sempre 2 posições no alfabeto a cada termo.",
      "As diferenças entre as posições aumentam progressivamente: +2, +3, +4, +5, seguindo esse mesmo incremento até o próximo termo.",
      "Multiplica-se a posição anterior por 2 a cada termo.",
      "A sequência é aleatória, sem padrão identificável.",
      "Subtrai-se 1 posição a cada termo, com sinal alternado.",
    ],
    correta: 1,
    explicacao:
      "Convertendo as letras em posições alfabéticas (A=1, C=3, F=6, J=10, O=15), as diferenças entre termos consecutivos são +2, +3, +4, +5 — um incremento progressivo. Seguindo o padrão, o próximo salto seria +6, levando à posição 21, que corresponde à letra U — a técnica de calcular as diferenças entre termos consecutivos antes de buscar padrões mais complexos é o que revela essa regra.",
    origem: "banco",
  },
  {
    id: "rlm-017",
    materia: "rlm",
    topico: "Princípios de contagem: arranjo, combinação e permutação simples",
    enunciado:
      "Uma comissão de 3 pessoas deve ser formada a partir de um grupo de 10 candidatos, sem distinção de função entre os membros escolhidos (a ordem de escolha não altera o grupo final). O princípio de contagem adequado para calcular o número de comissões possíveis é:",
    alternativas: [
      "Permutação simples, pois todos os elementos disponíveis entram no agrupamento.",
      "Combinação, pois apenas parte dos elementos é escolhida e a ordem não importa.",
      "Arranjo, pois apenas parte dos elementos é escolhida e a ordem importa.",
      "Princípio multiplicativo aplicado sem qualquer fórmula específica de contagem.",
      "Progressão aritmética, já que o número de candidatos é fixo.",
    ],
    correta: 1,
    explicacao:
      "Como apenas parte dos 10 candidatos é escolhida (3 pessoas) e a ordem de escolha não altera o grupo final (a comissão é a mesma independentemente da ordem em que os membros foram selecionados), o princípio de contagem correto é a combinação — diferente do arranjo, que se aplica quando a ordem importa (ex.: definir cargos distintos dentro da comissão).",
    origem: "banco",
  },
  {
    id: "rlm-018",
    materia: "rlm",
    topico: "Princípios de contagem: arranjo, combinação e permutação simples",
    enunciado:
      "De quantas formas 5 corredores podem ser posicionados em 5 raias distintas de uma pista, considerando que cada raia é única e todos os corredores participam da corrida? O princípio de contagem aplicável é:",
    alternativas: [
      "Combinação, pois a ordem entre os corredores não importa.",
      "Permutação simples, pois todos os elementos disponíveis entram no agrupamento e a ordem (raia) importa.",
      "Arranjo, pois apenas parte dos corredores participa.",
      "Princípio aditivo, somando o número de raias ao número de corredores.",
      "Combinação com repetição, pois um corredor pode ocupar mais de uma raia.",
    ],
    correta: 1,
    explicacao:
      "Como todos os 5 corredores disponíveis entram no agrupamento (nenhum fica de fora) e a ordem (qual raia cada um ocupa) importa e gera resultados distintos, o princípio de contagem correto é a permutação simples (5! = 120 formas possíveis) — diferente da combinação, que seria usada se a ordem não importasse.",
    origem: "banco",
  },
  {
    id: "rlm-019",
    materia: "rlm",
    topico: "Diagramas lógicos (conjuntos, Venn) aplicados a problemas com dados do enunciado",
    enunciado:
      "Ao construir um diagrama de Venn para organizar dados de uma pesquisa com dois conjuntos que se sobrepõem, a técnica mais segura de preenchimento é:",
    alternativas: [
      "Preencher primeiro as regiões exclusivas de cada conjunto, e só depois a interseção.",
      "Preencher de dentro para fora: primeiro a interseção dos conjuntos (o núcleo central), depois as regiões exclusivas, subtraindo o que já foi alocado no centro.",
      "Preencher em qualquer ordem, pois o resultado final independe da sequência adotada.",
      "Preencher apenas o total da união, sem detalhar as regiões internas.",
      "Preencher primeiro o total geral da pesquisa, ignorando as interseções.",
    ],
    correta: 1,
    explicacao:
      "A técnica mais segura é sempre preencher o diagrama de dentro para fora: primeiro a interseção de todos os conjuntos (o núcleo central), depois as interseções de dois em dois subtraindo o que já foi preenchido no centro, e só por último as regiões exclusivas de cada conjunto, subtraindo tudo que já foi alocado — inverter essa ordem costuma levar a contagens duplicadas ou incompletas.",
    origem: "banco",
  },
  {
    id: "rlm-020",
    materia: "rlm",
    topico: "Diagramas lógicos (conjuntos, Venn) aplicados a problemas com dados do enunciado",
    enunciado:
      "Em uma pesquisa com 100 pessoas, 60 leem o jornal A, 45 leem o jornal B, e 25 leem ambos os jornais. Usando a fórmula da união de dois conjuntos, o número de pessoas que leem pelo menos um dos jornais é:",
    alternativas: ["105", "80", "70", "85", "95"],
    correta: 1,
    explicacao:
      "Pela fórmula n(A∪B) = n(A) + n(B) − n(A∩B): 60 + 45 − 25 = 80 pessoas leem pelo menos um dos jornais. A subtração da interseção evita a contagem duplicada das 25 pessoas que leem ambos os jornais, que de outra forma seriam somadas duas vezes.",
    origem: "banco",
  },
];
