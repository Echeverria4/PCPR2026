import type { SecaoGuiada } from "../../../../portugues/EstudoGuiado";
import "./oficial.css";

/**
 * Redação Oficial da PRF Policial: o Manual de Redação da Presidência da República (3ª ed., 2018) e o
 * Decreto 9.758/2019. Cai nas questões objetivas de Português, não na discursiva. Texto próprio; as regras
 * seguem o Manual e o Decreto (Planalto).
 */

/** As partes do ofício, na ordem em que aparecem na folha. */
const PARTES: { n: number; nome: string; regra: string }[] = [
  { n: 1, nome: "Cabeçalho", regra: "Brasão e nome do órgão, centralizados. Só na primeira página." },
  { n: 2, nome: "Identificação", regra: "Tipo, número, ano e sigla do setor: OFÍCIO Nº 12/2026/SIGLA." },
  { n: 3, nome: "Local e data", regra: "À direita. Cidade sem a sigla do estado, mês em minúscula, ponto-final." },
  { n: 4, nome: "Endereçamento", regra: "“Ao Senhor” ou “A Sua Excelência o Senhor”, nome, cargo e endereço." },
  { n: 5, nome: "Assunto", regra: "O tema em poucas palavras, em destaque." },
  { n: 6, nome: "Vocativo", regra: "“Senhor” + cargo, com vírgula. Não se numera." },
  { n: 7, nome: "Texto", regra: "Com 3 ou mais parágrafos, todos numerados desde o primeiro." },
  { n: 8, nome: "Fecho", regra: "“Respeitosamente,” para superior; “Atenciosamente,” nos demais casos. Não se numera." },
  { n: 9, nome: "Signatário", regra: "Nome e cargo de quem assina." },
];

function Tag({ n }: { n: number }) {
  return (
    <span className="prf-of-tag">
      {n}
    </span>
  );
}

/** Um ofício desenhado como folha, com cada parte marcada por número. Exemplo fictício. */
function ModeloOficio() {
  return (
    <div className="prf-of">
      <p className="prf-of-intro">📄 Um ofício de exemplo. Os números marcam as 9 partes; a legenda vem na próxima tela.</p>
      <div className="prf-of-folha">
        <div className="prf-of-cab">
          <Tag n={1} />
          <span className="prf-of-brasao" aria-hidden="true">
            ⚜
          </span>
          <span>MINISTÉRIO DA JUSTIÇA E SEGURANÇA PÚBLICA</span>
          <span>POLÍCIA RODOVIÁRIA FEDERAL</span>
        </div>
        <p className="prf-of-id">
          <Tag n={2} />
          OFÍCIO Nº 12/2026/SEPLAN/PRF
        </p>
        <p className="prf-of-data">
          <Tag n={3} />
          Brasília, 5 de março de 2026.
        </p>
        <div className="prf-of-end">
          <Tag n={4} />
          <span>Ao Senhor</span>
          <span>[nome do destinatário]</span>
          <span>Coordenador-Geral de Operações</span>
          <span>[endereço]</span>
        </div>
        <p className="prf-of-assunto">
          <Tag n={5} />
          <strong>Assunto: Escala de fiscalização no feriado.</strong>
        </p>
        <p className="prf-of-voc">
          <Tag n={6} />
          Senhor Coordenador-Geral,
        </p>
        <div className="prf-of-texto">
          <Tag n={7} />
          <p>1. Encaminho a escala das equipes para o feriado de abril.</p>
          <p>2. As equipes ficam nos trechos de maior fluxo, das 6h às 22h.</p>
          <p>3. Peço a confirmação até 20 de março.</p>
        </div>
        <p className="prf-of-fecho">
          <Tag n={8} />
          Respeitosamente,
        </p>
        <div className="prf-of-sig">
          <Tag n={9} />
          <span>[nome do signatário]</span>
          <span>Chefe do Setor de Planejamento</span>
        </div>
      </div>
      <p className="prf-of-nota">
        Quem assina é chefe de setor e escreve ao Coordenador-Geral, que está acima: por isso o fecho é “Respeitosamente”.
      </p>
    </div>
  );
}

function LegendaOficio() {
  return (
    <div className="prf-of">
      <p className="prf-of-intro">🔎 Cada número do desenho, com a regra que a prova cobra:</p>
      <ol className="prf-of-legenda">
        {PARTES.map((p) => (
          <li key={p.n}>
            <Tag n={p.n} />
            <span>
              <strong>{p.nome}.</strong> {p.regra}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export const OFICIAL: SecaoGuiada[] = [
  {
    titulo: "1 · O que é e o que cai",
    ancora: "prf-of-oque",
    blocos: [
      {
        tipo: "texto",
        texto:
          "**Redação oficial** é o jeito como o poder público escreve atos e comunicações. Não é a discursiva: cai nas **questões objetivas** de Português.",
      },
      {
        tipo: "chaves",
        titulo: "As duas fontes",
        ramos: [
          { rotulo: "📘 Manual da Presidência (3ª ed., 2018)", texto: "Atributos, pronomes de tratamento, padrão ofício, fechos e formatação." },
          { rotulo: "📜 Decreto 9.758/2019", texto: "Para agentes públicos federais, como os da PRF: o único tratamento é “senhor”." },
        ],
      },
      {
        tipo: "macete",
        texto: "A questão diz qual regra usar.",
        explicacao: "“Segundo o Manual”: vale a lista de Vossa Excelência e Vossa Senhoria. “Segundo o Decreto”, com agente público federal: só “senhor”.",
      },
    ],
  },
  {
    titulo: "2 · Os atributos do texto",
    ancora: "prf-of-atributos",
    blocos: [
      {
        tipo: "chaves",
        titulo: "O texto oficial precisa ter",
        ramos: [
          { rotulo: "🎯 Clareza e precisão", texto: "Uma leitura só, sem duplo sentido." },
          { rotulo: "➡️ Objetividade", texto: "Vai direto ao ponto principal." },
          { rotulo: "✂️ Concisão", texto: "O máximo de informação com o mínimo de palavras, sem cortar o essencial." },
          { rotulo: "🔗 Coesão e coerência", texto: "Partes bem ligadas e ideias que não se contradizem." },
          { rotulo: "🏛️ Impessoalidade", texto: "Quem fala é o serviço público, não a pessoa que assina." },
          { rotulo: "👔 Formalidade e padronização", texto: "Mesmo tom e mesma forma em todo documento." },
        ],
      },
      {
        tipo: "macete",
        texto: "Nenhum atributo justifica perder a clareza.",
        explicacao: "Concisão demais, que deixa o texto obscuro, é erro. Tudo isso sempre na norma padrão.",
      },
      {
        tipo: "pegadinhas",
        itens: [
          {
            titulo: "Impessoal não é “só 3ª pessoa”",
            texto: "A impessoalidade não obriga a escrever tudo na 3ª pessoa. O que ela proíbe é o tom pessoal, a opinião e o afeto.",
          },
          {
            titulo: "“Encarecidamente”",
            texto: "Palavra afetiva, como “encarecidamente” ou “com muito carinho”, fere a impessoalidade.",
          },
        ],
      },
    ],
  },
  {
    titulo: "3 · Pronomes de tratamento",
    ancora: "prf-of-pronomes",
    blocos: [
      {
        tipo: "grade",
        titulo: "Vossa ou Sua?",
        colunas: ["Quando", "Forma", "Exemplo"],
        linhas: [
          { rotulo: "Falo com a pessoa", valores: ["Vossa", "“Vossa Excelência está convidado.”"] },
          { rotulo: "Falo da pessoa", valores: ["Sua", "“Sua Excelência chegou.”"] },
        ],
      },
      {
        tipo: "lista",
        titulo: "A concordância",
        itens: [
          "Verbo na **3ª pessoa**: “Vossa Excelência **está**”, nunca “estais”.",
          "Possessivo na **3ª pessoa**: “**sua** equipe”, nunca “vossa equipe”.",
          "Adjetivo concorda com o **sexo da pessoa**: senadora → “Vossa Excelência está **convidada**”.",
        ],
      },
      {
        tipo: "lista",
        titulo: "Fora do Manual",
        itens: [
          "**Digníssimo (DD)** e **Ilustríssimo (Ilmo.)**: abolidos.",
          "**Doutor** é título acadêmico, não forma de tratamento.",
        ],
      },
      {
        tipo: "macete",
        texto: "Errou o tratamento? O ato continua valendo.",
        explicacao: "O erro não permite negar o ato nem repreender quem escreveu. E quem exige tratamento especial deve tratar o outro do mesmo modo.",
      },
    ],
  },
  {
    titulo: "4 · Manual × Decreto 9.758",
    ancora: "prf-of-decreto",
    blocos: [
      {
        tipo: "comparativo",
        titulo: "Duas regras, dois públicos",
        colunas: [
          {
            titulo: "📘 Manual (2018)",
            itens: [
              "Vossa Excelência para altas autoridades.",
              "Vossa Senhoria nos demais casos.",
              "Endereçamento: “A Sua Excelência o Senhor” ou “Ao Senhor”.",
            ],
          },
          {
            titulo: "📜 Decreto (2019)",
            itens: [
              "Com agente público federal: só **“senhor”**, em qualquer cargo.",
              "Proíbe Vossa Excelência, Excelentíssimo, Vossa Senhoria, Vossa Magnificência, doutor, ilustre, digno e respeitável.",
              "Não vale para autoridade estrangeira nem para agente de outro Poder ou ente que exija o tratamento previsto em norma.",
            ],
          },
        ],
        sintese: "Na PRF, entre agentes federais, o dia a dia segue o Decreto. A prova pode pedir qualquer uma das duas regras.",
      },
    ],
  },
  {
    titulo: "5 · Vocativo, endereçamento e fecho",
    ancora: "prf-of-fechos",
    blocos: [
      {
        tipo: "grade",
        titulo: "Pelo Manual",
        colunas: ["Para quem", "Endereçamento", "Vocativo"],
        linhas: [
          { rotulo: "Chefe de Poder", valores: ["A Sua Excelência o Senhor", "Excelentíssimo Senhor Presidente da República,"] },
          { rotulo: "Outra autoridade com Vossa Excelência", valores: ["A Sua Excelência o Senhor", "Senhor Senador,"] },
          { rotulo: "Autoridade com Vossa Senhoria", valores: ["Ao Senhor", "Senhor + cargo,"] },
        ],
        nota: "“Excelentíssimo” fica só para chefes de Poder. Nunca “A Sua Senhoria o Senhor”.",
      },
      {
        tipo: "comparativo",
        titulo: "Os dois fechos",
        colunas: [
          { titulo: "🙇 Respeitosamente,", itens: ["Autoridade de hierarquia **superior**.", "Inclusive o Presidente da República."] },
          { titulo: "🤝 Atenciosamente,", itens: ["Mesma hierarquia ou **inferior**.", "Demais casos, como empresas e cidadãos."] },
        ],
        sintese: "Autoridade estrangeira segue rito próprio.",
      },
    ],
  },
  {
    titulo: "6 · O ofício desenhado",
    ancora: "prf-of-modelo",
    blocos: [],
    telas: [<ModeloOficio key="m" />, <LegendaOficio key="l" />],
  },
  {
    titulo: "7 · Data e formatação",
    ancora: "prf-of-formato",
    blocos: [
      {
        tipo: "passos",
        frase: "Montando o local e a data:",
        passos: [
          "Cidade, sem a sigla do estado: “Brasília”",
          "Vírgula e o dia, sem zero à esquerda; no primeiro dia, “1º”",
          "Mês com inicial minúscula e ano: “de abril de 2026”",
          "Ponto-final no fim",
        ],
        conclusao: "Brasília, 1º de abril de 2026.",
      },
      {
        tipo: "lista",
        titulo: "📐 A folha",
        itens: [
          "Papel **A4**, fonte **Calibri** ou **Carlito**.",
          "Margem esquerda de no mínimo **3 cm**; direita de **1,5 cm**; superior e inferior de **2 cm**.",
          "Página numerada a partir da **2ª**. O cabeçalho só aparece na **1ª**.",
          "Parágrafos numerados só quando são **3 ou mais**, desde o primeiro.",
        ],
      },
    ],
  },
  {
    titulo: "8 · Os expedientes",
    ancora: "prf-of-expedientes",
    blocos: [
      {
        tipo: "grade",
        titulo: "Quem manda para quem",
        colunas: ["Expediente", "Uso"],
        linhas: [
          { rotulo: "📄 Ofício", valores: ["Comunicação geral, inclusive entre setores do mesmo órgão. Aviso e memorando deixaram de existir em 2018."] },
          { rotulo: "📑 Exposição de motivos", valores: ["Ministro ao Presidente ou ao Vice. Com mais de um Ministério, é interministerial e todos assinam."] },
          { rotulo: "✉️ Mensagem", valores: ["Do chefe do Executivo ao Legislativo."] },
          { rotulo: "📧 E-mail", valores: ["Só vale como documento original com certificação digital."] },
        ],
      },
    ],
  },
  {
    titulo: "9 · As pegadinhas da prova",
    ancora: "prf-of-pegadinhas",
    blocos: [
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "“Memorando interno”", texto: "Não existe mais: desde 2018 a comunicação entre setores é ofício." },
          { titulo: "“Ilmo. Sr.”", texto: "Ilustríssimo e Digníssimo foram abolidos pelo Manual." },
          { titulo: "“Vossa Excelência e vossa equipe”", texto: "O possessivo vai para a 3ª pessoa: “sua equipe”." },
          { titulo: "“Brasília-DF, 01 de Abril de 2026”", texto: "Três erros: sigla do estado, zero à esquerda e mês em maiúscula." },
          { titulo: "Cabeçalho em todas as páginas", texto: "Errado: o cabeçalho vai só na primeira página." },
          { titulo: "Fecho e vocativo numerados", texto: "Errado: só os parágrafos do texto recebem número." },
        ],
      },
    ],
  },
];
