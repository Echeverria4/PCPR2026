import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "fisica-01",
  resumo: {
    ideia:
      "Cinemática descreve o movimento sem olhar a causa. Antes de calcular, defina o referencial, o tamanho do móvel e se a pergunta é sobre posição ou sobre caminho.",
    itens: [
      {
        termo: "Referencial",
        faz: "É o ponto de comparação. Movimento e repouso dependem dele.",
      },
      {
        termo: "Ponto material",
        faz: "O tamanho do móvel não importa para o cálculo.",
      },
      {
        termo: "Corpo extenso",
        faz: "O tamanho importa. Ao cruzar uma ponte, some a ponte e o veículo.",
      },
      {
        termo: "Deslocamento",
        faz: "É a posição final menos a inicial. Ida e volta se anulam.",
      },
      {
        termo: "Espaço percorrido",
        faz: "É tudo o que o móvel andou. Ida e volta se somam.",
      },
      {
        termo: "Velocidade média",
        faz: "Distância total dividida pelo tempo total.",
        pista: "Não é a média simples das velocidades.",
      },
      {
        termo: "Velocidade instantânea",
        faz: "É a velocidade em um momento exato, como a do velocímetro.",
      },
      {
        termo: "Unidades",
        faz: "De km/h para m/s, divida por 3,6. De m/s para km/h, multiplique por 3,6.",
      },
    ],
    cuidado:
      "Antes de usar a fórmula, deixe tudo na mesma unidade. Metro com km/h dá resposta errada.",
  },
  questoes: [
    {
      topico: "Corpo extenso",
      subassunto: "Travessia de ponte",
      dificuldade: 5,
      raciocinio: "A traseira precisa sair da ponte. Some os comprimentos e converta a velocidade.",
      enunciado:
        "Um caminhão de 20 m atravessa uma ponte de 180 m a 72 km/h constantes. O tempo, do início da entrada ao fim da saída, é de",
      alternativas: ["9 s", "10 s", "8 s", "2,8 s", "36 s"],
      correta: 1,
      explicacao: "72 km/h são 20 m/s. A distância é 180 + 20 = 200 m. Logo, 200 ÷ 20 = 10 s.",
      explicacaoErradas:
        "“9 s” ignora o tamanho do caminhão. “8 s” subtrai esse tamanho. “2,8 s” divide 200 por 72, sem converter. “36 s” divide por 3,6 duas vezes.",
      pegadinha: "Tratar o caminhão como ponto material em uma ponte curta.",
      conhecimento: "Quando o tamanho do móvel é relevante, ele entra na distância.",
    },
    {
      topico: "Referencial",
      subassunto: "Movimento e repouso",
      dificuldade: 4,
      raciocinio: "A resposta muda conforme o ponto de comparação.",
      enunciado: "Um agente segue sentado em uma viatura que anda por uma rodovia reta. Sobre esse agente, é correto afirmar que",
      alternativas: [
        "ele está em repouso em relação à viatura e em movimento em relação ao posto",
        "ele está em movimento em relação à viatura e em repouso em relação ao posto",
        "ele está em repouso em relação a tudo, pois segue sentado no banco da viatura",
        "ele está em movimento em relação a tudo, pois a rodovia é o referencial absoluto",
        "ele não pode ser analisado, pois um móvel só existe se ele tiver movimento próprio",
      ],
      correta: 0,
      explicacao: "A distância até a viatura não muda, e a distância até o posto muda.",
      explicacaoErradas:
        "“em movimento em relação à viatura” inverte os referenciais. “em repouso em relação a tudo” e “em movimento em relação a tudo” ignoram que isso depende do referencial. “só existe se ele tiver movimento próprio” inventa uma regra.",
      pegadinha: "Falar em movimento sem dizer em relação a quê.",
      conhecimento: "Não existe repouso absoluto em cinemática.",
    },
    {
      topico: "Deslocamento",
      subassunto: "Espaço percorrido",
      dificuldade: 5,
      raciocinio: "Deslocamento olha só início e fim. Espaço percorrido soma tudo.",
      enunciado:
        "Uma viatura sai do km 100, vai até o km 160 e retorna ao km 130. O deslocamento e o espaço percorrido são, nessa ordem,",
      alternativas: ["90 km e 30 km", "30 km e 30 km", "60 km e 30 km", "30 km e 90 km", "90 km e 90 km"],
      correta: 3,
      explicacao: "Deslocamento: 130 − 100 = 30 km. Espaço percorrido: 60 km na ida e 30 km na volta, 90 km.",
      explicacaoErradas:
        "“90 km e 30 km” inverte os conceitos. “30 km e 30 km” e “90 km e 90 km” tratam os dois como iguais. “60 km e 30 km” separa a ida da volta.",
      pegadinha: "Achar que deslocamento e espaço percorrido são sinônimos.",
      conhecimento: "Só em trajeto sem volta os dois coincidem.",
    },
    {
      topico: "Velocidade média",
      subassunto: "Trechos com velocidades diferentes",
      dificuldade: 5,
      raciocinio: "Calcule o tempo de cada trecho e divida o total pelo total.",
      enunciado:
        "Uma viatura anda 60 km a 60 km/h e depois mais 60 km a 120 km/h. A velocidade média em todo o trajeto é de",
      alternativas: ["90 km/h", "80 km/h", "60 km/h", "120 km/h", "40 km/h"],
      correta: 1,
      explicacao: "Tempos: 1 h e 0,5 h. Logo, 120 km ÷ 1,5 h = 80 km/h.",
      explicacaoErradas:
        "“90 km/h” é a média simples. “60 km/h” e “120 km/h” repetem um trecho. “40 km/h” divide só 60 km pelo tempo total.",
      pegadinha: "Fazer a média simples quando os tempos são diferentes.",
      conhecimento: "O trecho mais lento pesa mais, porque dura mais.",
    },
    {
      topico: "Unidades",
      subassunto: "De km/h para m/s",
      dificuldade: 4,
      raciocinio: "Converta antes de multiplicar pelo tempo.",
      enunciado: "A 108 km/h, um condutor olha o celular por 2 s. Nesse tempo, o veículo percorre",
      alternativas: ["216 m", "30 m", "60 m", "15 m", "389 m"],
      correta: 2,
      explicacao: "108 km/h são 30 m/s. Em 2 s, são 60 m.",
      explicacaoErradas:
        "“216 m” multiplica 108 por 2, sem converter. “30 m” vale para 1 s. “15 m” divide por 2. “389 m” multiplica 108 por 3,6.",
      pegadinha: "Multiplicar km/h por segundos.",
      conhecimento: "Divida por 3,6 para chegar a m/s.",
    },
    {
      topico: "Velocidade média",
      subassunto: "Média e instantânea",
      dificuldade: 5,
      raciocinio: "A média não pode ser maior do que todas as velocidades do trajeto.",
      enunciado:
        "Um veículo percorreu 30 km em 15 min, em trecho com limite de 110 km/h. Dois radares pontuais marcaram 90 km/h. Conclui-se que",
      alternativas: [
        "os radares erraram, pois a média sempre coincide com a instantânea",
        "o veículo nunca passou de 90 km/h, pois os radares mediram assim",
        "a velocidade média foi de 90 km/h, igual à medida nos dois radares",
        "a velocidade média foi de 30 km/h, pois o trecho tem 30 km ao todo",
        "em algum instante a velocidade chegou a pelo menos 120 km/h",
      ],
      correta: 4,
      explicacao: "15 min é 0,25 h. Logo, 30 ÷ 0,25 = 120 km/h. Para a média ser essa, algum instante alcançou esse valor.",
      explicacaoErradas:
        "“os radares erraram” ignora que média e instantânea medem coisas diferentes. “nunca passou de 90 km/h” contraria a média. “foi de 90 km/h” toma um instante pelo todo. “foi de 30 km/h” não divide pelo tempo.",
      pegadinha: "Achar que o valor do radar vale para todo o trecho.",
      conhecimento: "O radar mede um instante. A média olha o trecho inteiro.",
    },
  ],
};
