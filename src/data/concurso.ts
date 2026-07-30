import type { TafExercicio } from "../lib/types";

/**
 * Todos os dados desta página vêm do Edital 01/2026 PCPR (banca FGV), extraído
 * via pdftotext a partir de edital-01-2026-pcpr-publicacao.pdf — ver
 * C:\PYTHON\PCPR2026\_pesquisa-conteudo-pdfs.md para o cruzamento completo.
 */

export const CONCURSO_LINK_OFICIAL = "https://conhecimento.fgv.br/concursos/pcpr26";

export const CONCURSO_INSCRICAO = {
  periodo: "14/07/2026 a 12/08/2026, até às 16h (horário de Brasília/DF)",
  taxa: "R$ 156,36 (Agente de Polícia Judiciária / Papiloscopista Policial)",
  link: CONCURSO_LINK_OFICIAL,
};

export const CONCURSO_ESCOLARIDADE = {
  requisito:
    'Curso superior completo em "qualquer área de graduação" (item 3.10 do edital, com base no art. 6º da LC Estadual 259/2023) — diploma expedido por instituição de ensino superior reconhecida pelo MEC.',
  observacao:
    "O edital não restringe a modalidade da graduação: valem bacharelado, licenciatura ou curso tecnólogo, de qualquer área, desde que o curso seja reconhecido pelo MEC. Não se exige curso específico (ao contrário do cargo de Delegado, que exige bacharelado em Direito).",
};

export const CONCURSO_PROVA = {
  data: "11 de outubro de 2026 (domingo)",
  horario: "13h às 18h (horário de Brasília/DF)",
  cidades: ["Curitiba/PR", "Londrina/PR", "Cascavel/PR"],
  locaisDivulgacao: "Locais de prova divulgados a partir de 05/10/2026, no site oficial do concurso.",
  observacaoOutrasFases:
    "As demais fases presenciais (TAF, avaliação psicológica, curso de formação etc.) ocorrem somente em Curitiba/PR.",
};

export const CONCURSO_FASES = [
  "Prova Objetiva",
  "Exame de Inspeção de Saúde",
  "Exame de Aptidão Física (TAF)",
  "Avaliação Psicológica",
  "Investigação Social",
  "Avaliação de Títulos (classificatória)",
  "Curso de Formação Profissional",
];

export const CONCURSO_CHEGADA =
  "Chegar ao local com antecedência mínima de 1h30 do horário fixado para o início da prova. Os portões fecham 30 minutos antes do início e é terminantemente proibida a entrada após o fechamento — depois disso, também não é permitido nenhum contato com o ambiente externo.";

export const CONCURSO_DOCUMENTOS = [
  "Documento de identidade original (cópia autenticada e protocolo NÃO são aceitos, exceto em caso de perda/roubo/furto com boletim de ocorrência de até 30 dias)",
  "Comprovante de inscrição ou comprovante de pagamento da taxa de inscrição",
  "Caneta esferográfica de tinta azul ou preta, de material transparente",
];

export const CONCURSO_PERMITIDO = [
  "Lanche rápido (ex.: barra de cereal), em embalagem previamente lacrada e mantida visível ao fiscal de sala",
  "Bebidas em recipiente transparente e sem rótulo",
];

export const CONCURSO_PROIBIDO = [
  "Celular, smartphone, tablet, notebook, palmtop, pendrive, receptor, gravador, câmera, MP3 player, iPod, agenda eletrônica, controle de alarme de carro e qualquer outro aparelho eletrônico",
  "Relógio de qualquer tipo, óculos escuros e fones de ouvido",
  "Boné, chapéu, gorro ou qualquer acessório de cobertura de cabeça",
  "Calculadora, livros, anotações, réguas, material impresso, códigos ou legislação",
  "Lápis, lapiseira (grafite), corretivo líquido e/ou borracha",
  "Óculos inteligentes (smart glasses) capazes de armazenar ou projetar imagens, voz ou dados",
  "Embalagens não transparentes de qualquer tipo (garrafas de água/suco/refrigerante, biscoitos, chocolates, balas etc.)",
];

export const CONCURSO_OBSERVACAO_ELETRONICOS =
  "Se precisar levar algum item eletrônico, lápis, borracha ou corretivo, é obrigatório informar o fiscal de sala antes do início da prova, que lacrará o item em embalagem não reutilizável, mantida com o candidato durante toda a prova. A PCPR/FUNDASEG e a FGV recomendam não levar nenhum desses itens no dia — a organização não se responsabiliza por guarda, perda ou dano.";

export const TAF_INFO = {
  resumo:
    "Fase eliminatória (resultado APTO ou INAPTO). O candidato só é considerado APTO se atingir o desempenho mínimo em TODOS os 5 exercícios abaixo — a reprovação em qualquer um deles elimina o candidato do concurso.",
  regras: [
    "Comparecer com roupa apropriada para a prática de atividade física",
    "Levar documento de identidade original",
    "Levar atestado médico com no máximo 30 dias de emissão, com o número do CRM do responsável, liberando o candidato para a realização de todos os testes sem ressalvas",
    "Não são permitidos relógios, armas, aparelhos eletrônicos ou fones de ouvido durante o TAF, nem fotografar/filmar a si mesmo ou outros candidatos",
    "Condições fisiológicas ou psicológicas temporárias (indisposição, cãibra, contusão, entorse, fratura, estado menstrual) NÃO justificam qualquer tratamento especial, mesmo que ocorram durante o teste",
    "A recusa em realizar qualquer um dos exercícios obriga a assinatura de um termo de desistência e elimina o candidato do concurso",
    "Não há segunda chamada — falta é eliminação automática — exceto para gestantes ou candidatas em até 120 dias de pós-parto/pós-gestação, com regras específicas de remarcação",
  ],
};

export const TAF_MASCULINO: TafExercicio[] = [
  {
    ordem: "1ª",
    nome: "Flexão de braços em barra fixa",
    tentativas: "2 tentativas (intervalo mínimo de 10 min entre elas)",
    faixas: { ate29: "5 repetições", de30a39: "4 repetições", de40a49: "3 repetições", mais50: "2 repetições" },
  },
  {
    ordem: "2ª",
    nome: "Flexão abdominal remador",
    tentativas: "2 tentativas (intervalo mínimo de 10 min entre elas)",
    faixas: { ate29: "35 rep. em 1 min", de30a39: "30 rep. em 1 min", de40a49: "25 rep. em 1 min", mais50: "20 rep. em 1 min" },
  },
  {
    ordem: "3ª",
    nome: "Corrida de segmento (Shuttle Run) — 9,14 m × 4 (36,56 m no total)",
    tentativas: "2 tentativas (intervalo mínimo de 10 min entre elas)",
    faixas: { ate29: "≤ 11 s", de30a39: "≤ 12 s", de40a49: "≤ 13 s", mais50: "≤ 14 s" },
  },
  {
    ordem: "4ª",
    nome: "Escalada em corda",
    tentativas: "2 tentativas (intervalo mínimo de 10 min entre elas)",
    faixas: { ate29: "4 m em 1 min", de30a39: "3,80 m em 1 min", de40a49: "3,60 m em 1 min", mais50: "3,40 m em 1 min" },
  },
  {
    ordem: "5ª",
    nome: "Corrida de resistência de 12 min (Teste de Cooper)",
    tentativas: "1 tentativa única",
    faixas: { ate29: "2.400 m", de30a39: "2.300 m", de40a49: "2.200 m", mais50: "2.000 m" },
  },
];

export const TAF_FEMININO: TafExercicio[] = [
  {
    ordem: "1ª",
    nome: "Isometria de braços em flexão em barra fixa",
    tentativas: "2 tentativas (intervalo mínimo de 10 min entre elas)",
    faixas: { ate29: "25 s", de30a39: "20 s", de40a49: "15 s", mais50: "10 s" },
  },
  {
    ordem: "2ª",
    nome: "Flexão abdominal remador",
    tentativas: "2 tentativas (intervalo mínimo de 10 min entre elas)",
    faixas: { ate29: "30 rep. em 1 min", de30a39: "25 rep. em 1 min", de40a49: "20 rep. em 1 min", mais50: "15 rep. em 1 min" },
  },
  {
    ordem: "3ª",
    nome: "Corrida de segmento (Shuttle Run) — 9,14 m × 4 (36,56 m no total)",
    tentativas: "2 tentativas (intervalo mínimo de 10 min entre elas)",
    faixas: { ate29: "≤ 13 s", de30a39: "≤ 14 s", de40a49: "≤ 15 s", mais50: "≤ 16 s" },
  },
  {
    ordem: "4ª",
    nome: "Escalada em corda",
    tentativas: "2 tentativas (intervalo mínimo de 10 min entre elas)",
    faixas: { ate29: "3,60 m em 1 min", de30a39: "3,40 m em 1 min", de40a49: "3,20 m em 1 min", mais50: "3,0 m em 1 min" },
  },
  {
    ordem: "5ª",
    nome: "Corrida de resistência de 12 min (Teste de Cooper)",
    tentativas: "1 tentativa única",
    faixas: { ate29: "2.000 m", de30a39: "1.900 m", de40a49: "1.800 m", mais50: "1.600 m" },
  },
];
