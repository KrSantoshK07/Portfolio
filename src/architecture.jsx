// Interactive system-design visual for the EOS real-time stack
const NODES = [
  { id: "client",   label: "Angular Client",     sub: "Lazy-loaded modules", x: 60,  y: 60,  w: 180, h: 78,  group: "client" },
  { id: "guard",    label: "Auth Guard + Interceptor", sub: "JWT · refresh rotation", x: 60, y: 170, w: 180, h: 78, group: "client" },
  { id: "gw",       label: "API Gateway",         sub: "Node + Express",     x: 320, y: 115, w: 180, h: 78,  group: "edge" },
  { id: "graphql",  label: "GraphQL Layer",       sub: "Field-level guards", x: 320, y: 220, w: 180, h: 78,  group: "edge" },
  { id: "ws",       label: "Socket.IO",           sub: "Rooms · presence · replay", x: 320, y: 10, w: 180, h: 78, group: "edge" },
  { id: "svc",      label: "Domain Services",     sub: "Cases · approvals · audit", x: 580, y: 115, w: 180, h: 78, group: "core" },
  { id: "queue",    label: "Pub/Sub Bus",         sub: "Event fan-out",       x: 580, y: 10,  w: 180, h: 78,  group: "core" },
  { id: "pg",       label: "PostgreSQL",          sub: "10+ functions · pg_trgm", x: 840, y: 60, w: 180, h: 78, group: "data" },
  { id: "fdw",      label: "Foreign DB (FDW)",    sub: "Cross-DB read sync", x: 840, y: 170, w: 180, h: 78, group: "data" },
  { id: "mongo",    label: "MongoDB",             sub: "Audit trail · logs", x: 840, y: 280, w: 180, h: 78, group: "data" },
];

const EDGES = [
  { from: "client", to: "guard", note: "user actions" },
  { from: "guard",  to: "gw",    note: "REST" },
  { from: "guard",  to: "graphql", note: "queries" },
  { from: "client", to: "ws",    note: "live channel", live: true },
  { from: "gw",     to: "svc" },
  { from: "graphql", to: "svc" },
  { from: "ws",     to: "queue", live: true },
  { from: "queue",  to: "svc",   live: true },
  { from: "svc",    to: "pg" },
  { from: "svc",    to: "mongo" },
  { from: "pg",     to: "fdw",   note: "FDW" },
];

const FLOWS = {
  approval: {
    label: "Live approval",
    desc: "Senior approves a case → every analyst&rsquo;s dashboard updates in real time.",
    path: ["client", "guard", "gw", "svc", "queue", "ws", "client"],
  },
  search: {
    label: "Smart search",
    desc: "User types &lsquo;refnd&rsquo; → pg_trgm trigram match returns &lsquo;refund&rsquo; ranked by similarity.",
    path: ["client", "guard", "gw", "svc", "pg"],
  },
  sync: {
    label: "Cross-DB sync",
    desc: "Postgres reads from a foreign DB via FDW — no ETL, no stale data.",
    path: ["svc", "pg", "fdw"],
  },
};

const Architecture = () => {
  const [flow, setFlow] = React.useState("approval");
  const [hover, setHover] = React.useState(null);
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 60);
    return () => clearInterval(t);
  }, []);

  const activeNodes = new Set(FLOWS[flow].path);
  const activeEdges = new Set();
  const path = FLOWS[flow].path;
  for (let i = 0; i < path.length - 1; i++) activeEdges.add(`${path[i]}->${path[i+1]}`);

  return (
    <section id="architecture" className="section-pad-deep deep-only">
      <div className="container">
        <div className="section-head">
          <div className="num">03 / SYSTEM DESIGN</div>
          <div>
            <h2 className="h2">
              The EOS stack, <em>traced live.</em>
            </h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Pick a scenario. Watch the request travel through the system &mdash; the same one I shipped at 1Finance.
            </p>
          </div>
        </div>

        {/* Flow selector */}
        <div style={{
          display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap",
        }}>
          {Object.entries(FLOWS).map(([id, f]) => (
            <button key={id} onClick={() => setFlow(id)}
              style={{
                padding: "10px 16px", borderRadius: 999,
                border: `1px solid ${flow === id ? "var(--accent)" : "var(--line-2)"}`,
                background: flow === id ? "rgba(201,255,61,0.08)" : "transparent",
                color: flow === id ? "var(--accent)" : "var(--ink-2)",
                fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: "-0.01em",
                transition: "all 200ms",
              }}>
              {f.label}
            </button>
          ))}
        </div>

        <div style={{
          border: "1px solid var(--line)", borderRadius: 16,
          background: "rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}>
          {/* Caption */}
          <div style={{
            padding: "16px 20px",
            borderBottom: "1px solid var(--line)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            gap: 16, flexWrap: "wrap",
          }}>
            <div style={{ fontSize: 14, color: "var(--ink-2)" }} dangerouslySetInnerHTML={{ __html: FLOWS[flow].desc }} />
            <div className="micro" style={{ display: "flex", gap: 12 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--accent)" }} />
                live channel
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--ink-2)" }} />
                request path
              </span>
            </div>
          </div>

          {/* Diagram */}
          <div style={{ overflowX: "auto" }}>
            <svg viewBox="0 0 1080 400" style={{
              width: "100%", minWidth: 720, height: "auto", display: "block",
              padding: "20px 0",
            }}>
              {/* group backgrounds */}
              <GroupRect x={40}  y={0}   w={220} h={310} label="CLIENT" />
              <GroupRect x={300} y={0}   w={220} h={310} label="EDGE" />
              <GroupRect x={560} y={0}   w={220} h={310} label="CORE" />
              <GroupRect x={820} y={0}   w={220} h={400} label="DATA" />

              {/* edges */}
              {EDGES.map((e, i) => {
                const a = NODES.find(n => n.id === e.from);
                const b = NODES.find(n => n.id === e.to);
                if (!a || !b) return null;
                const x1 = a.x + a.w; const y1 = a.y + a.h / 2;
                const x2 = b.x;       const y2 = b.y + b.h / 2;
                // route: simple cubic
                const cx = (x1 + x2) / 2;
                const d = `M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
                const isActive = activeEdges.has(`${e.from}->${e.to}`) || activeEdges.has(`${e.to}->${e.from}`);
                return (
                  <g key={i}>
                    <path d={d}
                      stroke={isActive ? "var(--accent)" : "rgba(255,255,255,0.12)"}
                      strokeWidth={isActive ? 1.5 : 1}
                      fill="none"
                      style={{ transition: "stroke 300ms" }}
                    />
                    {isActive && <PacketDot path={d} tick={tick} />}
                  </g>
                );
              })}
              {/* return path for approval flow (svc -> queue -> ws -> client) */}
              {flow === "approval" && (
                <g>
                  {/* highlight return loop */}
                </g>
              )}

              {/* nodes */}
              {NODES.map(n => {
                const active = activeNodes.has(n.id);
                const hov = hover === n.id;
                return (
                  <g key={n.id}
                    onMouseEnter={() => setHover(n.id)}
                    onMouseLeave={() => setHover(null)}
                    style={{ cursor: "pointer" }}>
                    <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={10}
                      fill={active ? "rgba(201,255,61,0.06)" : "rgba(255,255,255,0.02)"}
                      stroke={active ? "var(--accent)" : (hov ? "var(--line-2)" : "var(--line)")}
                      strokeWidth={active ? 1.2 : 1}
                      style={{ transition: "all 300ms" }}
                    />
                    <text x={n.x + 16} y={n.y + 30}
                      fill={active ? "var(--accent)" : "var(--ink)"}
                      style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, letterSpacing: "-0.01em", transition: "fill 300ms" }}>
                      {n.label}
                    </text>
                    <text x={n.x + 16} y={n.y + 52}
                      fill="var(--ink-3)"
                      style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: 0 }}>
                      {n.sub}
                    </text>
                    {/* tiny indicator */}
                    <circle cx={n.x + n.w - 14} cy={n.y + 14} r={3}
                      fill={active ? "var(--accent)" : "rgba(255,255,255,0.18)"} />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Hover detail */}
          <div style={{
            padding: "14px 20px",
            borderTop: "1px solid var(--line)",
            fontSize: 13, color: "var(--ink-3)", minHeight: 44,
            fontFamily: "var(--font-mono)", letterSpacing: "-0.01em",
          }}>
            {hover ? (
              <>
                <span style={{ color: "var(--accent)" }}>&rarr; {NODES.find(n => n.id === hover).label}</span>{" "}
                <span style={{ color: "var(--ink-3)" }}>&middot; {NODE_DETAILS[hover] || NODES.find(n => n.id === hover).sub}</span>
              </>
            ) : (
              <span>Hover any node for detail. Switch flows above to retrace a different request.</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const NODE_DETAILS = {
  client:  "Angular 15. Each role lazy-loads its own bundle. First paint &lt; 1s on mid-tier hardware.",
  guard:   "HTTP interceptor attaches JWT, rotates refresh tokens, surfaces 401s as a clean re-auth flow.",
  gw:      "Node + Express. Rate-limit, request validation, CORS, and a single error envelope.",
  graphql: "Apollo schema with field-level guards. The UI never receives a field the role can&rsquo;t see.",
  ws:      "Socket.IO with rooms per case. Heartbeat, replay-on-reconnect, presence indicators.",
  svc:     "Domain services for cases, approvals, audits. All writes emit events to the bus.",
  queue:   "Pub/sub fan-out. Decouples writes from listeners (email, audit, dashboards).",
  pg:      "10+ stored functions. pg_trgm for fuzzy search. Carefully indexed for the hot paths.",
  fdw:     "Foreign Data Wrapper reads live from a sister database. No ETL, no staleness.",
  mongo:   "Append-only audit log. Cheap writes, queryable for compliance review.",
};

const GroupRect = ({ x, y, w, h, label }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={14}
      fill="rgba(255,255,255,0.015)"
      stroke="rgba(255,255,255,0.05)"
      strokeDasharray="4 4" />
    <text x={x + 12} y={y + 18}
      fill="var(--ink-4)"
      style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.14em" }}>
      {label}
    </text>
  </g>
);

const PacketDot = ({ path, tick }) => {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    if (!ref.current) return;
    const length = ref.current.getTotalLength();
    if (!length) return;
    const t = ((tick * 6) % (length + 30)) / length;
    if (t > 1) { setPos({ x: -100, y: -100 }); return; }
    const p = ref.current.getPointAtLength(t * length);
    setPos({ x: p.x, y: p.y });
  }, [tick, path]);
  return (
    <>
      <path ref={ref} d={path} fill="none" stroke="none" />
      <circle cx={pos.x} cy={pos.y} r={3.5} fill="var(--accent)"
        style={{ filter: "drop-shadow(0 0 8px rgba(201,255,61,0.8))" }} />
    </>
  );
};

window.Architecture = Architecture;
