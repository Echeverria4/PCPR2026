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
    {
      topico: "Habilitação",
      subassunto: "Nota do exame de direção",
      dificuldade: 5,
      raciocinio: "Some os pesos das infrações e compare com o limite de dez pontos.",
      enunciado:
        "No exame de direção veicular, um candidato comete uma infração gravíssima e uma grave, e nenhuma outra. Pelos arts. 45 e 47 da Resolução Contran 1.020/2025, ele",
      alternativas: [
        "é reprovado de imediato, pois a infração gravíssima elimina o candidato sem contar a nota",
        "é aprovado, pois soma dez pontos, e a aprovação exige nota não superior a dez pontos",
        "é reprovado, pois soma onze pontos, já que a infração gravíssima tem peso sete no exame",
        "é aprovado, pois o exame só soma as infrações leves e médias, e as outras ficam com a comissão",
        "é reprovado, pois soma dez pontos, e a aprovação exige nota inferior a dez pontos",
      ],
      correta: 1,
      explicacao:
        "O candidato começa com zero, e cada infração vale um ponto multiplicado pelo peso: seis na gravíssima e quatro na grave (art. 45, § 1º). A soma dá dez, e o art. 47 aprova quem tem nota não superior a dez pontos.",
      explicacaoErradas:
        "“elimina o candidato” não existe na resolução: a gravíssima só pesa seis. “peso sete” troca o peso da gravíssima. “só soma as infrações leves e médias” ignora os pesos quatro e seis. “nota inferior a dez” troca a regra do art. 47, que pede nota não superior a dez: dez pontos ainda aprovam.",
      pegadinha: "Achar que uma gravíssima reprova sozinha ou que dez pontos já reprovam.",
      conhecimento:
        "Os pesos são um (leve), dois (média), quatro (grave) e seis (gravíssima). A decisão final sobre o resultado, inclusive a interrupção do exame, é só da comissão de exame (art. 45, § 2º).",
    },
    {
      topico: "Habilitação",
      subassunto: "Nova tentativa",
      dificuldade: 4,
      raciocinio: "O prazo de espera do CTB foi revogado; a resolução fala em tentativas sem limite.",
      enunciado:
        "Reprovado no exame de direção veicular pela manhã, um candidato quer tentar de novo. Pelo art. 47 da Resolução Contran 1.020/2025, ele",
      alternativas: [
        "só pode repetir depois de quinze dias da divulgação do resultado, pagando nova taxa",
        "pode repetir até três vezes e, se for reprovado em todas, tem de reiniciar todo o processo de habilitação",
        "pode repetir sem limite de tentativas, mas nunca no mesmo dia, e cada tentativa paga nova taxa",
        "pode tentar no mesmo dia, se houver disponibilidade, e a segunda tentativa sai sem taxa adicional",
        "pode repetir uma vez sem taxa, mas a terceira tentativa exige refazer o curso teórico",
      ],
      correta: 3,
      explicacao:
        "O § 2º do art. 47 permite novas avaliações sem limite de tentativas, com a segunda agendada sem cobrança de taxas adicionais, e o § 3º dá direito a nova tentativa no mesmo dia, se houver disponibilidade operacional.",
      explicacaoErradas:
        "“quinze dias” era a regra do art. 151 do CTB, revogado pela Lei 14.071/2020. “até três vezes” e “reiniciar todo o processo” criam um limite que não existe. “nunca no mesmo dia” contraria o § 3º. “refazer o curso teórico” não tem base na resolução.",
      pegadinha: "Aplicar o prazo de quinze dias do antigo art. 151 do CTB.",
      conhecimento:
        "No exame teórico vale o mesmo: tentativas sem limite, e a segunda sem taxas adicionais (art. 34, § 1º).",
    },
    {
      topico: "Habilitação",
      subassunto: "Etapas do processo",
      dificuldade: 5,
      raciocinio: "Lembre a ordem: requerimento, curso teórico e só então o Renach.",
      enunciado:
        "Na lista de etapas do art. 12 da Resolução Contran 1.020/2025, a abertura do formulário Renach, com a coleta dos dados biométricos, vem",
      alternativas: [
        "depois do curso teórico e antes da avaliação psicológica",
        "logo depois do requerimento e antes do curso teórico",
        "depois dos exames de aptidão física e mental e antes do exame teórico",
        "depois do exame teórico, junto com a expedição da Licença de Aprendizagem",
        "depois do exame de direção e antes da expedição da Permissão para Dirigir",
      ],
      correta: 0,
      explicacao:
        "A ordem do art. 12 é: requerimento, curso teórico, abertura do Renach com biometria, avaliação psicológica, exames de aptidão física e mental, exame teórico, aulas práticas, exame de direção, Permissão para Dirigir e, por fim, CNH ou ACC.",
      explicacaoErradas:
        "“antes do curso teórico” inverte as etapas II e III. “depois dos exames de aptidão” põe o Renach depois das etapas IV e V. “depois do exame teórico” e “depois do exame de direção” levam a abertura do Renach para o fim do processo.",
      pegadinha: "Pôr a abertura do Renach antes do curso teórico.",
      conhecimento:
        "É na abertura do Renach que o Detran confere os requisitos do art. 17: ser penalmente imputável, saber ler e escrever, ter documento de identificação e estar inscrito no CPF.",
    },
    {
      topico: "Habilitação",
      subassunto: "Carga horária",
      dificuldade: 4,
      raciocinio: "Um dos cursos ficou sem mínimo; o outro tem um mínimo pequeno.",
      enunciado:
        "Sobre a carga horária da formação do condutor, os arts. 21 e 38 da Resolução Contran 1.020/2025 preveem que",
      alternativas: [
        "o curso teórico tem 45 horas-aula, e as aulas práticas, no mínimo 20 horas-aula",
        "o curso teórico não tem carga mínima, e as aulas práticas também não têm mínimo algum",
        "o curso teórico tem no mínimo duas horas, e as aulas práticas não têm carga mínima definida",
        "as aulas práticas têm no mínimo duas horas, mas só podem ser cumpridas de forma contínua",
        "o curso teórico não tem carga mínima definida, e as aulas práticas têm no mínimo duas horas",
      ],
      correta: 4,
      explicacao:
        "O art. 21 diz que os cursos teóricos não estão sujeitos a carga horária mínima pré-definida, e o art. 38 exige no mínimo duas horas de aulas práticas, contínuas ou fracionadas.",
      explicacaoErradas:
        "“45 horas-aula” e “20 horas-aula” não estão na Resolução 1.020/2025. “também não têm mínimo” ignora as duas horas do art. 38. “o curso teórico tem no mínimo duas horas” inverte os artigos. “só podem ser cumpridas de forma contínua” contraria o art. 38, que aceita aulas fracionadas.",
      pegadinha: "Inverter qual dos dois cursos tem o mínimo de duas horas.",
      conhecimento:
        "Cumprida a carga mínima de aulas práticas e registrada no Renach, o candidato às categorias A ou B pode fazer o exame de direção (arts. 40 e 41, I).",
    },
    {
      topico: "Habilitação",
      subassunto: "Requisitos do candidato",
      dificuldade: 5,
      raciocinio: "Há um requisito que o CTB não lista e uma etapa certa para conferir tudo.",
      enunciado:
        "Pelo art. 17 da Resolução Contran 1.020/2025, além de ser penalmente imputável e saber ler e escrever, o candidato deve ter documento de identificação reconhecido por lei e",
      alternativas: [
        "ter concluído o ensino fundamental, requisitos conferidos no próprio exame teórico",
        "comprovar residência no estado, requisitos conferidos pelo instrutor na primeira aula prática",
        "estar inscrito no CPF, requisitos conferidos na abertura do Renach, com a coleta biométrica",
        "estar inscrito no CPF, requisitos conferidos só na expedição da Permissão para Dirigir",
        "apresentar certidão criminal negativa, requisitos conferidos na avaliação psicológica",
      ],
      correta: 2,
      explicacao:
        "O art. 17 exige ser penalmente imputável, saber ler e escrever, ter documento de identificação reconhecido por lei e estar inscrito no CPF, e o parágrafo único manda o Detran conferir tudo na abertura do Renach, com a coleta dos dados biométricos.",
      explicacaoErradas:
        "“ensino fundamental”, “residência no estado” e “certidão criminal negativa” não estão entre os requisitos. “só na expedição da Permissão” erra a etapa: a conferência é feita na abertura do Renach.",
      pegadinha: "Acertar o CPF e errar a etapa em que os requisitos são conferidos.",
      conhecimento:
        "O CTB, no art. 140, traz três requisitos: ser penalmente imputável, saber ler e escrever e ter carteira de identidade ou equivalente. O CPF entra pela resolução.",
    },
    {
      topico: "Habilitação",
      subassunto: "Exame teórico",
      dificuldade: 5,
      raciocinio: "Confira três números: questões, alternativas e acertos mínimos.",
      enunciado:
        "Pelos arts. 31, 33 e 34 da Resolução Contran 1.020/2025, o exame teórico tem",
      alternativas: [
        "trinta questões de cinco alternativas, e aprova quem acerta pelo menos vinte e uma",
        "trinta questões de quatro alternativas, e aprova quem acerta pelo menos vinte",
        "trinta questões de quatro alternativas, e aprova quem acerta pelo menos vinte e uma",
        "quarenta questões de quatro alternativas, e aprova quem acerta pelo menos vinte e oito",
        "trinta questões de certo ou errado, e aprova quem acerta pelo menos vinte",
      ],
      correta: 1,
      explicacao:
        "O art. 31 prevê múltipla escolha com quatro alternativas e só uma correta, o art. 33, § 1º, fixa trinta questões, e o art. 34 aprova com no mínimo vinte acertos.",
      explicacaoErradas:
        "“cinco alternativas” e “certo ou errado” contrariam o art. 31. “vinte e uma” não é o mínimo do art. 34, que pede vinte acertos. “quarenta questões” contraria o art. 33, § 1º.",
      pegadinha: "Exigir vinte e um acertos, como se a nota mínima fosse 70%.",
      conhecimento:
        "A prova dura no mínimo uma hora, tempo obrigatoriamente dobrado para candidatos com dislexia, TDAH ou TEA (art. 33, § 2º), e é individual, sem consulta (art. 31, § 2º).",
    },
    {
      topico: "Habilitação",
      subassunto: "Aulas práticas",
      dificuldade: 4,
      raciocinio: "Veja quem pode dar a aula e de quem pode ser o carro.",
      enunciado:
        "Aprovado no exame teórico, um candidato quer fazer as aulas práticas no próprio carro, com um instrutor de trânsito autônomo. Pelos arts. 36 e 39 da Resolução Contran 1.020/2025, isso",
      alternativas: [
        "é possível, pois o instrutor pode ser autônomo e o veículo pode ser do próprio candidato",
        "é vedado, pois as aulas práticas só podem ser dadas por instrutor vinculado a autoescola",
        "é possível com o instrutor autônomo, mas o carro tem de ser do instrutor ou de autoescola",
        "é possível no próprio carro, mas só com instrutor de Escola Pública de Trânsito ou do SNT",
        "é vedado, pois a Licença de Aprendizagem só vale em veículo registrado em nome do instrutor",
      ],
      correta: 0,
      explicacao:
        "O art. 36 admite instrutores autônomos, de autoescolas, de Escolas Públicas de Trânsito ou de órgãos do SNT, e o art. 39 permite que o veículo seja do instrutor ou do próprio candidato, observados os requisitos da resolução.",
      explicacaoErradas:
        "“só podem ser dadas por instrutor vinculado a autoescola” ignora o instrutor autônomo do art. 36, I. “tem de ser do instrutor ou de autoescola” e “registrado em nome do instrutor” contrariam o art. 39. “só com instrutor de Escola Pública de Trânsito ou do SNT” deixa de fora o autônomo e o de autoescola.",
      pegadinha: "Achar que a aula prática ainda depende de autoescola.",
      conhecimento:
        "No exame de direção, o veículo pode ser do órgão de trânsito ou do candidato, e até de terceiros (art. 44).",
    },
    {
      topico: "Habilitação",
      subassunto: "Interrupção do exame",
      dificuldade: 4,
      raciocinio: "Exame interrompido não recebe nota.",
      enunciado:
        "No exame de direção, o candidato mostra imperícia reiterada, que impede os comandos básicos de direção, e a comissão interrompe o exame. Pelo art. 46 da Resolução Contran 1.020/2025, o exame",
      alternativas: [
        "conta como reprovação, com a nota das infrações cometidas até a hora da interrupção",
        "conta como reprovação com nota máxima, e a nova tentativa só pode ser feita no dia seguinte",
        "não pode ser interrompido pela comissão, que só avalia o trajeto completo, depois do fim",
        "é considerado não concluído, sem nota, e o motivo da interrupção é registrado pela comissão",
        "é anulado, e o candidato tem de refazer as duas horas de aulas práticas antes de outro exame",
      ],
      correta: 3,
      explicacao:
        "O art. 46 permite à comissão interromper o exame por incapacidade técnica, com imperícia reiterada, ou por instabilidade emocional ou comportamento incompatível. O parágrafo único manda considerar o exame não concluído, sem nota, e registrar o motivo.",
      explicacaoErradas:
        "“conta como reprovação” e “nota máxima” dão nota a um exame que o parágrafo único deixa sem nota. “não pode ser interrompido” contraria o caput do art. 46 e o art. 45, § 2º. “refazer as duas horas” não está na resolução.",
      pegadinha: "Tratar a interrupção como reprovação com nota.",
      conhecimento:
        "A avaliação cabe só à comissão de exame, formada por três membros, um deles pelo menos com habilitação igual ou superior à pretendida (art. 43, § 1º).",
    },
    {
      topico: "Habilitação",
      subassunto: "Licença de Aprendizagem",
      dificuldade: 4,
      raciocinio: "Quem expede, em que meio e até quando vale.",
      enunciado: "Pelo art. 35 da Resolução Contran 1.020/2025, a Licença de Aprendizagem",
      alternativas: [
        "é expedida pelo Detran em papel, antes do exame teórico, para o candidato treinar",
        "é expedida depois do exame teórico e vale por um ano, prorrogável por mais um ano",
        "é expedida pelo órgão máximo da União, só em meio digital, e vale até o fim da formação",
        "permite treinar sozinho, sem instrutor, desde que em via de pouco movimento",
        "é expedida depois do exame de direção e substitui a Permissão para Dirigir nos primeiros meses",
      ],
      correta: 2,
      explicacao:
        "O registro da aprovação no exame teórico gera a Licença de Aprendizagem, expedida pelo órgão máximo executivo de trânsito da União, só em meio digital (§ 2º), com validade até o término do processo de formação, podendo ser cassada (§ 3º). Ela permite aulas práticas com supervisão direta do instrutor.",
      explicacaoErradas:
        "“pelo Detran em papel, antes do exame teórico” erra o órgão, o meio e o momento. “vale por um ano” confunde com a Permissão para Dirigir. “sem instrutor” contraria a supervisão direta exigida no caput. “depois do exame de direção” põe a licença no lugar da Permissão.",
      pegadinha: "Confundir a validade da Licença com a da Permissão para Dirigir.",
      conhecimento:
        "A Licença de Aprendizagem não é documento de habilitação: pelo art. 4º, os documentos de habilitação são a Permissão para Dirigir, a ACC e a CNH.",
    },
    {
      topico: "Habilitação",
      subassunto: "Expedição da Permissão",
      dificuldade: 5,
      raciocinio: "A Permissão sai sozinha, depois do registro da aprovação.",
      enunciado:
        "Um candidato acaba de ser aprovado no exame de direção para a categoria B. Pelos arts. 4º e 48 da Resolução Contran 1.020/2025,",
      alternativas: [
        "ele recebe a Permissão para Dirigir só depois de pedir ao Detran, pois a expedição depende de requerimento",
        "a Licença de Aprendizagem vale como documento de habilitação até ele pedir a Permissão para Dirigir",
        "a Permissão para Dirigir só existe em versão física, produzida e impressa pelo Detran do estado",
        "ele recebe direto a CNH, pois a Permissão para Dirigir deixou de ser documento de habilitação",
        "a Permissão para Dirigir é expedida sem pedido, a partir do registro da aprovação no Renach",
      ],
      correta: 4,
      explicacao:
        "O art. 48 manda expedir a Permissão para Dirigir a partir do registro da aprovação no exame de direção no Renach, sem necessidade de pedido, com versão digital pela União e física pelo Detran. Pelo art. 4º, os documentos de habilitação são a Permissão, a ACC e a CNH.",
      explicacaoErradas:
        "“depende de requerimento” contraria o art. 48. “Licença de Aprendizagem vale como documento de habilitação” contraria o art. 4º, que não a inclui. “só existe em versão física” ignora a versão digital do § 1º. “recebe direto a CNH” ignora a Permissão, documento provisório do art. 4º, § 1º.",
      pegadinha: "Pôr a Licença de Aprendizagem entre os documentos de habilitação.",
      conhecimento:
        "A Permissão vale um ano, e nesse período o condutor não pode cometer infração grave ou gravíssima nem ser reincidente em média (art. 49).",
    },
  ],
};
