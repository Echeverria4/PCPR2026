import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "dh-05",
  resumo: {
    ideia:
      "A Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica, 1969) é o tratado central do sistema regional da OEA. Lista direitos civis e políticos, prevê suspensão só em emergência e com núcleo intocável, e cria dois órgãos: a Comissão, que recebe petições, e a Corte, que julga os Estados que aceitaram sua jurisdição.",
    itens: [
      {
        termo: "No Brasil",
        faz: "Aprovada pelo Decreto Legislativo 27/1992 e promulgada pelo Decreto 678/1992. A competência contenciosa da Corte foi reconhecida para fatos posteriores a 10 de dezembro de 1998 (Decreto 4.463/2002). Pelo STF, tem status supralegal.",
      },
      {
        termo: "Vida e pena de morte (art. 4º)",
        faz: "Vida protegida, em geral, desde a concepção. Onde existe, a pena de morte não se estende a crimes a que hoje não se aplica, não é restabelecida onde foi abolida, não cabe por crimes políticos ou comuns conexos e não se aplica a menores de 18, maiores de 70 nem a grávidas. Anistia, indulto ou comutação podem ser pedidos sempre.",
      },
      {
        termo: "Integridade e trabalho (arts. 5º e 6º)",
        faz: "Proíbe tortura e tratamento cruel. A pena não passa da pessoa do delinquente; processados ficam separados dos condenados; menores vão a tribunal especializado; a pena visa a reforma e a readaptação social. Proíbe escravidão e servidão.",
      },
      {
        termo: "Liberdade pessoal (art. 7º)",
        faz: "O preso deve ser informado das razões e conduzido, sem demora, à presença de um juiz ou outra autoridade com funções judiciais. Recurso a juiz sobre a legalidade da prisão (habeas corpus). Ninguém é detido por dívida, salvo obrigação alimentar.",
        pista: "Daí a Súmula Vinculante 25: é ilícita a prisão do depositário infiel.",
      },
      {
        termo: "Garantias judiciais (art. 8º)",
        faz: "Presunção de inocência; tradutor ou intérprete gratuito; defensor proporcionado pelo Estado, direito irrenunciável; não depor contra si nem se declarar culpado; recorrer da sentença a juiz ou tribunal superior; confissão só sem coação; absolvido por sentença transitada não é processado de novo pelos mesmos fatos.",
      },
      {
        termo: "Expressão e resposta (arts. 13 e 14)",
        faz: "Sem censura prévia, só responsabilidades ulteriores fixadas em lei. Exceção: espetáculos públicos, para regular o acesso e proteger a infância. A lei deve proibir propaganda de guerra e apologia ao ódio. Quem é atingido por informação inexata ou ofensiva tem direito de resposta.",
      },
      {
        termo: "Circulação, asilo e direitos políticos (arts. 22 e 23)",
        faz: "Asilo por perseguição por delitos políticos ou comuns conexos. Nenhum estrangeiro é entregue a país onde sua vida ou liberdade corra risco (não devolução). Proibida a expulsão coletiva. Direitos políticos só podem ser regulados por idade, nacionalidade, residência, idioma, instrução, capacidade ou condenação penal por juiz competente.",
      },
      {
        termo: "Suspensão de garantias (art. 27)",
        faz: "Em guerra, perigo público ou emergência que ameace o Estado, pelo tempo estritamente necessário e sem discriminação. Comunicação imediata aos outros Estados-Partes pelo Secretário-Geral da OEA.",
        pista: "Nunca se suspendem os arts. 3º, 4º, 5º, 6º, 9º, 12, 17, 18, 19, 20 e 23, nem as garantias judiciais indispensáveis.",
      },
      {
        termo: "Comissão Interamericana",
        faz: "Sete membros, eleitos a título pessoal pela Assembleia Geral da OEA, de listas dos governos (até três candidatos), para quatro anos, com uma reeleição; não pode ter dois nacionais do mesmo país. Representa todos os membros da OEA.",
      },
      {
        termo: "Petições (arts. 44 a 47)",
        faz: "Qualquer pessoa, grupo ou ONG reconhecida pode peticionar, sem declaração do Estado; comunicação de um Estado contra outro exige declaração de ambos. Requisitos: recursos internos esgotados, seis meses da notificação da decisão definitiva, sem litispendência internacional e identificação do autor.",
        pista: "Dispensa-se o esgotamento se não houver devido processo, se o acesso aos recursos for negado ou se houver demora injustificada.",
      },
      {
        termo: "Corte Interamericana",
        faz: "Sete juízes, nacionais de Estados-membros da OEA, eleitos pela maioria absoluta dos Estados-Partes, para seis anos, com uma reeleição. Só os Estados-Partes e a Comissão submetem casos, e o Estado precisa ter declarado aceitar a jurisdição. Medidas provisórias em extrema gravidade e urgência. Sentença definitiva e inapelável; indenização executada pelo processo interno contra o Estado. Função consultiva para qualquer membro da OEA.",
      },
      {
        termo: "Casos contra o Brasil",
        faz: "Ximenes Lopes (2006): primeira condenação, morte em clínica psiquiátrica. Nogueira de Carvalho (2006): sem condenação. Gomes Lund (2010): Lei de Anistia incompatível e dever de tipificar o desaparecimento forçado. Primeiro caso de trabalho escravo (2016): discriminação estrutural histórica. Favela Nova Brasília (2017): mortes em operações policiais. Xucuru (2018): primeiro caso indígena. Herzog (2018): crime contra a humanidade.",
      },
      {
        termo: "Protocolo de San Salvador",
        faz: "Protocolo de 1988 sobre direitos econômicos, sociais e culturais (Decreto 3.321/1999). Os Estados mandam relatórios ao Secretário-Geral da OEA. Petição individual só cabe por violação dos direitos sindicais (art. 8º, a) e do direito à educação (art. 13).",
      },
    ],
    cuidado:
      "A vítima não leva o caso direto à Corte: peticiona à Comissão, e só a Comissão ou um Estado-Parte submetem o caso à Corte. O caso Maria da Penha ficou na Comissão (relatório de 2001), não na Corte.",
  },
  questoes: [
    {
      topico: "Convenção Americana",
      subassunto: "Pena de morte",
      dificuldade: 5,
      raciocinio: "Abolida a pena de morte, ela não volta.",
      enunciado:
        "Um Estado-Parte da Convenção Americana que já aboliu a pena de morte discute restabelecê-la para homicídios qualificados cometidos em rodovias. À luz do art. 4º da Convenção, é correto afirmar que o restabelecimento:",
      alternativas: [
        "é possível se previsto em lei aprovada por maioria qualificada e restrito a crimes de extrema gravidade cometidos depois dela",
        "é vedado, porque a pena de morte não pode ser restabelecida nos Estados que a tenham abolido",
        "é possível, desde que a pena não seja aplicada a menores de 21 anos nem a pessoas com mais de 65 anos",
        "é possível só para crimes políticos e comuns conexos, desde que haja sentença definitiva de tribunal competente",
        "é possível se a execução esperar a negativa da comutação, pedido que não cabe nos crimes de maior gravidade",
      ],
      correta: 1,
      explicacao:
        "O art. 4º, 3, da Convenção diz que não se pode restabelecer a pena de morte nos Estados que a hajam abolido. É uma cláusula de mão única: o Estado pode abolir, nunca voltar atrás.",
      explicacaoErradas:
        "Nenhuma lei, nem com “maioria qualificada”, autoriza a volta. Os limites de idade são “menores de 18” e maiores de 70, não “menores de 21 anos” e 65. A pena de morte é proibida justamente para “crimes políticos e comuns conexos”. A anistia, o indulto ou a comutação podem ser pedidos “em todos os casos”, não excluídos nos “crimes de maior gravidade”.",
      pegadinha: "Achar que lei especial ou crime grave abre exceção à proibição de restabelecer.",
      conhecimento: "A Convenção também proíbe estender a pena de morte a crimes aos quais ela não se aplica atualmente.",
    },
    {
      topico: "Convenção Americana",
      subassunto: "Prisão por dívida",
      dificuldade: 5,
      raciocinio: "Só o alimentar é ressalvado; daí a SV 25.",
      enunciado:
        "Sobre a prisão civil por dívida, considerando a Convenção Americana e a jurisprudência do STF, assinale a correta.",
      alternativas: [
        "A Convenção proíbe a prisão por dívida sem exceção, e por isso também a prisão do devedor de alimentos foi afastada no Brasil.",
        "A Convenção admite a prisão do depositário infiel, desde que decretada por autoridade judiciária competente em processo regular.",
        "A Constituição autoriza a prisão do depositário infiel e, por ser superior ao tratado, essa prisão segue válida no Brasil.",
        "A Convenção limita a prisão por dívida às obrigações alimentar e tributária, vedando as demais formas de inadimplemento.",
        "Só a obrigação alimentar é ressalvada, e o STF tem por ilícita a prisão do depositário infiel, qualquer que seja o depósito.",
      ],
      correta: 4,
      explicacao:
        "O art. 7º, 7, diz que ninguém deve ser detido por dívida, princípio que não limita os mandados judiciais por inadimplemento de obrigação alimentar. Como a Convenção tem status supralegal, paralisou a lei que permitia a prisão do depositário infiel: Súmula Vinculante 25.",
      explicacaoErradas:
        "A exceção alimentar existe, então a proibição não é “sem exceção”. A Convenção não “admite a prisão do depositário infiel”. Embora a Constituição preveja a hipótese, o STF entendeu que a norma supralegal impede a lei que a regulava; a prisão não “segue válida no Brasil”. Não há ressalva para obrigação “tributária”.",
      pegadinha: "Confundir a previsão constitucional da prisão do depositário com a sua validade hoje.",
      conhecimento: "SV 25: é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.",
    },
    {
      topico: "Convenção Americana",
      subassunto: "Liberdade pessoal",
      dificuldade: 4,
      raciocinio: "A Convenção fala em “sem demora” e em autoridade com funções judiciais.",
      enunciado:
        "Uma equipe da PRF prende em flagrante, numa rodovia federal, um motorista que transportava armas sem autorização. À luz do art. 7º da Convenção Americana, o preso:",
      alternativas: [
        "deve ser levado a um juiz em até 24 horas, prazo fixado de forma expressa pela Convenção para todos os Estados-Partes",
        "pode ser apresentado só ao delegado, autoridade que a Convenção equipara expressamente ao juiz para controle da prisão",
        "deve ser levado, sem demora, a um juiz ou a outra autoridade autorizada por lei a exercer funções judiciais",
        "só tem direito a ser ouvido por um juiz se não for julgado em prazo razoável, caso em que deve ser solto de imediato",
        "pode ter a apresentação ao juiz dispensada, se o flagrante for comunicado ao Ministério Público e à Defensoria no mesmo dia",
      ],
      correta: 2,
      explicacao:
        "O art. 7º, 5, manda conduzir o preso, sem demora, à presença de um juiz ou outra autoridade autorizada pela lei a exercer funções judiciais. É a base convencional da audiência de custódia.",
      explicacaoErradas:
        "A Convenção não fixa “24 horas”: esse prazo vem da lei processual brasileira. O delegado não exerce funções judiciais, e a Convenção não o equipara ao juiz. A apresentação não depende de demora no julgamento nem pode ser “dispensada” por comunicação a outros órgãos.",
      pegadinha: "Atribuir à Convenção o prazo de 24 horas, que é do Código de Processo Penal.",
      conhecimento: "O preso também tem direito a ser julgado em prazo razoável ou posto em liberdade, sem prejuízo do processo.",
    },
    {
      topico: "Convenção Americana",
      subassunto: "Garantias judiciais",
      dificuldade: 4,
      raciocinio: "Tradutor gratuito é garantia mínima do art. 8º, 2.",
      enunciado:
        "Estrangeiro que não fala português responde a processo por crime cometido numa rodovia federal. Entre as garantias mínimas do art. 8º, 2, da Convenção Americana, está a de:",
      alternativas: [
        "ser assistido gratuitamente por tradutor ou intérprete, se não compreender ou não falar o idioma do juízo ou tribunal",
        "ser julgado por júri popular, sempre que a pena máxima cominada ao crime passar de quatro anos de privação de liberdade",
        "recorrer da sentença só se condenado a pena privativa de liberdade, já que nas demais penas não há duplo grau assegurado",
        "ter defensor dado pelo Estado só se provar falta de recursos, porque a assistência é um direito do qual se pode abrir mão",
        "ter a confissão aceita mesmo se feita sob coação leve, desde que confirmada por outras provas colhidas na fase judicial",
      ],
      correta: 0,
      explicacao:
        "O art. 8º, 2, a, garante ao acusado ser assistido gratuitamente por tradutor ou intérprete, se não compreender ou não falar o idioma do juízo ou tribunal.",
      explicacaoErradas:
        "A Convenção não prevê “júri popular”. O direito de recorrer da sentença a juiz ou tribunal superior não depende da espécie de pena. O defensor proporcionado pelo Estado é direito irrenunciável, e não algo de que “se pode abrir mão”. A confissão só vale se feita sem coação de nenhuma natureza, nem “coação leve”.",
      pegadinha: "Achar que a assistência do defensor estatal pode ser renunciada.",
      conhecimento: "O acusado absolvido por sentença transitada em julgado não pode ser submetido a novo processo pelos mesmos fatos.",
    },
    {
      topico: "Convenção Americana",
      subassunto: "Suspensão de garantias",
      dificuldade: 5,
      raciocinio: "Legalidade (art. 9º) e direitos políticos (art. 23) estão no núcleo intocável.",
      enunciado:
        "Em emergência que ameace a independência ou a segurança de um Estado-Parte, a Convenção Americana permite suspender obrigações, mas não autoriza a suspensão:",
      alternativas: [
        "do direito de reunião pacífica e do direito de circulação e de residência",
        "da liberdade de pensamento e de expressão e do direito de resposta",
        "da liberdade de associação e do direito ao uso e gozo da propriedade",
        "do princípio da legalidade e da retroatividade e dos direitos políticos",
        "da proteção da honra e da dignidade e do direito à liberdade pessoal",
      ],
      correta: 3,
      explicacao:
        "O art. 27, 2, não autoriza suspender os arts. 3º, 4º, 5º, 6º, 9º (legalidade e retroatividade), 12, 17, 18, 19, 20 e 23 (direitos políticos), nem as garantias judiciais indispensáveis para protegê-los.",
      explicacaoErradas:
        "Reunião (art. 15) e “circulação e de residência” (art. 22) podem ser suspensas. Expressão (art. 13) e “direito de resposta” (art. 14) também. Associação (art. 16) e “propriedade” (art. 21) não estão no núcleo, nem a “proteção da honra” (art. 11) e a “liberdade pessoal” (art. 7º), ressalvado o habeas corpus.",
      pegadinha: "Pensar que liberdade de expressão ou liberdade pessoal são insuspensíveis na Convenção.",
      conhecimento: "Também são intocáveis: personalidade jurídica, vida, integridade, escravidão, consciência e religião, família, nome, criança e nacionalidade.",
    },
    {
      topico: "Convenção Americana",
      subassunto: "Suspensão de garantias",
      dificuldade: 5,
      raciocinio: "Comunicação pelo Secretário-Geral da OEA, com motivos e data do fim.",
      enunciado: "Sobre a suspensão de garantias prevista no art. 27 da Convenção Americana, é correto afirmar que ela:",
      alternativas: [
        "deve ser comunicada ao Secretário-Geral da ONU, que informa aos demais Estados as disposições suspensas e os motivos",
        "pode durar enquanto o governo julgar necessário, pois a Convenção não exige limite temporal para as medidas adotadas",
        "deve ser informada logo aos outros Estados-Partes, por intermédio do Secretário-Geral da OEA, com os motivos",
        "admite distinção por origem social, se a medida for estritamente necessária para conter a situação de emergência",
        "alcança o direito ao nome e os direitos da criança, desde que haja guerra declarada e autorização prévia da Comissão",
      ],
      correta: 2,
      explicacao:
        "O art. 27, 3, manda o Estado informar imediatamente os outros Estados-Partes, por intermédio do Secretário-Geral da OEA, das disposições suspensas, dos motivos e da data em que terminou a suspensão.",
      explicacaoErradas:
        "O canal é o Secretário-Geral da OEA, não da “ONU”. As medidas valem só pelo tempo estritamente limitado às exigências da situação, e não “enquanto o governo julgar necessário”. É proibida discriminação por raça, cor, sexo, idioma, religião ou “origem social”. Nome (art. 18) e direitos da criança (art. 19) não podem ser suspensos.",
      pegadinha: "Trocar a OEA pela ONU no canal de comunicação.",
      conhecimento: "No Pacto Internacional de Direitos Civis e Políticos, a comunicação vai pelo Secretário-Geral da ONU.",
    },
    {
      topico: "Comissão Interamericana",
      subassunto: "Composição",
      dificuldade: 4,
      raciocinio: "Sete membros, Assembleia Geral, quatro anos, uma reeleição.",
      enunciado: "Sobre a Comissão Interamericana de Direitos Humanos, é correto afirmar que:",
      alternativas: [
        "tem sete membros, eleitos pela Assembleia Geral da OEA para mandato de quatro anos, com uma reeleição",
        "tem sete juízes, eleitos só pelos Estados que reconheceram a sua competência, para mandato de seis anos",
        "representa só os Estados que ratificaram a Convenção, e cada Estado pode ter até dois nacionais entre seus membros",
        "tem membros indicados pelo Secretário-Geral da OEA a partir de lista tríplice elaborada pela própria Comissão",
        "tem membros eleitos de listas em que cada governo propõe até cinco candidatos, nacionais de qualquer país do mundo",
      ],
      correta: 0,
      explicacao:
        "Pelos arts. 34 a 37, a Comissão tem sete membros, eleitos a título pessoal pela Assembleia Geral da OEA, de listas propostas pelos governos, para quatro anos, com uma única reeleição.",
      explicacaoErradas:
        "Os membros da Comissão não são “juízes” e o mandato não é de “seis anos”. A Comissão representa todos os membros da OEA, e não pode ter mais de um nacional do mesmo país. Não há indicação pelo “Secretário-Geral da OEA”. Cada governo propõe até três candidatos, nacionais de Estados-membros da OEA, não “até cinco”.",
      pegadinha: "Misturar os números da Comissão (quatro anos) com os da Corte (seis anos).",
      conhecimento: "Quando um governo propõe três candidatos, ao menos um deve ser nacional de outro Estado.",
    },
    {
      topico: "Comissão Interamericana",
      subassunto: "Petições",
      dificuldade: 4,
      raciocinio: "Petição individual não depende de declaração; a interestatal depende.",
      enunciado:
        "Uma organização não governamental legalmente reconhecida quer denunciar à Comissão Interamericana uma violação cometida por um Estado-Parte. Segundo a Convenção Americana:",
      alternativas: [
        "a petição só é admitida se o Estado denunciado tiver declarado, de forma expressa, aceitar a competência da Comissão para recebê-la",
        "a ONG precisa demonstrar que é a vítima da violação, pois a Convenção não admite petição apresentada em favor de terceiros",
        "a ONG deve estar reconhecida em todos os Estados-membros da OEA, e não só em um ou alguns deles",
        "a ONG deve apresentar a denúncia direto à Corte Interamericana, que a envia à Comissão para tentar a solução amistosa",
        "a petição dispensa declaração do Estado, exigida só quando um Estado-Parte denuncia outro Estado-Parte",
      ],
      correta: 4,
      explicacao:
        "Pelo art. 44, qualquer pessoa, grupo de pessoas ou entidade não governamental reconhecida em um ou mais Estados-membros da OEA pode peticionar à Comissão. A declaração de reconhecimento só é exigida, pelo art. 45, nas comunicações entre Estados.",
      explicacaoErradas:
        "A exigência de “declarado, de forma expressa” vale para a comunicação interestatal. A petição pode ser apresentada por quem não é a vítima, então não precisa provar “que é a vítima”. Basta o reconhecimento em um ou mais Estados, não “em todos os Estados-membros”. A petição vai à Comissão, não “direto à Corte Interamericana”.",
      pegadinha: "Aplicar à petição individual a exigência de declaração da comunicação interestatal.",
      conhecimento: "A declaração para comunicações interestatais pode valer por tempo indefinido, por período determinado ou para casos específicos.",
    },
    {
      topico: "Comissão Interamericana",
      subassunto: "Admissibilidade",
      dificuldade: 4,
      raciocinio: "Esgotamento dos recursos e seis meses da decisão definitiva.",
      enunciado:
        "A vítima de abuso policial no Brasil quer peticionar à Comissão Interamericana. Pelo art. 46 da Convenção Americana, em regra, é requisito de admissibilidade:",
      alternativas: [
        "apresentar a petição em até dois anos contados do fato, independentemente do andamento dos recursos internos",
        "apresentar a petição em seis meses da notificação da decisão definitiva, depois de esgotados os recursos internos",
        "obter autorização prévia do Ministério Público, que atesta não haver outro processo internacional sobre o mesmo caso",
        "mostrar que a matéria já foi examinada por outra instância internacional, o que reforça a admissibilidade do pedido",
        "manter sigilo da própria identidade, pois a Convenção proíbe que a petição traga nome, nacionalidade e domicílio",
      ],
      correta: 1,
      explicacao:
        "O art. 46, 1, exige esgotamento dos recursos da jurisdição interna, apresentação em seis meses a partir da notificação da decisão definitiva, ausência de outro processo internacional pendente e identificação do peticionário.",
      explicacaoErradas:
        "O prazo não é de “dois anos contados do fato”. Não existe “autorização prévia do Ministério Público”. A matéria não pode estar pendente em outro processo internacional, o que afasta a ideia de que isso “reforça a admissibilidade”. A petição deve conter nome, nacionalidade, profissão, domicílio e assinatura, e não “manter sigilo”.",
      pegadinha: "Contar o prazo de seis meses a partir do fato, e não da decisão definitiva.",
      conhecimento: "A Comissão declara inadmissível a petição manifestamente infundada ou que repita outra já examinada.",
    },
    {
      topico: "Comissão Interamericana",
      subassunto: "Admissibilidade",
      dificuldade: 5,
      raciocinio: "As três exceções do art. 46, 2.",
      enunciado:
        "Segundo a Convenção Americana, as exigências de esgotamento dos recursos internos e de prazo de seis meses não se aplicam quando:",
      alternativas: [
        "a vítima morar fora do território do Estado denunciado e não puder voltar sem risco à própria integridade física",
        "a violação atingir direitos econômicos e sociais, cujo controle é feito com exclusividade pela Comissão",
        "a petição vier de entidade não governamental, que tem legitimidade especial e por isso dispensa esses requisitos",
        "houver demora injustificada na decisão dos recursos ou a vítima não tiver tido acesso a eles",
        "o Estado denunciado tiver reconhecido a competência contenciosa da Corte antes da ocorrência dos fatos",
      ],
      correta: 3,
      explicacao:
        "O art. 46, 2, dispensa esses requisitos quando não houver devido processo legal para proteger o direito, quando o prejudicado não tiver tido acesso aos recursos internos ou for impedido de esgotá-los, ou quando houver demora injustificada na decisão.",
      explicacaoErradas:
        "Morar fora do país não está entre as exceções. Não há regime especial para “direitos econômicos e sociais” nem para “entidade não governamental”. O reconhecimento da “competência contenciosa da Corte” nada tem a ver com a admissibilidade na Comissão.",
      pegadinha: "Inventar exceção pela qualidade do peticionário.",
      conhecimento: "As exceções evitam que o Estado se beneficie da própria omissão.",
    },
    {
      topico: "Corte Interamericana",
      subassunto: "Legitimidade",
      dificuldade: 5,
      raciocinio: "Só Estados-Partes e Comissão; jurisdição por declaração.",
      enunciado:
        "Encerrado sem solução o procedimento na Comissão Interamericana, a vítima quer que seu caso seja julgado pela Corte. Segundo a Convenção Americana:",
      alternativas: [
        "a vítima pode submeter o caso direto à Corte, desde que representada por advogado inscrito em qualquer Estado-Parte",
        "a Corte pode julgar mesmo sem declaração do Estado, pois a ratificação da Convenção já implica aceitar sua jurisdição",
        "a Comissão só pode submeter o caso se o Estado tiver dado anuência expressa para aquele caso específico",
        "o caso pode ser submetido por qualquer Estado-membro da OEA, ainda que não seja parte da Convenção",
        "só os Estados-Partes e a Comissão submetem casos, e o Estado deve ter reconhecido a competência da Corte",
      ],
      correta: 4,
      explicacao:
        "Pelo art. 61, só os Estados-Partes e a Comissão têm direito de submeter caso à Corte, depois de esgotado o procedimento na Comissão. Pelo art. 62, o Estado precisa ter declarado reconhecer a competência da Corte.",
      explicacaoErradas:
        "A vítima não submete o caso “direto à Corte”. A ratificação não basta: é preciso declaração, e por isso a ideia de “mesmo sem declaração” está errada. A declaração pode ser geral, sem “anuência expressa para aquele caso específico”. Estado “que não seja parte da Convenção” não submete casos.",
      pegadinha: "Supor que a vítima acessa a Corte como acessa a Comissão.",
      conhecimento: "A declaração pode ser incondicional ou sob reciprocidade, por prazo determinado ou para casos específicos.",
    },
    {
      topico: "Corte Interamericana",
      subassunto: "Composição",
      dificuldade: 5,
      raciocinio: "Sete juízes, eleitos pelos Estados-Partes, seis anos, uma reeleição.",
      enunciado: "Sobre a composição da Corte Interamericana de Direitos Humanos, é correto afirmar que ela:",
      alternativas: [
        "tem sete juízes, eleitos pela maioria absoluta de todos os membros da Assembleia Geral da OEA, para mandato de quatro anos",
        "tem sete juízes, nacionais de Estados-membros da OEA, eleitos pelos Estados-Partes da Convenção para seis anos",
        "tem onze juízes, um de cada Estado que reconheceu sua jurisdição, com mandato de seis anos e vedada a reeleição",
        "tem sete juízes, que atuam como representantes dos Estados que os indicaram, e dois deles podem ter a mesma nacionalidade",
        "tem sete juízes, que podem ser reeleitos sem limite enquanto mantiverem a nacionalidade de um Estado-Parte",
      ],
      correta: 1,
      explicacao:
        "Pelos arts. 52 a 54, a Corte tem sete juízes, nacionais de Estados-membros da OEA, eleitos a título pessoal, em votação secreta e pela maioria absoluta dos Estados-Partes na Convenção, para seis anos, com uma reeleição.",
      explicacaoErradas:
        "Votam os Estados-Partes da Convenção, não “todos os membros da Assembleia Geral”, e o mandato é de seis anos, não “quatro anos”. São sete juízes, não “onze juízes”. Os juízes atuam a título pessoal, e não pode haver “dois deles” da mesma nacionalidade. A reeleição é uma só, não “sem limite”.",
      pegadinha: "Achar que todos os membros da OEA votam na eleição dos juízes da Corte.",
      conhecimento: "Os candidatos são propostos pelos próprios Estados-Partes, até três cada um.",
    },
    {
      topico: "Corte Interamericana",
      subassunto: "Medidas provisórias",
      dificuldade: 4,
      raciocinio: "Em caso não submetido, a Corte age a pedido da Comissão.",
      enunciado:
        "Em caso de extrema gravidade e urgência, para evitar danos irreparáveis às pessoas, a Corte Interamericana:",
      alternativas: [
        "pode tomar medidas provisórias nos casos em exame e, nos ainda não submetidos, atuar a pedido da Comissão",
        "pode tomar medidas provisórias só nos casos já sentenciados, para garantir o pagamento da indenização fixada",
        "pode tomar medidas provisórias em casos ainda não submetidos, a pedido direto da vítima ou de familiares",
        "deve consultar antes a Assembleia Geral da OEA, que autoriza ou não as medidas provisórias pedidas",
        "pode tomar medidas provisórias apenas contra Estados que ainda não reconheceram sua competência contenciosa",
      ],
      correta: 0,
      explicacao:
        "O art. 63, 2, permite à Corte tomar medidas provisórias nos assuntos de que estiver conhecendo. Se o assunto ainda não estiver submetido a ela, poderá atuar a pedido da Comissão.",
      explicacaoErradas:
        "As medidas não se limitam a “casos já sentenciados”: servem justamente para evitar o dano antes. Nos casos não submetidos, o pedido vem da Comissão, não “a pedido direto da vítima”. Não há consulta à “Assembleia Geral da OEA”. A atuação pressupõe a jurisdição, e não Estados que “ainda não reconheceram” a competência.",
      pegadinha: "Dar à vítima o pedido de medida provisória em caso ainda não submetido à Corte.",
      conhecimento: "A Comissão também pode adotar medidas cautelares, previstas em seu regulamento.",
    },
    {
      topico: "Corte Interamericana",
      subassunto: "Funções e sentença",
      dificuldade: 5,
      raciocinio: "Indenização executada pelo processo interno contra o Estado.",
      enunciado: "Sobre as funções da Corte Interamericana e suas decisões, é correto afirmar que:",
      alternativas: [
        "a função consultiva é reservada aos Estados-Partes que reconheceram a competência contenciosa da Corte",
        "a sentença pode ser revista pela Assembleia Geral da OEA se o Estado condenado provar que não pode cumpri-la",
        "a parte da sentença que fixa indenização pode ser executada no país pelo processo interno contra o Estado",
        "os pareceres consultivos tratam só da interpretação da Convenção, sem exame das leis internas dos Estados",
        "o pedido de interpretação da sentença pode ser feito por qualquer das partes, a qualquer tempo e sem prazo",
      ],
      correta: 2,
      explicacao:
        "O art. 68, 2, prevê que a parte da sentença que determinar indenização compensatória pode ser executada no país pelo processo interno vigente para a execução de sentenças contra o Estado.",
      explicacaoErradas:
        "Qualquer Estado-membro da OEA e seus órgãos podem consultar a Corte, não só os que aceitaram a “competência contenciosa”. A sentença é definitiva e inapelável, sem revisão pela “Assembleia Geral da OEA”. A Corte pode dar parecer sobre a compatibilidade de “leis internas” com os tratados. O pedido de interpretação tem prazo de 90 dias da notificação, e não “sem prazo”.",
      pegadinha: "Confundir a função consultiva, aberta a todos os membros da OEA, com a contenciosa.",
      conhecimento: "Os Estados-Partes comprometem-se a cumprir a decisão da Corte em todo caso em que forem partes.",
    },
    {
      topico: "Corte Interamericana",
      subassunto: "Casos contra o Brasil",
      dificuldade: 4,
      raciocinio: "Primeira condenação: morte em clínica psiquiátrica (2006).",
      enunciado: "Sobre casos brasileiros no sistema interamericano, é correto afirmar que:",
      alternativas: [
        "o caso Maria da Penha levou à primeira condenação do Brasil pela Corte Interamericana, por omissão diante da violência doméstica",
        "no caso Gomes Lund, a Corte julgou compatível com a Convenção a Lei de Anistia, por ter sido validada pelo STF",
        "o caso Ximenes Lopes tratou de trabalho escravo e foi o primeiro a reconhecer a discriminação estrutural histórica",
        "no caso Ximenes Lopes, sobre morte em clínica psiquiátrica, deu-se a primeira condenação do Brasil pela Corte",
        "no caso Xucuru, a Corte afastou a responsabilidade do Brasil, por julgar razoável a demora na demarcação",
      ],
      correta: 3,
      explicacao:
        "Ximenes Lopes (2006) foi a primeira condenação do Brasil pela Corte: a morte de um paciente em clínica psiquiátrica ligada ao sistema público.",
      explicacaoErradas:
        "O caso “Maria da Penha” foi decidido pela Comissão, em relatório de 2001, e não pela Corte. Em Gomes Lund, a Corte julgou a Lei de Anistia incompatível, ao contrário de “compatível com a Convenção”. O caso de “trabalho escravo” foi outro, julgado em 2016. Em Xucuru, o Brasil foi condenado pela demora na demarcação.",
      pegadinha: "Atribuir à Corte o caso Maria da Penha, que ficou na Comissão.",
      conhecimento: "Favela Nova Brasília (2017) tratou de mortes em operações policiais e exigiu investigação por órgão independente.",
    },
    {
      topico: "Sistema Interamericano",
      subassunto: "Protocolo de San Salvador",
      dificuldade: 5,
      raciocinio: "Petição só para direitos sindicais e educação.",
      enunciado:
        "Sobre o Protocolo de San Salvador, adicional à Convenção Americana em matéria de direitos econômicos, sociais e culturais, é correto afirmar que ele:",
      alternativas: [
        "permite petições individuais sobre todos os direitos que enumera, como saúde, alimentação e meio ambiente sadio",
        "admite petição individual só por violação dos direitos sindicais e do direito à educação imputável ao Estado",
        "não foi incorporado pelo Brasil, que apenas o assinou, razão pela qual não produz efeitos no direito interno",
        "atribui à Corte Interamericana o exame dos relatórios periódicos dos Estados sobre as medidas progressivas",
        "foi adotado com a própria Convenção, em 1969, e por isso os dois tratados entraram em vigor na mesma data",
      ],
      correta: 1,
      explicacao:
        "O Protocolo (1988) só abre o sistema de petições individuais para os direitos sindicais do art. 8º, a, e para o direito à educação do art. 13, quando violados por ação imputável diretamente ao Estado.",
      explicacaoErradas:
        "Saúde, alimentação e meio ambiente não admitem petição, então não são “todos os direitos que enumera”. O Brasil o promulgou pelo Decreto 3.321/1999, e não “apenas o assinou”. Os relatórios vão ao Secretário-Geral da OEA, que os envia aos conselhos interamericanos, e não à “Corte Interamericana”. É de 1988, e não “adotado com a própria Convenção”.",
      pegadinha: "Estender a petição individual a todos os direitos sociais do Protocolo.",
      conhecimento: "O Protocolo também prevê direitos dos idosos e das pessoas com deficiência.",
    },
    {
      topico: "Convenção Americana",
      subassunto: "Liberdade de expressão",
      dificuldade: 4,
      raciocinio: "Sem censura prévia; responsabilidade posterior fixada em lei.",
      enunciado:
        "Lei hipotética exige que reportagens sobre operações policiais em rodovias passem por aprovação prévia de órgão público antes da divulgação. À luz do art. 13 da Convenção Americana, a exigência:",
      alternativas: [
        "é válida, pois a Convenção admite censura prévia para proteger a segurança nacional e a ordem pública",
        "é válida só para emissoras de rádio e televisão, que operam por concessão e se sujeitam a controle prévio",
        "é incompatível: a expressão não admite censura prévia, só responsabilidades posteriores fixadas em lei",
        "é incompatível só se a reportagem tratar de política, pois nos demais temas a censura prévia é permitida",
        "é válida se aplicada também aos espetáculos públicos, que a Convenção submete a controle prévio irrestrito",
      ],
      correta: 2,
      explicacao:
        "O art. 13, 2, veda a censura prévia e admite só responsabilidades ulteriores, expressamente fixadas em lei e necessárias para proteger a reputação alheia, a segurança nacional, a ordem pública, a saúde ou a moral públicas.",
      explicacaoErradas:
        "A “segurança nacional e a ordem pública” justificam responsabilidade posterior, não censura prévia. Não há regime de controle prévio para “emissoras de rádio e televisão”, e a Convenção veda restrições por meios indiretos. A proibição não se limita a “política”. Os espetáculos públicos admitem censura prévia só para regular o acesso e proteger a infância, e não “controle prévio irrestrito”.",
      pegadinha: "Ler os fins do art. 13, 2, como autorização para censura prévia.",
      conhecimento: "A lei deve proibir a propaganda de guerra e a apologia ao ódio que incite à violência ou à discriminação.",
    },
    {
      topico: "Convenção Americana",
      subassunto: "Circulação e asilo",
      dificuldade: 4,
      raciocinio: "Não devolução: nenhum estrangeiro entregue a país onde corra risco.",
      enunciado:
        "Estrangeiro em situação irregular é abordado pela PRF numa rodovia de fronteira e diz que, se devolvido ao país de origem, será perseguido por suas opiniões políticas. Segundo o art. 22 da Convenção Americana:",
      alternativas: [
        "ele não pode ser expulso ou entregue a país, de origem ou não, onde sua vida ou liberdade corra risco por suas opiniões",
        "ele pode ser devolvido ao país de origem, pois a proteção contra a devolução só alcança o estrangeiro que está legalmente no país",
        "ele pode ser expulso junto com outros estrangeiros na mesma situação, desde que a medida coletiva seja decidida por um juiz",
        "ele tem direito a asilo em qualquer perseguição, inclusive por crime comum sem nenhuma relação com delito político",
        "ele só pode invocar a proteção se for nacional de um Estado-Parte, pois a Convenção não ampara nacionais de outros países",
      ],
      correta: 0,
      explicacao:
        "O art. 22, 8, proíbe expulsar ou entregar o estrangeiro a outro país, seja ou não de origem, onde seu direito à vida ou à liberdade corra risco por causa de raça, nacionalidade, religião, condição social ou opiniões políticas.",
      explicacaoErradas:
        "A não devolução vale para qualquer estrangeiro, não só o que está “legalmente no país”. É proibida a expulsão coletiva, ainda que “decidida por um juiz”. O asilo cabe por delitos políticos ou comuns conexos, não por “crime comum sem nenhuma relação”. A Convenção protege toda pessoa sob a jurisdição do Estado, não só o “nacional de um Estado-Parte”.",
      pegadinha: "Restringir a não devolução ao estrangeiro em situação regular.",
      conhecimento: "O estrangeiro legalmente no território só pode ser expulso por decisão adotada de acordo com a lei.",
    },
  ],
};
