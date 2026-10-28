import type { Licao } from "../tipos";

export const PRONOME: Licao = {
  id: "pronome",
  titulo: "Pronome",
  classe: "pronome",
  resumo: "A palavra que **substitui** ou **acompanha** o nome, situando-o em relação às pessoas do discurso (quem fala, com quem se fala, de quem se fala).",
  modelo: [
    {
      tipo: "chaves",
      titulo: "Pronome",
      ramos: [
        { rotulo: "Pessoais", classe: "pronome", texto: "retos (sujeito) e oblíquos (complemento)", exemplo: "eu, tu, ele / me, te, o, lhe, mim" },
        { rotulo: "De tratamento", classe: "pronome", texto: "verbo e possessivo na 3ª pessoa", exemplo: "você, Vossa Senhoria, Vossa Excelência" },
        { rotulo: "Possessivos", classe: "pronome", texto: "posse, relação de pertença", exemplo: "meu, teu, seu, nosso, vosso" },
        { rotulo: "Demonstrativos", classe: "pronome", texto: "posição no espaço, no tempo e no texto", exemplo: "este, esse, aquele, isto, o (= aquele)" },
        { rotulo: "Indefinidos", classe: "pronome", texto: "3ª pessoa de modo vago", exemplo: "alguém, ninguém, algum, todo, cada" },
        { rotulo: "Interrogativos", classe: "pronome", texto: "perguntas", exemplo: "que, quem, qual, quanto" },
        { rotulo: "Relativos", classe: "pronome", texto: "retomam um termo anterior e ligam orações", exemplo: "que, o qual, quem, cujo, onde" },
      ],
    },
    {
      tipo: "macete",
      texto: "Pronome é **ponteiro**: aponta para uma pessoa do discurso ou para um nome já dito.",
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Pronome é a palavra variável que representa os seres pela **pessoa do discurso**: 1ª (quem fala: eu, meu), 2ª (com quem se fala: tu, teu) ou 3ª (de quem se fala: ele, seu). Pode substituir o nome (pronome substantivo) ou acompanhá-lo (pronome adjetivo).",
        },
        {
          tipo: "grade",
          titulo: "Pronomes pessoais",
          colunas: ["Reto", "Oblíquo átono", "Oblíquo tônico"],
          linhas: [
            { rotulo: "1ª sing.", valores: ["eu", "me", "mim, comigo"] },
            { rotulo: "2ª sing.", valores: ["tu", "te", "ti, contigo"] },
            { rotulo: "3ª sing.", valores: ["ele, ela", "se, o, a, lhe", "si, consigo, ele, ela"] },
            { rotulo: "1ª pl.", valores: ["nós", "nos", "nós, conosco"] },
            { rotulo: "2ª pl.", valores: ["vós", "vos", "vós, convosco"] },
            { rotulo: "3ª pl.", valores: ["eles, elas", "se, os, as, lhes", "si, consigo, eles, elas"] },
          ],
          nota: "Oblíquo tônico sempre vem com preposição: para mim, sem ti, entre nós.",
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "fluxo",
          titulo: "Qual é o tipo do pronome?",
          passos: [
            { pergunta: "Indica uma das pessoas do discurso diretamente (eu, tu, ele, me, mim, lhe)?", sim: "**Pessoal** (reto se for sujeito; oblíquo se for complemento).", classe: "pronome" },
            { pergunta: "É forma de cortesia ou formalidade (você, Vossa Excelência)?", sim: "**De tratamento**.", classe: "pronome" },
            { pergunta: "Indica a quem pertence algo (meu, seu, nosso)?", sim: "**Possessivo**.", classe: "pronome" },
            { pergunta: "Situa no espaço, no tempo ou no texto (este, esse, aquele, isto)?", sim: "**Demonstrativo**.", classe: "pronome" },
            { pergunta: "Retoma um nome anterior e inicia uma nova oração (que = o qual, cujo, onde)?", sim: "**Relativo**.", classe: "pronome" },
            { pergunta: "Abre uma pergunta, direta ou indireta (Quem chegou? Não sei quem chegou)?", sim: "**Interrogativo**.", classe: "pronome" },
            { pergunta: "Refere-se à 3ª pessoa de forma vaga (alguém, todo, nenhum, cada)?", sim: "**Indefinido**.", classe: "pronome" },
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
            "O pronome evita repetição e dá **coesão** ao texto: retoma (anáfora) ou anuncia (catáfora) termos. Na oração, o pronome substantivo ocupa as funções do substantivo (sujeito, objeto); o pronome adjetivo é adjunto adnominal.",
        },
        {
          tipo: "grade",
          titulo: "Demonstrativos: espaço, tempo, texto",
          colunas: ["Espaço", "Tempo", "Texto"],
          linhas: [
            { rotulo: "este, isto", valores: ["perto de quem fala", "presente (este ano)", "o que ainda vai ser dito"] },
            { rotulo: "esse, isso", valores: ["perto de quem ouve", "passado ou futuro próximo", "o que já foi dito"] },
            { rotulo: "aquele, aquilo", valores: ["longe dos dois", "passado distante", "o primeiro de dois termos citados"] },
          ],
          nota: "Retomando dois termos: 'este' = o último citado; 'aquele' = o primeiro. 'Ana e Rui chegaram: este de carro, aquela a pé.'",
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Objeto direto × objeto indireto",
          colunas: [
            { titulo: "o, a, os, as", classe: "pronome", itens: ["Objeto **direto**", "Vi **o agente** → Vi-**o**.", "Verbos como ver, encontrar, convidar"] },
            { titulo: "lhe, lhes", classe: "pronome", itens: ["Objeto **indireto** (a ele, a ela)", "Entreguei **ao agente** → Entreguei-**lhe**.", "Verbos como obedecer, entregar a, pedir a"] },
          ],
          sintese: "'Eu lhe vi' é erro na norma culta: 'ver' pede objeto direto. O certo é 'Eu o vi'.",
        },
        {
          tipo: "comparativo",
          titulo: "Que relativo × que conjunção",
          colunas: [
            { titulo: "Pronome relativo", classe: "pronome", itens: ["O ofício **que** chegou foi arquivado.", "Troca por 'o qual': o ofício o qual chegou", "Tem função na oração (aqui, sujeito)"] },
            { titulo: "Conjunção integrante", classe: "conjuncao", itens: ["Disse **que** o ofício chegou.", "Não troca por 'o qual'; troca por 'isso': disse isso", "Só liga, sem função"] },
          ],
        },
      ],
    },
    {
      letra: "E",
      blocos: [
        {
          tipo: "exemplos",
          itens: [
            { frase: "Trouxe o relatório **para eu** revisar.", analise: "Quando o pronome é sujeito do infinitivo, vai o reto: 'para eu revisar'. Sem verbo depois, o oblíquo tônico: 'trouxe para mim'." },
            { frase: "Isso fica **entre mim e você**.", analise: "Depois de preposição, oblíquo tônico: entre mim e você, nunca 'entre eu e você'." },
            {
              frase: "Recebi o ofício: vou **encaminhá-lo** hoje e **pô-lo** no arquivo.",
              analise: "Depois de verbo terminado em r, s ou z, essa letra cai e o pronome 'o' vira 'lo' (encaminhar + o → encaminhá-lo; pôr + o → pô-lo). Depois de som nasal, vira 'no': põem-no, deram-no.",
            },
            {
              frase: "**Vossa Excelência** aprovou o **seu** projeto?",
              analise: "Tratamento pede verbo e possessivo na 3ª pessoa: 'aprovou', 'seu' (não 'vosso'). Fala-se 'Vossa' com a autoridade; 'Sua Excelência', sobre ela.",
              concurso: true,
            },
            {
              frase: "O agente **cujo** relatório chegou disse que **o** entregaria **a mim**.",
              analise: "'Cujo' indica posse (o relatório do agente) e não leva artigo depois; 'o' retoma 'o relatório' (objeto direto); 'a mim' é objeto indireto com oblíquo tônico.",
              concurso: true,
            },
            {
              frase: "**Quaisquer** dúvidas serão esclarecidas no posto.",
              analise: "'Qualquer' é o único pronome que faz o plural no meio: qual + quer → quais + quer. 'Qualquers' não existe, e 'qualquer dúvidas' é erro de concordância.",
              concurso: true,
            },
            {
              frase: "O chefe **o** viu e **lhe** deu os parabéns.",
              analise: "Ver é transitivo direto → o (objeto direto). Dar algo a alguém → lhe (objeto indireto). 'O chefe lhe viu' usa o pronome de objeto indireto no lugar do direto.",
              concurso: true,
            },
            {
              frase: "**Para mim**, conferir a carga é fácil.",
              analise: "Correto: 'para mim' não é sujeito de 'conferir'; completa 'é fácil' (conferir a carga é fácil para mim). Quando o pronome é sujeito do infinitivo, usa-se 'eu': para eu conferir.",
              concurso: true,
            },
            {
              frase: "O irmão da agente, **o qual** mora em Brasília, chegou ontem.",
              analise: "Com 'que', ficaria ambíguo quem mora em Brasília: o irmão ou a agente. 'O qual', no masculino, concorda com 'irmão' e desfaz a dúvida; 'a qual' apontaria para a agente.",
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
            { titulo: "\"Para mim fazer\"", texto: "Errado: antes de verbo no infinitivo o pronome é sujeito, então reto: 'para eu fazer'." },
            { titulo: "\"Onde\" para tempo ou situação", texto: "'Onde' só retoma lugar físico ou virtual: 'a cidade onde nasci'. Para tempo ou situação, use 'em que': 'a reunião em que decidimos'." },
            { titulo: "\"Cujo o\"", texto: "Errado: 'cujo' já concorda com a coisa possuída e não aceita artigo depois." },
            { titulo: "Preposição antes do relativo", texto: "Se o verbo da oração pede preposição, ela vai antes do relativo: 'o cargo **a que** aspiro', 'a norma **de que** precisamos', 'o colega **com quem** falei'." },
            { titulo: "\"Lhe\" com verbo transitivo direto", texto: "'Eu lhe convidei', 'eu lhe vi' estão fora da norma: convidar e ver pedem 'o/a'." },
          ],
        },
        {
          tipo: "nota",
          texto: "'Si' e 'consigo' são reflexivos: retomam o próprio sujeito ('Ele trouxe a pasta consigo'). Na norma culta, não servem para falar com alguém ('Quero falar consigo' é uso lusitano).",
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "**Este** é aqui e agora, **esse** é aí e já foi, **aquele** é lá longe.",
        },
        {
          tipo: "macete",
          texto: "Infinitivo depois? **Eu**. Ninguém depois? **Mim**.",
          explicacao: "Para eu ler × para mim. Entre mim e ti.",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "Este é o servidor a quem entreguei os documentos e cuja assinatura falta neles.",
          passos: [
            "**Este**: demonstrativo, apontando para o servidor presente; ocupa o lugar do nome (pronome substantivo).",
            "**a quem**: 'entregar' pede 'a alguém'; a preposição vem antes do relativo 'quem', que retoma 'servidor'.",
            "**cuja**: relativo de posse (a assinatura do servidor), concordando com 'assinatura', sem artigo depois.",
            "**neles**: em + eles; depois de preposição, 'eles' é oblíquo tônico e retoma 'os documentos'.",
          ],
          conclusao: "demonstrativo, relativo (com preposição), relativo possessivo e pessoal: a frase só fica coesa por causa dos pronomes.",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Sete tipos: pessoais, de tratamento, possessivos, demonstrativos, indefinidos, interrogativos e relativos.",
            "Reto = sujeito; oblíquo = complemento; oblíquo tônico sempre com preposição.",
            "'O/a' = objeto direto; 'lhe' = objeto indireto.",
            "Tratamento: verbo e possessivo na 3ª pessoa (Vossa Excelência decidiu sobre seu voto).",
            "Relativo retoma o antecedente; troca por 'o qual'; a preposição exigida vai antes dele.",
            "'Cujo' sem artigo depois; 'onde' só para lugar.",
          ],
        },
      ],
    },
  ],
};
