import type { SubjectId } from "../lib/types";

export interface ApostaTema {
  tema: string;
  motivo: string;
}

/**
 * Temas que não aparecem como tópico próprio no Anexo I do edital, mas que
 * têm boa chance de cair — por padrão histórico da banca FGV, por serem
 * desdobramento natural de um tópico oficial, ou por atualização legislativa
 * recente. São apostas de estudo, não garantia de prova: não substituem os
 * tópicos oficiais (ver SUBJECTS em data/subjects.ts), servem para reforçar.
 */
export const APOSTAS_POR_MATERIA: Record<SubjectId, ApostaTema[]> = {
  pt: [
    {
      tema: "Figuras de linguagem (metáfora, metonímia, ironia, eufemismo, hipérbole)",
      motivo: "A FGV gosta de cobrar reconhecimento de figuras dentro do próprio texto motivador, junto com interpretação.",
    },
    {
      tema: "Funções da linguagem (referencial, emotiva, conativa, poética, fática, metalinguística)",
      motivo: "Tema clássico de banca, fácil de transformar em questão de texto publicitário ou trecho literário curto.",
    },
    {
      tema: "Vícios de linguagem (ambiguidade involuntária, cacofonia, pleonasmo vicioso, solecismo)",
      motivo: "Costuma aparecer combinado com reescrita de frase — pede para identificar o erro e a versão corrigida.",
    },
    {
      tema: "Colocação pronominal (próclise, mesóclise, ênclise)",
      motivo: "Ponto gramatical que a FGV cobra de forma direta em questão de português formal/oficial.",
    },
    {
      tema: "Redação oficial e correspondência administrativa (padrão culto, impessoalidade, concisão)",
      motivo: "Coerente com o perfil de cargo policial que produz relatórios e ofícios — pode aparecer cruzado com interpretação.",
    },
  ],
  ti: [
    {
      tema: "Golpes digitais recentes (phishing, engenharia social, golpe do Pix, deepfake em fraude)",
      motivo: "Tema de atualidade forte, alinhado com \"crimes digitais\" do edital e recorrente em provas policiais 2024-2026.",
    },
    {
      tema: "Inteligência artificial aplicada à investigação e riscos (viés algorítmico, deepfake como prova)",
      motivo: "Assunto em alta nas bancas desde 2024; conecta tecnologia com investigação, tema central do cargo.",
    },
    {
      tema: "Computação em nuvem (IaaS, PaaS, SaaS) e armazenamento de evidências digitais",
      motivo: "Desdobramento natural de \"fundamentos de hardware e software\" que a FGV explora em nível conceitual.",
    },
    {
      tema: "OSINT (investigação em fontes abertas) e coleta de evidência em redes sociais",
      motivo: "Prática cada vez mais citada em editais de polícia judiciária como habilidade correlata a crimes digitais.",
    },
    {
      tema: "LGPD aplicada ao tratamento de dados em investigação criminal (bases legais, exceções de segurança pública)",
      motivo: "Cruza \"legislação digital\" do edital com um recorte mais específico que a FGV vem explorando.",
    },
  ],
  for: [
    {
      tema: "Local de crime: isolamento, preservação e etapas do exame pericial",
      motivo: "Procedimento operacional clássico, fácil de virar questão de \"o que o agente deve/não deve fazer\".",
    },
    {
      tema: "Necropsia x exame de corpo de delito — diferenças e finalidades",
      motivo: "Detalhe conceitual que costuma aparecer como pegadinha dentro de tanatologia.",
    },
    {
      tema: "Perfil genético (DNA) e bancos de dados forenses (RNIC)",
      motivo: "Tema atual de identificação humana, complementar à papiloscopia já prevista no edital.",
    },
    {
      tema: "Balística: percussão, tiro à queima-roupa e curta/média/longa distância",
      motivo: "Aprofundamento natural de \"balística forense\", nível de detalhe que a FGV costuma pedir.",
    },
  ],
  leg: [
    {
      tema: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
      motivo: "Conhecimento institucional básico que costuma aparecer em questão de legislação orgânica.",
    },
    {
      tema: "Regime disciplinar e deveres/proibições do servidor (Lei Estadual 6.174/1970)",
      motivo: "Desdobramento direto do estatuto já listado no edital, ponto clássico de cobrança em prova de \"legislação institucional\".",
    },
    {
      tema: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
      motivo: "Editais recentes tendem a cobrar a lei mais nova do concurso (LC 259/2023 e Lei 23.213/2026 já estão na lista oficial) — vale revisar mudanças até a data da prova.",
    },
  ],
  pp: [
    {
      tema: "Audiência de custódia — prazo, finalidade e consequências da ausência",
      motivo: "Tema recorrente em provas de carreira policial, conecta prisão em flagrante com garantias processuais.",
    },
    {
      tema: "Provas ilícitas e prova ilícita por derivação (teoria dos frutos da árvore envenenada)",
      motivo: "Desdobramento natural de \"ação penal e prova no processo penal\" já previsto no edital.",
    },
    {
      tema: "Colaboração premiada — requisitos e benefícios",
      motivo: "Cai com frequência em concursos de investigação, ligado à Lei de Organizações Criminosas.",
    },
    {
      tema: "Cadeia de custódia da prova (arts. 158-A a 158-F do CPP)",
      motivo: "Também listado em Ciências Forenses — a FGV costuma cruzar o mesmo tema pelas duas matérias.",
    },
  ],
  pen: [
    {
      tema: "Crimes hediondos (Lei 8.072/90) — rol e efeitos da hediondez",
      motivo: "Tema clássico de prova policial, natural continuação de \"aplicação e espécies de pena\".",
    },
    {
      tema: "Feminicídio — qualificadora, e Lei Maria da Penha na prática",
      motivo: "Tema de alta recorrência em provas recentes de segurança pública, já conectado a \"Lei Maria da Penha\" do edital.",
    },
    {
      tema: "Crimes cibernéticos no Código Penal (invasão de dispositivo — art. 154-A)",
      motivo: "Ponte direta com a matéria de Tecnologia/Crimes Digitais, tema que a FGV gosta de cruzar entre disciplinas.",
    },
    {
      tema: "Excludentes de ilicitude (legítima defesa, estrito cumprimento do dever legal) aplicadas à atuação policial",
      motivo: "Combina teoria geral do crime com o uso da força pelo agente — tema sensível e recorrente.",
    },
  ],
  con: [
    {
      tema: "Estado de defesa e estado de sítio — diferenças e requisitos",
      motivo: "Desdobramento clássico de \"organização do Estado e dos Poderes\", tema recorrente em prova objetiva.",
    },
    {
      tema: "Repartição de competências em segurança pública (União, Estados, Municípios)",
      motivo: "Conecta diretamente com o art. 144 da CF já previsto no edital, ângulo que a FGV explora bastante.",
    },
    {
      tema: "Controle de constitucionalidade difuso x concentrado",
      motivo: "Aprofundamento natural do tópico \"controle de constitucionalidade\" já listado.",
    },
  ],
  adm: [
    {
      tema: "Poderes administrativos (hierárquico, disciplinar, de polícia, regulamentar)",
      motivo: "Base teórica que costuma anteceder questões sobre atos administrativos, já previsto no edital.",
    },
    {
      tema: "Processo Administrativo Disciplinar (PAD) — fases e princípios",
      motivo: "Tema institucional relevante para carreira policial, conecta administrativo com legislação estadual.",
    },
    {
      tema: "Regime jurídico dos servidores públicos (estatutário x celetista) e vacância",
      motivo: "Ponto clássico de prova de direito administrativo em concursos de carreira de Estado.",
    },
  ],
  dh: [
    {
      tema: "Uso progressivo e diferenciado da força — protocolos internacionais",
      motivo: "Desdobramento direto de \"direitos humanos e atuação policial\" já previsto, tema sensível e atual.",
    },
    {
      tema: "Tortura (Lei 9.455/97) e mecanismos de prevenção",
      motivo: "Tema recorrente em provas de segurança pública, cruza direitos humanos com direito penal.",
    },
    {
      tema: "Execução penal e direitos da pessoa presa (LEP)",
      motivo: "Complementa \"proteção de grupos vulneráveis\" com um recorte institucional que a FGV já usou em provas policiais.",
    },
  ],
  pr: [
    {
      tema: "Segurança pública no Paraná — programas e indicadores recentes",
      motivo: "Tema de atualidade estadual, natural em prova de \"temas atuais do Paraná\" já prevista no edital.",
    },
    {
      tema: "Economia paranaense — agronegócio e Porto de Paranaguá",
      motivo: "Desdobramento clássico de \"economia e indicadores do estado\", tema recorrente em provas estaduais.",
    },
    {
      tema: "Datas comemorativas e símbolos oficiais do Paraná",
      motivo: "Pergunta \"decoreba\" clássica de prova estadual, baixo custo de estudo e alta frequência histórica.",
    },
  ],
  cont: [
    {
      tema: "Estrutura do balanço patrimonial (Ativo Circulante/Não Circulante, Passivo, PL)",
      motivo: "Base teórica direta do tópico \"fundamentos e patrimônio\" já previsto no edital.",
    },
    {
      tema: "Indícios contábeis de lavagem de dinheiro em perícia contábil",
      motivo: "Combina \"fraudes e ocultação patrimonial\" com o perfil investigativo do cargo — ângulo que a FGV explora.",
    },
  ],
  est: [
    {
      tema: "Correlação e regressão linear simples (noções)",
      motivo: "Extensão natural de \"medidas de posição e dispersão\", tema que aparece em provas de nível superior.",
    },
    {
      tema: "Distribuição normal — noções e leitura de gráfico",
      motivo: "Tema clássico de estatística básica, cai como questão conceitual em provas objetivas.",
    },
  ],
  rlm: [
    {
      tema: "Sequências lógicas e sequências numéricas",
      motivo: "Tema clássico de RLM em qualquer banca, complementa \"lógica proposicional\" já prevista.",
    },
    {
      tema: "Princípios de contagem: arranjo, combinação e permutação simples",
      motivo: "Desdobramento direto de \"contagem e probabilidade básica\" já previsto no edital.",
    },
    {
      tema: "Diagramas lógicos (conjuntos, Venn) aplicados a problemas com dados do enunciado",
      motivo: "Formato de questão muito comum da FGV, cruza \"teoria dos conjuntos\" com raciocínio aplicado.",
    },
  ],
};
