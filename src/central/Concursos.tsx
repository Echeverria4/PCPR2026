import { useEffect, useState } from "react";
import type { AbrirCurso } from "./Central";
import { CONCURSOS, MATERIAS_COMUNS, MATERIAS_FORA, contagem, emQuantos, type MateriaComum } from "./concursos2027";
import QuadroMaterias, { BarraAvanco, SIMBOLO, TEXTO_COBRE, useAvancoPrf, type Avanco } from "./QuadroMaterias";
import { Emoji } from "../icones/Emoji";

/*
 * Aba Concursos 2027 da Central (pedido de 22/11/26): o que se estuda pela PRF Policial e serve para a PMPR, a
 * Polícia Penal Federal e a Polícia Penal do Paraná, matéria por matéria. ?materia=<id> abre a matéria pedida.
 */

const NOME = Object.fromEntries(CONCURSOS.map((c) => [c.id, c.nome])) as Record<string, string>;
const CURTO = Object.fromEntries(CONCURSOS.map((c) => [c.id, c.curto])) as Record<string, string>;

function lista(nomes: string[]) {
  return nomes.length <= 1 ? nomes.join("") : `${nomes.slice(0, -1).join(", ")} e ${nomes[nomes.length - 1]}`;
}

const EM_TODOS = MATERIAS_COMUNS.filter((m) => emQuantos(m) === CONCURSOS.length);

export default function Concursos({ onAbrir }: { onAbrir: AbrirCurso }) {
  const avanco = useAvancoPrf();
  const [abertas, setAbertas] = useState<Set<string>>(() => {
    const m = new URLSearchParams(window.location.search).get("materia");
    return new Set(m ? [m] : []);
  });
  const [rolar, setRolar] = useState<string | null>(() => new URLSearchParams(window.location.search).get("materia"));

  useEffect(() => {
    if (!rolar) return;
    document.getElementById(`cq-${rolar}`)?.scrollIntoView({ block: "start", behavior: "smooth" });
    setRolar(null);
  }, [rolar]);

  function alternar(id: string, aberta: boolean) {
    setAbertas((antes) => {
      if (antes.has(id) === aberta) return antes;
      const novo = new Set(antes);
      if (aberta) novo.add(id);
      else novo.delete(id);
      return novo;
    });
  }

  function irPara(id: string) {
    alternar(id, true);
    setRolar(id);
  }

  return (
    <div className="cq-pagina">
      <p className="cx-intro">
        Você estuda pela PRF Policial. Aqui está o que dessas matérias cai também na PM do Paraná, na Polícia Penal
        Federal e na Polícia Penal do Paraná. Tudo saiu do último edital de cada concurso: quando sair o edital novo,
        pode mudar.
      </p>

      <section className="cx-card cq-destaque">
        <h2 className="cx-card-titulo">
          <Emoji e="🎯" /> Cai nos 4 concursos
        </h2>
        <p>
          {lista(EM_TODOS.map((m) => m.nome))}. Estudando essas {EM_TODOS.length} matérias pela PRF, você já estuda
          para todos.
        </p>
        <TotalEmTodos avanco={avanco} />
      </section>

      <h2 className="cq-subtitulo">Os concursos</h2>
      <div className="cq-concursos cq-quatro">
        {CONCURSOS.map((c) => {
          const n = contagem(c.id);
          return (
            <section key={c.id} className="cq-concurso">
              <h3>
                <span className="cq-sigla">{c.curto}</span> {c.nome}
              </h3>
              <p className="cq-previsao">{c.previsao}</p>
              <p>{c.edital}</p>
              <p>{c.prova}</p>
              {c.id !== "prf" && (
                <p className="cq-conta">
                  {n.sim} matérias da PRF caem aqui{n.parte > 0 ? ` (+${n.parte} em parte)` : ""}.
                </p>
              )}
              <p className="cq-dica">{c.dica}</p>
            </section>
          );
        })}
      </div>

      <section className="cx-card">
        <div className="cx-card-topo">
          <h2 className="cx-card-titulo">
            <Emoji e="✅" /> Quadro das matérias
          </h2>
        </div>
        <QuadroMaterias avanco={avanco} onMateria={irPara} />
        <p className="cx-card-nota">Toque no nome da matéria para ver o que cada concurso pede.</p>
      </section>

      <h2 className="cq-subtitulo">Matéria por matéria</h2>
      <div className="cq-materias">
        {MATERIAS_COMUNS.map((m) => (
          <Materia
            key={m.id}
            m={m}
            aberta={abertas.has(m.id)}
            avanco={avanco?.[m.id]}
            onAlternar={(v) => alternar(m.id, v)}
            onEstudar={() => onAbrir("prf-policial", { aba: "aulas", grupo: m.grupos[0] })}
          />
        ))}
      </div>

      <h2 className="cq-subtitulo">Só nos outros concursos</h2>
      <p className="cq-texto-fraco">A PRF não cobra estas matérias: elas ficam para estudar à parte.</p>
      <div className="cq-concursos">
        {MATERIAS_FORA.map((f) => (
          <section key={f.id} className="cq-concurso">
            <h3>
              <Emoji e={f.icone} /> {f.nome}
            </h3>
            <p className="cq-chips">
              {f.concursos.map((c) => (
                <span key={c} className="cq-chip cq-sim" title={NOME[c]}>
                  {CURTO[c]}
                </span>
              ))}
            </p>
            <p>{f.topicos}</p>
            {f.links && (
              <p className="cq-acoes">
                {f.links.map((l) => (
                  <button key={l.rotulo} type="button" className="cx-link" onClick={() => onAbrir(l.curso, l.entrada)}>
                    {l.rotulo} →
                  </button>
                ))}
              </p>
            )}
          </section>
        ))}
      </div>

      <p className="cx-card-nota cq-fontes">
        Fontes: Edital PRF nº 1/2021 (Cebraspe); Edital nº 1 – DEPEN, de 4/5/2020, cargo de Agente Federal de Execução
        Penal (Cebraspe); Edital nº 15/2024 do DEPPEN-PR (Instituto AOCP); Edital nº 01 – Soldado PMPR-2025 (IBFC).
      </p>
    </div>
  );
}

function TotalEmTodos({ avanco }: { avanco: Record<string, Avanco> | null }) {
  if (!avanco) return null;
  let feitas = 0;
  let total = 0;
  for (const m of EM_TODOS) {
    feitas += avanco[m.id]?.feitas ?? 0;
    total += avanco[m.id]?.total ?? 0;
  }
  if (total === 0) return null;
  return (
    <div className="cq-total">
      <span>Aulas dessas matérias já vistas na PRF Policial</span>
      <BarraAvanco a={{ feitas, total }} />
    </div>
  );
}

interface MateriaProps {
  m: MateriaComum;
  aberta: boolean;
  avanco: Avanco | undefined;
  onAlternar: (aberta: boolean) => void;
  onEstudar: () => void;
}

function Materia({ m, aberta, avanco, onAlternar, onEstudar }: MateriaProps) {
  const caem = CONCURSOS.filter((c) => m.em[c.id] !== "nao");
  const naoCai = CONCURSOS.filter((c) => m.em[c.id] === "nao");
  return (
    <details
      id={`cq-${m.id}`}
      className="cq-materia"
      open={aberta}
      onToggle={(e) => onAlternar((e.currentTarget as HTMLDetailsElement).open)}
    >
      <summary>
        <span className="cq-materia-nome">
          <Emoji e={m.icone} /> {m.nome}
        </span>
        <span className="cq-chips">
          {CONCURSOS.map((c) => (
            <span key={c.id} className={`cq-chip cq-${m.em[c.id]}`} title={`${c.nome}: ${TEXTO_COBRE[m.em[c.id]]}`}>
              {SIMBOLO[m.em[c.id]]} {c.curto}
            </span>
          ))}
        </span>
        <BarraAvanco a={avanco} />
      </summary>
      <div className="cq-corpo">
        {m.nucleo && (
          <p className="cq-nucleo">
            <strong>Cai em todos:</strong> {m.nucleo}
          </p>
        )}
        {caem.map((c) => (
          <div key={c.id} className="cq-bloco">
            <h4>
              <span className={`cq-chip cq-${m.em[c.id]}`}>{c.curto}</span> {c.nome}
            </h4>
            <p>{m.pede[c.id]}</p>
            {m.falta?.[c.id] && (
              <p className="cq-falta">
                <strong>Fora da PRF:</strong> {m.falta[c.id]}
              </p>
            )}
          </div>
        ))}
        {naoCai
          .filter((c) => m.pede[c.id] !== "Não cai.")
          .map((c) => (
            <p key={c.id} className="cq-nao-cai">
              <span className="cq-chip cq-nao">{c.curto}</span> {m.pede[c.id]}
            </p>
          ))}
        {naoCai.some((c) => m.pede[c.id] === "Não cai.") && (
          <p className="cq-nao-cai">
            Não cai em: {lista(naoCai.filter((c) => m.pede[c.id] === "Não cai.").map((c) => c.nome))}.
          </p>
        )}
        <p className="cq-acoes">
          <button type="button" className="botao botao-ouro cx-botao-peq" onClick={onEstudar}>
            Estudar na PRF Policial →
          </button>
        </p>
      </div>
    </details>
  );
}
