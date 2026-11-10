import { useState, type FormEvent } from "react";
import { Icon } from "./App";
import { supabase } from "./supabase";

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  setLoading(true);
  setError("");
  setSuccess("");

  try {
    if (isSignUp) {
      if (!fullName.trim()) {
        setError("Please enter your full name.");
        return;
      }

      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
      } else {
        setSuccess(
          "Registration submitted! If email verification is required, check your inbox before signing in."
        );
      }
    } else {
      const { error: signInError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (signInError) {
        setError(signInError.message);
      }
    }
  } catch {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
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
          <span>Explore CareFlex with fictional sample medical records.</span>
        </div>
      </aside>

      <main className="signin-main">
        <form className="signin-card" onSubmit={handleSubmit}>
          <p className="eyebrow">CAREFLEX DEMO</p>
          <h2>{isSignUp ? "Create your account" : "Sign in to CareFlex"}</h2>
          <p className="flow-lead">
            {isSignUp
              ? "Create your account to explore CareFlex with preloaded sample medical information."
              : "Welcome back! Sign in to continue your CareFlex demo experience."}
          </p>

          {isSignUp && (
          <>
            <label className="message-label" htmlFor="signup-name">
              Full Name
            </label>

            <input
              id="signup-name"
              className="signin-input"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              required={isSignUp}
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </>
        )}

          <label className="message-label" htmlFor="signin-email">Email</label>
          <input id="signin-email" className="signin-input" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />

          <label className="message-label" htmlFor="signin-password">Password</label>
          <input id="signin-password" className="signin-input" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} />

          {error && <p className="signin-error" role="alert">{error}</p>}
          {success && (
          <p role="status" style={{ color: "#15803d", marginTop: "12px" }}>
            {success}
          </p>
        )}

          <button className="primary-button full" type="submit" disabled={loading}>
          {loading
            ? (isSignUp ? "Creating account..." : "Signing in...")
            : (isSignUp ? "Create Account" : "Sign In")}
        </button>

          <p style={{ textAlign: "center", marginTop: "16px" }}>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          {" "}
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError("");
            }}
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              cursor: "pointer",
              background: "none",
              border: "none"
            }}
          >
            {isSignUp ? "Sign In" : "Create Account"}
          </button>
        </p>
      
          {!isSignUp && (
          <div className="note-box signin-demo">
            <strong>Demo login</strong>
            <p>
              Email: test@patient.com
              <br />
              Password: testpatient
            </p>
          </div>
)}
        </form>
      </main>
    </div>
  );
}
