import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geopolitica-05",
  resumo: {
    ideia:
      "A aula mostra quantos somos, como crescemos e envelhecemos (fecundidade, transição demográfica, pirâmide etária, bônus demográfico), quem somos (sexo, cor ou raça, indígenas e quilombolas), onde vivemos (distribuição desigual pelas regiões) e como nos deslocamos: migrações externas de ontem e de hoje e migrações internas, do êxodo nordestino à migração de retorno, à sazonal e à pendular.",
    itens: [
      {
        parte: "1. Tamanho e crescimento",
        termo: "Quantos somos",
        faz: "Censo 2022: cerca de 203 milhões de habitantes, o 7º país mais populoso do mundo (o Paquistão e a Nigéria passaram o Brasil). As estimativas do IBGE para 2024 já falam em cerca de 212 milhões.",
        pista: "No mundo: 8 bilhões em 2022, e a Índia passou a China em 2023 como o país mais populoso.",
      },
      {
        termo: "Crescimento vegetativo",
        faz: "Nascimentos menos mortes (natalidade menos mortalidade). Foi o que mais explicou o aumento da população brasileira no século XX e no início do XXI, e não a imigração.",
      },
      {
        termo: "Saldo migratório",
        faz: "Entradas menos saídas de pessoas de uma área: imigração menos emigração. Positivo = chegam mais do que saem.",
      },
      {
        termo: "Crescimento cada vez menor",
        faz: "Entre 2010 e 2022 a população cresceu só cerca de 6,5% (de 190,7 para 203 milhões), uma taxa de cerca de 0,5% ao ano, a menor desde o 1º censo, de 1872.",
      },
      {
        parte: "2. Fecundidade e envelhecimento",
        termo: "Fecundidade abaixo da reposição",
        faz: "Para a população se manter estável a longo prazo, cada mulher precisa ter em média 2,1 filhos (taxa de reposição). No Censo 2022 o Brasil teve cerca de 1,55 filho por mulher: abaixo da reposição.",
      },
      {
        termo: "Por que a fecundidade caiu",
        faz: "Mais estudo para as mulheres; mulheres no mercado de trabalho e adiando a maternidade; custo de vida alto nas cidades; planejamento familiar e acesso a métodos contraceptivos. Quanto maior a escolaridade, menos filhos.",
        pista: "Menor no Sudeste e maior no Norte; mulheres indígenas têm, em média, mais filhos.",
      },
      {
        termo: "Vida mais longa",
        faz: "A esperança de vida ao nascer chegou a cerca de 76 anos (2023), graças a saneamento, alimentação, renda, saúde e vacinação. A mortalidade infantil despencou: de cerca de 147 por mil nascidos vivos em 1940 para cerca de 12,5 em 2023.",
      },
      {
        termo: "Envelhecimento",
        faz: "Menos nascimentos + vida mais longa = população mais velha. A pirâmide etária estreita na base (menos crianças) e alarga no topo (mais idosos). Norte e Nordeste são as regiões mais jovens; Sudeste e Sul, as mais envelhecidas.",
      },
      {
        termo: "Pirâmide etária",
        faz: "Gráfico da população por sexo (homens de um lado, mulheres do outro) e por idade. Base larga e topo estreito (triângulo) = muitos jovens, natalidade alta e vida curta, típico de país pobre. Base estreita e topo largo = natalidade baixa e vida longa.",
        pista: "Base estreitando indica menos nascimentos, e não política natalista. Topo alargando é menos mortalidade, e não mais.",
      },
      {
        parte: "3. Transição demográfica e bônus",
        termo: "Transição demográfica",
        faz: "Passagem de natalidade e mortalidade altas para as duas baixas, em 4 fases. 1ª: as duas muito altas (nenhum país hoje). 2ª: a mortalidade cai rápido e a natalidade segue alta, crescimento explosivo (África subsaariana). 3ª: a natalidade cai e a mortalidade fica baixa (industrialização tardia). 4ª: as duas baixas e equilibradas, crescimento muito lento.",
        pista: "O Brasil já passou da 3ª: está na 4ª fase.",
      },
      {
        termo: "Projeções do IBGE",
        faz: "A população deve chegar ao pico por volta de 2041, com cerca de 220 milhões, e depois diminuir, ficando perto de 199 milhões em 2070.",
      },
      {
        termo: "Razão de dependência",
        faz: "Dependentes (0 a 14 anos e 65 anos ou mais) para cada 100 pessoas em idade ativa (15 a 64 anos). Era alta até os anos 1980, por causa das crianças; caiu quando elas entraram na idade de trabalhar; vai subir de novo com os idosos (cerca de 59 dependentes por 100 em 2050).",
      },
      {
        termo: "Bônus demográfico",
        faz: "Fase em que a população em idade ativa é proporcionalmente maior que a dependente: uma janela para aumentar renda per capita, produtividade e investimento em educação. É temporária: o pico é na década de 2020.",
      },
      {
        termo: "Desafios do envelhecimento",
        faz: "Previdência (menos gente contribuindo e mais aposentados), saúde (doenças crônicas e cuidado de longa duração, mais caros) e educação (menos matrículas, chance de investir em qualidade). Também abre mercados: turismo, lazer, saúde privada, imóveis e consumo da terceira idade.",
      },
      {
        parte: "4. Sexo, cor ou raça, indígenas e quilombolas",
        termo: "Sexo",
        faz: "As mulheres são maioria (cerca de 51,5%). Nascem mais meninos, mas os homens morrem mais (violência, acidentes, menos cuidado com a saúde), então o país fica cada vez mais feminino.",
      },
      {
        termo: "Cor ou raça (Censo 2022)",
        faz: "Pela primeira vez os pardos passaram os brancos: pardos cerca de 45%, brancos cerca de 43,5%, pretos cerca de 10%, indígenas cerca de 0,8% e amarelos cerca de 0,4%. Cresceram pardos, pretos e indígenas, também por mudança na autodeclaração.",
      },
      {
        termo: "Cor ou raça por região",
        faz: "Sul: a mais branca (Rio Grande do Sul é o estado mais branco). Nordeste: maior proporção de pretos (Bahia é o estado com mais pretos) e quase 60% de pardos. Norte: mais pardos (Pará) e mais indígenas (Roraima em proporção).",
      },
      {
        termo: "Indígenas",
        faz: "Cerca de 1,7 milhão de pessoas (0,8% da população), com contagem melhorada em 2022. Concentração no Norte, sobretudo no Amazonas, mas há indígenas em todas as regiões.",
      },
      {
        termo: "Quilombolas",
        faz: "Cerca de 1,3 milhão (0,65%), contados pela primeira vez num censo em 2022. Concentração no Nordeste: Bahia e Maranhão somam metade.",
      },
      {
        parte: "5. Distribuição pelo território",
        termo: "Populoso × povoado",
        faz: "Populoso = muita gente no total (população absoluta). Povoado = muita gente por km² (densidade demográfica, ou população relativa). O Brasil é muito populoso, mas pouco povoado: a densidade média é de só cerca de 24 hab/km².",
        pista: "Não confundir os dois: o Brasil tem população absoluta grande e relativa baixa.",
      },
      {
        termo: "Distribuição desigual",
        faz: "A população se concentra perto do litoral, a leste (Sudeste, Sul e litoral do Nordeste). O interior (Norte e Centro-Oeste) tem grandes áreas de baixa densidade.",
      },
      {
        termo: "Regiões e estados",
        faz: "Sudeste é a mais populosa (cerca de 42%), depois Nordeste (cerca de 27%), Sul (cerca de 15%), Norte (cerca de 8,5%) e Centro-Oeste (cerca de 8%). São Paulo é o estado mais populoso (cerca de 1/5 do país); Roraima, o menos populoso.",
      },
      {
        termo: "Quem mais cresceu (2010–2022)",
        faz: "O Centro-Oeste teve a maior taxa de crescimento anual; Sudeste e Nordeste, as mais populosas, tiveram as menores. Roraima foi o estado de maior crescimento em percentual; São Paulo, em números absolutos.",
      },
      {
        parte: "6. Migrações: conceitos e externas",
        termo: "Migrante, emigrante e imigrante",
        faz: "Migrante: termo geral para quem se desloca do lugar onde nasceu. Emigrante: quem sai para viver em outro lugar. Imigrante: quem entra num lugar para ali viver. Externas: entre países. Internas: dentro do país.",
      },
      {
        termo: "Migração forçada",
        faz: "Depois dos colonizadores portugueses, a vinda forçada de africanos escravizados: cerca de 4,8 milhões entre os séculos XVI e XIX, para a cana, o gado, a mineração e o café.",
      },
      {
        termo: "Imigração europeia",
        faz: "Com o fim do tráfico (Lei Eusébio de Queirós, 1850) e a Abolição (1888), a elite estimulou a vinda de europeus: por mão de obra para o café e por uma ideologia racista de “branqueamento”. Entre 1884 e 1959 vieram quase 5 milhões, sobretudo italianos e portugueses, além de espanhóis, alemães, japoneses e sírio-libaneses, muitas vezes em condições precárias.",
      },
      {
        termo: "Queda da imigração no século XX",
        faz: "A crise de 1929, a crise do café e a Lei de Cotas de 1934 (governo Vargas) reduziram a entrada. Houve nova alta nos anos 1940–1950, com a industrialização, e queda a partir de 1960.",
      },
      {
        termo: "Imigração hoje",
        faz: "Volta a crescer com outro perfil: a Venezuela é a principal origem (de poucos milhares em 2010 para mais de 270 mil em 2022), seguida pelos portugueses, em queda. Crescem bolivianos, haitianos, paraguaios, argentinos e colombianos; diminuem os europeus.",
      },
      {
        termo: "Refugiados",
        faz: "Pessoas que fogem de guerra, perseguição política ou religiosa, desastres ambientais e graves violações de direitos humanos: por exemplo ucranianos, afegãos e palestinos.",
        pista: "Mesmo com a alta recente, os estrangeiros são só cerca de 0,5% da população: o Brasil não é grande receptor em proporção.",
      },
      {
        parte: "7. Migrações internas",
        termo: "Nordeste → Sudeste",
        faz: "O grande fluxo, do auge nos anos 1950 até os 1980: nordestinos fugindo da seca, da pobreza e da falta de trabalho rumo à indústria e à construção civil do Sudeste, sobretudo São Paulo. Os “paus de arara” simbolizam esse movimento.",
      },
      {
        termo: "Para o Centro-Oeste e a Amazônia",
        faz: "Migrantes foram para Brasília e o entorno e, a partir dos anos 1970, para a Amazônia, com a política de ocupação dos governos militares (Transamazônica, lotes de terra, “vazios demográficos”). Nos anos 1970–80, a soja e a agricultura mecanizada levaram gente do Sul e do Sudeste para o Cerrado e partes da Amazônia.",
      },
      {
        termo: "Migração de retorno",
        faz: "Desde os anos 1990 cai o fluxo Nordeste → Sudeste e cresce a volta ao Nordeste: melhora relativa da economia da região e frustração nos grandes centros (desemprego, custo de vida, violência). Mesmo assim, o Nordeste ainda tem saldo negativo.",
      },
      {
        termo: "O retrato do Censo 2022",
        faz: "Só Sul e Centro-Oeste têm saldo migratório positivo. Santa Catarina teve o maior ganho por migração. São Paulo teve saldo negativo pela primeira vez desde 1991, e o Rio de Janeiro, o maior saldo negativo do país.",
        pista: "Saldo negativo não quer dizer que o estado deixou de atrair gente: só que saíram mais do que entraram.",
      },
      {
        termo: "Urbano–urbano e intrametropolitano",
        faz: "Cresce a mudança entre cidades da mesma região metropolitana ou próximas, sem trocar de estado, em busca de moradia mais barata, menos violência e melhor infraestrutura.",
      },
      {
        termo: "Sazonal (transumância)",
        faz: "Migração temporária, em certa época do ano, com volta depois. Ex.: na seca, sertanejos vão trabalhar na colheita da cana na Zona da Mata e voltam para plantar na época das chuvas.",
      },
      {
        termo: "Pendular",
        faz: "Ida e volta diária entre a cidade onde se mora e a cidade onde se trabalha ou estuda, típica das regiões metropolitanas. Nos estudos estrangeiros aparece como commuting.",
      },
    ],
    cuidado:
      "Fecundidade abaixo de 2,1 não faz a população cair na hora: ela ainda cresce até cerca de 2041, por inércia. E o Brasil é populoso, mas pouco povoado.",
  },
  questoes: [
    {
      topico: "Dinâmica demográfica",
      subassunto: "Crescimento da população",
      dificuldade: 5,
      raciocinio: "Some o vegetativo e o saldo migratório.",
      enunciado:
        "Em um ano, um município registra 900 nascimentos, 400 mortes, 200 imigrantes e 300 emigrantes. O crescimento vegetativo e o crescimento total foram, nessa ordem,",
      alternativas: [
        "400 e 500",
        "500 e 400",
        "500 e 600",
        "600 e 500",
        "1.300 e 1.200",
      ],
      correta: 1,
      explicacao:
        "Vegetativo: 900 − 400 = 500. Saldo migratório: 200 − 300 = −100. Total: 500 − 100 = 400.",
      explicacaoErradas:
        "“400 e 500” inverte a ordem. “500 e 600” soma o saldo como se fosse positivo. “600 e 500” desconta os emigrantes no lugar das mortes. “1.300 e 1.200” soma nascimentos e mortes.",
      pegadinha: "Misturar migrantes no crescimento vegetativo.",
      conhecimento: "O crescimento total reúne o vegetativo e o saldo migratório.",
    },
    {
      topico: "Dinâmica demográfica",
      subassunto: "Transição demográfica",
      dificuldade: 5,
      raciocinio: "Olhe qual taxa cai primeiro.",
      enunciado:
        "Na transição demográfica, houve no Brasil uma fase de crescimento muito rápido da população. Isso aconteceu porque",
      alternativas: [
        "a natalidade subiu muito, enquanto a mortalidade seguiu alta",
        "a imigração europeia superou o total de nascimentos do país",
        "a natalidade e a mortalidade caíram ao mesmo tempo e no mesmo ritmo",
        "a mortalidade caiu antes, e a natalidade seguiu alta por um tempo",
        "a mortalidade subiu, mas as famílias passaram a ter mais filhos",
      ],
      correta: 3,
      explicacao:
        "Melhorias em saúde e saneamento reduziram as mortes primeiro. Com os nascimentos ainda altos, a população cresceu muito, até a natalidade cair também.",
      explicacaoErradas:
        "“natalidade subiu muito” inverte o motor do processo. “imigração europeia” não explica a fase. “ao mesmo tempo” não geraria a diferença. “mortalidade subiu” é o oposto do ocorrido.",
      pegadinha: "Achar que a explosão populacional veio de mais filhos por mulher.",
      conhecimento: "Hoje o crescimento é baixo, e o IBGE projeta queda da população após 2041.",
    },
    {
      topico: "Dinâmica demográfica",
      subassunto: "Bônus demográfico",
      dificuldade: 5,
      raciocinio: "Olhe a proporção entre quem trabalha e quem depende.",
      enunciado: "O bônus demográfico é uma oportunidade para a economia de um país porque",
      alternativas: [
        "a parcela em idade ativa é grande frente à de dependentes, mas passa",
        "a parcela de idosos supera a de jovens e garante mais consumo",
        "a natalidade volta a subir e renova, de vez, a força de trabalho",
        "a população deixa de envelhecer enquanto a fase durar no país",
        "a imigração cobre todas as vagas abertas pela queda dos nascimentos",
      ],
      correta: 0,
      explicacao:
        "No bônus, a faixa de 15 a 64 anos pesa mais, em proporção, que a soma de crianças e idosos. A fase é temporária, pois o envelhecimento continua.",
      explicacaoErradas:
        "“idosos supera a de jovens” descreve o fim do bônus. “natalidade volta a subir” e “deixa de envelhecer” contrariam a tendência. “imigração cobre todas as vagas” não define o conceito.",
      pegadinha: "Achar que o bônus é permanente.",
      conhecimento: "Sem emprego e educação, o país perde a vantagem da fase.",
    },
    {
      topico: "Estrutura da população",
      subassunto: "Censo 2022",
      dificuldade: 5,
      raciocinio: "Separe a região pelo grupo.",
      enunciado: "Sobre a composição da população no Censo de 2022, é correto afirmar que",
      alternativas: [
        "o Sul tem a maior parcela de pessoas pardas entre as regiões",
        "os indígenas se concentram sobretudo no Centro-Sul do país",
        "os quilombolas, contados pela primeira vez, ficam mais no Nordeste",
        "os quilombolas já eram contados desde o primeiro censo feito no país",
        "as pessoas que se declaram brancas aumentaram em proporção",
      ],
      correta: 2,
      explicacao:
        "Os quilombolas somaram cerca de 1,3 milhão, com Bahia e Maranhão reunindo metade. Foi a primeira vez que esse grupo apareceu no censo.",
      explicacaoErradas:
        "“maior parcela de pessoas pardas” cabe ao Norte. “sobretudo no Centro-Sul” erra, pois os indígenas se concentram no Norte. “desde o primeiro censo” contraria o caso. “aumentaram em proporção” inverte a queda.",
      pegadinha: "Trocar as regiões de cada grupo.",
      conhecimento: "O Sul é a região com maior parcela de pessoas brancas.",
    },
    {
      topico: "Distribuição",
      subassunto: "Populoso e povoado",
      dificuldade: 4,
      raciocinio: "Separe total de densidade.",
      enunciado:
        "O Brasil é o 7º país mais populoso do mundo, mas tem densidade demográfica baixa em boa parte do território. Isso significa que o país é",
      alternativas: [
        "pouco populoso e muito povoado, com gente espalhada por igual",
        "muito populoso e muito povoado, em todas as regiões do território",
        "pouco populoso e pouco povoado, pois a maioria mora no campo",
        "superpovoado, pois tem mais gente do que seus recursos permitem",
        "muito populoso e pouco povoado, com distribuição desigual",
      ],
      correta: 4,
      explicacao:
        "Populoso trata do total de pessoas. Povoado trata de pessoas por km². A população fica mais perto do litoral, e o interior tem vazios.",
      explicacaoErradas:
        "“pouco populoso” erra o total. “muito povoado, em todas as regiões” erra a densidade. “superpovoado” exige relação com recursos, o que não vem do dado.",
      pegadinha: "Usar populoso e povoado como sinônimos.",
      conhecimento: "São Paulo é o estado mais populoso.",
    },
    {
      topico: "Distribuição",
      subassunto: "Regiões",
      dificuldade: 4,
      raciocinio: "Separe a maior parcela da maior taxa.",
      enunciado: "Entre 2010 e 2022, comparando as regiões do Brasil, verifica-se que",
      alternativas: [
        "o Centro-Oeste teve a maior taxa, e o Sudeste segue mais populoso",
        "o Norte passou o Sudeste e virou a região com mais moradores",
        "o Nordeste teve a maior taxa anual de crescimento do período",
        "o Sul superou o Nordeste e virou a segunda região mais populosa do país",
        "o Sudeste ficou com menos de um quarto da população do país",
      ],
      correta: 0,
      explicacao:
        "O Centro-Oeste teve a maior taxa anual. O Sudeste, com 41,8%, continua sendo a região mais populosa, e Sudeste e Nordeste tiveram as menores taxas.",
      explicacaoErradas:
        "“Norte passou o Sudeste” contraria os números. “Nordeste” esteve entre as menores taxas. “Sul superou o Nordeste” erra, pois o Nordeste tem 26,9%, e o Sul, 14,7%. “menos de um quarto” contraria os 41,8%.",
      pegadinha: "Confundir a região que mais cresce com a que tem mais gente.",
      conhecimento: "O Norte tem 8,5% da população, e o Centro-Oeste, 8%.",
    },
    {
      topico: "Migrações",
      subassunto: "Tipos de migração",
      dificuldade: 4,
      raciocinio: "Todo dia ou por estação?",
      enunciado:
        "Na BR-101, uma equipe nota que trabalhadores moram em uma cidade da periferia e vão todos os dias de ônibus ao centro da metrópole. Esse deslocamento é a migração",
      alternativas: [
        "de retorno, com a volta à região de origem do trabalhador",
        "sazonal, ligada à colheita de cana em certas épocas do ano",
        "internacional, com a saída definitiva de pessoas do país",
        "pendular, entre o lugar de moradia e o lugar de trabalho",
        "forçada, causada por conflito ou por desastre natural",
      ],
      correta: 3,
      explicacao:
        "A migração pendular é o vai e vem diário entre moradia e trabalho, que depende de transporte coletivo.",
      explicacaoErradas:
        "“de retorno” exigiria voltar à origem. “sazonal” segue a época da safra. “internacional” exigiria sair do país. “forçada” exigiria conflito ou desastre.",
      pegadinha: "Trocar pendular, diária, por sazonal, por temporada.",
      conhecimento: "Na migração sazonal, trabalhadores do Sertão e do Agreste vão à Zona da Mata na colheita.",
    },
    {
      topico: "Migrações",
      subassunto: "Fluxos internos",
      dificuldade: 5,
      raciocinio: "O sentido do fluxo mudou nas décadas recentes.",
      enunciado: "Desde os anos 1990, os fluxos migratórios internos no Brasil têm como marca",
      alternativas: [
        "a alta da migração nordestina rumo às capitais do Sudeste",
        "a queda da saída do Nordeste e o aumento da migração de retorno",
        "o fim das migrações, porque a renda das regiões ficou igual",
        "a saída da maioria dos moradores do Sul em direção à Região Norte",
        "o fluxo crescente de trabalhadores europeus para o interior",
      ],
      correta: 1,
      explicacao:
        "O fluxo do Nordeste para o Sudeste perdeu força, e cresceu a volta de parte dos migrantes à região de origem.",
      explicacaoErradas:
        "“alta da migração nordestina” inverte a tendência. “fim das migrações” exagera. “saída da maioria” inventa um fluxo. “trabalhadores europeus” descreve o século XIX.",
      pegadinha: "Levar para hoje o fluxo dominante dos anos 1950 a 1970.",
      conhecimento: "O fim do tráfico, em 1850, e a abolição, em 1888, abriram espaço à imigração europeia.",
    },
  ],
};
