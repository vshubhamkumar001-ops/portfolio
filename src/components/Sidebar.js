"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const [tickerItems, setTickerItems] = useState([]);

  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    fetch('/api/ticker')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setTickerItems(data);
      })
      .catch(err => console.error(err));
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Research", href: "/#research" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" }
  ];

  return (
    <div className="terminal-app">
      {/* ── Sticky Top Header ── */}
      <header className="top-bar">
        <Link href="/" className="top-bar-brand">
          <div className="brand-indicator" />
          <span className="brand-name">Shubham Verma</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <div className="meta-chip" style={{ marginLeft: "12px" }}>
            <LiveClock />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? "✕" : "≡"}
        </button>
      </header>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="mobile-nav-dropdown">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-nav-clock">
            <LiveClock /> (IST)
          </div>
        </div>
      )}

      {/* ── Live Ticker ── */}
      {tickerItems.length > 0 && (
        <div className="ticker-bar">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                <span className="ticker-item">
                  <span className="ticker-label">{item.label}</span>
                  <span
                    className={`ticker-value ${item.dir === "up" ? "ticker-up" : item.dir === "down" ? "ticker-down" : ""}`}
                  >
                    {item.value} {item.changeStr && <span style={{ fontSize: '9px', marginLeft: '4px', color: 'inherit' }}>{item.changeStr}</span>}
                  </span>
                  {item.dir === "up" && "▲"}
                  {item.dir === "down" && "▼"}
                </span>
                <span className="ticker-separator" />
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Main Layout Body ── */}
      <div className="terminal-body">
        <main className="terminal-main">
          <div className="panel-container">{children}</div>
        </main>
      </div>

      {/* Extra CSS for Mobile Navigation */}
      <style jsx global>{`
        .mobile-menu-btn {
          display: none;
          background: none;
          border: 1px solid var(--border);
          color: var(--primary);
          font-size: 20px;
          padding: 4px 8px;
          cursor: pointer;
          border-radius: 4px;
        }
        
        .mobile-nav-dropdown {
          display: none;
          flex-direction: column;
          background: var(--bg-base);
          border-bottom: 1px solid var(--border);
          padding: 16px 20px;
          gap: 12px;
          position: absolute;
          top: var(--header-h);
          left: 0;
          right: 0;
          z-index: 999;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .mobile-nav-link {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          padding: 8px 0;
          border-bottom: 0.5px solid var(--border);
        }

        .mobile-nav-clock {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          padding-top: 4px;
        }

        @media (max-width: 968px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .mobile-nav-dropdown {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
}

