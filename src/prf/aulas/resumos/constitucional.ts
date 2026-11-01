import type { ResumoAula } from "./tipos";

export const CON: Record<string, ResumoAula> = {
  "con-01": {
    ideia:
      "A Constituição é a lei maior do país: organiza o Estado e os Poderes e garante os direitos fundamentais; todas as outras normas devem respeitá-la.",
    itens: [
      {
        termo: "Sentido sociológico (Lassalle)",
        faz: "Constituição é a soma dos fatores reais de poder; sem eles, o texto é “folha de papel”.",
      },
      {
        termo: "Sentido político (Schmitt)",
        faz: "Constituição é a decisão política fundamental sobre a forma do Estado.",
      },
      {
        termo: "Sentido jurídico (Kelsen)",
        faz: "Constituição é norma suprema, o fundamento de validade de todas as outras.",
      },
      {
        termo: "Origem",
        faz: "Promulgada (feita por assembleia eleita pelo povo) ou outorgada (imposta por quem está no poder).",
        pista: "A CF/88 é promulgada, também chamada democrática ou popular.",
      },
      {
        termo: "Como a CF/88 se classifica",
        faz: "Escrita, dogmática, analítica (longa e detalhada) e rígida: muda só por emenda, num processo mais difícil que o das leis.",
      },
    ],
    cuidado:
      "Rígida não quer dizer imutável: a CF/88 pode ser emendada; só as cláusulas pétreas não podem ser abolidas.",
  },
  "con-02": {
    ideia:
      "Os arts. 1º a 4º mostram a base do Estado brasileiro: fundamentos, separação dos Poderes, objetivos e princípios nas relações internacionais.",
    itens: [
      {
        termo: "Fundamentos (art. 1º)",
        faz: "Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e pluralismo político.",
        pista: "Macete SO-CI-DI-VA-PLU.",
      },
      {
        termo: "República Federativa",
        faz: "Forma de governo: república. Forma de Estado: federação, união indissolúvel dos Estados, Municípios e DF.",
        pista: "Todo o poder emana do povo.",
      },
      {
        termo: "Poderes (art. 2º)",
        faz: "Legislativo, Executivo e Judiciário, independentes e harmônicos entre si.",
      },
      {
        termo: "Objetivos (art. 3º)",
        faz: "Construir sociedade livre, justa e solidária; garantir o desenvolvimento; erradicar a pobreza e reduzir as desigualdades; promover o bem de todos.",
        pista: "Objetivo começa com verbo: construir, garantir, erradicar, reduzir, promover.",
      },
      {
        termo: "Relações internacionais (art. 4º)",
        faz: "Independência nacional, prevalência dos direitos humanos, não intervenção, defesa da paz, repúdio ao terrorismo e ao racismo, concessão de asilo político, entre outros.",
      },
    ],
    cuidado:
      "A CF manda erradicar a pobreza e a marginalização e reduzir as desigualdades; “erradicar as desigualdades” está errado.",
  },
  "con-03": {
    ideia:
      "O art. 5º traz os direitos individuais e coletivos (vida, liberdade, igualdade, segurança e propriedade) e as garantias que os protegem.",
    itens: [
      {
        termo: "Direito × garantia",
        faz: "Direito é o bem protegido (a liberdade); garantia é o instrumento que o protege (o habeas corpus).",
      },
      {
        termo: "Remédios constitucionais",
        faz: "Habeas corpus (locomoção), habeas data (dados pessoais), mandado de segurança (direito líquido e certo), mandado de injunção (falta de norma) e ação popular.",
        pista: "Ação popular: qualquer cidadão, contra ato lesivo ao patrimônio público ou à moralidade.",
      },
      {
        termo: "Casa inviolável",
        faz: "Só se entra sem consentimento em flagrante delito, desastre, para prestar socorro ou, durante o dia, por ordem judicial.",
      },
      {
        termo: "Crimes com regime especial",
        faz: "Racismo e ação de grupos armados: inafiançáveis e imprescritíveis. Tortura, tráfico, terrorismo e hediondos: inafiançáveis e sem graça ou anistia.",
      },
      {
        termo: "Aplicação imediata",
        faz: "As normas de direitos fundamentais têm aplicação imediata; tratado de direitos humanos aprovado nas duas Casas, em dois turnos, por 3/5 dos votos, vale como emenda.",
      },
    ],
    cuidado:
      "Só racismo e ação de grupos armados são imprescritíveis; tortura, tráfico, terrorismo e hediondos prescrevem.",
  },
  "con-04": {
    ideia:
      "Os direitos sociais buscam melhores condições de vida: educação, saúde, trabalho, moradia e outros, além dos direitos de quem trabalha.",
    itens: [
      {
        termo: "Lista do art. 6º",
        faz: "Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção à maternidade e à infância e assistência aos desamparados.",
      },
      {
        termo: "Direitos do trabalhador (art. 7º)",
        faz: "Salário mínimo, 13º, FGTS, férias com 1/3 a mais, jornada de 8 h por dia e 44 h por semana, licença-gestante de 120 dias, entre outros.",
      },
      {
        termo: "Trabalho do menor",
        faz: "Proibido trabalho noturno, perigoso ou insalubre a menores de 18 anos e qualquer trabalho a menores de 16, salvo aprendiz a partir de 14.",
      },
      {
        termo: "Sindicato (art. 8º)",
        faz: "Livre associação; só um sindicato da mesma categoria na mesma base territorial, nunca menor que um Município.",
      },
      {
        termo: "Greve (art. 9º)",
        faz: "Direito dos trabalhadores; o servidor público faz greve nos termos de lei específica e o militar não pode fazer greve.",
      },
    ],
    cuidado:
      "Aprendiz pode começar aos 14 anos; o trabalho comum, só aos 16; noturno, perigoso ou insalubre, só aos 18.",
  },
  "con-05": {
    ideia:
      "Nacionalidade é o vínculo da pessoa com o Estado: o brasileiro pode ser nato (de nascimento) ou naturalizado (por escolha).",
    itens: [
      {
        termo: "Nato",
        faz: "Nascido no Brasil (salvo filho de estrangeiros a serviço do país deles) ou nascido no exterior de pai ou mãe brasileiro que esteja a serviço do Brasil.",
        pista: "Nascido no exterior também é nato se for registrado em repartição brasileira ou vier morar aqui e optar, depois dos 18 anos.",
      },
      {
        termo: "Naturalizado",
        faz: "De país de língua portuguesa: 1 ano de residência e idoneidade moral. Outros: mais de 15 anos de residência, sem condenação penal, e pedido.",
      },
      {
        termo: "Cargos de nato",
        faz: "Presidente e Vice, presidentes da Câmara e do Senado, ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro da Defesa.",
      },
      {
        termo: "Perda da nacionalidade",
        faz: "Naturalização cancelada por sentença (fraude ou atentado à ordem democrática) ou pedido expresso, se não deixar a pessoa sem pátria.",
      },
      {
        termo: "Igualdade",
        faz: "A lei não pode diferenciar natos e naturalizados, salvo nos casos da própria Constituição.",
      },
    ],
    cuidado:
      "O brasileiro nato nunca é extraditado; o naturalizado, só por crime comum anterior à naturalização ou por envolvimento com tráfico de drogas.",
  },
  "con-06": {
    ideia:
      "Direitos políticos permitem participar do governo: votar, ser votado e usar plebiscito, referendo e iniciativa popular.",
    itens: [
      {
        termo: "Voto",
        faz: "Direto, secreto, universal e com valor igual para todos.",
      },
      {
        termo: "Obrigatório × facultativo",
        faz: "Obrigatório dos 18 aos 70 anos; facultativo para analfabetos, maiores de 70 e jovens de 16 e 17 anos.",
        pista: "Estrangeiros e conscritos não podem se alistar.",
      },
      {
        termo: "Idades mínimas",
        faz: "35 anos: Presidente, Vice e Senador. 30: Governador. 21: Deputado e Prefeito. 18: Vereador.",
      },
      {
        termo: "Inelegíveis",
        faz: "Inalistáveis e analfabetos não podem ser eleitos; chefe do Executivo só tem uma reeleição seguida.",
      },
      {
        termo: "Perda ou suspensão (art. 15)",
        faz: "Naturalização cancelada, incapacidade civil absoluta, condenação criminal transitada em julgado, recusa de obrigação a todos imposta e improbidade.",
      },
    ],
    cuidado:
      "A Constituição proíbe a cassação de direitos políticos: só existe perda ou suspensão, e apenas nos casos do art. 15.",
  },
  "con-07": {
    ideia:
      "Partidos políticos são livres para nascer, se juntar e acabar, desde que respeitem a soberania, a democracia e o pluripartidarismo.",
    itens: [
      {
        termo: "Liberdade partidária",
        faz: "Criação, fusão, incorporação e extinção são livres, com caráter nacional.",
      },
      {
        termo: "Proibições",
        faz: "Receber dinheiro de entidade ou governo estrangeiro e usar organização paramilitar.",
      },
      {
        termo: "Personalidade jurídica",
        faz: "O partido nasce como pessoa jurídica de direito privado pela lei civil e depois registra o estatuto no TSE.",
      },
      {
        termo: "Coligações",
        faz: "Permitidas só nas eleições majoritárias; proibidas nas proporcionais (deputados e vereadores).",
      },
      {
        termo: "Fidelidade partidária",
        faz: "Deputado ou vereador que sai do partido perde o mandato, salvo anuência do partido ou justa causa prevista em lei.",
      },
    ],
    cuidado:
      "O partido não ganha personalidade jurídica no TSE: ela vem do registro civil; no TSE se registra o estatuto.",
  },
  "con-08": {
    ideia:
      "A Federação reúne União, Estados, DF e Municípios, todos autônomos, cada um com suas competências.",
    itens: [
      {
        termo: "Entes federativos",
        faz: "União, Estados, Distrito Federal e Municípios; Brasília é a Capital Federal.",
        pista: "Território federal integra a União e não é ente federativo.",
      },
      {
        termo: "Competência exclusiva (art. 21)",
        faz: "Tarefas administrativas da União que ela não pode delegar.",
      },
      {
        termo: "Competência privativa (art. 22)",
        faz: "Leis que só a União faz, como trânsito e transporte, direito penal e civil; lei complementar pode delegar pontos aos Estados.",
      },
      {
        termo: "Comum (art. 23) e concorrente (art. 24)",
        faz: "Comum: tarefas administrativas de todos os entes. Concorrente: União faz normas gerais e Estados e DF complementam.",
      },
      {
        termo: "Intervenção",
        faz: "Medida excepcional: a União intervém nos Estados e DF (art. 34); os Estados, nos seus Municípios (art. 35).",
      },
    ],
    cuidado:
      "Exclusiva (art. 21) é indelegável; privativa (art. 22) pode ser delegada aos Estados por lei complementar.",
  },
  "con-09": {
    ideia:
      "Os arts. 37 a 41 trazem as regras da Administração Pública: princípios, concurso, acumulação de cargos, estabilidade e responsabilidade do Estado.",
    itens: [
      {
        termo: "Princípios (art. 37)",
        faz: "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
        pista: "Macete LIMPE.",
      },
      {
        termo: "Concurso público",
        faz: "Obrigatório para cargo ou emprego público; vale até 2 anos, prorrogável uma vez por igual período.",
        pista: "Exceção: cargo em comissão, de livre nomeação e exoneração.",
      },
      {
        termo: "Acumulação de cargos",
        faz: "Proibida, salvo com horários compatíveis: dois de professor; professor com técnico ou científico; dois da saúde.",
      },
      {
        termo: "Estabilidade (art. 41)",
        faz: "Após 3 anos de efetivo exercício em cargo efetivo e avaliação especial de desempenho.",
        pista: "O estável perde o cargo por sentença definitiva, processo administrativo ou avaliação periódica.",
      },
      {
        termo: "Responsabilidade do Estado",
        faz: "O Estado responde pelos danos que seus agentes causarem a terceiros, mesmo sem culpa; depois cobra do agente se houve dolo ou culpa.",
      },
    ],
    cuidado:
      "Função de confiança é só para servidor efetivo; cargo em comissão pode ser de fora, respeitado o mínimo reservado a servidores de carreira.",
  },
  "con-10": {
    ideia:
      "O Poder Legislativo faz as leis e fiscaliza; no plano federal é o Congresso Nacional, formado pela Câmara e pelo Senado.",
    itens: [
      {
        termo: "Câmara dos Deputados",
        faz: "Representa o povo; eleição proporcional, mandato de 4 anos, de 8 a 70 deputados por Estado.",
      },
      {
        termo: "Senado Federal",
        faz: "Representa os Estados e o DF; 3 senadores por unidade, mandato de 8 anos, eleição majoritária.",
      },
      {
        termo: "Imunidades",
        faz: "Material: não respondem por opiniões, palavras e votos. Formal: desde a diplomação, só presos em flagrante de crime inafiançável.",
      },
      {
        termo: "Espécies de lei",
        faz: "Emenda: 3/5, em dois turnos, nas duas Casas. Lei complementar: maioria absoluta. Lei ordinária: maioria simples.",
      },
      {
        termo: "CPI",
        faz: "Criada por 1/3 dos membros, para fato determinado e por prazo certo; investiga e manda as conclusões ao Ministério Público.",
        pista: "Não pode prender (salvo flagrante), grampear telefone nem fazer busca em casa.",
      },
    ],
    cuidado:
      "Emenda à Constituição não passa por sanção nem veto do Presidente: é promulgada pelas Mesas da Câmara e do Senado.",
  },
  "con-11": {
    ideia:
      "O Poder Executivo governa e administra; no plano federal é exercido pelo Presidente da República, com a ajuda dos Ministros.",
    itens: [
      {
        termo: "Eleição",
        faz: "Maioria absoluta dos votos válidos; se ninguém atingir, segundo turno entre os dois mais votados. Mandato de 4 anos.",
      },
      {
        termo: "Substituição e sucessão",
        faz: "O Vice substitui e sucede; depois, só temporariamente, os presidentes da Câmara, do Senado e do STF.",
      },
      {
        termo: "Vacância dos dois cargos",
        faz: "Nova eleição em 90 dias; nos 2 últimos anos do mandato, o Congresso elege em 30 dias.",
      },
      {
        termo: "Atribuições (art. 84)",
        faz: "Sancionar e vetar leis, editar decretos e medidas provisórias, nomear Ministros, comandar as Forças Armadas.",
        pista: "Pode delegar a Ministros, ao PGR e ao AGU: decreto sobre organização e cargos vagos, indulto e provimento de cargos.",
      },
      {
        termo: "Crimes do Presidente",
        faz: "A Câmara autoriza por 2/3. Crime de responsabilidade: julga o Senado. Crime comum: julga o STF.",
      },
    ],
    cuidado:
      "No crime de responsabilidade quem julga é o Senado; no crime comum é o STF. Nos dois casos, a Câmara só autoriza.",
  },
  "con-12": {
    ideia:
      "O Poder Judiciário julga os conflitos aplicando a lei; o CNJ cuida da parte administrativa, financeira e disciplinar dos juízes.",
    itens: [
      {
        termo: "Garantias dos juízes",
        faz: "Vitaliciedade (após 2 anos no 1º grau), inamovibilidade e irredutibilidade do subsídio.",
      },
      {
        termo: "Vedações",
        faz: "Exercer outro cargo (salvo um de magistério), receber custas, ter atividade político-partidária.",
        pista: "Quarentena: 3 anos sem advogar no tribunal de onde saiu.",
      },
      {
        termo: "STF",
        faz: "11 ministros, brasileiros natos, com mais de 35 e menos de 70 anos, nomeados pelo Presidente após aprovação do Senado; guarda da Constituição.",
      },
      {
        termo: "STJ",
        faz: "Pelo menos 33 ministros; uniformiza a interpretação da lei federal.",
      },
      {
        termo: "CNJ",
        faz: "15 membros, mandato de 2 anos com uma recondução, presidido pelo Presidente do STF.",
      },
    ],
    cuidado:
      "O CNJ faz parte do Judiciário, mas não julga processos e não fiscaliza o STF: o controle é administrativo, financeiro e disciplinar.",
  },
  "con-13": {
    ideia:
      "As funções essenciais à Justiça são o Ministério Público, a Advocacia Pública, a Advocacia e a Defensoria Pública.",
    itens: [
      {
        termo: "Ministério Público",
        faz: "Defende a ordem jurídica, o regime democrático e os interesses sociais e individuais indisponíveis.",
        pista: "Princípios: unidade, indivisibilidade e independência funcional.",
      },
      {
        termo: "Funções do MP",
        faz: "Promove só ele a ação penal pública, faz o controle externo da atividade policial, requisita diligências e inquérito, propõe ação civil pública.",
      },
      {
        termo: "Procurador-Geral da República",
        faz: "Chefia o MPU; nomeado pelo Presidente entre membros da carreira com mais de 35 anos, após aprovação do Senado, para 2 anos.",
      },
      {
        termo: "Advocacia Pública",
        faz: "A AGU representa a União na Justiça e fora dela; os procuradores fazem o mesmo nos Estados e no DF.",
      },
      {
        termo: "Advocacia e Defensoria",
        faz: "O advogado é indispensável à Justiça; a Defensoria dá orientação jurídica e defende os necessitados de graça.",
      },
    ],
    cuidado:
      "O MP não faz parte do Judiciário nem é subordinado ao Executivo: é instituição autônoma.",
  },
};
