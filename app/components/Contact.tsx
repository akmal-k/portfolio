"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="section-shell responsive-section contact-section"
      style={{ padding: "80px 24px 120px", maxWidth: 900, margin: "0 auto" }}
    >
      <p className="section-label" style={{ marginBottom: 12 }}>Get in touch</p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          fontWeight: 400,
          marginBottom: 8,
          color: "#1a1a1a",
        }}
      >
        Let&apos;s work together
      </h2>
      <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, marginBottom: 40 }}>
        Got a project in mind? Drop me a message and I&apos;ll get back within 24h.
      </p>

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, flexWrap: "wrap" } as React.CSSProperties}>
        {/* Form */}
        <div style={{ gridColumn: "1 / -1" } as React.CSSProperties}>
          {sent ? (
            <div
              className="card"
              style={{
                padding: "2rem",
                textAlign: "center",
                background: "var(--teal-light)",
                border: "0.5px solid #9FE1CB",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: "#085041", marginBottom: 8 }}>
                Message sent!
              </div>
              <div style={{ fontSize: 13, color: "#0F6E56" }}>
                Thanks for reaching out. I&apos;ll get back to you soon.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ fontSize: 11, color: "#999", fontFamily: "var(--font-mono)", display: "block", marginBottom: 6 }}>
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Alex Johnson"
                    required
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 10,
                      border: "0.5px solid #e8e5e0",
                      background: "#fff",
                      fontSize: 13,
                      fontFamily: "var(--font-sans)",
                      color: "#1a1a1a",
                      outline: "none",
                      transition: "border-color 0.15s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-mid)")}
                    onBlur={(e) => (e.target.style.borderColor = "#e8e5e0")}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 11, color: "#999", fontFamily: "var(--font-mono)", display: "block", marginBottom: 6 }}>
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 10,
                      border: "0.5px solid #e8e5e0",
                      background: "#fff",
                      fontSize: 13,
                      fontFamily: "var(--font-sans)",
                      color: "#1a1a1a",
                      outline: "none",
                      transition: "border-color 0.15s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-mid)")}
                    onBlur={(e) => (e.target.style.borderColor = "#e8e5e0")}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 11, color: "#999", fontFamily: "var(--font-mono)", display: "block", marginBottom: 6 }}>
                  Your message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 10,
                    border: "0.5px solid #e8e5e0",
                    background: "#fff",
                    fontSize: 13,
                    fontFamily: "var(--font-sans)",
                    color: "#1a1a1a",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.15s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent-mid)")}
                  onBlur={(e) => (e.target.style.borderColor = "#e8e5e0")}
                />
              </div>

              <div className="contact-actions" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <div className="contact-links" style={{ display: "flex", gap: 20 }}>
                  <a
                    href="https://github.com/akmal-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, color: "#999", textDecoration: "none", fontFamily: "var(--font-mono)" }}
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, color: "#999", textDecoration: "none", fontFamily: "var(--font-mono)" }}
                  >
                    LinkedIn ↗
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn-accent"
                  disabled={loading}
                  style={{ opacity: loading ? 0.6 : 1 }}
                >
                  {loading ? "Sending..." : "Send message →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
