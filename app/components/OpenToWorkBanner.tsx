"use client";
import { useState, useEffect } from "react";

export default function OpenToWorkBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("banner-dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("banner-dismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 150,
        background: "var(--accent)",
        color: "#fff",
        padding: "9px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        fontSize: 12,
        fontFamily: "var(--font-mono)",
        letterSpacing: "0.04em",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#7EE8C0",
          display: "inline-block",
          flexShrink: 0,
          animation: "pulse 2s ease-in-out infinite",
        }}
      />
      <span>
        Open to new opportunities — remote &amp; on-site ·{" "}
        <a
          href="mailto:akmal.kuchkorov05@gmail.com"
          style={{ color: "#fff", opacity: 0.8, textDecoration: "underline" }}
        >
          akmal.kuchkorov05@gmail.com
        </a>
      </span>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          position: "absolute",
          right: 16,
          background: "transparent",
          border: "none",
          color: "rgba(255,255,255,0.7)",
          cursor: "pointer",
          fontSize: 16,
          lineHeight: 1,
          padding: "2px 6px",
        }}
      >
        ×
      </button>
    </div>
  );
}
