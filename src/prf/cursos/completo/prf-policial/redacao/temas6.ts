import type { TemaPrf } from "./tipos";

const NOTA_PEC =
  "Até a promulgação, vale o texto atual do art. 144 da Constituição. Antes da prova, confira se a PEC foi promulgada, com que número de emenda e qual é o texto final.";

/** Bloco 4: a nova PRF da PEC 18/2025, nas ferrovias e hidrovias federais. */
export const TEMAS_6: TemaPrf[] = [
  {
    n: 14,
    bloco: 4,
    recorte: "Os rios de fronteira e o tráfico pelas águas",
    contexto:
      "Rios que marcam a fronteira do Brasil ou que vêm de países vizinhos são usados por redes criminosas para levar drogas, armas e mercadorias de contrabando, em trechos longos, com muitas margens e pouca vigilância. A PEC 18/2025, aprovada pelo Senado em 3/11/2026 e enviada à promulgação, estende a atuação da PRF às hidrovias federais.",
    tema: "O controle dos rios de fronteira no combate ao tráfico de drogas, armas e mercadorias.",
    aspectos: [
      "as razões que fazem dos rios de fronteira uma rota atrativa para o crime;",
      "os impactos desse crime sobre as comunidades ribeirinhas e o meio ambiente;",
      "o uso de inteligência e de tecnologia no controle das águas.",
    ],
    nota: NOTA_PEC,
    paragrafos: [
      "Os rios brasileiros sempre serviram à integração do território, **mas** os que marcam a fronteira também servem a redes criminosas. A PEC 18/2025, aprovada pelo Senado, prevê a atuação da Polícia Rodoviária Federal nas hidrovias federais. **Nesse contexto**, convém analisar por que esses rios atraem o crime, que danos ele causa e como controlá-los.",
      "**Em primeiro lugar**, os rios de fronteira oferecem condições favoráveis aos criminosos. São trechos longos, com muitas margens, ilhas e portos improvisados, onde uma embarcação pequena passa de um país para outro em poucos minutos. **Além disso**, a vigilância nas águas é menor do que nas estradas, **de modo que** drogas, armas e contrabando encontram ali um caminho de menor risco.",
      "**Ademais**, esse crime atinge diretamente quem vive à beira dos rios. Comunidades ribeirinhas ficam expostas à violência e ao aliciamento de jovens para o transporte ilícito, **enquanto** a pesca predatória, o garimpo ilegal e o descarte de produtos químicos degradam o ambiente do qual essas famílias dependem. **Assim**, a ausência do Estado nas águas produz insegurança e destruição ao mesmo tempo.",
      "**Por fim**, o controle eficiente das águas depende de inteligência e de tecnologia. Radares, drones e câmeras ajudam a vigiar grandes extensões com efetivo reduzido, **desde que** os dados sejam compartilhados entre os órgãos de segurança, como prevê o Sistema Único de Segurança Pública. **Dessa forma**, as equipes podem agir onde o risco é maior, **em vez de** patrulhar às cegas.",
      "**Portanto**, os rios de fronteira não podem continuar como rota livre para o crime. **Para isso**, a presença do Estado nas águas deve unir patrulhamento, proteção das comunidades ribeirinhas e uso inteligente da tecnologia.",
    ],
    repertorio: [
      "Art. 20, III, da Constituição: são bens da União os rios que banham mais de um estado, servem de limite com outros países ou se estendem a território estrangeiro ou dele provêm.",
      "Art. 144, § 1º, III, da Constituição: a Polícia Federal exerce as funções de polícia marítima, aeroportuária e de fronteiras.",
      "Lei 9.537/1997: trata da segurança do tráfego aquaviário em águas sob jurisdição nacional, a cargo da autoridade marítima (Marinha).",
      "Art. 40, I, da Lei 11.343/2006: a transnacionalidade do tráfico aumenta a pena de um sexto a dois terços.",
      "Lei 13.675/2018: institui o Sistema Único de Segurança Pública (SUSP), com atuação integrada e compartilhamento de informações entre os órgãos.",
    ],
    conectivos: ["mas", "Nesse contexto", "Em primeiro lugar", "Além disso", "de modo que", "Ademais", "enquanto", "Assim", "Por fim", "desde que", "Dessa forma", "em vez de", "Portanto", "Para isso"],
  },
  {
    n: 15,
    bloco: 4,
    recorte: "Crimes contra a ferrovia e o transporte de cargas",
    contexto:
      "O furto de cabos, trilhos e peças de fixação das linhas férreas causa prejuízos e pode provocar descarrilamentos. Nas cargas levadas de trem até os portos, criminosos também escondem drogas em contêineres de exportação sem que o dono da mercadoria saiba. A PEC 18/2025, aprovada pelo Senado em 3/11/2026 e enviada à promulgação, estende a atuação da PRF às ferrovias federais.",
    tema: "Os crimes contra a infraestrutura ferroviária e a segurança do transporte de cargas no Brasil.",
    aspectos: [
      "as formas como o crime atinge as ferrovias e as cargas transportadas;",
      "os riscos desse crime para a população e para a economia;",
      "a cooperação entre o poder público e as concessionárias na prevenção.",
    ],
    nota: NOTA_PEC,
    paragrafos: [
      "As ferrovias levam grãos, minérios e contêineres a longas distâncias com custo menor que o das estradas, **por isso** são estratégicas para a economia. **No entanto**, a malha férrea também é alvo do crime. Com a PEC 18/2025, aprovada pelo Senado, a Polícia Rodoviária Federal pode passar a atuar nas ferrovias federais, **o que** exige entender como o crime age, que riscos produz e como preveni-lo.",
      "**Em primeiro lugar**, o crime atinge a ferrovia de duas formas principais. Há o furto de cabos, trilhos e peças de fixação, revendidos como sucata, e há o uso das cargas para o tráfico: drogas são escondidas em contêineres que seguem de trem até os portos, sem que o dono da mercadoria saiba. **Assim**, a própria logística legal passa a servir de disfarce para o crime.",
      "**Além disso**, os riscos vão muito além do prejuízo material. Uma peça de fixação retirada pode causar um descarrilamento, com perigo para quem vive perto dos trilhos e para o meio ambiente, sobretudo no transporte de produtos perigosos. **Ao mesmo tempo**, exportadores que têm droga escondida na carga sofrem atrasos e perdem credibilidade; **consequentemente**, a imagem do país no comércio exterior fica prejudicada.",
      "**Por fim**, a prevenção depende de cooperação. As concessionárias conhecem os trechos mais atacados e dispõem de câmeras e sensores, **enquanto** o poder público tem inteligência e poder de polícia. **Desse modo**, o compartilhamento de dados com a ANTT, a Receita Federal e a Polícia Federal, somado à fiscalização de ferros-velhos, permite atacar tanto o furto quanto o mercado que o sustenta.",
      "**Portanto**, proteger as ferrovias é proteger vidas e a economia nacional. **Para tanto**, o patrulhamento deve unir prevenção nos trilhos, controle das cargas e cooperação permanente entre o Estado e as concessionárias.",
    ],
    repertorio: [
      "Art. 21, XII, d, da Constituição: cabe à União explorar, diretamente ou mediante autorização, concessão ou permissão, o transporte ferroviário entre portos brasileiros e fronteiras nacionais ou que ultrapasse os limites de um estado.",
      "Art. 144, § 3º, da Constituição (texto em vigor): a polícia ferroviária federal se destina ao patrulhamento ostensivo das ferrovias federais.",
      "Art. 260 do Código Penal (perigo de desastre ferroviário): pune quem impede ou perturba o serviço de estrada de ferro, por exemplo danificando a linha férrea; reclusão de 2 a 5 anos e multa.",
      "Art. 180, § 1º, do Código Penal: receptação qualificada de quem, no comércio, compra ou revende coisa que deve saber ser produto de crime.",
      "Lei 10.233/2001: cria a ANTT, que regula e fiscaliza o transporte ferroviário.",
    ],
    conectivos: ["por isso", "No entanto", "o que", "Em primeiro lugar", "Assim", "Além disso", "Ao mesmo tempo", "consequentemente", "Por fim", "enquanto", "Desse modo", "Portanto", "Para tanto"],
  },
  {
    n: 16,
    bloco: 4,
    recorte: "A PRF ampliada, o crime organizado e os estados",
    contexto:
      "Organizações criminosas dependem de rotas para levar drogas, armas e dinheiro entre regiões e países. A PEC 18/2025, aprovada pelo Senado em 3/11/2026 e enviada à promulgação, amplia a atuação da PRF e busca fortalecer a integração entre as forças de segurança. Ao mesmo tempo, a Constituição garante a autonomia dos estados, que mantêm suas polícias militares e civis.",
    tema: "A ampliação da atuação da PRF e a integração com os estados no combate ao crime organizado.",
    aspectos: [
      "o controle das rotas federais como forma de enfraquecer o crime organizado;",
      "a cooperação com as polícias estaduais, respeitada a autonomia dos estados;",
      "o papel do Sistema Único de Segurança Pública (SUSP) nessa integração.",
    ],
    nota: NOTA_PEC,
    paragrafos: [
      "O crime organizado atua em rede e ultrapassa as divisas dos estados e as fronteiras do país. **Diante disso**, a PEC 18/2025, aprovada pelo Senado, amplia a atuação da Polícia Rodoviária Federal e busca fortalecer a integração entre as forças de segurança. **Contudo**, o sucesso da medida depende de como ela enfraquece o crime, de como respeita os estados e de como usa o Sistema Único de Segurança Pública.",
      "**Em primeiro lugar**, toda organização criminosa depende de logística. Drogas, armas e dinheiro precisam circular por estradas, trilhos e rios, **de maneira que** o controle dessas rotas atinge o crime no ponto em que ele mais se expõe. **Além disso**, cada apreensão de carga ou de dinheiro reduz o lucro dos grupos criminosos, **o que** enfraquece sua capacidade de corromper, recrutar e se armar.",
      "**Por outro lado**, a ampliação da PRF não pode atropelar o pacto federativo. A Constituição garante a autonomia dos estados, cujas polícias militares fazem o policiamento ostensivo e cujas polícias civis investigam os crimes comuns. **Por isso**, a atuação federal deve somar esforços com essas forças, em operações planejadas em conjunto, **e não** substituí-las nem disputar espaço com elas.",
      "**Nesse sentido**, o Sistema Único de Segurança Pública é o instrumento da integração. Ao prever metas comuns, compartilhamento de informações e operações conjuntas, o SUSP permite que os dados de uma abordagem na rodovia federal ajudem uma investigação estadual, **e vice-versa**. **Assim**, a cooperação deixa de depender da boa vontade de cada gestor e passa a seguir regras claras.",
      "**Portanto**, a PRF ampliada pode asfixiar a logística e as finanças do crime organizado. **Entretanto**, isso só ocorrerá se a nova atuação respeitar a autonomia dos estados e se apoiar em uma integração permanente, organizada pelo SUSP.",
    ],
    repertorio: [
      "Art. 18 da Constituição: União, estados, Distrito Federal e municípios são autônomos.",
      "Art. 144, §§ 4º e 5º, da Constituição: às polícias civis cabem a polícia judiciária e a apuração de infrações penais, ressalvada a competência da União e exceto as militares; às polícias militares, a polícia ostensiva e a preservação da ordem pública.",
      "Art. 144, § 7º, da Constituição: a lei disciplina a organização e o funcionamento dos órgãos de segurança pública, para garantir a eficiência de suas atividades.",
      "Lei 13.675/2018: institui o SUSP, com atuação integrada, metas, compartilhamento de informações e operações conjuntas.",
      "Art. 1º, § 1º, da Lei 12.850/2013: organização criminosa é a associação de 4 ou mais pessoas, estruturalmente ordenada e com divisão de tarefas, para praticar infrações com pena máxima superior a 4 anos ou de caráter transnacional.",
    ],
    conectivos: ["Diante disso", "Contudo", "Em primeiro lugar", "de maneira que", "Além disso", "o que", "Por outro lado", "Por isso", "e não", "Nesse sentido", "e vice-versa", "Assim", "Portanto", "Entretanto"],
  },
];
