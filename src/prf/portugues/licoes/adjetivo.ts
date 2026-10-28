import type { Licao } from "../tipos";

export const ADJETIVO: Licao = {
  id: "adjetivo",
  titulo: "Adjetivo",
  classe: "adjetivo",
  resumo: "A palavra que **caracteriza** o substantivo (qualidade, estado, origem, relação) e **concorda** com ele.",
  modelo: [
    {
      tipo: "chaves",
      titulo: "Adjetivo",
      ramos: [
        { rotulo: "Simples × composto", classe: "adjetivo", texto: "um radical × dois ou mais", exemplo: "azul × azul-escuro, médico-legal" },
        { rotulo: "Primitivo × derivado", classe: "adjetivo", texto: "não vem de outra palavra × vem", exemplo: "bom × bondoso" },
        { rotulo: "Pátrio (gentílico)", classe: "adjetivo", texto: "origem, nacionalidade", exemplo: "brasiliense, baiano" },
        { rotulo: "De relação", classe: "adjetivo", texto: "classifica, não qualifica; não tem grau", exemplo: "rodoviária, judicial, ambiental" },
        { rotulo: "Locução adjetiva", classe: "adjetivo", texto: "preposição + substantivo com valor de adjetivo", exemplo: "de ouro (áureo), da polícia (policial)" },
      ],
    },
    {
      tipo: "macete",
      texto: "Mudou o substantivo para o plural e a palavra **mudou junto**? Adjetivo.",
      explicacao: "Agente estudioso → agentes estudiosos. Se ficasse igual (falam rápido), seria advérbio.",
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Adjetivo é a palavra variável que atribui ao substantivo uma **qualidade** (honesto), um **estado** (cansado), uma **origem** (brasileiro) ou uma **relação** (rodoviário). Flexiona em gênero, número e grau.",
        },
        {
          tipo: "grade",
          titulo: "Grau do adjetivo",
          colunas: ["Forma", "Exemplo"],
          linhas: [
            { rotulo: "Comparativo de superioridade", valores: ["mais... (do) que", "mais rápido que"] },
            { rotulo: "Comparativo de igualdade", valores: ["tão... quanto/como", "tão rápido quanto"] },
            { rotulo: "Comparativo de inferioridade", valores: ["menos... (do) que", "menos rápido que"] },
            { rotulo: "Superlativo relativo", valores: ["o mais / o menos... de", "o mais rápido da equipe"] },
            { rotulo: "Superlativo absoluto analítico", valores: ["muito, bastante + adjetivo", "muito rápido"] },
            { rotulo: "Superlativo absoluto sintético", valores: ["sufixo -íssimo, -érrimo, -ílimo", "rapidíssimo, paupérrimo, facílimo"] },
          ],
          nota: "Irregulares: bom → melhor/ótimo; mau → pior/péssimo; grande → maior/máximo; pequeno → menor/mínimo.",
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "perguntas",
          itens: [
            "A palavra diz **como é** o substantivo (de que tipo, em que estado, de onde)?",
            "Concorda com ele (agente **novo**, agentes **novos**, agente **nova**)?",
            "Cabe entre o artigo e o substantivo ou logo depois dele (o **novo** agente; o agente **novo**)?",
            "Aceita 'muito' antes (muito **honesto**)? Adjetivos de relação não aceitam: não existe 'muito rodoviária'.",
          ],
        },
      ],
    },
    {
      letra: "C",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Duas funções do adjetivo",
          colunas: [
            {
              titulo: "Adjunto adnominal",
              classe: "adjetivo",
              itens: ["Fica junto do substantivo, sem verbo entre eles", "O agente **experiente** orientou a equipe."],
            },
            {
              titulo: "Predicativo",
              classe: "adjetivo",
              itens: ["Liga-se ao nome por meio do verbo", "O agente **é experiente**. / Julgaram o agente **experiente**."],
            },
          ],
          sintese: "A classe é a mesma (adjetivo); muda a função na oração.",
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Adjetivo × advérbio",
          colunas: [
            { titulo: "Adjetivo", classe: "adjetivo", itens: ["Os relatórios são **rápidos**.", "Caracteriza o nome e concorda"] },
            { titulo: "Advérbio", classe: "adverbio", itens: ["Os agentes chegaram **rápido**.", "Indica modo do verbo; invariável"] },
          ],
          sintese: "Teste da flexão: se a palavra não acompanha o plural do sujeito, ela se refere ao verbo: advérbio.",
        },
        {
          tipo: "comparativo",
          titulo: "A posição muda o sentido",
          colunas: [
            { titulo: "Antes do nome", classe: "adjetivo", itens: ["um **grande** homem = notável", "um **velho** amigo = de longa data", "**pobre** homem = digno de pena"] },
            { titulo: "Depois do nome", classe: "adjetivo", itens: ["um homem **grande** = alto, corpulento", "um amigo **velho** = idoso", "homem **pobre** = sem dinheiro"] },
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
            { frase: "A fiscalização **rodoviária** foi intensificada.", analise: "Adjetivo de relação: classifica a fiscalização (a de rodovias) e não admite grau." },
            { frase: "Os uniformes **azul-marinho** chegaram.", analise: "Cor composta com 'marinho' fica invariável: uniformes azul-marinho." },
            {
              frase: "É um **simples** agente. × É um agente **simples**.",
              analise: "Antes do nome, 'simples' = mero, apenas; depois, = modesto, sem sofisticação. A posição do adjetivo muda o sentido.",
            },
            {
              frase: "Comprou camisas **verde-claras** e calças **verde-oliva**.",
              analise: "Adjetivo + adjetivo: só o último varia (verde-claras). Se o último elemento é substantivo (oliva), o composto fica invariável.",
              concurso: true,
            },
            {
              frase: "O plano é **mais bom** que eficiente.",
              analise: "Quando se comparam duas qualidades do mesmo ser, a norma aceita 'mais bom', 'mais mau', 'mais grande', 'mais pequeno'.",
              concurso: true,
            },
            {
              frase: "Água **de chuva** é água **pluvial**; peixe **de rio** é peixe **fluvial**.",
              analise: "Locução adjetiva (preposição + substantivo) equivale a um adjetivo: de chuva = pluvial; de rio = fluvial; de guerra = bélico; de chumbo = plúmbeo.",
              concurso: true,
            },
            {
              frase: "O perito era **integérrimo**, e o caso, **antiquíssimo**.",
              analise: "Superlativos eruditos: íntegro → integérrimo; antigo → antiquíssimo (volta o radical latino 'antiqu-'). Outros do mesmo tipo: célebre → celebérrimo, livre → libérrimo.",
              concurso: true,
            },
            {
              frase: "O governo assinou acordos **luso-brasileiros** e financiou pesquisas **técnico-científicas**.",
              analise: "Nos compostos de dois adjetivos, o primeiro elemento fica no masculino singular e a flexão vai para o fim: luso-brasileiros, técnico-científicas. Exceção clássica: surdo-mudo → surdos-mudos (os dois variam).",
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
            { titulo: "\"Menas\"", texto: "Não existe. 'Menos' é invariável: menos pessoas." },
            { titulo: "\"Mais bom\" sempre errado?", texto: "Não. Comparando dois seres, use 'melhor' (este é melhor que aquele). Comparando duas qualidades de um mesmo ser, 'mais bom' é correto." },
            { titulo: "Superlativos eruditos", texto: "Amigo → amicíssimo; pobre → paupérrimo; fiel → fidelíssimo; sério → seriíssimo (com dois 'i'); doce → dulcíssimo. As formas populares (pobríssimo, docíssimo) também existem, mas a banca prefere a culta." },
            { titulo: "Locução adjetiva não é adjunto adverbial", texto: "Em 'agente **de trânsito**', a locução caracteriza o nome: tem valor de adjetivo (adjunto adnominal)." },
          ],
        },
        {
          tipo: "nota",
          texto: "Em cores compostas, há exceções fixas: 'surdo-mudo' varia os dois (surdos-mudos), e 'azul-marinho' e 'azul-celeste' ficam invariáveis.",
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "Cor composta: **adjetivo + adjetivo** → varia o último; **termina em substantivo** → não varia nada.",
          explicacao: "Olhos verde-escuros × olhos verde-água; gravatas vinho; ternos cinza.",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "Os agentes chegaram rápido e entregaram relatórios rápidos e completos.",
          passos: [
            "Ache as palavras que dizem 'como': **rápido**, **rápidos**, **completos**.",
            "Veja a que cada uma se refere: 'rápido' se refere a 'chegaram' (modo de chegar); 'rápidos' e 'completos' se referem a 'relatórios'.",
            "Teste a concordância: 'rápido' não acompanhou 'agentes' (plural); 'rápidos' e 'completos' acompanham 'relatórios'.",
          ],
          conclusao: "'rápido' é advérbio (de modo); 'rápidos' e 'completos' são adjetivos (adjuntos adnominais de 'relatórios').",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Adjetivo caracteriza o substantivo e concorda com ele.",
            "Função: adjunto adnominal (junto do nome) ou predicativo (por meio do verbo).",
            "Adjetivo de relação (rodoviária, judicial) não tem grau e vem depois do nome.",
            "Advérbio não concorda: 'chegaram rápido'.",
            "Cor composta: adjetivo + adjetivo varia o último; com substantivo no fim, invariável.",
            "Irregulares: melhor/ótimo, pior/péssimo, maior/máximo, menor/mínimo.",
          ],
        },
      ],
    },
  ],
};
