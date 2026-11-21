import { Component, type ReactNode } from "react";

/** Erro de página aberta antes de um deploy: a parte da versão antiga já não existe no servidor. */
function ehErroDeVersao(erro: unknown): boolean {
  const texto = erro instanceof Error ? erro.message : String(erro);
  return /dynamically imported module|Importing a module script failed|Unable to preload CSS/i.test(texto);
}

type Estado = { falhou: boolean; versao: boolean };

/**
 * Em vez de a tela ficar branca quando uma parte do app não abre, mostra um aviso curto com o botão
 * Recarregar. A recarga automática depois de um deploy fica no index.html.
 */
export default class ProtecaoErros extends Component<{ children: ReactNode }, Estado> {
  state: Estado = { falhou: false, versao: false };

  static getDerivedStateFromError(erro: unknown): Estado {
    return { falhou: true, versao: ehErroDeVersao(erro) };
  }

  render() {
    if (!this.state.falhou) return this.props.children;
    const { versao } = this.state;
    return (
      <div className="aviso-recarregar" role="alert">
        <p>
          <strong>{versao ? "O app foi atualizado." : "Algo deu errado nesta tela."}</strong>
        </p>
        <p>{versao ? "Toque em Recarregar para abrir a versão nova." : "Toque em Recarregar para tentar de novo."}</p>
        <button type="button" className="botao botao-ouro" onClick={() => window.location.reload()}>
          Recarregar
        </button>
      </div>
    );
  }
}
