import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import BotaoCaderno from "../caderno/BotaoCaderno";
import { abrirCaderno, usePainelCaderno } from "../caderno/painel";
import { ChipCronometro } from "../LayoutPrf";
import { gruposAtuais } from "./catalogo";
import {
  alternaPdfLido,
  alternaVisto,
  continuarAposVirada,
  continuarEstudo,
  curto,
  descartarEstudo,
  descartarVirada,
  diaLongo,
  dispensarVirada,
  duracao,
  encerrarEstudo,
  iniciarEstudo,
  pausarEstudo,
  pdfLidoHoje,
  podeContinuarVirada,
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
import GraficoDias, { type Dia } from "./GraficoDias";
import { aulaParaRetomar, pendente, progresso, videosDoGrupo, type Motivo } from "./progresso";
import { metaDoDia, useMeta } from "./meta";
import { MetaDoDia, MetaMini } from "./MetaDoDia";
import type { ResumoAula } from "./resumos";
import { corDoGrupo, iconeGrupo, nomeAula, tituloAula } from "./rotulos";
import type { ArquivoCurso, AulaCurso, GrupoCurso } from "./tipos";

/** Onde o aluno está dentro da aba (fica no AppPrf para não se perder durante a fixação). */
export interface TelaAulas {
  grupo?: string;
  aula?: string;
}

/** O que só o curso com banco de questões tem: o resumo e as questões no fim da aula. Sem isto, a aula é PDF e vídeo. */
export interface ExtrasAula {
  /** Como o texto de abertura chama as questões da aula ("5 questões"). */
  questoesTexto: string;
  fixacao: (aula: AulaCurso) => { disponiveis: number; quantidade: number };
  doNivelamento: (aula: AulaCurso) => boolean;
  resumo: (aula: AulaCurso) => ResumoAula | undefined;
  banco: (aula: AulaCurso) => { certas: number; erradas: number; nunca: number };
  onFixar: (aula: AulaCurso, quantidade: number) => void;
}

interface AulasCursoProps {
  tela: TelaAulas;
  onTela: (tela: TelaAulas) => void;
  extras?: ExtrasAula;
}

const LIMITE_AVISO = 4 * 60 * 60 * 1000;
const urlArquivo = (id: string) => `https://drive.google.com/file/d/${id}/view`;
/** Player do próprio Drive: só toca com a conta Google do dono conectada no navegador. */
const urlPlayer = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
const icone = (g: GrupoCurso) => iconeGrupo(g.id);
const corGrupo = (g: GrupoCurso) => ({ "--cor-materia": corDoGrupo(g.id) }) as CSSProperties;
/** "Aula 01" ou "Tópico 01"; vazio na aula sem número e na que já usa o número como título. */
const numeroAula = (a: AulaCurso) => (a.n && a.nome ? `${a.tipo ?? "Aula"} ${a.n}` : "");
const comNumero = (a: AulaCurso) => (numeroAula(a) ? `${numeroAula(a)}: ${a.nome}` : tituloAula(a));
const rotuloAula = (g: GrupoCurso, a: AulaCurso) => `${g.nome} · ${comNumero(a)}`;
/** Aula sem vídeo: os PDFs são o próprio estudo dela. */
const soEmPdf = (a: AulaCurso) => a.blocos.length > 0 && a.blocos.every((b) => b.pdf);
const pct =(parte: number, todo: number) => (todo > 0 ? Math.floor((parte / todo) * 100) : 0);
const largura = (p: number): CSSProperties => ({ width: `${p}%` });
const plural = (n: number, um: string, varios: string) => `${n} ${n === 1 ? um : varios}`;
const quando = (ms: number) =>
  new Date(ms).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });

const VIDEOS = { um: "vídeo", varios: "vídeos", visto: "vídeo visto", vistos: "vídeos vistos" };
const PDFS = { um: "PDF", varios: "PDFs", visto: "PDF lido", vistos: "PDFs lidos" };
const ITENS = { um: "item", varios: "itens", visto: "item concluído", vistos: "itens concluídos" };

/** Como contar o que estas aulas têm: vídeos, PDFs ou, quando tem dos dois, itens. */
function palavrasDe(aulas: AulaCurso[]) {
  const blocos = aulas.flatMap((a) => a.blocos);
  const pdfs = blocos.filter((b) => b.pdf).length;
  if (pdfs === 0) return VIDEOS;
  return pdfs === blocos.length ? PDFS : ITENS;
}

const TEXTO_RETOMAR: Record<Motivo, { olho: string; botao: string }> = {
  contando: { olho: "Cronômetro contando nesta aula", botao: "▶ Voltar para a aula" },
  pausado: { olho: "Cronômetro pausado nesta aula", botao: "▶ Voltar para a aula" },
  parou: { olho: "Continue de onde parou", botao: "▶ Continuar a aula" },
  proxima: { olho: "Próxima aula", botao: "▶ Começar a aula" },
  comeco: { olho: "Comece por aqui", botao: "▶ Começar" },
};

/** A aba Aulas de qualquer curso: a lista vem do catálogo do curso aberto. */
export default function AulasCurso({ tela, onTela, extras }: AulasCursoProps) {
  const estudo = useEstudo();
  const grupo = gruposAtuais().find((g) => g.id === tela.grupo);
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
          onTela={onTela}
          extras={extras}
        />
      ) : grupo ? (
        <ListaAulas grupo={grupo} estudo={estudo} onTela={onTela} extras={extras} />
      ) : (
        <Inicio estudo={estudo} onTela={onTela} extras={extras} />
      )}
    </div>
  );
}

interface ListaProps {
  estudo: EstadoEstudo;
  onTela: (tela: TelaAulas) => void;
  extras?: ExtrasAula;
}

/* ---------- Início da aba: retomar, cronômetro e matérias ---------- */

function Inicio({ estudo, onTela, extras }: ListaProps) {
  const tot = useMemo(() => totaisEstudo(estudo, Date.now()), [estudo]);
  const vistos = useMemo(() => new Set(estudo.vistos), [estudo.vistos]);
  const grupos = gruposAtuais();
  const noDrive = grupos.flatMap((g) => g.aulas).filter((a) => a.blocos.length > 0);
  const concluidas = noDrive.filter((a) => progresso(a, vistos).completa).length;
  const palavras = palavrasDe(noDrive);
  let videos = 0;
  let vistosTotal = 0;
  for (const g of grupos) {
    const v = videosDoGrupo(g, vistos);
    videos += v.total;
    vistosTotal += v.feitos;
  }

  return (
    <div className="prf-aulas-tela">
      <div className="prf-aulas-topo">
        <Retomar estudo={estudo} vistos={vistos} tot={tot} onTela={onTela} extras={extras} />
        <PainelCronometro estudo={estudo} />
      </div>

      <div className="prf-aulas-cabeca">
        <h2 className="secao-titulo">Aulas do curso</h2>
        <p className="prf-aulas-resumo">
          <b>{concluidas}</b> de {noDrive.length} aulas concluídas · <b>{vistosTotal}</b> de{" "}
          {plural(videos, palavras.visto, palavras.vistos)}
        </p>
        <p className="prf-aulas-intro">
          Em cada aula, todo dia: primeiro o PDF, depois os vídeos
          {extras ? `, o resumo rápido e ${extras.questoesTexto}` : ""}. Os vídeos e PDFs abrem do Google Drive.
        </p>
      </div>

      <div className="prf-grupos">
        {grupos.map((g) => (
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

function Retomar({ estudo, vistos, tot, onTela, extras }: RetomarProps) {
  const r = aulaParaRetomar(estudo, vistos);
  if (!r) {
    return (
      <section className="prf-retomar prf-retomar-fim" aria-label="Curso concluído">
        <span className="prf-retomar-olho">Curso concluído</span>
        <h3 className="prf-retomar-titulo">
          {extras ? "Você viu todos os vídeos do curso 🏆" : "Você concluiu todas as aulas do curso 🏆"}
        </h3>
        <p className="prf-retomar-meta">
          {extras ? "Refaça as fixações e o treino para não esquecer." : "Releia os PDFs para não esquecer."}
        </p>
      </section>
    );
  }
  const { feitos, total, completa } = progresso(r.aula, vistos);
  const tempo = tot.porAula.get(r.aula.id) ?? 0;
  const texto = TEXTO_RETOMAR[r.motivo];
  const pdfs = r.aula.pdfs.length;
  const lido = pdfLidoHoje(estudo, r.aula.id, Date.now());
  const fixacao = extras?.fixacao(r.aula).quantidade ?? 0;
  // A ordem de todo dia: PDF, vídeos, resumo e questões (o Nivelamento não tem questões).
  const passos = [
    ...(pdfs > 0
      ? [{ texto: pdfs === 1 ? "Ler o PDF da aula" : `Ler os ${pdfs} PDFs da aula`, info: lido ? "hoje" : "todo dia", feito: lido }]
      : []),
    {
      texto: soEmPdf(r.aula) ? `Ler ${plural(total, "PDF", "PDFs")}` : `Assistir ${plural(total, "vídeo", "vídeos")}`,
      info: `${feitos}/${total}`,
      feito: completa,
    },
    ...(fixacao > 0
      ? [{ texto: `Resumo rápido e ${plural(fixacao, "questão", "questões")}`, info: "", feito: false }]
      : []),
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
        {numeroAula(r.aula) && ` · ${numeroAula(r.aula)}`}
      </span>
      <h3 className="prf-retomar-titulo">{tituloAula(r.aula)}</h3>
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

/** À meia-noite o dia anterior foi encerrado com uma sessão aberta: avisa o que ficou guardado e em que dia. */
function AvisoVirada({ estudo }: { estudo: EstadoEstudo }) {
  const v = estudo.virada;
  if (!v) return null;
  // "no sábado", "no domingo", mas "na segunda-feira"
  const semana = new Date(v.dia).getDay();
  const dia = `${semana === 0 || semana === 6 ? "no" : "na"} ${diaLongo(v.dia).toLowerCase()}`;
  return (
    <div className="prf-virada" role="status">
      <p className="prf-virada-texto">
        <span aria-hidden="true">🌙 </span>
        {v.contando ? (
          <>
            Virou o dia. O cronômetro parou à meia-noite e guardou <b>{curto(v.ms)}</b> {dia}.
          </>
        ) : (
          <>
            Virou o dia. O cronômetro estava pausado: guardou <b>{curto(v.ms)}</b> {dia}, e o tempo de hoje conta à
            parte.
          </>
        )}
      </p>
      <div className="prf-virada-botoes">
        {podeContinuarVirada(estudo, Date.now()) && (
          <button type="button" className="botao botao-ouro" onClick={continuarAposVirada}>
            ▶ Continuar contando hoje
          </button>
        )}
        {v.contando && (
          <button
            type="button"
            className="botao"
            onClick={() => {
              if (window.confirm("Descartar esse tempo? Use se o cronômetro ficou ligado sem você estudar.")) {
                descartarVirada();
              }
            }}
          >
            Descartar esse tempo
          </button>
        )}
        <button type="button" className="botao" onClick={dispensarVirada}>
          Ok
        </button>
      </div>
    </div>
  );
}

function PainelCronometro({ estudo }: { estudo: EstadoEstudo }) {
  const a = estudo.ativo;
  const agora = useAgora(a !== null && a.desde !== null);
  const t = totaisEstudo(estudo, agora);
  const dias = porDia(estudo, agora);
  const meta = useMeta();
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
      <AvisoVirada estudo={estudo} />
      {ms > LIMITE_AVISO && (
        <p className="prf-crono-aviso">
          ⚠ Ligado há mais de 4 horas. Se esqueceu ligado, descarte; se estudou mesmo, encerre e salve.
        </p>
      )}
      <MetaDoDia estudo={estudo} meta={meta} agora={agora} />
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
      <GraficoDias
        dias={dias}
        titulo="Últimos 7 dias"
        vazio={t.total > 0 ? "Nenhum estudo nos últimos 7 dias." : "O tempo de estudo de cada dia aparece aqui."}
        hoje={dias[dias.length - 1].dia}
        metas={dias.map((d) => metaDoDia(meta, d.dia))}
      />
      {t.total > 0 && <Historico estudo={estudo} dias={dias} />}
    </section>
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
  grupo: GrupoCurso;
  vistos: Set<string>;
  tempo: number;
  onAbrir: () => void;
}

function CartaoGrupo({ grupo, vistos, tempo, onAbrir }: CartaoGrupoProps) {
  const { feitos, total } = videosDoGrupo(grupo, vistos);
  const { um, varios } = palavrasDe(grupo.aulas);
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
          {plural(grupo.aulas.length, "aula", "aulas")} · {feitos}/{plural(total, um, varios)}{tempo > 0 ? ` · ${duracao(tempo)}` : ""}
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

function ListaAulas({ grupo, estudo, onTela, extras }: ListaProps & { grupo: GrupoCurso }) {
  const tot = useMemo(() => totaisEstudo(estudo, Date.now()), [estudo]);
  const vistos = useMemo(() => new Set(estudo.vistos), [estudo.vistos]);
  const { feitos, total } = videosDoGrupo(grupo, vistos);
  const tempo = tot.porGrupo.get(grupo.id) ?? 0;
  const proxima = pendente(grupo, vistos);
  const p = pct(feitos, total);
  const palavras = palavrasDe(grupo.aulas);

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
            {plural(grupo.aulas.length, "aula", "aulas")}
            {tempo > 0 ? ` · ${duracao(tempo)} de estudo` : ""}
          </p>
          <div className="prf-materia-progresso">
            <span className="prf-medidor" aria-hidden="true">
              <span style={largura(p)} />
            </span>
            <span>
              {feitos} de {plural(total, palavras.visto, palavras.vistos)} · {p}%
            </span>
          </div>
        </div>
        {proxima ? (
          <button
            className="botao botao-ouro prf-materia-botao"
            onClick={() => onTela({ grupo: grupo.id, aula: proxima.id })}
          >
            ▶ {feitos > 0 ? "Continuar" : "Começar"}:{" "}
            {proxima.n ? `${proxima.tipo ?? "Aula"} ${proxima.n}` : tituloAula(proxima)}
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
          const quantidade = extras?.fixacao(a).quantidade ?? 0;
          const tempoAula = tot.porAula.get(a.id) ?? 0;
          const { um, varios } = palavrasDe([a]);
          const meta = vazia
            ? "Ainda não está no Drive"
            : [
                `${pr.feitos}/${plural(pr.total, um, varios)}`,
                quantidade > 0 && plural(quantidade, "questão", "questões"),
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
                aria-label={`${comNumero(a)}. ${meta}`}
              >
                <span
                  className="prf-aula-no"
                  aria-hidden="true"
                  style={{ "--prog": `${pct(pr.feitos, pr.total)}%` } as CSSProperties}
                >
                  <span>{pr.completa ? "✓" : a.n || "•"}</span>
                </span>
                <span className="prf-aula-texto">
                  <span className="prf-aula-nome">{tituloAula(a)}</span>
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
  const meta = useMeta();
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
        <MetaMini estudo={estudo} meta={meta} agora={agora} />
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
      <MetaMini estudo={estudo} meta={meta} agora={agora} />
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

interface LeitorPdfProps {
  id: string;
  nome: string;
  lido: boolean;
  /** Sem isto o leitor só mostra o arquivo (slides, transcrição, outra versão do PDF). */
  onLi?: () => void;
  textoLi?: string;
  textoLido?: string;
  onFechar: () => void;
  onAbrir: () => void;
  onAnotar: () => void;
}

/**
 * O PDF numa tela cheia dentro do app, por cima da aula. O arquivo continua vindo do Drive (o app é público e o
 * material é pago, então o PDF não fica no app); o botão do Drive que abre o arquivo fora daqui fica tampado.
 */
function LeitorPdf({
  id,
  nome,
  lido,
  onLi,
  textoLi = "Li o PDF hoje",
  textoLido = "Lido hoje",
  onFechar,
  onAbrir,
  onAnotar,
}: LeitorPdfProps) {
  const voltar = useRef<HTMLButtonElement>(null);
  const caderno = usePainelCaderno();

  // Esc fecha; a página da aula não rola por trás; ao fechar, o foco volta para a linha do PDF.
  useEffect(() => {
    const antes = document.activeElement as HTMLElement | null;
    const rolagem = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    voltar.current?.focus({ preventScroll: true });
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
    };
    window.addEventListener("keydown", tecla);
    return () => {
      window.removeEventListener("keydown", tecla);
      document.body.style.overflow = rolagem;
      antes?.focus({ preventScroll: true });
    };
  }, [onFechar]);

  return createPortal(
    <div className="prf-leitor" role="dialog" aria-modal={!caderno.aberto} aria-label={`PDF: ${nome}`}>
      <div className="prf-leitor-barra">
        <button type="button" className="prf-voltar" ref={voltar} onClick={onFechar}>
          ← Voltar à aula
        </button>
        <span className="prf-leitor-nome">{nome}</span>
        <ChipCronometro />
        <button type="button" className="botao" onClick={onAnotar}>
          📝 Anotar
        </button>
        {lido ? (
          <span className="prf-leitor-lido">✓ {textoLido}</span>
        ) : (
          onLi && (
            <button type="button" className="botao botao-ouro" onClick={onLi}>
              ✓ {textoLi}
            </button>
          )
        )}
      </div>
      <div className="prf-leitor-quadro">
        <span className="prf-drive-carregando" aria-hidden="true">
          Carregando o PDF…
        </span>
        <iframe src={urlPlayer(id)} title={`PDF: ${nome}`} allow="fullscreen" allowFullScreen />
        <span className="prf-leitor-tampa" aria-hidden="true" />
      </div>
      <AjudaDrive id={id} coisa="PDF" onAbrir={onAbrir} />
    </div>,
    document.body,
  );
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

/** O que a aula ensinou, em poucas linhas: o que cada coisa faz e como reconhecer na prova. */
function ResumoRapido({ resumo }: { resumo: ResumoAula }) {
  return (
    <div className="prf-resumo-cartao">
      <p className="prf-resumo-ideia">{resumo.ideia}</p>
      <ul className="prf-resumo-itens">
        {resumo.itens.map((it) => (
          <li key={it.termo} className="prf-resumo-item">
            <b className="prf-resumo-termo">{it.termo}</b>
            <span className="prf-resumo-faz">{it.faz}</span>
            {it.pista && (
              <span className="prf-resumo-pista">
                <span className="prf-resumo-rotulo">Como identificar:</span> {it.pista}
              </span>
            )}
          </li>
        ))}
      </ul>
      {resumo.cuidado && (
        <p className="prf-resumo-cuidado">
          <span className="prf-resumo-rotulo">Cuidado:</span> {resumo.cuidado}
        </p>
      )}
    </div>
  );
}

/** Arquivos de apoio do vídeo ou do PDF: abrem no leitor, sem marcar nada. */
function Anexos({ anexos, onAbrir }: { anexos?: ArquivoCurso[]; onAbrir: (a: ArquivoCurso) => void }) {
  if (!anexos?.length) return null;
  return (
    <ul className="prf-anexos" aria-label="Arquivos de apoio">
      {anexos.map((a) => (
        <li key={a.id}>
          <button type="button" className="prf-anexo" aria-haspopup="dialog" onClick={() => onAbrir(a)}>
            <span aria-hidden="true">📄</span> {a.nome}
          </button>
        </li>
      ))}
    </ul>
  );
}

interface TelaAulaProps extends ListaProps {
  grupo: GrupoCurso;
  aula: AulaCurso;
}

/**
 * O que está aberto no leitor. "aula": o PDF de todo dia, antes dos vídeos; "bloco": o PDF que é o próprio estudo
 * da aula; "anexo": arquivo de apoio.
 */
interface Leitura {
  arquivo: ArquivoCurso;
  tipo: "aula" | "bloco" | "anexo";
}

const SEM_FIXACAO = { disponiveis: 0, quantidade: 0 };
const SEM_BANCO = { certas: 0, erradas: 0, nunca: 0 };

function TelaAula({ grupo, aula, estudo, onTela, extras }: TelaAulaProps) {
  const vistos = useMemo(() => new Set(estudo.vistos), [estudo.vistos]);
  const { feitos, total } = progresso(aula, vistos);
  // O player abre no primeiro vídeo que falta ver.
  const [atual, setAtual] = useState(() => (aula.blocos.find((b) => !vistos.has(b.id)) ?? aula.blocos[0])?.id);
  const player = useRef<HTMLDivElement>(null);
  const quadro = useRef<HTMLIFrameElement>(null);
  const tocou = useRef(false);
  const [leitura, setLeitura] = useState<Leitura | null>(null);
  const fechaLeitor = useCallback(() => setLeitura(null), []);
  const caderno = usePainelCaderno();
  const naFolhaDaAula = caderno.aberto && caderno.tela.tipo === "folha" && caderno.tela.aula === aula.id;
  const anotar = () => abrirCaderno({ grupo: grupo.id, aula: aula.id, nomeAula: nomeAula(aula) });
  const passoVideos = useRef<HTMLElement>(null);
  const passoResumo = useRef<HTMLElement>(null);
  const passoQuestoes = useRef<HTMLElement>(null);
  const rolarVideos = useRef(false);
  const fix = extras?.fixacao(aula) ?? SEM_FIXACAO;
  const niv = extras?.doNivelamento(aula) ?? false;
  const resumo = niv ? undefined : extras?.resumo(aula);
  // Todo dia a aula começa pelo PDF; os vídeos ficam guardados até a leitura (dá para pular).
  const lido = pdfLidoHoje(estudo, aula.id, Date.now());
  const [liberado, setLiberado] = useState(false);
  const banco = useMemo(() => extras?.banco(aula) ?? SEM_BANCO, [aula, extras]);
  // Acerto pela última resposta de cada questão da aula (o mesmo que a pilha mostra).
  const feitas = banco.certas + banco.erradas;
  // Anterior e próxima pulam as aulas que ainda não estão no Drive.
  const navegaveis = grupo.aulas.filter((a) => a.blocos.length > 0);
  const i = navegaveis.indexOf(aula);
  const anterior = i > 0 ? navegaveis[i - 1] : undefined;
  const proxima = i >= 0 ? navegaveis[i + 1] : undefined;
  const alvo: AlvoEstudo = { aula: aula.id, grupo: grupo.id, rotulo: rotuloAula(grupo, aula) };
  const ativo = estudo.ativo;
  const temPdf = aula.pdfs.length > 0;
  const soPdf = soEmPdf(aula);
  const palavras = palavrasDe([aula]);
  const travado = temPdf && !lido && !liberado;
  // Os passos se numeram conforme o que a aula tem: PDF, vídeos, resumo, questões.
  let n = 0;
  const nPdf = temPdf ? ++n : 0;
  const nVideos = ++n;
  const nResumo = resumo ? ++n : 0;
  const nQuestoes = niv || !extras ? 0 : ++n;
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

  /** Abre o PDF numa tela cheia dentro do app; abrir também liga o cronômetro. */
  function abrePdf(arquivo: ArquivoCurso, tipo: Leitura["tipo"]) {
    setLeitura({ arquivo, tipo });
    aoAbrir();
  }

  /** "Li o PDF hoje": fecha o leitor, libera os vídeos e desce até eles. */
  function liOPdf() {
    setLeitura(null);
    rolarVideos.current = true;
    alternaPdfLido(aula.id);
  }

  /** "Terminei de ler": nas aulas só em PDF, ler conta como ver um vídeo. */
  function termineiPdf(id: string) {
    setLeitura(null);
    if (!vistos.has(id)) alternaVisto(id);
  }

  // Desce até os vídeos depois que eles já estão na tela.
  useEffect(() => {
    if (!rolarVideos.current || !lido) return;
    rolarVideos.current = false;
    rolaPara(passoVideos.current);
  }, [lido]);

  /** Do aviso de fim dos vídeos: desce até o resumo (ou direto às questões). */
  function vaiAoFim() {
    rolaPara(passoResumo.current ?? passoQuestoes.current);
  }

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
          {numeroAula(aula) && ` · ${numeroAula(aula)}`}
        </span>
        <h2 className="prf-aula-titulo">{tituloAula(aula)}</h2>
        <div className="prf-aula-progresso">
          <span className="prf-medidor" aria-hidden="true">
            <span style={largura(pct(feitos, total))} />
          </span>
          <span>
            {feitos} de {plural(total, palavras.visto, palavras.vistos)}
          </span>
        </div>
        <CronoAula estudo={estudo} alvo={alvo} />
        <AvisoVirada estudo={estudo} />
      </header>

      {temPdf && (
        <section className={`prf-passo${lido ? " prf-passo-feito" : ""}`} aria-label="PDF da aula">
          <h3 className="prf-passo-titulo">
            <span className="prf-passo-num" aria-hidden="true">
              {lido ? "✓" : nPdf}
            </span>
            {aula.pdfs.length === 1 ? "Leia o PDF da aula" : "Leia os PDFs da aula"}
            {lido && <span className="prf-passo-extra">lido hoje</span>}
          </h3>
          <p className="prf-passo-dica">
            Comece sempre por aqui, todo dia, mesmo que já tenha visto esta aula: o PDF prepara o cérebro para o que
            vem, e os vídeos viram revisão do que você leu.
          </p>
          <ul className="prf-bloco-lista">
            {aula.pdfs.map((p) => (
              <li key={p.id} className="prf-bloco prf-bloco-pdf">
                <span className="prf-bloco-icone" aria-hidden="true">
                  📄
                </span>
                <button
                  type="button"
                  className="prf-bloco-link"
                  aria-haspopup="dialog"
                  onClick={() => abrePdf(p, "aula")}
                >
                  <span className="prf-bloco-nome">{p.nome}</span>
                  <span className="prf-bloco-abrir">Ler aqui</span>
                </button>
              </li>
            ))}
          </ul>
          {lido ? (
            <p className="prf-pdf-lido">
              <span className="prf-pdf-lido-icone" aria-hidden="true">
                ✓
              </span>
              <span className="prf-pdf-lido-texto">PDF lido hoje. Agora, os vídeos para revisar.</span>
              <button type="button" className="prf-passo-pular" onClick={() => alternaPdfLido(aula.id)}>
                Desmarcar
              </button>
            </p>
          ) : (
            <div className="prf-pdf-marcar">
              <button type="button" className="botao botao-ouro" onClick={liOPdf}>
                ✓ Li o PDF hoje
              </button>
            </div>
          )}
        </section>
      )}

      {soPdf ? (
        <section className="prf-passo" aria-label="PDFs da aula">
          <h3 className="prf-passo-titulo">
            <span className="prf-passo-num" aria-hidden="true">
              {feitos === total ? "✓" : nVideos}
            </span>
            {total === 1 ? "Leia o PDF" : "Leia os PDFs"}
            <span className="prf-passo-extra">
              {feitos}/{total} {total === 1 ? "lido" : "lidos"}
            </span>
          </h3>
          <p className="prf-passo-dica">O PDF abre aqui mesmo. Ao terminar, toque em “Terminei de ler”.</p>
          <ul className="prf-bloco-lista">
            {aula.blocos.map((b) => {
              const visto = vistos.has(b.id);
              return (
                <li
                  key={b.id}
                  className={`prf-bloco prf-bloco-pdf${visto ? " prf-bloco-visto" : ""}${
                    b.anexos?.length ? " prf-bloco-com-anexos" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="prf-bloco-check"
                    aria-pressed={visto}
                    aria-label={`${b.nome}: ${visto ? "lido" : "marcar como lido"}`}
                    onClick={() => alternaVisto(b.id)}
                  >
                    {visto ? "✓" : ""}
                  </button>
                  <button
                    type="button"
                    className="prf-bloco-link"
                    aria-haspopup="dialog"
                    onClick={() => abrePdf(b, "bloco")}
                  >
                    <span className="prf-bloco-nome">{b.nome}</span>
                    <span className="prf-bloco-abrir">Ler aqui</span>
                  </button>
                  <Anexos anexos={b.anexos} onAbrir={(a) => abrePdf(a, "anexo")} />
                </li>
              );
            })}
          </ul>
          {feitos === total && (
            <p className="prf-player-fim">
              <span className="prf-player-fim-icone" aria-hidden="true">
                ✓
              </span>
              <span>
                {total === 1 ? "PDF lido." : "Todos os PDFs lidos."}{" "}
                {proxima ? (
                  <>
                    Próximo passo:{" "}
                    <button
                      type="button"
                      className="prf-player-fim-link"
                      onClick={() => onTela({ grupo: grupo.id, aula: proxima.id })}
                    >
                      a próxima aula →
                    </button>
                  </>
                ) : (
                  "Matéria concluída."
                )}
              </span>
            </p>
          )}
        </section>
      ) : (
        <section className="prf-passo" aria-label="Vídeos" ref={passoVideos}>
          <h3 className="prf-passo-titulo">
            <span className="prf-passo-num" aria-hidden="true">
              {nVideos}
            </span>
            Assista aos vídeos
            <span className="prf-passo-extra">
              {feitos}/{total} vistos
            </span>
          </h3>
          {travado ? (
            <div className="prf-passo-trava">
              <p className="prf-passo-trava-texto">
                Primeiro o PDF (passo {nPdf}). Com a leitura feita, os vídeos viram revisão do que você leu.
              </p>
              <button type="button" className="prf-passo-pular" onClick={() => setLiberado(true)}>
                Ver os vídeos mesmo assim
              </button>
            </div>
          ) : (
            <>
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
                  <Anexos anexos={bloco.anexos} onAbrir={(a) => abrePdf(a, "anexo")} />
                  {feitos === total && (
                    <p className="prf-player-fim">
                      <span className="prf-player-fim-icone" aria-hidden="true">
                        ✓
                      </span>
                      <span>
                        Todos os vídeos vistos.{" "}
                        {niv || !extras ? (
                          proxima ? (
                            <>
                              Próximo passo:{" "}
                              <button
                                type="button"
                                className="prf-player-fim-link"
                                onClick={() => onTela({ grupo: grupo.id, aula: proxima.id })}
                              >
                                a próxima aula →
                              </button>
                            </>
                          ) : niv ? (
                            "Nivelamento concluído."
                          ) : (
                            "Matéria concluída."
                          )
                        ) : resumo || fix.quantidade > 0 ? (
                          <>
                            Próximo passo:{" "}
                            <button type="button" className="prf-player-fim-link" onClick={vaiAoFim}>
                              {!resumo ? "as questões ↓" : fix.quantidade > 0 ? "o resumo e as questões ↓" : "o resumo ↓"}
                            </button>
                          </>
                        ) : null}
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
            </>
          )}
        </section>
      )}

      {resumo && (
        <section className="prf-passo prf-resumo" aria-label="Resumo rápido" ref={passoResumo}>
          <h3 className="prf-passo-titulo">
            <span className="prf-passo-num" aria-hidden="true">
              {nResumo}
            </span>
            Resumo rápido
          </h3>
          <p className="prf-passo-dica">Antes das questões, relembre em um minuto o que a aula ensinou.</p>
          <ResumoRapido resumo={resumo} />
        </section>
      )}

      {niv ? (
        <p className="prf-nivel-nota">
          <span className="prf-nivel-nota-icone" aria-hidden="true">
            ℹ
          </span>
          <span>
            O Nivelamento só mostra o que vem pela frente nas matérias: aqui não tem questões. Elas ficam no fim de
            cada aula das matérias, só sobre o assunto daquela aula.
          </span>
        </p>
      ) : extras ? (
        <section className="prf-passo prf-fixacao" aria-label="Questões" ref={passoQuestoes}>
          <h3 className="prf-passo-titulo">
            <span className="prf-passo-num" aria-hidden="true">
              {nQuestoes}
            </span>
            Faça as questões
          </h3>
          {fix.quantidade === 0 ? (
            <p className="prf-fixacao-vazia">Sem questões no banco para os assuntos desta aula.</p>
          ) : (
            <div className="prf-fixacao-cartao">
              <div className="prf-fixacao-topo">
                <p className="prf-fixacao-qtd">
                  <b>{fix.quantidade}</b> {fix.quantidade === 1 ? "questão sorteada" : "questões sorteadas"} sobre
                  esta aula
                </p>
                <button className="botao botao-ouro" onClick={() => extras.onFixar(aula, fix.quantidade)}>
                  {fix.quantidade === 1 ? "Fazer a questão" : `Fazer as ${fix.quantidade} questões`}
                </button>
              </div>
              <ul className="prf-fixacao-assuntos" aria-label="Assuntos das questões">
                {(aula.topicos ?? []).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="prf-fixacao-banco-bloco">
                <p className="prf-fixacao-banco">
                  Banco desta aula: <b>{plural(fix.disponiveis, "questão", "questões")}</b>
                  {feitas > 0 && (
                    <>
                      {" "}
                      · seu acerto: <b>{Math.round((banco.certas / feitas) * 100)}%</b>
                    </>
                  )}
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
                <p className="prf-fixacao-ordem">
                  A cada vez, {plural(fix.quantidade, "questão sorteada", "questões sorteadas")} só sobre{" "}
                  {(aula.topicos?.length ?? 0) > 1 ? "os assuntos" : "o assunto"} desta aula: primeiro as que você ainda não
                  fez; depois, as que errou.
                </p>
              </div>
            </div>
          )}
        </section>
      ) : null}

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

      {!naFolhaDaAula && <BotaoCaderno onAbrir={anotar} />}

      {leitura && (
        <LeitorPdf
          id={leitura.arquivo.id}
          nome={leitura.arquivo.nome}
          lido={
            leitura.tipo === "aula" ? lido : leitura.tipo === "bloco" ? vistos.has(leitura.arquivo.id) : false
          }
          onLi={
            leitura.tipo === "aula"
              ? liOPdf
              : leitura.tipo === "bloco"
                ? () => termineiPdf(leitura.arquivo.id)
                : undefined
          }
          textoLi={leitura.tipo === "bloco" ? "Terminei de ler" : undefined}
          textoLido={leitura.tipo === "bloco" ? "Lido" : undefined}
          onFechar={fechaLeitor}
          onAbrir={aoAbrir}
          onAnotar={anotar}
        />
      )}
    </div>
  );
}
