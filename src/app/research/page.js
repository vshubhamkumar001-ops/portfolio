import Link from "next/link";
import { categories } from "@/data/categories";
import { reports } from "@/data/reports";

export const metadata = {
  title: "Research Hub — Shubham Verma",
  description: "Browse writing samples and briefings on energy transition, critical minerals, and industrial policy.",
};

export default function ResearchPage() {
  return (
    <div className="fade-in">
      {/* Background Graphic Orbs */}
      <div className="bg-glow glow-blue" style={{ top: "10%", left: "-10%" }}></div>
      <div className="bg-glow glow-purple" style={{ top: "40%", right: "-10%" }}></div>

      <div className="panel-container" style={{ padding: "80px 32px" }}>
        
        {/* ── HERO SECTION ── */}
        <section style={{ marginBottom: "80px", maxWidth: "800px" }}>
          <h1 style={{ fontSize: "56px", marginBottom: "24px" }}>Research Hub.</h1>
          <p style={{ fontSize: "20px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            A compilation of policy briefs, regulatory analyses, and industry reports evaluating the clean energy transition, critical mineral supply chain security, and industrial-tech policies.
          </p>
        </section>

        {/* ── CATEGORIES (Bento Grid Style) ── */}
        <section style={{ marginBottom: "100px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "32px" }}>Browse by Category</h2>
          
          <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {categories.map((cat) => {
              const count = reports.filter((r) => r.category === cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/research/${cat.slug}`}
                  className="bento-item"
                  style={{ minHeight: "280px" }}
                >
                  <div className="bento-content" style={{ padding: "32px" }}>
                    <div style={{ width: "48px", height: "48px", marginBottom: "20px", color: "var(--text-primary)" }}>
                      {cat.icon}
                    </div>
                    <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>{cat.name}</h3>
                    <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "24px", flex: 1 }}>
                      {cat.description}
                    </p>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {count} {count === 1 ? "Publication" : "Publications"} &rarr;
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── ALL PUBLICATIONS ── */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--border)", paddingBottom: "16px", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "28px", margin: 0 }}>All Writing Samples</h2>
            <span style={{ color: "var(--text-muted)", fontWeight: "500" }}>{reports.length} Reports</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {reports.map((report) => {
              const cat = categories.find((c) => c.slug === report.category);
              return (
                <Link
                  key={report.slug}
                  href={`/research/${report.category}/${report.slug}`}
                  className="report-card"
                >
                  <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.05em", background: "var(--accent-light)", padding: "4px 12px", borderRadius: "100px" }}>
                      {cat?.name || "Report"}
                    </span>
                    <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>{report.readingTime}</span>
                  </div>
                  
                  <h3 style={{ fontSize: "24px", color: "var(--text-primary)", marginBottom: "12px" }}>
                    {report.title}
                  </h3>
                  
                  <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px" }}>
                    {report.sections[0]?.content.substring(0, 180)}...
                  </p>
                  
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {report.tags.slice(0, 4).map((t) => (
                      <span key={t} style={{ fontSize: "12px", color: "var(--text-muted)", background: "var(--bg-base)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: "4px" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}

