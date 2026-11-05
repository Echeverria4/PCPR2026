import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-01",
  resumo: {
    ideia:
      "Conjunto é uma coleção de elementos. A prova cobra três coisas: não confundir elemento com subconjunto, operar com união, interseção e diferença, e contar quem está em cada região do diagrama, começando sempre pelo centro.",
    itens: [
      {
        termo: "Pertence (∈)",
        faz: "Liga elemento a conjunto: 1 ∈ {1, 2}.",
        pista: "Olhe o que está escrito dentro das chaves, sem abrir nada.",
      },
      {
        termo: "Contido (⊂)",
        faz: "Liga conjunto a conjunto: {1} ⊂ {1, 2}, porque cada elemento do primeiro está no segundo.",
      },
      {
        termo: "Vazio e o próprio conjunto",
        faz: "São subconjuntos de qualquer conjunto.",
      },
      {
        termo: "Conjunto das partes",
        faz: "Reúne todos os subconjuntos. Com n elementos, são 2ⁿ subconjuntos.",
        pista: "Cada elemento novo dobra o total.",
      },
      {
        termo: "União (A ∪ B)",
        faz: "Tudo o que está em A, em B ou nos dois.",
      },
      {
        termo: "Interseção (A ∩ B)",
        faz: "Só o que está nos dois ao mesmo tempo.",
      },
      {
        termo: "Diferença (A − B)",
        faz: "O que está em A e não está em B. A ordem importa.",
      },
      {
        termo: "Complementar (A')",
        faz: "O que falta para A chegar ao conjunto universo.",
      },
      {
        termo: "De Morgan",
        faz: "(A ∪ B)' = A' ∩ B' e (A ∩ B)' = A' ∪ B'. Fora da união é o mesmo que fora de A e fora de B.",
      },
      {
        termo: "Dois conjuntos",
        faz: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
      },
      {
        termo: "Três conjuntos",
        faz: "Some os três, tire as interseções de dois em dois e devolva a interseção tripla.",
      },
      {
        termo: "Diagrama",
        faz: "Preencha do centro para fora: primeiro a tripla, depois as duplas e, por fim, o “só um”.",
      },
    ],
    cuidado:
      "Em “exatamente dois” e “só um”, a interseção tripla entra na conta: retire-a antes de preencher as regiões.",
  },
  questoes: [
    {
      topico: "Pertinência e inclusão",
      subassunto: "Elemento que também é conjunto",
      dificuldade: 5,
      raciocinio: "Listar os três elementos de C e só depois testar cada símbolo.",
      enunciado: "Seja C = {1, {2}, {1, 2}}. Assinale a afirmação verdadeira.",
      alternativas: ["2 ∈ C", "{1} ∈ C", "{2} ⊂ C", "{1} ⊂ C", "{1, 2} ⊂ C"],
      correta: 3,
      explicacao:
        "Os elementos de C são 1, {2} e {1, 2}. Como 1 é elemento de C, o conjunto {1} está contido em C.",
      explicacaoErradas:
        "2 sozinho não é elemento: o que existe é {2}. {1} não aparece como elemento. {2} ⊂ C exigiria que 2 fosse elemento. {1, 2} é elemento, e o certo seria “{1, 2} ∈ C”.",
      pegadinha:
        "Olhar para “{1, 2}” dentro de C e marcar que ele está contido. Ele pertence a C, pois é um elemento inteiro.",
      conhecimento:
        "“∈” compara elemento com conjunto. “⊂” compara conjunto com conjunto, e cada elemento do primeiro precisa estar no segundo.",
    },
    {
      topico: "Conjunto das partes",
      subassunto: "Crescimento do número de subconjuntos",
      dificuldade: 4,
      raciocinio: "Escrever a diferença como 2ⁿ⁺² − 2ⁿ e colocar 2ⁿ em evidência.",
      enunciado:
        "Um conjunto tem n elementos. Ao acrescentar dois novos elementos a ele, o número de subconjuntos aumenta em 96. O valor de n é",
      alternativas: ["3", "4", "6", "7", "5"],
      correta: 4,
      explicacao:
        "Cada elemento novo dobra o total, e dois multiplicam por 4. Logo, 4 · 2ⁿ − 2ⁿ = 3 · 2ⁿ = 96, então 2ⁿ = 32 e n = 5.",
      explicacaoErradas:
        "Com 3, 4, 6 e 7 elementos, o aumento seria de 24, 48, 192 e 384 subconjuntos, nessa ordem.",
      pegadinha:
        "Fazer 96 ÷ 2 = 48 e procurar uma potência próxima. O total é multiplicado por 4, mas o aumento é 3 vezes o valor antigo.",
      conhecimento: "Número de subconjuntos: 2ⁿ. Cada novo elemento dobra esse número.",
    },
    {
      topico: "Inclusão-exclusão",
      subassunto: "Fora dos três conjuntos",
      dificuldade: 5,
      raciocinio: "Calcular a união dos três e tirar do total.",
      enunciado:
        "Em uma fiscalização, 120 veículos foram vistoriados. Foram achadas falhas de documentação em 58, de pneus em 47 e de iluminação em 39. Havia falhas de documentação e pneus em 17, de documentação e iluminação em 14, de pneus e iluminação em 12, e dos três tipos em 6. O número de veículos sem nenhuma dessas falhas é",
      alternativas: ["7", "13", "19", "25", "76"],
      correta: 1,
      explicacao:
        "União = 58 + 47 + 39 − 17 − 14 − 12 + 6 = 107. Sem falhas: 120 − 107 = 13.",
      explicacaoErradas:
        "“7” soma os 6 duas vezes, e “19” esquece de devolver os 6. “25” é quem tem exatamente duas falhas, e “76” é quem tem exatamente uma.",
      pegadinha:
        "Parar depois de tirar as duplas. Ao subtrair as três duplas, a tripla sai três vezes e precisa voltar uma vez.",
      conhecimento:
        "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C).",
    },
    {
      topico: "Inclusão-exclusão",
      subassunto: "Exatamente um dos três",
      dificuldade: 5,
      raciocinio: "Preencher o diagrama do centro para fora e somar só as regiões externas.",
      enunciado:
        "Em um grupo de 90 agentes, 45 fizeram o curso de direção defensiva, 38 o de primeiros socorros e 30 o de abordagem. Direção defensiva e primeiros socorros foram feitos por 15, direção defensiva e abordagem por 12, primeiros socorros e abordagem por 10, e os três por 5. O número de agentes que fizeram exatamente um dos cursos é",
      alternativas: ["22", "39", "54", "76", "81"],
      correta: 2,
      explicacao:
        "Só direção defensiva: 45 − 10 − 7 − 5 = 23. Só primeiros socorros: 38 − 10 − 5 − 5 = 18. Só abordagem: 30 − 7 − 5 − 5 = 13. Total: 54.",
      explicacaoErradas:
        "“22” é quem fez exatamente dois cursos. “76” soma exatamente um e exatamente dois. “81” é a união, que inclui os 5 dos três cursos. “39” tira as duas duplas de cada curso e não devolve os 5, que saem duas vezes.",
      pegadinha:
        "Usar 15, 12 e 10 como se fossem regiões do diagrama. Esses números já contêm os 5 que fizeram os três cursos.",
      conhecimento:
        "Exatamente dois: cada dupla menos a tripla. Exatamente um: o conjunto menos as duas duplas puras e a tripla.",
    },
    {
      topico: "Operações com conjuntos",
      subassunto: "Complementar e De Morgan",
      dificuldade: 4,
      raciocinio: "Passar A' e B' para A e B, achar a união e usar A' ∩ B' = (A ∪ B)'.",
      enunciado:
        "No universo U, com 200 elementos, n(A') = 120, n(B') = 90 e n(A ∩ B) = 30. O valor de n(A' ∩ B') é",
      alternativas: ["40", "30", "50", "80", "90"],
      correta: 0,
      explicacao:
        "n(A) = 80 e n(B) = 110. A união tem 80 + 110 − 30 = 160. Como A' ∩ B' é o que fica fora da união, são 200 − 160 = 40.",
      explicacaoErradas:
        "“30” repete a interseção de A com B. “50” é só A, “80” é só B ou o próprio n(A), e “90” é o que está fora de B.",
      pegadinha:
        "Achar que A' ∩ B' é o complementar da interseção. Pela regra de De Morgan, ele é o complementar da união.",
      conhecimento: "(A ∪ B)' = A' ∩ B'. Fora da união significa fora de A e fora de B.",
    },
    {
      topico: "Operações com conjuntos",
      subassunto: "Interseção mínima e máxima",
      dificuldade: 4,
      raciocinio: "O máximo é o menor dos conjuntos. O mínimo aparece quando a união ocupa todo o total.",
      enunciado:
        "Em uma frota de 100 veículos, 70 têm tacógrafo e 60 têm rastreador. Sobre o número de veículos que têm os dois equipamentos, é correto afirmar que",
      alternativas: [
        "há exatamente 30 veículos com os dois equipamentos",
        "há no mínimo 10 e no máximo 60 veículos com os dois",
        "há no mínimo 30 e no máximo 60 veículos com os dois",
        "há no mínimo 30 e no máximo 70 veículos com os dois",
        "há no mínimo 60 e no máximo 70 veículos com os dois",
      ],
      correta: 2,
      explicacao:
        "A interseção não passa do menor conjunto: 60. A união não passa de 100, então a interseção é, no mínimo, 70 + 60 − 100 = 30.",
      explicacaoErradas:
        "“exatamente 30” só vale se todo veículo tiver ao menos um equipamento, e o enunciado não diz isso. “mínimo de 10” ignora o limite da frota. “máximo de 70” é impossível, pois só 60 têm rastreador.",
      pegadinha:
        "Fazer 70 + 60 − 100 = 30 e tratar o resultado como valor exato. Sem saber a união, 30 é só o piso.",
      conhecimento: "max(0, n(A) + n(B) − total) ≤ n(A ∩ B) ≤ menor entre n(A) e n(B).",
    },
  ],
};
