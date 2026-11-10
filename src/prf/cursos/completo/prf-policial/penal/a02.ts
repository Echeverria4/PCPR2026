import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-02",
  resumo: {
    ideia:
      "A lei penal rege os fatos praticados durante sua vigência e só retroage para beneficiar. Para saber qual lei vale, fixe quando o crime foi praticado (atividade) e onde (ubiquidade).",
    itens: [
      {
        termo: "Norma penal em branco",
        faz: "Precisa de complemento. Homogênea: o complemento vem de lei. Heterogênea: vem de ato de outra instância, como a portaria da Anvisa na Lei de Drogas.",
      },
      {
        termo: "Abolitio criminis",
        faz: "Lei nova deixa de considerar o fato crime: cessam a execução e os efeitos penais da sentença, mas os efeitos civis ficam (art. 2º).",
      },
      {
        termo: "Lei mais benéfica",
        faz: "Retroage mesmo depois do trânsito em julgado. Nesse caso, quem aplica é o juízo da execução (Súmula 611 do STF).",
        pista: "Não se combinam partes de duas leis (Súmula 501 do STJ).",
      },
      {
        termo: "Leis excepcional e temporária",
        faz: "Continuam valendo para os fatos praticados na sua vigência, mesmo depois de terminado o período (art. 3º).",
      },
      {
        termo: "Tempo do crime",
        faz: "Momento da ação ou omissão, ainda que outro seja o do resultado (art. 4º).",
      },
      {
        termo: "Continuado e permanente",
        faz: "Aplica-se a lei mais grave se ela entrou em vigor antes de cessar a continuidade ou a permanência (Súmula 711 do STF).",
      },
      {
        termo: "Lugar do crime",
        faz: "Tanto onde ocorreu a ação ou omissão quanto onde se produziu ou deveria produzir-se o resultado (art. 6º).",
        pista: "Lugar: ubiquidade. Tempo: atividade.",
      },
      {
        termo: "Território por extensão",
        faz: "Embarcações e aeronaves brasileiras públicas ou a serviço do governo, onde estiverem. As privadas, em alto-mar ou no espaço aéreo correspondente.",
      },
      {
        termo: "Extraterritorialidade incondicionada",
        faz: "Art. 7º, I: vida ou liberdade do Presidente, patrimônio ou fé pública das entidades públicas, administração pública por quem está a seu serviço, e genocídio de agente brasileiro ou domiciliado no Brasil.",
      },
      {
        termo: "Extraterritorialidade condicionada",
        faz: "Art. 7º, II: exige todas as condições do § 2º, entre elas entrar no território nacional e o fato ser punível também onde foi praticado.",
      },
      {
        termo: "Imunidades",
        faz: "O diplomata fica sujeito à lei do seu país. O cônsul só tem imunidade pelos atos do ofício.",
      },
      {
        termo: "Prazo penal",
        faz: "O dia do começo entra na conta, e o calendário é o comum (art. 10). Frações de dia são desprezadas (art. 11).",
      },
    ],
    cuidado:
      "A abolitio apaga os efeitos penais, inclusive a reincidência, mas a obrigação de indenizar continua.",
  },
  questoes: [
    {
      topico: "Lei penal no tempo",
      subassunto: "Abolitio criminis",
      dificuldade: 4,
      raciocinio: "Separe efeitos penais de efeitos civis.",
      enunciado:
        "Um homem cumpre pena por sentença definitiva, que também fixou indenização à vítima. Lei nova deixa de considerar o fato como crime. Pelo art. 2º do CP,",
      alternativas: [
        "a lei nova só alcança quem ainda não foi julgado, em respeito à coisa julgada",
        "desaparecem a pena e também a obrigação de indenizar fixada na sentença",
        "a lei nova depende de revisão criminal, sem efeito na execução em curso",
        "cessam a execução e os efeitos penais, mas ficam os efeitos civis",
        "a execução acaba, mas a reincidência continua contando contra ele",
      ],
      correta: 3,
      explicacao:
        "O art. 2º manda que ninguém seja punido por fato que lei posterior deixa de considerar crime, e cessam em virtude dela a execução e os efeitos penais da sentença condenatória. A obrigação de indenizar é efeito civil e permanece.",
      explicacaoErradas:
        "“Coisa julgada” não barra a lei mais benéfica (art. 2º, parágrafo único). A “obrigação de indenizar” não se apaga. A “revisão criminal” não é necessária. A “reincidência” é efeito penal e também desaparece.",
      pegadinha: "A abolitio alcança até condenação definitiva, mas não mexe no campo civil.",
      conhecimento:
        "Se a lei nova só muda o lugar da conduta, sem deixar de puni-la, há continuidade típico-normativa, e não abolitio.",
    },
    {
      topico: "Classificação das normas penais",
      subassunto: "Norma penal em branco",
      dificuldade: 4,
      raciocinio: "Olhe quem edita o complemento: o mesmo órgão ou outra instância.",
      enunciado:
        "A PRF apreende carga de substância listada em portaria da Anvisa como droga proibida. O tipo do art. 33 da Lei 11.343/2006 só se completa com essa lista. Em contraste, o art. 237 do CP, que pune quem se casa conhecendo impedimento, busca o complemento no Código Civil. Essas normas são, nessa ordem, em branco",
      alternativas: [
        "homogênea e heterogênea, porque a portaria vem do Legislativo",
        "heterogênea e homogênea, conforme a instância do complemento",
        "às avessas e homogênea, porque nos dois casos falta a pena",
        "heterogênea e às avessas, porque a lei civil aumenta a sanção",
        "homogênea nos dois casos, porque toda norma complementar é lei",
      ],
      correta: 1,
      explicacao:
        "Na heterogênea, o complemento vem de instância diferente da que fez a lei, como a portaria da Anvisa. Na homogênea, vem de outra lei, como o Código Civil no art. 237 do CP.",
      explicacaoErradas:
        "A portaria não vem “do Legislativo”. A norma “às avessas” é a que deixa a pena para outro texto, o que não é o caso. A “lei civil” não aumenta a sanção aqui. Nem “toda norma complementar é lei”: a portaria é ato administrativo.",
      pegadinha: "O nome “homogênea” fala da fonte do complemento, e não do assunto.",
      conhecimento:
        "Na norma em branco às avessas, o preceito está completo e a pena depende de outro texto, que precisa ser lei.",
    },
    {
      topico: "Lei penal no tempo",
      subassunto: "Combinação de leis: Súmula 501 do STJ",
      dificuldade: 5,
      raciocinio: "O juiz escolhe a lei inteira mais favorável; ele não monta uma terceira.",
      enunciado:
        "A lei antiga traz pena-base menor; a lei nova, pena-base maior, mas uma causa de diminuição que a antiga não tinha. A defesa pede a pena da lei antiga com a diminuição da lei nova. Conforme a Súmula 501 do STJ, firmada no confronto das leis de drogas, o juiz",
      alternativas: [
        "deve atender à defesa, porque toda parte benéfica retroage sozinha",
        "aplica sempre a lei nova, que revogou por inteiro a anterior",
        "aplica sempre a lei antiga, por ser a vigente na data do fato",
        "pode combinar as leis, desde que o Ministério Público não se oponha",
        "aplica a lei que, na íntegra, for mais favorável, vedada a combinação",
      ],
      correta: 4,
      explicacao:
        "A Súmula 501 admite a retroação da nova lei de drogas desde que, aplicada na íntegra, seja mais favorável que a lei anterior, sendo vedada a combinação de leis. Juntar partes criaria uma terceira lei, função do Legislativo.",
      explicacaoErradas:
        "“Toda parte benéfica” sozinha é a tese rejeitada. “Sempre a lei nova” e “sempre a lei antiga” ignoram a comparação no caso concreto. A concordância do “Ministério Público” não permite a combinação.",
      pegadinha: "“Mais benéfica” se compara lei contra lei, e não artigo contra artigo.",
      conhecimento:
        "Compete ao juízo da execução aplicar a lei mais benigna depois do trânsito em julgado (Súmula 611 do STF).",
    },
    {
      topico: "Lei penal no tempo",
      subassunto: "Lei temporária",
      dificuldade: 4,
      raciocinio: "Sem a ultra-atividade, bastaria esperar a lei acabar.",
      enunciado:
        "Lei com prazo de vigência de 90 dias pune certa conduta durante calamidade. Um motorista a pratica no 80º dia e só é denunciado depois do fim do prazo, quando a lei já não vigora. Nesse caso, pelo art. 3º do CP,",
      alternativas: [
        "a lei aplica-se ao fato, mesmo decorrido o período de sua duração",
        "houve abolitio criminis, e o processo deve ser extinto de imediato",
        "a lei só se aplica se a denúncia vier antes do fim do prazo legal",
        "a retroatividade benéfica afasta a punição quando a lei perde a vigência",
        "o fato fica impune, porque a Constituição proíbe a ultra-atividade",
      ],
      correta: 0,
      explicacao:
        "A lei excepcional ou temporária, embora decorrido o período de sua duração ou cessadas as circunstâncias que a determinaram, aplica-se ao fato praticado durante sua vigência. É a ultra-atividade.",
      explicacaoErradas:
        "O fim do prazo não é “abolitio criminis”. Não se exige “denúncia” dentro do prazo. A “retroatividade benéfica” não entra, porque a perda de vigência já estava prevista. A “Constituição” não veda essa regra na leitura que prevalece.",
      pegadinha: "O término da lei temporária não equivale a uma lei nova que descriminaliza.",
      conhecimento:
        "A lei temporária tem prazo fixado no próprio texto. A excepcional vale enquanto dura a situação que a motivou.",
    },
    {
      topico: "Tempo do crime",
      subassunto: "Teoria da atividade e menoridade",
      dificuldade: 4,
      raciocinio: "Pergunte a idade na data do disparo, e não na data da morte.",
      enunciado:
        "Faltando três dias para fazer 18 anos, um rapaz atira em outro às margens de uma rodovia federal. A vítima fica internada e morre um mês depois, quando o autor já é maior. Pelo art. 4º do CP, o autor",
      alternativas: [
        "responde pelo homicídio, porque já era maior quando a vítima morreu",
        "responde por tentativa, e o resultado posterior fica fora da imputação",
        "é inimputável, pois vale a idade na data da ação, e não a do resultado",
        "responde pelo homicídio com a pena reduzida pela idade próxima de 18 anos",
        "fica sem resposta estatal, porque a medida do ECA acaba aos 18 anos",
      ],
      correta: 2,
      explicacao:
        "Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado. Na data do disparo ele tinha 17 anos, e o menor de 18 é inimputável (art. 27). Responde pelo ECA.",
      explicacaoErradas:
        "“Maior quando a vítima morreu” aplica a teoria do resultado, que o CP não adotou. A “tentativa” não se ajusta ao fato. A “pena reduzida” é benefício de quem já tem 18 anos e menos de 21. A medida do ECA pode seguir depois dos 18, e por isso “fica sem resposta” também erra.",
      pegadinha: "No tempo, vale a atividade. No lugar, a ubiquidade. A troca derruba muita gente.",
      conhecimento:
        "No ECA, a internação tem liberação compulsória aos 21 anos (art. 121, § 5º).",
    },
    {
      topico: "Tempo do crime",
      subassunto: "Crime permanente: Súmula 711 do STF",
      dificuldade: 5,
      raciocinio: "No crime permanente, a conduta ainda está acontecendo quando a lei muda.",
      enunciado:
        "Uma vítima de extorsão mediante sequestro é levada a cativeiro em março. Em maio, entra em vigor lei que aumenta a pena do crime. A polícia liberta a vítima em junho, com o mesmo grupo no comando do cativeiro. Sobre a lei aplicável,",
      alternativas: [
        "vale a lei de março, pois a lei mais grave nunca retroage",
        "o juiz aplica metade da pena de cada lei, por proporção do tempo",
        "só a lei de março vale, porque o crime se consumou com a captura",
        "aplica-se a lei de maio, vigente antes de cessar a permanência",
        "aplica-se a lei de maio somente se houver nova denúncia pelo período",
      ],
      correta: 3,
      explicacao:
        "A Súmula 711 do STF diz que a lei penal mais grave se aplica ao crime continuado ou permanente, se sua vigência é anterior à cessação da continuidade ou da permanência. Não há retroação: a conduta seguia em curso quando a lei entrou em vigor.",
      explicacaoErradas:
        "“Nunca retroage” é verdade, mas não é o caso, porque não há retroação. A divisão em “metade da pena” não existe. A consumação com a captura não encerra a permanência, e por isso “só a lei de março” erra. “Nova denúncia” não é exigida.",
      pegadinha: "A consumação se prolonga: o fato também ocorreu sob a lei nova.",
      conhecimento:
        "A mesma regra vale para o crime continuado, em que a série de condutas alcança a nova lei.",
    },
    {
      topico: "Lei penal no espaço",
      subassunto: "Lugar do crime: ubiquidade",
      dificuldade: 4,
      raciocinio: "Basta que a ação ou o resultado toque o Brasil.",
      enunciado:
        "Na fronteira seca de Mato Grosso do Sul, um homem atira do lado boliviano contra um desafeto que está do lado brasileiro. A vítima é socorrida e morre em hospital boliviano. Quanto à aplicação da lei brasileira pelo critério do art. 6º do CP,",
      alternativas: [
        "aplica-se, pois parte do resultado ou da execução tocou o Brasil",
        "não se aplica, porque ação e morte ocorreram em solo estrangeiro",
        "não se aplica, porque vale só o lugar da ação, que foi na Bolívia",
        "só se aplica se a Bolívia pedir a cooperação do governo brasileiro",
        "aplica-se somente se o autor for brasileiro e entrar no território",
      ],
      correta: 0,
      explicacao:
        "O art. 6º adota a ubiquidade: o crime se considera praticado onde ocorreu a ação ou omissão, no todo ou em parte, e onde se produziu ou deveria produzir-se o resultado. A lesão que levou à morte atingiu a vítima em solo brasileiro, então o crime tocou o território nacional.",
      explicacaoErradas:
        "Dizer que “ação e morte” ocorreram fora ignora a lesão sofrida no Brasil. “Só o lugar da ação” descreve a teoria da atividade, que o CP usa para o tempo. Pedido de “cooperação” e condição de “autor brasileiro” não são exigidos, porque o caso é de territorialidade.",
      pegadinha: "Ubiquidade resolve crime à distância entre países, e não a competência entre comarcas.",
      conhecimento:
        "Para definir o foro dentro do Brasil, a regra geral do CPP é o lugar da consumação (art. 70).",
    },
    {
      topico: "Lei penal no espaço",
      subassunto: "Extraterritorialidade incondicionada",
      dificuldade: 5,
      raciocinio: "Quem serve à administração brasileira e a lesa no exterior cai no art. 7º, I.",
      enunciado:
        "Em missão oficial no exterior, um servidor federal desvia verba da representação brasileira. Processado lá, é absolvido por falta de provas e volta ao Brasil. Pelo art. 7º do CP, a lei brasileira",
      alternativas: [
        "não se aplica, porque a absolvição estrangeira encerra o caso",
        "só se aplica se o Ministro da Justiça requisitar a ação penal",
        "só se aplica se o desvio também for crime no país da missão",
        "se aplica apenas depois de homologada a sentença estrangeira",
        "se aplica, ainda que ele tenha sido absolvido no estrangeiro",
      ],
      correta: 4,
      explicacao:
        "O crime contra a administração pública por quem está a seu serviço entra no art. 7º, I, “c”. Nesses casos, pelo § 1º, o agente é punido segundo a lei brasileira, ainda que absolvido ou condenado no estrangeiro.",
      explicacaoErradas:
        "A “absolvição estrangeira” só impede a punição na hipótese condicionada. A requisição do “Ministro da Justiça” aparece no § 3º. Exigir crime “no país da missão” é condição do § 2º. A “homologação” não é requisito da punição aqui.",
      pegadinha: "Na hipótese incondicionada, as condições do § 2º simplesmente não existem.",
      conhecimento:
        "Se houver pena cumprida no estrangeiro, ela atenua a imposta no Brasil, quando diversas, ou nela é computada, quando idênticas (art. 8º).",
    },
    {
      topico: "Lei penal no espaço",
      subassunto: "Extraterritorialidade condicionada",
      dificuldade: 5,
      raciocinio: "No art. 7º, II, as condições são cumulativas: uma falha derruba tudo.",
      enunciado:
        "Um brasileiro comete furto em Portugal, é absolvido pela Justiça portuguesa e retorna ao Brasil. O fato também é crime lá e admite extradição. Quanto à aplicação da lei brasileira,",
      alternativas: [
        "aplica-se sem condição, porque o agente é brasileiro",
        "não se aplica, porque falta a condição de não ter sido absolvido lá",
        "aplica-se, porque o retorno ao Brasil supre as demais condições",
        "não se aplica, porque o furto nunca entra na extraterritorialidade",
        "aplica-se se o Ministro da Justiça requisitar, mesmo com a absolvição",
      ],
      correta: 1,
      explicacao:
        "O crime praticado por brasileiro está no art. 7º, II, “b”. O § 2º exige, em conjunto: entrar no território, ser punível também onde foi praticado, estar entre os crimes que admitem extradição, não ter sido absolvido ou cumprido pena lá, e não ter sido perdoado nem extinta a punibilidade. A absolvição barra a aplicação.",
      explicacaoErradas:
        "“Sem condição” descreve o art. 7º, I. O “retorno ao Brasil” é só uma das condições. O “furto” entra, porque o inciso II, “b”, não escolhe crimes. A requisição do “Ministro da Justiça” é do § 3º, sobre crime de estrangeiro contra brasileiro.",
      pegadinha: "Ser brasileiro é o que abre a hipótese, mas não dispensa as condições.",
      conhecimento:
        "Pelo art. 5º, LI, da CF, o brasileiro nato nunca é extraditado: por isso a lei brasileira ganha importância nesses casos.",
    },
    {
      topico: "Lei penal no espaço",
      subassunto: "Embarcações e aeronaves",
      dificuldade: 4,
      raciocinio: "Natureza pública acompanha a bandeira; natureza privada estrangeira cede ao território.",
      enunciado:
        "No porto de Santos, ocorre um homicídio a bordo de um navio mercante estrangeiro, de propriedade privada. Na mesma semana, outro homicídio ocorre em navio de guerra estrangeiro atracado no mesmo porto. Pelo art. 5º do CP e pelas regras do direito internacional, a lei brasileira",
      alternativas: [
        "alcança os dois casos, porque ambos os navios estavam em porto brasileiro",
        "não alcança nenhum dos casos, porque os dois navios são estrangeiros",
        "alcança o navio mercante, mas não o de guerra, que é público",
        "alcança só o de guerra, porque o navio público deve obedecer ao porto",
        "só alcança os dois se a vítima for brasileira e houver representação",
      ],
      correta: 2,
      explicacao:
        "Pelo § 2º do art. 5º, a lei brasileira se aplica a crimes a bordo de embarcações estrangeiras de propriedade privada em porto ou mar territorial do Brasil. O navio público estrangeiro é considerado extensão do Estado de sua bandeira, por reciprocidade com o § 1º.",
      explicacaoErradas:
        "“Alcança os dois casos” ignora a natureza pública do navio de guerra. “Não alcança nenhum” ignora o § 2º. “Só o de guerra” inverte a regra. A condição de “vítima brasileira” não aparece no art. 5º.",
      pegadinha: "O critério não é a bandeira sozinha: é bandeira mais natureza do navio.",
      conhecimento:
        "Em alto-mar, a embarcação privada brasileira é considerada extensão do território nacional (art. 5º, § 1º).",
    },
    {
      topico: "Lei penal em relação às pessoas",
      subassunto: "Imunidade de cônsul e de diplomata",
      dificuldade: 4,
      raciocinio: "Diplomata tem imunidade ampla; cônsul, só nos atos do ofício.",
      enunciado:
        "Em férias e em carro particular, um cônsul estrangeiro causa lesão culposa em acidente em rodovia federal, sem relação com suas funções. Em relação à lei penal brasileira, ele",
      alternativas: [
        "fica sujeito só à lei do seu país, como todo agente consular",
        "só responde se o Itamaraty autorizar a abertura do processo",
        "tem imunidade total enquanto estiver acreditado no Brasil",
        "responde, pois a imunidade consular só cobre atos do ofício",
        "tem imunidade por ser crime culposo, sem dolo contra o Estado",
      ],
      correta: 3,
      explicacao:
        "A Convenção de Viena sobre Relações Consulares protege o cônsul quanto aos atos praticados no exercício da função. Fato particular, em férias, fica sujeito à lei brasileira.",
      explicacaoErradas:
        "“Só à lei do seu país” é a regra do diplomata. Autorização do “Itamaraty” não existe como condição. “Imunidade total” também descreve o diplomata. O fato de ser “crime culposo” não gera imunidade.",
      pegadinha: "Cônsul e diplomata têm regras diferentes, ainda que os dois sejam agentes estrangeiros.",
      conhecimento:
        "A imunidade diplomática alcança os familiares que vivem com o agente e pode ser renunciada pelo Estado acreditante, não pelo próprio agente.",
    },
  ],
};
