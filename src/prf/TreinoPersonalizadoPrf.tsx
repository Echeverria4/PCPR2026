import { useMemo, useState } from "react";
import { PRF_MATERIAS, PRF_MATERIA_MAP } from "../data/prf";
import { ROTULO_NIVEL } from "../lib/quizEngine";
import type { Dificuldade } from "../lib/types";
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

const ordenados = (xs: (string | undefined)[]) =>
  [...new Set(xs.filter((x): x is string => Boolean(x)))].sort((a, b) => a.localeCompare(b, "pt-BR"));

export default function TreinoPersonalizadoPrf({ tentativas, onIniciar }: TreinoPersonalizadoPrfProps) {
  const [f, setF] = useState<FiltrosPrf>(FILTROS_PRF_PADRAO);

  const daMateria = useMemo(
    () => BANCO_PRF.filter((q) => f.materia === "todas" || q.materia === f.materia),
    [f.materia],
  );
  const topicos = useMemo(() => ordenados(daMateria.map((q) => q.topico)), [daMateria]);
  const subassuntos = useMemo(
    () => ordenados(daMateria.filter((q) => f.topico === "todos" || q.topico === f.topico).map((q) => q.subassunto)),
    [daMateria, f.topico],
  );
  const niveis = useMemo(
    () => ([1, 2, 3, 4, 5] as Dificuldade[]).filter((n) => daMateria.some((q) => q.dificuldade === n)),
    [daMateria],
  );
  const temSemNivel = daMateria.some((q) => q.dificuldade === undefined);
  const encontradas = useMemo(() => filtrarBancoPrf(f, tentativas, getErradasPrf()).length, [f, tentativas]);
  const recorrentes = useMemo(() => errosRecorrentesPrf(tentativas).slice(0, 8), [tentativas]);
  const vaoEntrar = f.quantidade === "todas" ? encontradas : Math.min(f.quantidade, encontradas);

  function muda<K extends keyof FiltrosPrf>(campo: K, valor: FiltrosPrf[K]) {
    setF((atual) => {
      const novo = { ...atual, [campo]: valor };
      // Tópico e subassunto dependem da matéria (e o subassunto, do tópico): voltam para "todos".
      if (campo === "materia") {
        novo.topico = "todos";
        novo.subassunto = "todos";
      }
      if (campo === "topico") novo.subassunto = "todos";
      return novo;
    });
  }

  return (
    <>
      <h2 className="secao-titulo">Treino personalizado</h2>
      <div className="personalizado-painel">
        <div className="filtros-grid">
          <div className="filtro">
            <label htmlFor="f-materia">Disciplina</label>
            <select
              id="f-materia"
              value={f.materia}
              onChange={(e) => muda("materia", e.target.value as FiltrosPrf["materia"])}
            >
              <option value="todas">Todas</option>
              {PRF_MATERIAS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.nome}
                </option>
              ))}
            </select>
          </div>
          <div className="filtro">
            <label htmlFor="f-topico">Assunto</label>
            <select id="f-topico" value={f.topico} onChange={(e) => muda("topico", e.target.value)}>
              <option value="todos">Todos</option>
              {topicos.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="filtro">
            <label htmlFor="f-sub">Subassunto</label>
            <select
              id="f-sub"
              value={f.subassunto}
              onChange={(e) => muda("subassunto", e.target.value)}
              disabled={subassuntos.length === 0}
            >
              <option value="todos">Todos</option>
              {subassuntos.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
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
            <label htmlFor="f-nivel">Dificuldade</label>
            <select
              id="f-nivel"
              value={String(f.dificuldade)}
              onChange={(e) => {
                const v = e.target.value;
                muda("dificuldade", v === "todos" || v === "sem" ? v : (Number(v) as Dificuldade));
              }}
            >
              <option value="todos">Todos os níveis</option>
              {niveis.map((n) => (
                <option key={n} value={n}>
                  Nível {n} · {ROTULO_NIVEL[n]}
                </option>
              ))}
              {temSemNivel && <option value="sem">Sem nível</option>}
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
                      materia: r.materia,
                      topico: r.topico,
                      subassunto: r.subassunto ?? "todos",
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
