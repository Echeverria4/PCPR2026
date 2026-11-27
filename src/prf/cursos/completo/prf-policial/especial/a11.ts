import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-11",
  resumo: {
    ideia:
      "Os Juizados Especiais Criminais cuidam das infrações de menor potencial ofensivo com um rito rápido e, de preferência, sem prisão: termo circunstanciado, audiência preliminar com composição dos danos e transação penal e, sem acordo, o procedimento sumariíssimo. A Lei 10.259/2001 leva esse modelo à Justiça Federal. Esta aula cobre toda a parte criminal da Lei 9.099/1995 (arts. 60 a 92) e o essencial da Lei 10.259.",
    itens: [
      {
        parte: "1. Base e conceito",
        termo: "Base na Constituição",
        faz: "A Constituição manda a União, no DF e nos Territórios, e os Estados criarem juizados especiais, com juízes togados, ou togados e leigos, para conciliar, julgar e executar causas cíveis de menor complexidade e infrações penais de menor potencial ofensivo, por procedimento oral e sumariíssimo, com transação e recursos julgados por turmas de juízes de primeiro grau (art. 98, I).",
        pista: "Lei federal cria os juizados da Justiça Federal (art. 98, § 1º): é a Lei 10.259/2001. A Lei 9.099/1995 é a lei geral.",
      },
      {
        termo: "Menor potencial ofensivo",
        faz: "As contravenções penais e os crimes com pena máxima de até 2 anos, cumulada ou não com multa (Lei 9.099/1995, art. 61).",
        pista: "Conta a pena máxima, não a mínima. As contravenções entram sempre, qualquer que seja a pena. Desde a Lei 11.313/2006, a regra vale também para crimes com rito especial.",
      },
      {
        termo: "Juizado Especial Criminal",
        faz: "Formado por juízes togados ou togados e leigos, cuida da conciliação, do julgamento e da execução das infrações de menor potencial ofensivo, respeitadas as regras de conexão e continência (art. 60).",
        pista: "O juiz leigo é auxiliar da Justiça, escolhido entre advogados com mais de 5 anos de experiência (art. 7º). Quem decide é o juiz togado: no cível, a decisão do leigo só vale depois de homologada (art. 40).",
      },
      {
        termo: "Conexão com crime mais grave",
        faz: "Se a infração de menor potencial estiver ligada a outra mais grave (conexão ou continência), os processos podem ser reunidos no juízo comum ou no tribunal do júri. Mesmo lá, a transação penal e a composição dos danos devem ser observadas (art. 60, parágrafo único; Lei 10.259, art. 2º, parágrafo único).",
        pista: "A regra entrou nas duas leis com a Lei 11.313/2006.",
      },
      {
        parte: "2. Critérios e atos do processo",
        termo: "Critérios",
        faz: "Oralidade, simplicidade, informalidade, economia processual e celeridade, buscando a reparação do dano e a pena não privativa de liberdade (art. 62).",
        pista: "A “simplicidade” foi acrescentada pela Lei 13.603/2018. São cinco critérios.",
      },
      {
        termo: "Lugar e horário",
        faz: "A competência é do Juizado do lugar em que a infração foi praticada (art. 63). Os atos são públicos e podem ser feitos à noite e em qualquer dia da semana, conforme a organização judiciária (art. 64).",
      },
      {
        termo: "Validade dos atos",
        faz: "O ato vale se cumpriu sua finalidade, e não se declara nulidade sem prejuízo (art. 65, § 1º). Atos em outra comarca podem ser pedidos por qualquer meio hábil de comunicação (§ 2º). Só os atos essenciais vão por escrito; a audiência de instrução pode ser gravada (§ 3º).",
      },
      {
        termo: "Citação e intimação",
        faz: "A citação é pessoal, feita no próprio Juizado sempre que possível, ou por mandado (art. 66). A intimação vai por correspondência com aviso de recebimento, por oficial de justiça sem precisar de mandado ou precatória, ou por qualquer meio idôneo. Na pessoa jurídica, basta entregar ao encarregado da recepção, que deve ser identificado (art. 67).",
        pista: "O que acontece na audiência já vale como intimação para as partes, os interessados e os defensores (art. 67, parágrafo único).",
      },
      {
        termo: "Advogado obrigatório",
        faz: "A intimação do autor do fato e a citação do acusado avisam que ele deve vir com advogado; se não tiver, recebe defensor público (art. 68).",
        pista: "No Juizado Cível, o advogado é dispensável nas causas de até 20 salários mínimos (art. 9º). No Criminal, a defesa técnica é sempre exigida.",
      },
      {
        parte: "3. Fase policial",
        termo: "Termo circunstanciado",
        faz: "A autoridade policial lavra o termo e o envia logo ao Juizado, com o autor e a vítima, sem inquérito, e requisita os exames periciais necessários (art. 69).",
        pista: "Para a PRF, está no art. 58, XII, do Anexo I do Decreto 11.348/2023.",
      },
      {
        termo: "Quem lavra o termo",
        faz: "O termo é um relato simples do fato, com a identificação dos envolvidos. O STF já decidiu que lavrá-lo não é exclusivo da polícia judiciária: a PRF (ADI 6264) e a polícia militar (ADI 5637) também podem.",
      },
      {
        termo: "Sem flagrante nem fiança",
        faz: "Se o autor for encaminhado ao Juizado ou assumir o compromisso de comparecer, não se impõe prisão em flagrante nem se exige fiança (art. 69, parágrafo único).",
        pista: "Se o autor se recusar a ir ao Juizado e também a assumir o compromisso, a prisão em flagrante e a fiança voltam a ser possíveis.",
      },
      {
        termo: "Afastamento do lar",
        faz: "Em caso de violência doméstica, o juiz pode determinar, como cautela, que o autor saia do lar, do domicílio ou do local de convivência com a vítima (art. 69, parágrafo único, Lei 10.455/2002).",
        pista: "Isso vale para a violência doméstica fora da Lei 11.340/2006. Se a vítima for mulher, a Lei 9.099 não se aplica (art. 41 daquela lei).",
      },
      {
        termo: "Droga para consumo pessoal",
        faz: "No porte de droga para consumo (Lei 11.343/2006, art. 28), não se impõe prisão em flagrante: lavra-se o termo circunstanciado e o autor vai ao juízo ou assume o compromisso de comparecer (art. 48, § 2º). Sem juiz presente, a autoridade policial toma as providências no local, sem deter o agente (§ 3º).",
        pista: "Diferente da regra geral, a lei não põe condição: mesmo sem o compromisso, não se lavra o flagrante.",
      },
      {
        parte: "4. Audiência preliminar",
        termo: "Audiência preliminar",
        faz: "Se não der para fazer a audiência na hora, marca-se data próxima, e autor e vítima já saem cientes (art. 70); quem faltar é intimado (art. 71). Na audiência, com o Ministério Público, o autor, a vítima e, se possível, o responsável civil, todos com advogados, o juiz explica a composição dos danos e a proposta de pena não privativa de liberdade (art. 72).",
      },
      {
        termo: "Conciliador",
        faz: "A conciliação é conduzida pelo juiz ou por conciliador sob sua orientação. Conciliadores são auxiliares da Justiça, recrutados pela lei local de preferência entre bacharéis em Direito, excluídos os que trabalham na administração da Justiça Criminal (art. 73).",
      },
      {
        termo: "Composição dos danos",
        faz: "Acordo homologado por sentença irrecorrível, que vale como título a executar no juízo cível. Na ação privada ou pública condicionada, ele acarreta renúncia à queixa ou à representação (art. 74).",
        pista: "Na ação pública incondicionada, o acordo civil não impede a transação penal nem a denúncia.",
      },
      {
        termo: "Representação",
        faz: "Feita de forma verbal na audiência e reduzida a termo. Se não for oferecida ali, não há decadência: pode vir no prazo legal (art. 75). Lesões corporais leves e culposas dependem de representação (art. 88).",
        pista: "O prazo legal, em regra, é de 6 meses a contar do dia em que a vítima soube quem é o autor (CP, art. 103; CPP, art. 38).",
      },
      {
        parte: "5. Transação penal",
        termo: "Transação penal",
        faz: "O Ministério Público propõe pena restritiva de direitos ou multa. Não cabe a quem foi condenado por crime a pena privativa de liberdade por sentença definitiva, a quem teve o benefício nos últimos 5 anos ou se as circunstâncias não indicarem. Não gera reincidência nem consta da certidão de antecedentes (art. 76).",
        pista: "Quem propõe é o Ministério Público, não o juiz. O registro serve só para impedir novo benefício em 5 anos (§ 4º).",
      },
      {
        termo: "Como a transação corre",
        faz: "Se a multa for a única pena aplicável, o juiz pode reduzi-la até a metade (art. 76, § 1º). O autor e o defensor aceitam, e a proposta vai ao juiz (§ 3º). Da sentença que a acolhe cabe apelação (§ 5º). A sanção não tem efeitos civis: a vítima pode ir ao juízo cível (§ 6º).",
        pista: "Na composição e na transação, as despesas do processo são reduzidas, conforme a lei estadual (art. 87).",
      },
      {
        termo: "Descumprimento da transação",
        faz: "A homologação não faz coisa julgada material. Se o autor descumpre o acordo, volta-se à situação anterior, e o Ministério Público pode oferecer denúncia ou requisitar inquérito (STF, Súmula Vinculante 35).",
        pista: "Quando cabe transação penal, não cabe acordo de não persecução penal (CPP, art. 28-A, § 2º, I).",
      },
      {
        termo: "Transação na ação privada",
        faz: "A lei fala em representação ou ação pública incondicionada, mas a jurisprudência majoritária admite a transação também na ação privada. Nesse caso, quem decide propor é o ofendido, e não o Ministério Público nem o juiz.",
      },
      {
        parte: "6. Procedimento sumariíssimo",
        termo: "Procedimento sumariíssimo",
        faz: "Denúncia oral com base no termo, sem inquérito; o boletim médico pode suprir o exame de corpo de delito (art. 77). Não há citação por edital: o acusado não encontrado vai ao juízo comum (art. 66).",
        pista: "A denúncia oral vem quando não houve transação, porque o autor faltou ou porque o benefício não coube ou não foi aceito, desde que não faltem diligências indispensáveis (art. 77, caput).",
      },
      {
        termo: "Caso complexo e queixa oral",
        faz: "Se a complexidade ou as circunstâncias do caso não permitirem a denúncia, o Ministério Público pede que as peças sigam ao juízo comum (art. 77, § 2º). Na ação privada, a vítima pode oferecer queixa oral, e o juiz também pode mandar o caso ao juízo comum se ele for complexo (§ 3º).",
        pista: "São dois caminhos para o juízo comum: acusado não encontrado para a citação (art. 66) e caso complexo (art. 77, §§ 2º e 3º).",
      },
      {
        termo: "Citação na audiência",
        faz: "A denúncia ou queixa é reduzida a termo e o acusado recebe uma cópia: com ela, fica citado e já sabe a data da audiência de instrução e julgamento. O Ministério Público, a vítima, o responsável civil e os advogados também ficam cientes (art. 78).",
        pista: "Se o acusado não estiver presente, é citado pelos arts. 66 e 68 e deve trazer suas testemunhas ou pedir a intimação delas pelo menos 5 dias antes da audiência (art. 78, § 1º).",
      },
      {
        termo: "Nova chance de acordo",
        faz: "Se na fase preliminar não houve como tentar a conciliação nem a proposta do Ministério Público, isso é feito no começo da audiência de instrução e julgamento, pelas regras dos arts. 72 a 75 (art. 79).",
      },
      {
        termo: "Nenhum ato adiado",
        faz: "Na audiência de instrução e julgamento, nenhum ato é adiado. Se for indispensável, o juiz manda conduzir à força quem deveria comparecer (art. 80).",
        pista: "O STF proibiu a condução coercitiva do investigado ou do réu para interrogatório (ADPFs 395 e 444, 2018). Testemunhas e vítima ainda podem ser conduzidas.",
      },
      {
        termo: "Ordem da audiência",
        faz: "Primeiro o defensor responde à acusação; depois o juiz recebe ou rejeita a denúncia ou queixa. Recebida, ouvem-se a vítima e as testemunhas de acusação e de defesa, interroga-se o acusado, se presente, e seguem os debates orais e a sentença (art. 81).",
        pista: "A defesa fala antes de a denúncia ser recebida, e o interrogatório vem depois das testemunhas.",
      },
      {
        termo: "Provas e dignidade da vítima",
        faz: "Todas as provas são produzidas na audiência, e o juiz pode limitar ou excluir as excessivas, impertinentes ou protelatórias (art. 81, § 1º). Todos devem respeitar a dignidade da vítima, sob pena de responsabilidade civil, penal e administrativa: são proibidas falas sobre fatos alheios ao processo e linguagem, informações ou material que ofendam a vítima ou as testemunhas (§ 1º-A).",
        pista: "O § 1º-A veio da Lei 14.245/2021, que criou regra igual no CPP.",
      },
      {
        termo: "Termo e sentença",
        faz: "Da audiência se lavra um termo, assinado pelo juiz e pelas partes, com um breve resumo dos fatos relevantes e a sentença (art. 81, § 2º). A sentença dispensa o relatório, mas deve citar os elementos que convenceram o juiz (§ 3º).",
      },
      {
        parte: "7. Recursos e execução",
        termo: "Apelação",
        faz: "Em 10 dias, por petição escrita com as razões e o pedido, podendo ser julgada por turma de 3 juízes de primeiro grau (art. 82).",
        pista: "Cabe contra a rejeição da denúncia ou queixa e contra a sentença. As razões vão junto com a petição; no CPP, são 5 dias para apelar e 8 para as razões (arts. 593 e 600).",
      },
      {
        termo: "Resposta e julgamento",
        faz: "O recorrido tem 10 dias para responder por escrito (art. 82, § 2º). As partes podem pedir a transcrição da gravação da audiência (§ 3º) e são intimadas da data do julgamento pela imprensa (§ 4º). Se a turma confirmar a sentença pelos próprios fundamentos, a súmula do julgamento serve de acórdão (§ 5º).",
      },
      {
        termo: "Embargos de declaração",
        faz: "Cabem quando a sentença ou o acórdão tiver obscuridade, contradição ou omissão. São opostos por escrito ou oralmente, em 5 dias da ciência da decisão, e interrompem o prazo para os outros recursos. Erros materiais podem ser corrigidos de ofício (art. 83).",
        pista: "Antes do CPC de 2015 (Lei 13.105/2015), cabiam também por “dúvida” e apenas suspendiam o prazo.",
      },
      {
        termo: "Recursos aos tribunais",
        faz: "Contra a decisão da turma recursal não cabe recurso especial ao STJ (Súmula 203 do STJ), mas cabe recurso extraordinário ao STF (Súmula 640 do STF).",
        pista: "O mandado de segurança contra ato do Juizado é julgado pela própria turma recursal (Súmula 376 do STJ).",
      },
      {
        termo: "Pagamento da multa",
        faz: "Se a pena for só de multa, o pagamento é feito na Secretaria do Juizado. Pago, o juiz declara extinta a punibilidade, e a condenação não fica nos registros criminais, salvo para requisição judicial (art. 84). As penas privativas de liberdade e restritivas de direitos, ou a multa junto com elas, são executadas no órgão competente (art. 86).",
        pista: "O art. 85 ainda fala em converter a multa não paga em prisão, mas isso não vale mais: a multa é dívida de valor (CP, art. 51).",
      },
      {
        parte: "8. Suspensão condicional do processo",
        termo: "Suspensão condicional do processo",
        faz: "Nos crimes com pena mínima de até 1 ano, dentro ou fora da lei, o Ministério Público pode propor a suspensão por 2 a 4 anos, com condições. A prescrição não corre nesse período (art. 89).",
        pista: "Vale também para crimes que não são de menor potencial ofensivo, como a embriaguez ao volante (CTB, art. 306: 6 meses a 3 anos).",
      },
      {
        termo: "Requisitos da suspensão",
        faz: "O Ministério Público propõe ao oferecer a denúncia, se o acusado não estiver sendo processado nem tiver sido condenado por outro crime e se estiverem presentes os requisitos da suspensão condicional da pena (CP, art. 77). O acusado e o defensor aceitam na presença do juiz, que recebe a denúncia e suspende o processo (art. 89, caput e § 1º).",
        pista: "Se o acusado não aceitar, o processo segue normalmente (§ 7º).",
      },
      {
        termo: "Condições do período de prova",
        faz: "Reparar o dano, salvo impossibilidade; não frequentar certos lugares; não sair da comarca onde mora sem autorização do juiz; e comparecer pessoalmente ao juízo todo mês para informar e justificar suas atividades (art. 89, § 1º). O juiz pode fixar outras condições adequadas ao fato e à situação da pessoa (§ 2º).",
      },
      {
        termo: "Revogação e extinção",
        faz: "A revogação é obrigatória se o beneficiário passar a ser processado por outro crime ou não reparar o dano sem motivo justificado (§ 3º). É facultativa se for processado por contravenção ou descumprir outra condição (§ 4º). Terminado o prazo sem revogação, o juiz declara extinta a punibilidade (§ 5º).",
        pista: "Processo por crime: revogação obrigatória. Processo por contravenção: revogação facultativa.",
      },
      {
        termo: "Súmulas da suspensão",
        faz: "No concurso de crimes ou no crime continuado, não cabe se a pena mínima, somada ou com o aumento, passar de 1 ano (STJ, Súmula 243; STF, Súmula 723, com o aumento mínimo de 1/6). Se o promotor se recusar a propor, o juiz que discordar manda a questão ao Procurador-Geral (STF, Súmula 696). Cabe também na desclassificação do crime e na procedência parcial da acusação (STJ, Súmula 337).",
      },
      {
        parte: "9. Onde a lei não se aplica",
        termo: "Onde a lei não se aplica",
        faz: "Na Justiça Militar (art. 90-A) e nos crimes com violência doméstica e familiar contra a mulher, qualquer que seja a pena (Lei 11.340/2006, art. 41).",
        pista: "Na Lei Maria da Penha não cabem transação penal nem suspensão condicional do processo (STJ, Súmula 536), e a lesão corporal contra a mulher no ambiente doméstico, mesmo leve, é de ação pública incondicionada (STJ, Súmula 542).",
      },
      {
        termo: "Processos já em curso",
        faz: "A lei não se aplica aos processos penais cuja instrução já tinha começado quando ela entrou em vigor (art. 90). O STF decidiu que essa trava não alcança as regras penais mais favoráveis ao réu, como a exigência de representação, que retroagem (ADI 1719).",
        pista: "O CP e o CPP se aplicam de forma subsidiária, no que não forem incompatíveis com a Lei 9.099 (art. 92).",
      },
      {
        termo: "Estatuto da Pessoa Idosa",
        faz: "Nos crimes do Estatuto da Pessoa Idosa (Lei 10.741/2003) com pena máxima de até 4 anos, segue-se o procedimento da Lei 9.099 (art. 94).",
        pista: "O STF decidiu que só o rito rápido se aplica: o autor não ganha composição, transação nem os outros benefícios da lei (ADI 3096).",
      },
      {
        parte: "10. Crimes de trânsito",
        termo: "Lesão culposa no trânsito",
        faz: "Aplicam-se os arts. 74, 76 e 88 da Lei 9.099, salvo se o motorista estiver sob influência de álcool ou droga, em racha ou a mais de 50 km/h acima do limite; nesses casos, há inquérito (CTB, art. 291).",
        pista: "As exceções do § 1º: álcool ou outra substância psicoativa que cause dependência (I); corrida, disputa, exibição ou manobra de perícia não autorizada em via pública (II); velocidade mais de 50 km/h acima da máxima da via (III).",
      },
      {
        termo: "Regra geral do CTB",
        faz: "Aos crimes de trânsito do CTB aplicam-se as normas gerais do CP e do CPP, se o capítulo não dispuser de outra forma, e a Lei 9.099, no que couber (art. 291, caput).",
        pista: "O juiz fixa a pena-base pelo art. 59 do CP, com atenção especial à culpabilidade e às circunstâncias e consequências do crime (art. 291, § 4º, Lei 13.546/2017).",
      },
      {
        termo: "Crimes de trânsito de menor potencial",
        faz: "A lesão corporal culposa simples (art. 303, caput: 6 meses a 2 anos) e os crimes dos arts. 304, 305, 307, 309, 310, 311 e 312, todos com pena de 6 meses a 1 ano, são de menor potencial ofensivo.",
        pista: "Embriaguez ao volante (art. 306) e racha (art. 308) têm pena máxima de 3 anos: não são de menor potencial, mas admitem a suspensão condicional do processo.",
      },
      {
        termo: "Socorro à vítima",
        faz: "No sinistro de trânsito com vítima, o condutor que prestar pronto e integral socorro não é preso em flagrante nem paga fiança (CTB, art. 301).",
        pista: "A palavra “sinistro” veio com a Lei 14.599/2023; antes, o artigo falava em “acidente”.",
      },
      {
        parte: "11. Juizados Especiais Federais",
        termo: "Juizados Federais",
        faz: "O Juizado Especial Federal Criminal julga as infrações de menor potencial de competência da Justiça Federal. Contravenção vai à Justiça Estadual, mesmo contra a União. O Cível julga causas federais de até 60 salários mínimos (Lei 10.259/2001, arts. 2º e 3º).",
        pista: "Contravenção nunca vai à Justiça Federal (CF, art. 109, IV; STJ, Súmula 38). A Lei 9.099 se aplica aos Juizados Federais no que não conflitar com a Lei 10.259 (art. 1º).",
      },
      {
        termo: "Fora do Juizado Federal Cível",
        faz: "Não entram: as causas do art. 109, II, III e XI, da Constituição (Estado estrangeiro ou organismo internacional, tratados e direitos indígenas); mandado de segurança, desapropriação, divisão e demarcação, ações populares, execuções fiscais, improbidade e ações sobre direitos difusos, coletivos ou individuais homogêneos (art. 3º, § 1º, I); bens imóveis da União, autarquias e fundações federais (II); anulação de ato administrativo federal, salvo o previdenciário e o lançamento fiscal (III); e impugnação de demissão de servidor civil ou de sanção disciplinar a militar (IV).",
      },
      {
        termo: "Valor e competência absoluta",
        faz: "Em obrigações que ainda vão vencer, a soma de 12 parcelas não pode passar de 60 salários mínimos (art. 3º, § 2º). Onde houver vara do Juizado Federal instalada, a competência dele é absoluta (§ 3º).",
        pista: "No Juizado estadual cível, o limite é de 40 salários mínimos, e o autor pode optar por ele (Lei 9.099, art. 3º).",
      },
      {
        termo: "Partes no Juizado Federal",
        faz: "Podem ser autores as pessoas físicas, as microempresas e as empresas de pequeno porte. Podem ser réus a União, as autarquias, as fundações e as empresas públicas federais (art. 6º).",
        pista: "Sociedade de economia mista federal não é ré no Juizado Federal: responde na Justiça Estadual (STJ, Súmula 42). Nos Juizados estaduais, o microempreendedor individual também pode ser autor (Lei 9.099, art. 8º, § 1º, II).",
      },
      {
        termo: "Prazos e representantes",
        faz: "Os entes públicos não têm prazo diferenciado, nem para recorrer, e a citação para a audiência de conciliação deve ser feita com pelo menos 30 dias de antecedência (art. 9º). As partes podem indicar por escrito representantes, advogados ou não, e os representantes dos entes federais podem conciliar, transigir ou desistir (art. 10). Não há reexame necessário (art. 13).",
        pista: "Na audiência de composição dos danos de um crime, o representante do ente público que comparecer pode acordar, desistir ou transigir (art. 11, parágrafo único).",
      },
    ],
    cuidado:
      "O prazo de 30 dias para representar, do art. 91, valeu só para os processos em curso quando a lei entrou em vigor; a regra geral é o art. 75. Nas exceções do art. 291, § 1º, do CTB, a lesão culposa no trânsito não admite composição, transação nem a exigência de representação.",
  },
  questoes: [
    {
      topico: "Lei 9.099/1995",
      subassunto: "Menor potencial ofensivo",
      dificuldade: 4,
      raciocinio: "Art. 61: contravenções e crimes com pena máxima de até 2 anos.",
      enunciado:
        "Numa fiscalização numa rodovia federal, a PRF registra várias ocorrências. Pela Lei 9.099/1995, é infração de menor potencial ofensivo, sujeita a termo circunstanciado:",
      alternativas: [
        "conduzir veículo com capacidade psicomotora alterada por álcool, punido com detenção de seis meses a três anos",
        "lesão corporal culposa grave na direção sob efeito de álcool, punida com reclusão de dois a cinco anos",
        "receptação de carga roubada, punida com reclusão de um a quatro anos e multa",
        "dirigir sem habilitação gerando perigo de dano, punido com detenção de seis meses a um ano, ou multa",
        "transportar droga para venda, punido com reclusão de cinco a quinze anos e multa",
      ],
      correta: 3,
      explicacao:
        "São de menor potencial ofensivo as contravenções penais e os crimes com pena máxima de até 2 anos, cumulada ou não com multa (Lei 9.099/1995, art. 61). O art. 309 do CTB tem pena máxima de 1 ano.",
      explicacaoErradas:
        "A embriaguez ao volante tem pena máxima de “três anos”. A lesão culposa grave sob álcool tem pena de “dois a cinco anos”. A receptação vai até “quatro anos”. O tráfico vai até “quinze anos”. Todas passam de 2 anos.",
      pegadinha: "Pena mínima baixa não basta: conta a máxima.",
      conhecimento: "Desde a Lei 11.313/2006, crimes com procedimento especial também entram no conceito, se a pena máxima não passar de 2 anos.",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Prisão e fiança",
      dificuldade: 4,
      raciocinio: "Art. 69, parágrafo único: compromisso de comparecer afasta o flagrante e a fiança.",
      enunciado:
        "Na rodovia federal, a PRF flagra um condutor no crime do art. 309 do CTB (dirigir sem habilitação gerando perigo de dano) e lavra o termo circunstanciado. Pelo art. 69 da Lei 9.099/1995, o autor do fato:",
      alternativas: [
        "é liberado sem prisão e sem fiança, se assumir o compromisso de comparecer ao Juizado",
        "fica preso até pagar a fiança, que nas infrações de menor potencial é sempre obrigatória",
        "é levado à delegacia para o auto de prisão em flagrante, pois o termo só vem depois",
        "é liberado só se a vítima concordar, pois a soltura depende da composição dos danos",
        "é liberado sem compromisso nenhum, e o Juizado depois o procura pelo endereço informado",
      ],
      correta: 0,
      explicacao:
        "Ao autor do fato que, após a lavratura do termo, for imediatamente encaminhado ao Juizado ou assumir o compromisso de a ele comparecer, não se impõe prisão em flagrante nem se exige fiança (Lei 9.099/1995, art. 69, parágrafo único).",
      explicacaoErradas:
        "A fiança não é “sempre obrigatória”: a lei diz que não se exige. Com o termo e o compromisso, não se lavra o “auto de prisão em flagrante”. A soltura não depende de a vítima concordar, ao contrário de “só se a vítima concordar”. A lei exige o compromisso, por isso “sem compromisso nenhum” erra.",
      pegadinha: "Se o autor se recusar a assumir o compromisso, o flagrante pode ser lavrado.",
      conhecimento: "O termo circunstanciado substitui o inquérito policial nas infrações de menor potencial ofensivo.",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Composição dos danos",
      dificuldade: 5,
      raciocinio: "CTB, art. 291, § 1º, aplica os arts. 74, 76 e 88; o acordo homologado vale como renúncia à representação.",
      enunciado:
        "Num sinistro numa rodovia federal, um motorista sóbrio e dentro do limite de velocidade causa lesão corporal culposa num pedestre. Na audiência preliminar, os dois fazem acordo de indenização, homologado pelo juiz. Pela Lei 9.099/1995 e pelo art. 291 do CTB:",
      alternativas: [
        "o Ministério Público ainda pode oferecer denúncia, pois a lesão culposa no trânsito é de ação pública incondicionada",
        "a vítima pode recorrer da homologação por apelação, se achar o valor baixo depois",
        "a homologação vale como confissão e gera reincidência para o motorista",
        "o acordo só vale se for aprovado também pela autoridade de trânsito que atendeu o sinistro",
        "o acordo vale como renúncia à representação e, se não for pago, é executado no juízo cível",
      ],
      correta: 4,
      explicacao:
        "À lesão corporal culposa no trânsito, fora das exceções do CTB, aplicam-se os arts. 74, 76 e 88 da Lei 9.099/1995 (CTB, art. 291, § 1º). A ação depende de representação (art. 88), e o acordo homologado por sentença irrecorrível acarreta renúncia ao direito de representação e vale como título a executar no juízo cível (art. 74).",
      explicacaoErradas:
        "A ação não é “pública incondicionada”: depende de representação. A sentença que homologa é irrecorrível, por isso “recorrer da homologação por apelação” erra. Ela não “vale como confissão” nem gera reincidência. Não há aprovação da “autoridade de trânsito”.",
      pegadinha: "Acordo homologado na ação condicionada encerra a via penal.",
      conhecimento: "A pena da lesão corporal culposa na direção de veículo é de detenção de 6 meses a 2 anos, mais a suspensão ou proibição de obter a habilitação (CTB, art. 303).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Lesão culposa no trânsito",
      dificuldade: 5,
      raciocinio: "CTB, art. 291, §§ 1º e 2º: sob álcool, não se aplicam os arts. 74, 76 e 88 e instaura-se inquérito.",
      enunciado:
        "Na rodovia federal, um motorista com capacidade psicomotora alterada por álcool causa lesão corporal culposa numa ciclista. Pelo art. 291 do CTB, quanto às regras da Lei 9.099/1995:",
      alternativas: [
        "aplicam-se normalmente a composição dos danos e a transação penal, pois a pena máxima é de dois anos",
        "não se aplicam a composição, a transação e a exigência de representação, e deve haver inquérito",
        "aplica-se só a composição dos danos, e a transação depende de pedido da vítima ao juiz",
        "não se aplicam, mas o próprio policial pode propor um acordo de reparação à vítima no local",
        "aplicam-se todas, mas o termo circunstanciado deve ser lavrado pelo delegado, e não pela PRF",
      ],
      correta: 1,
      explicacao:
        "Os arts. 74, 76 e 88 da Lei 9.099/1995 (composição, transação e representação) aplicam-se à lesão culposa no trânsito, exceto se o agente estiver sob influência de álcool ou outra substância psicoativa, em racha ou a mais de 50 km/h acima do limite (CTB, art. 291, § 1º). Nesses casos, deve ser instaurado inquérito policial (§ 2º).",
      explicacaoErradas:
        "Sob álcool, a composição e a transação não se aplicam, por isso “aplicam-se normalmente” erra. Também não vale “só a composição dos danos”. O policial não faz acordo, ao contrário de “o próprio policial pode propor um acordo”. Nada se aplica, e o caso pede inquérito, o que afasta “aplicam-se todas”.",
      pegadinha: "Álcool, racha ou mais de 50 km/h acima do limite: sem os benefícios e com inquérito.",
      conhecimento: "Se a lesão for grave ou gravíssima e o motorista estiver sob álcool, a pena é de reclusão de 2 a 5 anos (CTB, art. 303, § 2º).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Representação",
      dificuldade: 5,
      raciocinio: "Art. 75, parágrafo único: não representar na audiência não gera decadência.",
      enunciado:
        "Após lesão corporal culposa no trânsito, sem nenhuma das exceções do CTB, a vítima vai à audiência preliminar, não há composição dos danos e ela não quer representar naquele momento. Pela Lei 9.099/1995:",
      alternativas: [
        "o direito decai na hora, pois a representação só pode ser feita na própria audiência",
        "ela terá trinta dias contados da audiência para representar, sob pena de decadência",
        "não há decadência, e ela pode representar depois, dentro do prazo previsto em lei",
        "o Ministério Público pode oferecer denúncia mesmo sem a representação da vítima",
        "ela só pode representar por escrito, com advogado, em petição dirigida ao juiz",
      ],
      correta: 2,
      explicacao:
        "Não obtida a composição, a vítima pode representar de forma verbal na hora. O não oferecimento da representação na audiência preliminar não implica decadência do direito, que poderá ser exercido no prazo previsto em lei (Lei 9.099/1995, art. 75).",
      explicacaoErradas:
        "O direito não “decai na hora”. Os “trinta dias” do art. 91 valeram só para os processos em curso quando a lei entrou em vigor. Sem representação, o Ministério Público não pode denunciar. A representação pode ser verbal, por isso “só pode representar por escrito” erra.",
      pegadinha: "O prazo de 30 dias do art. 91 é regra de transição.",
      conhecimento: "Em regra, o prazo para representar é de 6 meses, contados do dia em que a vítima sabe quem é o autor do fato (CPP, art. 38).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Transação penal",
      dificuldade: 4,
      raciocinio: "Art. 76, § 2º, II: quem teve o benefício nos últimos 5 anos não recebe outro.",
      enunciado:
        "Um motorista flagrado pela PRF em infração de menor potencial ofensivo aceitou transação penal há três anos, por outro fato, e pagou a multa. Pela Lei 9.099/1995, uma nova transação:",
      alternativas: [
        "cabe, pois a transação anterior não gera reincidência nem consta de antecedentes",
        "cabe, pois o impedimento da lei vale só por um ano depois do cumprimento",
        "não cabe nunca mais, pois quem aceita transação perde o benefício para sempre",
        "cabe, desde que a vítima concorde e o juiz dispense o requisito do prazo",
        "não cabe, pois ele já recebeu o benefício nos últimos cinco anos",
      ],
      correta: 4,
      explicacao:
        "Não se admite a proposta se o agente tiver sido beneficiado anteriormente, no prazo de cinco anos, pela transação (Lei 9.099/1995, art. 76, § 2º, II). A pena é registrada justamente para impedir novo benefício nesse prazo (§ 4º).",
      explicacaoErradas:
        "Ela não gera reincidência, mas fica registrada para impedir o benefício por 5 anos, por isso “cabe, pois a transação anterior” erra. O prazo não é “só por um ano”. O impedimento não é “para sempre”. A vítima e o juiz não dispensam o prazo legal.",
      pegadinha: "Sem reincidência, mas com registro para barrar nova transação em 5 anos.",
      conhecimento: "Também não cabe a transação a quem foi condenado, por crime, a pena privativa de liberdade por sentença definitiva (art. 76, § 2º, I).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Efeitos da transação",
      dificuldade: 5,
      raciocinio: "Art. 76, §§ 4º a 6º: sem reincidência, sem certidão e sem efeitos civis; cabe apelação.",
      enunciado:
        "Sobre os efeitos da sentença que aplica a pena aceita pelo autor do fato na transação penal, a Lei 9.099/1995 estabelece que ela:",
      alternativas: [
        "não gera reincidência, não consta de certidão de antecedentes e não tem efeitos civis",
        "gera reincidência por cinco anos e consta da certidão de antecedentes durante todo esse período",
        "vale como título executivo, e a vítima pode cobrar a indenização no juízo cível",
        "equivale a confissão de culpa e pode ser usada como prova numa ação de indenização",
        "não admite recurso nenhum, pois é homologação de acordo entre o autor e o Ministério Público",
      ],
      correta: 0,
      explicacao:
        "A pena aplicada na transação não importa em reincidência e é registrada só para impedir o mesmo benefício por cinco anos (art. 76, § 4º). Não consta de certidão de antecedentes, salvo para esse fim, e não tem efeitos civis, cabendo aos interessados a ação cível (§ 6º). Dessa sentença cabe apelação (§ 5º).",
      explicacaoErradas:
        "A transação não “gera reincidência”. Ela não tem efeitos civis, por isso não “vale como título executivo”. Não equivale a “confissão de culpa”. Cabe a apelação do art. 82, ao contrário de “não admite recurso nenhum”.",
      pegadinha: "Título executivo é a composição dos danos, não a transação penal.",
      conhecimento: "A composição dos danos civis, homologada, é que vale como título a executar no juízo cível (art. 74).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Procedimento sumariíssimo",
      dificuldade: 4,
      raciocinio: "Art. 77, § 1º: denúncia com base no termo, sem inquérito; boletim médico supre o exame de corpo de delito.",
      enunciado:
        "Depois de um termo circunstanciado lavrado pela PRF, não houve transação penal porque o autor do fato faltou à audiência preliminar. Pela Lei 9.099/1995, a denúncia do Ministério Público:",
      alternativas: [
        "depende de inquérito policial, pois o termo circunstanciado não basta para formar a acusação",
        "exige sempre exame de corpo de delito, mesmo havendo boletim médico sobre a lesão",
        "só pode ser oferecida por escrito, depois de instaurado inquérito pela Polícia Civil ou Federal",
        "pode ser oral, baseada no termo, e o boletim médico pode suprir o exame de corpo de delito",
        "não pode ser oferecida, pois a falta do autor encerra o caso no Juizado",
      ],
      correta: 3,
      explicacao:
        "Sem aplicação de pena pela ausência do autor, o Ministério Público oferece de imediato denúncia oral (art. 77). Ela se baseia no termo de ocorrência, com dispensa do inquérito, e prescinde do exame de corpo de delito quando a materialidade estiver aferida por boletim médico ou prova equivalente (§ 1º).",
      explicacaoErradas:
        "O inquérito é dispensado, por isso “depende de inquérito policial” erra. O exame não é exigido “sempre”. A denúncia pode ser oral, ao contrário de “só pode ser oferecida por escrito”. A ausência do autor leva à denúncia, e não encerra o caso.",
      pegadinha: "Ausência na audiência preliminar não arquiva: leva à denúncia oral.",
      conhecimento: "Se o caso for complexo, o Ministério Público pode pedir o envio das peças ao juízo comum (art. 77, § 2º).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Citação",
      dificuldade: 4,
      raciocinio: "Art. 66: citação pessoal; acusado não encontrado → juízo comum.",
      enunciado:
        "Oferecida a denúncia no Juizado Especial Criminal, o oficial de justiça não encontra o acusado em nenhum dos endereços conhecidos. Pela Lei 9.099/1995:",
      alternativas: [
        "o juiz manda citá-lo por edital, com prazo de quinze dias, e o processo segue no Juizado",
        "o juiz encaminha as peças ao juízo comum, pois no Juizado não há citação por edital",
        "o processo segue à revelia no Juizado, e o acusado é julgado sem ter sido citado",
        "o juiz declara extinta a punibilidade, pois o rito exige a presença do acusado",
        "o Ministério Público passa a propor a transação penal por carta ao último endereço conhecido",
      ],
      correta: 1,
      explicacao:
        "A citação é pessoal, feita no próprio Juizado sempre que possível, ou por mandado. Não encontrado o acusado, o juiz encaminha as peças existentes ao juízo comum para a adoção do procedimento previsto em lei (Lei 9.099/1995, art. 66).",
      explicacaoErradas:
        "O Juizado não faz citação “por edital”. O processo não segue “à revelia” sem citação. Não há extinção da punibilidade por esse motivo. A transação não é proposta “por carta”.",
      pegadinha: "Acusado sumido: o caso sai do Juizado.",
      conhecimento: "A intimação pode ser feita por correspondência com aviso de recebimento ou por qualquer meio idôneo de comunicação (art. 67).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Apelação",
      dificuldade: 5,
      raciocinio: "Art. 82: apelação em 10 dias, com razões, julgada por turma de 3 juízes de primeiro grau.",
      enunciado:
        "O réu é condenado no Juizado Especial Criminal e quer apelar. Pelo art. 82 da Lei 9.099/1995, a apelação:",
      alternativas: [
        "é interposta em cinco dias, e as razões vêm depois, em oito dias, como no rito comum do Código de Processo Penal",
        "vai ao Tribunal de Justiça, em quinze dias, por petição escrita sem necessidade de razões",
        "é interposta em dez dias, com as razões, e pode ser julgada por turma de três juízes de primeiro grau",
        "não cabe, pois as decisões do Juizado são irrecorríveis para garantir a celeridade",
        "cabe só da rejeição da denúncia, e não da sentença que condena o réu",
      ],
      correta: 2,
      explicacao:
        "Da rejeição da denúncia ou queixa e da sentença cabe apelação, que poderá ser julgada por turma de três juízes em exercício no primeiro grau. Ela é interposta em dez dias, por petição escrita com as razões e o pedido, e o recorrido responde em dez dias (Lei 9.099/1995, art. 82).",
      explicacaoErradas:
        "O prazo não é de “cinco dias” com razões depois. A apelação não vai ao “Tribunal de Justiça” e exige razões. Cabe recurso, por isso “irrecorríveis” erra. Cabe também da sentença, e não “só da rejeição da denúncia”.",
      pegadinha: "No Juizado, apelação e razões vêm juntas, em 10 dias.",
      conhecimento: "Se a sentença for confirmada pelos próprios fundamentos, a súmula do julgamento serve de acórdão (art. 82, § 5º).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Suspensão condicional do processo",
      dificuldade: 5,
      raciocinio: "Art. 89: pena mínima de até 1 ano, ainda que o crime não seja de menor potencial.",
      enunciado:
        "A PRF prende em flagrante um motorista com capacidade psicomotora alterada por álcool (art. 306 do CTB: detenção de seis meses a três anos). Ele nunca foi processado nem condenado. Quanto aos institutos da Lei 9.099/1995:",
      alternativas: [
        "cabe transação penal, pois a pena mínima de seis meses basta para torná-lo de menor potencial ofensivo",
        "não cabe nenhum benefício, pois a pena máxima passa de dois anos e o crime é considerado grave",
        "cabe a suspensão do processo por um a dois anos, proposta pelo juiz de ofício",
        "cabe composição dos danos civis, que extingue a punibilidade do motorista",
        "cabe propor a suspensão condicional do processo, pois a pena mínima não passa de um ano",
      ],
      correta: 4,
      explicacao:
        "Nos crimes com pena mínima igual ou inferior a um ano, abrangidos ou não pela lei, o Ministério Público, ao oferecer a denúncia, pode propor a suspensão do processo por dois a quatro anos, presentes os demais requisitos (Lei 9.099/1995, art. 89). O art. 306 não é de menor potencial, pois a pena máxima é de 3 anos.",
      explicacaoErradas:
        "Conta a pena máxima para o menor potencial, por isso “cabe transação penal” erra. O art. 89 alcança crimes fora da lei, ao contrário de “não cabe nenhum benefício”. O prazo é de dois a quatro anos, proposto pelo Ministério Público, e não “um a dois anos”. Não há vítima determinada para a “composição dos danos civis”.",
      pegadinha: "Transação olha a pena máxima; suspensão do processo olha a mínima.",
      conhecimento: "Expirado o prazo sem revogação, o juiz declara extinta a punibilidade, e a prescrição não corre durante a suspensão (art. 89, §§ 5º e 6º).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Revogação da suspensão",
      dificuldade: 5,
      raciocinio: "Art. 89, § 4º: processo por contravenção → revogação facultativa.",
      enunciado:
        "Durante o período de prova da suspensão condicional do processo, o acusado passa a ser processado por uma contravenção penal. Pelo art. 89 da Lei 9.099/1995:",
      alternativas: [
        "a suspensão é revogada obrigatoriamente, como ocorre em qualquer novo processo",
        "o juiz declara extinta a punibilidade, pois contravenção não interfere na suspensão",
        "o prazo de prescrição volta a correr a partir do novo processo, sem revogação",
        "a suspensão pode ser revogada, pois a revogação por contravenção é facultativa",
        "o período de prova é prorrogado automaticamente por mais dois anos, sem revogação",
      ],
      correta: 3,
      explicacao:
        "A suspensão será revogada se o beneficiário vier a ser processado por outro crime ou não reparar o dano sem motivo justificado (§ 3º). Ela poderá ser revogada se ele vier a ser processado por contravenção ou descumprir outra condição (§ 4º).",
      explicacaoErradas:
        "A revogação obrigatória é para novo processo por crime, e não para “qualquer novo processo”. O juiz não declara extinta a punibilidade só por isso. A prescrição não corre durante a suspensão, por isso “o prazo de prescrição volta a correr” erra. A lei não prevê prorrogação “automaticamente por mais dois anos”.",
      pegadinha: "Crime: revogação obrigatória. Contravenção: facultativa.",
      conhecimento: "Entre as condições estão reparar o dano, salvo impossibilidade, e comparecer mensalmente a juízo (art. 89, § 1º).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Violência doméstica contra a mulher",
      dificuldade: 4,
      raciocinio: "Lei 11.340/2006, art. 41: a Lei 9.099 não se aplica, qualquer que seja a pena.",
      enunciado:
        "Numa fiscalização, a PRF flagra um crime praticado com violência doméstica e familiar contra a mulher, cuja pena máxima não passa de dois anos. Pelo art. 41 da Lei 11.340/2006:",
      alternativas: [
        "não se aplica a Lei 9.099/1995, qualquer que seja a pena prevista",
        "aplica-se a Lei 9.099/1995, pois o que importa é a pena máxima de até dois anos",
        "aplica-se só a transação penal, vedada apenas a composição dos danos civis",
        "aplica-se a Lei 9.099/1995 se a vítima desistir da representação na audiência",
        "aplica-se só a suspensão condicional do processo, que fica a critério do juiz",
      ],
      correta: 0,
      explicacao:
        "Aos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena prevista, não se aplica a Lei 9.099/1995 (Lei 11.340/2006, art. 41). Por isso não há termo circunstanciado, transação penal nem suspensão condicional do processo nesses casos.",
      explicacaoErradas:
        "A pena não importa, por isso “o que importa é a pena máxima” erra. Não cabe “só a transação penal” nem “só a suspensão condicional do processo”. A desistência da vítima não traz a Lei 9.099 de volta.",
      pegadinha: "Violência doméstica contra a mulher: nada de Juizado.",
      conhecimento: "Súmula 536 do STJ: a suspensão condicional do processo e a transação penal não se aplicam aos delitos sujeitos ao rito da Lei Maria da Penha.",
    },
    {
      topico: "Lei 10.259/2001",
      subassunto: "Juizado Especial Federal",
      dificuldade: 5,
      raciocinio: "CF, art. 109, IV: a Justiça Federal não julga contravenções, mesmo contra a União.",
      enunciado:
        "A PRF registra uma contravenção penal praticada em detrimento de um serviço da União numa rodovia federal. Quanto ao julgamento:",
      alternativas: [
        "cabe ao Juizado Especial Federal Criminal, pois há interesse da União no fato",
        "cabe à Justiça Estadual, pois a Constituição exclui as contravenções da Justiça Federal",
        "cabe a uma vara federal comum, pois contravenção contra a União não é de menor potencial ofensivo",
        "cabe à Justiça Militar da União, por envolver bem público federal",
        "cabe ao Juizado Especial Federal Cível, que julga causas de até sessenta salários mínimos",
      ],
      correta: 1,
      explicacao:
        "O Juizado Especial Federal Criminal julga as infrações de menor potencial ofensivo de competência da Justiça Federal (Lei 10.259/2001, art. 2º). Mas a Constituição exclui as contravenções da competência federal, mesmo em detrimento de bens, serviços ou interesse da União (CF, art. 109, IV).",
      explicacaoErradas:
        "O interesse da União não leva a contravenção ao “Juizado Especial Federal Criminal”. Toda contravenção é de menor potencial ofensivo, por isso “não é de menor potencial ofensivo” erra. A “Justiça Militar da União” não julga o caso. O “Juizado Especial Federal Cível” trata de causas cíveis.",
      pegadinha: "Contravenção nunca vai à Justiça Federal.",
      conhecimento: "Súmula 38 do STJ: compete à Justiça Estadual comum julgar contravenção, ainda que praticada em detrimento de bens, serviços ou interesse da União ou de suas entidades.",
    },
  ],
};
