import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-14",
  resumo: {
    ideia:
      "Sequência é uma lista de números em ordem. Na PA, soma-se sempre o mesmo valor. Na PG, multiplica-se sempre pelo mesmo valor.",
    itens: [
      {
        termo: "PA",
        faz: "Cada termo é o anterior mais a razão r. Exemplo: 3, 7, 11, 15.",
      },
      {
        termo: "Termo geral da PA",
        faz: "aₙ = a₁ + (n − 1) · r.",
        pista: "Do 1º ao 20º termo são 19 passos, e não 20.",
      },
      {
        termo: "Soma da PA",
        faz: "Sₙ = (a₁ + aₙ) · n ÷ 2.",
      },
      {
        termo: "Três termos em PA",
        faz: "Escreva x − r, x, x + r. Na soma, o r some, e x sai na hora.",
      },
      {
        termo: "PG",
        faz: "Cada termo é o anterior vezes a razão q. Exemplo: 3, 6, 12, 24.",
      },
      {
        termo: "Termo geral da PG",
        faz: "aₙ = a₁ · qⁿ⁻¹.",
      },
      {
        termo: "Soma da PG",
        faz: "Sₙ = a₁ · (qⁿ − 1) ÷ (q − 1).",
      },
      {
        termo: "Três termos em PG",
        faz: "O termo do meio ao quadrado é igual ao produto dos vizinhos.",
      },
      {
        termo: "Fibonacci",
        faz: "A partir do 3º termo, cada termo é a soma dos dois anteriores: 1, 1, 2, 3, 5, 8.",
      },
    ],
    cuidado:
      "Antes de usar uma fórmula, veja se a sequência soma ou multiplica. Na PA a diferença é fixa. Na PG é a divisão que dá sempre o mesmo valor.",
  },
  questoes: [
    {
      topico: "Progressão aritmética",
      subassunto: "Termo geral",
      dificuldade: 4,
      raciocinio: "Do 1º ao 20º posto há 19 intervalos.",
      enunciado:
        "Em uma rodovia, postos de apoio foram instalados nos km 18, 45, 72 e assim por diante, sempre com o mesmo intervalo. O 20º posto fica no km",
      alternativas: ["513", "558", "531", "540", "504"],
      correta: 2,
      explicacao: "A razão é 27. a₂₀ = 18 + 19 · 27 = 531.",
      explicacaoErradas:
        "“558” usa 20 intervalos, em vez de 19. “513” esquece o primeiro termo. “540” multiplica 20 por 27 e esquece o 18. “504” usa 18 intervalos.",
      pegadinha: "Multiplicar a razão por 20. O primeiro posto já está no lugar, e faltam 19 passos.",
      conhecimento: "aₙ = a₁ + (n − 1) · r.",
    },
    {
      topico: "Progressão aritmética",
      subassunto: "Soma dos múltiplos em um intervalo",
      dificuldade: 5,
      raciocinio: "Achar o primeiro e o último múltiplo, contar os termos e usar a soma da PA.",
      enunciado: "A soma de todos os múltiplos de 7 compreendidos entre 100 e 200 é",
      alternativas: ["2.100", "1.956,5", "4.214", "2.107", "2.257,5"],
      correta: 3,
      explicacao:
        "O primeiro múltiplo é 105, e o último, 196. São (196 − 105) ÷ 7 + 1 = 14 termos. A soma é (105 + 196) · 14 ÷ 2 = 2.107.",
      explicacaoErradas:
        "“1.956,5” conta 13 termos, esquecendo o +1. “2.257,5” conta 15 termos. “4.214” não divide por 2. “2.100” usa 100 e 200 como extremos, que não são múltiplos de 7.",
      pegadinha: "Usar 100 e 200 na fórmula. Os extremos da PA são o 105 e o 196.",
      conhecimento: "Número de termos = (último − primeiro) ÷ razão + 1.",
    },
    {
      topico: "Progressão geométrica",
      subassunto: "Soma dos termos",
      dificuldade: 5,
      raciocinio: "Identificar a razão 2 e usar a soma da PG.",
      enunciado:
        "Um alerta foi enviado a 3 postos no 1º dia. Em cada dia seguinte, o número de postos que receberam o alerta foi o dobro do dia anterior. O total de envios nos 8 primeiros dias foi",
      alternativas: ["381", "384", "765", "768", "108"],
      correta: 2,
      explicacao: "S₈ = 3 · (2⁸ − 1) ÷ (2 − 1) = 3 · 255 = 765.",
      explicacaoErradas:
        "“384” é só o 8º dia. “768” esquece o −1 da fórmula. “381” soma apenas 7 dias. “108” trata a sequência como PA de razão 3.",
      pegadinha: "Responder com o termo do 8º dia. A pergunta é sobre o total.",
      conhecimento: "Sₙ = a₁ · (qⁿ − 1) ÷ (q − 1).",
    },
    {
      topico: "Progressão aritmética",
      subassunto: "Três termos com soma e produto",
      dificuldade: 5,
      raciocinio: "Escrever x − r, x, x + r e usar a soma para achar x.",
      enunciado:
        "Três números em PA crescente têm soma 21 e produto 231. O maior desses números é",
      alternativas: ["7", "4", "3", "11", "15"],
      correta: 3,
      explicacao:
        "3x = 21 dá x = 7. Então, (7 − r) · 7 · (7 + r) = 231, 49 − r² = 33 e r = 4. Os números são 3, 7 e 11.",
      explicacaoErradas:
        "“7” é o termo do meio, “4” é a razão e “3” é o menor número. “15” anda dois passos a partir do 7.",
      pegadinha: "Parar no x. O x é o termo do meio, e não o maior.",
      conhecimento: "Em três termos de PA, o do meio é a média dos outros dois.",
    },
    {
      topico: "Progressão geométrica",
      subassunto: "Termo geral a partir de dois termos",
      dificuldade: 5,
      raciocinio: "Do 2º ao 5º termo há 3 passos: a razão ao cubo vale 162 ÷ 6.",
      enunciado: "Em uma PG de termos positivos, a₂ = 6 e a₅ = 162. O valor de a₇ é",
      alternativas: ["486", "4.374", "729", "1.458", "266"],
      correta: 3,
      explicacao: "q³ = 162 ÷ 6 = 27, então q = 3 e a₁ = 2. a₇ = 2 · 3⁶ = 1.458.",
      explicacaoErradas:
        "“486” é o 6º termo. “4.374” usa 6 como primeiro termo. “729” esquece o a₁. “266” trata a sequência como PA.",
      pegadinha: "Tomar o 6 como a₁. Ele é o segundo termo.",
      conhecimento: "aₙ = aₖ · qⁿ⁻ᵏ: dá para andar a partir de qualquer termo.",
    },
    {
      topico: "Progressão geométrica",
      subassunto: "Condição de PG",
      dificuldade: 5,
      raciocinio: "O quadrado do termo do meio é igual ao produto dos vizinhos.",
      enunciado:
        "Os números x + 1, x + 4 e x + 10 formam, nessa ordem, uma PG. O quarto termo dessa PG é",
      alternativas: ["18", "21", "24", "15", "36"],
      correta: 2,
      explicacao:
        "(x + 4)² = (x + 1)(x + 10) dá 8x + 16 = 11x + 10 e x = 2. A PG é 3, 6, 12, 24.",
      explicacaoErradas:
        "“18” soma a última diferença, 6. “21” continua as diferenças 3, 6, 9. “15” soma a primeira diferença, 3. “36” multiplica o 1º pelo 3º termo.",
      pegadinha: "Continuar pelas diferenças. Na PG, o que se repete é a multiplicação.",
      conhecimento: "Se a, b, c estão em PG, então b² = a · c.",
    },
  ],
};
