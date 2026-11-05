import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "etica-03",
  resumo: {
    ideia:
      "O Decreto 6.029/2007 organiza o Sistema de Gestão da Ética do Poder Executivo Federal e define como uma suposta falta ética é apurada.",
    itens: [
      {
        termo: "Quem integra o sistema",
        faz: "A Comissão de Ética Pública (CEP), as Comissões de Ética dos órgãos e as demais comissões equivalentes.",
      },
      {
        termo: "CEP",
        faz: "7 brasileiros, designados pelo Presidente da República, com mandato de 3 anos e uma única recondução.",
        pista: "Não recebem remuneração. É serviço público relevante.",
      },
      {
        termo: "Comissão do órgão",
        faz: "3 titulares e 3 suplentes do quadro permanente, designados pelo dirigente máximo, com mandato de 3 anos.",
      },
      {
        termo: "Princípios dos trabalhos",
        faz: "Proteger a honra do investigado, manter o denunciante em reserva se ele quiser, e agir com independência e imparcialidade.",
      },
      {
        termo: "Quem pode provocar",
        faz: "Qualquer cidadão, agente público, pessoa jurídica de direito privado, associação ou entidade de classe.",
      },
      {
        termo: "Prazos",
        faz: "10 dias para a manifestação por escrito e mais 10 dias se surgir prova nova.",
      },
      {
        termo: "Reserva",
        faz: "O procedimento fica como “reservado” até concluir, mas o investigado tem vista dos autos.",
      },
      {
        termo: "Lacunas",
        faz: "A comissão não pode deixar de decidir por omissão da norma: usa analogia e os princípios.",
      },
      {
        termo: "Decisões",
        faz: "Saem em ementa, sem os nomes dos investigados.",
      },
    ],
    cuidado:
      "Falta ética de membro de comissão de órgão é apurada pela CEP, e não pela própria comissão.",
  },
  questoes: [
    {
      topico: "Comissão de Ética Pública",
      subassunto: "Composição",
      dificuldade: 4,
      raciocinio: "Compare CEP e comissão do órgão, número por número.",
      enunciado:
        "Sobre a Comissão de Ética Pública (CEP), de acordo com o Decreto 6.029/2007, é correto dizer que tem",
      alternativas: [
        "3 titulares e 3 suplentes, escolhidos no quadro de cada órgão",
        "5 membros remunerados, nomeados pelo Ministro da Justiça",
        "7 membros com mandato de 2 anos, com reconduções ilimitadas",
        "7 membros com mandato de 3 anos, e uma única recondução",
        "9 membros com mandato de 4 anos, coincidentes com o do Presidente",
      ],
      correta: 3,
      explicacao:
        "A CEP tem 7 brasileiros, designados pelo Presidente da República, com mandatos de 3 anos, não coincidentes, permitida uma única recondução.",
      explicacaoErradas:
        "“3 titulares e 3 suplentes” é a comissão do órgão. “5 membros remunerados” erra o número, a designação e a remuneração. “mandato de 2 anos” e “9 membros” trocam os números da norma.",
      pegadinha: "Trocar os números da CEP pelos da comissão do órgão.",
      conhecimento: "O presidente da CEP tem voto de qualidade.",
    },
    {
      topico: "Comissão de Ética Pública",
      subassunto: "Competências",
      dificuldade: 5,
      raciocinio: "Separe quem interpreta o Decreto 1.171 de quem aplica a pena ao servidor.",
      enunciado: "Entre as competências da CEP previstas no Decreto 6.029/2007 está",
      alternativas: [
        "aplicar a demissão ao servidor que violar o Código de Ética",
        "dirimir dúvidas de interpretação sobre o Decreto 1.171/1994",
        "julgar recurso contra pena disciplinar aplicada na Lei 8.112",
        "atuar como instância consultiva dos Governadores de Estado",
        "designar os integrantes das comissões de ética dos órgãos",
      ],
      correta: 1,
      explicacao:
        "A CEP é instância consultiva do Presidente da República e dos Ministros, administra o Código de Conduta e dirime dúvidas sobre o Decreto 1.171/1994.",
      explicacaoErradas:
        "“aplicar a demissão” não é ato de comissão ética. “julgar recurso” mistura ética e disciplina. “Governadores de Estado” extrapola, pois a consulta é do Presidente e dos Ministros. “designar os integrantes” cabe ao dirigente máximo.",
      pegadinha: "Dar à CEP poderes disciplinares.",
      conhecimento: "A CEP também coordena e supervisiona o Sistema de Gestão da Ética.",
    },
    {
      topico: "Comissões dos órgãos",
      subassunto: "Infração de membro",
      dificuldade: 5,
      raciocinio: "Ninguém deve apurar a si mesmo.",
      enunciado:
        "Um membro da Comissão de Ética de um órgão federal é acusado de infração ética. A apuração caberá",
      alternativas: [
        "à própria comissão, com a saída do acusado da sessão",
        "ao dirigente máximo do órgão, em procedimento reservado",
        "à corregedoria do órgão, por se tratar de falta disciplinar",
        "à Comissão de Ética Pública, por previsão expressa",
        "ao Ministro de Estado, que indicará uma comissão especial",
      ],
      correta: 3,
      explicacao: "A infração ética de membro de comissão de órgão é apurada pela CEP.",
      explicacaoErradas:
        "“à própria comissão” parece razoável, mas contraria a regra expressa. “dirigente máximo” e “Ministro de Estado” não têm essa atribuição. “corregedoria” confunde ética e disciplina.",
      pegadinha: "Achar que basta afastar o acusado da sessão.",
      conhecimento: "A CEP mantém banco de dados com as sanções aplicadas.",
    },
    {
      topico: "Princípios dos trabalhos",
      subassunto: "Denunciante e investigado",
      dificuldade: 4,
      raciocinio: "A proteção do denunciante depende da vontade dele.",
      enunciado:
        "Um policial denuncia um colega à Comissão de Ética do órgão e pede que seu nome não apareça. Segundo o Decreto 6.029/2007, o pedido",
      alternativas: [
        "deve ser atendido, pois a identidade fica sob reserva se ele quiser",
        "não pode ser atendido, pois a denúncia precisa ser sempre pública e assinada",
        "só vale se o chefe imediato autorizar a reserva da identidade",
        "só vale se o investigado concordar expressamente com a reserva",
        "não importa, pois o denunciante se torna parte do processo ético",
      ],
      correta: 0,
      explicacao:
        "É princípio dos trabalhos a proteção à identidade do denunciante, mantida sob reserva “se este assim o desejar”.",
      explicacaoErradas:
        "“sempre pública” contraria esse princípio. “chefe imediato” e “investigado concordar” criam condições que não existem. “parte do processo” não afasta a reserva.",
      pegadinha: "Confundir a reserva da identidade com o direito do investigado de conhecer a acusação.",
      conhecimento: "A honra e a imagem do investigado também são protegidas.",
    },
    {
      topico: "Processo de apuração",
      subassunto: "Quem pode provocar",
      dificuldade: 4,
      raciocinio: "A lista é ampla, e a comissão também pode agir sozinha.",
      enunciado:
        "Uma associação de moradores e uma transportadora querem levar à Comissão de Ética uma suposta falta de um agente público federal. Pelo Decreto 6.029/2007,",
      alternativas: [
        "só agentes públicos podem provocar a atuação da comissão",
        "só pessoas físicas, identificadas, podem provocar a atuação da comissão",
        "a provocação depende de autorização do dirigente máximo",
        "somente o Ministério Público pode levar o fato à comissão",
        "as duas podem provocar a comissão, e ela também pode agir de ofício",
      ],
      correta: 4,
      explicacao:
        "Qualquer cidadão, agente público, pessoa jurídica de direito privado, associação ou entidade de classe pode provocar a atuação. O processo também pode ser instaurado de ofício.",
      explicacaoErradas:
        "“só agentes públicos” e “só pessoas físicas” restringem uma lista ampla. “autorização do dirigente” e “Ministério Público” criam filtros que não existem.",
      pegadinha: "Limitar a provocação a quem é do órgão.",
      conhecimento: "A denúncia precisa ser fundamentada.",
    },
    {
      topico: "Processo de apuração",
      subassunto: "Prazos e prova nova",
      dificuldade: 5,
      raciocinio: "Prova nova abre nova chance de defesa.",
      enunciado:
        "Depois da primeira manifestação do investigado, a comissão junta aos autos um novo documento. Nesse caso, o investigado",
      alternativas: [
        "será notificado para nova manifestação, em 10 dias",
        "será notificado para nova manifestação, em 5 dias",
        "só poderá tratar do documento em recurso à CEP",
        "só poderá se manifestar em audiência presencial",
        "não será notificado, pois já exerceu a sua defesa",
      ],
      correta: 0,
      explicacao:
        "Prova nova depois da manifestação gera nova notificação, com prazo de 10 dias, em respeito ao contraditório e à ampla defesa.",
      explicacaoErradas:
        "“em 5 dias” traz o prazo do Código de Conduta da Alta Administração. “recurso à CEP” e “audiência presencial” não são a regra. “já exerceu a sua defesa” fere o contraditório.",
      pegadinha: "Misturar os prazos dos dois diplomas.",
      conhecimento: "No Decreto 6.029/2007, os dois prazos são de 10 dias.",
    },
    {
      topico: "Processo de apuração",
      subassunto: "Reserva e vista dos autos",
      dificuldade: 5,
      raciocinio: "Reserva protege contra terceiros, não contra o próprio investigado.",
      enunciado:
        "Um policial soube por colegas que há procedimento ético contra ele, mas ainda não foi notificado. Ele pede vista e cópia dos autos. Pelo Decreto 6.029/2007,",
      alternativas: [
        "a vista só é possível depois da notificação formal do policial",
        "a vista é vedada, pois o procedimento tem a chancela de “reservado”",
        "ele tem direito a vista dos autos, inclusive a cópia e certidão",
        "ele tem direito só a vista, e a cópia depende do fim do processo",
        "ele só terá acesso por meio de advogado com procuração nos autos",
      ],
      correta: 2,
      explicacao:
        "O investigado pode saber o que lhe é imputado e ter vista dos autos, “mesmo que ainda não tenha sido notificado”. O direito inclui cópia e certidão.",
      explicacaoErradas:
        "“depois da notificação” contraria a regra. “vedada” aplica a reserva contra o próprio investigado. “só a vista” esquece a cópia e a certidão. “por meio de advogado” cria exigência inexistente.",
      pegadinha: "Achar que “reservado” vale também para o investigado.",
      conhecimento: "Concluída a investigação, os autos deixam de ser reservados.",
    },
    {
      topico: "Processo de apuração",
      subassunto: "Omissão, ilícitos e sigilo",
      dificuldade: 5,
      raciocinio: "A comissão decide o caso ético e encaminha o resto.",
      enunciado:
        "Ao analisar um caso, a Comissão de Ética percebe que o Código é omisso em um ponto e que o fato pode ser também ato de improbidade. Segundo o Decreto 6.029/2007, ela deve",
      alternativas: [
        "deixar de decidir e enviar todos os autos ao Ministério Público",
        "deixar de decidir e pedir ao Presidente uma norma para o caso",
        "decidir apenas o ponto expresso no Código e arquivar a suspeita de improbidade",
        "decidir por analogia e princípios e enviar cópia dos autos às autoridades",
        "aplicar diretamente a pena da Lei de Improbidade ao investigado",
      ],
      correta: 3,
      explicacao:
        "A comissão não pode se escusar de decidir por omissão: usa analogia e os princípios da Administração. Diante de possível ilícito, envia cópia às autoridades competentes, sem prejuízo das suas medidas.",
      explicacaoErradas:
        "“deixar de decidir” contraria a vedação nas duas versões. “arquivar a suspeita” ignora o dever de encaminhar. “pena da Lei de Improbidade” não cabe à comissão.",
      pegadinha: "Achar que a comissão para quando há ilícito de outra esfera.",
      conhecimento: "As autoridades não podem alegar sigilo para negar informação pedida pelas comissões.",
    },
  ],
};
