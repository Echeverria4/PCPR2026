import type { EstadoEstudo } from "../../aulas/estudo";
import type { AulaCurso, GrupoCurso } from "../../aulas/tipos";
import { inicioSemana, maisDias } from "../../semana/base";

/*
 * Só tipos e funções puras: a Central de Estudos usa este arquivo sem carregar o cronômetro dos cursos.
 * O que lê a meta e o tempo ao vivo fica em CronogramaCurso.tsx.
 */

/*
 * Cronograma semanal de um curso, numa chave por curso.
 * - O tempo de cada dia é a meta diária (seg a sex e sáb e dom); as atividades repartem esse tempo pelo peso de cada uma.
 * - Cada dia útil tem uma fila de matérias. A do dia é a primeira que ainda tem aula. Quando a fila acaba, entra a
 *   próxima da lista de espera do curso.
 * - Matéria que acabou não sai: continua no mesmo dia com questões, mapas mentais e as erradas (1/4 do dia enquanto
 *   outra matéria tem aula; o dia inteiro quando não sobra aula nova).
 * - As aulas de cada semana saem do que está marcado nas Aulas, então o plano se refaz sozinho a cada dia.
 */

/** Para onde leva o botão de uma atividade. */
export type Destino = "aula" | "questoes" | "erros" | "simulado" | "mapas" | "resumos" | "redacao" | "caderno" | "nenhum";

export const NOME_DESTINO: Record<Destino, string> = {
  aula: "🎬 Aula do dia",
  questoes: "🎯 Questões",
  erros: "🔁 Refazer as erradas",
  simulado: "📝 Treino e simulado",
  mapas: "🧠 Mapas mentais",
  resumos: "📚 Resumos",
  redacao: "✍️ Redação",
  caderno: "📒 Caderno",
  nenhum: "Sem botão",
};

export interface Atividade {
  id: string;
  /** Peso no dia: o tempo do dia (a meta) se reparte na proporção destes números. */
  min: number;
  texto: string;
  ir: Destino;
  /** Matéria fixa da atividade (ex.: reforço de Trânsito no domingo); sem ela, vale a matéria do dia. */
  grupo?: string;
}

export interface DiaPlano {
  /** Opcional: sem título, o dia se chama pela matéria. */
  titulo: string;
  /** Ids das matérias (grupos), na ordem em que entram no dia. */
  fila: string[];
  /** Quantas aulas novas avançar no dia; 0 = só revisão e questões. */
  aulasPorDia: number;
  atividades: Atividade[];
}

export interface Plano {
  /** Sete dias: segunda (0) a domingo (6). */
  dias: DiaPlano[];
  /** Matérias que entram, nesta ordem, no dia útil cuja fila acabar. */
  espera: string[];
  /** Atividades marcadas como feitas, por dia ("2026-11-18"). */
  feitos: Record<string, string[]>;
  /** false = o estudante ainda não montou o cronograma (a aba abre no passo a passo). */
  montado: boolean;
}

export const NOME_DIA = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
export const DIA_CURTO = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
export const MAX_AULAS_DIA = 3;
/** Uma matéria por dia útil: no máximo 5 ao mesmo tempo. */
export const MAX_MATERIAS = 5;

/** Segunda = 0 … domingo = 6. */
export const indiceDia = (ms: number) => (new Date(ms).getDay() + 6) % 7;

export function meiaNoite(ms: number) {
  const d = new Date(ms);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function chaveDia(ms: number) {
  const d = new Date(ms);
  const dois = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}`;
}

export const novoId = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/** "1h20", "40min", "2h". */
export function horas(min: number) {
  const h = Math.floor(min / 60);
  const m = Math.round(min % 60);
  if (h === 0) return `${m}min`;
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
}

/** Todos os vídeos da aula marcados (o mesmo que `progresso(a, vistos).completa`). */
export const aulaCompleta = (a: AulaCurso, vistos: Set<string>) =>
  a.blocos.length > 0 && a.blocos.every((b) => vistos.has(b.id));

/** O dia tem algo planejado (matéria ou atividade). */
export const diaUsado = (d: DiaPlano) => d.fila.length > 0 || d.atividades.length > 0;

// ---------- Peso de cada matéria na prova ----------

/**
 * Itens por matéria nas provas anteriores que estão no app (média das duas mais recentes, arredondada).
 * PRF: 2021 e 2019; a língua estrangeira só caiu em 2021. PF: 2025 e 2021. Os outros cursos ainda não têm prova no app.
 */
const PESOS: Record<string, { fonte: string; itens: Record<string, number> }> = {
  "prf-policial": {
    fonte: "itens das provas PRF 2021 e 2019 (Cebraspe)",
    itens: {
      transito: 30,
      pt: 19,
      ingles: 7,
      espanhol: 7,
      fisica: 6,
      rlm: 6,
      con: 6,
      info: 5,
      penal: 5,
      dh: 5,
      especial: 5,
      geopolitica: 5,
      etica: 5,
      proc: 4,
      "adm-a": 4,
      "adm-b": 4,
      carreira: 2,
    },
  },
  "pf-agente": {
    fonte: "itens das provas PF 2025 e 2021 (Cebraspe)",
    itens: {
      info: 33,
      "contab-a": 21,
      "contab-b": 21,
      pt: 17,
      rlm: 10,
      estatistica: 10,
      leg: 6,
      "adm-a": 5,
      "adm-b": 5,
      con: 4,
      dh: 3,
      penal: 3,
      proc: 2,
    },
  },
};

/** Mesmo assunto em dois cursos (ou língua à escolha): a dica leva só o primeiro de cada par. */
const PARES: Record<string, string> = { espanhol: "ingles", "adm-b": "adm-a", "contab-b": "contab-a" };

/** Partes do curso que não são matéria: ficam fora da dica e da lista de espera (dá para pôr à mão). */
const EXTRAS = new Set(["bizus", "bizus-cargos", "trilha", "ebooks", "mentoria", "simulados"]);

export const fontePeso = (curso: string) => PESOS[curso]?.fonte ?? null;
export const pesoDaMateria = (curso: string, grupo: string): number | null => PESOS[curso]?.itens[grupo] ?? null;

/** Matérias que dá para pôr no cronograma: as que têm aula. */
export const estudaveis = (grupos: GrupoCurso[]) => grupos.filter((g) => g.aulas.some((a) => a.blocos.length > 0));

/** Todas as aulas (com vídeo) da matéria já marcadas. */
export function materiaConcluida(g: GrupoCurso, vistos: Set<string>) {
  const aulas = g.aulas.filter((a) => a.blocos.length > 0);
  return aulas.length > 0 && aulas.every((a) => aulaCompleta(a, vistos));
}

/** Matérias na ordem da dica: maior peso na prova primeiro; empate (ou curso sem prova) fica na ordem do curso. */
export function ordemPorPeso(curso: string, grupos: GrupoCurso[]): GrupoCurso[] {
  const pos = new Map(grupos.map((g, i) => [g.id, i]));
  return [...grupos].sort(
    (a, b) => (pesoDaMateria(curso, b.id) ?? 0) - (pesoDaMateria(curso, a.id) ?? 0) || pos.get(a.id)! - pos.get(b.id)!,
  );
}

/** A dica: as `n` matérias de maior peso que ainda têm aula, sem repetir o mesmo assunto. */
export function dicaDeMaterias(curso: string, grupos: GrupoCurso[], vistos: Set<string>, n: number): string[] {
  const escolha: string[] = [];
  for (const g of ordemPorPeso(curso, estudaveis(grupos))) {
    if (escolha.length >= n) break;
    if (EXTRAS.has(g.id) || materiaConcluida(g, vistos)) continue;
    const par = PARES[g.id];
    if (par && escolha.includes(par)) continue;
    if (Object.entries(PARES).some(([b, a]) => a === g.id && escolha.includes(b))) continue;
    escolha.push(g.id);
  }
  return escolha;
}

// ---------- Montar o cronograma ----------

export type Extra = "questoes" | "simulado" | "redacao" | "erros" | "mapas" | "caderno";

export const NOME_EXTRA: Record<Extra, { titulo: string; texto: string; precisa: Destino }> = {
  questoes: { titulo: "🎯 Questões em todo dia de matéria", texto: "1/3 do dia em questões da matéria do dia.", precisa: "questoes" },
  simulado: { titulo: "📝 Simulado no sábado", texto: "Prova com as matérias juntas, para treinar o ritmo.", precisa: "simulado" },
  redacao: { titulo: "✍️ Redação no sábado", texto: "Uma redação de 30 linhas por semana.", precisa: "redacao" },
  erros: { titulo: "🔁 Refazer as erradas no fim de semana", texto: "Correção e caderno de erros.", precisa: "erros" },
  mapas: { titulo: "🧠 Mapas mentais no domingo", texto: "Revisão das matérias da semana pelos mapas.", precisa: "mapas" },
  caderno: { titulo: "📒 Revisão do caderno no fim de semana", texto: "Reler as anotações das aulas da semana.", precisa: "caderno" },
};

export interface OpcoesMontar {
  /** Matérias escolhidas para começar (até 5). */
  materias: string[];
  /** Das escolhidas, as que o estudante já viu: o dia delas é só revisão e questões. */
  soRevisao: string[];
  extras: Extra[];
}

/** Extras ligados de início, entre os que o curso tem. */
export function extrasPadrao(destinos: Destino[]): Extra[] {
  const tem = (x: Destino) => destinos.includes(x);
  const todos: Extra[] = ["questoes", "simulado", "redacao", "erros", "mapas"];
  const ligados = todos.filter((x) => tem(NOME_EXTRA[x].precisa));
  // Sem banco de questões, a revisão do fim de semana é o caderno.
  return ligados.length === 0 && tem("caderno") ? ["caderno"] : ligados;
}

const at = (min: number, texto: string, ir: Destino, grupo?: string): Atividade => ({
  id: novoId(),
  min,
  texto,
  ir,
  ...(grupo ? { grupo } : {}),
});

/**
 * Quantos dias úteis cada matéria leva: um dia para cada, e os que sobram vão para as de maior peso
 * (divisores 1, 3, 5…, para não dar tudo à primeira). Depois os dias se espalham pela semana:
 * a matéria que tem dois dias fica em segunda e quinta, por exemplo.
 */
export function distribuirDias(materias: string[], peso: (id: string) => number, dias = 5): (string | null)[] {
  const esc = materias.slice(0, dias);
  const pos: (string | null)[] = Array(dias).fill(null);
  if (esc.length === 0) return pos;
  const slots = esc.map(() => 1);
  for (let r = esc.length; r < dias; r++) {
    let melhor = 0;
    for (let i = 1; i < esc.length; i++)
      if (peso(esc[i]) / (2 * slots[i] + 1) > peso(esc[melhor]) / (2 * slots[melhor] + 1)) melhor = i;
    slots[melhor]++;
  }
  const ordem = esc.map((id, i) => ({ id, k: slots[i], i })).sort((a, b) => b.k - a.k || a.i - b.i);
  for (const { id, k } of ordem)
    for (let j = 0; j < k; j++) {
      let alvo = Math.round((j * dias) / k);
      while (pos[alvo % dias] !== null) alvo++;
      pos[alvo % dias] = id;
    }
  return pos;
}

/** Monta a semana pelas escolhas do passo a passo. */
export function montarPlano(curso: string, grupos: GrupoCurso[], destinos: Destino[], op: OpcoesMontar): Plano {
  const tem = (x: Destino) => destinos.includes(x);
  const extra = (x: Extra) => op.extras.includes(x) && tem(NOME_EXTRA[x].precisa);
  const peso = (id: string) => pesoDaMateria(curso, id) ?? 1;
  const ordem = ordemPorPeso(curso, estudaveis(grupos)).map((g) => g.id);
  const escolhidas = ordem.filter((id) => op.materias.includes(id)).slice(0, MAX_MATERIAS);
  const porDia = distribuirDias(escolhidas, peso);
  const comQuestoes = extra("questoes");

  const diaUtil = (grupo: string | null): DiaPlano => {
    if (!grupo) return { titulo: "", fila: [], aulasPorDia: 1, atividades: [] };
    if (op.soRevisao.includes(grupo)) {
      const atividades = [
        ...(tem("questoes") ? [at(90, "Questões Cebraspe da matéria", "questoes")] : []),
        ...(tem("mapas") ? [at(30, "Mapas mentais e pontos de erro", "mapas")] : []),
      ];
      if (atividades.length === 0) atividades.push(at(60, "Revisão das anotações", tem("caderno") ? "caderno" : "nenhum"));
      return { titulo: "", fila: [grupo], aulasPorDia: 0, atividades };
    }
    return {
      titulo: "",
      fila: [grupo],
      aulasPorDia: 1,
      atividades: comQuestoes
        ? [at(80, "Teoria: PDF e vídeos da aula", "aula"), at(40, "Questões da matéria", "questoes")]
        : [at(100, "Teoria: PDF e vídeos da aula", "aula"), ...(tem("caderno") ? [at(20, "Pontos-chave no caderno", "caderno")] : [])],
    };
  };

  const sabado: Atividade[] = [
    ...(extra("simulado") ? [at(150, "Simulado com as matérias juntas", "simulado")] : []),
    ...(extra("redacao") ? [at(90, "Redação de 30 linhas", "redacao")] : []),
    ...(extra("erros") ? [at(120, "Correção + refazer as erradas da semana", "erros")] : []),
    ...(extra("caderno") ? [at(90, "Revisão do caderno da semana", "caderno")] : []),
  ];
  const fortes = escolhidas.slice(0, 2);
  const domingo: Atividade[] = [
    ...(tem("resumos") && fortes.length > 0
      ? fortes.map((g) => at(75, "Reforço pelos resumos e questões", "resumos", g))
      : []),
    ...(extra("mapas") ? [at(120, "Revisão dos mapas mentais da semana", "mapas")] : []),
    ...(comQuestoes && tem("simulado") ? [at(90, "Bateria extra de questões", "simulado")] : []),
    ...(extra("caderno") && !extra("mapas") ? [at(60, "Revisão do caderno", "caderno")] : []),
  ];
  // Sem nenhum extra, o fim de semana adianta aula da matéria de maior peso.
  const fimLivre = (lista: Atividade[]): DiaPlano =>
    lista.length > 0
      ? { titulo: "", fila: [], aulasPorDia: 0, atividades: lista }
      : { titulo: "", fila: escolhidas.slice(0, 1), aulasPorDia: 1, atividades: [at(100, "Teoria: PDF e vídeos da aula", "aula")] };

  const sab = fimLivre(sabado);
  const dom = fimLivre(domingo);
  if (sabado.length > 0) sab.titulo = extra("simulado") ? "Simulado + revisão" : "Revisão da semana";
  if (domingo.length > 0) dom.titulo = extra("mapas") ? "Reforço + mapas mentais" : "Reforço";

  return {
    dias: [...porDia.map(diaUtil), sab, dom],
    espera: ordem.filter((id) => !escolhidas.includes(id) && !EXTRAS.has(id)),
    feitos: {},
    montado: true,
  };
}

const vazio = (): DiaPlano => ({ titulo: "", fila: [], aulasPorDia: 1, atividades: [] });
export const planoVazio = (): Plano => ({ dias: NOME_DIA.map(vazio), espera: [], feitos: {}, montado: false });

/** Troca uma matéria por outra em todos os dias; a que sai volta para o começo da lista de espera. */
export function trocarMateria(p: Plano, de: string, para: string | null): Plano {
  const dias = p.dias.map((d) => {
    if (!d.fila.includes(de)) return d;
    const fila = para && !d.fila.includes(para) ? d.fila.map((x) => (x === de ? para : x)) : d.fila.filter((x) => x !== de);
    return { ...d, fila, atividades: d.atividades.map((a) => (a.grupo === de && para ? { ...a, grupo: para } : a)) };
  });
  const espera = p.espera.filter((x) => x !== para && x !== de);
  return { ...p, dias, espera: para ? [de, ...espera] : espera };
}

// ---------- Guardar ----------

const chave = (curso: string) => `curso:${curso}:cronograma:v1`;
const DESTINOS = Object.keys(NOME_DESTINO) as Destino[];
const ehTexto = (x: unknown): x is string => typeof x === "string";

function limparDia(x: unknown): DiaPlano | null {
  if (!x || typeof x !== "object") return null;
  const d = x as Partial<DiaPlano>;
  if (!Array.isArray(d.fila) || !Array.isArray(d.atividades)) return null;
  return {
    titulo: ehTexto(d.titulo) ? d.titulo : "",
    fila: d.fila.filter(ehTexto),
    aulasPorDia: Math.max(0, Math.min(MAX_AULAS_DIA, Math.round(Number(d.aulasPorDia) || 0))),
    atividades: d.atividades
      .filter((a): a is Atividade => !!a && typeof a === "object" && ehTexto((a as Atividade).texto))
      .map((a) => ({
        id: ehTexto(a.id) ? a.id : novoId(),
        min: Math.max(0, Math.round(Number(a.min) || 0)),
        texto: a.texto,
        ir: DESTINOS.includes(a.ir) ? a.ir : "nenhum",
        ...(ehTexto(a.grupo) ? { grupo: a.grupo } : {}),
      })),
  };
}

export function lerPlano(curso: string): Plano {
  try {
    const bruto = localStorage.getItem(chave(curso));
    if (bruto) {
      const p = JSON.parse(bruto) as Partial<Plano>;
      const dias = Array.isArray(p.dias) ? p.dias.map(limparDia) : [];
      if (dias.length === 7 && dias.every((d) => d !== null)) {
        const feitos = p.feitos && typeof p.feitos === "object" ? p.feitos : {};
        const espera = Array.isArray(p.espera) ? p.espera.filter(ehTexto) : [];
        return { dias: dias as DiaPlano[], espera, feitos, montado: p.montado !== false };
      }
    }
  } catch {
    // Sem acesso ao armazenamento (janela anônima, dados bloqueados): começa pelo passo a passo.
  }
  return planoVazio();
}

/** Guarda o plano; as marcações de mais de 60 dias saem para a chave não crescer sem fim. */
export function gravarPlano(curso: string, p: Plano) {
  const limite = chaveDia(maisDias(meiaNoite(Date.now()), -60));
  const feitos = Object.fromEntries(Object.entries(p.feitos).filter(([dia, ids]) => dia >= limite && ids.length > 0));
  try {
    localStorage.setItem(chave(curso), JSON.stringify({ ...p, feitos }));
  } catch {
    // Sem espaço ou sem acesso: o plano vale até fechar a página.
  }
}

// ---------- As aulas de cada dia até acabar ----------

export interface Encaixe {
  /** Meia-noite do dia. */
  dia: number;
  d: number;
  /** Matéria com aula nova no dia; null = sem aula nova. */
  grupo: string | null;
  aulas: AulaCurso[];
  /** Matéria do dia que já acabou e entra em revisão nesta semana (gira entre as que acabaram). */
  revisao: string | null;
  /** Só hoje: aulas da matéria concluídas hoje, que já contam no dia. */
  feitasHoje: AulaCurso[];
}

export interface Previsao {
  semanas: { inicio: number; encaixes: Encaixe[] }[];
  /** Matéria → meia-noite do dia em que a última aula dela está prevista; ausente = sem previsão. */
  termino: Map<string, number>;
  /** Aulas que faltam em cada matéria do plano (dias e lista de espera). */
  faltam: Map<string, number>;
  /** Quando um dia passa para a matéria seguinte (da fila do dia ou da lista de espera). */
  trocas: { d: number; de: string | null; para: string; desde: number }[];
  /** Todas as matérias do plano chegam ao fim dentro do horizonte. */
  completa: boolean;
}

const HORIZONTE_SEMANAS = 104;
const SEMANA_MS = 7 * 24 * 3600 * 1000;

/** Aulas da matéria concluídas hoje (o último vídeo marcado hoje). */
function concluidasHoje(g: GrupoCurso, vistos: Set<string>, vistosEm: Record<string, number>, hoje: number) {
  return g.aulas.filter((a) => {
    if (!aulaCompleta(a, vistos)) return false;
    return Math.max(...a.blocos.map((b) => vistosEm[b.id] ?? 0)) >= hoje;
  });
}

/** Distribui as aulas que faltam pelos dias, de hoje em diante, até as matérias acabarem (ou 2 anos). */
export function prever(
  plano: Plano,
  grupos: GrupoCurso[],
  e: Pick<EstadoEstudo, "vistos" | "vistosEm">,
  agora: number,
): Previsao {
  const vistos = new Set(e.vistos);
  const porId = new Map(grupos.map((g) => [g.id, g]));
  const filas = plano.dias.map((d) => d.fila.filter((g) => porId.has(g)));
  const noPlano = new Set(filas.flat());
  const espera = plano.espera.filter((g) => porId.has(g) && !noPlano.has(g));
  const restantes = new Map<string, AulaCurso[]>();
  for (const id of [...noPlano, ...espera])
    restantes.set(
      id,
      porId.get(id)!.aulas.filter((a) => a.blocos.length > 0 && !aulaCompleta(a, vistos)),
    );
  const faltam = new Map([...restantes].map(([id, aulas]) => [id, aulas.length]));
  const pendente = (g: string) => (restantes.get(g)?.length ?? 0) > 0;
  const termino = new Map<string, number>();
  const trocas: Previsao["trocas"] = [];
  // Última matéria com aula em cada dia; undefined = o dia ainda não apareceu na previsão.
  const ultimaDoDia: (string | null | undefined)[] = Array(7).fill(undefined);
  // Matérias que a lista de espera pôs em cada dia, nesta previsão.
  const ganhas: string[][] = filas.map(() => []);
  const hoje = meiaNoite(agora);
  const semanas: Previsao["semanas"] = [];
  const algumaPendente = () => [...restantes.keys()].some(pendente);

  for (let s = 0; s < HORIZONTE_SEMANAS && (s === 0 || algumaPendente()); s++) {
    const inicio = maisDias(inicioSemana(agora), s * 7);
    const giro = Math.round(inicio / SEMANA_MS);
    const encaixes: Encaixe[] = [];
    let avancou = false;
    for (let d = 0; d < 7; d++) {
      const dia = maisDias(inicio, d);
      if (dia < hoje) continue;
      const plDia = plano.dias[d];
      let cadeia = [...filas[d], ...ganhas[d]];
      let atual = plDia.aulasPorDia > 0 ? cadeia.find(pendente) : undefined;
      // A fila do dia acabou: entra a próxima matéria da espera que ainda tem aula.
      if (!atual && plDia.aulasPorDia > 0 && cadeia.length > 0) {
        const i = espera.findIndex(pendente);
        if (i >= 0) {
          atual = espera.splice(i, 1)[0];
          ganhas[d].push(atual);
          cadeia = [...cadeia, atual];
        }
      }
      const acabadas = cadeia.filter((g) => !pendente(g) || plDia.aulasPorDia === 0);
      const revisao = acabadas.length > 0 ? acabadas[giro % acabadas.length] : null;
      const doDia = atual ?? null;
      const antes = ultimaDoDia[d];
      if (doDia && antes !== undefined && doDia !== antes) trocas.push({ d, de: antes, para: doDia, desde: dia });
      ultimaDoDia[d] = doDia ?? antes ?? null;
      if (!doDia) {
        encaixes.push({ dia, d, grupo: null, aulas: [], revisao, feitasHoje: [] });
        continue;
      }
      const feitasHoje = dia === hoje ? concluidasHoje(porId.get(doDia)!, vistos, e.vistosEm, hoje) : [];
      const cota = Math.max(0, plDia.aulasPorDia - feitasHoje.length);
      const fila = restantes.get(doDia)!;
      const aulas = fila.splice(0, cota);
      if (aulas.length > 0) avancou = true;
      if (aulas.length > 0 && fila.length === 0) termino.set(doDia, dia);
      encaixes.push({ dia, d, grupo: doDia, aulas, revisao, feitasHoje });
    }
    semanas.push({ inicio, encaixes });
    // Sem nenhum dia que avance aula, a previsão para aqui.
    if (!avancou && s > 0) break;
  }
  return { semanas, termino, faltam, trocas, completa: !algumaPendente() };
}

/** Nome do dia: o título dado, a matéria com aula, a matéria em revisão ou "livre". */
export function tituloDoDia(dia: DiaPlano, enc: Encaixe | undefined, nome: (id: string) => string) {
  if (dia.titulo) return dia.titulo;
  if (enc?.grupo) return nome(enc.grupo);
  if (enc?.revisao) return `${nome(enc.revisao)} · revisão`;
  // Dia que já passou (sem previsão): o nome da primeira matéria da fila.
  if (dia.fila[0]) return `${nome(dia.fila[0])}${dia.aulasPorDia === 0 ? " · revisão" : ""}`;
  return diaUsado(dia) ? "Revisão" : "Dia livre";
}

/** Aviso quando o botão de uma atividade não tinha o que abrir. */
export const avisoSemDestino = (destino: Destino, materia: string | null) =>
  destino === "erros"
    ? `Nenhuma questão errada${materia ? ` em ${materia}` : ""} por enquanto. Bom sinal!`
    : "Ainda não há o que abrir aqui.";

// ---------- O tempo de cada atividade no dia ----------

export interface Fatia {
  /** Id da atividade (ou "rev:<matéria>" para a revisão automática). */
  id: string;
  min: number;
  texto: string;
  /** Botões, o principal primeiro. */
  botoes: Destino[];
  grupo: string | null;
  /** Revisão de matéria que acabou: o cronograma pôs sozinho. */
  automatica: boolean;
}

/** Parte do dia que a revisão automática leva enquanto outra matéria do dia ainda tem aula. */
const PARTE_REVISAO = 0.25;
const BOTOES_REVISAO: Destino[] = ["questoes", "mapas", "erros"];

/** As atividades do dia com os minutos tirados do tempo do dia (a soma dá o tempo do dia, em passos de 5). */
export function fatiasDoDia(dia: DiaPlano, enc: Encaixe | undefined, tempo: number, nome: (id: string) => string): Fatia[] {
  const comAula = !!enc?.grupo;
  const rev = enc?.revisao ?? null;
  const textoRev = (g: string) => `Revisão de ${nome(g)}: questões, mapas mentais e as erradas`;
  const itens: (Omit<Fatia, "min"> & { peso: number })[] = dia.atividades.map((a) => {
    // Aula num dia sem aula nova: vira a revisão da matéria que acabou.
    if (a.ir === "aula" && !comAula && rev)
      return { id: a.id, peso: a.min, texto: textoRev(rev), botoes: BOTOES_REVISAO, grupo: rev, automatica: true };
    return {
      id: a.id,
      peso: a.min,
      // Atividade presa a uma matéria (ex.: reforço do domingo) mostra de qual é.
      texto: a.grupo && !a.texto.includes(nome(a.grupo)) ? `${a.texto} · ${nome(a.grupo)}` : a.texto,
      botoes: a.ir === "nenhum" ? [] : [a.ir],
      grupo: a.grupo ?? enc?.grupo ?? rev,
      automatica: false,
    };
  });
  if (comAula && rev && dia.aulasPorDia > 0) {
    const soma = itens.reduce((s, x) => s + x.peso, 0);
    itens.push({
      id: `rev:${rev}`,
      peso: soma > 0 ? (soma * PARTE_REVISAO) / (1 - PARTE_REVISAO) : 1,
      texto: textoRev(rev),
      botoes: BOTOES_REVISAO,
      grupo: rev,
      automatica: true,
    });
  }
  return repartir(itens, tempo);
}

function repartir<T extends { peso: number }>(itens: T[], tempo: number): (Omit<T, "peso"> & { min: number })[] {
  const soma = itens.reduce((s, x) => s + Math.max(0, x.peso), 0);
  const mins = itens.map((x) => (soma > 0 ? Math.round((tempo * Math.max(0, x.peso)) / soma / 5) * 5 : 0));
  // O arredondamento não pode mudar o total: a diferença vai para a maior atividade.
  const dif = (soma > 0 ? Math.round(tempo / 5) * 5 : 0) - mins.reduce((a, b) => a + b, 0);
  if (dif !== 0 && mins.length > 0) {
    const maior = mins.indexOf(Math.max(...mins));
    mins[maior] = Math.max(0, mins[maior] + dif);
  }
  return itens.map(({ peso: _peso, ...resto }, i) => ({ ...resto, min: mins[i] }));
}

/** Minutos de cada atividade do dia (sem a revisão automática), para o editor. */
export const minutosDasAtividades = (dia: DiaPlano, tempo: number) =>
  repartir(dia.atividades.map((a) => ({ peso: a.min })), tempo).map((x) => x.min);

/** Pesos novos quando o estudante muda os minutos de uma atividade: as outras dividem o resto do dia. */
export function ajustarMinutos(dia: DiaPlano, i: number, minutos: number, tempo: number): DiaPlano {
  const atuais = minutosDasAtividades(dia, tempo);
  const alvo = Math.max(0, Math.min(tempo, minutos));
  const outros = atuais.reduce((s, m, j) => (j === i ? s : s + m), 0);
  const resto = tempo - alvo;
  const atividades = dia.atividades.map((a, j) => {
    if (j === i) return { ...a, min: alvo };
    const novo = outros > 0 ? (atuais[j] * resto) / outros : resto / Math.max(1, dia.atividades.length - 1);
    return { ...a, min: Math.round(novo) };
  });
  return { ...dia, atividades };
}
