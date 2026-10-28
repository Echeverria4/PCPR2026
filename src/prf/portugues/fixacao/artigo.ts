import type { QuestaoFixacao } from "../tipos";

export const FIX_ARTIGO: QuestaoFixacao[] = [
  {
    id: "pi-artigo-1",
    licao: "artigo",
    nivel: 1,
    enunciado: "Em \"Um agente ligou para a base.\", as palavras \"um\" e \"a\" são, respectivamente:",
    alternativas: [
      { t: "numeral e preposição", por: "Não há ideia de quantidade em 'um'; e 'a' acompanha o substantivo 'base'." },
      { t: "artigo indefinido e artigo definido", por: "Correta: 'um' generaliza (um agente qualquer); 'a' determina (a base conhecida). Em 'para a', 'a' é artigo depois da preposição." },
      { t: "pronome indefinido e pronome oblíquo", por: "'A' não substitui nome; ele acompanha 'base'." },
      { t: "artigo definido e preposição", por: "'Um' é artigo indefinido, não definido." },
      { t: "numeral e artigo definido", por: "Sem contexto de quantidade ('só um', 'um, e não dois'), 'um' é artigo." },
    ],
    correta: 1,
    raciocinio: "Artigo definido particulariza (o, a, os, as); indefinido generaliza (um, uma, uns, umas). 'Um' só é numeral quando a frase dá ideia de quantidade.",
  },
  {
    id: "pi-artigo-2",
    licao: "artigo",
    nivel: 2,
    enunciado: "Em qual frase o \"a\" é artigo definido?",
    alternativas: [
      { t: "Entregou o ofício a todos os presentes.", por: "Antes de pronome indefinido masculino plural, 'a' é preposição (entregar a alguém)." },
      { t: "A equipe concluiu a vistoria cedo.", por: "Correta: os dois 'a' acompanham substantivos femininos (equipe, vistoria) e os determinam." },
      { t: "Encontrei-a na saída da reunião.", por: "'A' junto do verbo, substituindo um nome: pronome oblíquo átono." },
      { t: "Ficou a dois metros da viatura.", por: "Indica distância antes de numeral masculino: preposição." },
      { t: "Começou a redigir o relatório final.", por: "Antes de verbo no infinitivo, 'a' é preposição." },
    ],
    correta: 1,
    raciocinio: "Teste da troca: substitua o nome por um masculino. Se o 'a' virar 'o' (o grupo concluiu o trabalho), é artigo. Antes de verbo, de masculino ou de numeral, é preposição; junto de verbo, no lugar de um nome, é pronome.",
  },
  {
    id: "pi-artigo-3",
    licao: "artigo",
    nivel: 3,
    enunciado: "Assinale a frase em que a presença ou a ausência do artigo altera o sentido.",
    alternativas: [
      { t: "Ambos os agentes assinaram o termo de ocorrência.", por: "'Ambos os' é a construção padrão; sem o artigo não há mudança de sentido, só de registro." },
      { t: "Toda a cidade acompanhou a operação de resgate.", por: "Correta: 'toda a cidade' = a cidade inteira; 'toda cidade' = qualquer cidade." },
      { t: "Meu colega trouxe o laudo assinado pelo perito.", por: "Antes de possessivo, o artigo é facultativo: 'o meu colega' = 'meu colega'." },
      { t: "O motorista cujo carro foi guinchado voltou.", por: "'Cujo' não admite artigo depois; não há duas formas para comparar." },
      { t: "Saímos antes de o sol nascer naquela manhã.", por: "A forma sem contração é a recomendada; não há outra leitura de sentido." },
    ],
    correta: 1,
    raciocinio: "Com 'todo' no singular, o artigo decide o sentido: 'todo o' = inteiro; 'todo' sem artigo = qualquer. No plural, o artigo é obrigatório: 'todos os dias'.",
  },
  {
    id: "pi-artigo-4",
    licao: "artigo",
    nivel: 4,
    enunciado: "Qual frase está de acordo com a norma-padrão quanto ao emprego do artigo?",
    alternativas: [
      { t: "O servidor, cujo o pedido foi negado, recorreu.", por: "'Cujo' não admite artigo depois: 'cujo pedido'." },
      { t: "Ambos agentes chegaram atrasados à reunião.", por: "A norma pede 'ambos os agentes'." },
      { t: "Está na hora da equipe sair para o patrulhamento.", por: "'A equipe' é sujeito de 'sair': a norma recomenda 'hora de a equipe sair'." },
      { t: "Antes de o prazo acabar, todos os relatórios chegaram.", por: "Correta: sujeito de infinitivo não se contrai com a preposição, e 'todos os' leva artigo." },
      { t: "Todos dias o agente confere os equipamentos da viatura.", por: "No plural, 'todos' exige artigo: 'todos os dias'." },
    ],
    correta: 3,
    raciocinio: "Quatro regras em jogo: 'cujo' sem artigo depois; 'ambos os'; 'todos os' no plural; e não contrair a preposição com o artigo do sujeito de um infinitivo (antes de o prazo acabar, hora de a equipe sair).",
  },
];
