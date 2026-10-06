import type { ModeloMental } from "../../lib/types";

/** TI — modelos mentais dos tópicos de conteudos/ti-crimes.ts (mesmas strings de tópico). */
export const MODELOS_MENTAIS_TI_CRIMES: ModeloMental[] = [
  {
    topico: "Furto e estelionato por fraude eletrônica (arts. 155, §§4º-B e 4º-C, e 171, §§2º-A e 2º-B, do CP, com as penas da Lei 15.397/2026)",
    origem: "oficial",
    gancho: "Quem apertou o botão? Vítima entregou = estelionato; criminoso tirou = furto.",
    modelo:
      "Pergunte se a vítima, enganada, entregou o valor (estelionato, §2º-A, 4 a 8) ou se o agente subtraiu burlando a vigilância (furto, §4º-B, 4 a 10 desde a Lei 15.397/2026). Servidor no exterior soma 1/3 a 2/3; idoso ou vulnerável, 1/3 ao dobro. O estelionato agora é de ação pública incondicionada e, quando há depósito, cheque ou transferência, corre no domicílio da vítima (CPP, art. 70, §4º).",
  },
  {
    topico: "Invasão de dispositivo informático (arts. 154-A e 154-B do CP) e Lei 12.737/2012",
    origem: "oficial",
    gancho: "Entrou com intenção, já consumou; senha não precisa ter sido quebrada.",
    modelo:
      "O art. 154-A é crime formal: basta invadir dispositivo de uso alheio com o fim de obter, adulterar ou destruir dados ou instalar vulnerabilidades (1 a 4 anos). Comunicações privadas, segredos ou controle remoto qualificam (2 a 5), e divulgar, comercializar ou transmitir a terceiro soma 1/3 a 2/3. A ação depende de representação, salvo contra a administração pública ou concessionária de serviço público (art. 154-B).",
  },
  {
    topico: "Crimes em redes sociais e na internet (honra online, perseguição, violência psicológica com IA, arts. 216-B e 218-C, ECA e art. 266)",
    origem: "oficial",
    gancho: "Rede social multiplica: honra no triplo, IA na violência psicológica +metade.",
    modelo:
      "A internet costuma ser meio e causa de aumento: honra em rede social tem pena triplicada (art. 141, §2º); violência psicológica com IA ou deepfake, +metade (art. 147-B, parágrafo único). Perseguição exige reiteração e representação (art. 147-A). Registrar intimidade é o art. 216-B; divulgar cena íntima sem consentimento é o art. 218-C (4 a 10, com aumento por vingança).",
  },
  {
    topico: "Evidência digital: coleta, preservação, hash, imagem forense e cadeia de custódia (arts. 158-A a 158-F do CPP)",
    origem: "oficial",
    gancho: "Isola, copia bit a bit, calcula o hash, trabalha na cópia e documenta tudo.",
    modelo:
      "A cadeia de custódia vai do reconhecimento ao descarte, em 10 etapas na ordem do art. 158-B, e começa com a preservação do local. Na prática digital, coleta-se primeiro o mais volátil (RAM), isola-se o celular da rede, espelha-se a mídia com bloqueador de escrita e registra-se o hash. Acessar celular apreendido sem ordem judicial torna a prova ilícita.",
  },
  {
    topico: "Rastreamento e recuperação de informações (IP, porta lógica, registros de conexão e de aplicação, dados cadastrais, arquivos apagados)",
    origem: "oficial",
    gancho: "Aplicação (6 meses) → IP, porta e hora → conexão (1 ano) → assinante.",
    modelo:
      "Do conteúdo se chega ao provedor de aplicação, que dá IP, porta lógica e horário; com eles, o provedor de conexão aponta o assinante. A guarda pode ser pedida cautelarmente pela polícia, mas o fornecimento dos registros exige ordem judicial, com pedido em 60 dias; já os dados cadastrais podem ser requisitados diretamente. Arquivo apagado em regra continua no disco até ser sobrescrito.",
  },
  {
    topico: "Inteligência cibernética, deep web e dark web e infiltração virtual de agentes (Lei 12.850, arts. 10-A a 10-D; ECA, art. 190-A)",
    origem: "oficial",
    gancho: "Orcrim: 6 meses por vez; ECA: 90 dias por vez; teto comum de 720 dias.",
    modelo:
      "Inteligência produz conhecimento para decidir; investigação produz prova. Deep web é tudo o que não é indexado e dark web é a parte que exige software próprio, como o Tor. A infiltração virtual depende de ordem judicial e de subsidiariedade, e o policial que oculta a identidade não comete crime, mas responde pelos excessos.",
  },
  {
    topico: "Marco Civil da Internet detalhado (princípios, neutralidade, guarda de registros e arts. 19 e 21 após o STF, Temas 533 e 987)",
    origem: "oficial",
    gancho: "Depois do STF, notificação virou regra; honra ainda pede ordem judicial.",
    modelo:
      "O Marco Civil tem a liberdade de expressão como fundamento, garante a neutralidade de rede e fixa a guarda de 1 ano (conexão) e 6 meses (aplicação). Em 2025 o STF declarou o art. 19 parcialmente inconstitucional: em regra, a plataforma notificada que não remove conteúdo criminoso responde (modelo do art. 21). A exceção são os crimes contra a honra, que seguem o art. 19; anúncios pagos e robôs geram responsabilidade presumida.",
  },
  {
    topico: "LGPD detalhada (princípios, bases legais, dados sensíveis, direitos do titular, agentes de tratamento, ANPD e sanções)",
    origem: "oficial",
    gancho: "Pessoa natural, dez bases, sensível sem legítimo interesse, multa de 2% até R$ 50 milhões.",
    modelo:
      "A LGPD protege só a pessoa natural e não se aplica ao tratamento feito exclusivamente para segurança pública e investigação penal, que segue lei específica proporcional (art. 4º, III). Controlador decide, operador executa e encarregado faz a ponte com titulares e ANPD, hoje Agência vinculada ao MJSP. A multa é de até 2% do faturamento, limitada a R$ 50 milhões por infração, e não se aplica a órgãos públicos.",
  },
  {
    topico: "Sigilo funcional e uso ético da tecnologia e das informações institucionais (arts. 313-A, 313-B e 325 do CP)",
    origem: "oficial",
    gancho: "Dado falso no sistema é 313-A; mexer no programa é 313-B; abrir a boca é 325.",
    modelo:
      "O art. 313-A pune o funcionário autorizado que insere dado falso ou exclui dado correto para obter vantagem (2 a 12 anos); o 313-B, quem altera sistema ou programa sem autorização. O art. 325 pune revelar segredo funcional, emprestar senha ou usar indevidamente o acesso restrito, e não tem forma culposa. Consulta só por necessidade do serviço, e dado sigiloso não vai para IA pública nem para grupo pessoal.",
  },
  {
    topico: "ECA Digital (Lei 15.211/2025): proteção de crianças e adolescentes em ambientes digitais",
    origem: "aposta",
    gancho: "ECA Digital: verificar idade de verdade, sem loot box, conta vinculada até 16, denunciar abuso",
    modelo:
      "Lei 15.211/2025, em vigor desde 17/03/2026. Vale para serviço digital direcionado a criança e adolescente ou de acesso provável por eles, esteja a empresa onde estiver. Quatro pontos: conteúdo +18 exige verificação de idade confiável a cada acesso, vedada a autodeclaração (art. 9º); loot box proibida em jogo de acesso provável por menores (art. 20); conta de até 16 anos vinculada à de um responsável (art. 24); conteúdo de abuso, exploração, sequestro e aliciamento é removido e comunicado às autoridades (art. 27). Sanções só administrativas (art. 35): advertência com até 30 dias, multa de até 10% do faturamento no Brasil ou até R$ 50 milhões por infração, suspensão e proibição. Não cria crime.",
  },
  {
    topico: "Criptoativos e fraudes com ativos virtuais (art. 171-A do CP, Lei 14.478/2022)",
    origem: "aposta",
    gancho: "Cripto: 171-A é o estelionato da carteira; na lavagem, ativo virtual aumenta a pena",
    modelo:
      "Lei 14.478/2022 (marco dos criptoativos) fez três coisas no Penal: criou o art. 171-A do CP (fraude com ativos virtuais, valores mobiliários ou ativos financeiros, reclusão de 4 a 8 anos e multa), pôs o ativo virtual como causa de aumento de 1/3 a 2/3 na lavagem (Lei 9.613, art. 1º, §4º) e equiparou a corretora (exchange) a instituição financeira na Lei 7.492. Blockchain é pública mas pseudônima: quem identifica o dono é a corretora, por ordem judicial. Pirâmide financeira é economia popular (Lei 1.521, art. 2º, IX, detenção de 6 meses a 2 anos), da Justiça Estadual (Súmula 498 do STF).",
  },
];
