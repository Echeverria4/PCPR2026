import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-a03",
  resumo: {
    ideia:
      "Semântica estuda o sentido das palavras. Coesão é a ligação entre as partes do texto (pronomes, conectores). Coerência é o texto fazer sentido como um todo. Reescrita é dizer o mesmo de outro jeito sem mudar o sentido nem errar a gramática.",
    itens: [
      {
        termo: "Denotação × conotação",
        faz: "Denotação é o sentido literal, de dicionário. Conotação é o sentido figurado, que depende do contexto (“ele tem um coração de pedra”).",
      },
      {
        termo: "Sinônimos e antônimos",
        faz: "Sinônimos têm sentido parecido; sinônimo perfeito quase não existe, então a troca depende do contexto. Antônimos têm sentido oposto.",
      },
      {
        termo: "Polissemia × homonímia",
        faz: "Polissemia: uma mesma palavra com vários sentidos ligados entre si (ponto de ônibus, ponto do trabalho). Homonímia: palavras de origens diferentes que coincidem na forma (“rio” do verbo rir e “rio” de água).",
      },
      {
        termo: "Tipos de homônimos",
        faz: "Homófonos: mesmo som, grafia diferente (concerto/conserto, cerrar/serrar). Homógrafos: mesma grafia, som diferente (colher, com “é” aberto, e colher, com “ê” fechado). Perfeitos: mesma grafia e mesmo som (são, do verbo ser, e são, de saudável).",
      },
      {
        termo: "Parônimos",
        faz: "Palavras parecidas, com sentidos diferentes: eminente (ilustre) × iminente (prestes a ocorrer), ratificar (confirmar) × retificar (corrigir), infringir (violar) × infligir (aplicar pena), deferir (conceder) × diferir (adiar), descrição × discrição, absolver × absorver.",
        pista: "As questões de reescrita gostam de trocar um parônimo pelo outro.",
      },
      {
        termo: "Figuras mais cobradas",
        faz: "Metáfora: comparação sem “como”. Metonímia: troca por proximidade (autor pela obra, lugar pelos moradores). Catacrese: metáfora já gasta, sem outro nome (pé da mesa). Antonomásia: apelido no lugar do nome (o Rei do Futebol). Eufemismo: suaviza (partiu desta para melhor). Hipérbole: exagera.",
      },
      {
        termo: "Antítese × paradoxo",
        faz: "Antítese: ideias opostas lado a lado (luz e trevas). Paradoxo (oxímoro): ideias opostas atribuídas à mesma coisa, que parecem impossíveis juntas (silêncio ensurdecedor, contentamento descontente).",
      },
      {
        termo: "Vícios de linguagem",
        faz: "Ambiguidade: frase com duas leituras. Pleonasmo vicioso: repetição inútil (subir para cima). Cacofonia: som feio no encontro de palavras (“boca dela”). Barbarismo: erro de forma ou pronúncia (rúbrica em vez de rubrica).",
      },
      {
        termo: "Coesão referencial",
        faz: "Anáfora retoma o que já veio; catáfora anuncia o que vem. “Esse” retoma; “este” anuncia ou indica o mais próximo. Também coesam: sinônimos, expressões que resumem e a elipse (omitir termo já dito).",
        pista: "“Este” e “aquele” numa mesma frase: “este” vai para o termo mais perto, “aquele” para o mais longe.",
      },
      {
        termo: "Coesão sequencial",
        faz: "Conectores mostram a relação entre as ideias: oposição (mas, porém, todavia, não obstante), concessão (embora, conquanto, ainda que), causa (porque, porquanto, já que), conclusão (portanto, logo, destarte), adição (além disso, outrossim).",
      },
      {
        termo: "Correlação verbal",
        faz: "Os tempos combinam: “se fosse…, faria” (hipótese no passado), “quando for…, farei” (futuro), “pediu que fizesse” (passado + imperfeito do subjuntivo).",
      },
      {
        termo: "Reescrita e paralelismo",
        faz: "Recursos de reescrita: voz passiva, deslocamento de termos, ênfase com “foi... que”, troca por pronome. Paralelismo: termos coordenados com a mesma estrutura (nome com nome, oração com oração).",
      },
    ],
    cuidado:
      "Na reescrita, confira três coisas: o sentido continua o mesmo, a gramática continua certa e o conector novo tem o mesmo valor do antigo.",
  },
  questoes: [
    {
      topico: "Semântica",
      subassunto: "Parônimos",
      dificuldade: 4,
      raciocinio: "Para cada frase, lembrar o sentido exato da palavra e ver se combina com o contexto.",
      enunciado: "Assinale a frase em que a palavra foi empregada de acordo com o seu sentido.",
      alternativas: [
        "O motorista foi multado por infligir o limite de velocidade da via.",
        "O juiz ratificou a sentença para corrigir um erro de digitação.",
        "Segundo os engenheiros, a queda da ponte era eminente naquela noite.",
        "O agente agiu com discrição ao abordar o suspeito na feira.",
        "A comissão decidiu deferir o prazo para depois do feriado nacional.",
      ],
      correta: 3,
      explicacao: "“Discrição” é reserva, cuidado para não chamar atenção. É o sentido pedido numa abordagem cuidadosa.",
      explicacaoErradas:
        "Quem passa do limite infringe (viola) a regra; infligir é aplicar pena. Corrigir é retificar; ratificar é confirmar. Prestes a acontecer é iminente; eminente é ilustre. Adiar é diferir; deferir é conceder.",
      pegadinha: "As palavras erradas existem e estão bem escritas. O erro está no sentido, e não na grafia.",
      conhecimento:
        "Pares de parônimos mais cobrados: infringir × infligir, ratificar × retificar, iminente × eminente, deferir × diferir, descrição × discrição.",
    },
    {
      topico: "Semântica",
      subassunto: "Homônimos e parônimos",
      dificuldade: 5,
      raciocinio: "Separar grafia e pronúncia: o que muda em cada par?",
      enunciado:
        "Sobre as relações de sentido entre palavras, analise as afirmativas.\n\nI. “Concerto” (apresentação musical) e “conserto” (reparo) são homônimos homófonos: têm o mesmo som e grafias diferentes.\nII. “Colher” (talher) e “colher” (apanhar) são homônimos perfeitos, pois têm a mesma grafia e a mesma pronúncia.\nIII. “Iminente” (prestes a acontecer) e “eminente” (ilustre) são parônimos: parecidos na forma, com sentidos diferentes.\n\nEstá correto o que se afirma em:",
      alternativas: ["Apenas I.", "Apenas I e III.", "Apenas II.", "Apenas II e III.", "I, II e III."],
      correta: 1,
      explicacao:
        "I e III estão certas. II erra: o talher se diz “colhér”, com “é” aberto, e o verbo se diz “colhêr”, com “ê” fechado. Mesma grafia com som diferente forma homônimos homógrafos, e não perfeitos.",
      explicacaoErradas:
        "Ficar só com I deixa de fora o par de parônimos, que está bem definido. Toda alternativa com II aceita que “colher” e “colher” soam iguais.",
      pegadinha: "No papel, os dois “colher” são idênticos. Para classificar, é preciso dizer as palavras em voz alta.",
      conhecimento:
        "Homófonos: mesmo som, grafia diferente. Homógrafos: mesma grafia, som diferente. Perfeitos: mesma grafia e mesmo som.",
    },
    {
      topico: "Figuras de linguagem",
      subassunto: "Metonímia, eufemismo, catacrese e antonomásia",
      dificuldade: 4,
      raciocinio: "Para cada frase, perguntar: o que foi trocado pelo quê, e com que efeito?",
      enunciado:
        "Associe as frases às figuras de linguagem.\n\n1. “Depois de tanta luta, o velho soldado descansou para sempre.”\n2. “A cidade inteira foi às ruas receber a seleção.”\n3. “O Rei do Futebol visitou o batalhão.”\n4. “O pé da mesa do alojamento quebrou.”\n\n( ) metonímia\n( ) eufemismo\n( ) catacrese\n( ) antonomásia\n\nA sequência correta, de cima para baixo, é:",
      alternativas: ["2, 1, 4, 3", "1, 2, 4, 3", "2, 1, 3, 4", "4, 1, 2, 3", "2, 4, 1, 3"],
      correta: 0,
      explicacao:
        "“A cidade” no lugar dos moradores é metonímia (2). “Descansou para sempre” suaviza a morte: eufemismo (1). “Pé da mesa” é metáfora gasta, sem outro nome: catacrese (4). “Rei do Futebol” no lugar do nome do jogador é antonomásia (3).",
      explicacaoErradas:
        "Trocar 1 e 2 faz da morte uma metonímia e da cidade um eufemismo. Trocar 3 e 4 faz do apelido uma catacrese. Pôr 4 em metonímia esquece que “pé” é semelhança de forma, e não proximidade.",
      pegadinha:
        "“A cidade inteira” também tem exagero (hipérbole), mas a figura pedida na lista é a troca do lugar pelas pessoas que vivem nele.",
      conhecimento:
        "Metonímia troca por proximidade (lugar × moradores, autor × obra, marca × produto). Catacrese é a metáfora já tão usada que virou o nome da coisa.",
    },
    {
      topico: "Figuras de linguagem",
      subassunto: "Antítese × paradoxo",
      dificuldade: 5,
      raciocinio: "Ver se os opostos ficam lado a lado (antítese) ou se são ditos da mesma coisa, ao mesmo tempo (paradoxo).",
      enunciado: "Assinale a frase em que há paradoxo (oxímoro), e não apenas antítese.",
      alternativas: [
        "Uns chegaram cedo ao quartel; outros, bem mais tarde.",
        "Na alegria e na tristeza, o soldado manteve a mesma postura.",
        "O silêncio da madrugada era ensurdecedor para o vigia.",
        "Ele hoje ri das mesmas coisas que o fizeram chorar ontem.",
        "Entre a luz da sirene e a escuridão da rua, o soldado avançou.",
      ],
      correta: 2,
      explicacao:
        "Um silêncio “ensurdecedor” junta na mesma coisa ideias que se excluem: silêncio não faz barulho. Essa contradição aparente, que reforça a ideia, é o paradoxo.",
      explicacaoErradas:
        "Cedo × tarde, alegria × tristeza, rir × chorar e luz × escuridão são opostos lado a lado, referidos a coisas ou momentos diferentes. Isso é antítese.",
      pegadinha: "Todas as frases têm opostos. A diferença está em os opostos serem ditos da mesma coisa, ao mesmo tempo.",
      conhecimento: "Antítese: oposição de ideias. Paradoxo: oposição dentro da mesma ideia, que parece impossível e reforça o sentido.",
    },
    {
      topico: "Vícios de linguagem",
      subassunto: "Ambiguidade",
      dificuldade: 5,
      raciocinio: "Testar, em cada reescrita, se ainda dá para o carro ser do sargento.",
      enunciado:
        "“O sargento avisou o motorista de que seu carro seria guinchado.” A frase admite duas leituras. Assinale a reescrita que desfaz a ambiguidade e deixa claro que o carro é do motorista.",
      alternativas: [
        "O sargento avisou o motorista de que o carro dele seria guinchado.",
        "O motorista foi avisado pelo sargento de que seu carro seria guinchado.",
        "O sargento, cujo carro seria guinchado, avisou o motorista do fato.",
        "O sargento avisou ao motorista que o seu carro logo seria guinchado.",
        "O sargento avisou o motorista: “Seu carro será guinchado.”",
      ],
      correta: 4,
      explicacao:
        "Na fala direta, o sargento se dirige ao motorista, e “seu carro” só pode ser o carro de quem ouve. A dúvida desaparece.",
      explicacaoErradas:
        "“Dele” pode ser do sargento ou do motorista. Passar para a voz passiva mantém o “seu” com duas leituras. “Cujo carro” resolve a dúvida, mas para o lado errado: o carro passa a ser do sargento. Trocar “o” por “ao” e pôr “logo” não mexe na dúvida.",
      pegadinha: "Achar que “dele” resolve. Ele só troca o pronome: os dois homens continuam podendo ser o dono.",
      conhecimento:
        "O possessivo “seu” na 3ª pessoa causa ambiguidade quando há dois candidatos. Para desfazer: repetir o nome, mudar a estrutura ou usar a fala direta.",
    },
    {
      topico: "Coesão textual",
      subassunto: "Coesão referencial",
      dificuldade: 5,
      raciocinio: "Ver para onde cada termo aponta: para trás, para frente ou para o termo mais próximo.",
      enunciado:
        "Analise as afirmativas sobre coesão referencial.\n\nI. Em “A viatura quebrou. Ela estava sem revisão”, o pronome “Ela” retoma um termo já citado (anáfora).\nII. Em “O recado era este: ninguém sai do posto”, o pronome “este” anuncia o que vem depois (catáfora).\nIII. Em “O soldado chegou cedo, e o sargento, tarde”, a vírgula marca a omissão de um verbo já dito, recurso coesivo chamado elipse.\nIV. Em “O delegado e o perito chegaram; este examinou o corpo, aquele ouviu as testemunhas”, “este” retoma o delegado.\n\nEstá correto o que se afirma em:",
      alternativas: ["Apenas I, II e III.", "Apenas I e II.", "Apenas II, III e IV.", "Apenas I, III e IV.", "I, II, III e IV."],
      correta: 0,
      explicacao:
        "I, II e III estão certas. IV erra: “este” aponta para o termo mais próximo (o perito), e “aquele”, para o mais distante (o delegado).",
      explicacaoErradas:
        "Ficar só com I e II deixa de fora a elipse, que também faz coesão. Toda alternativa com IV inverte “este” e “aquele”.",
      pegadinha: "Pensar na ordem em que os nomes aparecem (o primeiro com o primeiro). A regra é de distância: “este” fica com o mais perto.",
      conhecimento:
        "Anáfora retoma, catáfora anuncia. Elipse é omitir um termo que dá para recuperar. “Este” e “aquele” na mesma frase: perto e longe.",
    },
    {
      topico: "Coesão textual",
      subassunto: "Conectores",
      dificuldade: 4,
      raciocinio: "Achar o valor do conector (oposição) e procurar outro com o mesmo valor que caiba na mesma estrutura.",
      enunciado:
        "“A operação foi planejada por meses; não obstante, falhou no primeiro dia.” Sem mudar o sentido nem a estrutura da frase, “não obstante” pode ser trocado por:",
      alternativas: ["porquanto", "todavia", "outrossim", "conquanto", "destarte"],
      correta: 1,
      explicacao:
        "“Não obstante”, aqui, liga duas orações independentes com ideia de oposição, como “mas”. “Todavia” tem o mesmo valor e cabe no mesmo lugar.",
      explicacaoErradas:
        "“Porquanto” indica causa. “Outrossim” indica adição. “Destarte” indica conclusão. “Conquanto” é concessivo, mas pede verbo no subjuntivo e outra estrutura (“conquanto tenha sido planejada”).",
      pegadinha:
        "“Conquanto” parece certo porque também tem ideia de contraste. Ele não cabe sem refazer a frase.",
      conhecimento:
        "Oposição: mas, porém, todavia, contudo, entretanto, no entanto, não obstante. Concessão: embora, conquanto, ainda que, posto que (com subjuntivo).",
    },
    {
      topico: "Coesão textual",
      subassunto: "Correlação verbal",
      dificuldade: 4,
      raciocinio: "Hipótese com “se”: o par certo é imperfeito do subjuntivo + futuro do pretérito, ou futuro do subjuntivo + futuro do presente.",
      enunciado: "“Se o efetivo ______ maior, a fiscalização ______ mais estradas.” Assinale a opção que completa as lacunas de acordo com a norma-padrão.",
      alternativas: ["for – alcançaria", "fosse – alcançará", "seja – alcançaria", "fosse – alcançaria", "fosse – tinha alcançado"],
      correta: 3,
      explicacao: "“Se fosse” (imperfeito do subjuntivo) combina com “alcançaria” (futuro do pretérito): é a hipótese que não se realiza.",
      explicacaoErradas:
        "“For” combina com “alcançará”, e não com “alcançaria”. “Fosse” não combina com “alcançará”. “Se seja” não existe na norma. “Tinha alcançado” depois de “se fosse” é uso da fala; a norma pede “teria alcançado”.",
      pegadinha: "“For – alcançará” estaria certo, mas não está entre as opções. Cada metade sozinha parece boa; o par é que precisa combinar.",
      conhecimento: "Se + fosse → faria. Se + for → fará. Quando + for → fará.",
    },
    {
      topico: "Reescrita",
      subassunto: "Concessão e modo verbal",
      dificuldade: 5,
      raciocinio: "Manter a ideia de concessão (apesar de) e conferir o modo do verbo depois de cada conector.",
      enunciado:
        "“Embora a chuva tenha atrasado a operação, os policiais cumpriram todos os mandados.” Assinale a reescrita que mantém o sentido e a correção gramatical.",
      alternativas: [
        "Porque a chuva atrasou a operação, os policiais cumpriram todos os mandados.",
        "A chuva atrasou a operação; portanto, os policiais cumpriram todos os mandados.",
        "Apesar de a chuva ter atrasado a operação, os policiais cumpriram todos os mandados.",
        "Embora a chuva atrasou a operação, os policiais cumpriram todos os mandados de prisão.",
        "Os policiais cumpriram todos os mandados, conquanto a chuva atrasara a operação inteira.",
      ],
      correta: 2,
      explicacao:
        "“Apesar de” mantém a concessão: a chuva atrapalhou, mas não impediu. O infinitivo “ter atrasado” é o certo depois dessa locução, e a norma prefere “de a chuva”, sem juntar.",
      explicacaoErradas:
        "“Porque” e “portanto” transformam a chuva em causa dos mandados cumpridos. “Embora” pede subjuntivo (“tenha atrasado”), não “atrasou”. “Conquanto” também pede subjuntivo, não “atrasara”.",
      pegadinha: "As duas últimas mantêm o valor de concessão e parecem certas. O erro está no modo do verbo.",
      conhecimento: "Embora, conquanto, ainda que → subjuntivo. Apesar de → infinitivo. Porque e portanto mudam o sentido para causa e conclusão.",
    },
    {
      topico: "Reescrita",
      subassunto: "Paralelismo",
      dificuldade: 4,
      raciocinio: "Ver se os termos ligados por “e” ou por “não só... como também” têm a mesma estrutura.",
      enunciado: "Assinale a frase que respeita o paralelismo sintático.",
      alternativas: [
        "O curso exige disciplina e que o aluno estude todos os dias.",
        "Os candidatos devem trazer documento, caneta preta e chegarem cedo.",
        "A meta do comando é reduzir acidentes e a ampliação da fiscalização.",
        "Não só treinou a pontaria como também a resistência física melhorou.",
        "O instrutor pediu silêncio na sala e atenção aos detalhes da prova.",
      ],
      correta: 4,
      explicacao: "“Silêncio” e “atenção” são dois nomes, os dois complementos de “pediu”. Mesma estrutura dos dois lados do “e”.",
      explicacaoErradas:
        "“Disciplina” (nome) está ligado a “que o aluno estude” (oração). “Documento” e “caneta” são nomes, mas “chegarem cedo” é verbo (e ainda flexionado sem necessidade). “Reduzir” (verbo) está ligado a “a ampliação” (nome). “Treinou a pontaria” tem o mesmo sujeito; “a resistência melhorou” muda de sujeito.",
      pegadinha: "As frases quebradas se entendem bem na fala. O paralelismo cobra a forma: nome com nome, verbo com verbo.",
      conhecimento: "Para corrigir: “exige disciplina e estudo diário”, “reduzir acidentes e ampliar a fiscalização”, “não só treinou a pontaria como também melhorou a resistência”.",
    },
  ],
};
