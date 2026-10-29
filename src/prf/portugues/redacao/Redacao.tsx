import { useEffect, useState, type ReactNode } from "react";
import EstudoGuiado, { montarPassos, type SecaoGuiada } from "../EstudoGuiado";
import type { TelaPt } from "../PortuguesInteligente";
import type { Bloco } from "../tipos";
import { Blocos, GlossarioToque, Rico } from "../Visuais";
import { BLOCOS_REDACAO, CAMPOS_PLANO, CRITERIOS, ESQUELETO, GUIA, NOTA_MAXIMA, NOTA_MINIMA, NOTA_ZERO } from "./guia";
import { TEMAS, TEMA_POR_N } from "./index";
import {
  atualizarTema,
  contaFeitas,
  feitasNaSemana,
  lerProgressoRedacao,
  salvarPassoGuia,
  semanaDe,
  temaDaSemana,
  TOTAL_TEMAS,
  type EstadoTema,
  type ProgressoRedacao,
} from "./progressoRedacao";
import type { Avaliacao, CampoPlano, CriterioId, TemaRedacao } from "./tipos";

type TelaRedacao = Extract<TelaPt, { tipo: "redacao" | "redacao-tema" | "redacao-guia" }>;
type Plano = EstadoTema["plano"];
type IrPara = (t: TelaPt) => void;

/** Telas de cada tema: plano (2), escrita (2), modelo (4), repertório e conectivos (2), nota (2). */
const PASSOS_TEMA = 12;
const PASSOS_GUIA = montarPassos(GUIA).length;

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
      "Escreva **à mão**, em folha pautada, com caneta **azul ou preta**.",
      "De **20 a 25 linhas**: o que passar da 25ª linha não é corrigido.",
      "Nada que identifique você: nem nome, nem assinatura.",
      "Título é opcional: use só se tiver uma boa ideia.",
    ],
  },
  {
    tipo: "chaves",
    titulo: "Os 4 parágrafos",
    ramos: ESQUELETO.map((p) => ({ rotulo: `${p.parte} · ${p.linhas}`, texto: p.funcao })),
  },
];

const dataCurta = (d: Date) => d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
const contarPalavras = (s: string) => s.split(/\s+/).filter(Boolean).length;
const juntar = (ns: number[]) => (ns.length > 1 ? `${ns.slice(0, -1).join(", ")} e ${ns[ns.length - 1]}` : `${ns[0]}`);

/** A soma da autoavaliação: zero num caso de nota zero; indefinida enquanto faltar resposta a um critério. */
function notaDe(e: EstadoTema): number | undefined {
  if (e.zerou) return 0;
  let total = 0;
  for (const c of CRITERIOS) {
    const a = e.avaliacao?.[c.id];
    if (!a) return undefined;
    total += c.max * PONTOS[a];
  }
  return total;
}

/** No tema já feito, a nota guardada acompanha a autoavaliação revista. */
const comNota = (e: EstadoTema): EstadoTema => (e.feitaEm ? { ...e, nota: notaDe(e) } : e);

function statusTema(e: EstadoTema | undefined): { rotulo: string; classe: string } {
  if (e?.feitaEm) {
    const nota = e.nota !== undefined ? ` · nota ${e.nota}/${NOTA_MAXIMA}` : "";
    return { rotulo: `Feita em ${dataCurta(new Date(e.feitaEm))}${nota}`, classe: "pi-status-ok" };
  }
  if (e?.passo && e.passo > PASSOS_TEMA) return { rotulo: "Falta marcar como feita", classe: "pi-status-visto" };
  if (e?.passo) return { rotulo: `Em andamento: passo ${e.passo} de ${PASSOS_TEMA}`, classe: "pi-status-visto" };
  return { rotulo: "Novo", classe: "pi-status-novo" };
}

/** O botão principal: continuar o tema começado, fazer o da semana ou, com a meta cumprida, adiantar o próximo. */
function chamada(p: ProgressoRedacao): { n: number; rotulo: string } | null {
  const n = temaDaSemana(p);
  if (n === undefined) return null;
  const passo = p.temas[n]?.passo ?? 0;
  if (passo > PASSOS_TEMA) return { n, rotulo: `Continuar o tema ${n}: falta marcar como feita` };
  if (passo >= 1) return { n, rotulo: `Continuar o tema ${n}: passo ${passo} de ${PASSOS_TEMA}` };
  if (feitasNaSemana(p).length > 0) return { n, rotulo: `Adiantar o próximo: tema ${n}` };
  return { n, rotulo: `Fazer a redação desta semana: tema ${n}` };
}

/** O bloco de redação: a lista dos 25 temas com a meta da semana, o passo a passo de cada tema e o guia. */
export default function Redacao({ tela, onTela }: { tela: TelaRedacao; onTela: IrPara }) {
  const [progresso, setProgresso] = useState(lerProgressoRedacao);

  if (tela.tipo === "redacao-guia") return <GuiaRedacao progresso={progresso} onProgresso={setProgresso} onTela={onTela} />;
  const tema = tela.tipo === "redacao-tema" ? TEMA_POR_N.get(tela.n) : undefined;
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
  const daSemana = temaDaSemana(progresso);
  const acao = chamada(progresso);
  // Uma por semana, a partir desta (ou da próxima, se a desta já foi feita): o domingo em que a última fica pronta.
  const prazo = new Date(domingo);
  prazo.setDate(prazo.getDate() + 7 * (faltam - (feitas.length > 0 ? 0 : 1)));
  const guia = progresso.guiaLido
    ? { rotulo: "Lido", classe: "pi-status-ok" }
    : progresso.guiaPasso
      ? { rotulo: `Em andamento: passo ${progresso.guiaPasso} de ${PASSOS_GUIA}`, classe: "pi-status-visto" }
      : { rotulo: "Novo", classe: "pi-status-novo" };

  return (
    <>
      <button className="botao" onClick={() => onTela({ tipo: "geral" })}>
        ← Português Inteligente
      </button>
      <h2 className="secao-titulo">Redação · PMPR Soldado 2027</h2>
      <p className="conteudo-intro">
        25 temas com grande chance de cair, cada um com uma redação-modelo de 20 a 25 linhas. A meta é uma por semana:
        planejar, escrever à mão, comparar com o modelo e dar a sua nota. O objetivo não é decorar textos, e sim absorver
        o esqueleto e o repertório para escrever sobre qualquer tema no dia da prova.
      </p>

      <div className="pi-painel pi-red-semana">
        <p className="pi-red-semana-datas">
          Semana de {dataCurta(inicio)} a {dataCurta(domingo)}
        </p>
        <p className="pi-red-semana-meta">
          {feitas.length > 0 ? (
            <>
              ✓ Meta da semana cumprida:{" "}
              {feitas.length === 1 ? `tema ${feitas[0]} (${TEMA_POR_N.get(feitas[0])?.recorte})` : `temas ${juntar(feitas)}`}.
            </>
          ) : daSemana !== undefined ? (
            <>
              Tema da semana:{" "}
              <strong>
                {daSemana} · {TEMA_POR_N.get(daSemana)?.recorte}
              </strong>
            </>
          ) : (
            "Os 25 temas estão feitos. Refaça os de nota mais baixa."
          )}
        </p>
        <div className="pi-acoes">
          {acao && (
            <button className="botao botao-ouro" onClick={() => onTela({ tipo: "redacao-tema", n: acao.n })}>
              {acao.rotulo}
            </button>
          )}
          {!progresso.guiaLido && (
            <button className="botao" onClick={() => onTela({ tipo: "redacao-guia" })}>
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
        <button className="modo-card pi-red-card-guia" onClick={() => onTela({ tipo: "redacao-guia" })}>
          <h3>Guia da redação</h3>
          <p>Como a banca corrige, o que zera a nota, o esqueleto de 4 parágrafos, os conectivos e o repertório coringa.</p>
          <span className="pi-card-meta">
            <span className={`pi-status ${guia.classe}`}>{guia.rotulo}</span>
            <span>{PASSOS_GUIA} passos curtos</span>
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
                <button key={t.n} className="modo-card pi-card-licao" onClick={() => onTela({ tipo: "redacao-tema", n: t.n })}>
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
        As redações-modelo são exemplos de treino, não textos oficiais de nenhuma banca. Os critérios seguem o último
        edital de soldado (2025, banca IBFC); confirme quando sair o edital de 2027. Dados mudam todo ano: confira os
        números antes de memorizar.
      </p>
    </>
  );
}

interface FluxoProps {
  tema: TemaRedacao;
  progresso: ProgressoRedacao;
  onProgresso: (p: ProgressoRedacao) => void;
  onTela: IrPara;
}

/** Um tema em 12 telas curtas: planejar, escrever, comparar com o modelo parágrafo por parágrafo e dar a nota. */
function FluxoTema({ tema, progresso, onProgresso, onTela }: FluxoProps) {
  const estado = progresso.temas[tema.n] ?? {};
  const mudar = (f: (t: EstadoTema) => EstadoTema) => onProgresso(atualizarTema(tema.n, f));
  const onCampo = (campo: CampoPlano, valor: string) => mudar((t) => ({ ...t, plano: { ...t.plano, [campo]: valor } }));
  const verModelo = () => mudar((t) => ({ ...t, viuModelo: true }));
  const bloco = BLOCOS_REDACAO.find((b) => b.n === tema.bloco);
  const proximo = TEMA_POR_N.get(tema.n + 1);
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
      telas: [0, 1, 2, 3].map((k) => (
        <TelaParagrafo key={k} tema={tema} k={k} plano={estado.plano} viuModelo={!!estado.viuModelo} onVerModelo={verModelo} />
      )),
    },
    {
      titulo: "4 · Repertório e conectivos",
      blocos: [],
      telas: [
        <TelaRepertorio key="a" tema={tema} plano={estado.plano} />,
        <TelaConectivos key="b" tema={tema} />,
      ],
    },
    {
      titulo: "5 · Sua nota",
      blocos: [],
      telas: [
        <TelaNotaZero key="a" zerou={estado.zerou} onZerou={(zerou) => mudar((t) => comNota({ ...t, zerou }))} />,
        <TelaCriterios
          key="b"
          estado={estado}
          onAvaliar={(id, a) => mudar((t) => comNota({ ...t, avaliacao: { ...t.avaliacao, [id]: a } }))}
        />,
      ],
    },
  ];

  return (
    <GlossarioToque>
      <EstudoGuiado
        titulo={`Tema ${tema.n} · ${tema.recorte}`}
        voltarRotulo="← Redação"
        onVoltar={() => onTela({ tipo: "redacao" })}
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
            {tema.ideia && (
              <p className="pi-red-ideia">
                <span className="pi-red-rotulo">Sua ideia</span>“{tema.ideia}”
              </p>
            )}
            <div className="pi-gancho pi-red-proposta">
              <span className="pi-red-rotulo">Como a banca pode propor</span>
              {tema.tema}
            </div>
            {tema.nota && <p className="pi-red-nota-tema">{tema.nota}</p>}
            <p className="pi-guiado-resumo">Você vai planejar, escrever à mão, comparar com a redação-modelo e dar a sua nota.</p>
          </>
        }
        fim={
          <>
            <p className="pi-guiado-parabens">
              {feita
                ? `✓ Feita em ${dataCurta(new Date(estado.feitaEm as string))}${
                    estado.nota !== undefined ? ` · nota ${estado.nota}/${NOTA_MAXIMA}` : ""
                  }`
                : "Você chegou ao fim deste tema."}
            </p>
            <p className="pi-guiado-fim-texto">
              {feita
                ? nestaSemana
                  ? "Meta da semana cumprida. O próximo tema fica para a semana que vem, mas você pode adiantar."
                  : "Este tema já conta como feito."
                : notaDe(estado) === undefined
                  ? "Marque como feita para contar na meta da semana. Para guardar a nota junto, responda aos 4 critérios do passo 12."
                  : "Marque como feita para contar na meta da semana. A sua nota fica guardada junto."}
            </p>
            <div className="pi-acoes">
              <button className={`botao ${feita ? "pi-botao-feito" : "botao-ouro"}`} onClick={alternarFeita} aria-pressed={feita}>
                {feita ? "✓ Feita (desmarcar)" : "Marcar como feita"}
              </button>
              {proximo && (
                <button className="botao" onClick={() => onTela({ tipo: "redacao-tema", n: proximo.n })}>
                  Próximo: tema {proximo.n} →
                </button>
              )}
              <button className="botao" onClick={() => onTela({ tipo: "redacao" })}>
                ← Todos os temas
              </button>
            </div>
          </>
        }
      />
    </GlossarioToque>
  );
}

function Rotulo({ children }: { children: ReactNode }) {
  return <span className="pi-red-rotulo">{children}</span>;
}

function TelaPlano({
  tema,
  parte,
  plano,
  onCampo,
}: {
  tema: TemaRedacao;
  parte: 1 | 2;
  plano: Plano;
  onCampo: (campo: CampoPlano, valor: string) => void;
}) {
  const [pista, setPista] = useState(false);
  const campos = parte === 1 ? CAMPOS_PLANO.slice(0, 3) : CAMPOS_PLANO.slice(3);
  return (
    <>
      {parte === 1 && (
        <>
          <p className="pi-red-tema-curto">
            <Rotulo>Tema</Rotulo>
            {tema.tema}
          </p>
          <p className="pi-guiado-resumo">
            Antes de escrever, decida o que vai defender. Uma frase em cada campo basta: o plano fica guardado neste
            aparelho.
          </p>
        </>
      )}
      {campos.map((c) => (
        <label key={c.id} className="pi-red-campo">
          <span className="pi-red-campo-rotulo">{c.rotulo}</span>
          <span className="pi-red-campo-dica">{c.dica}</span>
          <textarea
            className="pi-red-textarea"
            rows={2}
            value={plano?.[c.id] ?? ""}
            onChange={(e) => onCampo(c.id, e.target.value)}
          />
        </label>
      ))}
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
            <p className="pi-red-dica">Escolha um, explique o que ele diz e ligue ao seu argumento.</p>
          </div>
        ) : (
          <div className="pi-pense">
            <p>Travou no repertório? Pense um pouco antes de pedir ajuda.</p>
            <button type="button" className="botao" onClick={() => setPista(true)}>
              Ver uma pista
            </button>
          </div>
        ))}
    </>
  );
}

function SeuPlano({ plano, titulo = "Seu plano" }: { plano: Plano; titulo?: string }) {
  const preenchidos = CAMPOS_PLANO.filter((c) => plano?.[c.id]?.trim());
  if (preenchidos.length === 0)
    return <p className="pi-red-dica">Plano em branco. Se quiser planejar antes de escrever, volte ao passo 1.</p>;
  return (
    <div className="pi-red-planejou">
      <Rotulo>{titulo}</Rotulo>
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
  // Cerca de 10 palavras por linha manuscrita: os modelos têm de 210 a 250 palavras, de 22 a 25 linhas.
  const linhas = Math.round(palavras / 10);
  const faixa =
    linhas < 20
      ? { texto: "abaixo de 20, desenvolva mais", classe: "pi-red-contador-alerta" }
      : linhas > 25
        ? { texto: "acima de 25, enxugue", classe: "pi-red-contador-alerta" }
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
  tema: TemaRedacao;
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
  return (
    <>
      <p className="pi-red-parte">
        Parágrafo {k + 1} de 4 · {parte.parte} <span>· {parte.linhas}</span>
      </p>
      {k === 0 && <h3 className="pi-red-titulo-modelo">{tema.titulo}</h3>}
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

function TelaRepertorio({ tema, plano }: { tema: TemaRedacao; plano: Plano }) {
  const meu = plano?.repertorio?.trim();
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
            explicacao: "Cite, explique o que ele diz e ligue ao argumento na frase seguinte. Citar sem explicar não rende ponto.",
          },
        ]}
      />
      {meu && (
        <div className="pi-red-planejou">
          <Rotulo>Você usou</Rotulo>
          <p>{meu}</p>
        </div>
      )}
    </>
  );
}

function TelaConectivos({ tema }: { tema: TemaRedacao }) {
  return (
    <>
      <p className="pi-guiado-resumo">
        <Rico texto="Os **conectivos** que este modelo usou. A coesão vale **6 dos 20 pontos**: varie os conectivos e use cada um no sentido certo." />
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
        <p className="pi-red-alerta">Com qualquer um deles, a nota é zero. Refaça este tema cuidando do ponto que falhou.</p>
      )}
      <p className="pi-red-dica">Lembre: só valem as 25 primeiras linhas.</p>
    </>
  );
}

function TelaCriterios({ estado, onAvaliar }: { estado: EstadoTema; onAvaliar: (id: CriterioId, a: Avaliacao) => void }) {
  const nota = notaDe(estado);
  return (
    <>
      <p className="pi-guiado-resumo">Dê a sua nota, critério por critério. Sim vale tudo; em parte, a metade.</p>
      {CRITERIOS.map((c) => {
        const atual = estado.avaliacao?.[c.id];
        return (
          <div key={c.id} className="pi-red-criterio">
            <p className="pi-red-criterio-nome">
              <strong>
                <Rico texto={c.nome} />
              </strong>{" "}
              · {c.max} pontos
            </p>
            <p className="pi-red-criterio-pergunta">
              <Rico texto={c.pergunta} />
            </p>
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
      <p className="pi-red-total" aria-live="polite">
        {estado.zerou
          ? "Nota zero: aconteceu um dos casos do passo anterior."
          : nota === undefined
            ? "Responda aos 4 critérios para ver a soma."
            : `Sua nota: ${nota}/${NOTA_MAXIMA}. ${
                nota >= NOTA_MINIMA ? `Atinge o mínimo de ${NOTA_MINIMA}.` : `Abaixo do mínimo de ${NOTA_MINIMA}: na prova, eliminaria.`
              }`}
      </p>
      <p className="pi-red-dica">É uma estimativa sua, não a nota da banca.</p>
    </>
  );
}

/** As regras que valem para as 25 redações: no passo a passo ou numa página só. */
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
        <button className="botao botao-ouro" onClick={() => onTela({ tipo: "redacao-tema", n: acao.n })}>
          {acao.rotulo}
        </button>
      )}
      <button className="botao" onClick={() => onTela({ tipo: "redacao" })}>
        ← Redação
      </button>
    </div>
  );

  if (inteira !== null)
    return (
      <GlossarioToque>
        <article className="pi-licao">
          <button className="botao" onClick={() => onTela({ tipo: "redacao" })}>
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
        onVoltar={() => onTela({ tipo: "redacao" })}
        secoes={GUIA}
        passoInicial={progresso.guiaPasso}
        onPasso={(n) => onProgresso(salvarPassoGuia(n, n === PASSOS_GUIA + 1))}
        onPaginaInteira={(a) => setInteira(a ?? "")}
        abertura={
          <div className="pi-gancho">
            Leia uma vez antes do tema 1 e volte sempre que precisar: são as regras que valem para as 25 redações.
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
