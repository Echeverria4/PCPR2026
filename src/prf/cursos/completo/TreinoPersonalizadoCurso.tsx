import { useMemo, useState } from "react";
import type { GrupoCurso } from "../../aulas/tipos";
import {
  FILTROS_PADRAO,
  chaveAssunto,
  errosRecorrentes,
  filtrarBanco,
  materiaDoAssunto,
  type FiltrosCurso,
  type SituacaoFiltro,
} from "./sessoes";
import type { BancoCurso, TentativaCurso } from "./tipos";

interface TreinoPersonalizadoCursoProps {
  banco: BancoCurso;
  /** Só as matérias que já têm questões. */
  materias: GrupoCurso[];
  tentativas: TentativaCurso[];
  erradas: string[];
  onIniciar: (filtros: FiltrosCurso) => void;
}

const ROTULO_SITUACAO: Record<SituacaoFiltro, string> = {
  nunca: "Nunca respondidas",
  errada: "Errei na última vez",
  acertada: "Acertei na última vez",
  revisao: "Na fila de revisão",
};

const QUANTIDADES = ["5", "10", "20", "todas"];

const ordenados = (xs: string[]) => [...new Set(xs)].sort((a, b) => a.localeCompare(b, "pt-BR"));

export default function TreinoPersonalizadoCurso({
  banco,
  materias,
  tentativas,
  erradas,
  onIniciar,
}: TreinoPersonalizadoCursoProps) {
  const [f, setF] = useState<FiltrosCurso>(FILTROS_PADRAO);

  /** Assuntos de cada matéria, em ordem alfabética. */
  const topicosPorMateria = useMemo(
    () =>
      new Map(
        materias.map((m) => [m.id, ordenados(banco.questoes.filter((q) => q.materia === m.id).map((q) => q.topico))]),
      ),
    [banco, materias],
  );
  const nomeDaMateria = useMemo(() => new Map(materias.map((m) => [m.id, m.nome])), [materias]);

  // Nenhuma matéria marcada = todas, sem lista de assuntos. Cada matéria marcada mostra os assuntos dela.
  const materiasDoAssunto = materias.filter((m) => f.materias.includes(m.id));
  const encontradas = useMemo(() => filtrarBanco(banco, f, tentativas, erradas).length, [banco, f, tentativas, erradas]);
  // Questões de cada assunto com os outros filtros (matéria, situação), para mostrar no chip.
  const porTopico = useMemo(() => {
    const conta = new Map<string, number>();
    for (const q of filtrarBanco(banco, { ...f, topicos: [] }, tentativas, erradas)) {
      const chave = chaveAssunto(q.materia, q.topico);
      conta.set(chave, (conta.get(chave) ?? 0) + 1);
    }
    return conta;
  }, [banco, f, tentativas, erradas]);
  const recorrentes = useMemo(() => errosRecorrentes(banco, tentativas).slice(0, 8), [banco, tentativas]);
  const vaoEntrar = f.quantidade === "todas" ? encontradas : Math.min(f.quantidade, encontradas);

  function muda<K extends keyof FiltrosCurso>(campo: K, valor: FiltrosCurso[K]) {
    setF((atual) => ({ ...atual, [campo]: valor }));
  }

  /** Marca ou desmarca uma matéria (null = todas). Saem os assuntos marcados das matérias que ficaram de fora. */
  function alternaMateria(id: string | null) {
    setF((atual) => {
      const lista =
        id === null
          ? []
          : atual.materias.includes(id)
            ? atual.materias.filter((m) => m !== id)
            : [...atual.materias, id];
      const topicos = lista.length === 0 ? [] : atual.topicos.filter((t) => lista.includes(materiaDoAssunto(t)));
      return { ...atual, materias: lista, topicos };
    });
  }

  /** "Todos" da matéria: tira os assuntos marcados dela, e a matéria volta a entrar inteira. */
  function limpaTopicosDa(id: string) {
    setF((atual) => ({ ...atual, topicos: atual.topicos.filter((t) => materiaDoAssunto(t) !== id) }));
  }

  function alternaTopico(chave: string) {
    setF((atual) => ({
      ...atual,
      topicos: atual.topicos.includes(chave) ? atual.topicos.filter((x) => x !== chave) : [...atual.topicos, chave],
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
            {materias.map((m) => {
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
              const nenhum = !f.topicos.some((t) => materiaDoAssunto(t) === m.id);
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
                    {(topicosPorMateria.get(m.id) ?? []).map((t) => {
                      const chave = chaveAssunto(m.id, t);
                      const ativo = f.topicos.includes(chave);
                      const n = porTopico.get(chave) ?? 0;
                      return (
                        <button
                          key={t}
                          type="button"
                          className={`prf-assunto-chip${ativo ? " prf-assunto-chip-ativa" : ""}`}
                          aria-pressed={ativo}
                          disabled={n === 0 && !ativo}
                          onClick={() => alternaTopico(chave)}
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
            <label htmlFor="f-situacao">Situação</label>
            <select
              id="f-situacao"
              value={f.situacao}
              onChange={(e) => muda("situacao", e.target.value as FiltrosCurso["situacao"])}
            >
              <option value="todas">Todas</option>
              {(Object.keys(ROTULO_SITUACAO) as SituacaoFiltro[]).map((s) => (
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
                  <span className="recorrente-materia">{nomeDaMateria.get(r.materia) ?? r.materia}</span>
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
                      ...FILTROS_PADRAO,
                      materias: [r.materia],
                      topicos: [chaveAssunto(r.materia, r.topico)],
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
