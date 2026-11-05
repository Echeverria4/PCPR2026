import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-17",
  resumo: {
    ideia:
      "Aqui a questão mostra alguns termos e pede o seguinte, ou um termo bem distante. O segredo é achar a regra que liga um termo ao próximo.",
    itens: [
      {
        termo: "Diferenças",
        faz: "Subtraia termos vizinhos. Se as diferenças formam um padrão, a regra apareceu.",
      },
      {
        termo: "Lei de formação",
        faz: "Regra que dá o termo pela posição. Exemplo: aₙ = 3n.",
      },
      {
        termo: "Regra por recorrência",
        faz: "Cada termo depende do anterior. Calcule um por um.",
      },
      {
        termo: "Fibonacci",
        faz: "A partir do 3º termo, cada termo é a soma dos dois anteriores.",
      },
      {
        termo: "Ciclos",
        faz: "Se o padrão se repete a cada k termos, divida a posição por k. O resto indica o lugar no ciclo.",
        pista: "Resto zero é o último elemento do ciclo.",
      },
      {
        termo: "Figuras",
        faz: "Conte a primeira figura e quanto entra a cada nova figura.",
      },
      {
        termo: "Letras",
        faz: "Troque cada letra pela sua posição no alfabeto e procure a regra nos números.",
      },
    ],
    cuidado:
      "Dias da semana: se o primeiro dia já conta, o 100º dia está 99 dias depois dele.",
  },
  questoes: [
    {
      topico: "Sequências numéricas",
      subassunto: "Diferenças que crescem",
      dificuldade: 4,
      raciocinio: "As diferenças são 1, 2, 3, 4, 5.",
      enunciado: "Na sequência 2, 3, 5, 8, 12, 17, ..., o 8º termo é",
      alternativas: ["23", "27", "30", "55", "29"],
      correta: 2,
      explicacao: "As diferenças crescem de 1 em 1. O 7º termo é 17 + 6 = 23, e o 8º é 23 + 7 = 30.",
      explicacaoErradas:
        "“23” é o 7º termo. “27” repete a diferença 5 duas vezes. “29” soma os dois últimos termos dados. “55” é o 8º termo pela regra de Fibonacci, que só vale até o 8.",
      pegadinha: "Ver Fibonacci no início. A regra falha em 12, pois 5 + 8 = 13.",
      conhecimento: "Confira a regra em todos os termos dados, e não só nos primeiros.",
    },
    {
      topico: "Sequências cíclicas",
      subassunto: "Dias da semana",
      dificuldade: 5,
      raciocinio: "O 100º dia está 99 dias depois do 1º. Dividir 99 por 7.",
      enunciado:
        "Uma operação começou em uma terça-feira, que foi seu 1º dia, e não parou mais. O 100º dia da operação caiu em",
      alternativas: ["uma segunda-feira", "uma terça-feira", "um domingo", "uma quarta-feira", "uma quinta-feira"],
      correta: 3,
      explicacao: "99 ÷ 7 dá resto 1. Logo, é um dia depois de terça: quarta-feira.",
      explicacaoErradas:
        "“uma quinta-feira” usa o resto de 100 ÷ 7. “uma terça-feira” ignora o resto. “uma segunda-feira” recua 1 dia, e “um domingo” recua 2.",
      pegadinha: "Dividir 100 por 7. Do 1º ao 100º dia há 99 passos.",
      conhecimento: "Em ciclos, o que importa é o resto da divisão.",
    },
    {
      topico: "Sequências de figuras",
      subassunto: "Quadrados em fileira",
      dificuldade: 4,
      raciocinio: "O primeiro quadrado usa 4 palitos, e cada novo usa mais 3.",
      enunciado:
        "Com palitos, formam-se quadrados em fileira, com um lado comum entre vizinhos: 1 quadrado usa 4 palitos, 2 usam 7 e 3 usam 10. Com exatamente 100 palitos, formam-se quantos quadrados?",
      alternativas: ["25", "34", "301", "33", "32"],
      correta: 3,
      explicacao: "A regra é 3n + 1 = 100. Logo, n = 33.",
      explicacaoErradas:
        "“25” divide 100 por 4, sem lado comum. “34” divide 100 por 3 e arredonda para cima. “301” é o número de palitos para 100 quadrados. “32” usa 3n + 4.",
      pegadinha: "Dividir por 4. Cada novo quadrado aproveita um lado do anterior.",
      conhecimento: "Em figuras, busque o valor inicial e o acréscimo por figura.",
    },
    {
      topico: "Sequências de letras",
      subassunto: "Saltos que crescem",
      dificuldade: 4,
      raciocinio: "Trocar as letras por posições no alfabeto de 26 letras.",
      enunciado: "Na sequência de letras A, D, H, M, ..., em um alfabeto de 26 letras, a próxima letra é",
      alternativas: ["P", "Q", "S", "R", "T"],
      correta: 2,
      explicacao: "As posições são 1, 4, 8, 13. Os saltos são 3, 4, 5. O próximo salto é 6: 19, que é S.",
      explicacaoErradas:
        "“R” repete o salto 5. “Q” usa o salto 4, e “P”, o salto 3. “T” usa o salto 7.",
      pegadinha: "Repetir o último salto. Os saltos crescem de 1 em 1.",
      conhecimento: "Transformar letras em números revela a regra.",
    },
    {
      topico: "Sequências numéricas",
      subassunto: "Soma alternada",
      dificuldade: 4,
      raciocinio: "Agrupar em pares que valem −1.",
      enunciado: "O valor de 1 − 2 + 3 − 4 + 5 − 6 + ... + 99 − 100 é",
      alternativas: ["50", "−50", "0", "5.050", "−100"],
      correta: 1,
      explicacao: "Cada par (1 − 2), (3 − 4), ... vale −1. São 50 pares. Total: −50.",
      explicacaoErradas:
        "“50” erra o sinal. “0” supõe que tudo se cancela. “5.050” soma tudo sem os sinais. “−100” fica só com o último termo.",
      pegadinha: "Achar que os termos se anulam. Cada par deixa −1.",
      conhecimento: "Agrupar termos evita somar um por um.",
    },
    {
      topico: "Lei de formação",
      subassunto: "Regra por recorrência",
      dificuldade: 5,
      raciocinio: "Calcular termo a termo.",
      enunciado: "Uma sequência tem a₁ = 2, e cada termo seguinte é o triplo do anterior menos 1. O valor de a₅ é",
      alternativas: ["41", "365", "162", "158", "122"],
      correta: 4,
      explicacao: "Os termos são 2, 5, 14, 41, 122.",
      explicacaoErradas:
        "“41” é o 4º termo, e “365” é o 6º. “162” ignora o −1 e trata a sequência como PG. “158” tira 1 só no fim, quatro vezes.",
      pegadinha: "Usar a fórmula da PG. O −1 muda todos os termos seguintes.",
      conhecimento: "Em recorrência, o erro de um termo passa para os próximos.",
    },
  ],
};
