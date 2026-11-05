import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-19",
  resumo: {
    ideia:
      "Estatística organiza dados para mostrar o que eles dizem. Esta aula é a base: tipos de variável, tabelas, frequências e gráficos.",
    itens: [
      {
        termo: "Ramos",
        faz: "A descritiva resume os dados. A inferencial tira conclusões sobre o todo a partir de uma parte.",
      },
      {
        termo: "População e amostra",
        faz: "População é o grupo todo. Amostra é a parte observada. Censo mede todos, e amostragem mede só uma parte.",
      },
      {
        termo: "Parâmetro e estatística",
        faz: "Parâmetro descreve a população. Estatística, ou estimador, é calculada na amostra.",
      },
      {
        termo: "Variável qualitativa",
        faz: "Nominal não tem ordem: tipo de veículo. Ordinal tem ordem: leve, moderada, grave.",
      },
      {
        termo: "Variável quantitativa",
        faz: "Discreta vem de contagem: número de feridos. Contínua vem de medida: velocidade.",
      },
      {
        termo: "Dados brutos e rol",
        faz: "Dados brutos estão como foram coletados. Rol é a lista em ordem.",
      },
      {
        termo: "Séries",
        faz: "Temporal: o tempo varia. Geográfica: o local varia. Específica: o fato varia. Mista: combina essas ideias.",
      },
      {
        termo: "Frequências",
        faz: "Absoluta é a contagem. Relativa é a contagem ÷ total. Acumulada soma até aquela linha.",
      },
      {
        termo: "Classes",
        faz: "São faixas de valores. Amplitude = limite superior − limite inferior. O ponto médio é o meio da faixa.",
      },
      {
        termo: "Histograma",
        faz: "Barras coladas. Com amplitudes diferentes, a altura é a densidade: frequência ÷ amplitude.",
      },
      {
        termo: "Gráfico de setores",
        faz: "Cada fatia é parte de 360°. Ângulo ÷ 360° dá a fração do total.",
      },
    ],
    cuidado:
      "Número nem sempre é variável quantitativa. Um código, como o de uma rodovia, é só um rótulo.",
  },
  questoes: [
    {
      topico: "Tipos de variável",
      subassunto: "Nominal, ordinal, discreta e contínua",
      dificuldade: 4,
      raciocinio: "Gravidade tem ordem, mas não é número. Feridos é contagem.",
      enunciado:
        "Em um levantamento de sinistros, anotam-se a gravidade (leve, moderada ou grave) e o número de feridos de cada ocorrência. Essas variáveis são, respectivamente,",
      alternativas: [
        "qualitativa nominal e quantitativa discreta",
        "qualitativa ordinal e quantitativa contínua",
        "quantitativa contínua e quantitativa discreta",
        "qualitativa nominal e quantitativa contínua",
        "qualitativa ordinal e quantitativa discreta",
      ],
      correta: 4,
      explicacao:
        "Leve, moderada e grave são categorias com ordem: qualitativa ordinal. Número de feridos vem de contagem: quantitativa discreta.",
      explicacaoErradas:
        "“qualitativa nominal e quantitativa discreta” ignora a ordem da gravidade. “qualitativa ordinal e quantitativa contínua” trata contagem como medida. “quantitativa contínua e quantitativa discreta” trata a gravidade como medida numérica. “qualitativa nominal e quantitativa contínua” erra as duas.",
      pegadinha: "Achar que toda categoria é nominal. Se há ordem natural, ela é ordinal.",
      conhecimento: "Contagem gera variável discreta. Medida gera variável contínua.",
    },
    {
      topico: "Distribuição de frequências",
      subassunto: "Frequência relativa acumulada",
      dificuldade: 5,
      raciocinio: "Somar as contagens até 1 infração e dividir pelo total.",
      enunciado:
        "Em 40 abordagens, o número de infrações por veículo foi: 0 em 12 veículos, 1 em 15, 2 em 8 e 3 em 5. A frequência relativa acumulada até 1 infração é",
      alternativas: ["67,5%", "37,5%", "30%", "87,5%", "27%"],
      correta: 0,
      explicacao: "Até 1 infração há 12 + 15 = 27 veículos. 27 ÷ 40 = 67,5%.",
      explicacaoErradas:
        "“37,5%” usa só os 15 veículos com 1 infração. “30%” usa só os 12 sem infração. “87,5%” acumula até 2 infrações. “27%” lê a acumulada absoluta como percentual.",
      pegadinha: "Usar só a linha pedida. Acumulada soma todas as linhas até ela.",
      conhecimento: "Frequência relativa = frequência absoluta ÷ total.",
    },
    {
      topico: "População e amostra",
      subassunto: "Parâmetro e estatística",
      dificuldade: 4,
      raciocinio: "O 88 veio de uma parte dos veículos, e não de todos.",
      enunciado:
        "Para conhecer a velocidade média de todos os veículos de uma rodovia, foram medidos 500 deles, com média de 88 km/h. Esse valor de 88 km/h é",
      alternativas: [
        "um parâmetro, pois descreve toda a população de veículos da rodovia",
        "o resultado de um censo, pois todos os 500 veículos foram medidos",
        "uma estatística, medida na amostra, que estima o parâmetro da população",
        "um parâmetro da amostra, que será igual ao da população se ela for grande",
        "uma variável qualitativa, pois a média resume a velocidade dos veículos",
      ],
      correta: 2,
      explicacao:
        "Os 500 veículos são uma amostra. O que se calcula nela é uma estatística, usada para estimar o parâmetro, que é a média de todos.",
      explicacaoErradas:
        "“um parâmetro, pois descreve toda a população” ignora que só parte foi medida. “o resultado de um censo” exigiria medir todos os veículos da rodovia. “um parâmetro da amostra” mistura os termos e promete igualdade que não existe. “uma variável qualitativa” erra, pois velocidade é quantitativa.",
      pegadinha: "Trocar os termos. Parâmetro é da população, e estatística é da amostra.",
      conhecimento: "Amostra grande melhora a estimativa, mas não garante valor igual ao da população.",
    },
    {
      topico: "Séries estatísticas",
      subassunto: "Identificar o que varia",
      dificuldade: 4,
      raciocinio: "O fato e o ano estão fixos. Só o local muda.",
      enunciado:
        "Uma tabela mostra, para cada unidade da federação, o número de colisões traseiras registradas no ano de 2025. Quanto ao elemento que varia, essa tabela é uma",
      alternativas: [
        "série temporal",
        "série específica",
        "série mista",
        "distribuição de frequências",
        "série geográfica",
      ],
      correta: 4,
      explicacao: "O fato (colisões traseiras) e a época (2025) estão fixos. Só o local varia: série geográfica.",
      explicacaoErradas:
        "“série temporal” exigiria variar o tempo. “série específica” exigiria variar o fato. “série mista” exigiria combinar elementos variando. “distribuição de frequências” agruparia valores de uma variável em faixas.",
      pegadinha: "Olhar para o ano e pensar em temporal. Um ano só não varia.",
      conhecimento: "Uma série tem três elementos: tempo, espaço e espécie.",
    },
    {
      topico: "Histograma",
      subassunto: "Densidade de frequência",
      dificuldade: 5,
      raciocinio: "Com amplitudes diferentes, compare frequência ÷ amplitude.",
      enunciado:
        "Em um histograma de velocidades, cuja área de cada barra é proporcional à frequência, a classe 60 ⊢ 70 km/h tem 18 veículos, e a classe 70 ⊢ 100 km/h tem 36. A altura da barra da segunda classe, em relação à da primeira, é",
      alternativas: ["o dobro", "a metade", "o triplo", "2/3", "3/2"],
      correta: 3,
      explicacao:
        "A altura é a densidade. Primeira: 18 ÷ 10 = 1,8. Segunda: 36 ÷ 30 = 1,2. Razão: 1,2 ÷ 1,8 = 2/3.",
      explicacaoErradas:
        "“o dobro” compara só as frequências, e “a metade” inverte essa comparação. “o triplo” compara só as amplitudes. “3/2” inverte a razão entre as densidades.",
      pegadinha: "Comparar frequências. Uma classe mais larga tem mais veículos e pode ter barra mais baixa.",
      conhecimento: "Densidade = frequência ÷ amplitude da classe.",
    },
    {
      topico: "Gráfico de setores",
      subassunto: "Do ângulo à quantidade",
      dificuldade: 5,
      raciocinio: "O setor é a fração 54 ÷ 360 do total.",
      enunciado:
        "Em um gráfico de setores com 240 ocorrências, o setor de um tipo de infração tem ângulo de 54°. O número de ocorrências desse tipo é",
      alternativas: ["54", "72", "129,6", "36", "15"],
      correta: 3,
      explicacao: "54 ÷ 360 = 0,15. E 0,15 · 240 = 36 ocorrências.",
      explicacaoErradas:
        "“54” toma o ângulo como quantidade. “72” usa 180° como volta completa. “129,6” lê 54° como 54%. “15” é o percentual do setor.",
      pegadinha: "Ler o ângulo como percentual. A volta completa tem 360°.",
      conhecimento: "Ângulo do setor = fração do total · 360°.",
    },
  ],
};
