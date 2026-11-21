import { LINGUA, LINGUA_FORA } from "./lingua";
import { montarBanco, type BancoCurso, type DadosCursoCompleto } from "../tipos";
import { compartilhadasPol } from "../../../../banco/compartilhado";
import { AULAS_DISCURSIVAS } from "./discursivas";
import { AULAS_CARREIRA } from "./carreira";
import { AULAS_ECA } from "./eca";
import { AULAS_DH } from "./dh";
import { AULAS_ESPECIAL } from "./especial";
import { AULAS_PROC } from "./proc";
import { AULAS_PENAL } from "./penal";
import { AULAS_CON } from "./constitucional";
import { AULAS_ADM_B } from "./adm-b";
import { AULAS_ADM_A } from "./adm-a";
import { AULAS_TRANSITO } from "./transito";
import { QUESTOES_DETRAN_AL_2026 } from "./transito/detranAl2026";
import { QUESTOES_DETRAN_AL_2026_BASICOS } from "./treino/detranAl2026Basicos";
import { QUESTOES_CACHOEIRO_2024 } from "./treino/cachoeiro2024";
import { QUESTOES_CANAA_2025 } from "./treino/canaa2025";
import { QUESTOES_MARICA_2023 } from "./treino/marica2023";
import { AULAS_ESPANHOL } from "./espanhol";
import { AULAS_INGLES } from "./ingles";
import { AULAS_GEOPOLITICA } from "./geopolitica";
import { AULAS_ETICA } from "./etica";
import { AULAS_FISICA } from "./fisica";
import { AULAS_INFO } from "./info";
import { AULAS_RLM } from "./rlm";
import { AULAS_PT } from "./pt";

/**
 * Aulas com questões escondidas a pedido (12/11/26): as 9 de Redação Oficial (pt-15) e as 41 de Discursivas
 * (técnica da prova escrita) saem do treino e da aula. Os resumos, os mapas e a aba Redação continuam.
 * Para voltar, basta tirar a aula daqui (ela some do treino pelo id da aula, sem tirar o grupo dos Resumos).
 */
const AULAS_ESCONDIDAS = new Set(["pt-15", ...AULAS_DISCURSIVAS.map((a) => a.aula)]);

function semEscondidas(banco: BancoCurso): BancoCurso {
  return { ...banco, questoes: banco.questoes.filter((q) => !AULAS_ESCONDIDAS.has(q.aula ?? "") && q.materia !== LINGUA_FORA) };
}

/**
 * Banco por tema (12/11/26): as questões da PRF ADM e da PCPR do mesmo assunto (Português, RLM, Informática, Ética, Constitucional, Administrativo (no Curso A), Penal, Processo Penal, Legislação Penal Especial, crimes de trânsito e Direitos Humanos) entram na aula certa,
 * com selo de origem. Questão nova numa fonte entra aqui sozinha (src/banco/compartilhado.ts).
 */
function comCompartilhadas(banco: BancoCurso): BancoCurso {
  return { ...banco, questoes: [...banco.questoes, ...compartilhadasPol(banco.questoes)] };
}

/**
 * Provas públicas de outros concursos (DETRAN, municípios) no treino (21/11/26): itens originais com gabarito da banca,
 * na aula do assunto, com selo e fonte. Entram depois das outras para não mudar os ids montados por posição.
 */
function comProvasTreino(banco: BancoCurso): BancoCurso {
  return { ...banco, questoes: [...banco.questoes, ...QUESTOES_DETRAN_AL_2026, ...QUESTOES_DETRAN_AL_2026_BASICOS, ...QUESTOES_CACHOEIRO_2024, ...QUESTOES_CANAA_2025, ...QUESTOES_MARICA_2023] };
}

/** Cada matéria entra aqui quando o lote dela fica pronto. */
export const DADOS: DadosCursoCompleto = {
  banco: semEscondidas(comProvasTreino(comCompartilhadas(montarBanco("pol", { pt: AULAS_PT, rlm: AULAS_RLM, info: AULAS_INFO, fisica: AULAS_FISICA, etica: AULAS_ETICA, geopolitica: AULAS_GEOPOLITICA, [LINGUA]: { ingles: AULAS_INGLES, espanhol: AULAS_ESPANHOL }[LINGUA], transito: AULAS_TRANSITO, "adm-a": AULAS_ADM_A, "adm-b": AULAS_ADM_B, con: AULAS_CON, penal: AULAS_PENAL, proc: AULAS_PROC, especial: AULAS_ESPECIAL, dh: AULAS_DH, eca: AULAS_ECA, carreira: AULAS_CARREIRA, discursivas: AULAS_DISCURSIVAS })))),
  semQuestoes: ["carreira", "bizus", "trilha", "ebooks", "mentoria", ...AULAS_ESCONDIDAS],
  faixa: [
    { forte: "Sem edital", texto: "Novo concurso ainda sem edital nem banca definida" },
    { forte: "Nível 4 e 5", texto: "Questões difíceis, no nível da prova de nível superior" },
  ],
  redacao: () => import("./redacao/RedacaoPrf"),
  mapas: () => import("./mapas/MapasPrf"),
  livro: () => import("./livro/LivroCtb"),
  modulos: [
    {
      id: "infracoes",
      grupo: "transito",
      emoji: "🚨",
      titulo: "Infrações: de gravíssima a leve",
      descricao: "Todas as infrações do CTB (arts. 161 a 255) por natureza, com o artigo, a multa, os pontos e as normas que completam.",
      curto: "as infrações",
      carregar: () => import("./infracoes/ModuloInfracoes"),
    },
  ],
};
