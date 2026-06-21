import Link from "next/link";
import { categories } from "@/data/categories";
import { reports } from "@/data/reports";

export const metadata = {
  title: "Research Hub — SV Terminal",
  description: "All research categories and reports",
};

export default function ResearchPage() {
  return (
    <>
      <div className="page-hero anim-in d1">
        <div className="hero-label">
          <div className="hero-dot" /> Research Hub
        </div>
        <h1>All Research</h1>
        <p className="hero-sub">
          Browse all CEEW research across critical minerals, copper strategy,
          trade classification, and Asia-Pacific renewable energy.
        </p>
      </div>

      <div className="categories-grid anim-in d2">
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

      <div className="section-divider anim-in d3">
        <h2>All Reports ({reports.length})</h2>
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
                style={{ background: cat?.color || "var(--green)" }}
              />
              <div className="report-row-content">
                <h3>{report.title}</h3>
                <p className="report-excerpt">
                  {report.sections[0]?.content.substring(0, 200)}...
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
