import type { ResumoAula } from "./tipos";

export const ADM: Record<string, ResumoAula> = {
  "adm-01": {
    ideia:
      "Ato administrativo é a manifestação da Administração, sob regras de direito público, que cria, muda ou extingue direitos e deveres.",
    itens: [
      {
        termo: "Elementos",
        faz: "Competência, finalidade, forma, motivo e objeto.",
        pista: "Competência, finalidade e forma são vinculados; motivo e objeto formam o mérito do ato discricionário.",
      },
      {
        termo: "Atributos",
        faz: "Presunção de legitimidade, autoexecutoriedade, tipicidade e imperatividade.",
        pista: "Macete PATI.",
      },
      {
        termo: "Anulação",
        faz: "Retira o ato ilegal, pela própria Administração ou pelo Judiciário; volta ao passado (efeito ex tunc).",
        pista: "A Administração tem 5 anos para anular ato que favoreceu alguém, salvo má-fé.",
      },
      {
        termo: "Revogação",
        faz: "Retira o ato legal que ficou inconveniente ou inoportuno; vale daqui para frente (ex nunc) e respeita direitos adquiridos.",
        pista: "Ato vinculado não pode ser revogado.",
      },
      {
        termo: "Convalidação",
        faz: "Corrige o ato com defeito sanável (competência não exclusiva ou forma não essencial), se não prejudicar ninguém.",
      },
    ],
    cuidado:
      "O Judiciário não revoga atos da Administração: só os anula, por ilegalidade. Revogar é exclusivo de quem praticou o ato.",
  },
  "adm-02": {
    ideia:
      "Controle é a fiscalização da Administração para garantir que ela aja dentro da lei e em favor do interesse público.",
    itens: [
      {
        termo: "Controle administrativo",
        faz: "A própria Administração revê seus atos (autotutela), de ofício ou a pedido.",
        pista: "Pode olhar a legalidade e também a conveniência e a oportunidade.",
      },
      {
        termo: "Controle legislativo",
        faz: "O Congresso fiscaliza o Executivo, com a ajuda do TCU, e pode sustar atos que passem do poder regulamentar.",
      },
      {
        termo: "Controle judicial",
        faz: "O Judiciário, quando provocado, examina só a legalidade dos atos, não o mérito.",
      },
      {
        termo: "Interno × externo",
        faz: "Interno: dentro do mesmo Poder (CGU, chefia). Externo: um Poder sobre outro (Congresso e TCU, Judiciário).",
      },
      {
        termo: "Tutela (supervisão ministerial)",
        faz: "O ministério controla as entidades da Administração indireta nos limites da lei, sem hierarquia.",
      },
    ],
    cuidado:
      "O TCU não julga as contas do Presidente da República: só dá parecer prévio; quem julga é o Congresso Nacional.",
  },
  "adm-04": {
    ideia:
      "A Lei 8.112/1990 é o estatuto dos servidores civis da União, das autarquias e das fundações públicas federais: ingresso, direitos, deveres e punições.",
    itens: [
      {
        termo: "Formas de provimento",
        faz: "Nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.",
        pista: "Só a nomeação é originária: as outras dependem de vínculo anterior.",
      },
      {
        termo: "Posse e exercício",
        faz: "Posse em até 30 dias da publicação da nomeação; exercício em até 15 dias da posse.",
        pista: "Sem posse no prazo, a nomeação fica sem efeito; sem exercício, o servidor é exonerado.",
      },
      {
        termo: "Penalidades",
        faz: "Advertência, suspensão (até 90 dias), demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão ou função comissionada.",
      },
      {
        termo: "Responsabilidades",
        faz: "Civil, penal e administrativa, independentes entre si.",
        pista: "A absolvição penal que nega o fato ou a autoria afasta a punição administrativa.",
      },
      {
        termo: "Prescrição da punição",
        faz: "5 anos para demissão, cassação e destituição; 2 anos para suspensão; 180 dias para advertência.",
      },
    ],
    cuidado:
      "Sindicância só aplica advertência ou suspensão de até 30 dias; punição maior exige PAD, com comissão de 3 servidores estáveis.",
  },
  "adm-05": {
    ideia:
      "A Lei 9.784/1999 regula o processo administrativo federal: protege os direitos de quem é parte e garante que a Administração decida bem.",
    itens: [
      {
        termo: "Princípios",
        faz: "Legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.",
      },
      {
        termo: "Impedimento × suspeição",
        faz: "Impedido (interesse na causa, atuou como perito ou testemunha, briga com o interessado) deve se afastar; suspeição (amizade íntima ou inimizade notória) pode ser alegada.",
        pista: "Não comunicar o impedimento é falta grave.",
      },
      {
        termo: "Prazos",
        faz: "Atos em 5 dias, salvo força maior; decisão em até 30 dias depois da instrução; intimação com 3 dias úteis de antecedência.",
      },
      {
        termo: "Recurso",
        faz: "10 dias para recorrer; vai a quem decidiu, que tem 5 dias para reconsiderar e, se não o fizer, envia à autoridade superior.",
        pista: "Em regra, sem efeito suspensivo e por no máximo 3 instâncias.",
      },
      {
        termo: "Anulação",
        faz: "A Administração tem 5 anos para anular ato que favoreceu alguém, contados da prática do ato, salvo má-fé.",
      },
    ],
    cuidado:
      "Não se delega: edição de atos normativos, decisão de recursos e matérias de competência exclusiva (macete CE-NO-RE).",
  },
  "adm-06": {
    ideia:
      "Os poderes administrativos são ferramentas para atender o interesse público: são poderes-deveres, que o agente não pode deixar de usar.",
    itens: [
      {
        termo: "Hierárquico",
        faz: "Organiza e escalona funções: dar ordens, fiscalizar, delegar, avocar e rever atos dos subordinados.",
      },
      {
        termo: "Disciplinar",
        faz: "Apura infrações e pune servidores e quem tem vínculo especial com a Administração, como empresas contratadas.",
      },
      {
        termo: "Regulamentar",
        faz: "Edita decretos e regulamentos para a fiel execução das leis, sem criar direitos nem obrigações novos.",
      },
      {
        termo: "Poder de polícia",
        faz: "Limita direitos e atividades particulares em favor do interesse público: ordem, consentimento, fiscalização e sanção.",
        pista: "Multa de trânsito, interdição e apreensão são poder de polícia.",
      },
      {
        termo: "Abuso de poder",
        faz: "Excesso: o agente vai além da sua competência. Desvio: age dentro da competência, mas com outro fim.",
      },
    ],
    cuidado:
      "O poder disciplinar alcança só quem tem vínculo especial com a Administração; o poder de polícia alcança qualquer particular.",
  },
  "adm-07": {
    ideia:
      "O regime jurídico administrativo se apoia em duas ideias: a supremacia e a indisponibilidade do interesse público; delas saem os princípios.",
    itens: [
      {
        termo: "Supremacia do interesse público",
        faz: "Dá prerrogativas à Administração: desapropriar, requisitar bens, impor cláusulas especiais nos contratos.",
      },
      {
        termo: "Indisponibilidade do interesse público",
        faz: "Impõe limites: o agente cuida de bens que não são seus, por isso há concurso, licitação e controle.",
      },
      {
        termo: "Legalidade e impessoalidade",
        faz: "A Administração só faz o que a lei permite e age sem favorecer nem perseguir ninguém.",
        pista: "Propaganda oficial não pode ter nome, símbolo ou imagem que promova autoridade.",
      },
      {
        termo: "Moralidade e publicidade",
        faz: "Agir com honestidade e boa-fé e dar transparência aos atos, que em regra devem ser publicados.",
        pista: "Nepotismo fere a moralidade (Súmula Vinculante 13).",
      },
      {
        termo: "Eficiência e princípios implícitos",
        faz: "Eficiência: bons resultados com bom uso dos recursos. Implícitos: razoabilidade, proporcionalidade, autotutela, continuidade e segurança jurídica.",
      },
    ],
    cuidado:
      "A legalidade muda de sentido: o particular pode fazer tudo o que a lei não proíbe; a Administração, só o que a lei permite.",
  },
  "adm-08": {
    ideia:
      "O Estado indeniza os danos que seus agentes, agindo nessa qualidade, causam a terceiros (CF, art. 37, § 6º).",
    itens: [
      {
        termo: "Responsabilidade objetiva",
        faz: "A vítima não precisa provar culpa: basta a conduta do agente, o dano e o nexo entre os dois.",
        pista: "É a teoria do risco administrativo.",
      },
      {
        termo: "Quem responde",
        faz: "Pessoas jurídicas de direito público e as de direito privado que prestam serviço público, inclusive perante quem não é usuário.",
      },
      {
        termo: "Excludentes",
        faz: "Culpa exclusiva da vítima, caso fortuito ou força maior e fato exclusivo de terceiro afastam o dever de indenizar.",
        pista: "Culpa concorrente da vítima só reduz a indenização.",
      },
      {
        termo: "Omissão",
        faz: "Em regra, é preciso mostrar a falha do serviço (não funcionou, funcionou mal ou atrasou); com dever específico de agir, como com o preso, é objetiva.",
      },
      {
        termo: "Risco integral",
        faz: "Não admite excludentes; aplica-se em casos extremos, como dano nuclear e dano ambiental.",
      },
    ],
    cuidado:
      "A vítima processa o Estado, não o agente; o agente só responde depois, ao Estado, em ação regressiva, se agiu com dolo ou culpa.",
  },
  "adm-10": {
    ideia:
      "Serviço público é a atividade que o Estado presta, diretamente ou por delegação, para atender necessidades da coletividade.",
    itens: [
      {
        termo: "Serviço adequado",
        faz: "Regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e tarifa módica (Lei 8.987/1995).",
      },
      {
        termo: "Centralizado × descentralizado",
        faz: "Centralizado: o próprio Estado presta. Descentralizado: outra pessoa presta, por lei (outorga) ou contrato (delegação).",
      },
      {
        termo: "Concessão × permissão",
        faz: "Concessão: contrato com pessoa jurídica ou consórcio, após licitação, por prazo determinado. Permissão: contrato de adesão, precário, com pessoa física ou jurídica.",
      },
      {
        termo: "Interrupção permitida",
        faz: "Em emergência ou, com aviso prévio, por motivo técnico, de segurança ou por falta de pagamento do usuário.",
      },
      {
        termo: "Fim da concessão",
        faz: "Termo do contrato, encampação, caducidade, rescisão, anulação e falência ou extinção da empresa.",
      },
    ],
    cuidado:
      "Encampação é a retomada por interesse público, com lei autorizativa e indenização prévia; caducidade é o fim por falha da concessionária.",
  },
  "adm-11": {
    ideia:
      "A Administração se divide em direta (os entes e seus órgãos) e indireta (entidades criadas para tarefas específicas).",
    itens: [
      {
        termo: "Desconcentração",
        faz: "Divide tarefas entre órgãos da mesma pessoa jurídica, com hierarquia.",
      },
      {
        termo: "Descentralização",
        faz: "Passa a atividade para outra pessoa, por lei (outorga) ou contrato (delegação); não há hierarquia, só controle.",
      },
      {
        termo: "Órgão público",
        faz: "Parte da pessoa jurídica, sem personalidade própria; o que o agente faz é atribuído ao Estado.",
        pista: "A PRF é órgão da União, ligado ao Ministério da Justiça e Segurança Pública.",
      },
      {
        termo: "Autarquia e fundação",
        faz: "Autarquia: de direito público, para atividades típicas do Estado. Fundação pública: patrimônio destinado a um fim social.",
      },
      {
        termo: "Empresas estatais",
        faz: "Empresa pública: capital todo público, qualquer forma societária. Sociedade de economia mista: S.A., com a maioria das ações com voto nas mãos do Estado.",
      },
    ],
    cuidado:
      "Pelo texto da CF, só a autarquia é criada diretamente por lei; para empresa pública, sociedade de economia mista e fundação, a lei só autoriza a criação.",
  },
};
