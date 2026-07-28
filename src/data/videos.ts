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
};
