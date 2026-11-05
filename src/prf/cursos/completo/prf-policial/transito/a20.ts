import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-20",
  resumo: {
    ideia:
      "A Resolução 960/2022, alterada pela 989/2022, trata dos vidros: que tipo usar, quanta luz devem deixar passar, que danos são tolerados e como medir.",
    itens: [
      {
        termo: "Tipo de vidro",
        faz: "Para-brisa: laminado. Demais partes: temperado ou laminado.",
      },
      {
        termo: "Mínimo de 70%",
        faz: "Vale para o para-brisa e para as áreas indispensáveis à dirigibilidade, como as laterais dianteiras.",
      },
      {
        termo: "Demais vidros",
        faz: "Podem ficar abaixo de 70% se o veículo tiver retrovisores externos nos dois lados.",
        pista: "O antigo mínimo de 28% saiu do texto em 2023.",
      },
      {
        termo: "Película",
        faz: "Só não refletiva, com o mesmo limite do vidro somado à película.",
        pista: "Nas áreas indispensáveis, a chancela traz o instalador e o índice.",
      },
      {
        termo: "Valor considerado",
        faz: "VC = medição realizada + 7%. É o VC que se compara com o limite.",
      },
      {
        termo: "Dano em ônibus e caminhão",
        faz: "No máximo 3 danos: trinca de até 20 cm e fratura circular de até 4 cm.",
      },
      {
        termo: "Dano nos demais",
        faz: "No máximo 2 danos: trinca de até 10 cm e fratura circular de até 4 cm.",
      },
      {
        termo: "Zona proibida",
        faz: "Na área crítica de visão e na faixa de 2,5 cm das bordas não pode haver dano, nem recuperação.",
      },
      {
        termo: "Enquadramento",
        faz: "Película: art. 230, XVI. Dano ou falta de vidro: art. 230, XVIII. Vidro em desacordo: art. 237.",
      },
    ],
    cuidado: "Blindados seguem a NBR 16218 e ficam isentos do art. 2º e do inciso I do art. 4º.",
  },
  questoes: [
    {
      topico: "Transmitância",
      subassunto: "Vidro traseiro",
      dificuldade: 5,
      raciocinio: "A Resolução 989/2022 retirou o número do inciso II.",
      enunciado:
        "Em 2026, um automóvel com retrovisores externos nos dois lados tem, no vidro traseiro, conjunto vidro-película com 20% de transmitância. Considerando o art. 4º da Resolução Contran 960/2022, com a redação da 989/2022, esse conjunto",
      alternativas: [
        "é irregular, pois o mínimo para esse vidro é de 28%",
        "é irregular, pois o mínimo para todos os vidros é de 70%",
        "é regular, pois esse vidro pode ficar abaixo do mínimo de 70%",
        "é regular só se houver autorização expressa no CRLV-e do veículo",
        "é irregular, pois o vidro traseiro integra a área de dirigibilidade",
      ],
      correta: 2,
      explicacao: "Depois da Resolução 989/2022, o inciso II diz que esses vidros podem ter transmitância inferior à do inciso I, se o veículo tiver retrovisores externos nos dois lados.",
      explicacaoErradas:
        "“28%” era o texto original, alterado. “todos os vidros” ignora o inciso II. “autorização expressa” não existe. “área de dirigibilidade” é o para-brisa com as laterais dianteiras, pelo § 1º.",
      pegadinha: "Lembrar do antigo mínimo de 28%.",
      conhecimento: "A Resolução 989/2022 entrou em vigor em 2 de janeiro de 2023.",
    },
    {
      topico: "Medição",
      subassunto: "Valor considerado",
      dificuldade: 5,
      raciocinio: "Some 7 antes de comparar. O limite é “não inferior a 70%”.",
      enunciado:
        "O medidor de transmitância aprovado marca 63% na lateral dianteira de um veículo. Pelos arts. 4º e 19 da Resolução Contran 960/2022, a conclusão é que",
      alternativas: [
        "há infração, pois a medição de 63% é inferior a 70%",
        "não há infração, pois o valor considerado é de 70%",
        "há infração, pois o valor considerado é de 56%",
        "não há infração, pois nessa área o limite é livre",
        "há infração, pois os 7% só valem para o para-brisa",
      ],
      correta: 1,
      explicacao: "VC = 63% + 7% = 70%. Como o limite é não inferior a 70%, o valor atende ao art. 4º, I.",
      explicacaoErradas:
        "“medição de 63%” ignora o VC. “56%” subtraiu os 7%. “limite é livre” erra a área: a lateral dianteira é indispensável à dirigibilidade. “só valem para o para-brisa” cria restrição que o art. 19 não tem.",
      pegadinha: "Comparar a medição bruta com o limite.",
      conhecimento: "O auto deve trazer a medição, o valor considerado, o limite e a área envidraçada fiscalizada.",
    },
    {
      topico: "Danos",
      subassunto: "Para-brisa",
      dificuldade: 5,
      raciocinio: "Mesmo para-brisa, limites diferentes conforme o veículo.",
      enunciado:
        "Fora da área crítica e da faixa das bordas, dois para-brisas têm os mesmos danos: duas trincas de 15 cm e uma fratura circular de 3 cm. Um é de caminhão, o outro é de automóvel. Pelos arts. 15 e 16 da Resolução Contran 960/2022,",
      alternativas: [
        "os dois para-brisas estão regulares",
        "os dois para-brisas estão irregulares",
        "só o de automóvel está regular",
        "só o de caminhão está regular",
        "só estão regulares depois de reparados",
      ],
      correta: 3,
      explicacao: "Caminhão: até 3 danos, trinca até 20 cm e fratura até 4 cm. Automóvel: até 2 danos e trinca até 10 cm, limites ultrapassados.",
      explicacaoErradas:
        "“os dois” regulares ou irregulares ignora a diferença entre os arts. 15 e 16. “de automóvel” inverte a regra. “reparados” não é condição fora das regiões do art. 14.",
      pegadinha: "Usar um só limite para todos os veículos.",
      conhecimento: "O limite da fratura circular é o mesmo nos dois casos: 4 cm de diâmetro.",
    },
    {
      topico: "Danos",
      subassunto: "Área crítica",
      dificuldade: 4,
      raciocinio: "Nessa região, o tamanho do dano não importa.",
      enunciado:
        "Um automóvel tem uma trinca de 3 cm na área crítica de visão do condutor. O proprietário alega que ela pode ser recuperada. Pelos arts. 14 e 21 da Resolução Contran 960/2022,",
      alternativas: [
        "o dano não é tolerado nem recuperável, e cabe o art. 230, XVIII",
        "o dano é tolerado por ser menor que 10 cm, e não cabe autuação",
        "o dano é tolerado até dois por para-brisa, desde que recuperados",
        "o dano pode ser recuperado em 30 dias, sem medida administrativa",
        "o dano não é tolerado, e o enquadramento é o do art. 237 do CTB",
      ],
      correta: 0,
      explicacao: "O art. 14 proíbe trincas e fraturas circulares na área crítica e na faixa de 2,5 cm das bordas, e veda a recuperação. O art. 21, V, “a”, leva o caso ao art. 230, XVIII.",
      explicacaoErradas:
        "“menor que 10 cm” e “dois por para-brisa” valem fora das regiões do art. 14. “30 dias” não existe. “art. 237” é para vidro em desacordo, não para dano no para-brisa.",
      pegadinha: "Aplicar os limites de tamanho à área crítica.",
      conhecimento: "Nos automóveis, a área crítica é a metade esquerda da varredura das palhetas do limpador.",
    },
    {
      topico: "Película",
      subassunto: "Chancela",
      dificuldade: 4,
      raciocinio: "Tudo o que é película cai no inciso XVI.",
      enunciado:
        "Na lateral dianteira de um veículo há película não refletiva, com transmitância dentro do limite, mas sem chancela. Pelo art. 21 da Resolução Contran 960/2022, o enquadramento é",
      alternativas: [
        "nenhum, pois a transmitância atende ao limite",
        "o art. 237 do CTB, por vidro em desacordo",
        "o art. 230, XVIII, do CTB, por mau estado",
        "o art. 230, XV, do CTB, por uso publicitário",
        "o art. 230, XVI, do CTB, por falta de chancela",
      ],
      correta: 4,
      explicacao: "O art. 8º, § 1º, exige a chancela com a marca do instalador e o índice. O art. 21, III, “c”, leva a falta ao art. 230, XVI.",
      explicacaoErradas:
        "“nenhum” esquece que a chancela é exigência autônoma. “art. 237” é para o vidro de segurança. “mau estado” é para dano ou falta de vidro. “publicitário” é para material desse tipo.",
      pegadinha: "Achar que o limite atendido basta.",
      conhecimento: "As informações da chancela devem ser legíveis pelo lado externo dos vidros.",
    },
    {
      topico: "Vidros",
      subassunto: "Enquadramento",
      dificuldade: 5,
      raciocinio: "Faltar o vidro é uma coisa. Ter o vidro errado é outra.",
      enunciado:
        "Um veículo circula com para-brisa de vidro temperado, e não laminado. Outro circula sem o vidro de uma das portas. Pelos arts. 3º e 21 da Resolução Contran 960/2022, os enquadramentos são, respectivamente,",
      alternativas: [
        "art. 230, XVIII, e art. 237 do CTB",
        "art. 237 e art. 230, XVIII, do CTB",
        "art. 230, XVI, e art. 230, XVIII, do CTB",
        "art. 237 e art. 230, XVI, do CTB",
        "art. 230, XVI, nos dois casos do CTB",
      ],
      correta: 1,
      explicacao: "Vidro de segurança em desacordo vai ao art. 237 (art. 21, VI). Ausência de qualquer vidro vai ao art. 230, XVIII (art. 21, V, “b”).",
      explicacaoErradas:
        "“art. 230, XVIII, e art. 237” inverte a ordem. Os casos com “art. 230, XVI” usam o inciso de películas e coberturas, que não trata de nenhuma das duas situações.",
      pegadinha: "Trocar a ordem dos dois enquadramentos.",
      conhecimento: "Os dois são infração grave com retenção do veículo para regularização.",
    },
    {
      topico: "Vedações",
      subassunto: "Art. 10",
      dificuldade: 4,
      raciocinio: "Procure o caso fora das áreas de dirigibilidade e com dois retrovisores.",
      enunciado:
        "Pelo art. 10 da Resolução Contran 960/2022, é PERMITIDO, com o veículo em movimento,",
      alternativas: [
        "aplicar película refletiva no vidro traseiro, se houver dois retrovisores",
        "manter película com bolhas na lateral dianteira, fora da área crítica",
        "usar cortina fechada no vidro lateral traseiro, com dois retrovisores",
        "afixar adesivo pequeno na lateral dianteira, sem caráter publicitário",
        "usar em ônibus de linha painel luminoso com mensagem de publicidade",
      ],
      correta: 2,
      explicacao: "O inciso IV veda cortinas e persianas fechadas, salvo nas áreas não indispensáveis à dirigibilidade, em veículo com retrovisores nos dois lados.",
      explicacaoErradas:
        "“refletiva” é vedada em qualquer área envidraçada. “bolhas” e “adesivo” são vedados nas áreas indispensáveis. “publicidade” não entra na exceção, que é para informar o serviço ao usuário da linha.",
      pegadinha: "Achar que dois retrovisores liberam a película refletiva.",
      conhecimento: "O vidro do teto fica fora dos limites de transmitância, pelo art. 4º, § 3º.",
    },
  ],
};
