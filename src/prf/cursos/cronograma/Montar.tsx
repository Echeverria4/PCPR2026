import { Emoji, TextoEmoji } from "../../../icones/Emoji";
import { useMemo, useState } from "react";
import { definirMeta, metaDoTipo, type EstadoMeta, type TipoDia } from "../../aulas/meta";
import { progresso } from "../../aulas/progresso";
import { corDoGrupo, iconeGrupo } from "../../aulas/rotulos";
import type { GrupoCurso } from "../../aulas/tipos";
import {
  DIA_CURTO,
  MAX_MATERIAS,
  NOME_EXTRA,
  dicaDeMaterias,
  estudaveis,
  extrasPadrao,
  fontePeso,
  horas,
  materiaConcluida,
  meiaNoite,
  montarPlano,
  ordemPorPeso,
  pesoDaMateria,
  type Destino,
  type Extra,
  type Plano,
} from "./plano";

interface Props {
  curso: string;
  grupos: GrupoCurso[];
  destinos: Destino[];
  vistos: Set<string>;
  meta: EstadoMeta;
  /** Já existe um cronograma: o passo a passo troca o atual. */
  trocando: boolean;
  onPronto: (p: Plano) => void;
  onCancelar?: () => void;
}

const OPCOES_TEMPO: Record<TipoDia, number[]> = {
  semana: [30, 45, 60, 75, 90, 105, 120, 150, 180, 210, 240, 300, 360],
  fimDeSemana: [30, 60, 90, 120, 150, 180, 240, 300, 360, 420, 480, 540, 600],
};
const PADRAO_MATERIAS = 4;

/** Escolha do tempo de um tipo de dia, em horas. */
export function EscolhaTempo({ tipo, valor, onMudar }: { tipo: TipoDia; valor: number; onMudar: (min: number) => void }) {
  const opcoes = OPCOES_TEMPO[tipo].includes(valor) ? OPCOES_TEMPO[tipo] : [...OPCOES_TEMPO[tipo], valor].sort((a, b) => a - b);
  const rotulo = tipo === "semana" ? "Segunda a sexta" : "Sábado e domingo";
  return (
    <label className="prf-cronog-tempo-campo">
      <span>{rotulo}</span>
      <select value={valor} onChange={(e) => onMudar(Number(e.target.value))}>
        {opcoes.map((m) => (
          <option key={m} value={m}>
            {horas(m)} por dia
          </option>
        ))}
      </select>
    </label>
  );
}

/** O passo a passo para montar o cronograma: tempo, matérias (com a dica pelo peso) e o que mais entra na semana. */
export default function Montar({ curso, grupos, destinos, vistos, meta, trocando, onPronto, onCancelar }: Props) {
  const hoje = meiaNoite(Date.now());
  const [passo, setPasso] = useState(1);
  const [tUtil, setTUtil] = useState(() => metaDoTipo(meta, "semana", hoje));
  const [tFim, setTFim] = useState(() => metaDoTipo(meta, "fimDeSemana", hoje));
  const [escolhidas, setEscolhidas] = useState<string[]>(() => dicaDeMaterias(curso, grupos, vistos, PADRAO_MATERIAS));
  const [soRevisao, setSoRevisao] = useState<string[]>([]);
  const [extras, setExtras] = useState<Extra[]>(() => extrasPadrao(destinos));

  const lista = useMemo(() => ordemPorPeso(curso, estudaveis(grupos)), [curso, grupos]);
  const fonte = fontePeso(curso);
  const dica = (n: number) => dicaDeMaterias(curso, grupos, vistos, n);
  const extrasDoCurso = (Object.keys(NOME_EXTRA) as Extra[]).filter((x) => destinos.includes(NOME_EXTRA[x].precisa));
  const opcoes = { materias: escolhidas, soRevisao: soRevisao.filter((g) => escolhidas.includes(g)), extras };
  const previa = montarPlano(curso, grupos, destinos, opcoes);
  const nome = (id: string) => grupos.find((g) => g.id === id)?.nome ?? id;

  function alternar(id: string) {
    if (escolhidas.includes(id)) setEscolhidas(escolhidas.filter((x) => x !== id));
    else if (escolhidas.length < MAX_MATERIAS) setEscolhidas([...escolhidas, id]);
  }

  function concluir() {
    if (tUtil !== metaDoTipo(meta, "semana", hoje)) definirMeta("semana", tUtil);
    if (tFim !== metaDoTipo(meta, "fimDeSemana", hoje)) definirMeta("fimDeSemana", tFim);
    onPronto(montarPlano(curso, grupos, destinos, opcoes));
  }

  const sugestao = dica(Math.max(1, escolhidas.length || PADRAO_MATERIAS));
  const somaPeso = (ids: string[]) => ids.reduce((s, id) => s + (pesoDaMateria(curso, id) ?? 0), 0);
  const total = somaPeso(dica(lista.length));
  const parte = total > 0 ? Math.round((somaPeso(sugestao) * 100) / total) : 0;

  return (
    <section className="prf-cronog-montar" aria-label="Montar o cronograma">
      <header className="prf-cronog-montar-topo">
        <p className="prf-cronog-olho">
          {trocando ? "Montar de novo" : "Montar meu cronograma"} · passo {passo} de 3
        </p>
        <div className="prf-cronog-passos" aria-hidden="true">
          {[1, 2, 3].map((n) => (
            <span key={n} className={n <= passo ? "prf-cronog-passo-feito" : ""} />
          ))}
        </div>
      </header>

      {passo === 1 && (
        <div className="prf-cronog-montar-corpo">
          <h2 className="prf-cronog-titulo">Quanto tempo você tem por dia?</h2>
          <p className="prf-cronog-sub">
            O cronograma reparte esse tempo entre as atividades de cada dia. É a mesma meta das Aulas e da Semana, e
            vale a partir de hoje.
          </p>
          <div className="prf-cronog-tempos">
            <EscolhaTempo tipo="semana" valor={tUtil} onMudar={setTUtil} />
            <EscolhaTempo tipo="fimDeSemana" valor={tFim} onMudar={setTFim} />
          </div>
          <p className="prf-cronog-total">
            Por semana: <strong>{horas(tUtil * 5 + tFim * 2)}</strong>
          </p>
        </div>
      )}

      {passo === 2 && (
        <div className="prf-cronog-montar-corpo">
          <h2 className="prf-cronog-titulo">Quais matérias estudar agora?</h2>
          <p className="prf-cronog-sub">
            Uma matéria por dia útil. As outras entram sozinhas, pela ordem do peso, quando uma acabar.
          </p>
          <div className="prf-cronog-campo">
            <span>Quantas ao mesmo tempo</span>
            <div className="prf-cronog-ritmo" role="group" aria-label="Quantas matérias ao mesmo tempo">
              {Array.from({ length: MAX_MATERIAS }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className="prf-cronog-ritmo-botao"
                  aria-pressed={escolhidas.length === n}
                  onClick={() => setEscolhidas(dica(n))}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <div className="prf-cronog-dica">
            <p>
              <strong>
            <Emoji e="💡" /> Dica:
          </strong>{" "}
              {fonte ? (
                <>
                  pelo peso na prova ({fonte}), comece por <strong>{sugestao.map(nome).join(", ")}</strong>
                  {parte > 0 ? `: juntas, são cerca de ${parte}% dos itens.` : "."}
                </>
              ) : (
                <>este curso ainda não tem prova no app para medir o peso, então a dica segue a ordem do curso.</>
              )}
            </p>
            {sugestao.join() !== escolhidas.join() && (
              <button type="button" className="botao" onClick={() => setEscolhidas(sugestao)}>
                Usar a dica
              </button>
            )}
          </div>
          <ul className="prf-cronog-escolha">
            {lista.map((g) => {
              const marcada = escolhidas.includes(g.id);
              const peso = pesoDaMateria(curso, g.id);
              const aulas = g.aulas.filter((a) => a.blocos.length > 0);
              const feitas = aulas.filter((a) => progresso(a, vistos).completa).length;
              const acabou = materiaConcluida(g, vistos);
              return (
                <li key={g.id} className={marcada ? "prf-cronog-escolha-marcada" : ""}>
                  <label className="prf-cronog-escolha-linha">
                    <input
                      type="checkbox"
                      checked={marcada}
                      disabled={!marcada && escolhidas.length >= MAX_MATERIAS}
                      onChange={() => alternar(g.id)}
                    />
                    <span className="prf-cronog-cor" style={{ background: corDoGrupo(g.id) }} aria-hidden="true" />
                    <span className="prf-cronog-escolha-nome">
                      <span aria-hidden="true">
        <Emoji e={g.icone ?? iconeGrupo(g.id)} />
      </span> {g.nome}
                    </span>
                    <span className="prf-cronog-escolha-info">
                      {peso !== null && <span className="prf-cronog-peso">≈{peso} itens</span>}
                      <span>{acabou ? "✓ aulas feitas" : `${feitas}/${aulas.length} aulas`}</span>
                    </span>
                  </label>
                  {marcada && !acabou && (
                    <button
                      type="button"
                      className="prf-cronog-ja"
                      aria-pressed={soRevisao.includes(g.id)}
                      onClick={() =>
                        setSoRevisao(soRevisao.includes(g.id) ? soRevisao.filter((x) => x !== g.id) : [...soRevisao, g.id])
                      }
                    >
                      {soRevisao.includes(g.id) ? "✓ Já estudei: só revisão e questões" : "Já estudei? Só revisão"}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
          {escolhidas.length >= MAX_MATERIAS && (
            <p className="prf-cronog-nota">No máximo {MAX_MATERIAS}: uma por dia útil. Tire uma para trocar.</p>
          )}
        </div>
      )}

      {passo === 3 && (
        <div className="prf-cronog-montar-corpo">
          <h2 className="prf-cronog-titulo">O que mais entra na semana?</h2>
          {extrasDoCurso.length === 0 && <p className="prf-cronog-sub">Este curso ainda não tem questões nem mapas: a semana fica com as aulas.</p>}
          <ul className="prf-cronog-extras">
            {extrasDoCurso.map((x) => (
              <li key={x}>
                <label className="prf-cronog-escolha-linha">
                  <input
                    type="checkbox"
                    checked={extras.includes(x)}
                    onChange={() => setExtras(extras.includes(x) ? extras.filter((y) => y !== x) : [...extras, x])}
                  />
                  <span className="prf-cronog-escolha-nome">
                    <TextoEmoji texto={NOME_EXTRA[x].titulo} />
                    <small>{NOME_EXTRA[x].texto}</small>
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <div className="prf-cronog-previa" aria-label="Como fica a semana">
            <p className="prf-cronog-olho">Como fica a semana</p>
            <ol>
              {previa.dias.map((d, i) => (
                <li key={i}>
                  <span className="prf-cronog-sem-dia">{DIA_CURTO[i]}</span>
                  {d.fila[0] && (
                    <span className="prf-cronog-cor" style={{ background: corDoGrupo(d.fila[0]) }} aria-hidden="true" />
                  )}
                  <span>
                    {d.titulo || (d.fila[0] ? nome(d.fila[0]) : "livre")}
                    {d.fila[0] && d.aulasPorDia === 0 ? " (revisão)" : ""}
                  </span>
                  <span className="prf-cronog-min">{horas(i < 5 ? tUtil : tFim)}</span>
                </li>
              ))}
            </ol>
          </div>
          {trocando && <p className="prf-cronog-nota">Isto troca o cronograma atual. O que já foi marcado como feito fica.</p>}
        </div>
      )}

      <footer className="prf-cronog-montar-fim">
        {passo > 1 ? (
          <button type="button" className="botao" onClick={() => setPasso(passo - 1)}>
            ← Voltar
          </button>
        ) : (
          onCancelar && (
            <button type="button" className="botao" onClick={onCancelar}>
              Cancelar
            </button>
          )
        )}
        {passo < 3 ? (
          <button
            type="button"
            className="botao botao-ouro"
            disabled={passo === 2 && escolhidas.length === 0}
            onClick={() => setPasso(passo + 1)}
          >
            Continuar →
          </button>
        ) : (
          <button type="button" className="botao botao-ouro" onClick={concluir}>
            ✓ Montar meu cronograma
          </button>
        )}
      </footer>
    </section>
  );
}
