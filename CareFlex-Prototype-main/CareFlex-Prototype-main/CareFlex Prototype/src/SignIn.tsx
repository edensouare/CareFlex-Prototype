import { useState, type FormEvent } from "react";
import { Icon } from "./App";
import { supabase } from "./supabase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <div className="signin-shell">
      <aside className="signin-brand">
        <div className="brand">
          <span className="brand-mark"><span></span><span></span></span>
          <span>CareFlex</span>
        </div>
        <div className="signin-pitch">
          <h1>Your care, in plain language.</h1>
          <p>Track lab tests, review visit summaries, and stay connected with your care team.</p>
        </div>
        <div className="privacy-note">
          <Icon name="shield" size={17} />
          <span>Your health data is private and protected.</span>
        </div>
      </aside>

      <main className="signin-main">
        <form className="signin-card" onSubmit={handleSubmit}>
          <p className="eyebrow">PATIENT PORTAL</p>
          <h2>Sign in to CareFlex</h2>
          <p className="flow-lead">Welcome back. Enter your details to continue.</p>

          <label className="message-label" htmlFor="signin-email">Email</label>
          <input id="signin-email" className="signin-input" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />

          <label className="message-label" htmlFor="signin-password">Password</label>
          <input id="signin-password" className="signin-input" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} />

          {error && <p className="signin-error" role="alert">{error}</p>}

          <button className="primary-button full" type="submit" disabled={loading}>{loading ? "Signing in…" : "Sign in"}</button>

          <div className="note-box signin-demo">
            <strong>Demo login</strong>
            <p>Email: test@patient.com<br />Password: testpatient</p>
          </div>
        </form>
      </main>
    </div>
  );
}
