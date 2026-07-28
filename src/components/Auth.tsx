import { useState, type FormEvent } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

interface AuthProps {
  onAutenticado: () => void;
}

export default function Auth({ onAutenticado }: AuthProps) {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  if (!isSupabaseConfigured || !supabase) {
    return (
      <div className="auth-card">
        <h2>Sincronização indisponível</h2>
        <p className="auth-aviso">
          As variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY não estão configuradas neste
          ambiente. Seu progresso continua sendo salvo neste dispositivo (localStorage).
        </p>
      </div>
    );
  }

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    setCarregando(true);
    try {
      const { error } =
        modo === "login"
          ? await supabase!.auth.signInWithPassword({ email, password: senha })
          : await supabase!.auth.signUp({ email, password: senha });
      if (error) {
        setErro(error.message);
        return;
      }
      onAutenticado();
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="auth-card">
      <h2>{modo === "login" ? "Entrar" : "Criar conta"}</h2>
      <form onSubmit={enviar}>
        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            required
            minLength={6}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            autoComplete={modo === "login" ? "current-password" : "new-password"}
          />
        </div>
        {erro && <div className="auth-erro">{erro}</div>}
        <button className="botao botao-ouro" type="submit" disabled={carregando} style={{ width: "100%" }}>
          {carregando ? "Enviando..." : modo === "login" ? "Entrar" : "Criar conta"}
        </button>
      </form>
      <p className="auth-aviso">
        {modo === "login" ? "Ainda não tem conta? " : "Já tem conta? "}
        <a href="#" onClick={(e) => { e.preventDefault(); setModo(modo === "login" ? "cadastro" : "login"); setErro(null); }}>
          {modo === "login" ? "Criar uma agora" : "Entrar"}
        </a>
        . A sincronização é opcional — sem login, o progresso fica salvo apenas neste dispositivo.
      </p>
    </div>
  );
}
