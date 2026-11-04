import { useSyncExternalStore } from "react";
import type { FolhaCaderno } from "./dados";

/**
 * Onde o caderno está: aberto ou não e em que tela. Fica fora do caderno (que só carrega quando abre) e dura
 * enquanto o app está aberto, então minimizar e abrir de novo volta para a mesma folha.
 */
export type TelaCaderno =
  | { tipo: "materias" }
  | { tipo: "materia"; grupo: string }
  /** `rascunho`: folha nova, que só entra no caderno quando receber o primeiro texto. */
  | { tipo: "folha"; id: string; aula?: string; rascunho?: FolhaCaderno }
  /** Pedido vindo de uma aula: o caderno abre a folha dela ou começa uma. */
  | { tipo: "aula"; grupo: string; aula: string; nomeAula: string };

export interface PainelCaderno {
  aberto: boolean;
  /** Tela toda, só a pedido; senão fica à direita da aula e, no celular em pé, embaixo dela. */
  cheia: boolean;
  tela: TelaCaderno;
}

export interface AulaCaderno {
  grupo: string;
  aula: string;
  nomeAula: string;
}

let painel: PainelCaderno = { aberto: false, cheia: false, tela: { tipo: "materias" } };
const ouvintes = new Set<() => void>();

function mudar(novo: Partial<PainelCaderno>) {
  painel = { ...painel, ...novo };
  ouvintes.forEach((f) => f());
}

function assinar(f: () => void) {
  ouvintes.add(f);
  return () => {
    ouvintes.delete(f);
  };
}

export function usePainelCaderno(): PainelCaderno {
  return useSyncExternalStore(assinar, () => painel);
}

/** Abre onde parou ou, vindo de uma aula, na folha dessa aula. */
export function abrirCaderno(aula?: AulaCaderno) {
  const t = painel.tela;
  if (!aula || (t.tipo === "folha" && t.aula === aula.aula)) {
    mudar({ aberto: true });
    return;
  }
  mudar({ aberto: true, tela: { tipo: "aula", ...aula } });
}

/** Tira o caderno da frente: o 📝 da aula e o botão do topo trazem ele de volta, sempre no painel. */
export function minimizarCaderno() {
  mudar({ aberto: false, cheia: false });
}

export function alternarCaderno() {
  if (painel.aberto) minimizarCaderno();
  else abrirCaderno();
}

export function irNoCaderno(tela: TelaCaderno) {
  mudar({ tela });
}

export function cadernoEmTelaCheia(cheia: boolean) {
  mudar({ cheia });
}
