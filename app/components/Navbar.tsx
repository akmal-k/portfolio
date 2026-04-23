"use client";
import { useState, useEffect } from "react";

const links = ["About", "Projects", "Experience", "Blog", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setDark(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="site-nav"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.3s" }}
    >
      <div
        className="nav-shell"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: scrolled ? "10px 24px" : "18px 24px",
          transition: "padding 0.3s",
        }}
      >
        <div
          className={scrolled ? "nav-blur" : ""}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderRadius: 14,
            border: scrolled ? "0.5px solid #e8e5e0" : "0.5px solid transparent",
            transition: "all 0.3s",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 500 }}>
            akmal<span style={{ color: "var(--accent)" }}>.tech</span>
          </span>

          <div className="nav-links" style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  padding: "6px 14px",
                  borderRadius: 8,
                  color: active === link ? "var(--accent)" : "#666",
                  fontFamily: "var(--font-sans)",
                  transition: "all 0.15s",
                  backgroundColor: active === link ? "var(--accent-light)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (active !== link) (e.target as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (active !== link) (e.target as HTMLElement).style.color = "#666";
                }}
              >
                {link}
              </button>
            ))}

            <a href="/resume.pdf" download style={{ textDecoration: "none" }}>
              <button
                style={{
                  background: "transparent",
                  border: "0.5px solid #ccc",
                  cursor: "pointer",
                  fontSize: 12,
                  padding: "6px 14px",
                  borderRadius: 8,
                  color: "#666",
                  fontFamily: "var(--font-mono)",
                  transition: "all 0.15s",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-mid)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#ccc";
                  (e.currentTarget as HTMLElement).style.color = "#666";
                }}
              >
                Resume ↓
              </button>
            </a>

            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              style={{
                background: "transparent",
                border: "0.5px solid var(--accent-mid)",
                cursor: "pointer",
                width: 32,
                height: 32,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                transition: "all 0.15s",
                flexShrink: 0,
                color: "var(--accent)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {mounted ? (dark ? "☀︎" : "☽") : "☽"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
