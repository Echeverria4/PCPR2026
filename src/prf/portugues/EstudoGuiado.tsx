import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Blocos, FraseInterativa, Rico, TelaComTermos } from "./Visuais";
import type { Bloco } from "./tipos";

/** Uma parte da página (o modelo mental ou um dos blocos A–I), como o passo a passo a mostra. */
export interface SecaoGuiada {
  /** Rótulo no alto do cartão ("B · Como identificar?"); vazio, sem rótulo. */
  titulo: string;
  /** Id da seção na página inteira, para abrir nela. */
  ancora?: string;
  blocos: Bloco[];
}

type ItemExemplo = Extract<Bloco, { tipo: "exemplos" }>["itens"][number];

type Passo =
  | { tipo: "blocos"; secao: number; blocos: Bloco[] }
  | { tipo: "frase"; secao: number; bloco: Extract<Bloco, { tipo: "frase" }> }
  | { tipo: "exemplo"; secao: number; item: ItemExemplo; n: number; de: number };

function textos(v: unknown, out: string[] = []): string[] {
  if (typeof v === "string") out.push(v.replace(/\*\*/g, ""));
  else if (Array.isArray(v)) v.forEach((x) => textos(x, out));
  else if (v && typeof v === "object")
    Object.entries(v).forEach(([k, x]) => k !== "tipo" && k !== "classe" && textos(x, out));
  return out;
}

/** Tamanho aproximado do bloco, em linhas de 36 letras. */
const peso = (b: Bloco) => textos(b).reduce((a, s) => a + Math.max(1, Math.ceil(s.length / 36)), 0);

/**
 * Divide as seções em telas curtas: cada frase anotada e cada exemplo têm a sua, fluxos longos e pegadinhas
 * vêm em partes, e blocos pequenos da mesma seção dividem a tela. Seções diferentes nunca se juntam.
 */
export function montarPassos(secoes: SecaoGuiada[]): Passo[] {
  const passos: Passo[] = [];
  secoes.forEach((s, secao) => {
    const de = s.blocos.reduce((a, b) => a + (b.tipo === "exemplos" ? b.itens.length : 0), 0);
    let n = 0;
    let atual: Bloco[] = [];
    let pesoAtual = 0;
    const fecha = () => {
      if (atual.length) passos.push({ tipo: "blocos", secao, blocos: atual });
      atual = [];
      pesoAtual = 0;
    };
    const sozinho = (b: Bloco) => {
      fecha();
      passos.push({ tipo: "blocos", secao, blocos: [b] });
    };
    for (const b of s.blocos) {
      if (b.tipo === "frase") {
        fecha();
        passos.push({ tipo: "frase", secao, bloco: b });
      } else if (b.tipo === "exemplos") {
        fecha();
        for (const item of b.itens) passos.push({ tipo: "exemplo", secao, item, n: ++n, de });
      } else if (b.tipo === "fluxo" && b.passos.length > 6) {
        const tam = Math.ceil(b.passos.length / Math.ceil(b.passos.length / 5));
        for (let k = 0; k < b.passos.length; k += tam) {
          const fim = k + tam >= b.passos.length;
          sozinho({ ...b, passos: b.passos.slice(k, k + tam), inicio: k, continua: !fim, senao: fim ? b.senao : undefined });
        }
      } else if (b.tipo === "pegadinhas" && b.itens.length > 2) {
        for (let k = 0; k < b.itens.length; k += 2) sozinho({ ...b, itens: b.itens.slice(k, k + 2) });
      } else {
        const p = peso(b);
        const cabe = pesoAtual + p <= 24 || (p <= 7 && pesoAtual + p <= 31);
        if (atual.length && !cabe) fecha();
        atual.push(b);
        pesoAtual += p;
      }
    }
    fecha();
  });
  return passos;
}

function ExemploGuiado({ item }: { item: ItemExemplo }) {
  const [ver, setVer] = useState(false);
  return (
    <div className={`pi-exemplo pi-exemplo-guiado ${item.concurso ? "pi-exemplo-concurso" : ""}`}>
      <span className="pi-exemplo-nivel">{item.concurso ? "Nível de prova" : "Exemplo simples"}</span>
      <p className="pi-exemplo-frase">
        <Rico texto={item.frase} termos={false} />
      </p>
      {ver ? (
        <p className="pi-exemplo-analise">
          <Rico texto={item.analise} />
        </p>
      ) : (
        <div className="pi-pense">
          <p>
            {item.frase.includes("**")
              ? "Pense antes de ver: o que o trecho destacado mostra?"
              : "Pense antes de ver: o que esta frase mostra?"}
          </p>
          <button type="button" className="botao botao-ouro" onClick={() => setVer(true)}>
            Ver a explicação
          </button>
        </div>
      )}
    </div>
  );
}

interface EstudoGuiadoProps {
  titulo: string;
  voltarRotulo: string;
  onVoltar: () => void;
  secoes: SecaoGuiada[];
  /** O começo da primeira tela: o resumo da lição ou o gancho do modelo. */
  abertura: ReactNode;
  /** A última tela: fixação, marcar como estudado, próxima página. */
  fim: ReactNode;
  passoInicial?: number;
  onPasso: (tela: number) => void;
  /** Troca para a página inteira, aberta na seção da tela atual (sem âncora, no topo). */
  onPaginaInteira: (ancora?: string) => void;
}

/** A lição ou o modelo em telas curtas: abertura, um pedaço por vez e o fim, com o progresso à vista. */
export default function EstudoGuiado({
  titulo,
  voltarRotulo,
  onVoltar,
  secoes,
  abertura,
  fim,
  passoInicial,
  onPasso,
  onPaginaInteira,
}: EstudoGuiadoProps) {
  const passos = useMemo(() => montarPassos(secoes), [secoes]);
  const ultima = passos.length + 1;
  // Retoma na tela salva (a do fim também: quem volta da fixação cai nela).
  const [tela, setTela] = useState(() =>
    passoInicial !== undefined && Number.isInteger(passoInicial) && passoInicial > 0 && passoInicial <= ultima
      ? passoInicial
      : 0,
  );
  const ir = (n: number) => setTela(Math.max(0, Math.min(ultima, n)));

  useEffect(() => {
    onPasso(tela);
    window.scrollTo({ top: 0 });
  }, [tela]);

  useEffect(() => {
    const tecla = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.target instanceof Element && e.target.closest("input, textarea, select, [contenteditable]")) return;
      if (document.querySelector(".pi-termo-painel")) return;
      if (e.key === "ArrowRight") setTela((t) => Math.min(ultima, t + 1));
      else if (e.key === "ArrowLeft") setTela((t) => Math.max(0, t - 1));
    };
    document.addEventListener("keydown", tecla);
    return () => document.removeEventListener("keydown", tecla);
  }, [ultima]);

  const passo = tela >= 1 && tela < ultima ? passos[tela - 1] : null;
  const secao = passo ? secoes[passo.secao] : null;
  const onde = tela === 0 ? "Início" : tela === ultima ? "Fim" : `Passo ${tela} de ${passos.length}`;
  // Primeira tela de cada seção, para os atalhos da abertura.
  const inicios = secoes
    .map((s, i) => ({ s, tela: passos.findIndex((p) => p.secao === i) + 1 }))
    .filter((x) => x.tela > 0 && x.s.titulo);

  return (
    <article className="pi-licao pi-guiado">
      <button className="botao" onClick={onVoltar}>
        {voltarRotulo}
      </button>
      <h2 className="secao-titulo">{titulo}</h2>
      <div className="pi-guiado-cabeca">
        <span className="pi-guiado-onde">{onde}</span>
        <button type="button" className="pi-link pi-guiado-tudo" onClick={() => onPaginaInteira(secao?.ancora)}>
          Ver a página inteira
        </button>
      </div>
      <div
        className="progresso-barra pi-guiado-progresso"
        role="progressbar"
        aria-label="Andamento"
        aria-valuemin={0}
        aria-valuemax={ultima}
        aria-valuenow={tela}
      >
        <div className="progresso-fill" style={{ width: `${(tela / ultima) * 100}%` }} />
      </div>

      <TelaComTermos key={tela} className="conteudo-card pi-guiado-card">
        {tela === 0 && (
          <>
            {abertura}
            <p className="pi-guiado-conta">
              {passos.length} passos curtos, um de cada vez. O app guarda onde você parou.
            </p>
            {inicios.length > 1 && (
              <>
                <h4 className="pi-mini-titulo">O que vem pela frente</h4>
                <ol className="pi-guiado-mapa">
                  {inicios.map((x) => (
                    <li key={x.tela}>
                      <button type="button" className="pi-link" onClick={() => ir(x.tela)}>
                        {x.s.titulo}
                      </button>
                    </li>
                  ))}
                </ol>
              </>
            )}
            <ul className="pi-guiado-dicas">
              <li>Avance pelos botões embaixo da tela (no computador, também pelas setas ← → do teclado).</li>
              <li>Palavras com sublinhado pontilhado abrem uma explicação simples: é só tocar.</li>
            </ul>
          </>
        )}

        {passo && (secao?.titulo || passo.tipo === "exemplo") && (
          <div className="pi-guiado-letra">
            {secao?.titulo}
            {passo.tipo === "exemplo" && (
              <span>
                {secao?.titulo ? " · " : ""}Exemplo {passo.n} de {passo.de}
              </span>
            )}
          </div>
        )}
        {passo?.tipo === "blocos" && <Blocos blocos={passo.blocos} />}
        {passo?.tipo === "frase" && <FraseInterativa palavras={passo.bloco.palavras} comentario={passo.bloco.comentario} />}
        {passo?.tipo === "exemplo" && <ExemploGuiado item={passo.item} />}

        {tela === ultima && (
          <>
            {fim}
            <div className="pi-acoes pi-guiado-rever">
              <button type="button" className="botao" onClick={() => ir(0)}>
                Rever do início
              </button>
            </div>
          </>
        )}
      </TelaComTermos>

      {createPortal(
        <nav className="pi-guiado-barra" aria-label="Passo a passo">
          <div className="pi-guiado-barra-interno">
            <button type="button" className="botao" onClick={() => ir(tela - 1)} disabled={tela === 0}>
              ← Voltar
            </button>
            <span className="pi-guiado-contador">{tela === 0 ? "Início" : tela === ultima ? "Fim" : `${tela}/${passos.length}`}</span>
            {tela < ultima && (
              <button type="button" className="botao botao-ouro" onClick={() => ir(tela + 1)}>
                {tela === 0 ? "Começar →" : "Próximo →"}
              </button>
            )}
          </div>
        </nav>,
        document.body,
      )}
    </article>
  );
}
