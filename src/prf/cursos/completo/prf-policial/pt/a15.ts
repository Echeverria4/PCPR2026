import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-15",
  resumo: {
    ideia:
      "Redação oficial é o jeito como o poder público escreve atos e comunicações. A prova cobra o Manual de Redação da Presidência da República (3ª edição, 2018) quase ao pé da letra: atributos do texto, pronomes de tratamento, padrão ofício e fechos. Para agentes públicos federais, como os da PRF, vale também o Decreto 9.758/2019, que adota só “senhor”.",
    itens: [
      {
        termo: "Atributos",
        faz: "Clareza e precisão, objetividade, concisão, coesão e coerência, impessoalidade, formalidade e padronização, sempre na norma padrão.",
        pista: "Nenhum atributo justifica perder a clareza.",
      },
      {
        termo: "Impessoalidade",
        faz: "Quem fala é o serviço público, não a pessoa que assina, e o assunto é de interesse público. Não obriga a escrever tudo na 3ª pessoa.",
        pista: "Palavra afetiva, como “encarecidamente”, fere a impessoalidade.",
      },
      {
        termo: "Concisão",
        faz: "O máximo de informação com o mínimo de palavras, sem cortar o que é essencial.",
      },
      {
        termo: "Concordância do tratamento",
        faz: "O verbo e o possessivo vão para a 3ª pessoa: “Vossa Excelência está”, “seu”, nunca “vosso”. O adjetivo concorda com o sexo da pessoa.",
        pista: "“Vossa” quando se fala com a pessoa; “Sua” quando se fala dela.",
      },
      {
        termo: "Vocativo",
        faz: "“Excelentíssimo Senhor” fica só para chefes de Poder. As demais autoridades recebem “Senhor” + cargo: “Senhor Senador,”.",
      },
      {
        termo: "Endereçamento",
        faz: "Para quem recebe Vossa Excelência: “A Sua Excelência o Senhor”. Para Vossa Senhoria: “Ao Senhor”. Nunca “A Sua Senhoria o Senhor”.",
      },
      {
        termo: "Abolidos no Manual",
        faz: "Digníssimo (DD) e Ilustríssimo (Ilmo.). “Doutor” é título acadêmico, não forma de tratamento.",
      },
      {
        termo: "Decreto 9.758/2019",
        faz: "Com agentes públicos federais, o único tratamento é “senhor”, em qualquer cargo ou ocasião. Proíbe Vossa Excelência, Excelentíssimo, Vossa Senhoria, Vossa Magnificência, doutor, ilustre, digno e respeitável.",
        pista: "Não se aplica a autoridade estrangeira nem a agente de outro Poder ou ente que exija tratamento previsto em norma.",
      },
      {
        termo: "Erro no tratamento",
        faz: "Não permite negar o ato nem repreender quem escreveu. Quem exige tratamento especial deve tratar o outro do mesmo modo.",
      },
      {
        termo: "Fechos",
        faz: "“Respeitosamente” para autoridade de hierarquia superior, inclusive o Presidente da República. “Atenciosamente” para mesma hierarquia, inferior e demais casos.",
        pista: "Autoridade estrangeira segue rito próprio.",
      },
      {
        termo: "Padrão ofício",
        faz: "Desde a 3ª edição, aviso e memorando deixaram de existir: tudo é ofício, inclusive entre setores do mesmo órgão.",
      },
      {
        termo: "Partes do ofício",
        faz: "Cabeçalho (só na 1ª página), identificação (OFÍCIO Nº 12/2026/SIGLA), local e data, endereçamento, assunto, vocativo, texto, fecho e identificação do signatário.",
      },
      {
        termo: "Local e data",
        faz: "Cidade sem a sigla do estado, vírgula, dia sem zero à esquerda (1º no primeiro dia), mês com inicial minúscula e ponto-final: “Brasília, 5 de março de 2026.”",
      },
      {
        termo: "Formatação",
        faz: "Papel A4, fonte Calibri ou Carlito, margem esquerda de no mínimo 3 cm, direita de 1,5 cm, superior e inferior de 2 cm. Página numerada a partir da 2ª.",
        pista: "Parágrafo numerado só com 3 ou mais, desde o primeiro; vocativo e fecho não se numeram.",
      },
      {
        termo: "Outros expedientes",
        faz: "Exposição de motivos: Ministro ao Presidente (ou Vice). Mensagem: chefe do Executivo ao Legislativo. E-mail só vale como documento original com certificação digital.",
        pista: "Exposição de motivos com mais de um Ministério é interministerial: todos assinam.",
      },
    ],
    cuidado:
      "A questão diz qual regra usar. “Segundo o Manual”: vale a lista de Vossa Excelência e Vossa Senhoria. Comunicação com agente público federal “segundo o Decreto 9.758/2019”: só “senhor”.",
  },
  questoes: [
    {
      topico: "Atributos da redação oficial",
      subassunto: "Impessoalidade e tom afetivo",
      dificuldade: 4,
      raciocinio: "Separar o que o Manual proíbe (o tom pessoal) do que ele permite (a primeira pessoa).",
      enunciado:
        "Um chefe de seção da PRF redige um ofício a outro órgão pedindo dados de acidentes. No rascunho, escreveu: “Venho, encarecidamente, rogar a gentileza de enviarem os dados, pois deles dependo para concluir o meu relatório.” Segundo o Manual de Redação da Presidência da República, a revisão mais adequada aponta que o trecho",
      alternativas: [
        "fere a concisão, mas não a impessoalidade, porque está todo na primeira pessoa.",
        "está correto, porque a cortesia reforça a formalidade exigida nos expedientes oficiais.",
        "fere a impessoalidade: o tom afetivo e o interesse pessoal tomam o lugar do órgão.",
        "fere a impessoalidade só pelo verbo na primeira pessoa, que o Manual proíbe no ofício.",
        "fere a padronização, porque pedido de dados se faz por exposição de motivos.",
      ],
      correta: 2,
      explicacao:
        "“Encarecidamente” e “rogar a gentileza” são afetivos, e “deles dependo para concluir o meu relatório” põe o interesse de quem assina no lugar do interesse público. Quem comunica é o serviço público.",
      explicacaoErradas:
        "A primeira pessoa não é proibida: impessoalidade não obriga a 3ª pessoa. Cortesia exagerada não é formalidade. Exposição de motivos é do Ministro ao Presidente, não serve para pedir dados.",
      pegadinha:
        "Achar que o problema é o “venho”. O Manual aceita a primeira pessoa; o que ele condena é o tom pessoal e afetivo.",
      conhecimento:
        "Impessoalidade: ausência de impressões individuais de quem comunica, destinatário visto como público e assunto de interesse público.",
    },
    {
      topico: "Pronomes de tratamento",
      subassunto: "Decreto 9.758/2019 com agente federal",
      dificuldade: 4,
      raciocinio: "Ver quem recebe: agente público federal atrai o Decreto 9.758/2019.",
      enunciado:
        "Um inspetor da PRF prepara um ofício ao diretor-geral de uma autarquia federal. Pelo Decreto 9.758/2019, o tratamento correto no corpo do texto é",
      alternativas: [
        "“senhor”, seja qual for o nível do cargo, sem “Vossa Senhoria” nem “Vossa Excelência”.",
        "“Vossa Excelência”, porque o diretor-geral ocupa o cargo mais alto da autarquia federal.",
        "“Vossa Senhoria”, porque o diretor-geral não está na lista de autoridades do Manual.",
        "“senhor”, acompanhado do título “doutor” quando o diretor-geral tiver doutorado.",
        "“Ilustríssimo Senhor”, porque o superlativo só foi abolido para os particulares.",
      ],
      correta: 0,
      explicacao:
        "O decreto diz que, com agentes públicos federais, o único pronome de tratamento é “senhor”, independentemente do nível hierárquico, da natureza do cargo ou da ocasião.",
      explicacaoErradas:
        "Vossa Excelência e Vossa Senhoria estão entre as formas vedadas. “Doutor” também é vedado e, além disso, é título acadêmico. “Ilustre” e “ilustríssimo” são vedados para qualquer agente federal.",
      pegadinha:
        "Responder pela lista do Manual de 2018. Na comunicação com agente federal, o decreto de 2019 manda usar só “senhor”.",
      conhecimento:
        "Formas vedadas pelo decreto: Vossa Excelência ou Excelentíssimo, Vossa Senhoria, Vossa Magnificência, doutor, ilustre ou ilustríssimo, digno ou digníssimo e respeitável.",
    },
    {
      topico: "Pronomes de tratamento",
      subassunto: "Erro na forma de tratamento",
      dificuldade: 5,
      raciocinio: "Lembrar o que o decreto proíbe ao órgão quando o tratamento vem errado.",
      enunciado:
        "Um cidadão protocola na PRF um requerimento que trata o superintendente regional por “Vossa Excelência”, forma vedada pelo Decreto 9.758/2019. Segundo o decreto, a conduta correta do órgão é",
      alternativas: [
        "devolver o requerimento, pois a forma vedada impede o andamento do pedido no órgão.",
        "registrar no processo uma advertência ao cidadão e só então analisar o pedido feito.",
        "exigir a correção do tratamento antes do protocolo, como determina o Manual de 2018.",
        "arquivar o requerimento, porque o decreto vale para todas as comunicações recebidas.",
        "analisar o pedido normalmente, sem negar o ato nem repreender quem errou a forma.",
      ],
      correta: 4,
      explicacao:
        "O decreto veda negar a realização de ato administrativo ou admoestar o interlocutor nos autos por erro na forma de tratamento. O pedido segue o curso normal.",
      explicacaoErradas:
        "Devolver, exigir correção ou arquivar equivale a negar o ato. A advertência no processo é a admoestação que o decreto proíbe. O Manual não manda corrigir o tratamento antes do protocolo.",
      pegadinha:
        "Pensar que forma vedada torna o pedido inválido. O decreto protege quem erra o tratamento.",
      conhecimento:
        "Outra regra do mesmo artigo: o agente federal que exige tratamento especial, com base em norma do cargo ou carreira, deve tratar o interlocutor do mesmo modo.",
    },
    {
      topico: "Fechos e vocativos",
      subassunto: "Endereçamento e vocativo para senador",
      dificuldade: 5,
      raciocinio: "Excelentíssimo só para chefe de Poder; endereçamento de Vossa Excelência com “A Sua Excelência”.",
      enunciado:
        "Segundo o Manual de Redação da Presidência da República, em um ofício da PRF a um senador, o endereçamento e o vocativo adequados são, nessa ordem,",
      alternativas: [
        "“Ao Excelentíssimo Senhor” e “Excelentíssimo Senhor Senador,”.",
        "“A Sua Excelência o Senhor” e “Senhor Senador,”.",
        "“A Vossa Excelência o Senhor” e “Excelentíssimo Senhor Senador,”.",
        "“Ao Senhor” e “Prezado Senhor Senador,”.",
        "“A Sua Excelência o Senhor” e “Excelentíssimo Senhor Senador,”.",
      ],
      correta: 1,
      explicacao:
        "Senador recebe Vossa Excelência, então o endereçamento é “A Sua Excelência o Senhor”. Como não é chefe de Poder, o vocativo é “Senhor” + cargo: “Senhor Senador,”.",
      explicacaoErradas:
        "“Excelentíssimo Senhor” é só para chefes de Poder, como o Presidente do Congresso. No endereçamento se fala da pessoa, por isso “Sua”, e não “Vossa”. “Ao Senhor” é o endereçamento de Vossa Senhoria.",
      pegadinha:
        "A última opção acerta o endereçamento e erra o vocativo: senador não é chefe de Poder.",
      conhecimento:
        "Vocativo é seguido de vírgula. O endereçamento traz vocativo, nome, cargo e endereço, alinhados à esquerda.",
    },
    {
      topico: "Fechos e vocativos",
      subassunto: "Fecho conforme a hierarquia",
      dificuldade: 4,
      raciocinio: "Para cada destinatário, perguntar se está acima de quem assina.",
      enunciado:
        "O superintendente da PRF em um estado assina três ofícios: ao diretor-geral da PRF, a um superintendente de outro estado e a uma concessionária de rodovia. Segundo o Manual, os fechos são, na ordem,",
      alternativas: [
        "Respeitosamente, Respeitosamente e Atenciosamente.",
        "Atenciosamente, Atenciosamente e Cordialmente.",
        "Respeitosamente, Cordialmente e Atenciosamente.",
        "Respeitosamente, Atenciosamente e Atenciosamente.",
        "Atenciosamente, Respeitosamente e Respeitosamente.",
      ],
      correta: 3,
      explicacao:
        "O diretor-geral está acima do superintendente: Respeitosamente. O colega de outro estado tem a mesma hierarquia e a concessionária entra nos demais casos: Atenciosamente.",
      explicacaoErradas:
        "“Cordialmente” não é fecho do Manual. Mesma hierarquia não leva Respeitosamente. Para o diretor-geral, Atenciosamente é fecho de quem está abaixo ou no mesmo nível.",
      pegadinha:
        "Usar Respeitosamente para o colega por ser autoridade. O fecho depende da hierarquia em relação a quem assina, não do cargo em si.",
      conhecimento:
        "O Manual prevê só dois fechos. Comunicações com autoridades estrangeiras seguem rito e tradição próprios.",
    },
    {
      topico: "Padrão ofício",
      subassunto: "Local e data",
      dificuldade: 4,
      raciocinio: "Conferir cinco pontos: cidade sem sigla, vírgula, ordinal no dia 1º, mês minúsculo e ponto-final.",
      enunciado:
        "Um ofício da PRF é expedido em Brasília no primeiro dia de abril de 2026. Segundo o Manual, a linha de local e data deve ser:",
      alternativas: [
        "Brasília, 1º de abril de 2026.",
        "Brasília-DF, 1º de abril de 2026.",
        "Brasília, 01 de abril de 2026.",
        "Brasília, 1 de Abril de 2026.",
        "Brasília, 1º de abril de 2026",
      ],
      correta: 0,
      explicacao:
        "Cidade sem a sigla do estado, vírgula, dia 1º em numeral ordinal, mês com inicial minúscula e ponto-final depois da data.",
      explicacaoErradas:
        "O Manual não usa a sigla da unidade da federação depois da cidade, não põe zero à esquerda no dia e não escreve o mês com maiúscula. Sem o ponto-final, a data fica fora do padrão.",
      pegadinha:
        "Olhar só o dia e o mês. A última linha parece certa, mas falta o ponto-final que o Manual exige.",
      conhecimento:
        "Do dia 2 em diante, o dia vai em cardinal e sem zero: “Brasília, 5 de março de 2026.”",
    },
    {
      topico: "Padrão ofício",
      subassunto: "Ofício interno, parágrafos e páginas",
      dificuldade: 5,
      raciocinio: "Juntar três regras: o nome do expediente, a numeração dos parágrafos e a das páginas.",
      enunciado:
        "Uma seção da PRF envia a outra seção do mesmo órgão um comunicado de quatro parágrafos, que ocupa duas páginas. Segundo a 3ª edição do Manual, é correto afirmar que",
      alternativas: [
        "o documento é um memorando, pois é a comunicação entre setores do mesmo órgão.",
        "os parágrafos são numerados a partir do segundo, e o vocativo e o fecho ficam sem número.",
        "é um ofício, com os quatro parágrafos numerados, mas sem número no vocativo e no fecho.",
        "o cabeçalho com o brasão deve se repetir no alto das duas páginas do documento.",
        "a numeração das páginas é obrigatória desde a primeira página do documento.",
      ],
      correta: 2,
      explicacao:
        "Desde a 3ª edição, o memorando virou ofício. Com três ou mais parágrafos, a numeração começa no primeiro, e o vocativo e o fecho não são numerados.",
      explicacaoErradas:
        "Memorando e aviso deixaram de existir. A numeração começa no primeiro parágrafo. O cabeçalho aparece só na primeira página. A página só é numerada a partir da segunda.",
      pegadinha:
        "Responder pela 2ª edição do Manual (2002), que ainda tinha memorando para comunicação interna.",
      conhecimento:
        "Antes: aviso (entre Ministros), ofício (demais autoridades) e memorando (setores do mesmo órgão). Hoje, os três são ofício.",
    },
    {
      topico: "Expedientes oficiais",
      subassunto: "Exposição de motivos, mensagem e e-mail",
      dificuldade: 5,
      raciocinio: "Para cada expediente, lembrar quem envia, para quem e o que dá valor ao e-mail.",
      enunciado: "Sobre os expedientes descritos no Manual de Redação da Presidência da República, assinale a afirmação correta.",
      alternativas: [
        "A mensagem é o expediente pelo qual um Ministro de Estado se dirige ao Presidente da República.",
        "A exposição de motivos que envolve mais de um Ministério é assinada só pelo Ministro que a propôs.",
        "O e-mail tem valor de documento original sempre que é enviado de conta institucional do órgão.",
        "O ofício passou a ser usado só entre órgãos distintos, e o memorando segue entre unidades internas.",
        "O e-mail só vale como documento original se houver certificação digital que ateste o remetente.",
      ],
      correta: 4,
      explicacao:
        "Para o e-mail ter valor documental, isto é, ser aceito como documento original, precisa de certificação digital que ateste a identidade do remetente, nos termos da MP 2.200-2/2001.",
      explicacaoErradas:
        "Do Ministro ao Presidente é a exposição de motivos; a mensagem vai do chefe do Executivo ao Legislativo. A exposição interministerial é assinada por todos os Ministros envolvidos. Conta institucional não basta. O memorando deixou de existir.",
      pegadinha:
        "Confundir mensagem com exposição de motivos. Exposição: Ministro → Presidente. Mensagem: Presidente → Congresso.",
      conhecimento:
        "A exposição de motivos serve para propor medida, submeter projeto de ato normativo ou informar o Presidente sobre um assunto.",
    },
    {
      topico: "Pronomes de tratamento",
      subassunto: "Concordância com Vossa Excelência",
      dificuldade: 4,
      raciocinio: "Verbo e possessivo na 3ª pessoa; adjetivo no gênero da pessoa.",
      enunciado:
        "Em um ofício da PRF a uma senadora, redigido conforme o Manual de Redação da Presidência da República, a frase correta é:",
      alternativas: [
        "Vossa Excelência estais convidada para a cerimônia e podeis levar a vossa equipe.",
        "Vossa Excelência está convidada para a cerimônia e pode levar a sua equipe técnica.",
        "Vossa Excelência está convidado para a cerimônia e pode levar a vossa equipe técnica.",
        "Sua Excelência está convidada para a cerimônia e pode levar a vossa equipe técnica.",
        "Vossa Excelência estás convidada para a cerimônia e podes levar a tua equipe técnica.",
      ],
      correta: 1,
      explicacao:
        "O pronome de tratamento pede verbo e possessivo na 3ª pessoa (“está”, “pode”, “sua”). O adjetivo concorda com o sexo da destinatária: “convidada”.",
      explicacaoErradas:
        "“Estais”, “podeis” e “vossa” são da 2ª pessoa do plural, e “estás”, “podes” e “tua”, da 2ª do singular. “Convidado” ignora que é uma senadora. Com a pessoa a quem se escreve, usa-se “Vossa”, não “Sua”.",
      pegadinha:
        "Por começar com “Vossa”, achar que o possessivo é “vossa”. Na concordância, vale a 3ª pessoa, como em “você”.",
      conhecimento:
        "“Sua Excelência” serve para falar da autoridade, por exemplo no endereçamento: “A Sua Excelência a Senhora”.",
    },
  ],
};
