"use client";
import { useReveal } from "../hooks/useReveal";

const posts = [
  {
    title: "React Native performance: what actually moves the needle",
    excerpt:
      "Most React Native performance advice targets the wrong things. Here's what genuinely matters — from the JS thread to the new architecture.",
    date: "Mar 2025",
    readTime: "6 min read",
    tag: "React Native",
    accent: { bg: "var(--accent-light)", text: "var(--accent)", border: "var(--accent-mid)" },
    slug: "react-native-performance",
  },
  {
    title: "GraphQL + Apollo Client patterns that actually scale",
    excerpt:
      "Practical patterns for GraphQL in production — caching strategies, optimistic updates, fragment colocation, and error handling that doesn't fail silently.",
    date: "Jan 2025",
    readTime: "7 min read",
    tag: "GraphQL",
    accent: { bg: "var(--teal-light)", text: "#085041", border: "#9FE1CB" },
    slug: "graphql-apollo-patterns",
  },
  {
    title: "Building a real-time notification system in React Native",
    excerpt:
      "A practical guide to layered notification architecture — push delivery, WebSocket connections, in-app state, and AppState reconciliation.",
    date: "Nov 2024",
    readTime: "6 min read",
    tag: "Architecture",
    accent: { bg: "var(--blue-light)", text: "#0C447C", border: "#B5D4F4" },
    slug: "realtime-notifications-rn",
  },
];

export default function Blog() {
  const ref = useReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      id="blog"
      className="section-shell responsive-section reveal"
      style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}
    >
      <p className="section-label" style={{ marginBottom: 12 }}>Writing</p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          fontWeight: 400,
          marginBottom: 8,
          color: "#1a1a1a",
        }}
      >
        Thoughts &amp; notes
      </h2>
      <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, marginBottom: 40 }}>
        Things I&apos;ve learned shipping production apps — shared so you don&apos;t have to find out the hard way.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card"
            style={{
              padding: "1.25rem 1.5rem",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 16,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span
                  style={{
                    fontSize: 10,
                    fontFamily: "var(--font-mono)",
                    background: post.accent.bg,
                    color: post.accent.text,
                    border: `0.5px solid ${post.accent.border}`,
                    padding: "2px 8px",
                    borderRadius: 99,
                  }}
                >
                  {post.tag}
                </span>
                <span style={{ fontSize: 11, color: "#bbb", fontFamily: "var(--font-mono)" }}>
                  {post.date} · {post.readTime}
                </span>
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  marginBottom: 6,
                  color: "#1a1a1a",
                  lineHeight: 1.4,
                }}
              >
                {post.title}
              </div>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.65, margin: 0 }}>
                {post.excerpt}
              </p>
            </div>
            <span style={{ color: "#ccc", fontSize: 18, flexShrink: 0, marginTop: 2 }}>→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
