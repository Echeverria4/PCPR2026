import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-04",
  resumo: {
    ideia:
      "Empresas públicas e sociedades de economia mista são as estatais: têm personalidade de direito privado, mas seguem regras públicas, num regime híbrido. A aula mostra quando o Estado pode atuar na economia, como as estatais nascem e se extinguem, o regime de bens, pessoal, dirigentes e licitações, as três diferenças entre empresa pública e sociedade de economia mista e as fundações públicas, que podem ser de direito público ou de direito privado.",
    itens: [
      {
        parte: "1. Estado na economia e conceitos",
        termo: "Atuação direta do Estado na economia (CF, art. 173)",
        faz: "Em regra, o Estado não explora atividade econômica diretamente. Só pode fazê-lo nos casos previstos na Constituição ou quando necessário aos imperativos da segurança nacional ou a relevante interesse coletivo, conforme definidos em lei.",
        pista: "Exemplos: o refino de petróleo, monopólio da União (art. 177, II), é caso previsto na Constituição; uma empresa federal de material de defesa atende à segurança nacional; os programas habitacionais e de renda de um banco público atendem a relevante interesse coletivo.",
      },
      {
        termo: "Função social da estatal (Lei 13.303/2016, art. 27)",
        faz: "A estatal tem a função social de realizar o interesse coletivo ou atender ao imperativo da segurança nacional apontado na lei que autorizou a sua criação.",
      },
      {
        termo: "Empresa pública",
        faz: "Pessoa jurídica de direito privado, criada por autorização de lei, com patrimônio próprio e capital todo público, em qualquer forma societária (Lei 13.303/2016, art. 3º).",
        pista: "Pode ter capital de outras pessoas de direito público e de entidades da Administração indireta, desde que o ente instituidor mantenha a maioria do capital votante (art. 3º, parágrafo único). Exemplos: Correios, Caixa e BNDES.",
      },
      {
        termo: "Sociedade de economia mista",
        faz: "Pessoa jurídica de direito privado, criada por autorização de lei, sempre sob a forma de sociedade anônima, com a maioria das ações com direito a voto nas mãos do ente federativo ou de entidade da Administração indireta (Lei 13.303/2016, art. 4º).",
        pista: "Mistura capital público e privado, mas o controle é público. Exemplos: Banco do Brasil, Banco da Amazônia e Petrobras.",
      },
      {
        termo: "Traços comuns das estatais",
        faz: "Criação e extinção autorizadas por lei; personalidade de direito privado; controle do Estado; derrogação parcial do regime privado por normas públicas (regime híbrido); vínculo aos fins da lei que as autorizou; e, em regra, atividade econômica.",
        pista: "Derrogação parcial quer dizer que parte de um regime é substituída pelo outro. Na prova, aceita-se dizer que as estatais seguem “regime de direito privado”.",
      },
      {
        parte: "2. Criação, extinção e subsidiárias",
        termo: "Criação das estatais",
        faz: "A lei específica só autoriza a criação (CF, art. 37, XIX). A personalidade nasce com o registro dos atos constitutivos no Registro Público de Empresas Mercantis. O ato constitutivo costuma ser um decreto, que serve só para dar publicidade.",
        pista: "Lei específica é a que trata de assunto ligado às competências da entidade. Não vale uma autorização solta numa lei sobre outro assunto.",
      },
      {
        termo: "Extinção das estatais",
        faz: "Também depende de autorização legislativa, mas basta a autorização genérica de uma lei de desestatização, como a do Programa Nacional de Desestatização (Lei 9.491/1997) ou a do Programa de Parcerias de Investimentos (Lei 13.334/2016), salvo se a lei que autorizou a criação exigir lei específica.",
        pista: "O Executivo nunca extingue a estatal só por ato próprio. Para o STF, a autorização da lei do programa de desestatização é suficiente, e o Chefe do Executivo fica preso aos limites e condições dessa lei (ADI 6.241, 2021).",
      },
      {
        termo: "Subsidiárias (CF, art. 37, XX)",
        faz: "A criação de subsidiárias e a participação de estatal em empresa privada dependem de “autorização legislativa, em cada caso”. Subsidiária é a empresa controlada pela estatal matriz, com personalidade própria; não é filial.",
        pista: "Exemplos: as subsidiárias de seguros e de cartões de um banco público. As subsidiárias não integram formalmente a Administração Pública.",
      },
      {
        termo: "Autorização para subsidiárias",
        faz: "Para o STF, vale lei ordinária do ente a que a matriz se vincula, e basta autorização genérica, inclusive na própria lei que autorizou a criação da matriz. A mesma regra vale para a participação em empresa privada.",
        pista: "Para subsidiárias, basta autorização genérica na lei. Na ADI 1.649, o STF validou a lei do petróleo (Lei 9.478/1997, art. 64), que autorizou de forma genérica a criação de subsidiárias ligadas à indústria do petróleo.",
      },
      {
        termo: "Venda do controle",
        faz: "Matriz: a alienação do controle acionário exige autorização legislativa (que pode ser genérica) e licitação. Subsidiárias e controladas: dispensa as duas, desde que se respeitem os princípios do art. 37 e a competitividade.",
        pista: "ADI 5.624 (2019). Exemplo de procedimento competitivo: a oferta de ações em bolsa.",
      },
      {
        parte: "3. Atividades e controle",
        termo: "Atividades das estatais",
        faz: "As estatais podem explorar atividade econômica (CF, art. 173), que é a regra, ou prestar serviços públicos (art. 175). A Lei 13.303/2016 vale para as duas, inclusive para as que atuam em monopólio.",
        pista: "Se a questão não disser nada, presuma atividade econômica e regime predominantemente privado. Na prova, marque “explorar atividade econômica e prestar serviços públicos”, com “serviços” em sentido amplo.",
      },
      {
        termo: "Serviços econômicos e sociais",
        faz: "No começo, as estatais prestavam só serviços públicos econômicos, como telefonia, energia e transporte. Hoje há estatais também em atividades sociais, como uma empresa federal de serviços hospitalares.",
      },
      {
        termo: "Atividades típicas de Estado",
        faz: "Em regra, as estatais não exercem atividades típicas de Estado. Exceção: o STF admite delegar, por lei, o poder de polícia, inclusive a aplicação de sanções, a estatal de capital majoritariamente público que preste exclusivamente serviço público próprio do Estado, em regime não concorrencial (Tema 532, RE 633.782, 2020).",
        pista: "Mesmo a estatal que explora atividade econômica integra a Administração Pública em sentido subjetivo.",
      },
      {
        termo: "Controle das estatais",
        faz: "Sofrem tutela, ou supervisão ministerial: há vinculação, sem hierarquia. Por exemplo, uma petroleira estatal vincula-se ao ministério do setor. A supervisão não pode reduzir a autonomia que a lei confere à estatal (Lei 13.303/2016, arts. 89 e 90).",
        pista: "Também há controle do TCU (CF, art. 70, parágrafo único, e art. 71, II), do Congresso Nacional (art. 49, X) e por mandado de segurança contra atos de autoridade.",
      },
      {
        termo: "Estatais e Tribunal de Contas",
        faz: "O STF já negou o controle do Tribunal de Contas sobre as estatais, mas mudou de entendimento: hoje elas se sujeitam à fiscalização e devem prestar contas anuais e até instaurar tomada de contas especial quando houver irregularidade com recursos públicos (MS 25.092, 2005). A Lei 13.303/2016 prevê esse controle, inclusive sobre as estatais com sede no exterior (art. 85), e cabe à estatal demonstrar a legalidade e a regularidade das suas despesas (art. 87).",
      },
      {
        parte: "4. Regime jurídico",
        termo: "Estatuto das estatais (CF, art. 173, § 1º)",
        faz: "A lei deve tratar: I – da função social e das formas de fiscalização pelo Estado e pela sociedade; II – da sujeição ao regime das empresas privadas, inclusive quanto a direitos e obrigações civis, comerciais, trabalhistas e tributários; III – de licitação e contratação, com os princípios da Administração; IV – dos conselhos de administração e fiscal, com participação de acionistas minoritários; V – dos mandatos, da avaliação de desempenho e da responsabilidade dos administradores.",
        pista: "Essa lei é a Lei 13.303/2016, a Lei das Estatais.",
      },
      {
        termo: "Regime híbrido",
        faz: "A personalidade é sempre de direito privado, mas o regime é misto. As que exploram atividade econômica seguem predominantemente o direito privado e só recebem normas públicas onde a Constituição manda: princípios do art. 37, concurso (art. 37, II), licitação (art. 37, XXI; art. 173, § 1º, III; Lei 13.303/2016, art. 28), lei para criar e extinguir (art. 37, XIX e XX), controle do Tribunal de Contas (art. 71) e do Congresso (art. 49, X).",
      },
      {
        termo: "Prestadoras de serviço público",
        faz: "Seguem regime predominantemente público na atividade-fim, por causa do princípio da continuidade. As que atuam em monopólio ou sem concorrência quase se equiparam à Fazenda Pública: podem receber poder de polícia, pagam por precatório e podem ter imunidade tributária.",
      },
      {
        termo: "Empresas supranacionais",
        faz: "Empresas cujo capital pertence a mais de um país, como uma usina hidrelétrica binacional, não são empresas públicas nem sociedades de economia mista. Por isso, não seguem a Lei 13.303/2016 nem a Lei 14.133/2021 (STJ, RO 275, 2025).",
      },
      {
        parte: "5. Bens, falência, privilégios e imunidade",
        termo: "Bens e dívidas",
        faz: "Em regra, os bens das estatais são privados: podem ser penhorados e adquiridos por usucapião. Mas os bens ligados diretamente ao serviço público recebem as proteções dos bens públicos, por causa da continuidade do serviço.",
        pista: "Os Correios têm os privilégios da Fazenda Pública: bens impenhoráveis e pagamento das dívidas judiciais por precatório (RE 220.906 do STF).",
      },
      {
        termo: "Precatório nas prestadoras sem concorrência",
        faz: "A sociedade de economia mista que presta serviço público próprio do Estado, sem concorrência, paga as dívidas judiciais por precatório (CF, art. 100), e os seus bens, rendas e serviços não podem ser bloqueados nem penhorados (ADPF 387, 2017; ADPF 275, 2018).",
        pista: "Fundamentos: legalidade orçamentária (art. 167, VI) e separação funcional dos Poderes (art. 2º c/c art. 60, § 4º, III). Pelo mesmo motivo, o STF proibiu bloqueios judiciais nos bens de uma companhia de saneamento para pagar verbas trabalhistas (ADPF 890, 2021).",
      },
      {
        termo: "Falência",
        faz: "A Lei de Falências (Lei 11.101/2005, art. 2º, I) não se aplica às empresas públicas nem às sociedades de economia mista, qualquer que seja a atividade.",
      },
      {
        termo: "Privilégios fiscais (CF, art. 173, § 2º)",
        faz: "As estatais não podem gozar de privilégios fiscais não extensivos às empresas do setor privado. Se um benefício fiscal dado a um banco estatal valer também para os bancos privados, não há problema.",
        pista: "A regra protege a livre concorrência (CF, art. 170, IV); por isso não atinge a estatal que atua em monopólio. Para o curso, a prestadora de serviço público em regime de concorrência também não pode ter privilégio, como uma distribuidora de energia sem exclusividade.",
      },
      {
        termo: "Imunidade tributária recíproca",
        faz: "O texto do art. 150, VI, “a”, e § 2º, da CF não inclui empresas públicas nem sociedades de economia mista. Mas o STF estende a imunidade às prestadoras de serviço público que não distribuem lucros: os Correios (RE 407.099, serviço público de prestação obrigatória e exclusiva), a Infraero (RE 363.412, monopólio) e uma sociedade de economia mista de saúde sem fins lucrativos e de capital quase todo público (RE 580.264, 2010).",
        pista: "No caso da Infraero, o STF disse que o art. 173, § 1º, não se aplica às delegatárias de serviço público. Sobre os Correios, no mesmo sentido: RE 354.897 e RE 398.630. A saúde é serviço público quando prestada pelo Estado, mas é livre à iniciativa privada (art. 199); mesmo assim, o STF deu a imunidade à estatal de saúde do RE 580.264, porque ela não tinha fins lucrativos.",
      },
      {
        termo: "Parâmetros da imunidade",
        faz: "Para o STF (ACO 1.460 AgR, 2015), a imunidade só alcança os bens e serviços ligados às finalidades essenciais da entidade; a atividade econômica voltada a aumentar o patrimônio do Estado ou de particulares deve ser tributada; e a desoneração não pode prejudicar a livre concorrência. Em 2022 (ACO 3.410), o STF resumiu em três requisitos: prestar serviço público, não ter intuito de lucro e atuar com exclusividade, sem concorrência.",
        pista: "Exemplo: a sociedade de economia mista estadual que presta, com exclusividade, abastecimento de água e coleta e tratamento de esgoto tem imunidade sobre os impostos federais.",
      },
      {
        termo: "Sem imunidade (Tema 508)",
        faz: "Não tem imunidade a sociedade de economia mista com ações negociadas em bolsa e que distribui lucros aos acionistas (RE 600.867, 2020), como uma distribuidora de energia listada em bolsa.",
        pista: "Também não tem imunidade uma estatal de processamento de dados que vende os seus serviços no mercado privado.",
      },
      {
        parte: "6. Responsabilidade e prescrição",
        termo: "Responsabilidade",
        faz: "As prestadoras de serviço público respondem objetivamente pelos danos causados pelos seus agentes (CF, art. 37, § 6º, teoria do risco administrativo). As que exploram atividade econômica respondem subjetivamente, pelas regras do direito privado.",
        pista: "Se a estatal não tiver como pagar, o ente que a criou responde de forma subsidiária.",
      },
      {
        termo: "Prescrição",
        faz: "As estatais seguem o Código Civil: 10 anos quando a lei não fixar prazo menor (art. 205), além dos prazos do art. 206. Não têm o prazo de 5 anos da Fazenda Pública (Decreto 20.910/1932, art. 1º, c/c Decreto-Lei 4.597/1942, art. 2º), que vale para as autarquias. Exceção: a indenização por danos causados por agentes de prestadoras de serviço público prescreve em 5 anos (Lei 9.494/1997, art. 1º-C).",
        pista: "Nas ações da estatal contra terceiros vale o Código Civil, mas o STJ aplica aos Correios os 5 anos do Decreto 20.910/1932. O STJ também aplica esses 5 anos às estatais que prestam serviço público essencial, sem fim lucrativo e sem concorrência (REsp 1.635.716, 2022).",
      },
      {
        parte: "7. Pessoal e dirigentes",
        termo: "Pessoal",
        faz: "Empregados públicos regidos pela CLT, com contrato de trabalho, admitidos por concurso público (CF, art. 37, II) e sem a estabilidade do art. 41 da CF.",
        pista: "A dispensa de empregado concursado precisa de motivação formal e razoável, em qualquer estatal, mesmo nas que concorrem no mercado. Não exige processo administrativo nem justa causa (Tema 1.022, RE 688.267, 2024).",
      },
      {
        termo: "Outras regras do pessoal",
        faz: "Vale a proibição de acumular cargos, empregos e funções (art. 37, XVI e XVII), com as exceções da Constituição. O teto remuneratório só se aplica se a estatal receber recursos do ente para pagar pessoal ou custeio (art. 37, § 9º).",
        pista: "Os empregados ficam no Regime Geral de Previdência (art. 40, § 13); as causas trabalhistas vão à Justiça do Trabalho (art. 114); respondem por improbidade (Lei 8.429/1992) e são funcionários públicos para fins penais (CP, art. 327, § 1º). Exemplo do teto: uma petroleira estatal que não depende do Tesouro pode pagar acima do subsídio de ministro do STF.",
      },
      {
        termo: "Concursos das estatais na Justiça comum",
        faz: "Compete à Justiça comum julgar as controvérsias da fase pré-contratual, de seleção e admissão de pessoal, e a eventual nulidade do concurso, mesmo quando o regime de contratação é celetista (Tema 992, RE 960.429, 2020).",
        pista: "Depois da contratação, as causas da relação de trabalho vão à Justiça do Trabalho.",
      },
      {
        termo: "Dirigentes",
        faz: "São os membros do conselho de administração e da diretoria. Quem vem de fora da estatal não é celetista nem ocupa cargo público: tem vínculo contratual especial, regido pela Lei 13.303/2016, pelo direito comercial e pelo estatuto da empresa.",
        pista: "São nomeados livremente pelo Chefe do Executivo. O STF julga inconstitucional exigir aprovação do Legislativo para nomear ou exonerar dirigentes de estatais.",
      },
      {
        termo: "Dirigentes como agentes públicos",
        faz: "Respondem por improbidade, podem ser réus em ação popular e cometer crimes contra a Administração. Nos atos de autoridade, são autoridade coatora em mandado de segurança: por exemplo, quando negam a participação de um candidato no concurso ou de uma empresa na licitação.",
        pista: "Não cabe mandado de segurança contra atos de gestão comercial, como o banco público que nega o financiamento de um carro.",
      },
      {
        termo: "Requisitos dos administradores (Lei 13.303/2016, art. 17)",
        faz: "Membros do conselho de administração e diretores, inclusive presidente, diretor-geral e diretor-presidente, devem ter reputação ilibada, notório conhecimento, experiência profissional e formação acadêmica compatível com o cargo, e não podem estar nas hipóteses de inelegibilidade da Lei Complementar 64/1990.",
        pista: "A lei quis moralizar a escolha dos administradores com requisitos e vedações. O notório conhecimento deve ser compatível com o cargo para o qual a pessoa foi indicada (Decreto 8.945/2016, art. 28, II).",
      },
      {
        termo: "Experiência profissional (art. 17, I)",
        faz: "Basta uma das opções: 10 anos na área de atuação da estatal ou em área conexa; ou 4 anos em cargo de direção ou chefia superior em empresa de porte ou objeto semelhante, em cargo em comissão ou função de confiança equivalente a DAS-4 ou superior no setor público, ou como docente ou pesquisador na área da estatal; ou 4 anos como profissional liberal em atividade ligada à área.",
        pista: "Chefia superior é a dos dois níveis hierárquicos não estatutários mais altos da empresa.",
      },
      {
        termo: "Dispensa da experiência (art. 17, § 5º)",
        faz: "O empregado da própria estatal indicado para administrador ou membro de comitê fica dispensado da experiência se cumprir, ao mesmo tempo: ter entrado por concurso público; ter mais de 10 anos de trabalho efetivo na estatal; e ter ocupado cargo na gestão superior, comprovando capacidade para o cargo.",
      },
      {
        termo: "Vedações às indicações (art. 17, § 2º)",
        faz: "Não podem ser indicados: representante do órgão regulador da estatal, Ministro de Estado, Secretário estadual ou municipal, titular de cargo de natureza especial ou de direção e assessoramento superior sem vínculo permanente com o serviço público, dirigente estatutário de partido e titular de mandato no Legislativo, ainda que licenciados; quem atuou, nos últimos 36 meses, na estrutura decisória de partido ou em campanha eleitoral; quem exerce cargo em organização sindical; quem foi fornecedor, comprador, demandante ou ofertante com o ente controlador ou com a estatal nos 3 anos anteriores à nomeação; e quem tenha ou possa ter conflito de interesse.",
        pista: "A primeira vedação alcança também os parentes consanguíneos ou afins até o terceiro grau (§ 3º). O STF julgou constitucionais as vedações dos incisos I e II (ADI 7.331, 2024), mas manteve as indicações feitas enquanto vigorou a liminar que as suspendeu.",
      },
      {
        parte: "8. Licitações",
        termo: "Licitações das estatais",
        faz: "As estatais licitam pela Lei 13.303/2016. Antes dela, seguiam a Lei 8.666/1993, hoje substituída pela Lei 14.133/2021. Pela própria Lei 13.303, continuam a valer as regras de pregão, as penais e alguns critérios de desempate da Lei 10.520/2002 (antiga Lei do Pregão) e da Lei 8.666/1993; como essas leis foram substituídas, da Lei 14.133 elas aproveitam as regras penais (art. 178, que levou os crimes de licitação ao Código Penal), as regras do pregão e alguns critérios de desempate.",
      },
      {
        termo: "Licitação dispensada (Lei 13.303/2016, art. 28, § 3º)",
        faz: "A estatal não licita: I – para comercializar, prestar ou executar diretamente produtos, serviços ou obras ligados ao seu objeto social; II – quando escolher parceiro por características particulares, ligadas a oportunidade de negócio definida e específica, justificada a inviabilidade de competição.",
        pista: "Exemplos: uma petroleira estatal vender petróleo, um banco público dar crédito aos clientes, ou a compra de ações para obter o controle de outra empresa. Oportunidades de negócio são formar e extinguir parcerias, comprar e vender participação em sociedades e operar no mercado de capitais.",
      },
      {
        termo: "Dispensa e inexigibilidade nas estatais",
        faz: "Funcionam como na Lei 14.133/2021, com justificativa do preço e da escolha do fornecedor. Dispensa por valor (art. 29, I e II): até R$ 100 mil para obras e serviços de engenharia e até R$ 50 mil para compras e outros serviços.",
        pista: "Diferenças para a Lei 14.133: lá se fala em valores “inferiores a”, aqui em “até”; a Lei 14.133 dá o valor maior também à manutenção de veículos e atualiza os valores todo ano por decreto; na Lei 13.303, o conselho de administração pode alterar os valores (art. 29, § 3º).",
      },
      {
        parte: "9. Diferenças entre empresa pública e sociedade de economia mista",
        termo: "As três diferenças",
        faz: "Empresa pública e sociedade de economia mista só diferem em três pontos: forma societária, composição do capital e foro das ações.",
      },
      {
        termo: "Forma societária",
        faz: "A sociedade de economia mista é sempre sociedade anônima (Lei 13.303/2016, art. 5º; Lei 6.404/1976, arts. 235 a 240). A empresa pública pode ter qualquer forma admitida em direito: unipessoal, pluripessoal e até sociedade anônima de capital público.",
        pista: "A União, que legisla sobre direito civil e comercial (CF, art. 22, I), pode até criar empresa pública federal com forma inédita. Algumas formas não combinam com a empresa pública, como a sociedade em nome coletivo e a cooperativa, típicas de pessoas físicas.",
      },
      {
        termo: "Composição do capital",
        faz: "Na sociedade de economia mista, o capital é público e privado, com o controle do voto nas mãos do Poder Público. Na empresa pública, o capital é só público, mas pode vir de vários entes e entidades da indireta, até de uma sociedade de economia mista, desde que o instituidor fique com a maioria do capital votante.",
        pista: "Se a questão diz que o capital é todo do ente e de outras entidades públicas, a entidade é empresa pública, nunca sociedade de economia mista.",
      },
      {
        termo: "Foro",
        faz: "Empresa pública federal: Justiça Federal (CF, art. 109, I). Sociedade de economia mista, mesmo federal: Justiça estadual (Súmula 556 do STF), salvo se a União intervier como assistente ou opoente, quando o caso vai à Justiça Federal (Súmula 517 do STF). Empresas públicas estaduais e municipais: Justiça estadual.",
        pista: "As causas trabalhistas dos empregados de qualquer estatal vão à Justiça do Trabalho.",
      },
      {
        parte: "10. Fundações públicas",
        termo: "Origem das fundações",
        faz: "No direito privado, a fundação é um patrimônio personalizado, destinado por um particular a uma finalidade social sem fins lucrativos, como educação, saúde ou pesquisa. Depois de criada, tem vida própria, e o instituidor não manda mais nela.",
      },
      {
        termo: "Fundação pública",
        faz: "É um patrimônio público personalizado, afetado a um fim público, instituído pelo Estado com dotação patrimonial e mantido com recursos do orçamento. Características: dotação patrimonial, personalidade jurídica (pública ou privada), atividade social, autoadministração e controle (tutela) nos limites da lei.",
        pista: "Parte da dotação pode vir de particulares; com a doação, o bem passa a ser público. Exemplo: o município doa o prédio, e um particular doa os equipamentos de um hospital fundacional.",
      },
      {
        termo: "Definição do DL 200/1967 (art. 5º, IV)",
        faz: "O decreto-lei fala só em fundação de direito privado, criada por autorização legislativa, sem fins lucrativos, para atividades que não exijam execução por entidades de direito público. A definição está superada: hoje a fundação pública pode ser de direito público ou de direito privado.",
        pista: "A Constituição não definiu a natureza delas; o STF e o STJ admitem as duas espécies (STF: RE 101.126 e RE 127.489; STJ: REsp 207.767 e REsp 480.632).",
      },
      {
        termo: "Fundação de direito público",
        faz: "Criada diretamente por lei, com personalidade desde a vigência da lei, é uma espécie de autarquia e segue o mesmo regime: é a “fundação autárquica” ou “autarquia fundacional”.",
        pista: "A diferença para a autarquia é só conceitual: a autarquia é um serviço personificado; a fundação, um patrimônio personalizado com finalidade, em geral, social.",
      },
      {
        termo: "Fundação de direito privado",
        faz: "A lei autoriza, e a personalidade nasce com o registro no Registro Civil de Pessoas Jurídicas. Segue regime híbrido: direito privado com regras públicas, como concurso, licitação e contratos administrativos.",
        pista: "Não exerce poder de polícia nem outra atividade exclusiva de Estado.",
      },
      {
        termo: "Regime público ou privado (Tema 545)",
        faz: "Depende do estatuto de criação ou autorização e das atividades prestadas. Atividades econômicas ou que podem ser delegadas podem seguir o regime privado, mesmo em fundação instituída ou mantida pelo Poder Público (RE 716.378, 2019).",
        pista: "A estabilidade especial do art. 19 do ADCT não alcança os empregados das fundações de direito privado, só os servidores das pessoas jurídicas de direito público.",
      },
      {
        termo: "Finalidades das fundações públicas",
        faz: "Sempre de caráter social e sem fins lucrativos: assistência social, assistência médica e hospitalar, educação e ensino, pesquisa e atividades culturais. A fundação pública não explora atividade econômica em sentido estrito; para isso, o Estado cria estatais.",
        pista: "A lei complementar que deve definir as áreas de atuação (CF, art. 37, XIX) nunca foi editada. Para parte da doutrina, ela valerá só para as fundações de direito privado; as de direito público seguiriam a lei que as criou e poderiam até exercer atividades típicas de Estado. Um projeto nessa linha (PLP 92/2007) lista saúde, assistência social, cultura, desporto, ciência e tecnologia, meio ambiente, previdência complementar do servidor, comunicação social e turismo.",
      },
      {
        termo: "Imunidade e prerrogativas processuais",
        faz: "As duas espécies têm imunidade recíproca de impostos, porque o art. 150, § 2º, da CF fala em “fundações instituídas e mantidas pelo Poder Público”. Prazo em dobro, remessa necessária e precatórios valem só para as de direito público.",
        pista: "A fundação de direito privado não tem isenção de custas judiciais (STJ, REsp 1.409.199, 2020).",
      },
      {
        termo: "Bens e licitação das fundações",
        faz: "Nas de direito público, os bens são públicos: impenhoráveis, imprescritíveis e com restrições para alienar. Nas de direito privado, os bens são privados, mas impenhoráveis se ligados ao serviço público. A Lei 14.133/2021 se aplica integralmente às duas espécies.",
      },
      {
        termo: "Pessoal e foro das fundações",
        faz: "Direito público: regime estatutário ou celetista, conforme a lei (predomina o estatutário). Direito privado: regime celetista, como nas fundações federais de previdência complementar do servidor (Lei 12.618/2012). Para as duas: proibição de acumular, concurso e teto.",
        pista: "Foro: as federais de direito público vão à Justiça Federal; as estaduais e municipais, à Justiça estadual. Nas federais de direito privado, a doutrina indica a Justiça estadual, mas o STJ as equipara às empresas públicas: Justiça Federal.",
      },
      {
        termo: "Fundações de saúde (ADI 4.197 e ADI 4.247)",
        faz: "É constitucional criar fundação pública de direito privado para prestar serviço público de saúde (ADI 4.197, 2023), e uma lei estadual pode adotar o regime celetista nessas fundações (ADI 4.247, 2020).",
      },
    ],
    cuidado:
      "Empresa pública: qualquer forma, capital todo público, federal na Justiça Federal. Sociedade de economia mista: sempre sociedade anônima, capital misto com controle público, Justiça estadual (salvo a União como assistente ou opoente). Nenhuma das duas está sujeita à falência.",
  },
  questoes: [
    {
      topico: "Empresas estatais",
      subassunto: "Forma societária",
      dificuldade: 4,
      raciocinio: "Capital todo público, com forma que não precisa ser S.A.",
      enunciado:
        "Uma lei autoriza a União a instituir uma entidade empresarial de capital exclusivamente público, organizada como sociedade limitada. Sobre essa entidade, é correto afirmar que",
      alternativas: [
        "é sociedade de economia mista, nome dado a toda estatal federal",
        "deveria ser sociedade anônima, forma obrigatória a qualquer estatal",
        "nasce da própria lei, sem necessidade de registrar seus atos",
        "tem personalidade de direito público, por causa do capital",
        "é empresa pública, que admite forma diversa da sociedade anônima",
      ],
      correta: 4,
      explicacao: "A empresa pública tem capital integralmente público e pode adotar outra forma societária. A sociedade anônima é obrigatória na sociedade de economia mista.",
      explicacaoErradas:
        "“sociedade de economia mista” exige capital também privado. “forma obrigatória” vale só para ela. “nasce da própria lei” descreve a autarquia. “direito público” erra, pois a estatal é pessoa de direito privado.",
      pegadinha: "Exigir sociedade anônima para toda estatal.",
      conhecimento: "No âmbito federal, o Decreto 8.945/2016 prefere a sociedade anônima para a empresa pública.",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Foro",
      dificuldade: 4,
      raciocinio: "A Justiça Federal só recebe a sociedade de economia mista se a União intervier.",
      enunciado:
        "Foram propostas duas ações de indenização: uma contra sociedade de economia mista federal e outra contra empresa pública federal. Sem intervenção da União, serão competentes, respectivamente, a Justiça",
      alternativas: [
        "Federal e estadual",
        "estadual e Federal",
        "Federal nas duas ações",
        "estadual nas duas ações",
        "do Trabalho e Federal",
      ],
      correta: 1,
      explicacao: "O art. 109, I, da CF cita empresa pública federal, mas não a sociedade de economia mista, que fica na Justiça estadual (Súmulas 517 e 556 do STF).",
      explicacaoErradas:
        "“Federal e estadual” inverte a regra. “Federal nas duas ações” esquece as súmulas. “estadual nas duas ações” ignora o art. 109, I. “do Trabalho” cuidaria de relação de emprego, o que não é o caso.",
      pegadinha: "Tratar as duas estatais federais do mesmo modo.",
      conhecimento: "A sociedade de economia mista vai à Justiça Federal se a União intervier como assistente ou opoente.",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Alienação do controle",
      dificuldade: 5,
      raciocinio: "Matriz é uma coisa. Subsidiária é outra.",
      enunciado:
        "A União quer vender o controle acionário de uma sociedade de economia mista, e outra estatal quer vender o controle de sua subsidiária. Pela decisão do STF na ADI 5.624,",
      alternativas: [
        "as duas vendas exigem autorização legislativa específica e licitação pública",
        "nenhuma venda depende de lei, e ambas seguem as regras de mercado",
        "a primeira dispensa a lei, e a segunda exige licitação plena",
        "a primeira exige lei e licitação, e a segunda dispensa as duas",
        "as duas dispensam a lei, se o Tribunal de Contas aprovar a venda",
      ],
      correta: 3,
      explicacao: "Vender o controle da matriz exige autorização legislativa e licitação. Na subsidiária, a venda dispensa as duas, respeitados os princípios da Administração e a competitividade.",
      explicacaoErradas:
        "“as duas vendas” trata igual o que o STF separou. “regras de mercado” esquece a exigência para a matriz. “dispensa a lei” erra a matriz. “Tribunal de Contas” não substitui a autorização legislativa.",
      pegadinha: "Aplicar à subsidiária a regra da empresa-matriz.",
      conhecimento: "A ADI 6.241 aceitou a autorização genérica de uma lei de programa de desestatização.",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Responsabilidade",
      dificuldade: 5,
      raciocinio: "O § 6º olha para o serviço público, e não para a estatal em si.",
      enunciado:
        "Em casos distintos, um caminhão de uma estatal que explora atividade econômica em concorrência e um ônibus de uma estatal que presta transporte coletivo atropelam pedestres. O art. 37, § 6º, da CF alcança",
      alternativas: [
        "só a prestadora de serviço público, pois a norma não trata da outra",
        "as duas, pois toda estatal integra a Administração indireta",
        "nenhuma, pois as duas têm personalidade de direito privado",
        "só a exploradora de atividade, pois ela visa ao lucro",
        "as duas, mas apenas nos casos de dolo do motorista ou de culpa grave",
      ],
      correta: 0,
      explicacao: "O dispositivo fala em pessoas de direito público e de direito privado prestadoras de serviço público. A exploradora de atividade econômica responde pelo regime comum.",
      explicacaoErradas:
        "“toda estatal” amplia o texto. “personalidade de direito privado” não exclui a prestadora. “visa ao lucro” inverte a regra. “dolo” e “culpa grave” dizem respeito ao regresso contra o agente.",
      pegadinha: "Olhar a natureza da entidade em vez da atividade.",
      conhecimento: "No Tema 130, o STF aplicou a responsabilidade objetiva também em favor de quem não é usuário do serviço.",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Precatórios",
      dificuldade: 5,
      raciocinio: "Serviço público, sem concorrência e sem lucro aproximam a estatal da Fazenda Pública.",
      enunciado:
        "Uma empresa pública presta serviço público essencial, sem concorrência e sem distribuir lucros. Condenada em juízo, pede para pagar a dívida por precatório. Segundo a jurisprudência do STF, o pedido",
      alternativas: [
        "deve ser negado, pois precatório é só para pessoa de direito público",
        "pode ser aceito, em razão do serviço e da falta de concorrência",
        "pode ser aceito, pois toda estatal equivale à Fazenda Pública",
        "deve ser negado, pois a estatal paga como empresa particular",
        "depende de lei do ente criador, por haver autonomia financeira",
      ],
      correta: 1,
      explicacao: "O STF aplica o art. 100 da CF às estatais prestadoras de serviço público próprio do Estado, de natureza não concorrencial e sem intuito primário de lucro.",
      explicacaoErradas:
        "“só para pessoa de direito público” e “como empresa particular” ignoram a jurisprudência. “toda estatal” exagera, pois a regra não alcança a exploradora em concorrência. “lei do ente criador” não é a condição.",
      pegadinha: "Aplicar a mesma resposta a toda estatal.",
      conhecimento: "Os Correios são o exemplo clássico, com impenhorabilidade e precatório.",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Dispensa do empregado",
      dificuldade: 5,
      raciocinio: "Motivar é uma coisa. Abrir processo é outra.",
      enunciado:
        "Uma sociedade de economia mista que atua em concorrência dispensa um empregado concursado sem indicar os motivos. Segundo a tese do STF no Tema 1.022,",
      alternativas: [
        "a dispensa é válida, pois a concorrência afasta o dever de motivar",
        "a dispensa depende de processo disciplinar, com contraditório e ampla defesa",
        "a motivação é exigida em ato formal, sem necessidade de processo",
        "o empregado tem a mesma estabilidade dos servidores estatutários",
        "a motivação é devida só por estatais que prestam serviço público",
      ],
      correta: 2,
      explicacao: "As estatais têm o dever de motivar, em ato formal, a dispensa de empregados concursados, sem exigência de processo administrativo.",
      explicacaoErradas:
        "“concorrência afasta” contraria a tese, que inclui o regime concorrencial. “processo disciplinar” é o que a tese dispensa. “estabilidade” não existe aí. “só por estatais” limita o que a tese não limitou.",
      pegadinha: "Confundir motivação com processo administrativo.",
      conhecimento: "A motivação pode indicar razões de fato e de direito de modo simples.",
    },
    {
      topico: "Fundações públicas",
      subassunto: "Regime",
      dificuldade: 5,
      raciocinio: "Autorização e registro indicam direito privado.",
      enunciado:
        "Uma lei autoriza o Poder Executivo federal a instituir uma fundação de pesquisa, sem poder de polícia, e o estatuto é registrado em cartório. Sobre essa entidade, é correto afirmar que",
      alternativas: [
        "é fundação de direito público, por ter sido prevista em lei",
        "é autarquia fundacional, de personalidade nascida com a lei",
        "seus empregados têm a estabilidade especial do art. 19 do ADCT",
        "fica fora da Administração indireta por causa do regime privado",
        "é fundação de direito privado, que nasce com o seu registro",
      ],
      correta: 4,
      explicacao: "A fundação de direito privado depende de lei autorizadora e de registro. No Tema 545, o STF negou a estabilidade do art. 19 do ADCT aos seus empregados.",
      explicacaoErradas:
        "“direito público” e “autarquia fundacional” pedem criação direta por lei. “estabilidade especial” foi afastada pelo STF. “fora da Administração indireta” erra, pois ela integra essa estrutura.",
      pegadinha: "Achar que a simples menção em lei torna a fundação de direito público.",
      conhecimento: "Lei complementar define as áreas de atuação das fundações (art. 37, XIX, da CF).",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Subsidiárias",
      dificuldade: 4,
      raciocinio: "Autorização genérica basta.",
      enunciado:
        "A lei que autorizou a criação de uma estatal prevê, em termos gerais, que ela pode ter subsidiárias. Agora a estatal quer constituir uma subsidiária para um ramo novo de seu objeto. Segundo o STF, ela",
      alternativas: [
        "precisa de uma nova lei para cada subsidiária que for criar",
        "precisa de decreto legislativo aprovado pelo Congresso",
        "não pode, pois subsidiárias são vedadas na Administração indireta",
        "pode, pois basta a autorização genérica prevista na lei",
        "pode, pois a estatal cria subsidiárias sem nenhuma autorização",
      ],
      correta: 3,
      explicacao: "Na ADI 1.649, o STF entendeu que a autorização genérica na lei instituidora atende ao art. 37, XX, da CF.",
      explicacaoErradas:
        "“nova lei” exagera a exigência “em cada caso”. “decreto legislativo” não é o instrumento. “vedadas” contraria o art. 37, XX. “sem nenhuma autorização” dispensa o que a Constituição exige.",
      pegadinha: "Ler “em cada caso” como lei específica para cada subsidiária.",
      conhecimento: "A Lei 13.303/2016 exige que o objeto da subsidiária se relacione com o da estatal controladora.",
    },
  ],
};
