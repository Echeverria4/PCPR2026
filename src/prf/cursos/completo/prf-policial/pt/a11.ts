import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-11",
  resumo: {
    ideia:
      "Regência é a preposição que um verbo ou um nome pede. A crase depende dela: só existe se a palavra de antes pede “a” e a de depois aceita o artigo “a”.",
    itens: [
      {
        termo: "Tipos de verbo",
        faz: "Transitivo direto pede complemento sem preposição. Transitivo indireto pede com preposição. Intransitivo não pede complemento.",
      },
      {
        termo: "Regências diferentes",
        faz: "Verbos de regência diferente não dividem o mesmo complemento: entrei em casa e dela saí.",
      },
      {
        termo: "Pronomes oblíquos",
        faz: "“Lhe” é objeto indireto. “O” e “a” são objeto direto.",
        pista: "“Assistir” (ver), “aspirar” (desejar) e “visar” (ter como objetivo) não aceitam “lhe”: assistir a ele.",
      },
      {
        termo: "Pronome relativo",
        faz: "A preposição que o verbo pede vai antes do relativo: o cargo a que aspira, os ideais por que luta.",
        pista: "Troque o relativo pelo termo retomado: aspira ao cargo.",
      },
      {
        termo: "Verbos com dois sentidos",
        faz: "Assistir: ajudar (sem preposição) ou ver (com “a”). Aspirar: inalar (sem) ou desejar (com “a”). Visar: mirar ou rubricar (sem) ou ter como objetivo (com “a”).",
      },
      {
        termo: "Informar, avisar, notificar",
        faz: "Pedem um objeto direto e um indireto: informei o motorista da multa, ou informei a multa ao motorista.",
        pista: "Dois objetos sem preposição é erro.",
      },
      {
        termo: "Preferir",
        faz: "Prefere-se uma coisa a outra, sem “mais” e sem “do que”.",
      },
      {
        termo: "Chegar, ir, voltar",
        faz: "O destino vem com “a”: chegou a Brasília. A regra é a mesma na relativa: o local a que chegou.",
      },
      {
        termo: "Regência nominal",
        faz: "Nomes também pedem preposição: apto a, compatível com, passível de, alheio a.",
      },
      {
        termo: "Crase",
        faz: "Preposição “a” + artigo “a”, ou + “aquele”, “aquela”, “a qual”. Teste: troque por masculino e veja se aparece “ao”.",
      },
      {
        termo: "Lugares",
        faz: "Quem volta “da” vai “à”: à Bahia. Quem volta “de” vai “a”: a Brasília. Lugar com especificação aceita artigo.",
      },
      {
        termo: "Crase proibida",
        faz: "Antes de masculino, verbo, pronome pessoal, “uma”, palavra repetida e depois de outra preposição.",
        pista: "Casa e terra sem especificação não têm crase.",
      },
      {
        termo: "Crase obrigatória",
        faz: "Locuções femininas (à noite, à medida que), horas exatas (à uma hora) e “à moda de”.",
        pista: "“A distância” só tem crase quando a distância vem especificada.",
      },
      {
        termo: "Crase facultativa",
        faz: "Antes de possessivo feminino no singular, de nome próprio de mulher e depois de “até”.",
      },
    ],
    cuidado:
      "“Uma” não recebe crase, a não ser na hora exata: saiu à uma hora. Sem a ideia de hora, a forma é “a uma unidade”.",
  },
  questoes: [
    {
      topico: "Regência verbal",
      subassunto: "Verbos com mais de um sentido",
      dificuldade: 5,
      raciocinio: "Ler o sentido de cada verbo na frase antes de decidir se ele pede preposição.",
      enunciado: "Assinale a frase correta quanto à regência verbal.",
      alternativas: [
        "O inspetor assistiu o acidente da passarela e chamou logo o socorro.",
        "O socorrista assistiu o motorista ferido até a chegada da ambulância.",
        "A agente aspira o cargo de chefe do posto desde o início do ano.",
        "A agente prefere mais o plantão noturno do que o plantão diurno da equipe.",
        "A equipe obedeceu o sinal do chefe e parou antes da barreira.",
      ],
      correta: 1,
      explicacao:
        "“Assistir” no sentido de ajudar ou prestar socorro é transitivo direto: “assistiu o motorista”.",
      explicacaoErradas:
        "“Assistir” no sentido de ver pede “a”: “assistiu ao acidente”. “Aspirar” no sentido de desejar pede “a”: “aspira ao cargo”. “Preferir” não aceita “mais” nem “do que”: “prefere o plantão noturno ao diurno”. “Obedecer” pede “a”: “obedeceu ao sinal”.",
      pegadinha:
        "Lembrar que “assistir” pede preposição e descartar a frase certa. A preposição só vale para o sentido de ver.",
      conhecimento:
        "O mesmo verbo pode mudar de regência quando muda de sentido. O sentido vem antes da regra.",
    },
    {
      topico: "Regência verbal",
      subassunto: "Regência com pronome relativo",
      dificuldade: 5,
      raciocinio: "Desfazer a oração: colocar o termo retomado depois do verbo e ver qual preposição aparece.",
      enunciado: "Assinale a frase correta quanto ao emprego do pronome relativo.",
      alternativas: [
        "O posto em que a equipe chegou fica na divisa entre os dois estados.",
        "A norma que o relatório se refere foi publicada no mês passado.",
        "O cargo a que a agente aspira exige dois anos de exercício.",
        "O laudo cujo o resultado saiu ontem foi anexado ao processo do caso.",
        "As diretrizes que os agentes devem obedecer estão no novo manual.",
      ],
      correta: 2,
      explicacao:
        "Quem aspira, no sentido de desejar, aspira a algo: “aspira ao cargo”. A preposição passa para antes do relativo: “a que aspira”.",
      explicacaoErradas:
        "“Chegar” pede “a”: “a que a equipe chegou”. “Referir-se” pede “a”: “a que o relatório se refere”. “Cujo” não aceita artigo depois: “cujo resultado”. “Obedecer” pede “a”: “a que os agentes devem obedecer”.",
      pegadinha:
        "Ler o “que” como se não dependesse do verbo seguinte. A preposição é pedida pelo verbo que vem depois do relativo.",
      conhecimento:
        "Para testar, troque o relativo pelo termo retomado: “a equipe chegou ao posto” mostra que a preposição é “a”.",
    },
    {
      topico: "Regência verbal",
      subassunto: "Pronomes oblíquos como complemento",
      dificuldade: 4,
      raciocinio: "Descobrir a regência do verbo e checar se o pronome combina com ela.",
      enunciado:
        "Assinale a frase em que o pronome oblíquo foi empregado de acordo com a regência do verbo.",
      alternativas: [
        "O motorista recebeu a ordem de parada e, sem reclamar, obedeceu-a.",
        "Compramos o vídeo da colisão, mas não tivemos tempo de assistir-lhe.",
        "O chefe conhece o novo agente, mas ainda não lhe viu no posto.",
        "O supervisor chamou o condutor e entregou-lhe a notificação.",
        "A agente quer o cargo de chefe e diz que lhe aspira há muito tempo.",
      ],
      correta: 3,
      explicacao:
        "Quem entrega entrega algo a alguém. “Lhe” é o objeto indireto, e “a notificação” é o objeto direto.",
      explicacaoErradas:
        "“Obedecer” pede “a”, e “a” como pronome é objeto direto: “obedeceu a ela”. “Assistir”, no sentido de ver, não aceita “lhe”: “assistir a ele”. “Ver” pede objeto direto: “não o viu”. “Aspirar”, no sentido de desejar, não aceita “lhe”: “aspira a ele”.",
      pegadinha:
        "Pensar que todo verbo com preposição “a” aceita “lhe”. “Assistir” e “aspirar” pedem a forma “a ele”.",
      conhecimento:
        "“Lhe” substitui complemento de pessoa com preposição. Exceções comuns: assistir, aspirar e visar.",
    },
    {
      topico: "Regência verbal",
      subassunto: "Verbos com objeto direto e indireto",
      dificuldade: 4,
      raciocinio: "Contar os objetos: é preciso um sem preposição e um com preposição.",
      enunciado: "Assinale a frase em desacordo com a norma-padrão quanto à regência.",
      alternativas: [
        "O agente informou o condutor a apreensão do veículo na rodovia.",
        "O agente informou ao condutor a apreensão do veículo na rodovia.",
        "O agente informou o condutor da apreensão do veículo na rodovia.",
        "O agente avisou os condutores de que a pista estava interditada.",
        "O agente avisou aos condutores que a pista lateral estava interditada.",
      ],
      correta: 0,
      explicacao:
        "A frase tem dois objetos sem preposição, “o condutor” e “a apreensão”. O verbo pede um direto e um indireto.",
      explicacaoErradas:
        "As outras têm um objeto de cada tipo: “ao condutor” e “a apreensão”; “o condutor” e “da apreensão”; “os condutores” e “de que a pista estava interditada”; “aos condutores” e “que a pista lateral estava interditada”.",
      pegadinha:
        "Procurar a preposição “certa” para pessoa ou para coisa. Tanto faz: a pessoa ou a coisa pode ser o objeto direto.",
      conhecimento:
        "Informar, avisar, notificar, prevenir e cientificar pedem um objeto direto e um indireto, em qualquer ordem.",
    },
    {
      topico: "Regência nominal",
      subassunto: "Preposição pedida por adjetivos e substantivos",
      dificuldade: 4,
      raciocinio: "Testar cada nome com a preposição que ele pede na norma-padrão.",
      enunciado: "Assinale a frase correta quanto à regência nominal.",
      alternativas: [
        "O condutor estava apto em dirigir veículos de carga perigosa.",
        "O laudo era compatível aos dados colhidos no local do acidente.",
        "O agente tinha aversão com o trabalho em horário noturno.",
        "O motorista seguia alheio com a sinalização de obras da rodovia.",
        "A conduta do motorista é passível de multa e de apreensão.",
      ],
      correta: 4,
      explicacao: "“Passível” pede a preposição “de”: passível de multa.",
      explicacaoErradas:
        "As formas da norma-padrão são “apto a dirigir”, “compatível com os dados”, “aversão ao trabalho” e “alheio à sinalização”.",
      pegadinha:
        "Confiar no ouvido. Na fala, as preposições desses nomes costumam mudar sem que se perceba.",
      conhecimento:
        "Palavras da mesma família tendem a pedir a mesma preposição: obediente a e obediência a.",
    },
    {
      topico: "Crase",
      subassunto: "Casos proibidos e hora exata",
      dificuldade: 5,
      raciocinio: "Conferir o que vem depois do “a”: pronome, verbo, masculino, palavra repetida ou hora.",
      enunciado: "Assinale a frase em que o sinal indicativo de crase está correto.",
      alternativas: [
        "O agente entregou o auto de infração à ela no balcão do posto.",
        "Os veículos pesados seguem à partir do quilômetro vinte da rodovia.",
        "O motorista pagou a multa à vista e saiu à pé da sede do posto.",
        "A equipe chegou à uma hora da tarde ao posto da fronteira.",
        "Os agentes ficaram frente à frente com o motorista na barreira.",
      ],
      correta: 3,
      explicacao:
        "Antes de “uma” não há crase, a não ser na indicação de hora exata. É o caso de “à uma hora da tarde”.",
      explicacaoErradas:
        "Não há crase antes de pronome pessoal (“a ela”), de verbo (“a partir”), de palavra masculina (“a pé”) nem entre palavras repetidas (“frente a frente”).",
      pegadinha:
        "Descartar a frase por lembrar a regra de “uma”. O “à vista” da outra frase está certo, mas o “à pé” derruba aquela opção.",
      conhecimento:
        "“Uma” como artigo impede a crase. Como numeral de hora, faz parte de locução feminina e leva crase.",
    },
    {
      topico: "Crase",
      subassunto: "Crase depende de especificação",
      dificuldade: 5,
      raciocinio: "Ver se a palavra depois do “a” vem especificada, porque a especificação traz o artigo.",
      enunciado: "Assinale a frase em que o “a” entre aspas deve receber obrigatoriamente o acento grave.",
      alternativas: [
        "O agente voltou “a” casa assim que terminou o plantão noturno.",
        "A viatura parou “a” distância de cem metros da barreira policial.",
        "O motorista foi “a” Brasília, de onde voltou só na manhã de ontem.",
        "A equipe entregou o relatório “a” sua chefe no início da tarde.",
        "A escolta acompanhou a carga até “a” sede regional da empresa.",
      ],
      correta: 1,
      explicacao:
        "“Distância” sem especificação não leva crase. Aqui ela vem especificada, “de cem metros”, e o acento é obrigatório.",
      explicacaoErradas:
        "“casa” sem especificação não tem artigo. Quem volta “de” Brasília vai “a” Brasília, sem crase. Antes de possessivo feminino e depois de “até”, a crase é facultativa.",
      pegadinha:
        "Marcar “a sua chefe” ou “até a sede”. O acento é aceito nessas frases, mas não é obrigatório, e o enunciado pede obrigação.",
      conhecimento:
        "“Casa”, “terra” e “distância” só levam crase quando vêm especificadas: à casa do chefe, à distância de cem metros.",
    },
    {
      topico: "Crase",
      subassunto: "Crase com plural e com pronomes",
      dificuldade: 5,
      raciocinio: "Em cada lacuna, perguntar se há preposição e se há artigo antes do nome.",
      enunciado:
        "“O relatório fez alusão ___ falhas que o chefe apontou e ___ equipes da fronteira, mas não ___ todas.” Assinale a opção que preenche as lacunas na ordem.",
      alternativas: ["as / às / à", "às / as / às", "a / às / às", "às / a / à", "às / às / a"],
      correta: 4,
      explicacao:
        "“Alusão” pede “a”. Antes de “falhas” e de “equipes”, especificadas e no plural, há artigo “as”: “às”. Antes de “todas”, que é pronome e não aceita artigo aqui, fica só a preposição.",
      explicacaoErradas:
        "“as” sem acento ignora a preposição pedida por “alusão”. “à” e “às” antes de “todas” supõem um artigo que esse pronome não recebe. “a” antes de “equipes da fronteira” deixa o nome sem o artigo que a especificação traz.",
      pegadinha:
        "Repetir a resposta das duas primeiras lacunas na terceira. A preposição continua, mas o artigo some.",
      conhecimento:
        "“A” no singular diante de palavra no plural mostra que só há preposição. Se há crase no plural, a forma é “às”.",
    },
  ],
};
