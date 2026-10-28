import type { Licao } from "../tipos";

export const MESMA_PALAVRA: Licao = {
  id: "mesma-palavra",
  titulo: "Mesma palavra, classes diferentes",
  resumo: "A classe é definida pelo **papel na frase**, não pela palavra isolada. Aqui estão as palavras que as bancas mais usam para testar isso.",
  modelo: [
    {
      tipo: "fluxo",
      titulo: "Roteiro para qualquer palavra 'camaleão'",
      passos: [
        { pergunta: "Ela tem artigo ou determinante antes (o, um, este)?", sim: "Funciona como **substantivo** (o porquê, um não, o andar).", classe: "substantivo" },
        { pergunta: "Está junto de um substantivo e concorda com ele?", sim: "**Adjetivo**, **pronome adjetivo**, **artigo** ou **numeral**: veja se caracteriza, determina ou quantifica.", classe: "adjetivo" },
        { pergunta: "Está junto de verbo, adjetivo ou advérbio e não varia?", sim: "**Advérbio** (falou alto, meio cansada, muito bom).", classe: "adverbio" },
        { pergunta: "Liga duas orações?", sim: "**Conjunção** ou **pronome relativo**: troque por 'o qual'; se couber, é relativo.", classe: "conjuncao" },
        { pergunta: "Retoma ou substitui um nome?", sim: "**Pronome**.", classe: "pronome" },
      ],
    },
    {
      tipo: "macete",
      texto: "Não pergunte 'que palavra é esta?'. Pergunte **'o que ela está fazendo nesta frase?'**",
    },
  ],
  secoes: [
    {
      letra: "A",
      titulo: "O 'que'",
      blocos: [
        {
          tipo: "grade",
          titulo: "Os valores do 'que'",
          colunas: ["Exemplo", "Teste"],
          linhas: [
            { rotulo: "Pronome relativo", valores: ["O ofício **que** chegou.", "troca por 'o qual'"] },
            { rotulo: "Conjunção integrante", valores: ["Disse **que** viria.", "a oração troca por 'isso'"] },
            { rotulo: "Conjunção explicativa", valores: ["Saia, **que** vai chover.", "= porque, após ordem"] },
            { rotulo: "Conjunção consecutiva", valores: ["Correu tanto **que** cansou.", "depois de tão, tanto, tal"] },
            { rotulo: "Conjunção comparativa", valores: ["É mais rápido (do) **que** o colega.", "mais/menos... que"] },
            { rotulo: "Pronome interrogativo", valores: ["**Que** houve?", "abre pergunta"] },
            { rotulo: "Advérbio de intensidade", valores: ["**Que** difícil!", "= quão, antes de adjetivo"] },
            { rotulo: "Preposição", valores: ["Temos **que** sair.", "= de (ter que = ter de)"] },
            { rotulo: "Substantivo", valores: ["Ele tem um **quê** de mistério.", "com artigo e acento"] },
            { rotulo: "Interjeição", valores: ["**Quê!** Já acabou?", "isolado, exprime espanto"] },
            { rotulo: "Partícula expletiva (de realce)", valores: ["Nós é **que** decidimos.", "pode sair sem perda: Nós decidimos"] },
          ],
        },
      ],
    },
    {
      letra: "B",
      titulo: "O 'se'",
      blocos: [
        {
          tipo: "grade",
          titulo: "Os valores do 'se'",
          colunas: ["Exemplo", "Teste"],
          linhas: [
            { rotulo: "Conjunção condicional", valores: ["**Se** chover, adiaremos.", "= caso"] },
            { rotulo: "Conjunção integrante", valores: ["Não sei **se** ele vem.", "a oração troca por 'isso'"] },
            { rotulo: "Pronome reflexivo", valores: ["O agente **se** feriu.", "= a si mesmo"] },
            { rotulo: "Pronome recíproco", valores: ["Os dois **se** cumprimentaram.", "= um ao outro"] },
            { rotulo: "Partícula apassivadora", valores: ["Vendem-**se** carros.", "verbo transitivo direto; vira 'carros são vendidos'; concorda"] },
            { rotulo: "Índice de indeterminação do sujeito", valores: ["Precisa-**se** de agentes. / Vive-**se** bem aqui.", "verbo com preposição ou intransitivo; sempre no singular"] },
            { rotulo: "Parte integrante do verbo", valores: ["Ele **se** queixou.", "verbo pronominal (queixar-se, arrepender-se)"] },
            { rotulo: "Partícula de realce", valores: ["Foi-**se** o tempo.", "pode sair: Foi o tempo"] },
          ],
          nota: "Os dois mais cobrados: apassivadora (VTD, verbo concorda) × índice de indeterminação (VTI ou VI, verbo no singular).",
        },
      ],
    },
    {
      letra: "C",
      titulo: "A, o, um",
      blocos: [
        {
          tipo: "grade",
          titulo: "Palavras pequenas, muitas classes",
          colunas: ["Exemplo", "Classe"],
          linhas: [
            { rotulo: "a", valores: ["**A** agente saiu.", "artigo"] },
            { rotulo: "a", valores: ["Vi-**a** ontem.", "pronome oblíquo (= ela)"] },
            { rotulo: "a", valores: ["Foi **a** pé.", "preposição"] },
            { rotulo: "a", valores: ["Esta prova é igual **à** que fiz.", "pronome demonstrativo (= aquela) + preposição"] },
            { rotulo: "o", valores: ["**O** relatório chegou. / Entreguei-**o**.", "artigo / pronome oblíquo"] },
            { rotulo: "o", valores: ["Não fiz **o** que pediram.", "pronome demonstrativo (= aquilo)"] },
            { rotulo: "um", valores: ["**Um** agente ligou.", "artigo indefinido"] },
            { rotulo: "um", valores: ["Só **um** agente ligou, não dois.", "numeral"] },
            { rotulo: "um", valores: ["**Um** disse que sim; outro, que não.", "pronome indefinido (= alguém)"] },
          ],
        },
      ],
    },
    {
      letra: "D",
      titulo: "Muito, pouco, bastante, meio, só, mesmo, todo",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Varia (junto do nome) × não varia (junto de verbo ou adjetivo)",
          colunas: [
            { titulo: "Concorda", classe: "pronome", itens: ["**muitas** horas, **poucas** vagas", "**bastantes** motivos", "**meia** hora (numeral)", "elas ficaram **sós** (adjetivo)", "elas **mesmas** assinaram (pronome)", "**todas** as viaturas (pronome)"] },
            { titulo: "Invariável", classe: "adverbio", itens: ["trabalham **muito**, dormem **pouco**", "**bastante** cansadas", "**meio** cansada", "**só** elas vieram (= apenas)", "acaba **mesmo** hoje (= realmente)", "ficou **todo** molhado / **toda** molhada (ver nota)"] },
          ],
        },
        {
          tipo: "nota",
          texto: "'Todo' com valor de advérbio (= inteiramente) costuma concordar com o adjetivo por eufonia: 'ela ficou toda molhada'. A norma aceita a flexão; a banca raramente cobra a forma invariável como única correta.",
        },
      ],
    },
    {
      letra: "E",
      titulo: "Substantivo, verbo ou adjetivo?",
      blocos: [
        {
          tipo: "frase",
          palavras: [
            ["Estudo", "verbo", "eu estudo"],
            ["todos", "pronome"],
            ["os", "artigo"],
            ["dias", "substantivo"],
            [","],
            ["e", "conjuncao"],
            ["o", "artigo"],
            ["estudo", "substantivo", "com artigo"],
            ["rende", "verbo"],
            ["."],
          ],
          comentario: "A mesma forma 'estudo' é verbo (conjugado na 1ª pessoa) e substantivo (com artigo).",
        },
        {
          tipo: "exemplos",
          itens: [
            { frase: "O **andar** do agente era firme.", analise: "Infinitivo com artigo: substantivo (derivação imprópria)." },
            { frase: "Não sei o **porquê** da autuação.", analise: "'Porquê' com artigo e acento = o motivo: substantivo." },
            { frase: "O muro é **alto**; ele falou **alto**.", analise: "1º: adjetivo (caracteriza 'muro' por meio do verbo: predicativo). 2º: advérbio de modo (invariável)." },
            { frase: "O ingresso é **caro**; o ingresso custou **caro**.", analise: "'É caro': adjetivo predicativo. 'Custou caro': advérbio (= por alto preço), invariável: 'as entradas custaram caro'." },
            {
              frase: "**Certo** agente disse algo **certo**.",
              analise: "Antes do substantivo, 'certo' é pronome indefinido (= um, algum). Depois de 'algo', é adjetivo (= correto). A posição muda a classe e o sentido.",
              concurso: true,
            },
            {
              frase: "A pista **que** fechou é perigosa. × O agente disse **que** a pista fechou. × **Que** perigoso!",
              analise: "Pronome relativo (= a qual), conjunção integrante (a oração vira 'isso': disse isso) e advérbio de intensidade (= quão, muito).",
              concurso: true,
            },
            {
              frase: "**A** agente viu **a** viatura e **a** levou **a** Brasília.",
              analise: "Artigo (a agente, a viatura), pronome oblíquo (a levou = levou a viatura) e preposição (levou a Brasília). Sem artigo antes de Brasília, não há crase.",
              concurso: true,
            },
            {
              frase: "**Se** chover, a pista fecha. × Não sei **se** a pista fechou. × O agente **se** olhou no espelho.",
              analise: "Conjunção condicional (= caso), conjunção integrante (introduz o objeto: não sei isso) e pronome reflexivo (olhou a si mesmo).",
              concurso: true,
            },
          ],
        },
      ],
    },
    {
      letra: "F",
      titulo: "Como e bem",
      blocos: [
        {
          tipo: "grade",
          titulo: "Os valores do 'como'",
          colunas: ["Exemplo", "Classe"],
          linhas: [
            { rotulo: "Causal", valores: ["**Como** chovia, adiaram.", "conjunção (= porque, no início)"] },
            { rotulo: "Comparativo", valores: ["Trabalha **como** um soldado.", "conjunção (= tal qual)"] },
            { rotulo: "Conformativo", valores: ["Fez **como** foi orientado.", "conjunção (= conforme)"] },
            { rotulo: "Interrogativo", valores: ["**Como** você chegou?", "advérbio de modo"] },
            { rotulo: "Relativo", valores: ["O modo **como** agiu.", "pronome relativo (= pelo qual)"] },
            { rotulo: "Verbo", valores: ["Eu **como** cedo.", "verbo comer"] },
          ],
        },
        {
          tipo: "grade",
          titulo: "Os valores do 'bem'",
          colunas: ["Exemplo", "Classe"],
          linhas: [
            { rotulo: "Modo", valores: ["Ele agiu **bem**.", "advérbio de modo"] },
            { rotulo: "Intensidade", valores: ["Chegou **bem** cedo.", "advérbio de intensidade (= muito)"] },
            { rotulo: "Substantivo", valores: ["Fez um **bem** à equipe. / Os **bens** foram apreendidos.", "substantivo (com artigo, varia)"] },
          ],
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "**Artigo na frente** transforma qualquer palavra em substantivo.",
          explicacao: "o não, o sim, o porquê, o andar, um quê.",
        },
        {
          tipo: "macete",
          texto: "'Se' com **VTD concorda** (apassivadora); 'se' com **preposição fica no singular** (indeterminação).",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "Como se exigem documentos que se perdem com facilidade, é bom que todos guardem cópias.",
          passos: [
            "**Como** no início, com o motivo: conjunção causal.",
            "**se exigem**: 'exigir' é transitivo direto; 'documentos são exigidos': partícula apassivadora (o verbo concorda com 'documentos').",
            "**que** (documentos que): troca por 'os quais': pronome relativo.",
            "**se perdem**: 'documentos são perdidos': também apassivadora, no plural.",
            "**bom**: adjetivo predicativo; **que** (é bom que...): integrante; **todos**: pronome indefinido substantivo, sujeito de 'guardem'.",
          ],
          conclusao: "dois 'que' (relativo e integrante) e dois 'se' (ambos apassivadores) na mesma frase.",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "A classe depende do papel na frase.",
            "'Que' que troca por 'o qual' = relativo; que troca a oração por 'isso' = integrante.",
            "'Se' + VTD = apassivadora (concorda); 'se' + VTI/VI = indeterminação (singular).",
            "Junto de nome concorda; junto de verbo ou adjetivo, fica invariável.",
            "Artigo antes = substantivo (o andar, o porquê, um quê).",
            "'Um' é numeral só com ideia de quantidade; 'a/o' podem ser artigo, pronome ou (a) preposição.",
          ],
        },
      ],
    },
  ],
};
