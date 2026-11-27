import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-02",
  resumo: {
    ideia:
      "O Direito Administrativo organiza a função administrativa do Estado. Para entendê-lo, é preciso separar Estado, governo e Administração, e saber de onde vêm suas regras. Esta aula cobre o direito público e privado, a origem, o conceito e o objeto da matéria, as influências estrangeiras, as novas tendências, as fontes, os sistemas de controle, o Estado e suas funções, a federação, o governo e os sentidos de Administração Pública.",
    itens: [
      {
        parte: "1. Direito público e privado",
        termo: "Direito público e direito privado",
        faz: "O direito privado rege as relações entre particulares, em pé de igualdade (horizontalidade), com autonomia da vontade. O direito público rege as relações entre o Estado e os indivíduos, com o Estado em posição superior (verticalidade) e sob estrita legalidade.",
        pista: "São públicos o direito constitucional, o administrativo, o tributário, o penal, o processual e o eleitoral. São privados o civil e o comercial.",
      },
      {
        termo: "Exemplos da diferença",
        faz: "Numa blitz, a ordem do agente para parar o carro obriga; a mesma ordem dada por um desconhecido não obriga ninguém. Uma construtora não pode forçar alguém a vender o terreno, mas o Estado pode desapropriá-lo, pagando indenização.",
        pista: "Direito público: poder de polícia, contratos administrativos, desapropriação. Direito privado: direito de família, locação entre particulares.",
      },
      {
        termo: "Nenhum regime puro",
        faz: "A divisão serve mais para estudar do que na prática: quase não há aplicação pura de um só regime. O direito privado se aplica de forma subsidiária nos contratos administrativos e de forma predominante quando o Estado explora atividade econômica.",
        pista: "O Estado nunca atua só sob o direito privado: mesmo nesses casos, continua preso a regras públicas, como concurso e licitação.",
      },
      {
        termo: "Direito privado no Estado",
        faz: "A estatal que explora atividade econômica, como um banco público, segue o regime das empresas privadas (CF, art. 173, § 1º, II), sem as prerrogativas do Estado. Os contratos de seguro e de locação firmados pela Administração são chamados semipúblicos, porque seguem sobretudo o direito privado.",
        pista: "Os contratos típicos da Administração direta são contratos administrativos, regidos pelo direito público.",
      },
      {
        parte: "2. Origem e conceito",
        termo: "Origem do Direito Administrativo",
        faz: "Nasceu na França, depois da Revolução Francesa, junto com o Estado de Direito. Como não havia leis especiais de direito público, as bases da matéria vieram da jurisprudência do Conselho de Estado francês, criado em dezembro de 1799.",
        pista: "No início, o Conselho era só consultivo: até 1872, propunha decisões ao Chefe de Estado. Depois passou a decidir, o que ajuda a explicar a dualidade de jurisdição francesa. Dali, as ideias se espalharam pela Europa continental e chegaram ao Brasil.",
      },
      {
        termo: "Conceito atual",
        faz: "Ramo do direito público que rege a função administrativa, seus órgãos, agentes e atividades.",
        pista: "Três pontos: é um conjunto de normas (regras e princípios); rege as pessoas, os órgãos e os agentes da Administração; e trata da função administrativa, voltada ao interesse público.",
      },
      {
        termo: "Direito não codificado",
        faz: "O Direito Administrativo não tem um código único. Suas normas estão espalhadas na Constituição e em várias leis: improbidade (Lei 8.429/1992), servidores federais (Lei 8.112/1990), processo administrativo (Lei 9.784/1999) e licitações (Lei 14.133/2021).",
        pista: "Exemplos de matérias codificadas: o Código Civil (Lei 10.406/2002), o Código Penal (Decreto-Lei 2.848/1940) e o Código de Processo Civil (Lei 13.105/2015).",
      },
      {
        termo: "Critério das prerrogativas públicas",
        faz: "Escola francesa (puissance publique): a matéria estudaria os atos de império, em que o Estado usa as suas prerrogativas, separados dos atos de gestão.",
        pista: "Crítica: deixa de fora os atos sem prerrogativas, como os atos negociais (licenças e autorizações).",
      },
      {
        termo: "Critério do serviço público",
        faz: "Escola francesa: a matéria estudaria o serviço público, em sentido amplo (toda atividade do Estado) ou em sentido estrito.",
        pista: "Crítica: é difícil conceituar serviço público, e há temas da matéria que não são serviço público, como o poder de polícia: o serviço oferece uma utilidade, a polícia impõe limites.",
      },
      {
        termo: "Critério do Poder Executivo",
        faz: "Linha italiana, também chamada subjetivista: o Direito Administrativo regeria a atuação do Poder Executivo.",
        pista: "Crítica: os outros Poderes também administram, e o Executivo também pratica atos de outra natureza, como os atos políticos.",
      },
      {
        termo: "Critério legalista",
        faz: "Também chamado exegético, empírico ou caótico (escola francesa): a matéria estudaria só as leis administrativas escritas.",
        pista: "Crítica: o direito não se resume à lei; há princípios e outras fontes.",
      },
      {
        termo: "Critério das relações jurídicas",
        faz: "A matéria seria o conjunto de normas que rege as relações entre a Administração e os administrados.",
        pista: "Crítica: outros ramos também regem essas relações, como o tributário, o penal, o eleitoral e o processual; e ficam de fora as relações internas da Administração, que não envolvem administrados.",
      },
      {
        termo: "Critério teleológico",
        faz: "Também chamado finalístico: a matéria seria o conjunto de normas que rege a atuação do Estado para cumprir os seus fins.",
        pista: "Crítica: não há definição precisa dos fins do Estado, e a jurisdição também busca fins estatais.",
      },
      {
        termo: "Critério negativo ou residual",
        faz: "A matéria seria tudo o que sobra da atividade do Estado, tirando o nível constitucional, a legislação, a jurisdição e as relações de direito privado.",
        pista: "Crítica: o Direito Administrativo nunca deixou de aplicar regras de direito privado; ele não é 100% público.",
      },
      {
        termo: "Critério da Administração Pública",
        faz: "A matéria é o conjunto de princípios e normas que rege a Administração Pública: os órgãos, as entidades e os agentes, a função administrativa que exercem e os bens e meios que usam para cumprir os fins do Estado.",
        pista: "É o critério mais adotado no Brasil, porque junta vários aspectos num só conceito.",
      },
      {
        parte: "3. Objeto e função administrativa",
        termo: "Objeto do Direito Administrativo",
        faz: "Abrange todas as relações internas da Administração (entre órgãos e entidades e com seus agentes, estatutários e celetistas) e as relações com os particulares, mesmo quando regidas em parte pelo direito privado. Inclui a função administrativa exercida pelo Legislativo e pelo Judiciário.",
        pista: "Também entram, em certa medida, os empregados celetistas das estatais e a atividade dos particulares que prestam serviço público por delegação do Estado, que segue regras de direito público.",
      },
      {
        termo: "Fora do objeto",
        faz: "Ficam de fora a função política ou de governo e as funções típicas do Legislativo e do Judiciário, que são legislar e julgar.",
      },
      {
        termo: "Função administrativa",
        faz: "É a atividade da Administração: prestar serviços públicos, exercer o poder de polícia, fomentar e intervir. É chamada de atividade não contenciosa, porque a Administração não decide com força definitiva: seus atos podem ser revistos pelo Judiciário.",
        pista: "Pelo critério residual, é o que não é legislar nem julgar. Não é exclusiva do Executivo: o Legislativo e o Judiciário também administram.",
      },
      {
        termo: "Critérios para identificar a função",
        faz: "Subjetivo ou orgânico: olha quem exerce. Objetivo material: olha o conteúdo da atividade. Objetivo formal: olha o regime jurídico adotado.",
        pista: "Nenhum critério basta sozinho: é preciso olhar ao mesmo tempo o sujeito, a atividade e o regime jurídico.",
      },
      {
        termo: "Seis características da função",
        faz: "1) É exercida pelo Estado ou por quem age em seu lugar, por delegação. 2) Funciona dentro de uma estrutura hierárquica. 3) Atua por atos abaixo da lei (infralegais) ou, por exceção, abaixo da Constituição (infraconstitucionais). 4) Sofre controle de legalidade pelo Judiciário (CF, art. 5º, XXXV). 5) Segue o regime de direito público, com prerrogativas e sujeições. 6) Busca os fins do Estado, o interesse da coletividade.",
      },
      {
        parte: "4. Influências estrangeiras",
        termo: "Fases no Brasil",
        faz: "Na Colônia, valia a legislação portuguesa (as Ordenações do Reino). No Império, vieram ideias do Estado Liberal, sob influência francesa, e o Brasil teve um Conselho de Estado, mas só consultivo, sem função de julgar. Na Primeira República, o Poder Moderador e o Conselho de Estado acabaram, e o país adotou a jurisdição única do modelo anglo-americano: a Administração passou a se submeter ao Judiciário.",
        pista: "A matéria se formou pela doutrina, pela jurisprudência e pelo direito positivo.",
      },
      {
        termo: "Direito norte-americano e common law",
        faz: "Trouxeram: o peso da jurisprudência na formação do direito, a jurisdição única e o controle judicial da Administração; o mandado de segurança e o mandado de injunção; o devido processo legal; a agencificação (agências reguladoras, nos anos 90); a regulação estatal; e as parcerias público-privadas.",
      },
      {
        termo: "Direito francês",
        faz: "Trouxe: a ideia de ato administrativo; a autoexecutoriedade; as teorias da responsabilidade civil do Estado; o conceito de serviço público; as prerrogativas da Administração; a teoria dos contratos administrativos (cláusulas exorbitantes, equilíbrio econômico-financeiro, teoria da imprevisão, fato do príncipe e fato da Administração); e o conceito de legalidade.",
        pista: "Também amenizou ideias americanas, mantendo um regime jurídico especial para o setor público.",
      },
      {
        termo: "Direito italiano e alemão",
        faz: "Do italiano: o mérito, os conceitos de autarquia e de entidades paraestatais, a noção de interesse público e o método de estudo da matéria. Do alemão: a razoabilidade e seu efeito na discricionariedade, os conceitos jurídicos indeterminados, a segurança jurídica e a proteção à confiança, e a constitucionalização dos princípios, com foco na pessoa humana.",
        pista: "Portugal e Espanha também influenciaram os conceitos indeterminados e a razoabilidade, e o direito português marcou a legislação sobre terras públicas. Resumo: serviço público, francês; autarquias, italiano; razoabilidade e proporcionalidade, alemão; jurisdição única, common law.",
      },
      {
        parte: "5. Novas tendências",
        termo: "Constitucionalização",
        faz: "Ocorre em dois sentidos. Primeiro, a Constituição traz muitas regras administrativas: princípios (art. 37), servidores e concurso (art. 37, II a XV), licitação (art. 37, XXI), responsabilidade civil do Estado (art. 37, § 6º) e previdência (art. 40). Segundo, os princípios e valores constitucionais, como a dignidade da pessoa humana, passam a guiar a interpretação de todo o direito.",
        pista: "Efeitos: a legalidade se amplia, e há quem fale em princípio da constitucionalidade; e a discricionariedade e o mérito diminuem, porque o Judiciário passa a controlar os atos também pelos princípios.",
      },
      {
        termo: "Democratização",
        faz: "Crescem os meios de participação: direito à informação (CF, art. 5º, XXXIII), direito de denunciar irregularidades ao Tribunal de Contas da União (art. 74, § 2º), gestão democrática na seguridade, na saúde e no ensino (arts. 194, VII, 198, III, e 206, VI), Lei de Acesso à Informação (Lei 12.527/2011), orçamento participativo e parcerias com a sociedade civil (Lei 13.019/2014).",
      },
      {
        termo: "Mudanças na discricionariedade",
        faz: "Em alguns casos ela aumenta, como na discricionariedade técnica das agências reguladoras. Em outros, diminui, porque a legalidade passa a incluir os princípios.",
      },
      {
        termo: "Crise do serviço público",
        faz: "Fica difícil definir as atividades exclusivas do Estado, porque o ordenamento abre espaço à livre iniciativa e à livre concorrência. Exemplo: o STF admite que a lei delegue o poder de polícia a entidades da Administração indireta de direito privado, com capital majoritariamente público, que prestem só serviço público próprio do Estado, em regime não concorrencial (RE 633.782).",
        pista: "Não é delegação à iniciativa privada: são entidades da própria Administração.",
      },
      {
        termo: "Agencificação",
        faz: "Nos anos 90, o Brasil importou o modelo americano e passou funções de regulação a agências reguladoras em regime especial, com autonomia administrativa, financeira e técnica. Seus dirigentes têm mandato fixo, sem livre exoneração.",
        pista: "Função quase legislativa: editam normas obrigatórias, se a lei de criação permitir, mas essas normas não ficam acima da lei. Função quase jurisdicional: resolvem conflitos entre usuários e prestadores, sujeitos ao controle judicial.",
      },
      {
        termo: "Subsidiariedade",
        faz: "O Estado respeita os direitos individuais e a livre iniciativa e deixa de atuar em áreas tipicamente privadas; em troca, fomenta, coordena, regula e fiscaliza a iniciativa privada.",
        pista: "Exemplos: privatizar estatais e atividades antes tidas como serviço público; ampliar o fomento e as parcerias com o setor privado; e o crescimento do terceiro setor (entidades privadas sem fins lucrativos).",
      },
      {
        termo: "Reforma da Administração",
        faz: "Desde os anos 90, o modelo gerencial troca o controle burocrático pelo controle de resultados. A Constituição criou o contrato de gestão (art. 37, § 8º), que troca metas por mais autonomia, e a Emenda Constitucional 19/1998 flexibilizou a estabilidade dos servidores e aumentou os requisitos para adquiri-la.",
        pista: "Resultados: privatização de várias estatais; publicização, com organizações sociais (Lei 9.637/1998), OSCIPs (Lei 9.790/1999) e organizações da sociedade civil (Lei 13.019/2014); acesso à informação (Lei 12.527/2011); e gestão associada de serviços públicos (Lei 11.107/2005), só em parte implantada.",
      },
      {
        termo: "Consensualidade",
        faz: "Pela supremacia do interesse público, a Administração impõe a sua vontade (imperatividade e poder extroverso). Os modelos modernos valorizam a participação: quando possível, a Administração troca as práticas impositivas por acordos.",
        pista: "Exemplos: termo de ajustamento de conduta, contratos de gestão, consórcios públicos, parcerias público-privadas, audiências e consultas públicas, conciliação, mediação e arbitragem, e colaboração com entidades sem fins lucrativos.",
      },
      {
        termo: "Pessoa humana e supremacia",
        faz: "A supremacia do interesse público está em crise diante dos direitos fundamentais e deve ser reconstruída, não abandonada, porque nenhum direito individual é ilimitado. No conflito, o interesse coletivo prevalece, mas sem ofender a dignidade da pessoa, com base na razoabilidade e na proporcionalidade.",
      },
      {
        termo: "Fuga para o direito privado",
        faz: "Em busca de eficiência, o setor público usa cada vez mais instrumentos privados: o regime da CLT para agentes de algumas entidades de direito público, como conselhos profissionais e consórcios públicos de direito público, e estatais criadas para atividades típicas de Estado, como o poder de polícia.",
        pista: "A fuga nunca é total: mesmo com serviços passados ao setor privado, continuam regras públicas, como a prestação de contas, o regime dos serviços públicos, a responsabilidade civil e os princípios administrativos.",
      },
      {
        parte: "6. Fontes",
        termo: "Fontes",
        faz: "A lei é a fonte principal. Doutrina, jurisprudência e costumes são secundárias.",
        pista: "Súmula vinculante obriga a Administração, por isso a doutrina a trata à parte. Em regra, são fontes primárias a lei e as decisões judiciais com efeito vinculante ou para todos (erga omnes); as demais são secundárias.",
      },
      {
        termo: "Fonte primária: a lei",
        faz: "A lei é fonte primária, formal, organizada e escrita, porque a Administração só age com base nela. Aqui “lei” tem sentido amplo: qualquer ato normativo, que é geral, abstrato e impessoal.",
        pista: "Em sentido amplo, entram a Constituição (e as constituições estaduais e leis orgânicas), as leis em sentido estrito e os atos normativos administrativos.",
      },
      {
        termo: "Lei obrigatória e impessoal",
        faz: "A lei obriga a própria Administração: o Estado cria as normas, mas também se submete a elas, e o ato que as contraria é ilegal. A lei é impessoal porque não pensa em nomes, e é geral e abstrata porque regula situações futuras e indeterminadas.",
        pista: "Exemplo: a lei que exige concurso público não foi feita para uma pessoa certa, mas para todos que queiram um cargo efetivo.",
      },
      {
        termo: "Pirâmide das normas",
        faz: "No topo está a Constituição, com as emendas e os tratados de direitos humanos aprovados pelo rito das emendas (CF, art. 5º, § 3º). Abaixo vêm os atos normativos primários, como as leis ordinárias e complementares, que inovam no ordenamento. Depois, os atos normativos administrativos, secundários, que não podem inovar.",
        pista: "Os atos administrativos concretos ficam fora da pirâmide: não são fonte, apenas aplicam as normas.",
      },
      {
        termo: "Supremacia da Constituição",
        faz: "Todas as normas ficam abaixo da Constituição, no aspecto formal e no material. Formal: a norma só vale se seguir o processo previsto na Constituição. Material: o conteúdo não pode contrariar a Constituição.",
        pista: "Exemplo formal: é do Presidente a iniciativa das leis que fixem ou modifiquem os efetivos das Forças Armadas (CF, art. 61, § 1º, I); um projeto de parlamentar sobre isso é inconstitucional. Exemplo material: uma lei não pode dispensar concurso para cargo efetivo (art. 37, II).",
      },
      {
        termo: "Lei em sentido estrito",
        faz: "É o ato normativo primário, que pode criar direitos e obrigações. As principais são as leis ordinárias e complementares, mas a Constituição prevê outros atos, como as leis delegadas e as medidas provisórias (CF, art. 59).",
      },
      {
        termo: "Atos normativos administrativos",
        faz: "São atos de natureza secundária: ficam logo abaixo das leis (infralegais) e não podem inovar no ordenamento. O principal é o decreto executivo ou regulamentar, que detalha a lei para a sua fiel execução (CF, art. 84, IV). Há também resoluções, portarias normativas e pareceres normativos.",
        pista: "Exemplo: a lei fixa os requisitos mínimos de um benefício, e o decreto detalha como aplicá-los, de forma igual para todos.",
      },
      {
        termo: "Três observações sobre as fontes",
        faz: "1) Para a maioria, os atos normativos administrativos são fonte primária (estão na lei em sentido amplo), embora sejam atos de natureza secundária; há autores que os tratam como fonte secundária. 2) Os decretos autônomos (CF, art. 84, VI) também são fonte primária, porque inovam no ordenamento. 3) Os tratados internacionais são fontes supranacionais; incorporados, viram fonte primária, com nível constitucional, supralegal ou legal conforme a matéria e o rito.",
        pista: "Não confunda “ato de natureza secundária” com “fonte secundária”. Na prova, trate os atos normativos administrativos como fonte primária.",
      },
      {
        termo: "Fontes secundárias",
        faz: "Jurisprudência, doutrina e costumes. Também são chamadas de materiais, não organizadas, não escritas, mediatas ou subsidiárias, porque surgem da vida real e, em regra, não obrigam a Administração: servem de orientação e de base para o legislador.",
        pista: "A doutrina costuma citar cinco fontes: lei, jurisprudência, doutrina, princípios gerais do direito e costumes.",
      },
      {
        termo: "Jurisprudência",
        faz: "É o conjunto de decisões reiteradas dos tribunais sobre um mesmo assunto. Não há número mínimo de decisões: ela se forma naturalmente. Os tribunais de contas também firmam jurisprudência sobre os seus temas.",
        pista: "Exemplo: o aprovado dentro do número de vagas tinha só expectativa de direito. Os tribunais passaram a reconhecer o direito à nomeação, sem lei que o dissesse, e esse entendimento virou jurisprudência.",
      },
      {
        termo: "Súmula comum",
        faz: "A súmula comum só organiza e divulga a jurisprudência e, em regra, não obriga ninguém. Exemplo: a Súmula 633 do STJ firmou que a Lei 9.784/1999, sobretudo o prazo de decadência para rever atos, se aplica de forma subsidiária a Estados e Municípios sem norma local própria.",
        pista: "Em regra, a decisão judicial só vale entre as partes do processo (inter partes). Se três aprovados não foram nomeados e só um entrou na Justiça, a decisão alcança só ele.",
      },
      {
        termo: "Jurisprudência vinculante",
        faz: "Em dois casos, a decisão judicial obriga a Administração e vira fonte primária: as decisões definitivas do STF no controle concentrado (ADI e ADC), que têm efeito para todos e vinculante (CF, art. 102, § 2º), e as súmulas vinculantes, que só o STF pode editar (art. 103-A).",
        pista: "A súmula vinculante obriga os demais órgãos do Judiciário e toda a Administração direta e indireta, em todas as esferas. Exemplo: “só por lei se pode sujeitar a exame psicotécnico a habilitação de candidato a cargo público” (Súmula Vinculante 44); a previsão só no edital não basta.",
      },
      {
        termo: "Doutrina",
        faz: "São os estudos dos juristas, em livros e pesquisas. Não vincula, mas orienta as decisões e ajuda a criar leis. Vários temas vêm sobretudo da doutrina, como a teoria dos atos administrativos e os poderes administrativos.",
        pista: "Exemplo: a Lei 9.784/1999 incorporou vários conceitos que antes só a doutrina trazia.",
      },
      {
        termo: "Costumes",
        faz: "São regras informais seguidas de forma uniforme e constante, com a consciência de que são obrigatórias. Perderam força por causa da legalidade e nunca se aplicam contra a lei.",
        pista: "Exemplo: um órgão sempre fechou às 18h. Se passar a fechar às 17h sem aviso, no dia em que vence o prazo de um recurso, o cidadão é prejudicado. A mudança é possível, mas exige publicidade prévia.",
      },
      {
        termo: "Costumes sociais e administrativos",
        faz: "Costumes sociais: regras não escritas seguidas pelo grupo social como obrigatórias; só importam quando influenciam a lei e a jurisprudência, como fonte indireta. Costumes administrativos (praxe administrativa): práticas repetidas dos agentes diante de certa situação; na falta de norma, funcionam como fonte secundária.",
      },
      {
        termo: "Lei formal e lei material",
        faz: "Lei em sentido formal: seguiu o processo legislativo, tenha ou não generalidade e abstração. Lei em sentido material: tem conteúdo de lei, geral e abstrato, seja ou não editada pelo Legislativo.",
        pista: "A lei que dá pensão vitalícia a uma viúva de ex-combatente é só formal: tem efeito concreto. O regimento interno de um tribunal e a norma que fixa multa de trânsito são leis em sentido material.",
      },
      {
        parte: "7. Sistemas administrativos",
        termo: "Para que servem",
        faz: "Os sistemas administrativos são a forma de controlar a legalidade e a legitimidade dos atos da Administração. Sem controle, a Administração poderia praticar atos ilegais sem correção.",
      },
      {
        termo: "Contencioso administrativo",
        faz: "Modelo francês: há uma justiça administrativa separada, com decisão definitiva.",
        pista: "Também chamado de sistema de dualidade de jurisdição: os atos da Administração são julgados por tribunais administrativos, e o Judiciário não revê essas decisões.",
      },
      {
        termo: "Sistema de jurisdição única",
        faz: "É o modelo brasileiro: o Judiciário dá a palavra final (art. 5º, XXXV, da CF).",
        pista: "Também chamado de sistema inglês, unidade de jurisdição ou jurisdição una.",
      },
      {
        termo: "Solução na via administrativa",
        faz: "A jurisdição única não impede que conflitos sejam resolvidos pela Administração, nem que ela anule os próprios atos ilegais (autotutela). Mas quem não concordar sempre pode levar o caso ao Judiciário.",
      },
      {
        termo: "Exceções à palavra final do Judiciário",
        faz: "Em casos raros, a decisão definitiva é de outro Poder, como o julgamento do Presidente da República por crime de responsabilidade pelo Senado (CF, art. 52, I), cujo mérito o Judiciário não revê. Os atos políticos, como a sanção ou o veto de leis, também não são revistos.",
        pista: "Essas exceções não descaracterizam o sistema de jurisdição única.",
      },
      {
        termo: "Esgotar a via administrativa",
        faz: "Em regra, não é preciso esgotar a via administrativa para ir ao Judiciário. Exceções: ações sobre disciplina e competições desportivas, que exigem esgotar a Justiça Desportiva (CF, art. 217, § 1º), e a reclamação ao STF contra ato ou omissão da Administração que contrarie súmula vinculante (Lei 11.417/2006, art. 7º, § 1º).",
      },
      {
        parte: "8. Estado",
        termo: "Estado como pessoa jurídica",
        faz: "O Estado se apresenta lá fora como ente soberano, nas relações com outros Estados, e aqui dentro como pessoa jurídica de direito público, capaz de ter direitos e obrigações (Código Civil, arts. 40 e 41).",
        pista: "O conceito muda conforme o ângulo. Sociológico: corporação territorial com poder de mando originário. Político: comunidade de pessoas fixada num território, com poder superior de ação, de mando e de coerção. Constitucional: pessoa jurídica territorial soberana.",
      },
      {
        termo: "O que faz um Estado",
        faz: "Não há consenso se grupos primitivos, como as tribos, já eram Estados: as regras dos chefes eram dispersas e protegiam sobretudo interesses pessoais. O traço essencial do Estado é a organização, a capacidade de atender às necessidades da coletividade de forma estruturada.",
      },
      {
        termo: "Elementos do Estado",
        faz: "Povo, território e governo soberano.",
        pista: "Povo é o elemento humano; território, a base física; governo soberano, o elemento que conduz o Estado, com poder de se auto-organizar e se autodeterminar, vindo do povo.",
      },
      {
        termo: "Soberania",
        faz: "É o poder absoluto, indivisível e incontrastável do Estado de se organizar e se conduzir segundo a vontade do seu povo e de fazer cumprir suas decisões, inclusive pela força legítima.",
      },
      {
        termo: "Estado de Direito",
        faz: "Substituiu o poder quase ilimitado dos monarcas. Apoia-se em três ideias: legalidade (o Estado só age com base na lei), universalidade da jurisdição (todos os atos estatais podem ser controlados) e separação dos Poderes.",
        pista: "O poder deixa de se legitimar pela religião ou pelo carisma do governante e passa a se apoiar em normas gerais e abstratas, que valem também para quem governa. Repartir o poder em funções não quebra a unidade e a indivisibilidade do poder estatal.",
      },
      {
        parte: "9. Poderes e funções",
        termo: "Três funções do Estado",
        faz: "Função legislativa: editar atos normativos primários, gerais e abstratos. Função jurisdicional: resolver conflitos com força definitiva. Função administrativa: executar a lei.",
        pista: "São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário (CF, art. 2º). A tripartição foi pensada por Montesquieu, em 1748, para especializar as funções e impedir que todo o poder ficasse nas mãos de um só.",
      },
      {
        termo: "Função legislativa e jurisdicional",
        faz: "Para ser legislativo, o ato deve ser geral, abstrato e primário: tem base direta na Constituição e inova no ordenamento. Com a lei, o Estado regula as relações e fica acima e fora delas. Na jurisdição, o Estado é chamado a resolver um conflito entre as partes e encerra a disputa com força definitiva.",
        pista: "Exemplo: a lei que manda prestar contas todo aquele que receber recursos da União não tem destinatário certo. Se um comprador e um vendedor de imóvel brigam sobre o contrato, o Judiciário decide o caso.",
      },
      {
        termo: "Funções típicas",
        faz: "Cada Poder tem uma função principal e exerce as outras de forma atípica.",
        pista: "O Judiciário também administra quando faz licitação. Todos os Poderes exercem função administrativa. A separação é flexível: nenhum Poder tem exclusividade, só preponderância na sua função.",
      },
      {
        termo: "Funções atípicas do Legislativo e do Judiciário",
        faz: "Ambos administram quando fazem licitação e concurso, firmam contratos e nomeiam pessoal. O Legislativo julga quando o Senado processa o Presidente por crime de responsabilidade (CF, art. 52, I). O Judiciário legisla quando os tribunais editam seus regimentos internos (art. 96, I, “a”).",
      },
      {
        termo: "Funções atípicas do Executivo",
        faz: "O Executivo legisla ao editar medidas provisórias (CF, art. 62), leis delegadas (art. 68) e decretos autônomos (art. 84, VI). Mas não exerce função jurisdicional em sentido próprio, porque nenhuma lesão a direito pode ser afastada do Judiciário (art. 5º, XXXV).",
      },
      {
        termo: "Coisa julgada administrativa",
        faz: "Quando o Executivo decide processos administrativos, como os disciplinares e os tributários, alguns dizem que ele “julga”. O resultado é só a coisa julgada administrativa: a discussão se encerra na via administrativa, mas o caso ainda pode ir ao Judiciário.",
        pista: "Exemplo: os conselhos de contribuintes decidem recursos sobre tributos, mas essa decisão não tem força de coisa julgada judicial.",
      },
      {
        termo: "Tribunal de Contas e Ministério Público",
        faz: "Têm competências próprias e autonomia. Para a doutrina majoritária, não pertencem a nenhum dos três Poderes, porque não se subordinam a eles, mas também não são Poderes.",
      },
      {
        termo: "Freios e contrapesos",
        faz: "Os Poderes são independentes e harmônicos e se controlam entre si, para que nenhum fique mais forte (checks and balances). Exemplos: o veto do Presidente a projetos de lei; o controle de constitucionalidade das leis pelo Judiciário; o controle externo da Administração pelo Legislativo; e a escolha dos ministros dos tribunais superiores pelo Presidente, com aprovação do Senado.",
        pista: "Um Poder só pode interferir no outro nos casos previstos na Constituição. A separação dos Poderes é cláusula pétrea (CF, art. 60, § 4º, III): não se vota emenda tendente a aboli-la.",
      },
      {
        parte: "10. Forma de Estado e federação",
        termo: "Três aspectos da organização",
        faz: "Forma de governo: república ou monarquia. Sistema de governo: presidencialismo ou parlamentarismo. Forma de Estado: Estado unitário ou federação.",
      },
      {
        termo: "Estado unitário e federação",
        faz: "O Estado unitário tem centralização política: um só poder central sobre todo o território. A federação tem descentralização política: vários entes políticos autônomos convivem no mesmo território. O Brasil é uma federação.",
      },
      {
        termo: "Traços da federação",
        faz: "Descentralização política; repartição de competências; constituição rígida, que só muda por processo especial (CF, art. 60); proibição de separação (indissolubilidade); soberania só do Estado federal, com autonomia dos membros; intervenção em crises; auto-organização dos Estados por constituições próprias (CF, art. 25); representação dos Estados no Senado (art. 46); guarda da Constituição pelo STF (art. 102); e repartição de receitas (arts. 157 a 159).",
      },
      {
        termo: "Entes autônomos",
        faz: "A organização político-administrativa compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos (CF, art. 18). Não há hierarquia entre eles, mas coordenação: cada um tem autonomia política, financeira e administrativa.",
        pista: "A União não está acima dos Estados. Cada ente tem a sua própria Administração (federal, estaduais, distrital e municipais), autônomas entre si: o Município presta os seus serviços de interesse local sem se subordinar ao Estado ou à União (CF, art. 30, V).",
      },
      {
        termo: "Repartição de competências",
        faz: "Segue a preponderância do interesse: à União cabem os assuntos gerais ou nacionais; aos Municípios, os locais; aos Estados, a competência residual, o que não for da União nem dos Municípios, em regra de natureza regional.",
        pista: "O Distrito Federal não pode se dividir em Municípios e acumula as competências estaduais e municipais (CF, art. 32, caput e § 1º).",
      },
      {
        termo: "Federação e confederação",
        faz: "Na federação, os Estados-membros abrem mão da soberania, que fica só com o Estado federal, mas mantêm autonomia, e não podem se separar. Na confederação, os membros continuam soberanos e podem sair do pacto quando quiserem, por isso ela é frágil e instável.",
      },
      {
        termo: "Territórios Federais",
        faz: "São descentralizações administrativas e territoriais da União, como autarquias territoriais. Não têm autonomia política e não integram a federação.",
      },
      {
        termo: "Texto do art. 1º da CF",
        faz: "Diz que a República é formada pela união indissolúvel dos Estados, dos Municípios e do Distrito Federal, sem citar a União. Embora a União também integre a federação, muitas questões copiam esse texto literal.",
      },
      {
        parte: "11. Governo",
        termo: "Governo",
        faz: "Função política: fixa objetivos e planos, com ampla liberdade de decisão.",
        pista: "O governo age por atos de soberania ou de autonomia política: comanda, coordena, dirige e fixa as políticas públicas. Exemplos de decisões políticas, que não são legislar, julgar nem administrar: decretar calamidade pública, declarar guerra e assinar tratado internacional.",
      },
      {
        termo: "Três sentidos de governo",
        faz: "Formal: o conjunto de Poderes e órgãos constitucionais. Material: o complexo de funções estatais básicas. Operacional: a condução política dos negócios públicos.",
      },
      {
        termo: "Governo e Administração",
        faz: "O governo é formado pelos órgãos superiores, com funções políticas, de fixar diretrizes e planos. A Administração, em sentido estrito, é formada pelos órgãos e entidades que executam essas decisões e planos.",
        pista: "A Administração não pratica atos de governo: pratica só atos de execução, os atos administrativos, com maior ou menor autonomia conforme a competência do órgão.",
      },
      {
        termo: "Sistema de governo",
        faz: "É a relação entre Legislativo e Executivo. No presidencialismo, adotado no Brasil, uma só pessoa, o Presidente, é chefe de Estado e chefe de governo, eleito para mandato fixo. No parlamentarismo, há colaboração entre os Poderes, e as duas chefias ficam com pessoas diferentes.",
        pista: "Chefe de Estado representa o país nas relações externas. Chefe de governo dirige a Administração e pratica atos políticos.",
      },
      {
        termo: "Parlamentarismo",
        faz: "O Primeiro-Ministro é indicado pelo Presidente com aprovação do Parlamento e não tem mandato fixo: o governo cai se o partido perder a maioria ou se o Parlamento aprovar voto de desconfiança. O Chefe de Estado pode dissolver o Parlamento e convocar novas eleições.",
        pista: "No parlamentarismo há mais colaboração entre Executivo e Legislativo e uma só fonte de legitimidade (o Parlamento). No presidencialismo, a separação é mais nítida e há duas fontes (o Presidente e o Parlamento).",
      },
      {
        termo: "Forma de governo",
        faz: "É o modo de instituir e transmitir o poder. Na república: eletividade, mandato temporário, representação popular e responsabilidade do governante, que presta contas. Na monarquia: hereditariedade, vitaliciedade, ausência de representação popular e irresponsabilidade do governante.",
      },
      {
        parte: "12. Administração Pública",
        termo: "Administração Pública",
        faz: "Função de execução: aplica as decisões, sob a lei e de forma técnica.",
      },
      {
        termo: "Sentido amplo e estrito",
        faz: "Em sentido amplo, a Administração abrange os órgãos de governo e a função política, além dos órgãos e da função administrativa. Em sentido estrito, só os órgãos e entidades que exercem a função administrativa. É o sentido estrito que interessa ao Direito Administrativo.",
      },
      {
        termo: "Sentido subjetivo",
        faz: "Olha quem exerce: órgãos, entidades e agentes. Também se diz formal ou orgânico.",
        pista: "Inclui os órgãos que administram dentro do Legislativo e do Judiciário, como as secretarias dos tribunais.",
      },
      {
        termo: "Direta e indireta",
        faz: "Os órgãos ligados diretamente à pessoa política (União, Estados, DF e Municípios) formam a Administração direta ou centralizada. As entidades criadas por elas, como autarquias, fundações, empresas públicas e sociedades de economia mista, formam a indireta ou descentralizada.",
      },
      {
        termo: "Critério formal",
        faz: "Pelo sentido subjetivo, vale o que a lei define como Administração, e não a atividade. Por isso, a empresa privada que presta serviço público por concessão não integra a Administração, e a empresa estatal que explora atividade econômica integra.",
      },
      {
        termo: "Sentido objetivo",
        faz: "Olha a atividade: serviço público, polícia administrativa, fomento e intervenção.",
        pista: "Também se diz material ou funcional.",
      },
      {
        termo: "Fomento",
        faz: "Incentivo à iniciativa privada de interesse ou utilidade pública, por auxílios financeiros, subvenções, financiamentos especiais, benefícios fiscais e repasses de recursos.",
      },
      {
        termo: "Polícia administrativa",
        faz: "Atividade em que a Administração impõe restrições, limites ou condições às atividades privadas em favor do interesse coletivo, por fiscalização, licenças, autorizações e sanções.",
      },
      {
        termo: "Serviço público",
        faz: "Atividade concreta e imediata que a Administração executa, direta ou indiretamente, para satisfazer necessidades coletivas, sob regime predominantemente público, como telecomunicações e energia elétrica.",
      },
      {
        termo: "Intervenção",
        faz: "Em sentido amplo, inclui: regular e fiscalizar a atividade econômica privada (intervenção indireta); atuar diretamente na economia, em geral por empresas estatais (intervenção direta); e intervir na propriedade privada, como na desapropriação, na servidão, no tombamento e na ocupação temporária.",
        pista: "Parte da doutrina não conta a atuação direta na economia como função administrativa, porque segue sobretudo o direito privado.",
      },
      {
        termo: "Atividades-fim e atividades-meio",
        faz: "Fomento, polícia administrativa, serviço público e intervenção são as atividades-fim: a razão de ser da Administração. Para exercê-las, ela depende de atividades-meio, de apoio: concursos, licitações, compras, manutenção, edição de atos normativos sem inovar e decisões em processos administrativos.",
        pista: "Exemplo: o órgão que fiscaliza a venda de armas (polícia) precisa fazer concurso para ter servidores e licitação para comprar material. O sentido objetivo clássico não abrange as atividades-meio, mas elas também são função administrativa.",
      },
    ],
    cuidado:
      "Esgotar a via administrativa não é requisito geral para ir ao Judiciário, salvo exceções como a Justiça Desportiva. Sentido subjetivo é quem faz (órgãos, entidades e agentes); sentido objetivo é o que se faz (a atividade).",
  },
  questoes: [
    {
      topico: "Sistemas administrativos",
      subassunto: "Jurisdição única",
      dificuldade: 4,
      raciocinio: "No Brasil, a última palavra é do Judiciário.",
      enunciado:
        "Um motorista perde o recurso administrativo contra a multa em última instância e leva a mesma questão ao Judiciário. Quanto ao sistema adotado no Brasil, é correto afirmar que",
      alternativas: [
        "a decisão final do órgão de trânsito faz coisa julgada absoluta",
        "o contencioso administrativo impede a nova análise da matéria",
        "cabe só ação rescisória, pois a matéria já foi decidida",
        "a decisão só pode ser revista por tribunal administrativo",
        "cabe ação, pois o Judiciário pode rever a legalidade da decisão",
      ],
      correta: 4,
      explicacao: "O Brasil adota a jurisdição única. Pelo art. 5º, XXXV, da CF, a lei não exclui do Judiciário lesão ou ameaça a direito.",
      explicacaoErradas:
        "“coisa julgada absoluta” não existe nesse sentido. A chamada coisa julgada administrativa só impede a revisão na própria Administração. “contencioso administrativo” é o modelo francês. “ação rescisória” e “tribunal administrativo” não se aplicam.",
      pegadinha: "Confundir coisa julgada administrativa com coisa julgada judicial.",
      conhecimento: "Tribunais administrativos brasileiros, como as Jaris, não têm jurisdição.",
    },
    {
      topico: "Administração Pública",
      subassunto: "Sentido objetivo",
      dificuldade: 4,
      raciocinio: "Olhe para o que está sendo feito, e não para quem faz.",
      enunciado:
        "A frase “a concessionária presta transporte coletivo, e por isso exerce atividade administrativa” usa a expressão Administração Pública no sentido",
      alternativas: [
        "subjetivo, por olhar a entidade que atua",
        "formal, por olhar o conjunto de órgãos",
        "objetivo, por olhar a atividade exercida",
        "orgânico, por olhar a estrutura do Estado",
        "político, por olhar os planos de governo",
      ],
      correta: 2,
      explicacao: "O sentido objetivo, material ou funcional considera a atividade. A concessionária não integra a Administração, mas presta serviço público.",
      explicacaoErradas:
        "“subjetivo”, “formal” e “orgânico” são sinônimos e olham quem integra a estrutura. “político” é função de governo, e não sentido da expressão Administração Pública.",
      pegadinha: "Pensar que a concessionária integra a Administração no sentido formal.",
      conhecimento: "No sentido subjetivo, o Brasil adota critério formal: só é Administração o que a lei diz que é.",
    },
    {
      topico: "Administração Pública",
      subassunto: "Atividades",
      dificuldade: 5,
      raciocinio: "Fomento incentiva. Polícia limita. Intervenção regula o domínio econômico.",
      enunciado:
        "Uma linha de crédito pública a juros menores para empresas que renovam frotas de transporte de cargas, sem obrigá-las a aderir, é exemplo de atividade administrativa de",
      alternativas: [
        "serviço público, por haver prestação direta de utilidade material",
        "fomento, por incentivar uma atividade privada de interesse público",
        "polícia administrativa, por condicionar uma atividade econômica",
        "intervenção direta, pois o Estado passa a explorar o setor",
        "função política, pois todo incentivo é um ato de governo",
      ],
      correta: 1,
      explicacao: "Fomento é o incentivo ao particular que realiza atividade de interesse público, por exemplo com crédito, subsídio ou isenção.",
      explicacaoErradas:
        "“serviço público” pede prestação de utilidade à coletividade. “polícia administrativa” restringe, e o caso apenas estimula. “explorar o setor” não aconteceu. “ato de governo” não descreve a execução de um programa de crédito.",
      pegadinha: "Ver restrição onde há só incentivo.",
      conhecimento: "As quatro atividades clássicas são fomento, polícia, serviço público e intervenção.",
    },
    {
      topico: "Governo e Administração",
      subassunto: "Distinção",
      dificuldade: 4,
      raciocinio: "Governo decide o rumo. Administração executa.",
      enunciado:
        "Sobre a relação entre governo e Administração Pública, assinale a opção correta.",
      alternativas: [
        "o governo exerce atividade neutra, técnica e subordinada",
        "a Administração escolhe livremente as políticas do Estado",
        "os dois termos têm sentido igual no direito brasileiro",
        "o governo define políticas, e a Administração as executa",
        "a Administração só existe no Poder Executivo, sem exceção",
      ],
      correta: 3,
      explicacao: "O governo fixa objetivos e diretrizes, com independência política. A Administração executa, com neutralidade, hierarquia e submissão à lei.",
      explicacaoErradas:
        "“neutra, técnica e subordinada” descreve a Administração. “escolhe livremente” descreve o governo. “sentido igual” apaga a distinção. “sem exceção” esquece que o Legislativo e o Judiciário também têm função administrativa.",
      pegadinha: "Inverter as características dos dois.",
      conhecimento: "A Administração é instrumento do Estado para pôr em prática as opções políticas do governo.",
    },
    {
      topico: "Fontes",
      subassunto: "Costume e jurisprudência",
      dificuldade: 5,
      raciocinio: "A prática repetida não vence a lei.",
      enunciado:
        "Há anos, um setor administrativo dispensa certo documento exigido por lei, e todos os servidores agem assim. Quanto às fontes do Direito Administrativo, essa prática",
      alternativas: [
        "revogou a exigência, pois o costume é fonte primária",
        "obriga novas decisões, pois já há precedente administrativo",
        "vale apenas se tiver sido registrada em ato interno do setor",
        "não afasta a lei, pois o costume contra a lei não é admitido",
        "vale até uma decisão contrária do Tribunal de Contas da União",
      ],
      correta: 3,
      explicacao: "O costume é fonte secundária e pode ajudar a suprir lacunas, mas não derroga a lei, por causa da legalidade.",
      explicacaoErradas:
        "“fonte primária” é a lei. “precedente administrativo” não vale contra a lei. “ato interno” não afasta exigência legal. “decisão contrária” inverte a ordem, pois a prática já é ilegal.",
      pegadinha: "Dar ao costume força de revogar a lei.",
      conhecimento: "A praxe administrativa é a rotina interna de repartição, e a doutrina a distingue do costume.",
    },
    {
      topico: "Estado",
      subassunto: "Elementos e poderes",
      dificuldade: 4,
      raciocinio: "Função típica de um Poder pode aparecer, de forma atípica, em outro.",
      enunciado:
        "Um tribunal faz licitação para comprar computadores, e o Senado julga o Presidente da República em crime de responsabilidade. Essas situações mostram, respectivamente, exercício de função",
      alternativas: [
        "administrativa e jurisdicional, ambas de modo atípico",
        "típica nos dois casos, pois cada Poder cuida de si mesmo",
        "legislativa e administrativa, ambas de modo atípico",
        "política e judicial, sem nenhum caráter administrativo",
        "administrativa típica e legislativa atípica, nessa ordem",
      ],
      correta: 0,
      explicacao: "A licitação do tribunal é função administrativa atípica do Judiciário. O julgamento pelo Senado é função jurisdicional atípica do Legislativo.",
      explicacaoErradas:
        "“típica nos dois casos” ignora a função principal de cada Poder. “legislativa e administrativa” erra as duas. “sem nenhum caráter administrativo” falha na licitação. “legislativa atípica” erra o segundo caso.",
      pegadinha: "Achar que o Poder define sozinho a natureza do ato.",
      conhecimento: "Por isso o Direito Administrativo alcança atos dos três Poderes.",
    },
    {
      topico: "Conceito",
      subassunto: "Critérios",
      dificuldade: 5,
      raciocinio: "O conceito atual vai além do serviço público e do Poder Executivo.",
      enunciado:
        "O critério que define o Direito Administrativo como o conjunto de normas sobre os serviços públicos foi criticado porque",
      alternativas: [
        "o Estado exerce também outras atividades, como polícia e fomento",
        "o Estado brasileiro não presta serviço público, salvo por concessionárias",
        "só o Poder Judiciário pode prestar serviços públicos essenciais",
        "o serviço público deixou de existir com a Constituição de 1988",
        "toda atividade do Estado já é serviço público em sentido estrito",
      ],
      correta: 0,
      explicacao: "A crítica é que o critério deixa de fora outras atividades administrativas, como polícia administrativa, fomento e intervenção.",
      explicacaoErradas:
        "“salvo por concessionárias” contraria o art. 175 da CF, que admite prestação direta. “só o Poder Judiciário” e “deixou de existir” não têm base. “toda atividade” é o exagero da própria escola, e não a crítica feita a ela.",
      pegadinha: "Tomar a tese da escola pela crítica a ela.",
      conhecimento: "O critério do Poder Executivo também falha, pois os outros Poderes administram.",
    },
  ],
};
