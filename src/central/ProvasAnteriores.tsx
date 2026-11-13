import { useEffect, useMemo, useState, type ReactNode } from "react";
import CanetaPrf from "../prf/caneta/CanetaPrf";
import {
  PROVAS_ANTERIORES,
  type Idioma,
  type ItemProva,
  type ProvaAnterior,
} from "../prf/cursos/completo/prf-policial/provas";
import type { Question } from "../lib/types";
import ProvaCentral, {
  descartarProvaSalva,
  lerProvaSalva,
  novaProva,
  questoesDaProva,
  relogio,
  type ProvaSalva,
  type ResultadoEntrega,
} from "./ProvaCentral";

/**
 * Provas anteriores (13/11/26): provas reais de Certo/Errado com o gabarito definitivo, inteiras e na ordem do
 * caderno, com nota líquida (certas − erradas). Ficam à parte: não entram no treino nem no progresso do curso.
 */

const chaveDe = (id: string) => `cx:provas:${id}:andamento:v1`;
const HISTORICO = "cx:provas:historico:v1";
const IDIOMA = "cx:provas:idioma:v1";

interface Registro extends ResultadoEntrega {
  prova: string;
  idioma?: Idioma;
  em: string;
}

function lerHistorico(): Registro[] {
  try {
    const h = JSON.parse(localStorage.getItem(HISTORICO) ?? "[]");
    return Array.isArray(h) ? (h as Registro[]) : [];
  } catch {
    return [];
  }
}

function gravarHistorico(r: Registro) {
  try {
    localStorage.setItem(HISTORICO, JSON.stringify([r, ...lerHistorico()].slice(0, 40)));
  } catch {
    /* sem armazenamento: o resultado aparece só agora */
  }
}

function lerIdioma(): Idioma {
  try {
    return localStorage.getItem(IDIOMA) === "espanhol" ? "espanhol" : "ingles";
  } catch {
    return "ingles";
  }
}

function comCaneta(questaoId: string, conteudo: ReactNode) {
  return <CanetaPrf questaoId={questaoId}>{conteudo}</CanetaPrf>;
}

const NOME_IDIOMA: Record<Idioma, string> = { ingles: "Inglês", espanhol: "Espanhol" };

/** Itens da prova para a língua escolhida, na ordem do caderno (língua estrangeira primeiro). */
function itensDa(itens: ItemProva[], idioma: Idioma): ItemProva[] {
  return itens
    .filter((q) => !q.idioma || q.idioma === idioma)
    .sort((a, b) => (a.idioma ? 0 : 1) - (b.idioma ? 0 : 1) || (a.prova?.numero ?? 0) - (b.prova?.numero ?? 0));
}

function dataCurta(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
  } catch {
    return iso.slice(0, 10);
  }
}

/** Prova de múltipla escolha (A a E): nota sem desconto por erro. */
const multipla = (p: ProvaAnterior) => p.formato === "multipla";

export default function ProvasAnteriores() {
  const [abertaId, setAbertaId] = useState<string | null>(null);
  const [itens, setItens] = useState<Map<string, ItemProva[]>>(new Map());
  const [erro, setErro] = useState("");
  const [idioma, setIdioma] = useState<Idioma>(lerIdioma);
  const [emProva, setEmProva] = useState<{ salva: ProvaSalva; questoes: Question<string>[] } | null>(null);
  const [aviso, setAviso] = useState("");
  const [historico, setHistorico] = useState<Registro[]>(lerHistorico);
  const [, setVersao] = useState(0);

  const aberta = PROVAS_ANTERIORES.find((p) => p.id === abertaId) ?? null;
  const carregados = aberta ? itens.get(aberta.id) : undefined;

  useEffect(() => {
    if (!aberta || itens.has(aberta.id)) return;
    let vivo = true;
    setErro("");
    aberta
      .carregar()
      .then((lista) => {
        if (vivo) setItens((m) => new Map(m).set(aberta.id, lista));
      })
      .catch(() => {
        if (vivo) setErro("Não deu para carregar a prova. Confira a internet e tente de novo.");
      });
    return () => {
      vivo = false;
    };
  }, [aberta, itens]);

  const porId = useMemo(() => new Map((carregados ?? []).map((q) => [q.id, q as Question<string>])), [carregados]);
  const pendente = aberta ? lerProvaSalva(chaveDe(aberta.id)) : null;

  function escolherIdioma(l: Idioma) {
    setIdioma(l);
    try {
      localStorage.setItem(IDIOMA, l);
    } catch {
      /* só nesta visita */
    }
  }

  function abrir(salva: ProvaSalva) {
    if (!aberta) return;
    const questoes = questoesDaProva(salva, porId);
    if (!questoes) {
      descartarProvaSalva(chaveDe(aberta.id));
      setAviso("A prova salva não bate mais com esta versão e foi descartada. Comece de novo.");
      setVersao((v) => v + 1);
      return;
    }
    setAviso("");
    setEmProva({ salva, questoes });
    window.scrollTo(0, 0);
  }

  function comecar() {
    if (!carregados) return;
    const lista = itensDa(carregados, idioma);
    abrir(novaProva(lista.map((q) => ({ q, bloco: q.bloco }))));
  }

  function descartar() {
    if (!aberta) return;
    descartarProvaSalva(chaveDe(aberta.id));
    setVersao((v) => v + 1);
  }

  function sair() {
    setEmProva(null);
    setHistorico(lerHistorico());
    window.scrollTo(0, 0);
  }

  if (aberta && emProva) {
    const lingua = emProva.questoes.find((q) => (q as ItemProva).idioma) as ItemProva | undefined;
    return (
      <div className="cx-treino-quiz">
        <ProvaCentral
          salva={emProva.salva}
          questoes={emProva.questoes}
          blocos={blocosDe(aberta, emProva.questoes as ItemProva[])}
          nomes={aberta.nomes}
          envolver={comCaneta}
          chave={chaveDe(aberta.id)}
          titulo={`${aberta.titulo} · ${aberta.banca}`}
          tituloResultado={`${aberta.titulo} entregue`}
          cebraspe={!multipla(aberta)}
          numeroOriginal
          notaResultado={
            <>
              {multipla(aberta)
                ? "Prova de múltipla escolha: certa vale 1 ponto; errada e em branco, 0."
                : "Nota no padrão Cebraspe: certa vale +1, errada −1 e em branco 0."}{" "}
              Esta prova fica à parte: não entra no seu progresso nem no treino. {aberta.anulados}
            </>
          }
          onEntregue={(r) =>
            gravarHistorico({ ...r, prova: aberta.id, idioma: lingua?.idioma, em: new Date().toISOString() })
          }
          onPausar={sair}
          onVoltar={sair}
        />
        <div className="prf-caneta-espaco" aria-hidden="true" />
      </div>
    );
  }

  if (aberta) {
    const lista = carregados ? itensDa(carregados, idioma) : [];
    const blocos = blocosDe(aberta, lista);
    const meus = historico.filter((h) => h.prova === aberta.id);
    return (
      <div className="cx-hubs">
        <button type="button" className="botao cx-voltar" onClick={() => setAbertaId(null)}>
          ← Provas anteriores
        </button>
        <section className="cx-card cx-treino" aria-label={aberta.titulo}>
          <h2 className="cx-card-titulo">{aberta.titulo}</h2>
          <p className="cx-treino-dica">
            {aberta.banca} · {aberta.subtitulo}.{" "}
            {multipla(aberta)
              ? "Questões originais de múltipla escolha (A a E), com o gabarito definitivo, na ordem do caderno."
              : "Itens originais de Certo ou Errado, com o gabarito definitivo, na ordem do caderno."}{" "}
            O gabarito e as explicações saem só quando você entregar.
          </p>

          {erro && <p className="cx-prova-aviso">{erro}</p>}
          {!carregados && !erro && <p className="cx-vazio">Carregando a prova…</p>}

          {carregados && (
            <>
              {aberta.linguas && (
                <div className="cx-campo">
                  <span className="cx-campo-rotulo" id="cx-provas-lingua">
                    Língua estrangeira
                  </span>
                  <ul className="cx-chips cx-qtd" aria-labelledby="cx-provas-lingua">
                    {(["ingles", "espanhol"] as const).map((l) => (
                      <li key={l}>
                        <button type="button" aria-pressed={idioma === l} onClick={() => escolherIdioma(l)}>
                          {NOME_IDIOMA[l]}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="cx-dist">
                {blocos.map((b, bi) => (
                  <div key={b.nome} className="cx-dist-bloco">
                    <h3 className="cx-dist-titulo">
                      <span>{b.nome}</span>
                      <span>{b.total}</span>
                    </h3>
                    <ul>
                      {contarMaterias(lista, bi).map(([m, n]) => (
                        <li key={m}>
                          <span>{aberta.nomes[m] ?? m}</span>
                          <span className="cx-chip-n">{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="cx-treino-resumo">
                <strong>{lista.length}</strong>{" "}
                {multipla(aberta)
                  ? "questões · certa vale 1 ponto (errada e em branco, 0)"
                  : "itens · nota líquida (certa +1, errada −1, em branco 0)"}
              </p>
              <p className="cx-card-nota">{aberta.anulados}</p>

              {aviso && <p className="cx-prova-aviso">{aviso}</p>}

              {pendente ? (
                <div className="cx-prova-pendente">
                  <p>
                    Você tem esta prova em andamento:{" "}
                    <strong>
                      {pendente.respostas.filter((r) => r !== null).length} de {pendente.itens.length}
                    </strong>{" "}
                    marcados · ⏱ {relogio(pendente.decorridoMs)}
                  </p>
                  <div className="cx-card-acoes">
                    <button type="button" className="botao botao-ouro" onClick={() => abrir(pendente)}>
                      Continuar prova →
                    </button>
                    <button type="button" className="botao" onClick={descartar}>
                      Descartar
                    </button>
                  </div>
                </div>
              ) : (
                <button type="button" className="botao botao-ouro cx-treino-iniciar" onClick={comecar}>
                  Começar prova →
                </button>
              )}
            </>
          )}

          <p className="cx-card-nota">
            Caderno e gabarito oficiais:{" "}
            <a href={aberta.pagina} target="_blank" rel="noopener noreferrer">
              página do concurso no site da banca
            </a>
            .
          </p>
        </section>

        {meus.length > 0 && (
          <section className="cx-card" aria-label="Suas notas nesta prova">
            <h3 className="cx-prova-sub">Suas notas</h3>
            <ul className="cx-prova-materias">
              {meus.map((h, k) => (
                <li key={`${h.em}-${k}`}>
                  <span>
                    {dataCurta(h.em)}
                    {h.idioma ? ` · ${NOME_IDIOMA[h.idioma]}` : ""} · ⏱ {relogio(h.decorridoMs)}
                  </span>
                  <span className="cx-chip-n">
                    {multipla(aberta) ? `${h.certas} de ${h.total}` : `${h.liquida} pts`} ({h.certas}✓ {h.erradas}✗{" "}
                    {h.branco}○)
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  }

  return (
    <div className="cx-hubs">
      <p className="cx-intro">
        Provas reais, inteiras, com o gabarito definitivo da banca. Ficam à parte do treino: a nota é só sua e não muda
        o progresso dos cursos.
      </p>
      <ul className="cx-provas-lista">
        {PROVAS_ANTERIORES.map((p) => {
          const ultima = historico.find((h) => h.prova === p.id);
          const andamento = lerProvaSalva(chaveDe(p.id));
          return (
            <li key={p.id}>
              <button type="button" className="cx-card cx-provas-item" onClick={() => setAbertaId(p.id)}>
                <span className="cx-provas-titulo">{p.titulo}</span>
                <span className="cx-provas-sub">
                  {p.banca} · {p.subtitulo}
                </span>
                <span className="cx-provas-estado">
                  {andamento
                    ? "Em andamento"
                    : ultima
                      ? multipla(p)
                        ? `Última nota: ${ultima.certas} de ${ultima.total}`
                        : `Última nota: ${ultima.liquida} pts de ${ultima.total}`
                      : "Ainda não feita"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="cx-card-nota">Novas provas entram aos poucos, uma por vez.</p>
    </div>
  );
}

function blocosDe(prova: ProvaAnterior, lista: { bloco: number }[]) {
  return prova.blocos.map((b, bi) => ({ nome: b.nome, total: lista.filter((q) => q.bloco === bi).length || b.total }));
}

function contarMaterias(lista: ItemProva[], bloco: number): [string, number][] {
  const m = new Map<string, number>();
  for (const q of lista) if (q.bloco === bloco) m.set(q.materia, (m.get(q.materia) ?? 0) + 1);
  return [...m.entries()];
}
