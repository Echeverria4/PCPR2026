import type { MapaAula } from "../tipos";

/** Geopolítica brasileira: um mapa por aula, na ordem do curso. */
export const MAPAS_GEOPOLITICA: MapaAula[] = [
  {
    aula: "geopolitica-01",
    centro: { titulo: "Formação territorial", emoji: "🗺️", sub: "Nação, Estado, território e fronteiras" },
    desenho: "bussola",
    ramos: [
      { rotulo: "Conceitos", emoji: "🏛️", cor: "azul", folhas: ["**Nação**: identidade, não governo", "**Território**: espaço apropriado pelo poder", "**Estado**: soberania sobre povo e território"] },
      { rotulo: "Tratados", emoji: "📜", cor: "verde", folhas: ["**Madri (1750)**: vale a ocupação efetiva", "Substituiu a linha de **Tordesilhas**"] },
      { rotulo: "Federação", emoji: "⭐", cor: "ouro", folhas: ["Veio com a **República** (1889)", "Províncias viram **estados**, mesmas fronteiras", "União, estados, DF e municípios **autônomos**"] },
      { rotulo: "Mapa atual", emoji: "📅", cor: "roxo", folhas: ["Acre estado: **1962**", "Mato Grosso do Sul: **1977**", "CF/1988: **Tocantins**; Amapá e Roraima estados", "Fernando de Noronha anexado a **Pernambuco**"] },
      { rotulo: "Fronteiras", emoji: "🚧", cor: "laranja", folhas: ["**Faixa de fronteira**: até 150 km", "Mar territorial: **12 milhas**", "Zona contígua 24; **ZEE 200** milhas"] },
    ],
    macete: "12, 24 e 200: mar territorial, zona contígua e zona econômica exclusiva, em milhas.",
    cuidado: "Não troque as datas do mapa: Acre estado em 1962, Mato Grosso do Sul em 1977 e Tocantins em 1988.",
  },
  {
    aula: "geopolitica-02",
    centro: { titulo: "Urbanização brasileira", emoji: "🏙️", sub: "Tardia, acelerada e em rede" },
    ramos: [
      { rotulo: "Conceito", emoji: "📈", cor: "azul", folhas: ["Fatia **urbana** cresce e vira maioria", "Tardia e **acelerada**, após a Segunda Guerra"] },
      { rotulo: "Desmetropolização", emoji: "📉", cor: "verde", folhas: ["Desde 1990, metrópoles crescem **menos**", "Elas **não** esvaziam"] },
      { rotulo: "Regiões", emoji: "🧩", cor: "ouro", folhas: ["**Conurbação**: cidades vizinhas se unem", "**Metropolitana**: estado, por lei complementar", "**RIDE**: mais de uma UF, criada pela **União**"] },
      { rotulo: "Rede urbana", emoji: "🕸️", cor: "roxo", folhas: ["IBGE ordena por **influência**", "Cinco níveis: da **metrópole** ao centro local"] },
      { rotulo: "Problemas", emoji: "🏚️", cor: "laranja", folhas: ["**Déficit habitacional**: falta moradia digna", "Maior fator: peso do **aluguel**", "**Autossegregação**: alta renda em condomínios"] },
    ],
    macete: "Região metropolitana é do estado; RIDE é da União e cruza divisas, como DF e Entorno.",
    cuidado: "Cidade crescer não prova urbanização: a fatia urbana no total da população precisa aumentar.",
  },
  {
    aula: "geopolitica-03",
    centro: { titulo: "Economia e indústria", emoji: "🏭", sub: "Regiões, fases e globalização" },
    ramos: [
      { rotulo: "Divisão regional", emoji: "🗺️", cor: "azul", folhas: ["Sudeste e Sul concentram o **PIB**", "**Complexos**: Amazônia, Nordeste e Centro-Sul", "Complexos cortam limites de **estados**"] },
      { rotulo: "Meio técnico", emoji: "🛰️", cor: "verde", folhas: ["Conhecimento **incorporado** ao território", "Base de outra **divisão** do país"] },
      { rotulo: "Até 1955", emoji: "☕", cor: "ouro", folhas: ["Até 1930: capital do **café** financia fábricas", "1930–1955: **substituição** de importações", "Estado como **motor** da indústria"] },
      { rotulo: "1956 a 1990", emoji: "🔺", cor: "roxo", folhas: ["**Tripé**: estatal, nacional e transnacional", "**Plano de Metas** concentra no Sudeste"] },
      { rotulo: "Desde 1990", emoji: "🌐", cor: "laranja", folhas: ["Abertura, **privatizações** e competição externa", "**Desconcentração**: fábricas saem da Grande São Paulo", "Sudeste segue **na frente**"] },
    ],
    macete: "Café, Estado, tripé e abertura: as quatro fases da indústria, em ordem.",
    cuidado: "Complexo regional não é região do IBGE: o norte de Minas fica no Sudeste para o IBGE e no Nordeste geoeconômico.",
  },
  {
    aula: "geopolitica-04",
    centro: { titulo: "Agropecuária e transportes", emoji: "🚜", sub: "Do campo ao porto" },
    desenho: "placa",
    ramos: [
      { rotulo: "Agronegócio", emoji: "🌾", cor: "azul", folhas: ["**Agroindústria**: lavoura, indústria e serviços", "Centro-Oeste: líder em **grãos**", "Mato Grosso: maior **rebanho** bovino"] },
      { rotulo: "Fronteira agrícola", emoji: "🧭", cor: "verde", folhas: ["Avança ao **Norte** e ao Nordeste", "**Matopiba**: MA, TO, PI e BA"] },
      { rotulo: "Campo", emoji: "🐄", cor: "ouro", folhas: ["Bovinos: criação **extensiva**", "Sul: **leite** e aves; Nordeste: caprinos", "Terra **concentrada** em grandes imóveis"] },
      { rotulo: "Números das BRs", emoji: "🛣️", cor: "roxo", folhas: ["**0** radial; **1** longitudinal", "**2** transversal; **3** diagonal", "**4** ligação; o 1º algarismo dá a direção"] },
      { rotulo: "Outros modais", emoji: "🚆", cor: "laranja", folhas: ["**Ferrovia**: carga pesada, longa distância", "**Hidrovia**: força maior no Amazonas", "**Cabotagem**: entre portos do país"] },
    ],
    macete: "Radial (0) sai de Brasília, longitudinal (1) corre norte–sul, transversal (2) leste–oeste e diagonal (3) inclinada.",
    cuidado: "A rodovia leva a maior parte da carga, mas só uma pequena parte da malha é pavimentada.",
  },
  {
    aula: "geopolitica-05",
    centro: { titulo: "População brasileira", emoji: "👥", sub: "Crescimento, transição e migrações" },
    desenho: "pessoas",
    ramos: [
      { rotulo: "Crescimento", emoji: "➕", cor: "azul", folhas: ["**Vegetativo**: nascimentos menos mortes", "**Migratório**: entradas menos saídas"] },
      { rotulo: "Transição", emoji: "⏳", cor: "verde", folhas: ["Caem as **mortes**, depois os nascimentos", "Fecundidade cai: **educação** e trabalho feminino", "**Bônus demográfico**: muitos em idade ativa"] },
      { rotulo: "Censo 2022", emoji: "📋", cor: "ouro", folhas: ["Cerca de **203 milhões**", "Sudeste: **41,8%**", "Centro-Oeste: maior **crescimento**"] },
      { rotulo: "Cor e povos", emoji: "🎨", cor: "roxo", folhas: ["Pardos, pretos e indígenas **aumentaram**", "**Quilombolas** contados pela primeira vez"] },
      { rotulo: "Migrações", emoji: "🧳", cor: "laranja", folhas: ["**Retorno**: nordestinos voltam desde 1990", "**Pendular**: vai e volta todo dia", "**Sazonal**: acompanha safras e estações"] },
    ],
    macete: "Populoso é muita gente; povoado é muita gente por km². O Brasil é populoso e pouco povoado.",
    cuidado: "O bônus demográfico é temporário: com o envelhecimento, a fatia de dependentes volta a crescer.",
  },
  {
    aula: "geopolitica-06",
    centro: { titulo: "Biomas brasileiros", emoji: "🌳", sub: "Seis biomas e três conceitos" },
    desenho: "globo",
    ramos: [
      { rotulo: "Conceitos", emoji: "🔬", cor: "azul", folhas: ["**Bioma**: vegetação contígua, escala regional", "**Ecossistema**: seres vivos e ambiente", "**Domínio morfoclimático**: relevo, clima, solo e vegetação"] },
      { rotulo: "Amazônia", emoji: "🌧️", cor: "verde", folhas: ["Floresta **equatorial**", "Terra firme **nunca** inunda", "Várzea inunda **por períodos**; igapó fica alagado"] },
      { rotulo: "Cerrado", emoji: "🌾", cor: "ouro", folhas: ["**Segundo** maior bioma", "Duas estações e solo **ácido**", "É **hotspot** de biodiversidade"] },
      { rotulo: "Caatinga", emoji: "🌵", cor: "roxo", folhas: ["**Só** existe no Brasil", "Semiárido, rios **intermitentes**", "Plantas **perdem folhas** na seca"] },
      { rotulo: "Mata Atlântica", emoji: "🌴", cor: "laranja", folhas: ["Faixa do **litoral**", "Muito **devastada**; é hotspot"] },
      { rotulo: "Pantanal e Pampa", emoji: "🐊", cor: "rosa", folhas: ["**Pantanal**: maior planície inundável do planeta", "**Pampa**: campos de gramíneas, subtropical"] },
    ],
    macete: "Igapó tem água o tempo todo; várzea, só na cheia; terra firme, nunca.",
    cuidado: "Mata dos Cocais, Pantanal e manguezais são faixas de transição na divisão dos domínios: não entram na lista dos seis.",
  },
];
