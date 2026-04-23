"use client";
import { useEffect, useState } from "react";

const roles = ["Frontend Engineer", "React Native Dev", "Next.js Specialist", "UI Craftsman"];

const stats = [
  { value: "5+", label: "years shipping" },
  { value: "4", label: "apps in production" },
  { value: "10M+", label: "users reached" },
  { value: "3", label: "countries" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="about"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        position: "relative",
      }}
    >
      {/* Background accent */}
      <div
        className="hero-accent"
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "var(--accent-light)",
          opacity: 0.5,
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="section-shell" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="hero-layout"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          {/* Text */}
          <div
            className="hero-copy"
            style={{
              flex: 1,
              minWidth: 280,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease",
            }}
          >
            {/* Name */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#999",
                letterSpacing: "0.1em",
                marginBottom: 14,
              }}
            >
              Akmal Kuchkorov
            </div>

            {/* Headline */}
            <h1
              className="hero-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 58px)",
                lineHeight: 1.12,
                marginBottom: 16,
                color: "#1a1a1a",
              }}
            >
              I build interfaces
              <br />
              <span style={{ color: "var(--accent)" }}>people love to use.</span>
            </h1>

            {/* Typewriter */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "var(--accent)",
                marginBottom: 16,
                height: 22,
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>{displayed}</span>
              <span className="cursor-blink" />
            </div>

            <p
              style={{
                fontSize: 15,
                color: "#666",
                lineHeight: 1.8,
                maxWidth: 500,
                marginBottom: 28,
              }}
            >
              I specialise in React, Next.js & React Native — building fast,
              polished products that work at scale and feel great to use.
            </p>

            {/* CTAs */}
            <div className="hero-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
              <a href="mailto:akmal.kuchkorov05@gmail.com" style={{ textDecoration: "none" }}>
                <button className="btn-accent" style={{ padding: "11px 24px", fontSize: 14 }}>
                  Let&apos;s talk →
                </button>
              </a>
              <button
                className="btn-outline"
                style={{ padding: "11px 24px", fontSize: 14 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                See my work
              </button>
            </div>

            {/* Trust micro-copy */}
            <p style={{ fontSize: 11, color: "#bbb", fontFamily: "var(--font-mono)", marginBottom: 28 }}>
              Replies within 2h · Available now
            </p>

            {/* Stats row */}
            <div
              className="hero-stats"
              style={{
                display: "flex",
                gap: 0,
                borderRadius: 12,
                overflow: "hidden",
                border: "0.5px solid #e8e5e0",
                background: "#fff",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    flex: 1,
                    padding: "12px 10px",
                    textAlign: "center",
                    borderRight: i < stats.length - 1 ? "0.5px solid #e8e5e0" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 10, color: "#999", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div
            className="hero-avatar-wrap"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.9)",
              transition: "all 1s ease 0.3s",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              className="hero-avatar"
              style={{
                width: 160,
                height: 160,
                borderRadius: "50%",
                background: "var(--accent-light)",
                border: "2px solid var(--accent-mid)",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <img
                src="/avatar.jpg"
                alt="Akmal Kuchkorov"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "var(--teal)",
                  border: "2.5px solid #fafaf8",
                }}
              />
            </div>

            {/* Available pill under avatar */}
            <div
              className="hero-status-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 99,
                background: "var(--teal-light)",
                border: "0.5px solid #9FE1CB",
                fontSize: 11,
                color: "#085041",
                fontFamily: "var(--font-mono)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--teal)",
                  display: "inline-block",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              Open to work · Remote
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
