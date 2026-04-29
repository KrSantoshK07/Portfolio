// "What I solve" — replaces "About me"
const SOLVE = [
  {
    icon: () => <Bolt size={20} />,
    headline: "The dashboard chokes at scale.",
    body: "10k+ rows, real-time updates, role-based filters, and the UI feels frozen. I rebuild it with virtualization, parallel API loads, and Socket.IO deltas so the table breathes — even on a recruiter's mid-tier laptop.",
    tag: "Performance",
  },
  {
    icon: () => <Database size={20} />,
    headline: "Search returns nothing for typos.",
    body: "Users type \u201Crefnd\u201D, get zero results, churn. I introduce pg_trgm trigram indexes and relevance ranking so \u201Crefnd\u201D finds \u201Crefund\u201D — and the top result is the one they meant.",
    tag: "Search",
  },
  {
    icon: () => <Globe size={20} />,
    headline: "WebSockets silently drop.",
    body: "Notifications arrive late, approvals stall, the team blames the network. I architect heartbeat + reconnection + replay so the channel is honest about its state, and the inbox is always live.",
    tag: "Real-time",
  },
  {
    icon: () => <Shield size={20} />,
    headline: "Auth is leaking logins.",
    body: "Stale tokens, race conditions, OAuth scopes too wide. I rebuild the flow with refresh-token rotation, JWT scoping, and OAuth 2.0 best practices \u2014 dropping login failures by 40%.",
    tag: "Security",
  },
  {
    icon: () => <Layers size={20} />,
    headline: "The Postgres queries crawl.",
    body: "JOINs across half a dozen tables, no indexes, sequential scans on 2M rows. I write the 10+ stored functions, add the right indexes, and use FDW where the data sits in another database \u2014 30% faster, immediately.",
    tag: "Database",
  },
  {
    icon: () => <Cpu size={20} />,
    headline: "The codebase is fragile.",
    body: "Every change breaks something downstream. I bring 90% Jasmine/Karma coverage, isolated modules with lazy loading, and clean interceptors for auth + errors. Now the team ships on Friday.",
    tag: "Reliability",
  },
];

const Solve = () => {
  const [active, setActive] = React.useState(0);
  return (
    <section id="solve">
      <div className="container">
        <div className="section-head">
          <div className="num">01 / WHAT I SOLVE</div>
          <div>
            <h2 className="h2">
              I don&rsquo;t list <em>skills.</em><br />
              I list <span style={{ color: "var(--accent)" }}>problems</span> I&rsquo;ve been hired to make go away.
            </h2>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          border: "1px solid var(--line)",
          borderRadius: 16,
          overflow: "hidden",
          background: "rgba(255,255,255,0.015)",
        }} className="solve-grid">
          {SOLVE.map((s, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            const lastRow = row === Math.floor((SOLVE.length - 1) / 2);
            const Icon = s.icon;
            return (
              <div key={i}
                onMouseEnter={() => setActive(i)}
                style={{
                  padding: "32px 32px 28px",
                  borderRight: col === 0 ? "1px solid var(--line)" : "none",
                  borderBottom: !lastRow ? "1px solid var(--line)" : "none",
                  background: active === i ? "rgba(201,255,61,0.025)" : "transparent",
                  transition: "background 250ms",
                  cursor: "default",
                  position: "relative",
                  minHeight: 220,
                }}>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginBottom: 20,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    border: "1px solid var(--line-2)",
                    display: "grid", placeItems: "center",
                    color: active === i ? "var(--accent)" : "var(--ink-2)",
                    transition: "color 250ms",
                    background: active === i ? "rgba(201,255,61,0.05)" : "transparent",
                  }}>
                    <Icon />
                  </div>
                  <div className="micro">{s.tag}</div>
                </div>
                <div style={{
                  fontSize: 19,
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  marginBottom: 12,
                  fontWeight: 500,
                }}>{s.headline}</div>
                <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-3)" }}>
                  {s.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .solve-grid { grid-template-columns: 1fr !important; }
          .solve-grid > div { border-right: none !important; border-bottom: 1px solid var(--line) !important; }
          .solve-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
};

window.Solve = Solve;
