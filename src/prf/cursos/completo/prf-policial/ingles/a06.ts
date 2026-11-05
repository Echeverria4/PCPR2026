import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "ingles-06",
  resumo: {
    ideia:
      "Aqui entram os tempos compostos, que ligam dois momentos, a voz passiva, que tira o foco de quem age, e as formas de ordem e de exigência.",
    itens: [
      {
        termo: "Present Continuous",
        faz: "Am, is, are + verbo com -ing. Ação em andamento ou futuro já combinado.",
      },
      {
        termo: "Past Continuous",
        faz: "Was, were + -ing. Ação em andamento em um momento do passado.",
      },
      {
        termo: "Present Perfect",
        faz: "Have, has + particípio. Passado sem data ou que chega até hoje.",
        pista: "Gone: foi e não voltou. Been: já esteve lá e voltou.",
      },
      {
        termo: "Past Perfect",
        faz: "Had + particípio. O que aconteceu antes de outro fato passado.",
      },
      {
        termo: "Voz passiva",
        faz: "To be no tempo certo + particípio. Destaca quem sofre a ação, e o agente vem com by.",
      },
      {
        termo: "Imperativo",
        faz: "Verbo na forma base, sem sujeito. Serve para ordens e instruções.",
      },
      {
        termo: "Subjuntivo",
        faz: "Aparece em frases como “It is essential that...”, com o verbo na forma base.",
      },
    ],
    cuidado: "Na passiva, o tempo fica no verbo to be. O particípio não muda.",
  },
  questoes: [
    {
      topico: "Present Perfect",
      subassunto: "Gone e been",
      dificuldade: 5,
      raciocinio: "Quem está em Brasília agora?",
      enunciado: "Compare “Ana has gone to Brasília.” e “Bia has been to Brasília.” Conclui-se que",
      alternativas: [
        "Ana já esteve lá e voltou, e Bia foi e ainda não voltou",
        "as duas continuam em Brasília desde o ano passado",
        "Ana foi e ainda não voltou, e Bia já esteve lá e voltou",
        "as duas vão viajar a Brasília na próxima semana, de avião",
        "Ana mora em Brasília, e Bia só nasceu lá, sem nunca voltar",
      ],
      correta: 2,
      explicacao: "Has gone mostra que a pessoa foi e segue fora. Has been mostra que ela esteve lá e já voltou.",
      explicacaoErradas:
        "“Ana já esteve lá” inverte os casos. “continuam em Brasília” iguala as formas. “vão viajar” trata a frase como futuro. “mora” e “nasceu” não estão nas frases.",
      pegadinha: "Tratar gone e been como iguais.",
      conhecimento: "O Present Perfect não tem equivalente exato em português.",
    },
    {
      topico: "Past Perfect",
      subassunto: "Ordem dos fatos",
      dificuldade: 4,
      raciocinio: "Had + particípio aponta o fato mais antigo.",
      enunciado: "Da frase “When the team arrived, the truck had already left.” é correto concluir que",
      alternativas: [
        "a equipe chegou antes de o caminhão sair do local",
        "o caminhão saiu no mesmo instante em que a equipe chegou",
        "a equipe e o caminhão chegaram juntos ao local indicado",
        "o caminhão ainda vai sair depois de a equipe chegar",
        "o caminhão saiu antes de a equipe chegar ao local",
      ],
      correta: 4,
      explicacao: "O Past Perfect marca o fato anterior a outro fato passado. Primeiro o caminhão saiu, e depois a equipe chegou.",
      explicacaoErradas:
        "“chegou antes” inverte a ordem. “no mesmo instante” pediria left, sem had. “chegaram juntos” e “ainda vai sair” não têm base na frase.",
      pegadinha: "Ler os verbos na ordem em que aparecem.",
      conhecimento: "Already reforça que a ação terminou antes do outro fato.",
    },
    {
      topico: "Voz passiva",
      subassunto: "Transformação",
      dificuldade: 5,
      raciocinio: "O tempo da ativa passa para o verbo to be.",
      enunciado: "A voz passiva de “The officers have seized the cargo.” é",
      alternativas: [
        "The cargo has been seized by the officers.",
        "The cargo was seizing by the officers.",
        "The cargo has seized by the officers.",
        "The cargo is being seized by the officers now.",
        "The cargo had been seized by the officers yesterday.",
      ],
      correta: 0,
      explicacao: "Have seized é Present Perfect. Na passiva, vira has been + particípio. Has concorda com cargo, no singular.",
      explicacaoErradas:
        "“was seizing” é voz ativa contínua. “has seized” esquece o been. “is being seized” muda para o contínuo. “had been seized” muda para o Past Perfect.",
      pegadinha: "Trocar o tempo ao passar para a passiva.",
      conhecimento: "Seize é apreender. Seizure é apreensão.",
    },
    {
      topico: "Voz passiva",
      subassunto: "Leitura",
      dificuldade: 4,
      raciocinio: "Is being é agora, e will be é depois.",
      enunciado: "Uma nota diz “The road is being repaired, and a new radar will be installed next month.” Segundo a nota,",
      alternativas: [
        "a estrada já foi reparada, e o radar foi instalado no mês passado",
        "a estrada será reparada, e o radar está sendo instalado agora",
        "a estrada repara o radar, que vai instalar novas placas na via",
        "a estrada está em reparo, e o radar será instalado no mês seguinte",
        "a estrada precisa de reparo, mas o radar não será mais instalado",
      ],
      correta: 3,
      explicacao: "Is being repaired é passiva contínua: o reparo está em andamento. Will be installed é passiva no futuro.",
      explicacaoErradas:
        "“já foi reparada” e “foi instalado” mudam os tempos. “será reparada” troca os dois fatos. “repara o radar” inverte os papéis. “não será” nega o que a nota afirma.",
      pegadinha: "Ler is being como passado.",
      conhecimento: "O agente pode ser omitido quando não importa quem fez.",
    },
    {
      topico: "Tempos contínuos",
      subassunto: "Futuro combinado",
      dificuldade: 5,
      raciocinio: "Tomorrow muda o sentido do -ing.",
      enunciado: "Em “We are meeting the inspector tomorrow at nine.”, o Present Continuous indica",
      alternativas: [
        "ação em andamento no exato momento da fala do agente",
        "hábito repetido toda manhã às nove, sem exceção alguma",
        "ação concluída no passado, sem ligação com o presente",
        "ação futura já combinada, com dia e hora marcados",
        "ordem dada ao inspetor para que compareça amanhã ao posto",
      ],
      correta: 3,
      explicacao: "Com marca de futuro, o Present Continuous mostra compromisso já acertado.",
      explicacaoErradas:
        "“em andamento” não combina com tomorrow. “hábito” pediria o presente simples. “ação concluída” pediria o passado. “ordem” pediria o imperativo.",
      pegadinha: "Ler todo -ing como “agora”.",
      conhecimento: "Now, at present e at the moment marcam o uso de ação em andamento.",
    },
    {
      topico: "Imperativo e subjuntivo",
      subassunto: "Subjuntivo",
      dificuldade: 5,
      raciocinio: "Depois de “It is essential that”, o verbo fica na forma base.",
      enunciado: "Para manter o subjuntivo em “It is essential that the driver ___ present at the inspection.”, a lacuna recebe",
      alternativas: ["was", "be", "being", "has been", "will being"],
      correta: 1,
      explicacao: "O subjuntivo em inglês usa a forma base, sem flexão, em frases do tipo It + be + adjetivo + that.",
      explicacaoErradas:
        "“was” e “has been” flexionam o verbo. “being” é gerúndio. “will being” não é uma forma possível.",
      pegadinha: "Colocar a forma comum do presente.",
      conhecimento: "Essential, important e necessary abrem essas frases com frequência.",
    },
  ],
};
