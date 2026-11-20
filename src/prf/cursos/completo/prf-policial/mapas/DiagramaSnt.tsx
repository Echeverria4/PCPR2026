import { comDestaque } from "./Poster";
import { Emoji } from "../../../../../icones/Emoji";

/**
 * Diagrama dos órgãos do Sistema Nacional de Trânsito em três níveis (pedido de 20/11/2026, a partir de um cartaz
 * que o estudante mandou). Mostra o nome de cada órgão, como o CTB o chama e o que faz, com o artigo.
 * Conferido no texto compilado do CTB (livro/ctb.json, Planalto) e, para a guarda municipal, na tese do Tema 472 do STF.
 * O cartaz original tinha erros que aqui ficaram de fora: o CONTRAN não faz lei, a PRF não é subordinada ao DNIT
 * nem cuida de obra na rodovia, e as faixas não são chefia (cada ente organiza os próprios órgãos, art. 8º).
 */

interface Orgao {
  id: string;
  sigla: string;
  emoji: string;
  /** Nome por extenso, como o órgão se chama na prática. */
  nome: string;
  /** Como o CTB chama o órgão, com o artigo. */
  lei: string;
  faz: string[];
}

interface Nivel {
  id: "federal" | "estadual" | "municipal";
  titulo: string;
  sub: string;
  orgaos: Orgao[];
}

const NIVEIS: Nivel[] = [
  {
    id: "federal",
    titulo: "Nível federal",
    sub: "União",
    orgaos: [
      {
        id: "contran",
        sigla: "CONTRAN",
        emoji: "🧭",
        nome: "Conselho Nacional de Trânsito",
        lei: "**Coordenador** do Sistema e órgão máximo normativo e consultivo (art. 7º, I)",
        faz: [
          "Baixa **resoluções** que regulamentam o CTB (art. 12, I)",
          "Lei, não: lei de trânsito é da **União**, pelo Congresso (CF, art. 22, XI)",
          "Resolve conflito entre União, **estados** e DF (art. 12, XIV)",
        ],
      },
      {
        id: "senatran",
        sigla: "SENATRAN",
        emoji: "🏛️",
        nome: "Secretaria Nacional de Trânsito (antigo Denatran)",
        lei: "**Órgão máximo executivo** de trânsito da União (art. 19)",
        faz: [
          "Supervisiona e coordena; mantém **Renach** e Renavam (art. 19)",
          "CNH e documentos do veículo: por **delegação** aos Detrans (art. 19, VII)",
          "O dirigente é o **secretário-executivo** do Contran (art. 10, § 5º)",
        ],
      },
      {
        id: "dnit",
        sigla: "DNIT",
        emoji: "🛣️",
        nome: "Departamento Nacional de Infraestrutura de Transportes",
        lei: "Órgão **executivo rodoviário** da União (art. 7º, IV, e art. 21)",
        faz: [
          "Projeta, opera e **sinaliza** as rodovias federais (art. 21, II e III)",
          "Fiscaliza **peso**, dimensões e lotação (art. 21, VIII)",
        ],
      },
      {
        id: "prf",
        sigla: "PRF",
        emoji: "🚓",
        nome: "Polícia Rodoviária Federal",
        lei: "Aparece pelo **próprio nome** no art. 7º, V (e na CF, art. 144, § 2º)",
        faz: [
          "**Patrulhamento ostensivo** das rodovias e estradas federais (art. 20, II)",
          "Fiscaliza; aplica advertência por escrito e **multa** (art. 20, III)",
          "Medida emergencial na via: **pede** ao órgão rodoviário (art. 20, VI)",
        ],
      },
    ],
  },
  {
    id: "estadual",
    titulo: "Nível estadual",
    sub: "Estados e DF",
    orgaos: [
      {
        id: "cetran",
        sigla: "CETRAN · CONTRANDIFE",
        emoji: "📜",
        nome: "Conselho Estadual de Trânsito · Conselho de Trânsito do Distrito Federal",
        lei: "Órgãos normativos, consultivos e **coordenadores** (art. 7º, II)",
        faz: [
          "Julgam o recurso contra a **Jari**; depois, não cabe recurso administrativo (art. 14, V e parágrafo único)",
          "Resolvem conflito entre **municípios** (art. 14, IX)",
          "Membros nomeados pelo **governador**, por 2 anos (art. 15)",
        ],
      },
      {
        id: "detran",
        sigla: "DETRAN",
        emoji: "🚗",
        nome: "Departamento de Trânsito do estado ou do DF, com a UF na sigla (ex.: Detran-SP, Detran-DF)",
        lei: "Órgão **executivo de trânsito** do Estado e do DF (art. 22)",
        faz: [
          "**Habilitação**: CNH, suspensão e cassação (art. 22, II)",
          "**Registro**, emplacamento e licenciamento de veículos (art. 22, III)",
          "Os dois por **delegação** da Senatran (art. 22, II e III)",
        ],
      },
      {
        id: "der",
        sigla: "DER",
        emoji: "🚧",
        nome: "Departamento de Estradas de Rodagem (ex.: DER-SP; o nome muda em alguns estados)",
        lei: "Órgão **executivo rodoviário** do Estado (art. 7º, IV, e art. 21)",
        faz: [
          "Projeta, opera e **sinaliza** as rodovias estaduais (art. 21, II e III)",
          "Fiscaliza **peso** e dimensões e multa no âmbito dele (art. 21, VI e VIII)",
        ],
      },
      {
        id: "pm",
        sigla: "PM",
        emoji: "👮",
        nome: "Polícia Militar: batalhão ou companhia de polícia rodoviária (o nome muda em cada estado)",
        lei: "Polícias Militares dos Estados e do DF (art. 7º, VI): **policiamento ostensivo** de trânsito (Anexo I)",
        faz: [
          "Fiscaliza só por **convênio**, como agente do órgão executivo (art. 23, III)",
          "Lavra auto quando **designada** pela autoridade de trânsito (art. 280, § 4º)",
        ],
      },
    ],
  },
  {
    id: "municipal",
    titulo: "Nível municipal",
    sub: "Municípios",
    orgaos: [
      {
        id: "municipio",
        sigla: "ÓRGÃO MUNICIPAL",
        emoji: "🏙️",
        nome: "Secretaria, departamento (ex.: Demutran) ou autarquia: o nome muda em cada cidade",
        lei: "Órgão **executivo de trânsito** do Município (art. 24); nas estradas municipais, executivo rodoviário (art. 21)",
        faz: [
          "Sinalização, operação e **estacionamento rotativo** (art. 24, III e X)",
          "**Privativo**: fiscalizar e multar estacionamento, parada e velocidade nas vias dele (art. 24, § 4º)",
          "No DF, esse papel é do **Detran-DF** (art. 24, § 1º)",
        ],
      },
      {
        id: "agentes",
        sigla: "AGENTES",
        emoji: "🦺",
        nome: "Agente de trânsito da cidade e guarda municipal",
        lei: "**Agente da autoridade** de trânsito, quem lavra o auto (Anexo I)",
        faz: [
          "Agente de trânsito: servidor **efetivo** de carreira do órgão (Anexo I)",
          "Guarda municipal pode fiscalizar e **multar**, se a lei der a função (STF, Tema 472)",
        ],
      },
    ],
  },
];

const JARI: Orgao = {
  id: "jari",
  sigla: "JARI",
  emoji: "⚖️",
  nome: "Juntas Administrativas de Recursos de Infrações",
  lei: "Órgãos **colegiados** (art. 7º, VII, e art. 16)",
  faz: [
    "Funciona junto a **cada** órgão executivo de trânsito ou rodoviário (art. 16)",
    "Julga o recurso contra as **penalidades** desse órgão (art. 17, I)",
  ],
};

/** Ordem em que os cartões aparecem; a chave do modo memória é `o-<id>`. */
const TODOS = [...NIVEIS.flatMap((n) => n.orgaos), JARI];

/** Aulas e capítulos do livro em que o diagrama aparece, logo abaixo da árvore do mapa. */
export const MAPAS_COM_DIAGRAMA_SNT = new Set(["transito-04", "cap-ii"]);

interface Props {
  memoria: boolean;
  abertos: Set<string>;
  onAlternar: (chave: string) => void;
}

function CartaoOrgao({ o, memoria, abertos, onAlternar }: Props & { o: Orgao }) {
  const chave = `o-${o.id}`;
  const escondido = memoria && !abertos.has(chave);
  const cabeca = (
    <>
      <span className="prf-snt-emoji" aria-hidden="true">
        <Emoji e={o.emoji} />
      </span>
      <span className="prf-snt-sigla">{o.sigla}</span>
      {memoria && <span className="prf-snt-pista">{escondido ? "toque para ver" : "toque para esconder"}</span>}
    </>
  );
  return (
    <li className="prf-snt-orgao" data-orgao={o.id}>
      {memoria ? (
        <button type="button" className="prf-snt-cab" aria-expanded={!escondido} onClick={() => onAlternar(chave)}>
          {cabeca}
        </button>
      ) : (
        <div className="prf-snt-cab">{cabeca}</div>
      )}
      {!escondido && (
        <div className="prf-snt-corpo">
          <p className="prf-snt-nome">{o.nome}</p>
          <p className="prf-snt-lei">
            <span className="prf-snt-rotulo">Como o CTB chama</span>
            {comDestaque(o.lei)}
          </p>
          <ul className="prf-snt-faz">
            {o.faz.map((f) => (
              <li key={f}>{comDestaque(f)}</li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

/** Os órgãos do SNT em faixas (União, Estados e DF, Municípios), a JARI em todas elas e quem é autoridade ou agente. */
export default function DiagramaSnt({ memoria, abertos, onAlternar }: Props) {
  const vistos = TODOS.filter((o) => abertos.has(`o-${o.id}`)).length;
  const props = { memoria, abertos, onAlternar };
  return (
    <section className="prf-snt" data-diagrama="snt" aria-labelledby="prf-snt-titulo">
      <header className="prf-snt-topo">
        <h3 className="prf-snt-titulo" id="prf-snt-titulo">
          <Emoji e="🚦" /> Órgãos do SNT em 3 níveis
        </h3>
        <p className="prf-snt-sub">O nome de cada órgão, como o CTB o chama e o que ele faz</p>
      </header>
      {memoria ? (
        <p className="prf-snt-aviso" aria-live="polite">
          Diga o nome por extenso de cada sigla e como a lei chama o órgão. Depois toque para conferir. Vistos: {vistos} de{" "}
          {TODOS.length}
        </p>
      ) : (
        <p className="prf-snt-aviso">
          Cada faixa é um ente da federação, não uma chefia: o Detran é do estado, e o órgão municipal, da cidade (art. 8º).
          O que liga tudo são as normas e a coordenação do Contran (art. 12).
        </p>
      )}

      {NIVEIS.map((n) => (
        <div key={n.id} className="prf-snt-nivel" data-nivel={n.id}>
          <h4 className="prf-snt-nivel-nome">
            {n.titulo}
            <small>{n.sub}</small>
          </h4>
          <ul className="prf-snt-orgaos">
            {n.orgaos.map((o) => (
              <CartaoOrgao key={o.id} o={o} {...props} />
            ))}
          </ul>
        </div>
      ))}

      <div className="prf-snt-nivel" data-nivel="todos">
        <h4 className="prf-snt-nivel-nome">
          Em todos os níveis
          <small>Recurso da multa</small>
        </h4>
        <div className="prf-snt-jari">
          <ul className="prf-snt-orgaos prf-snt-orgaos-um">
            <CartaoOrgao o={JARI} {...props} />
          </ul>
          <p className="prf-snt-caminho-titulo">Caminho do recurso (art. 289)</p>
          <ol className="prf-snt-caminho">
            <li>
              <span className="prf-snt-passo">Penalidade aplicada pelo órgão</span>
            </li>
            <li>
              <span className="prf-snt-passo">
                1º recurso: <strong>JARI</strong> desse órgão
              </span>
            </li>
            <li className="prf-snt-ou">
              <span className="prf-snt-passo">
                2º recurso: <strong>Cetran</strong> ou Contrandife, se quem aplicou foi o estado, o município ou o DF
              </span>
              <span className="prf-snt-ou-sep">ou</span>
              <span className="prf-snt-passo">
                2º recurso: <strong>colegiado especial</strong>, se quem aplicou foi órgão da União (PRF, DNIT)
              </span>
            </li>
          </ol>
        </div>
      </div>

      <div className="prf-snt-quem">
        <p>
          <strong>Autoridade de trânsito:</strong> o dirigente máximo do órgão executivo, ou quem ele credenciar (Anexo I).
        </p>
        <p>
          <strong>Agente da autoridade:</strong> o agente de trânsito e o policial rodoviário federal; o policial militar, só
          quando designado (Anexo I).
        </p>
      </div>
    </section>
  );
}
