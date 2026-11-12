import type { MapaAula } from "../tipos";

export const MAPAS_CARREIRA: MapaAula[] = [
  {
    aula: "carreira-01",
    centro: { titulo: "Carreira na PRF", emoji: "🚓", sub: "Leis 9.654 e 12.855" },
    desenho: "placa",
    ramos: [
      { rotulo: "História", emoji: "📅", cor: "azul", folhas: ["**1928**: Polícia de Estradas", "24 de julho: **Dia da PRF**", "**1988**: entra no art. 144"] },
      { rotulo: "Constituição", emoji: "📜", cor: "verde", folhas: ["Órgão **permanente** da União", "Patrulhamento **ostensivo**", "Remuneração por **subsídio**"] },
      { rotulo: "Ostensivo", emoji: "👀", cor: "ouro", folhas: ["Farda e viatura **caracterizada**", "Presença que **previne**", "Não é polícia **judiciária**"] },
      { rotulo: "Classes", emoji: "📶", cor: "roxo", folhas: ["Terceira, Segunda, Primeira, **Especial**", "Cargo de nível **superior**", "Atribuições se **somam**"] },
      { rotulo: "Ingresso e lotação", emoji: "🎓", cor: "laranja", folhas: ["Concurso em **duas fases**", "Curso de formação **eliminatório**", "1ª lotação: de preferência **3 anos**", "**40 horas**, dedicação exclusiva"] },
      { rotulo: "Fronteira", emoji: "🗺️", cor: "rosa", folhas: ["**R$ 91** por dia trabalhado", "Sem imposto de **renda**", "Com diária: paga a **maior**"] },
    ],
    macete: "Internacional, só na Classe Especial; cada classe também faz o que a de baixo faz.",
    cuidado: "A PEC 18/2025, aprovada no Senado em 3/11/2026, amplia a atuação da PRF, mas até a promulgação vale o texto atual do art. 144, § 2º.",
  },
  {
    aula: "carreira-02",
    centro: { titulo: "Indenizações e progressão", emoji: "💰", sub: "Lei 13.712 e Decreto 8.282" },
    desenho: "relogio",
    ramos: [
      { rotulo: "Lei 13.712", emoji: "⏰", cor: "azul", folhas: ["Abre mão do **repouso**", "Sempre **voluntário**", "Ações **complexas** ou emergenciais"] },
      { rotulo: "Valores", emoji: "💵", cor: "verde", folhas: ["6 horas: **R$ 420**", "12 horas: **R$ 900**", "Com diária: paga a **maior**"] },
      { rotulo: "Sem incorporar", emoji: "🚫", cor: "ouro", folhas: ["Sem IR nem **previdência**", "Não entra no **subsídio**", "Nem na **aposentadoria**"] },
      { rotulo: "Subir na carreira", emoji: "📈", cor: "roxo", folhas: ["Progressão: **padrão seguinte**", "Promoção: **classe de cima**", "Interstício: **12 meses**"] },
      { rotulo: "Metas e cursos", emoji: "🎯", cor: "laranja", folhas: ["Progressão: **70%** das metas", "Promoção: **80%** das metas", "Cursos: **120**, 150 e **360 horas**"] },
      { rotulo: "Recurso", emoji: "📨", cor: "rosa", folhas: ["Reconsideração em **10 dias**", "Decisão em **5 dias**", "Depois, recurso em **10 dias**"] },
    ],
    macete: "Progressão anda dentro da classe; promoção sobe de classe e pede curso.",
    cuidado: "A lei ainda fala em Ministério da Segurança Pública; hoje a pasta é o Ministério da Justiça e Segurança Pública. Avaliação só vale com exercício em 2/3 do período.",
  },
];
