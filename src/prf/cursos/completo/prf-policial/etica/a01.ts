import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "etica-01",
  resumo: {
    ideia:
      "Moral é o conjunto de regras de um grupo em certa época. Ética é a reflexão sobre essas regras. A cidadania põe esses valores em prática na vida pública.",
    itens: [
      {
        termo: "Ética",
        faz: "Vem do grego ethos. Estuda e questiona os valores e as regras de conduta.",
      },
      {
        termo: "Moral",
        faz: "Vem do latim mos, mores. São os costumes e as regras de um grupo, e mudam com o tempo e o lugar.",
      },
      {
        termo: "Juízo de fato",
        faz: "Diz como algo é e pode ser verificado.",
        pista: "“A viatura está parada.”",
      },
      {
        termo: "Juízo de valor",
        faz: "Avalia se algo é bom, justo ou correto.",
        pista: "“Parar ali foi errado.”",
      },
      {
        termo: "Aristóteles",
        faz: "A virtude é o meio-termo entre excesso e falta, e o fim da vida é a felicidade.",
      },
      {
        termo: "Kant",
        faz: "Ética do dever: a ação vale pelo dever cumprido, não pelo resultado.",
      },
      {
        termo: "Utilitarismo",
        faz: "A ação correta é a que gera o maior bem para o maior número de pessoas.",
      },
      {
        termo: "Pós-verdade",
        faz: "Crença e emoção pesam mais que os fatos na formação da opinião.",
      },
      {
        termo: "Cidadania",
        faz: "Direitos e deveres de quem participa da vida da comunidade.",
      },
    ],
    cuidado:
      "Não troque os papéis: a moral dita a regra, e a ética pensa sobre a regra. Por isso uma conduta aceita em um grupo ainda pode ser questionada pela ética.",
  },
  questoes: [
    {
      topico: "Ética e moral",
      subassunto: "Diferença de conceitos",
      dificuldade: 4,
      raciocinio: "Pergunte quem dita a regra e quem reflete sobre ela.",
      enunciado:
        "Em um posto, os policiais antigos têm o costume de não registrar pequenos danos nas viaturas. Um novo policial pergunta se esse costume se justifica. Essa pergunta é, em sentido próprio,",
      alternativas: [
        "uma reflexão ética sobre uma regra moral do grupo",
        "uma regra moral imposta ao grupo pelo novo colega",
        "um juízo de fato sobre o que aconteceu nas viaturas",
        "um dever jurídico que nasce do costume daquele posto",
        "uma simples opinião, pois a ética não trata de costumes",
      ],
      correta: 0,
      explicacao:
        "O costume do grupo é moral. Quem pergunta se ele se justifica faz o trabalho da ética, que é pensar sobre as regras.",
      explicacaoErradas:
        "“regra moral imposta” inverte os papéis, pois ele questiona, sem impor nada. “juízo de fato” apenas descreveria o costume. “dever jurídico” confunde costume de grupo com norma. “simples opinião” ignora que os costumes são o objeto da ética.",
      pegadinha: "Tratar ética e moral como sinônimos.",
      conhecimento: "A moral é prática e varia. A ética é reflexiva e busca fundamentos.",
    },
    {
      topico: "Juízos de apreciação",
      subassunto: "Fato e valor",
      dificuldade: 4,
      raciocinio: "Fato pode ser conferido. Valor avalia.",
      enunciado:
        "Dois relatos sobre a mesma abordagem: (1) “o condutor recusou o teste às 22h” e (2) “a recusa foi uma atitude irresponsável”. Esses relatos são, nessa ordem,",
      alternativas: [
        "juízo de valor e juízo de fato",
        "juízo de fato e juízo de valor",
        "dois juízos de fato, pois ambos narram a recusa",
        "dois juízos de valor, pois ambos vêm do policial",
        "juízo normativo e juízo de fato",
      ],
      correta: 1,
      explicacao:
        "O primeiro relato pode ser verificado. O segundo avalia a conduta, atribuindo a ela uma qualidade moral.",
      explicacaoErradas:
        "“juízo de valor e juízo de fato” troca a ordem. “dois juízos de fato” ignora a avaliação em “irresponsável”. “dois juízos de valor” confunde quem fala com o que é dito. “juízo normativo” exigiria uma ordem de conduta, como “deve-se”.",
      pegadinha: "Achar que tudo o que uma pessoa relata é opinião.",
      conhecimento: "Juízo normativo é o que prescreve: diz o que deve ser feito.",
    },
    {
      topico: "Doutrinas éticas",
      subassunto: "Ética do dever",
      dificuldade: 5,
      raciocinio: "Kant olha o dever. O utilitarismo olha o resultado.",
      enunciado:
        "Um policial devolve um celular achado na viatura porque essa é a sua obrigação, ainda que ninguém fosse descobrir e que o dono nunca fosse agradecer. Essa conduta se aproxima mais da ética",
      alternativas: [
        "utilitarista, que mede a ação pela soma dos benefícios",
        "epicurista, que busca o prazer moderado e a tranquilidade",
        "aristotélica, que define o bem pelo que a lei da cidade impõe a todos",
        "relativista, que faz o certo depender do grupo em questão",
        "kantiana, que valoriza a ação feita por dever, sem olhar o ganho",
      ],
      correta: 4,
      explicacao: "Para Kant, a ação tem valor moral quando é feita por dever, e não pelo efeito que produz.",
      explicacaoErradas:
        "“utilitarista” decidiria pelas consequências. “epicurista” buscaria o próprio bem-estar. “aristotélica” falha porque Aristóteles fala em virtude e meio-termo, e não em obediência à lei. “relativista” dependeria do grupo, e o caso fala em obrigação que vale sempre.",
      pegadinha: "Confundir boa ação com ação feita por dever.",
      conhecimento: "A ética do dever também é chamada de deontológica.",
    },
    {
      topico: "Doutrinas éticas",
      subassunto: "Utilitarismo",
      dificuldade: 5,
      raciocinio: "Procure o critério da decisão, não a decisão.",
      enunciado:
        "Com só uma equipe disponível, o chefe a envia ao trecho com maior número de vítimas potenciais, pois assim o benefício total será maior. O critério adotado é típico do",
      alternativas: [
        "contratualismo, que funda as regras em um acordo entre pessoas",
        "estoicismo, que manda aceitar o que não depende da nossa vontade",
        "utilitarismo, que avalia a ação pelo bem-estar total produzido",
        "imperativo categórico, que exige regra válida para todos os casos",
        "relativismo, que nega qualquer critério comum entre as pessoas",
      ],
      correta: 2,
      explicacao: "Decidir pelo maior bem para o maior número é o centro do utilitarismo de Bentham e Mill.",
      explicacaoErradas:
        "“contratualismo” trata da origem das regras sociais. “estoicismo” trata da aceitação e da razão. “imperativo categórico” decide pelo dever, sem somar resultados. “relativismo” não daria um critério de soma.",
      pegadinha: "Achar que toda escolha racional é kantiana.",
      conhecimento: "O utilitarismo é uma ética das consequências.",
    },
    {
      topico: "Doutrinas éticas",
      subassunto: "Virtude e meio-termo",
      dificuldade: 5,
      raciocinio: "Em Aristóteles, a virtude fica entre dois vícios.",
      enunciado:
        "Na ética de Aristóteles, a coragem esperada de um policial em uma ocorrência armada é entendida como",
      alternativas: [
        "uma disposição que nasce pronta e não depende da prática",
        "o cumprimento de uma regra válida para todos, sem exceção",
        "o maior prazer possível obtido com o menor esforço possível em serviço",
        "o meio-termo entre a covardia e a temeridade, adquirido pelo hábito",
        "a total ausência de medo diante de qualquer tipo de perigo",
      ],
      correta: 3,
      explicacao: "A virtude é o justo meio entre falta e excesso. Ela se forma pela repetição de boas ações.",
      explicacaoErradas:
        "“nasce pronta” contraria a ideia de hábito. “regra válida para todos” lembra Kant. “maior prazer” lembra uma leitura rasa do hedonismo. “ausência de medo” é o excesso, que vira temeridade.",
      pegadinha: "Tomar a coragem como falta de medo.",
      conhecimento: "Para Aristóteles, o fim da vida humana é a felicidade, ou eudaimonia.",
    },
    {
      topico: "Pós-verdade",
      subassunto: "Relação com a ética",
      dificuldade: 4,
      raciocinio: "O ponto central é o peso dos fatos na opinião.",
      enunciado:
        "Circula nas redes um vídeo editado que atribui a uma equipe policial um abuso que não houve. Mesmo desmentido com dados, muitos seguem acreditando por afinidade com a versão. O fenômeno descrito é",
      alternativas: [
        "a pós-verdade, em que a crença pesa mais que os fatos verificados",
        "o relativismo moral, que trata toda regra como dependente da cultura",
        "o juízo de fato, pois o vídeo é um registro do que se passou",
        "a publicidade dos atos, que é exigida de todo agente público",
        "a liberdade de consciência, que protege qualquer versão divulgada",
      ],
      correta: 0,
      explicacao: "Na pós-verdade, emoção e crença pessoal influenciam a opinião mais que os fatos objetivos.",
      explicacaoErradas:
        "“relativismo moral” trata de regras, e não de fatos falsos. “juízo de fato” falha porque o vídeo foi editado e foi desmentido. “publicidade dos atos” é dever da Administração. “liberdade de consciência” não torna verdadeira uma versão desmentida.",
      pegadinha: "Confundir pós-verdade com simples diferença de opinião.",
      conhecimento: "A ética exige compromisso com a verdade, inclusive ao compartilhar informação.",
    },
    {
      topico: "Ética e cidadania",
      subassunto: "Direitos e deveres",
      dificuldade: 4,
      raciocinio: "Cidadania tem dois lados.",
      enunciado:
        "Sobre a relação entre ética e cidadania, é correto afirmar que",
      alternativas: [
        "a cidadania se esgota no direito de votar em eleições periódicas e livres",
        "o cidadão é titular de direitos, e cabe só ao Estado cumprir deveres",
        "a ética vale para a vida privada, e a cidadania, para a vida pública",
        "pagar tributos é uma obrigação fiscal, sem relação com a cidadania",
        "a cidadania reúne direitos e deveres, e a ética orienta o seu exercício",
      ],
      correta: 4,
      explicacao:
        "Ser cidadão inclui participar, respeitar direitos alheios e cumprir deveres. A ética dá os valores que guiam essa prática.",
      explicacaoErradas:
        "“se esgota no direito de votar” reduz demais a cidadania. “cabe só ao Estado” apaga os deveres do cidadão. “a ética vale para a vida privada” separa o que é interdependente. “sem relação com a cidadania” erra, pois pagar tributos é dever do cidadão.",
      pegadinha: "Ver a cidadania apenas como lista de direitos.",
      conhecimento: "Obedecer às leis, votar e pagar tributos são exemplos de deveres de cidadania.",
    },
    {
      topico: "Ética nas organizações",
      subassunto: "Diversidade e responsabilidade social",
      dificuldade: 5,
      raciocinio: "Separe o que a lei obriga do que a organização assume por valores.",
      enunciado:
        "Uma empresa concessionária cumpre todas as leis e, além disso, cria um programa próprio de segurança viária nas escolas da região e de inclusão de pessoas com deficiência. Em ética organizacional, esse “além da lei” indica",
      alternativas: [
        "desvio de finalidade, pois empresa só deve visar ao lucro",
        "responsabilidade social, assumida além do mínimo legal",
        "mera propaganda, pois nenhuma ação sem lei tem valor ético",
        "serviço público delegado, que depende de contrato próprio",
        "obrigação tributária acessória ligada à concessão da rodovia",
      ],
      correta: 1,
      explicacao:
        "Responsabilidade social é o compromisso voluntário com a comunidade e com a diversidade, acima do que a lei exige.",
      explicacaoErradas:
        "“desvio de finalidade” ignora o papel social da organização. “mera propaganda” nega valor a condutas voluntárias. “serviço público delegado” pressupõe contrato para aquele serviço. “obrigação tributária” não existe no caso.",
      pegadinha: "Achar que ética é só cumprir a lei.",
      conhecimento: "Legalidade é o piso. A ética costuma pedir mais.",
    },
  ],
};
