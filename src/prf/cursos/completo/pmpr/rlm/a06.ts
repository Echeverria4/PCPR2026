import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-a06",
  resumo: {
    ideia:
      "Geometria plana trata de figuras desenhadas no papel: retas, ângulos, triângulos, quadriláteros e círculos. A prova cobra três coisas: converter unidades, calcular áreas e usar as propriedades dos ângulos e dos triângulos, com destaque para o teorema de Pitágoras.",
    itens: [
      {
        termo: "Unidades de comprimento",
        faz: "km, hm, dam, m, dm, cm, mm: cada degrau vale 10 vezes o seguinte. 1 km = 1.000 m; 1 m = 100 cm.",
      },
      {
        termo: "Unidades de área",
        faz: "Cada degrau vale 100 vezes o seguinte, porque a área tem duas dimensões. 1 m² = 10.000 cm²; 1 km² = 1.000.000 m². 1 hectare (ha) = 10.000 m².",
        pista: "Erro clássico: achar que 1 m² = 100 cm².",
      },
      {
        termo: "Ângulos",
        faz: "Agudo (< 90°), reto (90°), obtuso (> 90°), raso (180°). Complementares somam 90°; suplementares somam 180°.",
      },
      {
        termo: "Paralelas cortadas por uma transversal",
        faz: "Ângulos alternos internos e correspondentes são iguais. Colaterais internos somam 180°.",
      },
      {
        termo: "Triângulos",
        faz: "A soma dos ângulos internos é 180°. Isósceles tem dois lados iguais e os ângulos da base iguais; equilátero tem tudo igual (60° cada).",
      },
      {
        termo: "Desigualdade triangular",
        faz: "Cada lado é menor que a soma dos outros dois e maior que a diferença deles. Com lados 7 e 12, o terceiro fica entre 5 e 19 (sem os extremos).",
      },
      {
        termo: "Teorema de Pitágoras",
        faz: "No triângulo retângulo: hipotenusa² = cateto² + cateto². Ternos famosos: 3-4-5, 5-12-13, 6-8-10, 7-24-25.",
      },
      {
        termo: "Áreas de quadriláteros",
        faz: "Retângulo e paralelogramo: base × altura. Quadrado: lado². Losango: (diagonal maior × diagonal menor) ÷ 2. Trapézio: (base maior + base menor) × altura ÷ 2.",
      },
      {
        termo: "Área do triângulo",
        faz: "base × altura ÷ 2. A altura é perpendicular à base, e não é o lado inclinado.",
      },
      {
        termo: "Círculo",
        faz: "Comprimento da circunferência: 2πr. Área do círculo: πr².",
        pista: "Se o raio dobra, o comprimento dobra, mas a área fica 4 vezes maior.",
      },
      {
        termo: "Ângulo inscrito",
        faz: "O ângulo com vértice na circunferência mede a metade do ângulo central que enxerga o mesmo arco.",
      },
      {
        termo: "Ampliação",
        faz: "Se as medidas são multiplicadas por k, a área é multiplicada por k². Lados 20% maiores → área × 1,44 (44% maior).",
      },
    ],
  },
  questoes: [
    {
      topico: "Unidades de medida",
      subassunto: "Área em hectares",
      dificuldade: 4,
      raciocinio: "Passar tudo para metros, calcular a área e dividir por 10.000.",
      enunciado:
        "Um terreno retangular destinado a um novo batalhão mede 0,8 km por 250 m. A área desse terreno, em hectares, é",
      alternativas: ["20 ha", "2 ha", "200 ha", "0,2 ha", "2.000 ha"],
      correta: 0,
      explicacao: "0,8 km = 800 m. Área: 800 × 250 = 200.000 m². Como 1 ha = 10.000 m², são 20 ha.",
      explicacaoErradas:
        "200 ha e 2 ha saem de dividir por 1.000 ou por 100.000, trocando o valor do hectare. 0,2 ha e 2.000 ha erram a troca de km para m.",
      pegadinha: "As medidas vêm em unidades diferentes. Converta antes de multiplicar.",
      conhecimento: "1 hectare é um quadrado de 100 m × 100 m = 10.000 m².",
    },
    {
      topico: "Triângulos",
      subassunto: "Desigualdade triangular",
      dificuldade: 5,
      raciocinio: "O terceiro lado fica entre a diferença e a soma dos outros dois, sem os extremos.",
      enunciado:
        "Um triângulo tem dois lados medindo 7 cm e 12 cm, e o terceiro lado mede um número inteiro de centímetros. A quantidade de valores possíveis para o terceiro lado é",
      alternativas: ["12", "14", "13", "19", "11"],
      correta: 2,
      explicacao: "12 − 7 < x < 12 + 7, ou seja, 5 < x < 19. Os inteiros vão de 6 a 18: 13 valores.",
      explicacaoErradas:
        "14 inclui um dos extremos (5 ou 19), e com eles o triângulo “fecha” em uma linha reta. 12 e 11 esquecem valores na contagem. 19 é a soma dos lados, não a quantidade.",
      pegadinha: "Para contar inteiros entre 5 e 19, sem os extremos: 18 − 6 + 1 = 13.",
      conhecimento: "|a − b| < c < a + b.",
    },
    {
      topico: "Triângulos",
      subassunto: "Pitágoras e área",
      dificuldade: 5,
      raciocinio: "Achar o outro lado com Pitágoras e multiplicar os dois lados.",
      enunciado:
        "Um pátio retangular tem diagonal de 25 m, e um dos lados mede 7 m. A área desse pátio é",
      alternativas: ["175 m²", "84 m²", "350 m²", "62 m²", "168 m²"],
      correta: 4,
      explicacao: "A diagonal divide o retângulo em dois triângulos retângulos: 25² = 7² + x², então x² = 576 e x = 24. Área: 7 × 24 = 168 m².",
      explicacaoErradas:
        "84 m² é a área de só um dos triângulos. 175 m² multiplica a diagonal por um lado, mas a diagonal não é lado. 62 é o perímetro (2 × (7 + 24)), não a área.",
      pegadinha: "A diagonal é a hipotenusa: ela não entra na conta da área.",
      conhecimento: "7-24-25 é um terno pitagórico: 49 + 576 = 625.",
    },
    {
      topico: "Triângulos",
      subassunto: "Ângulos do triângulo isósceles",
      dificuldade: 5,
      raciocinio: "Testar o ângulo dado como ângulo da base e como ângulo do vértice.",
      enunciado:
        "Em um triângulo isósceles, um dos ângulos internos mede 40°. As medidas dos outros dois ângulos podem ser:\nI. 70° e 70°.\nII. 40° e 100°.\nIII. 40° e 70°.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I.", "Apenas I e II.", "Apenas II.", "Apenas II e III.", "I, II e III."],
      correta: 1,
      explicacao: "Se 40° é o ângulo do vértice, os da base somam 140°: 70° cada (I). Se 40° é um ângulo da base, o outro da base também é 40°, e o vértice tem 100° (II).",
      explicacaoErradas:
        "III está errada: 40 + 40 + 70 = 150°, e os ângulos de um triângulo somam 180°. Marcar só I ou só II esquece que há duas posições possíveis para o ângulo de 40°.",
      pegadinha: "A questão não diz onde está o ângulo de 40°. É preciso testar as duas posições.",
      conhecimento: "No isósceles, os ângulos da base são iguais.",
    },
    {
      topico: "Círculo",
      subassunto: "Da circunferência para a área",
      dificuldade: 5,
      raciocinio: "Achar o raio pelo comprimento e depois calcular a área.",
      enunciado:
        "Uma praça circular tem 31,4 m de contorno. Usando π = 3,14, a área da praça é",
      alternativas: ["314 m²", "31,4 m²", "157 m²", "78,5 m²", "15,7 m²"],
      correta: 3,
      explicacao: "2πr = 31,4 → 6,28r = 31,4 → r = 5 m. Área: πr² = 3,14 × 25 = 78,5 m².",
      explicacaoErradas:
        "314 m² usa 10 m (o diâmetro) como raio. 157 m² multiplica 3,14 por 50, fórmula que não existe. 31,4 m² repete o valor do contorno.",
      pegadinha: "Contorno é comprimento (2πr), não área (πr²).",
      conhecimento: "Diâmetro = 2 × raio.",
    },
    {
      topico: "Círculo",
      subassunto: "Ângulo inscrito",
      dificuldade: 4,
      raciocinio: "O ângulo inscrito vale a metade do central que enxerga o mesmo arco.",
      enunciado:
        "Em uma circunferência, um ângulo inscrito e um ângulo central enxergam o mesmo arco. Se o ângulo central mede 130°, o ângulo inscrito mede",
      alternativas: ["130°", "260°", "50°", "65°", "115°"],
      correta: 3,
      explicacao: "Ângulo inscrito = ângulo central ÷ 2 = 130° ÷ 2 = 65°.",
      explicacaoErradas:
        "260° dobra em vez de dividir. 50° é o suplemento de 130°. 115° é o suplemento de 65°. Nenhum deles segue a regra.",
      pegadinha: "O vértice do inscrito está na circunferência; o do central, no centro. O de longe é menor.",
      conhecimento: "Todos os ângulos inscritos que enxergam o mesmo arco são iguais.",
    },
    {
      topico: "Áreas",
      subassunto: "Trapézio isósceles",
      dificuldade: 5,
      raciocinio: "Achar a altura com Pitágoras usando a sobra das bases e aplicar a fórmula do trapézio.",
      enunciado:
        "Um terreno tem forma de trapézio isósceles, com bases de 20 m e 8 m e lados não paralelos de 10 m cada. A área do terreno é",
      alternativas: ["112 m²", "140 m²", "224 m²", "80 m²", "96 m²"],
      correta: 0,
      explicacao: "Sobra de cada lado: (20 − 8) ÷ 2 = 6 m. Altura: 10² = 6² + h², h = 8 m. Área: (20 + 8) × 8 ÷ 2 = 112 m².",
      explicacaoErradas:
        "140 m² usa o lado inclinado (10 m) como altura. 224 m² esquece de dividir por 2. 96 m² usa a diferença das bases (12) em vez da soma.",
      pegadinha: "O lado inclinado não é a altura. A altura é a reta “em pé”, perpendicular às bases.",
      conhecimento: "Trapézio: (B + b) × h ÷ 2.",
    },
    {
      topico: "Ângulos",
      subassunto: "Paralelas e transversal",
      dificuldade: 5,
      raciocinio: "Colaterais internos somam 180°.",
      enunciado:
        "Duas retas paralelas são cortadas por uma transversal, formando ângulos colaterais internos que medem 3x + 10° e 2x + 20°. O maior desses ângulos mede",
      alternativas: ["80°", "40°", "100°", "90°", "110°"],
      correta: 2,
      explicacao: "Colaterais internos somam 180°: 5x + 30 = 180, x = 30. Os ângulos são 100° e 80°; o maior é 100°.",
      explicacaoErradas:
        "40° sai de igualar os ângulos (3x + 10 = 2x + 20), regra dos alternos internos, não dos colaterais. 80° é o menor dos dois. 90° supõe ângulos retos.",
      pegadinha: "Alternos internos são iguais; colaterais internos são suplementares. Os nomes confundem.",
      conhecimento: "Correspondentes e alternos: iguais. Colaterais: somam 180°.",
    },
    {
      topico: "Áreas",
      subassunto: "Ampliação",
      dificuldade: 5,
      raciocinio: "A área cresce com o quadrado do fator dos lados.",
      enunciado: "Se cada lado de um terreno quadrado aumentar 20%, a área do terreno aumentará",
      alternativas: ["20%", "40%", "24%", "42%", "44%"],
      correta: 4,
      explicacao: "Fator dos lados: 1,2. Fator da área: 1,2² = 1,44. A área fica 44% maior.",
      explicacaoErradas:
        "20% acha que a área cresce como os lados. 40% soma 20% duas vezes, sem levar em conta o “aumento sobre o aumento” (20% de 20% = 4%).",
      pegadinha: "A área tem duas dimensões: o aumento entra duas vezes, multiplicando.",
      conhecimento: "Medidas × k → área × k² → volume × k³.",
    },
    {
      topico: "Áreas",
      subassunto: "Propriedades",
      dificuldade: 5,
      raciocinio: "Julgar cada fórmula e cada conversão.",
      enunciado:
        "Julgue as afirmações, marcando V para verdadeiro e F para falso.\n( ) A área de um losango é o produto das diagonais dividido por 2.\n( ) Dobrar o raio de um círculo dobra a sua área.\n( ) A soma dos ângulos internos de qualquer triângulo é 180°.\n( ) 1 m² equivale a 100 cm².\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, F, F.", "V, F, V, F.", "F, F, V, V.", "V, F, F, V.", "F, V, V, F."],
      correta: 1,
      explicacao: "1ª: V. 2ª: F, porque a área fica 4 vezes maior (2²). 3ª: V. 4ª: F, porque 1 m² = 100 cm × 100 cm = 10.000 cm².",
      explicacaoErradas:
        "Marcar V na 2ª esquece que a área depende do raio ao quadrado. Marcar V na 4ª converte área como se fosse comprimento.",
      pegadinha: "Em área, cada troca de unidade vale 100, não 10.",
      conhecimento: "Losango: D × d ÷ 2. Círculo: πr².",
    },
  ],
};
