import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-10",
  resumo: {
    ideia:
      "Quando um agente público causa dano, o Estado responde sem que a vítima precise provar culpa. A aula mostra a evolução das teorias, quem responde pelo art. 37, § 6º, os requisitos, as excludentes, a omissão, a ação de reparação, o regresso, a prescrição, os atos legislativos e judiciais, os cartórios e as teses do STF e do STJ.",
    itens: [
      {
        parte: "1. Conceito e evolução das teorias",
        termo: "Responsabilidade civil do Estado",
        faz: "É a obrigação de reparar danos patrimoniais ou morais causados a terceiros por agentes públicos, atuando nessa qualidade. É independente das responsabilidades penal (crime ou contravenção) e administrativa (falta funcional).",
        pista: "Também é chamada de responsabilidade extracontratual ou aquiliana, porque não nasce de contrato. Se a Administração descumpre um contrato, a responsabilidade é contratual e segue a Lei de Licitações e o próprio contrato (não é o tema desta aula).",
      },
      {
        termo: "Teoria da irresponsabilidade",
        faz: "Também chamada de regaliana. Vigorou no absolutismo: o rei não erra (“The king can do no wrong”), então o Estado não indenizava ninguém.",
        pista: "Começou a cair no século XIX e hoje está totalmente superada. Os últimos países a abandoná-la foram os Estados Unidos (Federal Tort Claims Act, 1946) e a Inglaterra (Crown Proceedings Act, 1947).",
      },
      {
        termo: "Teorias civilistas",
        faz: "Também chamadas de intermediárias ou mistas. O Estado era tratado como um particular e indenizava nos mesmos casos do Direito Civil. Primeiro veio a teoria dos atos de império e de gestão; depois, a da culpa civil.",
      },
      {
        termo: "Atos de império e atos de gestão",
        faz: "Ato de império: o Estado usa sua soberania (desapropriação, aplicação de sanção). Ato de gestão: o Estado age em igualdade com o particular (locação, venda de um bem). Por essa teoria, o Estado só respondia pelos atos de gestão.",
        pista: "Foi superada porque não faz sentido separar os atos: o Estado é um só.",
      },
      {
        termo: "Teoria da culpa civil",
        faz: "Responsabilidade subjetiva: a vítima tinha de provar dolo ou culpa (negligência, imprudência ou imperícia) do agente estatal.",
        pista: "Ainda é usada em países do common law, como Estados Unidos e Inglaterra. No Brasil, foi superada pelas teorias publicistas (baseadas no Direito Administrativo).",
      },
      {
        termo: "Teorias",
        faz: "Ordem da evolução: irresponsabilidade → atos de império e de gestão → culpa civil → culpa administrativa (culpa do serviço) → risco administrativo e risco integral.",
        pista: "Culpa do serviço: não funcionou, funcionou mal ou funcionou com atraso.",
      },
      {
        termo: "Teoria da culpa administrativa",
        faz: "Também chamada de culpa do serviço, culpa anônima ou faute du service. É a primeira teoria publicista. A culpa é do serviço, não do agente: o Estado responde quando o serviço não existiu ou não funcionou, funcionou mal ou atrasou.",
        pista: "Continua sendo responsabilidade subjetiva, mas do Estado, sem individualizar o agente. Cabe à vítima provar a falta do serviço. Cai em prova: na culpa administrativa a culpa não se presume e a falha não é imputada pessoalmente ao funcionário.",
      },
      {
        parte: "2. Teoria do risco: administrativo e integral",
        termo: "Teoria do risco",
        faz: "Basta a relação entre a conduta estatal e o dano para surgir o dever de indenizar, desde que a vítima não tenha causado o dano. É o fundamento da responsabilidade objetiva (sem culpa).",
        pista: "Nasce de duas ideias: a atividade estatal cria risco para as pessoas, e os ônus dessa atividade, feita no interesse de todos, devem ser repartidos por toda a sociedade (solidariedade social e igualdade). Em prova pode aparecer só “teoria do risco”, no sentido de risco administrativo.",
      },
      {
        termo: "Risco administrativo",
        faz: "Responsabilidade objetiva. Bastam três requisitos: dano, conduta administrativa (fato do serviço) e nexo causal. Não importa se houve dolo ou culpa do agente, nem se o ato foi lícito. Admite excludentes e atenuantes.",
        pista: "Exemplo: numa perseguição lícita, a viatura bate num carro estacionado; mesmo sem culpa do policial, o Estado indeniza. A culpa exclusiva da vítima exclui o dever; a culpa concorrente só atenua. Em qualquer caso, o ônus da prova é da Administração.",
      },
      {
        termo: "Risco integral",
        faz: "Não admite excludentes: o Estado age como segurador universal e indeniza mesmo com culpa exclusiva da vítima, caso fortuito ou força maior. Só se aplica em casos excepcionais.",
        pista: "Na Constituição, a única hipótese é o dano nuclear (art. 21, XXIII, “d”). Por leis, citam-se os atos terroristas e de guerra contra aeronaves brasileiras (Leis 10.309/2001 e 10.744/2003). Há quem diga que nem exige nexo causal.",
      },
      {
        termo: "Dano ambiental e risco integral",
        faz: "Quem causa dano ambiental responde de forma objetiva, pelo risco integral. A regra vale para qualquer pessoa, estatal ou não, até para estatal que explora atividade econômica, porque o fundamento não é o art. 37, § 6º.",
        pista: "Exemplo: empresa deixa resíduo tóxico a céu aberto em terreno de acesso fácil e costumeiro, mesmo com cerca e placas; quem entra e se queima é indenizado pela empresa, sem discussão de culpa.",
      },
      {
        parte: "3. Quem responde (art. 37, § 6º)",
        termo: "Art. 37, § 6º, da CF",
        faz: "“As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.”",
        pista: "O Brasil adota a responsabilidade objetiva, na modalidade risco administrativo. A regra dos atos comissivos não alcança a omissão, que segue a culpa administrativa (bloco 6).",
      },
      {
        termo: "Quem responde de forma objetiva",
        faz: "1) Administração direta, autarquias e fundações públicas de direito público, seja qual for a atividade; 2) empresas públicas e sociedades de economia mista prestadoras de serviço público; 3) delegatárias de serviço público (concessão, permissão ou autorização).",
        pista: "A delegatária só responde de forma objetiva pelos danos ligados ao serviço delegado. Exemplo: distribuidora de energia que danifica bens de terceiros ao prestar o serviço indeniza, salvo se provar culpa da vítima.",
      },
      {
        termo: "Estatais que exploram atividade econômica",
        faz: "Empresas públicas e sociedades de economia mista que exploram atividade econômica não entram no art. 37, § 6º. Respondem pelo Direito Civil e Comercial, em regra de forma subjetiva.",
        pista: "Exemplo: um banco estatal que causa prejuízo a cliente responde como qualquer banco privado. Para o dano ambiental, porém, até ela responde pelo risco integral.",
      },
      {
        termo: "Usuário e não usuário",
        faz: "A prestadora privada de serviço público responde de forma objetiva tanto perante o usuário quanto perante o não usuário do serviço (STF, Tema 130, RE 591.874). Basta o nexo causal entre o ato e o dano.",
        pista: "Exemplo: ônibus de concessionária atropela um ciclista; a empresa responde objetivamente, mesmo o ciclista não sendo passageiro. O entendimento antigo (RE 262.651), que protegia só o usuário, está superado; o RE 459.749 já apontava a mudança, mas foi arquivado por acordo.",
      },
      {
        parte: "4. Requisitos: dano, conduta e nexo causal",
        termo: "Requisitos da responsabilidade objetiva",
        faz: "Nos atos comissivos, a vítima precisa provar: a) conduta de agente público agindo nessa qualidade (oficialidade da conduta causal); b) dano; c) nexo causal entre a conduta e o dano. Não precisa provar dolo nem culpa.",
        pista: "Não é preciso que o ato seja ilícito (STF, RE 456.302 AgR e RE 113.587). No RE 113.587, o Município indenizou os prejuízos causados pela construção de um viaduto.",
      },
      {
        termo: "Dano jurídico",
        faz: "O dano tem de atingir um direito protegido pela ordem jurídica, e não só causar perda econômica. Pode ser material (patrimonial) ou moral.",
        pista: "Sem indenização: a escola, o museu ou a repartição muda de endereço e o comércio vizinho perde clientes (há perda econômica, mas nenhum direito violado). Com indenização: a represa, obra lícita, inunda propriedades (viola o direito de propriedade). Dano moral: família humilhada no atendimento ou revista policial vexatória.",
      },
      {
        termo: "Oficialidade da conduta",
        faz: "O agente (em sentido amplo, incluindo os das estatais prestadoras e das delegatárias) tem de agir na qualidade de agente público. Isso inclui o exercício das funções, agir como se as exercesse e valer-se da condição de agente para agir.",
        pista: "Diz-se que o Estado tem culpa in eligendo (ao escolher o agente) e in vigilando (ao não vigiá-lo).",
      },
      {
        termo: "Policial de folga",
        faz: "Responde o Estado: policial de folga, sem farda, usa a arma da corporação para “corrigir” pessoas, agindo como policial (STF, RE 160.401). Não responde: disparo por motivo pessoal, contra pessoa com quem o agente tinha relação amorosa (STF, RE 363.423).",
        pista: "O que decide não é a origem da arma, mas se o agente agiu na qualidade de agente público. Policial de folga que tenta conter tumulto e fere alguém gera responsabilidade objetiva.",
      },
      {
        termo: "Agente de fato",
        faz: "Pessoa investida de forma irregular na função. O Estado responde de forma objetiva se consentiu ou, de algum modo, permitiu a atuação.",
        pista: "Exemplo: numa catástrofe, o Estado deixa um particular ajudar os bombeiros no socorro; o dano que ele causar nessa ajuda pode ser indenizado. Se o Estado não tinha como impedir alguém de se passar por servidor, não há nexo causal.",
      },
      {
        termo: "Nexo causal",
        faz: "É a ligação entre a conduta estatal e o dano: tem de ficar provado que foi aquela conduta que causou o dano. Mesmo na responsabilidade objetiva, a vítima precisa provar o nexo.",
        pista: "Exemplo: no socorro a um acidentado, a maca quebra e a vítima cai, mas a perícia mostra que a morte veio da pancada do acidente. Não há nexo entre a queda e a morte.",
      },
      {
        parte: "5. Excludentes e atenuantes",
        termo: "Excludentes",
        faz: "O risco administrativo admite três excludentes, que rompem o nexo causal: caso fortuito ou força maior, culpa exclusiva da vítima e fato exclusivo de terceiro.",
        pista: "Culpa concorrente só reduz a indenização. As excludentes afastam a responsabilidade objetiva, mas a vítima ainda pode provar dolo ou culpa do Estado (responsabilidade subjetiva).",
      },
      {
        termo: "Caso fortuito ou força maior",
        faz: "Eventos humanos ou da natureza que não se podiam prever nem evitar (enchente repentina em local onde nunca houve, terremoto fora de proporção, tsunami). Exemplo: a enchente arrasta um veículo público contra um imóvel; não há responsabilidade objetiva.",
        pista: "O dano por fenômeno da natureza só gera responsabilidade subjetiva: a vítima tem de provar omissão culposa (por exemplo, que a prefeitura não limpava os bueiros). Se o dano vem junto da omissão culposa e do fato imprevisível (concausas), a responsabilidade não é afastada, só atenuada.",
      },
      {
        termo: "Fortuito interno e fortuito externo",
        faz: "Fortuito interno: ligado ao risco da atividade; não exclui nem atenua a responsabilidade. Fortuito externo: imprevisível, inevitável e sem relação direta com a atividade; exclui a responsabilidade.",
        pista: "Interno: funcionária da concessionária derruba água na estação e um usuário escorrega. Externo: assalto armado dentro do ônibus (STJ, REsp 435.865) ou passageiro que cai na via do metrô por mal súbito, mesmo sem tecnologia moderna de proteção (STJ, REsp 1.936.743).",
      },
      {
        termo: "Culpa exclusiva da vítima",
        faz: "Exclui a responsabilidade quando foi o particular quem deu causa ao dano. O ônus da prova é do Estado.",
        pista: "Exemplos: o motorista particular fura o sinal ou ultrapassa em local proibido e bate na viatura; a pessoa se joga na frente do veículo oficial. Só a culpa exclusiva exclui; a concorrente apenas atenua.",
      },
      {
        termo: "Fato exclusivo de terceiro",
        faz: "Também exclui a responsabilidade objetiva. Exemplo: atos de multidões que danificam o patrimônio de alguém.",
        pista: "O Estado ainda pode responder de forma subjetiva se a vítima provar omissão culposa, como num tumulto com muitos policiais presentes que nada fizeram para conter o dano.",
      },
      {
        parte: "6. Omissão do Estado",
        termo: "Omissão",
        faz: "Na omissão genérica, exige-se culpa do serviço. Na específica, com dever concreto de agir, a responsabilidade é objetiva.",
        pista: "Se a questão fala só em “omissão do Estado”, sem especificar, considere a omissão genérica: responsabilidade subjetiva, pela culpa administrativa (faute du service).",
      },
      {
        termo: "Omissão genérica (imprópria)",
        faz: "O Estado tem um dever geral de agir, mas não um dever concreto naquele caso. A vítima precisa provar a omissão ilícita: o serviço não existiu, funcionou mal ou atrasou.",
        pista: "Exemplos: acidente de motorista acima da velocidade (o Estado fiscaliza as rodovias, mas não tem como fiscalizar cada veículo); falta de obras contra enchentes (a escolha das políticas públicas cabe às autoridades).",
      },
      {
        termo: "Omissão específica (própria)",
        faz: "Existe uma ordem jurídica concreta para o Estado agir e ele não age. Tem o mesmo efeito do ato comissivo: responsabilidade objetiva.",
        pista: "Exemplo: a lei manda exigir testes e exames para registrar um medicamento, e o registro sai sem eles.",
      },
      {
        termo: "Culpa anônima na omissão (RE 179.147)",
        faz: "Na omissão, a responsabilidade é subjetiva e exige dolo ou culpa (negligência, imperícia ou imprudência), mas não é preciso individualizar o agente: basta provar a culpa do serviço, de forma genérica.",
        pista: "Na mesma decisão, o STF lembra que, no ato comissivo, a responsabilidade é objetiva e admite discutir a culpa da vítima para reduzir ou excluir a indenização.",
      },
      {
        termo: "Fenômenos da natureza e multidões",
        faz: "São os casos mais comuns de responsabilidade subjetiva: a vítima precisa provar que a atuação normal do Estado teria evitado o dano.",
        pista: "Ponte bem construída e com manutenção em dia cai num terremoto inédito: não há omissão. Enchente causada por bueiros entupidos por falta de manutenção: há omissão culposa. Bueiros limpos e mesmo assim enchente: o dano vem só da natureza.",
      },
      {
        parte: "7. Posição de garante e presos",
        termo: "Posição de garante",
        faz: "Quando o Estado tem o dever de guarda ou proteção de pessoas ou coisas sob sua custódia, responde de forma objetiva, pelo risco administrativo, mesmo que o dano não venha de um agente.",
        pista: "Exemplos: aluno agredido por outro aluno ou por estranho dentro da escola pública, no horário de aula; preso ferido em briga com outros detentos. Como é risco administrativo, o Estado pode provar que era impossível evitar o dano (força maior).",
      },
      {
        termo: "Presos",
        faz: "O Estado responde pela morte de detento quando falha no dever específico de proteção do art. 5º, XLIX (Tema 592, RE 841.526) e indeniza, inclusive por dano moral, as condições degradantes de prisão (Tema 365, RE 580.252).",
        pista: "Se não houve falha no dever específico de proteção (por exemplo, suicídio que o Estado não tinha como impedir com vigilância), não há responsabilidade (STJ, REsp 1.305.259). Nas condições do presídio, não vale alegar a “reserva do possível”.",
      },
      {
        termo: "Foragido (Tema 362)",
        faz: "O Estado não responde de forma objetiva por crime de foragido do sistema prisional quando não há nexo causal direto entre o momento da fuga e a conduta (RE 608.880).",
      },
      {
        parte: "8. Ação de reparação",
        termo: "Contra quem se move a ação",
        faz: "A reparação pode ser amigável ou judicial. A ação é movida contra a pessoa jurídica de direito público ou a privada prestadora de serviço público, nunca contra o agente.",
        pista: "Exemplo: servidor da União causa dano agindo como servidor; a vítima processa a União, não o servidor. Também não cabe processar os dois juntos (litisconsórcio).",
      },
      {
        termo: "Dupla garantia (RE 327.904)",
        faz: "O art. 37, § 6º, protege duas pessoas: a vítima, que processa quem tem mais chance de pagar (o Estado); e o servidor, que só responde perante a pessoa jurídica a que está vinculado.",
      },
      {
        termo: "Tema 940 (RE 1.027.633)",
        faz: "A ação por danos causados por agente público deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público. O autor do ato é parte ilegítima; fica assegurado o regresso nos casos de dolo ou culpa.",
        pista: "O STJ chegou a admitir que a vítima escolhesse entre processar o Estado ou o agente, e houve decisões antigas do STF e do STJ no mesmo sentido (RE 90.071, REsp 1.325.862). Isso foi superado pelo Tema 940.",
      },
      {
        termo: "Valor da indenização",
        faz: "Cobre o que a vítima perdeu (danos emergentes), o que gastou para obter o ressarcimento (como advogado) e o que deixou de ganhar como consequência direta do dano (lucros cessantes).",
        pista: "Exemplo: viatura destrói o carro de um taxista; paga-se o conserto, o advogado e os meses sem trabalhar. Se a vítima morre, também o funeral e a pensão para quem dependia dela, pelo tempo provável de vida.",
      },
      {
        parte: "9. Ação regressiva",
        termo: "Regresso",
        faz: "O Estado cobra do agente, desde que prove dolo ou culpa. A vítima não aciona o agente diretamente (Tema 940).",
        pista: "Esquema: vítima → Estado (responsabilidade objetiva); Estado → agente (responsabilidade subjetiva, por dolo ou culpa).",
      },
      {
        termo: "Pressupostos do regresso",
        faz: "1) A Administração (ou a delegatária) ter sido condenada a indenizar a vítima; 2) ter havido dolo ou culpa do agente que causou o dano.",
      },
      {
        termo: "Características da ação regressiva",
        faz: "Tem natureza cível. Por isso: passa aos sucessores do agente, até o limite do patrimônio herdado (art. 5º, XLV); pode ser movida mesmo depois de o vínculo acabar (exoneração, aposentadoria, disponibilidade).",
      },
      {
        termo: "Denunciação da lide",
        faz: "Pelo CPC (art. 125, II), é “admissível” a denunciação da lide a quem tem o dever de indenizar em regresso. No caso do agente público, ela não é obrigatória: o juiz pode negá-la se atrapalhar a economia e a rapidez do processo (STJ, EREsp 313.886 e AgRg no AREsp 139.358).",
        pista: "Parte da doutrina diz que ela não cabe, porque atrasaria a indenização ao discutir a culpa do agente no mesmo processo. Para o servidor federal, a Lei 8.112/1990 (art. 122, § 2º) diz que ele responde perante a Fazenda Pública em ação regressiva.",
      },
      {
        termo: "Regresso é dever",
        faz: "Mover a ação regressiva é obrigação do Estado (indisponibilidade do interesse público). A Lei 4.619/1965 manda propor a ação regressiva da União em 60 dias contados do trânsito em julgado da condenação; perder o prazo pode gerar responsabilidade funcional.",
        pista: "A lei fala em “Procuradores da República” porque, em 1965, eram eles que representavam a União; hoje essa representação é da Advocacia-Geral da União (art. 131 da CF).",
      },
      {
        parte: "10. Prescrição",
        termo: "Prazo da vítima contra o Estado",
        faz: "5 anos (Decreto 20.910/1932, art. 1º, e Lei 9.494/1997, art. 1º-C). O STJ afastou o prazo de 3 anos do Código Civil (art. 206, § 3º, V) para ações contra a Fazenda Pública (Tema Repetitivo 553, REsp 1.251.993).",
        pista: "O STJ chegou a aplicar os 3 anos do Código Civil (REsp 1.137.354), mas depois firmou os 5 anos (EREsp 1.137.354 e AgRg no REsp 1.256.676). A prova pode dizer “20 anos”: está errado.",
      },
      {
        termo: "Tortura no regime militar",
        faz: "Exceção: é imprescritível a indenização por dano moral e patrimonial decorrente de tortura praticada por agentes do Estado durante o regime militar (STJ, REsp 1.374.376, EREsp 816.209 e AgRg no REsp 1.372.652).",
      },
      {
        termo: "Prazo do Estado contra o agente",
        faz: "Ilícito civil (por exemplo, acidente de trânsito): prescritível, em 5 anos (Tema 666, RE 669.069). Ato doloso de improbidade: imprescritível (Tema 897, RE 852.475). Decisão de Tribunal de Contas: prescritível, na forma da Lei de Execução Fiscal, Lei 6.830/1980 (Tema 899, RE 636.886).",
        pista: "Antes se dizia que todo ressarcimento ao erário era imprescritível (art. 37, § 5º). Hoje, só o de improbidade dolosa. Como a Lei 14.230/2021 passou a exigir dolo em toda improbidade, a palavra “doloso” ficou redundante, mas as questões repetem a tese literal. Ainda não há tese do STF sobre dano ao erário por ilícito penal.",
      },
      {
        termo: "Decisão de Tribunal de Contas como título",
        faz: "A condenação do Tribunal de Contas tem eficácia de título executivo (art. 71, § 3º). Se o responsável não paga, a procuradoria do ente (na União, a Advocacia-Geral da União) cobra na Justiça.",
        pista: "Funciona como um cheque sem fundo: se o órgão jurídico demora demais para cobrar, a cobrança prescreve.",
      },
      {
        termo: "Dano ambiental e multa ambiental",
        faz: "É imprescritível a reparação civil de dano ambiental (STF, Tema 999, RE 654.833). O STF aplicou a mesma ideia ao ressarcimento pela exploração irregular de minério da União, por ser inseparável do dano ambiental. Já a cobrança de multa por infração ambiental prescreve em 5 anos (STJ, Tema Repetitivo 146, REsp 1.112.577, Decreto 20.910/1932 por isonomia).",
      },
      {
        parte: "11. Atos legislativos",
        termo: "Responsabilidade por atos legislativos",
        faz: "Regra: o Estado não indeniza pela atividade legislativa normal, mesmo que a lei crie obrigações ou restrinja direitos. Exceções: lei inconstitucional, lei de efeitos concretos e omissão legislativa.",
      },
      {
        termo: "Lei inconstitucional",
        faz: "Gera dever de indenizar se a lei for declarada inconstitucional pelo órgão competente, em controle concentrado, e se o dano vier de fato da inconstitucionalidade.",
      },
      {
        termo: "Lei de efeitos concretos",
        faz: "É lei só no sentido formal (segue o rito legislativo), mas não tem generalidade nem abstração: atinge pessoas certas, como um ato administrativo. Se causar dano, cabe indenização.",
      },
      {
        termo: "Omissão legislativa",
        faz: "Só em casos estritos: quando a Constituição fixa prazo para editar a norma e ela não sai. Se foi editada medida provisória ou apresentado o projeto, não há responsabilidade, mesmo que a lei saia depois do prazo.",
        pista: "Sem a norma, o Judiciário reconhece a mora; se ainda assim a lei não sair em prazo razoável, pode haver indenização.",
      },
      {
        parte: "12. Atos jurisdicionais",
        termo: "Responsabilidade por atos judiciais",
        faz: "Regra: o Estado não responde pelos atos jurisdicionais. Exceções: erro judiciário e prisão além do tempo fixado na sentença (art. 5º, LXXV), condutas dolosas do juiz e os casos previstos em lei (STF, ARE 756.753 AgR).",
        pista: "No erro judiciário e na prisão além do tempo, a responsabilidade é objetiva e vale só na esfera penal.",
      },
      {
        termo: "Prisão cautelar e absolvição",
        faz: "Não cabe indenização por prisão temporária ou preventiva decretada em processo regular só porque o réu foi absolvido no fim (STF, ARE 770.931 AgR, absolvição pelo júri).",
        pista: "Cabe indenização se a prisão foi ilegal ou recaiu sobre pessoa sem nenhum envolvimento com o crime: aí há erro judiciário (STF, RE 385.943 AgR).",
      },
      {
        termo: "Juiz que age com dolo (CPC, Lei 13.105/2015, art. 143)",
        faz: "O juiz responde civil e regressivamente por perdas e danos quando: I – no exercício das funções, age com dolo ou fraude; II – recusa, omite ou retarda, sem justo motivo, providência que deva ordenar de ofício ou a pedido da parte.",
        pista: "No inciso II, só depois que a parte pede a providência e o juiz não a aprecia em 10 dias. No CPC antigo, o juiz respondia pessoalmente; hoje responde o Estado, de forma objetiva, com regresso contra o juiz.",
      },
      {
        termo: "Atos administrativos do Judiciário",
        faz: "Quando o Judiciário exerce função administrativa (não jurisdicional), aplica-se a regra geral do art. 37, § 6º: responsabilidade objetiva.",
      },
      {
        parte: "13. Notários e registradores",
        termo: "Cartórios (Tema 777, RE 842.846)",
        faz: "O Estado responde objetivamente pelos atos dos tabeliães e registradores oficiais que, no exercício de suas funções, causem dano a terceiros, com dever de regresso contra o responsável nos casos de dolo ou culpa, sob pena de improbidade administrativa.",
        pista: "O serviço notarial e de registro é exercido em caráter privado, por delegação, com ingresso por concurso de provas e títulos (art. 236, caput e § 3º). A responsabilidade do Estado é primária e objetiva; a do notário é subjetiva, por regresso. O regresso é dever, não faculdade.",
      },
      {
        termo: "Lei 8.935/1994, art. 22",
        faz: "Com a redação da Lei 13.286/2016: notários e oficiais de registro respondem civilmente pelos prejuízos que causarem a terceiros, por culpa ou dolo, pessoalmente, pelos substitutos que designarem ou escreventes que autorizarem, assegurado o regresso. A pretensão de reparação prescreve em 3 anos, contados da lavratura do ato (parágrafo único).",
        pista: "O STF julgou o Tema 777 já conhecendo essa lei. Leitura harmônica: a vítima aciona o Estado (objetiva); o Estado cobra do notário que agiu com dolo ou culpa, com base no art. 22.",
      },
      {
        parte: "14. Jurisprudência: súmulas e teses",
        termo: "Súmulas sobre telefonia e dano estético",
        faz: "Súmula Vinculante 27: a Justiça Estadual julga causas entre consumidor e concessionária de telefonia quando a ANATEL não for litisconsorte passiva necessária, assistente nem opoente. Súmula 506 do STJ: a ANATEL não é parte legítima nas ações entre concessionária e usuário sobre a relação contratual. Súmula 387 do STJ: pode-se somar indenização por dano estético e por dano moral.",
      },
      {
        termo: "Operações policiais",
        faz: "Morte ou ferimento geram responsabilidade pelo risco administrativo. A prova da excludente cabe ao Estado (Tema 1.237).",
        pista: "A perícia inconclusiva sobre a origem do disparo fatal não afasta, por si só, a responsabilidade do Estado: é apenas um indício.",
      },
      {
        termo: "Jornalista ferido (Tema 1.055)",
        faz: "É objetiva a responsabilidade do Estado pelo profissional de imprensa ferido por policiais durante cobertura de manifestação com tumulto ou conflito (RE 1.209.429).",
        pista: "Há culpa exclusiva da vítima se o jornalista descumprir advertência clara e ostensiva sobre áreas delimitadas de grave risco.",
      },
      {
        termo: "Fogos de artifício (Tema 366)",
        faz: "O Estado só responde por danos do comércio de fogos se violar um dever específico de agir: quando dá a licença sem as cautelas legais ou quando sabe das irregularidades do particular (RE 136.861).",
      },
      {
        termo: "Fraude em concurso (Tema 512)",
        faz: "O Estado responde subsidiariamente pelos danos materiais dos candidatos quando o concurso organizado por pessoa jurídica de direito privado é cancelado por indícios de fraude (RE 662.405).",
      },
      {
        termo: "Segurança em hospital",
        faz: "O hospital que não oferece o mínimo de segurança e contribui de forma determinante e específica para um homicídio em suas dependências responde objetivamente pela omissão (STJ, REsp 1.708.325).",
      },
      {
        termo: "Excludente de ilicitude penal",
        faz: "A Administração pode responder civilmente pelos danos causados por seus agentes mesmo que eles estejam amparados por causa excludente de ilicitude penal (STJ, Jurisprudência em Teses, edição 61).",
        pista: "Exemplo: o policial age em legítima defesa e não comete crime, mas o Estado indeniza o terceiro inocente atingido.",
      },
    ],
    cuidado:
      "Não confunda: a vítima processa o Estado, nunca o agente (Tema 940); o Estado só cobra do agente provando dolo ou culpa; omissão genérica é subjetiva, mas omissão específica e posição de garante são objetivas; culpa concorrente só reduz a indenização, enquanto a exclusiva afasta; risco integral (dano nuclear e ambiental) não admite excludente; a vítima tem 5 anos contra o Estado; crime de foragido só gera responsabilidade se houver nexo direto entre o momento da fuga e a conduta (Tema 362).",
  },
  questoes: [
    {
      topico: "Risco administrativo",
      subassunto: "Requisitos",
      dificuldade: 4,
      raciocinio: "Vítima prova conduta, dano e nexo. Culpa fica fora.",
      enunciado:
        "Em perseguição regular e sem excesso, um policial rodoviário atira nos pneus de um veículo em fuga, e o ricochete fere um pedestre. Sobre a indenização ao pedestre,",
      alternativas: [
        "não há dever de indenizar, pois o policial agiu dentro da lei",
        "a União responde apenas se a vítima provar culpa do policial",
        "só o motorista em fuga responde, pois ele deu causa ao fato",
        "a União responde de forma objetiva, mesmo com ato lícito",
        "o policial responde sozinho, pois foi ele quem disparou",
      ],
      correta: 3,
      explicacao: "O art. 37, § 6º, dispensa a culpa e alcança também atos lícitos que causam dano anormal e específico a terceiro.",
      explicacaoErradas:
        "“dentro da lei” não afasta a responsabilidade objetiva. “provar culpa” é a teoria subjetiva. “só o motorista” não exclui o nexo, pois o disparo foi do agente. “responde sozinho” contraria o Tema 940.",
      pegadinha: "Pensar que ato lícito nunca gera indenização.",
      conhecimento: "Pelo Tema 1.237, cabe ao Estado provar eventual excludente em operações de segurança.",
    },
    {
      topico: "Risco administrativo",
      subassunto: "Excludentes",
      dificuldade: 5,
      raciocinio: "Culpa exclusiva exclui. Culpa concorrente só reduz.",
      enunciado:
        "Uma viatura em velocidade acima da permitida colide com um motorista que avançou o sinal vermelho. A perícia aponta que os dois contribuíram para o acidente. Nesse caso, a indenização devida pela União",
      alternativas: [
        "é reduzida, pois a culpa concorrente atenua a indenização",
        "é integral, pois o risco administrativo não aceita atenuantes",
        "desaparece, pois a culpa da vítima sempre exclui o nexo causal",
        "depende de sentença penal que condene o policial pelo fato",
        "é paga só pelo agente, pois a viatura estava acima do limite",
      ],
      correta: 0,
      explicacao: "A culpa exclusiva da vítima exclui o nexo. A culpa concorrente apenas reduz o valor, na medida da contribuição de cada um.",
      explicacaoErradas:
        "“não aceita atenuantes” descreve o risco integral. “sempre exclui” vale só para a culpa exclusiva. “sentença penal” não é exigida. “só pelo agente” contraria a responsabilidade da União.",
      pegadinha: "Tratar a culpa concorrente como exclusiva.",
      conhecimento: "O art. 945 do Código Civil traz essa ideia de repartir a indenização.",
    },
    {
      topico: "Prestadoras de serviço",
      subassunto: "Não usuário",
      dificuldade: 4,
      raciocinio: "O art. 37, § 6º, não separa usuário de terceiro.",
      enunciado:
        "Um caminhão de concessionária de rodovia federal, em serviço de manutenção, atinge um ciclista que usava uma via lateral e não pagava pedágio. A concessionária",
      alternativas: [
        "responde só se a vítima provar culpa, por não ser usuária",
        "não responde, pois não há relação de consumo com o ciclista",
        "responde objetivamente, pois a regra alcança não usuários",
        "responde só de forma subsidiária, depois da União",
        "não responde, pois a União é a titular do serviço",
      ],
      correta: 2,
      explicacao: "O STF fixou (Tema 130) que a responsabilidade das prestadoras é objetiva perante usuários e não usuários.",
      explicacaoErradas:
        "“provar culpa” e “relação de consumo” retomam entendimento superado. “subsidiária” inverte a ordem, pois a concessionária responde primeiro. “titular do serviço” não afasta a responsabilidade dela.",
      pegadinha: "Exigir que a vítima seja usuária.",
      conhecimento: "O poder concedente responde de forma subsidiária, se a concessionária não puder pagar.",
    },
    {
      topico: "Omissão",
      subassunto: "Genérica e específica",
      dificuldade: 5,
      raciocinio: "Havia dever concreto de agir naquele caso? Então é específica.",
      enunciado:
        "Avisada várias vezes de um buraco grande na pista, a equipe responsável nada faz por semanas, e um motociclista morre no local. Esse dano é típico de omissão",
      alternativas: [
        "genérica, que nunca gera dever de indenizar",
        "genérica, por exigir prova de crime do servidor",
        "de ato de terceiro, que afasta todo o nexo causal",
        "lícita, pois falta orçamento para reparar todas as vias",
        "específica, pois havia dever concreto de agir no caso",
      ],
      correta: 4,
      explicacao: "Com ciência do risco e dever concreto de agir, a inércia é causa direta do dano. A doutrina fala em omissão específica ou em culpa do serviço, e nos dois caminhos há dever de indenizar.",
      explicacaoErradas:
        "“nunca gera dever” erra, pois a omissão genérica pode gerar indenização se provada a culpa do serviço. “prova de crime” não se exige. “ato de terceiro” não existe aqui. “falta orçamento” não justifica a inércia.",
      pegadinha: "Afastar a indenização alegando reserva do possível.",
      conhecimento: "Pelo Tema 366, em danos de comércio de fogos, é preciso violação de dever específico de agir.",
    },
    {
      topico: "Omissão",
      subassunto: "Foragido",
      dificuldade: 5,
      raciocinio: "Sem nexo direto com a fuga, não há responsabilidade.",
      enunciado:
        "Um preso foge de um presídio federal e, dois anos depois, em outra cidade, comete um roubo. A vítima pede indenização à União. Pela tese do STF,",
      alternativas: [
        "a União responde, pois a fuga prova a falha na custódia",
        "a União responde, pois vale a teoria do risco integral",
        "a União não responde, salvo nexo direto com a fuga",
        "a vítima só pode acionar o diretor do presídio",
        "a União responde de forma subsidiária ao foragido",
      ],
      correta: 2,
      explicacao: "No Tema 362, o STF afastou a responsabilidade objetiva quando não há nexo causal direto entre o momento da fuga e o crime.",
      explicacaoErradas:
        "“a fuga prova a falha” ignora a exigência de nexo direto. “risco integral” não se aplica. “diretor do presídio” contraria o Tema 940. “subsidiária” não é a solução dada pelo STF.",
      pegadinha: "Ligar qualquer crime posterior à fuga.",
      conhecimento: "Se o crime ocorre logo na fuga, o nexo pode estar presente.",
    },
    {
      topico: "Pessoas sob custódia",
      subassunto: "Morte de detento",
      dificuldade: 4,
      raciocinio: "A morte só gera dever se o Estado podia e devia evitar.",
      enunciado:
        "Quanto à morte de detento em estabelecimento prisional, a tese do STF indica que o Estado",
      alternativas: [
        "responde sempre, mesmo se não pudesse evitar a morte",
        "nunca responde em caso de suicídio dentro do presídio",
        "responde se não cumprir o dever de proteção do preso",
        "só responde se o agente penitenciário for condenado",
        "só responde se a família provar a culpa do diretor",
      ],
      correta: 2,
      explicacao: "No Tema 592, o STF ligou a responsabilidade à falha no dever de proteção do art. 5º, XLIX, da CF. Se o Estado provar que não podia evitar, o nexo se rompe.",
      explicacaoErradas:
        "“responde sempre” descreve risco integral. “nunca responde” exagera, pois o suicídio pode gerar dever, conforme o caso. “agente condenado” e “culpa do diretor” não são exigências.",
      pegadinha: "Achar que toda morte na prisão gera indenização.",
      conhecimento: "Pelo Tema 365, condições degradantes também geram dever de indenizar.",
    },
    {
      topico: "Ação regressiva",
      subassunto: "Dolo ou culpa",
      dificuldade: 5,
      raciocinio: "Objetiva para o Estado. Subjetiva para o agente.",
      enunciado:
        "A União pagou indenização por acidente causado por policial rodoviário em serviço e quer cobrar o valor dele. Sobre essa ação,",
      alternativas: [
        "o agente responde sem culpa, pela mesma regra da União",
        "a cobrança exige prova de dolo ou culpa do agente",
        "o direito de regresso exige sentença penal condenatória",
        "a União só pode cobrar se o agente tiver sido demitido",
        "o agente responde de forma solidária desde o início do processo",
      ],
      correta: 1,
      explicacao: "A parte final do art. 37, § 6º, garante o regresso nos casos de dolo ou culpa. Para o agente, a responsabilidade é subjetiva.",
      explicacaoErradas:
        "“sem culpa” confunde a regra da União com a do agente. “sentença penal” e “demitido” não são exigidas. “solidária desde o início” contraria a tese do Tema 940.",
      pegadinha: "Levar a responsabilidade objetiva para o regresso.",
      conhecimento: "O Tema 940 afasta a ação direta da vítima contra o agente.",
    },
    {
      topico: "Teorias",
      subassunto: "Risco integral e culpa do serviço",
      dificuldade: 4,
      raciocinio: "Risco integral não aceita excludente.",
      enunciado:
        "Uma teoria faz o Estado indenizar mesmo com culpa exclusiva da vítima ou caso fortuito. Essa teoria é a do",
      alternativas: [
        "risco integral, ligada no Brasil a casos como o dano nuclear",
        "risco administrativo, adotada como regra geral na Constituição",
        "culpa administrativa, baseada na falha do serviço público",
        "culpa civil, pela qual o Estado responde como particular",
        "irresponsabilidade, pela qual o Estado não pode errar",
      ],
      correta: 0,
      explicacao: "O risco integral não admite excludentes. O art. 21, XXIII, “d”, da CF trata da responsabilidade por danos nucleares independentemente de culpa.",
      explicacaoErradas:
        "“risco administrativo” aceita excludentes. “culpa administrativa” exige falha do serviço. “culpa civil” exige culpa do agente. “irresponsabilidade” é a fase em que o Estado não indenizava.",
      pegadinha: "Trocar risco administrativo por integral.",
      conhecimento: "O STJ aplica o risco integral ao dano ambiental.",
    },
  ],
};
