/**
 * Temas de Matemática e Raciocínio Lógico: um por aula de RLM da PRF Policial, o curso em estudo agora. Lógica
 * proposicional (proposições, tabelas-verdade, equivalências, argumentação, diagramas lógicos), matrizes e calendário
 * não têm aula na PRF Policial: essas questões ficam só no curso de origem.
 */
export type TemaRlm =
  | "rlm.conjuntos"
  | "rlm.numeros"
  | "rlm.expressoes"
  | "rlm.medidas"
  | "rlm.razao"
  | "rlm.regra-tres"
  | "rlm.porcentagem"
  | "rlm.equacoes"
  | "rlm.funcoes"
  | "rlm.funcao-1grau"
  | "rlm.funcao-2grau"
  | "rlm.exponencial"
  | "rlm.logaritmo"
  | "rlm.pa-pg"
  | "rlm.geometria-plana"
  | "rlm.solidos"
  | "rlm.sequencias"
  | "rlm.deslocamento"
  | "rlm.estatistica"
  | "rlm.media"
  | "rlm.mediana"
  | "rlm.moda"
  | "rlm.variancia"
  | "rlm.contagem"
  | "rlm.probabilidade";

export const TEMAS_RLM: { id: TemaRlm; nome: string }[] = [
  { id: "rlm.conjuntos", nome: "Conjuntos" },
  { id: "rlm.numeros", nome: "Conjuntos numéricos" },
  { id: "rlm.expressoes", nome: "Potências, raízes e expressões" },
  { id: "rlm.medidas", nome: "Unidades de medida" },
  { id: "rlm.razao", nome: "Razão, proporção e frações" },
  { id: "rlm.regra-tres", nome: "Regra de três" },
  { id: "rlm.porcentagem", nome: "Porcentagem" },
  { id: "rlm.equacoes", nome: "Equações e sistemas" },
  { id: "rlm.funcoes", nome: "Funções" },
  { id: "rlm.funcao-1grau", nome: "Função do 1º grau" },
  { id: "rlm.funcao-2grau", nome: "Função do 2º grau" },
  { id: "rlm.exponencial", nome: "Exponencial" },
  { id: "rlm.logaritmo", nome: "Logaritmo" },
  { id: "rlm.pa-pg", nome: "PA e PG" },
  { id: "rlm.geometria-plana", nome: "Geometria plana" },
  { id: "rlm.solidos", nome: "Sólidos" },
  { id: "rlm.sequencias", nome: "Sequências" },
  { id: "rlm.deslocamento", nome: "Deslocamento" },
  { id: "rlm.estatistica", nome: "Estatística descritiva" },
  { id: "rlm.media", nome: "Médias" },
  { id: "rlm.mediana", nome: "Mediana" },
  { id: "rlm.moda", nome: "Moda" },
  { id: "rlm.variancia", nome: "Variância e dispersão" },
  { id: "rlm.contagem", nome: "Contagem" },
  { id: "rlm.probabilidade", nome: "Probabilidade" },
];

/** PRF Policial: a aula de cada tema, na ordem do curso (rlm-01 a rlm-25). */
export const AULA_POL_DO_TEMA_RLM = Object.fromEntries(
  TEMAS_RLM.map((t, i) => [t.id, `rlm-${String(i + 1).padStart(2, "0")}`]),
) as Record<TemaRlm, string>;

/** PRF ADM, pelo tópico. Os dois tópicos largos (contagem e probabilidade; problemas) vão questão por questão. */
export const TEMA_TOPICO_ADM_RLM: Record<string, TemaRlm | null> = {
  "Operações com conjuntos": "rlm.conjuntos",
};

/** PRF ADM, questão por questão, pelo que cada uma cobra de fato. */
export const TEMA_QUESTAO_ADM_RLM: Record<string, TemaRlm | null> = {
  // Princípios de contagem e probabilidade
  "prf-rlm-022": "rlm.contagem",
  "prf-rlm-023": "rlm.contagem",
  "prf-rlm-pcpr26-q27": "rlm.contagem",
  "prf-rlm-024": "rlm.probabilidade",
  "prf-rlm-039": "rlm.probabilidade",
  "prf-rlm-pcpr26-q79": "rlm.probabilidade",
  "prf-rlm-prf14-q19": "rlm.probabilidade",
  "prf-rlm-pf25-i024": "rlm.probabilidade",
  "prf-rlm-prf12-i103": "rlm.probabilidade",
  "prf-rlm-prf12-i104": "rlm.probabilidade",
  "prf-rlm-prf12-i112": "rlm.probabilidade",
  "prf-rlm-prf12-i113": "rlm.probabilidade",
  "prf-rlm-prf12-i114": "rlm.probabilidade",
  "prf-rlm-prf12-i115": "rlm.probabilidade",
  "prf-rlm-prf12-i116": "rlm.probabilidade",
  "prf-rlm-cnu25-q35": "rlm.probabilidade",
  "prf-rlm-cnu25-q43": "rlm.probabilidade",
  "prf-rlm-cnu25-q44": "rlm.probabilidade",
  // Problemas aritméticos, geométricos e matriciais (matrizes e calendário ficam fora)
  "prf-rlm-028": "rlm.razao",
  "prf-rlm-029": "rlm.deslocamento",
  "prf-rlm-038": "rlm.porcentagem",
  "prf-rlm-pcpr26-q26": "rlm.regra-tres",
  "prf-rlm-prf14-q21": "rlm.equacoes",
  "prf-rlm-prf12-i041": "rlm.solidos",
  "prf-rlm-prf12-i042": "rlm.porcentagem",
  "prf-rlm-prf12-i044": "rlm.porcentagem",
  "prf-rlm-prf12-i045": "rlm.razao",
  "prf-rlm-prf12-i046": "rlm.pa-pg",
  "prf-rlm-prf12-i048": "rlm.expressoes",
  "prf-rlm-prf12-i049": "rlm.porcentagem",
  "prf-rlm-prf12-i050": "rlm.numeros",
  "prf-rlm-cnu25-q32": "rlm.numeros",
  "prf-rlm-cnu25-q33": "rlm.razao",
  "prf-rlm-cnu25-q34": "rlm.equacoes",
  "prf-rlm-cnu25-q36": "rlm.numeros",
  "prf-rlm-cnu25-q37": "rlm.porcentagem",
  "prf-rlm-cnu25-q39": "rlm.regra-tres",
  "prf-rlm-cnu25-q40": "rlm.medidas",
  "prf-rlm-cnu25-q41": "rlm.porcentagem",
  "prf-rlm-cnu25-q42": "rlm.exponencial",
};

/** PCPR, pelo tópico (os de lógica, quadros lógicos e calendário ficam fora). */
export const TEMA_TOPICO_PCPR_RLM: Record<string, TemaRlm | null> = {
  "Sequências e padrões": "rlm.sequencias",
  "Sequências lógicas e sequências numéricas": "rlm.sequencias",
  "Razão, proporção e porcentagem": "rlm.porcentagem",
  "Porcentagem, razão e proporção": "rlm.porcentagem",
  "Análise combinatória e probabilidade": "rlm.contagem",
  "Contagem e probabilidade básica": "rlm.contagem",
  "Princípios de contagem: arranjo, combinação e permutação simples": "rlm.contagem",
  "Teoria dos conjuntos": "rlm.conjuntos",
  "Diagramas lógicos (conjuntos, Venn) aplicados a problemas com dados do enunciado": "rlm.conjuntos",
};

export const TEMA_QUESTAO_PCPR_RLM: Record<string, TemaRlm | null> = {};
