import type { Licao } from "../tipos";

export const INTERJEICAO: Licao = {
  id: "interjeicao",
  titulo: "Interjeição",
  classe: "interjeicao",
  resumo: "A palavra ou expressão que exprime **emoção**, **apelo** ou **reação** de forma súbita; vale por uma frase inteira.",
  modelo: [
    {
      tipo: "chaves",
      titulo: "Interjeição",
      ramos: [
        { rotulo: "Alegria, alívio", classe: "interjeicao", exemplo: "Oba! Ufa! Viva!" },
        { rotulo: "Dor, tristeza", classe: "interjeicao", exemplo: "Ai! Ui! Que pena!" },
        { rotulo: "Espanto, surpresa", classe: "interjeicao", exemplo: "Oh! Nossa! Puxa!" },
        { rotulo: "Chamamento, apelo", classe: "interjeicao", exemplo: "Ei! Psiu! Alô! Socorro!" },
        { rotulo: "Advertência", classe: "interjeicao", exemplo: "Cuidado! Atenção! Alto lá!" },
        { rotulo: "Locução interjetiva", classe: "interjeicao", exemplo: "Ai de mim! Meu Deus! Valha-me Deus!" },
      ],
    },
    {
      tipo: "macete",
      texto: "Interjeição é **frase de uma palavra só**: não se encaixa na oração, ela é a oração.",
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Interjeição é a palavra invariável que traduz de modo súbito um **sentimento** ou um **apelo**. Forma sozinha uma **frase nominal** (sem verbo) e, por isso, não exerce função sintática dentro de outra oração. Na escrita, costuma vir seguida de ponto de exclamação.",
        },
        {
          tipo: "frase",
          palavras: [
            ["Ei", "interjeicao", "apelo"],
            ["!"],
            ["Cuidado", "interjeicao", "advertência"],
            ["!"],
            ["A", "artigo"],
            ["pista", "substantivo"],
            ["está", "verbo"],
            ["molhada", "adjetivo"],
            ["."],
          ],
          comentario: "'Ei!' e 'Cuidado!' são frases completas; a oração verdadeira começa em 'A pista'.",
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "perguntas",
          itens: [
            "A palavra expressa uma **reação** ou **emoção** imediata?",
            "Está isolada, em geral com '!', sem se ligar sintaticamente ao resto?",
            "Se você retirá-la, a oração seguinte continua completa?",
            "O sentido depende da entonação (Nossa! pode ser espanto, alegria ou reprovação)?",
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
            "Na análise sintática, a interjeição fica **fora** da estrutura da oração: não é sujeito, nem complemento, nem adjunto. Seu papel é **expressivo** (função emotiva da linguagem) ou **apelativo** (chamar a atenção do interlocutor).",
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Interjeição × vocativo",
          colunas: [
            { titulo: "Interjeição 'Oh!'", classe: "interjeicao", itens: ["Exprime espanto ou emoção", "**Oh!** Que acidente grave!", "Seguida de exclamação"] },
            { titulo: "Vocativo com 'ó'", classe: "substantivo", itens: ["Chama alguém pelo nome", "**Ó** agente, venha cá!", "'Ó' acompanha o vocativo, sem pausa antes do nome"] },
          ],
          sintese: "O vocativo é um termo da oração (o chamamento); a interjeição é uma frase à parte.",
        },
        {
          tipo: "comparativo",
          titulo: "A palavra muda de classe",
          colunas: [
            { titulo: "Classe de origem", classe: "substantivo", itens: ["Tenha **cuidado** na pista. (substantivo)", "O **silêncio** foi total. (substantivo)", "Que ele **viva** muito. (verbo)"] },
            { titulo: "Usada como interjeição", classe: "interjeicao", itens: ["**Cuidado!**", "**Silêncio!**", "**Viva!**"] },
          ],
          sintese: "Substantivos, adjetivos, verbos e advérbios viram interjeição quando, isolados, exprimem emoção ou apelo (derivação imprópria).",
        },
      ],
    },
    {
      letra: "E",
      blocos: [
        {
          tipo: "exemplos",
          itens: [
            { frase: "**Ufa!** Terminamos o relatório.", analise: "Interjeição de alívio; 'Terminamos o relatório' é outra frase, completa." },
            { frase: "**Ai de mim!** Perdi o prazo.", analise: "Locução interjetiva: um conjunto de palavras com valor de interjeição." },
            {
              frase: "**Oxalá** a pista seque antes do feriado!",
              analise: "Interjeição de desejo (= tomara, Deus queira), seguida de verbo no subjuntivo (seque).",
            },
            {
              frase: "**Ai!** Machuquei o pé. × Fique **aí** até eu voltar.",
              analise: "Ai = interjeição de dor (sem acento). Aí = advérbio de lugar (com acento).",
            },
            {
              frase: "**Vivam** os aprovados!",
              analise: "Particularidade: quando 'viva' mantém valor de verbo (= que vivam), a norma recomenda a concordância com o termo seguinte: 'Vivam os aprovados'. Usado como interjeição pura, aceita-se 'Viva os aprovados!'.",
              concurso: true,
            },
            {
              frase: "**Psiu!** O comandante está falando.",
              analise: "Interjeição de pedido de silêncio. A banca pode pedir a função da linguagem predominante: apelativa (conativa).",
              concurso: true,
            },
            {
              frase: "**Ah!** Agora entendi o recado. × **Há** dois carros no acostamento. × A viatura chegou **à** base.",
              analise: "Mesma pronúncia, três classes: 'ah' (com h no fim) é interjeição; 'há' é o verbo haver (= existem); 'à' é a preposição 'a' + o artigo 'a'.",
              concurso: true,
            },
            {
              frase: "— O motorista estava nervoso. — **Pudera!** Já tinha duas multas no mês.",
              analise: "'Pudera' é o verbo poder (pretérito mais-que-perfeito) fixado como interjeição: indica que o fato era de esperar (= não admira!).",
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
            { titulo: "Classificar pelo dicionário", texto: "'Cuidado', 'atenção', 'silêncio' são substantivos no dicionário, mas, isolados e exclamativos, são interjeições. Vale o uso na frase." },
            { titulo: "Atribuir função sintática", texto: "Interjeição não é sujeito nem adjunto. Se a alternativa disser 'adjunto adverbial', está errada." },
            { titulo: "'Oh' × 'ó'", texto: "'Oh!' exprime emoção (com exclamação). 'Ó' acompanha vocativo, sem exclamação logo depois: 'Ó Deus, ajudai-nos'." },
          ],
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "Tirou a palavra e a frase seguinte ficou inteira? Era **interjeição**.",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "Nossa! Que fila enorme na barreira!",
          passos: [
            "**Nossa!**: isolada, com exclamação, exprime espanto: interjeição (originalmente um possessivo, 'Nossa Senhora').",
            "**Que** (antes do substantivo 'fila'): intensifica o nome; é pronome indefinido com valor exclamativo. Antes de adjetivo ('Que enorme!'), seria advérbio de intensidade.",
            "**na barreira**: locução adverbial de lugar (em + a).",
          ],
          conclusao: "uma interjeição e uma frase nominal exclamativa: nenhuma das duas tem verbo.",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Interjeição exprime emoção ou apelo e vale por uma frase.",
            "Não tem função sintática; fica fora da oração.",
            "Locução interjetiva: Ai de mim! Meu Deus! Alto lá!",
            "Outras classes viram interjeição pelo uso: Cuidado! Silêncio! Viva!",
            "'Oh!' (emoção) × 'ó' (com vocativo).",
          ],
        },
      ],
    },
  ],
};
