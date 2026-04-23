"use client";
import { useReveal } from "../hooks/useReveal";

const contactOptions = [
  {
    icon: "✉",
    label: "Send an email",
    value: "akmal.kuchkorov05@gmail.com",
    href: "mailto:akmal.kuchkorov05@gmail.com",
    cta: "Write to me",
    accent: { bg: "var(--accent-light)", text: "var(--accent)", border: "var(--accent-mid)" },
    note: "I reply within 2h",
  },
  {
    icon: "in",
    label: "Connect on LinkedIn",
    value: "linkedin.com/in/akmal-kuchkorov",
    href: "https://www.linkedin.com/in/akmal-kuchkorov/",
    cta: "View profile",
    accent: { bg: "var(--blue-light)", text: "#0C447C", border: "#B5D4F4" },
    note: "DMs open",
  },
  {
    icon: "{ }",
    label: "See my code",
    value: "github.com/akmal-k",
    href: "https://github.com/akmal-k",
    cta: "Open GitHub",
    accent: { bg: "#f5f5f5", text: "#333", border: "#ddd" },
    note: "Projects & contributions",
  },
];

const trust = [
  { label: "Response time", value: "< 2h" },
  { label: "Availability", value: "Immediate" },
  { label: "Preference", value: "Remote / Hybrid" },
  { label: "Open to", value: "Full-time · Contract" },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      id="contact"
      className="section-shell responsive-section contact-section reveal"
      style={{ padding: "80px 24px 120px", maxWidth: 900, margin: "0 auto" }}
    >
      <p className="section-label" style={{ marginBottom: 12 }}>Get in touch</p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          fontWeight: 400,
          marginBottom: 8,
          color: "#1a1a1a",
        }}
      >
        Let&apos;s build something great.
      </h2>
      <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, marginBottom: 12, maxWidth: 560 }}>
        I&apos;m actively looking for my next opportunity — full-time, contract,
        or freelance. If you have a product that needs a senior frontend
        engineer, I&apos;d love to hear about it.
      </p>

      {/* Trust bar */}
      <div
        style={{
          display: "flex",
          gap: 0,
          borderRadius: 12,
          overflow: "hidden",
          border: "0.5px solid #e8e5e0",
          background: "#fff",
          marginBottom: 40,
          flexWrap: "wrap",
        }}
      >
        {trust.map((t, i) => (
          <div
            key={t.label}
            style={{
              flex: "1 1 120px",
              padding: "12px 16px",
              borderRight: i < trust.length - 1 ? "0.5px solid #e8e5e0" : "none",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 15,
                color: "var(--accent)",
                marginBottom: 3,
              }}
            >
              {t.value}
            </div>
            <div style={{ fontSize: 10, color: "#999", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>
              {t.label}
            </div>
          </div>
        ))}
      </div>

      {/* Contact options */}
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 12,
          marginBottom: 40,
        }}
      >
        {contactOptions.map((opt) => (
          <a
            key={opt.label}
            href={opt.href}
            target={opt.href.startsWith("http") ? "_blank" : undefined}
            rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{ textDecoration: "none" }}
          >
            <div
              className="card"
              style={{
                padding: "1.25rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                cursor: "pointer",
                transition: "transform 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.borderColor = opt.accent.border;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: opt.accent.bg,
                    border: `0.5px solid ${opt.accent.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontFamily: "var(--font-mono)",
                    color: opt.accent.text,
                    flexShrink: 0,
                  }}
                >
                  {opt.icon}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a" }}>{opt.label}</div>
                  <div style={{ fontSize: 10, color: "#bbb", fontFamily: "var(--font-mono)" }}>{opt.note}</div>
                </div>
              </div>

              <div style={{ fontSize: 11, color: "#999", fontFamily: "var(--font-mono)" }}>
                {opt.value}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  color: opt.accent.text,
                  background: opt.accent.bg,
                  border: `0.5px solid ${opt.accent.border}`,
                  padding: "6px 14px",
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  alignSelf: "flex-start",
                }}
              >
                {opt.cta} ↗
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          padding: "1.5rem 2rem",
          borderRadius: 16,
          background: "var(--accent-light)",
          border: "0.5px solid var(--accent-mid)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              color: "#1a1a1a",
              marginBottom: 4,
            }}
          >
            Prefer a quick intro?
          </div>
          <div style={{ fontSize: 13, color: "#666" }}>
            Send a short message — no long forms, no gatekeepers.
          </div>
        </div>
        <a href="mailto:akmal.kuchkorov05@gmail.com" style={{ textDecoration: "none" }}>
          <button className="btn-accent" style={{ padding: "11px 24px", fontSize: 14, whiteSpace: "nowrap" }}>
            Email me now →
          </button>
        </a>
      </div>
    </section>
  );
}
