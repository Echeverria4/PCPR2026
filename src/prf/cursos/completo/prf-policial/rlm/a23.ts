import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-23",
  resumo: {
    ideia:
      "Medidas de dispersão dizem o quanto os dados se espalham. Duas turmas podem ter a mesma média e dados bem diferentes.",
    itens: [
      {
        termo: "Amplitude total",
        faz: "Maior valor − menor valor.",
      },
      {
        termo: "Amplitude interquartílica",
        faz: "Q₃ − Q₁. O desvio quartílico é a metade disso.",
      },
      {
        termo: "Variância populacional",
        faz: "Soma dos quadrados dos desvios ÷ n.",
      },
      {
        termo: "Variância amostral",
        faz: "Soma dos quadrados dos desvios ÷ (n − 1).",
      },
      {
        termo: "Desvio-padrão",
        faz: "Raiz quadrada da variância. Fica na mesma unidade dos dados.",
      },
      {
        termo: "Atalho da variância",
        faz: "Média dos quadrados − quadrado da média.",
      },
      {
        termo: "Constantes",
        faz: "Somar não muda a dispersão. Multiplicar por c multiplica o desvio por c e a variância por c².",
      },
      {
        termo: "Coeficiente de variação",
        faz: "CV = desvio-padrão ÷ média. Serve para comparar conjuntos.",
      },
      {
        termo: "Variância relativa",
        faz: "Variância ÷ quadrado da média. É igual a CV².",
      },
    ],
    cuidado:
      "Veja se a questão fala em população ou amostra. O divisor muda de n para n − 1.",
  },
  questoes: [
    {
      topico: "Variância",
      subassunto: "Cálculo populacional",
      dificuldade: 4,
      raciocinio: "Achar a média, somar os quadrados dos desvios e dividir por n.",
      enunciado: "A variância populacional do conjunto 3, 5, 7, 9, 11 é",
      alternativas: ["10", "2√2", "8", "40", "0"],
      correta: 2,
      explicacao: "Média: 7. Quadrados dos desvios: 16, 4, 0, 4, 16. Soma: 40. Variância: 40 ÷ 5 = 8.",
      explicacaoErradas:
        "“10” divide por n − 1, que é a variância amostral. “2√2” é o desvio-padrão. “40” não divide. “0” é a soma dos desvios, sem elevar ao quadrado.",
      pegadinha: "Usar n − 1 sem que a questão fale em amostra.",
      conhecimento: "Sem o quadrado, os desvios sempre se anulam.",
    },
    {
      topico: "Coeficiente de variação",
      subassunto: "Comparar dois conjuntos",
      dificuldade: 5,
      raciocinio: "Dividir cada desvio pela média do próprio conjunto.",
      enunciado:
        "Dois radares foram avaliados. No trecho A, a média foi de 80 km/h, com desvio-padrão de 8 km/h. No trecho B, a média foi de 50 km/h, com desvio-padrão de 6 km/h. Tem maior dispersão relativa o trecho",
      alternativas: [
        "A, pois tem o maior desvio-padrão",
        "A, pois tem a maior média",
        "as duas, pois os desvios são próximos",
        "B, com CV de 12%, contra 10% de A",
        "B, pois tem o menor desvio-padrão",
      ],
      correta: 3,
      explicacao: "CV de A: 8 ÷ 80 = 10%. CV de B: 6 ÷ 50 = 12%. B varia mais em relação à própria média.",
      explicacaoErradas:
        "“A, pois tem o maior desvio-padrão” compara valores absolutos. “A, pois tem a maior média” usa uma medida de posição. “as duas” não calcula o CV. “B, pois tem o menor desvio-padrão” acerta o trecho com um motivo sem sentido.",
      pegadinha: "Comparar desvios diretamente. Dispersão relativa pede a divisão pela média.",
      conhecimento: "CV não tem unidade e permite comparar conjuntos diferentes.",
    },
    {
      topico: "Propriedades da variância",
      subassunto: "Multiplicar e somar uma constante",
      dificuldade: 5,
      raciocinio: "O 2 entra ao quadrado. O 5 não muda nada.",
      enunciado:
        "Um conjunto de dados tem variância 9. Cada valor é multiplicado por 2 e, depois, somado a 5. A nova variância é",
      alternativas: ["36", "18", "23", "41", "6"],
      correta: 0,
      explicacao: "Multiplicar por 2 multiplica a variância por 4: 36. Somar 5 não muda a dispersão.",
      explicacaoErradas:
        "“18” multiplica por 2, e não por 4. “23” faz 18 + 5. “41” faz 36 + 5. “6” é o novo desvio-padrão.",
      pegadinha: "Somar o 5. Mover todos os dados igualmente não os espalha.",
      conhecimento: "Variância: multiplicar por c multiplica por c².",
    },
    {
      topico: "Variância",
      subassunto: "Média dos quadrados",
      dificuldade: 5,
      raciocinio: "Variância = média dos quadrados − quadrado da média.",
      enunciado:
        "Em um conjunto de dados, a média é 10, e a média dos quadrados dos valores é 116. O desvio-padrão populacional é",
      alternativas: ["16", "4", "10,8", "106", "6"],
      correta: 1,
      explicacao: "Variância: 116 − 10² = 16. Desvio-padrão: √16 = 4.",
      explicacaoErradas:
        "“16” é a variância. “10,8” é √116, arredondada. “106” faz 116 − 10. “6” faz 16 − 10.",
      pegadinha: "Parar na variância. A pergunta é sobre o desvio-padrão.",
      conhecimento: "Var = média dos quadrados − quadrado da média.",
    },
    {
      topico: "Variância relativa",
      subassunto: "Relação com o CV",
      dificuldade: 5,
      raciocinio: "Dividir a variância pelo quadrado da média.",
      enunciado: "Um conjunto tem média 40 e desvio-padrão 10. A variância relativa desse conjunto é",
      alternativas: ["0,25", "2,5", "4", "0,5", "0,0625"],
      correta: 4,
      explicacao: "Variância: 100. Quadrado da média: 1.600. 100 ÷ 1.600 = 0,0625, que é 0,25².",
      explicacaoErradas:
        "“0,25” é o CV. “2,5” divide a variância pela média. “4” divide a média pelo desvio. “0,5” é a raiz do CV.",
      pegadinha: "Parar no CV. A variância relativa é o CV ao quadrado.",
      conhecimento: "Variância relativa = CV².",
    },
    {
      topico: "Amplitudes",
      subassunto: "Amplitude interquartílica",
      dificuldade: 4,
      raciocinio: "Localizar Q₁ e Q₃ e subtrair.",
      enunciado:
        "Onze medições, em ordem, foram: 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 20. Considere Q₁ como o 3º valor e Q₃ como o 9º. A amplitude interquartílica é",
      alternativas: ["18", "4,5", "14", "9", "5"],
      correta: 3,
      explicacao: "Q₁ = 5, e Q₃ = 14. Amplitude interquartílica: 14 − 5 = 9.",
      explicacaoErradas:
        "“18” é a amplitude total. “4,5” é o desvio quartílico. “14” é o próprio Q₃, e “5”, o próprio Q₁.",
      pegadinha: "Dividir por 2. Essa conta dá o desvio quartílico.",
      conhecimento: "A amplitude interquartílica ignora os extremos.",
    },
  ],
};
