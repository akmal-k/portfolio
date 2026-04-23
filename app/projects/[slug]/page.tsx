import { getCaseStudy, getAllSlugs } from "./data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main style={{ background: "#fafaf8", minHeight: "100vh", paddingBottom: 80 }}>
      {/* Back nav */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 24px 0" }}>
        <a
          href="/#projects"
          style={{
            fontSize: 12,
            fontFamily: "var(--font-mono)",
            color: "#999",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          ← Back to projects
        </a>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 0" }}>
        {/* Header */}
        <div
          style={{
            padding: "2rem",
            borderRadius: 20,
            background: study.accent.bg,
            border: `0.5px solid ${study.accent.border}`,
            marginBottom: 48,
          }}
        >
          <p
            style={{
              fontSize: 10,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: study.accent.text,
              marginBottom: 12,
              opacity: 0.7,
            }}
          >
            Case study
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 400,
              color: "#1a1a1a",
              marginBottom: 8,
              lineHeight: 1.2,
            }}
          >
            {study.name}
          </h1>
          <p style={{ fontSize: 16, color: study.accent.text, marginBottom: 20, lineHeight: 1.5 }}>
            {study.tagline}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "#666", fontFamily: "var(--font-mono)" }}>
              {study.role} · {study.company}
            </span>
            <span style={{ fontSize: 12, color: "#999", fontFamily: "var(--font-mono)" }}>
              {study.period}
            </span>
            <span style={{ fontSize: 12, color: "#999", fontFamily: "var(--font-mono)" }}>
              {study.location}
            </span>
          </div>
        </div>

        {/* Problem */}
        <section style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 10,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 16,
            }}
          >
            The problem
          </p>
          <p style={{ fontSize: 15, color: "#444", lineHeight: 1.85 }}>{study.problem}</p>
        </section>

        {/* Solution */}
        <section style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 10,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 16,
            }}
          >
            What I built
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {study.solution.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  fontSize: 14,
                  color: "#555",
                  lineHeight: 1.75,
                  paddingBottom: 12,
                  borderBottom: i < study.solution.length - 1 ? "0.5px solid #f0ede8" : "none",
                }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: study.accent.bg,
                    border: `0.5px solid ${study.accent.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: study.accent.text,
                    flexShrink: 0,
                    fontFamily: "var(--font-mono)",
                    marginTop: 2,
                  }}
                >
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Results */}
        <section style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 10,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 16,
            }}
          >
            Results
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {study.results.map((r, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "12px 16px",
                  background: study.accent.bg,
                  border: `0.5px solid ${study.accent.border}`,
                  borderRadius: 12,
                  fontSize: 14,
                  color: "#444",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: study.accent.text, fontWeight: 600, flexShrink: 0 }}>✓</span>
                {r}
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section style={{ marginBottom: study.storeLinks ? 48 : 0 }}>
          <p
            style={{
              fontSize: 10,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 16,
            }}
          >
            Tech stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {study.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  padding: "4px 12px",
                  borderRadius: 99,
                  background: "#fff",
                  border: "0.5px solid #e8e5e0",
                  color: "#666",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Store links */}
        {study.storeLinks && (
          <section>
            <p
              style={{
                fontSize: 10,
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#999",
                marginBottom: 16,
              }}
            >
              Live app
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={study.storeLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13,
                  fontFamily: "var(--font-mono)",
                  color: study.accent.text,
                  background: study.accent.bg,
                  border: `0.5px solid ${study.accent.border}`,
                  padding: "10px 20px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                View on App Store ↗
              </a>
              <a
                href={study.storeLinks.playStore}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13,
                  fontFamily: "var(--font-mono)",
                  color: study.accent.text,
                  background: study.accent.bg,
                  border: `0.5px solid ${study.accent.border}`,
                  padding: "10px 20px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                View on Play Store ↗
              </a>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
