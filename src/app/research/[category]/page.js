import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { reports } from "@/data/reports";

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Shubham Verma`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();
  const catReports = reports.filter((r) => r.category === category);

  return (
    <>
      <nav className="breadcrumb anim-in d1">
        <Link href="/">Home</Link>
        <span className="sep">›</span>
        <Link href="/research">Research</Link>
        <span className="sep">›</span>
        <span className="current">{cat.name}</span>
      </nav>

      <div className="page-hero anim-in d2">
        <div className="hero-label" style={{ color: cat.color, display: "flex", alignItems: "center", gap: "8px" }}>
          <div className="hero-dot" style={{ background: cat.color }} />
          <div style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {cat.icon}
          </div>
          <span>{cat.name}</span>
        </div>
        <h1>{cat.name}</h1>
        <p className="hero-sub">{cat.description}</p>
      </div>

      <div className="section-divider anim-in d3">
        <h2>{catReports.length} {catReports.length === 1 ? "Report" : "Reports"}</h2>
      </div>

      <div className="reports-list anim-in d4">
        {catReports.map((report) => (
          <Link
            key={report.slug}
            href={`/research/${category}/${report.slug}`}
            className="report-row"
          >
            <div
              className="report-indicator"
              style={{ background: cat.color }}
            />
            <div className="report-row-content">
              <h3>{report.title}</h3>
              <p className="report-excerpt">
                {report.sections[0]?.content.substring(0, 250)}...
              </p>
              <div className="tags-row">
                {report.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="report-row-meta">
              <span className="reading-time">{report.readingTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
