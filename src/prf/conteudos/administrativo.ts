import type { ConteudoPrf } from "../../data/prf";

export const CONTEUDO_PRF_ADM: ConteudoPrf[] = [
  {
    materia: "adm",
    topico: "Ato administrativo",
    texto: `Ato administrativo é a manifestação unilateral de vontade da Administração, ou de quem lhe faça as vezes, que, sob regime de direito público, produz efeitos jurídicos imediatos e se sujeita a controle pelo Judiciário. Não se confunde com o fato administrativo (acontecimento material, como a colisão de uma viatura) nem com os atos de direito privado praticados pela Administração.

Elementos (requisitos de validade):
• Competência: definida em lei; é irrenunciável, mas admite delegação e avocação nos limites legais.
• Finalidade: sempre o interesse público, e a finalidade específica é a que a lei fixou para aquele ato. Usar o ato para outro fim é desvio de finalidade.
• Forma: em regra escrita. O vício de forma não essencial pode ser convalidado.
• Motivo: a situação de fato e de direito que autoriza o ato. Motivação é a exposição desse motivo (art. 50 da Lei 9.784/1999).
• Objeto: o efeito jurídico imediato, isto é, o conteúdo do ato.

Vinculado x discricionário:
• No ato vinculado, a lei fixa todos os elementos.
• No discricionário, a lei deixa margem de conveniência e oportunidade (o mérito), que fica no motivo e no objeto. Competência, finalidade e forma são sempre vinculadas.
• O Judiciário controla a legalidade de qualquer ato, inclusive a razoabilidade do discricionário, mas não substitui a escolha do administrador.

Atributos:
• Presunção de legitimidade e de veracidade: o ato vale até prova em contrário (presunção relativa).
• Imperatividade: impõe obrigações a terceiros independentemente da concordância deles. Nem todo ato tem: licenças e certidões, por exemplo, não têm.
• Autoexecutoriedade: a própria Administração executa o ato, sem ordem judicial, quando a lei prevê ou a urgência exige. A cobrança forçada de multa não é autoexecutória: depende de execução judicial.
• Tipicidade: o ato deve corresponder a uma figura definida em lei.

Teoria dos motivos determinantes: o motivo declarado passa a condicionar a validade do ato, mesmo quando a lei dispensava motivação. Motivo falso ou inexistente torna o ato nulo.

Convalidação (art. 55 da Lei 9.784/1999): defeitos sanáveis podem ser corrigidos, com efeitos retroativos, se não houver lesão ao interesse público nem prejuízo a terceiros. Em regra, são sanáveis o vício de competência (salvo competência exclusiva) e o de forma (salvo forma essencial). Vícios de motivo, objeto e finalidade não se convalidam.`,
    exemplos: [
      "Um motorista é multado pela PRF por excesso de velocidade: o ato é imperativo e se presume verdadeiro, mas, se a multa não for paga, a Administração não pode tomar o dinheiro por conta própria. A cobrança forçada depende de execução judicial.",
      "Um diretor exonera um comissionado alegando \"extinção do cargo\" e, na semana seguinte, nomeia outra pessoa para o mesmo cargo. O motivo declarado era falso, e a exoneração pode ser anulada pela teoria dos motivos determinantes.",
    ],
    curiosidade:
      "O silêncio da Administração não é ato administrativo: é fato jurídico. Ele só vale como deferimento ou indeferimento quando a lei atribui essa consequência a ele.",
  },
  {
    materia: "adm",
    topico: "Anulação, revogação e prescrição",
    texto: `As formas de extinção do ato administrativo mais cobradas são a anulação e a revogação, resumidas na Súmula 473 do STF: a Administração pode anular os próprios atos ilegais, porque deles não se originam direitos, ou revogá-los por conveniência ou oportunidade, respeitados os direitos adquiridos e ressalvada, em todos os casos, a apreciação judicial. O art. 53 da Lei 9.784/1999 reforça: a Administração deve anular os atos ilegais e pode revogar os inconvenientes.

Anulação:
• Motivo: ilegalidade.
• Quem anula: a própria Administração (autotutela, de ofício ou a pedido) ou o Judiciário, quando provocado.
• Efeitos: ex tunc (retroagem), ressalvados os terceiros de boa-fé.
• Prazo (art. 54 da Lei 9.784/1999): a Administração decai em 5 anos do direito de anular atos que geram efeitos favoráveis ao destinatário, salvo comprovada má-fé. Nos efeitos patrimoniais contínuos, o prazo conta do primeiro pagamento.

Revogação:
• Motivo: conveniência e oportunidade (mérito).
• Quem revoga: só a Administração. O Judiciário revoga apenas os próprios atos administrativos, quando exerce função administrativa.
• Efeitos: ex nunc (não retroagem).
• Limites: não se revogam atos vinculados, atos que já exauriram seus efeitos nem atos que geraram direito adquirido.

Outras formas de extinção:
• Cassação: o beneficiário descumpre as condições do ato (licença cassada).
• Caducidade: norma nova torna incompatível a situação antes permitida.
• Contraposição: ato posterior, de competência diversa, com efeitos opostos (a exoneração extingue os efeitos da nomeação).

Prescrição contra e a favor da Administração:
• Dívidas e ações contra a Fazenda Pública: 5 anos (Decreto 20.910/1932). Indenização por danos causados por agentes públicos: 5 anos (Lei 9.494/1997, art. 1º-C).
• Ação punitiva federal no exercício do poder de polícia: 5 anos da prática do ato ou, na infração permanente ou continuada, do dia em que cessou (Lei 9.873/1999).
• Ação disciplinar (art. 142 da Lei 8.112/1990): 5 anos para demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão; 2 anos para suspensão; 180 dias para advertência. O prazo conta da data em que o fato se tornou conhecido, e a abertura de sindicância ou de PAD interrompe a prescrição.`,
    exemplos: [
      "Por erro de cálculo, um servidor recebe de boa-fé, desde 2019, um adicional maior que o devido. Passados 5 anos do primeiro pagamento, a Administração já não pode anular a concessão (art. 54).",
      "A PRF autoriza, por conveniência, que uma associação de servidores use uma sala da unidade e depois revoga a autorização para instalar ali um posto de atendimento. A revogação vale dali em diante e não desfaz o uso já ocorrido.",
    ],
    curiosidade:
      "Pela Súmula 635 do STJ, a prescrição disciplinar conta de quando a autoridade competente para instaurar o processo toma conhecimento do fato, é interrompida pelo primeiro ato válido de instauração e volta a correr por inteiro 140 dias depois.",
  },
  {
    materia: "adm",
    topico: "Controle da administração pública",
    texto: `Controle é o poder de fiscalização e correção exercido sobre a atividade administrativa, para garantir a legalidade e, conforme o caso, a eficiência e a economicidade.

Classificações:
• Quanto ao órgão: administrativo (feito pela própria Administração), legislativo (Congresso, com auxílio do TCU) e judicial.
• Quanto à posição: interno, dentro do mesmo Poder (no Executivo federal, a CGU), ou externo, de um Poder sobre outro.
• Quanto ao momento: prévio, concomitante ou posterior.
• Quanto ao aspecto: de legalidade ou de mérito. O mérito só é revisto pela própria Administração.

Controle administrativo:
• Autotutela: anular os atos ilegais e revogar os inconvenientes (Súmula 473 do STF).
• Hierárquico: entre órgãos escalonados da mesma pessoa jurídica; é pleno e permanente.
• Tutela ou supervisão ministerial: da administração direta sobre as entidades da indireta. Não há hierarquia, só controle finalístico nos limites da lei. O recurso de uma decisão da autarquia ao ministério supervisor, quando a lei o admite, chama-se recurso hierárquico impróprio.
• Meios: direito de petição, representação, reclamação, pedido de reconsideração e recursos.

Controle legislativo e Tribunal de Contas (arts. 70 e 71 da Constituição):
• O Congresso Nacional exerce o controle externo com o auxílio do TCU.
• O TCU emite parecer prévio sobre as contas anuais do Presidente da República em 60 dias, mas quem as julga é o Congresso (art. 49, IX).
• O TCU julga as contas dos demais administradores e responsáveis por dinheiros públicos.
• Ilegalidade em ato: o TCU assina prazo para a correção e, se não for atendido, susta o ato, comunicando a decisão à Câmara e ao Senado.
• Ilegalidade em contrato: a sustação é adotada diretamente pelo Congresso, que pede ao Executivo as medidas cabíveis. Se nada for feito em 90 dias, o TCU decide a respeito.
• As decisões do TCU que imputam débito ou multa têm eficácia de título executivo.

Controle judicial:
• Alcança a legalidade de qualquer ato, inclusive a razoabilidade e a proporcionalidade dos discricionários, sem substituir o mérito.
• Meios: mandado de segurança, ação popular, ação civil pública, habeas data, mandado de injunção e ação de improbidade.`,
    exemplos: [
      "Um servidor da PRF tem um pedido negado pelo chefe e recorre ao superintendente: é controle hierárquico, exercido dentro da mesma pessoa jurídica, a União.",
      "O TCU encontra sobrepreço num contrato de manutenção de viaturas. Não pode sustar o contrato por conta própria: comunica o Congresso, que susta e pede providências ao Executivo. Se em 90 dias nada for feito, o TCU decide.",
    ],
    curiosidade:
      "Pela Súmula Vinculante 3, os processos no TCU asseguram contraditório e ampla defesa quando a decisão puder anular ou revogar ato que beneficie o interessado. A exceção é a apreciação da legalidade da concessão inicial de aposentadoria, reforma e pensão.",
  },
  {
    materia: "adm",
    topico: "Agentes públicos: investidura, direitos e deveres",
    texto: `Agente público é toda pessoa que exerce função pública, ainda que de forma transitória ou sem remuneração, por eleição, nomeação, designação, contratação ou qualquer outra forma de vínculo.

Espécies (classificação usual):
• Agentes políticos: chefes do Executivo, ministros e secretários, parlamentares; para parte da doutrina, também magistrados e membros do Ministério Público.
• Servidores estatutários: ocupam cargo público sob regime legal. Na União, a Lei 8.112/1990.
• Empregados públicos: ocupam emprego sob o regime da CLT, como nas empresas públicas e sociedades de economia mista.
• Temporários: contratados por tempo determinado para atender a necessidade temporária de excepcional interesse público (art. 37, IX).
• Particulares em colaboração: requisitados (mesários, jurados, conscritos), voluntários, delegados de serviço (concessionários, notários) e credenciados.
• Militares: regime jurídico próprio.

Cargo, função e emprego:
• Cargo: conjunto de atribuições e responsabilidades, criado por lei, sob regime estatutário.
• Função de confiança: exercida exclusivamente por ocupantes de cargo efetivo.
• Cargo em comissão: de livre nomeação e exoneração, preenchido por servidores de carreira nos casos, condições e percentuais mínimos da lei. Funções de confiança e cargos em comissão destinam-se apenas a direção, chefia e assessoramento (art. 37, V).

Investidura:
• Cargos e empregos são acessíveis aos brasileiros e aos estrangeiros, na forma da lei (art. 37, I).
• Cargo efetivo e emprego público dependem de aprovação prévia em concurso de provas ou de provas e títulos, ressalvados os cargos em comissão (art. 37, II).
• A investidura em cargo ocorre com a posse (art. 7º da Lei 8.112/1990).

Direitos e deveres na Constituição:
• Remuneração por subsídio (parcela única) ou por vencimentos, com irredutibilidade (art. 37, XV).
• Teto (art. 37, XI): o subsídio dos Ministros do STF é o limite geral. Não entram no cálculo as parcelas de caráter indenizatório previstas em lei, como diárias e ajuda de custo (§ 11).
• Livre associação sindical (art. 37, VI) e direito de greve nos termos de lei específica (art. 37, VII).
• Deveres de probidade, eficiência e prestação de contas.`,
    exemplos: [
      "Quem é convocado para trabalhar como mesário numa eleição é agente público na categoria de particular em colaboração: exerce função pública sem perder a condição de particular.",
      "Um agente administrativo da PRF que viaja a serviço recebe diárias. Elas indenizam despesas e não entram no cálculo do teto remuneratório.",
    ],
    curiosidade:
      "Enquanto não vem a lei específica de greve dos servidores, o STF manda aplicar, no que couber, a lei de greve do setor privado (Lei 7.783/1989). Os dias parados devem ser descontados, salvo acordo de compensação ou greve provocada por conduta ilícita do próprio poder público.",
  },
  {
    materia: "adm",
    topico: "Poderes da administração",
    texto: `Os poderes administrativos são instrumentos que a Administração usa para alcançar o interesse público. Por isso são poderes-deveres: irrenunciáveis, e o agente que deixa de exercê-los quando deveria comete omissão.

Vinculado e discricionário:
• Vinculado: a lei fixa todos os elementos do ato, como na aposentadoria compulsória.
• Discricionário: a lei deixa margem de escolha quanto à conveniência e à oportunidade, sempre dentro dos limites legais.

Poder hierárquico:
• Distribui e escalona funções entre órgãos e agentes da mesma pessoa jurídica: dar ordens, fiscalizar, rever atos, delegar e avocar.
• Não existe entre a administração direta e as entidades da indireta; ali há tutela.

Poder disciplinar:
• Apura infrações e aplica penalidades a quem está sujeito à disciplina administrativa: servidores e particulares com vínculo específico, como as empresas contratadas.
• Exige processo com contraditório e ampla defesa.

Poder regulamentar (normativo):
• Edição de atos gerais para a fiel execução das leis (art. 84, IV, da Constituição).
• Decreto autônomo só nas hipóteses do art. 84, VI: organização e funcionamento da administração federal, sem aumento de despesa nem criação ou extinção de órgãos, e extinção de funções ou cargos vagos.
• O Congresso pode sustar os atos normativos que exorbitem do poder regulamentar (art. 49, V).

Poder de polícia:
• Limita e condiciona direitos e liberdades individuais em benefício do interesse público (art. 78 do CTN).
• Atributos: discricionariedade (em regra), autoexecutoriedade e coercibilidade.
• Ciclo: ordem, consentimento, fiscalização e sanção. O STF admite delegar consentimento, fiscalização e sanção, por lei, a pessoas jurídicas de direito privado da administração indireta, de capital majoritariamente público, que prestem exclusivamente serviço público próprio do Estado em regime não concorrencial. A ordem de polícia (a norma) é indelegável.
• Polícia administrativa (atua sobre bens, direitos e atividades) não se confunde com polícia judiciária (apura infrações penais).

Abuso de poder:
• Excesso de poder: o agente atua além da sua competência.
• Desvio de finalidade (ou de poder): o agente age dentro da competência, mas para fim diverso do previsto em lei.`,
    exemplos: [
      "Na fiscalização de uma rodovia, a PRF retém um veículo sem condições de segurança até que a irregularidade seja sanada: é poder de polícia autoexecutório, sem necessidade de ordem judicial.",
      "Uma empresa contratada para a limpeza de uma unidade da PRF descumpre o contrato e é multada: é poder disciplinar, porque há vínculo específico com a Administração. A multa a um motorista qualquer decorre do poder de polícia.",
    ],
    curiosidade:
      "O exercício do poder de polícia é um dos fatos geradores de taxa (art. 145, II, da Constituição). É daí que vêm as taxas de fiscalização cobradas por órgãos e entidades que fiscalizam atividades privadas.",
  },
  {
    materia: "adm",
    topico: "Princípios da administração pública",
    texto: `O art. 37 da Constituição impõe à administração direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios cinco princípios expressos: legalidade, impessoalidade, moralidade, publicidade e eficiência. A eficiência foi incluída pela EC 19/1998.

Princípios expressos:
• Legalidade: o particular pode fazer tudo o que a lei não proíbe; o administrador só pode fazer o que a lei autoriza ou determina.
• Impessoalidade: atuação voltada ao interesse público, sem favorecimentos nem perseguições. Os atos são imputados ao órgão, não ao agente, e por isso a publicidade oficial deve ter caráter educativo, informativo ou de orientação social, sem nomes, símbolos ou imagens que caracterizem promoção pessoal (art. 37, § 1º).
• Moralidade: exige honestidade, boa-fé e lealdade. O ato lesivo à moralidade administrativa pode ser atacado por ação popular (art. 5º, LXXIII).
• Publicidade: transparência e condição de eficácia dos atos. O sigilo só cabe nas hipóteses legais, como a segurança da sociedade e do Estado e a proteção da intimidade.
• Eficiência: melhor resultado com o menor custo; fundamenta, por exemplo, a avaliação periódica de desempenho do servidor.

Princípios implícitos ou reconhecidos:
• Supremacia do interesse público sobre o privado e indisponibilidade do interesse público: o administrador gere interesse que não lhe pertence e não pode renunciar a direitos da Administração sem autorização legal.
• Razoabilidade, proporcionalidade, motivação, segurança jurídica, autotutela e continuidade do serviço público. Vários aparecem expressamente no art. 2º da Lei 9.784/1999.

Nepotismo (Súmula Vinculante 13):
• É vedada a nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento, para cargo em comissão, de confiança ou função gratificada.
• Alcança o nepotismo cruzado (designações recíprocas).
• Em regra, o STF não aplica a súmula a cargos de natureza política, como ministro ou secretário, salvo fraude ou falta de qualificação.
• A nomeação nessas condições pode configurar também improbidade (art. 11, XI, da Lei 8.429/1992), exigido o dolo.`,
    exemplos: [
      "Uma campanha educativa de trânsito da PRF que estampasse a foto e o nome do superintendente regional violaria a impessoalidade: a publicidade oficial não pode servir à promoção pessoal de autoridades.",
      "O diretor de uma unidade quer nomear o próprio sobrinho para um cargo em comissão: o sobrinho é parente colateral de terceiro grau, e a nomeação é vedada. Um primo, parente de quarto grau, fica fora da súmula.",
    ],
    curiosidade:
      "Para o STF, a vedação ao nepotismo decorre diretamente dos princípios do art. 37 e não depende de lei. Por isso a Súmula Vinculante 13 vale para todos os Poderes e todos os entes da Federação.",
  },
  {
    materia: "adm",
    topico: "Responsabilidade civil do Estado",
    texto: `O art. 37, § 6º, da Constituição estabelece que as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.

Responsabilidade objetiva (teoria do risco administrativo):
• Basta provar a conduta do agente, o dano e o nexo causal; não é preciso provar culpa.
• Admite excludentes que rompem o nexo: culpa exclusiva da vítima, caso fortuito ou força maior e fato exclusivo de terceiro.
• A culpa concorrente da vítima não exclui a responsabilidade, mas reduz proporcionalmente a indenização.
• O risco integral, que não admite excludentes, é exceção aplicada a hipóteses específicas, como o dano ambiental.

Quem responde:
• As pessoas jurídicas de direito público: União, Estados, DF, Municípios, autarquias e fundações públicas.
• As pessoas jurídicas de direito privado prestadoras de serviço público, como concessionárias e permissionárias. As estatais que exploram atividade econômica seguem as regras do direito privado.
• A prestadora responde objetivamente perante os usuários e também perante os não usuários do serviço (STF, RE 591.874).

Ação e regresso:
• Teoria da dupla garantia: a vítima propõe a ação contra o Estado ou contra a prestadora, e não diretamente contra o agente. O agente responde depois, em ação regressiva, se agiu com dolo ou culpa (STF, Tema 940).
• O prazo da vítima contra a Fazenda Pública é de 5 anos (Decreto 20.910/1932).

Omissão:
• Na omissão genérica, a doutrina tradicional e o STJ exigem culpa do serviço: o serviço não funcionou, funcionou mal ou funcionou tarde (responsabilidade subjetiva).
• Quando o Estado tinha dever específico de agir, como na custódia de presos, o STF aplica a responsabilidade objetiva.

Atos legislativos e judiciais: em regra não geram indenização, salvo lei de efeitos concretos, lei declarada inconstitucional que cause dano e erro judiciário (art. 5º, LXXV).`,
    exemplos: [
      "Uma viatura da PRF, em serviço, bate num carro estacionado. O dono do carro processa a União, que responde objetivamente; se o motorista da viatura agiu com culpa, a União pode cobrar dele depois, em ação regressiva.",
      "Um ônibus de empresa prestadora de serviço de transporte coletivo atinge um ciclista. A responsabilidade da empresa é objetiva mesmo ele não sendo passageiro; a conduta da vítima só exclui (culpa exclusiva) ou reduz (culpa concorrente) a indenização.",
    ],
    curiosidade:
      "Pela Súmula 652 do STJ, quando a Administração se omite no dever de fiscalizar e isso contribui para um dano ambiental, sua responsabilidade é solidária, mas de execução subsidiária: primeiro se cobra o poluidor direto.",
  },
  {
    materia: "adm",
    topico: "Improbidade administrativa",
    texto: `A Constituição (art. 37, § 4º) prevê que os atos de improbidade importam a suspensão dos direitos políticos, a perda da função pública, a indisponibilidade dos bens e o ressarcimento ao erário, na forma e gradação da lei, sem prejuízo da ação penal cabível. A Lei 8.429/1992 foi profundamente alterada pela Lei 14.230/2021.

Elemento subjetivo:
• Só há improbidade com dolo (art. 1º, § 1º). A modalidade culposa deixou de existir.
• Dolo é a vontade livre e consciente de alcançar o resultado ilícito; não basta a voluntariedade do agente (§ 2º).
• O mero exercício da função, sem prova de ato doloso com fim ilícito, afasta a responsabilidade (§ 3º).
• Aplicam-se ao sistema da improbidade os princípios do direito administrativo sancionador (§ 4º).

As três espécies:
• Enriquecimento ilícito (art. 9º): auferir vantagem patrimonial indevida em razão do cargo. Ex.: receber vantagem de quem tem interesse em ato do agente; usar em obra ou serviço particular bem móvel da entidade ou o trabalho de servidores (inciso IV).
• Lesão ao erário (art. 10): ação ou omissão dolosa que cause, efetiva e comprovadamente, perda patrimonial. Ex.: permitir que se utilizem em obra ou serviço particular veículos ou máquinas da entidade (inciso XIII).
• Atentado aos princípios (art. 11): violação dos deveres de honestidade, imparcialidade e legalidade, caracterizada por uma das condutas listadas na lei, que formam rol taxativo. Ex.: revelar segredo funcional, negar publicidade a atos oficiais, nepotismo, publicidade oficial com promoção pessoal.

Sanções (art. 12), aplicáveis isolada ou cumulativamente, conforme a gravidade:
• Art. 9º: perda dos bens acrescidos ilicitamente, perda da função, suspensão dos direitos políticos até 14 anos, multa equivalente ao acréscimo patrimonial e proibição de contratar com o poder público até 14 anos.
• Art. 10: perda dos bens acrescidos, se houver, perda da função, suspensão dos direitos políticos até 12 anos, multa equivalente ao dano e proibição de contratar até 12 anos.
• Art. 11: multa de até 24 vezes a remuneração e proibição de contratar até 4 anos. Não há perda da função nem suspensão dos direitos políticos.
• As sanções não se confundem com o ressarcimento integral do dano efetivo nem afastam as sanções penais e administrativas.`,
    exemplos: [
      "Um servidor usa, num sábado, a caminhonete da unidade para fazer a mudança da família: enriquecimento ilícito (art. 9º, IV). Se fosse o chefe que deixasse um terceiro usar o veículo, a conduta seria lesão ao erário (art. 10, XIII).",
      "Um gestor deixa de prestar contas, embora tivesse condições para isso, com o objetivo de ocultar irregularidades. A conduta atenta contra os princípios (art. 11, VI) e se sujeita a multa e proibição de contratar, sem perda da função por esse enquadramento.",
    ],
    curiosidade:
      "Desde 2021, os atos do art. 11 exigem lesividade relevante ao bem jurídico tutelado para serem punidos, mas continuam independendo de dano ao erário ou de enriquecimento do agente (art. 11, § 4º).",
  },
  {
    materia: "adm",
    topico: "Serviços públicos",
    texto: `Serviço público é a atividade que a lei atribui ao Estado para satisfazer necessidades coletivas, prestada diretamente ou por delegação, sob regime total ou parcialmente público. Pelo art. 175 da Constituição, incumbe ao poder público, na forma da lei, diretamente ou sob regime de concessão ou permissão, sempre por licitação, a prestação de serviços públicos.

Serviço adequado (art. 6º da Lei 8.987/1995):
• Regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia na prestação e modicidade das tarifas.
• Não caracteriza descontinuidade a interrupção em situação de emergência ou, após aviso prévio, por razões de ordem técnica ou de segurança das instalações, ou por inadimplemento do usuário, considerado o interesse da coletividade.
• A interrupção por inadimplemento não pode começar na sexta-feira, no sábado, no domingo, em feriado ou no dia anterior a feriado (§ 4º, incluído em 2020).

Formas de delegação:
• Concessão: delegação, mediante licitação, a pessoa jurídica ou consórcio de empresas que demonstre capacidade, por sua conta e risco e por prazo determinado.
• Permissão: delegação a título precário, mediante licitação, a pessoa física ou jurídica. É formalizada por contrato de adesão, que observa a precariedade e a revogabilidade unilateral pelo poder concedente (art. 40).
• Autorização: ato unilateral, discricionário e precário, para situações específicas.
• PPP (Lei 11.079/2004): concessão patrocinada (tarifa mais contraprestação pública) ou administrativa (a Administração é a usuária direta ou indireta).

Extinção da concessão (art. 35):
• Advento do termo contratual.
• Encampação: retomada do serviço durante o prazo, por interesse público, mediante lei autorizativa específica e após prévio pagamento da indenização.
• Caducidade: inexecução total ou parcial pela concessionária, declarada por decreto do poder concedente após processo administrativo com ampla defesa.
• Rescisão: por iniciativa da concessionária, quando o poder concedente descumpre o contrato, mediante ação judicial. O serviço não pode ser paralisado até o trânsito em julgado.
• Anulação; falência ou extinção da empresa; falecimento ou incapacidade do titular, no caso de empresa individual.
• Extinta a concessão, os bens reversíveis retornam ao poder concedente.`,
    exemplos: [
      "Uma concessionária de rodovia federal abandona as obras e a conservação previstas no contrato. Após processo administrativo com ampla defesa, o poder concedente pode declarar a caducidade por decreto.",
      "A distribuidora de energia avisa previamente o consumidor inadimplente e marca o corte para uma terça-feira: a interrupção é lícita. Marcada para uma sexta-feira, seria vedada.",
    ],
    curiosidade:
      "Uma PPP não pode ter valor inferior a R$ 10 milhões, nem prazo inferior a 5 ou superior a 35 anos, incluída eventual prorrogação, nem ter como objeto único o fornecimento de mão de obra.",
  },
  {
    materia: "adm",
    topico: "Organização administrativa",
    texto: `A organização administrativa distribui as funções do Estado entre pessoas jurídicas e órgãos.

Centralização, descentralização e desconcentração:
• Centralização: o próprio ente político (União, Estado, DF ou Município) presta a atividade pela administração direta.
• Descentralização: a atividade é transferida a outra pessoa jurídica. Por outorga (ou por serviços), a lei cria ou autoriza a entidade e lhe transfere titularidade e execução; por delegação (ou por colaboração), transfere-se só a execução, por contrato ou ato, como nas concessões e permissões.
• Desconcentração: distribuição interna de competências entre órgãos da mesma pessoa jurídica, com hierarquia. A PRF, por exemplo, é órgão da União e integra a estrutura do Ministério da Justiça e Segurança Pública.

Órgãos públicos (teoria do órgão):
• São centros de competência sem personalidade jurídica; a atuação do agente é imputada à pessoa jurídica a que o órgão pertence.
• Por isso, quem responde por um dano causado por servidor da PRF é a União.
• Alguns órgãos de cúpula têm capacidade processual para defender suas prerrogativas em juízo, mesmo sem personalidade jurídica.

Administração indireta (art. 37, XIX):
• Autarquia: pessoa jurídica de direito público, criada diretamente por lei específica, para atividades típicas de Estado. Ex.: INSS e agências reguladoras.
• Fundação pública: instituição autorizada por lei específica; lei complementar define as áreas de atuação. Se de direito público, é tratada como espécie de autarquia.
• Empresa pública: pessoa jurídica de direito privado, com capital integralmente público e qualquer forma societária admitida em direito; criação autorizada por lei.
• Sociedade de economia mista: pessoa jurídica de direito privado, sempre sociedade anônima, com a maioria das ações com direito a voto em poder do ente público; criação autorizada por lei.
• As entidades de direito privado só adquirem personalidade com o registro dos atos constitutivos.
• Foro: a empresa pública federal litiga, em regra, na Justiça Federal (art. 109, I); a sociedade de economia mista, na Justiça Estadual (Súmula 556 do STF), salvo se a União intervier no processo.

Controle sobre a indireta: vinculação e supervisão ministerial (tutela), sem hierarquia.`,
    exemplos: [
      "A PRF não tem personalidade jurídica: é órgão da União. Se um servidor da PRF causa dano a alguém, a ação é proposta contra a União, e não contra a PRF.",
      "Uma autarquia federal nasce da própria lei que a cria. Já uma empresa pública federal precisa de lei que autorize sua instituição e só passa a existir com o registro dos atos constitutivos.",
    ],
    curiosidade:
      "Agências reguladoras são autarquias de regime especial: seus dirigentes têm mandato fixo de 5 anos, em regra sem recondução, e não podem ser exonerados livremente pelo Presidente da República.",
  },
  {
    materia: "adm",
    topico: "Lei 8.112/1990",
    texto: `A Lei 8.112/1990 é o regime jurídico dos servidores públicos civis da União, das autarquias, inclusive as em regime especial, e das fundações públicas federais.

Formas de provimento (art. 8º):
• Nomeação: em caráter efetivo ou em comissão; é a única forma de provimento originário.
• Promoção.
• Readaptação: investidura em cargo compatível com a limitação física ou mental verificada em inspeção médica.
• Reversão: retorno do aposentado. Por invalidez, quando a junta médica oficial declara insubsistentes os motivos; ou no interesse da Administração, se o aposentado pediu, se a aposentadoria foi voluntária, se ele era estável na atividade, se a aposentadoria ocorreu nos 5 anos anteriores ao pedido e se há cargo vago.
• Aproveitamento: retorno obrigatório do servidor em disponibilidade, em cargo de atribuições e vencimentos compatíveis.
• Reintegração: reinvestidura do servidor estável cuja demissão foi invalidada por decisão administrativa ou judicial, com ressarcimento de todas as vantagens. Se o cargo estiver ocupado, o ocupante é reconduzido ao cargo de origem sem indenização, aproveitado em outro cargo ou posto em disponibilidade.
• Recondução: retorno do servidor estável ao cargo anteriormente ocupado, por inabilitação em estágio probatório relativo a outro cargo ou por reintegração do anterior ocupante.

Posse e exercício:
• Posse em até 30 dias da publicação do ato de provimento; pode ser feita por procuração específica; só há posse no provimento por nomeação. Se não ocorrer no prazo, o ato de provimento é tornado sem efeito.
• No ato da posse, o servidor apresenta declaração de bens e valores e declaração sobre o exercício de outro cargo, emprego ou função.
• Exercício em até 15 dias da posse. Quem não entra em exercício é exonerado.

Deslocamentos:
• Remoção (art. 36): deslocamento do servidor no âmbito do mesmo quadro, com ou sem mudança de sede, de ofício ou a pedido. Independe do interesse da Administração a remoção para acompanhar cônjuge ou companheiro servidor deslocado no interesse da Administração, a por motivo de saúde comprovado por junta médica oficial e a decorrente de processo seletivo.
• Redistribuição (art. 37): deslocamento do cargo efetivo, ocupado ou vago, para outro órgão ou entidade do mesmo Poder, com prévia apreciação do órgão central do SIPEC.

Vantagens, férias e licenças:
• Indenizações (ajuda de custo, diárias, transporte e auxílio-moradia) não se incorporam ao vencimento; gratificações e adicionais se incorporam nos casos e condições da lei.
• Férias: 30 dias, acumuláveis até 2 períodos por necessidade do serviço; 12 meses de exercício para o primeiro período; parcelamento em até 3 etapas, a pedido e no interesse da Administração.
• Licença para capacitação: após cada quinquênio de efetivo exercício, no interesse da Administração, com remuneração, por até 3 meses; os períodos não se acumulam.
• Licença para tratar de interesses particulares: a critério da Administração, por até 3 anos consecutivos, sem remuneração, só para ocupante de cargo efetivo que não esteja em estágio probatório.`,
    exemplos: [
      "Um servidor estável da PRF é aprovado em outro concurso federal e inabilitado no estágio probatório do novo cargo: ele é reconduzido ao cargo anterior.",
      "Um candidato nomeado deixa passar os 30 dias sem tomar posse: a nomeação é tornada sem efeito. Se tivesse tomado posse e não entrasse em exercício em 15 dias, seria exonerado.",
    ],
    curiosidade:
      "As faltas ao serviço não podem ser descontadas das férias (art. 77, § 2º): férias e faltas são contas separadas.",
  },
  {
    materia: "adm",
    topico: "Processo administrativo (Lei 9.784/1999)",
    texto: `A Lei 9.784/1999 regula o processo administrativo na Administração Pública Federal direta e indireta e se aplica também aos Poderes Legislativo e Judiciário da União quando exercem função administrativa. Processos com lei própria, como o PAD da Lei 8.112/1990, seguem essa lei, e a 9.784 se aplica só subsidiariamente.

Princípios (art. 2º): legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência. É vedada a aplicação retroativa de nova interpretação.

Competência (arts. 11 a 17):
• É irrenunciável e se exerce pelos órgãos a que foi atribuída, salvo delegação e avocação legalmente admitidas.
• A delegação pode ser feita a órgãos ou titulares não subordinados hierarquicamente, quando conveniente.
• Não se delegam: atos de caráter normativo, decisão de recursos administrativos e matérias de competência exclusiva.
• O ato de delegação é publicado e revogável a qualquer tempo, e as decisões adotadas por delegação se consideram editadas pelo delegado.
• A avocação temporária de competência de órgão hierarquicamente inferior é excepcional e depende de motivos relevantes devidamente justificados.

Impedimento e suspeição:
• Impedimento (art. 18): interesse direto ou indireto na matéria; ter participado ou vir a participar como perito, testemunha ou representante, ou se isso ocorrer com cônjuge, companheiro ou parente até o terceiro grau; litígio judicial ou administrativo com o interessado ou com seu cônjuge ou companheiro. O impedido deve comunicar o fato e abster-se, e a omissão é falta grave (art. 19).
• Suspeição (art. 20): amizade íntima ou inimizade notória com o interessado ou com seus cônjuges, companheiros, parentes e afins até o terceiro grau.

Prazos:
• Sem norma específica, os atos são praticados em 5 dias, prazo que pode ser dilatado até o dobro mediante justificação (art. 24).
• Concluída a instrução, a Administração tem até 30 dias para decidir, prorrogáveis por igual período, com motivação expressa (art. 49).

Recurso e revisão:
• Cabe recurso por razões de legalidade e de mérito, dirigido à autoridade que decidiu. Se ela não reconsiderar em 5 dias, encaminha à autoridade superior.
• No máximo três instâncias; prazo de 10 dias para recorrer; decisão em até 30 dias, prorrogáveis por igual período.
• Em regra, o recurso independe de caução e não tem efeito suspensivo, que pode ser concedido se houver justo receio de prejuízo de difícil reparação.
• No recurso, a decisão pode piorar a situação do recorrente, que deve ser cientificado antes para apresentar alegações (art. 64). Na revisão, cabível a qualquer tempo diante de fatos novos, não pode haver agravamento da sanção (art. 65).`,
    exemplos: [
      "O superintendente delega a um chefe de seção a assinatura de autorizações de rotina. As autorizações assinadas por delegação se consideram do chefe de seção, e um eventual mandado de segurança é impetrado contra ele (Súmula 510 do STF).",
      "Um particular punido em processo regido pela Lei 9.784/1999 recorre pedindo a redução da sanção. A autoridade superior até pode agravá-la, mas precisa cientificá-lo antes. Se, anos depois, ele pedir revisão com base em fato novo, a sanção não poderá piorar.",
    ],
    curiosidade:
      "Pela Súmula Vinculante 21, é inconstitucional exigir depósito ou arrolamento prévio de dinheiro ou bens para admitir recurso administrativo.",
  },
];
