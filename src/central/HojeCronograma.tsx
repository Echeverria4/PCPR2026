import { useEffect, useMemo, useState } from "react";
import type { AulaCurso, GrupoCurso } from "../prf/aulas/tipos";
import {
  NOME_DESTINO,
  NOME_DIA,
  chaveDia,
  fatiasDoDia,
  gravarPlano,
  indiceDia,
  lerPlano,
  prever,
  tituloDoDia,
  type Destino,
} from "../prf/cursos/cronograma/plano";
import type { AbrirCurso } from "./Central";
import { INFO_CURSO, duracao, lerVistos, maisDias, metaDoDia, somaPeriodo, type CursoEstudo, type Painel } from "./dados";
import { Emoji, TextoEmoji } from "../icones/Emoji";

/*
 * O dia de hoje do cronograma do curso, na Início da Central: a aula, as atividades com os minutos e o check.
 * Usa as funções puras do cronograma (prf/cursos/cronograma/plano.ts) e lê as chaves do curso direto, sem
 * carregar o cronômetro. As aulas do curso só baixam quando o cartão aparece.
 */

type CursoCronograma = "prf-policial" | "pf-agente" | "pmpr" | "banco-brasil";
const CURSOS: CursoCronograma[] = ["prf-policial", "pf-agente", "pmpr", "banco-brasil"];
const temCronograma = (c: CursoEstudo | undefined): c is CursoCronograma => CURSOS.includes(c as CursoCronograma);

const AULAS: Record<CursoCronograma, () => Promise<{ GRUPOS: GrupoCurso[] }>> = {
  "prf-policial": () => import("../prf/cursos/dados/prf-policial"),
  "pf-agente": () => import("../prf/cursos/dados/pf-agente"),
  pmpr: () => import("../prf/cursos/dados/pmpr"),
  "banco-brasil": () => import("../prf/cursos/dados/banco-brasil"),
};

/** Botões que cada curso abre a partir daqui (o caderno fica dentro do curso). */
const DESTINOS: Record<CursoCronograma, Destino[]> = {
  "prf-policial": ["aula", "questoes", "erros", "simulado", "resumos", "mapas", "redacao"],
  "pf-agente": ["aula"],
  pmpr: ["aula"],
  "banco-brasil": ["aula"],
};

/** Igual ao nomeAula de prf/aulas/rotulos.ts, que não entra aqui porque puxa o catálogo do curso. */
const nomeDaAula = (a: AulaCurso) =>
  a.n && a.nome ? `${a.tipo ?? "Aula"} ${a.n} · ${a.nome}` : a.nome || `${a.tipo ?? "Aula"} ${a.n}`;

const min = (m: number) => duracao(m * 60_000);

function BarraMeta({ estudado, meta, rotulo }: { estudado: number; meta: number; rotulo: string }) {
  const parte = meta > 0 ? Math.min(100, (estudado / meta) * 100) : 0;
  const falta = meta - estudado;
  return (
    <div className="cx-hoje-meta">
      <div
        className="cx-kpi-barra"
        role="progressbar"
        aria-label={rotulo}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(parte)}
      >
        <span style={{ width: `${parte}%` }} />
      </div>
      <span className="cx-hoje-meta-texto">
        <strong>{duracao(estudado)}</strong> de {duracao(meta)}
        {falta >= 60_000 ? ` · faltam ${duracao(falta)}` : " · meta batida ✓"}
      </span>
    </div>
  );
}

interface Props {
  painel: Painel;
  onAbrir: AbrirCurso;
}

export default function HojeCronograma({ painel, onAbrir }: Props) {
  const { agora, hoje } = painel;
  const [versao, setVersao] = useState(0);

  // O cartão segue o curso que está sendo estudado; sem cronograma nele, o primeiro curso que tem um.
  const principal = painel.principal?.id;
  const comPlano = useMemo(
    () => CURSOS.filter((c) => lerPlano(c).montado),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- relê a cada minuto e a cada marcação
    [agora, versao],
  );
  const curso: CursoCronograma | null = temCronograma(principal) && comPlano.includes(principal) ? principal : (comPlano[0] ?? null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const plano = useMemo(() => (curso ? lerPlano(curso) : null), [curso, agora, versao]);

  const [aulas, setAulas] = useState<{ curso: CursoCronograma; grupos: GrupoCurso[] } | null>(null);
  const [falhou, setFalhou] = useState(false);
  useEffect(() => {
    if (!curso || aulas?.curso === curso) return;
    let vivo = true;
    setFalhou(false);
    AULAS[curso]()
      .then((m) => vivo && setAulas({ curso, grupos: m.GRUPOS }))
      .catch(() => vivo && setFalhou(true));
    return () => {
      vivo = false;
    };
  }, [curso, aulas?.curso]);

  const grupos = aulas && aulas.curso === curso ? aulas.grupos : null;
  const info = curso ? INFO_CURSO[curso] : null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const vistos = useMemo(() => (info ? lerVistos(info) : null), [info, agora]);
  const previsao = useMemo(
    () => (plano && grupos && vistos ? prever(plano, grupos, vistos, agora) : null),
    [plano, grupos, vistos, agora],
  );

  // ---------- sem cronograma: convite para montar ----------
  if (!curso || !plano || !info) {
    const alvo: CursoCronograma = temCronograma(principal) ? principal : "prf-policial";
    const meta = painel.principal ? painel.metaMin * 60_000 : 0;
    return (
      <section className="cx-card cx-hoje" aria-label="Hoje no cronograma">
        <div className="cx-card-topo">
          <h2 className="cx-card-titulo">
          <Emoji e="📅" /> Hoje no cronograma
        </h2>
        </div>
        {painel.principal && (
          <BarraMeta estudado={painel.hojePrincipalMs} meta={meta} rotulo={`Meta de hoje ${painel.principal.em}`} />
        )}
        <p className="cx-hoje-convite">
          Monte o plano da semana: você escolhe as matérias e o app reparte o tempo da sua meta em cada dia.
        </p>
        <div className="cx-card-acoes">
          <button type="button" className="botao botao-ouro" onClick={() => onAbrir(alvo, { aba: "cronograma" })}>
            Montar meu cronograma →
          </button>
        </div>
      </section>
    );
  }

  const d = indiceDia(hoje);
  const dia = plano.dias[d];
  const tempo = metaDoDia(info, hoje);
  const trechos = painel.estudos.find((e) => e.info.id === curso)?.trechos ?? [];
  const estudado = somaPeriodo(trechos, hoje, maisDias(hoje, 1));
  const verTudo = () => onAbrir(curso, { aba: "cronograma" });

  const topo = (
    <div className="cx-card-topo">
      <h2 className="cx-card-titulo">
          <Emoji e="📅" /> Hoje no cronograma
        </h2>
      <span className="cx-etiqueta">{info.curto}</span>
    </div>
  );

  if (!grupos || !previsao) {
    return (
      <section className="cx-card cx-hoje" aria-label="Hoje no cronograma">
        {topo}
        <p className="cx-vazio">{falhou ? "Não deu para carregar as aulas agora." : "Carregando o plano de hoje…"}</p>
        <div className="cx-hoje-pe">
          <span />
          <button type="button" className="cx-link" onClick={verTudo}>
            Ver o cronograma →
          </button>
        </div>
      </section>
    );
  }

  const porId = new Map(grupos.map((g) => [g.id, g]));
  const nome = (id: string) => porId.get(id)?.nome ?? id;
  const enc = previsao.semanas[0]?.encaixes.find((e) => e.d === d);
  const fatias = fatiasDoDia(dia, enc, tempo, nome);
  const k = chaveDia(hoje);
  const feitos = new Set(plano.feitos[k] ?? []);
  const feitas = fatias.filter((f) => feitos.has(f.id)).length;
  const aula = enc?.aulas[0];
  const aulaFeita = !aula && (enc?.feitasHoje.length ?? 0) > 0;
  const destinos = DESTINOS[curso];

  function alternar(id: string) {
    if (!plano || !curso) return;
    const atual = new Set(plano.feitos[k] ?? []);
    if (atual.has(id)) atual.delete(id);
    else atual.add(id);
    gravarPlano(curso, { ...plano, feitos: { ...plano.feitos, [k]: [...atual] } });
    setVersao((v) => v + 1);
  }

  function ir(destino: Destino, grupo: string | null) {
    if (!curso) return;
    if (destino === "aula")
      onAbrir(curso, grupo && aula ? { aba: "aulas", grupo, aula: aula.id } : { aba: "aulas", ...(grupo ? { grupo } : {}) });
    else onAbrir(curso, { aba: "cronograma", ir: destino, ...(grupo ? { grupo } : {}) });
  }

  return (
    <section className="cx-card cx-hoje" aria-label="Hoje no cronograma">
      {topo}
      <p className="cx-hoje-dia">
        {NOME_DIA[d]} · <strong>{tituloDoDia(dia, enc, nome)}</strong>
      </p>
      <BarraMeta estudado={estudado} meta={tempo * 60_000} rotulo={`Tempo estudado hoje ${info.em}`} />

      {enc?.feitasHoje.map((a) => (
        <p key={a.id} className="cx-hoje-feita">
          ✓ Concluída hoje: {nomeDaAula(a)}
        </p>
      ))}
      {aula && (
        <div className="cx-hoje-aula">
          <span className="cx-hoje-aula-rotulo">Aula de hoje</span>
          <span className="cx-hoje-aula-nome">{nomeDaAula(aula)}</span>
          <span className="cx-hoje-aula-tam">
            {aula.blocos.length} {aula.blocos.length === 1 ? "vídeo" : "vídeos"}
            {aula.pdfs.length > 0 ? ` · ${aula.pdfs.length} PDF` : ""}
          </span>
        </div>
      )}
      {enc?.revisao && !enc.grupo && dia.aulasPorDia > 0 && (
        <p className="cx-hoje-nota">✓ As aulas de {nome(enc.revisao)} acabaram: o dia fica para revisão.</p>
      )}

      {fatias.length > 0 ? (
        <ul className="cx-hoje-lista">
          {fatias.map((f) => {
            const feito = feitos.has(f.id);
            // Um botão por linha: o principal da atividade.
            const botao = f.botoes.find((b) => destinos.includes(b) && !(b === "aula" && (!aula || aulaFeita)));
            return (
              <li key={f.id} className={feito ? "cx-hoje-feito" : undefined}>
                <label className="cx-hoje-check">
                  <input type="checkbox" checked={feito} onChange={() => alternar(f.id)} />
                  <span className="cx-hoje-min">{min(f.min)}</span>
                  <span className="cx-hoje-texto">{f.texto}</span>
                </label>
                {botao && !feito && (
                  <button
                    type="button"
                    className={`botao cx-botao-peq${botao === "aula" ? " botao-ouro" : ""}`}
                    onClick={() => ir(botao, f.grupo)}
                  >
                    <TextoEmoji texto={botao === "aula" ? "🎬 Abrir a aula" : NOME_DESTINO[botao]} />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="cx-hoje-nota">Dia livre no cronograma. Se sobrar tempo, uma revisão curta mantém o ritmo.</p>
      )}

      <div className="cx-hoje-pe">
        <span aria-live="polite">
          {fatias.length === 0
            ? ""
            : feitas === fatias.length
              ? "✓ Tudo feito hoje. Bom trabalho!"
              : `${feitas} de ${fatias.length} feitas`}
        </span>
        <button type="button" className="cx-link" onClick={verTudo}>
          Ver o cronograma →
        </button>
      </div>
    </section>
  );
}
