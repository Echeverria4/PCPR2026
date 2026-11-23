import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-a09",
  resumo: {
    ideia:
      "Depois de coletar os dados, é preciso mostrá-los. Tabelas servem para conferir números; gráficos servem para enxergar o comportamento. A prova cobra a leitura de tabelas e gráficos, a escolha do gráfico certo, as frequências e as separatrizes (quartis, decis e percentis), que aparecem no box plot.",
    itens: [
      {
        termo: "Tabela x gráfico",
        faz: "A tabela facilita conferir cada número. O gráfico facilita ver o comportamento geral.",
      },
      {
        termo: "Séries estatísticas",
        faz: "Temporal ou histórica: varia o tempo (ano a ano). Geográfica: varia o lugar (por região). Especificativa: varia o tipo (por espécie de crime, por exemplo).",
      },
      {
        termo: "Frequências",
        faz: "Absoluta: quantidade. Relativa: quantidade ÷ total. Acumulada: soma das frequências até a classe. A acumulada da última classe é o total (ou 100%).",
        pista: "Para achar a frequência de uma classe, subtraia a acumulada da classe anterior.",
      },
      {
        termo: "Gráfico de setores (pizza)",
        faz: "Mostra a participação de cada parte no todo. Ângulo do setor = frequência relativa × 360°.",
      },
      {
        termo: "Gráfico de barras ou colunas",
        faz: "Para variáveis qualitativas ou quantitativas discretas que não estejam agrupadas em classes.",
      },
      {
        termo: "Histograma",
        faz: "Barras encostadas, para dados agrupados em classes. Número de classes pela regra do quadrado: √n. Amplitude total = maior − menor valor. Amplitude de classe = amplitude total ÷ número de classes.",
      },
      {
        termo: "Histograma com classes de larguras diferentes",
        faz: "A altura da barra é a densidade de frequência, e a área da barra (largura × altura) é a frequência relativa da classe.",
        pista: "Barra mais alta não quer dizer mais dados; conta a área.",
      },
      {
        termo: "Polígono de frequências e ogiva",
        faz: "O polígono liga os pontos médios do topo das barras do histograma. A ogiva é a linha das frequências acumuladas.",
      },
      {
        termo: "Ramos e folhas",
        faz: "Separa a dezena (ramo) da unidade (folha). Funciona como um histograma, mas guarda os dados originais, já em ordem.",
      },
      {
        termo: "Linha x dispersão",
        faz: "Gráfico de linha: um valor por momento (ocorrências por mês). Dispersão: pontos soltos, quando a cada valor de uma variável podem corresponder vários da outra (idade e salário).",
      },
      {
        termo: "Separatrizes",
        faz: "Quartis dividem o rol em 4 partes; decis, em 10; percentis, em 100. A mediana é Q2 = D5 = P50. Q1 deixa 25% dos dados abaixo dele; Q3 deixa 75%.",
      },
      {
        termo: "Box plot",
        faz: "Caixa de Q1 a Q3, com a mediana dentro. Intervalo interquartílico (IIQ) = Q3 − Q1. Limites: Q1 − 1,5 × IIQ e Q3 + 1,5 × IIQ. O que fica fora é valor atípico (outlier).",
        pista: "Metade dos dados fica dentro da caixa.",
      },
    ],
  },
  questoes: [
    {
      topico: "Tabelas",
      subassunto: "Séries estatísticas",
      dificuldade: 4,
      raciocinio: "Ver o que varia em cada tabela: o tempo, o lugar ou o tipo.",
      enunciado:
        "Associe cada tipo de série estatística à tabela correspondente.\n(1) Série temporal\n(2) Série geográfica\n(3) Série especificativa\n( ) Ocorrências registradas no país em 2024, separadas por tipo de crime.\n( ) Roubos de veículos registrados em 2024, separados por região do país.\n( ) Roubos de veículos registrados no país, ano a ano, de 2019 a 2024.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 2, 3.", "2, 3, 1.", "3, 1, 2.", "3, 2, 1.", "2, 1, 3."],
      correta: 3,
      explicacao:
        "Por tipo de crime, varia a espécie: especificativa (3). Por região, varia o lugar: geográfica (2). Ano a ano, varia o tempo: temporal (1).",
      explicacaoErradas:
        "As outras sequências trocam o fator que varia. Em todas as tabelas há um ano, mas só na terceira o ano muda de uma linha para outra.",
      pegadinha: "Aparecer um ano no título não torna a série temporal; é preciso que o tempo mude ao longo da tabela.",
      conhecimento: "Série temporal também se chama histórica ou cronológica.",
    },
    {
      topico: "Gráficos",
      subassunto: "Gráfico de setores",
      dificuldade: 5,
      raciocinio: "Converter o ângulo em porcentagem e completar 100%.",
      enunciado:
        "Um gráfico de setores mostra as ocorrências de um mês divididas em quatro tipos: furto (40%), roubo (25%), lesão corporal e outros. O setor da lesão corporal mede 54°. O percentual do setor “outros” é",
      alternativas: ["20%", "15%", "35%", "54%", "25%"],
      correta: 0,
      explicacao:
        "Lesão corporal: 54° ÷ 360° = 0,15 = 15%. Outros: 100% − 40% − 25% − 15% = 20%.",
      explicacaoErradas:
        "15% é a lesão corporal, não “outros”. 35% esquece de descontar a lesão. 54% confunde graus com porcentagem. 25% repete o roubo.",
      pegadinha: "O ângulo está em graus; para virar porcentagem, divida por 360°.",
      conhecimento: "Ângulo do setor = frequência relativa × 360°.",
    },
    {
      topico: "Histograma",
      subassunto: "Número e amplitude das classes",
      dificuldade: 5,
      raciocinio: "Raiz de n para o número de classes; amplitude total dividida por esse número.",
      enunciado:
        "Foram anotados 36 tempos de resposta, entre 12 e 60 minutos. Para montar um histograma, o número de classes será a raiz quadrada do número de observações, e as classes terão a mesma amplitude, cobrindo do menor ao maior valor. O histograma terá",
      alternativas: [
        "6 classes de amplitude 6.",
        "8 classes de amplitude 6.",
        "6 classes de amplitude 8.",
        "18 classes de amplitude 8.",
        "6 classes de amplitude 10.",
      ],
      correta: 2,
      explicacao: "Número de classes: √36 = 6. Amplitude total: 60 − 12 = 48. Amplitude de cada classe: 48 ÷ 6 = 8.",
      explicacaoErradas:
        "Amplitude 10 divide o maior valor (60) por 6, sem tirar o menor. 18 classes usa metade de 36, e não a raiz. As opções com amplitude 6 trocam a conta.",
      pegadinha: "Amplitude total é maior − menor, e não só o maior valor.",
      conhecimento: "Regra do quadrado: k = √n.",
    },
    {
      topico: "Histograma",
      subassunto: "Densidade de frequência",
      dificuldade: 5,
      raciocinio: "Em classes de larguras diferentes, a frequência é a área da barra.",
      enunciado:
        "Em um histograma, a altura de cada barra é a densidade de frequência relativa (frequência relativa por unidade). As classes são:\nA: de 0 a 10, altura 0,03;\nB: de 10 a 30, altura 0,02;\nC: de 30 a 60, altura 0,01.\nConsidere:\nI. A classe A, por ter a barra mais alta, é a que tem mais observações.\nII. A classe B reúne 40% das observações.\nIII. As classes A e C têm a mesma quantidade de observações.\nIV. A soma das alturas das barras é igual a 1.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I.", "Apenas I e II.", "Apenas II e IV.", "Apenas I, II e III.", "Apenas II e III."],
      correta: 4,
      explicacao:
        "Frequência = largura × altura. A: 10 × 0,03 = 30%. B: 20 × 0,02 = 40% (II). C: 30 × 0,01 = 30%, igual a A (III).",
      explicacaoErradas:
        "I está errada: a classe B tem mais observações (40%), embora a barra seja mais baixa. IV está errada: as alturas somam 0,06; o que soma 1 são as áreas.",
      pegadinha: "Com larguras diferentes, quem manda é a área, não a altura.",
      conhecimento: "Densidade = frequência ÷ amplitude da classe.",
    },
    {
      topico: "Gráficos",
      subassunto: "Ramos e folhas",
      dificuldade: 5,
      raciocinio: "Reconstruir os números, contar as posições e achar o mais frequente.",
      enunciado:
        "O diagrama de ramos e folhas mostra o número de ocorrências atendidas por equipe em um mês (o ramo é a dezena e a folha, a unidade):\n1 | 2 5 8\n2 | 0 3 3 7\n3 | 1 4 6 6 6\n4 | 2 9\nA mediana e a moda desses dados são, respectivamente,",
      alternativas: ["27 e 36.", "29 e 36.", "31 e 36.", "29 e 3.", "34 e 36."],
      correta: 1,
      explicacao:
        "São 14 valores: 12, 15, 18, 20, 23, 23, 27, 31, 34, 36, 36, 36, 42, 49. Mediana: média do 7º (27) e do 8º (31), igual a 29. Moda: 36, que aparece três vezes.",
      explicacaoErradas:
        "27 e 31 pegam só um dos termos centrais. 3 é o ramo da linha da moda, não a moda. 34 é o 9º termo.",
      pegadinha: "Cada folha é um dado: 3 | 6 6 6 significa três valores iguais a 36.",
      conhecimento: "O diagrama de ramos e folhas já mostra os dados em ordem.",
    },
    {
      topico: "Frequências",
      subassunto: "Frequência acumulada",
      dificuldade: 5,
      raciocinio: "Subtrair as frequências acumuladas nos extremos do intervalo.",
      enunciado:
        "A ogiva de uma pesquisa sobre o tempo de deslocamento até o trabalho, em horas, mostra estas frequências relativas acumuladas: até 2 h, 15%; até 4 h, 40%; até 6 h, 75%; até 8 h, 90%; até 10 h, 100%. O percentual de pessoas com tempo de 4 a 8 horas é",
      alternativas: ["75%", "50%", "35%", "90%", "60%"],
      correta: 1,
      explicacao: "Até 8 h: 90%. Até 4 h: 40%. Entre 4 e 8 h: 90% − 40% = 50%.",
      explicacaoErradas:
        "35% é só a faixa de 4 a 6 h. 75% e 90% são valores acumulados lidos diretamente. 60% subtrai 15% de 75%, outro intervalo (de 2 a 6 h).",
      pegadinha: "Acumulada não é a frequência da faixa; para uma faixa, subtraia.",
      conhecimento: "A ogiva sempre sobe e termina em 100%.",
    },
    {
      topico: "Separatrizes",
      subassunto: "Box plot",
      dificuldade: 5,
      raciocinio: "Calcular o IIQ e os limites de 1,5 × IIQ.",
      enunciado:
        "Em um box plot das idades dos servidores de um órgão, o primeiro quartil é 20, a mediana é 26 e o terceiro quartil é 32. Valores atípicos são os que ficam abaixo de Q1 − 1,5 × IIQ ou acima de Q3 + 1,5 × IIQ. Considere:\nI. O intervalo interquartílico é 12.\nII. Metade dos dados está entre 20 e 32.\nIII. Um valor igual a 55 é atípico.\nIV. Um valor igual a 3 é atípico.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I e II.", "Apenas I e III.", "Apenas II, III e IV.", "I, II, III e IV.", "Apenas I, II e III."],
      correta: 4,
      explicacao:
        "IIQ: 32 − 20 = 12 (I). Entre Q1 e Q3 ficam 50% dos dados (II). Limites: 20 − 18 = 2 e 32 + 18 = 50. Então 55 está fora (III).",
      explicacaoErradas:
        "IV está errada: 3 está acima do limite inferior, que é 2. Por isso, não é atípico, embora seja bem menor que os demais.",
      pegadinha: "O limite inferior é 2, e não o Q1. Valor abaixo de Q1 não é, só por isso, atípico.",
      conhecimento: "IIQ = Q3 − Q1; limites a 1,5 IIQ dos quartis.",
    },
    {
      topico: "Separatrizes",
      subassunto: "Quartis, decis e percentis",
      dificuldade: 5,
      raciocinio: "Traduzir cada separatriz em percentual de dados abaixo dela.",
      enunciado: "Sobre as separatrizes de um conjunto de dados, é correto afirmar:",
      alternativas: [
        "Q2, D5 e P50 são iguais à mediana.",
        "Q1 é igual ao segundo decil, D2.",
        "Q3 deixa 75% dos dados acima dele.",
        "O nono decil deixa 9% dos dados abaixo dele.",
        "Os três quartis dividem o rol em três partes iguais.",
      ],
      correta: 0,
      explicacao: "Todos deixam metade dos dados abaixo: Q2 = 2/4, D5 = 5/10, P50 = 50/100. Por isso coincidem com a mediana.",
      explicacaoErradas:
        "Q1 deixa 25% abaixo, e D2 só 20%. Q3 deixa 75% abaixo, não acima. D9 deixa 90% abaixo. Três quartis dividem o rol em quatro partes.",
      pegadinha: "Três marcos cortam o rol em quatro pedaços, por isso o nome “quartil”.",
      conhecimento: "Quartil: 4 partes; decil: 10; percentil: 100.",
    },
    {
      topico: "Gráficos",
      subassunto: "Escolha do gráfico",
      dificuldade: 5,
      raciocinio: "Ver o que cada situação precisa mostrar.",
      enunciado:
        "Associe cada gráfico à situação em que ele é mais adequado.\n(1) Gráfico de linha\n(2) Gráfico de dispersão\n(3) Gráfico de setores\n(4) Histograma\n( ) Alturas dos candidatos, agrupadas em classes de 5 cm.\n( ) Número de ocorrências mês a mês ao longo do ano.\n( ) Participação de cada tipo de crime no total do ano.\n( ) Idade e salário de cada servidor de um órgão.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 4, 3, 2.", "4, 1, 2, 3.", "2, 1, 3, 4.", "4, 1, 3, 2.", "3, 2, 4, 1."],
      correta: 3,
      explicacao:
        "Dados em classes: histograma (4). Evolução no tempo: linha (1). Parte do todo: setores (3). Duas variáveis em que a mesma idade pode ter salários diferentes: dispersão (2).",
      explicacaoErradas:
        "Trocar setores por dispersão confunde parte do todo com relação entre duas variáveis. Usar linha para as alturas ignora que elas estão em classes, caso do histograma.",
      pegadinha: "Linha: um valor por momento. Dispersão: vários valores possíveis para cada idade.",
      conhecimento: "Histograma tem barras encostadas, porque as classes são contínuas.",
    },
    {
      topico: "Frequências",
      subassunto: "Completar a tabela",
      dificuldade: 5,
      raciocinio: "Usar a frequência acumulada para achar as frequências que faltam.",
      enunciado:
        "A tabela mostra o tempo, em minutos, de 40 atendimentos (fi = frequência; Fac = frequência acumulada):\nde 0 a 10: fi = 4; Fac = 4\nde 10 a 20: fi = ?; Fac = 12\nde 20 a 30: fi = 10; Fac = ?\nde 30 a 40: fi = ?; Fac = 32\nde 40 a 50: fi = 8; Fac = 40\nO percentual de atendimentos com tempo de 20 a 40 minutos (sem incluir 40) é",
      alternativas: ["25%", "30%", "50%", "80%", "55%"],
      correta: 2,
      explicacao:
        "De 20 a 30: 10. Acumulada até 30: 12 + 10 = 22. De 30 a 40: 32 − 22 = 10. De 20 a 40: 20 atendimentos, ou 20 ÷ 40 = 50%.",
      explicacaoErradas:
        "25% conta só a classe de 20 a 30. 80% e 55% leem a acumulada até 40 (32) e até 30 (22) como se fossem a faixa. 30% é a acumulada até 20 (12).",
      pegadinha: "A acumulada inclui todas as classes anteriores; para uma faixa, subtraia.",
      conhecimento: "fi = Fac da classe − Fac da classe anterior.",
    },
  ],
};
