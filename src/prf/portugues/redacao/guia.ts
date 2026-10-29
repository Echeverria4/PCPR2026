import type { SecaoGuiada } from "../EstudoGuiado";
import type { Bloco } from "../tipos";
import type { CampoPlano, CriterioId } from "./tipos";

export const NOTA_MAXIMA = 20;
export const NOTA_MINIMA = 10;

export const CRITERIOS: { id: CriterioId; nome: string; max: number; pergunta: string }[] = [
  { id: "progressao", nome: "Progressão", max: 4, pergunta: "Cada parágrafo traz uma ideia nova, sem repetir a anterior?" },
  {
    id: "conteudo",
    nome: "Qualidade do conteúdo",
    max: 6,
    pergunta: "Defendi um ponto de vista com argumentos e expliquei o repertório que citei?",
  },
  { id: "coesao", nome: "Coesão", max: 6, pergunta: "Liguei as ideias com conectivos variados e no sentido certo, em 4 parágrafos?" },
  { id: "norma", nome: "Norma padrão", max: 4, pergunta: "Revisei ortografia, acentos, pontuação e concordância?" },
];

export const NOTA_ZERO = [
  "Fugir do tema ou do tipo de texto (o pedido é dissertativo-argumentativo).",
  "Escrever menos de 20 linhas.",
  "Colocar qualquer marca que identifique você, como nome ou assinatura.",
  "Usar lápis ou tinta que não seja azul ou preta.",
  "Escrever com letra ilegível.",
];

/** Os 4 parágrafos de toda redação-modelo, com o campo do plano que cada um desenvolve. */
export const ESQUELETO: { parte: string; linhas: string; funcao: string; molde: string; campo: CampoPlano }[] = [
  {
    parte: "Introdução",
    linhas: "5 a 6 linhas",
    funcao: "Contextualizar, apresentar a tese e anunciar os 2 argumentos.",
    molde: "[Contexto ou repertório]. [Problema]. Esse cenário decorre de [argumento 1] e de [argumento 2].",
    campo: "tese",
  },
  {
    parte: "Desenvolvimento 1",
    linhas: "6 a 7 linhas",
    funcao: "Defender o argumento 1.",
    molde: "Em primeiro lugar, [frase-tópico]. [Repertório ou dado]. Nesse sentido, [análise].",
    campo: "arg1",
  },
  {
    parte: "Desenvolvimento 2",
    linhas: "6 a 7 linhas",
    funcao: "Defender o argumento 2.",
    molde: "Além disso, [frase-tópico]. [Exemplo]. Assim, [consequência].",
    campo: "arg2",
  },
  {
    parte: "Conclusão",
    linhas: "4 a 5 linhas",
    funcao: "Retomar a tese e indicar o caminho.",
    molde: "Portanto, cabe a [quem] [fazer o quê], a fim de [finalidade]. [Frase de fechamento].",
    campo: "proposta",
  },
];

export const CAMPOS_PLANO: { id: CampoPlano; rotulo: string; dica: string }[] = [
  { id: "tese", rotulo: "Tese", dica: "Em uma frase: o problema e a sua posição sobre ele." },
  { id: "arg1", rotulo: "Argumento 1", dica: "Uma causa ou um motivo que sustenta a tese." },
  { id: "arg2", rotulo: "Argumento 2", dica: "Outra causa ou motivo, diferente do primeiro." },
  { id: "repertorio", rotulo: "Repertório", dica: "Uma lei, um dado, um fato ou um pensador que você vai citar e explicar." },
  {
    id: "proposta",
    rotulo: "Proposta da conclusão",
    dica: "Quem faz o quê, e para quê: “Portanto, cabe a [quem] [fazer o quê], a fim de [finalidade].”",
  },
];

export const BLOCOS_REDACAO: { n: 1 | 2 | 3 | 4; titulo: string; descricao: string }[] = [
  {
    n: 1,
    titulo: "Apostas on-line (bets)",
    descricao: "Seis recortes diferentes de um mesmo tema. Repare como o repertório se repete e se adapta.",
  },
  {
    n: 2,
    titulo: "Segurança, sociedade e tecnologia",
    descricao: "Os temas com mais aderência à atividade policial e à atualidade.",
  },
  {
    n: 3,
    titulo: "Temas constitucionais",
    descricao: "Temas “coringa”: a Constituição serve de repertório para quase qualquer proposta de redação.",
  },
  {
    n: 4,
    titulo: "Seus temas, reformulados",
    descricao:
      "Cada ideia sua virou o tipo de frase-tema que uma banca costuma usar. Treinar a reformulação também ensina a delimitar o tema e a não fugir dele.",
  },
];

const ramoRepertorio = (rotulo: string, texto: string, combina: string) => ({
  rotulo,
  texto,
  exemplo: `Combina com: ${combina}.`,
});

const esqueleto = ESQUELETO.map((p): Bloco => ({
  tipo: "chaves",
  titulo: `${p.parte} · ${p.linhas}`,
  ramos: [
    { rotulo: "Função", texto: p.funcao },
    { rotulo: "Molde", exemplo: p.molde },
  ],
}));

/** O guia que vale para as 25 redações: como a banca corrige, o esqueleto, os conectivos e o repertório. */
export const GUIA: SecaoGuiada[] = [
  {
    titulo: "1 · Como a banca corrige",
    ancora: "red-corrige",
    blocos: [
      { tipo: "texto", texto: "A redação vale até **20 pontos**, divididos em 4 critérios. Quem fica abaixo de **10** é eliminado." },
      {
        tipo: "chaves",
        titulo: "Os 4 critérios",
        ramos: [
          { rotulo: "Progressão · 4 pontos", texto: "O texto avança: cada parte traz informação nova, com coerência, sem repetir ideias." },
          {
            rotulo: "Qualidade do conteúdo · 6 pontos",
            texto: "Escolher, relacionar e interpretar fatos e argumentos para defender um ponto de vista.",
          },
          { rotulo: "Coesão · 6 pontos", texto: "Ligar bem as partes do texto: conectivos, retomadas e divisão em parágrafos." },
          { rotulo: "Norma padrão · 4 pontos", texto: "Gramática, ortografia, acentuação e pontuação." },
        ],
      },
      {
        tipo: "macete",
        texto: "Conteúdo + coesão = **12 dos 20 pontos**.",
        explicacao: "Um argumento bem amarrado vale mais do que vocabulário difícil.",
      },
      { tipo: "texto", texto: "Referência: o último edital de soldado (2025, banca IBFC). Confirme quando sair o edital de 2027." },
    ],
  },
  {
    titulo: "2 · O que zera a nota",
    ancora: "red-zero",
    blocos: [
      { tipo: "lista", titulo: "Nota zero se você:", itens: NOTA_ZERO },
      {
        tipo: "macete",
        texto: "Só valem as **25 primeiras linhas**.",
        explicacao: "O que passar da 25ª linha é desconsiderado na correção. A faixa segura é de 20 a 25 linhas.",
      },
    ],
  },
  {
    titulo: "3 · O esqueleto",
    ancora: "red-esqueleto",
    blocos: [
      {
        tipo: "texto",
        texto: "Todas as redações deste bloco têm **4 parágrafos**, cada um com a sua função. Absorva o esqueleto, não decore o texto.",
      },
      ...esqueleto,
    ],
  },
  {
    titulo: "4 · Tamanho e título",
    ancora: "red-tamanho",
    blocos: [
      {
        tipo: "lista",
        titulo: "Tamanho",
        itens: [
          "Cada redação-modelo tem de 210 a 250 palavras: cerca de 22 a 25 linhas escritas à mão.",
          "Calibre a sua letra: copie um modelo à mão em folha pautada.",
          "Passou de 25 linhas? Enxugue. Ficou abaixo de 20? Desenvolva mais.",
        ],
      },
      {
        tipo: "texto",
        texto:
          "**Título:** os modelos trazem um, mas ele é opcional se o edital não exigir. Use só quando tiver uma boa ideia: um título fraco não ajuda.",
      },
    ],
  },
  {
    titulo: "5 · Dois avisos",
    ancora: "red-avisos",
    blocos: [
      {
        tipo: "pegadinhas",
        itens: [
          {
            titulo: "A tese é só um exemplo",
            texto:
              "Em temas polêmicos (drogas, facções como terroristas, apostas), a banca avalia a qualidade da argumentação, não a posição política. Você pode defender o lado oposto com exatamente a mesma estrutura.",
          },
          {
            titulo: "Confira os números antes de memorizar",
            texto:
              "Dados mudam todo ano. Sem certeza de um número na prova, use uma formulação segura, como “levantamentos do Fórum Brasileiro de Segurança Pública apontam crescimento…”. Dado errado pode tirar ponto; dado sem número, não.",
          },
        ],
      },
    ],
  },
  {
    titulo: "6 · Conectivos por função",
    ancora: "red-conectivos",
    blocos: [
      { tipo: "texto", texto: "A coesão vale 6 pontos. Use conectivos variados e com o sentido certo." },
      {
        tipo: "chaves",
        titulo: "Para encadear os argumentos",
        ramos: [
          { rotulo: "Introduzir o 1º argumento", exemplo: "Em primeiro lugar · Inicialmente · Primeiramente" },
          { rotulo: "Acrescentar", exemplo: "Além disso · Ademais · Somado a isso · Outrossim · Também" },
          { rotulo: "Explicar ou aprofundar", exemplo: "Nesse sentido · Nesse contexto · Isso porque · Ou seja · Isto é" },
          { rotulo: "Exemplificar", exemplo: "Prova disso é · A exemplo de · É o caso de · Não por acaso" },
        ],
      },
      {
        tipo: "chaves",
        titulo: "Para contrapor, dar a causa e concluir",
        ramos: [
          { rotulo: "Contrapor", exemplo: "Por outro lado · Contudo · No entanto · Todavia · Entretanto · Embora (+ subjuntivo)" },
          { rotulo: "Causa", exemplo: "Visto que · Uma vez que · Já que · Porquanto · Pois" },
          { rotulo: "Consequência", exemplo: "Assim · Por isso · Como consequência · Dessa forma · De modo que" },
          { rotulo: "Concluir", exemplo: "Portanto · Logo · Desse modo · Dessa maneira · Em suma" },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          {
            titulo: "“À medida que” × “na medida em que”",
            texto:
              "“À medida que” indica proporção: à medida que o treino avança, a letra melhora. “Na medida em que” indica causa: na medida em que repete ideias, o texto perde pontos em progressão.",
          },
          {
            titulo: "“Mas” × “não só… mas também”",
            texto:
              "Sozinho, “mas” opõe ideias: o plano é bom, mas faltou repertório. No par “não só… mas também”, ele soma: não só o conteúdo, mas também a coesão vale ponto.",
          },
        ],
      },
    ],
  },
  {
    titulo: "7 · Repertório coringa",
    ancora: "red-repertorio",
    blocos: [
      { tipo: "texto", texto: "Servem para quase qualquer tema. Memorize a ideia central de cada um." },
      {
        tipo: "chaves",
        titulo: "Constituição: direitos de todos",
        ramos: [
          ramoRepertorio("Art. 1º, III", "A dignidade da pessoa humana é fundamento da República.", "qualquer tema de direitos"),
          ramoRepertorio("Art. 6º", "Saúde, educação e segurança são direitos sociais.", "desigualdade, saúde e segurança"),
          ramoRepertorio("Art. 196", "A saúde é direito de todos e dever do Estado.", "saúde mental, SUS e bets"),
        ],
      },
      {
        tipo: "chaves",
        titulo: "Constituição: segurança e infância",
        ramos: [
          ramoRepertorio(
            "Art. 144",
            "Segurança pública: dever do Estado, direito e responsabilidade de todos.",
            "todos os temas de segurança",
          ),
          ramoRepertorio("Art. 227", "Crianças e adolescentes têm prioridade absoluta.", "infância, escola e redes sociais"),
        ],
      },
      {
        tipo: "chaves",
        titulo: "Leis e metas",
        ramos: [
          ramoRepertorio("ECA (1990)", "Proteção integral de crianças e adolescentes.", "infância, publicidade e adultização"),
          ramoRepertorio("SUSP (Lei 13.675/2018)", "Integração das forças de segurança.", "crime organizado e segurança"),
          ramoRepertorio("Agenda 2030 (ONU)", "ODS 16: paz, justiça e instituições eficazes.", "violência, corrupção e instituições"),
        ],
      },
      {
        tipo: "chaves",
        titulo: "Pensadores",
        ramos: [
          ramoRepertorio("Zygmunt Bauman", "Modernidade líquida: laços frágeis e consumo imediato.", "consumo, redes, bets e polarização"),
          ramoRepertorio(
            "Byung-Chul Han",
            "Sociedade do cansaço: o excesso de desempenho gera esgotamento.",
            "saúde mental, tecnologia e trabalho",
          ),
          ramoRepertorio(
            "Thomas Hobbes",
            "O cidadão cede parte da liberdade ao Estado em troca de segurança.",
            "o papel do Estado e a segurança pública",
          ),
        ],
      },
      {
        tipo: "macete",
        texto: "Repertório não é enfeite.",
        explicacao:
          "Explique o repertório e ligue ao seu argumento na frase seguinte, como fazem todos os modelos. Citar sem explicar não rende ponto em qualidade do conteúdo.",
      },
    ],
  },
];
