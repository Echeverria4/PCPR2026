import { lazy, Suspense, useEffect, useState } from "react";
import bbLogo from "../../assets/bb-logo.png";
import pfBrasao from "../../assets/pf-brasao.png";
import pmprBrasao from "../../assets/pmpr-brasao.png";
import prfBrasao from "../../assets/prf-brasao.png";
import { CURSOS, type CursoId } from "../../data/cursos";
import type { TelaAulas } from "../aulas/AulasCurso";
import { ComCatalogo, type Catalogo } from "../aulas/catalogo";
import type { GrupoCurso } from "../aulas/tipos";
import type { DadosCursoCompleto } from "./completo/tipos";
import LayoutCurso, { type AbaCurso } from "./LayoutCurso";

// Telas e lista das aulas só baixam ao abrir o curso, e cada curso só baixa as aulas dele.
const AulasCurso = lazy(() => import("../aulas/AulasCurso"));
const SemanaCurso = lazy(() => import("./SemanaCurso"));
const CursoCompleto = lazy(() => import("./completo/CursoCompleto"));

interface CursoSoAulas {
  /** Nome curto, no título do caderno. */
  curto: string;
  brasao: string;
  brasaoAlt: string;
  aulas: () => Promise<{ GRUPOS: GrupoCurso[] }>;
  /** Curso completo: banco de questões e resumos, além das aulas. */
  completo?: () => Promise<{ DADOS: DadosCursoCompleto }>;
}

const CURSOS_SO_AULAS: Partial<Record<CursoId, CursoSoAulas>> = {
  pmpr: {
    curto: "PMPR",
    brasao: pmprBrasao,
    brasaoAlt: "Brasão da Polícia Militar do Paraná",
    aulas: () => import("./dados/pmpr"),
  },
  "prf-policial": {
    curto: "PRF Policial",
    brasao: prfBrasao,
    brasaoAlt: "Brasão da Polícia Rodoviária Federal",
    aulas: () => import("./dados/prf-policial"),
    completo: () => import("./completo/prf-policial"),
  },
  "pf-agente": {
    curto: "PF Agente",
    brasao: pfBrasao,
    brasaoAlt: "Brasão da Polícia Federal",
    aulas: () => import("./dados/pf-agente"),
  },
  "banco-brasil": {
    curto: "Banco do Brasil",
    brasao: bbLogo,
    brasaoAlt: "Símbolo do Banco do Brasil",
    aulas: () => import("./dados/banco-brasil"),
  },
};

const nomeDoCurso = (id: CursoId) => CURSOS.find((c) => c.id === id)?.nome ?? id;

function catalogoDe(id: CursoId, curto: string, grupos: GrupoCurso[]): Catalogo {
  const nome = nomeDoCurso(id);
  const chave = (parte: string) => `curso:${id}:${parte}:v1`;
  return {
    id,
    nome,
    grupos,
    chaves: { estudo: chave("estudo"), meta: chave("meta"), caderno: chave("caderno"), semana: chave("semana") },
    comecoEstudo: 0,
    comecoMeta: null,
    caderno: {
      tag: `caderno-${id}`,
      titulo: `Caderno ${curto}`,
      cabecalho: `Caderno · ${nome}`,
      arquivo: `caderno-${id}`,
    },
  };
}

interface AppCursoProps {
  curso: CursoId;
  onTrocarCurso?: () => void;
}

/** Os cursos além da PRF ADM: vídeos, PDFs, cronômetro, meta, caderno e semana; o curso completo soma questões e resumos. */
export default function AppCurso({ curso, onTrocarCurso }: AppCursoProps) {
  const dados = CURSOS_SO_AULAS[curso];
  const [catalogo, setCatalogo] = useState<Catalogo | null>(null);
  const [completo, setCompleto] = useState<DadosCursoCompleto | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!dados) return;
    let vivo = true;
    Promise.all([dados.aulas(), dados.completo?.()])
      .then(([m, c]) => {
        if (!vivo) return;
        setCompleto(c?.DADOS ?? null);
        setCatalogo(catalogoDe(curso, dados.curto, m.GRUPOS));
      })
      .catch(() => {
        if (vivo) setErro(true);
      });
    return () => {
      vivo = false;
    };
  }, [curso, dados]);

  if (!dados || erro) return <div className="vazio">Não foi possível carregar o curso. Recarregue a página.</div>;
  if (!catalogo) return <div className="vazio">Carregando o curso…</div>;
  return (
    <ComCatalogo catalogo={catalogo}>
      {completo ? (
        <Suspense fallback={<div className="vazio">Carregando o curso…</div>}>
          <CursoCompleto
            curso={curso}
            nome={catalogo.nome}
            brasao={dados.brasao}
            brasaoAlt={dados.brasaoAlt}
            dados={completo}
            onTrocarCurso={onTrocarCurso}
          />
        </Suspense>
      ) : (
        <TelasCurso nome={catalogo.nome} dados={dados} onTrocarCurso={onTrocarCurso} />
      )}
    </ComCatalogo>
  );
}

interface TelasCursoProps {
  nome: string;
  dados: CursoSoAulas;
  onTrocarCurso?: () => void;
}

function TelasCurso({ nome, dados, onTrocarCurso }: TelasCursoProps) {
  const [aba, setAba] = useState<AbaCurso>("aulas");
  const [telaAulas, setTelaAulas] = useState<TelaAulas>({});
  /** Segunda-feira da semana aberta; null = esta semana. */
  const [semanaAberta, setSemanaAberta] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [aba]);

  function trocarAba(nova: AbaCurso) {
    // Tocar de novo na aba das aulas volta para a lista das matérias; na da semana, para a semana atual.
    if (nova === "aulas" && aba === "aulas") setTelaAulas({});
    if (nova === "semana" && aba === "semana") setSemanaAberta(null);
    setAba(nova);
  }

  function abrirAula(tela: TelaAulas) {
    setTelaAulas(tela);
    setAba("aulas");
  }

  return (
    <LayoutCurso
      nome={nome}
      brasao={dados.brasao}
      brasaoAlt={dados.brasaoAlt}
      abaAtiva={aba}
      onTrocarAba={trocarAba}
      onTrocarCurso={onTrocarCurso}
    >
      {aba === "aulas" && (
        <Suspense fallback={<div className="vazio">Carregando as aulas…</div>}>
          <AulasCurso tela={telaAulas} onTela={setTelaAulas} />
        </Suspense>
      )}
      {aba === "semana" && (
        <Suspense fallback={<div className="vazio">Carregando o acompanhamento…</div>}>
          <SemanaCurso inicio={semanaAberta} onInicio={setSemanaAberta} onAbrirAula={abrirAula} />
        </Suspense>
      )}
    </LayoutCurso>
  );
}
