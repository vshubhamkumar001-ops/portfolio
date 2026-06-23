"use client";

import { useState } from "react";
import Link from "next/link";

export default function PortfolioPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("SENDING");
    setTimeout(() => {
      setFormStatus("SUCCESS");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus(""), 4000);
    }, 1500);
  };

  const stats = [
    { num: "2+", title: "Years Experience", desc: "In energy market intelligence & policy analysis" },
    { num: "12+", title: "Reports & Briefs", desc: "Critical mineral values, climate policies, & tariffs" },
    { num: "15k+", title: "Trade Records", desc: "Custom UN Comtrade & HS code data models" },
    { num: "5+", title: "Core Policy Areas", desc: "Energy, critical minerals, tech policy, and carbon markets" }
  ];

  const projects = [
    {
      category: "Critical Minerals",
      title: "Leveraging AI in India's Critical Mineral Value Chain",
      description: "Developing machine learning targeting algorithms to identify mineral-bearing regions and streamline exploration data processing.",
      year: "2025",
      link: "/research/critical-minerals/ai-critical-mineral-value-chain",
      tagColor: "#10b981"
    },
    {
      category: "Resource Strategy",
      title: "Securing India's Copper Supply Chain for Electrification",
      description: "Analyzing trade deficits, global supply concentration, and domestic refining gaps for key transition materials.",
      year: "2025",
      link: "/research/copper-strategy/copper-strategic-mineral-full-report",
      tagColor: "#1d6fad"
    },
    {
      category: "Carbon Markets",
      title: "CERC Carbon Credit Certificates Regulations Briefing",
      description: "Evaluating pricing floor/forbearance boundaries, registry architecture, and compliance protocols under CCTS 2023.",
      year: "2026",
      link: "/research/carbon-markets/cerc-carbon-regulations",
      tagColor: "#16a34a"
    },
    {
      category: "Energy Policy",
      title: "Strategic Review of the Draft National Electricity Policy 2026",
      description: "Assessing DISCOM reform compliance, open access pathways, and grid integration mechanisms for renewable targets.",
      year: "2026",
      link: "/research/energy-policy/draft-nep-2026",
      tagColor: "#0284c7"
    }
  ];

  const skillsData = [
    {
      category: "Quantitative Analytics",
      skills: [
        { name: "UN Comtrade & Trade Intelligence", val: "95%" },
        { name: "CapEx & OpEx Cost Modeling", val: "90%" },
        { name: "Econometric Modeling (Python/STATA)", val: "85%" },
        { name: "Market Trend & Data Dashboarding", val: "90%" }
      ]
    },
    {
      category: "Policy & Governance",
      skills: [
        { name: "Regulatory Briefing & Synthesis", val: "95%" },
        { name: "CERC & Carbon Market Analysis", val: "90%" },
        { name: "National Strategy Evaluation (NCMM)", val: "95%" },
        { name: "ESG & Compliance Tracking", val: "85%" }
      ]
    },
    {
      category: "Research & Execution",
      skills: [
        { name: "Stakeholder Engagement & Interviews", val: "90%" },
        { name: "Primary Household Surveys & Fieldwork", val: "95%" },
        { name: "Technical Report Writing", val: "95%" },
        { name: "Agile Project Management (Google PM)", val: "90%" }
      ]
    }
  ];

  const experience = [
    {
      years: "May 2026 – Present",
      role: "Research Intern – Renewable Energy",
      org: "Mercom India",
      desc: "Track and analyze regulatory updates, capacity additions, tariff structures, and auction bids across SECI, MNRE, and state DISCOMs to produce actionable market intelligence briefs."
    },
    {
      years: "Feb 2026 – Apr 2026",
      role: "Sustainability Intern",
      org: "KOAN Advisory Group",
      desc: "Drafted policy briefs assessing implications of CERC Carbon Credit Certificates Regulations 2026 and international Article 6 compliance frameworks for industrial stakeholders."
    },
    {
      years: "Aug 2025 – Nov 2025",
      role: "Research Intern – Technology Futures",
      org: "Council on Energy, Environment and Water (CEEW)",
      desc: "Conducted UN Comtrade data analysis on copper value chains and evaluated capital feasibility models for critical mineral processing parks under the National Critical Mineral Mission 2025."
    },
    {
      years: "May 2025 – Jul 2025",
      role: "Public Policy Intern",
      org: "Office of the District Collector (Shahdol, M.P.)",
      desc: "Led a primary survey of 100+ rural households evaluating Ayushman Bharat (PM-JAY) implementation bottlenecks, converting field findings into administrative action points."
    },
    {
      years: "2024 – 2026",
      role: "Master's in Public Policy, Law & Governance",
      org: "Indian Institute of Technology, Kharagpur",
      desc: "Specialized in quantitative research, regulatory evaluation, and macro-economics. Key academic projects focused on modeling financial market stability and analyzing urban flood policy."
    }
  ];

  return (
    <div className="anim-in d1">
      {/* ── 1. HERO SECTION ── */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="section-label-container">
            <span className="section-label">Public Policy Researcher</span>
            <div className="section-rule" />
          </div>
          <h1 className="hero-headline">
            Shaping Policy<br />
            Through <span className="accent">Evidence.</span>
          </h1>
          <p className="hero-subheading">
            Independent researcher specializing in renewable energy transition, critical mineral value chains, trade intelligence, and carbon market regulation.
          </p>
          <div className="btn-group" style={{ marginTop: "12px" }}>
            <a href="#research" className="btn btn-primary">
              View My Research
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero-avatar-container">
          <div className="hero-avatar">SV</div>
        </div>
      </section>

      {/* ── 2. ABOUT ME SECTION ── */}
      <section id="about" className="about-section">
        <div className="section-label-container">
          <span className="section-label">01 // PROFILE & BACKGROUND</span>
          <div className="section-rule" />
        </div>
        <div className="about-grid">
          <div className="about-left">
            <h2>Bridging Data Analytics & Strategic Governance</h2>
            <div className="about-bio">
              <p>
                I am a dedicated policy researcher focusing on India's clean energy transition and resource security. I combine quantitative data rigor—such as cleaning large trade datasets and cost modeling—with deep qualitative regulatory assessments to build objective, evidence-based policy inputs.
              </p>
              <p>
                Currently completing my Master's in Public Policy at IIT Kharagpur, I have researched copper supply dependencies, carbon market architectures, and industrial manufacturing policies. My analytical model targets real-world economic resilience and strategic sovereignty.
              </p>
            </div>
          </div>
          <div className="about-right">
            <div className="stats-grid">
              {stats.map((s, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-title">{s.title}</div>
                  <div className="stat-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. RESEARCH / PROJECTS ── */}
      <section id="research" className="research-section">
        <div className="section-label-container">
          <span className="section-label">02 // WRITING SAMPLES & WORK</span>
          <div className="section-rule" />
        </div>
        <h2 style={{ marginBottom: "12px" }}>Selected Policy Research</h2>
        <p className="section-desc">
          Structured briefings and reports addressing critical supply chain vulnerabilities, electricity regulatory frameworks, and market integrations.
        </p>
        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div key={idx} className="project-card">
              <div className="project-top">
                <span className="project-tag" style={{ color: p.tagColor }}>
                  {p.category}
                </span>
                <h3>{p.title}</h3>
                <p className="project-desc">{p.description}</p>
              </div>
              <div className="project-bottom">
                <span className="project-year">{p.year}</span>
                <Link href={p.link} className="project-link">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "32px", display: "flex", justifyContent: "center" }}>
          <Link href="/research" className="btn btn-outline" style={{ padding: "10px 24px" }}>
            Explore All Writing Samples
          </Link>
        </div>
      </section>

      {/* ── 4. WHY MY FOR POLICY RESEARCH ── */}
      <section className="why-me-section">
        <div className="section-label-container">
          <span className="section-label">03 // ANALYTICAL ADVANTAGE</span>
          <div className="section-rule" />
        </div>
        <div className="why-me-box">
          <h2 style={{ textAlign: "center", marginBottom: "8px" }}>Why My Approach to Policy Analytics?</h2>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 36px auto", color: "var(--text-secondary)", fontSize: "15px" }}>
            A unique blend of engineering fundamentals, quantitative data methodologies, and governance research.
          </p>
          <div className="why-me-grid">
            <div className="why-me-card">
              <div className="why-me-card-icon">📈</div>
              <h4>Quantitative Modeling & Rigor</h4>
              <p>
                Experienced in building economic, pricing, and feasibility models. From extracting and cleaning UN Comtrade codes to estimating Rare Earth magnet CapEx and modeling institutional investments over a 14-year horizon.
              </p>
            </div>
            <div className="why-me-card">
              <div className="why-me-card-icon">📜</div>
              <h4>Regulatory Interpretation</h4>
              <p>
                Skilled at reading complex drafting policies (e.g. CERC 2026, MNRE Standards, Draft NEP 2026) and distilling them into high-level policy briefings, assessing risk vectors and strategic alignments for markets.
              </p>
            </div>
            <div className="why-me-card">
              <div className="why-me-card-icon">👥</div>
              <h4>Grounded Field Research</h4>
              <p>
                Proven ability to translate field survey findings into executive summaries. Spearheaded primary surveys across 100+ rural households for DM offices, analyzing welfare scheme bottlenecks and delivery workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SKILLS SECTION ── */}
      <section className="skills-section">
        <div className="section-label-container">
          <span className="section-label">04 // CAPABILITIES & TOOLS</span>
          <div className="section-rule" />
        </div>
        <h2>Professional Core Skills</h2>
        <p className="section-desc" style={{ marginBottom: "36px" }}>
          Technical software systems, policy frameworks, and methodological proficiencies refined through academic rigor and research internships.
        </p>
        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <h3>{cat.category}</h3>
              <div className="skill-list">
                {cat.skills.map((s, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-val">{s.val}</span>
                    </div>
                    <div className="skill-progress-bg">
                      <div className="skill-progress-bar" style={{ width: s.val }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. EXPERIENCE / TIMELINE ── */}
      <section id="experience" className="experience-section">
        <div className="section-label-container">
          <span className="section-label">05 // PROFESSIONAL HISTORY</span>
          <div className="section-rule" />
        </div>
        <h2>Experience & Resume</h2>
        <div className="timeline" style={{ marginTop: "24px" }}>
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-left">{exp.years}</div>
              <div className="timeline-right">
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-org">{exp.org}</div>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. CONTACT SECTION ── */}
      <section id="contact" className="contact-section">
        <div className="section-label-container">
          <span className="section-label">06 // CORRESPONDENCE</span>
          <div className="section-rule" />
        </div>
        <div className="contact-grid">
          <div className="contact-left">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              I am open to discussions regarding energy and resources policy, carbon markets, macro-industrial research opportunities, and data-driven policy analytics.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div className="contact-info-text">
                  <a href="mailto:shubhamkverma08@gmail.com">shubhamkverma08@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-info-text">New Delhi / Kharagpur, India</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🔗</div>
                <div className="contact-info-text">
                  <a href="https://www.linkedin.com/in/shubham-verma-067643326" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/shubham-verma-067643326
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Policy research inquiry"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message details here..."
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={formStatus === "SENDING"}
                style={{ alignSelf: "flex-start", marginTop: "12px", minWidth: "140px" }}
              >
                {formStatus === "SENDING"
                  ? "Sending..."
                  : formStatus === "SUCCESS"
                  ? "✓ Sent"
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
