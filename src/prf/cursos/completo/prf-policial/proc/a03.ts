import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "proc-03",
  resumo: {
    ideia:
      "Crime que deixa vestígio pede perícia, e o vestígio tem que ser guardado com registro de cada passo. Depois vêm os meios de prova do CPP: interrogatório, confissão, ofendido, testemunhas, reconhecimento, acareação, documentos, indícios e busca e apreensão. Para cada um, observe quem faz, quando cabe e o que acontece se a regra não for seguida.",
    itens: [
      {
        parte: "1. Corpo de delito",
        termo: "Corpo de delito",
        faz: "Se a infração deixa vestígios, o exame é indispensável, e a confissão não o supre (art. 158).",
        pista: "Desaparecidos os vestígios, a prova testemunhal supre a falta (art. 167). Faltar o exame quando ele era possível gera nulidade (art. 564, III, b).",
      },
      {
        termo: "Direto e indireto",
        faz: "Direto: o perito examina o próprio vestígio. Indireto: o perito chega à conclusão por outros meios confiáveis, como prontuário médico, fotos ou relato de quem viu. Crimes que deixam vestígio (não transeuntes) exigem o exame; os que não deixam (transeuntes), não.",
      },
      {
        termo: "Prioridade e horário",
        faz: "O exame pode ser feito em qualquer dia e a qualquer hora (art. 161). Tem prioridade quando o crime envolve violência doméstica e familiar contra a mulher ou violência contra criança, adolescente, idoso ou pessoa com deficiência (art. 158, parágrafo único).",
      },
      {
        termo: "Perícia negada",
        faz: "O juiz ou o delegado nega a perícia pedida pelas partes quando ela não for necessária para esclarecer a verdade (art. 184). Exceção: o exame de corpo de delito nunca pode ser negado.",
      },
      {
        parte: "2. Peritos, quesitos e assistentes",
        termo: "Perito",
        faz: "Um perito oficial com curso superior. Sem ele, duas pessoas idôneas com curso superior, que prestam compromisso (art. 159).",
        pista: "Perito oficial ocupa cargo público criado por lei e entra por concurso. O não oficial é nomeado pelo delegado ou pelo juiz, de preferência com diploma na área do exame (art. 159, § 1º).",
      },
      {
        termo: "Regras do perito",
        faz: "Oficial ou não, o perito se sujeita à disciplina judiciária (art. 275). As partes não interferem na nomeação (art. 276). Não podem ser peritos: quem está interditado de direitos, quem já depôs no processo ou opinou antes sobre o objeto da perícia, analfabetos e menores de 21 anos (art. 279). As regras de suspeição dos juízes valem para os peritos (art. 280).",
      },
      {
        termo: "Quesitos",
        faz: "São as perguntas feitas ao perito. Podem formulá-los o MP, o assistente de acusação, o ofendido, o querelante e o acusado (art. 159, § 3º), até o ato da diligência (art. 176).",
      },
      {
        termo: "Assistente técnico",
        faz: "Indicado pelas partes, atua depois de admitido pelo juiz e de pronto o laudo oficial.",
        pista: "As partes são intimadas da decisão que admite o assistente (art. 159, § 4º). O material periciado fica à disposição dele no órgão oficial, salvo se for impossível conservá-lo (§ 6º). O assistente técnico só existe na fase judicial.",
      },
      {
        termo: "Esclarecimentos em juízo",
        faz: "No processo, as partes podem pedir que o perito seja ouvido para explicar a prova ou responder a quesitos. O pedido e as perguntas são enviados com pelo menos 10 dias de antecedência, e as respostas podem vir em laudo complementar. O assistente técnico pode dar parecer no prazo fixado pelo juiz ou ser ouvido em audiência (art. 159, § 5º).",
      },
      {
        termo: "Perícia complexa",
        faz: "Se a perícia abrange mais de uma área de conhecimento, pode haver mais de um perito oficial, e cada parte pode indicar mais de um assistente técnico (art. 159, § 7º).",
      },
      {
        parte: "3. Laudo",
        termo: "Laudo",
        faz: "Prazo de 10 dias, prorrogável (art. 160). O juiz pode aceitá-lo ou rejeitá-lo, no todo ou em parte (art. 182).",
        pista: "A prorrogação é excepcional e depende de pedido dos peritos (art. 160, parágrafo único).",
      },
      {
        termo: "Partes do laudo",
        faz: "Preâmbulo (quem fez, quando e para quê), exposição (o que foi examinado), fundamentação (o raciocínio técnico) e conclusão (as respostas aos quesitos). Os peritos descrevem com detalhes o que examinaram (art. 160).",
      },
      {
        termo: "Divergência entre peritos",
        faz: "Se os peritos discordam, cada um registra sua posição ou faz laudo separado, e a autoridade nomeia um terceiro. Se o terceiro discordar de ambos, pode ser feito novo exame por outros peritos (art. 180).",
      },
      {
        termo: "Falhas do laudo",
        faz: "Formalidade não cumprida, omissão, obscuridade ou contradição: a autoridade judiciária manda suprir a falha ou completar e esclarecer o laudo. Se achar conveniente, pode mandar fazer novo exame por outros peritos (art. 181).",
      },
      {
        termo: "Sistema liberatório",
        faz: "O juiz não fica preso ao laudo (art. 182). Pode afastá-lo no todo ou em parte, mas precisa dizer por quê, com base nas outras provas. É o reflexo do convencimento motivado na prova pericial.",
      },
      {
        termo: "Perícia por precatória",
        faz: "Quando o exame é feito em outra comarca, os peritos são nomeados pelo juízo que cumpre a carta. Na ação privada, se as partes concordarem, o juiz que pediu pode nomeá-los (art. 177).",
      },
      {
        parte: "4. Perícias em espécie",
        termo: "Autópsia",
        faz: "Feita pelo menos 6 horas depois da morte, salvo se os sinais de morte forem evidentes, o que os peritos declaram no auto (art. 162). Na morte violenta, basta o exame externo quando não houver infração a apurar ou quando as lesões externas já mostrarem a causa da morte e não houver circunstância relevante a verificar por dentro (parágrafo único).",
        pista: "Os cadáveres são sempre fotografados na posição em que foram encontrados, assim como as lesões e os vestígios do local (art. 164). As lesões podem ser mostradas no laudo com fotos, esquemas ou desenhos (art. 165).",
      },
      {
        termo: "Exumação",
        faz: "A autoridade marca dia e hora para a diligência e lavra auto circunstanciado (art. 163). Havendo dúvida sobre a identidade do cadáver exumado, ela é esclarecida pelo instituto de identificação ou por testemunhas, com auto de reconhecimento e de identidade (art. 166).",
      },
      {
        termo: "Exame complementar",
        faz: "Para lesão grave por mais de 30 dias de afastamento, é feito logo após 30 dias do crime; testemunhas podem suprir a falta (art. 168).",
        pista: "Cabe sempre que o primeiro exame de lesões for incompleto, por ordem do delegado ou do juiz, de ofício ou a pedido do MP, do ofendido, do acusado ou do defensor. Os peritos trabalham com o auto anterior em mãos, para completá-lo ou corrigi-lo.",
      },
      {
        termo: "Laboratório e instrumentos",
        faz: "Nas perícias de laboratório, os peritos guardam material suficiente para uma eventual nova perícia (art. 170). Os instrumentos do crime são examinados para verificar a natureza e a eficiência deles (art. 175).",
      },
      {
        termo: "Arrombamento e escalada",
        faz: "No furto com destruição ou rompimento de obstáculo, ou com escalada, os peritos descrevem os vestígios e dizem com que instrumentos, por que meios e em que época o fato provavelmente ocorreu (art. 171).",
      },
      {
        termo: "Avaliação de bens",
        faz: "Coisas destruídas, deterioradas ou que sejam produto do crime são avaliadas. Se a avaliação direta for impossível, ela é feita com os elementos dos autos e outras diligências (art. 172).",
      },
      {
        termo: "Incêndio",
        faz: "Os peritos verificam a causa e o ponto onde o fogo começou, o perigo para a vida ou o patrimônio alheio, a extensão do dano e o valor, além de outras circunstâncias úteis (art. 173).",
      },
      {
        termo: "Exame de escritos",
        faz: "Para reconhecer a letra de alguém, comparam-se documentos que a pessoa reconheça como seus ou que não deixem dúvida, inclusive de arquivos públicos. Sem material suficiente, a autoridade manda a pessoa escrever o que for ditado (art. 174).",
        pista: "O acusado não é obrigado a escrever: ninguém precisa produzir prova contra si mesmo.",
      },
      {
        parte: "5. Local do crime e cadeia de custódia",
        termo: "Preservação do local",
        faz: "O delegado vai ao local e cuida para que nada se altere até a chegada dos peritos (art. 6º, I, e art. 169). Os peritos podem usar fotos, desenhos e esquemas e registram no laudo as alterações que encontrarem e o efeito delas na análise (art. 169, parágrafo único).",
        pista: "Lugar do crime, no CP: tanto onde ocorreu a ação ou omissão quanto onde se produziu ou deveria produzir-se o resultado (art. 6º, ubiquidade). Tempo do crime: o momento da ação ou omissão (art. 4º, atividade).",
      },
      {
        termo: "Tipos de local",
        faz: "Imediato: onde o fato ocorreu e estão os vestígios principais. Mediato: as áreas vizinhas, ligadas ao imediato. Relacionado: qualquer outro lugar ligado ao fato, mesmo longe, como o ponto onde o corpo ou a arma foi deixado.",
      },
      {
        termo: "Cadeia de custódia",
        faz: "Registro da história do vestígio, do reconhecimento ao descarte (art. 158-A). Quem reconhece o vestígio responde pela preservação.",
        pista: "Etapas: reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte.",
      },
      {
        termo: "Coleta e lacres",
        faz: "A coleta é feita de preferência por perito oficial, que envia o material à central de custódia (art. 158-C). O recipiente depende da natureza do vestígio e é fechado com lacre de numeração individual. Só o perito que fará a análise abre o recipiente, ou alguém autorizado, com motivo (art. 158-D).",
        pista: "A cada lacre rompido, a ficha de acompanhamento registra nome e matrícula do responsável, data, local, finalidade e o novo lacre. O lacre rompido vai dentro do novo recipiente (art. 158-D, §§ 4º e 5º).",
      },
      {
        termo: "Central de custódia",
        faz: "Todo instituto de criminalística tem uma central para guardar e controlar os vestígios, com protocolo de entrada e saída. Quem tem acesso ao vestígio é identificado, com data e hora (art. 158-E). Depois da perícia, o material volta para a central e fica lá; se faltar espaço, a autoridade define outro local de depósito (art. 158-F).",
      },
      {
        termo: "Local isolado",
        faz: "Entrar ou remover vestígio antes da liberação do perito é tipificado como fraude processual (art. 158-C, § 2º).",
      },
      {
        termo: "Acidente na rodovia",
        faz: "A Lei 5.970/1973 permite remover feridos e veículos do leito da via antes da perícia, se prejudicam o tráfego, com boletim da ocorrência.",
        pista: "O boletim registra o fato, as testemunhas que o viram e as demais circunstâncias necessárias para esclarecer a verdade. Quem autoriza é a autoridade ou o agente policial que primeiro souber do fato.",
      },
      {
        parte: "6. Interrogatório: natureza e regras",
        termo: "Interrogatório",
        faz: "Sempre com defensor. O silêncio não é confissão nem prejudica a defesa (art. 186). Videoconferência do réu preso só em caso excepcional e fundamentado.",
      },
      {
        termo: "Natureza do interrogatório",
        faz: "É meio de defesa, e também pode servir como prova. É direito do acusado, por isso é obrigatório que o juiz o ofereça: sem ele, há nulidade absoluta. O réu, porém, pode escolher não comparecer ou não falar.",
      },
      {
        termo: "Momento do interrogatório",
        faz: "É o último ato da instrução (art. 400). Para o STF, essa regra vale também nos procedimentos de leis especiais, como a Lei de Drogas e o processo penal militar (HC 127.900). O juiz pode fazer novo interrogatório a qualquer tempo, de ofício ou a pedido fundamentado (art. 196), e o tribunal também pode interrogar (art. 616).",
      },
      {
        termo: "Características",
        faz: "Personalíssimo: só o acusado responde; se for pessoa jurídica, fala o representante legal. Oral, com adaptações: ao surdo, perguntas por escrito; ao mudo, respostas por escrito; ao surdo-mudo, ambas por escrito; a quem não sabe ler ou não fala português, intérprete (arts. 192 e 193). Público, com as restrições do art. 792, § 1º. Individual: havendo vários réus, cada um é ouvido em separado (art. 191).",
      },
      {
        termo: "Quem faz as perguntas",
        faz: "Sistema presidencialista: o juiz pergunta e, no fim, indaga às partes se falta esclarecer algo, deixando as perguntas pertinentes (art. 188). No Júri, acusação e defesa perguntam diretamente ao réu, e os jurados perguntam por meio do juiz (art. 474, §§ 1º e 2º).",
      },
      {
        termo: "Defensor e entrevista prévia",
        faz: "O interrogatório é feito na presença do defensor, constituído ou nomeado (art. 185). O réu tem direito de conversar antes, em particular, com o defensor (art. 185, § 5º).",
        pista: "O defensor de um corréu pode acompanhar o interrogatório do outro e fazer perguntas. Se o réu advoga em causa própria, não assiste ao interrogatório do corréu: outro advogado atua nesse ato (STF, HC 101.021).",
      },
      {
        termo: "Direito ao silêncio",
        faz: "Depois de qualificado e de saber da acusação, o réu é avisado de que pode ficar calado e não responder às perguntas (art. 186). Vale também no inquérito. Para o STJ, a falta desse aviso gera nulidade relativa, que depende de prova de prejuízo.",
        pista: "Não há direito ao silêncio sobre a qualificação (nome, dados pessoais). Dar identidade falsa à polícia é crime, mesmo para se defender (Súmula 522 do STJ).",
      },
      {
        termo: "Duas partes do interrogatório",
        faz: "Sobre a pessoa: residência, meios de vida, profissão, vida pregressa, família e situação social. Sobre os fatos: se a acusação é verdadeira, onde estava, o que sabe das provas, da vítima e das testemunhas (art. 187). Se negar, pode indicar provas (art. 189); se confessar, é perguntado sobre motivos, circunstâncias e coautores (art. 190).",
        pista: "Do interrogatório consta se o preso tem filhos, as idades, se algum tem deficiência e quem cuida deles (art. 185, § 10). Se não souber, não puder ou não quiser assinar, isso fica no termo (art. 195).",
      },
      {
        parte: "7. Réu preso e videoconferência",
        termo: "Réu preso",
        faz: "A regra é o interrogatório no presídio, em sala própria, com segurança, defensor e publicidade (art. 185, § 1º). Não sendo possível ali nem por videoconferência, o preso é levado ao juízo (§ 7º).",
      },
      {
        termo: "Hipóteses da videoconferência",
        faz: "Só para réu preso, de forma excepcional, por decisão fundamentada, de ofício ou a pedido, para: I – prevenir risco à segurança pública, se houver fundada suspeita de que o preso integra organização criminosa ou pode fugir no deslocamento; II – permitir a participação do réu com grande dificuldade de ir ao juízo, por doença ou outro motivo pessoal; III – impedir que o réu influencie testemunha ou vítima, quando não for possível ouvi-las por videoconferência; IV – responder a gravíssima questão de ordem pública (art. 185, § 2º).",
      },
      {
        termo: "Garantias da videoconferência",
        faz: "As partes são intimadas da decisão com 10 dias de antecedência (§ 3º). O preso acompanha, pelo mesmo sistema, toda a audiência (§ 4º). Há canal telefônico reservado entre o defensor que está no presídio e o advogado que está na sala de audiência, e entre este e o preso (§ 5º).",
        pista: "O mesmo sistema pode ser usado em outros atos com o preso, como acareação, reconhecimento e oitiva de testemunha ou do ofendido (§ 8º).",
      },
      {
        parte: "8. Confissão",
        termo: "Confissão",
        faz: "Divisível e retratável, avaliada junto com as demais provas (arts. 197 e 200).",
        pista: "Divisível: o juiz pode aceitar uma parte e rejeitar outra. Retratável: o réu pode voltar atrás, mas o juiz continua livre para pesar a confissão retratada junto com as outras provas.",
      },
      {
        termo: "Requisitos da confissão",
        faz: "Intrínsecos: verossimilhança, clareza e coincidência com as demais provas. Extrínsecos: ser pessoal, expressa, feita perante a autoridade competente, espontânea e com o réu em condições de entender o que faz.",
      },
      {
        termo: "Valor da confissão",
        faz: "Não é a rainha das provas: tem valor relativo e deve ser confrontada com as outras (art. 197). Não existe confissão tácita: a parte do art. 198 que permitia usar o silêncio contra o réu não vale mais, diante do art. 186 e da Constituição. Confissão fora do interrogatório é tomada por termo nos autos (art. 199).",
      },
      {
        termo: "Espécies de confissão",
        faz: "Simples: admite o fato. Qualificada: admite o fato, mas alega a seu favor uma excludente, como legítima defesa. Delatória: admite o fato e aponta outros participantes. Judicial ou extrajudicial (no inquérito, vale só como elemento informativo). Explícita ou implícita, como pagar o prejuízo à vítima, que não tem valor de confissão.",
      },
      {
        termo: "Confissão extrajudicial no STJ",
        faz: "Só entra no processo se feita de modo formal e documentado, dentro de um estabelecimento oficial do Estado. Essas garantias não podem ser renunciadas pelo investigado. Se faltar alguma, a prova é inadmissível, e não pode entrar por outro caminho, como o depoimento do policial que ouviu a confissão. Mesmo válida, serve só para indicar fontes de prova, nunca para sustentar sozinha uma condenação.",
      },
      {
        termo: "Atenuante da confissão",
        faz: "Confessar espontaneamente diminui a pena (CP, art. 65, III, d). Para o STJ, a atenuante vale sempre que o réu confessa perante a autoridade, mesmo que a confissão seja parcial, qualificada ou depois retratada, e mesmo que o juiz não a use para condenar.",
        pista: "A Súmula 545 do STJ já garantia a atenuante quando a confissão era usada na sentença. Exceção da Súmula 630: no tráfico, quem só admite ter a droga para uso próprio não ganha a atenuante.",
      },
      {
        parte: "9. Ofendido",
        termo: "Ofendido",
        faz: "Não presta compromisso, pode ser conduzido se faltar sem motivo e é comunicado da prisão, da soltura, das audiências e da sentença (art. 201).",
        pista: "Sempre que possível, o ofendido é ouvido, mesmo sem pedido das partes, sobre as circunstâncias do crime, o provável autor e as provas que puder indicar. A condução não o obriga a se submeter a exame invasivo.",
      },
      {
        termo: "Ofendido não é testemunha",
        faz: "Não entra no número máximo de testemunhas (arts. 401 e 532). Como não presta compromisso, não comete falso testemunho, mas pode responder por denunciação caluniosa se acusar alguém sabendo que é inocente (CP, art. 339).",
      },
      {
        termo: "Direitos do ofendido",
        faz: "Comunicações no endereço que indicar, ou por meio eletrônico, se preferir (art. 201, § 3º). Espaço separado antes e durante a audiência (§ 4º). Encaminhamento a atendimento psicossocial, jurídico e de saúde, pago pelo ofensor ou pelo Estado (§ 5º). Proteção da intimidade, da vida privada, da honra e da imagem, com segredo de justiça se preciso (§ 6º). Esses direitos valem mesmo que ele não seja assistente de acusação.",
      },
      {
        termo: "Palavra da vítima",
        faz: "Nos crimes cometidos às escondidas, como os sexuais e os de violência doméstica, a palavra da vítima tem valor especial, desde que coerente e apoiada pelas demais provas.",
        pista: "Na audiência, sobretudo nos crimes contra a dignidade sexual, todos devem respeitar a integridade física e psicológica da vítima. É proibido falar de fatos alheios ao processo ou usar linguagem e material que ofendam a dignidade dela ou das testemunhas (arts. 400-A e 474-A, da Lei 14.245/2021).",
      },
      {
        termo: "Criança e adolescente vítima",
        faz: "A Lei 13.431/2017 prevê a escuta especializada (pela rede de proteção) e o depoimento especial (perante a polícia ou o juiz), em ambiente acolhedor e com profissional preparado, para evitar que a criança reviva a violência várias vezes. Para o STJ, nos crimes sexuais contra criança e adolescente, essa oitiva diferenciada é válida.",
      },
      {
        parte: "10. Testemunhas: quem depõe",
        termo: "Testemunhas",
        faz: "Parentes próximos podem recusar-se a depor, salvo se não houver outra prova; nesse caso depõem sem compromisso. Quem guarda segredo profissional é proibido de depor (arts. 206 a 208).",
        pista: "As partes perguntam diretamente; o juiz complementa (art. 212).",
      },
      {
        termo: "Dever de depor",
        faz: "Toda pessoa pode ser testemunha (art. 202) e não pode se recusar a depor (art. 206). Quem presta compromisso promete dizer a verdade sobre o que souber (art. 203). Podem recusar-se: ascendente, descendente, afim em linha reta, cônjuge (mesmo separado), irmão, pai, mãe ou filho adotivo do acusado, salvo quando não houver outra forma de provar o fato.",
      },
      {
        termo: "Proibidos de depor",
        faz: "Quem deve guardar segredo por função, ministério, ofício ou profissão, como médico, padre e psicólogo, não pode depor sobre o que soube assim, salvo se a parte interessada liberar e a pessoa quiser falar (art. 207).",
        pista: "O advogado pode recusar-se a depor sobre fato de cliente, mesmo autorizado por ele (Estatuto da OAB, art. 7º, XIX). Deputados e senadores não são obrigados a depor sobre informações ligadas ao mandato (CF, art. 53, § 6º).",
      },
      {
        termo: "Informantes",
        faz: "Não prestam compromisso: doentes e deficientes mentais, menores de 14 anos e os parentes do art. 206 (art. 208). São ouvidos como informantes, e o juiz dá ao que dizem o valor que achar adequado.",
        pista: "O corréu não pode ser testemunha no processo em que também é acusado do mesmo fato.",
      },
      {
        termo: "Número de testemunhas",
        faz: "Procedimento ordinário: até 8 por parte (art. 401). Sumário: até 5 (art. 532). Júri: até 8 na primeira fase (art. 406) e até 5 no plenário (art. 422). O limite é por fato e por réu.",
        pista: "Não entram na conta as testemunhas que não prestam compromisso, as referidas (art. 401, § 1º) e quem nada sabe de útil para a causa (art. 209, § 2º).",
      },
      {
        termo: "Espécies de testemunha",
        faz: "Numerária: arrolada dentro do limite. Extranumerária: ouvida além do limite, por iniciativa do juiz (art. 209). Referida: citada no depoimento de outra (art. 209, § 1º). Direta: viu o fato. Indireta: ouviu dizer. Própria: fala sobre o fato. Imprópria ou fedatária: confirma a regularidade de um ato, como o auto de prisão. Há ainda a testemunha com identidade protegida (Lei 9.807/1999).",
        pista: "Para o STJ, o testemunho de ouvir dizer, sozinho, não basta para condenar nem para pronunciar.",
      },
      {
        termo: "Policial como testemunha",
        faz: "O depoimento do policial que participou da ocorrência é válido como prova, sobretudo se confirmado em juízo, com contraditório, e coerente com as demais provas.",
      },
      {
        parte: "11. Testemunhas: como depõem",
        termo: "Como é o depoimento",
        faz: "Oral: não pode ser trazido por escrito, mas é permitida breve consulta a anotações (art. 204). Objetivo: a testemunha não dá opinião pessoal, salvo quando inseparável do relato (art. 213). Individual: uma não ouve o depoimento da outra, e há espaços separados (art. 210). Retrospectivo: fala de fatos passados. Judicial: em regra, prova é o que se diz perante o juiz.",
        pista: "Na dúvida sobre a identidade da testemunha, o juiz verifica pelos meios ao seu alcance e pode ouvi-la desde logo (art. 205). O juiz registra o depoimento usando, o quanto possível, as palavras da testemunha (art. 215).",
      },
      {
        termo: "Contradita e arguição de defeito",
        faz: "Antes do depoimento, a parte pode contraditar a testemunha ou apontar fatos que a tornem suspeita de parcialidade ou indigna de fé. O juiz registra a contradita e a resposta, mas só exclui a testemunha ou lhe nega o compromisso nos casos dos arts. 207 e 208 (art. 214). Nos demais casos, a testemunha depõe, e o juiz pesa a suspeita.",
      },
      {
        termo: "Perguntas e ordem",
        faz: "As partes perguntam diretamente à testemunha (cross examination), e o juiz barra as perguntas que induzem a resposta, não têm relação com a causa ou repetem outra; depois, pode complementar (art. 212). Primeiro são ouvidas as testemunhas da acusação, depois as da defesa (art. 400).",
        pista: "Para o STF e o STJ, desrespeitar a ordem do art. 212 ou a ordem de oitiva gera nulidade relativa: depende de alegação a tempo e de prova de prejuízo. A parte pode desistir de testemunha que arrolou, salvo das chamadas pelo juiz (art. 401, § 2º).",
      },
      {
        termo: "Retirada do réu",
        faz: "Se a presença do réu causar humilhação, medo ou sério constrangimento à testemunha ou ao ofendido, a ponto de prejudicar a verdade, o juiz faz a oitiva por videoconferência. Só se isso for impossível, retira o réu da sala, e o defensor permanece. Tudo fica registrado no termo, com os motivos (art. 217).",
      },
      {
        termo: "Testemunha que falta",
        faz: "Intimada e ausente sem justo motivo, pode ser levada pela polícia ou por oficial de justiça, com apoio da força pública (art. 218). Pode ainda pagar multa e as custas da diligência e responder por desobediência (art. 219).",
      },
      {
        termo: "Testemunhas com regra própria",
        faz: "Quem está doente ou é idoso e não pode ir é ouvido onde estiver (art. 220). Presidente e vice, parlamentares, ministros, governadores, prefeitos, magistrados e outras autoridades combinam com o juiz o local, o dia e a hora (art. 221). O presidente e o vice da República e os presidentes do Senado, da Câmara e do STF podem depor por escrito (§ 1º).",
        pista: "Militar: requisitado ao superior (§ 2º). Servidor público: intimado pessoalmente, e o chefe da repartição é avisado do dia e da hora (§ 3º). Preso: intimado pessoalmente, com requisição ao diretor do presídio. Para o STF, a autoridade perde a prerrogativa se, sem justa causa, não marca a data ou não comparece.",
      },
      {
        termo: "Testemunha em outro lugar",
        faz: "Quem mora fora da jurisdição é ouvido por carta precatória, com intimação das partes. A carta não suspende a instrução, e o julgamento pode sair depois do prazo, juntando-se a carta quando voltar. A oitiva pode ser por videoconferência (art. 222). Carta rogatória, para o exterior, só se a parte provar que a testemunha é imprescindível, pagando o envio (art. 222-A).",
        pista: "Súmula 155 do STF: falta de intimação da expedição da precatória gera nulidade relativa. Súmula 273 do STJ: intimada a defesa da expedição, não precisa ser intimada da data da audiência no outro juízo.",
      },
      {
        termo: "Falso testemunho e outras regras",
        faz: "Se o juiz entender que houve falso testemunho, envia cópia do depoimento à polícia para inquérito (art. 211). Quem não fala português depõe com intérprete (art. 223). A testemunha avisa o juiz, por 1 ano, se mudar de endereço (art. 224). Se a testemunha vai viajar ou, por doença ou idade, pode não estar viva na instrução, o juiz a ouve antes (art. 225, depoimento ad perpetuam).",
      },
      {
        parte: "12. Reconhecimento e acareação",
        termo: "Reconhecimento",
        faz: "Descrição prévia, suspeito ao lado de pessoas parecidas e auto com duas testemunhas. Vários reconhecedores, cada um em separado (arts. 226 e 228).",
      },
      {
        termo: "Passo a passo do art. 226",
        faz: "I – quem vai reconhecer descreve antes a pessoa. II – o suspeito fica, se possível, ao lado de outras parecidas com ele. III – se houver medo de intimidação, a autoridade faz com que o suspeito não veja quem reconhece. IV – lavra-se auto detalhado, assinado pela autoridade, por quem reconheceu e por duas testemunhas.",
        pista: "O inciso III não se aplica na instrução em juízo nem no plenário do Júri (parágrafo único). Reconhecimento de coisas segue as mesmas cautelas, no que couber (art. 227).",
      },
      {
        termo: "Rito obrigatório",
        faz: "Desde 2020, o STJ entende que o rito do art. 226 é obrigatório, e não mera recomendação. O reconhecimento feito sem ele é inválido e não pode sustentar condenação, mesmo que repetido em juízo. A condenação só se mantém se apoiada em outras provas independentes. O STF segue a mesma linha.",
      },
      {
        termo: "Por foto e por voz",
        faz: "O reconhecimento por fotografia e o de voz são aceitos, desde que sigam, no que couber, o rito do art. 226. Para o STJ, o fotográfico é só uma etapa inicial e não basta sozinho para condenar. O acusado não é obrigado a fornecer a voz. A perícia de comparação de voz é outra coisa: é prova pericial, não reconhecimento.",
        pista: "Retrato falado é técnica de investigação, não reconhecimento.",
      },
      {
        termo: "Acareação (arts. 229 e 230)",
        faz: "Coloca frente a frente acusados, testemunhas ou ofendidos que divergiram sobre fato relevante, para explicarem a divergência; tudo vai a termo. Testemunha ausente pode ser ouvida por carta precatória.",
        pista: "O delegado também pode fazer acareação no inquérito (CPP, art. 6º, VI).",
      },
      {
        termo: "Detalhes da acareação",
        faz: "Pressupõe declarações anteriores que divergem em ponto relevante. Cabe entre acusados, entre acusado e testemunha, entre testemunhas, entre acusado ou testemunha e ofendido, e entre ofendidos. Se a testemunha divergente estiver em outra comarca, a presente explica os pontos e, persistindo a divergência, expede-se precatória, se isso não atrasar o processo e o juiz achar conveniente (art. 230).",
        pista: "O acusado acareado mantém o direito de ficar calado.",
      },
      {
        parte: "13. Documentos e indícios",
        termo: "Documentos e indícios",
        faz: "Carta obtida por meio criminoso não entra, mas o destinatário pode exibi-la para se defender (art. 233). Indício é fato provado que leva, por indução, a outro (art. 239).",
      },
      {
        termo: "O que é documento",
        faz: "Qualquer escrito, instrumento ou papel, público ou particular (art. 232). Instrumento é o documento feito para servir de prova, como uma escritura; papel é o escrito comum. A foto autenticada de um documento vale como o original (parágrafo único). Documentos particulares podem ser equiparados a públicos para fins penais (CP, art. 297, § 2º).",
      },
      {
        termo: "Quando juntar",
        faz: "As partes podem juntar documentos em qualquer fase do processo, salvo exceção legal (art. 231). Exceção principal: no plenário do Júri, só se lê ou exibe o que foi juntado com pelo menos 3 dias úteis de antecedência e comunicado à outra parte (art. 479). O juiz que souber de documento relevante pode mandar juntá-lo mesmo sem pedido (art. 234).",
      },
      {
        termo: "Autenticidade e tradução",
        faz: "Contestada a letra ou a assinatura de documento particular, faz-se perícia (art. 235). Documento em língua estrangeira é traduzido, se necessário, por tradutor público ou pessoa idônea, sem atrasar a juntada (art. 236). Cópia (pública-forma) só vale se conferida com o original perante a autoridade (art. 237).",
      },
      {
        termo: "Defeitos do documento",
        faz: "Vício extrínseco atinge a forma, e vício intrínseco, o conteúdo. Na falsidade material, o próprio documento é forjado ou alterado; na ideológica, o documento é verdadeiro na forma, mas traz informação falsa. Para haver crime, é preciso dolo.",
      },
      {
        termo: "Devolução de documentos",
        faz: "Terminado o processo, os originais podem ser devolvidos a quem os juntou, a pedido e ouvido o MP, se não houver motivo para mantê-los; fica uma cópia nos autos (art. 238).",
      },
      {
        termo: "Indício",
        faz: "Circunstância conhecida e provada que, por ter relação com o fato, permite concluir por indução que outra existiu (art. 239). Indício positivo aponta para a culpa; contraindício aponta em sentido contrário. Presunção é diferente: é conclusão que a lei ou a experiência tiram sem um fato provado no processo.",
        pista: "A palavra indício também aparece no sentido de prova mais fraca, como no indício suficiente de autoria para a prisão preventiva (art. 312). Vários indícios fortes e coerentes podem sustentar condenação, tema discutido.",
      },
      {
        parte: "14. Busca domiciliar",
        termo: "Busca",
        faz: "Pessoal sem mandado se houver fundada suspeita ou prisão (art. 244). Domiciliar de dia, com mandado, salvo flagrante, desastre ou socorro (CF, art. 5º, XI).",
        pista: "Busca em mulher por outra mulher, se isso não atrasar nem prejudicar a diligência (art. 249).",
      },
      {
        termo: "Busca e apreensão",
        faz: "Busca é procurar; apreensão é tomar e guardar o que se achou. Uma pode ocorrer sem a outra. São meios de obtenção de prova e têm também caráter cautelar. Podem ocorrer antes do inquérito, durante ele ou no processo, a pedido do MP ou da defesa ou por representação do delegado (art. 242).",
      },
      {
        termo: "Para que serve a domiciliar",
        faz: "Com fundadas razões, para: prender criminosos; apreender coisas achadas ou obtidas por crime; apreender instrumentos e objetos falsificados; apreender armas, munições e instrumentos do crime; achar objetos necessários à prova ou à defesa; apreender cartas, abertas ou não, destinadas ao acusado ou em poder dele, se úteis; apreender vítimas; colher qualquer elemento de convicção (art. 240, § 1º, a a h).",
        pista: "Para a maioria, a lista é taxativa. O mandado genérico, sem endereço certo, é inválido.",
      },
      {
        termo: "Mandado de busca",
        faz: "Só o juiz pode autorizar a entrada em casa (CF, art. 5º, XI). O mandado indica o local o mais precisamente possível e o nome do morador (ou, na busca pessoal, a pessoa ou seus sinais), o motivo e os fins, e é assinado (art. 243). Se houver ordem de prisão, ela vai no próprio mandado. Pelo texto do CPP, se a própria autoridade judiciária fizer a busca, não precisa de mandado (art. 241).",
        pista: "Não se apreende documento em poder do defensor do acusado, salvo se for parte do corpo de delito (art. 243, § 2º). Para o STJ, o mandado não precisa detalhar o tipo de documento sigiloso a apreender.",
      },
      {
        termo: "O que é casa",
        faz: "Qualquer compartimento habitado, aposento ocupado de habitação coletiva, como quarto de hotel ocupado, e lugar não aberto ao público onde alguém trabalha, como escritório e consultório (art. 246; CP, art. 150, § 4º).",
        pista: "Não são casa: veículo, salvo se usado como moradia, como trailer ou motorhome; cabine de caminhão (STJ); galpão comercial (STF); imóvel abandonado, sem sinal de moradia (STJ).",
      },
      {
        termo: "Dia e noite",
        faz: "Com mandado, a busca é feita de dia, salvo se o morador permitir à noite (art. 245). O CPP não define dia. Há quatro critérios: do nascer ao pôr do sol; das 6h às 18h; das 6h às 20h, por analogia ao CPC; e das 5h às 21h, extraído da Lei de Abuso de Autoridade, que pune quem cumpre mandado de busca domiciliar depois das 21h ou antes das 5h (Lei 13.869/2019, art. 22, § 1º, III).",
        pista: "Em 2023, o STJ disse que, mesmo entre 5h e 21h, a busca feita já de noite era nula. Em dezembro de 2025, a 3ª Seção do STJ adotou o período das 5h às 21h (RHC 196.481), em decisão por maioria. O tema não está pacificado, e o STF ainda pode decidir.",
      },
      {
        termo: "Como se cumpre",
        faz: "Os executores mostram e leem o mandado ao morador e pedem que abra a porta. Se a própria autoridade faz a busca, diz quem é e o objetivo. Se o morador resistir, a porta é arrombada e se pode usar força contra coisas dentro da casa. Ausente o morador, chama-se um vizinho para assistir. Achado o que se procura, é apreendido. No fim, lavra-se auto assinado por duas testemunhas (art. 245).",
        pista: "Em casa habitada, a busca não deve incomodar os moradores mais do que o indispensável (art. 248). Se nada for achado, os motivos são comunicados a quem sofreu a busca, se pedir (art. 247). A diligência fica nos limites da sua finalidade: busca exploratória (fishing expedition) é proibida.",
      },
      {
        termo: "Escritório de advocacia",
        faz: "É inviolável. Só com indícios de crime cometido pelo próprio advogado, o juiz pode, em decisão motivada, expedir mandado específico e detalhado, cumprido na presença de representante da OAB. Não se usam documentos e objetos de clientes, salvo de cliente investigado como coautor ou partícipe (Estatuto da OAB, art. 7º, II, §§ 6º e 7º).",
      },
      {
        termo: "Entrada sem mandado",
        faz: "A Constituição permite entrar em casa, a qualquer hora e sem mandado, em flagrante delito, desastre ou para prestar socorro. Para o STF, a entrada forçada só é lícita com fundadas razões, justificadas depois, de que há flagrante dentro da casa; sem isso, os atos são nulos e o agente responde (Tema 280). Nos crimes permanentes, como ter droga em depósito, o flagrante dura enquanto dura o crime.",
        pista: "STJ: denúncia anônima sozinha, ou só o sinal do cão farejador, não autoriza entrar sem mandado. Correr para dentro de casa ao ver a viatura: o STF já aceitou como fundada razão no tráfico, mas o tema é polêmico. Sem flagrante, só com consentimento livre do morador, que o Estado deve provar; o STJ já pediu registro em vídeo e áudio e, se possível, por escrito.",
      },
      {
        termo: "Outros julgados da busca",
        faz: "Na empresa investigada, vale a autorização de quem age como sócio ou responsável, mesmo sem o ser formalmente (teoria da aparência, STJ). A defesa tem direito de acesso à íntegra dos dados obtidos na busca (STJ).",
      },
      {
        parte: "15. Busca pessoal",
        termo: "Busca pessoal sem mandado",
        faz: "Cabe quando há fundada suspeita de que a pessoa esconde arma proibida ou objetos ligados ao crime (art. 240, § 2º). Dispensa mandado em três casos: prisão; fundada suspeita de posse de arma proibida ou de objetos que sejam corpo de delito; e durante busca domiciliar (art. 244). Inclui roupas, bolsas, mochilas e o que a pessoa carrega.",
      },
      {
        termo: "Fundada suspeita",
        faz: "Para o STJ, exige elementos objetivos, descritos e justificados, de que a pessoa leva arma ou objeto do crime. Não basta intuição, impressão subjetiva, local conhecido pelo tráfico ou atitude suspeita sem explicação. A busca deve buscar arma ou objeto ligado a crime, não servir de abordagem genérica.",
        pista: "STF: a busca não pode se basear em raça, sexo, orientação sexual, cor da pele ou aparência física (HC 208.240, filtragem racial).",
      },
      {
        termo: "Nervosismo",
        faz: "Para o STJ, nervosismo ao ver a polícia é subjetivo demais e não basta para a busca. O STF, porém, já considerou legítima a atuação de policiais rodoviários federais que abordaram alguém com nervosismo incomum em fiscalização de rotina. O tema não é pacífico.",
      },
      {
        termo: "Busca veicular",
        faz: "Para o STJ, a busca em veículo equivale à busca pessoal: não precisa de mandado, basta fundada suspeita. Exceção: veículo usado como moradia, como trailer ou motorhome, que é tratado como casa.",
      },
      {
        termo: "Outros julgados da busca pessoal",
        faz: "É válida a busca pessoal em quem é preso em flagrante logo após perseguição policial (STJ). Pegar e acessar o chip de celular que o suspeito jogou na rua não é quebra de sigilo telefônico (STJ).",
      },
      {
        termo: "Busca em outro território",
        faz: "A autoridade ou seus agentes podem entrar em área de outra jurisdição, até de outro Estado, quando seguem pessoa ou coisa para apreendê-la. Devem se apresentar à autoridade local antes ou depois da diligência, conforme a urgência (art. 250).",
        pista: "Há seguimento quando acompanham sem interrupção, mesmo que percam de vista, ou quando, sem ter visto, sabem por informação confiável que a pessoa ou coisa vai em certa direção (art. 250, § 1º).",
      },
    ],
    cuidado:
      "A testemunha parente só é obrigada a depor quando não há outro modo de provar o fato, e mesmo assim não presta compromisso. O reconhecimento que não segue o art. 226 não serve para condenar (STJ). Busca pessoal exige fundada suspeita objetiva, nunca cor, aparência ou só nervosismo. O juiz pode recusar o laudo, mas precisa justificar.",
  },
  questoes: [
    {
      topico: "Exame de corpo de delito",
      subassunto: "Confissão não supre o exame",
      dificuldade: 4,
      raciocinio: "Veja se os vestígios ainda existiam quando o exame deveria ser feito.",
      enunciado:
        "Em crime que deixou vestígios, que continuavam visíveis durante toda a investigação, a autoridade não requisitou o exame de corpo de delito. O réu confessou em juízo, na presença do defensor. Sobre a prova da materialidade, é correto afirmar que",
      alternativas: [
        "a confissão judicial supre o exame, pois foi feita com o defensor presente",
        "a falta do exame é mera irregularidade, sem reflexo na validade do processo",
        "a confissão vale como exame indireto, já que descreve os vestígios deixados",
        "o exame era indispensável, e a confissão do réu não supre a falta dele",
        "a falta do exame só pode ser alegada pela defesa antes da instrução",
      ],
      correta: 3,
      explicacao:
        "O art. 158 do CPP torna indispensável o exame de corpo de delito, direto ou indireto, quando a infração deixa vestígios, e proíbe que a confissão o supra. Só quando os vestígios desaparecem a prova testemunhal pode suprir a falta (art. 167). A ausência do exame é causa de nulidade (art. 564, III, b).",
      explicacaoErradas:
        "“Supre o exame” contraria o texto expresso do art. 158. “Mera irregularidade” ignora a nulidade do art. 564. “Exame indireto” não se faz pela confissão: depende de outros dados examinados por peritos ou de testemunhas, quando os vestígios somem. “Antes da instrução” cria prazo que a lei não prevê.",
      pegadinha: "Confissão, por mais completa que seja, não substitui perícia em crime com vestígio.",
      conhecimento:
        "O CPP dá prioridade ao exame em crimes de violência doméstica contra a mulher e de violência contra criança, adolescente, idoso ou pessoa com deficiência.",
    },
    {
      topico: "Cadeia de custódia",
      subassunto: "Responsável pela preservação",
      dificuldade: 4,
      raciocinio: "A lei liga a responsabilidade a quem reconhece o vestígio.",
      enunciado:
        "Ao atender uma ocorrência de disparo de arma de fogo na rodovia, um policial rodoviário federal encontra um estojo de munição no acostamento e percebe que ele pode interessar à perícia. Pelo CPP, quanto à preservação desse vestígio,",
      alternativas: [
        "o policial que o reconheceu fica responsável por preservá-lo",
        "a responsabilidade só nasce com a chegada do perito oficial ao local",
        "o vestígio só entra na cadeia de custódia quando o delegado o requisitar",
        "o policial deve recolher e guardar o estojo consigo até o fim do inquérito",
        "a preservação cabe à central de custódia, desde o momento do disparo",
      ],
      correta: 0,
      explicacao:
        "O art. 158-A, § 2º, diz que o agente público que reconhecer um elemento como de potencial interesse para a prova pericial fica responsável por sua preservação. A cadeia de custódia começa com a preservação do local ou com o procedimento policial em que o vestígio é detectado (§ 1º).",
      explicacaoErradas:
        "“Com a chegada do perito” atrasa um dever que já é do policial. “Quando o delegado o requisitar” erra o início da cadeia. “Recolher e guardar consigo” contraria a regra de que a coleta é feita preferencialmente por perito oficial. “Central de custódia” recebe o vestígio depois, não o preserva no local.",
      pegadinha: "Preservar não é coletar: o policial protege, e o perito, de preferência, coleta.",
      conhecimento:
        "Vestígio é todo objeto ou material bruto, visível ou latente, constatado ou recolhido, que se relaciona à infração penal (art. 158-A, § 3º).",
    },
    {
      topico: "Cadeia de custódia",
      subassunto: "Entrada em local isolado",
      dificuldade: 5,
      raciocinio: "O próprio CPP diz como a conduta é tipificada.",
      enunciado:
        "Isolado o local de um homicídio às margens de uma rodovia federal, um parente do suspeito ultrapassa a faixa de isolamento e retira um objeto do chão antes que o perito libere a área. Segundo o CPP, essa conduta",
      alternativas: [
        "é só infração administrativa, pois o CPP não prevê crime para o caso",
        "configura desobediência, mas apenas se houver ordem verbal anterior",
        "não tem relevância penal, pois a área isolada não é domicílio",
        "só é crime se o objeto retirado for a arma usada no homicídio",
        "é proibida e tipificada como fraude processual pelo próprio CPP",
      ],
      correta: 4,
      explicacao:
        "O art. 158-C, § 2º, proíbe a entrada em locais isolados e a remoção de quaisquer vestígios antes da liberação pelo perito responsável, “sendo tipificada como fraude processual a sua realização”. A fraude processual está no art. 347 do CP.",
      explicacaoErradas:
        "“Infração administrativa” ignora a remissão expressa à fraude processual. “Ordem verbal anterior” cria um requisito que a regra não tem. “Não é domicílio” mistura o tema com a inviolabilidade da casa. “Só se for a arma” restringe o que a lei estende a quaisquer vestígios.",
      pegadinha: "A proibição vale para quaisquer vestígios, não só para a arma do crime.",
      conhecimento:
        "Isolamento é a etapa que evita a alteração do estado das coisas no ambiente imediato, mediato e relacionado aos vestígios (art. 158-B, II).",
    },
    {
      topico: "Local do crime",
      subassunto: "Acidente de trânsito e remoção",
      dificuldade: 5,
      raciocinio: "Há lei própria para acidente que bloqueia a via.",
      enunciado:
        "Um policial rodoviário federal é o primeiro a chegar a um acidente com feridos. Os veículos estão no leito da rodovia e bloqueiam o tráfego, e a perícia ainda não chegou. Segundo a Lei 5.970/1973, o policial",
      alternativas: [
        "deve esperar o perito, pois qualquer remoção é fraude processual",
        "pode autorizar a remoção, lavrando boletim com fatos e testemunhas",
        "só pode remover os feridos, e os veículos aguardam o exame do local",
        "só pode autorizar a remoção com ordem do delegado de polícia",
        "pode autorizar a remoção sem registro algum, se o tráfego exigir",
      ],
      correta: 1,
      explicacao:
        "A Lei 5.970/1973 permite que a autoridade ou o agente policial que primeiro tomar conhecimento do acidente autorize, independentemente de exame do local, a remoção imediata dos feridos e dos veículos que estejam no leito da via e prejudiquem o tráfego. Para isso, deve lavrar boletim com o fato, as testemunhas e as demais circunstâncias.",
      explicacaoErradas:
        "“Qualquer remoção é fraude processual” ignora a lei especial do acidente de trânsito. “Só os feridos” esquece os veículos, também previstos. “Ordem do delegado” cria exigência: o próprio agente pode autorizar. “Sem registro algum” contraria o dever de lavrar o boletim.",
      pegadinha: "A regra do local isolado cede, no trânsito, à lei especial de 1973.",
      conhecimento:
        "No CPP, a autoridade deve providenciar que não se altere o estado das coisas até a chegada dos peritos (arts. 6º, I, e 169).",
    },
    {
      topico: "Perícias",
      subassunto: "Peritos não oficiais",
      dificuldade: 4,
      raciocinio: "A falta do perito oficial muda o número de peritos.",
      enunciado:
        "Numa cidade sem perito oficial, o delegado nomeia um único engenheiro, pessoa idônea, para fazer a perícia em um veículo usado em um crime. Sobre essa nomeação, à luz do art. 159 do CPP, é correto afirmar que",
      alternativas: [
        "basta uma pessoa idônea, desde que ela tenha curso superior completo",
        "o exame deve aguardar o perito oficial, sem possibilidade de substituto",
        "qualquer policial pode fazer o exame, por ser agente público",
        "a lei exige duas pessoas idôneas com curso superior, com compromisso",
        "dois peritos não oficiais bastam, mesmo sem curso superior",
      ],
      correta: 3,
      explicacao:
        "O exame é feito por perito oficial com curso superior. Na falta dele, o art. 159, § 1º, exige duas pessoas idôneas, com diploma de curso superior, de preferência na área do exame. Os peritos não oficiais prestam compromisso de bem e fielmente desempenhar o encargo (§ 2º).",
      explicacaoErradas:
        "“Basta uma pessoa idônea” esquece que, sem perito oficial, são duas. “Sem possibilidade de substituto” ignora o § 1º. “Qualquer policial” troca a habilitação técnica pela condição de agente público. “Mesmo sem curso superior” contraria a exigência do diploma.",
      pegadinha: "Um perito só basta quando ele é oficial.",
      conhecimento:
        "Em perícia complexa, que abranja mais de uma área de conhecimento, pode haver mais de um perito oficial (art. 159, § 7º).",
    },
    {
      topico: "Perícias",
      subassunto: "Assistente técnico",
      dificuldade: 5,
      raciocinio: "O assistente técnico entra em um momento certo.",
      enunciado:
        "Ainda no inquérito, a defesa indica um assistente técnico e pede que ele acompanhe o exame pericial do veículo apreendido desde o início. Conforme o CPP, o pedido",
      alternativas: [
        "deve ser atendido, pois o contraditório exige presença desde o início",
        "não procede: só o MP pode indicar assistente técnico no processo penal",
        "não procede: ele atua depois de admitido pelo juiz e de pronto o laudo",
        "deve ser atendido, pois o assistente substitui o perito oficial ausente",
        "não procede, pois a lei proíbe assistente técnico no processo penal",
      ],
      correta: 2,
      explicacao:
        "O art. 159, § 3º, permite ao MP, ao assistente de acusação, ao ofendido, ao querelante e ao acusado formular quesitos e indicar assistente técnico. Pelo § 4º, o assistente atua a partir de sua admissão pelo juiz e após a conclusão dos exames e a elaboração do laudo pelos peritos oficiais.",
      explicacaoErradas:
        "“Presença desde o início” contraria o momento fixado no § 4º. “Só o MP” ignora que o acusado também pode indicar. “Substitui o perito oficial” confunde com os peritos não oficiais do § 1º. “Proíbe assistente técnico” é desmentido pelo § 3º.",
      pegadinha: "O assistente técnico analisa o laudo pronto; não participa do exame oficial.",
      conhecimento:
        "No processo, as partes podem pedir a oitiva dos peritos para esclarecer a prova, com antecedência mínima de 10 dias (art. 159, § 5º, I).",
    },
    {
      topico: "Perícias",
      subassunto: "Exame complementar",
      dificuldade: 5,
      raciocinio: "Conte o prazo a partir do crime, não do primeiro exame.",
      enunciado:
        "Numa briga em um posto às margens da rodovia, a vítima sofre lesões que, segundo o primeiro exame, podem afastá-la das ocupações habituais por mais de 30 dias. Para classificar a lesão como grave por esse motivo, o CPP prevê",
      alternativas: [
        "exame complementar após 30 dias do crime, suprível por testemunha",
        "novo exame apenas se o juiz o determinar, vedado à autoridade policial",
        "exame complementar no 30º dia, contado da data do primeiro exame",
        "classificação feita só pelo laudo inicial, que projeta o afastamento",
        "exame complementar indispensável, que nenhuma outra prova pode suprir",
      ],
      correta: 0,
      explicacao:
        "O art. 168, § 2º, manda fazer o exame complementar logo que decorra o prazo de 30 dias, contado da data do crime, quando o objetivo é classificar a lesão no art. 129, § 1º, I, do CP. O § 3º permite que a prova testemunhal supra a falta desse exame.",
      explicacaoErradas:
        "“Vedado à autoridade policial” contraria o caput, que permite à autoridade policial ou judiciária determinar o exame de ofício. “Contado do primeiro exame” erra o termo inicial. “Só pelo laudo inicial” ignora que o afastamento precisa ser verificado depois. “Nenhuma outra prova” contraria o § 3º.",
      pegadinha: "O prazo é contado da data do crime.",
      conhecimento:
        "Lesão grave por incapacidade para as ocupações habituais por mais de 30 dias está no art. 129, § 1º, I, do CP.",
    },
    {
      topico: "Interrogatório",
      subassunto: "Videoconferência",
      dificuldade: 4,
      raciocinio: "Videoconferência do réu preso é exceção, com finalidade prevista em lei.",
      enunciado:
        "Para economizar com escolta, um juiz passa a fazer todos os interrogatórios de réus presos por videoconferência, sem examinar o caso de cada um. Segundo o CPP, o interrogatório do réu preso por videoconferência",
      alternativas: [
        "é a regra, por economia e pela segurança no transporte de presos",
        "depende de pedido do MP, vedado ao juiz determiná-lo de ofício",
        "só é cabível com a concordância expressa do réu e do defensor",
        "dispensa a presença de defensor, que pode atuar por telefone",
        "é exceção e exige decisão fundamentada em uma finalidade legal",
      ],
      correta: 4,
      explicacao:
        "O art. 185, § 2º, permite a videoconferência excepcionalmente, por decisão fundamentada, de ofício ou a pedido das partes, quando necessária para uma das finalidades legais: risco à segurança pública, dificuldade de comparecimento, influência sobre testemunha ou vítima, ou gravíssima questão de ordem pública. Economia de escolta, sozinha, não está na lista.",
      explicacaoErradas:
        "“É a regra” inverte a lei, que fala em “excepcionalmente”. “Vedado ao juiz de ofício” contraria o texto, que admite a decisão de ofício. “Concordância do réu” não é requisito. “Dispensa a presença de defensor” erra: o réu tem direito a defensor e a canal reservado com ele.",
      pegadinha: "A decisão de ofício é permitida; o que falta aqui é a finalidade legal.",
      conhecimento:
        "Antes do interrogatório, o juiz informa o réu do direito de permanecer calado; o silêncio não importa confissão nem pode prejudicar a defesa (art. 186).",
    },
    {
      topico: "Confissão",
      subassunto: "Retratação",
      dificuldade: 4,
      raciocinio: "Confissão não tem valor fixo e pode ser desfeita.",
      enunciado:
        "No inquérito, o investigado confessa um furto de carga. Em juízo, retrata-se e diz que confessou por medo. As provas produzidas na instrução confirmam parte da primeira versão. Sobre a confissão, é correto afirmar que",
      alternativas: [
        "a retratação apaga a confissão, que não pode mais ser considerada",
        "é retratável e divisível, e o juiz a compara com as demais provas",
        "é indivisível, e o juiz precisa aceitá-la ou rejeitá-la por inteiro",
        "prevalece sobre a retratação, por ser a prova de maior valor",
        "a retratação só vale se feita perante a mesma autoridade policial",
      ],
      correta: 1,
      explicacao:
        "Pelo art. 200 do CPP, a confissão é divisível e retratável, sem prejuízo do livre convencimento do juiz, fundado nas provas em conjunto. O art. 197 manda confrontá-la com as demais provas. A parte confirmada em juízo pode ser considerada junto com essas provas.",
      explicacaoErradas:
        "“Apaga a confissão” ignora que o juiz avalia o conjunto. “Indivisível” contraria o art. 200. “Prova de maior valor” contraria o art. 197: o valor segue os critérios das demais provas. “Mesma autoridade policial” não é requisito da retratação.",
      pegadinha: "Retratar não anula: o juiz pesa as duas versões com o resto da prova.",
      conhecimento:
        "A confissão feita fora do interrogatório é tomada por termo nos autos (art. 199).",
    },
    {
      topico: "Testemunhas",
      subassunto: "Parente do acusado",
      dificuldade: 5,
      raciocinio: "A recusa do parente tem exceção, e o compromisso segue outra regra.",
      enunciado:
        "O irmão do réu é a única pessoa que viu o crime, e não há outro modo de provar o fato. Chamado a depor, ele diz que quer se recusar. Segundo o CPP, o irmão",
      alternativas: [
        "pode se recusar em qualquer caso, por ser parente próximo do réu",
        "deve depor sob compromisso, sob pena de responder por falso testemunho",
        "é proibido de depor, pois guarda segredo da família por dever legal",
        "deve depor, mas não presta o compromisso de dizer a verdade",
        "só depõe se o próprio réu autorizar o depoimento por escrito",
      ],
      correta: 3,
      explicacao:
        "O art. 206 permite ao irmão recusar-se a depor, salvo quando não for possível, por outro modo, obter a prova do fato. Nesse caso ele depõe, mas o art. 208 não defere o compromisso às pessoas do art. 206.",
      explicacaoErradas:
        "“Em qualquer caso” esquece a exceção do art. 206. “Sob compromisso” contraria o art. 208. “Proibido de depor” confunde com o art. 207, que trata de segredo por função, ministério, ofício ou profissão. “Se o réu autorizar” cria condição que não existe.",
      pegadinha: "Obrigado a depor não quer dizer compromissado.",
      conhecimento:
        "Também não prestam compromisso os doentes e deficientes mentais e os menores de 14 anos (art. 208).",
    },
    {
      topico: "Reconhecimento",
      subassunto: "Vários reconhecedores",
      dificuldade: 4,
      raciocinio: "Cada pessoa precisa reconhecer sem influência das outras.",
      enunciado:
        "Três passageiros de um ônibus assaltado na rodovia vão reconhecer o suspeito. Para ganhar tempo, a autoridade reúne os três na mesma sala, e o suspeito é exibido sozinho. Pelos arts. 226 e 228 do CPP, o procedimento correto seria",
      alternativas: [
        "reunir os três, desde que assinem um único auto ao final",
        "ouvir só um deles, dispensando o reconhecimento pelos outros",
        "cada um reconhecer em separado, depois de descrever o suspeito",
        "exibir o suspeito sozinho, para não confundir os passageiros",
        "fazer a descrição prévia só quando o reconhecedor for criança",
      ],
      correta: 2,
      explicacao:
        "O art. 226 manda que quem reconhece descreva antes a pessoa e que o suspeito seja colocado, se possível, ao lado de outras parecidas, com auto assinado por duas testemunhas. O art. 228 exige que, havendo várias pessoas, cada uma faça o reconhecimento em separado, sem comunicação entre elas.",
      explicacaoErradas:
        "“Reunir os três” contraria o art. 228. “Só um deles” não é o que a lei prevê para quem vai reconhecer. “Sozinho” contraria o inciso II do art. 226. “Só quando for criança” inventa limite para a descrição prévia, que vale sempre.",
      pegadinha: "Exibir o suspeito sozinho induz o reconhecimento.",
      conhecimento:
        "A regra que impede o suspeito de ver quem o reconhece, por medo de intimidação, não se aplica na instrução criminal nem no plenário (art. 226, parágrafo único).",
    },
    {
      topico: "Prova documental",
      subassunto: "Carta particular",
      dificuldade: 5,
      raciocinio: "A carta é do destinatário, e ele a usa para se defender.",
      enunciado:
        "O réu recebeu do corréu uma carta em que este assume sozinho a autoria do crime. Para se defender, o réu quer juntá-la aos autos, mas o corréu não autoriza. Pelo CPP, o réu",
      alternativas: [
        "não pode juntá-la, pois falta o consentimento de quem a escreveu",
        "só pode juntá-la com ordem prévia de quebra do sigilo da carta",
        "não pode juntá-la, pois carta particular nunca é admitida em juízo",
        "pode juntá-la, desde que a assinatura tenha firma reconhecida",
        "pode exibi-la, pois é o destinatário e a usa em sua defesa",
      ],
      correta: 4,
      explicacao:
        "O art. 233 não admite cartas particulares interceptadas ou obtidas por meios criminosos. O parágrafo único permite que o destinatário as exiba em juízo, para a defesa de seu direito, ainda que não haja consentimento do signatário.",
      explicacaoErradas:
        "“Falta o consentimento” é exatamente o que o parágrafo único dispensa. “Quebra do sigilo” não é exigida do destinatário. “Nunca é admitida” erra: a vedação é para carta interceptada ou obtida por crime. “Firma reconhecida” é requisito inventado.",
      pegadinha: "O que é proibido é a carta obtida por crime, não a recebida pelo destinatário.",
      conhecimento:
        "Os documentos podem ser apresentados em qualquer fase do processo, salvo nos casos expressos em lei (art. 231).",
    },
    {
      topico: "Busca e apreensão",
      subassunto: "Busca pessoal em mulher",
      dificuldade: 4,
      raciocinio: "A regra tem uma exceção ligada ao andamento da diligência.",
      enunciado:
        "Numa abordagem na rodovia, há fundada suspeita de que uma passageira leva droga presa ao corpo. Não há policial mulher na equipe, e a mais próxima está a duas horas do local. Sobre a busca pessoal, pelo CPP,",
      alternativas: [
        "deve-se esperar a policial mulher, pois essa regra não tem exceção",
        "pode ser feita por policial homem, se esperar atrasar a busca",
        "exige mandado judicial, por se tratar de revista feita no corpo",
        "só pode ser feita se a passageira concordar por escrito",
        "deve ser feita na delegacia, onde a lei a proíbe a homens",
      ],
      correta: 1,
      explicacao:
        "O art. 249 manda que a busca em mulher seja feita por outra mulher, se isso não importar retardamento ou prejuízo da diligência. Esperar duas horas atrasaria a busca e poderia prejudicá-la. A busca pessoal dispensa mandado quando há fundada suspeita de posse de objetos que constituam corpo de delito (art. 244).",
      explicacaoErradas:
        "“Não tem exceção” ignora a ressalva do art. 249. “Exige mandado” contraria o art. 244. “Concordar por escrito” não é requisito da busca pessoal. “Na delegacia” cria regra que não existe.",
      pegadinha: "A preferência por uma mulher cede quando a espera prejudica a diligência.",
      conhecimento:
        "A busca domiciliar é feita de dia, salvo consentimento do morador, e, antes de entrar, os executores mostram e leem o mandado (art. 245).",
    },
  ],
};
