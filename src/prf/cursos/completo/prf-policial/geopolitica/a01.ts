import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geopolitica-01",
  resumo: {
    ideia:
      "O mapa do Brasil nasceu de tratados, ocupação e decisões políticas. A aula separa nação, Estado e território e mostra como a Federação e as fronteiras chegaram ao desenho atual.",
    itens: [
      {
        termo: "Nação",
        faz: "Grupo com origem, língua e costumes em comum, que se reconhece como um só povo.",
        pista: "É identidade, não governo.",
      },
      {
        termo: "Território",
        faz: "Espaço delimitado e apropriado por relações de poder.",
      },
      {
        termo: "Estado",
        faz: "Organização política que exerce soberania sobre um povo e um território.",
      },
      {
        termo: "Tratado de Madri (1750)",
        faz: "Trocou a linha de Tordesilhas pelo critério da ocupação efetiva da terra.",
      },
      {
        termo: "Federação",
        faz: "Veio com a República, em 1889. As províncias viraram estados, com as mesmas fronteiras.",
      },
      {
        termo: "Organização do Estado",
        faz: "União, Estados, Distrito Federal e Municípios, todos autônomos.",
      },
      {
        termo: "Constituição de 1988",
        faz: "Criou o Tocantins, tornou Amapá e Roraima estados e anexou Fernando de Noronha a Pernambuco.",
        pista: "É a mudança mais recente do mapa.",
      },
      {
        termo: "Faixa de fronteira",
        faz: "Até 150 km ao longo das fronteiras terrestres, com regras próprias de ocupação.",
      },
      {
        termo: "Limites marítimos",
        faz: "Mar territorial de 12 milhas, zona contígua até 24 e zona econômica exclusiva até 200.",
      },
    ],
    cuidado:
      "Não troque as datas do mapa: Acre estado em 1962, Mato Grosso do Sul em 1977 e Tocantins em 1988.",
  },
  questoes: [
    {
      topico: "Nação e território",
      subassunto: "Nação sem Estado",
      dificuldade: 4,
      raciocinio: "Nação é identidade. Estado é poder soberano.",
      enunciado:
        "Um povo com língua e tradições próprias vive espalhado por vários países e não tem governo soberano sobre nenhuma área. Nos conceitos da aula, esse povo é",
      alternativas: [
        "um Estado, porque tem população própria e identidade comum",
        "um território, porque ocupa áreas contínuas em vários países",
        "uma nação, pois a identidade comum não exige Estado próprio",
        "uma federação, porque reúne grupos de países diferentes",
        "uma fronteira cultural, sem relação com a ideia de nação",
      ],
      correta: 2,
      explicacao:
        "Nação é o grupo que se reconhece como povo pela origem, língua e costumes. Ela pode existir sem um Estado que a governe.",
      explicacaoErradas:
        "“um Estado” exigiria soberania. “um território” é o espaço, e não o povo. “uma federação” é forma de organizar um Estado. “fronteira cultural” não descreve o grupo.",
      pegadinha: "Usar nação e Estado como sinônimos.",
      conhecimento: "Um Estado também pode reunir várias nações, como ocorre em países multiétnicos.",
    },
    {
      topico: "Organização do Estado",
      subassunto: "Entes da Federação",
      dificuldade: 4,
      raciocinio: "Lembre o art. 18 da Constituição.",
      enunciado:
        "Segundo a Constituição de 1988, a organização político-administrativa do Brasil compreende, todos autônomos,",
      alternativas: [
        "a União, os Estados, o Distrito Federal e os Municípios",
        "a União, os Estados e os Territórios, sem os Municípios",
        "a União, os Estados, os Territórios Federais e as Regiões",
        "os Estados e os Municípios, subordinados à União em tudo",
        "a União e as cinco grandes regiões definidas pelo IBGE",
      ],
      correta: 0,
      explicacao:
        "O art. 18 lista União, Estados, Distrito Federal e Municípios, todos autônomos. Os Territórios Federais, quando existirem, integram a União.",
      explicacaoErradas:
        "“sem os Municípios” exclui um ente. “Territórios Federais” não têm autonomia. “subordinados à União” nega a autonomia. “regiões definidas pelo IBGE” são divisão estatística.",
      pegadinha: "Colocar território federal como ente autônomo.",
      conhecimento: "Hoje o Brasil não tem nenhum território federal.",
    },
    {
      topico: "Formação territorial",
      subassunto: "Tratados",
      dificuldade: 5,
      raciocinio: "O critério da posse substituiu a linha traçada no mapa.",
      enunciado:
        "No século XVIII, Portugal e Espanha trocaram a antiga linha divisória por um critério que reconhecia a posse de quem de fato ocupava a terra, o que favoreceu o avanço português para o interior. Esse marco foi",
      alternativas: [
        "o Tratado de Tordesilhas, que dividiu as terras por um meridiano",
        "o Tratado de Petrópolis, que incorporou o Acre ao território",
        "a Lei de Terras, que regulou a posse privada no século XIX",
        "o Decreto nº 1 de 1889, que criou a Federação brasileira",
        "o Tratado de Madri, com o princípio da ocupação efetiva",
      ],
      correta: 4,
      explicacao:
        "O Tratado de Madri, de 1750, adotou o princípio da ocupação efetiva e deu base legal à expansão para além de Tordesilhas.",
      explicacaoErradas:
        "“Tratado de Tordesilhas” é a linha que foi superada. “Tratado de Petrópolis” é de 1903. “Lei de Terras” é de 1850 e trata da propriedade. “Decreto nº 1” é da República.",
      pegadinha: "Trocar Tordesilhas, de 1494, por Madri, de 1750.",
      conhecimento: "O nome latino desse princípio é uti possidetis.",
    },
    {
      topico: "Formação territorial",
      subassunto: "Acre e territórios federais",
      dificuldade: 5,
      raciocinio: "Separe o ano da anexação do ano em que virou estado.",
      enunciado: "Sobre a incorporação do Acre e a figura do território federal, é correto dizer que",
      alternativas: [
        "o Acre veio da partilha de Goiás e virou estado em 1988",
        "o Acre passou ao Brasil em 1903 e só virou estado em 1962",
        "a Constituição de 1891 já previa os territórios federais",
        "o Acre foi comprado do Uruguai pelo Império, no século XIX",
        "os territórios federais seguem existindo no mapa brasileiro",
      ],
      correta: 1,
      explicacao:
        "O Tratado de Petrópolis, de 1903, incorporou o Acre, que foi território federal até se tornar estado em 1962.",
      explicacaoErradas:
        "“partilha de Goiás” descreve o Tocantins. “Constituição de 1891” não previa essa figura. “comprado do Uruguai” erra o país e a época, pois o acordo foi com a Bolívia. “seguem existindo” ignora que o último deixou de existir em 1988.",
      pegadinha: "Achar que o Acre virou estado em 1988, junto com Amapá e Roraima.",
      conhecimento: "A figura do território federal surgiu antes de ter previsão constitucional.",
    },
    {
      topico: "Organização do Estado",
      subassunto: "Mudanças no mapa",
      dificuldade: 5,
      raciocinio: "Coloque cada mudança na sua data.",
      enunciado: "Entre as mudanças abaixo no mapa político do Brasil, aquela feita pela Constituição de 1988 é",
      alternativas: [
        "a divisão do Mato Grosso, que criou o Mato Grosso do Sul",
        "a fusão do Estado da Guanabara com o do Rio de Janeiro",
        "a transferência da capital do Rio de Janeiro para Brasília",
        "a criação do Tocantins, com a divisão do norte de Goiás",
        "a elevação do Acre de território federal à condição de estado",
      ],
      correta: 3,
      explicacao:
        "A Constituição de 1988 criou o Tocantins, tornou Amapá e Roraima estados e anexou Fernando de Noronha a Pernambuco.",
      explicacaoErradas:
        "“Mato Grosso do Sul” é de 1977. “fusão do Estado da Guanabara” é de 1975. “para Brasília” é de 1960. “elevação do Acre” é de 1962.",
      pegadinha: "Atribuir a 1988 todas as mudanças do mapa.",
      conhecimento: "Em 1988 ocorreu a mudança mais recente do mapa político brasileiro.",
    },
    {
      topico: "Fronteiras",
      subassunto: "Faixa de fronteira",
      dificuldade: 4,
      raciocinio: "A medida é em quilômetros e vale para a fronteira terrestre.",
      enunciado:
        "Uma equipe da PRF atua em uma rodovia a 120 km da fronteira terrestre com um país vizinho. Pela Constituição, esse ponto",
      alternativas: [
        "está fora da faixa de fronteira, que vai só até 100 km",
        "está fora da faixa de fronteira, que vai só até 66 km",
        "está na faixa de fronteira, que tem até 150 km de largura",
        "está na faixa só se a área for de terra indígena demarcada",
        "está na faixa, que chega a 200 milhas da linha de divisa",
      ],
      correta: 2,
      explicacao:
        "A faixa de até 150 km de largura ao longo das fronteiras terrestres é considerada fundamental para a defesa do território.",
      explicacaoErradas:
        "“até 100 km” e “até 66 km” são larguras antigas, já superadas. “terra indígena” não define a faixa. “200 milhas” é medida marítima.",
      pegadinha: "Trocar quilômetros de terra por milhas do mar.",
      conhecimento: "A ocupação e o uso da faixa são regulados por lei.",
    },
    {
      topico: "Fronteiras",
      subassunto: "Cidades gêmeas",
      dificuldade: 5,
      raciocinio: "Procure o conceito que nasce na linha de fronteira.",
      enunciado:
        "Dois municípios, um brasileiro e outro de país vizinho, são separados só por uma rua e têm forte troca de comércio, moradores e serviços. Essa situação descreve",
      alternativas: [
        "cidades gêmeas, cortadas pela linha de fronteira do país",
        "uma conurbação metropolitana, instituída por lei estadual",
        "um enclave, pois um dos países está cercado pelo outro",
        "uma zona contígua, prevista na lei dos limites marítimos",
        "uma região integrada de desenvolvimento, criada pela União",
      ],
      correta: 0,
      explicacao:
        "Cidades gêmeas são municípios cortados pela linha de fronteira, seca ou fluvial, com grande potencial de integração econômica e cultural.",
      explicacaoErradas:
        "“conurbação metropolitana” e “região integrada” são figuras internas. “enclave” pede um território cercado por outro. “zona contígua” é faixa do mar.",
      pegadinha: "Usar um conceito urbano interno em um caso de fronteira.",
      conhecimento:
        "Na vigilância da fronteira, o Brasil criou o Calha Norte, em 1985, e implanta o Sisfron, de monitoramento.",
    },
    {
      topico: "Fronteiras",
      subassunto: "Limites marítimos",
      dificuldade: 5,
      raciocinio: "Coloque em ordem: 12, 24 e 200 milhas.",
      enunciado:
        "Um pesqueiro estrangeiro explora recursos a 100 milhas marítimas da costa brasileira, sem autorização. Esse ponto está",
      alternativas: [
        "no mar territorial, onde a soberania do Brasil é plena",
        "na zona contígua, que vai de 12 até 24 milhas marítimas da costa",
        "em alto-mar, onde todos exploram os recursos livremente",
        "nas águas interiores, sujeitas à lei do estado vizinho",
        "na zona econômica exclusiva, com direitos sobre os recursos",
      ],
      correta: 4,
      explicacao:
        "A Lei 8.617/1993 fixa mar territorial de 12 milhas, zona contígua até 24 e zona econômica exclusiva até 200, onde o Brasil tem direitos sobre os recursos naturais.",
      explicacaoErradas:
        "“mar territorial” termina em 12 milhas. “zona contígua” termina em 24. “alto-mar” começa depois das 200. “águas interiores” ficam antes da linha de base.",
      pegadinha: "Achar que a zona econômica exclusiva é igual ao mar territorial.",
      conhecimento: "Na zona econômica exclusiva, outros países mantêm a liberdade de navegação.",
    },
  ],
};
