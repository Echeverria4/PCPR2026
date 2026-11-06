import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-05",
  resumo: {
    ideia:
      "Direitos sociais pedem uma ação do Estado. Os arts. 6º a 11 trazem a lista geral, os direitos do trabalhador, os sindicatos e a greve.",
    itens: [
      {
        termo: "Art. 6º",
        faz: "Lista exemplificativa: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência e outros.",
        pista: "Quem está em vulnerabilidade social tem direito a renda básica familiar.",
      },
      {
        termo: "Reserva do possível",
        faz: "O Estado tem limite de dinheiro, mas precisa provar a falta de recursos. Ela não afasta o mínimo existencial.",
      },
      {
        termo: "Jornada (EC 141/2026)",
        faz: "8 horas por dia e 40 por semana, com redução em etapas: 42 horas depois de 2 meses, e 40 um ano após.",
        pista: "O PDF do curso ainda traz 44 horas: vale a CF atual.",
      },
      {
        termo: "Repouso (EC 141/2026)",
        faz: "2 dias remunerados por semana, um deles de preferência no domingo. Vale 2 meses depois da publicação.",
      },
      {
        termo: "Salário",
        faz: "Mínimo fixado em lei, único no país e sem vinculação. Só acordo ou convenção coletiva reduz o salário.",
      },
      {
        termo: "Prescrição",
        faz: "5 anos para cobrar créditos, até o limite de 2 anos depois do fim do contrato.",
      },
      {
        termo: "Menores",
        faz: "Menor de 18: nada noturno, perigoso ou insalubre. Menor de 16: nenhum trabalho, salvo aprendiz a partir dos 14.",
      },
      {
        termo: "Domésticos",
        faz: "Têm a maior parte dos direitos. Ficam fora, por exemplo, o piso, a participação nos lucros e os adicionais do inciso XXIII.",
      },
      {
        termo: "Sindicato",
        faz: "Sem autorização do Estado, mas com registro. Um por categoria na mesma base, que não pode ser menor que um Município.",
        pista: "Contribuição confederativa só para filiados (SV 40).",
      },
      {
        termo: "Greve",
        faz: "Os trabalhadores decidem quando fazer. A lei define as atividades essenciais, e quem abusa responde.",
      },
    ],
    cuidado:
      "Sindicato faz registro, não pede autorização. Base mínima é a área de um Município.",
  },
  questoes: [
    {
      topico: "Direitos sociais",
      subassunto: "Reserva do possível",
      dificuldade: 5,
      raciocinio:
        "Limite de dinheiro precisa de prova e não atinge o mínimo existencial.",
      enunciado:
        "Um município se recusa a matricular crianças em creche e diz apenas que falta dinheiro, sem apresentar nenhum dado. Segundo o STF, esse argumento",
      alternativas: [
        "impede o Judiciário de agir, pois a escolha é só da Administração",
        "não basta, pois a falta de recursos precisa ser provada e há mínimo existencial",
        "vale sempre, pois os direitos sociais são apenas programas sem força jurídica",
        "só pode ser analisado depois de consulta pública feita aos moradores",
        "basta para encerrar a ação, se a lei orçamentária não citar a creche",
      ],
      correta: 1,
      explicacao:
        "A reserva do possível não pode ser usada para fugir do dever constitucional, salvo justo motivo objetivamente demonstrado. Ela também não afasta o mínimo existencial, como a educação infantil.",
      explicacaoErradas:
        "“Impede o Judiciário” ignora que ele pode agir diante de omissão grave. “Sem força jurídica” nega o valor dos direitos sociais. “Consulta pública” não tem base. “Basta para encerrar” dispensa a prova objetiva.",
      pegadinha:
        "A reserva do possível existe, mas quem a invoca precisa demonstrá-la.",
      conhecimento:
        "A vedação ao retrocesso impede que o Estado desfaça sem compensação um direito social já concretizado.",
    },
    {
      topico: "Direitos sociais",
      subassunto: "Renda básica familiar",
      dificuldade: 4,
      raciocinio:
        "Veja quem é o titular e como o programa é descrito na CF.",
      enunciado:
        "Sobre a renda básica familiar, incluída no art. 6º pela EC 114/2021, é certo que",
      alternativas: [
        "vale para qualquer residente no país, em programa temporário definido por decreto",
        "é paga apenas a quem contribuiu antes para a previdência social",
        "tem regras fixadas na própria CF, sem necessidade de lei nova sobre o tema",
        "é um direito só de crianças e idosos, e não alcança outros grupos",
        "é direito do brasileiro vulnerável, em programa permanente, nos termos da lei",
      ],
      correta: 4,
      explicacao:
        "O parágrafo único do art. 6º garante a todo brasileiro em situação de vulnerabilidade social uma renda básica familiar, em programa permanente de transferência de renda. Lei define as normas e os requisitos, observada a legislação fiscal e orçamentária.",
      explicacaoErradas:
        "“Programa temporário” e “decreto” contrariam “permanente” e “lei”. “Quem contribuiu” confunde com previdência. “Regras fixadas na própria CF” ignora a remissão à lei. “Só de crianças e idosos” limita o texto.",
      pegadinha:
        "A CF fala em “brasileiro”, e não em todo residente.",
      conhecimento:
        "O rol do art. 6º é exemplificativo: outros direitos sociais estão espalhados pela CF.",
    },
    {
      topico: "Direitos dos trabalhadores",
      subassunto: "Jornada e repouso (EC 141/2026)",
      dificuldade: 5,
      raciocinio:
        "Lembre as duas etapas: 42 horas e depois 40.",
      enunciado:
        "A EC 141/2026 mudou o art. 7º da CF. Sobre a nova duração do trabalho e o repouso, é correto afirmar que",
      alternativas: [
        "o limite semanal cai em etapas até 40 horas, sem redução salarial",
        "o limite segue em 44 horas, e só o repouso semanal foi alterado pelo texto",
        "o salário pode cair na mesma proporção da redução da jornada de trabalho",
        "o repouso passou a ser de 3 dias, todos de preferência no fim de semana",
        "o limite diário passou a ser de 6 horas para todos os trabalhadores",
      ],
      correta: 0,
      explicacao:
        "A EC 141/2026 fixou 8 horas diárias e 40 semanais e previu 2 dias de repouso semanal remunerado. A redução é progressiva: 42 horas após 2 meses da publicação, e 40 horas 1 ano depois, sem qualquer redução salarial.",
      explicacaoErradas:
        "“Segue em 44 horas” é o texto antigo. “O salário pode cair” contraria o art. 2º da emenda. “3 dias” erra o número. “6 horas para todos” confunde com os turnos ininterruptos de revezamento.",
      pegadinha:
        "Materiais antigos ainda trazem 44 horas semanais.",
      conhecimento:
        "A mudança no repouso entra em vigor 2 meses depois da publicação da emenda, e o resto dela na data da publicação.",
    },
    {
      topico: "Direitos dos trabalhadores",
      subassunto: "Salário mínimo",
      dificuldade: 4,
      raciocinio:
        "A SV 6 é a exceção dos conscritos.",
      enunciado:
        "Um rapaz prestando o serviço militar inicial recebe menos do que um salário mínimo e diz que isso viola a CF. Segundo o STF,",
      alternativas: [
        "a remuneração é inconstitucional, pois o mínimo vale para qualquer pessoa",
        "o caso depende de um acordo coletivo firmado com as Forças Armadas",
        "a remuneração é válida, pois a SV 6 admite esse valor para tais praças",
        "ele tem direito ao mínimo regional fixado pelo estado onde presta serviço",
        "a remuneração só é válida em tempo de guerra declarada pelo Presidente",
      ],
      correta: 2,
      explicacao:
        "A SV 6 diz que não viola a CF fixar remuneração inferior ao salário mínimo para as praças prestadoras de serviço militar inicial.",
      explicacaoErradas:
        "“Qualquer pessoa” ignora a súmula. “Acordo coletivo” não existe nesse regime. “Mínimo regional” foge do caso, pois o mínimo da CF é nacionalmente unificado. “Guerra declarada” não é condição.",
      pegadinha:
        "A exceção cobre o serviço militar inicial, e não qualquer militar.",
      conhecimento:
        "O salário mínimo é fixado em lei, e a CF proíbe a sua vinculação para qualquer fim.",
    },
    {
      topico: "Direitos dos trabalhadores",
      subassunto: "Prescrição dos créditos",
      dificuldade: 5,
      raciocinio:
        "Dois prazos: 2 para entrar com a ação e 5 para trás.",
      enunciado:
        "Um empregado foi dispensado em março de 2026 e ajuizou a ação em março de 2027 para cobrar horas extras. Segundo a CF, ele",
      alternativas: [
        "perdeu o direito, pois tinha só 1 ano para ajuizar a ação",
        "pode cobrar os 5 anos anteriores à ação, pois está no limite de 2 anos",
        "pode cobrar todo o período do contrato, sem nenhum limite de tempo",
        "pode cobrar só os 2 anos anteriores à ação, por ser trabalhador urbano",
        "pode cobrar 10 anos, pois a regra civil é a que se aplica ao salário",
      ],
      correta: 1,
      explicacao:
        "O art. 7º, XXIX, fixa prazo prescricional de 5 anos para urbanos e rurais, até o limite de 2 anos após a extinção do contrato.",
      explicacaoErradas:
        "“Só 1 ano” erra o prazo. “Sem nenhum limite” ignora os 5 anos. “Só os 2 anos anteriores” inverte os prazos. “10 anos” usa uma regra de fora do inciso.",
      pegadinha:
        "A regra é a mesma para o urbano e o rural.",
      conhecimento:
        "O inciso XXIX não está na lista do § 1º do art. 7º, que trata dos domésticos.",
    },
    {
      topico: "Direitos dos trabalhadores",
      subassunto: "Trabalho do menor",
      dificuldade: 4,
      raciocinio:
        "Monte a escada: 14, 16 e 18.",
      enunciado:
        "Uma empresa de transporte à beira da rodovia quer contratar um adolescente de 15 anos e outro de 17. Segundo a CF,",
      alternativas: [
        "o de 15 pode ter trabalho comum, e o de 17 pode ter trabalho noturno",
        "os dois só podem trabalhar como aprendizes, por serem menores de 18",
        "nenhum dos dois pode trabalhar, pois a idade mínima é de 18 anos",
        "o de 15 só como aprendiz, e o de 17 sem noturno, perigoso ou insalubre",
        "o de 17 pode ter trabalho insalubre, se a família autorizar por escrito",
      ],
      correta: 3,
      explicacao:
        "O art. 7º, XXXIII, proíbe trabalho noturno, perigoso ou insalubre a menores de 18, e qualquer trabalho a menores de 16, salvo como aprendiz, a partir de 14 anos.",
      explicacaoErradas:
        "“Trabalho comum” aos 15 anos contraria o inciso. “Os dois só como aprendizes” esquece que o de 17 pode ter trabalho comum. “Idade mínima de 18” erra a regra. “Se a família autorizar” não supre a proibição.",
      pegadinha:
        "Dos 16 aos 18 o trabalho é permitido, com limites.",
      conhecimento:
        "Esse inciso também vale para o trabalhador doméstico, pois está na lista do § 1º do art. 7º.",
    },
    {
      topico: "Direitos dos trabalhadores",
      subassunto: "Domésticos",
      dificuldade: 5,
      raciocinio:
        "Pense no que não combina com o trabalho em casa.",
      enunciado:
        "Sobre os direitos dos trabalhadores domésticos no § 1º do art. 7º da CF, é certo que",
      alternativas: [
        "têm direito ao salário mínimo, mas não têm direito ao piso do inciso V",
        "não têm direito ao décimo terceiro nem às férias remuneradas com um terço a mais",
        "têm todos os direitos do art. 7º, sem exceção, desde a EC 72/2013",
        "o FGTS é assegurado de forma imediata, sem depender de nenhuma condição legal",
        "a participação nos lucros é assegurada a eles, nos termos da lei",
      ],
      correta: 0,
      explicacao:
        "O § 1º lista o inciso IV (salário mínimo), mas não lista o inciso V (piso salarial) nem o XI (participação nos lucros). O FGTS (inciso III) depende das condições fixadas em lei.",
      explicacaoErradas:
        "“Décimo terceiro” e “férias” estão na lista, nos incisos VIII e XVII. “Todos os direitos” ignora os que ficaram de fora. “Sem depender de nenhuma condição” contraria a segunda parte do § 1º. “Participação nos lucros” não aparece na lista.",
      pegadinha:
        "O parágrafo único virou § 1º com a EC 141/2026.",
      conhecimento:
        "Na segunda parte do § 1º estão os direitos que dependem de lei, como o seguro-desemprego e o FGTS.",
    },
    {
      topico: "Direitos coletivos",
      subassunto: "Unicidade sindical",
      dificuldade: 5,
      raciocinio:
        "Registro sim, autorização não, e uma entidade por base.",
      enunciado:
        "Dois grupos querem fundar sindicatos da mesma categoria num mesmo município, e um deles alega que precisa de autorização do Ministério. Segundo a CF,",
      alternativas: [
        "é preciso autorização do Estado, e podem existir vários sindicatos na mesma base",
        "os dois podem coexistir, desde que a base de cada um seja só um bairro",
        "a lei pode exigir autorização, se a categoria for considerada essencial",
        "nenhum dos dois pode ser fundado, pois o Estado é quem cria os sindicatos",
        "não há autorização, mas há registro, e só uma entidade é aceita na mesma base",
      ],
      correta: 4,
      explicacao:
        "O art. 8º, I, proíbe exigir autorização do Estado, ressalvado o registro no órgão competente. O inciso II veda mais de uma organização sindical da categoria na mesma base territorial, que não pode ser inferior à área de um Município.",
      explicacaoErradas:
        "“Vários sindicatos na mesma base” contraria a unicidade. “Só um bairro” é menor que um Município. “A lei pode exigir autorização” contraria o inciso I. “O Estado é quem cria” contraria a vedação à interferência.",
      pegadinha:
        "O registro não é autorização: ele serve para controlar a unicidade.",
      conhecimento:
        "As regras do art. 8º valem também para os sindicatos rurais e as colônias de pescadores.",
    },
    {
      topico: "Direitos coletivos",
      subassunto: "Contribuições",
      dificuldade: 4,
      raciocinio:
        "Confederativa: só de quem é filiado.",
      enunciado:
        "A assembleia de um sindicato fixou a contribuição confederativa e quer descontá-la de todos os trabalhadores da categoria, inclusive dos não filiados. Segundo o STF, o desconto",
      alternativas: [
        "vale para toda a categoria, pois foi aprovado em assembleia regular",
        "vale para todos, pois a contribuição confederativa tem natureza de tributo",
        "só é exigível dos filiados ao sindicato, conforme a Súmula Vinculante 40",
        "depende de lei federal que fixe o valor para os não filiados",
        "é proibido até para os filiados, pois a CF não prevê contribuição assim",
      ],
      correta: 2,
      explicacao:
        "A SV 40 diz que a contribuição confederativa do art. 8º, IV, só é exigível dos filiados ao sindicato respectivo. Ela não tem natureza tributária, pois não vem de lei.",
      explicacaoErradas:
        "“Toda a categoria” ignora a SV 40. “Natureza de tributo” confunde com a antiga contribuição sindical. “Lei federal” não muda o limite. “A CF não prevê” esquece o art. 8º, IV.",
      pegadinha:
        "Desde a reforma trabalhista, a contribuição sindical também depende de autorização do empregado.",
      conhecimento:
        "Ninguém é obrigado a filiar-se nem a manter-se filiado a sindicato (art. 8º, V).",
    },
    {
      topico: "Direitos coletivos",
      subassunto: "Estabilidade e representação",
      dificuldade: 5,
      raciocinio:
        "A proteção começa no registro da candidatura.",
      enunciado:
        "Um empregado sindicalizado registrou candidatura a dirigente sindical e foi eleito como suplente. Segundo a CF, a dispensa dele",
      alternativas: [
        "é vedada só para o titular, e o suplente não tem proteção",
        "é vedada desde o registro até um ano após o mandato, salvo falta grave",
        "é vedada apenas durante o mandato, e a candidatura não gera proteção",
        "é livre, desde que o empregador pague a indenização em dobro",
        "é vedada em qualquer caso, mesmo que ele cometa falta grave nos termos da lei",
      ],
      correta: 1,
      explicacao:
        "O art. 8º, VIII, veda a dispensa do sindicalizado a partir do registro da candidatura e, se eleito, ainda que suplente, até um ano após o final do mandato, salvo falta grave nos termos da lei.",
      explicacaoErradas:
        "“Só para o titular” contraria “ainda que suplente”. “Apenas durante o mandato” esquece o registro e o ano seguinte. “Indenização em dobro” não tem base. “Em qualquer caso” esquece a falta grave.",
      pegadinha:
        "O aposentado filiado também vota e pode ser votado no sindicato (art. 8º, VII).",
      conhecimento:
        "Nas empresas com mais de 200 empregados, a CF assegura a eleição de um representante deles, para o entendimento direto com o empregador (art. 11).",
    },
  ],
};
