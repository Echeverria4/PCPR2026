import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-a03",
  resumo: {
    ideia:
      "O “se… então” (condicional) é o conectivo mais cobrado. Ele só é falso quando a primeira parte é verdadeira e a segunda é falsa. Dele saem a negação, as frases equivalentes, as deduções válidas e as ideias de condição suficiente e necessária. A aula fecha com o “ou… ou” (ou exclusivo) e o “se, e somente se” (bicondicional).",
    itens: [
      {
        termo: "Condicional (p → q)",
        faz: "“Se p, então q.” p é o antecedente e q é o consequente. Só é falso em um caso: p verdadeiro e q falso.",
        pista: "Promessa quebrada: choveu (p V) e eu não levei o guarda-chuva (q F). Em qualquer outro caso, não houve mentira.",
      },
      {
        termo: "Antecedente falso",
        faz: "Se a primeira parte é falsa, o condicional é verdadeiro, seja qual for a segunda. O mesmo acontece quando a segunda parte é verdadeira.",
      },
      {
        termo: "Negação do condicional",
        faz: "A negação de “Se p, então q” é “p e não q”. Mantém a primeira, nega a segunda e troca o “se… então” por “e”.",
        pista: "A negação de um “se… então” nunca começa com “se”.",
      },
      {
        termo: "Equivalências do condicional",
        faz: "“Se p, então q” equivale a “Se não q, então não p” (contrapositiva) e a “Não p ou q”.",
        pista: "Contrapositiva: inverte a ordem e nega as duas partes. Só inverter ou só negar não serve.",
      },
      {
        termo: "Deduções válidas",
        faz: "“Vai afirmando”: se p é verdade, q é verdade. “Volta negando”: se q é falso, p é falso.",
      },
      {
        termo: "Deduções inválidas",
        faz: "Afirmar a segunda parte não prova a primeira (usei guarda-chuva ≠ choveu). Negar a primeira não prova nada sobre a segunda (não choveu ≠ não usei guarda-chuva).",
      },
      {
        termo: "Cadeia de condicionais",
        faz: "Se p → q e q → r, então p → r. Com a última parte falsa, volta negando até o começo da cadeia.",
      },
      {
        termo: "Condição suficiente e necessária",
        faz: "Em “Se p, então q”, p é condição suficiente para q, e q é condição necessária para p.",
        pista: "Suficiente vem antes da seta; necessária vem depois.",
      },
      {
        termo: "Quantificadores como condicional",
        faz: "“Todo A é B” = “Se é A, então é B”. “Nenhum A é B” = “Se é A, então não é B”.",
      },
      {
        termo: "Ou exclusivo (p ⊕ q)",
        faz: "“Ou p, ou q.” É verdadeiro quando exatamente uma das partes é verdadeira; as duas não podem ocorrer juntas.",
      },
      {
        termo: "Bicondicional (p ↔ q)",
        faz: "“p se, e somente se, q.” É verdadeiro quando as duas partes têm o mesmo valor: as duas V ou as duas F. Equivale a (p → q) e (q → p).",
      },
      {
        termo: "Um nega o outro",
        faz: "A negação do ou exclusivo é o bicondicional, e vice-versa. Além disso, “Ou p, ou q” equivale a “p se, e somente se, não q”.",
      },
    ],
  },
  questoes: [
    {
      topico: "Condicional",
      subassunto: "Negação do condicional",
      dificuldade: 4,
      raciocinio: "Manter a primeira parte, negar a segunda e ligar com “e”.",
      enunciado: "A negação lógica de “Se o motorista bebeu, então ele não pode dirigir” é:",
      alternativas: [
        "Se o motorista não bebeu, então ele pode dirigir.",
        "O motorista não bebeu e não pode dirigir.",
        "O motorista não bebeu ou pode dirigir.",
        "Se o motorista pode dirigir, então ele não bebeu.",
        "O motorista bebeu e pode dirigir.",
      ],
      correta: 4,
      explicacao: "O condicional só é falso quando a primeira parte é verdadeira e a segunda é falsa. Negar “não pode dirigir” dá “pode dirigir”. Fica: “bebeu e pode dirigir”.",
      explicacaoErradas:
        "“Se pode dirigir, então não bebeu” é a contrapositiva: diz o mesmo que a frase original, não a nega. As outras negam a primeira parte, que deveria ser mantida.",
      pegadinha: "A negação de um condicional não tem “se… então”.",
      conhecimento: "não (p → q) = p e não q.",
    },
    {
      topico: "Condicional",
      subassunto: "Contrapositiva",
      dificuldade: 5,
      raciocinio: "Inverter a ordem e negar as duas partes ao mesmo tempo.",
      enunciado: "Uma frase logicamente equivalente a “Se não está chovendo, então o soldado faz a ronda a pé” é:",
      alternativas: [
        "Se está chovendo, então o soldado não faz a ronda a pé.",
        "Se o soldado faz a ronda a pé, então não está chovendo.",
        "Se o soldado não faz a ronda a pé, então está chovendo.",
        "Não está chovendo, e mesmo assim o soldado faz a ronda a pé.",
        "Não está chovendo ou o soldado faz a ronda a pé.",
      ],
      correta: 2,
      explicacao: "Contrapositiva: inverte as partes e nega as duas. “Não faz a ronda a pé” vira a primeira parte; “não está chovendo” negada vira “está chovendo”.",
      explicacaoErradas:
        "Só negar as duas partes (primeira opção) ou só inverter a ordem (segunda) não gera frase equivalente. A versão com “ou” deveria ser “Está chovendo ou o soldado faz a ronda a pé”: a primeira parte precisa ser negada.",
      pegadinha: "Negar “não está chovendo” dá “está chovendo”. O duplo “não” confunde muita gente.",
      conhecimento: "p → q = ¬q → ¬p = ¬p ∨ q.",
    },
    {
      topico: "Condicional",
      subassunto: "Argumento válido",
      dificuldade: 5,
      raciocinio: "Só valem “vai afirmando” (afirmo a primeira parte) e “volta negando” (nego a segunda).",
      enunciado: "Assinale o único argumento válido.",
      alternativas: [
        "Se o alarme dispara, a equipe é acionada. A equipe não foi acionada. Logo, o alarme não disparou.",
        "Se o alarme dispara, a equipe é acionada. A equipe foi acionada. Logo, o alarme disparou.",
        "Se o alarme dispara, a equipe é acionada. O alarme não disparou. Logo, a equipe não foi acionada.",
        "Se o alarme dispara, a equipe é acionada. A equipe foi acionada. Logo, o alarme não disparou.",
        "Se o alarme dispara, a equipe é acionada. O alarme não disparou. Logo, a equipe ainda foi acionada.",
      ],
      correta: 0,
      explicacao: "Se a equipe não foi acionada (segunda parte falsa), o alarme não pode ter disparado: se tivesse, a equipe teria sido acionada. É o “volta negando”.",
      explicacaoErradas:
        "Saber que a equipe foi acionada não diz nada sobre o alarme: ela pode ter sido chamada por outro motivo. Saber que o alarme não disparou também não diz nada sobre a equipe.",
      pegadinha: "A segunda opção parece lógica no dia a dia, mas é um erro clássico: afirmar a segunda parte não prova a primeira.",
      conhecimento: "Válidos: p → q, p ⊢ q; p → q, ¬q ⊢ ¬p. Inválidos: afirmar q ou negar p.",
    },
    {
      topico: "Condicional",
      subassunto: "Condição necessária e suficiente",
      dificuldade: 5,
      raciocinio: "Escrever a frase como condicional: a condição necessária vai depois da seta.",
      enunciado:
        "Considere verdadeira a afirmação: “Ser aprovado no exame de saúde é condição necessária para ser incluído no curso de formação”. Analise as afirmações.\nI. Ser aprovado no exame de saúde é condição suficiente para ser incluído no curso.\nII. Se alguém foi incluído no curso, então foi aprovado no exame de saúde.\nIII. Se alguém não foi aprovado no exame de saúde, então não foi incluído no curso.\nIV. Ser incluído no curso é condição necessária para ter sido aprovado no exame de saúde.\nEstá correto o que se afirma em",
      alternativas: ["Apenas II.", "Apenas I e III.", "Apenas I, II e III.", "Apenas II e III.", "Apenas II, III e IV."],
      correta: 3,
      explicacao: "A frase é “Se incluído, então aprovado”. II é a própria frase escrita com “se… então”; III é a contrapositiva dela.",
      explicacaoErradas:
        "I está errada: passar no exame é exigido, mas não garante a vaga, pois pode haver outras etapas. IV está errada: ser incluído é condição suficiente (e não necessária) para ter passado no exame.",
      pegadinha: "Necessário não é suficiente: precisar de algo não quer dizer que só ele baste.",
      conhecimento: "Em p → q: p é suficiente para q; q é necessária para p.",
    },
    {
      topico: "Condicional",
      subassunto: "“Todo” escrito como condicional",
      dificuldade: 5,
      raciocinio: "Transformar “Todo A é B” em “Se é A, então é B” e achar a contrapositiva.",
      enunciado: "Uma frase logicamente equivalente a “Todo policial do turno da noite usa colete” é:",
      alternativas: [
        "Se alguém usa colete, então é policial do turno da noite.",
        "Se alguém não usa colete, então não é policial do turno da noite.",
        "Se alguém não é policial do turno da noite, então não usa colete.",
        "Algum policial do turno da noite não usa colete.",
        "Quem usa colete é, necessariamente, um policial do turno da noite.",
      ],
      correta: 1,
      explicacao: "“Todo policial da noite usa colete” = “Se é da noite, então usa colete”. A contrapositiva é: “Se não usa colete, então não é da noite”.",
      explicacaoErradas:
        "A primeira e a última invertem a frase: outros policiais também podem usar colete. A terceira nega sem inverter. “Algum… não usa” é a negação da frase, não um equivalente.",
      pegadinha: "“Todo A é B” não quer dizer que todo B seja A.",
      conhecimento: "“Todo A é B” = “Se A, então B”. “Nenhum A é B” = “Se A, então não B”.",
    },
    {
      topico: "Ou exclusivo e bicondicional",
      subassunto: "Negação do ou exclusivo",
      dificuldade: 5,
      raciocinio: "Lembrar que o ou exclusivo e o bicondicional são a negação um do outro.",
      enunciado: "A negação lógica de “Ou o sargento viaja, ou o tenente viaja” é:",
      alternativas: [
        "O sargento não viaja e o tenente não viaja.",
        "O sargento viaja se, e somente se, o tenente viaja.",
        "Ou o sargento não viaja, ou o tenente não viaja.",
        "Se o sargento viaja, então o tenente não viaja.",
        "O sargento viaja se, e somente se, o tenente não viaja.",
      ],
      correta: 1,
      explicacao: "O ou exclusivo é verdadeiro quando só um viaja. A negação é verdadeira quando os dois viajam ou nenhum viaja, que é exatamente o bicondicional.",
      explicacaoErradas:
        "“Nenhum viaja” cobre só um dos dois casos da negação. “Ou não viaja um, ou não viaja o outro” e “sargento ↔ tenente não viaja” têm a mesma tabela da frase original, então dizem o mesmo que ela.",
      pegadinha: "Colocar “não” nas duas partes de um ou exclusivo não muda nada: continua valendo “só um dos dois”.",
      conhecimento: "¬(p ⊕ q) = p ↔ q. E p ⊕ q = p ↔ ¬q.",
    },
    {
      topico: "Condicional",
      subassunto: "Condicional falso",
      dificuldade: 5,
      raciocinio: "Condicional falso dá os valores das duas partes; depois resolver o “ou”.",
      enunciado:
        "Considere falsa a proposição “Se o cabo foi escalado, então a viatura saiu” e verdadeira a proposição “A viatura saiu ou o rádio falhou”. Julgue as afirmações, marcando V para verdadeiro e F para falso.\n( ) O cabo foi escalado.\n( ) A viatura não saiu.\n( ) O rádio falhou.\n( ) “Se o rádio falhou, então o cabo não foi escalado” é verdadeira.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, F, V, F.", "V, V, F, F.", "F, V, V, V.", "V, V, V, F.", "V, V, V, V."],
      correta: 3,
      explicacao: "Condicional falso: o cabo foi escalado (V) e a viatura não saiu (V). Com a viatura parada, o “ou” só é verdadeiro se o rádio falhou (V). Na última, o rádio falhou (V) e o cabo foi escalado, então “não foi escalado” é F: V → F = F.",
      explicacaoErradas:
        "Marcar F na segunda é confundir a frase com o fato: a viatura não saiu, então “A viatura não saiu” é verdadeira. Marcar V na última é esquecer que ela tem a primeira parte V e a segunda F.",
      pegadinha: "A segunda afirmação já vem negada. Julgue o que ela diz, não o que a viatura fez.",
      conhecimento: "Condicional falso é a única situação que dá certeza sobre as duas partes.",
    },
    {
      topico: "Condicional",
      subassunto: "Cadeia de condicionais",
      dificuldade: 4,
      raciocinio: "Partir do fato negado no final e voltar negando pela cadeia.",
      enunciado:
        "Considere verdadeiras as afirmações: “Se o soldado treina, então passa no teste físico”; “Se o soldado passa no teste físico, então é nomeado”; “O soldado não foi nomeado”. Conclui-se que",
      alternativas: [
        "o soldado não passou no teste físico e não treinou.",
        "o soldado treinou, mas não passou no teste físico.",
        "o soldado passou no teste físico, mas não treinou.",
        "o soldado não treinou, mas pode ter passado no teste físico.",
        "nada se pode concluir sobre o treino do soldado.",
      ],
      correta: 0,
      explicacao: "Não foi nomeado → volta negando: não passou no teste físico. Não passou → volta negando: não treinou.",
      explicacaoErradas:
        "Se ele tivesse treinado, teria passado; se tivesse passado, teria sido nomeado. Qualquer opção em que ele treinou ou passou contradiz o fato de não ter sido nomeado.",
      pegadinha: "“Nada se pode concluir” só vale quando o fato conhecido é a primeira parte negada ou a última afirmada.",
      conhecimento: "Cadeia: p → q, q → r, então p → r. Com r falso, p e q são falsos.",
    },
    {
      topico: "Condicional",
      subassunto: "Condicional escrito com “ou”",
      dificuldade: 5,
      raciocinio: "Usar p → q = não p ou q.",
      enunciado: "Uma frase logicamente equivalente a “Se o veículo está regular, então não é apreendido” é:",
      alternativas: [
        "O veículo está regular e não é apreendido.",
        "O veículo está regular ou é apreendido.",
        "O veículo não está regular ou não é apreendido.",
        "O veículo não está regular e é apreendido.",
        "Se o veículo é apreendido, então ele está regular.",
      ],
      correta: 2,
      explicacao: "p → q = ¬p ∨ q. Com p = “está regular” e q = “não é apreendido”: “não está regular ou não é apreendido”.",
      explicacaoErradas:
        "As opções com “e” afirmam fatos que o condicional não garante. “Está regular ou é apreendido” não nega a primeira parte. “Se é apreendido, então está regular” não equivale à frase: a contrapositiva certa termina em “então não está regular”.",
      pegadinha: "Na troca pelo “ou”, só a primeira parte é negada; a segunda fica como está.",
      conhecimento: "Três formas da mesma ideia: p → q; ¬q → ¬p; ¬p ∨ q.",
    },
    {
      topico: "Ou exclusivo e bicondicional",
      subassunto: "Propriedades",
      dificuldade: 5,
      raciocinio: "Montar mentalmente a tabela de cada conectivo e comparar.",
      enunciado:
        "Analise as afirmações.\nI. “p se, e somente se, q” é verdadeira quando p e q têm o mesmo valor lógico.\nII. “Ou p, ou q” é verdadeira quando exatamente uma das partes é verdadeira.\nIII. “p se, e somente se, q” equivale a “Se p, então q, e se q, então p”.\nIV. A negação de “p se, e somente se, q” é “não p se, e somente se, não q”.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I e II.", "Apenas II e IV.", "Apenas II, III e IV.", "I, II, III e IV.", "Apenas I, II e III."],
      correta: 4,
      explicacao: "I e II são as definições. III: o bicondicional é um condicional nos dois sentidos.",
      explicacaoErradas:
        "IV está errada: negar as duas partes de um bicondicional não muda o resultado, porque elas continuam iguais ou diferentes como antes. A negação é o ou exclusivo.",
      pegadinha: "No bicondicional, negar as duas partes dá uma frase equivalente, não a negação.",
      conhecimento: "¬(p ↔ q) = p ⊕ q. E ¬p ↔ ¬q = p ↔ q.",
    },
  ],
};
