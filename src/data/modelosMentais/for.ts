import type { ModeloMental } from "../../lib/types";

export const MODELOS_MENTAIS_FOR: ModeloMental[] = [
  {
    topico: "Medicina legal: tanatologia, traumatologia, asfixiologia, toxicologia",
    origem: "oficial",
    gancho: "Cada ramo da medicina legal responde uma pergunta sobre o corpo",
    modelo:
      "Tanatologia estuda a morte — causa, tempo, sinais cadavéricos. Traumatologia estuda as lesões e o instrumento que as causou. Asfixiologia estuda as mortes por falta de oxigênio (enforcamento, sufocação, afogamento). Toxicologia estuda intoxicação e substâncias no organismo. Essa ordem costuma ser a sequência que a prova segue.",
  },
  {
    topico: "Papiloscopia (Sistema de Vucetich) e identificação humana",
    origem: "oficial",
    gancho: "Vucetich classificou a digital em 4 famílias antes de existir computador",
    modelo:
      "O Sistema de Vucetich organiza impressões digitais em quatro tipos fundamentais — arco, presilha interna, presilha externa e verticilo — usando o desenho da região central do dedo. É a base clássica da identificação humana por datiloscopia, ainda referência mesmo com identificação biométrica moderna.",
  },
  {
    topico: "Criminalística e documentoscopia",
    origem: "oficial",
    gancho: "Criminalística examina o vestígio; documentoscopia examina papel e tinta",
    modelo:
      "Criminalística é o guarda-chuva da perícia técnica sobre vestígios materiais do crime — local, objetos, marcas. Documentoscopia é o ramo específico que analisa autenticidade de documentos (grafia, assinatura, papel, tinta) para detectar falsificação.",
  },
  {
    topico: "Cadeia de custódia (arts. 158-A a 158-F do CPP)",
    origem: "oficial",
    gancho: "Cadeia de custódia é o histórico de posse da prova, de ponta a ponta",
    modelo:
      "Desde a coleta do vestígio no local até a apresentação em juízo, cada pessoa que manuseia a prova precisa registrar o momento e a condição (arts. 158-A a 158-F do CPP). Qualquer elo quebrado nessa corrente pode invalidar a prova, mesmo que ela seja verdadeira.",
  },
  {
    topico: "Balística forense",
    origem: "oficial",
    gancho: "Balística responde de onde, com quê e como o disparo aconteceu",
    modelo:
      "A balística externa estuda o trajeto do projétil, a interna estuda o que acontece dentro da arma no disparo, e a de efeitos estuda o que acontece no alvo. A comparação de estrias na bala identifica a arma usada, como uma impressão digital do cano.",
  },
  {
    topico: "Criminologia e vitimologia",
    origem: "oficial",
    gancho: "Criminologia olha pro criminoso; vitimologia olha pra vítima",
    modelo:
      "Criminologia estuda as causas e o contexto do comportamento criminoso — é ciência social aplicada ao crime, não direito penal. Vitimologia estuda o papel e a vulnerabilidade da vítima no evento criminoso, importante para política de prevenção e proteção, nunca para \"culpar\" a vítima.",
  },
  {
    topico: "Criminologia digital",
    origem: "oficial",
    gancho: "É a criminologia clássica aplicada ao ambiente virtual",
    modelo:
      "Estuda os padrões de comportamento criminoso no espaço digital — como o crime se organiza, se espalha e encontra vítimas online. Cruza direto com os temas de crimes cibernéticos de Tecnologia, então uma questão de uma matéria costuma valer para a outra.",
  },
  {
    topico: "Local de crime: isolamento, preservação e etapas do exame pericial",
    origem: "aposta",
    gancho: "Isolar primeiro, preservar sempre, examinar por último",
    modelo:
      "A sequência correta é sempre isolar o perímetro (impedir entrada e contaminação), preservar tudo no estado em que foi encontrado e só depois liberar o exame pericial técnico. A questão clássica pergunta \"o que o agente NÃO deve fazer\" — mexer em qualquer coisa antes da perícia chegar é sempre a resposta errada.",
  },
  {
    topico: "Necropsia x exame de corpo de delito — diferenças e finalidades",
    origem: "aposta",
    gancho: "Necropsia é sobre a morte; corpo de delito é sobre qualquer vestígio do crime",
    modelo:
      "Necropsia (autópsia) é o exame do cadáver para determinar causa e circunstância da morte. Exame de corpo de delito é mais amplo: qualquer prova material que comprove a existência do crime, podendo ser em pessoa viva (lesão corporal) ou em coisa (arrombamento) — nem todo corpo de delito envolve morte.",
  },
  {
    topico: "Perfil genético (DNA) e bancos de dados forenses (RNIC)",
    origem: "aposta",
    gancho: "DNA identifica quem é; o banco de dados lembra quem já foi",
    modelo:
      "O perfil genético usa regiões específicas do DNA, não o genoma inteiro, para gerar um código comparável entre amostras. O RNIC (Rede Integrada de Banco de Perfis Genéticos) armazena esses perfis de condenados e vestígios de crimes para cruzar casos não resolvidos no futuro.",
  },
  {
    topico: "Balística: percussão, tiro à queima-roupa e curta/média/longa distância",
    origem: "aposta",
    gancho: "A distância do disparo se lê nos resíduos ao redor do ferimento",
    modelo:
      "Tiro à queima-roupa deixa marca de fuligem e queimadura pelo contato ou proximidade extrema; curta distância deixa resíduos de pólvora espalhados ao redor do orifício (tatuagem); média e longa distância não deixam resíduo visível, só o orifício de entrada. Essa leitura ajuda a reconstruir a posição do atirador.",
  },
];
