/**
 * Língua estrangeira da PRF Policial (19/11/26: o usuário escolheu Espanhol e tirou o Inglês do curso).
 * A outra língua fica só escondida: some das aulas, do treino, dos resumos, dos mapas, do cronograma, do
 * Simulado PRF 2021 e das provas anteriores, mas os arquivos continuam. Para trocar, mude LINGUA aqui e
 * FORA_DOS_TOTAIS em Zips_Cursos_Drive/gerador/gera_cursos.py (o cartão da central conta as matérias).
 */
export type Lingua = "ingles" | "espanhol";

export const LINGUA = "espanhol" as Lingua;
export const LINGUA_FORA: Lingua = LINGUA === "espanhol" ? "ingles" : "espanhol";
export const NOME_LINGUA: Record<Lingua, string> = { ingles: "Inglês", espanhol: "Espanhol" };

export const semLinguaFora = <T extends { id: string }>(gs: T[]): T[] => gs.filter((g) => g.id !== LINGUA_FORA);
