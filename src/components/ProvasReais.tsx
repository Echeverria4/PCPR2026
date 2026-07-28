import { useState, type CSSProperties } from "react";
import { PROVAS_REAIS } from "../data/provasReais";
import { getProvasReaisResultados, salvarProvaRealResultado } from "../lib/storage";
import type { ProvaRealResultado } from "../lib/types";

function corFaixa(pct: number): string {
  if (pct >= 65) return "var(--verde)";
  if (pct >= 50) return "var(--ouro)";
  return "var(--vermelho)";
}

interface RegistroForm {
  acertos: string;
  total: string;
}

export default function ProvasReais() {
  const [resultados, setResultados] = useState<Record<string, ProvaRealResultado>>(() =>
    getProvasReaisResultados(),
  );
  const [form, setForm] = useState<Record<string, RegistroForm>>({});

  function atualizarCampo(provaId: string, campo: keyof RegistroForm, valor: string) {
    setForm((f) => ({ ...f, [provaId]: { ...f[provaId], [campo]: valor } }));
  }

  function salvar(provaId: string, totalPadrao: number) {
    const campos = form[provaId] ?? { acertos: "", total: "" };
    const acertos = parseInt(campos.acertos, 10);
    const total = parseInt(campos.total || String(totalPadrao), 10);
    if (Number.isNaN(acertos) || Number.isNaN(total) || total <= 0 || acertos < 0 || acertos > total) return;

    const resultado: ProvaRealResultado = { acertos, total, quando: new Date().toLocaleDateString("pt-BR") };
    setResultados(salvarProvaRealResultado(provaId, resultado));
    setForm((f) => ({ ...f, [provaId]: { acertos: "", total: "" } }));
  }

  return (
    <>
      <h2 className="secao-titulo">Provas reais</h2>
      <p className="conteudo-intro">
        Cadernos oficiais da FGV/UFPR para fazer fora do app, no PDF, cronometrado. As questões são da
        banca — depois de corrigir pelo gabarito, registre seu resultado aqui para acompanhar a evolução.
      </p>

      <div className="prova-lista">
        {PROVAS_REAIS.map((p) => {
          const resultado = resultados[p.id];
          const pct = resultado ? Math.round((resultado.acertos / resultado.total) * 100) : null;
          const campos = form[p.id] ?? { acertos: "", total: "" };
          return (
            <article
              key={p.id}
              className="prova-card"
              style={{ "--cor-prova": pct !== null ? corFaixa(pct) : "var(--borda)" } as CSSProperties}
            >
              <div className="prova-topo">
                <div>
                  <h3 className="prova-nome">{p.nome}</h3>
                  <div className="prova-meta">
                    {p.semana} · {p.detalhe}
                  </div>
                </div>
                <div className="prova-pct">{pct !== null ? `${pct}%` : "—"}</div>
              </div>

              <div className="prova-links">
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    className="botao prova-link"
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ↗ {l.label}
                  </a>
                ))}
              </div>

              <div className="prova-registro">
                {resultado && (
                  <span className="prova-registrado">
                    Registrado: {resultado.acertos}/{resultado.total} em {resultado.quando}
                  </span>
                )}
                <input
                  className="prova-input"
                  type="number"
                  inputMode="numeric"
                  placeholder="acertos"
                  value={campos.acertos}
                  onChange={(e) => atualizarCampo(p.id, "acertos", e.target.value)}
                />
                <span className="prova-de">de</span>
                <input
                  className="prova-input"
                  type="number"
                  inputMode="numeric"
                  placeholder={String(p.totalQuestoes)}
                  value={campos.total}
                  onChange={(e) => atualizarCampo(p.id, "total", e.target.value)}
                />
                <button className="botao" onClick={() => salvar(p.id, p.totalQuestoes)}>
                  {resultado ? "Atualizar" : "Salvar resultado"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
