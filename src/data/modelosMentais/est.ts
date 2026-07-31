import type { ModeloMental } from "../../lib/types";

export const MODELOS_MENTAIS_EST: ModeloMental[] = [
  {
    topico: "Conceitos básicos e tipos de variáveis",
    origem: "oficial",
    gancho: "Variável é qualitativa (categoria) ou quantitativa (número) — decida isso primeiro",
    modelo:
      "Qualitativa nominal não tem ordem (cor, sexo); qualitativa ordinal tem ordem (escolaridade); quantitativa discreta conta em números inteiros (número de filhos); quantitativa contínua mede em qualquer valor dentro de um intervalo (altura, peso). Classificar certo a variável é o primeiro passo para escolher a técnica estatística certa.",
  },
  {
    topico: "Organização e apresentação de dados",
    origem: "oficial",
    gancho: "Antes de calcular qualquer coisa, organize em tabela ou gráfico",
    modelo:
      "A distribuição de frequência (absoluta, relativa, acumulada) organiza dados brutos em tabela; histogramas, gráficos de barra e de setores apresentam visualmente essa mesma informação. A escolha do gráfico depende do tipo de variável — categórica usa barra ou setor, contínua usa histograma.",
  },
  {
    topico: "Medidas de posição e dispersão",
    origem: "oficial",
    gancho: "Posição diz onde o centro está; dispersão diz o quanto os dados se espalham dele",
    modelo:
      "Média, mediana e moda são medidas de posição, o \"centro\" dos dados. Desvio padrão, variância e amplitude são medidas de dispersão, o quanto os dados variam em torno desse centro — dois conjuntos podem ter a mesma média e dispersões completamente diferentes.",
  },
  {
    topico: "Probabilidade e amostragem",
    origem: "oficial",
    gancho: "Probabilidade é sobre o universo teórico; amostragem é sobre pegar um pedaço real dele",
    modelo:
      "Probabilidade calcula a chance de um evento a partir de espaço amostral e eventos favoráveis/possíveis. Amostragem é a técnica de selecionar uma parte da população para estudar sem precisar analisar todo mundo — pode ser aleatória simples, estratificada, sistemática ou por conglomerado.",
  },
  {
    topico: "Detecção de outliers (método do IQR)",
    origem: "oficial",
    gancho: "Outlier é o dado que foge do miolo — o IQR marca essa fronteira",
    modelo:
      "O IQR (intervalo interquartil) é Q3 menos Q1, a faixa onde estão os 50% centrais dos dados. Qualquer valor abaixo de Q1 − 1,5×IQR ou acima de Q3 + 1,5×IQR é considerado outlier — uma regra objetiva e fácil de aplicar em questão de prova.",
  },
  {
    topico: "Correlação e regressão linear simples (noções)",
    origem: "aposta",
    gancho: "Correlação diz se duas variáveis andam juntas; regressão tenta prever uma a partir da outra",
    modelo:
      "O coeficiente de correlação varia de -1 a +1: perto de +1 é relação direta forte, perto de -1 é relação inversa forte, perto de 0 é sem relação linear. A regressão linear usa essa relação para estimar uma reta que prevê valores de uma variável a partir da outra — mas correlação não implica causalidade, pegadinha clássica.",
  },
  {
    topico: "Distribuição normal — noções e leitura de gráfico",
    origem: "aposta",
    gancho: "A curva normal é simétrica, em forma de sino, com média = mediana = moda",
    modelo:
      "A maior concentração de dados fica perto da média, caindo simetricamente para os dois lados. A regra prática 68-95-99,7 diz que cerca de 68% dos dados ficam a 1 desvio-padrão da média, 95% a 2 desvios e 99,7% a 3 desvios — útil para interpretar gráfico sem calcular fórmula.",
  },
];
