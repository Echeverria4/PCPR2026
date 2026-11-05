import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "ingles-08",
  resumo: {
    ideia:
      "Esta aula é treino de leitura com provas e textos traduzidos. O foco é julgar o que o texto diz, sem acrescentar nem tirar nada.",
    itens: [
      {
        termo: "Fique no texto",
        faz: "A resposta vem do que está escrito, e não do que você já sabe sobre o tema.",
      },
      {
        termo: "Palavras absolutas",
        faz: "Only, always, never, all e alone mudam tudo. Compare com o que o texto afirma.",
      },
      {
        termo: "Sentido no contexto",
        faz: "Prova cobra a palavra na frase. Sound, por exemplo, pode ser “confiável”.",
      },
      {
        termo: "Referência",
        faz: "They, them, this e which retomam algo. Volte e ache a que se ligam.",
      },
      {
        termo: "Quem fez o quê",
        faz: "Na voz passiva, o agente pode não aparecer. Não invente o autor da ação.",
      },
      {
        termo: "Conectivos",
        faz: "But, although e however mostram onde está a virada do argumento.",
      },
    ],
    cuidado: "Texto que diz “pode” (may) não afirma certeza. Uma opção com “sempre” ou “com certeza” foi além dele.",
  },
  questoes: [
    {
      topico: "Interpretação",
      subassunto: "Ideia principal",
      dificuldade: 5,
      raciocinio: "Alone limita a ideia de lei dura.",
      enunciado:
        "Texto: “Stricter laws alone do not make roads safer. Studies show that drivers change their behavior only when they believe they may actually be caught. For this reason, visible patrols matter as much as the size of the fine.” Segundo o texto,",
      alternativas: [
        "multas altas bastam para mudar a conduta de todo motorista",
        "a chance real de ser flagrado pesa na conduta dos motoristas",
        "as patrulhas visíveis valem menos do que o valor da multa aplicada",
        "os motoristas só mudam quando a multa dobra de valor na rodovia",
        "leis mais duras pioram a segurança das estradas, segundo estudos",
      ],
      correta: 1,
      explicacao: "O texto diz que os motoristas mudam quando acreditam que podem ser pegos, e por isso a patrulha visível importa.",
      explicacaoErradas:
        "“bastam” contraria alone. “valem menos” contraria as much as. “a multa dobra” não está no texto. “pioram” exagera, pois o texto diz que a lei sozinha não resolve.",
      pegadinha: "Ler alone como se as leis não servissem para nada.",
      conhecimento: "As much as compara igualdade: tanto quanto.",
    },
    {
      topico: "Vocabulário em contexto",
      subassunto: "Palavra com vários sentidos",
      dificuldade: 5,
      raciocinio: "O juiz aceitou por qual motivo?",
      enunciado: "Em “The officer's account of the crash was sound, so the judge accepted it.”, a palavra “sound” significa",
      alternativas: ["barulhento", "gravado", "confiável", "muito curto", "em segredo"],
      correta: 2,
      explicacao: "Como adjetivo, sound é sólido, confiável. Por isso o juiz aceitou o relato. Account, aqui, é relato, e não conta.",
      explicacaoErradas:
        "“barulhento” e “gravado” partem do substantivo sound, som. “muito curto” e “em segredo” não explicam a aceitação.",
      pegadinha: "Ficar só com o sentido de “som”.",
      conhecimento: "Sound também aparece em safe and sound, são e salvo.",
    },
    {
      topico: "Referência",
      subassunto: "Pronomes no texto",
      dificuldade: 5,
      raciocinio: "Teste a substituição na frase.",
      enunciado:
        "Texto: “Public officials who accept gifts may feel they owe something to the giver. This is why many countries limit them, even when their value is small.” Os termos “they” e “them” retomam, nessa ordem,",
      alternativas: [
        "presentes e países",
        "doadores e presentes",
        "agentes públicos e doadores",
        "os países e os agentes públicos",
        "agentes públicos e presentes",
      ],
      correta: 4,
      explicacao: "Quem pode sentir que deve algo são os agentes públicos. O que os países limitam são os presentes.",
      explicacaoErradas:
        "“presentes e países” erra os dois. “doadores” não cabe em they, nem em them. “os países e os agentes públicos” inverte a lógica: a limitação recai sobre os presentes.",
      pegadinha: "Ligar them ao sujeito mais próximo.",
      conhecimento: "Their value retoma gifts: o valor dos presentes.",
    },
    {
      topico: "Interpretação",
      subassunto: "Limite da conclusão",
      dificuldade: 5,
      raciocinio: "May deixa a porta aberta.",
      enunciado:
        "Texto: “Deaths on the highway fell by 20% last year. The fall came after the installation of new speed cameras, but the author warns that lighter traffic during the roadworks may also explain it.” É correto concluir que",
      alternativas: [
        "os radares sozinhos causaram toda a queda das mortes na via",
        "o trânsito ficou mais pesado durante as obras daquela rodovia",
        "a queda pode ter mais de uma causa, segundo o autor",
        "as mortes subiram 20% depois da chegada dos novos radares",
        "o autor pede a retirada dos radares, por não darem resultado",
      ],
      correta: 2,
      explicacao: "O autor registra a queda depois dos radares, mas avisa que o trânsito menor também pode explicá-la.",
      explicacaoErradas:
        "“sozinhos” exclui a outra causa. “mais pesado” inverte lighter. “subiram” inverte fell. “pede a retirada” não está no texto.",
      pegadinha: "Tratar o que veio depois como efeito certo.",
      conhecimento: "Fall, drop e decrease indicam queda. Rise e increase indicam alta.",
    },
    {
      topico: "Interpretação",
      subassunto: "Paráfrase",
      dificuldade: 4,
      raciocinio: "Procure a opção que diz o mesmo com outras palavras.",
      enunciado:
        "Texto: “Transparency is not a favor that governments do for citizens. It is a duty, and budgets should be published in a language that ordinary people can understand.” A ideia do texto é que",
      alternativas: [
        "o governo faz um favor ao cidadão quando abre as contas públicas",
        "o orçamento só deve ser lido por técnicos com formação na área",
        "a publicação das contas depende da vontade de cada governante",
        "transparência é dever, e o orçamento deve ser claro para todos",
        "o orçamento deve sair em outra língua, para o público de fora",
      ],
      correta: 3,
      explicacao: "O texto nega que seja favor, afirma que é dever e pede orçamento em linguagem que qualquer pessoa entenda.",
      explicacaoErradas:
        "“faz um favor” e “vontade de cada governante” contrariam o dever. “só deve ser lido por técnicos” contraria ordinary people. “outra língua” lê language ao pé da letra.",
      pegadinha: "Ler language como idioma estrangeiro.",
      conhecimento: "Should indica o que é recomendado, sem força de ordem.",
    },
    {
      topico: "Interpretação",
      subassunto: "Quem fez o quê",
      dificuldade: 5,
      raciocinio: "“Had been diverted” não diz quem desviou.",
      enunciado:
        "Texto: “Although the budget for road maintenance grew, the condition of the pavement got worse. Auditors found that funds had been diverted to other projects.” Segundo o texto,",
      alternativas: [
        "a verba caiu, e essa queda fez o piso da rodovia piorar",
        "o piso melhorou porque a verba para a manutenção cresceu",
        "os auditores desviaram recursos para outros projetos",
        "a verba cresceu, mas parte foi usada em outros projetos",
        "os auditores aprovaram os gastos com a conservação da via",
      ],
      correta: 3,
      explicacao: "Although mostra a oposição: a verba cresceu, mas o piso piorou. Os auditores apenas descobriram o desvio.",
      explicacaoErradas:
        "“a verba caiu” contraria grew. “o piso melhorou” contraria got worse. “os auditores desviaram” troca quem descobriu por quem fez. “aprovaram os gastos” não está no texto.",
      pegadinha: "Tomar o sujeito de found como autor do desvio.",
      conhecimento: "Divert é desviar, e o sinal “diversion” marca desvio de trânsito no Reino Unido.",
    },
  ],
};
