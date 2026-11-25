import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "leg-a02",
  resumo: {
    ideia:
      "A Lei 9.455/1997 define os crimes de tortura. A pena básica é de reclusão de 2 a 8 anos. Cada forma tem um detalhe que a prova cobra: quem pode praticar, se o sofrimento precisa ser intenso e qual é a finalidade. A tortura é equiparada a crime hediondo.",
    itens: [
      {
        termo: "Tortura-prova e tortura-crime (art. 1º, I, a e b)",
        faz: "Constranger alguém com violência ou grave ameaça, causando sofrimento físico ou mental, para obter informação, declaração ou confissão da vítima ou de outra pessoa (a), ou para provocar uma ação ou omissão criminosa (b). Qualquer pessoa pode praticar: é crime comum.",
        pista: "Não precisa ser agente público. Ser agente público só aumenta a pena.",
      },
      {
        termo: "Tortura-discriminação (art. 1º, I, c)",
        faz: "O mesmo constrangimento, em razão de discriminação racial ou religiosa.",
        pista: "Só raça ou religião. Outros motivos de preconceito ficam fora desta alínea.",
      },
      {
        termo: "Tortura-castigo (art. 1º, II)",
        faz: "Submeter alguém que está sob sua guarda, poder ou autoridade, com violência ou grave ameaça, a intenso sofrimento físico ou mental, como castigo pessoal ou medida preventiva. É crime próprio: exige essa relação entre autor e vítima.",
        pista: "Aqui o sofrimento tem de ser intenso. Sem isso, pode ser só maus-tratos.",
      },
      {
        termo: "Tortura da mulher no lar (art. 1º, III, desde 2026)",
        faz: "Submeter mulher, reiteradamente, a intenso sofrimento físico ou mental, no contexto de violência doméstica e familiar. O autor responde também pelos outros crimes que cometer (lesões, ameaças etc.).",
        pista: "Três requisitos juntos: mulher, repetição e contexto doméstico ou familiar.",
      },
      {
        termo: "Tortura do preso (§ 1º)",
        faz: "Mesma pena para quem submete pessoa presa ou sujeita a medida de segurança a sofrimento físico ou mental, por ato não previsto em lei ou que não resulta de medida legal. Não exige violência nem grave ameaça.",
      },
      {
        termo: "Omissão (§ 2º)",
        faz: "Quem se omite diante da tortura, quando tinha o dever de evitá-la ou apurá-la, responde com detenção de 1 a 4 anos. É a única forma que não começa obrigatoriamente no regime fechado (§ 7º).",
        pista: "Omissão = detenção. Todas as outras formas = reclusão.",
      },
      {
        termo: "Tortura qualificada (§ 3º)",
        faz: "Se resulta lesão grave ou gravíssima: reclusão de 4 a 10 anos. Se resulta morte: reclusão de 8 a 16 anos. O resultado é culposo; se o autor quis matar e usou a tortura como meio, o crime é homicídio qualificado.",
      },
      {
        termo: "Aumento de pena (§ 4º)",
        faz: "De 1/6 até 1/3, se o crime é cometido por agente público; contra criança, gestante, pessoa com deficiência, adolescente ou maior de 60 anos; ou mediante sequestro.",
      },
      {
        termo: "Efeitos da condenação (§ 5º)",
        faz: "A condenação leva à perda do cargo, função ou emprego público e à proibição de exercê-lo pelo dobro do prazo da pena aplicada. Para a jurisprudência, esse efeito é automático: o juiz não precisa justificá-lo.",
        pista: "Pena de 3 anos = 6 anos sem poder voltar ao serviço público.",
      },
      {
        termo: "Vedações e regime (§§ 6º e 7º)",
        faz: "A tortura é inafiançável e não admite graça nem anistia. O indulto também é vedado, pela Lei 8.072/1990. O texto manda começar a pena no regime fechado, menos na omissão do § 2º.",
      },
      {
        termo: "Crime fora do Brasil (art. 2º)",
        faz: "A lei se aplica mesmo quando a tortura não foi cometida no território nacional, se a vítima é brasileira ou se o agente está em local sob jurisdição brasileira.",
      },
    ],
  },
  questoes: [
    {
      topico: "Formas de tortura",
      subassunto: "Tortura-discriminação e tortura da mulher",
      dificuldade: 4,
      raciocinio: "Art. 1º, I, c: só discriminação racial ou religiosa. Inciso III: mulher, de forma reiterada, em violência doméstica e familiar. Vingança, rivalidade e política não estão no tipo.",
      enunciado: "Em qual dos casos abaixo há crime de tortura, pela Lei 9.455/1997? O agente, com violência, causa sofrimento físico à vítima",
      alternativas: [
        "por ela torcer para um time rival, só para humilhá-la diante dos amigos dele.",
        "por ódio à religião que ela pratica, para que ela deixe de frequentar o templo.",
        "por vingança, porque ela o denunciou à polícia em um caso do ano anterior.",
        "por divergência política, durante uma discussão na fila de votação.",
        "por ela ser mulher, em uma única agressão na rua, sem vínculo doméstico entre eles.",
      ],
      correta: 1,
      explicacao:
        "A alínea c do art. 1º, I, pune o constrangimento com violência ou grave ameaça, com sofrimento físico ou mental, em razão de discriminação racial ou religiosa. O ódio à religião da vítima se encaixa.",
      explicacaoErradas:
        "Rivalidade de futebol, vingança e política não estão entre as finalidades da lei: em regra, há lesão corporal ou outro crime. A tortura da mulher (inciso III, de 2026) exige sofrimento intenso, reiterado e no contexto de violência doméstica e familiar, o que não ocorre numa agressão única na rua.",
      pegadinha: "Achar que qualquer preconceito gera tortura-discriminação: a lei fala só em raça e religião.",
      conhecimento: "Na tortura-discriminação, o sofrimento não precisa ser intenso; basta o sofrimento físico ou mental.",
    },
    {
      topico: "Formas de tortura",
      subassunto: "Tortura-castigo e maus-tratos",
      dificuldade: 5,
      raciocinio: "Tortura-castigo: vítima sob guarda, poder ou autoridade + violência ou grave ameaça + intenso sofrimento + castigo ou medida preventiva. Maus-tratos (art. 136 do CP): abuso dos meios de correção que expõe a perigo a vida ou a saúde.",
      enunciado: "Sobre a diferença entre a tortura-castigo (art. 1º, II, da Lei 9.455/1997) e os maus-tratos do Código Penal, é correto afirmar que",
      alternativas: [
        "a tortura-castigo pode ser praticada por qualquer pessoa, mesmo sem vínculo de guarda com a vítima.",
        "os maus-tratos só ocorrem quando o autor quer castigar, e a tortura-castigo, quando quer prevenir.",
        "a tortura-castigo dispensa violência ou grave ameaça, bastando o sofrimento mental da vítima.",
        "a tortura-castigo exige intenso sofrimento a quem está sob guarda, poder ou autoridade do autor.",
        "os dois crimes têm a mesma pena, e o juiz escolhe o tipo conforme a idade da vítima.",
      ],
      correta: 3,
      explicacao:
        "O inciso II exige que a vítima esteja sob guarda, poder ou autoridade do autor e que sofra intenso sofrimento físico ou mental, imposto com violência ou grave ameaça, como castigo ou medida preventiva. Se o excesso na correção só expõe a perigo a saúde, sem esse sofrimento intenso, há maus-tratos.",
      explicacaoErradas:
        "A tortura-castigo é crime próprio: exige o vínculo de guarda, poder ou autoridade. Castigar e prevenir aparecem as duas no próprio inciso II. A lei exige violência ou grave ameaça nessa forma. E as penas são diferentes: a tortura é muito mais grave e é equiparada a hediondo.",
      pegadinha: "Esquecer que o \"intenso\" só aparece na tortura-castigo e na tortura da mulher no lar.",
      conhecimento: "O que separa os dois crimes, no caso concreto, é a intensidade do sofrimento e a intenção do autor.",
    },
    {
      topico: "Omissão e regime",
      subassunto: "Omissão diante da tortura",
      dificuldade: 5,
      raciocinio: "§ 2º: quem se omite tendo o dever de evitar ou apurar responde com detenção de 1 a 4 anos. § 7º: o regime fechado inicial não vale para o § 2º.",
      enunciado: "Um delegado soube que dois agentes da sua equipe torturaram um preso para obter a confissão. Ele nada fez para impedir nem mandou apurar. Pela Lei 9.455/1997, o delegado",
      alternativas: [
        "responde pela omissão, com detenção de 1 a 4 anos, sem regime fechado inicial obrigatório.",
        "responde como coautor, com reclusão de 2 a 8 anos, porque tinha o dever legal de agir.",
        "não comete crime, porque não praticou a violência nem estava presente no momento.",
        "responde só por prevaricação, por ter deixado de praticar ato de ofício por interesse pessoal.",
        "responde pela pena da tortura, aumentada de 1/6 a 1/3 por ser agente público, em regime fechado.",
      ],
      correta: 0,
      explicacao:
        "O § 2º criou um crime próprio para quem se omite diante da tortura quando tinha o dever de evitá-la ou apurá-la: detenção de 1 a 4 anos. O § 7º manda iniciar no fechado as condenações da lei, salvo a hipótese do § 2º.",
      explicacaoErradas:
        "A lei trata a omissão com pena própria e menor; não é caso de coautoria com a pena da tortura. A omissão de quem tinha o dever de agir é crime. A prevaricação é afastada porque existe a regra específica da Lei de Tortura. O aumento por ser agente público e o regime fechado não se aplicam a essa figura.",
      pegadinha: "Aplicar a pena da tortura ao omisso: a omissão tem pena de detenção, de 1 a 4 anos.",
      conhecimento: "Por ter pena de detenção e regime próprio, muitos autores entendem que a omissão não é equiparada a hediondo.",
    },
    {
      topico: "Tortura qualificada e aumento de pena",
      subassunto: "Resultado morte",
      dificuldade: 5,
      raciocinio: "§ 3º: morte como resultado não querido = 8 a 16 anos. Se quis matar usando tortura como meio = homicídio qualificado. § 4º, I: agente público aumenta de 1/6 a 1/3.",
      enunciado: "Para obter a confissão de um suspeito, dois agentes públicos o espancaram por horas. Sem que quisessem matá-lo, o suspeito morreu por causa das agressões. Os agentes respondem por",
      alternativas: [
        "homicídio qualificado pelo emprego de tortura, com pena de 12 a 30 anos de reclusão.",
        "tortura simples, de 2 a 8 anos, em concurso com homicídio culposo pela morte da vítima.",
        "tortura qualificada pela lesão grave, de 4 a 10 anos, porque a morte não foi desejada.",
        "lesão corporal seguida de morte, porque não tinham a intenção de matar o suspeito.",
        "tortura com resultado morte, de 8 a 16 anos, com aumento por serem agentes públicos.",
      ],
      correta: 4,
      explicacao:
        "Houve tortura-prova (art. 1º, I, a) com resultado morte não desejado: aplica-se o § 3º, com reclusão de 8 a 16 anos. Como os autores são agentes públicos, a pena aumenta de 1/6 até 1/3 (§ 4º, I).",
      explicacaoErradas:
        "O homicídio qualificado pela tortura exige a vontade de matar. A lei já tem forma própria para a morte não desejada, então não se soma homicídio culposo. A pena de 4 a 10 anos é para lesão grave ou gravíssima, não para morte. A lesão seguida de morte é afastada pela regra especial da Lei de Tortura.",
      pegadinha: "Ler \"tortura\" e \"morte\" e marcar homicídio qualificado sem checar se havia vontade de matar.",
      conhecimento: "Na tortura qualificada, o resultado agravador vem por culpa: é um crime preterdoloso.",
    },
    {
      topico: "Efeitos da condenação",
      subassunto: "Perda do cargo e interdição",
      dificuldade: 4,
      raciocinio: "§ 5º: perda do cargo + interdição pelo dobro do prazo da pena aplicada. Jurisprudência: efeito automático, sem necessidade de fundamentação específica.",
      enunciado: "Um policial foi condenado por tortura a 3 anos de reclusão. Sobre o cargo dele, é correto afirmar que",
      alternativas: [
        "ele só perde o cargo se a sentença justificar a perda, como exige a regra geral do Código Penal.",
        "ele só perde o cargo se a pena aplicada for superior a 4 anos de prisão.",
        "ele perde o cargo e fica proibido de exercer função pública por 6 anos, o dobro da pena.",
        "ele perde o cargo e fica proibido de exercer função pública pelos mesmos 3 anos da pena.",
        "ele perde o cargo e fica proibido para sempre de voltar a qualquer função pública.",
      ],
      correta: 2,
      explicacao:
        "Pelo § 5º, a condenação acarreta a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada: 3 anos de pena, 6 anos de interdição. A jurisprudência entende que esse efeito é automático.",
      explicacaoErradas:
        "A regra geral do Código Penal (art. 92) exige fundamentação e certos limites de pena, mas a Lei de Tortura tem regra própria e automática. A interdição não é igual ao prazo da pena, e sim o dobro. E não é perpétua.",
      pegadinha: "Aplicar a regra geral do art. 92 do CP, que exige pena mínima e fundamentação.",
      conhecimento: "A perda vale para qualquer agente público condenado por tortura, não só para policiais.",
    },
    {
      topico: "Tortura qualificada e aumento de pena",
      subassunto: "Causas de aumento",
      dificuldade: 4,
      raciocinio: "§ 4º: agente público; criança, gestante, pessoa com deficiência, adolescente ou maior de 60 anos; sequestro. Pessoa de 55 anos sem deficiência não está na lista.",
      enunciado: "NÃO aumenta a pena da tortura, pelo § 4º da Lei 9.455/1997, o crime cometido",
      alternativas: [
        "contra adolescente de 16 anos que estava sob a guarda do autor.",
        "contra pessoa de 55 anos, aposentada e sem nenhuma deficiência.",
        "contra gestante, mesmo que a gravidez esteja nos primeiros meses.",
        "mediante sequestro da vítima, levada para um sítio afastado.",
        "por agente público, como um servidor do sistema prisional.",
      ],
      correta: 1,
      explicacao:
        "O § 4º prevê aumento de 1/6 até 1/3 quando a vítima é criança, gestante, pessoa com deficiência, adolescente ou maior de 60 anos. Uma pessoa de 55 anos, sem deficiência, não está na lista.",
      explicacaoErradas:
        "Adolescente e gestante estão expressamente no inciso II do § 4º, sem exigir tempo de gravidez. O sequestro está no inciso III, e o agente público, no inciso I.",
      pegadinha: "Achar que a lei protege a vítima \"idosa\" a partir de 50 anos: a idade é maior de 60.",
      conhecimento: "O inciso que fala do maior de 60 anos ganhou essa redação com o Estatuto da Pessoa Idosa, em 2003.",
    },
    {
      topico: "Aplicação da lei",
      subassunto: "Tortura fora do Brasil",
      dificuldade: 5,
      raciocinio: "Art. 2º: a lei se aplica ao crime fora do território nacional se a vítima é brasileira ou se o agente está em local sob jurisdição brasileira. Não depende das condições do art. 7º do CP.",
      enunciado: "Um estrangeiro torturou um brasileiro em outro país, para obter informações sobre a empresa onde a vítima trabalhava. Sobre a aplicação da lei brasileira, é correto dizer que",
      alternativas: [
        "a lei brasileira não se aplica, porque o crime foi cometido fora do território nacional.",
        "a lei brasileira só se aplica se o autor também for brasileiro, nato ou naturalizado.",
        "a lei brasileira só se aplica se houver requisição do Ministro da Justiça, como manda o CP.",
        "a lei brasileira só se aplica se a vítima for servidora pública brasileira em missão oficial.",
        "a Lei 9.455/1997 se aplica, porque a vítima é brasileira, mesmo com o crime no exterior.",
      ],
      correta: 4,
      explicacao:
        "O art. 2º da Lei de Tortura manda aplicar a lei mesmo quando o crime não foi cometido no território nacional, se a vítima é brasileira ou se o agente se encontra em local sob jurisdição brasileira.",
      explicacaoErradas:
        "A própria lei afasta o limite do território. A nacionalidade do autor não importa quando a vítima é brasileira. A requisição do Ministro da Justiça é exigência do Código Penal para outros crimes contra brasileiro no exterior, não da Lei de Tortura. E a vítima não precisa ser servidora.",
      pegadinha: "Usar a regra geral do art. 7º do Código Penal, que exige requisição do Ministro da Justiça.",
      conhecimento: "O Brasil também é parte da Convenção da ONU contra a Tortura, que pede que os Estados também possam julgar esse crime em certos casos ocorridos no exterior.",
    },
    {
      topico: "Formas de tortura",
      subassunto: "Tortura da mulher no contexto doméstico (2026)",
      dificuldade: 5,
      raciocinio: "Inciso III, incluído em 2026: submeter mulher, reiteradamente, a intenso sofrimento físico ou mental, no contexto de violência doméstica e familiar, sem prejuízo das penas de outras infrações. Pena de 2 a 8 anos.",
      enunciado: "Durante meses, Rui submeteu a esposa, várias vezes, a intenso sofrimento mental e físico dentro de casa, com ameaças e agressões que deixaram lesões leves. Pela Lei 9.455/1997, com as mudanças de 2026, Rui",
      alternativas: [
        "comete tortura (art. 1º, III), com reclusão de 2 a 8 anos, e responde também pelas lesões.",
        "comete só violência psicológica e lesão, porque a tortura exige o fim de obter uma confissão.",
        "só cometeria tortura se fosse agente público ou se a esposa estivesse presa sob sua guarda.",
        "só cometeria tortura se tivesse mantido a esposa em sequestro durante os meses de agressão.",
        "comete tortura, mas com pena de detenção de 1 a 4 anos, por ser um crime ligado à família.",
      ],
      correta: 0,
      explicacao:
        "A Lei 15.410/2026 incluiu o inciso III: submeter mulher, reiteradamente, a intenso sofrimento físico ou mental, no contexto de violência doméstica e familiar. A pena é de reclusão de 2 a 8 anos, \"sem prejuízo\" das penas das outras infrações, como as lesões.",
      explicacaoErradas:
        "O fim de obter confissão é só da alínea a do inciso I; o inciso III não exige essa finalidade. Ser agente público e manter a vítima sob guarda não são requisitos dessa forma. O sequestro é causa de aumento, não requisito. E a pena é de reclusão de 2 a 8 anos; detenção de 1 a 4 é a da omissão.",
      pegadinha: "Achar que toda tortura precisa de uma finalidade como confissão ou castigo.",
      conhecimento: "Os três requisitos da nova forma andam juntos: vítima mulher, repetição dos atos e contexto de violência doméstica e familiar.",
    },
    {
      topico: "Formas de tortura",
      subassunto: "Tortura do preso",
      dificuldade: 4,
      raciocinio: "§ 1º: submeter preso ou pessoa em medida de segurança a sofrimento físico ou mental, por ato não previsto em lei ou que não resulta de medida legal. Não exige violência, grave ameaça nem sofrimento intenso. Vale para preso provisório.",
      enunciado: "Sobre a tortura do preso, prevista no § 1º do art. 1º da Lei 9.455/1997, é correto afirmar que",
      alternativas: [
        "exige intenso sofrimento físico ou mental, como na tortura-castigo do inciso II.",
        "só alcança o preso já condenado de forma definitiva, e não o preso provisório.",
        "não alcança a pessoa internada em cumprimento de medida de segurança.",
        "não exige violência nem grave ameaça; basta o sofrimento por ato fora da lei.",
        "tem pena de detenção de 1 a 4 anos, menor que a das outras formas de tortura.",
      ],
      correta: 3,
      explicacao:
        "O § 1º pune com a mesma pena da tortura (reclusão de 2 a 8 anos) quem submete pessoa presa ou sujeita a medida de segurança a sofrimento físico ou mental, por ato não previsto em lei ou não resultante de medida legal. O texto não exige violência, grave ameaça nem sofrimento intenso.",
      explicacaoErradas:
        "O \"intenso\" aparece no inciso II e no III, não no § 1º. A lei fala em \"pessoa presa\", sem distinguir preso provisório e condenado, e inclui expressamente quem está em medida de segurança. A pena é a mesma do caput; detenção de 1 a 4 anos é a da omissão.",
      pegadinha: "Exigir violência no § 1º: castigos fora da lei, como deixar o preso sem água por dias, já bastam.",
      conhecimento: "Essa forma protege a pessoa que está nas mãos do Estado contra sanções que a lei não prevê.",
    },
    {
      topico: "Omissão e regime",
      subassunto: "Características gerais",
      dificuldade: 5,
      raciocinio: "I: inciso I é crime comum. II: a Lei 9.455 veda fiança, graça e anistia; o indulto vem do art. 2º da Lei 8.072. III: tortura-castigo exige guarda, poder ou autoridade. IV: tortura é equiparada a hediondo.",
      enunciado: "Considere: I. a tortura do inciso I pode ser praticada por qualquer pessoa, não só por agente público; II. o texto da Lei 9.455/1997 veda fiança, graça e anistia, e a vedação do indulto vem da Lei 8.072/1990; III. a tortura-castigo pode ser praticada contra qualquer pessoa, mesmo sem relação de guarda; IV. a tortura é equiparada a crime hediondo. Estão corretos",
      alternativas: [
        "I e II, apenas.",
        "II e III, apenas.",
        "I, II e IV, apenas.",
        "I, III e IV, apenas.",
        "I, II, III e IV.",
      ],
      correta: 2,
      explicacao:
        "O inciso I não exige qualidade especial do autor: é crime comum. O § 6º da Lei de Tortura fala em inafiançável e insuscetível de graça ou anistia, e o art. 2º da Lei 8.072/1990 acrescenta o indulto. A Constituição e a Lei 8.072/1990 dão à tortura o tratamento dos hediondos.",
      explicacaoErradas:
        "O item III está errado: a tortura-castigo exige que a vítima esteja sob guarda, poder ou autoridade do autor. É crime próprio.",
      pegadinha: "Achar que a Lei de Tortura, sozinha, proíbe o indulto: a palavra indulto está na Lei 8.072/1990.",
      conhecimento: "Ao contrário da Convenção da ONU, que fala em funcionário público, a lei brasileira permite que um particular pratique tortura.",
    },
  ],
};
