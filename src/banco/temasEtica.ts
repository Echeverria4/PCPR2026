/**
 * Temas de Ética: um por aula da PRF Policial (etica-01 a etica-05). Regime disciplinar da Lei 8.112/1990 e
 * improbidade entram por Direito Administrativo; conflito de interesses (Lei 12.813/2013) e acesso à informação
 * (Lei 12.527/2011) não têm aula de Ética na PRF Policial.
 * Os nomes não começam igual a um assunto do próprio curso (ex.: "Ética e moral"), para o filtro do treino não parecer repetido.
 */
export type TemaEtica = "etica.fundamentos" | "etica.d1171" | "etica.d6029" | "etica.alta-adm" | "etica.d9203";

export const TEMAS_ETICA: { id: TemaEtica; nome: string }[] = [
  { id: "etica.fundamentos", nome: "Fundamentos da ética" },
  { id: "etica.d1171", nome: "Decreto 1.171/1994" },
  { id: "etica.d6029", nome: "Decreto 6.029/2007" },
  { id: "etica.alta-adm", nome: "Código da Alta Administração" },
  { id: "etica.d9203", nome: "Decreto 9.203/2017" },
];

/** PRF Policial: a aula de cada tema, na ordem do curso (etica-01 a etica-05). */
export const AULA_POL_DO_TEMA_ETICA = Object.fromEntries(
  TEMAS_ETICA.map((t, i) => [t.id, `etica-${String(i + 1).padStart(2, "0")}`]),
) as Record<TemaEtica, string>;

/** PRF ADM, pelo tópico. */
export const TEMA_TOPICO_ADM_ETICA: Record<string, TemaEtica | null> = {
  "Ética e moral": "etica.fundamentos",
  "Ética, princípios e valores": "etica.fundamentos",
  "Ética e democracia: exercício da cidadania": "etica.fundamentos",
  "Código de Ética do servidor (Decreto 1.171/1994)": "etica.d1171",
  "Sistema de Gestão da Ética (Decreto 6.029/2007)": "etica.d6029",
};

/** PRF ADM, questão por questão: "Ética e função pública" mistura temas com e sem aula de Ética. */
export const TEMA_QUESTAO_ADM_ETICA: Record<string, TemaEtica | null> = {
  "prf-etica-010": "etica.fundamentos",
  "prf-etica-pf25-i027": "etica.fundamentos",
  "prf-etica-011": "etica.d1171",
  // Lei de Acesso à Informação: sem aula de Ética
  "prf-etica-cnu25-q26": null,
};
