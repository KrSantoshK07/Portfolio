// Strong CTA / contact section
const Contact = () => {
  const [copied, setCopied] = React.useState(false);
  const copyEmail = () => {
    navigator.clipboard?.writeText("krrsantosh0@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <section id="contact" style={{ paddingBottom: 100 }}>
      <div className="container">
        <div style={{
          border: "1px solid var(--line-2)",
          borderRadius: 24,
          padding: "clamp(40px, 6vw, 80px) clamp(28px, 5vw, 64px)",
          background: "linear-gradient(180deg, rgba(201,255,61,0.05), rgba(201,255,61,0.01))",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative grid */}
          <svg style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            opacity: 0.4, pointerEvents: "none",
          }}>
            <defs>
              <pattern id="dotgrid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotgrid)" />
          </svg>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>Ready when you are</div>
            <h2 className="h1" style={{ fontSize: "clamp(40px, 6.5vw, 84px)", maxWidth: "16ch" }}>
              Let&rsquo;s build something <em>that doesn&rsquo;t</em> need to be rewritten next quarter.
            </h2>

            <div style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
              maxWidth: 720,
            }} className="contact-grid">
              <ContactRow icon={<Mail size={16} />} label="Email" value="krrsantosh0@gmail.com"
                action={<button onClick={copyEmail} style={copyBtn}>
                  {copied ? <><Check size={12} /> Copied</> : "Copy"}
                </button>}
                href="mailto:krrsantosh0@gmail.com" />
              <ContactRow icon={<Phone size={16} />} label="Phone" value="+91 87074 95901"
                href="tel:+918707495901" />
              <ContactRow icon={<Linkedin size={16} />} label="LinkedIn" value="/in/santosh-kumar"
                href="https://linkedin.com" external />
              <ContactRow icon={<Github size={16} />} label="GitHub" value="/krrsantosh0"
                href="https://github.com" external />
            </div>

            <div style={{
              marginTop: 48,
              display: "flex", gap: 12, flexWrap: "wrap",
              alignItems: "center",
            }}>
              <a href="mailto:krrsantosh0@gmail.com?subject=Senior%20Fullstack%20role" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 22px", borderRadius: 999,
                background: "var(--accent)", color: "#0a0a0b",
                fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em",
              }}>
                Start a conversation <ArrowRight size={16} />
              </a>
              <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 22px", borderRadius: 999,
                  border: "1px solid var(--line-2)",
                  fontSize: 14, color: "var(--ink-2)",
                }}>
                <Download size={14} /> Download resume (PDF)
              </a>
            </div>
          </div>
        </div>

        <footer style={{
          marginTop: 56,
          display: "flex", justifyContent: "space-between", gap: 16,
          flexWrap: "wrap",
          color: "var(--ink-4)", fontSize: 12, fontFamily: "var(--font-mono)",
          letterSpacing: "0.04em",
        }}>
          <div>© 2026 SANTOSH KUMAR · CRAFTED LATE AT NIGHT IN PUNE</div>
          <div>HAND-WRITTEN · NO TEMPLATES · NO FRAMEWORKS WHERE A FUNCTION WOULD DO</div>
        </footer>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const ContactRow = ({ icon, label, value, href, action, external }) => (
  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
    style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 20px", borderRadius: 14,
      border: "1px solid var(--line)",
      background: "rgba(0,0,0,0.25)",
      gap: 14,
      transition: "all 200ms",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--line-2)"; e.currentTarget.style.background = "rgba(0,0,0,0.4)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "rgba(0,0,0,0.25)"; }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        border: "1px solid var(--line-2)",
        display: "grid", placeItems: "center",
        color: "var(--ink-2)", flexShrink: 0,
      }}>{icon}</div>
      <div style={{ minWidth: 0 }}>
        <div className="micro" style={{ marginBottom: 2 }}>{label}</div>
        <div style={{
          fontSize: 14, color: "var(--ink)",
          fontFamily: "var(--font-mono)", letterSpacing: "-0.01em",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>{value}</div>
      </div>
    </div>
    {action || <ArrowUpRight size={16} style={{ color: "var(--ink-3)", flexShrink: 0 }} />}
  </a>
);

const copyBtn = {
  display: "inline-flex", alignItems: "center", gap: 4,
  padding: "6px 12px", borderRadius: 999,
  border: "1px solid var(--line-2)",
  background: "rgba(255,255,255,0.04)",
  fontSize: 11, fontFamily: "var(--font-mono)",
  letterSpacing: "0.02em",
  color: "var(--ink-2)",
  textTransform: "uppercase",
};

window.Contact = Contact;
