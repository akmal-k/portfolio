"use client";
import { useEffect, useState } from "react";

const roles = ["Frontend Engineer", "React Native Dev", "Next.js Specialist", "UI Craftsman"];

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
      {/* Background accent circle */}
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
            <div
              className="hero-experience-badge"
              style={{
                display: "inline-flex",
                alignItems: "baseline",
                gap: 12,
                marginBottom: 20,
                padding: "10px 18px",
                borderRadius: 999,
                background: "#fff",
                border: "1px solid var(--accent-mid)",
                boxShadow: "0 10px 30px rgba(83, 74, 183, 0.08)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: 1,
                  color: "var(--accent)",
                }}
              >
                5+
              </span>
              <span
                className="section-label"
                style={{
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  color: "#5e5a74",
                }}
              >
                years of experience
              </span>
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#999",
                letterSpacing: "0.1em",
                marginBottom: 12,
              }}
            >
              Akmal Kuchkorov
            </div>

            <h1
              className="hero-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 58px)",
                lineHeight: 1.12,
                marginBottom: 20,
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
                marginBottom: 20,
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
                maxWidth: 520,
                marginBottom: 32,
              }}
            >
              React · Next.js · React Native · TypeScript — fast, precise products
              built with clean architecture and thoughtful UX.
            </p>

            <div className="hero-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <button
                className="btn-accent"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View projects
              </button>
              <a
                href="mailto:akmalkuchkorov98@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <button className="btn-outline">Get in touch</button>
              </a>
            </div>

            {/* Status pill */}
            <div
              className="hero-status-pill"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 12,
                background: "#fff",
                border: "0.5px solid #e8e5e0",
                fontSize: 12,
                color: "#555",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--teal)",
                    display: "inline-block",
                    flexShrink: 0,
                    boxShadow: "0 0 0 3px var(--teal-light)",
                  }}
                />
                <span style={{ fontWeight: 500 }}>Available for new opportunities</span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--teal)",
                  background: "var(--teal-light)",
                  padding: "3px 10px",
                  borderRadius: 99,
                  letterSpacing: "0.05em",
                }}
              >
                Remote friendly
              </span>
            </div>
          </div>

          {/* Avatar */}
          <div
            className="hero-avatar-wrap"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.9)",
              transition: "all 1s ease 0.3s",
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
              {/* Online dot */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
