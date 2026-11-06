import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-04",
  resumo: {
    ideia:
      "A segunda metade do art. 5º protege o acesso à Justiça, o direito penal e o processo. Ela termina nos remédios constitucionais, que são as ações que defendem os direitos.",
    itens: [
      {
        termo: "Inafastabilidade",
        faz: "A lei não exclui do Judiciário lesão ou ameaça a direito. Em regra, não é preciso esgotar a via administrativa.",
      },
      {
        termo: "Direito adquirido",
        faz: "A lei nova não prejudica direito adquirido, ato jurídico perfeito e coisa julgada.",
      },
      {
        termo: "Júri",
        faz: "Julga crimes dolosos contra a vida. Foro fixado só em Constituição estadual não prevalece sobre ele (SV 45).",
      },
      {
        termo: "Crimes na CF",
        faz: "Racismo e grupos armados: inafiançáveis e imprescritíveis. Tortura, tráfico, terrorismo e hediondos: inafiançáveis, sem graça ou anistia.",
      },
      {
        termo: "Penas",
        faz: "Proibidas: morte (salvo guerra declarada), perpétua, trabalhos forçados, banimento e cruéis.",
      },
      {
        termo: "Extradição",
        faz: "Nato nunca. Naturalizado: crime comum antes da naturalização, ou tráfico a qualquer tempo. Crime político ou de opinião: ninguém.",
      },
      {
        termo: "Preso",
        faz: "Comunicação imediata ao juiz e à família, silêncio, identificação de quem prendeu e relaxamento da prisão ilegal.",
        pista: "Algema é exceção, com justificativa escrita (SV 11).",
      },
      {
        termo: "Provas ilícitas",
        faz: "São inadmissíveis, e as provas derivadas delas também, salvo fonte independente.",
      },
      {
        termo: "HC e habeas data",
        faz: "Gratuitos. HC protege a locomoção, e HD protege dados da própria pessoa.",
      },
      {
        termo: "MS e MI",
        faz: "MS: direito líquido e certo, em 120 dias. MI: falta de norma que impede o exercício de um direito.",
      },
    ],
    cuidado:
      "Só o racismo e a ação de grupos armados são imprescritíveis. Tortura, tráfico, terrorismo e hediondos prescrevem.",
  },
  questoes: [
    {
      topico: "Acesso à Justiça",
      subassunto: "Esgotamento da via administrativa",
      dificuldade: 4,
      raciocinio:
        "A regra é a porta aberta. As exceções são poucas.",
      enunciado:
        "Um motorista autuado pela PRF não quis recorrer à JARI e ajuizou logo uma ação contra a multa. A União alega que ele deveria esgotar a via administrativa. Segundo a CF,",
      alternativas: [
        "a ação deve ser extinta, pois o recurso à JARI vem antes de qualquer ação",
        "a ação só anda depois do depósito do valor integral da multa em juízo",
        "o juiz só pode apreciar a ação se a JARI demorar mais de 30 dias",
        "a ação depende de autorização do chefe da PRF responsável pela autuação",
        "a ação é cabível, pois em regra não se exige esgotar a via administrativa",
      ],
      correta: 4,
      explicacao:
        "O art. 5º, XXXV, diz que a lei não excluirá da apreciação do Judiciário lesão ou ameaça a direito. Por isso, em regra, não é preciso esgotar a via administrativa antes de ir ao juiz.",
      explicacaoErradas:
        "“O recurso à JARI vem antes” trata como regra o que é exceção. “Depósito do valor integral” cria uma barreira sem base na CF. “Mais de 30 dias” inventa um prazo. “Autorização do chefe” não tem base nenhuma.",
      pegadinha:
        "As exceções são pontuais, como a Justiça Desportiva, e não valem para a multa de trânsito.",
      conhecimento:
        "A SV 28 considera inconstitucional exigir depósito prévio para discutir crédito tributário em ação judicial.",
    },
    {
      topico: "Segurança jurídica",
      subassunto: "Lei de ordem pública",
      dificuldade: 5,
      raciocinio:
        "A CF fala em “lei”, sem separar tipos de lei.",
      enunciado:
        "Uma lei de ordem pública de 2025 mudou cláusulas de contratos assinados em 2020, e o governo diz que ela os alcança por ser de ordem pública. Segundo o STF, a proteção ao ato jurídico perfeito",
      alternativas: [
        "não alcança leis de ordem pública, que têm efeito imediato sobre tudo",
        "vale para toda lei, de direito público ou privado, mesmo as de ordem pública",
        "vale só para os contratos firmados com o poder público na mesma data",
        "depende de prévio registro do contrato em cartório de títulos e documentos",
        "vale apenas para as leis penais, e não para as leis civis ou comerciais",
      ],
      correta: 1,
      explicacao:
        "Na ADI 493, o STF entendeu que o art. 5º, XXXVI, se aplica a qualquer lei infraconstitucional, sem distinguir direito público e privado, ou lei de ordem pública e lei dispositiva.",
      explicacaoErradas:
        "“Não alcança leis de ordem pública” é a tese recusada. “Poder público” limita o que a CF não limita. “Registro em cartório” cria uma condição sem base. “Apenas para as leis penais” contraria a generalidade do inciso.",
      pegadinha:
        "Ter efeito imediato é ser aplicada a fatos futuros, não refazer o que já se consolidou.",
      conhecimento:
        "Direito adquirido não vale contra a norma do poder constituinte originário, que pode alcançá-lo.",
    },
    {
      topico: "Tribunal do Júri",
      subassunto: "Foro por prerrogativa (SV 45)",
      dificuldade: 5,
      raciocinio:
        "CF prevalece sobre Constituição estadual.",
      enunciado:
        "Um vereador tem foro no Tribunal de Justiça, fixado apenas na Constituição do seu estado, e é acusado de homicídio doloso. Segundo o STF, quem o julga é",
      alternativas: [
        "o TJ, pois a Constituição estadual tem força para fixar esse tipo de foro",
        "o STF, por se tratar de agente público eleito pelo povo",
        "o Tribunal do Júri, pois esse foro vem só da Constituição estadual",
        "o juiz singular, pois o júri só alcança quem não tem mandato",
        "o próprio réu escolhe entre o TJ e o júri, em nome da ampla defesa",
      ],
      correta: 2,
      explicacao:
        "A SV 45 diz que a competência do Tribunal do Júri prevalece sobre o foro por prerrogativa de função estabelecido exclusivamente em Constituição estadual. O júri vem da CF, e o foro veio de norma inferior a ela.",
      explicacaoErradas:
        "“Tem força para fixar” ignora a súmula. “O STF” não julga vereador. “O juiz singular” tira o caso do júri sem base. “O próprio réu escolhe” inventa uma faculdade.",
      pegadinha:
        "Se o foro estivesse na própria CF, como o de um deputado federal, ele prevaleceria sobre o júri.",
      conhecimento:
        "A competência mínima do júri é para os crimes dolosos contra a vida, e a lei pode ampliá-la.",
    },
    {
      topico: "Direito penal na CF",
      subassunto: "Retroatividade benigna",
      dificuldade: 4,
      raciocinio:
        "A coisa julgada não barra a lei que favorece o réu.",
      enunciado:
        "Um réu foi condenado de forma definitiva. Depois disso, uma lei nova reduziu a pena daquele crime. Segundo a CF,",
      alternativas: [
        "a lei nova se aplica a ele, mesmo depois do trânsito em julgado",
        "a coisa julgada impede qualquer mudança, até a que beneficie o réu",
        "a lei nova só se aplica se o processo ainda estiver em fase de recurso",
        "a lei nova só vale para os crimes praticados depois da sua vigência",
        "a redução depende de indulto do Presidente para alcançar quem já foi condenado",
      ],
      correta: 0,
      explicacao:
        "O art. 5º, XL, manda a lei penal retroagir para beneficiar o réu. Isso vale mesmo depois do trânsito em julgado.",
      explicacaoErradas:
        "“Impede qualquer mudança” esquece a retroação benéfica. “Fase de recurso” limita a regra sem base. “Crimes praticados depois” descreve a lei mais grave. “Indulto do Presidente” é um instituto diferente.",
      pegadinha:
        "A coisa julgada protege a pessoa contra o Estado, não contra uma lei que a favoreça.",
      conhecimento:
        "Depois do trânsito em julgado, a aplicação da lei mais benigna cabe ao juízo da execução, conforme a Súmula 611 do STF.",
    },
    {
      topico: "Direito penal na CF",
      subassunto: "Mandados de criminalização",
      dificuldade: 5,
      raciocinio:
        "Imprescritível só tem dois: racismo e grupos armados.",
      enunciado:
        "Sobre o que a CF determina para o racismo, o tráfico de drogas e a ação de grupos armados contra a ordem constitucional, é certo que",
      alternativas: [
        "os três são imprescritíveis, e nenhum deles admite fiança",
        "o tráfico é imprescritível, e o racismo não admite graça nem anistia",
        "a ação de grupos armados é inafiançável, mas prescreve no prazo comum",
        "racismo e grupos armados são imprescritíveis, e o tráfico não admite anistia",
        "só o racismo é inafiançável, e os outros dois admitem fiança de valor alto",
      ],
      correta: 3,
      explicacao:
        "O racismo (XLII) e a ação de grupos armados (XLIV) são inafiançáveis e imprescritíveis. A tortura, o tráfico, o terrorismo e os hediondos (XLIII) são inafiançáveis e insuscetíveis de graça ou anistia.",
      explicacaoErradas:
        "“Os três são imprescritíveis” inclui o tráfico. “O tráfico é imprescritível” troca as regras. “Prescreve no prazo comum” contraria o inciso XLIV. “Só o racismo é inafiançável” deixa de fora os outros dois.",
      pegadinha:
        "Todos os citados são inafiançáveis: o que os separa é a prescrição e a anistia.",
      conhecimento:
        "No HC 154.248, o STF tratou a injúria racial como espécie de racismo, e por isso imprescritível.",
    },
    {
      topico: "Direito penal na CF",
      subassunto: "Penas admitidas",
      dificuldade: 4,
      raciocinio:
        "Separe o que a CF proíbe do que ela lista como possível.",
      enunciado:
        "Um projeto de lei cria novas penas para crimes cometidos em rodovias. Em tempo de paz, a CF permite que a lei adote",
      alternativas: [
        "o banimento do condenado que for reincidente em crime de trânsito",
        "trabalhos forçados em obras federais, no caso de crimes graves",
        "a prisão perpétua, se o crime causar a morte de mais de uma pessoa",
        "a pena de morte para o crime doloso contra agentes da PRF em serviço",
        "a perda de bens, a multa e a suspensão ou interdição de direitos",
      ],
      correta: 4,
      explicacao:
        "O art. 5º, XLVI, lista entre as penas admitidas a perda de bens, a multa e a suspensão ou interdição de direitos. O inciso XLVII proíbe morte (salvo guerra declarada), perpétua, trabalhos forçados, banimento e penas cruéis.",
      explicacaoErradas:
        "“Banimento”, “trabalhos forçados” e “prisão perpétua” estão proibidos pelo inciso XLVII. “Pena de morte” só cabe em guerra declarada, e não em tempo de paz.",
      pegadinha:
        "Essa proibição é cláusula pétrea, e nem a emenda pode criar pena de prisão perpétua.",
      conhecimento:
        "A prestação social alternativa também está na lista do inciso XLVI.",
    },
    {
      topico: "Extradição",
      subassunto: "Nato e naturalizado",
      dificuldade: 5,
      raciocinio:
        "Tráfico é a exceção que dispensa a data.",
      enunciado:
        "Três pedidos de extradição chegam ao Brasil: um brasileiro nato acusado de homicídio no exterior, um naturalizado acusado de crime comum cometido depois da naturalização e um naturalizado com envolvimento comprovado no tráfico, posterior à naturalização. Segundo a CF, pode ser extraditado",
      alternativas: [
        "apenas o nato, pois a nacionalidade dele não impede a medida",
        "os dois naturalizados, pois a data do crime comum não tem importância",
        "somente o naturalizado com envolvimento comprovado no tráfico de drogas",
        "nenhum dos três, pois brasileiro nunca pode ser extraditado pelo país",
        "todos os três, pois a extradição só depende de tratado com o outro país",
      ],
      correta: 2,
      explicacao:
        "O art. 5º, LI, proíbe extraditar brasileiro, salvo o naturalizado, em caso de crime comum praticado antes da naturalização, ou de envolvimento comprovado no tráfico de drogas, na forma da lei. Para o tráfico, a data não importa.",
      explicacaoErradas:
        "“Apenas o nato” inverte a regra. “A data do crime comum não tem importância” ignora o “antes da naturalização”. “Nenhum dos três” esquece a exceção do naturalizado. “Todos os três” passa por cima do nato.",
      pegadinha:
        "O crime comum precisa ser anterior à naturalização. No tráfico, tanto faz.",
      conhecimento:
        "Nenhum estrangeiro será extraditado por crime político ou de opinião.",
    },
    {
      topico: "Direitos do preso",
      subassunto: "Algemas (SV 11)",
      dificuldade: 4,
      raciocinio:
        "Medida excepcional pede motivo e registro.",
      enunciado:
        "Uma equipe da PRF prende em flagrante um motorista calmo, sem sinal de reação. O policial o algema por rotina e não registra nenhum motivo. Segundo a SV 11, a conduta",
      alternativas: [
        "é regular, pois toda prisão em flagrante autoriza o uso da algema",
        "é irregular, pois a medida é excepcional e deve ser justificada por escrito",
        "é regular se o preso não reclamar no momento da prisão em flagrante",
        "é irregular, mas a falha nunca gera qualquer consequência no processo",
        "é irregular, pois a algema depende de ordem do juiz antes da prisão em flagrante",
      ],
      correta: 1,
      explicacao:
        "A SV 11 só permite algema em caso de resistência, fundado receio de fuga ou perigo à integridade física, com justificativa escrita. Se isso não ocorrer, há responsabilidade do agente, nulidade da prisão ou do ato e possível responsabilidade civil do Estado.",
      explicacaoErradas:
        "“Toda prisão em flagrante” transforma a exceção em regra. “Não reclamar” não supre a justificativa. “Nunca gera qualquer consequência” contraria a própria súmula. “Ordem do juiz” não é exigida.",
      pegadinha:
        "A justificativa precisa ser escrita, mesmo quando o motivo é real.",
      conhecimento:
        "A falha pode gerar responsabilidade disciplinar, civil e penal do agente ou da autoridade.",
    },
    {
      topico: "Direitos do preso",
      subassunto: "Comunicação da prisão",
      dificuldade: 4,
      raciocinio:
        "Imediatamente não é em 24 horas.",
      enunciado:
        "Depois de uma prisão em flagrante feita pela PRF, o preso pergunta quais são os direitos dele. Segundo a CF,",
      alternativas: [
        "a prisão e o local devem ser comunicados de imediato ao juiz e à família",
        "a comunicação ao juiz pode ocorrer em até 24 horas, e o silêncio pesa contra ele",
        "a família só é avisada da prisão se o preso tiver advogado constituído",
        "o preso não tem direito de saber quem o prendeu ou o interrogou",
        "o relaxamento da prisão ilegal depende de pedido da defesa e de fiança",
      ],
      correta: 0,
      explicacao:
        "O art. 5º, LXII, manda comunicar imediatamente a prisão e o local ao juiz competente e à família do preso ou à pessoa por ele indicada. Os incisos seguintes garantem o silêncio, a assistência e a identificação dos responsáveis.",
      explicacaoErradas:
        "“Em até 24 horas” confunde com a audiência de custódia, e “pesa contra ele” contraria o silêncio. “Se o preso tiver advogado” cria um requisito sem base. “Não tem direito de saber” contraria o inciso LXIV. “Depende de pedido” ignora que a prisão ilegal será imediatamente relaxada pelo juiz.",
      pegadinha:
        "As 24 horas são da audiência de custódia, não da comunicação da prisão.",
      conhecimento:
        "Segundo o STF, a audiência de custódia deve ocorrer em até 24 horas, em todas as modalidades de prisão.",
    },
    {
      topico: "Provas",
      subassunto: "Provas ilícitas e derivadas",
      dificuldade: 5,
      raciocinio:
        "Se o galho vem da árvore envenenada, ele cai também.",
      enunciado:
        "Sob tortura, um suspeito confessou e indicou onde estava a droga, que foi apreendida. Sobre a confissão e a droga apreendida, segundo a CF e o STF,",
      alternativas: [
        "a confissão é ilícita, mas a droga achada por causa dela é uma prova válida",
        "as duas valem, pois o interesse público afasta a regra das provas ilícitas",
        "as duas valem se o juiz reconhecer a gravidade do crime na sentença",
        "a droga é ilícita, mas a confissão vale por ter vindo do próprio acusado",
        "as duas são inadmissíveis, salvo se a droga vier de fonte independente",
      ],
      correta: 4,
      explicacao:
        "O art. 5º, LVI, veda as provas obtidas por meios ilícitos. Pela teoria dos frutos da árvore envenenada, a ilicitude contamina as provas derivadas, salvo fonte independente ou nexo causal inexistente.",
      explicacaoErradas:
        "“A droga achada por causa dela é válida” nega a contaminação. “Interesse público” e “gravidade do crime” não afastam o inciso. “A confissão vale” ignora que ela é a própria prova ilícita.",
      pegadinha:
        "A droga só se salva se foi achada por um caminho que não depende da tortura.",
      conhecimento:
        "O CPP, no art. 157, traz a mesma regra e define o que é fonte independente.",
    },
    {
      topico: "Presunção de inocência",
      subassunto: "Execução da pena",
      dificuldade: 5,
      raciocinio:
        "Sem trânsito em julgado não há culpa formada.",
      enunciado:
        "Um réu foi condenado em segunda instância e recorreu ao STJ. O Ministério Público pede o início do cumprimento da pena. Segundo o STF, esse réu",
      alternativas: [
        "pode começar a cumprir a pena, pois o recurso ao STJ não reexamina provas",
        "só é preso se já tiver sido condenado em primeira instância por crime grave",
        "não começa a cumprir pena antes do trânsito, e só cabe prisão cautelar",
        "pode ser preso, desde que o tribunal conceda efeito suspensivo ao recurso",
        "tem a execução decidida só pelo Ministério Público, no tribunal de origem",
      ],
      correta: 2,
      explicacao:
        "Nas ADCs 43, 44 e 54, o STF entendeu que o art. 5º, LVII, não admite a execução provisória da pena. Antes do trânsito em julgado, só cabe prisão cautelar, com os seus requisitos.",
      explicacaoErradas:
        "“Pode começar a cumprir a pena” é a tese superada. “Primeira instância” não basta. “Efeito suspensivo” teria o efeito contrário. “Só pelo Ministério Público” contraria a reserva de jurisdição.",
      pegadinha:
        "Prisão cautelar continua possível: ela não é cumprimento de pena.",
      conhecimento:
        "No Tema 1.068, o STF admitiu a execução imediata da condenação pelo júri, pela soberania dos veredictos.",
    },
    {
      topico: "Remédios constitucionais",
      subassunto: "Habeas corpus",
      dificuldade: 5,
      raciocinio:
        "Pergunte: a liberdade de locomoção está em jogo?",
      enunciado:
        "Três pedidos de habeas corpus chegaram ao tribunal: o primeiro discute o mérito de uma punição disciplinar militar, o segundo ataca processo por infração punida apenas com multa, e o terceiro foi impetrado por uma pessoa jurídica em favor de um motorista preso. Cabe a ação",
      alternativas: [
        "nos três casos",
        "só no primeiro",
        "só no segundo",
        "só no terceiro",
        "no primeiro e no terceiro",
      ],
      correta: 3,
      explicacao:
        "O art. 142, § 2º, afasta o HC quanto ao mérito das punições disciplinares militares. A Súmula 693 do STF afasta o HC se a multa é a única pena. A pessoa jurídica pode impetrar HC em favor de pessoa física.",
      explicacaoErradas:
        "“Nos três casos” e “só no primeiro” esquecem que o mérito da punição militar fica de fora. “Só no segundo” ignora que a multa não atinge a locomoção. “No primeiro e no terceiro” acerta só o terceiro.",
      pegadinha:
        "A legalidade da punição militar pode ser discutida em HC. O mérito, não.",
      conhecimento:
        "O HC tem legitimidade universal e dispensa advogado.",
    },
    {
      topico: "Remédios constitucionais",
      subassunto: "Mandado de segurança",
      dificuldade: 5,
      raciocinio:
        "Fato provado é o que importa. Tese difícil não atrapalha.",
      enunciado:
        "Uma empresa teve um pedido negado por ato ilegal de autoridade federal. Os fatos estão provados em documentos, mas a tese jurídica é controvertida. Ela impetrou mandado de segurança 90 dias depois da ciência do ato. A ação",
      alternativas: [
        "é incabível, pois a controvérsia sobre o direito afasta o direito líquido e certo",
        "é cabível, pois os fatos têm prova pré-constituída e o prazo não acabou",
        "é incabível, pois o prazo de 60 dias da ciência do ato já se esgotou",
        "é cabível só para pessoas físicas, pois empresa usa a ação comum",
        "é incabível, pois exige prova testemunhal e perícia antes da decisão",
      ],
      correta: 1,
      explicacao:
        "A Súmula 625 do STF diz que controvérsia sobre matéria de direito não impede o mandado de segurança. O que se exige é prova pré-constituída dos fatos. O prazo é de 120 dias da ciência do ato (Lei 12.016/2009, art. 23).",
      explicacaoErradas:
        "“Afasta o direito líquido e certo” confunde a dúvida de fato com a de direito. “60 dias” erra o prazo. “Só para pessoas físicas” limita sem base. “Prova testemunhal e perícia” não cabe nessa ação.",
      pegadinha:
        "Líquido e certo é o fato provado de saída, não a tese sem discussão.",
      conhecimento:
        "No mandado de segurança coletivo, a entidade atua como substituta processual, sem autorização dos membros.",
    },
    {
      topico: "Remédios constitucionais",
      subassunto: "Mandado de injunção",
      dificuldade: 5,
      raciocinio:
        "Primeiro o prazo, depois as condições. Em regra, vale só para as partes.",
      enunciado:
        "Uma norma da CF depende de lei que nunca veio, e isso impede um cidadão de exercer um direito. Ele impetra mandado de injunção. Segundo a Lei 13.300/2016, ao reconhecer a mora, o tribunal, em regra,",
      alternativas: [
        "dá prazo razoável para a norma, e a decisão vale entre as partes",
        "edita a lei que falta, com efeito para todos e de forma definitiva",
        "apenas avisa o Congresso da mora, sem nada mais a determinar",
        "condena o Presidente da República a indenizar quem foi prejudicado",
        "julga o pedido extinto, pois a lei é escolha exclusiva do legislador",
      ],
      correta: 0,
      explicacao:
        "A Lei 13.300/2016 manda fixar prazo razoável para a edição da norma e estabelecer as condições de exercício do direito se a mora continuar. Em regra, a decisão vale só entre as partes e até a chegada da norma.",
      explicacaoErradas:
        "“Edita a lei” confunde a decisão com a função do legislador. “Apenas avisa” ignora a evolução para a corrente concretista. “Indenizar” foge do objeto da ação. “Julga o pedido extinto” esvazia o remédio.",
      pegadinha:
        "A lei permite efeito ultra partes ou erga omnes, mas isso não é a regra.",
      conhecimento:
        "Se o impetrado já descumpriu o prazo em outro mandado de injunção, o tribunal pode dispensar novo prazo.",
    },
    {
      topico: "Remédios constitucionais",
      subassunto: "Gratuidade das ações",
      dificuldade: 4,
      raciocinio:
        "HC e HD são os dois gratuitos do inciso LXXVII.",
      enunciado:
        "Um estudante quer saber quais ações constitucionais dispensam o pagamento de custas. Segundo a CF,",
      alternativas: [
        "HC, HD, MI e MS são gratuitos, sem nenhuma exceção",
        "só o HC é gratuito, e a ação popular exige o pagamento de custas iniciais",
        "MI e MS são gratuitos, pois defendem direito líquido e certo de qualquer pessoa",
        "HC e HD são gratuitos, e o autor popular só paga se agir de má-fé",
        "a ação popular é paga em qualquer caso, mesmo quando o autor age de boa-fé",
      ],
      correta: 3,
      explicacao:
        "O art. 5º, LXXVII, torna gratuitas as ações de habeas corpus e habeas data. O inciso LXXIII isenta o autor da ação popular de custas e de ônus da sucumbência, salvo comprovada má-fé.",
      explicacaoErradas:
        "“HC, HD, MI e MS” inclui ações que não são gratuitas. “Só o HC” esquece o HD. “MI e MS são gratuitos” erra as duas. “Paga em qualquer caso” contraria o inciso LXXIII.",
      pegadinha:
        "A ação popular não é gratuita por natureza: é o autor de boa-fé que fica isento.",
      conhecimento:
        "O autor da ação popular é o cidadão, e a prova dessa condição é o título de eleitor.",
    },
  ],
};
