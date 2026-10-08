import { useEffect, useMemo, useState } from "react";
import type { Confianca, SimuladoResultado as Resultado, SubjectId } from "../lib/types";
import { SUBJECT_MAP } from "../data/subjects";
import { ORCAMENTO_MIN, ROTULO_CONFIANCA } from "../data/retaFinal";
import { QUESTAO_POR_ID, blocoDaQuestao, resumirSimulado } from "../lib/retaFinal";
import { formatarRelogio, formatarSegundos } from "../lib/format";
import FimDoSimulado from "./FimDoSimulado";

const LETRAS = ["A", "B", "C", "D", "E"];
const PISO = 50;

type Filtro = "erradas" | "branco" | "convictas" | "chutes" | "certas" | "todas";

const ROTULO_FILTRO: Record<Filtro, string> = {
  erradas: "Erradas",
  branco: "Em branco",
  convictas: "Erros convictos",
  chutes: "Chutes",
  certas: "Certas",
  todas: "Todas",
};

interface SimuladoResultadoProps {
  resultado: Resultado;
  /** Abre direto a tela animada de fim do simulado (logo após a entrega). */
  animar?: boolean;
  simuladoEmAndamento: boolean;
  onReiniciar: () => void;
  onVoltar: () => void;
  onReforco: (blocoIds: string[], quantidade: number) => void;
  onAbrirCaderno: () => void;
}

export default function SimuladoResultado({
  resultado,
  animar,
  simuladoEmAndamento,
  onReiniciar,
  onVoltar,
  onReforco,
  onAbrirCaderno,
}: SimuladoResultadoProps) {
  const resumo = useMemo(() => resumirSimulado(resultado), [resultado]);
  const [filtro, setFiltro] = useState<Filtro>(() =>
    resultado.questoes.some((q) => q.escolha !== null && !q.acertou) ? "erradas" : "todas",
  );
  const [mostrarFim, setMostrarFim] = useState(() => !!animar);
  const [rolarParaCorrecao, setRolarParaCorrecao] = useState(false);

  // "Revisar erradas" / "Ver acertos": fecha a tela final e desce até a correção já filtrada.
  useEffect(() => {
    if (mostrarFim || !rolarParaCorrecao) return;
    setRolarParaCorrecao(false);
    document.getElementById("sim-correcao")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [mostrarFim, rolarParaCorrecao]);

  const abrirCorrecao = (f: Filtro) => {
    setFiltro(f);
    setMostrarFim(false);
    setRolarParaCorrecao(true);
  };

  const parcial = (m: SubjectId) => resumo.porMateria.find((p) => p.materia === m);
  const linhaDesempate = (rotulo: string, acertos: number, total: number) => (
    <div className="sim-desempate-item" key={rotulo}>
      <strong>
        {acertos}/{total}
      </strong>
      <span>{rotulo}</span>
    </div>
  );

  const convictos = resumo.confianca.certeza.erros;
  const acertosChute = resumo.confianca.chute.acertos;
  const marcadasCerteza = resumo.confianca.certeza.acertos + resumo.confianca.certeza.erros;
  const precisaoCerteza = marcadasCerteza ? resumo.confianca.certeza.acertos / marcadasCerteza : null;
  const faltam = PISO - resumo.acertos;

  const filtrar = (f: Filtro) =>
    resultado.questoes
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => {
        if (f === "erradas") return q.escolha !== null && !q.acertou;
        if (f === "branco") return q.escolha === null;
        if (f === "convictas") return q.escolha !== null && !q.acertou && q.confianca === "certeza";
        if (f === "chutes") return q.confianca === "chute";
        if (f === "certas") return q.acertou;
        return true;
      });
  const lista = filtrar(filtro);
  const piores = resumo.blocosPerdidos.slice(0, 5).map((b) => b.bloco.id);

  return (
    <div className="sim-resultado">
      <div className="resultado-hero">
        <div className="resultado-numero">
          {resumo.acertos} / {resumo.total}
        </div>
        <div className="resultado-legenda">
          {faltam > 0
            ? `Abaixo do piso de ${PISO} pontos do edital (9.18): faltaram ${faltam}.`
            : `Acima do piso de ${PISO} pontos (9.18). O corte real é a posição na sua região, então cada ponto a mais conta.`}
        </div>
        <div className="resultado-legenda">
          Tempo usado: {formatarRelogio(resultado.usadoMs)} de {formatarRelogio(resultado.duracaoMin * 60_000)}
          {resultado.encerradoPorTempo ? " (encerrado pelo tempo)" : ""} · {resumo.branco} em branco
        </div>
        <button className="botao resultado-rever" onClick={() => setMostrarFim(true)}>
          ▶ Rever a tela final
        </button>
      </div>

      {resumo.branco > 0 && (
        <div className="sim-aviso">
          {resumo.branco} questão(ões) em branco valem zero (9.10). Chutando todas, a média seria +{(resumo.branco / 5).toFixed(1).replace(".", ",")}{" "}
          ponto(s). Na prova, não entregue nada em branco.
        </div>
      )}

      <h2 className="secao-titulo">Ordem de desempate (19.3)</h2>
      <p className="conteudo-intro">
        Depois da idade, empate se decide nesta ordem. Na margem do corte, ponto nos específicos vale mais do que ponto nos gerais.
      </p>
      <div className="sim-desempate">
        {linhaDesempate("Específicos", resumo.especificos.acertos, resumo.especificos.total)}
        {(["ti", "for"] as SubjectId[]).map((m) => {
          const p = parcial(m);
          return p ? linhaDesempate(SUBJECT_MAP[m].nome, p.acertos, p.total) : null;
        })}
        {linhaDesempate("Gerais", resumo.gerais.acertos, resumo.gerais.total)}
        {(["pt", "cont"] as SubjectId[]).map((m) => {
          const p = parcial(m);
          return p ? linhaDesempate(SUBJECT_MAP[m].nome, p.acertos, p.total) : null;
        })}
      </div>

      <h2 className="secao-titulo">Por matéria</h2>
      <div className="tabela-rolagem">
        <table className="resultado-tabela">
          <thead>
            <tr>
              <th>Matéria</th>
              <th>Acertos</th>
              <th>Branco</th>
              <th>Tempo</th>
              <th>Orçamento</th>
            </tr>
          </thead>
          <tbody>
            {resumo.porMateria.map((p) => {
              const minutos = p.tempoMs / 60_000;
              const orcamento = ORCAMENTO_MIN[p.materia];
              return (
                <tr key={p.materia}>
                  <td>{SUBJECT_MAP[p.materia]?.nome ?? p.materia}</td>
                  <td>
                    {p.acertos}/{p.total}
                  </td>
                  <td>{p.branco || "—"}</td>
                  <td className={minutos > orcamento * 1.15 ? "sim-estourou" : ""}>{formatarSegundos(p.tempoMs / 1000)}</td>
                  <td>{orcamento} min</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="sim-nota">Tempo = tempo com a questão aberta na tela. Em vermelho, mais de 15% acima do orçamento da matéria.</p>

      <h2 className="secao-titulo">Confiança × resultado</h2>
      <div className="tabela-rolagem">
        <table className="resultado-tabela">
          <thead>
            <tr>
              <th>Marcou</th>
              <th>Acertou</th>
              <th>Errou</th>
            </tr>
          </thead>
          <tbody>
            {(["certeza", "duvida", "chute", "sem"] as (Confianca | "sem")[]).map((c) => {
              const v = resumo.confianca[c];
              if (c === "sem" && v.acertos + v.erros === 0) return null;
              return (
                <tr key={c}>
                  <td>{c === "sem" ? "Sem marcação" : ROTULO_CONFIANCA[c]}</td>
                  <td>{v.acertos}</td>
                  <td className={c === "certeza" && v.erros > 0 ? "sim-estourou" : ""}>{v.erros}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ul className="sim-leitura">
        {convictos > 0 && (
          <li>
            <strong>{convictos} erro(s) convicto(s):</strong> você marcou certeza e errou. É conceito errado que iria para a prova; corrija
            primeiro (filtro "Erros convictos" abaixo).
          </li>
        )}
        {precisaoCerteza !== null && precisaoCerteza < 0.9 && marcadasCerteza >= 10 && (
          <li>
            Suas certezas acertaram {Math.round(precisaoCerteza * 100)}%. Na prova, desconfie um pouco mais e releia o enunciado antes de
            marcar.
          </li>
        )}
        {acertosChute > 0 && (
          <li>
            <strong>{acertosChute} acerto(s) no chute:</strong> o ponto veio, o conhecimento não. Eles entram no caderno de erros.
          </li>
        )}
        {resumo.confianca.sem.acertos + resumo.confianca.sem.erros > 0 && (
          <li>Marque a confiança em todas no próximo simulado: é ela que separa erro convicto de chute.</li>
        )}
      </ul>

      {resumo.blocosPerdidos.length > 0 && (
        <>
          <h2 className="secao-titulo">Onde os pontos foram perdidos</h2>
          <div className="tabela-rolagem">
            <table className="resultado-tabela">
              <thead>
                <tr>
                  <th>Bloco</th>
                  <th>Perdidas</th>
                </tr>
              </thead>
              <tbody>
                {resumo.blocosPerdidos.slice(0, 10).map((b) => (
                  <tr key={b.bloco.id}>
                    <td>
                      <span className="sim-bloco-materia">{SUBJECT_MAP[b.bloco.materia].nome}</span> {b.bloco.nome}
                    </td>
                    <td>
                      {b.perdidas}/{b.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="resultado-acoes">
            <button className="botao botao-ouro" onClick={() => onReforco(piores, 30)}>
              Reforço dos {piores.length} blocos que mais custaram (30 questões)
            </button>
          </div>
        </>
      )}

      <h2 className="secao-titulo sim-ancora-correcao" id="sim-correcao">
        Correção
      </h2>
      <div className="sim-filtros">
        {(Object.keys(ROTULO_FILTRO) as Filtro[]).map((f) => (
          <button key={f} className={`confianca-chip ${filtro === f ? "confianca-ativa" : ""}`} onClick={() => setFiltro(f)}>
            {ROTULO_FILTRO[f]} ({filtrar(f).length})
          </button>
        ))}
      </div>
      {lista.length === 0 && <p className="vazio">Nenhuma questão neste filtro.</p>}
      {lista.map(({ q, i }) => {
        const questao = QUESTAO_POR_ID.get(q.id);
        if (!questao) return null;
        const status = q.escolha === null ? "Em branco" : q.acertou ? "Acertou" : "Errou";
        return (
          <div key={q.id} className="questao-card sim-correcao">
            <div className="questao-tags">
              <span className={`questao-tag sim-status-${q.escolha === null ? "branco" : q.acertou ? "certa" : "errada"}`}>
                {i + 1}. {status}
              </span>
              <span className="questao-tag">{SUBJECT_MAP[q.materia].nome}</span>
              <span className="questao-tag">{blocoDaQuestao(questao).nome.split(":")[0]}</span>
              {q.confianca && <span className="questao-tag">{ROTULO_CONFIANCA[q.confianca]}</span>}
              {questao.fonte && <span className="questao-tag questao-tag-fonte">{questao.fonte}</span>}
            </div>
            <p className="questao-enunciado">{questao.enunciado}</p>
            <div className="alternativas">
              {q.ordem.map((original, pos) => {
                let classe = "alternativa";
                if (original === questao.correta) classe += " correta";
                else if (pos === q.escolha) classe += " errada";
                return (
                  <div key={pos} className={classe}>
                    <span className="letra">{LETRAS[pos]}</span>
                    <span>{questao.alternativas[original]}</span>
                  </div>
                );
              })}
            </div>
            <div className="explicacao">
              <strong>{questao.topico}. </strong>
              {questao.explicacao}
              <div className="questao-tempo-resposta">⏱ {formatarSegundos(q.tempoMs / 1000)} com a questão aberta</div>
            </div>
          </div>
        );
      })}

      <div className="resultado-acoes">
        <button className="botao botao-ouro" onClick={onVoltar}>
          Voltar à Reta final
        </button>
        <button className="botao" onClick={onAbrirCaderno}>
          Abrir caderno de erros
        </button>
      </div>

      {mostrarFim && (
        <FimDoSimulado
          resultado={resultado}
          resumo={resumo}
          piso={PISO}
          simuladoEmAndamento={simuladoEmAndamento}
          onReiniciar={onReiniciar}
          onRevisarErradas={() => abrirCorrecao("erradas")}
          onVerCertas={() => abrirCorrecao("certas")}
          onFechar={() => setMostrarFim(false)}
        />
      )}
    </div>
  );
}
