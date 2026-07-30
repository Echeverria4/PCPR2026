import type { SubjectId, VideoRecurso } from "../lib/types";

/**
 * Curadoria de vídeos gratuitos no YouTube indicados pelo usuário, para
 * aprofundar o conteúdo de cada matéria. URLs preservadas exatamente como
 * fornecidas — não editar/adivinhar links.
 */
export const VIDEOS_GERAL: VideoRecurso[] = [
  {
    titulo: "Edital Aberto PCPR Agente: Plano de Estudos",
    canal: "AlfaCon",
    url: "https://www.youtube.com/watch?v=swT0hddKB0g",
    dica: "Foco na banca FGV. O AlfaCon é de Cascavel e tem playlist inteira dedicada à PCPR no canal, com material gratuito.",
  },
  {
    titulo: "Análise do edital PC-PR 2026 para Agente e Papiloscopista",
    canal: "YouTube",
    url: "https://www.youtube.com/watch?v=cU6hxq3p1Nc",
    dica: "Foco na FGV, requisitos e principais matérias do cargo.",
  },
  {
    titulo: "Aula aberta de Português para a PC-PR",
    canal: "Prof. Andresan",
    url: "https://www.youtube.com/watch?v=CHHX8e1CS_0",
  },
  {
    titulo: "ANÁLISE SEM ENROLAÇÃO! Saiu o edital da PCPR 2026",
    canal: "YouTube",
    url: "https://www.youtube.com/watch?v=AdgfU1ZzwSI",
    dica: "Análise direta do edital 01/2026, cargos e cronograma.",
  },
  {
    titulo: "Concurso PCPR: Qual região se inscrever e a projeção da NOTA DE CORTE!",
    canal: "YouTube",
    url: "https://www.youtube.com/watch?v=KLCbU_YeBOU",
    dica: "Ajuda a decidir entre Curitiba, Londrina e Cascavel.",
  },
  {
    titulo: "Como se preparar para o TAF - Teste de Aptidão Física",
    canal: "Murilo Marques e Pedro Oliveira",
    url: "https://www.youtube.com/watch?v=5SQ6NC2gnLA",
    dica: "Treino e planejamento físico para o TAF (barra, abdominal, corda, Cooper).",
  },
];

export const VIDEOS_POR_MATERIA: Partial<Record<SubjectId, VideoRecurso[]>> = {
  pt: [
    {
      titulo: "Quebrando a Banca FGV — Língua Portuguesa",
      canal: "Prof.ª Yara Coeli",
      url: "https://www.youtube.com/watch?v=Nt7RRDEAQYM",
      dica: "Resolução de questões da FGV, com PDF para baixar.",
    },
    {
      titulo: "Português FGV — Questões Comentadas",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=Y6AfQc-pmkA",
      dica: "Resolução de questões da banca, com dicas.",
    },
    {
      titulo: "Playlist: questões comentadas de Português da FGV",
      canal: "YouTube",
      url: "https://www.youtube.com/playlist?list=PLw8OlPkAEMIDOR9UEVacZk_BG-zvyKEYm",
    },
  ],
  ti: [
    {
      titulo: "Canal do Léo Matos",
      canal: "Léo Matos",
      url: "https://www.youtube.com/channel/UCvkYQZ80HOAV8hvngztdMOg",
      dica: "Informática para concursos: dicas, aulões e cursos gratuitos.",
    },
    {
      titulo: "Canal do Rani Passos",
      canal: "Rani Passos",
      url: "https://www.youtube.com/ranipassos",
      dica: "O Rani é do Paraná (Cascavel) e historicamente cobre bancas como a FGV — busque por \"FGV\" e \"segurança da informação\" dentro do canal.",
    },
    {
      titulo: "3000 Questões de Informática",
      canal: "Rani Passos",
      url: "https://www.youtube.com/watch?v=GnX1PDPfljI",
    },
  ],
  for: [
    {
      titulo: "Canal do Laécio Carneiro",
      canal: "Laécio Carneiro",
      url: "https://www.youtube.com/@LaecioCarneiroMedicinaLegal",
      dica: "Referência gratuita em Medicina Legal, Perícia Criminal, Criminalística e Criminologia. Procure as playlists de tanatologia, traumatologia e asfixiologia.",
    },
    {
      titulo: "Playlist: Medicina Legal — Aulas",
      canal: "Laécio Carneiro",
      url: "https://www.youtube.com/playlist?list=PL1XAwazhY7lEgCnd_siqnpKjHWADgJZfN",
    },
    {
      titulo: "Top 5: só o que cai em Criminologia e Medicina Legal",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=ln0yVgSusYQ",
      dica: "Feito para a PC-PI, mesma banca FGV.",
    },
  ],
  pen: [
    {
      titulo: "Direito Penal do Zero para Concursos",
      canal: "Prof. Renan Araujo (Estratégia)",
      url: "https://www.youtube.com/watch?v=VgvFkFK1XOk",
      dica: "Com resumos gratuitos.",
    },
    {
      titulo: "Direito Penal do zero para a Polícia Civil",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=M78IiD2M5NY",
    },
  ],
  pp: [
    {
      titulo: "Curso gratuito de Processo Penal — módulo de Inquérito",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=KhCuXohkhP0",
      dica: "Inquérito e provas são os dois tópicos do topo da ordem de ataque de Processo Penal.",
    },
    {
      titulo: "Curso gratuito de Processo Penal — módulo de Provas",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=7akpo1NkWD4",
    },
  ],
  pr: [
    {
      titulo: "Canal Paraná Histórica",
      canal: "Paraná Histórica",
      url: "https://www.youtube.com/channel/UC70dAvPteM1ux8hu26ZM1Ow",
      dica: "Bom para fixar Contestado, ciclos econômicos e emancipação.",
    },
    {
      titulo: "Aula de História do Paraná para concurso (ALEP)",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=_K6HIGlXbhk",
      dica: "Mesmo conteúdo regional cobrado no edital.",
    },
  ],
  con: [
    {
      titulo: "Direito Constitucional FGV: O que mais cai nas provas (Aula AO VIVO)",
      canal: "Fernando Castelo Branco",
      url: "https://www.youtube.com/watch?v=Nk7avFfAmGo",
      dica: "Foco no estilo de cobrança da banca FGV.",
    },
    {
      titulo: "Direito Constitucional para Concursos: Os assuntos que MAIS CAEM em concursos",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=6aycB7guHjQ",
    },
  ],
  adm: [
    {
      titulo: "AULA 01 - DIREITO ADMINISTRATIVO - LICITAÇÕES na BANCA FGV",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=hQF1jSOHN7M",
      dica: "Licitações e contratos são tópicos clássicos de Administrativo na FGV.",
    },
    {
      titulo: "AO VIVO | Aula de Direito Administrativo - Exercícios FGV | Pré edital PC RN",
      canal: "AlfaCon",
      url: "https://www.youtube.com/watch?v=ZDw5ziDBv8Y",
      dica: "Exercícios FGV com recorte para concurso de polícia civil.",
    },
  ],
  dh: [
    {
      titulo: "Concurso PC PR Delegado | Os principais tópicos Pós-Edital: Direitos Humanos",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=dLwWGP7F0TA",
      dica: "Específico da PCPR — mesmo conteúdo de Direitos Humanos vale para o cargo de Agente.",
    },
    {
      titulo: "Concurso PCPR: Revisão de Direitos Humanos",
      canal: "Naiama Cabral",
      url: "https://www.youtube.com/watch?v=YcoExo-RACs",
    },
  ],
  cont: [
    {
      titulo: "Contabilidade Geral: Resumo em UMA AULA",
      canal: "Prof. Silvio Sande",
      url: "https://www.youtube.com/watch?v=2JECkU1plt4",
    },
    {
      titulo: "50 QUESTÕES DE CONTABILIDADE GERAL PARA ÁREA POLICIAL",
      canal: "Igor Cintra",
      url: "https://www.youtube.com/watch?v=PBpS9Svgd_g",
      dica: "Questões voltadas especificamente para concursos policiais.",
    },
  ],
  est: [
    {
      titulo: "Estatística para os Desesperados: Gabaritando a FGV",
      canal: "Prof. Carlos Henrique",
      url: "https://www.youtube.com/watch?v=EfapKyUaiMo",
      dica: "Foco no estilo de questão de Estatística cobrado pela FGV.",
    },
    {
      titulo: "ESTATÍSTICA FGV - AULA PARA O CONCURSO DO TCU 2022",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=g_OkYZxw6RY",
    },
  ],
  rlm: [
    {
      titulo: "COMO APRENDER RACIOCÍNIO LÓGICO MATEMÁTICO PARA CONCURSO PÚBLICO? | Curso de RLM | Aula 00",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=5ytuYyjOTJk",
    },
    {
      titulo: "AULA 01 - RACIOCÍNIO LÓGICO MATEMÁTICO (LÓGICA PROPOSICIONAL)",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=zrmkg1fBpjk",
    },
  ],
  leg: [
    {
      titulo: "DELEGADO-GERAL PCPR TRAZ NOVAS INFORMAÇÕES DO EDITAL AGENTE CONCURSO POLÍCIA CIVIL PARANÁ",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=YxSOpCTom7w",
      dica: "Fala institucional direto do delegado-geral sobre o concurso e a estrutura da PCPR.",
    },
    {
      titulo: "Análise do Edital da Polícia Civil do Paraná (PC PR)",
      canal: "YouTube",
      url: "https://www.youtube.com/watch?v=0KDIh5tapiM",
    },
  ],
};
