import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "proc-04",
  resumo: {
    ideia:
      "O inquérito é a investigação da polícia judiciária para que o MP ou a vítima decidam se acusam. Esta aula mostra como ele começa, o que o delegado faz, os prazos, o arquivamento e as outras investigações (MP e CPI). Depois vem a prisão antes da condenação: mandado, força, algemas, flagrante, auto de prisão e audiência de custódia.",
    itens: [
      {
        parte: "1. A polícia e o inquérito",
        termo: "Inquérito policial",
        faz: "Conjunto de diligências da polícia judiciária para apurar a infração e quem a praticou, para que o titular da ação vá a juízo. Escrito, sigiloso, inquisitivo, dispensável e indisponível: o delegado não pode arquivá-lo (art. 17).",
      },
      {
        termo: "Judiciária x administrativa",
        faz: "A polícia judiciária apura o crime que já aconteceu: Polícia Civil e Polícia Federal (art. 4º). A polícia administrativa age antes, de forma ostensiva, para prevenir: Polícia Militar e PRF.",
        pista: "Polícia judiciária não faz parte do Poder Judiciário, e o inquérito não é processo: é procedimento administrativo.",
      },
      {
        termo: "Outras autoridades",
        faz: "A lei pode dar a função de apurar a outras autoridades administrativas (art. 4º, parágrafo único). Por isso existem investigações fora da polícia, como a CPI, o inquérito policial militar e a investigação do MP.",
      },
      {
        termo: "Judiciária x investigativa",
        faz: "Há quem separe: a polícia investigativa apura a infração; a judiciária auxilia o juiz, cumprindo mandados. Para o STJ, mandado de busca cumprido pela Polícia Militar não gera nulidade.",
        pista: "Quem investigou não fixa a competência: investigação da Polícia Federal pode embasar ação na Justiça estadual (STJ).",
      },
      {
        termo: "Funções do inquérito",
        faz: "Preservadora: evita acusação sem base e protege o inocente. Preparatória: guarda elementos que poderiam se perder até a ação. O inquérito acompanha a denúncia ou a queixa quando servir de base a ela (art. 12).",
      },
      {
        termo: "Vício no inquérito",
        faz: "Erro na investigação não anula a ação penal, porque o inquérito só reúne informações. O que cai é o próprio ato viciado (STJ).",
      },
      {
        parte: "2. Características",
        termo: "Administrativo",
        faz: "Conduzido por autoridade sem poder de julgar. É pré-processual: não é fase do processo.",
      },
      {
        termo: "Inquisitivo",
        faz: "Não há acusado, e sim investigado ou indiciado. Não há contraditório pleno nem ampla defesa. O investigado tem direitos, como ter advogado e pedir diligências, mas o delegado decide se as faz.",
      },
      {
        termo: "Oficiosidade e oficialidade",
        faz: "Oficiosidade: na ação pública incondicionada, o delegado deve instaurar o inquérito de ofício assim que souber do crime. Oficialidade: a investigação é feita por órgão oficial do Estado, mesmo quando o crime é de ação privada.",
      },
      {
        termo: "Escrito",
        faz: "Todas as peças são reduzidas a escrito e rubricadas pela autoridade (art. 9º).",
      },
      {
        termo: "Indisponível",
        faz: "O delegado não arquiva o inquérito (art. 17). Mesmo que ache o fato insignificante, essa análise fica com o MP e o juiz.",
      },
      {
        termo: "Dispensável",
        faz: "A denúncia pode vir sem inquérito, se o MP já tiver elementos. Se a representação trouxer elementos suficientes, o MP dispensa o inquérito e denuncia em 15 dias (art. 39, § 5º). Dados de inquérito civil também podem embasar a denúncia.",
      },
      {
        termo: "Discricionário",
        faz: "O delegado escolhe as diligências e pode negar, de forma justificada, o pedido do ofendido ou do indiciado (art. 14). O exame de corpo de delito nunca pode ser negado (arts. 158 e 184).",
        pista: "O STJ já concedeu habeas corpus para obrigar a polícia a fazer certas diligências pedidas.",
      },
      {
        termo: "Suspeição do delegado",
        faz: "Ninguém pode arguir a suspeição do delegado no inquérito, mas ele mesmo deve se declarar suspeito quando houver motivo legal (art. 107).",
      },
      {
        parte: "3. Sigilo e advogado",
        termo: "Sigilo",
        faz: "O delegado assegura o sigilo necessário para esclarecer o fato ou exigido pelo interesse da sociedade (art. 20). O atestado de antecedentes pedido pelo interessado não menciona inquérito (art. 20, parágrafo único).",
      },
      {
        termo: "Acesso do defensor",
        faz: "Súmula Vinculante 14: acesso amplo ao que já está documentado e diz respeito à defesa, não às diligências em andamento.",
      },
      {
        termo: "Advogado sem procuração",
        faz: "O advogado examina autos de flagrante e de investigação, findos ou em andamento, mesmo sem procuração, e pode copiar peças (Estatuto da OAB, art. 7º, XIV). Se o caso estiver sob sigilo, precisa de procuração (§ 10).",
        pista: "A autoridade pode limitar o acesso a diligências em andamento ainda não documentadas, se houver risco para a investigação (§ 11).",
      },
      {
        termo: "Expulsão de estrangeiro",
        faz: "Exceção à regra inquisitiva: o procedimento de expulsão conduzido pela Polícia Federal garante contraditório e ampla defesa (Lei de Migração).",
      },
      {
        parte: "4. Notícia do crime e termo circunstanciado",
        termo: "Notitia criminis",
        faz: "É a chegada da notícia do crime à autoridade. Imediata: a própria polícia descobre no seu trabalho. Mediata: alguém comunica, como a vítima, o juiz ou o MP. Coercitiva: chega junto com o preso em flagrante.",
      },
      {
        termo: "Delatio criminis",
        faz: "Comunicação feita por alguém do povo. Simples: qualquer pessoa avisa, por escrito ou de boca, crime de ação pública, e o delegado verifica e instaura (art. 5º, § 3º). Postulatória: a vítima comunica e pede a investigação, como na representação.",
      },
      {
        termo: "Denúncia anônima",
        faz: "Chamada de delação inqualificada. Sozinha não basta para abrir inquérito: a polícia faz checagem prévia. Exceção: quando a própria peça anônima é o corpo do crime, como um bilhete de ameaça ou de extorsão.",
      },
      {
        termo: "Termo circunstanciado",
        faz: "Na infração de menor potencial ofensivo (todas as contravenções e os crimes com pena máxima de até 2 anos), em regra não há inquérito: a polícia lavra termo circunstanciado e o envia ao Juizado (Lei 9.099, arts. 61 e 69).",
        pista: "Em violência doméstica e familiar contra a mulher, a Lei 9.099 não se aplica: há inquérito, não termo circunstanciado.",
      },
      {
        parte: "5. Como o inquérito começa",
        termo: "Instauração",
        faz: "Na ação pública, de ofício ou por requisição ou requerimento. Na condicionada, só com representação. Na privada, só a requerimento da vítima (art. 5º).",
      },
      {
        termo: "Portaria ou flagrante",
        faz: "Na ação pública incondicionada, o delegado instaura por portaria assim que sabe do crime, ou pelo próprio auto de prisão em flagrante.",
      },
      {
        termo: "Requisição do MP",
        faz: "É ordem: o delegado cumpre, salvo se for manifestamente ilegal. Se faltarem dados, pede-os ao MP, mas não pode simplesmente recusar.",
      },
      {
        termo: "Requisição do juiz",
        faz: "Prevista no art. 5º, II, mas incompatível com o sistema acusatório (art. 3º-A): o juiz não deve tomar a iniciativa de investigar.",
      },
      {
        termo: "Requerimento da vítima",
        faz: "Não obriga o delegado. Deve trazer, quando possível, a narração do fato, a identificação do autor (ou por que não se sabe quem é) e as testemunhas (art. 5º, § 1º). Contra o indeferimento, cabe recurso ao chefe de Polícia (§ 2º).",
      },
      {
        termo: "Ação condicionada",
        faz: "Sem representação, o inquérito não começa (art. 5º, § 4º). A representação pode ser escrita ou oral, feita ao juiz, ao MP ou ao delegado, pela vítima ou por procurador com poderes especiais (art. 39).",
        pista: "Prisão em flagrante cabe, mas o auto só é lavrado com a representação. Se ela não vier em 24 horas, o preso é solto.",
      },
      {
        termo: "Prazo da representação",
        faz: "6 meses, contados do dia em que a vítima sabe quem é o autor (art. 38). Em violência doméstica e familiar contra a mulher, 12 meses (art. 38, § 2º, Lei 15.438/2026). Vítima e representante legal exercem o direito de forma independente (Súmula 594 do STF).",
        pista: "Se a vítima incapaz não tem representante, ou se os interesses dele colidem com os dela, o juiz nomeia curador especial (art. 33).",
      },
      {
        termo: "Requisição do Ministro da Justiça",
        faz: "Alguns crimes dependem dela, como o crime contra a honra do Presidente da República e o crime de estrangeiro contra brasileiro fora do Brasil. Vai ao MP, não o obriga a denunciar e não tem prazo de decadência.",
      },
      {
        termo: "Ação privada",
        faz: "Só a requerimento de quem pode propor a queixa (art. 5º, § 5º). Morta ou ausente a vítima, o direito passa ao cônjuge, ascendente, descendente ou irmão (art. 31). Pedido feito depois de 6 meses da ciência da autoria é negado, porque houve decadência.",
        pista: "Preso em flagrante, a vítima precisa pedir o inquérito em 24 horas; se não pedir, o autor é solto.",
      },
      {
        termo: "Autoridade com foro",
        faz: "Para o STF, investigar quem tem foro por prerrogativa de função exige autorização do tribunal competente, inclusive nos tribunais de segundo grau (ADI 7447). O STJ tem decisões em sentido contrário: aplica a regra comum do art. 5º.",
      },
      {
        parte: "6. O que o delegado faz",
        termo: "Primeiras diligências",
        faz: "Logo que sabe do crime, o delegado vai ao local e preserva o estado das coisas até chegarem os peritos; apreende os objetos ligados ao fato, depois de liberados pelos peritos; colhe todas as provas; e ouve o ofendido (art. 6º, I a IV).",
      },
      {
        termo: "Outras diligências",
        faz: "Ouve o indiciado, com termo assinado por duas testemunhas que ouviram a leitura; faz reconhecimento e acareação; determina corpo de delito e perícias; identifica pelas digitais e junta antecedentes; apura a vida pregressa; e registra filhos, idades, deficiência e quem cuida deles (art. 6º, V a X).",
      },
      {
        termo: "Reprodução simulada",
        faz: "O delegado pode reconstituir o crime, desde que não ofenda a moralidade ou a ordem pública (art. 7º). O investigado não é obrigado a participar: ninguém produz prova contra si.",
      },
      {
        termo: "Instrumentos do crime",
        faz: "Os instrumentos do crime e os objetos que interessam à prova acompanham os autos (art. 11). Havendo flagrante, segue-se o capítulo próprio (art. 8º).",
      },
      {
        termo: "Deveres do art. 13",
        faz: "O delegado também informa o juiz para a instrução e o julgamento, faz diligências requisitadas pelo juiz ou pelo MP, cumpre mandados de prisão e representa pela prisão preventiva (art. 13, I a IV).",
      },
      {
        termo: "Outra circunscrição",
        faz: "Onde há várias circunscrições policiais, o delegado faz diligência na área de outra sem precatória e age sobre fato que ocorra na sua presença até chegar a autoridade competente (art. 22).",
      },
      {
        termo: "Instituto de Identificação",
        faz: "Ao enviar o inquérito ao juiz, o delegado oficia ao Instituto de Identificação e Estatística com os dados da infração e do indiciado (art. 23).",
      },
      {
        termo: "Interrogatório policial",
        faz: "Seguem-se, no que couber, as regras do interrogatório judicial (arts. 185 a 196). O advogado não é obrigatório, mas não pode ser impedido. Faltar o aviso do direito ao silêncio gera nulidade relativa, que exige prova do prejuízo (STJ).",
      },
      {
        parte: "7. Dados cadastrais e sinais de celular",
        termo: "Dados cadastrais (art. 13-A)",
        faz: "Em sequestro e cárcere privado, redução a condição análoga à de escravo, tráfico de pessoas, extorsão com restrição da liberdade, extorsão mediante sequestro e envio ilegal de criança ao exterior (ECA, art. 239), o MP ou o delegado requisita, sem ordem do juiz, dados cadastrais da vítima ou dos suspeitos a órgãos públicos ou empresas privadas.",
        pista: "Resposta em 24 horas. A requisição traz o nome da autoridade, o número do inquérito e a unidade de polícia responsável.",
      },
      {
        termo: "Sinais de celular (art. 13-B)",
        faz: "No tráfico de pessoas, com autorização do juiz, o MP ou o delegado pede às operadoras os meios para localizar vítima ou suspeitos. Sinal é a posição da estação de cobertura, do setor e da intensidade de rádio: não inclui o conteúdo da comunicação.",
      },
      {
        termo: "Prazos do art. 13-B",
        faz: "Até 30 dias, renováveis uma vez por igual período; depois disso, só com nova ordem do juiz. O inquérito deve ser instaurado em até 72 horas do registro da ocorrência. Se o juiz não responder em 12 horas, a autoridade requisita direto às operadoras e avisa o juiz na hora.",
      },
      {
        termo: "ADI 5.642",
        faz: "O STF julgou os arts. 13-A e 13-B constitucionais. Os crimes relacionados ao tráfico de pessoas, para o 13-B, são os da lista do 13-A.",
      },
      {
        parte: "8. Policial investigado por força letal",
        termo: "Força letal",
        faz: "Policial investigado por uso da força letal em serviço é citado e tem 48 horas para constituir defensor; se não o fizer, a instituição indica um (art. 14-A).",
      },
      {
        termo: "Quem tem esse direito",
        faz: "Servidores das instituições do art. 144 da CF (PF, PRF, polícia ferroviária, polícias civis, militares, corpos de bombeiros e polícias penais), em inquérito, inquérito militar ou outro procedimento, por força letal em serviço, consumada ou tentada, inclusive nas situações do art. 23 do CP.",
      },
      {
        termo: "Defensor do policial",
        faz: "Sem defensor nomeado, a autoridade intima a instituição, que tem 48 horas para indicar um. A defesa cabe de preferência à Defensoria Pública; onde ela não estiver, a União ou o Estado disponibiliza profissional, e os custos ficam com a instituição do policial.",
      },
      {
        termo: "Veto derrubado",
        faz: "As regras sobre a indicação do defensor foram vetadas, mas o Congresso derrubou o veto em 2021 (vigência em 30/05/2021). Valem também para militares das Forças Armadas em operação de Garantia da Lei e da Ordem (§ 6º).",
      },
      {
        parte: "9. Identificação criminal",
        termo: "Identificação criminal",
        faz: "Quem tem identificação civil não passa pela criminal, salvo nos casos da lei (CF, art. 5º, LVIII; Lei 12.037/2009). Ela inclui o processo datiloscópico (digitais) e o fotográfico, juntados aos autos.",
      },
      {
        termo: "Documentos aceitos",
        faz: "Atestam a identificação civil: carteira de identidade, carteira de trabalho, carteira profissional, passaporte, carteira de identificação funcional e outro documento público que identifique (art. 2º). Documentos de identificação militar valem como civis.",
      },
      {
        termo: "Quando cabe",
        faz: "Mesmo com documento, cabe a identificação criminal se ele tiver rasura ou indício de falsificação; for insuficiente; houver documentos com dados conflitantes; constar nos registros policiais o uso de outros nomes; o estado, a data ou o lugar de emissão impedirem a identificação; ou ela for essencial à investigação, por decisão do juiz (art. 3º).",
        pista: "No último caso, o juiz decide de ofício ou a pedido do delegado, do MP ou da defesa.",
      },
      {
        termo: "Sem constrangimento",
        faz: "A autoridade evita constranger o identificado (art. 4º). As cópias dos documentos ficam nos autos.",
      },
      {
        termo: "Perfil genético",
        faz: "Na identificação criminal, a coleta de material biológico para o perfil genético depende de decisão judicial (Lei 12.037/2009, art. 5º, parágrafo único). Condenados por certos crimes graves passam pela coleta obrigatória (LEP, art. 9º-A), e a recusa é falta grave.",
      },
      {
        termo: "DNA no ingresso na prisão",
        faz: "Desde a Lei 15.280/2025, quem é preso cautelarmente por investigação de crime contra a dignidade sexual, e quem é condenado por esse crime, tem o DNA identificado ao entrar no estabelecimento prisional, por técnica adequada e indolor (CPP, art. 300-A).",
      },
      {
        parte: "10. Advogado, curador, incomunicabilidade e indiciamento",
        termo: "Advogado no inquérito",
        faz: "O advogado pode assistir o cliente investigado durante a apuração, sob pena de nulidade do depoimento e dos atos dele derivados (Estatuto da OAB, art. 7º, XXI, Lei 13.245/2016). Para a posição que prevalece, é direito do investigado, não obrigação: a polícia não pode impedir, mas o ato vale sem advogado se ele não quiser.",
      },
      {
        termo: "Curador do menor",
        faz: "O art. 15 manda nomear curador ao indiciado menor. Ficou sem uso: desde o Código Civil de 2002, a maioridade é aos 18 anos, a mesma idade da imputabilidade penal.",
      },
      {
        termo: "Incomunicabilidade",
        faz: "O art. 21 previa até 3 dias sem contato com ninguém. Não foi recepcionado: a CF garante ao preso o contato com a família e o advogado e proíbe a incomunicabilidade até no estado de defesa (art. 136, § 3º, IV). Ela nunca alcançaria o advogado.",
      },
      {
        termo: "Indiciamento",
        faz: "Ato privativo do delegado, fundamentado, com análise técnico-jurídica do fato: indica autoria, materialidade e circunstâncias (Lei 12.830/2013, art. 2º, § 6º). Passa o suspeito à condição de indiciado.",
        pista: "Não acaba com o sigilo. Pode haver vários suspeitos e nenhum indiciado.",
      },
      {
        termo: "Tipos de indiciamento",
        faz: "Direto: com o indiciado presente. Indireto: com ele ausente ou foragido. Indiciamento sem base é constrangimento ilegal e pode ser atacado por habeas corpus. Se surgirem provas em contrário, o delegado pode desindiciar.",
      },
      {
        termo: "Indiciado com foro",
        faz: "Para o STF, quem tem foro por prerrogativa de função só é indiciado com autorização do tribunal competente (Inq 2.411). O STJ tem decisões em sentido contrário.",
      },
      {
        parte: "11. Prazos e conclusão",
        termo: "Prazo",
        faz: "10 dias com o investigado preso, contados da prisão; 30 dias se solto, com ou sem fiança (art. 10).",
        pista: "Leis especiais têm prazos próprios, como a de drogas e a da Justiça Federal.",
      },
      {
        termo: "Relatório",
        faz: "Ao fim, o delegado faz relatório minucioso do que apurou e envia os autos ao juiz (art. 10, § 1º). Pode indicar testemunhas não ouvidas e onde encontrá-las (§ 2º).",
      },
      {
        termo: "Prorrogação com solto",
        faz: "Quando o fato for de difícil elucidação e o investigado estiver solto, o delegado pede ao juiz mais prazo para novas diligências (art. 10, § 3º). Cabem prorrogações sucessivas, mas demora sem justificativa pode levar ao trancamento: o STJ já trancou inquérito parado por cerca de 3 anos sem elementos mínimos.",
      },
      {
        termo: "Prorrogação com preso",
        faz: "O juiz das garantias pode prorrogar uma vez, por até 15 dias, o inquérito de investigado preso (art. 3º-B, § 2º). O STF admitiu novas prorrogações fundamentadas e disse que vencer o prazo não gera soltura automática: o juiz avalia a prisão.",
      },
      {
        termo: "Prazos especiais",
        faz: "Justiça Federal: 15 dias preso, prorrogáveis por mais 15; 30 dias solto. Lei de Drogas: 30 dias preso e 90 solto, que o juiz pode duplicar. Crimes contra a economia popular: 10 dias, preso ou solto. Inquérito policial militar: 20 dias preso; 40 solto, prorrogáveis por mais 20.",
        pista: "Na prisão temporária por crime hediondo, o prazo é de 30 dias, prorrogáveis por mais 30.",
      },
      {
        termo: "Contagem do prazo",
        faz: "Com o investigado preso, conta-se como prazo penal: inclui o dia do começo (CP, art. 10). Solto, como prazo processual: exclui o dia do começo e inclui o do fim (CPP, art. 798, § 1º).",
      },
      {
        termo: "Destinatário",
        faz: "Imediato: quem pode acusar, o MP ou o querelante. Mediato: o juiz, que usa o inquérito para decidir sobre medidas e para receber ou não a denúncia.",
      },
      {
        termo: "Devolução pedida pelo MP",
        faz: "O MP só pode pedir a volta do inquérito à polícia para diligências imprescindíveis ao oferecimento da denúncia (art. 16). Na ação privada, os autos ficam no juízo à espera da vítima ou são entregues a quem pedir, por traslado (art. 19).",
      },
      {
        parte: "12. Arquivamento: quem decide e como",
        termo: "Quem arquiva",
        faz: "O delegado nunca arquiva (art. 17), e o juiz não arquiva de ofício. O arquivamento começa sempre por manifestação do MP.",
      },
      {
        termo: "Regra antiga",
        faz: "Antes, o MP pedia e o juiz decidia. Se o juiz discordasse, mandava ao procurador-geral, que podia denunciar, designar outro membro para denunciar, requisitar diligências ou insistir no arquivamento. No MPF, quem revisa é a Câmara de Coordenação e Revisão (LC 75/1993).",
        pista: "Esse envio ao chefe do MP é chamado de princípio da devolução.",
      },
      {
        termo: "Novo art. 28",
        faz: "Com a Lei 13.964/2019, o MP ordena o arquivamento, comunica a vítima, o investigado e a polícia, e envia os autos à instância de revisão do próprio MP para homologação.",
      },
      {
        termo: "Leitura do STF",
        faz: "O STF deu interpretação conforme: o MP submete o arquivamento ao juiz e comunica vítima, investigado e polícia. O juiz pode mandar ao procurador-geral ou à instância de revisão quando vir ilegalidade patente ou teratologia.",
      },
      {
        termo: "Recurso da vítima",
        faz: "A vítima, ou seu representante, que não concordar pode pedir a revisão em 30 dias da comunicação (art. 28, § 1º). Nos crimes contra a União, Estados e Municípios, a revisão pode ser provocada pela chefia do órgão que os representa judicialmente (§ 2º).",
      },
      {
        termo: "Foro originário",
        faz: "Quando o procurador-geral da República pede o arquivamento em inquérito no STF ou no STJ, não há instância de revisão acima dele: o tribunal apenas acolhe o pedido.",
      },
      {
        termo: "Arquivamento e violência doméstica",
        faz: "Em violência contra a mulher, antes de arquivar é preciso esgotar as diligências (dever de devida diligência), aplicar o protocolo do CNJ para julgamento com perspectiva de gênero e dar peso à palavra da vítima (STJ).",
      },
      {
        parte: "13. Arquivamento: tipos e efeitos",
        termo: "Arquivamento implícito",
        faz: "Ocorreria quando o MP denuncia só parte dos fatos ou dos autores e silencia sobre o resto. Não é aceito (STF, HC 104.356): o MP pode aditar a denúncia depois.",
      },
      {
        termo: "Arquivamento indireto",
        faz: "O MP deixa de denunciar porque entende que o juízo é incompetente. Para o STJ, aplica-se o art. 28 por analogia.",
      },
      {
        termo: "Trancamento",
        faz: "Encerramento forçado do inquérito por habeas corpus. É exceção: só com atipicidade evidente, extinção da punibilidade ou ausência total de indícios de autoria ou materialidade.",
      },
      {
        termo: "Prova nova",
        faz: "Em regra, o arquivamento faz só coisa julgada formal. O delegado pode fazer novas pesquisas se souber de outras provas (art. 18), mas a ação só começa com prova nova (Súmula 524 do STF). Para o STJ, prova nova é a formalmente nova, substancialmente nova e capaz de mudar o quadro.",
      },
      {
        termo: "Coisa julgada material",
        faz: "O arquivamento não pode ser reaberto quando se baseia em atipicidade, com exame de mérito inequívoco, ou em extinção da punibilidade (STJ). Exceção: a extinção baseada em certidão de óbito falsa pode ser revista.",
      },
      {
        termo: "Excludente de ilicitude",
        faz: "Arquivamento por legítima defesa ou outra excludente: para o STJ, faz coisa julgada material; para o STF, pode ser reaberto se surgirem provas novas. Em prova, siga o STF.",
      },
      {
        termo: "Falta de justa causa",
        faz: "Arquivamento por falta de base mínima (indícios de autoria e prova da materialidade) faz só coisa julgada formal: com prova nova, pode haver ação.",
      },
      {
        termo: "Motivos e natureza",
        faz: "Os motivos de arquivar seguem, por analogia, os de rejeitar a denúncia (art. 395, II e III) e de absolver sumariamente (art. 397). A natureza do ato é discutida na doutrina. O arquivamento não impede a ação civil (art. 67, I).",
      },
      {
        parte: "14. Valor do inquérito e julgados",
        termo: "Valor probatório",
        faz: "O juiz não condena só com elementos do inquérito, salvo provas cautelares, não repetíveis e antecipadas (art. 155). Vale o livre convencimento motivado. A confissão não tem valor maior que as outras provas.",
      },
      {
        termo: "Reconhecimento por foto",
        faz: "Reconhecimento por fotografia feito na polícia só vale se confirmado em juízo e apoiado em outras provas (STJ).",
      },
      {
        termo: "Súmula 444 do STJ",
        faz: "Inquéritos e ações penais em curso não servem para aumentar a pena-base.",
      },
      {
        termo: "Inquérito aberto pelo MP",
        faz: "Se o MP iniciou a apuração, o delegado pode dar continuidade a ela e instaurar o inquérito (STJ).",
      },
      {
        termo: "Dados da Receita",
        faz: "O STF admite que a UIF e a Receita compartilhem dados com o MP sem ordem do juiz (Tema 990). Mas o MP não pode requisitar dados direto à Receita, e a Receita não pode investigar crimes não tributários: essa prova é nula (STJ).",
      },
      {
        termo: "Inquérito e cautelares",
        faz: "Medidas cautelares podem ser pedidas durante a investigação, por representação do delegado ou requerimento do MP (art. 282, § 2º). Há debate sobre o juiz decidir sem inquérito aberto.",
      },
      {
        termo: "Medidas protetivas",
        faz: "Para o STJ (Tema 1249), as medidas protetivas da Lei Maria da Penha são tutela inibitória: não dependem de boletim, inquérito ou processo. Duram enquanto houver risco, não caem só por arquivamento, extinção da punibilidade ou absolvição e não exigem revisão periódica. Para revogar, ouvem-se vítima e agressor, e a vítima é avisada.",
        pista: "A mesma lógica vale para as medidas protetivas do Título IX-A do CPP.",
      },
      {
        parte: "15. Investigação pelo MP",
        termo: "Poder do MP",
        faz: "O STF reconheceu que o MP pode investigar por conta própria, respeitados os direitos do investigado e a reserva de jurisdição (Tema 184).",
      },
      {
        termo: "PIC",
        faz: "O MP investiga pelo procedimento investigatório criminal, regulado pela Resolução 181 do CNMP. É administrativo e inquisitorial. O membro do MP não preside inquérito policial.",
      },
      {
        termo: "Ao receber a notícia",
        faz: "O membro do MP pode propor a ação, instaurar o PIC, encaminhar ao Juizado, arquivar ou requisitar inquérito à polícia. Tem 30 dias para decidir (art. 3º, § 5º).",
      },
      {
        termo: "Abertura do PIC",
        faz: "Por portaria fundamentada, com comunicação imediata e por escrito ao procurador-geral. Essa comunicação é só ciência: não há controle prévio.",
      },
      {
        termo: "Fatos novos e foro",
        faz: "Fato novo é incluído por aditamento ou em novo PIC. Investigado com foro por prerrogativa de função fica com o procurador-geral (art. 18, I).",
      },
      {
        termo: "Diligências do PIC",
        faz: "Respeitam a reserva de jurisdição. As requisições dão prazo mínimo de 10 dias úteis. A condução coercitiva só alcança testemunha e vítima que faltam sem justificativa. A notificação é feita com 48 horas de antecedência.",
      },
      {
        termo: "Autoridades no PIC",
        faz: "Certas autoridades são notificadas por meio do procurador-geral. As que têm essa prerrogativa escolhem dia, hora e local para depor. Requisições a outros estados dispensam precatória.",
      },
      {
        termo: "Prazo e fim do PIC",
        faz: "90 dias, com prorrogações sucessivas fundamentadas. A publicidade é a regra, com exceções, e a defesa tem acesso como na Súmula Vinculante 14. O arquivamento segue a regra do inquérito, e a reabertura exige prova nova.",
      },
      {
        parte: "16. CPI e outras investigações",
        termo: "CPI",
        faz: "Criada a requerimento de um terço dos membros da Casa, para apurar fato determinado, por prazo certo. Tem poderes de investigação próprios das autoridades judiciais, e as conclusões vão ao MP (CF, art. 58, § 3º).",
      },
      {
        termo: "O que a CPI não pode",
        faz: "Não decreta busca domiciliar, prisão (salvo em flagrante), interceptação telefônica, quebra de segredo de justiça nem medidas cautelares, como indisponibilidade de bens.",
      },
      {
        termo: "O que a CPI pode",
        faz: "Quebra sigilo fiscal, bancário e de dados telefônicos (registros, não conversas), determina perícias e conduz testemunha que falta. CPI estadual ou municipal só apura assuntos da competência do seu ente.",
      },
      {
        termo: "Outras investigações",
        faz: "O inquérito policial militar apura crimes militares e é independente. O inquérito civil, presidido pelo MP (CF, art. 129, III), apura danos coletivos, e seus dados podem servir à ação penal. Há ainda o termo circunstanciado.",
      },
      {
        parte: "17. Prisão: regras gerais e mandado",
        termo: "Medidas cautelares",
        faz: "Exigem necessidade e adequação. O juiz só as decreta a pedido das partes, do MP ou por representação policial (art. 282). Protegem a investigação, o processo ou a sociedade diante do perigo da liberdade do investigado.",
      },
      {
        termo: "Prisão-pena x prisão sem pena",
        faz: "A prisão-pena vem da condenação definitiva. A prisão sem pena (processual ou cautelar) acontece antes dela: flagrante, preventiva e temporária. Desde a Lei 12.403/2011, a prisão é o último recurso: só cabe se outra medida cautelar não bastar (art. 282, § 6º).",
        pista: "A prisão domiciliar (arts. 317 e 318) não é outra espécie: é a preventiva cumprida em casa.",
      },
      {
        termo: "Quando alguém pode ser preso",
        faz: "Só em flagrante ou por ordem escrita e fundamentada do juiz competente, por prisão cautelar ou por condenação definitiva (art. 283). Cautelar não se aplica a infração que não tenha pena de prisão prevista (§ 1º).",
      },
      {
        termo: "Dia e hora da prisão",
        faz: "A prisão pode ser feita em qualquer dia e a qualquer hora, respeitada a inviolabilidade do domicílio (art. 283, § 2º). O CPP não proíbe prender em casamento, culto ou velório.",
        pista: "Exceção eleitoral: de 5 dias antes até 48 horas depois da eleição, o eleitor só é preso em flagrante, por sentença condenatória por crime inafiançável ou por desrespeito a salvo-conduto (Código Eleitoral, art. 236).",
      },
      {
        termo: "Prisão dentro de casa",
        faz: "Com mandado, o morador é intimado a entregar o procurado. Se não obedecer: de dia, o executor chama duas testemunhas e entra à força; à noite, guarda todas as saídas e entra ao amanhecer (art. 293). O morador que se recusa é levado à autoridade. No flagrante, vale o mesmo no que couber (art. 294).",
        pista: "Pela CF (art. 5º, XI), em flagrante pode-se entrar na casa de dia ou de noite; com ordem judicial, só de dia.",
      },
      {
        termo: "O mandado",
        faz: "É lavrado pelo escrivão e assinado pela autoridade; identifica a pessoa por nome, apelido ou sinais; menciona a infração; declara o valor da fiança, se houver; e se dirige a quem pode cumpri-lo (art. 285).",
      },
      {
        termo: "Entrega do mandado",
        faz: "O mandado é feito em duas vias. Uma vai ao preso, com dia, hora e lugar da prisão; ele assina recibo na outra. Se recusar ou não puder assinar, duas testemunhas assinam (art. 286). A prisão por mandado se considera feita quando o executor se identifica, mostra o mandado e intima a pessoa a acompanhá-lo (art. 291).",
      },
      {
        termo: "Recolhimento ao presídio",
        faz: "Ninguém é recolhido à prisão sem que o mandado seja mostrado ao diretor ou carcereiro, que recebe cópia e dá recibo com dia e hora (art. 288).",
      },
      {
        termo: "Crime inafiançável sem mandado em mãos",
        faz: "Se a infração for inafiançável, a falta do mandado na hora não impede a prisão, mas o preso é apresentado logo ao juiz que expediu o mandado, para a audiência de custódia (art. 287).",
      },
      {
        termo: "Banco do CNJ",
        faz: "O juiz registra o mandado no banco de dados do CNJ. Qualquer policial pode cumprir mandado registrado, mesmo fora do território do juiz que o expediu; sem registro, também pode, conferindo a autenticidade e avisando o juiz (art. 289-A).",
        pista: "A prisão é comunicada ao juiz do local, e o preso é informado dos seus direitos; sem advogado, avisa-se a Defensoria.",
      },
      {
        termo: "Preso em outra comarca",
        faz: "Fora da área do juiz, a prisão é pedida por carta precatória; com urgência, por qualquer meio de comunicação, conferida a autenticidade (arts. 289 e 299). O juiz providencia a remoção do preso em até 30 dias (art. 289, § 3º).",
      },
      {
        termo: "Perseguição",
        faz: "Perseguido, o procurado pode ser preso em outro município ou comarca e é apresentado à autoridade local (art. 290). Há perseguição quando o executor o avistou e seguiu sem interrupção, mesmo perdendo de vista, ou quando sabe por indícios que ele passou há pouco por ali e vai no seu encalço (§ 1º).",
        pista: "Se a autoridade local duvidar do executor ou do mandado, mantém o preso sob custódia até esclarecer (§ 2º).",
      },
      {
        termo: "Separação de presos",
        faz: "Presos provisórios ficam separados dos condenados definitivos (art. 300). O militar preso em flagrante, depois do auto, vai para o quartel da sua instituição (parágrafo único).",
      },
      {
        termo: "Prisão especial",
        faz: "Algumas pessoas, como autoridades, magistrados, oficiais militares e delegados, têm direito a prisão especial até a condenação definitiva (art. 295). Ela é só o recolhimento em local separado da prisão comum; sem estabelecimento próprio, cela separada.",
        pista: "O STF derrubou a prisão especial para quem tem diploma de curso superior (ADPF 334).",
      },
      {
        parte: "18. Força e algemas",
        termo: "Uso da força",
        faz: "Só a indispensável, em caso de resistência ou tentativa de fuga (art. 284).",
      },
      {
        termo: "Resistência à prisão",
        faz: "Se houver resistência, mesmo de terceiros, o executor e quem o ajuda podem usar os meios necessários para se defender ou vencê-la. Lavra-se auto, assinado também por duas testemunhas (art. 292).",
      },
      {
        termo: "Algemas",
        faz: "Súmula Vinculante 11: só com resistência, fundado receio de fuga ou perigo, justificadas por escrito. Proibidas no parto e no puerpério imediato (art. 292, parágrafo único, Lei 13.434/2017).",
      },
      {
        termo: "Algema sem justificativa",
        faz: "Pela Súmula Vinculante 11, gera responsabilidade disciplinar, civil e penal do agente ou da autoridade, nulidade da prisão ou do ato processual e responsabilidade civil do Estado.",
      },
      {
        termo: "Algemas na rodovia",
        faz: "Para o STJ, abordagem em rodovia, dentro de veículo, com poucos policiais, arma envolvida ou crime grave são motivos que justificam as algemas (AgRg no REsp 1.898.916).",
      },
      {
        termo: "Algemas na custódia",
        faz: "Na audiência de custódia, o preso fica sem algemas, salvo nas exceções. Para o STJ, não há nulidade se o uso foi justificado.",
      },
      {
        parte: "19. Flagrante: o que é e espécies",
        termo: "Natureza do flagrante",
        faz: "Prisão sem ordem do juiz, feita no momento do crime ou logo depois. É ato administrativo, chamado por parte da doutrina de medida pré-cautelar: dura só até o juiz decidir na custódia.",
      },
      {
        termo: "Fases do flagrante",
        faz: "Captura (voz de prisão), condução coercitiva à delegacia, lavratura do auto de prisão em flagrante e recolhimento à prisão.",
      },
      {
        termo: "Quem prende",
        faz: "Qualquer pessoa do povo pode prender em flagrante (facultativo); a polícia deve prender (obrigatório) (art. 301). Guarda municipal, como qualquer pessoa, pode prender em flagrante (STJ).",
      },
      {
        termo: "Espécies de flagrante",
        faz: "Próprio: está cometendo ou acabou de cometer. Impróprio: perseguido logo após. Presumido: encontrado logo depois com objetos do crime (art. 302).",
        pista: "No crime permanente, há flagrante enquanto durar a permanência (art. 303).",
      },
      {
        termo: "Outros nomes",
        faz: "Próprio também é chamado de real ou propriamente dito. Impróprio, de imperfeito, irreal ou quase flagrante. Presumido, de ficto ou assimilado. A sequência do tempo é: acaba de cometer, logo após, logo depois.",
      },
      {
        termo: "Presumido em detalhe",
        faz: "A pessoa é encontrada logo depois com instrumentos, armas, objetos ou papéis que façam presumir que é autora (art. 302, IV). Não há perseguição: ela é achada.",
      },
      {
        termo: "Criança e adolescente",
        faz: "Não há prisão em flagrante de menor de 18 anos. Criança (até 12 anos incompletos) recebe medidas de proteção, com o Conselho Tutelar. Adolescente é apreendido em flagrante de ato infracional, pelas regras do ECA.",
      },
      {
        parte: "20. Quem não pode ser preso em flagrante",
        termo: "Presidente da República",
        faz: "Não pode ser preso enquanto não houver sentença condenatória nas infrações comuns (CF, art. 86, § 3º). Nem em flagrante.",
      },
      {
        termo: "Juízes e membros do MP",
        faz: "Só são presos em flagrante de crime inafiançável. A autoridade apresenta o preso na hora ao presidente do tribunal ou ao chefe do MP.",
      },
      {
        termo: "Parlamentares",
        faz: "Deputados federais e senadores, desde a diplomação, só são presos em flagrante de crime inafiançável. Os autos vão em 24 horas à Casa, que decide sobre a prisão pelo voto da maioria (CF, art. 53, § 2º). Deputados estaduais e distritais têm a mesma regra (CF, arts. 27, § 1º, e 32, § 3º).",
        pista: "Vereador não tem essa imunidade: pode ser preso em flagrante normalmente.",
      },
      {
        termo: "Advogado",
        faz: "Por motivo ligado ao exercício da profissão, só é preso em flagrante de crime inafiançável, com a presença de representante da OAB (Estatuto da OAB, art. 7º, IV e § 3º).",
      },
      {
        termo: "Diplomatas",
        faz: "Agentes diplomáticos e chefes de Estado estrangeiros têm imunidade: não são presos, por tratados internacionais (CPP, art. 1º, I).",
      },
      {
        termo: "Apresentação espontânea",
        faz: "Quem se apresenta sozinho à polícia não é preso em flagrante: o auto pressupõe preso apresentado por um condutor (art. 304). Mas o juiz pode decretar a preventiva, se couber.",
      },
      {
        termo: "Menor potencial ofensivo",
        faz: "Não se lavra auto de flagrante nem se exige fiança se o autor for logo ao Juizado ou se comprometer a ir. Se recusar, lavra-se o auto (Lei 9.099, art. 69, parágrafo único).",
      },
      {
        termo: "Usuário de drogas",
        faz: "Na posse para consumo pessoal (Lei 11.343, art. 28), nunca há prisão em flagrante, aceite ou não o compromisso de ir ao juízo: lavra-se termo circunstanciado (art. 48, § 2º).",
      },
      {
        termo: "Trânsito e Juizado",
        faz: "Condutor que presta pronto e integral socorro à vítima não é preso em flagrante nem paga fiança (CTB, art. 301). Autor de menor potencial que vai ou se compromete a ir ao Juizado também não (Lei 9.099, art. 69).",
      },
      {
        termo: "O que ainda pode acontecer",
        faz: "Nesses casos, a captura e a condução até a autoridade podem acontecer. O que não há é a lavratura do auto e o recolhimento à prisão.",
      },
      {
        parte: "21. Flagrante por tipo de crime e modalidades",
        termo: "Crime habitual",
        faz: "Exige repetição de atos, como o exercício ilegal da medicina. O tema é controvertido, mas para a maioria não cabe flagrante, porque um ato isolado não prova a habitualidade.",
      },
      {
        termo: "Permanente e continuado",
        faz: "No crime permanente, como o sequestro, cabe flagrante a qualquer momento enquanto durar (art. 303). No crime continuado, cabe flagrante em qualquer um dos crimes da série.",
      },
      {
        termo: "Esperado x preparado",
        faz: "Esperado: a polícia só aguarda, e é válido. Preparado: a polícia provoca o crime e impede a consumação, e não há crime (Súmula 145 do STF).",
      },
      {
        termo: "Agente disfarçado",
        faz: "Na Lei de Drogas, é crime vender ou entregar droga a policial disfarçado, quando houver elementos probatórios razoáveis de conduta criminal preexistente (art. 33, § 1º, IV, Lei 13.964/2019). O Estatuto do Desarmamento tem regra igual para armas (arts. 17, § 2º, e 18, parágrafo único).",
      },
      {
        termo: "Tráfico já consumado",
        faz: "Ter em depósito e trazer consigo são formas permanentes do tráfico. Se a droga já estava guardada antes da provocação, o crime já estava consumado, e o flagrante é válido (STJ).",
      },
      {
        termo: "Flagrante forjado",
        faz: "A polícia ou alguém planta provas, como droga ou arma, em quem não cometeu crime. É ilegal e é crime de quem forja.",
      },
      {
        termo: "Flagrante diferido",
        faz: "Também chamado retardado ou ação controlada: a polícia adia a prisão para colher mais provas. Em organização criminosa, basta comunicar antes ao juiz (Lei 12.850, art. 8º). Na Lei de Drogas, exige autorização judicial, ouvido o MP (art. 53, II).",
        pista: "Para o STJ, a falta dessa autorização não torna ilegal o flagrante adiado.",
      },
      {
        termo: "Denúncia anônima e flagrante",
        faz: "Se a polícia recebe denúncia anônima e só aguarda o crime acontecer, o flagrante é esperado e válido (STJ).",
      },
      {
        parte: "22. Auto de prisão em flagrante",
        termo: "Auto de prisão em flagrante",
        faz: "Ouve condutor, testemunhas e preso. Sem testemunhas do fato, assinam duas que viram a apresentação. Em 24 horas, auto ao juiz e nota de culpa ao preso (arts. 304 e 306).",
      },
      {
        termo: "Ordem do auto",
        faz: "Primeiro o condutor, que assina e recebe cópia do termo e recibo de entrega do preso. Depois as testemunhas que vieram com ele e, se possível, a vítima. Por último, o interrogatório do preso. Cada um assina após falar (art. 304).",
      },
      {
        termo: "Recolhimento",
        faz: "Se das respostas resultar fundada suspeita contra o conduzido, a autoridade manda recolhê-lo à prisão, salvo se ele prestar fiança (art. 304, § 1º). Sem fundada suspeita, o delegado não recolhe, e pode soltar quem foi conduzido de forma ilegal.",
        pista: "O delegado só concede fiança em infração com pena máxima de até 4 anos (art. 322).",
      },
      {
        termo: "Escrivão ad hoc",
        faz: "Sem escrivão, ou se ele estiver impedido, qualquer pessoa designada pela autoridade lavra o auto, depois de prestar compromisso (art. 305).",
      },
      {
        termo: "Recusa em assinar",
        faz: "Se o preso se recusar, não souber ou não puder assinar, o auto é assinado por duas testemunhas que ouviram a leitura na presença dele (art. 304, § 3º).",
      },
      {
        termo: "Filhos do preso",
        faz: "O auto informa se o preso tem filhos, as idades, se algum tem deficiência e o nome e contato de quem cuida deles (art. 304, § 4º).",
      },
      {
        termo: "Crime diante da autoridade",
        faz: "Se o crime é cometido na presença da autoridade, ou contra ela no exercício da função, o auto narra o fato, a voz de prisão, as declarações do preso e os depoimentos. Até o juiz pode lavrar o auto nesse caso (art. 307).",
      },
      {
        termo: "Autoridade mais próxima",
        faz: "Sem autoridade no lugar da prisão, o preso é apresentado à do lugar mais próximo (art. 308). O art. 309, sobre quem se livra solto, perdeu o sentido depois da Lei 12.403/2011.",
      },
      {
        termo: "Comunicações da prisão",
        faz: "A prisão e o local são comunicados na hora ao juiz, ao MP e à família do preso ou à pessoa que ele indicar (art. 306). Em até 24 horas, o auto vai ao juiz e, se o preso não indicar advogado, cópia integral vai à Defensoria (§ 1º).",
      },
      {
        termo: "Nota de culpa",
        faz: "Entregue ao preso em até 24 horas, mediante recibo, assinada pela autoridade, com o motivo da prisão e os nomes do condutor e das testemunhas (art. 306, § 2º).",
      },
      {
        termo: "Julgados sobre o auto",
        faz: "Para o STJ, o laudo toxicológico definitivo não é necessário para o auto de flagrante: basta o laudo de constatação (Lei 11.343, art. 50, § 1º). A falta de advogado na lavratura só anula se foi negada ao preso a chance de chamá-lo.",
      },
      {
        parte: "23. Audiência de custódia",
        termo: "Audiência de custódia",
        faz: "Em até 24 horas, por videoconferência em tempo real, desde a Lei 15.358/2026. O juiz relaxa, converte em preventiva ou concede liberdade provisória (art. 310).",
        pista: "Com excludente de ilicitude aparente, liberdade provisória com termo de comparecimento.",
      },
      {
        termo: "Para que serve",
        faz: "O juiz verifica se a prisão foi legal e se houve maus-tratos ou tortura. Participam o preso, seu advogado ou a Defensoria e o MP.",
      },
      {
        termo: "Origem",
        faz: "A Convenção Americana de Direitos Humanos manda levar o preso sem demora à presença de um juiz (art. 7.5). O CNJ regulamentou a audiência na Resolução 213/2015.",
      },
      {
        termo: "Como é feita",
        faz: "O juiz não faz perguntas para produzir prova sobre o mérito do crime. Depois dele, perguntam o MP e a defesa. O preso fica sem algemas, salvo nas exceções da Súmula Vinculante 11.",
      },
      {
        termo: "Toda prisão",
        faz: "Para o STF, a audiência de custódia vale para toda espécie de prisão: em flagrante, cautelar (preventiva ou temporária) e até definitiva.",
      },
      {
        termo: "Relaxar a prisão",
        faz: "Prisão ilegal é relaxada, não se concede liberdade provisória. A ilegalidade pode ser intrínseca (não havia situação de flagrante) ou extrínseca (o auto não seguiu a forma da lei).",
      },
      {
        termo: "Converter ou soltar",
        faz: "O juiz converte o flagrante em preventiva se presentes os requisitos do art. 312 e se as outras cautelares forem insuficientes. Senão, concede liberdade provisória, com ou sem fiança, podendo impor outras medidas.",
      },
      {
        termo: "Excludente aparente",
        faz: "Se o auto mostrar que o fato foi cometido em estado de necessidade, legítima defesa ou estrito cumprimento do dever legal ou exercício regular de direito, o juiz pode conceder liberdade provisória com termo de comparecimento a todos os atos, sob pena de revogação (art. 310, § 1º).",
      },
      {
        termo: "Liberdade negada",
        faz: "Se o preso for reincidente, integrar organização criminosa armada ou milícia, ou portar arma de fogo de uso restrito, o juiz deve negar a liberdade provisória, com ou sem cautelares (art. 310, § 2º).",
        pista: "A regra é criticada: o STF já derrubou outras proibições automáticas de liberdade, como a do tráfico.",
      },
      {
        termo: "Audiência que não acontece",
        faz: "Quem deu causa, sem motivo idôneo, à falta da audiência no prazo responde administrativa, civil e penalmente (art. 310, § 3º). A lei diz que, passadas 24 horas além do prazo, a prisão se torna ilegal e deve ser relaxada (§ 4º).",
        pista: "O STF deu interpretação conforme ao § 4º: não há relaxamento automático; o juiz avalia, por exemplo, a prorrogação excepcional ou a videoconferência.",
      },
      {
        parte: "24. Conversão em preventiva e perfil genético",
        termo: "Sem conversão de ofício",
        faz: "O juiz não converte o flagrante em preventiva sem pedido do MP ou representação do delegado (art. 311; Súmula 676 do STJ). O entendimento antigo, que admitia a conversão de ofício, foi superado.",
      },
      {
        termo: "Critérios para converter",
        faz: "Desde a Lei 15.272/2025, recomendam a conversão: provas de crimes repetidos; violência ou grave ameaça; já ter sido solto em custódia anterior por outro crime, salvo absolvição depois; crime cometido com inquérito ou ação em curso; fuga ou perigo de fuga; e risco à investigação, à instrução ou às provas (art. 310, § 5º).",
        pista: "São critérios que orientam o juiz, não o obrigam. A decisão é fundamentada e examina esses pontos (§ 6º).",
      },
      {
        termo: "Periculosidade",
        faz: "Para a ordem pública, o juiz considera: o modo de agir, como violência repetida ou premeditação; participação em organização criminosa; natureza, quantidade e variedade de drogas, armas ou munições; e fundado receio de novos crimes, inclusive por outros inquéritos e ações em curso (art. 312, § 3º, Lei 15.272/2025).",
      },
      {
        termo: "Perfil genético na custódia",
        faz: "No flagrante por crime com violência ou grave ameaça, contra a dignidade sexual, de agente ligado a organização criminosa armada ou hediondo, o MP ou o delegado deve pedir ao juiz a coleta de material biológico para o perfil genético. Quem decide é o juiz (art. 310-A, Lei 15.272/2025).",
        pista: "A coleta é feita de preferência na audiência de custódia ou em até 10 dias depois, por agente público treinado, respeitando a cadeia de custódia (§§ 1º e 2º).",
      },
      {
        parte: "25. Julgados sobre flagrante",
        termo: "Súmula 145 do STF",
        faz: "Não há crime quando a preparação do flagrante pela polícia torna impossível a sua consumação.",
      },
      {
        termo: "Conversão supera falhas",
        faz: "Para o STJ, com a conversão em preventiva ficam superados o excesso de prazo na comunicação do flagrante, as nulidades do auto e a falta da audiência de custódia: a prisão passa a ter novo título.",
      },
      {
        termo: "Entrada em casa",
        faz: "Crime permanente, sozinho, não autoriza entrar na casa sem mandado. São precisas fundadas razões, justificadas depois, de que há flagrante lá dentro (STF, RE 603.616, Tema 280). Denúncia anônima sem nada mais não justifica a entrada, mesmo que a droga seja achada: é preciso diligência prévia, como campana (STJ).",
      },
      {
        termo: "Guarda municipal",
        faz: "A guarda municipal pode prender em flagrante, como qualquer pessoa (art. 301). Não faz, porém, investigação como polícia (STJ).",
      },
    ],
    cuidado:
      "Muitos materiais ainda descrevem a audiência de custódia presencial. Desde a Lei 15.358/2026, o CPP manda fazê-la por videoconferência em tempo real. Também são novos, de 2025: os critérios para converter o flagrante em preventiva (art. 310, § 5º), o pedido de perfil genético no flagrante (art. 310-A) e o DNA obrigatório no ingresso na prisão por crime sexual (art. 300-A).",
  },
  questoes: [
    {
      topico: "Inquérito policial",
      subassunto: "Ação condicionada à representação",
      dificuldade: 4,
      raciocinio: "Na ação condicionada, a vontade da vítima vem antes da investigação.",
      enunciado:
        "Um caminhoneiro é ameaçado de morte por outro motorista em um posto de combustível. O caso chega ao delegado, mas o caminhoneiro ainda não decidiu se quer ver o autor processado. Quanto à instauração do inquérito, o delegado",
      alternativas: [
        "não pode instaurá-lo sem a representação do caminhoneiro",
        "pode instaurá-lo de ofício e colher a representação depois",
        "pode instaurá-lo, se o MP requisitar, mesmo sem representação",
        "só pode instaurá-lo se a vítima oferecer queixa-crime",
        "deve instaurá-lo de ofício, por ser crime contra a pessoa",
      ],
      correta: 0,
      explicacao:
        "A ameaça contra a vítima do caso é crime de ação pública condicionada à representação (art. 147 do CP). O art. 5º, § 4º, do CPP diz que, nesses crimes, o inquérito não pode ser iniciado sem a representação.",
      explicacaoErradas:
        "“De ofício e colher depois” contraria o § 4º. “Se o MP requisitar” não supre a falta da representação. “Queixa-crime” é peça da ação privada. “Crime contra a pessoa” não torna a ação incondicionada.",
      pegadinha: "A requisição do MP não substitui a vontade da vítima.",
      conhecimento:
        "Na ameaça contra a mulher por razões da condição do sexo feminino, a ação é pública incondicionada (art. 147, §§ 1º e 2º, do CP).",
    },
    {
      topico: "Medidas cautelares",
      subassunto: "Decretação de ofício",
      dificuldade: 5,
      raciocinio: "Desde 2019, o juiz não age sem provocação nas cautelares.",
      enunciado:
        "Durante o inquérito, sem pedido do MP nem representação do delegado, o juiz proíbe o investigado de se ausentar da comarca, por entender que há risco de fuga. Segundo o CPP, essa decisão",
      alternativas: [
        "é válida, pois o juiz pode decretar cautelares de ofício a qualquer tempo",
        "é válida no inquérito, mas seria inválida no curso da ação penal",
        "passa a ser válida se o MP concordar depois e ratificar o ato",
        "é inválida, pois exige pedido das partes ou representação policial",
        "é inválida só porque a cautelar diversa pressupõe prisão anterior",
      ],
      correta: 3,
      explicacao:
        "O art. 282, § 2º, com a redação da Lei 13.964/2019, diz que as medidas cautelares serão decretadas pelo juiz a requerimento das partes ou, na investigação, por representação da autoridade policial ou requerimento do MP. A lei retirou a possibilidade de decretação de ofício.",
      explicacaoErradas:
        "“De ofício a qualquer tempo” repete uma regra revogada. “Válida no inquérito” inverte até a regra antiga, que só permitia de ofício no processo. “Ratificar depois” não está na lei. “Prisão anterior” não é requisito das cautelares diversas.",
      pegadinha: "A antiga permissão de agir de ofício no processo também caiu em 2019.",
      conhecimento:
        "Salvo urgência ou perigo de ineficácia, o juiz intima a parte contrária para se manifestar em 5 dias antes de decidir (art. 282, § 3º).",
    },
    {
      topico: "Inquérito policial",
      subassunto: "Prazo com investigado preso",
      dificuldade: 5,
      raciocinio: "O termo inicial muda quando a prisão acontece no meio do inquérito.",
      enunciado:
        "Um inquérito tramita com o investigado solto. No 12º dia, ele é preso preventivamente. Pela regra geral do CPP, o prazo para concluir o inquérito passa a ser de",
      alternativas: [
        "30 dias, contados da instauração do inquérito",
        "18 dias, que ainda restavam do prazo inicial de 30 dias",
        "10 dias, contados da instauração do inquérito",
        "15 dias, contados da data da decisão do juiz",
        "10 dias, contados do dia em que a prisão foi feita",
      ],
      correta: 4,
      explicacao:
        "O art. 10 do CPP fixa 10 dias se o indiciado estiver preso em flagrante ou preventivamente, contado o prazo, na preventiva, a partir do dia em que se executar a ordem de prisão. Com o investigado solto, o prazo é de 30 dias.",
      explicacaoErradas:
        "“30 dias” é o prazo do investigado solto. “18 dias que restavam” desconta um prazo que deixou de valer. “Contados da instauração” erra o termo inicial e faria o prazo já ter vencido. “Da decisão do juiz” troca a execução da prisão pela data da ordem.",
      pegadinha: "Conta-se da execução da ordem de prisão, não da decisão.",
      conhecimento:
        "Na Lei de Drogas, o prazo é de 30 dias com o investigado preso e 90 dias se solto, podendo ser duplicado (art. 51 da Lei 11.343/2006).",
    },
    {
      topico: "Inquérito policial",
      subassunto: "Força letal e defensor",
      dificuldade: 5,
      raciocinio: "O CPP tem regra própria para agentes de segurança.",
      enunciado:
        "Um policial rodoviário federal passa a ser investigado por ter usado arma de fogo em serviço, com resultado morte, numa ocorrência em que alega legítima defesa. Segundo o art. 14-A do CPP, ele",
      alternativas: [
        "não tem direito a defensor, pois o inquérito é inquisitivo",
        "é citado e pode constituir defensor em até 48 horas",
        "só pode constituir defensor depois de indiciado",
        "tem 10 dias para constituir defensor, sob pena de revelia",
        "é defendido pela instituição desde a instauração, sem escolha",
      ],
      correta: 1,
      explicacao:
        "O art. 14-A vale para servidores das instituições do art. 144 da CF investigados por uso da força letal no exercício da profissão, inclusive nas excludentes do art. 23 do CP. O investigado é citado da instauração e pode constituir defensor em até 48 horas. Se não o fizer, a instituição é intimada para indicar defensor em 48 horas.",
      explicacaoErradas:
        "“Não tem direito a defensor” contraria o próprio art. 14-A. “Depois de indiciado” atrasa um direito que nasce com a citação da instauração. “10 dias” e “revelia” não existem nesse procedimento. “Sem escolha” erra: a instituição só indica se ele não constituir defensor.",
      pegadinha: "A indicação pela instituição é subsidiária, depois das 48 horas.",
      conhecimento:
        "A PRF está no art. 144 da Constituição, ao lado da PF, da PFF e das polícias civis, militares e penais.",
    },
    {
      topico: "Inquérito policial",
      subassunto: "Acesso do defensor",
      dificuldade: 4,
      raciocinio: "A súmula separa o que já foi documentado do que está em curso.",
      enunciado:
        "Durante um inquérito sob sigilo, o advogado do investigado pede acesso aos autos, inclusive a uma interceptação telefônica ainda em andamento. Segundo a Súmula Vinculante 14, o defensor",
      alternativas: [
        "não tem acesso a nada até o relatório final, por causa do sigilo",
        "tem acesso a tudo, inclusive às diligências ainda em andamento",
        "acessa o que já está documentado, mas não a diligência em curso",
        "só tem acesso se o MP concordar com o pedido de vista",
        "não tem acesso, pois só o investigado pessoalmente pode ver os autos",
      ],
      correta: 2,
      explicacao:
        "A Súmula Vinculante 14 garante ao defensor, no interesse do representado, acesso amplo aos elementos de prova que, já documentados em procedimento investigatório, digam respeito ao exercício do direito de defesa. Diligências em andamento, como uma interceptação em curso, podem ficar fora do acesso até serem documentadas.",
      explicacaoErradas:
        "“Até o relatório final” esvazia a súmula. “Inclusive em andamento” frustraria a própria diligência. “Se o MP concordar” cria condição que a súmula não prevê. “Só o investigado” inverte a súmula, que fala do defensor.",
      pegadinha: "O critério é estar documentado, não o fim do inquérito.",
      conhecimento:
        "O inquérito é sigiloso na medida necessária à elucidação do fato ou exigida pelo interesse da sociedade (art. 20 do CPP).",
    },
    {
      topico: "Prisão",
      subassunto: "Algemas",
      dificuldade: 4,
      raciocinio: "A súmula exige motivo concreto e registro por escrito.",
      enunciado:
        "Na prisão em flagrante de um condutor em uma rodovia, os policiais decidem usar algemas. Segundo a Súmula Vinculante 11, o uso de algemas",
      alternativas: [
        "é sempre lícito na prisão em flagrante, por ser ato de força legítima do Estado",
        "depende de autorização judicial prévia, mesmo na prisão em flagrante",
        "é vedado a quem não tenha oferecido resistência física",
        "é lícito com resistência, receio de fuga ou perigo, justificado por escrito",
        "exige só justificativa verbal no momento da prisão",
      ],
      correta: 3,
      explicacao:
        "A Súmula Vinculante 11 só admite algemas em caso de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, com a excepcionalidade justificada por escrito. O descumprimento gera responsabilidade do agente e nulidade da prisão ou do ato.",
      explicacaoErradas:
        "“Sempre lícito” ignora o caráter excepcional. “Autorização judicial prévia” não é exigida. “Vedado sem resistência” esquece o receio de fuga e o perigo, que também autorizam. “Justificativa verbal” contraria a exigência de forma escrita.",
      pegadinha: "Não basta motivo: é preciso registrá-lo por escrito.",
      conhecimento:
        "O CPP proíbe algemas em mulheres grávidas durante os atos preparatórios do parto e o trabalho de parto, e no puerpério imediato (art. 292, parágrafo único).",
    },
    {
      topico: "Prisão em flagrante",
      subassunto: "Flagrante impróprio",
      dificuldade: 5,
      raciocinio: "O que importa é a perseguição começar logo após e não ser interrompida.",
      enunciado:
        "Logo após um roubo a um ônibus, a PRF passa a perseguir o autor, que foge por estradas vicinais. A perseguição dura cinco horas, sem interrupção, e termina com a captura. O autor não leva consigo nenhum objeto do crime. Nesse caso, há",
      alternativas: [
        "flagrante impróprio, pois a perseguição começou logo após e não parou",
        "flagrante presumido, pois o autor foi encontrado logo depois do crime",
        "flagrante próprio, pois o autor tinha acabado de cometer o crime",
        "prisão ilegal, pois o flagrante termina quando a perseguição passa de uma hora",
        "prisão possível só por mandado, pois o autor já não cometia o crime",
      ],
      correta: 0,
      explicacao:
        "O art. 302, III, considera em flagrante quem é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração. A lei não limita a duração da perseguição: basta que comece logo após e não seja interrompida (art. 290, § 1º).",
      explicacaoErradas:
        "“Presumido” exige ser encontrado com instrumentos, armas ou objetos do crime, o que não houve. “Próprio” é o de quem está cometendo ou acabou de cometer, e ele já tinha fugido. “Mais de uma hora” cria limite que não existe. “Só por mandado” ignora o flagrante impróprio.",
      pegadinha: "Não há prazo em horas para a perseguição, desde que ela seja contínua.",
      conhecimento:
        "Se a perseguição passar para outro município, a prisão é feita onde o perseguido for alcançado, e ele é apresentado à autoridade local (art. 290).",
    },
    {
      topico: "Prisão em flagrante",
      subassunto: "Crime permanente",
      dificuldade: 4,
      raciocinio: "Em alguns crimes, a consumação se prolonga no tempo.",
      enunciado:
        "Numa abordagem de rotina, a PRF encontra no porta-malas de um carro uma pessoa sequestrada há três dias, mantida presa pelos ocupantes do veículo. Quanto à prisão dos ocupantes,",
      alternativas: [
        "não cabe flagrante, pois o sequestro começou três dias antes",
        "cabe flagrante presumido, pelo encontro com a vítima",
        "só cabe flagrante se a vítima pedir socorro aos policiais",
        "cabe flagrante esperado, que exige autorização judicial",
        "há flagrante, pois a permanência do crime ainda não cessou",
      ],
      correta: 4,
      explicacao:
        "O sequestro é crime permanente: a consumação se prolonga enquanto a vítima é privada da liberdade. O art. 303 do CPP diz que, nas infrações permanentes, o agente está em flagrante enquanto não cessar a permanência.",
      explicacaoErradas:
        "“Começou três dias antes” ignora que o crime continua acontecendo. “Presumido” é o do inciso IV, que fala em objetos e armas, não é o caso. “Se a vítima pedir socorro” cria condição inexistente. “Flagrante esperado” não exige autorização judicial e não descreve o caso.",
      pegadinha: "No crime permanente, o flagrante dura tanto quanto o crime.",
      conhecimento:
        "Em crime permanente, a CF permite entrar na casa sem mandado, a qualquer hora, porque há flagrante (art. 5º, XI).",
    },
    {
      topico: "Prisão em flagrante",
      subassunto: "Flagrante esperado",
      dificuldade: 4,
      raciocinio: "Pergunte se a polícia provocou o crime ou só o aguardou.",
      enunciado:
        "A PRF recebe informação de que um caminhão com cigarros contrabandeados passará por certo trecho da rodovia. Os policiais montam um ponto de fiscalização, aguardam e prendem o motorista com a carga. Esse flagrante",
      alternativas: [
        "é nulo, pois foi preparado pela polícia, como diz a Súmula 145",
        "é válido, pois a polícia só aguardou, sem provocar o crime",
        "é válido só se houver autorização judicial dada antes da operação",
        "é forjado, pois a polícia sabia do crime antes de ele ocorrer",
        "é ação controlada, que exige comunicação prévia ao juiz",
      ],
      correta: 1,
      explicacao:
        "No flagrante esperado, a polícia sabe do crime e apenas aguarda o momento de agir, sem induzir ninguém. É válido. A Súmula 145 do STF trata do flagrante preparado, em que a polícia provoca o crime e torna impossível a consumação.",
      explicacaoErradas:
        "“Preparado” exigiria que a polícia induzisse o motorista. “Autorização judicial” não é necessária no flagrante esperado. “Forjado” é o flagrante com provas plantadas, crime da própria polícia. “Ação controlada” é retardar a intervenção para colher mais provas, o que não houve.",
      pegadinha: "Saber antes não é provocar.",
      conhecimento:
        "Na Lei de Organizações Criminosas, a ação controlada é comunicada previamente ao juiz (art. 8º, § 1º, da Lei 12.850/2013).",
    },
    {
      topico: "Prisão em flagrante",
      subassunto: "Auto sem testemunhas do fato",
      dificuldade: 4,
      raciocinio: "A lei resolve a falta de testemunhas com outras assinaturas.",
      enunciado:
        "À noite, um policial prende em flagrante, sozinho, um motorista que transportava drogas. Ninguém mais viu o fato. Sobre o auto de prisão em flagrante, segundo o CPP, a falta de testemunhas",
      alternativas: [
        "impede o auto, e o preso deve ser solto de imediato pela autoridade",
        "não o impede, e assinam duas pessoas que viram a apresentação",
        "não o impede, e o condutor assina sozinho como testemunha",
        "impede o auto, salvo se o preso confessar o crime",
        "não o impede, mas só policiais podem assinar como testemunhas",
      ],
      correta: 1,
      explicacao:
        "O art. 304, § 2º, diz que a falta de testemunhas da infração não impede o auto de prisão em flagrante. Nesse caso, com o condutor, devem assiná-lo pelo menos duas pessoas que tenham testemunhado a apresentação do preso à autoridade.",
      explicacaoErradas:
        "“Impede o auto” contraria o § 2º. “O condutor assina sozinho” esquece as duas testemunhas da apresentação. “Se o preso confessar” cria condição inexistente. “Só policiais” restringe o que a lei deixa aberto.",
      pegadinha: "Testemunhas da apresentação substituem as testemunhas do fato.",
      conhecimento:
        "Em até 24 horas, o preso recebe a nota de culpa, com o motivo da prisão e os nomes do condutor e das testemunhas (art. 306, § 2º).",
    },
    {
      topico: "Prisão em flagrante",
      subassunto: "Socorro à vítima no trânsito",
      dificuldade: 4,
      raciocinio: "O CTB premia quem socorre a vítima.",
      enunciado:
        "Um motorista atropela um ciclista na rodovia por imprudência, para logo em seguida, presta pronto e integral socorro e espera a PRF. Não há outro crime além da lesão culposa. Segundo o CTB, o motorista",
      alternativas: [
        "é preso em flagrante, mas é solto sem fiança após o auto",
        "pode ser preso em flagrante, com fiança obrigatória",
        "só fica livre do flagrante se a vítima não tiver lesão grave",
        "não é preso em flagrante, e não se exige fiança dele",
        "pode ser preso, salvo se a vítima não quiser representar",
      ],
      correta: 3,
      explicacao:
        "O art. 301 do CTB diz que, nos sinistros de trânsito com vítima, não se imporá a prisão em flagrante nem se exigirá fiança do condutor que prestar pronto e integral socorro à vítima.",
      explicacaoErradas:
        "“Solto após o auto” e “fiança obrigatória” contrariam a dupla vedação do art. 301. “Lesão grave” cria distinção que a lei não faz. “Se a vítima não quiser representar” mistura a condição da ação com a regra da prisão.",
      pegadinha: "O benefício é duplo: sem flagrante e sem fiança.",
      conhecimento:
        "Na infração de menor potencial ofensivo, quem é levado ao Juizado ou se compromete a comparecer também não é preso em flagrante (art. 69, parágrafo único, da Lei 9.099/1995).",
    },
    {
      topico: "Audiência de custódia",
      subassunto: "Forma e prazo",
      dificuldade: 5,
      raciocinio: "A lei de 2026 mudou o modo de fazer a audiência.",
      enunciado:
        "Após uma prisão em flagrante feita pela PRF, o auto é enviado ao juiz. Pelo texto atual do art. 310 do CPP, com a redação da Lei 15.358/2026, a audiência de custódia",
      alternativas: [
        "ocorre em até 72 horas, presencialmente, diante do juiz competente",
        "só ocorre se a defesa pedir, no prazo de 24 horas",
        "é dispensada quando o preso tiver advogado constituído",
        "ocorre em até 24 horas, só presencialmente, vedado o vídeo",
        "ocorre em até 24 horas, por videoconferência em tempo real",
      ],
      correta: 4,
      explicacao:
        "O caput do art. 310, com a redação da Lei 15.358/2026, manda o juiz promover a audiência de custódia no prazo máximo de 24 horas após a prisão, por meio de videoconferência em tempo real, com o preso, o defensor e o MP. A lei garante a entrevista prévia e reservada com o defensor e a intervenção da defesa e do MP durante a audiência.",
      explicacaoErradas:
        "“72 horas” não é o prazo legal. “Se a defesa pedir” erra: a audiência é obrigatória. “Advogado constituído” não dispensa a audiência. “Vedado o vídeo” era a ideia de muitos materiais antigos, mas o texto atual prevê videoconferência.",
      pegadinha: "Livros e apostilas anteriores a 2026 falam em audiência presencial.",
      conhecimento:
        "Antes da audiência, a serventia confere se há citação pendente em outros processos do preso, para que ele seja citado pessoalmente (art. 310, § 7º).",
    },
    {
      topico: "Audiência de custódia",
      subassunto: "Excludente de ilicitude",
      dificuldade: 5,
      raciocinio: "A lei dá uma saída própria quando o auto mostra excludente.",
      enunciado:
        "Um motorista reage a um assalto na rodovia e mata o assaltante. Pelo auto de prisão em flagrante, o juiz verifica que ele agiu em legítima defesa. Segundo o art. 310, § 1º, do CPP, o juiz",
      alternativas: [
        "pode conceder liberdade provisória com termo de comparecimento",
        "deve relaxar a prisão, pois toda excludente torna o flagrante ilegal",
        "deve converter a prisão em preventiva, por ter havido morte",
        "deve arquivar o inquérito na própria audiência de custódia",
        "deve conceder liberdade provisória mediante fiança obrigatória",
      ],
      correta: 0,
      explicacao:
        "O art. 310, § 1º, permite ao juiz, se o auto mostrar que o agente agiu em estado de necessidade, legítima defesa ou estrito cumprimento do dever legal ou exercício regular de direito, conceder liberdade provisória, mediante termo de comparecimento obrigatório a todos os atos do processo, sob pena de revogação.",
      explicacaoErradas:
        "“Relaxar a prisão” é para prisão ilegal, e o flagrante em si foi legal. “Converter em preventiva” ignora a regra própria das excludentes. “Arquivar na audiência” não cabe ao juiz da custódia. “Fiança obrigatória” troca o termo de comparecimento por fiança.",
      pegadinha: "Legítima defesa aparente não torna o flagrante ilegal; dá liberdade com compromisso.",
      conhecimento:
        "Reincidência, integrar organização criminosa armada ou milícia e portar arma de uso restrito levam o juiz a negar a liberdade provisória (art. 310, § 2º).",
    },
  ],
};
