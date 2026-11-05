import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-17",
  resumo: {
    ideia:
      "Treino de leitura: ler com calma, achar a palavra retomada e cuidar das que parecem com o português. A resposta precisa valer para o texto.",
    itens: [
      {
        termo: "Pronto e listo",
        faz: "Pronto é logo, em breve. O nosso “pronto” é listo. Ser listo é ser esperto.",
      },
      {
        termo: "Estos e aquellos",
        faz: "Estos retoma o termo mais próximo. Aquellos, o mais distante.",
      },
      {
        termo: "No solo… sino",
        faz: "Soma ideias: não só isso, mas também aquilo.",
      },
      {
        termo: "Hace",
        faz: "Com tempo, indica o passado: hace dos años é há dois anos.",
      },
      {
        termo: "Equipos",
        faz: "Pode ser equipamento ou equipe. O contexto decide.",
      },
      {
        termo: "Ideia central",
        faz: "Cabe no texto inteiro, e não em um detalhe.",
      },
      {
        termo: "Proporção",
        faz: "Tres de cada diez é 30%. Confira de que grupo a pergunta fala.",
      },
    ],
    cuidado: "Um detalhe verdadeiro não é a ideia central. A resposta precisa cobrir o texto todo.",
  },
  questoes: [
    {
      topico: "Referência",
      subassunto: "Estos",
      dificuldade: 4,
      raciocinio: "Estos aponta para perto.",
      enunciado:
        "Texto: “Los agentes hablaron con los vecinos sobre las nuevas reglas, y estos agradecieron la visita.” A palavra “estos” retoma",
      alternativas: [
        "os vizinhos, termo mais próximo",
        "os agentes, que fizeram a visita",
        "as novas regras, tema da conversa",
        "os agentes e os vizinhos, juntos",
        "quem não recebeu a visita dos agentes",
      ],
      correta: 0,
      explicacao: "Estos retoma o masculino plural mais próximo, los vecinos, que recebem a visita e agradecem.",
      explicacaoErradas:
        "“os agentes” é o termo mais distante, que pediria aquellos. “as novas regras” é feminino. “juntos” soma dois termos. “quem não recebeu” contraria o agradecimento.",
      pegadinha: "Ligar estos ao sujeito da frase.",
      conhecimento: "Vecino é vizinho.",
    },
    {
      topico: "Tradução",
      subassunto: "Listo, pronto e todavía",
      dificuldade: 5,
      raciocinio: "Duas palavras enganam.",
      enunciado: "A tradução correta de “El informe estará listo pronto, pero la obra todavía no empezó.” é",
      alternativas: [
        "O informe estará esperto, mas a obra, no entanto, não começou.",
        "O relatório estará limpo logo, mas a obra, todavia, não começou.",
        "O relatório estará pronto em lista, mas a obra, no entanto, não começou.",
        "O relatório estará pronto logo, mas a obra ainda não começou.",
        "O relatório ficou pronto, e a obra ainda não começou.",
      ],
      correta: 3,
      explicacao: "Estar listo é estar pronto, pronto é logo, e todavía é ainda.",
      explicacaoErradas:
        "“esperto” é o sentido de ser listo. “limpo” é limpio. “em lista” lê listo pela forma. “no entanto” e “todavia” erram todavía. “ficou pronto” muda o futuro para passado.",
      pegadinha: "Ler pronto e todavía como no português.",
      conhecimento: "Informe é relatório.",
    },
    {
      topico: "Conectores",
      subassunto: "No solo… sino",
      dificuldade: 4,
      raciocinio: "A estrutura soma, e não opõe.",
      enunciado: "Texto: “No solo aumentó el tráfico, sino que también subieron los accidentes.” Entende-se que",
      alternativas: [
        "o tráfego subiu, mas os acidentes caíram no mesmo período",
        "o tráfego e os acidentes aumentaram",
        "o tráfego ficou igual, e só os acidentes aumentaram",
        "o tráfego caiu sozinho, sem nenhuma relação com os acidentes",
        "os acidentes subiram porque o tráfego de veículos aumentou",
      ],
      correta: 1,
      explicacao: "No solo… sino que también soma dois fatos: mais tráfego e mais acidentes.",
      explicacaoErradas:
        "“caíram” contraria subieron. “ficou igual” e “caiu” contrariam aumentó. “porque” cria uma causa que o texto não afirma.",
      pegadinha: "Ler uma causa onde só há soma.",
      conhecimento: "Tráfico, em espanhol, também é o movimento de veículos.",
    },
    {
      topico: "Ideia central",
      subassunto: "Texto todo",
      dificuldade: 5,
      raciocinio: "Qual frase resume as outras?",
      enunciado:
        "Texto: “Las campañas de educación vial funcionan mejor cuando empiezan en la escuela. Los niños aprenden las reglas temprano y, además, las llevan a casa. Por eso, varios países ya las incluyen en el currículo.” A ideia central é que",
      alternativas: [
        "as crianças ensinam os pais a dirigir depois das aulas na escola",
        "as campanhas de trânsito só funcionam dentro das salas de aula",
        "vários países já aboliram o ensino de trânsito no currículo",
        "os adultos aprendem as regras de trânsito cedo, na própria casa",
        "a educação para o trânsito rende mais quando começa na escola",
      ],
      correta: 4,
      explicacao: "A primeira frase traz a ideia, e as outras dão o motivo e a consequência.",
      explicacaoErradas:
        "“ensinam os pais a dirigir” exagera las llevan a casa. “só funcionam” troca mejor por só. “aboliram” contraria incluyen. “os adultos” muda de quem se fala.",
      pegadinha: "Trocar funcionan mejor por só funcionam.",
      conhecimento: "Temprano é cedo.",
    },
    {
      topico: "Tradução",
      subassunto: "Hace e equipos",
      dificuldade: 5,
      raciocinio: "O fato segue valendo até hoje.",
      enunciado: "A tradução correta de “Hace dos años que el puesto no recibe equipos nuevos.” é",
      alternativas: [
        "Faz dois anos que o posto recebeu equipes novas de agentes.",
        "O posto fará dois anos sem receber equipamentos novos.",
        "Daqui a dois anos o posto receberá equipamentos novos.",
        "Há dois anos o posto não recebe equipamentos novos.",
        "O posto não recebia equipamentos novos havia dois anos completos.",
      ],
      correta: 3,
      explicacao: "Hace dos años que marca o tempo até agora, e o verbo fica no presente: no recibe.",
      explicacaoErradas:
        "“recebeu” perde a negação. “fará” e “Daqui a dois anos” jogam para o futuro. “não recebia” joga tudo para o passado.",
      pegadinha: "Ler hace como futuro.",
      conhecimento: "Hace também indica tempo meteorológico: hace frío.",
    },
    {
      topico: "Leitura",
      subassunto: "Proporção",
      dificuldade: 5,
      raciocinio: "A pergunta é sobre quem usa o cinto.",
      enunciado:
        "Texto: “Tres de cada diez pasajeros no usan el cinturón en el asiento trasero.” Aplicada a 200 passageiros, a proporção indica que usam o cinto no banco de trás",
      alternativas: ["140", "60", "70", "30", "170"],
      correta: 0,
      explicacao: "Três em dez são 30%. Se 60 não usam, 140 usam.",
      explicacaoErradas:
        "“60” é quem não usa. “70” e “30” são porcentagens, e não pessoas. “170” subtrai 30 de 200.",
      pegadinha: "Responder com o grupo citado no texto.",
      conhecimento: "Trasero é o que fica atrás.",
    },
  ],
};
