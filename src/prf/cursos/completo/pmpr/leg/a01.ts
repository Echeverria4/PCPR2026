import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "leg-a01",
  resumo: {
    ideia:
      "A Lei 8.072/1990 diz quais crimes são hediondos. O Brasil usa o sistema legal: só é hediondo o crime que está na lista da lei, consumado ou tentado; o juiz não pode chamar de hediondo um crime fora dela. A prova cobra a lista, as vedações do art. 2º e os prazos.",
    itens: [
      {
        termo: "Sistema legal (art. 1º)",
        faz: "A lista é fechada (taxativa). Quem decide o que é hediondo é o legislador, não o juiz pela gravidade do caso. A lista vale para o crime consumado e também para o tentado.",
        pista: "Fora da lista = não é hediondo, por mais cruel que seja o caso.",
      },
      {
        termo: "Homicídio",
        faz: "É hediondo o homicídio qualificado e também o simples, quando praticado em atividade típica de grupo de extermínio, ainda que por um só agente. Feminicídio (art. 121-A) e vicaricídio (art. 121-B) têm incisos próprios.",
        pista: "Homicídio privilegiado-qualificado: para a maioria, não é hediondo.",
      },
      {
        termo: "Lesão corporal (inciso I-A)",
        faz: "Só a lesão gravíssima e a seguida de morte, quando praticadas: (a) contra agente dos arts. 142 e 144 da CF, do sistema prisional ou da Força Nacional, ou contra seu cônjuge, companheiro ou parente consanguíneo até o 3º grau; (b) contra membro do Judiciário, do MP, da Defensoria, da Advocacia Pública ou oficial de justiça, ou parente até o 3º grau, inclusive por afinidade; (c) dentro de escola.",
        pista: "Lesão grave (§ 1º) fica fora. Parente por afinidade só conta na alínea b.",
      },
      {
        termo: "Crimes contra o patrimônio",
        faz: "Roubo com restrição da liberdade da vítima, com arma de fogo (de qualquer tipo) ou com resultado lesão grave ou morte; extorsão qualificada do art. 158, § 3º; extorsão mediante sequestro em todas as formas; furto com explosivo que cause perigo comum.",
        pista: "Furto com explosivo é hediondo; roubo com explosivo (art. 157, § 2º-A, II) não está na lista.",
      },
      {
        termo: "Outros crimes do Código Penal",
        faz: "Estupro, estupro de vulnerável, favorecimento da exploração sexual de criança, adolescente ou vulnerável (218-B), epidemia com morte, falsificação de remédio (273), induzimento ao suicídio ou à automutilação pela internet ou em transmissão ao vivo, sequestro de menor de 18 anos e tráfico de pessoas contra criança ou adolescente.",
      },
      {
        termo: "Fora do Código Penal (parágrafo único)",
        faz: "Genocídio; posse ou porte de arma de fogo de uso proibido (art. 16 do Estatuto do Desarmamento); comércio ilegal (art. 17) e tráfico internacional de arma (art. 18); organização criminosa voltada a crime hediondo ou equiparado; crimes do Código Penal Militar iguais aos do art. 1º; crimes de pornografia infantil do ECA; domínio social estruturado (incluído em 2026).",
        pista: "Arma de uso restrito no art. 16 não é hediondo: a lei fala só em uso proibido.",
      },
      {
        termo: "Equiparados (os três T)",
        faz: "Tortura, tráfico de drogas e terrorismo não estão na lista do art. 1º, mas a Constituição (art. 5º, XLIII) e o art. 2º da lei dão a eles o mesmo tratamento dos hediondos.",
      },
      {
        termo: "Vedações (art. 2º)",
        faz: "Hediondos e equiparados não admitem anistia, graça, indulto nem fiança. A liberdade provisória sem fiança é possível desde 2007, quando a proibição saiu do texto.",
        pista: "Inafiançável não quer dizer que o preso nunca sai antes da sentença.",
      },
      {
        termo: "Regime inicial",
        faz: "O texto ainda diz que a pena começa no fechado, mas o STF declarou essa regra inconstitucional. O juiz fixa o regime pelas regras gerais do art. 33 do Código Penal (quantidade de pena, reincidência e circunstâncias).",
      },
      {
        termo: "Prisão temporária e recurso",
        faz: "Nos hediondos e equiparados, a temporária dura até 30 dias, prorrogáveis por mais 30 em caso de extrema e comprovada necessidade. Na sentença, o juiz decide de forma fundamentada se o réu pode apelar em liberdade.",
        pista: "Regra geral da Lei 7.960/1989: 5 + 5 dias.",
      },
      {
        termo: "Associação criminosa (art. 8º)",
        faz: "Quando a associação do art. 288 do CP é para hediondos, tortura, tráfico ou terrorismo, a pena é de 3 a 6 anos. O associado que denuncia o grupo à autoridade, permitindo o desmantelamento, tem a pena reduzida de 1/3 a 2/3.",
      },
      {
        termo: "Progressão de regime (Lei de Execução Penal, art. 112)",
        faz: "Desde 2026: 70% da pena para o primário em hediondo; 75% para o primário em hediondo com morte, para o comando de organização criminosa ultraviolenta, para a milícia e para o primário em feminicídio; 80% para o reincidente em hediondo; 85% para o reincidente em hediondo com morte. Em todos os casos, boa conduta e exame criminológico.",
        pista: "O material antigo traz 40%, 50%, 60% e 70%: essa regra mudou em 2026 e a nova só vale para crimes depois dela.",
      },
    ],
  },
  questoes: [
    {
      topico: "Rol dos crimes hediondos",
      subassunto: "Roubo hediondo",
      dificuldade: 4,
      raciocinio: "No roubo, a lei lista só: restrição de liberdade (§ 2º, V), arma de fogo (§ 2º-A, I), arma proibida ou restrita (§ 2º-B) e resultado lesão grave ou morte (§ 3º). Concurso de pessoas, arma branca e explosivo ficam fora.",
      enunciado: "Pela Lei 8.072/1990, é crime hediondo o roubo",
      alternativas: [
        "praticado em concurso de duas ou mais pessoas, com divisão de tarefas entre elas.",
        "em que o agente destrói o caixa eletrônico com explosivo, causando perigo comum.",
        "cometido com emprego de arma de fogo de uso permitido, como um revólver comum.",
        "cometido com emprego de arma branca, como um facão, contra vítima desarmada.",
        "contra agente de segurança pública que está no exercício da sua função.",
      ],
      correta: 2,
      explicacao:
        "Desde o Pacote Anticrime (Lei 13.964/2019), o art. 1º, II, b, inclui o roubo circunstanciado pelo emprego de arma de fogo (art. 157, § 2º-A, I), seja qual for o tipo da arma, além do roubo com arma de uso proibido ou restrito (§ 2º-B).",
      explicacaoErradas:
        "O concurso de pessoas (§ 2º, II) e a arma branca (§ 2º, VII) aumentam a pena, mas não estão na lista. O roubo com explosivo (§ 2º-A, II) também ficou fora; só o furto com explosivo é hediondo. A condição de agente de segurança da vítima pesa na lesão corporal e no homicídio, não no roubo.",
      pegadinha: "Confundir o furto com explosivo, que é hediondo, com o roubo com explosivo, que não é.",
      conhecimento: "Também é hediondo o roubo com restrição da liberdade da vítima e o roubo com resultado lesão grave ou morte (latrocínio).",
    },
    {
      topico: "Rol dos crimes hediondos",
      subassunto: "Lesão corporal contra agentes e parentes",
      dificuldade: 5,
      raciocinio: "Inciso I-A: na alínea a (forças de segurança), parente consanguíneo até o 3º grau; na alínea b (Judiciário, MP, Defensoria, Advocacia Pública, oficial de justiça), parente até o 3º grau, inclusive por afinidade. Cunhado é parente por afinidade.",
      enunciado: "Por causa do cargo dos parentes, Tadeu causou lesão corporal gravíssima no cunhado de um policial rodoviário federal. Semanas depois, pelo mesmo motivo, causou lesão gravíssima no cunhado de um promotor de justiça. Pela Lei 8.072/1990,",
      alternativas: [
        "só a segunda lesão é hedionda, porque o cunhado é parente por afinidade, e só a alínea do MP inclui o afim.",
        "as duas lesões são hediondas, porque o cunhado é parente até o terceiro grau dos dois servidores públicos.",
        "nenhuma é hedionda, porque a lei protege apenas o próprio agente ou membro, nunca os seus familiares.",
        "só a primeira é hedionda, porque a proteção dos parentes por afinidade vale apenas para as forças policiais.",
        "as duas só seriam hediondas se as vítimas morressem, pois a lesão gravíssima fica fora da lista legal.",
      ],
      correta: 0,
      explicacao:
        "Para os agentes dos arts. 142 e 144 da CF (inclui a PRF), o sistema prisional e a Força Nacional, a lei protege cônjuge, companheiro ou parente consanguíneo até o 3º grau. Para membros do Judiciário, do MP, da Defensoria, da Advocacia Pública e oficiais de justiça, protege o parente até o 3º grau, inclusive por afinidade. O cunhado é afim: só a segunda lesão é hedionda.",
      explicacaoErradas:
        "As duas não são hediondas porque, na alínea das forças de segurança, a afinidade não entra. A lei protege, sim, familiares, nas duas alíneas. A afinidade aparece justamente na alínea do Judiciário e do MP, não na das polícias. E a lesão gravíssima já está na lista, ao lado da lesão seguida de morte.",
      pegadinha: "Tratar as duas alíneas como iguais: só a do Judiciário, MP, Defensoria e Advocacia Pública diz \"inclusive por afinidade\".",
      conhecimento: "A lesão grave (art. 129, § 1º) contra essas pessoas não é hedionda; só a gravíssima e a seguida de morte.",
    },
    {
      topico: "Rol dos crimes hediondos",
      subassunto: "Homicídio e induzimento ao suicídio",
      dificuldade: 4,
      raciocinio: "Homicídio simples é hediondo se em atividade típica de grupo de extermínio, mesmo com um só agente. Privilegiado-qualificado: não é hediondo para a maioria. Lesão grave não entra. Induzimento ao suicídio só pela internet, rede social ou ao vivo.",
      enunciado: "Assinale o crime que é hediondo pela Lei 8.072/1990.",
      alternativas: [
        "Homicídio qualificado-privilegiado, cometido por relevante valor moral e com uso de veneno.",
        "Lesão corporal de natureza grave contra policial militar, em razão da sua função.",
        "Induzimento ao suicídio feito pessoalmente, em conversa na casa da própria vítima.",
        "Homicídio simples em atividade típica de grupo de extermínio, cometido por um só agente.",
        "Homicídio culposo na direção de veículo, praticado por motorista embriagado.",
      ],
      correta: 3,
      explicacao:
        "O art. 1º, I, inclui o homicídio quando praticado em atividade típica de grupo de extermínio, \"ainda que cometido por um só agente\". Nesse caso, mesmo o homicídio simples é hediondo.",
      explicacaoErradas:
        "Para a maioria da doutrina e da jurisprudência, o homicídio privilegiado-qualificado não é hediondo, porque o privilégio é incompatível com a hediondez. A lesão grave fica fora; só a gravíssima e a seguida de morte entram. O induzimento só é hediondo pela internet, rede social ou transmissão ao vivo. Crime culposo nunca é hediondo.",
      pegadinha: "Achar que grupo de extermínio exige vários autores: a lei diz \"ainda que por um só agente\".",
      conhecimento: "Feminicídio (art. 121-A) é hediondo por inciso próprio, o I-B, desde que virou crime autônomo.",
    },
    {
      topico: "Vedações do art. 2º",
      subassunto: "Fiança e liberdade provisória",
      dificuldade: 4,
      raciocinio: "Art. 2º: insuscetíveis de anistia, graça, indulto e fiança. A vedação da liberdade provisória saiu do texto em 2007; cabe liberdade provisória sem fiança se não houver motivo para a preventiva.",
      enunciado: "Marcos foi preso em flagrante por estupro. Não há motivo para a prisão preventiva. Pela Lei 8.072/1990 e pela Constituição, Marcos",
      alternativas: [
        "pode ser solto mediante fiança arbitrada pelo juiz, já que não existe motivo para a preventiva.",
        "pode obter liberdade provisória sem fiança, mas não poderá ser beneficiado por indulto.",
        "não pode obter liberdade provisória em nenhum caso, porque a lei veda expressamente esse benefício.",
        "pode ser beneficiado por indulto, desde que o decreto presidencial o preveja de forma expressa.",
        "pode ter a punibilidade extinta por anistia, desde que concedida por lei aprovada no Congresso.",
      ],
      correta: 1,
      explicacao:
        "Estupro é hediondo e, por isso, inafiançável e insuscetível de anistia, graça e indulto (art. 2º e CF, art. 5º, XLIII). Mas a proibição de liberdade provisória foi retirada do texto em 2007; sem motivo para a preventiva, o preso pode responder solto, sem fiança.",
      explicacaoErradas:
        "Não há fiança em crime hediondo, nem pelo juiz nem pelo delegado. A lei não veda mais a liberdade provisória. Indulto e anistia são proibidos, sem exceção, para hediondos e equiparados.",
      pegadinha: "Confundir inafiançável com \"não pode ser solto\": a liberdade provisória sem fiança continua possível.",
      conhecimento: "A graça é o perdão individual; o indulto, o coletivo, ambos por decreto do Presidente. A anistia é por lei do Congresso.",
    },
    {
      topico: "Regime de cumprimento",
      subassunto: "Regime inicial fechado",
      dificuldade: 5,
      raciocinio: "O § 1º do art. 2º ainda está no texto, mas o STF declarou inconstitucional a fixação do fechado pela lei. O juiz usa o art. 33 do CP.",
      enunciado: "Lúcia, primária e com circunstâncias judiciais favoráveis, foi condenada a 6 anos de reclusão por crime hediondo. Sobre o regime inicial, é correto dizer que",
      alternativas: [
        "deve ser o fechado, por força do art. 2º, § 1º, da Lei 8.072/1990, que o juiz não pode afastar.",
        "deve ser o fechado, porque a pena passa de 4 anos e a lei manda aplicar o regime mais rigoroso.",
        "deve ser o aberto, porque Lúcia é primária e todas as circunstâncias do caso lhe são favoráveis.",
        "o juiz só pode escolher o semiaberto se o Ministério Público concordar de forma expressa.",
        "o juiz pode fixar o semiaberto, pois o STF afastou o fechado obrigatório previsto na lei.",
      ],
      correta: 4,
      explicacao:
        "O STF declarou inconstitucional a fixação do regime inicial fechado pela própria lei, por ofensa à individualização da pena. O juiz segue o art. 33 do CP: pena acima de 4 e até 8 anos, para não reincidente, permite começar no semiaberto.",
      explicacaoErradas:
        "O § 1º continua escrito, mas não pode ser aplicado como regra obrigatória. Pena acima de 4 anos não obriga o fechado: o fechado é para pena acima de 8 anos ou casos desfavoráveis. O aberto é para pena de até 4 anos. A escolha do regime não depende de concordância do Ministério Público.",
      pegadinha: "Responder pela letra do § 1º sem lembrar que o STF a declarou inconstitucional.",
      conhecimento: "A tese foi firmada em repercussão geral: o julgador deve se ater aos parâmetros do art. 33 do Código Penal.",
    },
    {
      topico: "Prisão temporária",
      subassunto: "Prazo nos hediondos",
      dificuldade: 4,
      raciocinio: "Art. 2º, § 4º: temporária de 30 dias, prorrogável por igual período em caso de extrema e comprovada necessidade. Regra geral: 5 + 5. O juiz não decreta de ofício.",
      enunciado: "Na investigação de uma extorsão mediante sequestro, o delegado representa pela prisão temporária do suspeito. Pela legislação, essa prisão",
      alternativas: [
        "dura até 5 dias, prorrogáveis por mais 5, como em qualquer outro crime da Lei 7.960/1989.",
        "dura até 30 dias, sem prorrogação, porque o prazo maior já leva em conta a gravidade do crime.",
        "dura até 30 dias, prorrogáveis por mais 30 em caso de extrema e comprovada necessidade.",
        "dura até 60 dias, prorrogáveis por mais 60, desde que o Ministério Público concorde.",
        "pode ser decretada de ofício pelo juiz, sem representação, por se tratar de crime hediondo.",
      ],
      correta: 2,
      explicacao:
        "Nos crimes hediondos e equiparados, o art. 2º, § 4º, da Lei 8.072/1990 fixa a temporária em 30 dias, prorrogáveis por igual período em caso de extrema e comprovada necessidade. Extorsão mediante sequestro é hedionda em todas as formas.",
      explicacaoErradas:
        "Os 5 + 5 dias são a regra geral, que não vale para hediondos. O prazo de 30 dias admite prorrogação. Não existe prazo de 60 dias. E a temporária depende de representação do delegado ou de requerimento do MP: o juiz não decreta de ofício.",
      pegadinha: "Lembrar do prazo maior e esquecer que ele também pode ser prorrogado.",
      conhecimento: "Na sentença, o juiz decide de forma fundamentada se o réu pode apelar em liberdade (art. 2º, § 3º).",
    },
    {
      topico: "Rol dos crimes hediondos",
      subassunto: "Crimes do Estatuto do Desarmamento",
      dificuldade: 5,
      raciocinio: "Parágrafo único: art. 16 só no uso proibido; art. 17 (comércio ilegal) e art. 18 (tráfico internacional) sempre, seja qual for a arma. Arts. 12, 13, 14 e 15 ficam fora.",
      enunciado: "Assinale a conduta que configura crime hediondo.",
      alternativas: [
        "Comércio ilegal de arma de fogo de uso permitido, dentro de atividade comercial.",
        "Porte ilegal de fuzil de uso restrito, encontrado no porta-malas do carro do agente.",
        "Posse irregular de revólver de uso permitido, guardado dentro da casa do agente.",
        "Disparo de arma de fogo em via pública, sem atingir nem pôr em risco outra pessoa.",
        "Omissão de cautela que permite a uma criança se apoderar da arma de fogo do pai.",
      ],
      correta: 0,
      explicacao:
        "O parágrafo único, III, torna hediondo o comércio ilegal de armas de fogo do art. 17 do Estatuto do Desarmamento, sem distinguir o tipo de arma. O mesmo vale para o tráfico internacional (art. 18).",
      explicacaoErradas:
        "Desde o Pacote Anticrime, o art. 16 só é hediondo quando a arma é de uso proibido; com arma de uso restrito, não é. Posse irregular de arma permitida (art. 12), disparo (art. 15) e omissão de cautela (art. 13) não estão na lista.",
      pegadinha: "Achar que arma de uso restrito também torna o art. 16 hediondo: a lei fala só em uso proibido.",
      conhecimento: "Também é hediondo o crime de organização criminosa quando voltada à prática de crime hediondo ou equiparado.",
    },
    {
      topico: "Associação criminosa e delação",
      subassunto: "Art. 8º da Lei 8.072/1990",
      dificuldade: 5,
      raciocinio: "Art. 8º: art. 288 do CP com pena de 3 a 6 anos quando a associação é para hediondos ou equiparados; quem denuncia e permite o desmantelamento tem redução de 1/3 a 2/3. A associação em si não vira hedionda; a organização criminosa voltada a hediondo, sim.",
      enunciado: "Três pessoas se associam de forma estável para praticar extorsões mediante sequestro. Uma delas procura a polícia, entrega o grupo e permite que ele seja desmantelado. Pela Lei 8.072/1990,",
      alternativas: [
        "a associação tem a pena comum do art. 288 do CP, de 1 a 3 anos, e quem denunciou recebe perdão judicial.",
        "a associação passa a ser crime hediondo, como ocorre com a organização criminosa voltada a esses crimes.",
        "quem denunciou o grupo fica isento de pena, desde que repare o dano causado às vítimas dos sequestros.",
        "a pena do art. 288 do CP passa a ser de 3 a 6 anos, e quem denunciou terá a pena reduzida de 1/3 a 2/3.",
        "a pena do art. 288 é dobrada, e quem denunciou terá a pena reduzida de 1/6 a 1/2, por ter colaborado.",
      ],
      correta: 3,
      explicacao:
        "O art. 8º fixa pena de 3 a 6 anos de reclusão para a associação do art. 288 do CP quando o fim é praticar crimes hediondos, tortura, tráfico ou terrorismo. O parágrafo único dá redução de 1/3 a 2/3 ao participante que denunciar o grupo à autoridade, possibilitando o desmantelamento.",
      explicacaoErradas:
        "A pena comum de 1 a 3 anos não vale nesse caso, e a lei prevê redução, não perdão judicial nem isenção. A associação do art. 288 não está na lista de hediondos; só a organização criminosa voltada a crime hediondo ou equiparado está. A lei não manda dobrar a pena, e a redução é de 1/3 a 2/3.",
      pegadinha: "Achar que a associação também é hedionda: a lista fala em organização criminosa, não em associação.",
      conhecimento: "A associação criminosa do art. 288 exige três ou mais pessoas; a organização criminosa da Lei 12.850/2013 exige quatro ou mais.",
    },
    {
      topico: "Rol dos crimes hediondos",
      subassunto: "Tentativa e crimes da lista",
      dificuldade: 5,
      raciocinio: "Hediondo consumado ou tentado. I: tentativa de estupro de vulnerável, sim. II: furto com explosivo, sim. III: extorsão simples, não (só a do § 3º). IV: sequestro de menor de 18, sim. V: tráfico de pessoas só contra criança ou adolescente.",
      enunciado: "Considere: I. tentativa de estupro de vulnerável; II. furto qualificado pelo emprego de explosivo que cause perigo comum; III. extorsão com grave ameaça, sem restrição da liberdade, lesão ou morte; IV. sequestro e cárcere privado contra menor de 18 anos; V. tráfico de pessoas contra vítima adulta. São hediondos",
      alternativas: [
        "II e IV, apenas.",
        "I, II e IV, apenas.",
        "I, II, III e IV, apenas.",
        "I, IV e V, apenas.",
        "II, III e V, apenas.",
      ],
      correta: 1,
      explicacao:
        "O art. 1º alcança os crimes consumados ou tentados, então a tentativa de estupro de vulnerável é hedionda. O furto com explosivo (art. 155, § 4º-A) e o sequestro de menor de 18 anos (art. 148, § 1º, IV) estão na lista.",
      explicacaoErradas:
        "A extorsão só é hedionda na forma qualificada do art. 158, § 3º (restrição da liberdade, lesão ou morte) e na extorsão mediante sequestro. O tráfico de pessoas só é hediondo quando cometido contra criança ou adolescente.",
      pegadinha: "Excluir a tentativa: o caput diz \"consumados ou tentados\".",
      conhecimento: "A tentativa continua hedionda, mas a pena é reduzida de 1/3 a 2/3, como em qualquer crime tentado.",
    },
    {
      topico: "Regime de cumprimento",
      subassunto: "Progressão de regime desde 2026",
      dificuldade: 5,
      raciocinio: "LEP, art. 112, com a redação de 2026: hediondo primário 70%; primário com morte 75%; reincidente 80%; reincidente com morte 85%. A regra antiga era 40/50/60/70.",
      enunciado: "Um condenado primário cumpre pena por crime hediondo sem resultado morte, cometido depois das mudanças de 2026 na Lei de Execução Penal. Para progredir de regime, ele precisa cumprir, além de ter boa conduta e passar pelo exame criminológico, ao menos",
      alternativas: [
        "40% da pena.",
        "50% da pena.",
        "60% da pena.",
        "80% da pena.",
        "70% da pena.",
      ],
      correta: 4,
      explicacao:
        "Pelo art. 112, V, da LEP, na redação de 2026 (Lei 15.402/2026), o primário condenado por crime hediondo ou equiparado precisa cumprir ao menos 70% da pena. A boa conduta e o exame criminológico são exigidos em todos os casos (§ 1º).",
      explicacaoErradas:
        "40% era a regra do Pacote Anticrime para o primário, e 50% a do primário com resultado morte; as duas foram superadas. 60% era a fração antiga do reincidente. 80% é a fração atual do reincidente em hediondo.",
      pegadinha: "Responder com a regra antiga (40%), que ainda aparece em muitos materiais.",
      conhecimento: "A regra nova é mais dura e não volta para crimes cometidos antes dela; para esses, vale a fração da época do fato.",
    },
  ],
};
