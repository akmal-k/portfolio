export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid #e8e5e0",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div
        className="footer-shell"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#999" }}>
          akmal<span style={{ color: "var(--accent)" }}>.tech</span>
        </span>
        <span style={{ fontSize: 12, color: "#bbb" }}>
          © {new Date().getFullYear()} Akmal Kuchkorov
        </span>
      </div>
    </footer>
  );
}
