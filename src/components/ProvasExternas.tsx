import { useEffect, useState } from "react";
import type { ProvaExterna, ProvaExternaMateria, RascunhoProvaExterna, SubjectId } from "../lib/types";
import { PROVA_MIX, SUBJECT_MAP } from "../data/subjects";
import { blocosDaMateria } from "../data/blocos";
import { ORDEM_CADERNO } from "../data/retaFinal";
import { getRascunhoExterna, salvarRascunhoExterna } from "../lib/storage";

type LinhaForm = NonNullable<RascunhoProvaExterna["linhas"][SubjectId]>;
type Linhas = RascunhoProvaExterna["linhas"];

const NOME_CURTO: Record<SubjectId, string> = {
  pt: "Português",
  ti: "TI",
  for: "Forenses",
  leg: "Legislação",
  pp: "Proc. Penal",
  pen: "Penal",
  con: "Constitucional",
  adm: "Administrativo",
  dh: "Direitos Humanos",
  pr: "Paraná",
  cont: "Contabilidade",
  est: "Estatística",
  rlm: "RLM",
};

const pad = (n: number) => String(n).padStart(2, "0");
const dataHora = (iso: string) => {
  const d = new Date(iso);
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)} ${pad(d.getHours())}h${pad(d.getMinutes())}`;
};

/** Linha como está no formulário; o rascunho salvo pode vir de uma versão anterior, sem algum campo. */
function linhaDe(linhas: Linhas, m: SubjectId): LinhaForm {
  const l = linhas[m];
  return {
    questoes: typeof l?.questoes === "string" ? l.questoes : "",
    acertos: typeof l?.acertos === "string" ? l.acertos : "",
    erros: l?.erros && typeof l.erros === "object" ? l.erros : {},
    nota: typeof l?.nota === "string" ? l.nota : "",
  };
}

const somaErros = (erros: Record<string, number>) => Object.values(erros).reduce((s, x) => s + (x > 0 ? x : 0), 0);

const preenchida = (l: LinhaForm) => l.questoes.trim() !== "" || l.acertos.trim() !== "" || l.nota.trim() !== "" || somaErros(l.erros) > 0;

function inteiro(texto: string): number | null {
  const t = texto.trim();
  return /^\d+$/.test(t) ? Number(t) : null;
}

interface Avaliacao {
  questoes: number;
  acertos: number;
  erros: number;
  marcados: number;
  problema: string | null;
}

function avaliar(l: LinhaForm): Avaliacao {
  const questoes = inteiro(l.questoes);
  const acertos = inteiro(l.acertos);
  const marcados = somaErros(l.erros);
  const base = { questoes: questoes ?? 0, acertos: acertos ?? 0, erros: 0, marcados };
  if (!questoes) return { ...base, problema: "Informe quantas questões fez." };
  if (acertos === null) return { ...base, problema: "Informe quantas acertou." };
  if (acertos > questoes) return { ...base, problema: "Acertos maiores que as questões." };
  const erros = questoes - acertos;
  if (marcados > erros) return { ...base, erros, problema: `Marcou ${marcados} erro(s) por tópico, mas errou ${erros}: tire ${marcados - erros}.` };
  return { ...base, erros, problema: null };
}

interface ProvasExternasProps {
  externas: ProvaExterna[];
  aberto: boolean;
  onAlternar: (aberto: boolean) => void;
  /** Nome da prova quando o lançamento vem da aba Provas reais. */
  nomeInicial: string | null;
  onSalvar: (prova: ProvaExterna) => void;
  onRemover: (id: string) => void;
  onVerMapa: () => void;
}

export default function ProvasExternas({ externas, aberto, onAlternar, nomeInicial, onSalvar, onRemover, onVerMapa }: ProvasExternasProps) {
  const [rascunho] = useState(() => getRascunhoExterna());
  const [nome, setNome] = useState(() => nomeInicial ?? (typeof rascunho?.nome === "string" ? rascunho.nome : ""));
  const [linhas, setLinhas] = useState<Linhas>(() => rascunho?.linhas ?? {});
  const [aviso, setAviso] = useState<string | null>(null);

  useEffect(() => {
    if (nomeInicial) setNome(nomeInicial);
  }, [nomeInicial]);

  const avaliacoes = ORDEM_CADERNO.map((materia) => ({ materia, linha: linhaDe(linhas, materia) }))
    .filter(({ linha }) => preenchida(linha))
    .map(({ materia, linha }) => ({ materia, linha, av: avaliar(linha) }));
  const comProblema = avaliacoes.filter((a) => a.av.problema).length;
  const podeSalvar = avaliacoes.length > 0 && comProblema === 0;
  const temLinhas = avaliacoes.length > 0;
  const temAlgo = nome.trim() !== "" || temLinhas;
  const totais = avaliacoes.reduce((s, { av }) => ({ questoes: s.questoes + av.questoes, acertos: s.acertos + av.acertos }), {
    questoes: 0,
    acertos: 0,
  });

  // O lançamento pela metade sobrevive a trocar de aba ou recarregar (só o nome, sem matéria, não vale guardar).
  useEffect(() => {
    salvarRascunhoExterna(temLinhas ? { nome, linhas } : null);
  }, [nome, linhas, temLinhas]);

  function atualizar(m: SubjectId, mudanca: Partial<LinhaForm>) {
    setLinhas((ls) => ({ ...ls, [m]: { ...linhaDe(ls, m), ...mudanca } }));
    setAviso(null);
  }

  function mudarErro(m: SubjectId, blocoId: string, delta: number) {
    setLinhas((ls) => {
      const l = linhaDe(ls, m);
      const erros = { ...l.erros };
      const novo = Math.max(0, (erros[blocoId] ?? 0) + delta);
      if (novo > 0) erros[blocoId] = novo;
      else delete erros[blocoId];
      return { ...ls, [m]: { ...l, erros } };
    });
    setAviso(null);
  }

  function limpar() {
    if (!window.confirm("Apagar o que foi digitado neste lançamento?")) return;
    setNome("");
    setLinhas({});
  }

  function salvar() {
    if (!podeSalvar) return;
    const agora = new Date();
    const materias: ProvaExternaMateria[] = avaliacoes.map(({ materia, linha, av }) => {
      const validos = new Set(blocosDaMateria(materia).map((b) => b.id));
      const nota = linha.nota.trim();
      return {
        materia,
        questoes: av.questoes,
        acertos: av.acertos,
        errosPorBloco: Object.fromEntries(Object.entries(linha.erros).filter(([id, n]) => validos.has(id) && n > 0)),
        ...(nota ? { nota } : {}),
      };
    });
    const prova: ProvaExterna = {
      id: `ext-${agora.getTime()}`,
      nome: nome.trim() || `Prova de fora de ${pad(agora.getDate())}/${pad(agora.getMonth() + 1)}`,
      lancadaEm: agora.toISOString(),
      materias,
    };
    onSalvar(prova);
    setNome("");
    setLinhas({});
    setAviso(`"${prova.nome}" lançada: ${totais.acertos}/${totais.questoes} em ${materias.length} matéria(s). O mapa e o caderno já contam.`);
    onAlternar(false);
  }

  return (
    <>
      <h2 className="secao-titulo">Provas feitas fora do app</h2>
      <p className="conteudo-intro">
        Fez uma prova real da FGV no papel ou questões em outro site? Depois de corrigir pelo gabarito, lance quantas fez e quantas acertou
        em cada matéria e, se souber, em que tópico errou. O mapa de pontos fracos e o ranking de matérias passam a contar esses erros, e o
        que você anotar vai para o caderno de erros.
      </p>
      {aviso && (
        <p className="ext-aviso">
          ✔ {aviso}{" "}
          <button className="link-botao" onClick={onVerMapa}>
            Ver o mapa
          </button>
        </p>
      )}
      <div className="ext-acoes">
        <button
          className="botao botao-ouro"
          onClick={() => {
            onAlternar(!aberto);
            setAviso(null);
          }}
        >
          {aberto ? "Fechar lançamento" : "📝 Lançar prova de fora"}
        </button>
        {!aberto && temLinhas && <span className="ext-rascunho">Lançamento não salvo: ele continua onde parou.</span>}
      </div>

      {aberto && (
        <div className="rf-card ext-form">
          <div className="campo">
            <label htmlFor="ext-nome">Nome da prova (opcional)</label>
            <input id="ext-nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Ex.: FGV · PC-AM 2022 · Investigador" />
          </div>
          <p className="sim-nota ext-dica">
            Preencha só as matérias que a prova tinha. Os erros que você não souber classificar se espalham pelos tópicos da matéria; os
            classificados pesam no tópico certo.
          </p>
          <div className="ext-linhas">
            {ORDEM_CADERNO.map((m) => {
              const l = linhaDe(linhas, m);
              const av = preenchida(l) ? avaliar(l) : null;
              const mostrarDetalhe = av !== null && (av.erros > 0 || av.marcados > 0 || l.nota.trim() !== "");
              return (
                <div key={m} className={`ext-linha ${av ? "ext-linha-cheia" : ""}`}>
                  <div className="ext-linha-topo">
                    <span className="ext-nome-materia">
                      {SUBJECT_MAP[m].nome} <span className="ext-peso">{PROVA_MIX[m]} na prova</span>
                    </span>
                    <label className="ext-num">
                      <input
                        className="prova-input"
                        type="number"
                        inputMode="numeric"
                        min={0}
                        aria-label={`Questões de ${SUBJECT_MAP[m].nome}`}
                        value={l.questoes}
                        onChange={(e) => atualizar(m, { questoes: e.target.value })}
                      />
                      <span className="prova-de">questões</span>
                    </label>
                    <label className="ext-num">
                      <input
                        className="prova-input"
                        type="number"
                        inputMode="numeric"
                        min={0}
                        aria-label={`Acertos em ${SUBJECT_MAP[m].nome}`}
                        value={l.acertos}
                        onChange={(e) => atualizar(m, { acertos: e.target.value })}
                      />
                      <span className="prova-de">acertos</span>
                    </label>
                    {av &&
                      (av.problema ? (
                        <span className="ext-problema">{av.problema}</span>
                      ) : (
                        <span className="ext-erros">
                          {av.erros} erro(s){av.erros > 0 && ` · ${av.erros - av.marcados} sem tópico`}
                        </span>
                      ))}
                  </div>
                  {mostrarDetalhe && (
                    <div className="ext-detalhe">
                      <span className="ext-detalhe-titulo">Em que tópico errou? (opcional)</span>
                      {blocosDaMateria(m).map((b) => {
                        const n = l.erros[b.id] ?? 0;
                        return (
                          <div key={b.id} className={`ext-bloco ${n > 0 ? "ext-bloco-marcado" : ""}`}>
                            <button
                              className="botao ext-passo"
                              aria-label={`Tirar um erro de ${b.nome}`}
                              onClick={() => mudarErro(m, b.id, -1)}
                              disabled={n === 0}
                            >
                              −
                            </button>
                            <span className="ext-contador">{n}</span>
                            <button
                              className="botao ext-passo"
                              aria-label={`Somar um erro em ${b.nome}`}
                              onClick={() => mudarErro(m, b.id, 1)}
                              disabled={av.marcados >= av.erros}
                            >
                              +
                            </button>
                            <span className="ext-bloco-nome">{b.nome}</span>
                          </div>
                        );
                      })}
                      <label className="ext-nota">
                        <span>O que errou, em poucas palavras (vai para o caderno de erros)</span>
                        <textarea
                          rows={2}
                          value={l.nota}
                          onChange={(e) => atualizar(m, { nota: e.target.value })}
                          placeholder="Ex.: crase antes de pronome de tratamento; confundi DoS com DDoS"
                        />
                      </label>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="ext-rodape">
            <span className="ext-total">
              {avaliacoes.length > 0
                ? `${totais.acertos}/${totais.questoes} em ${avaliacoes.length} matéria(s)${comProblema > 0 ? ` · confira ${comProblema} matéria(s)` : ""}`
                : "Nenhuma matéria preenchida."}
            </span>
            {temAlgo && (
              <button className="botao" onClick={limpar}>
                Limpar formulário
              </button>
            )}
            <button className="botao botao-ouro" onClick={salvar} disabled={!podeSalvar}>
              Salvar no mapa
            </button>
          </div>
        </div>
      )}

      {externas.length > 0 && (
        <>
          <h3 className="rf-subtitulo">Lançadas ({externas.length})</h3>
          <div className="ext-lista">
            {externas.map((p) => {
              const questoes = p.materias.reduce((s, m) => s + m.questoes, 0);
              const acertos = p.materias.reduce((s, m) => s + m.acertos, 0);
              return (
                <div key={p.id} className="ext-item">
                  <span className="ext-data">{dataHora(p.lancadaEm)}</span>
                  <strong className="ext-item-nome">{p.nome}</strong>
                  <span className="ext-placar">
                    {acertos}/{questoes}
                  </span>
                  <span className="ext-item-materias">
                    {p.materias.map((m) => `${NOME_CURTO[m.materia] ?? m.materia} ${m.acertos}/${m.questoes}`).join(" · ")}
                  </span>
                  <button
                    className="botao botao-perigo ext-excluir"
                    onClick={() => {
                      if (window.confirm(`Excluir "${p.nome}"? Ela sai do mapa e do caderno de erros.`)) onRemover(p.id);
                    }}
                  >
                    Excluir
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
