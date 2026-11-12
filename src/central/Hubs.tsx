import { useMemo, useState, type ReactNode } from "react";
import { BRASOES } from "../components/Cursos";
import { BANCO } from "../data/questions";
import { PRF_NOMES, type MateriaPrfId } from "../data/prf";
import type { CursoId } from "../data/cursos";
import { getLocalAttempts, getWrongQueue } from "../lib/storage";
import type { AttemptRecord } from "../lib/types";
import { TOTAIS_BANCO } from "../prf/cursos/completo/totaisBanco";
import { TOTAIS_TEMAS_POL } from "../banco/totaisTemas";
import { lerProgresso as lerProgressoMapas } from "../prf/cursos/completo/prf-policial/mapas/progresso";
import {
  contaFeitas as feitasPol,
  lerProgresso as lerRedacaoPol,
  TOTAL_TEMAS as TEMAS_POL,
} from "../prf/cursos/completo/prf-policial/redacao/progresso";
import {
  contaFeitas as feitasPmpr,
  lerProgressoRedacao,
  TOTAL_TEMAS as TEMAS_PMPR,
} from "../prf/portugues/redacao/progressoRedacao";
import type { AbrirCurso } from "./Central";
import { Barras, CartaoMapa, escolherMapas, lerMateriaMemorizar, useMapas, type LinhaBarra } from "./comum";
import {
  INFO_CURSO,
  aulaDaQuestao,
  grupoDaAula,
  lerQuestoes,
  montarPainel,
  nomeMateriaPol,
  pct,
  type CursoEstudo,
  type QuestoesCurso,
} from "./dados";
import type { EntradaCurso } from "./entrada";
import { QUESTOES_PRF_ADM } from "./Inicio";

interface HubProps {
  onAbrir: AbrirCurso;
}

const n = (v: number) => v.toLocaleString("pt-BR");

/** "1.811 questões em 18 matérias + 338 de outros cursos". */
function subPol() {
  const t = TOTAIS_BANCO["prf-policial"];
  if (!t) return "";
  const outras = t.compartilhadas ? ` + ${n(t.compartilhadas)} de outros cursos` : "";
  return `${n(t.questoes)} questões em ${t.materias} matérias${outras}`;
}
const treinoDe = (c: CursoEstudo): EntradaCurso => ({ aba: c === "prf-adm" ? "home" : "treino" });

function Brasao({ curso }: { curso: CursoId }) {
  const src = BRASOES[curso];
  return src ? <img className="cx-hub-brasao" src={src} alt="" aria-hidden="true" /> : null;
}

function Numero({ valor, rotulo }: { valor: string; rotulo: string }) {
  return (
    <div className="cx-hub-numero">
      <strong>{valor}</strong>
      <span>{rotulo}</span>
    </div>
  );
}

function Progresso({ feitos, total, rotulo }: { feitos: number; total: number; rotulo: string }) {
  const p = total > 0 ? Math.min(100, (feitos / total) * 100) : 0;
  return (
    <div className="cx-hub-progresso">
      <div
        className="cx-kpi-barra"
        role="progressbar"
        aria-label={rotulo}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={feitos}
      >
        <span style={{ width: `${p}%` }} />
      </div>
      <span>
        {n(feitos)} de {n(total)} {rotulo}
      </span>
    </div>
  );
}

function CartaoCurso({
  curso,
  titulo,
  sub,
  children,
  acoes,
  apagado,
}: {
  curso: CursoId;
  titulo: string;
  sub?: string;
  children: ReactNode;
  acoes: ReactNode;
  apagado?: boolean;
}) {
  return (
    <section className={`cx-card cx-hub${apagado ? " cx-hub-apagado" : ""}`}>
      <div className="cx-hub-topo">
        <Brasao curso={curso} />
        <div>
          <h2 className="cx-card-titulo">{titulo}</h2>
          {sub && <p className="cx-hub-sub">{sub}</p>}
        </div>
      </div>
      {children}
      <div className="cx-card-acoes">{acoes}</div>
    </section>
  );
}

// ---------- Questões ----------

/** Acerto por matéria pela última resposta de cada questão; só matérias com 3 ou mais questões. */
function acertoPorMateria(q: QuestoesCurso): LinhaBarra[] {
  const ultima = new Map<string, AttemptRecord<string>>();
  for (const t of q.tentativas) if (t && typeof t.questionId === "string") ultima.set(t.questionId, t);
  const soma = new Map<string, { feitas: number; certas: number }>();
  for (const t of ultima.values()) {
    const aula = q.info.id === "prf-policial" ? aulaDaQuestao(t.questionId) : null;
    const chave = aula ? grupoDaAula(aula) : t.materia;
    if (!chave) continue;
    const s = soma.get(chave) ?? { feitas: 0, certas: 0 };
    s.feitas++;
    if (t.acertou) s.certas++;
    soma.set(chave, s);
  }
  const linhas: LinhaBarra[] = [];
  for (const [chave, s] of soma) {
    if (s.feitas < 3) continue;
    const p = pct(s.certas, s.feitas) ?? 0;
    const nome = q.info.id === "prf-policial" ? nomeMateriaPol(chave) : (PRF_NOMES[chave as MateriaPrfId] ?? chave);
    linhas.push({ chave, rotulo: nome, valor: p, texto: `${p}% · ${n(s.feitas)} ${s.feitas === 1 ? "questão" : "questões"}` });
  }
  return linhas.sort((a, b) => a.valor - b.valor);
}

export function Questoes({ onAbrir }: HubProps) {
  const dados = useMemo(() => {
    const painel = montarPainel(Date.now());
    const pol = lerQuestoes(INFO_CURSO["prf-policial"]);
    const adm = lerQuestoes(INFO_CURSO["prf-adm"]);
    const pcpr = getLocalAttempts();
    return {
      painel,
      pol,
      adm,
      pcpr: { feitas: pcpr.length, certas: pcpr.filter((t) => t.acertou).length, erradas: getWrongQueue().length },
      porMateria: [pol, adm].flatMap((q) => (q ? [{ info: q.info, linhas: acertoPorMateria(q) }] : [])),
    };
  }, []);
  const { painel, pol, adm, pcpr } = dados;
  const acerto = (q: QuestoesCurso | null) => {
    const p = q ? pct(q.acertos, q.respondidas) : null;
    return p === null ? "—" : `${p}%`;
  };

  return (
    <div className="cx-hubs">
      <p className="cx-intro">
        Cada curso tem o próprio banco e guarda o seu progresso. Escolha o curso para treinar ou refazer as erradas.
      </p>

      <div className="cx-grade">
        <CartaoCurso
          curso="prf-policial"
          titulo="PRF Policial"
          sub={subPol()}
          acoes={
            <>
              <button type="button" className="botao botao-ouro" onClick={() => onAbrir("prf-policial", treinoDe("prf-policial"))}>
                Treinar →
              </button>
              <button type="button" className="botao" onClick={() => onAbrir("prf-policial", { aba: "aulas" })}>
                Questões por aula
              </button>
            </>
          }
        >
          <div className="cx-hub-numeros">
            <Numero valor={n(pol?.respondidas ?? 0)} rotulo="respondidas" />
            <Numero valor={acerto(pol)} rotulo="de acerto" />
            <Numero valor={n(pol?.erradas ?? 0)} rotulo="erradas para revisar" />
          </div>
        </CartaoCurso>

        <CartaoCurso
          curso="prf-adm"
          titulo="PRF Agente Administrativo"
          sub={`${n(QUESTOES_PRF_ADM)} questões, com provas anteriores`}
          acoes={
            <button type="button" className="botao botao-ouro" onClick={() => onAbrir("prf-adm", treinoDe("prf-adm"))}>
              Treinar →
            </button>
          }
        >
          <div className="cx-hub-numeros">
            <Numero valor={n(adm?.respondidas ?? 0)} rotulo="respondidas" />
            <Numero valor={acerto(adm)} rotulo="de acerto" />
            <Numero valor={n(adm?.erradas ?? 0)} rotulo="erradas para revisar" />
          </div>
        </CartaoCurso>

        <CartaoCurso
          curso="pcpr2026"
          titulo="PCPR 2026"
          sub={`Curso finalizado · ${n(BANCO.length)} questões para consulta`}
          apagado
          acoes={
            <button type="button" className="botao" onClick={() => onAbrir("pcpr2026")}>
              Consultar →
            </button>
          }
        >
          <div className="cx-hub-numeros">
            <Numero valor={n(pcpr.feitas)} rotulo="respondidas" />
            <Numero valor={pcpr.feitas ? `${pct(pcpr.certas, pcpr.feitas)}%` : "—"} rotulo="de acerto" />
            <Numero valor={n(pcpr.erradas)} rotulo="erradas na fila" />
          </div>
        </CartaoCurso>
      </div>

      {painel.fracos.length > 0 && (
        <section className="cx-card">
          <div className="cx-card-topo">
            <h2 className="cx-card-titulo">🎯 Onde o acerto está baixo</h2>
          </div>
          <p className="cx-card-nota">Abaixo de 70%, com pelo menos 5 questões respondidas (vale a última resposta de cada uma).</p>
          <ul className="cx-recs">
            {painel.fracos.slice(0, 6).map((f) => (
              <li key={`${f.curso}-${f.chave}`}>
                <span className="cx-rec-icone" aria-hidden="true">
                  🎯
                </span>
                <span className="cx-rec-texto">
                  <strong>{f.pct}%</strong> em {f.nome} · {f.certas} de {f.feitas} ({INFO_CURSO[f.curso].curto})
                </span>
                <button
                  type="button"
                  className="botao cx-botao-peq"
                  onClick={() => onAbrir(f.curso, f.aula ? { aba: "aulas", grupo: f.grupo, aula: f.aula } : treinoDe(f.curso))}
                >
                  {f.aula ? "Rever a aula" : "Treinar"}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {dados.porMateria.map(({ info, linhas }) => (
        <section key={info.id} className="cx-card">
          <div className="cx-card-topo">
            <h2 className="cx-card-titulo">Acerto por matéria · {info.curto}</h2>
          </div>
          <Barras
            teto={100}
            linhas={linhas}
            vazio="Responda pelo menos 3 questões de uma matéria para ver o acerto dela aqui."
          />
        </section>
      ))}

      <BancoPorTema onAbrir={onAbrir} />
    </div>
  );
}

/** Banco por tema da PRF Policial: uma matéria por vez, cada tema com o total e o botão para a aula dele. */
function BancoPorTema({ onAbrir }: HubProps) {
  const [materia, setMateria] = useState(TOTAIS_TEMAS_POL[0].materia);
  const [todos, setTodos] = useState(false);
  const atual = TOTAIS_TEMAS_POL.find((m) => m.materia === materia) ?? TOTAIS_TEMAS_POL[0];
  // Tela curta: primeiro só os temas que ganharam questões de outros cursos.
  const comFora = atual.temas.filter((t) => t["prf-adm"] + t.pcpr2026 > 0);
  const temas = todos ? atual.temas : comFora;
  const deFora = (m: (typeof TOTAIS_TEMAS_POL)[number]) => m.temas.reduce((s, t) => s + t["prf-adm"] + t.pcpr2026, 0);
  return (
    <section className="cx-card">
      <div className="cx-card-topo">
        <h2 className="cx-card-titulo">📚 Banco por tema · PRF Policial</h2>
      </div>
      <p className="cx-card-nota">
        As questões da PRF ADM e da PCPR do mesmo assunto entram sozinhas na aula certa, com o selo de onde vieram.
        Questões com exemplos regionais ou da Polícia Civil ficam de fora.
      </p>
      <ul className="cx-chips" aria-label="Matérias do banco por tema">
        {TOTAIS_TEMAS_POL.map((m) => (
          <li key={m.materia}>
            <button
              type="button"
              aria-pressed={m.materia === atual.materia}
              onClick={() => {
                setMateria(m.materia);
                setTodos(false);
              }}
            >
              <span>{m.nome}</span>
              <span className="cx-chip-n">+{deFora(m)}</span>
            </button>
          </li>
        ))}
      </ul>
      <ul className="cx-recs">
        {temas.map((t) => {
          const partes = [t["prf-adm"] && `PRF ADM ${t["prf-adm"]}`, t.pcpr2026 && `PCPR ${t.pcpr2026}`].filter(Boolean);
          return (
            <li key={t.aula}>
              <span className="cx-rec-texto">
                <strong>{t.proprias + t["prf-adm"] + t.pcpr2026}</strong> em {t.nome} · {t.proprias} do curso
                {partes.length > 0 && ` + ${partes.join(", ")}`}
              </span>
              <button
                type="button"
                className="botao cx-botao-peq"
                onClick={() => onAbrir("prf-policial", { aba: "aulas", grupo: atual.materia, aula: t.aula })}
              >
                Abrir a aula
              </button>
            </li>
          );
        })}
      </ul>
      {comFora.length < atual.temas.length && (
        <button type="button" className="botao cx-botao-peq cx-tema-todos" onClick={() => setTodos((v) => !v)}>
          {todos ? "Só os temas com questões de outros cursos" : `Ver todos os ${atual.temas.length} temas`}
        </button>
      )}
    </section>
  );
}

// ---------- Mapas Mentais ----------

export function Mapas({ onAbrir }: HubProps) {
  const mapas = useMapas();
  const painel = useMemo(() => montarPainel(Date.now()), []);
  const revisados = useMemo(() => lerProgressoMapas().revisados, []);

  const materias = useMemo(() => {
    const m = new Map<string, { grupo: string; nome: string; total: number; revisados: number }>();
    for (const mapa of mapas ?? []) {
      const grupo = grupoDaAula(mapa.aula);
      const atual = m.get(grupo) ?? { grupo, nome: nomeMateriaPol(grupo), total: 0, revisados: 0 };
      atual.total++;
      if (revisados[mapa.aula]) atual.revisados++;
      m.set(grupo, atual);
    }
    return [...m.values()];
  }, [mapas, revisados]);

  // Mesma escolha de matéria do "Para memorizar hoje" do Início.
  const { doDia } = useMemo(() => escolherMapas(mapas, painel, lerMateriaMemorizar()), [mapas, painel]);
  const totalRevisados = materias.reduce((s, m) => s + m.revisados, 0);

  return (
    <div className="cx-hubs">
      <p className="cx-intro">
        Um mapa por aula, com o essencial em ramos, um macete e a pegadinha mais comum. Marque como revisado dentro do
        curso para acompanhar aqui.
      </p>

      <CartaoCurso
        curso="prf-policial"
        titulo="PRF Policial"
        sub={mapas ? `${n(mapas.length)} mapas em ${materias.length} matérias` : "Carregando os mapas…"}
        acoes={
          <button type="button" className="botao botao-ouro" onClick={() => onAbrir("prf-policial", { aba: "mapas" })}>
            Abrir os mapas →
          </button>
        }
      >
        {mapas && <Progresso feitos={totalRevisados} total={mapas.length} rotulo="revisados" />}
        {materias.length > 0 && (
          <ul className="cx-chips" aria-label="Matérias com mapas">
            {materias.map((m) => (
              <li key={m.grupo}>
                <button type="button" onClick={() => onAbrir("prf-policial", { aba: "mapas", grupo: m.grupo })}>
                  <span>{m.nome}</span>
                  <span className="cx-chip-n">
                    {m.revisados > 0 ? `${m.revisados}/${m.total}` : m.total}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </CartaoCurso>

      {doDia && (
        <CartaoMapa
          mapa={doDia}
          materia={nomeMateriaPol(grupoDaAula(doDia.aula))}
          rotulo="🧠 Mapa do dia"
          onAbrir={() => onAbrir("prf-policial", { aba: "mapas", mapa: doDia.aula })}
        />
      )}

      <section className="cx-card cx-aviso">
        <h2 className="cx-card-titulo">Outros cursos</h2>
        <p>
          PRF ADM, PF, PMPR e Banco do Brasil vão usar os mesmos mapas quando o assunto for igual, junto com o banco por
          tema.
        </p>
      </section>
    </div>
  );
}

// ---------- Redações ----------

export function Redacoes({ onAbrir }: HubProps) {
  const { pol, pmpr } = useMemo(() => ({ pol: lerRedacaoPol(), pmpr: lerProgressoRedacao() }), []);
  const feitasP = feitasPol(pol);
  const feitasM = feitasPmpr(pmpr);

  return (
    <div className="cx-hubs">
      <p className="cx-intro">
        Um tema por semana, no passo a passo: planejar, escrever à mão, conferir com o modelo e se avaliar pelos critérios
        da banca.
      </p>

      <div className="cx-grade">
        <CartaoCurso
          curso="prf-policial"
          titulo="Discursiva Cebraspe · PRF Policial"
          sub={`${TEMAS_POL} temas + Redação Oficial (Manual da Presidência)`}
          acoes={
            <button type="button" className="botao botao-ouro" onClick={() => onAbrir("prf-policial", { aba: "redacao" })}>
              {pol.atual ? `Continuar o tema ${pol.atual} →` : "Abrir a redação →"}
            </button>
          }
        >
          <Progresso feitos={feitasP} total={TEMAS_POL} rotulo="temas feitos" />
          <p className="cx-hub-nota">
            {pol.oficialLido ? "Redação Oficial: guia lido ✓" : "Redação Oficial: guia do Manual ainda por ver."}
          </p>
        </CartaoCurso>

        <CartaoCurso
          curso="pmpr"
          titulo="Redação PMPR Soldado 2027"
          sub={`${TEMAS_PMPR} temas · fica no Português Inteligente da PRF ADM`}
          acoes={
            <button
              type="button"
              className="botao botao-ouro"
              onClick={() => onAbrir("prf-adm", { aba: "portugues", tela: "redacao" })}
            >
              {pmpr.atual ? `Continuar o tema ${pmpr.atual} →` : "Abrir a redação →"}
            </button>
          }
        >
          <Progresso feitos={feitasM} total={TEMAS_PMPR} rotulo="temas feitos" />
          <p className="cx-hub-nota">{pmpr.guiaLido ? "Guia da redação lido ✓" : "Comece pelo guia: ele explica a nota."}</p>
        </CartaoCurso>
      </div>
    </div>
  );
}
