import type {
  AttemptRecord,
  Confianca,
  ProvaExterna,
  ProvaExternaMateria,
  Question,
  SimuladoAtivo,
  SimuladoQuestao,
  SimuladoResultado,
  SubjectId,
} from "./types";
import { BANCO, QUESTOES_POR_MATERIA } from "../data/questions";
import { PROVA_MIX, SUBJECT_MAP } from "../data/subjects";
import { BLOCOS, blocoDoTopico, blocosDaMateria, type BlocoEstudo } from "../data/blocos";
import { DURACAO_SIMULADO_MIN, GERAIS, ORDEM_CADERNO } from "../data/retaFinal";
import { embaralharAlternativas, shuffle } from "./quizEngine";
import { getSimuladoAtivo } from "./storage";

export const QUESTAO_POR_ID = new Map<string, Question>(BANCO.map((q) => [q.id, q]));

export function blocoDaQuestao(q: Question): BlocoEstudo {
  return blocoDoTopico(q.materia, q.topico) ?? blocosDaMateria(q.materia)[0];
}

interface Historico {
  /** Primeira resposta fora da "Revisão dos errados": a única que mede a matéria sem memória da questão. */
  primeira?: AttemptRecord;
  /** Resposta mais recente, de qualquer modo: diz se o erro ainda está de pé. */
  ultima: AttemptRecord;
}

function historicoPorQuestao(attempts: AttemptRecord[]): Map<string, Historico> {
  const mapa = new Map<string, Historico>();
  for (const a of attempts) {
    const h = mapa.get(a.questionId);
    if (!h) mapa.set(a.questionId, { primeira: a.modo !== "revisao" ? a : undefined, ultima: a });
    else {
      h.ultima = a;
      if (!h.primeira && a.modo !== "revisao") h.primeira = a;
    }
  }
  return mapa;
}

const tempo = (a: AttemptRecord) => new Date(a.respondidaEm).getTime();

/** Questões de cada matéria que nunca foram respondidas (em nenhum modo). */
export function contarIneditas(attempts: AttemptRecord[]): Record<SubjectId, number> {
  const vistas = new Set(attempts.map((a) => a.questionId));
  return Object.fromEntries(
    ORDEM_CADERNO.map((m) => [m, (QUESTOES_POR_MATERIA[m] ?? []).filter((q) => !vistas.has(q.id)).length]),
  ) as Record<SubjectId, number>;
}

/**
 * Simulado modo prova: a mistura oficial (PROVA_MIX), na ordem do Anexo I. Dentro de cada matéria,
 * as vagas se dividem entre os blocos pelo peso estimado (Sainte-Laguë), primeiro só com questões
 * inéditas e, se faltar, com as vistas há mais tempo.
 */
export function buildSimulado(attempts: AttemptRecord[]): SimuladoAtivo {
  const hist = historicoPorQuestao(attempts);
  const questoes: SimuladoQuestao[] = [];

  for (const materia of ORDEM_CADERNO) {
    const alvo = PROVA_MIX[materia];
    const blocos = blocosDaMateria(materia);
    const ineditas = new Map<string, Question[]>(blocos.map((b) => [b.id, []]));
    const vistas = new Map<string, Question[]>(blocos.map((b) => [b.id, []]));
    for (const q of shuffle(QUESTOES_POR_MATERIA[materia] ?? [])) {
      const b = blocoDaQuestao(q).id;
      (hist.has(q.id) ? vistas : ineditas).get(b)!.push(q);
    }
    for (const lista of vistas.values()) lista.sort((a, b) => tempo(hist.get(a.id)!.ultima) - tempo(hist.get(b.id)!.ultima));

    const pegas = new Map<string, number>(blocos.map((b) => [b.id, 0]));
    const escolhidas: Question[] = [];
    for (const pool of [ineditas, vistas]) {
      while (escolhidas.length < alvo) {
        let melhor: BlocoEstudo | null = null;
        let melhorPrioridade = -1;
        for (const b of blocos) {
          if (!pool.get(b.id)!.length) continue;
          const prioridade = b.questoesEstimadas / (2 * pegas.get(b.id)! + 1);
          if (prioridade > melhorPrioridade) {
            melhor = b;
            melhorPrioridade = prioridade;
          }
        }
        if (!melhor) break;
        escolhidas.push(pool.get(melhor.id)!.shift()!);
        pegas.set(melhor.id, pegas.get(melhor.id)! + 1);
      }
    }
    for (const q of shuffle(escolhidas)) questoes.push({ id: q.id, ordem: shuffle([0, 1, 2, 3, 4]) });
  }

  return {
    id: `sim-${Date.now()}`,
    iniciadoEm: new Date().toISOString(),
    duracaoMin: DURACAO_SIMULADO_MIN,
    questoes,
    respostas: questoes.map(() => ({ escolha: null, tempoMs: 0 })),
    atual: 0,
  };
}

/** Simulado salvo, sem questões que tenham saído do banco desde que ele começou. */
export function carregarSimuladoAtivo(): SimuladoAtivo | null {
  const salvo = getSimuladoAtivo();
  if (!salvo || !Array.isArray(salvo.questoes)) return null;
  const manter = salvo.questoes.map((q) => QUESTAO_POR_ID.has(q.id));
  const questoes = salvo.questoes.filter((_, i) => manter[i]);
  if (!questoes.length) return null;
  const respostas = salvo.respostas.filter((_, i) => manter[i]);
  return { ...salvo, questoes, respostas, atual: Math.min(salvo.atual, questoes.length - 1) };
}

export function restanteMs(simulado: SimuladoAtivo, agora = Date.now()): number {
  return new Date(simulado.iniciadoEm).getTime() + simulado.duracaoMin * 60_000 - agora;
}

/** Corrige o simulado: devolve o resultado para o histórico e as respostas para gravar (só as marcadas). */
export function corrigirSimulado(
  simulado: SimuladoAtivo,
  encerradoPorTempo: boolean,
): { resultado: SimuladoResultado; tentativas: AttemptRecord[] } {
  const agora = Date.now();
  const finalizadoEm = new Date(agora).toISOString();
  const usadoMs = Math.min(agora - new Date(simulado.iniciadoEm).getTime(), simulado.duracaoMin * 60_000);
  const questoes: SimuladoResultado["questoes"] = [];
  const tentativas: AttemptRecord[] = [];

  simulado.questoes.forEach((sq, i) => {
    const q = QUESTAO_POR_ID.get(sq.id);
    if (!q) return;
    const r = simulado.respostas[i];
    const acertou = r.escolha !== null && sq.ordem[r.escolha] === q.correta;
    questoes.push({
      id: q.id,
      materia: q.materia,
      ordem: sq.ordem,
      escolha: r.escolha,
      acertou,
      confianca: r.escolha !== null ? r.confianca : undefined,
      tempoMs: r.tempoMs,
    });
    if (r.escolha !== null) {
      tentativas.push({
        questionId: q.id,
        materia: q.materia,
        acertou,
        respondidaEm: finalizadoEm,
        tempoMs: r.tempoMs,
        modo: "simulado",
        confianca: r.confianca,
      });
    }
  });

  return {
    resultado: {
      id: simulado.id,
      iniciadoEm: simulado.iniciadoEm,
      finalizadoEm,
      duracaoMin: simulado.duracaoMin,
      usadoMs,
      encerradoPorTempo,
      questoes,
    },
    tentativas,
  };
}

export interface ParcialMateria {
  materia: SubjectId;
  total: number;
  acertos: number;
  branco: number;
  tempoMs: number;
}

export interface ResumoSimulado {
  total: number;
  acertos: number;
  branco: number;
  especificos: { acertos: number; total: number };
  gerais: { acertos: number; total: number };
  porMateria: ParcialMateria[];
  /** Linhas: confiança marcada; colunas: acertou / errou. */
  confianca: Record<Confianca | "sem", { acertos: number; erros: number }>;
  /** Blocos com mais questões perdidas (erradas + em branco). */
  blocosPerdidos: { bloco: BlocoEstudo; perdidas: number; total: number }[];
}

export function resumirSimulado(r: SimuladoResultado): ResumoSimulado {
  const porMateria = new Map<SubjectId, ParcialMateria>(
    ORDEM_CADERNO.map((m) => [m, { materia: m, total: 0, acertos: 0, branco: 0, tempoMs: 0 }]),
  );
  const confianca: ResumoSimulado["confianca"] = {
    certeza: { acertos: 0, erros: 0 },
    duvida: { acertos: 0, erros: 0 },
    chute: { acertos: 0, erros: 0 },
    sem: { acertos: 0, erros: 0 },
  };
  const blocos = new Map<string, { bloco: BlocoEstudo; perdidas: number; total: number }>();
  const especificos = { acertos: 0, total: 0 };
  const gerais = { acertos: 0, total: 0 };

  for (const q of r.questoes) {
    const p = porMateria.get(q.materia);
    if (!p) continue;
    p.total++;
    p.tempoMs += q.tempoMs;
    if (q.acertou) p.acertos++;
    if (q.escolha === null) p.branco++;
    else confianca[q.confianca ?? "sem"][q.acertou ? "acertos" : "erros"]++;
    const grupo = GERAIS.includes(q.materia) ? gerais : especificos;
    grupo.total++;
    if (q.acertou) grupo.acertos++;
    const questao = QUESTAO_POR_ID.get(q.id);
    if (questao) {
      const bloco = blocoDaQuestao(questao);
      const b = blocos.get(bloco.id) ?? { bloco, perdidas: 0, total: 0 };
      b.total++;
      if (!q.acertou) b.perdidas++;
      blocos.set(bloco.id, b);
    }
  }

  const lista = [...porMateria.values()].filter((p) => p.total > 0);
  return {
    total: r.questoes.length,
    acertos: r.questoes.filter((q) => q.acertou).length,
    branco: r.questoes.filter((q) => q.escolha === null).length,
    especificos,
    gerais,
    porMateria: lista,
    confianca,
    blocosPerdidos: [...blocos.values()]
      .filter((b) => b.perdidas > 0)
      .sort((a, b) => b.perdidas - a.perdidas || b.bloco.questoesEstimadas - a.bloco.questoesEstimadas),
  };
}

export type StatusBloco = "sem-dados" | "verde" | "amarelo" | "vermelho";

export interface DiagnosticoBloco {
  bloco: BlocoEstudo;
  /** Questões diferentes já respondidas (primeira resposta de cada uma). */
  n: number;
  acertosBrutos: number;
  /** Acerto estimado, puxado para a média da matéria quando há poucas respostas. */
  p: number;
  status: StatusBloco;
  /** Questões da prova que tendem a sair do bloco × chance de errar. */
  pontosEmJogo: number;
  convictos: number;
  chutes: number;
  marcadas: number;
  erradasAgora: number;
  ineditas: number;
  banco: number;
  /** Provas feitas fora do app: questões e erros estimados no bloco e erros marcados nele pelo candidato. */
  externo: { questoes: number; erros: number; marcados: number };
}

const PESO_ACERTO_CHUTE = 0.5;
const SUAVIZACAO = 4;

/**
 * Parte de cada bloco numa matéria lançada de prova de fora. Os erros marcados vão para o bloco
 * indicado; os acertos e os erros sem tópico se espalham pelos blocos na proporção do peso estimado,
 * porque a prova de fora não diz quantas questões havia de cada bloco.
 */
export function distribuirExterna(m: ProvaExternaMateria): { bloco: BlocoEstudo; questoes: number; erros: number; marcados: number }[] {
  const blocos = blocosDaMateria(m.materia);
  const pesoTotal = blocos.reduce((s, b) => s + b.questoesEstimadas, 0);
  if (!blocos.length || pesoTotal <= 0) return [];
  const questoes = Math.max(0, m.questoes || 0);
  const acertos = Math.min(Math.max(0, m.acertos || 0), questoes);
  const erros = questoes - acertos;
  const marcados = blocos.map((b) => Math.max(0, m.errosPorBloco?.[b.id] || 0));
  const totalMarcados = marcados.reduce((s, x) => s + x, 0);
  // Mais erros marcados do que erros (lançamento editado à mão): encolhe todos na mesma proporção.
  const fator = totalMarcados > erros ? erros / totalMarcados : 1;
  const semTopico = erros - totalMarcados * fator;
  return blocos.map((b, i) => {
    const parte = b.questoesEstimadas / pesoTotal;
    const errosBloco = marcados[i] * fator + semTopico * parte;
    return { bloco: b, questoes: acertos * parte + errosBloco, erros: errosBloco, marcados: marcados[i] };
  });
}

/**
 * Mapa de pontos fracos por bloco. O acerto usa só a primeira resposta de cada questão
 * (repetir a mesma questão mede memória, não matéria) e conta acerto no chute como meio.
 * Questões de provas feitas fora do app entram como primeiras respostas (sem confiança marcada).
 * Com poucas respostas o percentual cru engana (1 de 1 = 100%), então a estimativa é
 * suavizada em direção à média da matéria antes de virar verde, amarelo ou vermelho.
 */
export function diagnosticarBlocos(attempts: AttemptRecord[], externas: ProvaExterna[] = []): DiagnosticoBloco[] {
  const hist = historicoPorQuestao(attempts);
  const acc = new Map<string, Omit<DiagnosticoBloco, "p" | "status" | "pontosEmJogo"> & { peso: number }>();
  for (const b of BLOCOS) {
    acc.set(b.id, {
      bloco: b,
      n: 0,
      acertosBrutos: 0,
      peso: 0,
      convictos: 0,
      chutes: 0,
      marcadas: 0,
      erradasAgora: 0,
      ineditas: 0,
      banco: 0,
      externo: { questoes: 0, erros: 0, marcados: 0 },
    });
  }

  for (const q of BANCO) {
    const a = acc.get(blocoDaQuestao(q).id)!;
    a.banco++;
    const h = hist.get(q.id);
    if (!h) {
      a.ineditas++;
      continue;
    }
    if (!h.ultima.acertou) {
      a.erradasAgora++;
      if (h.ultima.confianca === "certeza") a.convictos++;
    }
    const pr = h.primeira;
    if (!pr) continue;
    a.n++;
    if (pr.acertou) {
      a.acertosBrutos++;
      a.peso += pr.confianca === "chute" ? PESO_ACERTO_CHUTE : 1;
    }
    if (pr.confianca) {
      a.marcadas++;
      if (pr.confianca === "chute") a.chutes++;
    }
  }

  for (const prova of externas) {
    for (const m of prova.materias) {
      for (const parte of distribuirExterna(m)) {
        const e = acc.get(parte.bloco.id)!.externo;
        e.questoes += parte.questoes;
        e.erros += parte.erros;
        e.marcados += parte.marcados;
      }
    }
  }

  // Respostas e acertos de cada bloco somando o app e as provas de fora.
  const total = (a: { n: number; peso: number; externo: DiagnosticoBloco["externo"] }) => ({
    n: a.n + a.externo.questoes,
    peso: a.peso + a.externo.questoes - a.externo.erros,
  });
  const totalGlobal = { n: 0, peso: 0 };
  const porMateria = new Map<SubjectId, { n: number; peso: number }>();
  for (const a of acc.values()) {
    const t = total(a);
    totalGlobal.n += t.n;
    totalGlobal.peso += t.peso;
    const m = porMateria.get(a.bloco.materia) ?? { n: 0, peso: 0 };
    m.n += t.n;
    m.peso += t.peso;
    porMateria.set(a.bloco.materia, m);
  }
  const base = (materia: SubjectId) => {
    const m = porMateria.get(materia)!;
    if (m.n >= 5) return m.peso / m.n;
    if (totalGlobal.n >= 10) return totalGlobal.peso / totalGlobal.n;
    return 0.6;
  };

  return [...acc.values()]
    .map(({ peso, ...a }) => {
      const t = total({ ...a, peso });
      const p = (t.peso + SUAVIZACAO * base(a.bloco.materia)) / (t.n + SUAVIZACAO);
      const status: StatusBloco = t.n < 3 ? "sem-dados" : p >= 0.85 ? "verde" : p >= 0.65 ? "amarelo" : "vermelho";
      return { ...a, p, status, pontosEmJogo: a.bloco.questoesEstimadas * (1 - p) };
    })
    .sort((x, y) => y.pontosEmJogo - x.pontosEmJogo);
}

export interface DiagnosticoMateria {
  materia: SubjectId;
  /** Questões da matéria na prova (Anexo I). */
  questoes: number;
  pontosEmJogo: number;
  /** Acerto estimado na matéria: os blocos pesados pelas questões que cada um tende a ter. */
  p: number;
  status: StatusBloco;
  /** Primeiras respostas no app e questões lançadas de provas de fora. */
  n: number;
  externo: number;
}

/** Ranking de matérias: a soma dos pontos em jogo dos blocos de cada uma. */
export function diagnosticarMaterias(blocos: DiagnosticoBloco[]): DiagnosticoMateria[] {
  const porMateria = new Map<SubjectId, Omit<DiagnosticoMateria, "p" | "status">>();
  for (const d of blocos) {
    const materia = d.bloco.materia;
    const m = porMateria.get(materia) ?? { materia, questoes: 0, pontosEmJogo: 0, n: 0, externo: 0 };
    m.questoes += d.bloco.questoesEstimadas;
    m.pontosEmJogo += d.pontosEmJogo;
    m.n += d.n;
    m.externo += d.externo.questoes;
    porMateria.set(materia, m);
  }
  return [...porMateria.values()]
    .map((m) => {
      const p = m.questoes > 0 ? 1 - m.pontosEmJogo / m.questoes : 0;
      const status: StatusBloco = m.n + m.externo < 5 ? "sem-dados" : p >= 0.85 ? "verde" : p >= 0.65 ? "amarelo" : "vermelho";
      return { ...m, p, status };
    })
    .sort((x, y) => y.pontosEmJogo - x.pontosEmJogo);
}

export interface ErroExterno {
  prova: ProvaExterna;
  materia: ProvaExternaMateria;
  erros: number;
  /** Erros que o candidato marcou em cada bloco, do bloco com mais erros para o com menos. */
  porBloco: { bloco: BlocoEstudo; erros: number }[];
  semTopico: number;
}

/** Erros lançados de provas de fora para o caderno: uma entrada por matéria com erro ou com nota. */
export function errosExternos(externas: ProvaExterna[]): ErroExterno[] {
  const itens: ErroExterno[] = [];
  for (const prova of externas) {
    for (const m of prova.materias) {
      if (!SUBJECT_MAP[m.materia]) continue;
      const erros = Math.max(0, m.questoes - m.acertos);
      if (!erros && !m.nota?.trim()) continue;
      const porBloco = blocosDaMateria(m.materia)
        .map((bloco) => ({ bloco, erros: Math.max(0, m.errosPorBloco?.[bloco.id] || 0) }))
        .filter((b) => b.erros > 0)
        .sort((a, b) => b.erros - a.erros);
      const marcados = porBloco.reduce((s, b) => s + b.erros, 0);
      itens.push({ prova, materia: m, erros, porBloco, semTopico: Math.max(0, erros - marcados) });
    }
  }
  return itens;
}

/**
 * Reforço dirigido: alterna entre os blocos pedidos, priorizando em cada um as questões erradas
 * na última vez, depois as inéditas, depois as acertadas no chute ou na dúvida e, por fim, as
 * vistas há mais tempo. Tem correção a cada questão, como o treino normal.
 */
export function buildSessaoReforco(blocoIds: string[], attempts: AttemptRecord[], quantidade: number): Question[] {
  const hist = historicoPorQuestao(attempts);
  const filas = blocoIds.map((id) => {
    const questoes = BANCO.filter((q) => blocoDaQuestao(q).id === id);
    const erradas: Question[] = [];
    const ineditas: Question[] = [];
    const inseguras: Question[] = [];
    const resto: Question[] = [];
    for (const q of shuffle(questoes)) {
      const h = hist.get(q.id);
      if (!h) ineditas.push(q);
      else if (!h.ultima.acertou) erradas.push(q);
      else if (h.ultima.confianca === "chute" || h.ultima.confianca === "duvida") inseguras.push(q);
      else resto.push(q);
    }
    resto.sort((a, b) => tempo(hist.get(a.id)!.ultima) - tempo(hist.get(b.id)!.ultima));
    return [...erradas, ...ineditas, ...inseguras, ...resto];
  });

  const escolhidas: Question[] = [];
  while (escolhidas.length < quantidade && filas.some((f) => f.length)) {
    for (const fila of filas) {
      if (escolhidas.length >= quantidade) break;
      const q = fila.shift();
      if (q) escolhidas.push(q);
    }
  }
  return shuffle(escolhidas).map(embaralharAlternativas);
}

export type MotivoCaderno = "convicto" | "erro" | "chute";

export interface ItemCaderno {
  questao: Question;
  bloco: BlocoEstudo;
  motivo: MotivoCaderno;
  quando: string;
}

const ORDEM_MOTIVO: Record<MotivoCaderno, number> = { convicto: 0, erro: 1, chute: 2 };

/**
 * Caderno de erros: toda questão cuja última resposta foi errada, mais as acertadas no chute
 * (o ponto veio, o conhecimento não). Ordenado pelo peso da matéria na prova e do bloco.
 */
export function itensCaderno(attempts: AttemptRecord[]): ItemCaderno[] {
  const hist = historicoPorQuestao(attempts);
  const itens: ItemCaderno[] = [];
  for (const [id, h] of hist) {
    const questao = QUESTAO_POR_ID.get(id);
    if (!questao) continue;
    const u = h.ultima;
    const motivo: MotivoCaderno | null = !u.acertou ? (u.confianca === "certeza" ? "convicto" : "erro") : u.confianca === "chute" ? "chute" : null;
    if (motivo) itens.push({ questao, bloco: blocoDaQuestao(questao), motivo, quando: u.respondidaEm });
  }
  const ordemMateria = (m: SubjectId) => ORDEM_CADERNO.indexOf(m);
  return itens.sort(
    (a, b) =>
      (SUBJECT_MAP[b.questao.materia]?.peso ?? 0) - (SUBJECT_MAP[a.questao.materia]?.peso ?? 0) ||
      ordemMateria(a.questao.materia) - ordemMateria(b.questao.materia) ||
      b.bloco.questoesEstimadas - a.bloco.questoesEstimadas ||
      a.bloco.id.localeCompare(b.bloco.id) ||
      ORDEM_MOTIVO[a.motivo] - ORDEM_MOTIVO[b.motivo],
  );
}
