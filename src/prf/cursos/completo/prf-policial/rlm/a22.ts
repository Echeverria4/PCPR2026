import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-22",
  resumo: {
    ideia:
      "Moda é o valor que mais aparece. Em dados com classes, ela depende do método que a questão pedir.",
    itens: [
      {
        termo: "Quantas modas",
        faz: "Amodal não tem moda. Unimodal tem uma. Bimodal tem duas. Multimodal tem mais de duas.",
      },
      {
        termo: "Variável nominal",
        faz: "A moda é a única das três medidas que serve. Não há média nem mediana de tipos de veículo.",
      },
      {
        termo: "Classe modal",
        faz: "Com amplitudes iguais, é a classe de maior frequência.",
      },
      {
        termo: "Moda bruta",
        faz: "É o ponto médio da classe modal.",
      },
      {
        termo: "Pearson",
        faz: "Moda = 3 · mediana − 2 · média.",
      },
      {
        termo: "Czuber",
        faz: "Moda = l + d₁ ÷ (d₁ + d₂) · h.",
        pista: "d₁ é a frequência da classe modal menos a anterior. d₂ é a frequência da classe modal menos a posterior.",
      },
      {
        termo: "King",
        faz: "Moda = l + posterior ÷ (anterior + posterior) · h.",
        pista: "Usa só as frequências vizinhas da classe modal.",
      },
      {
        termo: "Amplitudes diferentes",
        faz: "Czuber e King exigem amplitudes iguais. Com amplitudes diferentes, compare as densidades.",
      },
      {
        termo: "Constantes",
        faz: "Somar ou multiplicar todos os valores faz o mesmo com a moda.",
      },
    ],
    cuidado:
      "Moda é um valor da variável, e não a sua frequência. Se o 7 aparece 5 vezes, a moda é 7.",
  },
  questoes: [
    {
      topico: "Moda de dados brutos",
      subassunto: "Conjunto bimodal",
      dificuldade: 4,
      raciocinio: "Contar quantas vezes cada valor aparece.",
      enunciado: "O conjunto 3, 5, 5, 7, 7, 9 é",
      alternativas: [
        "amodal, pois 5 e 7 se repetem igualmente",
        "unimodal, com moda 6",
        "unimodal, com moda 9",
        "bimodal, com modas 3 e 9",
        "bimodal, com modas 5 e 7",
      ],
      correta: 4,
      explicacao: "O 5 e o 7 aparecem duas vezes, mais que os demais. As duas são modas.",
      explicacaoErradas:
        "“amodal” seria o caso de todos terem a mesma frequência, e o 3 e o 9 aparecem menos. “moda 6” faz a média das modas. “moda 9” pega o maior valor. “modas 3 e 9” pega os extremos.",
      pegadinha: "Fazer a média das duas modas. Elas ficam separadas.",
      conhecimento: "Empate na maior frequência gera mais de uma moda.",
    },
    {
      topico: "Moda de dados com classes",
      subassunto: "Método de Czuber",
      dificuldade: 5,
      raciocinio: "Calcular d₁ e d₂ e aplicar a fórmula.",
      enunciado:
        "Em uma tabela, as classes são 20 ⊢ 30 (9 casos), 30 ⊢ 40 (15) e 40 ⊢ 50 (11). A moda, pelo método de Czuber, é",
      alternativas: ["35", "35,5", "34", "36", "15"],
      correta: 3,
      explicacao: "d₁ = 15 − 9 = 6, e d₂ = 15 − 11 = 4. Moda = 30 + 6 ÷ 10 · 10 = 36.",
      explicacaoErradas:
        "“35” é a moda bruta. “35,5” usa o método de King. “34” inverte d₁ e d₂. “15” é a frequência da classe modal.",
      pegadinha: "Inverter d₁ e d₂. O d₁ vem da classe anterior.",
      conhecimento: "A moda se aproxima do vizinho de maior frequência.",
    },
    {
      topico: "Moda de dados com classes",
      subassunto: "Fórmula de Pearson",
      dificuldade: 5,
      raciocinio: "Três vezes a mediana menos duas vezes a média.",
      enunciado:
        "Em um conjunto de dados, a mediana é 40, e a média é 43. A moda, pela fórmula de Pearson, é",
      alternativas: ["34", "49", "37", "46", "41,5"],
      correta: 0,
      explicacao: "Moda = 3 · 40 − 2 · 43 = 120 − 86 = 34.",
      explicacaoErradas:
        "“49” troca mediana e média na fórmula. “37” faz 2 · 40 − 43, e “46” faz 2 · 43 − 40. “41,5” é a média das duas medidas.",
      pegadinha: "Trocar os papéis. O 3 acompanha a mediana, e o 2 acompanha a média.",
      conhecimento: "Pearson: moda = 3 · mediana − 2 · média.",
    },
    {
      topico: "Moda de variável nominal",
      subassunto: "Medida que se aplica",
      dificuldade: 4,
      raciocinio: "Tipo de veículo não tem ordem nem valor numérico.",
      enunciado:
        "Em uma fiscalização, foram contados 12 motos, 30 carros e 8 caminhões. Sobre as medidas de posição da variável tipo de veículo,",
      alternativas: [
        "a média é 16,67, e a moda é carro",
        "a mediana é moto, e a moda é carro",
        "só a moda se aplica, e ela é carro",
        "a moda é 30, pois é a maior frequência",
        "não há moda, pois a variável não é numérica",
      ],
      correta: 2,
      explicacao: "A variável é nominal. Não há média nem mediana. A moda é a categoria mais frequente: carro.",
      explicacaoErradas:
        "“a média é 16,67” faz a média das frequências. “a mediana é moto” ordena as frequências, e não os dados. “a moda é 30” dá a frequência, e não o valor. “não há moda” erra, pois a moda serve para categorias.",
      pegadinha: "Calcular com as contagens. Os dados são os tipos, e não os números.",
      conhecimento: "Variável nominal aceita moda, e só ela.",
    },
    {
      topico: "Propriedades da moda",
      subassunto: "Multiplicar e subtrair",
      dificuldade: 5,
      raciocinio: "A moda segue as operações, na ordem dada.",
      enunciado:
        "A moda de um conjunto é 12. Cada valor é multiplicado por 3 e, depois, diminuído de 4. A nova moda é",
      alternativas: ["36", "8", "24", "12", "32"],
      correta: 4,
      explicacao: "12 · 3 − 4 = 32.",
      explicacaoErradas:
        "“36” só multiplica. “8” só subtrai. “24” subtrai antes de multiplicar. “12” supõe que a moda não muda.",
      pegadinha: "Trocar a ordem. Primeiro multiplica, depois subtrai.",
      conhecimento: "Média, mediana e moda seguem somas e multiplicações por constante.",
    },
    {
      topico: "Moda de dados com classes",
      subassunto: "Amplitudes diferentes",
      dificuldade: 5,
      raciocinio: "Com amplitudes diferentes, comparar frequência ÷ amplitude.",
      enunciado:
        "Em uma tabela, as classes são 0 ⊢ 10 (20 casos), 10 ⊢ 30 (30) e 30 ⊢ 40 (18). A classe modal é",
      alternativas: ["0 ⊢ 10", "10 ⊢ 30", "30 ⊢ 40", "0 ⊢ 40", "0 ⊢ 30"],
      correta: 0,
      explicacao: "Densidades: 20 ÷ 10 = 2; 30 ÷ 20 = 1,5; 18 ÷ 10 = 1,8. A maior é a de 0 ⊢ 10.",
      explicacaoErradas:
        "“10 ⊢ 30” olha a maior frequência, sem dividir pela amplitude. “30 ⊢ 40” tem a segunda maior densidade. “0 ⊢ 40” é a tabela inteira, e “0 ⊢ 30” junta duas classes.",
      pegadinha: "Olhar só a frequência. A classe de 10 a 30 é a mais larga.",
      conhecimento: "Densidade = frequência ÷ amplitude.",
    },
  ],
};
