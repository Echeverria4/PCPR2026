import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import texto from "./ctb.json?raw";
import { MAPA_DO_CAPITULO } from "./mapas";
import { alternarLido, lerProgresso, salvarModoMemoria, salvarNotas, type ProgressoLivro } from "./progresso";
import { RESOLUCOES, type ResolucaoContran } from "./resolucoes";
import type { CapituloCtb, ItemCapitulo, ParteArtigo, TelaLivro } from "./tipos";
import { Arvore, Barra, Estrada, Nota, diaCurto, plural } from "../mapas/Poster";
import type { MapaAula } from "../mapas/tipos";
import { GRUPOS } from "../grupos";
import { nomeAula } from "../../../../aulas/rotulos";
import { Emoji, TextoEmoji } from "../../../../../icones/Emoji";
import type { PropsLivro } from "../../tipos";

/** A lei inteira, como saiu da página compilada do Planalto (texto conferido em 19/11/2026). */
const CAPITULOS: CapituloCtb[] = (JSON.parse(texto) as { capitulos: CapituloCtb[] }).capitulos;
const URL_PLANALTO = "https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm";
const AULAS_TRANSITO = new Map((GRUPOS.find((g) => g.id === "transito")?.aulas ?? []).map((a) => [a.id, a]));

/** Mudança feita a partir deste ano ganha o selo 🆕: as provas anteriores ainda não podiam cobrar. */
const NOVO_DESDE = 2023;
const MAX_RESULTADOS = 40;

const nomeCapitulo = (c: CapituloCtb) => (c.numero.startsWith("Anexo") ? c.numero : `Capítulo ${c.numero}`);
const tituloCapitulo = (c: CapituloCtb) => `${nomeCapitulo(c)} · ${c.titulo}`;

/** Ano da mudança mais recente nas notas, se for de NOVO_DESDE para cá. A MP que perdeu a vigência não conta. */
function anoNovo(notas?: string[]): number | null {
  let ano: number | null = null;
  for (const nota of notas ?? []) {
    if (/vig[eê]ncia encerrada/i.test(nota)) continue;
    const m = /(?:Lei|Medida Provis[óo]ria)\b[^()]*?,\s*de\s*(\d{4})/.exec(nota);
    const a = m ? Number(m[1]) : 0;
    if (a >= NOVO_DESDE && (ano === null || a > ano)) ano = a;
  }
  return ano;
}

/** Sem acento e em minúsculas, com o mesmo tamanho do texto: assim a posição achada serve para marcar o original. */
function normalizar(s: string): string {
  const rapido = s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  if (rapido.length === s.length) return rapido;
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i].normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    out += c.length === 1 ? c : s[i];
  }
  return out;
}

const slug = (s: string) => normalizar(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const ancoraDoTermo = (r: string) => `termo-${slug(r)}`;
const rotuloDoArtigo = (r: string) => r.replace(/\.$/, "");

/** Um artigo ou um termo do Anexo, pronto para a busca. */
interface Entrada {
  cap: CapituloCtb;
  ancora: string;
  rotulo: string;
  partes: string[];
  normais: string[];
  /** Ano da mudança mais recente (de NOVO_DESDE para cá), com o índice da parte. */
  novo: { ano: number; parte: number } | null;
}

function montarIndice(): Entrada[] {
  const lista: Entrada[] = [];
  for (const cap of CAPITULOS) {
    for (const item of cap.itens) {
      if (item.k === "art") {
        const partes = item.p.map((p, i) => (i === 0 ? `${item.r} ${p.t}` : `${p.r ?? ""} ${p.t}`.trim()));
        let novo: Entrada["novo"] = null;
        item.p.forEach((p, i) => {
          const ano = anoNovo(p.n);
          if (ano && (!novo || ano > novo.ano)) novo = { ano, parte: i };
        });
        lista.push({ cap, ancora: item.id, rotulo: rotuloDoArtigo(item.r), partes, normais: partes.map(normalizar), novo });
      } else if (item.k === "termo") {
        const partes = [`${item.r}: ${item.t || "(Revogado)"}`];
        const ano = anoNovo(item.n);
        lista.push({
          cap,
          ancora: ancoraDoTermo(item.r),
          rotulo: item.r,
          partes,
          normais: partes.map(normalizar),
          novo: ano ? { ano, parte: 0 } : null,
        });
      }
    }
  }
  return lista;
}

/** "art. 165", "art 67-A", "139-a" ou só "165": o artigo pedido, se existir. */
function artigoPedido(busca: string, indice: Entrada[]): Entrada | null {
  const m = /^(?:art(?:igo)?s?\.?\s*)?(\d{1,3})\s*[ºo°]?\s*(?:-?\s*([a-z]))?\.?$/.exec(normalizar(busca.trim()));
  if (!m) return null;
  const id = `art-${Number(m[1])}${m[2] ? `-${m[2]}` : ""}`;
  return indice.find((e) => e.ancora === id) ?? null;
}

interface Resultado {
  entrada: Entrada;
  trecho: ReactNode;
}

/** Trecho de até ~200 letras em volta da primeira palavra achada, com as palavras buscadas marcadas. */
function trechoMarcado(original: string, normal: string, palavras: string[]): ReactNode {
  const achadas = palavras.map((p) => normal.indexOf(p)).filter((i) => i >= 0);
  const pos = achadas.length ? Math.min(...achadas) : 0;
  let ini = Math.max(0, pos - 70);
  let fim = Math.min(original.length, pos + 150);
  if (ini > 0) ini = original.indexOf(" ", ini) + 1 || ini;
  if (fim < original.length) fim = original.lastIndexOf(" ", fim) > pos ? original.lastIndexOf(" ", fim) : fim;
  const janela = normal.slice(ini, fim);
  const marcas: [number, number][] = [];
  for (const p of palavras) {
    for (let i = janela.indexOf(p); i >= 0; i = janela.indexOf(p, i + p.length)) marcas.push([i, i + p.length]);
  }
  marcas.sort((a, b) => a[0] - b[0]);
  const pedacos: ReactNode[] = [];
  let cursor = 0;
  marcas.forEach(([a, b], k) => {
    if (a < cursor) return;
    pedacos.push(original.slice(ini + cursor, ini + a));
    pedacos.push(<mark key={k}>{original.slice(ini + a, ini + b)}</mark>);
    cursor = b;
  });
  pedacos.push(original.slice(ini + cursor, fim));
  return (
    <>
      {ini > 0 && "…"}
      {pedacos}
      {fim < original.length && "…"}
    </>
  );
}

function buscar(busca: string, indice: Entrada[]): { total: number; itens: Resultado[] } {
  const palavras = normalizar(busca).split(/\s+/).filter((p) => p.length >= 2);
  if (palavras.length === 0 || normalizar(busca).trim().length < 3) return { total: 0, itens: [] };
  const achados = indice.filter((e) => {
    const tudo = e.normais.join("\n");
    return palavras.every((p) => tudo.includes(p));
  });
  const itens = achados.slice(0, MAX_RESULTADOS).map((entrada) => {
    // A parte que tem mais palavras da busca vira o trecho.
    let melhor = 0;
    let pontos = -1;
    entrada.normais.forEach((n, i) => {
      const p = palavras.filter((w) => n.includes(w)).length;
      if (p > pontos) {
        pontos = p;
        melhor = i;
      }
    });
    const presentes = palavras.filter((w) => entrada.normais[melhor].includes(w));
    return { entrada, trecho: trechoMarcado(entrada.partes[melhor], entrada.normais[melhor], presentes) };
  });
  return { total: achados.length, itens };
}

/** A aba (e a seção da Central) Livro do CTB: lista de capítulos com busca → capítulo com mapa e texto da lei. */
export default function LivroCtb({ tela, onTela, onAbrirMapa, onAbrirAula, onQuestoes, questoesDaAula }: PropsLivro) {
  const [progresso, setProgresso] = useState<ProgressoLivro>(() => lerProgresso());
  // A busca fica aqui em cima para continuar na tela quando a pessoa volta de um capítulo.
  const [busca, setBusca] = useState("");
  const [soNovos, setSoNovos] = useState(false);

  const capitulo = tela.tipo === "capitulo" ? CAPITULOS.find((c) => c.id === tela.id) : undefined;
  const posRes = tela.tipo === "resolucao" ? RESOLUCOES.findIndex((r) => r.id === tela.id) : -1;

  if (posRes >= 0) {
    const res = RESOLUCOES[posRes];
    return (
      <TelaResolucao
        key={res.id}
        res={res}
        posicao={posRes}
        progresso={progresso}
        onProgresso={setProgresso}
        onTela={onTela}
        onAbrirMapa={onAbrirMapa}
        onAbrirAula={onAbrirAula}
        onQuestoes={onQuestoes}
        questoesDaAula={questoesDaAula}
      />
    );
  }

  if (capitulo && tela.tipo === "capitulo") {
    const posicao = CAPITULOS.indexOf(capitulo);
    return (
      <TelaCapitulo
        key={capitulo.id}
        capitulo={capitulo}
        posicao={posicao}
        ancora={tela.art}
        progresso={progresso}
        onProgresso={setProgresso}
        onTela={onTela}
        onAbrirMapa={onAbrirMapa}
        onAbrirAula={onAbrirAula}
        onQuestoes={onQuestoes}
        questoesDaAula={questoesDaAula}
      />
    );
  }

  return (
    <TelaInicio
      secao={tela.tipo === "inicio" ? tela.secao : undefined}
      progresso={progresso}
      busca={busca}
      onBusca={setBusca}
      soNovos={soNovos}
      onSoNovos={setSoNovos}
      onTela={onTela}
    />
  );
}

interface TelaInicioProps {
  secao?: "resolucoes";
  progresso: ProgressoLivro;
  busca: string;
  onBusca: (b: string) => void;
  soNovos: boolean;
  onSoNovos: (ligado: boolean) => void;
  onTela: (t: TelaLivro) => void;
}

function TelaInicio({ secao, progresso, busca, onBusca, soNovos, onSoNovos, onTela }: TelaInicioProps) {
  const indice = useMemo(montarIndice, []);
  const novos = useMemo(() => indice.filter((e) => e.novo), [indice]);
  const pedido = useMemo(() => (busca.trim() ? artigoPedido(busca, indice) : null), [busca, indice]);
  const resultado = useMemo(() => buscar(busca, indice), [busca, indice]);

  // Voltando de uma resolução, a lista abre nas resoluções; senão, do alto.
  useEffect(() => {
    const alvo = secao === "resolucoes" ? document.getElementById("prf-livro-resolucoes") : null;
    if (alvo) alvo.scrollIntoView({ block: "start" });
    else window.scrollTo({ top: 0 });
  }, [secao]);

  const resLidas = RESOLUCOES.filter((r) => progresso.lidos[r.id]).length;
  const lidos = CAPITULOS.filter((c) => progresso.lidos[c.id]).length;
  const tudoLido = lidos === CAPITULOS.length;
  // O próximo capítulo não lido; com tudo lido, o que foi lido há mais tempo.
  const seguinte =
    CAPITULOS.find((c) => !progresso.lidos[c.id]) ??
    [...CAPITULOS].sort((a, b) => progresso.lidos[a.id].localeCompare(progresso.lidos[b.id]))[0];
  const buscando = busca.trim().length > 0;

  const abrir = (e: Entrada) => onTela({ tipo: "capitulo", id: e.cap.id, art: e.ancora });

  return (
    <div className="prf-livro">
      <h2 className="secao-titulo">
        <Emoji e="📖" /> Livro do CTB
      </h2>
      <p className="conteudo-intro">
        O Código de Trânsito Brasileiro inteiro, capítulo por capítulo. Cada capítulo abre com um mapa mental; logo
        depois vem o texto da lei, artigo por artigo.
      </p>
      <p className="prf-livro-fonte">
        Lei nº 9.503/1997, texto compilado do Planalto conferido em 19/11/2026, com as mudanças até a Lei nº 15.503/2026.{" "}
        <a href={URL_PLANALTO} target="_blank" rel="noopener noreferrer">
          Abrir no Planalto ↗
        </a>
      </p>

      <section className="prf-mapa-painel" aria-label="Seu progresso no livro">
        <p className="prf-mapa-conta">
          <strong>{lidos}</strong> de {plural(CAPITULOS.length, "capítulo lido", "capítulos lidos")}
        </p>
        <Barra feitos={lidos} total={CAPITULOS.length} rotulo="Capítulos lidos no Livro do CTB" />
        <button
          className="botao botao-ouro prf-mapa-botao"
          data-livro-continuar
          onClick={() => onTela({ tipo: "capitulo", id: seguinte.id })}
        >
          <TextoEmoji texto={tudoLido ? "🔁 Reler o mais antigo" : lidos > 0 ? "▶ Continuar" : "▶ Começar"} />:{" "}
          {tituloCapitulo(seguinte)}
        </button>
      </section>

      <div className="prf-livro-buscar" role="search">
        <label className="prf-livro-buscar-rotulo" htmlFor="prf-livro-busca">
          <Emoji e="🔍" /> Buscar na lei
        </label>
        <input
          id="prf-livro-busca"
          className="prf-livro-busca"
          type="search"
          value={busca}
          placeholder="art. 165, capacete, farol baixo…"
          autoComplete="off"
          onChange={(e) => {
            onBusca(e.target.value);
            if (e.target.value) onSoNovos(false);
          }}
        />
        <button
          className="prf-mapa-modo prf-livro-novos-botao"
          aria-pressed={soNovos}
          data-livro-novos
          onClick={() => {
            onSoNovos(!soNovos);
            onBusca("");
          }}
        >
          <Emoji e="🆕" /> Mudou desde {NOVO_DESDE} · {novos.length}
        </button>
      </div>

      {buscando && (
        <section className="prf-livro-resultados" aria-live="polite" data-livro-resultados>
          {pedido && (
            <button className="prf-livro-pedido" onClick={() => abrir(pedido)} data-livro-pedido={pedido.ancora}>
              <span aria-hidden="true">
                <Emoji e="➡️" />
              </span>{" "}
              Ir para o <strong>{pedido.rotulo}</strong> · {tituloCapitulo(pedido.cap)}
            </button>
          )}
          <p className="prf-livro-conta">
            {resultado.total === 0
              ? busca.trim().length < 3
                ? "Digite pelo menos 3 letras."
                : "Nada encontrado. Tente outra palavra ou só o número do artigo."
              : resultado.total > MAX_RESULTADOS
                ? `${resultado.total} trechos; mostrando os ${MAX_RESULTADOS} primeiros, na ordem da lei.`
                : plural(resultado.total, "trecho encontrado", "trechos encontrados")}
          </p>
          <ListaEntradas itens={resultado.itens} onAbrir={abrir} />
          <button className="botao prf-mapa-botao" onClick={() => onBusca("")}>
            Limpar a busca
          </button>
        </section>
      )}

      {!buscando && soNovos && (
        <section className="prf-livro-resultados" data-livro-resultados>
          <p className="prf-livro-conta">
            {plural(novos.length, "artigo ou termo mudou", "artigos e termos mudaram")} de {NOVO_DESDE} para cá. As
            provas anteriores não cobravam essas versões: vale ler com calma.
          </p>
          <ListaEntradas
            itens={novos.map((e) => ({ entrada: e, trecho: e.partes[e.novo?.parte ?? 0] }))}
            onAbrir={abrir}
          />
        </section>
      )}

      {!buscando && !soNovos && (
        <ol className="prf-mapa-lista prf-livro-capitulos">
          {CAPITULOS.map((c) => {
            const mapa = MAPA_DO_CAPITULO[c.id];
            const quando = progresso.lidos[c.id];
            const artigos = c.itens.filter((i) => i.k === "art").length;
            const termos = c.itens.filter((i) => i.k === "termo").length;
            return (
              <li key={c.id}>
                <button className="prf-mapa-item" data-livro-capitulo={c.id} onClick={() => onTela({ tipo: "capitulo", id: c.id })}>
                  <span className="prf-mapa-item-icone" aria-hidden="true">
                    <Emoji e={mapa?.centro.emoji ?? "📖"} />
                  </span>
                  <span className="prf-mapa-item-corpo">
                    <span className="prf-mapa-item-aula">{nomeCapitulo(c)}</span>
                    <span className="prf-mapa-item-titulo">{c.titulo}</span>
                    <span className="prf-mapa-item-meta">
                      <span className={`prf-mapa-selo ${quando ? "prf-mapa-selo-ok" : ""}`}>
                        {quando ? `✓ Lido em ${diaCurto(quando)}` : "Novo"}
                      </span>
                      {mapa?.centro.sub && <span>{mapa.centro.sub}</span>}
                      <span>{termos ? plural(termos, "termo", "termos") : plural(artigos, "artigo", "artigos")}</span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      )}

      {!buscando && !soNovos && (
        <section id="prf-livro-resolucoes" className="prf-livro-resolucoes" aria-labelledby="prf-livro-res-titulo">
          <h2 id="prf-livro-res-titulo" className="prf-livro-res-titulo">
            <Emoji e="⚖️" /> Resoluções do CONTRAN
          </h2>
          <p className="prf-livro-res-intro">
            As resoluções que completam o CTB nas aulas de Legislação de Trânsito, cada uma com um mapa mental, os trechos
            principais do texto oficial e o link para lê-la inteira. <strong>{resLidas}</strong> de{" "}
            {plural(RESOLUCOES.length, "lida", "lidas")}.
          </p>
          <ol className="prf-mapa-lista prf-livro-capitulos">
            {RESOLUCOES.map((r) => {
              const quando = progresso.lidos[r.id];
              return (
                <li key={r.id}>
                  <button className="prf-mapa-item" data-livro-resolucao={r.id} onClick={() => onTela({ tipo: "resolucao", id: r.id })}>
                    <span className="prf-mapa-item-icone" aria-hidden="true">
                      <Emoji e={r.emoji} />
                    </span>
                    <span className="prf-mapa-item-corpo">
                      <span className="prf-mapa-item-aula">Resolução {r.numero}</span>
                      <span className="prf-mapa-item-titulo">{r.tema}</span>
                      <span className="prf-mapa-item-meta">
                        <span className={`prf-mapa-selo ${quando ? "prf-mapa-selo-ok" : ""}`}>
                          {quando ? `✓ Lida em ${diaCurto(quando)}` : "Nova"}
                        </span>
                        <span>de {r.data}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </section>
      )}

      <p className="prf-mapa-aviso">
        O texto da lei é o oficial, sem cortes; o que foi revogado ou vetado aparece marcado. Nas resoluções, os trechos
        são cópia do texto oficial e o texto inteiro fica no gov.br. Os mapas foram escritos para este app. O que você
        marca como lido fica guardado só neste navegador.
      </p>
    </div>
  );
}

function ListaEntradas({ itens, onAbrir }: { itens: Resultado[]; onAbrir: (e: Entrada) => void }) {
  return (
    <ol className="prf-livro-lista">
      {itens.map(({ entrada, trecho }) => (
        <li key={entrada.ancora}>
          <button className="prf-livro-resultado" data-livro-ir={entrada.ancora} onClick={() => onAbrir(entrada)}>
            <span className="prf-livro-resultado-topo">
              <strong>{entrada.rotulo}</strong>
              <span>{nomeCapitulo(entrada.cap)}</span>
              {entrada.novo && <ChipNovo ano={entrada.novo.ano} />}
            </span>
            <span className="prf-livro-resultado-texto">{trecho}</span>
          </button>
        </li>
      ))}
    </ol>
  );
}

function ChipNovo({ ano }: { ano: number }) {
  return (
    <span className="prf-livro-novo" title={`Mudou em ${ano}`}>
      <Emoji e="🆕" /> {ano}
    </span>
  );
}

interface TelaCapituloProps {
  capitulo: CapituloCtb;
  posicao: number;
  ancora?: string;
  progresso: ProgressoLivro;
  onProgresso: (p: ProgressoLivro) => void;
  onTela: (t: TelaLivro) => void;
  onAbrirMapa: (aula: string) => void;
  onAbrirAula: (aula: string) => void;
  onQuestoes: (aula: string) => void;
  questoesDaAula?: (aula: string) => number;
}

function TelaCapitulo(props: TelaCapituloProps) {
  const { capitulo, posicao, ancora, progresso, onProgresso, onTela } = props;
  const mapa = MAPA_DO_CAPITULO[capitulo.id];
  const anterior = CAPITULOS[posicao - 1];
  const proximo = CAPITULOS[posicao + 1];
  const lidoEm = progresso.lidos[capitulo.id];
  const [destaque, setDestaque] = useState<string | null>(null);

  function rolarPara(alvo: string, suave: boolean) {
    const el = document.getElementById(`ctb-${alvo}`);
    if (!el) return;
    el.scrollIntoView({ block: "start", behavior: suave ? "smooth" : "auto" });
    setDestaque(alvo);
  }

  // Chegando por uma busca, rola até o artigo; senão, começa do alto.
  useEffect(() => {
    if (ancora) rolarPara(ancora, false);
    else window.scrollTo({ top: 0 });
  }, [ancora]);

  useEffect(() => {
    if (!destaque) return;
    const t = window.setTimeout(() => setDestaque(null), 2600);
    return () => window.clearTimeout(t);
  }, [destaque]);

  useSetas(anterior?.id, proximo?.id, "capitulo", onTela);

  const pontos = capitulo.itens.flatMap((i): { valor: string; rotulo: string }[] =>
    i.k === "art"
      ? [{ valor: i.id, rotulo: rotuloDoArtigo(i.r) }]
      : i.k === "termo"
        ? [{ valor: ancoraDoTermo(i.r), rotulo: i.r }]
        : [],
  );

  return (
    <article className="prf-mapa-tela prf-livro-tela" data-livro-tela={capitulo.id}>
      <div className="prf-mapa-topo">
        <button className="botao prf-mapa-botao" onClick={() => onTela({ tipo: "inicio" })}>
          ← Capítulos
        </button>
        <span className="prf-mapa-posicao">
          {posicao + 1} de {CAPITULOS.length}
        </span>
      </div>

      {mapa && (
        <PosterLivro
          mapa={mapa}
          kickerEmoji="📖"
          kicker={`Livro do CTB · ${nomeCapitulo(capitulo)}`}
          memoria={progresso.memoria}
          onModo={(ligado) => onProgresso(salvarModoMemoria(ligado))}
        />
      )}

      {capitulo.aula && (
        <Ligacoes
          aula={capitulo.aula}
          onAbrirMapa={props.onAbrirMapa}
          onAbrirAula={props.onAbrirAula}
          onQuestoes={props.onQuestoes}
          questoesDaAula={props.questoesDaAula}
        />
      )}

      <section className="prf-livro-lei" aria-labelledby="prf-livro-lei-titulo">
        <header className="prf-livro-lei-topo">
          <h2 id="prf-livro-lei-titulo" className="prf-livro-lei-titulo">
            <span className="prf-livro-lei-numero">{nomeCapitulo(capitulo)}</span>
            {capitulo.titulo}
          </h2>
          <div className="prf-livro-lei-ferramentas">
            <label className="prf-livro-pular">
              <span>Ir para</span>
              <select
                value=""
                onChange={(e) => {
                  if (e.target.value) rolarPara(e.target.value, true);
                }}
              >
                <option value="">{capitulo.itens.some((i) => i.k === "termo") ? "um termo…" : "um artigo…"}</option>
                {pontos.map((p) => (
                  <option key={p.valor} value={p.valor}>
                    {p.rotulo}
                  </option>
                ))}
              </select>
            </label>
            <button
              className="prf-mapa-modo prf-livro-notas-botao"
              aria-pressed={progresso.notas}
              data-livro-notas
              onClick={() => onProgresso(salvarNotas(!progresso.notas))}
            >
              <Emoji e="📝" /> Notas de alteração
            </button>
          </div>
          <p className="prf-livro-legenda">
            <ChipNovo ano={NOVO_DESDE} /> marca o trecho que mudou de {NOVO_DESDE} para cá (mostra o ano da mudança).
          </p>
        </header>

        <div className="prf-livro-texto">
          {capitulo.itens.map((item, i) => (
            <ItemLei key={i} item={item} notas={progresso.notas} destaque={destaque} />
          ))}
        </div>
      </section>

      <div className="prf-mapa-acoes">
        <button
          className={`botao prf-mapa-botao ${lidoEm ? "prf-mapa-feito" : "botao-ouro"}`}
          aria-pressed={Boolean(lidoEm)}
          data-livro-lido
          onClick={() => onProgresso(alternarLido(capitulo.id))}
        >
          {lidoEm ? "✓ Lido · desmarcar" : "✓ Li este capítulo"}
        </button>
      </div>

      <nav className="prf-mapa-nav" aria-label="Outros capítulos">
        <button
          className="botao prf-mapa-botao"
          disabled={!anterior}
          onClick={() => anterior && onTela({ tipo: "capitulo", id: anterior.id })}
        >
          ← Anterior
        </button>
        <button
          className={`botao prf-mapa-botao ${lidoEm && proximo ? "botao-ouro" : ""}`}
          disabled={!proximo}
          onClick={() => proximo && onTela({ tipo: "capitulo", id: proximo.id })}
        >
          Próximo →
        </button>
      </nav>
    </article>
  );
}

/** Setas do teclado passam de capítulo (ou de resolução), como os botões do fim da tela. */
function useSetas(
  anterior: string | undefined,
  proximo: string | undefined,
  tipo: "capitulo" | "resolucao",
  onTela: (t: TelaLivro) => void,
) {
  useEffect(() => {
    function tecla(e: KeyboardEvent) {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const alvo = e.target as HTMLElement | null;
      if (alvo && /^(INPUT|TEXTAREA|SELECT)$/.test(alvo.tagName)) return;
      if (e.key === "ArrowLeft" && anterior) onTela({ tipo, id: anterior });
      if (e.key === "ArrowRight" && proximo) onTela({ tipo, id: proximo });
    }
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [anterior, proximo, tipo, onTela]);
}

interface PosterLivroProps {
  mapa: MapaAula;
  kicker: string;
  kickerEmoji: string;
  memoria: boolean;
  onModo: (ligado: boolean) => void;
}

/** O mapa no alto do capítulo ou da resolução, com Ver tudo / Modo memória, como na aba Mapas. */
function PosterLivro({ mapa, kicker, kickerEmoji, memoria, onModo }: PosterLivroProps) {
  // No modo memória, o que a pessoa já abriu: "r0", "r1"… para os ramos, "macete" e "cuidado" para as notas.
  const [abertos, setAbertos] = useState<Set<string>>(() => new Set());

  function alternar(chave: string) {
    setAbertos((atual) => {
      const novo = new Set(atual);
      if (novo.has(chave)) novo.delete(chave);
      else novo.add(chave);
      return novo;
    });
  }

  function trocarModo(ligado: boolean) {
    setAbertos(new Set());
    onModo(ligado);
  }

  const ramosAbertos = mapa.ramos.filter((_, i) => abertos.has(`r${i}`)).length;

  return (
    <>
      <div className="prf-mapa-modos" role="group" aria-label="Como ver o mapa">
        <button className="prf-mapa-modo" aria-pressed={!memoria} onClick={() => trocarModo(false)}>
          <Emoji e="👀" /> Ver tudo
        </button>
        <button className="prf-mapa-modo" aria-pressed={memoria} onClick={() => trocarModo(true)}>
          <Emoji e="🧠" /> Modo memória
        </button>
      </div>
      {memoria && (
        <div className="prf-mapa-dica">
          <p>Tente lembrar o que tem em cada ramo. Depois toque nele para conferir.</p>
          <span className="prf-mapa-abertos" aria-live="polite">
            Ramos abertos: {ramosAbertos} de {mapa.ramos.length}
          </span>
          {abertos.size > 0 && (
            <button className="botao prf-mapa-botao" onClick={() => setAbertos(new Set())}>
              <Emoji e="🔁" /> Esconder de novo
            </button>
          )}
        </div>
      )}

      <div className="prf-mapa-poster">
        <header className="prf-mapa-faixa">
          <div className="prf-mapa-faixa-texto">
            <p className="prf-mapa-faixa-kicker">
              <span aria-hidden="true">
                <Emoji e={kickerEmoji} />
              </span>{" "}
              {kicker}
            </p>
            <h2 className="prf-mapa-faixa-titulo">{mapa.centro.titulo}</h2>
            {mapa.centro.sub && <p className="prf-mapa-faixa-sub">{mapa.centro.sub}</p>}
          </div>
          <span className="prf-mapa-faixa-icone" aria-hidden="true">
            <Emoji e={mapa.centro.emoji} />
          </span>
        </header>

        <Arvore mapa={mapa} memoria={memoria} abertos={abertos} onAlternar={alternar} />

        <div className="prf-mapa-notas">
          <Nota
            tipo="macete"
            titulo="💡 Macete"
            texto={mapa.macete}
            escondida={memoria && !abertos.has("macete")}
            onAlternar={memoria ? () => alternar("macete") : undefined}
          />
          <Nota
            tipo="cuidado"
            titulo="⚠️ Pegadinha"
            texto={mapa.cuidado}
            escondida={memoria && !abertos.has("cuidado")}
            onAlternar={memoria ? () => alternar("cuidado") : undefined}
          />
        </div>

        <Estrada />
      </div>
    </>
  );
}

interface LigacoesProps {
  aula: string;
  onAbrirMapa: (aula: string) => void;
  onAbrirAula: (aula: string) => void;
  onQuestoes: (aula: string) => void;
  questoesDaAula?: (aula: string) => number;
}

/** Botões para o mapa, as questões e a aula do curso que tratam do mesmo assunto. */
function Ligacoes({ aula, onAbrirMapa, onAbrirAula, onQuestoes, questoesDaAula }: LigacoesProps) {
  const info = AULAS_TRANSITO.get(aula);
  const questoes = questoesDaAula ? questoesDaAula(aula) : 1;
  return (
    <div className="prf-mapa-acoes prf-livro-ligacoes">
      <button className="botao prf-mapa-botao" data-livro-mapa onClick={() => onAbrirMapa(aula)}>
        <Emoji e="🧠" /> Mapa da aula
      </button>
      {questoes > 0 && (
        <button className="botao prf-mapa-botao" data-livro-questoes onClick={() => onQuestoes(aula)}>
          <Emoji e="🎯" /> {questoesDaAula ? `Questões da aula · ${questoes}` : "Questões da aula"}
        </button>
      )}
      <button className="botao prf-mapa-botao" data-livro-aula onClick={() => onAbrirAula(aula)}>
        <Emoji e="🎬" /> Abrir a aula
      </button>
      {info && (
        <p className="prf-livro-aula">
          Aula do curso: <TextoEmoji texto={nomeAula(info)} />
        </p>
      )}
    </div>
  );
}

interface TelaResolucaoProps {
  res: ResolucaoContran;
  posicao: number;
  progresso: ProgressoLivro;
  onProgresso: (p: ProgressoLivro) => void;
  onTela: (t: TelaLivro) => void;
  onAbrirMapa: (aula: string) => void;
  onAbrirAula: (aula: string) => void;
  onQuestoes: (aula: string) => void;
  questoesDaAula?: (aula: string) => number;
}

/** Uma resolução do CONTRAN: mapa, do que ela trata, os trechos principais (texto oficial) e o link do gov.br. */
function TelaResolucao(props: TelaResolucaoProps) {
  const { res, posicao, progresso, onProgresso, onTela } = props;
  const anterior = RESOLUCOES[posicao - 1];
  const proximo = RESOLUCOES[posicao + 1];
  const lidoEm = progresso.lidos[res.id];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useSetas(anterior?.id, proximo?.id, "resolucao", onTela);

  return (
    <article className="prf-mapa-tela prf-livro-tela" data-livro-tela={res.id}>
      <div className="prf-mapa-topo">
        <button className="botao prf-mapa-botao" onClick={() => onTela({ tipo: "inicio", secao: "resolucoes" })}>
          ← Resoluções
        </button>
        <span className="prf-mapa-posicao">
          {posicao + 1} de {RESOLUCOES.length}
        </span>
      </div>

      <PosterLivro
        mapa={res.mapa}
        kickerEmoji="⚖️"
        kicker="Livro do CTB · Resoluções do CONTRAN"
        memoria={progresso.memoria}
        onModo={(ligado) => onProgresso(salvarModoMemoria(ligado))}
      />

      <Ligacoes
        aula={res.aula}
        onAbrirMapa={props.onAbrirMapa}
        onAbrirAula={props.onAbrirAula}
        onQuestoes={props.onQuestoes}
        questoesDaAula={props.questoesDaAula}
      />

      <section className="prf-livro-lei prf-livro-sobre" aria-labelledby="prf-livro-sobre-titulo" data-livro-sobre>
        <header className="prf-livro-lei-topo">
          <h2 id="prf-livro-sobre-titulo" className="prf-livro-lei-titulo">
            <span className="prf-livro-lei-numero">Resolução Contran nº {res.numero}</span>
            {res.tema}
          </h2>
          <p className="prf-livro-sobre-resumo">{res.resumo}</p>
          <dl className="prf-livro-fatos">
            <div>
              <dt>Data</dt>
              <dd>{res.data}</dd>
            </div>
            {res.revogou && (
              <div>
                <dt>Revogou</dt>
                <dd>{res.revogou}</dd>
              </div>
            )}
            {res.alteracoes && (
              <div>
                <dt>Mudanças</dt>
                <dd>{res.alteracoes}</dd>
              </div>
            )}
          </dl>
          {res.mapaDaAula && (
            <p className="prf-livro-legenda">
              Esta resolução já é o assunto de uma aula do curso: o mapa acima é o mesmo da aba Mapas.
            </p>
          )}
          <a className="botao prf-mapa-botao prf-livro-govbr" href={res.link} target="_blank" rel="noopener noreferrer" data-livro-govbr>
            Ler a resolução inteira no gov.br ↗
          </a>
        </header>

        {res.pontos.length > 0 && (
          <div className="prf-livro-texto" data-livro-trechos>
            <h3 className="prf-livro-secao">Trechos principais do texto oficial</h3>
            <p className="prf-livro-legenda">Cópia do texto da resolução; […] marca um corte.</p>
            {res.pontos.map((p) => (
              <section key={p.r} className="prf-livro-art">
                <p className="prf-livro-parte prf-livro-caput">
                  <strong className="prf-livro-rotulo-art">{p.r}</strong> {p.t}
                </p>
              </section>
            ))}
          </div>
        )}
      </section>

      <div className="prf-mapa-acoes">
        <button
          className={`botao prf-mapa-botao ${lidoEm ? "prf-mapa-feito" : "botao-ouro"}`}
          aria-pressed={Boolean(lidoEm)}
          data-livro-lido
          onClick={() => onProgresso(alternarLido(res.id))}
        >
          {lidoEm ? "✓ Lida · desmarcar" : "✓ Li esta resolução"}
        </button>
      </div>

      <nav className="prf-mapa-nav" aria-label="Outras resoluções">
        <button
          className="botao prf-mapa-botao"
          disabled={!anterior}
          onClick={() => anterior && onTela({ tipo: "resolucao", id: anterior.id })}
        >
          ← Anterior
        </button>
        <button
          className={`botao prf-mapa-botao ${lidoEm && proximo ? "botao-ouro" : ""}`}
          disabled={!proximo}
          onClick={() => proximo && onTela({ tipo: "resolucao", id: proximo.id })}
        >
          Próxima →
        </button>
      </nav>
    </article>
  );
}

function Notas({ n }: { n?: string[] }) {
  if (!n?.length) return null;
  return <span className="prf-livro-nota">({n.join("; ")})</span>;
}

/** Separador entre o rótulo e o texto, como na lei: "I – texto", "Infração – grave", "a) texto", "§ 1º texto". */
const separador = (p: ParteArtigo) => (p.k === "inc" || p.k === "pena" ? " – " : " ");

function Parte({ parte, rotuloArt, notas }: { parte: ParteArtigo; rotuloArt?: string; notas: boolean }) {
  const fora = parte.rev || parte.vet;
  const ano = anoNovo(parte.n);
  const corpo = parte.t || (parte.rev ? "(Revogado)" : "");
  return (
    <p className={`prf-livro-parte prf-livro-${parte.k} ${fora ? "prf-livro-fora" : ""}`}>
      {rotuloArt && <strong className="prf-livro-rotulo-art">{rotuloArt}</strong>}
      {rotuloArt && " "}
      {parte.r && (
        <>
          <strong className="prf-livro-rotulo">{parte.r}</strong>
          {separador(parte)}
        </>
      )}
      {corpo}
      {ano && (
        <>
          {" "}
          <ChipNovo ano={ano} />
        </>
      )}
      {notas && (
        <>
          {" "}
          <Notas n={parte.n} />
        </>
      )}
    </p>
  );
}

function ItemLei({ item, notas, destaque }: { item: ItemCapitulo; notas: boolean; destaque: string | null }) {
  if (item.k === "secao") return <h3 className="prf-livro-secao">{item.t}</h3>;
  if (item.k === "txt") return <p className="prf-livro-intro">{item.t}</p>;

  if (item.k === "termo") {
    const ancora = ancoraDoTermo(item.r);
    const ano = anoNovo(item.n);
    return (
      <div
        id={`ctb-${ancora}`}
        className={`prf-livro-termo ${item.rev ? "prf-livro-fora" : ""} ${destaque === ancora ? "prf-livro-destaque" : ""}`}
      >
        <strong className="prf-livro-rotulo">{item.r}</strong> – {item.t || "(Revogado)"}
        {ano && (
          <>
            {" "}
            <ChipNovo ano={ano} />
          </>
        )}
        {notas && (
          <>
            {" "}
            <Notas n={item.n} />
          </>
        )}
      </div>
    );
  }

  // Artigo inteiro revogado ou vetado: uma linha só, apagada.
  const todoFora = item.p.every((p) => p.rev || p.vet);
  const partes = todoFora ? item.p.slice(0, 1) : item.p;
  // As linhas de pena (Infração, Penalidade, Medida administrativa) seguidas vão juntas num quadro.
  const blocos: { pena: boolean; partes: { parte: ParteArtigo; i: number }[] }[] = [];
  partes.forEach((parte, i) => {
    const pena = parte.k === "pena";
    const ultimo = blocos[blocos.length - 1];
    if (ultimo && ultimo.pena && pena) ultimo.partes.push({ parte, i });
    else blocos.push({ pena, partes: [{ parte, i }] });
  });

  return (
    <section
      id={`ctb-${item.id}`}
      className={`prf-livro-art ${todoFora ? "prf-livro-art-fora" : ""} ${destaque === item.id ? "prf-livro-destaque" : ""}`}
    >
      {blocos.map((b, k) => {
        const linhas = b.partes.map(({ parte, i }) => (
          <Parte key={i} parte={parte} rotuloArt={i === 0 ? item.r : undefined} notas={notas} />
        ));
        return b.pena ? (
          <div key={k} className="prf-livro-penas">
            {linhas}
          </div>
        ) : (
          <Fragment key={k}>{linhas}</Fragment>
        );
      })}
    </section>
  );
}
