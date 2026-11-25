import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a01",
  resumo: {
    ideia:
      "A demografia estuda o tamanho, a distribuição e as mudanças de uma população. Esta aula traz as medidas básicas (densidade, natalidade, mortalidade, crescimento e fecundidade) e o retrato do Brasil no Censo 2022: menos filhos e uma população mais velha.",
    itens: [
      {
        termo: "Demografia e censo",
        faz: "Demografia é o estudo das populações: quantas pessoas são, onde vivem, como se compõem e como mudam. No Brasil, a principal fonte é o Censo Demográfico do IBGE, feito a cada dez anos.",
        pista: "O censo previsto para 2020 foi adiado pela pandemia e pela falta de verba e só foi feito em 2022.",
      },
      {
        termo: "População absoluta e relativa",
        faz: "Absoluta é o total de habitantes. Relativa é a densidade demográfica: habitantes divididos pela área, em hab/km².",
        pista: "Exemplo: 120 mil habitantes em 400 km² dão 300 hab/km².",
      },
      {
        termo: "Populoso × povoado",
        faz: "Populoso é o lugar com população absoluta grande. Povoado é o lugar com densidade alta. O Brasil é populoso (cerca de 203 milhões no Censo 2022), mas pouco povoado (cerca de 24 hab/km²). Mônaco e Cingapura são muito povoados, mas pouco populosos.",
      },
      {
        termo: "O que a densidade não mostra",
        faz: "A média esconde diferenças: estados do Sudeste são densos, e os do Norte, quase vazios. Sozinha, a densidade também não diz se um lugar é urbano ou rico: um município grande e pouco denso pode ter agropecuária muito forte.",
      },
      {
        termo: "Taxa de natalidade",
        faz: "Nascidos vivos em um ano para cada mil habitantes (‰). Usa a população inteira na conta.",
      },
      {
        termo: "Taxa de mortalidade e mortalidade infantil",
        faz: "Mortalidade geral: óbitos em um ano para cada mil habitantes. Mortalidade infantil: óbitos de menores de 1 ano para cada mil nascidos vivos. Ela mostra muito bem a qualidade da saúde, do saneamento e da nutrição.",
      },
      {
        termo: "Crescimento vegetativo",
        faz: "Também chamado de natural: natalidade menos mortalidade. Com natalidade de 14‰ e mortalidade de 6‰, o vegetativo é de 8‰ (0,8% ao ano). Pode ser negativo, como no Japão e na Itália.",
      },
      {
        termo: "Crescimento demográfico (total)",
        faz: "Crescimento vegetativo mais o saldo migratório (quem entra menos quem sai). Um país com vegetativo negativo pode manter ou aumentar a população recebendo imigrantes.",
      },
      {
        termo: "Taxa de fecundidade total",
        faz: "Média de filhos por mulher ao fim da idade reprodutiva (15 a 49 anos). Cerca de 2,1 é o nível de reposição, que mantém a população estável. No Brasil: 6,28 em 1960, 1,90 em 2010 e 1,55 no Censo 2022, a menor já medida.",
        pista: "No uso do IBGE, fecundidade são os filhos que nascem de fato; fertilidade é a capacidade biológica de ter filhos.",
      },
      {
        termo: "Por que nascem menos crianças",
        faz: "Urbanização (na cidade criar filhos custa mais), mais estudo e mais trabalho da mulher fora de casa, acesso a métodos contraceptivos e queda da mortalidade infantil (a família não precisa ter muitos filhos para que alguns sobrevivam).",
      },
      {
        termo: "Envelhecimento no Censo 2022",
        faz: "A idade mediana subiu de 29 para 35 anos entre 2010 e 2022, e as pessoas de 65 anos ou mais passaram de 7,4% para 10,9% da população. Mais idosos para cada pessoa em idade de trabalhar pressionam a previdência e a saúde.",
      },
      {
        termo: "Cor ou raça no Censo 2022",
        faz: "Os pardos (45,3%) passaram a ser o maior grupo, à frente dos brancos (43,5%); os pretos somaram 10,2%. A população continuou crescendo desde 2010, mas cada vez mais devagar.",
      },
    ],
  },
  questoes: [
    {
      topico: "Conceitos demográficos",
      subassunto: "Populoso e povoado",
      dificuldade: 4,
      raciocinio: "Populoso = população absoluta grande. Povoado = densidade (hab/km²) alta. Brasil: ~203 milhões (populoso) e ~24 hab/km² (pouco povoado). Mônaco e Cingapura: muito povoados, pouco populosos.",
      enunciado: "Na demografia, os termos 'populoso' e 'povoado' não são sinônimos. Sobre esses conceitos e o caso do Brasil, assinale a alternativa correta.",
      alternativas: [
        "O Brasil é muito povoado, pois tem mais de 200 milhões de habitantes espalhados pelo seu território.",
        "Um país povoado é aquele com população absoluta grande, ainda que a sua densidade demográfica seja baixa.",
        "O Brasil é populoso, por ter grande população absoluta, mas é pouco povoado, por ter densidade baixa.",
        "Mônaco e Cingapura são populosos e pouco povoados, pois têm território pequeno e poucos habitantes.",
        "Populoso e povoado medem a mesma coisa: o total de pessoas dividido pelo número de cidades do país.",
      ],
      correta: 2,
      explicacao:
        "Populoso se refere à população absoluta (o total de habitantes), e povoado, à densidade demográfica (habitantes por km²). O Brasil tem cerca de 203 milhões de habitantes, o que o torna populoso, mas a densidade fica perto de 24 hab/km², por causa do território enorme.",
      explicacaoErradas:
        "Ter muita gente não basta para ser povoado: é preciso densidade alta. Um país povoado é o de densidade alta, e não o de população absoluta grande. Mônaco e Cingapura são o contrário: muito povoados (densos) e pouco populosos. A densidade divide os habitantes pela área, e não pelo número de cidades.",
      pegadinha: "Trocar os conceitos: povoado tem a ver com densidade, e não com o total de habitantes.",
      conhecimento: "Bangladesh é exemplo de país ao mesmo tempo populoso e muito povoado.",
    },
    {
      topico: "Conceitos demográficos",
      subassunto: "Densidade demográfica",
      dificuldade: 5,
      raciocinio: "Densidade = habitantes ÷ área. A: 120.000 ÷ 400 = 300 hab/km². B: 60.000 ÷ 3.000 = 20 hab/km². 300 ÷ 20 = 15 vezes. População de A = 2 × B. Densidade sozinha não mede riqueza nem urbanização.",
      enunciado: "O município A tem 120 mil habitantes e 400 km²; o município B tem 60 mil habitantes e 3.000 km². Sobre a densidade demográfica desses municípios, assinale a alternativa correta.",
      alternativas: [
        "A densidade de A é de 300 hab/km², 15 vezes a de B, embora A tenha só o dobro da população de B.",
        "B é mais povoado que A, porque a área maior dá mais espaço e eleva a densidade demográfica de B.",
        "A densidade de B é de 50 hab/km², e a de A, de 30 hab/km², pois a conta divide a área pela população.",
        "A densidade baixa prova que B é mais pobre e tem economia menos dinâmica do que o município A.",
        "A densidade alta de A mostra que todos os seus habitantes moram na zona urbana do município.",
      ],
      correta: 0,
      explicacao:
        "Densidade é a população dividida pela área. A: 120.000 ÷ 400 = 300 hab/km². B: 60.000 ÷ 3.000 = 20 hab/km². A densidade de A é 15 vezes a de B (300 ÷ 20), embora a população de A seja só o dobro, porque a área de B é muito maior.",
      explicacaoErradas:
        "Área maior, com a mesma gente, baixa a densidade, e não a eleva. A conta é habitantes ÷ área, e não o contrário; os valores certos são 300 e 20 hab/km². A densidade sozinha não mede riqueza: um município extenso e pouco denso pode ter agropecuária forte. Também não diz quantos moram na zona urbana.",
      pegadinha: "Achar que área maior aumenta a densidade: com a mesma população, ela diminui.",
      conhecimento: "A densidade demográfica do Brasil no Censo 2022 ficou perto de 24 hab/km².",
    },
    {
      topico: "Conceitos demográficos",
      subassunto: "Crescimento vegetativo e total",
      dificuldade: 5,
      raciocinio: "Vegetativo = natalidade − mortalidade = 14 − 6 = 8‰ (0,8%). Total = vegetativo + saldo migratório = 8 + (−3) = 5‰. Emigração não entra no vegetativo. A população cresceu (5‰ > 0).",
      enunciado: "Em um ano, um país teve taxa de natalidade de 14‰, taxa de mortalidade de 6‰ e saldo migratório negativo equivalente a 3‰. Sobre o crescimento dessa população no ano, assinale a alternativa correta.",
      alternativas: [
        "O crescimento vegetativo foi de 20‰, pois ele soma a natalidade e a mortalidade registradas no ano.",
        "O crescimento total foi de 11‰, pois o saldo migratório negativo se soma ao crescimento vegetativo.",
        "A população diminuiu no ano, porque a saída de emigrantes superou o número de nascimentos no país.",
        "O crescimento vegetativo foi de 5‰, já com a saída de emigrantes, e o crescimento total, de 8‰.",
        "O crescimento vegetativo foi de 8‰, ou 0,8% ao ano, e o total, já descontada a emigração, de 5‰.",
      ],
      correta: 4,
      explicacao:
        "O crescimento vegetativo é a natalidade menos a mortalidade: 14‰ − 6‰ = 8‰, ou 0,8% ao ano. O crescimento total soma o saldo migratório: 8‰ − 3‰ = 5‰. A população cresceu, mas menos do que cresceria sem a emigração.",
      explicacaoErradas:
        "O vegetativo subtrai a mortalidade, e não a soma. Saldo negativo diminui o crescimento: 8 − 3 = 5, e não 11. A população não caiu: o crescimento total foi positivo. O vegetativo considera só nascimentos e óbitos; a migração entra apenas no crescimento total, que aqui é 5‰.",
      pegadinha: "Pôr a migração dentro do crescimento vegetativo: ele só usa nascimentos e óbitos.",
      conhecimento: "‰ quer dizer 'por mil': 8‰ são 8 pessoas a mais para cada mil habitantes, ou 0,8%.",
    },
    {
      topico: "Conceitos demográficos",
      subassunto: "Natalidade, fecundidade e fertilidade",
      dificuldade: 4,
      raciocinio: "Natalidade: nascidos vivos ÷ população total × 1.000, em um ano. Fecundidade total: média de filhos por mulher ao fim da idade reprodutiva (15–49). Fertilidade (uso do IBGE): capacidade biológica de ter filhos. São indicadores diferentes.",
      enunciado: "Taxa de natalidade, taxa de fecundidade e fertilidade costumam ser confundidas. Considerando o uso desses termos pelo IBGE, assinale a alternativa correta.",
      alternativas: [
        "A taxa de natalidade mede a média de filhos por mulher, e a fecundidade, os nascimentos a cada mil pessoas.",
        "A fecundidade total é a média de filhos por mulher; a natalidade divide nascimentos pela população toda.",
        "A fertilidade mede quantos filhos nasceram de fato, e a fecundidade, só a capacidade de ter filhos.",
        "A natalidade e a fecundidade são o mesmo indicador, calculado sobre as mulheres de 15 a 49 anos.",
        "A taxa de natalidade considera só os nascidos vivos de mulheres casadas, a cada mil habitantes.",
      ],
      correta: 1,
      explicacao:
        "A taxa de fecundidade total é o número médio de filhos que uma mulher tem ao longo da idade reprodutiva (15 a 49 anos). A taxa de natalidade divide os nascidos vivos do ano pela população inteira, homens e mulheres de todas as idades, e expressa o resultado por mil.",
      explicacaoErradas:
        "A primeira alternativa inverte os dois indicadores. No uso do IBGE, fecundidade são os filhos que nascem de fato, e fertilidade, a capacidade biológica de tê-los. Natalidade e fecundidade são indicadores diferentes: só a fecundidade olha para as mulheres de 15 a 49 anos. A natalidade conta todos os nascidos vivos, sem olhar o estado civil da mãe.",
      pegadinha: "Trocar fecundidade (filhos que nascem) por fertilidade (capacidade de ter filhos).",
      conhecimento: "Uma fecundidade de cerca de 2,1 filhos por mulher é o nível de reposição, que mantém a população estável no longo prazo.",
    },
    {
      topico: "População brasileira",
      subassunto: "Fecundidade no Censo 2022",
      dificuldade: 5,
      raciocinio: "IBGE, Censo 2022: TFT 1,55 (menor da história); 1,90 em 2010; 6,28 em 1960. Reposição ≈ 2,1. A população ainda cresceu entre 2010 e 2022 (190,7 → 203,1 milhões). A taxa varia por região (Norte mais alta, Sul mais baixa).",
      enunciado: "O Censo 2022 registrou a menor taxa de fecundidade já medida no Brasil. Sobre esse dado e o que ele significa, assinale a alternativa correta.",
      alternativas: [
        "A taxa caiu para cerca de 2,5 filhos por mulher, ainda acima do nível que mantém estável a população do país.",
        "A queda começou só depois de 2010, pois até ali as brasileiras tinham em média seis filhos cada uma.",
        "Com 1,55 filho por mulher, a população do país já encolheu entre 2010 e 2022, segundo o mesmo Censo.",
        "Com 1,55 filho por mulher, a taxa ficou abaixo da reposição, perto de 2,1, e acelera o envelhecimento.",
        "A taxa ficou igual em todas as regiões, já que a urbanização chegou ao mesmo nível em todo o país.",
      ],
      correta: 3,
      explicacao:
        "O Censo 2022 mediu 1,55 filho por mulher, abaixo do nível de reposição (cerca de 2,1). Com menos nascimentos, a base da pirâmide etária encolhe, e a parte dos idosos na população cresce mais rápido.",
      explicacaoErradas:
        "A taxa é de 1,55, e não de 2,5. A queda vem desde os anos 1960 (6,28 filhos em 1960, 1,90 em 2010). A população ainda cresceu entre 2010 e 2022, de cerca de 190,7 para 203,1 milhões, porque o efeito da fecundidade baixa demora a aparecer. A taxa varia entre as regiões: é mais alta no Norte e mais baixa no Sul.",
      pegadinha: "Achar que fecundidade abaixo da reposição faz a população cair na hora: o efeito demora décadas.",
      conhecimento: "Em 2022, a maior parte dos nascimentos passou a vir de mulheres de 25 a 29 anos, sinal de que a maternidade está sendo adiada.",
    },
    {
      topico: "População brasileira",
      subassunto: "Causas da queda da fecundidade",
      dificuldade: 4,
      raciocinio: "Queda da fecundidade no Brasil: urbanização (filho custa mais na cidade), mais escolaridade e trabalho da mulher fora de casa, contraceptivos, queda da mortalidade infantil. Não houve lei de limite de filhos; houve êxodo rural, e não volta ao campo.",
      enunciado: "Desde os anos 1960, o número médio de filhos por mulher caiu muito no Brasil. Sobre os fatores que explicam essa queda, assinale a alternativa correta.",
      alternativas: [
        "Uma lei federal dos anos 1970 limitou o número de filhos por casal, a exemplo da política chinesa.",
        "A população voltou em massa para o campo, onde criar filhos ficou mais caro e menos útil ao trabalho.",
        "A mortalidade infantil subiu, e as famílias deixaram de ter mais filhos por medo de perdê-los cedo.",
        "Pesaram a urbanização, o estudo e o trabalho da mulher fora de casa e o maior acesso a contraceptivos.",
        "Os métodos contraceptivos foram proibidos no país, e por isso as famílias passaram a adiar o casamento.",
      ],
      correta: 3,
      explicacao:
        "A fecundidade caiu porque a população foi para as cidades, onde criar filhos custa mais, as mulheres passaram a estudar mais e a trabalhar fora de casa, e os métodos contraceptivos ficaram mais acessíveis. A queda da mortalidade infantil também reduziu a necessidade de ter muitos filhos.",
      explicacaoErradas:
        "O Brasil nunca teve lei que limitasse o número de filhos; a política do filho único foi da China. O movimento foi o êxodo rural, do campo para a cidade, e não o contrário. A mortalidade infantil caiu, e não subiu. Os contraceptivos não foram proibidos: o acesso a eles cresceu.",
      pegadinha: "Pensar que a queda veio de uma lei: no Brasil, ela veio de mudanças sociais.",
      conhecimento: "A queda da fecundidade é uma das etapas da transição demográfica, assunto da próxima aula.",
    },
    {
      topico: "População brasileira",
      subassunto: "Envelhecimento no Censo 2022",
      dificuldade: 5,
      raciocinio: "Censo 2022: idade mediana 29 (2010) → 35 (2022); 65+ = 7,4% → 10,9% (22,2 milhões). Causas: queda da fecundidade e aumento da longevidade. Efeitos: menos contribuintes por aposentado, mais demanda de saúde. Base da pirâmide mais estreita.",
      enunciado: "Os resultados do Censo 2022 confirmaram o envelhecimento da população brasileira. Sobre esse processo, assinale a alternativa correta.",
      alternativas: [
        "A idade mediana caiu de 35 para 29 anos entre 2010 e 2022, porque nasceram mais crianças no período.",
        "As pessoas de 65 anos ou mais chegaram a 10,9% da população, e a idade mediana subiu para 35 anos.",
        "O envelhecimento alivia a previdência, pois há cada vez mais jovens contribuindo para cada aposentado.",
        "A base da pirâmide etária ficou mais larga, o que indica que a natalidade voltou a subir no país.",
        "O envelhecimento se deve só à queda da mortalidade, sem relação com o número de filhos por mulher.",
      ],
      correta: 1,
      explicacao:
        "Segundo o IBGE, as pessoas de 65 anos ou mais passaram de 7,4% da população em 2010 para 10,9% em 2022, a maior parte já registrada num censo. A idade mediana subiu de 29 para 35 anos: metade dos brasileiros tem mais de 35 anos.",
      explicacaoErradas:
        "A idade mediana subiu de 29 para 35 anos, e não caiu. Com mais idosos e menos jovens, há menos contribuintes para cada aposentado, o que pressiona a previdência. A base da pirâmide ficou mais estreita, porque nascem menos crianças. O envelhecimento vem das duas coisas: queda da fecundidade e aumento da expectativa de vida.",
      pegadinha: "Esquecer a fecundidade: menos nascimentos também envelhecem a população.",
      conhecimento: "Idade mediana é a idade que divide a população ao meio: metade é mais nova, e metade, mais velha.",
    },
    {
      topico: "Conceitos demográficos",
      subassunto: "Mortalidade infantil",
      dificuldade: 4,
      raciocinio: "Mortalidade infantil: óbitos de menores de 1 ano ÷ nascidos vivos × 1.000. Indicador sensível a saneamento, pré-natal, parto, vacinação e nutrição. Taxa alta = condições ruins. Continua sendo um indicador importante.",
      enunciado: "A taxa de mortalidade infantil é um dos indicadores mais usados para avaliar as condições de vida de uma população. Sobre ela, assinale a alternativa correta.",
      alternativas: [
        "Ela conta os óbitos de menores de 1 ano para cada mil nascidos vivos e reflete saneamento e saúde.",
        "Ela conta as mortes de crianças com até 12 anos para cada mil habitantes do país, num mesmo ano.",
        "Ela é igual à taxa de mortalidade geral, só que calculada nas áreas rurais, longe das cidades.",
        "Uma taxa alta indica boa assistência ao parto, porque mais crianças são registradas ao nascer.",
        "Ela deixou de ser usada no Brasil, porque a queda das últimas décadas a tornou um dado sem nenhum valor.",
      ],
      correta: 0,
      explicacao:
        "A mortalidade infantil é o número de óbitos de crianças com menos de 1 ano para cada mil nascidos vivos. Como essas mortes dependem muito de saneamento, pré-natal, parto, vacinação e alimentação, a taxa mostra bem as condições de vida de um lugar.",
      explicacaoErradas:
        "A conta usa menores de 1 ano e divide pelos nascidos vivos, e não pela população toda. Ela não é a mortalidade geral nem se limita à zona rural. Taxa alta é sinal de condições ruins, e não de boa assistência. O indicador continua essencial: a queda precisa ser acompanhada, e há grandes diferenças entre regiões.",
      pegadinha: "Dividir pela população inteira: a mortalidade infantil divide pelos nascidos vivos.",
      conhecimento: "A queda da mortalidade infantil ajuda a aumentar a expectativa de vida ao nascer.",
    },
    {
      topico: "Conceitos demográficos",
      subassunto: "Migração e crescimento",
      dificuldade: 5,
      raciocinio: "Vegetativo negativo (óbitos > nascimentos) é comum hoje em países ricos e velhos (Japão, Itália), sem guerra. População total = vegetativo + saldo migratório: imigração pode compensar. Imigrantes costumam ser adultos jovens: aumentam a população ativa e freiam o envelhecimento.",
      enunciado: "No Japão e em alguns países europeus, o número de mortes já supera o de nascimentos. Sobre o crescimento populacional nesses casos, assinale a alternativa correta.",
      alternativas: [
        "Com crescimento vegetativo negativo, a população total desses países cai sempre, sem nenhuma exceção.",
        "O crescimento vegetativo negativo só acontece em guerras ou epidemias, nunca em tempos de paz.",
        "Esses países têm natalidade alta e mortalidade ainda mais alta, típicas de países pobres e jovens.",
        "A imigração nesses países reduz a população economicamente ativa e acelera o seu envelhecimento.",
        "Um saldo migratório positivo pode compensar o crescimento vegetativo negativo e manter a população.",
      ],
      correta: 4,
      explicacao:
        "O crescimento total é o vegetativo mais o saldo migratório. Se entram mais imigrantes do que o número de mortes que excede os nascimentos, a população se mantém ou até cresce, mesmo com vegetativo negativo.",
      explicacaoErradas:
        "A população não cai sempre: a imigração pode compensar. O vegetativo negativo hoje aparece em tempos de paz, em países com poucos filhos e muitos idosos. Esses países têm natalidade baixa, e não alta. Os imigrantes costumam ser adultos jovens: aumentam a população ativa e freiam o envelhecimento.",
      pegadinha: "Confundir vegetativo com total: a migração pode mudar o resultado.",
      conhecimento: "Por isso vários países ricos adotam políticas para atrair trabalhadores estrangeiros.",
    },
    {
      topico: "População brasileira",
      subassunto: "Censo 2022",
      dificuldade: 4,
      raciocinio: "Censo 2022: 203,1 milhões (2010: 190,7); pardos 45,3% (maior grupo), brancos 43,5%, pretos 10,2%; densidade ~24 hab/km². Previsto para 2020, adiado pela pandemia e por falta de verba.",
      enunciado: "O Censo Demográfico, feito pelo IBGE, é a principal fonte de dados sobre a população brasileira. Sobre o Censo 2022, assinale a alternativa correta.",
      alternativas: [
        "Foi feito no ano previsto, 2020, mas só teve os resultados divulgados dois anos depois, em 2022.",
        "Mostrou que a população brasileira diminuiu desde 2010 e ficou abaixo de 190 milhões de pessoas.",
        "Contou cerca de 203 milhões de habitantes, e os pardos passaram a ser o maior grupo de cor ou raça.",
        "Apontou que os brancos voltaram a ser a maioria absoluta, com mais da metade da população brasileira.",
        "Concluiu que a densidade demográfica do Brasil passou de 100 hab/km², igual à de países europeus.",
      ],
      correta: 2,
      explicacao:
        "O Censo 2022 contou cerca de 203,1 milhões de pessoas. Os pardos (45,3%) passaram à frente dos brancos (43,5%) e se tornaram o maior grupo de cor ou raça; os pretos somaram 10,2%.",
      explicacaoErradas:
        "O censo previsto para 2020 foi adiado pela pandemia e pela falta de verba e só foi feito em 2022. A população cresceu desde 2010 (cerca de 190,7 milhões). Os brancos ficaram em segundo lugar, com menos da metade da população. A densidade ficou perto de 24 hab/km², bem abaixo da de países europeus.",
      pegadinha: "Achar que o censo foi feito em 2020: ele foi adiado e só foi a campo em 2022.",
      conhecimento: "O Censo 2022 também contou, pela primeira vez, a população quilombola.",
    },
  ],
};
