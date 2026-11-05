import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-02",
  resumo: {
    ideia:
      "Classe de palavra é o papel que a palavra faz na frase. A mesma palavra muda de classe conforme a função: olhe para o que ela faz ali, não para o que ela costuma ser.",
    itens: [
      {
        termo: "Variáveis × invariáveis",
        faz: "Mudam de forma: substantivo, adjetivo, artigo, numeral, pronome e verbo. Não mudam: advérbio, preposição, conjunção e interjeição.",
      },
      {
        termo: "Substantivo",
        faz: "Dá nome aos seres e é o núcleo dos termos da frase. Artigo, numeral, adjetivo e pronome giram em volta dele e concordam com ele.",
        pista: "Qualquer palavra com artigo na frente vira substantivo: “o azul do céu”, “o porquê da multa”.",
      },
      {
        termo: "Plural de compostos",
        faz: "Quem varia, varia: substantivo, adjetivo, numeral e pronome vão ao plural (couves-flores, quartas-feiras). Verbo e advérbio ficam (beija-flores, alto-falantes).",
        pista: "Com preposição no meio, só o primeiro varia: pés de moleque. “Guarda” verbo não varia (guarda-roupas); “guarda” pessoa varia (guardas-noturnos).",
      },
      {
        termo: "Adjetivo composto",
        faz: "Só o último elemento varia: faixas verde-claras, acordos luso-brasileiros.",
        pista: "Com substantivo na composição, nada varia: lonas amarelo-ouro. Azul-marinho e azul-celeste nunca variam.",
      },
      {
        termo: "Adjetivo de relação × de opinião",
        faz: "De relação classifica e é objetivo: nota mensal, movimento estudantil. Não aceita “muito” nem vem antes do substantivo. De opinião julga: condições dignas.",
      },
      {
        termo: "Ordem do substantivo e do adjetivo",
        faz: "A troca pode mudar só o sentido (pobre homem × homem pobre; alto funcionário × funcionário alto) ou mudar a classe e o sentido (preso político × político preso).",
        pista: "Em dúvida, o primeiro termo costuma ser o substantivo.",
      },
      {
        termo: "Locução adjetiva × complemento nominal",
        faz: "Locução adjetiva troca por adjetivo: laudo da perícia = laudo pericial. Complemento nominal completa nome de ação e recebe essa ação: apreensão da carga.",
        pista: "Se a pessoa ou coisa sofre a ação, é complemento.",
      },
      {
        termo: "Advérbio",
        faz: "Modifica verbo, adjetivo ou outro advérbio e não varia: “meio cansadas”, “bastante atentas”.",
        pista: "Junto de substantivo, “bastante” é pronome e varia: “bastantes viaturas”.",
      },
      {
        termo: "Palavras denotativas",
        faz: "Parecem advérbio, mas não modificam verbo: até e inclusive (inclusão), só e apenas (exclusão), aliás (retificação), eis (designação).",
        pista: "“Até” antes de um lugar ou tempo é preposição: “foi até o posto”.",
      },
    ],
    cuidado:
      "Evite “o mesmo” no lugar de “ele”: “O condutor parou, e o mesmo mostrou os documentos” é falha de estilo cobrada em prova. O uso correto retoma um fato: “o mesmo ocorreu com a equipe”.",
  },
  questoes: [
    {
      topico: "Substantivo",
      subassunto: "Plural dos substantivos compostos",
      dificuldade: 5,
      raciocinio: "Descobrir a classe de cada parte do composto antes de flexionar.",
      enunciado:
        "Um agente revisa o plural dos termos de um inventário do posto. Assinale a sequência em que todos os plurais estão de acordo com a norma-padrão.",
      alternativas: [
        "guarda-florestais, guarda-sóis, mulas sem cabeça, beija-flores, quartas-feiras",
        "guardas-noturnos, guardas-roupas, pés de moleque, ave-marias, mal-estares",
        "guardas-noturnos, guarda-roupas, mãos de obra, beija-flores, mal-estares",
        "guardas-noturnos, guarda-roupas, pores do sol, altos-falantes, couves-flores",
        "guardas-civis, guarda-chuvas, pés de moleques, alto-falantes, arcos-íris",
      ],
      correta: 2,
      explicacao:
        "Em “guardas-noturnos”, “guarda” é pessoa: substantivo e adjetivo variam. Em “guarda-roupas”, “guarda” é verbo. “mãos de obra” tem preposição, então só o primeiro varia. “beija” é verbo, e “estar”, em “mal-estares”, está substantivado.",
      explicacaoErradas:
        "“guarda-florestais” pede “guardas-florestais”, pois guarda é a pessoa. “guardas-roupas” flexiona o verbo. “altos-falantes” flexiona o advérbio “alto”. “pés de moleques” flexiona o segundo termo de um composto com preposição.",
      pegadinha:
        "“guarda” muda de classe: verbo em “guarda-roupa”, substantivo em “guarda-noturno”. A pergunta é sempre: é a pessoa ou é a ação?",
      conhecimento:
        "Regra geral: quem varia, varia. Substantivo, adjetivo, numeral e pronome vão ao plural; verbo e advérbio ficam. Com preposição, só o primeiro termo varia.",
    },
    {
      topico: "Adjetivo",
      subassunto: "Flexão dos adjetivos compostos",
      dificuldade: 4,
      raciocinio: "Ver se o composto tem substantivo e se é um dos invariáveis.",
      enunciado: "Assinale a frase em que todos os adjetivos compostos estão flexionados de acordo com a norma-padrão.",
      alternativas: [
        "Os coletes azuis-marinhos, as faixas verde-claras e as lonas amarelo-ouro seguem no depósito.",
        "Os coletes azul-marinho, as faixas verdes-claras e as lonas amarelo-ouro seguem no depósito.",
        "Os coletes azul-marinho, as faixas verde-claras e as lonas amarelas-ouro seguem no depósito.",
        "Os coletes azul-marinho, as faixas verde-claras e as lonas amarelo-ouro seguem no depósito.",
        "Os coletes azul-marinhos, as faixas verde-claras e as lonas amarelo-ouros seguem no depósito.",
      ],
      correta: 3,
      explicacao:
        "“azul-marinho” é invariável. “verde-claras” une dois adjetivos, e só o último varia. “amarelo-ouro” tem o substantivo “ouro” e, por isso, nenhum dos elementos varia.",
      explicacaoErradas:
        "“azuis-marinhos” e “azul-marinhos” flexionam um composto que nunca varia. “verdes-claras” flexiona também o primeiro elemento. “amarelas-ouro” e “amarelo-ouros” flexionam um composto que tem substantivo.",
      pegadinha:
        "Tratar cor com substantivo como cor com adjetivo. “Ouro” é substantivo e trava o composto inteiro; “claro” é adjetivo e deixa o último elemento variar.",
      conhecimento:
        "Adjetivo + adjetivo: só o último varia. Adjetivo + substantivo: nada varia. Azul-marinho, azul-celeste e furta-cor são sempre invariáveis.",
    },
    {
      topico: "Adjetivo",
      subassunto: "Ordem do substantivo e do adjetivo",
      dificuldade: 5,
      raciocinio: "Em cada par, perguntar quem é o núcleo e quem o qualifica, nas duas ordens.",
      enunciado:
        "A troca de posição entre substantivo e adjetivo pode mudar só o sentido ou mudar também a classe das palavras. Assinale o par em que a inversão troca a classe dos dois termos.",
      alternativas: [
        "“pobre condutor” e “condutor pobre”",
        "“velho amigo” e “amigo velho”",
        "“nova viatura” e “viatura nova”",
        "“simples questão” e “questão simples”",
        "“preso político” e “político preso”",
      ],
      correta: 4,
      explicacao:
        "Em “preso político”, “preso” é o núcleo e “político” o qualifica. Em “político preso”, “político” passa a ser o núcleo e “preso” o qualifica: os dois trocam de classe.",
      explicacaoErradas:
        "Nos demais pares só muda o sentido. “Pobre condutor” é digno de pena, e “condutor pobre” não tem dinheiro. “Velho amigo” é antigo, e “amigo velho” é idoso. “Nova viatura” é outra, e “viatura nova” não foi usada. “Simples questão” é mera, e “questão simples” é fácil. O substantivo continua o mesmo.",
      pegadinha:
        "Achar que toda mudança de sentido vem de troca de classe. Nos pares comuns, “pobre”, “velho” e “nova” seguem como adjetivos nas duas posições.",
      conhecimento:
        "Quando a troca de ordem muda a classe, o sentido muda junto, porque o núcleo passa a ser outro.",
    },
    {
      topico: "Adjetivo",
      subassunto: "Locução adjetiva e complemento nominal",
      dificuldade: 5,
      raciocinio: "Tentar trocar a expressão por adjetivo e ver se o nome anterior indica uma ação sofrida.",
      enunciado:
        "Assinale a frase em que a expressão entre aspas é locução adjetiva, equivalente a um adjetivo, e não complemento de um nome.",
      alternativas: [
        "A apreensão “da carga” durou toda a manhã na unidade operacional.",
        "A fiscalização “dos veículos” continua durante o feriado prolongado.",
        "O laudo “da perícia” foi anexado ao processo no fim do expediente.",
        "O respeito “à vida” orienta toda a atuação do policiamento na rodovia.",
        "A necessidade “de reforço” foi informada ao chefe da equipe pela manhã.",
      ],
      correta: 2,
      explicacao:
        "“da perícia” equivale a “pericial”: laudo pericial. A expressão caracteriza o laudo, e “laudo” não é nome de ação sofrida por alguém.",
      explicacaoErradas:
        "“da carga” e “dos veículos” sofrem a ação de apreender e de fiscalizar: são complementos nominais. “à vida” e “de reforço” completam nomes que exigem complemento: respeito a algo e necessidade de algo.",
      pegadinha:
        "Pensar que toda expressão com “de” depois de substantivo é locução adjetiva. Ela só é locução se caracteriza o nome, sem completar o sentido de uma ação.",
      conhecimento:
        "Complemento nominal é termo pedido por um nome de sentido incompleto. Locução adjetiva é característica acrescentada e, em geral, troca por um adjetivo.",
    },
    {
      topico: "Advérbio",
      subassunto: "Meio, bastante e só",
      dificuldade: 4,
      raciocinio: "Ver a qual palavra o termo se liga: junto de adjetivo é advérbio e não varia.",
      enunciado: "Assinale a frase em que as palavras estão flexionadas de acordo com a norma-padrão.",
      alternativas: [
        "As agentes ficaram meias cansadas depois do plantão noturno no trecho da serra.",
        "Havia bastante viaturas paradas no pátio da unidade durante a troca de turno.",
        "As equipes estavam sós na rodovia, bastante atentas ao fluxo do fim da tarde.",
        "As cargas estavam bastantes danificadas depois da colisão ocorrida no viaduto.",
        "Os agentes saíram a sós do posto e voltaram meios molhados da ronda de ontem.",
      ],
      correta: 2,
      explicacao:
        "“sós” é adjetivo ligado a “equipes” e varia. “bastante”, antes do adjetivo “atentas”, é advérbio de intensidade e não varia.",
      explicacaoErradas:
        "“meias cansadas” e “meios molhados” pedem “meio”, advérbio. “bastante viaturas” pede “bastantes”, pronome junto de substantivo. “bastantes danificadas” pede “bastante”, advérbio junto de adjetivo.",
      pegadinha:
        "“bastante” aparece nas duas formas. A prova: troque por “muito”. Se virar “muitas viaturas”, varia; se virar “muito atentas”, não varia.",
      conhecimento:
        "“Meio” e “bastante” são advérbios antes de adjetivo. “Só” varia quando significa “sozinho”; a locução “a sós” nunca varia.",
    },
    {
      topico: "Palavras especiais",
      subassunto: "Palavras denotativas",
      dificuldade: 4,
      raciocinio: "Separar a palavra que modifica o verbo da palavra que apenas destaca um termo.",
      enunciado:
        "Assinale a frase em que a palavra entre aspas não modifica verbo, adjetivo nem advérbio, sendo uma palavra denotativa de inclusão.",
      alternativas: [
        "“Até” os agentes mais novos conheciam o desvio aberto no km 40.",
        "A viatura foi “até” o posto da serra para buscar o equipamento.",
        "“Ainda” havia fila no pedágio às dez horas da noite de domingo.",
        "Os motoristas chegaram “cedo” à barreira montada no acostamento.",
        "A equipe trabalhou “muito” durante todo o feriado de fim de ano.",
      ],
      correta: 0,
      explicacao:
        "“Até” significa “inclusive” e destaca “os agentes mais novos”. Ele não modifica o verbo: indica que o grupo foi incluído.",
      explicacaoErradas:
        "“até o posto” é preposição, com ideia de limite. “ainda” é advérbio de tempo. “cedo” é advérbio de tempo. “muito” é advérbio de intensidade ligado a “trabalhou”.",
      pegadinha:
        "“até” pode ser preposição ou palavra denotativa. Troque por “inclusive”: se funcionar, é denotativa; se indicar limite, é preposição.",
      conhecimento:
        "Palavras denotativas não entram nas dez classes. Indicam inclusão (até, inclusive), exclusão (só, apenas), retificação (aliás) ou designação (eis).",
    },
  ],
};
