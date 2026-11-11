import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "discursivas-05",
  resumo: {
    ideia:
      "Chegou a hora de praticar como se fosse a prova: texto à mão, na folha de 30 linhas, com tempo marcado. O objetivo é descobrir as próprias dificuldades e ganhar velocidade sem perder qualidade.",
    itens: [
      {
        termo: "Marcar o tempo",
        faz: "Anotar no canto superior direito da folha o tempo gasto em cada texto, para acompanhar a evolução da velocidade.",
      },
      {
        termo: "Praticar todos os temas",
        faz: "Quanto mais textos, melhor, mesmo os que não forem corrigidos por outra pessoa.",
      },
      {
        termo: "Caneta da prova",
        faz: "Treinar com caneta esferográfica de tinta preta e corpo transparente, que é o que a maioria dos editais exige.",
      },
      {
        termo: "Simular a prova",
        faz: "Sem distrações, com as mesmas regras rígidas do dia do concurso.",
      },
      {
        termo: "Rascunho",
        faz: "Opcional e pessoal: fazer até ter segurança para dispensá-lo. Em qualquer caso, nunca deixar de delimitar os pontos semânticos (tema, tese e tópicos).",
      },
      {
        termo: "Folha de 30 linhas",
        faz: "O treino usa uma folha de resposta numerada de 1 a 30, com campo para o tema e o tempo utilizado.",
      },
    ],
    cuidado: "Analise os erros apontados em cada texto para que não se repitam no seguinte.",
  },
  questoes: [
    {
      topico: "Treino da discursiva",
      subassunto: "Controle do tempo",
      dificuldade: 4,
      raciocinio: "Anotar o tempo gasto para medir a velocidade.",
      enunciado:
        "Ao treinar uma discursiva na folha de 30 linhas do curso, o candidato deve anotar no canto superior direito da folha:",
      alternativas: [
        "o número de palavras do texto, para conferir se ele respeitou o limite de linhas do edital",
        "o nome completo e o número de inscrição, para simular a identificação exigida na prova",
        "o tempo gasto na produção, para acompanhar a evolução da sua velocidade de escrita",
        "a nota que espera receber, para comparar depois com a correção feita pelo professor",
        "a tese do texto em uma frase, para que o corretor encontre rápido o ponto de vista defendido",
      ],
      correta: 2,
      explicacao:
        "A orientação é anotar o tempo utilizado. O desafio não é só escrever bem, mas escrever bem dentro do tempo da prova.",
      explicacaoErradas:
        "Não se conta “o número de palavras”: o limite é de linhas. Pôr “o nome completo e o número de inscrição” simularia justamente o que anula a prova real. Anotar “a nota que espera receber” não mede nada. E a tese deve estar no texto, não em anotação para que “o corretor encontre rápido”.",
      pegadinha: "Treinar com identificação na folha, o que na prova real anula o texto.",
      conhecimento: "Velocidade e qualidade se ganham juntas, com muitos textos.",
    },
    {
      topico: "Treino da discursiva",
      subassunto: "Rascunho e pontos semânticos",
      dificuldade: 5,
      raciocinio: "Rascunho é opcional; delimitar os pontos semânticos, nunca.",
      enunciado:
        "Segundo as orientações para os treinos, o rascunho é opcional e depende da segurança de cada candidato. Mas, em qualquer hipótese, o candidato deve:",
      alternativas: [
        "escrever o texto inteiro duas vezes, uma no rascunho e outra na folha definitiva, sem exceção",
        "delimitar ao menos os pontos semânticos que vai trabalhar no texto antes de começar a escrever",
        "dispensar o rascunho desde o primeiro treino, para ganhar velocidade de escrita mais rápido",
        "treinar com a caneta mais confortável que tiver, mesmo que seja diferente da exigida na prova",
        "praticar só os temas que já domina, porque a quantidade de treinos importa pouco na preparação para a prova",
      ],
      correta: 1,
      explicacao:
        "A aula sugere fazer o rascunho até ter segurança para dispensá-lo, mas nunca deixar de delimitar os pontos semânticos: tema, tese ou pressuposto e tópicos.",
      explicacaoErradas:
        "O rascunho completo é recomendado, mas não “sem exceção”. Dispensar o rascunho “desde o primeiro treino” contraria a orientação. A caneta deve ser igual à da prova, ao contrário de “mesmo que seja diferente”. E a regra é praticar todos os temas, não “só os temas que já domina”.",
      pegadinha: "Confundir dispensar o rascunho com dispensar o planejamento.",
      conhecimento: "Pontos semânticos: tema, tese (ou pressuposto orientador) e tópicos.",
    },
  ],
};
