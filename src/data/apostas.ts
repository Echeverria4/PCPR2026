import type { SubjectId } from "../lib/types";

export interface ApostaTema {
  tema: string;
  motivo: string;
  contexto: string;
}

/**
 * Temas que não aparecem como tópico próprio no Anexo I do edital, mas que
 * têm boa chance de cair — por padrão histórico da banca FGV, por serem
 * desdobramento natural de um tópico oficial, ou por atualização legislativa
 * recente. São apostas de estudo, não garantia de prova: não substituem os
 * tópicos oficiais (ver SUBJECTS em data/subjects.ts), servem para reforçar.
 */
export const APOSTAS_POR_MATERIA: Record<SubjectId, ApostaTema[]> = {
  pt: [
    {
      tema: "Figuras de linguagem (metáfora, metonímia, ironia, eufemismo, hipérbole)",
      motivo: "A FGV gosta de cobrar reconhecimento de figuras dentro do próprio texto motivador, junto com interpretação.",
      contexto:
        "Figuras de linguagem são desvios propositais do sentido literal das palavras, usados para dar expressividade a um texto. Metáfora é uma comparação implícita entre dois elementos que compartilham alguma característica, sem conectivo comparativo ('o delegado é uma raposa'). Metonímia substitui um termo por outro com quem mantém relação de proximidade lógica — o todo pela parte, a causa pelo efeito, o autor pela obra ('ler Machado de Assis'). Ironia diz o oposto do que se quer comunicar, geralmente com intenção crítica, identificável pelo contexto. Eufemismo suaviza uma informação desagradável ('faleceu' em vez de 'morreu'). Hipérbole é o exagero proposital para intensificar um efeito ('chorei rios de lágrimas'). Bancas costumam pedir para identificar qual figura está em jogo dentro de um trecho do próprio texto motivador.",
    },
    {
      tema: "Funções da linguagem (referencial, emotiva, conativa, poética, fática, metalinguística)",
      motivo: "Tema clássico de banca, fácil de transformar em questão de texto publicitário ou trecho literário curto.",
      contexto:
        "As seis funções da linguagem, descritas por Roman Jakobson, indicam qual elemento do processo de comunicação está em destaque em um texto. Referencial prioriza o contexto/assunto, com linguagem objetiva, típica de notícias. Emotiva centra-se no emissor, exprimindo sentimentos em primeira pessoa. Conativa (ou apelativa) volta-se para o receptor, buscando persuadi-lo — verbos no imperativo, típica de propagandas. Poética explora a forma da mensagem em si, comum em textos literários e slogans elaborados. Fática testa ou mantém o canal de comunicação aberto ('alô', 'está me ouvindo?'). Metalinguística usa a linguagem para explicar a própria linguagem, como um dicionário definindo uma palavra. Bancas costumam apresentar um texto publicitário ou trecho literário curto e pedir a função predominante.",
    },
    {
      tema: "Vícios de linguagem (ambiguidade involuntária, cacofonia, pleonasmo vicioso, solecismo)",
      motivo: "Costuma aparecer combinado com reescrita de frase — pede para identificar o erro e a versão corrigida.",
      contexto:
        "Vícios de linguagem são desvios não intencionais que prejudicam a clareza ou a correção de uma frase, ao contrário das figuras de linguagem, que são recursos expressivos propositais. Ambiguidade involuntária ocorre quando a frase permite mais de uma leitura por erro de construção, não por efeito estético buscado. Cacofonia é o som desagradável ou de duplo sentido formado pela junção de duas palavras ('por cada' soando de forma indesejada). Pleonasmo vicioso é a repetição desnecessária de uma ideia já implícita ('subir para cima', 'elo de ligação'), diferente do pleonasmo estilístico, usado propositalmente em textos literários. Solecismo é o erro de sintaxe — geralmente de concordância, regência ou colocação pronominal — que fere a norma culta. Provas costumam pedir para identificar o vício presente em uma frase e escolher a versão reescrita corretamente.",
    },
    {
      tema: "Colocação pronominal (próclise, mesóclise, ênclise)",
      motivo: "Ponto gramatical que a FGV cobra de forma direta em questão de português formal/oficial.",
      contexto:
        "Colocação pronominal trata da posição dos pronomes oblíquos átonos (me, te, se, o, a, lhe, nos, vos) em relação ao verbo. Próclise (pronome antes do verbo) é exigida após palavras atrativas: advérbios, pronomes relativos, indefinidos e demonstrativos, conjunções subordinativas e orações negativas ('não me diga'). Ênclise (pronome depois do verbo, ligado por hífen) é a posição padrão em início de frase e após verbo em orações afirmativas sem palavra atrativa ('Entregou-lhe o documento'). Mesóclise (pronome no meio do verbo) só ocorre com verbos no futuro do presente ou do pretérito, e apenas sem palavra atrativa antes do verbo ('entregar-lhe-ei'), sendo típica da linguagem formal de textos oficiais. A norma culta rejeita iniciar frase com pronome oblíquo átono em ênclise.",
    },
    {
      tema: "Redação oficial e correspondência administrativa (padrão culto, impessoalidade, concisão)",
      motivo: "Coerente com o perfil de cargo policial que produz relatórios e ofícios — pode aparecer cruzado com interpretação.",
      contexto:
        "Redação oficial é a modalidade de escrita usada pela administração pública, regida por princípios que a distinguem de outros gêneros textuais. Impessoalidade significa ausência de opiniões pessoais e de marcas de primeira pessoa do singular — o texto fala em nome da instituição, geralmente na terceira pessoa ou na primeira do plural. Padrão culto exige respeito às normas gramaticais, com vocabulário técnico e formal, sem gírias. Clareza e concisão pedem frases diretas, sem rodeios, transmitindo a informação com o menor número de palavras que preserve o sentido completo. Uniformidade determina que documentos do mesmo tipo sigam sempre a mesma estrutura. Os principais expedientes são o ofício (comunicação externa entre órgãos), o memorando (comunicação interna) e o relatório (exposição descritiva de fatos apurados) — este último especialmente relevante para o cargo policial, que redige boletins de ocorrência com precisão técnica e impessoalidade.",
    },
  ],
  ti: [
    {
      tema: "Golpes digitais recentes (phishing, engenharia social, golpe do Pix, deepfake em fraude)",
      motivo: "Tema de atualidade forte, alinhado com \"crimes digitais\" do edital e recorrente em provas policiais 2024-2026.",
      contexto:
        "Phishing é o golpe em que o criminoso se passa por uma instituição confiável (banco, órgão público) para induzir a vítima a fornecer dados sigilosos ou clicar em links maliciosos, geralmente por e-mail, SMS (smishing) ou mensagens de voz (vishing). Engenharia social é a técnica-mãe por trás desses golpes: manipulação psicológica da vítima, explorando urgência, medo ou confiança, para obter informações ou ações que ela não daria em condições normais. O golpe do Pix costuma envolver clonagem de WhatsApp, contas falsas de familiares/amigos pedindo transferência urgente, ou QR codes fraudulentos. Deepfakes são vídeos ou áudios manipulados por inteligência artificial que simulam a voz/imagem de uma pessoa real, cada vez mais usados para golpes de falso sequestro ou fraudes financeiras, e é tema quente por seu impacto também como prova em investigação.",
    },
    {
      tema: "Inteligência artificial aplicada à investigação e riscos (viés algorítmico, deepfake como prova)",
      motivo: "Assunto em alta nas bancas desde 2024; conecta tecnologia com investigação, tema central do cargo.",
      contexto:
        "A inteligência artificial vem sendo incorporada à investigação policial em tarefas como reconhecimento facial, análise preditiva de padrões criminais e triagem de grandes volumes de dados (big data forense). O uso levanta dois riscos centrais cobrados em prova: viés algorítmico, quando o sistema reproduz ou amplifica preconceitos presentes nos dados usados para treiná-lo, podendo gerar falsos positivos desproporcionais contra determinados grupos; e a fragilidade da prova digital gerada ou manipulada por IA, como deepfakes, que exige perícia técnica especializada para atestar autenticidade antes de ser aceita judicialmente. A discussão sobre limites éticos e legais do uso de IA em segurança pública (transparência, explicabilidade do algoritmo, supervisão humana) é pauta recorrente em concursos policiais recentes.",
    },
    {
      tema: "Computação em nuvem (IaaS, PaaS, SaaS) e armazenamento de evidências digitais",
      motivo: "Desdobramento natural de \"fundamentos de hardware e software\" que a FGV explora em nível conceitual.",
      contexto:
        "Computação em nuvem é o modelo de fornecimento de recursos de TI (armazenamento, processamento, software) sob demanda pela internet, em vez de infraestrutura própria local. Os três modelos de serviço clássicos formam uma hierarquia de abstração: IaaS (Infrastructure as a Service) fornece apenas a infraestrutura virtual básica — servidores, armazenamento, rede —, cabendo ao cliente instalar e gerenciar o sistema operacional e aplicações; PaaS (Platform as a Service) já entrega uma plataforma pronta (sistema operacional, ferramentas de desenvolvimento), poupando o cliente de gerenciar a infraestrutura; SaaS (Software as a Service) entrega o software pronto para uso final, como Gmail ou Office 365. Para investigação, a nuvem é cada vez mais o local onde evidências digitais residem (e-mails, backups, mensagens), o que levanta questões de cadeia de custódia, jurisdição do provedor e necessidade de ordem judicial para acesso a dados hospedados fora do dispositivo físico apreendido.",
    },
    {
      tema: "OSINT (investigação em fontes abertas) e coleta de evidência em redes sociais",
      motivo: "Prática cada vez mais citada em editais de polícia judiciária como habilidade correlata a crimes digitais.",
      contexto:
        "OSINT (Open Source Intelligence) é a coleta e análise de informações disponíveis publicamente — redes sociais, registros públicos, sites, metadados de imagens — para fins de investigação, sem necessidade de quebra de sigilo ou autorização judicial, já que os dados são abertos. Na prática policial, OSINT é usado para localizar suspeitos, mapear redes de relacionamento, verificar álibis e cruzar informações antes ou durante uma investigação formal. A coleta de evidência em redes sociais exige cuidados técnicos específicos: preservar o conteúdo por meio de captura de tela com metadados, ata notarial ou ferramentas de hash que garantam a integridade da evidência, já que posts podem ser apagados ou editados. É tema que dialoga diretamente com cadeia de custódia da prova digital e com os limites legais de uso de informação pública em processo penal.",
    },
    {
      tema: "LGPD aplicada ao tratamento de dados em investigação criminal (bases legais, exceções de segurança pública)",
      motivo: "Cruza \"legislação digital\" do edital com um recorte mais específico que a FGV vem explorando.",
      contexto:
        "A Lei Geral de Proteção de Dados (Lei 13.709/2018) regula o tratamento de dados pessoais no Brasil, mas prevê expressamente que suas regras gerais não se aplicam ao tratamento de dados realizado para fins exclusivos de segurança pública, defesa nacional, segurança do Estado ou investigação e repressão de infrações penais — atividades que ficam sujeitas a legislação específica, ainda pendente de regulamentação própria e mais detalhada. Isso não significa ausência total de limites: princípios como finalidade, necessidade e proporcionalidade continuam orientando a atuação estatal, e o tratamento de dados por autoridade policial deve ser feito por órgão específico, de forma proporcional e nunca de modo genérico. O tema é sensível porque equilibra o direito à privacidade do investigado com a efetividade da persecução penal, sendo pauta central de debates entre juristas e legisladores.",
    },
  ],
  for: [
    {
      tema: "Local de crime: isolamento, preservação e etapas do exame pericial",
      motivo: "Procedimento operacional clássico, fácil de virar questão de \"o que o agente deve/não deve fazer\".",
      contexto:
        "O local de crime é a cena onde ocorreu o fato investigado e deve ser isolado imediatamente para impedir alteração, contaminação ou desaparecimento de vestígios — dever que recai sobre a primeira autoridade a chegar, geralmente o policial que atende a ocorrência, mesmo antes da perícia. O isolamento delimita fisicamente a área (fitas, barreiras), controla o acesso de pessoas não autorizadas e preserva o estado original da cena. As etapas clássicas do exame pericial seguem uma sequência lógica: preservação do local, reconhecimento geral da cena, registro fotográfico e planimétrico, busca e coleta de vestígios (com uso de luvas, embalagens adequadas e etiquetagem), e, por fim, a elaboração do laudo pericial. Erros comuns cobrados em prova envolvem o que NÃO se deve fazer: mexer em objetos, permitir a entrada de curiosos, ou liberar o local antes da conclusão da perícia.",
    },
    {
      tema: "Necropsia x exame de corpo de delito — diferenças e finalidades",
      motivo: "Detalhe conceitual que costuma aparecer como pegadinha dentro de tanatologia.",
      contexto:
        "Necropsia (ou autópsia) é o exame pericial interno e externo realizado especificamente em cadáver, para determinar a causa mortis, a natureza do óbito (natural, acidental, suicida, homicida) e reconstituir a dinâmica dos fatos que levaram à morte — é exame específico da tanatologia forense. Exame de corpo de delito, por sua vez, é um conceito processual penal mais amplo, previsto no art. 158 do CPP: é a perícia obrigatória sempre que a infração deixar vestígios materiais, servindo para comprovar a própria existência do crime (materialidade), podendo recair sobre pessoa viva (lesão corporal) ou morta, sobre objetos ou sobre o próprio local. Ou seja, a necropsia é uma espécie de exame de corpo de delito quando a vítima é cadáver, mas o gênero corpo de delito é mais abrangente e não se limita a exames em corpos.",
    },
    {
      tema: "Perfil genético (DNA) e bancos de dados forenses (RNIC)",
      motivo: "Tema atual de identificação humana, complementar à papiloscopia já prevista no edital.",
      contexto:
        "O perfil genético é obtido pela análise de regiões específicas e altamente variáveis do DNA (marcadores STR), que permitem identificar um indivíduo com altíssimo grau de certeza estatística, sendo hoje considerado o método de identificação humana mais preciso, ao lado da papiloscopia. No Brasil, a Lei 12.654/2012 (alterada pela Lei 13.964/2019, o Pacote Anticrime) autoriza a coleta de material biológico para identificação do perfil genético de condenados por crimes hediondos ou dolosos com violência grave contra pessoa. O RNIC (Rede Nacional de Perfis Genéticos e Banco Nacional de Perfis Genéticos) armazena e cruza esses perfis nacionalmente, permitindo relacionar vestígios de diferentes locais de crime ao mesmo indivíduo, mesmo em investigações e estados diferentes — funcionalidade equivalente ao que o AFIS (sistema automatizado de identificação de impressões digitais) faz para papiloscopia.",
    },
    {
      tema: "Balística: percussão, tiro à queima-roupa e curta/média/longa distância",
      motivo: "Aprofundamento natural de \"balística forense\", nível de detalhe que a FGV costuma pedir.",
      contexto:
        "A balística forense analisa, entre outros aspectos, a distância do disparo a partir das características da lesão e dos resíduos encontrados no alvo. No tiro à queima-roupa (ou encostado), o cano da arma toca ou quase toca a pele, deixando marca de \"boca de mina\" (impressão do cano) e, por vezes, queimadura por gases; é a distância mais próxima possível. No tiro a curta distância (até cerca de 50-60 cm, variando por arma/munição), observam-se resíduos de pólvora (esfumaçamento e tatuagem, pequenos grãos incrustados na pele) ao redor do orifício de entrada. No tiro a média distância, os resíduos de pólvora diminuem ou desaparecem, mas ainda pode haver traços; no tiro a longa distância, não há qualquer resíduo de pólvora ao redor da lesão, só o orifício de entrada. Percussão, no contexto de armas de fogo, refere-se ao mecanismo de disparo: o percussor golpeia a espoleta do cartucho, iniciando a ignição da pólvora que impulsiona o projétil.",
    },
  ],
  leg: [
    {
      tema: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
      motivo: "Conhecimento institucional básico que costuma aparecer em questão de legislação orgânica.",
      contexto:
        "A Polícia Civil do Paraná organiza-se em carreiras distintas (Delegado, Agente, Escrivão, Papiloscopista, entre outras), cada uma com atribuições específicas dentro da atividade de polícia judiciária. A estrutura territorial se divide entre unidades da Capital/Região Metropolitana de Curitiba e unidades do Interior, distribuídas por delegacias regionais, seccionais e especializadas (como as voltadas a crimes contra a mulher, crimes cibernéticos ou crimes contra o patrimônio). A hierarquia institucional segue a cadeia de comando própria da carreira policial civil, com o Delegado-Geral no topo da estrutura administrativa estadual e delegados titulares respondendo por cada unidade. Compreender essa organização — quem faz o quê, e onde — é a base para entender questões de legislação orgânica que cobram atribuições e estrutura da corporação.",
    },
    {
      tema: "Regime disciplinar e deveres/proibições do servidor (Lei Estadual 6.174/1970)",
      motivo: "Desdobramento direto do estatuto já listado no edital, ponto clássico de cobrança em prova de \"legislação institucional\".",
      contexto:
        "A Lei Estadual 6.174/1970 é o Estatuto dos Funcionários Públicos Civis do Paraná, que disciplina direitos, deveres, proibições e o regime disciplinar dos servidores estaduais, incluindo os da Polícia Civil no que não for regulado por legislação específica da carreira. Os deveres funcionais incluem assiduidade, pontualidade, urbanidade no trato com o público e zelo pelo patrimônio público; as proibições vedam condutas como valer-se do cargo para obter vantagens indevidas, ausentar-se do serviço sem autorização e revelar informação sigilosa. O regime disciplinar prevê penalidades escalonadas (advertência, suspensão, demissão) proporcionais à gravidade da falta, aplicadas mediante processo administrativo que assegure contraditório e ampla defesa. Esses temas costumam ser cobrados em conjunto com os princípios da Administração Pública já previstos no edital de Direito Administrativo.",
    },
    {
      tema: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
      motivo: "Editais recentes tendem a cobrar a lei mais nova do concurso (LC 259/2023 e Lei 23.213/2026 já estão na lista oficial) — vale revisar mudanças até a data da prova.",
      contexto:
        "A legislação orgânica da Polícia Civil do Paraná vem sendo atualizada nos últimos anos, com destaque para a Lei Complementar Estadual 259/2023, que trata do regime jurídico da carreira policial civil, e para atualizações posteriores que ajustam pontos específicos de carreira, remuneração ou estrutura territorial. Como o próprio edital já lista normas recentes entre os tópicos oficiais, a tendência histórica da FGV é cobrar justamente os dispositivos mais novos, testando se o candidato acompanhou a legislação vigente até a data da prova, e não apenas a redação original de leis mais antigas. Vale a pena revisar, próximo à data do exame, se houve alguma alteração pontual publicada no Diário Oficial do Estado que ainda não constava do material de estudo inicial.",
    },
  ],
  pp: [
    {
      tema: "Audiência de custódia — prazo, finalidade e consequências da ausência",
      motivo: "Tema recorrente em provas de carreira policial, conecta prisão em flagrante com garantias processuais.",
      contexto:
        "A audiência de custódia é a apresentação obrigatória de toda pessoa presa em flagrante a um juiz, em até 24 horas, prevista na Convenção Americana de Direitos Humanos e regulamentada pelo CNJ e pelo CPP (art. 310). Sua finalidade é tripla: verificar a legalidade e a necessidade da prisão, avaliar se houve tortura ou maus-tratos durante a abordagem/custódia policial, e decidir sobre a conversão em prisão preventiva, a concessão de liberdade provisória (com ou sem medidas cautelares) ou o relaxamento da prisão ilegal. A ausência de realização da audiência no prazo não torna a prisão automaticamente nula, mas é fator considerado para o relaxamento se a demora for injustificada e prejudicar o preso. Para o agente de polícia, o tema é relevante porque a atuação no momento da prisão e da lavratura do flagrante é justamente o que será escrutinado nessa audiência.",
    },
    {
      tema: "Provas ilícitas e prova ilícita por derivação (teoria dos frutos da árvore envenenada)",
      motivo: "Desdobramento natural de \"ação penal e prova no processo penal\" já previsto no edital.",
      contexto:
        "Prova ilícita é aquela obtida em violação a normas de direito material, constitucionais ou legais (por exemplo, uma interceptação telefônica sem autorização judicial), sendo inadmissível no processo por vedação expressa do art. 5º, LVI, da CF. A prova ilícita por derivação é a prova lícita em si, mas que só foi descoberta em razão de uma prova ilícita anterior — a chamada teoria dos frutos da árvore envenenada (fruits of the poisonous tree), de origem norte-americana, incorporada ao CPP no art. 157, §1º: se a árvore (prova inicial) está contaminada, os frutos (provas derivadas) também estão, e ambas devem ser desentranhadas dos autos. Exceções reconhecidas pela jurisprudência incluem a fonte independente (quando a prova derivada teria sido obtida de qualquer forma, por outro caminho lícito) e a descoberta inevitável (quando, mesmo sem a ilicitude, a prova seria inevitavelmente descoberta pelos meios investigativos em curso).",
    },
    {
      tema: "Colaboração premiada — requisitos e benefícios",
      motivo: "Cai com frequência em concursos de investigação, ligado à Lei de Organizações Criminosas.",
      contexto:
        "Colaboração premiada (ou delação premiada) é o instituto pelo qual um investigado ou réu, em troca de benefícios processuais, coopera efetivamente com a investigação e o processo, fornecendo informações que levem a resultados como a identificação de outros coautores, a localização de vítimas ou a recuperação de produto/proveito do crime. Está prevista principalmente na Lei 12.850/2013 (Lei de Organizações Criminosas), que exige voluntariedade da colaboração e efetividade do resultado como requisitos centrais — meras alegações sem comprovação não bastam. Os benefícios possíveis vão do perdão judicial à redução de pena em até dois terços, ou substituição da pena privativa de liberdade por restritiva de direitos, sempre formalizados por acordo homologado judicialmente, com participação do Ministério Público. O tema é sensível por equilibrar eficiência investigativa com garantias processuais do colaborador e dos delatados.",
    },
    {
      tema: "Cadeia de custódia da prova (arts. 158-A a 158-F do CPP)",
      motivo: "Também listado em Ciências Forenses — a FGV costuma cruzar o mesmo tema pelas duas matérias.",
      contexto:
        "A cadeia de custódia é o conjunto de procedimentos que documenta e preserva a história de um vestígio, desde sua descoberta no local de crime até seu descarte, garantindo a idoneidade e a rastreabilidade da prova. Introduzida no CPP pelo Pacote Anticrime (Lei 13.964/2019), a cadeia de custódia formaliza etapas como reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento e armazenamento do vestígio, com registro de cada pessoa que teve contato com ele. A quebra da cadeia de custódia — perda de rastreabilidade, manuseio sem registro, troca de embalagem inadequada — pode comprometer a validade da prova em juízo, ainda que o vestígio em si seja autêntico, por colocar em dúvida se ele não foi alterado, substituído ou contaminado ao longo do processo. É o mesmo tema tratado tanto do ângulo processual penal (procedimento legal) quanto do ângulo pericial (execução técnica), por isso costuma ser cruzado entre Processo Penal e Ciências Forenses.",
    },
  ],
  pen: [
    {
      tema: "Crimes hediondos (Lei 8.072/90) — rol e efeitos da hediondez",
      motivo: "Tema clássico de prova policial, natural continuação de \"aplicação e espécies de pena\".",
      contexto:
        "A Lei 8.072/90 lista taxativamente os crimes considerados hediondos (homicídio qualificado, latrocínio, extorsão mediante sequestro, estupro, estupro de vulnerável, entre outros) e equipara a eles, para efeitos legais, a tortura, o tráfico de drogas e o terrorismo, ainda que tecnicamente não estejam no rol. A hediondez traz consequências penais mais severas: regime inicial de cumprimento de pena mais rigoroso, progressão de regime com fração maior de cumprimento (40% para réu primário, podendo chegar a 70% em caso de reincidência específica, conforme o Pacote Anticrime), vedação à fiança em determinadas hipóteses e prazos mais longos para livramento condicional. O rol é taxativo (numerus clausus): um crime só é hediondo se estiver expressamente listado ou equiparado por lei, não bastando ser grave aos olhos do intérprete.",
    },
    {
      tema: "Feminicídio — qualificadora, e Lei Maria da Penha na prática",
      motivo: "Tema de alta recorrência em provas recentes de segurança pública, já conectado a \"Lei Maria da Penha\" do edital.",
      contexto:
        "Feminicídio é qualificadora do homicídio (art. 121, §2º-A, do Código Penal), incluída pela Lei 13.104/2015, aplicável quando o crime é cometido contra mulher por razões da condição de sexo feminino — o que se configura em violência doméstica e familiar ou em menosprezo/discriminação à condição de mulher. É crime hediondo por equiparação. Já a Lei Maria da Penha (Lei 11.340/2006) não tipifica crimes novos: cria mecanismos de proteção à mulher em situação de violência doméstica e familiar, como as medidas protetivas de urgência (afastamento do agressor do lar, proibição de aproximação e contato), os Juizados de Violência Doméstica e Familiar contra a Mulher, e reconhece cinco formas de violência (física, psicológica, sexual, patrimonial e moral). Na prática policial, o agente costuma atuar tanto no registro da ocorrência quanto no cumprimento de medidas protetivas, o que torna o tema recorrente em provas de segurança pública.",
    },
    {
      tema: "Crimes cibernéticos no Código Penal (invasão de dispositivo — art. 154-A)",
      motivo: "Ponte direta com a matéria de Tecnologia/Crimes Digitais, tema que a FGV gosta de cruzar entre disciplinas.",
      contexto:
        "O art. 154-A do Código Penal, incluído pela Lei 12.737/2012 (conhecida como Lei Carolina Dieckmann), tipifica a invasão de dispositivo informático alheio, conectado ou não à rede, mediante violação indevida de mecanismo de segurança, com o fim de obter, adulterar ou destruir dados/informações sem autorização do titular, ou instalar vulnerabilidades para obter vantagem ilícita. A pena é aumentada se da invasão resulta prejuízo econômico, ou se envolve obtenção de conteúdo de comunicações eletrônicas privadas, segredos comerciais/industriais ou informações sigilosas. É crime de ação penal pública condicionada à representação, salvo se cometido contra a administração pública. O tema conecta diretamente com Tecnologia/Segurança Cibernética do edital, já que exige compreensão técnica mínima de como ocorre a invasão para aplicar corretamente o tipo penal.",
    },
    {
      tema: "Excludentes de ilicitude (legítima defesa, estrito cumprimento do dever legal) aplicadas à atuação policial",
      motivo: "Combina teoria geral do crime com o uso da força pelo agente — tema sensível e recorrente.",
      contexto:
        "As excludentes de ilicitude (art. 23 do CP) afastam o caráter criminoso de uma conduta que, isoladamente, se encaixaria em um tipo penal. Legítima defesa exige agressão injusta, atual ou iminente, a direito próprio ou alheio, repelida com meios necessários e uso moderado desses meios — requisitos que, na atuação policial, costumam ser escrutinados com rigor em casos de confronto armado. Estrito cumprimento do dever legal aplica-se especificamente a agentes públicos no exercício regular de suas funções, como a aplicação proporcional da força para deter um suspeito ou executar um mandado; a chave é que o cumprimento seja \"estrito\" (dentro dos limites legais e regulamentares) e não uma extrapolação da função. O excesso, doloso ou culposo, em qualquer excludente, é punível e retira a proteção legal — daí a importância prática do tema para quem vai atuar diretamente em situações de uso da força.",
    },
  ],
  con: [
    {
      tema: "Estado de defesa e estado de sítio — diferenças e requisitos",
      motivo: "Desdobramento clássico de \"organização do Estado e dos Poderes\", tema recorrente em prova objetiva.",
      contexto:
        "Estado de defesa e estado de sítio são os dois mecanismos constitucionais de legalidade extraordinária, que permitem a restrição temporária de direitos fundamentais diante de situações de grave instabilidade institucional. O estado de defesa (art. 136 da CF) é decretado diretamente pelo Presidente da República, ouvidos o Conselho da República e o Conselho de Defesa Nacional, para preservar ou restabelecer a ordem pública/paz social em locais restritos e determinados, ameaçados por grave instabilidade institucional ou calamidade; deve ser submetido ao Congresso Nacional em até 24 horas, para aprovação por maioria absoluta. O estado de sítio (art. 137) é mais grave e abrangente, exigindo autorização prévia do Congresso Nacional antes da decretação, cabível em caso de comoção grave de repercussão nacional, ineficácia do estado de defesa, ou declaração de guerra/resposta a agressão armada estrangeira. Ambos têm prazo determinado e sujeitam-se a controle político e jurisdicional.",
    },
    {
      tema: "Repartição de competências em segurança pública (União, Estados, Municípios)",
      motivo: "Conecta diretamente com o art. 144 da CF já previsto no edital, ângulo que a FGV explora bastante.",
      contexto:
        "A segurança pública é definida pelo art. 144 da CF como dever do Estado e responsabilidade de todos, mas a competência para exercê-la é repartida entre os entes federativos conforme os órgãos elencados no próprio artigo. À União cabem a Polícia Federal, a Polícia Rodoviária Federal e a Polícia Ferroviária Federal, com atuação em crimes de repercussão interestadual/internacional e fiscalização de fronteiras/rodovias federais. Aos Estados cabem a Polícia Civil (polícia judiciária e apuração de infrações penais, exceto militares) e a Polícia Militar (policiamento ostensivo e preservação da ordem pública), ambas subordinadas ao Governador do Estado. Aos Municípios é facultada a criação de guardas municipais, destinadas à proteção de bens, serviços e instalações municipais, com competência mais restrita que as polícias estaduais e federais, não substituindo suas funções de investigação ou policiamento ostensivo geral.",
    },
    {
      tema: "Controle de constitucionalidade difuso x concentrado",
      motivo: "Aprofundamento natural do tópico \"controle de constitucionalidade\" já listado.",
      contexto:
        "O controle de constitucionalidade repressivo brasileiro admite dois modelos, que podem coexistir por conta do sistema misto adotado pela Constituição de 1988. O controle difuso (ou aberto) pode ser exercido por qualquer juiz ou tribunal, de forma incidental, dentro de um processo comum em que a inconstitucionalidade é discutida como questão prejudicial ao mérito, produzindo efeitos entre as partes do processo (inter partes) — salvo se o Senado Federal suspender a execução da norma (art. 52, X, da CF), ampliando o efeito. O controle concentrado (ou reservado) é exercido exclusivamente pelo STF, por meio de ações diretas específicas (ADI, ADC, ADPF), ajuizadas por legitimados taxativos previstos na Constituição, produzindo efeito erga omnes (para todos) e vinculante em relação aos demais órgãos do Judiciário e à Administração Pública. A distinção entre quem julga e qual o alcance da decisão é o ponto mais explorado em prova.",
    },
  ],
  adm: [
    {
      tema: "Poderes administrativos (hierárquico, disciplinar, de polícia, regulamentar)",
      motivo: "Base teórica que costuma anteceder questões sobre atos administrativos, já previsto no edital.",
      contexto:
        "Os poderes administrativos são instrumentos jurídicos que a Administração Pública utiliza para exercer suas funções, sempre vinculados à finalidade pública. O poder hierárquico organiza os órgãos internamente em relação de subordinação, permitindo dar ordens, fiscalizar, delegar e avocar competências. O poder disciplinar permite apurar infrações e aplicar sanções a servidores e a particulares que tenham vínculo jurídico específico com a Administração, sempre garantido o contraditório. O poder de polícia (art. 78 do CTN) é a prerrogativa de restringir ou condicionar o uso de bens, direitos e atividades privadas em favor do interesse público, da segurança, da ordem e da saúde coletiva — é o poder que mais interessa à atividade policial, pois fundamenta ações fiscalizatórias e restritivas do Estado. O poder regulamentar (ou normativo) permite à Administração editar atos gerais (decretos, regulamentos) para dar fiel execução às leis, sem inová-las.",
    },
    {
      tema: "Processo Administrativo Disciplinar (PAD) — fases e princípios",
      motivo: "Tema institucional relevante para carreira policial, conecta administrativo com legislação estadual.",
      contexto:
        "O Processo Administrativo Disciplinar (PAD) é o instrumento formal pelo qual a Administração apura irregularidades cometidas por servidores públicos e, se for o caso, aplica penalidades, sempre assegurados o contraditório e a ampla defesa (art. 5º, LV, da CF). Suas fases clássicas são: instauração (portaria que designa comissão processante e delimita os fatos investigados), instrução (coleta de provas, oitiva de testemunhas, interrogatório do acusado), defesa (apresentação de alegações finais pelo servidor), relatório (parecer conclusivo da comissão) e julgamento (decisão da autoridade competente, que pode aplicar a penalidade proposta, penalidade diversa dentro dos limites legais, ou absolver). Rege-se pelos princípios da legalidade, do devido processo legal, da oficialidade (a Administração impulsiona o processo de ofício) e da verdade material (busca-se a realidade dos fatos, não apenas o que consta formalmente nos autos). Para carreiras policiais, o PAD costuma se combinar com previsões específicas do estatuto ou regime disciplinar próprio da corporação.",
    },
    {
      tema: "Regime jurídico dos servidores públicos (estatutário x celetista) e vacância",
      motivo: "Ponto clássico de prova de direito administrativo em concursos de carreira de Estado.",
      contexto:
        "O regime jurídico define o conjunto de normas que regulam a relação entre o servidor e a Administração Pública. O regime estatutário é disciplinado por lei específica (estatuto), de natureza institucional e não contratual, unilateralmente alterável pelo poder público dentro dos limites constitucionais — é o regime típico de servidores efetivos, incluindo policiais civis, e garante estabilidade após cumprimento de estágio probatório. O regime celetista segue a CLT, de natureza contratual, mais comum em empregos públicos de empresas estatais. A vacância é a situação em que um cargo público fica sem titular, e pode ocorrer por diversas formas previstas em lei: exoneração (a pedido ou de ofício, sem caráter punitivo), demissão (penalidade disciplinar), aposentadoria, posse em outro cargo inacumulável, promoção, readaptação ou falecimento. Distinguir exoneração (sem culpa) de demissão (penalidade) é um dos pontos mais cobrados sobre o tema em provas objetivas.",
    },
  ],
  dh: [
    {
      tema: "Uso progressivo e diferenciado da força — protocolos internacionais",
      motivo: "Desdobramento direto de \"direitos humanos e atuação policial\" já previsto, tema sensível e atual.",
      contexto:
        "O uso progressivo e diferenciado da força é o princípio segundo o qual o agente de segurança pública deve escalonar sua resposta conforme o nível de resistência ou ameaça apresentado, começando pelo nível mínimo necessário (presença policial, verbalização) e só avançando para níveis mais intensos (contenção física, uso de armas de menor potencial ofensivo, força letal) se estritamente necessário e proporcional. O parâmetro internacional de referência são os Princípios Básicos sobre o Uso da Força e Armas de Fogo pelos Funcionários Responsáveis pela Aplicação da Lei (ONU, 1990), que orientam também a Portaria Interministerial 4.226/2010 no Brasil, estabelecendo diretrizes nacionais sobre proporcionalidade, legalidade, necessidade e prestação de contas no uso da força. O tema é sensível por equilibrar a efetividade da atuação policial com a proteção da vida e da integridade física, tanto do cidadão quanto do próprio agente.",
    },
    {
      tema: "Tortura (Lei 9.455/97) e mecanismos de prevenção",
      motivo: "Tema recorrente em provas de segurança pública, cruza direitos humanos com direito penal.",
      contexto:
        "A Lei 9.455/97 define e tipifica o crime de tortura no Brasil, caracterizando-a como o constrangimento de alguém, com emprego de violência ou grave ameaça, para obter informação, declaração ou confissão, provocar ação/omissão criminosa, ou por discriminação racial/religiosa — e também a submissão de pessoa presa ou sob medida de segurança a sofrimento físico ou mental como forma de castigo pessoal ou medida preventiva. É crime equiparado a hediondo, insuscetível de anistia, graça, indulto e fiança, e admite a modalidade omissiva imprópria: o agente público que tem o dever de evitar a tortura e se omite também responde pelo crime. Mecanismos de prevenção incluem o Sistema Nacional de Prevenção e Combate à Tortura (Lei 12.847/2013), com o Comitê Nacional e o Mecanismo Nacional de Prevenção e Combate à Tortura, responsáveis por monitorar locais de privação de liberdade, além de protocolos de registro em áudio/vídeo de interrogatórios como boa prática preventiva.",
    },
    {
      tema: "Execução penal e direitos da pessoa presa (LEP)",
      motivo: "Complementa \"proteção de grupos vulneráveis\" com um recorte institucional que a FGV já usou em provas policiais.",
      contexto:
        "A Lei de Execução Penal (Lei 7.210/1984) regula o cumprimento das penas e das medidas de segurança, buscando efetivar as disposições da sentença e proporcionar condições para a harmônica integração social do condenado. Ela assegura direitos à pessoa presa que não são atingidos pela sentença condenatória, como assistência material, à saúde, jurídica, educacional, social e religiosa; direito ao trabalho remunerado, com remição de pena (redução do tempo de pena por dias trabalhados ou estudados); direito à visita de familiares; e à individualização da pena por meio da progressão de regime, condicionada ao cumprimento de requisitos objetivos (tempo de pena) e subjetivos (bom comportamento). O tema conecta diretamente com direitos humanos porque trata da dignidade da pessoa presa mesmo diante da privação de liberdade, princípio que orienta a atuação de toda a cadeia de segurança pública, da prisão em flagrante à execução da pena.",
    },
  ],
  pr: [
    {
      tema: "Segurança pública no Paraná — programas e indicadores recentes",
      motivo: "Tema de atualidade estadual, natural em prova de \"temas atuais do Paraná\" já prevista no edital.",
      contexto:
        "A segurança pública paranaense é organizada em torno da Polícia Civil, da Polícia Militar e do Corpo de Bombeiros Militar, sob coordenação da Secretaria de Estado da Segurança Pública. Nos últimos anos, o estado tem investido em programas de modernização, como integração de dados entre corporações, expansão de câmeras de videomonitoramento e reforço de efetivo por meio de concursos públicos regulares — o próprio certame da PCPR se insere nesse movimento de recomposição de quadros. Indicadores de criminalidade divulgados por órgãos oficiais (Secretaria de Segurança Pública, Instituto de Segurança Pública do Paraná) costumam mostrar variações regionais relevantes, com maior concentração de ocorrências na Região Metropolitana de Curitiba e desafios específicos nas regiões de fronteira, como Foz do Iguaçu, ligados a contrabando, descaminho e crimes transnacionais. Esses dados de atualidade tendem a ser cobrados de forma qualitativa (tendências, programas, desafios), não pela memorização de números exatos, que mudam com frequência.",
    },
    {
      tema: "Economia paranaense — agronegócio e Porto de Paranaguá",
      motivo: "Desdobramento clássico de \"economia e indicadores do estado\", tema recorrente em provas estaduais.",
      contexto:
        "O agronegócio é o pilar histórico da economia paranaense, com o estado figurando entre os maiores produtores nacionais de soja e milho e liderando a produção e exportação de carne de frango, atividade concentrada no polo formado por Cascavel e Toledo, no Oeste do estado. O escoamento dessa produção — e também de parte da produção de outros estados do Centro-Sul do Brasil — depende fortemente do Porto de Paranaguá, no litoral paranaense, um dos maiores portos graneleiros da América Latina, estrutural para as exportações de soja, milho e farelo. Esse fluxo intenso de mercadorias de alto valor torna a região portuária um ponto sensível também do ângulo da segurança pública, associado a riscos de desvio de carga, contrabando e fraudes em operações de comércio exterior — conexão que costuma aparecer em questões que cruzam economia estadual com o perfil de atuação do cargo policial.",
    },
    {
      tema: "Datas comemorativas e símbolos oficiais do Paraná",
      motivo: "Pergunta \"decoreba\" clássica de prova estadual, baixo custo de estudo e alta frequência histórica.",
      contexto:
        "O Estado do Paraná comemora sua emancipação política em 19 de dezembro, data em que entrou em vigor a Lei nº 704/1853, que o desmembrou da Província de São Paulo — diferente do Dia do Paraná, também celebrado nessa mesma data em algumas fontes, sempre associado à criação da província. Os símbolos oficiais do estado incluem a bandeira (com as cores verde, amarelo e branco, e as estrelas representando Curitiba e as demais localidades históricas), o brasão de armas e o hino oficial. A ave símbolo do estado é o gralha-azul, associada popularmente à disseminação da semente da araucária, e a árvore símbolo é justamente o pinheiro-do-paraná (araucária), que também aparece no brasão. Esse tipo de pergunta costuma ter baixo grau de raciocínio exigido e alta objetividade, valendo a pena memorizar diretamente para não perder pontos de baixo custo de estudo.",
    },
  ],
  cont: [
    {
      tema: "Estrutura do balanço patrimonial (Ativo Circulante/Não Circulante, Passivo, PL)",
      motivo: "Base teórica direta do tópico \"fundamentos e patrimônio\" já previsto no edital.",
      contexto:
        "O balanço patrimonial é a demonstração contábil que retrata a posição financeira de uma entidade em determinada data, organizada em duas colunas que devem se equilibrar: Ativo de um lado, Passivo e Patrimônio Líquido do outro. O Ativo se divide em Circulante (bens e direitos realizáveis em até 12 meses, como caixa, estoques e contas a receber) e Não Circulante (realizável a longo prazo, investimentos, imobilizado e intangível). O Passivo segue lógica simétrica, separando Circulante (obrigações de curto prazo) e Não Circulante (obrigações de longo prazo), enquanto o Patrimônio Líquido representa a diferença entre ativos e passivos — o que sobra para os sócios. Essa estrutura é a base para entender qualquer análise contábil pericial, já que fraudes e inconsistências patrimoniais costumam aparecer justamente como desequilíbrios ou classificações indevidas entre essas contas.",
    },
    {
      tema: "Indícios contábeis de lavagem de dinheiro em perícia contábil",
      motivo: "Combina \"fraudes e ocultação patrimonial\" com o perfil investigativo do cargo — ângulo que a FGV explora.",
      contexto:
        "A perícia contábil aplicada à investigação de lavagem de dinheiro busca identificar sinais de incompatibilidade entre o patrimônio e a renda declarada de uma pessoa física ou jurídica. Indícios clássicos incluem: movimentação financeira incompatível com a atividade econômica declarada; uso de empresas de fachada (sem estrutura operacional real, mas com faturamento elevado); fracionamento de depósitos para evitar comunicação obrigatória ao COAF (fenômeno conhecido como \"smurfing\"); superfaturamento ou subfaturamento em notas fiscais; e transações com paraísos fiscais sem justificativa econômica aparente. O perito contábil atua como auxiliar da investigação policial, elaborando laudos que traduzem essas movimentações financeiras complexas em evidências compreensíveis para o processo penal, conectando diretamente a contabilidade com o combate ao crime organizado e à corrupção.",
    },
  ],
  est: [
    {
      tema: "Correlação e regressão linear simples (noções)",
      motivo: "Extensão natural de \"medidas de posição e dispersão\", tema que aparece em provas de nível superior.",
      contexto:
        "Correlação mede o grau e o sentido da relação entre duas variáveis, expresso pelo coeficiente de correlação de Pearson (r), que varia de -1 a +1: valores próximos de +1 indicam correlação positiva forte (quando uma variável aumenta, a outra também aumenta), próximos de -1 indicam correlação negativa forte, e próximos de 0 indicam ausência de relação linear. É fundamental lembrar que correlação não implica causalidade — duas variáveis podem se mover juntas por coincidência ou por um terceiro fator comum. A regressão linear simples vai além, buscando uma equação (reta) que descreve como uma variável dependente varia em função de uma variável independente, permitindo fazer previsões. Em provas objetivas, esse tema costuma ser cobrado de forma conceitual: interpretar o sinal e a magnitude de um coeficiente, ou identificar a diferença entre correlação e causalidade.",
    },
    {
      tema: "Distribuição normal — noções e leitura de gráfico",
      motivo: "Tema clássico de estatística básica, cai como questão conceitual em provas objetivas.",
      contexto:
        "A distribuição normal é o modelo estatístico mais importante para descrever fenômenos naturais e sociais, representada graficamente pela clássica curva em forma de sino, simétrica em torno da média. Nessa distribuição, média, mediana e moda coincidem no centro da curva, e a dispersão dos dados é medida pelo desvio-padrão: aproximadamente 68% dos valores ficam a até 1 desvio-padrão da média, cerca de 95% a até 2 desvios-padrão, e por volta de 99,7% a até 3 desvios-padrão (a chamada regra empírica ou regra 68-95-99,7). Questões objetivas costumam pedir a leitura correta do gráfico — identificar onde a curva é mais alta (moda/média), avaliar simetria, ou reconhecer quando uma distribuição se afasta do padrão normal (assimetria à esquerda ou à direita) — sem exigir cálculos complexos de probabilidade.",
    },
  ],
  rlm: [
    {
      tema: "Sequências lógicas e sequências numéricas",
      motivo: "Tema clássico de RLM em qualquer banca, complementa \"lógica proposicional\" já prevista.",
      contexto:
        "Sequências lógicas e numéricas exigem identificar o padrão (regra de formação) que rege uma série de números, letras ou figuras, para então prever o próximo elemento. Os padrões mais comuns envolvem progressões aritméticas (soma um valor fixo a cada termo), progressões geométricas (multiplica por um valor fixo), alternância entre duas ou mais regras aplicadas ciclicamente, ou relações entre termos não consecutivos (como somar os dois anteriores, padrão de Fibonacci). Em sequências de letras, é comum usar a posição no alfabeto como chave numérica para revelar o padrão oculto. A estratégia mais eficiente é sempre calcular as diferenças entre termos consecutivos primeiro (e, se necessário, as diferenças das diferenças) antes de tentar identificar padrões mais complexos como multiplicações ou alternâncias.",
    },
    {
      tema: "Princípios de contagem: arranjo, combinação e permutação simples",
      motivo: "Desdobramento direto de \"contagem e probabilidade básica\" já previsto no edital.",
      contexto:
        "Esses três conceitos respondem à mesma pergunta — \"de quantas formas posso agrupar ou ordenar elementos?\" — mas cada um se aplica a uma situação distinta. Permutação é usada quando todos os elementos disponíveis entram no agrupamento e a ordem importa (ex.: de quantas formas 5 pessoas podem se sentar em 5 cadeiras). Arranjo é usado quando apenas parte dos elementos é escolhida e a ordem importa (ex.: de quantas formas posso escolher 1º, 2º e 3º lugares entre 10 corredores). Combinação é usada quando apenas parte dos elementos é escolhida e a ordem NÃO importa (ex.: de quantas formas posso formar uma comissão de 3 pessoas entre 10 candidatos, já que a ordem de escolha não altera o grupo final). O erro mais comum em prova é confundir arranjo com combinação — a pergunta-chave para diferenciar é sempre \"trocar a ordem dos elementos escolhidos gera um resultado diferente?\".",
    },
    {
      tema: "Diagramas lógicos (conjuntos, Venn) aplicados a problemas com dados do enunciado",
      motivo: "Formato de questão muito comum da FGV, cruza \"teoria dos conjuntos\" com raciocínio aplicado.",
      contexto:
        "Questões com diagramas de Venn pedem para organizar dados de um enunciado (geralmente uma pesquisa com números de pessoas que têm certas características) em círculos sobrepostos, representando conjuntos e suas interseções. A técnica mais segura é sempre preencher o diagrama de dentro para fora: primeiro a interseção de todos os conjuntos (o núcleo central), depois as interseções de dois em dois subtraindo o que já foi preenchido no centro, e só por último as regiões exclusivas de cada conjunto, subtraindo tudo que já foi alocado. A fórmula da união de dois conjuntos — n(A∪B) = n(A) + n(B) − n(A∩B) — e sua versão estendida para três conjuntos são a base teórica por trás do preenchimento visual. Esse formato é recorrente na FGV porque combina teoria dos conjuntos com interpretação de texto, testando se o candidato consegue traduzir um enunciado narrativo em uma estrutura lógica organizada.",
    },
  ],
};
