"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about", external: false },
    { label: "Projects", href: "/#projects", external: false },
    { label: "My Work", href: "https://drive.google.com/drive/folders/1LiaV1SC_tJMHepn5jYmWsQyZUPugD2MV?usp=sharing", external: true },
    { label: "Contact", href: "mailto:shubhamkverma08@gmail.com", external: false }
  ];

  return (
    <div className="terminal-app">
      {/* ── Top Header ── */}
      <header className={`top-bar ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="top-bar-brand">
          Shubham Verma.
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            link.external ? (
              <a key={link.label} href={link.href} className="nav-link" target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="nav-link">
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </header>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="mobile-nav-dropdown fade-in">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      )}

      {/* ── Main Layout Body ── */}
      <div className="terminal-body">
        <main className="terminal-main">
          {children}
        </main>
      </div>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-inner" style={{ flexDirection: "column", gap: "24px", alignItems: "center", textAlign: "center" }}>
          
          <div className="footer-contact" style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center", color: "var(--text-secondary)" }}>
            <a href="mailto:shubhamkverma08@gmail.com" className="footer-link-text" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              shubhamkverma08@gmail.com
            </a>
            
            <a href="tel:+918412824689" className="footer-link-text" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +91 8412824689
            </a>
          </div>

          <div className="footer-links" style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <a href="https://drive.google.com/drive/folders/1LiaV1SC_tJMHepn5jYmWsQyZUPugD2MV?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "14px" }}>
              View Resume
            </a>
            <a href="https://www.linkedin.com/in/shubham-verma-067643326" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn" style={{ padding: "8px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>

          <div className="footer-copy" style={{ color: "var(--text-muted)", fontSize: "14px" }}>
            &copy; {new Date().getFullYear()} Shubham Verma. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Extra CSS for Mobile Navigation */}
      <style jsx global>{`
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        
        .mobile-nav-dropdown {
          display: none;
          flex-direction: column;
          background: var(--bg-base);
          padding: 24px 40px;
          gap: 16px;
          position: fixed;
          top: var(--header-h);
          left: 0;
          right: 0;
          z-index: 999;
          border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-md);
        }

        .mobile-nav-link {
          font-size: 18px;
          font-weight: 500;
          color: var(--text-primary);
          padding: 12px 0;
        }

        @media (max-width: 968px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-nav-dropdown {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
}
