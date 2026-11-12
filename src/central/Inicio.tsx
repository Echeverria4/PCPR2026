import { useEffect, useMemo, useState, type ReactNode } from "react";
import { BRASOES } from "../components/Cursos";
import { BANCO } from "../data/questions";
import { TOTAIS_BANCO } from "../prf/cursos/completo/totaisBanco";
import type { AbrirCurso, Secao } from "./Central";
import {
  Barras,
  CartaoMapa,
  escolherMapas,
  gravarMateriaMemorizar,
  lerMateriaMemorizar,
  materiasDosMapas,
  useMapas,
} from "./comum";
import {
  INFO_CURSO,
  duracao,
  grupoDaAula,
  montarPainel,
  nomeMateriaPol,
  pct,
  quando,
  type Continuar,
  type CursoEstudo,
  type Painel,
} from "./dados";
import { dicaDoDia } from "./dicas";
import type { EntradaCurso } from "./entrada";

/** Banco da PRF ADM (fechado desde 01/11/26): o número fica aqui para a Central não baixar as questões. */
export const QUESTOES_PRF_ADM = 699;

interface InicioProps {
  onAbrir: AbrirCurso;
  onIr: (s: Secao) => void;
}

function saudacao(agora: number): string {
  const h = new Date(agora).getHours();
  if (h < 5) return "Boa noite";
  if (h < 12) return "Bom dia";
  if (h < 18) return "Boa tarde";
  return "Boa noite";
}

function hojePorExtenso(agora: number): string {
  const s = new Date(agora).toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Para onde o "continuar" leva: a aula que estava aberta ou o treino do curso. */
export function entradaDe(c: Pick<Continuar, "curso" | "tipo" | "grupo" | "aula">): EntradaCurso {
  if (c.tipo === "aula") return c.grupo ? { aba: "aulas", grupo: c.grupo, aula: c.aula } : { aba: "aulas" };
  return { aba: c.curso === "prf-adm" ? "home" : "treino" };
}

const abaTreino = (curso: CursoEstudo): EntradaCurso => ({ aba: curso === "prf-adm" ? "home" : "treino" });

interface Recomendacao {
  chave: string;
  icone: string;
  texto: ReactNode;
  acao: string;
  onClick: () => void;
  tom?: "bom";
}

function recomendacoes(p: Painel, onAbrir: AbrirCurso): Recomendacao[] {
  const lista: Recomendacao[] = [];
  const meta = p.metaMin * 60_000;
  if (p.principal && p.continuar) {
    const em = p.principal.em;
    const alvo = p.continuar;
    if (p.hojePrincipalMs < meta) {
      lista.push({
        chave: "meta",
        icone: "⏱",
        texto: (
          <>
            Faltam <strong>{duracao(meta - p.hojePrincipalMs)}</strong> para a meta de hoje {em} (
            {duracao(meta)}).
          </>
        ),
        acao: "Estudar agora",
        onClick: () => onAbrir(alvo.curso, entradaDe(alvo)),
      });
    } else {
      lista.push({
        chave: "meta",
        icone: "✓",
        tom: "bom",
        texto: (
          <>
            Meta de hoje batida {em}: <strong>{duracao(p.hojePrincipalMs)}</strong> de {duracao(meta)}.
          </>
        ),
        acao: "Ver a semana",
        onClick: () => onAbrir(alvo.curso, { aba: "semana" }),
      });
    }
  }
  for (const f of p.fracos.slice(0, 2)) {
    const curto = INFO_CURSO[f.curso].curto;
    lista.push({
      chave: `fraco-${f.curso}-${f.chave}`,
      icone: "🎯",
      texto: (
        <>
          Acerto de <strong>{f.pct}%</strong> em {f.nome} ({f.feitas} questões, {curto}).
        </>
      ),
      acao: f.aula ? "Rever a aula" : "Treinar",
      onClick: () =>
        onAbrir(f.curso, f.aula ? { aba: "aulas", grupo: f.grupo, aula: f.aula } : abaTreino(f.curso)),
    });
  }
  for (const e of p.erradas.slice(0, 1)) {
    lista.push({
      chave: `erradas-${e.curso}`,
      icone: "↺",
      texto: (
        <>
          <strong>{e.n}</strong> {e.n === 1 ? "questão errada espera" : "questões erradas esperam"} revisão{" "}
          {INFO_CURSO[e.curso].em}.
        </>
      ),
      acao: "Refazer",
      onClick: () => onAbrir(e.curso, abaTreino(e.curso)),
    });
  }
  for (const e of p.esquecidas.slice(0, 1)) {
    lista.push({
      chave: `parada-${e.grupo}`,
      icone: "📌",
      texto: (
        <>
          {e.materia} está parada há <strong>{e.dias} dias</strong>.
        </>
      ),
      acao: "Retomar",
      onClick: () => onAbrir(e.curso, { aba: "aulas", grupo: e.grupo }),
    });
  }
  if (lista.length === 0) {
    lista.push({
      chave: "comecar",
      icone: "▶",
      texto: (
        <>
          Comece pela aba <strong>Aulas</strong> da PRF Policial: PDF primeiro, depois os vídeos, o resumo e as
          questões da aula.
        </>
      ),
      acao: "Abrir as aulas",
      onClick: () => onAbrir("prf-policial", { aba: "aulas" }),
    });
  }
  return lista;
}

function Kpi({ rotulo, valor, sub, barra }: { rotulo: string; valor: string; sub?: ReactNode; barra?: number }) {
  return (
    <div className="cx-kpi">
      <div className="cx-kpi-rotulo">{rotulo}</div>
      <div className="cx-kpi-valor">{valor}</div>
      {barra !== undefined && (
        <div
          className="cx-kpi-barra"
          role="progressbar"
          aria-label={rotulo}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(barra)}
        >
          <span style={{ width: `${Math.min(100, barra)}%` }} />
        </div>
      )}
      {sub && <div className="cx-kpi-sub">{sub}</div>}
    </div>
  );
}

export default function Inicio({ onAbrir, onIr }: InicioProps) {
  const [agora, setAgora] = useState(() => Date.now());
  const painel = useMemo(() => montarPainel(agora), [agora]);
  const mapas = useMapas();

  // Com o cronômetro ligado, os números andam sozinhos.
  useEffect(() => {
    const id = window.setInterval(() => setAgora(Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const { continuar } = painel;
  const recs = useMemo(() => recomendacoes(painel, onAbrir), [painel, onAbrir]);
  const dica = dicaDoDia(painel.hoje);
  const metaMs = painel.metaMin * 60_000;
  const acertoTotal = pct(painel.questoesTotal.a, painel.questoesTotal.n);
  const acertoSemana = pct(painel.questoesSemana.a, painel.questoesSemana.n);

  // Matéria fixada no "Para memorizar hoje"; sem escolha, segue o automático.
  const [materiaMemo, setMateriaMemo] = useState(lerMateriaMemorizar);
  const materiasMapas = useMemo(() => materiasDosMapas(mapas), [mapas]);
  const materiaFixa = materiasMapas.find((m) => m.grupo === materiaMemo) ?? null;
  const { doDia: mapaDoDia, mapaFraco, fraco } = useMemo(
    () => escolherMapas(mapas, painel, materiaFixa?.grupo ?? null),
    [mapas, painel, materiaFixa],
  );
  function trocarMateria(valor: string) {
    const grupo = valor || null;
    gravarMateriaMemorizar(grupo);
    setMateriaMemo(grupo);
  }
  /** A própria etiqueta da matéria abre a escolha: nada a mais na tela. */
  const etiquetaMemorizar = (texto: string) => (
    <span
      className={`cx-etiqueta cx-etiqueta-seletor${materiaFixa ? " cx-fixa" : ""}`}
      title={
        materiaFixa
          ? `Só mapas de ${materiaFixa.nome}. Escolha "Automático" para voltar ao normal.`
          : "Automático: muda à meia-noite, pelas aulas que você já estudou. Toque para escolher uma matéria."
      }
    >
      {texto}
      <span className="cx-seta" aria-hidden="true">
        ▾
      </span>
      <select
        aria-label="Matéria do mapa para memorizar"
        value={materiaFixa?.grupo ?? ""}
        onChange={(e) => trocarMateria(e.target.value)}
      >
        <option value="">Automático (aulas que você já estudou)</option>
        {materiasMapas.map((m) => (
          <option key={m.grupo} value={m.grupo}>
            {m.nome}
          </option>
        ))}
      </select>
    </span>
  );

  const materiasSemana = painel.porMateriaSemana.slice(0, 8);
  const variosCursos = new Set(materiasSemana.map((m) => m.curso)).size > 1;

  const bancoPol = TOTAIS_BANCO["prf-policial"]?.questoes ?? 0;
  const bancoTotal = bancoPol + QUESTOES_PRF_ADM + BANCO.length;
  const resp = (c: CursoEstudo) => painel.questoes.find((q) => q.info.id === c)?.respondidas ?? 0;

  return (
    <div className="cx-inicio">
      <section className="cx-hero">
        <div>
          <p className="cx-hero-data">{hojePorExtenso(agora)}</p>
          <h1 className="cx-hero-titulo">{saudacao(agora)}! Bora estudar?</h1>
          <p className="cx-hero-lema">
            Você é <span>responsável</span> pelo seu próprio sucesso.
          </p>
        </div>
        {painel.sequencia > 0 && (
          <div className="cx-hero-sequencia" title="Dias seguidos com estudo">
            <span className="cx-hero-fogo" aria-hidden="true">
              🔥
            </span>
            <strong>{painel.sequencia}</strong>
            <span>{painel.sequencia === 1 ? "dia seguido" : "dias seguidos"}</span>
          </div>
        )}
      </section>

      {continuar ? (
        <section className="cx-continuar" aria-label="Continuar de onde parou">
          {BRASOES[continuar.curso] && (
            <img className="cx-continuar-brasao" src={BRASOES[continuar.curso]} alt="" aria-hidden="true" />
          )}
          <div className="cx-continuar-texto">
            <div className="cx-continuar-rotulo">
              {continuar.cronometro
                ? continuar.cronometro.rodando
                  ? "⏱ Cronômetro ligado"
                  : "⏸ Cronômetro pausado"
                : "Continuar de onde parou"}
            </div>
            <div className="cx-continuar-titulo">{continuar.titulo}</div>
            <div className="cx-continuar-sub">
              {INFO_CURSO[continuar.curso].curto} ·{" "}
              {continuar.cronometro
                ? `${duracao(continuar.cronometro.ms)} nesta sessão`
                : `último estudo ${quando(continuar.quando, agora)}`}
            </div>
          </div>
          <button
            type="button"
            className="botao botao-ouro cx-continuar-botao"
            onClick={() => onAbrir(continuar.curso, entradaDe(continuar))}
          >
            {continuar.tipo === "treino" ? "Voltar ao treino →" : "Continuar →"}
          </button>
        </section>
      ) : (
        <section className="cx-continuar" aria-label="Começar">
          <div className="cx-continuar-texto">
            <div className="cx-continuar-rotulo">Primeiro passo</div>
            <div className="cx-continuar-titulo">Escolha um curso e abra a primeira aula</div>
            <div className="cx-continuar-sub">O app guarda onde você parou e mostra aqui na próxima vez.</div>
          </div>
          <button type="button" className="botao botao-ouro cx-continuar-botao" onClick={() => onIr("cursos")}>
            Meus cursos →
          </button>
        </section>
      )}

      <section className="cx-kpis" aria-label="Resumo do estudo">
        <Kpi
          rotulo="Hoje"
          valor={duracao(painel.hojeMs)}
          barra={painel.principal ? (painel.hojePrincipalMs / metaMs) * 100 : undefined}
          sub={
            painel.principal
              ? `meta ${painel.principal.em}: ${duracao(painel.hojePrincipalMs)} de ${duracao(metaMs)}`
              : "nenhum estudo ainda"
          }
        />
        <Kpi
          rotulo="Esta semana"
          valor={duracao(painel.semanaMs)}
          sub={`semana passada: ${duracao(painel.semanaPassadaMs)}`}
        />
        <Kpi
          rotulo="Questões na semana"
          valor={painel.questoesSemana.n.toLocaleString("pt-BR")}
          sub={`${painel.questoesHoje.toLocaleString("pt-BR")} hoje · ${painel.questoesTotal.n.toLocaleString("pt-BR")} no total`}
        />
        <Kpi
          rotulo="Acerto geral"
          valor={acertoTotal === null ? "—" : `${acertoTotal}%`}
          sub={acertoSemana === null ? "sem questões na semana" : `nesta semana: ${acertoSemana}%`}
        />
      </section>

      <div className="cx-colunas">
        <div className="cx-coluna">
          <section className="cx-card">
            <div className="cx-card-topo">
              <h2 className="cx-card-titulo">Recomendações para hoje</h2>
            </div>
            <ul className="cx-recs">
              {recs.map((r) => (
                <li key={r.chave} className={r.tom === "bom" ? "cx-rec-bom" : undefined}>
                  <span className="cx-rec-icone" aria-hidden="true">
                    {r.icone}
                  </span>
                  <span className="cx-rec-texto">{r.texto}</span>
                  <button type="button" className="botao cx-botao-peq" onClick={r.onClick}>
                    {r.acao}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="cx-card">
            <div className="cx-card-topo">
              <h2 className="cx-card-titulo">Tempo por matéria nesta semana</h2>
              <button type="button" className="cx-link" onClick={() => onIr("tempo")}>
                Ver tudo →
              </button>
            </div>
            <Barras
              vazio="Nenhuma aula estudada nesta semana ainda. O tempo aparece aqui quando o cronômetro da aula roda."
              linhas={materiasSemana.map((m) => ({
                chave: m.chave,
                rotulo: m.materia,
                etiqueta: variosCursos ? INFO_CURSO[m.curso].curto : undefined,
                valor: m.ms,
                texto: duracao(m.ms),
              }))}
            />
          </section>

          {mapaFraco && fraco && (
            <CartaoMapa
              mapa={mapaFraco}
              materia={nomeMateriaPol(grupoDaAula(mapaFraco.aula))}
              rotulo="🎯 Reforço no ponto fraco"
              completo={false}
              extra={
                <p className="cx-fraco-nota">
                  Seu acerto em <strong>{fraco.nome}</strong> está em <strong>{fraco.pct}%</strong> ({fraco.certas} de{" "}
                  {fraco.feitas}). Releia o macete e a pegadinha antes de voltar às questões.
                </p>
              }
              onAbrir={() => onAbrir("prf-policial", { aba: "mapas", mapa: mapaFraco.aula })}
            />
          )}
        </div>

        <div className="cx-coluna">
          {mapaDoDia ? (
            <CartaoMapa
              mapa={mapaDoDia}
              materia={nomeMateriaPol(grupoDaAula(mapaDoDia.aula))}
              rotulo="🧠 Para memorizar hoje"
              etiqueta={etiquetaMemorizar(nomeMateriaPol(grupoDaAula(mapaDoDia.aula)))}
              onAbrir={() => onAbrir("prf-policial", { aba: "mapas", mapa: mapaDoDia.aula })}
            />
          ) : (
            <section className="cx-card">
              <div className="cx-card-topo">
                <h2 className="cx-card-titulo">🧠 Para memorizar hoje</h2>
                {mapas && materiasMapas.length > 0 && etiquetaMemorizar("Escolher matéria")}
              </div>
              <p className="cx-vazio">
                {!mapas
                  ? "Carregando o mapa do dia…"
                  : mapaFraco
                    ? "Hoje o mapa é o mesmo do reforço no ponto fraco."
                    : "Nenhum mapa disponível."}
              </p>
            </section>
          )}

          <section className="cx-card cx-dica">
            <div className="cx-card-topo">
              <h2 className="cx-card-titulo">💬 Dica de estudo</h2>
            </div>
            <div className="cx-dica-titulo">{dica.titulo}</div>
            <p>{dica.texto}</p>
          </section>

          <section className="cx-card">
            <div className="cx-card-topo">
              <h2 className="cx-card-titulo">Banco de questões</h2>
              <button type="button" className="cx-link" onClick={() => onIr("questoes")}>
                Abrir →
              </button>
            </div>
            <div className="cx-banco-total">
              <strong>{bancoTotal.toLocaleString("pt-BR")}</strong> questões no app
            </div>
            <ul className="cx-banco">
              <li>
                <span>PRF Policial</span>
                <span>
                  {bancoPol.toLocaleString("pt-BR")} · {resp("prf-policial").toLocaleString("pt-BR")} respondidas
                </span>
              </li>
              <li>
                <span>PRF ADM</span>
                <span>
                  {QUESTOES_PRF_ADM.toLocaleString("pt-BR")} · {resp("prf-adm").toLocaleString("pt-BR")} respondidas
                </span>
              </li>
              <li>
                <span>PCPR (finalizado)</span>
                <span>{BANCO.length.toLocaleString("pt-BR")}</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
