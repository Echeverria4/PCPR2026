import { useEffect, useLayoutEffect, useState, type ChangeEvent, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { AULAS_DRIVE, type AulaDrive, type GrupoAulasDrive } from "../aulas/aulasDrive";
import { useEstudo } from "../aulas/estudo";
import { corDoGrupo, iconeGrupo, nomeAula } from "../aulas/rotulos";
import {
  arquivoDoCaderno,
  folhaDaAula,
  folhasAgora,
  rascunhoFolha,
  restaurarCaderno,
  resumoTexto,
  useFolhas,
  type FolhaCaderno,
} from "./dados";
import Folha from "./Folha";
import { cadernoEmTelaCheia, irNoCaderno, minimizarCaderno, usePainelCaderno, type TelaCaderno } from "./painel";

const LIMITE_ARQUIVO = 20 * 1024 * 1024;

const nomeDoGrupo = (id: string) => AULAS_DRIVE.find((g) => g.id === id)?.nome ?? "Matéria";
const corDe = (grupo: string) => ({ "--cor-materia": corDoGrupo(grupo) }) as CSSProperties;
const contaFolhas = (n: number) => `${n} ${n === 1 ? "folha" : "folhas"}`;
const diaCurto = (ms: number) => new Date(ms).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });

/** A folha já começada da aula ou, se ainda não tem, uma nova. */
function telaDaAula(grupo: string, aula: { id: string; nome: string }): TelaCaderno {
  const existente = folhaDaAula(folhasAgora(), aula.id);
  if (existente) return { tipo: "folha", id: existente.id, aula: aula.id };
  const rascunho = rascunhoFolha(grupo, aula);
  return { tipo: "folha", id: rascunho.id, aula: aula.id, rascunho };
}

/** As anotações moram só neste aparelho: a cópia é o que traz tudo de volta. */
function CopiaSeguranca({ folhas }: { folhas: FolhaCaderno[] }) {
  const [aviso, setAviso] = useState("");

  function baixar() {
    const arquivo = arquivoDoCaderno(folhas, AULAS_DRIVE.map((g) => g.id), nomeDoGrupo);
    const url = URL.createObjectURL(new Blob([arquivo], { type: "text/html;charset=utf-8" }));
    const d = new Date();
    const dois = (n: number) => String(n).padStart(2, "0");
    const link = document.createElement("a");
    link.href = url;
    link.download = `caderno-prf-${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}.html`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
    setAviso(`Cópia baixada com ${contaFolhas(folhas.length)}. Guarde o arquivo: ele também abre no navegador.`);
  }

  async function restaurar(e: ChangeEvent<HTMLInputElement>) {
    const arquivo = e.target.files?.[0];
    e.target.value = "";
    if (!arquivo) return;
    if (arquivo.size > LIMITE_ARQUIVO) {
      setAviso("Esse arquivo é grande demais para ser uma cópia do caderno.");
      return;
    }
    const r = restaurarCaderno(await arquivo.text());
    if (!r) setAviso("Esse arquivo não é uma cópia do caderno.");
    else if (r.novas + r.atualizadas === 0) setAviso("Nada de novo: o caderno já tem tudo o que está na cópia.");
    else setAviso(`Pronto: ${r.novas} ${r.novas === 1 ? "nova" : "novas"} e ${r.atualizadas} ${r.atualizadas === 1 ? "atualizada" : "atualizadas"}.`);
  }

  return (
    <details className="prf-cad-copia">
      <summary>Cópia de segurança</summary>
      <p>
        As anotações ficam só neste aparelho. Baixe uma cópia de vez em quando: se os dados do navegador forem limpos,
        ou para levar para outro aparelho, é ela que traz tudo de volta.
      </p>
      <div className="prf-cad-copia-acoes">
        <button type="button" className="botao" onClick={baixar} disabled={folhas.length === 0}>
          ⬇ Baixar cópia
        </button>
        <label className="botao prf-cad-copia-arquivo">
          ⬆ Restaurar de um arquivo
          <input type="file" accept=".html,.json,text/html,application/json" onChange={restaurar} />
        </label>
      </div>
      {aviso && (
        <p className="prf-cad-copia-aviso" role="status">
          {aviso}
        </p>
      )}
    </details>
  );
}

/** Começo do caderno: a matéria da aula que vai assistir. */
function TelaMaterias({ folhas }: { folhas: FolhaCaderno[] }) {
  const { ativo } = useEstudo();
  const grupoAgora = ativo?.aula ? AULAS_DRIVE.find((g) => g.id === ativo.grupo) : undefined;
  const aulaAgora = grupoAgora?.aulas.find((a) => a.id === ativo?.aula);
  const porGrupo = new Map<string, number>();
  for (const f of folhas) porGrupo.set(f.grupo, (porGrupo.get(f.grupo) ?? 0) + 1);

  return (
    <div className="prf-cad-tela">
      <h2 className="prf-cad-pergunta">Qual matéria você vai assistir agora?</h2>
      {grupoAgora && aulaAgora && (
        <button
          type="button"
          className="prf-cad-item prf-cad-agora"
          style={corDe(grupoAgora.id)}
          onClick={() => irNoCaderno(telaDaAula(grupoAgora.id, { id: aulaAgora.id, nome: nomeAula(aulaAgora) }))}
        >
          <span aria-hidden="true">⏱</span>
          <span className="prf-cad-item-texto">
            <span className="prf-cad-item-sub">Aula de agora</span>
            <span className="prf-cad-item-nome">{nomeAula(aulaAgora)}</span>
          </span>
        </button>
      )}
      <ul className="prf-cad-itens">
        {AULAS_DRIVE.map((g) => {
          const n = porGrupo.get(g.id) ?? 0;
          return (
            <li key={g.id}>
              <button
                type="button"
                className="prf-cad-item"
                style={corDe(g.id)}
                onClick={() => irNoCaderno({ tipo: "materia", grupo: g.id })}
              >
                <span aria-hidden="true">{iconeGrupo(g.id)}</span>
                <span className="prf-cad-item-texto">
                  <span className="prf-cad-item-nome">{g.nome}</span>
                </span>
                {n > 0 && <span className="prf-cad-item-marca">{contaFolhas(n)}</span>}
              </button>
            </li>
          );
        })}
      </ul>
      <CopiaSeguranca folhas={folhas} />
    </div>
  );
}

function ItemFolha({ folha }: { folha: FolhaCaderno }) {
  const sub = [folha.nomeAula, diaCurto(folha.atualizadaEm)].filter(Boolean).join(" · ");
  return (
    <li>
      <button
        type="button"
        className="prf-cad-item"
        onClick={() => irNoCaderno({ tipo: "folha", id: folha.id, aula: folha.aula })}
      >
        <span className="prf-cad-item-texto">
          <span className="prf-cad-item-nome">{folha.titulo || resumoTexto(folha.html) || "Folha sem texto"}</span>
          <span className="prf-cad-item-sub">{sub}</span>
        </span>
      </button>
    </li>
  );
}

/** As aulas da matéria e as anotações livres. */
function TelaMateria({ grupo, folhas }: { grupo: GrupoAulasDrive; folhas: FolhaCaderno[] }) {
  const daMateria = folhas.filter((f) => f.grupo === grupo.id);
  const idsAulas = new Set(grupo.aulas.map((a) => a.id));
  const daAula = (a: AulaDrive) => folhaDaAula(daMateria, a.id);
  const principais = new Set(grupo.aulas.map((a) => daAula(a)?.id));
  // Também aparecem aqui as folhas que a lista de aulas não alcança: uma segunda folha da mesma aula (dois aparelhos
  // juntados pela cópia) ou a de uma aula que saiu do curso.
  const soltas = daMateria
    .filter((f) => !f.aula || !idsAulas.has(f.aula) || !principais.has(f.id))
    .sort((a, b) => b.atualizadaEm - a.atualizadaEm);

  function novaLivre() {
    const rascunho = rascunhoFolha(grupo.id);
    irNoCaderno({ tipo: "folha", id: rascunho.id, rascunho });
  }

  return (
    <div className="prf-cad-tela" style={corDe(grupo.id)}>
      <button type="button" className="prf-voltar" onClick={() => irNoCaderno({ tipo: "materias" })}>
        ← Matérias
      </button>
      <h2 className="prf-cad-pergunta">
        <span aria-hidden="true">{iconeGrupo(grupo.id)}</span> {grupo.nome}
      </h2>
      <p className="prf-cad-dica">Escolha a aula ou comece uma anotação livre.</p>
      <button type="button" className="botao botao-ouro prf-cad-nova" onClick={novaLivre}>
        ＋ Nova anotação livre
      </button>
      {soltas.length > 0 && (
        <>
          <h3 className="prf-cad-sub">Anotações livres</h3>
          <ul className="prf-cad-itens">
            {soltas.map((f) => (
              <ItemFolha key={f.id} folha={f} />
            ))}
          </ul>
        </>
      )}
      <h3 className="prf-cad-sub">Aulas</h3>
      <ul className="prf-cad-itens">
        {grupo.aulas.map((a) => (
          <li key={a.id}>
            <button
              type="button"
              className="prf-cad-item"
              onClick={() => irNoCaderno(telaDaAula(grupo.id, { id: a.id, nome: nomeAula(a) }))}
            >
              <span className="prf-cad-item-texto">
                <span className="prf-cad-item-nome">{nomeAula(a)}</span>
              </span>
              {daAula(a) && <span className="prf-cad-item-marca">📝 anotada</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * O caderno: um painel que não tampa a aula (à direita dela, com menos da metade da tela; embaixo no celular em pé),
 * para escrever com o vídeo tocando. Só carrega quando abre.
 */
export default function CadernoPrf() {
  const { cheia, tela } = usePainelCaderno();
  const folhas = useFolhas();
  // Lido na primeira renderização, antes de a folha pegar o foco.
  const [focoAntes] = useState(() => document.activeElement as HTMLElement | null);

  // O pedido de uma aula vira a folha dela antes de a tela aparecer; folha que sumiu volta para as matérias.
  useLayoutEffect(() => {
    if (tela.tipo === "aula") irNoCaderno(telaDaAula(tela.grupo, { id: tela.aula, nome: tela.nomeAula }));
    else if (tela.tipo === "folha" && !tela.rascunho && !folhas.some((f) => f.id === tela.id)) {
      irNoCaderno({ tipo: "materias" });
    }
  }, [tela, folhas]);

  // A classe abre espaço na página para o painel; em tela cheia ele cobre tudo e a página não rola por trás.
  useLayoutEffect(() => {
    const classe = cheia ? "prf-cad-cheia" : "prf-cad-aberto";
    document.body.classList.add(classe);
    return () => document.body.classList.remove(classe);
  }, [cheia]);

  // O teclado do celular cobre a parte de baixo da tela: o painel sobe junto com ele.
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const raiz = document.documentElement;
    const medir = () => {
      const teclado = vv.scale > 1 ? 0 : Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      raiz.style.setProperty("--prf-cad-kb", `${teclado}px`);
      raiz.style.setProperty("--prf-cad-vh", `${vv.height}px`);
    };
    medir();
    vv.addEventListener("resize", medir);
    vv.addEventListener("scroll", medir);
    return () => {
      vv.removeEventListener("resize", medir);
      vv.removeEventListener("scroll", medir);
      raiz.style.removeProperty("--prf-cad-kb");
      raiz.style.removeProperty("--prf-cad-vh");
    };
  }, []);

  useEffect(
    () => () => {
      if (focoAntes?.isConnected) focoAntes.focus({ preventScroll: true });
    },
    [focoAntes],
  );

  const folha = tela.tipo === "folha" ? (folhas.find((f) => f.id === tela.id) ?? tela.rascunho) : undefined;
  const grupo = tela.tipo === "materia" ? AULAS_DRIVE.find((g) => g.id === tela.grupo) : undefined;

  return createPortal(
    <aside
      className={`prf-cad-painel${cheia ? " prf-cad-cheio" : ""}`}
      aria-label="Caderno de anotações"
      // Esc aqui dentro não fecha o leitor do PDF que está ao lado.
      onKeyDown={(e) => {
        if (e.key === "Escape") e.stopPropagation();
      }}
    >
      <div className="prf-cad-topo">
        <span className="prf-cad-nome">📝 Caderno</span>
        <button type="button" className="prf-cad-topo-botao" onClick={() => cadernoEmTelaCheia(!cheia)}>
          {cheia ? "⤡ Diminuir" : "⤢ Tela cheia"}
        </button>
        <button
          type="button"
          className="prf-cad-topo-botao"
          aria-label="Minimizar o caderno"
          title="Minimizar o caderno"
          onClick={minimizarCaderno}
        >
          — Minimizar
        </button>
      </div>
      {folha ? (
        <Folha
          key={folha.id}
          folha={folha}
          nova={!folhas.some((f) => f.id === folha.id)}
          nomeGrupo={nomeDoGrupo(folha.grupo)}
          onVoltar={() => irNoCaderno({ tipo: "materia", grupo: folha.grupo })}
        />
      ) : grupo ? (
        <TelaMateria grupo={grupo} folhas={folhas} />
      ) : tela.tipo === "aula" ? null : (
        <TelaMaterias folhas={folhas} />
      )}
    </aside>,
    document.body,
  );
}
