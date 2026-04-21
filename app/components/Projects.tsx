"use client";

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
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-shell responsive-section"
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
                <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 2 }}>{project.name}</div>
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

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, paddingTop: 12, borderTop: "0.5px solid #f0ede8" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
