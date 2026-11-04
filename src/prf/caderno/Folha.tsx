import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ClipboardEvent,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { corDoGrupo, iconeGrupo } from "../aulas/rotulos";
import { apagarFolha, gravarFolha, limparHtml, type FolhaCaderno } from "./dados";

/** Canetas e marca-textos escolhidos para ler bem no papel creme. */
const CANETAS = [
  { nome: "preta", cor: "#1f2430" },
  { nome: "azul", cor: "#1d5fbf" },
  { nome: "vermelha", cor: "#c62828" },
  { nome: "verde", cor: "#2e7d32" },
  { nome: "roxa", cor: "#6a1b9a" },
  { nome: "laranja", cor: "#b34700" },
];

const MARCA_TEXTOS = [
  { nome: "amarelo", cor: "#fff176" },
  { nome: "verde", cor: "#c5e1a5" },
  { nome: "rosa", cor: "#f8bbd0" },
  { nome: "azul", cor: "#b3e5fc" },
];

/** Valor do comando fontSize: 3 é o tamanho normal do papel. */
const TAMANHOS = [
  { nome: "Pequena", valor: "2", classe: "prf-cad-tam-p" },
  { nome: "Normal", valor: "3", classe: "" },
  { nome: "Grande", valor: "5", classe: "prf-cad-tam-g" },
  { nome: "Enorme", valor: "6", classe: "prf-cad-tam-e" },
];

const CABECALHOS = [
  { nome: "Título grande", tag: "h2", classe: "prf-cad-cab-h2" },
  { nome: "Subtítulo", tag: "h3", classe: "prf-cad-cab-h3" },
  { nome: "Texto normal", tag: "p", classe: "" },
];

/** Botões que ficam marcados quando o cursor está num trecho com aquela formatação. */
const LIGAVEIS = [
  "bold",
  "italic",
  "underline",
  "justifyLeft",
  "justifyCenter",
  "justifyRight",
  "insertUnorderedList",
  "insertOrderedList",
];

type Menu = "cabecalho" | "cor" | "tamanho";
type Situacao = "nova" | "salvando" | "salvo" | "erro";

const SITUACAO: Record<Situacao, string> = {
  nova: "Folha nova",
  salvando: "Salvando…",
  salvo: "✓ Salvo",
  erro: "⚠ Não salvou",
};

function Icone({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

interface FolhaProps {
  folha: FolhaCaderno;
  /** Rascunho: a folha só entra no caderno quando receber texto. */
  nova: boolean;
  nomeGrupo: string;
  onVoltar: () => void;
}

/** Uma folha do caderno: o papel, o cabeçalho e a barra de formatação. Grava sozinha enquanto se escreve. */
export default function Folha({ folha, nova, nomeGrupo, onVoltar }: FolhaProps) {
  const base = useRef(folha).current;
  const editor = useRef<HTMLDivElement | null>(null);
  const faixa = useRef<Range | null>(null);
  const titulo = useRef(base.titulo);
  const existe = useRef(!nova);
  const sujo = useRef(false);
  const timer = useRef<number | undefined>(undefined);
  const [tituloVisto, setTituloVisto] = useState(base.titulo);
  const [situacao, setSituacao] = useState<Situacao>(nova ? "nova" : "salvo");
  const [menu, setMenu] = useState<Menu | null>(null);
  const [ativos, setAtivos] = useState("");
  const [confirmando, setConfirmando] = useState(false);

  // Sem soltar o elemento ao desmontar: a última gravação ainda lê o texto dele.
  const ligaEditor = useCallback((el: HTMLDivElement | null) => {
    if (el) editor.current = el;
  }, []);

  const ligado = (token: string) => ativos.split(" ").includes(token);

  function gravar() {
    window.clearTimeout(timer.current);
    timer.current = undefined;
    const el = editor.current;
    if (!sujo.current || !el) return;
    sujo.current = false;
    const nome = titulo.current.trim();
    const temTexto = (el.textContent ?? "").trim() !== "";
    // Rascunho que continua em branco não vira folha.
    if (!existe.current && !temTexto && !nome) {
      setSituacao("nova");
      return;
    }
    const ok = gravarFolha({ ...base, titulo: nome, html: temTexto ? el.innerHTML : "" });
    if (ok) existe.current = true;
    setSituacao(ok ? "salvo" : "erro");
  }

  function agendar() {
    sujo.current = true;
    setSituacao("salvando");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(gravar, 600);
  }

  function marcarVazio() {
    const el = editor.current;
    if (!el) return;
    const vazio = el.textContent === "" && el.childElementCount < 2 && !el.querySelector("li, h2, h3");
    el.toggleAttribute("data-vazio", vazio);
  }

  function lerAtivos() {
    const ligados = LIGAVEIS.filter((c) => document.queryCommandState(c));
    ligados.push(document.queryCommandValue("formatBlock").toLowerCase());
    setAtivos(ligados.join(" "));
  }

  /** Volta o foco ao texto onde a seleção estava, ou no fim dele. */
  function voltarAoTexto(el: HTMLDivElement) {
    if (document.activeElement === el) return;
    el.focus({ preventScroll: true });
    const selecao = window.getSelection();
    if (!selecao) return;
    let r = faixa.current;
    if (!r) {
      r = document.createRange();
      r.selectNodeContents(el);
      r.collapse(false);
    }
    selecao.removeAllRanges();
    selecao.addRange(r);
  }

  /** `comCss`: cor, tamanho e alinhamento saem como estilo; negrito e afins, como tag. */
  function comando(nome: string, valor?: string, comCss = false) {
    const el = editor.current;
    if (!el) return;
    voltarAoTexto(el);
    document.execCommand("styleWithCSS", false, String(comCss));
    document.execCommand(nome, false, valor);
    document.execCommand("styleWithCSS", false, "false");
    setMenu(null);
    marcarVazio();
    agendar();
    lerAtivos();
  }

  useLayoutEffect(() => {
    const el = editor.current;
    if (el) {
      el.innerHTML = limparHtml(base.html);
      marcarVazio();
      // Com o mouse a folha já abre pronta para escrever; no celular, esperar o toque não sobe o teclado à toa.
      if (window.matchMedia("(pointer: fine)").matches) {
        voltarAoTexto(el);
        el.lastElementChild?.scrollIntoView({ block: "nearest" });
      }
    }
    document.execCommand("defaultParagraphSeparator", false, "p");
    const aoEsconder = () => {
      if (document.visibilityState === "hidden") gravar();
    };
    document.addEventListener("visibilitychange", aoEsconder);
    window.addEventListener("pagehide", gravar);
    return () => {
      document.removeEventListener("visibilitychange", aoEsconder);
      window.removeEventListener("pagehide", gravar);
      gravar();
    };
    // Tudo o que estas funções leem está em refs: as da primeira renderização servem até o fim.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Guarda a seleção (um toque na barra não pode perdê-la) e acende os botões do trecho onde o cursor está.
  useEffect(() => {
    const aoSelecionar = () => {
      const el = editor.current;
      const selecao = window.getSelection();
      if (!el || !selecao || selecao.rangeCount === 0) return;
      const r = selecao.getRangeAt(0);
      if (!el.contains(r.commonAncestorContainer)) return;
      faixa.current = r.cloneRange();
      lerAtivos();
    };
    document.addEventListener("selectionchange", aoSelecionar);
    return () => document.removeEventListener("selectionchange", aoSelecionar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function aoTeclar(e: KeyboardEvent<HTMLDivElement>) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
      e.preventDefault();
      gravar();
    } else if (e.key === "Escape") {
      setMenu(null);
      setConfirmando(false);
    }
  }

  // Colar entra como texto puro: nada de fora traz formatação nem imagem.
  function aoColar(e: ClipboardEvent<HTMLDivElement>) {
    e.preventDefault();
    const texto = e.clipboardData.getData("text/plain");
    if (texto) document.execCommand("insertText", false, texto);
  }

  function apagar() {
    window.clearTimeout(timer.current);
    sujo.current = false;
    apagarFolha(base.id);
    onVoltar();
  }

  const botao = (nome: string, rotulo: string, conteudo: ReactNode, comCss = false) => (
    <button
      type="button"
      className="prf-cad-botao"
      aria-label={rotulo}
      title={rotulo}
      aria-pressed={ligado(nome)}
      onClick={() => comando(nome, undefined, comCss)}
    >
      {conteudo}
    </button>
  );

  const botaoMenu = (qual: Menu, rotulo: string, conteudo: ReactNode, marcado = false) => (
    <button
      type="button"
      className={`prf-cad-botao${marcado ? " prf-cad-botao-marcado" : ""}`}
      title={rotulo}
      aria-haspopup="true"
      aria-expanded={menu === qual}
      onClick={() => setMenu(menu === qual ? null : qual)}
    >
      {conteudo}
      <span className="prf-cad-seta" aria-hidden="true">
        ▾
      </span>
    </button>
  );

  const data = new Date(base.criadaEm).toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="prf-cad-folha"
      style={{ "--cor-materia": corDoGrupo(base.grupo) } as CSSProperties}
      onKeyDown={aoTeclar}
    >
      <div className="prf-cad-folha-topo">
        <button type="button" className="prf-voltar" onClick={onVoltar}>
          ← {nomeGrupo}
        </button>
        <span className={`prf-cad-situacao prf-cad-situacao-${situacao}`}>{SITUACAO[situacao]}</span>
        {situacao !== "nova" && (
          <button
            type="button"
            className="prf-cad-botao"
            aria-label="Apagar esta folha"
            title="Apagar esta folha"
            aria-expanded={confirmando}
            onClick={() => setConfirmando(!confirmando)}
          >
            🗑
          </button>
        )}
      </div>

      {confirmando && (
        <div className="prf-cad-confirma">
          <span>Apagar esta folha? Não dá para desfazer.</span>
          <button type="button" className="botao botao-perigo" onClick={apagar}>
            Apagar
          </button>
          <button type="button" className="botao" onClick={() => setConfirmando(false)}>
            Cancelar
          </button>
        </div>
      )}

      {situacao === "erro" && (
        <p className="prf-cad-erro" role="alert">
          A memória do navegador encheu e esta folha não ficou gravada. Volte às matérias e baixe uma cópia de segurança
          antes de fechar o app.
        </p>
      )}

      {/* Apertar o mouse aqui não tira o foco do texto: a seleção continua lá para receber a formatação. */}
      <div
        className="prf-cad-barra"
        role="toolbar"
        aria-label="Formatação do texto"
        onMouseDown={(e) => e.preventDefault()}
      >
        {botaoMenu("cabecalho", "Cabeçalho", "Cabeçalho", ligado("h2") || ligado("h3"))}
        {botao("bold", "Negrito (Ctrl+B)", <b>B</b>)}
        {botao("italic", "Itálico (Ctrl+I)", <i>I</i>)}
        {botao("underline", "Sublinhado (Ctrl+U)", <u>U</u>)}
        {botaoMenu("cor", "Cor da letra e marca-texto", "Cor")}
        {botaoMenu("tamanho", "Tamanho da letra", "Tamanho")}
        <span className="prf-cad-sep" aria-hidden="true" />
        {botao("justifyLeft", "Alinhar à esquerda", <Icone d="M3 6h18M3 11h12M3 16h18M3 21h12" />, true)}
        {botao("justifyCenter", "Centralizar", <Icone d="M3 6h18M6 11h12M3 16h18M6 21h12" />, true)}
        {botao("justifyRight", "Alinhar à direita", <Icone d="M3 6h18M9 11h12M3 16h18M9 21h12" />, true)}
        <span className="prf-cad-sep" aria-hidden="true" />
        {botao("insertUnorderedList", "Lista com marcadores", <Icone d="M9 6h12M9 12h12M9 18h12M4 6h.01M4 12h.01M4 18h.01" />)}
        {botao("insertOrderedList", "Lista numerada", <Icone d="M10 6h11M10 12h11M10 18h11M4 4v5M3 15.5h3l-3 4.5h3" />)}
        <span className="prf-cad-sep" aria-hidden="true" />
        <button
          type="button"
          className="prf-cad-botao"
          aria-label="Desfazer (Ctrl+Z)"
          title="Desfazer (Ctrl+Z)"
          onClick={() => comando("undo")}
        >
          ↶
        </button>
        <button
          type="button"
          className="prf-cad-botao"
          aria-label="Refazer (Ctrl+Y)"
          title="Refazer (Ctrl+Y)"
          onClick={() => comando("redo")}
        >
          ↷
        </button>

        {menu === "cabecalho" && (
          <div className="prf-cad-menu">
            {CABECALHOS.map((c) => (
              <button
                key={c.tag}
                type="button"
                className={`prf-cad-opcao ${c.classe}`}
                onClick={() => comando("formatBlock", c.tag)}
              >
                {c.nome}
              </button>
            ))}
          </div>
        )}

        {menu === "tamanho" && (
          <div className="prf-cad-menu">
            {TAMANHOS.map((t) => (
              <button
                key={t.valor}
                type="button"
                className={`prf-cad-opcao ${t.classe}`}
                onClick={() => comando("fontSize", t.valor, true)}
              >
                {t.nome}
              </button>
            ))}
          </div>
        )}

        {menu === "cor" && (
          <div className="prf-cad-menu">
            <span className="prf-cad-menu-titulo">Caneta</span>
            <div className="prf-cad-cores">
              {CANETAS.map((c) => (
                <button
                  key={c.cor}
                  type="button"
                  className="prf-cad-cor"
                  style={{ background: c.cor }}
                  aria-label={`Caneta ${c.nome}`}
                  title={`Caneta ${c.nome}`}
                  onClick={() => comando("foreColor", c.cor, true)}
                />
              ))}
            </div>
            <span className="prf-cad-menu-titulo">Marca-texto</span>
            <div className="prf-cad-cores">
              {MARCA_TEXTOS.map((c) => (
                <button
                  key={c.cor}
                  type="button"
                  className="prf-cad-cor"
                  style={{ background: c.cor }}
                  aria-label={`Marca-texto ${c.nome}`}
                  title={`Marca-texto ${c.nome}`}
                  onClick={() => comando("hiliteColor", c.cor, true)}
                />
              ))}
              <button
                type="button"
                className="prf-cad-cor prf-cad-cor-sem"
                aria-label="Tirar o marca-texto"
                title="Tirar o marca-texto"
                onClick={() => comando("hiliteColor", "transparent", true)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="prf-cad-papel" onPointerDown={() => setMenu(null)}>
        <header className="prf-cad-cabecalho">
          <p className="prf-cad-cabecalho-materia">
            <span className="prf-cad-ponto" aria-hidden="true" />
            <span aria-hidden="true">{iconeGrupo(base.grupo)}</span> {nomeGrupo}
          </p>
          <p className="prf-cad-cabecalho-aula">{base.nomeAula ?? "Anotação livre"}</p>
          <p className="prf-cad-cabecalho-data">{data}</p>
        </header>
        <input
          className="prf-cad-titulo"
          value={tituloVisto}
          maxLength={200}
          placeholder="Título (opcional)"
          aria-label="Título da folha"
          onChange={(e) => {
            titulo.current = e.target.value;
            setTituloVisto(e.target.value);
            agendar();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && editor.current) {
              e.preventDefault();
              voltarAoTexto(editor.current);
            }
          }}
        />
        <div
          className="prf-cad-editor"
          ref={ligaEditor}
          contentEditable
          role="textbox"
          aria-multiline="true"
          aria-label="Texto da folha"
          lang="pt-BR"
          spellCheck
          onInput={() => {
            marcarVazio();
            agendar();
          }}
          onPaste={aoColar}
          onDrop={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}
