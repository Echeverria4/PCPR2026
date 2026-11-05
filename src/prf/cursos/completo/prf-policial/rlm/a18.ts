import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-18",
  resumo: {
    ideia:
      "Orientação espacial é saber onde as coisas estão. A aula cobra duas ideias: pontos cardeais e vistas de um sólido.",
    itens: [
      {
        termo: "Pontos cardeais",
        faz: "Norte para cima, sul para baixo, leste à direita e oeste à esquerda.",
      },
      {
        termo: "Pontos colaterais",
        faz: "Ficam entre os cardeais: nordeste, sudeste, sudoeste e noroeste.",
      },
      {
        termo: "Ângulos",
        faz: "Entre dois cardeais vizinhos há 90°. Entre um cardeal e o colateral vizinho há 45°.",
      },
      {
        termo: "Deslocamento líquido",
        faz: "Some o que foi para o norte e tire o que foi para o sul. Faça o mesmo com leste e oeste.",
      },
      {
        termo: "Distância em linha reta",
        faz: "Com os dois saldos, use Pitágoras.",
      },
      {
        termo: "Giros",
        faz: "Acompanhe a frente da pessoa, um giro por vez. Esquerda e direita dependem de para onde ela olha.",
      },
      {
        termo: "Vistas de um sólido",
        faz: "É o que se vê de um lado só: de frente, de cima ou de lado.",
        pista: "Cilindro em pé: retângulo de frente e círculo de cima.",
      },
    ],
    cuidado:
      "Quem olha para o sul tem o leste à esquerda. Não use o mapa fixo em giros: acompanhe a frente da pessoa.",
  },
  questoes: [
    {
      topico: "Deslocamento",
      subassunto: "Saldo em cada direção",
      dificuldade: 5,
      raciocinio: "Tirar o saldo norte–sul e o saldo leste–oeste e aplicar Pitágoras.",
      enunciado:
        "Uma viatura sai de um posto e anda 9 km para o norte, 5 km para o leste, 3 km para o sul e mais 3 km para o leste. A distância em linha reta até o posto, em km, é",
      alternativas: ["20", "14", "10", "48", "√145"],
      correta: 2,
      explicacao: "Saldo: 6 km ao norte e 8 km ao leste. √(36 + 64) = 10 km.",
      explicacaoErradas:
        "“20” soma todos os trechos. “14” soma os dois saldos. “48” multiplica os saldos. “√145” ignora os 3 km para o sul.",
      pegadinha: "Somar os saldos. Eles são catetos, e a distância é a hipotenusa.",
      conhecimento: "Deslocamento considera só o ponto de saída e o de chegada.",
    },
    {
      topico: "Pontos cardeais",
      subassunto: "Giros em sequência",
      dificuldade: 4,
      raciocinio: "Acompanhar a frente da pessoa em cada giro.",
      enunciado:
        "Um agente está de frente para o norte. Ele gira 90° para a direita, depois 180° e, por fim, 45° para a esquerda. Ele fica de frente para o",
      alternativas: ["noroeste", "sudoeste", "sudeste", "nordeste", "sul"],
      correta: 1,
      explicacao:
        "Norte, 90° à direita: leste. Mais 180°: oeste. De frente para o oeste, a esquerda é o sul. 45° para esse lado: sudoeste.",
      explicacaoErradas:
        "“noroeste” gira para a direita no fim. “nordeste” ignora o giro de 180°, e “sudeste” ignora esse giro e ainda troca o lado. “sul” gira 90° no fim, em vez de 45°.",
      pegadinha: "Usar a esquerda do mapa. Para quem olha para o oeste, a esquerda é o sul.",
      conhecimento: "Giro à direita segue o sentido dos ponteiros do relógio.",
    },
    {
      topico: "Pontos colaterais",
      subassunto: "Ângulo entre direções",
      dificuldade: 4,
      raciocinio: "Do nordeste ao leste são 45°. Do leste ao sul são 90°.",
      enunciado: "O menor ângulo entre as direções nordeste e sul é de",
      alternativas: ["45°", "90°", "225°", "135°", "180°"],
      correta: 3,
      explicacao: "Do nordeste ao leste há 45°, e do leste ao sul, 90°. Total: 135°.",
      explicacaoErradas:
        "“225°” é o maior ângulo, dando a volta pelo outro lado. “180°” seria a direção oposta, sudoeste. “90°” seria entre nordeste e sudeste. “45°” seria entre nordeste e norte.",
      pegadinha: "Medir pelo lado mais longo. A questão pede o menor ângulo.",
      conhecimento: "A rosa dos ventos divide 360° em oito partes de 45°.",
    },
    {
      topico: "Vistas de sólidos",
      subassunto: "Identificar o sólido",
      dificuldade: 4,
      raciocinio: "De cima, círculo. De frente e de lado, triângulo.",
      enunciado:
        "Um sólido apoiado em uma mesa tem vista frontal e vista lateral triangulares, e sua vista superior é um círculo. Esse sólido é",
      alternativas: ["um cone", "uma pirâmide de base quadrada", "um cilindro", "uma esfera", "um prisma triangular"],
      correta: 0,
      explicacao: "O cone em pé mostra um triângulo de frente e de lado, e um círculo de cima.",
      explicacaoErradas:
        "“uma pirâmide de base quadrada” mostraria um quadrado de cima. “um cilindro” mostraria um retângulo de frente. “uma esfera” mostraria um círculo em todas as vistas. “um prisma triangular” mostraria um retângulo de cima.",
      pegadinha: "Confundir cone com pirâmide. A vista de cima desfaz a dúvida.",
      conhecimento: "Vista é a projeção do sólido em um plano.",
    },
    {
      topico: "Deslocamento",
      subassunto: "Caminho de volta",
      dificuldade: 5,
      raciocinio: "Achar onde o drone parou. A volta é a direção oposta.",
      enunciado:
        "Um drone sai do ponto A e voa 4 km para o sul, 6 km para o oeste, 2 km para o norte e 4 km para o leste. Para voltar a A em linha reta, ele deve voar",
      alternativas: [
        "2√2 km para o sudoeste",
        "4 km para o nordeste",
        "16 km para o nordeste",
        "2√2 km para o noroeste",
        "2√2 km para o nordeste",
      ],
      correta: 4,
      explicacao:
        "Saldo: 2 km ao sul e 2 km a oeste. O drone está a sudoeste de A, a √8 = 2√2 km. A volta é para o nordeste.",
      explicacaoErradas:
        "“2√2 km para o sudoeste” indica onde o drone está, e não a volta. “4 km para o nordeste” soma os saldos. “16 km para o nordeste” soma os trechos. “2√2 km para o noroeste” troca leste por oeste.",
      pegadinha: "Responder a posição do drone. A volta é o sentido contrário.",
      conhecimento: "Direção de volta = direção oposta à posição final.",
    },
    {
      topico: "Vistas de sólidos",
      subassunto: "Cubos empilhados",
      dificuldade: 5,
      raciocinio: "De frente, o cubo de cima aparece. De cima, ele cobre o cubo do meio.",
      enunciado:
        "Três cubos iguais estão em fila sobre uma mesa, da esquerda para a direita de quem olha de frente. Um quarto cubo está sobre o cubo do meio. O número de quadrados na vista frontal e na vista superior é, respectivamente,",
      alternativas: ["3 e 4", "4 e 4", "3 e 3", "4 e 3", "4 e 1"],
      correta: 3,
      explicacao:
        "De frente, veem-se os 3 cubos da fila e o de cima: 4 quadrados. De cima, o quarto cubo cobre o do meio: 3 quadrados.",
      explicacaoErradas:
        "“4 e 4” conta o cubo de cima como uma casa a mais na vista superior. “3 e 3” ignora o cubo de cima. “3 e 4” troca as vistas. “4 e 1” conta só o cubo de cima na vista superior.",
      pegadinha: "Contar cubos em vez de quadrados. Na vista de cima, os cubos empilhados viram um só.",
      conhecimento: "Na vista superior, cada coluna aparece como um só quadrado.",
    },
  ],
};
