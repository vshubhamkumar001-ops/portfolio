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
    color: "#1d6fad",
    gradient: "linear-gradient(135deg, #1a3a5c, #1d6fad)",
  },
  {
    slug: "trade-intelligence",
    name: "Trade Intelligence",
    description:
      "Guides on international trade data systems — HS codes, UN Comtrade queries, and trade classification frameworks for clean energy minerals and products.",
    icon: "📊",
    color: "#1a3a5c",
    gradient: "linear-gradient(135deg, #0f172a, #1a3a5c)",
  },

  {
    slug: "energy-policy",
    name: "Energy Policy",
    description:
      "Research on clean energy integration, grid regulations, and national standards for green hydrogen, ammonia, and electricity grid stability.",
    icon: "⚡",
    color: "#0284c7",
    gradient: "linear-gradient(135deg, #0369a1, #0284c7)",
  },
  {
    slug: "carbon-markets",
    name: "Carbon Markets",
    description:
      "Analysis of environmental compliance, ESG policies, and CERC Carbon Credit Certificates trading frameworks under the CCTS 2023.",
    icon: "🌱",
    color: "#16a34a",
    gradient: "linear-gradient(135deg, #15803d, #16a34a)",
  },
  {
    slug: "technology-policy",
    name: "Technology Policy",
    description:
      "Evaluation of the artificial intelligence startup ecosystem, data compute constraints, and open-weight reasoning model implications in India.",
    icon: "🤖",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #6d28d9, #8b5cf6)",
  },
  {
    slug: "industrial-policy",
    name: "Industrial Policy",
    description:
      "Studies on manufacturing competitiveness, Special Economic Zones (SEZs), and Global Value Chain (GVC) integration comparisons.",
    icon: "🏢",
    color: "#475569",
    gradient: "linear-gradient(135deg, #334155, #475569)",
  }
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) || null;
}
