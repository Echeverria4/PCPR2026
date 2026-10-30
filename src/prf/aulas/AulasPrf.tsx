import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { PRF_MATERIA_MAP, type MateriaPrfId } from "../../data/prf";
import type { TentativaPrf } from "../armazenamento";
import { ultimaRespostaPrf } from "../sessoes";
import { AULAS_DRIVE, type AulaDrive, type GrupoAulasDrive } from "./aulasDrive";
import {
  alternaVisto,
  continuarEstudo,
  descartarEstudo,
  duracao,
  encerrarEstudo,
  iniciarEstudo,
  pausarEstudo,
  porDia,
  relogio,
  tempoAtivo,
  totaisEstudo,
  useAgora,
  useEstudo,
  type AlvoEstudo,
  type EstadoEstudo,
  type TotaisEstudo,
} from "./estudo";
import { PONTOS_PROVA, pesoFixacao, questoesDaAula } from "./fixacao";

/** Onde o aluno está dentro da aba (fica no AppPrf para não se perder durante a fixação). */
export interface TelaAulas {
  grupo?: string;
  aula?: string;
}

interface AulasPrfProps {
  tela: TelaAulas;
  onTela: (tela: TelaAulas) => void;
  tentativas: TentativaPrf[];
  onFixar: (aula: AulaDrive, quantidade: number) => void;
}

const LIMITE_AVISO = 4 * 60 * 60 * 1000;
/** No gráfico da semana, a barra só enche a altura toda a partir de meia hora no dia. */
const ESCALA_MINIMA = 30 * 60 * 1000;
const ALTURA_BARRA = 64;
const urlArquivo = (id: string) => `https://drive.google.com/file/d/${id}/view`;
/** Player do próprio Drive: só toca com a conta Google do dono conectada no navegador. */
const urlPlayer = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
const ICONE: Record<string, string> = {
  niv: "🚀",
  pt: "📖",
  etica: "⚖️",
  rlm: "🧩",
  con: "🏛️",
  adm: "📜",
  administracao: "📊",
  arq: "🗂️",
  info: "💻",
  leg: "🚓",
};
const icone = (g: GrupoAulasDrive) => ICONE[g.id] ?? "🎬";
const corGrupo = (g: GrupoAulasDrive) =>
  ({ "--cor-materia": PRF_MATERIA_MAP[g.id as MateriaPrfId]?.cor ?? "var(--ouro)" }) as CSSProperties;
const rotuloAula = (g: GrupoAulasDrive, a: AulaDrive) => `${g.nome} · ${a.n ? `Aula ${a.n}: ` : ""}${a.nome}`;
const nomeAula = (a: AulaDrive) => (a.n ? `Aula ${a.n} · ${a.nome}` : a.nome);
const pct = (parte: number, todo: number) => (todo > 0 ? Math.floor((parte / todo) * 100) : 0);
const largura = (p: number): CSSProperties => ({ width: `${p}%` });
const plural = (n: number, um: string, varios: string) => `${n} ${n === 1 ? um : varios}`;
const maiuscula = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const quando = (ms: number) =>
  new Date(ms).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
const diaCurto = (ms: number) => new Date(ms).toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
const diaMes = (ms: number) => new Date(ms).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
const diaLongo = (ms: number) =>
  maiuscula(new Date(ms).toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "2-digit" }));
/** Tempo curto para caber no quadro e na barra: <1min, 25min, 2h05. */
const curto = (ms: number) => {
  const min = Math.floor(ms / 60000);
  if (min < 1) return ms > 0 ? "<1min" : "0min";
  return min < 60 ? `${min}min` : `${Math.floor(min / 60)}h${String(min % 60).padStart(2, "0")}`;
};

/** Vídeos vistos da aula. Aula que ainda não está no Drive (sem vídeos) nunca fica completa. */
function progresso(a: AulaDrive, vistos: Set<string>) {
  const feitos = a.blocos.filter((b) => vistos.has(b.id)).length;
  return { feitos, total: a.blocos.length, completa: a.blocos.length > 0 && feitos === a.blocos.length };
}

function videosDoGrupo(g: GrupoAulasDrive, vistos: Set<string>) {
  let feitos = 0;
  let total = 0;
  for (const a of g.aulas) {
    const p = progresso(a, vistos);
    feitos += p.feitos;
    total += p.total;
  }
  return { feitos, total };
}

/** Primeira aula do grupo, da posição `desde` em diante, que já está no Drive e não foi concluída. */
function pendente(g: GrupoAulasDrive, vistos: Set<string>, desde = 0) {
  return g.aulas.slice(desde).find((a) => a.blocos.length > 0 && !progresso(a, vistos).completa);
}

function acharAula(id?: string) {
  if (!id) return null;
  for (const grupo of AULAS_DRIVE) {
    const aula = grupo.aulas.find((a) => a.id === id);
    if (aula) return { grupo, aula };
  }
  return null;
}

type Motivo = "contando" | "pausado" | "parou" | "proxima" | "comeco";

interface Retomada {
  grupo: GrupoAulasDrive;
  aula: AulaDrive;
  motivo: Motivo;
}

const TEXTO_RETOMAR: Record<Motivo, { olho: string; botao: string }> = {
  contando: { olho: "Cronômetro contando nesta aula", botao: "▶ Voltar para a aula" },
  pausado: { olho: "Cronômetro pausado nesta aula", botao: "▶ Voltar para a aula" },
  parou: { olho: "Continue de onde parou", botao: "▶ Continuar a aula" },
  proxima: { olho: "Próxima aula", botao: "▶ Começar a aula" },
  comeco: { olho: "Comece por aqui", botao: "▶ Começar" },
};

/** Aula sugerida no topo: a do cronômetro; senão a última estudada (ou a seguinte, se acabou); senão a 1ª pendente. */
function aulaParaRetomar(estudo: EstadoEstudo, vistos: Set<string>): Retomada | null {
  const ativa = acharAula(estudo.ativo?.aula);
  if (ativa) return { ...ativa, motivo: estudo.ativo?.desde === null ? "pausado" : "contando" };
  for (let i = estudo.sessoes.length - 1; i >= 0; i--) {
    const ultima = acharAula(estudo.sessoes[i].aula);
    if (!ultima) continue;
    if (!progresso(ultima.aula, vistos).completa) return { ...ultima, motivo: "parou" };
    const seguinte = pendente(ultima.grupo, vistos, ultima.grupo.aulas.indexOf(ultima.aula) + 1);
    if (seguinte) return { grupo: ultima.grupo, aula: seguinte, motivo: "proxima" };
    break;
  }
  const comecou = estudo.sessoes.length > 0 || vistos.size > 0;
  for (const grupo of AULAS_DRIVE) {
    const aula = pendente(grupo, vistos);
    if (aula) return { grupo, aula, motivo: comecou ? "proxima" : "comeco" };
  }
  return null;
}

export default function AulasPrf({ tela, onTela, tentativas, onFixar }: AulasPrfProps) {
  const estudo = useEstudo();
  const grupo = AULAS_DRIVE.find((g) => g.id === tela.grupo);
  const aula = grupo?.aulas.find((a) => a.id === tela.aula);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [tela.grupo, tela.aula]);

  return (
    <div className="prf-aulas">
      {grupo && aula ? (
        <TelaAula
          key={aula.id}
          grupo={grupo}
          aula={aula}
          estudo={estudo}
          tentativas={tentativas}
          onTela={onTela}
          onFixar={onFixar}
        />
      ) : grupo ? (
        <ListaAulas grupo={grupo} estudo={estudo} onTela={onTela} />
      ) : (
        <Inicio estudo={estudo} onTela={onTela} />
      )}
    </div>
  );
}

interface ListaProps {
  estudo: EstadoEstudo;
  onTela: (tela: TelaAulas) => void;
}

/* ---------- Início da aba: retomar, cronômetro e matérias ---------- */

function Inicio({ estudo, onTela }: ListaProps) {
  const tot = useMemo(() => totaisEstudo(estudo, Date.now()), [estudo]);
  const vistos = useMemo(() => new Set(estudo.vistos), [estudo.vistos]);
  const noDrive = AULAS_DRIVE.flatMap((g) => g.aulas).filter((a) => a.blocos.length > 0);
  const concluidas = noDrive.filter((a) => progresso(a, vistos).completa).length;
  let videos = 0;
  let vistosTotal = 0;
  for (const g of AULAS_DRIVE) {
    const v = videosDoGrupo(g, vistos);
    videos += v.total;
    vistosTotal += v.feitos;
  }

  return (
    <div className="prf-aulas-tela">
      <div className="prf-aulas-topo">
        <Retomar estudo={estudo} vistos={vistos} tot={tot} onTela={onTela} />
        <PainelCronometro estudo={estudo} />
      </div>

      <div className="prf-aulas-cabeca">
        <h2 className="secao-titulo">Aulas do curso</h2>
        <p className="prf-aulas-resumo">
          <b>{concluidas}</b> de {noDrive.length} aulas concluídas · <b>{vistosTotal}</b> de {videos} vídeos vistos
        </p>
        <p className="prf-aulas-intro">
          Os vídeos e PDFs abrem no Google Drive. Marque cada vídeo que assistir; no fim de cada aula há questões de
          fixação.
        </p>
      </div>

      <div className="prf-grupos">
        {AULAS_DRIVE.map((g) => (
          <CartaoGrupo
            key={g.id}
            grupo={g}
            vistos={vistos}
            tempo={tot.porGrupo.get(g.id) ?? 0}
            onAbrir={() => onTela({ grupo: g.id })}
          />
        ))}
      </div>
    </div>
  );
}

interface RetomarProps extends ListaProps {
  vistos: Set<string>;
  tot: TotaisEstudo;
}

function Retomar({ estudo, vistos, tot, onTela }: RetomarProps) {
  const r = aulaParaRetomar(estudo, vistos);
  if (!r) {
    return (
      <section className="prf-retomar prf-retomar-fim" aria-label="Curso concluído">
        <span className="prf-retomar-olho">Curso concluído</span>
        <h3 className="prf-retomar-titulo">Você viu todos os vídeos do curso 🏆</h3>
        <p className="prf-retomar-meta">Refaça as fixações e o treino para não esquecer.</p>
      </section>
    );
  }
  const { feitos, total, completa } = progresso(r.aula, vistos);
  const tempo = tot.porAula.get(r.aula.id) ?? 0;
  const texto = TEXTO_RETOMAR[r.motivo];
  const pdfs = r.aula.pdfs.length;
  const fixacao = pesoFixacao(r.aula.materia, r.aula.topicos).quantidade;
  const passos = [
    { texto: `Assistir ${plural(total, "vídeo", "vídeos")}`, info: `${feitos}/${total}`, feito: completa },
    ...(pdfs > 0 ? [{ texto: pdfs === 1 ? "Ler o PDF da aula" : `Ler os ${pdfs} PDFs da aula`, info: "", feito: false }] : []),
    ...(fixacao > 0 ? [{ texto: `Fazer ${plural(fixacao, "questão", "questões")} de fixação`, info: "", feito: false }] : []),
  ];
  return (
    <section className={`prf-retomar prf-retomar-${r.motivo}`} style={corGrupo(r.grupo)} aria-label="Continuar estudando">
      <span className="prf-retomar-marca" aria-hidden="true">
        {r.aula.n || icone(r.grupo)}
      </span>
      <span className="prf-retomar-olho">{texto.olho}</span>
      <span className="prf-retomar-grupo">
        <span className="prf-grupo-icone prf-icone-mini" aria-hidden="true">
          {icone(r.grupo)}
        </span>
        {r.grupo.nome}
        {r.aula.n && ` · Aula ${r.aula.n}`}
      </span>
      <h3 className="prf-retomar-titulo">{r.aula.nome}</h3>
      <ol className="prf-retomar-passos" aria-label="Passos da aula">
        {passos.map((p, i) => (
          <li key={p.texto} className={p.feito ? "prf-retomar-feito" : undefined}>
            <span className="prf-retomar-passo-num" aria-hidden="true">
              {p.feito ? "✓" : i + 1}
            </span>
            <span className="prf-retomar-passo-texto">{p.texto}</span>
            {p.info && <span className="prf-retomar-passo-info">{p.info}</span>}
          </li>
        ))}
      </ol>
      <div className="prf-retomar-acao">
        <button
          className="botao botao-ouro prf-retomar-botao"
          onClick={() => onTela({ grupo: r.grupo.id, aula: r.aula.id })}
        >
          {texto.botao}
        </button>
        {tempo > 0 && <span className="prf-retomar-meta">{duracao(tempo)} de estudo nesta aula</span>}
      </div>
    </section>
  );
}

function ControlesAtivo({ pausado }: { pausado: boolean }) {
  return (
    <>
      {pausado ? (
        <button className="botao botao-ouro" onClick={continuarEstudo}>
          ▶ Continuar
        </button>
      ) : (
        <button className="botao" onClick={pausarEstudo}>
          ⏸ Pausar
        </button>
      )}
      <button className="botao" onClick={encerrarEstudo}>
        ■ Encerrar e salvar
      </button>
      <button
        className="botao prf-crono-descartar"
        onClick={() => {
          if (window.confirm("Descartar este tempo sem salvar?")) descartarEstudo();
        }}
      >
        Descartar
      </button>
    </>
  );
}

function PainelCronometro({ estudo }: { estudo: EstadoEstudo }) {
  const a = estudo.ativo;
  const agora = useAgora(a !== null && a.desde !== null);
  const t = totaisEstudo(estudo, agora);
  const dias = porDia(estudo, agora);
  const ms = a ? tempoAtivo(a, agora) : 0;
  const pausado = a !== null && a.desde === null;
  const estado = !a ? "parado" : pausado ? "pausado" : "contando";

  return (
    <section className={`prf-crono prf-crono-${estado}`} aria-label="Cronômetro de estudo">
      <div className="prf-crono-cabeca">
        <span className="prf-crono-titulo">Cronômetro de estudo</span>
        <span className="prf-crono-rotulo">
          <span className="prf-crono-ponto" aria-hidden="true" />
          <span className="prf-crono-rotulo-texto">
            {a ? `${pausado ? "Pausado" : "Contando"} · ${a.rotulo}` : "Parado"}
          </span>
        </span>
      </div>
      <div className="prf-crono-tempo" role="timer">
        {relogio(ms)}
      </div>
      <div className="prf-crono-botoes">
        {a ? (
          <ControlesAtivo pausado={pausado} />
        ) : (
          <button className="botao botao-ouro" onClick={() => iniciarEstudo({ rotulo: "Estudo livre" })}>
            ▶ Começar estudo livre
          </button>
        )}
      </div>
      {ms > LIMITE_AVISO && (
        <p className="prf-crono-aviso">
          ⚠ Ligado há mais de 4 horas. Se esqueceu ligado, descarte; se estudou mesmo, encerre e salve.
        </p>
      )}
      <dl className="prf-crono-totais">
        <div>
          <dt>Hoje</dt>
          <dd>{curto(t.hoje)}</dd>
        </div>
        <div>
          <dt>7 dias</dt>
          <dd>{curto(t.semana)}</dd>
        </div>
        <div>
          <dt>Total</dt>
          <dd>{curto(t.total)}</dd>
        </div>
      </dl>
      <GraficoSemana dias={dias} jaEstudou={t.total > 0} />
      {t.total > 0 && <Historico estudo={estudo} dias={dias} />}
    </section>
  );
}

type Dia = { dia: number; ms: number };

function GraficoSemana({ dias, jaEstudou }: { dias: Dia[]; jaEstudou: boolean }) {
  const maior = Math.max(0, ...dias.map((d) => d.ms));
  const escala = Math.max(maior, ESCALA_MINIMA);
  const hoje = dias[dias.length - 1];
  return (
    <figure className="prf-semana">
      <figcaption className="prf-semana-titulo">Últimos 7 dias</figcaption>
      <div className="prf-semana-barras">
        {maior === 0 && (
          <p className="prf-semana-vazio">
            {jaEstudou ? "Nenhum estudo nos últimos 7 dias." : "O tempo de estudo de cada dia aparece aqui."}
          </p>
        )}
        {dias.map((d) => {
          const eHoje = d === hoje;
          const tempo = d.ms > 0 ? duracao(d.ms) : "sem estudo";
          return (
            <div
              key={d.dia}
              className={`prf-semana-col${eHoje ? " prf-semana-hoje" : ""}`}
              role="img"
              tabIndex={0}
              aria-label={`${eHoje ? "Hoje" : diaLongo(d.dia)}: ${tempo}`}
              data-tip={`${eHoje ? "hoje" : diaCurto(d.dia)} ${diaMes(d.dia)} · ${d.ms > 0 ? curto(d.ms) : "sem estudo"}`}
            >
              <span className="prf-semana-area">
                {maior > 0 && d.ms === maior && <span className="prf-semana-valor">{curto(d.ms)}</span>}
                <span
                  className={`prf-semana-barra${d.ms > 0 ? "" : " prf-semana-zero"}`}
                  style={d.ms > 0 ? { height: Math.max(3, Math.round((d.ms / escala) * ALTURA_BARRA)) } : undefined}
                />
              </span>
              <span className="prf-semana-dia" aria-hidden="true">
                {eHoje ? "hoje" : diaCurto(d.dia)}
              </span>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

function Historico({ estudo, dias }: { estudo: EstadoEstudo; dias: Dia[] }) {
  const hoje = dias[dias.length - 1];
  return (
    <details className="prf-crono-historico">
      <summary>Histórico</summary>
      <div className="prf-crono-hist-grade">
        <div>
          <h4 className="prf-crono-hist-titulo">Por dia</h4>
          <table className="prf-crono-tabela">
            <tbody>
              {[...dias].reverse().map((d) => (
                <tr key={d.dia}>
                  <th scope="row">{d === hoje ? "Hoje" : diaLongo(d.dia)}</th>
                  <td>{d.ms > 0 ? duracao(d.ms) : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {estudo.sessoes.length > 0 && (
          <div>
            <h4 className="prf-crono-hist-titulo">Últimas sessões</h4>
            <ul className="prf-crono-sessoes">
              {estudo.sessoes
                .slice(-8)
                .reverse()
                .map((s) => (
                  <li key={`${s.inicio}-${s.fim}`}>
                    <span className="prf-crono-hist-quando">{quando(s.inicio)}</span>
                    <span className="prf-crono-hist-rotulo">{s.rotulo}</span>
                    <b>{duracao(s.ms)}</b>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </details>
  );
}

interface CartaoGrupoProps {
  grupo: GrupoAulasDrive;
  vistos: Set<string>;
  tempo: number;
  onAbrir: () => void;
}

function CartaoGrupo({ grupo, vistos, tempo, onAbrir }: CartaoGrupoProps) {
  const { feitos, total } = videosDoGrupo(grupo, vistos);
  const completo = total > 0 && feitos === total;
  const p = pct(feitos, total);
  const classes = ["prf-grupo", grupo.id === "niv" && "prf-grupo-destaque", completo && "prf-grupo-completo"];
  return (
    <button className={classes.filter(Boolean).join(" ")} style={corGrupo(grupo)} onClick={onAbrir}>
      <span className="prf-grupo-icone" aria-hidden="true">
        {icone(grupo)}
      </span>
      <span className="prf-grupo-texto">
        <span className="prf-grupo-nome">{grupo.nome}</span>
        <span className="prf-grupo-meta">
          {plural(grupo.aulas.length, "aula", "aulas")} · {feitos}/{plural(total, "vídeo", "vídeos")}{tempo > 0 ? ` · ${duracao(tempo)}` : ""}
        </span>
      </span>
      <span className="prf-grupo-pct">{completo ? "✓" : `${p}%`}</span>
      <span className="prf-medidor" aria-hidden="true">
        <span style={largura(p)} />
      </span>
    </button>
  );
}

/* ---------- Matéria: trilha das aulas ---------- */

function ListaAulas({ grupo, estudo, onTela }: ListaProps & { grupo: GrupoAulasDrive }) {
  const tot = useMemo(() => totaisEstudo(estudo, Date.now()), [estudo]);
  const vistos = useMemo(() => new Set(estudo.vistos), [estudo.vistos]);
  const { feitos, total } = videosDoGrupo(grupo, vistos);
  const tempo = tot.porGrupo.get(grupo.id) ?? 0;
  const proxima = pendente(grupo, vistos);
  const p = pct(feitos, total);

  return (
    <div className="prf-aulas-tela" style={corGrupo(grupo)}>
      <nav className="prf-aulas-nav">
        <button className="prf-voltar" onClick={() => onTela({})}>
          ← Todas as matérias
        </button>
      </nav>

      <header className="prf-materia-cabeca">
        <span className="prf-grupo-icone prf-icone-grande" aria-hidden="true">
          {icone(grupo)}
        </span>
        <div className="prf-materia-texto">
          <h2 className="prf-materia-titulo">{grupo.nome}</h2>
          <p className="prf-materia-meta">
            {grupo.aulas.length} aulas{tempo > 0 ? ` · ${duracao(tempo)} de estudo` : ""}
          </p>
          <div className="prf-materia-progresso">
            <span className="prf-medidor" aria-hidden="true">
              <span style={largura(p)} />
            </span>
            <span>
              {feitos} de {plural(total, "vídeo visto", "vídeos vistos")} · {p}%
            </span>
          </div>
        </div>
        {proxima ? (
          <button
            className="botao botao-ouro prf-materia-botao"
            onClick={() => onTela({ grupo: grupo.id, aula: proxima.id })}
          >
            ▶ {feitos > 0 ? "Continuar" : "Começar"}: {proxima.n ? `Aula ${proxima.n}` : proxima.nome}
          </button>
        ) : (
          <span className="prf-materia-fim">
            <span aria-hidden="true">✓</span> Matéria concluída
          </span>
        )}
      </header>

      <ol className="prf-aulas-lista">
        {grupo.aulas.map((a) => {
          const vazia = a.blocos.length === 0;
          const pr = progresso(a, vistos);
          const { quantidade } = pesoFixacao(a.materia, a.topicos);
          const tempoAula = tot.porAula.get(a.id) ?? 0;
          const meta = vazia
            ? "Ainda não está no Drive"
            : [
                `${pr.feitos}/${plural(pr.total, "vídeo", "vídeos")}`,
                quantidade > 0 && `${quantidade} questões de fixação`,
                tempoAula > 0 && duracao(tempoAula),
              ]
                .filter(Boolean)
                .join(" · ");
          const estado = vazia ? "breve" : pr.completa ? "feita" : pr.feitos > 0 ? "andamento" : "nova";
          const eProxima = a === proxima;
          return (
            <li key={a.id} className={`prf-aula prf-aula-${estado}${eProxima ? " prf-aula-proxima" : ""}`}>
              <button
                className="prf-aula-item"
                disabled={vazia}
                onClick={() => onTela({ grupo: grupo.id, aula: a.id })}
                aria-label={`${a.n ? `Aula ${a.n}: ` : ""}${a.nome}. ${meta}`}
              >
                <span
                  className="prf-aula-no"
                  aria-hidden="true"
                  style={{ "--prog": `${pct(pr.feitos, pr.total)}%` } as CSSProperties}
                >
                  <span>{pr.completa ? "✓" : a.n || "•"}</span>
                </span>
                <span className="prf-aula-texto">
                  <span className="prf-aula-nome">{a.nome}</span>
                  <span className="prf-aula-meta">{meta}</span>
                </span>
                {eProxima && <span className="prf-aula-selo">{pr.feitos > 0 ? "Continuar" : "Próxima"}</span>}
                {!vazia && (
                  <span className="prf-aula-seta" aria-hidden="true">
                    ›
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ---------- Aula: vídeos, PDFs e fixação ---------- */

function CronoAula({ estudo, alvo }: { estudo: EstadoEstudo; alvo: AlvoEstudo }) {
  const a = estudo.ativo;
  const agora = useAgora(a !== null && a.desde !== null);
  if (!a) {
    return (
      <div className="prf-crono prf-crono-compacto prf-crono-parado">
        <div className="prf-crono-info">
          <span className="prf-crono-rotulo">
            <span className="prf-crono-ponto" aria-hidden="true" />
            Cronômetro parado
          </span>
          <span className="prf-crono-dica">Abrir um vídeo ou PDF também liga o cronômetro desta aula.</span>
        </div>
        <div className="prf-crono-botoes">
          <button className="botao botao-ouro" onClick={() => iniciarEstudo(alvo)}>
            ▶ Estudar esta aula
          </button>
        </div>
      </div>
    );
  }
  const pausado = a.desde === null;
  const aqui = a.aula === alvo.aula;
  return (
    <div className={`prf-crono prf-crono-compacto prf-crono-${pausado ? "pausado" : "contando"}`}>
      <div className="prf-crono-info">
        <span className={`prf-crono-rotulo${aqui ? " prf-aula-contando" : ""}`}>
          <span className="prf-crono-ponto" aria-hidden="true" />
          <span className="prf-crono-rotulo-texto">
            {pausado ? "Pausado" : "Contando"}
            {aqui ? " nesta aula" : ` · ${a.rotulo}`}
          </span>
        </span>
        <span className="prf-crono-tempo" role="timer">
          {relogio(tempoAtivo(a, agora))}
        </span>
        {!aqui && <span className="prf-crono-dica">Estudar esta aula salva o tempo de lá e começa a contar aqui.</span>}
      </div>
      <div className="prf-crono-botoes">
        {aqui ? (
          <ControlesAtivo pausado={pausado} />
        ) : (
          <button className="botao botao-ouro" onClick={() => iniciarEstudo(alvo)}>
            ▶ Estudar esta aula
          </button>
        )}
      </div>
    </div>
  );
}

const SEGMENTOS = [
  { id: "certas", um: "certa", varios: "certas" },
  { id: "erradas", um: "errada", varios: "erradas" },
  { id: "nunca", um: "não feita", varios: "não feitas" },
] as const;

/** Rola até o elemento ficar logo abaixo do cabeçalho fixo; com `soSeAcima`, só quando ele subiu para fora da tela. */
function rolaPara(el: HTMLElement | null, soSeAcima = false) {
  if (!el) return;
  const topo = document.querySelector(".topo-fixo")?.getBoundingClientRect().bottom ?? 0;
  const y = el.getBoundingClientRect().top - topo - 12;
  if (soSeAcima && y >= -12) return;
  const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollBy({ top: y, behavior: suave ? "smooth" : "auto" });
}

/** Reserva para quando o player do Drive não carrega aqui (sem login, iPhone, janela anônima). */
function AjudaDrive({ id, coisa, onAbrir }: { id: string; coisa: string; onAbrir: () => void }) {
  return (
    <details className="prf-drive-ajuda">
      <summary>O {coisa} não abre?</summary>
      <p>
        O {coisa} vem do seu Google Drive e só abre com a sua conta Google conectada neste navegador. No iPhone ou numa
        janela anônima ele pode pedir login; nesse caso, abra direto no Drive.
      </p>
      <a href={urlArquivo(id)} target="_blank" rel="noopener noreferrer" onClick={onAbrir}>
        Abrir no Drive ↗
      </a>
    </details>
  );
}

interface TelaAulaProps extends ListaProps {
  grupo: GrupoAulasDrive;
  aula: AulaDrive;
  tentativas: TentativaPrf[];
  onFixar: (aula: AulaDrive, quantidade: number) => void;
}

function TelaAula({ grupo, aula, estudo, tentativas, onTela, onFixar }: TelaAulaProps) {
  const vistos = useMemo(() => new Set(estudo.vistos), [estudo.vistos]);
  const { feitos, total } = progresso(aula, vistos);
  // O player abre no primeiro vídeo que falta ver.
  const [atual, setAtual] = useState(() => (aula.blocos.find((b) => !vistos.has(b.id)) ?? aula.blocos[0])?.id);
  const player = useRef<HTMLDivElement>(null);
  const quadro = useRef<HTMLIFrameElement>(null);
  const tocou = useRef(false);
  const [pdf, setPdf] = useState<string | null>(null);
  const passoPdf = useRef<HTMLElement>(null);
  const rolarPdf = useRef(false);
  const fix = pesoFixacao(aula.materia, aula.topicos);
  const banco = useMemo(() => {
    const ultima = ultimaRespostaPrf(tentativas);
    const c = { certas: 0, erradas: 0, nunca: 0 };
    for (const q of questoesDaAula(aula.materia, aula.topicos)) {
      const acertou = ultima.get(q.id);
      if (acertou === undefined) c.nunca++;
      else if (acertou) c.certas++;
      else c.erradas++;
    }
    return c;
  }, [aula, tentativas]);
  // Anterior e próxima pulam as aulas que ainda não estão no Drive.
  const navegaveis = grupo.aulas.filter((a) => a.blocos.length > 0);
  const i = navegaveis.indexOf(aula);
  const anterior = i > 0 ? navegaveis[i - 1] : undefined;
  const proxima = i >= 0 ? navegaveis[i + 1] : undefined;
  const alvo: AlvoEstudo = { aula: aula.id, grupo: grupo.id, rotulo: rotuloAula(grupo, aula) };
  const ativo = estudo.ativo;
  const temPdf = aula.pdfs.length > 0;
  const iAtual = aula.blocos.findIndex((b) => b.id === atual);
  const bloco = aula.blocos[iAtual];
  const vistoAtual = bloco ? vistos.has(bloco.id) : false;
  // Próximo que falta ver, dando a volta na lista; com todos vistos, o seguinte da ordem.
  const pendente = [...aula.blocos.slice(iAtual + 1), ...aula.blocos.slice(0, Math.max(iAtual, 0))].find(
    (b) => !vistos.has(b.id),
  );
  const proximo = pendente ?? aula.blocos[iAtual + 1];

  /** Abrir um vídeo ou PDF liga o cronômetro desta aula quando ele está parado. */
  function aoAbrir() {
    if (!ativo) iniciarEstudo(alvo);
    else if (ativo.aula === aula.id && ativo.desde === null) continuarEstudo();
  }

  // O player do Drive é de outro site: o clique nele só aparece aqui como a página perdendo o foco.
  // No primeiro clique em cada vídeo, liga o cronômetro se ele estiver desligado (pausado continua pausado).
  useEffect(() => {
    function aoSairDaPagina() {
      window.setTimeout(() => {
        if (tocou.current || !quadro.current || document.activeElement !== quadro.current) return;
        tocou.current = true;
        if (!ativo) iniciarEstudo(alvo);
      }, 0);
    }
    window.addEventListener("blur", aoSairDaPagina);
    return () => window.removeEventListener("blur", aoSairDaPagina);
  });

  /** Põe o vídeo no player e, se o player ficou para cima da tela, rola até ele. */
  function escolhe(id: string) {
    setAtual(id);
    tocou.current = false;
    aoAbrir();
    rolaPara(player.current, true);
  }

  function terminei() {
    if (!bloco) return;
    alternaVisto(bloco.id);
    if (pendente) escolhe(pendente.id);
  }

  /** Abre o PDF aqui mesmo (um por vez); abrir também liga o cronômetro. */
  function alternaPdf(id: string) {
    if (pdf === id) {
      setPdf(null);
      return;
    }
    setPdf(id);
    aoAbrir();
  }

  /** Do aviso de fim dos vídeos: abre o primeiro PDF e desce até ele. */
  function vaiAoMaterial() {
    const primeiro = aula.pdfs[0].id;
    aoAbrir();
    if (pdf === primeiro) {
      rolaPara(passoPdf.current);
    } else {
      rolarPdf.current = true;
      setPdf(primeiro);
    }
  }

  // Desce até o material depois que o leitor do PDF já está na tela.
  useEffect(() => {
    if (!rolarPdf.current) return;
    rolarPdf.current = false;
    rolaPara(passoPdf.current);
  }, [pdf]);

  return (
    <div className="prf-aulas-tela" style={corGrupo(grupo)}>
      <nav className="prf-aulas-nav">
        <button className="prf-voltar" onClick={() => onTela({ grupo: grupo.id })}>
          ← Aulas de {grupo.nome}
        </button>
      </nav>

      <header className="prf-aula-cabeca">
        {aula.n && (
          <span className="prf-aula-marca" aria-hidden="true">
            {aula.n}
          </span>
        )}
        <span className="prf-aula-sobre">
          <span className="prf-grupo-icone prf-icone-mini" aria-hidden="true">
            {icone(grupo)}
          </span>
          {grupo.nome}
          {aula.n && ` · Aula ${aula.n}`}
        </span>
        <h2 className="prf-aula-titulo">{aula.nome}</h2>
        <div className="prf-aula-progresso">
          <span className="prf-medidor" aria-hidden="true">
            <span style={largura(pct(feitos, total))} />
          </span>
          <span>
            {feitos} de {plural(total, "vídeo visto", "vídeos vistos")}
          </span>
        </div>
        <CronoAula estudo={estudo} alvo={alvo} />
      </header>

      <section className="prf-passo" aria-label="Vídeos">
        <h3 className="prf-passo-titulo">
          <span className="prf-passo-num" aria-hidden="true">
            1
          </span>
          Assista aos vídeos
          <span className="prf-passo-extra">
            {feitos}/{total} vistos
          </span>
        </h3>
        <p className="prf-passo-dica">O vídeo abre aqui mesmo. Ao terminar, toque em “Terminei”.</p>
        {bloco && (
          <div className="prf-player" ref={player}>
            <div className="prf-player-quadro">
              <span className="prf-drive-carregando" aria-hidden="true">
                Carregando o vídeo…
              </span>
              {/* Um iframe novo por vídeo: trocar o src de um iframe aberto empilha o histórico do navegador. */}
              <iframe
                key={bloco.id}
                ref={quadro}
                src={urlPlayer(bloco.id)}
                title={`Vídeo: ${bloco.nome}`}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
            <div className="prf-player-rodape">
              <div className="prf-player-sobre">
                {total > 1 && (
                  <span className="prf-player-posicao">
                    Vídeo {iAtual + 1} de {total}
                  </span>
                )}
                <span className="prf-player-nome">{bloco.nome}</span>
              </div>
              {!vistoAtual ? (
                <div className="prf-player-acoes">
                  <button type="button" className="botao botao-ouro" onClick={terminei}>
                    ✓ Terminei{pendente ? " · próximo vídeo" : ""}
                  </button>
                </div>
              ) : proximo ? (
                <div className="prf-player-acoes">
                  <button type="button" className="botao" onClick={() => escolhe(proximo.id)}>
                    Próximo vídeo →
                  </button>
                </div>
              ) : null}
            </div>
            {feitos === total && (
              <p className="prf-player-fim">
                <span className="prf-player-fim-icone" aria-hidden="true">
                  ✓
                </span>
                <span>
                  Todos os vídeos vistos. Próximo passo:{" "}
                  {temPdf ? (
                    <button type="button" className="prf-player-fim-link" onClick={vaiAoMaterial}>
                      ler o material ↓
                    </button>
                  ) : (
                    "a fixação."
                  )}
                </span>
              </p>
            )}
            <AjudaDrive id={bloco.id} coisa="vídeo" onAbrir={aoAbrir} />
          </div>
        )}
        <ul className="prf-bloco-lista">
          {aula.blocos.map((b) => {
            const visto = vistos.has(b.id);
            const aberto = b.id === bloco?.id;
            return (
              <li
                key={b.id}
                className={`prf-bloco${visto ? " prf-bloco-visto" : ""}${aberto ? " prf-bloco-aberto" : ""}`}
              >
                <button
                  type="button"
                  className="prf-bloco-check"
                  aria-pressed={visto}
                  aria-label={`${b.nome}: ${visto ? "visto" : "marcar como visto"}`}
                  onClick={() => alternaVisto(b.id)}
                >
                  {visto ? "✓" : ""}
                </button>
                <button
                  type="button"
                  className="prf-bloco-link"
                  aria-current={aberto ? "true" : undefined}
                  onClick={() => escolhe(b.id)}
                >
                  <span className="prf-bloco-nome">{b.nome}</span>
                  <span className="prf-bloco-abrir">{aberto ? "Aberto ↑" : "▶ Assistir"}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {temPdf && (
        <section className="prf-passo" aria-label="Material em PDF" ref={passoPdf}>
          <h3 className="prf-passo-titulo">
            <span className="prf-passo-num" aria-hidden="true">
              2
            </span>
            Leia o material
          </h3>
          <ul className="prf-bloco-lista">
            {aula.pdfs.map((p) => {
              const aberto = p.id === pdf;
              return (
                <li key={p.id} className="prf-bloco prf-bloco-pdf">
                  <span className="prf-bloco-icone" aria-hidden="true">
                    📄
                  </span>
                  <button
                    type="button"
                    className="prf-bloco-link"
                    aria-expanded={aberto}
                    onClick={() => alternaPdf(p.id)}
                  >
                    <span className="prf-bloco-nome">{p.nome}</span>
                    <span className="prf-bloco-abrir">{aberto ? "Fechar ✕" : "Ler aqui ↓"}</span>
                  </button>
                  {aberto && (
                    <div className="prf-leitor">
                      <div className="prf-leitor-quadro">
                        <span className="prf-drive-carregando" aria-hidden="true">
                          Carregando o PDF…
                        </span>
                        <iframe src={urlPlayer(p.id)} title={`PDF: ${p.nome}`} />
                      </div>
                      <AjudaDrive id={p.id} coisa="PDF" onAbrir={aoAbrir} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <section className="prf-passo prf-fixacao" aria-label="Fixação">
        <h3 className="prf-passo-titulo">
          <span className="prf-passo-num" aria-hidden="true">
            {temPdf ? 3 : 2}
          </span>
          Faça a fixação
        </h3>
        {fix.quantidade === 0 ? (
          <p className="prf-fixacao-vazia">Sem questões no banco para os assuntos desta aula.</p>
        ) : (
          <div className="prf-fixacao-cartao">
            <div className="prf-fixacao-topo">
              <p className="prf-fixacao-qtd">
                <b>{fix.quantidade}</b> questões sobre o que a aula ensinou
              </p>
              <button className="botao botao-ouro" onClick={() => onFixar(aula, fix.quantidade)}>
                Fazer a fixação ({fix.quantidade})
              </button>
            </div>
            <ul className="prf-fixacao-assuntos" aria-label="Assuntos da fixação">
              {aula.topicos.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="prf-fixacao-banco-bloco">
              <p className="prf-fixacao-banco">
                Banco desta aula: <b>{plural(fix.disponiveis, "questão", "questões")}</b>
              </p>
              <div
                className="prf-pilha"
                role="img"
                aria-label={SEGMENTOS.map((s) => plural(banco[s.id], s.um, s.varios)).join(", ")}
              >
                {SEGMENTOS.map(
                  (s) =>
                    banco[s.id] > 0 && (
                      <span key={s.id} className={`prf-pilha-${s.id}`} style={{ flexGrow: banco[s.id] }} />
                    ),
                )}
              </div>
              <ul className="prf-pilha-legenda">
                {SEGMENTOS.map((s) => (
                  <li key={s.id}>
                    <i className={`prf-pilha-${s.id}`} aria-hidden="true" />
                    {plural(banco[s.id], s.um, s.varios)}
                  </li>
                ))}
              </ul>
              <p className="prf-fixacao-ordem">Entram primeiro as que você ainda não fez; depois, as que errou.</p>
            </div>
            <details className="prf-fixacao-porque">
              <summary>Por que {fix.quantidade} questões?</summary>
              <p className="prf-fixacao-peso">
                Quantidade pelo peso: {PRF_MATERIA_MAP[aula.materia].nome} vale {fix.pontosMateria} dos {PONTOS_PROVA}{" "}
                pontos da prova, e {aula.topicos.length > 1 ? "os assuntos desta aula são" : "o assunto desta aula é"}{" "}
                {Math.max(1, Math.round(fix.fatia * 100))}% da matéria.
              </p>
            </details>
          </div>
        )}
      </section>

      {(anterior || proxima) && (
        <nav className="prf-aula-navegacao" aria-label="Outras aulas desta matéria">
          {anterior && (
            <button className="prf-vizinha" onClick={() => onTela({ grupo: grupo.id, aula: anterior.id })}>
              <span className="prf-vizinha-dir">← Aula anterior</span>
              <span className="prf-vizinha-nome">{nomeAula(anterior)}</span>
            </button>
          )}
          {proxima && (
            <button
              className="prf-vizinha prf-vizinha-proxima"
              onClick={() => onTela({ grupo: grupo.id, aula: proxima.id })}
            >
              <span className="prf-vizinha-dir">Próxima aula →</span>
              <span className="prf-vizinha-nome">{nomeAula(proxima)}</span>
            </button>
          )}
        </nav>
      )}
    </div>
  );
}
