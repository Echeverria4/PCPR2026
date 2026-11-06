import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-10",
  resumo: {
    ideia:
      "A licitação segue fases: preparatória, edital, propostas e lances, julgamento, habilitação, recursos e homologação. A regra é julgar antes de habilitar, e a forma eletrônica é a preferida.",
    itens: [
      {
        termo: "Inversão como regra",
        faz: "O julgamento vem antes da habilitação. Só por ato motivado a habilitação vem antes.",
      },
      {
        termo: "Prazos do edital",
        faz: "Bens por menor preço ou maior desconto: 8 dias úteis. Serviços e obras comuns: 10. Especiais: 25. Maior lance: 15. Técnica e preço: 35.",
      },
      {
        termo: "Modos de disputa",
        faz: "Aberto, fechado ou combinados. Fechado isolado é vedado em menor preço e maior desconto; aberto é vedado em técnica e preço.",
      },
      {
        termo: "Desclassificação",
        faz: "Vícios insanáveis, desacordo com o edital, preço inexequível ou acima do orçamento estimado.",
      },
      {
        termo: "Obras de engenharia",
        faz: "Abaixo de 75% do orçado: inexequível. Abaixo de 85%: garantia adicional igual à diferença.",
      },
      {
        termo: "Desempate",
        faz: "Disputa final, desempenho contratual prévio, equidade entre homens e mulheres e programa de integridade. O sorteio saiu da lei.",
      },
      {
        termo: "ME e EPP",
        faz: "Empate ficto até 10% acima da melhor oferta, ou 5% no pregão. A pequena empresa pode cobrir a proposta vencedora.",
      },
      {
        termo: "Negociação",
        faz: "Com o primeiro colocado e, se ele for desclassificado por ficar acima do preço máximo, com os demais, na ordem.",
      },
      {
        termo: "Impugnação",
        faz: "Qualquer pessoa, até 3 dias úteis antes da abertura. A resposta sai em até 3 dias úteis.",
      },
      {
        termo: "Recursos",
        faz: "Intenção imediata, razões em 3 dias úteis e apreciação em fase única.",
      },
      {
        termo: "Encerramento",
        faz: "A autoridade superior devolve para sanear, revoga, anula, ou adjudica e homologa.",
        pista: "Revogar exige fato superveniente comprovado e ouvir antes os interessados.",
      },
    ],
    cuidado:
      "A negociação não é sigilosa: depois de concluída, o resultado é divulgado a todos os licitantes e vai aos autos.",
  },
  questoes: [
    {
      topico: "Prazos do edital",
      subassunto: "Art. 55",
      dificuldade: 4,
      raciocinio: "Bem por preço, 8. Serviço comum por preço, 10. Técnica e preço, 35.",
      enunciado:
        "Um órgão publica três editais: compra de bens por menor preço, serviço comum por maior desconto e contratação por técnica e preço. Pelo art. 55 da Lei 14.133, os prazos mínimos para apresentação de propostas são, respectivamente, de",
      alternativas: [
        "8, 8 e 15 dias úteis",
        "10, 10 e 35 dias úteis",
        "8, 15 e 25 dias úteis",
        "8, 10 e 35 dias úteis",
        "15, 10 e 8 dias úteis",
      ],
      correta: 3,
      explicacao:
        "Para bens por menor preço ou maior desconto, são 8 dias úteis (art. 55, I, “a”). Para serviços comuns pelos mesmos critérios, são 10 (II, “a”). Com técnica e preço, o inciso IV fixa 35 dias úteis.",
      explicacaoErradas:
        "“8, 8 e 15” trata o serviço comum como bem e usa o prazo do maior lance. “10, 10 e 35” trata o bem por menor preço como serviço. “8, 15 e 25” usa prazos de hipóteses diferentes. “15, 10 e 8” embaralha os prazos.",
      pegadinha: "Todos os prazos são em dias úteis, contados da divulgação do edital.",
      conhecimento:
        "Serviços e obras especiais por menor preço ou maior desconto têm 25 dias úteis, a contratação integrada tem 60, e o maior lance tem 15.",
    },
    {
      topico: "Modos de disputa",
      subassunto: "Vedações do art. 56",
      dificuldade: 5,
      raciocinio: "Preço pede lance; técnica e preço não combina com lance aberto.",
      enunciado:
        "O edital de uma licitação por menor preço prevê só o modo de disputa fechado, e o de outra, por técnica e preço, prevê só o modo aberto. Pelo art. 56 da Lei 14.133,",
      alternativas: [
        "as duas escolhas são vedadas, cada uma por uma regra própria do artigo",
        "as duas escolhas são válidas, pois o modo de disputa fica a critério do edital",
        "só a primeira é vedada, pois técnica e preço admite qualquer modo de disputa",
        "só a segunda é vedada, pois o modo fechado combina com qualquer critério",
        "só vale o modo aberto nos dois casos, que é o único permitido em lei",
      ],
      correta: 0,
      explicacao:
        "O § 1º do art. 56 veda o modo fechado isolado nos critérios de menor preço ou maior desconto. O § 2º veda o modo aberto no critério de técnica e preço.",
      explicacaoErradas:
        "“As duas escolhas são válidas” ignora os §§ 1º e 2º. “Só a primeira” esquece o § 2º. “Só a segunda” esquece o § 1º. “Só vale o modo aberto” contraria o § 2º e a existência do modo fechado.",
      pegadinha: "No menor preço, o fechado só cabe combinado com o aberto.",
      conhecimento:
        "Em disputa aberta, a lei admite lances intermediários e, com diferença de pelo menos 5% entre a melhor e a segunda proposta, o reinício da disputa para definir as demais colocações.",
    },
    {
      topico: "Inexequibilidade",
      subassunto: "Obras: 75% e 85%",
      dificuldade: 5,
      raciocinio: "Faça a conta das duas propostas sobre o valor orçado.",
      enunciado:
        "Em licitação de obra orçada pela Administração em R$ 10 milhões, a proposta A é de R$ 7,2 milhões e a proposta B, de R$ 8 milhões. Pelo texto do art. 59, §§ 4º e 5º, da Lei 14.133,",
      alternativas: [
        "as duas propostas são inexequíveis, pois ficam abaixo de 85% do orçado",
        "as duas são aceitas, e só a proposta A exige garantia adicional de R$ 2,8 milhões",
        "a proposta A exige garantia adicional, e a B é aceita sem nenhuma exigência a mais",
        "a proposta B é inexequível, pois ficou mais de 15% abaixo do valor orçado",
        "A é inexequível, e B, se vencer, presta garantia adicional de R$ 2 milhões",
      ],
      correta: 4,
      explicacao:
        "A proposta A corresponde a 72% do orçado, abaixo dos 75% do § 4º. A proposta B corresponde a 80%: não é inexequível, mas fica abaixo dos 85% do § 5º, e a garantia adicional é a diferença entre o orçado e a proposta, ou seja, R$ 2 milhões.",
      explicacaoErradas:
        "“Abaixo de 85%” confunde o gatilho da garantia com o da inexequibilidade. “As duas são aceitas” ignora os 75%. “A exige garantia adicional” troca as propostas. “A proposta B é inexequível” aplica à B a regra dos 85%, que só gera garantia.",
      pegadinha: "75% derruba a proposta; 85% só pede garantia.",
      conhecimento:
        "O TCU tem tratado os 75% como presunção relativa: o licitante pode demonstrar que sua proposta é viável.",
    },
    {
      topico: "Desempate",
      subassunto: "Ordem do art. 60",
      dificuldade: 4,
      raciocinio: "Primeiro nova proposta, depois histórico, depois equidade e integridade.",
      enunciado:
        "Duas propostas empatam em uma licitação federal. Segundo o art. 60 da Lei 14.133, a ordem dos critérios de desempate é",
      alternativas: [
        "sorteio, desempenho contratual, programa de integridade e disputa final",
        "disputa final, programa de integridade, desempenho contratual e equidade entre homens e mulheres",
        "disputa final, desempenho contratual, equidade entre homens e mulheres e programa de integridade",
        "desempenho contratual, disputa final, programa de integridade e sorteio",
        "equidade entre homens e mulheres, disputa final, sorteio e desempenho contratual",
      ],
      correta: 2,
      explicacao:
        "O art. 60 lista, nesta ordem: disputa final, avaliação do desempenho contratual prévio, ações de equidade entre homens e mulheres no ambiente de trabalho e programa de integridade.",
      explicacaoErradas:
        "As opções com “sorteio” usam um critério que saiu da lei. “Disputa final, programa de integridade” embaralha a ordem do art. 60, pois a integridade é o último critério.",
      pegadinha: "Sorteio existia na Lei 8.666, mas não aparece na Lei 14.133.",
      conhecimento:
        "Persistindo o empate, o § 1º prevê preferências sucessivas, como localização e empresas que invistam em pesquisa e tecnologia no País.",
    },
    {
      topico: "Microempresas",
      subassunto: "Empate ficto",
      dificuldade: 5,
      raciocinio: "No pregão, o limite é 5%: calcule cada oferta sobre a melhor.",
      enunciado:
        "Em um pregão, a melhor proposta, de empresa de grande porte, é de R$ 100.000,00. Uma microempresa ofertou R$ 104.000,00 e outra, R$ 108.000,00. Pela Lei Complementar 123/2006, aplicável às licitações,",
      alternativas: [
        "as duas estão em empate ficto, pois o limite é de 10% em qualquer modalidade",
        "só a de R$ 104.000,00 está em empate ficto e pode cobrir a melhor oferta",
        "nenhuma está em empate ficto, porque o benefício exige valores iguais",
        "só a de R$ 104.000,00 está em empate e vence de imediato, sem nova proposta",
        "as duas estão em empate ficto, e a vencedora sai de sorteio entre elas",
      ],
      correta: 1,
      explicacao:
        "No pregão, o empate ficto vai até 5% acima do melhor preço (art. 44, § 2º). R$ 104.000,00 está dentro, e R$ 108.000,00 está fora. A microempresa pode apresentar proposta inferior à vencedora para ficar com o objeto (art. 45, I).",
      explicacaoErradas:
        "“Limite é de 10% em qualquer modalidade” esquece a regra do pregão. “Exige valores iguais” ignora que o empate é ficto. “Vence de imediato” esquece que ela precisa cobrir a melhor oferta. “Sorteio” não se aplica, pois só uma está na faixa.",
      pegadinha: "Estar no empate ficto não basta: é preciso oferecer preço menor.",
      conhecimento:
        "O art. 60, § 2º, da Lei 14.133 mantém a aplicação do art. 44 da Lei Complementar 123/2006.",
    },
    {
      topico: "Negociação",
      subassunto: "Art. 61",
      dificuldade: 4,
      raciocinio: "A ordem da classificação continua mandando.",
      enunciado:
        "Definido o resultado do julgamento, o primeiro colocado continua acima do preço máximo mesmo depois de negociar e acaba desclassificado. Pelo art. 61 da Lei 14.133, a Administração",
      alternativas: [
        "pode negociar com os demais licitantes, na ordem da classificação inicial",
        "deve revogar a licitação, pois a negociação só cabe com o primeiro colocado",
        "pode escolher o licitante com quem prefere negociar, desde que justifique",
        "deve abrir nova fase de lances, agora só entre os três melhores colocados",
        "pode negociar em sigilo com qualquer licitante, divulgando só o preço final",
      ],
      correta: 0,
      explicacao:
        "O art. 61, § 1º, permite negociar com os demais licitantes, segundo a ordem de classificação inicial, quando o primeiro colocado é desclassificado por sua proposta permanecer acima do preço máximo.",
      explicacaoErradas:
        "“Só cabe com o primeiro colocado” ignora o § 1º. “Pode escolher” rompe a ordem de classificação. “Nova fase de lances” não está no artigo. “Em sigilo” contraria o § 2º, que manda divulgar o resultado a todos.",
      pegadinha: "A negociação é conduzida pelo agente ou pela comissão de contratação, com resultado público.",
      conhecimento:
        "Depois de concluída, a negociação tem seu resultado divulgado a todos os licitantes e anexado aos autos do processo.",
    },
    {
      topico: "Impugnação do edital",
      subassunto: "Art. 164",
      dificuldade: 4,
      raciocinio: "Qualquer pessoa, até 3 dias úteis antes.",
      enunciado:
        "Um cidadão sem nenhuma relação com o objeto quer impugnar um edital por irregularidade na aplicação da Lei 14.133. Pelo art. 164 dessa lei,",
      alternativas: [
        "só licitante interessado pode impugnar, até a abertura da sessão pública",
        "ele pode impugnar até 5 dias úteis antes, pois não participará da disputa",
        "só pode impugnar quem demonstrar prejuízo direto, até 8 dias úteis antes",
        "ele pode impugnar a qualquer tempo, porque a ilegalidade nunca preclui",
        "ele é parte legítima e deve protocolar até 3 dias úteis antes da abertura",
      ],
      correta: 4,
      explicacao:
        "Qualquer pessoa é parte legítima para impugnar o edital ou pedir esclarecimento, com protocolo até 3 dias úteis antes da data de abertura do certame.",
      explicacaoErradas:
        "“Só licitante interessado” e “quem demonstrar prejuízo direto” contrariam o “qualquer pessoa”. “5 dias úteis” e “8 dias úteis” trocam o prazo. “A qualquer tempo” ignora o limite do artigo.",
      pegadinha: "Na lei antiga falava-se em “cidadão”; na nova, em “qualquer pessoa”.",
      conhecimento:
        "A resposta sai em sítio eletrônico oficial em até 3 dias úteis, limitada ao último dia útil antes da abertura do certame.",
    },
    {
      topico: "Recursos",
      subassunto: "Art. 165",
      dificuldade: 5,
      raciocinio: "Duas etapas: avisar logo, fundamentar depois.",
      enunciado:
        "Um licitante quer recorrer da decisão que o inabilitou. Pelo art. 165 da Lei 14.133, ele",
      alternativas: [
        "tem 5 dias úteis para recorrer, sem precisar avisar antes a comissão",
        "deve apresentar na hora todas as razões, sob pena de preclusão do recurso",
        "tem 3 dias úteis para manifestar a intenção e mais 8 para apresentar as razões",
        "deve manifestar a intenção de imediato e tem 3 dias úteis para as razões",
        "pode recorrer em separado de cada fase, em duas etapas recursais distintas",
      ],
      correta: 3,
      explicacao:
        "O § 1º, I, exige a intenção de recorrer de imediato, sob pena de preclusão, e o prazo de 3 dias úteis para as razões começa na intimação ou na lavratura da ata. A apreciação ocorre em fase única (§ 1º, II).",
      explicacaoErradas:
        "“5 dias úteis” e “sem precisar avisar” contrariam o § 1º, I. “Na hora todas as razões” mistura a intenção com as razões. “Mais 8” inventa um prazo. “Duas etapas recursais” era a sistemática da Lei 8.666.",
      pegadinha: "Só a intenção é imediata; as razões vêm depois.",
      conhecimento:
        "Os demais licitantes têm igual prazo para contrarrazões, e o acolhimento do recurso só invalida o ato que não puder ser aproveitado.",
    },
    {
      topico: "Encerramento da licitação",
      subassunto: "Revogação",
      dificuldade: 5,
      raciocinio: "Revogar é conveniência; exige fato novo comprovado e oitiva.",
      enunciado:
        "Exauridos os recursos, a autoridade superior conclui que a licitação deixou de convir à Administração, por fato novo e comprovado. Pelo art. 71 da Lei 14.133, ela",
      alternativas: [
        "deve anular a licitação de ofício, sem ouvir os interessados",
        "pode revogar, assegurada a prévia manifestação dos interessados",
        "só pode revogar por ordem judicial, pois a adjudicação já é direito do vencedor",
        "deve adjudicar e homologar, pois fato novo não interfere no procedimento encerrado",
        "pode revogar sem motivar, porque a revogação é ato discricionário livre",
      ],
      correta: 1,
      explicacao:
        "O art. 71, II, permite revogar por conveniência e oportunidade. O § 2º exige fato superveniente devidamente comprovado, e o § 3º assegura a prévia manifestação dos interessados.",
      explicacaoErradas:
        "“Anular” é resposta a ilegalidade insanável, que não é o caso, e o § 3º também exige ouvir antes. “Ordem judicial” e “já é direito do vencedor” não têm base no artigo. “Deve adjudicar” ignora o inciso II. “Sem motivar” contraria o § 2º.",
      pegadinha: "Revogação depende de fato novo, e anulação depende de ilegalidade.",
      conhecimento:
        "Ao anular, a autoridade indica os atos com vícios insanáveis, torna sem efeito os que deles dependem e dá início à apuração de responsabilidades.",
    },
  ],
};
