import type { Licao } from "../tipos";

export const ARTIGO: Licao = {
  id: "artigo",
  titulo: "Artigo",
  classe: "artigo",
  resumo: "A palavra que vem antes do substantivo e o apresenta como **conhecido** (o, a) ou **não específico** (um, uma).",
  modelo: [
    {
      tipo: "chaves",
      titulo: "Artigo",
      ramos: [
        { rotulo: "Definido", classe: "artigo", texto: "ser já conhecido, específico", exemplo: "o, a, os, as: o relatório (aquele que já sabemos)" },
        { rotulo: "Indefinido", classe: "artigo", texto: "um ser qualquer da espécie", exemplo: "um, uma, uns, umas: um relatório (qualquer)" },
        { rotulo: "Unido à preposição", classe: "preposicao", texto: "contração ou combinação", exemplo: "do, na, pelo, ao, à, num, dum" },
      ],
    },
    {
      tipo: "macete",
      texto: "Artigo **só existe** antes de substantivo (ou de palavra substantivada).",
      explicacao: "Se o 'o' ou o 'a' estiver antes de verbo, ou substituindo um nome, não é artigo: é pronome ou preposição.",
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Artigo é a palavra variável que antecede o substantivo, indicando seu gênero e número e apresentando-o de modo **definido** (o, a, os, as) ou **indefinido** (um, uma, uns, umas).",
        },
        {
          tipo: "comparativo",
          colunas: [
            { titulo: "Definido", classe: "artigo", itens: ["**O** agente chegou.", "Sabemos de qual agente se fala"] },
            { titulo: "Indefinido", classe: "artigo", itens: ["**Um** agente chegou.", "Um agente qualquer, não identificado"] },
          ],
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "perguntas",
          itens: [
            "A palavra vem **imediatamente antes** de um substantivo (ou de um adjetivo que vem antes dele: o **novo** agente)?",
            "Concorda com esse substantivo em gênero e número (**os** agentes, **as** viaturas)?",
            "Dá para trocar por 'este/esta' sem perder o sentido? Se sim, cuidado: pode ser artigo; se a troca for por 'aquele/aquela', é pronome demonstrativo.",
          ],
        },
        {
          tipo: "fluxo",
          titulo: "O 'a' (ou o 'o') desta frase é o quê?",
          passos: [
            { pergunta: "Vem antes de substantivo, concordando com ele?", sim: "**Artigo** (a placa, o carro).", classe: "artigo" },
            { pergunta: "Vem junto de verbo, substituindo um nome (a encontrei; vi-o)?", sim: "**Pronome oblíquo** (= ela, ele).", classe: "pronome" },
            { pergunta: "Pode ser trocado por 'aquele/aquela' (a que chegou; o de ontem)?", sim: "**Pronome demonstrativo**.", classe: "pronome" },
            { pergunta: "Liga dois termos e não varia (de segunda a sexta; a partir de hoje)?", sim: "**Preposição**.", classe: "preposicao" },
          ],
          senao: "Se for 'à' (com acento grave), é a fusão da preposição 'a' com o artigo 'a' (ou com o pronome 'a'): crase.",
        },
      ],
    },
    {
      letra: "C",
      blocos: [
        {
          tipo: "texto",
          texto:
            "O artigo determina o substantivo e, na oração, é sempre **adjunto adnominal**. Além disso, ele **substantiva** qualquer palavra: 'o sim', 'um porquê', 'o andar'.",
        },
        {
          tipo: "frase",
          palavras: [
            ["O", "artigo", "substantiva 'não'"],
            ["não", "substantivo", "substantivo"],
            ["do", "preposicao", "de + o"],
            ["chefe", "substantivo"],
            ["surpreendeu", "verbo"],
            ["."],
          ],
          comentario: "O artigo transformou o advérbio 'não' em substantivo: 'o não' = a recusa.",
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Os quatro 'a'",
          colunas: [
            { titulo: "Artigo", classe: "artigo", itens: ["Conferi **a** placa.", "Antes de substantivo feminino"] },
            { titulo: "Pronome oblíquo", classe: "pronome", itens: ["Conferi a placa e **a** fotografei.", "= ela; objeto direto"] },
            { titulo: "Demonstrativo", classe: "pronome", itens: ["Esta placa não é **a** que procurei.", "= aquela"] },
            { titulo: "Preposição", classe: "preposicao", itens: ["Vou **a** Brasília.", "Liga e não varia"] },
          ],
          sintese: "Mesma forma, quatro classes: a decisão vem do que está ao lado (substantivo, verbo, 'que', termo regido).",
        },
        {
          tipo: "comparativo",
          titulo: "Artigo indefinido × numeral",
          colunas: [
            { titulo: "Artigo", classe: "artigo", itens: ["Chegou **um** ofício para você.", "= algum ofício; aceita 'certo'"] },
            { titulo: "Numeral", classe: "numeral", itens: ["Chegou **um** ofício, não dois.", "= só um; aceita 'apenas'"] },
          ],
          sintese: "Se o sentido for de quantidade (só um, apenas um, um e não dois), é numeral.",
        },
      ],
    },
    {
      letra: "E",
      blocos: [
        {
          tipo: "exemplos",
          itens: [
            { frase: "**Os** documentos estão na mesa.", analise: "'Os' é artigo definido; 'na' é em + a (preposição + artigo)." },
            { frase: "Ela tem **uns** trinta anos.", analise: "'Uns' antes de numeral indica aproximação (cerca de)." },
            {
              frase: "Chegou **uma** denúncia; **a** denúncia pede urgência.",
              analise: "O indefinido apresenta algo novo; o definido retoma o que já é conhecido.",
            },
            {
              frase: "**Toda a** equipe participou; **toda** equipe precisa de treino.",
              analise: "Com artigo, 'toda a equipe' = a equipe inteira; sem artigo, 'toda equipe' = qualquer equipe.",
              concurso: true,
            },
            {
              frase: "**Ambos os** relatórios foram aprovados.",
              analise: "A norma pede artigo depois de 'ambos' quando vem substantivo: 'ambos os relatórios'.",
              concurso: true,
            },
            {
              frase: "No time do posto, ele é **um** Pelé.",
              analise: "Artigo indefinido antes de nome próprio cria comparação: um Pelé = alguém que joga como Pelé.",
              concurso: true,
            },
            {
              frase: "Ele não é um agente qualquer: é **o** agente.",
              analise: "Artigo definido com valor de realce: 'o agente' = o melhor, o modelo de agente.",
              concurso: true,
            },
            {
              frase: "Comprou viaturas **o** mais modernas **possível**. × Comprou **as** viaturas mais modernas **possíveis**.",
              analise: "'Possível' concorda com o artigo da expressão: o mais... possível (singular); os/as mais... possíveis (plural).",
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
            { titulo: "\"Cujo o\" e \"cuja a\"", texto: "Errado. 'Cujo' já é determinante e nunca aceita artigo depois: 'o agente **cujo** relatório chegou'." },
            { titulo: "Artigo antes de 'de' + sujeito", texto: "A norma prefere 'antes **de a** viatura sair' a 'antes da viatura sair', porque 'a viatura' é sujeito do infinitivo e não se contrai com a preposição. Muitas bancas cobram isso." },
            { titulo: "\"Toda a\" × \"toda\"", texto: "Com artigo = inteiro (toda a cidade). Sem artigo = qualquer (toda cidade tem regras)." },
            { titulo: "Artigo antes de possessivo", texto: "É facultativo: 'meu carro' ou 'o meu carro'. Por isso, antes de possessivo feminino, a crase é facultativa (à minha casa / a minha casa)." },
          ],
        },
        {
          tipo: "nota",
          texto:
            "Antes de nome próprio de pessoa, o artigo é opcional e revela familiaridade ('o João', 'a Ana'); na escrita formal, costuma ser omitido diante de nomes de pessoas célebres.",
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "Ao lado do **nome**, artigo. Ao lado do **verbo**, pronome. Antes do **que**, demonstrativo.",
        },
        {
          tipo: "macete",
          texto: "Troque 'um' por 'apenas um': continuou fazendo sentido de quantidade? Numeral.",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "A agente pediu a documentação e a conferiu a partir das 8h.",
          passos: [
            "1º 'a' (A agente): antes do substantivo 'agente', concordando: **artigo**.",
            "2º 'a' (a documentação): antes de substantivo: **artigo**.",
            "3º 'a' (a conferiu): junto do verbo, substituindo 'a documentação': **pronome oblíquo** (objeto direto).",
            "4º 'a' (a partir de): parte da locução prepositiva 'a partir de': **preposição**.",
            "'das' = de + as: preposição + **artigo**.",
          ],
          conclusao: "artigo, artigo, pronome, preposição: quatro 'a' e três classes diferentes.",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Definido (o, a, os, as) apresenta o ser conhecido; indefinido (um, uma, uns, umas), um ser qualquer.",
            "Artigo vem antes de substantivo e funciona como adjunto adnominal.",
            "Artigo substantiva qualquer palavra (o não, o porquê).",
            "'A/o' junto de verbo = pronome; antes de 'que/de' com sentido de 'aquele' = demonstrativo.",
            "'Um' com sentido de quantidade = numeral.",
            "Nunca 'cujo o'; 'toda a' (inteira) × 'toda' (qualquer); 'ambos os'.",
          ],
        },
      ],
    },
  ],
};
