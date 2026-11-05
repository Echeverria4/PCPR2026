import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-12",
  resumo: {
    ideia:
      "A Resolução 110/2000 traz a tabela-padrão: o limite do licenciamento anual pelo final da placa. Cada Estado monta seu calendário sem passar desses limites.",
    itens: [
      {
        termo: "Finais 1 e 2",
        faz: "Até setembro.",
      },
      {
        termo: "Finais 3, 4 e 5",
        faz: "Até outubro.",
      },
      {
        termo: "Finais 6, 7 e 8",
        faz: "Até novembro.",
      },
      {
        termo: "Finais 9 e 0",
        faz: "Até dezembro.",
      },
      {
        termo: "Art. 1º",
        faz: "O órgão executivo do Estado ou do DF fixa os prazos dos veículos da sua circunscrição, respeitada a tabela.",
      },
      {
        termo: "Art. 2º",
        faz: "Fora da UF de registro, a fiscalização usa os prazos da tabela para autuar.",
        pista: "Dentro da UF, vale o calendário local.",
      },
      {
        termo: "CTB, art. 131, § 2º",
        faz: "Só está licenciado o veículo com tributos, encargos e multas quitados, seja quem for o infrator.",
      },
      {
        termo: "CTB, art. 130, § 2º",
        faz: "Mudou de residência ou domicílio? O licenciamento de origem vale durante o exercício.",
      },
    ],
    cuidado: "A tabela traz o limite máximo: o Estado pode fixar prazo anterior, nunca posterior.",
  },
  questoes: [
    {
      topico: "Tabela-padrão",
      subassunto: "Fora da UF",
      dificuldade: 5,
      raciocinio: "Fora da UF de registro, vale a tabela da resolução.",
      enunciado:
        "Em outubro, a PRF aborda um veículo de placa final 7, fora da UF de registro. O calendário local dessa UF venceu em agosto, e ele não renovou o licenciamento do ano. Pelo art. 2º da Resolução Contran 110/2000, para fins de autuação,",
      alternativas: [
        "vale o calendário da UF de registro, e o veículo já deve ser autuado desde agosto",
        "vale o calendário do Estado da abordagem, que substitui o da UF de registro",
        "o veículo só pode ser autuado depois de dezembro, último mês de toda a tabela",
        "cabe autuar, pois o prazo do final 7 termina em outubro na tabela-padrão",
        "vale o limite da tabela, até novembro, e ainda não cabe a autuação",
      ],
      correta: 4,
      explicacao: "O art. 2º manda adotar os prazos da resolução quando o veículo está fora da UF de registro. Os finais 6, 7 e 8 vão até novembro.",
      explicacaoErradas:
        "“calendário da UF” e “Estado da abordagem” ignoram o art. 2º. “depois de dezembro” vale só para os finais 9 e 0. “termina em outubro” erra a linha da tabela.",
      pegadinha: "Usar o calendário local fora da UF.",
      conhecimento: "A regra serve à autuação e à aplicação de penalidades em todo o território nacional.",
    },
    {
      topico: "Tabela-padrão",
      subassunto: "Limites",
      dificuldade: 4,
      raciocinio: "A tabela é teto, não piso.",
      enunciado:
        "Um Detran propõe que os veículos de placa final 9 renovem o licenciamento até janeiro do ano seguinte, e os de final 1, até abril. À luz do art. 1º da Resolução Contran 110/2000,",
      alternativas: [
        "as duas datas são válidas, pois cada Estado é livre para fixar seu calendário",
        "as duas datas são inválidas, pois os Estados devem copiar a tabela exata",
        "só a data do final 1 é válida, pois não passa do limite de setembro",
        "só a data do final 9 é válida, pois nenhum prazo pode ser antecipado no ano",
        "as duas datas dependem de autorização prévia do Contran, por serem diferentes",
      ],
      correta: 2,
      explicacao: "O Estado fixa os prazos respeitando os limites. Abril fica antes do limite de setembro. Janeiro do ano seguinte passa do limite de dezembro.",
      explicacaoErradas:
        "“livre para fixar” ignora os limites. “copiar a tabela exata” transforma teto em data fixa. “nenhum prazo pode ser antecipado” inverte a regra. “autorização prévia” não está no artigo.",
      pegadinha: "Ler a tabela como data obrigatória.",
      conhecimento: "O art. 130 do CTB exige o licenciamento anual pelo órgão do Estado ou do DF onde o veículo está registrado.",
    },
    {
      topico: "Tabela-padrão",
      subassunto: "Correlação",
      dificuldade: 4,
      raciocinio: "Decore a divisão 2, 3, 3 e 2.",
      enunciado: "Na tabela da Resolução Contran 110/2000, a correlação correta entre final da placa e prazo limite é:",
      alternativas: [
        "finais 6, 7 e 8: até novembro",
        "finais 1, 2 e 3: até setembro",
        "finais 4, 5 e 6: até outubro",
        "finais 9 e 0: até novembro do ano",
        "finais 7, 8 e 9: até dezembro",
      ],
      correta: 0,
      explicacao: "A tabela é: 1 e 2 até setembro; 3, 4 e 5 até outubro; 6, 7 e 8 até novembro; 9 e 0 até dezembro.",
      explicacaoErradas:
        "“1, 2 e 3” põe o 3 em setembro. “4, 5 e 6” põe o 6 em outubro. “9 e 0: até novembro” erra o mês. “7, 8 e 9” mistura grupos.",
      pegadinha: "Dividir os finais em grupos iguais.",
      conhecimento: "A tabela limita a renovação do licenciamento anual, não a data do pagamento de tributos estaduais.",
    },
    {
      topico: "Tabela-padrão",
      subassunto: "Dentro da UF",
      dificuldade: 5,
      raciocinio: "O art. 2º só trata do veículo fora da UF.",
      enunciado:
        "Em junho, um veículo de placa final 1 é abordado dentro da própria UF de registro, cujo calendário fixou o mês de maio para esse final. Ele não renovou o licenciamento do ano. Nesse caso,",
      alternativas: [
        "não cabe autuação até setembro, pois a tabela nacional prevalece sempre",
        "não cabe autuação, pois só agentes estaduais fiscalizam o licenciamento",
        "a autuação depende de notificação prévia do Detran ao proprietário do veículo",
        "vale o calendário da UF, e o licenciamento já está vencido",
        "a autuação fica suspensa por 30 dias, tal como a CNH vencida há menos de um mês",
      ],
      correta: 3,
      explicacao: "A tabela é limite para o calendário do Estado. Dentro da UF de registro, vale o prazo que ela fixou. O art. 2º só alcança o veículo fora dela.",
      explicacaoErradas:
        "“prevalece sempre” estende o art. 2º. “só agentes estaduais” e “notificação prévia” não constam da norma. “suspensa por 30 dias” mistura a regra da CNH.",
      pegadinha: "Aplicar setembro dentro da própria UF.",
      conhecimento: "O veículo não licenciado se enquadra no art. 230, V, do CTB.",
    },
    {
      topico: "Licenciamento",
      subassunto: "Débitos",
      dificuldade: 4,
      raciocinio: "O vínculo é com o veículo.",
      enunciado:
        "A dona de um veículo quer licenciá-lo, mas há multa de trânsito em aberto por infração cometida por um parente que dirigia. Pelo art. 131, § 2º, do CTB,",
      alternativas: [
        "o licenciamento sai, pois ela não foi a condutora responsável pela infração",
        "o veículo só será considerado licenciado com a multa quitada",
        "ela deve antes transferir a multa ao parente, e só ele pagará o valor devido",
        "basta recorrer à Jari para licenciar, pois a defesa quita o débito do veículo",
        "o licenciamento sai com aviso, pois a multa vinculada não impede a renovação",
      ],
      correta: 1,
      explicacao: "O § 2º exige a quitação de tributos, encargos e multas de trânsito e ambientais vinculados ao veículo, independentemente da responsabilidade pelas infrações.",
      explicacaoErradas:
        "“não foi a condutora” e “não impede” contrariam o parágrafo. “transferir a multa” não resolve o licenciamento. “defesa quita” não está no artigo.",
      pegadinha: "Misturar responsabilidade pela infração com débito do veículo.",
      conhecimento: "Pelo § 3º, o proprietário comprova a aprovação nas inspeções previstas no art. 104.",
    },
    {
      topico: "Licenciamento",
      subassunto: "Mudança de domicílio",
      dificuldade: 4,
      raciocinio: "Veja o art. 130, § 2º.",
      enunciado:
        "Em março, um proprietário muda de domicílio para outro Estado, com o licenciamento do ano em dia na origem. Pelo art. 130, § 2º, do CTB, o licenciamento",
      alternativas: [
        "perde a validade em 30 dias, contados da mudança de domicílio",
        "deve ser refeito em 60 dias no novo Estado, sob pena de remoção do veículo",
        "continua válido durante o exercício",
        "só continua válido se o novo Estado adotar o mesmo final de placa na tabela",
        "fica suspenso até o registro do veículo no novo Estado, sem prazo definido",
      ],
      correta: 2,
      explicacao: "O § 2º diz que, na transferência de residência ou domicílio, é válido, durante o exercício, o licenciamento de origem.",
      explicacaoErradas:
        "“30 dias” e “60 dias” não são prazos desse parágrafo. “mesmo final de placa” e “fica suspenso” criam condições inexistentes.",
      pegadinha: "Confundir a validade do licenciamento com o prazo para novo registro.",
      conhecimento: "O § 1º do art. 130 dispensa do licenciamento o veículo de uso bélico.",
    },
  ],
};
