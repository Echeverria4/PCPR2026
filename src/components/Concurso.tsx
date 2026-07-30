import { EDITAL_INFO } from "../data/subjects";
import {
  CONCURSO_CHEGADA,
  CONCURSO_DOCUMENTOS,
  CONCURSO_ESCOLARIDADE,
  CONCURSO_FASES,
  CONCURSO_INSCRICAO,
  CONCURSO_OBSERVACAO_ELETRONICOS,
  CONCURSO_PERMITIDO,
  CONCURSO_PROIBIDO,
  CONCURSO_PROVA,
  TAF_FEMININO,
  TAF_INFO,
  TAF_MASCULINO,
} from "../data/concurso";
import type { TafExercicio } from "../lib/types";

function TabelaTaf({ titulo, exercicios }: { titulo: string; exercicios: TafExercicio[] }) {
  return (
    <div className="taf-tabela-wrap">
      <h4 className="taf-tabela-titulo">{titulo}</h4>
      <div className="taf-tabela-scroll">
        <table className="taf-tabela">
          <thead>
            <tr>
              <th>Prova</th>
              <th>Tentativas</th>
              <th>Até 29 anos</th>
              <th>30–39 anos</th>
              <th>40–49 anos</th>
              <th>Mais de 50</th>
            </tr>
          </thead>
          <tbody>
            {exercicios.map((ex) => (
              <tr key={ex.ordem}>
                <td>
                  <strong>{ex.ordem}</strong> {ex.nome}
                </td>
                <td className="taf-tentativas">{ex.tentativas}</td>
                <td>{ex.faixas.ate29}</td>
                <td>{ex.faixas.de30a39}</td>
                <td>{ex.faixas.de40a49}</td>
                <td>{ex.faixas.mais50}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Concurso() {
  return (
    <>
      <h2 className="secao-titulo">Informações do concurso</h2>
      <p className="conteudo-intro">
        Dados oficiais extraídos do Edital 01/2026 PCPR (banca FGV) — cargo de Agente de Polícia
        Judiciária. Sempre confira o edital e o site oficial antes de qualquer decisão importante.
      </p>

      <div className="edital-faixa">
        <div className="edital-item">
          <strong>{EDITAL_INFO.cargo}</strong>
          <span>Cargo · banca {EDITAL_INFO.banca}</span>
        </div>
        <div className="edital-item">
          <strong>{EDITAL_INFO.remuneracaoInicial}</strong>
          <span>Remuneração inicial</span>
        </div>
        <div className="edital-item">
          <strong>{CONCURSO_INSCRICAO.periodo}</strong>
          <span>Período de inscrições</span>
        </div>
        <div className="edital-item">
          <strong>{CONCURSO_INSCRICAO.taxa}</strong>
          <span>Taxa de inscrição</span>
        </div>
      </div>

      <div className="conteudo-card">
        <p className="conteudo-texto">
          <strong>Escolaridade exigida:</strong> {CONCURSO_ESCOLARIDADE.requisito}
        </p>
        <p className="conteudo-texto">{CONCURSO_ESCOLARIDADE.observacao}</p>
      </div>

      <a
        className="botao botao-ouro concurso-link-inscricao"
        href={CONCURSO_INSCRICAO.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        ↗ Fazer inscrição / acompanhar o concurso no site oficial da FGV
      </a>

      <h3 className="concurso-subtitulo">Data e local da prova objetiva</h3>
      <div className="conteudo-card">
        <p className="conteudo-texto">
          <strong>{CONCURSO_PROVA.data}</strong>, das {CONCURSO_PROVA.horario}.
        </p>
        <p className="conteudo-texto">
          Cidades de aplicação: <strong>{CONCURSO_PROVA.cidades.join(", ")}</strong>.
        </p>
        <p className="conteudo-texto">{CONCURSO_PROVA.locaisDivulgacao}</p>
        <p className="conteudo-texto">{CONCURSO_PROVA.observacaoOutrasFases}</p>
      </div>

      <h3 className="concurso-subtitulo">Fases do concurso</h3>
      <ol className="concurso-fases">
        {CONCURSO_FASES.map((fase) => (
          <li key={fase}>{fase}</li>
        ))}
      </ol>

      <h3 className="concurso-subtitulo">Chegada e documentos no dia da prova</h3>
      <div className="conteudo-card">
        <p className="conteudo-texto">{CONCURSO_CHEGADA}</p>
        <h4 className="concurso-lista-titulo">Leve com você</h4>
        <ul className="concurso-lista">
          {CONCURSO_DOCUMENTOS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <h2 className="secao-titulo">TAF — Exame de Aptidão Física</h2>
      <p className="conteudo-intro">{TAF_INFO.resumo}</p>

      <div className="conteudo-card">
        <h4 className="concurso-lista-titulo">Regras gerais do TAF</h4>
        <ul className="concurso-lista">
          {TAF_INFO.regras.map((regra) => (
            <li key={regra}>{regra}</li>
          ))}
        </ul>
      </div>

      <TabelaTaf titulo="Tabela masculina" exercicios={TAF_MASCULINO} />
      <TabelaTaf titulo="Tabela feminina" exercicios={TAF_FEMININO} />

      <h2 className="secao-titulo">O que pode e o que não pode levar</h2>
      <div className="concurso-permissoes">
        <div className="concurso-permissao concurso-permissao-ok">
          <h4>✔ Pode levar</h4>
          <ul className="concurso-lista">
            {CONCURSO_PERMITIDO.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="concurso-permissao concurso-permissao-nao">
          <h4>✘ Não pode levar</h4>
          <ul className="concurso-lista">
            {CONCURSO_PROIBIDO.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="conteudo-curiosidade">{CONCURSO_OBSERVACAO_ELETRONICOS}</div>
    </>
  );
}
