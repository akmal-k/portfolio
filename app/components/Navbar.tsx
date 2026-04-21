"use client";
import { useState, useEffect } from "react";

const links = ["About", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="site-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s",
      }}
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

          <div className="nav-links" style={{ display: "flex", gap: 6 }}>
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
                  if (active !== link) {
                    (e.target as HTMLElement).style.color = "var(--accent)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== link) {
                    (e.target as HTMLElement).style.color = "#666";
                  }
                }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
