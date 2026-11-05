import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-21",
  resumo: {
    ideia:
      "Mediana é o valor do meio, com os dados em ordem. Metade fica abaixo dela, e metade fica acima.",
    itens: [
      {
        termo: "Primeiro passo",
        faz: "Coloque os dados em ordem. Sem isso, a mediana sai errada.",
      },
      {
        termo: "n ímpar",
        faz: "A mediana é o valor central.",
      },
      {
        termo: "n par",
        faz: "A mediana é a média dos dois valores centrais.",
      },
      {
        termo: "Dados sem classes",
        faz: "Use a frequência acumulada para achar a posição central.",
      },
      {
        termo: "Dados com classes",
        faz: "Md = l + (n/2 − F) ÷ f · h.",
        pista: "l é o limite inferior, F é a acumulada antes da classe, f é a frequência da classe e h é a amplitude.",
      },
      {
        termo: "Valores extremos",
        faz: "A mediana quase não reage a eles. A média reage.",
      },
      {
        termo: "Constantes",
        faz: "Somar ou multiplicar todos os valores faz o mesmo com a mediana.",
      },
      {
        termo: "Separatrizes",
        faz: "Quartis dividem em 4 partes, decis em 10 e percentis em 100.",
        pista: "Q₂ = D₅ = P₅₀ = mediana.",
      },
    ],
    cuidado:
      "Em dados com classes, F é a acumulada da classe anterior, e não a da classe da mediana.",
  },
  questoes: [
    {
      topico: "Mediana de dados brutos",
      subassunto: "Quantidade par de valores",
      dificuldade: 4,
      raciocinio: "Ordenar e fazer a média dos dois centrais.",
      enunciado:
        "Seis velocidades, em km/h, foram medidas: 72, 95, 80, 110, 64 e 88. A mediana dessas velocidades é",
      alternativas: ["80", "88", "84", "95", "84,8"],
      correta: 2,
      explicacao: "Em ordem: 64, 72, 80, 88, 95, 110. A mediana é (80 + 88) ÷ 2 = 84.",
      explicacaoErradas:
        "“80” e “88” usam só um dos valores centrais. “95” pega 80 e 110, centrais da lista sem ordenar. “84,8” é a média, arredondada.",
      pegadinha: "Calcular sem ordenar. A posição só vale com os dados em ordem.",
      conhecimento: "Com n par, há dois valores centrais.",
    },
    {
      topico: "Mediana e média",
      subassunto: "Efeito de um valor extremo",
      dificuldade: 4,
      raciocinio: "Mudar o maior valor mexe na soma, e não na posição central.",
      enunciado:
        "Em um conjunto de 9 medições, o maior valor foi corrigido de 120 para 180. Sobre a média e a mediana, após a correção,",
      alternativas: [
        "a média aumenta, e a mediana não muda",
        "a média e a mediana aumentam na mesma proporção",
        "a média não muda, e a mediana aumenta",
        "a média e a mediana permanecem iguais",
        "a média e a mediana diminuem",
      ],
      correta: 0,
      explicacao: "A soma sobe, e a média sobe junto. O 5º valor em ordem continua o mesmo, e a mediana não muda.",
      explicacaoErradas:
        "“aumentam na mesma proporção” ignora que a mediana depende só da posição. “a média não muda” ignora que a soma aumentou. “permanecem iguais” erra pelo mesmo motivo. “diminuem” contraria a correção para cima.",
      pegadinha: "Achar que toda medida reage. A mediana resiste a valores extremos.",
      conhecimento: "Mediana é medida resistente. Média não é.",
    },
    {
      topico: "Mediana de dados agrupados",
      subassunto: "Dados sem classes",
      dificuldade: 5,
      raciocinio: "Com 30 dados, os centrais são o 15º e o 16º. Usar a acumulada.",
      enunciado:
        "Em 30 veículos, o número de infrações foi: 0 em 14 veículos, 1 em 6, 2 em 4, 3 em 3 e 4 em 3. A mediana do número de infrações é",
      alternativas: ["2", "1,17", "0", "4", "1"],
      correta: 4,
      explicacao: "Acumulada: 14, 20, 24, 27, 30. O 15º e o 16º valores estão na linha do 1. A mediana é 1.",
      explicacaoErradas:
        "“2” é o meio da lista 0, 1, 2, 3, 4, sem as frequências. “1,17” é a média. “0” é a moda. “4” é a mediana das frequências.",
      pegadinha: "Olhar só os valores da tabela. Cada um se repete conforme a frequência.",
      conhecimento: "Em tabela, a acumulada localiza a posição central.",
    },
    {
      topico: "Mediana de dados agrupados",
      subassunto: "Dados com classes",
      dificuldade: 5,
      raciocinio: "n/2 = 20 cai na terceira classe. Aplicar a fórmula.",
      enunciado:
        "Em uma tabela de velocidades, em km/h, as classes são 40 ⊢ 60 (6 veículos), 60 ⊢ 80 (10), 80 ⊢ 100 (16) e 100 ⊢ 120 (8). A mediana, por interpolação, em km/h, é",
      alternativas: ["90", "80", "84", "85", "97,5"],
      correta: 3,
      explicacao: "n/2 = 20, e a acumulada antes da classe é 16. Md = 80 + (20 − 16) ÷ 16 · 20 = 85.",
      explicacaoErradas:
        "“90” é o ponto médio da classe. “80” é o limite inferior. “84” soma só o 4, sem a fração da amplitude. “97,5” usa 6 como acumulada anterior.",
      pegadinha: "Parar na classe. Ela dá uma faixa, e a fórmula dá o valor.",
      conhecimento: "Md = l + (n/2 − F) ÷ f · h.",
    },
    {
      topico: "Separatrizes",
      subassunto: "Quartis, decis e percentis",
      dificuldade: 4,
      raciocinio: "Traduzir cada separatriz para a porcentagem de dados abaixo dela.",
      enunciado: "Sobre as separatrizes de um conjunto de dados, a igualdade verdadeira é",
      alternativas: [
        "P₂₅ = Q₂ = D₂",
        "P₅₀ = Q₂ = D₅",
        "P₇₅ = Q₃ = D₇",
        "P₄₀ = Q₂ = D₄",
        "P₅₀ = Q₃ = D₅",
      ],
      correta: 1,
      explicacao: "Os três valores deixam 50% dos dados abaixo. Todos são a mediana.",
      explicacaoErradas:
        "“P₂₅ = Q₂ = D₂” erra, pois P₂₅ é Q₁, e D₂ é P₂₀. “P₇₅ = Q₃ = D₇” erra, pois D₇ é P₇₀. “P₄₀ = Q₂ = D₄” erra, pois Q₂ é P₅₀. “P₅₀ = Q₃ = D₅” erra, pois Q₃ é P₇₅.",
      pegadinha: "Usar o mesmo número em todas. Cada separatriz divide em um total de partes diferente.",
      conhecimento: "Quartil: 25% cada. Decil: 10% cada. Percentil: 1% cada.",
    },
    {
      topico: "Propriedades da mediana",
      subassunto: "Aumento seguido de abono",
      dificuldade: 5,
      raciocinio: "A mediana acompanha as duas operações, na ordem dada.",
      enunciado:
        "A mediana dos salários de 9 servidores é R$ 5.000. Todos recebem aumento de 10% e, depois, abono de R$ 200. A nova mediana, em reais, é",
      alternativas: ["5.500", "5.200", "5.700", "5.720", "5.000"],
      correta: 2,
      explicacao: "5.000 · 1,1 = 5.500. Com o abono: 5.700.",
      explicacaoErradas:
        "“5.500” esquece o abono. “5.200” esquece o aumento. “5.720” soma o abono antes do aumento. “5.000” supõe que a mediana não muda.",
      pegadinha: "Inverter a ordem. O abono vem depois do aumento e não recebe os 10%.",
      conhecimento: "Operações iguais em todos os valores mantêm a ordem dos dados.",
    },
  ],
};
