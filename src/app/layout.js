import "./globals.css";
import AppShell from "@/components/Sidebar";

export const metadata = {
  title: "SV TERMINAL — Shubham Verma Research Dashboard",
  description:
    "Bloomberg-style research terminal for Shubham Kumar Verma, Renewable Energy Analyst at CEEW. Critical minerals, copper strategy, trade intelligence.",
  keywords: [
    "renewable energy",
    "CEEW",
    "critical minerals",
    "copper",
    "India energy transition",
    "research terminal",
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
