// Top nav with Recruiter Mode toggle
const Nav = ({ recruiter, setRecruiter }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#solve", label: "What I solve" },
    { href: "#impact", label: "Impact" },
    { href: "#architecture", label: "Architecture" },
    { href: "#think", label: "How I think" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 250ms ease",
      backdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
      background: scrolled ? "rgba(10,10,11,0.72)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        <a href="#top" onClick={(e) => handleClick(e, "#top")} style={{
          display: "flex", alignItems: "center", gap: 10,
          fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "-0.01em",
        }}>
          <span style={{
            width: 24, height: 24, borderRadius: 6,
            background: "var(--accent)", color: "#0a0a0b",
            display: "grid", placeItems: "center",
            fontWeight: 700, fontSize: 12,
          }}>S</span>
          <span style={{ color: "var(--ink)", whiteSpace: "nowrap" }}>
            <span className="logo-full">Santosh Kumar</span>
            <span className="logo-short">Santosh K.</span>
          </span>
        </a>

        <nav className="recruiter-only" style={{ display: "flex", gap: 4 }}>
          {/* Compact links shown only in recruiter mode */}
        </nav>

        <nav className="deep-only" style={{
          display: "flex", gap: 4,
          fontSize: 13, color: "var(--ink-3)",
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e) => handleClick(e, l.href)}
              style={{ padding: "8px 12px", borderRadius: 8, transition: "color 200ms" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--ink)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink-3)"}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <RecruiterToggle on={recruiter} onChange={setRecruiter} />
          <a href="mailto:krrsantosh0@gmail.com" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "8px 14px", borderRadius: 999,
            background: "var(--accent)", color: "#0a0a0b",
            fontSize: 13, fontWeight: 500, letterSpacing: "-0.01em",
            transition: "transform 200ms",
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
            Hire me <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <style>{`
        .logo-short { display: none; }
        @media (max-width: 1080px) {
          .logo-full { display: none; }
          .logo-short { display: inline; }
        }
      `}</style>
    </header>
  );
};

const RecruiterToggle = ({ on, onChange }) => {
  return (
    <button
      onClick={() => onChange(!on)}
      title={on ? "Switch to deep dive view" : "Recruiter mode: 30-second TL;DR"}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "6px 6px 6px 12px",
        borderRadius: 999,
        border: "1px solid var(--line-2)",
        background: on ? "rgba(201,255,61,0.08)" : "rgba(255,255,255,0.02)",
        fontSize: 12, fontFamily: "var(--font-mono)",
        letterSpacing: "0.02em",
        color: on ? "var(--accent)" : "var(--ink-3)",
        transition: "all 200ms",
      }}
    >
      <span>{on ? "RECRUITER MODE" : "DEEP DIVE"}</span>
      <span style={{
        width: 28, height: 16, borderRadius: 999,
        background: on ? "var(--accent)" : "rgba(255,255,255,0.1)",
        position: "relative", transition: "all 200ms",
      }}>
        <span style={{
          position: "absolute", top: 2, left: on ? 14 : 2,
          width: 12, height: 12, borderRadius: 999,
          background: on ? "#0a0a0b" : "var(--ink-2)",
          transition: "all 200ms",
        }} />
      </span>
    </button>
  );
};

window.Nav = Nav;
