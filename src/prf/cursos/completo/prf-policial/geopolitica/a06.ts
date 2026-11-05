import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geopolitica-06",
  resumo: {
    ideia:
      "O Brasil tem seis biomas. A aula mostra as marcas de cada um e separa três ideias parecidas: bioma, ecossistema e domínio morfoclimático.",
    itens: [
      {
        termo: "Bioma",
        faz: "Conjunto de vegetação contígua, em escala regional, com um ecossistema dominante.",
      },
      {
        termo: "Ecossistema",
        faz: "Seres vivos mais o ambiente em que vivem. Um bioma tem vários.",
      },
      {
        termo: "Domínio morfoclimático",
        faz: "Grande área em que relevo, clima, solo, água e vegetação se combinam. Conceito de Ab'Saber.",
        pista: "São seis domínios, com faixas de transição entre eles.",
      },
      {
        termo: "Amazônia",
        faz: "Floresta equatorial. Terra firme nunca inunda, várzea inunda por períodos, e igapó fica alagado.",
      },
      {
        termo: "Cerrado",
        faz: "Segundo maior bioma, com duas estações e solo ácido. É hotspot.",
      },
      {
        termo: "Caatinga",
        faz: "Só existe no Brasil. Semiárido, plantas que perdem folhas e rios intermitentes.",
      },
      {
        termo: "Mata Atlântica",
        faz: "Faixa do litoral, muito devastada. É hotspot.",
      },
      {
        termo: "Pantanal",
        faz: "Maior planície inundável do planeta, com espécies de outros biomas.",
      },
      {
        termo: "Pampa",
        faz: "Campos de gramíneas do Sul, em clima subtropical.",
      },
    ],
    cuidado:
      "Mata dos Cocais, Pantanal e manguezais são faixas de transição para Ab'Saber. Eles não entram na lista dos seis domínios.",
  },
  questoes: [
    {
      topico: "Conceitos",
      subassunto: "Bioma e ecossistema",
      dificuldade: 4,
      raciocinio: "Compare a escala de cada conceito.",
      enunciado: "Sobre a relação entre bioma e ecossistema, é correto dizer que",
      alternativas: [
        "são sinônimos e valem para a mesma escala de análise",
        "um ecossistema reúne vários biomas de regiões bem diferentes do país",
        "bioma trata só de animais, e ecossistema só de plantas",
        "um bioma tem vegetação dominante e abriga vários ecossistemas",
        "ecossistema só existe em áreas livres de ação humana",
      ],
      correta: 3,
      explicacao:
        "Bioma é a unidade em escala regional, com vegetação dominante. Ecossistema é a interação de comunidades com o ambiente, e um bioma tem vários.",
      explicacaoErradas:
        "“são sinônimos” ignora a escala. “reúne vários biomas” inverte a relação. “só de animais” separa o que anda junto. “livres de ação humana” não faz parte do conceito.",
      pegadinha: "Usar bioma e ecossistema como a mesma coisa.",
      conhecimento: "O ambiente físico do ecossistema é chamado de biótopo.",
    },
    {
      topico: "Amazônia",
      subassunto: "Estratos da floresta",
      dificuldade: 5,
      raciocinio: "Ligue cada nome ao tempo que a água fica no solo.",
      enunciado:
        "Numa operação na Amazônia, uma equipe passa por área que nunca alaga, depois por outra que alaga só na cheia e, por fim, por uma sempre sob a água. As áreas são, nessa ordem,",
      alternativas: [
        "igapó, várzea e terra firme",
        "várzea, igapó e terra firme",
        "terra firme, várzea e igapó",
        "terra firme, igapó e várzea",
        "igapó, terra firme e mata de várzea",
      ],
      correta: 2,
      explicacao:
        "A terra firme nunca inunda. A várzea inunda em períodos de cheia. O igapó fica alagado de forma permanente.",
      explicacaoErradas:
        "“igapó, várzea e terra firme” inverte a sequência. “várzea, igapó e terra firme” e “igapó, terra firme e mata de várzea” erram as três. “terra firme, igapó e várzea” troca as duas últimas.",
      pegadinha: "Trocar várzea, que alaga na cheia, por igapó, que fica alagado.",
      conhecimento: "A floresta tem solo em geral pobre e vive da reciclagem da própria matéria orgânica.",
    },
    {
      topico: "Amazônia",
      subassunto: "Rios voadores",
      dificuldade: 5,
      raciocinio: "A floresta devolve água ao ar.",
      enunciado:
        "A retirada de grande parte da Floresta Amazônica pode reduzir a chuva até no Centro-Sul do Brasil, porque",
      alternativas: [
        "a floresta bloqueia a chegada de frentes frias ao Sudeste",
        "os rios da Amazônia correm para o Sul e abastecem o Sudeste",
        "a floresta produz toda a água dos rios do interior do país",
        "as árvores retêm o sal do ar, que impede a formação de nuvens",
        "a evapotranspiração da mata alimenta correntes úmidas no ar",
      ],
      correta: 4,
      explicacao:
        "A evapotranspiração lança umidade na atmosfera. Esses fluxos, os “rios voadores”, levam parte dessa água ao Centro-Sul.",
      explicacaoErradas:
        "“bloqueia a chegada de frentes frias” não é o mecanismo. “correm para o Sul” erra, pois se trata de umidade no ar. “toda a água” exagera. “retêm o sal” inventa um processo.",
      pegadinha: "Achar que “rio voador” é um rio de superfície.",
      conhecimento: "O Arco do Desmatamento é a borda sul e leste da floresta, onde a pressão é maior.",
    },
    {
      topico: "Cerrado e Caatinga",
      subassunto: "Marcas de cada bioma",
      dificuldade: 5,
      raciocinio: "Clima semiárido e exclusividade apontam para um só bioma.",
      enunciado:
        "Uma equipe percorre rodovia em área de rios que secam parte do ano, solos rasos e plantas que perdem as folhas na estiagem. O bioma existe só no Brasil. Trata-se",
      alternativas: [
        "da Caatinga, no semiárido, com rios intermitentes",
        "do Cerrado, com duas estações e solos muito profundos",
        "do Pampa, com campos de gramíneas e clima subtropical",
        "da Mata Atlântica, com chuva o ano inteiro no litoral",
        "do Pantanal, com área alagada por boa parte do ano",
      ],
      correta: 0,
      explicacao:
        "A Caatinga é exclusiva do Brasil, cobre o semiárido do Nordeste e o norte de Minas Gerais, com vegetação caducifólia e rios intermitentes.",
      explicacaoErradas:
        "“do Cerrado” também tem seca, mas não tem as marcas de solo raso e semiárido. “do Pampa”, “da Mata Atlântica” e “do Pantanal” têm outras paisagens.",
      pegadinha: "Trocar Cerrado por Caatinga só porque os dois têm estação seca.",
      conhecimento: "Mais da metade da Caatinga já foi desmatada, e há áreas de desertificação.",
    },
    {
      topico: "Cerrado e Caatinga",
      subassunto: "Cerrado",
      dificuldade: 4,
      raciocinio: "Olhe a posição no ranking e o clima.",
      enunciado: "Sobre o Cerrado, é correto afirmar que",
      alternativas: [
        "é o maior bioma do Brasil, com clima equatorial úmido",
        "é uma savana rica em biodiversidade, com duas estações",
        "é um bioma pobre em espécies, sem ameaça de destruição",
        "tem solos muito férteis, sem necessidade de correção",
        "fica na faixa litorânea e tem chuvas bem distribuídas",
      ],
      correta: 1,
      explicacao:
        "O Cerrado é o segundo maior bioma, com clima tropical de duas estações. É considerado a savana mais rica do mundo e um hotspot.",
      explicacaoErradas:
        "“maior bioma” cabe à Amazônia. “pobre em espécies” contraria a biodiversidade. “muito férteis” contraria os solos ácidos e de baixa fertilidade. “faixa litorânea” descreve a Mata Atlântica.",
      pegadinha: "Achar que o avanço da soja vem de solo naturalmente fértil.",
      conhecimento: "Hotspot é área de grande biodiversidade sob forte ameaça.",
    },
    {
      topico: "Mata Atlântica, Pampa e Pantanal",
      subassunto: "Pantanal",
      dificuldade: 4,
      raciocinio: "A cheia define o ritmo da paisagem.",
      enunciado:
        "O bioma que reúne espécies vindas de outros biomas, tem pulso de cheia e seca e é considerado a maior planície inundável do planeta é",
      alternativas: [
        "a Mata de Araucária, pelas chuvas de inverno no Sul",
        "o Pampa, onde os campos ficam submersos o ano inteiro",
        "a Mata dos Cocais, na transição para o semiárido do país",
        "o Pantanal, com a influência de biomas vizinhos a ele",
        "a Mata Atlântica, por causa das cheias de rios do litoral",
      ],
      correta: 3,
      explicacao:
        "O Pantanal é a maior planície inundável do mundo, com estação úmida e seca, e recebeu títulos da UNESCO.",
      explicacaoErradas:
        "“Mata de Araucária” é floresta de altitude do Sul. “Pampa” é de campos, sem essas cheias. “Mata dos Cocais” é faixa de transição. “Mata Atlântica” é floresta litorânea.",
      pegadinha: "Achar que a água fica parada o ano todo.",
      conhecimento: "Capões de mato são ilhas de vegetação que ficam acima da cheia.",
    },
    {
      topico: "Domínios morfoclimáticos",
      subassunto: "Conceito",
      dificuldade: 5,
      raciocinio: "Ab'Saber junta relevo e clima, e não só a vegetação.",
      enunciado:
        "Na classificação de Ab'Saber, um domínio morfoclimático é definido, principalmente, pela",
      alternativas: [
        "soma dos estados que têm a mesma cobertura de florestas nativas",
        "lista das espécies de animais ameaçadas em cada região",
        "interação de relevo, clima, solo, água e vegetação na área",
        "divisão do país em regiões oficiais feita pelo governo",
        "linha reta que separa as áreas úmidas das áreas secas",
      ],
      correta: 2,
      explicacao:
        "Domínio morfoclimático é a área ampla em que relevo, clima, solo, hidrologia e vegetação formam um conjunto coerente, com área nuclear e faixas de transição.",
      explicacaoErradas:
        "“soma dos estados” e “divisão do país” trazem critério político. “lista das espécies” não define o domínio. “linha reta” ignora as faixas de transição.",
      pegadinha: "Reduzir o domínio à vegetação.",
      conhecimento: "As áreas nucleares têm a vegetação dominante do domínio.",
    },
    {
      topico: "Domínios morfoclimáticos",
      subassunto: "Domínios e transições",
      dificuldade: 5,
      raciocinio: "Separe os seis domínios das faixas de transição.",
      enunciado: "Entre os nomes abaixo, é faixa de transição, e não domínio, na classificação de Ab'Saber",
      alternativas: [
        "as Araucárias, no Planalto Meridional",
        "as Pradarias, nas coxilhas do extremo Sul",
        "os Mares de Morros, com seus morros arredondados",
        "as Caatingas, nas depressões do semiárido",
        "a Mata dos Cocais, no Meio-Norte do país",
      ],
      correta: 4,
      explicacao:
        "Os seis domínios são Amazônico, Cerrado, Caatingas, Mares de Morros, Araucárias e Pradarias. A Mata dos Cocais, o Pantanal e os manguezais são transições.",
      explicacaoErradas:
        "“Araucárias”, “Pradarias”, “Mares de Morros” e “Caatingas” são domínios da lista de Ab'Saber, cada um com sua área nuclear.",
      pegadinha: "Colocar o Pantanal ou a Mata dos Cocais na lista dos seis domínios.",
      conhecimento: "No domínio dos Mares de Morros, os morros em “meia laranja” marcam a paisagem da Mata Atlântica.",
    },
  ],
};
