import type { QuestaoFixacao } from "../tipos";

export const FIX_PREPOSICAO: QuestaoFixacao[] = [
  {
    id: "pi-preposicao-1",
    licao: "preposicao",
    nivel: 1,
    enunciado: "Em \"Gosto de estudar.\", a palavra \"de\" é:",
    alternativas: [
      { t: "artigo definido no masculino", por: "'De' não determina substantivo; os artigos são o, a, um, uma e flexões." },
      { t: "conjunção que introduz oração", por: "Integrante é 'que' ou 'se', ligando orações." },
      { t: "preposição exigida pelo verbo", por: "Correta: quem gosta, gosta 'de' algo; a preposição liga o verbo ao seu complemento." },
      { t: "pronome relativo", por: "Não retoma nenhum termo anterior." },
      { t: "advérbio de modo", por: "Não indica circunstância; só liga termos." },
    ],
    correta: 2,
    raciocinio: "Preposição liga dois termos e torna o segundo dependente do primeiro. 'Gostar' é transitivo indireto e pede 'de': gosto de estudar, gosto do plantão.",
  },
  {
    id: "pi-preposicao-2",
    licao: "preposicao",
    nivel: 2,
    enunciado: "Qual frase emprega corretamente \"em vez de\" ou \"ao invés de\"?",
    alternativas: [
      { t: "Foi de ônibus ao invés de carro, por economia.", por: "Ônibus e carro não são opostos; para substituição, 'em vez de'." },
      { t: "Pediu café ao invés de chá na reunião.", por: "Café e chá não são opostos: 'em vez de'." },
      { t: "Assinou o termo ao invés de rubricar a folha.", por: "Assinar e rubricar não são ideias contrárias: 'em vez de'." },
      { t: "O agente subiu ao invés de descer a rampa.", por: "Correta: subir e descer são opostos, então 'ao invés de' cabe." },
      { t: "Usou caneta azul ao invés de caneta preta.", por: "Cores diferentes não são opostas: 'em vez de'." },
    ],
    correta: 3,
    raciocinio: "'Ao invés de' = ao contrário de: só com ideias opostas (subir × descer). 'Em vez de' = no lugar de: serve para qualquer substituição, inclusive de opostos.",
  },
  {
    id: "pi-preposicao-3",
    licao: "preposicao",
    nivel: 3,
    enunciado: "Qual frase está de acordo com a norma-padrão?",
    alternativas: [
      { t: "Antes do motorista sair, o agente conferiu o documento.", por: "'O motorista' é sujeito de 'sair': a norma pede 'antes de o motorista sair'." },
      { t: "Apesar dos agentes estarem cansados, a operação seguiu.", por: "Sujeito de infinitivo: 'apesar de os agentes estarem'." },
      { t: "Chegou a hora de o plantão noturno começar no posto.", por: "Correta: 'o plantão' é sujeito de 'começar', por isso não se contrai com 'de'." },
      { t: "O fato da equipe ter chegado cedo evitou o acidente.", por: "'A equipe' é sujeito de 'ter chegado': 'o fato de a equipe'." },
      { t: "Depois dos laudos serem assinados, o caso foi arquivado.", por: "Sujeito de infinitivo: 'depois de os laudos serem'." },
    ],
    correta: 2,
    raciocinio: "Se o artigo pertence ao sujeito de um infinitivo, a norma recomenda não contraí-lo com a preposição: antes de o, apesar de os, o fato de a. Muitas bancas aceitam a contração na linguagem comum, mas a forma culta é a separada.",
  },
  {
    id: "pi-preposicao-4",
    licao: "preposicao",
    nivel: 4,
    enunciado: "Em \"Agiu conforme o regulamento\" e \"Conforme os carros chegavam, eram vistoriados\", a palavra \"conforme\" é, respectivamente:",
    alternativas: [
      { t: "conjunção conformativa e preposição", por: "A ordem está invertida." },
      { t: "preposição e conjunção conformativa", por: "Na segunda frase, a ideia é de proporção, não de conformidade." },
      { t: "conjunção conformativa e conjunção proporcional", por: "Na primeira, 'conforme' liga um termo ('o regulamento'), não uma oração." },
      { t: "preposição e conjunção proporcional", por: "Correta: 1ª liga termo (= de acordo com); 2ª introduz oração com ideia de proporção (= à medida que)." },
      { t: "advérbio de modo e conjunção temporal", por: "Não modifica o verbo como advérbio; e a relação é de proporção." },
    ],
    correta: 3,
    raciocinio: "Depois de 'conforme' vem nome? Preposição acidental. Vem oração? Conjunção: conformativa (= como, segundo) ou proporcional (= à medida que), conforme o sentido.",
  },
];
