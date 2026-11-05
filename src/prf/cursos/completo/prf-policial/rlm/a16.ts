import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-16",
  resumo: {
    ideia:
      "Geometria espacial trata de sólidos. Quase toda conta usa duas ideias: a área da superfície e o volume, que é o espaço ocupado.",
    itens: [
      {
        termo: "Prisma e cilindro",
        faz: "Volume = área da base · altura.",
      },
      {
        termo: "Pirâmide e cone",
        faz: "Volume = área da base · altura ÷ 3.",
        pista: "Com a mesma base e a mesma altura, o cone tem 1/3 do volume do cilindro.",
      },
      {
        termo: "Esfera",
        faz: "Volume = 4πr³ ÷ 3. Área = 4πr².",
      },
      {
        termo: "Litros",
        faz: "1 m³ = 1.000 litros. 1 dm³ = 1 litro.",
      },
      {
        termo: "Apótema da pirâmide",
        faz: "É a altura de cada face lateral. Vem de Pitágoras com a altura e a metade do lado da base.",
      },
      {
        termo: "Geratriz do cone",
        faz: "g² = r² + h². Área lateral = πrg.",
      },
      {
        termo: "Cilindro",
        faz: "Área lateral = 2πrh.",
      },
      {
        termo: "Esfera no cubo",
        faz: "Esfera inscrita em cubo: o diâmetro é igual à aresta.",
      },
    ],
    cuidado:
      "O raio entra ao quadrado no volume do cilindro e do cone: dobrar o raio multiplica o volume por 4.",
  },
  questoes: [
    {
      topico: "Prismas",
      subassunto: "Nível de água em um tanque",
      dificuldade: 4,
      raciocinio: "Passar litros para m³ e dividir pela área da base.",
      enunciado:
        "Um tanque tem a forma de um paralelepípedo, com base de 2 m por 1,5 m. Ao receber 300 litros, seu nível sobe quantos centímetros?",
      alternativas: ["10", "1", "30", "90", "100"],
      correta: 0,
      explicacao: "300 L = 0,3 m³. A base tem 3 m². Altura: 0,3 ÷ 3 = 0,1 m = 10 cm.",
      explicacaoErradas:
        "“100” usa 1 m³ = 100 L, e “1” usa 1 m³ = 10.000 L. “30” não divide pela base. “90” multiplica por 3, em vez de dividir.",
      pegadinha: "Errar a conversão de litros. 1 m³ tem 1.000 litros.",
      conhecimento: "Volume = área da base · altura.",
    },
    {
      topico: "Cilindro",
      subassunto: "Efeito de mudar raio e altura",
      dificuldade: 5,
      raciocinio: "Comparar π(2r)²(h/2) com πr²h.",
      enunciado:
        "Se o raio de um cilindro dobrar e a altura cair à metade, o volume do cilindro",
      alternativas: ["não muda", "quadruplica", "cai à metade", "dobra", "fica oito vezes maior"],
      correta: 3,
      explicacao: "π(2r)² · (h ÷ 2) = 4πr² · h ÷ 2 = 2πr²h. O volume dobra.",
      explicacaoErradas:
        "“não muda” trata o raio como se entrasse sem o quadrado. “quadruplica” olha só para o raio, e “cai à metade”, só para a altura. “fica oito vezes maior” eleva o 2 ao cubo.",
      pegadinha: "Achar que dobrar e cortar ao meio se anulam. O raio está ao quadrado.",
      conhecimento: "V = πr²h.",
    },
    {
      topico: "Esfera",
      subassunto: "Igualdade de volumes",
      dificuldade: 5,
      raciocinio: "Igualar o volume da esfera ao do cilindro.",
      enunciado:
        "Uma esfera maciça de raio 3 cm é derretida e moldada em um cilindro de raio 3 cm. A altura do cilindro, em cm, é",
      alternativas: ["3", "6", "4", "12", "4/3"],
      correta: 2,
      explicacao: "Esfera: 4π · 27 ÷ 3 = 36π. Cilindro: 9πh. Então, 9h = 36 e h = 4 cm.",
      explicacaoErradas:
        "“3” repete o raio, e “6” usa o diâmetro. “12” esquece de dividir por 3 o volume da esfera. “4/3” usa r² no lugar de r³.",
      pegadinha: "Achar que a altura é o diâmetro. O volume é que se conserva.",
      conhecimento: "Ao derreter e moldar, o volume se mantém.",
    },
    {
      topico: "Pirâmide",
      subassunto: "Área total",
      dificuldade: 5,
      raciocinio: "Achar o apótema com Pitágoras, depois somar faces e base.",
      enunciado:
        "Uma pirâmide regular de base quadrada tem aresta da base de 12 m e altura de 8 m. A área total da pirâmide, em m², é",
      alternativas: ["336", "240", "624", "384", "1.152"],
      correta: 3,
      explicacao:
        "Apótema: √(8² + 6²) = 10. Faces: 4 · 12 · 10 ÷ 2 = 240. Base: 144. Total: 384 m².",
      explicacaoErradas:
        "“336” usa a altura no lugar do apótema. “240” esquece a base. “624” não divide as faces por 2. “1.152” multiplica a base pela altura.",
      pegadinha: "Usar a altura da pirâmide na área da face. A altura da face é o apótema.",
      conhecimento: "Área total = área lateral + área da base.",
    },
    {
      topico: "Cone",
      subassunto: "Área lateral pela geratriz",
      dificuldade: 4,
      raciocinio: "Achar g com Pitágoras e aplicar πrg.",
      enunciado: "Um cone reto tem raio 6 cm e altura 8 cm. A área lateral do cone, em cm², é",
      alternativas: ["48π", "96π", "60π", "80π", "100π"],
      correta: 2,
      explicacao: "g = √(36 + 64) = 10. Área lateral: π · 6 · 10 = 60π.",
      explicacaoErradas:
        "“48π” usa a altura no lugar da geratriz. “96π” é a área total, com a base. “80π” usa g e h. “100π” eleva g ao quadrado.",
      pegadinha: "Usar h em πrg. A fórmula pede a geratriz.",
      conhecimento: "g² = r² + h².",
    },
    {
      topico: "Inscrição de sólidos",
      subassunto: "Esfera dentro do cubo",
      dificuldade: 5,
      raciocinio: "A aresta é o diâmetro. Subtrair o volume da esfera do volume do cubo.",
      enunciado:
        "Uma esfera está inscrita em um cubo de aresta 12 cm. O volume da parte do cubo que fica fora da esfera, em cm³, é",
      alternativas: ["1.728 − 144π", "1.728 − 288π", "1.728 − 2.304π", "1.728 − 216π", "864 − 288π"],
      correta: 1,
      explicacao: "Raio: 6 cm. Esfera: 4π · 216 ÷ 3 = 288π. Cubo: 12³ = 1.728.",
      explicacaoErradas:
        "“1.728 − 144π” usa a área da esfera. “1.728 − 2.304π” usa raio 12. “1.728 − 216π” esquece o fator 4/3. “864 − 288π” usa a área do cubo, e não o volume.",
      pegadinha: "Tomar a aresta como raio. Ela é o diâmetro da esfera.",
      conhecimento: "Esfera inscrita em cubo: 2r = aresta.",
    },
  ],
};
