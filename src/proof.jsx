// "Proof of Work" — code before/after toggle and metric receipts
const Proof = () => {
  const [view, setView] = React.useState("after");
  return (
    <section id="proof" className="section-pad-deep deep-only">
      <div className="container">
        <div className="section-head">
          <div className="num">04 / PROOF OF WORK</div>
          <div>
            <h2 className="h2">
              The <em>before.</em> The <span style={{ color: "var(--accent)" }}>after.</span><br />
              The reason the metric moved.
            </h2>
          </div>
        </div>

        <div style={{
          border: "1px solid var(--line)", borderRadius: 16,
          background: "rgba(0,0,0,0.4)",
          overflow: "hidden",
        }}>
          {/* Tabs + window chrome */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 18px", borderBottom: "1px solid var(--line)",
            gap: 12, flexWrap: "wrap",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <Dot3 c="rgba(255,255,255,0.18)" />
                <Dot3 c="rgba(255,255,255,0.12)" />
                <Dot3 c="rgba(255,255,255,0.08)" />
              </div>
              <span className="micro" style={{ color: "var(--ink-3)" }}>
                suppliety/api/search.ts &middot; vendor product search
              </span>
            </div>
            <div style={{
              display: "inline-flex", padding: 3, gap: 2,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--line)", borderRadius: 999,
            }}>
              {[["before", "Before"], ["after", "After"]].map(([k, l]) => (
                <button key={k} onClick={() => setView(k)} style={{
                  padding: "6px 14px", borderRadius: 999,
                  background: view === k ? "var(--ink)" : "transparent",
                  color: view === k ? "#0a0a0b" : "var(--ink-3)",
                  fontSize: 12, fontFamily: "var(--font-mono)",
                  letterSpacing: "-0.01em",
                  transition: "all 200ms",
                }}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Code panes */}
          <div className="proof-grid" style={{
            display: "grid", gridTemplateColumns: "1.4fr 1fr",
          }}>
            <pre style={{
              margin: 0, padding: "24px 28px",
              fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.7,
              color: "var(--ink-2)",
              borderRight: "1px solid var(--line)",
              overflow: "auto",
              maxHeight: 460,
            }}>
              <code dangerouslySetInnerHTML={{ __html: view === "before" ? BEFORE : AFTER }} />
            </pre>

            <div style={{ padding: "24px 28px" }}>
              <div className="micro">{view === "before" ? "The problem" : "The fix"}</div>
              <div style={{ marginTop: 10, fontSize: 16, color: "var(--ink)", letterSpacing: "-0.015em", lineHeight: 1.4 }}>
                {view === "before"
                  ? "ILIKE %term% on a 2M-row product table. Sequential scan. 1.4s p95. Typos return nothing."
                  : "GIN index on trigrams. similarity() ranks. Recency + vendor tier weight the score."}
              </div>
              <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                {view === "before" ? BEFORE_NOTES.map((n, i) => (
                  <div key={i} style={{ fontSize: 13, color: "var(--ink-3)", display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--warn)", marginTop: 2 }}>!</span> {n}
                  </div>
                )) : AFTER_NOTES.map((n, i) => (
                  <div key={i} style={{ fontSize: 13, color: "var(--ink-3)", display: "flex", gap: 10 }}>
                    <Check size={14} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} /> {n}
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 24,
                padding: "14px 16px",
                borderRadius: 12,
                background: view === "before" ? "rgba(255,122,89,0.06)" : "rgba(201,255,61,0.06)",
                border: `1px solid ${view === "before" ? "rgba(255,122,89,0.2)" : "rgba(201,255,61,0.2)"}`,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: 10, flexWrap: "wrap",
              }}>
                <div className="mono" style={{ fontSize: 12, color: "var(--ink-3)" }}>
                  p95 latency
                </div>
                <div style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 24, fontWeight: 500,
                  color: view === "before" ? "var(--warn)" : "var(--accent)",
                  letterSpacing: "-0.02em",
                }}>
                  {view === "before" ? "1,420 ms" : "210 ms"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Receipts */}
        <div className="receipts" style={{
          marginTop: 24,
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
        }}>
          {RECEIPTS.map((r, i) => (
            <div key={i} style={{
              padding: "20px 22px", borderRadius: 14,
              border: "1px solid var(--line)",
              background: "rgba(255,255,255,0.015)",
            }}>
              <div className="micro" style={{ marginBottom: 12 }}>{r.tag}</div>
              <div style={{
                fontSize: 32, letterSpacing: "-0.03em", fontWeight: 500, lineHeight: 1,
              }}>{r.value}</div>
              <div style={{ marginTop: 8, fontSize: 14, color: "var(--ink-2)" }}>{r.label}</div>
              <div className="mono" style={{ marginTop: 8, fontSize: 11, color: "var(--ink-4)" }}>
                {r.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .proof-grid { grid-template-columns: 1fr !important; }
          .proof-grid > pre { border-right: none !important; border-bottom: 1px solid var(--line); }
          .receipts { grid-template-columns: 1fr !important; }
        }
        .tk { color: var(--ink); }
        .tg { color: var(--ink-4); font-style: italic; }
        .tn { color: #c9ff3d; }
        .ts { color: #ffb073; }
        .tf { color: #82a8ff; }
        .tt { color: #c89bff; }
        .tc { color: var(--ink-4); }
      `}</style>
    </section>
  );
};

const BEFORE = `<span class="tg">// suppliety v1 — naive ILIKE search</span>
<span class="tk">export async function</span> <span class="tf">searchProducts</span>(<span class="ts">term</span>: <span class="tt">string</span>) {
  <span class="tk">const</span> <span class="ts">rows</span> = <span class="tk">await</span> db.query(\`
    <span class="tn">SELECT</span> id, name, sku, vendor_id
    <span class="tn">FROM</span>   products
    <span class="tn">WHERE</span>  name <span class="tn">ILIKE</span> $1
       <span class="tn">OR</span>   sku  <span class="tn">ILIKE</span> $1
    <span class="tn">LIMIT</span>  50
  \`, [\`%\${term}%\`]);
  <span class="tk">return</span> rows;
}
<span class="tg">// p95: 1,420 ms · zero results for typos · seq scan on 2M rows</span>`;

const AFTER = `<span class="tg">// suppliety v2 — pg_trgm trigram + relevance ranking</span>
<span class="tk">export async function</span> <span class="tf">searchProducts</span>(<span class="ts">term</span>: <span class="tt">string</span>) {
  <span class="tk">const</span> <span class="ts">rows</span> = <span class="tk">await</span> db.query(\`
    <span class="tn">SELECT</span> p.id, p.name, p.sku, p.vendor_id,
           <span class="tn">similarity</span>(p.name, $1) <span class="tk">*</span> 0.6
         + <span class="tn">similarity</span>(p.sku,  $1) <span class="tk">*</span> 0.3
         + v.tier_weight                  <span class="tk">*</span> 0.1   <span class="tg">as</span> score
    <span class="tn">FROM</span>   products p
    <span class="tn">JOIN</span>   vendors  v <span class="tn">ON</span> v.id = p.vendor_id
    <span class="tn">WHERE</span>  p.name <span class="tk">%</span> $1 <span class="tn">OR</span> p.sku <span class="tk">%</span> $1
    <span class="tn">ORDER</span> <span class="tn">BY</span> score <span class="tn">DESC</span>
    <span class="tn">LIMIT</span>  50
  \`, [term]);
  <span class="tk">return</span> rows;
}
<span class="tg">// CREATE INDEX idx_products_name_trgm ON products USING gin (name gin_trgm_ops);</span>
<span class="tg">// p95: 210 ms · "refnd" → "refund" · vendor tier respected</span>`;

const BEFORE_NOTES = [
  "Sequential scan on every query — no index can help ILIKE %x%.",
  "Typos = zero results. Users churn at the search box.",
  "No relevance: alphabetical results, not what they meant.",
];
const AFTER_NOTES = [
  "GIN index on trigrams. Sub-linear lookup over millions of rows.",
  "similarity() ranks by closeness — 'refnd' surfaces 'refund'.",
  "Score weights vendor tier; preferred suppliers float up.",
];

const RECEIPTS = [
  { tag: "AUTH HARDENING", value: "−40%", label: "login failures, EOS rollout", detail: "JWT scoping + OAuth 2.0 + refresh rotation" },
  { tag: "ANGULAR PERF",    value: "−30%", label: "first contentful paint",       detail: "lazy modules + parallel API loads" },
  { tag: "POSTGRES",        value: "+30%", label: "query throughput",             detail: "10+ stored functions, indexed hot paths" },
];

const Dot3 = ({ c }) => (
  <span style={{ width: 10, height: 10, borderRadius: 999, background: c }} />
);

window.Proof = Proof;
