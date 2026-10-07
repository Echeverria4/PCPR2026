import type { Question } from "../../lib/types";

export const QUESTOES_EST: Question[] = [
  {
    id: "est-001",
    materia: "est",
    topico: "Medidas de tendência central",
    enunciado:
      "O número de ocorrências registradas em 5 plantões consecutivos foi: 8, 12, 10, 12, 8. A moda dessa distribuição é:",
    alternativas: ["8", "10", "8 e 12 (bimodal)", "12", "Não existe moda"],
    correta: 2,
    explicacao:
      "A moda é o valor que mais se repete na série. Nesse conjunto, tanto 8 quanto 12 aparecem duas vezes cada, mais do que qualquer outro valor, caracterizando uma distribuição bimodal.",
    origem: "banco",
  },
  {
    id: "est-002",
    materia: "est",
    topico: "Medidas de tendência central",
    enunciado:
      "Considerando os valores 4, 7, 9, 10, 15, a mediana dessa amostra é:",
    alternativas: ["7", "9", "10", "8,5", "9,5"],
    correta: 1,
    explicacao:
      "Com 5 valores já ordenados (4, 7, 9, 10, 15), a mediana é o valor central, ou seja, o terceiro elemento: 9.",
    origem: "banco",
  },
  {
    id: "est-003",
    materia: "est",
    topico: "Medidas de tendência central",
    enunciado:
      "A média aritmética simples do número de inquéritos concluídos em 4 meses (10, 14, 18, 22) é:",
    alternativas: ["14", "15", "16", "18", "20"],
    correta: 2,
    explicacao:
      "Média = (10 + 14 + 18 + 22) / 4 = 64 / 4 = 16.",
    origem: "banco",
  },
  {
    id: "est-004",
    materia: "est",
    topico: "Probabilidade básica",
    enunciado:
      "Em um sorteio para definir a escala de plantão entre 4 policiais (A, B, C e D), a probabilidade de que o policial A seja sorteado para o plantão é de:",
    alternativas: ["1/2", "1/3", "1/4", "1/5", "2/4"],
    correta: 2,
    explicacao:
      "Com 4 policiais igualmente prováveis de serem sorteados, a probabilidade de A ser o sorteado é 1 favorável em 4 possíveis, ou seja, 1/4.",
    origem: "banco",
  },
  {
    id: "est-005",
    materia: "est",
    topico: "Interpretação de gráficos e tabelas",
    enunciado:
      "Em uma tabela de distribuição de frequências, a \"frequência relativa\" de uma categoria representa:",
    alternativas: [
      "O número absoluto de ocorrências daquela categoria",
      "A proporção (ou percentual) que aquela categoria representa em relação ao total de observações",
      "A soma acumulada das frequências até aquela categoria",
      "O desvio-padrão da categoria em relação à média geral",
      "A categoria de maior frequência absoluta na tabela",
    ],
    correta: 1,
    explicacao:
      "A frequência relativa é obtida dividindo-se a frequência absoluta de uma categoria pelo total de observações, geralmente expressa em proporção ou percentual, permitindo comparar categorias mesmo entre amostras de tamanhos diferentes.",
    origem: "banco",
  },
  {
    id: "est-006",
    materia: "est",
    topico: "Medidas de dispersão",
    enunciado:
      "Uma medida estatística que indica o grau de dispersão dos dados em torno da média, sendo mais sensível a valores extremos, é:",
    alternativas: ["A moda", "A mediana", "O desvio-padrão", "O primeiro quartil", "A frequência relativa"],
    correta: 2,
    explicacao:
      "O desvio-padrão mede a dispersão dos dados em relação à média, sendo calculado a partir da raiz quadrada da variância; por considerar os quadrados dos desvios, é sensível a valores extremos (outliers).",
    origem: "banco",
  },
  {
    id: "est-007",
    materia: "est",
    topico: "Conceitos básicos e tipos de variáveis",
    enunciado:
      "Em estatística, a variável \"número de disparos efetuados em uma ocorrência\" é classificada como uma variável:",
    alternativas: [
      "Qualitativa nominal",
      "Qualitativa ordinal",
      "Quantitativa discreta",
      "Quantitativa contínua",
      "Qualitativa binária",
    ],
    correta: 2,
    explicacao:
      "Variáveis quantitativas discretas assumem valores numéricos contáveis, geralmente inteiros (0, 1, 2, 3...), como o número de disparos, que não pode assumir valores fracionários. Variáveis quantitativas contínuas assumem qualquer valor num intervalo (peso, altura, tempo); variáveis qualitativas (nominais ou ordinais) representam categorias, não quantidades.",
    origem: "banco",
  },
  {
    id: "est-008",
    materia: "est",
    topico: "Conceitos básicos e tipos de variáveis",
    enunciado: "Assinale a alternativa que apresenta um exemplo de variável quantitativa CONTÍNUA.",
    alternativas: [
      "Número de policiais em um plantão",
      "Sexo do entrevistado",
      "Tempo, em minutos, de resposta a uma ocorrência",
      "Grau de escolaridade (fundamental, médio, superior)",
      "Número de veículos apreendidos",
    ],
    correta: 2,
    explicacao:
      "O tempo de resposta é uma variável quantitativa contínua, pois pode assumir qualquer valor dentro de um intervalo (incluindo frações, como 4,37 minutos). Número de policiais e de veículos são quantitativas discretas; sexo é qualitativa nominal; escolaridade é qualitativa ordinal (há uma ordem entre as categorias).",
    origem: "banco",
  },
  {
    id: "est-009",
    materia: "est",
    topico: "Organização e apresentação de dados",
    enunciado: "Em uma tabela de distribuição de frequências, a \"frequência acumulada\" de uma classe representa:",
    alternativas: [
      "O percentual da classe em relação ao total.",
      "A soma das frequências de todas as classes até e incluindo aquela classe.",
      "O valor médio de todas as classes anteriores.",
      "A frequência absoluta multiplicada pelo número de classes.",
      "A diferença entre a frequência da classe e a média geral.",
    ],
    correta: 1,
    explicacao:
      "A frequência acumulada de uma classe é a soma de todas as frequências absolutas (ou relativas) das classes anteriores, incluindo a própria classe — útil para responder perguntas do tipo \"quantas observações são menores ou iguais a determinado valor\".",
    origem: "banco",
  },
  {
    id: "est-010",
    materia: "est",
    topico: "Probabilidade e amostragem",
    enunciado:
      "Um pesquisador deseja selecionar uma amostra de policiais para uma pesquisa, dividindo previamente a população em grupos por cargo (delegado, agente, escrivão) e sorteando aleatoriamente participantes dentro de cada grupo, proporcionalmente ao tamanho de cada um. Esse procedimento é um exemplo de amostragem:",
    alternativas: ["Aleatória simples", "Sistemática", "Estratificada", "Por conveniência", "Por cotas"],
    correta: 2,
    explicacao:
      "A amostragem estratificada divide a população em subgrupos (estratos) homogêneos internamente segundo algum critério relevante (aqui, o cargo) e sorteia aleatoriamente dentro de cada estrato, geralmente proporcionalmente ao seu tamanho — garantindo representatividade de todos os grupos. Difere da amostragem aleatória simples (sorteio direto de toda a população) e da sistemática (seleção a intervalos regulares).",
    origem: "banco",
  },
  {
    id: "est-011",
    materia: "est",
    topico: "Probabilidade e amostragem",
    enunciado:
      "A probabilidade de um dado não viciado (de 6 faces) resultar em um número par, em dois lançamentos independentes consecutivos, é de:",
    alternativas: ["1/2", "1/3", "1/4", "1/6", "1/36"],
    correta: 2,
    explicacao:
      "A probabilidade de sair número par em um lançamento é 3/6 = 1/2. Como os lançamentos são eventos independentes, a probabilidade de ambos resultarem em número par é o produto das probabilidades individuais: 1/2 × 1/2 = 1/4.",
    origem: "banco",
  },
  {
    id: "est-012",
    materia: "est",
    topico: "Detecção de outliers (método do IQR)",
    enunciado:
      "No método do intervalo interquartílico (IQR) para detecção de outliers, um valor é considerado outlier (atípico) quando é:",
    alternativas: [
      "Igual à mediana da distribuição.",
      "Menor que Q1 − 1,5×IQR ou maior que Q3 + 1,5×IQR, sendo IQR = Q3 − Q1.",
      "Igual à média aritmética da amostra.",
      "Menor que o menor valor observado na amostra.",
      "Sempre igual à moda da distribuição.",
    ],
    correta: 1,
    explicacao:
      "O método do IQR calcula IQR = Q3 − Q1 (diferença entre o terceiro e o primeiro quartil) e considera outliers os valores que caem abaixo do limite inferior (Q1 − 1,5×IQR) ou acima do limite superior (Q3 + 1,5×IQR) — regra prática amplamente usada para identificar dados atípicos sem depender de a distribuição ser normal.",
    origem: "banco",
  },
  {
    id: "est-013",
    materia: "est",
    topico: "Detecção de outliers (método do IQR)",
    enunciado:
      "Considerando Q1 = 10 e Q3 = 22 em uma distribuição, o limite superior para detecção de outliers pelo método do IQR (1,5×IQR) é:",
    alternativas: ["22", "28", "34", "40", "46"],
    correta: 3,
    explicacao:
      "IQR = Q3 − Q1 = 22 − 10 = 12. Limite superior = Q3 + 1,5×IQR = 22 + 1,5×12 = 22 + 18 = 40. Valores acima de 40 seriam considerados outliers pelo critério do IQR.",
    origem: "banco",
  },
  {
    id: "est-014",
    materia: "est",
    topico: "Conceitos básicos e tipos de variáveis",
    enunciado: "Em estatística, a diferença fundamental entre \"população\" e \"amostra\" é que:",
    alternativas: [
      "População e amostra são termos sinônimos, sem diferença metodológica.",
      "População é o conjunto total de elementos sobre os quais se deseja obter conclusões; amostra é um subconjunto selecionado da população, usado para inferir características do todo.",
      "Amostra é sempre maior que a população.",
      "População se refere apenas a seres humanos, nunca a objetos ou eventos.",
      "Amostra é escolhida sempre de forma não aleatória.",
    ],
    correta: 1,
    explicacao:
      "População é o conjunto completo de elementos de interesse do estudo; amostra é um subconjunto dela, selecionado (idealmente de forma aleatória e representativa) para permitir inferências estatísticas sobre a população total sem a necessidade de examinar cada elemento individualmente.",
    origem: "banco",
  },
  {
    id: "est-015",
    materia: "est",
    topico: "Correlação e regressão linear simples (noções)",
    enunciado:
      "O coeficiente de correlação de Pearson (r), que varia de -1 a +1, quando apresenta valor próximo de -1, indica que:",
    alternativas: [
      "Não há relação linear entre as duas variáveis.",
      "Há correlação negativa forte: quando uma variável aumenta, a outra tende a diminuir.",
      "Há correlação positiva forte: quando uma variável aumenta, a outra também aumenta.",
      "As duas variáveis são idênticas.",
      "A relação entre as variáveis é necessariamente de causalidade.",
    ],
    correta: 1,
    explicacao:
      "Valores de r próximos de -1 indicam correlação negativa forte: quando uma variável aumenta, a outra tende a diminuir. Valores próximos de +1 indicam correlação positiva forte, e valores próximos de 0 indicam ausência de relação linear. Correlação, seja positiva ou negativa, nunca implica causalidade por si só.",
    origem: "banco",
  },
  {
    id: "est-016",
    materia: "est",
    topico: "Correlação e regressão linear simples (noções)",
    enunciado:
      "Um estudo observou que, em determinado município, o número de sorveterias e o número de afogamentos aumentam juntos durante o verão, apresentando alta correlação positiva. A interpretação estatisticamente correta desse achado é que:",
    alternativas: [
      "As sorveterias necessariamente causam os afogamentos, devendo ser fiscalizadas.",
      "Correlação não implica causalidade — o aumento de ambas as variáveis provavelmente decorre de um terceiro fator comum, como a maior frequência a praias/piscinas no calor.",
      "Os afogamentos necessariamente causam o aumento no consumo de sorvete.",
      "A correlação apresentada invalida qualquer análise estatística posterior sobre o tema.",
      "Esse tipo de correlação só pode ser medido pela regressão linear múltipla, nunca pelo coeficiente de Pearson.",
    ],
    correta: 1,
    explicacao:
      "É fundamental lembrar que correlação não implica causalidade — duas variáveis podem se mover juntas por coincidência ou por um terceiro fator comum (nesse caso, o calor do verão, que aumenta tanto o consumo de sorvete quanto a frequência a locais com risco de afogamento), sem que uma cause diretamente a outra.",
    origem: "banco",
  },
  {
    id: "est-017",
    materia: "est",
    topico: "Distribuição normal — noções e leitura de gráfico",
    enunciado:
      "Na distribuição normal, representada pela clássica curva em forma de sino simétrica em torno da média, é correto afirmar que:",
    alternativas: [
      "Média, mediana e moda coincidem no centro da curva.",
      "A média é sempre maior que a mediana e a moda.",
      "A curva é sempre assimétrica à direita.",
      "O desvio-padrão não tem qualquer relação com a dispersão dos dados nessa distribuição.",
      "A moda está sempre nas extremidades da curva, nunca no centro.",
    ],
    correta: 0,
    explicacao:
      "Na distribuição normal, média, mediana e moda coincidem no centro da curva, que é simétrica em torno desse valor central — quando essas três medidas se distanciam, isso indica assimetria (à esquerda ou à direita), afastando-se do padrão normal.",
    origem: "banco",
  },
  {
    id: "est-018",
    materia: "est",
    topico: "Distribuição normal — noções e leitura de gráfico",
    enunciado:
      "Segundo a regra empírica (regra 68-95-99,7) aplicável à distribuição normal, a proporção aproximada de valores que ficam a até 2 desvios-padrão da média é de:",
    alternativas: ["50%", "68%", "95%", "99,7%", "100%"],
    correta: 2,
    explicacao:
      "Pela regra 68-95-99,7: aproximadamente 68% dos valores ficam a até 1 desvio-padrão da média, cerca de 95% a até 2 desvios-padrão, e por volta de 99,7% a até 3 desvios-padrão — regra usada para leitura rápida da dispersão de dados que seguem uma distribuição normal.",
    origem: "banco",
  },

  {
    id: "est-019",
    materia: "est",
    topico: "Média e mediana — efeito da inclusão de novos valores",
    enunciado:
      "Um conjunto de 36 idades de funcionários de uma empresa tem média 42 anos e mediana 41 anos. Quatro novos funcionários são incorporados ao grupo, com idades de 38, 38, 42 e 50 anos. Em relação aos novos valores de média e mediana desse grupo, agora com 40 funcionários, é correto afirmar que:",
    alternativas: [
      "a nova média passa a ser 42,5 anos, e a nova mediana permanece igual a 41 anos.",
      "a nova média passa a ser 42,5 anos, e a nova mediana passa a ser 41,2 anos.",
      "a nova média permanece igual a 42 anos, e a nova mediana permanece igual a 41 anos.",
      "a nova média permanece igual a 42 anos, mas a mediana não pode ser determinada com esses dados.",
      "nada se pode afirmar, apenas com esses dados, sobre os novos valores da média e da mediana.",
    ],
    correta: 3,
    explicacao:
      "A nova média é obtida somando o total anterior (42 × 36 = 1.512) aos quatro novos valores (38+38+42+50 = 168) e dividindo pelo novo total de funcionários: (1.512+168)/40 = 1.680/40 = 42 — a média permanece 42. Já a nova mediana não pode ser determinada apenas com a média e a mediana anteriores: como não se conhece a distribuição completa das 36 idades originais (apenas que a mediana era 41), a posição exata dos quatro novos valores na ordenação final do grupo de 40 pode alterar a mediana de formas diferentes, a depender de como as idades originais estavam distribuídas.",
    origem: "banco",
    fonte: "Adaptada de FGV — 2025 — SEFAZ-PR — Auditor Fiscal",
  },
  {
    id: "est-020",
    materia: "est",
    topico: "Média e mediana — sistema de equações",
    enunciado:
      "A média aritmética de 4 números inteiros positivos é 9, e a mediana dessa lista vale 8. Sabendo que a diferença entre o maior e o menor desses números é igual a 10, o maior deles vale:",
    alternativas: [
      "15.",
      "14.",
      "12.",
      "11.",
      "10.",
    ],
    correta: 0,
    explicacao:
      "Sejam os quatro números ordenados a ≤ b ≤ c ≤ d. Da média: a+b+c+d = 36. Da mediana, (b+c)/2 = 8, logo b+c = 16, e portanto a+d = 36 − 16 = 20. Da diferença d − a = 10, combinando com a+d = 20, obtém-se a = 5 e d = 15. O maior número da lista é, portanto, 15.",
    origem: "banco",
    fonte: "Adaptada de FGV — 2025 — Polícia Militar de SP — Oficial",
  },
  {
    id: "est-021",
    materia: "est",
    topico: "Média e mediana — supressão de elemento",
    enunciado:
      "Uma lista é composta por 4 números positivos e distintos, cuja média é 7,0 e a mediana é 7,5. Ao suprimir o menor desses números, a média dos 3 restantes passa a ser 8,0. A diferença entre o maior e o menor valor dessa lista é:",
    alternativas: [
      "7,0.",
      "6,5.",
      "6,0.",
      "5,5.",
      "5,0.",
    ],
    correta: 4,
    explicacao:
      "Sejam os números ordenados a < b < c < d. Da média: a+b+c+d = 28. Da mediana, (b+c)/2 = 7,5, logo b+c = 15. Suprimindo o menor (a), os 3 restantes somam 28 − a, com média 8,0, logo 28 − a = 24, ou seja, a = 4. Como b+c = 15, o maior valor é d = 24 − 15 = 9. A diferença entre o maior e o menor é d − a = 9 − 4 = 5,0.",
    origem: "banco",
    fonte: "Adaptada de FGV — 2026 — TJ-SC — Analista Contábil-Econômico",
  },
  {
    id: "est-022",
    materia: "est",
    topico: "Mediana, desvio interquartil e desvio absoluto médio",
    enunciado:
      "Considere o conjunto de notas de 10 alunos em uma avaliação: 7, 8, 6, 9, 10, 5, 7, 8, 6, 9. A mediana, o desvio interquartil (Q3 − Q1) e o desvio absoluto médio desse conjunto são, respectivamente, iguais a:",
    alternativas: [
      "7,5; 2,0 e 1,3.",
      "7,5; 3,0 e 1,3.",
      "7,5; 3,0 e 1,5.",
      "8,0; 3,0 e 13/11.",
      "8,0; 2,0 e 1,5.",
    ],
    correta: 1,
    explicacao:
      "Ordenando: 5, 6, 6, 7, 7, 8, 8, 9, 9, 10. A mediana é a média dos dois valores centrais: (7+8)/2 = 7,5. Separando a metade inferior {5,6,6,7,7} e a metade superior {8,8,9,9,10}, Q1 (mediana da metade inferior) = 6 e Q3 (mediana da metade superior) = 9, logo o desvio interquartil é 9 − 6 = 3,0. A média do conjunto é 75/10 = 7,5; a soma dos desvios absolutos em relação a ela totaliza 13,0, resultando em desvio absoluto médio de 13,0/10 = 1,3.",
    origem: "banco",
    fonte: "Adaptada de FGV — 2025 — TCE-RR — Auditor de Controle Externo",
  },
  {
    id: "est-023",
    materia: "est",
    topico: "Cálculo do desvio-padrão",
    enunciado:
      "Em uma prova de concurso, as notas de dez candidatos foram: 7, 7, 7, 7, 7, 7, 7, 8, 9, 10. O desvio-padrão (populacional) dessas notas é aproximadamente:",
    alternativas: [
      "0,92.",
      "0,95.",
      "0,98.",
      "1,02.",
      "1,05.",
    ],
    correta: 3,
    explicacao:
      "A média é (7×7+8+9+10)/10 = 76/10 = 7,6. Os quadrados dos desvios em relação à média somam: 7×(7−7,6)² + (8−7,6)² + (9−7,6)² + (10−7,6)² = 2,52 + 0,16 + 1,96 + 5,76 = 10,4. Dividindo pelos 10 valores (desvio-padrão populacional) e extraindo a raiz quadrada: √(10,4/10) = √1,04 ≈ 1,02.",
    origem: "banco",
    fonte: "Adaptada de FGV — 2026 — Prefeitura de São José dos Campos-SP — Professor de Matemática",
  },
  {
    id: "est-024",
    materia: "est",
    topico: "Efeito de transformações lineares sobre média e desvio-padrão",
    enunciado:
      "Um conjunto de dados tem média igual a 6,0 e desvio-padrão igual a 1,50. Somando-se 2 unidades a cada um dos valores desse conjunto, os novos valores de média e desvio-padrão passam a ser, respectivamente:",
    alternativas: [
      "6,0 e 1,50.",
      "8,0 e 1,50.",
      "8,0 e 2,25.",
      "8,0 e 3,50.",
      "12,0 e 3,00.",
    ],
    correta: 1,
    explicacao:
      "Somar uma constante a todos os valores de um conjunto desloca a média pela mesma constante (6,0+2=8,0), mas não altera a dispersão dos dados em torno da média — por isso o desvio-padrão permanece 1,50. Esse efeito é diferente do de multiplicar os valores por uma constante, que altera tanto a média quanto o desvio-padrão proporcionalmente.",
    origem: "banco",
    fonte: "Adaptada de FGV — 2026 — SEDUC-SP — Professor de Matemática",
  },
  {
    id: "est-025",
    materia: "est",
    topico: "Efeito de transformações lineares sobre média e desvio-padrão",
    enunciado:
      "Os salários de uma empresa têm, atualmente, média de R$ 4.000,00 e desvio-padrão de R$ 300,00. A diretoria avalia dois cenários de reajuste para todos os funcionários: no Cenário A, um aumento fixo de R$ 200,00 para cada um; no Cenário B, um aumento de 5% sobre o salário atual de cada um. Com base nisso, é correto afirmar que:",
    alternativas: [
      "no Cenário A, a média passaria a ser R$ 4.200,00, e no Cenário B, o desvio-padrão passaria a ser R$ 315,00.",
      "no Cenário A, a média permaneceria em R$ 4.000,00, e no Cenário B, o desvio-padrão passaria a ser R$ 315,00.",
      "no Cenário A, a média passaria a ser R$ 4.200,00, e no Cenário B, o desvio-padrão permaneceria em R$ 300,00.",
      "no Cenário A, o desvio-padrão passaria a ser R$ 315,00, e no Cenário B, a média passaria a ser R$ 4.200,00.",
      "em ambos os cenários, a média e o desvio-padrão permaneceriam inalterados.",
    ],
    correta: 0,
    explicacao:
      "Um aumento fixo (Cenário A) desloca a média pelo mesmo valor (4.000+200=4.200), sem alterar o desvio-padrão, que permanece 300, pois a dispersão entre os salários não muda. Um aumento percentual (Cenário B) multiplica tanto a média quanto o desvio-padrão pelo mesmo fator (1,05): a média vai a 4.000×1,05=4.200, e o desvio-padrão vai a 300×1,05=315.",
    origem: "banco",
    fonte: "Adaptada de FGV — 2026 — TJ-SC — Analista Contábil",
  },
];
