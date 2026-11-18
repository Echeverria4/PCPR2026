import { Emoji, TextoEmoji } from "../../../icones/Emoji";
import { useEffect, useMemo, useState } from "react";
import { tempoAtivo, useAgora, useEstudo, type EstadoEstudo } from "../../aulas/estudo";
import { definirMeta, metaDoTipo, tipoDoDia, useMeta, type EstadoMeta } from "../../aulas/meta";
import { progresso } from "../../aulas/progresso";
import { corDoGrupo, iconeGrupo, nomeAula } from "../../aulas/rotulos";
import type { AulaCurso, GrupoCurso } from "../../aulas/tipos";
import { inicioSemana, maisDias } from "../../semana/base";
import Montar, { EscolhaTempo } from "./Montar";
import {
  DIA_CURTO,
  MAX_AULAS_DIA,
  NOME_DESTINO,
  NOME_DIA,
  ajustarMinutos,
  avisoSemDestino,
  chaveDia,
  diaUsado,
  estudaveis,
  fatiasDoDia,
  gravarPlano,
  horas,
  indiceDia,
  lerPlano,
  meiaNoite,
  minutosDasAtividades,
  novoId,
  pesoDaMateria,
  prever,
  tituloDoDia,
  trocarMateria,
  type DiaPlano,
  type Destino,
  type Encaixe,
  type Fatia,
  type Plano,
  type Previsao,
} from "./plano";

interface Props {
  curso: string;
  grupos: GrupoCurso[];
  /** Botões que este curso tem (sem banco não há questões; sem mapas, não há mapas…). */
  destinos: Destino[];
  /** Abre o destino; false = não havia o que abrir (ex.: nenhuma questão errada na matéria). */
  onIr: (destino: Destino, grupo: string | null, aula?: AulaCurso) => boolean | void;
  /** Aviso ao abrir: um botão do cronograma tocado na Central não tinha o que abrir. */
  avisoInicial?: string | null;
}

/** Minutos de estudo disponíveis no dia (meia-noite): a meta de seg a sex ou a de sáb e dom. */
const tempoDoDia = (meta: EstadoMeta, dia: number) => metaDoTipo(meta, tipoDoDia(dia), dia);

/** Minutos cronometrados em cada dia de segunda a domingo da semana de `agora`. */
function minutosDaSemana(e: EstadoEstudo, agora: number): number[] {
  const inicio = inicioSemana(agora);
  const fim = maisDias(inicio, 7);
  const ms = Array<number>(7).fill(0);
  const conta = (quando: number, duracao: number) => {
    if (quando >= inicio && quando < fim) ms[indiceDia(quando)] += duracao;
  };
  for (const s of e.sessoes) conta(s.inicio, s.ms);
  if (e.ativo) conta(e.ativo.inicio, tempoAtivo(e.ativo, agora));
  return ms.map((x) => Math.round(x / 60000));
}

const dataCurta = (ms: number) => new Date(ms).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
const DESTINOS_COM_MATERIA: Destino[] = ["questoes", "erros", "mapas", "resumos"];

/**
 * A aba Cronograma: o plano da semana montado pelo estudante. O tempo de cada dia é a meta diária (lida ao vivo:
 * mudou a meta, mudam os minutos); a matéria que acaba segue em revisão e a da lista de espera entra no lugar.
 */
export default function CronogramaCurso({ curso, grupos, destinos, onIr, avisoInicial = null }: Props) {
  const estudo = useEstudo();
  const meta = useMeta();
  const agora = useAgora(estudo.ativo !== null && estudo.ativo.desde !== null);
  const [plano, setPlanoBruto] = useState<Plano>(() => lerPlano(curso));
  const [editando, setEditando] = useState(false);
  const [montando, setMontando] = useState(false);
  const [aviso, setAviso] = useState<string | null>(avisoInicial);
  useEffect(() => {
    if (avisoInicial) setAviso(avisoInicial);
  }, [avisoInicial]);

  function setPlano(novo: Plano) {
    setPlanoBruto(novo);
    gravarPlano(curso, novo);
  }
  const trocarDia = (d: number, dia: DiaPlano) => setPlano({ ...plano, dias: plano.dias.map((x, i) => (i === d ? dia : x)) });

  const vistos = useMemo(() => new Set(estudo.vistos), [estudo.vistos]);
  const porId = useMemo(() => new Map(grupos.map((g) => [g.id, g])), [grupos]);
  const previsao = useMemo(() => prever(plano, grupos, estudo, agora), [plano, grupos, estudo, agora]);
  const nome = (id: string) => porId.get(id)?.nome ?? id;
  const hoje = meiaNoite(agora);
  const dHoje = indiceDia(agora);
  const segunda = inicioSemana(agora);
  const tempos = plano.dias.map((_, d) => tempoDoDia(meta, maisDias(segunda, d)));
  const estudadoSemana = minutosDaSemana(estudo, agora);
  const encaixes = new Map(previsao.semanas[0]?.encaixes.map((e) => [e.d, e]));
  const totalSemana = plano.dias.reduce((s, d, i) => s + (diaUsado(d) ? tempos[i] : 0), 0);
  const totalEstudado = estudadoSemana.reduce((a, b) => a + b, 0);

  function ir(destino: Destino, grupo: string | null, aula?: AulaCurso) {
    setAviso(null);
    if (onIr(destino, grupo, aula) === false) setAviso(avisoSemDestino(destino, grupo ? nome(grupo) : null));
  }

  function alternarFeito(dia: number, id: string) {
    const k = chaveDia(dia);
    const atual = new Set(plano.feitos[k] ?? []);
    if (atual.has(id)) atual.delete(id);
    else atual.add(id);
    setPlano({ ...plano, feitos: { ...plano.feitos, [k]: [...atual] } });
  }

  if (!plano.montado || montando)
    return (
      <div className="prf-cronog">
        <Montar
          curso={curso}
          grupos={grupos}
          destinos={destinos}
          vistos={vistos}
          meta={meta}
          trocando={plano.montado}
          onCancelar={plano.montado ? () => setMontando(false) : undefined}
          onPronto={(p) => {
            setPlano({ ...p, feitos: plano.feitos });
            setMontando(false);
            setEditando(false);
          }}
        />
      </div>
    );

  return (
    <div className="prf-cronog">
      <header className="prf-cronog-cabeca">
        <div>
          <p className="prf-cronog-olho">Cronograma semanal</p>
          <h2 className="prf-cronog-titulo">O que estudar em cada dia</h2>
          <p className="prf-cronog-sub">
            <strong>{horas(metaDoTipo(meta, "semana", hoje))}</strong> por dia de segunda a sexta ·{" "}
            <strong>{horas(metaDoTipo(meta, "fimDeSemana", hoje))}</strong> no sábado e no domingo ·{" "}
            {horas(totalSemana)} por semana. Esta semana você já fez <strong>{horas(totalEstudado)}</strong>.
          </p>
        </div>
        <div className="prf-cronog-cabeca-acoes">
          <button
            type="button"
            className={`botao ${editando ? "botao-ouro" : ""}`}
            aria-pressed={editando}
            onClick={() => setEditando(!editando)}
          >
            <TextoEmoji texto={editando ? "✓ Pronto" : "✏️ Editar"} />
          </button>
          {!editando && (
            <button type="button" className="botao" onClick={() => setMontando(true)}>
              <Emoji e="🧩" /> Montar de novo
            </button>
          )}
        </div>
      </header>

      {aviso && (
        <p className="prf-cronog-aviso" role="status">
          {aviso}
        </p>
      )}

      {editando && (
        <section className="prf-cronog-bloco" aria-label="Tempo disponível">
          <h3 className="prf-cronog-bloco-titulo">
            <Emoji e="⏱️" /> Tempo disponível
          </h3>
          <div className="prf-cronog-tempos">
            <EscolhaTempo tipo="semana" valor={metaDoTipo(meta, "semana", hoje)} onMudar={(m) => definirMeta("semana", m)} />
            <EscolhaTempo
              tipo="fimDeSemana"
              valor={metaDoTipo(meta, "fimDeSemana", hoje)}
              onMudar={(m) => definirMeta("fimDeSemana", m)}
            />
          </div>
          <p className="prf-cronog-nota">
            É a meta diária do curso: mudou aqui, muda nas Aulas e na Semana (e o contrário também). Os minutos de cada
            atividade se ajustam sozinhos, na mesma proporção.
          </p>
        </section>
      )}

      {!editando && (
        <CartaoHoje
          dia={plano.dias[dHoje]}
          d={dHoje}
          data={hoje}
          tempo={tempos[dHoje]}
          encaixe={encaixes.get(dHoje)}
          estudado={estudadoSemana[dHoje]}
          feitos={new Set(plano.feitos[chaveDia(hoje)] ?? [])}
          destinos={destinos}
          porId={porId}
          nome={nome}
          onFeito={(id) => alternarFeito(hoje, id)}
          onIr={ir}
        />
      )}

      <section className="prf-cronog-bloco" aria-label="A semana">
        <h3 className="prf-cronog-bloco-titulo">A semana</h3>
        <div className="prf-cronog-semana">
          {plano.dias.map((dia, d) =>
            editando ? (
              <EditorDia
                key={d}
                d={d}
                dia={dia}
                tempo={tempos[d]}
                grupos={grupos}
                destinos={destinos}
                onMudar={(novo) => trocarDia(d, novo)}
              />
            ) : (
              <CartaoDia
                key={d}
                d={d}
                dia={dia}
                tempo={tempos[d]}
                hoje={d === dHoje}
                passou={d < dHoje}
                encaixe={encaixes.get(d)}
                estudado={estudadoSemana[d]}
                feitos={(plano.feitos[chaveDia(maisDias(segunda, d))] ?? []).length}
                porId={porId}
                nome={nome}
              />
            ),
          )}
        </div>
        {editando && (
          <div className="prf-cronog-editar-fim">
            <p className="prf-cronog-nota">
              A matéria do dia é a primeira da fila que ainda tem aula. Quando a fila acaba, entra a próxima da lista de
              espera; a que acabou continua no dia com questões, mapas mentais e as erradas.
            </p>
            <button type="button" className="botao botao-ouro" onClick={() => setEditando(false)}>
              ✓ Pronto
            </button>
          </div>
        )}
      </section>

      <Materias
        curso={curso}
        plano={plano}
        previsao={previsao}
        grupos={grupos}
        vistos={vistos}
        editando={editando}
        nome={nome}
        onPlano={setPlano}
      />

      {!editando && <Semanas previsao={previsao} plano={plano} nome={nome} />}
    </div>
  );
}

// ---------- Atividades com o tempo do dia ----------

interface ListaFatiasProps {
  fatias: Fatia[];
  feitos?: Set<string>;
  destinos?: Destino[];
  aula?: AulaCurso;
  /** A aula do dia já foi feita hoje: o botão da aula some. */
  aulaFeita?: boolean;
  onFeito?: (id: string) => void;
  onIr?: (destino: Destino, grupo: string | null, aula?: AulaCurso) => void;
}

function ListaFatias({ fatias, feitos, destinos = [], aula, aulaFeita, onFeito, onIr }: ListaFatiasProps) {
  return (
    <ul className={onFeito ? "prf-cronog-lista" : "prf-cronog-dia-ativ"}>
      {fatias.map((f) => {
        const feito = feitos?.has(f.id) ?? false;
        const botoes = f.botoes.filter((b) => destinos.includes(b) && !(b === "aula" && (!aula || aulaFeita)));
        if (!onFeito)
          return (
            <li key={f.id}>
              <span className="prf-cronog-min">{horas(f.min)}</span> {f.texto}
            </li>
          );
        return (
          <li key={f.id} className={`${feito ? "prf-cronog-feito" : ""}${f.automatica ? " prf-cronog-auto" : ""}`}>
            <label className="prf-cronog-check">
              <input type="checkbox" checked={feito} onChange={() => onFeito(f.id)} />
              <span className="prf-cronog-min">{horas(f.min)}</span>
              <span className="prf-cronog-texto">{f.texto}</span>
            </label>
            {botoes.length > 0 && onIr && (
              <div className="prf-cronog-botoes">
                {botoes.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`botao prf-cronog-ir${b === "aula" ? " botao-ouro" : ""}`}
                    onClick={() => onIr(b, f.grupo, b === "aula" ? aula : undefined)}
                  >
                    <TextoEmoji texto={b === "aula" ? "🎬 Abrir a aula" : NOME_DESTINO[b]} />
                  </button>
                ))}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function ChipMateria({ grupo }: { grupo: GrupoCurso }) {
  return (
    <span className="prf-cronog-chip">
      <span className="prf-cronog-cor" style={{ background: corDoGrupo(grupo.id) }} aria-hidden="true" />
      <span aria-hidden="true">
        <Emoji e={grupo.icone ?? iconeGrupo(grupo.id)} />
      </span> {grupo.nome}
    </span>
  );
}

// ---------- Hoje ----------

interface CartaoHojeProps {
  dia: DiaPlano;
  d: number;
  data: number;
  tempo: number;
  encaixe?: Encaixe;
  estudado: number;
  feitos: Set<string>;
  destinos: Destino[];
  porId: Map<string, GrupoCurso>;
  nome: (id: string) => string;
  onFeito: (id: string) => void;
  onIr: (destino: Destino, grupo: string | null, aula?: AulaCurso) => void;
}

function CartaoHoje({ dia, d, data, tempo, encaixe, estudado, feitos, destinos, porId, nome, onFeito, onIr }: CartaoHojeProps) {
  const fatias = fatiasDoDia(dia, encaixe, tempo, nome);
  const g = encaixe?.grupo ? porId.get(encaixe.grupo) : undefined;
  const aula = encaixe?.aulas[0];
  const feitas = fatias.filter((f) => feitos.has(f.id)).length;
  const aulaFeita = !aula && (encaixe?.feitasHoje.length ?? 0) > 0;

  return (
    <section className="prf-cronog-hoje" aria-label="Hoje">
      <div className="prf-cronog-hoje-topo">
        <p className="prf-cronog-olho">
          Hoje · {NOME_DIA[d]}, {dataCurta(data)}
        </p>
        <span className="prf-cronog-tempo">
          {horas(estudado)} de {horas(tempo)}
        </span>
      </div>
      <h3 className="prf-cronog-hoje-titulo">{tituloDoDia(dia, encaixe, nome)}</h3>
      {g && dia.titulo && <ChipMateria grupo={g} />}

      {encaixe?.feitasHoje.map((a) => (
        <p key={a.id} className="prf-cronog-feita">
          ✓ Concluída hoje: {nomeAula(a)}
        </p>
      ))}
      {encaixe?.aulas.map((a) => (
        <div key={a.id} className="prf-cronog-aula">
          <span className="prf-cronog-aula-rotulo">Aula de hoje</span>
          <span className="prf-cronog-aula-nome">{nomeAula(a)}</span>
          <span className="prf-cronog-aula-tam">
            {a.blocos.length} {a.blocos.length === 1 ? "vídeo" : "vídeos"}
            {a.pdfs.length > 0 ? ` · ${a.pdfs.length} PDF` : ""}
          </span>
        </div>
      ))}
      {encaixe?.revisao && !encaixe.grupo && dia.aulasPorDia > 0 && (
        <p className="prf-cronog-linha">✓ As aulas de {nome(encaixe.revisao)} acabaram: o dia fica para revisão.</p>
      )}

      {fatias.length > 0 ? (
        <>
          <ListaFatias
            fatias={fatias}
            feitos={feitos}
            destinos={destinos}
            aula={aula}
            aulaFeita={aulaFeita}
            onFeito={onFeito}
            onIr={onIr}
          />
          <p className="prf-cronog-progresso" aria-live="polite">
            {feitas === fatias.length ? "✓ Tudo feito hoje. Bom trabalho!" : `${feitas} de ${fatias.length} feitas`}
          </p>
        </>
      ) : (
        <p className="prf-cronog-linha">Nada marcado para hoje. Use <Emoji e="✏️" /> Editar para planejar o dia.</p>
      )}
    </section>
  );
}

// ---------- Um dia da semana ----------

interface CartaoDiaProps {
  d: number;
  dia: DiaPlano;
  tempo: number;
  hoje: boolean;
  passou: boolean;
  encaixe?: Encaixe;
  estudado: number;
  feitos: number;
  porId: Map<string, GrupoCurso>;
  nome: (id: string) => string;
}

function CartaoDia({ d, dia, tempo, hoje, passou, encaixe, estudado, feitos, porId, nome }: CartaoDiaProps) {
  const fatias = fatiasDoDia(dia, encaixe, tempo, nome);
  const grupo = encaixe?.grupo ?? encaixe?.revisao ?? dia.fila[0] ?? null;
  const fila = dia.fila.filter((g) => porId.has(g));
  const depois = encaixe?.grupo && fila.includes(encaixe.grupo) ? fila.slice(fila.indexOf(encaixe.grupo) + 1) : [];
  const classe = `prf-cronog-dia${hoje ? " prf-cronog-dia-hoje" : ""}${passou ? " prf-cronog-dia-passou" : ""}`;

  return (
    <article className={classe} aria-label={NOME_DIA[d]}>
      <header className="prf-cronog-dia-topo">
        <span className="prf-cronog-dia-nome">
          {NOME_DIA[d]}
          {hoje && <span className="prf-cronog-selo">hoje</span>}
        </span>
        <span className="prf-cronog-tempo">{diaUsado(dia) ? horas(tempo) : "livre"}</span>
      </header>
      <p className="prf-cronog-dia-titulo">{tituloDoDia(dia, encaixe, nome)}</p>
      {grupo && <span className="prf-cronog-cor-linha" style={{ background: corDoGrupo(grupo) }} aria-hidden="true" />}

      {encaixe && encaixe.aulas.length > 0 && (
        <p className="prf-cronog-dia-aula">
          <span aria-hidden="true">
            <Emoji e="🎬" />
          </span>{" "}
          {encaixe.aulas.map(nomeAula).join(" + ")}
        </p>
      )}
      {fatias.length > 0 && <ListaFatias fatias={fatias} />}
      {depois.length > 0 && <p className="prf-cronog-depois">Depois: {depois.map(nome).join(" → ")}</p>}
      {(passou || hoje) && (estudado > 0 || feitos > 0) && (
        <p className="prf-cronog-dia-feito">
          ✓ {horas(estudado)} estudadas
          {fatias.length > 0 ? ` · ${Math.min(feitos, fatias.length)} de ${fatias.length} atividades` : ""}
        </p>
      )}
    </article>
  );
}

// ---------- Editar um dia ----------

interface EditorFilaProps {
  ids: string[];
  grupos: GrupoCurso[];
  rotulo: string;
  vazio: string;
  onMudar: (ids: string[]) => void;
}

/** Lista de matérias em ordem, com subir, tirar e acrescentar. */
function EditorFila({ ids, grupos, rotulo, vazio, onMudar }: EditorFilaProps) {
  const fora = estudaveis(grupos).filter((g) => !ids.includes(g.id));
  const nome = (id: string) => grupos.find((g) => g.id === id)?.nome ?? id;
  function subir(i: number) {
    const nova = [...ids];
    [nova[i - 1], nova[i]] = [nova[i], nova[i - 1]];
    onMudar(nova);
  }
  return (
    <div className="prf-cronog-campo">
      <span>{rotulo}</span>
      {ids.length === 0 && <p className="prf-cronog-nota">{vazio}</p>}
      <ol className="prf-cronog-fila">
        {ids.map((id, i) => (
          <li key={id}>
            <span className="prf-cronog-cor" style={{ background: corDoGrupo(id) }} aria-hidden="true" />
            <span className="prf-cronog-fila-nome">{nome(id)}</span>
            {i > 0 && (
              <button type="button" className="botao prf-cronog-mini" aria-label={`Subir ${nome(id)}`} onClick={() => subir(i)}>
                ↑
              </button>
            )}
            <button
              type="button"
              className="botao prf-cronog-mini"
              aria-label={`Tirar ${nome(id)}`}
              onClick={() => onMudar(ids.filter((x) => x !== id))}
            >
              ✕
            </button>
          </li>
        ))}
      </ol>
      {fora.length > 0 && (
        <select value="" aria-label={`${rotulo}: acrescentar matéria`} onChange={(e) => e.target.value && onMudar([...ids, e.target.value])}>
          <option value="">+ Acrescentar matéria…</option>
          {fora.map((g) => (
            <option key={g.id} value={g.id}>
              {g.nome}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

interface EditorDiaProps {
  d: number;
  dia: DiaPlano;
  tempo: number;
  grupos: GrupoCurso[];
  destinos: Destino[];
  onMudar: (dia: DiaPlano) => void;
}

function EditorDia({ d, dia, tempo, grupos, destinos, onMudar }: EditorDiaProps) {
  const mins = minutosDasAtividades(dia, tempo);
  const passos = Array.from({ length: Math.floor(tempo / 5) + 1 }, (_, i) => i * 5);
  const opcoes = destinos.filter((x) => x !== "nenhum");
  const materias = estudaveis(grupos);
  const mudar = (i: number, parte: Partial<DiaPlano["atividades"][number]>) =>
    onMudar({ ...dia, atividades: dia.atividades.map((a, j) => (j === i ? { ...a, ...parte } : a)) });

  function acrescentar() {
    const novo = { ...dia, atividades: [...dia.atividades, { id: novoId(), min: 0, texto: "", ir: "nenhum" as Destino }] };
    onMudar(dia.atividades.length === 0 ? { ...novo, atividades: [{ ...novo.atividades[0], min: tempo }] } : ajustarMinutos(novo, novo.atividades.length - 1, 30, tempo));
  }

  return (
    <article className="prf-cronog-dia prf-cronog-dia-editar" aria-label={`Editar ${NOME_DIA[d]}`}>
      <header className="prf-cronog-dia-topo">
        <span className="prf-cronog-dia-nome">{NOME_DIA[d]}</span>
        <span className="prf-cronog-tempo">{horas(tempo)}</span>
      </header>

      <label className="prf-cronog-campo">
        <span>Nome do dia (opcional)</span>
        <input
          type="text"
          value={dia.titulo}
          maxLength={60}
          placeholder="Ex.: Simulado + revisão"
          onChange={(e) => onMudar({ ...dia, titulo: e.target.value })}
        />
      </label>

      <EditorFila
        ids={dia.fila}
        grupos={grupos}
        rotulo="Matérias, na ordem"
        vazio="Sem matéria: o dia fica só com as atividades."
        onMudar={(fila) => onMudar({ ...dia, fila })}
      />

      {dia.fila.length > 0 && (
        <div className="prf-cronog-campo">
          <span>Aulas novas por dia</span>
          <div className="prf-cronog-ritmo" role="group" aria-label={`Aulas novas por dia na ${NOME_DIA[d]}`}>
            {Array.from({ length: MAX_AULAS_DIA + 1 }, (_, n) => (
              <button
                key={n}
                type="button"
                className="prf-cronog-ritmo-botao"
                aria-pressed={dia.aulasPorDia === n}
                onClick={() => onMudar({ ...dia, aulasPorDia: n })}
              >
                {n === 0 ? "Só revisão" : n}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="prf-cronog-campo">
        <span>Atividades · somam {horas(tempo)}</span>
        {dia.atividades.map((a, i) => (
          <div key={a.id} className="prf-cronog-ativ-editar">
            <select
              value={mins[i]}
              aria-label="Minutos"
              disabled={dia.atividades.length === 1}
              onChange={(e) => onMudar(ajustarMinutos(dia, i, Number(e.target.value), tempo))}
            >
              {(passos.includes(mins[i]) ? passos : [...passos, mins[i]].sort((x, y) => x - y)).map((m) => (
                <option key={m} value={m}>
                  {horas(m)}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={a.texto}
              maxLength={80}
              aria-label="O que fazer"
              placeholder="O que fazer"
              onChange={(e) => mudar(i, { texto: e.target.value })}
            />
            <select value={a.ir} aria-label="Botão da atividade" onChange={(e) => mudar(i, { ir: e.target.value as Destino })}>
              <option value="nenhum">{NOME_DESTINO.nenhum}</option>
              {opcoes.map((x) => (
                <option key={x} value={x}>
                  {NOME_DESTINO[x]}
                </option>
              ))}
            </select>
            {DESTINOS_COM_MATERIA.includes(a.ir) && (
              <select
                value={a.grupo ?? ""}
                aria-label="Matéria da atividade"
                onChange={(e) => {
                  const { grupo: _g, ...resto } = a;
                  onMudar({
                    ...dia,
                    atividades: dia.atividades.map((x, j) => (j === i ? (e.target.value ? { ...resto, grupo: e.target.value } : resto) : x)),
                  });
                }}
              >
                <option value="">Matéria do dia</option>
                {materias.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.nome}
                  </option>
                ))}
              </select>
            )}
            <button
              type="button"
              className="botao prf-cronog-mini"
              aria-label="Tirar a atividade"
              onClick={() => onMudar({ ...dia, atividades: dia.atividades.filter((_, j) => j !== i) })}
            >
              ✕
            </button>
          </div>
        ))}
        <button type="button" className="botao prf-cronog-mais" onClick={acrescentar}>
          + Atividade
        </button>
      </div>
    </article>
  );
}

// ---------- Matérias: em estudo, trocar e lista de espera ----------

interface MateriasProps {
  curso: string;
  plano: Plano;
  previsao: Previsao;
  grupos: GrupoCurso[];
  vistos: Set<string>;
  editando: boolean;
  nome: (id: string) => string;
  onPlano: (p: Plano) => void;
}

function Materias({ curso, plano, previsao, grupos, vistos, editando, nome, onPlano }: MateriasProps) {
  const porId = new Map(grupos.map((g) => [g.id, g]));
  const emEstudo = [...new Set(plano.dias.flatMap((d) => d.fila))].filter((id) => porId.has(id));
  const espera = plano.espera.filter((id) => porId.has(id) && !emEstudo.includes(id));
  const entrada = new Map<string, { d: number; desde: number }>();
  for (const t of previsao.trocas) if (!entrada.has(t.para)) entrada.set(t.para, { d: t.d, desde: t.desde });
  const forasDoPlano = estudaveis(grupos).filter((g) => !emEstudo.includes(g.id));

  function info(id: string) {
    const g = porId.get(id)!;
    const aulas = g.aulas.filter((a) => a.blocos.length > 0);
    const feitas = aulas.filter((a) => progresso(a, vistos).completa).length;
    const fim = previsao.termino.get(id);
    if (feitas === aulas.length) return "✓ aulas feitas: segue em questões, mapas e erradas";
    return `${feitas}/${aulas.length} aulas${fim ? ` · termina por volta de ${dataCurta(fim)}` : ""}`;
  }
  const peso = (id: string) => {
    const p = pesoDaMateria(curso, id);
    return p !== null ? <span className="prf-cronog-peso">≈{p} itens</span> : null;
  };

  return (
    <section className="prf-cronog-bloco" aria-label="Matérias">
      <h3 className="prf-cronog-bloco-titulo">Matérias em estudo</h3>
      <ul className="prf-cronog-materias">
        {emEstudo.map((id) => (
          <li key={id}>
            <span className="prf-cronog-cor" style={{ background: corDoGrupo(id) }} aria-hidden="true" />
            <span className="prf-cronog-materia-nome">
              <span aria-hidden="true">
        <Emoji e={porId.get(id)?.icone ?? iconeGrupo(id)} />
      </span> {nome(id)} {peso(id)}
            </span>
            <span className="prf-cronog-materia-info">{info(id)}</span>
            <select
              className="prf-cronog-trocar"
              value=""
              aria-label={`Trocar ${nome(id)}`}
              onChange={(e) => {
                const v = e.target.value;
                if (!v) return;
                onPlano(trocarMateria(plano, id, v === "-" ? null : v));
              }}
            >
              <option value="">🔄 Trocar…</option>
              {forasDoPlano.map((g) => (
                <option key={g.id} value={g.id}>
                  por {g.nome}
                </option>
              ))}
              <option value="-">Tirar do cronograma</option>
            </select>
          </li>
        ))}
      </ul>
      {emEstudo.length === 0 && <p className="prf-cronog-nota">Nenhuma matéria nos dias. Use <Emoji e="🧩" /> Montar de novo ou <Emoji e="✏️" /> Editar.</p>}

      {editando ? (
        <EditorFila
          ids={espera}
          grupos={grupos.filter((g) => !emEstudo.includes(g.id))}
          rotulo="Lista de espera: entram nesta ordem quando uma matéria acabar"
          vazio="Lista vazia: quando uma matéria acabar, o dia dela fica só em revisão."
          onMudar={(ids) => onPlano({ ...plano, espera: ids })}
        />
      ) : (
        espera.length > 0 && (
          <details className="prf-cronog-espera">
            <summary>Depois, na ordem: {espera.length} matérias na lista de espera</summary>
            <ol>
              {espera.map((id) => {
                const e = entrada.get(id);
                return (
                  <li key={id}>
                    <span className="prf-cronog-cor" style={{ background: corDoGrupo(id) }} aria-hidden="true" />
                    <span className="prf-cronog-materia-nome">
                      {nome(id)} {peso(id)}
                    </span>
                    <span className="prf-cronog-materia-info">
                      {e ? `entra por volta de ${dataCurta(e.desde)}, na ${NOME_DIA[e.d].toLowerCase()}` : "sem data ainda"}
                    </span>
                  </li>
                );
              })}
            </ol>
          </details>
        )
      )}
    </section>
  );
}

// ---------- Semana a semana ----------

const SEMANAS_ABERTAS = 2;
const SEMANAS_VISIVEIS = 6;
const TROCAS_VISIVEIS = 4;

function Semanas({ previsao, plano, nome }: { previsao: Previsao; plano: Plano; nome: (id: string) => string }) {
  const [tudo, setTudo] = useState(false);
  const todas = previsao.semanas.filter((s) => s.encaixes.some((e) => e.aulas.length > 0));
  if (todas.length === 0) return null;
  const semanas = tudo ? todas : todas.slice(0, SEMANAS_VISIVEIS);
  const trocas = tudo ? previsao.trocas : previsao.trocas.slice(0, TROCAS_VISIVEIS);
  const escondidas = todas.length - semanas.length + previsao.trocas.length - trocas.length;
  const primeira = previsao.semanas[0]?.inicio;
  const ultima = todas[todas.length - 1].inicio;
  return (
    <section className="prf-cronog-bloco" aria-label="Semana a semana">
      <h3 className="prf-cronog-bloco-titulo">Semana a semana, até acabar</h3>
      {trocas.map((t) => (
        <p key={`${t.d}-${t.desde}`} className="prf-cronog-troca">
          <Emoji e="🔄" /> A partir de {dataCurta(t.desde)}, a {NOME_DIA[t.d].toLowerCase()} passa{t.de ? ` de ${nome(t.de)}` : ""} para{" "}
          <strong>{nome(t.para)}</strong>
          {t.de ? `; ${nome(t.de)} segue em revisão.` : "."}
        </p>
      ))}
      <div className="prf-cronog-semanas">
        {semanas.map((s, i) => (
          <details key={s.inicio} className="prf-cronog-sem" open={i < SEMANAS_ABERTAS}>
            <summary>
              {s.inicio === primeira ? "Esta semana" : `Semana de ${dataCurta(s.inicio)} a ${dataCurta(maisDias(s.inicio, 6))}`}
              <span className="prf-cronog-sem-conta">{s.encaixes.reduce((n, e) => n + e.aulas.length, 0)} aulas</span>
            </summary>
            <ul>
              {s.encaixes
                .filter((e) => e.aulas.length > 0)
                .map((e) => (
                  <li key={e.dia}>
                    <span className="prf-cronog-sem-dia">{DIA_CURTO[e.d]}</span>
                    <span className="prf-cronog-cor" style={{ background: corDoGrupo(e.grupo ?? "") }} aria-hidden="true" />
                    <span className="prf-cronog-sem-mat">{nome(e.grupo ?? "")}</span>
                    <span className="prf-cronog-sem-aula">{e.aulas.map(nomeAula).join(" + ")}</span>
                  </li>
                ))}
            </ul>
          </details>
        ))}
      </div>
      {(escondidas > 0 || tudo) && (
        <button type="button" className="botao prf-cronog-mais" aria-expanded={tudo} onClick={() => setTudo(!tudo)}>
          {tudo ? "Mostrar menos" : `Ver até o fim (${todas.length} semanas, até ${dataCurta(maisDias(ultima, 6))})`}
        </button>
      )}
      <p className="prf-cronog-nota">
        O plano se refaz sozinho pelo que você marca nas Aulas: se atrasar ou adiantar, as próximas semanas mudam junto.
        As datas contam {plano.dias.some((d) => d.aulasPorDia > 1) ? "as aulas novas escolhidas em cada dia" : "uma aula nova por dia de matéria"}; aula longa pode levar mais de um dia.
        {!previsao.completa && " A previsão vai até 2 anos."}
      </p>
    </section>
  );
}
