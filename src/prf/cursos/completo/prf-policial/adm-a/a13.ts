import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-13",
  resumo: {
    ideia:
      "Esta parte da Lei 8.112 trata do que o servidor recebe e de quando pode se ausentar. Quase tudo depende de prazos e da pergunta certa: com ou sem remuneração? Ordem do estudo: remuneração, faltas e descontos, vantagens (indenizações, gratificações e adicionais), férias, licenças, afastamentos, concessões, tempo de serviço e direito de petição.",
    itens: [
      {
        parte: "1. Vencimento e remuneração",
        termo: "Vencimento e remuneração",
        faz: "Vencimento é a base do cargo. Remuneração é o vencimento mais as vantagens permanentes. Vencimento é a retribuição em dinheiro pelo exercício do cargo, com valor fixado em lei (art. 40). Remuneração é o vencimento acrescido das vantagens pecuniárias permanentes estabelecidas em lei (art. 41).",
        pista: "Ficam fora da remuneração as parcelas transitórias, como as indenizações (diárias, por exemplo). Provento é o que recebe o aposentado. É proibido prestar serviço gratuito, salvo nos casos previstos em lei (art. 4º).",
      },
      {
        termo: "Garantias da remuneração (art. 41, §§ 3º a 5º)",
        faz: "1) Irredutibilidade: o vencimento do cargo efetivo, somado às vantagens de caráter permanente, não pode ser reduzido (§ 3º). 2) Isonomia: cargos de atribuições iguais ou parecidas, no mesmo Poder ou entre os três Poderes, têm vencimentos iguais, ressalvadas as vantagens de caráter individual e as ligadas à natureza ou ao local do trabalho (§ 4º). 3) Nenhum servidor recebe remuneração menor que o salário mínimo (§ 5º).",
        pista: "Salário mínimo: vale para a remuneração total, e não para o vencimento-base (Súmula Vinculante 16, sobre os arts. 7º, IV, e 39, § 3º, da CF, na redação da EC 19/1998). O abono pago só para completar o mínimo não serve de base para calcular outras vantagens (STF, RE 439.360 AgR). Irredutibilidade: para o STF, protege o valor total; uma parcela pode mudar ou acabar se o total for mantido (RE 596.542).",
      },
      {
        termo: "Remuneração só por lei",
        faz: "A remuneração do servidor é fixada ou alterada só por lei específica (CF, art. 37, X). Por isso vencimentos e vantagens não podem ser objeto de convenção ou acordo coletivo de trabalho (STF, ADI 559; Súmula 679 do STF).",
      },
      {
        parte: "2. Faltas, descontos e reposição",
        termo: "Faltas e atrasos (art. 44)",
        faz: "O servidor perde: 1) a remuneração do dia em que faltar ao serviço sem motivo justificado; 2) a parcela proporcional da remuneração diária pelos atrasos, ausências justificadas (fora as concessões do art. 97) e saídas antecipadas, salvo se compensar o horário até o mês seguinte, como a chefia imediata definir.",
        pista: "Faltas justificadas por caso fortuito ou força maior podem ser compensadas, a critério da chefia imediata, e então contam como efetivo exercício (parágrafo único).",
      },
      {
        termo: "Descontos (arts. 45 e 48)",
        faz: "Nenhum desconto incide sobre a remuneração ou o provento, salvo por imposição legal ou por mandado judicial (art. 45). O desconto em favor de terceiros (consignação em folha) depende de autorização do servidor; hoje essa regra está na Lei 14.509/2022, que revogou os §§ 1º e 2º do art. 45.",
        pista: "Vencimento, remuneração e provento não podem sofrer arresto, sequestro ou penhora, salvo para pagar pensão alimentícia fixada por decisão judicial (art. 48).",
      },
      {
        termo: "Reposição ao erário",
        faz: "Pagamento em até 30 dias, com parcelas de no mínimo 10% da remuneração. O servidor ativo, o aposentado ou o pensionista é avisado antes e tem até 30 dias para pagar; a pedido, pode parcelar (art. 46).",
        pista: "Cada parcela não pode ser menor que 10% da remuneração, do provento ou da pensão (§ 1º). Se o pagamento indevido aconteceu no mês anterior ao da folha, a reposição é feita de uma vez, imediatamente (§ 2º). Valores recebidos por liminar, tutela antecipada ou sentença depois revogada ou rescindida são devolvidos com atualização até a data da reposição (§ 3º).",
      },
      {
        termo: "Devolver ou não o que recebeu",
        faz: "Pago por erro da Administração ao interpretar a lei, a servidor de boa-fé: não há devolução (STJ, REsp 1.244.182; Súmula AGU 34; Súmula TCU 249, que exige erro escusável). Pago por erro operacional ou de cálculo: há devolução, salvo se o servidor provar boa-fé objetiva, isto é, que não tinha como perceber o erro (STJ, Tema 1009).",
        pista: "Decisão judicial provisória (liminar ou tutela) depois revogada: o servidor devolve, porque sabia que a decisão era precária (STJ, EAREsp 58.820). Decisão definitiva, já transitada em julgado, depois rescindida: não há devolução (STJ, AgRg no AREsp 2.447; no mesmo sentido, AgRg no AREsp 463.279).",
      },
      {
        termo: "Débito de quem sai do serviço (art. 47)",
        faz: "O servidor em débito com o erário que for demitido, exonerado ou tiver a aposentadoria ou a disponibilidade cassada tem 60 dias para pagar. Se não pagar, o débito é inscrito em dívida ativa (parágrafo único).",
      },
      {
        parte: "3. Vantagens",
        termo: "Vantagens (arts. 49 e 50)",
        faz: "Além do vencimento, o servidor pode receber três tipos de vantagens: indenizações, gratificações e adicionais. As indenizações não se incorporam ao vencimento ou ao provento para nenhum efeito (§ 1º). As gratificações e os adicionais se incorporam só nos casos e condições da lei (§ 2º).",
        pista: "As vantagens não são somadas nem acumuladas para calcular acréscimos posteriores com o mesmo título ou o mesmo fundamento (art. 50). Isso evita o “efeito cascata”, em que uma vantagem é calculada sobre outra.",
      },
      {
        termo: "Indenizações",
        faz: "Ajuda de custo, diárias, transporte e auxílio-moradia. Não se incorporam ao vencimento. São as quatro do art. 51 e servem para cobrir gastos que o servidor tem por causa do serviço.",
        pista: "Os valores e as condições de concessão são fixados em regulamento (art. 52).",
      },
      {
        parte: "4. Ajuda de custo, diárias, transporte e auxílio-moradia",
        termo: "Ajuda de custo e diárias",
        faz: "Ajuda de custo: mudança permanente de domicílio. Diária: afastamento eventual, pela metade sem pernoite.",
        pista: "Não confunda: a ajuda de custo é para quem muda de sede de vez; a diária é para quem viaja a serviço e volta.",
      },
      {
        termo: "Ajuda de custo (arts. 53 e 54)",
        faz: "Compensa as despesas de instalação do servidor que, no interesse do serviço, passa a ter exercício em nova sede, com mudança de domicílio em caráter permanente. É proibido pagar duas vezes, a qualquer tempo, se o cônjuge ou companheiro que também é servidor for ter exercício na mesma sede.",
        pista: "Cobre também o transporte do servidor e da família, com passagem, bagagem e bens pessoais (§ 1º). Se o servidor morrer na nova sede, a família recebe ajuda de custo e transporte para voltar à localidade de origem, dentro de 1 ano (§ 2º). Valor máximo: 3 meses de remuneração (art. 54).",
      },
      {
        termo: "Quando não cabe ajuda de custo",
        faz: "1) Na remoção a pedido do servidor (art. 53, § 3º, que se refere aos casos do art. 36, parágrafo único, II e III); 2) ao servidor que se afasta do cargo, ou volta a ele, por causa de mandato eletivo (art. 55).",
        pista: "Cabe ajuda de custo a quem não é servidor da União e é nomeado para cargo em comissão com mudança de domicílio (art. 56). Na cessão para cargo em comissão ou função de confiança, quem paga é o órgão cessionário (parágrafo único). Quem não se apresenta na nova sede em 30 dias, sem justa causa, devolve a ajuda de custo (art. 57).",
      },
      {
        termo: "Diárias (arts. 58 e 59)",
        faz: "O servidor que, a serviço, se afasta da sede em caráter eventual ou transitório, para outro ponto do País ou para o exterior, recebe passagens e diárias para cobrir pousada, alimentação e locomoção urbana. A diária é paga por dia de afastamento e cai pela metade quando não há pernoite fora da sede ou quando a União já paga essas despesas por outro meio (art. 58, § 1º).",
        pista: "Não recebe diária: quem se desloca por exigência permanente do cargo (§ 2º); quem se desloca dentro da mesma região metropolitana, aglomeração urbana ou microrregião formada por municípios vizinhos, ou em área de controle integrado com países vizinhos, salvo se houver pernoite fora da sede (§ 3º). Recebeu e não viajou: devolve tudo em 5 dias. Voltou antes: devolve o excedente em 5 dias (art. 59).",
      },
      {
        termo: "Indenização de transporte (art. 60)",
        faz: "É paga ao servidor que gasta com meio próprio de locomoção (o próprio veículo, por exemplo) para fazer serviços externos exigidos pelas atribuições do cargo, conforme o regulamento.",
      },
      {
        termo: "Auxílio-moradia (art. 60-A)",
        faz: "É o ressarcimento das despesas comprovadas com aluguel de moradia ou hospedagem em hotel, pago em até 1 mês depois da comprovação. Foi incluído na Lei 8.112 pela Lei 11.355/2006, para quem se muda para ocupar cargo em comissão ou função de confiança de alto nível.",
        pista: "Não vale para quem foi nomeado para cargo efetivo nem para quem mudou de lotação.",
      },
      {
        termo: "Requisitos do auxílio-moradia (art. 60-B)",
        faz: "Todos ao mesmo tempo: 1) não haver imóvel funcional disponível; 2) o cônjuge ou companheiro não ocupar imóvel funcional; 3) o servidor ou o cônjuge não ser nem ter sido dono, promitente comprador ou cessionário de imóvel no município, nos 12 meses antes da nomeação; 4) ninguém que more com ele receber o auxílio; 5) ter se mudado para ocupar cargo em comissão ou função de confiança de nível alto (DAS 4, 5 e 6), de Natureza Especial, de Ministro de Estado ou equivalentes.",
        pista: "Também: 6) o município não pode estar nos casos do art. 58, § 3º (mesma região metropolitana, por exemplo) em relação à residência do servidor; 7) não ter morado no município nos últimos 12 meses (períodos menores que 60 dias não contam, nem o tempo em outro cargo em comissão desses níveis); 8) a mudança não ter sido por alteração de lotação ou nomeação para cargo efetivo; 9) deslocamento depois de 30 de junho de 2006.",
      },
      {
        termo: "Valor e fim do auxílio-moradia (arts. 60-D e 60-E)",
        faz: "O valor mensal é limitado a 25% do valor do cargo em comissão, da função comissionada ou do cargo de Ministro de Estado ocupado, e não pode passar de 25% da remuneração de Ministro de Estado (§ 1º). Qualquer que seja o cargo, quem cumpre os requisitos tem garantido o ressarcimento de até R$ 1.800 (§ 2º).",
        pista: "Em caso de falecimento, exoneração, oferta de imóvel funcional ou compra de imóvel, o auxílio continua sendo pago por mais 1 mês (art. 60-E).",
      },
      {
        parte: "5. Gratificações e adicionais",
        termo: "Gratificações e adicionais",
        faz: "Natalina, noturno, serviço extraordinário, férias, insalubridade e outros. Incorporam só nos casos da lei. A lista do art. 61 é exemplificativa: 1) retribuição pela função de direção, chefia e assessoramento; 2) gratificação natalina; 3) adicional por atividades insalubres, perigosas ou penosas; 4) adicional por serviço extraordinário; 5) adicional noturno; 6) adicional de férias; 7) outros, ligados ao local ou à natureza do trabalho; 8) gratificação por encargo de curso ou concurso.",
        pista: "O adicional por tempo de serviço foi revogado (MP 2.225-45/2001).",
      },
      {
        termo: "Retribuição pela função (arts. 62 e 62-A)",
        faz: "O servidor efetivo investido em função de direção, chefia ou assessoramento, em cargo em comissão ou de Natureza Especial recebe uma retribuição pelo exercício. A remuneração dos cargos em comissão é fixada em lei específica.",
        pista: "Essa retribuição não se incorpora mais à remuneração. O que já tinha sido incorporado antes virou vantagem pessoal nominalmente identificada (VPNI), que só muda com a revisão geral da remuneração dos servidores federais (art. 62-A).",
      },
      {
        termo: "Gratificação natalina (arts. 63 a 66)",
        faz: "É o “13º” do servidor: 1/12 da remuneração de dezembro por mês de exercício no ano. Fração igual ou maior que 15 dias conta como mês inteiro (art. 63). É paga até o dia 20 de dezembro de cada ano (art. 64).",
        pista: "O exonerado recebe a gratificação proporcional aos meses de exercício, calculada sobre a remuneração do mês da exoneração (art. 65). Ela não entra no cálculo de nenhuma outra vantagem (art. 66).",
      },
      {
        termo: "Insalubridade e periculosidade (arts. 68 e 69)",
        faz: "São devidas a quem trabalha com habitualidade em locais insalubres ou em contato permanente com substâncias tóxicas, radioativas ou com risco de vida. Quem tem direito aos dois adicionais escolhe um só: eles não se acumulam (art. 68, § 1º). O direito acaba quando acabam as condições ou os riscos (§ 2º).",
        pista: "Há controle permanente das atividades em operações ou locais insalubres ou perigosos (art. 69). A servidora gestante ou lactante é afastada dessas operações e locais enquanto durar a gestação e a lactação, e trabalha em local salubre e em serviço não penoso e não perigoso (parágrafo único).",
      },
      {
        termo: "Penosidade e raios X (arts. 71 e 72)",
        faz: "O adicional de atividade penosa é devido a quem trabalha em zonas de fronteira ou em lugares cujas condições de vida o justifiquem, nos termos do regulamento (art. 71).",
        pista: "Quem opera com raios X ou substâncias radioativas é mantido sob controle, com exames médicos a cada 6 meses (art. 72, parágrafo único).",
      },
      {
        termo: "Serviço extraordinário (arts. 73 e 74)",
        faz: "A hora extra é paga com acréscimo de 50% sobre a hora normal. Só é permitida para atender situações excepcionais e temporárias, com limite de 2 horas por jornada.",
        pista: "Exemplo: se a hora normal vale 100, a hora extra vale 150.",
      },
      {
        termo: "Adicional noturno (art. 75)",
        faz: "É devido pelo trabalho entre 22 horas de um dia e 5 horas do dia seguinte: a hora vale 25% a mais e é contada como 52 minutos e 30 segundos. Se também for hora extra, os 25% incidem sobre a hora já acrescida de 50% (parágrafo único).",
        pista: "Exemplo: hora normal de 100, hora extra de 150, hora extra noturna de 187,50. O adicional é devido também a quem trabalha em plantão ou revezamento (STJ, REsp 1.292.335; Súmula 213 do STF).",
      },
      {
        termo: "Adicional de férias (art. 76)",
        faz: "Vale 1/3 da remuneração do período de férias e é pago automaticamente, sem precisar pedir. Se o servidor exerce função de direção, chefia ou assessoramento, ou ocupa cargo em comissão, esse valor entra no cálculo do adicional (parágrafo único).",
      },
      {
        termo: "Gratificação por encargo de curso ou concurso (art. 76-A)",
        faz: "É devida ao servidor que, de forma eventual: 1) atua como instrutor em curso de formação, desenvolvimento ou treinamento regularmente instituído; 2) participa de banca examinadora ou de comissão para exames orais, análise de currículo, correção de provas discursivas, elaboração de questões ou julgamento de recursos; 3) participa da logística de preparação e realização de concurso público, se isso não fizer parte das suas atribuições permanentes; 4) aplica, fiscaliza ou avalia provas de vestibular ou concurso, ou supervisiona essas atividades.",
        pista: "O valor é calculado em horas: no máximo 120 horas de trabalho por ano, com mais 120 horas em situação excepcional, justificada e aprovada antes pela autoridade máxima. A hora vale no máximo 2,2% (casos 1 e 2) ou 1,2% (casos 3 e 4) do maior vencimento básico da administração federal (§ 1º). Foi incluída pela Lei 11.314/2006.",
      },
      {
        termo: "Regras da gratificação por encargo",
        faz: "Só é paga se as atividades forem feitas sem prejuízo das atribuições do cargo; se feitas durante a jornada, exigem compensação de carga horária (§ 2º). O instrutor e o membro de banca (casos 1 e 2) têm horário especial, com compensação em até 1 ano (art. 98, § 4º).",
        pista: "Não se incorpora ao vencimento para nenhum efeito e não é base de cálculo de nenhuma outra vantagem, nem dos proventos de aposentadoria e das pensões (§ 3º).",
      },
      {
        parte: "6. Férias",
        termo: "Férias",
        faz: "30 dias, com 12 meses para o primeiro período. Acumula até 2 períodos e parcela em até 3 etapas. As férias são direito constitucional (CF, art. 7º, XVII) e estão nos arts. 77 a 80. O servidor recebe a remuneração mais o adicional de 1/3, e o período conta como efetivo exercício para todos os efeitos.",
        pista: "Falta não vai para a conta de férias. A falta sem justificativa é descontada da remuneração, e não dos dias de férias (art. 77, § 2º). O acúmulo de até 2 períodos só cabe por necessidade do serviço, ressalvada legislação específica.",
      },
      {
        termo: "Períodos aquisitivos (art. 77, § 1º)",
        faz: "Os 12 meses de exercício são exigidos só para o primeiro período. Os seguintes são adquiridos a cada 1º de janeiro. Exemplo: quem entra em exercício em 1º de agosto completa 12 meses no fim de julho do ano seguinte e ganha o primeiro período; o segundo vem em 1º de janeiro do ano depois.",
        pista: "O STJ decidiu que quem já tirou o primeiro período, depois dos 12 meses, pode tirar as férias seguintes no mesmo ano civil, sem esperar novos 12 meses (Tema 1135, REsp 1.907.153).",
      },
      {
        termo: "Parcelamento e pagamento (art. 77, § 3º, e art. 78)",
        faz: "As férias podem ser divididas em até 3 etapas, a pedido do servidor e no interesse da Administração, que decide de forma discricionária. A remuneração das férias é paga até 2 dias antes do início do período (art. 78).",
        pista: "Nas férias parceladas, o adicional de 1/3 é pago inteiro na primeira etapa (art. 78, § 5º). Exemplo: 15 dias em julho e 15 em dezembro: o 1/3 vem todo em julho.",
      },
      {
        termo: "Férias na exoneração (art. 78, §§ 3º e 4º)",
        faz: "O exonerado do cargo efetivo ou em comissão recebe indenização pelas férias a que tem direito e pelo período incompleto, na proporção de 1/12 por mês de efetivo exercício ou fração maior que 14 dias. O cálculo usa a remuneração do mês em que o ato de exoneração é publicado.",
      },
      {
        termo: "Raios X e interrupção (arts. 79 e 80)",
        faz: "Quem opera direta e permanentemente com raios X ou substâncias radioativas tem 20 dias seguidos de férias por semestre de atividade, sem acumulação em nenhuma hipótese (art. 79).",
        pista: "As férias só podem ser interrompidas por calamidade pública, comoção interna, convocação para júri, serviço militar ou eleitoral, ou necessidade do serviço declarada pela autoridade máxima do órgão ou entidade (art. 80). O restante é gozado de uma só vez (parágrafo único).",
      },
      {
        parte: "7. Licenças",
        termo: "Licenças do art. 81",
        faz: "São sete: 1) por doença em pessoa da família; 2) por afastamento do cônjuge ou companheiro; 3) para o serviço militar; 4) para atividade política; 5) para capacitação; 6) para tratar de interesses particulares; 7) para desempenho de mandato classista.",
        pista: "Licença concedida dentro de 60 dias do fim de outra da mesma espécie é considerada prorrogação (art. 82). Licença e afastamento, na prática, são a mesma coisa: o servidor fica fora das suas atribuições; a lei só usa nomes diferentes. As licenças por saúde própria, à gestante, à adotante, paternidade e por acidente em serviço ficam no capítulo da seguridade social do servidor.",
      },
      {
        termo: "Doença em pessoa da família (art. 83)",
        faz: "Doença do cônjuge ou companheiro, pais, filhos, padrasto ou madrasta, enteado, ou dependente que viva às custas do servidor e conste do seu assentamento funcional, comprovada por perícia médica oficial. Só é deferida se a assistência direta do servidor for indispensável e não puder ser dada junto com o trabalho ou com compensação de horário (§ 1º). Apesar do “poderá” da lei, a concessão é vinculada: cumpridos os requisitos, a Administração deve conceder.",
        pista: "É proibido exercer atividade remunerada durante essa licença (art. 81, § 3º). A licença e cada prorrogação dependem de perícia médica oficial (art. 81, § 1º), dispensada, na forma do regulamento, quando a licença for menor que 15 dias dentro de 1 ano (art. 204).",
      },
      {
        termo: "Prazos da licença por doença na família (art. 83, §§ 2º a 4º)",
        faz: "A cada 12 meses: até 60 dias, seguidos ou não, com remuneração; e até 90 dias, seguidos ou não, sem remuneração. A soma das licenças com e sem remuneração, com as prorrogações, no mesmo período de 12 meses, não pode passar desses limites (§ 4º). Os 12 meses começam na data do deferimento da primeira licença (§ 3º).",
        pista: "Tempo de serviço: a parte com remuneração que passar de 30 dias em 12 meses conta só para aposentadoria e disponibilidade (art. 103, II); a parte sem remuneração não conta para nenhum efeito.",
      },
      {
        termo: "Afastamento do cônjuge ou companheiro (art. 84)",
        faz: "Para acompanhar o cônjuge ou companheiro que foi deslocado para outro ponto do País, para o exterior ou para exercer mandato eletivo no Executivo ou no Legislativo. É por prazo indeterminado e sem remuneração (§ 1º), e o tempo não conta para nenhum efeito.",
        pista: "Alternativa (§ 2º): se o cônjuge também for servidor público, civil ou militar, de qualquer Poder e de qualquer ente, pode haver exercício provisório em órgão ou entidade federal da administração direta, autárquica ou fundacional, em atividade compatível com o cargo. Assim o servidor continua trabalhando e recebendo.",
      },
      {
        termo: "Serviço militar (art. 85)",
        faz: "É concedida licença ao servidor convocado para o serviço militar, na forma da legislação específica. Terminado o serviço, ele tem até 30 dias, sem remuneração, para voltar ao cargo (parágrafo único).",
        pista: "O período da licença conta como efetivo exercício (art. 102, VIII, “f”).",
      },
      {
        termo: "Atividade política (art. 86)",
        faz: "É direito do servidor (ato vinculado), a pedido. 1) Sem remuneração: da escolha em convenção partidária até a véspera do registro da candidatura na Justiça Eleitoral; esse tempo não conta. 2) Com remuneração: do registro até o 10º dia depois da eleição, mas só por 3 meses (§ 2º); passado esse prazo, continua licenciado, sem remuneração.",
        pista: "Os 3 meses com remuneração contam só para aposentadoria e disponibilidade (art. 103, III). Em regra, o servidor pode continuar trabalhando. Afastamento obrigatório (§ 1º): o candidato na localidade onde trabalha que exerce cargo de direção, chefia, assessoramento, arrecadação ou fiscalização é afastado a partir do dia seguinte ao registro da candidatura até o 10º dia depois da eleição; para a doutrina, recebe a remuneração e conta como efetivo exercício em todo esse período.",
      },
      {
        termo: "Capacitação",
        faz: "Após cada 5 anos de exercício, até 3 meses, com remuneração. Os períodos não se acumulam. É para participar de curso de capacitação profissional, e é concedida no interesse da Administração, de forma discricionária (art. 87). Substituiu a antiga licença-prêmio (Lei 9.527/1997).",
        pista: "Como os períodos não se acumulam (parágrafo único), o servidor não pode esperar 10 anos e tirar 6 meses. O período conta como efetivo exercício (art. 102, VIII, “e”).",
      },
      {
        termo: "Interesses particulares (art. 91)",
        faz: "A critério da Administração, ao ocupante de cargo efetivo que não esteja em estágio probatório, por até 3 anos seguidos, sem remuneração. Pode ser interrompida a qualquer tempo, a pedido do servidor ou no interesse do serviço (parágrafo único).",
        pista: "O tempo dessa licença não conta para nenhum efeito.",
      },
      {
        termo: "Mandato classista (art. 92)",
        faz: "É direito do servidor, sem remuneração, para mandato em confederação, federação, associação de classe de âmbito nacional, sindicato da categoria ou entidade fiscalizadora da profissão, ou para gerência ou administração de cooperativa de servidores que preste serviços aos seus membros. Dura o mesmo que o mandato e pode ser renovada em caso de reeleição (§ 2º), sem limite de renovações desde a Lei 12.998/2014.",
        pista: "Só para os eleitos a cargos de direção ou representação, em entidades cadastradas no órgão competente (§ 1º). Limite por entidade: até 5.000 associados, 2 servidores; de 5.001 a 30.000, 4; mais de 30.000, 8. Conta como efetivo exercício, exceto para promoção por merecimento (art. 102, VIII, “c”). Não é concedida em estágio probatório (art. 20, § 4º).",
      },
      {
        termo: "Licenças sem remuneração",
        faz: "Acompanhar cônjuge, interesses particulares (até 3 anos) e mandato classista. Também ficam sem remuneração: a licença por doença na família depois dos 60 dias (até mais 90 dias) e a licença para atividade política antes do registro da candidatura e depois dos 3 meses.",
        pista: "Não contam para nenhum efeito: doença na família sem remuneração, afastamento do cônjuge, atividade política sem remuneração e interesses particulares. Já o mandato classista, mesmo sem remuneração, conta como efetivo exercício (salvo para promoção por merecimento).",
      },
      {
        parte: "8. Afastamentos",
        termo: "Afastamentos",
        faz: "Mandato eletivo, estudo ou missão no exterior, organismo internacional e pós-graduação no País. Há também o afastamento para servir em outro órgão ou entidade, a cessão (art. 93). Estão nos arts. 93 a 96-A.",
        pista: "Organismo internacional: perda total da remuneração. Mesmo assim, o período conta como efetivo exercício (art. 102, XI). Esse afastamento pode ser concedido em estágio probatório, que fica suspenso (art. 20, §§ 4º e 5º).",
      },
      {
        termo: "Cessão (art. 93)",
        faz: "O servidor pode ser cedido para trabalhar em outro órgão ou entidade dos Poderes da União, dos Estados, do DF ou dos Municípios: 1) para exercer cargo em comissão ou função de confiança; 2) nos casos previstos em leis específicas. Cedente é o órgão de origem; cessionário é o órgão onde o servidor vai trabalhar.",
        pista: "Quem paga (§§ 1º e 2º): cessão para cargo em comissão ou função de confiança em Estado, DF ou Município: paga o cessionário; nos demais casos, paga o cedente (entre órgãos federais, a União). Cedido a empresa pública ou sociedade de economia mista, se o servidor optar pela remuneração do cargo efetivo (ou por ela mais um percentual da retribuição do cargo em comissão), a entidade cessionária reembolsa o órgão de origem.",
      },
      {
        termo: "Mandato eletivo (art. 94)",
        faz: "Repete o art. 38 da CF. 1) Mandato federal, estadual ou distrital: afastado do cargo, sem escolha (recebe o subsídio do mandato). 2) Prefeito: afastado, mas pode escolher a remuneração do cargo ou o subsídio. 3) Vereador: com compatibilidade de horário, fica no cargo e recebe as duas remunerações; sem compatibilidade, é afastado e escolhe uma delas.",
        pista: "Afastado, continua contribuindo para a seguridade social como se estivesse em exercício (§ 1º). O servidor com mandato eletivo ou classista não pode ser removido ou redistribuído de ofício para fora da localidade onde exerce o mandato (§ 2º). O tempo conta como efetivo exercício, exceto para promoção por merecimento (art. 102, V). Não confunda com a licença para atividade política, que é para o candidato; o afastamento é para quem já foi eleito.",
      },
      {
        termo: "Estudo ou missão no exterior (art. 95)",
        faz: "O servidor só pode sair do País para estudo ou missão oficial com autorização do Presidente da República, do Presidente dos órgãos do Poder Legislativo ou do Presidente do STF (concessão discricionária). A ausência dura no máximo 4 anos; terminada a missão ou o estudo, nova ausência só depois de igual período (§ 1º).",
        pista: "Antes de passar período igual ao do afastamento, o servidor não pode ter exoneração nem licença para interesses particulares, salvo se ressarcir a despesa (§ 2º). Não se aplica à carreira diplomática (§ 3º). O regulamento define hipóteses, condições e remuneração (§ 4º). O período conta como efetivo exercício (art. 102, VII).",
      },
      {
        termo: "Organismo internacional (art. 96)",
        faz: "É o afastamento para servir em organismo internacional de que o Brasil participe ou com o qual coopere. A lei é clara: ocorre com perda total da remuneração.",
      },
      {
        termo: "Pós-graduação stricto sensu no País (art. 96-A)",
        faz: "Para mestrado, doutorado ou pós-doutorado, no interesse da Administração, quando o curso não puder ser feito junto com o trabalho ou com compensação de horário. O servidor recebe a remuneração do cargo, e o período conta como efetivo exercício (art. 102, IV). Só para servidor efetivo com pelo menos 3 anos no órgão para mestrado e 4 anos para doutorado, incluído o estágio probatório, que não tenha tido, nos 2 anos anteriores, licença para interesses particulares, licença para capacitação ou outro afastamento por este artigo (§ 2º).",
        pista: "Pós-doutorado (§ 3º): pelo menos 4 anos no cargo, incluído o estágio probatório, e nenhuma licença para interesses particulares ou afastamento por este artigo nos 4 anos anteriores ao pedido.",
      },
      {
        termo: "Depois da pós-graduação (art. 96-A, §§ 4º a 7º)",
        faz: "Na volta, o servidor tem de permanecer no exercício do cargo por tempo igual ao do afastamento (§ 4º). Se pedir exoneração ou aposentadoria antes disso, ressarce os gastos com o aperfeiçoamento, em até 60 dias (§ 5º e art. 47). Se não obtiver o título no prazo previsto, também ressarce, salvo força maior ou caso fortuito, a critério do dirigente máximo do órgão (§ 6º).",
        pista: "As mesmas regras valem para a pós-graduação no exterior, autorizada na forma do art. 95 (§ 7º).",
      },
      {
        parte: "9. Concessões",
        termo: "Concessões",
        faz: "1 dia para doar sangue, até 2 para alistamento eleitoral, 8 para casamento ou falecimento na família. São ausências sem nenhum prejuízo (art. 97): 1 dia para doação de sangue; o tempo necessário para alistamento ou recadastramento eleitoral, limitado a 2 dias; 8 dias seguidos por casamento; 8 dias seguidos por falecimento do cônjuge, companheiro, pais, madrasta ou padrasto, filhos, enteados, menor sob guarda ou tutela e irmãos.",
        pista: "Avós, netos e sogros não estão na lista do falecimento. As ausências do art. 97 contam como efetivo exercício (art. 102).",
      },
      {
        termo: "Horário especial (art. 98)",
        faz: "1) Servidor estudante, quando o horário da escola for incompatível com o da repartição, sem prejuízo do cargo, com compensação de horário e respeitada a duração semanal do trabalho (§ 1º); 2) servidor com deficiência, comprovada a necessidade por junta médica oficial, sem compensação (§ 2º); 3) servidor com cônjuge, filho ou dependente com deficiência, também sem compensação (§ 3º); 4) servidor instrutor ou membro de banca (art. 76-A, I e II), com compensação em até 1 ano (§ 4º).",
        pista: "Resumo: estudante e instrutor ou banca compensam; deficiência, do servidor ou da família, não compensa.",
      },
      {
        termo: "Matrícula em instituição congênere (art. 99)",
        faz: "O servidor estudante que muda de sede no interesse da Administração tem matrícula garantida em instituição de ensino congênere, na localidade da nova residência ou na mais próxima, em qualquer época, independentemente de vaga. O direito vale também para o cônjuge ou companheiro, os filhos ou enteados que vivam com ele e os menores sob sua guarda, com autorização judicial (parágrafo único).",
        pista: "Congênere quer dizer da mesma natureza: de instituição pública para pública e de privada para privada (STF, ADI 3.324). Não vale para mudança a pedido do servidor.",
      },
      {
        parte: "10. Tempo de serviço",
        termo: "Contagem do tempo (arts. 100, 101 e 103, §§ 1º a 3º)",
        faz: "O tempo de serviço público federal, inclusive nas Forças Armadas, conta para todos os efeitos (art. 100). O tempo é apurado em dias, convertidos em anos de 365 dias (art. 101).",
        pista: "É proibido contar duas vezes o tempo trabalhado ao mesmo tempo em mais de um cargo ou função, em qualquer ente, autarquia, fundação, sociedade de economia mista ou empresa pública (art. 103, § 3º). O tempo como aposentado conta só para nova aposentadoria (§ 1º). O tempo nas Forças Armadas em operações de guerra conta em dobro (§ 2º).",
      },
      {
        termo: "Efetivo exercício (art. 102)",
        faz: "Além das ausências do art. 97, contam como efetivo exercício os afastamentos por: férias; cargo em comissão ou equivalente em qualquer ente; cargo ou função de governo ou administração, em qualquer parte do País, por nomeação do Presidente da República; treinamento ou pós-graduação stricto sensu no País; mandato eletivo (exceto para promoção por merecimento); júri e outros serviços obrigatórios por lei; missão ou estudo no exterior autorizado; deslocamento para a nova sede (art. 18); competição desportiva nacional ou representação desportiva nacional; organismo internacional.",
        pista: "Licenças que contam como efetivo exercício: à gestante, à adotante e paternidade; tratamento da própria saúde até 24 meses no total, em cargo efetivo da União; mandato classista ou cooperativa de servidores (exceto para promoção por merecimento); acidente em serviço ou doença profissional; capacitação; serviço militar.",
      },
      {
        termo: "Só para aposentadoria e disponibilidade (art. 103)",
        faz: "1) Tempo de serviço em Estados, Municípios e DF; 2) licença por doença na família, com remuneração, no que passar de 30 dias em 12 meses; 3) licença para atividade política com remuneração (art. 86, § 2º); 4) mandato eletivo anterior ao ingresso no serviço público federal; 5) atividade privada vinculada à Previdência Social; 6) tiro de guerra; 7) licença para tratamento da própria saúde no que passar de 24 meses.",
        pista: "Não contam para nenhum efeito: licença por doença na família sem remuneração; afastamento do cônjuge; atividade política (período sem remuneração); interesses particulares.",
      },
      {
        parte: "11. Direito de petição",
        termo: "Direito de petição (arts. 104 e 105)",
        faz: "Está na CF (art. 5º, XXXIV, “a”). Na Lei 8.112, é o direito do servidor de pedir aos Poderes Públicos a defesa de direito ou de interesse legítimo (art. 104). São três instrumentos: requerimento, pedido de reconsideração e recurso.",
        pista: "O requerimento é dirigido à autoridade competente para decidir, mas é entregue por meio da chefia imediata do servidor (art. 105): segue a via hierárquica.",
      },
      {
        termo: "Pedido de reconsideração (art. 106)",
        faz: "É dirigido à mesma autoridade que expediu o ato ou deu a primeira decisão, e não pode ser renovado. O requerimento e o pedido de reconsideração são despachados em 5 dias e decididos em 30 dias (parágrafo único).",
      },
      {
        termo: "Recurso (art. 107)",
        faz: "Cabe contra o indeferimento do pedido de reconsideração e contra as decisões sobre os recursos apresentados em sequência. Vai à autoridade imediatamente superior à que decidiu e, depois, subindo na escala, às demais (§ 1º). Também é encaminhado por meio da chefia imediata (§ 2º).",
        pista: "Exemplo: o servidor pede um direito (requerimento); negado, pede à mesma autoridade que reveja (reconsideração); negado de novo, recorre ao superior dela (recurso), e assim por diante.",
      },
      {
        termo: "Prazo e efeitos (arts. 108 e 109)",
        faz: "O prazo para o pedido de reconsideração ou o recurso é de 30 dias, contados da publicação ou da ciência da decisão (art. 108). Só o recurso pode ter efeito suspensivo, a juízo da autoridade competente (art. 109).",
        pista: "Se o pedido de reconsideração ou o recurso for aceito, os efeitos voltam à data do ato impugnado (art. 109, parágrafo único).",
      },
      {
        termo: "Prescrição do direito de requerer (arts. 110 a 112)",
        faz: "Prescreve em 5 anos, para atos de demissão e de cassação de aposentadoria ou disponibilidade, ou que afetem interesse patrimonial e créditos das relações de trabalho; e em 120 dias, nos demais casos, salvo outro prazo fixado em lei. O prazo conta da publicação do ato ou da ciência, quando o ato não for publicado (art. 110).",
        pista: "O pedido de reconsideração e o recurso, quando cabíveis, interrompem a prescrição (art. 111): o prazo volta a zero. A prescrição é de ordem pública e não pode ser relevada pela Administração (art. 112).",
      },
      {
        termo: "Vista, revisão e prazos fatais (arts. 113 a 115)",
        faz: "O servidor, ou procurador constituído por ele, tem direito a ver o processo ou documento na repartição (art. 113). A Administração deve rever seus atos ilegais a qualquer tempo, pela autotutela (art. 114).",
        pista: "Os prazos do direito de petição são fatais e improrrogáveis, salvo força maior (art. 115).",
      },
    ],
    cuidado:
      "Tempo de serviço em Estado, Município ou DF conta só para aposentadoria e disponibilidade. E não confunda: indenização nunca se incorpora; gratificação e adicional só nos casos da lei. Insalubridade e periculosidade não se acumulam. Organismo internacional: sem remuneração, mas conta como efetivo exercício. Pedido de reconsideração não se renova, e só o recurso pode ter efeito suspensivo.",
  },
  questoes: [
    {
      topico: "Indenizações",
      subassunto: "Ajuda de custo",
      dificuldade: 5,
      raciocinio: "Casal de servidores na mesma sede: uma só indenização.",
      enunciado:
        "Um servidor é removido de ofício, com mudança definitiva de domicílio, e recebe ajuda de custo. Depois, o cônjuge, também servidor, passa a ter exercício na mesma sede. Uma nova ajuda de custo ao cônjuge",
      alternativas: [
        "é devida, pois cada servidor tem direito próprio à indenização",
        "é devida pela metade, pois já houve pagamento à família",
        "é devida, se o pedido vier no prazo de um ano",
        "é vedada, pois a lei proíbe o duplo pagamento nesse caso",
        "é vedada só se os dois servidores forem do mesmo órgão federal",
      ],
      correta: 3,
      explicacao: "O art. 53 veda o duplo pagamento de indenização, a qualquer tempo, quando o cônjuge que também é servidor vier a ter exercício na mesma sede.",
      explicacaoErradas:
        "“direito próprio” ignora a vedação. “pela metade” e “prazo de um ano” não existem. “mesmo órgão” é um limite que a lei não traz.",
      pegadinha: "Pensar que a vedação depende de os dois mudarem juntos.",
      conhecimento: "Não há ajuda de custo nas remoções a pedido dos incisos II e III do parágrafo único do art. 36 (art. 53, § 3º).",
    },
    {
      topico: "Indenizações",
      subassunto: "Diárias",
      dificuldade: 4,
      raciocinio: "Sem pernoite, metade.",
      enunciado:
        "Um servidor sai da sede a serviço, de forma eventual, para outra cidade fora da região metropolitana, e volta no mesmo dia, sem pernoite. As diárias",
      alternativas: [
        "são devidas pela metade, pois não houve pernoite",
        "não são devidas, pois só o pernoite gera diária",
        "são devidas por inteiro, pois houve deslocamento a serviço",
        "são trocadas por ajuda de custo, pois ele saiu da sede",
        "só são devidas se o deslocamento for exigência permanente do cargo",
      ],
      correta: 0,
      explicacao: "O art. 58, § 1º, diz que a diária é devida pela metade quando o deslocamento não exige pernoite fora da sede.",
      explicacaoErradas:
        "“só o pernoite” contraria o § 1º. “por inteiro” ignora a redução. “ajuda de custo” é para mudança permanente. “exigência permanente” é justamente o caso em que o § 2º nega as diárias.",
      pegadinha: "Inverter a regra da exigência permanente.",
      conhecimento: "Quem recebe diária e não se afasta deve devolvê-la em 5 dias (art. 59).",
    },
    {
      topico: "Reposição ao erário",
      subassunto: "Erro de cálculo",
      dificuldade: 5,
      raciocinio: "Erro de cálculo não é erro de interpretação da lei.",
      enunciado:
        "Por erro de cálculo da folha, um servidor recebeu valor a mais por meses. Nada indicava o erro, e ele não tinha como percebê-lo. Pela tese do STJ, a devolução",
      alternativas: [
        "é sempre obrigatória, pois o dinheiro público é indisponível",
        "nunca é cabível, pois toda verba salarial é alimentar",
        "depende de sentença judicial transitada em julgado",
        "é obrigatória, e o desconto será feito em parcela única",
        "não é exigida, se ele comprovar a boa-fé objetiva no caso",
      ],
      correta: 4,
      explicacao: "No Tema 1.009, o STJ disse que erro operacional ou de cálculo gera devolução, salvo se o servidor comprovar boa-fé objetiva, em especial que não podia notar o erro.",
      explicacaoErradas:
        "“sempre obrigatória” ignora a ressalva. “nunca é cabível” também exagera. “sentença judicial” não é exigida. “parcela única” contraria o art. 46.",
      pegadinha: "Aplicar a toda hipótese o que vale para erro de interpretação da lei.",
      conhecimento: "No erro de interpretação da lei pela Administração, o Tema 531 do STJ afasta a devolução.",
    },
    {
      topico: "Férias",
      subassunto: "Faltas",
      dificuldade: 4,
      raciocinio: "Falta não se paga com férias.",
      enunciado:
        "Um servidor federal faltou 3 dias sem justificativa e pede que esses dias sejam descontados das férias. Esse pedido",
      alternativas: [
        "é possível, pois ele abre mão de dias que são só dele",
        "é vedado, pois a lei proíbe levar faltas à conta de férias",
        "é possível, se houver a concordância da chefia imediata",
        "é vedado só no primeiro período aquisitivo de férias",
        "é possível até o limite de dez dias em cada período de férias",
      ],
      correta: 1,
      explicacao: "O art. 77, § 2º, veda levar à conta de férias qualquer falta ao serviço.",
      explicacaoErradas:
        "“abre mão” não afasta a vedação. “concordância da chefia” não tem base. “primeiro período” limita o que a lei não limita. “dez dias” é um número inventado.",
      pegadinha: "Pensar que o próprio servidor pode abrir mão dos dias.",
      conhecimento: "As férias só se interrompem nos casos do art. 80, como calamidade pública e júri.",
    },
    {
      topico: "Licenças",
      subassunto: "Estágio probatório",
      dificuldade: 5,
      raciocinio: "No estágio, só as licenças dos incisos I a IV do art. 81.",
      enunciado:
        "Durante o estágio probatório, um servidor pede licença por doença em pessoa da família e, depois, licença para capacitação. Pela Lei 8.112,",
      alternativas: [
        "as duas podem ser concedidas, a critério da chefia",
        "nenhuma pode ser concedida, pois o estágio não se interrompe",
        "só a primeira pode, e o estágio fica suspenso durante ela",
        "só a segunda pode, pois ela melhora o desempenho no cargo",
        "as duas podem, mas sem remuneração em todo o período",
      ],
      correta: 2,
      explicacao: "O art. 20, § 4º, permite no estágio as licenças do art. 81, I a IV. A capacitação é o inciso V. O § 5º suspende o estágio na licença do art. 83.",
      explicacaoErradas:
        "“as duas podem” ignora o limite do § 4º. “nenhuma” também erra, pois o inciso I é permitido. “só a segunda” inverte a regra.",
      pegadinha: "Achar que a licença para capacitação combina com o estágio.",
      conhecimento: "Também cabe afastamento para curso de formação de outro cargo federal.",
    },
    {
      topico: "Licenças",
      subassunto: "Capacitação",
      dificuldade: 4,
      raciocinio: "Cada quinquênio dá até 3 meses, e o que não se usa não se soma.",
      enunciado:
        "Com dez anos de efetivo exercício e nunca tendo usado a licença para capacitação, um servidor pede seis meses seguidos. O pedido",
      alternativas: [
        "pode ser atendido, pois completou dois quinquênios",
        "pode ser atendido, sem remuneração no segundo período",
        "pode ser atendido, se o curso for no exterior",
        "não pode ser atendido, pois a licença é só para cargo de chefia",
        "não pode ser atendido, pois os períodos não se acumulam",
      ],
      correta: 4,
      explicacao: "O art. 87 prevê até três meses após cada quinquênio, no interesse da Administração. O parágrafo único diz que os períodos não são acumuláveis.",
      explicacaoErradas:
        "“dois quinquênios” não somam. “sem remuneração” contraria o caput, que garante a remuneração. “no exterior” não é exceção. “cargo de chefia” não é requisito.",
      pegadinha: "Somar quinquênios como se fossem férias.",
      conhecimento: "A licença depende do interesse da Administração.",
    },
    {
      topico: "Licenças",
      subassunto: "Atividade política",
      dificuldade: 5,
      raciocinio: "Antes do registro, sem pagamento. Depois, vencimentos por no máximo 3 meses.",
      enunciado:
        "Na licença para atividade política, o período entre a escolha em convenção e a véspera do registro e o período que vai do registro ao 10º dia após a eleição são, respectivamente,",
      alternativas: [
        "sem remuneração e, depois, com vencimentos por até 3 meses",
        "com remuneração e, depois, sem remuneração por 3 meses",
        "sem remuneração nos dois períodos, por qualquer prazo",
        "com vencimentos nos dois períodos, por até 6 meses no total",
        "sem remuneração e, depois, com vencimentos por todo o prazo",
      ],
      correta: 0,
      explicacao: "O art. 86 prevê licença sem remuneração até a véspera do registro. O § 2º assegura os vencimentos do cargo efetivo somente pelo período de três meses.",
      explicacaoErradas:
        "“com remuneração” no início inverte a regra. “nos dois períodos” ignora a diferença entre as fases. “6 meses” não existe. “todo o prazo” ignora o limite de três meses.",
      pegadinha: "Esquecer o limite de três meses.",
      conhecimento: "Quem exerce fiscalização na localidade é afastado do cargo a partir do dia seguinte ao registro.",
    },
    {
      topico: "Afastamentos",
      subassunto: "Mandato eletivo",
      dificuldade: 4,
      raciocinio: "Prefeito opta. Vereador com horário compatível acumula.",
      enunciado:
        "Dois servidores federais são eleitos: um para prefeito e outro para vereador, este com horários compatíveis. Pela Lei 8.112,",
      alternativas: [
        "os dois ficam afastados e recebem só o subsídio do mandato",
        "os dois acumulam cargo e mandato, pois há compatibilidade",
        "o prefeito acumula as duas remunerações, e o vereador opta",
        "o prefeito se afasta e opta, e o vereador acumula as vantagens",
        "o prefeito perde o cargo, e o vereador fica afastado com opção",
      ],
      correta: 3,
      explicacao: "O art. 94, II, afasta o prefeito e permite optar pela remuneração. O inciso III, “a”, deixa o vereador com as vantagens do cargo, sem prejuízo da remuneração do mandato.",
      explicacaoErradas:
        "“os dois ficam afastados” vale para mandato federal, estadual ou distrital. “acumulam” não serve ao prefeito. “prefeito acumula” inverte a regra. “perde o cargo” não existe.",
      pegadinha: "Dar ao prefeito a acumulação própria do vereador.",
      conhecimento: "Sem compatibilidade, o vereador se afasta e pode optar pela remuneração.",
    },
    {
      topico: "Concessões",
      subassunto: "Ausências",
      dificuldade: 4,
      raciocinio: "1, 2 e 8.",
      enunciado: "Sem qualquer prejuízo, o servidor pode se ausentar do serviço por",
      alternativas: [
        "2 dias para doar sangue e 5 dias para casamento",
        "1 dia para doar sangue e 5 dias por morte do pai",
        "1 dia para doar sangue e 8 dias por morte de irmão",
        "3 dias para alistamento eleitoral e 8 dias para casamento",
        "1 dia para alistamento eleitoral e 5 dias por morte de filho",
      ],
      correta: 2,
      explicacao: "O art. 97 prevê 1 dia para doação de sangue, até 2 dias para alistamento ou recadastramento eleitoral e 8 dias consecutivos por casamento ou falecimento na família, incluídos os irmãos.",
      explicacaoErradas:
        "“2 dias para doar sangue”, “3 dias para alistamento” e “1 dia para alistamento” trocam os números. “5 dias” não existe no art. 97.",
      pegadinha: "Trocar os números 1, 2 e 8.",
      conhecimento: "Horário especial ao estudante exige compensação (art. 98, § 1º).",
    },
    {
      topico: "Tempo de serviço",
      subassunto: "Serviço em outro ente",
      dificuldade: 5,
      raciocinio: "Fora da União: só aposentadoria e disponibilidade.",
      enunciado:
        "Antes de entrar na União, um servidor trabalhou cinco anos como servidor de um município. Pela Lei 8.112, esse tempo conta",
      alternativas: [
        "para todos os efeitos, inclusive promoção e férias",
        "apenas para aposentadoria e disponibilidade",
        "apenas para o estágio probatório do novo cargo",
        "apenas para adicional por tempo de serviço",
        "para nada, pois o vínculo com o município se encerrou",
      ],
      correta: 1,
      explicacao: "O art. 103, I, conta apenas para aposentadoria e disponibilidade o tempo de serviço público prestado a Estados, Municípios e DF.",
      explicacaoErradas:
        "“todos os efeitos” vale para o serviço federal. “estágio probatório” é por cargo. “adicional por tempo de serviço” não é o que a lei prevê. “para nada” ignora o art. 103.",
      pegadinha: "Tratar o tempo municipal como se fosse federal.",
      conhecimento: "O art. 100 conta para todos os efeitos o serviço público federal, inclusive o das Forças Armadas.",
    },
  ],
};
