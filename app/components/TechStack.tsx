"use client";
import { useReveal } from "../hooks/useReveal";

const stack = {
  Frontend: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3"],
  "State / Data": ["Redux", "Recoil", "Context API", "GraphQL", "Apollo Client", "REST APIs"],
  "Testing & Quality": ["Jest", "React Testing Library", "ESLint", "Prettier", "Code Reviews"],
  "Tooling & Build": ["Vite", "Webpack", "Babel", "Lazy Loading", "Code Splitting", "Figma"],
  "Backend (working knowledge)": ["Node.js", "Nest.js", "MongoDB", "MySQL", "AWS", "Firebase"],
  "Workflow": ["Git", "GitHub", "Agile", "Scrum", "Design Collaboration"],
};

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  Frontend: { bg: "var(--accent-light)", border: "var(--accent-mid)", text: "var(--accent)" },
  "State / Data": { bg: "var(--teal-light)", border: "#9FE1CB", text: "#085041" },
  "Testing & Quality": { bg: "var(--coral-light)", border: "#F5C4B3", text: "#712B13" },
  "Tooling & Build": { bg: "var(--blue-light)", border: "#B5D4F4", text: "#0C447C" },
  "Backend (working knowledge)": { bg: "#F1EFE8", border: "#D3D1C7", text: "#444" },
  Workflow: { bg: "#FBEAF0", border: "#F4C0D1", text: "#72243E" },
};

export default function TechStack() {
  const ref = useReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-shell responsive-section"
      style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}
    >
      <p className="section-label" style={{ marginBottom: 12 }}>Tech stack</p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          fontWeight: 400,
          marginBottom: 40,
          color: "#1a1a1a",
        }}
      >
        Tools I work with
      </h2>

      <div
        className="tech-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 12,
        }}
      >
        {Object.entries(stack).map(([category, items]) => {
          const colors = categoryColors[category];
          return (
            <div
              key={category}
              className="card"
              style={{ padding: "1rem 1.25rem" }}
            >
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: colors.text,
                  fontFamily: "var(--font-mono)",
                  marginBottom: 12,
                  padding: "3px 10px",
                  background: colors.bg,
                  border: `0.5px solid ${colors.border}`,
                  borderRadius: 99,
                  display: "inline-block",
                }}
              >
                {category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
