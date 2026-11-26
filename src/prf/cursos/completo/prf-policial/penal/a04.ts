import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-04",
  resumo: {
    ideia:
      "A aula fecha a teoria do crime com a culpabilidade: o que ela é, as teorias e os três elementos (imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa), com as causas que excluem cada um. Depois trata dos erros: erro de tipo, descriminantes putativas, erro de proibição e os erros acidentais (sobre o objeto, sobre a pessoa, na execução, resultado diverso do pretendido e sobre o nexo causal).",
    itens: [
      {
        parte: "1. Culpabilidade: conceito e teorias",
        termo: "Conceito",
        faz: "Juízo de reprovação sobre o agente que praticou o fato típico e ilícito: pergunta-se se dava para exigir dele outro comportamento, levando em conta suas condições pessoais.",
      },
      {
        termo: "Teorias da culpabilidade",
        faz: "Psicológica: culpabilidade era o dolo ou a culpa, com a imputabilidade como pressuposto. Psicológico-normativa: somou a exigibilidade de conduta diversa, mas manteve o dolo dentro da culpabilidade. Normativa pura (finalista): o dolo e a culpa vão para a conduta, e a culpabilidade fica com imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa.",
      },
      {
        termo: "Teoria limitada (adotada pelo CP)",
        faz: "É uma versão da normativa pura. A diferença está na descriminante putativa por erro sobre a situação de fato: a teoria limitada a trata como erro de tipo (art. 20, § 1º); a extremada trataria tudo como erro de proibição.",
      },
      {
        parte: "2. Imputabilidade",
        termo: "Conceito e critérios",
        faz: "Capacidade de entender que o fato é ilícito e de agir conforme esse entendimento, medida no momento da conduta. Critério biológico: basta a condição (adotado na menoridade). Biopsicológico: exige a condição e, no caso concreto, a falta de entendimento ou de autocontrole (adotado na doença mental e na embriaguez fortuita).",
      },
      {
        termo: "Menoridade (art. 27)",
        faz: "Menores de 18 anos são inimputáveis, pelo critério puramente biológico: não importa se entendiam o que faziam. Ficam sujeitos ao ECA.",
      },
      {
        termo: "Doença mental (art. 26)",
        faz: "É isento de pena quem, por doença mental ou desenvolvimento mental incompleto ou retardado, era, ao tempo do fato, inteiramente incapaz de entender o caráter ilícito ou de se determinar de acordo com esse entendimento. Recebe absolvição imprópria, com medida de segurança.",
      },
      {
        termo: "Semi-imputabilidade (art. 26, parágrafo único)",
        faz: "Se a capacidade era só parcial, o agente é condenado, com pena reduzida de 1/3 a 2/3. Se precisar de tratamento especial, o juiz pode trocar a pena por medida de segurança (sistema vicariante: uma ou outra, nunca as duas).",
      },
      {
        termo: "Emoção, paixão e embriaguez (art. 28)",
        faz: "Emoção e paixão não excluem a imputabilidade (no máximo, atenuam ou privilegiam). Embriaguez voluntária ou culposa, por álcool ou substância de efeito parecido, também não exclui: o agente responde normalmente.",
      },
      {
        termo: "Embriaguez fortuita e actio libera in causa",
        faz: "Só a embriaguez completa por caso fortuito ou força maior (ex.: alguém põe droga na bebida sem a pessoa saber) que deixa o agente inteiramente incapaz isenta de pena; se incompleta, a pena cai de 1/3 a 2/3. Na embriaguez voluntária vale a actio libera in causa: a imputabilidade é vista no momento em que o agente, livre, escolheu se embriagar.",
        pista: "Embriaguez preordenada (beber para tomar coragem e cometer o crime) é agravante (art. 61, II, l). Embriaguez patológica (doença) é tratada como doença mental.",
      },
      {
        parte: "3. Potencial consciência da ilicitude",
        termo: "Conceito",
        faz: "O agente precisa ter, ao menos, a possibilidade de saber que o fato é proibido, considerando suas condições (escolaridade, meio em que vive). Não se exige que conheça a lei, só que pudesse perceber que a conduta é errada. Quem age achando que é lícito comete erro de proibição.",
      },
      {
        parte: "4. Exigibilidade de conduta diversa",
        termo: "Coação moral irresistível (art. 22)",
        faz: "Alguém obriga o agente a cometer o crime sob ameaça grave e impossível de resistir (ex.: “assine ou mato seu filho”). O coagido fica isento de pena; só o coator responde, e com a pena aumentada. Se a coação era resistível, o coagido responde, com atenuante (art. 65, III, c).",
        pista: "Coação física irresistível não é caso de culpabilidade: elimina a própria conduta (fato atípico).",
      },
      {
        termo: "Obediência hierárquica (art. 22)",
        faz: "Quem cumpre ordem não manifestamente ilegal de superior hierárquico fica isento de pena; só o superior responde. Exige relação de direito público (prevalece que não vale entre particulares, como patrão e empregado). Se a ordem era claramente ilegal, os dois respondem.",
      },
      {
        termo: "Causas supralegais",
        faz: "A doutrina admite outras situações em que não era possível exigir conduta diferente, mesmo sem previsão expressa na lei, como base para afastar a culpabilidade (ex.: certos casos de excesso por medo intenso).",
      },
      {
        parte: "5. Erro de tipo",
        termo: "Erro de tipo essencial (art. 20, caput)",
        faz: "O agente se engana sobre um elemento do tipo: não sabe o que está fazendo (ex.: leva a mala de outra pessoa achando que é a sua). Sempre exclui o dolo. Se inevitável (escusável), exclui também a culpa e o fato fica atípico. Se evitável (inescusável), responde por crime culposo, se houver previsão.",
      },
      {
        termo: "Erro provocado por terceiro (art. 20, § 2º)",
        faz: "Responde pelo crime quem provocou o erro (ex.: o médico que entrega à enfermeira injeção com veneno dizendo ser remédio). Quem foi enganado pode não responder ou responder por culpa, conforme o erro fosse evitável ou não.",
      },
      {
        termo: "Descriminantes putativas por erro de fato (art. 20, § 1º)",
        faz: "O agente imagina uma situação que, se existisse, tornaria a conduta legítima (ex.: pensa que o vizinho vai sacar uma arma e atira, mas era um celular). Se o erro era plenamente justificado, fica isento de pena. Se evitável, responde por culpa, se houver crime culposo: é a culpa imprópria.",
      },
      {
        parte: "6. Erro de proibição",
        termo: "Desconhecimento da lei × erro sobre a ilicitude (art. 21)",
        faz: "Desconhecer a lei é inescusável: não livra ninguém, só atenua a pena (art. 65, II). Já o erro sobre a ilicitude do fato (o agente sabe o que faz, mas acha que é permitido) isenta de pena se inevitável e reduz a pena de 1/6 a 1/3 se evitável.",
        pista: "Erro de tipo: o agente não sabe o que faz. Erro de proibição: sabe o que faz, mas acha que pode.",
      },
      {
        termo: "Espécies de erro de proibição",
        faz: "Direto: o agente acha que a conduta não é proibida (ex.: turista que acha permitido algo proibido aqui). Indireto: sabe que a conduta é proibida em regra, mas acha que existe uma permissão a seu favor ou erra sobre os limites dela (descriminante putativa por erro de proibição). Mandamental: erro sobre o dever de agir nos crimes omissivos.",
      },
      {
        termo: "Quando o erro é evitável",
        faz: "Considera-se evitável o erro quando o agente atua sem consciência da ilicitude, mas lhe era possível, nas circunstâncias, ter ou atingir essa consciência (art. 21, parágrafo único).",
      },
      {
        parte: "7. Erros acidentais",
        termo: "Erro acidental: regra geral",
        faz: "O erro recai sobre detalhes que não mudam o crime: o agente sabe o que faz e que é proibido. Não exclui dolo nem culpa; ele responde normalmente.",
      },
      {
        termo: "Erro sobre o objeto",
        faz: "O agente quer uma coisa e atinge outra (ex.: furta açúcar pensando ser farinha). Responde pelo crime praticado; o erro é irrelevante.",
      },
      {
        termo: "Erro sobre a pessoa (art. 20, § 3º)",
        faz: "O agente confunde a vítima: atinge quem está ali achando que é outra pessoa. Consideram-se as condições da vítima que ele queria atingir, não as da atingida (ex.: quer matar o pai, mata um estranho parecido: responde com a agravante de crime contra ascendente).",
      },
      {
        termo: "Erro na execução (aberratio ictus, art. 73)",
        faz: "Não há confusão de pessoa, mas falha no golpe: mira em A e, por erro de pontaria, acerta B. Responde como se tivesse atingido a vítima pretendida. Se atingir as duas, aplica-se o concurso formal (art. 70).",
        pista: "Erro sobre a pessoa = confusão de identidade. Aberratio ictus = erro de mira.",
      },
      {
        termo: "Resultado diverso do pretendido (aberratio criminis, art. 74)",
        faz: "O agente quer um resultado e, por erro na execução, produz outro de natureza diferente (ex.: joga uma pedra para quebrar a vitrine e fere uma pessoa). Responde pelo resultado produzido a título de culpa, se previsto como crime culposo. Se produzir os dois, concurso formal.",
      },
      {
        termo: "Erro sobre o nexo causal (aberratio causae)",
        faz: "O resultado acontece, mas por um caminho diferente do planejado (ex.: empurra a vítima da ponte para que se afogue, e ela morre ao bater a cabeça na pilastra). O agente responde pelo crime consumado; o erro é irrelevante. Inclui o dolo geral, em que o agente acha que já matou e, ao esconder o “corpo”, é que causa a morte.",
      },
    ],
    cuidado:
      "Erro de tipo inevitável = fato atípico; erro de proibição inevitável = isenção de pena. No erro sobre a pessoa e na aberratio ictus, vale a vítima pretendida; na aberratio criminis, o resultado diverso responde por culpa.",
  },
  questoes: [
    {
      topico: "Erro de tipo",
      subassunto: "Erro evitável em crime sem forma culposa",
      dificuldade: 5,
      raciocinio: "Erro evitável abre a culpa, mas só se a lei prever o crime culposo.",
      enunciado:
        "Na parada de um ônibus, um passageiro pega por engano uma mochila idêntica à sua e a leva. Com um pouco mais de atenção, teria notado a diferença. Quanto ao crime de furto, o passageiro",
      alternativas: [
        "responde por furto culposo, porque o erro era evitável",
        "tem a pena reduzida de um sexto a um terço, pelo art. 21",
        "responde por furto simples, pois o erro sobre a coisa é irrelevante",
        "não responde, pois o erro exclui o dolo e não há furto culposo",
        "fica isento de pena por descriminante putativa do art. 20, § 1º",
      ],
      correta: 3,
      explicacao:
        "O passageiro errou sobre a elementar “coisa alheia”: erro de tipo. Mesmo evitável, exclui o dolo, e só restaria a punição por culpa, que não existe no furto. O fato é atípico.",
      explicacaoErradas:
        "“Furto culposo” não existe no CP. “Um sexto a um terço” é a redução do erro de proibição. “Erro sobre a coisa” aqui atinge a elementar do tipo. A “descriminante putativa” trata de excludente imaginada.",
      pegadinha: "Evitável não quer dizer punível: depende de haver forma culposa.",
      conhecimento:
        "Erro de tipo provocado por terceiro: responde quem determinou o erro (art. 20, § 2º).",
    },
    {
      topico: "Erro de proibição",
      subassunto: "Erro evitável e desconhecimento da lei",
      dificuldade: 4,
      raciocinio: "Sabe o que faz, mas pensa que pode. Era possível se informar?",
      enunciado:
        "Um turista estrangeiro, vindo de país onde a conduta é livre, faz no Brasil algo que aqui é crime. Sabe bem o que faz, mas acredita que é lícito. Apurou-se que, com uma simples consulta, ele teria notado a proibição. Pelo art. 21 do CP,",
      alternativas: [
        "a pena pode ser diminuída de um sexto a um terço",
        "o agente fica isento de pena, por ser estrangeiro",
        "o dolo é excluído, com punição apenas por culpa",
        "a pena pode ser reduzida de um a dois terços",
        "não há efeito algum, pois a lei se presume conhecida",
      ],
      correta: 0,
      explicacao:
        "Falta ao turista a consciência da ilicitude, mas o erro era evitável. O art. 21 prevê, nesse caso, a diminuição de um sexto a um terço. Se fosse inevitável, haveria isenção de pena.",
      explicacaoErradas:
        "“Isento” seria o erro inevitável, e ser “estrangeiro” não basta. “Excluído o dolo” é efeito do erro de tipo. “Um a dois terços” é a fração de outros institutos. “Não há efeito” confunde o erro com o simples desconhecimento da lei.",
      pegadinha: "“Um sexto a um terço” é a fração própria do erro de proibição evitável.",
      conhecimento:
        "O parágrafo único do art. 21 considera evitável o erro quando era possível, nas circunstâncias, ter ou atingir essa consciência.",
    },
    {
      topico: "Erro de tipo",
      subassunto: "Descriminante putativa por erro de fato",
      dificuldade: 5,
      raciocinio: "A teoria limitada separa erro sobre o fato de erro sobre a regra.",
      enunciado:
        "Numa abordagem noturna, depois de aviso de suspeito armado, um policial vê o condutor levar a mão à cintura e puxar um objeto escuro. Ele atira e fere o condutor. Era um celular. Reconhecido que o erro foi plenamente justificado pelas circunstâncias,",
      alternativas: [
        "há legítima defesa real, pois o policial agiu com a intenção de se defender",
        "o policial responde por lesão culposa, pois todo erro desse tipo gera culpa",
        "há excesso culposo, punível pelo parágrafo único do art. 23 do Código",
        "aplica-se a redução de um sexto a um terço, como no erro de proibição",
        "o policial fica isento de pena pela descriminante putativa do art. 20, § 1º",
      ],
      correta: 4,
      explicacao:
        "O policial supôs uma situação de fato que, se existisse, tornaria a ação legítima. Com erro plenamente justificado, o § 1º do art. 20 isenta de pena. Se o erro derivasse de culpa, e o fato fosse punível como culposo, haveria punição por culpa.",
      explicacaoErradas:
        "“Real” não é, porque a agressão não existia. “Todo erro” ignora o erro justificado. “Excesso” pressupõe agressão real. A “redução” é do erro de proibição, e o caso é de erro sobre o fato.",
      pegadinha: "Na teoria limitada, errar sobre o fato segue o art. 20; errar sobre os limites da excludente segue o art. 21.",
      conhecimento:
        "Se o policial acreditasse que a lei autoriza atirar em quem foge, o erro seria de proibição indireto, ligado à existência da excludente.",
    },
    {
      topico: "Erro acidental",
      subassunto: "Erro sobre a pessoa",
      dificuldade: 5,
      raciocinio: "Considere a vítima desejada, e não a vítima real.",
      enunciado:
        "Querendo matar o próprio pai, um homem aguarda à noite na porta da casa e atira em quem chega, certo de que era ele. Era um vizinho, sem nenhum parentesco. Sobre a tipificação e a agravante do art. 61, II, “e”, do CP (crime contra ascendente),",
      alternativas: [
        "responde por homicídio culposo do vizinho, por erro de tipo",
        "responde por tentativa contra o pai e por homicídio culposo do vizinho",
        "responde por homicídio do vizinho, com a agravante de crime contra ascendente",
        "responde por homicídio do vizinho, sem a agravante, porque não havia parentesco",
        "responde por homicídio doloso, com a pena reduzida pelo erro inevitável",
      ],
      correta: 2,
      explicacao:
        "Pelo art. 20, § 3º, o erro quanto à pessoa não isenta de pena, e consideram-se as condições da vítima pretendida. O homem responde pelo homicídio doloso, com a agravante de crime contra ascendente.",
      explicacaoErradas:
        "“Culposo” e “erro de tipo” ignoram que o erro acidental mantém o dolo. A “tentativa contra o pai” não houve: ele nem estava lá. “Sem a agravante” olha a vítima real. “Reduzida” não tem base, pois esse erro não muda a pena.",
      pegadinha: "A vítima real some da conta: suas qualidades não entram.",
      conhecimento:
        "No erro sobre a pessoa, a vítima visada nem corre perigo. No erro na execução, ela corre perigo, mas o golpe falha.",
    },
    {
      topico: "Erro acidental",
      subassunto: "Erro na execução com duplo resultado",
      dificuldade: 5,
      raciocinio: "Atingiu as duas pessoas: é o art. 73 mandando para o art. 70.",
      enunciado:
        "Com intenção de matar o desafeto, um homem atira nele em um posto de combustíveis. Um dos disparos o mata, e o mesmo projétil, ao atravessá-lo, fere um frentista, que ele não queria atingir nem aceitou atingir. Pelo art. 73 do CP, aplica-se",
      alternativas: [
        "somente o homicídio, pois a lesão fica absorvida pelo crime mais grave",
        "a regra do concurso formal, com o aumento do art. 70 do Código",
        "o concurso material, com a soma das penas de homicídio e lesão",
        "o crime continuado, porque foram atingidas vítimas no mesmo local",
        "a tentativa de homicídio contra o frentista, em razão do dolo geral",
      ],
      correta: 1,
      explicacao:
        "Se além da vítima desejada outra também é atingida, a parte final do art. 73 manda aplicar o art. 70: concurso formal, com a pena mais grave aumentada de um sexto até metade.",
      explicacaoErradas:
        "“Absorvida” ignora o segundo resultado. A soma do “concurso material” valeria com desígnios autônomos. “Crime continuado” exige várias ações. “Tentativa contra o frentista” exigiria dolo quanto a ele, e o enunciado o afasta.",
      pegadinha: "Sem aceitar o risco da segunda vítima, o concurso é formal próprio.",
      conhecimento:
        "Se o agente também quisesse atingir a segunda pessoa, haveria desígnios autônomos, e as penas seriam somadas (art. 70, parte final).",
    },
    {
      topico: "Erro acidental",
      subassunto: "Resultado diverso do pretendido",
      dificuldade: 5,
      raciocinio: "O art. 74 troca coisa por pessoa, e não pessoa por coisa.",
      enunciado:
        "Dois casos. No primeiro, alguém joga uma pedra para quebrar o vidro de uma viatura, erra e fere um policial. No segundo, alguém joga uma pedra para ferir um policial, erra e quebra o vidro da viatura. Pelo art. 74 do CP,",
      alternativas: [
        "os dois respondem por dano doloso, pois a coisa pública foi visada",
        "o primeiro responde por lesão dolosa, e o segundo, por dano culposo",
        "os dois respondem por lesão culposa, porque houve erro na execução",
        "o primeiro responde por tentativa de dano, e o segundo, por dano",
        "o primeiro comete lesão culposa, e o segundo, tentativa de lesão",
      ],
      correta: 4,
      explicacao:
        "No primeiro caso, sobreveio resultado diverso, e há lesão culposa. No segundo, não existe dano culposo, então sobra só a tentativa de lesão corporal, crime pretendido.",
      explicacaoErradas:
        "“Dano doloso” ignora que o segundo agente não mirou a coisa. “Dano culposo” não existe no CP. “Lesão culposa” no segundo caso inventa uma lesão. “Tentativa de dano” no primeiro é crime que a lesão culposa costuma absorver pela regra do art. 74.",
      pegadinha: "Sem crime culposo do resultado atingido, a punição recua para a tentativa do crime querido.",
      conhecimento:
        "Se ocorrem o resultado pretendido e o outro, aplica-se o concurso formal (art. 74, parte final).",
    },
    {
      topico: "Exigibilidade de conduta diversa",
      subassunto: "Coação moral irresistível e coação física",
      dificuldade: 5,
      raciocinio: "Física tira a conduta. Moral tira a culpabilidade.",
      enunciado:
        "Criminosos prendem a família de um caminhoneiro e o obrigam, sob ameaça de morte real e iminente dos parentes, a transportar drogas pela rodovia. Em outro caso, um homem forte segura a mão de alguém e aperta com ela o gatilho. A análise correta é:",
      alternativas: [
        "os dois casos excluem a tipicidade, pois não há vontade",
        "os dois casos excluem a culpabilidade, pelo art. 22 do CP",
        "o primeiro exclui a ilicitude, pelo estado de necessidade",
        "o primeiro exclui a culpabilidade, e o segundo, a própria conduta",
        "o primeiro apenas atenua a pena, e o segundo exclui a culpabilidade",
      ],
      correta: 3,
      explicacao:
        "Na coação moral irresistível, há vontade viciada, e não se pode exigir outra conduta: só o coator é punido (art. 22). Na coação física irresistível, não há vontade alguma, e falta a conduta, então não há fato típico.",
      explicacaoErradas:
        "“Não há vontade” não vale para o caminhoneiro, que escolheu sob ameaça. “Os dois” pela culpabilidade erra quanto à física. “Estado de necessidade” não é a saída do art. 22. “Apenas atenua” descreve a coação resistível.",
      pegadinha: "O art. 22 fala em coação irresistível sem dizer “física”: a doutrina o lê como moral.",
      conhecimento:
        "Coação resistível só atenua a pena (art. 65, III, “c”), e o coator tem pena agravada (art. 62, II).",
    },
    {
      topico: "Exigibilidade de conduta diversa",
      subassunto: "Obediência hierárquica",
      dificuldade: 4,
      raciocinio: "Ordem claramente ilegal não se cumpre.",
      enunciado:
        "O chefe de uma equipe manda um policial subordinado forjar um flagrante, colocando droga no carro de um motorista inocente. O subordinado sabe que a ordem é ilegal, mas a cumpre por medo de punição disciplinar. Pelo art. 22 do CP,",
      alternativas: [
        "os dois respondem, porque a ordem era manifestamente ilegal",
        "só o chefe responde, pela regra da obediência hierárquica",
        "só o subordinado responde, pois foi quem praticou o ato",
        "o subordinado fica isento, porque há relação de direito público",
        "o chefe responde por culpa, e o subordinado, pelo crime doloso",
      ],
      correta: 0,
      explicacao:
        "A obediência hierárquica só beneficia quem cumpre ordem não manifestamente ilegal. Sendo evidente a ilegalidade, superior e subordinado respondem. Para o subordinado, pode haver a atenuante do art. 65, III, “c”.",
      explicacaoErradas:
        "“Só o chefe” exigiria ordem aparentemente legal. “Só o subordinado” esquece o autor da ordem. “Relação de direito público” é necessária, mas não basta. “Por culpa” não cabe a quem ordena a fraude.",
      pegadinha: "“Medo de punição” não transforma ordem ilegal em ordem exigível.",
      conhecimento:
        "A excludente não alcança relações privadas, como as de empregado e patrão ou as de família.",
    },
    {
      topico: "Imputabilidade",
      subassunto: "Embriaguez fortuita e actio libera in causa",
      dificuldade: 5,
      raciocinio: "Olhe a origem e o grau da embriaguez.",
      enunciado:
        "Numa festa, colocam sem que um convidado saiba uma substância na bebida dele. Totalmente incapaz de entender o que fazia, ele agride alguém. Outro convidado bebe de propósito para criar coragem e também agride alguém. Pelo art. 28 do CP,",
      alternativas: [
        "os dois ficam isentos, pois estavam incapazes ao tempo do fato",
        "os dois respondem, porque a embriaguez nunca isenta de pena",
        "o primeiro fica isento, e o segundo responde com agravante",
        "o primeiro tem a pena reduzida, e o segundo fica isento de pena",
        "o primeiro responde por culpa, e o segundo, por dolo eventual",
      ],
      correta: 2,
      explicacao:
        "A embriaguez completa por caso fortuito ou força maior isenta de pena (art. 28, § 1º). Quem bebe para praticar o crime responde, e ainda tem a agravante do art. 61, II, “l”, porque a imputabilidade se mede no momento livre.",
      explicacaoErradas:
        "“Os dois ficam isentos” ignora a actio libera in causa. “Nunca isenta” esquece o § 1º. A “pena reduzida” vale para a embriaguez fortuita incompleta. “Culpa” e “dolo eventual” não decorrem de nada no enunciado.",
      pegadinha: "Embriaguez voluntária completa não isenta, mesmo com total incapacidade na hora.",
      conhecimento:
        "Embriaguez patológica, que é doença, é tratada pelo art. 26.",
    },
    {
      topico: "Imputabilidade",
      subassunto: "Semi-imputabilidade e sistema vicariante",
      dificuldade: 4,
      raciocinio: "Semi-imputável é condenado. Inimputável por doença é absolvido com medida.",
      enunciado:
        "Laudo conclui que um réu, por perturbação mental, não era inteiramente capaz de entender o caráter ilícito do fato ao tempo do crime, e que precisa de tratamento. Pelos arts. 26, parágrafo único, e 98 do CP, o juiz",
      alternativas: [
        "absolve o réu e aplica medida de segurança, por inimputabilidade",
        "condena e pode substituir a pena por medida de segurança",
        "condena à pena integral, somando a medida de segurança a ela",
        "absolve o réu sem nenhuma medida, por falta de culpabilidade",
        "extingue a punibilidade, porque a doença impede o processo",
      ],
      correta: 1,
      explicacao:
        "O semi-imputável é condenado. A pena pode ser reduzida de um a dois terços ou, havendo necessidade de tratamento, substituída por internação ou tratamento ambulatorial. Vale o sistema vicariante: pena ou medida, nunca as duas.",
      explicacaoErradas:
        "“Absolve” é a sentença imprópria do inimputável. “Somando” é o antigo duplo binário. “Sem nenhuma medida” não se aplica a quem foi condenado. “Extingue a punibilidade” não é efeito da doença.",
      pegadinha: "“Não inteiramente capaz” é a expressão do semi-imputável; “inteiramente incapaz”, a do inimputável.",
      conhecimento:
        "A menoridade é critério puramente biológico: não se pergunta se o menor entendia o fato.",
    },
  ],
};
