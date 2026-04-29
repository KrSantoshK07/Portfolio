// Hero — sells like a product, not "Hi I am"
const Hero = () => {
  const [time, setTime] = React.useState(() => formatTime());
  React.useEffect(() => {
    const t = setInterval(() => setTime(formatTime()), 30_000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" style={{ paddingTop: 140, paddingBottom: 60, position: "relative" }}>
      <div className="container">
        {/* Status bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 56, gap: 24, flexWrap: "wrap",
        }}>
          <div className="eyebrow">
            Available for senior frontend &amp; fullstack roles
          </div>
          <div className="micro" style={{ color: "var(--ink-3)" }}>
            Pune, IN · {time} IST · v3.4 yrs
          </div>
        </div>

        {/* Big headline */}
        <h1 className="h1">
          I ship <em>real-time</em><br />
          systems that<br />
          <span style={{ position: "relative", display: "inline-block" }}>
            don&rsquo;t buckle
            <Underline />
          </span>{" "}
          <em>under load.</em>
        </h1>

        <p className="lead" style={{ marginTop: 36 }}>
          I&rsquo;m <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Santosh Kumar</strong> — a fullstack engineer
          working across Angular, Node, and Postgres. For 3.4 years I&rsquo;ve been the person teams call when the
          dashboard freezes at 10k rows, when search returns nothing for typos, when WebSockets silently drop, when
          the auth flow is leaking 40% of logins. I find the bottleneck. I fix it. The metric moves.
        </p>

        {/* CTA row */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 12,
          marginTop: 40, alignItems: "center",
        }}>
          <a href="#impact" onClick={(e) => { e.preventDefault(); document.getElementById('impact').scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
            style={ctaPrimary}>
            See the impact <ArrowRight size={16} />
          </a>
          <a href="mailto:krrsantosh0@gmail.com" style={ctaGhost}>
            <Mail size={14} /> krrsantosh0@gmail.com
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={ctaGhost}>
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>

        {/* Strip of headline metrics */}
        <div style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}>
          {METRICS.map((m, i) => (
            <MetricCell key={i} {...m} isLast={i === METRICS.length - 1} />
          ))}
        </div>

        {/* Tech credit row */}
        <div style={{
          marginTop: 32,
          display: "flex", alignItems: "center", gap: 24,
          flexWrap: "wrap",
        }}>
          <div className="micro">Working in production with</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Angular 15+", "TypeScript", "Node.js", "PostgreSQL", "Socket.IO", "GraphQL", "MongoDB", "Azure"].map(t => (
              <span key={t} style={{
                fontSize: 12, padding: "4px 10px",
                borderRadius: 999,
                border: "1px solid var(--line)",
                color: "var(--ink-2)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "-0.01em",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const METRICS = [
  { value: "30%", label: "faster Angular load", sub: "lazy-loading + parallel APIs" },
  { value: "40%", label: "fewer login failures", sub: "JWT + OAuth 2.0 hardening" },
  { value: "30%", label: "faster DB queries", sub: "10+ Postgres functions" },
  { value: "90%", label: "test coverage", sub: "Jasmine / Karma" },
];

const MetricCell = ({ value, label, sub, isLast }) => (
  <div style={{
    padding: "28px 24px",
    borderRight: isLast ? "none" : "1px solid var(--line)",
    display: "flex", flexDirection: "column", gap: 6,
  }}>
    <div style={{
      fontSize: "clamp(28px, 3.5vw, 44px)",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      letterSpacing: "-0.03em",
      lineHeight: 1,
    }}>{value}</div>
    <div style={{ fontSize: 13, color: "var(--ink-2)" }}>{label}</div>
    <div className="mono" style={{ fontSize: 11, color: "var(--ink-4)", marginTop: 4 }}>{sub}</div>
  </div>
);

const ctaPrimary = {
  display: "inline-flex", alignItems: "center", gap: 8,
  padding: "12px 18px",
  borderRadius: 999,
  background: "var(--ink)", color: "#0a0a0b",
  fontSize: 14, fontWeight: 500, letterSpacing: "-0.01em",
  transition: "transform 150ms",
};
const ctaGhost = {
  display: "inline-flex", alignItems: "center", gap: 8,
  padding: "12px 16px",
  borderRadius: 999,
  border: "1px solid var(--line-2)",
  fontSize: 13, color: "var(--ink-2)",
  fontFamily: "var(--font-mono)",
  letterSpacing: "-0.01em",
};

function formatTime() {
  // Always show IST
  const d = new Date();
  const ist = new Date(d.getTime() + (d.getTimezoneOffset() + 330) * 60000);
  const h = ist.getHours().toString().padStart(2, "0");
  const m = ist.getMinutes().toString().padStart(2, "0");
  return `${h}:${m}`;
}

const Underline = () => (
  <svg viewBox="0 0 380 14" style={{
    position: "absolute", left: -2, right: -2, bottom: -8, width: "calc(100% + 4px)", height: 14,
  }}>
    <path d="M3 9 C 80 2, 180 2, 240 7 S 350 11, 377 4"
      stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round"
      style={{ filter: "drop-shadow(0 0 6px rgba(201,255,61,0.4))" }} />
  </svg>
);

window.Hero = Hero;
