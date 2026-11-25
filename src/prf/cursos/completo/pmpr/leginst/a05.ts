import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "leginst-a05",
  resumo: {
    ideia:
      "A Lei 16.544/2010 regula o processo disciplinar da PM e, desde 2024, também do Corpo de Bombeiros do Paraná. É o caminho para decidir se o militar pode continuar na Corporação: Apuração Disciplinar de Licenciamento para a praça com menos de dez anos, Conselho de Disciplina para a praça com mais de dez anos e Conselho de Justificação para o oficial. A lei traz a defesa, os prazos, quem julga, os recursos e a prescrição.",
    itens: [
      {
        termo: "Para que serve (arts. 1º a 3º)",
        faz: "Apura a responsabilidade do militar por infração no serviço ou por ato que afete a honra pessoal, o decoro da classe ou o pundonor militar. Segue os princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência.",
        pista: "Perda do posto e da patente, perda da graduação, exclusão e licenciamento a bem da disciplina só vêm de processo disciplinar e levam à perda do cargo público. Desde 2024, exclusão e licenciamento têm os mesmos efeitos.",
      },
      {
        termo: "Os três processos (art. 4º)",
        faz: "Apuração Disciplinar de Licenciamento: praça com menos de dez anos de serviço na data do fato. Conselho de Disciplina: praça especial ou praça com mais de dez anos. Conselho de Justificação: oficial. Vale para quem está na ativa ou na inatividade.",
        pista: "Com mais de um acusado, pode haver um processo só. No conflito, prevalece o Conselho de Disciplina sobre a apuração, e o Conselho de Justificação sobre os dois.",
      },
      {
        termo: "Quando abre (art. 5º)",
        faz: "Militar no mau comportamento que comete nova falta grave; acusação oficial de procedimento incorreto, conduta irregular ou ato contra a honra; afastamento preventivo do cargo; incapacidade por punições repetidas; condenação por crime doloso a pena privativa de liberdade acima de dois anos, com trânsito em julgado; reprovação no estágio probatório; cadete ou soldado de 2ª classe inapto na formação; partido ou associação contra a democracia.",
        pista: "Quem é reprovado no estágio probatório e já era estável volta ao cargo que ocupava antes.",
      },
      {
        termo: "Quem nomeia e o que pode ser restringido (art. 3º)",
        faz: "O Comandante-Geral nomeia, por portaria, quem vai conduzir o processo. Ele pode afastar o acusado da função, sem atividade operacional até a decisão final, e proibir o uso de uniforme e o porte de arma. No mesmo processo só entram fatos ligados entre si (conexão ou continência).",
      },
      {
        termo: "Ampla defesa (arts. 6º e 7º)",
        faz: "A defesa é só por escrito. O acusado é citado com pelo menos dois dias úteis antes da entrega do libelo, acompanha todos os atos, é ouvido, pede provas e cópias. Pode se defender sozinho ou por procurador; sem advogado, o processo é acompanhado por um oficial indicado pelo acusado ou, na revelia, designado pelo Comandante-Geral.",
        pista: "Súmula Vinculante 5 do STF: a falta de advogado no processo administrativo disciplinar não ofende a Constituição.",
      },
      {
        termo: "Prazos da defesa (art. 8º)",
        faz: "Defesa prévia: cinco dias úteis, depois da entrega do libelo. Defesa final: oito dias úteis, depois da instrução. Com mais de um acusado e defensores diferentes, os prazos são comuns, os autos ficam em cartório e a defesa final tem doze dias úteis.",
        pista: "O presidente pode prorrogar até o dobro, a pedido fundamentado, e esses dias a mais não contam no prazo de conclusão.",
      },
      {
        termo: "Libelo acusatório (arts. 9º e 17)",
        faz: "É a peça escrita da acusação, com o fato bem delimitado, a transgressão por artigos, as agravantes, o rol de testemunhas e o nome e a assinatura dos membros. É entregue na primeira sessão, antes do interrogatório. Cada acusado recebe o seu.",
      },
      {
        termo: "Impedimento e suspeição (art. 10)",
        faz: "Não pode ser nomeado quem fez a acusação, parente do acusado ou do ofendido em linha reta ou até o terceiro grau colateral, quem tem interesse pessoal, quem é inimigo ou amigo íntimo do acusado ou da vítima e quem responde a processo disciplinar ou criminal com denúncia recebida.",
      },
      {
        termo: "Prazo e andamento (arts. 15 a 22)",
        faz: "O processo termina em quarenta dias úteis da instauração, com o relatório. O Comandante-Geral pode prorrogar por até vinte dias úteis ou suspender (sobrestar). As testemunhas da acusação são ouvidas antes das da defesa, e o interrogatório do acusado vem depois da última testemunha.",
        pista: "Dia útil é o dia com expediente na Corporação. Nos casos omissos, vale o Código de Processo Penal Militar.",
      },
      {
        termo: "Quem compõe (arts. 23, 27 e 31)",
        faz: "Apuração: um oficial da ativa preside, com subtenente ou primeiro-sargento de escrivão. Conselho de Disciplina: três membros, presidido pelo mais antigo, no mínimo oficial intermediário. Conselho de Justificação: três oficiais superiores ao acusado ou mais antigos do mesmo posto, presidido no mínimo por oficial superior.",
        pista: "Nos conselhos, o mais moderno é o escrivão, a decisão é por maioria, todo voto é justificado por escrito e o julgamento vem antes do relatório.",
      },
      {
        termo: "Decisão do Comandante-Geral (arts. 26, 30 e 34)",
        faz: "Arquiva, aplica sanção disciplinar, licencia (apuração) ou exclui (Conselho de Disciplina) a bem da disciplina, ou manda ao juízo se houver infração penal. Ele não fica preso ao relatório.",
        pista: "No Conselho de Justificação, ele não tira o oficial: se o considera incapaz, remete o processo à segunda instância da Justiça Militar estadual.",
      },
      {
        termo: "Recursos (arts. 35 a 38)",
        faz: "Primeiro, reconsideração de ato ao Comandante-Geral, em cinco dias úteis, com efeito suspensivo. Depois, recurso disciplinar ao Governador, em dez dias úteis, só com efeito devolutivo. O recurso é individual e trata de um caso específico.",
      },
      {
        termo: "Segunda instância da Justiça Militar (arts. 39 a 41)",
        faz: "A defesa tem cinco dias úteis para se manifestar. Se julgar o militar culpado e incapaz, declara o oficial indigno do oficialato ou com ele incompatível, com perda do posto e da patente, ou determina a perda da graduação da praça. Depois do trânsito em julgado, o Governador edita o ato do oficial e o Comandante-Geral cuida da praça.",
      },
      {
        termo: "Prescrição e temporários (arts. 42 a 49-A)",
        faz: "A prescrição é de seis anos do ato que motivou o processo. Fica suspensa na licença de saúde que impeça o militar de responder e por decisão judicial que pare o processo; é interrompida pela instauração. Prescrito, o fato é registrado nos assentamentos e o processo é arquivado.",
        pista: "Desde 2024, a lei não se aplica ao militar temporário (Corpo de Militares Temporários).",
      },
    ],
  },
  questoes: [
    {
      topico: "Processo disciplinar",
      subassunto: "Tipos de processo",
      dificuldade: 4,
      raciocinio: "Art. 4º da Lei 16.544/2010 (redação da Lei 22.211/2024): I – Apuração Disciplinar de Licenciamento para praça com menos de dez anos de serviço na data do fato; II – Conselho de Disciplina para praça especial ou praça com mais de dez anos; III – Conselho de Justificação para oficial. O § 2º permite juntar acusados, mas é faculdade e pressupõe conexão.",
      enunciado: "Um soldado com oito anos de serviço na data do fato, um subtenente com quinze anos e um capitão vão responder a processo disciplinar, cada um por um fato sem ligação com os outros. Pela Lei 16.544/2010, os processos cabíveis são, respectivamente,",
      alternativas: [
        "Conselho de Disciplina para os dois praças e Conselho de Justificação para o capitão, nessa ordem.",
        "Apuração Disciplinar de Licenciamento para os dois praças e Conselho de Disciplina para o capitão.",
        "Apuração Disciplinar de Licenciamento, Conselho de Disciplina e Conselho de Justificação, em ordem.",
        "Conselho de Justificação para os três, porque basta haver um oficial para atrair o processo maior.",
        "Apuração para o soldado e Conselho de Justificação para o subtenente e para o capitão da Corporação.",
      ],
      correta: 2,
      explicacao:
        "O soldado tem menos de dez anos de serviço: Apuração Disciplinar de Licenciamento. O subtenente tem mais de dez: Conselho de Disciplina. O capitão é oficial: Conselho de Justificação.",
      explicacaoErradas:
        "O soldado não vai a Conselho de Disciplina, porque tem menos de dez anos. O oficial nunca responde a Conselho de Disciplina. Os fatos não têm ligação, então não há motivo para juntar os três. E o subtenente é praça, não vai a Conselho de Justificação.",
      pegadinha: "Olhar só o posto ou a graduação e esquecer o tempo de serviço da praça.",
      conhecimento: "Cadete e aspirante a oficial são praças especiais e respondem a Conselho de Disciplina, qualquer que seja o tempo de serviço.",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Mais de um acusado",
      dificuldade: 5,
      raciocinio: "Art. 4º, § 2º (Lei 22.211/2024): havendo mais de um acusado, por conexão, continência ou economia processual, pode ser instaurado só um dos processos. § 3º: conflito entre apuração e Conselho de Disciplina → Conselho de Disciplina; conflito entre os três → Conselho de Justificação.",
      enunciado: "Um soldado com cinco anos de serviço, um sargento com catorze anos e um tenente cometem juntos a mesma falta. Por conexão, a autoridade decide abrir um só processo disciplinar para os três. Pela Lei 16.544/2010, com as mudanças de 2024, deve ser instaurado",
      alternativas: [
        "um processo para cada um, porque a lei proíbe juntar oficiais e praças no mesmo processo disciplinar.",
        "a Apuração Disciplinar de Licenciamento, porque o soldado é o acusado mais moderno e define o rito.",
        "o Conselho de Disciplina, porque a maioria dos acusados é de praças e só um deles é oficial da ativa.",
        "o Conselho de Disciplina para os dois praças e, depois, outro processo separado só para o tenente.",
        "o Conselho de Justificação, porque no conflito entre os três tipos de processo prevalece o conselho.",
      ],
      correta: 4,
      explicacao:
        "O § 3º, II, do art. 4º diz que, havendo conflito entre a Apuração Disciplinar de Licenciamento, o Conselho de Disciplina e o Conselho de Justificação, será instaurado o Conselho de Justificação.",
      explicacaoErradas:
        "Desde 2024 a lei permite um só processo para acusados diferentes (§ 2º). O mais moderno não define o rito, e a maioria de praças não importa. Separar o tenente contraria a decisão de abrir um só processo.",
      pegadinha: "Achar que oficial e praça nunca podem responder no mesmo processo.",
      conhecimento: "No conflito só entre a apuração e o Conselho de Disciplina, prevalece o Conselho de Disciplina (§ 3º, I).",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Hipóteses de instauração",
      dificuldade: 4,
      raciocinio: "Art. 5º, V: condenado por crime de natureza dolosa a pena privativa de liberdade superior a dois anos, com trânsito em julgado. Inciso I exige mau comportamento e nova falta grave. Denúncia recebida não é hipótese do art. 5º (aparece só como impedimento no art. 10, VI).",
      enunciado: "Pela Lei 16.544/2010, será submetido a processo disciplinar o militar estadual que",
      alternativas: [
        "for condenado por crime doloso a pena privativa de liberdade acima de dois anos, com trânsito em julgado.",
        "for condenado por qualquer crime, mesmo culposo, a uma pena de multa, ainda que caiba recurso da sentença.",
        "tiver denúncia recebida por crime doloso, mesmo antes de qualquer sentença condenatória do juiz.",
        "estiver no bom comportamento e cometer a primeira falta disciplinar leve em toda a sua carreira.",
        "estiver de licença para tratar da própria saúde por mais de seis meses seguidos no mesmo ano.",
      ],
      correta: 0,
      explicacao:
        "O inciso V do art. 5º prevê o processo disciplinar para o militar condenado por crime doloso a pena privativa de liberdade superior a dois anos, com trânsito em julgado.",
      explicacaoErradas:
        "Crime culposo, pena de multa e sentença sem trânsito em julgado não bastam. Denúncia recebida não é hipótese do art. 5º. A falta nova só leva a processo se o militar estiver no mau comportamento e ela for grave. E licença de saúde não é motivo.",
      pegadinha: "Esquecer os três requisitos juntos: crime doloso, mais de dois anos e trânsito em julgado.",
      conhecimento: "Nesse caso, se o militar for julgado incapaz, o processo vai à segunda instância da Justiça Militar estadual.",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Prazos da defesa",
      dificuldade: 5,
      raciocinio: "Art. 8º: defesa prévia em 5 dias úteis e defesa final em 8 dias úteis. § 2º: mais de um acusado com defensores distintos → prazos comuns, autos em cartório, defesa final em 12 dias úteis. § 4º: prorrogação até o dobro, a critério do presidente, a pedido fundamentado.",
      enunciado: "Dois sargentos respondem ao mesmo Conselho de Disciplina, cada um com o seu próprio defensor. Pela Lei 16.544/2010, o prazo para a defesa final",
      alternativas: [
        "é de oito dias úteis para cada um, contados um depois do outro, com os autos entregues a cada defensor.",
        "é de cinco dias úteis, comum aos dois, porque a defesa final segue o mesmo prazo da defesa prévia.",
        "é de dezesseis dias úteis, porque o prazo comum da defesa final é sempre o dobro do prazo individual.",
        "é comum aos dois, de doze dias úteis, com os autos em cartório, e o presidente pode prorrogá-lo.",
        "é de dez dias corridos para cada um, porque com mais de um acusado não se contam os dias úteis.",
      ],
      correta: 3,
      explicacao:
        "O § 2º do art. 8º diz que, com mais de um acusado e defensores diferentes, os prazos são comuns, os autos ficam em cartório e a defesa final tem doze dias úteis. O § 4º permite ao presidente prorrogar até o dobro, a pedido fundamentado.",
      explicacaoErradas:
        "Os prazos não correm um depois do outro: são comuns. Cinco dias úteis é o prazo da defesa prévia. O prazo comum é de doze dias úteis, não o dobro de oito. E a lei conta sempre dias úteis.",
      pegadinha: "Dobrar o prazo de oito dias, quando a lei fixa doze dias úteis para o prazo comum.",
      conhecimento: "Dia útil, para essa lei, é aquele em que há expediente na Corporação (art. 46).",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Defesa do acusado",
      dificuldade: 4,
      raciocinio: "Art. 6º, parágrafo único: só defesa por escrito. Art. 7º, I: citação com antecedência mínima de 2 dias úteis da entrega do libelo. § 1º: sem advogado, acompanha um oficial indicado pelo acusado ou designado pelo Comandante-Geral (revelia ou pedido do presidente). § 3º: revel → notificação ao defensor. Súmula Vinculante 5.",
      enunciado: "Sobre a defesa do acusado na Lei 16.544/2010, assinale a afirmação correta.",
      alternativas: [
        "A defesa pode ser feita de forma oral nas sessões, e o texto escrito só é exigido na defesa final.",
        "Se o acusado não constituir advogado, um oficial indicado por ele acompanha o processo na defesa.",
        "Sem advogado constituído o processo é nulo, porque a falta de defesa técnica ofende a Constituição.",
        "Se o acusado for revel, as notificações para as sessões passam a ser enviadas ao Comandante-Geral.",
        "O acusado deve ser citado com no mínimo dez dias úteis de antecedência da entrega do libelo.",
      ],
      correta: 1,
      explicacao:
        "O § 1º do art. 7º diz que, quando o acusado não constitui advogado, o processo é acompanhado por um oficial indicado por ele. Na revelia, ou a pedido do presidente, o oficial é designado pelo Comandante-Geral.",
      explicacaoErradas:
        "O processo só admite defesa por escrito. A falta de advogado não anula o processo (Súmula Vinculante 5). Na revelia, a notificação vai ao defensor. E a citação é com pelo menos dois dias úteis de antecedência.",
      pegadinha: "Achar que todo processo disciplinar exige advogado sob pena de nulidade.",
      conhecimento: "Súmula Vinculante 5 do STF: a falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Impedimento e suspeição",
      dificuldade: 5,
      raciocinio: "Art. 10: não pode ser nomeado: I – quem formulou a acusação; II – parente consanguíneo ou afim em linha reta ou até o terceiro grau colateral; V – inimigo ou amigo íntimo do acusado ou da vítima; VI – quem responde a processo disciplinar ou está sub judice por flagrante ou denúncia recebida. Tio é colateral de 3º grau; primo é de 4º grau.",
      enunciado: "Para o Conselho de Justificação de um capitão, foram cogitados oficiais mais antigos que ele. Pelo art. 10 da Lei 16.544/2010, pode ser nomeado",
      alternativas: [
        "o major que é tio do acusado, porque o parentesco colateral só impede até o segundo grau.",
        "o tenente-coronel que fez a acusação, porque quem acusa conhece melhor os fatos do caso.",
        "o major que responde a processo criminal com denúncia recebida, mas que ainda está sem condenação.",
        "o major amigo íntimo da vítima, desde que não tenha nenhum laço de amizade com o acusado.",
        "o tenente-coronel primo do acusado, parente colateral de quarto grau, sem outro impedimento.",
      ],
      correta: 4,
      explicacao:
        "O inciso II do art. 10 impede o parente colateral só até o terceiro grau. O primo é parente colateral de quarto grau, então, sem outro impedimento, pode ser nomeado.",
      explicacaoErradas:
        "O tio é parente colateral de terceiro grau, e o impedimento vai até o terceiro. Quem fez a acusação não pode ser nomeado. Quem tem denúncia recebida está impedido. E a amizade íntima com a vítima também impede.",
      pegadinha: "Contar errado o grau: tio é terceiro grau, primo é quarto.",
      conhecimento: "Também não pode ser nomeado o militar com interesse pessoal na decisão nem quem responde a processo disciplinar (art. 10, IV e VI).",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Prazo de conclusão",
      dificuldade: 4,
      raciocinio: "Art. 15: conclusão em 40 dias úteis da instauração, incluída a remessa do relatório. Parágrafo único: o Comandante-Geral, a pedido fundamentado da autoridade processante, pode prorrogar por até 20 dias úteis e determinar o sobrestamento. Art. 8º, § 5º: acréscimos de prazo da defesa ficam fora do cômputo.",
      enunciado: "Sobre o prazo para concluir o processo disciplinar na Lei 16.544/2010, é correto afirmar que ele",
      alternativas: [
        "é de quarenta dias úteis desde a instauração, e o Comandante-Geral pode prorrogá-lo por até vinte.",
        "é de trinta dias corridos desde a citação do acusado, e só o Governador pode prorrogar esse prazo.",
        "é de quarenta dias úteis desde a entrega do libelo, e pode ser prorrogado quantas vezes for preciso.",
        "é de sessenta dias úteis desde a instauração, sem prorrogação, mas pode ser suspenso pelo juiz.",
        "é de quarenta dias úteis, e os dias a mais dados à defesa entram nesse prazo, sem nenhum desconto.",
      ],
      correta: 0,
      explicacao:
        "O art. 15 fixa quarenta dias úteis, contados da instauração e com a remessa do relatório. O Comandante-Geral, a pedido fundamentado, pode prorrogar por até vinte dias úteis ou mandar suspender o processo pelo tempo necessário.",
      explicacaoErradas:
        "O prazo é em dias úteis e conta da instauração, não da citação nem do libelo. Quem prorroga é o Comandante-Geral, por até vinte dias úteis. E os dias a mais dados à defesa ficam fora da conta (art. 8º, § 5º).",
      pegadinha: "Contar o prazo da citação ou do libelo, e não da instauração.",
      conhecimento: "O processo funciona sempre com todos os seus integrantes, na sede da unidade da área do fato ou em outro local escolhido pelo presidente (art. 16).",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Solução no Conselho de Justificação",
      dificuldade: 5,
      raciocinio: "Art. 34: no Conselho de Justificação, o Comandante-Geral arquiva, aplica sanção, remete ao juízo se houver infração penal ou remete à segunda instância da Justiça Militar estadual se considerar o oficial incapaz. Não há exclusão pelo Comandante-Geral. Art. 40, I: a segunda instância declara o oficial indigno ou incompatível, com perda do posto e da patente. Art. 41: o Governador edita o ato depois do trânsito em julgado.",
      enunciado: "Um Conselho de Justificação julga um major culpado e incapaz de permanecer na ativa, e o Comandante-Geral concorda. Pela Lei 16.544/2010, o Comandante-Geral",
      alternativas: [
        "determina a exclusão do major a bem da disciplina, com a perda imediata do posto e da patente.",
        "envia o processo ao Governador, que declara o major indigno do oficialato e edita o ato de perda.",
        "remete o processo à segunda instância da Justiça Militar estadual, que pode declarar o major indigno.",
        "determina o licenciamento a bem da disciplina, porque exclusão e licenciamento têm o mesmo efeito.",
        "fica obrigado a seguir o relatório do conselho e a aplicar ao major a reforma como sanção disciplinar.",
      ],
      correta: 2,
      explicacao:
        "O art. 34, IV, manda remeter o processo à segunda instância da Justiça Militar estadual quando o Comandante-Geral considera o oficial incapaz. É esse órgão que pode declarar o oficial indigno do oficialato ou com ele incompatível, com perda do posto e da patente (art. 40, I).",
      explicacaoErradas:
        "O Comandante-Geral não exclui nem licencia oficial. O Governador só edita o ato depois do trânsito em julgado da decisão judicial (art. 41). E a solução não fica presa ao relatório do conselho.",
      pegadinha: "Achar que o comandante pode tirar o oficial, como faz com a praça no Conselho de Disciplina.",
      conhecimento: "A Constituição Federal (art. 142, § 3º, VI, aplicado aos militares estaduais) exige decisão de tribunal para a perda do posto e da patente do oficial.",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Recursos",
      dificuldade: 5,
      raciocinio: "Art. 36: reconsideração de ato contra a solução do Comandante-Geral, dirigida a ele, em 5 dias úteis. Art. 37: recurso disciplinar ao Governador, em 10 dias úteis, contra a decisão na reconsideração. Art. 38: reconsideração com efeitos devolutivo e suspensivo; recurso disciplinar só devolutivo. Art. 35, parágrafo único: recurso individual.",
      enunciado: "Ao fim de uma Apuração Disciplinar de Licenciamento, o Comandante-Geral licenciou um soldado a bem da disciplina. Pela Lei 16.544/2010, sobre os recursos, é correto afirmar que",
      alternativas: [
        "ele pode recorrer direto ao Governador em dez dias úteis, sem precisar pedir antes a reconsideração de ato.",
        "ele pede reconsideração ao Comandante-Geral em cinco dias úteis e, se mantida, recorre ao Governador.",
        "a reconsideração de ato tem só efeito devolutivo, e o recurso ao Governador suspende o licenciamento.",
        "a reconsideração vai ao Governador, e o recurso disciplinar segue depois para o Tribunal de Justiça.",
        "os soldados licenciados no mesmo caso podem apresentar um único recurso coletivo, assinado por todos.",
      ],
      correta: 1,
      explicacao:
        "A reconsideração de ato vai ao próprio Comandante-Geral, em cinco dias úteis (art. 36). Contra a decisão na reconsideração, cabe recurso disciplinar ao Governador, em dez dias úteis (art. 37, § 1º).",
      explicacaoErradas:
        "O recurso disciplinar é contra a decisão na reconsideração, que vem antes. Os efeitos estão trocados: a reconsideração tem efeito suspensivo, e o recurso disciplinar só devolutivo. A reconsideração vai ao Comandante-Geral. E o recurso é individual.",
      pegadinha: "Trocar os efeitos: o suspensivo é da reconsideração, não do recurso ao Governador.",
      conhecimento: "Se o licenciamento for mantido e o caso for de condenação definitiva por crime doloso, os autos vão à segunda instância da Justiça Militar estadual (art. 37, § 2º).",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Prescrição",
      dificuldade: 4,
      raciocinio: "Art. 42: prescrição em 6 anos da data do ato motivador. Art. 43: suspensa por licença de saúde própria ou de pessoa da família que impeça responder e por decisão judicial que paralise o processo. Art. 44: interrompida pela efetiva instauração. Art. 45: registro nos assentamentos e arquivamento.",
      enunciado: "Sobre a prescrição na Lei 16.544/2010, assinale a afirmação correta.",
      alternativas: [
        "O prazo é de cinco anos, contados do dia em que o comandante tomou conhecimento do ato praticado pelo militar.",
        "As férias regulares do militar suspendem a prescrição enquanto ele estiver afastado do serviço.",
        "Prescrito o fato, ele é apagado da ficha do militar, sem nenhum registro nos seus assentamentos.",
        "O prazo é de seis anos desde o ato motivador e é interrompido pela efetiva instauração do processo.",
        "A instauração do processo apenas suspende a prescrição, que volta a correr de onde tinha parado.",
      ],
      correta: 3,
      explicacao:
        "O art. 42 fixa a prescrição em seis anos, contados do ato que motivou o processo. O art. 44 diz que a efetiva instauração do processo interrompe a prescrição.",
      explicacaoErradas:
        "O prazo é de seis anos e conta do ato, não do conhecimento. Férias não suspendem: só a licença de saúde que impeça responder e a decisão judicial. Prescrito, o fato é registrado nos assentamentos. E a instauração interrompe, não apenas suspende.",
      pegadinha: "Trocar interromper (o prazo recomeça do zero) por suspender (o prazo volta de onde parou).",
      conhecimento: "Extinta a punibilidade pela prescrição, o Comandante-Geral manda registrar o fato e arquivar o processo (art. 45).",
    },
  ],
};
