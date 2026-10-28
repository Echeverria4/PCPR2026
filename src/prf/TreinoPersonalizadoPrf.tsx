import { useMemo, useState } from "react";
import { PRF_MATERIAS, PRF_MATERIA_MAP, type MateriaPrfId } from "../data/prf";
import { getErradasPrf, type TentativaPrf } from "./armazenamento";
import { BANCO_PRF } from "./questoes";
import {
  FILTROS_PRF_PADRAO,
  errosRecorrentesPrf,
  filtrarBancoPrf,
  type FiltrosPrf,
  type OrigemFiltroPrf,
  type SituacaoFiltroPrf,
} from "./sessoes";

interface TreinoPersonalizadoPrfProps {
  tentativas: TentativaPrf[];
  onIniciar: (filtros: FiltrosPrf) => void;
}

const ROTULO_ORIGEM: Record<OrigemFiltroPrf, string> = {
  banco: "Próprias do app",
  prf2014: "Prova PRF 2014 (FUNCAB, último concurso)",
  prf2012: "Prova PRF 2012 (Cespe/UnB, Agente Administrativo)",
  pf2025: "Prova PF 2025 (Cebraspe, Agente Administrativo)",
  prova: "Prova PCPR 2026 (FGV, originais)",
  inedita: "Inéditas autorais",
};

const ROTULO_SITUACAO: Record<SituacaoFiltroPrf, string> = {
  nunca: "Nunca respondidas",
  errada: "Errei na última vez",
  acertada: "Acertei na última vez",
  revisao: "Na fila de revisão",
};

const QUANTIDADES = ["5", "10", "20", "todas"];

const ordenados = (xs: string[]) => [...new Set(xs)].sort((a, b) => a.localeCompare(b, "pt-BR"));

/** Assuntos de cada matéria, em ordem alfabética. */
const TOPICOS_POR_MATERIA = Object.fromEntries(
  PRF_MATERIAS.map((m) => [m.id, ordenados(BANCO_PRF.filter((q) => q.materia === m.id).map((q) => q.topico))]),
) as Record<MateriaPrfId, string[]>;

export default function TreinoPersonalizadoPrf({ tentativas, onIniciar }: TreinoPersonalizadoPrfProps) {
  const [f, setF] = useState<FiltrosPrf>(FILTROS_PRF_PADRAO);

  // Nenhuma matéria marcada = todas. Os assuntos vêm agrupados por matéria, salvo quando só uma está marcada.
  const materiasDoAssunto = PRF_MATERIAS.filter((m) => f.materias.length === 0 || f.materias.includes(m.id));
  const encontradas = useMemo(() => filtrarBancoPrf(f, tentativas, getErradasPrf()).length, [f, tentativas]);
  const recorrentes = useMemo(() => errosRecorrentesPrf(tentativas).slice(0, 8), [tentativas]);
  const vaoEntrar = f.quantidade === "todas" ? encontradas : Math.min(f.quantidade, encontradas);

  function muda<K extends keyof FiltrosPrf>(campo: K, valor: FiltrosPrf[K]) {
    setF((atual) => ({ ...atual, [campo]: valor }));
  }

  /** Marca ou desmarca uma matéria (null = todas). O assunto depende das matérias e volta para "todos". */
  function alternaMateria(id: MateriaPrfId | null) {
    setF((atual) => ({
      ...atual,
      materias:
        id === null
          ? []
          : atual.materias.includes(id)
            ? atual.materias.filter((m) => m !== id)
            : [...atual.materias, id],
      topico: "todos",
    }));
  }

  return (
    <>
      <h2 className="secao-titulo">Treino personalizado</h2>
      <div className="personalizado-painel">
        <div className="filtro filtro-materias">
          <span className="filtro-rotulo" id="f-materias-rotulo">
            Disciplinas
          </span>
          <div className="materias-chips" role="group" aria-labelledby="f-materias-rotulo">
            <button
              type="button"
              className={`materia-chip${f.materias.length === 0 ? " materia-chip-ativa" : ""}`}
              aria-pressed={f.materias.length === 0}
              onClick={() => alternaMateria(null)}
            >
              Todas
            </button>
            {PRF_MATERIAS.map((m) => {
              const ativa = f.materias.includes(m.id);
              return (
                <button
                  key={m.id}
                  type="button"
                  className={`materia-chip${ativa ? " materia-chip-ativa" : ""}`}
                  aria-pressed={ativa}
                  data-materia={m.id}
                  onClick={() => alternaMateria(m.id)}
                >
                  {m.nome}
                </button>
              );
            })}
          </div>
          <span className="filtro-dica">Marque uma ou mais. Sem nenhuma marcada, entram todas.</span>
        </div>
        <div className="filtros-grid">
          <div className="filtro">
            <label htmlFor="f-topico">Assunto</label>
            <select id="f-topico" value={f.topico} onChange={(e) => muda("topico", e.target.value)}>
              <option value="todos">Todos</option>
              {materiasDoAssunto.length === 1
                ? TOPICOS_POR_MATERIA[materiasDoAssunto[0].id].map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))
                : materiasDoAssunto.map((m) => (
                    <optgroup key={m.id} label={m.nome}>
                      {TOPICOS_POR_MATERIA[m.id].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </optgroup>
                  ))}
            </select>
          </div>
          <div className="filtro">
            <label htmlFor="f-origem">Origem</label>
            <select
              id="f-origem"
              value={f.origem}
              onChange={(e) => muda("origem", e.target.value as FiltrosPrf["origem"])}
            >
              <option value="todas">Todas</option>
              {(Object.keys(ROTULO_ORIGEM) as OrigemFiltroPrf[]).map((o) => (
                <option key={o} value={o}>
                  {ROTULO_ORIGEM[o]}
                </option>
              ))}
            </select>
          </div>
          <div className="filtro">
            <label htmlFor="f-situacao">Situação</label>
            <select
              id="f-situacao"
              value={f.situacao}
              onChange={(e) => muda("situacao", e.target.value as FiltrosPrf["situacao"])}
            >
              <option value="todas">Todas</option>
              {(Object.keys(ROTULO_SITUACAO) as SituacaoFiltroPrf[]).map((s) => (
                <option key={s} value={s}>
                  {ROTULO_SITUACAO[s]}
                </option>
              ))}
            </select>
          </div>
          <div className="filtro">
            <label htmlFor="f-qtd">Quantidade</label>
            <select
              id="f-qtd"
              value={String(f.quantidade)}
              onChange={(e) => muda("quantidade", e.target.value === "todas" ? "todas" : Number(e.target.value))}
            >
              {QUANTIDADES.map((q) => (
                <option key={q} value={q}>
                  {q === "todas" ? "Todas as encontradas" : `${q} questões`}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="personalizado-rodape">
          <span className="personalizado-contagem">
            {encontradas === 0
              ? "Nenhuma questão com esses filtros."
              : `${encontradas} questão(ões) com esses filtros.`}
          </span>
          <button className="botao botao-ouro" onClick={() => onIniciar(f)} disabled={encontradas === 0}>
            Começar ({vaoEntrar})
          </button>
        </div>
      </div>

      {recorrentes.length > 0 && (
        <>
          <h2 className="secao-titulo">Assuntos com erro recorrente</h2>
          <ul className="recorrentes-lista">
            {recorrentes.map((r) => (
              <li key={`${r.materia}|${r.topico}|${r.subassunto ?? ""}`} className="recorrente-item">
                <div className="recorrente-texto">
                  <span className="recorrente-materia">{PRF_MATERIA_MAP[r.materia].nome}</span>
                  <span>
                    {r.topico}
                    {r.subassunto && ` › ${r.subassunto}`}
                  </span>
                </div>
                <span className="recorrente-erros">{r.erros} erros</span>
                <button
                  className="botao"
                  onClick={() =>
                    onIniciar({
                      ...FILTROS_PRF_PADRAO,
                      materias: [r.materia],
                      topico: r.topico,
                      subassunto: r.subassunto,
                    })
                  }
                >
                  Treinar
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
