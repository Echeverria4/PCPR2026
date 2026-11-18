import { createContext, useContext, type ReactNode } from "react";
import { ICONES } from "./lista";

/**
 * Ícones 3D (Fluent Emoji, da Microsoft, licença MIT: public/icones/LICENSE-fluent-emoji.txt) no lugar dos emojis
 * do sistema, iguais em qualquer aparelho. Só valem dentro de <IconesNovos> (Central e cursos novos): a PRF ADM e
 * a PCPR seguem com os emojis de antes, porque nelas não se mexe.
 * A pasta tem versão no nome porque o navegador guarda os arquivos por um ano: trocar um ícone pede pasta nova.
 */
const PASTA = "/icones/f3d-1/";

const Ligado = createContext(false);

export function IconesNovos({ children }: { children: ReactNode }) {
  return <Ligado.Provider value>{children}</Ligado.Provider>;
}

/** Nome do arquivo do emoji (pontos de código em hexadecimal, sem FE0F), ou null se não houver ícone para ele. */
export function arquivoEmoji(e: string): string | null {
  const nome = Array.from(e)
    .filter((c) => c !== "️")
    .map((c) => c.codePointAt(0)!.toString(16))
    .join("-");
  return ICONES.has(nome) ? nome : null;
}

/** Um emoji como ícone. O tamanho segue a letra do lugar onde está (1,2 em). */
export function Emoji({ e, className }: { e: string; className?: string }) {
  const nome = useContext(Ligado) ? arquivoEmoji(e) : null;
  if (!nome) return <>{e}</>;
  return (
    <img
      className={className ? `emoji ${className}` : "emoji"}
      src={`${PASTA}${nome}.webp`}
      alt=""
      draggable={false}
      loading="lazy"
      decoding="async"
    />
  );
}

/** Emojis num texto: sequências com modificador, ZWJ, teclas (#️⃣) e bandeiras contam como um só. */
const EMOJIS =
  /(\p{Extended_Pictographic}(?:️|⃣|\p{Emoji_Modifier}|‍\p{Extended_Pictographic}️?)*|[#*0-9]️?⃣|\p{Regional_Indicator}{2})/u;

/** Texto com os emojis trocados pelos ícones ("🎬 Aulas"). Fora de <IconesNovos>, o texto sai igual. */
export function TextoEmoji({ texto }: { texto: string }) {
  const ligado = useContext(Ligado);
  if (!ligado) return <>{texto}</>;
  const partes = texto.split(new RegExp(EMOJIS.source, "gu"));
  if (partes.length === 1) return <>{texto}</>;
  return <>{partes.map((p, i) => (i % 2 ? <Emoji key={i} e={p} /> : p))}</>;
}
