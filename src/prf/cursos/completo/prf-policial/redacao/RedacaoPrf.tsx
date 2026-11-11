import { useEffect, useState, type ReactNode } from "react";
import EstudoGuiado, { montarPassos, type SecaoGuiada } from "../../../../portugues/EstudoGuiado";
import type { Bloco } from "../../../../portugues/tipos";
import { Blocos, GlossarioToque, Rico } from "../../../../portugues/Visuais";
import {
  BLOCOS_REDACAO,
  CAMPOS_PLANO,
  CRITERIOS,
  ESQUELETO,
  GUIA,
  MAX_LINHAS,
  NOTA_MAXIMA,
  NOTA_MINIMA,
  NOTA_ZERO,
  PERGUNTA_ASPECTO,
  PESO_ERROS,
} from "./guia";
import { ORDEM_TEMAS, TEMAS, TEMA_POR_N } from "./index";
import { OFICIAL } from "./oficial";
import {
  atualizarTema,
  contaFeitas,
  feitasNaSemana,
  lerProgresso,
  salvarPassoGuia,
  salvarPassoOficial,
  semanaDe,
  temaDaSemana,
  TOTAL_TEMAS,
  type EstadoTema,
  type ProgressoRedacao,
} from "./progresso";
import type { Avaliacao, CampoPlano, CriterioId, TelaRedacaoPrf, TemaPrf } from "./tipos";

type Plano = EstadoTema["plano"];
type IrPara = (t: TelaRedacaoPrf) => void;

/** Telas de cada tema: plano (2), escrita (2), modelo (5), repertório e conectivos (2), nota (2). */
const PASSOS_TEMA = 13;
const PASSOS_GUIA = montarPassos(GUIA).length;
const PASSOS_OFICIAL = montarPassos(OFICIAL).length;
const INICIO: TelaRedacaoPrf = { tipo: "inicio" };

const PONTOS: Record<Avaliacao, number> = { sim: 1, parte: 0.5, nao: 0 };
const OPCOES: { id: Avaliacao; rotulo: string }[] = [
  { id: "sim", rotulo: "Sim" },
  { id: "parte", rotulo: "Em parte" },
  { id: "nao", rotulo: "Não" },
];

const REGRAS: Bloco[] = [
  {
    tipo: "lista",
    titulo: "Como no dia da prova",
    itens: [
      "Escreva **à mão**, em folha pautada, com caneta esferográfica de **tinta preta** e corpo transparente.",
      "Até **30 linhas**: o que passar da 30ª linha não é corrigido. Mire entre 25 e 30.",
      "Nada que identifique você: nem nome, nem assinatura, nem rubrica.",
      "Título não é pedido. Se usar, ele ocupa uma das 30 linhas.",
      "Responda aos **três aspectos**, na ordem, um em cada parágrafo.",
    ],
  },
  {
    tipo: "chaves",
    titulo: "Os 5 parágrafos",
    ramos: ESQUELETO.map((p) => ({ rotulo: `${p.parte} · ${p.linhas}`, texto: p.funcao })),
  },
];

const dataCurta = (d: Date) => d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
const contarPalavras = (s: string) => s.split(/\s+/).filter(Boolean).length;
const juntar = (ns: number[]) => (ns.length > 1 ? `${ns.slice(0, -1).join(", ")} e ${ns[ns.length - 1]}` : `${ns[0]}`);
const numero = (v: number) => v.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

/** A nota de conteúdo (NC) da autoavaliação; indefinida enquanto faltar resposta a um critério. */
function conteudoDe(e: EstadoTema): number | undefined {
  let total = 0;
  for (const c of CRITERIOS) {
    const a = e.avaliacao?.[c.id];
    if (!a) return undefined;
    total += c.max * PONTOS[a];
  }
  return total;
}

/** NPD = NC − 4 × NE ÷ TL, nunca abaixo de zero; zero num caso de nota zero; indefinida enquanto faltar dado. */
function notaDe(e: EstadoTema): number | undefined {
  if (e.zerou) return 0;
  const nc = conteudoDe(e);
  if (nc === undefined || e.ne === undefined || !e.tl) return undefined;
  return Math.max(0, Math.round((nc - (PESO_ERROS * e.ne) / e.tl) * 100) / 100);
}

/** No tema já feito, a nota guardada acompanha a autoavaliação revista. */
const comNota = (e: EstadoTema): EstadoTema => (e.feitaEm ? { ...e, nota: notaDe(e) } : e);

function statusTema(e: EstadoTema | undefined): { rotulo: string; classe: string } {
  if (e?.feitaEm) {
    const nota = e.nota !== undefined ? ` · nota ${numero(e.nota)}/${NOTA_MAXIMA}` : "";
    return { rotulo: `Feita em ${dataCurta(new Date(e.feitaEm))}${nota}`, classe: "pi-status-ok" };
  }
  if (e?.passo && e.passo > PASSOS_TEMA) return { rotulo: "Falta marcar como feita", classe: "pi-status-visto" };
  if (e?.passo) return { rotulo: `Em andamento: passo ${e.passo} de ${PASSOS_TEMA}`, classe: "pi-status-visto" };
  return { rotulo: "Novo", classe: "pi-status-novo" };
}

/** O botão principal: continuar o tema começado, fazer o da semana ou, com a meta cumprida, adiantar o próximo. */
function chamada(p: ProgressoRedacao): { n: number; rotulo: string } | null {
  const n = temaDaSemana(p, ORDEM_TEMAS);
  if (n === undefined) return null;
  const passo = p.temas[n]?.passo ?? 0;
  if (passo > PASSOS_TEMA) return { n, rotulo: `Continuar o tema ${n}: falta marcar como feita` };
  if (passo >= 1) return { n, rotulo: `Continuar o tema ${n}: passo ${passo} de ${PASSOS_TEMA}` };
  if (feitasNaSemana(p).length > 0) return { n, rotulo: `Adiantar o próximo: tema ${n}` };
  return { n, rotulo: `Fazer a redação desta semana: tema ${n}` };
}

/** A redação da PRF Policial: a lista dos temas com a meta da semana, o passo a passo de cada tema e o guia. */
export default function RedacaoPrf({ tela, onTela }: { tela: TelaRedacaoPrf; onTela: IrPara }) {
  const [progresso, setProgresso] = useState(lerProgresso);

  if (tela.tipo === "guia") return <GuiaRedacao progresso={progresso} onProgresso={setProgresso} onTela={onTela} />;
  if (tela.tipo === "oficial") return <OficialRedacao progresso={progresso} onProgresso={setProgresso} onTela={onTela} />;
  const tema = tela.tipo === "tema" ? TEMA_POR_N[tela.n] : undefined;
  if (tema) return <FluxoTema key={tema.n} tema={tema} progresso={progresso} onProgresso={setProgresso} onTela={onTela} />;
  return <InicioRedacao progresso={progresso} onTela={onTela} />;
}

function InicioRedacao({ progresso, onTela }: { progresso: ProgressoRedacao; onTela: IrPara }) {
  const hoje = new Date();
  const { inicio, fim } = semanaDe(hoje);
  const domingo = new Date(fim);
  domingo.setDate(domingo.getDate() - 1);
  const feitas = feitasNaSemana(progresso, hoje);
  const total = contaFeitas(progresso);
  const faltam = TOTAL_TEMAS - total;
  const daSemana = temaDaSemana(progresso, ORDEM_TEMAS);
  const acao = chamada(progresso);
  // Uma por semana, a partir desta (ou da próxima, se a desta já foi feita): o domingo em que a última fica pronta.
  const prazo = new Date(domingo);
  prazo.setDate(prazo.getDate() + 7 * (faltam - (feitas.length > 0 ? 0 : 1)));
  const guia = progresso.guiaLido
    ? { rotulo: "Lido", classe: "pi-status-ok" }
    : progresso.guiaPasso
      ? { rotulo: `Em andamento: passo ${progresso.guiaPasso} de ${PASSOS_GUIA}`, classe: "pi-status-visto" }
      : { rotulo: "Novo", classe: "pi-status-novo" };
  const oficial = progresso.oficialLido
    ? { rotulo: "Lido", classe: "pi-status-ok" }
    : progresso.oficialPasso
      ? { rotulo: `Em andamento: passo ${progresso.oficialPasso} de ${PASSOS_OFICIAL}`, classe: "pi-status-visto" }
      : { rotulo: "Novo", classe: "pi-status-novo" };

  return (
    <>
      <h2 className="secao-titulo">Redação · PRF Policial</h2>
      <p className="conteudo-intro">
        A discursiva da PRF é um texto dissertativo de até 30 linhas, com três aspectos pedidos. Aqui estão {TOTAL_TEMAS}{" "}
        temas prováveis, cada um com uma redação-modelo. A meta é uma por semana: planejar, escrever à mão, comparar com o
        modelo e calcular a sua nota com a conta da banca.
      </p>

      <div className="pi-painel pi-red-semana">
        <p className="pi-red-semana-datas">
          Semana de {dataCurta(inicio)} a {dataCurta(domingo)}
        </p>
        <p className="pi-red-semana-meta">
          {feitas.length > 0 ? (
            <>
              ✓ Meta da semana cumprida:{" "}
              {feitas.length === 1 ? `tema ${feitas[0]} (${TEMA_POR_N[feitas[0]]?.recorte})` : `temas ${juntar(feitas)}`}.
            </>
          ) : daSemana !== undefined ? (
            <>
              Tema da semana:{" "}
              <strong>
                {daSemana} · {TEMA_POR_N[daSemana]?.recorte}
              </strong>
            </>
          ) : (
            `Os ${TOTAL_TEMAS} temas estão feitos. Refaça os de nota mais baixa.`
          )}
        </p>
        <div className="pi-acoes">
          {acao && (
            <button className="botao botao-ouro" onClick={() => onTela({ tipo: "tema", n: acao.n })}>
              {acao.rotulo}
            </button>
          )}
          {!progresso.guiaLido && (
            <button className="botao" onClick={() => onTela({ tipo: "guia" })}>
              Antes, ler o guia
            </button>
          )}
        </div>
        <div
          className="progresso-barra pi-red-barra"
          role="progressbar"
          aria-label="Redações feitas"
          aria-valuemin={0}
          aria-valuemax={TOTAL_TEMAS}
          aria-valuenow={total}
        >
          <div className="progresso-fill" style={{ width: `${(total / TOTAL_TEMAS) * 100}%` }} />
        </div>
        <p className="pi-red-conta">
          {total} de {TOTAL_TEMAS} feitas
          {faltam > 0 &&
            ` · no ritmo de uma por semana, os ${TOTAL_TEMAS} ficam prontos até ${prazo.toLocaleDateString("pt-BR")}`}
          .
        </p>
      </div>

      <h3 className="secao-titulo">Antes de começar</h3>
      <div className="modos-grid">
        <button className="modo-card pi-red-card-guia" onClick={() => onTela({ tipo: "guia" })}>
          <h3>Guia da redação</h3>
          <p>A prova, a conta da nota, o que zera, o esqueleto de 5 parágrafos, o repertório e os erros que mais custam.</p>
          <span className="pi-card-meta">
            <span className={`pi-status ${guia.classe}`}>{guia.rotulo}</span>
            <span>{PASSOS_GUIA} passos curtos</span>
          </span>
        </button>
      </div>

      <h3 className="secao-titulo">Redação Oficial · cai nas objetivas</h3>
      <p className="pi-grupo-descricao">
        Não é para escrever: são as regras do Manual da Presidência e do Decreto 9.758/2019 que a prova cobra em questões de
        Português.
      </p>
      <div className="modos-grid">
        <button className="modo-card prf-of-card" onClick={() => onTela({ tipo: "oficial" })}>
          <h3>📄 Redação Oficial</h3>
          <p>Atributos, pronomes de tratamento, Manual × Decreto, fechos, o ofício desenhado parte por parte e as pegadinhas.</p>
          <span className="pi-card-meta">
            <span className={`pi-status ${oficial.classe}`}>{oficial.rotulo}</span>
            <span>{PASSOS_OFICIAL} passos curtos</span>
          </span>
        </button>
      </div>

      {BLOCOS_REDACAO.map((b) => (
        <section key={b.n}>
          <h3 className="secao-titulo">
            Bloco {b.n} · {b.titulo}
          </h3>
          <p className="pi-grupo-descricao">{b.descricao}</p>
          <div className="pi-red-lista">
            {TEMAS.filter((t) => t.bloco === b.n).map((t) => {
              const st = statusTema(progresso.temas[t.n]);
              return (
                <button key={t.n} className="modo-card pi-card-licao" onClick={() => onTela({ tipo: "tema", n: t.n })}>
                  <span className="pi-card-num">{t.n}</span>
                  <span className="pi-card-corpo">
                    <h3>{t.recorte}</h3>
                    <p>{t.tema}</p>
                    <span className="pi-card-meta">
                      <span className={`pi-status ${st.classe}`}>{st.rotulo}</span>
                      {t.n === daSemana && feitas.length === 0 && <span className="pi-red-da-semana">tema da semana</span>}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ))}

      <p className="pi-aviso-autoral">
        As redações-modelo são exemplos de treino escritos para este app, não textos oficiais de nenhuma banca. As regras
        seguem o último edital da PRF (2021, banca Cebraspe); confirme quando sair o novo edital. A divisão dos pontos entre
        os aspectos é só do treino: na prova, cada tema tem o seu padrão de resposta.
      </p>
    </>
  );
}

function Rotulo({ children }: { children: ReactNode }) {
  return <span className="pi-red-rotulo">{children}</span>;
}

/** A proposta no formato do Cebraspe: texto motivador, tema e os três aspectos. */
function Proposta({ tema }: { tema: TemaPrf }) {
  return (
    <div className="pi-gancho prf-red-proposta">
      <Rotulo>Como a banca pode propor</Rotulo>
      <p className="prf-red-motivador">{tema.contexto}</p>
      <p>Considerando que o texto acima tem caráter unicamente motivador, redija um texto dissertativo acerca do seguinte tema.</p>
      <p className="prf-red-tema">{tema.tema}</p>
      <p>Ao elaborar seu texto, aborde os seguintes aspectos:</p>
      <ol className="prf-red-aspectos">
        {tema.aspectos.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ol>
    </div>
  );
}

interface FluxoProps {
  tema: TemaPrf;
  progresso: ProgressoRedacao;
  onProgresso: (p: ProgressoRedacao) => void;
  onTela: IrPara;
}

/** Um tema em 13 telas curtas: planejar, escrever, comparar com o modelo parágrafo por parágrafo e dar a nota. */
function FluxoTema({ tema, progresso, onProgresso, onTela }: FluxoProps) {
  const estado = progresso.temas[tema.n] ?? {};
  const mudar = (f: (t: EstadoTema) => EstadoTema) => onProgresso(atualizarTema(tema.n, f));
  const onCampo = (campo: CampoPlano, valor: string) => mudar((t) => ({ ...t, plano: { ...t.plano, [campo]: valor } }));
  const verModelo = () => mudar((t) => ({ ...t, viuModelo: true }));
  const bloco = BLOCOS_REDACAO.find((b) => b.n === tema.bloco);
  const proximo = TEMA_POR_N[tema.n + 1];
  const feita = !!estado.feitaEm;
  const nestaSemana = feitasNaSemana(progresso).includes(tema.n);

  const alternarFeita = () =>
    mudar((t) =>
      t.feitaEm ? { ...t, feitaEm: undefined, nota: undefined } : { ...t, feitaEm: new Date().toISOString(), nota: notaDe(t) },
    );

  // O número de telas é fixo (PASSOS_TEMA): o passo salvo continua valendo de uma visita para outra.
  const secoes: SecaoGuiada[] = [
    {
      titulo: "1 · Planeje",
      blocos: [],
      telas: [
        <TelaPlano key="a" tema={tema} parte={1} plano={estado.plano} onCampo={onCampo} />,
        <TelaPlano key="b" tema={tema} parte={2} plano={estado.plano} onCampo={onCampo} />,
      ],
    },
    {
      titulo: "2 · Escreva",
      blocos: [],
      telas: [
        <Blocos key="a" blocos={REGRAS} />,
        <TelaEscrita
          key="b"
          plano={estado.plano}
          texto={estado.texto ?? ""}
          onTexto={(texto) => mudar((t) => ({ ...t, texto }))}
        />,
      ],
    },
    {
      titulo: "3 · Compare com o modelo",
      blocos: [],
      telas: [0, 1, 2, 3, 4].map((k) => (
        <TelaParagrafo key={k} tema={tema} k={k} plano={estado.plano} viuModelo={!!estado.viuModelo} onVerModelo={verModelo} />
      )),
    },
    {
      titulo: "4 · Repertório e conectivos",
      blocos: [],
      telas: [<TelaRepertorio key="a" tema={tema} />, <TelaConectivos key="b" tema={tema} />],
    },
    {
      titulo: "5 · Sua nota",
      blocos: [],
      telas: [
        <TelaNotaZero key="a" zerou={estado.zerou} onZerou={(zerou) => mudar((t) => comNota({ ...t, zerou }))} />,
        <TelaCriterios
          key="b"
          tema={tema}
          estado={estado}
          onAvaliar={(id, a) => mudar((t) => comNota({ ...t, avaliacao: { ...t.avaliacao, [id]: a } }))}
          onContagem={(ne, tl) => mudar((t) => comNota({ ...t, ne, tl }))}
        />,
      ],
    },
  ];

  return (
    <GlossarioToque>
      <EstudoGuiado
        titulo={`Tema ${tema.n} · ${tema.recorte}`}
        voltarRotulo="← Redação"
        onVoltar={() => onTela(INICIO)}
        secoes={secoes}
        passoInicial={estado.passo}
        onPasso={(n) => {
          if (n !== estado.passo) mudar((t) => ({ ...t, passo: n }));
        }}
        abertura={
          <>
            <p className="pi-grupo-descricao">
              Tema {tema.n} de {TOTAL_TEMAS} · Bloco {tema.bloco}: {bloco?.titulo}
            </p>
            <Proposta tema={tema} />
            {tema.nota && <p className="pi-red-nota-tema">{tema.nota}</p>}
            <p className="pi-guiado-resumo">Você vai planejar, escrever à mão, comparar com a redação-modelo e calcular a sua nota.</p>
          </>
        }
        fim={
          <>
            <p className="pi-guiado-parabens">
              {feita
                ? `✓ Feita em ${dataCurta(new Date(estado.feitaEm as string))}${
                    estado.nota !== undefined ? ` · nota ${numero(estado.nota)}/${NOTA_MAXIMA}` : ""
                  }`
                : "Você chegou ao fim deste tema."}
            </p>
            <p className="pi-guiado-fim-texto">
              {feita
                ? nestaSemana
                  ? "Meta da semana cumprida. O próximo tema fica para a semana que vem, mas você pode adiantar."
                  : "Este tema já conta como feito."
                : notaDe(estado) === undefined
                  ? `Marque como feita para contar na meta da semana. Para guardar a nota junto, complete o passo ${PASSOS_TEMA}.`
                  : "Marque como feita para contar na meta da semana. A sua nota fica guardada junto."}
            </p>
            <div className="pi-acoes">
              <button className={`botao ${feita ? "pi-botao-feito" : "botao-ouro"}`} onClick={alternarFeita} aria-pressed={feita}>
                {feita ? "✓ Feita (desmarcar)" : "Marcar como feita"}
              </button>
              {proximo && (
                <button className="botao" onClick={() => onTela({ tipo: "tema", n: proximo.n })}>
                  Próximo: tema {proximo.n} →
                </button>
              )}
              <button className="botao" onClick={() => onTela(INICIO)}>
                ← Todos os temas
              </button>
            </div>
          </>
        }
      />
    </GlossarioToque>
  );
}

function TelaPlano({
  tema,
  parte,
  plano,
  onCampo,
}: {
  tema: TemaPrf;
  parte: 1 | 2;
  plano: Plano;
  onCampo: (campo: CampoPlano, valor: string) => void;
}) {
  const [pista, setPista] = useState(false);
  const campos = parte === 1 ? CAMPOS_PLANO.slice(0, 3) : CAMPOS_PLANO.slice(3);
  const indice: Partial<Record<CampoPlano, 0 | 1 | 2>> = { asp1: 0, asp2: 1, asp3: 2 };
  return (
    <>
      {parte === 1 && (
        <p className="pi-guiado-resumo">
          Antes de escrever, decida o que vai dizer em cada parte. Uma frase em cada campo basta: o plano fica guardado neste
          aparelho.
        </p>
      )}
      {campos.map((c) => {
        const i = indice[c.id];
        return (
          <label key={c.id} className="pi-red-campo">
            <span className="pi-red-campo-rotulo">{c.rotulo}</span>
            {i !== undefined && <span className="prf-red-aspecto-pedido">{tema.aspectos[i]}</span>}
            <span className="pi-red-campo-dica">{c.dica}</span>
            <textarea
              className="pi-red-textarea"
              rows={2}
              value={plano?.[c.id] ?? ""}
              onChange={(e) => onCampo(c.id, e.target.value)}
            />
          </label>
        );
      })}
      {parte === 2 &&
        (pista ? (
          <div className="pi-red-pista">
            <Rotulo>Pistas de repertório para este tema</Rotulo>
            <ul className="pi-red-chips">
              {tema.repertorio.map((r) => (
                <li key={r} className="pi-red-chip">
                  {r}
                </li>
              ))}
            </ul>
            <p className="pi-red-dica">Escolha um, explique o que ele diz e ligue ao aspecto em que vai usá-lo.</p>
          </div>
        ) : (
          <div className="pi-pense">
            <p>Travou em algum aspecto? Pense um pouco antes de pedir ajuda.</p>
            <button type="button" className="botao" onClick={() => setPista(true)}>
              Ver uma pista
            </button>
          </div>
        ))}
    </>
  );
}

function SeuPlano({ plano }: { plano: Plano }) {
  const preenchidos = CAMPOS_PLANO.filter((c) => plano?.[c.id]?.trim());
  if (preenchidos.length === 0)
    return <p className="pi-red-dica">Plano em branco. Se quiser planejar antes de escrever, volte ao passo 1.</p>;
  return (
    <div className="pi-red-planejou">
      <Rotulo>Seu plano</Rotulo>
      <ul>
        {preenchidos.map((c) => (
          <li key={c.id}>
            <strong>{c.rotulo}:</strong> {plano?.[c.id]?.trim()}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TelaEscrita({ plano, texto, onTexto }: { plano: Plano; texto: string; onTexto: (texto: string) => void }) {
  const palavras = contarPalavras(texto);
  // Cerca de 10 palavras por linha manuscrita.
  const linhas = Math.round(palavras / 10);
  const faixa =
    linhas < 25
      ? { texto: "abaixo de 25, desenvolva mais", classe: "pi-red-contador-alerta" }
      : linhas > MAX_LINHAS
        ? { texto: `acima de ${MAX_LINHAS}, enxugue: o excesso não é corrigido`, classe: "pi-red-contador-alerta" }
        : { texto: "dentro do tamanho", classe: "pi-red-contador-ok" };
  return (
    <>
      <p className="pi-guiado-resumo">Escreva a redação à mão, seguindo o seu plano. Quando terminar, avance.</p>
      <SeuPlano plano={plano} />
      <label className="pi-red-campo">
        <span className="pi-red-campo-rotulo">Contar as palavras (opcional)</span>
        <span className="pi-red-campo-dica">
          Digite aqui o que escreveu à mão para estimar o tamanho. O app só conta as palavras, não corrige o texto.
        </span>
        <textarea className="pi-red-textarea pi-red-textarea-texto" rows={8} value={texto} onChange={(e) => onTexto(e.target.value)} />
      </label>
      {palavras > 0 && (
        <p className={`pi-red-contador ${faixa.classe}`} aria-live="polite">
          {palavras} {palavras === 1 ? "palavra" : "palavras"} · cerca de {linhas} linhas à mão (estimativa): {faixa.texto}.
        </p>
      )}
    </>
  );
}

function TelaParagrafo({
  tema,
  k,
  plano,
  viuModelo,
  onVerModelo,
}: {
  tema: TemaPrf;
  k: number;
  plano: Plano;
  viuModelo: boolean;
  onVerModelo: () => void;
}) {
  if (!viuModelo)
    return (
      <div className="pi-pense pi-red-trava">
        <p>Escreveu a sua? Então compare. Ver o modelo antes de escrever tira o treino.</p>
        <button type="button" className="botao botao-ouro" onClick={onVerModelo}>
          Ver a redação-modelo
        </button>
      </div>
    );
  const parte = ESQUELETO[k];
  const campo = CAMPOS_PLANO.find((c) => c.id === parte.campo);
  const planejado = plano?.[parte.campo]?.trim();
  const aspecto = k >= 1 && k <= 3 ? tema.aspectos[k - 1] : undefined;
  return (
    <>
      <p className="pi-red-parte">
        Parágrafo {k + 1} de 5 · {parte.parte} <span>· {parte.linhas}</span>
      </p>
      {aspecto && (
        <p className="pi-red-tema-curto">
          <Rotulo>O aspecto pedido</Rotulo>
          {aspecto}
        </p>
      )}
      <p className="pi-red-paragrafo">
        <Rico texto={tema.paragrafos[k]} termos={false} />
      </p>
      {k === 0 && <p className="pi-red-dica">Em destaque: os conectivos que amarram as ideias.</p>}
      <Blocos
        blocos={[
          {
            tipo: "chaves",
            titulo: "O que este parágrafo faz",
            ramos: [
              { rotulo: "Função", texto: parte.funcao },
              { rotulo: "Molde", exemplo: parte.molde },
            ],
          },
        ]}
      />
      {planejado && (
        <div className="pi-red-planejou">
          <Rotulo>Você planejou · {campo?.rotulo}</Rotulo>
          <p>{planejado}</p>
        </div>
      )}
    </>
  );
}

function TelaRepertorio({ tema }: { tema: TemaPrf }) {
  return (
    <>
      <p className="pi-guiado-resumo">O repertório deste modelo. Guarde a ideia central de cada um: vários servem para outros temas.</p>
      <ul className="pi-red-chips">
        {tema.repertorio.map((r) => (
          <li key={r} className="pi-red-chip">
            {r}
          </li>
        ))}
      </ul>
      <Blocos
        blocos={[
          {
            tipo: "macete",
            texto: "Repertório não é enfeite.",
            explicacao: "Cite, explique o que ele diz e ligue ao aspecto. Na dúvida sobre um número ou artigo, use a ideia sem o número.",
          },
        ]}
      />
    </>
  );
}

function TelaConectivos({ tema }: { tema: TemaPrf }) {
  return (
    <>
      <p className="pi-guiado-resumo">
        <Rico texto="Os **conectivos** que este modelo usou. Eles mostram ao corretor onde começa cada aspecto: varie e use cada um no sentido certo." />
      </p>
      <ul className="pi-red-chips">
        {tema.conectivos.map((c) => (
          <li key={c} className="pi-red-chip pi-red-chip-conectivo">
            {c}
          </li>
        ))}
      </ul>
      <p className="pi-red-dica">Na próxima redação, use pelo menos dois deles. O guia traz mais opções, separadas por função.</p>
    </>
  );
}

function TelaNotaZero({ zerou, onZerou }: { zerou?: boolean; onZerou: (zerou: boolean) => void }) {
  return (
    <>
      <Blocos blocos={[{ tipo: "lista", titulo: "Aconteceu algum destes na sua redação?", itens: NOTA_ZERO }]} />
      <div className="pi-red-opcoes" role="group" aria-label="Casos de nota zero">
        <button
          type="button"
          className={`botao ${zerou === false ? "pi-red-opcao-ativa" : ""}`}
          aria-pressed={zerou === false}
          onClick={() => onZerou(false)}
        >
          Nenhum aconteceu
        </button>
        <button
          type="button"
          className={`botao ${zerou === true ? "pi-red-opcao-ativa" : ""}`}
          aria-pressed={zerou === true}
          onClick={() => onZerou(true)}
        >
          Aconteceu um deles
        </button>
      </div>
      {zerou === true && (
        <p className="pi-red-alerta">
          Fuga ao tema ou folha sem texto dão nota zero; identificação pode anular ou zerar a prova, e folha não devolvida anula. Refaça este tema
          cuidando do ponto que falhou.
        </p>
      )}
      <p className="pi-red-dica">Lembre: o que passa da {MAX_LINHAS}ª linha não é corrigido.</p>
    </>
  );
}

/** Lê um campo numérico: vazio ou inválido vira indefinido; o valor fica entre o mínimo e o máximo. */
function lerNumero(valor: string, min: number, max: number): number | undefined {
  if (valor.trim() === "") return undefined;
  const n = Math.floor(Number(valor));
  if (!Number.isFinite(n)) return undefined;
  return Math.min(max, Math.max(min, n));
}

function TelaCriterios({
  tema,
  estado,
  onAvaliar,
  onContagem,
}: {
  tema: TemaPrf;
  estado: EstadoTema;
  onAvaliar: (id: CriterioId, a: Avaliacao) => void;
  onContagem: (ne: number | undefined, tl: number | undefined) => void;
}) {
  const nc = conteudoDe(estado);
  const nota = notaDe(estado);
  const desconto = estado.ne !== undefined && estado.tl ? (PESO_ERROS * estado.ne) / estado.tl : undefined;
  return (
    <>
      <p className="pi-guiado-resumo">Primeiro o conteúdo (NC), critério por critério. Sim vale tudo; em parte, a metade.</p>
      {CRITERIOS.map((c, i) => {
        const atual = estado.avaliacao?.[c.id];
        const aspecto = i >= 1 ? tema.aspectos[i - 1] : undefined;
        return (
          <div key={c.id} className="pi-red-criterio">
            <p className="pi-red-criterio-nome">
              <strong>{c.nome}</strong> · {c.max} pontos
            </p>
            {aspecto && <p className="prf-red-aspecto-pedido">{aspecto}</p>}
            <p className="pi-red-criterio-pergunta">{aspecto ? PERGUNTA_ASPECTO : c.pergunta}</p>
            <div className="pi-red-opcoes" role="group" aria-label={c.nome}>
              {OPCOES.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  className={`botao ${atual === o.id ? "pi-red-opcao-ativa" : ""}`}
                  aria-pressed={atual === o.id}
                  onClick={() => onAvaliar(c.id, o.id)}
                >
                  {o.rotulo}
                </button>
              ))}
            </div>
          </div>
        );
      })}

      <div className="pi-red-criterio">
        <p className="pi-red-criterio-nome">
          <strong>Erros e linhas</strong> · o desconto
        </p>
        <p className="pi-red-criterio-pergunta">
          Releia o texto e conte os erros de grafia, de gramática e de escolha de palavra (NE). Depois, conte as linhas que
          escreveu (TL).
        </p>
        <div className="prf-red-numeros">
          <label className="prf-red-numero">
            <span>NE · erros</span>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              max={999}
              value={estado.ne ?? ""}
              onChange={(e) => onContagem(lerNumero(e.target.value, 0, 999), estado.tl)}
            />
          </label>
          <label className="prf-red-numero">
            <span>TL · linhas</span>
            <input
              type="number"
              inputMode="numeric"
              min={1}
              max={MAX_LINHAS}
              value={estado.tl ?? ""}
              onChange={(e) => onContagem(estado.ne, lerNumero(e.target.value, 1, MAX_LINHAS))}
            />
          </label>
        </div>
      </div>

      <p className="pi-red-total" aria-live="polite">
        {estado.zerou
          ? "Nota zero: aconteceu um dos casos do passo anterior."
          : nc === undefined
            ? "Responda aos 4 critérios para ver a nota de conteúdo."
            : desconto === undefined
              ? `Conteúdo (NC): ${numero(nc)}/${NOTA_MAXIMA}. Informe os erros e as linhas para calcular o desconto.`
              : nota !== undefined &&
                `${numero(nc)} − ${PESO_ERROS} × ${estado.ne} ÷ ${estado.tl} = ${numero(nota)}. ${
                  nota >= NOTA_MINIMA ? `Atinge o mínimo de ${NOTA_MINIMA}.` : `Abaixo do mínimo de ${NOTA_MINIMA}: na prova, eliminaria.`
                }`}
      </p>
      <p className="pi-red-dica">É uma estimativa sua, não a nota da banca. A conta segue o edital de 2021.</p>
    </>
  );
}

/** As regras que valem para todas as redações: no passo a passo ou numa página só. */
function GuiaRedacao({
  progresso,
  onProgresso,
  onTela,
}: {
  progresso: ProgressoRedacao;
  onProgresso: (p: ProgressoRedacao) => void;
  onTela: IrPara;
}) {
  // A página inteira, aberta na seção em que o passo a passo estava ("" = topo); null = passo a passo.
  const [inteira, setInteira] = useState<string | null>(null);
  useEffect(() => {
    if (inteira === null) return;
    const alvo = inteira ? document.getElementById(inteira) : null;
    if (alvo) alvo.scrollIntoView();
    else window.scrollTo({ top: 0 });
  }, [inteira]);

  const acao = chamada(progresso);
  const acoes = (
    <div className="pi-acoes">
      {acao && (
        <button className="botao botao-ouro" onClick={() => onTela({ tipo: "tema", n: acao.n })}>
          {acao.rotulo}
        </button>
      )}
      <button className="botao" onClick={() => onTela(INICIO)}>
        ← Redação
      </button>
    </div>
  );

  if (inteira !== null)
    return (
      <GlossarioToque>
        <article className="pi-licao">
          <button className="botao" onClick={() => onTela(INICIO)}>
            ← Redação
          </button>
          <h2 className="secao-titulo">Guia da redação</h2>
          <div className="pi-acoes pi-modo">
            <button className="botao botao-ouro" onClick={() => setInteira(null)}>
              Estudar passo a passo
            </button>
          </div>
          <nav className="pi-indice" aria-label="Partes do guia">
            {GUIA.map((s) => (
              <a key={s.ancora} href={`#${s.ancora}`}>
                {s.titulo}
              </a>
            ))}
          </nav>
          {GUIA.map((s) => (
            <section key={s.ancora} id={s.ancora} className="conteudo-card pi-secao">
              <h3 className="pi-secao-titulo">{s.titulo}</h3>
              <Blocos blocos={s.blocos} />
            </section>
          ))}
          {acoes}
        </article>
      </GlossarioToque>
    );

  return (
    <GlossarioToque>
      <EstudoGuiado
        titulo="Guia da redação"
        voltarRotulo="← Redação"
        onVoltar={() => onTela(INICIO)}
        secoes={GUIA}
        passoInicial={progresso.guiaPasso}
        onPasso={(n) => onProgresso(salvarPassoGuia(n, n === PASSOS_GUIA + 1))}
        onPaginaInteira={(a) => setInteira(a ?? "")}
        abertura={
          <div className="pi-gancho">
            Leia uma vez antes do tema 1 e volte sempre que precisar: são as regras que valem para todas as redações.
          </div>
        }
        fim={
          <>
            <p className="pi-guiado-parabens">Pronto: agora é escrever.</p>
            <p className="pi-guiado-fim-texto">O guia fica a um toque na tela da redação, para rever quando precisar.</p>
            {acoes}
          </>
        }
      />
    </GlossarioToque>
  );
}

/** A Redação Oficial: regras do Manual e do Decreto 9.758/2019, no passo a passo ou numa página só. */
function OficialRedacao({
  progresso,
  onProgresso,
  onTela,
}: {
  progresso: ProgressoRedacao;
  onProgresso: (p: ProgressoRedacao) => void;
  onTela: IrPara;
}) {
  const [inteira, setInteira] = useState<string | null>(null);
  useEffect(() => {
    if (inteira === null) return;
    const alvo = inteira ? document.getElementById(inteira) : null;
    if (alvo) alvo.scrollIntoView();
    else window.scrollTo({ top: 0 });
  }, [inteira]);

  const acoes = (
    <div className="pi-acoes">
      <button className="botao" onClick={() => onTela(INICIO)}>
        ← Redação
      </button>
    </div>
  );

  if (inteira !== null)
    return (
      <GlossarioToque>
        <article className="pi-licao">
          <button className="botao" onClick={() => onTela(INICIO)}>
            ← Redação
          </button>
          <h2 className="secao-titulo">Redação Oficial</h2>
          <div className="pi-acoes pi-modo">
            <button className="botao botao-ouro" onClick={() => setInteira(null)}>
              Estudar passo a passo
            </button>
          </div>
          <nav className="pi-indice" aria-label="Partes da Redação Oficial">
            {OFICIAL.map((s) => (
              <a key={s.ancora} href={`#${s.ancora}`}>
                {s.titulo}
              </a>
            ))}
          </nav>
          {OFICIAL.map((s) => (
            <section key={s.ancora} id={s.ancora} className="conteudo-card pi-secao">
              <h3 className="pi-secao-titulo">{s.titulo}</h3>
              {s.telas ? s.telas : <Blocos blocos={s.blocos} />}
            </section>
          ))}
          {acoes}
        </article>
      </GlossarioToque>
    );

  return (
    <GlossarioToque>
      <EstudoGuiado
        titulo="Redação Oficial"
        voltarRotulo="← Redação"
        onVoltar={() => onTela(INICIO)}
        secoes={OFICIAL}
        passoInicial={progresso.oficialPasso}
        onPasso={(n) => onProgresso(salvarPassoOficial(n, n === PASSOS_OFICIAL + 1))}
        onPaginaInteira={(a) => setInteira(a ?? "")}
        abertura={
          <div className="pi-gancho">
            📄 Na prova, a Redação Oficial vem em questões de Português. São regras fixas: vale decorar a forma certa.
          </div>
        }
        fim={
          <>
            <p className="pi-guiado-parabens">Pronto: agora são as questões.</p>
            <p className="pi-guiado-fim-texto">
              As 9 questões, de nível 4 e 5, ficam no fim da aula 14 de Português, na aba Aulas, junto com o resumo e o PDF. No
              Treino, elas entram em Português, nos assuntos de pronomes, fechos e padrão ofício.
            </p>
            {acoes}
          </>
        }
      />
    </GlossarioToque>
  );
}
