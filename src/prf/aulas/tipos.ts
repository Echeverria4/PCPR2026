/**
 * Formato das aulas de qualquer curso. A PRF ADM ainda tem os campos `materia`, `topicos` e `pasta`, que ligam
 * a aula ao banco de questões; os outros cursos só têm vídeos e PDFs por enquanto.
 */
export interface ArquivoCurso {
  id: string;
  nome: string;
  /** Bloco que é um PDF: o estudo dele é ler, não assistir. */
  pdf?: boolean;
  /** Arquivos de apoio do bloco (slides, transcrição, outras versões do PDF). */
  anexos?: ArquivoCurso[];
}

export interface AulaCurso {
  id: string;
  n: string;
  nome: string;
  /** Como a aula se chama no número: "Aula 01", "Tópico 01". O padrão é "Aula". */
  tipo?: string;
  blocos: ArquivoCurso[];
  pdfs: ArquivoCurso[];
  materia?: string;
  topicos?: string[];
  pasta?: string;
}

export interface GrupoCurso {
  id: string;
  nome: string;
  aulas: AulaCurso[];
  icone?: string;
  cor?: string;
  pasta?: string;
}
