import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-05",
  resumo: {
    ideia:
      "Fração é parte de um todo. Razão compara duas grandezas por divisão. Proporção é a igualdade entre razões. Com essas três ideias, a prova cobra escala, velocidade média, vazão e divisão de valores.",
    itens: [
      {
        termo: "Somar e subtrair frações",
        faz: "Iguale os denominadores com o MMC e só depois opere os numeradores.",
      },
      {
        termo: "Multiplicar e dividir frações",
        faz: "Na multiplicação, numerador com numerador e denominador com denominador. Na divisão, inverta a segunda fração.",
      },
      {
        termo: "A palavra “de”",
        faz: "Costuma significar multiplicação: 1/4 do restante é 1/4 vezes o restante.",
        pista: "Sempre pergunte: fração de quê? Do total ou do que sobrou?",
      },
      {
        termo: "Da parte para o todo",
        faz: "Se 3/4 do total valem 60, o total é 60 · 4/3. É o “inverte e multiplica”.",
      },
      {
        termo: "Razão",
        faz: "A divisão de A por B. “2 para 7” significa que A vale 2k e B vale 7k.",
      },
      {
        termo: "Proporção",
        faz: "Igualdade entre razões. O produto dos meios é igual ao produto dos extremos.",
      },
      {
        termo: "Propriedade da soma",
        faz: "Em A/B = C/D, vale (A + C)/(B + D) = A/B. Ela ajuda a repartir um total.",
      },
      {
        termo: "Escala",
        faz: "Razão entre a medida no desenho e a medida real, na mesma unidade.",
        pista: "Área não segue a escala direto: converta os lados primeiro.",
      },
      {
        termo: "Velocidade média",
        faz: "Distância total dividida pelo tempo total. Para passar de km/h para m/s, divida por 3,6.",
      },
      {
        termo: "Vazão",
        faz: "Volume dividido pelo tempo. Vazões de torneiras se somam, e a do ralo se subtrai.",
        pista: "Quem enche em 4 h faz 1/4 do tanque por hora.",
      },
      {
        termo: "Divisão proporcional",
        faz: "Direta: as partes acompanham os pesos. Inversa: use o inverso de cada peso.",
      },
    ],
    cuidado:
      "A média de velocidades em trechos iguais não é a média simples. Calcule pelo tempo gasto em cada trecho.",
  },
  questoes: [
    {
      topico: "Frações",
      subassunto: "Fração do que sobrou",
      dificuldade: 5,
      raciocinio: "Sobrou 2/3; desse resto, sobrou 3/4. Multiplicar as sobras e usar o valor final.",
      enunciado:
        "Uma viatura gastou 1/3 do combustível do tanque na ida e 1/4 do que restou na patrulha. Sobraram 30 litros. A quantidade de combustível que havia no início, em litros, era de",
      alternativas: ["40", "45", "72", "60", "120"],
      correta: 3,
      explicacao:
        "Depois da ida, sobraram 2/3. Depois da patrulha, sobraram 3/4 de 2/3, isto é, 1/2 do tanque. Se 1/2 vale 30 litros, o tanque tinha 60 litros.",
      explicacaoErradas:
        "“72” trata 1/4 como fração do total, e não do que sobrou. “45” ignora a patrulha, e “40” ignora a ida. “120” divide 30 por 1/4.",
      pegadinha:
        "Somar 1/3 + 1/4 como frações do mesmo todo. A segunda fração incide só sobre o que restou.",
      conhecimento: "Fração do restante: multiplique as frações do que sobra em cada etapa.",
    },
    {
      topico: "Razão e proporção",
      subassunto: "Razão entre partes e total",
      dificuldade: 4,
      raciocinio: "Representar as partes por 2k e 7k e somar para achar o total.",
      enunciado:
        "Em uma operação, foram vistoriados 126 veículos. A razão entre os veículos autuados e os não autuados foi de 2 para 7. O número de veículos autuados foi",
      alternativas: ["14", "18", "28", "36", "98"],
      correta: 2,
      explicacao: "Autuados = 2k e não autuados = 7k. Então, 9k = 126, k = 14 e os autuados são 28.",
      explicacaoErradas:
        "“36” calcula 2/7 de 126, como se 7 fosse o total. “98” é o número de não autuados. “14” é o valor de k. “18” divide 126 por 7.",
      pegadinha:
        "Tratar o 7 como o total. A razão compara autuados com não autuados, e o total tem 9 partes.",
      conhecimento: "Parte para parte: some os termos da razão para achar o total de partes.",
    },
    {
      topico: "Razões especiais",
      subassunto: "Escala e área",
      dificuldade: 5,
      raciocinio: "Converter cada lado para a medida real e só depois multiplicar.",
      enunciado:
        "Em um mapa com escala 1:50.000, uma área retangular de interdição mede 4 cm por 3 cm. Sua área real, em km², é",
      alternativas: ["3", "0,3", "1,5", "6", "12"],
      correta: 0,
      explicacao:
        "1 cm no mapa vale 50.000 cm = 0,5 km. Os lados reais medem 2 km e 1,5 km. A área é 2 · 1,5 = 3 km².",
      explicacaoErradas:
        "“1,5” é só um dos lados. “6” converte apenas um lado, e “12” repete a área do mapa com outra unidade. “0,3” erra uma casa na conversão.",
      pegadinha:
        "Multiplicar a área do mapa pela escala. A razão entre áreas é o quadrado da escala linear.",
      conhecimento: "A escala vale para comprimentos. Para áreas, o fator é elevado ao quadrado.",
    },
    {
      topico: "Razões especiais",
      subassunto: "Velocidade média em trechos iguais",
      dificuldade: 5,
      raciocinio: "Escolher um trecho fácil, somar os tempos e dividir a distância total pelo tempo total.",
      enunciado:
        "Uma viatura percorreu metade de um trecho a 60 km/h e a outra metade a 120 km/h. A velocidade média no trecho inteiro, em km/h, foi de",
      alternativas: ["40", "85", "90", "100", "80"],
      correta: 4,
      explicacao:
        "Com um trecho de 240 km, a primeira metade leva 2 h e a segunda, 1 h. Velocidade média: 240 ÷ 3 = 80 km/h.",
      explicacaoErradas:
        "“90” é a média simples das velocidades. “100” pondera ao contrário, dando mais peso a 120. “85” é a média geométrica arredondada. “40” esquece o 2 da fórmula: 60 · 120 ÷ 180.",
      pegadinha:
        "Fazer a média de 60 e 120. A viatura fica mais tempo no trecho lento, e esse trecho pesa mais.",
      conhecimento: "Trechos de mesma distância: média harmônica, 2 · v₁ · v₂ ÷ (v₁ + v₂).",
    },
    {
      topico: "Razões especiais",
      subassunto: "Conversão entre km/h e m/s",
      dificuldade: 4,
      raciocinio: "Passar 72 km/h para m/s e multiplicar pelo tempo.",
      enunciado:
        "A 72 km/h, um motorista desvia os olhos da pista por 3 segundos. A distância percorrida nesse tempo, em metros, é de",
      alternativas: ["20", "24", "60", "216", "777,6"],
      correta: 2,
      explicacao: "72 km/h ÷ 3,6 = 20 m/s. Em 3 s, são 20 · 3 = 60 m.",
      explicacaoErradas:
        "“20” é a velocidade em m/s, sem contar o tempo. “216” multiplica 72 por 3 sem converter. “24” divide 72 por 3. “777,6” multiplica por 3,6 em vez de dividir.",
      pegadinha:
        "Multiplicar por 3,6 para passar para m/s. O valor em m/s é sempre menor que em km/h.",
      conhecimento: "km/h ÷ 3,6 = m/s; m/s × 3,6 = km/h.",
    },
    {
      topico: "Razões especiais",
      subassunto: "Vazões que se opõem",
      dificuldade: 5,
      raciocinio: "Escrever quanto cada uma faz por hora e subtrair.",
      enunciado:
        "Uma bomba enche um tanque em 4 horas, e um dreno esvazia o tanque cheio em 6 horas. Com o tanque vazio e os dois funcionando juntos, o tempo para encher o tanque é de",
      alternativas: ["2 h 24 min", "5 h", "10 h", "12 h", "24 h"],
      correta: 3,
      explicacao: "Por hora: 1/4 − 1/6 = 1/12 do tanque. Logo, o tanque enche em 12 horas.",
      explicacaoErradas:
        "“2 h 24 min” soma as duas vazões, como se o dreno ajudasse. “5 h” é a média de 4 e 6, e “10 h” é a soma dos tempos. “24 h” é o produto dos dois tempos.",
      pegadinha:
        "Somar ou subtrair os tempos. Quem se soma ou subtrai são as vazões.",
      conhecimento: "Quem faz o serviço em t horas faz 1/t do serviço por hora.",
    },
    {
      topico: "Divisão proporcional",
      subassunto: "Partes inversamente proporcionais",
      dificuldade: 5,
      raciocinio: "Trocar os pesos pelos inversos e igualar os denominadores.",
      enunciado:
        "Uma gratificação de R$ 9.000,00 será dividida entre três equipes, em partes inversamente proporcionais ao número de falhas de cada uma: 2, 3 e 6. A maior parte recebida será de",
      alternativas: ["R$ 1.500,00", "R$ 3.000,00", "R$ 3.600,00", "R$ 4.500,00", "R$ 4.909,09"],
      correta: 3,
      explicacao:
        "Os pesos são 1/2, 1/3 e 1/6, ou seja, 3, 2 e 1 sextos. São 6 partes de R$ 1.500,00, e a maior tem 3 partes: R$ 4.500,00.",
      explicacaoErradas:
        "“R$ 4.909,09” faz a divisão direta e dá a maior parte a quem tem 6 falhas. “R$ 1.500,00” e “R$ 3.000,00” são a menor parte e a do meio. “R$ 3.600,00” é o que caberia se os pesos fossem 2 e 3.",
      pegadinha:
        "Dividir diretamente por 2, 3 e 6. Na divisão inversa, quem tem o menor número recebe mais.",
      conhecimento: "Inversamente proporcional a a, b, c é o mesmo que diretamente proporcional a 1/a, 1/b, 1/c.",
    },
  ],
};
