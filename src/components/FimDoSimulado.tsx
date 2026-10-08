import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import { createPortal } from "react-dom";
import type { SimuladoResultado } from "../lib/types";
import type { ResumoSimulado } from "../lib/retaFinal";
import { SUBJECT_MAP } from "../data/subjects";
import { formatarRelogio } from "../lib/format";

// Etapas da animação; a última deixa tudo visível e libera os botões.
const F_TITULO = 1;
const F_CONTA = 2;
const F_VEREDITO = 3;
const F_EXTRA = 4;
const F_DETALHES = 5;
const F_ACOES = 6;

const CHAVE_SOM = "pcpr:somFimSimulado";
const VOLUME = 0.22;

// Anel do placar (viewBox com margem para o rótulo do piso).
const R = 84;
const CIRC = 2 * Math.PI * R;

function pontoNoAnel(fracao: number, raio: number) {
  const a = ((-90 + 360 * fracao) * Math.PI) / 180;
  return { x: 100 + raio * Math.cos(a), y: 100 + raio * Math.sin(a) };
}

/* ---------- Som (WebAudio sintetizado, sem arquivos) ---------- */

type NomeSom = "whoosh" | "impacto" | "tick" | "ding" | "fanfarra" | "estrela" | "derrota" | "alarme" | "pop";

class Som {
  mudo: boolean;
  private ctx: AudioContext | null = null;
  private saida: GainNode | null = null;
  private ruidoBuf: AudioBuffer | null = null;

  constructor(mudo: boolean) {
    this.mudo = mudo;
  }

  private abrir(): AudioContext | null {
    if (this.mudo) return null;
    if (!this.ctx) {
      const Ctor =
        window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return null;
      try {
        this.ctx = new Ctor();
      } catch {
        return null;
      }
      this.saida = this.ctx.createGain();
      this.saida.gain.value = VOLUME;
      this.saida.connect(this.ctx.destination);
    }
    return this.ctx;
  }

  /** Chamado em clique/tecla: navegador só libera o áudio depois de um gesto. */
  destravar() {
    const ctx = this.abrir();
    if (ctx && ctx.state === "suspended") ctx.resume().catch(() => undefined);
  }

  setMudo(mudo: boolean) {
    this.mudo = mudo;
    if (this.ctx && this.saida) this.saida.gain.setValueAtTime(mudo ? 0 : VOLUME, this.ctx.currentTime);
  }

  fechar() {
    const ctx = this.ctx;
    this.ctx = null;
    this.saida = null;
    this.ruidoBuf = null;
    if (ctx) ctx.close().catch(() => undefined);
  }

  tocar(nome: NomeSom, p = 0) {
    const ctx = this.abrir();
    if (!ctx) return;
    if (ctx.state === "running") {
      this.gerar(ctx, nome, p);
      return;
    }
    // Contexto suspenso (sem gesto ainda): só toca se liberar logo; senão os sons se acumulariam e sairiam todos juntos.
    const pedido = performance.now();
    ctx
      .resume()
      .then(() => {
        if (this.ctx === ctx && !this.mudo && performance.now() - pedido < 250) this.gerar(ctx, nome, p);
      })
      .catch(() => undefined);
  }

  private tom(
    ctx: AudioContext,
    freq: number,
    t: number,
    dur: number,
    tipo: OscillatorType,
    vol: number,
    freqFim?: number,
    destino?: AudioNode,
  ) {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = tipo;
    o.frequency.setValueAtTime(freq, t);
    if (freqFim) o.frequency.exponentialRampToValueAtTime(freqFim, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.02, dur / 4));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(destino ?? this.saida!);
    o.start(t);
    o.stop(t + dur + 0.05);
    return o;
  }

  private ruido(ctx: AudioContext, t: number, dur: number, vol: number, tipo: BiquadFilterType, f0: number, f1?: number, q = 1) {
    if (!this.ruidoBuf) {
      const n = ctx.sampleRate;
      const buf = ctx.createBuffer(1, n, ctx.sampleRate);
      const dados = buf.getChannelData(0);
      for (let i = 0; i < n; i++) dados[i] = Math.random() * 2 - 1;
      this.ruidoBuf = buf;
    }
    const src = ctx.createBufferSource();
    src.buffer = this.ruidoBuf;
    const f = ctx.createBiquadFilter();
    f.type = tipo;
    f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + dur * 0.3);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(this.saida!);
    src.start(t);
    src.stop(t + dur + 0.05);
  }

  private gerar(ctx: AudioContext, nome: NomeSom, p: number) {
    if (!this.saida) return;
    const t = ctx.currentTime + 0.01;
    switch (nome) {
      case "whoosh":
        this.ruido(ctx, t, 0.45, 0.55, "bandpass", 320, 2600, 1.4);
        break;
      case "impacto":
        this.tom(ctx, 150, t, 0.4, "sine", 0.5 + 0.5 * p, 38);
        this.ruido(ctx, t, 0.2, 0.35 + 0.4 * p, "lowpass", 1000, 110);
        break;
      case "tick":
        this.tom(ctx, 520 + 900 * p, t, 0.035, "square", 0.1);
        break;
      case "ding":
        this.tom(ctx, 1046.5, t, 0.7, "triangle", 0.45);
        this.tom(ctx, 1568, t + 0.06, 0.8, "sine", 0.3);
        this.tom(ctx, 2093, t + 0.12, 0.6, "sine", 0.18);
        break;
      case "fanfarra": {
        const notas = [523.25, 659.25, 783.99, 1046.5];
        notas.forEach((f, i) => this.tom(ctx, f, t + i * 0.11, 0.16, "square", 0.2));
        notas.forEach((f) => this.tom(ctx, f, t + 0.5, 1.5, "triangle", 0.2));
        this.tom(ctx, 2093, t + 0.5, 1, "sine", 0.1);
        this.tom(ctx, 110, t + 0.5, 0.6, "sine", 0.5, 55);
        break;
      }
      case "estrela": {
        const f = [1318.5, 1568, 2093][Math.max(0, Math.min(2, p))];
        this.tom(ctx, f * 0.75, t, 0.3, "sine", 0.4, f);
        this.tom(ctx, f * 2, t + 0.03, 0.25, "triangle", 0.1);
        break;
      }
      case "derrota": {
        // "Uá-uá-uá-uáaa" descendo, serrilhado e abafado.
        const filtro = ctx.createBiquadFilter();
        filtro.type = "lowpass";
        filtro.frequency.value = 1300;
        filtro.connect(this.saida);
        [392, 369.99, 349.23].forEach((f, i) => this.tom(ctx, f, t + i * 0.38, 0.36, "sawtooth", 0.3, f * 0.97, filtro));
        const ultima = this.tom(ctx, 329.63, t + 1.14, 1.3, "sawtooth", 0.32, 300, filtro);
        const lfo = ctx.createOscillator();
        const prof = ctx.createGain();
        lfo.frequency.value = 6;
        prof.gain.value = 7;
        lfo.connect(prof);
        prof.connect(ultima.frequency);
        lfo.start(t + 1.14);
        lfo.stop(t + 2.5);
        break;
      }
      case "alarme":
        for (let i = 0; i < 3; i++) {
          this.tom(ctx, 960, t + i * 0.32, 0.14, "square", 0.22);
          this.tom(ctx, 720, t + i * 0.32 + 0.15, 0.13, "square", 0.18);
        }
        break;
      case "pop":
        this.tom(ctx, 900 + 200 * p, t, 0.08, "sine", 0.22, 320);
        break;
    }
  }
}

/* ---------- Partículas (canvas 2D) ---------- */

type TipoParticula = "confete" | "faisca" | "caco" | "cinza" | "brasa";

interface Particula {
  t: TipoParticula;
  x: number;
  y: number;
  vx: number;
  vy: number;
  g: number;
  ar: number;
  vida: number;
  max: number;
  tam: number;
  cor: string;
  rot: number;
  vr: number;
  giro: number;
  vg: number;
  osc: number;
}

const CORES_CONFETE = ["#f2c14e", "#caa03a", "#35d488", "#4fa3e3", "#e9eef7", "#f0555c", "#b14fe3", "#4fe3c2"];
const PALETAS_FOGOS = [
  ["#f2c14e", "#fff1b8", "#ffd56b"],
  ["#35d488", "#b8ffd9", "#4fe3c2"],
  ["#4fa3e3", "#cfe9ff", "#8fc7ff"],
  ["#f26bb5", "#ffd0ea", "#b14fe3"],
];
const LIMITE_PARTICULAS = 900;

const sorteia = (a: number, b: number) => a + Math.random() * (b - a);
const umDe = <T,>(lista: T[]) => lista[Math.floor(Math.random() * lista.length)];

class Particulas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private lista: Particula[] = [];
  private emissores: { ate: number; fn: (dt: number) => void }[] = [];
  private raf = 0;
  private ultimo = 0;
  private w = 0;
  private h = 0;
  private dpr = 1;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.medir();
  }

  medir() {
    this.dpr = Math.min(2, window.devicePixelRatio || 1);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = Math.round(this.w * this.dpr);
    this.canvas.height = Math.round(this.h * this.dpr);
  }

  parar() {
    cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.lista = [];
    this.emissores = [];
    if (this.ctx) {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  private add(p: Omit<Particula, "max" | "rot" | "vr" | "giro" | "vg" | "osc"> & Partial<Particula>) {
    if (this.lista.length >= LIMITE_PARTICULAS) return;
    this.lista.push({ rot: 0, vr: 0, giro: 0, vg: 0, osc: Math.random() * 6.28, max: p.vida, ...p });
    this.acordar();
  }

  private acordar() {
    if (this.raf || !this.ctx) return;
    this.ultimo = performance.now();
    this.raf = requestAnimationFrame(this.passo);
  }

  private emitir(duracaoMs: number, fn: (dt: number) => void) {
    this.emissores.push({ ate: performance.now() + duracaoMs, fn });
    this.acordar();
  }

  /** Dois canhões de confete nos cantos de baixo. */
  canhoes() {
    const escala = Math.max(0.75, this.h / 800);
    for (const lado of [0, 1]) {
      const x = lado ? this.w + 10 : -10;
      const base = lado ? -118 : -62;
      for (let i = 0; i < 95; i++) {
        const a = ((base + sorteia(-16, 16)) * Math.PI) / 180;
        const v = sorteia(900, 1550) * escala;
        this.add({
          t: "confete",
          x,
          y: this.h + 10,
          vx: Math.cos(a) * v,
          vy: Math.sin(a) * v,
          g: 420,
          ar: 2.4,
          vida: sorteia(3.6, 5.6),
          tam: sorteia(7, 13),
          cor: umDe(CORES_CONFETE),
          rot: sorteia(0, 6.28),
          vr: sorteia(-9, 9),
          vg: sorteia(4, 12),
        });
      }
    }
  }

  /** Chuva leve de confete caindo do topo. */
  chuva(duracaoMs: number) {
    let acumulado = 0;
    this.emitir(duracaoMs, (dt) => {
      acumulado += dt * 38;
      while (acumulado >= 1) {
        acumulado -= 1;
        this.add({
          t: "confete",
          x: sorteia(0, this.w),
          y: -12,
          vx: sorteia(-30, 30),
          vy: sorteia(60, 150),
          g: 110,
          ar: 0.8,
          vida: sorteia(5, 7.5),
          tam: sorteia(6, 11),
          cor: umDe(CORES_CONFETE),
          rot: sorteia(0, 6.28),
          vr: sorteia(-6, 6),
          vg: sorteia(3, 9),
        });
      }
    });
  }

  fogos(x?: number, y?: number) {
    const cx = x ?? sorteia(this.w * 0.15, this.w * 0.85);
    const cy = y ?? sorteia(this.h * 0.12, this.h * 0.5);
    const paleta = umDe(PALETAS_FOGOS);
    for (let i = 0; i < 70; i++) {
      const a = Math.random() * Math.PI * 2;
      const v = Math.sqrt(Math.random()) * 380 + 60;
      this.add({
        t: "faisca",
        x: cx,
        y: cy,
        vx: Math.cos(a) * v,
        vy: Math.sin(a) * v,
        g: 170,
        ar: 1.6,
        vida: sorteia(0.9, 1.6),
        tam: sorteia(1.6, 3),
        cor: umDe(paleta),
      });
    }
  }

  faiscas(x: number, y: number, n: number, cores: string[]) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const v = sorteia(150, 430);
      this.add({
        t: "faisca",
        x,
        y,
        vx: Math.cos(a) * v,
        vy: Math.sin(a) * v,
        g: 300,
        ar: 2.4,
        vida: sorteia(0.45, 0.9),
        tam: sorteia(1.5, 2.6),
        cor: umDe(cores),
      });
    }
  }

  /** Estilhaços vermelhos voando do veredito. */
  estilhacos(x: number, y: number) {
    const cores = ["#f0555c", "#b8323a", "#ff8a8f", "#5a1a22", "#e9eef7"];
    for (let i = 0; i < 64; i++) {
      const a = Math.random() * Math.PI * 2;
      const v = sorteia(260, 950);
      this.add({
        t: "caco",
        x: x + sorteia(-60, 60),
        y: y + sorteia(-14, 14),
        vx: Math.cos(a) * v,
        vy: Math.sin(a) * v - 180,
        g: 1500,
        ar: 0.4,
        vida: sorteia(1.4, 2.3),
        tam: sorteia(5, 14),
        cor: umDe(cores),
        rot: sorteia(0, 6.28),
        vr: sorteia(-11, 11),
      });
    }
  }

  /** Brasas e cinzas subindo do chão. */
  brasas(duracaoMs: number) {
    let acumulado = 0;
    this.emitir(duracaoMs, (dt) => {
      acumulado += dt * 20;
      while (acumulado >= 1) {
        acumulado -= 1;
        const brasa = Math.random() < 0.6;
        this.add({
          t: brasa ? "brasa" : "cinza",
          x: sorteia(0, this.w),
          y: this.h + 10,
          vx: sorteia(-18, 18),
          vy: brasa ? -sorteia(45, 120) : -sorteia(20, 60),
          g: brasa ? -10 : 0,
          ar: 0.2,
          vida: sorteia(5, 9),
          tam: brasa ? sorteia(1.2, 2.6) : sorteia(1.5, 3),
          cor: brasa ? umDe(["#ff6a3d", "#ff3b3b", "#ffb347"]) : umDe(["#8a8f99", "#5c6170", "#3d4250"]),
        });
      }
    });
  }

  private passo = (agora: number) => {
    const ctx = this.ctx;
    if (!ctx) return;
    const dt = Math.min(0.05, Math.max(0.001, (agora - this.ultimo) / 1000));
    this.ultimo = agora;
    const relogio = performance.now();
    this.emissores = this.emissores.filter((e) => e.ate > relogio);
    for (const e of this.emissores) e.fn(dt);

    const { w, h, dpr } = this;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let vivos = 0;
    for (let i = 0; i < this.lista.length; i++) {
      const p = this.lista[i];
      p.vida -= dt;
      if (p.vida <= 0) continue;
      const k = Math.max(0, 1 - p.ar * dt);
      p.vx *= k;
      p.vy = p.vy * k + p.g * dt;
      if (p.t === "cinza" || p.t === "brasa") {
        p.osc += dt * 2;
        p.x += Math.sin(p.osc) * 14 * dt;
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      p.giro += p.vg * dt;
      if (p.y > h + 60 || p.y < -80 || p.x < -80 || p.x > w + 80) continue;
      this.lista[vivos++] = p;

      const fim = Math.min(1, p.vida / 0.6);
      switch (p.t) {
        case "confete": {
          const c = Math.cos(p.rot);
          const s = Math.sin(p.rot);
          const f = Math.cos(p.giro);
          ctx.globalCompositeOperation = "source-over";
          ctx.globalAlpha = fim;
          ctx.setTransform(c * dpr, s * dpr, -s * f * dpr, c * f * dpr, p.x * dpr, p.y * dpr);
          ctx.fillStyle = p.cor;
          ctx.fillRect(-p.tam / 2, -p.tam * 0.3, p.tam, p.tam * 0.6);
          break;
        }
        case "faisca": {
          ctx.globalCompositeOperation = "lighter";
          ctx.globalAlpha = p.vida / p.max;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.strokeStyle = p.cor;
          ctx.lineWidth = p.tam;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 0.045, p.y - p.vy * 0.045);
          ctx.stroke();
          break;
        }
        case "caco": {
          const c = Math.cos(p.rot);
          const s = Math.sin(p.rot);
          ctx.globalCompositeOperation = "source-over";
          ctx.globalAlpha = fim;
          ctx.setTransform(c * dpr, s * dpr, -s * dpr, c * dpr, p.x * dpr, p.y * dpr);
          ctx.fillStyle = p.cor;
          ctx.beginPath();
          ctx.moveTo(0, -p.tam);
          ctx.lineTo(p.tam * (0.5 + 0.3 * Math.sin(p.osc)), p.tam * 0.6);
          ctx.lineTo(-p.tam * 0.55, p.tam * (0.3 + 0.2 * Math.cos(p.osc)));
          ctx.closePath();
          ctx.fill();
          break;
        }
        case "cinza": {
          ctx.globalCompositeOperation = "source-over";
          ctx.globalAlpha = fim * 0.55;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.fillStyle = p.cor;
          ctx.fillRect(p.x, p.y, p.tam, p.tam);
          break;
        }
        case "brasa": {
          ctx.globalCompositeOperation = "lighter";
          ctx.globalAlpha = fim * (0.55 + 0.45 * Math.sin(p.osc * 3));
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.fillStyle = p.cor;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.tam, 0, Math.PI * 2);
          ctx.fill();
          break;
        }
      }
    }
    this.lista.length = vivos;
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    if (this.lista.length || this.emissores.length) {
      this.raf = requestAnimationFrame(this.passo);
    } else {
      this.raf = 0;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  };
}

/* ---------- Tela ---------- */

interface FimDoSimuladoProps {
  resultado: SimuladoResultado;
  resumo: ResumoSimulado;
  piso: number;
  /** Há um simulado em andamento: o botão principal retoma em vez de começar outro. */
  simuladoEmAndamento: boolean;
  onReiniciar: () => void;
  onRevisarErradas: () => void;
  onVerCertas: () => void;
  onFechar: () => void;
}

// Rachaduras da tela (viewBox 1000×1000, centro no veredito).
const RACHADURAS = [
  "M500 420 L470 380 L455 300 L420 250 L410 160 L380 90 L370 0",
  "M500 420 L560 390 L620 395 L690 340 L760 330 L850 270 L1000 240",
  "M500 420 L540 470 L560 560 L610 620 L620 720 L680 800 L700 1000",
  "M500 420 L440 450 L370 440 L300 500 L220 510 L120 580 L0 600",
  "M500 420 L520 360 L580 300 L600 220 L670 150 L700 60",
  "M500 420 L470 500 L420 560 L400 660 L330 740 L300 860 L250 1000",
  "M500 420 L580 450 L660 520 L760 540 L850 620 L1000 660",
  "M455 300 L380 280 L330 220",
  "M690 340 L720 420 L790 450",
  "M300 500 L280 590 L210 640",
];

function Letras({ texto }: { texto: string }) {
  let i = 0;
  return (
    <>
      {texto.split(" ").map((palavra, p) => (
        <span key={p}>
          {p > 0 && " "}
          <span className="fds-palavra">
            {Array.from(palavra).map((letra) => {
              const indice = i++;
              return (
                <span key={indice} className="fds-letra" style={{ "--i": indice } as CSSProperties}>
                  {letra}
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </>
  );
}

export default function FimDoSimulado({
  resultado,
  resumo,
  piso,
  simuladoEmAndamento,
  onReiniciar,
  onRevisarErradas,
  onVerCertas,
  onFechar,
}: FimDoSimuladoProps) {
  const total = resumo.total;
  const acertos = resumo.acertos;
  const erros = Math.max(0, total - acertos - resumo.branco);
  const ok = acertos >= piso;
  const faltam = Math.max(0, piso - acertos);
  const porTempo = resultado.encerradoPorTempo;

  // Estrelas: 1 no piso, 2 com 65% e 3 com 80% da prova.
  const meta2 = Math.max(piso + 1, Math.ceil(total * 0.65));
  const meta3 = Math.max(meta2 + 1, Math.ceil(total * 0.8));
  const metas = [piso, meta2, meta3];
  const estrelas = metas.filter((m) => acertos >= m).length;

  const foco = resumo.porMateria
    .map((p) => ({ ...p, perdidas: p.total - p.acertos, pct: p.total ? p.acertos / p.total : 0 }))
    .filter((p) => p.perdidas > 0)
    .sort((a, b) => b.perdidas - a.perdidas || a.pct - b.pct || b.total - a.total)
    .slice(0, 3);

  const fracaoPiso = total ? Math.min(1, piso / total) : 0;
  const fracaoFinal = total ? acertos / total : 0;
  const marcaPiso = [pontoNoAnel(fracaoPiso, 68), pontoNoAnel(fracaoPiso, 100)];
  const rotuloPiso = pontoNoAnel(fracaoPiso, 114);
  const lacuna = (() => {
    if (ok || !total) return null;
    const a = pontoNoAnel(fracaoFinal, R);
    const b = pontoNoAnel(fracaoPiso, R);
    const grande = fracaoPiso - fracaoFinal > 0.5 ? 1 : 0;
    return `M${a.x.toFixed(2)} ${a.y.toFixed(2)} A${R} ${R} 0 ${grande} 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
  })();

  const [reduzido] = useState(
    () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [fase, setFase] = useState(() => (reduzido ? F_ACOES : 0));
  const [pulou, setPulou] = useState(reduzido);
  const [tremor, setTremor] = useState(false);
  const [confirmando, setConfirmando] = useState(false);
  const [mudo, setMudo] = useState(() => {
    try {
      return localStorage.getItem(CHAVE_SOM) === "0";
    } catch {
      return false;
    }
  });
  // Valor inicial fixo: depois da montagem o número e o arco são atualizados direto no DOM (sem re-render por quadro).
  const [inicio] = useState(() => (reduzido ? acertos : 0));

  const somRef = useRef<Som | null>(null);
  if (somRef.current === null) somRef.current = new Som(mudo);
  const raizRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const arcoRef = useRef<SVGCircleElement>(null);
  const pisoRef = useRef<SVGGElement>(null);
  const vereditoRef = useRef<HTMLHeadingElement>(null);
  const estrelasRef = useRef<HTMLDivElement>(null);
  const focoRef = useRef<HTMLElement>(null);
  const principalRef = useRef<HTMLButtonElement>(null);
  const fxRef = useRef<Particulas | null>(null);
  const timersRef = useRef<number[]>([]);
  const contaRaf = useRef(0);
  const faseRef = useRef(fase);
  const vereditoFeito = useRef(reduzido);
  // Quem tinha o foco antes de abrir (lido na renderização, antes de o diálogo tomar o foco).
  const focoAnterior = useRef(document.activeElement as HTMLElement | null);

  const irPara = (f: number) => {
    faseRef.current = f;
    setFase(f);
  };

  const aplicarValor = (v: number) => {
    const no = numRef.current?.firstChild;
    if (no) no.nodeValue = String(Math.floor(v + 1e-6));
    if (arcoRef.current) arcoRef.current.style.strokeDashoffset = String(CIRC * (1 - (total ? v / total : 0)));
  };

  // Rola só o diálogo (nunca a página por baixo) até a seção caber acima da barra de botões.
  const mostrarNoDialogo = (el: HTMLElement | null) => {
    const raiz = raizRef.current;
    if (!raiz || !el) return;
    const caixa = el.getBoundingClientRect();
    const folga = parseFloat(getComputedStyle(el).scrollMarginBottom) || 0;
    const excesso = Math.min(caixa.bottom + folga - raiz.clientHeight, caixa.top - 16);
    if (excesso > 0) raiz.scrollBy({ top: excesso, behavior: "smooth" });
  };

  const centroDe = (el: Element | null) => {
    const r = el?.getBoundingClientRect();
    return r ? { x: r.left + r.width / 2, y: r.top + r.height / 2 } : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  };

  // Efeito do veredito: comemoração ou derrota.
  const efeitoVeredito = () => {
    vereditoFeito.current = true;
    const som = somRef.current!;
    const fx = fxRef.current;
    if (ok) {
      som.tocar("fanfarra");
      fx?.canhoes();
      fx?.chuva(3800);
    } else {
      som.tocar("impacto", 1);
      timersRef.current.push(window.setTimeout(() => somRef.current?.tocar("derrota"), 280));
      setTremor(true);
      const c = centroDe(vereditoRef.current);
      fx?.estilhacos(c.x, c.y);
      fx?.brasas(14000);
    }
  };

  const pular = () => {
    if (faseRef.current >= F_ACOES) return;
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
    cancelAnimationFrame(contaRaf.current);
    aplicarValor(acertos);
    if (ok) pisoRef.current?.classList.add("fds-piso-on");
    if (!vereditoFeito.current) efeitoVeredito();
    setPulou(true);
    irPara(F_ACOES);
  };

  // Funções mais recentes para os ouvintes registrados uma vez só.
  const atual = useRef({ pular, onFechar, confirmando });
  useLayoutEffect(() => {
    atual.current = { pular, onFechar, confirmando };
  });

  // Linha do tempo da animação: roda uma vez na montagem.
  useEffect(() => {
    const som = somRef.current!;
    const canvas = canvasRef.current;
    const fx = canvas && !reduzido ? new Particulas(canvas) : null;
    fxRef.current = fx;
    const medir = () => fx?.medir();
    window.addEventListener("resize", medir);

    timersRef.current = [];
    const em = (ms: number, fn: () => void) => {
      timersRef.current.push(window.setTimeout(fn, ms));
    };

    const contar = (duracao: number) => {
      const ini = performance.now();
      let ultimoInt = -1;
      let ultimoTick = 0;
      const passo = (agora: number) => {
        const k = Math.min(1, (agora - ini) / duracao);
        const v = acertos * (1 - Math.pow(1 - k, 3));
        aplicarValor(v);
        const n = Math.floor(v + 1e-6);
        if (n !== ultimoInt) {
          if (agora - ultimoTick > 55) {
            som.tocar("tick", total ? n / total : 0);
            ultimoTick = agora;
          }
          if (ultimoInt < piso && n >= piso) {
            som.tocar("ding");
            pisoRef.current?.classList.add("fds-piso-on");
            const c = centroDe(pisoRef.current);
            fxRef.current?.faiscas(c.x, c.y, 30, ["#f2c14e", "#fff1b8", "#35d488"]);
          }
          ultimoInt = n;
        }
        if (k < 1) contaRaf.current = requestAnimationFrame(passo);
      };
      contaRaf.current = requestAnimationFrame(passo);
    };

    if (reduzido) {
      em(150, () => som.tocar(ok ? "fanfarra" : "derrota"));
    } else {
      const OFF = porTempo ? 1500 : 0;
      if (porTempo) em(80, () => som.tocar("alarme"));
      em(OFF + 100, () => {
        irPara(F_TITULO);
        som.tocar("whoosh");
      });
      em(OFF + 420, () => som.tocar("impacto", 0.3));
      em(OFF + 750, () => {
        irPara(F_CONTA);
        contar(1700);
      });
      em(OFF + 2650, () => {
        irPara(F_VEREDITO);
        efeitoVeredito();
      });
      em(OFF + 3450, () => irPara(F_EXTRA));
      if (ok) {
        for (let i = 0; i < estrelas; i++) {
          em(OFF + 3850 + i * 330, () => {
            som.tocar("estrela", i);
            const alvo = estrelasRef.current?.children[i] ?? null;
            const c = centroDe(alvo);
            fxRef.current?.faiscas(c.x, c.y, 28, ["#f2c14e", "#fff1b8", "#ffd56b"]);
          });
        }
        [3100, 3750, 4450, 5250, 6150].forEach((ms) => em(OFF + ms, () => fxRef.current?.fogos()));
      } else {
        em(OFF + 3500, () => som.tocar("impacto", 0.15));
      }
      em(OFF + 4700, () => {
        irPara(F_DETALHES);
        som.tocar("whoosh");
        mostrarNoDialogo(focoRef.current);
      });
      foco.forEach((_, i) => em(OFF + 5150 + i * 140, () => som.tocar("pop", i)));
      em(OFF + 5900, () => irPara(F_ACOES));
    }

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current = [];
      cancelAnimationFrame(contaRaf.current);
      window.removeEventListener("resize", medir);
      fx?.parar();
      fxRef.current = null;
      som.fechar();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Trava a rolagem da página, prende o foco no diálogo e devolve o foco ao sair.
  useEffect(() => {
    const anterior = focoAnterior.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    raizRef.current?.focus({ preventScroll: true });

    const tecla = (e: KeyboardEvent) => {
      const raiz = raizRef.current;
      if (!raiz) return;
      somRef.current?.destravar();
      if (e.key === "Tab") {
        const itens = Array.from(raiz.querySelectorAll<HTMLButtonElement>("button:not([disabled])")).filter(
          (b) => b.getClientRects().length > 0 && getComputedStyle(b).visibility !== "hidden",
        );
        if (!itens.length) return;
        const primeiro = itens[0];
        const ultimo = itens[itens.length - 1];
        const ativo = document.activeElement;
        if (e.shiftKey && (ativo === primeiro || ativo === raiz || !raiz.contains(ativo))) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && (ativo === ultimo || !raiz.contains(ativo))) {
          e.preventDefault();
          primeiro.focus();
        }
        return;
      }
      if (faseRef.current < F_ACOES) {
        if (e.target instanceof HTMLButtonElement && e.key !== "Escape") return;
        if (["Enter", " ", "Escape", "ArrowRight", "ArrowDown"].includes(e.key)) {
          e.preventDefault();
          atual.current.pular();
        }
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        if (atual.current.confirmando) setConfirmando(false);
        else atual.current.onFechar();
      }
    };
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("keydown", tecla);
      document.body.style.overflow = overflow;
      if (anterior && document.contains(anterior)) anterior.focus({ preventScroll: true });
    };
  }, []);

  // Botões liberados (ou confirmação cancelada): foco no botão principal.
  useEffect(() => {
    if (fase === F_ACOES && !confirmando) principalRef.current?.focus({ preventScroll: true });
  }, [fase, confirmando]);

  useEffect(() => {
    if (!tremor) return;
    const t = window.setTimeout(() => setTremor(false), 650);
    return () => window.clearTimeout(t);
  }, [tremor]);

  const alternarSom = (e: ReactMouseEvent) => {
    e.stopPropagation();
    const novo = !mudo;
    setMudo(novo);
    somRef.current?.setMudo(novo);
    if (!novo) somRef.current?.destravar();
    try {
      localStorage.setItem(CHAVE_SOM, novo ? "0" : "1");
    } catch {
      /* armazenamento indisponível: só não lembra a escolha */
    }
  };

  const fechar = (e: ReactMouseEvent) => {
    e.stopPropagation();
    onFechar();
  };

  const reiniciar = () => {
    if (simuladoEmAndamento) onReiniciar();
    else setConfirmando(true);
  };

  const on = (f: number) => (fase >= f ? " on" : "");
  const veredito = ok ? "VOCÊ PASSOU!" : "VOCÊ NÃO CONSEGUIU";
  const classes = [
    "fds-overlay",
    ok ? "fds-ok" : "fds-nok",
    fase >= F_VEREDITO ? "fds-veredito-on" : "",
    fase >= F_DETALHES ? "fds-detalhes-on" : "",
    pulou ? "fds-pulou" : "",
    fase < F_ACOES ? "fds-animando" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const overlay = (
    <div
      ref={raizRef}
      className={classes}
      role="dialog"
      aria-modal="true"
      aria-labelledby="fds-veredito"
      aria-describedby="fds-sub"
      tabIndex={-1}
      onPointerDown={() => somRef.current?.destravar()}
      onClick={() => pular()}
    >
      <div className="fds-fundo" aria-hidden="true" />
      <div className="fds-tinta" aria-hidden="true" />
      {!ok && <div className="fds-vinheta" aria-hidden="true" />}
      {!ok && <div className="fds-scan" aria-hidden="true" />}
      {!ok && (
        <svg className="fds-rachadura" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {RACHADURAS.map((d, i) => (
            <g key={i} style={{ "--i": i } as CSSProperties}>
              <path className="fds-racha-sombra" d={d} pathLength={1} />
              <path className="fds-racha-luz" d={d} pathLength={1} />
            </g>
          ))}
        </svg>
      )}
      <canvas ref={canvasRef} className="fds-canvas" aria-hidden="true" />
      <div className="fds-flash" aria-hidden="true" />

      <div className="fds-topo">
        <button
          type="button"
          className="fds-icone"
          onClick={alternarSom}
          aria-pressed={!mudo}
          aria-label={mudo ? "Ligar o som" : "Desligar o som"}
          title={mudo ? "Ligar o som" : "Desligar o som"}
        >
          {mudo ? "🔇" : "🔊"}
        </button>
        <button type="button" className="fds-icone" onClick={fechar} aria-label="Fechar e ver o relatório" title="Fechar (Esc)">
          ✕
        </button>
      </div>

      {porTempo && fase < F_CONTA && !pulou && (
        <div className={`fds-tempo${fase >= F_TITULO ? " fds-sai" : ""}`} aria-hidden="true">
          <span className="fds-tempo-texto">⏰ TEMPO ESGOTADO!</span>
        </div>
      )}

      <div className={`fds-conteudo${tremor ? " fds-tremor" : ""}`}>
        <div className="fds-grade">
          <div className="fds-estagio">
            <p className={`fds-kicker fds-sec${on(F_TITULO)}`}>Fim do simulado</p>

            <div className={`fds-anel fds-sec${on(F_TITULO)}`}>
              {ok && <div className="fds-raios" aria-hidden="true" />}
              <svg viewBox="-24 -24 248 248" aria-hidden="true">
                <circle className="fds-trilha" cx="100" cy="100" r={R} />
                <circle
                  ref={arcoRef}
                  className="fds-arco"
                  cx="100"
                  cy="100"
                  r={R}
                  transform="rotate(-90 100 100)"
                  style={{ strokeDasharray: CIRC, strokeDashoffset: CIRC * (1 - (total ? inicio / total : 0)) }}
                />
                {lacuna && <path className="fds-lacuna" d={lacuna} />}
                <g ref={pisoRef} className="fds-piso">
                  <line x1={marcaPiso[0].x} y1={marcaPiso[0].y} x2={marcaPiso[1].x} y2={marcaPiso[1].y} />
                  <text x={rotuloPiso.x} y={rotuloPiso.y} textAnchor="middle" dominantBaseline="middle">
                    piso {piso}
                  </text>
                </g>
              </svg>
              <div className="fds-anel-centro">
                <span ref={numRef} className="fds-num">
                  {inicio}
                </span>
                <span className="fds-de">de {total} acertos</span>
              </div>
            </div>

            <div className={`fds-veredito-caixa fds-sec${on(F_VEREDITO)}`}>
              {ok && <span className="fds-onda" aria-hidden="true" />}
              <h1
                id="fds-veredito"
                ref={vereditoRef}
                className={`fds-veredito ${ok ? "fds-ouro" : "fds-glitch"}`}
                data-text={veredito}
              >
                {ok ? <Letras texto={veredito} /> : veredito}
              </h1>
              <p id="fds-sub" className="fds-sub">
                {ok
                  ? `Passou do piso de ${piso} pontos (edital 9.18). Agora é subir no ranking da sua região.`
                  : `Faltaram ${faltam} ${faltam === 1 ? "ponto" : "pontos"} para o piso de ${piso}. Revise os erros e tente de novo.`}
              </p>
            </div>

            <div className={`fds-extra fds-sec${on(F_EXTRA)}`}>
              {ok ? (
                <>
                  <div ref={estrelasRef} className="fds-estrelas" role="img" aria-label={`${estrelas} de 3 estrelas`}>
                    {[0, 1, 2].map((i) => (
                      <span key={i} className={`fds-estrela${i < estrelas ? " ganhou" : ""}`} style={{ "--i": i } as CSSProperties}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="fds-proxima">
                    {estrelas < 3 ? `Próxima estrela: ${metas[estrelas]} acertos` : "Nível máximo: 3 estrelas!"}
                  </p>
                </>
              ) : (
                <div className="fds-falta">
                  <strong>−{faltam}</strong>
                  <span>
                    {faltam === 1 ? "ponto" : "pontos"} para
                    <br />
                    passar do piso
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="fds-painel">
            <div className={`fds-chips fds-sec${on(F_DETALHES)}`}>
              <div className="fds-chip fds-chip-ok" style={{ "--i": 0 } as CSSProperties}>
                <b>✔ {acertos}</b>
                <span>acertos</span>
              </div>
              <div className="fds-chip fds-chip-erro" style={{ "--i": 1 } as CSSProperties}>
                <b>✖ {erros}</b>
                <span>erros</span>
              </div>
              <div className="fds-chip" style={{ "--i": 2 } as CSSProperties}>
                <b>○ {resumo.branco}</b>
                <span>em branco</span>
              </div>
              <div className="fds-chip" style={{ "--i": 3 } as CSSProperties}>
                <b>⏱ {formatarRelogio(resultado.usadoMs)}</b>
                <span>{porTempo ? "tempo esgotado" : "tempo usado"}</span>
              </div>
            </div>

            <section ref={focoRef} className={`fds-foco fds-sec${on(F_DETALHES)}`} aria-labelledby="fds-foco-titulo">
              <h2 id="fds-foco-titulo">🎯 Foque aqui</h2>
              {foco.length > 0 ? (
                <>
                  <p>As matérias que mais custaram pontos neste simulado.</p>
                  <ol>
                    {foco.map((p, i) => {
                      const materia = SUBJECT_MAP[p.materia];
                      return (
                        <li
                          key={p.materia}
                          style={
                            {
                              "--cor": materia?.cor ?? "#4fa3e3",
                              "--pct": p.pct,
                              "--i": i,
                            } as CSSProperties
                          }
                        >
                          <span className="fds-foco-pos">{i + 1}</span>
                          <div className="fds-foco-info">
                            <div className="fds-foco-linha">
                              <strong>{materia?.nome ?? p.materia}</strong>
                              <span>
                                {p.acertos}/{p.total} · {Math.round(p.pct * 100)}%
                              </span>
                            </div>
                            <div className="fds-foco-barra">
                              <i />
                            </div>
                          </div>
                          <span className="fds-foco-perda" title={`${p.perdidas} pontos perdidos (erradas + em branco)`}>
                            −{p.perdidas}
                            <small>pts</small>
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                </>
              ) : (
                <p className="fds-gabaritou">Gabaritou! Nenhuma matéria para reforçar.</p>
              )}
            </section>
          </div>

          <div className={`fds-acoes fds-sec${on(F_ACOES)}`}>
            {confirmando ? (
              <div className="fds-confirma" role="group" aria-label="Confirmar novo simulado">
                <p>
                  <strong>Começar um simulado novo agora?</strong>
                  <br />O cronômetro de 5h começa na hora.
                </p>
                <div className="fds-confirma-botoes">
                  <button type="button" className="botao botao-ouro" autoFocus onClick={onReiniciar}>
                    Sim, começar
                  </button>
                  <button type="button" className="botao" onClick={() => setConfirmando(false)}>
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <button type="button" ref={principalRef} className="fds-acao fds-acao-principal" onClick={reiniciar}>
                  <span className="fds-acao-icone" aria-hidden="true">
                    {simuladoEmAndamento ? "▶" : "↻"}
                  </span>
                  <span className="fds-acao-texto">
                    <strong>{simuladoEmAndamento ? "Retomar simulado" : "Reiniciar simulado"}</strong>
                    <small>{simuladoEmAndamento ? "Há um simulado em andamento" : "Novo simulado de 5h"}</small>
                  </span>
                </button>
                <button type="button" className="fds-acao fds-acao-erro" disabled={erros === 0} onClick={onRevisarErradas}>
                  <span className="fds-acao-icone" aria-hidden="true">
                    ✖
                  </span>
                  <span className="fds-acao-texto">
                    <strong>Revisar erradas</strong>
                    <small>{erros === 0 ? "Nenhuma errada" : `${erros} ${erros === 1 ? "questão" : "questões"}`}</small>
                  </span>
                </button>
                <button type="button" className="fds-acao fds-acao-ok" disabled={acertos === 0} onClick={onVerCertas}>
                  <span className="fds-acao-icone" aria-hidden="true">
                    ✔
                  </span>
                  <span className="fds-acao-texto">
                    <strong>Ver acertos</strong>
                    <small>{acertos === 0 ? "Nenhum acerto" : `${acertos} ${acertos === 1 ? "questão" : "questões"}`}</small>
                  </span>
                </button>
                <button type="button" className="fds-acao" onClick={onFechar}>
                  <span className="fds-acao-icone" aria-hidden="true">
                    📋
                  </span>
                  <span className="fds-acao-texto">
                    <strong>Relatório completo</strong>
                    <small>Desempate, tempo e confiança</small>
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {fase < F_ACOES && (
        <div className="fds-pular" aria-hidden="true">
          <span className="fds-pular-toque">toque para pular ▸▸</span>
          <span className="fds-pular-clique">clique ou Enter para pular ▸▸</span>
        </div>
      )}
    </div>
  );

  return createPortal(overlay, document.body);
}
