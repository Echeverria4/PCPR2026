import React from "react";
import ReactDOM from "react-dom/client";
import Raiz from "./Raiz";
import "./styles.css";
import { limpezasUnicas } from "./prf/cursos/completo/armazenamento";

limpezasUnicas();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Raiz />
  </React.StrictMode>,
);
