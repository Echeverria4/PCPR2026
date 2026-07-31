import type { ConteudoTopico } from "../../lib/types";

export const CONTEUDO_RLM: ConteudoTopico[] = [
  {
    materia: "rlm",
    topico: "Lógica proposicional e tabelas-verdade",
    texto: `Uma proposição é toda sentença declarativa à qual se pode atribuir um único valor lógico: verdadeiro (V) ou falso (F), nunca os dois simultaneamente. Proposições simples não contêm conectivos lógicos; proposições compostas combinam duas ou mais proposições simples por meio de conectivos, cujo valor lógico é determinado pela tabela-verdade de cada conectivo.

Os principais conectivos são: negação (¬p, "não p"), que inverte o valor de p; conjunção (p ∧ q, "p e q"), verdadeira apenas quando p e q são simultaneamente verdadeiras; disjunção inclusiva (p ∨ q, "p ou q"), falsa apenas quando p e q são ambas falsas; disjunção exclusiva ("ou p, ou q", nunca os dois), verdadeira apenas quando p e q têm valores diferentes; condicional (p → q, "se p, então q"), falsa apenas no caso em que o antecedente p é verdadeiro e o consequente q é falso, sendo verdadeira em todos os outros três casos; e bicondicional (p ↔ q, "p se e somente se q"), verdadeira quando p e q têm o mesmo valor lógico, ambas V ou ambas F.

Para montar a tabela-verdade de uma proposição composta, listam-se todas as combinações possíveis de valores V/F das proposições simples envolvidas, em número de 2 elevado à quantidade de proposições simples, e calcula-se o valor da composta linha a linha, respeitando a precedência dos conectivos e a prioridade dos parênteses.

O ponto mais cobrado, e mais contraintuitivo, é o comportamento da condicional: ela só é falsa quando o "se" promete algo que não se cumpre, isto é, antecedente verdadeiro e consequente falso; nos demais casos, mesmo com antecedente falso, ela é considerada verdadeira por convenção lógica.`,
    exemplos: [
      "'Se o suspeito estava no local (p), então ele é o autor (q).' Essa condicional só é falsa quando p é V e q é F, ou seja, quando o suspeito estava no local mas não é o autor. Se ele nem estava no local (p = F), a condicional é considerada verdadeira, independentemente de ser ou não o autor.",
      "Tabela-verdade de p ∧ q: (V,V) resulta V; (V,F) resulta F; (F,V) resulta F; (F,F) resulta F — a conjunção só é verdadeira na linha em que ambas as proposições são verdadeiras.",
    ],
  },
  {
    materia: "rlm",
    topico: "Equivalências e negação de condicionais e quantificadores",
    texto: `Negar uma proposição composta não significa simplesmente negar cada uma de suas partes isoladamente: existem regras lógicas precisas para cada conectivo, conhecidas como Leis de De Morgan e regras de negação da condicional e dos quantificadores.

A negação da conjunção "p e q" é "não p ou não q": ¬(p ∧ q) equivale a ¬p ∨ ¬q. A negação da disjunção "p ou q" é "não p e não q": ¬(p ∨ q) equivale a ¬p ∧ ¬q. A negação da condicional "se p, então q" é "p e não q": ¬(p → q) equivale a p ∧ ¬q, ou seja, a condicional só é desmentida no único caso em que ela é falsa, antecedente verdadeiro e consequente falso; não se nega uma condicional trocando o "se...então" por outro "se...então".

Quanto às equivalências, a condicional p → q é logicamente equivalente à sua contrapositiva, ¬q → ¬p, em que se nega e se inverte a ordem dos dois termos simultaneamente, e apenas a ela. A recíproca (q → p) e a inversa (¬p → ¬q) não são equivalentes à condicional original; são equivalentes apenas entre si. Um erro comum é confundir a contrapositiva com a recíproca: a contrapositiva de "se p, então q" é "se não q, então não p", nunca "se q, então p".

Quanto aos quantificadores, a negação de uma proposição universal afirmativa ("Todo A é B") é uma proposição particular negativa ("Algum A não é B", isto é, existe ao menos um A que não é B). A negação de uma proposição particular afirmativa ("Algum A é B") é uma proposição universal negativa ("Nenhum A é B"). E a negação de "Nenhum A é B" é "Algum A é B".`,
    exemplos: [
      "Negação de 'Se o mandado é válido, então a busca é legal': 'O mandado é válido e a busca não é legal' — aplica-se ¬(p→q) equivale a p ∧ ¬q, mantendo o antecedente e negando o consequente.",
      "Negação de 'Todo policial que atua na área rural possui viatura 4x4': 'Existe, ao menos um, policial que atua na área rural e não possui viatura 4x4' — a negação do universal afirmativo é o particular negativo, nunca outro universal.",
    ],
  },
  {
    materia: "rlm",
    topico: "Teoria dos conjuntos",
    texto: `Um conjunto é uma coleção de elementos com uma característica em comum. As operações básicas entre conjuntos são: união (A ∪ B, todos os elementos que pertencem a A ou a B, ou a ambos), interseção (A ∩ B, apenas os elementos que pertencem simultaneamente a A e a B), diferença (A − B, os elementos de A que não pertencem a B) e complementar (elementos do conjunto universo que não pertencem a A).

A fórmula mais cobrada em concursos é a do número de elementos da união de dois conjuntos: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). A subtração da interseção evita contar duas vezes os elementos que pertencem a ambos os conjuntos simultaneamente. Quando o problema envolve três conjuntos, a fórmula se expande, subtraindo as três interseções duplas e devolvendo a interseção tripla: n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C).

Esses problemas costumam ser resolvidos com o auxílio de um diagrama de Venn, preenchido sempre "de dentro para fora": primeiro a interseção mais interna, o que pertence a todos os grupos simultaneamente, depois as interseções parciais, descontando o que já foi contado, e por fim as regiões exclusivas de cada conjunto. Uma pegadinha frequente é confundir "pertence a A e a B" (interseção) com "pertence apenas a A" (diferença, excluindo a interseção) — o enunciado precisa ser lido com atenção para saber se os números informados já excluem ou ainda incluem a superposição entre os grupos.`,
    exemplos: [
      "Em uma delegacia, 60 servidores usam o sistema A, 45 usam o sistema B e 25 usam ambos, em um total de 100 servidores. Quantos não usam nenhum? n(A∪B) = 60+45−25 = 80; não usam nenhum = 100−80 = 20.",
      "Se 30 pessoas gostam de futebol, 20 gostam de vôlei e 8 gostam dos dois esportes, quantas gostam de pelo menos um? n(A∪B) = 30+20−8 = 42 pessoas gostam de pelo menos um dos dois esportes.",
    ],
  },
  {
    materia: "rlm",
    topico: "Porcentagem, razão e proporção",
    texto: `Porcentagem é uma razão especial, de denominador 100, usada para expressar uma parte em relação a um todo: 20% equivale à fração 20/100, ou 0,20 em forma decimal. Para calcular "x% de um valor V", multiplica-se V pela forma decimal do percentual (20% de 150 = 0,20 × 150 = 30).

Um ponto frequentemente cobrado é a variação percentual sucessiva: quando um valor sofre dois ou mais aumentos ou reduções percentuais em sequência, os fatores multiplicativos se combinam por multiplicação, não por soma simples. Um aumento de 20% corresponde ao fator 1,20; uma redução de 10% corresponde ao fator 0,90. Um valor que sofre primeiro um aumento de 20% e depois uma redução de 10% resulta em 1,20 × 0,90 = 1,08 do valor original, ou seja, um aumento líquido de 8%, e não os 10% que uma soma ingênua (+20% −10%) sugeriria.

Razão é a comparação entre duas grandezas por meio de uma divisão: a razão entre a e b, com b diferente de zero, é a/b. Proporção é a igualdade entre duas razões (a/b = c/d), e sua propriedade fundamental estabelece que o produto dos meios é igual ao produto dos extremos (a×d = b×c), base para resolver a regra de três.

A regra de três simples relaciona duas grandezas: se diretamente proporcionais, aumentam ou diminuem juntas na mesma razão; se inversamente proporcionais, uma aumenta enquanto a outra diminui, e o produto entre elas permanece constante. A regra de três composta envolve três ou mais grandezas relacionadas simultaneamente, exigindo identificar, para cada par, se a proporcionalidade é direta ou inversa antes de montar a equação.`,
    exemplos: [
      "Um produto de R$ 200 sofre alta de 15% e, no mês seguinte, queda de 10% sobre o novo preço. Preço final: 200 × 1,15 × 0,90 = 200 × 1,035 = R$ 207 — variação líquida de apenas 3,5%, não de 5% (15%−10%).",
      "Se 4 peritos concluem um laudo em 6 dias, trabalhando no mesmo ritmo, quantos dias 8 peritos levariam? Grandezas inversamente proporcionais, pois mais peritos exigem menos dias: 4×6 = 8×x, logo x = 3 dias.",
    ],
  },
  {
    materia: "rlm",
    topico: "Contagem e probabilidade básica",
    texto: `A análise combinatória estuda as formas de agrupar ou ordenar elementos de um conjunto. O princípio fundamental da contagem afirma que, se uma decisão pode ser tomada em m etapas sucessivas e independentes, com a₁, a₂, ..., aₘ possibilidades em cada etapa, o número total de resultados possíveis é o produto a₁ × a₂ × ... × aₘ.

Três estruturas são as mais cobradas: a permutação simples, usada quando se organizam n elementos distintos em sequência, todos utilizados, e a ordem importa (Pₙ = n!); o arranjo, quando se escolhem e organizam p elementos distintos entre n disponíveis, e a ordem importa (A(n,p) = n!/(n−p)!); e a combinação, quando se escolhem p elementos entre n disponíveis, mas a ordem não importa (C(n,p) = n!/[p!×(n−p)!]). A pergunta-chave para decidir entre arranjo e combinação é: trocar a ordem dos elementos escolhidos gera um resultado diferente? Se sim, é arranjo; se não, é combinação — por isso formar uma dupla de plantão é combinação, pois não há distinção de ordem entre os dois policiais, mas definir quem é o titular e quem é o suplente seria arranjo.

A probabilidade básica de um evento, em um espaço amostral equiprovável, em que todos os resultados são igualmente prováveis, é definida como P = número de casos favoráveis dividido pelo número de casos possíveis, sempre um valor entre 0 e 1, ou entre 0% e 100%. A probabilidade do evento complementar é P(não A) = 1 − P(A). Quando dois eventos são independentes, isto é, a ocorrência de um não afeta o outro, a probabilidade de ambos ocorrerem é o produto das probabilidades individuais: P(A e B) = P(A) × P(B).`,
    exemplos: [
      "Escolher 2 policiais entre 6 para formar uma dupla de plantão, em que a ordem não importa: C(6,2) = 6!/(2!×4!) = (6×5)/2 = 15 duplas possíveis.",
      "Em uma urna com 4 bolas azuis e 6 vermelhas, qual a probabilidade de sortear uma bola azul? P = casos favoráveis/casos possíveis = 4/10 = 0,4 = 40%.",
    ],
  },
  {
    materia: "rlm",
    topico: "Sequências lógicas e sequências numéricas",
    origem: "aposta",
    texto: `Questões de sequências lógicas e numéricas pedem para identificar o padrão (regra de formação) que rege uma série de números, letras ou figuras, a fim de prever o elemento seguinte ou um elemento faltante no meio da série. A estratégia mais segura e eficiente, antes de tentar "adivinhar" o padrão, é calcular sistematicamente as diferenças entre termos consecutivos: se essas diferenças forem constantes, trata-se de uma progressão aritmética (soma-se sempre o mesmo valor a cada termo); se as diferenças não forem constantes, mas a razão entre termos consecutivos for constante, trata-se de uma progressão geométrica (multiplica-se sempre pelo mesmo valor); e se nem diferenças nem razões forem constantes à primeira vista, vale calcular as diferenças das diferenças (segunda ordem), o que revela padrões quadráticos, ou investigar relações entre termos não consecutivos, como somar os dois termos anteriores para obter o próximo (padrão de Fibonacci).\n\nOutro padrão comum é a alternância entre duas ou mais regras aplicadas ciclicamente: por exemplo, uma sequência pode somar 3 aos termos de posição ímpar e multiplicar por 2 os de posição par, exigindo que se separem mentalmente as duas subsequências antes de identificar cada regra isoladamente. Em sequências de letras, a técnica mais eficaz é converter cada letra em sua posição numérica no alfabeto (A=1, B=2, ..., Z=26), revelando um padrão numérico oculto por trás da aparência textual, que pode então ser tratado com as mesmas técnicas de diferenças e razões usadas em sequências puramente numéricas.`,
    exemplos: [
      "Na sequência 3, 7, 15, 31, 63, ..., as diferenças entre termos consecutivos são 4, 8, 16, 32 — elas dobram a cada passo, revelando que a diferença é uma progressão geométrica de razão 2; o próximo termo é 63 + 64 = 127.",
      "Na sequência de letras B, D, G, K, P, ..., convertendo para posições numéricas (2, 4, 7, 11, 16), as diferenças são 2, 3, 4, 5 — uma progressão aritmética de diferenças, indicando que o próximo salto é de 6, levando à posição 22, que corresponde à letra V.",
    ],
  },
  {
    materia: "rlm",
    topico: "Princípios de contagem: arranjo, combinação e permutação simples",
    origem: "aposta",
    texto: `Aprofundando a análise combinatória além da distinção básica entre arranjo, combinação e permutação simples, dois casos particulares costumam gerar confusão em prova. O primeiro é a permutação com elementos repetidos: quando, entre os n elementos a serem permutados, alguns se repetem, o número de permutações distintas é menor do que n!, pois trocar de posição dois elementos idênticos não gera um resultado visualmente diferente. Nesse caso, divide-se n! pelo produto dos fatoriais das quantidades de cada elemento repetido: para uma palavra com n letras, das quais um grupo se repete a vezes e outro grupo se repete b vezes, o número de anagramas distintos é n!/(a!×b!). O segundo caso é a combinação complementar: em muitos problemas, é mais rápido calcular o total de combinações possíveis e subtrair as combinações que não atendem a uma condição específica (como "pelo menos um elemento de determinado tipo") do que calcular diretamente todos os casos que atendem à condição, especialmente quando essa condição admite múltiplas variações internas (pelo menos 1, ou pelo menos 2, ou todos).\n\nOutro ponto de atenção é reconhecer situações de contagem combinada, em que se aplica primeiro o princípio fundamental da contagem para etapas independentes, e dentro de uma das etapas emprega-se uma combinação ou arranjo — por exemplo, escolher primeiro o líder de uma equipe (arranjo, pois a posição de líder é distinta) e depois formar o restante da equipe entre os candidatos remanescentes (combinação, pois as demais posições são equivalentes entre si).`,
    exemplos: [
      "O número de anagramas distintos da palavra \"ARARA\" (5 letras, sendo 3 A's e 2 R's) é 5!/(3!×2!) = 120/12 = 10, e não 5! = 120, pois trocar as posições entre os A's idênticos entre si (e entre os R's idênticos entre si) não gera anagramas visualmente diferentes.",
      "Para calcular de quantas formas é possível escolher uma comissão de 4 pessoas entre 10 candidatos, incluindo pelo menos 1 mulher, sabendo que há 3 mulheres e 7 homens no grupo, é mais rápido calcular o total de comissões possíveis, C(10,4) = 210, e subtrair as comissões formadas só por homens, C(7,4) = 35, chegando a 210 − 35 = 175 comissões com pelo menos 1 mulher.",
    ],
  },
  {
    materia: "rlm",
    topico: "Diagramas lógicos (conjuntos, Venn) aplicados a problemas com dados do enunciado",
    origem: "aposta",
    texto: `Um formato de questão muito recorrente, especialmente em provas organizadas pela FGV, apresenta um enunciado narrativo com números de pessoas ou casos que possuem certas características (por exemplo, resultados de uma pesquisa sobre hábitos ou sobre o cometimento de diferentes tipos de infração), exigindo que o candidato organize esses dados em um diagrama de Venn antes de responder à pergunta final. A técnica mais segura para não errar é preencher o diagrama sempre "de dentro para fora": primeiro identifica-se a interseção de todos os conjuntos envolvidos simultaneamente (o núcleo central do diagrama, quando o enunciado fornecer esse dado, geralmente a última informação a ser dada, mas a primeira a ser usada); em seguida, preenchem-se as interseções de dois conjuntos, subtraindo do valor informado o que já foi alocado ao núcleo central (pois, ao informar "tantas pessoas fazem A e B", o enunciado normalmente já inclui quem também faz C, exigindo o desconto); e, por último, preenchem-se as regiões exclusivas de cada conjunto isolado, subtraindo de seu total tudo que já foi distribuído nas interseções calculadas anteriormente.\n\nO maior risco desse tipo de questão não é o cálculo em si, mas a interpretação do enunciado: é essencial identificar se os números fornecidos já representam apenas a região exclusiva (só A, sem sobreposição) ou o total do conjunto A (incluindo quem também está em B ou C), pois o mesmo número tratado como um ou outro leva a preenchimentos completamente diferentes do diagrama. Uma leitura apressada do enunciado é a causa mais comum de erro nesse tipo de questão, mais do que qualquer dificuldade na fórmula da união de conjuntos em si.`,
    exemplos: [
      "Em uma delegacia, de 50 casos analisados, 10 envolvem furto e roubo simultaneamente. Se o enunciado informa que 25 casos envolvem furto (nesse total), a região exclusiva de 'apenas furto' é 25 − 10 = 15, e não 25, pois o total de furto já inclui os 10 casos que também são de roubo.",
      "Em uma pesquisa com 100 policiais sobre o uso de três equipamentos (colete, câmera corporal e rádio), ao preencher o diagrama de Venn, o primeiro número a ser lançado é sempre o de quem usa os três simultaneamente, pois é o único dado que não precisa de nenhum ajuste ou subtração antes de ser inserido no diagrama.",
    ],
  },
];
