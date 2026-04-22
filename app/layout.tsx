import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Akmal Kuchkorov — Frontend Engineer",
  description: "Frontend Engineer with 5+ years building high-performance web & mobile experiences. React, Next.js, React Native, TypeScript.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
