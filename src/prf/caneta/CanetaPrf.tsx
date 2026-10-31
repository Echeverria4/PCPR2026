import { useEffect, useMemo, useRef, useState, type PointerEvent as EventoPonteiro, type ReactNode } from "react";
import { createPortal } from "react-dom";

/**
 * Caneta das questões da PRF, no estilo do quadro digital do professor: lápis, caneta, giz, marca-texto e caneta
 * mágica (o traço some sozinho), com espessura e cores. Os traços ficam presos ao texto (sobem e descem com a página)
 * e valem só para a questão da tela: a próxima começa limpa. Na seta (Responder), a tela responde ao toque como sempre.
 */

type Modo = "responder" | "caneta" | "borracha";
type Tipo = "lapis" | "caneta" | "giz" | "marca" | "magica";
type Espessuras = Record<Tipo, number>;

interface Traco {
  /** Tipo de caneta. */
  k: Tipo;
  /** Cor. */
  c: string;
  /** Espessura, em px. */
  e: number;
  /** Pontos x, y, x, y… em px, a partir do canto do quadro. */
  p: number[];
}

interface TracoMagico {
  id: number;
  /** Hora (Date.now) em que o traço sai da tela. */
  fim: number;
  t: Traco;
}

const TIPOS: { id: Tipo; nome: string; dica: string; min: number; max: number; padrao: number; opacidade: number }[] = [
  { id: "lapis", nome: "Lápis", dica: "Traço fino, para anotar.", min: 1, max: 6, padrao: 2, opacidade: 0.9 },
  { id: "caneta", nome: "Caneta", dica: "Traço firme, para sublinhar e circular.", min: 1, max: 10, padrao: 3, opacidade: 0.95 },
  { id: "giz", nome: "Giz", dica: "Como o giz no quadro da sala de aula.", min: 3, max: 20, padrao: 8, opacidade: 0.95 },
  { id: "marca", nome: "Marca-texto", dica: "Pinta a linha. Passe reto, que ele se ajeita.", min: 8, max: 32, padrao: 18, opacidade: 0.32 },
  { id: "magica", nome: "Mágica", dica: "Aponta e some sozinha em 3 segundos.", min: 2, max: 12, padrao: 4, opacidade: 0.95 },
];

const tipoDe = (k: Tipo) => TIPOS.find((t) => t.id === k) ?? TIPOS[1];

const CORES = [
  { nome: "Giz branco", cor: "#f4f1e8" },
  { nome: "Amarelo", cor: "#ffd43b" },
  { nome: "Laranja", cor: "#ff9a3c" },
  { nome: "Vermelho", cor: "#ff5a5f" },
  { nome: "Rosa", cor: "#ff7ab8" },
  { nome: "Lilás", cor: "#b892ff" },
  { nome: "Azul", cor: "#5fb4f0" },
  { nome: "Turquesa", cor: "#3dd6c8" },
  { nome: "Verde", cor: "#35d488" },
  { nome: "Limão", cor: "#c8f04f" },
  { nome: "Cinza", cor: "#a9b6c8" },
  { nome: "Areia", cor: "#e3bf94" },
];
const COR_PADRAO = "#ffd43b";

/** Raio da borracha, em px. */
const RAIO_BORRACHA = 14;
/** Até onde um toque pode andar e ainda contar como toque (px): vira um pingo, como o do i. */
const TOQUE = 4;
/** Quanto o traço da caneta mágica fica na tela (ms); no fim, ele some aos poucos. */
const DURACAO_MAGICA = 3000;
/** Traços da questão da tela; somem ao sair do quiz. */
const CHAVE_TRACOS = "prf:caneta:v1";
/** Última caneta e cor escolhidas, e a espessura de cada caneta. */
const CHAVE_PREFS = "prf:caneta:prefs:v1";

const arred = (n: number) => Math.round(n * 10) / 10;

function lerPrefs(): { k: Tipo; c: string; e: Espessuras } {
  const e = Object.fromEntries(TIPOS.map((t) => [t.id, t.padrao])) as Espessuras;
  try {
    const p = JSON.parse(localStorage.getItem(CHAVE_PREFS) ?? "null") as { k?: unknown; c?: unknown; e?: unknown } | null;
    const salvas = p?.e && typeof p.e === "object" ? (p.e as Record<string, unknown>) : {};
    for (const t of TIPOS) {
      const v = salvas[t.id];
      if (typeof v === "number" && v >= t.min && v <= t.max) e[t.id] = Math.round(v);
    }
    return {
      k: TIPOS.find((t) => t.id === p?.k)?.id ?? "caneta",
      c: CORES.find((x) => x.cor === p?.c)?.cor ?? COR_PADRAO,
      e,
    };
  } catch {
    return { k: "caneta", c: COR_PADRAO, e };
  }
}

function lerTracos(questaoId: string): Traco[] {
  try {
    const g = JSON.parse(sessionStorage.getItem(CHAVE_TRACOS) ?? "null") as { id?: unknown; t?: unknown } | null;
    if (!g || g.id !== questaoId || !Array.isArray(g.t)) return [];
    return (g.t as Traco[]).filter((t) => t && Array.isArray(t.p) && TIPOS.some((x) => x.id === t.k));
  } catch {
    return [];
  }
}

function gravarTracos(questaoId: string, tracos: Traco[]) {
  try {
    if (tracos.length === 0) sessionStorage.removeItem(CHAVE_TRACOS);
    else sessionStorage.setItem(CHAVE_TRACOS, JSON.stringify({ id: questaoId, t: tracos }));
  } catch {
    // sem espaço: os traços ficam só na memória
  }
}

/** Caminho suavizado: curvas pelos pontos médios, para o traço do dedo não sair serrilhado. */
function caminho(p: number[]): string {
  const n = p.length / 2;
  if (n === 0) return "";
  if (n === 1) return `M${p[0]} ${p[1]}h0.1`;
  let d = `M${p[0]} ${p[1]}`;
  for (let i = 1; i < n - 1; i++) {
    const x = p[2 * i];
    const y = p[2 * i + 1];
    d += `Q${x} ${y} ${arred((x + p[2 * i + 2]) / 2)} ${arred((y + p[2 * i + 3]) / 2)}`;
  }
  return `${d}L${p[2 * n - 2]} ${p[2 * n - 1]}`;
}

/** Marca-texto passado quase na horizontal vira uma faixa reta sobre a linha do texto. */
function endireitar(p: number[]): number[] {
  let x0 = Infinity;
  let x1 = -Infinity;
  let y0 = Infinity;
  let y1 = -Infinity;
  let soma = 0;
  for (let i = 0; i < p.length; i += 2) {
    x0 = Math.min(x0, p[i]);
    x1 = Math.max(x1, p[i]);
    y0 = Math.min(y0, p[i + 1]);
    y1 = Math.max(y1, p[i + 1]);
    soma += p[i + 1];
  }
  const largura = x1 - x0;
  const altura = y1 - y0;
  if (largura < 24 || altura > 14 || altura > largura * 0.25) return p;
  const y = arred(soma / (p.length / 2));
  return [x0, y, x1, y];
}

function distanciaAoSegmento(px: number, py: number, ax: number, ay: number, bx: number, by: number) {
  const dx = bx - ax;
  const dy = by - ay;
  const l2 = dx * dx + dy * dy;
  const t = l2 === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / l2));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

/** A borracha apaga o traço inteiro que ela encostar, como passar o apagador no giz. */
function borrachaToca(t: Traco, x: number, y: number) {
  const limite = RAIO_BORRACHA + t.e / 2;
  const p = t.p;
  if (p.length === 2) return Math.hypot(p[0] - x, p[1] - y) <= limite;
  for (let i = 0; i + 3 < p.length; i += 2) {
    if (distanciaAoSegmento(x, y, p[i], p[i + 1], p[i + 2], p[i + 3]) <= limite) return true;
  }
  return false;
}

/** O quadro fica por cima das alternativas: diz se o ponto da tela cai numa delas. */
function sobreAlternativa(x: number, y: number) {
  return document.elementsFromPoint(x, y).some((el) => el.closest(".alternativa-linha") !== null);
}

/** Pontinhos sempre iguais (sorteio com semente fixa): o grão do giz e do lápis. */
function graos(qtd: number, lado: number, rMin: number, rMax: number, semente: number) {
  let s = semente;
  const sorteio = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
  return Array.from({ length: qtd }, () => ({
    x: arred(sorteio() * lado),
    y: arred(sorteio() * lado),
    r: arred(rMin + sorteio() * (rMax - rMin)),
    o: arred(0.6 + sorteio() * 0.4),
  }));
}

/** Máscaras de grão: o giz sai falhado como no quadro; o lápis, com um granulado leve. */
const GRAOS = (
  <defs>
    <pattern id="prf-caneta-grao-giz" width="24" height="24" patternUnits="userSpaceOnUse">
      <rect width="24" height="24" fill="#fff" fillOpacity="0.25" />
      {graos(130, 24, 0.7, 2, 7).map((g, i) => (
        <circle key={i} cx={g.x} cy={g.y} r={g.r} fill="#fff" fillOpacity={g.o} />
      ))}
    </pattern>
    <pattern id="prf-caneta-grao-lapis" width="12" height="12" patternUnits="userSpaceOnUse">
      <rect width="12" height="12" fill="#fff" fillOpacity="0.55" />
      {graos(50, 12, 0.3, 0.8, 11).map((g, i) => (
        <circle key={i} cx={g.x} cy={g.y} r={g.r} fill="#fff" fillOpacity={g.o} />
      ))}
    </pattern>
    {(["giz", "lapis"] as const).map((k) => (
      <mask key={k} id={`prf-caneta-${k}`} maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
        <rect x="-50%" y="-50%" width="200%" height="200%" fill={`url(#prf-caneta-grao-${k})`} />
      </mask>
    ))}
  </defs>
);

const mascara = (k: Tipo) => (k === "giz" || k === "lapis" ? `url(#prf-caneta-${k})` : undefined);

/** Desenho de cada caneta no estojo, com a ponta na cor escolhida. */
function DesenhoCaneta({ k, cor }: { k: Tipo; cor: string }) {
  switch (k) {
    case "lapis":
      return (
        <>
          <path d="M8 22h12v38a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" fill="#e8b83a" />
          <path d="M8 22h4v40h-2a2 2 0 0 1-2-2z" fill="#f6d36b" />
          <path d="M8 22 14 6l6 16z" fill="#f1d7aa" />
          <path d="M11.6 12.4 14 6l2.4 6.4z" fill={cor} />
          <path d="M8 50h12v4H8z" fill="#c9d3e0" />
          <path d="M8 54h12v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" fill="#ff8fa3" />
        </>
      );
    case "caneta":
      return (
        <>
          <path d="M9 26h10v34a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z" fill="#dfe6f0" />
          <path d="M9 26h10v10H9z" fill="#8ea2bf" />
          <path d="M9 26l3-12h4l3 12z" fill="#c9d3e0" />
          <path d="M12.4 14 14 6l1.6 8z" fill={cor} />
          <rect x="18.5" y="40" width="2.5" height="15" rx="1.2" fill="#8ea2bf" />
        </>
      );
    case "giz":
      return (
        <>
          <path d="M8 19l2.5-4 3 2.5 3-3.5 3.5 4.5V60a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" fill={cor} />
          <path d="M8 19l2.5-4 3 2.5 3-3.5 3.5 4.5V25H8z" fill="#fff" fillOpacity="0.3" />
          <path d="M16 18v44h2a2 2 0 0 0 2-2V18.5z" fill="#000" fillOpacity="0.12" />
        </>
      );
    case "marca":
      return (
        <>
          <path d="M7 30h14v30a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" fill="#4a749e" />
          <path d="M7 30h14v5H7z" fill="#2c4a6e" />
          <path d="M9 30V19h10v11z" fill="#c9d3e0" />
          <path d="M10 19 18 9v10z" fill={cor} />
          <rect x="10" y="41" width="8" height="15" rx="2" fill={cor} fillOpacity="0.45" />
        </>
      );
    case "magica":
      return (
        <>
          <rect x="12.5" y="20" width="3" height="42" rx="1.5" fill="#8ea2bf" />
          <rect x="12.5" y="20" width="3" height="8" fill="#f4f1e8" />
          <path d="M14 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L14 15.3l-4.8 2.6.9-5.4-3.9-3.8 5.4-.8z" fill="#f2c14e" />
          <circle cx="23" cy="4.5" r="1.3" fill={cor} />
          <circle cx="4.5" cy="15" r="1.1" fill={cor} />
          <circle cx="23.5" cy="17" r="1" fill={cor} />
        </>
      );
  }
}

interface Gesto {
  id: number;
  /** Caneta: os pontos do traço. Borracha: só o último ponto. */
  p: number[];
  x0: number;
  y0: number;
  /** Maior distância do ponto inicial: abaixo de TOQUE, foi só um toque. */
  andou: number;
  /** A borracha já apagou algo neste gesto (o desfazer guarda o antes uma vez só). */
  apagou: boolean;
}

interface CanetaPrfProps {
  /** Questão da tela: os traços valem só para ela. */
  questaoId: string;
  children: ReactNode;
}

export default function CanetaPrf({ questaoId, children }: CanetaPrfProps) {
  const [prefs] = useState(lerPrefs);
  const [modo, setModo] = useState<Modo>("responder");
  const [painel, setPainel] = useState(false);
  const [tipo, setTipo] = useState<Tipo>(prefs.k);
  const [cor, setCor] = useState(prefs.c);
  const [espessuras, setEspessuras] = useState<Espessuras>(prefs.e);
  const [tracos, setTracos] = useState<Traco[]>(() => lerTracos(questaoId));
  const [passado, setPassado] = useState<Traco[][]>([]);
  const [futuro, setFuturo] = useState<Traco[][]>([]);
  const [magicas, setMagicas] = useState<TracoMagico[]>([]);
  const [idAtual, setIdAtual] = useState(questaoId);
  /** Conta os toques nas alternativas com a caneta ligada: mostra como voltar a responder. */
  const [aviso, setAviso] = useState(0);

  // Questão nova: começa limpa (ou com os traços dela, se a página recarregou no meio).
  if (idAtual !== questaoId) {
    setIdAtual(questaoId);
    setTracos(lerTracos(questaoId));
    setPassado([]);
    setFuturo([]);
    setMagicas([]);
  }

  const vivoRef = useRef<SVGPathElement>(null);
  const haloRef = useRef<SVGPathElement>(null);
  const alvoRef = useRef<SVGCircleElement>(null);
  const tracosRef = useRef(tracos);
  tracosRef.current = tracos;
  /** Dedos (ou mouse) encostados: id → y na tela. */
  const ponteiros = useRef(new Map<number, number>());
  const gesto = useRef<Gesto | null>(null);
  /** Com dois dedos a página rola: guarda o y médio deles. */
  const rolagem = useRef<number | null>(null);
  const contador = useRef(0);

  const ligada = modo !== "responder";
  const tipoAtual = tipoDe(tipo);
  const espessura = espessuras[tipo];
  const caminhos = useMemo(() => tracos.map((t) => caminho(t.p)), [tracos]);

  useEffect(() => gravarTracos(questaoId, tracos), [questaoId, tracos]);

  useEffect(
    () => () => {
      try {
        sessionStorage.removeItem(CHAVE_TRACOS);
      } catch {
        // nada a limpar
      }
    },
    [],
  );

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_PREFS, JSON.stringify({ k: tipo, c: cor, e: espessuras }));
    } catch {
      // preferência só nesta visita
    }
  }, [tipo, cor, espessuras]);

  useEffect(() => {
    if (aviso === 0) return;
    const t = setTimeout(() => setAviso(0), 4000);
    return () => clearTimeout(t);
  }, [aviso]);

  useEffect(() => {
    if (modo !== "borracha") esconderAlvo();
  }, [modo]);

  // Caneta mágica: tira da tela os traços que já sumiram.
  useEffect(() => {
    if (magicas.length === 0) return;
    const proximo = Math.min(...magicas.map((m) => m.fim));
    const t = setTimeout(
      () => setMagicas((ms) => ms.filter((m) => m.fim > Date.now())),
      Math.max(0, proximo - Date.now()) + 30,
    );
    return () => clearTimeout(t);
  }, [magicas]);

  // Esc fecha o painel das canetas.
  useEffect(() => {
    if (!painel) return;
    const fechar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPainel(false);
    };
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, [painel]);

  function mudar(novos: Traco[]) {
    const antes = tracosRef.current;
    setPassado((h) => [...h.slice(-49), antes]);
    setFuturo([]);
    tracosRef.current = novos;
    setTracos(novos);
  }

  function desfazer() {
    if (passado.length === 0) return;
    const atual = tracosRef.current;
    const anterior = passado[passado.length - 1];
    setPassado(passado.slice(0, -1));
    setFuturo((f) => [...f, atual]);
    tracosRef.current = anterior;
    setTracos(anterior);
  }

  function refazer() {
    if (futuro.length === 0) return;
    const atual = tracosRef.current;
    const proximo = futuro[futuro.length - 1];
    setFuturo(futuro.slice(0, -1));
    setPassado((h) => [...h, atual]);
    tracosRef.current = proximo;
    setTracos(proximo);
  }

  function limpar() {
    setMagicas([]);
    if (tracosRef.current.length > 0) mudar([]);
  }

  function soltar() {
    ponteiros.current.clear();
    gesto.current = null;
    rolagem.current = null;
    limparVivo();
    esconderAlvo();
  }

  /** Caneta: na primeira vez abre o painel; com a caneta já na mão, abre e fecha o painel. */
  function escolherModo(m: Modo) {
    soltar();
    setAviso(0);
    setPainel(m === "caneta" ? modo !== "caneta" || !painel : false);
    setModo(m);
  }

  function desenharVivo() {
    const g = gesto.current;
    if (!g) return;
    const d = caminho(g.p);
    vivoRef.current?.setAttribute("d", d);
    haloRef.current?.setAttribute("d", d);
  }

  function limparVivo() {
    vivoRef.current?.setAttribute("d", "");
    haloRef.current?.setAttribute("d", "");
  }

  function mostrarAlvo(x: number, y: number) {
    const a = alvoRef.current;
    if (!a) return;
    a.setAttribute("cx", String(x));
    a.setAttribute("cy", String(y));
    a.style.visibility = "visible";
  }

  function esconderAlvo() {
    if (alvoRef.current) alvoRef.current.style.visibility = "hidden";
  }

  function apagarEm(x: number, y: number) {
    const atuais = tracosRef.current;
    const restantes = atuais.filter((t) => !borrachaToca(t, x, y));
    if (restantes.length === atuais.length) return;
    const g = gesto.current;
    if (g && !g.apagou) {
      g.apagou = true;
      mudar(restantes);
    } else {
      tracosRef.current = restantes;
      setTracos(restantes);
    }
  }

  /** Passa a borracha do último ponto até (x, y), sem pular traço com o dedo rápido. */
  function apagarAte(g: Gesto, x: number, y: number) {
    const [lx, ly] = g.p;
    const passos = Math.max(1, Math.ceil(Math.hypot(x - lx, y - ly) / (RAIO_BORRACHA / 2)));
    for (let i = 1; i <= passos; i++) apagarEm(lx + ((x - lx) * i) / passos, ly + ((y - ly) * i) / passos);
    g.p = [x, y];
  }

  function mediaY() {
    let soma = 0;
    ponteiros.current.forEach((y) => (soma += y));
    return soma / ponteiros.current.size;
  }

  function aoDescer(e: EventoPonteiro<SVGSVGElement>) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    setPainel(false);
    ponteiros.current.set(e.pointerId, e.clientY);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ponteiro que já soltou
    }
    if (ponteiros.current.size > 1) {
      // Dois dedos: rola a página e descarta o traço que tinha começado.
      gesto.current = null;
      limparVivo();
      esconderAlvo();
      rolagem.current = mediaY();
      return;
    }
    const r = e.currentTarget.getBoundingClientRect();
    const x = arred(e.clientX - r.left);
    const y = arred(e.clientY - r.top);
    gesto.current = { id: e.pointerId, p: [x, y], x0: x, y0: y, andou: 0, apagou: false };
    if (modo === "borracha") {
      mostrarAlvo(x, y);
      apagarEm(x, y);
    } else {
      desenharVivo();
    }
  }

  function aoMover(e: EventoPonteiro<SVGSVGElement>) {
    if (!ponteiros.current.has(e.pointerId)) {
      // Mouse passando com a borracha: mostra onde ela vai apagar.
      if (e.pointerType === "mouse" && modo === "borracha") {
        const r = e.currentTarget.getBoundingClientRect();
        mostrarAlvo(arred(e.clientX - r.left), arred(e.clientY - r.top));
      }
      return;
    }
    e.preventDefault();
    ponteiros.current.set(e.pointerId, e.clientY);
    if (rolagem.current !== null) {
      const y = mediaY();
      window.scrollBy(0, rolagem.current - y);
      rolagem.current = y;
      return;
    }
    const g = gesto.current;
    if (!g || g.id !== e.pointerId) return;
    const r = e.currentTarget.getBoundingClientRect();
    const nativo = e.nativeEvent;
    const juntos = typeof nativo.getCoalescedEvents === "function" ? nativo.getCoalescedEvents() : [];
    for (const ev of juntos.length > 0 ? juntos : [nativo]) {
      const x = arred(ev.clientX - r.left);
      const y = arred(ev.clientY - r.top);
      g.andou = Math.max(g.andou, Math.hypot(x - g.x0, y - g.y0));
      if (modo === "borracha") {
        apagarAte(g, x, y);
        mostrarAlvo(x, y);
        continue;
      }
      const n = g.p.length;
      if (Math.hypot(x - g.p[n - 2], y - g.p[n - 1]) >= 1.5) g.p.push(x, y);
    }
    if (modo !== "borracha") desenharVivo();
  }

  function aoSubir(e: EventoPonteiro<SVGSVGElement>) {
    if (!ponteiros.current.delete(e.pointerId)) return;
    if (rolagem.current !== null) {
      rolagem.current = ponteiros.current.size > 0 ? mediaY() : null;
      return;
    }
    const g = gesto.current;
    if (!g || g.id !== e.pointerId) return;
    gesto.current = null;
    limparVivo();
    if (e.pointerType !== "mouse") esconderAlvo();
    if (g.andou < TOQUE && !g.apagou && sobreAlternativa(e.clientX, e.clientY)) {
      // Toque numa alternativa com a caneta na mão: quase sempre é alguém tentando responder.
      setAviso((n) => n + 1);
      return;
    }
    if (modo === "borracha") return;
    // Fora das alternativas, o toque fica como um pingo (o do i, o acento, o ponto final).
    const novo: Traco = { k: tipo, c: cor, e: espessura, p: tipo === "marca" ? endireitar(g.p) : g.p };
    if (tipo === "magica") {
      contador.current += 1;
      const id = contador.current;
      setMagicas((ms) => [...ms, { id, fim: Date.now() + DURACAO_MAGICA, t: novo }]);
      return;
    }
    mudar([...tracosRef.current, novo]);
  }

  function aoSair(e: EventoPonteiro<SVGSVGElement>) {
    if (!ponteiros.current.has(e.pointerId)) esconderAlvo();
  }

  const barra = (
    <div className="prf-caneta-barra" role="toolbar" aria-label="Caneta">
      <button
        type="button"
        className={`prf-caneta-botao${modo === "responder" ? " prf-caneta-ativa" : ""}`}
        aria-pressed={modo === "responder"}
        onClick={() => escolherModo("responder")}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 3.5v15.2l4.1-3.9 2.8 6.1 2.5-1.1-2.8-6h5.7z" />
        </svg>
        <span>Responder</span>
      </button>
      <button
        type="button"
        className={`prf-caneta-botao${modo === "caneta" ? " prf-caneta-ativa" : ""}`}
        aria-pressed={modo === "caneta"}
        aria-expanded={modo === "caneta" && painel}
        onClick={() => escolherModo("caneta")}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.5 19.5l1-4.2L16 4.8a2.1 2.1 0 0 1 3 0l.2.2a2.1 2.1 0 0 1 0 3L8.7 18.5z" />
          <path d="M14.3 6.5l3.2 3.2" />
        </svg>
        <span className="prf-caneta-tinta" style={{ background: cor }} aria-hidden="true" />
        <span>Caneta</span>
      </button>
      <button
        type="button"
        className={`prf-caneta-botao${modo === "borracha" ? " prf-caneta-ativa" : ""}`}
        aria-pressed={modo === "borracha"}
        onClick={() => escolherModo("borracha")}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.4 14.2 13.6 5a2 2 0 0 1 2.8 0l3.6 3.6a2 2 0 0 1 0 2.8L11 20.4H8.6l-4.2-4.2a1.4 1.4 0 0 1 0-2z" />
          <path d="M9 9.6l6.4 6.4" />
          <path d="M11 20.4h9" />
        </svg>
        <span>Borracha</span>
      </button>
      <span className="prf-caneta-sep" aria-hidden="true" />
      <button type="button" className="prf-caneta-botao" onClick={desfazer} disabled={passado.length === 0}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 14 4 9l5-5" />
          <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
        </svg>
        <span>Desfazer</span>
      </button>
      <button type="button" className="prf-caneta-botao" onClick={refazer} disabled={futuro.length === 0}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m15 14 5-5-5-5" />
          <path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13" />
        </svg>
        <span>Refazer</span>
      </button>
      <button
        type="button"
        className="prf-caneta-botao"
        onClick={limpar}
        disabled={tracos.length === 0 && magicas.length === 0}
        title="Apagar todos os traços desta questão"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M6 6l1 14h10l1-14" />
        </svg>
        <span>Limpar</span>
      </button>
    </div>
  );

  const painelCanetas = (
    <div className="prf-caneta-painel" role="dialog" aria-label="Escolher a caneta">
      <div className="prf-caneta-painel-topo">
        <p>
          <strong>{tipoAtual.nome}</strong>
          <span>{tipoAtual.dica}</span>
        </p>
        <button type="button" className="prf-caneta-fechar" aria-label="Fechar" onClick={() => setPainel(false)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <label className="prf-caneta-espessura">
        <span>Espessura</span>
        <input
          type="range"
          min={tipoAtual.min}
          max={tipoAtual.max}
          step={1}
          value={espessura}
          onChange={(e) => {
            const v = Number(e.target.value);
            setEspessuras((atual) => ({ ...atual, [tipo]: v }));
          }}
        />
        <span className="prf-caneta-amostra" aria-hidden="true">
          <span style={{ width: espessura, height: espessura, background: cor, opacity: tipoAtual.opacidade }} />
        </span>
      </label>
      <div className="prf-caneta-corpo">
        <div className="prf-caneta-estojo" role="group" aria-label="Tipo de caneta">
          {TIPOS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`prf-caneta-tipo${tipo === t.id ? " prf-caneta-ativa" : ""}`}
              aria-pressed={tipo === t.id}
              onClick={() => setTipo(t.id)}
            >
              <svg viewBox="0 0 28 64" aria-hidden="true">
                <DesenhoCaneta k={t.id} cor={cor} />
              </svg>
              <span>{t.nome}</span>
            </button>
          ))}
        </div>
        <div className="prf-caneta-cores" role="group" aria-label="Cor">
          {CORES.map((c) => (
            <button
              key={c.cor}
              type="button"
              className={`prf-caneta-cor${cor === c.cor ? " prf-caneta-ativa" : ""}`}
              style={{ background: c.cor }}
              aria-pressed={cor === c.cor}
              aria-label={c.nome}
              title={c.nome}
              onClick={() => setCor(c.cor)}
            />
          ))}
        </div>
      </div>
      <p className="prf-caneta-dica">Com a caneta ligada, use dois dedos para subir e descer.</p>
    </div>
  );

  const doca = (
    <div className="prf-caneta-doca">
      {aviso > 0 && (
        <p className="prf-caneta-aviso" role="status">
          Caneta ligada. Para marcar a resposta, toque em <strong>Responder</strong>.
        </p>
      )}
      {modo === "caneta" && painel && painelCanetas}
      {barra}
    </div>
  );

  return (
    <div className={`prf-caneta-area${ligada ? " prf-caneta-ligada" : ""}`}>
      {children}
      <svg
        className={`prf-caneta-quadro prf-caneta-com-${modo}`}
        aria-hidden="true"
        onPointerDown={ligada ? aoDescer : undefined}
        onPointerMove={ligada ? aoMover : undefined}
        onPointerUp={ligada ? aoSubir : undefined}
        onPointerCancel={ligada ? aoSubir : undefined}
        onPointerLeave={ligada ? aoSair : undefined}
      >
        {GRAOS}
        {tracos.map((t, i) => (
          <path
            key={i}
            className="prf-caneta-traco"
            data-k={t.k}
            d={caminhos[i]}
            stroke={t.c}
            strokeWidth={t.e}
            strokeOpacity={tipoDe(t.k).opacidade}
            mask={mascara(t.k)}
          />
        ))}
        {magicas.map((m) => {
          const d = caminho(m.t.p);
          return (
            <g key={m.id} className="prf-caneta-magica">
              <path d={d} stroke={m.t.c} strokeWidth={m.t.e * 3} strokeOpacity={0.22} />
              <path d={d} stroke={m.t.c} strokeWidth={m.t.e} strokeOpacity={0.95} />
            </g>
          );
        })}
        <path
          ref={haloRef}
          className="prf-caneta-vivo"
          stroke={cor}
          strokeWidth={espessura * 3}
          strokeOpacity={tipo === "magica" ? 0.22 : 0}
        />
        <path
          ref={vivoRef}
          className="prf-caneta-vivo"
          stroke={cor}
          strokeWidth={espessura}
          strokeOpacity={tipoAtual.opacidade}
          mask={mascara(tipo)}
        />
        <circle ref={alvoRef} className="prf-caneta-alvo" r={RAIO_BORRACHA} />
      </svg>
      {createPortal(doca, document.body)}
    </div>
  );
}
