import type { Licao } from "../tipos";

export const ADVERBIO: Licao = {
  id: "adverbio",
  titulo: "Advérbio",
  classe: "adverbio",
  resumo: "A palavra **invariável** que acrescenta uma circunstância (tempo, lugar, modo, intensidade, negação...) ao verbo, ao adjetivo ou a outro advérbio.",
  modelo: [
    {
      tipo: "chaves",
      titulo: "Advérbio",
      ramos: [
        { rotulo: "Tempo", classe: "adverbio", exemplo: "ontem, hoje, cedo, já, sempre, nunca" },
        { rotulo: "Lugar", classe: "adverbio", exemplo: "aqui, aí, ali, longe, perto, abaixo" },
        { rotulo: "Modo", classe: "adverbio", exemplo: "bem, mal, assim, depressa, corretamente" },
        { rotulo: "Intensidade", classe: "adverbio", exemplo: "muito, pouco, bastante, tão, demais, quase" },
        { rotulo: "Afirmação, negação, dúvida", classe: "adverbio", exemplo: "sim, certamente / não, jamais / talvez, provavelmente" },
        { rotulo: "Locução adverbial", classe: "adverbio", exemplo: "de repente, às pressas, em breve, com cuidado" },
      ],
    },
    {
      tipo: "macete",
      texto: "Advérbio é o **adjetivo do verbo** — e, como o verbo não tem gênero, ele não concorda com nada.",
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Advérbio é a palavra invariável que modifica o **verbo** (chegou **cedo**), o **adjetivo** (**muito** rápido) ou outro **advérbio** (**bem** cedo), indicando uma circunstância. Alguns modificam a oração inteira (**Felizmente**, ninguém se feriu).",
        },
        {
          tipo: "frase",
          palavras: [
            ["Ontem", "adverbio", "tempo"],
            ["o", "artigo"],
            ["agente", "substantivo"],
            ["chegou", "verbo"],
            ["bem", "adverbio", "intensidade"],
            ["cedo", "adverbio", "tempo"],
            ["e", "conjuncao"],
            ["agiu", "verbo"],
            ["muito", "adverbio", "intensidade"],
            ["corretamente", "adverbio", "modo"],
            ["."],
          ],
          comentario: "'Bem' modifica o advérbio 'cedo'; 'muito' modifica o advérbio 'corretamente'; os demais modificam verbos.",
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "perguntas",
          itens: [
            "Responde, sobre o verbo, a **quando? onde? como? quanto? de que modo?**",
            "Fica igual se o sujeito for para o plural ou para o feminino?",
            "Está modificando um adjetivo ou outro advérbio (muito **bom**, tão **longe**)?",
            "Pode ser deslocado na frase sem mudar a estrutura (Ontem chegou / Chegou ontem)?",
          ],
        },
      ],
    },
    {
      letra: "C",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Na oração, o advérbio é **adjunto adverbial**, classificado pela circunstância: de tempo, lugar, modo, intensidade, negação, causa, finalidade, instrumento, companhia. Uma oração inteira pode ter esse papel (oração subordinada adverbial).",
        },
        {
          tipo: "nota",
          texto:
            "Palavras como 'só', 'até', 'inclusive', 'exceto', 'eis', 'também', 'apenas' (inclusão, exclusão, designação, realce) são chamadas pela NGB de **palavras denotativas**: não se classificam como advérbio, embora muitas gramáticas e bancas as tratem assim. Sem o critério explícito na questão, prefira 'palavra denotativa de inclusão/exclusão'.",
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Advérbio × pronome indefinido",
          colunas: [
            { titulo: "Advérbio (não varia)", classe: "adverbio", itens: ["Elas trabalham **muito**.", "Estão **bastante** cansadas.", "Ficou **meio** confusa."] },
            { titulo: "Pronome / numeral (varia)", classe: "pronome", itens: ["Fizeram **muitas** horas extras.", "Há **bastantes** motivos.", "Comeu **meia** porção."] },
          ],
          sintese: "Junto de verbo, adjetivo ou advérbio: invariável. Junto de substantivo: concorda com ele.",
        },
        {
          tipo: "comparativo",
          titulo: "Só × sós",
          colunas: [
            { titulo: "Só = apenas", classe: "adverbio", itens: ["**Só** elas vieram.", "Invariável (palavra denotativa)"] },
            { titulo: "Só = sozinho", classe: "adjetivo", itens: ["Elas ficaram **sós**.", "Adjetivo: concorda"] },
          ],
          sintese: "'A sós' (locução adverbial) é sempre assim: falaram a sós.",
        },
      ],
    },
    {
      letra: "E",
      blocos: [
        {
          tipo: "exemplos",
          itens: [
            { frase: "Os documentos estão **anexos**; segue **em anexo** o parecer.", analise: "'Anexo' é adjetivo e concorda (documentos anexos); 'em anexo' é locução adverbial e não varia." },
            { frase: "Elas **mesmas** assinaram; o prazo acaba **mesmo** hoje.", analise: "'Mesmo' = próprio: concorda (pronome). 'Mesmo' = de fato, realmente: advérbio, invariável." },
            {
              frase: "Os servidores agiram **rápida e corretamente**.",
              analise: "Advérbios em '-mente' em sequência: o sufixo pode ficar só no último. O primeiro fica na forma feminina do adjetivo.",
              concurso: true,
            },
            {
              frase: "Havia **menos** reclamações e **bastantes** elogios.",
              analise: "'Menos' é sempre invariável (nunca 'menas'). 'Bastantes' acompanha o substantivo 'elogios' (= muitos): concorda.",
              concurso: true,
            },
          ],
        },
      ],
    },
    {
      letra: "F",
      blocos: [
        {
          tipo: "pegadinhas",
          itens: [
            { titulo: "\"Meia cansada\"", texto: "Errado: antes de adjetivo, 'meio' é advérbio (= um pouco): 'meio cansada'." },
            { titulo: "Adjetivo usado como advérbio", texto: "'Falou alto', 'custa caro', 'chegaram rápido': o adjetivo virou advérbio e ficou invariável (derivação imprópria)." },
            { titulo: "'Onde' × 'aonde'", texto: "'Aonde' (a + onde) só com verbos de movimento que pedem 'a': 'Aonde você vai?'. Sem movimento: 'Onde você está?'." },
            { titulo: "Advérbio de intensidade ligado a adjetivo", texto: "Em 'muito estudioso', 'muito' modifica o adjetivo e não o substantivo; por isso não concorda com 'alunas': 'alunas muito estudiosas'." },
          ],
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "Ao lado de **nome** concorda; ao lado de **verbo ou adjetivo** fica parado.",
          explicacao: "Muitas horas × trabalham muito. Meia hora × meio cansada. Bastantes motivos × bastante cansadas.",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "As agentes, meio cansadas, ficaram sós na base e só saíram bem tarde.",
          passos: [
            "**meio**: antes do adjetivo 'cansadas' = um pouco: advérbio de intensidade, invariável.",
            "**sós**: = sozinhas, refere-se a 'agentes': adjetivo, concorda.",
            "**na base**: locução adverbial de lugar (em + a base).",
            "**só**: = apenas, ligado a 'saíram': invariável (palavra denotativa de exclusão; muitas bancas dizem advérbio).",
            "**bem tarde**: 'bem' (intensidade) modifica o advérbio de tempo 'tarde'.",
          ],
          conclusao: "invariáveis: meio, só, bem, tarde. Variável: sós (adjetivo).",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Advérbio é invariável e modifica verbo, adjetivo, outro advérbio ou a oração.",
            "Função: adjunto adverbial (tempo, lugar, modo, intensidade, negação...).",
            "Meio, bastante, muito: invariáveis junto de verbo/adjetivo; variáveis junto de substantivo.",
            "Só = apenas (invariável) × sós = sozinhos (adjetivo). 'Menos' nunca varia.",
            "Sequência em '-mente': rápida e corretamente.",
            "NGB: só, até, inclusive, exceto, eis = palavras denotativas.",
          ],
        },
      ],
    },
  ],
};
