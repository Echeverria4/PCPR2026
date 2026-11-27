import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-12",
  resumo: {
    ideia:
      "A Lei 8.112/1990 rege os servidores da União, das autarquias e das fundações públicas federais. Esta parte mostra como se entra no cargo, como se volta a ele, como ele fica vago e como o servidor se desloca. Ordem do estudo: regime e requisitos, concurso, formas de provimento, posse, exercício, estágio probatório, formas de voltar ao cargo, vacância, remoção, redistribuição e substituição.",
    itens: [
      {
        parte: "1. Regime estatutário",
        termo: "Alcance",
        faz: "Administração direta, autarquias e fundações públicas federais. Empresas estatais seguem a CLT. É lei federal, e não nacional: vale só para a União. Estados, DF e municípios têm estatutos próprios.",
        pista: "Também não se aplica aos militares nem aos contratados por tempo determinado, que têm regras próprias.",
      },
      {
        termo: "Vínculo legal, não contratual",
        faz: "A relação do servidor com a Administração é estatutária: nasce da lei, e não de contrato. Por isso a lei pode mudar as regras do cargo sem a concordância do servidor. Não existe direito adquirido a regime jurídico (STF, MS 28.433 AgR).",
        pista: "O que já foi conquistado fica protegido: se o servidor já cumpriu os requisitos de um direito antes da mudança, ele mantém esse direito.",
      },
      {
        termo: "Servidor e cargo (arts. 2º a 4º)",
        faz: "Servidor é a pessoa legalmente investida em cargo público. Cargo público é o conjunto de atribuições e responsabilidades da estrutura organizacional que deve ser cometido a um servidor. Os cargos são criados por lei, com denominação própria e vencimento pago pelos cofres públicos, para provimento em caráter efetivo ou em comissão.",
        pista: "É proibido prestar serviço gratuito, salvo nos casos previstos em lei (art. 4º).",
      },
      {
        parte: "2. Requisitos para o cargo",
        termo: "Requisitos básicos (art. 5º)",
        faz: "Para a investidura em cargo público: 1) nacionalidade brasileira; 2) gozo dos direitos políticos; 3) quitação com as obrigações militares e eleitorais; 4) nível de escolaridade exigido para o cargo; 5) idade mínima de 18 anos; 6) aptidão física e mental.",
        pista: "As atribuições do cargo podem justificar outros requisitos, mas eles têm de estar em lei (art. 5º, § 1º). O edital sozinho não pode criá-los.",
      },
      {
        termo: "Requisito só por lei",
        faz: "Limite de idade não pode ser criado por ato administrativo (Súmula 14 do STF) e só é válido quando a natureza das atribuições do cargo justificar (Súmula 683 do STF). Exame psicotécnico só por lei (Súmula Vinculante 44). O mesmo vale para altura mínima.",
        pista: "O edital também não pode restringir o que a lei deixou amplo: se a lei pede “curso superior” de forma genérica, o edital não pode exigir só o curso de Direito.",
      },
      {
        termo: "Estrangeiros (art. 5º, § 3º)",
        faz: "A Constituição, desde a EC 19/1998, permite o acesso de estrangeiros aos cargos públicos, na forma da lei (art. 37, I): norma de eficácia limitada. Na Lei 8.112, só as universidades e as instituições de pesquisa científica e tecnológica federais podem prover seus cargos com professores, técnicos e cientistas estrangeiros.",
      },
      {
        termo: "Pessoa com deficiência (art. 5º, § 2º)",
        faz: "É assegurado o direito de se inscrever em concurso para cargo com atribuições compatíveis com a deficiência. Para essas pessoas são reservadas até 20% das vagas oferecidas no concurso.",
      },
      {
        parte: "3. Concurso público",
        termo: "Concurso",
        faz: "Validade de até 2 anos, prorrogável uma vez. A lei veda novo concurso enquanto houver aprovado em concurso válido. A prorrogação é por igual período: no máximo, 2 anos + 2 anos = 4 anos (art. 12).",
        pista: "Exemplo: validade de 90 dias, prorrogável por mais 90 dias. O prazo e as condições ficam no edital, publicado no Diário Oficial da União e em jornal diário de grande circulação (art. 12, § 1º). A Lei 8.112 é mais rígida que a Constituição, que só dá preferência ao aprovado do concurso anterior.",
      },
      {
        termo: "Forma do concurso (art. 11)",
        faz: "O concurso tem dupla finalidade: escolher os mais capacitados e dar a todos chance igual de disputar o cargo. É de provas ou de provas e títulos, e pode ser feito em duas etapas, conforme a lei do plano de carreira.",
        pista: "A inscrição pode depender do pagamento da taxa fixada no edital, quando indispensável ao custeio do concurso, ressalvadas as isenções previstas no próprio edital.",
      },
      {
        termo: "Direito à nomeação dentro das vagas",
        faz: "Quem passa dentro do número de vagas do edital tem direito subjetivo à nomeação durante a validade do concurso (RE 598.099). A Administração escolhe o momento, desde que dentro do prazo.",
        pista: "Só uma situação excepcional, motivada, afasta esse direito. Ela precisa ser, ao mesmo tempo: superveniente (posterior ao edital), imprevisível (extraordinária na época do edital), grave (onerosidade excessiva ou impossibilidade de cumprir o edital) e necessária (sem outro meio menos gravoso).",
      },
      {
        termo: "Direito à nomeação fora das vagas",
        faz: "Quem está fora das vagas tem só expectativa de direito. Passa a ter direito: 1) se for preterido na ordem de classificação (Súmula 15 do STF); 2) se surgirem novas vagas ou novo concurso durante a validade e houver preterição arbitrária e imotivada por parte da Administração (RE 837.311).",
        pista: "O simples surgimento de vagas ou a abertura de novo concurso não basta: é preciso um comportamento da Administração que mostre a necessidade inequívoca de nomear.",
      },
      {
        parte: "4. Provimento",
        termo: "Provimento (arts. 6º a 8º)",
        faz: "Provimento é o ato que preenche o cargo público. É feito por ato da autoridade competente de cada Poder (art. 6º). A investidura no cargo ocorre com a posse (art. 7º). São sete formas (art. 8º): nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.",
        pista: "Reintegração, recondução e aproveitamento também estão na Constituição (art. 41, §§ 2º e 3º).",
      },
      {
        termo: "Originário × derivado",
        faz: "Originário: a pessoa entra no cargo sem depender de vínculo anterior. A nomeação é a única forma originária. Derivado: depende de vínculo anterior com a Administração. São derivadas as outras seis formas.",
        pista: "O provimento derivado pode ser: vertical (sobe na carreira: promoção); horizontal (não sobe nem desce: readaptação); por reingresso (volta ao serviço ativo: reversão, aproveitamento, reintegração e recondução).",
      },
      {
        termo: "Formas extintas (Súmula Vinculante 43)",
        faz: "Ascensão e transferência foram revogadas pela Lei 9.527/1997, depois de o STF considerá-las inconstitucionais (ADI 837). É inconstitucional toda forma de provimento que leve o servidor, sem concurso, a cargo que não integra a carreira em que ele foi investido (SV 43).",
        pista: "Também são vedadas a transposição e a transformação de cargos com troca de carreira (ADI 231; RE 602.264). A readaptação não ofende a SV 43, porque vem de limitação física ou mental e respeita a escolaridade e os vencimentos.",
      },
      {
        parte: "5. Nomeação",
        termo: "Nomeação (art. 9º)",
        faz: "É a investidura inicial em cargo público. É feita: em caráter efetivo, para cargo isolado de provimento efetivo ou de carreira; em comissão, inclusive na condição de interino, para cargos de confiança vagos.",
        pista: "Para o cargo efetivo, depende de concurso, respeitada a ordem de classificação e o prazo de validade (art. 10). Para o cargo em comissão, é livre. A nomeação é o único meio de prover cargo em comissão, mesmo de forma interina.",
      },
      {
        termo: "Nomeação de quem já é servidor",
        faz: "Continua sendo provimento originário. Exemplo: um técnico estável que passa no concurso para analista é nomeado para o novo cargo; isso é nomeação, e não promoção.",
        pista: "A nomeação é ato unilateral da Administração. Ela dá ao nomeado o direito de tomar posse, mas não a obrigação: quem não toma posse não sofre pena; o ato apenas fica sem efeito.",
      },
      {
        termo: "Interinidade (art. 9º, parágrafo único, e art. 119)",
        faz: "O ocupante de cargo em comissão ou de natureza especial pode ser nomeado para ter exercício, interinamente, em outro cargo de confiança, sem deixar as atribuições do cargo atual. Nesse período, deve optar pela remuneração de um deles.",
        pista: "Fora da interinidade, o servidor não pode exercer mais de um cargo em comissão (art. 119).",
      },
      {
        parte: "6. Promoção",
        termo: "Promoção",
        faz: "É a passagem do servidor para o nível superior dentro da própria carreira, em regra pelos critérios de antiguidade e merecimento. É provimento derivado vertical, e não ascensão: o servidor continua na mesma carreira.",
        pista: "A promoção é, ao mesmo tempo, forma de provimento (do cargo superior) e de vacância (do cargo inferior). Os demais requisitos para a promoção vêm da lei das diretrizes do sistema de carreira e de seus regulamentos (art. 10, parágrafo único).",
      },
      {
        termo: "Tempo, progressão e escolas de governo",
        faz: "A promoção não interrompe o tempo de exercício, que é contado no novo posicionamento na carreira a partir da publicação do ato que promoveu o servidor (art. 17). Progressão (mudança de padrão dentro da mesma classe) não é forma de provimento.",
        pista: "A Constituição manda manter escolas de governo para formar e aperfeiçoar servidores, e a participação nos cursos pode ser requisito para a promoção na carreira (art. 39, § 2º).",
      },
      {
        parte: "7. Posse",
        termo: "Posse e exercício",
        faz: "Posse em 30 dias da publicação. Exercício em 15 dias da posse. Os dois prazos são improrrogáveis: a posse conta da publicação do ato de provimento (art. 13, § 1º); o exercício conta da data da posse (art. 15, § 1º).",
        pista: "Sem posse: ato sem efeito. Sem exercício: exoneração. Sem posse, o vínculo nem chegou a se formar, por isso não há exoneração (art. 13, § 6º). Depois da posse, o vínculo já existe: quem não entra em exercício é exonerado de ofício.",
      },
      {
        termo: "Termo de posse (art. 13)",
        faz: "A posse se dá pela assinatura do termo, que traz as atribuições, os deveres, as responsabilidades e os direitos do cargo; eles não podem ser alterados unilateralmente por nenhuma das partes, salvo os atos de ofício previstos em lei. Com a posse, o nomeado se torna servidor e assume o cargo.",
        pista: "É ato bilateral, mas não é contrato: o nomeado só aceita o regime fixado em lei. Antes da posse, o nomeado ainda não é servidor.",
      },
      {
        termo: "Regras da posse",
        faz: "Só há posse no provimento por nomeação (art. 13, § 4º). A posse pode ser feita por procuração específica (§ 3º); o exercício, nunca: só o próprio servidor exerce o cargo. No ato da posse, o servidor apresenta declaração de bens e valores e declaração sobre o exercício ou não de outro cargo, emprego ou função pública (§ 5º).",
        pista: "A escolaridade e a experiência profissional exigidas são comprovadas na posse, e não na inscrição (Súmula 266 do STJ; a regra também está no decreto federal sobre concursos).",
      },
      {
        termo: "Inspeção médica (art. 14)",
        faz: "A posse depende de prévia inspeção médica oficial. Só pode tomar posse quem for julgado apto física e mentalmente para o cargo.",
        pista: "Quem é julgado inapto não toma posse e também não pode ser readaptado em outro cargo: readaptação é só para quem já é servidor.",
      },
      {
        termo: "Prazo de posse suspenso (art. 13, § 2º)",
        faz: "Se o nomeado já é servidor e, na data da publicação, está em certas licenças ou afastamentos, o prazo de 30 dias só começa a contar quando o impedimento terminar.",
        pista: "Entram, entre outros: licença por doença em pessoa da família; serviço militar; capacitação; férias; programa de treinamento ou pós-graduação stricto sensu no País; júri e outros serviços obrigatórios por lei; licença à gestante, à adotante e paternidade; tratamento da própria saúde (até 24 meses no total); acidente em serviço ou doença profissional; deslocamento para a nova sede; competição desportiva nacional. Não entra a licença por afastamento do cônjuge (art. 84).",
      },
      {
        parte: "8. Exercício",
        termo: "Exercício (art. 15)",
        faz: "É o efetivo desempenho das atribuições do cargo público ou da função de confiança. Cabe à autoridade competente do órgão ou entidade para onde o servidor foi nomeado ou designado dar-lhe exercício.",
      },
      {
        termo: "Exercício na função de confiança",
        faz: "O exercício começa na data da publicação do ato de designação. Se o servidor estiver de licença ou afastado por motivo legal, começa no primeiro dia útil após o fim do impedimento, que não pode passar de 30 dias da publicação (art. 15).",
        pista: "Se não entrar em exercício, o ato de designação é tornado sem efeito, e não há exoneração: o designado já é servidor efetivo, e só deixa de assumir a função. Resumo: cargo provido = 15 dias da posse, senão exoneração; função de confiança = data da publicação, senão ato sem efeito.",
      },
      {
        termo: "Exercício em outra cidade (art. 18)",
        faz: "O servidor removido, redistribuído, requisitado, cedido ou posto em exercício provisório que deva ter exercício em outro município tem no mínimo 10 e no máximo 30 dias, contados da publicação do ato, para retomar as atribuições. O prazo já inclui o tempo de deslocamento para a nova sede.",
        pista: "Se estiver de licença ou afastado legalmente, o prazo conta do fim do impedimento (§ 1º). O servidor pode abrir mão do prazo e começar antes (§ 2º).",
      },
      {
        termo: "Jornada de trabalho (art. 19)",
        faz: "Fixada conforme as atribuições do cargo, com no máximo 40 horas semanais e entre 6 e 8 horas por dia. Leis especiais podem fixar outras jornadas (§ 2º), como no regime de plantão.",
        pista: "O ocupante de cargo em comissão ou de função de confiança fica em regime de integral dedicação ao serviço e pode ser convocado sempre que houver interesse da Administração (§ 1º).",
      },
      {
        termo: "Dois cargos e cargo em comissão (art. 120)",
        faz: "O servidor que acumula licitamente dois cargos efetivos, ao ser investido em cargo em comissão, fica afastado de ambos. Exceção: se houver compatibilidade de horário e local com um deles, declarada pelas autoridades máximas dos órgãos ou entidades envolvidos.",
        pista: "O início, a suspensão, a interrupção e o reinício do exercício são registrados no assentamento individual do servidor (art. 16).",
      },
      {
        parte: "9. Estágio probatório",
        termo: "Estágio probatório (art. 20)",
        faz: "Ao entrar em exercício, o nomeado para cargo efetivo passa por estágio probatório, em que se avaliam sua aptidão e capacidade para o cargo pelos fatores: assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade.",
        pista: "Estágio e estabilidade são coisas diferentes. O estágio é feito em cada novo cargo efetivo. A estabilidade é adquirida uma única vez no serviço público do mesmo ente: o estável que passa em outro concurso faz novo estágio, mas continua estável.",
      },
      {
        termo: "Duração do estágio: 36 meses",
        faz: "A Lei 8.112 ainda diz 24 meses, mas a EC 19/1998 aumentou para 3 anos o prazo da estabilidade (CF, art. 41). O STF e o STJ entendem que estágio e estabilidade, embora distintos, estão ligados e seguem o mesmo prazo de 3 anos (STF, STA 269 AgR e ARE 800.614 AgR; STJ, MS 12.523).",
        pista: "Histórico: a MP 431/2008 chegou a mudar a lei para 36 meses, mas a lei de conversão (Lei 11.784/2008) voltou a 24 meses. Para a prova: estágio probatório de 36 meses.",
      },
      {
        termo: "Avaliação e reprovação no estágio",
        faz: "Quatro meses antes do fim do estágio, a avaliação de desempenho, feita por comissão criada para isso, é submetida à homologação da autoridade competente, sem interromper a apuração dos cinco fatores (art. 20, § 1º). Reprovado, o servidor é exonerado ou, se já for estável, reconduzido ao cargo anterior (§ 2º).",
        pista: "A exoneração por reprovação no estágio não é punição, mas o servidor tem direito de defesa.",
      },
      {
        termo: "Cargos e cessão durante o estágio (§ 3º)",
        faz: "O servidor em estágio pode exercer quaisquer cargos em comissão ou funções de direção, chefia ou assessoramento no seu próprio órgão ou entidade. Só pode ser cedido a outro órgão para ocupar cargos de Natureza Especial ou cargos em comissão de nível mais alto (DAS 6, 5 e 4, ou equivalentes).",
      },
      {
        termo: "Licenças e afastamentos no estágio (§§ 4º e 5º)",
        faz: "Só podem ser concedidos ao servidor em estágio: licença por doença em pessoa da família; licença por afastamento do cônjuge ou companheiro; licença para o serviço militar; licença para atividade política; afastamento para mandato eletivo; afastamento para estudo ou missão no exterior; afastamento para servir em organismo internacional; afastamento para curso de formação de outro cargo federal.",
        pista: "O estágio fica suspenso, e é retomado depois, durante: licença por doença em pessoa da família; licença por afastamento do cônjuge ou companheiro; licença para atividade política; afastamento para servir em organismo internacional; curso de formação. Exemplo: na licença para atividade política, o estágio para de contar.",
      },
      {
        parte: "10. Readaptação",
        termo: "Readaptação",
        faz: "Cargo compatível com a limitação do servidor. Sem vaga, ele atua como excedente. É a investidura em cargo de atribuições e responsabilidades compatíveis com a limitação física ou mental que o servidor sofreu, verificada em inspeção médica (art. 24).",
        pista: "O novo cargo deve ter atribuições afins, e é preciso respeitar a habilitação exigida, o nível de escolaridade e a equivalência de vencimentos. Sem cargo vago, ele exerce as atribuições como excedente até surgir vaga (§ 2º). Se for julgado incapaz para o serviço público, é aposentado (§ 1º). A readaptação é forma de provimento e de vacância ao mesmo tempo.",
      },
      {
        parte: "11. Reversão",
        termo: "Reversão",
        faz: "Volta do aposentado. Por invalidez que acabou, ou a pedido, com aposentadoria voluntária nos 5 anos anteriores e cargo vago. É o retorno à atividade do servidor aposentado (art. 25).",
        pista: "Não cabe aos 70 anos. A regra é do art. 27 da Lei 8.112.",
      },
      {
        termo: "Reversão de ofício (art. 25, I)",
        faz: "Ocorre quando junta médica oficial declara que deixaram de existir os motivos da aposentadoria por invalidez. É ato vinculado: a Administração tem de reverter, mesmo que o servidor não queira.",
        pista: "Não importa se o servidor era estável nem se há cargo vago: sem vaga, ele exerce as atribuições como excedente até surgir uma (§ 3º).",
      },
      {
        termo: "Reversão a pedido (art. 25, II, e art. 27)",
        faz: "É feita no interesse da Administração, por isso é discricionária. Requisitos: 1) pedido do aposentado; 2) aposentadoria voluntária; 3) servidor estável quando estava na atividade; 4) aposentadoria nos cinco anos anteriores ao pedido; 5) cargo vago; 6) menos de 70 anos de idade.",
        pista: "Exemplo: o aposentado por invalidez que pede para voltar, sem laudo da junta dizendo que a incapacidade acabou, tem o pedido negado.",
      },
      {
        termo: "Reversão: 70 × 75 anos",
        faz: "A compulsória passou para 75 anos (EC 88/2015 e LC 152/2015, com base no art. 40, § 1º, II, da CF), mas o art. 27 da Lei 8.112 continua vedando a reversão de quem já tem 70 anos. Para a prova: compulsória aos 75 anos em todos os entes; reversão, na União, só até antes dos 70 anos.",
        pista: "O art. 186 da Lei 8.112 também ainda fala em compulsória aos 70, mas vale a LC 152/2015.",
      },
      {
        termo: "Efeitos da reversão",
        faz: "A reversão é feita no mesmo cargo ou no cargo resultante de sua transformação (§ 1º). O tempo em que o servidor estiver em exercício é contado para nova aposentadoria (§ 2º).",
        pista: "Na reversão a pedido, o servidor recebe a remuneração do cargo no lugar dos proventos, com as vantagens pessoais que já tinha (§ 4º), e só terá os proventos recalculados pelas regras atuais se ficar pelo menos cinco anos no cargo (§ 5º).",
      },
      {
        parte: "12. Reintegração, recondução e aproveitamento",
        termo: "Reintegração",
        faz: "Volta do estável demitido de forma inválida, com todas as vantagens. É a reinvestidura no cargo anterior, ou no cargo resultante de sua transformação, quando a demissão é invalidada por decisão administrativa ou judicial, com ressarcimento de todas as vantagens (art. 28; CF, art. 41, § 2º).",
        pista: "Se o cargo foi extinto, o reintegrado fica em disponibilidade (§ 1º). Se o cargo estiver ocupado, o ocupante é reconduzido ao cargo de origem, sem indenização, aproveitado em outro cargo ou posto em disponibilidade (§ 2º). A Constituição fala em sentença judicial; a Lei 8.112 inclui também a anulação pela própria Administração.",
      },
      {
        termo: "Demissão anulada de quem não é estável",
        faz: "A lei fala em reintegração só do estável. Mas a anulação tem efeitos retroativos (ex tunc): o servidor não estável demitido de forma ilegal também volta ao cargo.",
        pista: "Esse retorno apenas não recebe o nome técnico de reintegração.",
      },
      {
        termo: "Recondução",
        faz: "Volta do estável ao cargo anterior, por inabilitação em estágio de outro cargo ou por reintegração do antigo ocupante (art. 29; CF, art. 41, § 2º). Só se aplica ao servidor estável.",
        pista: "Exemplo 1: um técnico estável passa no concurso para analista e é reprovado no estágio do novo cargo; volta a ser técnico. Exemplo 2: um servidor estável assume a vaga de outro que foi demitido; anulada a demissão, o antigo ocupante é reintegrado, e o novo é reconduzido ao cargo de origem, sem indenização. Se o cargo de origem estiver ocupado, o reconduzido é aproveitado em outro (parágrafo único).",
      },
      {
        termo: "Recondução a pedido",
        faz: "O STF e o STJ admitem que o servidor estável desista do estágio probatório no novo cargo e peça para voltar ao cargo anterior (STF, RMS 22.933; STJ, MS 8.339).",
        pista: "A Advocacia-Geral da União tem súmula administrativa no mesmo sentido (Súmula AGU 16/2002).",
      },
      {
        termo: "Disponibilidade e aproveitamento",
        faz: "O estável sem cargo aguarda e volta por aproveitamento obrigatório em cargo compatível. Extinto o cargo ou declarada a sua desnecessidade, o estável fica em disponibilidade, com remuneração proporcional ao tempo de serviço (CF, art. 41, § 3º). Aproveitamento é a volta à atividade do servidor em disponibilidade, em cargo de atribuições e vencimentos compatíveis com o anterior (art. 30).",
        pista: "Só o estável tem disponibilidade: ele não pode ser demitido porque o cargo acabou. O órgão central do sistema de pessoal civil (SIPEC) determina o aproveitamento imediato em vaga que surgir (art. 31).",
      },
      {
        termo: "Aproveitamento obrigatório (art. 32)",
        faz: "O aproveitamento é vinculado para os dois lados: havendo vaga, a Administração tem de aproveitar, e o servidor tem de entrar em exercício. Se ele não entrar em exercício no prazo legal, o aproveitamento fica sem efeito e a disponibilidade é cassada, salvo doença comprovada por junta médica oficial.",
        pista: "A cassação de disponibilidade é penalidade disciplinar (art. 127, IV). A Lei 8.112 não fixa o prazo para entrar em exercício no aproveitamento.",
      },
      {
        parte: "13. Vacância",
        termo: "Vacância",
        faz: "Exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento. Vacância é quando o servidor desocupa o cargo, que fica livre para outra pessoa (art. 33).",
        pista: "Exoneração, demissão e falecimento rompem de vez o vínculo com a Administração. Promoção, readaptação, aposentadoria e posse em outro cargo inacumulável mudam o vínculo ou criam um novo. Ascensão e transferência não são mais formas de vacância: foram revogadas.",
      },
      {
        termo: "Provimento e vacância ao mesmo tempo",
        faz: "Promoção e readaptação são, ao mesmo tempo, formas de provimento e de vacância: o servidor deixa um cargo vago e passa a ocupar outro.",
        pista: "Posse em outro cargo inacumulável é o popular “pedido de vacância”: o servidor passa em outro concurso e assume um cargo que não pode acumular com o atual (CF, art. 37, XVI).",
      },
      {
        termo: "Aposentadoria, falecimento e demissão",
        faz: "Aposentadoria é a passagem para a inatividade: voluntária, compulsória (aos 75 anos) ou por invalidez. Falecimento é o fato que gera a vacância pela morte do servidor. Demissão é penalidade por infração funcional grave, aplicada por processo administrativo disciplinar (art. 127, III).",
      },
      {
        termo: "Exoneração (arts. 34 e 35)",
        faz: "Desligamento sem caráter de punição. No cargo efetivo, é a pedido ou de ofício. De ofício, a lei prevê: 1) reprovação no estágio probatório; 2) posse sem entrada em exercício no prazo (art. 34, parágrafo único). No cargo em comissão e na função de confiança: a juízo da autoridade competente ou a pedido (art. 35).",
        pista: "Outros casos de exoneração de ofício: estável reprovado na avaliação periódica de desempenho (CF, art. 41, § 1º, III, que ainda depende de lei complementar); excesso de despesa com pessoal (CF, art. 169: primeiro, corte de pelo menos 20% dos gastos com cargos em comissão e funções de confiança; depois, os não estáveis; por último, os estáveis); cargo em comissão, de livre exoneração, sem motivação; não estável cujo cargo foi extinto; não estável que ocupava o cargo de um servidor reintegrado.",
      },
      {
        parte: "14. Remoção",
        termo: "Remoção e redistribuição",
        faz: "Na remoção, o servidor muda dentro do mesmo quadro. Na redistribuição, o cargo vai para outro órgão do mesmo Poder. As duas são formas de deslocamento: não são provimento nem vacância.",
        pista: "Remoção é o deslocamento do servidor, a pedido ou de ofício, no âmbito do mesmo quadro, com ou sem mudança de sede (art. 36). Exemplo: ir de uma unidade para outra do mesmo órgão na mesma cidade (sem mudança de sede) ou em outra cidade (com mudança de sede). O vínculo e o cargo continuam os mesmos.",
      },
      {
        termo: "Três modalidades de remoção",
        faz: "1) De ofício, no interesse da Administração: discricionária e irrecusável para o servidor (poder hierárquico); 2) a pedido, a critério da Administração: discricionária, pode ser negada; 3) a pedido, para outra localidade, independentemente do interesse da Administração: vinculada, deve ser concedida se cumpridos os requisitos (art. 36, parágrafo único).",
        pista: "A remoção de ofício precisa de motivo verdadeiro. Se o servidor provar que foi removido por perseguição, e não por falta de pessoal na unidade de destino, o ato é nulo pela teoria dos motivos determinantes. A definição de remoção que cita só o pedido e exclui a remoção de ofício está errada.",
      },
      {
        termo: "Remoção independente do interesse da Administração",
        faz: "Três hipóteses: 1) acompanhar cônjuge ou companheiro, também servidor público civil ou militar, de qualquer Poder e de qualquer ente, que foi deslocado no interesse da Administração; 2) motivo de saúde do servidor, do cônjuge, do companheiro ou de dependente que viva às suas custas e conste do assentamento funcional, comprovado por junta médica oficial; 3) processo seletivo, quando há mais interessados do que vagas, pelas normas do órgão (o “concurso de remoção”, em geral por antiguidade).",
      },
      {
        termo: "Remoção para acompanhar cônjuge",
        faz: "Não cabe na primeira investidura: quem passa no concurso e é nomeado para outra cidade já sabia, pelo edital, que poderia trabalhar longe da família (STJ, AgRg no REsp 676.430). A coabitação não é requisito: o casal não precisa morar junto para ter o direito (STJ, REsp 1.603.404).",
        pista: "O STJ amplia o conceito de servidor: o servidor pode ser removido para acompanhar cônjuge empregado de empresa pública federal deslocado no interesse da Administração (MS 14.195; proteção da família, CF, art. 226). O inverso não vale: o empregado público não segue a Lei 8.112 e não pode pedir essa remoção para acompanhar cônjuge servidor.",
      },
      {
        parte: "15. Redistribuição",
        termo: "Redistribuição (art. 37)",
        faz: "É o deslocamento de cargo de provimento efetivo, ocupado ou vago, no âmbito do quadro geral de pessoal, para outro órgão ou entidade do mesmo Poder. É sempre de ofício, para ajustar a lotação e a força de trabalho às necessidades do serviço, inclusive na reorganização, extinção ou criação de órgão ou entidade (§ 1º).",
        pista: "Na remoção, vai o servidor, e o número de cargos de cada quadro não muda. Na redistribuição, vai o cargo, e os quadros mudam; se o cargo estiver ocupado, o servidor vai junto. Por ser de ofício, a redistribuição independe de estabilidade.",
      },
      {
        termo: "Requisitos da redistribuição",
        faz: "1) Interesse da Administração; 2) equivalência de vencimentos; 3) manutenção da essência das atribuições do cargo; 4) vinculação entre os graus de responsabilidade e complexidade das atividades; 5) mesmo nível de escolaridade, especialidade ou habilitação profissional; 6) compatibilidade entre as atribuições do cargo e as finalidades institucionais do órgão ou entidade.",
        pista: "A redistribuição de cargos vagos é feita por ato conjunto do órgão central do SIPEC e dos órgãos e entidades envolvidos (§ 2º).",
      },
      {
        termo: "Servidor que não é redistribuído",
        faz: "Na reorganização ou extinção de órgão, extinto o cargo ou declarada sua desnecessidade, o servidor estável que não for redistribuído fica em disponibilidade até seu aproveitamento (§ 3º).",
        pista: "Outra saída: o servidor não redistribuído nem posto em disponibilidade pode ficar sob responsabilidade do órgão central do SIPEC e ter exercício provisório em outro órgão ou entidade até ser aproveitado (§ 4º).",
      },
      {
        parte: "16. Substituição",
        termo: "Substituição (arts. 38 e 39)",
        faz: "Garante a continuidade do serviço. Os ocupantes de cargo ou função de direção ou chefia e de cargo de Natureza Especial têm substitutos indicados no regimento interno; se o regimento for omisso, o dirigente máximo do órgão ou entidade os designa previamente. Vale também para os titulares de unidades administrativas organizadas em nível de assessoria (art. 39).",
        pista: "Exemplo: o diretor de uma unidade sai de férias, e o substituto assume durante esse período.",
      },
      {
        termo: "Como funciona a substituição",
        faz: "Nos afastamentos, impedimentos legais ou regulamentares do titular e na vacância do cargo, o substituto assume de forma automática e cumulativa, sem deixar o cargo que já ocupa, e deve optar pela remuneração de um deles (art. 38, § 1º).",
        pista: "Se o afastamento do titular passar de 30 dias seguidos, o substituto recebe a retribuição do cargo ou função, paga na proporção dos dias de substituição que passarem desse período (§ 2º).",
      },
    ],
    cuidado:
      "Exoneração não é punição. Demissão é pena, e só vem depois de processo disciplinar. E não confunda: sem posse em 30 dias, o ato de nomeação fica sem efeito; empossado sem exercício em 15 dias, o servidor é exonerado. Estágio probatório: 36 meses. Reversão: vedada a partir dos 70 anos, mesmo com a compulsória aos 75.",
  },
  questoes: [
    {
      topico: "Posse e exercício",
      subassunto: "Prazos",
      dificuldade: 4,
      raciocinio: "Sem posse ainda não há servidor. Com posse, já há o que exonerar.",
      enunciado:
        "Um nomeado para cargo federal não toma posse no prazo. Outro toma posse, mas não entra em exercício no prazo. Pela Lei 8.112, as consequências são, respectivamente,",
      alternativas: [
        "exoneração de ofício para os dois, sem nenhuma exceção prevista",
        "demissão para os dois, depois de processo disciplinar",
        "ato sem efeito para o primeiro e exoneração para o segundo",
        "exoneração para o primeiro e ato sem efeito para o segundo",
        "nova convocação para os dois, com prazo em dobro",
      ],
      correta: 2,
      explicacao: "O art. 13, § 6º, torna sem efeito o ato de provimento sem posse em 30 dias. O art. 15, § 2º, prevê exoneração de quem não entra em exercício em 15 dias.",
      explicacaoErradas:
        "“exoneração de ofício para os dois” esquece que sem posse não há investidura. “demissão” é pena. “exoneração para o primeiro” inverte as consequências. “prazo em dobro” não existe.",
      pegadinha: "Inverter as duas consequências.",
      conhecimento: "A posse pode ocorrer por procuração específica (art. 13, § 3º).",
    },
    {
      topico: "Formas de provimento",
      subassunto: "Recondução",
      dificuldade: 4,
      raciocinio: "Estável que não passou no estágio de outro cargo volta ao anterior.",
      enunciado:
        "Um servidor federal estável toma posse em outro cargo federal inacumulável e é inabilitado no estágio probatório do novo cargo. Pela Lei 8.112, ele",
      alternativas: [
        "será exonerado de ofício e perderá o vínculo com a União",
        "será reintegrado ao cargo anterior, com todas as vantagens",
        "será revertido ao cargo anterior, se houver interesse público",
        "ficará em disponibilidade até a abertura de nova vaga",
        "será reconduzido ao cargo anterior, pois já era estável",
      ],
      correta: 4,
      explicacao: "O art. 29, I, prevê a recondução por inabilitação em estágio probatório relativo a outro cargo. Se o cargo de origem estiver ocupado, ele será aproveitado em outro.",
      explicacaoErradas:
        "“exonerado de ofício” é a saída de quem não tem estabilidade anterior. “reintegrado” exige demissão invalidada. “revertido” é do aposentado. “disponibilidade” não é a primeira solução.",
      pegadinha: "Trocar recondução por reintegração.",
      conhecimento: "O estágio não é dispensado por estabilidade em outro cargo.",
    },
    {
      topico: "Formas de provimento",
      subassunto: "Reintegração",
      dificuldade: 5,
      raciocinio: "Quem foi demitido de forma inválida volta. O ocupante é quem cede.",
      enunciado:
        "A demissão de um servidor estável foi anulada por decisão judicial. Seu cargo está ocupado por outro servidor, também estável. Nesse caso,",
      alternativas: [
        "o demitido volta, e o ocupante é reconduzido sem indenização",
        "o demitido fica em disponibilidade até surgir uma vaga",
        "o ocupante fica no cargo, e o demitido recebe só indenização",
        "o demitido volta, e o ocupante recebe indenização da União",
        "o demitido é readaptado em outro cargo de mesmo nível",
      ],
      correta: 0,
      explicacao: "O art. 28 garante a reintegração com ressarcimento das vantagens. Pelo § 2º, o ocupante é reconduzido sem indenização, aproveitado em outro cargo ou posto em disponibilidade.",
      explicacaoErradas:
        "“disponibilidade” para o demitido só cabe se o cargo foi extinto. “recebe só indenização” nega a reintegração. “recebe indenização” contraria o § 2º. “readaptado” pressupõe limitação física ou mental.",
      pegadinha: "Dar indenização ao ocupante.",
      conhecimento: "A reintegração pode vir de decisão administrativa ou judicial.",
    },
    {
      topico: "Formas de provimento",
      subassunto: "Reversão",
      dificuldade: 5,
      raciocinio: "Confira os requisitos do art. 25, II, um por um.",
      enunciado:
        "Um servidor estável aposentou-se voluntariamente há seis anos, tem 62 anos de idade e pede para voltar a um cargo vago, no interesse da Administração. O pedido",
      alternativas: [
        "pode ser atendido, pois há cargo vago e interesse público",
        "só cabe após laudo de junta médica oficial favorável",
        "é vedado, pois já passou da idade de 60 anos",
        "é vedado, pois já passou o limite de cinco anos",
        "é vedado, pois a reversão só vale para aposentado por invalidez",
      ],
      correta: 3,
      explicacao: "O art. 25, II, “d”, exige que a aposentadoria tenha ocorrido nos cinco anos anteriores à solicitação. Aqui se passaram seis.",
      explicacaoErradas:
        "“há cargo vago” é só um dos requisitos. “junta médica” é da reversão por invalidez. “60 anos” não é o limite, pois o art. 27 fala em 70. “só vale” esquece a reversão a pedido.",
      pegadinha: "Olhar o cargo vago e esquecer o prazo.",
      conhecimento: "A reversão ocorre no mesmo cargo ou no resultante de sua transformação.",
    },
    {
      topico: "Formas de provimento",
      subassunto: "Readaptação",
      dificuldade: 4,
      raciocinio: "Sem vaga, a lei manda atuar como excedente.",
      enunciado:
        "Após um acidente, um servidor sofre limitação física verificada em inspeção médica, mas pode exercer atribuições afins. Não há cargo vago compatível. Ele",
      alternativas: [
        "será aposentado por invalidez, pois falta o cargo vago",
        "atuará como excedente até surgir vaga no cargo compatível",
        "ficará em disponibilidade até a abertura de um cargo compatível",
        "será exonerado de ofício, pois não pode mais exercer o cargo",
        "será reconduzido ao cargo de origem, com nova inspeção",
      ],
      correta: 1,
      explicacao: "O art. 24, § 2º, manda respeitar habilitação, escolaridade e equivalência de vencimentos. Sem vaga, o servidor atua como excedente.",
      explicacaoErradas:
        "“aposentado” só se ele for julgado incapaz para o serviço público. “disponibilidade” liga-se à extinção do cargo. “exonerado” não é a solução legal. “reconduzido” exige outra situação.",
      pegadinha: "Usar a disponibilidade para qualquer falta de vaga.",
      conhecimento: "A readaptação é forma de provimento e também de vacância.",
    },
    {
      topico: "Formas de provimento",
      subassunto: "Aproveitamento",
      dificuldade: 5,
      raciocinio: "Aproveitamento é obrigatório também para o servidor.",
      enunciado:
        "Um servidor em disponibilidade é aproveitado em cargo compatível, mas não entra em exercício no prazo legal, e não há doença comprovada por junta médica. Nesse caso,",
      alternativas: [
        "ele é demitido, após processo administrativo disciplinar",
        "ele recebe novo prazo, igual ao dobro do primeiro",
        "ele continua em disponibilidade, até a próxima vaga",
        "ele é aposentado com proventos proporcionais ao tempo de serviço",
        "o aproveitamento fica sem efeito e a disponibilidade é cassada",
      ],
      correta: 4,
      explicacao: "É a regra do art. 32: fica sem efeito o aproveitamento e é cassada a disponibilidade, salvo doença comprovada por junta médica oficial.",
      explicacaoErradas:
        "“demitido” não é a consequência prevista no art. 32. “novo prazo” não existe. “continua em disponibilidade” ignora a cassação. “aposentado” não tem base.",
      pegadinha: "Achar que a disponibilidade continua sem consequência.",
      conhecimento: "A cassação de disponibilidade também é pena disciplinar (art. 127, IV).",
    },
    {
      topico: "Remoção",
      subassunto: "Cônjuge",
      dificuldade: 5,
      raciocinio: "Para ser direito, o cônjuge precisa ter sido deslocado no interesse da Administração.",
      enunciado:
        "Um servidor federal quer remoção para outra cidade para acompanhar o cônjuge, também servidor, que mudou de lotação a pedido próprio e sem interesse da Administração. Esse pedido",
      alternativas: [
        "é direito do servidor, pois protege a unidade da família",
        "é direito do servidor, se o cônjuge for de outro Poder",
        "fica a critério da Administração, pois houve pedido do cônjuge",
        "é proibido, pois os dois servidores têm o mesmo vínculo",
        "é proibido enquanto o cônjuge estiver em estágio probatório do cargo",
      ],
      correta: 2,
      explicacao: "A remoção independente do interesse da Administração exige cônjuge deslocado no interesse dela (art. 36, parágrafo único, III, “a”). Sem isso, cai no inciso II: a pedido, a critério da Administração.",
      explicacaoErradas:
        "“unidade da família” não dispensa o requisito legal. “outro Poder” não muda nada, pois a lei alcança todos os Poderes. “mesmo vínculo” e “estágio probatório” não proíbem o pedido.",
      pegadinha: "Achar que todo cônjuge dá direito à remoção.",
      conhecimento: "A remoção por saúde depende de comprovação por junta médica oficial.",
    },
    {
      topico: "Redistribuição",
      subassunto: "Remoção x redistribuição",
      dificuldade: 4,
      raciocinio: "Quem muda: o servidor ou o cargo?",
      enunciado:
        "O cargo efetivo ocupado por um servidor passa, com prévia apreciação do órgão central de pessoal, do quadro de um órgão para outro do mesmo Poder. Esse deslocamento é",
      alternativas: [
        "redistribuição, pois quem se desloca é o próprio cargo",
        "remoção, pois o servidor muda de lugar no mesmo quadro",
        "cessão, pois o órgão de origem mantém o vínculo com ele",
        "requisição, que é ato obrigatório do órgão de destino",
        "readaptação, pois o cargo muda de órgão e de atribuições",
      ],
      correta: 0,
      explicacao: "O art. 37 define redistribuição como o deslocamento de cargo efetivo, ocupado ou vago, para outro órgão ou entidade do mesmo Poder.",
      explicacaoErradas:
        "“remoção” ocorre no mesmo quadro. “cessão” é do servidor, e não do cargo. “requisição” não muda o quadro do cargo. “readaptação” exige limitação física ou mental.",
      pegadinha: "Trocar redistribuição por remoção.",
      conhecimento: "A redistribuição exige equivalência de vencimentos e manutenção da essência das atribuições.",
    },
    {
      topico: "Concurso público",
      subassunto: "Novo concurso",
      dificuldade: 5,
      raciocinio: "A lei federal é mais rígida que a Constituição.",
      enunciado:
        "Há aprovados em concurso federal regido pela Lei 8.112, ainda na validade, e o órgão quer abrir novo concurso para o mesmo cargo. Nesse caso,",
      alternativas: [
        "pode abrir, pois a Constituição dá só a prioridade na convocação",
        "pode abrir, desde que o prazo do primeiro já tenha sido prorrogado",
        "pode abrir, se for com outra banca organizadora",
        "não pode abrir, pois a Lei 8.112 veda isso nesse período",
        "não pode abrir, salvo com autorização do Presidente da República",
      ],
      correta: 3,
      explicacao: "O art. 12, § 2º, diz que não se abrirá novo concurso enquanto houver candidato aprovado em concurso anterior com validade não expirada.",
      explicacaoErradas:
        "“só a prioridade” é o texto do art. 37, IV, da CF, mas a lei federal foi além. “prorrogado” e “outra banca” não afastam a vedação. “autorização do Presidente” não é exceção da lei.",
      pegadinha: "Aplicar só a Constituição a um concurso federal.",
      conhecimento: "O art. 11 da Lei 8.112 permite concurso de provas ou de provas e títulos, em até duas etapas.",
    },
  ],
};
