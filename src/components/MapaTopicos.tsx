import { useMemo, useState } from "react";
import type { SubjectId } from "../lib/types";
import { SUBJECT_MAP } from "../data/subjects";
import { diagnosticarMaterias, type DiagnosticoBloco, type StatusBloco } from "../lib/retaFinal";

const ROTULO_STATUS: Record<StatusBloco, string> = {
  "sem-dados": "Sem dados (menos de 3 respostas)",
  verde: "Verde: 85% ou mais",
  amarelo: "Amarelo: 65% a 84%",
  vermelho: "Vermelho: abaixo de 65%",
};

const MATERIAS_INICIAIS = 6;

const formatarDecimal = (n: number) => n.toFixed(1).replace(".", ",");

interface MapaTopicosProps {
  diagnostico: DiagnosticoBloco[];
  temExternas: boolean;
  onReforco: (blocoIds: string[], quantidade: number) => void;
  onLancarExterna: () => void;
}

export default function MapaTopicos({ diagnostico, temExternas, onReforco, onLancarExterna }: MapaTopicosProps) {
  const materias = useMemo(() => diagnosticarMaterias(diagnostico), [diagnostico]);
  const posicao = useMemo(() => new Map(diagnostico.map((d, i) => [d.bloco.id, i + 1])), [diagnostico]);
  const [verTodos, setVerTodos] = useState(false);
  const [verTodasMaterias, setVerTodasMaterias] = useState(false);
  const [filtro, setFiltro] = useState<SubjectId | null>(null);

  const lista = filtro ? diagnostico.filter((d) => d.bloco.materia === filtro) : diagnostico;
  const visiveis = filtro || verTodos ? lista : lista.slice(0, 10);
  const piores = lista.slice(0, 5);
  const contagem = diagnostico.reduce<Record<StatusBloco, number>>(
    (acc, d) => ({ ...acc, [d.status]: acc[d.status] + 1 }),
    { "sem-dados": 0, verde: 0, amarelo: 0, vermelho: 0 },
  );

  return (
    <>
      <h2 className="secao-titulo">Mapa de pontos fracos</h2>
      <p className="conteudo-intro">
        A ordem é por <strong>pontos em jogo</strong>: quantas questões tendem a cair × a sua chance de errar. Entram a primeira resposta
        de cada questão do app (repetir mede memória; acerto no chute vale meio) e as provas feitas fora do app que você lançar. Com poucas
        respostas, o percentual é puxado para a média da matéria, para 1 acerto em 1 não virar verde.
      </p>
      {!temExternas && (
        <p className="sim-nota">
          Fez prova fora do app, no papel ou em outro site?{" "}
          <button className="link-botao" onClick={onLancarExterna}>
            Lance os erros por matéria e tópico
          </button>{" "}
          para o mapa contar.
        </p>
      )}
      <div className="mapa-legenda">
        {(Object.keys(ROTULO_STATUS) as StatusBloco[]).map((s) => (
          <span key={s}>
            <span className={`mapa-status mapa-${s}`} /> {ROTULO_STATUS[s]} ({contagem[s]})
          </span>
        ))}
      </div>

      <h3 className="rf-subtitulo">Quais matérias: ranking por pontos em jogo</h3>
      <div className="mapa-materias">
        {(verTodasMaterias ? materias : materias.slice(0, MATERIAS_INICIAIS)).map((m, i) => {
          const ativa = filtro === m.materia;
          const respondida = m.n + m.externo > 0;
          const pct = Math.round(m.p * 100);
          return (
            <button
              key={m.materia}
              className={`mapa-materia ${ativa ? "mapa-materia-ativa" : ""}`}
              onClick={() => setFiltro(ativa ? null : m.materia)}
              aria-pressed={ativa}
              title={ativa ? "Voltar a todos os tópicos" : "Ver só os tópicos desta matéria"}
            >
              <span className={`mapa-status mapa-${m.status}`} />
              <span className="mapa-materia-info">
                <span className="mapa-materia-nome">
                  <span className="mapa-posicao">{i + 1}.</span> {SUBJECT_MAP[m.materia].nome}
                </span>
                <span className="mapa-meta">
                  <span>{m.questoes} na prova</span>
                  <span>{respondida ? `estimado ${pct}%` : "sem respostas"}</span>
                  <span className="mapa-pontos">{formatarDecimal(m.pontosEmJogo)} pts em jogo</span>
                  {m.externo > 0 && <span>📝 {Math.round(m.externo)} de prova de fora</span>}
                </span>
                <span className="mapa-barra">
                  <span className={`mapa-barra-cheia mapa-${m.status}`} style={{ width: `${respondida ? pct : 0}%` }} />
                </span>
              </span>
            </button>
          );
        })}
      </div>
      {materias.length > MATERIAS_INICIAIS && (
        <button className="botao" onClick={() => setVerTodasMaterias((v) => !v)}>
          {verTodasMaterias ? `Mostrar só as ${MATERIAS_INICIAIS} primeiras` : `Ver as ${materias.length} matérias`}
        </button>
      )}

      <h3 className="rf-subtitulo">{filtro ? `Quais tópicos de ${SUBJECT_MAP[filtro].nome}` : "Quais tópicos: blocos por pontos em jogo"}</h3>
      {filtro && (
        <p className="mapa-filtro">
          {lista.length} tópicos desta matéria; o número é a posição no ranking geral dos {diagnostico.length} blocos.{" "}
          <button className="link-botao" onClick={() => setFiltro(null)}>
            Tirar o filtro
          </button>
        </p>
      )}
      <div className="resultado-acoes">
        <button className="botao botao-ouro" onClick={() => onReforco(piores.map((d) => d.bloco.id), 30)}>
          {filtro
            ? `Reforço dos ${piores.length} primeiros desta matéria (30 questões)`
            : "Reforço dos 5 primeiros da lista (30 questões)"}
        </button>
      </div>

      <div className="mapa-lista">
        {visiveis.map((d) => {
          const pctChute = d.marcadas >= 3 ? d.chutes / d.marcadas : 0;
          const pct = Math.round(d.p * 100);
          return (
            <div key={d.bloco.id} className="mapa-item">
              <span className={`mapa-status mapa-${d.status}`} title={ROTULO_STATUS[d.status]} />
              <div className="mapa-info">
                <div className="mapa-nome">
                  <span className="mapa-posicao">{posicao.get(d.bloco.id)}.</span>{" "}
                  <span className="sim-bloco-materia">{SUBJECT_MAP[d.bloco.materia].nome}</span> {d.bloco.nome}
                </div>
                <div className="mapa-meta">
                  <span>~{formatarDecimal(d.bloco.questoesEstimadas)} na prova</span>
                  <span>
                    {d.n > 0
                      ? `${d.acertosBrutos}/${d.n} na 1ª resposta · estimado ${pct}%${d.externo.questoes > 0 ? " com prova de fora" : ""}`
                      : d.externo.questoes > 0
                        ? `estimado ${pct}% (só prova de fora)`
                        : "nunca respondido"}
                  </span>
                  <span className="mapa-pontos">{formatarDecimal(d.pontosEmJogo)} pts em jogo</span>
                  <span>
                    {d.ineditas} inédita(s) de {d.banco}
                  </span>
                  {d.erradasAgora > 0 && <span className="mapa-alerta">{d.erradasAgora} errada(s) na última vez</span>}
                  {d.convictos > 0 && <span className="mapa-alerta">⚠ {d.convictos} erro(s) convicto(s)</span>}
                  {pctChute >= 0.3 && <span className="mapa-alerta">🎲 {Math.round(pctChute * 100)}% no chute</span>}
                  {d.externo.marcados > 0 && <span className="mapa-alerta">📝 {d.externo.marcados} erro(s) em prova de fora</span>}
                </div>
              </div>
              <button className="botao mapa-treinar" onClick={() => onReforco([d.bloco.id], 12)} disabled={d.banco === 0}>
                Treinar {Math.min(12, d.banco)}
              </button>
            </div>
          );
        })}
      </div>
      {!filtro && diagnostico.length > 10 && (
        <button className="botao" onClick={() => setVerTodos((v) => !v)}>
          {verTodos ? "Mostrar só os 10 primeiros" : `Ver todos os ${diagnostico.length} blocos`}
        </button>
      )}
    </>
  );
}
