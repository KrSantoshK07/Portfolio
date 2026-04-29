// "Impact Delivered" — replaces "Projects"
const IMPACT = [
  {
    id: "eos",
    company: "1Finance · Marwadi Group",
    project: "EOS Admin Panel",
    year: "Jul 2023 — present",
    role: "Lead Frontend, Realtime Systems",
    headline: "A role-based ops dashboard that runs the firm&rsquo;s wealth-advisory engine.",
    summary:
      "Built the admin layer where 50+ advisors triage client cases in real time. Angular + GraphQL on the front, Socket.IO for live presence and approval flows, hardened auth interceptors so a junior analyst can never see what a senior shouldn't.",
    metrics: [
      { v: "40%", l: "faster issue resolution" },
      { v: "<200ms", l: "p95 dashboard load" },
      { v: "50+", l: "advisors on the panel" },
      { v: "0", l: "auth incidents in 2y" },
    ],
    stack: ["Angular 15", "GraphQL", "Socket.IO", "Node.js", "PostgreSQL", "Azure"],
    callouts: [
      { t: "Architecture", d: "Modular feature slices. Each role (analyst, ops, admin) lazy-loads only its own bundle — first paint stays under a second." },
      { t: "Real-time", d: "Socket.IO rooms per case. Presence, comments, and approval events deliver in &lt;100ms with replay on reconnect." },
      { t: "Security", d: "Auth interceptor + GraphQL field-level guards. Every query is validated server-side; the UI never sees forbidden fields." },
    ],
    accent: "var(--accent)",
  },
  {
    id: "execution",
    company: "1Finance",
    project: "Execution Dashboard",
    year: "Jan 2026 — present",
    role: "Fullstack Engineer",
    headline: "Smart-search and execution console replacing manual workflows for 9,000+ clients.",
    summary:
      "Built a Node.js + Angular platform that manages 9,000+ clients and 50,000+ execution actions. Replaced legacy ILIKE lookups with PostgreSQL pg_trgm fuzzy matching and relevance ranking, so advisors find the right customer the first time — typos and all. Query optimization and caching strategies cut API response time by 40%.",
    metrics: [
      { v: "9,000+", l: "clients managed" },
      { v: "50,000+", l: "execution actions" },
      { v: "40%", l: "faster API responses" },
      { v: "→ 0", l: "manual workflows replaced" },
    ],
    stack: ["Angular", "Node.js", "Express", "PostgreSQL", "pg_trgm", "Redis"],
    callouts: [
      { t: "Smart search", d: "pg_trgm trigram index over name, PAN, phone. similarity() scores rank results so 'Santhosh' surfaces 'Santosh' — instantly, across 9k+ records." },
      { t: "Scale", d: "Architected for 50,000+ execution actions — batched writes, paginated reads, optimistic UI on the dashboard so advisors never wait for a round-trip." },
      { t: "Performance", d: "Query rewrites + a thin caching layer for hot lookups. p95 latency dropped 40% without adding infra." },
    ],
    accent: "var(--accent)",
  },
  {
    id: "suppliety",
    company: "Suppliety",
    project: "B2B Vendor Marketplace",
    year: "Jan 2023 — Jun 2023",
    role: "Fullstack Engineer",
    headline: "Search-first vendor platform with secure checkout for 50+ suppliers.",
    summary:
      "Built the Node + Angular core. Replaced naive ILIKE search with pg_trgm trigram indexing and relevance ranking — typos started returning the right product. Caching layer + query rewrites cut API latency by 40%.",
    metrics: [
      { v: "40%", l: "faster API responses" },
      { v: "50+", l: "vendors with RBAC" },
      { v: "3.2×", l: "search recall vs ILIKE" },
      { v: "60%", l: "fewer DB round-trips" },
    ],
    stack: ["Node.js", "Express", "Angular", "PostgreSQL", "pg_trgm", "Redis"],
    callouts: [
      { t: "Smart search", d: "GIN index on trigrams over name, sku, description. similarity() ranks results, weighted by recency and vendor tier." },
      { t: "Caching", d: "Stale-while-revalidate at the route level for hot category queries. Cache invalidated on inventory webhook, not TTL." },
      { t: "RBAC", d: "Vendor / admin / buyer scopes wired through middleware + Angular route guards. Single source of truth in Postgres." },
    ],
    accent: "var(--accent-2)",
  },
];

const Impact = () => {
  const [open, setOpen] = React.useState("eos");
  return (
    <section id="impact" className="section-pad-deep">
      <div className="container">
        <div className="section-head">
          <div className="num">02 / IMPACT DELIVERED</div>
          <div>
            <h2 className="h2">
              The work, with the <em>numbers</em><br />
              attached.
            </h2>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {IMPACT.map((p) => (
            <ImpactCard key={p.id} p={p} open={open === p.id} onToggle={() => setOpen(open === p.id ? null : p.id)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactCard = ({ p, open, onToggle }) => {
  return (
    <article style={{
      border: "1px solid var(--line)",
      borderRadius: 18,
      background: "rgba(255,255,255,0.015)",
      overflow: "hidden",
      transition: "all 350ms ease",
    }}>
      {/* Header — always visible */}
      <button onClick={onToggle} style={{
        width: "100%", textAlign: "left", padding: "28px 32px",
        display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center",
      }}>
        <div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
            <span style={{
              width: 6, height: 6, borderRadius: 999, background: p.accent,
              boxShadow: `0 0 10px ${p.accent}`,
            }} />
            <span className="micro">{p.company} · {p.year}</span>
          </div>
          <div style={{
            fontSize: "clamp(22px, 2.6vw, 30px)",
            letterSpacing: "-0.025em",
            fontWeight: 500,
            lineHeight: 1.15,
          }}>
            {p.project} <span style={{ color: "var(--ink-3)" }} className="serif">— {p.headline.replace(/&rsquo;/g, "\u2019")}</span>
          </div>
        </div>
        <div style={{
          width: 44, height: 44, borderRadius: 999,
          border: "1px solid var(--line-2)",
          display: "grid", placeItems: "center",
          color: "var(--ink-2)",
          transition: "transform 300ms",
          transform: open ? "rotate(45deg)" : "rotate(0)",
          flexShrink: 0,
        }}>
          <Plus size={18} />
        </div>
      </button>

      {/* Metrics strip — always visible */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        borderTop: "1px solid var(--line)",
      }} className="impact-metrics">
        {p.metrics.map((m, i) => (
          <div key={i} style={{
            padding: "20px 24px",
            borderRight: i < p.metrics.length - 1 ? "1px solid var(--line)" : "none",
          }}>
            <div style={{
              fontSize: "clamp(22px, 2.4vw, 28px)",
              letterSpacing: "-0.03em", fontWeight: 500, lineHeight: 1,
            }}>{m.v}</div>
            <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 6 }}>{m.l}</div>
          </div>
        ))}
      </div>

      {/* Expanded body */}
      <div style={{
        maxHeight: open ? 1200 : 0,
        opacity: open ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 500ms ease, opacity 300ms ease",
      }} className="deep-only">
        <div style={{ padding: "28px 32px 36px", borderTop: "1px solid var(--line)" }}>
          <div className="impact-body" style={{
            display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40,
          }}>
            <div>
              <div className="micro" style={{ marginBottom: 10 }}>The brief</div>
              <p style={{
                fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)",
                margin: 0, maxWidth: "55ch",
              }} dangerouslySetInnerHTML={{ __html: p.summary }} />

              <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.stack.map(s => (
                  <span key={s} style={{
                    fontSize: 12, padding: "4px 10px", borderRadius: 999,
                    border: "1px solid var(--line)", color: "var(--ink-2)",
                    fontFamily: "var(--font-mono)", letterSpacing: "-0.01em",
                  }}>{s}</span>
                ))}
              </div>
              <div style={{ marginTop: 24 }} className="micro">
                Role · {p.role}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {p.callouts.map((c, i) => (
                <div key={i} style={{
                  borderLeft: `2px solid ${p.accent}`,
                  paddingLeft: 16, paddingTop: 4, paddingBottom: 4,
                }}>
                  <div className="micro" style={{ color: "var(--ink-2)", marginBottom: 4 }}>{c.t}</div>
                  <div style={{ fontSize: 14, color: "var(--ink-3)", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: c.d }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .impact-metrics { grid-template-columns: repeat(2, 1fr) !important; }
          .impact-metrics > div:nth-child(1), .impact-metrics > div:nth-child(2) { border-bottom: 1px solid var(--line); }
          .impact-metrics > div:nth-child(2) { border-right: none !important; }
          .impact-body { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </article>
  );
};

window.Impact = Impact;
