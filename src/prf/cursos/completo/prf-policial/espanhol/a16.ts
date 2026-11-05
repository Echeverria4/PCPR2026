import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-16",
  resumo: {
    ideia:
      "A prova de leitura cobra o que o texto diz, e não o que parece provável. O erro mais comum é transformar possibilidade em certeza.",
    itens: [
      {
        termo: "Palavras de certeza",
        faz: "Siempre, nunca, todos e solo pedem conferência no texto.",
      },
      {
        termo: "Palavras de dúvida",
        faz: "Podría, quizá, tal vez e parece não afirmam o fato.",
      },
      {
        termo: "Según",
        faz: "Mostra a versão de alguém, e não um fato garantido pelo autor.",
      },
      {
        termo: "La mayoría",
        faz: "Não é todos. Sobra sempre uma parte.",
      },
      {
        termo: "Tras",
        faz: "Indica o que veio depois, e não prova a causa.",
      },
      {
        termo: "Inferir",
        faz: "Só vale o que decorre do texto, sem somar conhecimento de fora.",
      },
      {
        termo: "Palavras do contexto",
        faz: "Alargar é tornar mais longo. Salvo é exceto.",
      },
    ],
    cuidado: "Tire a prova: ache no texto a frase que sustenta a resposta.",
  },
  questoes: [
    {
      topico: "Leitura",
      subassunto: "Possibilidade e certeza",
      dificuldade: 4,
      raciocinio: "Podría não é volverá.",
      enunciado:
        "Texto: “Según el servicio meteorológico, la niebla podría volver esta semana, aunque no hay previsión firme.” Conclui-se que",
      alternativas: [
        "a neblina volta nesta semana, segundo a previsão firme do serviço",
        "a volta da neblina é possível, mas não é certa",
        "a neblina não volta nesta semana, pois falta previsão firme",
        "o serviço meteorológico afasta qualquer risco de neblina",
        "a previsão firme indica que a neblina volta em poucos dias",
      ],
      correta: 1,
      explicacao: "Podría indica possibilidade, e aunque no hay previsión firme confirma a falta de certeza.",
      explicacaoErradas:
        "“volta nesta semana” transforma hipótese em fato. “não volta” também afirma demais. “afasta qualquer risco” contraria podría. “previsão firme indica” contraria o texto.",
      pegadinha: "Trocar possibilidade por certeza.",
      conhecimento: "Niebla é neblina.",
    },
    {
      topico: "Leitura",
      subassunto: "Versões em disputa",
      dificuldade: 5,
      raciocinio: "Afirmar não é provar.",
      enunciado:
        "Texto: “Una empresa de transporte afirmó que los avisos llegaron tarde. El gobierno lo negó.” Com base no texto, é seguro afirmar que",
      alternativas: [
        "os avisos chegaram tarde, como provou a empresa de transporte",
        "o governo admitiu o atraso e pediu desculpas à empresa",
        "os avisos nunca chegaram, segundo as duas partes da disputa",
        "a empresa mentiu, pois o governo apresentou provas do horário",
        "há versões opostas sobre a hora dos avisos",
      ],
      correta: 4,
      explicacao: "O texto traz duas versões e não diz qual é a verdadeira. Só a existência da disputa é certa.",
      explicacaoErradas:
        "“como provou” e “apresentou provas” inventam provas. “admitiu o atraso” contraria negó. “nunca chegaram” contraria as duas versões.",
      pegadinha: "Tomar partido quando o texto não toma.",
      conhecimento: "Em lo negó, o lo retoma a afirmação inteira.",
    },
    {
      topico: "Leitura",
      subassunto: "La mayoría",
      dificuldade: 4,
      raciocinio: "Maioria deixa uma parte de fora.",
      enunciado:
        "Texto: “La mayoría de los accidentes del tramo ocurre de noche, y gran parte de ellos involucra a camiones.” Conclui-se que",
      alternativas: [
        "todos os acidentes do trecho ocorrem à noite, com caminhões",
        "a maior parte dos acidentes ocorre de dia, com motocicletas",
        "os caminhões causam os acidentes noturnos do trecho",
        "há acidentes no trecho fora do período noturno",
        "a maioria dos caminhões do trecho sofre acidentes durante a noite",
      ],
      correta: 3,
      explicacao: "Se a maioria ocorre à noite, uma parte ocorre em outro horário.",
      explicacaoErradas:
        "“todos os acidentes” troca maioria por totalidade. “de dia” inverte o texto. “causam” troca envolver por causar. “a maioria dos caminhões” muda de quem se fala.",
      pegadinha: "Ler involucra como causa.",
      conhecimento: "Involucrar é envolver.",
    },
    {
      topico: "Leitura",
      subassunto: "Sequência e causa",
      dificuldade: 5,
      raciocinio: "Depois não é por causa de.",
      enunciado:
        "Texto: “Tras la instalación de radares, los choques bajaron un 20 %. Los técnicos aún estudian si hubo otra causa.” Segundo o texto,",
      alternativas: [
        "a queda veio depois dos radares, e a causa segue em estudo",
        "os radares provocaram a queda dos choques, como concluíram os técnicos",
        "os técnicos descartaram qualquer ligação entre radares e choques",
        "os choques subiram 20% depois que os radares foram instalados",
        "os radares foram instalados depois da queda de 20% nos choques",
      ],
      correta: 0,
      explicacao: "Tras marca a ordem dos fatos. Aún estudian mostra que a causa não está definida.",
      explicacaoErradas:
        "“provocaram” e “concluíram” afirmam o que segue em estudo. “descartaram” contraria o texto. “subiram” erra bajaron. “depois da queda” inverte a ordem.",
      pegadinha: "Ler tras como “por causa de”.",
      conhecimento: "Tras significa depois de, ou atrás de.",
    },
    {
      topico: "Vocabulário",
      subassunto: "Alargar e casi",
      dificuldade: 5,
      raciocinio: "Largo é comprido.",
      enunciado:
        "Texto: “Los camiones pesados fueron desviados por la ruta del valle, lo que alargó el viaje en casi una hora.” Entende-se que",
      alternativas: [
        "a rodovia do vale foi alargada para receber os caminhões pesados",
        "a viagem ficou quase uma hora mais longa",
        "a viagem pelo vale ficou uma hora mais curta para os caminhões",
        "os caminhões leves foram proibidos de usar a rodovia do vale",
        "a viagem durou quase uma hora ao todo",
      ],
      correta: 1,
      explicacao: "Alargar é tornar mais longo, e en casi una hora indica o aumento, e não o total.",
      explicacaoErradas:
        "“alargada” lê o verbo como aumentar a largura. “mais curta” inverte o sentido. “caminhões leves” não aparecem. “ao todo” troca o aumento pelo total.",
      pegadinha: "Ler alargar como no português.",
      conhecimento: "Ensanchar é o verbo de aumentar a largura.",
    },
    {
      topico: "Vocabulário",
      subassunto: "Salvo",
      dificuldade: 4,
      raciocinio: "Salvo abre uma exceção.",
      enunciado: "Texto: “No hubo heridos. Tampoco se registraron daños en la vía, salvo en la barrera lateral.” Segundo o texto,",
      alternativas: [
        "a barreira lateral salvou os feridos do acidente na via",
        "houve feridos na via, mas nenhum dano na barreira lateral",
        "nada foi danificado, nem mesmo a barreira lateral da via",
        "não houve feridos, e só a barreira lateral sofreu dano",
        "os feridos foram registrados apenas junto à barreira lateral",
      ],
      correta: 3,
      explicacao: "Salvo significa exceto. Ninguém se feriu, e a barreira é a única exceção quanto ao dano.",
      explicacaoErradas:
        "“salvou” lê salvo como verbo. “houve feridos” contraria o texto. “nem mesmo” apaga a exceção. “registrados” inventa feridos.",
      pegadinha: "Ler salvo como salvar.",
      conhecimento: "Excepto e menos têm o mesmo valor.",
    },
  ],
};
