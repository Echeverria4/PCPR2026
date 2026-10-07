import { useEffect, useMemo, useState } from "react";
import type { AttemptRecord, SimuladoAtivo, SimuladoResultado, SubjectId } from "../lib/types";
import { PROVA_MIX, SUBJECT_MAP } from "../data/subjects";
import {
  INICIO_PROVA,
  MARCOS,
  MINUTOS_CARTAO,
  ORCAMENTO_MIN,
  ORDEM_CADERNO,
  PLANO_RETA_FINAL,
  TATICAS_PROVA,
  DURACAO_SIMULADO_MIN,
  type AcaoPlano,
} from "../data/retaFinal";
import { contarIneditas, diagnosticarBlocos, resumirSimulado, restanteMs } from "../lib/retaFinal";
import { getRetaFinalChecks, salvarRetaFinalChecks } from "../lib/storage";
import { formatarMarco, formatarRelogio, horarioProva } from "../lib/format";
import MapaTopicos from "./MapaTopicos";
import CadernoErros from "./CadernoErros";

export type AncoraReta = "simulado" | "plano" | "mapa" | "caderno" | "taticas";
type AbaDestino = "conteudo" | "modelos-mentais" | "provas" | "concurso";

const ROTULO_ACAO: Record<AcaoPlano, string> = {
  simulado: "Ir ao simulado",
  reforco: "Treinar os 5 piores",
  mapa: "Ver o mapa",
  caderno: "Ver o caderno",
  provas: "Provas reais",
  conteudo: "Conteúdo",
  modelos: "Modelos mentais",
  revisao: "Revisão",
  taticas: "Ver as táticas",
  concurso: "Aba Concurso",
};

const pad = (n: number) => String(n).padStart(2, "0");
const dataLocal = (ms: number) => {
  const d = new Date(ms);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
const dataHora = (iso: string) => {
  const d = new Date(iso);
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)} ${pad(d.getHours())}h${pad(d.getMinutes())}`;
};

function contagemRegressiva(ms: number): string {
  const min = Math.floor(ms / 60_000);
  const dias = Math.floor(min / 1440);
  const horas = Math.floor((min % 1440) / 60);
  const minutos = min % 60;
  if (dias > 0) return `${dias} dia${dias > 1 ? "s" : ""} e ${horas}h`;
  if (horas > 0) return `${horas}h${pad(minutos)}`;
  return `${minutos} min`;
}

interface RetaFinalProps {
  attempts: AttemptRecord[];
  wrongCount: number;
  simuladoAtivo: SimuladoAtivo | null;
  simulados: SimuladoResultado[];
  ancora: AncoraReta | null;
  onAncoraUsada: () => void;
  onIniciarSimulado: () => void;
  onDescartarSimulado: () => void;
  onVerResultado: (r: SimuladoResultado) => void;
  onReforco: (blocoIds: string[], quantidade: number) => void;
  onRevisao: () => void;
  onIrPara: (aba: AbaDestino) => void;
}

export default function RetaFinal({
  attempts,
  wrongCount,
  simuladoAtivo,
  simulados,
  ancora,
  onAncoraUsada,
  onIniciarSimulado,
  onDescartarSimulado,
  onVerResultado,
  onReforco,
  onRevisao,
  onIrPara,
}: RetaFinalProps) {
  const [agora, setAgora] = useState(Date.now());
  const [checks, setChecks] = useState<Record<string, boolean>>(() => getRetaFinalChecks());
  const [cadernoAberto, setCadernoAberto] = useState(ancora === "caderno");

  useEffect(() => {
    const id = setInterval(() => setAgora(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);

  function rolarPara(alvo: AncoraReta) {
    if (alvo === "caderno") setCadernoAberto(true);
    requestAnimationFrame(() => document.getElementById(`rf-${alvo}`)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  useEffect(() => {
    if (!ancora) return;
    rolarPara(ancora);
    onAncoraUsada();
    // só reage a uma âncora nova vinda de outra tela
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ancora]);

  const ineditas = useMemo(() => contarIneditas(attempts), [attempts]);
  const repetidas = ORDEM_CADERNO.filter((m) => ineditas[m] < PROVA_MIX[m]);
  const piores = useMemo(() => diagnosticarBlocos(attempts).slice(0, 5).map((d) => d.bloco.id), [attempts]);

  const inicioProva = new Date(INICIO_PROVA).getTime();
  const falta = inicioProva - agora;
  const fimProva = inicioProva + DURACAO_SIMULADO_MIN * 60_000;
  const hoje = dataLocal(agora);

  function alternarCheck(id: string) {
    const novo = { ...checks, [id]: !checks[id] };
    setChecks(novo);
    salvarRetaFinalChecks(novo);
  }

  function executar(acao: AcaoPlano) {
    if (acao === "simulado") rolarPara("simulado");
    else if (acao === "mapa") rolarPara("mapa");
    else if (acao === "caderno") rolarPara("caderno");
    else if (acao === "taticas") rolarPara("taticas");
    else if (acao === "reforco") onReforco(piores, 30);
    else if (acao === "revisao") onRevisao();
    else if (acao === "provas") onIrPara("provas");
    else if (acao === "conteudo") onIrPara("conteudo");
    else if (acao === "modelos") onIrPara("modelos-mentais");
    else if (acao === "concurso") onIrPara("concurso");
  }

  const respondidasAtivo = simuladoAtivo ? simuladoAtivo.respostas.filter((r) => r.escolha !== null).length : 0;

  return (
    <div className="reta-final">
      <section className="rf-secao rf-hero">
        <div className="rf-contagem">
          {falta > 0 ? (
            <>
              <strong>{contagemRegressiva(falta)}</strong>
              <span>para a prova · domingo, 11/10, 13h às 18h · portões fecham às 12h30</span>
            </>
          ) : agora < fimProva ? (
            <strong>Prova em andamento. Nenhuma questão em branco!</strong>
          ) : (
            <strong>Prova realizada. Agora é esperar o gabarito.</strong>
          )}
        </div>
        <div className="rf-chaves">
          <p>
            <strong>50 pontos é só o piso.</strong> Passa quem tem 50+ e fica entre os 1.360 do Interior ou os 340 de Curitiba/RM na ampla
            concorrência, mais os empatados na última posição (9.18).
          </p>
          <p>
            <strong>Desempate:</strong> depois da idade, vêm os 65 específicos, TI e Ciências Forenses (19.3). <strong>Errar não desconta:</strong>{" "}
            nenhuma em branco.
          </p>
        </div>
      </section>

      <section className="rf-secao" id="rf-simulado">
        <h2 className="secao-titulo">Simulado modo prova</h2>
        {simuladoAtivo ? (
          <div className="rf-card rf-card-destaque">
            <p>
              <strong>Simulado em andamento:</strong> {respondidasAtivo}/{simuladoAtivo.questoes.length} respondidas ·{" "}
              {formatarRelogio(restanteMs(simuladoAtivo, agora))} restantes no relógio (ele não pausa).
            </p>
            <div className="resultado-acoes">
              <button className="botao botao-ouro" onClick={onIniciarSimulado}>
                Continuar simulado
              </button>
              <button
                className="botao botao-perigo"
                onClick={() => {
                  if (window.confirm("Descartar o simulado em andamento? As respostas dele não serão gravadas.")) onDescartarSimulado();
                }}
              >
                Descartar
              </button>
            </div>
          </div>
        ) : (
          <div className="rf-card">
            <p>
              100 questões na proporção do edital e na ordem do caderno (gerais e depois específicos), 5h de relógio corrido e sem correção
              até entregar. Marque a confiança em cada resposta. Para treinar o horário real, comece às 13h.
            </p>
            <div className="resultado-acoes">
              <button className="botao botao-ouro" onClick={onIniciarSimulado}>
                Iniciar simulado (5h)
              </button>
            </div>
            {repetidas.length > 0 && (
              <p className="sim-nota">
                O banco não tem inéditas suficientes para:{" "}
                {repetidas
                  .map((m: SubjectId) => `${SUBJECT_MAP[m].nome} (${ineditas[m]} inéditas para ${PROVA_MIX[m]} vagas)`)
                  .join("; ")}
                . O restante vem das questões vistas há mais tempo.
              </p>
            )}
          </div>
        )}

        {simulados.length > 0 && (
          <div className="rf-historico">
            {simulados.map((s, i) => {
              const r = resumirSimulado(s);
              const anterior = simulados[i + 1] ? resumirSimulado(simulados[i + 1]).acertos : null;
              const delta = anterior !== null ? r.acertos - anterior : null;
              return (
                <div key={s.id} className="rf-historico-item">
                  <span className="rf-historico-data">{dataHora(s.iniciadoEm)}</span>
                  <strong>
                    {r.acertos}/{r.total}
                  </strong>
                  {delta !== null && (
                    <span className={delta >= 0 ? "rf-delta-mais" : "rf-delta-menos"}>
                      {delta >= 0 ? `+${delta}` : delta}
                    </span>
                  )}
                  <span>
                    Específicos {r.especificos.acertos}/{r.especificos.total}
                  </span>
                  <span>{formatarRelogio(s.usadoMs)}</span>
                  <button className="botao" onClick={() => onVerResultado(s)}>
                    Ver correção
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="rf-secao" id="rf-plano">
        <h2 className="secao-titulo">Plano até a prova</h2>
        <p className="conteudo-intro">
          Montado no horário real da prova (13h às 18h) e com noites de sono preservadas: a memória do que foi estudado se consolida
          dormindo. Marque o que já fez.
        </p>
        <div className="rf-plano">
          {PLANO_RETA_FINAL.map((dia) => {
            const estado = dia.data < hoje ? "passado" : dia.data === hoje ? "hoje" : "futuro";
            return (
              <div key={dia.data} className={`rf-dia rf-dia-${estado}`}>
                <div className="rf-dia-cab">
                  <strong>{dia.titulo}</strong>
                  {estado === "hoje" && <span className="rf-hoje">hoje</span>}
                  <span className="rf-dia-foco">{dia.foco}</span>
                </div>
                <ul className="rf-itens">
                  {dia.itens.map((item) => (
                    <li key={item.id} className={checks[item.id] ? "rf-feito" : ""}>
                      <label className="rf-check">
                        <input type="checkbox" checked={!!checks[item.id]} onChange={() => alternarCheck(item.id)} />
                        <span>{item.texto}</span>
                      </label>
                      {item.acao && (
                        <button
                          className="botao rf-acao"
                          onClick={() => executar(item.acao!)}
                          disabled={item.acao === "revisao" && wrongCount === 0}
                        >
                          {item.acao === "revisao" ? `${ROTULO_ACAO.revisao} (${wrongCount})` : ROTULO_ACAO[item.acao]}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rf-secao" id="rf-mapa">
        <MapaTopicos attempts={attempts} onReforco={onReforco} />
      </section>

      <section className="rf-secao rf-caderno" id="rf-caderno">
        <CadernoErros attempts={attempts} aberto={cadernoAberto} onAlternar={setCadernoAberto} />
      </section>

      <section className="rf-secao" id="rf-taticas">
        <h2 className="secao-titulo">Táticas da prova</h2>
        <div className="rf-taticas">
          {TATICAS_PROVA.map((t) => (
            <div key={t.titulo} className="rf-card">
              <h3 className="rf-tatica-titulo">{t.titulo}</h3>
              <p>{t.texto}</p>
            </div>
          ))}
        </div>

        <h3 className="rf-subtitulo">Marcos de tempo (na ordem do caderno)</h3>
        <div className="tabela-rolagem">
          <table className="resultado-tabela">
            <thead>
              <tr>
                <th>Matéria</th>
                <th>Questões</th>
                <th>Minutos</th>
                <th>Terminar até</th>
                <th>No dia</th>
              </tr>
            </thead>
            <tbody>
              {MARCOS.map((m) => (
                <tr key={m.materia}>
                  <td>{SUBJECT_MAP[m.materia].nome}</td>
                  <td>{PROVA_MIX[m.materia]}</td>
                  <td>{ORCAMENTO_MIN[m.materia]}</td>
                  <td>{formatarMarco(m.ateMin)}</td>
                  <td>{horarioProva(m.ateMin)}</td>
                </tr>
              ))}
              <tr>
                <td>Cartão-resposta (o que faltar)</td>
                <td>—</td>
                <td>{MINUTOS_CARTAO}</td>
                <td>{formatarMarco(MARCOS[MARCOS.length - 1].ateMin + MINUTOS_CARTAO)}</td>
                <td>{horarioProva(MARCOS[MARCOS.length - 1].ateMin + MINUTOS_CARTAO)}</td>
              </tr>
              <tr>
                <td>Folga</td>
                <td>—</td>
                <td>{DURACAO_SIMULADO_MIN - MARCOS[MARCOS.length - 1].ateMin - MINUTOS_CARTAO}</td>
                <td>{formatarMarco(DURACAO_SIMULADO_MIN)}</td>
                <td>{horarioProva(DURACAO_SIMULADO_MIN)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="sim-nota">
          Documentos, horários e o que é proibido levar estão detalhados na aba{" "}
          <button className="link-botao" onClick={() => onIrPara("concurso")}>
            Concurso
          </button>
          .
        </p>
      </section>
    </div>
  );
}
