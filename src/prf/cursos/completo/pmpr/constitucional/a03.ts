import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-a03",
  resumo: {
    ideia:
      "Nacionalidade é o vínculo jurídico e político que liga a pessoa ao Estado. O art. 12 da CF diz quem é brasileiro nato e quem é naturalizado, quais cargos só o nato ocupa e quando se perde a nacionalidade, regra mudada pela EC 131/2023. O art. 13 trata do idioma e dos símbolos.",
    itens: [
      {
        termo: "Nacionalidade",
        faz: "Vínculo jurídico-político entre a pessoa e o Estado. O povo brasileiro é o conjunto dos nacionais: natos e naturalizados. Primária (originária): vem do nascimento. Secundária (adquirida): vem de um pedido, a naturalização.",
      },
      {
        termo: "Ius soli × ius sanguinis",
        faz: "Ius soli: vale o lugar onde nasceu. Ius sanguinis: vale a nacionalidade dos pais. A CF usa o ius soli como regra e o ius sanguinis somado a outro requisito: serviço do Brasil, registro ou residência com opção.",
      },
      {
        termo: "Nato pelo solo (alínea a)",
        faz: "Nascido no Brasil, ainda que de pais estrangeiros, desde que eles não estejam a serviço do país deles. Filho de diplomata estrangeiro aqui não é brasileiro nato.",
      },
      {
        termo: "Nato pelo serviço (alínea b)",
        faz: "Nascido no estrangeiro de pai brasileiro ou mãe brasileira que esteja a serviço da República Federativa do Brasil (União, Estados, Municípios, autarquias). Não exige registro nem opção.",
      },
      {
        termo: "Nato pelo registro ou pela opção (alínea c)",
        faz: "Nascido no estrangeiro de pai ou mãe brasileira: é nato se for registrado em repartição brasileira competente, ou se vier residir no Brasil e optar, em qualquer tempo depois da maioridade, pela nacionalidade brasileira (EC 54/2007).",
        pista: "A opção é feita na Justiça Federal e não tem prazo final.",
      },
      {
        termo: "Naturalização",
        faz: "Ordinária: na forma da lei; para quem vem de país de língua portuguesa, basta residência por um ano ininterrupto e idoneidade moral. Extraordinária: estrangeiro de qualquer nacionalidade, residente há mais de quinze anos ininterruptos, sem condenação penal, que requeira.",
      },
      {
        termo: "Português equiparado",
        faz: "Ao português com residência permanente no Brasil, havendo reciprocidade em favor dos brasileiros, são atribuídos os direitos de brasileiro, salvo os casos da própria CF (§ 1º). Ele não se naturaliza: continua português.",
      },
      {
        termo: "Distinção só pela CF",
        faz: "A lei não pode distinguir natos e naturalizados (§ 2º). A CF distingue em quatro pontos: cargos privativos, seis vagas de cidadão no Conselho da República, empresa jornalística (naturalizado só depois de dez anos) e extradição.",
      },
      {
        termo: "Cargos privativos de nato",
        faz: "Presidente e Vice-Presidente da República, Presidente da Câmara, Presidente do Senado, Ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro de Estado da Defesa (§ 3º).",
        pista: "A lógica: quem pode assumir a Presidência, quem representa o país lá fora e quem comanda a defesa. Oficial de polícia militar não está na lista.",
      },
      {
        termo: "Perda (EC 131/2023)",
        faz: "Só em dois casos: cancelamento da naturalização por sentença judicial, por fraude no processo de naturalização ou atentado contra a ordem constitucional e o Estado Democrático; ou pedido expresso de perda feito à autoridade brasileira, salvo se deixar a pessoa sem pátria.",
        pista: "Adquirir outra nacionalidade, por si só, não faz mais perder a brasileira.",
      },
      {
        termo: "Volta da nacionalidade",
        faz: "Quem renunciou por pedido expresso pode readquirir a nacionalidade brasileira originária, nos termos da lei (§ 5º, incluído pela EC 131/2023).",
      },
      {
        termo: "Idioma e símbolos (art. 13)",
        faz: "A língua portuguesa é o idioma oficial. Símbolos nacionais: bandeira, hino, armas e selo. Estados, Distrito Federal e Municípios podem ter símbolos próprios.",
      },
    ],
  },
  questoes: [
    {
      topico: "Brasileiro nato",
      subassunto: "Art. 12, I",
      dificuldade: 4,
      raciocinio: "Pai ou mãe a serviço do Brasil no exterior basta (alínea b), sem registro. Serviço para empresa privada não conta.",
      enunciado:
        "Das pessoas abaixo, a única que já é brasileira nata, segundo o art. 12, I, da Constituição Federal, é a que nasceu",
      alternativas: [
        "em Lisboa, filha de mãe brasileira, viveu no exterior até os 30 anos e nunca foi registrada.",
        "em Brasília, filha de um casal francês em que o pai é cônsul da França no Brasil.",
        "em Roma, filha de mãe brasileira que trabalha lá para empresa privada, e não foi registrada.",
        "em Madri, filha de pai brasileiro a serviço da embaixada do Brasil, mesmo sem registro.",
        "em Tóquio, filha de pais japoneses, e mora no Brasil há mais de vinte anos.",
      ],
      correta: 3,
      explicacao:
        "Alínea b: é nato o nascido no estrangeiro de pai ou mãe brasileira que esteja a serviço da República Federativa do Brasil. Nessa hipótese não se exige registro nem opção.",
      explicacaoErradas:
        "Quem nasceu em Lisboa e em Roma depende de registro ou de residência com opção, e nenhuma das duas fez. O filho do cônsul francês nasceu aqui, mas o pai está a serviço do país dele. A japonesa só pode se naturalizar.",
      pegadinha: "Trabalhar para empresa privada brasileira não é estar a serviço da República Federativa do Brasil.",
      conhecimento: "Serviço do Brasil inclui a União, os Estados, os Municípios e a administração indireta, não só a carreira diplomática.",
    },
    {
      topico: "Cargos privativos",
      subassunto: "Art. 12, § 3º",
      dificuldade: 4,
      raciocinio: "A lista tem sete itens. Ministro do STJ, PGR e senador ficam de fora; oficial só o das Forças Armadas.",
      enunciado: "Um brasileiro naturalizado NÃO pode ocupar o cargo de",
      alternativas: [
        "oficial da polícia militar de um Estado.",
        "Ministro de Estado da Defesa.",
        "Ministro do Superior Tribunal de Justiça.",
        "Procurador-Geral da República.",
        "Senador da República.",
      ],
      correta: 1,
      explicacao:
        "O § 3º do art. 12 reserva a natos: Presidente e Vice, Presidente da Câmara, Presidente do Senado, Ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro de Estado da Defesa (incluído pela EC 23/1999).",
      explicacaoErradas:
        "Polícia militar não é Força Armada, então o oficial pode ser naturalizado. Ministro do STJ e Procurador-Geral não estão na lista. Senador pode ser naturalizado; só o Presidente do Senado precisa ser nato.",
      pegadinha: "Senador naturalizado pode; Presidente do Senado, não. A lista fala do cargo de chefia, não do mandato.",
      conhecimento: "Os Presidentes da Câmara e do Senado e o Ministro do STF estão na lista porque podem substituir o Presidente da República.",
    },
    {
      topico: "Perda da nacionalidade",
      subassunto: "EC 131/2023",
      dificuldade: 5,
      raciocinio: "Depois da EC 131/2023, adquirir outra nacionalidade não faz perder a brasileira. Perda só por cancelamento da naturalização ou pedido expresso.",
      enunciado:
        "Júlia, brasileira nata, adquiriu por vontade própria a nacionalidade de um país europeu, que não fez nenhuma exigência para ela morar lá. Segundo o texto atual da Constituição Federal, Júlia",
      alternativas: [
        "continua brasileira: hoje a perda depende de pedido expresso ou do cancelamento da naturalização.",
        "perde a nacionalidade, pois adquiriu outra por vontade própria, sem imposição do país estrangeiro.",
        "perde a nacionalidade, salvo se a lei estrangeira reconhecer que ela tem nacionalidade originária.",
        "passa a ser brasileira naturalizada, por ter juntado a nacionalidade brasileira com outra.",
        "perde a nacionalidade brasileira se ficar mais de quinze anos seguidos fora do Brasil.",
      ],
      correta: 0,
      explicacao:
        "A EC 131/2023 reescreveu o § 4º do art. 12. Hoje só perde a nacionalidade quem tem a naturalização cancelada por sentença ou quem faz pedido expresso de perda à autoridade brasileira competente, salvo se ficar sem pátria.",
      explicacaoErradas:
        "Perder por adquirir outra nacionalidade, com as exceções de reconhecimento e de imposição, era a regra antiga, revogada. Nato não vira naturalizado, e morar fora não faz perder a nacionalidade.",
      pegadinha: "Questão antiga pode ter gabarito pela regra revogada; a prova atual segue a EC 131/2023.",
      conhecimento: "A pessoa pode ter mais de uma nacionalidade ao mesmo tempo; o Brasil não exige que ela escolha.",
    },
    {
      topico: "Naturalização",
      subassunto: "Art. 12, II, e §§ 1º e 2º",
      dificuldade: 4,
      raciocinio: "Língua portuguesa: 1 ano e idoneidade. Extraordinária: mais de 15 anos, sem condenação, com pedido. A lei não cria distinção nova.",
      enunciado:
        "Analise as afirmativas sobre os brasileiros naturalizados.\nI. Para quem vem de país de língua portuguesa, exigem-se apenas residência por um ano ininterrupto e idoneidade moral.\nII. O estrangeiro de qualquer nacionalidade residente no Brasil há mais de quinze anos ininterruptos e sem condenação penal pode se naturalizar, desde que requeira.\nIII. Ao português com residência permanente no País, havendo reciprocidade, são atribuídos os direitos de brasileiro, salvo os casos previstos na Constituição.\nIV. A lei pode criar novas distinções entre natos e naturalizados, desde que sejam razoáveis.\nEstão corretas as afirmativas",
      alternativas: [
        "I e II, apenas.",
        "II e IV, apenas.",
        "I, III e IV, apenas.",
        "II, III e IV, apenas.",
        "I, II e III, apenas.",
      ],
      correta: 4,
      explicacao:
        "As três primeiras repetem o art. 12: naturalização ordinária para quem vem de país de língua portuguesa (II, a), naturalização extraordinária (II, b) e o português equiparado (§ 1º).",
      explicacaoErradas:
        "A afirmativa IV contraria o § 2º: a lei não pode fazer distinção entre natos e naturalizados, salvo nos casos previstos na própria Constituição.",
      pegadinha: "Na extraordinária são mais de quinze anos ininterruptos; na ordinária de língua portuguesa, um ano só.",
      conhecimento: "O português equiparado não deixa de ser português: recebe direitos de brasileiro por reciprocidade, sem se naturalizar.",
    },
    {
      topico: "Natos × naturalizados",
      subassunto: "Distinções da CF",
      dificuldade: 5,
      raciocinio: "Empresa jornalística: naturalizado há mais de dez anos. Conselho da República: seis cidadãos natos. Ministro do STJ não é privativo.",
      enunciado:
        "Marque V (verdadeiro) ou F (falso) sobre as diferenças entre natos e naturalizados.\n( ) O naturalizado há mais de dez anos pode ser proprietário de empresa jornalística.\n( ) Entre os membros do Conselho da República há seis cidadãos que devem ser brasileiros natos.\n( ) O naturalizado pode ser deputado federal, mas não Presidente da Câmara dos Deputados.\n( ) O naturalizado não pode ser ministro do Superior Tribunal de Justiça.\nA sequência correta, de cima para baixo, é",
      alternativas: [
        "V, F, V, F.",
        "V, V, F, V.",
        "V, V, V, F.",
        "F, V, V, F.",
        "V, F, F, V.",
      ],
      correta: 2,
      explicacao:
        "A empresa jornalística pertence a brasileiros natos ou naturalizados há mais de dez anos (art. 222). O Conselho da República tem seis cidadãos brasileiros natos (art. 89, VII). O mandato de deputado é aberto ao naturalizado; a Presidência da Câmara, não.",
      explicacaoErradas:
        "O último item é falso: só o Ministro do STF precisa ser nato. Ministros do STJ e dos demais tribunais superiores podem ser naturalizados.",
      pegadinha: "STF é privativo de nato; STJ, não.",
      conhecimento: "A quarta distinção da CF é a extradição: o nato nunca é extraditado; o naturalizado, em dois casos (art. 5º, LI).",
    },
    {
      topico: "Perda da nacionalidade",
      subassunto: "Art. 12, § 4º, I",
      dificuldade: 5,
      raciocinio: "Cancelamento só por sentença judicial, e só por dois motivos: fraude na naturalização ou atentado contra a ordem constitucional e o Estado Democrático.",
      enunciado:
        "Segundo o art. 12, § 4º, I, da Constituição Federal, com a redação da EC 131/2023, o brasileiro naturalizado terá cancelada a naturalização",
      alternativas: [
        "por ato do Ministro da Justiça, se praticar atividade considerada nociva ao interesse nacional.",
        "por decreto do Presidente da República, se for condenado por crime hediondo ou tráfico.",
        "por sentença judicial, por fraude na naturalização ou atentado contra a ordem constitucional.",
        "por sentença judicial, se adquirir outra nacionalidade sem imposição do país estrangeiro.",
        "por decisão do Congresso Nacional, se morar fora do Brasil por mais de dois anos seguidos.",
      ],
      correta: 2,
      explicacao:
        "O cancelamento exige sentença judicial e só ocorre por fraude relacionada ao processo de naturalização ou por atentado contra a ordem constitucional e o Estado Democrático.",
      explicacaoErradas:
        "Ato do Ministro, decreto do Presidente ou decisão do Congresso não cancelam a naturalização. Atividade nociva ao interesse nacional era o texto antigo. Adquirir outra nacionalidade deixou de ser causa de perda.",
      pegadinha: "O motivo antigo (atividade nociva ao interesse nacional) foi trocado pela EC 131/2023.",
      conhecimento: "O cancelamento da naturalização por sentença transitada em julgado também é causa de perda dos direitos políticos (art. 15, I).",
    },
    {
      topico: "Brasileiro nato",
      subassunto: "Opção de nacionalidade",
      dificuldade: 5,
      raciocinio: "Alínea c: sem registro, o nascido no exterior de pai ou mãe brasileira precisa residir no Brasil e optar depois da maioridade, em qualquer tempo.",
      enunciado:
        "Pedro nasceu na Alemanha, filho de mãe brasileira que estudava lá, e não foi registrado em repartição brasileira. Veio morar no Brasil aos 10 anos. Segundo a Constituição Federal, Pedro",
      alternativas: [
        "é brasileiro naturalizado, porque passou a morar no Brasil depois de nascer no exterior.",
        "precisa optar pela nacionalidade até completar 21 anos, sob pena de perdê-la de vez.",
        "pode optar já aos 10 anos, representado pela mãe, e passa a ser brasileiro nato.",
        "só será brasileiro se a mãe estivesse a serviço do Brasil quando ele nasceu lá.",
        "pode optar em qualquer tempo depois da maioridade e, assim, será brasileiro nato.",
      ],
      correta: 4,
      explicacao:
        "Alínea c: é nato o nascido no estrangeiro de pai ou mãe brasileira que venha a residir no Brasil e opte, em qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira.",
      explicacaoErradas:
        "Residir aqui não o torna naturalizado: a hipótese é de nato. Não há prazo final para optar, e a opção só vale depois da maioridade. O serviço do Brasil é outra hipótese (alínea b), não a única.",
      pegadinha: "\"Em qualquer tempo\" vale para o fim do prazo; o começo é a maioridade.",
      conhecimento: "Se Pedro tivesse sido registrado no consulado, já seria nato pelo registro, sem precisar morar no Brasil nem optar.",
    },
    {
      topico: "Idioma e símbolos",
      subassunto: "Art. 13",
      dificuldade: 4,
      raciocinio: "Quatro símbolos: bandeira, hino, armas e selo. Os outros entes podem ter os seus.",
      enunciado: "Sobre os símbolos da República Federativa do Brasil, segundo o art. 13 da Constituição Federal,",
      alternativas: [
        "são a bandeira, o hino e o brasão, e os Estados não podem ter símbolos próprios.",
        "são a bandeira, o hino, as armas e o selo, e Estados e Municípios podem ter os seus.",
        "são a bandeira, o hino, as armas e o selo, e só os Estados podem ter símbolos próprios.",
        "são a bandeira, o hino, as armas e o lema, e Estados e Municípios podem ter os seus.",
        "são a bandeira e o hino, pois as armas e o selo pertencem apenas ao Poder Executivo.",
      ],
      correta: 1,
      explicacao:
        "Art. 13, § 1º: são símbolos a bandeira, o hino, as armas e o selo nacionais. O § 2º permite que Estados, Distrito Federal e Municípios tenham símbolos próprios.",
      explicacaoErradas:
        "Faltam símbolos quando a lista fica só com bandeira, hino e brasão ou bandeira e hino. Lema não é símbolo previsto na CF. Os Municípios e o Distrito Federal também podem ter símbolos, não só os Estados.",
      pegadinha: "As armas nacionais são o brasão; a lista tem quatro itens, não três.",
      conhecimento: "O caput do art. 13 diz que a língua portuguesa é o idioma oficial da República Federativa do Brasil.",
    },
    {
      topico: "Critérios de nacionalidade",
      subassunto: "Ius soli e ius sanguinis",
      dificuldade: 4,
      raciocinio: "Nascer aqui basta, salvo pais estrangeiros a serviço do país deles. Nascer fora exige o sangue mais um requisito.",
      enunciado: "Sobre os critérios de atribuição da nacionalidade primária, a Constituição Federal adota",
      alternativas: [
        "apenas o ius soli, de modo que quem nasce no exterior nunca é brasileiro nato.",
        "apenas o ius sanguinis, de modo que o filho de estrangeiros nascido aqui é estrangeiro.",
        "o ius sanguinis como regra e o ius soli apenas para os filhos de pai brasileiro.",
        "o ius soli como regra e o ius sanguinis somado a serviço do Brasil, registro ou opção.",
        "o ius soli para todos os nascidos aqui, inclusive filhos de estrangeiros a serviço de seu país.",
      ],
      correta: 3,
      explicacao:
        "Nascer no Brasil torna a pessoa nata (ius soli), salvo pais estrangeiros a serviço do país deles. Para quem nasce fora, o sangue brasileiro precisa vir junto com serviço do Brasil, registro ou residência com opção.",
      explicacaoErradas:
        "A CF não usa um critério só: tem hipóteses de nato nascido no exterior e de nato filho de estrangeiros. O ius soli tem a exceção dos pais a serviço do país deles. A mãe brasileira também transmite a nacionalidade.",
      pegadinha: "Ius soli com exceção: filho de estrangeiros a serviço do país deles, nascido aqui, não é nato.",
      conhecimento: "Nacionalidade primária vem do nascimento; secundária, de um ato de vontade, a naturalização.",
    },
    {
      topico: "Perda da nacionalidade",
      subassunto: "Art. 12, § 5º",
      dificuldade: 5,
      raciocinio: "O § 5º, criado pela EC 131/2023, permite readquirir a nacionalidade originária depois da renúncia, nos termos da lei.",
      enunciado:
        "Ana, brasileira nata, fez pedido expresso de perda da nacionalidade brasileira perante a autoridade competente, sem ficar sem pátria. Anos depois, quer voltar a ser brasileira. Segundo a Constituição Federal, Ana",
      alternativas: [
        "pode readquirir a nacionalidade brasileira originária, nos termos da lei.",
        "só pode voltar como naturalizada, depois de quinze anos de residência.",
        "nunca mais pode ser brasileira, pois a renúncia é definitiva e irrevogável.",
        "volta a ser nata automaticamente ao fixar residência no Brasil.",
        "pode voltar por decreto do Presidente, mas como brasileira naturalizada.",
      ],
      correta: 0,
      explicacao:
        "O § 5º do art. 12, incluído pela EC 131/2023, diz que a renúncia por pedido expresso não impede o interessado de readquirir a nacionalidade brasileira originária, nos termos da lei.",
      explicacaoErradas:
        "A volta é à nacionalidade originária, ou seja, como nata, e não como naturalizada. A renúncia não é definitiva. E a volta não é automática: segue o que a lei disciplinar.",
      pegadinha: "Quem volta, volta como nato: a nacionalidade readquirida é a originária.",
      conhecimento: "O pedido de perda não é aceito se deixar a pessoa sem nenhuma nacionalidade (apatridia).",
    },
  ],
};
