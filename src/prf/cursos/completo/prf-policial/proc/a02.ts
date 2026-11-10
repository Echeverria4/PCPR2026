import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "proc-02",
  resumo: {
    ideia:
      "Prova é o que se produz em juízo, com contraditório. O que a polícia colhe no inquérito é elemento informativo e, sozinho, não basta para condenar. Prova obtida com violação da lei é inadmissível.",
    itens: [
      {
        termo: "Prova x elemento informativo",
        faz: "Prova nasce no processo, com as partes. Elemento informativo nasce na investigação, sem contraditório obrigatório.",
      },
      {
        termo: "Art. 155",
        faz: "O juiz não pode condenar só com base no inquérito. Exceções: provas cautelares, não repetíveis e antecipadas.",
        pista: "Nas exceções, o contraditório é diferido: a defesa discute depois.",
      },
      {
        termo: "Convencimento motivado",
        faz: "Regra no Brasil: o juiz avalia livremente, mas fundamenta. Os jurados do Júri votam por íntima convicção, sem motivar.",
      },
      {
        termo: "Resquícios da prova tarifada",
        faz: "Certidão de óbito para extinguir a punibilidade (art. 62), corpo de delito nos crimes com vestígio (art. 158) e estado das pessoas pela lei civil (art. 155, parágrafo único).",
      },
      {
        termo: "Objeto da prova",
        faz: "Fatos da acusação. Fato incontroverso também precisa de prova. Dispensam prova: fatos notórios, axiomáticos, inúteis e presunções legais.",
      },
      {
        termo: "Ônus da prova",
        faz: "Cabe a quem alega (art. 156). Não há inversão no processo penal. A dúvida favorece o réu.",
      },
      {
        termo: "Estrutura acusatória",
        faz: "Art. 3º-A: o juiz não investiga nem substitui a acusação. O STF permite diligência pontual para tirar dúvida relevante.",
      },
      {
        termo: "Ilícita x ilegítima",
        faz: "Ilícita viola norma material, em regra fora do processo. Ilegítima viola norma processual e gera nulidade. O art. 157 trata ambas como ilícitas.",
      },
      {
        termo: "Desentranhamento",
        faz: "Prova ilícita sai dos autos e, preclusa a decisão, é inutilizada (art. 157, § 3º).",
      },
      {
        termo: "Provas derivadas",
        faz: "Também inadmissíveis, salvo sem nexo causal ou com fonte independente (art. 157, §§ 1º e 2º).",
        pista: "A definição do § 2º lembra a descoberta inevitável.",
      },
      {
        termo: "Ilícita a favor do réu",
        faz: "Pela proporcionalidade, a doutrina e a jurisprudência admitem prova ilícita para absolver.",
      },
      {
        termo: "Comunhão da prova",
        faz: "Produzida, a prova serve a todos, não só a quem a pediu.",
      },
    ],
    cuidado:
      "O § 5º do art. 157 ainda aparece no texto do CPP, mas o STF o declarou inconstitucional em 2023: o juiz que viu a prova ilícita pode sentenciar.",
  },
  questoes: [
    {
      topico: "Teoria geral da prova",
      subassunto: "Condenação só com o inquérito",
      dificuldade: 4,
      raciocinio: "Elemento informativo não repetido em juízo não basta sozinho.",
      enunciado:
        "Na sentença, o juiz condena o réu com base apenas no depoimento de uma testemunha colhido no inquérito, que não foi repetido em juízo. Nenhuma outra prova foi produzida. Pelo art. 155 do CPP, a decisão",
      alternativas: [
        "é válida, pois o juiz aprecia livremente qualquer elemento dos autos",
        "é válida, pois o depoimento policial tem presunção de veracidade",
        "só seria nula se a defesa tivesse impugnado o depoimento no inquérito",
        "não se sustenta, pois usa só elemento informativo da investigação",
        "é válida, desde que a testemunha seja agente público ouvido sob compromisso",
      ],
      correta: 3,
      explicacao:
        "O art. 155 do CPP permite a livre apreciação da prova produzida em contraditório judicial, mas proíbe fundamentar a decisão exclusivamente nos elementos informativos da investigação. Depoimento do inquérito não repetido em juízo não é prova cautelar, não repetível nem antecipada.",
      explicacaoErradas:
        "“Qualquer elemento dos autos” esquece o limite do próprio art. 155. “Presunção de veracidade” não torna o inquérito suficiente para condenar. “Impugnado no inquérito” cria exigência que não existe: o contraditório é do processo. “Agente público sob compromisso” não muda a natureza do elemento colhido na investigação.",
      pegadinha: "O problema é o “exclusivamente”: o inquérito pode reforçar, não sustentar sozinho.",
      conhecimento:
        "O elemento do inquérito pode ser usado junto com provas produzidas em juízo, de forma complementar.",
    },
    {
      topico: "Teoria geral da prova",
      subassunto: "Prova não repetível",
      dificuldade: 4,
      raciocinio: "Vestígio que desaparece não pode ser periciado de novo.",
      enunciado:
        "Uma perícia no local de um acidente na rodovia foi feita durante o inquérito, e os vestígios desapareceram logo depois. Na sentença, o juiz usa o laudo como principal fundamento. Quanto ao art. 155 do CPP, é correto afirmar que",
      alternativas: [
        "o laudo não vale, pois foi produzido sem a presença da defesa",
        "o uso é válido: a perícia é não repetível, e o contraditório é diferido",
        "o laudo só vale se o perito for ouvido de novo como testemunha em juízo",
        "o uso é válido só se o réu tiver confessado o crime no inquérito",
        "o laudo vira elemento informativo e precisa de outra prova que o confirme",
      ],
      correta: 1,
      explicacao:
        "O art. 155 ressalva as provas cautelares, não repetíveis e antecipadas. A perícia sobre vestígios que desaparecem não pode ser refeita, e por isso vale como prova. A defesa exerce o contraditório depois, ao discutir o laudo no processo.",
      explicacaoErradas:
        "“Sem a presença da defesa” não invalida a perícia: o contraditório é diferido. “Ouvido de novo” não é condição legal, embora as partes possam pedir esclarecimentos ao perito. “Se o réu tiver confessado” mistura temas: a confissão não é requisito do laudo. “Vira elemento informativo” ignora a exceção expressa do art. 155.",
      pegadinha: "Prova não repetível do inquérito é exceção à regra do art. 155.",
      conhecimento:
        "Prova antecipada é a produzida antes do momento normal, por urgência, com contraditório real, como a oitiva de testemunha muito doente.",
    },
    {
      topico: "Sistemas de apreciação",
      subassunto: "Convencimento motivado e Júri",
      dificuldade: 4,
      raciocinio: "Há um sistema de regra e uma exceção constitucional.",
      enunciado:
        "Sobre os sistemas de apreciação da prova no processo penal brasileiro, é correto afirmar que",
      alternativas: [
        "o juiz singular decide por íntima convicção, sem precisar motivar",
        "a prova tarifada é a regra, pois a lei fixa o valor de cada prova",
        "a confissão vale mais que as outras provas e dispensa o corpo de delito",
        "os jurados do Tribunal do Júri devem fundamentar o voto que dão em sigilo",
        "vale o convencimento motivado, salvo os jurados, que votam sem motivar",
      ],
      correta: 4,
      explicacao:
        "A regra é o convencimento motivado (persuasão racional): o juiz avalia as provas livremente, mas fundamenta (art. 155 do CPP e art. 93, IX, da CF). No Júri, os jurados decidem por íntima convicção, em votação sigilosa e sem motivação.",
      explicacaoErradas:
        "“Íntima convicção” do juiz singular contraria o dever de fundamentar. “Prova tarifada é a regra” erra: só há resquícios dela. “Confissão vale mais” contraria os arts. 158 e 197: ela não supre o exame de corpo de delito e é avaliada com as demais provas. “Devem fundamentar o voto” ignora o sigilo das votações do Júri.",
      pegadinha: "A íntima convicção existe no Brasil, mas só para os jurados.",
      conhecimento:
        "A confissão tem valor relativo e deve ser confrontada com as demais provas (art. 197 do CPP).",
    },
    {
      topico: "Sistemas de apreciação",
      subassunto: "Estado das pessoas",
      dificuldade: 5,
      raciocinio: "Idade é estado da pessoa e segue a lei civil.",
      enunciado:
        "Para reconhecer que o réu tinha menos de 21 anos na data do fato, o que reduz o prazo prescricional, o juiz exige certidão de nascimento ou documento equivalente. Essa exigência",
      alternativas: [
        "decorre do art. 155, parágrafo único, sobre o estado das pessoas",
        "é ilegal, pois no processo penal vigora a total liberdade de prova",
        "só vale se o MP contestar a idade declarada pelo réu no interrogatório",
        "decorre do sistema da íntima convicção, adotado como regra no CPP",
        "viola o contraditório, pois o réu pode provar a idade por testemunhas",
      ],
      correta: 0,
      explicacao:
        "O parágrafo único do art. 155 manda observar as restrições da lei civil quanto ao estado das pessoas. Idade é estado da pessoa. A Súmula 74 do STJ confirma: o reconhecimento da menoridade do réu, para efeitos penais, requer prova por documento hábil.",
      explicacaoErradas:
        "“Total liberdade de prova” não existe: o próprio art. 155 traz essa limitação. “Se o MP contestar” cria condição sem base. “Íntima convicção” não é a regra do CPP. “Por testemunhas” é justamente o que a regra afasta: a idade se prova por documento.",
      pegadinha: "A liberdade de prova tem limite no estado das pessoas.",
      conhecimento:
        "O art. 115 do CP reduz pela metade o prazo de prescrição se o agente tinha menos de 21 anos na data do fato.",
    },
    {
      topico: "Objeto da prova",
      subassunto: "Fato incontroverso",
      dificuldade: 5,
      raciocinio: "No processo penal não vale a lógica do processo civil para fatos não contestados.",
      enunciado:
        "No processo penal, a defesa não contesta que o réu dirigia o caminhão no momento da colisão. Quanto à necessidade de prova desse fato, a doutrina majoritária entende que ela",
      alternativas: [
        "fica dispensada, pois fato não contestado é presumido verdadeiro",
        "fica dispensada, pois se trata de fato notório que todos conhecem",
        "permanece, pois fato incontroverso também precisa ser provado",
        "permanece apenas se o juiz desconfiar da sinceridade da defesa",
        "fica dispensada, salvo se o crime for punido com reclusão",
      ],
      correta: 2,
      explicacao:
        "No processo penal, o fato incontroverso, admitido pelas partes, ainda precisa ser provado. O interesse em jogo é a liberdade, e a verdade buscada não depende da postura das partes. Dispensam prova apenas os fatos notórios, axiomáticos, inúteis e as presunções legais.",
      explicacaoErradas:
        "“Presumido verdadeiro” aplica ao processo penal uma regra do processo civil. “Fato notório” é o conhecido por todos, o que não é o caso de quem dirigia um caminhão. “Se o juiz desconfiar” e “salvo se punido com reclusão” criam critérios sem base.",
      pegadinha: "Não contestar não é o mesmo que provar.",
      conhecimento:
        "Direito estadual, municipal, estrangeiro e costumeiro também podem precisar de prova da sua vigência.",
    },
    {
      topico: "Provas ilícitas",
      subassunto: "Ilícita x ilegítima",
      dificuldade: 4,
      raciocinio: "Pergunte qual norma foi violada: material ou processual.",
      enunciado:
        "A doutrina distingue prova ilícita de prova ilegítima. Considere uma confissão obtida sob tortura e um depoimento colhido em juízo sem a presença do defensor do réu. Esses casos são, respectivamente, exemplos de prova",
      alternativas: [
        "ilegítima e ilícita, pois a tortura acontece fora do processo",
        "ilícita em ambos os casos, sem diferença alguma para a doutrina",
        "ilícita e ilegítima, pois violam norma material e processual",
        "ilegítima em ambos os casos, pois os dois violam regras do CPP",
        "irregular e anômala, pois as duas seguem rito diverso do legal",
      ],
      correta: 2,
      explicacao:
        "Prova ilícita viola norma de direito material, como a proibição da tortura, e em regra é obtida fora do processo. Prova ilegítima viola norma processual na produção, como a exigência de defensor, e leva à nulidade. O art. 157 do CPP hoje chama de ilícitas as obtidas em violação a normas constitucionais ou legais.",
      explicacaoErradas:
        "“Ilegítima e ilícita” inverte a ordem. “Sem diferença alguma” ignora a distinção doutrinária pedida. “Ilegítima em ambos” esquece que a tortura viola norma material e a Constituição. “Irregular e anômala” são outras categorias, ligadas a defeitos de forma e rito.",
      pegadinha: "A lei juntou as duas no art. 157, mas a doutrina ainda as separa.",
      conhecimento:
        "A Constituição declara inadmissíveis no processo as provas obtidas por meios ilícitos (art. 5º, LVI).",
    },
    {
      topico: "Provas ilícitas",
      subassunto: "Desentranhamento e § 5º",
      dificuldade: 5,
      raciocinio: "Lembre do que o STF derrubou no art. 157.",
      enunciado:
        "O juiz declara inadmissível uma prova obtida com violação de domicílio e a desentranha dos autos. Sobre as consequências, segundo o CPP e o STF, é correto afirmar que",
      alternativas: [
        "o juiz que viu a prova fica impedido de sentenciar, por regra do CPP em vigor",
        "preclusa a decisão, a prova é inutilizada, e o juiz pode seguir no caso",
        "a prova fica guardada em cartório e pode ser usada em grau de recurso",
        "a prova continua nos autos, mas o juiz deve dar a ela menor peso",
        "o processo inteiro é anulado, mesmo que existam provas independentes",
      ],
      correta: 1,
      explicacao:
        "Pelo art. 157, § 3º, preclusa a decisão de desentranhamento, a prova é inutilizada por decisão judicial, e as partes podem acompanhar. O § 5º, que impedia o juiz de sentenciar, foi declarado inconstitucional pelo STF nas ADIs 6.298, 6.299, 6.300 e 6.305.",
      explicacaoErradas:
        "“Impedido de sentenciar” cita o § 5º, que não vale mais. “Guardada em cartório” contraria a inutilização. “Continua nos autos” contraria o desentranhamento. “O processo inteiro é anulado” ignora que as provas independentes continuam válidas.",
      pegadinha: "O § 5º continua escrito no CPP, mas foi declarado inconstitucional.",
      conhecimento:
        "Prova ilícita não se convalida com o tempo nem com a concordância das partes.",
    },
    {
      topico: "Provas ilícitas",
      subassunto: "Fonte independente",
      dificuldade: 5,
      raciocinio: "Veja se a prova tinha um caminho próprio, sem a escuta ilegal.",
      enunciado:
        "Uma interceptação telefônica sem ordem judicial revela onde está um depósito de cargas roubadas. Antes disso, outra investigação, sem ligação com a escuta, já tinha mandado de busca para o mesmo local, obtido com base em denúncia e campana. A carga apreendida",
      alternativas: [
        "pode ser usada, pois a busca tem fonte independente da escuta",
        "é prova ilícita por derivação e deve ser desentranhada dos autos",
        "só pode ser usada pela defesa, pela regra da prova ilícita pro reo",
        "pode ser usada, pois a ilicitude da escuta não contamina nada",
        "só pode ser usada se o juiz convalidar a escuta depois do fato",
      ],
      correta: 0,
      explicacao:
        "O art. 157, § 1º, afasta a ilicitude da prova derivada quando ela pode ser obtida por fonte independente. A busca já estava autorizada por outra investigação, sem nexo com a escuta ilegal. A escuta continua ilícita, mas a apreensão tem base própria.",
      explicacaoErradas:
        "“Ilícita por derivação” ignora a fonte independente. “Só pela defesa” confunde com a prova ilícita a favor do réu. “Não contamina nada” erra: a escuta contamina o que dela deriva, só que aqui havia outro caminho. “Convalidar a escuta” não existe: autorização posterior não cura a ilicitude.",
      pegadinha: "A escuta segue ilícita; a carga se salva por ter outra fonte.",
      conhecimento:
        "Interceptação telefônica depende de ordem do juiz, nos termos da Lei 9.296/1996.",
    },
    {
      topico: "Provas ilícitas",
      subassunto: "Descoberta inevitável",
      dificuldade: 5,
      raciocinio: "A lei fala no que seria alcançado pelos trâmites normais.",
      enunciado:
        "O art. 157, § 2º, do CPP define fonte independente como aquela que, por si só, seguindo os trâmites típicos e de praxe da investigação, seria capaz de conduzir ao fato objeto da prova. Para boa parte da doutrina, essa definição descreve, na verdade, a teoria",
      alternativas: [
        "da contaminação expurgada, também chamada de mancha purgada",
        "da boa-fé, com ampla aplicação nos tribunais superiores",
        "dos frutos da árvore envenenada, em sentido estrito",
        "da prova ilícita pro reo, fundada na proporcionalidade",
        "da descoberta inevitável, que olha o que seria achado",
      ],
      correta: 4,
      explicacao:
        "Fonte independente, em sentido próprio, é um caminho que de fato existiu, sem ligação com a prova ilícita. O § 2º descreve o que “seria capaz” de levar ao fato pelos trâmites normais, ou seja, uma descoberta hipotética e inevitável. Por isso a doutrina diz que o CPP chamou de fonte independente a descoberta inevitável.",
      explicacaoErradas:
        "“Contaminação expurgada” trata de um vício que se dilui com o tempo ou por ato voluntário posterior. “Boa-fé” não tem aplicação registrada no STF e no STJ. “Frutos da árvore envenenada” é a regra da contaminação, não a exceção. “Pro reo” é outro tema, ligado à absolvição.",
      pegadinha: "O texto fala em “seria capaz”: isso é hipótese, não fonte que já existia.",
      conhecimento:
        "A teoria dos frutos da árvore envenenada está no art. 157, § 1º: a prova derivada da ilícita também é inadmissível.",
    },
    {
      topico: "Provas ilícitas",
      subassunto: "Prova ilícita a favor do réu",
      dificuldade: 4,
      raciocinio: "A liberdade de um inocente pesa mais que a vedação da prova.",
      enunciado:
        "Para provar que não estava no local do crime, o réu junta aos autos a gravação de uma conversa telefônica de terceiros, obtida sem autorização judicial, que identifica o verdadeiro autor. Segundo a posição majoritária, essa prova",
      alternativas: [
        "é inadmissível, pois a vedação constitucional é absoluta",
        "só vale se o Ministério Público concordar com a juntada",
        "pode ser admitida em favor do réu, pela proporcionalidade",
        "pode ser usada também para condenar o verdadeiro autor",
        "só é admitida se a gravação passar antes por perícia oficial",
      ],
      correta: 2,
      explicacao:
        "A doutrina e a jurisprudência admitem a prova ilícita a favor do réu, pela proporcionalidade: entre a vedação da prova e a liberdade de um inocente, prevalece a liberdade. Ela serve para absolver, mas não para acusar outra pessoa.",
      explicacaoErradas:
        "“Vedação absoluta” não é a posição majoritária quando a prova favorece o réu. “Concordar com a juntada” não é condição. “Condenar o verdadeiro autor” erra: contra terceiro, a prova continua ilícita. “Perícia oficial” pode ajudar a avaliar a gravação, mas não é o que a torna admissível.",
      pegadinha: "A prova ilícita salva o réu, mas não serve para acusar outro.",
      conhecimento:
        "O STF, em repercussão geral, considera lícita a gravação ambiental feita por um dos interlocutores sem o conhecimento do outro.",
    },
    {
      topico: "Ônus da prova",
      subassunto: "Diligência do juiz",
      dificuldade: 5,
      raciocinio: "O juiz pode tirar dúvida pontual, mas não fazer o papel do MP.",
      enunciado:
        "Encerrada a instrução, o juiz tem dúvida sobre um ponto relevante para o mérito e determina, de ofício, nova diligência. Segundo o CPP e a interpretação do STF sobre a estrutura acusatória, essa ordem",
      alternativas: [
        "é nula, pois o juiz nunca pode produzir prova de ofício",
        "é válida, e o juiz pode também suprir a omissão probatória do MP",
        "é nula, pois a dúvida deve levar sempre à absolvição imediata",
        "é válida, se pontual e sem substituir a atuação da acusação",
        "só é válida se a defesa e o MP tiverem pedido a mesma diligência",
      ],
      correta: 3,
      explicacao:
        "O art. 156, II, permite ao juiz determinar diligências para dirimir dúvida sobre ponto relevante. O art. 3º-A veda a iniciativa do juiz na investigação e a substituição da atuação probatória da acusação. O STF entendeu que o juiz pode, pontualmente, determinar diligências suplementares para esclarecer questão relevante para o mérito.",
      explicacaoErradas:
        "“Nunca pode produzir prova” contraria o art. 156 e a decisão do STF. “Suprir a omissão do MP” é o que o art. 3º-A proíbe. “Absolvição imediata” ignora que a lei permite tentar esclarecer antes. “Se a defesa e o MP tiverem pedido” não seria iniciativa de ofício.",
      pegadinha: "Esclarecer dúvida é diferente de produzir a prova que a acusação deixou de produzir.",
      conhecimento:
        "Não há inversão do ônus da prova no processo penal: a dúvida que persiste favorece o réu.",
    },
    {
      topico: "Princípios da prova",
      subassunto: "Comunhão da prova",
      dificuldade: 4,
      raciocinio: "Depois de produzida, a prova é do processo.",
      enunciado:
        "Depois de ouvida, uma testemunha arrolada pelo MP presta depoimento favorável ao réu. O MP pede que o depoimento seja desconsiderado, por ter sido ele quem arrolou a testemunha. O pedido",
      alternativas: [
        "deve ser atendido, pois a prova pertence a quem a produziu",
        "não deve ser atendido, pois a prova produzida serve a todas as partes",
        "deve ser atendido, desde que a defesa concorde com a retirada",
        "não deve ser atendido, pois só o juiz pode arrolar testemunhas",
        "deve ser atendido, pois o MP pode desistir de testemunha a qualquer tempo",
      ],
      correta: 1,
      explicacao:
        "Pelo princípio da comunhão da prova, a prova produzida passa a servir a todos os sujeitos do processo, seja quem for que a pediu. O depoimento já colhido pode ser usado pela defesa e pelo juiz.",
      explicacaoErradas:
        "“Pertence a quem a produziu” é o oposto da comunhão. “Desde que a defesa concorde” ignora que o juiz também usa a prova. “Só o juiz pode arrolar” é falso: as partes arrolam testemunhas. “A qualquer tempo” erra: a desistência só é possível antes da oitiva.",
      pegadinha: "Desistir de testemunha só cabe antes de ela ser ouvida.",
      conhecimento:
        "A parte pode desistir de testemunha arrolada, mas o juiz ainda pode ouvi-la, se achar útil (arts. 401, § 2º, e 209 do CPP).",
    },
  ],
};
