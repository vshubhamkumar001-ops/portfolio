"use client";

import Link from "next/link";

export default function PortfolioPage() {
  const skills = [
    "Policy Research",
    "Regulatory Analysis",
    "Literature Review",
    "Data Analysis",
    "Stakeholder Mapping",
    "R",
    "Python",
    "STATA",
    "Econometric Modeling",
    "CapEx Modeling"
  ];

  const projects = [
    {
      category: "Critical Minerals",
      title: "Leveraging AI in India's Critical Mineral Value Chain",
      description: "Machine learning algorithms for mineral-bearing region identification and exploration data processing under NCMM 2025.",
      link: "/research/critical-minerals/ai-critical-mineral-value-chain",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05"/>
            </linearGradient>
            <pattern id="pattern-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle fill="#000" cx="2" cy="2" r="1.5" opacity="0.1"></circle>
            </pattern>
          </defs>
          <rect width="400" height="300" fill="url(#grad1)" />
          <rect width="400" height="300" fill="url(#pattern-dots)" />
          <path d="M 50 250 Q 100 200 150 220 T 250 150 T 350 100" fill="none" stroke="var(--accent)" strokeWidth="3" opacity="0.6"/>
          <circle cx="150" cy="220" r="6" fill="#fff" stroke="var(--accent)" strokeWidth="2"/>
          <circle cx="250" cy="150" r="6" fill="#fff" stroke="var(--accent)" strokeWidth="2"/>
          <circle cx="350" cy="100" r="6" fill="#fff" stroke="var(--accent)" strokeWidth="2"/>
          <rect x="70" y="150" width="30" height="100" rx="4" fill="var(--text-muted)" opacity="0.1"/>
          <rect x="120" y="180" width="30" height="70" rx="4" fill="var(--text-muted)" opacity="0.15"/>
          <rect x="170" y="120" width="30" height="130" rx="4" fill="var(--text-muted)" opacity="0.2"/>
          <rect x="220" y="90" width="30" height="160" rx="4" fill="var(--text-muted)" opacity="0.1"/>
        </svg>
      )
    },
    {
      category: "Resource Strategy",
      title: "Securing India's Copper Supply Chain",
      description: "Analyzing $6.8B trade deficits and global supply concentration for transition materials.",
      link: "/research/copper-strategy/copper-strategic-mineral-full-report",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#grad2)" />
          <path d="M 0 150 C 100 150 150 50 200 150 C 250 250 300 150 400 150" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="4 4"/>
          <polygon points="150,150 250,150 200,220" fill="var(--accent)" opacity="0.1"/>
          <circle cx="200" cy="150" r="40" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" opacity="0.3"/>
          <circle cx="200" cy="150" r="20" fill="var(--accent)" opacity="0.1"/>
          <line x1="200" y1="110" x2="200" y2="70" stroke="var(--text-muted)" strokeWidth="2" opacity="0.5"/>
          <line x1="200" y1="190" x2="200" y2="230" stroke="var(--text-muted)" strokeWidth="2" opacity="0.5"/>
        </svg>
      )
    },
    {
      category: "Energy Policy",
      title: "Draft National Electricity Policy 2026",
      description: "DISCOM reform compliance, open access pathways, and grid integration mechanisms.",
      link: "/research/energy-policy/draft-nep-2026",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#grad3)" />
          <path d="M 50 150 L 150 150 L 200 50 L 250 250 L 300 150 L 350 150" fill="none" stroke="var(--text-muted)" strokeWidth="2" opacity="0.4"/>
          <circle cx="150" cy="150" r="5" fill="var(--text-primary)" opacity="0.5"/>
          <circle cx="300" cy="150" r="5" fill="var(--text-primary)" opacity="0.5"/>
          <rect x="50" y="50" width="300" height="200" rx="12" fill="none" stroke="var(--text-muted)" strokeWidth="1" opacity="0.2"/>
        </svg>
      )
    }
  ];

  return (
    <div className="fade-in">
      {/* Background Graphic Orbs */}
      <div className="bg-glow glow-blue"></div>
      <div className="bg-glow glow-purple"></div>
      {/* ── 1. HERO SECTION ── */}
      <section className="hero-section panel-container">
        <h1 className="hero-headline">
          Shubham Verma<br />
          <span style={{ color: "var(--text-muted)", fontWeight: "600" }}>Public Policy Researcher.</span>
        </h1>
        <p className="hero-subheading">
          Translating complex, multi-dimensional policy challenges into clear, evidence-based insights and actionable recommendations for a sustainable future.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">
            View Work
          </a>
          <a href="mailto:shubhamkverma08@gmail.com" className="btn btn-outline">
            Resume / Contact
          </a>
        </div>
      </section>

      {/* ── 2. ABOUT SECTION ── */}
      <section id="about" className="about-section panel-container">
        <div className="about-grid">
          <div className="about-text">
            <h2>About Me</h2>
            <div className="about-bio">
              <p>
                Public policy researcher and IIT Kharagpur graduate with hands-on experience across Renewable energy, critical minerals, sustainability governance, environmental regulation and climate policy, built through research experiences at Mercom India, CEEW, KOAN Advisory, and the Office of the District Collector, Shahdol.
              </p>
              <p>
                I specialise in policy research, regulatory analysis, literature review, data analysis and stakeholder mapping, with the ability to translate complex, multi-dimensional policy challenges into clear, evidence-based insights and actionable recommendations.
              </p>
              <p>
                My work sits at the intersection of environmental governance, clean energy transition, technology policy, and strategic sectors, areas where rigorous research and independent analysis can drive meaningful public impact. I bring strong quantitative skills in R, Python, and STATA alongside a track record of policy writing across issue briefs, field reports, and regulatory assessments.
              </p>
            </div>
          </div>
          
          <div className="about-skills">
            <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Technical & Analytical Skills</h2>
            <div className="skill-badges">
              {skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROJECTS / CASE STUDIES (Bento Grid) ── */}
      <section id="projects" className="projects-section panel-container">
        <div className="section-header">
          <h2>Featured Research</h2>
          <p>A selection of recent issue briefs, field reports, and regulatory assessments focusing on India's energy transition and resource security.</p>
        </div>

        <div className="bento-grid">
          {projects.map((project, idx) => (
            <Link 
              href={project.link} 
              key={idx} 
              className={`bento-item ${idx === 0 ? "featured" : ""}`}
            >
              <div className="bento-thumb">
                {project.icon}
              </div>
              <div className="bento-content">
                <div>
                  <div className="bento-tag">{project.category}</div>
                  <h3 className="bento-title">{project.title}</h3>
                  <p className="bento-desc">{project.description}</p>
                </div>
                <div className="bento-link">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <Link href="/research" className="btn btn-outline" style={{ padding: "12px 32px" }}>
            View All Publications
          </Link>
        </div>
      </section>

      {/* ── 4. MY WORK (Google Drive) ── */}
      <section id="my-work" className="panel-container" style={{ paddingBottom: "100px" }}>
        <div style={{ background: "var(--bg-surface)", padding: "48px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>Complete Work Archive</h2>
            <p style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "600px", marginBottom: 0 }}>
              Explore my full repository of public policy research, field reports, and regulatory assessments on Google Drive.
            </p>
          </div>
          <a 
            href="https://drive.google.com/drive/folders/1LiaV1SC_tJMHepn5jYmWsQyZUPugD2MV?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ display: "inline-flex", gap: "10px", padding: "16px 32px" }}
          >
            Open Google Drive
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
