import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-09",
  resumo: {
    ideia:
      "Na ordem direta (sujeito, verbo, complemento, adjunto) não há vírgula. Ela aparece quando um termo sai do lugar ou se intercala. Quando isola algo no meio da frase, vem em par.",
    itens: [
      {
        termo: "Proibido",
        faz: "Não se separa sujeito do verbo, verbo do complemento, nem nome do seu complemento.",
        pista: "Sujeito longo continua sem vírgula antes do verbo.",
      },
      {
        termo: "Adjunto deslocado",
        faz: "Adjunto adverbial no início ou no meio: vírgula obrigatória se for longo, facultativa se for curto (até duas palavras).",
      },
      {
        termo: "Enumeração e omissão",
        faz: "A vírgula separa itens de uma lista e marca verbo omitido: “Uma equipe ficou na serra; a outra, no trevo”.",
      },
      {
        termo: "Conjunções",
        faz: "“Porém”, “contudo”, “portanto” e “logo” deslocados ficam entre vírgulas. O “mas” não se desloca: abre a oração.",
      },
      {
        termo: "Vírgula antes do “e”",
        faz: "Cabe com sujeitos diferentes, com sentido de “mas”, com repetição da conjunção ou contra ambiguidade. Com o mesmo sujeito, evite.",
      },
      {
        termo: "Termos isolados",
        faz: "Aposto explicativo, vocativo, oração adjetiva explicativa, oração intercalada e expressões como “isto é” e “por exemplo”.",
      },
      {
        termo: "Ponto e vírgula",
        faz: "Separa itens com vírgulas internas, incisos de lei e orações coordenadas, sobretudo adversativas e conclusivas.",
      },
      {
        termo: "Dois-pontos",
        faz: "Abrem explicação, consequência, citação, enumeração ou aposto.",
      },
      {
        termo: "Aspas",
        faz: "Marcam citação, ironia, estrangeirismo e gíria.",
      },
      {
        termo: "Travessão, parênteses e reticências",
        faz: "Travessão isola comentário com ênfase. Parênteses trazem dado acessório. Reticências marcam interrupção; entre parênteses, marcam corte de texto.",
      },
    ],
    cuidado:
      "Trocar um sinal por outro só preserva a frase se a relação de sentido continuar a mesma. Faça a troca na cabeça antes de responder.",
  },
  questoes: [
    {
      topico: "Vírgula",
      subassunto: "Termos da ordem direta",
      dificuldade: 4,
      raciocinio: "Pôr cada frase na ordem direta e verificar se a vírgula separa termos ligados.",
      enunciado: "Assinale a frase pontuada de acordo com a norma-padrão.",
      alternativas: [
        "Os agentes da unidade instalada na serra, apreenderam a carga ainda no domingo.",
        "A equipe do posto apreendeu, a carga sem nota fiscal ainda no domingo de manhã.",
        "Ainda no domingo de manhã, a equipe do posto apreendeu a carga sem nota fiscal.",
        "A carga que, a equipe apreendeu no domingo de manhã seguiu para o pátio do posto.",
        "O motorista que, foi abordado no domingo de manhã, apresentou a nota fiscal falsa.",
      ],
      correta: 2,
      explicacao:
        "O adjunto adverbial “Ainda no domingo de manhã” foi deslocado para o início e, por ser longo, vem separado por vírgula.",
      explicacaoErradas:
        "A vírgula antes de “apreenderam” separa o sujeito do verbo. A vírgula depois de “apreendeu” separa o verbo do objeto. “que, a equipe” e “que, foi abordado” quebram a oração adjetiva logo depois do pronome relativo.",
      pegadinha:
        "Pôr vírgula onde se respira. Sujeito longo pede pausa na fala, mas continua sem vírgula na escrita.",
      conhecimento:
        "A vírgula marca função sintática, e não pausa de leitura.",
    },
    {
      topico: "Vírgula",
      subassunto: "Oração intercalada e mudança de sentido",
      dificuldade: 5,
      raciocinio: "Descobrir quem fala e quem pratica a ação, separando a oração entre vírgulas.",
      enunciado:
        "“O chefe, disse o agente, errou na escala.” Assinale a frase que mantém o sentido do trecho citado.",
      alternativas: [
        "O chefe disse que o agente errou na escala do plantão.",
        "O chefe e o agente disseram que houve erro na escala.",
        "O chefe disse ao agente que errou ao montar a escala.",
        "O agente errou ao dizer ao chefe que a escala mudou.",
        "O agente disse que o chefe errou na escala do plantão.",
      ],
      correta: 4,
      explicacao:
        "“disse o agente” é oração intercalada. Sem ela, resta “O chefe errou na escala”: quem falou foi o agente, e quem errou foi o chefe.",
      explicacaoErradas:
        "Dizer que o chefe falou inverte os papéis. Atribuir a fala aos dois inclui o chefe, que nada disse. Nas frases que trazem “ao chefe” ou “ao agente”, surge um interlocutor que o trecho não menciona.",
      pegadinha:
        "Ler a frase como “O chefe disse”. As vírgulas tiram “disse o agente” da sequência principal.",
      conhecimento:
        "Oração intercalada interrompe o período para comentar ou indicar quem fala, e fica entre vírgulas, travessões ou parênteses.",
    },
    {
      topico: "Vírgula",
      subassunto: "Omissão do verbo",
      dificuldade: 4,
      raciocinio: "Reconstruir a segunda oração e ver qual termo falta.",
      enunciado:
        "“A primeira equipe fiscalizou a serra; a segunda, o trevo.” A vírgula depois de “a segunda” é empregada para",
      alternativas: [
        "isolar aposto explicativo referente à primeira equipe citada.",
        "marcar a omissão da forma verbal “fiscalizou”, citada antes.",
        "separar o sujeito do verbo na segunda oração do período.",
        "isolar adjunto adverbial deslocado para o início da oração.",
        "indicar enumeração de termos com a mesma função sintática.",
      ],
      correta: 1,
      explicacao:
        "A segunda oração é “a segunda fiscalizou o trevo”. A vírgula ocupa o lugar do verbo, já dito na oração anterior.",
      explicacaoErradas:
        "“a segunda” é sujeito, e não aposto. Não há verbo ali para ser separado do sujeito. Também não há adjunto adverbial nem lista de termos com a mesma função.",
      pegadinha:
        "Ver vírgula depois do sujeito e marcar erro. Na omissão do verbo, ela é legítima, pois o verbo não está mais lá.",
      conhecimento:
        "A vírgula pode marcar a omissão de um termo já mencionado ou identificável pelo contexto.",
    },
    {
      topico: "Vírgula",
      subassunto: "Conjunção deslocada",
      dificuldade: 4,
      raciocinio: "Lembrar que “porém” se desloca entre vírgulas e que “mas” não se desloca.",
      enunciado:
        "“A chuva parou, mas a pista continuou interditada.” Assinale a reescrita correta e de mesmo sentido.",
      alternativas: [
        "A chuva parou; a pista, porém, continuou interditada.",
        "A chuva parou; a pista, mas, continuou interditada.",
        "A chuva parou; a pista porém, continuou interditada.",
        "A chuva parou, a pista continuou, mas, interditada.",
        "A chuva parou; a pista, todavia continuou interditada.",
      ],
      correta: 0,
      explicacao:
        "“Porém” tem o valor de “mas” e pode vir depois do sujeito, isolado por um par de vírgulas.",
      explicacaoErradas:
        "“a pista, mas,” e “continuou, mas,” deslocam o “mas”, que deve abrir a oração. “pista porém,” e “pista, todavia continuou” trazem só uma das vírgulas do par.",
      pegadinha:
        "Tratar todas as adversativas como iguais. O “mas” é a única que não aceita deslocamento.",
      conhecimento:
        "Conjunção deslocada vem entre vírgulas: uma só deixa o par incompleto.",
    },
    {
      topico: "Vírgula",
      subassunto: "Vírgula antes do “e”",
      dificuldade: 4,
      raciocinio: "Comparar os sujeitos das orações ligadas pelo “e”.",
      enunciado: "Assinale a frase em que a vírgula antes de “e” é justificada.",
      alternativas: [
        "A equipe parou a carreta, e vistoriou a carga no pátio do posto.",
        "O perito examinou o veículo, e fotografou as marcas deixadas na pista.",
        "O condutor, e o passageiro foram encaminhados ao hospital da cidade.",
        "O agente apreendeu a carga, e o motorista ficou detido no posto.",
        "O condutor apresentou a habilitação, e a nota fiscal da carga no posto.",
      ],
      correta: 3,
      explicacao:
        "As orações têm sujeitos diferentes, “o agente” e “o motorista”, e a vírgula evita que se leia “a carga e o motorista” como objeto de “apreendeu”.",
      explicacaoErradas:
        "“parou... e vistoriou” e “examinou... e fotografou” têm o mesmo sujeito. “O condutor, e o passageiro” separa partes do sujeito composto. “a habilitação, e a nota fiscal” separa partes do objeto.",
      pegadinha:
        "Dizer que vírgula antes de “e” é sempre erro. Ela é aceita com sujeitos diferentes, com valor adversativo e contra ambiguidade.",
      conhecimento:
        "Com o mesmo sujeito, a vírgula antes do “e” é desaconselhada, salvo casos de ênfase ou repetição.",
    },
    {
      topico: "Dois-pontos e ponto e vírgula",
      subassunto: "Relação de sentido dos dois-pontos",
      dificuldade: 5,
      raciocinio: "Descobrir a relação entre as duas partes e procurar o conectivo que mantém essa relação.",
      enunciado:
        "“A pista estava alagada: o comboio não passou.” Assinale a reescrita que mantém o sentido e a correção.",
      alternativas: [
        "A pista estava alagada, porque o comboio não passou.",
        "A pista estava alagada; portanto, o comboio não passou.",
        "A pista estava alagada, embora o comboio não passasse.",
        "A pista estava alagada; todavia, o comboio não passou.",
        "A pista estava alagada, desde que o comboio não passasse.",
      ],
      correta: 1,
      explicacao:
        "A segunda parte é consequência da primeira, e o conectivo conclusivo mantém essa relação.",
      explicacaoErradas:
        "“porque” faz do comboio a causa do alagamento. “embora” e “todavia” criam oposição. “desde que”, com subjuntivo, cria condição.",
      pegadinha:
        "Achar que os dois-pontos só abrem lista ou citação. Eles também ligam orações com relação de causa ou consequência.",
      conhecimento:
        "Os dois-pontos indicam que o que vem depois explica, conclui ou detalha o que veio antes.",
    },
    {
      topico: "Aspas e outros sinais",
      subassunto: "Valor das aspas",
      dificuldade: 4,
      raciocinio: "Perguntar se a palavra é citação, termo técnico, estrangeirismo ou expressão usada no sentido contrário.",
      enunciado: "Assinale a frase em que as aspas marcam ironia.",
      alternativas: [
        "O motorista declarou: “Não vi a placa de desvio”, e seguiu até o posto.",
        "O condutor abriu um “app” de mapas para escapar da barreira na serra.",
        "O laudo usa o termo “aquaplanagem” ao explicar a saída de pista da van.",
        "O boletim registra que o condutor “não soube informar” o destino da carga.",
        "O “motorista exemplar” passou a 180 km/h em frente ao radar do trecho.",
      ],
      correta: 4,
      explicacao:
        "A expressão é usada com sentido contrário ao literal: quem passa a 180 km/h não é exemplar. As aspas sinalizam essa inversão.",
      explicacaoErradas:
        "“Não vi a placa de desvio” e “não soube informar” reproduzem falas ou registros. “app” marca termo de origem estrangeira. “aquaplanagem” é palavra citada como palavra.",
      pegadinha:
        "Ver aspas e pensar logo em citação. O contexto é que mostra o valor do sinal.",
      conhecimento:
        "Aspas marcam citação, ironia, estrangeirismo, gíria e destaque de uma palavra como termo.",
    },
    {
      topico: "Vírgula",
      subassunto: "Vírgula facultativa",
      dificuldade: 5,
      raciocinio: "Retirar a vírgula de cada frase e ver se surge erro ou mudança de sentido.",
      enunciado:
        "Assinale a frase em que a retirada da vírgula não gera erro nem muda o sentido.",
      alternativas: [
        "A equipe, que atua na serra, apreendeu duas cargas na semana.",
        "Agentes, mantenham a distância dos cabos caídos na rodovia.",
        "Ontem, a equipe apreendeu duas cargas no pátio da balança.",
        "O inspetor Caio, chefe do posto, assinou o laudo da colisão.",
        "Apreendidas as cargas, a equipe voltou ao posto da divisa.",
      ],
      correta: 2,
      explicacao:
        "“Ontem” é adjunto adverbial curto, no início da frase. Nesse caso, a vírgula é facultativa.",
      explicacaoErradas:
        "Sem vírgulas, “que atua na serra” passa a restringir a equipe. O vocativo “Agentes” e o aposto “chefe do posto” precisam ser isolados. A oração reduzida de particípio, anteposta, também pede vírgula.",
      pegadinha:
        "Procurar a frase com menos vírgulas. A questão é sobre a função do termo isolado, e não sobre a quantidade de sinais.",
      conhecimento:
        "Adjunto adverbial curto deslocado admite vírgula facultativa. Vocativo e aposto explicativo não a dispensam.",
    },
  ],
};
