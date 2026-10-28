import { useEffect, useMemo, useState } from "react";
import { shuffle } from "../../lib/quizEngine";
import EstudoGuiado, { montarPassos, type SecaoGuiada } from "./EstudoGuiado";
import FixacaoPt from "./FixacaoPt";
import { Blocos, ChipClasse, GlossarioToque, Rico } from "./Visuais";
import { FIXACAO, GLOSSARIO, LICOES, MODELOS, TOPICO_CLASSES } from "./dados";
import {
  idsErradosPt,
  lerProgressoPt,
  marcarConcluidaPt,
  marcarVistaPt,
  precisaRetomar,
  registrarRespostaPt,
  salvarModoPt,
  salvarPassoPt,
  ultimaPorQuestao,
  type ProgressoPt,
} from "./progresso";
import { TITULO_BLOCO, type GrupoPt, type Licao, type ModeloPt, type QuestaoFixacao } from "./tipos";

export type TelaPt =
  | { tipo: "geral" }
  | { tipo: "classes" }
  | { tipo: "licao"; id: string }
  | { tipo: "modelo"; id: string }
  | { tipo: "fixacao"; titulo: string; questoes: QuestaoFixacao[]; voltar: TelaPt }
  | { tipo: "glossario" }
  | { tipo: "revisao" };

interface PortuguesInteligenteProps {
  tela: TelaPt;
  onTela: (tela: TelaPt) => void;
  /** Quantas questões do banco da PRF cada tópico de português tem. */
  questoesPorTopico: Record<string, number>;
  onTreinarTopico: (topico: string) => void;
  onAbrirResumo: () => void;
}

const GRUPOS: { id: GrupoPt; titulo: string; descricao: string }[] = [
  {
    id: "base",
    titulo: "Base gramatical",
    descricao: "Fundamentos sem os quais o resto não se sustenta: o que cada palavra é e como se escreve.",
  },
  {
    id: "nucleo",
    titulo: "Núcleo comum",
    descricao: "Os assuntos que caem na PRF ADM e na maioria das provas de português de concurso.",
  },
  {
    id: "aprofundamento",
    titulo: "Aprofundamento",
    descricao: "Temas mais específicos de alguns editais e bancas, ou detalhes que separam quem acerta tudo.",
  },
];

const LICAO_POR_ID = new Map(LICOES.map((l) => [l.id, l]));
const MODELO_POR_ID = new Map(MODELOS.map((m) => [m.id, m]));

/** As partes de cada lição e de cada modelo, na ordem em que o passo a passo as mostra. */
const SECOES_POR_ID = new Map<string, SecaoGuiada[]>([
  ...LICOES.map((l): [string, SecaoGuiada[]] => [
    l.id,
    [
      { titulo: "Modelo mental", ancora: "pi-sec-modelo", blocos: l.modelo },
      ...l.secoes.map((s) => ({
        titulo: `${s.letra} · ${s.titulo ?? TITULO_BLOCO[s.letra]}`,
        ancora: `pi-sec-${s.letra}`,
        blocos: s.blocos,
      })),
    ],
  ]),
  ...MODELOS.map((m): [string, SecaoGuiada[]] => [m.id, [{ titulo: "", blocos: m.blocos }]]),
]);

function nomePagina(id: string): string {
  return LICAO_POR_ID.get(id)?.titulo ?? MODELO_POR_ID.get(id)?.titulo ?? id;
}

/** Ordem de dificuldade crescente, com as alternativas embaralhadas (a análise vai junto de cada uma). */
function montarFixacao(questoes: QuestaoFixacao[]): QuestaoFixacao[] {
  return [...questoes]
    .sort((a, b) => a.nivel - b.nivel)
    .map((q) => {
      const ordem = shuffle([0, 1, 2, 3, 4]);
      return {
        ...q,
        alternativas: ordem.map((i) => q.alternativas[i]) as QuestaoFixacao["alternativas"],
        correta: ordem.indexOf(q.correta) as QuestaoFixacao["correta"],
      };
    });
}

function statusPagina(p: ProgressoPt, id: string): { rotulo: string; classe: string } {
  const e = p.paginas[id];
  if (e?.concluidaEm) return { rotulo: "Estudado", classe: "pi-status-ok" };
  if (e) return { rotulo: "Visto", classe: "pi-status-visto" };
  return { rotulo: "Novo", classe: "pi-status-novo" };
}

export default function PortuguesInteligente({
  tela,
  onTela,
  questoesPorTopico,
  onTreinarTopico,
  onAbrirResumo,
}: PortuguesInteligenteProps) {
  const [progresso, setProgresso] = useState<ProgressoPt>(() => lerProgressoPt());

  const paginaAberta = tela.tipo === "licao" || tela.tipo === "modelo" ? tela.id : null;
  useEffect(() => {
    if (paginaAberta) setProgresso(marcarVistaPt(paginaAberta));
    window.scrollTo({ top: 0 });
  }, [paginaAberta, tela.tipo]);

  const errados = useMemo(() => idsErradosPt(progresso), [progresso]);

  function abrirFixacao(titulo: string, questoes: QuestaoFixacao[], voltar: TelaPt) {
    if (questoes.length === 0) return;
    onTela({ tipo: "fixacao", titulo, questoes: montarFixacao(questoes), voltar });
  }

  function alternarConcluida(id: string) {
    setProgresso(marcarConcluidaPt(id, !progresso.paginas[id]?.concluidaEm));
  }

  // Lições e modelos abrem no passo a passo; a página inteira fica a um toque.
  const modo = progresso.modo ?? "guiado";
  // Seção em que a página inteira abre ("" = topo), depois de sair do passo a passo.
  const [ancora, setAncora] = useState<string | null>(null);
  useEffect(() => {
    if (ancora === null) return;
    const alvo = ancora ? document.getElementById(ancora) : null;
    if (alvo) alvo.scrollIntoView();
    else window.scrollTo({ top: 0 });
    setAncora(null);
  }, [ancora]);

  function paginaInteira(a?: string) {
    setProgresso(salvarModoPt("tudo"));
    setAncora(a ?? "");
  }
  const passoAPasso = () => setProgresso(salvarModoPt("guiado"));

  if (tela.tipo === "fixacao") {
    return (
      <FixacaoPt
        key={tela.questoes.map((q) => q.id).join()}
        titulo={tela.titulo}
        questoes={tela.questoes}
        nomeLicao={nomePagina}
        onResponder={(q, acertou) =>
          setProgresso(registrarRespostaPt({ q: q.id, licao: q.licao, acertou, em: new Date().toISOString() }))
        }
        onRever={(licao) => onTela({ tipo: "licao", id: licao })}
        onSair={() => onTela(tela.voltar)}
      />
    );
  }

  if (tela.tipo === "licao") {
    const licao = LICAO_POR_ID.get(tela.id);
    if (!licao) return <Voltar onTela={onTela} />;
    const props = {
      licao,
      progresso,
      onTela,
      onConcluir: () => alternarConcluida(licao.id),
      onFixacao: () =>
        abrirFixacao(
          `Fixação · ${licao.titulo}`,
          FIXACAO.filter((q) => q.licao === licao.id),
          tela,
        ),
    };
    return (
      <GlossarioToque>
        {modo === "tudo" ? (
          <TelaLicao {...props} onPassoAPasso={passoAPasso} />
        ) : (
          <GuiadoLicao
            key={licao.id}
            {...props}
            onPasso={(n) => setProgresso(salvarPassoPt(licao.id, n))}
            onPaginaInteira={paginaInteira}
          />
        )}
      </GlossarioToque>
    );
  }

  if (tela.tipo === "modelo") {
    const modelo = MODELO_POR_ID.get(tela.id);
    if (!modelo) return <Voltar onTela={onTela} />;
    const props = {
      modelo,
      progresso,
      onTela,
      onConcluir: () => alternarConcluida(modelo.id),
      questoesPorTopico,
      onTreinarTopico,
      onAbrirResumo,
    };
    return (
      <GlossarioToque>
        {modo === "tudo" ? (
          <TelaModelo {...props} onPassoAPasso={passoAPasso} />
        ) : (
          <GuiadoModelo
            key={modelo.id}
            {...props}
            onPasso={(n) => setProgresso(salvarPassoPt(modelo.id, n))}
            onPaginaInteira={paginaInteira}
          />
        )}
      </GlossarioToque>
    );
  }

  if (tela.tipo === "classes") {
    return (
      <>
        <button className="botao" onClick={() => onTela({ tipo: "geral" })}>
          ← Português Inteligente
        </button>
        <h2 className="secao-titulo">Classes de palavras</h2>
        <p className="conteudo-intro">
          Comece pelo mapa: ele dá o fluxograma que serve para qualquer palavra. Depois, uma lição por classe, sempre
          na mesma ordem de blocos (o que é, como identificar, função, como diferenciar, exemplos, pegadinhas, macete,
          passo a passo e revisão), e por fim as palavras que trocam de classe conforme a frase.
        </p>
        <div className="pi-lista-licoes">
          {LICOES.map((l, i) => {
            const st = statusPagina(progresso, l.id);
            const nFix = FIXACAO.filter((q) => q.licao === l.id).length;
            const nErr = FIXACAO.filter((q) => q.licao === l.id && errados.has(q.id)).length;
            return (
              <button key={l.id} className="modo-card pi-card-licao" onClick={() => onTela({ tipo: "licao", id: l.id })}>
                <span className="pi-card-num">{i}</span>
                <span className="pi-card-corpo">
                  <h3>
                    {l.classe ? <ChipClasse classe={l.classe} rotulo={l.titulo} /> : l.titulo}
                  </h3>
                  <p>{l.resumo}</p>
                  <span className="pi-card-meta">
                    <span className={`pi-status ${st.classe}`}>{st.rotulo}</span>
                    {nFix > 0 && <span>{nFix} questões de fixação</span>}
                    {nErr > 0 && <span className="pi-card-erros">{nErr} para revisar</span>}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="pi-acoes">
          <button
            className="botao botao-ouro"
            onClick={() => abrirFixacao("Fixação · Classes de palavras", FIXACAO, { tipo: "classes" })}
          >
            Fixação do módulo inteiro ({FIXACAO.length})
          </button>
        </div>
        <BancoPrf
          topicos={[TOPICO_CLASSES]}
          questoesPorTopico={questoesPorTopico}
          onTreinarTopico={onTreinarTopico}
          onAbrirResumo={onAbrirResumo}
        />
      </>
    );
  }

  if (tela.tipo === "glossario") return <TelaGlossario onTela={onTela} />;
  if (tela.tipo === "revisao") return <TelaRevisao progresso={progresso} onTela={onTela} />;

  return (
    <VisaoGeral
      progresso={progresso}
      errados={errados}
      onTela={onTela}
      onRevisarErros={() =>
        abrirFixacao(
          "Revisão dos erros",
          FIXACAO.filter((q) => errados.has(q.id)),
          { tipo: "geral" },
        )
      }
    />
  );
}

function Voltar({ onTela }: { onTela: (t: TelaPt) => void }) {
  return (
    <div className="vazio">
      <p>Esta página não existe mais.</p>
      <button className="botao" onClick={() => onTela({ tipo: "geral" })}>
        Voltar
      </button>
    </div>
  );
}

function VisaoGeral({
  progresso,
  errados,
  onTela,
  onRevisarErros,
}: {
  progresso: ProgressoPt;
  errados: Set<string>;
  onTela: (t: TelaPt) => void;
  onRevisarErros: () => void;
}) {
  const licoesFeitas = LICOES.filter((l) => progresso.paginas[l.id]?.concluidaEm).length;
  const modelosFeitos = MODELOS.filter((m) => progresso.paginas[m.id]?.concluidaEm).length;
  const ultimas = ultimaPorQuestao(progresso);
  const respondidas = FIXACAO.filter((q) => ultimas.has(q.id));
  const certas = respondidas.filter((q) => ultimas.get(q.id)?.acertou).length;
  const nada = Object.keys(progresso.paginas).length === 0 && progresso.respostas.length === 0;

  const ultimo = progresso.ultimo && (LICAO_POR_ID.get(progresso.ultimo.id) || MODELO_POR_ID.get(progresso.ultimo.id));
  // No passo a passo, diz também em que tela parou.
  const passoSalvo = ultimo ? progresso.paginas[ultimo.id]?.passo : undefined;
  const nPassos = ultimo ? montarPassos(SECOES_POR_ID.get(ultimo.id) ?? []).length : 0;
  const ondeParou =
    (progresso.modo ?? "guiado") === "guiado" && passoSalvo && passoSalvo <= nPassos
      ? ` · passo ${passoSalvo} de ${nPassos}`
      : "";
  const licoesComErro = LICOES.filter((l) => FIXACAO.some((q) => q.licao === l.id && errados.has(q.id)));
  const retomar = [...LICOES, ...MODELOS].filter((p) => precisaRetomar(progresso, p.id));
  const nErros = FIXACAO.filter((q) => errados.has(q.id)).length;

  return (
    <>
      <h2 className="secao-titulo">Português Inteligente</h2>
      <p className="conteudo-intro">
        Um caminho para entender a gramática em vez de decorar: cada assunto tem um modelo mental visual, e as classes
        de palavras têm lições completas, com fluxogramas de decisão, comparações e questões de fixação comentadas.
        Estude, fixe e revise pelos seus erros.
      </p>

      <div className="pi-painel">
        {nada ? (
          <p className="pi-painel-vazio">
            Nada estudado ainda neste aparelho. O progresso aparece aqui conforme você abre as lições, marca o que
            estudou e responde à fixação.
          </p>
        ) : (
          <div className="pi-painel-numeros">
            <div>
              <strong>
                {licoesFeitas}/{LICOES.length}
              </strong>
              <span>lições estudadas</span>
            </div>
            <div>
              <strong>
                {modelosFeitos}/{MODELOS.length}
              </strong>
              <span>modelos mentais estudados</span>
            </div>
            <div>
              <strong>
                {respondidas.length}/{FIXACAO.length}
              </strong>
              <span>questões de fixação feitas</span>
            </div>
            <div>
              <strong>{respondidas.length > 0 ? `${Math.round((certas / respondidas.length) * 100)}%` : "—"}</strong>
              <span>acerto na última tentativa</span>
            </div>
          </div>
        )}
        <div className="pi-acoes">
          {ultimo ? (
            <button
              className="botao botao-ouro"
              onClick={() =>
                onTela(
                  LICAO_POR_ID.has(ultimo.id) ? { tipo: "licao", id: ultimo.id } : { tipo: "modelo", id: ultimo.id },
                )
              }
            >
              Continuar de onde parei: {ultimo.titulo}
              {ondeParou}
            </button>
          ) : (
            <button className="botao botao-ouro" onClick={() => onTela({ tipo: "licao", id: LICOES[0].id })}>
              Começar pelo mapa das classes
            </button>
          )}
          {nErros > 0 && (
            <button className="botao" onClick={onRevisarErros}>
              Revisar meus erros ({nErros})
            </button>
          )}
        </div>
        {(licoesComErro.length > 0 || retomar.length > 0) && (
          <div className="pi-revisar">
            <strong>Para revisar:</strong>
            <ul>
              {licoesComErro.map((l) => (
                <li key={l.id}>
                  <button className="pi-link" onClick={() => onTela({ tipo: "licao", id: l.id })}>
                    {l.titulo}
                  </button>{" "}
                  — errou na última tentativa da fixação
                </li>
              ))}
              {retomar
                .filter((p) => !licoesComErro.some((l) => l.id === p.id))
                .map((p) => (
                  <li key={p.id}>
                    <button
                      className="pi-link"
                      onClick={() =>
                        onTela(LICAO_POR_ID.has(p.id) ? { tipo: "licao", id: p.id } : { tipo: "modelo", id: p.id })
                      }
                    >
                      {p.titulo}
                    </button>{" "}
                    — estudado há mais de uma semana: hora de retomar
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      {GRUPOS.map((g) => (
        <section key={g.id}>
          <h3 className="secao-titulo">{g.titulo}</h3>
          <p className="pi-grupo-descricao">{g.descricao}</p>
          <div className="modos-grid">
            {g.id === "base" && (
              <button className="modo-card pi-card-modulo pi-card-destaque" onClick={() => onTela({ tipo: "classes" })}>
                <h3>Classes de palavras</h3>
                <p>
                  Lições completas: mapa das 10 classes, fluxograma de identificação, uma lição por classe e as palavras
                  que mudam de classe. Com fixação comentada.
                </p>
                <span className="pi-card-meta">
                  <span className="pi-status pi-status-ok">
                    {licoesFeitas}/{LICOES.length} lições
                  </span>
                </span>
              </button>
            )}
            {MODELOS.filter((m) => m.grupo === g.id).map((m) => {
              const st = statusPagina(progresso, m.id);
              return (
                <button key={m.id} className="modo-card pi-card-modulo" onClick={() => onTela({ tipo: "modelo", id: m.id })}>
                  <h3>{m.titulo}</h3>
                  <p>{m.gancho.replace(/\*\*/g, "")}</p>
                  <span className="pi-card-meta">
                    <span className={`pi-status ${st.classe}`}>{st.rotulo}</span>
                    <span>modelo mental</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ))}

      <h3 className="secao-titulo">Recursos de apoio</h3>
      <div className="modos-grid">
        <button className="modo-card" onClick={() => onTela({ tipo: "revisao" })}>
          <h3>Revisão rápida</h3>
          <p>O essencial de cada lição e a ideia central de cada modelo, numa página só.</p>
        </button>
        <button className="modo-card" onClick={() => onTela({ tipo: "glossario" })}>
          <h3>Glossário</h3>
          <p>{GLOSSARIO.length} termos da gramática explicados em palavras simples.</p>
        </button>
        <button className="modo-card" onClick={() => onTela({ tipo: "licao", id: "mesma-palavra" })}>
          <h3>Mesma palavra, classes diferentes</h3>
          <p>"Que", "se", "a", "o", "um", "muito", "meio", "só", "mesmo", "como": como decidir em cada frase.</p>
        </button>
      </div>
      <p className="pi-aviso-autoral">
        As explicações e as questões desta aba são autorais, feitas para treino. Não são questões oficiais de nenhuma
        banca. A classificação segue a gramática normativa (NGB), e as divergências entre gramáticos estão sinalizadas
        como "Particularidade".
      </p>
    </>
  );
}

function TelaLicao({
  licao,
  progresso,
  onTela,
  onConcluir,
  onFixacao,
  onPassoAPasso,
}: {
  licao: Licao;
  progresso: ProgressoPt;
  onTela: (t: TelaPt) => void;
  onConcluir: () => void;
  onFixacao: () => void;
  onPassoAPasso: () => void;
}) {
  const i = LICOES.indexOf(licao);
  const anterior = LICOES[i - 1];
  const proxima = LICOES[i + 1];
  const nFix = FIXACAO.filter((q) => q.licao === licao.id).length;
  const concluida = !!progresso.paginas[licao.id]?.concluidaEm;

  return (
    <article className="pi-licao">
      <button className="botao" onClick={() => onTela({ tipo: "classes" })}>
        ← Classes de palavras
      </button>
      <h2 className="secao-titulo">{licao.titulo}</h2>
      <p className="pi-resumo">
        {licao.classe && <ChipClasse classe={licao.classe} />} <Rico texto={licao.resumo} />
      </p>
      <div className="pi-acoes pi-modo">
        <button className="botao botao-ouro" onClick={onPassoAPasso}>
          Estudar passo a passo
        </button>
      </div>

      <nav className="pi-indice" aria-label="Blocos da lição">
        <a href="#pi-sec-modelo">Modelo mental</a>
        {licao.secoes.map((s) => (
          <a key={s.letra} href={`#pi-sec-${s.letra}`}>
            {s.letra} · {s.titulo ?? TITULO_BLOCO[s.letra]}
          </a>
        ))}
      </nav>

      <section id="pi-sec-modelo" className="conteudo-card pi-secao pi-secao-modelo">
        <h3 className="pi-secao-titulo">Modelo mental</h3>
        <Blocos blocos={licao.modelo} />
      </section>

      {licao.secoes.map((s) => (
        <section key={s.letra} id={`pi-sec-${s.letra}`} className="conteudo-card pi-secao">
          <h3 className="pi-secao-titulo">
            <span className="pi-secao-letra">{s.letra}</span> {s.titulo ?? TITULO_BLOCO[s.letra]}
          </h3>
          <Blocos blocos={s.blocos} />
        </section>
      ))}

      <div className="pi-acoes pi-acoes-fim">
        {nFix > 0 && (
          <button className="botao botao-ouro" onClick={onFixacao}>
            Fixação desta lição ({nFix} questões)
          </button>
        )}
        <button className={`botao ${concluida ? "pi-botao-feito" : ""}`} onClick={onConcluir} aria-pressed={concluida}>
          {concluida ? "✓ Estudada (desmarcar)" : "Marcar como estudada"}
        </button>
      </div>
      <div className="pi-navegacao">
        {anterior ? (
          <button className="botao" onClick={() => onTela({ tipo: "licao", id: anterior.id })}>
            ← {anterior.titulo}
          </button>
        ) : (
          <span />
        )}
        {proxima && (
          <button className="botao" onClick={() => onTela({ tipo: "licao", id: proxima.id })}>
            {proxima.titulo} →
          </button>
        )}
      </div>
    </article>
  );
}

function BancoPrf({
  topicos,
  questoesPorTopico,
  onTreinarTopico,
  onAbrirResumo,
}: {
  topicos: string[];
  questoesPorTopico: Record<string, number>;
  onTreinarTopico: (topico: string) => void;
  onAbrirResumo: () => void;
}) {
  if (topicos.length === 0) return null;
  return (
    <div className="pi-banco">
      <h4 className="pi-mini-titulo">No banco da PRF</h4>
      <p>
        Depois do modelo, treine com as questões do banco (provas reais e questões no nível da prova) e revise o
        resumo do tópico. Essas respostas entram no desempenho da aba Treino.
      </p>
      <div className="pi-acoes">
        {topicos.map((t) => {
          const n = questoesPorTopico[t] ?? 0;
          return (
            <button key={t} className="botao" onClick={() => onTreinarTopico(t)} disabled={n === 0}>
              Treinar: {t} ({n})
            </button>
          );
        })}
        <button className="botao" onClick={onAbrirResumo}>
          Resumos de Língua Portuguesa
        </button>
      </div>
    </div>
  );
}

function TelaModelo({
  modelo,
  progresso,
  onTela,
  onConcluir,
  questoesPorTopico,
  onTreinarTopico,
  onAbrirResumo,
  onPassoAPasso,
}: {
  modelo: ModeloPt;
  progresso: ProgressoPt;
  onTela: (t: TelaPt) => void;
  onConcluir: () => void;
  questoesPorTopico: Record<string, number>;
  onTreinarTopico: (topico: string) => void;
  onAbrirResumo: () => void;
  onPassoAPasso: () => void;
}) {
  const concluida = !!progresso.paginas[modelo.id]?.concluidaEm;
  const grupo = GRUPOS.find((g) => g.id === modelo.grupo);
  const doGrupo = MODELOS.filter((m) => m.grupo === modelo.grupo);
  const i = doGrupo.indexOf(modelo);
  const proximo = doGrupo[i + 1];
  return (
    <article className="pi-licao">
      <button className="botao" onClick={() => onTela({ tipo: "geral" })}>
        ← Português Inteligente
      </button>
      <h2 className="secao-titulo">{modelo.titulo}</h2>
      <p className="pi-grupo-descricao">Modelo mental · {grupo?.titulo}</p>
      <div className="pi-acoes pi-modo">
        <button className="botao botao-ouro" onClick={onPassoAPasso}>
          Estudar passo a passo
        </button>
      </div>
      <div className="pi-gancho">
        <Rico texto={modelo.gancho} />
      </div>
      <section className="conteudo-card pi-secao pi-secao-modelo">
        <Blocos blocos={modelo.blocos} />
      </section>
      <BancoPrf
        topicos={modelo.topicosPrf}
        questoesPorTopico={questoesPorTopico}
        onTreinarTopico={onTreinarTopico}
        onAbrirResumo={onAbrirResumo}
      />
      <div className="pi-acoes pi-acoes-fim">
        <button className={`botao ${concluida ? "pi-botao-feito" : ""}`} onClick={onConcluir} aria-pressed={concluida}>
          {concluida ? "✓ Estudado (desmarcar)" : "Marcar como estudado"}
        </button>
        {proximo && (
          <button className="botao" onClick={() => onTela({ tipo: "modelo", id: proximo.id })}>
            Próximo: {proximo.titulo} →
          </button>
        )}
      </div>
    </article>
  );
}

interface GuiadoProps {
  progresso: ProgressoPt;
  onTela: (t: TelaPt) => void;
  onConcluir: () => void;
  onPasso: (tela: number) => void;
  onPaginaInteira: (ancora?: string) => void;
}

function GuiadoLicao({ licao, progresso, onTela, onConcluir, onFixacao, onPasso, onPaginaInteira }: GuiadoProps & {
  licao: Licao;
  onFixacao: () => void;
}) {
  const proxima = LICOES[LICOES.indexOf(licao) + 1];
  const nFix = FIXACAO.filter((q) => q.licao === licao.id).length;
  const concluida = !!progresso.paginas[licao.id]?.concluidaEm;
  return (
    <EstudoGuiado
      titulo={licao.titulo}
      voltarRotulo="← Classes de palavras"
      onVoltar={() => onTela({ tipo: "classes" })}
      secoes={SECOES_POR_ID.get(licao.id) ?? []}
      passoInicial={progresso.paginas[licao.id]?.passo}
      onPasso={onPasso}
      onPaginaInteira={onPaginaInteira}
      abertura={
        <p className="pi-guiado-resumo">
          {licao.classe && <ChipClasse classe={licao.classe} />} <strong>Nesta lição:</strong>{" "}
          <Rico texto={licao.resumo} />
        </p>
      }
      fim={
        <>
          <p className="pi-guiado-parabens">Você chegou ao fim da lição.</p>
          <p className="pi-guiado-fim-texto">
            {nFix > 0
              ? "Agora fixe com as questões desta lição. Errar faz parte: cada alternativa vem com a explicação."
              : "Marque como estudada para acompanhar o seu progresso."}
          </p>
          <div className="pi-acoes">
            {nFix > 0 && (
              <button className="botao botao-ouro" onClick={onFixacao}>
                Fixação desta lição ({nFix} questões)
              </button>
            )}
            <button className={`botao ${concluida ? "pi-botao-feito" : ""}`} onClick={onConcluir} aria-pressed={concluida}>
              {concluida ? "✓ Estudada (desmarcar)" : "Marcar como estudada"}
            </button>
            {proxima && (
              <button className="botao" onClick={() => onTela({ tipo: "licao", id: proxima.id })}>
                Próxima lição: {proxima.titulo} →
              </button>
            )}
          </div>
        </>
      }
    />
  );
}

function GuiadoModelo({
  modelo,
  progresso,
  onTela,
  onConcluir,
  questoesPorTopico,
  onTreinarTopico,
  onAbrirResumo,
  onPasso,
  onPaginaInteira,
}: GuiadoProps & {
  modelo: ModeloPt;
  questoesPorTopico: Record<string, number>;
  onTreinarTopico: (topico: string) => void;
  onAbrirResumo: () => void;
}) {
  const concluida = !!progresso.paginas[modelo.id]?.concluidaEm;
  const grupo = GRUPOS.find((g) => g.id === modelo.grupo);
  const doGrupo = MODELOS.filter((m) => m.grupo === modelo.grupo);
  const proximo = doGrupo[doGrupo.indexOf(modelo) + 1];
  return (
    <EstudoGuiado
      titulo={modelo.titulo}
      voltarRotulo="← Português Inteligente"
      onVoltar={() => onTela({ tipo: "geral" })}
      secoes={SECOES_POR_ID.get(modelo.id) ?? []}
      passoInicial={progresso.paginas[modelo.id]?.passo}
      onPasso={onPasso}
      onPaginaInteira={onPaginaInteira}
      abertura={
        <>
          <p className="pi-grupo-descricao">Modelo mental · {grupo?.titulo}</p>
          <div className="pi-gancho">
            <Rico texto={modelo.gancho} />
          </div>
        </>
      }
      fim={
        <>
          <p className="pi-guiado-parabens">Você chegou ao fim deste modelo.</p>
          <BancoPrf
            topicos={modelo.topicosPrf}
            questoesPorTopico={questoesPorTopico}
            onTreinarTopico={onTreinarTopico}
            onAbrirResumo={onAbrirResumo}
          />
          <div className="pi-acoes">
            <button className={`botao ${concluida ? "pi-botao-feito" : ""}`} onClick={onConcluir} aria-pressed={concluida}>
              {concluida ? "✓ Estudado (desmarcar)" : "Marcar como estudado"}
            </button>
            {proximo && (
              <button className="botao" onClick={() => onTela({ tipo: "modelo", id: proximo.id })}>
                Próximo: {proximo.titulo} →
              </button>
            )}
          </div>
        </>
      }
    />
  );
}

function TelaGlossario({ onTela }: { onTela: (t: TelaPt) => void }) {
  const [busca, setBusca] = useState("");
  const termo = busca.trim().toLowerCase();
  const lista = GLOSSARIO.filter(
    (g) =>
      !termo ||
      g.termo.toLowerCase().includes(termo) ||
      g.simples.toLowerCase().includes(termo) ||
      g.definicao.toLowerCase().includes(termo),
  );
  return (
    <>
      <button className="botao" onClick={() => onTela({ tipo: "geral" })}>
        ← Português Inteligente
      </button>
      <h2 className="secao-titulo">Glossário</h2>
      <input
        className="ia-input pi-busca"
        placeholder="Procurar um termo…"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        aria-label="Procurar no glossário"
      />
      <dl className="pi-glossario">
        {lista.map((g) => (
          <div key={g.termo} className="pi-glossario-item">
            <dt>{g.termo}</dt>
            <dd>
              <p className="pi-glossario-simples">
                <Rico texto={g.simples} />
              </p>
              <p className="pi-glossario-tecnico">
                <span className="pi-termo-tecnico-rotulo">Na linguagem da gramática:</span> <Rico texto={g.definicao} />
              </p>
            </dd>
          </div>
        ))}
      </dl>
      {lista.length === 0 && <p className="vazio">Nenhum termo encontrado.</p>}
    </>
  );
}

function TelaRevisao({ progresso, onTela }: { progresso: ProgressoPt; onTela: (t: TelaPt) => void }) {
  return (
    <>
      <button className="botao" onClick={() => onTela({ tipo: "geral" })}>
        ← Português Inteligente
      </button>
      <h2 className="secao-titulo">Revisão rápida</h2>
      <p className="conteudo-intro">
        O bloco de revisão de cada lição e a ideia central de cada modelo. O que você já marcou como estudado aparece
        com o selo verde.
      </p>
      <div className="conteudo-lista">
        {LICOES.map((l) => {
          const rev = l.secoes.find((s) => s.letra === "I");
          if (!rev) return null;
          const st = statusPagina(progresso, l.id);
          return (
            <section key={l.id} className="conteudo-card pi-secao">
              <h3 className="pi-secao-titulo">
                <button className="pi-link" onClick={() => onTela({ tipo: "licao", id: l.id })}>
                  {l.titulo}
                </button>{" "}
                <span className={`pi-status ${st.classe}`}>{st.rotulo}</span>
              </h3>
              <Blocos blocos={rev.blocos} />
            </section>
          );
        })}
        <section className="conteudo-card pi-secao">
          <h3 className="pi-secao-titulo">Modelos mentais</h3>
          <ul className="pi-revisao-modelos">
            {MODELOS.map((m) => (
              <li key={m.id}>
                <button className="pi-link" onClick={() => onTela({ tipo: "modelo", id: m.id })}>
                  {m.titulo}
                </button>
                : <Rico texto={m.gancho} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
