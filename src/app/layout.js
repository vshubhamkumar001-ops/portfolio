import "./globals.css";
import AppShell from "@/components/Sidebar";

export const metadata = {
  title: "Shubham Verma — Public Policy Researcher",
  description:
    "Portfolio of Shubham Kumar Verma, public policy researcher specializing in renewable energy transition, critical minerals, trade intelligence, and carbon markets.",
  keywords: [
    "public policy",
    "renewable energy",
    "critical minerals",
    "carbon markets",
    "India energy transition",
    "policy research",
    "Shubham Verma",
  ],
  authors: [{ name: "Shubham Kumar Verma" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
