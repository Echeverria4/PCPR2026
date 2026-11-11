import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "discursivas-09",
  resumo: {
    ideia:
      "Rodada de temas de trânsito, serviço público e informação: Lei Seca, Carta de Serviços ao Usuário, negacionismo, pós-verdade e notícias falsas. O foco é pôr cada ideia no aspecto certo e fechar o texto sem abrir assunto novo.",
    itens: [
      {
        termo: "Lei Seca",
        faz: "A Lei 11.705/2008 endureceu o Código de Trânsito contra quem dirige depois de beber, e a Lei 12.760/2012 reforçou a tolerância zero e ampliou os meios de prova. Dirigir sob influência de álcool é infração gravíssima (art. 165 do CTB) e, com a capacidade psicomotora alterada, crime (art. 306).",
      },
      {
        termo: "Aspectos por agente",
        faz: "Propostas de trânsito costumam separar o que cabe ao Estado (fiscalização, educação), à sociedade (campanhas de empresas, escolas e entidades) e a cada pessoa (atitudes individuais). Cada ideia vai para o seu bloco.",
      },
      {
        termo: "Carta de Serviços ao Usuário",
        faz: "Prevista na Lei 13.460/2017 (art. 7º), informa ao cidadão os serviços do órgão, como acessá-los e os compromissos de atendimento. Tema que liga transparência e qualidade do serviço público.",
      },
      {
        termo: "Negacionismo e pós-verdade",
        faz: "Pós-verdade é o cenário em que crenças e emoções pesam mais que os fatos na formação da opinião; negacionismo é recusar evidências já consolidadas.",
      },
      {
        termo: "Notícias falsas",
        faz: "Desinformação espalhada nas redes. Os temas pedem causas, efeitos sobre a confiança nas instituições e formas de combate, como checagem, educação midiática e responsabilização.",
      },
      {
        termo: "Fechamento",
        faz: "Retoma a tese ou avança com proposta ligada ao que foi discutido. Nunca traz um argumento novo que não foi desenvolvido.",
      },
    ],
    cuidado:
      "Tolerância zero não quer dizer que qualquer gole seja crime: a infração administrativa vem primeiro; o crime exige capacidade psicomotora alterada, comprovada pelos meios do art. 306.",
  },
  questoes: [
    {
      topico: "Planejamento pela proposta",
      subassunto: "Ideia no aspecto certo",
      dificuldade: 4,
      raciocinio: "Ação da sociedade = parte de empresas, escolas e entidades, sem poder de polícia.",
      enunciado:
        "A proposta trata do combate às infrações de trânsito nas rodovias federais e pede: (1) medidas da PRF; (2) ações da sociedade; (3) atitudes individuais do motorista. A ideia que se encaixa no aspecto (2) é:",
      alternativas: [
        "operações com etilômetro nas rodovias federais, sobretudo em feriados e fins de semana",
        "instalação de radares e aumento das rondas da PRF nos trechos da rodovia com mais acidentes graves",
        "campanhas de empresas, escolas e entidades que estimulam a escolha de um motorista que não bebe",
        "decisão de cada condutor de não dirigir depois de beber, mesmo em percursos bem curtos",
        "autuação do infrator e recolhimento do documento de habilitação na própria fiscalização",
      ],
      correta: 2,
      explicacao:
        "Ações da sociedade são as que partem de empresas, escolas, famílias e entidades, sem poder de polícia. Campanhas pelo motorista que não bebe são o exemplo típico.",
      explicacaoErradas:
        "“Operações com etilômetro” são medida da PRF, aspecto (1), assim como o “aumento das rondas da PRF” e o “recolhimento do documento de habilitação” na fiscalização. Já a “decisão de cada condutor” é atitude individual, aspecto (3).",
      pegadinha: "Pôr a fiscalização da PRF no aspecto da sociedade só porque ela beneficia todos.",
      conhecimento: "Estado fiscaliza e educa; a sociedade mobiliza; o indivíduo decide.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Fechamento sem assunto novo",
      dificuldade: 5,
      raciocinio: "Conclusão retoma ou avança; não abre argumento novo.",
      enunciado:
        "Depois de discutir fiscalização, campanhas e atitudes individuais contra o álcool ao volante, o candidato encerra o texto com um argumento novo: a má conservação das rodovias como principal causa dos acidentes. Sobre esse fechamento, é correto afirmar que o candidato:",
      alternativas: [
        "acertou, porque a conclusão por expansão autoriza trazer qualquer ideia nova, ainda que não discutida",
        "errou, porque o fechamento deve retomar ou avançar a partir do que foi discutido, sem assunto novo",
        "acertou, porque terminar com um argumento inédito mostra repertório e garante pontos extras",
        "errou só na forma, porque a ideia nova seria aceita se viesse em forma de pergunta ao leitor",
        "acertou, porque a conclusão é a única parte do texto em que o corretor não avalia a coerência",
      ],
      correta: 1,
      explicacao:
        "O fechamento retoma a tese ou avança (proposta, perspectiva) com base no que foi desenvolvido. Um argumento novo fica sem desenvolvimento e quebra a coerência; aqui, ainda por cima, contradiz a tese sobre o álcool ao volante.",
      explicacaoErradas:
        "Avançar não é abrir assunto: a expansão não “autoriza trazer qualquer ideia nova”. Argumento solto no fim não “garante pontos extras”. Uma pergunta também seria assunto novo, por isso “em forma de pergunta ao leitor” não resolve. E a coerência é avaliada no texto todo, ao contrário de “não avalia a coerência”.",
      pegadinha: "Achar que a conclusão por expansão libera qualquer conteúdo novo.",
      conhecimento: "Conclusão: retomar ou avançar, nunca abrir.",
    },
  ],
};
