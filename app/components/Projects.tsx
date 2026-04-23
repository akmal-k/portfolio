"use client";
import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    name: "Shaftoli App",
    period: "Oct 2023 — May 2025",
    description:
      "Scalable marketplace for buying & selling products. Built secure transaction flows, smart recommendation interfaces, and real-time chat for seamless negotiations.",
    tags: ["React Native", "TypeScript", "Real-time Chat", "Redux"],
    accent: { bg: "var(--accent-light)", text: "var(--accent)", border: "var(--accent-mid)" },
    initial: "S",
    highlights: ["Frontend architecture lead", "Secure transactions", "Real-time chat"],
    impact: "Full marketplace shipped in under 7 months",
    status: "private",
    storeLinks: null,
    caseStudy: "/projects/shaftoli",
  },
  {
    name: "Goodoc",
    period: "Jul 2022 — Apr 2025",
    description:
      "Telemedicine platform for patient-facing mobile features. Shipped video consultations, real-time notifications, autocomplete search, and Health Insurance integration.",
    tags: ["React Native", "GraphQL", "Apollo Client", "REST APIs"],
    accent: { bg: "var(--teal-light)", text: "#085041", border: "#9FE1CB" },
    initial: "G",
    highlights: ["Video consultations", "Real-time notifications", "Health records"],
    impact: "10M+ registered users across iOS & Android",
    status: "live",
    storeLinks: {
      appStore: "https://apps.apple.com/kr/app/%EA%B5%BF%EB%8B%A5-%EB%B3%91%EC%9B%90-%EC%A0%91%EC%88%98-%EB%B3%91%EC%9B%90-%EC%98%88%EC%95%BD-%EB%B9%84%EB%8C%80%EB%A9%B4-%EC%A7%84%EB%A3%8C-%ED%95%84%EC%88%98-%EC%95%B1/id517637141",
      playStore: "https://play.google.com/store/apps/details?id=com.ksncho.hospitalinfo&hl=ko",
    },
    caseStudy: "/projects/goodoc",
  },
  {
    name: "Diving Buddy",
    period: "Oct 2024 — Feb 2025",
    description:
      "Location-based platform connecting diving enthusiasts with compatible partners. Matching flows based on location, experience level, and interests.",
    tags: ["Next.js", "Geolocation", "TypeScript", "State Mgmt"],
    accent: { bg: "var(--blue-light)", text: "#0C447C", border: "#B5D4F4" },
    initial: "D",
    highlights: ["Frontend lead", "Geolocation API", "Matching algorithm"],
    impact: "MVP delivered in 4 months, solo frontend",
    status: "private",
    storeLinks: null,
    caseStudy: null,
  },
  {
    name: "Outliers",
    period: "Jul 2020 — Mar 2022",
    description:
      "Admin web platform + mobile features. Built in-feed video playback, API-driven content flows, and reusable UI patterns with close design collaboration.",
    tags: ["React", "Node.js", "REST APIs", "Figma"],
    accent: { bg: "var(--coral-light)", text: "#712B13", border: "#F5C4B3" },
    initial: "O",
    highlights: ["Admin platform", "Video playback", "API integrations"],
    impact: "Web + mobile delivered by one frontend engineer",
    status: "private",
    storeLinks: null,
    caseStudy: null,
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      id="projects"
      className="section-shell responsive-section reveal"
      style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}
    >
      <p className="section-label" style={{ marginBottom: 12 }}>Featured projects</p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          fontWeight: 400,
          marginBottom: 40,
          color: "#1a1a1a",
        }}
      >
        Things I&apos;ve built
      </h2>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: 16,
        }}
      >
        {projects.map((project) => (
          <div
            key={project.name}
            className="card"
            style={{ padding: "1.4rem 1.5rem", position: "relative" }}
          >

            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: project.accent.bg,
                  border: `0.5px solid ${project.accent.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontFamily: "var(--font-display)",
                  color: project.accent.text,
                  flexShrink: 0,
                }}
              >
                {project.initial}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>{project.name}</span>
                  {project.status === "live" && (
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: "var(--font-mono)",
                        background: "var(--teal-light)",
                        color: "var(--teal)",
                        border: "0.5px solid #9FE1CB",
                        padding: "2px 7px",
                        borderRadius: 99,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase" as const,
                      }}
                    >
                      Live
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: project.accent.text,
                    background: project.accent.bg,
                    border: `0.5px solid ${project.accent.border}`,
                    padding: "2px 8px",
                    borderRadius: 99,
                    display: "inline-block",
                  }}
                >
                  {project.period}
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, marginBottom: 14 }}>
              {project.description}
            </p>

            {/* Highlights */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
              {project.highlights.map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: 11,
                    padding: "2px 8px",
                    borderRadius: 99,
                    background: project.accent.bg,
                    color: project.accent.text,
                    border: `0.5px solid ${project.accent.border}`,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Impact metric */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 14,
                fontSize: 12,
                color: project.accent.text,
                fontFamily: "var(--font-mono)",
              }}
            >
              <span style={{ opacity: 0.6 }}>→</span>
              {project.impact}
            </div>

            {/* Tags + links row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 5,
                paddingTop: 12,
                borderTop: "0.5px solid #f0ede8",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 4, flexWrap: "wrap" }}>
                {project.caseStudy && project.status !== "private" && (
                  <a
                    href={project.caseStudy}
                    style={{
                      fontSize: 11,
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    Case study →
                  </a>
                )}
                {project.storeLinks && (
                  <>
                    <a
                      href={project.storeLinks.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 10,
                        fontFamily: "var(--font-mono)",
                        color: project.accent.text,
                        background: project.accent.bg,
                        border: `0.5px solid ${project.accent.border}`,
                        padding: "4px 10px",
                        borderRadius: 8,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        transition: "opacity 0.15s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    >
                      App Store ↗
                    </a>
                    <a
                      href={project.storeLinks.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 10,
                        fontFamily: "var(--font-mono)",
                        color: project.accent.text,
                        background: project.accent.bg,
                        border: `0.5px solid ${project.accent.border}`,
                        padding: "4px 10px",
                        borderRadius: 8,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        transition: "opacity 0.15s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    >
                      Play Store ↗
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
