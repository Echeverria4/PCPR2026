import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "discursivas-10",
  resumo: {
    ideia:
      "Os padrões de resposta da última rodada mostram como escrever sobre a própria PRF e sobre a Lei Seca: introdução que liga a instituição ao tema, um parágrafo por aspecto com normas ou fatos e fechamento que retoma o papel da PRF.",
    itens: [
      {
        termo: "Relevância social da PRF",
        faz: "Ao patrulhar as rodovias federais, a PRF protege vidas, garante a circulação de pessoas e cargas e atinge a logística do crime (drogas, armas, contrabando) que usa a malha rodoviária.",
      },
      {
        termo: "Modal rodoviário",
        faz: "A maior parte das cargas e dos passageiros do país circula por rodovias. Mantê-las livres e seguras é condição para a economia funcionar.",
      },
      {
        termo: "Base constitucional da PRF",
        faz: "Art. 144, § 2º, da Constituição: órgão permanente, organizado e mantido pela União, estruturado em carreira, destinado ao patrulhamento ostensivo das rodovias federais.",
      },
      {
        termo: "Lei Seca: finalidade e avanços",
        faz: "Reduzir mortes causadas por quem dirige depois de beber. Avanços: tolerância zero, mais meios de prova e punições mais duras.",
      },
      {
        termo: "Lei Seca: desafios",
        faz: "Recusa ao teste do etilômetro, fiscalização que não alcança todos os trechos e a cultura de beber e dirigir.",
      },
      {
        termo: "Impunidade e papel da PRF",
        faz: "A sensação de impunidade nasce da fiscalização rara; a PRF a enfrenta com operações frequentes, uso do etilômetro e educação para o trânsito.",
      },
    ],
    cuidado:
      "Números de acidentes e apreensões mudam todo ano. Se não tiver certeza da cifra, use a ideia sem o número.",
  },
  questoes: [
    {
      topico: "Planejamento pela proposta",
      subassunto: "Introdução em tema sobre a PRF",
      dificuldade: 5,
      raciocinio: "Introdução que traz tema e tese e toca os aspectos pedidos.",
      enunciado:
        "O tema é “a PRF e a logística do crime organizado”, com os aspectos: relevância social da PRF; necessidade de um modal rodoviário livre e seguro. A introdução mais adequada é:",
      alternativas: [
        "A PRF foi criada há muitas décadas e, desde então, passou por várias mudanças na sua estrutura interna ao longo dos anos",
        "Eu acredito que a PRF é a melhor polícia do país e, por isso, ela merece todo o apoio da população",
        "Será que o crime organizado um dia vai acabar no Brasil, já que ele cresce em todas as regiões?",
        "A PRF, ao patrulhar as rodovias federais, atinge a logística do crime e protege um modal vital ao país",
        "O crime organizado é um problema mundial que preocupa os governos de todos os continentes há séculos",
      ],
      correta: 3,
      explicacao:
        "A boa introdução apresenta o tema (PRF e logística do crime) e a tese, tocando os dois aspectos: relevância social e modal rodoviário seguro. As outras ficam no histórico, na opinião em primeira pessoa, na pergunta solta ou no assunto genérico.",
      explicacaoErradas:
        "Dizer que a PRF “passou por várias mudanças” é histórico e não responde a nenhum aspecto. “Eu acredito” traz primeira pessoa e elogio sem argumento. “Será que o crime organizado” abre pergunta sem resposta. E “um problema mundial” fica no assunto genérico, longe da PRF.",
      pegadinha: "Abrir com a história da instituição, que não responde a nenhum aspecto.",
      conhecimento: "Art. 144, § 2º, da Constituição: patrulhamento ostensivo das rodovias federais.",
    },
    {
      topico: "Planejamento pela proposta",
      subassunto: "Parágrafo que responde ao aspecto",
      dificuldade: 4,
      raciocinio: "O aspecto tem duas partes; o parágrafo precisa ligar as duas.",
      enunciado:
        "Em um texto sobre a Lei Seca, o aspecto 3 pede “a sensação de impunidade e o papel da PRF”. O parágrafo que melhor atende a esse aspecto é o que:",
      alternativas: [
        "lista números de acidentes de vários anos e de vários países, com fontes e percentuais detalhados, sem comentá-los",
        "explica a origem histórica do Código de Trânsito e as mudanças feitas nas décadas anteriores",
        "descreve os efeitos do álcool no organismo e o tempo que o corpo leva para eliminá-lo",
        "defende o fim de toda fiscalização, já que a educação sozinha resolveria o problema",
        "liga a sensação de impunidade à falta de fiscalização e mostra como a PRF a enfrenta",
      ],
      correta: 4,
      explicacao:
        "O aspecto tem duas partes: impunidade e papel da PRF. O parágrafo certo trata das duas e as liga: fiscalização rara gera sensação de impunidade, e operações frequentes da PRF a combatem.",
      explicacaoErradas:
        "Quem “lista números de acidentes” sem comentar não argumenta nem fala da PRF. A “origem histórica do Código de Trânsito” e os “efeitos do álcool no organismo” fogem do aspecto. E quem “defende o fim de toda fiscalização” contraria o papel da PRF pedido.",
      pegadinha: "Achar que muitos dados, por si, valem como resposta ao aspecto.",
      conhecimento: "Dado sem comentário não argumenta; o aspecto pede relação.",
    },
  ],
};
