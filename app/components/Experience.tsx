"use client";

const experience = [
  {
    role: "Frontend Engineer",
    company: "Goodoc",
    location: "Seoul, South Korea",
    period: "Jul 2022 — Apr 2025",
    active: true,
    bullets: [
      "Built patient-facing mobile features for telemedicine video consultations",
      "Led UI implementation across Home, Search, Alerts & Healthcare tab surfaces",
      "Implemented real-time notifications UI and supporting logic",
      "Developed autocomplete search with API integration",
      "Delivered 'Health Magazine' with reusable components",
      "Integrated National Health Insurance checkup-history retrieval",
    ],
    tags: ["React Native", "GraphQL", "REST APIs"],
  },
  {
    role: "Frontend Lead",
    company: "Shaftoli App",
    location: "Seoul, South Korea",
    period: "Oct 2023 — May 2025",
    active: true,
    bullets: [
      "Led frontend architecture of a scalable marketplace application",
      "Built secure transaction flows and smart recommendation interfaces",
      "Developed real-time chat for seamless negotiations",
      "Collaborated on API design, data modeling, and integration with backend",
      "Optimized performance via code splitting, lazy loading, reusable components",
    ],
    tags: ["React Native", "TypeScript", "Redux"],
  },
  {
    role: "Frontend Lead",
    company: "Diving Buddy",
    location: "Seoul, South Korea",
    period: "Oct 2024 — Feb 2025",
    active: false,
    bullets: [
      "Led frontend of a location-based platform for divers",
      "Designed matching flows based on location, experience & interests",
      "Integrated geolocation services and real-time data updates",
      "Collaborated on API contracts, authentication & scalable data handling",
    ],
    tags: ["Next.js", "Geolocation", "TypeScript"],
  },
  {
    role: "Frontend Developer",
    company: "Outliers",
    location: "Seoul, South Korea",
    period: "Jul 2020 — Mar 2022",
    active: false,
    bullets: [
      "Built admin web platform across frontend and backend",
      "Implemented key mobile features: Profile, Video Detail, Feed Detail",
      "Integrated API-driven experiences and improved UI/UX",
      "Improved maintainability with reusable UI patterns and code reviews",
    ],
    tags: ["React", "Node.js", "Figma"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell responsive-section"
      style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}
    >
      <p className="section-label" style={{ marginBottom: 12 }}>Work history</p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          fontWeight: 400,
          marginBottom: 40,
          color: "#1a1a1a",
        }}
      >
        Experience
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {experience.map((job, i) => (
          <div key={job.company + job.period} className="experience-item" style={{ display: "flex", gap: 20, paddingBottom: i < experience.length - 1 ? 32 : 0 }}>
            {/* Timeline */}
            <div className="experience-timeline" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className={job.active ? "tl-dot-active" : "tl-dot"} />
              {i < experience.length - 1 && <div className="tl-line" />}
            </div>

            {/* Content */}
            <div style={{ flex: 1, paddingBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4, flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>{job.role}</div>
                  <div style={{ fontSize: 13, color: "var(--accent)", marginTop: 2 }}>
                    {job.company} · {job.location}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#999",
                    padding: "3px 10px",
                    border: "0.5px solid #e8e5e0",
                    borderRadius: 99,
                    background: "#fff",
                    whiteSpace: "nowrap",
                  }}
                >
                  {job.period}
                </span>
              </div>

              <ul style={{ paddingLeft: 18, marginTop: 10, marginBottom: 12 }}>
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    style={{ fontSize: 13, color: "#666", lineHeight: 1.75, marginBottom: 2 }}
                  >
                    {b}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {job.tags.map((tag) => (
                  <span key={tag} className="tag tag-accent">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginTop: 48, paddingTop: 32, borderTop: "0.5px solid #e8e5e0" }}>
        <p className="section-label" style={{ marginBottom: 16 }}>Education</p>
        <div className="card" style={{ padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 500 }}>B.S. Computer Science & Engineering</div>
            <div style={{ fontSize: 13, color: "var(--accent)", marginTop: 4 }}>Sejong University · Seoul, South Korea</div>
            <div style={{ fontSize: 12, color: "#999", marginTop: 4, lineHeight: 1.6 }}>
              Data Structures & Algorithms · Web Development · Database Systems · Software Engineering · OOP
            </div>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#999",
              padding: "3px 10px",
              border: "0.5px solid #e8e5e0",
              borderRadius: 99,
              background: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            Mar 2017 — Feb 2022
          </span>
        </div>
      </div>
    </section>
  );
}
