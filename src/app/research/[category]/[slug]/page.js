import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { reports } from "@/data/reports";
import ReportChart from "@/components/ReportChart";

export async function generateStaticParams() {
  return reports.map((r) => ({ category: r.category, slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === slug);
  if (!report) return {};
  return {
    title: `${report.title} — Shubham Verma`,
    description: report.sections[0]?.content.substring(0, 160),
  };
}

function DataTable({ tableData }) {
  if (!tableData || tableData.length === 0) return null;
  const keys = Object.keys(tableData[0]);
  const fmt = (k) =>
    k.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).trim();
  return (
    <table className="data-table">
      <thead>
        <tr>
          {keys.map((k) => (
            <th key={k}>{fmt(k)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, i) => (
          <tr key={i}>
            {keys.map((k) => (
              <td key={k}>{row[k]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i}>{p.slice(2, -2)}</strong>
    ) : (
      p
    )
  );
}

export default async function ReportPage({ params }) {
  const { category, slug } = await params;
  const report = reports.find((r) => r.slug === slug);
  if (!report) notFound();
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <>
      <nav className="breadcrumb anim-in d1">
        <Link href="/">Home</Link>
        <span className="sep">›</span>
        <Link href="/research">Research</Link>
        <span className="sep">›</span>
        <Link href={`/research/${category}`}>{cat.name}</Link>
        <span className="sep">›</span>
        <span className="current">Report</span>
      </nav>

      <div className="report-detail">
        {/* Main article */}
        <article className="report-article">
          <h1 className="report-title anim-in d2">{report.title}</h1>

          <div className="report-meta-bar anim-in d3">
            <span className="report-meta-item">
              <span className="mi">✍</span> {report.author}
            </span>
            <span className="report-meta-item">
              <span className="mi">🏛</span> {report.institution}
            </span>
            {report.readingTime && (
              <span className="report-meta-item">
                <span className="mi">⏱</span> {report.readingTime}
              </span>
            )}
            <span className="report-meta-item">
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: cat.color,
                  display: "inline-block",
                }}
              />{" "}
              {cat.name}
            </span>
          </div>

          <div className="tags-row anim-in d3" style={{ marginBottom: 24 }}>
            {report.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {report.authorDetails && (
            <div className="author-card anim-in d3">
              <strong>Author:</strong> {report.author} ·{" "}
              {report.authorDetails.program} ·{" "}
              {report.authorDetails.university} ·{" "}
              {report.authorDetails.email}
              {report.submittedTo && (
                <>
                  <br />
                  <strong>Submitted to:</strong> {report.submittedTo}
                </>
              )}
            </div>
          )}

          {report.sections.map((section, i) => (
            <section
              key={i}
              className={`report-section anim-in d${Math.min(i + 4, 8)}`}
              id={`s-${i}`}
            >
              <h2>{section.heading}</h2>
              <div className="report-section-body">
                <RichText text={section.content} />
              </div>
              {section.tableData && (
                <>
                  {report.slug === "crm-park-processing-cost-analysis" && (
                    <ReportChart tableData={section.tableData} />
                  )}
                  <DataTable tableData={section.tableData} />
                </>
              )}
            </section>
          ))}

          {report.references.length > 0 && (
            <div className="references-panel anim-in d8">
              <div className="panel">
                <div className="panel-header">
                  <span className="panel-title">
                    References ({report.references.length})
                  </span>
                </div>
                <div className="panel-body">
                  {report.references.map((ref, i) => (
                    <div key={i} className="ref-item">
                      [{i + 1}] {ref}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </article>

        {/* TOC sidebar */}
        <aside className="toc-panel">
          <div className="panel">
            <div className="panel-header">
              <span className="panel-title">Contents</span>
            </div>
            <div className="panel-body">
              <ul className="toc-list">
                {report.sections.map((s, i) => (
                  <li key={i} className="toc-item">
                    <a href={`#s-${i}`} className="toc-link">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <Link
              href={`/research/${category}`}
              className="sidebar-link"
              style={{ border: "1px solid var(--border)", padding: "8px 12px" }}
            >
              <span className="link-icon">←</span>
              Back to {cat.name}
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
