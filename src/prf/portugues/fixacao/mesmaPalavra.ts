import type { QuestaoFixacao } from "../tipos";

export const FIX_MESMA_PALAVRA: QuestaoFixacao[] = [
  {
    id: "pi-mesma-palavra-1",
    licao: "mesma-palavra",
    nivel: 2,
    enunciado: "Em \"Estudo todos os dias, e o estudo rende.\", as duas ocorrências de \"estudo\" são, respectivamente:",
    alternativas: [
      { t: "substantivo e verbo", por: "A ordem está invertida: a primeira está conjugada; a segunda tem artigo." },
      { t: "verbo e verbo", por: "A segunda vem com artigo ('o estudo') e é núcleo do sujeito." },
      { t: "verbo e substantivo", por: "Correta: 'estudo' (eu estudo) é verbo; 'o estudo' é substantivo." },
      { t: "substantivo e substantivo", por: "A primeira é conjugada na 1ª pessoa do presente." },
      { t: "verbo e adjetivo", por: "A segunda não caracteriza nome; é o próprio nome." },
    ],
    correta: 2,
    raciocinio: "Dá para conjugar (eu estudo, tu estudas)? Verbo. Tem artigo e é núcleo do sujeito? Substantivo.",
  },
  {
    id: "pi-mesma-palavra-2",
    licao: "mesma-palavra",
    nivel: 3,
    enunciado: "Em qual frase o \"se\" é partícula apassivadora?",
    alternativas: [
      { t: "Precisa-se de motoristas com experiência.", por: "'Precisar de' tem preposição: índice de indeterminação do sujeito." },
      { t: "O agente se feriu durante a abordagem.", por: "Reflexivo: o agente feriu a si mesmo." },
      { t: "Analisaram-se os laudos do acidente.", por: "Correta: 'os laudos foram analisados'; o verbo concorda com 'laudos'." },
      { t: "Não sei se o laudo foi analisado ontem.", por: "Inicia oração que troca por 'isso': conjunção integrante." },
      { t: "O motorista se queixou da autuação.", por: "'Queixar-se' é pronominal: parte integrante do verbo." },
    ],
    correta: 2,
    raciocinio: "Verbo transitivo direto + se, com termo que pode virar sujeito da passiva analítica (os laudos foram analisados) = partícula apassivadora; o verbo concorda com esse termo.",
  },
  {
    id: "pi-mesma-palavra-3",
    licao: "mesma-palavra",
    nivel: 4,
    enunciado: "Em \"Nós é que decidimos o que foi feito.\", as ocorrências de \"que\" são, respectivamente:",
    alternativas: [
      { t: "partícula expletiva e pronome relativo", por: "Correta: 'é que' pode sair (Nós decidimos); 'o que' = aquilo que, relativo com o demonstrativo 'o' como antecedente." },
      { t: "conjunção integrante e pronome relativo", por: "O primeiro não inicia oração substantiva; é só realce." },
      { t: "pronome relativo e conjunção integrante", por: "O primeiro não tem antecedente nem função; pode ser retirado." },
      { t: "partícula expletiva e conjunção integrante", por: "O segundo tem antecedente ('o' = aquilo) e é sujeito de 'foi feito'." },
      { t: "conjunção explicativa e pronome interrogativo", por: "Não há explicação nem pergunta." },
    ],
    correta: 0,
    raciocinio: "Retire 'é que': se a frase continuar igual (Nós decidimos), é partícula de realce. Em 'o que foi feito', o 'o' é demonstrativo (= aquilo) e o 'que' retoma esse 'o': relativo.",
  },
  {
    id: "pi-mesma-palavra-4",
    licao: "mesma-palavra",
    nivel: 5,
    enunciado: "Considere: \"Como se exigem documentos que se perdem com facilidade, é bom que todos guardem cópias.\" É correto afirmar que:",
    alternativas: [
      { t: "as duas ocorrências de \"se\" indeterminam o sujeito, pois não há quem pratique as ações.", por: "Com VTD (exigir, perder), o 'se' é apassivador: 'documentos são exigidos', 'são perdidos'." },
      { t: "o primeiro \"que\" é conjunção integrante, e o segundo é pronome relativo.", por: "A ordem está trocada: 'documentos que' (relativo); 'é bom que' (integrante)." },
      { t: "\"como\" é conjunção conformativa, equivalendo a \"conforme\" no período.", por: "No início, com o motivo, 'como' = porque: causal." },
      { t: "as duas ocorrências de \"se\" são apassivadoras, e por isso os verbos estão no plural.", por: "Correta: 'documentos' e o relativo 'que' (= documentos) são os sujeitos das passivas sintéticas." },
      { t: "\"todos\" é pronome adjetivo, pois acompanha o substantivo \"cópias\".", por: "'Todos' está sozinho, como sujeito de 'guardem': pronome substantivo." },
    ],
    correta: 3,
    raciocinio: "Exigir e perder são transitivos diretos: com 'se', formam voz passiva sintética e concordam com o sujeito (documentos; que = documentos). Os 'que' são relativo (retoma 'documentos') e integrante (é bom isso).",
  },
];
