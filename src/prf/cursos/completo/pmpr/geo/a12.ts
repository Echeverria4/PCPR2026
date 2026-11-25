import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a12",
  resumo: {
    ideia:
      "As fronteiras do Brasil nasceram de tratados entre Portugal e Espanha e, depois da independência, de acordos e arbitragens. O Paraná tem duas disputas famosas: a Questão de Palmas, com a Argentina, e o Contestado, com Santa Catarina. O território também é dividido em regiões, pelo IBGE e por outras propostas.",
    itens: [
      {
        termo: "Bula Inter Coetera (1493)",
        faz: "Documento do papa que dividiu as terras novas com uma linha a 100 léguas a oeste dos Açores e de Cabo Verde. O que ficasse a oeste seria da Espanha. Portugal não aceitou.",
      },
      {
        termo: "Tratado de Tordesilhas (1494)",
        faz: "Portugal e Espanha levaram a linha para 370 léguas a oeste de Cabo Verde. As terras a leste seriam de Portugal. A linha passava mais ou menos de Belém (PA) a Laguna (SC).",
        pista: "Pela linha, só uma faixa do litoral seria portuguesa.",
      },
      {
        termo: "União Ibérica (1580–1640)",
        faz: "Portugal e Espanha tiveram o mesmo rei, e a linha de Tordesilhas perdeu força. Bandeirantes, criadores de gado e missionários avançaram para o oeste dela.",
      },
      {
        termo: "Tratado de Lisboa (1668)",
        faz: "A Espanha reconheceu a independência de Portugal, depois da guerra que começou em 1640. Em 1680, os portugueses fundaram a Colônia do Sacramento, no rio da Prata, que virou motivo de briga com os espanhóis.",
      },
      {
        termo: "Tratados de Utrecht (1713 e 1715)",
        faz: "No de 1713, a França reconheceu como portuguesas as terras entre o Amazonas e o Oiapoque, o atual Amapá. No de 1715, a Espanha devolveu a Colônia do Sacramento a Portugal.",
      },
      {
        termo: "Tratado de Madri (1750)",
        faz: "Trocou Tordesilhas pelo uti possidetis: a terra fica com quem a ocupa de fato. Portugal deu a Colônia do Sacramento e recebeu os Sete Povos das Missões. Desenhou quase o contorno atual do Brasil.",
        pista: "Os guaranis das missões resistiram na Guerra Guaranítica (1753–1756).",
      },
      {
        termo: "El Pardo (1761) e Santo Ildefonso (1777)",
        faz: "El Pardo anulou o Tratado de Madri. Santo Ildefonso deixou a Colônia do Sacramento e os Sete Povos com a Espanha, que devolveu a Ilha de Santa Catarina a Portugal. Foi o acordo mais desfavorável aos portugueses no Sul.",
      },
      {
        termo: "Tratado de Badajoz (1801)",
        faz: "Encerrou a Guerra das Laranjas, na Europa. Na América, os Sete Povos, tomados pelos luso-brasileiros em 1801, ficaram com Portugal, porque o tratado não mandou devolvê-los. O Sul ficou quase com o contorno atual.",
      },
      {
        termo: "Depois da independência",
        faz: "Em 1825, pelo Tratado do Rio de Janeiro, Portugal reconheceu a independência do Brasil. Em 1828, a Convenção Preliminar de Paz encerrou a Guerra da Cisplatina e criou o Uruguai como país independente.",
        pista: "Os dois acordos tiveram mediação da Inglaterra.",
      },
      {
        termo: "Fronteiras na República",
        faz: "As questões de Palmas (1895, com a Argentina) e do Amapá (1900, com a França) foram ganhas por arbitragem. O Acre veio da Bolívia pelo Tratado de Petrópolis (1903). Na do Pirara (1904), com a Guiana Inglesa, o Brasil perdeu a maior parte da área.",
      },
      {
        termo: "Questão de Palmas e o Paraná",
        faz: "A área disputada com a Argentina é hoje o oeste de Santa Catarina e o sudoeste do Paraná. O presidente dos EUA decidiu a favor do Brasil em 1895, e a cidade de Clevelândia, no Paraná, tem esse nome em homenagem a ele.",
      },
      {
        termo: "Contestado",
        faz: "Paraná e Santa Catarina disputavam uma área do planalto. A Guerra do Contestado (1912–1916) teve milhares de mortos. O acordo de 20 de outubro de 1916 dividiu a área: cerca de 28 mil km² para Santa Catarina e 20 mil km² para o Paraná.",
        pista: "Camponeses perderam terras para a ferrovia e para uma grande madeireira, e isso alimentou a revolta.",
      },
      {
        termo: "Regiões do IBGE",
        faz: "Em 1942 eram cinco regiões, com a Região Leste e São Paulo no Sul. Em 1969–1970 vieram as cinco de hoje: Norte, Nordeste, Sudeste, Sul e Centro-Oeste, que seguem os limites dos estados. Em 1988, o Tocantins foi criado e entrou no Norte.",
        pista: "Desde 2017, o IBGE também usa as regiões geográficas imediatas e intermediárias.",
      },
      {
        termo: "Outras regionalizações",
        faz: "A divisão em complexos regionais (1967) tem três partes, Amazônia, Nordeste e Centro-Sul, e as linhas cortam estados. Os 'quatro Brasis' (2001) usam a presença de técnica, ciência e informação: Região Concentrada (Sudeste e Sul), Nordeste, Centro-Oeste e Amazônia.",
      },
    ],
  },
  questoes: [
    {
      topico: "Formação territorial",
      subassunto: "Bula e Tordesilhas",
      dificuldade: 4,
      raciocinio: "Bula Inter Coetera (1493): linha a 100 léguas a oeste dos Açores e de Cabo Verde; Portugal não aceitou → Tordesilhas (1494): 370 léguas a oeste de Cabo Verde, só entre Portugal e Espanha; linha ~ Belém–Laguna; litoral do NE ficava com Portugal.",
      enunciado: "Antes da ocupação do Brasil, Portugal e Espanha já disputavam as terras do Novo Mundo. Sobre a bula Inter Coetera e o Tratado de Tordesilhas, assinale a alternativa correta.",
      alternativas: [
        "A bula de 1493 agradou a Portugal, que a aceitou na hora e nunca pediu para mudar a linha de divisão.",
        "A bula traçava a linha a 100 léguas de Cabo Verde; Portugal reclamou, e Tordesilhas a levou a 370 léguas.",
        "Tordesilhas dividiu as terras entre Portugal e França, deixando a Espanha sem nenhuma terra na América do Sul.",
        "A linha de Tordesilhas deixava todo o litoral do Nordeste com a Espanha e o Sul inteiro com Portugal.",
        "Tordesilhas foi assinado depois de 1600, quando o Brasil já tinha ocupado todo o Centro-Oeste e o Sul.",
      ],
      correta: 1,
      explicacao:
        "A bula Inter Coetera, de 1493, traçava uma linha a 100 léguas a oeste dos Açores e de Cabo Verde. Portugal não aceitou, e o Tratado de Tordesilhas, de 1494, levou a linha para 370 léguas a oeste de Cabo Verde. Ela passava mais ou menos de Belém (PA) a Laguna (SC).",
      explicacaoErradas:
        "Portugal reclamou da bula, e por isso veio Tordesilhas. O tratado foi entre Portugal e Espanha, sem a França. A linha deixava o litoral do Nordeste com Portugal. Tordesilhas é de 1494, bem antes da ocupação do interior.",
      pegadinha: "Trocar os números: a bula fala em 100 léguas, e Tordesilhas, em 370 léguas.",
      conhecimento: "Légua: medida antiga de distância, de cerca de 6 km.",
    },
    {
      topico: "Formação territorial",
      subassunto: "União Ibérica",
      dificuldade: 5,
      raciocinio: "União Ibérica (1580–1640): mesmo rei para Portugal e Espanha → linha de Tordesilhas perde sentido prático → bandeiras, gado e missões avançam para oeste → ocupação reconhecida depois em Madri (1750). Independência só em 1822.",
      enunciado: "Entre 1580 e 1640, Portugal e Espanha tiveram o mesmo rei. Sobre o efeito desse período no território do Brasil, assinale a alternativa correta.",
      alternativas: [
        "A linha de Tordesilhas ficou mais rígida, e os portugueses foram proibidos de ir além do litoral.",
        "A Espanha tomou todo o litoral do Brasil e expulsou os colonos portugueses de volta para a Europa.",
        "O Brasil virou um país independente nesse período, separado das duas Coroas da Península Ibérica.",
        "Com uma só Coroa, a linha de Tordesilhas perdeu força, e as bandeiras e o gado avançaram para o oeste.",
        "Os bandeirantes pararam de ir ao interior, pois a Espanha passou a pagar para eles ficarem em São Paulo.",
      ],
      correta: 3,
      explicacao:
        "Na União Ibérica (1580–1640), Portugal e Espanha tinham o mesmo rei, e a linha de Tordesilhas perdeu força. Bandeirantes, criadores de gado e missionários avançaram para o oeste dela. Essa ocupação foi reconhecida depois pelo Tratado de Madri (1750).",
      explicacaoErradas:
        "A linha perdeu força, e não ficou mais rígida. Os colonos portugueses continuaram no Brasil. A independência só veio em 1822. As bandeiras cresceram nesse período, e não pararam.",
      pegadinha: "Achar que a União Ibérica travou a expansão: ela abriu caminho para ir além de Tordesilhas.",
      conhecimento: "Bandeiras: expedições que saíam de São Paulo para o interior, atrás de indígenas e de ouro.",
    },
    {
      topico: "Formação territorial",
      subassunto: "Tratados de Utrecht",
      dificuldade: 4,
      raciocinio: "Utrecht I (1713): França reconhece terras entre Amazonas e Oiapoque (Amapá) como portuguesas. Utrecht II (1715): Espanha devolve a Colônia do Sacramento a Portugal. Uti possidetis = Madri (1750).",
      enunciado: "Os dois Tratados de Utrecht, do começo do século XVIII, resolveram duas disputas da colônia. Assinale a alternativa correta sobre eles.",
      alternativas: [
        "O de 1713, com a França, fixou o Oiapoque como limite norte; o de 1715 devolveu Sacramento a Portugal.",
        "O de 1713 deu o Amapá à França, que até hoje governa a região entre o rio Amazonas e o rio Oiapoque.",
        "Os dois foram assinados com a Inglaterra e trataram só da fronteira da Guiana, no norte de Roraima.",
        "O de 1715 entregou a Colônia do Sacramento à França, que a usou como base para atacar o Rio de Janeiro.",
        "Eles criaram a regra do uti possidetis, que só seria usada de novo no Tratado de Tordesilhas, depois.",
      ],
      correta: 0,
      explicacao:
        "Pelo primeiro Tratado de Utrecht (1713), a França reconheceu que as terras entre o Amazonas e o Oiapoque, o atual Amapá, eram de Portugal. Pelo segundo (1715), a Espanha devolveu a Colônia do Sacramento, no rio da Prata, a Portugal.",
      explicacaoErradas:
        "A França abriu mão do Amapá. Os acordos foram com a França e com a Espanha, e não com a Inglaterra. A Colônia do Sacramento voltou para Portugal. O uti possidetis foi a base do Tratado de Madri (1750), e Tordesilhas é bem anterior.",
      pegadinha: "Confundir os dois: o de 1713 é com a França (norte), e o de 1715, com a Espanha (sul).",
      conhecimento: "Colônia do Sacramento: povoado português fundado em 1680 na margem do rio da Prata, no atual Uruguai.",
    },
    {
      topico: "Formação territorial",
      subassunto: "Tratado de Madri",
      dificuldade: 5,
      raciocinio: "Madri (1750): uti possidetis; substitui Tordesilhas; Portugal cede Sacramento e recebe Sete Povos das Missões → Guerra Guaranítica (1753–1756); anulado por El Pardo (1761); tratava dos limites com a Espanha.",
      enunciado: "O Tratado de Madri (1750) é visto como o mais importante para o desenho do Brasil. Sobre ele, assinale a alternativa correta.",
      alternativas: [
        "Confirmou a linha de Tordesilhas e mandou os portugueses deixarem todas as terras a oeste dela.",
        "Deu a Colônia do Sacramento e os Sete Povos das Missões a Portugal, sem nenhuma troca com a Espanha.",
        "Foi aceito por todos sem conflito, e nunca chegou a ser anulado por nenhum outro tratado depois.",
        "Tratou apenas da fronteira com a França, no norte, e não mexeu nos limites com as terras espanholas.",
        "Usou o uti possidetis e trocou Sacramento pelos Sete Povos, o que provocou a Guerra Guaranítica.",
      ],
      correta: 4,
      explicacao:
        "O Tratado de Madri adotou o uti possidetis: a terra fica com quem a ocupa de fato. Portugal entregou a Colônia do Sacramento à Espanha e recebeu os Sete Povos das Missões. Os guaranis das missões resistiram na Guerra Guaranítica (1753–1756), e o tratado foi anulado em 1761.",
      explicacaoErradas:
        "Madri substituiu Tordesilhas e reconheceu a ocupação além da linha. Houve troca: Sacramento foi para a Espanha. O tratado foi anulado pelo de El Pardo (1761). Ele tratou sobretudo dos limites com a Espanha.",
      pegadinha: "Inverter a troca: em Madri, Portugal deu Sacramento e recebeu os Sete Povos.",
      conhecimento: "Uti possidetis: expressão latina que quer dizer 'como possuís'; a terra é de quem a ocupa.",
    },
    {
      topico: "Formação territorial",
      subassunto: "El Pardo e Santo Ildefonso",
      dificuldade: 4,
      raciocinio: "Ordem: Madri (1750) → El Pardo (1761, anula Madri) → Santo Ildefonso (1777, Sacramento e Sete Povos com a Espanha; Ilha de SC devolvida a Portugal) → Badajoz (1801, Sete Povos com Portugal).",
      enunciado: "Depois do Tratado de Madri, outros acordos mudaram de novo a fronteira do Sul. Assinale a alternativa que traz as datas e o efeito corretos.",
      alternativas: [
        "Badajoz (1761) anulou Madri, Santo Ildefonso (1801) deu os Sete Povos a Portugal e El Pardo veio por fim.",
        "Santo Ildefonso (1750) criou o uti possidetis, e El Pardo (1801) devolveu o Amapá à França.",
        "El Pardo (1761) anulou Madri; Santo Ildefonso (1777) deu Sacramento e os Sete Povos à Espanha.",
        "El Pardo (1777) deu os Sete Povos à Espanha, e Badajoz (1494) dividiu as terras com a bula do papa.",
        "Santo Ildefonso (1777) deu toda a bacia do Prata a Portugal, inclusive Buenos Aires e Montevidéu.",
      ],
      correta: 2,
      explicacao:
        "O Tratado de El Pardo (1761) anulou o de Madri. O de Santo Ildefonso (1777) deixou a Colônia do Sacramento e os Sete Povos das Missões com a Espanha, que devolveu a Ilha de Santa Catarina a Portugal. Em 1801, Badajoz manteve os Sete Povos com Portugal.",
      explicacaoErradas:
        "As datas estão trocadas: El Pardo é de 1761, Santo Ildefonso de 1777 e Badajoz de 1801. O uti possidetis veio com Madri, e El Pardo não tratou do Amapá. Badajoz não tem relação com a bula. Buenos Aires e Montevidéu ficaram com a Espanha.",
      pegadinha: "Achar que Santo Ildefonso favoreceu Portugal: ele foi o mais desfavorável aos portugueses no Sul.",
      conhecimento: "Sete Povos das Missões: sete aldeias guaranis, fundadas por jesuítas espanhóis, no oeste do atual Rio Grande do Sul.",
    },
    {
      topico: "Formação territorial",
      subassunto: "Tratado de Badajoz",
      dificuldade: 5,
      raciocinio: "Badajoz (1801): fim da Guerra das Laranjas (Europa; Portugal perde Olivença). Na América: Sete Povos tomados pelos luso-brasileiros em 1801 ficam com Portugal (sem cláusula de devolução); Sacramento segue espanhola; contorno do RS quase definido. Petrópolis = Acre; Cisplatina = 1828.",
      enunciado: "O Tratado de Badajoz (1801) fechou a série de acordos coloniais sobre o Sul. Sobre ele e o seu efeito no Brasil, assinale a alternativa correta.",
      alternativas: [
        "Veio após uma guerra na Europa; os Sete Povos, tomados em 1801, ficaram com Portugal, e Sacramento não.",
        "Devolveu a Colônia do Sacramento a Portugal em troca dos Sete Povos, que voltaram para os padres jesuítas.",
        "Tirou o Rio Grande do Sul de Portugal, e a região só voltou ao Brasil com o Tratado de Petrópolis.",
        "Foi um acordo entre Brasil e Argentina, já independentes, para encerrar a Guerra da Cisplatina.",
        "Mandou devolver os Sete Povos à Espanha e deu o Amapá à França como pagamento pela guerra europeia.",
      ],
      correta: 0,
      explicacao:
        "Badajoz encerrou a Guerra das Laranjas, na Europa, em 1801. Na América, os Sete Povos das Missões, tomados pelos luso-brasileiros nesse mesmo ano, ficaram com Portugal, porque o tratado não mandou devolvê-los. A Colônia do Sacramento seguiu com a Espanha, e o contorno do Rio Grande do Sul ficou quase definido.",
      explicacaoErradas:
        "Sacramento não voltou para Portugal, e os jesuítas já tinham sido expulsos. O Rio Grande do Sul não foi perdido, e Petrópolis trata do Acre. Em 1801, Brasil e Argentina ainda não eram independentes. Os Sete Povos ficaram com Portugal, e o Amapá não foi dado à França.",
      pegadinha: "Achar que Badajoz só valeu na Europa: na prática, ele deixou os Sete Povos com Portugal.",
      conhecimento: "Guerra das Laranjas (1801): guerra curta entre Espanha e Portugal, na Europa, em que Portugal perdeu Olivença.",
    },
    {
      topico: "Formação territorial",
      subassunto: "Depois da independência",
      dificuldade: 4,
      raciocinio: "1825 (Tratado do Rio de Janeiro, 29/8): Portugal reconhece a independência, mediação inglesa. 1828 (Convenção Preliminar de Paz, 27/8): fim da Guerra da Cisplatina, Uruguai independente, mediação inglesa.",
      enunciado: "Depois da independência, dois acordos assinados no Rio de Janeiro mexeram com o país e o seu mapa. Sobre eles, assinale a alternativa correta.",
      alternativas: [
        "Em 1825, a Argentina reconheceu a independência do Brasil, que ganhou a Cisplatina como pagamento.",
        "Em 1828, a Cisplatina virou parte da Argentina, e o Uruguai só surgiu como país no século XX.",
        "Em 1825, Portugal reconheceu a independência; em 1828, a paz da Cisplatina criou o Uruguai.",
        "Em 1828, o Uruguai ficou sob a proteção do Brasil, como uma província com governo próprio.",
        "Os dois acordos foram assinados sem nenhuma mediação, pois a Inglaterra não tinha interesse na região.",
      ],
      correta: 2,
      explicacao:
        "Em 29 de agosto de 1825, pelo Tratado do Rio de Janeiro, Portugal reconheceu a independência do Brasil, com mediação inglesa. Em 27 de agosto de 1828, a Convenção Preliminar de Paz encerrou a Guerra da Cisplatina e criou o Uruguai como país independente.",
      explicacaoErradas:
        "Quem reconheceu a independência em 1825 foi Portugal. Em 1828, o Uruguai nasceu como país, sem ficar com a Argentina nem como província do Brasil. A Inglaterra mediou os dois acordos, pois tinha interesse no comércio da região.",
      pegadinha: "Misturar as datas: 1825 é o reconhecimento por Portugal, e 1828 é a independência do Uruguai.",
      conhecimento: "Cisplatina: nome da Banda Oriental quando ela foi província do Brasil (1821–1828).",
    },
    {
      topico: "Formação territorial",
      subassunto: "Fronteiras na República",
      dificuldade: 5,
      raciocinio: "Palmas (1895, Argentina, arbitragem do presidente dos EUA): ganho. Amapá (1900, França, arbitragem suíça): ganho, Oiapoque. Acre (1903, Bolívia, Petrópolis: compra + troca + ferrovia). Pirara (1904, Guiana Inglesa, rei da Itália): Brasil perde a maior parte.",
      enunciado: "No começo da República, várias fronteiras foram resolvidas por arbitragem ou por acordo. Assinale a alternativa correta sobre esses casos.",
      alternativas: [
        "O Brasil perdeu a Questão de Palmas para a Argentina, e por isso o oeste do Paraná é argentino até hoje.",
        "Na Questão do Amapá, a França ganhou, e a fronteira foi levada do Oiapoque até o rio Amazonas.",
        "O Acre foi comprado do Peru, sem nenhuma troca de terras e sem nenhuma promessa de obra de ferrovia.",
        "O Brasil ganhou todas as arbitragens, inclusive a do Pirara, e ficou com toda a área que pedia.",
        "O Brasil ganhou Palmas (1895) e o Amapá (1900) por arbitragem, mas perdeu parte do Pirara (1904).",
      ],
      correta: 4,
      explicacao:
        "Na Questão de Palmas, o presidente dos EUA deu ganho ao Brasil em 1895. Na do Amapá, a arbitragem suíça confirmou o Oiapoque em 1900. Na do Pirara, com a Guiana Inglesa, o rei da Itália deu a maior parte da área aos ingleses em 1904. O Acre veio da Bolívia pelo Tratado de Petrópolis (1903).",
      explicacaoErradas:
        "O Brasil ganhou Palmas, e a área é brasileira. No Amapá, a França perdeu, e o limite ficou no Oiapoque. O Acre veio da Bolívia, com troca de terras e a promessa da ferrovia Madeira-Mamoré. No Pirara, o Brasil perdeu a maior parte da área.",
      pegadinha: "Achar que o Brasil ganhou todas: no Pirara, a maior parte ficou com a Guiana Inglesa.",
      conhecimento: "Arbitragem: dois países pedem que um terceiro decida a disputa e aceitam a decisão.",
    },
    {
      topico: "Formação territorial",
      subassunto: "Contestado",
      dificuldade: 4,
      raciocinio: "Contestado: PR × SC pela área do planalto; Guerra do Contestado 1912–1916 (camponeses expulsos por ferrovia e madeireira, milhares de mortos); acordo de 20/10/1916 (SC ~28 mil km², PR ~20 mil km²), lei federal 1917. Palmas 1895 = Argentina. Território do Iguaçu = 1943–1946.",
      enunciado: "A divisa entre o Paraná e Santa Catarina só foi fixada no século XX, depois de uma guerra. Sobre a Questão do Contestado, assinale a alternativa correta.",
      alternativas: [
        "A disputa era entre o Paraná e São Paulo, pela região do litoral, e terminou com a emancipação de 1853.",
        "A guerra durou de 1930 a 1945, no governo Vargas, e acabou com a criação do Território do Iguaçu.",
        "O acordo deu toda a área disputada ao Paraná, e Santa Catarina perdeu o seu acesso ao planalto.",
        "A área foi disputada pelos dois estados; a guerra foi de 1912 a 1916, e o acordo de 1916 a dividiu.",
        "Foi uma disputa só no papel, sem mortos, resolvida pelo presidente dos EUA em uma arbitragem de 1895.",
      ],
      correta: 3,
      explicacao:
        "O Paraná e Santa Catarina disputavam uma área do planalto. A Guerra do Contestado (1912–1916) juntou camponeses que perderam terras para a ferrovia e para uma grande madeireira. Em 20 de outubro de 1916, um acordo dividiu a área: cerca de 28 mil km² para Santa Catarina e 20 mil km² para o Paraná.",
      explicacaoErradas:
        "A disputa era com Santa Catarina, no planalto. A guerra foi de 1912 a 1916, antes de Vargas. O acordo dividiu a área, e Santa Catarina ficou com a maior parte. Houve milhares de mortos, e a arbitragem de 1895 foi a de Palmas, com a Argentina.",
      pegadinha: "Confundir o Contestado com Palmas: Palmas foi com a Argentina, e o Contestado, entre os dois estados.",
      conhecimento: "O acordo de limites foi assinado no Rio de Janeiro e confirmado por lei federal em 1917.",
    },
    {
      topico: "Regionalização",
      subassunto: "IBGE e outras propostas",
      dificuldade: 5,
      raciocinio: "IBGE 1942: 5 regiões com Leste, SP no Sul. IBGE 1969–1970: Norte, Nordeste, Sudeste, Sul, Centro-Oeste, pelos limites estaduais. 1988: Tocantins → Norte. Complexos regionais (1967): 3 (Amazônia, Nordeste, Centro-Sul), cortam estados. Quatro Brasis: Concentrada = Sudeste + Sul.",
      enunciado: "O Brasil pode ser dividido em regiões de mais de um jeito. Assinale a alternativa correta sobre as regionalizações do país.",
      alternativas: [
        "As cinco regiões de hoje existem desde 1942, sem mudança, e São Paulo sempre ficou na Região Sudeste.",
        "A divisão em complexos regionais corta estados, e as cinco regiões do IBGE seguem limites estaduais.",
        "A divisão em complexos regionais tem cinco partes, iguais às regiões do IBGE, só com nomes diferentes.",
        "Os 'quatro Brasis' juntam o Sudeste e o Nordeste em uma só região, chamada de Região Concentrada.",
        "Em 1988, o Tocantins foi criado e colocado no Centro-Oeste, junto com Goiás, de onde ele saiu.",
      ],
      correta: 1,
      explicacao:
        "As cinco regiões do IBGE, de 1969–1970, seguem os limites dos estados. A divisão em complexos regionais, de 1967, tem só três partes, Amazônia, Nordeste e Centro-Sul, e as linhas cortam estados como Minas Gerais e Maranhão. Os 'quatro Brasis' juntam o Sudeste e o Sul na Região Concentrada.",
      explicacaoErradas:
        "Em 1942 havia a Região Leste, e São Paulo ficava no Sul; o Sudeste surgiu na divisão de 1969–1970. Os complexos regionais são três. A Região Concentrada junta o Sudeste e o Sul. Em 1988, o Tocantins foi para a Região Norte.",
      pegadinha: "Achar que os complexos seguem os estados: o norte de Minas Gerais, por exemplo, fica no complexo do Nordeste.",
      conhecimento: "Desde 2017, o IBGE também divide o país em regiões geográficas imediatas e intermediárias.",
    },
  ],
};
