import { useMemo, useState, type ReactNode } from "react";
import pcprBrasao from "../assets/pcpr-brasao.png";
import { CURSOS, type Curso, type CursoId } from "../data/cursos";
import { BANCO, QUESTOES_POR_MATERIA } from "../data/questions";
import { SUBJECTS, EDITAL_INFO } from "../data/subjects";
import { INICIO_PROVA, DURACAO_SIMULADO_MIN } from "../data/retaFinal";
import { PRF_MATERIAS, PRF_SITUACAO, PRF_ULTIMO_EDITAL } from "../data/prf";
import { getLocalAttempts } from "../lib/storage";

interface CursosProps {
  onAbrir: (id: CursoId) => void;
}

type Tom = "ouro" | "alerta" | "neutro";

interface Selo {
  texto: string;
  tom: Tom;
}

const DIA_MS = 86_400_000;
const FUSO = "America/Sao_Paulo";

/** Data (aaaa-mm-dd) no horário de Brasília, para contar dias de calendário. */
function diaEmBrasilia(ms: number): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: FUSO }).format(ms);
}

function diasEntre(deMs: number, ateMs: number): number {
  return Math.round((Date.parse(diaEmBrasilia(ateMs)) - Date.parse(diaEmBrasilia(deMs))) / DIA_MS);
}

function seloProvaPcpr(agora: number): Selo {
  const inicio = new Date(INICIO_PROVA).getTime();
  const fim = inicio + DURACAO_SIMULADO_MIN * 60_000;
  if (agora >= fim) return { texto: "Prova realizada em 11/10", tom: "neutro" };
  if (agora >= inicio) return { texto: "Prova em andamento", tom: "alerta" };
  const dias = diasEntre(agora, inicio);
  if (dias <= 0) return { texto: "Prova hoje, 13h", tom: "alerta" };
  if (dias === 1) return { texto: "Prova amanhã, 13h", tom: "alerta" };
  return { texto: `Prova em ${dias} dias`, tom: "ouro" };
}

function quando(ms: number, agora: number): string {
  const hora = new Date(ms).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: FUSO });
  const dias = diasEntre(ms, agora);
  if (dias === 0) return `hoje, ${hora}`;
  if (dias === 1) return `ontem, ${hora}`;
  const data = new Date(ms).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", timeZone: FUSO });
  return `${data}, ${hora}`;
}

function resumoPcpr() {
  const tentativas = getLocalAttempts();
  const idsBanco = new Set(BANCO.map((q) => q.id));
  const vistas = new Set(tentativas.filter((t) => idsBanco.has(t.questionId)).map((t) => t.questionId)).size;
  const acertos = tentativas.filter((t) => t.acertou).length;
  let ultimo: number | null = null;
  for (const t of tentativas) {
    const ms = Date.parse(t.respondidaEm);
    if (!Number.isNaN(ms) && (ultimo === null || ms > ultimo)) ultimo = ms;
  }
  return {
    total: BANCO.length,
    vistas,
    acerto: tentativas.length > 0 ? Math.round((acertos / tentativas.length) * 100) : null,
    ultimo,
  };
}

interface CartaoProps {
  curso: Curso;
  imagem?: string;
  selos: Selo[];
  onAbrir?: () => void;
  children?: ReactNode;
  detalhes?: ReactNode;
}

function CartaoCurso({ curso, imagem, selos, onAbrir, children, detalhes }: CartaoProps) {
  const [aberto, setAberto] = useState(false);
  const abrir = curso.disponivel ? onAbrir : undefined;
  const idDetalhes = `curso-detalhes-${curso.id}`;

  return (
    <article className={`curso-card${abrir ? "" : " curso-card-off"}`}>
      <div className="curso-linha">
        <div
          className={`curso-thumb ${imagem ? "curso-thumb-img" : "curso-thumb-sigla"}`}
          onClick={abrir}
          aria-hidden="true"
        >
          {imagem ? <img src={imagem} alt="" /> : curso.sigla}
        </div>
        <div className="curso-info">
          <h3 className="curso-nome">
            {abrir ? (
              <button type="button" onClick={abrir}>
                {curso.nome}
              </button>
            ) : (
              curso.nome
            )}
          </h3>
          <div className="curso-orgao">{curso.orgao}</div>
          {selos.length > 0 && (
            <div className="curso-selos">
              {selos.map((s) => (
                <span key={s.texto} className={`curso-selo curso-selo-${s.tom}`}>
                  {s.texto}
                </span>
              ))}
            </div>
          )}
          {children}
          {detalhes && (
            <button
              type="button"
              className="curso-detalhes-botao"
              aria-expanded={aberto}
              aria-controls={idDetalhes}
              onClick={() => setAberto(!aberto)}
            >
              <span className="curso-seta" aria-hidden="true">
                ▸
              </span>
              {aberto ? "Ocultar detalhes" : "Ver detalhes"}
            </button>
          )}
        </div>
        <div className="curso-acoes">
          {abrir ? (
            <button type="button" className="botao botao-ouro" onClick={abrir}>
              Abrir curso →
            </button>
          ) : (
            <button type="button" className="botao" disabled>
              Em breve
            </button>
          )}
        </div>
      </div>
      {detalhes && aberto && (
        <div id={idDetalhes} className="curso-detalhes">
          {detalhes}
        </div>
      )}
    </article>
  );
}

export default function Cursos({ onAbrir }: CursosProps) {
  const [agora] = useState(() => Date.now());
  const pcpr = useMemo(() => resumoPcpr(), []);
  const pct = pcpr.total > 0 ? Math.round((pcpr.vistas / pcpr.total) * 100) : 0;

  function cartao(curso: Curso) {
    if (curso.id === "pcpr2026") {
      return (
        <CartaoCurso
          curso={curso}
          imagem={pcprBrasao}
          selos={[seloProvaPcpr(agora)]}
          onAbrir={() => onAbrir(curso.id)}
          detalhes={
            <>
              <dl className="curso-ficha">
                <dt>Prova</dt>
                <dd>{EDITAL_INFO.dataProva}</dd>
                <dt>Formato</dt>
                <dd>
                  {EDITAL_INFO.totalQuestoes} questões objetivas · {EDITAL_INFO.alternativasPorQuestao} alternativas ·{" "}
                  {EDITAL_INFO.descontoPorErro ? "erro desconta" : "erro não desconta"}
                </dd>
                <dt>Banco do app</dt>
                <dd>
                  {BANCO.length} questões em {SUBJECTS.length} matérias
                </dd>
              </dl>
              <ul className="curso-materias">
                {SUBJECTS.map((m) => (
                  <li key={m.id}>
                    <span className="curso-materia-cor" style={{ background: m.cor }} aria-hidden="true" />
                    <span className="curso-materia-nome">{m.nome}</span>
                    <span className="curso-materia-qtd">{QUESTOES_POR_MATERIA[m.id].length}</span>
                  </li>
                ))}
              </ul>
            </>
          }
        >
          <div className="curso-progresso">
            <div
              className="curso-barra"
              role="progressbar"
              aria-label="Questões do banco já vistas"
              aria-valuemin={0}
              aria-valuemax={pcpr.total}
              aria-valuenow={pcpr.vistas}
            >
              <span style={{ width: `${pct}%` }} />
            </div>
            <div className="curso-numeros">
              <span>
                <strong>{pcpr.vistas}</strong> de {pcpr.total} questões vistas
              </span>
              {pcpr.acerto !== null && (
                <span>
                  acerto geral <strong>{pcpr.acerto}%</strong>
                </span>
              )}
              <span>
                {pcpr.ultimo !== null ? (
                  <>
                    último estudo <strong>{quando(pcpr.ultimo, agora)}</strong>
                  </>
                ) : (
                  "nenhuma questão respondida ainda"
                )}
              </span>
            </div>
          </div>
        </CartaoCurso>
      );
    }
    const ed = PRF_ULTIMO_EDITAL;
    return (
      <CartaoCurso
        curso={curso}
        selos={[
          { texto: "Pré-edital", tom: "neutro" },
          { texto: "Em preparação", tom: "neutro" },
        ]}
        detalhes={
          <>
            <dl className="curso-ficha">
              <dt>Novo concurso</dt>
              <dd>
                {PRF_SITUACAO.texto} (situação em {PRF_SITUACAO.em})
              </dd>
              <dt>Último edital</dt>
              <dd>
                {ed.ano} · {ed.banca} · {ed.vagas} vagas
              </dd>
              <dt>Prova de {ed.ano}</dt>
              <dd>
                {ed.totalQuestoes} questões objetivas · {ed.alternativas} alternativas · {ed.pontos} pontos · eliminava
                abaixo de {ed.minimoPct}% dos pontos
              </dd>
            </dl>
            <p className="curso-legenda">Matérias da prova de {ed.ano}: questões × peso</p>
            <ul className="curso-materias">
              {PRF_MATERIAS.map((m) => (
                <li key={m.id}>
                  <span className="curso-materia-cor" style={{ background: m.cor }} aria-hidden="true" />
                  <span className="curso-materia-nome">{m.nome}</span>
                  <span className="curso-materia-qtd">
                    {m.questoes} × {m.peso.toLocaleString("pt-BR")}
                  </span>
                </li>
              ))}
            </ul>
          </>
        }
      >
        <p className="curso-aviso">
          O conteúdo começa depois da prova da PCPR. Ele terá questões, progresso e simulados próprios.
        </p>
      </CartaoCurso>
    );
  }

  return (
    <div className="app-shell">
      <div className="topo-fixo">
        <header className="topbar cursos-topbar">
          <div className="topbar-titulo">
            <span className="cursos-marca" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="8" height="8" rx="1.5" />
                <rect x="13" y="3" width="8" height="8" rx="1.5" />
                <rect x="3" y="13" width="8" height="8" rx="1.5" />
                <rect x="13" y="13" width="8" height="8" rx="1.5" />
              </svg>
            </span>
            <div>
              <h1>Central de Estudos</h1>
              <div className="topbar-sub">Concursos · escolha o curso</div>
            </div>
          </div>
        </header>
      </div>
      <main className="conteudo">
        <h2 className="secao-titulo cursos-titulo">Cursos</h2>
        <p className="cursos-intro">
          Cada concurso tem o seu próprio espaço: questões, conteúdo, simulados e progresso ficam separados.
        </p>
        <ul className="cursos-lista">
          {CURSOS.map((curso) => (
            <li key={curso.id}>{cartao(curso)}</li>
          ))}
        </ul>
      </main>
      <footer className="rodape">Material de estudo não oficial, para fins de treino.</footer>
    </div>
  );
}
