import type { SubjectId } from "../lib/types";

export interface DicaDia {
  materia: SubjectId;
  texto: string;
}

/**
 * Dicas rápidas de conteúdo, uma por dia (rotação determinística por data).
 * Podem repetir algo que já está no banco de questões ou trazer um detalhe
 * novo — servem como lembrete rápido, não substituem o conteúdo completo
 * (ver data/conteudos e data/apostas).
 */
export const DICAS: DicaDia[] = [
  {
    materia: "pt",
    texto: "Crase só existe diante de palavra feminina que aceita o artigo 'a'. Antes de verbo, nunca tem crase.",
  },
  {
    materia: "ti",
    texto: "Firewall filtra tráfego por regras; IDS apenas detecta e alerta intrusões; IPS detecta e bloqueia ativamente — não confunda os três.",
  },
  {
    materia: "for",
    texto: "As fases da perícia em local de crime seguem a ordem: isolamento, preservação, exame — e só depois a liberação do local.",
  },
  {
    materia: "leg",
    texto: "A LC 259/2023 reorganizou a carreira da Polícia Civil do Paraná — vale revisar as mudanças de nomenclatura de cargos.",
  },
  {
    materia: "pp",
    texto: "Prisão em flagrante não é modalidade de prisão cautelar — é ato administrativo que antecede a análise judicial.",
  },
  {
    materia: "pen",
    texto: "Na tentativa (art. 14, II, CP), o agente não consegue completar a execução por circunstâncias alheias à sua vontade.",
  },
  {
    materia: "con",
    texto: "Segurança pública é dever do Estado, direito e responsabilidade de todos (art. 144, caput, CF) — decoreba clássica de prova.",
  },
  {
    materia: "adm",
    texto: "Os atributos do ato administrativo são presunção de legitimidade, autoexecutoriedade e imperatividade — nem todo ato tem os três ao mesmo tempo.",
  },
  {
    materia: "dh",
    texto: "O uso da força pela polícia deve seguir a proporcionalidade e ser o último recurso, conforme protocolos de uso progressivo da força.",
  },
  {
    materia: "pr",
    texto: "O Porto de Paranaguá é um dos principais do país em movimentação de granéis — tema recorrente de economia estadual.",
  },
  {
    materia: "cont",
    texto: "Equação fundamental do patrimônio: Ativo = Passivo + Patrimônio Líquido — base de qualquer questão de balanço patrimonial.",
  },
  {
    materia: "est",
    texto: "Média é sensível a valores extremos (outliers); a mediana não — em dados assimétricos, a mediana representa melhor o valor típico.",
  },
  {
    materia: "rlm",
    texto: "Negação de 'todo A é B' não é 'nenhum A é B' — é 'existe pelo menos um A que não é B'.",
  },
  {
    materia: "pt",
    texto: "Sujeito oculto (elíptico) não é a mesma coisa que oração sem sujeito — em 'Choveu ontem' não existe sujeito nenhum, nem oculto.",
  },
  {
    materia: "ti",
    texto: "Criptografia simétrica usa uma única chave para cifrar e decifrar; a assimétrica usa par de chaves pública/privada, usada em assinatura digital.",
  },
  {
    materia: "for",
    texto: "Papiloscopia clássica trabalha com três tipos fundamentais de desenho digital: arco, presilha e verticilo.",
  },
  {
    materia: "leg",
    texto: "Delegado de Polícia dirige a Polícia Civil (art. 144, §4º, CF) — atenção a esse detalhe em questões que testam a literalidade do artigo.",
  },
  {
    materia: "pp",
    texto: "Audiência de custódia deve ocorrer em até 24 horas da prisão, para apresentação da pessoa presa a um juiz.",
  },
  {
    materia: "pen",
    texto: "Legítima defesa exige agressão injusta, atual ou iminente, e reação com meios necessários e uso moderado (art. 25, CP).",
  },
  {
    materia: "con",
    texto: "Estado de defesa é decretado direto pelo Presidente (com aprovação posterior do Congresso); estado de sítio depende de autorização PRÉVIA do Congresso.",
  },
  {
    materia: "adm",
    texto: "Poder de polícia é a atividade da Administração que restringe direitos individuais em prol do interesse coletivo — base teórica da atuação policial.",
  },
  {
    materia: "dh",
    texto: "Tortura (Lei 9.455/97) é crime próprio quando praticado por agente público no exercício da função, com pena aumentada.",
  },
  {
    materia: "pr",
    texto: "Curitiba foi capital planejada com foco em urbanismo desde os anos 1970 (Plano Diretor / IPPUC) — pode cair em atualidades do PR.",
  },
  {
    materia: "cont",
    texto: "Ativo Circulante é o que se espera realizar (converter em dinheiro) em até 12 meses; o restante é Ativo Não Circulante.",
  },
  {
    materia: "est",
    texto: "Moda é o valor que mais se repete — pode não existir (amodal) ou haver mais de uma (bimodal, multimodal).",
  },
  {
    materia: "rlm",
    texto: "Combinação é usada quando a ordem NÃO importa (formar uma equipe); arranjo é usado quando a ordem importa (definir 1º, 2º e 3º lugar).",
  },
  {
    materia: "pt",
    texto: "'Há' (verbo haver, tempo passado) não se confunde com 'a' (preposição, tempo futuro): 'há dois anos' vs. 'daqui a dois anos'.",
  },
  {
    materia: "ti",
    texto: "Hash (MD5, SHA-256) não é criptografia reversível — serve para verificar integridade de arquivo, não para proteger sigilo.",
  },
  {
    materia: "for",
    texto: "Tanatologia forense: livor mortis (mancha), rigor mortis (rigidez) e algor mortis (resfriamento) surgem nessa ordem após a morte.",
  },
  {
    materia: "leg",
    texto: "Estatuto do servidor público do Paraná é a Lei Estadual 6.174/1970 — não confunda com a legislação federal (Lei 8.112/90).",
  },
  {
    materia: "pp",
    texto: "Prova ilícita por derivação também é inadmissível, salvo fonte independente ou descoberta inevitável (teoria dos frutos da árvore envenenada).",
  },
  {
    materia: "pen",
    texto: "Feminicídio é qualificadora do homicídio (art. 121, §2º-A, CP) — não é tipo penal autônomo.",
  },
  {
    materia: "con",
    texto: "Controle de constitucionalidade difuso pode ser exercido por qualquer juiz no caso concreto; o concentrado é, em regra, exclusivo do STF via ADI/ADC/ADPF.",
  },
  {
    materia: "adm",
    texto: "Improbidade administrativa (Lei 14.230/2021) exige dolo em todas as modalidades — a culpa deixou de ser suficiente após a reforma de 2021.",
  },
  {
    materia: "dh",
    texto: "A Lei Maria da Penha prevê medidas protetivas de urgência que podem ser concedidas em até 48 horas do pedido.",
  },
  {
    materia: "pr",
    texto: "O agronegócio, especialmente grãos e proteína animal, é o principal motor da economia paranaense.",
  },
  {
    materia: "cont",
    texto: "Fraude contábil investigativa costuma buscar incompatibilidade entre patrimônio declarado e a movimentação financeira real da pessoa.",
  },
  {
    materia: "est",
    texto: "Desvio padrão é a raiz quadrada da variância — mede a dispersão dos dados em torno da média, na mesma unidade dos dados originais.",
  },
  {
    materia: "rlm",
    texto: "Em uma condicional (se P, então Q), só ela é falsa quando P é verdadeiro e Q é falso — nos outros três casos, é verdadeira.",
  },
  {
    materia: "pt",
    texto: "Regência: 'assistir' TV pede a preposição 'a' (assistir AO jogo); no sentido de prestar socorro, não pede preposição (assistir o paciente).",
  },
  {
    materia: "ti",
    texto: "Backup 3-2-1: 3 cópias dos dados, em 2 mídias diferentes, sendo 1 delas fora do local físico.",
  },
  {
    materia: "for",
    texto: "Cadeia de custódia começa no reconhecimento do vestígio no local do crime, não apenas quando ele chega ao laboratório.",
  },
  {
    materia: "leg",
    texto: "Fique de olho em alterações de 2025/2026 na estrutura da PCPR — a banca FGV costuma cobrar a norma mais recente do edital.",
  },
  {
    materia: "pp",
    texto: "Cadeia de custódia da prova está prevista nos arts. 158-A a 158-F do CPP — tema que cruza direto com Ciências Forenses.",
  },
  {
    materia: "pen",
    texto: "Invasão de dispositivo informático (art. 154-A, CP) conecta Direito Penal com Tecnologia/Crimes Digitais — boa aposta de cruzamento entre matérias.",
  },
  {
    materia: "con",
    texto: "Cláusulas pétreas (art. 60, §4º, CF) não podem ser abolidas nem por emenda constitucional, mesmo por maioria qualificada.",
  },
  {
    materia: "adm",
    texto: "Prescrição em PAD (processo administrativo disciplinar) começa a correr, em regra, da data do fato ou de quando a autoridade tomou conhecimento.",
  },
  {
    materia: "dh",
    texto: "A LEP garante direitos à pessoa presa mesmo durante a execução da pena — direitos humanos não cessam com a prisão.",
  },
  {
    materia: "pr",
    texto: "Fique atento a indicadores recentes de segurança pública divulgados pela SESP-PR — a FGV gosta de cobrar atualidade estadual.",
  },
  {
    materia: "cont",
    texto: "A DRE (Demonstração do Resultado do Exercício) mostra o desempenho (lucro ou prejuízo); o Balanço Patrimonial mostra a posição patrimonial num momento.",
  },
  {
    materia: "est",
    texto: "Em distribuição normal, cerca de 68% dos dados ficam a 1 desvio padrão da média, e cerca de 95% a 2 desvios padrão.",
  },
  {
    materia: "rlm",
    texto: "Em diagramas lógicos, 'ou' inclusivo é a união dos conjuntos; 'e' é a interseção — cuidado para não trocar os símbolos na prova.",
  },
];

function diaDoAno(data: Date): number {
  const inicio = new Date(data.getFullYear(), 0, 0);
  const diffMs = data.getTime() - inicio.getTime();
  return Math.floor(diffMs / 86_400_000);
}

export function dicaDoDia(data: Date = new Date()): DicaDia {
  return DICAS[diaDoAno(data) % DICAS.length];
}
