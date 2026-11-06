import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-01",
  resumo: {
    ideia:
      "Toda norma da Constituição produz algum efeito: o que muda é quanto ela depende de lei. A aula também mostra quem cria a Constituição, quem pode mudá-la e onde cada norma fica na pirâmide.",
    itens: [
      {
        termo: "Eficácia plena",
        faz: "Funciona sozinha desde a promulgação, e a lei não pode reduzir o alcance dela.",
        pista: "Art. 2º: os três Poderes.",
      },
      {
        termo: "Eficácia contida",
        faz: "Também funciona sozinha, mas a lei, outra norma da CF ou um conceito aberto podem restringi-la.",
        pista: "Art. 5º, XIII: profissão, atendidas as qualificações da lei.",
      },
      {
        termo: "Eficácia limitada",
        faz: "Precisa de lei para produzir todos os efeitos. Divide-se em institutiva e programática.",
        pista: "Já revoga o que a contraria e vincula o legislador.",
      },
      {
        termo: "Maria Helena Diniz",
        faz: "Absoluta (cláusulas pétreas), plena, relativa restringível (contida) e relativa complementável (limitada).",
      },
      {
        termo: "Topo da pirâmide",
        faz: "CF, emendas e tratados de direitos humanos aprovados como emenda.",
        pista: "Art. 5º, § 3º: 2 turnos, 3/5, nas duas Casas.",
      },
      {
        termo: "Abaixo da CF",
        faz: "Tratados de direitos humanos pelo rito comum são supralegais. Depois vêm leis, MPs e decretos autônomos.",
      },
      {
        termo: "Poder originário",
        faz: "Cria a Constituição: inicial, ilimitado, autônomo, incondicionado, permanente e político.",
        pista: "O titular é o povo.",
      },
      {
        termo: "Poder derivado",
        faz: "Reformador (emendas), decorrente (constituições estaduais) e revisor (art. 3º do ADCT, uma vez só).",
      },
      {
        termo: "Poder difuso",
        faz: "Muda o sentido da norma sem mudar o texto. É a mutação constitucional.",
      },
    ],
    cuidado:
      "Não troque os motivos: o poder originário é inicial porque inaugura a ordem, e ilimitado porque não se prende ao direito anterior.",
  },
  questoes: [
    {
      topico: "Aplicabilidade das normas",
      subassunto: "Eficácia contida",
      dificuldade: 4,
      raciocinio:
        "Pergunte o que acontece antes da lei: se o direito já existe por inteiro, a lei só pode cortar.",
      enunciado:
        "A CF assegura o livre exercício de qualquer trabalho, atendidas as qualificações que a lei estabelecer. Antes da lei de uma profissão, qualquer pessoa pode exercê-la. Depois dela, só quem cumpre os requisitos. Esse dispositivo é norma de eficácia",
      alternativas: [
        "limitada, pois só produz efeitos depois da lei regulamentadora",
        "plena, pois a lei nunca pode reduzir aquilo que a própria CF já assegurou",
        "contida, pois nasce com efeitos completos, e a lei pode restringi-los",
        "exaurida, pois o seu comando já se cumpriu de uma vez",
        "limitada programática, por traçar uma meta para o Estado",
      ],
      correta: 2,
      explicacao:
        "A norma de eficácia contida é autoaplicável e produz todos os efeitos desde a promulgação, mas admite restrição. É o caso do art. 5º, XIII: sem lei, a profissão é livre. Com a lei, passa a depender das qualificações.",
      explicacaoErradas:
        "“Só produz efeitos depois da lei” descreve a limitada e nega a liberdade anterior à lei. “Nunca pode reduzir” descreve a plena. “Exaurida” serve a normas que já cumpriram sua função, como as do ADCT. “Meta para o Estado” é a norma programática.",
      pegadinha:
        "Na contida, a lei restringe. Na limitada, a lei completa.",
      conhecimento:
        "A restrição também pode vir de outra norma da CF, como no estado de sítio, ou de conceito aberto, como “iminente perigo público”.",
    },
    {
      topico: "Aplicabilidade das normas",
      subassunto: "Efeitos da norma limitada",
      dificuldade: 5,
      raciocinio:
        "Aplicabilidade reduzida não é ausência de eficácia jurídica.",
      enunciado:
        "Uma norma de eficácia limitada da CF ainda não foi regulamentada. Um deputado afirma que, enquanto a lei não vier, ela não produz efeito nenhum. A afirmação está errada, porque desde a promulgação essa norma",
      alternativas: [
        "revoga o que a contraria e serve de parâmetro no controle de leis",
        "produz todos os seus efeitos, e a futura lei só detalha a aplicação",
        "pode ser aplicada pelo juiz a qualquer caso, como se fosse norma plena",
        "obriga o Congresso a votar a lei no prazo geral de um ano da promulgação",
        "autoriza o Presidente a suprir a falta da lei por decreto autônomo",
      ],
      correta: 0,
      explicacao:
        "A norma limitada produz de imediato o efeito negativo, que revoga disposições contrárias e impede leis opostas, servindo de parâmetro de constitucionalidade. Produz também o efeito vinculativo: o legislador deve regulamentá-la, sob pena de omissão inconstitucional.",
      explicacaoErradas:
        "“Todos os seus efeitos” descreve a plena. “Como se fosse norma plena” apaga a dependência da lei. “Prazo geral de um ano” não existe na CF. “Decreto autônomo” só cabe nas hipóteses do art. 84, VI, e não supre a lei.",
      pegadinha:
        "Quem diz que a norma limitada não tem eficácia jurídica erra: ela tem eficácia mínima.",
      conhecimento:
        "A omissão pode ser atacada por mandado de injunção ou por ação direta de inconstitucionalidade por omissão.",
    },
    {
      topico: "Aplicabilidade das normas",
      subassunto: "Institutivas: impositivas e facultativas",
      dificuldade: 5,
      raciocinio:
        "“Disporá” é ordem. “Poderá” é faculdade.",
      enunciado:
        "Compare dois dispositivos: “a lei disporá sobre a criação e extinção de Ministérios” e “a lei estadual poderá criar a Justiça Militar estadual”. Na classificação de José Afonso da Silva, as duas normas são de eficácia limitada",
      alternativas: [
        "programáticas, pois as duas traçam metas sociais para o Estado",
        "institutivas, e as duas impõem ao legislador o dever de editar a lei",
        "institutivas, sendo a primeira facultativa e a segunda impositiva",
        "programáticas, e as duas deixam a matéria à escolha do legislador",
        "institutivas, sendo a primeira impositiva e a segunda facultativa",
      ],
      correta: 4,
      explicacao:
        "As duas preveem a criação de órgãos, então são institutivas ou organizativas. A primeira impõe a lei (“disporá”), e a segunda só abre uma faculdade ao legislador estadual (“poderá”).",
      explicacaoErradas:
        "“Metas sociais” é a marca das programáticas, e aqui se criam órgãos. “Impõem ao legislador” ignora o “poderá” do segundo dispositivo. “Primeira facultativa e a segunda impositiva” inverte as duas. “À escolha do legislador” erra o grupo e ignora o “disporá”.",
      pegadinha:
        "As duas opções mais parecidas diferem só na ordem: leia a palavra que está ligada a cada dispositivo.",
      conhecimento:
        "O art. 125, § 3º, exige proposta do Tribunal de Justiça para a lei estadual que crie a Justiça Militar estadual.",
    },
    {
      topico: "Aplicabilidade das normas",
      subassunto: "Classificação de Maria Helena Diniz",
      dificuldade: 5,
      raciocinio:
        "A palavra “absoluta” pertence às normas que nem a emenda pode abolir.",
      enunciado:
        "Na classificação de Maria Helena Diniz, as normas que não podem ser suprimidas por emenda à Constituição, como as do art. 60, § 4º, têm eficácia",
      alternativas: [
        "plena, por dispensarem lei e terem aplicação imediata",
        "absoluta, e nem a emenda tem força para aboli-las",
        "relativa restringível, por admitirem o corte por lei",
        "relativa complementável, por dependerem de uma lei",
        "exaurida, pois se esgotaram com a promulgação da CF",
      ],
      correta: 1,
      explicacao:
        "A autora separa as normas de eficácia absoluta, que resistem até à emenda, das plenas, que têm aplicação imediata mas podem ser emendadas. As relativas são a restringível, equivalente à contida, e a complementável, equivalente à limitada.",
      explicacaoErradas:
        "“Plena” aplica-se de imediato, mas pode ser alterada por emenda. “Restringível” corresponde à contida. “Complementável” corresponde à limitada. “Exaurida” é categoria das normas transitórias, não da autora neste ponto.",
      pegadinha:
        "Plena e absoluta têm em comum a aplicação imediata. Só a absoluta resiste à emenda.",
      conhecimento:
        "“Tendente a abolir” proíbe atingir o núcleo da cláusula pétrea, não qualquer mudança de redação.",
    },
    {
      topico: "Hierarquia das normas",
      subassunto: "Tratados de direitos humanos",
      dificuldade: 5,
      raciocinio:
        "O rito de aprovação decide o lugar do tratado.",
      enunciado:
        "Dois tratados de direitos humanos vigoram no Brasil. O primeiro passou pelo rito comum antes de 2004. O segundo foi aprovado, em cada Casa do Congresso, em dois turnos, por três quintos dos votos. Segundo a CF e o STF, eles têm, nessa ordem, status",
      alternativas: [
        "de lei ordinária e de lei complementar",
        "supraconstitucional, nos dois casos, por protegerem a pessoa",
        "de lei ordinária e de norma supralegal, abaixo da emenda",
        "supralegal e de emenda constitucional",
        "supralegal, nos dois casos, pois nenhum tratado iguala a emenda",
      ],
      correta: 3,
      explicacao:
        "O art. 5º, § 3º, incluído pela EC 45/2004, dá equivalência de emenda ao tratado de direitos humanos aprovado por esse rito. Os demais tratados de direitos humanos ficam abaixo da CF e acima das leis, com status supralegal, segundo o STF.",
      explicacaoErradas:
        "“Lei ordinária” é o nível dos tratados comuns, sem relação com direitos humanos. “Lei complementar” não é o nível de nenhum tratado de direitos humanos. “Supraconstitucional” não é aceito pelo STF. “Nenhum tratado iguala a emenda” contraria o art. 5º, § 3º.",
      pegadinha:
        "O tratado não vira emenda por tratar de direitos humanos: precisa do rito do § 3º.",
      conhecimento:
        "Pelo status supralegal do Pacto de San José, a lei que regulava a prisão do depositário infiel perdeu aplicação (SV 25).",
    },
    {
      topico: "Hierarquia das normas",
      subassunto: "Lei complementar e lei ordinária",
      dificuldade: 5,
      raciocinio:
        "Quórum diferente não cria hierarquia: o que separa as duas é a matéria.",
      enunciado:
        "Uma lei complementar tratou de assunto que a CF não reserva a esse tipo de lei. Anos depois, uma lei ordinária revogou esse trecho. Segundo o STF, a revogação é",
      alternativas: [
        "válida, pois o trecho tratava de matéria própria de lei ordinária",
        "inválida, pois a lei complementar está acima da ordinária na hierarquia",
        "inválida, pois só o quórum de maioria absoluta desfaz o que ele aprovou",
        "válida, mas apenas se o Presidente tiver sancionado a nova lei",
        "válida, pois a lei mais nova vence qualquer outra norma da pirâmide",
      ],
      correta: 0,
      explicacao:
        "Não há hierarquia entre lei complementar e lei ordinária: cada uma tem o seu campo. Se a lei complementar invade assunto não reservado, aquele trecho é materialmente ordinário e pode ser revogado por lei ordinária (RE 377.457).",
      explicacaoErradas:
        "“Está acima da ordinária” repete a ideia que o STF recusa. “Só o quórum de maioria absoluta” olha a forma e esquece a matéria. “Se o Presidente tiver sancionado” cria um requisito sem relação com o caso. “Vence qualquer outra norma” ignora a superioridade da CF.",
      pegadinha:
        "A pirâmide coloca as duas leis no mesmo degrau, mesmo com quóruns diferentes.",
      conhecimento:
        "Leis federais, estaduais e municipais também não têm hierarquia entre si: o conflito se resolve pela repartição de competências.",
    },
    {
      topico: "Poder constituinte",
      subassunto: "Características do poder originário",
      dificuldade: 5,
      raciocinio:
        "Cada característica tem o seu motivo. Decore o par, não só a palavra.",
      enunciado:
        "Uma afirmação sobre o poder constituinte originário só está certa se ligar cada característica ao seu motivo. Esse poder é",
      alternativas: [
        "inicial por não sofrer limites do direito anterior, e ilimitado por inaugurar a ordem jurídica",
        "incondicionado por ter de seguir as regras da Constituição que substitui",
        "inicial por inaugurar a ordem jurídica, e ilimitado por não se prender ao direito anterior",
        "autônomo por depender do Congresso, e permanente por agir só uma vez",
        "permanente por se esgotar quando a nova Constituição entra em vigor",
      ],
      correta: 2,
      explicacao:
        "É inicial porque inaugura a ordem jurídica. É ilimitado porque não se sujeita às regras do direito positivo anterior. Também é autônomo, incondicionado, permanente e político.",
      explicacaoErradas:
        "“Inicial por não sofrer limites” troca os dois motivos. “Ter de seguir as regras” nega o incondicionado, que não segue forma prefixada. “Depender do Congresso” descreve o poder derivado. “Se esgotar” contraria o permanente, que continua latente depois da nova CF.",
      pegadinha:
        "As palavras estão certas, mas os motivos estão trocados: é assim que a banca confunde.",
      conhecimento:
        "Para os jusnaturalistas, esse poder encontra limite no direito natural. Para os positivistas, é um poder de fato, ilimitado juridicamente.",
    },
    {
      topico: "Poder constituinte",
      subassunto: "Titular e exercício",
      dificuldade: 4,
      raciocinio:
        "Titular é uma coisa. Quem exerce é outra.",
      enunciado:
        "Um grupo toma o poder e impõe nova Constituição sem consulta popular. Sobre o poder constituinte, nesse caso,",
      alternativas: [
        "o titular passa a ser o grupo, e a forma é a convenção",
        "a Constituição não existe para o direito, por faltar o voto popular",
        "o titular é a nação, e a forma de exercício é a democrática",
        "o titular passa a ser o Estado, e a forma de exercício é a outorga",
        "o titular segue sendo o povo, e a forma de exercício é a outorga",
      ],
      correta: 4,
      explicacao:
        "A leitura moderna da teoria de Sieyès põe o povo como titular do poder constituinte. O exercício pode ser democrático, por convenção, ou autocrático, por outorga, quando usurpadores impõem o texto.",
      explicacaoErradas:
        "“O titular passa a ser o grupo” confunde titular com quem exerce, e “convenção” é a forma democrática. “Não existe para o direito” nega as Constituições outorgadas. “A nação” é a visão original de Sieyès, e o exercício aqui não foi democrático. “Passa a ser o Estado” acerta a forma, mas erra o titular, que segue sendo o povo.",
      pegadinha:
        "Constituição outorgada não muda o titular do poder.",
      conhecimento:
        "Convenção pode ser direta, com participação do povo, ou indireta, por assembleia eleita.",
    },
    {
      topico: "Poder constituinte",
      subassunto: "Decorrente e revisor",
      dificuldade: 5,
      raciocinio:
        "Só quem tem Constituição própria exerce o poder decorrente.",
      enunciado:
        "Um estado reforma a sua Constituição, o DF altera a Lei Orgânica, e um município aprova a própria Lei Orgânica. Para a doutrina majoritária, há poder constituinte decorrente",
      alternativas: [
        "nos três casos, pois todos são entes da Federação brasileira",
        "no estado e no DF, mas não no município",
        "só no estado, pois o DF tem apenas a sua lei distrital comum",
        "no estado e no município, mas não no DF",
        "apenas no município, por estar mais perto do povo que o elege",
      ],
      correta: 1,
      explicacao:
        "O poder decorrente é o dos estados, ao elaborar e reformar suas Constituições. A Lei Orgânica do DF é tratada como equivalente a Constituição. A autonomia municipal, para a doutrina majoritária, não é manifestação desse poder.",
      explicacaoErradas:
        "“Nos três casos” e “no estado e no município” incluem o município, que não tem esse poder. “Lei distrital comum” rebaixa a Lei Orgânica do DF. “Mais perto do povo” inverte a regra.",
      pegadinha:
        "Lei Orgânica existe no DF e no município, mas o peso dela não é o mesmo.",
      conhecimento:
        "A revisão do art. 3º do ADCT exigiu maioria absoluta em sessão unicameral, e não se admite criar uma segunda revisão por emenda.",
    },
    {
      topico: "Poder constituinte",
      subassunto: "Poder difuso e mutação",
      dificuldade: 5,
      raciocinio:
        "Texto igual e sentido novo: é mutação.",
      enunciado:
        "O art. 5º, LXVII, ainda menciona a prisão do depositário infiel, mas a SV 25 considera essa prisão ilícita. O texto ficou igual, e o sentido mudou. Esse fenômeno é chamado de",
      alternativas: [
        "reforma, por emenda aprovada em dois turnos no Congresso Nacional",
        "revisão, feita na sessão unicameral do art. 3º do ADCT",
        "poder decorrente, ligado à autonomia dos estados",
        "mutação constitucional, ligada ao poder constituinte difuso",
        "poder supranacional, que retira a soberania do Brasil",
      ],
      correta: 3,
      explicacao:
        "A mutação é um processo informal e gradual: a interpretação muda sem que o texto seja alterado. A doutrina a liga ao poder constituinte difuso. A prisão do depositário infiel é ilícita porque contraria tratado de direitos humanos de status supralegal.",
      explicacaoErradas:
        "“Reforma” exige emenda, e o texto não mudou. “Revisão” aconteceu uma vez e também altera o texto. “Autonomia dos estados” é o poder decorrente. “Supranacional” é a ideia de uma ordem acima dos Estados, como a da União Europeia.",
      pegadinha:
        "A prisão não virou inconstitucional: ela é ilícita, pois o texto da CF continua lá.",
      conhecimento:
        "Outro exemplo é o reconhecimento da união homoafetiva como entidade familiar na ADI 4.277.",
    },
  ],
};
