import { useEffect, useMemo, type CSSProperties } from "react";
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
  relogio,
  tempoAtivo,
  totaisEstudo,
  useAgora,
  useEstudo,
  type EstadoEstudo,
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
const urlArquivo = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const urlPasta = (id: string) => `https://drive.google.com/drive/folders/${id}`;
const corGrupo = (g: GrupoAulasDrive) =>
  ({ "--cor-materia": PRF_MATERIA_MAP[g.id as MateriaPrfId]?.cor ?? "var(--ouro)" }) as CSSProperties;
const rotuloAula = (g: GrupoAulasDrive, a: AulaDrive) => `${g.nome} · ${a.n ? `Aula ${a.n}: ` : ""}${a.nome}`;
const quando = (ms: number) =>
  new Date(ms).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });

export default function AulasPrf({ tela, onTela, tentativas, onFixar }: AulasPrfProps) {
  const estudo = useEstudo();
  const grupo = AULAS_DRIVE.find((g) => g.id === tela.grupo);
  const aula = grupo?.aulas.find((a) => a.id === tela.aula);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [tela.grupo, tela.aula]);

  return (
    <>
      <PainelCronometro estudo={estudo} />
      {grupo && aula ? (
        <TelaAula grupo={grupo} aula={aula} estudo={estudo} tentativas={tentativas} onTela={onTela} onFixar={onFixar} />
      ) : grupo ? (
        <ListaAulas grupo={grupo} estudo={estudo} onTela={onTela} />
      ) : (
        <ListaGrupos estudo={estudo} onTela={onTela} />
      )}
    </>
  );
}

function PainelCronometro({ estudo }: { estudo: EstadoEstudo }) {
  const a = estudo.ativo;
  const agora = useAgora(a !== null && a.desde !== null);
  const t = totaisEstudo(estudo, agora);
  const ms = a ? tempoAtivo(a, agora) : 0;
  const pausado = a !== null && a.desde === null;

  return (
    <section className="prf-crono" aria-label="Cronômetro de estudo">
      <div className="prf-crono-topo">
        <div className="prf-crono-mostrador">
          <div className="prf-crono-rotulo">
            {a ? `${pausado ? "Pausado" : "Contando"} · ${a.rotulo}` : "Cronômetro de estudo"}
          </div>
          <div className={`prf-crono-tempo${a && !pausado ? "" : " prf-crono-parado"}`} role="timer">
            {relogio(ms)}
          </div>
        </div>
        <div className="prf-crono-botoes">
          {!a && (
            <button className="botao botao-ouro" onClick={() => iniciarEstudo({ rotulo: "Estudo livre" })}>
              ▶ Começar estudo livre
            </button>
          )}
          {a && !pausado && (
            <button className="botao" onClick={pausarEstudo}>
              ⏸ Pausar
            </button>
          )}
          {pausado && (
            <button className="botao botao-ouro" onClick={continuarEstudo}>
              ▶ Continuar
            </button>
          )}
          {a && (
            <button className="botao" onClick={encerrarEstudo}>
              ■ Encerrar e salvar
            </button>
          )}
          {a && (
            <button
              className="botao prf-crono-descartar"
              onClick={() => {
                if (window.confirm("Descartar este tempo sem salvar?")) descartarEstudo();
              }}
            >
              Descartar
            </button>
          )}
        </div>
      </div>
      {ms > LIMITE_AVISO && (
        <p className="prf-crono-aviso">
          Ligado há mais de 4 horas. Se esqueceu ligado, descarte; se estudou mesmo, encerre e salve.
        </p>
      )}
      <div className="prf-crono-totais">
        <span>
          Hoje <b>{duracao(t.hoje)}</b>
        </span>
        <span>
          7 dias <b>{duracao(t.semana)}</b>
        </span>
        <span>
          Total <b>{duracao(t.total)}</b>
        </span>
      </div>
      {estudo.sessoes.length > 0 && (
        <details className="prf-crono-historico">
          <summary>Últimas sessões</summary>
          <ul>
            {estudo.sessoes
              .slice(-8)
              .reverse()
              .map((s) => (
                <li key={`${s.inicio}-${s.fim}`}>
                  <span>{quando(s.inicio)}</span>
                  <span className="prf-crono-hist-rotulo">{s.rotulo}</span>
                  <b>{duracao(s.ms)}</b>
                </li>
              ))}
          </ul>
        </details>
      )}
    </section>
  );
}

interface ListaProps {
  estudo: EstadoEstudo;
  onTela: (tela: TelaAulas) => void;
}

function ListaGrupos({ estudo, onTela }: ListaProps) {
  const tot = useMemo(() => totaisEstudo(estudo, Date.now()), [estudo]);
  const vistos = useMemo(() => new Set(estudo.vistos), [estudo.vistos]);

  return (
    <>
      <h2 className="secao-titulo">Aulas do curso</h2>
      <p className="conteudo-intro">
        Vídeos e PDFs abrem no Google Drive, na sua conta. Marque cada bloco que assistir. No fim de cada aula há
        questões de fixação.
      </p>
      <div className="materias-grid">
        {AULAS_DRIVE.map((g) => {
          const blocos = g.aulas.flatMap((a) => a.blocos);
          const feitos = blocos.filter((b) => vistos.has(b.id)).length;
          const tempo = tot.porGrupo.get(g.id) ?? 0;
          return (
            <button key={g.id} className="materia-card" style={corGrupo(g)} onClick={() => onTela({ grupo: g.id })}>
              <div className="materia-nome">{g.nome}</div>
              <div className="materia-meta">
                <span>
                  {g.aulas.length} aulas · {feitos}/{blocos.length} blocos
                </span>
                <span>{tempo > 0 ? duracao(tempo) : ""}</span>
              </div>
              <div className="materia-barra">
                <div className="materia-barra-fill" style={{ width: `${(feitos / blocos.length) * 100}%` }} />
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

function ListaAulas({ grupo, estudo, onTela }: ListaProps & { grupo: GrupoAulasDrive }) {
  const tot = useMemo(() => totaisEstudo(estudo, Date.now()), [estudo]);
  const vistos = useMemo(() => new Set(estudo.vistos), [estudo.vistos]);

  return (
    <>
      <div className="prf-aulas-nav">
        <button className="botao" onClick={() => onTela({})}>
          ← Todas as matérias
        </button>
        <a className="botao prf-botao-link" href={urlPasta(grupo.pasta)} target="_blank" rel="noopener noreferrer">
          Pasta no Drive ↗
        </a>
      </div>
      <h2 className="secao-titulo">{grupo.nome}</h2>
      <ol className="prf-aulas-lista" style={corGrupo(grupo)}>
        {grupo.aulas.map((a) => {
          const vazia = a.blocos.length === 0;
          const feitos = a.blocos.filter((b) => vistos.has(b.id)).length;
          const completa = !vazia && feitos === a.blocos.length;
          const { quantidade } = pesoFixacao(a.materia, a.topicos);
          const tempo = tot.porAula.get(a.id) ?? 0;
          const meta = vazia
            ? "Ainda não publicada no Drive"
            : [
                `${feitos}/${a.blocos.length} blocos`,
                quantidade > 0 && `${quantidade} questões de fixação`,
                tempo > 0 && duracao(tempo),
              ]
                .filter(Boolean)
                .join(" · ");
          return (
            <li key={a.id}>
              <button
                className={`prf-aula-item${completa ? " prf-aula-completa" : ""}`}
                onClick={() => onTela({ grupo: grupo.id, aula: a.id })}
                disabled={vazia}
              >
                <span className="prf-aula-num" aria-hidden="true">
                  {completa ? "✓" : a.n || "•"}
                </span>
                <span className="prf-aula-texto">
                  <span className="prf-aula-nome">{a.n ? `Aula ${a.n} · ${a.nome}` : a.nome}</span>
                  <span className="prf-aula-meta">{meta}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

interface TelaAulaProps extends ListaProps {
  grupo: GrupoAulasDrive;
  aula: AulaDrive;
  tentativas: TentativaPrf[];
  onFixar: (aula: AulaDrive, quantidade: number) => void;
}

function TelaAula({ grupo, aula, estudo, tentativas, onTela, onFixar }: TelaAulaProps) {
  const vistos = new Set(estudo.vistos);
  const feitos = aula.blocos.filter((b) => vistos.has(b.id)).length;
  const fix = pesoFixacao(aula.materia, aula.topicos);
  const nunca = useMemo(() => {
    const ultima = ultimaRespostaPrf(tentativas);
    return questoesDaAula(aula.materia, aula.topicos).filter((q) => !ultima.has(q.id)).length;
  }, [aula, tentativas]);
  // Anterior e próxima pulam as aulas que ainda não estão no Drive.
  const navegaveis = grupo.aulas.filter((a) => a.blocos.length > 0);
  const i = navegaveis.indexOf(aula);
  const anterior = navegaveis[i - 1];
  const proxima = navegaveis[i + 1];
  const alvo = { aula: aula.id, grupo: grupo.id, rotulo: rotuloAula(grupo, aula) };
  const ativo = estudo.ativo;
  const nestaAula = ativo?.aula === aula.id;

  /** Abrir um vídeo ou PDF liga o cronômetro desta aula quando ele está parado. */
  function aoAbrir() {
    if (!ativo) iniciarEstudo(alvo);
    else if (nestaAula && ativo.desde === null) continuarEstudo();
  }

  return (
    <div style={corGrupo(grupo)}>
      <div className="prf-aulas-nav">
        <button className="botao" onClick={() => onTela({ grupo: grupo.id })}>
          ← Aulas de {grupo.nome}
        </button>
      </div>
      <div className="prf-aula-cabeca">
        <span className="prf-aula-sobre">
          {grupo.nome}
          {aula.n && ` · Aula ${aula.n}`}
        </span>
        <h2 className="prf-aula-titulo">{aula.nome}</h2>
        {nestaAula ? (
          <span className="prf-aula-contando">
            ⏱ {ativo.desde === null ? "Cronômetro pausado nesta aula" : "Cronômetro contando nesta aula"}
          </span>
        ) : (
          <button className="botao botao-ouro" onClick={() => iniciarEstudo(alvo)}>
            ▶ Estudar esta aula
          </button>
        )}
        <p className="prf-aula-dica">Abrir um vídeo ou PDF liga o cronômetro desta aula, se ele estiver parado.</p>
      </div>

      <h3 className="prf-aula-secao">
        Vídeos{" "}
        <span>
          {feitos}/{aula.blocos.length} vistos
        </span>
      </h3>
      <ul className="prf-bloco-lista">
        {aula.blocos.map((b) => {
          const visto = vistos.has(b.id);
          return (
            <li key={b.id} className={`prf-bloco${visto ? " prf-bloco-visto" : ""}`}>
              <button
                type="button"
                className="prf-bloco-check"
                aria-pressed={visto}
                aria-label={`${b.nome}: ${visto ? "visto" : "marcar como visto"}`}
                onClick={() => alternaVisto(b.id)}
              >
                {visto ? "✓" : ""}
              </button>
              <a
                className="prf-bloco-link"
                href={urlArquivo(b.id)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={aoAbrir}
              >
                ▶ {b.nome}
              </a>
            </li>
          );
        })}
      </ul>

      {aula.pdfs.length > 0 && (
        <>
          <h3 className="prf-aula-secao">PDFs</h3>
          <ul className="prf-bloco-lista">
            {aula.pdfs.map((p) => (
              <li key={p.id} className="prf-bloco">
                <span className="prf-bloco-icone" aria-hidden="true">
                  📄
                </span>
                <a
                  className="prf-bloco-link"
                  href={urlArquivo(p.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={aoAbrir}
                >
                  {p.nome}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      <a className="prf-aula-pasta" href={urlPasta(aula.pasta)} target="_blank" rel="noopener noreferrer">
        Abrir a pasta no Drive ↗
      </a>

      <section className="prf-fixacao" aria-label="Fixação">
        <h3 className="prf-aula-secao">Fixação</h3>
        {fix.quantidade === 0 ? (
          <p>Sem questões no banco para os assuntos desta aula.</p>
        ) : (
          <>
            <p className="prf-fixacao-qtd">
              <b>{fix.quantidade} questões</b> sobre o que a aula ensinou.
            </p>
            <p className="prf-fixacao-peso">
              Quantidade pelo peso: {PRF_MATERIA_MAP[aula.materia].nome} vale {fix.pontosMateria} dos {PONTOS_PROVA}{" "}
              pontos da prova, e {aula.topicos.length > 1 ? "os assuntos desta aula são" : "o assunto desta aula é"}{" "}
              {Math.max(1, Math.round(fix.fatia * 100))}% da matéria.
            </p>
            <ul className="prf-fixacao-assuntos">
              {aula.topicos.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="prf-fixacao-banco">
              {fix.disponiveis} no banco · {nunca} que você ainda não fez (entram primeiro)
            </p>
            <button className="botao botao-ouro" onClick={() => onFixar(aula, fix.quantidade)}>
              Fazer a fixação ({fix.quantidade})
            </button>
          </>
        )}
      </section>

      <div className="prf-aula-navegacao">
        {anterior ? (
          <button className="botao" onClick={() => onTela({ grupo: grupo.id, aula: anterior.id })}>
            ← Aula anterior
          </button>
        ) : (
          <span />
        )}
        {proxima && (
          <button className="botao" onClick={() => onTela({ grupo: grupo.id, aula: proxima.id })}>
            Próxima aula →
          </button>
        )}
      </div>
    </div>
  );
}
