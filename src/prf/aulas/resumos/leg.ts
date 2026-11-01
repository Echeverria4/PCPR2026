import type { ResumoAula } from "./tipos";

export const LEG: Record<string, ResumoAula> = {
  "leg-01": {
    ideia:
      "A segurança pública é dever do Estado, direito e responsabilidade de todos (CF, art. 144); a PRF é um dos órgãos da lista, com o patrulhamento ostensivo das rodovias federais.",
    itens: [
      {
        termo: "Órgãos do art. 144",
        faz: "Polícia federal, polícia rodoviária federal, polícia ferroviária federal, polícias civis, polícias militares e bombeiros militares e polícias penais (EC 104/2019).",
        pista: "Para o STF, a lista é taxativa: os Estados não podem criar outros órgãos.",
      },
      {
        termo: "PRF (§ 2º)",
        faz: "Órgão permanente, organizado e mantido pela União e estruturado em carreira, que faz, na forma da lei, o patrulhamento ostensivo das rodovias federais.",
      },
      {
        termo: "Polícia federal (§ 1º)",
        faz: "Apura infrações contra a União, reprime o tráfico de drogas e exerce, com exclusividade, a polícia judiciária da União.",
      },
      {
        termo: "Polícias civis e militares",
        faz: "Civis: polícia judiciária e apuração de infrações penais, exceto as militares. Militares: polícia ostensiva e preservação da ordem pública.",
        pista: "Elas se subordinam aos Governadores; a PRF, mantida pela União, não.",
      },
      {
        termo: "Segurança viária (§ 10)",
        faz: "Compreende educação, engenharia e fiscalização de trânsito.",
        pista: "Legislar sobre trânsito e sobre a competência da PRF é privativo da União (art. 22, XI e XXII).",
      },
    ],
    cuidado:
      "A PRF faz patrulhamento ostensivo; a polícia judiciária da União é função exclusiva da polícia federal.",
  },
  "leg-02": {
    ideia:
      "O art. 20 do Código de Trânsito Brasileiro lista o que compete à PRF no âmbito das rodovias e estradas federais.",
    itens: [
      {
        termo: "Cumprir e patrulhar (I e II)",
        faz: "Cumprir e fazer cumprir as normas de trânsito; patrulhamento ostensivo e operações de segurança pública.",
      },
      {
        termo: "Fiscalizar e autuar (III)",
        faz: "Advertência por escrito, multa e medidas administrativas, notificação dos infratores e arrecadação das multas e dos valores de estadia, remoção e escolta.",
      },
      {
        termo: "Suspensão do direito de dirigir (XII)",
        faz: "Quando prevista de forma específica para a infração, com comunicação ao órgão máximo executivo de trânsito da União.",
        pista: "Incluída pela Lei 14.071/2020.",
      },
      {
        termo: "Sinistros (IV, VII e XIII)",
        faz: "Levantamento dos locais, estatísticas e estudos das causas e perícia administrativa nos locais de sinistros de trânsito.",
        pista: "Desde a Lei 14.599/2023, o CTB diz “sinistro”, e não mais “acidente”.",
      },
      {
        termo: "Circulação, educação e ambiente",
        faz: "Assegurar a livre circulação e o direito de vizinhança (VI); programas de educação e segurança (VIII e IX); fiscalizar poluentes e ruído (XI).",
      },
    ],
    cuidado:
      "Sinalização, obras e eventos na via e excesso de peso, dimensões e lotação são do órgão rodoviário (nas rodovias federais, o DNIT), pelo art. 21, e não da PRF.",
  },
  "leg-03": {
    ideia:
      "O Decreto 1.655/1995 define as competências da PRF, órgão do Ministério da Justiça (hoje, da Justiça e Segurança Pública).",
    itens: [
      {
        termo: "Patrulhar e fiscalizar (I a III)",
        faz: "Patrulhamento ostensivo; poderes de autoridade de polícia de trânsito, com convênios; aplicar e arrecadar multas e valores de estadia, remoção e escolta de cargas excepcionais.",
      },
      {
        termo: "Acidentes (IV e V)",
        faz: "Prevenção, atendimento e salvamento; perícias, levantamentos, boletins de ocorrência, investigações e testes de dosagem alcoólica para esclarecer os acidentes.",
        pista: "Essas investigações não fazem da PRF uma polícia judiciária.",
      },
      {
        termo: "Escoltas e circulação (VI a VIII)",
        faz: "Credenciar os serviços de escolta; assegurar a livre circulação e interditar obras não autorizadas; escoltar autoridades.",
      },
      {
        termo: "Crimes e menores (IX e X)",
        faz: "Fiscalizar o tráfico de menores nas rodovias (ECA); colaborar e atuar na prevenção e repressão de crimes, como tráfico de drogas, contrabando e roubo de veículos.",
        pista: "“Colaborar e atuar” não tira a competência da polícia federal e das polícias civis.",
      },
      {
        termo: "Identidade funcional (art. 2º)",
        faz: "Dá ao policial rodoviário federal livre porte de arma e franco acesso aos locais sob fiscalização, nos termos da legislação.",
      },
    ],
    cuidado:
      "A escolta de autoridades só ocorre “quando necessário e sob a coordenação do órgão competente”; a PRF não a faz por conta própria.",
  },
};
