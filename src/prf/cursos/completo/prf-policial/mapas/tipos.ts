/**
 * Mapas mentais da PRF Policial: um mapa por aula, escrito à mão, por matéria, em `dados/<matéria>.ts`.
 *
 * Regras para preencher (o script de conferência cobra as que dão para medir):
 *  - `aula` é o id da aula no catálogo do curso (etica-01, pt-03…); a matéria sai dele, não se escreve.
 *  - Mapa ➕ Complemento (assunto que outros materiais trazem e as aulas não): `aula` = `<grupo>-extra-<n>`
 *    e `complemento` com a matéria e um nome curto; entra no fim da matéria, sem botão de abrir aula.
 *  - Centro: título de até 4 palavras; `sub` (opcional) é a norma ou o recorte, até 6 palavras.
 *  - De 3 a 6 ramos. Rótulo de até 3 palavras e 1 emoji simples (sem bandeira nem emoji composto).
 *  - Cor do ramo: uma da paleta, sem repetir no mesmo mapa. Vermelho não existe: é só da pegadinha.
 *  - De 2 a 4 folhas por ramo, até 10 palavras cada. Folha é lembrete, não frase de resumo.
 *  - `**negrito**` só na palavra que a prova cobra: 1 trecho por folha (2 quando for sigla).
 *  - `macete`: 1 frase para lembrar do mapa inteiro. `cuidado`: a pegadinha mais comum, 1 ou 2 frases.
 *  - `desenho` (opcional): pictograma do centro; sem ele, aparece o emoji do centro.
 *  - Texto próprio, só com exemplos nacionais ou da PRF, sem nome de pessoa viva nem de empresa,
 *    e com linguagem neutra ("quem dirige", "a pessoa", "integrante").
 */

/** Paleta fixa dos ramos; a cor acompanha sempre emoji e rótulo, nunca vai sozinha. */
export type CorRamo = "azul" | "verde" | "ouro" | "roxo" | "laranja" | "rosa";

export const CORES_RAMO: CorRamo[] = ["azul", "verde", "ouro", "roxo", "laranja", "rosa"];

/** Pictogramas de `desenhos.tsx`. */
export type DesenhoId =
  | "viatura"
  | "rodovia"
  | "balanca"
  | "escudo"
  | "documento"
  | "relogio"
  | "algema"
  | "semaforo"
  | "placa"
  | "cerebro"
  | "alerta"
  | "pessoas"
  | "globo"
  | "livro"
  | "bussola";

export interface RamoMapa {
  rotulo: string;
  emoji: string;
  cor: CorRamo;
  folhas: string[];
}

export interface MapaAula {
  aula: string;
  centro: { titulo: string; emoji: string; sub?: string };
  desenho?: DesenhoId;
  ramos: RamoMapa[];
  macete: string;
  cuidado: string;
  complemento?: { grupo: string; nome: string };
}

/** Tela aberta na aba; fica guardada no curso para não se perder ao trocar de aba. */
export type TelaMapas = { tipo: "inicio" } | { tipo: "materia"; grupo: string } | { tipo: "mapa"; aula: string };
