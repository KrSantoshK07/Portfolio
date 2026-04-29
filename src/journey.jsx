// Compact journey timeline — used in BOTH recruiter and deep mode
const STOPS = [
  {
    when: "2018 — 22",
    what: "B.Tech, Information Technology",
    where: "Technocrats Institute, Bhopal",
    note: "GPA 8.4 / 10. Started shipping side-projects in year two.",
  },
  {
    when: "Sept 2022",
    what: "Joined Neosoft Technologies",
    where: "Pune",
    note: "Hired as a Node engineer. Spent the first month rewriting an auth flow no one wanted to touch.",
  },
  {
    when: "Jan — Jun 2023",
    what: "Suppliety — fullstack",
    where: "B2B vendor marketplace",
    note: "Shipped pg_trgm search and an RBAC layer for 50+ vendors. API latency dropped 40%.",
  },
  {
    when: "Jul 2023 →",
    what: "EOS Admin Panel — 1Finance",
    where: "Marwadi Group · Lead Frontend, Realtime",
    note: "Angular + GraphQL + Socket.IO. Resolution times down 40%. Employee of the Month, twice.",
  },
  {
    when: "2026",
    what: "Open to senior roles",
    where: "Remote · Pune · hybrid",
    note: "Looking for a small team where one engineer&rsquo;s decisions still move the product.",
    active: true,
  },
];

const Journey = () => (
  <section id="journey" className="section-pad-deep">
    <div className="container">
      <div className="section-head">
        <div className="num">06 / THE JOURNEY</div>
        <div>
          <h2 className="h2">
            Where I&rsquo;ve been, <em>where I&rsquo;m going.</em>
          </h2>
        </div>
      </div>

      <div style={{ position: "relative", paddingLeft: 24 }}>
        {/* Spine */}
        <div style={{
          position: "absolute", left: 6, top: 8, bottom: 8, width: 1,
          background: "linear-gradient(180deg, transparent, var(--line-2) 10%, var(--line-2) 90%, transparent)",
        }} />

        {STOPS.map((s, i) => (
          <div key={i} style={{
            position: "relative",
            padding: "20px 0 28px",
            borderBottom: i < STOPS.length - 1 ? "1px dashed rgba(255,255,255,0.06)" : "none",
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: 32, alignItems: "start",
          }} className="journey-row">
            {/* Dot */}
            <div style={{
              position: "absolute", left: -22, top: 26,
              width: 13, height: 13, borderRadius: 999,
              background: s.active ? "var(--accent)" : "var(--bg)",
              border: `1px solid ${s.active ? "var(--accent)" : "var(--line-2)"}`,
              boxShadow: s.active ? "0 0 14px rgba(201,255,61,0.5)" : "none",
            }} />
            <div className="micro" style={{ paddingTop: 4 }}>{s.when}</div>
            <div>
              <div style={{
                fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.3,
              }}>
                {s.what}
              </div>
              <div style={{ marginTop: 4, fontSize: 14, color: "var(--ink-3)" }}>{s.where}</div>
              <div style={{ marginTop: 10, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: "60ch" }}>
                {s.note}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 640px) {
        .journey-row { grid-template-columns: 1fr !important; gap: 6px !important; }
      }
    `}</style>
  </section>
);

window.Journey = Journey;
