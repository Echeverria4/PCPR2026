import type { SecaoGuiada } from "../../../../portugues/EstudoGuiado";
import type { Bloco } from "../../../../portugues/tipos";
import type { CampoPlano, CriterioId } from "./tipos";

export const NOTA_MAXIMA = 20;
export const NOTA_MINIMA = 10;
export const MAX_LINHAS = 30;
/** O peso dos erros na conta do edital de 2021: NPD = NC − 4 × NE ÷ TL. */
export const PESO_ERROS = 4;

/** A divisão do treino: na prova, o padrão de resposta de cada tema diz quanto vale cada aspecto. */
export const CRITERIOS: { id: CriterioId; nome: string; max: number; pergunta: string }[] = [
  {
    id: "estrutura",
    nome: "Apresentação e estrutura",
    max: 2,
    pergunta: "Escrevi em parágrafos (introdução, um por aspecto e conclusão), com letra legível e dentro das 30 linhas?",
  },
  { id: "asp1", nome: "Aspecto 1", max: 6, pergunta: "" },
  { id: "asp2", nome: "Aspecto 2", max: 6, pergunta: "" },
  { id: "asp3", nome: "Aspecto 3", max: 6, pergunta: "" },
];

export const PERGUNTA_ASPECTO = "Respondi a este aspecto com informação correta e explicada, sem fugir do que foi pedido?";

export const NOTA_ZERO = [
  "Fugir do tema (falar de outro assunto).",
  "Entregar a folha sem texto.",
  "Pôr nome, assinatura ou qualquer marca que identifique você fora do lugar próprio.",
  "Não devolver a folha de texto definitivo.",
];

/** Os 5 parágrafos de toda redação-modelo, com o campo do plano que cada um desenvolve. */
export const ESQUELETO: { parte: string; linhas: string; funcao: string; molde: string; campo: CampoPlano }[] = [
  {
    parte: "Introdução",
    linhas: "4 a 5 linhas",
    funcao: "Apresenta o tema, deixa clara a sua tese e anuncia, de leve, os três aspectos.",
    molde: "[Contexto do tema]. [Sua tese]. [Isso envolve o aspecto 1, o 2 e o 3.]",
    campo: "intro",
  },
  {
    parte: "Aspecto 1",
    linhas: "6 a 7 linhas",
    funcao: "Responde ao primeiro aspecto: frase com as palavras dele, explicação e prova (norma, fato ou exemplo).",
    molde: "Em primeiro lugar, quanto a [aspecto 1], … Isso ocorre porque … Conforme [norma ou fato], …",
    campo: "asp1",
  },
  {
    parte: "Aspecto 2",
    linhas: "6 a 7 linhas",
    funcao: "Responde ao segundo aspecto, do mesmo jeito: palavras do aspecto, explicação e prova.",
    molde: "Além disso, no que se refere a [aspecto 2], … Por isso, …",
    campo: "asp2",
  },
  {
    parte: "Aspecto 3",
    linhas: "6 a 7 linhas",
    funcao: "Responde ao terceiro aspecto. Em tema sobre a PRF, costuma ser o papel dela ou as soluções.",
    molde: "Por fim, quanto a [aspecto 3], … Assim, …",
    campo: "asp3",
  },
  {
    parte: "Conclusão",
    linhas: "3 a 4 linhas",
    funcao: "Retoma a tese e fecha com uma síntese ou uma proposta ligada ao que foi dito. Nada de assunto novo.",
    molde: "Portanto, [retomada da tese], [síntese ou proposta].",
    campo: "fecho",
  },
];

export const CAMPOS_PLANO: { id: CampoPlano; rotulo: string; dica: string }[] = [
  { id: "intro", rotulo: "Introdução e tese", dica: "Em uma frase: o que você defende sobre o tema?" },
  { id: "asp1", rotulo: "Aspecto 1", dica: "A ideia principal e a prova (norma, fato ou exemplo)." },
  { id: "asp2", rotulo: "Aspecto 2", dica: "A ideia principal e a prova." },
  { id: "asp3", rotulo: "Aspecto 3", dica: "A ideia principal e a prova." },
  { id: "fecho", rotulo: "Conclusão", dica: "Como vai retomar a tese? Uma síntese ou uma proposta." },
];

export const BLOCOS_REDACAO: { n: 1 | 2 | 3 | 4; titulo: string; descricao: string }[] = [
  { n: 1, titulo: "Trânsito seguro", descricao: "Mortes no trânsito, motorista profissional e usuários vulneráveis." },
  {
    n: 2,
    titulo: "Crime nas rodovias e direitos humanos",
    descricao: "Exploração sexual, tráfico de pessoas, crimes ambientais, fronteiras e uso da força.",
  },
  {
    n: 3,
    titulo: "Integração, tecnologia e o futuro da PRF",
    descricao: "SUSP, leitura de placas, saúde mental e desastres climáticos.",
  },
  {
    n: 4,
    titulo: "A nova PRF: rodovias, ferrovias e hidrovias",
    descricao: "PEC 18/2025: a ampliação da PRF, os rios de fronteira, os crimes contra a ferrovia e a integração com os estados.",
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

/** O guia que vale para todos os temas: a prova, a conta da nota, o esqueleto, o repertório e os erros. */
export const GUIA: SecaoGuiada[] = [
  {
    titulo: "1 · Como é a prova",
    ancora: "prf-red-prova",
    blocos: [
      {
        tipo: "texto",
        texto:
          "A discursiva da PRF pede um **texto dissertativo de até 30 linhas** sobre um tema, com **três aspectos** que precisam aparecer no texto. Vale **20 pontos**.",
      },
      {
        tipo: "lista",
        titulo: "Como no dia da prova",
        itens: [
          "Caneta esferográfica de **tinta preta**, de **corpo transparente**.",
          "O que passar da **30ª linha** ou ficar fora do espaço próprio **não é corrigido**.",
          "Nada que identifique você fora do lugar próprio: nem nome, nem assinatura, nem rubrica.",
          "Título não é pedido. Se usar, ele ocupa uma das 30 linhas.",
        ],
      },
      {
        tipo: "macete",
        texto: "Os três aspectos são o roteiro da sua nota.",
        explicacao: "Cada aspecto vale uma parte dos pontos de conteúdo. Esquecer um custa caro, mesmo com o texto bem escrito.",
      },
    ],
  },
  {
    titulo: "2 · A conta da nota",
    ancora: "prf-red-nota",
    blocos: [
      {
        tipo: "chaves",
        titulo: "As três partes da conta",
        ramos: [
          { rotulo: "NC · conteúdo, até 20", texto: "Soma a apresentação, a estrutura do texto e o desenvolvimento de cada aspecto." },
          { rotulo: "NE · número de erros", texto: "Erros de grafia, de gramática (concordância, regência, crase, pontuação) e de escolha de palavra." },
          { rotulo: "TL · total de linhas", texto: "Quantas linhas você realmente escreveu." },
        ],
      },
      {
        tipo: "macete",
        texto: "NPD = NC − 4 × NE ÷ TL",
        explicacao: "É a conta do edital de 2021, o último da PRF. Confira no próximo edital: o peso dos erros pode mudar.",
      },
      {
        tipo: "passos",
        frase: "Exemplo: conteúdo 16, com 6 erros em 30 linhas.",
        passos: ["4 × 6 = 24", "24 ÷ 30 = 0,8", "16 − 0,8 = 15,2"],
        conclusao: "Nota final: 15,2.",
      },
      {
        tipo: "macete",
        texto: "Em texto curto, cada erro pesa mais.",
        explicacao: "Os mesmos 6 erros em 20 linhas descontam 1,2 em vez de 0,8.",
      },
      {
        tipo: "lista",
        titulo: "Mínimo e zero",
        itens: ["Abaixo de **10 pontos**, o candidato é eliminado.", "Se o desconto passar da nota de conteúdo, a nota fica **zero**."],
      },
    ],
  },
  {
    titulo: "3 · O que zera ou anula",
    ancora: "prf-red-zero",
    blocos: [
      {
        tipo: "lista",
        titulo: "Segundo o edital de 2021",
        itens: [
          "**Fuga ao tema**: nota zero.",
          "**Folha sem texto**: nota zero.",
          "**Desconto de erros maior que a nota de conteúdo**: nota zero.",
          "**Marca que identifique você** fora do lugar próprio: a prova é anulada ou fica com zero, conforme o edital.",
          "**Não devolver a folha de texto definitivo**: prova anulada.",
        ],
      },
      {
        tipo: "macete",
        texto: "Tangenciar não é fugir.",
        explicacao:
          "Quem fala do assunto, mas não do recorte pedido, tangencia: não zera, mas perde muitos pontos de conteúdo. Quem fala de outra coisa foge do tema e zera.",
      },
    ],
  },
  { titulo: "4 · O esqueleto de 5 parágrafos", ancora: "prf-red-esqueleto", blocos: esqueleto },
  {
    titulo: "5 · Um parágrafo por aspecto",
    ancora: "prf-red-aspecto",
    blocos: [
      {
        tipo: "texto",
        texto: "Responda aos aspectos **na ordem** da proposta, um em cada parágrafo. O corretor procura cada um deles: facilite.",
      },
      {
        tipo: "passos",
        frase: "Como montar o parágrafo de um aspecto",
        passos: [
          "Primeira frase: retome as palavras do aspecto.",
          "Explique: causa, consequência ou como funciona.",
          "Prove: uma norma, um fato seguro ou um exemplo.",
          "Feche ligando de volta à sua tese.",
        ],
        conclusao: "De 6 a 7 linhas por aspecto bastam.",
      },
      {
        tipo: "macete",
        texto: "Use as palavras do aspecto.",
        explicacao: "Se o aspecto pede “desafios da fiscalização”, escreva “desafios” e “fiscalização” logo na primeira frase do parágrafo.",
      },
    ],
  },
  {
    titulo: "6 · Repertório coringa da PRF",
    ancora: "prf-red-repertorio",
    blocos: [
      {
        tipo: "chaves",
        titulo: "Normas que servem para muitos temas",
        ramos: [
          ramoRepertorio(
            "Art. 144, § 2º, da Constituição",
            "A PRF é órgão permanente da União, estruturado em carreira, que faz o patrulhamento ostensivo das rodovias federais.",
            "qualquer tema sobre a PRF",
          ),
          ramoRepertorio(
            "Art. 144, § 10, da Constituição",
            "A segurança viária compreende educação, engenharia e fiscalização de trânsito.",
            "trânsito e prevenção",
          ),
          ramoRepertorio(
            "Art. 1º, § 2º, do CTB",
            "O trânsito em condições seguras é direito de todos e dever dos órgãos do Sistema Nacional de Trânsito.",
            "trânsito",
          ),
          ramoRepertorio(
            "Lei 13.614/2018 (Pnatrans)",
            "Criou o plano nacional de redução de mortes e lesões no trânsito e pôs no CTB a meta de reduzir à metade, no mínimo, em dez anos, os índices de mortos (art. 326-A).",
            "mortes no trânsito",
          ),
          ramoRepertorio(
            "Lei 13.675/2018 (SUSP)",
            "Criou o Sistema Único de Segurança Pública, que integra os órgãos de segurança, a PRF entre eles.",
            "integração, crime organizado e fronteiras",
          ),
          ramoRepertorio(
            "Art. 227 da Constituição",
            "Prioridade absoluta para crianças e adolescentes; o § 4º manda a lei punir severamente a exploração sexual.",
            "crianças e adolescentes",
          ),
          ramoRepertorio(
            "Art. 225 da Constituição",
            "Meio ambiente equilibrado: direito de todos, que o poder público e a coletividade devem defender.",
            "crimes ambientais e desastres",
          ),
          ramoRepertorio(
            "Lei 13.060/2014",
            "Uso da força com legalidade, necessidade, razoabilidade e proporcionalidade, priorizando instrumentos de menor potencial ofensivo.",
            "abordagem e direitos humanos",
          ),
        ],
      },
      {
        tipo: "chaves",
        titulo: "Ideias que rendem argumento",
        ramos: [
          ramoRepertorio(
            "Sistema seguro",
            "As pessoas erram e o corpo humano é frágil: a via, o veículo e a fiscalização devem impedir que um erro vire morte. A responsabilidade é de todos.",
            "trânsito",
          ),
          ramoRepertorio(
            "Logística do crime",
            "Droga, arma, contrabando e pessoas traficadas precisam de transporte. Fiscalizar a rodovia corta a cadeia do crime no meio do caminho.",
            "crime organizado, fronteiras e tráfico",
          ),
          ramoRepertorio(
            "Polícia que protege direitos",
            "A PRF não só reprime: resgata vítimas, socorre e protege grupos vulneráveis.",
            "direitos humanos",
          ),
        ],
      },
      {
        tipo: "macete",
        texto: "Na dúvida sobre um número, use a ideia sem o número.",
        explicacao: "Dado errado tira ponto de conteúdo; a ideia correta, sem a cifra, não tira.",
      },
    ],
  },
  {
    titulo: "7 · Conectivos por função",
    ancora: "prf-red-conectivos",
    blocos: [
      {
        tipo: "chaves",
        titulo: "Para abrir cada parte",
        ramos: [
          { rotulo: "Introdução", exemplo: "No Brasil, … · Atualmente, … · Diante de …," },
          { rotulo: "Aspecto 1", exemplo: "Em primeiro lugar, … · No que se refere a …, · Quanto a …," },
          { rotulo: "Aspecto 2", exemplo: "Além disso, … · Ademais, … · Outro ponto relevante é …" },
          { rotulo: "Aspecto 3", exemplo: "Por fim, … · No que diz respeito a …," },
          { rotulo: "Conclusão", exemplo: "Portanto, … · Dessa forma, … · Diante do exposto, …" },
        ],
      },
      {
        tipo: "chaves",
        titulo: "Dentro do parágrafo",
        ramos: [
          { rotulo: "Causa", exemplo: "porque · visto que · uma vez que" },
          { rotulo: "Consequência", exemplo: "por isso · assim · de modo que" },
          { rotulo: "Oposição", exemplo: "contudo · entretanto · embora" },
          { rotulo: "Exemplo", exemplo: "por exemplo · é o caso de" },
        ],
      },
      {
        tipo: "macete",
        texto: "Varie e use no sentido certo.",
        explicacao: "“Contudo” só depois de uma ideia contrária; “portanto” só para concluir o que já foi dito.",
      },
    ],
  },
  {
    titulo: "8 · Os erros que mais custam",
    ancora: "prf-red-erros",
    blocos: [
      { tipo: "texto", texto: "Cada erro entra no **NE** e tira nota. Os mais comuns na discursiva:" },
      {
        tipo: "lista",
        itens: [
          "Vírgula entre o sujeito e o verbo.",
          "Crase antes de palavra masculina ou de verbo.",
          "Verbo que não concorda com o sujeito posposto (“Ocorrem acidentes”).",
          "“Onde” para o que não é lugar: use “em que”.",
          "Palavra difícil usada no sentido errado.",
          "Frase longa demais, que perde a concordância.",
        ],
      },
      {
        tipo: "macete",
        texto: "Frase curta erra menos.",
        explicacao: "Duas linhas por frase é um bom limite. Prefira a palavra que você sabe usar.",
      },
      {
        tipo: "lista",
        titulo: "Antes de passar a limpo",
        itens: [
          "Os três aspectos estão no texto, na ordem?",
          "Cada parágrafo começa com um conectivo?",
          "Revisei acentos, crase e concordância?",
          "Ficou entre 25 e 30 linhas?",
        ],
      },
    ],
  },
];
