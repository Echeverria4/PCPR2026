import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a04",
  resumo: {
    ideia:
      "As relações de trabalho mudaram com a indústria, a globalização e a tecnologia. Esta aula passa pelos modelos de produção (fordismo e toyotismo), pelos tipos de desemprego, pela economia informal e seus efeitos, pela Reforma Trabalhista e pelas novas formas de trabalho: home office e aplicativos.",
    itens: [
      {
        termo: "Do trabalho escravo ao assalariado",
        faz: "Na história, o trabalho passou pela escravidão, pela servidão e, com a Revolução Industrial, pelo assalariamento. As condições duras nas fábricas deram origem ao movimento operário e às primeiras leis trabalhistas.",
        pista: "No Brasil, a CLT é de 1943.",
      },
      {
        termo: "Taylorismo e fordismo",
        faz: "Produção em massa e padronizada, na linha de montagem: cada trabalhador faz sempre a mesma tarefa, com tempo controlado, e as fábricas mantêm grandes estoques. Marcou boa parte do século XX.",
      },
      {
        termo: "Toyotismo (acumulação flexível)",
        faz: "Nasceu no Japão depois da Segunda Guerra: produção sob demanda (just in time), estoque mínimo, trabalhador multifuncional em equipes e muita terceirização de partes da produção.",
      },
      {
        termo: "Globalização e deslocalização",
        faz: "Empresas transnacionais levam fábricas para países com mão de obra e impostos mais baratos. Nos países de origem, vagas industriais somem; nos de destino, surgem empregos, muitas vezes com salários baixos.",
      },
      {
        termo: "Tipos de desemprego",
        faz: "Conjuntural: vem de uma crise e recua quando a economia volta a crescer. Estrutural (ou tecnológico): a tecnologia ou a mudança da produção elimina a vaga de vez. Sazonal: em certas épocas do ano. Friccional: o tempo de troca entre empregos.",
      },
      {
        termo: "Economia informal",
        faz: "Atividades em si legais, mas feitas sem registro nem proteção da lei, como o ambulante sem CNPJ e o empregado sem carteira assinada. Não se confunde com atividades criminosas, como o contrabando.",
      },
      {
        termo: "Quem é informal para o IBGE",
        faz: "Empregado do setor privado sem carteira, trabalhador doméstico sem carteira, empregador e trabalhador por conta própria sem CNPJ e o trabalhador familiar auxiliar (que ajuda a família sem salário).",
        pista: "No Brasil, perto de 4 em cada 10 ocupados estão na informalidade.",
      },
      {
        termo: "Efeitos da informalidade",
        faz: "Para o trabalhador: sem 13º salário, férias, FGTS e seguro-desemprego, e, sem contribuir ao INSS, sem auxílio na doença nem aposentadoria. Para o Estado: menos arrecadação e mais gente vulnerável.",
      },
      {
        termo: "MEI (microempreendedor individual)",
        faz: "Criado pela Lei Complementar 128/2008 para formalizar pequenos negócios: o MEI ganha CNPJ, pode emitir nota fiscal, pode ter um empregado e paga um valor mensal fixo que inclui o INSS, com acesso a benefícios da Previdência.",
      },
      {
        termo: "Reforma Trabalhista (Lei 13.467/2017)",
        faz: "Criou o trabalho intermitente, deu força ao acordo coletivo sobre a lei em vários temas (negociado sobre o legislado), regulou o teletrabalho e tornou a contribuição sindical opcional. No mesmo ano, a terceirização foi liberada também para a atividade-fim.",
        pista: "13º salário e férias são direitos da Constituição: a reforma não os retirou.",
      },
      {
        termo: "Flexibilização e precarização",
        faz: "Flexibilizar é tornar mais livres as regras de contrato e de jornada. Quando isso vem com perda de direitos, renda instável e insegurança, fala-se em precarização do trabalho.",
      },
      {
        termo: "Home office e teletrabalho",
        faz: "O trabalho remoto cresceu com a pandemia de covid-19. Vantagens: menos tempo no trânsito e mais autonomia. Riscos: jornada que não acaba, isolamento e despesas (internet, energia) que passam ao trabalhador.",
      },
      {
        termo: "Uberização (gig economy)",
        faz: "Trabalho por tarefa, distribuído por aplicativo: motoristas, entregadores, diaristas. Em geral, sem carteira assinada, com renda que varia e com custos e riscos (veículo, combustível, acidentes) por conta do trabalhador.",
      },
    ],
  },
  questoes: [
    {
      topico: "Transformações do trabalho",
      subassunto: "Fordismo e toyotismo",
      dificuldade: 4,
      raciocinio: "Fordismo (EUA, início do século XX): massa, padronização, linha de montagem, tarefa repetitiva, grandes estoques. Toyotismo (Japão, pós-guerra): just in time, estoque mínimo, multifuncional, terceirização.",
      enunciado: "Os modelos de produção mudaram a vida do trabalhador ao longo do século XX. Sobre o fordismo e o toyotismo, assinale a alternativa correta.",
      alternativas: [
        "O toyotismo usa grandes estoques e trabalhadores que fazem sempre a mesma tarefa, como na linha de montagem.",
        "O fordismo apostou na produção em massa padronizada, e o toyotismo, no estoque mínimo e na produção sob demanda.",
        "O fordismo surgiu no Japão depois da Segunda Guerra Mundial, e o toyotismo, nos Estados Unidos, no começo do século XX.",
        "O toyotismo acabou com a terceirização, pois exige que todas as peças sejam feitas dentro da mesma fábrica.",
        "No fordismo, o trabalhador é multifuncional e participa das decisões sobre a produção em pequenas equipes.",
      ],
      correta: 1,
      explicacao:
        "O fordismo produzia em massa, com peças padronizadas, linha de montagem e grandes estoques. O toyotismo inverteu a lógica: produz conforme a demanda (just in time), com estoque mínimo, trabalhador multifuncional e muita terceirização.",
      explicacaoErradas:
        "Grandes estoques e tarefa repetitiva são marcas do fordismo, e não do toyotismo. As origens estão trocadas: o fordismo é dos EUA, do começo do século XX, e o toyotismo, do Japão do pós-guerra. O toyotismo ampliou a terceirização. O trabalhador multifuncional em equipe é do toyotismo.",
      pegadinha: "Trocar os modelos: estoque grande e tarefa repetitiva = fordismo; estoque mínimo e polivalência = toyotismo.",
      conhecimento: "O toyotismo também é chamado de modelo de acumulação flexível.",
    },
    {
      topico: "Transformações do trabalho",
      subassunto: "Tipos de desemprego",
      dificuldade: 5,
      raciocinio: "A vaga sumiu por tecnologia e não volta com a retomada = estrutural (tecnológico). Conjuntural volta com o crescimento. Sazonal: época do ano. Friccional: troca de emprego. Quem procura emprego segue na PEA.",
      enunciado: "Um banco fecha agências e troca os caixas por aplicativos; anos depois, mesmo com a economia em alta, essas vagas não voltam. Sobre o tipo de desemprego gerado, assinale a alternativa correta.",
      alternativas: [
        "É desemprego conjuntural, pois vem de uma crise passageira e as vagas voltam quando a economia se recupera.",
        "É desemprego sazonal, pois acontece em certas épocas do ano, como na entressafra ou fora da alta temporada.",
        "É desemprego friccional, pois é o tempo curto que o trabalhador leva para trocar de um emprego para outro.",
        "É desemprego estrutural, pois a tecnologia eliminou as vagas, que não voltam mesmo com a economia em alta.",
        "Não há desemprego, pois os trabalhadores dispensados passam para a população inativa de forma automática.",
      ],
      correta: 3,
      explicacao:
        "Quando a tecnologia ou uma mudança na forma de produzir elimina vagas de vez, o desemprego é estrutural (ou tecnológico). Ele não se resolve com o crescimento da economia: os trabalhadores precisam se requalificar para outras funções.",
      explicacaoErradas:
        "O conjuntural vem de crise e recua com a retomada, o que não ocorreu aqui. O sazonal depende da época do ano. O friccional é a troca rápida entre empregos. Quem foi dispensado e procura emprego continua na PEA, como desocupado, e não passa para a população inativa.",
      pegadinha: "Chamar de conjuntural um desemprego que não volta com a economia em alta: isso é estrutural.",
      conhecimento: "A automação e a inteligência artificial são hoje as causas mais citadas de desemprego estrutural.",
    },
    {
      topico: "Economia informal",
      subassunto: "Conceito",
      dificuldade: 4,
      raciocinio: "Informal = atividade lícita sem registro nem proteção (ambulante sem CNPJ, empregado sem carteira). Crime (tráfico, contrabando) é outra coisa. Existe em países ricos também.",
      enunciado: "A economia informal é muitas vezes confundida com atividades criminosas. Sobre o conceito de economia informal, assinale a alternativa correta.",
      alternativas: [
        "Reúne atividades em si legais, mas feitas sem registro, como o camelô sem CNPJ e o empregado sem carteira.",
        "Reúne só atividades ilegais, como o tráfico e o contrabando, que o Estado não consegue fiscalizar no país.",
        "Só existe nos países pobres, pois nos ricos todo trabalho é registrado e protegido pelas leis trabalhistas.",
        "É formada só por grandes empresas que sonegam impostos, sem incluir quem trabalha por conta própria.",
        "Desapareceu no Brasil com a internet, pois os aplicativos registram todos os trabalhadores com carteira.",
      ],
      correta: 0,
      explicacao:
        "A economia informal reúne atividades lícitas feitas sem registro nem proteção da lei: o ambulante sem CNPJ, o empregado sem carteira, a doméstica sem registro. O problema é a falta de formalização, e não a atividade em si.",
      explicacaoErradas:
        "Tráfico e contrabando são crimes, e não simples informalidade. A informalidade existe também nos países ricos, embora em menor escala. Ela atinge sobretudo quem trabalha por conta própria e sem carteira. Os aplicativos, em geral, não assinam carteira, e a informalidade segue alta no Brasil.",
      pegadinha: "Igualar informal a ilegal: a atividade é lícita, o que falta é o registro.",
      conhecimento: "A Organização Internacional do Trabalho estima que a maior parte dos trabalhadores do mundo está na economia informal.",
    },
    {
      topico: "Economia informal",
      subassunto: "Informalidade segundo o IBGE",
      dificuldade: 5,
      raciocinio: "Informal (IBGE): empregado privado sem carteira, doméstico sem carteira, empregador/conta própria sem CNPJ, familiar auxiliar. I ambulante sem CNPJ = informal. II doméstica sem carteira = informal. III MEI com CNPJ = formal. IV com carteira = formal.",
      enunciado: "Pelo conceito de informalidade do IBGE, considere: I) um vendedor ambulante sem CNPJ; II) uma empregada doméstica que trabalha todos os dias sem carteira; III) um eletricista registrado como MEI, com CNPJ; IV) um vendedor de loja com carteira assinada. Assinale a alternativa correta.",
      alternativas: [
        "Só o vendedor I é informal, pois a empregada II trabalha em casa de família e não entra nessa conta.",
        "Todos são informais, pois nenhum deles trabalha em uma empresa grande, com mais de cem empregados.",
        "I, II e III são informais, pois quem trabalha como MEI continua sem nenhum registro oficial no país.",
        "III e IV são informais, pois pagam impostos e por isso ficam fora da economia formal do país.",
        "I e II estão na informalidade; o MEI com CNPJ e o vendedor com carteira estão no setor formal.",
      ],
      correta: 4,
      explicacao:
        "Para o IBGE, são informais o empregado sem carteira (inclusive o doméstico), o empregador e o conta própria sem CNPJ e o trabalhador familiar auxiliar. Assim, o ambulante sem CNPJ e a doméstica sem carteira são informais; o MEI tem CNPJ, e o vendedor tem carteira: os dois são formais.",
      explicacaoErradas:
        "O trabalho doméstico sem carteira entra, sim, na conta da informalidade. O tamanho da empresa não define a formalidade, e sim o registro. O MEI tem CNPJ, que é um registro oficial. Pagar impostos e ter registro é justamente o que caracteriza a formalidade.",
      pegadinha: "Achar que o MEI é informal: com CNPJ e contribuição ao INSS, ele está no setor formal.",
      conhecimento: "O trabalho doméstico é um dos setores com maior taxa de informalidade no Brasil.",
    },
    {
      topico: "Economia informal",
      subassunto: "Efeitos da informalidade",
      dificuldade: 4,
      raciocinio: "Informal: sem 13º, férias, FGTS, seguro-desemprego; sem INSS → sem auxílio-doença e sem aposentadoria. Estado: menos arrecadação. Atinge todas as idades, mais jovens e menos escolarizados.",
      enunciado: "A informalidade atinge perto de 4 em cada 10 trabalhadores ocupados no Brasil. Sobre os efeitos dela para o trabalhador e para o Estado, assinale a alternativa correta.",
      alternativas: [
        "O trabalhador informal tem os mesmos direitos do formal, pois a Constituição não separa as duas situações de trabalho.",
        "A informalidade aumenta a arrecadação, pois quem trabalha sem registro paga mais imposto sobre o consumo.",
        "Sem contribuir ao INSS, o informal fica sem auxílio na doença e sem aposentadoria, e o Estado arrecada menos.",
        "A informalidade só atinge os trabalhadores jovens, pois os mais velhos já estão todos aposentados no país.",
        "O informal recebe FGTS e seguro-desemprego pagos pelo Estado, no lugar do patrão que não o registrou.",
      ],
      correta: 2,
      explicacao:
        "Quem trabalha sem registro e não contribui ao INSS fica sem proteção: sem auxílio quando adoece e sem aposentadoria no futuro, além de não ter 13º, férias e FGTS. Para o Estado, a informalidade reduz a arrecadação de impostos e de contribuições.",
      explicacaoErradas:
        "Os direitos trabalhistas dependem do vínculo formal: sem carteira, o trabalhador não os recebe. Sem registro, a renda e o negócio não pagam impostos diretos, e a arrecadação cai. A informalidade atinge todas as idades. FGTS e seguro-desemprego dependem do vínculo formal e não são pagos pelo Estado no lugar do patrão.",
      pegadinha: "Achar que o informal tem os mesmos direitos: sem carteira ou CNPJ, ele fica sem a proteção da lei.",
      conhecimento: "O trabalhador informal pode contribuir ao INSS por conta própria, como contribuinte individual.",
    },
    {
      topico: "Economia informal",
      subassunto: "MEI",
      dificuldade: 5,
      raciocinio: "MEI: LC 128/2008 (alterou a LC 123/2006). CNPJ, nota fiscal, valor mensal fixo (DAS) que inclui o INSS → benefícios. Pode ter 1 empregado. Não tem relação com a Reforma Trabalhista de 2017.",
      enunciado: "O microempreendedor individual (MEI) foi criado para trazer pequenos negócios para a formalidade. Sobre ele, assinale a alternativa correta.",
      alternativas: [
        "O MEI ganha CNPJ e paga um valor mensal fixo que inclui o INSS, o que dá acesso a benefícios da Previdência.",
        "O MEI não pode contratar ninguém, pois a lei proíbe que ele tenha qualquer funcionário com carteira assinada.",
        "O MEI fica isento de qualquer contribuição, pois o objetivo da lei é só registrar o negócio em um cadastro.",
        "O MEI foi criado pela Reforma Trabalhista de 2017, junto com o trabalho intermitente e com o teletrabalho.",
        "Quem se formaliza como MEI perde o direito à aposentadoria, pois deixa de ser considerado um trabalhador.",
      ],
      correta: 0,
      explicacao:
        "O MEI recebe CNPJ, pode emitir nota fiscal e paga um valor mensal fixo, que inclui a contribuição ao INSS. Com isso, passa a ter acesso a benefícios como aposentadoria por idade, auxílio por incapacidade e salário-maternidade.",
      explicacaoErradas:
        "O MEI pode ter um empregado. A guia mensal inclui o INSS, então não há isenção total. O MEI foi criado pela Lei Complementar 128/2008, e não pela Reforma Trabalhista. Contribuindo, o MEI ganha acesso à aposentadoria, e não a perde.",
      pegadinha: "Dizer que o MEI não pode ter empregado: a lei permite um empregado.",
      conhecimento: "O MEI tem um teto de faturamento por ano; quem passa dele muda de categoria de empresa.",
    },
    {
      topico: "Transformações do trabalho",
      subassunto: "Reforma Trabalhista",
      dificuldade: 5,
      raciocinio: "Lei 13.467/2017: trabalho intermitente; negociado sobre o legislado; teletrabalho regulado; contribuição sindical opcional. 13º e férias são da CF (art. 7º). Terceirização ampliada (atividade-fim).",
      enunciado: "A Reforma Trabalhista (Lei 13.467/2017) mudou várias regras da CLT. Sobre essas mudanças, assinale a alternativa correta.",
      alternativas: [
        "A reforma acabou com o 13º salário e com as férias, que passaram a depender de acordo entre as partes.",
        "A reforma tornou obrigatória a contribuição sindical, que passou a ser descontada de todo empregado.",
        "A reforma criou o trabalho intermitente e deu força ao negociado sobre o legislado em vários temas.",
        "A reforma proibiu o home office, que só voltou a ser permitido depois da pandemia de covid-19.",
        "A reforma proibiu a terceirização, que passou a ser vista como fraude em qualquer atividade da empresa.",
      ],
      correta: 2,
      explicacao:
        "A reforma criou o contrato intermitente (o trabalhador é chamado conforme a necessidade e recebe pelas horas trabalhadas) e permitiu que acordos e convenções coletivas prevaleçam sobre a lei em vários temas, como a jornada e o banco de horas.",
      explicacaoErradas:
        "13º salário e férias estão na Constituição (art. 7º) e não foram retirados. A contribuição sindical deixou de ser obrigatória, e não o contrário. A reforma regulou o teletrabalho, e não o proibiu. A terceirização foi ampliada, inclusive para a atividade-fim da empresa.",
      pegadinha: "Achar que a reforma tirou direitos da Constituição, como o 13º e as férias: lei comum não pode fazer isso.",
      conhecimento: "Em 2018, o STF considerou constitucional a terceirização também da atividade-fim.",
    },
    {
      topico: "Novas formas de trabalho",
      subassunto: "Uberização",
      dificuldade: 4,
      raciocinio: "Uberização: trabalho por tarefa via aplicativo, sem carteira em regra, renda variável, custos (veículo, combustível) e riscos com o trabalhador. Vale para transporte, entregas, limpeza etc.",
      enunciado: "Motoristas e entregadores de aplicativo são o exemplo mais conhecido da chamada uberização do trabalho. Sobre esse fenômeno, assinale a alternativa correta.",
      alternativas: [
        "Na uberização, o trabalhador tem carteira assinada pela plataforma e recebe um salário fixo todo mês.",
        "A uberização só existe no transporte de passageiros e não alcança entregas, limpeza ou outros serviços.",
        "Na uberização, a empresa paga o carro, o combustível e a manutenção usados pelo trabalhador em cada serviço.",
        "O trabalho é pago por tarefa via aplicativo, com renda instável e custos e riscos por conta do trabalhador.",
        "A uberização acabou com o trabalho informal, pois todo motorista passa a ser servidor público municipal.",
      ],
      correta: 3,
      explicacao:
        "Na uberização, o aplicativo distribui tarefas (corridas, entregas, faxinas) e paga por cada uma. Em geral, não há carteira assinada, a renda muda de semana para semana, e o trabalhador arca com o veículo, o combustível e o risco de acidentes.",
      explicacaoErradas:
        "Em regra, as plataformas não assinam carteira nem pagam salário fixo. O modelo se espalhou por entregas, limpeza, reparos e muitos outros serviços. Os custos do veículo ficam com o trabalhador. A uberização não tornou ninguém servidor público e convive com alta informalidade.",
      pegadinha: "Achar que a plataforma assume os custos: carro, combustível e manutenção ficam com quem trabalha.",
      conhecimento: "O termo gig economy (economia dos bicos) descreve o mesmo fenômeno de trabalho por tarefa.",
    },
    {
      topico: "Transformações do trabalho",
      subassunto: "Globalização e deslocalização",
      dificuldade: 5,
      raciocinio: "Deslocalização: fábricas vão para países com mão de obra e impostos mais baratos (Ásia, por exemplo). Nos países de origem: perda de vagas industriais e sindicatos mais fracos. Leis não foram unificadas; automação seguiu crescendo.",
      enunciado: "Com a globalização, muitas indústrias mudaram de lugar no mundo. Sobre os efeitos desse processo no trabalho, assinale a alternativa correta.",
      alternativas: [
        "As fábricas foram sempre para os países ricos, pois lá os salários e os impostos são os mais baixos do mundo.",
        "A globalização acabou com a automação, pois ficou mais barato contratar mais gente do que comprar máquinas.",
        "A deslocalização deixou mais fortes os sindicatos dos países ricos, com mais vagas na sua indústria local.",
        "A globalização deu a todos os países as mesmas leis trabalhistas, com um salário mínimo igual no mundo todo.",
        "Muitas empresas levaram fábricas para países com mão de obra mais barata, o que cortou vagas nos de origem.",
      ],
      correta: 4,
      explicacao:
        "Para cortar custos, empresas transnacionais transferiram fábricas para países com salários e impostos mais baixos, sobretudo na Ásia. Nos países de origem, isso fechou vagas na indústria e enfraqueceu os sindicatos; nos de destino, criou empregos, muitas vezes mal pagos.",
      explicacaoErradas:
        "Os salários e os impostos são mais altos nos países ricos, por isso as fábricas saíram deles. A automação seguiu crescendo junto com a globalização. Com a saída das fábricas, os sindicatos dos países ricos perderam força. Cada país mantém as suas próprias leis trabalhistas e o seu salário mínimo.",
      pegadinha: "Achar que as fábricas foram para os países ricos: elas buscaram mão de obra mais barata.",
      conhecimento: "A China se tornou a grande fábrica do mundo nesse processo, a partir dos anos 1980.",
    },
    {
      topico: "Novas formas de trabalho",
      subassunto: "Home office",
      dificuldade: 4,
      raciocinio: "Home office: menos deslocamento, mais autonomia; riscos: jornada sem fim, isolamento, custos (internet, energia) com o trabalhador. Teletrabalhador segue empregado, com direitos da CLT. Não serve para atividades presenciais.",
      enunciado: "O home office cresceu muito depois da pandemia de covid-19. Sobre os efeitos do trabalho remoto, assinale a alternativa correta.",
      alternativas: [
        "O trabalho remoto acaba com o controle de metas, pois a empresa não tem como saber o que o empregado faz.",
        "Ganha-se tempo sem o deslocamento, mas há risco de jornada sem fim e de despesas passarem ao trabalhador.",
        "O trabalho remoto serve a qualquer atividade, inclusive às que exigem presença física no local de trabalho.",
        "Quem está em home office deixa de ser empregado e perde os direitos da CLT, como as férias e o 13º salário.",
        "O home office só traz vantagens, pois acaba com o isolamento social e separa melhor a casa do trabalho.",
      ],
      correta: 1,
      explicacao:
        "Sem o trânsito, o trabalhador ganha tempo e autonomia. Mas a casa vira escritório: a jornada tende a se estender, o contato com colegas diminui, e gastos como internet e energia podem ficar com ele.",
      explicacaoErradas:
        "As empresas controlam metas e entregas por sistemas e relatórios. Atividades presenciais, como a de um operário de fábrica, não podem ser feitas em casa. O teletrabalhador segue empregado, com férias e 13º. O home office pode aumentar o isolamento e misturar a casa com o trabalho.",
      pegadinha: "Ver só as vantagens: o trabalho remoto também traz jornada maior e isolamento.",
      conhecimento: "O direito de se desligar do trabalho fora do horário é chamado de direito à desconexão.",
    },
  ],
};
