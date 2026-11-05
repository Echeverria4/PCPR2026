import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-08",
  resumo: {
    ideia:
      "Período composto tem duas ou mais orações. A pergunta central é uma só: a oração vive sozinha (coordenada) ou faz o papel de um termo de outra oração (subordinada)?",
    itens: [
      {
        termo: "Contar as orações",
        faz: "Cada oração tem um verbo. Locução verbal conta como um só, e o “ser + que” de realce pode sair da frase.",
        pista: "“Foi a equipe que apreendeu a carga” é uma oração só.",
      },
      {
        termo: "Coordenadas",
        faz: "Independentes na estrutura: aditivas, adversativas, alternativas, conclusivas e explicativas.",
      },
      {
        termo: "Substantivas",
        faz: "Valem por um substantivo e trocam por “isso”: subjetiva, objetiva direta, objetiva indireta, completiva nominal, predicativa e apositiva.",
        pista: "“Desconfio de que” é objetiva indireta. “Tenho receio de que” é completiva nominal.",
      },
      {
        termo: "Adjetivas",
        faz: "Valem por um adjetivo e começam por pronome relativo. Restritiva, sem vírgula: escolhe parte do grupo. Explicativa, com vírgula: vale para o grupo todo.",
      },
      {
        termo: "Adverbiais",
        faz: "Valem por um advérbio: causa, consequência, condição, concessão, comparação, conformidade, finalidade, proporção e tempo.",
      },
      {
        termo: "Reduzidas",
        faz: "Verbo no infinitivo, gerúndio ou particípio, sem conectivo. Para desenvolver, ponha o conectivo e conjugue o verbo: “Ao chegar” vira “Quando chegar”.",
      },
      {
        termo: "Paralelismo",
        faz: "Itens coordenados têm a mesma forma: nome com nome, infinitivo com infinitivo, oração com oração.",
      },
      {
        termo: "Função do “que” relativo",
        faz: "Troque o “que” pelo antecedente e analise a oração: “a carga que apreenderam” dá “apreenderam a carga”, então é objeto direto.",
      },
      {
        termo: "Palavra “se”",
        faz: "Apassivador, indeterminador, integrante (“não sei se”), condicional, reflexivo e parte do verbo (“arrepender-se”).",
      },
      {
        termo: "Palavra “como”",
        faz: "Causa (no início), comparação, conformidade (igual a “conforme”), qualidade (“atuou como perito”) e modo, em perguntas.",
      },
    ],
    cuidado:
      "Pôr ou tirar a vírgula de uma oração adjetiva muda o sentido, mesmo que a frase continue correta. A prova costuma perguntar qual dos dois sentidos ficou.",
  },
  questoes: [
    {
      topico: "Orações adjetivas",
      subassunto: "Restritiva e explicativa",
      dificuldade: 5,
      raciocinio: "Perguntar se a oração separa uma parte do grupo ou se vale para todos os elementos citados.",
      enunciado:
        "Compare: “Os agentes que atuaram na serra receberam folga.” e “Os agentes, que atuaram na serra, receberam folga.” Assinale a conclusão correta.",
      alternativas: [
        "Na primeira frase, todos os agentes receberam folga; na segunda, só os que atuaram na serra ganharam o benefício.",
        "As duas frases têm o mesmo sentido, porque a vírgula é um recurso opcional nas orações adjetivas da norma-padrão.",
        "Nas duas frases, “que” é conjunção integrante, e a oração iniciada por ele completa o sentido do verbo “receberam”.",
        "A segunda frase é incorreta, porque as vírgulas separam indevidamente o sujeito “Os agentes” do verbo “receberam”.",
        "Na primeira frase, só parte dos agentes recebeu folga; na segunda, todos os agentes citados atuaram na serra.",
      ],
      correta: 4,
      explicacao:
        "Sem vírgula, a oração é restritiva: separa um grupo menor. Com vírgulas, é explicativa: acrescenta um dado sobre todos os agentes de que se fala.",
      explicacaoErradas:
        "A conclusão que dá folga a todos na primeira frase inverte os valores. A pontuação muda o sentido, portanto ele não é o mesmo. “que” é pronome relativo, pois retoma “agentes”. As vírgulas isolam a oração intercalada, o que é correto.",
      pegadinha:
        "Pensar em vírgula só como erro ou acerto. Aqui, as duas frases estão certas e dizem coisas diferentes.",
      conhecimento:
        "Restritiva não leva vírgula e limita o antecedente. Explicativa leva vírgula e vale para todo o antecedente.",
    },
    {
      topico: "Orações substantivas",
      subassunto: "Completiva nominal e objetiva indireta",
      dificuldade: 4,
      raciocinio: "Trocar a oração por “isso” e ver qual palavra a exige: verbo, nome ou nenhuma das duas.",
      enunciado:
        "Assinale a frase em que a oração entre aspas é subordinada substantiva completiva nominal.",
      alternativas: [
        "A equipe desconfiava “de que a ponte cederia” com o aumento da chuva.",
        "A equipe tinha receio “de que a ponte cedesse” com o aumento da chuva.",
        "Era bem provável “que a ponte cedesse” com o aumento da chuva na serra.",
        "O temor da equipe era “que a ponte cedesse” com o aumento da chuva.",
        "A equipe temia uma só coisa: “que a ponte cedesse” com a chuva da serra.",
      ],
      correta: 1,
      explicacao:
        "A preposição é exigida pelo nome “receio”: receio disso. Oração que completa um nome é completiva nominal.",
      explicacaoErradas:
        "“desconfiava de” tem a preposição exigida pelo verbo: objetiva indireta. “Era provável” forma subjetiva, pois “isso era provável”. Depois de “era”, com “temor” como sujeito, há predicativa. Depois dos dois-pontos, há apositiva.",
      pegadinha:
        "Ver “de que” e marcar objetiva indireta. A diferença está na palavra que pede a preposição: verbo ou nome.",
      conhecimento:
        "A substantiva recebe o nome da função do termo que ela substitui.",
    },
    {
      topico: "Orações adjetivas",
      subassunto: "Função sintática do pronome relativo",
      dificuldade: 5,
      raciocinio: "Isolar a oração adjetiva e trocar “que” pelo antecedente.",
      enunciado: "Assinale a frase em que o pronome relativo “que” exerce a função de objeto direto.",
      alternativas: [
        "A carga que os agentes apreenderam estava sem nota fiscal.",
        "A carga que tombou na serra estava sem a nota fiscal exigida.",
        "A carga a que o laudo se refere estava sem a nota fiscal.",
        "A carga de que o motorista precisava chegou sem nota fiscal.",
        "A carga que parecia suspeita estava sem a nota fiscal exigida.",
      ],
      correta: 0,
      explicacao:
        "Na oração “os agentes apreenderam a carga”, o sujeito é “os agentes”, e “a carga” é objeto direto. O “que” a substitui e assume essa função.",
      explicacaoErradas:
        "Em “que tombou” e “que parecia suspeita”, a carga tomba e parece: o “que” é sujeito. “a que” e “de que” trazem preposição exigida por “refere” e “precisava”: objeto indireto.",
      pegadinha:
        "Dar ao “que” a função do antecedente na oração principal. “A carga” é sujeito de “estava”, mas o “que” é analisado dentro da própria oração.",
      conhecimento:
        "O pronome relativo tem função dentro da oração que inicia, e ela pode ser diferente da função do antecedente.",
    },
    {
      topico: "Orações reduzidas",
      subassunto: "Desenvolvimento sem mudança de sentido",
      dificuldade: 4,
      raciocinio: "Descobrir a relação da reduzida e conferir se o conectivo novo mantém essa relação.",
      enunciado: "Assinale o par em que a oração reduzida foi desenvolvida sem mudança de sentido.",
      alternativas: [
        "“Encerrada a vistoria, a carreta seguiu.” / “Embora a vistoria tivesse acabado, a carreta seguiu.”",
        "“Apesar de conhecer a serra, ele reduziu.” / “Porque já conhecia bem a serra, ele reduziu.”",
        "“Por estar sem placa, o carro foi retido.” / “Caso esteja sem a placa, o carro foi retido.”",
        "“Havendo neblina, a pista será fechada.” / “Caso haja neblina, a pista será fechada.”",
        "“Ao cruzar a divisa, avise o posto mais próximo.” / “Se bem que cruze a divisa, avise o posto.”",
      ],
      correta: 3,
      explicacao:
        "A reduzida de gerúndio apresenta uma hipótese, e a condicional “caso haja” mantém essa relação, com o subjuntivo.",
      explicacaoErradas:
        "“Encerrada a vistoria” indica tempo, e “Embora” traz concessão. “Apesar de” indica concessão, e “Porque” traz causa. “Por estar” indica causa, e “Caso” traz condição. “Ao cruzar” indica tempo, e “Se bem que” traz concessão.",
      pegadinha:
        "Avaliar só se a frase final é correta. Todas as desenvolvidas estão bem escritas: o erro é a relação de sentido.",
      conhecimento:
        "“Ao + infinitivo” costuma indicar tempo. “Por + infinitivo”, causa. “Apesar de + infinitivo”, concessão. Particípio e gerúndio dependem do contexto.",
    },
    {
      topico: "Paralelismo",
      subassunto: "Paralelismo sintático",
      dificuldade: 4,
      raciocinio: "Comparar a forma dos termos ligados pelo conectivo.",
      enunciado: "Assinale a frase que respeita o paralelismo sintático.",
      alternativas: [
        "A operação visa não só reduzir acidentes, como também à prevenção de crimes.",
        "O agente pediu o documento do veículo e que o motorista descesse da cabine.",
        "O curso ensina a abordar veículos e a redigir boletins de ocorrência na rodovia.",
        "A equipe tanto fiscalizou a carga quanto a documentação foi conferida depois.",
        "O relatório da chefia é claro, objetivo e traz precisão nos dados de toda a operação.",
      ],
      correta: 2,
      explicacao:
        "Os dois complementos de “ensina” têm a mesma forma: “a abordar” e “a redigir”.",
      explicacaoErradas:
        "“reduzir” (infinitivo) está ligado a “à prevenção” (substantivo). “o documento” (nome) está ligado a “que o motorista descesse” (oração). “tanto fiscalizou” está na voz ativa, e “quanto ... foi conferida”, na passiva. “claro, objetivo” são adjetivos, e “traz precisão” é um verbo com complemento.",
      pegadinha:
        "Considerar que basta a frase ser compreensível. Paralelismo é simetria de forma entre os termos coordenados.",
      conhecimento:
        "Correlações como “não só... mas também” e “tanto... quanto” exigem a mesma estrutura depois de cada parte.",
    },
    {
      topico: "Palavra “se”",
      subassunto: "Conjunção integrante e outros valores",
      dificuldade: 4,
      raciocinio: "Testar a troca por “isso”, depois o sentido de hipótese, e por último a relação com o verbo.",
      enunciado: "Assinale a frase em que “se” é conjunção integrante.",
      alternativas: [
        "Se a pista for liberada, o comboio seguirá até o posto da divisa.",
        "Liberou-se a pista depois da retirada da carreta tombada na curva.",
        "Aqui se trabalha muito durante as operações de feriado prolongado.",
        "O motorista se arrependeu de ter seguido pela serra durante a chuva.",
        "O chefe quer saber se a pista será liberada até o fim desta tarde.",
      ],
      correta: 4,
      explicacao:
        "A oração “se a pista será liberada” é o objeto de “saber” e pode ser trocada por “isso”: o chefe quer saber isso.",
      explicacaoErradas:
        "“Se a pista for liberada” indica condição. “Liberou-se a pista” é passiva sintética. “se trabalha” indetermina o sujeito. Em “se arrependeu”, o “se” faz parte do verbo pronominal.",
      pegadinha:
        "Ver “se” no meio da frase e pensar em condição. A oração condicional traz hipótese; a integrante completa outro termo.",
      conhecimento:
        "O “se” integrante aparece depois de verbos como saber, perguntar e verificar, com sentido de dúvida.",
    },
    {
      topico: "Palavra “como”",
      subassunto: "Valores semânticos",
      dificuldade: 4,
      raciocinio: "Trocar “como” por “conforme”, “porque”, “na qualidade de” ou “tal qual” em cada frase.",
      enunciado: "Assinale a frase em que “como” tem valor de conformidade.",
      alternativas: [
        "Como previa o plano, a pista foi fechada às dez da noite.",
        "Como a chuva aumentou, a pista foi fechada às dez da noite.",
        "O servidor atuou como perito na apuração daquele acidente.",
        "A neblina de hoje é densa como a da semana passada na serra.",
        "Ninguém sabe como a carreta conseguiu sair da pista da serra.",
      ],
      correta: 0,
      explicacao:
        "A troca funciona: “Conforme previa o plano”. O fato aconteceu de acordo com o que outra fonte previa.",
      explicacaoErradas:
        "“Como a chuva aumentou” indica causa e pode ser trocado por “porque”. “como perito” indica qualidade. “densa como” indica comparação. “sabe como” indica modo, em pergunta indireta.",
      pegadinha:
        "Ver “como” no início e marcar causa. No início, o valor pode ser causal ou conformativo: a troca é que decide.",
      conhecimento:
        "No início do período, “como” é causal quando traz o motivo do fato principal, e conformativo quando indica a fonte ou o modelo.",
    },
    {
      topico: "Coordenação e subordinação",
      subassunto: "Contagem de orações e realce",
      dificuldade: 5,
      raciocinio: "Retirar o “ser + que” e ver se a frase continua completa.",
      enunciado: "Assinale a frase que forma período simples, com uma única oração.",
      alternativas: [
        "A equipe apreendeu a carga e liberou a carreta no feriado.",
        "Foi a equipe do posto que apreendeu a carga no feriado.",
        "A equipe informou que apreendeu a carga no feriado.",
        "A equipe apreendeu a carga quando o feriado começou.",
        "A equipe que apreendeu a carga trabalhou no feriado.",
      ],
      correta: 1,
      explicacao:
        "“Foi... que” é expressão de realce. Sem ela, a frase segue completa: “A equipe do posto apreendeu a carga no feriado”. Há um só verbo.",
      explicacaoErradas:
        "“apreendeu” e “liberou” formam duas coordenadas. “informou” tem oração objetiva direta. “quando o feriado começou” é adverbial temporal. “que apreendeu a carga” é adjetiva restritiva.",
      pegadinha:
        "Contar dois verbos e concluir que há duas orações. Só se conta verbo que tenha função própria na frase.",
      conhecimento:
        "Expressões de realce com “ser” e “que” não formam oração. Locução verbal também vale por um só verbo.",
    },
  ],
};
