import { getPost, getAllPostSlugs } from "./data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main style={{ background: "#fafaf8", minHeight: "100vh", paddingBottom: 80 }}>
      {/* Back nav */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px 0" }}>
        <a
          href="/#blog"
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
          ← Back to writing
        </a>
      </div>

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 0" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span
              style={{
                fontSize: 10,
                fontFamily: "var(--font-mono)",
                background: post.accent.bg,
                color: post.accent.text,
                border: `0.5px solid ${post.accent.border}`,
                padding: "3px 10px",
                borderRadius: 99,
              }}
            >
              {post.tag}
            </span>
            <span style={{ fontSize: 12, color: "#999", fontFamily: "var(--font-mono)" }}>
              {post.date} · {post.readTime}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.25,
              marginBottom: 16,
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              fontSize: 16,
              color: "#666",
              lineHeight: 1.7,
              borderLeft: `3px solid ${post.accent.border}`,
              paddingLeft: 16,
              fontStyle: "italic",
            }}
          >
            {post.excerpt}
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {post.sections.map((section, i) => (
            <section key={i}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 400,
                  color: "#1a1a1a",
                  marginBottom: 14,
                  lineHeight: 1.3,
                }}
              >
                {section.heading}
              </h2>

              <div
                style={{
                  fontSize: 15,
                  color: "#555",
                  lineHeight: 1.85,
                  whiteSpace: "pre-line",
                  marginBottom: section.code ? 20 : 0,
                }}
              >
                {section.body}
              </div>

              {section.code && (
                <div
                  style={{
                    background: "#0F0F12",
                    borderRadius: 12,
                    padding: "20px 24px",
                    overflow: "auto",
                    border: "0.5px solid #2A2A35",
                  }}
                >
                  <pre
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      color: "#C9C5B8",
                      lineHeight: 1.7,
                      whiteSpace: "pre",
                    }}
                  >
                    {section.code}
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 32,
            borderTop: "0.5px solid #e8e5e0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a", marginBottom: 4 }}>
              Akmal Kuchkorov
            </div>
            <div style={{ fontSize: 12, color: "#999", fontFamily: "var(--font-mono)" }}>
              Frontend Engineer · Seoul
            </div>
          </div>
          <a
            href="mailto:akmalkuchkorov98@gmail.com"
            style={{
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: post.accent.text,
              background: post.accent.bg,
              border: `0.5px solid ${post.accent.border}`,
              padding: "8px 16px",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Get in touch →
          </a>
        </div>
      </article>
    </main>
  );
}
