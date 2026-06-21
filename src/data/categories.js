export const categories = [
  {
    slug: "critical-minerals",
    name: "Critical Minerals",
    description:
      "Research on India's critical mineral value chain — AI applications in mineral exploration, strategic autonomy, and the National Critical Minerals Mission (NCMM) 2025.",
    icon: "⛏️",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #065f46, #10b981)",
  },
  {
    slug: "copper-strategy",
    name: "Copper Strategy",
    description:
      "Strategic analysis of copper as an electrification mineral — supply chain vulnerabilities, trade deficits, and policy recommendations for India's energy transition.",
    icon: "🔋",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #92400e, #f59e0b)",
  },
  {
    slug: "trade-intelligence",
    name: "Trade Intelligence",
    description:
      "Guides on international trade data systems — HS codes, UN Comtrade queries, and trade classification frameworks for clean energy minerals and products.",
    icon: "📊",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #3730a3, #6366f1)",
  },
  {
    slug: "apac-solar",
    name: "APAC Solar Directory",
    description:
      "Leadership directory of the Asian Photovoltaic Industry Association (APVIA) and key solar energy stakeholders across the Asia-Pacific region.",
    icon: "☀️",
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #991b1b, #ef4444)",
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) || null;
}
