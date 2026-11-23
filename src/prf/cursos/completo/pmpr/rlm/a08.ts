import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-a08",
  resumo: {
    ideia:
      "Estatística organiza dados para tirar conclusões. As medidas de posição resumem um conjunto em um número: média (a conta de dividir), mediana (o do meio) e moda (o que mais aparece). A prova cobra o cálculo de cada uma e o que acontece com elas quando os dados mudam.",
    itens: [
      {
        termo: "População e amostra",
        faz: "População é o grupo inteiro estudado. Amostra é a parte dele que foi realmente medida.",
      },
      {
        termo: "Tipos de variável",
        faz: "Qualitativa (categoria): nominal, sem ordem (tipo sanguíneo), ou ordinal, com ordem (patente). Quantitativa (número): discreta, de contar (nº de filhos), ou contínua, de medir (altura).",
      },
      {
        termo: "Frequência",
        faz: "Absoluta: quantas vezes o valor aparece. Relativa: essa quantidade dividida pelo total, em %. Acumulada: soma das frequências até aquele valor.",
      },
      {
        termo: "Média aritmética",
        faz: "Soma de todos os valores dividida pela quantidade de valores.",
      },
      {
        termo: "Média ponderada",
        faz: "Cada valor é multiplicado pelo seu peso; soma-se tudo e divide-se pela soma dos pesos. Em tabela de frequências, a frequência é o peso.",
      },
      {
        termo: "Média de dois grupos juntos",
        faz: "Não é a média das médias: cada média pesa pelo tamanho do grupo. (n₁ × média₁ + n₂ × média₂) ÷ (n₁ + n₂).",
      },
      {
        termo: "Propriedades",
        faz: "Somar uma constante a todos os valores soma essa constante à média, à mediana e à moda. Multiplicar todos por um número multiplica as três por esse número.",
        pista: "Somar não muda a distância entre os valores; multiplicar muda.",
      },
      {
        termo: "Mediana",
        faz: "Valor do meio do rol (dados em ordem crescente). Quantidade ímpar: o termo central, na posição (n + 1) ÷ 2. Quantidade par: média dos dois termos centrais.",
        pista: "Sem pôr em ordem, a mediana sai errada.",
      },
      {
        termo: "Moda",
        faz: "Valor que mais se repete. Pode haver uma moda, duas (bimodal), várias ou nenhuma (amodal).",
        pista: "A moda é o valor, não a quantidade de vezes que ele aparece.",
      },
      {
        termo: "Robustez",
        faz: "Um valor muito fora do padrão (outlier) puxa bastante a média. Mediana e moda quase não mudam: são medidas robustas.",
      },
      {
        termo: "Dados em classes",
        faz: "Quando os dados vêm em faixas (de 20 a 24 anos, por exemplo), usa-se o ponto médio de cada faixa como representante para calcular a média.",
      },
      {
        termo: "Relação de Pearson",
        faz: "Em distribuições pouco assimétricas: moda ≈ 3 × mediana − 2 × média.",
      },
    ],
  },
  questoes: [
    {
      topico: "Conceitos básicos",
      subassunto: "Tipos de variável",
      dificuldade: 4,
      raciocinio: "Separar categoria de número; depois, ordem ou não, contar ou medir.",
      enunciado:
        "Em uma pesquisa com os soldados de um batalhão, foram anotadas as variáveis:\nI. a graduação de cada um (soldado, cabo, sargento);\nII. o número de filhos;\nIII. a altura;\nIV. o tipo sanguíneo.\nSabendo que nominal e ordinal são tipos de variável qualitativa, e discreta e contínua são tipos de variável quantitativa, as variáveis I, II, III e IV são, respectivamente,",
      alternativas: [
        "nominal, discreta, contínua, ordinal.",
        "ordinal, discreta, contínua, nominal.",
        "ordinal, contínua, discreta, nominal.",
        "nominal, contínua, discreta, ordinal.",
        "ordinal, discreta, contínua, discreta.",
      ],
      correta: 1,
      explicacao:
        "Graduação é categoria com ordem (qualitativa ordinal). Número de filhos é contado (quantitativa discreta). Altura é medida e pode ter qualquer valor (quantitativa contínua). Tipo sanguíneo é categoria sem ordem (qualitativa nominal).",
      explicacaoErradas:
        "Chamar a graduação de nominal ignora a hierarquia entre soldado, cabo e sargento. Trocar discreta por contínua confunde contar (filhos) com medir (altura). Tipo sanguíneo é categoria, não número, então não pode ser discreta.",
      pegadinha: "Número de filhos é quantitativa discreta: não existe 1,5 filho.",
      conhecimento: "Discreta = contagem. Contínua = medição.",
    },
    {
      topico: "Média",
      subassunto: "Média ponderada",
      dificuldade: 5,
      raciocinio: "Montar a média ponderada com a nota desconhecida e resolver a inequação.",
      enunciado:
        "No curso de formação, a nota final é a média ponderada de três provas: teórica (peso 4), física (peso 3) e tiro (peso 3). Um aluno tirou 6,0 na teórica e 9,0 na física. Para que a nota final seja pelo menos 7,5, a nota mínima que ele precisa tirar na prova de tiro é",
      alternativas: ["7,5", "7,0", "8,5", "9,0", "8,0"],
      correta: 4,
      explicacao:
        "(6 × 4 + 9 × 3 + 3x) ÷ 10 ≥ 7,5 → 51 + 3x ≥ 75 → 3x ≥ 24 → x ≥ 8,0.",
      explicacaoErradas:
        "7,5 sai da média simples, sem os pesos. 9,0 dá peso 1 à prova de tiro. 7,0 deixa a nota final em 7,2. 8,5 também é suficiente, mas não é a mínima.",
      pegadinha: "A soma dos pesos (10) é que vai no denominador, não o número de provas.",
      conhecimento: "Média ponderada = Σ(valor × peso) ÷ Σ(pesos).",
    },
    {
      topico: "Média",
      subassunto: "Propriedades das medidas",
      dificuldade: 5,
      raciocinio: "Aplicar o reajuste e o abono a cada medida e comparar as diferenças.",
      enunciado:
        "Os salários dos servidores de um setor têm média de R$ 3.000, mediana de R$ 2.800 e moda de R$ 2.500. Todos recebem reajuste de 10% e, depois, um abono fixo de R$ 200. Considere:\nI. A nova média é R$ 3.500.\nII. A diferença entre a média e a mediana continua sendo R$ 200.\nIII. A nova moda é R$ 2.950.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I.", "Apenas I e II.", "Apenas I e III.", "Apenas II e III.", "I, II e III."],
      correta: 2,
      explicacao:
        "Cada medida é multiplicada por 1,1 e somada a 200. Média: 3.300 + 200 = 3.500 (I). Moda: 2.750 + 200 = 2.950 (III). Mediana: 3.080 + 200 = 3.280.",
      explicacaoErradas:
        "II está errada: a diferença passa de 200 para 3.500 − 3.280 = 220. O abono não muda a distância, mas o reajuste de 10% aumenta essa distância também.",
      pegadinha: "Somar uma constante mantém as distâncias; multiplicar aumenta as distâncias na mesma proporção.",
      conhecimento: "As três medidas reagem igual a somas e multiplicações feitas em todos os valores.",
    },
    {
      topico: "Média",
      subassunto: "Média de grupos reunidos",
      dificuldade: 5,
      raciocinio: "Usar os totais de pontos, e não a média das médias.",
      enunciado:
        "Dois pelotões fizeram o mesmo teste físico, e a média geral dos 50 policiais foi de 74 pontos. O pelotão A, com 20 policiais, teve média de 80 pontos. A média do pelotão B, com os demais policiais, foi de",
      alternativas: ["70 pontos", "68 pontos", "72 pontos", "77 pontos", "71 pontos"],
      correta: 0,
      explicacao:
        "Total geral: 50 × 74 = 3.700 pontos. Pelotão A: 20 × 80 = 1.600. Pelotão B: 2.100 pontos para 30 policiais, média de 70.",
      explicacaoErradas:
        "68 supõe que 74 é a média simples das duas médias (2 × 74 − 80). 77 é a média entre 80 e 74. 72 e 71 não fecham o total: 1.600 + 30 × 72 = 3.760, por exemplo.",
      pegadinha: "Os grupos têm tamanhos diferentes; por isso a média geral não fica no meio das duas.",
      conhecimento: "Média do grupo todo = soma total ÷ número total de pessoas.",
    },
    {
      topico: "Medidas de posição",
      subassunto: "Efeito de um valor extremo",
      dificuldade: 5,
      raciocinio: "Calcular as três medidas antes e depois de incluir o valor extremo.",
      enunciado:
        "Em seis dias, um posto policial registrou 5, 7, 7, 8, 10 e 11 ocorrências. No sétimo dia, por causa de um grande evento, foram registradas 50 ocorrências. Comparando os seis primeiros dias com os sete dias, avalie:\nI. A média passa de 8 para 14.\nII. A mediana não se altera.\nIII. A moda não se altera.\nIV. A mediana passa a ser maior que a média.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I.", "Apenas I e II.", "Apenas III e IV.", "Apenas I e III.", "Apenas I, II e III."],
      correta: 3,
      explicacao:
        "Antes: média 48 ÷ 6 = 8, mediana (7 + 8) ÷ 2 = 7,5, moda 7. Depois: média 98 ÷ 7 = 14, mediana 8 (4º termo de 5, 7, 7, 8, 10, 11, 50), moda 7. I e III estão certas.",
      explicacaoErradas:
        "II está errada: a mediana muda pouco (7,5 para 8), mas muda. IV está errada: a mediana (8) fica bem abaixo da média (14), que foi puxada pelo valor 50.",
      pegadinha: "Robusta não quer dizer imutável: a mediana muda pouco, enquanto a média dispara.",
      conhecimento: "Média é sensível a outliers; mediana e moda são robustas.",
    },
    {
      topico: "Mediana",
      subassunto: "Quantidade par de dados",
      dificuldade: 4,
      raciocinio: "Pôr em ordem crescente e tirar a média dos dois termos centrais.",
      enunciado:
        "Os tempos de atendimento, em minutos, de dez chamados foram: 12, 7, 15, 9, 20, 7, 11, 18, 9 e 14. A mediana desses tempos é",
      alternativas: ["12,2", "13,5", "11", "11,5", "12"],
      correta: 3,
      explicacao:
        "Em ordem: 7, 7, 9, 9, 11, 12, 14, 15, 18, 20. Os termos centrais são o 5º (11) e o 6º (12). Mediana: (11 + 12) ÷ 2 = 11,5.",
      explicacaoErradas:
        "12,2 é a média (122 ÷ 10). 13,5 usa os termos do meio da lista fora de ordem (20 e 7). 11 e 12 pegam só um dos dois termos centrais.",
      pegadinha: "A mediana só vale com os dados em ordem.",
      conhecimento: "n par: mediana = média dos termos nas posições n/2 e n/2 + 1.",
    },
    {
      topico: "Medidas de posição",
      subassunto: "Tabela de frequências",
      dificuldade: 5,
      raciocinio: "Média com a frequência como peso; mediana pela frequência acumulada; moda pelo valor mais frequente.",
      enunciado:
        "A tabela mostra o número de filhos dos 40 policiais de uma companhia:\n0 filho: 8 policiais\n1 filho: 12 policiais\n2 filhos: 10 policiais\n3 filhos: 6 policiais\n4 filhos: 4 policiais\nA média, a mediana e a moda do número de filhos são, respectivamente,",
      alternativas: ["1,65; 1,5 e 1.", "1,65; 2 e 1.", "2; 1,5 e 1.", "1,5; 1,65 e 2.", "1,65; 1,5 e 12."],
      correta: 0,
      explicacao:
        "Média: (0 × 8 + 1 × 12 + 2 × 10 + 3 × 6 + 4 × 4) ÷ 40 = 66 ÷ 40 = 1,65. Mediana: média do 20º e do 21º termos; o acumulado chega a 8 no 0 e a 20 no 1, então o 20º é 1 e o 21º é 2, e a mediana é 1,5. Moda: 1, que aparece 12 vezes.",
      explicacaoErradas:
        "A mediana 2 é o meio da lista 0, 1, 2, 3, 4, sem as frequências. A média 2 também ignora as frequências. 12 é quantas vezes a moda aparece, não a moda.",
      pegadinha: "Em tabela, a frequência é o peso, e a moda é o valor da 1ª coluna, não o número da 2ª.",
      conhecimento: "Use a frequência acumulada para achar a posição da mediana.",
    },
    {
      topico: "Moda",
      subassunto: "Relação de Pearson",
      dificuldade: 5,
      raciocinio: "Aplicar moda ≈ 3 × mediana − 2 × média.",
      enunciado:
        "Em uma distribuição pouco assimétrica, a média é 52 e a mediana é 50. Pela relação empírica de Pearson, a moda é aproximadamente",
      alternativas: ["48", "54", "51", "56", "46"],
      correta: 4,
      explicacao: "Moda ≈ 3 × 50 − 2 × 52 = 150 − 104 = 46.",
      explicacaoErradas:
        "56 troca os papéis (3 × média − 2 × mediana). 48 supõe que a moda fica tão longe da mediana quanto a média, só que do outro lado. 51 é a média entre 52 e 50.",
      pegadinha: "A moda fica do lado oposto ao da média, e cerca de três vezes mais longe dela do que a mediana.",
      conhecimento: "Média − moda ≈ 3 × (média − mediana).",
    },
    {
      topico: "Média",
      subassunto: "Dados agrupados em classes",
      dificuldade: 5,
      raciocinio: "Usar o ponto médio de cada classe como valor e a frequência como peso.",
      enunciado:
        "As idades dos 20 soldados de um pelotão estão agrupadas assim:\nde 20 a 24 anos (sem incluir 24): 6 soldados\nde 24 a 28 anos (sem incluir 28): 8 soldados\nde 28 a 32 anos (sem incluir 32): 4 soldados\nde 32 a 36 anos (sem incluir 36): 2 soldados\nUsando o ponto médio de cada classe, a idade média estimada é",
      alternativas: ["24,4 anos", "28 anos", "26,4 anos", "26 anos", "28,4 anos"],
      correta: 2,
      explicacao:
        "Pontos médios: 22, 26, 30 e 34. Média: (6 × 22 + 8 × 26 + 4 × 30 + 2 × 34) ÷ 20 = 528 ÷ 20 = 26,4 anos.",
      explicacaoErradas:
        "24,4 usa o início de cada classe, e 28,4 usa o fim. 28 é a média dos pontos médios sem os pesos. 26 é o ponto médio da classe com mais soldados, uma estimativa da moda.",
      pegadinha: "O ponto médio é a metade do caminho entre o início e o fim da classe.",
      conhecimento: "Ponto médio = (limite inferior + limite superior) ÷ 2.",
    },
    {
      topico: "Medidas de posição",
      subassunto: "Conceitos",
      dificuldade: 5,
      raciocinio: "Julgar cada definição e cada propriedade.",
      enunciado:
        "Julgue as afirmações, marcando V para verdadeiro e F para falso.\n( ) Em um conjunto com quantidade par de valores, a mediana é a média dos dois termos centrais do rol.\n( ) Um conjunto de dados pode ter mais de uma moda ou não ter moda.\n( ) A média é uma medida robusta, pouco afetada por valores extremos.\n( ) Multiplicando todos os valores por 3, a média, a mediana e a moda também ficam multiplicadas por 3.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, F, F, V.", "V, V, F, V.", "F, V, F, V.", "V, V, V, F.", "V, F, V, V."],
      correta: 1,
      explicacao:
        "1ª: V. 2ª: V, pois o conjunto pode ser bimodal ou amodal. 3ª: F, porque a média é a medida mais sensível a valores extremos. 4ª: V.",
      explicacaoErradas:
        "Marcar V na 3ª troca a média pela mediana e pela moda, que são as robustas. Marcar F na 2ª esquece os casos bimodal e amodal.",
      pegadinha: "Robusta é a mediana, não a média.",
      conhecimento: "Amodal: nenhum valor se repete mais que os outros.",
    },
  ],
};
