import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-13",
  resumo: {
    ideia:
      "O sentido de uma palavra depende da frase em que ela está. Nunca avalie a palavra sozinha: a prova quase sempre pergunta o que ela quer dizer naquele trecho.",
    itens: [
      {
        termo: "Campo semântico",
        faz: "Palavras que se associam a um mesmo assunto: radar, multa, placa e pedágio lembram trânsito.",
      },
      {
        termo: "Denotação",
        faz: "Sentido primeiro, o do dicionário: o fogo consumiu a carga.",
      },
      {
        termo: "Conotação",
        faz: "Sentido figurado, que depende do contexto: uma chuva de críticas.",
      },
      {
        termo: "Sinônimos",
        faz: "Sentidos parecidos, mas só em certo contexto: marcar e agendar servem para consulta, não para gol.",
      },
      {
        termo: "Antônimos",
        faz: "Sentidos opostos. Palavras que não são opostas em geral podem se opor numa frase: não grite, respire.",
      },
      {
        termo: "Hiperônimo e hipônimo",
        faz: "O primeiro é o grupo: veículo. O segundo é o tipo dentro do grupo: carreta.",
      },
      {
        termo: "Homônimos",
        faz: "Homógrafos têm a mesma grafia e som diferente: acordo (nome) e acordo (verbo). Homófonos têm o mesmo som e grafia diferente: sessão e seção. Perfeitos têm grafia e som iguais: cedo e cedo.",
      },
      {
        termo: "Parônimos",
        faz: "Palavras parecidas, de sentidos diferentes: eminente (elevado) e iminente (prestes a ocorrer); mandado (ordem) e mandato (procuração).",
      },
      {
        termo: "Pares frequentes",
        faz: "Deferir (conceder) e diferir (adiar). Ratificar (confirmar) e retificar (corrigir). Infligir (aplicar pena) e infringir (violar). Tráfego (fluxo) e tráfico (comércio ilegal).",
      },
      {
        termo: "Polissemia",
        faz: "Vários sentidos de uma só palavra: suco natural, natural da Argentina, recurso natural.",
      },
      {
        termo: "Ambiguidade",
        faz: "Dupla leitura. Pode vir da palavra ou da estrutura: disse ao motorista que seu carro foi apreendido. De quem é o carro?",
        pista: "Pronome “seu” e gerúndio são causas comuns.",
      },
    ],
    cuidado:
      "Sinônimo de dicionário pode falhar no texto. Antes de aceitar a troca, leia a frase inteira com a palavra nova.",
  },
  questoes: [
    {
      topico: "Sinônimos e antônimos",
      subassunto: "Oposição criada pelo contexto",
      dificuldade: 4,
      raciocinio: "Separar os pares que são opostos em qualquer frase dos que só se opõem naquela frase.",
      enunciado:
        "Assinale a frase em que os termos entre aspas se opõem apenas naquele contexto, sem serem antônimos fora dele.",
      alternativas: [
        "O posto abriu “cedo” e fechou “tarde” durante todo o feriado.",
        "A pista “subia” na ida e “descia” na volta da serra.",
        "O agente estava “calmo”, e o motorista, muito “nervoso”.",
        "A carga “entrou” pela manhã e “saiu” no fim da tarde de sexta.",
        "Não “grite” com o condutor: “respire” e explique a autuação.",
      ],
      correta: 4,
      explicacao:
        "“Gritar” e “respirar” não são antônimos no dicionário. A oposição nasce da situação: gritar é perder a calma, e respirar é recuperá-la.",
      explicacaoErradas:
        "“cedo” e “tarde”, “subia” e “descia”, “calmo” e “nervoso”, “entrou” e “saiu” são pares opostos mesmo fora dessas frases.",
      pegadinha:
        "Procurar o par mais “perfeito”. A questão pede justamente o par que só funciona como oposto ali.",
      conhecimento:
        "O contexto pode criar oposição entre palavras que normalmente não se opõem.",
    },
    {
      topico: "Polissemia e sinônimos",
      subassunto: "Sentido figurado do mesmo verbo",
      dificuldade: 4,
      raciocinio: "Definir o sentido de “apertou” no trecho e testá-lo em cada frase.",
      enunciado:
        "“A fiscalização apertou o cerco ao contrabando na fronteira.” Assinale a frase em que “apertar” tem o mesmo sentido desse trecho.",
      alternativas: [
        "O socorrista apertou o cinto do passageiro ferido na ambulância.",
        "O chefe apertou as regras de acesso ao pátio de veículos do posto.",
        "O motorista apertou o botão do alerta antes de parar no acostamento.",
        "O agente apertou a mão do condutor na despedida, depois da vistoria.",
        "O orçamento apertou, e o posto ficou sem viaturas novas neste ano.",
      ],
      correta: 1,
      explicacao:
        "Nos dois casos, “apertar” significa tornar mais rigoroso: o cerco ficou mais duro, e as regras também.",
      explicacaoErradas:
        "O cinto, o botão e a mão recebem pressão física. O orçamento que aperta fica escasso, e esse é outro sentido figurado.",
      pegadinha:
        "Ver que o orçamento também está em sentido figurado e parar por aí. Ser figurado não basta: o sentido precisa ser o mesmo.",
      conhecimento:
        "Polissemia é a soma de sentidos da mesma palavra. A prova costuma pedir o sentido exato no trecho.",
    },
    {
      topico: "Ambiguidade",
      subassunto: "Ambiguidade causada pelo possessivo",
      dificuldade: 5,
      raciocinio: "Em cada reescrita, perguntar se ainda é possível pensar que o carro é do agente.",
      enunciado:
        "“O agente encontrou o motorista e disse que seu carro foi apreendido.” Assinale a reescrita que deixa claro que o carro é do motorista.",
      alternativas: [
        "Ao encontrar o motorista, o agente lhe disse: “Seu carro foi apreendido”.",
        "O agente encontrou o motorista e lhe disse que seu carro fora apreendido.",
        "O motorista foi encontrado pelo agente, que disse que seu carro foi apreendido.",
        "O agente disse ao motorista, que encontrou, que o carro dele foi apreendido.",
        "O agente encontrou o motorista e disse que o próprio carro foi apreendido.",
      ],
      correta: 0,
      explicacao:
        "No discurso direto, “seu” é dito pelo agente ao motorista. O carro só pode ser do interlocutor.",
      explicacaoErradas:
        "As frases com “seu carro” na fala indireta mantêm a dúvida, e “dele” também pode remeter ao agente ou ao motorista. “o próprio carro” aponta para o sujeito, e o carro passaria a ser do agente.",
      pegadinha:
        "Achar que “dele” resolve sempre. Com dois homens citados antes, a dúvida continua.",
      conhecimento:
        "O possessivo de terceira pessoa com dois antecedentes possíveis é a causa clássica da ambiguidade.",
    },
    {
      topico: "Homônimos e parônimos",
      subassunto: "Homônimos homófonos",
      dificuldade: 4,
      raciocinio: "Avaliar a pronúncia e a grafia de cada par.",
      enunciado:
        "Assinale o par de palavras homônimas homófonas, isto é, de mesma pronúncia e de grafia diferente.",
      alternativas: [
        "tráfego (movimento de veículos) e tráfico (comércio ilegal)",
        "acordo (combinação) e acordo (forma do verbo “acordar”)",
        "sessão (reunião) e seção (setor de um órgão)",
        "cedo (advérbio) e cedo (forma do verbo “ceder”)",
        "veículo (meio de transporte) e viatura (veículo oficial)",
      ],
      correta: 2,
      explicacao: "“Sessão” e “seção” têm o mesmo som e são escritas de formas diferentes.",
      explicacaoErradas:
        "“tráfego” e “tráfico” são parônimos. Os dois “acordo” são homógrafos: têm a mesma grafia, mas som diferente. Os dois “cedo” são homônimos perfeitos. “veículo” e “viatura” formam par de hiperônimo e hipônimo.",
      pegadinha:
        "Confundir homófono com parônimo. No homófono, o som é igual; no parônimo, apenas parecido.",
      conhecimento:
        "Homófono: mesmo som. Homógrafo: mesma grafia. Perfeito: som e grafia iguais. Parônimo: som e grafia só parecidos.",
    },
    {
      topico: "Homônimos e parônimos",
      subassunto: "Parônimos em contexto",
      dificuldade: 5,
      raciocinio: "Comparar o sentido indicado entre parênteses com o sentido real da palavra.",
      enunciado:
        "Assinale a frase em que a palavra entre aspas foi empregada no sentido indicado entre parênteses.",
      alternativas: [
        "O pedido de licença foi “diferido” pelo chefe do posto (negado).",
        "O laudo “ratificou” o erro de digitação do relatório (corrigiu).",
        "O “tráfico” ficou lento na rodovia durante o feriado (fluxo de veículos).",
        "A empresa “deferiu” a entrega da carga para a semana seguinte (adiou).",
        "O fiscal “infligiu” a multa ao transportador da carga (aplicou).",
      ],
      correta: 4,
      explicacao: "“Infligir” significa aplicar uma pena ou castigo. O fiscal aplicou a multa.",
      explicacaoErradas:
        "“Diferir” é adiar, e negar é “indeferir”. “Ratificar” é confirmar, e corrigir é “retificar”. Fluxo de veículos é “tráfego”. “Deferir” é conceder, e adiar é “diferir”.",
      pegadinha:
        "Trocar “infligir” por “infringir”. O motorista infringe a lei, e o fiscal inflige a multa.",
      conhecimento:
        "Em parônimos, uma letra muda o sentido. Vale decorar os pares mais frequentes em documentos oficiais.",
    },
    {
      topico: "Ambiguidade",
      subassunto: "Ambiguidade estrutural com gerúndio",
      dificuldade: 4,
      raciocinio: "Perguntar quem pratica a ação de correr em cada frase.",
      enunciado: "Assinale a frase que apresenta ambiguidade.",
      alternativas: [
        "Correndo pela pista, o agente avistou o motorista da carreta.",
        "O agente viu o motorista correndo pela pista da rodovia.",
        "O agente que corria pela pista avistou o motorista da carreta.",
        "O agente viu o motorista que corria pela pista da rodovia.",
        "O agente viu correr pela pista o motorista da carreta tombada.",
      ],
      correta: 1,
      explicacao:
        "A frase admite duas leituras: o agente, enquanto corria, viu o motorista; ou o agente viu o motorista que corria.",
      explicacaoErradas:
        "Com o gerúndio no início, ele se liga ao sujeito “o agente”. As orações com “que” ligam a corrida a um termo preciso. “viu correr” mostra que o motorista é quem corria.",
      pegadinha:
        "Pensar que a frase está errada. Ela é gramatical: o defeito é de sentido, por admitir duas interpretações.",
      conhecimento:
        "A posição do gerúndio pode criar ambiguidade estrutural. A troca por oração adjetiva desfaz a dúvida.",
    },
  ],
};
