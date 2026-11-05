import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-24",
  resumo: {
    ideia:
      "Análise combinatória conta possibilidades sem listar uma por uma. A pergunta chave é: a ordem muda o resultado?",
    itens: [
      {
        termo: "Princípio multiplicativo",
        faz: "Etapas que acontecem juntas (E): multiplique.",
      },
      {
        termo: "Princípio aditivo",
        faz: "Casos separados (OU): some.",
      },
      {
        termo: "Princípio da casa dos pombos",
        faz: "Pense no pior caso e some 1.",
      },
      {
        termo: "Fatorial",
        faz: "n! = n · (n − 1) · ... · 1. E 0! = 1.",
      },
      {
        termo: "Permutação",
        faz: "Ordenar todos os elementos: n!. Com repetição, divida pelo fatorial de cada repetição.",
      },
      {
        termo: "Permutação circular",
        faz: "Em volta de uma mesa: (n − 1)!.",
      },
      {
        termo: "Arranjo",
        faz: "Escolher parte dos elementos, e a ordem importa: n! ÷ (n − p)!.",
      },
      {
        termo: "Combinação",
        faz: "Escolher parte dos elementos, e a ordem não importa: n! ÷ [p! · (n − p)!].",
      },
      {
        termo: "Partições",
        faz: "x + y + z = n. Com todos positivos: C(n − 1, k − 1). Aceitando zero: C(n + k − 1, k − 1).",
        pista: "k é o número de partes.",
      },
      {
        termo: "Lema de Kaplansky",
        faz: "Escolher p entre n em linha, sem vizinhos: C(n − p + 1, p).",
      },
    ],
    cuidado:
      "“Pelo menos um” costuma sair mais fácil pelo total menos o caso com nenhum.",
  },
  questoes: [
    {
      topico: "Princípio multiplicativo",
      subassunto: "Restrição na primeira posição",
      dificuldade: 4,
      raciocinio: "Começar pela posição com restrição.",
      enunciado:
        "Uma senha tem 4 algarismos distintos e não pode começar com zero. O número de senhas possíveis é",
      alternativas: ["5.040", "9.000", "3.024", "4.536", "10.000"],
      correta: 3,
      explicacao: "9 opções para a primeira posição, depois 9, 8 e 7. Total: 9 · 9 · 8 · 7 = 4.536.",
      explicacaoErradas:
        "“5.040” aceita o zero no início. “9.000” deixa repetir algarismos. “3.024” tira o zero de todas as posições. “10.000” não usa nenhuma restrição.",
      pegadinha: "Proibir o zero em todas as posições. Ele só não pode vir primeiro.",
      conhecimento: "Comece sempre pela etapa mais restrita.",
    },
    {
      topico: "Permutação",
      subassunto: "Anagramas com letras juntas",
      dificuldade: 5,
      raciocinio: "Tratar OO como um bloco. As letras iguais não trocam entre si.",
      enunciado: "O número de anagramas da palavra RODOVIA com as duas letras O juntas é",
      alternativas: ["720", "1.440", "2.520", "5.040", "120"],
      correta: 0,
      explicacao: "O bloco OO e as letras R, D, V, I, A formam 6 elementos. Total: 6! = 720.",
      explicacaoErradas:
        "“1.440” troca as letras O de lugar, mas elas são iguais. “2.520” é o total de anagramas, sem exigir que fiquem juntas. “5.040” é 7!. “120” é 5!, esquecendo o bloco.",
      pegadinha: "Multiplicar por 2. Trocar dois O iguais não gera palavra nova.",
      conhecimento: "Elementos juntos viram um bloco.",
    },
    {
      topico: "Combinação",
      subassunto: "Pelo menos um",
      dificuldade: 5,
      raciocinio: "Total de comissões menos as que não têm inspetor.",
      enunciado:
        "Uma comissão de 4 pessoas será formada com 6 agentes e 4 inspetores. Se ela deve ter pelo menos 1 inspetor, o número de comissões possíveis é",
      alternativas: ["210", "15", "336", "225", "195"],
      correta: 4,
      explicacao: "Total: C(10, 4) = 210. Sem inspetor: C(6, 4) = 15. Resposta: 210 − 15 = 195.",
      explicacaoErradas:
        "“210” ignora a condição. “15” é o caso sem inspetor. “336” fixa um inspetor e escolhe 3 dos outros 9, contando a mesma comissão mais de uma vez. “225” soma, em vez de subtrair.",
      pegadinha: "Fixar um inspetor e completar. Isso repete comissões.",
      conhecimento: "Pelo menos um = total − nenhum.",
    },
    {
      topico: "Arranjo",
      subassunto: "Ordem importa",
      dificuldade: 4,
      raciocinio: "Rotas diferentes fazem a ordem importar.",
      enunciado:
        "Entre 7 viaturas, serão escolhidas 3, uma para cada rota: norte, centro e sul. O número de formas de fazer isso é",
      alternativas: ["35", "343", "210", "6", "5.040"],
      correta: 2,
      explicacao: "A ordem importa, pois as rotas são diferentes: 7 · 6 · 5 = 210.",
      explicacaoErradas:
        "“35” é combinação, sem considerar as rotas. “343” repete a mesma viatura em rotas diferentes. “6” só troca as 3 viaturas entre si. “5.040” é 7!.",
      pegadinha: "Usar combinação. Trocar duas viaturas de rota dá outro resultado.",
      conhecimento: "Funções diferentes tornam a ordem importante.",
    },
    {
      topico: "Permutação circular",
      subassunto: "Duas pessoas juntas",
      dificuldade: 5,
      raciocinio: "Juntar as duas em um bloco, usar (n − 1)! e permutar o bloco.",
      enunciado:
        "Seis agentes vão sentar em volta de uma mesa redonda, e dois deles querem ficar lado a lado. Sem contar rotações como diferentes, o número de formas é",
      alternativas: ["240", "48", "120", "24", "720"],
      correta: 1,
      explicacao: "Bloco e outros 4: 5 elementos em círculo, (5 − 1)! = 24. O bloco troca de 2 formas: 48.",
      explicacaoErradas:
        "“240” trata a mesa como fila. “120” é (6 − 1)!, sem a condição. “24” não troca as duas pessoas do bloco. “720” é 6!.",
      pegadinha: "Esquecer da troca interna. As duas pessoas são diferentes.",
      conhecimento: "Em círculo, fixa-se uma posição: (n − 1)!.",
    },
    {
      topico: "Partições",
      subassunto: "Soluções inteiras positivas",
      dificuldade: 5,
      raciocinio: "x + y + z = 10 com todos positivos: C(9, 2).",
      enunciado:
        "Dez viaturas iguais serão distribuídas entre 3 postos, e cada posto deve receber pelo menos 1. O número de distribuições é",
      alternativas: ["66", "120", "36", "1.000", "59.049"],
      correta: 2,
      explicacao: "São 9 espaços entre as 10 viaturas. Escolhem-se 2 para dividir: C(9, 2) = 36.",
      explicacaoErradas:
        "“66” aceita posto com zero viaturas. “120” é C(10, 3). “1.000” é 10³. “59.049” é 3¹⁰, que trataria as viaturas como diferentes.",
      pegadinha: "Tratar as viaturas como diferentes. Elas são iguais.",
      conhecimento: "Positivas: C(n − 1, k − 1). Com zero: C(n + k − 1, k − 1).",
    },
    {
      topico: "Lema de Kaplansky",
      subassunto: "Escolha sem vizinhos",
      dificuldade: 5,
      raciocinio: "Aplicar C(n − p + 1, p) com n = 8 e p = 3.",
      enunciado:
        "Uma rodovia tem 8 postos em linha. Serão escolhidos 3 para reforço, sem que dois escolhidos sejam vizinhos. O número de escolhas é",
      alternativas: ["56", "36", "6", "10", "20"],
      correta: 4,
      explicacao: "C(8 − 3 + 1, 3) = C(6, 3) = 20.",
      explicacaoErradas:
        "“56” é C(8, 3), sem a condição. “36” é o número de escolhas com algum vizinho. “6” é 8 − 3 + 1, sem a combinação. “10” é C(5, 3).",
      pegadinha: "Parar no 6. Ele é só a primeira entrada de C(6, 3).",
      conhecimento: "Lema de Kaplansky em linha: C(n − p + 1, p).",
    },
    {
      topico: "Princípio da casa dos pombos",
      subassunto: "Garantir três iguais",
      dificuldade: 5,
      raciocinio: "No pior caso, cada unidade dá 2 agentes. O próximo garante o trio.",
      enunciado:
        "Um curso reúne agentes das 27 unidades da federação. O menor número de agentes a sortear para garantir 3 da mesma unidade é",
      alternativas: ["55", "28", "54", "81", "82"],
      correta: 0,
      explicacao: "Pior caso: 2 de cada unidade, 54 agentes. O próximo forma o trio: 55.",
      explicacaoErradas:
        "“28” garante só 2 da mesma unidade. “54” é o pior caso, sem o agente que resolve. “81” e “82” partem de 3 por unidade, e o trio já estaria formado bem antes.",
      pegadinha: "Parar no pior caso. Falta o agente que quebra o empate.",
      conhecimento: "Garantia = pior caso + 1.",
    },
  ],
};
