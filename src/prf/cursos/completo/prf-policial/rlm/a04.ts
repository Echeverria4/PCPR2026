import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-04",
  resumo: {
    ideia:
      "Potências de 10 deixam números muito grandes ou muito pequenos fáceis de operar. As unidades de medida seguem saltos fixos. A prova costuma misturar unidades no mesmo problema: converta tudo antes de fazer a conta.",
    itens: [
      {
        termo: "Potência de 10",
        faz: "Expoente positivo conta zeros: 10⁴ = 10.000. Expoente negativo conta casas depois da vírgula: 10⁻⁴ = 0,0001.",
      },
      {
        termo: "Notação científica",
        faz: "É a forma A × 10ⁿ, com 1 ≤ A < 10 e n inteiro.",
        pista: "“43 × 10⁻⁵” tem o valor certo, mas não está em notação científica.",
      },
      {
        termo: "Andar com a vírgula",
        faz: "Vírgula para a esquerda aumenta o expoente. Vírgula para a direita diminui.",
      },
      {
        termo: "Multiplicar e dividir",
        faz: "Opere os números e, nas potências de 10, some ou subtraia os expoentes.",
      },
      {
        termo: "Comprimento e massa",
        faz: "A cada degrau (km, hm, dam, m, dm, cm, mm), multiplica ou divide por 10. Na massa, 1 t = 1.000 kg.",
      },
      {
        termo: "Área",
        faz: "A cada degrau, o fator é 100. 1 hectare = 10.000 m², e 1 km² = 100 hectares.",
      },
      {
        termo: "Volume",
        faz: "A cada degrau, o fator é 1.000.",
      },
      {
        termo: "Capacidade",
        faz: "1 dm³ = 1 litro e 1 m³ = 1.000 litros.",
      },
    ],
    cuidado:
      "Antes de multiplicar, deixe tudo na mesma unidade. Um lado em metros e outro em centímetros é o erro que a prova costuma plantar.",
  },
  questoes: [
    {
      topico: "Potências de 10",
      subassunto: "Expressão com números muito pequenos e grandes",
      dificuldade: 4,
      raciocinio: "Escrever cada fator como número simples vezes potência de 10 e operar os expoentes.",
      enunciado: "O valor de (0,0004 × 30.000) ÷ (0,002 × 600) é",
      alternativas: ["0,1", "1", "100", "1.000", "10"],
      correta: 4,
      explicacao:
        "Em cima: 4 × 10⁻⁴ × 3 × 10⁴ = 12. Embaixo: 2 × 10⁻³ × 6 × 10² = 1,2. Logo, 12 ÷ 1,2 = 10.",
      explicacaoErradas:
        "“0,1”, “1”, “100” e “1.000” têm a parte numérica certa e erram só o expoente, depois de uma casa contada a mais ou a menos.",
      pegadinha:
        "Ignorar os expoentes negativos ao subtrair na divisão. Subtrair um número negativo aumenta o expoente.",
      conhecimento: "Produto: somam-se os expoentes. Divisão: subtraem-se.",
    },
    {
      topico: "Notação científica",
      subassunto: "Forma correta do número",
      dificuldade: 5,
      raciocinio: "Deixar o número antes da potência entre 1 e 10 e corrigir o expoente.",
      enunciado: "O número 4.300 × 10⁻⁷, escrito em notação científica, é",
      alternativas: ["4,3 × 10⁻⁴", "43 × 10⁻⁵", "0,43 × 10⁻³", "4,3 × 10⁻³", "4,3 × 10⁻¹⁰"],
      correta: 0,
      explicacao: "4.300 = 4,3 × 10³. Logo, 4,3 × 10³ × 10⁻⁷ = 4,3 × 10⁻⁴.",
      explicacaoErradas:
        "“43 × 10⁻⁵” e “0,43 × 10⁻³” têm o mesmo valor, mas o número antes da potência não fica entre 1 e 10. “4,3 × 10⁻³” erra uma casa. “4,3 × 10⁻¹⁰” subtrai o 3 em vez de somar.",
      pegadinha:
        "Aceitar qualquer forma de valor igual. A notação científica exige 1 ≤ A < 10.",
      conhecimento: "Notação científica: A × 10ⁿ, com 1 ≤ A < 10.",
    },
    {
      topico: "Unidades de medida",
      subassunto: "Área em hectares",
      dificuldade: 4,
      raciocinio: "Calcular em m² e dividir por 10.000.",
      enunciado:
        "Um pátio de veículos apreendidos é retangular e mede 250 m por 120 m. Sua área, em hectares, é",
      alternativas: ["0,3", "30", "3", "300", "3.000"],
      correta: 2,
      explicacao: "250 · 120 = 30.000 m². Como 1 hectare tem 10.000 m², a área é de 3 hectares.",
      explicacaoErradas:
        "“300” divide por 100, “30” divide por 1.000, “3.000” divide por 10 e “0,3” divide por 100.000.",
      pegadinha:
        "Dividir por 100 porque “hecto” lembra cem. O hectare é um quadrado de 100 m de lado: 10.000 m².",
      conhecimento: "1 ha = 10.000 m²; 1 km² = 100 ha.",
    },
    {
      topico: "Unidades de medida",
      subassunto: "Volume e capacidade com unidades misturadas",
      dificuldade: 5,
      raciocinio: "Passar 80 cm para metros, achar o volume e converter para litros.",
      enunciado:
        "Um reservatório de combustível tem a forma de um paralelepípedo, com 2 m de comprimento, 1,5 m de largura e 80 cm de altura. Sua capacidade, em litros, é",
      alternativas: ["24", "240", "24.000", "2.400", "240.000"],
      correta: 3,
      explicacao: "2 · 1,5 · 0,8 = 2,4 m³. Como 1 m³ = 1.000 litros, são 2.400 litros.",
      explicacaoErradas:
        "“240” multiplica 2 · 1,5 · 80 sem converter a altura. “240.000” faz o mesmo e ainda multiplica por 1.000. “24” e “24.000” erram a conversão em uma ou duas casas.",
      pegadinha:
        "Multiplicar as três medidas como estão. Elas precisam estar na mesma unidade.",
      conhecimento: "1 m³ = 1.000 L e 1 dm³ = 1 L.",
    },
    {
      topico: "Unidades de medida",
      subassunto: "Massa em toneladas e quilogramas",
      dificuldade: 4,
      raciocinio: "Passar a carga para toneladas antes de somar ao peso do caminhão.",
      enunciado:
        "Um caminhão vazio pesa 8,4 t e transporta 1.250 sacas de 12 kg cada. O peso total do conjunto, em toneladas, é",
      alternativas: ["9,9", "15", "23,4", "15,84", "158,4"],
      correta: 2,
      explicacao: "1.250 · 12 = 15.000 kg = 15 t. Somando com o caminhão: 8,4 + 15 = 23,4 t.",
      explicacaoErradas:
        "“15” é só a carga. “9,9” toma a carga como 1,5 t, e “158,4” toma a carga como 150 t. “15,84” lê as 8,4 t do caminhão como 840 kg.",
      pegadinha:
        "Dividir 15.000 por 100 ou por 10.000. De quilograma para tonelada, divide-se por 1.000.",
      conhecimento: "1 t = 1.000 kg.",
    },
    {
      topico: "Unidades de medida",
      subassunto: "Comprimento e contagem de intervalos",
      dificuldade: 5,
      raciocinio: "Converter tudo para metros e lembrar que há um cone a mais que o número de intervalos.",
      enunciado:
        "Em uma barreira, cones são colocados em linha reta a cada 25 dm, ao longo de 0,8 km, com um cone em cada extremidade. O número de cones usados é",
      alternativas: ["32", "33", "320", "3.201", "321"],
      correta: 4,
      explicacao:
        "25 dm = 2,5 m e 0,8 km = 800 m. São 800 ÷ 2,5 = 320 intervalos e, com um cone em cada ponta, 321 cones.",
      explicacaoErradas:
        "“320” conta os intervalos, e não os cones. “32” e “33” erram a conversão de decímetros, tomando 25 m. “3.201” toma 25 cm.",
      pegadinha:
        "Parar na divisão. Em uma linha com as duas pontas ocupadas, o total é o número de intervalos mais um.",
      conhecimento:
        "Linha aberta com as duas pontas ocupadas: intervalos + 1. Percurso fechado: número de pontos igual ao de intervalos.",
    },
  ],
};
