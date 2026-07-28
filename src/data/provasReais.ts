import type { ProvaReal } from "../lib/types";

/**
 * Cadernos oficiais de provas anteriores (FGV/UFPR) para treino cronometrado
 * fora do app. URLs e descrições preservadas como fornecidas — não
 * editar/adivinhar links.
 */
export const PROVAS_REAIS: ProvaReal[] = [
  {
    id: "pcam",
    nome: "PC-AM 2022 · Investigador (FGV)",
    totalQuestoes: 80,
    semana: "Semana 1 · diagnóstico",
    detalhe: "A prova FGV mais parecida com a sua. Faça inteira, cronometrada (4h).",
    links: [
      {
        label: "Caderno (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/investigador_de_policia_-_4a_classens100_tipo_1.pdf",
      },
      {
        label: "Prova + gabarito (PCI)",
        url: "https://www.pciconcursos.com.br/provas/download/investigador-de-policia-policia-civil-am-fgv-2022",
      },
    ],
  },
  {
    id: "pcrn",
    nome: "PC-RN 2021 · Agente/Escrivão (FGV)",
    totalQuestoes: 60,
    semana: "Semana 4 · sábado",
    detalhe: "Cargos equivalentes ao seu. Foque nos blocos de Português, informática e direitos.",
    links: [
      {
        label: "Caderno (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/anexo-sem-titulo-00318-2.pdf",
      },
      { label: "Página do concurso", url: "https://conhecimento.fgv.br/concursos/pcrn20" },
    ],
  },
  {
    id: "pcrj",
    nome: "PC-RJ 2021 · Inspetor (FGV)",
    totalQuestoes: 80,
    semana: "Semana 6 · sábado",
    detalhe: "Volume de Penal, Processo Penal e Constitucional em nível de noções.",
    links: [{ label: "Página do concurso (cadernos)", url: "https://conhecimento.fgv.br/concursos/pcrj21" }],
  },
  {
    id: "pcpi",
    nome: "PC-PI 2025 · Oficial Investigador (FGV)",
    totalQuestoes: 100,
    semana: "Semana 9 · simulado 1",
    detalhe: "A prova FGV policial mais recente — padrão atual da banca. Use como simulado completo.",
    links: [{ label: "Página do concurso (cadernos)", url: "https://conhecimento.fgv.br/concursos/pcpi25" }],
  },
  {
    id: "pmsp",
    nome: "PM-SP 2025 · Soldado (FGV)",
    totalQuestoes: 60,
    semana: "Baterias de Português/RLM",
    detalhe: "Melhor treino de interpretação FGV em contexto policial. Use os blocos de PT e matemática.",
    links: [
      {
        label: "Prova no QConcursos",
        url: "https://www.qconcursos.com/questoes-militares/provas/fgv-2025-pm-sp-soldado-pm-de-2-classe",
      },
    ],
  },
  {
    id: "pcpr20",
    nome: "PCPR 2020/21 · Investigador (NC-UFPR)",
    totalQuestoes: 50,
    semana: "Semana 10",
    detalhe: "Banca diferente — use só para Realidade do Paraná e legislação institucional.",
    links: [
      { label: "Caderno (UFPR)", url: "https://servicos.nc.ufpr.br/documentos/pcpr2020/prova/304A.pdf" },
      {
        label: "Prova + gabarito (PCI)",
        url: "https://www.pciconcursos.com.br/provas/download/investigador-de-policia-policia-civil-pr-ufpr-2021",
      },
    ],
  },
];
