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

  {
    id: "rlm-021",
    materia: "rlm",
    topico: "Avaliação do valor lógico de proposições compostas",
    enunciado:
      "Considere verdadeiras as seguintes afirmações: o carro é preto; a moto não é branca; a bicicleta é vermelha. Com base nesses fatos, assinale a proposição composta cujo valor lógico é VERDADEIRO:",
    alternativas: [
      "Se o carro é preto e a moto não é branca, então a bicicleta não é vermelha.",
      "Se o carro não é preto ou a moto não é branca, então a bicicleta não é vermelha.",
      "Se a bicicleta não é vermelha ou o carro é preto, então a moto é branca.",
      "Se a bicicleta não é vermelha e o carro é preto, então a moto é branca.",
      "Se a moto não é branca, então o carro não é preto e a bicicleta é vermelha.",
    ],
    correta: 3,
    explicacao:
      "Como a bicicleta é vermelha, a afirmação 'a bicicleta não é vermelha' é falsa. Em uma condicional, quando o antecedente é falso, toda a proposição é automaticamente verdadeira, independentemente do consequente. Na alternativa correta, o antecedente é 'a bicicleta não é vermelha e o carro é preto' — como o primeiro termo dessa conjunção já é falso, a conjunção toda é falsa, tornando a condicional verdadeira por antecedente falso. Testando as demais alternativas da mesma forma, todas têm antecedente verdadeiro e consequente falso, o que as torna falsas.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-022",
    materia: "rlm",
    topico: "Negação de conjunções e disjunções (Leis de De Morgan)",
    enunciado:
      "Considere a sentença: \"Gilmar é médico e não fará o exame.\" A negação lógica dessa sentença é:",
    alternativas: [
      "Gilmar não é médico e não fará o exame.",
      "Gilmar não é médico e fará o exame.",
      "Se Gilmar não é médico, então fará o exame.",
      "Gilmar não é médico ou fará o exame.",
      "Gilmar é médico ou não fará o exame.",
    ],
    correta: 3,
    explicacao:
      "A sentença original tem a forma 'p e não q' (Gilmar é médico ∧ não fará o exame). Pela lei de De Morgan, a negação de uma conjunção (p ∧ q) é a disjunção das negações (¬p ∨ ¬q). Negando 'p' obtém-se 'Gilmar não é médico'; negando 'não q' obtém-se 'fará o exame'. Unindo com 'ou': 'Gilmar não é médico ou fará o exame.'",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-023",
    materia: "rlm",
    topico: "Negação de proposições condicionais",
    enunciado:
      "Considere a afirmação: \"Se o cozinheiro é competente, o almoço não vai atrasar.\" A negação dessa afirmação é:",
    alternativas: [
      "O cozinheiro não é competente e o almoço vai atrasar.",
      "O cozinheiro é competente e o almoço vai atrasar.",
      "O cozinheiro é competente ou o almoço não vai atrasar.",
      "O cozinheiro não é competente ou o almoço não vai atrasar.",
      "O cozinheiro é competente e o almoço não vai atrasar.",
    ],
    correta: 1,
    explicacao:
      "A afirmação original tem a forma 'se p, então não q' (p → ¬q), em que p é 'o cozinheiro é competente' e q é 'o almoço vai atrasar'. A negação de uma condicional (p → r) é sempre 'p e não r' — mantém o antecedente e nega o consequente. Aqui o consequente é 'não q', então sua negação é 'q'. Logo, a negação completa é 'o cozinheiro é competente e o almoço vai atrasar'.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-024",
    materia: "rlm",
    topico: "Dedução a partir de uma condicional de valor lógico conhecido",
    enunciado:
      "Sabe-se que a seguinte proposição é FALSA: \"Se a pesquisa foi concluída, então os dados foram divulgados.\" Portanto, é necessariamente verdadeira a proposição:",
    alternativas: [
      "A pesquisa foi concluída e os dados não foram divulgados.",
      "A pesquisa não foi concluída, mas os dados foram divulgados.",
      "Os dados foram divulgados ou a pesquisa não foi concluída.",
      "A pesquisa não foi concluída, nem os dados foram divulgados.",
      "Se os dados não foram divulgados, então a pesquisa não foi concluída.",
    ],
    correta: 0,
    explicacao:
      "Uma condicional (p → q) só é falsa quando o antecedente é verdadeiro e o consequente é falso. Logo, para a condicional dada ser falsa, é necessário que 'a pesquisa foi concluída' seja verdadeira e 'os dados foram divulgados' seja falsa — ou seja, os dados não foram divulgados. Isso corresponde exatamente a 'a pesquisa foi concluída e os dados não foram divulgados'.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-025",
    materia: "rlm",
    topico: "Equivalência lógica de condicionais com antecedente composto",
    enunciado:
      "Considere a sentença: \"Se a bola é branca e a caixa não é azul, então a ficha é vermelha.\" Uma sentença logicamente equivalente a essa é:",
    alternativas: [
      "Se a bola não é branca e a caixa é azul, então a ficha não é vermelha.",
      "Se a ficha é vermelha, então a bola é branca e a caixa não é azul.",
      "A bola não é branca ou a caixa é azul ou a ficha é vermelha.",
      "A bola não é branca ou a caixa não é azul ou a ficha é vermelha.",
      "A bola não é branca e a caixa é azul e a ficha é vermelha.",
    ],
    correta: 2,
    explicacao:
      "Toda condicional (p → q) é equivalente à disjunção (não p ou q). Aqui, o antecedente é composto: p = 'a bola é branca e a caixa não é azul'. Negando esse antecedente pela lei de De Morgan, 'não p' se torna 'a bola não é branca ou a caixa é azul' — a negação de uma conjunção é a disjunção das negações, e a negação de 'a caixa não é azul' é 'a caixa é azul'. Unindo com o consequente: 'a bola não é branca ou a caixa é azul ou a ficha é vermelha'.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-026",
    materia: "rlm",
    topico: "Contrapositiva de condicionais com consequente composto",
    enunciado:
      "Uma norma de segurança estabelece: \"Se manuseia material hematológico, então deve estar de luvas e deve utilizar óculos de proteção.\" A afirmação logicamente equivalente a essa norma é:",
    alternativas: [
      "Se não manuseia material hematológico, então não está de luvas ou não utiliza óculos de proteção.",
      "Se está de luvas e utiliza óculos de proteção, então manuseia material hematológico.",
      "Se está de luvas ou utiliza óculos de proteção, então manuseia material hematológico.",
      "Se não está de luvas e não utiliza óculos de proteção, então não manuseia material hematológico.",
      "Se não está de luvas ou não utiliza óculos de proteção, então não manuseia material hematológico.",
    ],
    correta: 4,
    explicacao:
      "A contrapositiva de uma condicional (p → q) — que nega e troca a ordem dos termos, formando 'não q → não p' — é sempre logicamente equivalente à condicional original. Aqui, q é composto: 'estar de luvas e utilizar óculos'. Negando q pela lei de De Morgan: 'não está de luvas ou não utiliza óculos'. Isso dá a contrapositiva 'se não está de luvas ou não utiliza óculos de proteção, então não manuseia material hematológico', que é a norma equivalente.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-027",
    materia: "rlm",
    topico: "Reconhecimento de tautologias",
    enunciado:
      "Sejam p e q duas proposições. Sobre a sentença S, dada por (p → q) ↔ (~p ∨ q), construindo sua tabela-verdade para todas as combinações possíveis de valores lógicos de p e q, os valores lógicos de S são:",
    alternativas: [
      "Sempre verdadeiro, em qualquer combinação de valores de p e q.",
      "Verdadeiro em três combinações e falso em uma.",
      "Verdadeiro em duas combinações e falso em duas.",
      "Falso em três combinações e verdadeiro em uma.",
      "Sempre falso, em qualquer combinação de valores de p e q.",
    ],
    correta: 0,
    explicacao:
      "A equivalência (p → q) ≡ (~p ∨ q) é uma das equivalências fundamentais da lógica proposicional: toda condicional pode ser reescrita como a disjunção da negação do antecedente com o consequente. Por serem sempre logicamente equivalentes, a bicondicional entre as duas formas é uma tautologia, verdadeira para absolutamente todas as combinações de valores lógicos de p e q, o que se confirma testando as quatro combinações possíveis (V-V, V-F, F-V, F-F).",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-028",
    materia: "rlm",
    topico: "Lei da exportação em condicionais com antecedente composto",
    enunciado:
      "Considere a sentença: \"Se a borracha é vermelha e o lápis é preto, então o caderno é azul.\" Uma sentença logicamente equivalente a essa é:",
    alternativas: [
      "Se a borracha é vermelha, então o lápis não é preto ou o caderno é azul.",
      "Se a borracha não é vermelha ou o lápis não é preto, então o caderno não é azul.",
      "Se o caderno não é azul, então a borracha não é vermelha e o lápis não é preto.",
      "Se o caderno não é azul, então a borracha é vermelha ou o lápis é preto.",
      "Se a borracha é vermelha, então o lápis é preto e o caderno é azul.",
    ],
    correta: 0,
    explicacao:
      "Pela lei da exportação, uma condicional cujo antecedente é uma conjunção, (p ∧ q) → r, é equivalente a p → (não q ou r), já que 'q → r' equivale a 'não q ou r'. Aqui, p = 'a borracha é vermelha', q = 'o lápis é preto' e r = 'o caderno é azul'. Aplicando a equivalência: 'se a borracha é vermelha, então o lápis não é preto ou o caderno é azul'. A contrapositiva correta seria formada com 'ou' (não com 'e') entre as negações, o que descarta a alternativa que troca esse conectivo.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-029",
    materia: "rlm",
    topico: "Dedução lógica a partir de premissas condicionais (uso da contrapositiva)",
    enunciado:
      "Considere a premissa: \"Se Maria não foi ao teatro, nem foi ao cinema, então João perdeu a aposta e não teve onde ficar.\" Sabendo que João não perdeu a aposta e que Maria não foi ao cinema, é correto concluir que:",
    alternativas: [
      "Maria não foi ao teatro.",
      "João teve onde ficar.",
      "Maria foi ao teatro.",
      "João ficou com Maria.",
      "João não teve onde ficar.",
    ],
    correta: 2,
    explicacao:
      "A contrapositiva da premissa é: 'se João não perdeu a aposta ou João teve onde ficar, então Maria foi ao teatro ou Maria foi ao cinema'. Como é dado que João não perdeu a aposta, essa condição antecedente já se cumpre, independentemente de ele ter ou não onde ficar, garantindo que o consequente é verdadeiro: Maria foi ao teatro ou foi ao cinema. Como também é dado que Maria não foi ao cinema, resta que Maria foi ao teatro.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-030",
    materia: "rlm",
    topico: "Dedução lógica a partir de premissas condicionais (uso da contrapositiva)",
    enunciado:
      "Considere as premissas: \"Se o teatro não é grande, nem chique, então o cinema não é pequeno, nem pobre\"; \"o cinema é pequeno\"; \"o teatro não é chique.\" Com base nessas informações, é correto deduzir que:",
    alternativas: [
      "o teatro é grande.",
      "o cinema é pobre.",
      "o teatro não é grande.",
      "o cinema não é pobre.",
      "o teatro é pequeno, apesar de ser chique.",
    ],
    correta: 0,
    explicacao:
      "A contrapositiva da primeira premissa é: 'se o cinema é pequeno ou o cinema é pobre, então o teatro é grande ou o teatro é chique'. Como é dado que o cinema é pequeno, o antecedente dessa contrapositiva já se cumpre, garantindo que o consequente é verdadeiro: o teatro é grande ou é chique. Como também é dado que o teatro não é chique, resta que o teatro é grande.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-031",
    materia: "rlm",
    topico: "Problemas de lógica com múltiplas variáveis (quadros lógicos)",
    enunciado:
      "Três motoristas — Amarildo, Benedito e Clodoaldo — trabalham em uma empresa de entregas. Um deles dirige uma van, outro um furgão e o terceiro um caminhão; cada um atende a uma região diferente da cidade: centro, norte ou leste. Sabe-se que: Amarildo não foi para a região leste; Benedito não foi para a região norte e não dirige van nem furgão; o motorista do furgão foi para a região leste. Com base nessas informações, é correto concluir que Clodoaldo foi designado para a região e o veículo:",
    alternativas: [
      "centro, dirigindo o furgão.",
      "centro, dirigindo a van.",
      "norte, dirigindo o furgão.",
      "norte, dirigindo a van.",
      "leste, dirigindo o furgão.",
    ],
    correta: 4,
    explicacao:
      "Como Benedito não dirige van nem furgão, ele dirige o caminhão. Como o motorista do furgão foi para a região leste e Amarildo não foi para leste, Amarildo não dirige o furgão; como o caminhão já é de Benedito, Amarildo dirige a van, restando o furgão para Clodoaldo. Logo, Clodoaldo foi para a região leste, associada ao furgão. Com Clodoaldo em leste e Benedito impedido de ir para norte, Benedito fica com o centro, e Amarildo fica com a região que resta, norte.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-032",
    materia: "rlm",
    topico: "Problemas de lógica com múltiplas variáveis (quadros lógicos)",
    enunciado:
      "Analice, Berenice e Candice trabalham em departamentos diferentes de uma repartição pública — Recursos Humanos, Financeiro e Logística — e usam crachás de cores diferentes — amarelo, branco e cinza. Sabe-se que: quem trabalha no Financeiro usa crachá cinza; Analice usa crachá amarelo; Candice não trabalha na Logística e não usa crachá cinza. Com base nessas informações, é correto afirmar que:",
    alternativas: [
      "Analice trabalha no Financeiro.",
      "Berenice trabalha na Logística.",
      "Candice trabalha nos Recursos Humanos.",
      "quem usa crachá branco trabalha na Logística.",
      "quem usa crachá amarelo trabalha nos Recursos Humanos.",
    ],
    correta: 2,
    explicacao:
      "Como Analice usa crachá amarelo e quem é do Financeiro usa cinza, Analice não trabalha no Financeiro. Como Candice não usa cinza, ela também não trabalha no Financeiro; somada à informação de que Candice não trabalha na Logística, resta que Candice trabalha em Recursos Humanos. Como Recursos Humanos já está ocupado por Candice e Analice não está no Financeiro, Analice trabalha na Logística, restando o Financeiro para Berenice.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-033",
    materia: "rlm",
    topico: "Problemas de 'apenas uma afirmação é verdadeira'",
    enunciado:
      "Alice, Laura e Catarina foram a um shopping, e cada uma comprou um item diferente: bolsa, tênis ou casaco. Sabe-se que, das três afirmações a seguir, apenas uma é verdadeira: 'Laura comprou a bolsa'; 'Catarina não comprou o tênis'; 'Laura não comprou o casaco'. Nesse caso, é correto afirmar que:",
    alternativas: [
      "Catarina comprou a bolsa.",
      "Laura comprou o par de tênis.",
      "Alice comprou o casaco.",
      "Laura comprou a bolsa.",
      "Alice não comprou o par de tênis.",
    ],
    correta: 0,
    explicacao:
      "Testando as 6 distribuições possíveis dos três itens entre as três amigas e contando, em cada uma, quantas das três afirmações seriam verdadeiras, apenas uma distribuição produz exatamente uma afirmação verdadeira, como exige o enunciado: Alice comprou o tênis, Laura comprou o casaco e Catarina comprou a bolsa — nessa distribuição, apenas 'Catarina não comprou o tênis' é verdadeira, e as outras duas são falsas. Todas as demais distribuições produzem zero, duas ou três afirmações verdadeiras, o que contraria a condição do enunciado.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
  {
    id: "rlm-034",
    materia: "rlm",
    topico: "Raciocínio sobre dias da semana e calendário",
    enunciado:
      "Há dois dias, Bartolomeu disse: \"Em cinco dias, será véspera do Dia das Mães.\" Sabendo que o Dia das Mães sempre cai em um domingo, e que Bartolomeu falou a verdade, amanhã será:",
    alternativas: [
      "terça-feira.",
      "quarta-feira.",
      "quinta-feira.",
      "sexta-feira.",
      "sábado.",
    ],
    correta: 2,
    explicacao:
      "Contando a partir do dia em que Bartolomeu falou (dois dias atrás, em relação a hoje), 'em cinco dias' chega a um dia que é véspera do Dia das Mães — ou seja, um sábado, já que o Dia das Mães é domingo. Esse sábado está 5 dias depois de 'dois dias atrás', ou seja, 3 dias depois de hoje. Se hoje mais 3 dias é sábado, hoje é quarta-feira, e amanhã (hoje mais 1 dia) é quinta-feira.",
    origem: "banco",
    fonte: "Adaptada de questão FGV (TAQ de Raciocínio Lógico, curso preparatório PC-PR — Agente de Polícia Judiciária)",
  },
];
