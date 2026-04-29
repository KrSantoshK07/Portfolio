// "How I think" — decision-making mindset, not skills list
const PRINCIPLES = [
  {
    n: "01",
    t: "Measure before you fix.",
    d: "Every &lsquo;optimization&rsquo; without a baseline is a guess. I profile first \u2014 EXPLAIN ANALYZE, Chrome perf, Lighthouse \u2014 then choose the smallest change that moves the number.",
  },
  {
    n: "02",
    t: "Boring is a feature.",
    d: "I reach for the obvious tool first. JWT + Postgres functions + Socket.IO will outlive any framework du jour. I save the clever stuff for where it actually matters.",
  },
  {
    n: "03",
    t: "Types are documentation that runs.",
    d: "TypeScript end to end \u2014 not for ceremony, for the bug it catches at 11pm before a release. Strict null checks. Discriminated unions over magic strings.",
  },
  {
    n: "04",
    t: "The UI is a contract.",
    d: "If the role can&rsquo;t see it, the API shouldn&rsquo;t return it. Field-level guards, route guards, interceptors \u2014 trust nothing, validate everything, twice.",
  },
  {
    n: "05",
    t: "Real-time is a state machine.",
    d: "Sockets aren&rsquo;t magic \u2014 they&rsquo;re a second source of truth. I design for reconnect, replay, and the moment the network blinks. Otherwise, dashboards lie.",
  },
  {
    n: "06",
    t: "Tests pay rent.",
    d: "90% coverage isn&rsquo;t vanity \u2014 it&rsquo;s the reason I can refactor on a Tuesday and ship on a Wednesday. Good tests describe intent, not implementation.",
  },
];

const Think = () => (
  <section id="think" className="section-pad-deep deep-only">
    <div className="container">
      <div className="section-head">
        <div className="num">05 / HOW I THINK</div>
        <div>
          <h2 className="h2">
            Six ideas I&rsquo;d defend in a <em>code review.</em>
          </h2>
        </div>
      </div>

      <div className="think-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 0,
        border: "1px solid var(--line)",
        borderRadius: 16, overflow: "hidden",
      }}>
        {PRINCIPLES.map((p, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          return (
            <div key={i} style={{
              padding: "32px 28px 36px",
              borderRight: col < 2 ? "1px solid var(--line)" : "none",
              borderBottom: row === 0 ? "1px solid var(--line)" : "none",
              background: "rgba(255,255,255,0.012)",
              minHeight: 240,
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <span className="serif" style={{ fontSize: 32, color: "var(--accent)", lineHeight: 1 }}>{p.n}</span>
                <span className="micro">PRINCIPLE</span>
              </div>
              <div style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                {p.t}
              </div>
              <div style={{ fontSize: 14, color: "var(--ink-3)", lineHeight: 1.55 }}
                dangerouslySetInnerHTML={{ __html: p.d }} />
            </div>
          );
        })}
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .think-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .think-grid > div { border-right: 1px solid var(--line) !important; border-bottom: 1px solid var(--line) !important; }
        .think-grid > div:nth-child(2n) { border-right: none !important; }
      }
      @media (max-width: 600px) {
        .think-grid { grid-template-columns: 1fr !important; }
        .think-grid > div { border-right: none !important; }
      }
    `}</style>
  </section>
);

window.Think = Think;
