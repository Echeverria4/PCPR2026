import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "proc-03",
  resumo: {
    ideia:
      "Crime que deixa vestígio pede perícia, e o vestígio tem que ser guardado com registro de cada passo. Depois vêm os meios de prova: interrogatório, confissão, ofendido, testemunhas, reconhecimento, documentos e busca.",
    itens: [
      {
        termo: "Corpo de delito",
        faz: "Se a infração deixa vestígios, o exame é indispensável, e a confissão não o supre (art. 158).",
        pista: "Desaparecidos os vestígios, a prova testemunhal supre a falta (art. 167).",
      },
      {
        termo: "Perito",
        faz: "Um perito oficial com curso superior. Sem ele, duas pessoas idôneas com curso superior, que prestam compromisso (art. 159).",
      },
      {
        termo: "Assistente técnico",
        faz: "Indicado pelas partes, atua depois de admitido pelo juiz e de pronto o laudo oficial.",
      },
      {
        termo: "Laudo",
        faz: "Prazo de 10 dias, prorrogável (art. 160). O juiz pode aceitá-lo ou rejeitá-lo, no todo ou em parte (art. 182).",
      },
      {
        termo: "Exame complementar",
        faz: "Para lesão grave por mais de 30 dias de afastamento, é feito logo após 30 dias do crime; testemunhas podem suprir a falta (art. 168).",
      },
      {
        termo: "Cadeia de custódia",
        faz: "Registro da história do vestígio, do reconhecimento ao descarte (art. 158-A). Quem reconhece o vestígio responde pela preservação.",
        pista: "Etapas: reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte.",
      },
      {
        termo: "Local isolado",
        faz: "Entrar ou remover vestígio antes da liberação do perito é tipificado como fraude processual (art. 158-C, § 2º).",
      },
      {
        termo: "Acidente na rodovia",
        faz: "A Lei 5.970/1973 permite remover feridos e veículos do leito da via antes da perícia, se prejudicam o tráfego, com boletim da ocorrência.",
      },
      {
        termo: "Interrogatório",
        faz: "Sempre com defensor. O silêncio não é confissão nem prejudica a defesa (art. 186). Videoconferência do réu preso só em caso excepcional e fundamentado.",
      },
      {
        termo: "Confissão",
        faz: "Divisível e retratável, avaliada junto com as demais provas (arts. 197 e 200).",
      },
      {
        termo: "Ofendido",
        faz: "Não presta compromisso, pode ser conduzido se faltar sem motivo e é comunicado da prisão, da soltura, das audiências e da sentença (art. 201).",
      },
      {
        termo: "Testemunhas",
        faz: "Parentes próximos podem recusar-se a depor, salvo se não houver outra prova; nesse caso depõem sem compromisso. Quem guarda segredo profissional é proibido de depor (arts. 206 a 208).",
        pista: "As partes perguntam diretamente; o juiz complementa (art. 212).",
      },
      {
        termo: "Reconhecimento",
        faz: "Descrição prévia, suspeito ao lado de pessoas parecidas e auto com duas testemunhas. Vários reconhecedores, cada um em separado (arts. 226 e 228).",
      },
      {
        termo: "Documentos e indícios",
        faz: "Carta obtida por meio criminoso não entra, mas o destinatário pode exibi-la para se defender (art. 233). Indício é fato provado que leva, por indução, a outro (art. 239).",
      },
      {
        termo: "Busca",
        faz: "Pessoal sem mandado se houver fundada suspeita ou prisão (art. 244). Domiciliar de dia, com mandado, salvo flagrante, desastre ou socorro (CF, art. 5º, XI).",
        pista: "Busca em mulher por outra mulher, se isso não atrasar nem prejudicar a diligência (art. 249).",
      },
    ],
    cuidado:
      "A testemunha parente só é obrigada a depor quando não há outro modo de provar o fato, e mesmo assim não presta compromisso.",
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
