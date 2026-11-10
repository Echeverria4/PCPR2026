import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-13",
  resumo: {
    ideia:
      "Os crimes em licitações e contratos estão no Código Penal, arts. 337-E a 337-P. A ação é pública incondicionada, e a multa nunca fica abaixo de 2% do valor do contrato.",
    itens: [
      {
        termo: "Contratação direta ilegal",
        faz: "Art. 337-E: fora das hipóteses legais. Reclusão de 4 a 8 anos e multa. Crime próprio e material.",
      },
      {
        termo: "Frustração do caráter competitivo",
        faz: "Art. 337-F: reclusão de 4 a 8 anos e multa. Exige o intuito de obter vantagem da adjudicação. Crime formal.",
      },
      {
        termo: "Patrocínio de interesse privado",
        faz: "Art. 337-G: dá causa a licitação ou contrato depois invalidado pelo Judiciário. Reclusão de 6 meses a 3 anos e multa.",
      },
      {
        termo: "Modificação ou pagamento irregular",
        faz: "Art. 337-H: vantagem ao contratado sem autorização, ou fatura fora da ordem cronológica. Reclusão de 4 a 8 anos e multa.",
      },
      {
        termo: "Perturbação de licitação",
        faz: "Art. 337-I: impedir, perturbar ou fraudar ato do processo. Detenção de 6 meses a 3 anos e multa.",
      },
      {
        termo: "Violação de sigilo",
        faz: "Art. 337-J: devassar proposta ou dar a chance a terceiro. Detenção de 2 a 3 anos e multa.",
      },
      {
        termo: "Afastamento de licitante",
        faz: "Art. 337-K: afastar ou tentar afastar. Reclusão de 3 a 5 anos e multa, mais a pena da violência. Quem desiste por vantagem tem a mesma pena.",
        pista: "Tentar já consuma o crime.",
      },
      {
        termo: "Fraude em licitação ou contrato",
        faz: "Art. 337-L: mercadoria diversa, falsificada, vencida ou trocada. Reclusão de 4 a 8 anos e multa.",
      },
      {
        termo: "Inidôneo",
        faz: "Art. 337-M: admitir à licitação tem 1 a 3 anos. Celebrar contrato tem 3 a 6 anos. O inidôneo que participa também responde.",
      },
      {
        termo: "Registro cadastral",
        faz: "Art. 337-N: reclusão de 6 meses a 2 anos e multa. É o único de menor potencial ofensivo.",
      },
      {
        termo: "Projetista",
        faz: "Art. 337-O: omite ou altera levantamento cadastral ou condição de contorno. Reclusão de 6 meses a 3 anos e multa.",
      },
      {
        termo: "Multa",
        faz: "Art. 337-P: nunca inferior a 2% do valor do contrato licitado ou celebrado com contratação direta.",
      },
    ],
    cuidado:
      "Os artigos da antiga Lei 8.666 não valem mais para esses crimes. Use os arts. 337-E a 337-P do CP.",
  },
  questoes: [
    {
      topico: "Crimes em licitações",
      subassunto: "Contratação direta ilegal",
      dificuldade: 4,
      raciocinio: "A tipificação hoje está no CP.",
      enunciado:
        "Um gestor dá causa a uma contratação direta fora das hipóteses legais, com a ajuda consciente do empresário contratado. Pelo CP,",
      alternativas: [
        "só há ato de improbidade, sem crime",
        "o fato é atípico, pois a Lei 14.133 prevê só sanção administrativa",
        "há crime do art. 337-E, e o particular pode responder com o gestor",
        "o gestor responde com detenção de 3 a 5 anos, e o particular não",
        "o particular nunca responde, pois o crime é próprio do gestor público",
      ],
      correta: 2,
      explicacao:
        "O art. 337-E pune admitir, possibilitar ou dar causa à contratação direta fora das hipóteses legais, com reclusão de 4 a 8 anos, e multa. O crime é próprio, mas o particular que sabe da condição pode concorrer.",
      explicacaoErradas:
        "“Só improbidade” e “só sanção administrativa” ignoram o CP. “Detenção de 3 a 5 anos” é a pena da lei antiga. “Nunca responde” esquece o concurso de pessoas.",
      pegadinha: "Crime próprio admite participação de quem sabe da condição.",
      conhecimento:
        "A ratificação pelo Tribunal de Contas não descaracteriza o crime.",
    },
    {
      topico: "Crimes em licitações",
      subassunto: "Caráter competitivo",
      dificuldade: 4,
      raciocinio: "O crime é formal, e o fim especial está no tipo.",
      enunciado:
        "Duas empresas combinam seus preços para que uma delas vença, com o intuito de obter a vantagem da adjudicação. A fraude é descoberta antes da adjudicação. O crime do art. 337-F",
      alternativas: [
        "não existe, pois ninguém venceu",
        "fica tentado, pois a adjudicação não ocorreu",
        "exige dano ao erário para se consumar",
        "exige participação de um agente público",
        "consuma-se, pois a vantagem não precisa vir",
      ],
      correta: 4,
      explicacao:
        "O art. 337-F pune frustrar ou fraudar o caráter competitivo, com o intuito de obter vantagem da adjudicação. O crime é formal: a vantagem é o fim, e não o resultado exigido.",
      explicacaoErradas:
        "“Ninguém venceu” e “tentado” exigem resultado que o tipo não pede. “Dano ao erário” não está no artigo. “Agente público” erra, pois o crime é comum.",
      pegadinha: "O intuito é exigido, e o resultado não.",
      conhecimento:
        "A pena é de reclusão de 4 a 8 anos, e multa.",
    },
    {
      topico: "Crimes em licitações",
      subassunto: "Art. 337-H",
      dificuldade: 5,
      raciocinio: "Veja a parte final do artigo.",
      enunciado:
        "Durante a execução de um contrato administrativo, um gestor paga a fatura de um fornecedor amigo antes das outras, com preterição da ordem cronológica de exigibilidade. A conduta é",
      alternativas: [
        "crime do art. 337-H, de 4 a 8 anos e multa",
        "mera infração administrativa",
        "peculato-desvio, do art. 312 do CP",
        "crime do art. 337-L, como fraude no contrato",
        "crime do art. 337-I, por perturbar ato do processo licitatório",
      ],
      correta: 0,
      explicacao:
        "O art. 337-H pune dar causa a modificação ou vantagem ao contratado sem autorização e, ainda, pagar fatura com preterição da ordem cronológica de sua exigibilidade.",
      explicacaoErradas:
        "“Mera infração” ignora o tipo. “Peculato-desvio” cede ao tipo específico. “Art. 337-L” trata da mercadoria ou do serviço. “Art. 337-I” trata de ato do processo licitatório.",
      pegadinha: "O crime também alcança a fase de execução do contrato.",
      conhecimento:
        "A prorrogação sem autorização legal, no edital ou no contrato, também entra no tipo.",
    },
    {
      topico: "Crimes em licitações",
      subassunto: "Afastamento de licitante",
      dificuldade: 5,
      raciocinio: "Tentar afastar está no próprio verbo.",
      enunciado:
        "Um empresário ameaça gravemente um concorrente para que ele saia da licitação, mas ele fica. Outro concorrente aceita dinheiro e desiste de licitar. Pelo art. 337-K,",
      alternativas: [
        "o primeiro responde por tentativa, e o segundo não comete crime",
        "o primeiro responde só por ameaça, e o segundo por corrupção",
        "os dois respondem por crime tentado, com pena reduzida",
        "o primeiro consuma o crime, e o segundo incorre na mesma pena",
        "nenhum responde, pois ninguém foi afastado à força",
      ],
      correta: 3,
      explicacao:
        "O art. 337-K pune afastar ou tentar afastar, então a tentativa já consuma o crime. O parágrafo único aplica a mesma pena a quem se abstém ou desiste de licitar em razão de vantagem oferecida.",
      explicacaoErradas:
        "“Responde por tentativa” e “crime tentado” ignoram o verbo tentar. “Só por ameaça” esquece o tipo específico. “Nenhum responde” exige resultado que a lei não pede.",
      pegadinha: "É crime de atentado: a tentativa tem a pena do consumado.",
      conhecimento:
        "A pena é de reclusão de 3 a 5 anos, e multa, além da pena da violência.",
    },
    {
      topico: "Crimes em licitações",
      subassunto: "Fraude no contrato",
      dificuldade: 4,
      raciocinio: "A fraude pode ocorrer na entrega.",
      enunciado:
        "A empresa contratada por um órgão entrega, como perfeitos, extintores com prazo de validade vencido, em prejuízo da Administração. O crime é",
      alternativas: [
        "estelionato comum, do art. 171",
        "fraude em licitação ou contrato, do art. 337-L",
        "só inadimplemento contratual",
        "modificação irregular de contrato, do art. 337-H",
        "contrabando, pois a mercadoria não podia ser vendida",
      ],
      correta: 1,
      explicacao:
        "O art. 337-L, II, pune fornecer como verdadeira ou perfeita mercadoria falsificada, deteriorada, inservível ou com prazo de validade vencido, em prejuízo da Administração.",
      explicacaoErradas:
        "“Estelionato comum” cede ao tipo específico. “Só inadimplemento” ignora a fraude. “Art. 337-H” trata de vantagem ao contratado. “Contrabando” trata de importação ou exportação.",
      pegadinha: "O tipo é misto alternativo: mais de um meio, um só crime.",
      conhecimento:
        "A pena é de reclusão de 4 a 8 anos, e multa.",
    },
    {
      topico: "Crimes em licitações",
      subassunto: "Empresa inidônea",
      dificuldade: 5,
      raciocinio: "O art. 337-M tem dois degraus de pena.",
      enunciado:
        "Um agente admite à licitação uma empresa declarada inidônea e, depois, celebra contrato com ela. Pelo art. 337-M, a conduta de maior pena é",
      alternativas: [
        "admitir à licitação, com reclusão de 3 a 6 anos",
        "participar da licitação, com reclusão de 3 a 6 anos e multa",
        "celebrar contrato, com reclusão de 3 a 6 anos e multa",
        "celebrar contrato, com reclusão de 1 a 3 anos",
        "as duas têm a mesma pena, de 4 a 8 anos e multa",
      ],
      correta: 2,
      explicacao:
        "O caput pune admitir à licitação com reclusão de 1 a 3 anos, e multa. O § 1º pune celebrar contrato com reclusão de 3 a 6 anos, e multa.",
      explicacaoErradas:
        "“Admitir” tem a pena de 1 a 3 anos. “Participar” está no § 2º, com a pena do caput. “De 1 a 3 anos” é a pena do caput. “Mesma pena” ignora os degraus.",
      pegadinha: "O inidôneo que participa responde pela pena do caput.",
      conhecimento:
        "O § 2º alcança também quem, declarado inidôneo, venha a contratar com a Administração.",
    },
    {
      topico: "Crimes em licitações",
      subassunto: "Menor potencial ofensivo",
      dificuldade: 5,
      raciocinio: "Compare as penas máximas com o limite de 2 anos.",
      enunciado:
        "Entre os crimes em licitações, qual é de menor potencial ofensivo, considerado o máximo de 2 anos da Lei 9.099?",
      alternativas: [
        "Perturbação de licitação, do art. 337-I",
        "Violação de sigilo em licitação, do art. 337-J",
        "Patrocínio de interesse privado, do art. 337-G",
        "Omissão por projetista, do art. 337-O",
        "Violação de registro cadastral, do art. 337-N",
      ],
      correta: 4,
      explicacao:
        "O art. 337-N tem pena de reclusão de 6 meses a 2 anos, e multa. Os outros têm máximo de 3 anos ou mais.",
      explicacaoErradas:
        "“Art. 337-I”, “art. 337-G” e “art. 337-O” têm máximo de 3 anos. “Art. 337-J” tem detenção de 2 a 3 anos.",
      pegadinha: "Detenção não significa menor potencial ofensivo.",
      conhecimento:
        "Todos os crimes do capítulo têm pena privativa de liberdade e multa.",
    },
    {
      topico: "Crimes em licitações",
      subassunto: "Multa mínima",
      dificuldade: 4,
      raciocinio: "Calcule 2% do contrato.",
      enunciado:
        "Um réu é condenado por crime em licitação, em contrato de R$ 1.000.000. Pelo art. 337-P, a multa",
      alternativas: [
        "não pode ser inferior a R$ 20.000",
        "não pode ser inferior a R$ 10.000",
        "não pode ser inferior a R$ 50.000",
        "segue só a regra geral dos dias-multa, sem piso",
        "só incide se houver dano comprovado ao erário",
      ],
      correta: 0,
      explicacao:
        "A multa segue a metodologia do CP, mas não pode ser inferior a 2% do valor do contrato licitado ou celebrado com contratação direta: 2% de R$ 1.000.000 são R$ 20.000.",
      explicacaoErradas:
        "“R$ 10.000” usa 1%, e “R$ 50.000” usa 5%. “Sem piso” ignora o art. 337-P. “Dano comprovado” não é condição da multa.",
      pegadinha: "O piso vale para a multa de todos os crimes do capítulo.",
      conhecimento:
        "A base é o contrato licitado ou celebrado com contratação direta.",
    },
    {
      topico: "Crimes em licitações",
      subassunto: "Violação de sigilo",
      dificuldade: 4,
      raciocinio: "Há duas condutas no tipo.",
      enunciado:
        "Um servidor, sem abrir a proposta, deixa o envelope lacrado ao alcance de um licitante, para que ele o devasse. Pelo art. 337-J,",
      alternativas: [
        "o fato é atípico, pois ele não abriu nada",
        "ele proporciona a terceiro o ensejo de devassar",
        "só o licitante pode responder pelo crime",
        "o crime depende de um dano ao erário",
        "há só perturbação de licitação, do art. 337-I do CP",
      ],
      correta: 1,
      explicacao:
        "O art. 337-J pune devassar o sigilo de proposta ou proporcionar a terceiro o ensejo de devassá-lo. A pena é de detenção de 2 a 3 anos, e multa.",
      explicacaoErradas:
        "“Atípico” ignora a segunda conduta. “Só o licitante” exclui o servidor. “Dano ao erário” não está no artigo. “Art. 337-I” cede ao tipo específico.",
      pegadinha: "Quem só dá a chance também responde.",
      conhecimento:
        "O crime não tem forma culposa.",
    },
  ],
};
