import type { ProvaReal } from "../lib/types";

/**
 * Cadernos oficiais de provas anteriores (FGV/UFPR) para treino cronometrado
 * fora do app, em ordem de prioridade para a reta final. Todos os links foram
 * conferidos (respondem 200) em 05/10/2026 — não editar/adivinhar links.
 */
export const PROVAS_REAIS: ProvaReal[] = [
  {
    id: "pcpi",
    nome: "PC-PI 2025 · Oficial Investigador (FGV)",
    totalQuestoes: 100,
    semana: "Prioridade 1 · simulado completo",
    detalhe: "A prova FGV policial mais recente — padrão atual da banca. Faça inteira e cronometrada no começo da semana e gaste o resto do tempo revisando os erros.",
    links: [
      { label: "Página do concurso (cadernos)", url: "https://conhecimento.fgv.br/concursos/pcpi25" },
      {
        label: "Gabaritos definitivos (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/pc-pi-diversos-gabaritos-para-publicacao_1.pdf",
      },
    ],
  },
  {
    id: "pcrj-invest",
    nome: "PC-RJ 2022 · Investigador (FGV)",
    totalQuestoes: 100,
    semana: "Prioridade 2 · segundo simulado",
    detalhe: "100 questões, como a sua prova: ótima para treinar ritmo e cartão. Sem tempo? Faça só Português, Informática e os blocos de Direito.",
    links: [
      {
        label: "Caderno (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/investigador_policial_de_3a_classeinvest_tipo_1_revisada.pdf",
      },
      {
        label: "Gabarito definitivo (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/pcrj2021e2_gabarito_definitivo.pdf",
      },
    ],
  },
  {
    id: "pcam",
    nome: "PC-AM 2022 · Investigador (FGV)",
    totalQuestoes: 80,
    semana: "Prioridade 3 · Português, Informática e RLM",
    detalhe: "A prova FGV mais parecida com a sua. Se não couber inteira na semana, resolva os blocos de Português, Informática e Raciocínio Lógico.",
    links: [
      {
        label: "Caderno (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/investigador_de_policia_-_4a_classens100_tipo_1.pdf",
      },
      {
        label: "Gabarito definitivo (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/pcam2021e02_gabarito_definitivo.pdf",
      },
      {
        label: "Prova + gabarito (PCI)",
        url: "https://www.pciconcursos.com.br/provas/download/investigador-de-policia-policia-civil-am-fgv-2022",
      },
    ],
  },
  {
    id: "pcmg",
    nome: "PC-MG 2025 · Investigador (FGV)",
    totalQuestoes: 70,
    semana: "Blocos de Direito e Medicina Legal",
    detalhe: "Prova FGV policial recente. Use os blocos de Penal, Processo Penal, Legislação Extravagante, Direitos Humanos e Medicina Legal (base de Ciências Forenses).",
    links: [
      {
        label: "Caderno (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/investigador-de-policia-icns401-tipo-1.pdf",
      },
      {
        label: "Gabarito definitivo (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/gabaritodefinitivo_pcgmpinvestigador.pdf",
      },
      { label: "Página do concurso", url: "https://conhecimento.fgv.br/concursos/pcmg24" },
    ],
  },
  {
    id: "pcrn",
    nome: "PC-RN 2021 · Agente/Escrivão (FGV)",
    totalQuestoes: 60,
    semana: "Blocos de Português, informática e direitos",
    detalhe: "Cargos equivalentes ao seu. Foque nos blocos de Português, informática e direitos.",
    links: [
      {
        label: "Caderno (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/anexo-sem-titulo-00318-2.pdf",
      },
      {
        label: "Gabarito definitivo (FGV)",
        url: "https://conhecimento.fgv.br/sites/default/files/concursos/pcrn_gabarito_definitivo.pdf",
      },
      { label: "Página do concurso", url: "https://conhecimento.fgv.br/concursos/pcrn20" },
    ],
  },
  {
    id: "pcrj",
    nome: "PC-RJ 2021 · Inspetor (FGV)",
    totalQuestoes: 80,
    semana: "Bloco de Direito",
    detalhe: "Volume de Penal, Processo Penal e Constitucional em nível de noções.",
    links: [{ label: "Página do concurso (cadernos)", url: "https://conhecimento.fgv.br/concursos/pcrj21" }],
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
    semana: "Só Realidade do PR e legislação",
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
