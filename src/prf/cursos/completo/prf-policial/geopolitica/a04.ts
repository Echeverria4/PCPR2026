import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geopolitica-04",
  resumo: {
    ideia:
      "Campo, indústria e cidade formam uma só cadeia, ligada pelos transportes. A aula mostra onde a produção agrícola avança e por que a carga do país roda tanto em rodovia.",
    itens: [
      {
        termo: "Agroindústria",
        faz: "Une lavoura, indústria e serviços em uma mesma cadeia de produção.",
      },
      {
        termo: "Centro-Oeste",
        faz: "Região que mais produz grãos. Mato Grosso tem o maior rebanho bovino.",
      },
      {
        termo: "Fronteira agrícola",
        faz: "Avança ao Norte e ao Nordeste. Matopiba reúne áreas de Maranhão, Tocantins, Piauí e Bahia.",
      },
      {
        termo: "Pecuária",
        faz: "Bovinos em criação predominantemente extensiva. O Sul lidera leite e aves, e o Nordeste, caprinos e ovinos.",
      },
      {
        termo: "Estrutura fundiária",
        faz: "A terra é concentrada: poucos imóveis grandes ocupam a maior parte da área.",
      },
      {
        termo: "Numeração das BRs",
        faz: "0 radial, 1 longitudinal, 2 transversal, 3 diagonal e 4 ligação.",
        pista: "O primeiro algarismo dá a direção.",
      },
      {
        termo: "Ferrovia",
        faz: "Boa para carga pesada em longa distância, com baixo custo e baixa emissão.",
      },
      {
        termo: "Hidrovia",
        faz: "Usa rios e, ao contrário dos demais modais, tem seu maior peso na bacia do Amazonas.",
      },
      {
        termo: "Cabotagem",
        faz: "Navegação entre portos do próprio país.",
      },
    ],
    cuidado:
      "Só uma pequena parte da malha rodoviária é pavimentada, embora a rodovia seja o modal que mais leva carga.",
  },
  questoes: [
    {
      topico: "Agropecuária",
      subassunto: "Fronteira agrícola",
      dificuldade: 4,
      raciocinio: "Leia a sigla: cada pedaço é um estado.",
      enunciado:
        "Em patrulha na BR-135, uma equipe observa lavouras de soja abertas no Cerrado, em área de avanço recente entre Maranhão, Tocantins, Piauí e Bahia. Essa área é conhecida como",
      alternativas: [
        "Arco do Desmatamento, no sul da Floresta Amazônica",
        "Zona da Mata, faixa úmida do litoral nordestino",
        "Polígono das Secas, núcleo do semiárido do Nordeste",
        "Matopiba, fronteira agrícola em expansão no Cerrado",
        "Agreste, faixa de transição entre o litoral e o sertão",
      ],
      correta: 3,
      explicacao:
        "Matopiba reúne 337 municípios desses quatro estados e é uma das principais fronteiras agrícolas do país, com forte presença de grãos.",
      explicacaoErradas:
        "“Arco do Desmatamento” fica na borda da Amazônia. “Zona da Mata” e “Agreste” são sub-regiões do Nordeste. “Polígono das Secas” define o semiárido, e não uma fronteira de grãos.",
      pegadinha: "Trocar a fronteira do Cerrado pelo Arco do Desmatamento.",
      conhecimento: "A fronteira agrícola avança do Centro-Oeste para o Norte e para o Nordeste.",
    },
    {
      topico: "Agropecuária",
      subassunto: "Distribuição da produção",
      dificuldade: 5,
      raciocinio: "Separe bovinos, aves e leite.",
      enunciado: "Sobre a distribuição da pecuária no Brasil, é correto dizer que",
      alternativas: [
        "o Nordeste lidera o rebanho bovino, seguido de perto pelo Sudeste",
        "a criação de bovinos é, em sua maior parte, intensiva",
        "o Sul lidera a produção de leite e a criação de galináceos",
        "o Norte concentra a maior parte da produção de aves",
        "caprinos e ovinos se concentram sobretudo no Sul do país",
      ],
      correta: 2,
      explicacao:
        "O Centro-Oeste tem o maior rebanho bovino, com o Norte em seguida. O Sul lidera leite e galináceos, e o Nordeste, caprinos e ovinos.",
      explicacaoErradas:
        "“lidera o rebanho bovino” erra a região. “intensiva” inverte, pois a criação é predominantemente extensiva. “produção de aves” cabe ao Sul. “sobretudo no Sul” erra, pois caprinos e ovinos estão no Nordeste.",
      pegadinha: "Achar que a maior parte do gado é confinada.",
      conhecimento: "Mato Grosso, Pará e Goiás têm os maiores rebanhos bovinos.",
    },
    {
      topico: "Agropecuária",
      subassunto: "Estrutura fundiária",
      dificuldade: 4,
      raciocinio: "Compare o número de imóveis com a área que eles ocupam.",
      enunciado:
        "Em um município, poucas propriedades muito grandes ocupam quase toda a área rural, enquanto muitas pequenas ficam com pouca terra. Esse quadro é típico da",
      alternativas: [
        "reforma agrária concluída, com a terra repartida por igual entre todos",
        "agricultura de subsistência, livre de conflitos pela posse",
        "desconcentração fundiária, que é a tendência do campo hoje",
        "agroindústria familiar, que dispensa o uso de máquinas",
        "estrutura fundiária concentrada, herança da ocupação do país",
      ],
      correta: 4,
      explicacao:
        "O Brasil tem estrutura fundiária concentrada, com raízes nas grandes propriedades do período colonial. Daí vem o debate sobre a reforma agrária.",
      explicacaoErradas:
        "“reforma agrária concluída” descreve o oposto. “livre de conflitos” ignora as disputas no campo. “desconcentração fundiária” não é o caso narrado. “agroindústria familiar” não trata da posse da terra.",
      pegadinha: "Achar que o maior número de imóveis pequenos significa terra bem dividida.",
      conhecimento: "A disputa pela terra também envolve terras indígenas e quilombolas.",
    },
    {
      topico: "Rodovias",
      subassunto: "Numeração das BRs",
      dificuldade: 5,
      raciocinio: "Olhe só o primeiro algarismo.",
      enunciado:
        "Um policial recebe ordem para atuar nas BR-040, BR-116 e BR-364. Pela nomenclatura do sistema federal, essas rodovias são, nessa ordem,",
      alternativas: [
        "radial, longitudinal e diagonal",
        "radial, transversal e de ligação",
        "longitudinal, radial e transversal",
        "diagonal, longitudinal e de ligação",
        "transversal, diagonal e longitudinal",
      ],
      correta: 0,
      explicacao:
        "O primeiro algarismo indica o tipo: 0 radial, 1 longitudinal, 2 transversal, 3 diagonal e 4 ligação. Assim, 040 é radial, 116 é longitudinal e 364 é diagonal.",
      explicacaoErradas:
        "“radial, transversal e de ligação” erra as duas últimas. “longitudinal, radial e transversal” erra as três. “diagonal, longitudinal e de ligação” erra a primeira e a última. “transversal, diagonal e longitudinal” erra as três.",
      pegadinha: "Ler o número inteiro em vez do primeiro algarismo.",
      conhecimento: "As radiais partem de Brasília.",
    },
    {
      topico: "Rodovias",
      subassunto: "Malha e pavimentação",
      dificuldade: 5,
      raciocinio: "A rodovia domina a carga, mas a malha asfaltada é pequena.",
      enunciado: "Sobre a malha rodoviária brasileira, é correto dizer que",
      alternativas: [
        "quase toda a extensão total da malha é pavimentada desde os anos 1990",
        "só cerca de um oitavo é pavimentado, e a malha segue o Centro-Sul",
        "a maior parte das estradas fica na Região Norte do país",
        "as rodovias federais não têm trechos com pavimento ruim",
        "o transporte rodoviário foi trocado pela ferrovia desde 1956",
      ],
      correta: 1,
      explicacao:
        "A malha tem cerca de 1,7 milhão de km, com só 12,4% pavimentados, e se concentra no eixo Centro-Sul, onde está a maior parte da economia.",
      explicacaoErradas:
        "“quase toda” contraria o dado. “Região Norte” erra a concentração. “não têm trechos” contraria as pesquisas sobre a qualidade do pavimento. “trocado pela ferrovia” inverte, pois a opção pela rodovia cresceu a partir de 1956.",
      pegadinha: "Achar que o maior modal do país tem malha toda asfaltada.",
      conhecimento: "Em 2022, cerca de 24% da malha pesquisada pela CNT tinha pavimento ruim ou péssimo.",
    },
    {
      topico: "Ferrovias e cabotagem",
      subassunto: "Escolha do modal",
      dificuldade: 5,
      raciocinio: "Carga pesada, longa distância e baixo valor por tonelada.",
      enunciado:
        "Uma mineradora precisa levar grande volume de minério por mais de 800 km, do interior a um porto, com baixo custo por tonelada. O modal terrestre mais adequado é",
      alternativas: [
        "o rodoviário, pela maior capacidade de carga em cada viagem feita",
        "o aéreo, por ser o mais barato em longas distâncias",
        "o dutoviário, próprio para qualquer tipo de carga sólida",
        "a cabotagem, que corre sobre trilhos ao longo do litoral",
        "o ferroviário, pela grande capacidade em longas distâncias",
      ],
      correta: 4,
      explicacao:
        "A ferrovia combina grande capacidade, longas distâncias, baixo custo e baixa emissão, e por isso serve bem para minério e grãos.",
      explicacaoErradas:
        "“maior capacidade” não cabe ao caminhão. “mais barato” não cabe ao avião. “qualquer tipo de carga sólida” exagera o uso do duto. “sobre trilhos” erra, pois cabotagem é navegação.",
      pegadinha: "Achar que a rodovia é sempre a melhor por ser a mais usada.",
      conhecimento: "As ferrovias ganharam novo fôlego com as concessões dos anos 1990.",
    },
    {
      topico: "Ferrovias e cabotagem",
      subassunto: "Cabotagem",
      dificuldade: 4,
      raciocinio: "Fique com o que vale para portos do mesmo país.",
      enunciado:
        "Um navio leva contêineres de Santos (SP) para Manaus (AM), passando pelo mar e depois pelo rio Amazonas, sem sair do território nacional. Esse transporte é chamado de",
      alternativas: [
        "navegação de longo curso, feita entre portos de vários países",
        "cabotagem, navegação entre portos do território nacional",
        "navegação interior, feita somente por rios e lagos do país",
        "transbordo ferroviário, que liga o porto à linha de trem",
        "hidrovia de fronteira, que exige tratado com país vizinho",
      ],
      correta: 1,
      explicacao:
        "Cabotagem é a navegação entre portos do território nacional, pela via marítima ou combinando o mar com vias interiores.",
      explicacaoErradas:
        "“longo curso” liga portos de países diferentes. “somente por rios e lagos” não cabe, pois houve trecho no mar. “transbordo ferroviário” não é navegação. “hidrovia de fronteira” não descreve a viagem.",
      pegadinha: "Achar que cabotagem é só pelo mar.",
      conhecimento: "O Porto de Santos é o de maior movimentação da América Latina.",
    },
    {
      topico: "Hidrovias",
      subassunto: "Distribuição",
      dificuldade: 5,
      raciocinio: "Onde falta estrada, o rio é a via.",
      enunciado:
        "Quase todos os modais de transporte do Brasil se concentram no Centro-Sul. A exceção é o hidroviário, porque",
      alternativas: [
        "os rios do Sudeste são impróprios para qualquer navegação",
        "a lei proíbe navegação comercial nas regiões mais ricas",
        "a bacia do Amazonas lidera o uso, pela falta de rodovias na região",
        "a bacia do Amazonas tem portos maiores que os de todo o litoral do país",
        "a bacia do São Francisco tem hoje a maior carga fluvial do país",
      ],
      correta: 2,
      explicacao:
        "A bacia do Amazonas concentra a maior parte da navegação interior, pois os rios são vias naturais em uma área com poucas estradas.",
      explicacaoErradas:
        "“impróprios para qualquer navegação” exagera. “a lei proíbe” inventa a regra. “portos maiores” contraria o peso de Santos. “São Francisco” não lidera a navegação interior.",
      pegadinha: "Aplicar ao rio a concentração no Centro-Sul.",
      conhecimento: "Na Amazônia, pessoas e cargas viajam principalmente de barco.",
    },
  ],
};
