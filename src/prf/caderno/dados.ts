import { useSyncExternalStore } from "react";

/**
 * Caderno de anotações da PRF: folhas por matéria, cada uma de uma aula ou livre. O texto formatado fica em HTML,
 * sempre passado pelo filtro abaixo. Tudo fica só neste aparelho, numa chave própria; a cópia de segurança vai e
 * volta por um arquivo.
 */
const CHAVE_PRF = "prf:caderno:v1";

/** Como a cópia de segurança se identifica: cada curso tem o próprio caderno. */
export interface RotuloCaderno {
  /** Marca do arquivo: a cópia de um curso não entra no caderno de outro. */
  tag: string;
  titulo: string;
  cabecalho: string;
  /** Começo do nome do arquivo baixado. */
  arquivo: string;
}

export const ROTULO_CADERNO_PRF: RotuloCaderno = {
  tag: "caderno-prf",
  titulo: "Caderno PRF",
  cabecalho: "Caderno · PRF Agente Administrativo",
  arquivo: "caderno-prf",
};

/** Curso aberto. */
let chave = CHAVE_PRF;
let rotulo = ROTULO_CADERNO_PRF;

export interface FolhaCaderno {
  id: string;
  /** Grupo das aulas: uma matéria ou o Nivelamento. */
  grupo: string;
  /** Aula da folha; sem aula, é uma anotação livre da matéria. */
  aula?: string;
  /** Nome da aula quando a folha começou. */
  nomeAula?: string;
  titulo: string;
  html: string;
  criadaEm: number;
  atualizadaEm: number;
}

interface EstadoCaderno {
  folhas: FolhaCaderno[];
}

/* ---------- Filtro do HTML: só a formatação que o caderno usa ---------- */

/** Tags que o editor produz. Uma tag fora da lista sai, mas o texto dela fica. */
const TAGS = new Set(["P", "DIV", "BR", "H2", "H3", "B", "STRONG", "I", "EM", "U", "SPAN", "FONT", "UL", "OL", "LI"]);

/** Saem com tudo o que têm dentro. */
const FORA = new Set([
  "SCRIPT", "STYLE", "IFRAME", "FRAME", "FRAMESET", "OBJECT", "EMBED", "APPLET", "IMG", "PICTURE", "SOURCE", "VIDEO",
  "AUDIO", "TRACK", "CANVAS", "SVG", "MATH", "TEMPLATE", "LINK", "META", "BASE", "TITLE", "HEAD", "NOSCRIPT",
  "FORM", "INPUT", "BUTTON", "TEXTAREA", "SELECT", "DIALOG",
]);

/** Blocos de fora da lista viram DIV, para as linhas não se juntarem. */
const BLOCOS = new Set([
  "H1", "H4", "H5", "H6", "BLOCKQUOTE", "PRE", "SECTION", "ARTICLE", "HEADER", "FOOTER", "ASIDE", "NAV", "MAIN",
  "ADDRESS", "FIGURE", "FIGCAPTION", "TABLE", "THEAD", "TBODY", "TFOOT", "TR", "TD", "TH", "DL", "DT", "DD", "CENTER",
]);

const ESTILOS = new Set([
  "color", "background-color", "font-size", "font-weight", "font-style", "text-decoration", "text-decoration-line",
  "text-align",
]);

function estiloLimpo(estilo: string): string {
  const fica: string[] = [];
  for (const declaracao of estilo.split(";")) {
    const i = declaracao.indexOf(":");
    if (i < 0) continue;
    const prop = declaracao.slice(0, i).trim().toLowerCase();
    const valor = declaracao.slice(i + 1).trim();
    if (!ESTILOS.has(prop) || !/^[\w\s#%(),.-]+$/.test(valor)) continue;
    // Só cores em rgb()/hsl(): nada de url() nem outra função que busque coisa de fora.
    const funcoes = valor.match(/[a-z-]+(?=\()/gi) ?? [];
    if (funcoes.every((f) => /^(rgba?|hsla?)$/i.test(f))) fica.push(`${prop}: ${valor}`);
  }
  return fica.join("; ");
}

function limparNo(pai: Node) {
  for (const no of Array.from(pai.childNodes)) {
    if (no.nodeType === Node.TEXT_NODE) continue;
    if (no.nodeType !== Node.ELEMENT_NODE) {
      pai.removeChild(no);
      continue;
    }
    const el = no as Element;
    const tag = el.tagName.toUpperCase();
    if (FORA.has(tag)) {
      el.remove();
      continue;
    }
    limparNo(el);
    if (!TAGS.has(tag)) {
      if (BLOCOS.has(tag)) {
        const div = el.ownerDocument.createElement("div");
        div.append(...Array.from(el.childNodes));
        el.replaceWith(div);
      } else {
        el.replaceWith(...Array.from(el.childNodes));
      }
      continue;
    }
    for (const at of Array.from(el.attributes)) {
      const nome = at.name.toLowerCase();
      const v = at.value.trim();
      const fica =
        nome === "style" ||
        (nome === "align" && /^(left|center|right|justify)$/i.test(v)) ||
        (tag === "FONT" && nome === "color" && /^(#[0-9a-f]{3,8}|[a-z]{3,20})$/i.test(v)) ||
        (tag === "FONT" && nome === "size" && /^[1-7]$/.test(v));
      if (!fica) el.removeAttribute(at.name);
    }
    const estilo = el.getAttribute("style");
    if (estilo !== null) {
      const limpo = estiloLimpo(estilo);
      if (limpo) el.setAttribute("style", limpo);
      else el.removeAttribute("style");
    }
  }
}

/** Deixa no HTML só texto e a formatação do caderno (negrito, cor, tamanho, alinhamento, títulos, listas). */
export function limparHtml(html: string): string {
  if (!html) return "";
  const modelo = document.createElement("template");
  modelo.innerHTML = html;
  limparNo(modelo.content);
  return modelo.innerHTML;
}

/** Começo do texto da folha, para a lista. */
export function resumoTexto(html: string, max = 90): string {
  const modelo = document.createElement("template");
  modelo.innerHTML = html.replace(/<(br|\/p|\/div|\/li|\/h[23])\b[^>]*>/gi, " ");
  const texto = (modelo.content.textContent ?? "").replace(/\s+/g, " ").trim();
  return texto.length > max ? `${texto.slice(0, max - 1).trimEnd()}…` : texto;
}

/* ---------- Guardar no aparelho ---------- */

const texto = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max) : "");
const numero = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : 0);

/** Confere uma folha vinda do aparelho ou de um arquivo; o que não tem forma de folha fica de fora. */
function folhaValida(v: unknown): FolhaCaderno | null {
  if (!v || typeof v !== "object") return null;
  const f = v as Record<string, unknown>;
  const id = texto(f.id, 64);
  const grupo = texto(f.grupo, 40);
  if (!id || !grupo) return null;
  const aula = texto(f.aula, 40);
  const nomeAula = texto(f.nomeAula, 200);
  const criadaEm = numero(f.criadaEm);
  return {
    id,
    grupo,
    ...(aula ? { aula } : {}),
    ...(nomeAula ? { nomeAula } : {}),
    titulo: texto(f.titulo, 200),
    html: limparHtml(texto(f.html, 2_000_000)),
    criadaEm,
    atualizadaEm: numero(f.atualizadaEm) || criadaEm,
  };
}

function folhasValidas(lista: unknown): FolhaCaderno[] {
  if (!Array.isArray(lista)) return [];
  return lista.map(folhaValida).filter((f): f is FolhaCaderno => f !== null);
}

function ler(): EstadoCaderno {
  try {
    const raw = localStorage.getItem(chave);
    if (!raw) return { folhas: [] };
    return { folhas: folhasValidas((JSON.parse(raw) as { folhas?: unknown }).folhas) };
  } catch {
    return { folhas: [] };
  }
}

let estado = ler();
const ouvintes = new Set<() => void>();

function avisar() {
  ouvintes.forEach((f) => f());
}

/** Grava no aparelho; devolve false se não deu (memória do navegador cheia ou bloqueada). */
function salvar(novo: EstadoCaderno): boolean {
  estado = novo;
  let ok = true;
  try {
    localStorage.setItem(chave, JSON.stringify(novo));
  } catch {
    ok = false;
  }
  avisar();
  return ok;
}

// Outra aba do navegador mexeu no caderno: esta acompanha.
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key !== chave) return;
    estado = ler();
    avisar();
  });
}

function assinar(f: () => void) {
  ouvintes.add(f);
  return () => {
    ouvintes.delete(f);
  };
}

/** Passa a mostrar o caderno de outro curso. */
export function trocarCaderno(novaChave: string, novoRotulo: RotuloCaderno) {
  rotulo = novoRotulo;
  if (novaChave === chave) return;
  chave = novaChave;
  estado = ler();
  avisar();
}

/** Começo do nome do arquivo da cópia. */
export const nomeArquivoCaderno = () => rotulo.arquivo;

export function useFolhas(): FolhaCaderno[] {
  return useSyncExternalStore(assinar, () => estado).folhas;
}

/** As folhas como estão agora (fora da renderização). */
export function folhasAgora(): FolhaCaderno[] {
  return estado.folhas;
}

/** Grava a folha (e a cria, se ainda for rascunho). */
export function gravarFolha(folha: FolhaCaderno): boolean {
  const nova: FolhaCaderno = { ...folha, html: limparHtml(folha.html), atualizadaEm: Date.now() };
  return salvar({ folhas: [...estado.folhas.filter((f) => f.id !== folha.id), nova] });
}

export function apagarFolha(id: string) {
  salvar({ folhas: estado.folhas.filter((f) => f.id !== id) });
}

/** Folha nova, ainda fora do caderno. */
export function rascunhoFolha(grupo: string, aula?: { id: string; nome: string }): FolhaCaderno {
  const agora = Date.now();
  return {
    id: `f${agora.toString(36)}${Math.random().toString(36).slice(2, 8)}`,
    grupo,
    ...(aula ? { aula: aula.id, nomeAula: aula.nome } : {}),
    titulo: "",
    html: "",
    criadaEm: agora,
    atualizadaEm: agora,
  };
}

/** Folha já começada da aula (a mais recente, se houver mais de uma). */
export function folhaDaAula(folhas: FolhaCaderno[], aula: string): FolhaCaderno | undefined {
  let achada: FolhaCaderno | undefined;
  for (const f of folhas) if (f.aula === aula && (!achada || f.atualizadaEm > achada.atualizadaEm)) achada = f;
  return achada;
}

/* ---------- Cópia de segurança num arquivo ---------- */

const ID_DADOS = "caderno-prf-dados";

const escapar = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const dataHora = (ms: number) =>
  new Date(ms).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });

/**
 * Arquivo da cópia: abre no navegador como um caderno para ler ou imprimir e leva os dados para restaurar.
 * `ordem` diz a ordem das matérias; `nomeGrupo` dá o nome de cada uma.
 */
export function arquivoDoCaderno(folhas: FolhaCaderno[], ordem: string[], nomeGrupo: (grupo: string) => string): string {
  const posicao = (g: string) => (ordem.indexOf(g) + 1 || ordem.length + 1);
  const lista = [...folhas].sort(
    (a, b) => posicao(a.grupo) - posicao(b.grupo) || (a.aula ?? "~").localeCompare(b.aula ?? "~") || a.criadaEm - b.criadaEm,
  );
  const agora = Date.now();
  const secoes = lista
    .map((f) => {
      const cab = [nomeGrupo(f.grupo), f.nomeAula ?? "Anotação livre", dataHora(f.criadaEm)].map(escapar).join(" · ");
      const titulo = f.titulo ? `<h2 class="titulo">${escapar(f.titulo)}</h2>` : "";
      return `<section class="folha"><div class="cab">${cab}</div>${titulo}<div class="texto">${limparHtml(f.html)}</div></section>`;
    })
    .join("\n");
  // Sem `<` cru no JSON: o texto das folhas nunca fecha a tag dos dados.
  const dados = JSON.stringify({ app: rotulo.tag, versao: 1, feitaEm: agora, folhas }).replace(/</g, "\\u003c");
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapar(rotulo.titulo)} · cópia de ${escapar(dataHora(agora))}</title>
<style>
body { max-width: 760px; margin: 24px auto; padding: 0 16px 40px; background: #fbf7ec; color: #1f2430; font: 16px/1.7 Georgia, "Times New Roman", serif; }
h1 { margin: 0 0 4px; font: 700 1.5rem system-ui, sans-serif; }
.nota { margin: 0 0 24px; color: #5b6170; font: 0.9rem/1.5 system-ui, sans-serif; }
.folha { margin-top: 28px; padding-top: 14px; border-top: 2px solid #d9cba5; break-inside: avoid-page; }
.cab { color: #5b6170; font: 600 0.8rem system-ui, sans-serif; letter-spacing: 0.04em; text-transform: uppercase; }
.titulo { margin: 6px 0 4px; font-size: 1.3rem; }
.texto h2 { font-size: 1.4rem; margin: 0.4em 0 0.2em; }
.texto h3 { font-size: 1.15rem; margin: 0.4em 0 0.2em; }
.texto p { margin: 0; }
</style>
</head>
<body>
<h1>${escapar(rotulo.cabecalho)}</h1>
<p class="nota">Cópia feita em ${escapar(dataHora(agora))} · ${lista.length} ${lista.length === 1 ? "folha" : "folhas"}.
Para restaurar: no app, abra o Caderno, toque em "Cópia de segurança" e depois em "Restaurar de um arquivo".</p>
${secoes}
<script type="application/json" id="${ID_DADOS}">${dados}</script>
</body>
</html>
`;
}

export interface Restauracao {
  novas: number;
  atualizadas: number;
}

/**
 * Lê um arquivo de cópia (o .html baixado aqui ou um .json) e junta com o caderno. Na mesma folha, fica a versão
 * mais nova. Devolve null se o arquivo não é uma cópia do caderno deste curso.
 */
export function restaurarCaderno(conteudo: string): Restauracao | null {
  let json = conteudo.trim();
  if (!json.startsWith("{")) {
    const doc = new DOMParser().parseFromString(conteudo, "text/html");
    json = doc.getElementById(ID_DADOS)?.textContent ?? "";
  }
  let dados: unknown;
  try {
    dados = JSON.parse(json);
  } catch {
    return null;
  }
  if (!dados || typeof dados !== "object" || !Array.isArray((dados as { folhas?: unknown }).folhas)) return null;
  // Cópia de outro curso: as matérias e as aulas não são as mesmas.
  const app = (dados as { app?: unknown }).app;
  if (typeof app === "string" && app !== rotulo.tag) return null;
  const porId = new Map(estado.folhas.map((f) => [f.id, f]));
  let novas = 0;
  let atualizadas = 0;
  for (const f of folhasValidas((dados as { folhas: unknown[] }).folhas)) {
    const atual = porId.get(f.id);
    if (!atual) novas++;
    else if (f.atualizadaEm > atual.atualizadaEm) atualizadas++;
    else continue;
    porId.set(f.id, f);
  }
  if (novas + atualizadas > 0) salvar({ folhas: [...porId.values()] });
  return { novas, atualizadas };
}
