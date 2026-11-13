import { lazy, Suspense, useMemo, type ReactNode } from "react";
import { BRASOES } from "../components/Cursos";
import type { CursoId } from "../data/cursos";
import {
  contaFeitas as feitasPol,
  lerProgresso as lerRedacaoPol,
  TOTAL_TEMAS as TEMAS_POL,
} from "../prf/cursos/completo/prf-policial/redacao/progresso";
import {
  contaFeitas as feitasPmpr,
  lerProgressoRedacao,
  TOTAL_TEMAS as TEMAS_PMPR,
} from "../prf/portugues/redacao/progressoRedacao";
import type { AbrirCurso } from "./Central";

interface HubProps {
  onAbrir: AbrirCurso;
}

const n = (v: number) => v.toLocaleString("pt-BR");

function Brasao({ curso }: { curso: CursoId }) {
  const src = BRASOES[curso];
  return src ? <img className="cx-hub-brasao" src={src} alt="" aria-hidden="true" /> : null;
}

function Progresso({ feitos, total, rotulo }: { feitos: number; total: number; rotulo: string }) {
  const p = total > 0 ? Math.min(100, (feitos / total) * 100) : 0;
  return (
    <div className="cx-hub-progresso">
      <div
        className="cx-kpi-barra"
        role="progressbar"
        aria-label={rotulo}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={feitos}
      >
        <span style={{ width: `${p}%` }} />
      </div>
      <span>
        {n(feitos)} de {n(total)} {rotulo}
      </span>
    </div>
  );
}

function CartaoCurso({
  curso,
  titulo,
  sub,
  children,
  acoes,
  apagado,
}: {
  curso: CursoId;
  titulo: string;
  sub?: string;
  children: ReactNode;
  acoes: ReactNode;
  apagado?: boolean;
}) {
  return (
    <section className={`cx-card cx-hub${apagado ? " cx-hub-apagado" : ""}`}>
      <div className="cx-hub-topo">
        <Brasao curso={curso} />
        <div>
          <h2 className="cx-card-titulo">{titulo}</h2>
          {sub && <p className="cx-hub-sub">{sub}</p>}
        </div>
      </div>
      {children}
      <div className="cx-card-acoes">{acoes}</div>
    </section>
  );
}

// ---------- Questões ----------

/** Matéria → conteúdo → iniciar, com as questões de todos os cursos juntas (o banco vem à parte, só nesta seção). */
const TreinoUnido = lazy(() => import("./TreinoUnido"));

export function Questoes(_props: HubProps) {
  return (
    <Suspense fallback={<p className="cx-vazio">Carregando as questões…</p>}>
      <TreinoUnido />
    </Suspense>
  );
}

// ---------- Mapas Mentais ----------

/** Matéria → mapa → o mapa aberto ali mesmo, sem entrar no curso (os mapas vêm à parte, só nesta seção). */
const MapasCentral = lazy(() => import("./MapasCentral"));

export function Mapas({ onAbrir }: HubProps) {
  return (
    <Suspense fallback={<p className="cx-vazio">Carregando os mapas…</p>}>
      <MapasCentral onAbrir={onAbrir} />
    </Suspense>
  );
}

// ---------- Redações ----------

export function Redacoes({ onAbrir }: HubProps) {
  const { pol, pmpr } = useMemo(() => ({ pol: lerRedacaoPol(), pmpr: lerProgressoRedacao() }), []);
  const feitasP = feitasPol(pol);
  const feitasM = feitasPmpr(pmpr);

  return (
    <div className="cx-hubs">
      <p className="cx-intro">
        Um tema por semana, no passo a passo: planejar, escrever à mão, conferir com o modelo e se avaliar pelos critérios
        da banca.
      </p>

      <div className="cx-grade">
        <CartaoCurso
          curso="prf-policial"
          titulo="Discursiva Cebraspe · PRF Policial"
          sub={`${TEMAS_POL} temas + Redação Oficial (Manual da Presidência)`}
          acoes={
            <button type="button" className="botao botao-ouro" onClick={() => onAbrir("prf-policial", { aba: "redacao" })}>
              {pol.atual ? `Continuar o tema ${pol.atual} →` : "Abrir a redação →"}
            </button>
          }
        >
          <Progresso feitos={feitasP} total={TEMAS_POL} rotulo="temas feitos" />
          <p className="cx-hub-nota">
            {pol.oficialLido ? "Redação Oficial: guia lido ✓" : "Redação Oficial: guia do Manual ainda por ver."}
          </p>
        </CartaoCurso>

        <CartaoCurso
          curso="pmpr"
          titulo="Redação PMPR Soldado 2027"
          sub={`${TEMAS_PMPR} temas · fica no Português Inteligente da PRF ADM`}
          acoes={
            <button
              type="button"
              className="botao botao-ouro"
              onClick={() => onAbrir("prf-adm", { aba: "portugues", tela: "redacao" })}
            >
              {pmpr.atual ? `Continuar o tema ${pmpr.atual} →` : "Abrir a redação →"}
            </button>
          }
        >
          <Progresso feitos={feitasM} total={TEMAS_PMPR} rotulo="temas feitos" />
          <p className="cx-hub-nota">{pmpr.guiaLido ? "Guia da redação lido ✓" : "Comece pelo guia: ele explica a nota."}</p>
        </CartaoCurso>
      </div>
    </div>
  );
}
