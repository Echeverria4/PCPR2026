import type { Question } from "../../../../../lib/types";

/**
 * Provas anteriores (13/11/26): provas reais de Certo/Errado, com o gabarito definitivo da banca, numa área à parte
 * da Central. Os itens não entram no treino de 5 alternativas nem no progresso do curso.
 */

export type Idioma = "ingles" | "espanhol";

/** Linha gerada do caderno: número, idioma ("" = comum), bloco (1 a 3), matéria, tópico, textos de apoio, item, gabarito, explicação, aviso. */
export type Bruto = [number, "" | Idioma, number, string, string, number[], string, "C" | "E", string, string];

export interface ItemProva extends Question<string> {
  /** 0 = Bloco I. */
  bloco: number;
  idioma?: Idioma;
}

export interface ProvaAnterior {
  id: string;
  titulo: string;
  subtitulo: string;
  banca: string;
  blocos: { nome: string; total: number }[];
  nomes: Record<string, string>;
  /** Tem itens de língua estrangeira à escolha (Inglês ou Espanhol). */
  linguas: boolean;
  anulados: string;
  pagina: string;
  carregar: () => Promise<ItemProva[]>;
}

export interface Caderno {
  /** Prefixo dos ids, ex.: "pol-prova-prf21". */
  prefixo: string;
  prova: string;
  banca: string;
  /** Ex.: "09/05/2021". */
  aplicadaEm: string;
  /** Início da fonte, ex.: "Cebraspe — 2021 — PRF — Policial Rodoviário Federal — prova de 9/5/2021". */
  fonte: string;
  cadernos: { comum: string; ingles?: string; espanhol?: string };
}

const NOME_IDIOMA: Record<Idioma, string> = { ingles: "Inglês", espanhol: "Espanhol" };

export function montarItens(c: Caderno, textos: string[], bruto: Bruto[]): ItemProva[] {
  return bruto.map(([numero, idioma, bloco, materia, topico, partes, item, gab, explicacao, aviso]) => {
    const sufixo = idioma ? `${idioma.slice(0, 3)}${numero}` : `i${String(numero).padStart(3, "0")}`;
    return {
      id: `${c.prefixo}-${sufixo}`,
      materia,
      topico,
      enunciado: [...partes.map((p) => textos[p]), item].join("\n\n"),
      alternativas: ["Certo", "Errado"],
      correta: gab === "C" ? 0 : 1,
      explicacao,
      origem: "prova",
      ordemFixa: true,
      fonte: `${c.fonte}, item ${numero}${idioma ? ` (caderno de ${NOME_IDIOMA[idioma]})` : ""}`,
      prova: {
        prova: c.prova,
        banca: c.banca,
        aplicadaEm: c.aplicadaEm,
        caderno: idioma ? (c.cadernos[idioma] ?? c.cadernos.comum) : c.cadernos.comum,
        numero,
        equivalentes: [],
        gabaritoOficial: gab,
        gabaritoStatus: "definitivo",
        compatibilidade: "A",
        motivoCompat: "",
        adaptada: false,
        ...(aviso ? { observacao: aviso } : {}),
      },
      bloco: bloco - 1,
      ...(idioma ? { idioma } : {}),
    };
  });
}
