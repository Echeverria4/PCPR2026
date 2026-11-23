import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-a02",
  resumo: {
    ideia:
      "Proposição é toda frase que pode ser julgada verdadeira (V) ou falsa (F). Com o “não”, o “e” e o “ou”, juntamos proposições simples e descobrimos o valor das compostas. A prova cobra três coisas: reconhecer o que é proposição, negar frases corretamente e tirar conclusões a partir de afirmações dadas.",
    itens: [
      {
        termo: "Proposição",
        faz: "Frase declarativa que pode ser julgada V ou F: “O soldado chegou às 7 horas.”",
      },
      {
        termo: "O que não é proposição",
        faz: "Perguntas, ordens, exclamações, sentenças abertas (com termo indefinido, como “x + 1 = 2”) e paradoxos (“Esta frase é falsa”). Nenhuma delas pode ser julgada V ou F.",
        pista: "Se não dá para responder “é verdade” ou “é mentira”, não é proposição.",
      },
      {
        termo: "Três princípios",
        faz: "Identidade: o que é verdadeiro é verdadeiro. Não contradição: nada é V e F ao mesmo tempo. Terceiro excluído: ou é V ou é F, não existe terceira opção.",
      },
      {
        termo: "Proposições categóricas",
        faz: "Usam todo, nenhum, algum e algum… não. “Todo” e “nenhum” são universais; “algum” é particular.",
      },
      {
        termo: "Contraditórias, contrárias e subcontrárias",
        faz: "Contraditórias têm sempre valores opostos (todo × algum não; nenhum × algum). Contrárias podem ser ambas F, nunca ambas V (todo × nenhum). Subcontrárias podem ser ambas V, nunca ambas F (algum × algum não).",
      },
      {
        termo: "Negação",
        faz: "Negar é dizer que a frase é falsa, usando o “não”. A negação de “Vai chover” é “Não vai chover”, e não “Vai fazer sol”. Negar duas vezes volta à frase original.",
        pista: "Antônimo quase nunca é negação: entre “chover” e “fazer sol” existem outras possibilidades.",
      },
      {
        termo: "Negação dos categóricos",
        faz: "Todo A é B → Algum A não é B. Nenhum A é B → Algum A é B. Algum A é B → Nenhum A é B.",
      },
      {
        termo: "Negação na matemática",
        faz: "A negação de “igual” é “diferente”; de “maior” é “menor ou igual”; de “menor” é “maior ou igual”.",
      },
      {
        termo: "Conjunção “e” (∧)",
        faz: "Só é verdadeira quando as duas partes são verdadeiras. Basta uma falsa para tudo ficar falso. “Mas”, “porém” e “embora” têm o valor lógico de “e”.",
      },
      {
        termo: "Disjunção “ou” (∨)",
        faz: "Só é falsa quando as duas partes são falsas. Basta uma verdadeira para tudo ficar verdadeiro.",
      },
      {
        termo: "Leis de De Morgan",
        faz: "Negar “p e q” dá “não p ou não q”. Negar “p ou q” dá “não p e não q” (o mesmo que “nem p nem q”).",
        pista: "Na negação, o “e” vira “ou”, o “ou” vira “e”, e cada parte recebe um “não”.",
      },
      {
        termo: "Deduções rápidas",
        faz: "“E” verdadeiro: as duas partes são V. “Ou” falso: as duas são F. “Ou” verdadeiro com uma parte F: a outra é V. “E” falso com uma parte V: a outra é F.",
      },
      {
        termo: "Tabela-verdade",
        faz: "Com n proposições simples, a tabela tem 2ⁿ linhas. Ligadas só por “e”, a composta é V em uma única linha; ligadas só por “ou”, é F em uma única linha.",
      },
    ],
  },
  questoes: [
    {
      topico: "Proposições",
      subassunto: "O que é e o que não é proposição",
      dificuldade: 4,
      raciocinio: "Procurar a única frase declarativa que pode ser julgada verdadeira ou falsa.",
      enunciado: "Entre as sentenças a seguir, a única que é uma proposição é:",
      alternativas: [
        "Que abordagem bem-feita, soldado!",
        "Apresente o documento do veículo, por favor.",
        "O soldado chegou ao batalhão antes das 7 horas.",
        "Será que a viatura chegou ao local da ocorrência a tempo?",
        "x + 5 > 12",
      ],
      correta: 2,
      explicacao: "A frase sobre o soldado declara um fato que pode ser verdadeiro ou falso. Por isso é uma proposição.",
      explicacaoErradas:
        "A exclamação, a ordem e a pergunta não podem ser julgadas V ou F. “x + 5 > 12” é uma sentença aberta: o valor depende de x, que não foi definido.",
      pegadinha: "Ter número e sinal de “maior” não torna a sentença uma proposição. Sem saber o valor de x, não há como julgar.",
      conhecimento: "Sentença aberta vira proposição quando a variável recebe um valor: “7 + 5 > 12” é uma proposição (falsa).",
    },
    {
      topico: "Proposições categóricas",
      subassunto: "Contraditórias, contrárias e subcontrárias",
      dificuldade: 5,
      raciocinio: "Classificar cada par de frases e lembrar a regra de cada tipo.",
      enunciado:
        "Analise as afirmações sobre proposições categóricas.\nI. “Todo soldado é motorista” e “Algum soldado não é motorista” nunca têm o mesmo valor lógico.\nII. “Todo soldado é motorista” e “Nenhum soldado é motorista” podem ser, as duas, falsas.\nIII. “Algum soldado é motorista” e “Algum soldado não é motorista” podem ser, as duas, falsas.\nIV. A negação de “Nenhum soldado é motorista” é “Todo soldado é motorista”.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I e II.", "Apenas I, II e IV.", "Apenas II e III.", "Apenas I e IV.", "I, II, III e IV."],
      correta: 0,
      explicacao: "I: são contraditórias, sempre com valores opostos. II: são contrárias; se só parte dos soldados for motorista, as duas são falsas.",
      explicacaoErradas:
        "III está errada: são subcontrárias e nunca são ambas falsas. Se nenhum soldado for motorista, “algum não é” fica verdadeira; se todos forem, “algum é” fica verdadeira. IV está errada: a negação de “Nenhum soldado é motorista” é “Algum soldado é motorista”.",
      pegadinha: "O contrário de “nenhum” parece ser “todo”, mas para negar basta um caso: “algum”.",
      conhecimento: "Contrárias (todo × nenhum): podem ser ambas F. Subcontrárias (algum × algum não): podem ser ambas V.",
    },
    {
      topico: "Negação",
      subassunto: "Negação do “e” (De Morgan)",
      dificuldade: 5,
      raciocinio: "Trocar o “e” por “ou” e negar cada parte.",
      enunciado: "A negação lógica de “O motorista usava cinto e o farol estava ligado” é:",
      alternativas: [
        "O motorista não usava cinto e o farol não estava ligado.",
        "O motorista usava cinto ou o farol não estava ligado.",
        "Nem o motorista usava cinto, nem o farol estava ligado.",
        "O motorista não usava cinto, mas o farol continuava ligado.",
        "O motorista não usava cinto ou o farol não estava ligado.",
      ],
      correta: 4,
      explicacao: "Pela lei de De Morgan, não (p e q) = não p ou não q. Basta que uma das partes seja falsa para a frase original ser falsa.",
      explicacaoErradas:
        "Negar as duas partes com “e” (ou com “nem… nem”) exige que as duas falhem, o que é mais do que o necessário. A versão com “ou” que nega só o farol esqueceu o cinto. A versão com “mas” descreve só um dos casos possíveis.",
      pegadinha: "“Nem… nem” é a negação do “ou”, não do “e”.",
      conhecimento: "não (p ou q) = não p e não q. não (p e q) = não p ou não q.",
    },
    {
      topico: "Deduções",
      subassunto: "Encadeamento de “e” e “ou”",
      dificuldade: 5,
      raciocinio: "Começar pela afirmação simples e ir resolvendo uma de cada vez.",
      enunciado:
        "Considere verdadeiras as afirmações a seguir.\nI. Ana é soldado ou Bruno é cabo.\nII. É falso que Bruno é cabo e Carla é sargento.\nIII. Carla é sargento ou Davi é tenente.\nIV. Davi não é tenente.\nA partir delas, conclui-se que",
      alternativas: [
        "Ana não é soldado e Bruno é cabo.",
        "Ana é soldado, Bruno não é cabo e Carla é sargento.",
        "Ana é soldado, Bruno é cabo e Carla não é sargento.",
        "Bruno não é cabo, Carla não é sargento e Davi é tenente.",
        "Não é possível saber se Ana é soldado, mas Bruno não é cabo.",
      ],
      correta: 1,
      explicacao: "IV: Davi não é tenente. III é “ou” verdadeiro com uma parte falsa, então Carla é sargento. II é “e” falso com Carla sargento, então Bruno não é cabo. I é “ou” verdadeiro com Bruno não cabo, então Ana é soldado.",
      explicacaoErradas:
        "Qualquer opção com Bruno cabo contradiz a II. Davi tenente contradiz a IV. E é possível, sim, saber de Ana: a afirmação I obriga que ela seja soldado.",
      pegadinha: "Começar pela afirmação I não leva a lugar nenhum. A porta de entrada é sempre a proposição simples (IV).",
      conhecimento: "Em cadeias de afirmações, procure primeiro a frase simples ou o “e” verdadeiro: eles dão valores certos.",
    },
    {
      topico: "Negação",
      subassunto: "Antônimos, dupla negação e matemática",
      dificuldade: 4,
      raciocinio: "Julgar cada negação lembrando que antônimo não é negação, exceto nos sinais da matemática.",
      enunciado:
        "Julgue as afirmações, marcando V para verdadeiro e F para falso.\n( ) A negação de “Amanhã vai chover” é “Amanhã vai fazer sol”.\n( ) A negação de “x > 5” é “x ≤ 5”.\n( ) “Não é verdade que o soldado não compareceu” equivale a “O soldado compareceu”.\n( ) A negação de “O número é menor que 10” é “O número é maior que 10”.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, F, F.", "F, V, F, V.", "F, F, V, V.", "F, V, V, F.", "V, F, V, F."],
      correta: 3,
      explicacao: "1ª: F, porque pode não chover e também não fazer sol. 2ª: V. 3ª: V, porque a dupla negação afirma. 4ª: F, porque a negação de “menor” é “maior ou igual”.",
      explicacaoErradas:
        "Marcar V na 1ª é aceitar antônimo como negação. Marcar V na 4ª é esquecer o caso em que o número é exatamente 10.",
      pegadinha: "Na matemática, a negação de “menor” inclui o “igual”: x < 10 nega-se com x ≥ 10.",
      conhecimento: "Negações na matemática: = ↔ ≠; > ↔ ≤; < ↔ ≥.",
    },
    {
      topico: "Conectivos",
      subassunto: "Valor lógico de proposições compostas",
      dificuldade: 5,
      raciocinio: "Substituir os valores, resolver os parênteses primeiro e aplicar as regras do “e” e do “ou”.",
      enunciado:
        "Sabe-se que a proposição p é verdadeira e que as proposições q e r são falsas. Considerando ¬ como “não”, ∧ como “e” e ∨ como “ou”, a única proposição verdadeira é:",
      alternativas: ["(p ∧ q) ∨ r", "¬p ∨ (q ∧ ¬r)", "¬(p ∧ ¬q)", "(p ∨ q) ∧ ¬r", "¬(q ∨ ¬r) ∧ ¬p"],
      correta: 3,
      explicacao: "p ∨ q = V ∨ F = V. ¬r = V. Então V ∧ V = V.",
      explicacaoErradas:
        "(p ∧ q) ∨ r = F ∨ F = F. ¬p ∨ (q ∧ ¬r) = F ∨ F = F. ¬(p ∧ ¬q) = ¬(V ∧ V) = F. ¬(q ∨ ¬r) ∧ ¬p = ¬V ∧ F = F.",
      pegadinha: "Na terceira, o “não” de fora só é aplicado depois de resolver o parêntese inteiro.",
      conhecimento: "Ordem: primeiro o que está dentro dos parênteses, depois o “não”, depois o “e” e o “ou”.",
    },
    {
      topico: "Deduções",
      subassunto: "“Mas” com valor de “e”",
      dificuldade: 5,
      raciocinio: "Ler o “mas” como “e”, negar a frase e escolher o que vale em todos os casos.",
      enunciado:
        "Sabe-se que é falsa a afirmação: “O cabo foi aprovado no curso, mas não foi promovido”. Então, é necessariamente verdadeira a afirmação:",
      alternativas: [
        "O cabo não foi aprovado no curso e não foi promovido.",
        "O cabo não foi aprovado no curso ou foi promovido.",
        "O cabo foi aprovado no curso e foi promovido.",
        "O cabo não foi aprovado no curso, mas foi promovido.",
        "O cabo foi aprovado no curso ou não foi promovido.",
      ],
      correta: 1,
      explicacao: "A frase é “aprovado e não promovido”. Sendo falsa, vale a negação: “não aprovado ou promovido” (De Morgan).",
      explicacaoErradas:
        "As opções com “e” descrevem só um dos casos possíveis e podem ser falsas. A última, “aprovado ou não promovido”, falha quando o cabo não foi aprovado e foi promovido.",
      pegadinha: "O “mas” muda o tom da frase, não a lógica: para a lógica, “mas” é “e”.",
      conhecimento: "“Embora”, “porém”, “contudo” e “todavia” também têm o valor lógico de “e”.",
    },
    {
      topico: "Proposições",
      subassunto: "Princípios da lógica",
      dificuldade: 4,
      raciocinio: "Ligar cada frase ao princípio que ela descreve.",
      enunciado:
        "Associe cada princípio à sua descrição.\n1. Identidade\n2. Não contradição\n3. Terceiro excluído\n( ) Uma proposição não pode ser, ao mesmo tempo, verdadeira e falsa.\n( ) Toda proposição é verdadeira ou falsa, sem terceira possibilidade.\n( ) Uma proposição verdadeira é verdadeira; uma proposição falsa é falsa.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 2, 3.", "3, 2, 1.", "2, 1, 3.", "1, 3, 2.", "2, 3, 1."],
      correta: 4,
      explicacao: "Não ser V e F ao mesmo tempo é a não contradição (2). Não ter terceira opção é o terceiro excluído (3). Manter o próprio valor é a identidade (1).",
      explicacaoErradas:
        "O erro mais comum é trocar a não contradição pelo terceiro excluído. Um proíbe os dois valores juntos; o outro proíbe um terceiro valor.",
      pegadinha: "“Excluído” é o terceiro valor, não a contradição.",
      conhecimento: "Os três princípios são a base da lógica clássica, usada em todas as questões de proposições.",
    },
    {
      topico: "Negação",
      subassunto: "Negação do “ou” com categóricos",
      dificuldade: 5,
      raciocinio: "Aplicar De Morgan (o “ou” vira “e”) e negar cada categórico.",
      enunciado: "Sabe-se que é falsa a afirmação: “Todo soldado é atleta ou algum cabo é motorista”. Então, é verdade que",
      alternativas: [
        "algum soldado não é atleta e nenhum cabo é motorista.",
        "nenhum soldado é atleta e algum cabo não é motorista.",
        "algum soldado não é atleta ou nenhum cabo é motorista.",
        "nenhum soldado é atleta e nenhum cabo é motorista.",
        "algum soldado não é atleta e algum cabo não é motorista.",
      ],
      correta: 0,
      explicacao: "“Ou” falso: as duas partes são falsas. “Todo soldado é atleta” falsa → algum soldado não é atleta. “Algum cabo é motorista” falsa → nenhum cabo é motorista.",
      explicacaoErradas:
        "Trocar “todo” por “nenhum” é usar o contrário, não a negação. Manter o “ou” esquece De Morgan. “Algum cabo não é motorista” não nega “algum cabo é motorista”.",
      pegadinha: "Duas armadilhas na mesma questão: o conectivo e os quantificadores. As duas precisam ser trocadas.",
      conhecimento: "A negação de “algum é” é “nenhum é”; a negação de “todo é” é “algum não é”.",
    },
    {
      topico: "Conectivos",
      subassunto: "Tabela-verdade do “e” e do “ou”",
      dificuldade: 5,
      raciocinio: "Contar as linhas (2ⁿ) e lembrar quando “e” e “ou” são verdadeiros.",
      enunciado:
        "Sobre a proposição “A viatura foi abastecida e o pneu foi trocado e o rádio foi testado”, analise as afirmações.\nI. A tabela-verdade dessa proposição tem 8 linhas.\nII. A proposição é verdadeira em apenas uma dessas linhas.\nIII. Se as duas palavras “e” fossem trocadas por “ou”, a proposição seria verdadeira em apenas uma linha.\nIV. Basta que o rádio não tenha sido testado para que a proposição original seja falsa.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I e II.", "Apenas II e IV.", "Apenas I, II e IV.", "I, II, III e IV.", "Apenas I, III e IV."],
      correta: 2,
      explicacao: "I: 3 proposições → 2³ = 8 linhas. II: o “e” só é V quando tudo é V, uma linha. IV: uma parte falsa basta para derrubar o “e”.",
      explicacaoErradas:
        "III está errada: com “ou”, a proposição seria falsa em apenas uma linha (quando tudo é falso) e verdadeira nas outras 7.",
      pegadinha: "O “e” tem uma única linha verdadeira; o “ou” tem uma única linha falsa. É fácil trocar.",
      conhecimento: "Com n proposições simples, a tabela-verdade tem 2ⁿ linhas: 2 → 4, 3 → 8, 4 → 16.",
    },
  ],
};
