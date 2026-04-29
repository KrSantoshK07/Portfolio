// App shell: Recruiter Mode adds a TL;DR card up top, hides deep sections.
const { useState, useEffect } = React;

function App() {
  const [recruiter, setRecruiter] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("recruiter-mode", recruiter);
  }, [recruiter]);

  return (
    <>
      <Nav recruiter={recruiter} setRecruiter={setRecruiter} />
      <main>
        <Hero />
        {recruiter && <RecruiterTLDR />}
        <Solve />
        <Impact />
        <Architecture />
        <Proof />
        <Think />
        <Skills />
        <Journey />
        <Contact />
      </main>
    </>
  );
}

const TLDR_BULLETS = [
  { l: "Years of experience", v: "3.4 yrs" },
  { l: "Current role", v: "Software Engineer · Neosoft (1Finance / Marwadi)" },
  { l: "Headline win", v: "Real-time admin panel · 50+ users · −40% resolution time" },
  { l: "Tech edge", v: "Angular 15 · Node · GraphQL · Postgres · Socket.IO" },
  { l: "Performance moves", v: "−30% load · −40% API · 90% test coverage" },
  { l: "Looking for", v: "Senior frontend / fullstack at a small product team" },
  { l: "Location", v: "Pune, IN · open to remote / hybrid" },
  { l: "Notice period", v: "30 days" },
];

const RecruiterTLDR = () => (
  <section style={{ padding: "20px 0 40px" }}>
    <div className="container">
      <div style={{
        border: "1px solid var(--accent)",
        borderRadius: 18,
        background: "linear-gradient(180deg, rgba(201,255,61,0.06), rgba(201,255,61,0.01))",
        padding: "28px 32px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{
            width: 6, height: 6, borderRadius: 999,
            background: "var(--accent)", boxShadow: "0 0 10px var(--accent)",
          }} />
          <span className="micro" style={{ color: "var(--accent)" }}>30-SECOND TL;DR · RECRUITER MODE</span>
        </div>
        <h2 className="h2" style={{ marginBottom: 28, maxWidth: "22ch" }}>
          Senior fullstack engineer. <em>Real-time, performance, security.</em>
        </h2>
        <div className="tldr-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "0",
          borderTop: "1px solid var(--line)",
        }}>
          {TLDR_BULLETS.map((b, i) => {
            const col = i % 2;
            return (
              <div key={i} style={{
                padding: "16px 0",
                borderBottom: "1px solid var(--line)",
                paddingLeft: col === 1 ? 24 : 0,
                paddingRight: col === 0 ? 24 : 0,
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: 16, alignItems: "baseline",
              }} className="tldr-row">
                <div className="micro">{b.l}</div>
                <div style={{ fontSize: 15, color: "var(--ink)", letterSpacing: "-0.01em" }}>{b.v}</div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="mailto:krrsantosh0@gmail.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 16px", borderRadius: 999,
            background: "var(--accent)", color: "#0a0a0b",
            fontSize: 13, fontWeight: 500,
          }}>Email me <ArrowUpRight size={14} /></a>
          <span className="micro" style={{ alignSelf: "center", color: "var(--ink-3)" }}>
            Toggle &ldquo;Deep Dive&rdquo; in the nav for the full story.
          </span>
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 720px) {
        .tldr-grid { grid-template-columns: 1fr !important; }
        .tldr-row { padding-left: 0 !important; padding-right: 0 !important; }
      }
    `}</style>
  </section>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
