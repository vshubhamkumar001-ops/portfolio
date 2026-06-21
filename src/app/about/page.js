export const metadata = {
  title: "About — SV Terminal",
  description:
    "Renewable Energy Research Analyst at CEEW. IIT Kharagpur MPP. Critical minerals, copper strategy, and clean energy trade intelligence.",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero anim-in d1">
        <div className="hero-label">
          <div className="hero-dot" /> Analyst Profile
        </div>
        <h1>Shubham Kumar Verma</h1>
        <p className="hero-sub">
          Renewable Energy Research Analyst at the Council on Energy,
          Environment and Water (CEEW), New Delhi. Pursuing a Master&apos;s in
          Public Policy, Law &amp; Governance at IIT Kharagpur.
        </p>
      </div>

      <div className="about-grid anim-in d2">
        {/* Education */}
        <div className="about-cell">
          <h3>🎓 Education</h3>
          <ul>
            <li>
              <strong>Master&apos;s in Public Policy, Law &amp; Governance</strong>{" "}
              (2024–2026)
              <br />
              Indian Institute of Technology, Kharagpur
            </li>
          </ul>
        </div>

        {/* Current Role */}
        <div className="about-cell">
          <h3>💼 Experience</h3>
          <ul>
            <li>
              <strong>Research Intern — CEEW</strong> (Aug 2025 – Present)
              <br />
              Council on Energy, Environment and Water, New Delhi
            </li>
          </ul>
        </div>

        {/* Work at CEEW */}
        <div className="about-cell full">
          <h3>📋 Deliverables at CEEW</h3>
          <ul>
            <li>
              <strong>August 2025:</strong> Extracted copper trade data from UN
              COMTRADE and analysed import-export trends. Researched and wrote
              on &quot;Copper as a Strategic Mineral for Clean Energy, Mobility, and
              Digital Infrastructure&quot;.
            </li>
            <li>
              <strong>September 2025:</strong> Write-up on copper as a strategic
              mineral. Data cleaning and inference of export-import data of
              provided HS codes related to copper.
            </li>
            <li>
              <strong>October 2025:</strong> Estimated the cost of production
              of rare-earth permanent magnets (OpEx and CapEx). Wrote a case
              study on China&apos;s REE supply restrictions and removal/ease in
              restrictions — implications on India and the world.
            </li>
          </ul>
        </div>

        {/* Research Domains */}
        <div className="about-cell">
          <h3>🔬 Research Domains</h3>
          <ul>
            <li>Critical Minerals &amp; NCMM 2025</li>
            <li>Copper Supply Chain &amp; Trade Strategy</li>
            <li>AI in Mineral Exploration</li>
            <li>Clean Energy Trade Data Analysis</li>
            <li>APAC Solar &amp; Renewable Energy</li>
            <li>Rare Earth Elements (REE) Policy</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="about-cell">
          <h3>🛠️ Skills &amp; Tools</h3>
          <div className="skill-tags" style={{ marginTop: "12px" }}>
            <span className="skill-chip">Policy Analysis</span>
            <span className="skill-chip">Trade Data (UN Comtrade)</span>
            <span className="skill-chip">HS Code Classification</span>
            <span className="skill-chip">Mineral Value Chain</span>
            <span className="skill-chip">Data Analysis</span>
            <span className="skill-chip">Research Writing</span>
            <span className="skill-chip">Stakeholder Engagement</span>
            <span className="skill-chip">Supply Chain Analysis</span>
          </div>
        </div>

        {/* Contact */}
        <div className="about-cell full author-card">
          <h3>📬 Contact Terminal</h3>
          <p>
            <strong>EMAIL 1:</strong> shubhamkverma08@gmail.com
            <br />
            <strong>EMAIL 2:</strong> shubhamverma.24@kgpian.iitkgp.ac.in
            <br />
            <strong>LINKEDIN:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/shubham-verma-067643326"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/shubham-verma-067643326
            </a>
            <br />
            <strong>DOMAIN:</strong>{" "}
            <a
              href="https://shubhamkverma.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              shubhamkverma.in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
