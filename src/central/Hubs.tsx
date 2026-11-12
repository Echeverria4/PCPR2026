import { lazy, Suspense, useMemo, type ReactNode } from "react";
import { BRASOES } from "../components/Cursos";
import type { CursoId } from "../data/cursos";
import { lerProgresso as lerProgressoMapas } from "../prf/cursos/completo/prf-policial/mapas/progresso";
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
import { CartaoMapa, escolherMapas, lerMateriaMemorizar, useMapas } from "./comum";
import { grupoDaAula, montarPainel, nomeMateriaPol } from "./dados";

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

export function Mapas({ onAbrir }: HubProps) {
  const mapas = useMapas();
  const painel = useMemo(() => montarPainel(Date.now()), []);
  const revisados = useMemo(() => lerProgressoMapas().revisados, []);

  const materias = useMemo(() => {
    const m = new Map<string, { grupo: string; nome: string; total: number; revisados: number }>();
    for (const mapa of mapas ?? []) {
      const grupo = grupoDaAula(mapa.aula);
      const atual = m.get(grupo) ?? { grupo, nome: nomeMateriaPol(grupo), total: 0, revisados: 0 };
      atual.total++;
      if (revisados[mapa.aula]) atual.revisados++;
      m.set(grupo, atual);
    }
    return [...m.values()];
  }, [mapas, revisados]);

  // Mesma escolha de matéria do "Para memorizar hoje" do Início.
  const { doDia } = useMemo(() => escolherMapas(mapas, painel, lerMateriaMemorizar()), [mapas, painel]);
  const totalRevisados = materias.reduce((s, m) => s + m.revisados, 0);

  return (
    <div className="cx-hubs">
      <p className="cx-intro">
        Um mapa por aula, com o essencial em ramos, um macete e a pegadinha mais comum. Marque como revisado dentro do
        curso para acompanhar aqui.
      </p>

      <CartaoCurso
        curso="prf-policial"
        titulo="PRF Policial"
        sub={mapas ? `${n(mapas.length)} mapas em ${materias.length} matérias` : "Carregando os mapas…"}
        acoes={
          <button type="button" className="botao botao-ouro" onClick={() => onAbrir("prf-policial", { aba: "mapas" })}>
            Abrir os mapas →
          </button>
        }
      >
        {mapas && <Progresso feitos={totalRevisados} total={mapas.length} rotulo="revisados" />}
        {materias.length > 0 && (
          <ul className="cx-chips" aria-label="Matérias com mapas">
            {materias.map((m) => (
              <li key={m.grupo}>
                <button type="button" onClick={() => onAbrir("prf-policial", { aba: "mapas", grupo: m.grupo })}>
                  <span>{m.nome}</span>
                  <span className="cx-chip-n">
                    {m.revisados > 0 ? `${m.revisados}/${m.total}` : m.total}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </CartaoCurso>

      {doDia && (
        <CartaoMapa
          mapa={doDia}
          materia={nomeMateriaPol(grupoDaAula(doDia.aula))}
          rotulo="🧠 Mapa do dia"
          onAbrir={() => onAbrir("prf-policial", { aba: "mapas", mapa: doDia.aula })}
        />
      )}

      <section className="cx-card cx-aviso">
        <h2 className="cx-card-titulo">Outros cursos</h2>
        <p>
          PRF ADM, PF, PMPR e Banco do Brasil vão usar os mesmos mapas quando o assunto for igual, junto com o banco por
          tema.
        </p>
      </section>
    </div>
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
