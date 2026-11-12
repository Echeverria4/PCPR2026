import { useMemo, useState, type ReactNode } from "react";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import { TOTAIS_TEMAS_POL } from "../banco/totaisTemas";
import { embaralharAlternativas, shuffle } from "../lib/quizEngine";
import type { Question, QuizSessionResult } from "../lib/types";
import CanetaPrf from "../prf/caneta/CanetaPrf";
import { progressoDoCurso } from "../prf/cursos/completo/armazenamento";
import { DADOS } from "../prf/cursos/completo/prf-policial/index";
import { ultimaResposta } from "../prf/cursos/completo/sessoes";
import type { QuestaoCurso, TentativaCurso } from "../prf/cursos/completo/tipos";
import { GRUPOS } from "../prf/cursos/dados/prf-policial";

/**
 * Treino da Central (12/11/26): matéria → conteúdo → iniciar, sem escolher curso. O banco é o da PRF Policial, que já
 * junta as questões da PRF ADM e da PCPR do mesmo assunto (sem as de exemplo regional ou da Polícia Civil). As respostas
 * gravam no progresso da PRF Policial, então contam na semana e no acerto do curso.
 */
const CURSO = "prf-policial";
const progresso = progressoDoCurso(CURSO);

interface Conteudo {
  aula: string;
  nome: string;
  questoes: QuestaoCurso[];
}

interface MateriaTreino {
  id: string;
  nome: string;
  questoes: QuestaoCurso[];
  conteudos: Conteudo[];
}

/** Os dois cursos de Administrativo (A e B) viram uma matéria só. */
const JUNTAR: Record<string, { id: string; nome: string; prefixo: string }> = {
  "adm-a": { id: "adm", nome: "Direito Administrativo", prefixo: "Curso A · " },
  "adm-b": { id: "adm", nome: "Direito Administrativo", prefixo: "Curso B · " },
};

const NOME_TEMA = new Map(TOTAIS_TEMAS_POL.flatMap((m) => m.temas.map((t) => [t.aula, t.nome] as const)));

/** Nome do tema (matérias do banco por tema); senão, o da aula sem as reticências; senão, os assuntos mais comuns. */
function nomeDoConteudo(aula: string, nomeAula: string, questoes: QuestaoCurso[]): string {
  const tema = NOME_TEMA.get(aula);
  if (tema) return tema;
  const limpo = nomeAula.replace(/\s*…\s*$/, "").trim();
  if (limpo && !/^só em pdf$/i.test(limpo)) return limpo;
  const conta = new Map<string, number>();
  for (const q of questoes) conta.set(q.topico, (conta.get(q.topico) ?? 0) + 1);
  return [...conta.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([t]) => t)
    .join(" · ");
}

function montarMaterias(): MateriaTreino[] {
  const porAula = new Map<string, QuestaoCurso[]>();
  for (const q of DADOS.banco.questoes) {
    const a = q.aula ?? "";
    porAula.set(a, [...(porAula.get(a) ?? []), q]);
  }
  const materias: MateriaTreino[] = [];
  for (const g of GRUPOS) {
    const juntar = JUNTAR[g.id];
    const id = juntar?.id ?? g.id;
    let m = materias.find((x) => x.id === id);
    for (const a of g.aulas) {
      const questoes = porAula.get(a.id);
      if (!questoes?.length) continue;
      if (!m) {
        m = { id, nome: juntar?.nome ?? g.nome, questoes: [], conteudos: [] };
        materias.push(m);
      }
      m.questoes.push(...questoes);
      m.conteudos.push({
        aula: a.id,
        nome: `${juntar?.prefixo ?? ""}Aula ${a.n} · ${nomeDoConteudo(a.id, a.nome, questoes)}`,
        questoes,
      });
    }
  }
  return materias;
}

/** Todas as questões escolhidas: primeiro as nunca respondidas, depois as erradas na última vez, por fim as acertadas. */
function montarSessao(questoes: QuestaoCurso[]): Question<string>[] {
  const ultima = ultimaResposta(progresso.tentativas());
  const nunca: QuestaoCurso[] = [];
  const erradas: QuestaoCurso[] = [];
  const certas: QuestaoCurso[] = [];
  for (const q of questoes) {
    const u = ultima.get(q.id);
    (u === undefined ? nunca : u ? certas : erradas).push(q);
  }
  return [...shuffle(nunca), ...shuffle(erradas), ...shuffle(certas)].map(embaralharAlternativas);
}

function comCaneta(questaoId: string, conteudo: ReactNode) {
  return <CanetaPrf questaoId={questaoId}>{conteudo}</CanetaPrf>;
}

const NOMES: Record<string, string> = Object.fromEntries(GRUPOS.map((g) => [g.id, JUNTAR[g.id]?.nome ?? g.nome]));

const n = (v: number) => v.toLocaleString("pt-BR");

function paraOTopo() {
  window.scrollTo(0, 0);
  document.querySelector(".cx-conteudo")?.scrollTo?.(0, 0);
}

export default function TreinoUnido() {
  const materias = useMemo(montarMaterias, []);
  const [materiaId, setMateriaId] = useState(materias[0]?.id ?? "");
  const [aula, setAula] = useState("");
  const [sessao, setSessao] = useState<{ questions: Question<string>[]; iniciadoEm: string } | null>(null);
  const [resultado, setResultado] = useState<QuizSessionResult<string> | null>(null);
  // Muda a cada treino que termina, para o placar ler o progresso de novo.
  const [rodada, setRodada] = useState(0);

  const materia = materias.find((m) => m.id === materiaId) ?? materias[0];
  const conteudo = materia?.conteudos.find((c) => c.aula === aula);
  const escolhidas = conteudo?.questoes ?? materia?.questoes ?? [];

  const placar = useMemo(() => {
    const ultima = ultimaResposta(progresso.tentativas());
    let feitas = 0;
    let certas = 0;
    for (const q of escolhidas) {
      const u = ultima.get(q.id);
      if (u === undefined) continue;
      feitas++;
      if (u) certas++;
    }
    return { feitas, certas };
  }, [escolhidas, rodada]);

  function iniciar(questoes: Question<string>[]) {
    if (questoes.length === 0) return;
    setResultado(null);
    setSessao({ questions: questoes, iniciadoEm: new Date().toISOString() });
    paraOTopo();
  }

  function finalizar(respostas: TentativaCurso[]) {
    if (!sessao) return;
    setResultado({
      mode: "personalizado",
      total: respostas.length,
      acertos: respostas.filter((r) => r.acertou).length,
      respostas,
      iniciadoEm: sessao.iniciadoEm,
      finalizadoEm: new Date().toISOString(),
    });
    setSessao(null);
    setRodada((r) => r + 1);
    paraOTopo();
  }

  function voltar() {
    setSessao(null);
    setResultado(null);
    setRodada((r) => r + 1);
    paraOTopo();
  }

  function revisarErros() {
    if (!resultado) return;
    const erradas = new Set(resultado.respostas.filter((r) => !r.acertou).map((r) => r.questionId));
    iniciar(shuffle(escolhidas.filter((q) => erradas.has(q.id))).map(embaralharAlternativas));
  }

  if (sessao) {
    return (
      <div className="cx-treino-quiz">
        <Quiz
          questions={sessao.questions}
          modo="personalizado"
          onFinalizar={finalizar}
          onSair={voltar}
          gravacao={progresso.gravacao}
          curso={CURSO}
          envolverQuestao={comCaneta}
        />
        {/* Espaço no fim para a barra da caneta não cobrir os últimos botões. */}
        <div className="prf-caneta-espaco" aria-hidden="true" />
      </div>
    );
  }

  if (resultado) {
    return (
      <div className="cx-treino-quiz">
        <Result resultado={resultado} onVoltarHome={voltar} onRevisarErros={revisarErros} nomes={NOMES} />
      </div>
    );
  }

  if (!materia) return <p className="cx-vazio">Ainda não há questões.</p>;

  const pctAcerto = placar.feitas > 0 ? Math.round((placar.certas / placar.feitas) * 100) : null;

  return (
    <div className="cx-hubs">
      <p className="cx-intro">Todas as questões da matéria, de todos os cursos, num treino só.</p>
      <section className="cx-card cx-treino">
        <label className="cx-campo">
          <span className="cx-campo-rotulo">Matéria</span>
          <select
            value={materia.id}
            onChange={(e) => {
              setMateriaId(e.target.value);
              setAula("");
            }}
          >
            {materias.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nome} ({n(m.questoes.length)})
              </option>
            ))}
          </select>
        </label>

        <label className="cx-campo">
          <span className="cx-campo-rotulo">Conteúdo</span>
          <select value={conteudo?.aula ?? ""} onChange={(e) => setAula(e.target.value)}>
            <option value="">Todo o conteúdo ({n(materia.questoes.length)})</option>
            {materia.conteudos.map((c) => (
              <option key={c.aula} value={c.aula}>
                {c.nome} ({n(c.questoes.length)})
              </option>
            ))}
          </select>
        </label>

        <p className="cx-treino-resumo">
          <strong>{n(escolhidas.length)}</strong> {escolhidas.length === 1 ? "questão" : "questões"}
          {placar.feitas > 0 && (
            <>
              {" "}
              · {n(placar.feitas)} já respondidas · {pctAcerto}% de acerto
            </>
          )}
        </p>

        <button type="button" className="botao botao-ouro cx-treino-iniciar" onClick={() => iniciar(montarSessao(escolhidas))}>
          Iniciar treino →
        </button>
        <p className="cx-card-nota">Primeiro vêm as que você nunca respondeu, depois as que errou. Pode sair quando quiser.</p>
      </section>
    </div>
  );
}
