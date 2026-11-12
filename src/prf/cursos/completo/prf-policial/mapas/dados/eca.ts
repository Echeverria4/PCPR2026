import type { MapaAula } from "../tipos";

export const MAPAS_ECA: MapaAula[] = [
  {
    aula: "eca-01",
    centro: { titulo: "ECA: parte geral", emoji: "🧒", sub: "Proteção integral" },
    desenho: "escudo",
    ramos: [
      { rotulo: "Quem é quem", emoji: "🎂", cor: "azul", folhas: ["Criança: até **12 incompletos**", "Adolescente: **12 a 18**", "Critério: só a **idade**"] },
      { rotulo: "Prioridade absoluta", emoji: "⭐", cor: "verde", folhas: ["Socorro **primeiro**", "Precedência nos **serviços públicos**", "Inclui a **natureza** desde 2026"] },
      { rotulo: "Saúde", emoji: "💉", cor: "ouro", folhas: ["Prontuário por **18 anos**", "Maus-tratos: avisar **Conselho Tutelar**", "Castigo físico: medidas do **Conselho**"] },
      { rotulo: "Família", emoji: "👪", cor: "roxo", folhas: ["Pobreza **não tira** poder familiar", "Abandono afetivo: **ilícito**", "Acolhimento: até **18 meses**"] },
      { rotulo: "Adoção", emoji: "🏡", cor: "laranja", folhas: ["**Irrevogável**, sem procuração", "**16 anos** mais velho", "Avós e irmãos **não adotam**"] },
      { rotulo: "Trabalho", emoji: "🔧", cor: "rosa", folhas: ["Abaixo de **16**: proibido", "Aprendiz a partir de **14**", "Noturno: **22h às 5h** vedado"] },
    ],
    macete: "Doze anos completos: virou adolescente. Dezoito: sai do ECA, salvo casos expressos até 21.",
    cuidado: "O art. 60 do ECA ainda fala em 14 anos, mas vale a Constituição: trabalho só a partir de 16, salvo aprendiz desde 14.",
  },
  {
    aula: "eca-02",
    centro: { titulo: "Ato infracional", emoji: "🚸", sub: "Prevenção, medidas e Conselho" },
    desenho: "rodovia",
    ramos: [
      { rotulo: "Viagem no Brasil", emoji: "🚌", cor: "azul", folhas: ["Menor de **16**: precisa autorização", "Dispensa: parente até **3º grau**", "Primo: **4º grau**, não serve"] },
      { rotulo: "Viagem ao exterior", emoji: "🛫", cor: "verde", folhas: ["Vale até os **18**", "Com um dos pais: **firma reconhecida**", "Com estrangeiro: **sempre juiz**"] },
      { rotulo: "Vendas proibidas", emoji: "🚫", cor: "ouro", folhas: ["Arma, bebida e **fogos**", "Bilhete **lotérico**", "Hotel só com **pais** ou autorização"] },
      { rotulo: "Medidas", emoji: "📋", cor: "roxo", folhas: ["Criança: só **proteção**", "Adolescente: **socioeducativa**", "Idade na **data do fato**"] },
      { rotulo: "Internação", emoji: "🔒", cor: "laranja", folhas: ["Violência ou **grave ameaça**", "Reavalia a cada **6 meses**", "Teto **3 anos**; sai aos **21**"] },
      { rotulo: "Conselho Tutelar", emoji: "🏠", cor: "rosa", folhas: ["Órgão **não jurisdicional**", "**Cinco** escolhidos, 4 anos", "Revisão só pelo **juiz**"] },
    ],
    macete: "Tráfico sozinho não interna: precisa de violência, reiteração grave ou descumprimento reiterado de medida.",
    cuidado: "Internação provisória, antes da sentença, dura no máximo 45 dias. A remissão do Ministério Público exclui o processo; a do juiz suspende ou extingue.",
  },
  {
    aula: "eca-03",
    centro: { titulo: "Justiça da Infância", emoji: "⚖️", sub: "Abordagem, sigilo e crimes" },
    desenho: "viatura",
    ramos: [
      { rotulo: "Sigilo", emoji: "🤐", cor: "azul", folhas: ["Sem **foto** nem nome", "Nem as **iniciais**", "Divulgar: infração **administrativa**"] },
      { rotulo: "Na apreensão", emoji: "🚓", cor: "verde", folhas: ["Flagrante: vai à **delegacia**", "Violência: **auto** de apreensão", "Pais vêm: **liberado** sob termo"] },
      { rotulo: "Transporte", emoji: "🚐", cor: "ouro", folhas: ["Proibido: **compartimento fechado**", "Separado dos **adultos**", "Polícia: no máximo **24 horas**"] },
      { rotulo: "Ministério Público", emoji: "📣", cor: "roxo", folhas: ["Ouve **informalmente**", "Arquiva, dá **remissão** ou representa", "Sem **defensor**: não processa"] },
      { rotulo: "Infiltração virtual", emoji: "🕵️", cor: "laranja", folhas: ["Com **autorização judicial**", "Até **90 dias** por vez", "Total de **720 dias**", "Ronda virtual: **sem juiz**"] },
      { rotulo: "Crimes sexuais", emoji: "💻", cor: "rosa", folhas: ["Produzir ou vender: **4 a 10**", "Possuir: **3 a 6**", "Montagem ou IA: **3 a 5**"] },
    ],
    macete: "Adolescente nunca vai em compartimento fechado de viatura nem fica junto de adultos.",
    cuidado: "Penas, termos e conceito dos arts. 240 a 241-E, com imagem gerada por IA, e a ronda virtual vêm da Lei 15.487/2026: vale o texto atual.",
  },
];
