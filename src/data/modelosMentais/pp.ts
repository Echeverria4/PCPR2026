import type { ModeloMental } from "../../lib/types";

export const MODELOS_MENTAIS_PP: ModeloMental[] = [
  {
    topico: "Inquérito policial",
    origem: "oficial",
    gancho: "Inquérito é investigação, não é processo — tem investigado, não acusado",
    modelo:
      "É procedimento administrativo, inquisitivo (sem contraditório pleno), presidido pelo delegado, destinado a reunir elementos de autoria e materialidade para embasar a ação penal. Pode ser arquivado, mas isso não impede reabertura se surgir prova nova.",
  },
  {
    topico: "Prisão em flagrante e outras prisões",
    origem: "oficial",
    gancho: "Flagrante é o \"pegou no ato\"; virar preventiva exige motivo concreto",
    modelo:
      "Flagrante: próprio, impróprio (perseguição) ou presumido (achado com os objetos). O esperado vale; o preparado é crime impossível (Súmula 145); o forjado é crime. Na custódia, o juiz relaxa, converte ou solta. A Lei 15.272/2025 trouxe sinais que recomendam a preventiva (310, §5º): reiteração, violência, solto em custódia anterior, inquérito ou ação pendente, fuga e risco à prova. Ela também listou os critérios de periculosidade (312, §3º) e vedou a preventiva pela gravidade abstrata (312, §4º). Em crime violento, sexual, de orcrim armada ou hediondo, pede-se a coleta do DNA do preso (310-A). Preventiva nunca de ofício. Temporária: 5+5 dias, ou 30+30 se hediondo.",
  },
  {
    topico: "Medidas cautelares diversas da prisão",
    origem: "oficial",
    gancho: "São a alternativa \"menos drástica\" antes de trancar alguém",
    modelo:
      "Comparecimento periódico, proibição de frequentar lugares, monitoramento eletrônico, fiança — o juiz aplica isso quando a prisão seria excessiva, mas soltar sem condição também é arriscado. É o meio-termo previsto no art. 319 do CPP.",
  },
  {
    topico: "Ação penal e prova no processo penal",
    origem: "oficial",
    gancho: "Quem pode processar e o que pode provar são perguntas separadas",
    modelo:
      "Ação penal pública (incondicionada/condicionada) x privada define quem tem legitimidade para iniciar o processo. Prova no processo penal segue o sistema do livre convencimento motivado — o juiz decide livremente, mas precisa fundamentar, e prova ilícita é vedada.",
  },
  {
    topico: "Competência jurisdicional",
    origem: "oficial",
    gancho: "Competência responde: qual juiz julga isso?",
    modelo:
      "É definida por critérios de lugar (onde o crime ocorreu), matéria (natureza do crime) e prerrogativa de função (cargo do réu) — nessa ordem de prioridade quando há conflito entre critérios.",
  },
  {
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    origem: "oficial",
    gancho: "Lei Antifacção: 3 pessoas, 20 a 40 anos, 90/270 dias de inquérito",
    modelo:
      "Facção = 3 ou mais pessoas que usam violência ou coação para impor controle territorial ou social (§2º). Domínio social estruturado (art. 2º): 20 a 40 anos, +2/3 ao dobro para chefe e financiador. Favorecimento (art. 3º): 12 a 20 anos. Ambos hediondos, sem anistia, graça, indulto, fiança e livramento condicional. Preparação punida com o consumado menos 1/3 a 1/2. Homicídio conexo vai para a Vara Colegiada, não para o júri. Inquérito: 90 dias com preso e 270 com solto. Juiz decide em 15 dias e MP opina em 5. Medidas sobre bens podem ser de ofício, com contraditório diferido.",
  },
  {
    topico: "Audiência de custódia — prazo, finalidade e consequências da ausência",
    origem: "aposta",
    gancho: "24 horas, por vídeo, para toda prisão",
    modelo:
      "Preso (flagrante ou mandado) vê o juiz em até 24h, com MP e defesa. Desde a Lei 15.358, a regra é a videoconferência em tempo real, e o presencial só ocorre por força maior. São garantidas a entrevista reservada com o defensor e a privacidade do preso na sala, e falha do tribunal obriga a refazer tudo. O juiz relaxa, converte em preventiva ou concede liberdade provisória, e apura tortura. Sem audiência e sem motivo idôneo: responsabilidade de quem deu causa (§3º) e, 24h após o prazo, ilegalidade da prisão (§4º), sem impedir a preventiva. Pelo STF, não há soltura automática.",
  },
  {
    topico: "Provas ilícitas e prova ilícita por derivação (teoria dos frutos da árvore envenenada)",
    origem: "aposta",
    gancho: "Árvore envenenada contamina os frutos que nascem dela",
    modelo:
      "Prova ilícita é a obtida com violação de direito (busca sem mandado, tortura); prova ilícita por derivação é a prova lícita em si, mas que só existe porque nasceu de uma prova ilícita anterior. A teoria dos frutos da árvore envenenada manda descartar as duas.",
  },
  {
    topico: "Colaboração premiada — requisitos e benefícios",
    origem: "aposta",
    gancho: "Colaborar troca informação por benefício processual",
    modelo:
      "O investigado ou réu fornece informações relevantes — localização de provas, identificação de coautores — em troca de benefícios como redução de pena ou perdão judicial. Exige voluntariedade e efetividade da colaboração, homologada pelo juiz.",
  },
  {
    topico: "Cadeia de custódia da prova (arts. 158-A a 158-F do CPP)",
    origem: "aposta",
    gancho: "Sem cadeia de custódia intacta, a prova pode ser inválida no processo",
    modelo:
      "Os arts. 158-A a 158-F do CPP exigem o registro completo do trajeto da prova, da coleta até o uso em juízo. No processo penal, quebra na cadeia pode levar à nulidade da prova mesmo que o conteúdo seja verdadeiro — o mesmo tema aparece em Ciências Forenses, a FGV costuma cruzar as duas matérias.",
  },
];
