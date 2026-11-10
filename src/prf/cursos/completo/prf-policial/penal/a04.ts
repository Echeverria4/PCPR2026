import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-04",
  resumo: {
    ideia:
      "Culpabilidade é o juízo de reprovação sobre quem agiu: imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa. A aula também separa os erros: o de tipo mexe no dolo, o de proibição mexe na culpabilidade, e o acidental quase nunca muda o crime.",
    itens: [
      {
        termo: "Imputabilidade",
        faz: "Doença mental usa critério biopsicológico (art. 26). Menoridade usa critério biológico: menor de 18 anos é inimputável (art. 27).",
      },
      {
        termo: "Semi-imputável",
        faz: "Não é isento: a pena cai de um a dois terços ou é substituída por medida de segurança, nunca as duas (art. 26, parágrafo único, e art. 98).",
      },
      {
        termo: "Emoção e embriaguez",
        faz: "Emoção, paixão e embriaguez voluntária ou culposa não excluem a imputabilidade. Só a embriaguez completa por caso fortuito ou força maior isenta (art. 28).",
        pista: "Incompleta e fortuita: reduz de um a dois terços.",
      },
      {
        termo: "Actio libera in causa",
        faz: "Quem se embriaga livremente é avaliado pelo momento em que bebeu, e não pelo momento do fato.",
      },
      {
        termo: "Coação",
        faz: "Moral irresistível: exclui a culpabilidade, e só o coator é punido. Física irresistível: não há conduta. Coação resistível: atenuante.",
      },
      {
        termo: "Obediência hierárquica",
        faz: "Ordem não manifestamente ilegal de superior, em relação de direito público: só o superior é punido (art. 22).",
      },
      {
        termo: "Erro de tipo",
        faz: "O agente não sabe o que faz. Exclui o dolo sempre; se evitável, permite culpa quando a lei prevê crime culposo (art. 20).",
      },
      {
        termo: "Erro de proibição",
        faz: "O agente sabe o que faz, mas acha permitido. Inevitável: isenta. Evitável: reduz de um sexto a um terço (art. 21).",
      },
      {
        termo: "Descriminante putativa",
        faz: "Erro justificado sobre a situação de fato isenta de pena; se derivar de culpa, responde por crime culposo, se houver (art. 20, § 1º).",
      },
      {
        termo: "Erro sobre a pessoa",
        faz: "Confunde a vítima: valem as qualidades de quem o agente queria atingir (art. 20, § 3º).",
      },
      {
        termo: "Erro na execução",
        faz: "Falha o golpe e acerta outra pessoa: mesma regra do erro sobre a pessoa. Se acerta as duas, concurso formal (art. 73).",
      },
      {
        termo: "Resultado diverso",
        faz: "Quis atingir coisa e atingiu pessoa: responde por culpa, se houver crime culposo (art. 74).",
      },
    ],
    cuidado:
      "O desconhecimento da lei é inescusável e serve só como atenuante (art. 65, II). Erro de proibição é outra coisa: falta a noção de que o fato é ilícito.",
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
