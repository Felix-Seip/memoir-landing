"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0D0D0F", color: "#F0EDE8", overflowX: "hidden", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>

      {/* Ambient blobs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,106,158,0.18) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "30%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,168,130,0.14) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,158,138,0.12) 0%, transparent 70%)" }} />
      </div>

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 32px", maxWidth: 1152, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #9B87B8, #C8A882)" }} />
          <span style={{ fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B87B8", fontWeight: 300 }}>memoir</span>
        </div>
        <a href="#waitlist" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A882", border: "1px solid rgba(200,168,130,0.3)", padding: "8px 20px", textDecoration: "none", transition: "background 0.3s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(200,168,130,0.1)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          Join Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section
        ref={heroRef}
        style={{ position: "relative", zIndex: 10, minHeight: "90vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center", transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div style={{ marginBottom: 32 }}>
          <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#9B87B8", border: "1px solid rgba(155,135,184,0.3)", padding: "8px 16px" }}>
            Your life, remembered
          </span>
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 7vw, 6.5rem)", lineHeight: 0.95, fontWeight: 300, marginBottom: 32, maxWidth: 900 }}>
          <span style={{ display: "block", color: "#F0EDE8" }}>What if you</span>
          <span style={{ display: "block", fontStyle: "italic", color: "#C8A882" }}>actually remembered</span>
          <span style={{ display: "block", color: "#F0EDE8" }}>this year?</span>
        </h1>

        <p style={{ color: "#A09890", fontSize: 18, maxWidth: 520, lineHeight: 1.7, marginBottom: 48, fontWeight: 300 }}>
          You&apos;ve tried journaling. You quit. We all do.<br />
          Memoir makes it feel less like a chore — and more like building something worth keeping.
        </p>

        <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#F0EDE8", color: "#0D0D0F", padding: "16px 32px", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.4s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#C8A882")}
          onMouseLeave={e => (e.currentTarget.style.background = "#F0EDE8")}
        >
          Get Early Access →
        </a>
        <p style={{ marginTop: 20, color: "#5A5550", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Free · No credit card</p>
      </section>

      {/* Stats */}
      <section style={{ position: "relative", zIndex: 10, padding: "80px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "#2A2520" }}>
          {[
            { number: "4×", label: "Average times people try journaling before giving up", color: "#9B87B8" },
            { number: "3 wks", label: "How long the habit lasts before the blank page wins", color: "#C8A882" },
            { number: "0", label: "Journal apps that actually make it feel fun", color: "#7C9E8A" },
          ].map((stat, i) => (
            <div key={i} style={{ background: "#0D0D0F", padding: "40px", display: "flex", flexDirection: "column", gap: 16 }}>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 52, fontWeight: 300, color: stat.color, lineHeight: 1 }}>{stat.number}</span>
              <p style={{ color: "#6A6460", fontSize: 14, lineHeight: 1.6 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ position: "relative", zIndex: 10, padding: "80px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#9B87B8", marginBottom: 16 }}>How it works</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, color: "#F0EDE8" }}>
              Speak. Remember. <em style={{ color: "#C8A882" }}>Relive.</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              { step: "01", title: "30 seconds a day", desc: "No blank pages. Open the app, speak your highlight of the day. Done. The AI handles the rest — transcribing, structuring, tagging.", accent: "#9B87B8" },
              { step: "02", title: "Build your streak", desc: "Flexible goals — journal 3x a week, not necessarily every day. Streaks that feel encouraging, not punishing. Miss a day? Life happens.", accent: "#C8A882" },
              { step: "03", title: "Watch your life take shape", desc: "After a few months, you have a searchable archive of your life. At the end of the year, get your personal highlight reel — the moments that made you.", accent: "#7C9E8A" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 48, alignItems: "flex-start", background: "#111113", padding: "40px", borderLeft: `2px solid ${item.accent}40` }}>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 48, fontWeight: 300, color: item.accent + "40", lineHeight: 1, flexShrink: 0 }}>{item.step}</span>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 300, color: item.accent, marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ color: "#6A6460", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ position: "relative", zIndex: 10, padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 2.2rem)", color: "#C8A882", fontStyle: "italic", fontWeight: 300, lineHeight: 1.5, marginBottom: 24 }}>
            &ldquo;I always start strong for like the first week or two, then one day I skip it, and suddenly the blank page feels even more intimidating. Before I know it I&apos;ve quietly stopped.&rdquo;
          </p>
          <p style={{ color: "#5A5550", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>— r/ADHD</p>
        </div>
      </section>

      {/* Features */}
      <section style={{ position: "relative", zIndex: 10, padding: "80px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "#1E1C1A" }}>
          {[
            { icon: "🎙", title: "Voice-first", desc: "Tap and speak. 30 seconds while walking to the gym. AI turns it into a structured entry." },
            { icon: "🔥", title: "Flexible streaks", desc: "Set your own goal — 3x a week, 5x a week. Streaks built for real life, not perfection." },
            { icon: "✨", title: "Highlight reel", desc: "Your year, retold. A beautiful summary of the moments, moods, and milestones you captured." },
            { icon: "🔍", title: "Search your life", desc: "\"What was I doing in March?\" Ask your journal anything. Find any memory instantly." },
          ].map((f, i) => (
            <div key={i} style={{ background: "#0D0D0F", padding: "40px" }}>
              <span style={{ fontSize: 28, marginBottom: 20, display: "block" }}>{f.icon}</span>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, color: "#F0EDE8", marginBottom: 12, fontWeight: 300 }}>{f.title}</h3>
              <p style={{ color: "#6A6460", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" style={{ position: "relative", zIndex: 10, padding: "100px 24px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#9B87B8", marginBottom: 24 }}>Early access</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, marginBottom: 24, color: "#F0EDE8" }}>
            Be first to <em style={{ color: "#C8A882" }}>remember</em>
          </h2>
          <p style={{ color: "#6A6460", marginBottom: 48, lineHeight: 1.7 }}>
            Join the waitlist. We&apos;ll let you know when Memoir is ready — and you&apos;ll get founding member access.
          </p>

          {submitted ? (
            <div style={{ border: "1px solid rgba(124,158,138,0.4)", background: "rgba(124,158,138,0.05)", padding: "40px" }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>✓</div>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, color: "#7C9E8A", marginBottom: 8 }}>You&apos;re on the list.</p>
              <p style={{ color: "#5A5550", fontSize: 14 }}>We&apos;ll reach out when it&apos;s ready.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: 1 }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{ flex: 1, background: "#161618", border: "1px solid #2A2520", padding: "16px 20px", color: "#F0EDE8", fontSize: 14, outline: "none", fontFamily: "inherit" }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{ background: "#9B87B8", color: "#0D0D0F", padding: "16px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", border: "none", cursor: "pointer", fontWeight: 500, opacity: loading ? 0.5 : 1, transition: "background 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#C8A882")}
                onMouseLeave={e => (e.currentTarget.style.background = "#9B87B8")}
              >
                {loading ? "..." : "Join"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 10, borderTop: "1px solid #1E1C1A", padding: "40px 32px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "linear-gradient(135deg, #9B87B8, #C8A882)", opacity: 0.7 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3A3530" }}>memoir</span>
          </div>
          <p style={{ color: "#3A3530", fontSize: 12 }}>© 2025 · Your life deserves to be remembered</p>
        </div>
      </footer>
    </main>
  );
}
