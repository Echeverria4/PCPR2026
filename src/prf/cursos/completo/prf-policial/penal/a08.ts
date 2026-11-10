import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-08",
  resumo: {
    ideia:
      "Os crimes contra a dignidade sexual protegem a liberdade de escolha da pessoa. O ponto central é separar o meio usado: violência ou ameaça, fraude, surpresa, hierarquia ou vulnerabilidade da vítima.",
    itens: [
      {
        termo: "Estupro",
        faz: "Violência ou grave ameaça. Pena de 6 a 10 anos. Vítima de 14 a 17 anos ou lesão grave: 8 a 12. Morte: 12 a 30.",
        pista: "Não exige contato físico.",
      },
      {
        termo: "Estupro de vulnerável",
        faz: "Menor de 14 anos ou pessoa sem discernimento ou sem poder resistir. Pena de 10 a 18 anos e multa. Lesão grave: 12 a 24. Morte: 20 a 40.",
      },
      {
        termo: "Presunção absoluta",
        faz: "O § 4º-A, de 2026, proíbe relativizar a vulnerabilidade. Consentimento, experiência e relações anteriores não importam.",
      },
      {
        termo: "Violação mediante fraude",
        faz: "Engano que dificulta a vontade da vítima. Pena de 2 a 6 anos. Se ela fica sem poder resistir, passa a ser estupro de vulnerável.",
      },
      {
        termo: "Importunação sexual",
        faz: "Ato libidinoso sem anuência, sem violência nem grave ameaça. Pena de 1 a 5 anos, se não houver crime mais grave.",
      },
      {
        termo: "Assédio sexual",
        faz: "Exige superior hierárquico ou ascendência ligada a emprego, cargo ou função. Detenção de 1 a 2 anos. Crime formal.",
      },
      {
        termo: "Art. 216-B",
        faz: "Registrar a intimidade sem autorização. Detenção de 6 meses a 1 ano, e multa. A montagem tem a mesma pena.",
      },
      {
        termo: "Art. 218-C",
        faz: "Divulgar cena de estupro ou, sem consentimento, de sexo ou nudez. Reclusão de 4 a 10 anos e multa. Vingança ou relação íntima aumenta de 1/3 a 2/3.",
      },
      {
        termo: "Ação penal",
        faz: "Pública incondicionada nos Capítulos I e II, pelo art. 225. A vontade da vítima não impede o processo.",
      },
      {
        termo: "Aumentos do art. 226",
        faz: "Concurso: quarta parte. Parentesco ou autoridade: metade. Estupro coletivo ou corretivo: 1/3 a 2/3.",
      },
      {
        termo: "Exploração sexual",
        faz: "A prostituição em si não é crime. Punem-se o favorecimento, a casa de prostituição e o rufianismo, que é tirar proveito dos lucros.",
      },
      {
        termo: "Art. 234-B",
        faz: "Processo em segredo de justiça. Desde 2024, a condenação em primeira instância abre nome, CPF e tipificação do réu em certos crimes.",
      },
    ],
    cuidado:
      "O PDF traz o art. 217-A com 8 a 15 anos e o art. 218-C com 1 a 5 anos. As penas atuais são maiores.",
  },
  questoes: [
    {
      topico: "Estupro",
      subassunto: "Ato libidinoso sem contato físico",
      dificuldade: 4,
      raciocinio: "O tipo fala em praticar ou permitir que se pratique.",
      enunciado:
        "Sob ameaça de faca, um homem obriga uma mulher adulta a praticar ato libidinoso em si mesma, sem nunca tocá-la. Pelo art. 213 do CP e pelo entendimento do STJ, o crime é",
      alternativas: [
        "importunação sexual, porque não houve toque na vítima",
        "constrangimento ilegal, por faltar contato físico",
        "estupro consumado, que dispensa contato físico",
        "estupro tentado, porque o contato era indispensável",
        "ato obsceno, pois a prática foi da própria vítima",
      ],
      correta: 2,
      explicacao:
        "O art. 213 pune constranger alguém, mediante violência ou grave ameaça, a praticar ou permitir ato libidinoso. O STJ entende que o contato físico entre autor e vítima não é indispensável.",
      explicacaoErradas:
        "“Importunação sexual” pressupõe ausência de violência ou grave ameaça. “Constrangimento ilegal” é geral e cede ao tipo específico. “Tentado” exige que o ato não aconteça. “Ato obsceno” protege o pudor público.",
      pegadinha: "A ameaça com faca é o que separa o estupro da importunação.",
      conhecimento:
        "Vítima de 14 a 17 anos leva ao § 1º do art. 213: reclusão de 8 a 12 anos.",
    },
    {
      topico: "Estupro de vulnerável",
      subassunto: "Presunção absoluta",
      dificuldade: 4,
      raciocinio: "A lei hoje responde de forma expressa.",
      enunciado:
        "Acusado pelo art. 217-A do CP, um réu de 19 anos alega que a vítima, de 13 anos, consentiu, que já namoravam e que ela já tivera relações anteriores. Pelo texto atual do artigo, as alegações",
      alternativas: [
        "afastam o crime, pois o consentimento exclui a tipicidade",
        "reduzem a pena pela metade, como causa de diminuição",
        "afastam o crime se a família aprovava o namoro",
        "levam ao crime de corrupção de menores, de pena menor",
        "não mudam nada, pois a presunção é absoluta",
      ],
      correta: 4,
      explicacao:
        "O § 4º-A, incluído pela Lei 15.353/2026, diz que a presunção de vulnerabilidade é absoluta e não admite relativização. O § 5º afasta consentimento, experiência sexual e relações anteriores.",
      explicacaoErradas:
        "“Exclui a tipicidade” contraria o § 5º. “Pela metade” não tem previsão. “A família aprovava” é irrelevante, como já dizia a Súmula 593 do STJ. “Corrupção de menores” não descreve a conduta.",
      pegadinha: "A idade da vítima na data do fato basta para o tipo.",
      conhecimento:
        "A Súmula 593 do STJ já negava relevância ao consentimento antes da lei.",
    },
    {
      topico: "Estupro de vulnerável",
      subassunto: "Pena com lesão grave",
      dificuldade: 5,
      raciocinio: "Lembre que as penas subiram em 2025.",
      enunciado:
        "Do crime de estupro de vulnerável resulta lesão corporal de natureza grave. Pelo art. 217-A, § 3º, do CP, na redação atual, a pena de reclusão é",
      alternativas: [
        "de 12 a 24 anos",
        "de 10 a 20 anos",
        "de 10 a 18 anos",
        "de 8 a 15 anos",
        "de 12 a 30 anos",
      ],
      correta: 0,
      explicacao:
        "O § 3º prevê reclusão de 12 a 24 anos, e multa. O caput é de 10 a 18 anos, e o § 4º, com morte, de 20 a 40 anos.",
      explicacaoErradas:
        "“10 a 18 anos” é o caput atual. “8 a 15 anos” é o caput antigo. “12 a 30 anos” é a morte no estupro comum. “10 a 20 anos” é a pena antiga do § 3º.",
      pegadinha: "Não confunda com o art. 213, § 1º, que é de 8 a 12 anos.",
      conhecimento:
        "A mudança das penas veio com a Lei 15.280/2025.",
    },
    {
      topico: "Importunação sexual",
      subassunto: "Art. 215-A x outros tipos",
      dificuldade: 4,
      raciocinio: "Sem violência, sem ameaça, com vítima capaz e sem anuência.",
      enunciado:
        "Em um ônibus interestadual, um homem toca de surpresa, com fim de lascívia, o corpo de uma passageira adulta e acordada, sem violência nem ameaça. A PRF é chamada no posto seguinte. O fato é",
      alternativas: [
        "estupro, porque o toque foi feito sem o consentimento dela",
        "violação sexual mediante fraude, pela surpresa empregada",
        "contravenção de importunação ofensiva ao pudor",
        "importunação sexual, crime do art. 215-A do CP",
        "ato obsceno, por ter ocorrido em local aberto ao público",
      ],
      correta: 3,
      explicacao:
        "O art. 215-A pune praticar contra alguém, sem anuência, ato libidinoso para satisfazer a própria lascívia. A pena é de 1 a 5 anos, se o ato não constitui crime mais grave.",
      explicacaoErradas:
        "“Estupro” exige violência ou grave ameaça. “Mediante fraude” exige engano. “Contravenção” foi revogada pela lei que criou o art. 215-A. “Ato obsceno” não tem vítima determinada como aqui.",
      pegadinha: "Se a passageira estivesse dormindo, a análise mudaria para o art. 217-A, § 1º.",
      conhecimento:
        "O crime foi criado pela Lei 13.718/2018.",
    },
    {
      topico: "Violação sexual mediante fraude",
      subassunto: "Art. 215 x art. 217-A, § 1º",
      dificuldade: 5,
      raciocinio: "A vítima ainda pode manifestar a vontade?",
      enunciado:
        "Primeiro caso: um médico pratica ato libidinoso em uma paciente adulta, que acredita ser parte do exame. Segundo caso: um médico seda uma paciente adulta até ela perder a consciência e faz o mesmo. Quanto à tipificação,",
      alternativas: [
        "os dois casos são violação sexual mediante fraude",
        "o primeiro é art. 215, e o segundo é art. 217-A, § 1º",
        "o primeiro é estupro, e o segundo é art. 215",
        "os dois casos são importunação sexual, por falta de anuência",
        "os dois casos são estupro de vulnerável, pela relação médica",
      ],
      correta: 1,
      explicacao:
        "A fraude do art. 215 impede ou dificulta a livre manifestação da vontade. Se a vítima não pode oferecer resistência por qualquer causa, como a sedação total, há estupro de vulnerável (art. 217-A, § 1º).",
      explicacaoErradas:
        "“Os dois casos são violação” ignora a perda total de consciência. “Estupro” exige violência ou ameaça. “Importunação” é subsidiária. “Pela relação médica” não torna a paciente acordada vulnerável.",
      pegadinha: "Fraude dificulta a vontade. Vulnerabilidade elimina a resistência.",
      conhecimento:
        "Se o crime do art. 215 busca vantagem econômica, aplica-se também multa.",
    },
    {
      topico: "Assédio sexual",
      subassunto: "Consumação e hierarquia",
      dificuldade: 4,
      raciocinio: "Olhe a posição do agente e o momento da consumação.",
      enunciado:
        "Um gerente de transportadora diz a uma funcionária que a promoção dela depende de favores sexuais. Ela recusa e nada acontece. Um colega do mesmo nível faz proposta igual a outra funcionária. Pelo art. 216-A do CP,",
      alternativas: [
        "o gerente responde por tentativa, e o colega também",
        "só há crime se a funcionária sofrer represália depois",
        "o gerente consumou o crime, e o colega não o praticou",
        "os dois consumaram o crime, por ser comum o assédio",
        "o gerente responde por estupro tentado, pela ameaça",
      ],
      correta: 2,
      explicacao:
        "O crime exige superior hierárquico ou ascendência inerente a emprego, cargo ou função, e é formal: consuma-se com o constrangimento, sem obter o favor. Entre colegas do mesmo nível, o tipo não se aplica.",
      explicacaoErradas:
        "“Tentativa” ignora que o crime é formal. “Represália” não é elementar. “Por ser comum” erra: o crime é próprio. “Estupro tentado” exige grave ameaça para a prática do ato.",
      pegadinha: "Sem hierarquia ou ascendência, não há assédio do art. 216-A.",
      conhecimento:
        "O § 2º aumenta a pena em até um terço se a vítima é menor de 18 anos.",
    },
    {
      topico: "Exposição da intimidade",
      subassunto: "Art. 218-C e vingança",
      dificuldade: 5,
      raciocinio: "Separe quem grava de quem divulga, e veja a pena nova.",
      enunciado:
        "Após o fim do namoro, um homem publica na internet, sem consentimento e por vingança, um vídeo íntimo gravado com a ex-namorada adulta, então com autorização dela. Pelo CP,",
      alternativas: [
        "é art. 218-C, com pena de 4 a 10 anos e aumento de 1/3 a 2/3",
        "é art. 216-B, porque cuida de registro não autorizado da intimidade",
        "é art. 218-C, com pena de 1 a 5 anos e aumento de um terço",
        "é só crime contra a honra, pois o vídeo foi feito com autorização",
        "é fato atípico, pois ela autorizou a gravação do vídeo",
      ],
      correta: 0,
      explicacao:
        "O art. 218-C pune divulgar cena de sexo ou nudez sem consentimento, com reclusão de 4 a 10 anos e multa, desde a Lei 15.280/2025. O § 1º aumenta de 1/3 a 2/3 por relação íntima de afeto ou vingança.",
      explicacaoErradas:
        "“Art. 216-B” cuida de produzir o registro, e não de divulgar. “1 a 5 anos” é a pena antiga. “Só crime contra a honra” ignora o tipo próprio. “Atípico” confunde autorizar gravar com autorizar divulgar.",
      pegadinha: "Autorizar a gravação não é autorizar a divulgação.",
      conhecimento:
        "O § 2º exclui a ilicitude em publicação jornalística, científica, cultural ou acadêmica sem identificar a vítima.",
    },
    {
      topico: "Ação penal",
      subassunto: "Art. 225 do CP",
      dificuldade: 4,
      raciocinio: "A Lei 13.718/2018 mudou tudo nesse ponto.",
      enunciado:
        "Uma mulher adulta sofre estupro na forma simples, mas diz à autoridade policial que não quer ver o autor processado. Quanto à ação penal,",
      alternativas: [
        "depende de representação, por se tratar de vítima adulta",
        "é privada, e a vítima pode oferecer queixa em seis meses",
        "depende de representação, salvo se o agente for parente",
        "é pública condicionada, pois a vítima é capaz e maior",
        "é pública incondicionada, e o MP age sem a vontade dela",
      ],
      correta: 4,
      explicacao:
        "Pelo art. 225, com a redação da Lei 13.718/2018, os crimes dos Capítulos I e II do Título da dignidade sexual se apuram por ação penal pública incondicionada.",
      explicacaoErradas:
        "“Representação” e “condicionada” são a regra antiga. “Privada” vigorou antes de 2009. “Salvo se o agente for parente” não tem base no texto atual.",
      pegadinha: "A vontade da vítima não impede o início da investigação.",
      conhecimento:
        "O parágrafo único do art. 225 foi revogado pela mesma lei.",
    },
    {
      topico: "Disposições gerais",
      subassunto: "Aumentos do art. 226",
      dificuldade: 5,
      raciocinio: "Há regra geral para concurso e regra própria para o estupro coletivo.",
      enunciado:
        "Dois homens, juntos, praticam estupro contra uma mulher adulta, sem qualquer parentesco ou autoridade sobre ela. Pelo art. 226 do CP, a pena do crime sofre aumento",
      alternativas: [
        "de metade, pelo concurso de agentes",
        "de quarta parte, pelo concurso de agentes",
        "até o dobro, por ser estupro coletivo",
        "de 1/3 a 2/3, por ser estupro coletivo",
        "de um terço, pela superioridade numérica",
      ],
      correta: 3,
      explicacao:
        "O inciso IV, alínea “a”, trata do estupro coletivo, com dois ou mais agentes, e aumenta de 1/3 a 2/3. A regra especial afasta a quarta parte do inciso I, geral.",
      explicacaoErradas:
        "“De metade” é o inciso II, de parentesco ou autoridade. “Quarta parte” é a regra geral do inciso I. “Até o dobro” e “de um terço” não estão no artigo.",
      pegadinha: "No estupro, dois agentes bastam para o “coletivo”.",
      conhecimento:
        "A alínea “b” trata do estupro corretivo, que busca controlar o comportamento social ou sexual da vítima.",
    },
    {
      topico: "Exploração sexual",
      subassunto: "Art. 218-B na rodovia",
      dificuldade: 5,
      raciocinio: "O § 2º alcança quem responde pelo local.",
      enunciado:
        "Em fiscalização, a PRF constata que uma adolescente de 15 anos é submetida a exploração sexual em um bar à margem da BR, com o conhecimento da gerente. Pelo art. 218-B do CP, quanto à gerente,",
      alternativas: [
        "responde só por casa de prostituição, se tiver lucro",
        "incide no tipo, e a cassação da licença é obrigatória",
        "responde só por omissão de socorro, pois não explorou",
        "incide no tipo, mas a cassação depende de pedido do MP",
        "não responde, pois a vítima já tem mais de 14 anos",
      ],
      correta: 1,
      explicacao:
        "O § 2º, II, pune o proprietário, o gerente ou o responsável pelo local das práticas, com reclusão de 7 a 16 anos, e multa. O § 3º faz da cassação da licença de funcionamento efeito obrigatório.",
      explicacaoErradas:
        "“Se tiver lucro” e “casa de prostituição” ignoram o tipo próprio. “Omissão de socorro” não descreve a conduta. “Depende de pedido” contraria o § 3º. “Mais de 14 anos” esquece que o artigo protege quem tem menos de 18.",
      pegadinha: "O art. 218-B protege a pessoa menor de 18 anos.",
      conhecimento:
        "O art. 234-B, § 1º, alcança a condenação por esse crime.",
    },
    {
      topico: "Exploração sexual",
      subassunto: "Rufianismo",
      dificuldade: 4,
      raciocinio: "Quem tira proveito, sem violência, e qual vínculo tem com a pessoa.",
      enunciado:
        "Sem violência nem ameaça, um homem é sustentado pelo que ganha sua companheira adulta, que se prostitui por decisão própria. Pelo art. 230 do CP, a conduta é",
      alternativas: [
        "rufianismo, com a pena de 3 a 6 anos do § 1º",
        "atípica, pois a prostituição não é crime no Brasil",
        "rufianismo, com a pena de 1 a 4 anos do caput",
        "favorecimento da prostituição, de 2 a 5 anos",
        "tráfico de pessoas, de 4 a 8 anos, pela exploração",
      ],
      correta: 0,
      explicacao:
        "O art. 230 pune quem tira proveito da prostituição alheia, fazendo-se sustentar por quem a exerce. Se o autor é companheiro da vítima, a pena do § 1º é de reclusão de 3 a 6 anos, e multa.",
      explicacaoErradas:
        "“Atípica” confunde quem se prostitui com quem se aproveita. “1 a 4 anos” esquece o § 1º. “Favorecimento” exige induzir, atrair ou dificultar o abandono. “Tráfico” exige meio coativo ou fraude e atos de deslocamento ou acolhida.",
      pegadinha: "A companheira não comete crime, mas ele sim.",
      conhecimento:
        "Com violência, grave ameaça ou fraude, o § 2º prevê 2 a 8 anos, sem prejuízo da pena da violência.",
    },
    {
      topico: "Disposições gerais",
      subassunto: "Art. 234-B e publicidade",
      dificuldade: 5,
      raciocinio: "O segredo é a regra, mas a lei de 2024 abriu exceção.",
      enunciado:
        "Um réu é condenado em primeira instância por estupro e recorre. Sobre o art. 234-B do CP, com a Lei 15.035/2024, a consulta processual",
      alternativas: [
        "só abre os dados do réu após o trânsito em julgado",
        "abre todos os dados do processo, inclusive os da vítima",
        "abre nome, CPF e tipificação, salvo decisão fundamentada",
        "continua fechada, pois o segredo de justiça é absoluto",
        "abre só as iniciais do réu e a pena fixada na sentença",
      ],
      correta: 2,
      explicacao:
        "O § 1º torna públicos o nome completo do réu, o CPF e a tipificação a partir da condenação em primeira instância nos crimes que lista, ressalvada decisão fundamentada que mantenha o sigilo.",
      explicacaoErradas:
        "“Trânsito em julgado” contraria o texto. “Inclusive os da vítima” vai além do que a lei abre. “Segredo absoluto” ignora o § 1º. “Só as iniciais” não está no artigo.",
      pegadinha: "Absolvido no recurso, o réu volta a ter o sigilo.",
      conhecimento:
        "A regra vale para os arts. 213, 216-B, 217-A, 218-B, 227, 228, 229 e 230.",
    },
  ],
};
