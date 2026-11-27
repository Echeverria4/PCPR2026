import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-08",
  resumo: {
    ideia:
      "A segunda parte da Lei 14.133 mostra a contratação direta (inexigibilidade, dispensa e licitação dispensada), as regras para vender e doar bens, a ordem das fases, a fase preparatória e o valor estimado, a divulgação do edital e os prazos, o julgamento, a habilitação, os recursos e o encerramento, os procedimentos auxiliares (credenciamento, pré-qualificação, manifestação de interesse, registro de preços e registro cadastral) e as regras de compras, obras, serviços, terceirização, locação de imóveis e licitação internacional.",
    itens: [
      {
        parte: "1. Contratação direta: regra e espécies",
        termo: "Contratação direta",
        faz: "É a exceção à regra de licitar (CF, art. 37, XXI: “ressalvados os casos especificados na legislação”). A Lei 14.133 trata do tema nos arts. 72 a 75. Há três grupos: licitação inexigível (art. 74), licitação dispensável (art. 75) e licitação dispensada (art. 76).",
        pista: "Só a lei pode criar hipótese de contratação direta, porque é norma geral da União. Estado ou município não amplia dispensa (ADI 4.658).",
      },
      {
        termo: "Inexigibilidade (art. 74)",
        faz: "A competição é inviável: não há como disputar. O rol é exemplificativo, porque a lei usa “em especial”: I – fornecedor exclusivo; II – artista consagrado; III – serviço técnico especializado com notória especialização; IV – credenciamento; V – imóvel com características que tornam necessária a escolha.",
        pista: "Pode haver inexigibilidade fora dos cinco incisos, sempre que a disputa for de fato inviável.",
      },
      {
        termo: "Dispensa (art. 75)",
        faz: "A competição é possível, mas a lei libera a disputa. O administrador decide se licita ou não: é decisão discricionária. O rol é taxativo: só valem os casos escritos na lei.",
        pista: "Os valores do art. 75 são atualizados todo ano por ato do Executivo federal.",
      },
      {
        termo: "Licitação dispensada (art. 76)",
        faz: "A própria lei já dispensa a licitação, e o administrador não tem escolha: é ato vinculado. O rol é taxativo e trata sempre de alienação de bens da Administração (venda, doação, permuta etc.).",
      },
      {
        termo: "Quadro: inexigível × dispensável × dispensada",
        faz: "Inexigível (art. 74): competição inviável; rol exemplificativo. Dispensável (art. 75): competição possível; a Administração pode licitar ou não (discricionário); rol taxativo. Dispensada (art. 76): competição possível, mas a lei afasta a licitação (vinculado); rol taxativo; só alienação de bens.",
        pista: "Truque para a prova: “a lei dispensa” = dispensada (art. 76); “a Administração pode dispensar” = dispensável (art. 75); “não há como competir” = inexigível (art. 74).",
      },
      {
        termo: "Credenciamento virou inexigibilidade expressa",
        faz: "Na lei antiga, o credenciamento era aceito como caso de inexigibilidade não escrito na lista. Na Lei 14.133, ele aparece de forma expressa no art. 74, IV, e também como procedimento auxiliar (art. 79).",
      },
      {
        parte: "2. O processo de contratação direta (art. 72)",
        termo: "Documentos do processo (art. 72)",
        faz: "O processo de contratação direta (inexigibilidade e dispensa) deve ter: I – documento de formalização de demanda e, se for o caso, estudo técnico preliminar, análise de riscos, termo de referência, projeto básico ou projeto executivo; II – estimativa de despesa (art. 23); III – parecer jurídico e pareceres técnicos, se for o caso; IV – demonstração de que há recursos orçamentários compatíveis com o compromisso; V – prova de que o contratado tem a habilitação e a qualificação mínima necessárias; VI – razão da escolha do contratado; VII – justificativa de preço; VIII – autorização da autoridade competente.",
      },
      {
        termo: "Sem licitação não é sem processo",
        faz: "Na contratação direta não há disputa, mas há um processo formal, com planejamento, justificativas e controle. A Administração continua obrigada a buscar o preço justo e a escolher com motivação.",
        pista: "Exemplo: para comprar computadores por dispensa, o órgão faz o termo de referência, estima o preço (por exemplo, com cotação eletrônica), escolhe a loja, justifica o preço e a autoridade autoriza.",
      },
      {
        termo: "Divulgação do ato (art. 72, parágrafo único)",
        faz: "O ato que autoriza a contratação direta, ou o extrato do contrato, deve ser divulgado e mantido à disposição do público em sítio eletrônico oficial.",
      },
      {
        termo: "Contratação direta indevida",
        faz: "Se a contratação direta for indevida e houver dolo, fraude ou erro grosseiro, o contratado e o agente público responsável respondem de forma solidária pelo dano causado ao erário, sem prejuízo de outras sanções legais (art. 73).",
        pista: "Também é crime: admitir, possibilitar ou dar causa à contratação direta fora das hipóteses da lei tem pena de reclusão de 4 a 8 anos e multa (CP, art. 337-E).",
      },
      {
        parte: "3. Inexigibilidade: fornecedor exclusivo e artista",
        termo: "Fornecedor exclusivo (art. 74, I)",
        faz: "Inexigibilidade para comprar materiais, equipamentos ou gêneros, ou contratar serviços, que só possam ser fornecidos por produtor, empresa ou representante comercial exclusivos.",
        pista: "Exemplo: um remédio que só uma distribuidora vende no País.",
      },
      {
        termo: "Prova da exclusividade (art. 74, § 1º)",
        faz: "A Administração deve provar a exclusividade com atestado de exclusividade, contrato de exclusividade, declaração do fabricante ou outro documento idôneo. É vedada a preferência por marca específica.",
        pista: "O órgão não pode escolher uma marca e depois dizer que só aquela empresa a vende. A exclusividade é do objeto que atende à necessidade, e não de uma marca preferida.",
      },
      {
        termo: "Um licitante não é um fornecedor",
        faz: "Se só uma empresa aparece na licitação, isso não gera inexigibilidade. Inexigibilidade exige que só exista um fornecedor capaz no mercado. Se várias empresas poderiam vender, mas só uma participou, a licitação continua válida (ou pode ser deserta ou fracassada, se ninguém servir).",
      },
      {
        termo: "Artista (art. 74, II)",
        faz: "Inexigibilidade para contratar profissional do setor artístico, de forma direta ou por empresário exclusivo, desde que consagrado pela crítica especializada ou pela opinião pública.",
        pista: "Vale para qualquer área artística: cantor, banda, ator, artista plástico. Basta um dos dois: crítica especializada ou opinião pública.",
      },
      {
        termo: "Empresário exclusivo (art. 74, § 2º)",
        faz: "É a pessoa física ou jurídica que tem contrato, declaração, carta ou outro documento que prove a exclusividade permanente e contínua de representação do artista, no País ou em estado específico. Não cabe inexigibilidade com empresário cuja representação seja restrita a um evento ou a um local específico.",
        pista: "A regra fecha uma brecha antiga: o intermediário pegava uma carta de exclusividade só para a data do show e cobrava a mais da Administração.",
      },
      {
        parte: "4. Inexigibilidade: serviços técnicos especializados",
        termo: "Serviços técnicos especializados (art. 74, III)",
        faz: "Inexigibilidade para serviços técnicos especializados de natureza predominantemente intelectual, com profissionais ou empresas de notória especialização: a) estudos técnicos, planejamentos, projetos básicos ou executivos; b) pareceres, perícias e avaliações em geral; c) assessorias ou consultorias técnicas e auditorias financeiras ou tributárias; d) fiscalização, supervisão ou gerenciamento de obras ou serviços; e) patrocínio ou defesa de causas judiciais ou administrativas; f) treinamento e aperfeiçoamento de pessoal; g) restauração de obras de arte e de bens de valor histórico; h) controles de qualidade e tecnológico, análises, testes e ensaios de campo e de laboratório, instrumentação e monitoramento de obras e do meio ambiente e outros serviços de engenharia desse tipo.",
        pista: "É vedada a inexigibilidade para serviços de publicidade e divulgação.",
      },
      {
        termo: "Notória especialização (art. 74, § 3º)",
        faz: "É o profissional ou a empresa cujo conceito na sua especialidade, vindo de desempenho anterior, estudos, experiência, publicações, organização, aparelhamento, equipe técnica ou outros requisitos ligados às suas atividades, permite concluir que o seu trabalho é essencial e reconhecidamente adequado para atender plenamente o objeto do contrato.",
        pista: "Atenção: o conceito está no art. 74, § 3º. Material que cite “art. 73, § 3º” está errado; o art. 73 trata da responsabilidade por contratação indevida.",
      },
      {
        termo: "Dois requisitos ao mesmo tempo",
        faz: "Para a inexigibilidade do inciso III, é preciso: (1) um serviço técnico especializado de natureza predominantemente intelectual, da lista do inciso; e (2) um profissional ou empresa de notória especialização. Faltando um, licita-se.",
        pista: "Exemplo: restaurar uma pintura simples, que muitos restauradores fazem, pede licitação. Restaurar uma obra rara e complexa, que exige um especialista reconhecido, pode ser por inexigibilidade. A Lei 14.133 não repete a expressão “natureza singular” que a Lei 8.666 usava.",
      },
      {
        termo: "Proibido subcontratar (art. 74, § 4º)",
        faz: "Nas contratações pelo inciso III, é vedada a subcontratação de empresas ou a atuação de profissionais diferentes daqueles que justificaram a inexigibilidade.",
        pista: "Exemplo: o órgão contrata um fotógrafo de notória especialização para registrar um acervo histórico. Ele não pode mandar outro fotógrafo no seu lugar.",
      },
      {
        termo: "Publicidade e divulgação: sempre licita",
        faz: "O próprio inciso III veda a inexigibilidade para serviços de publicidade e divulgação. Esses serviços são contratados por licitação, seguindo a Lei 12.232/2010 (agências de propaganda) e, de forma subsidiária, a Lei 14.133 (art. 186).",
        pista: "Exemplo: a campanha de vacinação de um ministério precisa de licitação, mesmo que a agência seja famosa.",
      },
      {
        termo: "Serviço técnico sem notória especialização",
        faz: "Se não houver notória especialização, o serviço técnico especializado é licitado. Cabe concorrência ou concurso (e, se presentes os requisitos, diálogo competitivo). O pregão é vedado para serviços técnicos especializados de natureza predominantemente intelectual (art. 29, parágrafo único).",
        pista: "O critério técnica e preço é preferencial nesses serviços (art. 36, § 1º, I), e a melhor técnica também cabe. Nas alíneas a, d e h acima de R$ 300 mil, o julgamento é só por melhor técnica ou por técnica e preço com 70% para a técnica (art. 37, § 2º).",
      },
      {
        parte: "5. Inexigibilidade: credenciamento e imóvel",
        termo: "Credenciamento como inexigibilidade (art. 74, IV)",
        faz: "Inexigibilidade para objetos que devam ou possam ser contratados por credenciamento. Credenciamento é o chamamento público em que a Administração convoca interessados em prestar serviços ou fornecer bens para que, cumpridos os requisitos, se credenciem e executem o objeto quando convocados (art. 6º, XLIII).",
        pista: "Não há disputa porque todos os que cumprirem os requisitos são aceitos. Exemplos: rede de hospitais e clínicas de um plano de saúde de servidores; compra de alimentos de pequenos produtores rurais para a merenda escolar.",
      },
      {
        termo: "Imóvel (art. 74, V)",
        faz: "Inexigibilidade para comprar ou alugar imóvel cujas características de instalações e de localização tornem necessária a sua escolha.",
        pista: "Na Lei 8.666 era caso de dispensa; na Lei 14.133 virou inexigibilidade (no Decreto-Lei 2.300/1986, anterior à Lei 8.666, já era inexigibilidade). Exemplos: o imóvel ao lado do hospital para instalar uma unidade de pronto atendimento; o único complexo esportivo da cidade capaz de receber um evento.",
      },
      {
        termo: "Requisitos do imóvel (art. 74, § 5º)",
        faz: "A inexigibilidade do imóvel exige: a) avaliação prévia do bem, do seu estado de conservação, dos custos das adaptações, quando imprescindíveis ao uso, e do prazo de amortização dos investimentos; b) certificação de que não há imóveis públicos vagos e disponíveis que atendam ao objeto; c) justificativas que demonstrem a singularidade do imóvel e a vantagem para a Administração.",
      },
      {
        parte: "6. Dispensa em razão do valor",
        termo: "Dispensa por valor (art. 75, I e II)",
        faz: "É dispensável a licitação: I – para obras e serviços de engenharia ou serviços de manutenção de veículos automotores, com valor inferior a R$ 100 mil; II – para outros serviços e compras, com valor inferior a R$ 50 mil.",
        pista: "A lei diz “inferior a”, e não “até”: R$ 100 mil exatos já exigem licitação. Comprar um veículo é compra (inciso II); consertar um veículo é manutenção (inciso I). Na Lei 8.666 os limites eram “até” R$ 33 mil e R$ 17,6 mil.",
      },
      {
        termo: "Valores de 2026 (Decreto 12.807/2025)",
        faz: "Art. 75, I: inferior a R$ 130.984,20. Art. 75, II: inferior a R$ 65.492,11. Art. 75, § 7º: R$ 10.478,74. Art. 75, IV, c: R$ 392.952,63. Contrato verbal de pequenas compras ou serviços de pronto pagamento (art. 95, § 2º): R$ 10 mil na lei, R$ 13.098,41 em 2026.",
        pista: "Os valores da lei são atualizados todo ano por decreto do Executivo federal, pelo IPCA-E (art. 182); a tabela completa está na aula anterior. Se a questão não falar em atualização, use os valores escritos na lei (R$ 100 mil e R$ 50 mil).",
      },
      {
        termo: "Limite em dobro (art. 75, § 2º)",
        faz: "Os valores dos incisos I e II são duplicados para compras, obras e serviços contratados por consórcio público ou por autarquia ou fundação qualificadas como agências executivas, na forma da lei.",
        pista: "Na lei: inferior a R$ 200 mil (inciso I) e a R$ 100 mil (inciso II). Consórcio público é a associação de entes da Federação (exemplo: municípios que se unem para gerir um hospital). Agência executiva é a autarquia ou fundação que firmou contrato de gestão com metas e plano de reestruturação e, em troca, ganha mais autonomia, como esses limites maiores. Se a questão perguntar de forma genérica, use os valores gerais.",
      },
      {
        termo: "Como somar os valores (art. 75, § 1º)",
        faz: "Para saber se cabe a dispensa por valor, somam-se: I – as despesas feitas no exercício financeiro pela mesma unidade gestora; II – as despesas com objetos de mesma natureza, isto é, do mesmo ramo de atividade.",
        pista: "Exercício financeiro é o ano civil, de 1º de janeiro a 31 de dezembro (Lei 4.320/1964, art. 34). Exemplo: compras de material de expediente de R$ 5 mil, R$ 15 mil, R$ 15 mil e R$ 10 mil no mesmo ano somam R$ 45 mil: ainda cabe dispensa. Material de expediente (R$ 45 mil) e equipamentos de informática (R$ 40 mil) são ramos diferentes e não se somam.",
      },
      {
        termo: "Fracionamento proibido",
        faz: "É ilegal dividir uma compra grande em várias pequenas só para ficar abaixo do limite e fugir da licitação. A soma por ano e por ramo do § 1º serve justamente para impedir isso.",
        pista: "Exemplo: o órgão precisa de 100 computadores e compra 10 por mês, cada lote abaixo do limite. A soma no ano passa do teto: houve fracionamento.",
      },
      {
        termo: "Manutenção de veículos até R$ 8 mil (art. 75, § 7º)",
        faz: "A regra de somar do § 1º não se aplica à contratação de até R$ 8 mil de serviços de manutenção de veículos automotores de propriedade do órgão ou entidade, incluído o fornecimento de peças.",
        pista: "Exemplo: cada conserto de viatura de até R$ 8 mil, com as peças, pode ser contratado sem somar com os outros consertos do ano.",
      },
      {
        termo: "Aviso e pagamento (art. 75, §§ 3º e 4º)",
        faz: "As contratações por valor serão, de preferência, precedidas de aviso em sítio eletrônico oficial, por no mínimo 3 dias úteis, para receber propostas de outros interessados. O pagamento será feito, de preferência, por cartão de pagamento, cujo extrato será divulgado no Portal Nacional de Contratações Públicas.",
      },
      {
        termo: "O motivo é o valor",
        faz: "Na dispensa por valor, o fundamento é só o valor da contratação. Não existe dispensa por “até 10% do limite” nem outro cálculo inventado: basta o valor ficar abaixo do teto, somado na forma do § 1º.",
        pista: "Exemplo: um reparo de R$ 20 mil num hospital público é dispensa por valor (art. 75, II), porque fica abaixo de R$ 50 mil.",
      },
      {
        parte: "7. Dispensa pela situação: licitação sem sucesso",
        termo: "Licitação deserta ou fracassada",
        faz: "Permite dispensa em até 1 ano, se todas as condições do edital forem mantidas.",
        pista: "É o art. 75, III, explicado abaixo.",
      },
      {
        termo: "Dispensa após licitação sem sucesso (art. 75, III)",
        faz: "É dispensável a licitação para contratar o que envolva as mesmas condições de licitação feita há menos de 1 ano, quando: a) não surgiram licitantes interessados ou não foram apresentadas propostas válidas; b) as propostas apresentadas tiveram preços manifestamente superiores aos de mercado ou incompatíveis com os fixados pelos órgãos oficiais competentes.",
      },
      {
        termo: "Deserta × fracassada",
        faz: "Deserta: ninguém aparece. Fracassada: aparecem interessados, mas nenhuma proposta é válida, ou os preços ficam muito acima do mercado.",
        pista: "Comparação: numa maratona, se ninguém se inscreve, a prova é deserta; se todos se inscrevem mas ninguém cruza a linha de chegada, é fracassada. Se o órgão pediu 30 GB e na dispensa contrata 100 GB, as condições mudaram e a dispensa não vale. A inabilitação de todos não está escrita no inciso.",
      },
      {
        parte: "8. Dispensa pela situação: emergência e calamidade",
        termo: "Emergência ou calamidade (art. 75, VIII)",
        faz: "É dispensável a licitação nos casos de emergência ou de calamidade pública, quando a urgência puder causar prejuízo ou comprometer a continuidade dos serviços públicos ou a segurança de pessoas, obras, serviços, equipamentos e outros bens, públicos ou particulares. Só se contratam os bens necessários para atender a situação e as parcelas de obras e serviços que possam ser concluídas em até 1 ano, contado da ocorrência da emergência ou calamidade.",
        pista: "É vedado prorrogar esses contratos e recontratar a mesma empresa com base nesse inciso. Exemplos: refazer uma ponte que caiu; reformar uma escola destelhada por um temporal; obras em barragens com risco de rompimento. Não vale reformar todas as escolas da cidade sob o mesmo pretexto.",
      },
      {
        termo: "STF: vedação de recontratar (ADI 6.890, 2024)",
        faz: "O STF julgou constitucional a proibição de recontratar a empresa já contratada por emergência. A vedação vale para a mesma situação emergencial, além do prazo de 1 ano. Ela não impede que a empresa participe da licitação que vai substituir o contrato, nem que seja contratada por outro fundamento legal, inclusive numa nova emergência.",
      },
      {
        termo: "Contratação emergencial (art. 75, § 6º)",
        faz: "Considera-se emergencial a contratação por dispensa feita para manter a continuidade do serviço público. Nela é preciso: observar os preços de mercado (art. 23); tomar as providências para concluir a licitação; e apurar a responsabilidade dos agentes públicos que deram causa à situação emergencial.",
        pista: "Vale mesmo quando a emergência foi provocada por falta de planejamento: o serviço não pode parar, mas os culpados são investigados. Exemplo: o contrato da merenda vence e o órgão não licitou a tempo; contrata-se por emergência para os alunos não ficarem sem comida. Atraso causado por disputa judicial na licitação também pode gerar emergência.",
      },
      {
        parte: "9. Dispensa pela situação: segurança, guerra e mercado",
        termo: "Segurança nacional (art. 75, VI)",
        faz: "É dispensável a licitação para contratar o que possa comprometer a segurança nacional, nos casos definidos pelo Ministro de Estado da Defesa, mediante demanda dos comandos das Forças Armadas ou dos demais ministérios.",
      },
      {
        termo: "Guerra e crises (art. 75, VII)",
        faz: "É dispensável a licitação nos casos de guerra, estado de defesa, estado de sítio, intervenção federal ou de grave perturbação da ordem.",
        pista: "Na CF: guerra (arts. 84, XIX, e 49, II), estado de defesa e de sítio (art. 84, IX) e intervenção federal (art. 84, X). Aqui a lei não fixa prazo máximo, diferente da emergência.",
      },
      {
        termo: "Intervenção no domínio econômico (art. 75, X)",
        faz: "É dispensável a licitação quando a União tiver que intervir no domínio econômico para regular preços ou normalizar o abastecimento.",
        pista: "Só a União, e não estados ou municípios.",
      },
      {
        parte: "10. Dispensa pelo objeto (art. 75, IV)",
        termo: "Peças na garantia e acordo internacional (art. 75, IV, a e b)",
        faz: "É dispensável a licitação para contratar: a) bens, componentes ou peças, nacionais ou estrangeiros, necessários à manutenção de equipamentos, comprados do fornecedor original durante o período de garantia técnica, quando essa exclusividade for indispensável para manter a garantia; b) bens, serviços, alienações ou obras, nos termos de acordo internacional específico aprovado pelo Congresso Nacional, quando as condições forem manifestamente vantajosas para a Administração.",
        pista: "Exemplo da alínea a: comprar a peça de um equipamento médico do próprio fabricante, porque peça de outro fornecedor faria perder a garantia.",
      },
      {
        termo: "Pesquisa, tecnologia e perecíveis (art. 75, IV, c a e)",
        faz: "c) produtos para pesquisa e desenvolvimento, limitada a R$ 300 mil no caso de obras e serviços de engenharia (com regras especiais de procedimento, art. 75, § 5º); d) transferência de tecnologia ou licenciamento de direito de uso ou de exploração de criação protegida, contratados por instituição científica, tecnológica e de inovação (ICT) pública ou por agência de fomento, com vantagem demonstrada; e) hortifrutigranjeiros, pães e outros gêneros perecíveis, só pelo tempo necessário para fazer a licitação, contratados pelo preço do dia.",
        pista: "O teto de R$ 300 mil da alínea c vale só para obras e serviços de engenharia; para outros produtos de pesquisa não há teto. Em 2026 o valor é R$ 392.952,63.",
      },
      {
        termo: "Defesa e Forças Armadas (art. 75, IV, f a i)",
        faz: "f) bens ou serviços produzidos ou prestados no País que envolvam, ao mesmo tempo, alta complexidade tecnológica e defesa nacional; g) materiais de uso das Forças Armadas, com exceção dos de uso pessoal e administrativo, quando for preciso manter a padronização exigida pelo apoio logístico dos meios navais, aéreos e terrestres, com autorização por ato do comandante da força; h) bens e serviços para os contingentes militares brasileiros em operações de paz no exterior, com justificativa de preço e de escolha do fornecedor, ratificada pelo comandante da força; i) abastecimento ou suprimento de tropas em estada eventual e curta em portos, aeroportos ou localidades fora de suas sedes, por movimentação operacional ou adestramento.",
        pista: "Exemplo da alínea f: serviços para desenvolver um submarino nacional. Na alínea g, uniformes (uso pessoal) e cartuchos de impressora (uso administrativo) ficam fora da dispensa.",
      },
      {
        termo: "Catadores, obras de arte e investigação (art. 75, IV, j a l)",
        faz: "j) coleta, processamento e venda de resíduos sólidos urbanos recicláveis ou reutilizáveis, em áreas com coleta seletiva, feitos por associações ou cooperativas formadas só por pessoas físicas de baixa renda reconhecidas como catadores, com equipamentos compatíveis com as normas técnicas, ambientais e de saúde; k) compra ou restauração de obras de arte e objetos históricos de autenticidade certificada, desde que ligada às finalidades do órgão ou compatível com elas; l) serviços especializados ou compra ou locação de equipamentos para rastreamento e obtenção de provas (captação ambiental e interceptação de comunicações: Lei 12.850/2013, art. 3º, II e V), quando for preciso manter o sigilo da investigação.",
        pista: "Comprar obra de arte é só dispensa (alínea k). Restaurar obra de arte pode ser dispensa (alínea k) ou inexigibilidade, quando for serviço técnico com profissional de notória especialização (art. 74, III, g).",
      },
      {
        termo: "Doenças raras (art. 75, IV, m)",
        faz: "m) compra de medicamentos destinados só ao tratamento de doenças raras definidas pelo Ministério da Saúde.",
      },
      {
        termo: "Inovação e SUS (art. 75, V e XII)",
        faz: "V – contratação para cumprir os arts. 3º, 3º-A, 4º, 5º e 20 da Lei 10.973/2004 (Lei de Inovação), observados os princípios gerais dessa lei; XII – contratação com transferência de tecnologia de produtos estratégicos para o SUS, listados em ato da direção nacional do SUS, inclusive na compra desses produtos durante a absorção da tecnologia, com valores compatíveis com o instrumento de transferência.",
      },
      {
        termo: "Insumos estratégicos de saúde (art. 75, XVI)",
        faz: "XVI – compra, por pessoa jurídica de direito público interno, de insumos e produtos estratégicos para a saúde produzidos por fundação de apoio criada para esse fim específico antes da vigência da Lei 14.133, desde que o preço seja compatível com o de mercado.",
        pista: "O inciso já foi alterado mais de uma vez (Lei 14.628/2023 e, pelo texto compilado no Planalto, Lei 15.471/2026). O núcleo que cai na prova: fundação criada antes da lei e preço de mercado.",
      },
      {
        parte: "11. Dispensa pela pessoa contratada",
        termo: "Órgão criado para esse fim (art. 75, IX)",
        faz: "IX – compra, por pessoa jurídica de direito público interno, de bens produzidos ou serviços prestados por órgão ou entidade da Administração criados para esse fim específico, desde que o preço seja compatível com o de mercado.",
        pista: "Quem contrata: União, estados, DF, municípios, autarquias e fundações de direito público. O contratado pode ser uma estatal. Só bens e serviços: obras ficam fora. Não importa quando o órgão foi criado (a Lei 8.666 exigia criação antes dela). Exemplo: empresa pública criada para manter os programas de computador do próprio ente.",
      },
      {
        termo: "Contrato de programa (art. 75, XI)",
        faz: "XI – celebração de contrato de programa com ente federativo ou com entidade da sua Administração indireta, para prestar serviços públicos de forma associada, nos termos de contrato de consórcio público ou de convênio de cooperação.",
        pista: "Exemplo: três municípios criam um consórcio para o transporte público, e cada um firma contrato de programa com o consórcio. Não confunda: as compras, obras e serviços do próprio consórcio seguem a lei de licitações e, em regra, exigem licitação.",
      },
      {
        termo: "Comissão de avaliação técnica (art. 75, XIII)",
        faz: "XIII – contratação de profissionais para compor a comissão de avaliação de critérios de técnica, quando se tratar de profissional técnico de notória especialização.",
        pista: "Pegadinha: serviço técnico especializado com notória especialização é inexigibilidade (art. 74, III). Profissional de notória especialização só para compor a comissão que avalia propostas técnicas é dispensa (art. 75, XIII).",
      },
      {
        termo: "Pessoas com deficiência e entidades sociais (art. 75, XIV e XV)",
        faz: "XIV – contratação de associação de pessoas com deficiência, sem fins lucrativos e de comprovada idoneidade, para prestar serviços, com preço de mercado e serviços prestados só por pessoas com deficiência; XV – contratação de instituição brasileira cuja finalidade estatutária seja apoiar, captar e executar atividades de ensino, pesquisa, extensão, desenvolvimento institucional, científico e tecnológico e estímulo à inovação (inclusive a gestão administrativa e financeira dessas atividades), ou de instituição dedicada à recuperação social da pessoa presa, desde que tenha inquestionável reputação ética e profissional e não tenha fins lucrativos.",
      },
      {
        termo: "Cisternas e Cozinha Solidária (art. 75, XVII e XVIII)",
        faz: "XVII – contratação de entidades privadas sem fins lucrativos para implantar cisternas ou outras tecnologias sociais de acesso à água para consumo humano e produção de alimentos, para famílias rurais de baixa renda atingidas pela seca ou pela falta regular de água; XVIII – contratação de entidades privadas sem fins lucrativos para implantar o Programa Cozinha Solidária, que fornece alimentação gratuita, de preferência à população vulnerável, inclusive a população em situação de rua.",
        pista: "Os dois incisos foram incluídos pela Lei 14.628/2023.",
      },
      {
        parte: "12. O que mudou em relação à lei antiga",
        termo: "Mudanças na contratação direta",
        faz: "Três mudanças caem muito: (1) a contratação do remanescente de obra, serviço ou fornecimento, em caso de rescisão, deixou de ser dispensa e passou para o art. 90, § 7º (chamar os demais licitantes na ordem de classificação); (2) a compra e a locação de imóvel deixaram de ser dispensa e viraram inexigibilidade (art. 74, V); (3) saiu a dispensa para contratar organizações sociais para atividades do contrato de gestão.",
        pista: "Com as organizações sociais não há contrato administrativo, e sim parceria regida pelo contrato de gestão. O STF decidiu (ADI 1.923) que essa parceria deve ser conduzida de forma pública, objetiva e impessoal, respeitando os princípios do art. 37 da CF.",
      },
      {
        parte: "13. Alienação de bens: regras gerais",
        termo: "Alienação",
        faz: "Pede interesse público justificado e avaliação. Imóvel pede ainda autorização legislativa e leilão.",
        pista: "Imóvel vindo de processo judicial ou dação em pagamento dispensa a autorização.",
      },
      {
        termo: "Bens públicos e inalienabilidade (CC, arts. 99 e 100)",
        faz: "O Código Civil (art. 99) divide os bens públicos em: a) de uso comum do povo (rios, mares, estradas, ruas e praças); b) de uso especial (edifícios ou terrenos usados em serviço ou estabelecimento da Administração); c) dominicais (sem finalidade pública específica). Os de uso comum e os de uso especial são inalienáveis enquanto conservarem essa qualificação, na forma que a lei determinar (CC, art. 100).",
        pista: "Exemplos de bem dominical: imóvel sem uso, veículo inutilizado, móveis inservíveis. Não dá para vender o prédio onde funciona uma escola pública, porque ele está servindo à população.",
      },
      {
        termo: "Desafetação",
        faz: "É o procedimento que retira o fim público do bem e, com isso, permite a sua alienação.",
        pista: "Exemplo 1: a escola muda para outro prédio; com autorização legislativa, o prédio antigo pode ser vendido. Exemplo 2: o município compra 50 ambulâncias novas e as 50 antigas, agora inservíveis, perdem o fim público e podem ir a leilão.",
      },
      {
        termo: "Requisitos da alienação (art. 76)",
        faz: "A alienação de bens da Administração exige interesse público devidamente justificado e avaliação prévia. Imóveis (inclusive de autarquias e fundações): autorização legislativa e licitação na modalidade leilão. Móveis: licitação na modalidade leilão, sem autorização legislativa.",
        pista: "Na Lei 14.133 a alienação, em regra, é sempre por leilão, julgado pelo maior lance. Na lei antiga, muitas vendas de imóveis eram por concorrência. Exemplo: vender carteiras escolares velhas (bens móveis) não precisa de lei autorizando, mas precisa de leilão.",
      },
      {
        termo: "Imóvel vindo de processo judicial ou dação (art. 76, § 1º)",
        faz: "A alienação de imóveis que a Administração adquiriu por procedimento judicial ou por dação em pagamento dispensa a autorização legislativa e exige apenas avaliação prévia e licitação na modalidade leilão.",
        pista: "Dação em pagamento: o devedor entrega um imóvel para quitar a dívida com o poder público. Procedimento judicial: o imóvel do devedor é penhorado numa ação de cobrança e passa ao Estado. A Administração nem queria esses bens, por isso a lei facilita a venda. A única diferença para a regra geral é não precisar de autorização legislativa. Na Lei 8.666 (art. 19), esses imóveis podiam ir a concorrência ou leilão; agora, só leilão.",
      },
      {
        parte: "14. Licitação dispensada: imóveis (art. 76, I)",
        termo: "Imóveis: dação, doação, permuta e investidura (art. 76, I, a a d)",
        faz: "A licitação é dispensada para: a) dação em pagamento; b) doação, permitida só para outro órgão ou entidade da Administração, de qualquer esfera, ressalvadas as alíneas f, g e h; c) permuta por outros imóveis que atendam aos requisitos da Administração, desde que a diferença apurada não passe da metade do valor do imóvel que será ofertado pela União, segundo avaliação prévia, e que haja a torna (pagamento da diferença), sempre que for o caso; d) investidura.",
        pista: "Na alínea a, quem dá o imóvel em pagamento é a Administração, pagando uma dívida dela. No § 1º é o contrário: a Administração recebeu o imóvel de um devedor. Doação entre entes: a União doa um imóvel a um município sem licitar. Permuta é a troca: a União entrega um terreno de R$ 50 milhões; o terreno que ela recebe deve valer R$ 25 milhões ou mais, porque a diferença não pode passar da metade. Pela letra da lei, esse limite da diferença se refere ao imóvel ofertado pela União.",
      },
      {
        termo: "Investidura (art. 76, § 5º)",
        faz: "É: I – a alienação, ao proprietário de imóvel vizinho, por preço que não seja menor que o da avaliação, de área remanescente ou resultante de obra pública que se tornou inaproveitável sozinha; II – a alienação ao legítimo possuidor direto ou, na falta dele, ao poder público, de imóvel residencial construído em núcleo urbano anexo a usina hidrelétrica, desde que considerado dispensável na fase de operação e que não integre a categoria de bens reversíveis ao fim da concessão.",
        pista: "Exemplo: depois de alargar uma avenida, sobra uma faixa de terreno pequena demais para uso próprio. Ela é vendida ao dono do lote ao lado.",
      },
      {
        termo: "Imóveis: venda a órgão e programas sociais (art. 76, I, e a g)",
        faz: "e) venda a outro órgão ou entidade da Administração, de qualquer esfera; f) alienação gratuita ou onerosa, aforamento, concessão de direito real de uso, locação e permissão de uso de imóveis residenciais construídos, destinados ou efetivamente usados em programas de habitação ou de regularização fundiária de interesse social, feitos por órgão ou entidade da Administração; g) as mesmas formas para imóveis comerciais de âmbito local, com área de até 250 m², em programas de regularização fundiária de interesse social.",
      },
      {
        termo: "Imóveis: terras rurais e regularização (art. 76, I, h a j)",
        faz: "h) alienação e concessão de direito real de uso, gratuita ou onerosa, de terras públicas rurais da União e do Incra, onde incidam ocupações até o limite do art. 6º, § 1º, da Lei 11.952/2009, para fins de regularização fundiária; i) legitimação de posse (Lei 6.383/1976, art. 29), por iniciativa e deliberação dos órgãos da Administração com competência legal; j) legitimação fundiária e legitimação de posse da Lei 13.465/2017.",
      },
      {
        parte: "15. Licitação dispensada: móveis (art. 76, II)",
        termo: "Móveis: doação, permuta, ações e títulos (art. 76, II, a a d)",
        faz: "A licitação é dispensada para: a) doação, permitida só para fins e uso de interesse social, após avaliação de sua oportunidade e conveniência socioeconômica em relação a outra forma de alienação; b) permuta, permitida só entre órgãos ou entidades da Administração; c) venda de ações, que podem ser negociadas em bolsa, observada a legislação específica; d) venda de títulos, conforme a legislação.",
      },
      {
        termo: "Móveis: produtos e materiais sem uso (art. 76, II, e e f)",
        faz: "e) venda de bens produzidos ou comercializados por entidades da Administração, em razão de suas finalidades; f) venda de materiais e equipamentos sem utilização previsível por quem deles dispõe, para outros órgãos ou entidades da Administração.",
      },
      {
        termo: "Outras regras da alienação (art. 76, §§ 2º a 7º, e art. 77)",
        faz: "Imóvel doado com base na alínea b volta ao patrimônio do doador se cessarem as razões da doação, vedada a alienação pelo beneficiário (§ 2º). A doação com encargo exige licitação e o edital deve trazer os encargos, o prazo de cumprimento e a cláusula de reversão, salvo interesse público justificado (§ 6º). Se o donatário precisar dar o imóvel em garantia de financiamento, a cláusula de reversão e as demais obrigações são garantidas por hipoteca em segundo grau em favor do doador (§ 7º). A Administração pode conceder título de propriedade ou de direito real de uso de imóvel, com dispensa de licitação, quando o uso for de outro órgão ou entidade da Administração, ou de pessoa natural que cumpriu os requisitos legais de ocupação mansa e pacífica e exploração direta de área rural (§ 3º).",
        pista: "Reversão: a União doa um prédio a um município para um programa de iniciação esportiva; acabado o programa, o prédio volta à União. Doação com encargo é a que impõe uma obrigação ao beneficiário: a União doa equipamentos hospitalares a entidades privadas com o encargo de atender a população de graça; por isso, em regra, licita-se.",
      },
      {
        termo: "Direito de preferência do ocupante (art. 77)",
        faz: "Na venda de bens imóveis, será concedido direito de preferência ao licitante que, submetendo-se a todas as regras do edital, comprove que ocupa o imóvel objeto da licitação.",
        pista: "Funciona como o inquilino que tem preferência na compra do apartamento alugado. A lei não detalha como a preferência é exercida.",
      },
      {
        parte: "16. Fases e forma da licitação (art. 17)",
        termo: "Fases (art. 17)",
        faz: "O processo de licitação segue estas fases, em sequência: I – preparatória; II – divulgação do edital; III – apresentação de propostas e lances, quando for o caso; IV – julgamento; V – habilitação; VI – recursal; VII – homologação.",
        pista: "A habilitação pode vir antes das propostas e do julgamento, por ato motivado que explique os benefícios e com previsão expressa no edital (§ 1º). Na Lei 8.666 a habilitação vinha antes do julgamento; agora a regra é julgar primeiro e habilitar só o vencedor.",
      },
      {
        termo: "Forma da licitação",
        faz: "Preferencialmente eletrônica. A forma presencial é admitida se for motivada; nesse caso, a sessão pública é registrada em ata e gravada em áudio e vídeo (§ 2º), e a gravação é juntada aos autos do processo depois do encerramento da licitação (§ 5º).",
        pista: "Na forma eletrônica, a Administração pode exigir, como condição de validade e eficácia, que os licitantes pratiquem seus atos em formato eletrônico (§ 4º): propostas, lances, impugnações e recursos pelo sistema.",
      },
      {
        termo: "Avaliação de conformidade (art. 17, § 3º)",
        faz: "Se o edital previr, na fase de julgamento, o órgão pode analisar a conformidade da proposta do licitante provisoriamente vencedor, por homologação de amostras, exame de conformidade e prova de conceito, entre outros testes de interesse da Administração, para comprovar que ela segue o termo de referência ou o projeto básico.",
        pista: "Só o provisoriamente vencedor é testado, e não todos os licitantes. Prova de conceito verifica se o objeto cumpre as condições técnicas prometidas; é comum em tecnologia da informação: antes de fechar a compra de um sistema, o órgão pede uma demonstração de que ele funciona.",
      },
      {
        termo: "Certificação acreditada pelo Inmetro (art. 17, § 6º)",
        faz: "A Administração pode exigir certificação por organização independente acreditada pelo Inmetro como condição para aceitar: I – estudos, anteprojetos, projetos básicos e projetos executivos; II – a conclusão de fases ou de objetos de contratos; III – a adequação do material e do corpo técnico apresentados pela empresa para a habilitação.",
      },
      {
        parte: "17. Fase preparatória (arts. 18 e 19)",
        termo: "Fase preparatória (art. 18)",
        faz: "É a fase do planejamento. Deve ser compatível com o plano de contratações anual, sempre que elaborado, e com as leis orçamentárias, e tratar de todas as considerações técnicas, de mercado e de gestão que podem interferir na contratação.",
        pista: "Na Lei 8.666 essa etapa era chamada de “fase interna”. Planejar bem evita comprar errado, pagar caro e ter de anular a licitação depois.",
      },
      {
        termo: "O que a fase preparatória define (art. 18, I a XI)",
        faz: "I – a necessidade da contratação, fundamentada em estudo técnico preliminar que caracterize o interesse público; II – o objeto, por termo de referência, anteprojeto, projeto básico ou projeto executivo; III – as condições de execução e pagamento, as garantias exigidas e ofertadas e as condições de recebimento; IV – o orçamento estimado, com a composição dos preços; V – o edital; VI – a minuta de contrato, quando necessária, que será anexo obrigatório do edital; VII – o regime de fornecimento de bens, de prestação de serviços ou de execução de obras, observada a economia de escala; VIII – a modalidade, o critério de julgamento e o modo de disputa, considerando todo o ciclo de vida do objeto; IX – a motivação das condições do edital, como as exigências de qualificação técnica e econômico-financeira, os critérios de pontuação técnica e as regras de consórcio; X – a análise dos riscos que possam comprometer a licitação e a execução do contrato; XI – a motivação sobre o momento de divulgar o orçamento (art. 24).",
        pista: "Sequência lógica: por que contratar, o que contratar, como executar e pagar, quanto custa, edital e contrato, como disputar, por que cada exigência, quais os riscos e quando revelar o orçamento.",
      },
      {
        termo: "Conteúdo do estudo técnico preliminar (art. 18, §§ 1º e 2º)",
        faz: "O ETP mostra o problema e a melhor solução e traz: I – a necessidade, vista pelo interesse público; II – a previsão no plano de contratações anual; III – os requisitos; IV – as quantidades estimadas, com memória de cálculo; V – o levantamento de mercado e a escolha da solução; VI – o valor estimado, com preços de referência; VII – a solução como um todo, inclusive manutenção e assistência técnica; VIII – a justificativa para parcelar ou não; IX – os resultados esperados em economia; X – as providências antes do contrato, como capacitar os fiscais; XI – as contratações correlatas ou interdependentes; XII – os impactos ambientais e as medidas para reduzi-los; XIII – a conclusão sobre se a contratação atende a necessidade.",
        pista: "Obrigatórios sempre: I (necessidade), IV (quantidades), VI (valor), VIII (parcelamento) e XIII (conclusão). Se faltar algum dos outros, o ETP justifica a falta (§ 2º).",
      },
      {
        termo: "Obras e serviços comuns de engenharia (art. 18, § 3º)",
        faz: "No ETP de obras e serviços comuns de engenharia, se ficar demonstrado que não há prejuízo à aferição dos padrões de desempenho e qualidade, o objeto pode ser especificado só em termo de referência ou em projeto básico, dispensada a elaboração de projetos.",
      },
      {
        termo: "Apoio ao planejamento (art. 19)",
        faz: "Os órgãos com competência para regulamentar compras, obras e licitações devem: I – centralizar, de preferência, as aquisições e contratações; II – criar catálogo eletrônico de padronização de compras, serviços e obras; III – instituir sistema informatizado de acompanhamento de obras, com imagem e vídeo; IV – criar, com o apoio do jurídico e do controle interno, modelos de minutas de editais, termos de referência, contratos e outros documentos; V – adotar aos poucos modelos digitais de obras e serviços de engenharia.",
        pista: "Todos os entes podem adotar o catálogo e as minutas do Poder Executivo federal. O catálogo pode ser usado nas licitações por menor preço ou maior desconto. Se o órgão não usar o catálogo ou as minutas-padrão, deve justificar por escrito no processo (§ 2º).",
      },
      {
        termo: "BIM (art. 19, § 3º)",
        faz: "Nas licitações de obras e serviços de engenharia e arquitetura, sempre que adequado ao objeto, adota-se de preferência a Modelagem da Informação da Construção (BIM) ou tecnologia semelhante ou mais avançada.",
        pista: "BIM é um modelo digital da obra em 3D, com as informações de cada parte (material, custo, prazo).",
      },
      {
        parte: "18. Luxo, audiência e consulta pública (arts. 20 e 21)",
        termo: "Proibição de artigos de luxo (art. 20)",
        faz: "Os itens de consumo comprados pela Administração devem ser de qualidade comum, não superior à necessária para cumprir a sua finalidade. É vedada a compra de artigos de luxo.",
        pista: "Luxo aqui é o supérfluo, acima do necessário. Exemplo: o órgão compra canetas comuns, e não canetas de grife; cadeiras de escritório adequadas, e não poltronas de couro importadas.",
      },
      {
        termo: "Regulamento do comum e do luxo (art. 20, §§ 1º e 2º)",
        faz: "Os Poderes Executivo, Legislativo e Judiciário definem, cada um em regulamento, os limites para enquadrar os bens de consumo como comuns ou de luxo. Passados 180 dias da promulgação da lei, novas compras de bens de consumo só podem ser feitas depois da edição desse regulamento.",
      },
      {
        termo: "Audiência pública (art. 21)",
        faz: "A Administração pode convocar, com antecedência mínima de 8 dias úteis, audiência pública, presencial ou a distância (eletrônica), sobre a licitação que pretende fazer. As informações, inclusive o estudo técnico preliminar e os elementos do edital, são disponibilizadas antes, e todos os interessados podem se manifestar.",
        pista: "É facultativa (“poderá”) e acontece antes do edital. Os 8 dias úteis são entre a convocação e a audiência; a lei não fixa prazo entre a audiência e o edital. Na Lei 8.666 (art. 39), a audiência era obrigatória nas licitações de valor muito alto.",
      },
      {
        termo: "Consulta pública (art. 21, parágrafo único)",
        faz: "A Administração também pode submeter a licitação a consulta pública prévia: disponibiliza os elementos a todos os interessados, que podem mandar sugestões no prazo fixado.",
        pista: "Também é facultativa, e a lei não fixa prazo mínimo. Diferença: a audiência é um encontro, com debate; a consulta é por escrito (formulário, e-mail), sem reunião.",
      },
      {
        parte: "19. Valor estimado da contratação (art. 23)",
        termo: "Valor estimado (art. 23)",
        faz: "O valor estimado da contratação deve ser compatível com os preços de mercado, considerando os bancos de dados públicos e as quantidades a contratar, a possível economia de escala e as peculiaridades do local onde o objeto será executado.",
        pista: "Na Lei 14.133 o valor não define mais a modalidade. Mesmo assim ele é importante: serve para identificar sobrepreço, saber se cabe dispensa por valor, planejar a licitação e reservar o dinheiro no orçamento.",
      },
      {
        termo: "Preço de bens e serviços (art. 23, § 1º)",
        faz: "Para bens e serviços em geral, o valor estimado é o melhor preço obtido com estes parâmetros, combinados ou não: I – custos menores ou iguais à mediana do item no painel de preços ou no banco de preços em saúde do PNCP; II – contratações semelhantes da Administração, em execução ou concluídas no último ano, inclusive por registro de preços; III – pesquisa publicada em mídia especializada, tabela de referência aprovada pelo Executivo federal e sites especializados ou de domínio amplo, com data e hora de acesso; IV – pesquisa direta com no mínimo 3 fornecedores, por pedido formal de cotação, com justificativa da escolha deles e sem orçamentos obtidos mais de 6 meses antes da divulgação do edital; V – base nacional de notas fiscais eletrônicas.",
        pista: "Aqui não há ordem obrigatória: pode usar um parâmetro só ou vários. Mediana é o valor do meio de uma lista em ordem. Exemplo de pesquisa direta: o órgão pede cotação formal a 3 lojas e explica por que escolheu essas lojas.",
      },
      {
        termo: "Preço de obras e engenharia (art. 23, § 2º)",
        faz: "Para obras e serviços de engenharia, o valor estimado, acrescido do BDI de referência e dos Encargos Sociais, segue estes parâmetros, nesta ordem: I – custos menores ou iguais à mediana do Sicro (infraestrutura de transportes) ou do Sinapi (demais obras); II – mídia especializada, tabela de referência e sites, com data e hora de acesso; III – contratações semelhantes no último ano; IV – base nacional de notas fiscais eletrônicas.",
        pista: "Diferença para a prova: em obras há ordem obrigatória; em bens e serviços, não. BDI (Benefícios e Despesas Indiretas) cobre o que não aparece em cada item da obra, como a administração central da empresa, despesas financeiras, seguros e o lucro. Encargos Sociais são custos da folha, como as contribuições ao INSS e ao FGTS.",
      },
      {
        termo: "Estados e municípios (art. 23, § 3º)",
        faz: "Nas contratações de municípios, estados e Distrito Federal que não envolvam recursos da União, o valor estimado pode ser definido por outros sistemas de custos adotados pelo próprio ente.",
        pista: "Os parâmetros dos §§ 1º e 2º são obrigatórios na esfera federal e sempre que houver dinheiro da União, como num convênio federal.",
      },
      {
        termo: "Preço na contratação direta (art. 23, § 4º)",
        faz: "Na inexigibilidade ou na dispensa, se não for possível estimar o valor pelos §§ 1º a 3º, o contratado deve provar antes que o preço segue o de contratações semelhantes, com notas fiscais emitidas para outros contratantes no último ano ou por outro meio idôneo.",
        pista: "Exemplo: para contratar um artista consagrado, não há painel de preços; ele apresenta as notas fiscais de shows feitos para outros contratantes no último ano.",
      },
      {
        termo: "Preço na contratação integrada e semi-integrada (art. 23, §§ 5º e 6º)",
        faz: "Nesses regimes, o valor estimado segue o § 2º, com ou sem uma parcela de remuneração do risco. Quando necessário e o anteprojeto permitir, usa-se orçamento sintético. O orçamento da proposta do licitante deve ter, no mínimo, o mesmo detalhamento.",
      },
      {
        parte: "20. Edital: modelos, licenças e mão de obra (art. 25)",
        termo: "Minutas padronizadas (art. 25, § 1º)",
        faz: "Sempre que o objeto permitir, a Administração adota minutas padronizadas de edital e de contrato, com cláusulas uniformes.",
        pista: "Exemplo: o órgão compra canetas todo ano; usa sempre o mesmo modelo de edital e de contrato, só atualizando o necessário. Ganha tempo e reduz erros.",
      },
      {
        termo: "Licenciamento ambiental e desapropriação (art. 25, § 5º)",
        faz: "O edital pode atribuir ao contratado: I – a obtenção do licenciamento ambiental; II – a realização da desapropriação autorizada pelo poder público.",
        pista: "A declaração de utilidade pública, que autoriza desapropriar, é sempre ato do Poder Público; o contratado só cuida da parte prática, como pagar a indenização e transferir o bem. Se o licenciamento for encargo da Administração, nas obras e serviços de engenharia a manifestação prévia ou a licença prévia, quando cabíveis, devem ser obtidas antes da divulgação do edital (art. 115, § 4º).",
      },
      {
        termo: "Mão de obra de grupos vulneráveis (art. 25, § 9º)",
        faz: "O edital pode exigir, na forma do regulamento, que um percentual mínimo da mão de obra que executa o objeto seja formado por: I – mulheres vítimas de violência doméstica; II – pessoas oriundas ou egressas do sistema prisional.",
        pista: "É faculdade (“poderá”). Objetivo: usar a contratação pública para gerar emprego e reinserção social.",
      },
      {
        parte: "21. Reajuste e repactuação (art. 25, §§ 7º e 8º)",
        termo: "Data-base do reajuste (art. 25, § 7º)",
        faz: "Qualquer que seja o prazo do contrato, o edital deve prever o índice de reajuste de preço, com data-base vinculada à data do orçamento estimado. Pode haver mais de um índice específico ou setorial, conforme o mercado de cada insumo.",
        pista: "A data-base é a do orçamento estimado, e não a da assinatura do contrato. Exemplo: orçamento feito em março; o prazo para o reajuste conta a partir de março.",
      },
      {
        termo: "Serviços contínuos: reajuste ou repactuação (art. 25, § 8º)",
        faz: "Nos serviços contínuos, respeitado o intervalo mínimo de 1 ano, o reajuste é feito por: I – reajustamento em sentido estrito, quando não houver dedicação exclusiva nem predominância de mão de obra, por índices específicos ou setoriais; II – repactuação, quando houver dedicação exclusiva ou predominância de mão de obra, pela demonstração analítica da variação dos custos.",
        pista: "Reajuste em sentido amplo é o gênero, com duas espécies: reajustamento em sentido estrito (por índice, como IPCA ou IGP-M) e repactuação (pela planilha de custos). Exemplo de repactuação: na vigilância ou na limpeza, a convenção coletiva aumenta o salário da categoria e a empresa demonstra o novo custo. Serviço contínuo é o que atende necessidade permanente ou prolongada.",
      },
      {
        parte: "22. Margem de preferência: complementos (arts. 26 e 27)",
        termo: "Por que existe a margem",
        faz: "A margem de preferência permite à Administração pagar um pouco mais pelo produto ou serviço nacional, em troca de emprego, renda e desenvolvimento no País.",
        pista: "Exemplo: o produto estrangeiro custa R$ 100 e o nacional, R$ 108. Com margem de 10%, o nacional pode vencer. A margem de até 20% vale só para bens e serviços nacionais resultantes de inovação tecnológica no País; não vale para reciclados, recicláveis ou biodegradáveis.",
      },
      {
        termo: "Quando a margem não se aplica (art. 26, § 5º)",
        faz: "A margem não se aplica aos bens manufaturados e serviços nacionais se a capacidade de produção ou de prestação no País for inferior: I – à quantidade a ser adquirida ou contratada; ou II – aos quantitativos fixados por causa do parcelamento do objeto.",
      },
      {
        termo: "Lista das empresas favorecidas (art. 27)",
        faz: "Todo exercício financeiro é divulgada, em sítio eletrônico oficial, a relação das empresas favorecidas pela margem de preferência, com o volume de recursos destinado a cada uma.",
      },
      {
        termo: "Serviço nacional e produto manufaturado nacional (art. 6º, XXXVI e XXXVII)",
        faz: "Serviço nacional é o prestado em território nacional, nas condições do Poder Executivo federal (inciso XXXVI). Produto manufaturado nacional é o produzido no território nacional conforme o processo produtivo básico ou as regras de origem fixadas pelo Poder Executivo federal (inciso XXXVII).",
        pista: "Material que cite o inciso XXXVI para as duas definições está errado: o produto manufaturado nacional é o inciso XXXVII.",
      },
      {
        parte: "23. Parecer jurídico e divulgação do edital (arts. 53 e 54)",
        termo: "Parecer jurídico (art. 53)",
        faz: "Ao fim da fase preparatória, o processo vai ao órgão de assessoramento jurídico, que faz o controle prévio de legalidade. No parecer, o jurídico deve: I – analisar os processos por critérios objetivos de prioridade definidos antes; II – escrever em linguagem simples, clara e objetiva, examinando todos os elementos indispensáveis à contratação e expondo os pressupostos de fato e de direito.",
        pista: "Encerrada a instrução técnica e jurídica, a autoridade manda divulgar o edital (§ 3º).",
      },
      {
        termo: "Parecer também em outros ajustes (art. 53, § 4º)",
        faz: "O jurídico também faz controle prévio de legalidade de contratações diretas, acordos, termos de cooperação, convênios, ajustes, adesões a atas de registro de preços, outros instrumentos parecidos e seus termos aditivos.",
      },
      {
        termo: "Quando o parecer é dispensável (art. 53, § 5º)",
        faz: "A análise jurídica é dispensável nos casos definidos antes em ato da autoridade jurídica máxima competente, que considerará o baixo valor, a baixa complexidade, a entrega imediata do bem ou o uso de minutas já padronizadas pelo jurídico.",
        pista: "Quem define os casos é a autoridade jurídica máxima, em ato prévio, e não o gestor que quer contratar.",
      },
      {
        termo: "Divulgação do edital (art. 54)",
        faz: "A publicidade do edital é feita pela divulgação e manutenção do inteiro teor do edital e dos anexos no PNCP. Também é obrigatório publicar o extrato do edital no Diário Oficial da União, do Estado, do Distrito Federal ou do Município (no consórcio público, do ente de maior nível) e em jornal diário de grande circulação (§ 1º).",
        pista: "É facultativo divulgar também no site oficial do ente e avisar diretamente os interessados cadastrados (§ 2º). Depois da homologação, os documentos da fase preparatória que não fizeram parte do edital são publicados no PNCP (§ 3º).",
      },
      {
        parte: "24. Prazos para apresentar propostas (art. 55)",
        termo: "Prazos mínimos: como contar",
        faz: "Os prazos do art. 55 são mínimos, em dias úteis, contados da data de divulgação do edital até a apresentação de propostas e lances. O edital pode dar mais tempo, nunca menos.",
        pista: "Na contagem, exclui-se o dia do começo e inclui-se o do vencimento; dia útil é o dia com expediente no órgão (art. 183).",
      },
      {
        termo: "Prazos para bens (art. 55, I)",
        faz: "a) 8 dias úteis, se o critério for menor preço ou maior desconto; b) 15 dias úteis nos demais casos.",
      },
      {
        termo: "Prazos para serviços e obras (art. 55, II)",
        faz: "a) 10 dias úteis: menor preço ou maior desconto, em serviços comuns e obras e serviços comuns de engenharia; b) 25 dias úteis: menor preço ou maior desconto, em serviços especiais e obras e serviços especiais de engenharia; c) 60 dias úteis: contratação integrada; d) 35 dias úteis: contratação semi-integrada e os demais casos.",
      },
      {
        termo: "Prazos por critério (art. 55, III e IV)",
        faz: "III – maior lance: 15 dias úteis; IV – técnica e preço ou melhor técnica ou conteúdo artístico: 35 dias úteis.",
        pista: "No pregão (menor preço ou maior desconto), ficam 8 dias úteis para bens e 10 para serviços comuns. No diálogo competitivo, o edital dá no mínimo 25 dias úteis para manifestação de interesse e, depois, no mínimo 60 dias úteis para as propostas (art. 32).",
      },
      {
        termo: "Mudança no edital (art. 55, § 1º)",
        faz: "Se o edital for modificado, é preciso nova divulgação, da mesma forma da inicial, e os prazos começam de novo, salvo se a alteração não afetar a formulação das propostas.",
        pista: "Exemplo: corrigir um erro de digitação no endereço do órgão não reabre o prazo; mudar a quantidade a comprar reabre.",
      },
      {
        termo: "Prazos pela metade no SUS (art. 55, § 2º)",
        faz: "Nas licitações do Ministério da Saúde, no âmbito do SUS, os prazos podem ser reduzidos até a metade, por decisão fundamentada.",
      },
      {
        parte: "25. Modos de disputa e lances (arts. 56 e 57)",
        termo: "Modos de disputa (art. 56)",
        faz: "O modo de disputa pode ser, isolado ou combinado: I – aberto: os licitantes apresentam lances públicos e sucessivos, crescentes ou decrescentes; II – fechado: as propostas ficam em sigilo até a data e a hora marcadas para a divulgação.",
        pista: "Exemplo do aberto: lances de R$ 100, depois R$ 97, R$ 95, R$ 90, e todos veem. No fechado, cada um entrega a proposta lacrada (ou sigilosa no sistema) e só se conhece o resultado na abertura. No combinado, começa-se por um modo e termina-se pelo outro.",
      },
      {
        termo: "Vedações dos modos (art. 56, §§ 1º e 2º)",
        faz: "§ 1º: é vedado usar só o modo fechado quando o critério for menor preço ou maior desconto. § 2º: é vedado o modo aberto quando o critério for técnica e preço.",
        pista: "Material que cite “art. 55, § 1º” para essa vedação está errado; é o art. 56, § 1º. Lógica: no menor preço, a disputa aberta de lances baixa o valor; na técnica e preço, a proposta técnica precisa ser sigilosa.",
      },
      {
        termo: "Lances intermediários (art. 56, § 3º)",
        faz: "São intermediários os lances: I – iguais ou inferiores ao maior já ofertado, no critério de maior lance; II – iguais ou superiores ao menor já ofertado, nos demais critérios.",
        pista: "O lance intermediário não cobre o melhor, mas melhora a posição do licitante na classificação. Serve para formar a fila de quem pode substituir o vencedor. Exemplo: o melhor lance é R$ 90; quem estava em R$ 99 dá R$ 93 e sobe na classificação.",
      },
      {
        termo: "Reinício da disputa aberta (art. 56, § 4º)",
        faz: "Definida a melhor proposta, se a diferença para a segunda colocada for de pelo menos 5%, a Administração pode admitir o reinício da disputa aberta, conforme o edital, para definir as demais colocações.",
      },
      {
        termo: "Planilhas do vencedor em obras (art. 56, § 5º)",
        faz: "Nas obras e serviços de engenharia, depois do julgamento, o vencedor deve refazer e apresentar, por meio eletrônico, as planilhas com quantidades, custos unitários, BDI e Encargos Sociais, ajustadas ao valor final da sua proposta.",
      },
      {
        termo: "Intervalo mínimo entre lances (art. 57)",
        faz: "O edital pode fixar um intervalo mínimo de diferença de valores entre os lances, que vale tanto para os lances intermediários quanto para a proposta que cobrir a melhor oferta.",
        pista: "Evita a disputa travada por diferenças de centavos, como lances só 0,001% menores que o anterior.",
      },
      {
        parte: "26. Garantia de proposta (art. 58)",
        termo: "Garantia de proposta (art. 58)",
        faz: "Pode ser exigida, no momento da proposta, a comprovação de uma garantia, como requisito de pré-habilitação. Ela não pode passar de 1% do valor estimado da contratação.",
        pista: "É facultativa, mas precisa estar no edital. Não confunda com a garantia do contrato (arts. 96 a 102), que é prestada por quem já venceu.",
      },
      {
        termo: "Formas da garantia (art. 58, § 4º, e art. 96, § 1º)",
        faz: "O licitante escolhe uma destas formas: I – caução em dinheiro ou em títulos da dívida pública; II – seguro-garantia; III – fiança bancária; IV – título de capitalização pago de uma só vez, com resgate pelo valor total.",
        pista: "Quem escolhe a forma é o licitante (ou o contratado), e não a Administração.",
      },
      {
        termo: "Devolução e execução da garantia (art. 58, §§ 2º e 3º)",
        faz: "A garantia de proposta é devolvida em até 10 dias úteis, contados da assinatura do contrato ou da data em que a licitação for declarada fracassada. É executada pelo valor integral se o licitante se recusar a assinar o contrato ou não apresentar os documentos para a contratação.",
      },
      {
        parte: "27. Julgamento: desclassificação e negociação (arts. 59 a 61)",
        termo: "Desclassificação (art. 59)",
        faz: "São desclassificadas as propostas que: I – tiverem vícios insanáveis; II – não seguirem as especificações técnicas do edital; III – tiverem preços inexequíveis ou ficarem acima do orçamento estimado; IV – não tiverem a exequibilidade demonstrada, quando exigido; V – estiverem em desacordo com outras exigências do edital, se insanável.",
        pista: "A conformidade pode ser verificada só na proposta mais bem classificada (§ 1º). A Administração pode fazer diligências para conferir a exequibilidade ou exigir que o licitante a demonstre (§ 2º).",
      },
      {
        termo: "Exequibilidade em obras (art. 59, §§ 3º a 5º)",
        faz: "Em obras e serviços de engenharia: considera-se o preço global, as quantidades e os preços unitários relevantes, conforme o critério de aceitabilidade do edital (§ 3º); é inexequível a proposta abaixo de 75% do valor orçado pela Administração (§ 4º); a proposta vencedora abaixo de 85% do valor orçado exige garantia adicional, igual à diferença entre o orçado e a proposta (§ 5º).",
        pista: "Exemplo: obra orçada em R$ 1 milhão. Proposta de R$ 700 mil (70%) é inexequível. Proposta de R$ 800 mil (80%) é aceita, mas com garantia adicional de R$ 200 mil. Para os demais objetos, a lei não fixa percentual: a exequibilidade é analisada caso a caso.",
      },
      {
        termo: "Negociação (art. 61)",
        faz: "Definido o resultado do julgamento, a Administração pode negociar condições mais vantajosas com o primeiro colocado. Se ele, mesmo após a negociação, for desclassificado porque a proposta continua acima do preço máximo, pode-se negociar com os demais, na ordem de classificação.",
        pista: "A negociação é conduzida pelo agente ou pela comissão de contratação, e o resultado é divulgado a todos e juntado ao processo (§ 2º). O licitante que não aceita baixar o preço não é desclassificado só por isso, se a proposta estiver dentro do orçamento.",
      },
      {
        termo: "Sem sorteio no desempate",
        faz: "A Lei 14.133 não prevê sorteio entre os critérios de desempate do art. 60, que estão na aula anterior. Na Lei 8.666 (art. 45, § 2º), o sorteio era o último critério. Depois de todos os critérios e preferências, é quase impossível o empate continuar. Os critérios não afastam a preferência das microempresas e empresas de pequeno porte da Lei Complementar 123/2006.",
        pista: "A Lei das Estatais (Lei 13.303/2016, art. 55) mandava usar os critérios da Lei 8.666; com o art. 189 da Lei 14.133, passa a usar os da nova lei. Cuidado: se o órgão licitante for municipal, a preferência é da empresa do estado onde fica o município, e não da empresa do próprio município.",
      },
      {
        parte: "28. Habilitação: regras gerais (arts. 62 a 65)",
        termo: "Habilitação (art. 62)",
        faz: "É a fase em que se verificam as informações e os documentos necessários e suficientes para mostrar que o licitante é capaz de executar o objeto. Divide-se em: I – jurídica; II – técnica; III – fiscal, social e trabalhista; IV – econômico-financeira.",
      },
      {
        termo: "Regras da habilitação (art. 63)",
        faz: "I – pode ser exigida declaração de que o licitante cumpre os requisitos de habilitação, e ele responde pela veracidade; II – só o vencedor apresenta os documentos de habilitação, salvo se a habilitação vier antes do julgamento; III – os documentos de regularidade fiscal são exigidos, em qualquer caso, só depois do julgamento e só do mais bem classificado; IV – é exigida declaração de que o licitante cumpre a reserva de cargos para pessoa com deficiência e para reabilitado da Previdência Social.",
        pista: "Até na inversão de fases (habilitação antes), a regularidade fiscal fica para depois do julgamento e só do primeiro colocado.",
      },
      {
        termo: "Custos trabalhistas e vistoria (art. 63, §§ 1º a 4º)",
        faz: "O edital exige, sob pena de desclassificação, declaração de que a proposta cobre todos os custos dos direitos trabalhistas. Se conhecer o local for indispensável, o edital pode exigir, sob pena de inabilitação, que o licitante ateste que conhece o local, com direito a vistoria prévia; mas sempre deve permitir trocar a vistoria por declaração formal do responsável técnico. Se houver vistoria, a Administração oferece datas e horários diferentes para cada interessado.",
        pista: "Datas diferentes impedem que os concorrentes se encontrem na vistoria e combinem preços.",
      },
      {
        termo: "Documentos depois da entrega (art. 64)",
        faz: "Entregues os documentos, não se admite substituir nem apresentar novos, salvo em diligência para: I – complementar informações sobre documentos já apresentados, para apurar fatos que já existiam na abertura; II – atualizar documentos cuja validade venceu depois do recebimento das propostas. A comissão pode sanar erros ou falhas que não alterem a substância dos documentos, por despacho fundamentado e acessível a todos (§ 1º).",
        pista: "Se a habilitação veio antes e já foi encerrada, ninguém é excluído por motivo de habilitação, salvo por fatos supervenientes ou só conhecidos após o julgamento (§ 2º).",
      },
      {
        termo: "Condições no edital (art. 65)",
        faz: "As condições de habilitação são definidas no edital. Empresa criada no mesmo exercício da licitação cumpre todas as exigências, mas pode trocar os demonstrativos contábeis pelo balanço de abertura (§ 1º). A habilitação pode ser feita por meio eletrônico (§ 2º).",
      },
      {
        parte: "29. Habilitação: as quatro espécies (arts. 66 a 70)",
        termo: "Habilitação jurídica (art. 66)",
        faz: "Mostra que o licitante pode exercer direitos e assumir obrigações. Os documentos se limitam à prova da existência jurídica da pessoa e, quando for o caso, da autorização para exercer a atividade.",
        pista: "Responde “quem é a empresa”: contrato social, registro na junta comercial, ato constitutivo. Exemplo de autorização: empresa de vigilância precisa de autorização da Polícia Federal.",
      },
      {
        termo: "Habilitação técnica (art. 67)",
        faz: "Divide-se em técnico-profissional (o profissional) e técnico-operacional (a empresa). Os documentos se limitam a: I – profissional registrado no conselho, com atestado de responsabilidade técnica por obra ou serviço semelhante; II – certidões ou atestados de capacidade operacional em serviços semelhantes de complexidade igual ou maior; III – indicação do pessoal técnico, das instalações e dos equipamentos disponíveis; IV – requisitos de lei especial; V – registro na entidade profissional; VI – declaração de que conhece as informações e as condições locais.",
        pista: "Os atestados só podem ser exigidos para as parcelas de maior relevância ou valor significativo: as de valor igual ou superior a 4% do total estimado (§ 1º). Pode-se exigir quantidade mínima de até 50% dessas parcelas, vedados limites de tempo e de local (§ 2º).",
      },
      {
        termo: "Habilitação fiscal, social e trabalhista (art. 68)",
        faz: "Verifica: I – inscrição no CPF ou no CNPJ; II – inscrição no cadastro de contribuintes estadual ou municipal, se houver; III – regularidade com a Fazenda federal, estadual ou municipal; IV – regularidade com a Seguridade Social e o FGTS; V – regularidade perante a Justiça do Trabalho; VI – cumprimento do art. 7º, XXXIII, da CF.",
        pista: "O art. 7º, XXXIII, da CF proíbe trabalho noturno, perigoso ou insalubre a menores de 18 anos e qualquer trabalho a menores de 16, salvo como aprendiz a partir de 14. Os documentos podem ser substituídos por outros meios, inclusive eletrônicos (§ 1º).",
      },
      {
        termo: "Habilitação econômico-financeira (art. 69)",
        faz: "Mostra que o licitante tem saúde financeira para cumprir o contrato, de forma objetiva, por índices previstos e justificados no edital. Limita-se a: I – balanço patrimonial, demonstração de resultado e demais demonstrações contábeis dos 2 últimos exercícios sociais; II – certidão negativa de falência expedida pelo distribuidor da sede do licitante.",
        pista: "É vedado exigir faturamento mínimo anterior e índices de rentabilidade ou lucratividade. Nas compras para entrega futura e nas obras e serviços, o edital pode exigir capital mínimo ou patrimônio líquido mínimo de até 10% do valor estimado. Exemplo: para duplicar uma rodovia, a Administração quer uma empresa que não quebre no meio da obra.",
      },
      {
        termo: "Forma dos documentos (art. 70)",
        faz: "A documentação pode ser: I – original, cópia ou outro meio admitido; II – substituída por registro cadastral, se previsto no edital; III – dispensada, no todo ou em parte, nas contratações para entrega imediata, nas de valor inferior a 1/4 do limite de dispensa para compras e nas de produto para pesquisa e desenvolvimento até R$ 300 mil.",
        pista: "Empresas estrangeiras que não funcionam no País apresentam documentos equivalentes, conforme regulamento.",
      },
      {
        parte: "30. Impugnação, recursos e reconsideração (arts. 164 a 168)",
        termo: "Impugnação e esclarecimento (art. 164)",
        faz: "Qualquer pessoa pode impugnar o edital por irregularidade ou pedir esclarecimento, até 3 dias úteis antes da abertura do certame. A resposta sai em sítio eletrônico oficial em até 3 dias úteis, limitada ao último dia útil antes da abertura.",
        pista: "“Qualquer pessoa”: não precisa ser licitante.",
      },
      {
        termo: "Recurso (art. 165, I)",
        faz: "Cabe recurso, em 3 dias úteis da intimação ou da lavratura da ata, contra: a) ato que defere ou indefere pré-qualificação ou inscrição em registro cadastral, sua alteração ou cancelamento; b) julgamento das propostas; c) habilitação ou inabilitação; d) anulação ou revogação da licitação; e) extinção do contrato por ato unilateral e escrito da Administração.",
      },
      {
        termo: "Pedido de reconsideração (art. 165, II)",
        faz: "Cabe pedido de reconsideração, em 3 dias úteis da intimação, contra ato do qual não caiba recurso hierárquico.",
      },
      {
        termo: "Intenção de recorrer (art. 165, § 1º)",
        faz: "Contra o julgamento e a habilitação ou inabilitação, a intenção de recorrer deve ser manifestada imediatamente, sob pena de preclusão (perda do direito). O prazo das razões começa na intimação ou na ata de habilitação ou inabilitação (ou na ata de julgamento, se houver inversão de fases). A apreciação é em fase única.",
        pista: "Fase única: todos os recursos são julgados juntos, no fim, e não um a cada etapa.",
      },
      {
        termo: "Quem decide o recurso (art. 165, §§ 2º a 5º)",
        faz: "O recurso vai à autoridade que praticou o ato. Se ela não reconsiderar em 3 dias úteis, envia à autoridade superior, que decide em até 10 dias úteis. O acolhimento do recurso invalida só o ato que não pode ser aproveitado. As contrarrazões têm o mesmo prazo do recurso, e o licitante tem vista dos documentos necessários à defesa.",
      },
      {
        termo: "Recurso contra sanções (arts. 166 e 167)",
        faz: "Contra advertência, multa e impedimento de licitar e contratar cabe recurso em 15 dias úteis; a autoridade pode reconsiderar em 5 dias úteis, e a superior decide em até 20 dias úteis. Contra a declaração de inidoneidade cabe só pedido de reconsideração, em 15 dias úteis, decidido em até 20 dias úteis.",
      },
      {
        termo: "Efeito suspensivo (art. 168)",
        faz: "O recurso e o pedido de reconsideração têm efeito suspensivo do ato ou da decisão até a decisão final. A autoridade é auxiliada pelo órgão de assessoramento jurídico.",
      },
      {
        parte: "31. Encerramento da licitação (art. 71)",
        termo: "Encerramento (art. 71)",
        faz: "Encerrados o julgamento e a habilitação, e esgotados os recursos, o processo vai à autoridade superior, que pode: I – mandar o processo voltar para corrigir irregularidades (saneamento); II – revogar a licitação por conveniência e oportunidade; III – anular a licitação, de ofício ou por provocação de terceiros, se houver ilegalidade insanável; IV – adjudicar o objeto e homologar a licitação.",
        pista: "Essas regras valem, no que couber, para a contratação direta e para os procedimentos auxiliares (§ 4º).",
      },
      {
        termo: "Revogação (art. 71, II e § 2º)",
        faz: "É o desfazimento por conveniência e oportunidade (mérito). O motivo deve vir de fato superveniente devidamente comprovado.",
        pista: "Não basta mudar de ideia: precisa de um fato novo, como corte no orçamento ou fim da necessidade. A revogação é sempre total: alcança a licitação inteira, e não só um ato dela. Depois de assinado o contrato, não se fala mais em revogar a licitação; o caminho é a extinção do contrato.",
      },
      {
        termo: "Anulação (art. 71, III e § 1º)",
        faz: "É o desfazimento por ilegalidade insanável, de ofício ou por provocação. Ao anular, a autoridade indica os atos viciados e torna sem efeito os que deles dependem, e manda apurar a responsabilidade de quem deu causa.",
        pista: "Pode ser total ou parcial (só a partir do ato viciado). Pode ocorrer até depois da assinatura do contrato, mas aí a nulidade do contrato segue o art. 147: não é automática e exige avaliar o interesse público.",
      },
      {
        termo: "Manifestação prévia (art. 71, § 3º)",
        faz: "Na anulação e na revogação, deve ser assegurada a prévia manifestação dos interessados.",
      },
      {
        termo: "Adjudicação e homologação (art. 71, IV)",
        faz: "Adjudicar é entregar o objeto ao vencedor. Homologar é confirmar que todo o procedimento foi regular. As duas são feitas pela autoridade superior, no fim do processo.",
        pista: "A adjudicação é sempre ao vencedor, nunca ao segundo colocado. Ela não obriga a Administração a contratar, mas, se contratar, terá de ser com o adjudicatário.",
      },
      {
        parte: "32. Nulidade e indenização (arts. 147 a 149)",
        termo: "Nulidade só se for de interesse público (art. 147)",
        faz: "Se houver irregularidade na licitação ou no contrato que não possa ser sanada, a suspensão ou a nulidade do contrato só será decidida se for medida de interesse público. Avaliam-se, entre outros: impactos econômicos e sociais do atraso, riscos ambientais e à segurança, custo de perder o que já foi feito, despesas de preservação e de desmobilização, fechamento de postos de trabalho e custo de nova licitação.",
        pista: "Se a paralisação ou a anulação não for de interesse público, o contrato continua, e a irregularidade é resolvida por indenização por perdas e danos, sem prejuízo de punir os responsáveis. Exemplo: um hospital quase pronto não é abandonado por um vício no edital.",
      },
      {
        termo: "Efeitos da nulidade (art. 148)",
        faz: "A nulidade do contrato exige análise prévia do interesse público e retroage, desfazendo os efeitos já produzidos. Se não der para voltar à situação anterior, resolve-se por perdas e danos. Para não parar a atividade, a autoridade pode dar à nulidade eficácia futura, por até 6 meses, prorrogável uma vez, até a nova contratação.",
      },
      {
        termo: "Indenização do contratado (art. 149)",
        faz: "A nulidade não livra a Administração de indenizar o contratado pelo que ele executou até a data em que a nulidade for declarada ou tornada eficaz, e por outros prejuízos regularmente comprovados, desde que a culpa não seja dele. Quem deu causa à nulidade é responsabilizado.",
        pista: "Paga-se o executado para evitar enriquecimento sem causa da Administração. Outros prejuízos comprovados são, por exemplo, custos de mobilização e desmobilização e de matéria-prima já comprada. Se o contratado causou a nulidade (por exemplo, combinou preços com outros licitantes), não há indenização.",
      },
      {
        parte: "33. Procedimentos auxiliares e credenciamento (arts. 78 e 79)",
        termo: "Procedimentos auxiliares (art. 78)",
        faz: "São procedimentos auxiliares das licitações e contratações: I – credenciamento; II – pré-qualificação; III – procedimento de manifestação de interesse; IV – sistema de registro de preços; V – registro cadastral. Seguem critérios claros e objetivos definidos em regulamento (§ 1º).",
        pista: "O julgamento da pré-qualificação e do procedimento de manifestação de interesse segue o mesmo procedimento das licitações (§ 2º). Eles não são modalidades de licitação: apoiam a licitação ou a contratação.",
      },
      {
        termo: "Credenciamento",
        faz: "Chamamento público, sem competição, em que a Administração convoca interessados em prestar serviços ou fornecer bens. Quem cumpre os requisitos é credenciado e executa o objeto quando convocado (art. 6º, XLIII).",
        pista: "A Lei 15.266/2025 acrescentou a hipótese de comércio eletrônico.",
      },
      {
        termo: "Hipóteses do credenciamento (art. 79)",
        faz: "I – contratação paralela e não excludente: é viável e vantajoso contratar vários ao mesmo tempo, em condições padronizadas; II – seleção a critério de terceiros: quem escolhe o contratado é o beneficiário direto do serviço; III – mercados fluidos: o preço e as condições mudam tanto que inviabilizam a licitação; IV – comércio eletrônico: contratar bens e serviços comuns padronizados ofertados no Sistema de Compras Expressas (Sicx).",
        pista: "Exemplos: I – vários laboratórios credenciados fazem exames para o órgão ao mesmo tempo; II – no plano de saúde dos servidores, o próprio servidor escolhe o médico credenciado; III – passagens aéreas e produtos cotados em bolsa, cujo preço muda o tempo todo; IV – mouse e teclado comprados num site centralizado do governo, sem fazer uma licitação inteira.",
      },
      {
        termo: "Regras do credenciamento (art. 79, parágrafo único, I a VI)",
        faz: "I – o edital de chamamento fica permanentemente aberto a novos interessados; II – na contratação paralela, se a demanda for menor que a capacidade dos credenciados, a Administração distribui a demanda por critérios objetivos; III – o edital prevê condições padronizadas e, nas hipóteses I e II, define o valor da contratação; IV – nos mercados fluidos, a Administração registra as cotações de mercado do momento da contratação; V – o contratado não pode passar o objeto a terceiros sem autorização expressa; VI – qualquer das partes pode denunciar o credenciamento nos prazos do edital.",
        pista: "Nos mercados fluidos não há preço fixo no edital, porque o preço é dinâmico. Exemplo do inciso II: a merenda precisa de menos alimentos do que todos os agricultores familiares credenciados produzem; divide-se a compra por critério objetivo, como rodízio. Denúncia aqui é extinção do vínculo (o agricultor desiste de continuar), e não denunciar irregularidade.",
      },
      {
        termo: "Comércio eletrônico no Sicx (art. 79, parágrafo único, VII)",
        faz: "No comércio eletrônico, regulamento do Poder Executivo federal define: a) condições de admissão e permanência dos fornecedores; b) regras para incluir bens e serviços e formar e alterar preços; c) prazos e métodos de entrega e recebimento; d) regras do processo e do uso da plataforma; e) pagamento em prazo não superior a 30 dias do recebimento; f) sanções aos infratores.",
        pista: "O Sicx pode ser usado pelos órgãos e entidades sujeitos à Lei 14.133 e também por empresas públicas, sociedades de economia mista e suas subsidiárias e entidades privadas sem fins lucrativos. Não exclui o pregão nem o registro de preços.",
      },
      {
        parte: "34. Pré-qualificação (art. 80)",
        termo: "Pré-qualificação (art. 80)",
        faz: "Procedimento seletivo prévio à licitação, convocado por edital, para analisar as condições de habilitação, total ou parcial, dos interessados ou do objeto (art. 6º, XLIV). É o procedimento técnico-administrativo para selecionar antes: I – licitantes que reúnam condições de habilitação para futura licitação ou para licitação ligada a programas de obras ou serviços objetivamente definidos; II – bens que atendam às exigências técnicas ou de qualidade da Administração (art. 80).",
        pista: "O § 5º também fala em serviços pré-qualificados. Por isso a doutrina divide: subjetiva (licitantes) e objetiva (bens e serviços). Em questão literal, a banca pode citar só licitantes e bens.",
      },
      {
        termo: "Pré-qualificação × habilitação",
        faz: "Pré-qualificação: procedimento auxiliar; aberta permanentemente; vale para número indeterminado de casos, porque não está presa a uma licitação; analisa licitantes, bens e serviços. Habilitação: fase da licitação; tem momento certo dentro dela; vale só para a licitação de que faz parte; analisa só licitantes.",
        pista: "Pré-qualificação não é fase da licitação. Ela já existia no RDC, o Regime Diferenciado de Contratações (Lei 12.462/2011).",
      },
      {
        termo: "Regras da pré-qualificação (art. 80, §§ 1º a 4º)",
        faz: "Aberta a licitantes, podem ser dispensados os documentos que já estão no registro cadastral; aberta a bens, pode ser exigida prova de qualidade. O procedimento fica permanentemente aberto a novos interessados. O edital traz as informações mínimas do objeto, a modalidade, a forma da futura licitação e os critérios de julgamento. O órgão ou a comissão examina os documentos em até 10 dias úteis e pode mandar corrigir ou reapresentar, para ampliar a competição.",
        pista: "Exemplo de prova de qualidade: ao pré-qualificar canetas, o órgão pode exigir que se demonstre que escrevem bem e duram.",
      },
      {
        termo: "Alcance e validade (art. 80, §§ 5º a 10)",
        faz: "Bens e serviços pré-qualificados entram no catálogo da Administração. A pré-qualificação pode ser feita por grupos ou segmentos de especialidade e pode ser parcial ou total, com alguns ou todos os requisitos, garantida a igualdade entre os concorrentes. Vale por no máximo 1 ano, pode ser atualizada a qualquer tempo e não pode passar da validade dos documentos apresentados. Os pré-qualificados são obrigatoriamente divulgados ao público, e a licitação seguinte pode ser restrita a eles.",
        pista: "Exemplo da validade: o edital exigiu certificado de qualidade, e o certificado de uma empresa vence em 5 meses; a pré-qualificação dela (ou do bem dela) vale só esses 5 meses.",
      },
      {
        parte: "35. Manifestação de interesse (art. 81)",
        termo: "Manifestação de interesse",
        faz: "A Administração chama a iniciativa privada, por edital de chamamento público, para propor e fazer estudos, investigações, levantamentos e projetos de soluções inovadoras sobre questões de relevância pública (art. 81). É o PMI.",
        pista: "Os estudos ligados à contratação ficam à disposição dos interessados, e o vencedor da licitação ressarce os gastos, conforme o edital (§ 1º).",
      },
      {
        termo: "Efeitos do PMI (art. 81, § 2º)",
        faz: "Fazer estudos no PMI: I – não dá preferência na licitação; II – não obriga o poder público a licitar; III – não dá, por si só, direito a ressarcimento; IV – é remunerado só pelo vencedor da licitação, vedado cobrar do poder público.",
      },
      {
        termo: "Aceitação dos estudos (art. 81, § 3º)",
        faz: "Para aceitar o que foi entregue no PMI, a Administração faz parecer fundamentado mostrando que: o produto é adequado e suficiente para entender o objeto; as premissas são compatíveis com as reais necessidades do órgão; e a metodologia é a mais econômica e vantajosa entre as possíveis.",
        pista: "Entregar o estudo não garante que ele será usado.",
      },
      {
        termo: "PMI restrito a startups (art. 81, § 4º)",
        faz: "O PMI pode ser restrito a startups: microempreendedores individuais, microempresas e empresas de pequeno porte, de natureza emergente e grande potencial, dedicadas a pesquisar, desenvolver e implementar produtos ou serviços baseados em soluções tecnológicas inovadoras de alto impacto. Na seleção definitiva, exige-se validação prévia por métricas objetivas.",
        pista: "Exemplo: um órgão lança PMI só para startups, em busca de aplicativos que melhorem o atendimento ao público.",
      },
      {
        parte: "36. Registro de preços: conceito e edital (arts. 82 a 85)",
        termo: "Registro de preços",
        faz: "Os preços obrigam o fornecedor, mas não obrigam a Administração a contratar (art. 83). A ata vale 1 ano, prorrogável por igual período, se o preço continuar vantajoso (art. 84).",
        pista: "A Administração pode fazer licitação específica para o mesmo objeto, se motivar. Com a prorrogação, a ata dura no máximo 2 anos. Não confunda: o contrato que nasce da ata tem a vigência prevista na própria ata, e não a vigência da ata.",
      },
      {
        termo: "Conceito do sistema de registro de preços (art. 6º, XLV e XLVI)",
        faz: "É o conjunto de procedimentos para registrar formalmente preços de serviços, obras e compra ou locação de bens, para contratações futuras, por licitação (pregão ou concorrência) ou por contratação direta. A ata de registro de preços é o documento vinculativo, com compromisso de futura contratação, que traz o objeto, os preços, os fornecedores, os órgãos participantes e as condições.",
        pista: "Para que serve: a merenda precisa de queijo o ano todo. Comprar tudo de uma vez estraga; fazer uma licitação por semana é inviável. Com o registro de preços, faz-se uma única licitação e compra-se aos poucos, conforme a necessidade. Ao final não se assina contrato direto, mas a ata; uma única ata pode gerar vários contratos.",
      },
      {
        termo: "Edital do registro de preços (art. 82)",
        faz: "O edital traz: I – a quantidade máxima de cada item; II – a quantidade mínima a cotar; III – a possibilidade de preços diferentes: a) entrega em locais diferentes; b) forma e local de acondicionamento; c) cotação variável pelo tamanho do lote; d) outros motivos justificados; IV – se o licitante pode cotar quantidade menor que a máxima; V – o critério de julgamento: menor preço ou maior desconto sobre tabela de mercado; VI – as condições para alterar preços; VII – o registro de mais de um fornecedor que aceite o preço do vencedor, na ordem de classificação; VIII – a vedação de o órgão participar de mais de uma ata com o mesmo objeto na validade da primeira, salvo se ela registrou quantidade menor que a máxima; IX – as hipóteses de cancelamento da ata.",
        pista: "Exemplos: na compra de vacinas, quem não consegue entregar o total pode cotar quantidade menor, se o edital permitir, e a licitação pode ter vários vencedores. O registro de outros fornecedores pelo preço do vencedor forma um cadastro de reserva: se o vencedor falhar, chama-se o próximo. Menor preço por grupo de itens só se a adjudicação por item for inviável e houver vantagem técnica e econômica; o edital indica o preço unitário máximo aceitável (§ 1º). Comprar depois um item isolado do grupo exige nova pesquisa de mercado (§ 2º).",
      },
      {
        termo: "Registro sem quantidade total (art. 82, §§ 3º e 4º)",
        faz: "Pode-se registrar preços só por unidade, sem indicar o total a comprar, apenas: I – na primeira licitação do objeto, se o órgão não tiver registro de demandas anteriores; II – no caso de alimento perecível; III – quando o serviço estiver integrado ao fornecimento de bens. Nesses casos, é obrigatório indicar o valor máximo da despesa e é vedada a participação de outro órgão na ata.",
        pista: "Exemplo: um órgão recém-criado não sabe quantas resmas de papel vai usar no ano; informa só quanto pretende gastar, no máximo.",
      },
      {
        termo: "Condições do registro de preços (art. 82, §§ 5º e 6º)",
        faz: "O registro de preços serve para bens e serviços, inclusive obras e serviços de engenharia, com: I – ampla pesquisa de mercado antes; II – seleção conforme regulamento; III – rotina de controle obrigatória; IV – atualização periódica dos preços; V – prazo de validade definido; VI – inclusão na ata de quem aceitar cotar o preço do vencedor e de quem mantiver a proposta original. Também pode ser usado, conforme regulamento, na inexigibilidade e na dispensa, para compras ou serviços de mais de um órgão.",
        pista: "Modalidades: só pregão ou concorrência. Exemplo de inexigibilidade com registro de preços: três órgãos contratam treinamento com profissional de notória especialização.",
      },
      {
        termo: "Obras por registro de preços (art. 85)",
        faz: "A Administração pode contratar obras e serviços de engenharia por registro de preços se houver: I – projeto padronizado, sem complexidade técnica e operacional; II – necessidade permanente ou frequente da obra ou do serviço.",
        pista: "Exemplo: um município faz o tempo todo o recapeamento de vias, serviço frequente e padronizado.",
      },
      {
        parte: "37. Registro de preços: órgãos e adesão (art. 86)",
        termo: "Órgãos do registro de preços (art. 6º, XLVII a XLIX)",
        faz: "Gerenciador: conduz o procedimento e gerencia a ata. Participante: participa dos procedimentos iniciais e integra a ata. Não participante: não participa dos procedimentos iniciais e não integra a ata, mas pode aderir a ela depois (o chamado “carona”).",
        pista: "Exemplo: uma autarquia federal conduz o registro de preços de computadores (gerenciadora); uma fundação federal informa as quantidades de que precisa e entra na ata (participante); outra autarquia, que na época não precisava, adere depois (não participante). O gerenciador faz o edital e a licitação, controla as quantidades e aplica sanções.",
      },
      {
        termo: "Intenção de registro de preços (art. 86)",
        faz: "Na fase preparatória, o gerenciador faz procedimento público de intenção de registro de preços, por no mínimo 8 dias úteis, para outros órgãos participarem da ata e para definir a estimativa total de quantidades. Esse procedimento é dispensável se o gerenciador for o único contratante (§ 1º).",
        pista: "Comparação: você vai de carro fazer um concurso e avisa no grupo de estudos para quem quiser dividir a viagem. Quem responde no prazo vira participante; quem pede carona depois é o não participante.",
      },
      {
        termo: "Requisitos da adesão (art. 86, § 2º)",
        faz: "O não participante pode aderir à ata se houver: I – justificativa da vantagem da adesão, inclusive em caso de provável desabastecimento ou descontinuidade de serviço público; II – demonstração de que os preços registrados são compatíveis com o mercado (art. 23); III – consulta prévia e aceitação do gerenciador e do fornecedor.",
        pista: "O fornecedor precisa aceitar porque só é obrigado a atender as quantidades do gerenciador e dos participantes; ele não é obrigado a atender o carona.",
      },
      {
        termo: "Quem pode aderir a quem (art. 86, §§ 3º e 8º)",
        faz: "I – órgãos federais, estaduais, distritais e municipais podem aderir a atas de gerenciador federal, estadual ou distrital, com ou sem licitação; II – só órgãos municipais podem aderir a ata de outro município, e apenas se o registro de preços foi feito por licitação (Lei 14.770/2023); III – é vedado ao órgão federal aderir a ata de órgão estadual, distrital ou municipal.",
        pista: "Resumo: federal só adere a ata federal; União, estados e DF nunca aderem a ata municipal; município adere a ata da União, do estado e do DF (com ou sem licitação) e a ata de outro município (só se houve licitação). Motivo: as licitações dos entes menores têm, em regra, alcance menor.",
      },
      {
        termo: "Limites da adesão (art. 86, §§ 4º e 5º)",
        faz: "Cada órgão não participante pode comprar até 50% das quantidades de cada item registradas para o gerenciador e os participantes. Somadas todas as adesões, o total não pode passar do dobro da quantidade de cada item registrada, qualquer que seja o número de caronas.",
        pista: "Exemplo: a ata registrou 1.000 unidades. Cada carona leva no máximo 500, e todas as caronas juntas, no máximo 2.000. Outro exemplo: ata de 40 viaturas; um carona que leva 10 usou 25%. Esses limites vieram da jurisprudência do TCU, porque antes uma ata pequena gerava milhares de compras, sem economia de escala.",
      },
      {
        termo: "Exceções ao limite do dobro (art. 86, §§ 6º e 7º)",
        faz: "Não se aplica o limite do dobro: § 6º – na adesão de estados, DF e municípios a ata de gerenciador do Executivo federal, exigida para transferências voluntárias, se destinada à execução descentralizada de programa ou projeto federal, comprovada a compatibilidade com o mercado; § 7º – na compra emergencial de medicamentos e material de consumo médico-hospitalar, por qualquer ente, em ata gerenciada pelo Ministério da Saúde.",
        pista: "Nessas exceções cai só o limite total; o limite de 50% por órgão continua. Exemplo do § 6º: a União firma convênio com um município para inclusão digital nas escolas, com cláusula de comprar computadores e tablets pela ata de um órgão federal.",
      },
      {
        parte: "38. Registro cadastral (arts. 87 e 88)",
        termo: "Registro cadastral unificado (art. 87)",
        faz: "Os órgãos usam o sistema de registro cadastral unificado do PNCP, para o cadastro de licitantes e contratados, regulamentado pelo Poder Executivo federal. Ele é público, amplamente divulgado e permanentemente aberto, com chamamento público pela internet, no mínimo uma vez por ano, para atualizar os registros e receber novos interessados.",
        pista: "Funciona como o cadastro de uma farmácia: os dados do fornecedor já ficam no sistema, o que facilita a habilitação.",
      },
      {
        termo: "Proibições e licitação restrita (art. 87, §§ 2º a 4º)",
        faz: "É proibido exigir registro cadastral complementar para acessar o edital e os anexos. A Administração pode fazer licitação restrita a fornecedores cadastrados, conforme regulamento e com ampla publicidade do cadastramento; nesse caso, é admitido o fornecedor que se cadastrar dentro do prazo de apresentação das propostas.",
        pista: "Mesmo na licitação restrita aos cadastrados, o cadastro não precisa ser anterior: o edital dá prazo para o fornecedor se cadastrar e participar.",
      },
      {
        termo: "Inscrição e certificado (art. 88)",
        faz: "O interessado pede a inscrição ou a atualização a qualquer tempo, com os documentos de habilitação. O inscrito é classificado por categorias e grupos, conforme a qualificação técnica e econômico-financeira, por regras objetivas. Recebe certificado, renovável sempre que atualizar o registro. O registro pode ser alterado, suspenso ou cancelado a qualquer tempo, se o inscrito deixar de cumprir as exigências.",
        pista: "Quem pediu o cadastro pode participar da licitação até a decisão da Administração, mas o contrato só é assinado depois de emitido o certificado (§ 6º).",
      },
      {
        termo: "Avaliação de desempenho (art. 88, §§ 3º e 4º)",
        faz: "O contratante avalia a atuação do contratado e emite documento com o desempenho na execução do contrato, por indicadores objetivos, e com as penalidades aplicadas, que vai para o registro cadastral. Essa anotação depende da regulamentação do cadastro de atesto de cumprimento de obrigações, que permitirá incentivos a quem tiver ótimo desempenho.",
        pista: "Esse desempenho é usado no desempate: avaliação do desempenho contratual anterior (art. 60, II).",
      },
      {
        parte: "39. Compras (art. 40)",
        termo: "Compra (art. 6º, X)",
        faz: "Compra é a aquisição remunerada de bens para fornecimento de uma só vez ou parceladamente.",
        pista: "Exemplos: material de expediente (canetas, cartuchos de tinta), material de limpeza, veículos, frutas e verduras para a merenda escolar.",
      },
      {
        termo: "Planejamento das compras (art. 40)",
        faz: "O planejamento considera a expectativa de consumo anual e observa: I – condições de compra e pagamento semelhantes às do setor privado; II – registro de preços, quando pertinente; III – unidades e quantidades conforme o consumo e a utilização prováveis, estimados, sempre que possível, por técnicas quantitativas adequadas, admitido o fornecimento contínuo; IV – guarda e armazenamento que não deixem o material estragar; V – os princípios da padronização, do parcelamento e da responsabilidade fiscal.",
        pista: "Responsabilidade fiscal: compara-se a despesa estimada com a prevista no orçamento. O registro de preços combina com compras, porque facilita as aquisições futuras.",
      },
      {
        termo: "Termo de referência nas compras (art. 40, §§ 1º e 4º)",
        faz: "Além do conteúdo do art. 6º, XXIII, o termo de referência das compras traz: I – a especificação do produto, de preferência pelo catálogo eletrônico de padronização, com requisitos de qualidade, rendimento, compatibilidade, durabilidade e segurança; II – os locais de entrega e as regras de recebimento provisório e definitivo; III – a garantia exigida e as condições de manutenção e assistência técnica, quando for o caso.",
        pista: "Com base no ETP, pode-se exigir que a manutenção e a assistência técnica sejam feitas com deslocamento do técnico ou em unidade a distância compatível com as necessidades do órgão (§ 4º).",
      },
      {
        parte: "40. Padronização e parcelamento (arts. 40 e 43)",
        termo: "Padronização (art. 40, V, a)",
        faz: "Considera a compatibilidade de especificações estéticas, técnicas ou de desempenho. Evita compras incompatíveis com as necessidades do órgão ou com o que ele já comprou, e elimina variações no uso, na conservação e na manutenção.",
        pista: "Exemplos: a rede de ensino define um padrão de mesas e cadeiras escolares, para os móveis novos combinarem com os antigos; o órgão padroniza pneus próprios para os veículos e as estradas que usa. Como pode limitar marcas ou modelos, a padronização precisa de justificativa, por causa da isonomia e da competição.",
      },
      {
        termo: "Processo de padronização (art. 43)",
        faz: "A padronização é feita em processo administrativo, com: I – parecer técnico sobre o produto (especificações técnicas e estéticas, desempenho, análise de contratações anteriores, custo e condições de manutenção e garantia); II – despacho motivado da autoridade superior, adotando o padrão; III – síntese da justificativa e descrição sucinta do padrão, divulgadas em sítio eletrônico oficial.",
        pista: "Pode-se usar o processo de padronização de outro órgão de nível federativo igual ou superior, em ato motivado (necessidade e riscos) e divulgado em sítio oficial (§ 1º). Um estado pode usar o da União ou o de outro estado; a União não pode usar o de estado ou município. Contratações de software de uso disseminado seguem regulamento próprio (§ 2º).",
      },
      {
        termo: "Parcelamento nas compras (art. 40, V, b, e § 2º)",
        faz: "O parcelamento é adotado quando for tecnicamente viável e economicamente vantajoso. Considera-se: I – a viabilidade de dividir o objeto em lotes; II – o aproveitamento das peculiaridades do mercado local, para economizar, sempre que possível, mantida a qualidade; III – o dever de ampliar a competição e evitar a concentração de mercado.",
        pista: "Exemplo: a União vai comprar 50 mil celulares. Em lote único, só grandes lojas disputam; em 10 lotes de 5 mil, lojas médias e pequenas também entram, e a competição aumenta.",
      },
      {
        termo: "Quando não se parcela (art. 40, § 3º)",
        faz: "O parcelamento não é adotado quando: I – a economia de escala, a redução de custos de gestão de contratos ou a maior vantagem recomendar comprar o item do mesmo fornecedor; II – o objeto for sistema único e integrado e houver risco ao conjunto; III – a padronização ou a escolha de marca levar a fornecedor exclusivo.",
        pista: "O material cita § 2º, mas as exceções estão no § 3º; o § 2º traz o que se considera ao parcelar. Em resumo: a regra é parcelar sempre que possível; não se parcela com justificativa de escala, de natureza do objeto ou de padronização.",
      },
      {
        parte: "41. Marca, amostra e prova de qualidade (arts. 41 e 42)",
        termo: "Marca ou modelo na compra de bens (art. 41, I)",
        faz: "Em regra, a Administração não indica nem restringe marca ou modelo. Excepcionalmente, com justificativa formal, pode indicar uma ou mais marcas ou modelos: a) pela necessidade de padronização; b) para manter a compatibilidade com plataformas e padrões já adotados; c) quando a marca ou o modelo, vendido por mais de um fornecedor, for o único capaz de atender à necessidade; d) quando a marca ou o modelo servir apenas de referência, para descrever melhor o objeto.",
        pista: "Exemplos: a) o órgão padronizou uma marca de impressora por causa da garantia, da manutenção e dos cartuchos; b) um programa indispensável só roda em certo sistema operacional, e os computadores precisam ser dessa plataforma; c) só a webcam de certo fabricante serve, mas várias lojas a vendem, e a licitação é entre as lojas; d) “caneta esferográfica azul, tipo tal marca, ou similar”. Os casos podem se sobrepor. A lei não proíbe indicar marca: é exceção permitida.",
      },
      {
        termo: "Amostra e prova de conceito (art. 41, II, e parágrafo único)",
        faz: "Excepcionalmente, a Administração pode exigir amostra ou prova de conceito do bem, se previsto no edital e justificada a necessidade: a) na pré-qualificação permanente; b) no julgamento das propostas ou dos lances; c) na vigência do contrato ou da ata de registro de preços. No julgamento, a exigência vale só para o licitante provisoriamente vencedor.",
        pista: "Amostra confere as especificações (tamanho, características): por exemplo, amostra de uniforme escolar. Prova de conceito (POC) confere se o produto faz o que promete: por exemplo, demonstrar que o respirador funciona.",
      },
      {
        termo: "Vedação de marca e carta de solidariedade (art. 41, III e IV)",
        faz: "III – a Administração pode vedar marca ou produto quando processo administrativo comprovar que produtos comprados antes não atendem a requisitos indispensáveis ao cumprimento do contrato. IV – pode pedir, motivadamente, carta de solidariedade do fabricante, que garanta a execução do contrato, quando o licitante for revendedor ou distribuidor.",
        pista: "Exemplo do III: as canetas entregues mal escreviam algumas linhas; nas próximas licitações, a marca pode ser vedada. Exemplo do IV: computador comprado de um revendedor, com componentes de certo fabricante; a carta torna revendedor e fabricante responsáveis juntos (solidariamente) pela qualidade.",
      },
      {
        termo: "Prova de qualidade do similar (art. 42)",
        faz: "Se o licitante oferece produto similar à marca indicada no edital, a qualidade é provada por qualquer destes meios: I – conformidade com normas técnicas de órgãos oficiais, da ABNT ou de entidade credenciada pelo Inmetro; II – declaração de atendimento satisfatório de outro órgão, de nível federativo igual ou superior, que tenha comprado o produto; III – certificação, certificado, laudo laboratorial ou documento parecido, de instituição oficial ou credenciada, inclusive sob o aspecto ambiental.",
        pista: "O edital pode exigir, para aceitar a proposta, certificação de qualidade por instituição credenciada pelo Conmetro (§ 1º). Pode também oferecer protótipo e exigir amostras do provisoriamente vencedor, examinadas, se for o caso, por instituição de reconhecida reputação indicada no edital (§§ 2º e 3º).",
      },
      {
        parte: "42. Termo de referência, projeto básico e compra × locação",
        termo: "Termo de referência × projeto básico",
        faz: "Termo de referência (art. 6º, XXIII): documento para contratar bens e serviços; define o objeto (natureza, quantidades, prazo do contrato e eventual prorrogação), os requisitos da contratação, a forma de escolher o fornecedor e os critérios de medição e pagamento. Projeto básico (art. 6º, XXV): elementos necessários e suficientes, com precisão adequada, para definir e dimensionar a obra ou o serviço, feito com base no ETP, que garante a viabilidade técnica, o tratamento do impacto ambiental e a avaliação do custo, dos métodos e do prazo.",
        pista: "Os dois definem o objeto, mas a licitação usa um ou outro: bens, termo de referência; obras, projeto básico; serviços, um ou outro, conforme o caso. Na prática, o termo de referência é comum no pregão, e o projeto básico, na concorrência. Nenhum dos dois é o edital: servem de base para ele.",
      },
      {
        termo: "Comprar ou alugar (art. 44)",
        faz: "Quando for possível comprar ou alugar o bem, o estudo técnico preliminar compara os custos e os benefícios de cada opção e indica a mais vantajosa.",
        pista: "A escolha entre comprar e alugar precisa ser fundamentada no ETP.",
      },
      {
        parte: "43. Obras e serviços de engenharia (art. 45)",
        termo: "Normas das obras e dos serviços de engenharia (art. 45)",
        faz: "As licitações de obras e serviços de engenharia respeitam, especialmente, as normas sobre: I – destinação final ambientalmente adequada dos resíduos sólidos; II – mitigação por condicionantes e compensação ambiental, definidas no licenciamento ambiental; III – uso de produtos, equipamentos e serviços que comprovadamente reduzam o consumo de energia e de recursos naturais; IV – avaliação de impacto de vizinhança, conforme a legislação urbanística; V – proteção do patrimônio histórico, cultural, arqueológico e imaterial, inclusive avaliando o impacto direto ou indireto das obras; VI – acessibilidade para pessoas com deficiência ou mobilidade reduzida.",
        pista: "Cumprir as condições ambientais, urbanísticas, históricas e de acessibilidade é obrigação da Administração nas obras. Mitigação, pela Lei 12.187/2009 (Política Nacional sobre Mudança do Clima): mudanças e substituições tecnológicas que reduzam o uso de recursos e as emissões por unidade de produção, e medidas que reduzam as emissões de gases de efeito estufa e aumentem os sumidouros.",
      },
      {
        termo: "Execução direta × indireta",
        faz: "Execução direta: os próprios agentes públicos fazem o serviço. Execução indireta: a Administração contrata terceiros. Os regimes do art. 46 são da execução indireta de obras e serviços de engenharia.",
        pista: "Exemplos: militares de um quartel reformam o próprio depósito de material (direta); a Administração contrata uma construtora para erguer uma escola (indireta). A indireta é a mais comum.",
      },
      {
        termo: "Etapas em sequência (art. 46, § 6º)",
        faz: "Cada etapa só começa depois da conclusão e da aprovação, pela autoridade competente, dos trabalhos das etapas anteriores.",
      },
      {
        parte: "44. Regimes de execução (art. 46)",
        termo: "Os sete regimes (art. 46, I a VII)",
        faz: "Na execução indireta de obras e serviços de engenharia, são admitidos: I – empreitada por preço unitário; II – empreitada por preço global; III – empreitada integral; IV – contratação por tarefa; V – contratação integrada; VI – contratação semi-integrada; VII – fornecimento e prestação de serviço associado.",
        pista: "Os quatro primeiros já existiam na Lei 8.666/1993. Os três últimos são os “novos”.",
      },
      {
        termo: "Preço unitário, preço global e tarefa (art. 6º, XXVIII, XXIX e XXXI)",
        faz: "Empreitada por preço unitário: obra ou serviço por preço certo de unidades determinadas. Empreitada por preço global: por preço certo e total. Contratação por tarefa: mão de obra para pequenos trabalhos, por preço certo, com ou sem fornecimento de materiais.",
        pista: "Exemplo: para fazer um muro, você “fecha o preço total” com o pedreiro (global) ou paga por hora e pela quantidade de material usada (unitário). Contratar um pedreiro para um pequeno muro é tarefa.",
      },
      {
        termo: "Empreitada integral (art. 6º, XXX)",
        faz: "Contrata-se o empreendimento por inteiro: todas as etapas de obras, serviços e instalações necessárias, sob inteira responsabilidade do contratado, até a entrega em condições de entrar em operação.",
        pista: "Exemplo: se o município paga o preço total só do prédio que vai abrigar um hospital, é preço global. Se o contratado constrói, instala e testa os equipamentos e entrega o hospital pronto para funcionar, é empreitada integral.",
      },
      {
        termo: "Contratação integrada (art. 6º, XXXII)",
        faz: "O contratado elabora e desenvolve os projetos básico e executivo, executa as obras e os serviços de engenharia, fornece bens ou presta serviços especiais e faz montagem, teste, pré-operação e tudo o que for preciso para a entrega final do objeto.",
        pista: "É um “plus” em relação à empreitada integral, porque inclui o projeto básico. A licitação é feita a partir do anteprojeto.",
      },
      {
        termo: "Contratação semi-integrada (art. 6º, XXXIII)",
        faz: "O contratado elabora e desenvolve o projeto executivo, executa as obras e os serviços de engenharia, fornece bens ou presta serviços especiais e faz montagem, teste, pré-operação e tudo o que for preciso para a entrega final.",
        pista: "Diferença: na integrada, o contratado faz também o projeto básico; na semi-integrada, não. Os dois regimes evitam vários contratos separados num objeto complexo. Exemplo: escola moderna com tecnologia de ensino e campo esportivo; com um contrato para cada parte, ninguém saberia quem responde quando algo falhar.",
      },
      {
        termo: "Fornecimento e prestação de serviço associado (art. 6º, XXXIV)",
        faz: "Além de fornecer o objeto, o contratado se responsabiliza por operá-lo, mantê-lo ou ambos, por tempo determinado.",
        pista: "Exemplo: compra de um equipamento de exames médicos com o serviço de operação e manutenção. Embora esteja no capítulo de obras, serve também para outros objetos. O prazo do contrato soma duas etapas: o fornecimento (ou a obra) e o serviço (art. 113).",
      },
      {
        termo: "Licitação por preço global (art. 46, § 9º)",
        faz: "Os regimes de preço global, empreitada integral, tarefa, contratação integrada e semi-integrada são licitados por preço global, com medição e pagamento por etapas do cronograma físico-financeiro ligadas a metas de resultado, vedada a remuneração por preços unitários ou por quantidades de itens.",
        pista: "A empreitada por preço unitário é licitada por preço unitário, pela própria natureza. No fornecimento com serviço associado, a lei não define a forma.",
      },
      {
        parte: "45. Anteprojeto, projeto básico e projeto executivo",
        termo: "Projeto executivo (art. 6º, XXVI, e art. 46, § 1º)",
        faz: "Conjunto de elementos necessários e suficientes à execução completa da obra, com o detalhamento das soluções do projeto básico e a identificação dos serviços, materiais e equipamentos, com suas especificações técnicas. É vedado fazer obras e serviços de engenharia sem projeto executivo, salvo na hipótese do art. 18, § 3º.",
        pista: "Simplificando: o projeto básico diz “o que é” a obra; o executivo diz “como” será executada. Exceção: em obras e serviços comuns de engenharia, se o ETP mostrar que não há prejuízo à qualidade, basta o termo de referência ou o projeto básico.",
      },
      {
        termo: "Projeto executivo e licitação",
        faz: "A obrigatoriedade do projeto executivo é para a execução da obra, não para a licitação. Na contratação integrada e na semi-integrada, o projeto executivo é feito pelo vencedor, depois da licitação.",
        pista: "Para a execução: em regra obrigatório, salvo quando o ETP mostrar que é desnecessário. Para a licitação: não há regra exata, e nos regimes integrado e semi-integrado ele vem depois.",
      },
      {
        termo: "Anteprojeto (art. 6º, XXIV, e art. 46, § 2º)",
        faz: "Na contratação integrada, a Administração fica dispensada do projeto básico e elabora anteprojeto, conforme metodologia definida em ato do órgão competente. O anteprojeto é peça técnica mais simples, com os subsídios para fazer o projeto básico (necessidade, prazo de entrega, estética etc.).",
        pista: "Anteprojeto: obrigatório na integrada. Projeto básico: em regra, antes da licitação, salvo na integrada, em que o contratado o elabora. Projeto executivo: define como executar.",
      },
      {
        termo: "Projeto na integrada e na semi-integrada (art. 46, §§ 3º e 5º)",
        faz: "Integrada: o projeto básico feito pelo contratado vai à aprovação da Administração, que pode pedir ajustes sem reduzir a qualidade, e o contratado mantém a responsabilidade integral pelos riscos do projeto básico. Semi-integrada: com autorização prévia, o contratado pode alterar o projeto básico, se demonstrar a superioridade da inovação (custo menor, qualidade maior, prazo menor, manutenção ou operação mais fácil), e assume os riscos da alteração.",
        pista: "Na integrada o contratado responde pelo projeto básico que fez; na semi-integrada responde pela alteração que propôs.",
      },
      {
        termo: "Desapropriação na integrada e na semi-integrada (art. 46, § 4º)",
        faz: "O edital e o contrato preveem, quando for o caso, as providências para a desapropriação autorizada pelo poder público: o responsável por cada fase, quem paga as indenizações, a estimativa do valor, a divisão objetiva de riscos e em nome de quem se registram a imissão na posse e a propriedade.",
        pista: "A Administração autoriza a desapropriação; a execução pode ficar com o contratado (pagar indenizações, transferir a propriedade).",
      },
      {
        parte: "46. Serviços em geral (arts. 47 e 49)",
        termo: "Princípios dos serviços (art. 47)",
        faz: "As licitações de serviços atendem: I – à padronização, considerada a compatibilidade de especificações estéticas, técnicas ou de desempenho; II – ao parcelamento, quando tecnicamente viável e economicamente vantajoso. No parcelamento, consideram-se: a responsabilidade técnica; o custo de vários contratos frente à economia da divisão em itens; e o dever de ampliar a competição e evitar a concentração de mercado (§ 1º).",
        pista: "O parcelamento não é obrigatório. Exemplo: uma empresa de manutenção consegue atender algumas escolas da rede, mas não todas; com o parcelamento, a Administração faz vários contratos, cada empresa com um grupo de escolas.",
      },
      {
        termo: "Manutenção e assistência técnica (art. 47, § 2º)",
        faz: "Na licitação de serviços de manutenção e assistência técnica, o edital define o local do serviço, podendo exigir o deslocamento do técnico até a repartição ou que o contratado tenha unidade a distância compatível com as necessidades da Administração.",
        pista: "Exemplo: uma oficina de um estado distante vence a manutenção dos veículos de um órgão do outro lado do país; não faz sentido mandar os carros para tão longe.",
      },
      {
        termo: "Mais de um contratado para o mesmo serviço (art. 49)",
        faz: "Com justificativa expressa, a Administração pode contratar mais de uma empresa ou instituição para o mesmo serviço, sem perder economia de escala, quando: I – o objeto puder ser executado de forma concorrente e simultânea por mais de um contratado; II – a execução múltipla for conveniente. Deve manter controle individualizado da execução de cada contratado.",
        pista: "Exemplo: duas ou três empresas fazem exames clínicos e raio X ao mesmo tempo, e a Administração encaminha cada usuário para uma delas.",
      },
      {
        parte: "47. Terceirização e dedicação exclusiva (arts. 48 e 50)",
        termo: "O que pode ser terceirizado (art. 48)",
        faz: "Podem ser executadas por terceiros as atividades materiais acessórias, instrumentais ou complementares aos assuntos de competência legal do órgão ou da entidade.",
        pista: "Exemplo: a Polícia Federal emite passaportes, mas pode contratar o apoio (impressão, fotografia, coleta de digitais).",
      },
      {
        termo: "Vedações na terceirização (art. 48, I a VI)",
        faz: "Na contratação de serviço terceirizado, é vedado à Administração e a seus agentes: I – indicar pessoas nominalmente para executar o objeto; II – fixar salário abaixo do definido em lei ou ato normativo; III – criar subordinação com funcionário da terceirizada; IV – pagar só por reembolso dos salários; V – mandar o funcionário fazer tarefas fora do objeto do contrato; VI – pôr no edital exigências que sejam intervenção indevida na gestão interna do contratado.",
        pista: "A terceirização não substitui servidor: contrata-se o serviço, e não a pessoa. Precisando de um profissional específico, faz-se contrato próprio, como nos serviços técnicos especializados de natureza intelectual. Também é vedado ao contratado empregar parentes de dirigentes e agentes da licitação ou do contrato (nepotismo indireto, art. 48, parágrafo único).",
      },
      {
        termo: "Dedicação exclusiva de mão de obra (art. 50)",
        faz: "Nos serviços com dedicação exclusiva de mão de obra, o contratado apresenta, quando solicitado e sob pena de multa, prova do cumprimento das obrigações trabalhistas e do FGTS dos empregados do contrato, como: I – registro de ponto; II – recibos de salários, adicionais, horas extras, repouso semanal e 13º; III – comprovante de depósito do FGTS; IV – recibo de férias e do adicional; V – quitação trabalhista e previdenciária dos dispensados até o fim do contrato; VI – recibos de vale-transporte e vale-alimentação, conforme norma coletiva.",
        pista: "Motivo: nesses contratos, a Administração responde solidariamente pelos encargos previdenciários e subsidiariamente pelos trabalhistas, se comprovada falha na fiscalização (art. 121, § 2º). Pode, sim, exigir comprovantes do FGTS.",
      },
      {
        parte: "48. Locação de imóveis e licitação internacional (arts. 51 e 52)",
        termo: "Locação de imóveis (art. 51)",
        faz: "Em regra, a locação de imóveis exige licitação e avaliação prévia do bem, do seu estado de conservação, dos custos de adaptações e do prazo de amortização dos investimentos necessários.",
        pista: "A lei não definiu a modalidade. Exceção: inexigibilidade para alugar ou comprar imóvel cujas instalações e localização tornem necessária sua escolha (art. 74, V).",
      },
      {
        termo: "Licitação internacional (art. 6º, XXXV, e art. 52)",
        faz: "É a licitação feita no território nacional com participação admitida de estrangeiros, ou aquela cujo objeto pode ou deve ser executado, no todo ou em parte, no exterior. O edital se ajusta às diretrizes da política monetária e do comércio exterior e às exigências dos órgãos competentes.",
      },
      {
        termo: "Regras da licitação internacional (art. 52, §§ 1º a 6º)",
        faz: "§ 1º – se o estrangeiro pode cotar em moeda estrangeira, o brasileiro também pode; § 2º – o brasileiro contratado nessas condições recebe em moeda nacional; § 3º – as garantias de pagamento ao brasileiro equivalem às do estrangeiro; § 4º – os tributos sobre os preços constam do edital, por estimativas ou médias; § 5º – as propostas de todos seguem as mesmas regras do edital; § 6º – o edital não pode criar barreiras de habilitação, classificação e julgamento ao estrangeiro, admitida a margem de preferência para bens produzidos no País e serviços nacionais (art. 26).",
        pista: "O brasileiro pode cotar em moeda estrangeira, mas recebe em reais, e não em dólar. Cotar em moeda estrangeira não é proibido ao brasileiro: isso é isonomia.",
      },
    ],
    cuidado:
      "Não confunda as três formas sem disputa: na dispensa (art. 75) a competição é possível, mas a lei permite não licitar; na inexigibilidade (art. 74) a competição é inviável; na licitação dispensada (art. 76) a própria lei manda não licitar nas alienações listadas. Outras pegadinhas: a habilitação vem depois do julgamento, salvo inversão motivada; revogação é por fato superveniente e anulação é por ilegalidade, ambas com manifestação prévia dos interessados; pré-qualificação não é fase da licitação; o registro de preços obriga o fornecedor, e não a Administração; o órgão federal não adere a ata de estado, DF ou município.",
  },
  questoes: [
    {
      topico: "Contratação direta",
      subassunto: "Fornecedor exclusivo",
      dificuldade: 4,
      raciocinio: "Um só fornecedor, competição inviável.",
      enunciado:
        "Só uma empresa fornece, com exclusividade comprovada por documento idôneo, o equipamento que a PRF precisa comprar. A contratação direta ocorre por",
      alternativas: [
        "dispensa, pois o objeto é de valor elevado",
        "dispensa, pois a lei libera a compra de bens únicos",
        "inexigibilidade, desde que o edital cite a marca desejada",
        "dispensa, por ser medida de segurança nacional",
        "inexigibilidade, pois a competição é inviável",
      ],
      correta: 4,
      explicacao: "O art. 74, I, trata do fornecedor exclusivo. O § 1º exige prova da exclusividade e veda a preferência por marca específica.",
      explicacaoErradas:
        "As opções com “dispensa” partem de disputa possível, o que não é o caso. “cite a marca desejada” é justamente o que a lei veda.",
      pegadinha: "Trocar dispensa por inexigibilidade.",
      conhecimento: "A prova pode ser atestado ou contrato de exclusividade, declaração do fabricante ou outro documento idôneo.",
    },
    {
      topico: "Contratação direta",
      subassunto: "Natureza dos róis",
      dificuldade: 5,
      raciocinio: "“Em especial” indica exemplos.",
      enunciado:
        "Surge caso real de competição inviável que não aparece em nenhum inciso do art. 74 da Lei 14.133. Quanto à contratação direta,",
      alternativas: [
        "cabe inexigibilidade, pois o rol do art. 74 é exemplificativo",
        "não cabe contratação direta, pois o rol do art. 74 é taxativo",
        "cabe dispensa, pois o art. 75 aceita hipóteses análogas",
        "depende de lei específica para o caso, editada pelo ente",
        "cabe inexigibilidade só com aval do Tribunal de Contas",
      ],
      correta: 0,
      explicacao: "O art. 74 diz “em especial”, o que torna seu rol exemplificativo. Já o rol de dispensa do art. 75 é taxativo.",
      explicacaoErradas:
        "“rol do art. 74 é taxativo” inverte a regra. “hipóteses análogas” contraria o caráter taxativo do art. 75. “lei específica” e “aval do Tribunal” não são exigências.",
      pegadinha: "Inverter os róis de dispensa e inexigibilidade.",
      conhecimento: "A inviabilidade precisa ser demonstrada no processo (art. 72).",
    },
    {
      topico: "Contratação direta",
      subassunto: "Notória especialização",
      dificuldade: 5,
      raciocinio: "A lei tira a publicidade da inexigibilidade.",
      enunciado:
        "Para uma campanha de educação no trânsito, o órgão quer contratar sem licitação uma agência de publicidade de notória especialização. Pela Lei 14.133, a inexigibilidade",
      alternativas: [
        "é possível, pois a campanha é serviço técnico especializado",
        "é vedada para serviços de publicidade e divulgação",
        "é possível, se a agência provar sua notória especialização",
        "é possível, pois campanha educativa é de interesse público",
        "é vedada, pois serviço intelectual exige o pregão",
      ],
      correta: 1,
      explicacao: "O art. 74, III, permite inexigibilidade para serviços técnicos especializados, mas veda expressamente a de serviços de publicidade e divulgação.",
      explicacaoErradas:
        "“serviço técnico especializado” e “notória especialização” não superam a vedação expressa. “interesse público” também não. “exige o pregão” erra, pois o pregão não se aplica a serviço intelectual.",
      pegadinha: "Achar que a notória especialização resolve tudo.",
      conhecimento: "A contratação de publicidade por agências tem lei própria, a Lei 12.232/2010.",
    },
    {
      topico: "Contratação direta",
      subassunto: "Licitação deserta",
      dificuldade: 5,
      raciocinio: "Só vale se tudo do edital for mantido.",
      enunciado:
        "Dez meses após uma licitação sem interessados, o órgão quer contratar direto o mesmo objeto, mas com exigências de habilitação mais leves que as do edital. Pela Lei 14.133,",
      alternativas: [
        "cabe dispensa, pois a licitação anterior foi deserta",
        "cabe dispensa, pois o prazo de um ano foi respeitado",
        "cabe inexigibilidade, pois ninguém se interessou",
        "não cabe dispensa, pois as condições do edital se mantêm",
        "não cabe dispensa, pois a lei só aceita prazo de até seis meses",
      ],
      correta: 3,
      explicacao: "O art. 75, III, exige contratação que mantenha todas as condições do edital, realizado há menos de 1 ano.",
      explicacaoErradas:
        "“foi deserta” e “prazo de um ano” olham só parte do requisito. “ninguém se interessou” não torna a competição inviável. “até seis meses” erra o prazo.",
      pegadinha: "Olhar o prazo e esquecer a manutenção das condições.",
      conhecimento: "A regra vale também quando as propostas vieram com preços acima do mercado.",
    },
    {
      topico: "Contratação direta",
      subassunto: "Responsabilidade",
      dificuldade: 4,
      raciocinio: "Dolo, fraude ou erro grosseiro: os dois respondem juntos.",
      enunciado:
        "Uma contratação direta sem base legal foi feita com erro grosseiro do agente público e causou dano ao erário. Pelo art. 73 da Lei 14.133,",
      alternativas: [
        "agente e contratado respondem de forma solidária pelo dano",
        "só o agente responde, pois o contratado agiu de boa-fé presumida",
        "só o contratado responde, pois recebeu o valor indevido",
        "agente e contratado respondem só em caso de dolo comprovado",
        "a responsabilidade é sempre da autoridade que autorizou",
      ],
      correta: 0,
      explicacao: "O art. 73 prevê responsabilidade solidária do contratado e do agente na contratação direta indevida com dolo, fraude ou erro grosseiro.",
      explicacaoErradas:
        "“só o agente” e “só o contratado” afastam a solidariedade. “só em caso de dolo” esquece fraude e erro grosseiro. “sempre da autoridade” não está na lei.",
      pegadinha: "Exigir dolo em todo caso.",
      conhecimento: "Essa responsabilidade não exclui outras sanções legais.",
    },
    {
      topico: "Alienações",
      subassunto: "Imóveis",
      dificuldade: 5,
      raciocinio: "A origem do imóvel pode dispensar a autorização legislativa.",
      enunciado:
        "Uma autarquia federal recebeu um imóvel em dação em pagamento e quer vendê-lo. Pela Lei 14.133, a venda exige",
      alternativas: [
        "autorização legislativa, avaliação prévia e leilão",
        "apenas avaliação prévia e licitação na modalidade leilão",
        "autorização legislativa e concorrência, sem avaliação",
        "apenas decreto do chefe do Poder Executivo",
        "licitação dispensada, pela origem do bem, e venda direta",
      ],
      correta: 1,
      explicacao: "A regra para imóveis inclui autorização legislativa, mas o art. 76, § 1º, a dispensa no bem vindo de processo judicial ou dação em pagamento.",
      explicacaoErradas:
        "“autorização legislativa, avaliação prévia e leilão” é a regra geral, afastada aqui. “concorrência” não é a modalidade da alienação. “decreto” não basta. “venda direta” contraria o leilão exigido.",
      pegadinha: "Aplicar a regra geral sem olhar a origem do imóvel.",
      conhecimento: "Bens móveis não precisam de autorização legislativa.",
    },
    {
      topico: "Fases",
      subassunto: "Inversão",
      dificuldade: 4,
      raciocinio: "Regra: julgamento antes da habilitação. A inversão é exceção.",
      enunciado:
        "O edital de uma concorrência prevê que a habilitação ocorrerá antes da apresentação das propostas e do julgamento. Pela Lei 14.133, isso",
      alternativas: [
        "é a regra geral, sem necessidade de justificativa",
        "é vedado, pois a ordem das fases é sempre fixa",
        "é possível, com ato motivado e previsão no edital",
        "só vale para licitações realizadas de forma presencial",
        "depende de autorização do órgão de controle interno",
      ],
      correta: 2,
      explicacao: "A sequência do art. 17 põe o julgamento antes da habilitação. O § 1º permite antecipar a habilitação com ato motivado e previsão no edital.",
      explicacaoErradas:
        "“regra geral” inverte a lei. “sempre fixa” esquece o § 1º. “forma presencial” e “controle interno” não são condições previstas.",
      pegadinha: "Levar a ordem antiga da Lei 8.666 para a lei nova.",
      conhecimento: "A antecipação exige explicar os benefícios no ato motivado.",
    },
    {
      topico: "Fases",
      subassunto: "Forma",
      dificuldade: 4,
      raciocinio: "Presencial é exceção motivada e fica gravada.",
      enunciado:
        "Uma licitação será presencial, e não eletrônica. Pela Lei 14.133, essa escolha",
      alternativas: [
        "é proibida em todos os casos, sem exceção",
        "é livre, pois a lei só dá preferência à forma eletrônica",
        "exige só a presença de duas testemunhas na sessão",
        "torna opcional a ata, se houver vídeo da sessão",
        "deve ser motivada, com ata e gravação em áudio e vídeo",
      ],
      correta: 4,
      explicacao: "O art. 17, § 2º, prefere a forma eletrônica e admite a presencial com motivação, registro em ata e gravação em áudio e vídeo.",
      explicacaoErradas:
        "“proibida” exagera, pois a lei diz “preferencialmente”. “livre” dispensa a motivação exigida. “duas testemunhas” não consta da lei. “opcional a ata” contraria o registro exigido.",
      pegadinha: "Pensar que a forma eletrônica é obrigatória em tudo.",
      conhecimento: "A gravação deve ser juntada aos autos após a sessão.",
    },
    {
      topico: "Procedimentos auxiliares",
      subassunto: "Credenciamento",
      dificuldade: 5,
      raciocinio: "Quem escolhe o prestador é o próprio beneficiário.",
      enunciado:
        "Um órgão chama todos os laboratórios que aceitem suas condições, e cada servidor escolhe em qual fará os exames periódicos. Esse credenciamento é da hipótese",
      alternativas: [
        "de mercados fluidos, com preço em flutuação constante",
        "de seleção a critério de terceiros, os beneficiários",
        "de contratação excludente, com um só laboratório vencedor",
        "de pré-qualificação de bens, com prova de qualidade",
        "de dispensa, pois o valor de cada exame é pequeno",
      ],
      correta: 1,
      explicacao: "O art. 79, II, trata da seleção a critério de terceiros, em que a escolha do contratado cabe ao beneficiário direto da prestação.",
      explicacaoErradas:
        "“mercados fluidos” pede preço que muda sem parar. “excludente” é o oposto do credenciamento. “pré-qualificação” é outro procedimento. “dispensa” não descreve o caso, que é de inexigibilidade (art. 74, IV).",
      pegadinha: "Ler o credenciamento como dispensa.",
      conhecimento: "As outras hipóteses são a contratação paralela e não excludente, os mercados fluidos e o comércio eletrônico.",
    },
    {
      topico: "Procedimentos auxiliares",
      subassunto: "Registro de preços e estudos",
      dificuldade: 5,
      raciocinio: "Quem assina a ata se obriga. A Administração, não.",
      enunciado:
        "Há ata de registro de preços vigente para pneus, mas o órgão quer abrir licitação própria, de forma motivada, para a mesma compra. Pela Lei 14.133,",
      alternativas: [
        "é vedado, pois a ata obriga a Administração a contratar",
        "é vedado até o fim da ata, salvo se o preço subir",
        "é possível, pois o fornecedor da ata pode desistir sem motivo",
        "é possível, pois os preços registrados não obrigam a contratar",
        "é possível, desde que o órgão indenize o fornecedor da ata",
      ],
      correta: 3,
      explicacao: "O art. 83 diz que os preços registrados comprometem o fornecedor, mas não obrigam a Administração, que pode fazer licitação específica motivada.",
      explicacaoErradas:
        "“obriga a Administração” e “até o fim da ata” contrariam o art. 83. “pode desistir sem motivo” erra, pois o fornecedor fica comprometido. “indenize” não está previsto.",
      pegadinha: "Achar que a ata obriga os dois lados.",
      conhecimento: "A ata vigora por 1 ano, prorrogável por igual período se o preço for vantajoso (art. 84).",
    },
  ],
};
