import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-01",
  resumo: {
    ideia:
      "O regime jurídico-administrativo combina poderes especiais com limites especiais. Os princípios dizem como a Administração deve agir e servem de medida para controlar seus atos.",
    itens: [
      {
        termo: "Supremacia do interesse público",
        faz: "Justifica as prerrogativas, como desapropriar e alterar contrato de forma unilateral.",
      },
      {
        termo: "Indisponibilidade do interesse público",
        faz: "Justifica as sujeições, como licitar e fazer concurso. O gestor cuida do que não é dele.",
      },
      {
        termo: "Legalidade",
        faz: "O particular faz o que a lei não proíbe. A Administração só faz o que a lei autoriza.",
      },
      {
        termo: "Impessoalidade",
        faz: "Tem três faces: finalidade pública, igualdade e imputação do ato ao órgão, não ao agente.",
        pista: "O art. 37, § 1º, da CF proíbe promoção pessoal na publicidade oficial.",
      },
      {
        termo: "Moralidade",
        faz: "Exige ética e boa-fé. O ato imoral é inválido, e não apenas inconveniente.",
        pista: "A Súmula Vinculante 13 proíbe o nepotismo até o terceiro grau.",
      },
      {
        termo: "Publicidade",
        faz: "Dá eficácia aos atos e permite o controle. O sigilo é exceção e precisa de fundamento.",
      },
      {
        termo: "Eficiência",
        faz: "Foi incluída pela EC 19/1998. Busca resultado e economia, sem afastar a legalidade.",
      },
      {
        termo: "Razoabilidade e proporcionalidade",
        faz: "O meio deve ser adequado, necessário e equilibrado em relação ao fim.",
      },
      {
        termo: "Autotutela",
        faz: "A Administração anula o ato ilegal e revoga o inconveniente (Súmula 473 do STF).",
      },
      {
        termo: "Continuidade",
        faz: "O serviço público não para. Os servidores da segurança pública não podem fazer greve.",
      },
    ],
    cuidado: "Os cinco princípios do caput do art. 37 são os expressos. Os outros também obrigam, mesmo sem constar dali.",
  },
  questoes: [
    {
      topico: "Princípios expressos",
      subassunto: "Legalidade",
      dificuldade: 4,
      raciocinio: "Na Administração, a falta de lei é proibição, e não liberdade.",
      enunciado:
        "Uma portaria de superintendência cria, sem previsão em lei, nova sanção para servidores que atrasarem relatórios. A portaria foi publicada, motivada e aplicada a todos do mesmo modo. À luz da legalidade administrativa, a sanção é",
      alternativas: [
        "válida, pois a publicidade e a isonomia suprem a falta de lei",
        "válida, pois o poder hierárquico permite criar sanções internas",
        "inválida apenas se houver prejuízo ao erário",
        "inválida, pois a Administração só age quando a lei autoriza",
        "válida até que uma lei federal disponha em sentido contrário",
      ],
      correta: 3,
      explicacao: "A legalidade administrativa exige base em lei. Portaria não inova na ordem jurídica para criar sanção.",
      explicacaoErradas:
        "“publicidade e a isonomia” não substituem a lei. “poder hierárquico” organiza e ordena, mas não cria pena. “prejuízo ao erário” não é requisito da ilegalidade. “até que uma lei” inverte a lógica, pois a lei vem antes do ato.",
      pegadinha: "Achar que motivação e publicidade corrigem a falta de lei.",
      conhecimento: "A primazia da lei proíbe contrariar a lei. A reserva legal exige lei para agir.",
    },
    {
      topico: "Princípios expressos",
      subassunto: "Impessoalidade",
      dificuldade: 4,
      raciocinio: "A obra é do órgão, não da autoridade.",
      enunciado:
        "A placa de inauguração de uma nova unidade operacional, paga com verba pública, traz o nome e a foto do dirigente, com a frase “mais uma entrega da gestão”. Pelo art. 37, § 1º, da Constituição, a placa",
      alternativas: [
        "viola a impessoalidade, pois caracteriza promoção pessoal",
        "é regular, pois a publicidade dos atos é princípio expresso",
        "é regular, pois o nome do dirigente tem caráter informativo",
        "viola só a eficiência, por gasto desnecessário",
        "é regular se o dirigente pagar a foto com recursos próprios",
      ],
      correta: 0,
      explicacao: "A publicidade oficial deve ter caráter educativo, informativo ou de orientação social, sem nomes, símbolos ou imagens que caracterizem promoção pessoal.",
      explicacaoErradas:
        "“princípio expresso” não autoriza promoção pessoal. “caráter informativo” não existe na frase, que exalta a gestão. “só a eficiência” esquece a vedação constitucional. “recursos próprios” não muda a placa, que é oficial e foi paga com verba pública.",
      pegadinha: "Tratar a promoção pessoal como simples informação.",
      conhecimento: "A regra também é base para responsabilizar o agente por improbidade quando presentes os requisitos da lei.",
    },
    {
      topico: "Princípios expressos",
      subassunto: "Imputação",
      dificuldade: 5,
      raciocinio: "O ato é atribuído ao órgão, e o terceiro de boa-fé fica protegido.",
      enunciado:
        "Depois de anos no cargo, descobre-se que a investidura de um servidor foi irregular. Nesse período, ele praticou atos em favor de terceiros de boa-fé. Segundo a impessoalidade e a teoria do funcionário de fato, esses atos, em regra,",
      alternativas: [
        "são inexistentes, pois quem os praticou não era agente público",
        "devem ser anulados, com a devolução dos valores pelos terceiros",
        "só valem se o Tribunal de Contas os ratificar depois",
        "valem apenas para o servidor, que responde sozinho por eles",
        "são mantidos, pois os atos se imputam ao órgão, e não à pessoa",
      ],
      correta: 4,
      explicacao: "Como o ato é imputado ao órgão, a aparência de legalidade e a boa-fé dos terceiros levam à manutenção dos efeitos.",
      explicacaoErradas:
        "“inexistentes” vale para a usurpação de função, em que não há nenhuma investidura. “devolução dos valores” ignora a boa-fé. “Tribunal de Contas” não tem esse papel. “apenas para o servidor” contraria a imputação ao órgão.",
      pegadinha: "Confundir funcionário de fato com usurpador de função.",
      conhecimento: "A usurpação de função é crime do art. 328 do Código Penal.",
    },
    {
      topico: "Princípios expressos",
      subassunto: "Nepotismo",
      dificuldade: 5,
      raciocinio: "Conte os graus: sobrinho é terceiro, primo é quarto.",
      enunciado:
        "A mesma autoridade nomeou para cargos em comissão o próprio sobrinho e o próprio primo, em nomeações sem relação uma com a outra e sem designações recíprocas. Pela Súmula Vinculante 13, há violação",
      alternativas: [
        "nas duas nomeações, pois o vínculo de parentesco basta",
        "em nenhuma, pois a regra só alcança cônjuge e filhos",
        "só na nomeação do sobrinho, parente de terceiro grau",
        "só na nomeação do primo, parente colateral de terceiro grau",
        "só se houver lei específica no ente que proíba a nomeação",
      ],
      correta: 2,
      explicacao: "A súmula vai até o terceiro grau, inclusive. O sobrinho é colateral de terceiro grau, e o primo é colateral de quarto grau.",
      explicacaoErradas:
        "“nas duas” ignora o limite de grau. “cônjuge e filhos” reduz demais a súmula. “primo, parente colateral de terceiro grau” erra a contagem. “lei específica” não é necessária, pois a vedação decorre da própria Constituição.",
      pegadinha: "Contar o primo como terceiro grau.",
      conhecimento: "O nepotismo cruzado, por designações recíprocas, também é alcançado pela súmula.",
    },
    {
      topico: "Princípios expressos",
      subassunto: "Publicidade",
      dificuldade: 4,
      raciocinio: "O STF deu peso maior ao interesse público nesse caso.",
      enunciado:
        "Um servidor pede a retirada de seu nome e de sua remuneração do portal de transparência do órgão, alegando intimidade. Segundo a tese do STF no Tema 483, a publicação nominal dos vencimentos é",
      alternativas: [
        "ilegítima, pois a remuneração é dado pessoal sigiloso",
        "legítima, mesmo em sítio eletrônico da Administração",
        "legítima só para ocupantes de cargos em comissão",
        "legítima desde que o servidor autorize por escrito",
        "ilegítima, salvo por ordem judicial em cada um dos casos",
      ],
      correta: 1,
      explicacao: "O STF fixou que é legítima a publicação, inclusive em sítio eletrônico da Administração, dos nomes dos servidores e dos valores de seus vencimentos e vantagens.",
      explicacaoErradas:
        "“dado pessoal sigiloso” contraria a tese. “cargos em comissão” limita o que o STF não limitou. “autorize por escrito” e “ordem judicial” criam condições que a tese não prevê.",
      pegadinha: "Levar a proteção da intimidade para a remuneração pública.",
      conhecimento: "Dados como CPF e endereço residencial continuam protegidos.",
    },
    {
      topico: "Princípios implícitos",
      subassunto: "Continuidade",
      dificuldade: 5,
      raciocinio: "Quem atua diretamente na segurança pública não faz greve.",
      enunciado:
        "Uma entidade de policiais rodoviários federais planeja paralisação de 48 horas, mantendo 30% do efetivo nas rodovias. Segundo a tese do STF no Tema 541, a paralisação é",
      alternativas: [
        "permitida, pois foi mantido efetivo mínimo nas rodovias",
        "permitida, com a aplicação da lei de greve do setor privado",
        "permitida, com o desconto dos dias não trabalhados",
        "vedada, pois a greve é proibida na segurança pública",
        "vedada só aos militares, o que não alcança policiais civis",
      ],
      correta: 3,
      explicacao: "O STF proibiu a greve, sob qualquer forma ou modalidade, aos policiais civis e a todos os servidores que atuem diretamente na área de segurança pública.",
      explicacaoErradas:
        "“efetivo mínimo” e “lei de greve do setor privado” são a solução geral dos demais servidores. “desconto dos dias” também pertence à regra geral. “só aos militares” esquece a tese, que vai além deles.",
      pegadinha: "Aplicar à polícia a regra geral dos servidores civis.",
      conhecimento: "A tese exige a participação do poder público em mediação, para que as categorias apresentem seus interesses.",
    },
    {
      topico: "Princípios implícitos",
      subassunto: "Proporcionalidade",
      dificuldade: 4,
      raciocinio: "Havia meio menos gravoso e igualmente útil?",
      enunciado:
        "Para resolver a irregularidade de uma única lanchonete em área de domínio público, a autoridade interdita, por 90 dias, todas as lojas do local. Uma simples notificação à lanchonete teria o mesmo resultado. O ato viola, em primeiro lugar, o subprincípio da",
      alternativas: [
        "necessidade, pois havia meio menos gravoso igualmente eficaz",
        "tipicidade, pois a interdição não é medida prevista",
        "publicidade, pois faltou aviso oficial aos comerciantes",
        "autotutela, pois o ato não foi revisto de ofício",
        "continuidade, pois os serviços privados foram interrompidos",
      ],
      correta: 0,
      explicacao: "A necessidade exige o meio menos gravoso entre os igualmente eficazes. A Lei 9.784/1999, art. 2º, parágrafo único, VI, veda medida superior à estritamente necessária.",
      explicacaoErradas:
        "“tipicidade” não é subprincípio da proporcionalidade. “aviso oficial” não está em discussão. “autotutela” é dever de revisão e não mede excesso. “continuidade” trata de serviço público.",
      pegadinha: "Trocar necessidade por adequação.",
      conhecimento: "Os três testes são adequação, necessidade e proporcionalidade em sentido estrito.",
    },
    {
      topico: "Regime jurídico",
      subassunto: "Prerrogativas e sujeições",
      dificuldade: 4,
      raciocinio: "Poder vem da supremacia. Limite vem da indisponibilidade.",
      enunciado:
        "Considere o dever de licitar e a alteração unilateral de um contrato pela Administração. No regime jurídico-administrativo, esses dois exemplos decorrem, respectivamente, da",
      alternativas: [
        "supremacia e da indisponibilidade do interesse público",
        "publicidade e da eficiência administrativa",
        "indisponibilidade e da supremacia do interesse público",
        "legalidade e da continuidade do serviço público",
        "isonomia e da segurança jurídica, na ordem indicada",
      ],
      correta: 2,
      explicacao: "A indisponibilidade impõe sujeições, como licitar. A supremacia dá prerrogativas, como alterar o contrato de forma unilateral.",
      explicacaoErradas:
        "“supremacia e da indisponibilidade” inverte a ordem. “publicidade”, “legalidade” e “isonomia” aparecem em muitas situações, mas não são os dois pilares do regime.",
      pegadinha: "Inverter os dois pilares.",
      conhecimento: "A expressão “pedras de toque” do regime é usada pela doutrina para esses dois princípios.",
    },
    {
      topico: "Princípios implícitos",
      subassunto: "Segurança jurídica",
      dificuldade: 5,
      raciocinio: "Nova interpretação olha para frente.",
      enunciado:
        "Um órgão muda a interpretação de uma norma e, com base na nova leitura, tenta rever situações antigas, consolidadas sob a orientação anterior. Pelo art. 2º, parágrafo único, XIII, da Lei 9.784/1999, a revisão",
      alternativas: [
        "é obrigatória, pois a legalidade prevalece sempre",
        "é vedada, pois não cabe aplicação retroativa de nova interpretação",
        "é possível, se o agente que decidiu antes já tiver deixado o cargo",
        "é possível, desde que o novo entendimento seja mais técnico",
        "depende de aprovação prévia pelo Tribunal de Contas da União",
      ],
      correta: 1,
      explicacao: "A norma deve ser interpretada do modo que melhor garanta o fim público, vedada a aplicação retroativa de nova interpretação.",
      explicacaoErradas:
        "“legalidade prevalece sempre” ignora a segurança jurídica. “deixado o cargo” é irrelevante. “mais técnico” não autoriza retroagir. “Tribunal de Contas” não aparece no dispositivo.",
      pegadinha: "Tratar mudança de interpretação como anulação de ato ilegal.",
      conhecimento: "A proteção da confiança é a face subjetiva da segurança jurídica.",
    },
  ],
};
