import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-07",
  resumo: {
    ideia:
      "Registro identifica o veículo, licenciamento autoriza a circulação anual e habilitação autoriza a pessoa. A aula também traz escolares e moto-frete, com requisitos próprios.",
    itens: [
      {
        termo: "Novo CRV",
        faz: "Obrigatório na transferência, em mudança de município, de característica ou de categoria. Na transferência, 30 dias.",
      },
      {
        termo: "Venda",
        faz: "Vencidos os 30 dias do comprador, o vendedor comunica em 60 dias. Se não comunicar, responde solidariamente.",
      },
      {
        termo: "Baixa",
        faz: "Débitos não impedem a baixa do registro, mas impedem novo CRV.",
      },
      {
        termo: "Licenciamento",
        faz: "Anual. Exige débitos quitados e, depois da anotação, atendimento ao recall.",
      },
      {
        termo: "Escolares",
        faz: "Inspeção semestral. Condutor com mais de 21 anos, categoria D, curso e no máximo uma gravíssima em 12 meses.",
      },
      {
        termo: "Moto-frete",
        faz: "Proibido levar combustível ou tóxico. Gás de cozinha e galões de água mineral só com side-car.",
      },
      {
        termo: "Categoria B",
        faz: "Até 3.500 kg e 8 lugares. Elétrico ou híbrido com tração predominantemente elétrica: até 4.250 kg.",
      },
      {
        termo: "Categorias D e E",
        faz: "Mais de 21 anos. Para D, 2 anos na B ou 1 ano na C. Para E, 1 ano na C.",
      },
      {
        termo: "Exame de aptidão",
        faz: "A cada 10 anos abaixo de 50. A cada 5 de 50 a 69. A cada 3 a partir de 70.",
      },
      {
        termo: "Permissão para Dirigir",
        faz: "Vale 1 ano. Grave, gravíssima ou reincidência em média obrigam a recomeçar o processo.",
      },
    ],
    cuidado: "A regra dos 4.250 kg veio da Lei 15.503/2026 e é mais nova que o material do curso.",
  },
  questoes: [
    {
      topico: "Registro",
      subassunto: "Comunicação de venda",
      dificuldade: 5,
      raciocinio: "O prazo do vendedor começa depois do prazo do comprador.",
      enunciado:
        "Um condutor vende o carro, e o comprador não faz a transferência em 30 dias. Depois disso, o vendedor também não comunica a venda ao órgão em 60 dias. Pelo art. 134 do CTB, o vendedor",
      alternativas: [
        "não responde por nada, pois a multa fica só com o comprador",
        "perde a propriedade registrada, por decisão automática do órgão estadual",
        "responde sozinho pelas multas, até a conclusão da transferência do veículo",
        "paga multa própria de venda, sem relação com as infrações do comprador",
        "responde solidariamente pelas penalidades, até a data da comunicação",
      ],
      correta: 4,
      explicacao:
        "Sem a comunicação no prazo, o antigo proprietário se responsabiliza solidariamente pelas penalidades impostas e suas reincidências até a data da comunicação.",
      explicacaoErradas:
        "“não responde por nada” ignora o art. 134. “perde a propriedade” não é o efeito. “responde sozinho” apaga a solidariedade. “multa própria de venda” não existe.",
      pegadinha: "Trocar solidariamente por sozinho.",
      conhecimento: "O comprovante pode ser substituído por documento eletrônico com assinatura eletrônica válida.",
    },
    {
      topico: "Registro",
      subassunto: "Baixa e débitos",
      dificuldade: 5,
      raciocinio: "Baixa e novo certificado têm regras opostas.",
      enunciado: "Um veículo irrecuperável tem multas e tributos em aberto. Pelos arts. 126 e 128 do CTB, esses débitos",
      alternativas: [
        "não impedem a baixa do registro, mas impediriam a expedição de novo CRV",
        "impedem a baixa do registro e também a expedição de novo CRV do veículo",
        "impedem a baixa, mas não a expedição de novo CRV, pois são coisas distintas",
        "não impedem nenhum ato, pois débito e registro correm em processos separados",
        "só impedem a baixa quando a companhia seguradora sucede o proprietário",
      ],
      correta: 0,
      explicacao:
        "O art. 126, § 2º, diz que débitos fiscais e multas não impedem a baixa. O art. 128 veda novo CRV enquanto houver débitos vinculados ao veículo.",
      explicacaoErradas:
        "“impedem a baixa” contraria o art. 126, § 2º. “não impedem nenhum ato” ignora o art. 128. “seguradora” sucede na obrigação, sem mudar a regra dos débitos.",
      pegadinha: "Achar que débito trava tudo.",
      conhecimento: "É vedada a remontagem sobre o mesmo chassi de forma a manter o registro anterior.",
    },
    {
      topico: "Licenciamento",
      subassunto: "Recall",
      dificuldade: 5,
      raciocinio: "Depois da anotação, recall vira condição do licenciamento.",
      enunciado:
        "Um proprietário quitou todos os débitos, mas o certificado de licenciamento do carro traz anotação de recall não atendido. Pelo art. 131 do CTB, o veículo",
      alternativas: [
        "é licenciado, pois a quitação dos débitos é a única condição do licenciamento",
        "é licenciado, mas o proprietário paga uma multa administrativa ao fabricante",
        "fica retido no pátio até o fabricante pagar uma taxa ao órgão estadual",
        "só será licenciado com a prova do atendimento ao chamamento",
        "tem o licenciamento suspenso por 1 ano, até a próxima inspeção veicular",
      ],
      correta: 3,
      explicacao: "O § 5º diz que, depois da inclusão da informação, o veículo só é licenciado com a comprovação do atendimento à campanha de chamamento.",
      explicacaoErradas:
        "“única condição” ignora o § 5º. “multa administrativa ao fabricante”, “taxa” e “suspenso por 1 ano” não constam do artigo.",
      pegadinha: "Olhar só para os débitos.",
      conhecimento: "O Contran pode prorrogar a exigência por falta de peças ou para escalonar o atendimento, pelo § 7º.",
    },
    {
      topico: "Condução de escolares",
      subassunto: "Requisitos do condutor",
      dificuldade: 4,
      raciocinio: "Confira um a um os requisitos do art. 138.",
      enunciado:
        "Uma empresa quer contratar para transporte de escolares um condutor de 24 anos, da categoria D, com curso especializado, que cometeu duas infrações gravíssimas nos últimos 12 meses. Pelo art. 138 do CTB, ele",
      alternativas: [
        "pode conduzir, pois cumpre idade, categoria e curso, os únicos requisitos",
        "pode conduzir, desde que o órgão municipal autorize e a empresa assuma o risco",
        "não pode conduzir, pois cometeu mais de uma gravíssima em 12 meses",
        "não pode conduzir, pois a idade mínima para escolares é de 25 anos completos",
        "não pode conduzir, pois a categoria exigida para escolares é a E, e não a D",
      ],
      correta: 2,
      explicacao: "O art. 138 exige mais de 21 anos, categoria D, curso especializado e, no inciso IV, não ter cometido mais de uma gravíssima nos últimos 12 meses.",
      explicacaoErradas:
        "“os únicos requisitos” esquece o inciso IV. “a empresa assuma o risco” não supre a lei. “25 anos” e “categoria exigida” erram os requisitos.",
      pegadinha: "Ler “nenhuma gravíssima” no lugar de “mais de uma”.",
      conhecimento: "O veículo escolar passa por inspeção semestral, pelo art. 136, II.",
    },
    {
      topico: "Moto-frete",
      subassunto: "Carga proibida",
      dificuldade: 5,
      raciocinio: "A exceção tem uma condição.",
      enunciado:
        "Dois motofretistas são abordados. O primeiro leva galões de água mineral sem side-car. O segundo leva gás de cozinha em side-car. Pelo art. 139-A, § 2º, do CTB,",
      alternativas: [
        "os dois estão irregulares, pois toda carga em galão é proibida nesse serviço",
        "os dois estão regulares, pois essas duas cargas são exceções sem condições",
        "só o segundo está irregular, pois gás de cozinha é um produto inflamável",
        "só o primeiro está regular, pois água mineral não tem nenhuma restrição",
        "só o primeiro está irregular, pois a exceção exige o auxílio de side-car",
      ],
      correta: 4,
      explicacao:
        "O § 2º proíbe combustíveis, inflamáveis, tóxicos e galões, com exceção do gás de cozinha e de galões de água mineral, desde que com side-car.",
      explicacaoErradas:
        "“toda carga em galão” ignora a exceção. “sem condições” esquece o side-car. “gás de cozinha” é justamente a exceção. “nenhuma restrição” contraria o texto.",
      pegadinha: "Lembrar a exceção e esquecer o side-car.",
      conhecimento: "O moto-frete circula com autorização do órgão executivo do estado ou do DF.",
    },
    {
      topico: "Habilitação",
      subassunto: "Categoria B e elétricos",
      dificuldade: 5,
      raciocinio: "Lei nova: há um limite próprio para elétricos.",
      enunciado:
        "Um condutor da categoria B dirige um furgão de propulsão elétrica com peso bruto total de 4.100 kg. Pelo art. 143 do CTB, com a redação da Lei 15.503/2026, ele",
      alternativas: [
        "precisa da categoria C, pois o veículo passa de 3.500 kg de peso bruto total",
        "precisa da categoria D, por ser veículo de propulsão elétrica",
        "pode conduzir, observados eventuais critérios adicionais do Contran",
        "pode conduzir até 6.000 kg, pois a regra do motor-casa vale para elétricos",
        "pode conduzir só se o veículo for híbrido com motor a combustão dominante",
      ],
      correta: 2,
      explicacao:
        "O § 2º-A autoriza a categoria B a conduzir veículo elétrico, ou híbrido com tração predominantemente elétrica, com peso bruto total de até 4.250 kg, observados eventuais critérios do Contran.",
      explicacaoErradas:
        "“precisa da categoria C” ignora o § 2º-A. “categoria D” trata de passageiros. “regra do motor-casa” é do § 2º. “combustão dominante” inverte a tração exigida.",
      pegadinha: "Aplicar os 3.500 kg sem olhar a regra nova.",
      conhecimento: "O limite de 3.500 kg segue valendo para os demais veículos da categoria B.",
    },
    {
      topico: "Habilitação",
      subassunto: "Categoria D",
      dificuldade: 5,
      raciocinio: "O tempo exigido muda conforme a categoria de origem.",
      enunciado:
        "Dois candidatos à categoria D têm 25 anos e nenhuma infração. Um está habilitado há 18 meses na categoria B. O outro, há 18 meses na categoria C. Pelo art. 145 do CTB,",
      alternativas: [
        "os dois atendem ao tempo exigido, pois basta 1 ano em qualquer categoria",
        "só o da categoria B atende, pois a categoria C não conta para a categoria D",
        "nenhum atende, pois são exigidos 2 anos em qualquer categoria anterior",
        "só o da categoria C atende, pois a B exigiria 2 anos",
        "os dois atendem, pois o tempo de habilitação deixou de ser exigido em lei",
      ],
      correta: 3,
      explicacao: "Para a categoria D, o art. 145, II, a, pede no mínimo 2 anos na B ou 1 ano na C.",
      explicacaoErradas:
        "“basta 1 ano em qualquer categoria” ignora os 2 anos da B. “não conta” e “2 anos em qualquer categoria” esquecem o ano na C. “deixou de ser exigido” é falso.",
      pegadinha: "Usar o mesmo prazo para as duas origens.",
      conhecimento: "Para a categoria E, são exigidos no mínimo 1 ano na C e os demais requisitos do artigo.",
    },
    {
      topico: "Habilitação",
      subassunto: "Exame de aptidão",
      dificuldade: 4,
      raciocinio: "As faixas viram em 50 e em 70 anos.",
      enunciado:
        "Três condutores fazem hoje o exame de aptidão física e mental, com 49, 52 e 71 anos. Pelo art. 147, § 2º, do CTB, os prazos de renovação são, nessa ordem, de",
      alternativas: ["10, 10 e 5 anos", "10, 5 e 3 anos", "5, 5 e 3 anos", "10, 5 e 5 anos", "5, 3 e 3 anos"],
      correta: 1,
      explicacao: "São 10 anos abaixo de 50, 5 anos de 50 até menos de 70, e 3 anos a partir de 70.",
      explicacaoErradas:
        "“10, 10 e 5” atrasa as faixas. “5, 5 e 3” encurta o primeiro prazo. “10, 5 e 5” esquece os 3 anos. “5, 3 e 3” erra as duas primeiras faixas.",
      pegadinha: "Decorar as faixas antigas da lei.",
      conhecimento: "A validade da CNH depende do prazo do exame de aptidão, pelo art. 159, § 10.",
    },
    {
      topico: "Habilitação",
      subassunto: "Permissão para Dirigir",
      dificuldade: 4,
      raciocinio: "Duas médias são reincidência em média.",
      enunciado:
        "Ao fim do ano da Permissão para Dirigir, um condutor registra uma infração média e uma leve. Outro registra duas infrações médias. Pelo art. 148, § 3º, do CTB,",
      alternativas: [
        "só o primeiro recebe a CNH, pois o segundo é reincidente em média",
        "os dois recebem a CNH, pois nenhum cometeu infração grave ou gravíssima",
        "nenhum recebe a CNH, pois qualquer infração impede a expedição",
        "só o segundo recebe a CNH, pois a infração leve impede a sua expedição",
        "os dois recebem a CNH, mas com nova Permissão válida por mais um ano",
      ],
      correta: 0,
      explicacao:
        "A CNH é conferida a quem não cometeu infração grave ou gravíssima e não é reincidente em média. O segundo condutor reincidiu, e o primeiro não.",
      explicacaoErradas:
        "“nenhum cometeu infração grave” esquece a reincidência. “qualquer infração” amplia a regra. “a infração leve” não impede. “nova Permissão” não existe: o processo recomeça.",
      pegadinha: "Olhar só para grave e gravíssima.",
      conhecimento: "Quem não obtém a CNH reinicia todo o processo de habilitação, pelo § 4º.",
    },
    {
      topico: "Habilitação",
      subassunto: "Porte da CNH",
      dificuldade: 4,
      raciocinio: "A dispensa depende do acesso ao sistema.",
      enunciado:
        "Na abordagem, o condutor diz que esqueceu a CNH em casa, e a equipe acessa o sistema e confirma que ele está habilitado. Pelo art. 159 do CTB,",
      alternativas: [
        "cabe autuação por falta de porte, pois o acesso ao sistema não supre o documento",
        "o porte é dispensado, pois o sistema permite verificar a habilitação",
        "o condutor deve ser levado à delegacia, para provar a identidade por fotografia",
        "o veículo fica retido até alguém trazer o documento físico original ao local",
        "o porte só é dispensado para quem tem a CNH digital instalada no próprio celular",
      ],
      correta: 1,
      explicacao: "O § 1º-A dispensa o porte quando, na fiscalização, é possível acessar o sistema informatizado para verificar se o condutor está habilitado.",
      explicacaoErradas:
        "“cabe autuação” contraria o § 1º-A. “delegacia” e “veículo fica retido” não têm base nesse caso. “só é dispensado” para CNH digital cria uma condição que não existe.",
      pegadinha: "Exigir documento quando o sistema já responde.",
      conhecimento: "Pelo inciso III, a CNH tem fé pública e equivale a documento de identidade em todo o país.",
    },
  ],
};
