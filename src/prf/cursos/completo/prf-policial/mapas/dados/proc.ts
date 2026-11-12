import type { MapaAula } from "../tipos";

export const MAPAS_PROC: MapaAula[] = [
  {
    aula: "proc-01",
    centro: { titulo: "Ação penal", emoji: "📣", sub: "Quem acusa e como" },
    desenho: "balanca",
    ramos: [
      { rotulo: "Incondicionada", emoji: "🏛️", cor: "azul", folhas: ["Regra **geral**", "Só o **MP** denuncia", "MP **não desiste**"] },
      { rotulo: "Condicionada", emoji: "📝", cor: "verde", folhas: ["**Representação** da vítima", "Ou requisição do **Ministério da Justiça**", "Irretratável **após a denúncia**"] },
      { rotulo: "Privada", emoji: "👤", cor: "ouro", folhas: ["Queixa em **6 meses**", "Personalíssima: só **art. 236**", "Subsidiária: MP **inerte**"] },
      { rotulo: "Arquivamento", emoji: "🗄️", cor: "roxo", folhas: ["MP decide e **comunica**", "Vítima pede revisão em **30 dias**", "Reabrir: só com **provas novas**"] },
      { rotulo: "Não persecução", emoji: "🤝", cor: "laranja", folhas: ["Sem violência, mínima **abaixo de 4**", "**Confissão** formal", "Reincidente: **não cabe**"] },
      { rotulo: "Prazos", emoji: "⏰", cor: "rosa", folhas: ["Denúncia: **5** preso, **15** solto", "Exclui o **dia do começo**", "Intimado na sexta: conta da **segunda**"] },
    ],
    macete: "Pública: MP denuncia. Privada: vítima oferece queixa. Subsidiária: só se o MP ficar parado.",
    cuidado: "A retratação da representação só vale até o oferecimento da denúncia; o recebimento como marco é regra da Lei Maria da Penha.",
  },
  {
    aula: "proc-02",
    centro: { titulo: "Teoria da prova", emoji: "🔎", sub: "Contraditório e provas ilícitas" },
    desenho: "documento",
    ramos: [
      { rotulo: "Prova ou informação", emoji: "🧪", cor: "azul", folhas: ["Prova: nasce **em juízo**", "Inquérito: elemento **informativo**", "Só inquérito **não condena**"] },
      { rotulo: "Exceções do 155", emoji: "📌", cor: "verde", folhas: ["Cautelares e **não repetíveis**", "Provas **antecipadas**", "Contraditório **diferido**"] },
      { rotulo: "Convencimento", emoji: "🧠", cor: "ouro", folhas: ["Juiz: livre, mas **motiva**", "Jurados: **íntima convicção**"] },
      { rotulo: "Ônus", emoji: "🎒", cor: "roxo", folhas: ["Cabe a **quem alega**", "Dúvida: **a favor** do réu", "Juiz **não investiga**"] },
      { rotulo: "Ilícitas", emoji: "🚫", cor: "laranja", folhas: ["Saem **dos autos**", "Derivadas **também** caem", "Salvo fonte **independente**"] },
      { rotulo: "Para absolver", emoji: "✅", cor: "rosa", folhas: ["Ilícita a favor do réu: **aceita**", "Base: **proporcionalidade**"] },
    ],
    macete: "Prova nasce no processo; o inquérito só informa.",
    cuidado: "O § 5º do art. 157 ainda está no texto do CPP, mas o STF o declarou inconstitucional em 2023: quem viu a prova ilícita pode sentenciar.",
  },
  {
    aula: "proc-03",
    centro: { titulo: "Meios de prova", emoji: "🧪", sub: "Perícia, custódia e testemunhas" },
    desenho: "rodovia",
    ramos: [
      { rotulo: "Corpo de delito", emoji: "🔬", cor: "azul", folhas: ["Vestígio: exame **indispensável**", "Confissão **não supre**", "Sumiu o vestígio: **testemunha** supre"] },
      { rotulo: "Perito", emoji: "🥼", cor: "verde", folhas: ["**Um** oficial, curso superior", "Sem oficial: **dois** idôneos", "Laudo em **10 dias**"] },
      { rotulo: "Cadeia de custódia", emoji: "🔗", cor: "ouro", folhas: ["História do **vestígio**", "Do reconhecimento ao **descarte**", "Mexer no local: **fraude processual**"] },
      { rotulo: "Acidente na rodovia", emoji: "🛣️", cor: "roxo", folhas: ["Remove feridos e **veículos**", "Se atrapalham o **tráfego**", "Com **boletim** da ocorrência"] },
      { rotulo: "Pessoas ouvidas", emoji: "👂", cor: "laranja", folhas: ["Silêncio **não prejudica**", "Ofendido: **sem compromisso**", "Parente: depõe só **sem outra prova**"] },
      { rotulo: "Reconhecimento e busca", emoji: "🔦", cor: "rosa", folhas: ["Suspeito ao lado de **parecidos**", "Pessoal: **fundada suspeita**", "Mulher revistada por **mulher**"] },
    ],
    macete: "Vestígio pede perícia; sem vestígio, a testemunha supre; vestígio guardado tem cadeia de custódia.",
    cuidado: "Quem guarda segredo profissional é proibido de depor, e o parente só é obrigado quando não há outra prova, mesmo assim sem compromisso.",
  },
  {
    aula: "proc-04",
    centro: { titulo: "Inquérito e prisão", emoji: "🚔", sub: "Flagrante e custódia" },
    desenho: "algema",
    ramos: [
      { rotulo: "Inquérito", emoji: "📂", cor: "azul", folhas: ["Escrito, sigiloso, **dispensável**", "Delegado **não arquiva**", "Defesa vê o **documentado**"] },
      { rotulo: "Prazos", emoji: "⏰", cor: "verde", folhas: ["Preso: **10 dias**", "Solto: **30 dias**", "Leis especiais: **prazo próprio**"] },
      { rotulo: "Força e algemas", emoji: "🔗", cor: "ouro", folhas: ["Força só **indispensável**", "Algema: justificar **por escrito**", "Proibida no **parto**"] },
      { rotulo: "Flagrante", emoji: "🚨", cor: "roxo", folhas: ["Próprio: **cometendo**", "Impróprio: **perseguido**", "Presumido: com **objetos**"] },
      { rotulo: "Esperado ou preparado", emoji: "🎣", cor: "laranja", folhas: ["Esperado: **válido**", "Preparado: **não há crime**"] },
      { rotulo: "Audiência de custódia", emoji: "🎥", cor: "rosa", folhas: ["Em até **24 horas**", "Por **videoconferência**", "Relaxa, converte ou **solta**"] },
    ],
    macete: "Flagrante: cometendo é próprio, perseguido é impróprio, achado com objetos é presumido.",
    cuidado: "Quem presta pronto e integral socorro à vítima de trânsito não é preso em flagrante nem paga fiança (CTB, art. 301).",
  },
];
