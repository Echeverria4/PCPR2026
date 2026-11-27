import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-11",
  resumo: {
    ideia:
      "Agente público é quem exerce função estatal, mesmo sem salário ou por pouco tempo. A aula separa os tipos de agente, os regimes (cargo, emprego e função) e todas as regras da Constituição: acesso e concurso, nomeação, cotas, cargo em comissão e nepotismo, greve, temporários, acumulação, remuneração e teto, direitos sociais, previdência, estabilidade e responsabilidades.",
    itens: [
      {
        parte: "1. Conceito e classificação",
        termo: "Agente público",
        faz: "É toda pessoa física que exerce função estatal, a qualquer título, de forma definitiva ou transitória, com ou sem remuneração. Pela teoria do órgão, é pelo agente que o Estado (ente abstrato) manifesta sua vontade.",
        pista: "A Lei de Improbidade (Lei 8.429/1992, art. 2º) traz esse conceito amplo: agente político, servidor e todo aquele que exerce, ainda que transitoriamente ou sem remuneração, por eleição, nomeação, designação, contratação ou outra forma, mandato, cargo, emprego ou função. Entram até o motorista de concessionária, o mesário e o estagiário.",
      },
      {
        termo: "Tipos de agente",
        faz: "Políticos, administrativos, honoríficos (jurado, mesário), delegados (concessionários) e credenciados.",
        pista: "Não há classificação única na doutrina. Outras versões: políticos, servidores, militares e particulares em colaboração; ou políticos, particulares colaboradores e servidores; ou políticos, honoríficos, servidores estatais e particulares em colaboração. Uma versão adaptada junta honoríficos, credenciados e delegados como “particulares em colaboração” e separa os militares. Todas podem aparecer na prova.",
      },
      {
        termo: "Agentes políticos",
        faz: "Formam os primeiros escalões do governo e exercem atribuições previstas na Constituição, com plena liberdade funcional, prerrogativas e responsabilidades próprias. Têm regras próprias de escolha, investidura, conduta e processo por crimes funcionais e de responsabilidade. Recebem subsídio.",
        pista: "São: chefes do Executivo (Presidente, governadores, prefeitos), seus auxiliares imediatos (ministros e secretários) e parlamentares (senadores, deputados, vereadores). Parte da doutrina inclui magistrados (o STF já os chamou assim, RE 228.977), membros do Ministério Público, diplomatas e membros de Tribunais de Contas. Só agentes políticos cometem crime de responsabilidade.",
      },
      {
        termo: "Membros de Tribunal de Contas",
        faz: "Para o STF, ministros e conselheiros de Tribunal de Contas ocupam cargos administrativos (o órgão auxilia o Legislativo), e não são agentes políticos (Rcl 6.702 MC-AgR, ao discutir o nepotismo).",
      },
      {
        termo: "Agentes administrativos",
        faz: "Prestam serviço ao Estado e à Administração Indireta como profissão, com vínculo de trabalho, remuneração dos cofres públicos e estrutura hierárquica. Dividem-se em servidores públicos, empregados públicos e servidores temporários.",
        pista: "Também chamados de “servidores públicos em sentido amplo”. Para o Direito Penal, são funcionários públicos (CP, art. 327).",
      },
      {
        termo: "Servidores, empregados e temporários",
        faz: "Servidor público (estatutário): titular de cargo efetivo ou em comissão, com vínculo legal. Empregado público (celetista): titular de emprego, com contrato de trabalho pela CLT, como nas empresas públicas e sociedades de economia mista. Temporário (art. 37, IX): não tem cargo nem emprego, só função, por contrato de regime especial previsto em lei de cada ente.",
        pista: "Exemplos de temporários: recenseadores do censo e profissionais contratados para calamidade pública.",
      },
      {
        termo: "Funcionário público no Código Penal (art. 327)",
        faz: "Para efeitos penais, é funcionário público quem, embora transitoriamente ou sem remuneração, exerce cargo, emprego ou função pública. § 1º: equipara-se quem exerce cargo, emprego ou função em entidade paraestatal e quem trabalha para empresa contratada ou conveniada para executar atividade típica da Administração.",
        pista: "A expressão “funcionário público” não foi recebida pela Constituição de 1988, mas o Código Penal, de 1940, continua a usá-la.",
      },
      {
        termo: "Agentes honoríficos",
        faz: "Cidadãos convocados, designados ou nomeados para prestar, de forma transitória, um serviço relevante (múnus público), por sua condição cívica, honorabilidade ou capacidade profissional. Não têm vínculo de emprego nem estatutário e, em regra, não recebem remuneração.",
        pista: "Exemplos: jurado do júri, mesário eleitoral, membro de Conselho Tutelar. Sujeitam-se à hierarquia do órgão, podem receber um pro labore e contar o tempo como serviço público. Não se aplicam a eles as vedações de acumulação (art. 37, XVI e XVII), mas são funcionários públicos para fins penais.",
      },
      {
        termo: "Agentes delegados",
        faz: "Particulares (pessoas físicas ou jurídicas) que executam atividade, obra ou serviço público em nome próprio, por sua conta e risco, segundo as regras do Estado e sob fiscalização. Não representam o Estado: são colaboradores.",
        pista: "Exemplos: concessionários e permissionários, leiloeiros, tradutores e intérpretes públicos, serventuários de cartórios não estatizados. No exercício da função: são “autoridade” para mandado de segurança (Lei 12.016/2009, art. 1º, § 1º), respondem de forma objetiva (art. 37, § 6º) e são funcionários públicos para fins penais (CP, art. 327, § 1º).",
      },
      {
        termo: "Agentes credenciados",
        faz: "Recebem da Administração a tarefa de representá-la num ato ou praticar uma atividade específica, mediante remuneração do Poder Público.",
        pista: "Exemplo: medalhista olímpico credenciado para representar o país num congresso sobre a organização dos Jogos.",
      },
      {
        parte: "2. Agentes de fato",
        termo: "Agente de direito × agente de fato",
        faz: "Agente de direito ingressa de forma regular (deputado eleito, servidor aprovado e empossado). Agente de fato exerce função pública em nome do Estado sem investidura normal e regular, por situação excepcional.",
      },
      {
        termo: "Agentes necessários e putativos",
        faz: "Necessário: atua numa situação excepcional (calamidade, emergência) como se fosse agente de direito, por exemplo quem coordena um abrigo numa enchente ou o particular que salva pessoas ilhadas sem bombeiros no local. Putativo: atua com presunção de legitimidade, mas sua investidura foi irregular, por exemplo quem trabalha sem ter sido aprovado em concurso, ou cujo concurso foi anulado.",
      },
      {
        termo: "Validade dos atos do agente de fato",
        faz: "Em regra, os atos são válidos. Os do agente necessário são confirmados pelo Poder Público. Os do putativo podem ser questionados no âmbito interno, mas os de efeito externo são mantidos para proteger terceiros de boa-fé (teoria da aparência).",
        pista: "O agente investido de forma irregular tem direito à remuneração pelo que trabalhou; exigir a devolução seria enriquecimento ilícito da Administração (STF, RMS 25.104).",
      },
      {
        parte: "3. Cargo, emprego e função",
        termo: "Cargo, emprego e função",
        faz: "Cargo é estatutário, emprego é regido pela CLT, e função é um conjunto de atribuições sem cargo próprio.",
        pista: "Todo cargo ou emprego tem função, mas pode existir função sem cargo ou emprego.",
      },
      {
        termo: "Cargo público",
        faz: "É “o conjunto de atribuições e responsabilidades previstas na estrutura organizacional que devem ser cometidas a um servidor” (Lei 8.112/1990, art. 3º). É criado por lei, com denominação própria e vencimento pago pelos cofres públicos, para provimento efetivo ou em comissão (art. 3º, parágrafo único).",
        pista: "É ocupado por servidor público, sob regime estatutário, em regra nas pessoas de direito público. Exceção: os cargos dos serviços auxiliares da Câmara e do Senado são criados por resolução (arts. 51, IV, e 52, XIII). Mesmo assim, as provas costumam dar como certo que cargo só se cria por lei.",
      },
      {
        termo: "Emprego público",
        faz: "Unidade de atribuições com vínculo celetista (trabalhista e contratual, com predomínio do direito privado), ocupada por empregado público.",
        pista: "É comum nas empresas públicas, sociedades de economia mista e fundações públicas de direito privado. Também já existia em pessoas de direito público: consórcios públicos (Lei 13.822/2019), agentes comunitários de saúde e de combate às endemias (art. 198, § 5º; Lei 11.350/2006, art. 8º, salvo lei local diferente) e conselhos de fiscalização profissional.",
      },
      {
        termo: "Função pública e funções autônomas",
        faz: "Função é o conjunto de atribuições dadas a órgãos, cargos, empregos ou agentes. A função sem cargo ou emprego (função autônoma) tem dois casos na Constituição: a função temporária (art. 37, IX) e a função de confiança (art. 37, V).",
        pista: "O médico contratado por tempo determinado num surto e o professor substituto não ocupam a vaga de nenhum titular: só exercem função.",
      },
      {
        termo: "Fim da obrigação do regime jurídico único",
        faz: "A EC 19/1998 retirou a obrigação de um regime único na Administração direta, autárquica e fundacional. O STF chegou a suspender a mudança, mas em 2024 a julgou válida (ADI 2.135). Hoje essas entidades podem ter cargos (estatutários) ou empregos (celetistas).",
        pista: "A decisão tem efeito “ex nunc” (não retroage): quem já era estatutário não passa a celetista por causa dela. As questões ainda podem usar a divisão clássica (cargo no direito público, emprego no direito privado), mas ela não é mais obrigatória. As funções típicas de Estado (tributárias, policiais, de controle) seguem em regra no regime estatutário.",
      },
      {
        parte: "4. Regimes jurídicos e Justiça competente",
        termo: "Regime estatutário",
        faz: "Conjunto de regras da lei de cada ente (pluralidade normativa) para os ocupantes de cargo. Tem natureza legal: a lei pode mudá-lo sem a concordância do servidor. Admite estabilidade e é, em princípio, obrigatório para as funções típicas de Estado.",
        pista: "A lei sobre servidores da União, seu regime, provimento, estabilidade e aposentadoria é de iniciativa privativa do Presidente da República (por simetria, governador e prefeito). Na União, o estatuto é a Lei 8.112/1990 (servidores civis da União, autarquias, inclusive em regime especial, e fundações públicas federais).",
      },
      {
        termo: "Sem direito adquirido a regime jurídico",
        faz: "O servidor não tem direito adquirido a manter o regime: a lei pode mudar, por exemplo, a jornada de trabalho (STF, MS 28.433 AgR). Mas os direitos cujos requisitos já foram cumpridos ficam garantidos.",
        pista: "Exemplo: a licença-prêmio da Lei 8.112 foi trocada pela licença para capacitação (Lei 9.527/1997), e os servidores não puderam se opor. Se a lei dava 1% por ano de serviço e é revogada após 10 anos, o servidor perde os aumentos futuros, mas mantém os 10% já adquiridos.",
      },
      {
        termo: "Regime celetista",
        faz: "Regras da CLT (Decreto-Lei 5.452/1943), iguais para todos os entes (unidade normativa). Tem natureza contratual e bilateral: mudanças no contrato dependem das duas partes, e mudanças na lei só alcançam contratos futuros.",
        pista: "É predominantemente de direito privado, mas com regras públicas: concurso prévio e proibição de acumular.",
      },
      {
        termo: "Demissão de empregado público concursado",
        faz: "Empregado público não tem estabilidade. Mas as empresas públicas e sociedades de economia mista, prestadoras de serviço ou exploradoras de atividade econômica, mesmo em concorrência, têm de motivar, em ato formal, a demissão do empregado concursado (STF, RE 688.267, 2024).",
        pista: "O motivo tem de ser razoável, mas não precisa ser justa causa da CLT, e não se exige processo administrativo com contraditório.",
      },
      {
        termo: "Justiça competente",
        faz: "Servidores estatutários: Justiça Comum (Federal para os federais; Estadual para estaduais e municipais), conforme a ADI 3.395. Empregados de entidades de direito privado: Justiça do Trabalho (art. 114, I). Empregados de entidades de direito público: Justiça Comum.",
        pista: "Fase pré-contratual (concurso e admissão) de celetistas, mesmo nas estatais: Justiça Comum (Tema 992, RE 960.429), salvo sentença de mérito dada antes de 6/6/2018. Abusividade de greve de celetistas da Administração direta, autarquias e fundações: Justiça Comum (Tema 544, RE 846.854).",
      },
      {
        termo: "Temporários e militares",
        faz: "Temporários seguem um regime jurídico-administrativo especial (o “terceiro regime”, ou Regime Especial de Direito Administrativo): lei de cada ente, complementada por contrato; na União, a Lei 8.745/1993. Seus litígios vão para a Justiça Comum (Tema 43, RE 573.202). Militares têm regime estatutário próprio (na União, Lei 6.880/1980; CF, arts. 42, 142 e 143).",
      },
      {
        parte: "5. Acesso aos cargos e requisitos",
        termo: "Brasileiros e estrangeiros (art. 37, I)",
        faz: "Cargos, empregos e funções são acessíveis aos brasileiros que preencham os requisitos da lei (amplo acesso) e aos estrangeiros, na forma da lei. Para os estrangeiros, a norma tem eficácia limitada: depende de lei (STF, RE 544.655 AgR).",
        pista: "As universidades podem admitir professores, técnicos e cientistas estrangeiros, na forma da lei (art. 207, § 1º); a Lei 8.112 permite isso às universidades e instituições federais de pesquisa científica e tecnológica. Em regra, não há diferença entre natos, naturalizados e portugueses equiparados (art. 12, § 1º).",
      },
      {
        termo: "Cargos privativos de brasileiro nato (art. 12, § 3º)",
        faz: "Presidente e Vice-Presidente da República; Presidente da Câmara; Presidente do Senado; Ministro do STF; carreira diplomática; oficial das Forças Armadas; Ministro de Estado da Defesa.",
        pista: "No STF, todos os ministros devem ser natos (qualquer um pode chegar à presidência do Tribunal e substituir o Presidente da República). Na Câmara e no Senado, só o presidente da Casa.",
      },
      {
        termo: "Requisitos do concurso",
        faz: "Toda exigência para o acesso precisa estar em lei (sentido formal e material). Edital, regulamento, instrução normativa ou portaria não podem criar limitação sozinhos. Psicotécnico só por lei (Súmula Vinculante 44).",
        pista: "A lei pode fixar requisitos diferentes de admissão quando a natureza do cargo exigir (art. 39, § 3º). A exigência também precisa ser razoável e ligada às atribuições, e respeitar a isonomia e a impessoalidade (nada de discriminar por origem, raça ou religião). Súmula 14 do STF: não se pode, por ato administrativo, restringir a inscrição em razão da idade.",
      },
      {
        termo: "Idade, sexo e altura",
        faz: "O art. 7º, XXX, proíbe diferença de critério de admissão por sexo, idade, cor ou estado civil, mas a lei pode exigir requisito quando a natureza do cargo justificar. Súmula 683 do STF: o limite de idade só se legitima quando justificado pela natureza das atribuições do cargo.",
        pista: "Idade máxima nas carreiras militares exige lei formal; não vale regulamento, nem por delegação (RE 600.885). Idade máxima vale para soldado e oficial combatente, mas não para médico da mesma corporação, cargo técnico-científico. Restringir mulheres sem motivação viola a igualdade (RE 528.684). Altura mínima: a lei deve fixar a medida; não basta exigir “capacidade física” genérica. Exigência exagerada (como 2 metros de altura sem motivo) é inconstitucional.",
      },
      {
        termo: "Tatuagem (Tema 838)",
        faz: "O edital não pode impedir a participação de candidato só por ter tatuagem, salvo situações excepcionais, quando o conteúdo violar valores constitucionais (RE 898.450). Mesmo assim, a restrição precisa de lei.",
        pista: "Exemplos de conteúdo que permite vetar: apologia ao crime, ao racismo ou à violência.",
      },
      {
        termo: "Momento de comprovar os requisitos",
        faz: "Regra: na posse. Súmula 266 do STJ: o diploma ou habilitação legal é exigido na posse, e não na inscrição.",
        pista: "Exceções, comprovadas na inscrição: 3 anos de atividade jurídica para juiz e membro do Ministério Público (arts. 93, I, e 129, § 3º), contados só depois de formado em Direito (ADI 3.460); 2 anos de prática forense para Defensor Público da União, Advogado da União e Procurador da Fazenda Nacional; idade máxima fixada em lei (ARE 730.959 AgR).",
      },
      {
        termo: "Idade máxima × idade mínima",
        faz: "A idade máxima se comprova na inscrição: um candidato de 32 anos pode tomar posse num cargo com limite de 31 se tinha a idade certa ao se inscrever. A idade mínima de 18 anos da Lei 8.112 (art. 5º, V) se comprova na posse.",
        pista: "Se a questão falar só em “requisito etário”, como nas decisões do STF, responda: comprovação na inscrição.",
      },
      {
        parte: "6. Concurso público",
        termo: "Concurso",
        faz: "Procedimento administrativo para aferir aptidões e selecionar os melhores candidatos. A investidura em cargo ou emprego depende de aprovação prévia em concurso de provas ou de provas e títulos, conforme a natureza e a complexidade do cargo, salvo o cargo em comissão de livre nomeação e exoneração (art. 37, II). Validade de até 2 anos, prorrogável uma vez. Mudar de carreira exige novo concurso (Súmula Vinculante 43).",
        pista: "Realiza a isonomia (todos disputam em igualdade), a moralidade (evita favorecimento, perseguição e nepotismo) e a competição. Vale para cargos e empregos: até a sociedade de economia mista que explora atividade econômica faz concurso.",
      },
      {
        termo: "Conselhos profissionais e OAB",
        faz: "Os conselhos de fiscalização profissional (de medicina, contabilidade, engenharia etc.) são autarquias: precisam fazer concurso. O STF validou o regime celetista para seus empregados (Lei 9.649/1998). A OAB não integra a Administração e não faz concurso (ADI 3.026).",
      },
      {
        termo: "Súmula Vinculante 43",
        faz: "É inconstitucional toda forma de provimento que permita ao servidor investir-se, sem concurso destinado ao provimento, em cargo que não integra a carreira em que foi investido.",
        pista: "Exemplo: o técnico de nível médio que chega ao topo da carreira não pode, por teste interno, passar a um cargo de nível superior. Por isso caíram a ascensão, a transferência, a transposição e a transformação. Também é inconstitucional converter temporário em efetivo e transpor celetistas de estatal extinta para o quadro estatutário (RE 1.232.885).",
      },
      {
        termo: "Cartórios por concurso",
        faz: "A atividade notarial e de registro é exercida em caráter privado, por delegação, e o ingresso depende de concurso de provas e títulos (art. 236, § 3º). É o caso em que o concurso seleciona para um serviço delegado, não para cargo.",
      },
      {
        termo: "Composição das provas",
        faz: "O concurso é “de provas” ou “de provas e títulos”. Pode ser só de provas; nunca só de títulos, só de análise de currículo ou só de entrevista. A prova de títulos é apenas classificatória, nunca eliminatória (MS 32.074).",
        pista: "A Lei 8.112 permite concurso em duas etapas; a segunda costuma ser curso de formação, eliminatório e classificatório. São obrigatoriamente de provas e títulos: juiz substituto (art. 93, I), Ministério Público (129, § 3º), Advogado da União e procuradores dos estados e do DF (131, § 2º, e 132), Defensoria (134, § 1º), profissionais da educação escolar (206, V) e notários e registradores (236, § 3º).",
      },
      {
        termo: "Cláusula eliminatória × cláusula de barreira",
        faz: "Eliminatória: patamar fixo de desempenho (nota mínima na objetiva, índice mínimo no teste físico); só importa o desempenho do próprio candidato. Barreira: limite de candidatos que seguem para a etapa seguinte entre os não eliminados (“ponto de corte”); a posição em relação aos outros decide.",
        pista: "Exemplo: nota mínima de 70 e correção só das 100 melhores discursivas; se 300 passam da nota, os colocados de 101 a 300 saem. O STF admite as duas, quando baseadas em critérios objetivos de mérito (RE 635.739).",
      },
      {
        termo: "Remarcação do teste físico",
        faz: "Não há direito a segunda chamada no teste de aptidão física por circunstâncias pessoais, mesmo de saúde ou força maior, salvo previsão no edital (RE 630.733). A gestante tem direito à remarcação mesmo sem previsão no edital (Tema 973, RE 1.058.333).",
        pista: "Exemplo: candidato com gripe forte e atestado médico pode ser desclassificado se o edital não prevê remarcação. As segundas chamadas feitas até 15/5/2013 foram mantidas, por segurança jurídica.",
      },
      {
        termo: "Crença religiosa no concurso (Tema 386)",
        faz: "Com base no art. 5º, VIII, o candidato que invoca escusa de consciência por crença religiosa pode fazer etapas em datas e horários diferentes, desde que: a alteração seja razoável; preserve a igualdade entre os candidatos; não traga ônus desproporcional à Administração; e a decisão seja fundamentada (RE 611.874).",
        pista: "Exemplo: candidato que guarda o sábado até o pôr do sol fica isolado e incomunicável desde o horário normal e faz a prova depois das 18h.",
      },
      {
        termo: "Crença religiosa no serviço (Tema 1.021)",
        faz: "A Administração pode, inclusive no estágio probatório, fixar critérios alternativos para o servidor cumprir seus deveres por escusa de crença religiosa, desde que: a alteração seja razoável; não desvirtue o exercício das funções; não traga ônus desproporcional; e a decisão seja fundamentada (ARE 1.099.099).",
        pista: "Exemplo: médico que não pode dar plantão de sexta às 18h a sábado às 18h passa ao regime regular de 40 horas. Se a religião proibisse a própria medicina, não haveria como adaptar. Isso não é privilégio: garante a liberdade de crença (art. 5º, VI).",
      },
      {
        termo: "Exame psicotécnico",
        faz: "Só vale com 4 condições: previsão em lei e no edital (Súmula Vinculante 44); compatibilidade com as atribuições do cargo; grau mínimo de objetividade, com rigor científico e critérios explícitos, não sigilosos; e possibilidade de recurso.",
        pista: "Os critérios precisam permitir ao candidato saber por que foi reprovado e permitir o controle pelo Judiciário (AI 529.219 AgR; RE 188.234). Súmula 35 da AGU no mesmo sentido.",
      },
      {
        parte: "7. Exceções ao concurso",
        termo: "Exceções ao concurso",
        faz: "Entre cargos e empregos, só o cargo em comissão (livre nomeação e exoneração, para direção, chefia e assessoramento declarados em lei) dispensa concurso. Os agentes comunitários de saúde e de combate às endemias entram por “processo seletivo público” (art. 198, § 4º).",
        pista: "Não confunda processo seletivo público (agentes comunitários, que são servidores ou empregados, não temporários) com processo seletivo simplificado (temporários).",
      },
      {
        termo: "Outros casos sem concurso",
        faz: "Função temporária (art. 37, IX), em geral com processo seletivo simplificado, dispensado na urgência, emergência ou calamidade; cargos eletivos; ministros de tribunais superiores e do TCU e conselheiros de tribunais de contas; quinto constitucional dos TRFs e TJs (art. 94); ex-combatentes da Segunda Guerra (ADCT, art. 53, I).",
        pista: "Quinto constitucional: membros do Ministério Público e advogados com mais de 10 anos, lista sêxtupla da classe, lista tríplice do tribunal e escolha do Executivo em 20 dias. Aos conselheiros de contas aplica-se a vedação ao nepotismo (Súmula Vinculante 13).",
      },
      {
        termo: "Entidades fora da Administração",
        faz: "Não fazem concurso porque não integram a Administração: serviços sociais autônomos do Sistema S (Tema 569, RE 789.874), organizações sociais (ADI 1.923) e OAB (ADI 3.026).",
        pista: "As organizações sociais devem selecionar pessoal de forma pública, objetiva e impessoal, pelos princípios do art. 37, caput, conforme regulamento próprio.",
      },
      {
        parte: "8. Validade, nulidade e preferência",
        termo: "Prazo de validade (art. 37, III)",
        faz: "É o período em que a Administração pode nomear ou contratar os aprovados: até 2 anos, prorrogável uma vez, por igual período. Conta da homologação, ato que encerra o concurso e atesta a regularidade do procedimento.",
        pista: "O edital escolhe o prazo inicial (3 meses, 1 ano, 18 meses...), nunca acima de 2 anos. A prorrogação tem o mesmo prazo do inicial (6 meses + 6 meses; 2 anos + 2 anos), é discricionária e tem de ser feita antes de vencer o prazo inicial (RE 352.258). Exceção pontual: o STF já achou irrazoável não prorrogar quando havia vagas novas e ato mandando aproveitar os aprovados (RE 581.113).",
      },
      {
        termo: "Nulidade e punição (art. 37, § 2º)",
        faz: "Desrespeitar o concurso (inciso II) ou o prazo de validade (inciso III) gera a nulidade do ato e a punição da autoridade responsável, nos termos da lei.",
        pista: "O prazo de 5 anos para anular atos favoráveis (Lei 9.784/1999, art. 54) não salva o provimento sem concurso: situação flagrantemente inconstitucional não se consolida com o tempo (STF, MS 28.279; STJ, AgRg no RMS 33.821). Também não vale a teoria do “fato consumado” para quem avançou no concurso por decisão judicial provisória.",
      },
      {
        termo: "Preferência na convocação (art. 37, IV)",
        faz: "Durante o prazo improrrogável do edital, o aprovado é convocado com prioridade sobre os novos concursados para assumir cargo ou emprego na carreira. Se há dois concursos válidos para o mesmo cargo, primeiro se esgota a lista do anterior (ou espera-se seu prazo vencer).",
        pista: "A Constituição não proíbe abrir concurso novo com o anterior válido. Já a Lei 14.965/2024 (normas gerais de concursos) só autoriza novo concurso se não houver concurso anterior válido com aprovado não nomeado, salvo se demonstrado que os aprovados são insuficientes (art. 3º). Essa lei não alcança as estatais que não recebem recursos públicos para pessoal ou custeio, nem a magistratura, o Ministério Público, a Defensoria e as Forças Armadas.",
      },
      {
        parte: "9. Direito à nomeação",
        termo: "Direito à nomeação",
        faz: "Regra: o aprovado tem mera expectativa de direito. Passa a ter direito subjetivo: 1) aprovado dentro das vagas do edital (RE 598.099); 2) preterição da ordem de classificação (Súmula 15 do STF); 3) novas vagas ou novo concurso na validade do anterior, com preterição arbitrária e imotivada (Tema 784, RE 837.311); 4) quem estava fora das vagas e entra nelas pela desistência ou impedimento de candidatos mais bem classificados.",
        pista: "Dentro das vagas, a Administração escolhe o momento da nomeação, desde que dentro da validade, incluída a prorrogação. A preterição da Súmula 15 gera direito mesmo para quem está fora das vagas (o 3º colocado não é nomeado, mas o 10º é). A desistência converte (“convola”) a expectativa em direito líquido e certo (STJ, RMS 53.506).",
      },
      {
        termo: "Preterição arbitrária e imotivada",
        faz: "Novas vagas ou novo concurso, sozinhos, não geram direito para quem está fora das vagas. É preciso um comportamento expresso ou tácito do Poder Público que revele a necessidade inequívoca de nomear durante a validade do concurso, demonstrada de forma cabal pelo candidato.",
        pista: "Exemplo: o órgão pede verba e prepara novo concurso alegando falta de servidores, mas espera o concurso vigente expirar só para nomear os novos. Outros exemplos: uso irregular de temporários, terceirizados ou comissionados nas funções do efetivo. Se o uso for lícito, como temporários para a pandemia, não há direito (STJ, RMS 65.757).",
      },
      {
        termo: "Temporários e vagas suficientes",
        faz: "Para a contratação temporária gerar direito, ela deve fugir dos parâmetros legais (RE 658.026), não servir para cobrir afastamento temporário do titular e devem existir cargos vagos em número que alcance a classificação do candidato (STJ, RMS 64.166).",
        pista: "Não há reciprocidade obrigatória entre contratar temporário e existir cargo vago. Exemplo: 5 vagas no edital e 3 temporários irregulares com 3 cargos vagos chegam ao 8º colocado; o 10º não tem direito. Cobrir a licença-gestante de uma servidora com temporário é lícito.",
      },
      {
        termo: "Fato dentro da validade (Tema 683)",
        faz: "A ação para reconhecer o direito à nomeação de quem está no cadastro de reserva deve ter por causa de pedir uma preterição ocorrida durante a validade do concurso (RE 766.304).",
        pista: "Se o último candidato dentro das vagas é nomeado no último dia de validade e desiste depois que o prazo venceu, o próximo da lista não tem direito. Temporários irregulares contratados depois da validade também não geram direito.",
      },
      {
        termo: "Situações excepcionais",
        faz: "Mesmo dentro das vagas, a Administração pode deixar de nomear, de forma motivada e sujeita ao controle do Judiciário, se a situação for, ao mesmo tempo: superveniente (posterior ao edital), imprevisível (extraordinária na época do edital), grave (onerosidade excessiva, dificuldade ou impossibilidade de nomear) e necessária (sem solução menos gravosa) (RE 598.099).",
        pista: "Exemplo: uma epidemia imprevista exige nomear mais médicos e acaba com a verba para os auxiliares administrativos. A recusa tem de ser a última opção (“ultima ratio”) (STJ, RMS 57.565).",
      },
      {
        termo: "“Estado das coisas” não basta",
        faz: "Alegar de forma genérica pandemia, crise econômica ou limite prudencial atingido, ou o alerta do Tribunal de Contas sobre esse limite, não afasta o direito de quem passou dentro das vagas (STJ, RMS 66.316).",
        pista: "O limite prudencial (95% do limite de despesa com pessoal) proíbe novos provimentos (LRF, art. 22, parágrafo único, IV), mas o concurso deveria ter sido precedido de estudo de impacto orçamentário (LRF, arts. 16, I, e 21). Falha de planejamento não pode prejudicar o candidato (proteção da confiança, segurança jurídica e boa-fé).",
      },
      {
        termo: "Extinção de cargos por gasto com pessoal (Tema 1.164)",
        faz: "A extinção superveniente dos cargos do edital pela superação do limite prudencial de gastos com pessoal (lei complementar do art. 169), desde que antes do fim da validade do concurso e motivada, justifica relativizar o direito à nomeação de quem passou dentro das vagas (RE 1.316.010, 2025).",
        pista: "O corte não pode servir de pretexto para abrir espaço no orçamento e contratar temporários. Se a extinção vier só depois do fim da validade do concurso, o candidato mantém o direito à nomeação (direito adquirido). A tese usa “limite prudencial”, mas a extinção de cargos do art. 169 ocorre quando se ultrapassa o limite legal. Na prova, siga a literalidade da tese.",
      },
      {
        termo: "Nomeação tardia por decisão judicial",
        faz: "Quem toma posse por decisão judicial não tem direito a indenização por não ter sido investido antes, salvo arbitrariedade flagrante (Tema 671, RE 724.347). Também não conta tempo de serviço nem tem efeitos funcionais e previdenciários retroativos (RE 655.265 AgR).",
        pista: "Arbitrariedade flagrante: descumprir ordem judicial, litigar só para atrasar, má-fé. A simples existência do processo não basta. Sem trabalho não há remuneração (vedação ao enriquecimento sem causa), e a previdência exige contribuição.",
      },
      {
        termo: "Promoções na nomeação tardia (Tema 454)",
        faz: "A nomeação tardia por ato judicial, mesmo com eficácia retroativa, não dá direito às promoções ou progressões que o servidor teria se nomeado a tempo (RE 629.392).",
        pista: "Promoções e progressões podem depender de outros requisitos além do tempo de serviço.",
      },
      {
        parte: "10. Reserva de vagas e isenção de taxa",
        termo: "Pessoa com deficiência (art. 37, VIII)",
        faz: "A lei reservará percentual dos cargos e empregos para pessoas com deficiência e definirá os critérios de admissão (norma de eficácia limitada). Na União, a Lei 8.112 reserva até 20% das vagas, em cargos com atribuições compatíveis com a deficiência; o Decreto 9.508/2018 fixa o mínimo de 5%.",
        pista: "Arredonda-se para cima, sem passar dos 20% (STF, MS 26.310): com 4 vagas não há reserva, e na prática a reserva começa na 5ª vaga (depois a 21ª, a 41ª...). Nas estatais, vale a Lei 8.213/1991 (de 2% a 5% em empresas com 100 ou mais empregados), aplicada às federais pelo Decreto 9.508/2018. Cada ente pode ter regras próprias para seus cargos.",
      },
      {
        termo: "Quem concorre como pessoa com deficiência",
        faz: "Visão monocular dá direito às vagas reservadas (Súmula 377 do STJ; a Lei 14.126/2021 a classifica como deficiência visual). Surdez unilateral total passou a ser deficiência auditiva pela Lei 14.768/2023, o que superou a Súmula 552 do STJ.",
        pista: "A compatibilidade da deficiência com o cargo se avalia de forma objetiva e transparente, comparando as limitações com as atribuições. Pode-se eliminar o candidato só se ficar provado que a deficiência impede o exercício regular do cargo, nunca por presunção.",
      },
      {
        termo: "Cotas raciais (ADC 41 e Lei 15.142/2025)",
        faz: "A Constituição não prevê cotas raciais expressamente, mas o STF julgou constitucional a reserva de vagas nos concursos para cargos efetivos e empregos da Administração direta e indireta e a heteroidentificação como critério complementar à autodeclaração, com respeito à dignidade e com contraditório e ampla defesa (ADC 41, sobre a Lei 12.990/2014).",
        pista: "Hoje, na União, a Lei 15.142/2025 revogou a Lei 12.990/2014 (20%) e reserva 30% para pessoas pretas, pardas, indígenas e quilombolas. Estados e municípios podem ter leis próprias. Parâmetros da ADC 41: a reserva vale em todas as fases e em todas as vagas oferecidas (não só no edital de abertura); não se pode fracionar vagas por especialidade para fugir da cota; a ordem obtida pela alternância e proporcionalidade vale para toda a carreira.",
      },
      {
        termo: "Isenção de taxa de inscrição",
        faz: "É inconstitucional a lei que isenta servidores públicos da taxa, por privilegiar sem justificativa um grupo mais favorecido (ADI 5.818). É constitucional a isenção para candidatos de baixa renda, por ser ação afirmativa (ADI 2.177).",
        pista: "Se os servidores fossem isentos, o custo deles recairia sobre os demais candidatos, inclusive os mais pobres. Na baixa renda, vale comprovante de renda ou declaração de desemprego.",
      },
      {
        parte: "11. Controle judicial e condenado aprovado",
        termo: "Controle judicial do concurso (Tema 485)",
        faz: "O Judiciário não pode substituir a banca examinadora para reexaminar o conteúdo das questões e os critérios de correção, salvo ilegalidade ou inconstitucionalidade (RE 632.853). Pode verificar se o conteúdo cobrado está no programa do edital.",
        pista: "Para o STJ, há ilegalidade quando se descumprem regras do edital (prazos, etapas, cláusulas, reserva de vagas), quando se cobra assunto fora do programa e quando a banca contraria precedente obrigatório, como tese de recurso repetitivo (CPC, art. 927).",
      },
      {
        termo: "Condenado aprovado em concurso (Tema 1.190)",
        faz: "A suspensão dos direitos políticos por condenação criminal transitada em julgado (art. 15, III) não impede a nomeação e a posse do aprovado, desde que o cargo não seja incompatível com a infração praticada. O início do exercício depende do regime da pena ou de decisão do juízo da execução sobre a compatibilidade de horários (RE 1.282.553).",
        pista: "A suspensão atinge o direito de votar e ser votado, não o direito de trabalhar (dignidade e valor social do trabalho, art. 1º, III e IV; ressocialização, LEP, art. 1º). Continua valendo a regra do gozo dos direitos políticos (Lei 8.112, art. 5º, II) para outros casos, e a investigação de vida pregressa pode barrar o candidato.",
      },
      {
        parte: "12. Cargo em comissão e função de confiança",
        termo: "Cargo em comissão",
        faz: "Livre nomeação, mas só para direção, chefia e assessoramento (Tema 1.010 do STF). Não exige concurso, e a exoneração também é livre (“ad nutum”): a qualquer tempo, sem processo, sem contraditório e sem motivação.",
        pista: "Se a autoridade decidir motivar a exoneração, o motivo tem de ser verdadeiro (teoria dos motivos determinantes). Não confunda exoneração (sem punição) com demissão (punição). O efetivo só é exonerado nos casos da lei (a pedido, reprovação no estágio probatório, não entrar em exercício no prazo).",
      },
      {
        termo: "Regime do comissionado",
        faz: "O ocupante de cargo em comissão é servidor estatutário, sujeito ao mesmo estatuto dos efetivos, mas não tem estabilidade. Se ocupa só o cargo em comissão, vai para o regime geral de previdência (art. 40, § 13).",
        pista: "Pode sofrer punição, inclusive a destituição de cargo em comissão (equivale à demissão), que exige processo disciplinar com contraditório e ampla defesa. A lei não pode criar outra forma de escolha, como eleição direta para diretor de escola em cargo comissionado (ADI 2.997).",
      },
      {
        termo: "Gestante comissionada ou temporária (Tema 542)",
        faz: "A gestante tem direito à licença-maternidade e à estabilidade provisória, qualquer que seja o regime (contratual ou administrativo), mesmo em cargo em comissão ou contrato por tempo determinado (RE 842.844).",
        pista: "A estabilidade vai da confirmação da gravidez até 5 meses após o parto, mesmo sem aviso prévio da gravidez. Se morrer a mãe, o direito passa a quem tiver a guarda do filho (LC 146/2014). Exonerada sem justa causa, recebe indenização do que ganharia até 5 meses após o parto.",
      },
      {
        termo: "Função de confiança",
        faz: "É só um conjunto de atribuições de direção, chefia ou assessoramento, exercido exclusivamente por servidor ocupante de cargo efetivo (art. 37, V). Não se fala em nomeação e exoneração, mas em designação e dispensa.",
        pista: "Exemplo: um auditor designado para coordenar o setor continua auditor e ganha a função extra. Se o mesmo servidor é nomeado para cargo em comissão de diretor, deixa de exercer o cargo de origem enquanto ocupa o outro cargo.",
      },
      {
        termo: "Cargo em comissão × função de confiança",
        faz: "Cargo em comissão é cargo (atribuições + vaga), aberto a qualquer pessoa, inclusive sem vínculo, com nomeação e exoneração; a lei fixa casos, condições e percentuais mínimos a serem ocupados por servidores de carreira. Função de confiança não é cargo, só cabe a efetivos e tem designação e dispensa.",
        pista: "Na União não há lei geral com esse percentual mínimo, apenas leis de carreiras específicas, como a Lei 11.416/2006 (servidores do Judiciário da União). Direção e chefia são comando e administração superior; assessoramento é apoio direto a uma autoridade (assessor de gabinete).",
      },
      {
        termo: "Servidor efetivo × servidor de carreira",
        faz: "Cargo efetivo é o provido por concurso. Ele pode ser isolado (sem promoção) ou de carreira (com promoção). Todo servidor de carreira é efetivo, mas nem todo efetivo é de carreira.",
        pista: "O art. 37, V, fala em “efetivos” para as funções de confiança e em “de carreira” para o percentual de cargos em comissão. Em geral as questões misturam os termos; só se apegue à diferença se a questão claramente pedir.",
      },
      {
        termo: "Criação de cargo em comissão (Tema 1.010)",
        faz: "Requisitos do STF (RE 1.041.210): 1) só para direção, chefia e assessoramento, nunca para tarefas burocráticas, técnicas ou operacionais; 2) relação de confiança entre quem nomeia e o nomeado; 3) número proporcional à necessidade e ao número de efetivos do ente; 4) atribuições descritas de forma clara e objetiva na própria lei de criação.",
        pista: "É inconstitucional criar cargo em comissão sem esses requisitos (ADI 6.655). Exemplo: cargo em comissão de contador é inválido, por ser técnico. As atribuições não podem ser deixadas para regulamento ou resolução.",
      },
      {
        parte: "13. Nepotismo",
        termo: "Súmula Vinculante 13",
        faz: "Viola a Constituição nomear cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica com cargo de direção, chefia ou assessoramento, para cargo em comissão, de confiança ou função gratificada, na Administração direta e indireta de todos os Poderes e entes, incluído o ajuste por designações recíprocas.",
        pista: "Tio é parente de 3º grau (proibido); primo é de 4º (permitido). Nepotismo cruzado: duas autoridades combinam nomear, cada uma, o parente da outra. Exemplo: a autoridade não pode nomear a esposa de um diretor da mesma autarquia, mesmo sem parentesco com ela.",
      },
      {
        termo: "Nepotismo independe de lei",
        faz: "A proibição decorre diretamente dos princípios do art. 37, caput (moralidade e impessoalidade): não precisa de lei formal (Tema 66, RE 579.951). A lei que trata de nepotismo não é de iniciativa exclusiva do chefe do Executivo (Tema 29, RE 570.392).",
        pista: "Desde a Lei 14.230/2021, o nepotismo é ato de improbidade que atenta contra os princípios da Administração.",
      },
      {
        termo: "Alcance e exceções da SV 13",
        faz: "Não alcança cargos efetivos: o parente aprovado em concurso pode ser nomeado (ADI 524). Quando o parentesco é com outro servidor (e não com quem nomeia), só há nepotismo se esse servidor tiver ascendência hierárquica ou funcional sobre a autoridade nomeante (ARE 896.762 AgR; Rcl 9.284).",
        pista: "Exemplo: o diretor de um órgão subordinado a um ministério nomeia o cônjuge do ministro: há nepotismo. Sem essa relação, a leitura literal proibiria o cônjuge de um diretor de ser nomeado em qualquer órgão da União, o que não é o objetivo.",
      },
      {
        termo: "Cargos políticos",
        faz: "A SV 13 não alcança, de imediato, os cargos políticos (ministros de Estado, secretários estaduais e municipais), salvo fraude ou falta de razoabilidade por manifesta ausência de qualificação técnica ou de idoneidade moral do nomeado (Rcl 28.024 AgR).",
        pista: "Esse é o entendimento para a prova, embora haja divergência no próprio STF. O tema está em repercussão geral no RE 1.133.118.",
      },
      {
        parte: "14. Associação sindical e greve",
        termo: "Associação sindical (art. 37, VI)",
        faz: "É garantido ao servidor público civil o direito à livre associação sindical, seja ele efetivo ou comissionado; filiar-se é facultativo. Aos militares a Constituição proíbe a sindicalização e a greve (art. 142, § 3º, IV).",
        pista: "Exercer função executiva em sindicato não é mandato eletivo (art. 38). Cada ente decide, em sua lei, se o afastamento para mandato sindical será com ou sem remuneração; as duas escolhas são constitucionais (ADI 7.242; ADI 510).",
      },
      {
        termo: "Direito de greve (art. 37, VII)",
        faz: "Será exercido nos termos e limites de lei específica: norma de eficácia limitada, e essa lei nunca foi editada. Diante da omissão, o STF mandou aplicar a lei de greve dos trabalhadores em geral (Lei 7.783/1989) até a lei específica sair (MI 708).",
        pista: "A falta da lei não impede a greve. Pela continuidade do serviço público, o tribunal pode impor regime mais severo nos serviços ou atividades essenciais (arts. 9º a 11 da Lei 7.783/1989).",
      },
      {
        termo: "Greve na segurança pública (Tema 541)",
        faz: "A greve, sob qualquer forma ou modalidade, é vedada aos policiais civis e a todos os servidores que atuem diretamente na segurança pública. O poder público é obrigado a participar da mediação aberta pelas entidades da categoria (CPC, art. 165) (ARE 654.432).",
        pista: "Alcança policiais federais, policiais rodoviários federais, policiais civis e penais (art. 144). Para os militares, a proibição está expressa na Constituição; para os policiais civis e demais da segurança pública, vem da decisão do STF.",
      },
      {
        termo: "Desconto dos dias parados (Tema 531)",
        faz: "A Administração deve descontar os dias de paralisação, porque a greve suspende o vínculo funcional; é dever, não opção. Admite-se compensação em caso de acordo. O desconto é incabível se a greve foi provocada por conduta ilícita do poder público (RE 693.456).",
        pista: "Não importa se a greve é lícita ou ilícita, mas qual foi sua causa. Greve por falta de revisão geral anual: há desconto, pois a revisão não é obrigatória se o chefe do Executivo justificar (RE 565.089). Greve por atraso de salário ou do 13º: não há desconto.",
      },
      {
        termo: "Parcelamento e processo prévio",
        faz: "Sem acordo de compensação, o servidor pode pedir o parcelamento do desconto, por analogia ao art. 46 da Lei 8.112 (parcela de no mínimo 10% da remuneração) (STJ, RMS 49.339). Não é preciso processo administrativo prévio para descontar os dias parados (STJ, REsp 1.373.964).",
      },
      {
        termo: "Greve e estágio probatório",
        faz: "A adesão a greve não abusiva não é, por si só, falta grave: é inconstitucional norma que a trate como fator negativo na avaliação do estágio probatório ou motivo de exoneração (ADI 3.235).",
        pista: "Mesmo greve de mais de 30 dias não vira faltas injustificadas nem autoriza a demissão do servidor em estágio probatório (RE 226.966).",
      },
      {
        parte: "15. Contratação temporária",
        termo: "Temporários",
        faz: "Necessidade temporária de excepcional interesse público. Contrato nulo dá direito a saldo de salário e FGTS. Requisitos do STF (RE 658.026, Tema 612): casos excepcionais previstos em lei; prazo predeterminado; necessidade temporária; interesse público excepcional; contratação indispensável.",
        pista: "É exceção ao concurso e se interpreta de forma restritiva. É vedada para serviços ordinários permanentes e para as contingências normais da Administração, salvo quando a própria necessidade é temporária (reforço da saúde numa epidemia, professor para cobrir licença-maternidade). Lei com hipóteses abrangentes e genéricas, sem indicar a situação de emergência, é inconstitucional.",
      },
      {
        termo: "Regime do temporário",
        faz: "O temporário não ocupa cargo nem emprego, só função pública (função autônoma). Não segue o estatuto geral nem a CLT, mas um regime especial, por contrato de direito público. Suas causas vão para a Justiça Comum, federal ou estadual (RE 573.202; Rcl 4.464).",
        pista: "É agente público. Mesmo que a contratação seja desvirtuada, a Justiça do Trabalho não pode julgar o caso.",
      },
      {
        termo: "13º e férias do temporário (Tema 551)",
        faz: "Temporários não têm direito a 13º salário nem a férias remuneradas com o terço constitucional, salvo: 1) previsão expressa em lei ou no contrato; ou 2) desvirtuamento comprovado da contratação, por sucessivas e reiteradas renovações ou prorrogações (RE 1.066.677).",
        pista: "Exemplo: enfermeira contratada só pelo período da epidemia, sem previsão legal, não recebe. Professora com contrato prorrogado por anos, havendo cargos vagos sem concurso, recebe.",
      },
      {
        termo: "Parcelas dos efetivos (Tema 1.344)",
        faz: "O regime remuneratório do temporário é diferente do regime dos efetivos: o Judiciário não pode estender ao temporário parcelas de qualquer natureza pagas aos efetivos, observado o Tema 551 (RE 1.500.990, 2024).",
        pista: "Exemplo: o adicional de um professor efetivo não se estende por decisão judicial ao professor temporário, salvo previsão em lei ou contrato ou desvirtuamento da contratação.",
      },
      {
        termo: "Contratação nula (Tema 916)",
        faz: "A contratação temporária em desacordo com o art. 37, IX, não gera efeitos jurídicos válidos, salvo o direito aos salários do período trabalhado e ao levantamento dos depósitos do FGTS (Lei 8.036/1990, art. 19-A) (RE 765.320).",
      },
      {
        termo: "Quarentena para nova contratação (Tema 403)",
        faz: "É constitucional a lei que exige 24 meses, contados do fim do contrato, antes de nova admissão de professor temporário já contratado (RE 635.648).",
        pista: "Atende à moralidade e evita tornar ordinário o que é extraordinário. Não confunda: eliminar candidato de novo processo seletivo só porque um contrato anterior foi rescindido por mera conveniência administrativa viola a isonomia e a impessoalidade (STJ, RMS 67.040).",
      },
      {
        parte: "16. Acumulação de cargos",
        termo: "Vedação à acumulação (art. 37, XVI e XVII)",
        faz: "Em regra, é proibido acumular cargos públicos remunerados. A proibição se estende a empregos e funções e alcança toda a Administração direta e indireta: autarquias, fundações, empresas públicas, sociedades de economia mista, suas subsidiárias e as sociedades controladas, direta ou indiretamente, pelo poder público.",
        pista: "A vedação é só para vínculos remunerados: o servidor pode ser convocado como mesário, serviço gratuito. Também não impede ter um cargo público e um ou mais empregos privados (podem existir regras especiais de conflito de interesses). Só a Constituição cria exceções; lei, decreto ou regulamento não podem.",
      },
      {
        termo: "Acumulação",
        faz: "Dois de professor, professor com outro de qualquer natureza (EC 138/2025), dois da saúde. Só importa a compatibilidade de horários (Tema 1.081).",
        pista: "Antes da EC 138/2025, o outro cargo do professor tinha de ser técnico ou científico; hoje pode ser de qualquer natureza (médico, auditor, analista, técnico, militar), o que acaba englobando o caso de dois cargos de professor. A saúde exige profissões regulamentadas (médico, dentista, enfermeiro, fisioterapeuta), nunca cargo só administrativo de hospital. No máximo dois vínculos: nunca três.",
      },
      {
        termo: "Compatibilidade de horários (Tema 1.081)",
        faz: "As hipóteses constitucionais de acumulação dependem unicamente da compatibilidade de horários, verificada no caso concreto, ainda que lei infraconstitucional limite a jornada semanal.",
        pista: "O antigo limite de carga horária foi superado. Exemplo: médico com 30 horas semanais no município (7h às 12h) e 35 horas no estado (13h às 20h) pode acumular.",
      },
      {
        termo: "Teto na acumulação",
        faz: "A acumulação observa o teto em qualquer caso (art. 37, XVI), mas o teto incide sobre cada vínculo separadamente, e não sobre a soma dos ganhos (RE 602.043 e RE 612.975).",
        pista: "Exemplo: teto de R$ 40 mil e dois cargos de R$ 25 mil e R$ 20 mil: não há violação, mesmo somando R$ 45 mil. Pegadinha: se a questão perguntar se a acumulação observa o teto, a resposta é sim; o cálculo é que é individual.",
      },
      {
        termo: "Outras acumulações na Constituição",
        faz: "1) Vereador com cargo, emprego ou função, havendo compatibilidade de horários (art. 38, III); 2) juiz com um cargo ou função de magistério (art. 95, parágrafo único, I); 3) membro do Ministério Público com uma função de magistério (art. 128, § 5º, II, “d”); 4) profissional de saúde das Forças Armadas com outro cargo ou emprego privativo da saúde, na forma da lei e com prevalência da atividade militar (art. 142, § 3º, VIII); 5) militares dos estados e do DF seguem as hipóteses do art. 37, XVI, com prevalência da atividade militar (art. 42, § 3º).",
        pista: "Exemplos: oficial médico do Exército que também é médico de uma prefeitura; professor da escola de uma polícia militar que também leciona na rede municipal. Todas dependem de compatibilidade de horários.",
      },
      {
        parte: "17. Aposentadoria e acumulação; mandato eletivo",
        termo: "Proventos com remuneração (art. 37, § 10)",
        faz: "É vedado receber ao mesmo tempo proventos de aposentadoria do regime próprio (art. 40) ou dos militares (arts. 42 e 142) e a remuneração de cargo, emprego ou função pública, salvo: 1) cargos acumuláveis na forma da Constituição; 2) cargos eletivos; 3) cargos em comissão de livre nomeação e exoneração.",
        pista: "Exemplos: professor aposentado pode assumir outro cargo de professor; servidora aposentada eleita senadora recebe proventos e subsídio; auditora aposentada nomeada secretária de Fazenda (cargo em comissão) também acumula. Nos cargos eletivos e em comissão, não importa em que cargo a pessoa se aposentou.",
      },
      {
        termo: "Regime geral não entra na vedação",
        faz: "As vedações valem para as aposentadorias dos regimes públicos (regime próprio dos servidores, art. 40, e dos militares, art. 142). Nada impede somar uma aposentadoria do regime geral com uma aposentadoria pública, ou com a remuneração de um cargo público.",
        pista: "Exemplo: professora aposentada pelo regime geral na rede privada pode assumir um cargo público de analista.",
      },
      {
        termo: "Duas aposentadorias do regime próprio (art. 40, § 6º)",
        faz: "Salvo as aposentadorias de cargos acumuláveis, é vedado receber mais de uma aposentadoria do regime próprio de previdência social; aplicam-se ainda as vedações, regras e condições do regime geral para acumular benefícios.",
      },
      {
        termo: "Mandato eletivo (art. 38)",
        faz: "Para o servidor da Administração direta, autárquica e fundacional: mandato federal, estadual ou distrital, afastado do cargo, com o subsídio do mandato; prefeito, afastado, mas pode optar pela remuneração mais vantajosa; vereador, com compatibilidade de horários, acumula e recebe os dois; sem compatibilidade, segue a regra do prefeito.",
        pista: "Só o vereador pode acumular. Exemplo: auditor que ganha R$ 35 mil eleito prefeito de cidade com subsídio de R$ 10 mil pode ficar com a remuneração de auditor.",
      },
      {
        termo: "Tempo de serviço e previdência no mandato",
        faz: "Quando há afastamento para mandato eletivo, o tempo de serviço conta para todos os efeitos legais, exceto para promoção por merecimento (art. 38, IV). Se for segurado de regime próprio, o servidor continua filiado a esse regime, no ente de origem (art. 38, V).",
      },
      {
        parte: "18. Remuneração e subsídio",
        termo: "Espécies de retribuição",
        faz: "Remuneração em sentido amplo é tudo o que o agente recebe. Em sentido estrito, é o vencimento básico (parcela fundamental, fixada em lei) mais as demais vantagens (gratificações, adicionais, indenizações). Subsídio é parcela única. Salário é o pago aos empregados públicos. Proventos são dos aposentados; pensão, dos pensionistas.",
        pista: "A Lei 8.112 (art. 41) usa um conceito mais restrito: remuneração é o vencimento do cargo efetivo mais as vantagens pecuniárias permanentes; as indenizações, transitórias, ficam de fora.",
      },
      {
        termo: "Subsídio obrigatório",
        faz: "Parcela única, sem acréscimo de gratificação, adicional, abono, prêmio, verba de representação ou outra espécie remuneratória. É obrigatório para: membros de Poder, detentores de mandato eletivo, ministros de Estado e secretários estaduais e municipais (art. 39, § 4º); carreiras da AGU, Defensoria e procuradorias dos estados e do DF (art. 135); policiais da PF, PRF, Polícia Ferroviária Federal, polícias civis, PMs, bombeiros militares e polícias penais (art. 144, § 9º).",
        pista: "Para os demais servidores organizados em carreira, o subsídio é facultativo (art. 39, § 8º). O policial rodoviário federal é remunerado obrigatoriamente por subsídio.",
      },
      {
        termo: "O que o subsídio admite",
        faz: "A Constituição proíbe parcelas remuneratórias mensais pelo simples exercício regular das atribuições, mas o subsídio admite: 13º salário e terço de férias (Tema 484, RE 650.898); hora extra e adicional noturno (ADI 5.404); verbas indenizatórias, como diárias; benefícios por situações especiais, como auxílio para um curso específico de qualificação (ADI 7.271); e gratificação pelo exercício de cargo em comissão ou função de confiança, respeitado o teto e vedada a incorporação (ADI 3.228, 2025).",
        pista: "Importa a natureza da verba, não o nome: parcela remuneratória mensal chamada de “indenização” ou de “auxílio-aperfeiçoamento” continua proibida. O STF considera indiferente a lei ou o ato dar a ela caráter formal de indenização.",
      },
      {
        parte: "19. Fixação da remuneração e revisão geral anual",
        termo: "Remuneração",
        faz: "Só por lei específica (Tema 1.427). Juiz não aumenta salário por isonomia (Súmula Vinculante 37). A remuneração e o subsídio só são fixados ou alterados por lei específica (lei ordinária), com iniciativa privativa em cada caso (art. 37, X); decreto ou outro ato infralegal não basta.",
        pista: "O Judiciário não pode aumentar nenhuma verba de carreiras distintas por isonomia, seja remuneratória ou indenizatória (Tema 600, RE 710.293): por exemplo, igualar o auxílio-alimentação do Executivo ao do Legislativo. Súmula 679 do STF: vencimentos não podem ser fixados por convenção coletiva. Isso não vale para o salário dos empregados públicos.",
      },
      {
        termo: "Iniciativa e decreto legislativo",
        faz: "A iniciativa é privativa de cada Poder: no Executivo, do chefe do Executivo; no Judiciário, do STF, dos Tribunais Superiores e dos Tribunais de Justiça (art. 96, II, “b”); no Legislativo, de cada Casa (arts. 51, IV, e 52, XIII). Exceção: o subsídio de deputados federais, senadores, Presidente, Vice-Presidente e ministros de Estado é fixado por decreto legislativo do Congresso, sem sanção presidencial.",
        pista: "Os padrões de vencimento consideram a natureza, o grau de responsabilidade e a complexidade dos cargos; os requisitos para a investidura; e as peculiaridades dos cargos (art. 39, § 1º).",
      },
      {
        termo: "Revisão geral anual (art. 37, X)",
        faz: "Serve para manter o poder de compra diante da inflação; não é aumento nem reestruturação de carreira. Exige lei de iniciativa do chefe do Executivo de cada ente, para todos os Poderes, sempre na mesma data e sem distinção de índices.",
        pista: "Um parlamentar não pode propor a revisão geral. Não se pode dar 10% a policiais e professores e 5% aos demais servidores, nem índices diferentes por Poder.",
      },
      {
        termo: "Revisão geral na Justiça (Temas 19 e 624)",
        faz: "O Judiciário não pode obrigar o Executivo a enviar o projeto de revisão, não pode conceder indenização pela falta de revisão e não pode fixar ou alterar o índice (RE 565.089; RE 843.112). Basta o chefe do Executivo justificar, de forma fundamentada, por que não propôs a revisão.",
        pista: "Nos embargos do RE 565.089, o STF também decidiu que o Judiciário não pode criar sanção se o Executivo não enviar o projeto nem a justificativa.",
      },
      {
        parte: "20. Teto remuneratório",
        termo: "Teto geral e subtetos (art. 37, XI)",
        faz: "Teto nacional: subsídio dos ministros do STF. Nos municípios: subsídio do prefeito. Nos estados e no DF, um subteto por Poder: Executivo, subsídio do governador; Legislativo, dos deputados estaduais ou distritais; Judiciário, dos desembargadores do TJ, limitado a 90,25% do subsídio dos ministros do STF, limite que vale também para membros do Ministério Público, procuradores e defensores públicos.",
        pista: "O teto alcança remuneração, subsídio, proventos, pensões e outras espécies remuneratórias, recebidas de forma cumulativa ou não, incluídas as vantagens pessoais. O subsídio dos ministros do STF é fixado por lei de iniciativa do próprio STF, aprovada pelo Congresso e sancionada pelo Presidente (art. 48, XV).",
      },
      {
        termo: "Modelo facultativo (art. 37, § 12)",
        faz: "Estados e DF podem adotar, por emenda à Constituição estadual ou à Lei Orgânica, um limite único: o subsídio dos desembargadores do TJ, limitado a 90,25% do subsídio dos ministros do STF. Esse limite único não se aplica aos deputados estaduais e distritais nem aos vereadores.",
        pista: "Eles já têm regras próprias: deputado estadual recebe no máximo 75% do subsídio do deputado federal, por lei de iniciativa da Assembleia (art. 27, § 2º); vereador tem subsídio fixado pela Câmara de uma legislatura para a seguinte, em percentuais do subsídio do deputado estadual conforme a população do município (art. 29, VI).",
      },
      {
        termo: "Quem se submete ao teto",
        faz: "Ocupantes de cargos, funções e empregos; membros de qualquer Poder; detentores de mandato eletivo e demais agentes políticos, em todos os entes. Sempre na Administração direta, nas autarquias e nas fundações. Empresas públicas, sociedades de economia mista e subsidiárias só se receberem recursos públicos para despesas de pessoal ou de custeio em geral (art. 37, § 9º).",
        pista: "Estatal que se sustenta sem esses repasses não segue o teto. Cuidado com a simplificação “estatal dependente segue o teto”: o conceito de dependente da LRF (art. 2º, III) inclui também recursos para despesas de capital, o que a Constituição não menciona. Siga a letra da Constituição.",
      },
      {
        termo: "O que entra no cálculo do teto",
        faz: "Conta a remuneração bruta, antes do imposto de renda e da contribuição previdenciária; o excesso é cortado (abate-teto) e só depois incidem os tributos. Não entram as parcelas indenizatórias previstas em lei ordinária nacional, aprovada pelo Congresso e aplicada a todos os Poderes e órgãos autônomos (art. 37, § 11).",
      },
      {
        termo: "Procuradores municipais e juízes estaduais",
        faz: "Os procuradores municipais estão nas funções essenciais à Justiça: seu teto é o dos desembargadores (90,25% do subsídio dos ministros do STF), e não o do prefeito (Tema 510, RE 663.696). A magistratura tem caráter nacional: juízes estaduais e federais seguem o mesmo teto, sem o subteto estadual (ADI 3.854 e ADI 4.014).",
        pista: "O procurador municipal não ganha exatamente 90,25%: esse é o limite, e o valor pode ser menor. Subsídio dos ministros dos Tribunais Superiores: 95% do dos ministros do STF; dos demais magistrados, escalonado, com diferença de 5% a 10% entre as categorias (art. 93, V).",
      },
      {
        termo: "Pensão somada à remuneração",
        faz: "Na acumulação permitida de cargos, o teto incide sobre cada vínculo isoladamente. Mas, se o instituidor da pensão morreu depois da EC 19/1998, o teto incide sobre a soma da remuneração ou dos proventos com a pensão (RE 602.584).",
        pista: "Exemplo: servidor efetivo que recebe pensão pela morte do cônjuge juiz tem a pensão e a remuneração somadas para o teto.",
      },
      {
        parte: "21. Isonomia, vinculação e equiparação",
        termo: "Isonomia entre os Poderes (art. 37, XII)",
        faz: "Os vencimentos dos cargos do Legislativo e do Judiciário não podem ser superiores aos pagos pelo Executivo.",
        pista: "O objetivo é evitar que carreiras mais próximas das autoridades consigam aumentos maiores para funções parecidas. Mesmo assim, o Judiciário não pode aumentar verba por isonomia (Súmula Vinculante 37; Tema 600).",
      },
      {
        termo: "Vedação à vinculação e à equiparação (art. 37, XIII)",
        faz: "É vedada a vinculação ou equiparação de quaisquer espécies remuneratórias para efeito de remuneração do serviço público. Vinculação é relação vertical (carreira B recebe 95% da carreira A); equiparação é horizontal (policiais estaduais recebem o mesmo que os federais).",
        pista: "O objetivo é impedir aumentos automáticos, em reflexo: cada carreira precisa de lei própria fixando o valor. Valem as vinculações feitas pela própria Constituição, como ministros do TCU com as mesmas garantias, prerrogativas e vencimentos dos ministros do STJ.",
      },
      {
        termo: "Limite não é vinculação",
        faz: "Quando a Constituição fixa um limite, não cria vinculação. Deputado estadual recebe até 75% do subsídio do deputado federal, mas a lei estadual deve fixar um valor (R$ 30 mil, R$ 25 mil...), e não “75% do subsídio federal”.",
        pista: "Lei que fixe o subsídio como percentual automático de outro cargo cria vinculação proibida e é inconstitucional.",
      },
      {
        termo: "Súmula Vinculante 42",
        faz: "É inconstitucional vincular o reajuste de vencimentos de servidores estaduais ou municipais a índices federais de correção monetária.",
        pista: "Exemplo: lei estadual não pode prever revisão automática pelo IPCA, índice de órgão federal. Fundamentos: autonomia dos entes e vedação à vinculação e à equiparação (art. 37, XIII).",
      },
      {
        termo: "ADI 7.264",
        faz: "1) É inconstitucional vincular a remuneração de carreiras de entes distintos ao subsídio dos ministros do STF; 2) lei que fixa subsídio em percentual de um cargo paradigma vale só pelo valor vigente na data de sua publicação, sem reajustes automáticos posteriores; 3) é válido o escalonamento entre cargos da mesma carreira ou entre conselheiros e auditores de contas.",
        pista: "Exemplo válido: a lei fixa o último nível da carreira em R$ 20 mil e os demais níveis em percentuais dele, porque não liga carreiras diferentes e o topo continua a depender de lei.",
      },
      {
        termo: "Tribunais de Contas e Ministério Público",
        faz: "O auditor de contas previsto no art. 73, § 4º (ministro ou conselheiro substituto) pode receber o mesmo que juiz de direito de entrância final no exercício normal e o mesmo que o conselheiro titular quando o substitui (ADI 6.939).",
        pista: "Não confunda com os servidores dos Tribunais de Contas (analistas e auditores de controle externo). É inconstitucional vincular automaticamente o Ministério Público de Contas ao Ministério Público comum (ADI 3.804) e vincular os subsídios do Ministério Público aos da magistratura.",
      },
      {
        parte: "22. Efeito cascata, incorporação e irredutibilidade",
        termo: "Vedação ao efeito cascata (art. 37, XIV)",
        faz: "Os acréscimos pecuniários do servidor não são computados nem acumulados para conceder acréscimos posteriores: cada adicional ou gratificação incide só sobre o vencimento básico.",
        pista: "Exemplo: vencimento de R$ 5.000, adicional A de 10% (R$ 500) e adicional B de 20%. O B incide sobre R$ 5.000 (R$ 1.000), e não sobre R$ 5.500: total de R$ 6.500.",
      },
      {
        termo: "Vedação à incorporação (art. 39, § 9º)",
        faz: "É vedado incorporar à remuneração do cargo efetivo vantagens temporárias ou ligadas ao exercício de função de confiança ou de cargo em comissão.",
        pista: "Antes, o servidor que ficava anos em cargo em comissão incorporava parte da gratificação e a mantinha depois de exonerado. Hoje, ao deixar o cargo em comissão ou a função de confiança, perde a retribuição.",
      },
      {
        termo: "Irredutibilidade (art. 37, XV)",
        faz: "O subsídio e os vencimentos dos ocupantes de cargos e empregos públicos são irredutíveis. A garantia vale para o total da remuneração: a lei pode mudar a composição (reduzir o vencimento básico, alterar ou extinguir gratificações), desde que o valor total não caia (Tema 434, RE 596.542; Tema 41, RE 563.965).",
        pista: "Protege o valor nominal, não o poder de compra: R$ 10 mil não podem virar R$ 9 mil, mas os mesmos R$ 10 mil compram menos com a inflação. Não há direito adquirido a regime jurídico.",
      },
      {
        termo: "Exceções à irredutibilidade",
        faz: "A redução é admitida para ajustar ao teto (art. 37, XI), à vedação ao efeito cascata (art. 37, XIV) e ao subsídio em parcela única (art. 39, § 4º). Também não protege contra o aumento do imposto de renda (art. 153, III e § 2º, I) nem contra a igualdade tributária (art. 150, II).",
        pista: "Por isso o aumento da alíquota da contribuição previdenciária dos servidores não viola a irredutibilidade (ADC 8).",
      },
      {
        termo: "Jornada e irredutibilidade",
        faz: "Aumentar a jornada sem aumentar proporcionalmente a remuneração viola a irredutibilidade (Tema 514, ARE 660.010). Também é inconstitucional reduzir a jornada com redução proporcional dos vencimentos (LRF, art. 23, § 2º) e reduzir o valor de cargos em comissão e funções de confiança ocupados (art. 23, § 1º) (ADI 2.238).",
        pista: "Exemplo: quem foi admitido para 20 horas com R$ 10 mil só pode passar a 40 horas se passar a receber R$ 20 mil. A redução do valor só é possível nos cargos vagos.",
      },
      {
        termo: "Administração tributária (art. 37, XVIII e XXII)",
        faz: "A administração fazendária e seus servidores fiscais têm precedência sobre os demais setores administrativos, em sua área, na forma da lei. As administrações tributárias são atividades essenciais ao funcionamento do Estado, exercidas por servidores de carreiras específicas, têm recursos prioritários e atuam de forma integrada, compartilhando cadastros e informações fiscais, na forma da lei ou convênio.",
        pista: "Exemplo: outro setor da prefeitura não pode impedir os fiscais de vistoriar um estabelecimento. São carreiras típicas de Estado, indelegáveis.",
      },
      {
        parte: "23. Direitos sociais dos servidores",
        termo: "Direitos do art. 39, § 3º",
        faz: "Aplicam-se aos ocupantes de cargo público: salário mínimo, inclusive na remuneração variável; 13º salário; adicional noturno; salário-família; jornada de até 8 horas diárias e 44 semanais; repouso semanal remunerado; hora extra de no mínimo 50% a mais; férias com pelo menos 1/3 a mais; licença à gestante de 120 dias; licença-paternidade; proteção do mercado de trabalho da mulher; redução dos riscos do trabalho; proibição de diferença de salário, função e admissão por sexo, idade, cor ou estado civil (art. 7º, IV, VII, VIII, IX, XII, XIII, XV, XVI, XVII, XVIII, XIX, XX, XXII e XXX).",
        pista: "A lei pode fixar requisitos diferentes de admissão quando a natureza do cargo exigir. Não estão na lista, por exemplo, FGTS, seguro-desemprego e aviso prévio.",
      },
      {
        termo: "Salário mínimo do servidor (SV 16 e SV 15)",
        faz: "O salário mínimo se refere ao total da remuneração, e não ao vencimento básico (Súmula Vinculante 16): o básico pode ficar abaixo do mínimo se a soma passar dele. Se o total ficar abaixo, o servidor recebe um abono da diferença, e as gratificações não incidem sobre esse abono (Súmula Vinculante 15).",
        pista: "Fala-se da remuneração bruta: depois dos descontos, o líquido pode ficar abaixo do mínimo. Exemplo: básico de R$ 1.000 + 30% (R$ 300) com mínimo de R$ 1.600: abono de R$ 300, e o total fica exatamente no mínimo.",
      },
      {
        termo: "Mínimo não é indexador (SV 4 e Tema 900)",
        faz: "Salvo nos casos da Constituição, o salário mínimo não pode ser indexador da base de cálculo de vantagem de servidor ou empregado, nem ser substituído por decisão judicial (Súmula Vinculante 4). É proibido pagar ao servidor menos que o salário mínimo, mesmo em jornada reduzida (Tema 900, RE 964.659).",
        pista: "Não vale gratificação em percentual do mínimo nem cargo pago em “10 salários mínimos” (art. 7º, IV, e art. 37, XIII). O Tema 900 não analisou temporários nem os vínculos da reforma trabalhista.",
      },
      {
        parte: "24. Licenças parentais",
        termo: "Licença à gestante e licença-paternidade",
        faz: "A Constituição garante 120 dias de licença à gestante; muitos entes prorrogam por mais 60. A licença-paternidade depende de lei: até ela existir, vale o mínimo de 5 dias do ADCT (art. 10, § 1º), e estados e municípios podem ampliar o prazo.",
        pista: "O STF reconheceu a omissão do Congresso (ADO 20). A Lei 15.371/2026 regulamentou a licença-paternidade dos empregados (CLT e Previdência): 10 dias a partir de 2027, 15 a partir de 2028 e 20 a partir de 2029, este condicionado ao cumprimento da meta fiscal. Ela não altera a Lei 8.112. Na União, o servidor tem 5 dias, prorrogáveis por mais 15, e a servidora tem 120 + 60 dias.",
      },
      {
        termo: "Adoção (Tema 782)",
        faz: "Os prazos são os mesmos para filhos biológicos e adotivos, para vínculo civil ou militar e qualquer que seja a idade do adotado; a licença vale também na adoção de adolescentes (RE 778.889; ADIs de 2024).",
        pista: "Por isso a regra da Lei 8.112 (90 dias para adotar criança de até 1 ano e 30 dias acima disso) é inconstitucional. No casal de servidores, os dois adotantes têm licença, equivalentes à maternidade e à paternidade (ADI 7.518).",
      },
      {
        termo: "Pai solo e casais homoafetivos (Temas 1.182 e 1.072)",
        faz: "A licença-maternidade se estende ao pai genitor monoparental (RE 1.348.854). A mãe não gestante em união homoafetiva tem direito à licença-maternidade; se a companheira já a usou, tem o período da licença-paternidade (RE 1.211.446; ADI 7.518).",
        pista: "Exemplos de pai solo: a mãe morreu no parto; casal de homens com filho por gestação de substituição. O STF não admitiu dividir livremente a soma das licenças entre os pais: depende de lei.",
      },
      {
        parte: "25. Previdência e aposentadorias",
        termo: "Regimes de previdência",
        faz: "O regime próprio (art. 40) vale para os servidores titulares de cargo efetivo e para os agentes de cargos vitalícios. Tem caráter contributivo e solidário: contribuem o ente, os servidores ativos, os aposentados e os pensionistas, com equilíbrio financeiro e atuarial. O regime geral vale para o ocupante exclusivamente de cargo em comissão, de outro cargo temporário, inclusive mandato eletivo, e de emprego público (art. 40, § 13).",
        pista: "Também ficam fora do regime próprio os temporários e os demais vínculos que não sejam efetivos nem vitalícios.",
      },
      {
        termo: "Aposentadoria por incapacidade permanente",
        faz: "Ocorre por incapacidade permanente para o trabalho no cargo em que o servidor estiver investido, quando ele não puder ser readaptado. É obrigatória a realização de avaliações periódicas para verificar se as condições que levaram à aposentadoria continuam, na forma de lei do ente (art. 40, § 1º, I).",
        pista: "Readaptação é a forma de provimento em que o servidor vai para outro cargo compatível com a sua limitação. Só se não for possível readaptar haverá aposentadoria. Antes da EC 103/2019, chamava-se aposentadoria por invalidez.",
      },
      {
        termo: "Aposentadoria compulsória",
        faz: "Ocorre aos 70 anos ou aos 75 anos, na forma de lei complementar, com proventos proporcionais ao tempo de contribuição (art. 40, § 1º, II). A LC 152/2015 fixou a idade em 75 anos.",
        pista: "É automática (de pleno direito): ao completar a idade, o servidor é aposentado. Se continuar trabalhando, atua como agente de fato.",
      },
      {
        termo: "Compulsória e cargo em comissão (RE 786.540)",
        faz: "1) Ocupantes exclusivamente de cargo em comissão não se submetem à aposentadoria compulsória, que atinge só os ocupantes de cargo efetivo, e não há idade-limite para a nomeação em cargo em comissão; 2) o servidor efetivo que completa 75 anos é aposentado no cargo efetivo, mas pode continuar no cargo em comissão que já exercia, ou ser nomeado para um, salvo impedimento em lei.",
        pista: "Exemplo: pessoa de 76 anos pode ser nomeada para um cargo em comissão. Não há criação nem continuidade de vínculo efetivo.",
      },
      {
        termo: "Compulsória fora do regime próprio",
        faz: "Não se aplica a compulsória aos titulares de serventias judiciais não estatizadas (“cartórios”), desde que não ocupem cargo público efetivo e não recebam remuneração dos cofres públicos (Tema 571, RE 647.827). Já os empregados dos consórcios públicos, das empresas públicas, das sociedades de economia mista e de suas subsidiárias serão aposentados compulsoriamente na mesma idade, cumprido o tempo mínimo de contribuição, na forma da lei (art. 201, § 16, EC 103/2019).",
        pista: "Em tese, empregado público não seguiria a compulsória, porque não está no regime próprio. Mas, pela letra da Constituição após a EC 103/2019, ela também se aplica aos empregados das estatais e dos consórcios.",
      },
      {
        termo: "Aposentadoria voluntária",
        faz: "Depende de pedido do servidor. Na União, a idade mínima é de 62 anos para a mulher e 65 para o homem (art. 40, § 1º, III). Nos estados, no DF e nos municípios, a idade mínima é fixada por emenda à respectiva Constituição ou Lei Orgânica, observados o tempo de contribuição e os demais requisitos de lei complementar do ente.",
        pista: "A EC 103/2019 fixou a idade mínima só para a União e deixou cada ente criar a sua regra.",
      },
      {
        termo: "Requisitos diferenciados e tempo fictício",
        faz: "Em regra, é vedado adotar requisitos ou critérios diferenciados de aposentadoria (art. 40, § 4º). Exceções: lei complementar do ente pode fixar idade e tempo de contribuição diferenciados para servidores com deficiência, após avaliação biopsicossocial por equipe multiprofissional e interdisciplinar (§ 4º-A), e para policiais, agentes penitenciários e socioeducativos (§ 4º-B). A lei não pode criar nenhuma forma de contagem de tempo de contribuição fictício (§ 10).",
        pista: "O § 4º-B alcança os policiais do art. 144, I a IV (federais, rodoviários federais, ferroviários federais e civis) e os policiais das Casas do Congresso. Tempo fictício: por exemplo, contar em dobro as férias não gozadas para a aposentadoria não é permitido.",
      },
      {
        parte: "26. Estabilidade e perda do cargo",
        termo: "Estabilidade",
        faz: "Direito de permanência no serviço público do servidor de cargo efetivo. Requisitos (art. 41, caput e § 4º): 1) cargo de provimento efetivo, ou seja, que exige concurso; 2) três anos de efetivo exercício; 3) aprovação em avaliação especial de desempenho por comissão instituída para essa finalidade.",
        pista: "Garante a autonomia do servidor contra pressões políticas e favorece a profissionalização em carreiras.",
      },
      {
        termo: "Três anos e estágio probatório",
        faz: "A EC 19/1998 aumentou de dois para três anos o tempo para a estabilidade. O STF entende que o art. 41 é autoaplicável e liga o estágio probatório ao prazo da estabilidade: o estágio passou a ter 36 meses (STA 269 AgR).",
        pista: "Muitas leis, como a Lei 8.112, ainda falam em 24 meses. O estágio é feito em cada cargo efetivo novo; a estabilidade é adquirida no serviço público e acompanha o servidor em novos provimentos. Não há estabilidade em cargo em comissão, emprego público nem para temporários.",
      },
      {
        termo: "Perda do cargo pelo servidor estável",
        faz: "Quatro hipóteses (art. 41, § 1º, e art. 169, § 4º): 1) sentença judicial transitada em julgado; 2) processo administrativo disciplinar, com ampla defesa; 3) procedimento de avaliação periódica de desempenho, na forma de lei complementar, com ampla defesa; 4) excesso de despesa com pessoal.",
        pista: "A sentença precisa ser definitiva, sem recurso; exemplo: perda da função pública por improbidade. No PAD, a demissão pode produzir efeitos mesmo com recurso pendente (presunção de legitimidade). A lei complementar da avaliação periódica até hoje não foi editada. As questões costumam citar só as três hipóteses do art. 41, § 1º.",
      },
      {
        termo: "Excesso de despesa com pessoal (art. 169)",
        faz: "O limite de despesa com pessoal está na Lei de Responsabilidade Fiscal (LC 101/2000). Se ele for ultrapassado, antes de atingir os estáveis o ente deve: 1) reduzir em pelo menos 20% as despesas com cargos em comissão e funções de confiança; 2) exonerar os servidores não estáveis (§ 3º). Só se isso não bastar, o estável pode perder o cargo, por ato normativo motivado de cada Poder que especifique a atividade funcional, o órgão ou a unidade objeto da redução (§ 4º).",
        pista: "O estável que perde o cargo por esse motivo recebe indenização de um mês de remuneração por ano de serviço (§ 5º). O cargo é considerado extinto, e fica vedado criar cargo, emprego ou função com atribuições iguais ou assemelhadas por quatro anos (§ 6º).",
      },
      {
        termo: "Demissão × exoneração",
        faz: "Demissão é punição por falta grave. Exoneração é o desligamento nos demais casos, em regra sem caráter punitivo.",
        pista: "Exemplo: o servidor que quer deixar o cargo pede exoneração. O estável que perde o cargo por excesso de despesa também é exonerado, e não demitido.",
      },
      {
        parte: "27. Efetividade × estabilidade",
        termo: "Efetividade",
        faz: "Efetividade é atributo do cargo, ligado à forma de provimento: efetivo é o cargo que depende de concurso. Estabilidade é direito do servidor que cumpre os requisitos constitucionais: é integração no serviço público, adquirida com o tempo (RE 167.635).",
        pista: "A efetividade existe desde a nomeação; a estabilidade só vem depois de cumpridas as condições.",
      },
      {
        termo: "Efetivo não estável e estável não efetivo",
        faz: "Nem todo efetivo é estável: nos três primeiros anos, o servidor aprovado em concurso é efetivo, mas ainda não é estável. Nem todo estável é efetivo: o art. 19 do ADCT deu estabilidade aos servidores civis da Administração direta, autárquica e fundacional que, em 5/10/1988, estavam em exercício havia pelo menos cinco anos continuados, sem concurso.",
        pista: "É a “estabilidade excepcional”: o servidor só tem o direito de permanecer no cargo em que foi admitido. Não integra a carreira, não tem progressão funcional nela nem os benefícios privativos dos seus membros.",
      },
      {
        termo: "Estabilidade excepcional (Tema 1.157)",
        faz: "É vedado reenquadrar em novo plano de cargos, carreiras e remuneração o servidor admitido sem concurso antes da Constituição de 1988, mesmo beneficiado pelo art. 19 do ADCT, porque a regra transitória não dá efetividade (ARE 1.306.505; ADI 3.609).",
        pista: "Só alcança entidades de direito público: não se estende a quem atuava em empresas públicas, sociedades de economia mista ou fundações públicas de direito privado (Tema 545, RE 716.378). Esses servidores ficam no regime geral, e não no regime próprio de previdência (ADPF 573).",
      },
      {
        parte: "28. Vitaliciedade",
        termo: "Vitaliciedade",
        faz: "Garantia de permanência mais forte que a estabilidade, só para algumas carreiras: magistratura, Ministério Público e ministros e conselheiros dos Tribunais de Contas. O vitalício só perde o cargo por sentença judicial transitada em julgado.",
        pista: "As outras hipóteses de perda do cargo do servidor estável (PAD, avaliação periódica e excesso de despesa) não se aplicam aos vitalícios. A vitaliciedade não se aplica aos servidores efetivos nem aos empregados públicos.",
      },
      {
        termo: "Vitaliciedade após dois anos",
        faz: "Quem entra por concurso adquire a vitaliciedade após dois anos de exercício: juízes de primeiro grau, membros do Ministério Público e alguns ministros-substitutos e conselheiros-substitutos dos Tribunais de Contas (os “auditores” do art. 73, § 4º). Nesse período, a perda do cargo do juiz depende de deliberação do tribunal a que ele estiver vinculado (art. 95, I).",
        pista: "Em alguns Tribunais de Contas, os conselheiros-substitutos são vitalícios desde a posse; o STF ainda não analisou essa regra.",
      },
      {
        termo: "Vitaliciedade na posse",
        faz: "Quem entra por nomeação direta (indicação) é vitalício desde a posse, sem esperar dois anos: ministros dos Tribunais Superiores (STF, STJ, TSE, TST e STM), desembargadores nomeados pelo quinto constitucional e ministros e conselheiros dos Tribunais de Contas que não ocupavam cargo vitalício antes.",
        pista: "Exemplo: advogado escolhido pelo Congresso para ministro do TCU torna-se vitalício ao tomar posse.",
      },
      {
        parte: "29. Reintegração, recondução, disponibilidade e aproveitamento",
        termo: "Reintegração (art. 41, § 2º)",
        faz: "Invalidada por sentença judicial a demissão do servidor estável, ele é reintegrado ao cargo, com indenização pelo período em que ficou afastado. O eventual ocupante da vaga, se estável, é reconduzido ao cargo de origem, sem direito a indenização, aproveitado em outro cargo ou posto em disponibilidade com remuneração proporcional ao tempo de serviço.",
        pista: "Exemplo: um analista estável é demitido, e um técnico estável aprovado no concurso de analista é nomeado na vaga. Anulada a demissão, o primeiro volta ao cargo de analista, e o segundo é reconduzido ao cargo de técnico, sem indenização. A Constituição fala em decisão judicial, mas os estatutos estendem a reintegração à anulação pela própria Administração (autotutela).",
      },
      {
        termo: "Disponibilidade e aproveitamento (art. 41, § 3º)",
        faz: "Extinto o cargo ou declarada a sua desnecessidade, o servidor estável fica em disponibilidade, com remuneração proporcional ao tempo de serviço, até seu adequado aproveitamento em outro cargo.",
        pista: "A disponibilidade é como um “banco de reservas”: o servidor fica sem trabalhar, aguardando um cargo compatível com sua habilitação, remuneração e atribuições. Aproveitamento é a forma de provimento em que o servidor em disponibilidade volta ao serviço.",
      },
      {
        parte: "30. Responsabilidades do servidor",
        termo: "Três esferas de responsabilidade",
        faz: "Pelo exercício irregular das atribuições, o servidor responde nas esferas: civil (prejuízo ao erário ou a terceiros, por dolo ou culpa, com dever de ressarcir); penal (infrações funcionais definidas em lei como crimes ou contravenções); administrativa (infrações funcionais previstas nas leis administrativas, como o descumprimento de deveres e proibições do estatuto).",
        pista: "Na lei penal, os crimes do funcionário público contra a Administração estão nos arts. 312 a 326 do Código Penal; há outros na legislação especial.",
      },
      {
        termo: "Responsabilidade civil do servidor",
        faz: "É subjetiva: exige prova de dolo ou culpa do servidor. Se o dano for à Administração, ele responde diretamente perante ela. Se for a terceiro, o Estado (ou a prestadora de serviço público) indeniza a vítima e depois move ação regressiva contra o servidor que agiu com dolo ou culpa (art. 37, § 6º).",
        pista: "A vítima processa o Estado ou a prestadora, e não o agente diretamente (Tema 940, RE 1.027.633). A obrigação de reparar o dano se estende aos sucessores, até o limite do valor da herança recebida (art. 5º, XLV).",
      },
      {
        termo: "Independência das instâncias",
        faz: "Em regra, as esferas civil, penal e administrativa são independentes, e as sanções podem se acumular: o mesmo servidor pode ter de ressarcir o dano, ser demitido e ser preso. Também pode ser condenado civil e administrativamente e absolvido no processo penal.",
      },
      {
        termo: "Absolvição penal que vincula",
        faz: "A responsabilidade administrativa é afastada no caso de absolvição criminal que negue a existência do fato ou a sua autoria (Lei 8.112, art. 126). O processo penal exige prova muito mais aprofundada; se ele concluiu que o fato não existiu ou que o servidor não foi o autor, não há motivo para puni-lo nas outras esferas.",
        pista: "Absolvição por falta de provas, por falta de tipicidade, por ausência de culpabilidade ou por qualquer outro motivo não impede a punição administrativa nem a condenação civil. Exemplo: um servidor absolvido por falta de provas pode ser demitido em PAD; outro, absolvido por negativa de autoria, não pode ser punido pelo mesmo fato.",
      },
      {
        termo: "Falta residual (Súmula 18 do STF)",
        faz: "Pela falta residual, não compreendida na absolvição pelo juízo criminal, é admissível a punição administrativa do servidor público.",
        pista: "Conduta residual é a que não é punível na esfera penal, mas gera responsabilidade civil e administrativa. Exemplo: a conduta não se encaixa no tipo penal, mas é falta funcional.",
      },
      {
        termo: "Absolvição imprópria (STJ, 2024)",
        faz: "Se o juízo criminal reconhece a inimputabilidade do agente (Código Penal, art. 26) e o absolve com imposição de medida de segurança, não cabe sanção administrativa: a Administração deve avaliar a concessão de licença para tratamento de saúde ou de aposentadoria por incapacidade (STJ, Informativo 828).",
        pista: "Exemplo: em surto psicótico, o servidor quebra equipamentos e agride o chefe; a perícia conclui que ele não entendia o caráter ilícito do fato. Em regra, as provas só consideram as duas exceções clássicas (inexistência do fato e negativa de autoria); use esta só se a questão cobrar jurisprudência.",
      },
      {
        parte: "31. Jurisprudência recente",
        termo: "Súmulas Vinculantes 5 e 55",
        faz: "A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição (SV 5). O direito ao auxílio-alimentação não se estende aos servidores inativos (SV 55).",
      },
      {
        termo: "Abono de permanência (STJ, Tema 1.233)",
        faz: "O abono de permanência, por sua natureza remuneratória e permanente, integra a base de cálculo das verbas calculadas sobre a remuneração, como o adicional de férias e o 13º salário (REsp 1.993.530, 2025).",
        pista: "O abono é um estímulo ao servidor que já pode se aposentar voluntariamente e continua trabalhando. O STJ já mandava cobrar imposto de renda sobre ele; se entra no imposto, entra também no 13º e no terço de férias.",
      },
      {
        termo: "Parcela fixada por ato infralegal (Tema 1.427)",
        faz: "É inconstitucional a lei delegar ao Poder Executivo a fixação ou a alteração do valor de parcela remuneratória: vale a reserva absoluta de lei em sentido formal (art. 37, X). O reconhecimento da inconstitucionalidade não autoriza reduzir a remuneração nem cobrar de volta o que foi pago (ARE 1.524.795, 2025).",
        pista: "Por segurança jurídica e irredutibilidade, os servidores continuam recebendo os valores aumentados até a diferença ser absorvida pelos reajustes futuros.",
      },
      {
        termo: "FGTS do temporário com contrato nulo (Tema 1.189)",
        faz: "O prazo de dois anos para ajuizar a ação (art. 7º, XXIX, parte final) não se aplica aos temporários com contrato declarado nulo, pois o vínculo é jurídico-administrativo: o prazo é de cinco anos (Decreto 20.910/1932, art. 1º) (RE 1.336.848).",
        pista: "Junto com o Tema 916: a contratação nula só dá direito ao saldo de salário e ao FGTS, que pode ser cobrado em até cinco anos.",
      },
      {
        termo: "Altura mínima na segurança pública (Tema 1.424)",
        faz: "A exigência de altura mínima para cargos do Sistema Único de Segurança Pública pressupõe lei e deve seguir os parâmetros da carreira do Exército (Lei 12.705/2012): 1,60 m para homens e 1,55 m para mulheres (RE 1.469.887, 2025).",
        pista: "Requisitos: 1) previsão em lei (sem lei, o edital não pode exigir); 2) mesma altura do Exército, por razoabilidade: lei que exige mais para a polícia militar é inconstitucional; 3) correlação com as atribuições: não se aplica ao cargo de capelão (ADI 5.044).",
      },
      {
        termo: "Militares casados ou com filhos (Tema 1.388)",
        faz: "É inconstitucional o art. 144-A do Estatuto dos Militares (Lei 6.880/1980), que condicionava o ingresso e a permanência nos cursos de formação de oficiais e praças, mesmo em internato, dedicação exclusiva ou disponibilidade permanente, à inexistência de casamento, união estável, maternidade, paternidade ou dependência socioafetiva (RE 1.530.083, 2025).",
      },
      {
        termo: "Guardas municipais sem aposentadoria especial (ADPF 1.095)",
        faz: "As guardas municipais integram o Sistema Único de Segurança Pública, mas não têm direito à aposentadoria especial: o rol do art. 40, § 4º-B, é taxativo e não as inclui (2025).",
        pista: "O § 4º-B alcança: agentes penitenciários e socioeducativos; polícias legislativas da Câmara e do Senado; Polícia Federal; Polícia Rodoviária Federal e Polícia Ferroviária Federal; polícias civis.",
      },
      {
        termo: "Férias e licença para tratamento de saúde",
        faz: "O município, ao disciplinar o regime dos seus servidores, não pode restringir o período de férias porque o servidor esteve em licença para tratamento de saúde (ADPF 1.132, 2025; Tema 221, RE 593.448).",
        pista: "Afastamento por doença não substitui nem impede o descanso anual garantido pelos arts. 7º, XVII, e 39, § 3º.",
      },
    ],
    cuidado:
      "A Lei 8.112 ainda fala em 2 anos, mas a estabilidade vem após 3 anos, como manda o art. 41 da Constituição. O estágio probatório também passou a 36 meses. E não confunda: estabilidade é do servidor efetivo (perde o cargo em quatro hipóteses); vitaliciedade é de juízes, membros do Ministério Público e dos Tribunais de Contas (só perdem o cargo por sentença transitada em julgado).",
  },
  questoes: [
    {
      topico: "Classificação dos agentes",
      subassunto: "Agente honorífico",
      dificuldade: 4,
      raciocinio: "Convocado para serviço cívico e passageiro: honorífico.",
      enunciado:
        "Um cidadão, sem vínculo com o Estado, é convocado para atuar como jurado no tribunal do júri. Na classificação dos agentes públicos, ele é agente",
      alternativas: [
        "político, pois decide em nome do Estado",
        "honorífico, pois presta serviço transitório por convocação",
        "administrativo, pois integra o quadro do Judiciário",
        "delegado, pois recebe do Estado a execução de um serviço público",
        "credenciado, pois representa a Administração em ato específico",
      ],
      correta: 1,
      explicacao: "Agentes honoríficos prestam serviço relevante e passageiro por requisição ou convocação, como jurados e mesários.",
      explicacaoErradas:
        "“político” é quem forma a vontade superior do Estado. “administrativo” tem vínculo profissional. “delegado” executa serviço por delegação, como o concessionário. “credenciado” recebe encargo por contrato ou ato próprio.",
      pegadinha: "Achar que quem não recebe salário não é agente público.",
      conhecimento: "Para fins penais, o jurado é considerado funcionário público (art. 327 do CP).",
    },
    {
      topico: "Concurso público",
      subassunto: "Súmula Vinculante 43",
      dificuldade: 4,
      raciocinio: "Outra carreira, novo concurso.",
      enunciado:
        "Uma lei autoriza servidores de nível médio a passar, por seleção interna, a um cargo de nível superior de outra carreira. Essa norma é",
      alternativas: [
        "válida, pois valoriza quem já é servidor de carreira",
        "válida, desde que a seleção interna seja de provas",
        "válida só para quem for estável há mais de três anos",
        "inconstitucional, pois outra carreira exige novo concurso",
        "inconstitucional só se a mudança gerar aumento de salário",
      ],
      correta: 3,
      explicacao: "A Súmula Vinculante 43 proíbe o provimento em cargo que não integra a carreira em que o servidor foi investido, sem concurso destinado a ele.",
      explicacaoErradas:
        "“valoriza” e “seleção interna” não substituem o concurso. “estável” não muda a regra. “aumento de salário” não é o critério da súmula.",
      pegadinha: "Aceitar a ascensão por ser feita com provas.",
      conhecimento: "A promoção dentro da mesma carreira continua válida.",
    },
    {
      topico: "Concurso público",
      subassunto: "Psicotécnico",
      dificuldade: 4,
      raciocinio: "Edital não cria exigência sozinho.",
      enunciado:
        "Um edital para cargo federal prevê exame psicotécnico eliminatório, mas a lei da carreira não trata do assunto. O candidato reprovado pede a anulação. A exigência",
      alternativas: [
        "é inválida, pois o psicotécnico depende de previsão em lei",
        "é válida, pois o edital é a lei do concurso público",
        "é válida, se o resultado for sigiloso para evitar fraude",
        "é inválida, pois o psicotécnico é proibido em todo concurso",
        "é válida, pois a Administração tem discricionariedade técnica",
      ],
      correta: 0,
      explicacao: "A Súmula Vinculante 44 diz que só por lei se pode sujeitar a exame psicotécnico a habilitação do candidato.",
      explicacaoErradas:
        "“edital é a lei” não supre a falta de lei formal. “sigiloso” contraria os critérios objetivos e o direito de recorrer. “proibido em todo concurso” exagera. “discricionariedade técnica” não dispensa a lei.",
      pegadinha: "Tomar a frase “o edital é a lei do concurso” como regra absoluta.",
      conhecimento: "Previsto em lei, o exame ainda precisa de critérios objetivos e de recurso.",
    },
    {
      topico: "Concurso público",
      subassunto: "Direito à nomeação",
      dificuldade: 5,
      raciocinio: "Olhe se a extinção veio antes ou depois do fim da validade.",
      enunciado:
        "Aprovado dentro das vagas, um candidato aguarda a nomeação. Ainda na validade do concurso, o ente supera o limite prudencial de gastos com pessoal e extingue os cargos do edital, sem contratar ninguém no lugar. Pelo STF, essa extinção",
      alternativas: [
        "nunca afeta o direito à nomeação, que é absoluto",
        "só vale se o candidato concordar com o fim do cargo",
        "vale sempre, mesmo se vier após o fim da validade do concurso",
        "obriga a nomear o candidato em outro cargo disponível",
        "pode afastar a nomeação, se vier antes do fim da validade",
      ],
      correta: 4,
      explicacao: "No Tema 1.164, o STF admitiu afastar a nomeação quando a extinção superveniente dos cargos, por causa do limite de gastos, ocorre antes do fim da validade.",
      explicacaoErradas:
        "“absoluto” ignora as situações excepcionais do RE 598.099. “concordar” não é requisito. “após o fim da validade” é justamente o caso em que o direito fica consolidado. “outro cargo” não é a solução da tese.",
      pegadinha: "Achar que o direito à nomeação nunca cede.",
      conhecimento: "A medida não pode servir de pretexto para abrir espaço a temporários.",
    },
    {
      topico: "Contratação temporária",
      subassunto: "Contrato nulo",
      dificuldade: 5,
      raciocinio: "Contrato nulo: saldo e FGTS.",
      enunciado:
        "O contrato de um temporário é declarado nulo por desvio das regras do art. 37, IX, da Constituição. Pelo STF, ele tem direito",
      alternativas: [
        "a todas as verbas da CLT, em ação proposta em até 2 anos",
        "a estabilidade, pois trabalhou com boa-fé para o Estado",
        "a saldo de salário e FGTS, com 5 anos para cobrar",
        "apenas ao FGTS, com prazo de 2 anos após o fim do contrato",
        "a nada, pois contrato nulo não gera nenhum efeito",
      ],
      correta: 2,
      explicacao: "O STF garante só saldo de salário e FGTS. Pelo Tema 1.189, o prazo bienal do art. 7º, XXIX, não se aplica a esses casos.",
      explicacaoErradas:
        "“todas as verbas” vai além do que a tese dá. “estabilidade” exige concurso. “prazo de 2 anos” é justamente o que o STF afastou. “a nada” ignora o trabalho já prestado.",
      pegadinha: "Aplicar o prazo de dois anos da Justiça do Trabalho.",
      conhecimento: "A contratação temporária exige lei, prazo certo e necessidade excepcional.",
    },
    {
      topico: "Acumulação de cargos",
      subassunto: "Compatibilidade de horários",
      dificuldade: 5,
      raciocinio: "A Constituição só pede horários compatíveis.",
      enunciado:
        "Um profissional de saúde ocupa dois cargos privativos da área, com horários compatíveis no caso concreto, mas a soma passa de 60 horas semanais, limite de uma norma interna. A acumulação",
      alternativas: [
        "é vedada, pois a norma interna fixa o teto de horas",
        "é lícita, pois importa só a compatibilidade de horários",
        "é lícita só se um dos dois cargos for em comissão",
        "é vedada, pois a Constituição limita a jornada somada a 60 horas",
        "é lícita só com a renúncia à remuneração de um dos cargos",
      ],
      correta: 1,
      explicacao: "No Tema 1.081, o STF fixou que a acumulação depende só da compatibilidade de horários no caso concreto, ainda que norma infraconstitucional limite a jornada.",
      explicacaoErradas:
        "“teto de horas” não prevalece sobre a Constituição. “em comissão” não é requisito. “limita a jornada” não está no art. 37, XVI. “renúncia” não é exigida.",
      pegadinha: "Dar à norma interna força para criar um limite que a Constituição não traz.",
      conhecimento: "A proibição de acumular alcança autarquias, fundações, estatais e subsidiárias (art. 37, XVII).",
    },
    {
      topico: "Estabilidade",
      subassunto: "Perda do cargo",
      dificuldade: 4,
      raciocinio: "Quatro hipóteses. A extinção do cargo leva à disponibilidade.",
      enunciado: "Pela Constituição, um servidor federal já estável pode perder o cargo por",
      alternativas: [
        "decisão judicial de 1º grau, PAD e avaliação periódica de desempenho",
        "sentença transitada, PAD, e só nessas duas hipóteses",
        "sentença transitada, PAD e decisão do chefe imediato",
        "sentença transitada, PAD, avaliação e excesso de despesa",
        "sentença transitada, PAD, avaliação e extinção do cargo",
      ],
      correta: 3,
      explicacao: "O art. 41, § 1º, traz sentença transitada em julgado, processo administrativo e avaliação periódica. O art. 169, § 4º, acrescenta o excesso de despesa com pessoal.",
      explicacaoErradas:
        "“1º grau” não basta. “só nessas duas” esquece as outras. “chefe imediato” não pode tirar o cargo. “extinção do cargo” gera disponibilidade, conforme o art. 41, § 3º.",
      pegadinha: "Tratar a extinção do cargo como perda.",
      conhecimento: "A avaliação periódica depende de lei complementar.",
    },
    {
      topico: "Remuneração",
      subassunto: "Reserva de lei",
      dificuldade: 5,
      raciocinio: "Remuneração se fixa por lei. O já recebido fica protegido.",
      enunciado:
        "Uma lei delega ao Poder Executivo a tarefa de fixar e alterar, por decreto, o valor de uma gratificação de servidores. Pela tese do STF, essa delegação",
      alternativas: [
        "é inconstitucional, mas o que foi pago não será devolvido",
        "é válida, pois o decreto só detalha o valor definido",
        "é inconstitucional, e o servidor deve devolver o que recebeu",
        "é válida, desde que o Congresso aprove o decreto depois",
        "é válida, pois gratificação não integra a remuneração do cargo",
      ],
      correta: 0,
      explicacao: "No Tema 1.427, o STF aplicou o art. 37, X: remuneração só por lei específica. Mas a decisão não autoriza decréscimo nem devolução de valores.",
      explicacaoErradas:
        "“só detalha” não descreve o caso, pois o decreto fixava o valor. “deve devolver” contraria a tese. “Congresso aprove” não supre a lei. “não integra” é falso para esse fim.",
      pegadinha: "Concluir que todo valor inconstitucional volta aos cofres.",
      conhecimento: "A diferença pode ser absorvida por reajustes futuros.",
    },
    {
      topico: "Cargos em comissão",
      subassunto: "Tema 1.010",
      dificuldade: 4,
      raciocinio: "Confiança e chefia, e não rotina.",
      enunciado:
        "Uma lei cria cargos em comissão de motorista e de auxiliar de arquivo, com tarefas rotineiras. Pelo STF, esses cargos são",
      alternativas: [
        "válidos, pois a nomeação é livre em qualquer cargo em comissão",
        "válidos, se ocupados só por servidores de carreira",
        "válidos, desde que o número não passe da metade dos efetivos",
        "inválidos, salvo se a lei dispensar a prova de títulos",
        "inválidos, pois servem só a direção, chefia e assessoramento",
      ],
      correta: 4,
      explicacao: "O art. 37, V, e o Tema 1.010 limitam os cargos em comissão a direção, chefia e assessoramento, com relação de confiança e atribuições descritas em lei.",
      explicacaoErradas:
        "“nomeação é livre” não permite criar o cargo para qualquer tarefa. “servidores de carreira” não resolve o desvio. “metade dos efetivos” não existe como regra. “prova de títulos” não tem relação com o caso.",
      pegadinha: "Confundir liberdade de nomear com liberdade de criar.",
      conhecimento: "As atribuições dos cargos em comissão devem constar da própria lei.",
    },
    {
      topico: "Cargos em comissão",
      subassunto: "Função de confiança",
      dificuldade: 4,
      raciocinio: "Função de confiança é só para efetivo. Cargo em comissão pode vir de fora.",
      enunciado:
        "A chefia de um órgão federal quer designar para uma função de confiança uma pessoa sem vínculo com o serviço público. Essa designação",
      alternativas: [
        "é válida, pois a função é de livre escolha da autoridade",
        "é válida, se houver previsão no regimento interno do órgão",
        "é inválida, pois a função é só de quem tem cargo efetivo",
        "é inválida, pois a função exige concurso específico para ela",
        "é válida só para assessoramento, e não para chefia",
      ],
      correta: 2,
      explicacao: "O art. 37, V, reserva as funções de confiança a quem ocupa cargo efetivo. Pessoa sem vínculo só poderia ir para cargo em comissão.",
      explicacaoErradas:
        "“livre escolha” vale para o cargo em comissão. “regimento interno” não afasta a Constituição. “concurso específico” não existe para função. “só para assessoramento” não tem base.",
      pegadinha: "Trocar função de confiança por cargo em comissão.",
      conhecimento: "Parte dos cargos em comissão deve ficar com servidores de carreira, nos percentuais da lei.",
    },
  ],
};
