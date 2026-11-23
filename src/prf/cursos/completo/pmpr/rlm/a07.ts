import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-a07",
  resumo: {
    ideia:
      "Geometria espacial trata dos sólidos, que têm comprimento, largura e altura. A prova cobra volume (quanto cabe), área (quanto de material cobre) e a troca entre m³ e litros. A regra de ouro: prisma e cilindro são base × altura; pirâmide e cone são um terço disso.",
    itens: [
      {
        termo: "Unidades de volume",
        faz: "Cada degrau vale 1.000 vezes o seguinte. 1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL.",
      },
      {
        termo: "Poliedro e relação de Euler",
        faz: "Poliedro é um sólido com faces planas. Nos convexos: V − A + F = 2 (vértices − arestas + faces).",
        pista: "Para achar as arestas: some os lados de todas as faces e divida por 2, porque cada aresta é dividida por duas faces.",
      },
      {
        termo: "Poliedros de Platão",
        faz: "São só cinco: tetraedro (4 faces triangulares), hexaedro ou cubo (6 quadradas), octaedro (8 triangulares), dodecaedro (12 pentagonais) e icosaedro (20 triangulares).",
      },
      {
        termo: "Prisma e paralelepípedo",
        faz: "Volume = área da base × altura. Paralelepípedo: comprimento × largura × altura. Cubo: aresta³.",
      },
      {
        termo: "Área de um prisma",
        faz: "Área lateral = perímetro da base × altura. Área total = área lateral + 2 bases.",
      },
      {
        termo: "Cilindro",
        faz: "Volume = πr² × h. Área lateral = 2πr × h.",
        pista: "Se o enunciado der o diâmetro, divida por 2 antes de usar o raio.",
      },
      {
        termo: "Pirâmide e cone",
        faz: "Volume = (área da base × altura) ÷ 3. Um cone cheio enche um terço de um cilindro com a mesma base e a mesma altura.",
      },
      {
        termo: "Apótema da pirâmide",
        faz: "Altura de cada face lateral. Pitágoras: apótema² = altura² + (metade do lado da base)², na pirâmide quadrangular regular.",
      },
      {
        termo: "Tronco",
        faz: "Pirâmide ou cone com a ponta cortada. Volume = volume do sólido inteiro − volume da ponta.",
      },
      {
        termo: "Esfera",
        faz: "Volume = (4/3)πr³. Área da superfície = 4πr².",
      },
      {
        termo: "Ampliação de sólidos",
        faz: "Medidas × k → área × k² → volume × k³. Aresta 10% maior → volume × 1,331 (33,1% maior).",
      },
      {
        termo: "Posição de retas no espaço",
        faz: "Paralelas: mesma direção, sem se encontrar. Concorrentes: se cruzam. Reversas: não se cruzam e não estão no mesmo plano.",
      },
    ],
  },
  questoes: [
    {
      topico: "Volume",
      subassunto: "Paralelepípedo e litros",
      dificuldade: 4,
      raciocinio: "Multiplicar as três medidas em metros e trocar m³ por litros.",
      enunciado:
        "Um reservatório de água em forma de paralelepípedo mede, por dentro, 2 m de comprimento, 1,5 m de largura e 0,8 m de altura. A capacidade desse reservatório é de",
      alternativas: ["240 L", "24.000 L", "2.400 L", "24 L", "4.300 L"],
      correta: 2,
      explicacao: "Volume: 2 × 1,5 × 0,8 = 2,4 m³. Como 1 m³ = 1.000 L, são 2.400 L.",
      explicacaoErradas:
        "240 L e 24.000 L erram a troca de m³ para litros. 4.300 L soma as medidas (2 + 1,5 + 0,8) em vez de multiplicar.",
      pegadinha: "Volume se multiplica; somar as medidas não dá volume nenhum.",
      conhecimento: "1 m³ = 1.000 L e 1 dm³ = 1 L.",
    },
    {
      topico: "Poliedros",
      subassunto: "Relação de Euler",
      dificuldade: 5,
      raciocinio: "Contar as arestas pelos lados das faces e aplicar V − A + F = 2.",
      enunciado:
        "Um poliedro convexo tem 8 faces triangulares e 6 faces quadrangulares. O número de vértices desse poliedro é",
      alternativas: ["14", "48", "24", "10", "12"],
      correta: 4,
      explicacao: "Faces: 14. Arestas: (8 × 3 + 6 × 4) ÷ 2 = 24. Euler: V − 24 + 14 = 2, então V = 12.",
      explicacaoErradas:
        "48 é a soma dos lados, sem dividir por 2. 24 é o número de arestas. 14 é o número de faces.",
      pegadinha: "Cada aresta pertence a duas faces; por isso a soma dos lados conta cada aresta duas vezes.",
      conhecimento: "V − A + F = 2 vale para poliedros convexos.",
    },
    {
      topico: "Volume",
      subassunto: "Cilindro",
      dificuldade: 5,
      raciocinio: "Tirar o raio do diâmetro, calcular πr²h e trocar por litros.",
      enunciado:
        "Uma caixa-d'água cilíndrica tem 2 m de diâmetro e 1,5 m de altura. Usando π = 3,14, a capacidade da caixa é de",
      alternativas: ["18.840 L", "4.710 L", "9.420 L", "471 L", "3.140 L"],
      correta: 1,
      explicacao: "Raio = 1 m. Volume = 3,14 × 1² × 1,5 = 4,71 m³ = 4.710 L.",
      explicacaoErradas:
        "18.840 L usa 2 m (o diâmetro) como raio. 9.420 L usa a fórmula da área lateral (2πrh). 471 L erra a troca de m³ para litros.",
      pegadinha: "O enunciado dá o diâmetro, e a fórmula pede o raio.",
      conhecimento: "Cilindro: V = πr²h.",
    },
    {
      topico: "Volume",
      subassunto: "Cone e cilindro",
      dificuldade: 5,
      raciocinio: "Calcular os dois volumes e dividir, lembrando o 1/3 do cone.",
      enunciado:
        "Um copo em forma de cone tem raio da boca de 3 cm e altura de 10 cm. Um balde cilíndrico tem raio de 6 cm e altura de 20 cm. O número de copos cheios necessários para encher o balde é",
      alternativas: ["8", "12", "4", "24", "48"],
      correta: 3,
      explicacao: "Balde: π × 6² × 20 = 720π. Copo: (π × 3² × 10) ÷ 3 = 30π. 720π ÷ 30π = 24 copos.",
      explicacaoErradas:
        "8 esquece o 1/3 do cone. 4 compara só as alturas e os raios sem elevar o raio ao quadrado. 48 dobra a conta sem motivo.",
      pegadinha: "Raio duas vezes maior dá base quatro vezes maior. E o cone ainda é só um terço do cilindro.",
      conhecimento: "Cone: V = πr²h ÷ 3.",
    },
    {
      topico: "Volume",
      subassunto: "Ampliação do cubo",
      dificuldade: 5,
      raciocinio: "O volume cresce com o cubo do fator da aresta.",
      enunciado: "Se a aresta de um cubo aumentar 10%, o volume do cubo aumentará",
      alternativas: ["33,1%", "30%", "10%", "21%", "33%"],
      correta: 0,
      explicacao: "Fator da aresta: 1,1. Fator do volume: 1,1³ = 1,331. Aumento de 33,1%.",
      explicacaoErradas:
        "30% soma 10% três vezes. 21% é o aumento da área de uma face (1,1² = 1,21). 33% arredonda e perde a precisão pedida.",
      pegadinha: "Volume tem três dimensões; cada uma cresce 10% sobre o valor já aumentado.",
      conhecimento: "Medidas × k → volume × k³.",
    },
    {
      topico: "Volume",
      subassunto: "Esfera",
      dificuldade: 5,
      raciocinio: "Aplicar V = (4/3)πr³ com r = 6.",
      enunciado: "Uma esfera tem raio de 6 cm. Usando π = 3,14, o volume da esfera é",
      alternativas: ["904,32 cm³", "452,16 cm³", "2.712,96 cm³", "678,24 cm³", "113,04 cm³"],
      correta: 0,
      explicacao: "V = (4/3) × 3,14 × 6³ = (4/3) × 3,14 × 216 = 288 × 3,14 = 904,32 cm³.",
      explicacaoErradas:
        "452,16 é a área da superfície (4πr²), não o volume. 2.712,96 esquece de dividir por 3. 678,24 usa πr³ sem o 4/3. 113,04 é πr².",
      pegadinha: "Área da esfera (4πr²) e volume ((4/3)πr³) se parecem. O volume tem r³.",
      conhecimento: "Esfera: V = (4/3)πr³; A = 4πr².",
    },
    {
      topico: "Poliedros",
      subassunto: "Poliedros de Platão",
      dificuldade: 5,
      raciocinio: "Lembrar os cinco poliedros e o tipo de face de cada um.",
      enunciado:
        "Analise as afirmações sobre poliedros regulares.\nI. Existem apenas cinco poliedros de Platão.\nII. O icosaedro regular tem 20 faces triangulares.\nIII. O cubo tem 8 faces.\nIV. O dodecaedro regular tem faces pentagonais.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I e II.", "Apenas II e IV.", "Apenas I, III e IV.", "Apenas I, II e IV.", "I, II, III e IV."],
      correta: 3,
      explicacao: "I: são tetraedro, cubo, octaedro, dodecaedro e icosaedro. II: “icosa” = 20. IV: as 12 faces do dodecaedro são pentágonos.",
      explicacaoErradas:
        "III está errada: o cubo tem 6 faces. O número 8 é o de vértices.",
      pegadinha: "Cubo: 6 faces, 8 vértices, 12 arestas. É fácil trocar.",
      conhecimento: "Cubo pela relação de Euler: 8 − 12 + 6 = 2.",
    },
    {
      topico: "Volume",
      subassunto: "Pirâmide",
      dificuldade: 5,
      raciocinio: "Achar o apótema com Pitágoras para a área lateral e usar o 1/3 no volume.",
      enunciado:
        "Uma pirâmide quadrangular regular tem aresta da base de 6 m e altura de 4 m. A área lateral e o volume dessa pirâmide são, respectivamente,",
      alternativas: ["48 m² e 60 m³", "60 m² e 48 m³", "96 m² e 48 m³", "60 m² e 144 m³", "120 m² e 48 m³"],
      correta: 1,
      explicacao: "Apótema: √(4² + 3²) = 5 m. Área lateral: 4 triângulos de 6 × 5 ÷ 2 = 60 m². Volume: 6² × 4 ÷ 3 = 48 m³.",
      explicacaoErradas:
        "96 m² soma a base (36 m²): é a área total, não a lateral. 144 m³ esquece de dividir por 3. 120 m² esquece de dividir a área dos triângulos por 2. A primeira opção troca os dois valores.",
      pegadinha: "A altura da face (apótema, 5 m) não é a altura da pirâmide (4 m).",
      conhecimento: "Pirâmide: V = área da base × altura ÷ 3.",
    },
    {
      topico: "Volume",
      subassunto: "Parte de um recipiente",
      dificuldade: 5,
      raciocinio: "Calcular o volume em cm³, trocar por litros e pegar a parte que falta.",
      enunciado:
        "Um aquário em forma de paralelepípedo mede, por dentro, 60 cm × 30 cm × 40 cm (altura). Ele está com água até 3/4 da altura. A quantidade de água que falta para enchê-lo é",
      alternativas: ["54 L", "72 L", "1,8 L", "180 L", "18 L"],
      correta: 4,
      explicacao: "Volume total: 60 × 30 × 40 = 72.000 cm³ = 72 L. Falta 1/4: 72 ÷ 4 = 18 L.",
      explicacaoErradas:
        "54 L é a água que já está no aquário (3/4). 72 L é a capacidade total. 1,8 L e 180 L erram a troca de cm³ para litros.",
      pegadinha: "A pergunta é o que falta, não o que já tem.",
      conhecimento: "1.000 cm³ = 1 dm³ = 1 L.",
    },
    {
      topico: "Área",
      subassunto: "Área total do prisma",
      dificuldade: 5,
      raciocinio: "Achar a hipotenusa da base, calcular a área lateral e somar as duas bases.",
      enunciado:
        "Um prisma reto tem como base um triângulo retângulo de catetos 3 m e 4 m, e a altura do prisma é de 10 m. A área total desse prisma é",
      alternativas: ["120 m²", "60 m²", "132 m²", "126 m²", "144 m²"],
      correta: 2,
      explicacao: "Hipotenusa: 5 m. Perímetro da base: 12 m. Área lateral: 12 × 10 = 120 m². Cada base: 3 × 4 ÷ 2 = 6 m². Total: 120 + 2 × 6 = 132 m².",
      explicacaoErradas:
        "120 m² é só a área lateral. 126 m² soma uma base só. 60 é o volume do prisma (6 × 10), em m³.",
      pegadinha: "O prisma tem duas bases: a de cima e a de baixo.",
      conhecimento: "Área total = área lateral + 2 × área da base.",
    },
  ],
};
