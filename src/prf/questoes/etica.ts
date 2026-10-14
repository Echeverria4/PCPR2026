import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_ETICA: QuestaoPrf[] = [
  {
    id: "prf-etica-001",
    materia: "etica",
    topico: "Ética e moral",
    subassunto: "Etimologia de ethos, ética × moral e senso moral",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: confrontar cada uma com a distinção entre ética e moral e combinar os resultados.",
    enunciado:
      "Em uma aula sobre ética no serviço público, foram apresentadas as afirmativas a seguir.\n\nI. O grego ethos tem dois sentidos aparentados, morada e caráter ou hábito, e o segundo liga a ética ao modo de ser formado pela repetição dos atos.\nII. Como a moral é cultural e relativa, a ética, que a toma por objeto de reflexão, também renuncia a qualquer pretensão de validade universal.\nIII. A vergonha ou o remorso depois de um ato impensado revelam o senso moral, pelo qual avaliamos as próprias condutas segundo o certo e o errado.\nIV. Descrever como os servidores de uma unidade costumam agir já é fazer reflexão ética, pois a ética se confunde com os costumes de cada grupo.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "I, II e III, apenas.", "II e IV, apenas.", "I, III e IV, apenas.", "III, apenas."],
    correta: 0,
    explicacao:
      "A afirmativa I está correta: ethos significa morada e também caráter ou hábito, o modo de ser que se forma pela repetição dos atos. A III também: vergonha, remorso e indignação mostram o senso moral, que avalia as condutas, as nossas e as dos outros, segundo o certo e o errado. Estão corretas, portanto, apenas I e III.",
    explicacaoErradas:
      "A afirmativa II está errada: a moral é cultural, relativa e temporal, mas a ética, como reflexão teórica e crítica sobre a moral, busca fundamentos racionais e tem pretensão universal. A IV também: descrever os costumes de um grupo é falar da sua moral; reflexão ética é perguntar se a prática se justificaria para qualquer servidor, em qualquer lugar. Toda combinação que inclua II ou IV está errada, e a que traz só a III deixa de fora a I, que é verdadeira.",
    pegadinha:
      "A afirmativa II parece lógica — se a ética estuda a moral, herdaria o caráter relativo dela —, mas inverte a distinção: a moral varia com o grupo, e a ética busca justamente o que vale além dele.",
    conhecimento:
      "Etimologia de ética (ethos: morada e caráter ou hábito) e de moral (mores: costumes); ética como reflexão teórica e universal, moral como prática cultural e relativa; senso moral.",
    origem: "banco",
  },
  {
    id: "prf-etica-002",
    materia: "etica",
    topico: "Ética e moral",
    subassunto: "Relativismo moral e a resposta de Sócrates no Críton",
    dificuldade: 4,
    raciocinio: "Aplicação de conceito: avaliar uma conclusão relativista à luz da resposta filosófica estudada.",
    enunciado:
      "Depois de trabalhar em unidades de regiões muito diferentes do país, um servidor conclui: “se cada grupo tem os seus costumes, nenhuma conduta pode ser criticada fora do grupo em que surgiu”. À luz da distinção entre ética e moral e da resposta filosófica ao relativismo, essa conclusão",
    alternativas: [
      "está correta, porque a ética, assim como a moral, é cultural e relativa, e cada grupo fixa por si o que é certo e errado na conduta.",
      "está correta se a crítica se apoiar na opinião da maioria, critério que Sócrates seguiu no Críton ao decidir sobre a proposta de fuga.",
      "ignora que normas examinadas pela razão, capacidade comum a todos os seres humanos, podem valer além dos costumes de cada grupo.",
      "ignora o imperativo categórico de Aristóteles, segundo o qual a virtude é agir pela regra que se possa querer como lei universal.",
      "ignora que o senso moral é idêntico em todos os povos, o que elimina as divergências entre os costumes das diferentes sociedades.",
    ],
    correta: 2,
    explicacao:
      "A conclusão do servidor é a do relativismo: se as normas mudam de grupo para grupo, “tudo vale”. A resposta estudada vem do Críton, de Platão: Sócrates, condenado à morte, recusa a fuga porque decide pelo argumento que, examinado pela razão, parece o melhor. Como a razão é comum a todos os seres humanos, normas fundadas nela podem valer além dos costumes de cada grupo — e é isso que permite criticar uma conduta fora do grupo em que surgiu.",
    explicacaoErradas:
      "A que trata a ética como cultural e relativa confunde ética com moral: relativa é a moral; a ética tem pretensão universal. A que invoca a opinião da maioria inverte o Críton: Sócrates rejeitou justamente esse critério e seguiu a razão. A que fala do imperativo categórico erra o autor: ele é de Kant, e não de Aristóteles, cuja ética é das virtudes. A do senso moral idêntico em todos os povos contraria a própria premissa do caso, pois os costumes variam; o senso moral mostra que avaliamos condutas, não que todos as avaliam do mesmo modo.",
    pegadinha:
      "O imperativo categórico está descrito corretamente, mas atribuído a Aristóteles; quem lê só a segunda metade da frase marca a afirmação com o autor trocado.",
    conhecimento:
      "Relativismo moral, resposta de Sócrates no Críton (razão × opinião da maioria), distinção entre ética (universal) e moral (relativa) e diferença entre Kant e Aristóteles.",
    origem: "banco",
  },
  {
    id: "prf-etica-003",
    materia: "etica",
    topico: "Ética e moral",
    subassunto: "Ética das virtudes de Aristóteles: hábito e prudência",
    dificuldade: 4,
    raciocinio: "Identificação de autor e conceito: reconhecer, numa citação, a corrente ética que ela expressa.",
    enunciado:
      "Num curso de formação, o instrutor afirmou: “ninguém nasce justo ou corajoso; a pessoa se torna justa praticando atos justos, e só o discernimento diante de cada situação mostra qual é o ato justo naquele caso”. Essa afirmação está de acordo com",
    alternativas: [
      "a ética do dever de Kant, para quem a virtude moral se forma pelo hábito, e o imperativo categórico dispensa o exame de cada caso concreto.",
      "a ética de Aristóteles, para quem a virtude moral é inata, e a prudência só confirma a inclinação natural que cada pessoa traz consigo.",
      "a ética das virtudes de Aristóteles, para quem a virtude moral se adquire pelo hábito, e a prudência indica o modo certo de agir em cada caso.",
      "o relativismo moral, para o qual a virtude é o hábito aprovado pelo grupo, e o discernimento consiste em seguir os costumes de cada lugar.",
      "a ética de Aristóteles, para quem o prazer é o bem supremo, e a repetição dos atos agradáveis forma o caráter de quem age.",
    ],
    correta: 2,
    explicacao:
      "Para Aristóteles, a virtude moral é uma disposição adquirida pelo hábito: ninguém nasce justo, torna-se justo praticando atos justos. A sabedoria prática, a prudência, é que indica o modo certo de agir em cada situação. A citação do instrutor reúne exatamente essas duas ideias.",
    explicacaoErradas:
      "A que atribui a Kant a formação da virtude pelo hábito troca o autor: Kant funda a moral no dever e no imperativo categórico, e não no hábito. A que trata a virtude como inata contraria a frase “ninguém nasce justo ou corajoso” e a própria ideia de Aristóteles. A do relativismo transforma o discernimento em obediência aos costumes, o que a citação não diz. A do prazer como bem supremo erra o conceito: para Aristóteles, o bem supremo é a felicidade como realização das potencialidades humanas, e não o prazer.",
    pegadinha:
      "Três afirmações citam Aristóteles; só uma junta as duas peças da citação — virtude adquirida pelo hábito e prudência no caso concreto — sem trocar o bem supremo nem tornar a virtude inata.",
    conhecimento:
      "Ética das virtudes de Aristóteles (virtude adquirida pelo hábito, prudência, felicidade como bem supremo, justo meio) e ética do dever de Kant (imperativo categórico).",
    origem: "banco",
  },
  {
    id: "prf-etica-004",
    materia: "etica",
    topico: "Ética, princípios e valores",
    subassunto: "Valores × princípios e a lista aberta de valores",
    dificuldade: 4,
    raciocinio: "Classificação: distinguir, em enunciados concretos, o que é valor amplo e o que é princípio derivado dele.",
    enunciado:
      "O código de conduta de uma unidade administrativa federal traz três enunciados:\n\n1. “Prezamos a honestidade.”\n2. “Nenhum relatório de produtividade omitirá dados desfavoráveis à equipe.”\n3. “Informações pessoais dos usuários não serão comentadas fora do atendimento.”\n\nConsiderando a distinção entre valores e princípios, é correto afirmar que",
    alternativas: [
      "os enunciados 2 e 3 expressam valores, e o enunciado 1 é um princípio, regra concreta que traduz a honestidade em comportamento.",
      "os três enunciados expressam valores, pois todos dizem o que a unidade considera importante, desejável e certo na conduta.",
      "o enunciado 1 expressa um valor, e os enunciados 2 e 3 são princípios, regras mais concretas que traduzem valores em comportamento.",
      "os enunciados 2 e 3 perdem o caráter ético, pois regras escritas e concretas pertencem ao direito, e não à ética.",
      "o enunciado 3 deriva da autonomia, e o enunciado 2, da beneficência, pois a lista de valores éticos é fechada.",
    ],
    correta: 2,
    explicacao:
      "Valores são crenças amplas e abstratas sobre o que é importante e certo, como a honestidade (enunciado 1). Princípios são regras mais concretas, derivadas dos valores, que orientam a ação: não omitir dados desfavoráveis (enunciado 2, derivado da honestidade) e não comentar informações pessoais dos usuários (enunciado 3, derivado da confidencialidade). Os valores dão a base; os princípios traduzem essa base em comportamento.",
    explicacaoErradas:
      "A que chama o enunciado 1 de princípio inverte a classificação: “prezamos a honestidade” é amplo e abstrato, típico de valor. A que trata os três como valores ignora que 2 e 3 descem ao comportamento concreto, o que é próprio dos princípios. A que tira o caráter ético das regras escritas não tem apoio: princípios são justamente a tradução dos valores em regras de ação. A da autonomia e da beneficência erra a origem — o 3 protege a confidencialidade e o 2 deriva da honestidade — e a lista de valores não é fechada.",
    pegadinha:
      "Os enunciados 2 e 3 também “dizem o que é certo”, o que leva a classificá-los como valores; o que os separa do enunciado 1 é o grau de concretude, e não o tema.",
    conhecimento:
      "Valores (amplos e abstratos) × princípios (regras concretas derivadas dos valores); valores comuns na ética, como honestidade e confidencialidade; lista aberta, que varia com a cultura.",
    origem: "banco",
  },
  {
    id: "prf-etica-005",
    materia: "etica",
    topico: "Ética, princípios e valores",
    subassunto: "Autonomia, não maleficência, confidencialidade e responsabilidade em casos",
    dificuldade: 4,
    raciocinio: "Correlação: associar cada situação ao valor que ela concretiza, distinguindo valores próximos.",
    enunciado:
      "Relacione cada valor à situação que melhor o exemplifica.\n\n1. Autonomia\n2. Não maleficência\n3. Confidencialidade\n4. Responsabilidade\n\n( ) O servidor recusa-se a informar a um desconhecido o endereço de um motorista que consta do cadastro do órgão.\n( ) O servidor explica ao usuário as opções de atendimento disponíveis e deixa que ele escolha a que prefere.\n( ) O servidor comunica à chefia um erro que ele próprio cometeu e refaz o trabalho por conta própria.\n( ) O servidor não atrasa de propósito o pedido de um usuário que o havia ofendido no dia anterior.\n\nA sequência correta, de cima para baixo, é",
    alternativas: ["3 – 2 – 4 – 1.", "3 – 1 – 4 – 2.", "1 – 3 – 4 – 2.", "3 – 1 – 2 – 4.", "4 – 1 – 3 – 2."],
    correta: 1,
    explicacao:
      "Recusar o endereço do motorista protege a privacidade de informação confiada ao órgão: confidencialidade (3). Explicar as opções e deixar o usuário escolher respeita sua capacidade de decidir por si: autonomia (1). Assumir e corrigir o próprio erro é responder pelos atos e suas consequências: responsabilidade (4). Não atrasar de propósito o pedido de quem o ofendeu é não causar dano intencional: não maleficência (2). Sequência: 3 – 1 – 4 – 2.",
    explicacaoErradas:
      "A sequência que começa por 3 – 2 troca autonomia e não maleficência: deixar o usuário escolher não é evitar dano, é respeitar sua decisão. A que começa pelo 1 confunde autonomia com confidencialidade no caso do endereço. A que termina em 2 – 4 inverte responsabilidade e não maleficência. A que começa pelo 4 atribui à responsabilidade a recusa de informar o endereço, que é caso de confidencialidade.",
    pegadinha:
      "A última situação lembra justiça ou responsabilidade, mas o núcleo dela é não causar dano de propósito a quem ofendeu o servidor, o que define a não maleficência.",
    conhecimento:
      "Princípios e valores comuns na ética: respeito, justiça, honestidade, responsabilidade, beneficência, não maleficência, autonomia, integridade e confidencialidade.",
    origem: "banco",
  },
  {
    id: "prf-etica-006",
    materia: "etica",
    topico: "Ética, princípios e valores",
    subassunto: "Conflito entre transparência e confidencialidade",
    dificuldade: 4,
    raciocinio: "Análise de caso: identificar o critério ético usado para resolver um conflito de valores.",
    enunciado:
      "Um jornalista pede a um órgão federal os nomes e os diagnósticos dos servidores afastados por licença médica no último ano. A chefia divulga o número mensal de afastamentos, mas não os nomes nem os diagnósticos. Do ponto de vista ético, a chefia",
    alternativas: [
      "errou ao divulgar os números, pois a confidencialidade prevalece sempre sobre a transparência quando os dados envolvem a saúde dos servidores.",
      "errou ao omitir os nomes, pois a publicidade dos atos administrativos não admite nenhuma exceção quando o pedido parte da imprensa.",
      "agiu de modo eticamente indiferente, pois o conflito entre transparência e confidencialidade é resolvido só pela lei, e não pela ética.",
      "ponderou os valores em jogo, divulgando o dado de interesse coletivo e protegendo a privacidade, sem hierarquia fixa entre eles.",
      "aplicou a resposta pronta que a ética oferece para cada conflito de valores, o que dispensa qualquer justificativa para a decisão.",
    ],
    correta: 3,
    explicacao:
      "Transparência e confidencialidade apontam caminhos diferentes nesse pedido. A ética não oferece respostas prontas: oferece critérios para ponderar os valores envolvidos e decidir de forma justificada. A chefia atendeu ao interesse coletivo com o dado agregado e protegeu a privacidade dos servidores, sem tratar nenhum dos dois valores como absoluto.",
    explicacaoErradas:
      "A que diz que a confidencialidade prevalece sempre cria uma hierarquia fixa que a ética não estabelece, e o dado agregado não expõe ninguém. A que afirma que a publicidade não admite exceção ignora o conflito com a confidencialidade, que também é valor a ponderar. A da indiferença ética erra ao tirar o conflito do campo da ética. A da resposta pronta inverte a lição: justamente por não haver respostas prontas, a decisão precisa ser ponderada e justificada.",
    pegadinha:
      "A afirmação de que a confidencialidade “prevalece sempre” soa protetora e ética, mas transforma a ponderação em hierarquia fixa, que é o que o conteúdo rejeita.",
    conhecimento:
      "Conflito de valores (transparência × confidencialidade), ponderação justificada e ausência de respostas prontas na ética.",
    origem: "banco",
  },
  {
    id: "prf-etica-007",
    materia: "etica",
    topico: "Ética e democracia: exercício da cidadania",
    subassunto: "Accountability vertical e horizontal",
    dificuldade: 4,
    raciocinio: "Classificação: separar mecanismos de controle exercidos pelos cidadãos dos exercidos por órgãos do próprio Estado.",
    enunciado:
      "Considere os mecanismos de controle a seguir.\n\nI. O Tribunal de Contas da União julga as contas de um gestor federal.\nII. Moradores entregam ao prefeito um abaixo-assinado cobrando explicações sobre uma obra.\nIII. O Ministério Público propõe ação contra um agente público por desvio de verbas.\nIV. Eleitores deixam de reeleger um governante cuja gestão reprovaram.\nV. A controladoria de um órgão audita os contratos firmados pelo próprio órgão.\n\nConfiguram accountability horizontal somente os mecanismos",
    alternativas: ["I e III.", "II e IV.", "I, III e V.", "I, II e V.", "III, IV e V."],
    correta: 2,
    explicacao:
      "Na accountability horizontal, órgãos do próprio Estado fiscalizam uns aos outros: tribunal de contas (I), Ministério Público (III) e controladoria (V). O abaixo-assinado (II) e o voto (IV) são formas de accountability vertical, em que os cidadãos cobram os governantes.",
    explicacaoErradas:
      "A combinação “I e III” deixa de fora a controladoria, que também é órgão do Estado fiscalizando o Estado. “II e IV” reúne justamente os dois casos de accountability vertical. As combinações que incluem o abaixo-assinado ou o voto misturam controle social com controle entre órgãos estatais.",
    pegadinha:
      "A controladoria audita o próprio órgão, o que parece controle interno e não horizontal; mas ela é órgão do Estado fiscalizando o Estado, e o conteúdo a inclui expressamente na accountability horizontal.",
    conhecimento:
      "Accountability vertical (cidadãos: voto, protestos, petições, controle social) e horizontal (tribunais de contas, Ministério Público, controladorias, Judiciário).",
    origem: "banco",
  },
  {
    id: "prf-etica-008",
    materia: "etica",
    topico: "Ética e democracia: exercício da cidadania",
    subassunto: "Pluralismo e tolerância como fundamento da República",
    dificuldade: 4,
    raciocinio: "Aplicação de conceito com base constitucional: identificar o eixo ético e o dispositivo que o sustenta.",
    enunciado:
      "Numa audiência pública sobre a duplicação de uma rodovia federal, a maioria dos presentes, favorável à obra, pede que se encerrem as falas dos moradores contrários. O mediador mantém o tempo de fala de todos, inclusive dos que discordam. A conduta do mediador",
    alternativas: [
      "concretiza o pluralismo e a tolerância, e o pluralismo político é objetivo fundamental da República, previsto no art. 3º da Constituição.",
      "exemplifica accountability horizontal, pois um órgão do próprio Estado fiscaliza a atuação dos cidadãos presentes na audiência.",
      "contraria a democracia, pois, conhecida a posição da maioria, a manifestação dos contrários se torna dispensável no debate público.",
      "concretiza o pluralismo e a tolerância, e o pluralismo político é fundamento da República, previsto no art. 1º da Constituição.",
      "exprime o relativismo, pois, se cada grupo tem os seus costumes, nenhuma opinião pode ser considerada melhor que a outra.",
    ],
    correta: 3,
    explicacao:
      "Manter a palavra dos que discordam é praticar pluralismo e tolerância: respeitar opiniões divergentes para que todas as vozes sejam ouvidas. O pluralismo político é fundamento da República Federativa do Brasil (art. 1º, V, da Constituição), ao lado da soberania, da cidadania, da dignidade da pessoa humana e dos valores sociais do trabalho e da livre iniciativa.",
    explicacaoErradas:
      "A que situa o pluralismo político no art. 3º troca fundamento por objetivo fundamental: o pluralismo está no art. 1º. A da accountability horizontal erra o conceito, que trata de órgãos do Estado fiscalizando o próprio Estado. A que considera dispensável a fala dos contrários confunde democracia com vontade da maioria. A do relativismo não descreve a conduta: o mediador não afirmou que todas as opiniões valem o mesmo, só garantiu que todas fossem ouvidas.",
    pegadinha:
      "As duas afirmações sobre pluralismo são idênticas até o dispositivo; a diferença está em “fundamento” (art. 1º) e “objetivo fundamental” (art. 3º).",
    conhecimento:
      "Eixos de ética e democracia (pluralismo, tolerância, participação, accountability) e fundamentos da República no art. 1º da Constituição.",
    origem: "banco",
  },
  {
    id: "prf-etica-009",
    materia: "etica",
    topico: "Ética e democracia: exercício da cidadania",
    subassunto: "Direito de petição, ação popular e acesso à informação (LAI, art. 10, § 3º)",
    dificuldade: 5,
    raciocinio: "Análise de requisitos: conferir, em cada instrumento de cidadania, quem pode usá-lo, o que se exige e quem paga as custas.",
    enunciado:
      "Um grupo de cidadãos considera lesiva à moralidade administrativa a contratação, por um órgão público, de um evento de luxo pago com dinheiro público. Antes de qualquer medida, querem obter os documentos da contratação e, depois, avaliar a propositura de ação popular. Sobre esses instrumentos de cidadania, é correto afirmar que",
    alternativas: [
      "no pedido de acesso à informação, o órgão pode exigir a identificação de quem pede, mas não os motivos; na ação popular, o autor de boa-fé fica isento de custas e da sucumbência.",
      "no pedido de acesso à informação, o órgão pode exigir a identificação de quem pede e os motivos do pedido; na ação popular, o autor de boa-fé fica isento de custas e da sucumbência.",
      "no pedido de acesso à informação, o órgão não pode exigir a identificação de quem pede; na ação popular, o autor fica isento de custas e da sucumbência mesmo se agir de má-fé.",
      "o direito de petição depende do pagamento de taxa quando dirigido contra abuso de poder, e a ação popular pode ser proposta por qualquer pessoa jurídica de direito privado.",
      "a ação popular só alcança atos lesivos ao patrimônio público, e não à moralidade administrativa, e o pedido de informação deve indicar os motivos da solicitação.",
    ],
    correta: 0,
    explicacao:
      "A Lei de Acesso à Informação exige que o pedido traga a identificação do requerente e a especificação da informação, mas veda exigências relativas aos motivos do pedido de informações de interesse público (Lei 12.527/2011, art. 10, § 3º). Já a ação popular pode ser proposta por qualquer cidadão contra ato lesivo à moralidade administrativa, e o autor, salvo comprovada má-fé, fica isento de custas judiciais e do ônus da sucumbência (art. 5º, LXXIII, da Constituição).",
    explicacaoErradas:
      "A que admite exigir os motivos do pedido contraria o art. 10, § 3º, da LAI. A que dispensa a identificação e estende a isenção a quem age de má-fé erra duas vezes: a identificação é exigida e a má-fé comprovada afasta a isenção. A que condiciona o direito de petição a taxa contraria o art. 5º, XXXIV, a, que o assegura independentemente do pagamento de taxas; e a ação popular cabe a qualquer cidadão, e não a pessoas jurídicas. A que exclui a moralidade administrativa do alcance da ação popular contraria o texto constitucional, que a menciona expressamente.",
    pegadinha:
      "A afirmação que permite exigir “a identificação de quem pede e os motivos do pedido” mantém a parte certa sobre a ação popular; o erro está só no acréscimo dos motivos, vedado pela LAI.",
    conhecimento:
      "Instrumentos de cidadania: direito de petição (art. 5º, XXXIV, a), ação popular (art. 5º, LXXIII) e pedido de acesso à informação (Lei 12.527/2011, art. 10, § 3º).",
    origem: "banco",
  },
  {
    id: "prf-etica-010",
    materia: "etica",
    topico: "Ética e função pública",
    subassunto: "Moralidade administrativa × legalidade formal; desvio de finalidade",
    dificuldade: 4,
    raciocinio: "Análise de caso: separar a legalidade formal do ato da sua conformidade com a moralidade administrativa.",
    enunciado:
      "Um superintendente remove de ofício, com todas as formalidades legais e sob a justificativa de “necessidade do serviço”, um servidor que havia representado contra ele. Ficou provado depois que não havia necessidade alguma e que a remoção visava apenas afastar o servidor da unidade. Sobre esse ato, é correto afirmar que",
    alternativas: [
      "é válido, porque a moralidade administrativa se confunde com a moral pessoal do agente, e só a ele cabe avaliar a conveniência da remoção.",
      "fere a moralidade administrativa, porque a competência serviu a fim estranho ao interesse público, ainda que com a forma legal.",
      "é válido, porque um ato que observa todas as formalidades legais só pode ser considerado imoral se violar expressamente algum dispositivo de lei.",
      "fere apenas a moral pessoal do superintendente, já que a moralidade não está entre os princípios expressos da administração pública.",
      "só fere a moralidade administrativa se causar prejuízo financeiro ao erário, o que não ocorre na remoção de servidor feita de ofício.",
    ],
    correta: 1,
    explicacao:
      "Cumprir as formalidades não basta: um ato pode ser formalmente legal e, ainda assim, imoral, quando o agente usa a competência com finalidade estranha ao interesse público. A moralidade administrativa, princípio expresso no art. 37 da Constituição, é aferida pelos padrões éticos exigidos da Administração. O Código de Ética (Decreto 1.171/1994, XIV, u) manda o servidor abster-se de exercer função, poder ou autoridade com finalidade estranha ao interesse público, mesmo observando as formalidades legais e sem violação expressa à lei.",
    explicacaoErradas:
      "A que confunde moralidade administrativa com moral pessoal do agente erra o conceito: a moralidade é avaliada por padrões da Administração, e não pela consciência de quem decide. A que exige violação expressa de lei ignora que o ato pode ser legal na forma e imoral no fim. A que nega a moralidade como princípio expresso contraria o art. 37 da Constituição. A que exige prejuízo financeiro acrescenta requisito que não existe: o vício está no desvio de finalidade.",
    pegadinha:
      "A exigência de “violar expressamente dispositivo de lei” parece técnica, mas é exatamente o que o Código de Ética afasta ao vedar a finalidade estranha ao interesse público mesmo sem violação expressa à lei.",
    conhecimento:
      "Moralidade administrativa (probidade, decoro, boa-fé), distinta da moral pessoal; ato formalmente legal e imoral; dever do Código de Ética, XIV, u; princípios do art. 37.",
    origem: "banco",
  },
  {
    id: "prf-etica-011",
    materia: "etica",
    topico: "Ética e função pública",
    subassunto: "Regras deontológicas e finalidades dos códigos de ética",
    dificuldade: 4,
    raciocinio: "Conferência conceitual: testar cada afirmação contra o conceito de deontologia e as finalidades dos códigos.",
    enunciado:
      "Ao apresentar o código de ética de um órgão federal aos recém-empossados, a chefia explicou o que são regras deontológicas e para que servem os códigos de ética no serviço público. Está de acordo com esse conteúdo a afirmação de que",
    alternativas: [
      "as regras deontológicas, do grego deon, virtude, reúnem os costumes de uma categoria, e os códigos de ética substituem a lei onde ela for omissa.",
      "os códigos de ética orientam a conduta e previnem conflitos de interesse, mas não se destinam a proteger quem denuncia irregularidades.",
      "as regras deontológicas, do grego deon, dever, reúnem os deveres éticos de uma categoria, e os códigos educam o servidor para dilemas éticos.",
      "as regras deontológicas reúnem apenas deveres legais, e os códigos de ética servem só para punir, sem função educativa ou preventiva.",
      "os códigos de ética, por somarem legalidade e moralidade, prevalecem sobre a lei sempre que houver conflito entre os dois.",
    ],
    correta: 2,
    explicacao:
      "Deontologia vem do grego deon, dever: as regras deontológicas são os deveres éticos próprios de uma categoria, reunidos em códigos de ética que somam legalidade e moralidade. Entre as finalidades desses códigos estão orientar e padronizar a conduta, prevenir a corrupção e os conflitos de interesse, construir confiança pública, proteger quem denuncia, educar e capacitar os servidores para dilemas éticos e dar base à responsabilização.",
    explicacaoErradas:
      "A que traduz deon por virtude erra a etimologia, e os códigos se somam à lei, não a substituem. A que exclui a proteção de quem denuncia contraria uma das finalidades expressas dos códigos. A que reduz as regras a deveres legais e os códigos à punição ignora a função educativa e preventiva. A que põe o código acima da lei inverte a relação: o código se soma à lei e não prevalece sobre ela.",
    pegadinha:
      "A afirmação sobre conflitos de interesse começa certa e só erra no fim, ao negar a proteção a quem denuncia, que é finalidade expressa dos códigos.",
    conhecimento:
      "Deontologia (deon: dever), códigos de ética como soma de legalidade e moralidade e finalidades dos códigos no serviço público.",
    origem: "banco",
  },
  {
    id: "prf-etica-012",
    materia: "etica",
    topico: "Ética e função pública",
    subassunto: "Informação privilegiada e conflito de interesses (Lei 12.813/2013 e Código de Ética, XV, m)",
    dificuldade: 5,
    raciocinio: "Análise de caso: verificar se a configuração da falta depende de resultado, como ganho do terceiro ou prejuízo ao órgão.",
    enunciado:
      "Um servidor do setor de patrimônio de um órgão federal conta a um amigo, corretor de imóveis, que o órgão vai alugar um prédio em determinado bairro para instalar sua nova sede, informação ainda não divulgada. O amigo tenta comprar imóveis na região para revendê-los, mas o negócio não se concretiza, e o órgão não sofre prejuízo. A conduta do servidor",
    alternativas: [
      "não viola o Código de Ética, pois a vedação ao uso de informação privilegiada só alcança o benefício próprio ou o de parentes do servidor.",
      "só configuraria conflito de interesses se o amigo tivesse obtido ganho com a informação ou se o órgão tivesse sofrido algum prejuízo.",
      "não configura conflito de interesses, pois a informação se tornaria pública mais tarde, com a publicação do contrato de locação.",
      "viola o Código de Ética e configura conflito de interesses, ainda que o amigo não tenha lucrado nem o órgão tenha sofrido dano.",
      "configura conflito de interesses, mas não viola o Código de Ética, que só alcança a conduta do servidor dentro da repartição.",
    ],
    correta: 3,
    explicacao:
      "O Código de Ética veda fazer uso de informações privilegiadas obtidas no âmbito interno do serviço em benefício próprio, de parentes, de amigos ou de terceiros (Decreto 1.171/1994, XV, m). A Lei 12.813/2013 define conflito de interesses como a situação que possa comprometer o interesse coletivo ou influenciar de maneira imprópria o desempenho da função (art. 3º, I), inclui entre os casos divulgar ou usar informação privilegiada em proveito de terceiro (art. 5º, I) e estabelece que o conflito independe de lesão ao patrimônio público e de ganho do agente ou de terceiro (art. 4º, § 2º).",
    explicacaoErradas:
      "A que limita a vedação ao benefício próprio ou de parentes ignora que o Código menciona expressamente amigos e terceiros. A que exige ganho do amigo ou prejuízo ao órgão acrescenta um resultado que a lei dispensa: basta a situação que possa comprometer o interesse coletivo. A que invoca a publicação futura do contrato não afasta o caráter privilegiado da informação no momento em que foi divulgada. A que restringe o Código à repartição contraria o próprio Código, que alcança a conduta do servidor no cargo e fora dele.",
    pegadinha:
      "O fracasso do negócio e a ausência de prejuízo levam a pensar que nada aconteceu; mas o conflito de interesses e a vedação do Código se configuram com a divulgação, sem depender de resultado.",
    conhecimento:
      "Conflito de interesses na Lei 12.813/2013 (conceito, informação privilegiada, independência de lesão ou ganho) e vedação do Código de Ética ao uso de informação privilegiada (XV, m).",
    origem: "banco",
  },
  {
    id: "prf-etica-013",
    materia: "etica",
    topico: "Código de Ética do servidor (Decreto 1.171/1994)",
    subassunto: "Comissões de ética no Código: censura, registros, alcance e conceito de servidor",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: conferir cada uma com o inciso correspondente do Capítulo II do Código.",
    enunciado:
      "Sobre as comissões de ética previstas no Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (Decreto 1.171/1994), analise as afirmativas.\n\nI. A pena aplicável pela comissão de ética é a de censura, fundamentada em parecer assinado por todos os seus integrantes, com ciência do faltoso.\nII. Para fins de apuração do comprometimento ético, entende-se por servidor apenas quem presta ao Estado serviço permanente e remunerado.\nIII. Cabe à comissão fornecer os registros sobre a conduta ética do servidor para instruir e fundamentar promoções e os demais procedimentos da carreira.\nIV. Deve haver comissão de ética também em qualquer órgão ou entidade que exerça atribuições delegadas pelo poder público.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "I, III e IV, apenas.", "II, III e IV, apenas.", "I, II e III, apenas.", "I, II, III e IV."],
    correta: 1,
    explicacao:
      "A afirmativa I reproduz o inciso XXII: a pena é a censura, fundamentada no parecer assinado por todos os integrantes, com ciência do faltoso. A III corresponde ao XVIII: a comissão fornece os registros de conduta ética para promoções e demais procedimentos da carreira. A IV, ao XVI: deve haver comissão em todos os órgãos e entidades da administração direta, autárquica e fundacional e em quem exerça atribuições delegadas pelo poder público.",
    explicacaoErradas:
      "A afirmativa II está errada: pelo inciso XXIV, servidor, para fins de apuração do comprometimento ético, é todo aquele que presta serviço permanente, temporário ou excepcional, ainda que sem retribuição financeira, ligado direta ou indiretamente ao Estado. Toda combinação com a II está errada, e a que traz só I e III deixa de fora a IV, que é verdadeira.",
    pegadinha:
      "A afirmativa IV parece exagerar ao estender as comissões a quem exerce atribuições delegadas, e a II parece razoável ao exigir vínculo permanente e remunerado; o inciso XXIV, porém, é amplo de propósito.",
    conhecimento:
      "Capítulo II do Código de Ética (Decreto 1.171/1994): criação das comissões (XVI), registros para a carreira (XVIII), pena de censura (XXII) e conceito amplo de servidor (XXIV).",
    origem: "banco",
  },
  {
    id: "prf-etica-014",
    materia: "etica",
    topico: "Código de Ética do servidor (Decreto 1.171/1994)",
    subassunto: "Vedações do Código de Ética (XV, c, e, l e n)",
    dificuldade: 5,
    raciocinio: "Subsunção: testar cada conduta contra a redação exata das vedações, atentando para requisitos como habitualidade e autorização.",
    enunciado:
      "Considere as condutas de cinco servidores de um órgão federal.\n\n1. Acoberta, por solidariedade, um erro grave cometido por um colega, para evitar que ele seja punido.\n2. Apresenta-se embriagado em uma festa particular, num fim de semana, fato isolado em sua vida.\n3. Leva para casa, sem autorização, o notebook da repartição para adiantar um relatório urgente.\n4. Recusa-se a usar o sistema eletrônico de protocolo implantado no órgão e continua registrando os pedidos à mão.\n5. Dá aulas de inglês em uma escola de idiomas, fora do horário de expediente.\n\nViolam vedações expressas do Código de Ética aprovado pelo Decreto 1.171/1994 as condutas",
    alternativas: ["1 e 3, apenas.", "1, 3 e 4, apenas.", "1, 3, 4 e 5, apenas.", "3 e 4, apenas.", "1, 2, 3 e 4, apenas."],
    correta: 1,
    explicacao:
      "Violam vedações expressas: a conduta 1, por ser conivente, por espírito de solidariedade, com erro ou infração (XV, c); a 3, por retirar bem da repartição sem estar legalmente autorizado, ainda que para trabalhar (XV, l); e a 4, por deixar de utilizar os avanços técnicos e científicos ao seu alcance (XV, e).",
    explicacaoErradas:
      "A conduta 2 não viola a vedação do XV, n, que alcança quem se apresenta embriagado no serviço ou, fora dele, habitualmente; um fato isolado numa festa particular não se enquadra. A conduta 5 não corresponde a nenhuma vedação do Código. Por isso estão erradas as combinações com 2 ou 5, e as que deixam de fora 1 ou 4 omitem condutas vedadas.",
    pegadinha:
      "A boa intenção da conduta 3 e a natureza técnica da 4 fazem parecer que não há falta ética, enquanto a embriaguez da 2 choca mais; o Código, porém, exige habitualidade para a embriaguez fora do serviço.",
    conhecimento:
      "Vedações do Código de Ética (XV): conivência por solidariedade (c), avanços técnicos (e), retirada de bens sem autorização (l), informação privilegiada (m) e embriaguez habitual (n).",
    origem: "banco",
  },
  {
    id: "prf-etica-015",
    materia: "etica",
    topico: "Código de Ética do servidor (Decreto 1.171/1994)",
    subassunto: "Regras deontológicas: publicidade, verdade e dano moral (VII a X)",
    dificuldade: 4,
    raciocinio: "Julgamento de assertivas: comparar cada uma com a redação das regras deontológicas, atentando para a quem se imputa a falta.",
    enunciado:
      "Com base nas regras deontológicas do Código de Ética do Decreto 1.171/1994, marque V para a afirmativa verdadeira e F para a falsa.\n\n( ) A omissão da publicidade de um ato administrativo compromete a chefia do órgão, e não o servidor que, por iniciativa própria, a negou.\n( ) O servidor não pode omitir nem falsear a verdade, ainda que ela seja contrária aos interesses da própria pessoa interessada ou da Administração.\n( ) Deixar o usuário à espera de solução, com longas filas ou outra espécie de atraso, caracteriza grave dano moral aos usuários dos serviços públicos.\n( ) Tratar mal quem paga tributos configura falta de cortesia, mas não chega a causar dano moral à pessoa atendida.\n\nAs afirmativas são, respectivamente,",
    alternativas: ["V – V – V – F.", "F – V – F – F.", "F – V – V – F.", "F – F – V – V.", "V – V – F – V."],
    correta: 2,
    explicacao:
      "A primeira afirmativa é falsa: a omissão da publicidade gera comprometimento ético imputável a quem a negar (VII). A segunda é verdadeira: toda pessoa tem direito à verdade, que o servidor não pode omitir nem falsear, ainda que contrária ao interessado ou à Administração (VIII). A terceira é verdadeira: as longas filas e outros atrasos causam grave dano moral aos usuários (X). A quarta é falsa: tratar mal quem paga tributos significa causar-lhe dano moral (IX). Sequência: F – V – V – F.",
    explicacaoErradas:
      "Toda sequência que começa por V aceita que a omissão da publicidade seja imputada à chefia, contra o inciso VII, que a imputa a quem a negar. Marcar F na terceira afirmativa ignora o inciso X; marcar V na quarta contraria o IX, que fala expressamente em dano moral; e marcar F na segunda nega o direito à verdade do VIII.",
    pegadinha:
      "A primeira afirmativa parece proteger o servidor subordinado, mas o inciso VII imputa o comprometimento ético a quem negar a publicidade; a quarta parece só exagerar, mas o Código fala, de fato, em dano moral.",
    conhecimento:
      "Regras deontológicas do Código de Ética: publicidade como requisito de eficácia e moralidade (VII), direito à verdade (VIII), dano moral pelo mau tratamento (IX) e grave dano moral pelas filas e atrasos (X).",
    origem: "banco",
  },
  {
    id: "prf-etica-016",
    materia: "etica",
    topico: "Sistema de Gestão da Ética (Decreto 6.029/2007)",
    subassunto: "CEP × comissões dos órgãos: composição, designação e mandatos",
    dificuldade: 5,
    raciocinio: "Comparação de regimes: separar o que é comum à CEP e às comissões dos órgãos do que é próprio de cada uma.",
    enunciado:
      "Ao comparar a Comissão de Ética Pública (CEP) com as comissões de ética dos órgãos e entidades do Poder Executivo federal, ambas integrantes do sistema instituído pelo Decreto 6.029/2007, é correto afirmar que",
    alternativas: [
      "as duas são integradas por sete membros designados pelo Presidente da República, com mandatos de três anos e uma única recondução.",
      "os membros da CEP recebem remuneração por sessão, e os das comissões dos órgãos são designados pelo dirigente máximo de cada órgão.",
      "nas duas, os mandatos são de três anos, não coincidentes, mas só os membros da CEP são designados pelo Presidente da República.",
      "o presidente da CEP é designado pelo Presidente da República e tem voto de qualidade nas deliberações da comissão.",
      "a CEP tem três titulares e três suplentes do quadro permanente, e as comissões dos órgãos têm sete membros de reputação ilibada.",
    ],
    correta: 2,
    explicacao:
      "A CEP é integrada por sete brasileiros designados pelo Presidente da República, com mandatos de três anos, não coincidentes, permitida uma única recondução (art. 3º). As comissões de ética dos órgãos têm três titulares e três suplentes do quadro permanente, designados pelo dirigente máximo, também com mandatos não coincidentes de três anos (art. 5º). O traço comum é o mandato; a designação pelo Presidente da República é exclusiva da CEP.",
    explicacaoErradas:
      "A que atribui sete membros às duas comissões erra a composição das comissões dos órgãos, que têm três titulares e três suplentes. A da remuneração por sessão contraria o art. 3º, § 1º: a atuação na CEP não é remunerada e é considerada prestação de relevante serviço público. A que faz o Presidente da República designar o presidente da CEP erra: a própria comissão escolhe o seu presidente (art. 4º, VI), que tem voto de qualidade. A que dá três titulares e três suplentes à CEP inverte a composição das duas comissões.",
    pegadinha:
      "A afirmação sobre o presidente da CEP acerta o voto de qualidade e erra só a forma de escolha, que cabe à própria comissão, e não ao Presidente da República.",
    conhecimento:
      "Composição, designação, mandatos e funcionamento da CEP (arts. 3º e 4º) e das comissões de ética dos órgãos e entidades (art. 5º) no Decreto 6.029/2007.",
    origem: "banco",
  },
  {
    id: "prf-etica-017",
    materia: "etica",
    topico: "Sistema de Gestão da Ética (Decreto 6.029/2007)",
    subassunto: "Legitimados para provocar a comissão (art. 11) e conceito de agente público",
    dificuldade: 5,
    raciocinio: "Análise de caso: verificar a legitimidade de quem provoca a comissão e o alcance do conceito de agente público.",
    enunciado:
      "Uma associação de transportadores de cargas leva à comissão de ética de um órgão federal a conduta de um profissional que, sem receber remuneração, prestou serviço eventual ao órgão em um projeto e teria exigido vantagens dos associados. À luz do Decreto 6.029/2007, é correto afirmar que",
    alternativas: [
      "a associação pode provocar a comissão, e o prestador eventual e sem remuneração é agente público para os fins do decreto.",
      "a associação pode provocar a comissão, mas o prestador eventual e sem remuneração não é agente público para os fins do decreto.",
      "a associação não tem legitimidade para provocar a comissão, e o prestador eventual e sem remuneração não é agente público para o decreto.",
      "a associação só pode provocar a comissão por meio de denúncia anônima, e o prestador é agente público para os fins do decreto.",
      "a associação só pode provocar a Comissão de Ética Pública, e não a do órgão, embora o prestador seja agente público para o decreto.",
    ],
    correta: 0,
    explicacao:
      "Qualquer cidadão, agente público, pessoa jurídica de direito privado, associação ou entidade de classe pode provocar a atuação da CEP ou de comissão de ética (art. 11). E, para os fins do decreto, agente público é todo aquele que, por força de lei, contrato ou qualquer ato jurídico, presta serviço de natureza permanente, temporária, excepcional ou eventual, ainda que sem retribuição financeira, a órgão ou entidade da administração federal (art. 11, parágrafo único).",
    explicacaoErradas:
      "A que nega a condição de agente público ao prestador eventual e não remunerado contraria o parágrafo único do art. 11, que inclui expressamente o serviço eventual e sem retribuição. A que nega legitimidade à associação contraria o caput do art. 11. A da denúncia anônima confunde a reserva sobre a identidade do denunciante, garantida se ele a desejar (art. 10), com uma exigência de anonimato que não existe. A que restringe a provocação à CEP contraria o art. 11, que admite provocar a CEP ou a comissão de ética do órgão.",
    pegadinha:
      "O serviço eventual e não remunerado parece afastar o vínculo com a Administração; o decreto, porém, adota conceito amplo de agente público justamente para alcançar esses casos.",
    conhecimento:
      "Decreto 6.029/2007: legitimados para provocar a CEP e as comissões de ética (art. 11), conceito de agente público (art. 11, parágrafo único) e reserva da identidade do denunciante (art. 10).",
    origem: "banco",
  },
  {
    id: "prf-etica-018",
    materia: "etica",
    topico: "Sistema de Gestão da Ética (Decreto 6.029/2007)",
    subassunto: "Providências após a falta ética (art. 12, § 5º) e banco de sanções (art. 22)",
    dificuldade: 5,
    raciocinio: "Consequências jurídicas: identificar o que a comissão pode fazer e o destino da decisão, sem atribuir a ela poder que não tem.",
    enunciado:
      "Concluída a apuração, a comissão de ética de um órgão federal constatou falta ética de um servidor ocupante de cargo efetivo que exercia função de confiança no órgão. Nos termos do Decreto 6.029/2007, a comissão",
    alternativas: [
      "pode aplicar suspensão ao servidor e divulgar a ementa da decisão no sítio do órgão, com o nome do investigado, para dar publicidade à sanção.",
      "pode exonerar diretamente o servidor do cargo efetivo, e a sanção só é comunicada à CEP se o servidor reincidir na mesma falta.",
      "deve manter os autos com a chancela de “reservado” mesmo depois da conclusão, e a sanção não é comunicada a nenhum outro órgão.",
      "pode recomendar a abertura de procedimento administrativo, mas a sanção não poderá ser consultada em futuras nomeações para cargo em comissão.",
      "pode sugerir à autoridade superior a exoneração da função de confiança, e a sanção integrará o banco de dados mantido pela CEP.",
    ],
    correta: 4,
    explicacao:
      "Concluindo pela falta ética, a comissão pode encaminhar à autoridade hierarquicamente superior sugestão de exoneração de cargo ou função de confiança, encaminhar o caso à CGU ou ao Sistema de Correição e recomendar a abertura de procedimento administrativo, se a gravidade exigir (art. 12, § 5º). A CEP mantém banco de dados das sanções aplicadas pelas comissões, consultado em nomeações para cargo em comissão ou de alta relevância pública (art. 22).",
    explicacaoErradas:
      "A que fala em suspensão e em ementa com o nome do investigado erra duas vezes: a comissão de ética aplica censura, e a ementa é divulgada sem o nome do investigado (art. 18). A que permite exonerar diretamente do cargo efetivo dá à comissão um poder que ela não tem: ela só sugere a exoneração de cargo ou função de confiança. A dos autos reservados depois da conclusão contraria o art. 13, que limita a chancela até a conclusão, e o art. 18, que manda enviar a ementa à CEP. A que impede a consulta da sanção em nomeações contraria o art. 22.",
    pegadinha:
      "A afirmação sobre a recomendação de procedimento administrativo começa certa (art. 12, § 5º, III) e erra só no fim, ao negar a consulta da sanção em nomeações futuras.",
    conhecimento:
      "Providências após a conclusão pela falta ética (art. 12, § 5º), reserva dos autos até a conclusão (art. 13), ementa sem o nome do investigado (art. 18) e banco de sanções da CEP (art. 22).",
    origem: "banco",
  },
  {
    id: "prf-etica-019",
    materia: "etica",
    topico: "Regime disciplinar da Lei 8.112/1990",
    subassunto: "Reincidência, cancelamento de registros e conversão da suspensão em multa",
    dificuldade: 5,
    raciocinio: "Prazos e consequências: verificar se o registro da advertência ainda vale e qual pena decorre da reincidência.",
    enunciado:
      "Um servidor federal foi punido com advertência por se ausentar do serviço, durante o expediente, sem autorização do chefe imediato. Dois anos depois, sem ter cometido nenhuma outra infração nesse período, comete nova falta punível com advertência. Nos termos da Lei 8.112/1990,",
    alternativas: [
      "cabe nova advertência, pois o registro da primeira foi cancelado depois de dois anos de efetivo exercício sem nova infração disciplinar.",
      "cabe suspensão, que, por conveniência do serviço, pode ser convertida em multa de 50% por dia de remuneração, com o servidor em serviço.",
      "cabe suspensão, que, por conveniência do serviço, pode ser convertida em multa de 50% por dia de remuneração, com o servidor afastado do serviço.",
      "cabe demissão, pois a reincidência em falta punível com advertência caracteriza insubordinação grave em serviço.",
      "cabe suspensão de no máximo 15 dias, limite que a lei fixa para a reincidência em faltas punidas com advertência.",
    ],
    correta: 1,
    explicacao:
      "Os registros de advertência só são cancelados após 3 anos de efetivo exercício sem nova infração (art. 131); depois de dois anos, a primeira advertência ainda conta, e a nova falta é reincidência. A reincidência em faltas punidas com advertência leva à suspensão, de até 90 dias (art. 130), e, quando houver conveniência para o serviço, a suspensão pode ser convertida em multa de 50% por dia de vencimento ou remuneração, ficando o servidor obrigado a permanecer em serviço (art. 130, § 2º).",
    explicacaoErradas:
      "A que considera cancelado o registro após dois anos troca o prazo: são 3 anos para a advertência e 5 para a suspensão. A da multa com o servidor afastado inverte a regra: na conversão, o servidor é obrigado a permanecer em serviço. A da demissão por insubordinação grave confunde reincidência com uma das hipóteses do art. 132. A do limite de 15 dias aplica à reincidência o teto previsto para quem se recusa a ser submetido a inspeção médica (art. 130, § 1º).",
    pegadinha:
      "A conversão em multa aparece duas vezes com os números certos (50% por dia); o erro de uma das versões está só na situação do servidor, que permanece em serviço.",
    conhecimento:
      "Penalidades da Lei 8.112/1990: advertência (art. 129), suspensão e conversão em multa (art. 130), cancelamento dos registros (art. 131) e hipóteses de demissão (art. 132).",
    origem: "banco",
  },
  {
    id: "prf-etica-020",
    materia: "etica",
    topico: "Regime disciplinar da Lei 8.112/1990",
    subassunto: "Afastamento preventivo, sindicância, impedimentos da comissão e prazos",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: conferir números (dias, graus de parentesco) e efeitos de cada instituto da apuração.",
    enunciado:
      "Sobre a apuração de infrações disciplinares na Lei 8.112/1990, analise as afirmativas.\n\nI. Como medida cautelar, a autoridade instauradora pode afastar o servidor do exercício do cargo por até 60 dias, com suspensão da remuneração no período.\nII. Da sindicância pode resultar suspensão de até 30 dias, mas a suspensão por mais de 30 dias exige processo administrativo disciplinar.\nIII. Não pode integrar a comissão do processo disciplinar parente do acusado até o segundo grau; o parente de terceiro grau pode participar.\nIV. A sindicância deve ser concluída em até 30 dias, prorrogáveis por igual período, e o processo disciplinar, em até 60 dias, prorrogáveis por igual prazo.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e IV, apenas.", "IV, apenas.", "II, III e IV, apenas.", "I, II e IV, apenas."],
    correta: 1,
    explicacao:
      "A afirmativa II está correta: a sindicância pode resultar em arquivamento, advertência ou suspensão de até 30 dias, ou na instauração de PAD (art. 145), que é obrigatório quando a infração sujeitar o servidor a suspensão por mais de 30 dias, demissão, cassação ou destituição (art. 146). A IV também: sindicância em até 30 dias, prorrogáveis por igual período (art. 145, parágrafo único), e PAD em até 60 dias, prorrogáveis por igual prazo (art. 152).",
    explicacaoErradas:
      "A afirmativa I está errada porque o afastamento preventivo é de até 60 dias, prorrogável por igual prazo, mas sem prejuízo da remuneração (art. 147). A III está errada porque o impedimento alcança cônjuge, companheiro e parentes até o terceiro grau (art. 149, § 2º). Toda combinação com I ou III está errada, e a que traz só a IV deixa de fora a II.",
    pegadinha:
      "As afirmativas I e III acertam a estrutura e erram um detalhe cada: a remuneração, que não é suspensa, e o grau de parentesco, que vai até o terceiro.",
    conhecimento:
      "Apuração na Lei 8.112/1990: sindicância e seus resultados (art. 145), PAD obrigatório (art. 146), afastamento preventivo (art. 147), comissão e impedimentos (art. 149) e prazos (arts. 145 e 152).",
    origem: "banco",
  },
  {
    id: "prf-etica-021",
    materia: "etica",
    topico: "Regime disciplinar da Lei 8.112/1990",
    subassunto: "Independência das instâncias e repercussão da absolvição criminal (art. 126)",
    dificuldade: 5,
    raciocinio: "Distinção de fundamentos: separar a absolvição que nega o fato ou a autoria das demais absolvições penais.",
    enunciado:
      "Três servidores federais respondem a processo penal e a processo administrativo disciplinar pelos mesmos fatos. No processo penal, o primeiro é absolvido por insuficiência de provas; o segundo, porque ficou provada a inexistência do fato; e o terceiro, porque o fato, embora provado, não constitui infração penal. Nos termos da Lei 8.112/1990, afasta a responsabilidade administrativa",
    alternativas: [
      "as absolvições do segundo e do terceiro, pois em ambas a sentença penal reconhece que o servidor não cometeu ilícito algum.",
      "as três absolvições, pois as instâncias penal e administrativa deixam de ser independentes depois da sentença penal absolutória.",
      "apenas a absolvição do segundo, pois só a que negue a existência do fato ou a autoria repercute na via administrativa.",
      "as absolvições do primeiro e do segundo, pois a falta de provas no juízo penal impede a punição administrativa pelos mesmos fatos.",
      "nenhuma das absolvições, pois as instâncias civil, penal e administrativa são independentes e nunca se comunicam.",
    ],
    correta: 2,
    explicacao:
      "As responsabilidades civil, penal e administrativa podem cumular-se e são independentes (arts. 121 e 125), mas a responsabilidade administrativa é afastada no caso de absolvição criminal que negue a existência do fato ou a sua autoria (art. 126). Só o segundo servidor foi absolvido por inexistência do fato. A absolvição por falta de provas e a que reconhece que o fato não constitui crime não impedem a punição administrativa, porque o fato pode ainda configurar infração disciplinar.",
    explicacaoErradas:
      "A que inclui o terceiro servidor confunde atipicidade penal com inexistência de ilícito: o fato que não é crime pode ser infração disciplinar. A das três absolvições ignora a independência das instâncias. A que inclui o primeiro servidor dá à falta de provas um efeito que a lei não lhe dá. A que nega qualquer comunicação entre as instâncias contraria o art. 126.",
    pegadinha:
      "A absolvição do terceiro servidor parece a mais forte (“o fato não é crime”), mas não nega o fato nem a autoria; o fato continua podendo ser punido como infração disciplinar.",
    conhecimento:
      "Responsabilidades do servidor na Lei 8.112/1990: cumulação e independência das instâncias (arts. 121 e 125) e efeito da absolvição criminal que nega o fato ou a autoria (art. 126).",
    origem: "banco",
  },
  {
    id: "prf-etica-022",
    materia: "etica",
    topico: "Improbidade administrativa (Lei 8.429/1992)",
    subassunto: "Sujeitos da Lei de Improbidade: agente público, particular parceiro e terceiro",
    dificuldade: 5,
    raciocinio: "Subsunção: verificar, em cada situação, se há vínculo com a Administração, recurso público ou conduta dolosa do terceiro.",
    enunciado:
      "Considere as situações a seguir.\n\n1. Um engenheiro sem vínculo efetivo é designado para atuar, sem remuneração, por seis meses em uma comissão de um órgão federal.\n2. Uma organização da sociedade civil que celebrou termo de parceria com a União é acusada de desviar recursos recebidos de doadores privados.\n3. Um empresário, sem vínculo com a Administração, induz dolosamente um servidor a praticar ato de improbidade.\n4. Um particular é beneficiado por ato de improbidade sem saber de sua ocorrência e sem ter concorrido para ele.\n\nEstão sujeitos às sanções da Lei 8.429/1992, pelos fatos descritos, os envolvidos nas situações",
    alternativas: ["1, 2 e 3, apenas.", "3, apenas.", "1 e 3, apenas.", "1, 3 e 4, apenas.", "2 e 4, apenas."],
    correta: 2,
    explicacao:
      "O engenheiro é agente público para a lei, que alcança quem exerce, ainda que transitoriamente ou sem remuneração, por designação ou qualquer outra forma de investidura, cargo, emprego ou função nas entidades protegidas (art. 2º). O empresário responde porque, mesmo sem ser agente público, induziu dolosamente a prática do ato (art. 3º). Estão sujeitos, portanto, os envolvidos nas situações 1 e 3.",
    explicacaoErradas:
      "A organização parceira só se sujeita à lei no que se refere a recursos de origem pública (art. 2º, parágrafo único); o desvio de doações privadas não a alcança. O particular beneficiado sem dolo também não: o art. 3º exige que o terceiro induza ou concorra dolosamente para o ato. Por isso, estão erradas as combinações com 2 ou 4 e a que deixa de fora o engenheiro.",
    pegadinha:
      "A situação 4 parece alcançada para quem lembra a redação anterior do art. 3º, que incluía quem se beneficiasse do ato; a redação dada pela Lei 14.230/2021 exige indução ou concurso doloso.",
    conhecimento:
      "Sujeitos da Lei 8.429/1992: agente público em sentido amplo (art. 2º), particular que celebra parceria, quanto a recursos públicos (art. 2º, parágrafo único), e terceiro que induz ou concorre dolosamente (art. 3º).",
    origem: "banco",
  },
  {
    id: "prf-etica-023",
    materia: "etica",
    topico: "Improbidade administrativa (Lei 8.429/1992)",
    subassunto: "Declaração de bens (art. 13) e afastamento judicial do agente (art. 20)",
    dificuldade: 5,
    raciocinio: "Conjugação de dispositivos: aplicar a sanção da recusa da declaração e os limites do afastamento cautelar.",
    enunciado:
      "Um servidor federal deixa de apresentar, no prazo, a atualização anual de sua declaração de bens e, cobrado, recusa-se expressamente a fazê-lo. Ao mesmo tempo, responde a ação de improbidade, na qual o Ministério Público pede seu afastamento do cargo para evitar que ele destrua provas. À luz da Lei 8.429/1992, é correto afirmar que",
    alternativas: [
      "a recusa em atualizar a declaração no prazo sujeita o servidor só a advertência, e o juiz pode afastá-lo, sem prejuízo da remuneração, por até 90 dias.",
      "a recusa em atualizar a declaração no prazo sujeita o servidor à demissão, e o juiz pode afastá-lo, com suspensão da remuneração, por até 90 dias, prorrogáveis uma vez.",
      "a recusa em atualizar a declaração no prazo sujeita o servidor à demissão, e o juiz pode afastá-lo, sem prejuízo da remuneração, por até 90 dias, prorrogáveis uma vez.",
      "a perda da função pode ser executada logo após a sentença de primeiro grau, e o afastamento do servidor depende de condenação definitiva.",
      "a recusa só gera sanção se houver prova de enriquecimento ilícito, e o afastamento judicial é de até 60 dias, sem possibilidade de prorrogação.",
    ],
    correta: 2,
    explicacao:
      "A recusa em prestar a declaração dentro do prazo, ou a declaração falsa, é punida com demissão, sem prejuízo de outras sanções (art. 13, § 3º); a declaração deve ser atualizada anualmente e na data em que o agente deixa o cargo (art. 13, § 2º). Na ação de improbidade, o juiz pode afastar o agente quando a medida for necessária à instrução processual ou para evitar a iminente prática de novos ilícitos, sem prejuízo da remuneração, por até 90 dias, prorrogáveis uma única vez por igual prazo (art. 20, §§ 1º e 2º).",
    explicacaoErradas:
      "A que prevê só advertência erra a sanção da recusa, que é a demissão. A que suspende a remuneração contraria o art. 20, § 1º: o afastamento é sem prejuízo da remuneração. A que admite executar a perda da função após a sentença de primeiro grau contraria o art. 20, que exige o trânsito em julgado, e o afastamento cautelar não depende de condenação. A que exige enriquecimento ilícito cria requisito que a lei não prevê, e o afastamento judicial é de até 90 dias, prorrogáveis uma vez.",
    pegadinha:
      "O prazo de 90 dias “prorrogáveis uma vez” aparece em duas versões; a diferença está na remuneração, que não é suspensa no afastamento judicial.",
    conhecimento:
      "Lei 8.429/1992: declaração de bens e sanção pela recusa (art. 13), perda da função só com o trânsito em julgado e afastamento cautelar do agente (art. 20).",
    origem: "banco",
  },
  {
    id: "prf-etica-024",
    materia: "etica",
    topico: "Improbidade administrativa (Lei 8.429/1992)",
    subassunto: "Representação à autoridade (art. 14) e crime de representar contra inocente (art. 19)",
    dificuldade: 4,
    raciocinio: "Análise de caso: separar os efeitos da rejeição formal da representação das consequências da má-fé de quem representou.",
    enunciado:
      "Um cidadão representou à autoridade administrativa contra um servidor federal, imputando-lhe ato de improbidade. A representação foi rejeitada por não indicar as provas de que o cidadão tinha conhecimento. Mais tarde, apurou-se que o cidadão sabia que o servidor era inocente e pretendia apenas prejudicá-lo. Nos termos da Lei 8.429/1992,",
    alternativas: [
      "a rejeição impede nova representação sobre os mesmos fatos, inclusive ao Ministério Público, e o cidadão responde só pelos danos causados.",
      "a rejeição não impede a representação ao Ministério Público, e o cidadão responde apenas pelos danos materiais e morais que causou.",
      "a rejeição não impede a representação ao Ministério Público, e o cidadão comete crime, além de indenizar os danos causados.",
      "a rejeição não impede a representação ao Ministério Público, e o cidadão só comete crime se o servidor chegar a ser condenado.",
      "a rejeição impede a representação ao Ministério Público, e não há crime, já que a representação nem chegou a ser recebida.",
    ],
    correta: 2,
    explicacao:
      "A representação deve conter a qualificação do representante, as informações sobre o fato e sua autoria e a indicação das provas de que tenha conhecimento; sem essas formalidades, é rejeitada, mas a rejeição não impede a representação ao Ministério Público (art. 14, §§ 1º e 2º). Representar contra agente público sabendo-o inocente é crime, punido com detenção de seis a dez meses e multa, e o denunciante ainda deve indenizar os danos materiais, morais ou à imagem que causou (art. 19).",
    explicacaoErradas:
      "A que torna a rejeição impeditiva de nova representação ao Ministério Público contraria o art. 14, § 2º. A que limita a responsabilidade do cidadão aos danos ignora o crime do art. 19. A que condiciona o crime à condenação do servidor inverte a lógica do tipo, que pune justamente quem representa sabendo que o agente é inocente. A que nega o crime porque a representação não foi recebida acrescenta requisito que o art. 19 não prevê.",
    pegadinha:
      "A rejeição formal da representação parece encerrar o caso; mas ela não fecha a porta do Ministério Público e não apaga a má-fé de quem representou sabendo da inocência.",
    conhecimento:
      "Lei 8.429/1992: requisitos e rejeição da representação (art. 14) e crime de representação contra agente sabidamente inocente, com dever de indenizar (art. 19).",
    origem: "banco",
  },
  // Complemento (14/10/2026): questões adaptadas do banco do outro curso do app, nos tópicos do programa da PRF.
  {
    id: "prf-etica-025",
    materia: "etica",
    topico: "Improbidade administrativa (Lei 8.429/1992)",
    subassunto: "Garantias do réu na ação de improbidade: interrogatório, improcedência e congruência (art. 17)",
    dificuldade: 5,
    raciocinio: "Comparação de assertivas compostas: cada alternativa reúne três regras do art. 17, e nas erradas só uma delas está invertida.",
    enunciado:
      "Um servidor administrativo da PRF responde a ação de improbidade em que o Ministério Público Federal lhe imputa ato que causa prejuízo ao erário. Sobre o processo dessa ação, nos termos da Lei 8.429/1992, com a redação dada pela Lei 14.230/2021, é correto afirmar que",
    alternativas: [
      "o silêncio do réu no interrogatório não implica confissão; verificada a inexistência do ato, o processo é extinto sem resolução de mérito; e a revelia não faz presumir verdadeiros os fatos narrados pelo autor.",
      "a revelia não faz presumir verdadeiros os fatos narrados pelo autor; verificada a inexistência do ato, a demanda é julgada improcedente; e a sentença de improcedência fica sujeita a reexame obrigatório.",
      "o silêncio do réu no interrogatório não implica confissão; a sentença de improcedência não fica sujeita a reexame obrigatório; e o juiz pode condenar por tipo diverso do indicado na inicial, se os fatos forem os mesmos.",
      "o silêncio do réu no interrogatório não implica confissão; verificada a inexistência do ato, a demanda é julgada improcedente; e é nula a condenação por tipo diverso do indicado na inicial.",
      "a recusa do réu em ser interrogado pode ser valorada como confissão; verificada a inexistência do ato, a demanda é julgada improcedente; e é nula a condenação por tipo diverso do indicado na inicial.",
    ],
    correta: 3,
    explicacao:
      "Ao réu é assegurado o direito de ser interrogado sobre os fatos, e sua recusa ou seu silêncio não implicam confissão (art. 17, § 18). Verificada, em qualquer momento do processo, a inexistência do ato de improbidade, o juiz julga a demanda improcedente (§ 11), em decisão de mérito. E é nula a decisão de mérito que condenar o requerido por tipo diverso daquele definido na petição inicial (§ 10-F, I). As três regras aparecem juntas só na resposta correta.",
    explicacaoErradas:
      "A que manda extinguir o processo sem resolução de mérito contraria o § 11, que impõe a improcedência. A que sujeita a sentença de improcedência a reexame obrigatório contraria o § 19, IV. A que admite condenar por tipo diverso, se os fatos forem os mesmos, contraria o § 10-F, I. A que permite valorar a recusa como confissão contraria o § 18. Em todas elas as outras duas partes estão certas: a revelia, por exemplo, de fato não gera presunção de veracidade (§ 19, I).",
    pegadinha:
      "Cada errada repete duas regras verdadeiras e inverte uma só; o § 19, que afasta a presunção da revelia e o reexame obrigatório, aparece misturado ao § 18 para esconder a troca.",
    conhecimento:
      "Lei 8.429/1992, art. 17: nulidade da condenação por tipo diverso da inicial (§ 10-F, I), improcedência quando inexistente o ato (§ 11), interrogatório sem confissão ficta (§ 18) e institutos do processo civil afastados (§ 19).",
    fonte: "Adaptada de FGV — 2026 — PC-PI — Oficial Investigador",
    origem: "banco",
  },
  {
    id: "prf-etica-026",
    materia: "etica",
    topico: "Improbidade administrativa (Lei 8.429/1992)",
    subassunto: "Apuração e comunicação entre esferas: órgãos de controle e compensação de sanções (arts. 21 e 22)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: separar o que a lei manda considerar do que ela torna vinculante, e a compensação de sanções da independência das esferas.",
    enunciado:
      "Um servidor da PRF, gestor de um contrato de manutenção de viaturas, é investigado pelo Ministério Público Federal por suposto ato de improbidade. O Tribunal de Contas da União já havia examinado o contrato, e o servidor também respondeu a processo disciplinar pelos mesmos fatos. Analise as afirmativas à luz da Lei 8.429/1992.\n\nI. Na apuração conduzida pelo Ministério Público, é garantida ao servidor a oportunidade de se manifestar por escrito e de juntar documentos que comprovem suas alegações.\nII. As provas produzidas perante o Tribunal de Contas e a decisão correspondente devem ser consideradas pelo juiz na formação de sua convicção, o que o dispensa de examinar o dolo do servidor.\nIII. Se o servidor agiu com base em orientação formal do órgão de controle interno, esse ato será considerado pelo juiz, por ter servido de fundamento para a conduta.\nIV. A sanção eventualmente aplicada ao servidor no processo disciplinar deverá ser compensada com as sanções impostas na ação de improbidade.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "II e IV, apenas.", "I, II e III, apenas.", "III e IV, apenas.", "I, III e IV, apenas."],
    correta: 4,
    explicacao:
      "A afirmativa I reproduz o art. 22, parágrafo único: na apuração, o investigado tem a oportunidade de se manifestar por escrito e de juntar documentos. A III segue o art. 21, § 1º: os atos do órgão de controle interno ou externo são considerados pelo juiz quando serviram de fundamento para a conduta do agente. A IV segue o § 5º do mesmo artigo: as sanções aplicadas em outras esferas deverão ser compensadas com as da Lei de Improbidade.",
    explicacaoErradas:
      "A afirmativa II está errada: as provas e decisões dos órgãos de controle devem ser consideradas na convicção do juiz, mas sem prejuízo da análise acerca do dolo na conduta do agente (art. 21, § 2º); elas não dispensam esse exame. Toda combinação com a II está errada, e as que deixam de fora a I ou a IV ignoram regras expressas da lei.",
    pegadinha:
      "“Considerar” não é “vincular”: o juiz leva em conta o que o Tribunal de Contas apurou, mas continua obrigado a verificar o dolo; e a independência das esferas não impede a compensação das sanções.",
    conhecimento:
      "Lei 8.429/1992: manifestação escrita do investigado na apuração (art. 22, parágrafo único); atos e provas dos órgãos de controle e compensação de sanções de outras esferas (art. 21, §§ 1º, 2º e 5º).",
    fonte: "Adaptada de FGV — 2024 — PC-MG — Investigador de Polícia I",
    origem: "banco",
  },
  {
    id: "prf-etica-027",
    materia: "etica",
    topico: "Improbidade administrativa (Lei 8.429/1992)",
    subassunto: "Acordo de não persecução civil: requisitos cumulativos, momento e descumprimento (art. 17-B)",
    dificuldade: 5,
    raciocinio: "Aplicação de requisitos: verificar quais exigências do art. 17-B, § 1º, dependem do momento em que o acordo é celebrado.",
    enunciado:
      "Investigado por ato de improbidade que causou prejuízo à União, um servidor federal procura o Ministério Público Federal, antes do ajuizamento da ação, para negociar um acordo de não persecução civil. Sobre esse acordo, nos termos da Lei 8.429/1992, é correto afirmar que",
    alternativas: [
      "como o acordo precede a ação, depende também da aprovação do órgão do Ministério Público que aprecia arquivamentos de inquéritos civis.",
      "como o acordo precede a ação, dispensa a homologação judicial, bastando a aprovação do órgão do Ministério Público que aprecia arquivamentos.",
      "o acordo só pode ser celebrado até a sentença; depois da condenação, resta ao servidor cumprir as sanções que lhe tiverem sido impostas.",
      "se o servidor descumprir o acordo, ficará impedido de celebrar outro por 5 anos, contados da data em que o acordo foi homologado pelo juiz.",
      "o acordo pode prever o ressarcimento apenas parcial do dano, desde que o servidor confesse os fatos e colabore com a investigação em curso.",
    ],
    correta: 0,
    explicacao:
      "O acordo depende, cumulativamente, da oitiva do ente federativo lesado, da aprovação, em até 60 dias, pelo órgão do Ministério Público competente para apreciar as promoções de arquivamento de inquéritos civis, se anterior ao ajuizamento da ação, e da homologação judicial, antes ou depois do ajuizamento (art. 17-B, § 1º). Como o acordo do caso precede a ação, a aprovação interna do Ministério Público é exigida.",
    explicacaoErradas:
      "A homologação judicial é exigida independentemente de o acordo ocorrer antes ou depois do ajuizamento (§ 1º, III). O acordo pode ser celebrado na investigação, no curso da ação ou na execução da sentença condenatória (§ 4º). O impedimento de 5 anos conta do conhecimento, pelo Ministério Público, do efetivo descumprimento, e não da homologação (§ 7º). E o integral ressarcimento do dano é resultado mínimo do acordo (caput, I), que não exige confissão.",
    pegadinha:
      "A aprovação pelo órgão do Ministério Público só é exigida antes do ajuizamento; a homologação judicial, sempre. Quem inverte essas duas condições acaba na resposta que dispensa o juiz.",
    conhecimento:
      "Lei 8.429/1992, art. 17-B: resultados mínimos do acordo (caput), requisitos cumulativos (§ 1º), momentos de celebração (§ 4º) e impedimento por descumprimento (§ 7º).",
    origem: "banco",
  },
  {
    id: "prf-etica-028",
    materia: "etica",
    topico: "Improbidade administrativa (Lei 8.429/1992)",
    subassunto: "Direito intertemporal da reforma de 2021: Tema 1.199 do STF",
    dificuldade: 5,
    raciocinio: "Aplicação de precedente: separar coisa julgada, processo em curso e regime de prescrição na tese do Tema 1.199.",
    enunciado:
      "Dois servidores federais respondem por atos culposos que causaram prejuízo ao erário, praticados antes da Lei 14.230/2021, quando a modalidade culposa ainda era punível. O primeiro já foi condenado por decisão transitada em julgado, hoje em execução; o segundo ainda não tem condenação definitiva. Segundo a tese firmada pelo STF no Tema 1.199 da repercussão geral, a extinção da modalidade culposa",
    alternativas: [
      "alcança os dois servidores, por ser norma mais benéfica, o que encerra a execução do primeiro e o processo do segundo.",
      "não alcança nenhum dos dois, porque os atos culposos continuam regidos pela lei vigente na data em que foram praticados.",
      "não alcança a condenação do primeiro, e o segundo continua respondendo pela culpa, porque o fato é anterior à nova lei.",
      "não alcança a condenação do primeiro, mas vale no processo do segundo, ao qual também se aplicam, retroativamente, os novos prazos de prescrição.",
      "não alcança a condenação do primeiro, mas vale no processo do segundo, no qual o juiz deve examinar se houve dolo do agente.",
    ],
    correta: 4,
    explicacao:
      "No Tema 1.199 (ARE 843.989, 2022), o STF fixou que a revogação da modalidade culposa é irretroativa quanto à coisa julgada e à execução das penas e seus incidentes, mas se aplica aos atos culposos praticados na vigência do texto anterior ainda sem condenação transitada em julgado, cabendo ao juiz analisar eventual dolo do agente. O primeiro servidor continua condenado; no processo do segundo, o juiz verifica se houve dolo.",
    explicacaoErradas:
      "A que estende a extinção à condenação definitiva contraria a tese, que preserva a coisa julgada e a execução. A que não alcança nenhum dos dois ignora que a nova lei vale para os processos sem condenação definitiva. A que mantém o segundo respondendo pela culpa contraria a revogação expressa da modalidade culposa. A que aplica retroativamente os novos prazos de prescrição contraria a tese de que o novo regime prescricional é irretroativo e vale a partir da publicação da lei.",
    pegadinha:
      "A errada mais perigosa acerta o destino dos dois servidores e erra só a prescrição: os novos prazos e marcos de prescrição não retroagem.",
    conhecimento:
      "STF, Tema 1.199 da repercussão geral (ARE 843.989): exigência de dolo, irretroatividade quanto à coisa julgada, aplicação aos processos em curso e irretroatividade do novo regime prescricional.",
    origem: "banco",
  },
];
