/**
 * PMPR Soldado como fonte do banco por tema (pedido de 25/11/26: "coloque essas questões no banco"). Cada aula da PMPR
 * tem um tema padrão; o assunto (tópico) ou a questão podem trocar esse tema. null = a PRF Policial não tem aula do
 * assunto: lógica proposicional, hardware, Linux, Android, LibreOffice, backup, funções da linguagem, variação
 * linguística, figuras de linguagem, princípios fundamentais, partidos, Poder Judiciário, militares dos Estados e o
 * Código de Conduta da ONU para os agentes da lei.
 */
import type { TemaPt } from "./temasPt";
import type { TemaCon } from "./temasCon";
import type { TemaDh } from "./temasDh";
import type { TemaEspecial } from "./temasEspecial";

type Tabela = Record<string, string | null>;

export interface TabelaPmpr {
  /** Aula da PMPR → tema. */
  aula: Tabela;
  /** "aula|tópico" → tema. */
  topico: Tabela;
  /** Id da questão → tema. */
  questao: Tabela;
}

export function temaPmpr(t: TabelaPmpr) {
  return (q: { id: string; topico: string; aula?: string }): string | null => {
    if (q.id in t.questao) return t.questao[q.id];
    const a = q.aula ?? "";
    const k = `${a}|${q.topico}`;
    if (k in t.topico) return t.topico[k];
    return t.aula[a] ?? null;
  };
}

export const PMPR_PT: TabelaPmpr = {
  aula: {
    "pt-a01": "pt.interpretacao",
    "pt-a02": "pt.tipologia",
    "pt-a03": "pt.coesao",
    "pt-a04": "pt.semantica",
    "pt-a05": "pt.classes",
    "pt-a06": "pt.verbos",
    "pt-a07": "pt.periodo-simples",
    "pt-a08": "pt.periodo-simples",
    "pt-a09": "pt.periodo-composto",
  } satisfies Record<string, TemaPt>,
  topico: {
    "pt-a01|Funções da linguagem": null,
    "pt-a01|Variação linguística": null,
    "pt-a01|Níveis de leitura": null,
    "pt-a01|Frase": "pt.periodo-simples",
    "pt-a01|Critérios de textualidade": "pt.coesao",
    "pt-a01|Estrutura da frase": "pt.periodo-composto",
    "pt-a03|Semântica": "pt.semantica",
    "pt-a03|Figuras de linguagem": null,
    "pt-a03|Vícios de linguagem": "pt.semantica",
    "pt-a05|Pronome": "pt.pronomes",
    "pt-a06|Advérbio": "pt.classes",
    "pt-a06|Preposição": "pt.conectivos",
    "pt-a08|Vozes verbais": "pt.vozes",
    "pt-a10|Concordância verbal": "pt.concordancia",
    "pt-a10|Concordância nominal": "pt.concordancia",
    "pt-a10|Regência": "pt.regencia-crase",
    "pt-a10|Crase": "pt.regencia-crase",
    "pt-a10|Colocação pronominal": "pt.pronomes",
    "pt-a10|Pontuação": "pt.pontuacao",
  },
  questao: {
    // Correlação verbal e paralelismo têm aula própria na PRF Policial; a concessiva é conjunção.
    "pm-pt-a03-08": "pt.vozes",
    "pm-pt-a03-09": "pt.conectivos",
    "pm-pt-a03-10": "pt.periodo-composto",
    "pm-pt-a06-01": "pt.vozes",
    "pm-pt-a06-02": "pt.vozes",
    "pm-pt-a06-03": "pt.vozes",
    "pm-pt-a06-09": "pt.vozes",
  },
};

export const PMPR_RLM: TabelaPmpr = {
  aula: {
    "rlm-a04": "rlm.conjuntos",
    "rlm-a05": "rlm.contagem",
    "rlm-a06": "rlm.geometria-plana",
    "rlm-a07": "rlm.solidos",
    "rlm-a08": "rlm.media",
    "rlm-a09": "rlm.estatistica",
  },
  topico: {
    "rlm-a01|Razão e proporção": "rlm.razao",
    "rlm-a01|Regra de três": "rlm.regra-tres",
    "rlm-a01|Porcentagem": "rlm.porcentagem",
    "rlm-a04|Diagramas lógicos": null,
    "rlm-a05|Probabilidade": "rlm.probabilidade",
    "rlm-a06|Unidades de medida": "rlm.medidas",
    "rlm-a08|Conceitos básicos": "rlm.estatistica",
    "rlm-a08|Mediana": "rlm.mediana",
    "rlm-a08|Moda": "rlm.moda",
    "rlm-a09|Separatrizes": "rlm.mediana",
  },
  questao: {
    "pm-rlm-a04-08": "rlm.numeros",
    "pm-rlm-a08-05": "rlm.mediana",
    "pm-rlm-a08-07": "rlm.estatistica",
    "pm-rlm-a08-10": "rlm.mediana",
  },
};

export const PMPR_INFO: TabelaPmpr = {
  aula: {
    "info-a02": "info.windows11",
    "info-a05": "info.internet",
    "info-a06": "info.navegadores",
    "info-a07": "info.navegadores",
    "info-a08": "info.navegadores",
    "info-a09": "info.seguranca",
  },
  topico: {
    "info-a05|Nuvem": "info.nuvem",
    "info-a05|E-mail": "info.email",
    "info-a05|Busca na web": "info.busca",
    "info-a05|Redes privadas": "info.intranet",
    "info-a09|Backup": null,
    "info-a09|Malwares": "info.malwares",
    "info-a09|Golpes": "info.malwares",
    "info-a09|Ataques": "info.malwares",
    "info-a09|Defesa": "info.protecao",
  },
  questao: {},
};

export const PMPR_CON: TabelaPmpr = {
  aula: {
    "con-a02": "con.art5-garantias",
    "con-a03": "con.nacionalidade",
    "con-a04": "con.politicos",
    "con-a07": "con.defesa",
  } satisfies Record<string, TemaCon>,
  topico: {
    "con-a01|Cláusulas pétreas": "con.reforma",
    "con-a01|Federação": "con.estado",
    "con-a01|Soberania popular": "con.politicos",
    "con-a01|Dignidade da pessoa humana": "con.art5-garantias",
    "con-a02|Inviolabilidade da casa": "con.art5-liberdades",
    "con-a02|Reunião e associação": "con.art5-liberdades",
    "con-a02|Tratados de direitos humanos": "con.teoria-df",
    "con-a04|Partidos políticos": null,
    "con-a04|Fidelidade partidária": null,
  },
  questao: {},
};

/** Administração pública da CF (aula con-a05 da PMPR) vai para o Administrativo (Curso A) da PRF Policial. */
export const PMPR_CON_ADM: TabelaPmpr = {
  aula: { "con-a05": "adm.agentes" },
  topico: {
    "con-a05|Nepotismo": "adm.principios",
    "con-a05|Responsabilidade do Estado": "adm.responsabilidade",
    "con-a05|Militares dos Estados": null,
  },
  questao: {},
};

/** Direitos Humanos (lote 5): a DUDH e a Convenção Americana têm aula na PRF Policial; o Código de Conduta da ONU, não. */
export const PMPR_DH: TabelaPmpr = {
  aula: { "dh-a01": "dh.dudh", "dh-a02": "dh.interamericano", "dh-a03": null } satisfies Record<string, TemaDh | null>,
  topico: {},
  questao: {},
};

/**
 * Legislação (lote 6): hediondos, tortura, armas, drogas, crime organizado e abuso de autoridade têm aula na PRF
 * Policial. Maria da Penha, pessoa idosa, igualdade racial e a parte não penal do ECA, não. Na lei seca, cada questão
 * segue a sua lei.
 */
export const PMPR_LEG: TabelaPmpr = {
  aula: {
    "leg-a01": "esp.hediondos",
    "leg-a02": "esp.tortura",
    "leg-a03": "esp.armas",
    "leg-a04": "esp.drogas",
    "leg-a05": "esp.orcrim",
    "leg-a06": "esp.tortura",
    "leg-a07": null,
    "leg-a08": null,
    "leg-a09": null,
    "leg-a10": null,
    "leg-a11": null,
  } satisfies Record<string, TemaEspecial | null>,
  topico: {},
  questao: {
    "pm-leg-a11-01": "esp.drogas",
    "pm-leg-a11-02": "esp.orcrim",
    "pm-leg-a11-03": "esp.tortura",
    "pm-leg-a11-07": "esp.eca",
    "pm-leg-a11-08": "esp.eca",
    "pm-leg-a11-09": "esp.hediondos",
  } satisfies Record<string, TemaEspecial | null>,
};
