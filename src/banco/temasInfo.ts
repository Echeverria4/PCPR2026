/**
 * Temas de Informática: um por aula da PRF Policial (info-01 a info-15). Office (Word, Excel, PowerPoint), sistemas de
 * informação, hardware, celular, backup, programação, LGPD, Marco Civil, crimes cibernéticos, perícia e OSINT não têm
 * aula na PRF Policial: essas questões ficam só no curso de origem.
 * Os nomes não começam igual a um assunto do próprio curso (ex.: "Intranet"), para o filtro do treino não parecer repetido.
 */
export type TemaInfo =
  | "info.redes"
  | "info.internet"
  | "info.intranet"
  | "info.nuvem"
  | "info.busca"
  | "info.servicos"
  | "info.redes-sociais"
  | "info.mensageiros"
  | "info.navegadores"
  | "info.email"
  | "info.seguranca"
  | "info.malwares"
  | "info.protecao"
  | "info.windows10"
  | "info.windows11";

export const TEMAS_INFO: { id: TemaInfo; nome: string }[] = [
  { id: "info.redes", nome: "Fundamentos de redes" },
  { id: "info.internet", nome: "Internet e TCP/IP" },
  { id: "info.intranet", nome: "Redes privadas e VPN" },
  { id: "info.nuvem", nome: "Computação em nuvem" },
  { id: "info.busca", nome: "Pesquisa na web" },
  { id: "info.servicos", nome: "Mídia, grupos e Telnet/SSH" },
  { id: "info.redes-sociais", nome: "Redes sociais" },
  { id: "info.mensageiros", nome: "Mensageiros" },
  { id: "info.navegadores", nome: "Navegadores" },
  { id: "info.email", nome: "Correio eletrônico" },
  { id: "info.seguranca", nome: "Pilares e criptografia" },
  { id: "info.malwares", nome: "Malwares e golpes" },
  { id: "info.protecao", nome: "Proteção do computador" },
  { id: "info.windows10", nome: "Windows 10" },
  { id: "info.windows11", nome: "Windows 11" },
];

/** PRF Policial: a aula de cada tema, na ordem do curso (info-01 a info-15). */
export const AULA_POL_DO_TEMA_INFO = Object.fromEntries(
  TEMAS_INFO.map((t, i) => [t.id, `info-${String(i + 1).padStart(2, "0")}`]),
) as Record<TemaInfo, string>;

/** PRF ADM, pelo tópico. Os dois tópicos largos (internet e intranet; segurança) vão questão por questão. */
export const TEMA_TOPICO_ADM_INFO: Record<string, TemaInfo | null> = {
  Navegadores: "info.navegadores",
  "Correio eletrônico": "info.email",
  "Busca e pesquisa na web": "info.busca",
  "Grupos de discussão": "info.servicos",
};

/** PRF ADM, questão por questão, pelo que cada uma cobra de fato (backup fica fora: não tem aula). */
export const TEMA_QUESTAO_ADM_INFO: Record<string, TemaInfo | null> = {
  "prf-info-pf25-i041": "info.redes",
  "prf-info-015": "info.internet",
  "prf-info-042": "info.internet",
  "prf-info-043": "info.internet",
  "prf-info-pf25-i042": "info.internet",
  "prf-info-012": "info.intranet",
  "prf-info-prf12-i031": "info.intranet",
  "prf-info-pcpr26-q43": "info.intranet",
  "prf-info-014": "info.nuvem",
  "prf-info-041": "info.nuvem",
  "prf-info-059": "info.nuvem",
  "prf-info-pf25-i046": "info.nuvem",
  "prf-info-pf25-i048": "info.nuvem",
  "prf-info-prf14-q50": "info.servicos",
  "prf-info-prf14-q51": "info.navegadores",
  "prf-info-030": "info.seguranca",
  "prf-info-032": "info.seguranca",
  "prf-info-047": "info.seguranca",
  "prf-info-048": "info.seguranca",
  "prf-info-049": "info.seguranca",
  "prf-info-052": "info.seguranca",
  "prf-info-053": "info.seguranca",
  "prf-info-054": "info.seguranca",
  "prf-info-055": "info.seguranca",
  "prf-info-056": "info.seguranca",
  "prf-info-pcpr26-q51": "info.seguranca",
  "prf-info-prf12-i032": "info.seguranca",
  "prf-info-031": "info.malwares",
  "prf-info-033": "info.malwares",
  "prf-info-057": "info.malwares",
  "prf-info-058": "info.malwares",
  "prf-info-pcpr26-q44": "info.malwares",
  "prf-info-pcpr26-q45": "info.malwares",
  "prf-info-pcpr26-q52": "info.malwares",
  "prf-info-pf25-i049": "info.malwares",
  "prf-info-pf25-i050": "info.malwares",
  "prf-info-prf14-q49": "info.protecao",
  "prf-info-prf14-q54": "info.protecao",
};

/** PCPR: os tópicos misturam assuntos com e sem aula na PRF Policial, então tudo vai questão por questão. */
export const TEMA_TOPICO_PCPR_INFO: Record<string, TemaInfo | null> = {};

export const TEMA_QUESTAO_PCPR_INFO: Record<string, TemaInfo | null> = {
  "ti-078": "info.redes",
  "ti-079": "info.redes",
  "ti-101": "info.redes",
  "ti-106": "info.redes",
  "ti-019": "info.internet",
  "ti-027": "info.internet",
  "ti-057": "info.internet",
  "ti-082": "info.internet",
  "ti-086": "info.internet",
  "ti-089": "info.internet",
  "ti-091": "info.internet",
  "ti-095": "info.internet",
  "ti-096": "info.internet",
  "ti-102": "info.internet",
  "ti-020": "info.intranet",
  "ti-010": "info.nuvem",
  "ti-033": "info.nuvem",
  "ti-241": "info.nuvem",
  "ti-055": "info.navegadores",
  "ti-098": "info.email",
  "ti-001": "info.seguranca",
  "ti-005": "info.seguranca",
  "ti-009": "info.seguranca",
  "ti-011": "info.seguranca",
  "ti-022": "info.seguranca",
  "ti-023": "info.seguranca",
  "ti-002": "info.malwares",
  "ti-008": "info.malwares",
  "ti-029": "info.malwares",
  "ti-030": "info.malwares",
  "ti-080": "info.malwares",
  "ti-088": "info.malwares",
  "ti-103": "info.malwares",
  "ti-220": "info.malwares",
  "ti-221": "info.malwares",
  "ti-223": "info.malwares",
  "ti-021": "info.protecao",
  "ti-007": "info.windows10",
  "ti-074": "info.windows10",
  "ti-016": "info.windows11",
  "ti-044": "info.windows11",
  "ti-046": "info.windows11",
};
