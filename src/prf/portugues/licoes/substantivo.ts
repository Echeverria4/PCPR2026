import type { Licao } from "../tipos";

export const SUBSTANTIVO: Licao = {
  id: "substantivo",
  titulo: "Substantivo",
  classe: "substantivo",
  resumo: "A palavra que **dá nome** a tudo: seres, coisas, lugares, ações, estados, sentimentos. É o núcleo dos termos da oração.",
  modelo: [
    {
      tipo: "chaves",
      titulo: "Substantivo",
      ramos: [
        { rotulo: "Comum × próprio", classe: "substantivo", texto: "nome da espécie × nome de um ser específico", exemplo: "rodovia × Brasília" },
        { rotulo: "Concreto × abstrato", classe: "substantivo", texto: "existe por si × depende de outro ser", exemplo: "agente, fada × coragem, fiscalização" },
        { rotulo: "Simples × composto", classe: "substantivo", texto: "um radical × dois ou mais", exemplo: "chuva × guarda-chuva" },
        { rotulo: "Primitivo × derivado", classe: "substantivo", texto: "não vem de outra palavra × vem", exemplo: "pedra × pedreiro" },
        { rotulo: "Coletivo", classe: "substantivo", texto: "no singular, indica conjunto", exemplo: "frota, arquipélago, elenco" },
      ],
    },
    {
      tipo: "macete",
      texto: "Aceitou **o/a** antes? Pode ser substantivo.",
      explicacao: "Até palavras de outras classes viram substantivo com artigo: o porquê, um não, o andar.",
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Substantivo é a palavra que **nomeia**: pessoas e coisas (agente, viatura), lugares (Brasília), ações (fiscalização), estados (cansaço), qualidades (honestidade) e sentimentos (medo). Varia em gênero, número e grau.",
        },
        {
          tipo: "comparativo",
          titulo: "Concreto × abstrato",
          colunas: [
            {
              titulo: "Concreto",
              classe: "substantivo",
              itens: ["Tem existência própria, real ou imaginária", "viatura, rodovia, motorista", "fada, Deus, alma, saci"],
            },
            {
              titulo: "Abstrato",
              classe: "substantivo",
              itens: ["Depende de um ser para existir", "ação: fiscalização, corrida", "estado, qualidade, sentimento: cansaço, beleza, saudade"],
            },
          ],
          sintese: "Concreto não é 'o que se pega com a mão': fada e Deus são concretos, porque existem (na crença ou na imaginação) como seres.",
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "perguntas",
          itens: [
            "Aceita artigo antes (**o** agente, **a** coragem)?",
            "Aceita adjetivo ao lado (agente **novo**, coragem **rara**)?",
            "Pode ser o núcleo do sujeito (**A fiscalização** começou)?",
            "Pode ir para o plural com um determinante (**os** agentes)?",
          ],
        },
        {
          tipo: "texto",
          texto: "Se a resposta for sim para as duas primeiras, você está quase certamente diante de um substantivo.",
        },
      ],
    },
    {
      letra: "C",
      blocos: [
        {
          tipo: "texto",
          texto:
            "O substantivo é o **núcleo** dos termos nominais: sujeito, objeto direto e indireto, complemento nominal, agente da passiva, predicativo, aposto e vocativo. Em volta dele ficam os determinantes e modificadores (artigo, adjetivo, numeral, pronome adjetivo, locução adjetiva).",
        },
        {
          tipo: "frase",
          palavras: [
            ["A", "artigo"],
            ["nova", "adjetivo"],
            ["frota", "substantivo", "núcleo (coletivo)"],
            ["chegou", "verbo"],
            ["à", "preposicao", "a + a"],
            ["base", "substantivo", "núcleo"],
            ["."],
          ],
          comentario: "Os dois núcleos são substantivos; artigo e adjetivo giram em torno de 'frota'.",
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Substantivo × adjetivo",
          colunas: [
            { titulo: "Substantivo", classe: "substantivo", itens: ["**O jovem** foi aprovado.", "Tem artigo e é núcleo do sujeito"] },
            { titulo: "Adjetivo", classe: "adjetivo", itens: ["O agente **jovem** foi aprovado.", "Caracteriza 'agente' e concorda com ele"] },
          ],
          sintese: "A mesma forma muda de classe conforme a função: nomeia (substantivo) ou caracteriza um nome (adjetivo).",
        },
        {
          tipo: "grade",
          titulo: "Gênero: três casos que a banca mistura",
          colunas: ["O que muda", "Exemplos"],
          linhas: [
            { rotulo: "Comum de dois gêneros", valores: ["só o determinante", "o/a agente, o/a estudante, o/a jovem"] },
            { rotulo: "Sobrecomum", valores: ["nada: uma forma para os dois sexos", "a vítima, a criança, o indivíduo"] },
            { rotulo: "Epiceno (animais)", valores: ["acrescenta macho/fêmea", "a cobra macho, o jacaré fêmea"] },
          ],
        },
        {
          tipo: "grade",
          titulo: "Muda o gênero, muda o sentido",
          colunas: ["Masculino", "Feminino"],
          linhas: [
            { rotulo: "cabeça", valores: ["o líder", "parte do corpo"] },
            { rotulo: "capital", valores: ["dinheiro", "cidade"] },
            { rotulo: "grama", valores: ["unidade de massa (duzentos gramas)", "relva"] },
            { rotulo: "rádio", valores: ["aparelho; elemento químico", "emissora"] },
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
            { frase: "A **coragem** do socorrista salvou o motorista.", analise: "'Coragem' é abstrato: é uma qualidade de alguém." },
            { frase: "A **frota** foi revisada.", analise: "'Frota' é coletivo (conjunto de veículos) no singular." },
            {
              frase: "Ninguém explicou o **porquê** da autuação.",
              analise: "Com artigo, 'porquê' é substantivo (derivação imprópria) e leva acento.",
              concurso: true,
            },
            {
              frase: "A **vítima** foi socorrida; ele estava consciente.",
              analise: "'Vítima' é sobrecomum: o feminino gramatical vale para homem ou mulher.",
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
            { titulo: "\"Concreto é o que se toca\"", texto: "Errado. Fada, Deus, alma e saci são concretos. Abstrato é o que depende de outro ser: ação, estado, qualidade, sentimento." },
            {
              titulo: "Plural dos compostos",
              texto: "Verbo + substantivo: só o segundo varia (**guarda-chuvas**, beija-flores). Substantivo + adjetivo: os dois variam (**guardas-noturnos**, amores-perfeitos). O 'guarda' só varia quando é substantivo.",
            },
            { titulo: "Forma de aumentativo sem sentido de aumentativo", texto: "Portão, cartão, fogão e papelão ganharam sentido próprio: não são 'porta grande' nem 'carta grande'." },
            { titulo: "Diminutivo nem sempre é tamanho", texto: "Em 'um jeitinho', 'que livrinho chato', o diminutivo exprime afeto ou desprezo, não tamanho." },
          ],
        },
        {
          tipo: "nota",
          texto:
            "No composto substantivo + substantivo em que o segundo limita o primeiro, as gramáticas aceitam variar os dois ou só o primeiro: navios-escolas ou navios-escola.",
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "Sobrecomum: **um** artigo para os dois. Comum de dois: o artigo **troca**.",
          explicacao: "A vítima (ele ou ela) × o agente / a agente.",
        },
        {
          tipo: "macete",
          texto: "Guarda que **guarda** (verbo) não varia; guarda que é **pessoa** varia.",
          explicacao: "Guarda-chuvas (verbo + substantivo) × guardas-noturnos (substantivo + adjetivo).",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "O agente de trânsito anotou o porquê da autuação com muita atenção.",
          passos: [
            "Procure palavras com determinante antes: **o** agente, **o** porquê, **da** (de + a) autuação, **muita** atenção.",
            "**Agente**: substantivo comum de dois gêneros (o/a agente), concreto.",
            "**Trânsito**: substantivo, dentro de 'de trânsito', locução adjetiva que caracteriza 'agente'.",
            "**Porquê**: substantivo por derivação imprópria (artigo antes, acento no 'e').",
            "**Autuação** e **atenção**: substantivos abstratos (ação de autuar; estado de quem está atento).",
          ],
          conclusao:
            "cinco substantivos: agente, trânsito, porquê, autuação e atenção. 'De trânsito' tem valor de adjetivo, mas 'trânsito' continua sendo substantivo dentro da locução.",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Substantivo nomeia; é o núcleo dos termos nominais.",
            "Concreto: existe por si (inclusive seres imaginários). Abstrato: ação, estado, qualidade, sentimento.",
            "Com artigo, qualquer palavra pode virar substantivo (derivação imprópria).",
            "Sobrecomum (a vítima) × comum de dois gêneros (o/a agente) × epiceno (a cobra macho).",
            "Plural composto: verbo + substantivo varia só o segundo; substantivo + adjetivo varia os dois.",
          ],
        },
      ],
    },
  ],
};
