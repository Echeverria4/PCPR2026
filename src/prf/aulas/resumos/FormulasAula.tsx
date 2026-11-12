import type { Formula } from "./tipos";

interface Props {
  formulas: Formula[];
  /** Nível do título: 4 no resumo, 3 no mapa mental. */
  nivel?: 3 | 4;
  /** Modo memória do mapa: cada fórmula fica escondida até a pessoa tocar nela. */
  memoria?: boolean;
  /** Chaves abertas no modo memória: "f0", "f1"… */
  abertos?: Set<string>;
  onAlternar?: (chave: string) => void;
}

/** Lista das fórmulas da aula, para consulta rápida. No modo memória, tenta-se lembrar antes de ver. */
export default function FormulasAula({ formulas, nivel = 4, memoria = false, abertos, onAlternar }: Props) {
  const Titulo = nivel === 3 ? "h3" : "h4";
  const vistas = formulas.filter((_, i) => abertos?.has(`f${i}`)).length;
  return (
    <section className="prf-formulas" data-formulas>
      <Titulo className="prf-formulas-titulo">📐 {formulas.length === 1 ? "Fórmula da aula" : "Fórmulas da aula"}</Titulo>
      {memoria && (
        <p className="prf-formulas-dica" aria-live="polite">
          Tente lembrar cada fórmula pelo nome. Depois toque para conferir. Vistas: {vistas} de {formulas.length}
        </p>
      )}
      <ul className="prf-formulas-lista">
        {formulas.map((f, i) => {
          const chave = `f${i}`;
          const escondida = memoria && !abertos?.has(chave);
          return (
            <li key={f.nome} className="prf-formula">
              {memoria && onAlternar ? (
                <button type="button" className="prf-formula-botao" aria-expanded={!escondida} onClick={() => onAlternar(chave)}>
                  <span className="prf-formula-nome">{f.nome}</span>
                  <span className="prf-formula-pista">{escondida ? "toque para ver" : "toque para esconder"}</span>
                </button>
              ) : (
                <span className="prf-formula-nome">{f.nome}</span>
              )}
              {!escondida && (
                <>
                  <span className="prf-formula-expr">{f.expr}</span>
                  {f.obs && <span className="prf-formula-obs">{f.obs}</span>}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
