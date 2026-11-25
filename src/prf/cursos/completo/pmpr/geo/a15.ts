import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a15",
  resumo: {
    ideia:
      "Cartografia é a ciência de fazer e ler mapas. Para usar um mapa, você precisa de três coisas: saber se orientar (pontos cardeais), localizar um lugar (latitude e longitude) e medir distâncias (escala). A prova cobra muito a rosa dos ventos e o cálculo de escala.",
    itens: [
      {
        termo: "Mapa",
        faz: "Desenho reduzido e simplificado da superfície da Terra num plano. Um bom mapa tem título, legenda, escala, orientação (indicação do norte) e fonte dos dados.",
      },
      {
        termo: "Pontos cardeais",
        faz: "As quatro direções principais: norte (N), sul (S), leste (L ou E) e oeste (O ou W). Norte e sul ficam em lados opostos, assim como leste e oeste.",
        pista: "W vem do inglês west, que quer dizer oeste.",
      },
      {
        termo: "Colaterais e subcolaterais",
        faz: "Colaterais ficam entre dois cardeais: nordeste (NE), sudeste (SE), sudoeste (SO) e noroeste (NO). Subcolaterais ficam entre um cardeal e um colateral, como nor-nordeste (NNE) e lés-sudeste (ESE).",
        pista: "O oposto de nordeste é sudoeste; o oposto de noroeste é sudeste.",
      },
      {
        termo: "Orientação pelo Sol",
        faz: "O Sol nasce do lado leste (nascente) e se põe do lado oeste (poente). Com o braço direito apontado para o nascente, você fica de frente para o norte, com o sul às costas.",
      },
      {
        termo: "Orientação pelas estrelas",
        faz: "No hemisfério norte, a Estrela Polar indica o norte. No hemisfério sul, o Cruzeiro do Sul indica o sul: prolongue o braço maior da cruz cerca de quatro vezes e meia.",
      },
      {
        termo: "Bússola e GPS",
        faz: "A agulha imantada da bússola aponta para o norte magnético, que fica perto, mas não no mesmo lugar, do norte geográfico. O GPS usa sinais de satélites para dar a posição exata.",
      },
      {
        termo: "Paralelos",
        faz: "Círculos imaginários paralelos à linha do Equador. O Equador (0°) é o maior deles e divide a Terra em hemisfério norte e hemisfério sul. Quanto mais perto dos polos, menores os paralelos.",
      },
      {
        termo: "Trópicos e círculos polares",
        faz: "Trópico de Câncer (cerca de 23° N), Trópico de Capricórnio (cerca de 23° S), Círculo Polar Ártico (cerca de 66° N) e Círculo Polar Antártico (cerca de 66° S). Entre os trópicos fica a zona tropical, a mais quente.",
      },
      {
        termo: "Meridianos",
        faz: "Linhas imaginárias que vão de um polo ao outro. O de Greenwich (0°), escolhido em 1884, divide a Terra em hemisfério leste (oriental) e hemisfério oeste (ocidental). O oposto dele é o antimeridiano (180°).",
      },
      {
        termo: "Latitude e longitude",
        faz: "Latitude é a distância, em graus, até o Equador: vai de 0° a 90°, norte ou sul. Longitude é a distância até Greenwich: vai de 0° a 180°, leste ou oeste. Juntas, formam as coordenadas geográficas.",
      },
      {
        termo: "O Brasil nas coordenadas",
        faz: "Todo o Brasil fica a oeste de Greenwich. A maior parte fica no hemisfério sul. O Equador corta Amapá, Pará, Amazonas e Roraima, e o Trópico de Capricórnio corta Mato Grosso do Sul, Paraná e São Paulo.",
      },
      {
        termo: "Escala",
        faz: "Mostra quantas vezes o terreno foi reduzido no mapa. Numérica: 1:100.000 (1 cm no mapa = 100.000 cm, ou 1 km, no terreno). Gráfica: uma barra dividida em partes. Nominal: escrita por extenso, como '1 cm equivale a 10 km'.",
        pista: "Se o mapa for ampliado ou reduzido, só a escala gráfica continua certa, porque a barra muda junto.",
      },
      {
        termo: "Escala grande × pequena",
        faz: "Escala grande tem denominador pequeno (1:10.000): mostra uma área pequena com muitos detalhes, como a planta de um bairro. Escala pequena tem denominador grande (1:10.000.000): mostra áreas grandes com poucos detalhes, como um mapa do país.",
      },
      {
        termo: "Cálculo da escala",
        faz: "Distância real = distância no mapa × denominador. Exemplo: 4 cm num mapa de 1:250.000 dão 1.000.000 cm, ou 10 km. Para passar de cm para km, corte cinco zeros.",
      },
    ],
  },
  questoes: [
    {
      topico: "Cartografia",
      subassunto: "Rosa dos ventos",
      dificuldade: 4,
      raciocinio: "X a NE de Y → Y a SO de X (direção oposta). Cardeais: N, S, L, O. Colaterais: NE, SE, SO, NO (entre dois cardeais). Subcolaterais: entre cardeal e colateral (NNE, ENE...).",
      enunciado: "Usando a rosa dos ventos, uma pessoa viu que a cidade X fica a nordeste da cidade Y. Assinale a alternativa correta sobre essa situação.",
      alternativas: [
        "Em relação à cidade X, a cidade Y fica a noroeste, pois as duas cidades estão no mesmo lado da rosa dos ventos.",
        "Em relação à cidade X, a cidade Y fica a sudoeste, e nordeste e sudoeste são dois pontos colaterais.",
        "Em relação à cidade X, a cidade Y fica a nordeste, pois a direção entre duas cidades é sempre a mesma.",
        "Nordeste é um ponto cardeal, e sudoeste é um ponto subcolateral, que fica entre o sul e o sudeste.",
        "Em relação à cidade X, a cidade Y fica a sudeste, que é a direção oposta ao nordeste na rosa dos ventos.",
      ],
      correta: 1,
      explicacao:
        "Se X fica a nordeste de Y, então Y fica na direção oposta em relação a X, ou seja, a sudoeste. Nordeste e sudoeste são pontos colaterais, que ficam entre dois pontos cardeais.",
      explicacaoErradas:
        "Noroeste não é o oposto de nordeste. A direção muda conforme o ponto de partida: de Y para X é nordeste, e de X para Y é sudoeste. Nordeste e sudoeste são colaterais, e não cardeal e subcolateral. O oposto de nordeste é sudoeste, e não sudeste.",
      pegadinha: "Achar que a direção vale nos dois sentidos: invertendo o ponto de partida, a direção vira a oposta.",
      conhecimento: "Ponto colateral: direção que fica entre dois pontos cardeais, como o nordeste, entre norte e leste.",
    },
    {
      topico: "Cartografia",
      subassunto: "Orientação",
      dificuldade: 5,
      raciocinio: "Braço direito → nascente (leste): frente = norte, costas = sul, esquerda = oeste. Hemisfério sul: Cruzeiro do Sul indica o sul. Hemisfério norte: Estrela Polar indica o norte. Bússola: norte magnético ≠ norte geográfico.",
      enunciado: "Sem bússola nem celular, uma pessoa precisa se orientar usando o Sol e as estrelas. Assinale a alternativa correta.",
      alternativas: [
        "Com o braço direito apontado para o nascente, a pessoa fica de frente para o sul, com o norte às costas.",
        "A agulha da bússola aponta sempre para o norte geográfico, que fica no mesmo ponto do norte magnético.",
        "No Brasil, o melhor guia para achar o norte à noite é a Estrela Polar, vista bem alta em todo o país.",
        "Com o braço direito no nascente, a frente é o norte; no hemisfério sul, o Cruzeiro do Sul aponta o sul.",
        "O Sol nasce do lado oeste e se põe do lado leste, e por isso o nascente é usado para indicar o oeste.",
      ],
      correta: 3,
      explicacao:
        "O Sol nasce do lado leste. Com o braço direito apontado para o nascente, a pessoa fica de frente para o norte, com o sul às costas e o oeste à esquerda. À noite, no hemisfério sul, o Cruzeiro do Sul indica o sul.",
      explicacaoErradas:
        "Com o braço direito no nascente, a frente é o norte, e não o sul. A bússola aponta para o norte magnético, que não fica no mesmo lugar do norte geográfico. A Estrela Polar serve no hemisfério norte e não é vista na maior parte do Brasil. O Sol nasce do lado leste.",
      pegadinha: "Trocar as estrelas: a Estrela Polar indica o norte no hemisfério norte; o Cruzeiro do Sul indica o sul.",
      conhecimento: "Nascente e poente: o lado onde o Sol nasce (leste) e o lado onde ele se põe (oeste).",
    },
    {
      topico: "Cartografia",
      subassunto: "Paralelos e meridianos",
      dificuldade: 4,
      raciocinio: "Paralelos: círculos paralelos ao Equador; Equador = 0°, maior paralelo, divide N/S. Meridianos: de polo a polo; Greenwich = 0°, divide L/O; antimeridiano 180°.",
      enunciado: "Paralelos e meridianos são as linhas imaginárias usadas para localizar lugares na Terra. Assinale a alternativa correta sobre elas.",
      alternativas: [
        "Os meridianos são círculos paralelos ao Equador, e o maior deles é o meridiano de Greenwich, de 90°.",
        "O Equador é um meridiano que vai de um polo ao outro e divide a Terra em lado leste e lado oeste.",
        "Os paralelos ficam maiores à medida que se aproximam dos polos, onde está o maior paralelo da Terra.",
        "O meridiano de Greenwich divide a Terra em hemisfério norte e hemisfério sul e fica a 180° do Equador.",
        "O Equador é o maior paralelo e separa norte e sul; o meridiano de Greenwich separa o leste do oeste.",
      ],
      correta: 4,
      explicacao:
        "Os paralelos são círculos paralelos ao Equador. O Equador (0°) é o maior deles e divide a Terra em hemisfério norte e sul. Os meridianos vão de um polo ao outro, e o de Greenwich (0°) divide a Terra em hemisfério leste e oeste.",
      explicacaoErradas:
        "Os meridianos vão de polo a polo, e Greenwich é o meridiano 0°. O Equador é um paralelo e divide norte e sul. Os paralelos diminuem perto dos polos. Greenwich divide leste e oeste.",
      pegadinha: "Trocar as funções: o Equador separa norte e sul; Greenwich separa leste e oeste.",
      conhecimento: "Hemisfério: cada uma das metades da Terra, divididas pelo Equador ou por Greenwich.",
    },
    {
      topico: "Cartografia",
      subassunto: "Latitude e longitude",
      dificuldade: 5,
      raciocinio: "Latitude: 0°–90°, N ou S, a partir do Equador. Longitude: 0°–180°, L ou O, a partir de Greenwich. Não existe latitude 120°. Pontos no mesmo paralelo têm a mesma latitude. Polo: latitude 90°.",
      enunciado: "As coordenadas geográficas localizam qualquer ponto da Terra. Sobre latitude e longitude, assinale a alternativa correta.",
      alternativas: [
        "A latitude vai de 0° a 90°, norte ou sul, e a longitude vai de 0° a 180°, leste ou oeste de Greenwich.",
        "A latitude vai de 0° a 180° e é medida a partir de Greenwich, e a longitude é medida a partir do Equador.",
        "Duas cidades no mesmo paralelo têm a mesma longitude, mesmo que fiquem em continentes bem distantes.",
        "Um ponto com latitude de 120° norte fica perto do Polo Norte, na região do Círculo Polar Ártico.",
        "Os polos têm latitude 0°, pois ficam no ponto de partida da contagem dos graus de norte e de sul.",
      ],
      correta: 0,
      explicacao:
        "A latitude é a distância, em graus, até o Equador e vai de 0° a 90°, para o norte ou para o sul. A longitude é a distância até o meridiano de Greenwich e vai de 0° a 180°, para o leste ou para o oeste.",
      explicacaoErradas:
        "Estão trocadas a medida e a linha de partida: a latitude parte do Equador, e a longitude, de Greenwich. Quem está no mesmo paralelo tem a mesma latitude. Não existe latitude de 120°, pois o máximo é 90°. Os polos têm latitude 90°, e o Equador, 0°.",
      pegadinha: "Achar que a latitude chega a 180°: o máximo é 90°, nos polos; 180° é limite da longitude.",
      conhecimento: "Coordenadas geográficas: par de números (latitude e longitude) que marca um ponto exato na Terra.",
    },
    {
      topico: "Cartografia",
      subassunto: "Trópicos e círculos polares",
      dificuldade: 4,
      raciocinio: "Câncer ~23° N; Capricórnio ~23° S; círculos polares ~66°. Zona tropical entre os trópicos. Brasil: Equador (AP, PA, AM, RR) e Trópico de Capricórnio (MS, PR, SP).",
      enunciado: "Alguns paralelos recebem nomes especiais e marcam as zonas da Terra. Assinale a alternativa correta sobre eles.",
      alternativas: [
        "O Trópico de Câncer corta o Sul do Brasil, e o Trópico de Capricórnio fica no hemisfério norte, na Ásia.",
        "Os círculos polares ficam a cerca de 23° do Equador, e os trópicos ficam a cerca de 66°, perto dos polos.",
        "Os trópicos ficam perto de 23°; o Brasil é cortado pela linha do Equador e pelo Trópico de Capricórnio.",
        "A zona tropical fica entre os dois círculos polares e é a parte mais fria da Terra durante o ano inteiro.",
        "O Brasil é cortado só pelo Trópico de Câncer, e nenhuma parte do país fica perto da linha do Equador.",
      ],
      correta: 2,
      explicacao:
        "Os trópicos ficam a cerca de 23° do Equador: Câncer ao norte e Capricórnio ao sul. Os círculos polares ficam a cerca de 66°. O Brasil é cortado pelo Equador, no Norte, e pelo Trópico de Capricórnio, em Mato Grosso do Sul, no Paraná e em São Paulo.",
      explicacaoErradas:
        "O Trópico de Câncer fica no hemisfério norte, e o de Capricórnio corta o Brasil. Os números estão trocados: trópicos perto de 23°, círculos polares perto de 66°. A zona tropical fica entre os trópicos e é a mais quente. O Brasil é cortado pelo Equador e pelo Trópico de Capricórnio.",
      pegadinha: "Trocar os trópicos: Capricórnio fica no hemisfério sul e corta o Brasil; Câncer fica no norte.",
      conhecimento: "Zona tropical: faixa entre os dois trópicos, que recebe mais luz do Sol e é a mais quente.",
    },
    {
      topico: "Cartografia",
      subassunto: "O Brasil nas coordenadas",
      dificuldade: 5,
      raciocinio: "Todo o Brasil: longitude oeste (hemisfério ocidental). Maior parte no hemisfério sul; Equador corta AP, PA, AM, RR → parte no norte. Capricórnio: MS, PR, SP. Brasil tem latitudes norte e sul, mas só longitudes oeste.",
      enunciado: "O território brasileiro é grande e fica em mais de um hemisfério. Sobre a posição do Brasil nas coordenadas, assinale a alternativa correta.",
      alternativas: [
        "Todo o Brasil fica no hemisfério sul, pois a linha do Equador passa ao norte do ponto mais ao norte do país.",
        "Parte do Brasil fica a leste de Greenwich, já que o país tem litoral voltado para o oceano Atlântico.",
        "O Brasil tem só longitudes leste e latitudes norte, por estar ao lado da África e perto da Europa.",
        "O Equador corta o Brasil em Goiás e na Bahia, e o Trópico de Capricórnio corta o país só no Rio Grande do Sul.",
        "Todo o país fica a oeste de Greenwich, e o Equador corta Roraima e Amapá, deixando parte no hemisfério norte.",
      ],
      correta: 4,
      explicacao:
        "Todo o Brasil fica a oeste do meridiano de Greenwich, no hemisfério ocidental. A maior parte do país fica no hemisfério sul, mas o Equador corta Amapá, Pará, Amazonas e Roraima, e por isso uma parte fica no hemisfério norte.",
      explicacaoErradas:
        "O Equador corta o Norte do país, e há uma parte no hemisfério norte. Mesmo com o litoral no Atlântico, todo o Brasil fica a oeste de Greenwich. O país tem só longitudes oeste e latitudes norte e sul. O Equador corta a região Norte, e o Trópico de Capricórnio corta MS, PR e SP.",
      pegadinha: "Achar que o Brasil está todo no hemisfério sul: Roraima e Amapá, por exemplo, têm partes no norte.",
      conhecimento: "Hemisfério ocidental: a metade da Terra a oeste de Greenwich, onde ficam as Américas.",
    },
    {
      topico: "Cartografia",
      subassunto: "Cálculo de escala",
      dificuldade: 4,
      raciocinio: "D = d × E. 3 cm × 500.000 = 1.500.000 cm = 15 km (corta 5 zeros: cm → km). 1 cm = 5 km.",
      enunciado: "Num mapa com escala de 1:500.000, duas cidades estão a 3 cm uma da outra. Assinale a alternativa correta sobre a distância real.",
      alternativas: [
        "A distância real é de 15 km, pois cada centímetro desse mapa corresponde a 5 km sobre o terreno.",
        "A distância real é de 150 km, pois cada centímetro desse mapa corresponde a 50 km no terreno.",
        "A distância real é de 1,5 km, pois cada centímetro desse mapa corresponde a 500 metros no terreno.",
        "A distância real é de 1.500 km, pois a escala manda multiplicar os 3 cm por quinhentos quilômetros.",
        "A distância real não pode ser calculada, pois só a escala gráfica permite medir distâncias no mapa.",
      ],
      correta: 0,
      explicacao:
        "Multiplica-se a distância no mapa pelo denominador da escala: 3 cm × 500.000 = 1.500.000 cm. Para passar de centímetros para quilômetros, cortam-se cinco zeros: 15 km. Em outras palavras, cada centímetro corresponde a 5 km.",
      explicacaoErradas:
        "150 km e 1,5 km vêm de cortar zeros a menos ou a mais. 500.000 cm são 5 km, e não 500 km. A escala numérica também permite calcular distâncias: basta multiplicar.",
      pegadinha: "Errar na troca de unidade: de centímetros para quilômetros, cortam-se cinco zeros.",
      conhecimento: "Denominador da escala: o número depois dos dois-pontos, que diz quantas vezes o terreno foi reduzido.",
    },
    {
      topico: "Cartografia",
      subassunto: "Escala grande e pequena",
      dificuldade: 5,
      raciocinio: "Escala grande = denominador pequeno (1:10.000) = área pequena, muito detalhe (planta de bairro). Escala pequena = denominador grande (1:10.000.000) = área grande, pouco detalhe (mapa do país). 1:10.000 é maior que 1:1.000.000.",
      enunciado: "Uma pessoa compara um mapa de 1:10.000 com outro de 1:1.000.000, ambos do mesmo tamanho. Assinale a alternativa correta.",
      alternativas: [
        "O mapa de 1:1.000.000 tem a escala maior, porque o número dele é maior, e por isso mostra mais detalhes.",
        "Os dois mapas têm o mesmo nível de detalhe, pois a escala não muda o que pode ser mostrado no papel.",
        "O mapa de 1:10.000 tem a escala maior e mostra área menor com mais detalhes, como as ruas de um bairro.",
        "O mapa de 1:10.000 serve para mostrar um país inteiro, e o de 1:1.000.000, para mostrar só uma rua.",
        "A escala pequena mostra mais detalhes, pois o terreno é reduzido menos vezes do que na escala grande.",
      ],
      correta: 2,
      explicacao:
        "Quanto menor o denominador, maior a escala. O mapa de 1:10.000 tem a escala maior: mostra uma área menor, com muitos detalhes, como ruas e quarteirões. O de 1:1.000.000 tem escala menor: mostra uma área bem maior, com poucos detalhes.",
      explicacaoErradas:
        "O número maior no denominador indica escala menor e menos detalhe. A escala muda o nível de detalhe. Os usos estão trocados: 1:10.000 serve para áreas pequenas. A escala pequena reduz o terreno mais vezes e mostra menos detalhes.",
      pegadinha: "Achar que número maior é escala maior: é o contrário, porque a escala é uma fração.",
      conhecimento: "Planta: mapa em escala bem grande, de uma área pequena, como uma casa ou um bairro.",
    },
    {
      topico: "Cartografia",
      subassunto: "Tipos de escala",
      dificuldade: 4,
      raciocinio: "Numérica: fração (1:100.000). Gráfica: barra; acompanha ampliação/redução. Nominal (verbal): por extenso. Em fotocópia ampliada, a numérica fica errada; a gráfica continua válida.",
      enunciado: "Um mapa traz duas escalas: a numérica e a gráfica. Ele foi ampliado numa copiadora. Assinale a alternativa correta.",
      alternativas: [
        "As duas escalas continuam certas, pois ampliar o mapa não muda a relação entre o papel e o terreno.",
        "A escala numérica continua certa, e a gráfica fica errada, porque a barra muda de tamanho na cópia.",
        "As duas escalas ficam erradas, e não há nenhuma forma de medir distâncias no mapa depois da cópia.",
        "A escala gráfica continua certa, pois a barra cresce junto com o mapa, mas a numérica fica errada.",
        "A escala nominal é a única que se ajusta sozinha, pois é escrita por extenso no canto do mapa.",
      ],
      correta: 3,
      explicacao:
        "Quando o mapa é ampliado, a barra da escala gráfica cresce na mesma proporção, e por isso continua certa. A escala numérica, porém, continua escrita com o mesmo número e deixa de valer para a cópia ampliada.",
      explicacaoErradas:
        "A ampliação muda a relação entre o papel e o terreno. A escala que fica errada é a numérica, e não a gráfica. Com a escala gráfica, ainda dá para medir. A escala nominal, escrita por extenso, também fica errada, pois o texto não muda.",
      pegadinha: "Achar que a escala numérica se ajusta: o número fica igual, mas o mapa mudou de tamanho.",
      conhecimento: "Escala gráfica: barra dividida em partes iguais, cada uma com a distância real que representa.",
    },
    {
      topico: "Cartografia",
      subassunto: "Ampliação e escala",
      dificuldade: 5,
      raciocinio: "Mapa 1:100.000 ampliado 2× → nova escala 1:50.000 (escala maior, denominador cai pela metade). 2 km em 1:50.000 = 200.000 cm / 50.000 = 4 cm. 2 km em 1:100.000 = 2 cm.",
      enunciado: "Um mapa de 1:100.000 foi ampliado duas vezes, para ficar com o dobro do tamanho. Assinale a alternativa correta sobre a nova escala.",
      alternativas: [
        "A nova escala é 1:200.000, pois o mapa dobrou de tamanho e o número da escala também precisa dobrar.",
        "A nova escala é 1:50.000; nela, uma estrada de 2 km fica com 4 cm, contra os 2 cm do mapa original.",
        "A escala continua 1:100.000, pois a distância real entre as cidades não muda quando o mapa cresce.",
        "A nova escala é 1:50.000, que é menor que a original e mostra menos detalhes do terreno representado.",
        "A nova escala é 1:100, pois, ao ampliar duas vezes, cortam-se três zeros do número da escala original.",
      ],
      correta: 1,
      explicacao:
        "Ao dobrar o tamanho do mapa, cada centímetro passa a representar metade da distância: a escala vira 1:50.000. Uma estrada de 2 km (200.000 cm) mede 2 cm no mapa original e 4 cm no ampliado.",
      explicacaoErradas:
        "Ao ampliar, o denominador diminui, e não aumenta. A distância real não muda, mas a do papel muda, e por isso a escala muda. 1:50.000 é uma escala maior que 1:100.000, e não menor. Ampliar duas vezes divide o denominador por dois.",
      pegadinha: "Achar que ampliar o mapa aumenta o número da escala: o denominador diminui, e a escala fica maior.",
      conhecimento: "Ampliação: aumento do tamanho do mapa, que deixa a escala maior (denominador menor).",
    },
  ],
};
