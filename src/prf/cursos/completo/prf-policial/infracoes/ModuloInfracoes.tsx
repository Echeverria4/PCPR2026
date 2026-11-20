import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Emoji } from "../../../../../icones/Emoji";
import type { PropsModulo } from "../../tipos";
import type { TelaLivro } from "../livro/tipos";
import { ARTIGOS, INFRACOES, LIGACOES, type Infracao, type Ligacao, type Natureza } from "./dados";

/** Capítulo XV do CTB no Livro: o das infrações. */
const CAPITULO = "cap-xv";
/** Capítulo XVI: o das penalidades (arts. 256 a 268). */
const CAPITULO_PENALIDADES = "cap-xvi";
const NATUREZAS: Natureza[] = ["gravissima", "grave", "media", "leve"];
const NOME: Record<Natureza, string> = { gravissima: "Gravíssima", grave: "Grave", media: "Média", leve: "Leve" };
const PLURAL: Record<Natureza, string> = { gravissima: "Gravíssimas", grave: "Graves", media: "Médias", leve: "Leves" };
/** Valor da multa (art. 258) e pontos na habilitação (art. 259) de cada natureza. */
const VALOR: Record<Natureza, number> = { gravissima: 293.47, grave: 195.23, media: 130.16, leve: 88.38 };
const PONTOS: Record<Natureza, number> = { gravissima: 7, grave: 5, media: 4, leve: 3 };

type Filtro = "todas" | "susp" | "agravada" | "sempontos" | "liga";
type TelaLista = { t: "lista"; nat: Natureza | "todas"; busca?: string; filtro?: Filtro };
type Tela = { t: "inicio" } | TelaLista | { t: "conta" } | { t: "especiais" } | { t: "ligacoes" } | { t: "teste" };
type Ir = (t: Tela) => void;
/** Abre o Livro (ou a aula) guardando o item de onde a pessoa saiu, para voltar nele. */
type AbrirLivro = (t: TelaLivro, item?: string) => void;
type AbrirAula = (aula: string, item?: string) => void;

const agravada = (r: Infracao) => r.fator > 1 || !!r.ateFator || !!r.fatorReinc;
const FILTROS: { id: Filtro; rotulo: string; teste: (r: Infracao) => boolean }[] = [
  { id: "todas", rotulo: "Todas", teste: () => true },
  { id: "susp", rotulo: "Com suspensão", teste: (r) => !!r.susp },
  { id: "agravada", rotulo: "Multa agravada", teste: agravada },
  { id: "sempontos", rotulo: "Sem pontos", teste: (r) => !!r.semPontos },
  { id: "liga", rotulo: "Com lei ligada", teste: (r) => !!r.liga?.length },
];

const reais = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const cor = (n: Natureza) => ({ "--inf-cor": `var(--inf-${n})` }) as CSSProperties;
const semAcento = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const naLista = (r: Infracao, n: Natureza | "todas") => n === "todas" || r.nat === n || (r.tambem?.includes(n) ?? false);
const contaLista = (n: Natureza) => INFRACOES.filter((r) => naLista(r, n)).length;
const ARTIGOS_COM_INFRACAO = new Set(INFRACOES.map((r) => r.art)).size;
const textoDe = (r: Infracao) => r.texto ?? ARTIGOS[r.art].caput;
const rotuloArt = (r: Infracao) => `Art. ${r.art}${r.inc ? `, ${r.inc}` : ""}${r.cel ? " (celular)" : ""}`;
const plural = (n: number, um: string, varios: string) => `${n} ${n === 1 ? um : varios}`;
/** "165, 165-A e 173". */
const emLista = (itens: string[]) => (itens.length < 2 ? itens.join("") : `${itens.slice(0, -1).join(", ")} e ${itens[itens.length - 1]}`);
const rotuloPar = (p: string) => p.match(/^(Parágrafo único|§ \d+º?)/)?.[1] ?? "parágrafo";
/** Parágrafos do artigo que dobram a multa de quem repete a infração em 12 meses. */
const dobro = (art: string) => (ARTIGOS[art]?.pars ?? []).filter((p) => /em dobro/.test(p));
const DOBRO = Object.values(ARTIGOS)
  .filter((a) => a.pars?.some((p) => /em dobro/.test(p)))
  .map((a) => a.art);

function rotuloNatureza(r: Infracao): string {
  if (r.id === "231-X") return "Média a gravíssima";
  if (r.id === "230-XXIII") return "Média (grave se repetir)";
  if (r.cel) return "Gravíssima (celular)";
  if (r.natTexto) return "Gravíssima (a do art. 162)";
  return NOME[r.nat];
}

function textoMulta(r: Infracao): string {
  if (r.art === "163" || r.art === "164") return "Multa do inciso do art. 162";
  if (r.id === "231-X") return "Multa pela regra do Contran";
  const base = VALOR[r.nat];
  if (r.ateFator) return `Multa ${reais(base)}, até ×${r.ateFator}`;
  const v = reais(base * r.fator);
  const s = r.fator === 1 ? `Multa ${v}` : r.fator < 1 ? `Multa 50% = ${v}` : `Multa ×${r.fator} = ${v}`;
  return r.id === "231-V" ? `${s} + valor por 200 kg` : s;
}

function textoPontos(r: Infracao): string {
  if (r.semPontos) return "Sem pontos";
  if (r.id === "231-X") return "4 a 7 pontos";
  return `${PONTOS[r.nat]} pontos`;
}

function textoSusp(r: Infracao): string | null {
  if (r.susp === "reincidencia") return "Suspensão se repetir";
  if (r.susp === "sim") return /12 \(doze\) meses/.test(r.penalidade) ? "Suspensão de 12 meses" : "Suspensão";
  return null;
}

/* ---------- Busca ---------- */

const INDICE = new Map(
  INFRACOES.map((r) => [
    r.id,
    semAcento(
      [ARTIGOS[r.art].caput, r.texto, ...(r.alineas ?? []), r.penalidade, r.medida, ...(r.obs ?? []), rotuloNatureza(r)]
        .filter(Boolean)
        .join(" "),
    ),
  ]),
);

interface Alvo {
  art: string;
  inc?: string;
}

/** "165", "165-A", "art. 230, XXIII" ou "163 e 164" viram artigos; o resto é busca por palavra. */
function alvosDaBusca(q: string): Alvo[] | null {
  const partes = semAcento(q)
    .replace(/\bart(igo)?s?\.?(?=\s|\d|$)/g, " ")
    .split(/[\s,;]+/)
    .filter((p) => p && p !== "e");
  if (partes.length === 0) return null;
  const artigo = (p: string) => {
    const m = p.match(/^(\d{3})(?:-?([a-d]))?$/);
    return m ? m[1] + (m[2] ? `-${m[2].toUpperCase()}` : "") : null;
  };
  if (partes.length === 2 && artigo(partes[0]) && /^[ivxl]+$/.test(partes[1])) {
    return [{ art: artigo(partes[0])!, inc: partes[1].toUpperCase() }];
  }
  const arts = partes.map(artigo);
  return arts.every(Boolean) ? arts.map((art) => ({ art: art! })) : null;
}

function filtrar(nat: Natureza | "todas", busca: string, filtro: Filtro): Infracao[] {
  const teste = FILTROS.find((f) => f.id === filtro)?.teste ?? (() => true);
  let lista = INFRACOES.filter((r) => naLista(r, nat) && teste(r));
  const q = busca.trim();
  if (!q) return lista;
  const alvos = alvosDaBusca(q);
  if (alvos) {
    lista = lista.filter((r) => alvos.some((a) => a.art === r.art && (!a.inc || a.inc === r.inc)));
  } else {
    const palavras = semAcento(q)
      .split(/\s+/)
      .filter((p) => p.length > 1);
    lista = lista.filter((r) => palavras.every((p) => INDICE.get(r.id)!.includes(p)));
  }
  return lista;
}

function agrupar(itens: Infracao[]): { art: string; itens: Infracao[] }[] {
  const grupos: { art: string; itens: Infracao[] }[] = [];
  for (const r of itens) {
    const ultimo = grupos[grupos.length - 1];
    if (ultimo && ultimo.art === r.art) ultimo.itens.push(r);
    else grupos.push({ art: r.art, itens: [r] });
  }
  return grupos;
}

/* ---------- Módulo ---------- */

/**
 * Fica fora do componente: quem sai para o Livro ou para uma aula e volta reencontra a tela e o item em que
 * estava. Quem entra pelo cartão do módulo, sem ter saído por esses botões, começa no início.
 */
let memoria: { tela: Tela; foco: string | null; voltando: boolean } = { tela: { t: "inicio" }, foco: null, voltando: false };

/** Módulo da matéria Legislação de Trânsito: todas as infrações do CTB (arts. 161 a 255) por natureza, com as normas que completam cada uma. */
export default function ModuloInfracoes({ onVoltar, onLivro, onAula }: PropsModulo) {
  const [tela, setTela] = useState<Tela>(() => (memoria.voltando ? memoria.tela : { t: "inicio" }));
  const [foco, setFoco] = useState(() => (memoria.voltando ? memoria.foco : null));

  useEffect(() => {
    memoria = { ...memoria, foco: null, voltando: false };
  }, []);

  const ir: Ir = (t) => {
    memoria = { tela: t, foco: null, voltando: false };
    setFoco(null);
    setTela(t);
    window.scrollTo({ top: 0 });
  };
  // Busca e filtro mudam a tela sem rolar a página.
  const mudar = (t: TelaLista) => {
    memoria = { ...memoria, tela: t };
    setTela(t);
  };
  const livro: AbrirLivro = (t, item) => {
    memoria = { tela, foco: item ?? null, voltando: true };
    onLivro(t);
  };
  const aula: AbrirAula = (id, item) => {
    memoria = { tela, foco: item ?? null, voltando: true };
    onAula(id);
  };
  const sair = () => {
    memoria = { tela: { t: "inicio" }, foco: null, voltando: false };
    onVoltar();
  };

  return (
    <div className="prf-aulas-tela prf-inf">
      <nav className="prf-aulas-nav">
        {tela.t === "inicio" ? (
          <button className="prf-voltar" onClick={sair}>
            ← Aulas de Legislação de Trânsito
          </button>
        ) : (
          <button className="prf-voltar" onClick={() => ir({ t: "inicio" })}>
            ← Infrações
          </button>
        )}
      </nav>
      {tela.t === "inicio" && <Inicio ir={ir} />}
      {tela.t === "lista" && (
        <Lista key={tela.nat} tela={tela} foco={foco} ir={ir} mudar={mudar} livro={livro} aula={aula} />
      )}
      {tela.t === "conta" && <Conta ir={ir} livro={livro} />}
      {tela.t === "especiais" && <Especiais ir={ir} />}
      {tela.t === "ligacoes" && <Ligacoes livro={livro} aula={aula} />}
      {tela.t === "teste" && <Teste ir={ir} />}
    </div>
  );
}

/* ---------- Início ---------- */

const ATALHOS: { tela: Tela; emoji: string; titulo: string; texto: string }[] = [
  { tela: { t: "conta" }, emoji: "🧮", titulo: "Como a conta funciona", texto: "Pontos, multa agravada, suspensão e advertência" },
  { tela: { t: "especiais" }, emoji: "⚠️", titulo: "Casos especiais", texto: "As que fogem da regra e mais caem" },
  { tela: { t: "ligacoes" }, emoji: "🔗", titulo: "Leis que completam", texto: "Crimes, outros artigos e resoluções do Contran" },
  { tela: { t: "teste" }, emoji: "🎯", titulo: "Teste rápido", texto: "10 condutas: acerte a natureza" },
];

function Inicio({ ir }: { ir: Ir }) {
  return (
    <>
      <header className="prf-inf-cabeca">
        <span className="prf-inf-cabeca-icone" aria-hidden="true">
          <Emoji e="🚨" />
        </span>
        <div className="prf-inf-cabeca-texto">
          <p className="prf-inf-olho">Módulo · CTB, arts. 161 a 255</p>
          <h2 className="prf-inf-titulo">Infrações: de gravíssima a leve</h2>
          <p className="prf-inf-sub">
            Toda infração tem uma natureza. É ela que diz quantos pontos vão para a habilitação (art. 259) e quanto
            custa a multa (art. 258).
          </p>
        </div>
      </header>

      <div className="prf-inf-naturezas">
        {NATUREZAS.map((n) => (
          <button key={n} className="prf-inf-nat" style={cor(n)} onClick={() => ir({ t: "lista", nat: n })}>
            <span className="prf-inf-nat-nome">{PLURAL[n]}</span>
            <span className="prf-inf-nat-num">{PONTOS[n]} pontos</span>
            <span className="prf-inf-nat-num">{reais(VALOR[n])}</span>
            <span className="prf-inf-nat-qtd">{plural(contaLista(n), "infração", "infrações")} →</span>
          </button>
        ))}
      </div>

      <button className="prf-inf-todas" onClick={() => ir({ t: "lista", nat: "todas" })}>
        <span className="prf-inf-todas-icone" aria-hidden="true">
          <Emoji e="📖" />
        </span>
        <span className="prf-inf-todas-texto">
          <strong>Todas, na ordem dos artigos</strong>
          <span>
            {INFRACOES.length} itens em {ARTIGOS_COM_INFRACAO} artigos · busca por palavra ou número
          </span>
        </span>
        <span className="prf-inf-seta-grande" aria-hidden="true">
          →
        </span>
      </button>

      <div className="prf-inf-atalhos">
        {ATALHOS.map((a) => (
          <button key={a.titulo} className="prf-inf-atalho" onClick={() => ir(a.tela)}>
            <span className="prf-inf-atalho-icone" aria-hidden="true">
              <Emoji e={a.emoji} />
            </span>
            <span className="prf-inf-atalho-titulo">{a.titulo}</span>
            <span className="prf-inf-atalho-texto">{a.texto}</span>
          </button>
        ))}
      </div>
    </>
  );
}

/* ---------- Lista ---------- */

interface ListaProps {
  tela: TelaLista;
  foco: string | null;
  ir: Ir;
  mudar: (t: TelaLista) => void;
  livro: AbrirLivro;
  aula: AbrirAula;
}

function Lista({ tela, foco, ir, mudar, livro, aula }: ListaProps) {
  const busca = tela.busca ?? "";
  const filtro = tela.filtro ?? "todas";
  const nat = tela.nat;
  const todas = nat === "todas";
  const [abertos, setAbertos] = useState<Set<string>>(() => new Set(foco ? [foco] : []));
  const visiveis = useMemo(() => filtrar(nat, busca, filtro), [nat, busca, filtro]);
  const grupos = useMemo(() => agrupar(visiveis), [visiveis]);

  // Voltando do Livro: o item de onde a pessoa saiu aparece aberto, com o começo logo abaixo da barra fixa
  // (scroll-margin-top no CSS). Centralizar escondia o começo no celular, onde o item aberto é mais alto que a tela.
  useEffect(() => {
    if (!foco) return;
    const id = window.setTimeout(() => document.getElementById(`inf-${foco}`)?.scrollIntoView({ block: "start" }), 80);
    return () => window.clearTimeout(id);
  }, [foco]);

  const alternar = (id: string) =>
    setAbertos((atual) => {
      const novo = new Set(atual);
      if (novo.has(id)) novo.delete(id);
      else novo.add(id);
      return novo;
    });

  return (
    <>
      {todas ? (
        <header className="prf-inf-lista-cabeca">
          <h2 className="prf-inf-titulo">Todas as infrações</h2>
          <p className="prf-inf-sub">
            Na ordem do CTB, do art. 162 ao 255: {INFRACOES.length} itens em {ARTIGOS_COM_INFRACAO} artigos.
          </p>
        </header>
      ) : (
        <header className="prf-inf-lista-cabeca prf-inf-com-cor" style={cor(nat)}>
          <p className="prf-inf-olho">
            <span className="prf-inf-ponto" aria-hidden="true" /> Natureza
          </p>
          <h2 className="prf-inf-titulo">{PLURAL[nat]}</h2>
          <p className="prf-inf-sub">
            {PONTOS[nat]} pontos na habilitação · multa de {reais(VALOR[nat])} quando não há agravante ·{" "}
            {plural(contaLista(nat), "infração", "infrações")}
          </p>
        </header>
      )}

      <div className="prf-inf-busca-linha">
        <input
          className="prf-inf-busca"
          type="search"
          value={busca}
          placeholder="Palavra ou artigo: celular, 165, 230 XXIII"
          aria-label="Buscar infração por palavra ou número do artigo"
          onChange={(e) => mudar({ ...tela, busca: e.target.value })}
        />
        <div className="prf-inf-filtros" role="group" aria-label="Filtrar as infrações">
          {FILTROS.map((f) => (
            <button
              key={f.id}
              className="prf-inf-filtro"
              aria-pressed={filtro === f.id}
              onClick={() => mudar({ ...tela, filtro: f.id })}
            >
              {f.rotulo}
            </button>
          ))}
        </div>
      </div>

      <p className="prf-inf-contagem" aria-live="polite">
        {visiveis.length === 0
          ? "Nada encontrado."
          : `${plural(visiveis.length, "infração", "infrações")} em ${plural(grupos.length, "artigo", "artigos")}`}
      </p>

      {visiveis.length === 0 && (
        <div className="prf-inf-vazio">
          <p>Tente outra palavra, o número do artigo (ex.: 244) ou tire o filtro.</p>
          <div className="prf-inf-vazio-botoes">
            {busca && (
              <button className="botao" onClick={() => mudar({ ...tela, busca: "" })}>
                Limpar a busca
              </button>
            )}
            {!todas && (
              <button className="botao" onClick={() => ir({ t: "lista", nat: "todas", busca, filtro })}>
                Buscar em todas as naturezas
              </button>
            )}
          </div>
        </div>
      )}

      {grupos.map((g) => (
        <GrupoArtigo
          key={g.art}
          art={g.art}
          itens={g.itens}
          todas={todas}
          abertos={abertos}
          alternar={alternar}
          livro={livro}
          aula={aula}
        />
      ))}
    </>
  );
}

interface GrupoProps {
  art: string;
  itens: Infracao[];
  todas: boolean;
  abertos: Set<string>;
  alternar: (id: string) => void;
  livro: AbrirLivro;
  aula: AbrirAula;
}

function GrupoArtigo({ art, itens, todas, abertos, alternar, livro, aula }: GrupoProps) {
  const a = ARTIGOS[art];
  const soCaput = itens.every((r) => !r.inc);
  return (
    <section className="prf-inf-art" aria-labelledby={`inf-art-${art}`}>
      <header className="prf-inf-art-cabeca">
        <h3 className="prf-inf-art-num" id={`inf-art-${art}`}>
          Art. {art}
        </h3>
        <button
          className="prf-inf-art-livro"
          onClick={() => livro({ tipo: "capitulo", id: CAPITULO, art: a.artId }, itens[0].id)}
        >
          <Emoji e="📖" /> No Livro
        </button>
        {!soCaput && <p className="prf-inf-art-caput">{a.caput}:</p>}
      </header>
      <ul className="prf-inf-itens">
        {itens.map((r) => (
          <Item
            key={r.id}
            r={r}
            todas={todas}
            aberto={abertos.has(r.id)}
            alternar={() => alternar(r.id)}
            livro={livro}
            aula={aula}
          />
        ))}
      </ul>
      {a.pars && (
        <details className="prf-inf-pars">
          <summary>{a.pars.length === 1 ? "Parágrafo do artigo" : `${a.pars.length} parágrafos do artigo`}</summary>
          {a.pars.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </details>
      )}
    </section>
  );
}

interface ItemProps {
  r: Infracao;
  todas: boolean;
  aberto: boolean;
  alternar: () => void;
  livro: AbrirLivro;
  aula: AbrirAula;
}

function Item({ r, todas, aberto, alternar, livro, aula }: ItemProps) {
  const susp = textoSusp(r);
  const especial = !!(r.tambem || r.natTexto || r.cel);
  return (
    <li id={`inf-${r.id}`} className={`prf-inf-item${aberto ? " prf-inf-aberto" : ""}`} style={cor(r.nat)}>
      <button className="prf-inf-item-botao" aria-expanded={aberto} onClick={alternar}>
        <span className="prf-inf-inc">{r.inc ?? ""}</span>
        <span className="prf-inf-corpo">
          <span className="prf-inf-texto">{textoDe(r)}</span>
          {r.cel && <span className="prf-inf-extra">+ segurando ou manuseando o telefone celular (parágrafo único)</span>}
          {r.alineas && (
            <span className="prf-inf-alineas">
              {r.alineas.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </span>
          )}
          <span className="prf-inf-chips">
            {(todas || especial) && (
              <span className="prf-inf-chip prf-inf-chip-nat">
                <span className="prf-inf-ponto" aria-hidden="true" />
                {rotuloNatureza(r)}
              </span>
            )}
            <span className="prf-inf-chip">{textoPontos(r)}</span>
            <span className="prf-inf-chip">{textoMulta(r)}</span>
            {susp && <span className="prf-inf-chip prf-inf-chip-forte">{susp}</span>}
          </span>
        </span>
        <span className="prf-inf-seta" aria-hidden="true">
          {aberto ? "▴" : "▾"}
        </span>
      </button>
      {aberto && <Detalhe r={r} livro={livro} aula={aula} />}
    </li>
  );
}

const SEM_PONTOS = {
  II: "Não gera pontos para o condutor (art. 259, § 4º, II). A multa e as medidas continuam.",
  III: "Não gera pontos, porque a própria infração já traz a suspensão (art. 259, § 4º, III).",
};
const APREENSAO =
  "“Apreensão do veículo” ainda está no texto do artigo, mas essa penalidade foi revogada pela Lei 13.281/2016 (art. 256, IV, e art. 262).";

function linhaValor(r: Infracao): string | null {
  if (r.art === "163" || r.art === "164") return null;
  if (r.id === "231-X") return "Multa e pontos: de média a gravíssima, conforme a regulamentação do Contran.";
  const pontos = r.semPontos ? "sem pontos" : `${PONTOS[r.nat]} pontos`;
  const base = VALOR[r.nat];
  if (r.id === "231-V")
    return `Multa: ${reais(base)} mais o valor da tabela a cada 200 kg ou fração de excesso · ${pontos}.`;
  if (r.ateFator) return `Multa: ${reais(base)}, que pode chegar a ${reais(base * r.ateFator)} (até ${r.ateFator} vezes, conforme o risco) · ${pontos}.`;
  if (r.fator === 1) return `Multa: ${reais(base)} · ${pontos}.`;
  if (r.fator < 1) return `Multa: 50% de ${reais(base)} = ${reais(base * r.fator)} · ${pontos}.`;
  return `Multa: ${r.fator} × ${reais(base)} = ${reais(base * r.fator)} · ${pontos}.`;
}

function Detalhe({ r, livro, aula }: { r: Infracao; livro: AbrirLivro; aula: AbrirAula }) {
  const valor = linhaValor(r);
  const prazo12 = /12 \(doze\) meses/.test(r.penalidade);
  return (
    <div className="prf-inf-detalhe">
      <dl className="prf-inf-lei">
        <dt>Infração</dt>
        <dd>{r.natTexto ?? (r.cel ? "gravíssima (parágrafo único)" : NOME[r.nat].toLowerCase())}</dd>
        <dt>Penalidade</dt>
        <dd>
          {r.penalidade}
          {r.penAlineas && (
            <ul className="prf-inf-tabela-peso">
              {r.penAlineas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          )}
        </dd>
        {r.medida && (
          <>
            <dt>Medida administrativa</dt>
            <dd>{r.medida}</dd>
          </>
        )}
      </dl>
      <ul className="prf-inf-notas">
        {valor && <li>{valor}</li>}
        {r.fatorReinc && (
          <li>
            Se repetir em 12 meses: multa de {r.fatorReinc} vezes ({reais(VALOR[r.nat] * r.fatorReinc)}) e suspensão do
            direito de dirigir.
          </li>
        )}
        {r.susp === "sim" && (
          <li>
            {prazo12
              ? "Suspensão direta, pelo prazo de 12 meses que o próprio artigo traz."
              : "Suspensão direta: de 2 a 8 meses e, se repetir em 12 meses, de 8 a 18 meses (art. 261, § 1º, II)."}
          </li>
        )}
        {dobro(r.art).map((p) => (
          <li key={p}>Repetiu em 12 meses: a multa vai em dobro ({rotuloPar(p)}).</li>
        ))}
        {r.semPontos && <li>{SEM_PONTOS[r.semPontos]}</li>}
        {r.apreensao && <li>{APREENSAO}</li>}
        {r.obs?.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
      {r.liga && (
        <div className="prf-inf-ligas">
          <p className="prf-inf-ligas-titulo">Normas que completam</p>
          {r.liga.map((id) => (
            <CartaoLigacao key={id} l={LIGACOES[id]} item={r.id} livro={livro} aula={aula} />
          ))}
        </div>
      )}
      <button
        className="botao prf-inf-ler"
        onClick={() => livro({ tipo: "capitulo", id: CAPITULO, art: ARTIGOS[r.art].artId }, r.id)}
      >
        <Emoji e="📖" /> Ler o art. {r.art} inteiro no Livro do CTB
      </button>
    </div>
  );
}

const TIPO_LIGACAO: Record<Ligacao["tipo"], string> = {
  crime: "Crime de trânsito",
  ctb: "Outro artigo do CTB",
  res: "Resolução do Contran",
  lei: "Lei",
};

function CartaoLigacao({ l, item, livro, aula }: { l: Ligacao; item?: string; livro: AbrirLivro; aula: AbrirAula }) {
  return (
    <div className={`prf-inf-liga prf-inf-liga-${l.tipo}`}>
      <span className="prf-inf-liga-tipo">{TIPO_LIGACAO[l.tipo]}</span>
      <strong className="prf-inf-liga-titulo">
        {l.titulo} · {l.sub}
      </strong>
      <p className="prf-inf-liga-texto">{l.texto}</p>
      {l.art && l.cap ? (
        <button className="prf-inf-liga-botao" onClick={() => livro({ tipo: "capitulo", id: l.cap!, art: l.art }, item)}>
          <Emoji e="📖" /> Ler no Livro do CTB
        </button>
      ) : l.res ? (
        <button className="prf-inf-liga-botao" onClick={() => livro({ tipo: "resolucao", id: l.res! }, item)}>
          <Emoji e="📖" /> Ler a resolução no Livro
        </button>
      ) : l.aula ? (
        <button className="prf-inf-liga-botao" onClick={() => aula(l.aula!, item)}>
          ▶ Abrir a aula que explica
        </button>
      ) : null}
    </div>
  );
}

/* ---------- Como a conta funciona ---------- */

function Conta({ ir, livro }: { ir: Ir; livro: AbrirLivro }) {
  const comSusp = INFRACOES.filter((r) => r.susp).length;
  return (
    <>
      <header className="prf-inf-lista-cabeca">
        <h2 className="prf-inf-titulo">Como a conta funciona</h2>
        <p className="prf-inf-sub">O que a natureza da infração muda na prática. Arts. 256 a 268 do CTB.</p>
      </header>

      <section className="prf-inf-bloco">
        <h3 className="prf-inf-bloco-titulo">1. Natureza: pontos e multa</h3>
        <table className="prf-inf-tabela">
          <thead>
            <tr>
              <th scope="col">Natureza</th>
              <th scope="col">Pontos</th>
              <th scope="col">Multa</th>
            </tr>
          </thead>
          <tbody>
            {NATUREZAS.map((n) => (
              <tr key={n} style={cor(n)}>
                <th scope="row">
                  <span className="prf-inf-ponto" aria-hidden="true" /> {NOME[n]}
                </th>
                <td>{PONTOS[n]}</td>
                <td>{reais(VALOR[n])}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="prf-inf-fonte">Pontos: art. 259. Valores: art. 258.</p>
      </section>

      <section className="prf-inf-bloco">
        <h3 className="prf-inf-bloco-titulo">2. Multa agravada</h3>
        <p>
          Quando o artigo diz “multa (três vezes)”, multiplique o valor da natureza (art. 258, § 2º). Exemplo: dirigir
          sem habilitação (art. 162, I) é gravíssima: 3 × {reais(VALOR.gravissima)} = {reais(VALOR.gravissima * 3)}.
        </p>
        <button className="botao" onClick={() => ir({ t: "lista", nat: "todas", filtro: "agravada" })}>
          Ver as multas agravadas
        </button>
      </section>

      <section className="prf-inf-bloco">
        <h3 className="prf-inf-bloco-titulo">3. Suspensão por pontos (art. 261, I)</h3>
        <p>Somando os pontos de 12 meses, a habilitação é suspensa com:</p>
        <ul className="prf-inf-notas">
          <li>20 pontos, se houver 2 ou mais infrações gravíssimas;</li>
          <li>30 pontos, se houver 1 gravíssima;</li>
          <li>40 pontos, se não houver nenhuma gravíssima.</li>
        </ul>
        <p>
          Prazo: de 6 meses a 1 ano; se repetir em 12 meses, de 8 meses a 2 anos (§ 1º, I). Quem dirige como
          profissional, com atividade remunerada, só é suspenso aos 40 pontos, qualquer que seja a natureza, e pode
          fazer curso preventivo de reciclagem aos 30 (§ 5º). A suspensão apaga esses pontos para a contagem seguinte
          (§ 3º).
        </p>
      </section>

      <section className="prf-inf-bloco">
        <h3 className="prf-inf-bloco-titulo">4. Suspensão direta (art. 261, II)</h3>
        <p>
          Algumas infrações já trazem a suspensão no próprio artigo. Prazo: de 2 a 8 meses, salvo quando o artigo diz
          outro (como os 12 meses do art. 165); se repetir em 12 meses, de 8 a 18 meses (§ 1º, II). Essas infrações não
          geram pontos (art. 259, § 4º, III). Quem é avisado da suspensão e dirige comete a infração do art. 162, II
          (art. 261, § 9º).
        </p>
        <button className="botao" onClick={() => ir({ t: "lista", nat: "todas", filtro: "susp" })}>
          Ver as {comSusp} com suspensão
        </button>
      </section>

      <section className="prf-inf-bloco">
        <h3 className="prf-inf-bloco-titulo">5. Advertência por escrito (art. 267)</h3>
        <p>
          Infração leve ou média, punível com multa, de quem não cometeu nenhuma outra infração nos últimos 12 meses: a
          lei manda aplicar a advertência por escrito.
        </p>
      </section>

      <section className="prf-inf-bloco">
        <h3 className="prf-inf-bloco-titulo">6. As penalidades do art. 256</h3>
        <ul className="prf-inf-notas">
          <li>advertência por escrito;</li>
          <li>multa;</li>
          <li>suspensão do direito de dirigir;</li>
          <li>cassação da Carteira Nacional de Habilitação;</li>
          <li>cassação da Permissão para Dirigir;</li>
          <li>frequência obrigatória em curso de reciclagem.</li>
        </ul>
        <p>
          O inciso IV (apreensão do veículo) e o art. 262 foram revogados pela Lei 13.281/2016, mas alguns artigos de
          infração ainda trazem a palavra. Retenção, remoção e recolhimento de documentos são medidas administrativas
          (art. 269), não penalidades. E as penalidades não afastam a punição pelo crime de trânsito (art. 256, § 1º).
        </p>
        <button className="botao" onClick={() => livro({ tipo: "capitulo", id: CAPITULO_PENALIDADES, art: "art-256" })}>
          <Emoji e="📖" /> Ler as penalidades no Livro
        </button>
      </section>
    </>
  );
}

/* ---------- Casos especiais ---------- */

const ESPECIAIS: { titulo: string; texto: string; ir: TelaLista }[] = [
  {
    titulo: "Arts. 165 e 165-A · Álcool e recusa ao teste",
    texto: `Gravíssimas, multa de 10 vezes (${reais(VALOR.gravissima * 10)}) e suspensão por 12 meses. Repetiu em 12 meses: multa em dobro. Qualquer concentração de álcool já basta (art. 276).`,
    ir: { t: "lista", nat: "todas", busca: "165, 165-A" },
  },
  {
    titulo: "Arts. 165-B a 165-D · Exame toxicológico",
    texto: `Gravíssimas, multa de 5 vezes (${reais(VALOR.gravissima * 5)}). Nos arts. 165-B e 165-C, quem repete em 12 meses paga 10 vezes e tem a suspensão.`,
    ir: { t: "lista", nat: "todas", busca: "165-B, 165-C, 165-D" },
  },
  {
    titulo: "Arts. 163 e 164 · Entregar ou permitir a direção",
    texto:
      "Quem entrega a direção (163) ou deixa a pessoa assumir o volante (164) recebe a natureza e a multa do inciso do art. 162 em que o condutor se encaixa. Todas são gravíssimas.",
    ir: { t: "lista", nat: "todas", busca: "162, 163, 164" },
  },
  {
    titulo: "Art. 218 · Velocidade",
    texto:
      "Até 20% acima da máxima: média. Mais de 20% até 50%: grave. Mais de 50%: gravíssima, multa de 3 vezes e suspensão.",
    ir: { t: "lista", nat: "todas", busca: "218" },
  },
  {
    titulo: "Art. 252, V · Celular na mão",
    texto:
      "Dirigir com apenas uma das mãos: média. Segurando ou manuseando o celular: gravíssima (parágrafo único). Fone no ouvido ligado ao som ou ao celular: média (inciso VI).",
    ir: { t: "lista", nat: "todas", busca: "252" },
  },
  {
    titulo: "Art. 253-A · Bloquear a via",
    texto: `Gravíssima, multa de 20 vezes (${reais(VALOR.gravissima * 20)}) e suspensão por 12 meses. Organizadores: multa de 60 vezes (§ 1º). Repetiu em 12 meses: em dobro (§ 2º).`,
    ir: { t: "lista", nat: "todas", busca: "253-A" },
  },
  {
    titulo: "Art. 230, XXIII · Tempo ao volante",
    texto: "Média. Quem comete a mesma infração de novo em 12 meses passa para grave (§ 1º).",
    ir: { t: "lista", nat: "todas", busca: "230 XXIII" },
  },
  {
    titulo: "Art. 231, V · Excesso de peso",
    texto:
      "Média, mais um valor a cada 200 kg ou fração de excesso: de R$ 5,32 (até 600 kg) a R$ 53,20 (acima de 5.001 kg).",
    ir: { t: "lista", nat: "todas", busca: "231 V" },
  },
  {
    titulo: "Art. 231, X · Capacidade máxima de tração",
    texto:
      "A única que vai de média a gravíssima: depende da relação entre o excesso de peso e a capacidade máxima de tração, como o Contran regulamentar.",
    ir: { t: "lista", nat: "todas", busca: "231 X" },
  },
  {
    titulo: "Art. 244, §§ 1º e 2º · Ciclos e ciclomotores",
    texto:
      "Para ciclos, o § 1º manda aplicar os incisos III, VII e VIII e traz as alíneas a, b e c. Para ciclomotores, o § 2º manda aplicar a alínea b. A pena “média e multa” vem logo depois do § 2º.",
    ir: { t: "lista", nat: "todas", busca: "244" },
  },
  {
    titulo: "Art. 246 · Obstáculo na via",
    texto:
      "Gravíssima, com multa que a autoridade pode agravar em até 5 vezes, conforme o risco. Vale para a pessoa física ou jurídica responsável pela obstrução.",
    ir: { t: "lista", nat: "todas", busca: "246" },
  },
  {
    titulo: "Art. 254 · Pedestre",
    texto: `Leve, com multa de 50% do valor da leve: ${reais(VALOR.leve * 0.5)}.`,
    ir: { t: "lista", nat: "todas", busca: "254" },
  },
  {
    titulo: "Multa em dobro se repetir em 12 meses",
    texto: `Arts. ${emLista(DOBRO)}.`,
    ir: { t: "lista", nat: "todas", busca: DOBRO.join(", ") },
  },
  {
    titulo: "Sem pontos para o condutor",
    texto:
      "Arts. 221, 230 (VII e XXI), 232, 233, 240 e 241 (art. 259, § 4º, II; o art. 233-A, citado ali, foi vetado) e todas as que já trazem a suspensão no próprio artigo (§ 4º, III).",
    ir: { t: "lista", nat: "todas", filtro: "sempontos" },
  },
];

function Especiais({ ir }: { ir: Ir }) {
  return (
    <>
      <header className="prf-inf-lista-cabeca">
        <h2 className="prf-inf-titulo">Casos especiais</h2>
        <p className="prf-inf-sub">As infrações que fogem da regra. Toque em “Ver na lista” para ler o artigo.</p>
      </header>
      <div className="prf-inf-especiais">
        {ESPECIAIS.map((c) => (
          <article key={c.titulo} className="prf-inf-especial">
            <h3 className="prf-inf-especial-titulo">{c.titulo}</h3>
            <p>{c.texto}</p>
            <button className="prf-inf-liga-botao" onClick={() => ir(c.ir)}>
              Ver na lista →
            </button>
          </article>
        ))}
      </div>
    </>
  );
}

/* ---------- Leis que completam ---------- */

const GRUPOS_LIGACAO: { tipo: Ligacao["tipo"]; titulo: string; nota?: string }[] = [
  {
    tipo: "crime",
    titulo: "Crimes do CTB (Capítulo XIX)",
    nota: "A infração gera multa e outras penalidades na esfera administrativa. O crime vai para o processo penal. A mesma conduta pode gerar os dois (art. 256, § 1º).",
  },
  { tipo: "ctb", titulo: "Outros artigos do CTB" },
  { tipo: "res", titulo: "Resoluções do Contran" },
  { tipo: "lei", titulo: "Outras leis" },
];

function Ligacoes({ livro, aula }: { livro: AbrirLivro; aula: AbrirAula }) {
  const usadas = useMemo(() => {
    const m = new Map<string, string[]>();
    for (const r of INFRACOES) {
      if (r.cel) continue;
      for (const id of r.liga ?? []) m.set(id, [...(m.get(id) ?? []), r.inc ? `${r.art}, ${r.inc}` : r.art]);
    }
    return m;
  }, []);
  const todas = Object.values(LIGACOES);
  return (
    <>
      <header className="prf-inf-lista-cabeca">
        <h2 className="prf-inf-titulo">Leis que completam</h2>
        <p className="prf-inf-sub">
          Algumas infrações só ficam claras junto com outra norma: um crime do CTB, outro artigo ou uma resolução do
          Contran. Toque para ler a norma ou abrir a aula.
        </p>
      </header>
      {GRUPOS_LIGACAO.map((g) => {
        const lista = todas.filter((l) => l.tipo === g.tipo);
        if (lista.length === 0) return null;
        return (
          <section key={g.tipo} className="prf-inf-bloco">
            <h3 className="prf-inf-bloco-titulo">{g.titulo}</h3>
            {g.nota && <p className="prf-inf-nota">{g.nota}</p>}
            <div className="prf-inf-ligas-lista">
              {lista.map((l) => (
                <div key={l.id} className="prf-inf-liga-com-uso">
                  <CartaoLigacao l={l} livro={livro} aula={aula} />
                  {usadas.get(l.id) && (
                    <p className="prf-inf-uso">Infrações: art. {emLista(usadas.get(l.id)!)}.</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}

/* ---------- Teste rápido ---------- */

/** Ficam de fora as de natureza variável ou que dependem de outro artigo para ter sentido. */
const SORTEAVEIS = INFRACOES.filter((r) => !r.tambem && !r.natTexto && !r.cel && !r.id.startsWith("244-p"));
const POR_TESTE = 10;

function sortear(): Infracao[] {
  const a = [...SORTEAVEIS];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, POR_TESTE);
}

function Teste({ ir }: { ir: Ir }) {
  const [rodada, setRodada] = useState<Infracao[]>(sortear);
  const [respostas, setRespostas] = useState<Natureza[]>([]);
  const [pos, setPos] = useState(0);
  const acertos = respostas.filter((n, i) => n === rodada[i].nat).length;

  const novo = () => {
    setRodada(sortear());
    setRespostas([]);
    setPos(0);
    window.scrollTo({ top: 0 });
  };

  if (pos >= rodada.length) {
    const erros = rodada.filter((r, i) => respostas[i] !== r.nat);
    return (
      <>
        <header className="prf-inf-lista-cabeca">
          <h2 className="prf-inf-titulo">
            Você acertou {acertos} de {rodada.length}
          </h2>
          <p className="prf-inf-sub">
            {acertos === rodada.length
              ? "Todas certas. Faça outro teste para ver condutas novas."
              : "Veja abaixo as que errou e faça outro teste."}
          </p>
        </header>
        {erros.length > 0 && (
          <ul className="prf-inf-erros">
            {erros.map((r) => (
              <li key={r.id} style={cor(r.nat)}>
                <strong>
                  {rotuloArt(r)}: {NOME[r.nat].toLowerCase()}
                </strong>
                <span>{textoDe(r)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="prf-inf-vazio-botoes">
          <button className="botao botao-ouro" onClick={novo}>
            Fazer outro teste
          </button>
          <button className="botao" onClick={() => ir({ t: "inicio" })}>
            Voltar ao módulo
          </button>
        </div>
      </>
    );
  }

  const r = rodada[pos];
  const resposta = respostas[pos];
  const susp = textoSusp(r);
  return (
    <>
      <header className="prf-inf-lista-cabeca">
        <h2 className="prf-inf-titulo">Teste rápido</h2>
        <p className="prf-inf-sub">Leia a conduta e escolha a natureza.</p>
        <div className="prf-inf-progresso">
          <span className="prf-medidor" aria-hidden="true">
            <span style={{ width: `${(pos / rodada.length) * 100}%` }} />
          </span>
          <span>
            {pos + 1} de {rodada.length}
          </span>
        </div>
      </header>
      <div className="prf-inf-teste-card">
        {r.inc && <p className="prf-inf-teste-caput">{ARTIGOS[r.art].caput}:</p>}
        <p className="prf-inf-teste-texto">{textoDe(r)}</p>
        {r.alineas && (
          <ul className="prf-inf-teste-alineas">
            {r.alineas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="prf-inf-opcoes">
        {NATUREZAS.map((n) => {
          const certa = !!resposta && n === r.nat;
          const errada = !!resposta && n === resposta && n !== r.nat;
          return (
            <button
              key={n}
              className={`prf-inf-opcao${certa ? " prf-inf-certa" : ""}${errada ? " prf-inf-errada" : ""}`}
              style={cor(n)}
              disabled={!!resposta}
              onClick={() =>
                setRespostas((atual) => {
                  const novas = [...atual];
                  novas[pos] = n;
                  return novas;
                })
              }
            >
              <span className="prf-inf-ponto" aria-hidden="true" />
              {NOME[n]}
              {certa && " ✓"}
              {errada && " ✗"}
            </button>
          );
        })}
      </div>
      {resposta && (
        <div className={`prf-inf-retorno ${resposta === r.nat ? "prf-inf-retorno-ok" : "prf-inf-retorno-erro"}`} role="status">
          <strong>{resposta === r.nat ? "✓ Acertou!" : `✗ Esta é ${NOME[r.nat].toLowerCase()}.`}</strong>
          <p>
            {rotuloArt(r)} · {textoPontos(r)} · {textoMulta(r)}
            {susp ? ` · ${susp}` : ""}
          </p>
          <button
            className="botao botao-ouro"
            onClick={() => {
              setPos(pos + 1);
              window.scrollTo({ top: 0 });
            }}
          >
            {pos + 1 < rodada.length ? "Próxima →" : "Ver o resultado"}
          </button>
        </div>
      )}
    </>
  );
}
