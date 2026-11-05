import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-10",
  resumo: {
    ideia:
      "Os crimes de trânsito ficam nos arts. 291 a 312-B do CTB. Aplicam-se o Código Penal, o Código de Processo Penal e, no que couber, a Lei 9.099/1995.",
    itens: [
      {
        termo: "Art. 291, § 1º",
        faz: "A lesão culposa admite composição, transação e representação. Não admite com álcool, racha ou mais de 50 km/h acima da máxima.",
        pista: "Nessas três hipóteses, há inquérito policial.",
      },
      {
        termo: "Suspensão ou proibição",
        faz: "Dura de 2 meses a 5 anos. Após o trânsito em julgado, o réu entrega o documento em 48 horas.",
      },
      {
        termo: "Art. 294",
        faz: "O juiz pode decretar a suspensão como cautelar, de ofício, a pedido do MP ou por representação da autoridade policial.",
      },
      {
        termo: "Multa reparatória",
        faz: "Vai para a vítima ou sucessores, não passa do prejuízo provado e é descontada da indenização civil.",
      },
      {
        termo: "Art. 301",
        faz: "Quem presta pronto e integral socorro não sofre prisão em flagrante nem paga fiança.",
      },
      {
        termo: "Arts. 302 e 303",
        faz: "Homicídio culposo: detenção de 2 a 4 anos. Lesão culposa: 6 meses a 2 anos. Aumento de 1/3 à metade nas hipóteses do § 1º do art. 302.",
      },
      {
        termo: "Com álcool",
        faz: "Art. 302, § 3º: reclusão de 5 a 8 anos. Art. 303, § 2º: reclusão de 2 a 5 anos, só com lesão grave ou gravíssima.",
      },
      {
        termo: "Arts. 304 e 305",
        faz: "Omissão de socorro vale mesmo com socorro de terceiros ou morte instantânea. Fuga do local tem pena própria.",
      },
      {
        termo: "Art. 306",
        faz: "Capacidade psicomotora alterada. Prova por 0,3 mg/L de ar, 6 dg/L de sangue, sinais, vídeo, testemunha e outros meios.",
      },
      {
        termo: "Art. 308",
        faz: "Racha com risco: detenção de 6 meses a 3 anos. Lesão grave culposa: reclusão de 3 a 6. Morte culposa: reclusão de 5 a 10.",
      },
      {
        termo: "Arts. 309 e 310",
        faz: "O art. 309 exige perigo de dano. O art. 310 não exige, segundo a Súmula 575 do STJ.",
      },
    ],
    cuidado: "Sem perigo de dano, dirigir sem habilitação é só infração. Com perigo de dano, é também crime do art. 309.",
  },
  questoes: [
    {
      topico: "Disposições gerais",
      subassunto: "Prisão em flagrante",
      dificuldade: 4,
      raciocinio: "O art. 301 premia o socorro pronto e integral.",
      enunciado:
        "Depois de colidir com um motociclista, o condutor para, chama o resgate e presta à vítima todo o socorro possível até a chegada da equipe. Pelo art. 301 do CTB,",
      alternativas: [
        "pode ser preso em flagrante, mas a fiança será arbitrada já na delegacia de polícia",
        "não se impõe a prisão em flagrante nem se exige fiança",
        "a prisão só é afastada se a CNH for válida e o veículo estiver licenciado",
        "o socorro extingue a punibilidade do crime culposo que ele tenha cometido",
        "fica dispensado de qualquer investigação, mesmo que a vítima venha a morrer",
      ],
      correta: 1,
      explicacao: "O art. 301 afasta a prisão em flagrante e a exigência de fiança para quem presta pronto e integral socorro. O crime continua sendo apurado.",
      explicacaoErradas:
        "“fiança será arbitrada” contraria o artigo. “CNH for válida” cria condição inexistente. “extingue a punibilidade” e “dispensado de qualquer investigação” confundem flagrante com o próprio crime.",
      pegadinha: "Achar que o socorro apaga o crime.",
      conhecimento: "Os arts. 299 e 300 foram vetados, por isso a seção salta do art. 298 para o art. 301.",
    },
    {
      topico: "Homicídio culposo",
      subassunto: "Causas de aumento",
      dificuldade: 4,
      raciocinio: "Veja o inciso IV do § 1º do art. 302.",
      enunciado:
        "Um motorista de ônibus de passageiros, em serviço e sem efeito de álcool, mata por culpa um pedestre no acostamento. A pena do art. 302 do CTB",
      alternativas: [
        "passa a ser de reclusão de cinco a oito anos, por ser transporte coletivo",
        "é aumentada de um sexto a dois terços, como nos crimes culposos em geral",
        "não muda, pois o aumento vale só para a faixa de pedestres ou a calçada",
        "é aumentada de um terço à metade",
        "é dobrada, pois o motorista profissional tem dever especial de cuidado",
      ],
      correta: 3,
      explicacao: "O § 1º, IV, aumenta a pena de 1/3 à metade quando o agente, no exercício da profissão, conduz veículo de transporte de passageiros.",
      explicacaoErradas:
        "“cinco a oito anos” é do § 3º, ligado ao álcool. “um sexto a dois terços” e “dobrada” não constam do § 1º. “só para a faixa” ignora os outros incisos.",
      pegadinha: "Ver só o local do atropelamento.",
      conhecimento: "O § 1º também alcança quem não tem habilitação e quem deixa de socorrer, podendo fazê-lo sem risco pessoal.",
    },
    {
      topico: "Lesão corporal culposa",
      subassunto: "Art. 303, § 2º",
      dificuldade: 5,
      raciocinio: "O § 2º tem dois requisitos juntos.",
      enunciado:
        "Com a capacidade psicomotora alterada por álcool, um condutor causa por culpa uma lesão corporal de natureza leve em um ciclista. Sobre a pena de reclusão de dois a cinco anos do art. 303, § 2º, do CTB,",
      alternativas: [
        "ela não se aplica, pois exige lesão grave ou gravíssima",
        "ela se aplica, pois basta a capacidade psicomotora alterada, qualquer que seja a lesão",
        "ela se aplica somente se o etilômetro tiver medido mais de 0,34 mg/L no local do fato",
        "ela não se aplica, pois o § 2º alcança apenas o crime de homicídio culposo no trânsito",
        "ela se aplica com aumento de um terço à metade, por ser a vítima um ciclista na via",
      ],
      correta: 0,
      explicacao: "O § 2º exige a influência de álcool ou substância e o resultado de lesão grave ou gravíssima. Com lesão leve, a reclusão desse parágrafo não incide.",
      explicacaoErradas:
        "“basta a capacidade” ignora o resultado. “mais de 0,34 mg/L” não está no § 2º. “apenas o crime de homicídio” contraria o próprio artigo. “por ser a vítima um ciclista” não é causa de aumento.",
      pegadinha: "Aplicar o § 2º a toda lesão com álcool.",
      conhecimento: "O art. 312-B proíbe usar o art. 44, I, do Código Penal nos crimes do art. 302, § 3º, e do art. 303, § 2º.",
    },
    {
      topico: "Disposições gerais",
      subassunto: "Art. 291, § 1º",
      dificuldade: 5,
      raciocinio: "O limite do inciso III é de 50 km/h acima da máxima.",
      enunciado:
        "Dois condutores sóbrios, fora de disputa, causam por culpa lesões corporais. O primeiro andava 40 km/h acima da máxima da via, e o segundo, 60 km/h acima. Pelo art. 291, §§ 1º e 2º, do CTB,",
      alternativas: [
        "os dois casos admitem os arts. 74, 76 e 88 da Lei 9.099/1995, sem inquérito policial",
        "nenhum dos casos admite aqueles artigos, pois todo excesso de velocidade os afasta",
        "só o primeiro exige inquérito policial, por ser menor a velocidade do segundo veículo",
        "os dois casos exigem inquérito, porque a lesão culposa é sempre de ação pública",
        "o primeiro admite aqueles artigos, e o segundo exige inquérito policial",
      ],
      correta: 4,
      explicacao: "O § 1º, III, só afasta a Lei 9.099/1995 acima de 50 km/h sobre a máxima. Nesse caso, o § 2º manda instaurar inquérito policial.",
      explicacaoErradas:
        "“os dois casos admitem” ignora o segundo. “todo excesso” apaga o limite de 50 km/h. “só o primeiro” inverte a regra. “sempre de ação pública” esquece a representação do art. 88.",
      pegadinha: "Usar 50% no lugar de 50 km/h.",
      conhecimento: "Os outros dois casos são álcool ou substância psicoativa e participação em corrida ou exibição não autorizada.",
    },
    {
      topico: "Omissão de socorro",
      subassunto: "Art. 304",
      dificuldade: 5,
      raciocinio: "Veja o parágrafo único.",
      enunciado:
        "Um condutor sem culpa no sinistro permanece no local, mas não socorre a vítima nem pede auxílio, podendo fazê-lo. Terceiros prestam o socorro, e a perícia conclui pela morte instantânea. Pelo art. 304 do CTB, ele",
      alternativas: [
        "não comete crime, pois a morte instantânea tornou o socorro inútil",
        "não comete crime, pois a omissão foi suprida pela ação de terceiros",
        "responde pelo crime, ainda que a omissão tenha sido suprida",
        "responde pelo homicídio culposo com aumento pela falta de socorro",
        "responde somente pela infração de não socorrer, por ser sem culpa",
      ],
      correta: 2,
      explicacao: "O parágrafo único alcança o condutor mesmo que terceiros supram a omissão ou que se trate de morte instantânea ou ferimentos leves.",
      explicacaoErradas:
        "“morte instantânea” e “suprida pela ação” são os casos que o parágrafo único inclui. “homicídio culposo” exige culpa no sinistro. “somente pela infração” ignora o crime.",
      pegadinha: "Levar para o CTB a lógica do crime impossível.",
      conhecimento: "A pena é de detenção de 6 meses a 1 ano, ou multa, se o fato não constituir elemento de crime mais grave.",
    },
    {
      topico: "Omissão de socorro",
      subassunto: "Art. 302 x art. 304",
      dificuldade: 5,
      raciocinio: "O art. 304 cede quando a omissão faz parte de crime mais grave.",
      enunciado:
        "Um condutor mata por culpa um pedestre e deixa de socorrê-lo, embora pudesse fazê-lo sem risco pessoal. Quanto à falta de socorro, o enquadramento correto é",
      alternativas: [
        "aumento de pena no homicídio culposo, sem o art. 304",
        "homicídio culposo simples em concurso material com o crime do art. 304",
        "só o crime do art. 304, que absorve o homicídio por ser a conduta final",
        "homicídio culposo em concurso formal com o art. 305, pela saída do local",
        "reclusão de cinco a oito anos, pelo § 3º do art. 302, por causa da omissão",
      ],
      correta: 0,
      explicacao: "O art. 302, § 1º, III, trata a falta de socorro como causa de aumento. O art. 304 só incide se o fato não constituir elemento de crime mais grave.",
      explicacaoErradas:
        "“concurso material” pune duas vezes a omissão. “absorve o homicídio” inverte a relação. O enunciado não trata de fuga, que seria o “art. 305”. “§ 3º” exige álcool ou substância.",
      pegadinha: "Somar os arts. 302 e 304.",
      conhecimento: "O art. 304 é o crime típico do condutor sem culpa no sinistro.",
    },
    {
      topico: "Embriaguez ao volante",
      subassunto: "Provas",
      dificuldade: 4,
      raciocinio: "O art. 306, § 2º, é aberto a meios de prova.",
      enunciado:
        "Um condutor recusa o etilômetro, e a equipe observa sinais claros de alteração da capacidade psicomotora, filmados por uma viatura. Pelo art. 306, §§ 1º e 2º, do CTB,",
      alternativas: [
        "o crime não se prova, pois a medição do álcool no ar alveolar é indispensável",
        "só o exame de sangue feito em até seis horas pode provar a alteração",
        "a recusa ao teste, sozinha, é o crime, independentemente de qualquer outro dado",
        "sinais, vídeo e testemunhas podem provar o crime, com direito à contraprova",
        "a prova depende de autorização judicial prévia, pois o condutor exerceu um direito",
      ],
      correta: 3,
      explicacao: "O § 1º, II, admite sinais de alteração, e o § 2º aceita teste, exame clínico, perícia, vídeo, prova testemunhal e outros meios, com direito à contraprova.",
      explicacaoErradas:
        "“indispensável” e “exame de sangue” limitam os meios. “a recusa, sozinha” é infração administrativa do art. 165-A, não o crime. “autorização judicial prévia” não consta do artigo.",
      pegadinha: "Confundir a recusa com o crime.",
      conhecimento: "O § 3º manda o Contran dispor sobre a equivalência entre os testes.",
    },
    {
      topico: "Penas",
      subassunto: "Entrega da CNH",
      dificuldade: 4,
      raciocinio: "O par. único do art. 307 remete ao art. 293, § 1º.",
      enunciado:
        "Com a condenação transitada em julgado, o réu é intimado a entregar a CNH à autoridade judiciária e não cumpre o prazo de 48 horas. Pelo CTB, ele",
      alternativas: [
        "só recebe nova intimação, pois não há consequência penal para esse atraso",
        "incorre nas penas do art. 307",
        "comete apenas a infração de dirigir com habilitação suspensa, do art. 162",
        "perde o direito de dirigir por 5 anos, o prazo máximo da penalidade",
        "tem a pena convertida em prisão, por violar medida imposta pelo juiz",
      ],
      correta: 1,
      explicacao: "O parágrafo único do art. 307 aplica as mesmas penas ao condenado que deixa de entregar o documento no prazo do art. 293, § 1º.",
      explicacaoErradas:
        "“nova intimação” ignora o crime. “art. 162” exige direção. “5 anos” é só o teto da penalidade. “convertida em prisão” não está no artigo.",
      pegadinha: "Achar que só dirigir viola a suspensão.",
      conhecimento: "A suspensão não corre enquanto o sentenciado estiver recolhido a estabelecimento prisional.",
    },
    {
      topico: "Racha",
      subassunto: "Art. 308",
      dificuldade: 5,
      raciocinio: "O resultado não querido define o parágrafo.",
      enunciado:
        "Em racha não autorizado, um condutor causa a morte de uma pessoa. As circunstâncias mostram que ele não quis o resultado nem assumiu o risco de produzi-lo. A pena privativa de liberdade é de",
      alternativas: [
        "detenção de 2 a 4 anos, como no homicídio culposo comum do art. 302",
        "reclusão de 5 a 8 anos, como no art. 302, § 3º, do CTB",
        "reclusão de 3 a 6 anos, como na lesão grave do § 1º do art. 308",
        "detenção de 6 meses a 3 anos, sem aumento nenhum, como no caput",
        "reclusão de 5 a 10 anos, pelo § 2º do art. 308",
      ],
      correta: 4,
      explicacao: "O § 2º do art. 308 traz reclusão de 5 a 10 anos quando resulta morte culposa, sem prejuízo das outras penas.",
      explicacaoErradas:
        "“2 a 4 anos” é o art. 302. “5 a 8 anos” é o § 3º do art. 302. “3 a 6 anos” é a lesão grave do § 1º. “6 meses a 3 anos” é o caput.",
      pegadinha: "Levar a morte para o art. 302.",
      conhecimento: "O caput exige situação de risco à incolumidade pública ou privada.",
    },
    {
      topico: "Direção sem habilitação",
      subassunto: "Art. 309",
      dificuldade: 4,
      raciocinio: "O crime pede perigo de dano.",
      enunciado:
        "Na fiscalização, um motorista sem habilitação dirige normalmente, sem gerar perigo. Outro, também sem habilitação, passa em ziguezague entre os veículos da rodovia. Conclui-se que",
      alternativas: [
        "os dois praticam o crime do art. 309, pois o perigo é presumido nesse caso",
        "só o primeiro comete a infração do art. 162, e o segundo responde pelo crime",
        "os dois cometem a infração, e só o segundo pratica o crime",
        "nenhum dos dois pratica crime, pois o art. 309 exige um sinistro consumado",
        "os dois respondem apenas pela contravenção penal de falta de habilitação",
      ],
      correta: 2,
      explicacao: "O art. 309 exige perigo de dano. A infração do art. 162, I, existe nos dois casos.",
      explicacaoErradas:
        "“perigo é presumido” contraria o texto. “só o primeiro” tira a infração do segundo. “sinistro consumado” não é exigido. “contravenção” não se aplica: a Súmula 720 do STF diz que o art. 309 derrogou o art. 32 da Lei das Contravenções na direção em via terrestre.",
      pegadinha: "Tratar o art. 309 como crime de perigo abstrato.",
      conhecimento: "O art. 309 também alcança quem teve cassado o direito de dirigir.",
    },
    {
      topico: "Entrega da direção",
      subassunto: "Art. 310",
      dificuldade: 5,
      raciocinio: "Compare com o art. 309.",
      enunciado:
        "O dono de um carro entrega a direção a um amigo não habilitado, que dirige bem e não gera perigo concreto. Pela Súmula 575 do STJ, a conduta do dono",
      alternativas: [
        "é crime do art. 310, mesmo sem lesão ou perigo concreto",
        "é só infração administrativa, pois o crime do art. 310 exige perigo concreto",
        "só é crime se o amigo causar lesão corporal ou morte durante o percurso",
        "é crime do art. 309 em coautoria, pois quem entrega responde como o condutor",
        "fica impune, pois o crime depende de o amigo vir a ser condenado pelo art. 309",
      ],
      correta: 0,
      explicacao: "A Súmula 575 afirma que o crime do art. 310 existe independentemente de lesão ou de perigo de dano concreto.",
      explicacaoErradas:
        "“exige perigo concreto” contraria a súmula. “lesão corporal ou morte” também. “coautoria” e “fica impune” ignoram o tipo próprio do art. 310.",
      pegadinha: "Levar para o art. 310 o perigo de dano do art. 309.",
      conhecimento: "O art. 310 também alcança entregar a direção a quem tem habilitação cassada ou suspensa, ou a quem está sem condições de saúde ou embriagado.",
    },
    {
      topico: "Penas",
      subassunto: "Multa reparatória",
      dificuldade: 4,
      raciocinio: "A multa reparatória serve à vítima.",
      enunciado:
        "Sobre a multa reparatória do art. 297 do CTB, aplicada em razão de prejuízo material decorrente do crime, é correto afirmar que",
      alternativas: [
        "é depositada em favor do fundo de segurança de trânsito, e não da vítima",
        "pode superar o prejuízo provado, pois tem caráter de punição do condenado",
        "soma-se integralmente à indenização civil, sem nenhum desconto",
        "não pode superar o prejuízo provado e é descontada na indenização civil",
        "substitui a pena de suspensão da habilitação do crime, a pedido da vítima",
      ],
      correta: 3,
      explicacao: "O § 1º limita a multa ao prejuízo demonstrado, e o § 3º manda descontar o valor na indenização civil. O depósito judicial é em favor da vítima ou dos sucessores.",
      explicacaoErradas:
        "“fundo de segurança” erra o destino. “pode superar” contraria o § 1º. “sem nenhum desconto” contraria o § 3º. “substitui a pena” não consta do artigo.",
      pegadinha: "Confundir com a pena de multa comum.",
      conhecimento: "O art. 296 manda aplicar a suspensão ao réu reincidente em crime do CTB.",
    },
    {
      topico: "Fraude no local",
      subassunto: "Art. 312",
      dificuldade: 5,
      raciocinio: "O parágrafo único antecipa o crime.",
      enunciado:
        "Logo após um sinistro com vítima, antes de qualquer procedimento policial, um condutor muda a posição do veículo para induzir o perito a erro. Pelo art. 312 do CTB,",
      alternativas: [
        "não há crime, pois ainda não havia procedimento nem inquérito na data do ato",
        "há crime, ainda que o procedimento não tenha começado",
        "há só infração de não preservar o local, porque ninguém foi enganado de fato",
        "há crime apenas se o condutor tiver sido o causador do sinistro com a vítima",
        "há crime apenas se o perito for efetivamente induzido a erro na investigação",
      ],
      correta: 1,
      explicacao: "O parágrafo único aplica o artigo ainda que, na hora da inovação, não tenham começado o procedimento, o inquérito ou o processo.",
      explicacaoErradas:
        "“não há crime” e “só infração” ignoram o parágrafo único. “causador do sinistro” e “efetivamente induzido” somam requisitos que o texto não traz: basta o fim de induzir a erro.",
      pegadinha: "Exigir inquérito já aberto.",
      conhecimento: "O art. 312-A fixa as atividades da prestação de serviço à comunidade nos crimes dos arts. 302 a 312.",
    },
  ],
};
