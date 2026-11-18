import { useEffect, useState } from "react";

/**
 * O PDF da aula sozinho, numa janela própria do navegador: o vídeo segue na janela do app e esta vai para a outra
 * tela. O arquivo continua vindo do Drive, com o botão que o abriria fora do app tampado, como no leitor da aula.
 */

const ID_DRIVE = /^[A-Za-z0-9_-]{20,80}$/;
const NOME_JANELA = "prf-pdf";

interface Tela {
  availLeft: number;
  availTop: number;
  availWidth: number;
  availHeight: number;
}

interface DetalhesTelas {
  screens: Tela[];
  currentScreen: Tela;
}

type JanelaComTelas = Window & { getScreenDetails?: () => Promise<DetalhesTelas> };

/** O PDF pedido pela URL (?pdf=…&nome=…), quando ela traz um id do Drive válido. */
export function pdfDaUrl(): { id: string; nome: string } | null {
  const q = new URLSearchParams(window.location.search);
  const id = q.get("pdf") ?? "";
  if (!ID_DRIVE.test(id)) return null;
  return { id, nome: (q.get("nome") ?? "PDF da aula").slice(0, 200) };
}

/** A outra tela, quando o navegador já tem permissão para ver as telas (Chrome e Edge); senão, nada. */
async function outraTela(pedir: boolean): Promise<Tela | null> {
  const w = window as JanelaComTelas;
  if (!w.getScreenDetails) return null;
  try {
    if (!pedir) {
      const p = await navigator.permissions.query({ name: "window-management" as PermissionName });
      if (p.state !== "granted") return null;
    }
    const d = await w.getScreenDetails();
    return d.screens.find((s) => s !== d.currentScreen) ?? null;
  } catch {
    return null;
  }
}

let aberta: { janela: Window; id: string } | null = null;

/**
 * Abre o PDF numa janela à parte (ou só traz de volta a que já mostra este PDF, sem recarregar).
 * Devolve false quando o navegador bloqueou a janela.
 */
export async function abrirPdfEmOutraJanela(id: string, nome: string): Promise<boolean> {
  if (aberta && !aberta.janela.closed && aberta.id === id) {
    aberta.janela.focus();
    return true;
  }
  // Sem a lista de telas (Safari, Firefox), abre na hora: esperar qualquer coisa antes faria o navegador bloquear.
  const tela = (window as JanelaComTelas).getScreenDetails ? await outraTela(false) : null;
  return abre(id, nome, tela);
}

function abre(id: string, nome: string, tela: Tela | null): boolean {
  const url = new URL(window.location.pathname, window.location.origin);
  url.searchParams.set("pdf", id);
  url.searchParams.set("nome", nome);
  const lugar = tela
    ? `left=${tela.availLeft},top=${tela.availTop},width=${tela.availWidth},height=${tela.availHeight}`
    : `width=${Math.min(1000, window.screen.availWidth)},height=${window.screen.availHeight}`;
  const janela = window.open(url.toString(), NOME_JANELA, `popup,${lugar}`);
  if (!janela) return false;
  aberta = { janela, id };
  janela.focus();
  return true;
}

export default function JanelaPdf({ id, nome }: { id: string; nome: string }) {
  const [aviso, setAviso] = useState("");
  const podeMover = typeof (window as JanelaComTelas).getScreenDetails === "function";

  useEffect(() => {
    document.title = `PDF: ${nome}`;
  }, [nome]);

  async function levarParaOutraTela() {
    const tela = await outraTela(true);
    if (!tela) {
      setAviso("Não achei outra tela. Arraste esta janela para o segundo monitor.");
      return;
    }
    window.moveTo(tela.availLeft, tela.availTop);
    window.resizeTo(tela.availWidth, tela.availHeight);
    setAviso("");
  }

  return (
    <div className="prf-leitor prf-janela-pdf">
      <div className="prf-leitor-barra">
        <span className="prf-leitor-nome">{nome}</span>
        {podeMover && (
          <button type="button" className="botao" onClick={levarParaOutraTela}>
            🖥️ Levar para a outra tela
          </button>
        )}
        <button type="button" className="botao" onClick={() => window.close()}>
          Fechar
        </button>
      </div>
      {aviso && (
        <p className="prf-janela-pdf-aviso" role="status">
          {aviso}
        </p>
      )}
      <div className="prf-leitor-quadro">
        <span className="prf-drive-carregando" aria-hidden="true">
          Carregando o PDF…
        </span>
        <iframe src={`https://drive.google.com/file/d/${id}/preview`} title={`PDF: ${nome}`} allow="fullscreen" allowFullScreen />
        <span className="prf-leitor-tampa" aria-hidden="true" />
      </div>
      <p className="prf-janela-pdf-dica">
        O vídeo continua na outra janela. Se o PDF pedir login, entre com a mesma conta Google do app.
      </p>
    </div>
  );
}
