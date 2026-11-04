import { useLayoutEffect, useState, type ReactNode } from "react";
import { trocarCaderno, type RotuloCaderno } from "../caderno/dados";
import { zerarPainelCaderno } from "../caderno/painel";
import { trocarNotas } from "../semana/base";
import { pausarOutrosCursos, trocarEstudo } from "./estudo";
import { trocarMeta } from "./meta";
import type { GrupoCurso } from "./tipos";

/**
 * Curso aberto no app. As telas de aulas, o cronômetro, a meta, o caderno e a semana são os mesmos em todos os
 * cursos; o que muda é a lista de aulas e as chaves onde cada coisa fica guardada. Este arquivo não importa as
 * aulas de nenhum curso, para cada curso só carregar as dele.
 */
export interface Catalogo {
  id: string;
  nome: string;
  grupos: GrupoCurso[];
  chaves: { estudo: string; meta: string; caderno: string; semana: string };
  /** Sessões anteriores a esta data não contam. */
  comecoEstudo: number;
  /** Dia em que a meta começou a valer; null = no primeiro dia de estudo. */
  comecoMeta: number | null;
  caderno: RotuloCaderno;
}

let atual: Catalogo | null = null;
const SEM_GRUPOS: GrupoCurso[] = [];

export const gruposAtuais = () => atual?.grupos ?? SEM_GRUPOS;
export const grupoAtual = (id: string) => gruposAtuais().find((g) => g.id === id);
export const idCatalogoAtual = () => atual?.id ?? null;

export function usarCatalogo(c: Catalogo) {
  if (atual?.id === c.id) return;
  const mudou = atual !== null;
  atual = c;
  trocarEstudo(c.chaves.estudo, c.comecoEstudo);
  trocarMeta(c.chaves.meta, c.comecoMeta);
  trocarCaderno(c.chaves.caderno, c.caderno);
  trocarNotas(c.chaves.semana);
  if (mudou) zerarPainelCaderno();
  // Depois da troca: o estado do curso anterior já está só no aparelho.
  pausarOutrosCursos(c.chaves.estudo);
}

/** Só mostra o curso depois de o catálogo dele estar valendo: a troca nunca acontece no meio de uma renderização. */
export function ComCatalogo({ catalogo, children }: { catalogo: Catalogo; children: ReactNode }) {
  const [pronto, setPronto] = useState(() => idCatalogoAtual() === catalogo.id);
  useLayoutEffect(() => {
    usarCatalogo(catalogo);
    setPronto(true);
  }, [catalogo]);
  return pronto ? children : null;
}
