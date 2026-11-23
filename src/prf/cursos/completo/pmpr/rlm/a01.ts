import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-a01",
  resumo: {
    ideia:
      "Razão compara duas quantidades; proporção é a igualdade entre duas razões. Daí saem a escala, a divisão proporcional, a regra de três e a porcentagem. Na prova, o segredo é decidir se as grandezas crescem juntas (diretas) ou se uma cresce quando a outra cai (inversas).",
    itens: [
      {
        termo: "Razão",
        faz: "É uma fração que compara dois valores: 3/5 se lê “3 está para 5”. As unidades precisam ser as mesmas antes de comparar.",
      },
      {
        termo: "Proporção",
        faz: "Igualdade de duas razões: a/b = c/d. Nela, o produto dos meios é igual ao produto dos extremos (b·c = a·d).",
        pista: "Se x/y = 3/5, escreva x = 3k e y = 5k. Quase toda questão sai daí.",
      },
      {
        termo: "Escala",
        faz: "Escala = medida no desenho ÷ medida real, nas mesmas unidades. Em 1:250.000, 1 cm no mapa vale 250.000 cm = 2,5 km.",
        pista: "1 km = 100.000 cm. Errar essa troca é a pegadinha mais comum.",
      },
      {
        termo: "Preço por quilo",
        faz: "Para comparar embalagens de tamanhos diferentes, divida o preço pelo peso em quilos. O menor resultado é o mais barato.",
      },
      {
        termo: "Propriedades das proporções",
        faz: "Se a/b = c/d, então (a + c)/(b + d) também é igual a elas, e o mesmo vale para a diferença. Com x = 3k e y = 5k, a soma é 8k e a diferença é 2k.",
      },
      {
        termo: "Divisão proporcional e regra de sociedade",
        faz: "Divide-se um total em partes proporcionais a pesos. Na sociedade, o lucro é proporcional a capital × tempo de cada sócio.",
      },
      {
        termo: "Diretas × inversas",
        faz: "Diretamente proporcionais: dobra uma, dobra a outra (quantidade e preço). Inversamente proporcionais: dobra uma, a outra cai pela metade (velocidade e tempo; número de pessoas e dias).",
      },
      {
        termo: "Regra de três simples e composta",
        faz: "Monte uma coluna para cada grandeza e compare cada uma só com a coluna da incógnita: se for direta, mantém a fração; se for inversa, inverte. Depois multiplique tudo.",
        pista: "Mais gente trabalhando → menos dias: inversa. Mais trabalho a fazer → mais dias: direta.",
      },
      {
        termo: "Porcentagem e fator",
        faz: "p% = p/100. Aumentar p% é multiplicar por (1 + p/100); dar desconto de p% é multiplicar por (1 − p/100). Aumento de 15% → × 1,15; desconto de 20% → × 0,80.",
      },
      {
        termo: "Porcentagem de porcentagem",
        faz: "Multiplique as taxas: 35% de 40% = 0,35 × 0,40 = 14% do total.",
      },
      {
        termo: "Porcentagens sucessivas",
        faz: "Multiplique os fatores, nunca some as taxas: +25% e depois −20% → 1,25 × 0,80 = 1, ou seja, o preço volta ao inicial.",
      },
      {
        termo: "Variação percentual",
        faz: "Variação = (valor final − valor inicial) ÷ valor inicial. A base é sempre o valor de antes. Depois de cair 20%, é preciso subir 25% para voltar.",
      },
      {
        termo: "Lucro sobre o custo × sobre a venda",
        faz: "Lucro de 25% sobre a venda de R$ 300 → lucro de R$ 75 e custo de R$ 225. Sobre o custo, esse mesmo lucro é 75/225 ≈ 33,3%.",
      },
    ],
  },
  questoes: [
    {
      topico: "Razão e proporção",
      subassunto: "Escala",
      dificuldade: 5,
      raciocinio: "Passar a medida do mapa para a real (em km) e depois dividir pela velocidade.",
      enunciado:
        "Em um mapa na escala 1:250.000, um trecho de rodovia mede 6,4 cm. Uma viatura percorre esse trecho com velocidade média de 80 km/h. O tempo gasto no percurso é de",
      alternativas: ["1,2 minuto", "2 horas", "20 minutos", "12 minutos", "1 h 20 min"],
      correta: 3,
      explicacao: "Real: 6,4 × 250.000 = 1.600.000 cm = 16 km. Tempo: 16 ÷ 80 = 0,2 h, e 0,2 × 60 = 12 minutos.",
      explicacaoErradas:
        "20 minutos vem de ler 0,2 h como “20 minutos”, sem multiplicar por 60. 2 horas sai de achar 160 km (erro de uma casa na troca de cm para km). 1,2 minuto sai de achar 1,6 km.",
      pegadinha: "0,2 hora não é 20 minutos: hora tem 60 minutos, não 100.",
      conhecimento: "1 km = 1.000 m = 100.000 cm. Na escala 1:250.000, cada centímetro do mapa vale 2,5 km.",
    },
    {
      topico: "Regra de três",
      subassunto: "Regra de três composta",
      dificuldade: 5,
      raciocinio: "Comparar cada grandeza com os dias: agentes e horas são inversas; ocorrências são diretas.",
      enunciado:
        "Uma equipe de 12 agentes, trabalhando 6 horas por dia, registra 1.800 ocorrências em 10 dias. Mantido o mesmo ritmo de trabalho, quantos dias 8 agentes, trabalhando 9 horas por dia, levarão para registrar 2.160 ocorrências?",
      alternativas: ["10 dias", "12 dias", "15 dias", "8 dias", "18 dias"],
      correta: 1,
      explicacao: "Dias = 10 × (12/8) × (6/9) × (2.160/1.800) = 10 × 1,5 × 0,666… × 1,2 = 12. Menos agentes pedem mais dias; mais horas por dia pedem menos dias; mais ocorrências pedem mais dias.",
      explicacaoErradas:
        "18 dias aparece quando se esquecem as horas por dia. 8 dias, quando se esquece o número de agentes. 15 dias, quando se considera só a troca de 12 para 8 agentes.",
      pegadinha: "Com tantas grandezas, é fácil esquecer uma. Confira se todas entraram na conta.",
      conhecimento: "Outra forma: cada agente faz 1.800 ÷ (12 × 6 × 10) = 2,5 ocorrências por hora. Depois, 2.160 ÷ (8 × 9 × 2,5) = 12 dias.",
    },
    {
      topico: "Porcentagem",
      subassunto: "Porcentagens sucessivas",
      dificuldade: 5,
      raciocinio: "Multiplicar os três fatores e comparar o resultado com 1.",
      enunciado:
        "O preço de um equipamento subiu 20%, depois teve desconto de 25% e, por fim, subiu 10%. Em relação ao preço inicial, o preço final",
      alternativas: ["ficou 1% menor.", "ficou 5% maior.", "não se alterou.", "ficou 5% menor.", "ficou 1% maior."],
      correta: 0,
      explicacao: "1,20 × 0,75 × 1,10 = 0,99. O preço final é 99% do inicial: ficou 1% menor.",
      explicacaoErradas:
        "Somar as taxas (+20 − 25 + 10 = +5%) leva a “5% maior”, mas porcentagens seguidas se multiplicam. “Não se alterou” vem de achar que +20% e −25% se anulam e esquecer os 10%; de fato, 1,20 × 0,75 = 0,90.",
      pegadinha: "Cada nova porcentagem incide sobre o preço já mudado, não sobre o preço inicial.",
      conhecimento: "Um aumento e um desconto de mesma taxa nunca se anulam: +10% e −10% → 1,1 × 0,9 = 0,99.",
    },
    {
      topico: "Porcentagem",
      subassunto: "Porcentagem de porcentagem",
      dificuldade: 4,
      raciocinio: "Calcular a parte de cada grupo em relação ao total e somar.",
      enunciado:
        "Em um batalhão, 40% do efetivo é formado por mulheres. Entre as mulheres, 35% trabalham no setor administrativo; entre os homens, 15%. O percentual do efetivo total que trabalha no setor administrativo é de",
      alternativas: ["25%", "50%", "14%", "20%", "23%"],
      correta: 4,
      explicacao: "Mulheres no setor: 35% de 40% = 14%. Homens no setor: 15% de 60% = 9%. Total: 14% + 9% = 23%.",
      explicacaoErradas:
        "25% é a média simples de 35% e 15%, que só valeria se homens e mulheres fossem metade cada. 14% conta só as mulheres. 50% soma as duas taxas sem considerar o tamanho dos grupos.",
      pegadinha: "As taxas de 35% e 15% são de grupos diferentes. Antes de somar, converta cada uma para o total.",
      conhecimento: "É uma média ponderada: 0,40 × 35% + 0,60 × 15% = 23%.",
    },
    {
      topico: "Razão e proporção",
      subassunto: "Regra de sociedade",
      dificuldade: 5,
      raciocinio: "Calcular o peso de cada sócio (capital × tempo) e dividir o lucro na mesma proporção.",
      enunciado:
        "Três sócios aplicaram R$ 20.000,00, R$ 30.000,00 e R$ 50.000,00 em um negócio, por 12, 8 e 6 meses, respectivamente. O lucro de R$ 39.000,00 foi dividido em partes proporcionais ao capital e ao tempo de cada um. O terceiro sócio recebeu",
      alternativas: ["R$ 19.500,00", "R$ 12.000,00", "R$ 15.000,00", "R$ 13.000,00", "R$ 18.000,00"],
      correta: 2,
      explicacao: "Pesos: 20 × 12 = 240; 30 × 8 = 240; 50 × 6 = 300. Total 780. O terceiro recebe 39.000 × 300/780 = R$ 15.000,00 (os outros dois, R$ 12.000,00 cada).",
      explicacaoErradas:
        "R$ 19.500,00 considera só o capital (metade do total aplicado), sem o tempo. R$ 13.000,00 divide o lucro em três partes iguais. R$ 12.000,00 é a parte de cada um dos outros dois sócios.",
      pegadinha: "Quem aplicou mais dinheiro não recebe necessariamente mais na mesma proporção: o tempo também pesa.",
      conhecimento: "Na regra de sociedade composta, a parte de cada sócio é proporcional ao produto capital × tempo.",
    },
    {
      topico: "Razão e proporção",
      subassunto: "Propriedades das proporções",
      dificuldade: 4,
      raciocinio: "Escrever os números como 3k e 5k e usar a diferença para achar k.",
      enunciado: "Dois números estão na razão de 3 para 5, e a diferença entre o maior e o menor é 28. A soma desses números é",
      alternativas: ["70", "42", "112", "56", "140"],
      correta: 2,
      explicacao: "Os números são 3k e 5k. A diferença é 2k = 28, então k = 14. A soma é 8k = 112 (os números são 42 e 70).",
      explicacaoErradas:
        "70 e 42 são os próprios números, não a soma. 56 seria 4k, e 140 seria 10k: nenhum dos dois é a soma pedida.",
      pegadinha: "A questão dá a diferença e pede a soma. Achar k é só o meio do caminho.",
      conhecimento: "Com a/b = c/d, valem (a + b)/b = (c + d)/d e (a − b)/b = (c − d)/d.",
    },
    {
      topico: "Razão e proporção",
      subassunto: "Preço por quilo",
      dificuldade: 5,
      raciocinio: "Calcular o preço do quilo em cada embalagem e montar a compra de 4 kg com cada uma.",
      enunciado:
        "Um mercado vende o mesmo café em dois pacotes: 500 g por R$ 18,00 e 800 g por R$ 27,20. Analise as afirmações.\nI. O pacote de 800 g tem o menor preço por quilo.\nII. A diferença entre os preços por quilo dos dois pacotes é de R$ 2,00.\nIII. Quem compra 4 kg em pacotes de 800 g economiza R$ 10,00 em relação a quem compra 4 kg em pacotes de 500 g.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I.", "Apenas II.", "Apenas I e III.", "I, II e III.", "Apenas I e II."],
      correta: 4,
      explicacao: "Quilo no pacote de 500 g: 18 ÷ 0,5 = R$ 36,00. No de 800 g: 27,20 ÷ 0,8 = R$ 34,00. O de 800 g é mais barato (I) e a diferença é R$ 2,00 (II).",
      explicacaoErradas:
        "III está errada: 4 kg são 5 pacotes de 800 g (R$ 136,00) ou 8 pacotes de 500 g (R$ 144,00). A economia é de R$ 8,00, não de R$ 10,00.",
      pegadinha: "R$ 2,00 por quilo vezes 4 kg dá R$ 8,00. Não há como a economia ser maior que isso.",
      conhecimento: "Para comparar embalagens, sempre leve os preços para a mesma quantidade (1 kg, 100 g ou 1 L).",
    },
    {
      topico: "Regra de três",
      subassunto: "Grandezas inversamente proporcionais",
      dificuldade: 4,
      raciocinio: "Velocidade e tempo são inversas. Converter 2 h 40 min em fração de hora.",
      enunciado:
        "Com velocidade média de 90 km/h, uma viatura faz um percurso em 2 h 40 min. Para fazer o mesmo percurso em 2 h, a velocidade média deverá ser de",
      alternativas: ["120 km/h", "112,5 km/h", "108 km/h", "100 km/h", "67,5 km/h"],
      correta: 0,
      explicacao: "2 h 40 min = 2 + 40/60 = 8/3 h. Distância: 90 × 8/3 = 240 km. Velocidade nova: 240 ÷ 2 = 120 km/h.",
      explicacaoErradas:
        "108 km/h vem de ler 2 h 40 min como 2,4 h. 67,5 km/h trata velocidade e tempo como diretas (menos tempo, menos velocidade), o que não faz sentido. 112,5 km/h usaria 2,5 h.",
      pegadinha: "40 minutos não são 0,4 hora: são 40/60 = 0,666… hora.",
      conhecimento: "Em grandezas inversas, o produto se mantém: 90 × 8/3 = v × 2.",
    },
    {
      topico: "Porcentagem",
      subassunto: "Variação percentual",
      dificuldade: 5,
      raciocinio: "Calcular cada variação sempre sobre o valor de antes.",
      enunciado:
        "O número de acidentes em uma rodovia caiu de 250 para 200 em um ano e voltou a 250 no ano seguinte. Julgue as afirmações, marcando V para verdadeiro e F para falso.\n( ) Uma queda de 25% seguida de um aumento de 25% devolve o valor inicial.\n( ) A queda no primeiro ano foi de 20%.\n( ) O aumento no segundo ano foi de 20%.\n( ) Depois de uma queda de 20%, é preciso um aumento de 25% para voltar ao valor inicial.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, F, V, F.", "F, V, F, V.", "V, V, F, F.", "F, V, V, F.", "V, F, F, V."],
      correta: 1,
      explicacao: "0,75 × 1,25 = 0,9375: não volta ao inicial (F). Queda: 50 ÷ 250 = 20% (V). Aumento: 50 ÷ 200 = 25%, não 20% (F). Como 0,80 × 1,25 = 1, a última está certa (V).",
      explicacaoErradas:
        "Marcar V na terceira é calcular o aumento sobre 250, mas a base do segundo ano é 200. Marcar V na primeira é somar taxas em vez de multiplicar fatores.",
      pegadinha: "A diferença foi de 50 acidentes nos dois anos, mas as porcentagens são diferentes porque as bases mudam.",
      conhecimento: "Para desfazer uma queda de p%, o aumento necessário é p ÷ (100 − p), sempre maior que p.",
    },
    {
      topico: "Porcentagem",
      subassunto: "Lucro sobre a venda e sobre o custo",
      dificuldade: 5,
      raciocinio: "Achar o custo a partir do lucro sobre a venda e depois dividir o lucro pelo custo.",
      enunciado:
        "Um comerciante vende um produto por R$ 300,00, com lucro de 25% sobre o preço de venda. Se o lucro fosse calculado sobre o preço de custo, essa mesma venda corresponderia a um lucro de, aproximadamente,",
      alternativas: ["25%", "20%", "30%", "33,3%", "75%"],
      correta: 3,
      explicacao: "Lucro = 25% de 300 = R$ 75,00. Custo = 300 − 75 = R$ 225,00. Sobre o custo: 75 ÷ 225 ≈ 33,3%.",
      explicacaoErradas:
        "20% é o caminho contrário (lucro de 25% sobre o custo equivale a 20% sobre a venda). 25% repete a taxa sem trocar a base. 75% confunde o valor do lucro em reais com a taxa.",
      pegadinha: "A mesma quantia de lucro dá taxas diferentes conforme a base: venda (maior) ou custo (menor).",
      conhecimento: "Sobre a venda: lucro ÷ preço de venda. Sobre o custo: lucro ÷ custo. Como o custo é menor, a taxa sobre o custo é sempre maior.",
    },
  ],
};
