import { Fragment, useEffect, useState, type ReactNode } from "react";
import type { MapaAula } from "../prf/cursos/completo/prf-policial/mapas/tipos";
import { aulaDaQuestao, grupoDaAula, nomeMateriaPol, type Painel, type PontoFraco } from "./dados";

// ---------- mapas mentais (só baixam quando a tela pede) ----------

let promessaMapas: Promise<MapaAula[]> | null = null;

export function carregarMapas(): Promise<MapaAula[]> {
  promessaMapas ??= import("../prf/cursos/completo/prf-policial/mapas/dados/index").then((m) => m.MAPAS);
  return promessaMapas;
}

/** Os 223 mapas da PRF Policial; null enquanto baixam. */
export function useMapas(): MapaAula[] | null {
  const [mapas, setMapas] = useState<MapaAula[] | null>(null);
  useEffect(() => {
    let vivo = true;
    carregarMapas()
      .then((m) => vivo && setMapas(m))
      .catch(() => vivo && setMapas([]));
    return () => {
      vivo = false;
    };
  }, []);
  return mapas;
}

export interface MapasDoDia {
  doDia: MapaAula | null;
  fraco: PontoFraco | null;
  mapaFraco: MapaAula | null;
}

/**
 * Mapa para memorizar: roda pelos mapas das aulas já estudadas na PRF Policial (todos, se forem menos
 * de 3) e muda à meia-noite. O mapa da aula com o pior acerto vem à parte, como reforço.
 */
export function escolherMapas(mapas: MapaAula[] | null, painel: Painel, materia: string | null = null): MapasDoDia {
  if (!mapas || mapas.length === 0) return { doDia: null, fraco: null, mapaFraco: null };
  const vistas = new Set<string>();
  for (const t of painel.estudos.find((e) => e.info.id === "prf-policial")?.trechos ?? []) if (t.aula) vistas.add(t.aula);
  for (const t of painel.questoes.find((q) => q.info.id === "prf-policial")?.tentativas ?? []) {
    const a = aulaDaQuestao(t.questionId);
    if (a) vistas.add(a);
  }
  const fraco = painel.fracos.find((f) => f.curso === "prf-policial" && mapas.some((m) => m.aula === f.aula)) ?? null;
  const mapaFraco = fraco ? (mapas.find((m) => m.aula === fraco.aula) ?? null) : null;
  const dia = Math.floor(painel.hoje / 86_400_000);

  // Matéria escolhida: roda só pelos mapas dela (pelas aulas já vistas, se forem 3 ou mais).
  const daMateria = materia ? mapas.filter((m) => grupoDaAula(m.aula) === materia) : [];
  if (daMateria.length > 0) {
    const vistosDela = daMateria.filter((m) => vistas.has(m.aula));
    const roda = vistosDela.length >= 3 ? vistosDela : daMateria;
    const i = dia % roda.length;
    const repetido = mapaFraco !== null && roda[i].aula === mapaFraco.aula && roda.length > 1;
    return { doDia: roda[repetido ? (i + 1) % roda.length : i], fraco, mapaFraco };
  }

  const daqui = mapas.filter((m) => vistas.has(m.aula));
  const roda = daqui.length >= 3 ? daqui : mapas;
  const doDia = roda[dia % roda.length];
  return { doDia: mapaFraco && mapaFraco.aula === doDia.aula ? null : doDia, fraco, mapaFraco };
}

// ---------- matéria fixada no "Para memorizar hoje" (só neste aparelho) ----------

const CHAVE_MEMORIZAR = "central:memorizar:v1";

/** A matéria escolhida para o mapa do dia; null = automático. */
export function lerMateriaMemorizar(): string | null {
  try {
    const v = localStorage.getItem(CHAVE_MEMORIZAR);
    return v && v.trim() ? v : null;
  } catch {
    return null;
  }
}

export function gravarMateriaMemorizar(grupo: string | null) {
  try {
    if (grupo) localStorage.setItem(CHAVE_MEMORIZAR, grupo);
    else localStorage.removeItem(CHAVE_MEMORIZAR);
  } catch {
    // Sem armazenamento: a escolha vale só nesta visita.
  }
}

/** As matérias que têm mapa, na ordem do curso. */
export function materiasDosMapas(mapas: MapaAula[] | null): { grupo: string; nome: string; total: number }[] {
  const m = new Map<string, { grupo: string; nome: string; total: number }>();
  for (const mapa of mapas ?? []) {
    const grupo = grupoDaAula(mapa.aula);
    const atual = m.get(grupo) ?? { grupo, nome: nomeMateriaPol(grupo), total: 0 };
    atual.total++;
    m.set(grupo, atual);
  }
  return [...m.values()];
}

/** "Prazo de **10 dias**" com o trecho entre ** em negrito. */
export function Negrito({ texto }: { texto: string }) {
  const partes = texto.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {partes.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : <Fragment key={i}>{p}</Fragment>))}
    </>
  );
}

interface CartaoMapaProps {
  mapa: MapaAula;
  materia: string;
  rotulo: string;
  onAbrir: () => void;
  /** Mostra os ramos com as folhas; sem isto, só macete e cuidado. */
  completo?: boolean;
  extra?: ReactNode;
  /** No lugar da etiqueta da matéria (ex.: a etiqueta que também troca a matéria). */
  etiqueta?: ReactNode;
}

export function CartaoMapa({ mapa, materia, rotulo, onAbrir, completo = true, extra, etiqueta }: CartaoMapaProps) {
  return (
    <section className="cx-card cx-mapa" aria-label={rotulo}>
      <div className="cx-card-topo">
        <h2 className="cx-card-titulo">{rotulo}</h2>
        {etiqueta ?? <span className="cx-etiqueta">{materia}</span>}
      </div>
      <div className="cx-mapa-centro">
        <span className="cx-mapa-emoji" aria-hidden="true">
          {mapa.centro.emoji}
        </span>
        <div>
          <div className="cx-mapa-titulo">{mapa.centro.titulo}</div>
          {mapa.centro.sub && <div className="cx-mapa-sub">{mapa.centro.sub}</div>}
        </div>
      </div>
      {extra}
      {completo && (
        <ul className="cx-ramos">
          {mapa.ramos.map((r) => (
            <li key={r.rotulo} className={`cx-ramo cx-ramo-${r.cor}`}>
              <div className="cx-ramo-rotulo">
                <span aria-hidden="true">{r.emoji}</span> {r.rotulo}
              </div>
              <ul>
                {r.folhas.slice(0, 3).map((f) => (
                  <li key={f}>
                    <Negrito texto={f} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
      <p className="cx-macete">
        <span aria-hidden="true">💡</span>
        <span>
          <strong>Macete:</strong> {mapa.macete}
        </span>
      </p>
      <p className="cx-cuidado">
        <span aria-hidden="true">⚠️</span>
        <span>
          <strong>Cuidado:</strong> {mapa.cuidado}
        </span>
      </p>
      <div className="cx-card-acoes">
        <button type="button" className="botao" onClick={onAbrir}>
          Abrir o mapa completo →
        </button>
      </div>
    </section>
  );
}

// ---------- barras horizontais (valor sempre escrito ao lado) ----------

export interface LinhaBarra {
  chave: string;
  rotulo: string;
  etiqueta?: string;
  valor: number;
  texto: string;
}

/** `teto` fixa a escala (100 para porcentagem); sem ele, a maior barra enche o trilho. */
export function Barras({ linhas, vazio, teto }: { linhas: LinhaBarra[]; vazio: string; teto?: number }) {
  if (linhas.length === 0) return <p className="cx-vazio">{vazio}</p>;
  const maximo = teto ?? Math.max(...linhas.map((l) => l.valor), 1);
  return (
    <ul className="cx-barras">
      {linhas.map((l) => (
        <li key={l.chave} title={`${l.rotulo}${l.etiqueta ? ` (${l.etiqueta})` : ""}: ${l.texto}`}>
          <span className="cx-barra-rotulo">
            {l.rotulo}
            {l.etiqueta && <span className="cx-barra-etiqueta">{l.etiqueta}</span>}
          </span>
          <span className="cx-barra-trilho" aria-hidden="true">
            <span style={{ width: `${Math.max(2, (l.valor / maximo) * 100)}%` }} />
          </span>
          <span className="cx-barra-valor">{l.texto}</span>
        </li>
      ))}
    </ul>
  );
}

// ---------- ícones do menu (traço simples, cor do texto) ----------

const caminhos: Record<string, ReactNode> = {
  inicio: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  cursos: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  questoes: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  mapas: (
    <>
      <circle cx="12" cy="12" r="2.6" />
      <circle cx="4.5" cy="5.5" r="1.8" />
      <circle cx="19.5" cy="5.5" r="1.8" />
      <circle cx="4.5" cy="18.5" r="1.8" />
      <circle cx="19.5" cy="18.5" r="1.8" />
      <path d="M6 6.8 10 10.3M18 6.8l-4 3.5M6 17.2l4-3.5M18 17.2l-4-3.5" />
    </>
  ),
  redacoes: (
    <>
      <path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3z" />
      <path d="m14.5 7.5 3 3" />
    </>
  ),
  tempo: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  fechar: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icone({ nome }: { nome: keyof typeof caminhos | string }) {
  return (
    <svg
      className="cx-icone"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {caminhos[nome]}
    </svg>
  );
}
