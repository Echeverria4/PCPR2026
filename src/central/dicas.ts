/** Dicas de estudo da tela inicial: uma por dia, em rodízio. Texto próprio do app. */
export interface DicaEstudo {
  titulo: string;
  texto: string;
}

export const DICAS_ESTUDO: DicaEstudo[] = [
  {
    titulo: "Tente antes de reler",
    texto: "Antes de abrir o resumo, tente lembrar o assunto de cabeça por 1 minuto. Puxar da memória fixa mais do que ler de novo.",
  },
  {
    titulo: "Erro é mapa",
    texto: "Cada questão errada mostra o ponto exato a revisar. Refaça as erradas no dia seguinte e de novo depois de uma semana.",
  },
  {
    titulo: "Blocos curtos",
    texto: "25 a 40 minutos de foco e 5 de pausa rendem mais do que 2 horas seguidas com a cabeça longe.",
  },
  {
    titulo: "PDF primeiro",
    texto: "Ler o PDF antes do vídeo faz a aula virar revisão: você já chega sabendo o que procurar.",
  },
  {
    titulo: "Explique em voz alta",
    texto: "Se você consegue explicar a regra em duas frases simples, aprendeu. Se travar, é ali que precisa voltar.",
  },
  {
    titulo: "Misture as matérias",
    texto: "Alternar duas matérias no mesmo dia cansa menos e ajuda a separar regras parecidas na hora da prova.",
  },
  {
    titulo: "Leia o comando até o fim",
    texto: "Muita questão se perde no \"exceto\", no \"não\" ou no \"segundo a lei\". Marque essa palavra antes de ler as opções.",
  },
  {
    titulo: "Constância ganha de volume",
    texto: "1 hora todo dia vale mais do que 7 horas no domingo. A sequência de dias é o número que mais importa aqui.",
  },
  {
    titulo: "Revise no mesmo dia",
    texto: "Dez minutos à noite olhando o que estudou de manhã seguram boa parte do que seria esquecido até amanhã.",
  },
  {
    titulo: "Celular longe",
    texto: "Deixe o celular em outro cômodo durante o bloco de estudo. Cada olhada custa minutos para voltar ao ritmo.",
  },
  {
    titulo: "Lei seca tem palavra-chave",
    texto: "Em artigo de lei, a prova troca \"pode\" por \"deve\", prazo e quem decide. Grife só isso quando ler.",
  },
  {
    titulo: "Durma bem",
    texto: "É dormindo que a memória do dia se organiza. Virar a noite estudando costuma apagar o que entrou.",
  },
  {
    titulo: "Questão difícil no fim",
    texto: "Na prova, pule a questão que travou e volte depois. Garanta primeiro os pontos que você já sabe.",
  },
  {
    titulo: "Mapa mental de memória",
    texto: "Olhe o mapa por 1 minuto, feche e tente desenhar os ramos num papel. Compare e complete o que faltou.",
  },
];

/** A dica do dia: muda à meia-noite e dá a volta na lista. */
export function dicaDoDia(meiaNoite: number): DicaEstudo {
  const dias = Math.floor(meiaNoite / 86_400_000);
  return DICAS_ESTUDO[((dias % DICAS_ESTUDO.length) + DICAS_ESTUDO.length) % DICAS_ESTUDO.length];
}
