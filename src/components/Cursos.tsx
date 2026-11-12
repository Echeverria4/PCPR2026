import { useMemo, useState, type ReactNode } from "react";
import bbLogo from "../assets/bb-logo.png";
import paranaBrasao from "../assets/parana-brasao.png";
import pcprBrasao from "../assets/pcpr-brasao.png";
import pfBrasao from "../assets/pf-brasao.png";
import pmprBrasao from "../assets/pmpr-brasao.png";
import prfBrasao from "../assets/prf-brasao.png";
import { CURSOS, type Curso, type CursoId } from "../data/cursos";
import { BANCO, QUESTOES_POR_MATERIA } from "../data/questions";
import { SUBJECTS, EDITAL_INFO } from "../data/subjects";
import { INICIO_PROVA, DURACAO_SIMULADO_MIN } from "../data/retaFinal";
import { PRF_MATERIAS, PRF_SITUACAO, PRF_ULTIMO_EDITAL } from "../data/prf";
import { getLocalAttempts } from "../lib/storage";
// Só leitura do localStorage (prf:…): o banco da PRF continua fora do pacote principal.
import { getTentativasPrf } from "../prf/armazenamento";
// Só leitura do localStorage e números: o banco do curso completo só baixa quando ele é aberto.
import { progressoDoCurso } from "../prf/cursos/completo/armazenamento";
import { TOTAIS_BANCO } from "../prf/cursos/completo/totaisBanco";
// Só números: a lista das aulas de cada curso baixa quando ele é aberto.
import { TOTAIS_CURSOS, type TotaisCurso } from "../prf/cursos/totais";

interface CursosProps {
  onAbrir: (id: CursoId) => void;
}

/** Brasão de cada curso, para a Central usar nos cartões e no "continuar". */
export const BRASOES: Partial<Record<CursoId, string>> = {
  pcpr2026: pcprBrasao,
  "prf-adm": prfBrasao,
  "prf-policial": prfBrasao,
  "pf-agente": pfBrasao,
  "detran-pr": paranaBrasao,
  pmpr: pmprBrasao,
  "banco-brasil": bbLogo,
};

type Tom = "ouro" | "alerta" | "neutro";

interface Selo {
  texto: string;
  tom: Tom;
}

const DIA_MS = 86_400_000;
const FUSO = "America/Sao_Paulo";

/**
 * Brasão dos cursos que entraram depois da PRF ADM. No DETRAN-PR, órgão estadual, vai o brasão do Estado do Paraná;
 * no Banco do Brasil, que não tem brasão, vai o símbolo do banco.
 */
const BRASAO_CURSO: Partial<Record<CursoId, string>> = {
  "prf-policial": prfBrasao,
  "pf-agente": pfBrasao,
  "detran-pr": paranaBrasao,
  pmpr: pmprBrasao,
  "banco-brasil": bbLogo,
};

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

/** Sem o total do banco: contá-lo exigiria baixar as questões da PRF já na central. */
function resumoPrf() {
  const tentativas = getTentativasPrf();
  const acertos = tentativas.filter((t) => t.acertou).length;
  let ultimo: number | null = null;
  for (const t of tentativas) {
    const ms = Date.parse(t.respondidaEm);
    if (!Number.isNaN(ms) && (ultimo === null || ms > ultimo)) ultimo = ms;
  }
  return {
    vistas: new Set(tentativas.map((t) => t.questionId)).size,
    acerto: tentativas.length > 0 ? Math.round((acertos / tentativas.length) * 100) : null,
    ultimo,
  };
}

/** Lê direto a chave do curso: o módulo do cronômetro só carrega quando um curso é aberto. */
function resumoAulas(id: CursoId, totais: TotaisCurso) {
  let vistos = 0;
  let ultimo: number | null = null;
  try {
    const e = JSON.parse(localStorage.getItem(`curso:${id}:estudo:v1`) ?? "null") as {
      vistos?: unknown;
      vistosEm?: unknown;
      sessoes?: unknown;
      ativo?: { inicio?: unknown } | null;
    } | null;
    if (e && Array.isArray(e.vistos)) vistos = Math.min(new Set(e.vistos).size, totais.blocos);
    const momentos: unknown[] = [];
    if (e && Array.isArray(e.sessoes)) for (const s of e.sessoes as { inicio?: unknown }[]) momentos.push(s?.inicio);
    if (e?.ativo) momentos.push(e.ativo.inicio);
    if (e?.vistosEm && typeof e.vistosEm === "object") momentos.push(...Object.values(e.vistosEm));
    for (const ms of momentos) {
      if (typeof ms === "number" && Number.isFinite(ms) && ms > 0 && (ultimo === null || ms > ultimo)) ultimo = ms;
    }
  } catch {
    // Sem dados legíveis: o cartão mostra o curso como ainda não começado.
  }
  return { vistos, ultimo };
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
            <button type="button" className={curso.finalizado ? "botao" : "botao botao-ouro"} onClick={abrir}>
              {curso.finalizado ? "Consultar →" : "Abrir curso →"}
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

/** A lista dos cursos da Central: em andamento, em breve e finalizados. A moldura (menu e topo) é da Central. */
export default function Cursos({ onAbrir }: CursosProps) {
  const [agora] = useState(() => Date.now());
  const pcpr = useMemo(() => resumoPcpr(), []);
  const pct = pcpr.total > 0 ? Math.round((pcpr.vistas / pcpr.total) * 100) : 0;
  const prf = useMemo(() => resumoPrf(), []);
  const naCentral = CURSOS.filter((c) => !c.oculto);
  const abertos = naCentral.filter((c) => c.disponivel && !c.finalizado);
  const emBreve = naCentral.filter((c) => !c.disponivel);
  const finalizados = naCentral.filter((c) => c.finalizado);

  function cartao(curso: Curso) {
    if (!curso.disponivel) {
      return <CartaoCurso curso={curso} imagem={BRASAO_CURSO[curso.id]} selos={[]} />;
    }
    if (curso.id === "pcpr2026") {
      return (
        <CartaoCurso
          curso={curso}
          imagem={pcprBrasao}
          selos={[{ texto: "✓ Curso finalizado", tom: "ouro" }, seloProvaPcpr(agora)]}
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
    const totais = TOTAIS_CURSOS[curso.id];
    if (totais) {
      const { vistos, ultimo } = resumoAulas(curso.id, totais);
      const feito = totais.blocos > 0 ? Math.round((vistos / totais.blocos) * 100) : 0;
      const banco = TOTAIS_BANCO[curso.id];
      const treino = banco ? progressoDoCurso(curso.id).total() : null;
      return (
        <CartaoCurso
          curso={curso}
          imagem={BRASAO_CURSO[curso.id]}
          selos={[
            { texto: "Pré-edital", tom: "neutro" },
            { texto: banco ? `${banco.questoes.toLocaleString("pt-BR")} questões` : "Aulas e PDFs", tom: "neutro" },
          ]}
          onAbrir={() => onAbrir(curso.id)}
          detalhes={
            <>
              <dl className="curso-ficha">
                <dt>No app</dt>
                <dd>
                  {totais.videos.toLocaleString("pt-BR")} vídeos e {totais.pdfs.toLocaleString("pt-BR")} PDFs em{" "}
                  {totais.materias.length} matérias
                </dd>
                {banco && (
                  <>
                    <dt>Treino</dt>
                    <dd>
                      {banco.questoes.toLocaleString("pt-BR")} questões e {banco.resumos} resumos, as duas partes
                      crescendo por matéria
                    </dd>
                  </>
                )}
              </dl>
              <p className="curso-legenda">Matérias: vídeos · PDFs</p>
              <ul className="curso-materias">
                {totais.materias.map((m) => (
                  <li key={m.nome}>
                    <span className="curso-materia-cor" style={{ background: m.cor }} aria-hidden="true" />
                    <span className="curso-materia-nome">{m.nome}</span>
                    <span className="curso-materia-qtd">
                      {m.videos} · {m.pdfs}
                    </span>
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
              aria-label="Vídeos e PDFs já concluídos"
              aria-valuemin={0}
              aria-valuemax={totais.blocos}
              aria-valuenow={vistos}
            >
              <span style={{ width: `${feito}%` }} />
            </div>
            <div className="curso-numeros">
              <span>
                <strong>{vistos.toLocaleString("pt-BR")}</strong> de {totais.blocos.toLocaleString("pt-BR")} vídeos e
                PDFs
              </span>
              <span>
                {ultimo !== null ? (
                  <>
                    último estudo <strong>{quando(ultimo, agora)}</strong>
                  </>
                ) : (
                  "nenhuma aula estudada ainda"
                )}
              </span>
            </div>
            {treino && (
              <div className="curso-numeros">
                <span>
                  <strong>{treino.respondidas.toLocaleString("pt-BR")}</strong> questões respondidas
                </span>
                <span>
                  {treino.respondidas > 0 ? (
                    <>
                      <strong>{Math.round((treino.acertos / treino.respondidas) * 100)}%</strong> de acerto
                    </>
                  ) : (
                    "nenhuma questão respondida ainda"
                  )}
                </span>
              </div>
            )}
          </div>
        </CartaoCurso>
      );
    }
    const ed = PRF_ULTIMO_EDITAL;
    return (
      <CartaoCurso
        curso={curso}
        imagem={prfBrasao}
        selos={[
          { texto: "Pré-edital", tom: "neutro" },
          { texto: `Base: edital de ${ed.ano}`, tom: "neutro" },
        ]}
        onAbrir={() => onAbrir(curso.id)}
        detalhes={
          <>
            <dl className="curso-ficha">
              <dt>No app</dt>
              <dd>Questões próprias e resumos de cada item do conteúdo programático de {ed.ano}</dd>
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
        <div className="curso-progresso">
          <div className="curso-numeros">
            <span>
              {prf.vistas > 0 ? (
                <>
                  <strong>{prf.vistas}</strong> {prf.vistas === 1 ? "questão vista" : "questões vistas"}
                </>
              ) : (
                "nenhuma questão respondida ainda"
              )}
            </span>
            {prf.acerto !== null && (
              <span>
                acerto geral <strong>{prf.acerto}%</strong>
              </span>
            )}
            {prf.ultimo !== null && (
              <span>
                último estudo <strong>{quando(prf.ultimo, agora)}</strong>
              </span>
            )}
          </div>
        </div>
      </CartaoCurso>
    );
  }

  return (
    <>
      <h2 className="secao-titulo cursos-titulo">Em andamento</h2>
      <p className="cursos-intro">
        Cada concurso tem o seu próprio espaço: aulas, anotações e progresso ficam separados.
      </p>
      <ul className="cursos-lista">
        {abertos.map((curso) => (
          <li key={curso.id}>{cartao(curso)}</li>
        ))}
      </ul>
      {emBreve.length > 0 && (
        <>
          <h2 className="secao-titulo cursos-breve-titulo">Em breve</h2>
          <p className="cursos-intro">Abre aqui assim que o material do curso chegar.</p>
          <ul className="cursos-lista">
            {emBreve.map((curso) => (
              <li key={curso.id}>{cartao(curso)}</li>
            ))}
          </ul>
        </>
      )}
      {finalizados.length > 0 && (
        <>
          <h2 className="secao-titulo cursos-breve-titulo">Cursos finalizados</h2>
          <p className="cursos-intro">
            A prova já foi feita. O curso continua aqui para consulta, com o progresso guardado.
          </p>
          <ul className="cursos-lista">
            {finalizados.map((curso) => (
              <li key={curso.id}>{cartao(curso)}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
