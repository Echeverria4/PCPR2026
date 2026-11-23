import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-a04",
  resumo: {
    ideia:
      "Conjunto é uma reunião de elementos. Com diagramas (círculos que se cruzam), resolvemos problemas de contagem e também frases com todo, algum e nenhum. As operações principais são união (ou), intersecção (e), diferença (só um) e complementar (o que falta).",
    itens: [
      {
        termo: "Conjunto e elemento",
        faz: "Elemento pertence (∈) ou não pertence (∉) a um conjunto. Elemento repetido conta uma vez só: as letras de SOLDADO formam {S, O, L, D, A}.",
      },
      {
        termo: "Subconjunto",
        faz: "A ⊂ B quando todo elemento de A também está em B. O conjunto vazio e o próprio conjunto são sempre subconjuntos.",
      },
      {
        termo: "Número de subconjuntos",
        faz: "Um conjunto com n elementos tem 2ⁿ subconjuntos. Sem contar o próprio conjunto (subconjuntos próprios), são 2ⁿ − 1.",
      },
      {
        termo: "Diagramas com todo, algum e nenhum",
        faz: "“Todo A é B”: círculo A dentro de B. “Nenhum A é B”: círculos separados. “Algum A é B”: círculos que se cruzam, com pelo menos um elemento no meio.",
        pista: "Só tire conclusão que valha em todos os desenhos possíveis. Se der para desenhar de outro jeito, a conclusão não é obrigatória.",
      },
      {
        termo: "União (A ∪ B)",
        faz: "Elementos que estão em A ou em B (ou nos dois). n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
        pista: "Subtrai a parte do meio porque ela foi contada duas vezes.",
      },
      {
        termo: "Intersecção (A ∩ B)",
        faz: "Elementos que estão em A e em B ao mesmo tempo.",
      },
      {
        termo: "Diferença (A − B)",
        faz: "Elementos que estão em A e não estão em B: é o “só A”.",
      },
      {
        termo: "Complementar",
        faz: "O que falta para completar o total. O complementar de A ∪ B são os que não estão em nenhum dos dois; é igual a Aᶜ ∩ Bᶜ (De Morgan dos conjuntos).",
      },
      {
        termo: "Três conjuntos",
        faz: "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C).",
        pista: "No diagrama, comece sempre pelo centro (os três juntos) e vá para fora.",
      },
      {
        termo: "Mínimo e máximo da intersecção",
        faz: "Com total T, mínimo de A ∩ B = n(A) + n(B) − T (se der positivo). Máximo = o menor entre n(A) e n(B).",
      },
      {
        termo: "Tabela de dupla entrada",
        faz: "Quando há duas classificações (homem/mulher e com/sem curso), monte uma tabela com linhas, colunas e totais. Cada casa sai por subtração.",
      },
      {
        termo: "Intervalos",
        faz: "Colchete [ ] inclui o extremo; parêntese ( ) exclui. [2, 5) vai do 2 (incluído) até perto do 5 (sem o 5).",
        pista: "Na diferença A − B, o ponto que B deixa de fora continua em A − B.",
      },
    ],
  },
  questoes: [
    {
      topico: "Operações com conjuntos",
      subassunto: "União de dois conjuntos",
      dificuldade: 4,
      raciocinio: "Tirar os que não fazem nenhum curso e usar a fórmula da união.",
      enunciado:
        "Em um batalhão com 120 policiais, 70 fizeram o curso de tiro, 55 fizeram o curso de direção defensiva e 20 não fizeram nenhum dos dois. O número de policiais que fizeram os dois cursos é",
      alternativas: ["20", "25", "45", "30", "15"],
      correta: 1,
      explicacao: "Fizeram pelo menos um curso: 120 − 20 = 100. Pela união: 100 = 70 + 55 − x, então x = 25.",
      explicacaoErradas:
        "45 é quem fez só tiro (70 − 25). 30 é quem fez só direção defensiva (55 − 25). 20 é quem não fez nenhum.",
      pegadinha: "Somar 70 + 55 dá mais que o total de quem fez curso. A sobra é justamente quem foi contado duas vezes.",
      conhecimento: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
    },
    {
      topico: "Operações com conjuntos",
      subassunto: "Três conjuntos",
      dificuldade: 5,
      raciocinio: "Preencher o diagrama do centro para fora e somar só as partes de um conjunto.",
      enunciado:
        "Em um grupo de 100 policiais, 45 falam inglês, 40 falam espanhol e 30 usam Libras. Sabe-se que 15 falam inglês e espanhol, 10 falam inglês e usam Libras, 8 falam espanhol e usam Libras, e 5 dominam as três línguas. O número de policiais que dominam exatamente uma dessas três línguas é",
      alternativas: ["87", "13", "59", "64", "69"],
      correta: 3,
      explicacao: "Só inglês: 45 − 15 − 10 + 5 = 25. Só espanhol: 40 − 15 − 8 + 5 = 22. Só Libras: 30 − 10 − 8 + 5 = 17. Total: 25 + 22 + 17 = 64.",
      explicacaoErradas:
        "87 é quem domina pelo menos uma língua, e 13 é quem não domina nenhuma. 69 é 87 menos os 18 que dominam exatamente duas, mas sem tirar os 5 que dominam as três.",
      pegadinha: "Os 15 que falam inglês e espanhol incluem os 5 que dominam as três. Esquecer de devolver esses 5 muda tudo.",
      conhecimento: "Exatamente duas: (15 − 5) + (10 − 5) + (8 − 5) = 18. Conferência: 64 + 18 + 5 = 87.",
    },
    {
      topico: "Operações com conjuntos",
      subassunto: "Mínimo e máximo da intersecção",
      dificuldade: 5,
      raciocinio: "Mínimo: o excesso da soma sobre o total. Máximo: o menor dos dois conjuntos.",
      enunciado:
        "Em uma equipe de 30 agentes, 22 têm curso de tiro e 17 têm curso de primeiros socorros. O número mínimo e o número máximo de agentes com os dois cursos são, respectivamente,",
      alternativas: ["9 e 17.", "5 e 17.", "9 e 22.", "0 e 17.", "8 e 13."],
      correta: 0,
      explicacao: "Mínimo: 22 + 17 − 30 = 9 (só cabem 30 pessoas). Máximo: 17, quando todos os de primeiros socorros também têm tiro.",
      explicacaoErradas:
        "0 ignora que 22 + 17 passa de 30. 22 não pode ser máximo, porque só 17 têm primeiros socorros. 5 é a diferença 22 − 17, que não tem relação com a intersecção.",
      pegadinha: "O máximo nunca passa do menor conjunto.",
      conhecimento: "Mínimo de A ∩ B = n(A) + n(B) − total (quando positivo).",
    },
    {
      topico: "Diagramas lógicos",
      subassunto: "Conclusão obrigatória",
      dificuldade: 5,
      raciocinio: "Desenhar os diagramas e ficar só com o que vale em todos os desenhos possíveis.",
      enunciado:
        "Considere verdadeiras as afirmações: “Todo policial é servidor”, “Nenhum servidor é empresário” e “Algum empresário é atleta”. A partir delas, conclui-se necessariamente que",
      alternativas: [
        "Pelo menos um policial é atleta.",
        "Nenhum atleta é servidor.",
        "Algum servidor é atleta.",
        "Todo atleta é empresário.",
        "Algum atleta não é policial.",
      ],
      correta: 4,
      explicacao: "Existe um atleta que é empresário. Como nenhum empresário é servidor, e todo policial é servidor, esse atleta não é policial.",
      explicacaoErradas:
        "Os atletas podem ou não ser servidores ou policiais: dá para desenhar dos dois jeitos. Por isso “algum servidor é atleta”, “nenhum atleta é servidor” e “algum policial é atleta” não são obrigatórias. Nada diz que todo atleta é empresário.",
      pegadinha: "“Possível” não é “necessário”. Se um desenho contraria a conclusão, ela não serve.",
      conhecimento: "“Todo A é B”: A dentro de B. “Nenhum B é C”: B e C separados. Logo, A e C também ficam separados.",
    },
    {
      topico: "Conjuntos",
      subassunto: "Número de subconjuntos",
      dificuldade: 4,
      raciocinio: "Tirar as letras repetidas antes de usar 2ⁿ.",
      enunciado: "O número de subconjuntos do conjunto formado pelas letras da palavra SOLDADO é",
      alternativas: ["128", "10", "32", "31", "7"],
      correta: 2,
      explicacao: "As letras diferentes são S, O, L, D, A: 5 elementos. Subconjuntos: 2⁵ = 32.",
      explicacaoErradas:
        "128 = 2⁷ conta as 7 letras, mas O e D se repetem. 31 tira o próprio conjunto, o que só valeria para subconjuntos próprios. 10 é 2 × 5.",
      pegadinha: "Em conjunto, elemento repetido conta uma vez só.",
      conhecimento: "Com n elementos: 2ⁿ subconjuntos, incluindo o vazio e o próprio conjunto.",
    },
    {
      topico: "Operações com conjuntos",
      subassunto: "Diferença, intersecção e complementar",
      dificuldade: 5,
      raciocinio: "Listar os elementos e conferir cada afirmação.",
      enunciado:
        "Sejam U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {2, 4, 6, 8, 10} e B = {1, 2, 3, 4, 5}. Julgue as afirmações, marcando V para verdadeiro e F para falso.\n( ) A − B = {6, 8, 10}.\n( ) O complementar de A ∪ B em relação a U tem 2 elementos.\n( ) A ∩ B = {2, 4, 6}.\n( ) n(A ∪ B) = n(A) + n(B).\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, F, F.", "V, F, V, F.", "F, V, F, V.", "V, V, V, F.", "F, F, V, V."],
      correta: 0,
      explicacao: "A − B: elementos de A fora de B = {6, 8, 10} (V). A ∪ B = {1, 2, 3, 4, 5, 6, 8, 10}; falta {7, 9}: 2 elementos (V).",
      explicacaoErradas:
        "A ∩ B = {2, 4}; o 6 não está em B (F). n(A ∪ B) = 8, e n(A) + n(B) = 10; a soma só vale sem elementos em comum (F).",
      pegadinha: "A soma simples dos tamanhos só dá a união quando a intersecção é vazia.",
      conhecimento: "Complementar de A ∪ B = Aᶜ ∩ Bᶜ.",
    },
    {
      topico: "Conjuntos",
      subassunto: "Tabela de dupla entrada",
      dificuldade: 5,
      raciocinio: "Montar a tabela homens/mulheres × com/sem superior e completar por subtração.",
      enunciado:
        "Em um curso de formação com 80 alunos, 48 são homens. Ao todo, 50 alunos têm ensino superior, e 20 mulheres têm ensino superior. O número de homens sem ensino superior é",
      alternativas: ["12", "30", "18", "28", "20"],
      correta: 2,
      explicacao: "Homens com superior: 50 − 20 = 30. Homens sem superior: 48 − 30 = 18.",
      explicacaoErradas:
        "12 é o número de mulheres sem superior (32 − 20). 30 é o de homens com superior. 28 viria de 48 − 20, misturando homens com o número de mulheres.",
      pegadinha: "Os 50 com superior incluem homens e mulheres. Antes de usar o total dos homens, separe a parte deles.",
      conhecimento: "Conferência: sem superior = 80 − 50 = 30 = 18 homens + 12 mulheres.",
    },
    {
      topico: "Conjuntos",
      subassunto: "Intervalos",
      dificuldade: 5,
      raciocinio: "Desenhar os intervalos na reta e olhar cada extremo com cuidado.",
      enunciado: "Sejam os intervalos reais A = [−2, 5) e B = (1, 8]. É correto afirmar que",
      alternativas: ["A ∩ B = [1, 5]", "A ∪ B = [−2, 8)", "A − B = [−2, 1)", "B − A = (5, 8]", "A ∩ B = (1, 5)"],
      correta: 4,
      explicacao: "A parte comum começa logo depois do 1 (B não tem o 1) e termina logo antes do 5 (A não tem o 5): (1, 5).",
      explicacaoErradas:
        "A ∪ B inclui o 8, que está em B: [−2, 8]. A − B inclui o 1, porque o 1 está em A e não está em B: [−2, 1]. B − A inclui o 5, porque o 5 está em B e não está em A: [5, 8].",
      pegadinha: "Na diferença, o extremo que um intervalo exclui pode ficar no resultado.",
      conhecimento: "[ ] inclui o extremo; ( ) exclui.",
    },
    {
      topico: "Operações com conjuntos",
      subassunto: "Complementar e De Morgan",
      dificuldade: 5,
      raciocinio: "Montar o diagrama de M e T e calcular cada região.",
      enunciado:
        "Em um grupo de 60 policiais, 25 são motoristas, 30 são atletas e 10 são motoristas e atletas. Chame de M o conjunto dos motoristas, de T o dos atletas e de Xᶜ o complementar de um conjunto X nesse grupo. É correto afirmar que",
      alternativas: [
        "n(M − T) = 25",
        "n(complementar de M ∪ T) = 5",
        "n(Mᶜ ∩ T) = 30",
        "n(Mᶜ ∪ Tᶜ) = 50",
        "n(M ∪ T) = 55",
      ],
      correta: 3,
      explicacao: "Mᶜ ∪ Tᶜ é o complementar de M ∩ T (De Morgan): todos menos os 10 que são as duas coisas. 60 − 10 = 50.",
      explicacaoErradas:
        "M − T = 25 − 10 = 15. M ∪ T = 25 + 30 − 10 = 45, e o complementar dela é 15. Mᶜ ∩ T são os atletas que não são motoristas: 30 − 10 = 20.",
      pegadinha: "55 esquece de subtrair os 10 contados duas vezes.",
      conhecimento: "(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ e (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ.",
    },
    {
      topico: "Diagramas lógicos",
      subassunto: "Valor lógico a partir de “nenhum”",
      dificuldade: 5,
      raciocinio: "Desenhar os dois círculos separados e julgar cada frase.",
      enunciado:
        "Considere verdadeira a afirmação “Nenhum cabo é instrutor” e que existe pelo menos um cabo. Analise as afirmações.\nI. “Algum cabo é instrutor” é falsa.\nII. “Algum cabo não é instrutor” é verdadeira.\nIII. “Nenhum instrutor é cabo” é verdadeira.\nIV. “Todo cabo é instrutor” pode ser verdadeira.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I e III.", "Apenas I, II e III.", "Apenas II, III e IV.", "Apenas I e II.", "I, II, III e IV."],
      correta: 1,
      explicacao: "Círculos separados: nenhum cabo no círculo dos instrutores. I: V (é a negação). II: V, porque existe cabo e ele não é instrutor. III: V, porque “nenhum” vale nos dois sentidos.",
      explicacaoErradas:
        "IV está errada: “Todo cabo é instrutor” colocaria os cabos dentro do círculo dos instrutores, o oposto do que foi dado.",
      pegadinha: "“Nenhum A é B” pode ser lido ao contrário (“Nenhum B é A”). Já “Todo A é B” não pode.",
      conhecimento: "Universal verdadeira garante a particular do mesmo tipo (subalterna), desde que existam elementos.",
    },
  ],
};
