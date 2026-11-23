import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-a05",
  resumo: {
    ideia:
      "Análise combinatória é contar sem listar. Quase tudo sai do princípio fundamental da contagem: multiplicar as opções de cada etapa. O resto é saber quando a ordem importa (arranjo e permutação) e quando não importa (combinação). A probabilidade usa essas contagens: casos favoráveis ÷ casos possíveis.",
    itens: [
      {
        termo: "Princípio fundamental da contagem",
        faz: "Etapas que acontecem juntas (“e”) se multiplicam; opções que se excluem (“ou”) se somam. 3 camisas e 2 calças → 3 × 2 = 6 formas.",
        pista: "Comece pela etapa com restrição (ex.: o primeiro dígito não pode ser 0).",
      },
      {
        termo: "Casa dos pombos",
        faz: "Com n gavetas, para garantir que alguma tenha pelo menos k objetos, são precisos n × (k − 1) + 1 objetos.",
        pista: "Pense no pior caso: todas as gavetas com k − 1 objetos. O próximo objeto obriga a repetição.",
      },
      {
        termo: "Fatorial",
        faz: "n! = n × (n − 1) × … × 1. 5! = 120. Por definição, 0! = 1.",
      },
      {
        termo: "Permutação simples",
        faz: "Organizar n objetos diferentes em fila: n!. Anagramas de AMOR: 4! = 24.",
      },
      {
        termo: "Permutação com repetição",
        faz: "Se há letras ou objetos iguais, divide-se pelo fatorial de cada repetição: ARARA tem 5!/(3! × 2!) = 10 anagramas.",
      },
      {
        termo: "Objetos juntos",
        faz: "Amarre os que devem ficar juntos como um bloco, conte as posições e depois multiplique pelas trocas dentro do bloco (se forem diferentes).",
      },
      {
        termo: "Permutação circular",
        faz: "n pessoas em volta de uma mesa redonda: (n − 1)!. Girar todo mundo não cria uma arrumação nova.",
      },
      {
        termo: "Arranjo (a ordem importa)",
        faz: "Escolher k entre n com cargos ou posições diferentes: n × (n − 1) × … (k fatores). Presidente, vice e secretário entre 10: 10 × 9 × 8 = 720.",
      },
      {
        termo: "Combinação (a ordem não importa)",
        faz: "Escolher k entre n sem cargos: C(n, k) = n! / (k! × (n − k)!). Comissão de 3 entre 10: 120.",
        pista: "Teste: trocar a ordem dos escolhidos muda o resultado? Se não muda, é combinação.",
      },
      {
        termo: "Pelo menos",
        faz: "Some os casos possíveis (2, 3, 4…) ou faça o total menos os casos que não servem.",
      },
      {
        termo: "Probabilidade",
        faz: "P = casos favoráveis ÷ casos possíveis, sempre entre 0 e 1.",
      },
      {
        termo: "Probabilidade da união",
        faz: "P(A ou B) = P(A) + P(B) − P(A e B). Igual à união de conjuntos: tira o que foi contado duas vezes.",
      },
    ],
  },
  questoes: [
    {
      topico: "Princípio fundamental da contagem",
      subassunto: "Senhas com restrição",
      dificuldade: 4,
      raciocinio: "Começar pela posição com restrição e multiplicar as opções.",
      enunciado:
        "Uma senha de acesso ao sistema do batalhão tem 4 algarismos distintos, e o primeiro não pode ser 0. A quantidade de senhas possíveis é",
      alternativas: ["5040", "3024", "10000", "4536", "6561"],
      correta: 3,
      explicacao: "1º algarismo: 9 opções (1 a 9). 2º: 9 (entra o 0, sai o já usado). 3º: 8. 4º: 7. Total: 9 × 9 × 8 × 7 = 4.536.",
      explicacaoErradas:
        "5040 = 10 × 9 × 8 × 7 ignora a restrição do zero. 3024 = 9 × 8 × 7 × 6 esquece que o 0 volta a valer a partir da 2ª posição. 6561 = 9⁴ permite repetir algarismos.",
      pegadinha: "O zero é proibido só na primeira posição. Nas outras, ele é uma opção.",
      conhecimento: "Em contagem com restrição, trate primeiro a posição que tem a regra especial.",
    },
    {
      topico: "Permutações",
      subassunto: "Letras repetidas juntas",
      dificuldade: 5,
      raciocinio: "Tratar as duas letras A como um bloco só e contar a fila resultante.",
      enunciado:
        "O número de anagramas da palavra VIATURA em que as duas letras A aparecem juntas é",
      alternativas: ["720", "1440", "2520", "360", "120"],
      correta: 0,
      explicacao: "Bloco “AA” + V, I, T, U, R = 6 elementos diferentes: 6! = 720. Trocar os dois A de lugar não cria anagrama novo.",
      explicacaoErradas:
        "1440 multiplica por 2 as trocas dentro do bloco, mas as letras são iguais. 2520 = 7!/2! é o total de anagramas, sem a exigência de ficarem juntas. 360 divide por 2 uma vez a mais.",
      pegadinha: "No bloco de letras iguais, não há troca interna para contar.",
      conhecimento: "Bloco com letras diferentes, como “FT”, multiplica por 2!; bloco com letras iguais, não.",
    },
    {
      topico: "Arranjos",
      subassunto: "Funções diferentes com restrição",
      dificuldade: 5,
      raciocinio: "Contar todas as escalas e tirar aquelas em que o policial proibido é motorista.",
      enunciado:
        "Entre 8 policiais, serão escolhidos um motorista, um atirador e um operador de rádio, cada função ocupada por uma pessoa diferente. Um desses policiais está sem habilitação e não pode ser o motorista. O número de escalas possíveis é",
      alternativas: ["336", "252", "294", "56", "210"],
      correta: 2,
      explicacao: "Sem restrição: 8 × 7 × 6 = 336. Escalas com o policial sem habilitação como motorista: 1 × 7 × 6 = 42. Válidas: 336 − 42 = 294.",
      explicacaoErradas:
        "336 ignora a restrição. 252 = 7 × 6 × 6 erra a conta das outras funções. 56 é C(8, 3), que valeria se as funções fossem iguais.",
      pegadinha: "O policial sem habilitação pode ser atirador ou operador de rádio. Ele só sai da função de motorista.",
      conhecimento: "Outra forma: motorista tem 7 opções; depois, 7 e 6 para as outras funções: 7 × 7 × 6 = 294.",
    },
    {
      topico: "Combinações",
      subassunto: "Comissão com “pelo menos”",
      dificuldade: 5,
      raciocinio: "Somar os casos com 2, 3 e 4 cabos.",
      enunciado:
        "Uma comissão de 4 pessoas, sem cargos, será formada a partir de 6 soldados e 4 cabos. O número de comissões com pelo menos 2 cabos é",
      alternativas: ["90", "210", "95", "24", "115"],
      correta: 4,
      explicacao: "2 cabos: C(4,2) × C(6,2) = 6 × 15 = 90. 3 cabos: C(4,3) × C(6,1) = 4 × 6 = 24. 4 cabos: C(4,4) = 1. Total: 115.",
      explicacaoErradas:
        "90 conta só os casos com exatamente 2 cabos. 210 = C(10,4) é o total, sem restrição. 95 é o contrário do pedido: comissões com menos de 2 cabos.",
      pegadinha: "“Pelo menos 2” inclui 2, 3 e 4.",
      conhecimento: "Pelo total: 210 − C(6,4) − 4 × C(6,3) = 210 − 15 − 80 = 115.",
    },
    {
      topico: "Princípio fundamental da contagem",
      subassunto: "Casa dos pombos",
      dificuldade: 5,
      raciocinio: "Imaginar o pior caso: 2 aniversariantes em cada mês.",
      enunciado:
        "O número mínimo de policiais em uma sala para garantir que pelo menos 3 deles façam aniversário no mesmo mês é",
      alternativas: ["36", "25", "24", "37", "13"],
      correta: 1,
      explicacao: "Pior caso: 2 pessoas em cada um dos 12 meses = 24, sem nenhum mês com 3. O 25º policial obriga algum mês a ter 3.",
      explicacaoErradas:
        "24 é o pior caso, que ainda não garante. 36 = 12 × 3 é o número para ter 3 em todos os meses, o que não foi pedido. 13 garantiria só 2 no mesmo mês.",
      pegadinha: "“Garantir” pede pensar no azar máximo, não na média.",
      conhecimento: "Com n gavetas e k por gaveta: n × (k − 1) + 1.",
    },
    {
      topico: "Permutações",
      subassunto: "Permutação circular com bloco",
      dificuldade: 5,
      raciocinio: "Amarrar os dois em um bloco, fazer a circular e multiplicar pelas trocas dentro do bloco.",
      enunciado:
        "Seis oficiais vão se sentar em volta de uma mesa redonda, e o comandante e o subcomandante devem ficar lado a lado. O número de arrumações possíveis é",
      alternativas: ["120", "720", "240", "24", "48"],
      correta: 4,
      explicacao: "Bloco (comandante + subcomandante) + 4 oficiais = 5 elementos em círculo: (5 − 1)! = 24. Dentro do bloco, os dois podem trocar de lugar: 24 × 2 = 48.",
      explicacaoErradas:
        "120 = 5! esquece que, na mesa redonda, girar não cria arrumação nova. 240 = 5! × 2 comete o mesmo erro. 24 esquece a troca dentro do bloco.",
      pegadinha: "Duas regras ao mesmo tempo: a mesa é redonda e o bloco tem duas pessoas diferentes.",
      conhecimento: "Permutação circular de n: (n − 1)!.",
    },
    {
      topico: "Probabilidade",
      subassunto: "Probabilidade da união",
      dificuldade: 4,
      raciocinio: "Contar múltiplos de 3, de 5 e tirar os de 15, contados duas vezes.",
      enunciado: "Sorteia-se um número de 1 a 30. A probabilidade de o número ser múltiplo de 3 ou de 5 é",
      alternativas: ["8/15", "7/15", "1/2", "1/3", "2/15"],
      correta: 1,
      explicacao: "Múltiplos de 3: 10. Múltiplos de 5: 6. Múltiplos de 15 (dos dois): 2. Favoráveis: 10 + 6 − 2 = 14. P = 14/30 = 7/15.",
      explicacaoErradas:
        "8/15 = 16/30 soma sem descontar o 15 e o 30, contados duas vezes. 1/3 conta só os múltiplos de 3. 2/15 conta só os que são das duas listas.",
      pegadinha: "O 15 e o 30 são múltiplos de 3 e de 5 ao mesmo tempo.",
      conhecimento: "P(A ou B) = P(A) + P(B) − P(A e B).",
    },
    {
      topico: "Permutações",
      subassunto: "Permutação com repetição",
      dificuldade: 5,
      raciocinio: "Fila com objetos iguais: dividir pelos fatoriais das repetições.",
      enunciado:
        "Em um pátio com 8 vagas em linha, serão estacionadas 5 viaturas idênticas e 3 motocicletas idênticas, ocupando todas as vagas. O número de maneiras diferentes de fazer isso é",
      alternativas: ["40320", "336", "120", "56", "28"],
      correta: 3,
      explicacao: "8! / (5! × 3!) = 56. Basta escolher as 3 vagas das motos entre as 8: C(8, 3) = 56.",
      explicacaoErradas:
        "40320 = 8! trata todos os veículos como diferentes. 336 = 8 × 7 × 6 considera as motos diferentes entre si. 28 = C(8, 2) escolhe só 2 vagas.",
      pegadinha: "Veículos idênticos trocando de lugar entre si não criam arrumação nova.",
      conhecimento: "Permutação com repetição: n! / (a! × b! × …).",
    },
    {
      topico: "Probabilidade",
      subassunto: "Probabilidade com combinação",
      dificuldade: 5,
      raciocinio: "Contar duplas possíveis e duplas com um de cada posto, sem considerar ordem.",
      enunciado:
        "Em um grupo com 5 soldados e 3 cabos, sorteiam-se 2 pessoas ao mesmo tempo. A probabilidade de sair um soldado e um cabo é",
      alternativas: ["15/28", "15/56", "5/14", "3/8", "13/28"],
      correta: 0,
      explicacao: "Duplas possíveis: C(8, 2) = 28. Duplas com um soldado e um cabo: 5 × 3 = 15. P = 15/28.",
      explicacaoErradas:
        "15/56 divide pelo total com ordem (8 × 7), mas conta os favoráveis sem ordem. 5/14 = 10/28 é a chance de sair dois soldados. 13/28 é a chance de os dois terem o mesmo posto.",
      pegadinha: "Favoráveis e possíveis precisam ser contados do mesmo jeito: os dois com ordem ou os dois sem.",
      conhecimento: "Com ordem: 30/56 = 15/28. O resultado é o mesmo, desde que a regra seja igual em cima e embaixo.",
    },
    {
      topico: "Combinações",
      subassunto: "Conceitos",
      dificuldade: 5,
      raciocinio: "Julgar cada afirmação com as definições.",
      enunciado:
        "Julgue as afirmações, marcando V para verdadeiro e F para falso.\n( ) Em uma comissão sem cargos, a ordem dos escolhidos não importa, e usa-se combinação.\n( ) C(10, 3) = C(10, 7).\n( ) 0! = 0.\n( ) Com 3 camisas e 2 calças, há 5 maneiras de se vestir usando uma camisa e uma calça.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, F, V, F.", "V, V, V, F.", "V, V, F, F.", "F, V, F, V.", "V, F, F, V."],
      correta: 2,
      explicacao: "1ª: V. 2ª: V, porque escolher 3 para entrar é o mesmo que escolher 7 para ficar de fora (os dois dão 120). 3ª: F, pois 0! = 1. 4ª: F, pois são 3 × 2 = 6 maneiras.",
      explicacaoErradas:
        "Marcar F na 2ª é não perceber a simetria das combinações. Marcar V na 4ª é somar opções que acontecem juntas (camisa e calça), quando o certo é multiplicar.",
      pegadinha: "“E” multiplica; “ou” soma. Camisa e calça são usadas juntas.",
      conhecimento: "C(n, k) = C(n, n − k).",
    },
  ],
};
