import type { QuestaoFixacao } from "../tipos";

export const FIX_INTERJEICAO: QuestaoFixacao[] = [
  {
    id: "pi-interjeicao-1",
    licao: "interjeicao",
    nivel: 1,
    enunciado: "Em \"Ufa! Terminamos o relatório.\", a palavra \"Ufa\" exprime:",
    alternativas: [
      { t: "dor", por: "Dor seria 'Ai!', 'Ui!'." },
      { t: "alívio", por: "Correta: 'Ufa!' expressa alívio depois de um esforço." },
      { t: "advertência", por: "Advertência seria 'Cuidado!', 'Atenção!'." },
      { t: "chamamento", por: "Chamamento seria 'Ei!', 'Psiu!', 'Alô!'." },
      { t: "espanto", por: "Espanto seria 'Oh!', 'Nossa!'." },
    ],
    correta: 1,
    raciocinio: "A interjeição se classifica pelo sentimento que exprime no contexto: 'Ufa!' = alívio.",
  },
  {
    id: "pi-interjeicao-2",
    licao: "interjeicao",
    nivel: 2,
    enunciado: "Em qual frase a palavra destacada em maiúsculas é interjeição?",
    alternativas: [
      { t: "Tenha CUIDADO ao atravessar a pista molhada.", por: "Complemento de 'tenha', com função sintática: substantivo." },
      { t: "O CUIDADO com a pista evitou o acidente.", por: "Com artigo e como núcleo do sujeito: substantivo." },
      { t: "CUIDADO! A pista está molhada.", por: "Correta: isolada, com exclamação, exprime advertência e vale por uma frase." },
      { t: "Faltou CUIDADO na sinalização do trecho.", por: "Sujeito de 'faltou': substantivo." },
      { t: "Ele agiu com CUIDADO durante a vistoria.", por: "Núcleo da locução adverbial 'com cuidado': substantivo." },
    ],
    correta: 2,
    raciocinio: "A classe vem do uso: 'cuidado' é substantivo no dicionário, mas isolado, exclamativo e sem função na oração, torna-se interjeição (derivação imprópria).",
  },
  {
    id: "pi-interjeicao-3",
    licao: "interjeicao",
    nivel: 3,
    enunciado: "Sobre a função sintática da interjeição, é correto afirmar que ela:",
    alternativas: [
      { t: "funciona como adjunto adverbial de modo da oração seguinte.", por: "Não modifica verbo nenhum; fica fora da estrutura da oração." },
      { t: "exerce a função de vocativo quando chama alguém pelo nome.", por: "O vocativo é o nome chamado (Ó agente); a interjeição é outra coisa." },
      { t: "é o sujeito da frase exclamativa em que aparece sozinha.", por: "Frase de uma palavra não tem sujeito; a interjeição é a própria frase." },
      { t: "não exerce função sintática, pois equivale a uma frase.", por: "Correta: é frase nominal à parte, sem papel na oração vizinha." },
      { t: "atua como predicativo, por caracterizar a emoção do falante.", por: "Predicativo precisa de um termo ao qual se refira na oração." },
    ],
    correta: 3,
    raciocinio: "A interjeição forma sozinha uma frase (nominal). Por isso não é sujeito, nem complemento, nem adjunto de outra oração.",
  },
  {
    id: "pi-interjeicao-4",
    licao: "interjeicao",
    nivel: 4,
    enunciado: "Qual frase contém uma locução interjetiva?",
    alternativas: [
      { t: "Ei! Pare o veículo no acostamento.", por: "'Ei!' é interjeição simples, de uma palavra." },
      { t: "Ai de mim! Perdi o prazo do recurso.", por: "Correta: 'Ai de mim!' é um conjunto de palavras com valor de interjeição." },
      { t: "Psiu! O comandante vai começar a falar.", por: "'Psiu!' é interjeição simples." },
      { t: "Oba! Saiu o resultado da prova.", por: "'Oba!' é interjeição simples." },
      { t: "Ó agente, venha conferir este documento.", por: "'Ó agente' é vocativo; não há locução interjetiva." },
    ],
    correta: 1,
    raciocinio: "Locução interjetiva é a expressão de duas ou mais palavras que funciona como interjeição: Ai de mim! Meu Deus! Alto lá! Quem me dera!",
  },
];
