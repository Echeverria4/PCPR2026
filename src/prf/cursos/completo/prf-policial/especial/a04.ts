import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-04",
  resumo: {
    ideia:
      "O Estatuto do Desarmamento separa ter a arma em casa ou no trabalho (posse) de levá-la consigo (porte), e arma de uso permitido de arma de uso restrito ou proibido. Os crimes são de perigo abstrato: não precisa haver perigo concreto, nem munição na arma.",
    itens: [
      {
        termo: "Posse irregular",
        faz: "Ter arma de uso permitido, sem registro, em casa ou no local de trabalho de que se é titular ou responsável: detenção de 1 a 3 anos (art. 12).",
        pista: "Caminhão e táxi não são local de trabalho para a posse: arma ali é porte (STJ).",
      },
      {
        termo: "Omissão de cautela",
        faz: "Deixar de tomar cuidado e permitir que menor de 18 anos ou pessoa com deficiência mental se apodere da arma: detenção de 1 a 2 anos (art. 13). É crime culposo.",
        pista: "A empresa de segurança que não comunica furto ou extravio de arma em 24 horas responde igual (parágrafo único).",
      },
      {
        termo: "Porte ilegal",
        faz: "Portar, transportar ou ceder arma de uso permitido sem autorização: reclusão de 2 a 4 anos (art. 14).",
      },
      {
        termo: "Disparo",
        faz: "Disparar arma em lugar habitado, via pública ou em direção a ela: reclusão de 2 a 4 anos (art. 15), desde que o disparo não vise outro crime.",
      },
      {
        termo: "Uso restrito e proibido",
        faz: "Posse ou porte de arma de uso restrito: reclusão de 3 a 6 anos (art. 16). Se de uso proibido: 4 a 12 anos, e é hediondo (art. 16, § 2º).",
        pista: "Numeração raspada leva ao art. 16, § 1º, IV, mesmo em arma de uso permitido.",
      },
      {
        termo: "Comércio e tráfico internacional",
        faz: "Comércio ilegal: 6 a 12 anos (art. 17). Tráfico internacional: 8 a 16 anos (art. 18). Ambos hediondos. Vale a venda a agente policial disfarçado, se havia conduta criminosa anterior.",
      },
      {
        termo: "Aumentos",
        faz: "Metade nos arts. 17 e 18 se a arma for de uso proibido ou restrito (art. 19). Metade nos arts. 14 a 18 se o autor for integrante dos órgãos dos arts. 6º, 7º e 8º ou reincidente específico (art. 20).",
      },
      {
        termo: "Perigo abstrato",
        faz: "Arma desmuniciada ainda é crime. Só não há crime se o laudo mostrar que a arma é totalmente incapaz de disparar.",
        pista: "Pouquíssima munição, sem arma, pode ser insignificante, mas só em casos excepcionais.",
      },
      {
        termo: "Registro vencido",
        faz: "Posse em casa com registro vencido é só irregularidade administrativa. Porte com registro ou autorização vencidos continua sendo crime.",
      },
      {
        termo: "Porte do policial",
        faz: "Integrantes dos órgãos do art. 144 da Constituição, como a PRF, podem portar arma da corporação ou particular, também fora de serviço, em todo o país (art. 6º, II e § 1º).",
      },
      {
        termo: "Armas apreendidas",
        faz: "Depois do laudo, e sem interesse para o processo, o juiz as envia ao Exército em até 48 horas, para destruição ou doação (art. 25).",
      },
      {
        termo: "Documento de identidade",
        faz: "Ninguém pode reter documento de identificação. Quem exige o documento tem até 5 dias para tirar os dados; na entrada de prédios, anota e devolve na hora. Reter é contravenção penal (Lei 5.553, arts. 1º a 3º).",
      },
    ],
    cuidado:
      "Desde a Lei 15.358/2026, o art. 21-A aumenta de 2/3 as penas dos arts. 12, 14 e 16 quando a arma está ligada ao tráfico de drogas. E o STF derrubou as proibições de fiança dos arts. 14 e 15 e de liberdade provisória do art. 21 (ADI 3.112).",
  },
  questoes: [
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Posse e porte",
      dificuldade: 5,
      raciocinio: "A cabine do caminhão não é residência nem local de trabalho para a posse.",
      enunciado:
        "Numa fiscalização, policiais rodoviários federais encontram na cabine de um caminhão um revólver de uso permitido, registrado em nome do motorista, que não tem porte. Ele diz que dorme no caminhão e que ali é seu local de trabalho. A conduta configura:",
      alternativas: [
        "posse irregular, pois a cabine do caminhão é o local de trabalho do motorista",
        "porte ilegal de arma de uso permitido, pois a cabine não é local de trabalho",
        "fato atípico, pois a arma está registrada em nome do próprio motorista",
        "posse ou porte de arma de uso restrito, pela gravidade de transportá-la na rodovia",
        "só infração administrativa, punida com a apreensão da arma pela Polícia Federal",
      ],
      correta: 1,
      explicacao:
        "O registro autoriza manter a arma só na residência ou no local de trabalho de que se é titular ou responsável (art. 5º). Para o STJ, caminhão e táxi não são extensão da casa nem local de trabalho para esse fim. Levar a arma no veículo sem porte é porte ilegal de arma de uso permitido (art. 14), com reclusão de 2 a 4 anos.",
      explicacaoErradas:
        "“Posse irregular” aceita a tese da cabine como local de trabalho, que o STJ rejeita. O registro não autoriza o porte, por isso não é “fato atípico”. A arma é de uso permitido, e não “de uso restrito”. O transporte sem porte é crime, não “só infração administrativa”.",
      pegadinha: "Registro permite ter a arma; só o porte permite levá-la consigo.",
      conhecimento: "A posse irregular (art. 12) tem detenção de 1 a 3 anos; o porte (art. 14), reclusão de 2 a 4.",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Perigo abstrato",
      dificuldade: 4,
      raciocinio: "O crime não depende de munição na arma.",
      enunciado:
        "Na revista de um ônibus interestadual, policiais rodoviários federais encontram com um passageiro, sem porte, uma pistola de uso permitido sem munição. A perícia atesta que a arma funciona normalmente. A conduta:",
      alternativas: [
        "é atípica, pois a arma sem munição não oferece perigo à segurança pública",
        "configura porte ilegal tentado, pois faltava a munição para o disparo",
        "configura crime impossível, por absoluta ineficácia do meio empregado",
        "configura porte ilegal consumado, pois o crime é de perigo abstrato",
        "é só infração administrativa, pois a arma estava desmuniciada no momento",
      ],
      correta: 3,
      explicacao:
        "Os crimes de posse e porte são de perigo abstrato: não é preciso demonstrar perigo concreto. STF e STJ entendem que o porte se consuma mesmo com a arma desmuniciada, desde que ela seja apta a disparar. Há porte ilegal de arma de uso permitido (art. 14).",
      explicacaoErradas:
        "“Não oferece perigo” exige perigo concreto, que a lei dispensa. Não há “tentado”: o porte se consumou. “Crime impossível” só cabe se o laudo mostrar que a arma é totalmente inapta, e aqui ela funciona. A conduta é crime, não “só infração administrativa”.",
      pegadinha: "Arma descarregada, mas apta, continua sendo crime.",
      conhecimento: "Nem é preciso apreender e periciar a arma, se outras provas demonstrarem o porte (STJ).",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Arma inapta",
      dificuldade: 5,
      raciocinio: "O laudo de inaptidão total afasta a lesão ao bem jurídico.",
      enunciado:
        "Policiais rodoviários federais apreendem com um condutor, sem porte, um revólver e três cartuchos. O laudo conclui que o revólver é totalmente incapaz de disparar e que os cartuchos estão deflagrados e sem uso possível. A conduta, segundo o STJ:",
      alternativas: [
        "é atípica, pois o laudo mostrou a total ineficácia da arma e da munição",
        "configura porte ilegal, pois o crime de perigo abstrato dispensa o laudo",
        "configura porte ilegal, pois a inaptidão só reduz a pena de 1/3 a 2/3",
        "configura porte ilegal, pois basta a aparência de arma para intimidar terceiros",
        "configura posse irregular, pois a arma inapta não pode ser objeto de porte",
      ],
      correta: 0,
      explicacao:
        "Demonstrada por laudo a inaptidão da arma para o disparo, a conduta de portar ou possuir é atípica: não há lesão à incolumidade pública, e há crime impossível pela absoluta ineficácia do meio (STJ). Aqui também a munição é imprestável.",
      explicacaoErradas:
        "O crime é de perigo abstrato, mas o laudo de inaptidão total afasta a tipicidade, por isso “dispensa o laudo” erra. A lei não prevê redução “de 1/3 a 2/3” por inaptidão. A “aparência de arma” importaria para o roubo, não para o porte. Não há “posse irregular”, pois o fato é atípico.",
      pegadinha: "Desmuniciada e apta: crime. Inapta comprovada por laudo: atípico.",
      conhecimento: "Réplicas e simulacros que possam ser confundidos com arma não podem ser fabricados nem vendidos (art. 26), mas portá-los não é crime do Estatuto.",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Registro vencido",
      dificuldade: 5,
      raciocinio: "A tese do registro vencido vale só para a posse.",
      enunciado:
        "Considere duas situações com armas de uso permitido regularmente registradas no passado. Na primeira, o dono mantém a arma em casa com o registro vencido há dois anos. Na segunda, um condutor é flagrado na rodovia portando a arma com a autorização de porte vencida. Segundo o STJ:",
      alternativas: [
        "as duas condutas são crimes, pois o registro vencido equivale a arma sem registro",
        "as duas condutas são só irregularidades administrativas, punidas com multa",
        "a primeira é posse irregular, e a segunda é só irregularidade administrativa",
        "a primeira é crime, e a segunda é atípica, pois o porte vencido dispensa renovação",
        "a primeira é irregularidade administrativa, e a segunda é porte ilegal",
      ],
      correta: 4,
      explicacao:
        "Para a Corte Especial do STJ, quem já registrou a arma e a mantém em casa com o registro vencido comete só irregularidade administrativa, que autoriza apreensão e multa, não o crime de posse (art. 12). Esse entendimento não se estende ao porte, cujas elementares são diferentes: portar com autorização vencida é crime (art. 14).",
      explicacaoErradas:
        "“As duas condutas são crimes” ignora a tese da posse com registro vencido. “As duas são irregularidades” estende ao porte uma tese que o STJ restringe à posse. As outras duas invertem as conclusões sobre a posse e o porte.",
      pegadinha: "Registro vencido salva a posse em casa, mas não o porte na rua.",
      conhecimento: "Quem entrega a arma espontaneamente à Polícia Federal tem extinta a punibilidade da posse irregular (art. 32).",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Numeração raspada",
      dificuldade: 5,
      raciocinio: "Numeração suprimida leva ao art. 16, § 1º, mesmo em arma de uso permitido.",
      enunciado:
        "Numa abordagem, policiais rodoviários federais encontram com um motorista, sem porte, um revólver de calibre de uso permitido com a numeração de série raspada. A conduta configura:",
      alternativas: [
        "porte ilegal de arma de uso permitido, do art. 14, pois o calibre é permitido",
        "porte de arma de uso proibido, do art. 16, § 2º, e é crime hediondo",
        "o crime do art. 16, § 1º, IV, com reclusão de 3 a 6 anos, sem ser hediondo",
        "porte ilegal do art. 14 em concurso com adulteração de sinal de veículo",
        "o crime do art. 16, § 1º, IV, que é hediondo como todas as figuras do art. 16",
      ],
      correta: 2,
      explicacao:
        "Incorre nas penas do art. 16 (reclusão de 3 a 6 anos) quem porta, possui ou transporta arma com numeração, marca ou sinal de identificação raspado, suprimido ou adulterado (art. 16, § 1º, IV), qualquer que seja o calibre. Desde a Lei 13.964/2019, só a posse ou o porte de arma de uso proibido é hediondo (Lei 8.072, art. 1º, parágrafo único, II), e o STJ não considera hedionda a figura da numeração raspada em arma de uso permitido.",
      explicacaoErradas:
        "“Art. 14, pois o calibre é permitido” esquece a regra especial da numeração raspada. A arma não é “de uso proibido”. A “adulteração de sinal de veículo” (CP, art. 311) trata de veículo, não de arma. Nem “todas as figuras do art. 16” são hediondas.",
      pegadinha: "Numeração raspada muda o artigo, mas não torna a arma de uso proibido.",
      conhecimento: "Também incorre no art. 16 quem vende ou entrega arma, munição ou explosivo a criança ou adolescente (§ 1º, V).",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Concurso de crimes",
      dificuldade: 5,
      raciocinio: "Armas de naturezas diferentes no mesmo contexto atingem tipos diferentes.",
      enunciado:
        "No porta-malas de um carro, policiais rodoviários federais encontram, no mesmo momento, uma pistola de uso permitido e um fuzil de uso restrito, ambos sem autorização. Segundo STF e STJ, o condutor responde:",
      alternativas: [
        "por um só crime do art. 16, que absorve o porte da arma de uso permitido",
        "pelos crimes dos arts. 14 e 16, em concurso formal",
        "pelos crimes dos arts. 14 e 16, em concurso material, somando as penas",
        "por um só crime do art. 14, pois a primeira arma encontrada define o tipo",
        "pelos crimes dos arts. 14 e 16, em continuidade delitiva",
      ],
      correta: 1,
      explicacao:
        "STF e STJ entendem que, encontradas no mesmo contexto armas de uso permitido e de uso restrito, há concurso formal entre os crimes dos arts. 14 e 16, pois os tipos são diferentes e protegem situações de gravidade distinta.",
      explicacaoErradas:
        "“Um só crime do art. 16” aplicaria absorção onde há tipos distintos. “Concurso material” exigiria mais de uma ação. Não existe a regra da “primeira arma encontrada”. A “continuidade delitiva” exige crimes em ocasiões diferentes, ligados por tempo, lugar e modo.",
      pegadinha: "Várias armas do mesmo tipo no mesmo contexto: crime único. Tipos diferentes: concurso formal.",
      conhecimento: "Várias armas de uso permitido no mesmo contexto formam um só crime do art. 14, e a quantidade pesa na pena.",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Uso proibido",
      dificuldade: 4,
      raciocinio: "O § 2º do art. 16 separou a arma de uso proibido, com pena maior.",
      enunciado:
        "Em fiscalização numa rodovia de fronteira, policiais rodoviários federais encontram com o condutor, sem autorização, uma arma de fogo classificada como de uso proibido. A conduta configura:",
      alternativas: [
        "o crime do art. 16, caput, com reclusão de 3 a 6 anos, sem ser hediondo",
        "o crime do art. 14, com pena aumentada da metade pela natureza da arma",
        "tráfico internacional de arma, do art. 18, por estar em rodovia de fronteira",
        "o crime do art. 16, § 2º, com reclusão de 4 a 12 anos, e é hediondo",
        "o crime do art. 16, § 2º, com reclusão de 4 a 12 anos, sem ser hediondo",
      ],
      correta: 3,
      explicacao:
        "Se a posse ou o porte envolverem arma de fogo de uso proibido, a pena é de reclusão de 4 a 12 anos (art. 16, § 2º, incluído pela Lei 13.964/2019). É crime hediondo (Lei 8.072, art. 1º, parágrafo único, II).",
      explicacaoErradas:
        "O “caput, com 3 a 6 anos” é a pena da arma de uso restrito. O art. 14 trata só de arma de uso permitido. Estar perto da fronteira não prova importação ou exportação, exigidas pelo “art. 18”. “Sem ser hediondo” contraria a Lei 8.072.",
      pegadinha: "Uso restrito: 3 a 6 anos, não hediondo. Uso proibido: 4 a 12 anos, hediondo.",
      conhecimento: "Comércio ilegal (art. 17) e tráfico internacional (art. 18) também são hediondos.",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Disparo",
      dificuldade: 4,
      raciocinio: "O disparo é subsidiário: cede quando visa outro crime.",
      enunciado:
        "Depois de uma discussão de trânsito na rodovia, um motorista atira contra outro com a intenção de matá-lo, mas erra, e o projétil atinge apenas a lataria. Quanto ao disparo, ele responde por:",
      alternativas: [
        "tentativa de homicídio, pois o disparo do Estatuto cede quando visa outro crime",
        "disparo de arma de fogo, pois o projétil não atingiu a vítima",
        "disparo de arma de fogo em concurso material com tentativa de homicídio",
        "disparo de arma de fogo, que absorve a tentativa de homicídio por ser lei especial",
        "dano qualificado, pois o único resultado foi o dano à lataria do veículo",
      ],
      correta: 0,
      explicacao:
        "O art. 15 pune o disparo em lugar habitado ou em via pública “desde que essa conduta não tenha como finalidade a prática de outro crime”. Como o disparo visava matar, o motorista responde por tentativa de homicídio, e o disparo fica absorvido.",
      explicacaoErradas:
        "O art. 15 não se aplica quando o disparo visa outro crime, por isso “disparo de arma de fogo” erra. Não há “concurso material” com o crime que o disparo buscava. A lei especial não “absorve” o crime mais grave. O “dano” fica absorvido pela tentativa de homicídio.",
      pegadinha: "O disparo só é crime autônomo quando não serve a outro crime.",
      conhecimento: "O porte ilegal da arma pode ser punido à parte se for anterior e independente do crime.",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Aumentos de pena",
      dificuldade: 4,
      raciocinio: "O art. 20 traz dois motivos de aumento da metade.",
      enunciado:
        "Um condutor já condenado de forma definitiva por porte ilegal de arma é flagrado de novo, na rodovia, portando arma de uso permitido sem autorização. Sobre a pena do novo crime, é correto afirmar que:",
      alternativas: [
        "é aumentada de 1/6 a 2/3, como nos crimes da Lei de Drogas",
        "é aumentada de 2/3 em qualquer caso de reincidência no Estatuto",
        "não tem aumento no Estatuto, e a reincidência só agrava a pena no CP",
        "é dobrada, pois a reincidência específica impede a pena mínima",
        "é aumentada da metade, pois o condutor é reincidente específico",
      ],
      correta: 4,
      explicacao:
        "Nos crimes dos arts. 14 a 18, a pena é aumentada da metade se o crime for praticado por integrante dos órgãos e empresas dos arts. 6º, 7º e 8º ou se o agente for reincidente específico em crimes dessa natureza (art. 20, com redação da Lei 13.964/2019).",
      explicacaoErradas:
        "“De 1/6 a 2/3” é o aumento da Lei de Drogas (art. 40). O aumento de “2/3” do Estatuto é o do art. 21-A, ligado ao tráfico. “Não tem aumento no Estatuto” ignora o art. 20. O aumento é da metade, não “dobrada”.",
      pegadinha: "O art. 20 vale para os arts. 14 a 18; a posse do art. 12 não entra.",
      conhecimento: "Nos arts. 17 e 18, a pena também aumenta da metade se a arma for de uso proibido ou restrito (art. 19).",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Agente disfarçado",
      dificuldade: 5,
      raciocinio: "Com conduta criminosa anterior, não há flagrante preparado.",
      enunciado:
        "Após investigação que reuniu provas de que um homem vende armas ilegalmente há meses, um agente policial, disfarçado, encomenda duas pistolas e as recebe dele num posto de combustível na rodovia. Pela Lei 10.826/2003:",
      alternativas: [
        "não há crime, pois houve flagrante preparado pelo agente policial",
        "há só tentativa de comércio ilegal, pois a venda foi provocada",
        "há comércio ilegal, pois havia elementos de conduta criminosa anterior",
        "há só porte ilegal, pois o agente disfarçado não pode comprar armas do suspeito",
        "não há crime, pois a venda a agente policial é sempre crime impossível",
      ],
      correta: 2,
      explicacao:
        "Incorre na pena do comércio ilegal (art. 17, § 2º) quem vende ou entrega arma, acessório ou munição, sem autorização, a agente policial disfarçado, quando presentes elementos probatórios razoáveis de conduta criminal preexistente. A regra foi incluída pela Lei 13.964/2019.",
      explicacaoErradas:
        "Não é “flagrante preparado” nem “crime impossível”, pois a conduta criminosa já existia antes da ação policial. Não há “só tentativa”: a venda se consumou. A lei autoriza expressamente a atuação do agente disfarçado, por isso “só porte ilegal” erra.",
      pegadinha: "A Súmula 145 do STF não se aplica quando o crime já vinha sendo praticado.",
      conhecimento: "Há regra igual para o tráfico internacional (art. 18, parágrafo único) e para o tráfico de drogas (Lei 11.343, art. 33, § 1º, IV).",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Omissão de cautela",
      dificuldade: 4,
      raciocinio: "Descuido com a arma diante de adolescente é crime culposo do art. 13.",
      enunciado:
        "Um homem deixa a pistola registrada sobre o sofá de casa e sai. O sobrinho dele, de 15 anos, pega a arma e a leva para a escola. Quanto ao dono da arma, sem intenção de entregá-la ao sobrinho, ele responde por:",
      alternativas: [
        "entrega de arma a adolescente, do art. 16, § 1º, V, por ter facilitado o acesso",
        "omissão de cautela, do art. 13, com detenção de 1 a 2 anos",
        "nenhum crime, pois a arma era registrada e estava dentro de casa",
        "porte ilegal, do art. 14, pois a arma saiu de casa e chegou à escola",
        "crime do ECA, por fornecer arma a adolescente, com reclusão de 3 a 6 anos",
      ],
      correta: 1,
      explicacao:
        "Deixar de observar as cautelas necessárias para impedir que menor de 18 anos ou pessoa com deficiência mental se apodere de arma de fogo que esteja sob sua posse ou que seja de sua propriedade é crime do art. 13 (detenção de 1 a 2 anos e multa). É crime culposo e se consuma quando o adolescente se apodera da arma.",
      explicacaoErradas:
        "A “entrega a adolescente” do art. 16, § 1º, V, exige dolo de vender, entregar ou fornecer. O registro não afasta o dever de cautela, por isso “nenhum crime” erra. O dono não portou a arma, por isso não é “porte ilegal”. O dono não “forneceu” a arma, e o Estatuto é a norma aplicável.",
      pegadinha: "Facilitar por descuido é culpa (art. 13); entregar de propósito é dolo (art. 16, § 1º, V).",
      conhecimento: "Responde também quem dirige empresa de segurança ou transporte de valores e não comunica à Polícia Federal, em 24 horas, perda, furto, roubo ou extravio de arma (art. 13, parágrafo único).",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Porte funcional",
      dificuldade: 4,
      raciocinio: "O § 1º do art. 6º garante o porte também fora de serviço.",
      enunciado:
        "Um policial rodoviário federal, de folga e em viagem de férias a outro estado, leva consigo a própria pistola particular, registrada. Pelo Estatuto do Desarmamento, ele:",
      alternativas: [
        "só pode portar arma em serviço, e fora dele precisa de porte comum expedido pela PF",
        "só pode portar a arma fornecida pela corporação, e nunca a particular",
        "pode portar arma particular só no estado onde é lotado, fora de serviço",
        "pode portar arma da corporação ou particular, fora de serviço e em todo o país",
        "pode portar a arma particular só com autorização prévia do superintendente",
      ],
      correta: 3,
      explicacao:
        "Os integrantes dos órgãos do art. 144, I a V, da Constituição, entre eles a PRF, têm porte (art. 6º, II). O § 1º lhes garante portar arma fornecida pela corporação ou de propriedade particular, mesmo fora de serviço, com validade em âmbito nacional, nos termos do regulamento.",
      explicacaoErradas:
        "“Só em serviço” e “só a fornecida pela corporação” contrariam o § 1º. O porte vale em todo o país, não “só no estado onde é lotado”. A lei não exige “autorização prévia do superintendente” para cada uso.",
      pegadinha: "Porte funcional não depende de estar de serviço.",
      conhecimento: "Guardas municipais e agentes prisionais têm regras próprias de porte, previstas em outros incisos do art. 6º.",
    },
    {
      topico: "Documentos de identificação",
      subassunto: "Retenção",
      dificuldade: 4,
      raciocinio: "Na entrada de prédios, os dados são anotados e o documento é devolvido na hora.",
      enunciado:
        "Na portaria de um órgão público, o vigilante exige a carteira de identidade de um visitante e a retém até a saída dele, horas depois, para garantir que ele devolva o crachá. Pela Lei 5.553/1968:",
      alternativas: [
        "é contravenção: os dados deviam ser anotados e o documento devolvido na hora",
        "a retenção é lícita, pois a lei permite reter o documento de identidade por até 5 dias",
        "a retenção é lícita, pois o órgão público pode reter documentos sem limite",
        "a retenção é crime de abuso de autoridade, com detenção de 1 a 4 anos",
        "a retenção é lícita se o visitante concordar em deixar o documento na portaria",
      ],
      correta: 0,
      explicacao:
        "Quando o documento de identidade for indispensável para a entrada em órgãos públicos ou particulares, os dados são anotados no ato e o documento é devolvido imediatamente (art. 2º, § 2º). Reter documento de identificação é contravenção penal (art. 3º), com prisão simples de 1 a 3 meses ou multa.",
      explicacaoErradas:
        "Os “5 dias” valem para extrair dados quando o documento é exigido para certo ato, não para a entrada em prédios. Nem pessoa jurídica de direito público pode reter o documento (art. 1º), por isso “sem limite” erra. O vigilante não é autoridade agindo com as finalidades da Lei 13.869. A lei não abre exceção para a concordância do visitante.",
      pegadinha: "Entrada em prédio: anotar e devolver na hora. Outros atos: até 5 dias.",
      conhecimento: "Além do prazo de 5 dias, só ordem judicial permite reter documento de identificação (art. 2º, § 1º).",
    },
    {
      topico: "Documentos de identificação",
      subassunto: "Responsável",
      dificuldade: 5,
      raciocinio: "Responde quem ordenou, salvo se o executante desobedeceu às instruções.",
      enunciado:
        "Uma empresa dá aos recepcionistas instrução escrita e expressa de devolver na hora os documentos de quem entra. Mesmo assim, um recepcionista retém a identidade de um cliente durante a visita. Pela Lei 5.553/1968, responde pela contravenção:",
      alternativas: [
        "o gerente da empresa, pois sempre responde quem dirige a pessoa jurídica",
        "a própria empresa, como pessoa jurídica, que paga a multa da contravenção",
        "o gerente e o recepcionista, em concurso, pela retenção do documento",
        "ninguém, pois a retenção foi feita contra a vontade da empresa",
        "o recepcionista, pois desobedeceu às instruções expressas da empresa",
      ],
      correta: 4,
      explicacao:
        "Quando a infração é praticada por preposto ou agente de pessoa jurídica, considera-se responsável quem ordenou o ato que levou à retenção, a menos que o executante tenha desobedecido ou deixado de observar ordens ou instruções expressas: então, ele será o infrator (art. 3º, parágrafo único).",
      explicacaoErradas:
        "O gerente só responderia se tivesse ordenado a retenção, por isso “sempre responde quem dirige” erra. A lei não pune a “própria empresa” como pessoa jurídica por essa contravenção. Não há “concurso” com o gerente, que deu instrução contrária. Alguém responde, por isso “ninguém” erra.",
      pegadinha: "Ordem contrária desobedecida muda o responsável.",
      conhecimento: "A lei protege qualquer documento de identificação, mesmo apresentado por cópia autenticada (art. 1º).",
    },
    {
      topico: "Estatuto do Desarmamento",
      subassunto: "Insignificância",
      dificuldade: 5,
      raciocinio: "A insignificância só cabe em casos excepcionais, sem arma apta e sem outro crime.",
      enunciado:
        "Numa revista pessoal na rodovia, policiais rodoviários federais encontram com um passageiro apenas um cartucho intacto de calibre de uso permitido, sem nenhuma arma, e não há indício de outro crime. Segundo STF e STJ:",
      alternativas: [
        "há sempre crime, pois a insignificância nunca se aplica aos crimes do Estatuto",
        "há crime de posse irregular, pois a munição foi encontrada com ele",
        "pode-se reconhecer a insignificância, pela ínfima munição sem arma apta",
        "há crime de uso restrito, pois a munição isolada tem pena maior",
        "há só contravenção penal de porte de munição, prevista em lei de 1941",
      ],
      correta: 2,
      explicacao:
        "Os crimes do Estatuto são de perigo abstrato, mas STF e STJ admitem, de forma excepcional, a insignificância quando a quantidade de munição é ínfima e não há arma apta ao disparo, pois não há risco à incolumidade pública. Se houver contexto de outro crime, como o tráfico, a tese não se aplica.",
      explicacaoErradas:
        "“Nunca se aplica” contraria a jurisprudência atual. Munição levada consigo seria porte, não “posse irregular”, e de qualquer forma a conduta pode ser insignificante. O calibre é permitido, não “de uso restrito”. Para arma de fogo e munição, a antiga contravenção deu lugar aos crimes do Estatuto, por isso “só contravenção penal” erra.",
      pegadinha: "A insignificância é exceção e depende do contexto.",
      conhecimento: "Munição também é objeto dos crimes de posse e porte (arts. 12, 14 e 16).",
    },
  ],
};
