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
    texto: "Crase é a fusão da preposição 'a' com o artigo 'a' (ou com o 'a' inicial de aquele, aquela, aquilo): o termo regente precisa pedir 'a' e a palavra seguinte precisa aceitar o artigo feminino. Antes de verbo e de palavra masculina não há crase, salvo quando fica implícita a expressão 'à moda de' (bife à milanesa).",
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
    texto: "LC 259/2023, arts. 76 e 77: os cargos de Escrivão e de Investigador, vagos e ocupados, viraram Agente de Polícia Judiciária, que absorveu os direitos, deveres e atribuições dos dois. Carreiras atuais (art. 3º): Delegado, Agente, Papiloscopista e Agente de Operações Policiais (em extinção).",
  },
  {
    materia: "pp",
    texto: "A doutrina chama o flagrante de prisão precautelar: ele não se sustenta sozinho. Em até 24 horas da prisão, o juiz faz a audiência de custódia e, fundamentadamente, relaxa a prisão ilegal, converte em preventiva (requisitos do art. 312 e medidas do art. 319 insuficientes) ou concede liberdade provisória, com ou sem fiança (CPP, art. 310).",
  },
  {
    materia: "pen",
    texto: "Tentativa (CP, art. 14, II): iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente. Na tentativa imperfeita a execução é interrompida; na perfeita (crime falho) o agente esgota os atos de execução e mesmo assim o resultado não ocorre. Pena: a do crime consumado, diminuída de 1/3 a 2/3 (parágrafo único).",
  },
  {
    materia: "con",
    texto: "Segurança pública é dever do Estado, direito e responsabilidade de todos (art. 144, caput, CF) — decoreba clássica de prova.",
  },
  {
    materia: "adm",
    texto: "Atributos do ato administrativo (PATI): presunção de legitimidade e veracidade, autoexecutoriedade, tipicidade e imperatividade. Presunção e tipicidade estão em todo ato; imperatividade e autoexecutoriedade não (licença e certidão não são imperativas, e a cobrança de multa não é autoexecutória).",
  },
  {
    materia: "dh",
    texto: "Uso da força (Lei 13.060/2014, art. 2º): os órgãos de segurança pública devem priorizar instrumentos de menor potencial ofensivo e obedecer à legalidade, à necessidade e à razoabilidade e proporcionalidade. Não é legítimo atirar em pessoa em fuga desarmada ou sem risco imediato, nem em veículo que fura bloqueio, salvo risco de morte ou lesão. O Decreto 12.341/2024 regulamenta a lei e soma precaução, responsabilização e não discriminação.",
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
    texto: "No sistema datiloscópico de Vucetich, adotado no Brasil, são quatro os tipos fundamentais: arco (sem delta), presilha interna (delta à direita do observador), presilha externa (delta à esquerda do observador) e verticilo (dois deltas). A divisão em três grupos (arco, presilha e verticilo) é a de Galton.",
  },
  {
    materia: "leg",
    texto: "CF, art. 144, §4º: às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares. Pelo §6º (EC 104/2019), elas se subordinam ao Governador, junto com as polícias militares, os bombeiros militares e as polícias penais estaduais.",
  },
  {
    materia: "pp",
    texto: "Audiência de custódia: em até 24 horas após a prisão, com o preso, a defesa e o MP (CPP, art. 310). A Lei 15.358/2026 passou a prever no caput do art. 310 a realização por videoconferência em tempo real. Para o STF, a audiência é devida em toda modalidade de prisão, não só no flagrante.",
  },
  {
    materia: "pen",
    texto: "Legítima defesa (CP, art. 25): repelir injusta agressão, atual ou iminente, a direito seu ou de outrem, usando moderadamente dos meios necessários. O parágrafo único (Pacote Anticrime) diz que também está em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.",
  },
  {
    materia: "con",
    texto: "Estado de defesa é decretado direto pelo Presidente (com aprovação posterior do Congresso); estado de sítio depende de autorização PRÉVIA do Congresso.",
  },
  {
    materia: "adm",
    texto: "Poder de polícia (CTN, art. 78) é a atividade da Administração que limita ou disciplina direito, interesse ou liberdade em razão do interesse público. Não confunda: a polícia administrativa atua sobre bens, direitos e atividades, em regra de forma preventiva; a polícia judiciária, função da Polícia Civil, apura infrações penais já ocorridas e atua sobre pessoas.",
  },
  {
    materia: "dh",
    texto: "Tortura (Lei 9.455/1997) é, em regra, crime comum: ser agente público é causa de aumento de 1/6 a 1/3 (art. 1º, §4º, I), e a condenação gera perda do cargo e interdição pelo dobro da pena (§5º). Quem se omite tendo o dever de evitar ou apurar responde com detenção de 1 a 4 anos (§2º). A Lei 15.410/2026 incluiu o inciso III: submeter mulher, reiteradamente, a intenso sofrimento físico ou mental no contexto de violência doméstica e familiar.",
  },
  {
    materia: "pr",
    texto: "Curitiba virou referência em urbanismo: Plano Agache (1943), criação do IPPUC em 1965 e Plano Diretor de 1966. Nos anos 1970 vieram a Rua das Flores, primeiro calçadão de pedestres do país (1972), e os ônibus expressos em canaletas exclusivas (1974), embrião do BRT.",
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
    texto: "Tanatologia: o resfriamento (algor mortis) começa logo após a morte; os livores (livor mortis) aparecem em cerca de 30 minutos a 2 horas e se fixam por volta de 8 a 12 horas; a rigidez (rigor mortis) surge em 1 a 2 horas, começando pela mandíbula e pela nuca (lei de Nysten), generaliza-se em cerca de 8 horas e se desfaz na mesma ordem.",
  },
  {
    materia: "leg",
    texto: "Estatuto do servidor público do Paraná é a Lei Estadual 6.174/1970 — não confunda com a legislação federal (Lei 8.112/90).",
  },
  {
    materia: "leg",
    texto: "Código Disciplinar da PCPR (21.894) x Estatuto (6.174): demissão prescreve em 5 anos x 4 anos; inassiduidade com mais de 45 faltas alternadas em 1 ano x 60 faltas interpoladas em 12 meses; sem advertência x advertência verbal; suspensão com metade do subsídio x conversão em multa de 50%; recurso com efeito suspensivo x sem efeito suspensivo. Abandono é 30 dias consecutivos nas duas.",
  },
  {
    materia: "leg",
    texto: "Lei 15.295/2025 (em vigor em janeiro de 2026, dentro do corte do edital): o art. 9º-A da LEP passou a exigir DNA de todo condenado à reclusão em regime inicial fechado, no ingresso no presídio. Na Lei 12.037, entrou o inciso VII do art. 3º (denúncia recebida por crime com grave violência, crime sexual, pornografia infantil do ECA ou organização criminosa armada), com coleta de perfil genético também no flagrante por esses crimes. Banco nacional: BNPG, e a rede que integra os bancos estaduais é a RIBPG.",
  },
  {
    materia: "pp",
    texto: "Provas derivadas das ilícitas também são inadmissíveis (CPP, art. 157, §1º), salvo quando não houver nexo causal com a ilícita ou quando puderem ser obtidas por fonte independente; o §2º define fonte independente com a lógica da descoberta inevitável. O §5º (o juiz que conheceu a prova inadmissível não pode sentenciar) foi declarado inconstitucional pelo STF nas ADIs do Pacote Anticrime.",
  },
  {
    materia: "pen",
    texto: "Desde a Lei 14.994/2024, o feminicídio é crime autônomo (CP, art. 121-A: matar mulher por razões da condição do sexo feminino), com reclusão de 20 a 40 anos, e deixou de ser qualificadora do homicídio. Continua hediondo (Lei 8.072, art. 1º, I-B).",
  },
  {
    materia: "con",
    texto: "Controle difuso: qualquer juiz ou tribunal, no caso concreto (nos tribunais, com reserva de plenário, art. 97). Controle concentrado: o STF julga ADI, ADC, ADO e ADPF tendo a Constituição Federal como parâmetro, e os Tribunais de Justiça julgam a representação de inconstitucionalidade de leis estaduais e municipais em face da Constituição Estadual (art. 125, §2º).",
  },
  {
    materia: "adm",
    texto: "Desde a Lei 14.230/2021, só existe improbidade dolosa: a modalidade culposa acabou. No Tema 1.199, o STF decidiu que essa revogação não alcança condenações já transitadas em julgado, mas vale para os processos sem condenação definitiva, e que os novos prazos de prescrição não retroagem.",
  },
  {
    materia: "dh",
    texto: "Medidas protetivas: a autoridade policial remete o pedido ao juiz em 48 horas (Lei 11.340, art. 12, III) e o juiz decide em 48 horas (art. 18). Elas são concedidas independentemente de tipificação penal, de ação penal ou cível, de inquérito ou de boletim de ocorrência e vigoram enquanto persistir o risco (art. 19, §§5º e 6º). Descumpri-las é crime (art. 24-A).",
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
    texto: "A condicional (se P, então Q) só é falsa quando P é verdadeiro e Q é falso; nos outros três casos é verdadeira. Equivalências: se não Q, então não P (contrapositiva) e não P ou Q. Negação: P e não Q.",
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
    texto: "A cadeia de custódia começa com a preservação do local de crime ou com procedimentos policiais ou periciais em que se detecte a existência de vestígio (CPP, art. 158-A, §1º). O agente que reconhece um elemento como de potencial interesse pericial fica responsável por preservá-lo (§2º); o reconhecimento é a primeira das etapas do art. 158-B.",
  },
  {
    materia: "leg",
    texto: "Item 25.15 do edital: só cai legislação que entrou em vigor até 03/07/2026, e o item 25.15.1 estende a cobrança às súmulas, aos repetitivos e à jurisprudência dominante dos Tribunais Superiores. Leis que entraram em vigor depois, como a 15.517/2026 (furto e roubo de combustíveis), ficam de fora.",
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
    texto: "Cláusulas pétreas (CF, art. 60, §4º): não será sequer objeto de deliberação a proposta de emenda tendente a abolir a forma federativa, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos e garantias individuais. Emenda pode ampliá-las ou ajustá-las; o que se proíbe é a tendência a aboli-las.",
  },
  {
    materia: "adm",
    texto: "Código Disciplinar da PCPR (Lei Estadual 21.894/2024, art. 62): prescreve em 2 anos a transgressão punível com repreensão ou suspensão e em 5 anos a punível com demissão ou cassação de aposentadoria ou disponibilidade. O prazo corre do dia em que a transgressão se consumou (art. 63), e a transgressão que também é crime segue o prazo penal, se não for menor.",
  },
  {
    materia: "dh",
    texto: "LEP, art. 3º: ao condenado e ao internado são assegurados todos os direitos não atingidos pela sentença ou pela lei, sem distinção de natureza racial, social, religiosa ou política. A Constituição garante ao preso o respeito à integridade física e moral (art. 5º, XLIX).",
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
