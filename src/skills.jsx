// Skills — categorized, with a primary/secondary distinction
const SKILL_GROUPS = [
  {
    cat: "Frontend",
    primary: ["Angular 15+", "TypeScript", "JavaScript ES6+", "RxJS"],
    secondary: ["React", "HTML", "CSS / SCSS", "Responsive UI"],
  },
  {
    cat: "Backend",
    primary: ["Node.js", "Express.js", "REST APIs", "WebSockets / Socket.IO"],
    secondary: ["GraphQL", "JWT", "OAuth 2.0", "Microservices"],
  },
  {
    cat: "Databases",
    primary: ["PostgreSQL", "pg_trgm", "Stored Functions", "FDW"],
    secondary: ["MongoDB", "Query Optimization", "Indexing", "Caching"],
  },
  {
    cat: "Tooling & Cloud",
    primary: ["Git", "Azure", "Postman", "VS Code"],
    secondary: ["Figma", "Jasmine / Karma", "CI / CD", "Agile"],
  },
];

const Skills = () => (
  <section id="skills" className="section-pad-deep">
    <div className="container">
      <div className="section-head">
        <div className="num">07 / SKILLS</div>
        <div>
          <h2 className="h2">
            What&rsquo;s in the <em>toolkit.</em>
          </h2>
          <p className="lead" style={{ marginTop: 14 }}>
            Bold are the ones I reach for daily. The rest are tools I&rsquo;ve shipped with and would happily pick up tomorrow.
          </p>
        </div>
      </div>

      <div className="skills-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 0,
        border: "1px solid var(--line)",
        borderRadius: 16, overflow: "hidden",
      }}>
        {SKILL_GROUPS.map((g, i) => (
          <div key={g.cat} style={{
            padding: "28px 24px 32px",
            borderRight: i < SKILL_GROUPS.length - 1 ? "1px solid var(--line)" : "none",
            background: "rgba(255,255,255,0.012)",
            display: "flex", flexDirection: "column", gap: 18,
          }} className="skills-col">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div className="micro" style={{ color: "var(--accent)" }}>{g.cat.toUpperCase()}</div>
              <span className="serif" style={{ color: "var(--ink-4)", fontSize: 22, lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {g.primary.map(s => (
                <div key={s} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  fontSize: 15, color: "var(--ink)",
                  letterSpacing: "-0.01em", fontWeight: 500,
                }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: 999,
                    background: "var(--accent)",
                    boxShadow: "0 0 8px rgba(201,255,61,0.5)",
                  }} />
                  {s}
                </div>
              ))}
            </div>

            <div style={{
              borderTop: "1px dashed rgba(255,255,255,0.08)", paddingTop: 14,
              display: "flex", flexWrap: "wrap", gap: 6,
            }}>
              {g.secondary.map(s => (
                <span key={s} style={{
                  fontSize: 12, padding: "3px 9px", borderRadius: 999,
                  border: "1px solid var(--line)",
                  color: "var(--ink-3)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "-0.01em",
                }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 960px) {
        .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .skills-col { border-right: 1px solid var(--line) !important; border-bottom: 1px solid var(--line) !important; }
        .skills-col:nth-child(2n) { border-right: none !important; }
        .skills-col:nth-last-child(-n+2) { border-bottom: none !important; }
      }
      @media (max-width: 560px) {
        .skills-grid { grid-template-columns: 1fr !important; }
        .skills-col { border-right: none !important; border-bottom: 1px solid var(--line) !important; }
        .skills-col:last-child { border-bottom: none !important; }
      }
    `}</style>
  </section>
);

window.Skills = Skills;
