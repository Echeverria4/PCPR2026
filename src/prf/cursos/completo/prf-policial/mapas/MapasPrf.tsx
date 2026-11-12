import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { nomeAula } from "../../../../aulas/rotulos";
import type { AulaCurso, GrupoCurso } from "../../../../aulas/tipos";
import type { PropsMapas } from "../../tipos";
import { MAPAS } from "./dados";
import { Desenho } from "./desenhos";
import { alternarRevisado, lerProgresso, salvarModoMemoria, type ProgressoMapas } from "./progresso";
import type { MapaAula, RamoMapa } from "./tipos";

const MAPA_DA_AULA = new Map(MAPAS.map((m) => [m.aula, m]));

/** A partir daqui o mapa abre para os dois lados, com as linhas curvas; abaixo, vira árvore de cima para baixo. */
const TELA_LARGA = "(min-width: 900px)";

interface ItemMapa {
  aula: AulaCurso;
  mapa: MapaAula;
}

interface MateriaMapas {
  grupo: GrupoCurso;
  itens: ItemMapa[];
}

const plural = (n: number, um: string, varios: string) => `${n} ${n === 1 ? um : varios}`;

const corMateria = (g: GrupoCurso) => ({ "--cor-materia": g.cor ?? "var(--ouro)" }) as CSSProperties;

/** `**trecho**` vira destaque: a palavra que a prova cobra. */
function comDestaque(texto: string): ReactNode {
  const partes = texto.split("**");
  if (partes.length < 3) return texto;
  return partes.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : p));
}

function diaCurto(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

function Barra({ feitos, total, rotulo }: { feitos: number; total: number; rotulo: string }) {
  return (
    <div
      className="prf-mapa-barra"
      role="progressbar"
      aria-label={rotulo}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={feitos}
    >
      <div className="prf-mapa-barra-fill" style={{ width: `${total ? (feitos / total) * 100 : 0}%` }} />
    </div>
  );
}

/** A aba Mapas Mentais: matérias → mapas da matéria → o mapa da aula. */
export default function MapasPrf({ tela, onTela, grupos, onAbrirAula }: PropsMapas) {
  const [progresso, setProgresso] = useState<ProgressoMapas>(() => lerProgresso());

  // Só as matérias que já têm mapa, na ordem do curso.
  const materias = useMemo<MateriaMapas[]>(
    () =>
      grupos
        .map((grupo) => ({
          grupo,
          itens: grupo.aulas.flatMap((aula) => {
            const mapa = MAPA_DA_AULA.get(aula.id);
            return mapa ? [{ aula, mapa }] : [];
          }),
        }))
        .filter((m) => m.itens.length > 0),
    [grupos],
  );

  const chaveTela = tela.tipo === "mapa" ? tela.aula : tela.tipo === "materia" ? tela.grupo : "inicio";
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [chaveTela]);

  if (materias.length === 0) return <div className="vazio">Os mapas mentais ainda estão em preparação.</div>;

  const revisado = (aula: string) => Boolean(progresso.revisados[aula]);

  if (tela.tipo === "mapa") {
    const materia = materias.find((m) => m.itens.some((i) => i.aula.id === tela.aula));
    const posicao = materia ? materia.itens.findIndex((i) => i.aula.id === tela.aula) : -1;
    if (materia && posicao >= 0) {
      return (
        <TelaMapa
          key={tela.aula}
          materia={materia}
          posicao={posicao}
          memoria={progresso.memoria}
          revisadoEm={progresso.revisados[tela.aula]}
          onMemoria={(ligado) => setProgresso(salvarModoMemoria(ligado))}
          onRevisado={() => setProgresso(alternarRevisado(tela.aula))}
          onTela={onTela}
          onAbrirAula={() => onAbrirAula({ grupo: materia.grupo.id, aula: tela.aula })}
        />
      );
    }
  }

  if (tela.tipo === "materia") {
    const materia = materias.find((m) => m.grupo.id === tela.grupo);
    if (materia) {
      const feitos = materia.itens.filter((i) => revisado(i.aula.id)).length;
      return (
        <>
          <button className="botao prf-mapa-botao" onClick={() => onTela({ tipo: "inicio" })}>
            ← Matérias
          </button>
          <h2 className="secao-titulo conteudo-materia-titulo" style={corMateria(materia.grupo)}>
            <span aria-hidden="true">{materia.grupo.icone ?? "🧠"}</span> {materia.grupo.nome}
          </h2>
          <p className="prf-mapa-conta">
            <strong>{feitos}</strong> de {plural(materia.itens.length, "mapa revisado", "mapas revisados")}
          </p>
          <Barra feitos={feitos} total={materia.itens.length} rotulo={`Mapas revisados em ${materia.grupo.nome}`} />
          <ol className="prf-mapa-lista">
            {materia.itens.map(({ aula, mapa }) => {
              const quando = progresso.revisados[aula.id];
              return (
                <li key={aula.id}>
                  <button
                    className="prf-mapa-item"
                    data-mapa-item={aula.id}
                    onClick={() => onTela({ tipo: "mapa", aula: aula.id })}
                  >
                    <span className="prf-mapa-item-icone" aria-hidden="true">
                      {mapa.desenho ? <Desenho id={mapa.desenho} tamanho={34} /> : mapa.centro.emoji}
                    </span>
                    <span className="prf-mapa-item-corpo">
                      <span className="prf-mapa-item-titulo">{mapa.centro.titulo}</span>
                      <span className="prf-mapa-item-aula">{nomeAula(aula)}</span>
                      <span className="prf-mapa-item-meta">
                        <span className={`prf-mapa-selo ${quando ? "prf-mapa-selo-ok" : ""}`}>
                          {quando ? `✓ Revisado em ${diaCurto(quando)}` : "Novo"}
                        </span>
                        <span>{plural(mapa.ramos.length, "ramo", "ramos")}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </>
      );
    }
  }

  const todos = materias.flatMap((m) => m.itens);
  const feitos = todos.filter((i) => revisado(i.aula.id)).length;
  // O próximo mapa novo; com tudo revisado, o que foi visto há mais tempo.
  const seguinte =
    todos.find((i) => !revisado(i.aula.id)) ??
    [...todos].sort((a, b) => progresso.revisados[a.aula.id].localeCompare(progresso.revisados[b.aula.id]))[0];
  const tudoVisto = feitos === todos.length;

  return (
    <>
      <h2 className="secao-titulo">Mapas mentais</h2>
      <p className="conteudo-intro">
        Um mapa por aula: a ideia principal no meio e os ramos em volta. Olhe o mapa inteiro, depois ligue o modo
        memória e tente lembrar cada ramo antes de abrir.
      </p>
      <section className="prf-mapa-painel" aria-label="Seu progresso nos mapas">
        <p className="prf-mapa-conta">
          <strong>{feitos}</strong> de {plural(todos.length, "mapa revisado", "mapas revisados")}
        </p>
        <Barra feitos={feitos} total={todos.length} rotulo="Mapas revisados no curso" />
        <button
          className="botao botao-ouro prf-mapa-botao"
          data-mapa-continuar
          onClick={() => onTela({ tipo: "mapa", aula: seguinte.aula.id })}
        >
          {tudoVisto ? "🔁 Rever o mais antigo" : feitos > 0 ? "▶ Continuar" : "▶ Começar"}: {seguinte.mapa.centro.titulo}
        </button>
      </section>
      <div className="materias-grid">
        {materias.map((m) => {
          const vistos = m.itens.filter((i) => revisado(i.aula.id)).length;
          return (
            <button
              key={m.grupo.id}
              className="materia-card prf-mapa-materia"
              data-mapa-materia={m.grupo.id}
              style={corMateria(m.grupo)}
              onClick={() => onTela({ tipo: "materia", grupo: m.grupo.id })}
            >
              <span className="prf-mapa-materia-topo">
                <span className="prf-mapa-materia-emoji" aria-hidden="true">
                  {m.grupo.icone ?? "🧠"}
                </span>
                <span className="prf-mapa-materia-nome">{m.grupo.nome}</span>
              </span>
              <span className="prf-mapa-materia-meta">
                <span>{plural(m.itens.length, "mapa", "mapas")}</span>
                <span>{plural(vistos, "revisado", "revisados")}</span>
              </span>
              <span className="prf-mapa-materia-barra" aria-hidden="true">
                <span style={{ width: `${(vistos / m.itens.length) * 100}%` }} />
              </span>
            </button>
          );
        })}
      </div>
      <p className="prf-mapa-aviso">
        Mapas escritos para este app, a partir dos resumos das aulas. O que você marca como revisado fica guardado só
        neste navegador.
      </p>
    </>
  );
}

interface TelaMapaProps {
  materia: MateriaMapas;
  posicao: number;
  memoria: boolean;
  revisadoEm?: string;
  onMemoria: (ligado: boolean) => void;
  onRevisado: () => void;
  onTela: PropsMapas["onTela"];
  onAbrirAula: () => void;
}

function TelaMapa({ materia, posicao, memoria, revisadoEm, onMemoria, onRevisado, onTela, onAbrirAula }: TelaMapaProps) {
  const { grupo, itens } = materia;
  const { aula, mapa } = itens[posicao];
  const anterior = itens[posicao - 1];
  const proximo = itens[posicao + 1];
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
    onMemoria(ligado);
  }

  // Setas do teclado passam os mapas, como os botões do fim da tela.
  useEffect(() => {
    function tecla(e: KeyboardEvent) {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const alvo = e.target as HTMLElement | null;
      if (alvo && /^(INPUT|TEXTAREA|SELECT)$/.test(alvo.tagName)) return;
      if (e.key === "ArrowLeft" && anterior) onTela({ tipo: "mapa", aula: anterior.aula.id });
      if (e.key === "ArrowRight" && proximo) onTela({ tipo: "mapa", aula: proximo.aula.id });
    }
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [anterior, proximo, onTela]);

  const ramosAbertos = mapa.ramos.filter((_, i) => abertos.has(`r${i}`)).length;
  const revisado = Boolean(revisadoEm);

  return (
    <article className="prf-mapa-tela" data-mapa-aula={mapa.aula}>
      <div className="prf-mapa-topo">
        <button className="botao prf-mapa-botao" onClick={() => onTela({ tipo: "materia", grupo: grupo.id })}>
          ← Lista de mapas
        </button>
        <span className="prf-mapa-posicao">
          Mapa {posicao + 1} de {itens.length}
        </span>
      </div>
      <p className="prf-mapa-aula-nome">
        <span aria-hidden="true">{grupo.icone ?? "🧠"}</span> {grupo.nome} · {nomeAula(aula)}
      </p>

      <div className="prf-mapa-modos" role="group" aria-label="Como ver o mapa">
        <button className="prf-mapa-modo" aria-pressed={!memoria} onClick={() => trocarModo(false)}>
          👀 Ver tudo
        </button>
        <button className="prf-mapa-modo" aria-pressed={memoria} onClick={() => trocarModo(true)}>
          🧠 Modo memória
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
              🔁 Esconder de novo
            </button>
          )}
        </div>
      )}

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

      <div className="prf-mapa-acoes">
        <button
          className={`botao prf-mapa-botao ${revisado ? "prf-mapa-feito" : "botao-ouro"}`}
          aria-pressed={revisado}
          data-mapa-revisei
          onClick={onRevisado}
        >
          {revisado ? "✓ Revisado · desmarcar" : "✓ Revisei este mapa"}
        </button>
        <button className="botao prf-mapa-botao" onClick={onAbrirAula}>
          🎬 Abrir a aula
        </button>
      </div>

      <nav className="prf-mapa-nav" aria-label="Outros mapas da matéria">
        <button
          className="botao prf-mapa-botao"
          disabled={!anterior}
          onClick={() => anterior && onTela({ tipo: "mapa", aula: anterior.aula.id })}
        >
          ← Anterior
        </button>
        <button
          className={`botao prf-mapa-botao ${revisado && proximo ? "botao-ouro" : ""}`}
          disabled={!proximo}
          onClick={() => proximo && onTela({ tipo: "mapa", aula: proximo.aula.id })}
        >
          Próximo →
        </button>
      </nav>
    </article>
  );
}

interface NotaProps {
  tipo: "macete" | "cuidado";
  titulo: string;
  texto: string;
  escondida: boolean;
  /** Só no modo memória: tocar mostra ou esconde a nota. */
  onAlternar?: () => void;
}

function Nota({ tipo, titulo, texto, escondida, onAlternar }: NotaProps) {
  return (
    <section className={`prf-mapa-nota prf-mapa-nota-${tipo}`} data-mapa-nota={tipo}>
      <h3>
        {onAlternar ? (
          <button className="prf-mapa-nota-botao" aria-expanded={!escondida} onClick={onAlternar}>
            <span>{titulo}</span>
            <span className="prf-mapa-pista">{escondida ? "toque para ver" : "toque para esconder"}</span>
          </button>
        ) : (
          titulo
        )}
      </h3>
      {!escondida && <p>{comDestaque(texto)}</p>}
    </section>
  );
}

interface Linha {
  cor: string;
  d: string;
}

interface ArvoreProps {
  mapa: MapaAula;
  memoria: boolean;
  abertos: Set<string>;
  onAlternar: (chave: string) => void;
}

/**
 * O mapa em si. No celular é uma árvore de cima para baixo, com o tronco desenhado em CSS. Na tela larga, o centro
 * fica no meio e os ramos dos dois lados, ligados por curvas medidas na página depois de montada.
 */
function Arvore({ mapa, memoria, abertos, onAlternar }: ArvoreProps) {
  const raiz = useRef<HTMLDivElement>(null);
  const [linhas, setLinhas] = useState<Linha[]>([]);
  const metade = Math.ceil(mapa.ramos.length / 2);
  const lados = [
    { lado: "esq", ramos: mapa.ramos.slice(0, metade), inicio: 0 },
    { lado: "dir", ramos: mapa.ramos.slice(metade), inicio: metade },
  ];

  useLayoutEffect(() => {
    const el = raiz.current;
    if (!el) return;

    function medir() {
      if (!el) return;
      const novas: Linha[] = [];
      const centro = el.querySelector<HTMLElement>("[data-mapa-centro]");
      if (centro && window.matchMedia(TELA_LARGA).matches) {
        const base = el.getBoundingClientRect();
        const c = centro.getBoundingClientRect();
        for (const lado of ["esq", "dir"]) {
          const topos = el.querySelectorAll<HTMLElement>(`[data-mapa-lado="${lado}"] [data-mapa-topo]`);
          topos.forEach((topo, i) => {
            const r = topo.getBoundingClientRect();
            // Sai da lateral do centro, em pontos espalhados, e chega na altura do nome do ramo.
            const x1 = (lado === "esq" ? c.left : c.right) - base.left;
            const y1 = c.top - base.top + (c.height * (i + 1)) / (topos.length + 1);
            const x2 = (lado === "esq" ? r.right : r.left) - base.left;
            const y2 = r.top - base.top + r.height / 2;
            const xm = (x1 + x2) / 2;
            const n = (v: number) => Math.round(v * 10) / 10;
            novas.push({
              cor: topo.dataset.mapaCor ?? "azul",
              d: `M${n(x1)} ${n(y1)}C${n(xm)} ${n(y1)} ${n(xm)} ${n(y2)} ${n(x2)} ${n(y2)}`,
            });
          });
        }
      }
      setLinhas((antes) =>
        antes.length === novas.length && antes.every((l, i) => l.d === novas[i].d && l.cor === novas[i].cor)
          ? antes
          : novas,
      );
    }

    medir();
    if (typeof ResizeObserver === "undefined") return;
    const observador = new ResizeObserver(medir);
    observador.observe(el);
    el.querySelectorAll("[data-mapa-lado]").forEach((lista) => observador.observe(lista));
    return () => observador.disconnect();
  }, [mapa, memoria, abertos]);

  return (
    <div className="prf-mapa-arvore" ref={raiz} role="group" aria-label={`Mapa mental: ${mapa.centro.titulo}`}>
      <svg className="prf-mapa-ligacoes" aria-hidden="true" focusable="false">
        {linhas.map((l, i) => (
          <path key={i} className={`prf-mapa-cor-${l.cor}`} d={l.d} />
        ))}
      </svg>
      <div className="prf-mapa-centro" data-mapa-centro>
        {mapa.desenho ? (
          <Desenho id={mapa.desenho} tamanho={60} />
        ) : (
          <span className="prf-mapa-centro-emoji" aria-hidden="true">
            {mapa.centro.emoji}
          </span>
        )}
        <div className="prf-mapa-centro-texto">
          <h2>{mapa.centro.titulo}</h2>
          {mapa.centro.sub && <span className="prf-mapa-centro-sub">{mapa.centro.sub}</span>}
        </div>
      </div>
      {lados.map(({ lado, ramos, inicio }) => (
        <ul key={lado} className={`prf-mapa-lado prf-mapa-lado-${lado}`} data-mapa-lado={lado}>
          {ramos.map((ramo, i) => {
            const indice = inicio + i;
            return (
              <Ramo
                key={indice}
                ramo={ramo}
                ultimo={indice === mapa.ramos.length - 1}
                memoria={memoria}
                aberto={!memoria || abertos.has(`r${indice}`)}
                onAlternar={() => onAlternar(`r${indice}`)}
              />
            );
          })}
        </ul>
      ))}
    </div>
  );
}

interface RamoProps {
  ramo: RamoMapa;
  ultimo: boolean;
  memoria: boolean;
  aberto: boolean;
  onAlternar: () => void;
}

function Ramo({ ramo, ultimo, memoria, aberto, onAlternar }: RamoProps) {
  const cabeca = (
    <>
      <span className="prf-mapa-ramo-emoji" aria-hidden="true">
        {ramo.emoji}
      </span>
      <span className="prf-mapa-ramo-nome">
        <span className="prf-mapa-ramo-rotulo">{ramo.rotulo}</span>
        {memoria && (
          <span className="prf-mapa-pista">
            {aberto ? "toque para esconder" : `${plural(ramo.folhas.length, "ideia", "ideias")} · toque para ver`}
          </span>
        )}
      </span>
    </>
  );
  return (
    <li
      className={`prf-mapa-ramo prf-mapa-cor-${ramo.cor} ${ultimo ? "prf-mapa-ramo-ultimo" : ""}`}
      data-mapa-ramo
      data-mapa-aberto={aberto ? "sim" : "nao"}
    >
      <div className="prf-mapa-ramo-caixa">
        <h3 className="prf-mapa-ramo-titulo">
          {memoria ? (
            <button
              className="prf-mapa-ramo-topo"
              data-mapa-topo
              data-mapa-cor={ramo.cor}
              aria-expanded={aberto}
              onClick={onAlternar}
            >
              {cabeca}
            </button>
          ) : (
            <span className="prf-mapa-ramo-topo" data-mapa-topo data-mapa-cor={ramo.cor}>
              {cabeca}
            </span>
          )}
        </h3>
        {aberto ? (
          <ul className="prf-mapa-folhas">
            {ramo.folhas.map((folha, i) => (
              <li key={i}>{comDestaque(folha)}</li>
            ))}
          </ul>
        ) : (
          <div className="prf-mapa-vazias" aria-hidden="true">
            {ramo.folhas.map((_, i) => (
              <span key={i} />
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
