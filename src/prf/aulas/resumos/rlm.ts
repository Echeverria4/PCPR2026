import type { ResumoAula } from "./tipos";

export const RLM: Record<string, ResumoAula> = {
  "rlm-01": {
    ideia:
      "A lógica estuda frases que podem ser verdadeiras ou falsas e o que se pode concluir a partir delas, inclusive com “todo”, “algum” e “nenhum”.",
    itens: [
      {
        termo: "Proposição",
        faz: "Frase declarativa que só pode ser verdadeira (V) ou falsa (F), nunca as duas.",
        pista: "Dá para responder “é verdade ou mentira?”.",
      },
      {
        termo: "Três princípios",
        faz: "Identidade (p é p), não contradição (não é V e F ao mesmo tempo) e terceiro excluído (ou é V ou é F).",
      },
      {
        termo: "Quantificador universal",
        faz: "“Todo”, “para todo”, “qualquer” (∀): a afirmação vale para todos os elementos.",
      },
      {
        termo: "Quantificador existencial",
        faz: "“Algum”, “existe”, “pelo menos um” (∃): basta um elemento para a afirmação ser verdadeira.",
      },
      {
        termo: "Negar quantificador",
        faz: "“Todo A é B” vira “algum A não é B”; “algum A é B” vira “nenhum A é B”.",
        pista: "A negação troca todo ↔ algum e nega o resto da frase.",
      },
    ],
    cuidado:
      "A negação de “todo agente é pontual” não é “nenhum agente é pontual”: é “algum agente não é pontual”.",
  },
  "rlm-02": {
    ideia:
      "Um argumento é um conjunto de premissas que levam a uma conclusão; ele é válido quando a conclusão sai obrigatoriamente das premissas.",
    itens: [
      {
        termo: "Premissas e conclusão",
        faz: "Premissas são as informações dadas; conclusão é o que se afirma a partir delas.",
        pista: "A conclusão costuma vir depois de “logo”, “portanto”, “então”.",
      },
      {
        termo: "Argumento válido",
        faz: "Se todas as premissas forem verdadeiras, a conclusão é necessariamente verdadeira.",
        pista: "Validade depende da forma, não do assunto.",
      },
      {
        termo: "Modus ponens",
        faz: "Se p então q; p aconteceu; logo, q aconteceu. É válido.",
      },
      {
        termo: "Modus tollens",
        faz: "Se p então q; q não aconteceu; logo, p não aconteceu. É válido.",
      },
      {
        termo: "Falácias da condicional",
        faz: "Afirmar o consequente (q, logo p) e negar o antecedente (não p, logo não q) são inválidos.",
        pista: "Teste: tente premissas verdadeiras com conclusão falsa; se der, o argumento é inválido.",
      },
    ],
    cuidado:
      "Argumento válido pode ter conclusão falsa (quando alguma premissa é falsa); e conclusão verdadeira não torna o argumento válido.",
  },
  "rlm-03": {
    ideia:
      "Nem toda frase é proposição: só as declarativas que podem receber um valor lógico, V ou F.",
    itens: [
      {
        termo: "Sentença declarativa",
        faz: "Afirma ou nega algo sobre o mundo e pode ser julgada como V ou F.",
        pista: "“A PRF fiscaliza rodovias federais.” é proposição.",
      },
      {
        termo: "Pergunta, ordem e exclamação",
        faz: "Não são proposições: não dá para dizer se são verdadeiras ou falsas.",
        pista: "Termina em “?” ou “!”, ou manda fazer algo: não é proposição.",
      },
      {
        termo: "Sentença aberta",
        faz: "Tem uma variável sem valor (“x + 3 = 10”, “ele é motorista”): ainda não é proposição.",
        pista: "Vira proposição quando a variável recebe um valor ou um quantificador.",
      },
      {
        termo: "Paradoxo",
        faz: "Frase que se contradiz (“esta frase é falsa”): não pode ser V nem F, logo não é proposição.",
      },
      {
        termo: "Simples × composta",
        faz: "Simples traz uma só ideia; composta junta duas ou mais com conectivos (e, ou, se… então…).",
      },
    ],
    cuidado:
      "Sujeito indeterminado ou pronome sem referência (“ele foi aprovado”) deixa a frase aberta: não é proposição.",
  },
  "rlm-04": {
    ideia:
      "Proposições simples se juntam por conectivos e formam compostas; a tabela-verdade mostra todos os valores possíveis.",
    itens: [
      {
        termo: "Proposição simples",
        faz: "Uma única ideia, sem conectivo: “O carro é branco.”.",
      },
      {
        termo: "Proposição composta",
        faz: "Duas ou mais simples ligadas por conectivos: “O carro é branco e a moto é preta.”.",
      },
      {
        termo: "Linhas da tabela-verdade",
        faz: "São 2ⁿ linhas, em que n é o número de proposições simples diferentes.",
        pista: "2 proposições = 4 linhas; 3 = 8 linhas; 4 = 16 linhas.",
      },
      {
        termo: "Tautologia e contradição",
        faz: "Tautologia é sempre V em todas as linhas; contradição é sempre F.",
        pista: "“p ou não p” é tautologia; “p e não p” é contradição.",
      },
      {
        termo: "Contingência",
        faz: "Fica V em algumas linhas e F em outras.",
      },
    ],
    cuidado:
      "Conte só as proposições simples diferentes: em “p e q, ou não p”, são 2 (p e q), logo 4 linhas.",
  },
  "rlm-05": {
    ideia: "Cada conectivo tem uma regra própria para dizer quando a proposição composta é verdadeira.",
    itens: [
      {
        termo: "Conjunção (e, ∧)",
        faz: "Só é verdadeira quando as duas partes são verdadeiras.",
        pista: "“Mas”, “porém” e “nem” (e não) também funcionam como “e”.",
      },
      {
        termo: "Disjunção inclusiva (ou, ∨)",
        faz: "Só é falsa quando as duas partes são falsas.",
      },
      {
        termo: "Disjunção exclusiva (ou… ou, ⊻)",
        faz: "É verdadeira quando exatamente uma das partes é verdadeira.",
        pista: "Valores diferentes = V; iguais = F.",
      },
      {
        termo: "Condicional (se… então, →)",
        faz: "Só é falsa quando a primeira parte é V e a segunda é F.",
        pista: "Também aparece como “quando”, “sempre que”, “caso”.",
      },
      {
        termo: "Bicondicional (se e somente se, ↔)",
        faz: "É verdadeira quando as duas partes têm o mesmo valor.",
      },
    ],
    cuidado:
      "Na condicional, se a primeira parte for falsa, a frase inteira já é verdadeira, seja qual for a segunda.",
  },
  "rlm-06": {
    ideia:
      "Duas proposições são equivalentes quando têm a mesma tabela-verdade: dizem a mesma coisa com outras palavras.",
    itens: [
      {
        termo: "Contrapositiva",
        faz: "p → q equivale a ~q → ~p: inverte a ordem e nega as duas partes.",
        pista: "“Se chove, a pista molha” = “se a pista não molhou, não choveu”.",
      },
      {
        termo: "Condicional em “ou”",
        faz: "p → q equivale a ~p ∨ q: nega a primeira, troca por “ou” e mantém a segunda.",
      },
      {
        termo: "Bicondicional",
        faz: "p ↔ q equivale a (p → q) ∧ (q → p): a ida e a volta ao mesmo tempo.",
      },
      {
        termo: "Recíproca e inversa",
        faz: "q → p (recíproca) e ~p → ~q (inversa) não equivalem a p → q.",
        pista: "Só inverter ou só negar não vale; tem que fazer as duas coisas.",
      },
      {
        termo: "Como conferir",
        faz: "Monte as duas tabelas-verdade: se todas as linhas coincidirem, são equivalentes.",
      },
    ],
    cuidado:
      "A banca troca a contrapositiva (inverte e nega) pela recíproca (só inverte): a recíproca não é equivalente.",
  },
  "rlm-07": {
    ideia:
      "As Leis de De Morgan ensinam a negar o “e” e o “ou”; junto com elas vêm as negações da condicional e da bicondicional.",
    itens: [
      {
        termo: "Negar o “e”",
        faz: "~(p ∧ q) = ~p ∨ ~q: nega as duas partes e troca “e” por “ou”.",
      },
      {
        termo: "Negar o “ou”",
        faz: "~(p ∨ q) = ~p ∧ ~q: nega as duas partes e troca “ou” por “e”.",
      },
      {
        termo: "Negar o “se… então”",
        faz: "~(p → q) = p ∧ ~q: mantém a primeira, troca por “e” e nega a segunda.",
        pista: "“Se dirigiu, então não bebeu” nega-se como “dirigiu e bebeu”.",
      },
      {
        termo: "Negar o “se e somente se”",
        faz: "~(p ↔ q) = p ⊻ q: vira “ou p ou q”.",
      },
      {
        termo: "Negar quantificadores",
        faz: "Todo → algum… não; algum → nenhum; nenhum → algum.",
      },
    ],
    cuidado: "A negação de uma condicional nunca é outra condicional: é uma conjunção (p e não q).",
  },
  "rlm-08": {
    ideia:
      "A álgebra das proposições usa propriedades, como na matemática, para simplificar expressões sem montar a tabela-verdade.",
    itens: [
      {
        termo: "Comutativa e associativa",
        faz: "Trocar a ordem (p ∧ q = q ∧ p) ou o agrupamento não muda o valor no “e” e no “ou”.",
      },
      {
        termo: "Distributiva",
        faz: "p ∧ (q ∨ r) = (p ∧ q) ∨ (p ∧ r), e vale também trocando “e” por “ou”.",
      },
      {
        termo: "Idempotência e dupla negação",
        faz: "p ∧ p = p; p ∨ p = p; ~~p = p.",
      },
      {
        termo: "Absorção",
        faz: "p ∧ (p ∨ q) = p; p ∨ (p ∧ q) = p.",
        pista: "Quando p aparece sozinho e dentro do parêntese, a expressão vira p.",
      },
      {
        termo: "Identidade e complemento",
        faz: "p ∧ V = p; p ∨ F = p; p ∨ ~p = V (tautologia); p ∧ ~p = F (contradição).",
      },
    ],
    cuidado: "A comutativa não vale na condicional: p → q não é o mesmo que q → p.",
  },
  "rlm-09": {
    ideia:
      "A análise combinatória conta de quantas maneiras algo pode acontecer, sem precisar listar tudo.",
    itens: [
      {
        termo: "Princípio multiplicativo",
        faz: "Etapas que acontecem uma depois da outra (“e”): multiplique as possibilidades.",
        pista: "3 camisas e 2 calças = 3 × 2 = 6 combinações de roupa.",
      },
      {
        termo: "Princípio aditivo",
        faz: "Casos que não acontecem juntos (“ou”): some as possibilidades.",
      },
      {
        termo: "Permutação",
        faz: "Organizar todos os elementos em fila: n! (com letras repetidas, divida pelos fatoriais das repetições).",
        pista: "Anagramas e filas são permutação.",
      },
      {
        termo: "Arranjo",
        faz: "Escolher parte dos elementos quando a ordem importa: n! ÷ (n − p)!.",
        pista: "Senha, placa, pódio, cargos diferentes.",
      },
      {
        termo: "Combinação",
        faz: "Escolher parte dos elementos quando a ordem não importa: n! ÷ [p! × (n − p)!].",
        pista: "Comissão, grupo, equipe, aperto de mão.",
      },
    ],
    cuidado:
      "Pergunte: trocar a ordem gera outro resultado? Se sim, é arranjo; se não, é combinação.",
  },
  "rlm-10": {
    ideia: "Probabilidade é a chance de um evento: casos favoráveis divididos pelos casos possíveis.",
    itens: [
      {
        termo: "Fórmula básica",
        faz: "P = favoráveis ÷ possíveis; sempre entre 0 (impossível) e 1 (certo).",
      },
      {
        termo: "Evento complementar",
        faz: "P(não A) = 1 − P(A).",
        pista: "“Pelo menos um” costuma sair mais rápido por 1 − P(nenhum).",
      },
      {
        termo: "“Ou” (união)",
        faz: "P(A ou B) = P(A) + P(B) − P(A e B); se não acontecem juntos, só some.",
      },
      {
        termo: "“E” (eventos independentes)",
        faz: "P(A e B) = P(A) × P(B), quando um não interfere no outro.",
      },
      {
        termo: "Probabilidade condicional",
        faz: "P(A dado B) = P(A e B) ÷ P(B): a chance de A sabendo que B já aconteceu.",
        pista: "“Sabendo que”, “dado que”: o espaço possível encolhe.",
      },
    ],
    cuidado: "Sorteio sem reposição muda o total a cada retirada: o denominador diminui.",
  },
  "rlm-11": {
    ideia:
      "Conjuntos agrupam elementos; as operações e os diagramas de Venn resolvem problemas de contagem e de “todo/algum/nenhum”.",
    itens: [
      {
        termo: "União (A ∪ B)",
        faz: "Elementos que estão em A, em B ou nos dois.",
        pista: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
      },
      {
        termo: "Interseção (A ∩ B)",
        faz: "Elementos que estão em A e em B ao mesmo tempo.",
      },
      {
        termo: "Diferença (A − B)",
        faz: "Elementos que estão em A e não estão em B.",
      },
      {
        termo: "Subconjuntos",
        faz: "Um conjunto com n elementos tem 2ⁿ subconjuntos; o vazio é subconjunto de qualquer conjunto.",
      },
      {
        termo: "Diagramas lógicos",
        faz: "Todo A é B: A dentro de B. Nenhum A é B: círculos separados. Algum A é B: círculos com parte em comum.",
      },
    ],
    cuidado:
      "Com três conjuntos, preencha o diagrama de dentro para fora: comece pela parte comum aos três.",
  },
  "rlm-12": {
    ideia:
      "A matemática básica da prova cobra porcentagem, proporção, MMC e MDC, geometria e matrizes em problemas do dia a dia.",
    itens: [
      {
        termo: "Porcentagem",
        faz: "Aumento de 20% = × 1,2; desconto de 20% = × 0,8; aumentos seguidos se multiplicam.",
      },
      {
        termo: "Regra de três",
        faz: "Grandezas diretamente proporcionais crescem juntas; inversamente, uma sobe e a outra desce.",
        pista: "Mais agentes, menos dias para a mesma tarefa: inversa.",
      },
      {
        termo: "MMC e MDC",
        faz: "MMC: quando eventos voltam a coincidir. MDC: dividir em partes iguais do maior tamanho possível.",
      },
      {
        termo: "Geometria",
        faz: "Retângulo b × h; triângulo (b × h) ÷ 2; círculo πr²; Pitágoras a² = b² + c².",
      },
      {
        termo: "Matrizes",
        faz: "Soma termo a termo; produto linha × coluna (colunas da 1ª = linhas da 2ª); determinante 2 × 2 = ad − bc.",
      },
    ],
    cuidado:
      "Aumento de 10% seguido de desconto de 10% não volta ao valor inicial: 1,1 × 0,9 = 0,99, perda de 1%.",
  },
};
