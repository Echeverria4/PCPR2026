import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a02",
  resumo: {
    ideia:
      "A estrutura de uma população aparece na pirâmide etária e na divisão do trabalho. Esta aula mostra como ler a pirâmide, o que é PEA, o modelo da transição demográfica, as teorias sobre população (Malthus, neomalthusiana e reformista) e os tipos de migração, com os grandes fluxos do Brasil.",
    itens: [
      {
        termo: "Pirâmide etária",
        faz: "Gráfico da população por idade e sexo. A base mostra os jovens, o meio (corpo) mostra os adultos e o topo mostra os idosos. Por convenção, os homens ficam à esquerda e as mulheres, à direita.",
        pista: "Base larga = muitos nascimentos. Topo largo = vida mais longa.",
      },
      {
        termo: "Formatos da pirâmide",
        faz: "Jovem: base larga e topo fino (natalidade alta, vida curta). Adulta ou em transição: base estreitando e corpo largo. Envelhecida: base estreita e topo largo. O Brasil de hoje tem a base menor que o corpo e o topo crescendo.",
      },
      {
        termo: "Mais mulheres no topo",
        faz: "Entre os idosos há mais mulheres que homens, porque os homens morrem mais cedo (sobremortalidade masculina), sobretudo por violência e acidentes entre os jovens adultos.",
      },
      {
        termo: "Razão de dependência",
        faz: "Compara quem depende (0 a 14 anos e 65 anos ou mais) com quem está em idade ativa (15 a 64 anos), para cada 100 pessoas ativas.",
        pista: "21% jovens + 9% idosos sobre 70% ativos: 30 ÷ 70 ≈ 43 dependentes para cada 100.",
      },
      {
        termo: "Bônus demográfico",
        faz: "Fase em que a parcela em idade ativa é grande e a de dependentes é pequena: a razão de dependência fica baixa. É uma janela de oportunidade, que se fecha quando os idosos passam a crescer muito.",
      },
      {
        termo: "PEA e PEI",
        faz: "PEA (força de trabalho) = pessoas em idade de trabalhar que estão ocupadas ou procurando emprego. PEI = quem não trabalha nem procura: aposentados, estudantes que não procuram vaga, quem cuida só da casa.",
        pista: "Desempregado que procura emprego está na PEA. Quem desistiu de procurar (desalentado) fica fora dela.",
      },
      {
        termo: "Setores da economia",
        faz: "Primário: agropecuária, pesca e extrativismo. Secundário: indústria e construção civil. Terciário: comércio, transportes e serviços. No Brasil, o terciário reúne a maior parte dos ocupados.",
      },
      {
        termo: "Transição demográfica",
        faz: "Modelo em fases: 1) natalidade e mortalidade altas, crescimento baixo; 2) a mortalidade cai e a natalidade segue alta, e a população explode; 3) a natalidade passa a cair; 4) as duas ficam baixas, e o crescimento é pequeno.",
        pista: "No Brasil, o maior ritmo de crescimento foi nos anos 1950; a fecundidade começou a cair na segunda metade dos anos 1960.",
      },
      {
        termo: "Teoria de Malthus (1798)",
        faz: "A população cresceria em progressão geométrica, e os alimentos, em progressão aritmética: o resultado seria a fome. Como solução, pregava a sujeição moral (casar tarde e ter poucos filhos), e não contraceptivos.",
        pista: "Erro principal: não previu o avanço técnico no campo nem a queda da natalidade com a urbanização.",
      },
      {
        termo: "Neomalthusiana × reformista",
        faz: "Neomalthusiana (pós-Segunda Guerra): a população grande dos países pobres causa a pobreza, e o remédio é o controle da natalidade. Reformista: a pobreza é que causa a natalidade alta; com renda, escola e saúde, ela cai sozinha.",
      },
      {
        termo: "Tipos de migração",
        faz: "Pendular: ida e volta diária entre casa e trabalho em municípios diferentes. Transumância: migração sazonal, ligada a safras ou estações. Nomadismo: deslocamento contínuo, sem moradia fixa. Êxodo rural: campo para a cidade; êxodo urbano: o inverso.",
      },
      {
        termo: "Migrações internas e externas do Brasil",
        faz: "Internas: Nordeste para o Sudeste no século XX; sulistas para a fronteira agrícola do Centro-Oeste e do Norte a partir dos anos 1970; nas últimas décadas, migração de retorno ao Nordeste. Externas: europeus e japoneses (desde 1908) chegaram em massa; desde os anos 1980, brasileiros emigram para os EUA, o Japão e a Europa; hoje chegam haitianos e venezuelanos.",
        pista: "A Lei de Migração (Lei 13.445/2017) substituiu o antigo Estatuto do Estrangeiro, de 1980.",
      },
    ],
  },
  questoes: [
    {
      topico: "Estrutura da população",
      subassunto: "Pirâmide etária",
      dificuldade: 4,
      raciocinio: "Base = nascimentos recentes; topo = idosos. Base mais estreita que o corpo = natalidade em queda. Topo largo = expectativa de vida maior. Mulheres predominam no topo (sobremortalidade masculina).",
      enunciado: "A pirâmide etária do Brasil no Censo 2022 tem a base mais estreita que a parte do meio e o topo cada vez mais largo. Sobre a leitura dessa pirâmide, assinale a alternativa correta.",
      alternativas: [
        "A base estreita mostra a alta mortalidade infantil, que reduz o número de crianças vivas a cada ano no país.",
        "O topo mais largo indica que a mortalidade dos idosos subiu, e por isso há mais idosos no gráfico.",
        "Uma base estreita com topo largo é o desenho típico de país jovem, com natalidade alta e vida média curta.",
        "A base mais estreita reflete a queda da natalidade, e o topo mais largo, o aumento da expectativa de vida.",
        "No topo da pirâmide predominam os homens, porque a mortalidade feminina é maior em todas as idades adultas.",
      ],
      correta: 3,
      explicacao:
        "A base mostra quantas crianças nasceram nos últimos anos: se ela é mais estreita que o corpo, a natalidade caiu. O topo mostra os idosos: se ele se alarga, as pessoas estão vivendo mais. É o retrato de um país em transição para o envelhecimento.",
      explicacaoErradas:
        "A mortalidade infantil caiu muito no Brasil, e a base encolhe pela queda dos nascimentos. Mais idosos no gráfico vêm da vida mais longa, e não de mais mortes. Base estreita e topo largo é desenho de país envelhecido, e não jovem. No topo há mais mulheres, porque os homens é que morrem mais cedo.",
      pegadinha: "Ligar a base estreita à mortalidade infantil: o que estreita a base é a queda da natalidade.",
      conhecimento: "Os demógrafos dizem que a pirâmide brasileira caminha para um formato de 'barril', com o meio mais largo que a base.",
    },
    {
      topico: "Estrutura da população",
      subassunto: "Razão de dependência e bônus demográfico",
      dificuldade: 5,
      raciocinio: "Razão = (0–14 + 65+) ÷ (15–64) × 100 = (21 + 9) ÷ 70 × 100 ≈ 42,9. Dependência baixa = bônus demográfico. Idosos (9%) ainda abaixo dos jovens (21%).",
      enunciado: "Em um país, 21% da população tem de 0 a 14 anos, 70% tem de 15 a 64 anos e 9% tem 65 anos ou mais. Sobre a razão de dependência e o bônus demográfico, assinale a alternativa correta.",
      alternativas: [
        "A razão de dependência é de 30%, pois basta somar a parcela de jovens à de idosos sobre a população total.",
        "Há cerca de 43 dependentes para cada 100 pessoas em idade ativa, situação típica do bônus demográfico.",
        "Há cerca de 13 dependentes para cada 100 pessoas em idade ativa, pois só os idosos entram na conta.",
        "O bônus demográfico ocorre quando a parcela de idosos supera a de jovens, e isso já se vê nesses números.",
        "Com o envelhecimento, a razão de dependência tende a cair sempre, pois os idosos deixam de ser dependentes.",
      ],
      correta: 1,
      explicacao:
        "A razão de dependência divide os dependentes (jovens de 0 a 14 e idosos de 65 ou mais) pela população em idade ativa: 30 ÷ 70 dá cerca de 0,43, ou 43 dependentes para cada 100 ativos. Uma razão baixa como essa marca o bônus demográfico, quando há muita gente em idade de trabalhar.",
      explicacaoErradas:
        "A conta não usa a população total no denominador, e sim só quem tem de 15 a 64 anos. Os jovens também entram na conta, e não só os idosos. O bônus não depende de os idosos superarem os jovens; aqui, aliás, eles são 9% contra 21%. Com o envelhecimento, a razão tende a subir, porque os idosos contam como dependentes.",
      pegadinha: "Dividir pela população total (dá 30%) em vez de dividir só pela população de 15 a 64 anos.",
      conhecimento: "O bônus demográfico só vira crescimento econômico se houver emprego e educação para quem está em idade ativa.",
    },
    {
      topico: "Estrutura da população",
      subassunto: "PEA e PEI",
      dificuldade: 5,
      raciocinio: "PEA = ocupados + desocupados que procuram. I ocupada (trabalho com salário). II desocupado que procura (PEA). III aposentada sem procurar (fora). IV desistiu de procurar = desalentado, fora da força de trabalho.",
      enunciado: "Pelos critérios do IBGE, considere: I) uma estudante que trabalha meio período, com salário, em uma loja; II) um desempregado que procura emprego; III) uma aposentada que não trabalha nem procura trabalho; IV) um jovem que desistiu de procurar vaga por achar que não acharia. Assinale a alternativa correta.",
      alternativas: [
        "Só a pessoa I está na PEA, pois quem está desempregado não faz parte da população economicamente ativa.",
        "As pessoas I, II e IV estão na PEA, pois o desalentado conta como desempregado nas estatísticas oficiais.",
        "Todas as pessoas estão na PEA, pois todas já atingiram a idade mínima que o IBGE usa para essa medida.",
        "As pessoas II e IV estão na PEA, e a pessoa I fica de fora, porque quem estuda não entra na conta.",
        "As pessoas I e II estão na PEA; III e IV ficam fora dela, e a IV é o que o IBGE chama de desalentado.",
      ],
      correta: 4,
      explicacao:
        "A PEA (força de trabalho) reúne quem está ocupado e quem está desocupado, mas procura emprego. A estudante trabalha com salário (ocupada) e o desempregado procura vaga (desocupado): os dois estão na PEA. A aposentada e o jovem que desistiu de procurar ficam fora; este último é o desalentado.",
      explicacaoErradas:
        "Quem está desempregado, mas procura emprego, faz parte da PEA. O desalentado não procura vaga e, por isso, fica fora da força de trabalho. Ter idade para trabalhar não basta: é preciso trabalhar ou procurar trabalho. Estudar não tira ninguém da PEA quando a pessoa também trabalha.",
      pegadinha: "Achar que desempregado está fora da PEA: quem procura emprego está dentro dela.",
      conhecimento: "Quando muita gente desiste de procurar emprego, a taxa de desemprego pode cair sem que a situação tenha melhorado.",
    },
    {
      topico: "Estrutura da população",
      subassunto: "Setores da economia",
      dificuldade: 4,
      raciocinio: "Primário: agropecuária, pesca, extrativismo. Secundário: indústria e construção civil. Terciário: comércio, transportes, serviços. No Brasil, o terciário é o maior empregador.",
      enunciado: "Os setores da economia agrupam as atividades pelo tipo de trabalho. Sobre a classificação das atividades e a ocupação no Brasil, assinale a alternativa correta.",
      alternativas: [
        "A pesca é do primário, a construção civil é do secundário, e o terciário abriga a maior parte dos ocupados.",
        "A construção civil é do setor terciário, pois presta um serviço a quem compra o imóvel pronto da construtora.",
        "O setor primário ainda reúne a maior parte dos ocupados no Brasil, por causa da força do agronegócio no país.",
        "O transporte de cargas é do setor secundário, pois movimenta produtos que acabaram de sair das indústrias.",
        "O setor secundário cresceu tanto que hoje emprega mais que o comércio e os serviços somados em todo o país.",
      ],
      correta: 0,
      explicacao:
        "A pesca tira o recurso direto da natureza (primário). A construção civil transforma materiais em obras, como a indústria (secundário). Comércio, transportes e serviços formam o terciário, que no Brasil reúne a maior parte das pessoas ocupadas.",
      explicacaoErradas:
        "A construção civil é do secundário, porque transforma materiais em um produto. O agronegócio pesa muito nas exportações, mas emprega uma parcela pequena dos ocupados. O transporte de cargas é um serviço, do terciário. A indústria emprega bem menos que o comércio e os serviços somados.",
      pegadinha: "Confundir peso nas exportações com número de empregos: o agro exporta muito, mas emprega pouca gente.",
      conhecimento: "O crescimento do terciário é chamado de terciarização da economia.",
    },
    {
      topico: "Transição demográfica",
      subassunto: "Fases e caso brasileiro",
      dificuldade: 5,
      raciocinio: "Fase 1: ambas altas. Fase 2: mortalidade cai, natalidade alta → explosão. Fase 3: natalidade cai. Fase 4: ambas baixas. Brasil: mortalidade caiu primeiro (pós-1940); pico de crescimento nos anos 1950; fecundidade cai desde a 2ª metade dos anos 1960.",
      enunciado: "O modelo de transição demográfica descreve como mudam a natalidade e a mortalidade com o desenvolvimento. Sobre esse modelo e o caso brasileiro, assinale a alternativa correta.",
      alternativas: [
        "Na primeira fase, a natalidade é alta e a mortalidade é baixa, por isso o crescimento da população é explosivo.",
        "A explosão demográfica ocorre quando a natalidade cai antes da mortalidade, o que deixa o crescimento negativo.",
        "No Brasil, a mortalidade caiu antes da natalidade, e o maior ritmo de crescimento veio em meados do século XX.",
        "No Brasil, a natalidade começou a cair só nos anos 2000, depois da criação de programas oficiais de controle.",
        "Na última fase, a natalidade e a mortalidade estão altas, e a população cresce devagar pela forte imigração.",
      ],
      correta: 2,
      explicacao:
        "Com vacinas, antibióticos e saneamento, a mortalidade brasileira caiu a partir dos anos 1940, enquanto a natalidade seguiu alta. A distância entre as duas fez a população crescer muito, com o pico nos anos 1950. Só a partir da segunda metade dos anos 1960 a fecundidade passou a cair.",
      explicacaoErradas:
        "Na primeira fase, as duas taxas são altas, e o crescimento é baixo. A explosão vem quando a mortalidade cai antes da natalidade, e não o contrário. A queda da fecundidade no Brasil começou nos anos 1960, sem uma política oficial de controle. Na última fase, as duas taxas são baixas.",
      pegadinha: "Inverter a ordem: na transição, cai primeiro a mortalidade, e só depois a natalidade.",
      conhecimento: "Alguns autores falam de uma quinta fase, com mais mortes que nascimentos, como no Japão.",
    },
    {
      topico: "Teorias demográficas",
      subassunto: "Malthus",
      dificuldade: 4,
      raciocinio: "Malthus 1798: população em PG, alimentos em PA → fome. Remédio: sujeição moral (casar tarde, abstinência), contra contraceptivos. Falhou por não prever técnica agrícola e queda da natalidade.",
      enunciado: "Em 1798, Thomas Malthus publicou um ensaio sobre o princípio da população. Sobre as ideias dele e as críticas que recebeu, assinale a alternativa correta.",
      alternativas: [
        "Malthus defendia o uso de métodos contraceptivos pelo Estado para frear a natalidade dos mais pobres do país.",
        "Para Malthus, os alimentos cresceriam em progressão geométrica, e a população, só em progressão aritmética.",
        "Malthus afirmava que a pobreza é a causa do crescimento da população, e não a sua consequência direta.",
        "A previsão de Malthus se confirmou no século XX, quando a produção de alimentos passou a cair no mundo todo.",
        "Ele previu fome pela população crescer mais que os alimentos, mas não contou com o avanço técnico no campo.",
      ],
      correta: 4,
      explicacao:
        "Malthus dizia que a população cresceria em progressão geométrica (1, 2, 4, 8...) e os alimentos, em progressão aritmética (1, 2, 3, 4...), o que levaria à fome. A previsão falhou porque ele não contou com o avanço técnico na agricultura nem com a queda da natalidade nas cidades.",
      explicacaoErradas:
        "Malthus era contra os contraceptivos e pregava a sujeição moral: casar tarde e evitar filhos. As progressões estão trocadas: a geométrica era a da população. Ver a pobreza como causa do crescimento é ideia da teoria reformista. A produção de alimentos cresceu muito no século XX.",
      pegadinha: "Trocar as progressões: em Malthus, a população cresce em PG, e os alimentos, em PA.",
      conhecimento: "Malthus via a fome, as guerras e as epidemias como freios naturais ao crescimento da população.",
    },
    {
      topico: "Teorias demográficas",
      subassunto: "Neomalthusiana e reformista",
      dificuldade: 5,
      raciocinio: "Neomalthusiana (pós-1945): população grande → pobreza; remédio: controle da natalidade. Reformista: pobreza → natalidade alta; remédio: reformas sociais. Malthus é anterior a ambas.",
      enunciado: "Depois da Segunda Guerra Mundial, o debate sobre população ganhou novas teorias. Sobre as visões neomalthusiana e reformista, assinale a alternativa correta.",
      alternativas: [
        "A neomalthusiana culpa a população grande pela pobreza; a reformista vê na pobreza a causa desse crescimento.",
        "A reformista defende o controle da natalidade pelo governo como a medida principal para combater a pobreza.",
        "A neomalthusiana diz que, com melhor renda e escola, a natalidade cai sozinha, sem nenhum controle oficial.",
        "As duas teorias concordam que a população dos países pobres deve crescer mais para gerar o seu desenvolvimento.",
        "A neomalthusiana surgiu antes do ensaio de Malthus e serviu de base para as ideias que ele publicou depois.",
      ],
      correta: 0,
      explicacao:
        "Para a neomalthusiana, a população numerosa dos países pobres impede o desenvolvimento, e por isso defende o controle da natalidade. A reformista inverte a relação: a pobreza é que mantém a natalidade alta, e reformas sociais (renda, educação e saúde) a fazem cair.",
      explicacaoErradas:
        "Quem defende o controle da natalidade é a neomalthusiana, e não a reformista. A ideia de que a natalidade cai sozinha com renda e escola é reformista. Nenhuma das duas pede que a população dos países pobres cresça mais. A neomalthusiana é do século XX, bem depois de Malthus (1798).",
      pegadinha: "Trocar as duas: controle da natalidade é neomalthusiano; reforma social é reformista.",
      conhecimento: "A teoria reformista se apoia no que aconteceu nos países ricos, onde a natalidade caiu com a melhora de vida.",
    },
    {
      topico: "Migrações",
      subassunto: "Tipos de migração",
      dificuldade: 4,
      raciocinio: "I: ida e volta diária casa-trabalho = pendular. II: ida e volta por safra = transumância (sazonal). III: sem moradia fixa = nomadismo.",
      enunciado: "Considere: I) quem mora em um município e trabalha todo dia na capital vizinha; II) quem sai do sertão para a colheita da cana e volta ao fim da safra; III) um grupo que vive em deslocamento contínuo, sem moradia fixa. Assinale a alternativa correta.",
      alternativas: [
        "I é êxodo rural, II é migração pendular e III é transumância, pois todos envolvem saída do lugar de origem.",
        "I é transumância, II é nomadismo e III é migração pendular, pois os três dependem do calendário agrícola.",
        "I é migração pendular, II é êxodo urbano e III é transumância, pois o grupo III muda conforme as estações.",
        "I é migração pendular, II é transumância (migração sazonal) e III é nomadismo, por não ter moradia fixa.",
        "I e II são êxodo rural, e III é migração pendular, pois o grupo volta sempre ao mesmo ponto de partida.",
      ],
      correta: 3,
      explicacao:
        "A ida e volta diária entre a casa e o trabalho em outro município é a migração pendular. Sair para a colheita e voltar no fim da safra é transumância, uma migração sazonal. Viver em deslocamento contínuo, sem moradia fixa, é nomadismo.",
      explicacaoErradas:
        "Ir e voltar todo dia não é êxodo rural, que é a mudança do campo para a cidade. O trabalhador da safra tem casa fixa, então não é nômade. Êxodo urbano é sair da cidade para o campo, o que não descreve a ida para a colheita. O grupo III não volta todo dia a um ponto fixo, logo não faz migração pendular.",
      pegadinha: "Confundir transumância (vai e volta conforme a safra ou a estação) com nomadismo (sem moradia fixa).",
      conhecimento: "A migração pendular é muito forte nas regiões metropolitanas, entre as cidades-dormitório e a capital.",
    },
    {
      topico: "Migrações",
      subassunto: "Migrações internas no Brasil",
      dificuldade: 5,
      raciocinio: "Nordeste → Sudeste: século XX (forte nos anos 1950–1970). Fronteira agrícola (anos 1970): sulistas para o Centro-Oeste e o Norte. Brasília: candangos do Nordeste, de MG e GO. Últimas décadas: migração de retorno ao Nordeste.",
      enunciado: "As migrações internas mudaram de direção ao longo das décadas no Brasil. Sobre esses fluxos, assinale a alternativa correta.",
      alternativas: [
        "Nos anos 1970, a fronteira agrícola atraiu sobretudo nordestinos para o Sul, onde a soja se espalhava pelo campo.",
        "Nas últimas décadas, cresceu a migração de retorno, com nordestinos saindo do Sudeste de volta à região natal.",
        "O fluxo do Nordeste para o Sudeste começou só após 1990, quando a indústria paulista passou a contratar mais.",
        "A construção de Brasília atraiu poucos migrantes, pois a obra usou quase só trabalhadores vindos do exterior.",
        "Na expansão para o Centro-Oeste e o Norte, os gaúchos e os paranaenses ficaram de fora desse movimento rural.",
      ],
      correta: 1,
      explicacao:
        "Com a desconcentração da indústria e o crescimento de cidades médias no Nordeste, muitos nordestinos que tinham ido para o Sudeste voltaram. Esse fluxo de volta, chamado migração de retorno, ganhou força nas últimas décadas e apareceu nos censos.",
      explicacaoErradas:
        "A fronteira agrícola dos anos 1970 levou sobretudo sulistas para o Centro-Oeste e o Norte, e não nordestinos para o Sul. O fluxo do Nordeste para o Sudeste é antigo e foi muito forte entre 1950 e 1970. Brasília atraiu muitos migrantes do próprio país, os candangos. Gaúchos e paranaenses foram dos que mais migraram para a fronteira.",
      pegadinha: "Achar que o fluxo para o Sudeste é recente: ele foi muito forte em meados do século XX e hoje perdeu força.",
      conhecimento: "Rondônia e Mato Grosso receberam muitos migrantes do Sul nos projetos de colonização dos anos 1970 e 1980.",
    },
    {
      topico: "Migrações",
      subassunto: "Migrações externas no Brasil",
      dificuldade: 4,
      raciocinio: "Japoneses desde 1908 (SP). Década de 1980 (crise): emigração para EUA, Japão (dekasseguis) e Europa. Venezuelanos: Roraima (Pacaraima). Lei 13.445/2017 revogou o Estatuto do Estrangeiro (Lei 6.815/1980).",
      enunciado: "O Brasil foi por muito tempo um país de imigração e passou também a enviar migrantes para fora. Sobre esses fluxos, assinale a alternativa correta.",
      alternativas: [
        "A imigração japonesa começou nos anos 1950, depois da Segunda Guerra, com destino quase só à Região Norte.",
        "Nos anos 1980, a emigração caiu muito, pois a economia crescia rápido e havia emprego de sobra no país.",
        "Desde a crise dos anos 1980, cresceu a emigração para os EUA e o Japão, para onde foram os dekasseguis.",
        "Os venezuelanos que chegam pelo Norte entram sobretudo pelo Acre, estado na fronteira com a Venezuela.",
        "A Lei de Migração de 2017 manteve o Estatuto do Estrangeiro de 1980 como a regra principal sobre o tema.",
      ],
      correta: 2,
      explicacao:
        "Com a crise econômica dos anos 1980 (a 'década perdida'), muitos brasileiros foram tentar a vida nos EUA, na Europa e no Japão. Os que foram ao Japão, quase todos descendentes de japoneses, ficaram conhecidos como dekasseguis.",
      explicacaoErradas:
        "A imigração japonesa começou em 1908 e foi sobretudo para São Paulo. Nos anos 1980, a economia ia mal, e a emigração cresceu. Os venezuelanos entram sobretudo por Roraima; o Acre não faz fronteira com a Venezuela. A Lei de Migração (Lei 13.445/2017) revogou o Estatuto do Estrangeiro.",
      pegadinha: "Colocar a chegada dos venezuelanos pelo Acre: a principal porta de entrada é Roraima.",
      conhecimento: "Desde 2018, a Operação Acolhida recebe e leva para outros estados os venezuelanos que entram por Roraima.",
    },
  ],
};
