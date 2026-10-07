import { useMemo, useState } from "react";
import type { AttemptRecord } from "../lib/types";
import { SUBJECT_MAP } from "../data/subjects";
import { diagnosticarBlocos, type StatusBloco } from "../lib/retaFinal";

const ROTULO_STATUS: Record<StatusBloco, string> = {
  "sem-dados": "Sem dados (menos de 3 respostas)",
  verde: "Verde: 85% ou mais",
  amarelo: "Amarelo: 65% a 84%",
  vermelho: "Vermelho: abaixo de 65%",
};

const formatarDecimal = (n: number) => n.toFixed(1).replace(".", ",");

interface MapaTopicosProps {
  attempts: AttemptRecord[];
  onReforco: (blocoIds: string[], quantidade: number) => void;
}

export default function MapaTopicos({ attempts, onReforco }: MapaTopicosProps) {
  const diagnostico = useMemo(() => diagnosticarBlocos(attempts), [attempts]);
  const [verTodos, setVerTodos] = useState(false);
  const visiveis = verTodos ? diagnostico : diagnostico.slice(0, 10);
  const piores = diagnostico.slice(0, 5);
  const contagem = diagnostico.reduce<Record<StatusBloco, number>>(
    (acc, d) => ({ ...acc, [d.status]: acc[d.status] + 1 }),
    { "sem-dados": 0, verde: 0, amarelo: 0, vermelho: 0 },
  );

  return (
    <>
      <h2 className="secao-titulo">Mapa de pontos fracos</h2>
      <p className="conteudo-intro">
        A matéria foi dividida em {diagnostico.length} blocos. A ordem é por <strong>pontos em jogo</strong>: quantas questões do bloco
        tendem a cair × a sua chance de errar. Conta só a primeira resposta de cada questão (repetir mede memória), acerto no chute vale
        meio e, com poucas respostas, o percentual é puxado para a média da matéria, para 1 acerto em 1 não virar verde.
      </p>
      <div className="mapa-legenda">
        {(Object.keys(ROTULO_STATUS) as StatusBloco[]).map((s) => (
          <span key={s}>
            <span className={`mapa-status mapa-${s}`} /> {ROTULO_STATUS[s]} ({contagem[s]})
          </span>
        ))}
      </div>

      <div className="resultado-acoes">
        <button className="botao botao-ouro" onClick={() => onReforco(piores.map((d) => d.bloco.id), 30)}>
          Reforço dos 5 primeiros da lista (30 questões)
        </button>
      </div>

      <div className="mapa-lista">
        {visiveis.map((d, i) => {
          const pctChute = d.marcadas >= 3 ? d.chutes / d.marcadas : 0;
          return (
            <div key={d.bloco.id} className="mapa-item">
              <span className={`mapa-status mapa-${d.status}`} title={ROTULO_STATUS[d.status]} />
              <div className="mapa-info">
                <div className="mapa-nome">
                  <span className="mapa-posicao">{i + 1}.</span> <span className="sim-bloco-materia">{SUBJECT_MAP[d.bloco.materia].nome}</span>{" "}
                  {d.bloco.nome}
                </div>
                <div className="mapa-meta">
                  <span>~{formatarDecimal(d.bloco.questoesEstimadas)} na prova</span>
                  <span>
                    {d.n > 0 ? `${d.acertosBrutos}/${d.n} na 1ª resposta · estimado ${Math.round(d.p * 100)}%` : "nunca respondido"}
                  </span>
                  <span className="mapa-pontos">{formatarDecimal(d.pontosEmJogo)} pts em jogo</span>
                  <span>
                    {d.ineditas} inédita(s) de {d.banco}
                  </span>
                  {d.erradasAgora > 0 && <span className="mapa-alerta">{d.erradasAgora} errada(s) na última vez</span>}
                  {d.convictos > 0 && <span className="mapa-alerta">⚠ {d.convictos} erro(s) convicto(s)</span>}
                  {pctChute >= 0.3 && <span className="mapa-alerta">🎲 {Math.round(pctChute * 100)}% no chute</span>}
                </div>
              </div>
              <button className="botao mapa-treinar" onClick={() => onReforco([d.bloco.id], 12)} disabled={d.banco === 0}>
                Treinar {Math.min(12, d.banco)}
              </button>
            </div>
          );
        })}
      </div>
      {diagnostico.length > 10 && (
        <button className="botao" onClick={() => setVerTodos((v) => !v)}>
          {verTodos ? "Mostrar só os 10 primeiros" : `Ver todos os ${diagnostico.length} blocos`}
        </button>
      )}
    </>
  );
}
