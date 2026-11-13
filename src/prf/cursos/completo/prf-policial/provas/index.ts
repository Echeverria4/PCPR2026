import { montarItens, type ProvaAnterior } from "./tipos";

export type { ItemProva, ProvaAnterior, Idioma } from "./tipos";

const NOMES: Record<string, string> = {
  pt: "Língua Portuguesa",
  rlm: "Raciocínio Lógico-Matemático",
  info: "Informática",
  fisica: "Física",
  etica: "Ética no Serviço Público",
  geopolitica: "Geopolítica",
  ingles: "Inglês",
  espanhol: "Espanhol",
  transito: "Legislação de Trânsito",
  adm: "Direito Administrativo",
  carreira: "Carreira PRF",
  con: "Direito Constitucional",
  penal: "Direito Penal",
  proc: "Processo Penal",
  especial: "Legislação Especial",
  dh: "Direitos Humanos",
  estat: "Estatística",
  contab: "Contabilidade",
};

/** Cada prova carrega só quando aberta (arquivo próprio, fora do pacote inicial). */
export const PROVAS_ANTERIORES: ProvaAnterior[] = [
  {
    id: "prf2021",
    titulo: "PRF 2021",
    subtitulo: "Policial Rodoviário Federal · prova de 9/5/2021",
    banca: "Cebraspe",
    blocos: [
      { nome: "Bloco I", total: 52 },
      { nome: "Bloco II", total: 26 },
      { nome: "Bloco III", total: 32 },
    ],
    nomes: NOMES,
    linguas: true,
    anulados: "A banca anulou 10 itens, que ficaram fora: 1, 39, 45, 67, 69, 76, 83, 89, 98 e 99. O item 94 mudou de Errado para Certo depois dos recursos.",
    pagina: "https://www.cebraspe.org.br/concursos/prf_21",
    carregar: () =>
      import("./prf2021").then((m) =>
        montarItens(
          {
            prefixo: "pol-prova-prf21",
            prova: "PRF 2021 — Policial Rodoviário Federal",
            banca: "Cebraspe",
            aplicadaEm: "09/05/2021",
            fonte: "Cebraspe — 2021 — PRF — Policial Rodoviário Federal — prova de 9/5/2021",
            cadernos: { comum: "578_PRF_001_01", ingles: "578_PRF_ING_01", espanhol: "578_PRF_ESP_02" },
          },
          m.TEXTOS,
          m.BRUTO,
        ),
      ),
  },
  {
    id: "prf2019",
    titulo: "PRF 2019",
    subtitulo: "Policial Rodoviário Federal · prova de 3/2/2019",
    banca: "Cebraspe",
    blocos: [
      { nome: "Bloco I", total: 44 },
      { nome: "Bloco II", total: 33 },
      { nome: "Bloco III", total: 27 },
    ],
    nomes: NOMES,
    linguas: false,
    anulados: "A banca anulou 12 itens, que ficaram fora: 3, 31, 33, 61, 62, 72, 73, 75, 83, 91, 109 e 113. Os itens 24 a 26 e 85 dependem de figuras e também ficaram fora.",
    pagina: "https://www.cebraspe.org.br/concursos/prf_18",
    carregar: () =>
      import("./prf2019").then((m) =>
        montarItens(
          {
            prefixo: "pol-prova-prf19",
            prova: "PRF 2019 — Policial Rodoviário Federal",
            banca: "Cebraspe",
            aplicadaEm: "03/02/2019",
            fonte: "Cebraspe — 2019 — PRF — Policial Rodoviário Federal — prova de 3/2/2019",
            cadernos: { comum: "440_PRF_001_00" },
          },
          m.TEXTOS,
          m.BRUTO,
        ),
      ),
  },
  {
    id: "pf2025",
    titulo: "PF 2025",
    subtitulo: "Agente de Polícia Federal · prova de 27/7/2025",
    banca: "Cebraspe",
    blocos: [
      { nome: "Bloco I", total: 58 },
      { nome: "Bloco II", total: 31 },
      { nome: "Bloco III", total: 21 },
    ],
    nomes: NOMES,
    linguas: false,
    anulados: "A banca anulou 10 itens, que ficaram fora: 37, 52, 62, 69, 85, 91, 94, 111, 112 e 117. O item 12 mudou de Certo para Errado depois dos recursos.",
    pagina: "https://www.cebraspe.org.br/concursos/pf_25",
    carregar: () =>
      import("./pf2025").then((m) =>
        montarItens(
          {
            prefixo: "pol-prova-pf25",
            prova: "PF 2025 — Agente de Polícia Federal",
            banca: "Cebraspe",
            aplicadaEm: "27/07/2025",
            fonte: "Cebraspe — 2025 — PF — Agente de Polícia Federal — prova de 27/7/2025",
            cadernos: { comum: "106_PF_CB2_01", porBloco: { 2: "106_PF_CG1_01", 3: "106_PF_016_01" } },
          },
          m.TEXTOS,
          m.BRUTO,
        ),
      ),
  },
];
