"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import { reports } from "@/data/reports";

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time || "--:--:--"}</span>;
}

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMobileOpen(false), [pathname]);

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);



  return (
    <div className="terminal-app">
      {/* ── Top Bar ── */}
      <header className="top-bar">
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "≡"}
        </button>
        <Link href="/" className="top-bar-brand">
          <div className="brand-indicator" />
          <span className="brand-name">Shubham Verma</span>
          <span className="brand-tag">CEEW</span>
        </Link>
        <div className="top-bar-spacer" />
        <div className="top-bar-meta">
          <div className="meta-chip">
            <div className="dot dot-green" />
            LIVE
          </div>
          <div className="meta-chip">
            <LiveClock />
          </div>
          <div className="meta-chip">
            <div className="dot dot-cyan" />
            IST
          </div>
        </div>
      </header>


      {/* ── Body ── */}
      <div className="terminal-body">
        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="mobile-overlay show"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Sidebar */}
        <nav
          className={`terminal-sidebar ${mobileOpen ? "open" : ""}`}
        >
          <div className="sidebar-section">
            <div className="sidebar-label">Navigation</div>
            <Link
              href="/"
              className={`sidebar-link ${isActive("/") && pathname === "/" ? "active" : ""}`}
            >
              <span className="link-icon">◈</span>
              Dashboard
            </Link>
            <Link
              href="/research"
              className={`sidebar-link ${isActive("/research") ? "active" : ""}`}
            >
              <span className="link-icon">◇</span>
              Research Hub
              <span className="link-count">{reports.length}</span>
            </Link>
            <Link
              href="/about"
              className={`sidebar-link ${isActive("/about") ? "active" : ""}`}
            >
              <span className="link-icon">◎</span>
              About
            </Link>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-label">Categories</div>
            {categories.map((cat) => {
              const count = reports.filter(
                (r) => r.category === cat.slug
              ).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/research/${cat.slug}`}
                  className={`sidebar-link ${pathname === `/research/${cat.slug}` ? "active" : ""}`}
                >
                  <span className="link-icon">{cat.icon}</span>
                  {cat.name}
                  <span className="link-count">{count}</span>
                </Link>
              );
            })}
          </div>

          <div className="sidebar-footer">
            <a
              href="https://www.linkedin.com/in/shubham-verma-067643326"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ LinkedIn
            </a>
            <a
              href="https://shubhamkverma.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ Domain
            </a>
          </div>
        </nav>

        {/* Main */}
        <main className="terminal-main">
          <div className="panel-container">{children}</div>
        </main>
      </div>
    </div>
  );
}
