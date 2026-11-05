import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geopolitica-05",
  resumo: {
    ideia:
      "O Brasil cresce cada vez mais devagar e está envelhecendo. A aula explica como se mede a população, como ela se distribui e por que as pessoas migram.",
    itens: [
      {
        termo: "Crescimento vegetativo",
        faz: "Nascimentos menos mortes.",
      },
      {
        termo: "Saldo migratório",
        faz: "Pessoas que entram menos pessoas que saem.",
      },
      {
        termo: "Transição demográfica",
        faz: "Caem primeiro as mortes e depois os nascimentos. O crescimento desacelera.",
      },
      {
        termo: "Fecundidade em queda",
        faz: "Vem da educação das mulheres, do trabalho feminino e do custo de vida urbano.",
      },
      {
        termo: "Bônus demográfico",
        faz: "Fase em que há mais pessoas em idade de trabalhar do que dependentes. É temporária.",
      },
      {
        termo: "Censo 2022",
        faz: "Cerca de 203 milhões de pessoas. Sudeste com 41,8% e Centro-Oeste com a maior taxa de crescimento.",
      },
      {
        termo: "Povos e cor ou raça",
        faz: "Pardos, pretos e indígenas aumentaram. Quilombolas foram contados pela primeira vez.",
      },
      {
        termo: "Migração de retorno",
        faz: "Desde os anos 1990, parte dos nordestinos volta à região de origem.",
      },
      {
        termo: "Pendular e sazonal",
        faz: "Pendular é ir e voltar todo dia. Sazonal acompanha safras e estações.",
      },
    ],
    cuidado:
      "Populoso é número total de pessoas. Povoado é pessoas por km². O Brasil é populoso e pouco povoado.",
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
