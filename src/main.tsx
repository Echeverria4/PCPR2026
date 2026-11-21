import React from "react";
import ReactDOM from "react-dom/client";
import Raiz from "./Raiz";
import ProtecaoErros from "./ProtecaoErros";
import "./styles.css";
import { limpezasUnicas, separarRepetidas } from "./prf/cursos/completo/armazenamento";

limpezasUnicas();
// Só a primeira resposta de cada questão conta na quantidade e no percentual (pedido de 20/11/26).
separarRepetidas("prf-policial");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProtecaoErros>
      <Raiz />
    </ProtecaoErros>
  </React.StrictMode>,
);
