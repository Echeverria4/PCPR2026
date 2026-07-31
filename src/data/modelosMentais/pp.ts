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
    gancho: "Flagrante é o \"pegou no ato\"; as outras prisões pedem decisão judicial antes",
    modelo:
      "Flagrante (próprio, impróprio, presumido) dispensa ordem judicial prévia porque o crime está acontecendo ou acabou de acontecer. Prisão preventiva e temporária exigem decisão fundamentada do juiz, com requisitos e prazos próprios — a preventiva é mais ampla nos requisitos, a temporária é restrita a crimes específicos e tem prazo certo.",
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
    gancho: "É a lei mais nova do pacote — a banca adora testar o que é recente",
    modelo:
      "Atualiza o enfrentamento ao crime organizado, reforçando investigação, cooperação entre órgãos e instrumentos de repressão a organizações criminosas. Por ser de 2026, vale ler o texto oficial diretamente em vez de confiar só em resumos, já que ainda não tem jurisprudência consolidada.",
  },
  {
    topico: "Audiência de custódia — prazo, finalidade e consequências da ausência",
    origem: "aposta",
    gancho: "Prazo é 24 horas: o preso vê um juiz rápido, sempre",
    modelo:
      "Toda prisão em flagrante precisa ser apresentada a um juiz em até 24 horas para verificar a legalidade e a necessidade de manutenção da prisão. A ausência de audiência de custódia no prazo pode gerar relaxamento da prisão — não é só formalidade, é garantia.",
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
