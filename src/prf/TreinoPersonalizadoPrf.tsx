import { useMemo, useState } from "react";
import { PRF_MATERIAS, PRF_MATERIA_MAP, type MateriaPrfId } from "../data/prf";
import { getErradasPrf, type TentativaPrf } from "./armazenamento";
import { BANCO_PRF } from "./questoes";
import {
  FILTROS_PRF_PADRAO,
  MATERIA_DO_TOPICO,
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
  cnu2025: "Prova CNU 2025 (FGV, Bloco 9, nível intermediário)",
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

  // Nenhuma matéria marcada = todas, sem lista de assuntos. Cada matéria marcada mostra os assuntos dela.
  const materiasDoAssunto = PRF_MATERIAS.filter((m) => f.materias.includes(m.id));
  const encontradas = useMemo(() => filtrarBancoPrf(f, tentativas, getErradasPrf()).length, [f, tentativas]);
  // Questões de cada assunto com os outros filtros (matéria, origem, situação), para mostrar no chip.
  const porTopico = useMemo(() => {
    const conta = new Map<string, number>();
    for (const q of filtrarBancoPrf({ ...f, topicos: [] }, tentativas, getErradasPrf()))
      conta.set(q.topico, (conta.get(q.topico) ?? 0) + 1);
    return conta;
  }, [f, tentativas]);
  const recorrentes = useMemo(() => errosRecorrentesPrf(tentativas).slice(0, 8), [tentativas]);
  const vaoEntrar = f.quantidade === "todas" ? encontradas : Math.min(f.quantidade, encontradas);

  function muda<K extends keyof FiltrosPrf>(campo: K, valor: FiltrosPrf[K]) {
    setF((atual) => ({ ...atual, [campo]: valor }));
  }

  /** Marca ou desmarca uma matéria (null = todas). Saem os assuntos marcados das matérias que ficaram de fora. */
  function alternaMateria(id: MateriaPrfId | null) {
    setF((atual) => {
      const materias =
        id === null
          ? []
          : atual.materias.includes(id)
            ? atual.materias.filter((m) => m !== id)
            : [...atual.materias, id];
      const topicos =
        materias.length === 0 ? [] : atual.topicos.filter((t) => materias.includes(MATERIA_DO_TOPICO.get(t)!));
      return { ...atual, materias, topicos };
    });
  }

  /** "Todos" da matéria: tira os assuntos marcados dela, e a matéria volta a entrar inteira. */
  function limpaTopicosDa(id: MateriaPrfId) {
    setF((atual) => ({ ...atual, topicos: atual.topicos.filter((t) => MATERIA_DO_TOPICO.get(t) !== id) }));
  }

  function alternaTopico(t: string) {
    setF((atual) => ({
      ...atual,
      topicos: atual.topicos.includes(t) ? atual.topicos.filter((x) => x !== t) : [...atual.topicos, t],
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
        {materiasDoAssunto.length > 0 && (
          <div className="filtro filtro-materias">
            <span className="filtro-rotulo">Assuntos</span>
            {materiasDoAssunto.map((m) => {
              const nenhum = !f.topicos.some((t) => MATERIA_DO_TOPICO.get(t) === m.id);
              return (
                <div
                  key={m.id}
                  className="prf-assuntos-grupo"
                  data-materia={m.id}
                  role="group"
                  aria-labelledby={`f-assuntos-${m.id}`}
                >
                  <span className="prf-assuntos-grupo-nome" id={`f-assuntos-${m.id}`}>
                    {m.nome}
                  </span>
                  <div className="materias-chips">
                    <button
                      type="button"
                      className={`prf-assunto-chip prf-assunto-todos${nenhum ? " prf-assunto-chip-ativa" : ""}`}
                      aria-pressed={nenhum}
                      onClick={() => limpaTopicosDa(m.id)}
                    >
                      Todos
                    </button>
                    {TOPICOS_POR_MATERIA[m.id].map((t) => {
                      const ativo = f.topicos.includes(t);
                      const n = porTopico.get(t) ?? 0;
                      return (
                        <button
                          key={t}
                          type="button"
                          className={`prf-assunto-chip${ativo ? " prf-assunto-chip-ativa" : ""}`}
                          aria-pressed={ativo}
                          disabled={n === 0 && !ativo}
                          onClick={() => alternaTopico(t)}
                        >
                          {t}
                          <span className="prf-assunto-qtd">{n}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <span className="filtro-dica">
              Marque os assuntos que você já estudou. Com "Todos", entra a disciplina inteira.
            </span>
          </div>
        )}
        <div className="filtros-grid">
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
                      topicos: [r.topico],
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
