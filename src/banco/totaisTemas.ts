/**
 * Banco por tema da PRF Policial, para a Central (que não baixa as questões). Gerado a partir do banco: refazer quando
 * entrar questão em qualquer curso. Redação oficial fica fora: está escondida no treino.
 */
export interface TotalTema {
  nome: string;
  /** Aula da PRF Policial que recebe o tema. */
  aula: string;
  proprias: number;
  "prf-adm": number;
  pcpr2026: number;
}

export const TOTAIS_TEMAS_POL: { materia: string; nome: string; temas: TotalTema[] }[] = [
  {
    materia: "pt",
    nome: "Português",
    temas: [
      { nome: "Ortografia e acentuação", aula: "pt-01", proprias: 6, "prf-adm": 8, pcpr2026: 3 },
      { nome: "Classes de palavras", aula: "pt-02", proprias: 6, "prf-adm": 3, pcpr2026: 1 },
      { nome: "Preposições e conjunções", aula: "pt-03", proprias: 6, "prf-adm": 4, pcpr2026: 2 },
      { nome: "Pronomes e colocação pronominal", aula: "pt-04", proprias: 7, "prf-adm": 4, pcpr2026: 1 },
      { nome: "Tempos e modos", aula: "pt-05", proprias: 7, "prf-adm": 2, pcpr2026: 0 },
      { nome: "Vozes verbais", aula: "pt-06", proprias: 6, "prf-adm": 3, pcpr2026: 1 },
      { nome: "Termos da oração", aula: "pt-07", proprias: 7, "prf-adm": 7, pcpr2026: 1 },
      { nome: "Período composto", aula: "pt-08", proprias: 8, "prf-adm": 6, pcpr2026: 2 },
      { nome: "Pontuação", aula: "pt-09", proprias: 8, "prf-adm": 8, pcpr2026: 2 },
      { nome: "Concordância", aula: "pt-10", proprias: 8, "prf-adm": 8, pcpr2026: 3 },
      { nome: "Regência e crase", aula: "pt-11", proprias: 8, "prf-adm": 18, pcpr2026: 1 },
      { nome: "Coesão e coerência", aula: "pt-12", proprias: 6, "prf-adm": 4, pcpr2026: 2 },
      { nome: "Significação das palavras", aula: "pt-13", proprias: 6, "prf-adm": 7, pcpr2026: 3 },
      { nome: "Tipos e gêneros textuais", aula: "pt-14", proprias: 7, "prf-adm": 9, pcpr2026: 3 },
      { nome: "Compreensão e interpretação", aula: "pt-16", proprias: 6, "prf-adm": 34, pcpr2026: 6 },
    ],
  },
  {
    materia: "rlm",
    nome: "Matemática e RLM",
    temas: [
      { nome: "Conjuntos", aula: "rlm-01", proprias: 6, "prf-adm": 6, pcpr2026: 3 },
      { nome: "Conjuntos numéricos", aula: "rlm-02", proprias: 6, "prf-adm": 3, pcpr2026: 0 },
      { nome: "Potências, raízes e expressões", aula: "rlm-03", proprias: 6, "prf-adm": 1, pcpr2026: 0 },
      { nome: "Unidades de medida", aula: "rlm-04", proprias: 6, "prf-adm": 1, pcpr2026: 0 },
      { nome: "Razão, proporção e frações", aula: "rlm-05", proprias: 7, "prf-adm": 3, pcpr2026: 0 },
      { nome: "Regra de três", aula: "rlm-06", proprias: 6, "prf-adm": 2, pcpr2026: 0 },
      { nome: "Porcentagem", aula: "rlm-07", proprias: 6, "prf-adm": 6, pcpr2026: 1 },
      { nome: "Equações e sistemas", aula: "rlm-08", proprias: 6, "prf-adm": 2, pcpr2026: 0 },
      { nome: "Funções", aula: "rlm-09", proprias: 7, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Função do 1º grau", aula: "rlm-10", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Função do 2º grau", aula: "rlm-11", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Exponencial", aula: "rlm-12", proprias: 6, "prf-adm": 1, pcpr2026: 0 },
      { nome: "Logaritmo", aula: "rlm-13", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "PA e PG", aula: "rlm-14", proprias: 6, "prf-adm": 1, pcpr2026: 0 },
      { nome: "Geometria plana", aula: "rlm-15", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Sólidos", aula: "rlm-16", proprias: 6, "prf-adm": 1, pcpr2026: 0 },
      { nome: "Sequências", aula: "rlm-17", proprias: 6, "prf-adm": 0, pcpr2026: 3 },
      { nome: "Deslocamento", aula: "rlm-18", proprias: 6, "prf-adm": 1, pcpr2026: 0 },
      { nome: "Estatística descritiva", aula: "rlm-19", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Médias", aula: "rlm-20", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Mediana", aula: "rlm-21", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Moda", aula: "rlm-22", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Variância e dispersão", aula: "rlm-23", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Contagem", aula: "rlm-24", proprias: 8, "prf-adm": 3, pcpr2026: 4 },
      { nome: "Probabilidade", aula: "rlm-25", proprias: 6, "prf-adm": 15, pcpr2026: 0 },
    ],
  },
  {
    materia: "info",
    nome: "Informática",
    temas: [
      { nome: "Fundamentos de redes", aula: "info-01", proprias: 6, "prf-adm": 1, pcpr2026: 4 },
      { nome: "Internet e TCP/IP", aula: "info-02", proprias: 7, "prf-adm": 4, pcpr2026: 10 },
      { nome: "Redes privadas e VPN", aula: "info-03", proprias: 6, "prf-adm": 3, pcpr2026: 1 },
      { nome: "Computação em nuvem", aula: "info-04", proprias: 7, "prf-adm": 5, pcpr2026: 3 },
      { nome: "Pesquisa na web", aula: "info-05", proprias: 6, "prf-adm": 4, pcpr2026: 0 },
      { nome: "Mídia, grupos e Telnet/SSH", aula: "info-06", proprias: 6, "prf-adm": 3, pcpr2026: 0 },
      { nome: "Redes sociais", aula: "info-07", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Mensageiros", aula: "info-08", proprias: 6, "prf-adm": 0, pcpr2026: 0 },
      { nome: "Navegadores", aula: "info-09", proprias: 6, "prf-adm": 8, pcpr2026: 1 },
      { nome: "Correio eletrônico", aula: "info-10", proprias: 6, "prf-adm": 4, pcpr2026: 1 },
      { nome: "Pilares e criptografia", aula: "info-11", proprias: 6, "prf-adm": 12, pcpr2026: 6 },
      { nome: "Malwares e golpes", aula: "info-12", proprias: 7, "prf-adm": 9, pcpr2026: 10 },
      { nome: "Proteção do computador", aula: "info-13", proprias: 6, "prf-adm": 2, pcpr2026: 1 },
      { nome: "Windows 10", aula: "info-14", proprias: 6, "prf-adm": 0, pcpr2026: 2 },
      { nome: "Windows 11", aula: "info-15", proprias: 6, "prf-adm": 0, pcpr2026: 3 },
    ],
  },
];
