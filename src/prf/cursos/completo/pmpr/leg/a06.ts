import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "leg-a06",
  resumo: {
    ideia:
      "A Lei 13.869/2019 pune o agente público que usa o poder do cargo para prejudicar alguém, se beneficiar ou por capricho. Sem essa intenção especial não há crime. A prova cobra quem pode cometer, os efeitos da condenação e os crimes contra o preso, a casa e a investigação.",
    itens: [
      {
        termo: "Quem comete (arts. 1º e 2º)",
        faz: "Qualquer agente público, servidor ou não, de qualquer Poder e de qualquer ente, mesmo que de forma passageira ou sem salário, no exercício da função ou a pretexto de exercê-la.",
      },
      {
        termo: "Intenção especial (art. 1º, §§ 1º e 2º)",
        faz: "Só há crime se o agente quis prejudicar outra pessoa, beneficiar a si mesmo ou a terceiro, ou agiu por mero capricho ou satisfação pessoal. Divergir na interpretação da lei ou na avaliação de fatos e provas não é abuso.",
        pista: "Não existe abuso de autoridade culposo.",
      },
      {
        termo: "Ação penal (arts. 3º e 39)",
        faz: "Pública incondicionada. Se o MP não agir no prazo, a vítima pode entrar com ação privada subsidiária em até 6 meses. Aplicam-se o CPP e a Lei 9.099/1995: crimes com pena máxima de até 2 anos vão para o Juizado Especial Criminal.",
        pista: "Militar em serviço: desde a Lei 13.491/2017, parte da doutrina vê como superada a Súmula 172 do STJ, que mandava o caso à Justiça Comum.",
      },
      {
        termo: "Efeitos da condenação (art. 4º)",
        faz: "Indenizar a vítima, com valor mínimo fixado na sentença. Inabilitação para cargo, mandato ou função por 1 a 5 anos e perda do cargo: só para quem é reincidente em abuso de autoridade, nunca automáticas, declaradas com motivação na sentença.",
      },
      {
        termo: "Penas no lugar da prisão (art. 5º)",
        faz: "Prestação de serviços à comunidade e suspensão do cargo, da função ou do mandato por 1 a 6 meses, com perda dos vencimentos. Podem ser aplicadas sozinhas ou juntas.",
        pista: "Suspensão = pena, 1 a 6 meses. Inabilitação = efeito da condenação, 1 a 5 anos.",
      },
      {
        termo: "Esferas independentes (arts. 6º a 8º)",
        faz: "A pena criminal não impede punição civil e administrativa. Mas, se o juiz criminal decidir que o fato não existiu ou quem foi o autor, isso não se discute mais. A sentença que reconhece legítima defesa, estado de necessidade, estrito cumprimento do dever ou exercício regular de direito vale no cível e no disciplinar.",
      },
      {
        termo: "Prisão e liberdade (arts. 9º a 12)",
        faz: "Decretar prisão fora das hipóteses legais, ou o juiz não relaxar prisão claramente ilegal: 1 a 4 anos. Condução coercitiva descabida ou sem intimação prévia: 1 a 4 anos. Não comunicar sem justificativa o flagrante ao juiz, a prisão à família, não entregar a nota de culpa em 24 horas ou não soltar quando acaba o prazo: 6 meses a 2 anos.",
      },
      {
        termo: "Tratamento do preso (arts. 13 a 21)",
        faz: "Obrigar o preso, com violência ou ameaça, a se exibir à curiosidade pública, passar vexame ou produzir prova contra si. Continuar o interrogatório de quem quis ficar calado ou pediu advogado. Não se identificar ao preso. Interrogar no repouso noturno, salvo flagrante ou consentimento com assistência. Impedir conversa reservada com o advogado. Homens e mulheres na mesma cela, ou criança e adolescente com adultos.",
      },
      {
        termo: "Violência institucional (art. 15-A, de 2022)",
        faz: "Submeter vítima ou testemunha de crime violento a procedimentos desnecessários, repetitivos ou invasivos que a façam reviver o sofrimento: 3 meses a 1 ano. Aumenta 2/3 se o agente deixar um terceiro intimidar a vítima, e a pena dobra se ele mesmo a intimidar.",
      },
      {
        termo: "Invasão de casa (art. 22)",
        faz: "Entrar ou ficar em imóvel alheio sem ordem judicial ou fora das hipóteses da lei, ou obrigar alguém a abrir a porta com violência ou ameaça: 1 a 4 anos. Também é crime cumprir mandado de busca domiciliar depois das 21h ou antes das 5h.",
        pista: "Não há crime para prestar socorro ou com fundados indícios de flagrante ou desastre.",
      },
      {
        termo: "Investigação e provas (arts. 23 a 33)",
        faz: "Mexer na cena para fugir da culpa ou culpar alguém. Obter ou usar prova claramente ilícita. Abrir investigação sem nenhum indício (sindicância justificada não é crime). Divulgar gravação sem ligação com a prova. Processar sem justa causa. Atrasar a investigação. Negar ao advogado acesso aos autos, salvo diligências em andamento. Usar o cargo para fugir de obrigação ou ganhar privilégio (a \"carteirada\").",
      },
      {
        termo: "Culpa antecipada (art. 38)",
        faz: "O responsável pela investigação que, inclusive em rede social, aponta alguém como culpado antes de concluída a apuração e formalizada a acusação: 6 meses a 2 anos.",
      },
    ],
  },
  questoes: [
    {
      topico: "Disposições gerais",
      subassunto: "Intenção especial e divergência",
      dificuldade: 5,
      raciocinio: "Art. 1º, § 1º: exige finalidade de prejudicar, beneficiar ou capricho. § 2º: a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso. Não há forma culposa.",
      enunciado: "Um delegado autua em flagrante um motorista por entender que a conduta dele é crime de trânsito. Depois, o juiz entende que o fato não é crime e solta o motorista. Não há indício de que o delegado quisesse prejudicar o motorista ou se beneficiar. O delegado",
      alternativas: [
        "comete abuso de autoridade, porque o juiz reconheceu depois que o fato não era crime.",
        "não comete crime, porque a divergência na interpretação da lei não é abuso.",
        "comete abuso culposo, porque deveria conhecer o entendimento que prevalece.",
        "só responde se o motorista apresentar queixa no prazo de 6 meses.",
        "comete abuso, porque a lei pune todo ato que traga prejuízo ao cidadão.",
      ],
      correta: 1,
      explicacao:
        "O art. 1º, § 2º, diz que a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade. Além disso, o § 1º exige a finalidade de prejudicar alguém, beneficiar a si ou a terceiro, ou o mero capricho, o que não aparece no caso.",
      explicacaoErradas:
        "A soltura pelo juiz não transforma o ato em crime. A lei não prevê forma culposa. A ação penal é pública incondicionada, e a queixa só cabe se o MP ficar inerte. E a lei não pune todo prejuízo, só o causado com a intenção especial.",
      pegadinha: "Achar que toda prisão ou autuação desfeita depois pelo juiz é abuso de autoridade.",
      conhecimento: "Todos os crimes da Lei 13.869 exigem essa intenção especial do agente.",
    },
    {
      topico: "Disposições gerais",
      subassunto: "Efeitos da condenação",
      dificuldade: 5,
      raciocinio: "Art. 4º: I indenizar (automático); II inabilitação 1 a 5 anos; III perda do cargo. Parágrafo único: II e III só com reincidência em abuso de autoridade, não automáticos, declarados motivadamente na sentença.",
      enunciado: "Um servidor é condenado pela primeira vez por abuso de autoridade, a 1 ano de detenção. Pela Lei 13.869/2019, quanto aos efeitos da condenação,",
      alternativas: [
        "o juiz deve decretar a perda do cargo, que é efeito automático de toda condenação.",
        "o juiz pode decretar a inabilitação por 1 a 6 meses, com perda dos vencimentos.",
        "a perda do cargo depende só de a pena aplicada ser superior a 4 anos de detenção.",
        "perda do cargo e inabilitação exigem reincidência em abuso e decisão motivada.",
        "a obrigação de indenizar a vítima só surge se o servidor for reincidente no crime.",
      ],
      correta: 3,
      explicacao:
        "Pelo art. 4º, parágrafo único, a inabilitação para o cargo (1 a 5 anos) e a perda do cargo dependem de reincidência em crime de abuso de autoridade, não são automáticas e precisam ser declaradas com motivação na sentença. Como é a primeira condenação, nenhum dos dois cabe.",
      explicacaoErradas:
        "A perda do cargo não é automática. O prazo de 1 a 6 meses com perda dos vencimentos é o da suspensão, que é pena restritiva de direitos, e não a inabilitação. A lei não usa o tamanho da pena como critério. E a obrigação de indenizar não depende de reincidência.",
      pegadinha: "Trocar suspensão (pena, 1 a 6 meses) por inabilitação (efeito, 1 a 5 anos).",
      conhecimento: "As penas restritivas de direitos da lei podem ser aplicadas sozinhas ou juntas.",
    },
    {
      topico: "Crimes em espécie",
      subassunto: "Interrogatório noturno",
      dificuldade: 5,
      raciocinio: "Art. 18: submeter o preso a interrogatório policial no repouso noturno, salvo se capturado em flagrante ou se ele, devidamente assistido, consentir. Prisão por mandado não é flagrante; consentimento sem assistência não serve.",
      enunciado: "Às 18h, a polícia cumpre um mandado de prisão preventiva. Às 2h da madrugada, o delegado interroga o preso, que está sem advogado e aceita falar. O delegado",
      alternativas: [
        "comete abuso: não havia flagrante, e o preso consentiu sem estar assistido.",
        "não comete crime, porque o preso aceitou falar, o que basta para a lei.",
        "não comete crime, porque a regra do repouso noturno vale só para o flagrante.",
        "comete crime de tortura, porque todo interrogatório de madrugada é sofrimento.",
        "não comete crime, porque o mandado de prisão permite interrogar a qualquer hora.",
      ],
      correta: 0,
      explicacao:
        "O art. 18 proíbe o interrogatório policial no período de repouso noturno. As exceções são o preso capturado em flagrante ou o preso que, devidamente assistido, consente em falar. Aqui a prisão foi por mandado e o consentimento veio sem assistência.",
      explicacaoErradas:
        "O consentimento só vale com assistência. A regra é o contrário: o flagrante é a exceção que permite o interrogatório noturno. O horário, sozinho, não configura tortura. E o mandado de prisão não autoriza interrogar em qualquer horário.",
      pegadinha: "Inverter a exceção: o flagrante permite o interrogatório noturno, não o proíbe.",
      conhecimento: "Continuar interrogando quem decidiu ficar calado ou pediu advogado também é crime (art. 15, parágrafo único).",
    },
    {
      topico: "Crimes em espécie",
      subassunto: "Invasão de domicílio",
      dificuldade: 4,
      raciocinio: "Art. 22, § 1º, III: cumprir mandado de busca e apreensão domiciliar após as 21h ou antes das 5h. § 2º: não há crime para socorro ou com fundados indícios de flagrante ou desastre.",
      enunciado: "Com mandado judicial de busca domiciliar, policiais entram em uma casa às 4h30 para evitar que o suspeito fuja. Não havia flagrante nem desastre. Os policiais",
      alternativas: [
        "não cometem crime, porque tinham mandado judicial de busca e apreensão.",
        "não cometem crime, porque a lei só proíbe o cumprimento depois das 18h.",
        "cometem crime apenas se usarem violência contra os moradores da casa.",
        "não cometem crime, porque o morador não reagiu à entrada dos policiais.",
        "cometem crime, porque cumpriram o mandado de busca antes das 5h.",
      ],
      correta: 4,
      explicacao:
        "O art. 22, § 1º, III, pune quem cumpre mandado de busca e apreensão domiciliar depois das 21h ou antes das 5h. Ter o mandado não basta: é preciso respeitar o horário.",
      explicacaoErradas:
        "O mandado não autoriza o cumprimento fora do horário legal. O limite da lei é 21h, e não 18h. A violência não é exigida nessa forma do crime. E a falta de reação do morador não é o mesmo que consentimento livre.",
      pegadinha: "Achar que ter o mandado autoriza entrar em qualquer horário.",
      conhecimento: "Não há crime se a entrada for para prestar socorro ou houver fundados indícios de flagrante ou desastre (§ 2º).",
    },
    {
      topico: "Crimes em espécie",
      subassunto: "Violência institucional",
      dificuldade: 5,
      raciocinio: "Art. 15-A (Lei 14.321/2022): 3 meses a 1 ano. § 1º: permitir que terceiro intimide a vítima, +2/3. § 2º: o próprio agente intimida, pena em dobro.",
      enunciado: "Ao ouvir uma vítima de crime violento, um policial a faz repetir o relato várias vezes sem necessidade e ainda a intimida, dizendo que ela provocou o crime. Ele",
      alternativas: [
        "não comete crime, porque ouvir a vítima é dever da autoridade policial.",
        "comete violência institucional, com a pena aumentada em 2/3 pela intimidação.",
        "comete violência institucional, com pena em dobro, porque ele mesmo intimidou.",
        "comete tortura psicológica, com pena de 2 a 8 anos e perda automática do cargo.",
        "comete violência institucional, mas só se a vítima for criança ou adolescente.",
      ],
      correta: 2,
      explicacao:
        "O art. 15-A pune quem submete a vítima a procedimentos desnecessários e repetitivos que a façam reviver a violência. Pelo § 2º, se o próprio agente público intimida a vítima, a pena é aplicada em dobro.",
      explicacaoErradas:
        "Ouvir a vítima é dever, mas repetir sem necessidade e intimidar é crime. O aumento de 2/3 é para quem permite que um terceiro intimide a vítima. A intimidação descrita não é a violência ou grave ameaça com as finalidades da Lei de Tortura. E a lei protege qualquer vítima ou testemunha de crime violento, não só crianças.",
      pegadinha: "Trocar os aumentos: terceiro intimida = 2/3; o próprio agente intimida = dobro.",
      conhecimento: "O crime foi incluído pela Lei 14.321/2022 e também protege testemunhas de crimes violentos.",
    },
    {
      topico: "Crimes em espécie",
      subassunto: "Carteirada",
      dificuldade: 4,
      raciocinio: "Art. 33, parágrafo único: utiliza-se de cargo ou função pública ou invoca a condição de agente público para se eximir de obrigação legal ou obter vantagem ou privilégio indevido.",
      enunciado: "Parado em uma fiscalização de trânsito, um servidor público de folga mostra a carteira funcional e exige não ser autuado, invocando o cargo. Ele",
      alternativas: [
        "não comete crime, porque estava de folga e não exercia a função.",
        "comete corrupção ativa, porque ofereceu vantagem ao agente da fiscalização.",
        "comete apenas infração administrativa, sem nenhuma repercussão penal.",
        "comete abuso de autoridade, por usar o cargo para fugir de obrigação legal.",
        "comete usurpação de função pública, porque agiu como se estivesse em serviço.",
      ],
      correta: 3,
      explicacao:
        "O art. 33, parágrafo único, pune quem se utiliza do cargo ou invoca a condição de agente público para se eximir de obrigação legal ou obter vantagem ou privilégio indevido. É a chamada \"carteirada\", com pena de 6 meses a 2 anos.",
      explicacaoErradas:
        "Ao invocar o cargo, o servidor age a pretexto da função, o que basta para a lei. Ele não ofereceu vantagem, então não há corrupção ativa. A conduta é crime, sem prejuízo da punição administrativa. E não há usurpação: ele é servidor de verdade e não assumiu função alheia.",
      pegadinha: "Achar que estar de folga afasta o crime de quem invoca o cargo.",
      conhecimento: "O caput do art. 33 pune quem exige informação ou cumprimento de obrigação sem expresso amparo legal.",
    },
    {
      topico: "Crimes em espécie",
      subassunto: "Comunicação da prisão",
      dificuldade: 5,
      raciocinio: "Art. 12: deixar INJUSTIFICADAMENTE de comunicar o flagrante ao juiz. Parágrafo único: I comunicar temporária/preventiva ao juiz; II comunicar à família imediatamente; III nota de culpa em 24h; IV prolongar a prisão sem soltar ao fim do prazo. IV do enunciado está errado (sem justificativa).",
      enunciado: "Sobre o art. 12 da Lei 13.869/2019, considere as condutas: I. deixar de entregar ao preso, em 24 horas, a nota de culpa; II. deixar de comunicar imediatamente a prisão à família do preso ou à pessoa que ele indicar; III. manter o preso depois de acabado o prazo da prisão temporária, sem motivo justo; IV. deixar de comunicar o flagrante ao juiz no prazo legal, mesmo quando a demora tem justificativa. São crimes",
      alternativas: [
        "I e II, apenas.",
        "I, II e III, apenas.",
        "I, II e IV, apenas.",
        "II, III e IV, apenas.",
        "I, II, III e IV.",
      ],
      correta: 1,
      explicacao:
        "As condutas I, II e III estão no parágrafo único do art. 12 (incisos III, II e IV). Acabado o prazo da prisão temporária, o preso deve ser solto mesmo sem nova ordem do juiz.",
      explicacaoErradas:
        "O item IV está errado: o caput pune quem deixa de comunicar o flagrante \"injustificadamente\". Se a demora tem justificativa, não há crime.",
      pegadinha: "Ignorar a palavra \"injustificadamente\" do caput.",
      conhecimento: "O mandado de prisão temporária deve trazer o dia em que o preso será solto.",
    },
    {
      topico: "Crimes em espécie",
      subassunto: "Acesso aos autos",
      dificuldade: 5,
      raciocinio: "Art. 32: negar acesso aos autos ou impedir cópias, ressalvadas as peças de diligências em curso ou futuras cujo sigilo seja imprescindível. Súmula Vinculante 14: acesso ao que já está documentado.",
      enunciado: "O advogado de um investigado pede acesso ao inquérito. O delegado nega tudo, até os depoimentos já juntados, alegando que há uma interceptação telefônica em andamento. Sobre a conduta do delegado,",
      alternativas: [
        "é abuso negar as peças já documentadas, mas ele pode reservar a diligência em curso.",
        "não há crime, porque o inquérito é sigiloso e o advogado não tem direito de acesso.",
        "não há crime, porque basta haver uma diligência em curso para fechar todo o inquérito.",
        "é abuso, e ele deve mostrar também a interceptação que ainda está em andamento.",
        "só é abuso se o investigado estiver preso no momento em que o advogado fez o pedido.",
      ],
      correta: 0,
      explicacao:
        "O art. 32 pune quem nega ao advogado acesso aos autos, ressalvadas as peças de diligências em curso ou futuras cujo sigilo seja imprescindível. Os depoimentos já juntados devem ser mostrados; a interceptação em andamento pode ficar reservada. É a mesma ideia da Súmula Vinculante 14.",
      explicacaoErradas:
        "O sigilo do inquérito não vale contra o advogado quanto ao que já está documentado. Uma diligência em curso não fecha o inquérito inteiro. A interceptação em andamento é justamente a exceção que pode ficar em sigilo. E a lei não exige que o investigado esteja preso.",
      pegadinha: "Achar que uma diligência em curso permite negar acesso a todo o inquérito.",
      conhecimento: "Impedir que o advogado tire cópias também é crime do art. 32.",
    },
    {
      topico: "Crimes em espécie",
      subassunto: "Culpa antecipada",
      dificuldade: 4,
      raciocinio: "Art. 38: antecipar o responsável pelas investigações, por meio de comunicação, inclusive rede social, atribuição de culpa antes de concluídas as apurações e formalizada a acusação. Ação pública incondicionada (art. 3º).",
      enunciado: "Antes de terminar o inquérito, o delegado responsável pela investigação publica em sua rede social que o investigado \"é o culpado\" pelo crime. O delegado",
      alternativas: [
        "não comete crime, porque a publicidade dos atos da polícia é regra na Constituição.",
        "comete calúnia, apenas, porque atribuiu um crime ao investigado pela internet.",
        "só cometeria crime se a postagem tivesse sido feita depois da denúncia.",
        "comete abuso de autoridade, mas a ação penal depende de representação.",
        "comete abuso de autoridade, por antecipar a culpa antes de concluir a apuração.",
      ],
      correta: 4,
      explicacao:
        "O art. 38 pune o responsável pela investigação que, por qualquer meio de comunicação, inclusive rede social, atribui culpa a alguém antes de concluídas as apurações e formalizada a acusação. A pena é de 6 meses a 2 anos.",
      explicacaoErradas:
        "A publicidade não autoriza apontar culpados antes da hora. Há lei especial para esse caso, que é o art. 38. O crime é justamente antecipar a culpa antes da acusação formal. E os crimes da Lei 13.869 são de ação penal pública incondicionada.",
      pegadinha: "Achar que a ação penal do abuso de autoridade depende da vítima.",
      conhecimento: "Divulgar gravação sem relação com a prova, expondo a intimidade do investigado, é outro crime (art. 28).",
    },
    {
      topico: "Crimes em espécie",
      subassunto: "Direito ao silêncio",
      dificuldade: 4,
      raciocinio: "Art. 15, parágrafo único, I: prosseguir com o interrogatório de pessoa que decidiu exercer o direito ao silêncio. O caput é outra conduta (constranger a depor, sob ameaça de prisão, quem deve guardar segredo).",
      enunciado: "No início do interrogatório, o preso diz que vai ficar calado. Mesmo assim, o delegado continua fazendo perguntas por horas. O delegado",
      alternativas: [
        "não comete crime, porque o preso pode continuar calado diante de cada pergunta.",
        "comete tortura, porque o interrogatório longo causa intenso sofrimento mental.",
        "comete abuso de autoridade, por continuar ouvindo quem escolheu o silêncio.",
        "só comete crime se usar a ameaça de prisão para conseguir as respostas.",
        "comete abuso apenas se o advogado do preso estiver presente na sala.",
      ],
      correta: 2,
      explicacao:
        "O art. 15, parágrafo único, I, pune quem prossegue com o interrogatório de pessoa que decidiu exercer o direito ao silêncio. A pena é de 1 a 4 anos. O inciso II pune quem continua a ouvir, sem o advogado, a pessoa que pediu para ser assistida.",
      explicacaoErradas:
        "A lei pune justamente insistir depois que o preso escolheu o silêncio. Não houve violência nem grave ameaça, que a tortura exige. A ameaça de prisão aparece no caput, que trata de quem deve guardar segredo profissional. E a presença do advogado não é requisito do crime.",
      pegadinha: "Misturar o caput do art. 15 (segredo profissional) com o parágrafo único (silêncio).",
      conhecimento: "Obrigar o preso, com violência ou ameaça, a produzir prova contra si mesmo é crime do art. 13, III.",
    },
  ],
};
