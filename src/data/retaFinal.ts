import type { Confianca, SubjectId } from "../lib/types";

/** Prova objetiva: 11/10/2026, 13h às 18h (horário de Brasília), 5h para 100 questões. */
export const INICIO_PROVA = "2026-10-11T13:00:00-03:00";
export const DURACAO_SIMULADO_MIN = 300;
export const MINUTOS_CARTAO = 20;

export const ROTULO_CONFIANCA: Record<Confianca, string> = {
  certeza: "Certeza",
  duvida: "Dúvida",
  chute: "Chute",
};

/** Ordem do Anexo I (gerais e depois específicos), usada no simulado e na tabela de marcos. */
export const ORDEM_CADERNO: SubjectId[] = ["pt", "rlm", "pr", "ti", "for", "cont", "est", "leg", "pen", "pp", "con", "adm", "dh"];

/** Conhecimentos Gerais (35 questões); o resto são os 65 específicos, 1º critério de desempate de nota (19.3 b). */
export const GERAIS: SubjectId[] = ["pt", "rlm", "pr"];

/**
 * Orçamento de tempo por matéria, em minutos: 267 de questões + 20 de cartão + 13 de folga = 300.
 * PT ganha mais porque a FGV cobra texto longo; as de 3 questões ficam com ~2 min cada.
 */
export const ORCAMENTO_MIN: Record<SubjectId, number> = {
  pt: 80,
  rlm: 20,
  pr: 10,
  ti: 55,
  for: 25,
  cont: 15,
  est: 20,
  leg: 10,
  pen: 7,
  pp: 7,
  con: 6,
  adm: 6,
  dh: 6,
};

export interface MarcoTempo {
  materia: SubjectId;
  /** Minutos desde o início da prova em que a matéria deve estar terminada. */
  ateMin: number;
}

export const MARCOS: MarcoTempo[] = ORDEM_CADERNO.reduce<MarcoTempo[]>((lista, materia) => {
  const anterior = lista.length ? lista[lista.length - 1].ateMin : 0;
  lista.push({ materia, ateMin: anterior + ORCAMENTO_MIN[materia] });
  return lista;
}, []);

export type AcaoPlano = "simulado" | "reforco" | "mapa" | "externa" | "caderno" | "provas" | "conteudo" | "modelos" | "revisao" | "taticas" | "concurso";

export interface ItemPlano {
  id: string;
  texto: string;
  acao?: AcaoPlano;
}

export interface DiaPlano {
  /** AAAA-MM-DD */
  data: string;
  titulo: string;
  foco: string;
  itens: ItemPlano[];
}

export const PLANO_RETA_FINAL: DiaPlano[] = [
  {
    data: "2026-10-07",
    titulo: "Qua 07/10",
    foco: "Diagnóstico no horário real da prova",
    itens: [
      { id: "07-taticas", texto: "Manhã: ler as táticas da prova (5 min) e almoçar leve. Nada de matéria pesada antes do simulado.", acao: "taticas" },
      { id: "07-simulado", texto: "13h às 18h: simulado modo prova (100 questões, 5h, sem correção durante). Marque a confiança em cada resposta.", acao: "simulado" },
      { id: "07-correcao", texto: "Noite (1h): corrigir começando pelos erros convictos (marcou certeza e errou). São os conceitos errados que você levaria para a prova.", acao: "caderno" },
      { id: "07-mapa", texto: "Abrir o mapa de blocos e anotar os 5 com mais pontos em jogo.", acao: "mapa" },
    ],
  },
  {
    data: "2026-10-08",
    titulo: "Qui 08/10",
    foco: "Atacar os pontos fracos que valem mais",
    itens: [
      { id: "08-reforco", texto: "Reforço dirigido dos 5 piores blocos (30 questões, com correção a cada uma).", acao: "reforco" },
      { id: "08-conteudo", texto: "Ler Conteúdo e Modelos mentais só dos blocos em vermelho. Não reler o que já está verde.", acao: "conteudo" },
      { id: "08-pt", texto: "PT de uma prova real da FGV (aba Provas reais), a ~3 min por questão: o app tem 73 de PT, mas pouca interpretação de texto longo, o forte da FGV.", acao: "provas" },
      { id: "08-lancar", texto: "Corrigiu a prova real? Lance acertos e erros por matéria e tópico em \"Provas feitas fora do app\": o mapa passa a contar.", acao: "externa" },
      { id: "08-revisao", texto: "Fila de revisão dos errados até zerar ou cansar.", acao: "revisao" },
    ],
  },
  {
    data: "2026-10-09",
    titulo: "Sex 09/10",
    foco: "Segundo simulado e ajuste de ritmo",
    itens: [
      { id: "09-simulado", texto: "13h às 18h: simulado 2 no app (parte do PT vai repetir) ou uma prova real da FGV completa, no papel e cronometrada.", acao: "simulado" },
      { id: "09-lancar", texto: "Se a prova foi no papel, lance os erros por matéria e tópico antes de comparar.", acao: "externa" },
      { id: "09-comparar", texto: "Comparar com o simulado 1: tempo por matéria contra os marcos e pontos nos 65 específicos (1º desempate).", acao: "mapa" },
      { id: "09-caderno", texto: "Imprimir ou salvar em PDF o caderno de erros para o sábado.", acao: "caderno" },
    ],
  },
  {
    data: "2026-10-10",
    titulo: "Sáb 10/10",
    foco: "Dia leve: consolidar, não aprender",
    itens: [
      { id: "10-caderno", texto: "Reler o caderno de erros e os Modelos mentais. Nada de conteúdo novo e nada de simulado.", acao: "modelos" },
      { id: "10-logistica", texto: "Separar documento de identidade original, comprovante de inscrição (11.1), caneta esferográfica azul ou preta de corpo transparente, lanche lacrado e água em garrafa transparente sem rótulo. Conferir local e trajeto.", acao: "concurso" },
      { id: "10-sono", texto: "Dormir cedo: o sono das noites anteriores consolida o que você estudou." },
    ],
  },
  {
    data: "2026-10-11",
    titulo: "Dom 11/10",
    foco: "Prova: 13h às 18h",
    itens: [
      { id: "11-chegada", texto: "Refeição leve e chegar até 11h30 (11.1). Os portões fecham às 12h30 (11.2).", acao: "concurso" },
      { id: "11-execucao", texto: "Duas passadas, marcos de tempo, cartão transcrito por matéria e nenhuma questão em branco.", acao: "taticas" },
    ],
  },
];

export interface Tatica {
  titulo: string;
  texto: string;
}

export const TATICAS_PROVA: Tatica[] = [
  {
    titulo: "Nenhuma questão em branco",
    texto:
      "Errar não desconta. Em branco, com duas marcações ou com rasura vale zero (9.10). Um chute entre 5 alternativas vale 0,2 ponto em média; eliminando 2, sobe para 0,33. Reserve os últimos minutos para preencher tudo.",
  },
  {
    titulo: "Duas passadas",
    texto:
      "Na primeira, resolva o que sabe e ponha um sinal no caderno nas duvidosas. Não passe de ~4 min numa questão travada. Na segunda, volte só às marcadas.",
  },
  {
    titulo: "Sem relógio: treine o ritmo",
    texto:
      "Relógio de qualquer espécie é proibido (11.26). Por isso o simulado do app mostra os marcos por matéria: decore os horários-alvo. No dia, compare com o horário sempre que tiver a informação na sala.",
  },
  {
    titulo: "Cartão por matéria",
    texto:
      "Ao fechar cada matéria, passe ao cartão as respostas de que tem certeza; as duvidosas ficam para o fim. Guarde pelo menos 20 min do final para o cartão. Caneta esferográfica azul ou preta, de corpo transparente (11.1). Rasura zera a questão.",
  },
  {
    titulo: "Desempate favorece os específicos",
    texto:
      "Depois da idade (60+), o desempate é pelos pontos nos 65 específicos, depois TI, depois Ciências Forenses; os 35 gerais e PT só vêm depois (19.3). Na margem do corte, um ponto de TI vale mais que um de PT. Mas PT tem 25 questões: não abandone.",
  },
  {
    titulo: "O corte não é 50",
    texto:
      "50 pontos é só o piso. Passa quem tem 50+ E está dentro do limite da região: Interior 1.360 e Curitiba/RM 340 na ampla concorrência (9.18). Quem empata na última posição também segue (9.18.3), então cada ponto conta.",
  },
  {
    titulo: "Horários do dia",
    texto:
      "Chegar até 11h30 e portões às 12h30 (11.1 e 11.2). Ninguém sai antes de 3h de prova, ou seja, 16h (11.13). O caderno de questões só pode sair com você nos 30 min finais, a partir de 17h30 (11.19). Anotar o gabarito é proibido (11.19.1).",
  },
];
