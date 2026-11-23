import type { AulaCurso, GrupoCurso } from "../../../aulas/tipos";
import { GRUPOS as TODOS } from "../../dados/pmpr";
import { TITULOS } from "./titulos";

/*
 * Aulas da PMPR no curso completo (pedido de 23/11/26). No Drive, os PDFs de cada matéria vêm juntos numa aula
 * "PDFs da matéria" (<g>-00) e os vídeos em tópicos à parte. Aqui cada PDF vira uma aula própria (<g>-a01, …),
 * com nome tirado do conteúdo, resumo e questões; os tópicos de vídeo continuam com o id de antes, para não
 * perder o que já foi visto (os vistos guardam o id do arquivo no Drive, que não muda).
 */

function separar(g: GrupoCurso): GrupoCurso {
  const juntos = g.aulas.find((a) => a.id === `${g.id}-00`);
  if (!juntos) return g;
  const doPdf: AulaCurso[] = juntos.blocos.map((b, i) => {
    const n = String(i + 1).padStart(2, "0");
    const id = `${g.id}-a${n}`;
    return { id, n, tipo: "Aula", nome: TITULOS[id] ?? "", blocos: [{ ...b, nome: "PDF da aula" }], pdfs: [] };
  });
  const videos = g.aulas
    .filter((a) => a !== juntos)
    .map((a) => (a.tipo === "Tópico" && !a.nome ? { ...a, tipo: "Vídeos · Tópico" } : a));
  return { ...g, aulas: [...doPdf, ...videos] };
}

export const GRUPOS: GrupoCurso[] = TODOS.map(separar);
