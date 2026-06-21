import Link from "next/link";
import { categories } from "@/data/categories";
import { reports } from "@/data/reports";

export default function DashboardPage() {
  const totalReports = reports.length;
  const totalCategories = categories.length;
  const totalRefs = reports.reduce((a, r) => a + r.references.length, 0);
  const allTags = [...new Set(reports.flatMap((r) => r.tags))];

  return (
    <>
      {/* Hero */}
      <div className="page-hero anim-in d1">
        <div className="hero-label">
          <div className="hero-dot" />
          Research Terminal
        </div>
        <h1>Shubham Verma</h1>
        <p className="hero-sub">
          Renewable Energy Research Analyst — Council on Energy, Environment and
          Water (CEEW). IIT Kharagpur MPP &apos;26. Tracking critical minerals,
          copper strategy, and India&apos;s clean energy transition.
        </p>
      </div>

      {/* Stats Row */}
      <div className="stats-row anim-in d2">
        <div className="stat-cell" style={{ "--stat-accent": "var(--green)" }}>
          <div className="stat-label">Reports</div>
          <div className="stat-number">{totalReports}</div>
          <div className="stat-sub">CEEW Research</div>
        </div>
        <div className="stat-cell" style={{ "--stat-accent": "var(--cyan)" }}>
          <div className="stat-label">Categories</div>
          <div className="stat-number">{totalCategories}</div>
          <div className="stat-sub">Research Domains</div>
        </div>
        <div className="stat-cell" style={{ "--stat-accent": "var(--amber)" }}>
          <div className="stat-label">Topics</div>
          <div className="stat-number">{allTags.length}</div>
          <div className="stat-sub">Key Areas</div>
        </div>
        <div className="stat-cell" style={{ "--stat-accent": "var(--magenta)" }}>
          <div className="stat-label">References</div>
          <div className="stat-number">{totalRefs}</div>
          <div className="stat-sub">Sources Cited</div>
        </div>
      </div>

      {/* Categories */}
      <div className="section-divider anim-in d3">
        <h2>Research Categories</h2>
        <Link href="/research" className="section-link">
          VIEW ALL →
        </Link>
      </div>

      <div className="categories-grid anim-in d4">
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

      {/* Recent Reports */}
      <div className="section-divider anim-in d5">
        <h2>Latest Reports</h2>
        <Link href="/research" className="section-link">
          VIEW ALL →
        </Link>
      </div>

      <div className="reports-list anim-in d6">
        {reports.slice(0, 5).map((report) => {
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
                  {report.sections[0]?.content.substring(0, 180)}...
                </p>
                <div className="tags-row">
                  {report.tags.slice(0, 3).map((t) => (
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
