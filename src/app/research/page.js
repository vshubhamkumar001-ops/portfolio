import Link from "next/link";
import { categories } from "@/data/categories";
import { reports } from "@/data/reports";

export const metadata = {
  title: "Research Hub — Shubham Verma",
  description: "Browse writing samples and briefings on energy transition, critical minerals, and industrial policy.",
};

export default function ResearchPage() {
  return (
    <>
      <div className="page-hero anim-in d1" style={{ padding: "40px 0", borderBottom: "1px solid var(--border)", marginBottom: "40px" }}>
        <div className="section-label-container">
          <span className="section-label">Research Directory</span>
          <div className="section-rule" />
        </div>
        <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "16px" }}>Policy Writing Samples</h1>
        <p className="hero-sub" style={{ fontSize: "16px", color: "var(--text-secondary)", maxWidth: "700px" }}>
          A compilation of policy briefs, regulatory analyses, and industry reports evaluating the clean energy transition, critical mineral supply chain security, and industrial-tech policies.
        </p>
      </div>

      <div className="section-label-container anim-in d2">
        <span className="section-label">01 // BROWSE BY CATEGORY</span>
        <div className="section-rule" />
      </div>

      <div className="categories-grid anim-in d2" style={{ marginBottom: "40px" }}>
        {categories.map((cat) => {
          const count = reports.filter((r) => r.category === cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/research/${cat.slug}`}
              className="category-cell"
              style={{ "--cat-accent": cat.color }}
            >
              <div className="category-cell-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <div className="category-count">
                <span className="count-num">{count}</span>{" "}
                {count === 1 ? "REPORT" : "REPORTS"}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="section-label-container anim-in d3">
        <span className="section-label">02 // ALL WRITING SAMPLES ({reports.length})</span>
        <div className="section-rule" />
      </div>

      <div className="reports-list anim-in d4">
        {reports.map((report) => {
          const cat = categories.find((c) => c.slug === report.category);
          return (
            <Link
              key={report.slug}
              href={`/research/${report.category}/${report.slug}`}
              className="report-row"
            >
              <div
                className="report-indicator"
                style={{ background: cat?.color || "var(--highlight)" }}
              />
              <div className="report-row-content">
                <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}>{report.title}</h3>
                <p className="report-excerpt" style={{ fontSize: "13.5px", color: "var(--text-secondary)" }}>
                  {report.sections[0]?.content.substring(0, 180)}...
                </p>
                <div className="tags-row">
                  {report.tags.slice(0, 4).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="report-row-meta">
                <span className="reading-time">{report.readingTime}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

