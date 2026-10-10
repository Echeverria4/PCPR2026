interface AlternativaProps {
  letra: string;
  texto: string;
  /** Classes de estado já calculadas pelo chamador (correta, errada, selecionada). */
  classe?: string;
  disabled?: boolean;
  eliminada: boolean;
  onEscolher: () => void;
  /** Sem esta função o botão de riscar não aparece (ex.: questão já respondida). */
  onRiscar?: () => void;
}

/**
 * Alternativa com o botão de riscar ao lado. Riscar só apaga a alternativa visualmente
 * para o usuário: não consulta o gabarito, então não revela nada se ele riscar a certa.
 * Clicar numa alternativa riscada a reexibe em vez de marcá-la, para evitar marcar por engano.
 */
export default function Alternativa({ letra, texto, classe = "", disabled, eliminada, onEscolher, onRiscar }: AlternativaProps) {
  const riscada = eliminada && !!onRiscar;
  return (
    <div className="alternativa-linha">
      <button
        className={`alternativa ${classe} ${riscada ? "eliminada" : ""}`}
        onClick={riscada ? onRiscar : onEscolher}
        disabled={disabled}
        title={riscada ? "Alternativa riscada: clique para reexibir" : undefined}
      >
        <span className="letra">{letra}</span>
        <span className="alternativa-texto">{texto}</span>
      </button>
      {onRiscar && (
        <button
          className={`riscar ${riscada ? "riscar-ativo" : ""}`}
          onClick={onRiscar}
          title={riscada ? "Reexibir alternativa" : "Riscar alternativa (descartar)"}
          aria-label={riscada ? `Reexibir alternativa ${letra}` : `Riscar alternativa ${letra}`}
        >
          {riscada ? "↺" : "✕"}
        </button>
      )}
    </div>
  );
}
