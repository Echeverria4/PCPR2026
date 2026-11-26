import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "proc-02",
  resumo: {
    ideia:
      "Prova é o que se produz em juízo, com contraditório. O que a polícia colhe no inquérito é elemento informativo e, sozinho, não basta para condenar. Prova obtida com violação da lei é inadmissível. A aula cobre o conceito, os sistemas de avaliação, o objeto, as classificações, o ônus, os princípios, as provas ilegais do art. 157 e a cadeia de custódia.",
    itens: [
      {
        parte: "1. Conceito, finalidade e destinatários",
        termo: "Prova x elemento informativo",
        faz: "Prova nasce no processo, com as partes. Elemento informativo nasce na investigação, sem contraditório obrigatório.",
        pista: "Elemento informativo serve para medidas cautelares e para formar a opinião do MP sobre denunciar; para condenar, precisa ser confirmado em juízo.",
      },
      {
        termo: "Dois sentidos de prova",
        faz: "Sentido objetivo: a atividade de provar e os meios usados (testemunha, perícia, documento). Sentido subjetivo: o resultado, a convicção que se forma na mente do juiz.",
      },
      {
        termo: "Finalidade e verdade",
        faz: "A prova busca convencer o juiz sobre os fatos. A verdade alcançada é a processual: a reconstrução mais fiel possível, nunca absoluta. O processo penal fala em verdade real ou material (buscar o que de fato ocorreu), em oposição à verdade formal (contentar-se com o que as partes trouxeram), mas sempre dentro das regras e dos limites da lei.",
      },
      {
        termo: "Destinatários da prova",
        faz: "O destinatário principal é o juiz, que decide. As partes são destinatárias secundárias: também tiram conclusões da prova e a usam em seus pedidos e recursos.",
      },
      {
        termo: "Etapas da prova",
        faz: "Proposição (a parte pede: o MP na denúncia, a defesa na resposta à acusação), admissão (o juiz defere ou indefere), produção (a prova entra nos autos) e valoração (o juiz pesa cada prova e fundamenta).",
        pista: "Pedida no momento certo, a prova só é negada se impertinente; pedida fora dele, pode ser negada por desnecessária.",
      },
      {
        parte: "2. Art. 155 e provas urgentes",
        termo: "Art. 155",
        faz: "O juiz não pode condenar só com base no inquérito. Exceções: provas cautelares, não repetíveis e antecipadas.",
        pista: "Nas exceções, o contraditório é diferido: a defesa discute depois.",
      },
      {
        termo: "Cautelares, não repetíveis e antecipadas",
        faz: "Cautelar: feita com urgência, muitas vezes sem aviso à parte, para não se perder (ex.: interceptação telefônica); a defesa contesta depois. Não repetível: não pode ser refeita mais tarde, porque o vestígio some (ex.: exame de lesão leve que cicatriza). Antecipada: produzida antes da hora normal, com ordem judicial e contraditório real naquele momento (ex.: ouvir testemunha muito idosa ou gravemente doente, art. 225).",
        pista: "Súmula 455 do STJ: a produção antecipada com base no art. 366 (réu citado por edital que some) exige fundamento concreto; o simples passar do tempo não basta.",
      },
      {
        parte: "3. Sistemas de avaliação da prova",
        termo: "Convencimento motivado",
        faz: "Regra no Brasil: o juiz avalia livremente, mas fundamenta. Os jurados do Júri votam por íntima convicção, sem motivar.",
      },
      {
        termo: "Limites do convencimento motivado",
        faz: "Também chamado de persuasão racional. O juiz é livre para dar peso às provas, mas: deve fundamentar a decisão (art. 93, IX, da CF), só pode usar o que está nos autos e deve analisar o conjunto. Nenhuma prova vale de forma absoluta: nem a confissão (art. 197). O sistema não é taxativo: valem também provas que a lei não lista, desde que lícitas.",
      },
      {
        termo: "Íntima convicção e prova tarifada",
        faz: "Íntima convicção (certeza moral do juiz): decide sem dizer por quê; no Brasil, só os jurados. Prova tarifada (prova legal ou certeza moral do legislador): a lei fixa o peso de cada prova, e o juiz apenas soma; não é a regra, mas deixou restos no CPP.",
      },
      {
        termo: "Resquícios da prova tarifada",
        faz: "Certidão de óbito para extinguir a punibilidade (art. 62), corpo de delito nos crimes com vestígio (art. 158) e estado das pessoas pela lei civil (art. 155, parágrafo único).",
        pista: "Súmula 74 do STJ: a menoridade do réu, para efeitos penais, só se prova por documento hábil (ex.: certidão de nascimento), não por testemunha.",
      },
      {
        parte: "4. Objeto da prova",
        termo: "Objeto da prova",
        faz: "Fatos da acusação. Fato incontroverso também precisa de prova. Dispensam prova: fatos notórios, axiomáticos, inúteis e presunções legais.",
      },
      {
        termo: "Direito que precisa de prova",
        faz: "Em regra, o direito não se prova: o juiz conhece a lei. Mas quem alega direito municipal, estadual, estrangeiro ou costumeiro pode ter de provar o teor e a vigência (regra do processo civil usada por analogia). A doutrina inclui atos normativos pouco conhecidos, como regulamentos e portarias.",
      },
      {
        termo: "Fatos que dispensam prova",
        faz: "Axiomáticos ou evidentes: decorrem de raciocínio lógico (quem nasceu em data certa tem idade certa). Notórios (verdade sabida): conhecidos de todos (ex.: datas festivas, uma pandemia mundial). Presunções legais: a lei já os dá por verdadeiros; a absoluta não admite prova em contrário, a relativa admite (a inocência é presunção relativa). Inúteis ou irrelevantes: nada mudam na causa.",
        pista: "Na presunção, o fato que a gera ainda precisa ser provado: para a vulnerabilidade do menor de 14 anos, prova-se a idade.",
      },
      {
        termo: "Fato incontroverso no processo penal",
        faz: "Diferente do processo civil, não se presume verdadeiro o fato que o réu deixa de contestar, nem o que ele admite. A acusação ainda precisa provar, porque o que está em jogo é a liberdade.",
      },
      {
        parte: "5. Classificações da prova",
        termo: "Pelo objeto, valor e sujeito",
        faz: "Objeto: direta (prova o próprio fato, como a testemunha que viu) ou indireta (chega ao fato por dedução, como o álibi ou o indício). Valor: plena (permite juízo de certeza e pode, sozinha, sustentar a decisão) ou não plena (só reforça, como o indício). Sujeito: real (vem de coisa, como cadáver ou documento) ou pessoal (vem de pessoa, como testemunho ou interrogatório).",
      },
      {
        termo: "Pela finalidade",
        faz: "Positiva: busca confirmar que o fato ocorreu. Negativa (ou contrária): busca mostrar que o fato não ocorreu.",
      },
      {
        termo: "Pela previsão legal",
        faz: "Nominada: a lei dá o nome. Típica: a lei prevê a prova e o procedimento. Atípica: para uns, a que a lei não prevê (igual à inominada); para outros, também a prevista sem procedimento definido. Irritual: típica, mas feita fora do modelo legal, por isso com nulidade. Anômala: prova típica usada para fim diferente do previsto. Fora da terra: produzida em outro juízo, por carta precatória. Crítica: outro nome da prova pericial.",
      },
      {
        termo: "Prova emprestada",
        faz: "Produzida em um processo e levada para outro. Para o STJ, não precisa haver as mesmas partes; o que se exige é contraditório sobre ela no processo novo. Com os requisitos, vale como as demais provas; sem eles, vira mero indício (prova não plena).",
        pista: "O STF admite (Tema 990) que a Receita Federal e a UIF compartilhem com o MP e a polícia, sem ordem judicial, dados fiscais e bancários completos, por canal formal e com sigilo.",
      },
      {
        termo: "Serendipidade",
        faz: "Encontro fortuito de prova: investigando um crime de forma lícita, acha-se por acaso prova de outro fato ou de outra pessoa. Essa prova pode ser usada para fundamentar decisões sobre o fato achado.",
      },
      {
        parte: "6. Ônus da prova e iniciativa do juiz",
        termo: "Ônus da prova",
        faz: "Cabe a quem alega (art. 156). Não há inversão no processo penal. A dúvida favorece o réu.",
        pista: "A acusação prova materialidade, autoria, nexo causal e dolo ou culpa. A defesa prova o que alega para excluir ou mudar a acusação (álibi, legítima defesa); mas, havendo dúvida fundada sobre a excludente, o juiz absolve (art. 386, VI).",
      },
      {
        termo: "Ônus subjetivo e objetivo",
        faz: "Subjetivo: diz qual parte deve produzir a prova. Objetivo: é a regra de julgamento quando a prova falta; no processo penal, quem perde é a acusação (in dubio pro reo). O ônus é da fase judicial; no inquérito, quem colhe tudo é a autoridade policial.",
      },
      {
        termo: "Estrutura acusatória",
        faz: "Art. 3º-A: o juiz não investiga nem substitui a acusação. O STF permite diligência pontual para tirar dúvida relevante.",
      },
      {
        termo: "Juiz que produz prova (art. 156, I e II)",
        faz: "I: antes da ação, ordenar prova antecipada urgente e relevante, com necessidade, adequação e proporcionalidade; com o pacote anticrime, a doutrina vê esse poder de ofício na investigação como incompatível com o juiz das garantias. II: no curso da instrução ou antes da sentença, mandar fazer diligência para tirar dúvida sobre ponto relevante (ex.: ouvir testemunha não arrolada, art. 209). STF e STJ tratam a iniciativa do juiz como válida, mas excepcional e complementar.",
      },
      {
        termo: "Standards probatórios",
        faz: "Grau de certeza exigido em cada etapa. Para começar a investigar: mera possibilidade. Para receber a denúncia (justa causa): prova da materialidade e probabilidade de autoria. Para condenar: certeza além de qualquer dúvida razoável, que o art. 386, VI e VII, expressa ao mandar absolver na dúvida.",
      },
      {
        termo: "Perda de uma chance probatória",
        faz: "STJ (2023): se a acusação, sem justificativa, deixa de produzir prova que estava ao seu alcance e poderia confirmar a tese da defesa (ex.: não requisitar as câmeras do local), essa omissão pesa contra a acusação e pode levar à absolvição.",
      },
      {
        parte: "7. Princípios da prova",
        termo: "Comunhão da prova",
        faz: "Produzida, a prova serve a todos, não só a quem a pediu.",
        pista: "Também chamado de aquisição da prova: a testemunha arrolada pela defesa pode acabar ajudando a acusação.",
      },
      {
        termo: "Contraditório e autorresponsabilidade",
        faz: "Contraditório: toda prova de uma parte pode ser contestada pela outra, com contraprova. Autorresponsabilidade: cada parte arca com o resultado de não provar o que lhe cabia; se a acusação não prova autoria e materialidade, o réu é absolvido.",
      },
      {
        termo: "Oralidade e seus subprincípios",
        faz: "A prova, quando possível, é produzida oralmente diante do juiz. Concentração: tudo em audiência única, com debates orais ao final (arts. 400 e 403). Imediação: o juiz tem contato direto com a prova; a videoconferência a atenua. Publicidade: atos abertos (arts. 5º, LX, e 93, IX, da CF), com restrição quando a intimidade ou o interesse social exigir. Identidade física: o juiz que presidiu a instrução sentencia (art. 399, § 2º).",
      },
      {
        termo: "Liberdade probatória e seus limites",
        faz: "Vale qualquer meio lícito, sobre qualquer fato relevante, e documentos podem ser juntados em qualquer fase (art. 231). Limites: estado das pessoas segue a lei civil (art. 155, parágrafo único); no Júri, documento lido em plenário precisa ter sido juntado com 3 dias úteis de antecedência (art. 479); o juiz pode negar provas irrelevantes, impertinentes ou protelatórias (art. 400, § 1º).",
      },
      {
        termo: "Não autoincriminação",
        faz: "Ninguém é obrigado a produzir prova contra si: o acusado pode calar, não participar da reprodução simulada, não fornecer material para exame grafotécnico e não fazer o teste do bafômetro nem exame de sangue (STJ). Se fizer de forma voluntária, a prova é válida.",
        pista: "No trânsito, a recusa ao bafômetro não gera crime, mas é infração administrativa (art. 165-A do CTB), e o STF julgou essa punição constitucional (Tema 1.079).",
      },
      {
        parte: "8. Provas ilegais (art. 157)",
        termo: "Ilícita x ilegítima",
        faz: "Ilícita viola norma material, em regra fora do processo. Ilegítima viola norma processual e gera nulidade. O art. 157 trata ambas como ilícitas.",
        pista: "Provas ilegais é o gênero: ilícitas, ilícitas por derivação e ilegítimas. São ilícitas: interceptação sem ordem judicial, busca em casa sem mandado fora das exceções, violação de correspondência, confissão sob tortura.",
      },
      {
        termo: "Ilegítima e as nulidades",
        faz: "A prova ilegítima segue o regime das nulidades, não o do art. 157. Nulidade absoluta: a prova não se usa, mas STF e STJ exigem demonstrar o prejuízo. Nulidade relativa: a prova é usada se a parte não reclamar a tempo ou se o defeito for sanado; o juiz não a reconhece de ofício.",
      },
      {
        termo: "Desentranhamento",
        faz: "Prova ilícita sai dos autos e, preclusa a decisão, é inutilizada (art. 157, § 3º).",
        pista: "As partes podem acompanhar a inutilização. Reconhecer uma prova ilícita não tranca a ação se ainda há outras provas válidas (STF).",
      },
      {
        termo: "Provas derivadas",
        faz: "Também inadmissíveis, salvo sem nexo causal ou com fonte independente (art. 157, §§ 1º e 2º).",
        pista: "A definição do § 2º lembra a descoberta inevitável.",
      },
      {
        termo: "Frutos da árvore envenenada",
        faz: "A prova derivada é lícita em si, mas só existe por causa da ilícita (ex.: a arma achada pelo que se arrancou sob tortura). Se a ilícita contamina a derivada, ambas saem. Não há contaminação quando não há nexo causal entre elas.",
      },
      {
        termo: "Fonte independente e descoberta inevitável",
        faz: "Fonte independente (§ 2º): a prova chegaria aos autos por um caminho próprio e lícito, seguindo os passos normais da investigação (ex.: a testemunha também foi indicada por outra pessoa, em depoimento livre). Descoberta inevitável (ou fonte hipotética independente): pelas circunstâncias, a prova seria achada de qualquer modo, de forma lícita, mesmo sem a prova ilícita.",
        pista: "A chamada exceção da boa-fé (o agente achava que agia dentro da lei) não é acolhida pelos tribunais brasileiros.",
      },
      {
        termo: "Ilícita a favor do réu",
        faz: "Pela proporcionalidade, a doutrina e a jurisprudência admitem prova ilícita para absolver.",
        pista: "A prova não vira lícita: serve só para inocentar o réu e não pode ser usada contra o verdadeiro autor que ela revela.",
      },
      {
        termo: "Juiz que viu a prova ilícita",
        faz: "O § 5º do art. 157 (Lei 13.964/2019) proibia esse juiz de sentenciar. O STF, nas ADIs 6.298, 6.299, 6.300 e 6.305, declarou o dispositivo inconstitucional.",
      },
      {
        termo: "Congelamento de dados na internet",
        faz: "STF (HC 222.141, 2024): são nulas as provas obtidas de dados de contas na internet preservados (congelados) a pedido direto do MP, sem ordem judicial de quebra de sigilo e fora das hipóteses legais.",
      },
      {
        parte: "9. Cadeia de custódia (art. 158-A)",
        termo: "Conceito de cadeia de custódia",
        faz: "Conjunto de procedimentos para manter e documentar a história do vestígio, do reconhecimento ao descarte, para rastrear quem o teve e como foi manuseado. Começa com a preservação do local do crime ou com o ato policial ou pericial que detecta o vestígio.",
        pista: "Vestígio é todo objeto ou material bruto, visível ou latente, constatado ou recolhido, que se relaciona à infração penal (§ 3º). O agente público que reconhece um possível vestígio fica responsável por preservá-lo (§ 2º).",
      },
      {
        termo: "As 10 etapas (art. 158-B)",
        faz: "Reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte.",
      },
      {
        termo: "Quebra da cadeia de custódia",
        faz: "Uma visão diz que qualquer falha torna a prova ilícita, com desentranhamento, haja boa ou má-fé. A visão do STJ: a falha não anula a prova por si só; o juiz avalia, com as demais provas, se ela continua confiável.",
      },
    ],
    cuidado:
      "O § 5º do art. 157 ainda aparece no texto do CPP, mas o STF o declarou inconstitucional em 2023: o juiz que viu a prova ilícita pode sentenciar. Prova ilícita pode ser usada para absolver, nunca para condenar. Fato que o réu não contesta continua precisando de prova.",
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
