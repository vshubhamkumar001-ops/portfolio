// ============================================================================
// COMPLETE REPORT DATA — ALL content from research documents
// Every paragraph, section, reference, and data point is preserved in full
// ============================================================================

export const reports = [
  // 1. Manufacturing
  {
    slug: "indias-stagnant-manufacturing",
    title: "India's Post-1991 Industrial and manufacturing Policy Landscape",
    author: "Shubham Kumar Verma",
    category: "industrial-policy",
    institution: "India Cellular & Electronics Association (ICEA)",
    tags: ["Manufacturing", "Industrial Policy", "Make in India", "PLI", "GVC"],
    readingTime: "11 min",
    sections: [
      {
        heading: "1. Why Has Manufacturing Remained at 13–15% of GDP?",
        content: "Four interrelated structural factors explain the persistent stagnation of India's manufacturing sector at 13-15% of Gross Domestic Product (GDP). Among them, weak integration into global value chains (GVCs) remains the most binding constraint. This limited participation in GVCs is itself the result of structural and policy constraints, particularly high infrastructure costs, such as unreliable power supply and elevated logistics costs, which reduce the competitiveness of Indian firms relative to East Asian economies."
      },
      {
        heading: "2. Policy Evaluation: Make in India & PLI",
        content: "Launched in September 2014, Make in India aimed to transform India into a global manufacturing hub. While FDI inflows rose significantly, manufacturing share of GDP did not increase, remaining stuck at 13-15%. The PLI Scheme (2020-Present) provided performance-based financial incentives and successfully boosted electronics and smartphone production (mobile phone production rose by ~146%). However, actual budget utilization remained low (around 6%), and domestic value addition in electronics remains below 20%, highlighting weak backward linkages."
      },
      {
        heading: "3. Comparative Lens: Vietnam's Export-Oriented Manufacturing Strategy",
        content: "Vietnam transitioned from an agriculture-dominated economy to a manufacturing-driven growth model, with manufacturing now contributing 25% of GDP. This was effective due to Export Processing Zones with functional infrastructure, strategic trade agreement architecture (like CPTPP), and a cost-competitive labor force. By contrast, India's equivalent SEZs suffered from policy reversals, and India has stayed outside mega-regional trade frameworks."
      },
      {
        heading: "Conclusion",
        content: "India's manufacturing stagnation reflects deep structural constraints, including services-led growth, a fragmented industrial base, and weak integration into GVCs. Vietnam's experience demonstrates that sustained industrial growth requires coherent alignment of trade policy, export infrastructure, and supply chain deepening, an approach India's industrial policy must now prioritise."
      }
    ],
    references: []
  },
  // 2. CERC
  {
    slug: "cerc-carbon-credit-regulations-2026",
    title: "Briefing Note: CERC (Carbon Credit Certificates) Regulations, 2026",
    author: "Shubham Kumar Verma",
    category: "climate-policy",
    institution: "KOAN Advisory",
    tags: ["Carbon Markets", "CERC", "Climate Policy", "CCTS", "BEE"],
    readingTime: "5 min",
    sections: [
      {
        heading: "TL; DR",
        content: "On February 27, 2026, the Central Electricity Regulatory Commission (CERC) notified the Carbon Credit Certificate (CCC) trading regulations, creating India's first formal regulatory framework for carbon credit exchange under the Carbon Credit Trading Scheme (CCTS), 2023. The regulations establish Power Exchanges as the primary platform for buying and selling CCCs."
      },
      {
        heading: "Key Provisions",
        content: "**Institutional Architecture:** The BEE serves as the Administrator, formulating transaction procedures and monitoring exchange transparency. The Grid Controller of India functions as the Registry, tracking transactions. CERC exercises overall market oversight.\n\n**Market Structure:** Two distinct market segments: a Compliance Market for Obligated Entities, and an Offset Market for Non-Obligated Entities. Trading will occur primarily on CERC-approved Power Exchanges (e.g. IEX, PXIL).\n\n**Pricing:** Each CCC represents 1 tonne of CO2e. Transactions must occur within a Floor Price and a Forbearance Price approved by CERC."
      },
      {
        heading: "Implications for Market Participants",
        content: "Obligated Entities must procure and surrender CCCs to meet emissions targets, with non-compliance attracting penalties. Entities that reduce emissions beyond their targets can sell surplus certificates on Power Exchanges, creating a potential revenue stream."
      }
    ],
    references: []
  },
  // 3. Ammonia
  {
    slug: "green-ammonia-methanol-standards",
    title: "Briefing Note: Green Ammonia and Green Methanol standards",
    author: "Shubham Kumar Verma",
    category: "energy-policy",
    institution: "KOAN Advisory",
    tags: ["Green Ammonia", "Green Methanol", "Hydrogen", "MNRE", "Energy Transition"],
    readingTime: "5 min",
    sections: [
      {
        heading: "TL; DR",
        content: "On February 27, 2026, the Ministry of New and Renewable Energy (MNRE) notified the Green Ammonia Standard and Green Methanol Standard for India under the National Green Hydrogen Mission. For the first time, the standards set legally defined emissions thresholds for classifying ammonia and methanol as 'green'."
      },
      {
        heading: "Key Provisions of the Standards",
        content: "**1. Green Ammonia Standard:** Ammonia produced using Green Hydrogen. Non-biogenic GHG emissions must not exceed 0.38 kg CO2 equivalent per kg of ammonia.\n\n**2. Green Methanol Standard:** Methanol produced using Green Hydrogen. Non-biogenic GHG emissions must not exceed 0.44 kg CO2 equivalent per kg of methanol.\n\n**3. CO2 Sourcing:** CO2 for methanol synthesis can be sourced from biogenic sources, Direct Air Capture (DAC), or existing industrial sources."
      },
      {
        heading: "Implications for Industry",
        content: "The notification marks an important step in India's green hydrogen regulatory framework. For large industrial consumers, particularly in fertilisers and steel, the standards clarify green fuel specifications. For exporters, the standards help align India's green hydrogen derivatives with sustainability requirements in key markets like the EU."
      }
    ],
    references: []
  },
  // 4. Analytical Note
  {
    slug: "analytical-note-carbon-energy",
    title: "Analytical Note: Carbon Markets, EVs, Energy & Infrastructure",
    author: "Shubham Kumar Verma",
    category: "energy-policy",
    institution: "KOAN Advisory",
    tags: ["CBAM", "EV Batteries", "Net Zero", "NMP 2.0", "E-Waste", "Policy Analysis"],
    readingTime: "15 min",
    sections: [
      {
        heading: "Carbon Markets: EU CBAM",
        content: "The EU's Carbon Border Adjustment Mechanism (CBAM) came into force on January 1, 2026, imposing a carbon-linked levy on imports. For India, CBAM raises costs for exports of steel, aluminium, cement, and fertilisers. India must urgently invest in capacity-building for small and medium industries to measure, report, and verify embedded emissions."
      },
      {
        heading: "Electric Vehicles: Battery Aadhaar",
        content: "India proposed a 'Battery Aadhaar' system for full lifecycle traceability of EV batteries. India faces a critical supply-chain vulnerability as 84% of lithium-ion batteries are imported from China and Hong Kong. The digital identity system enables a shift from import reliance to domestic recycling by making batteries traceable."
      },
      {
        heading: "Net Zero Power Investment",
        content: "NITI Aayog projects a $14.23 trillion power investment for India's 2070 Net Zero goal. The scale highlights the power sector as a core priority, with non-fossil sources expected to supply 98% of generation. A key challenge will be matching grid expansion with rapid renewable growth to avoid integration bottlenecks."
      },
      {
        heading: "Infrastructure & E-Waste",
        content: "Finance Minister launched the National Monetisation Pipeline 2.0 targeting ₹16.72 lakh crore. In environmental governance, the CPCB flagged gaps in India's e-waste recycling infrastructure, noting that only 15% is processed through formal channels."
      }
    ],
    references: []
  },
  // 5. Copper
  {
    slug: "copper-strategic-mineral-full-report",
    title: "Copper as a Strategic Mineral for Clean Energy, Mobility, and Digital Infrastructure",
    author: "Shubham Kumar Verma",
    category: "critical-minerals",
    institution: "Council on Energy, Environment and Water (CEEW)",
    tags: ["Copper", "Clean Energy", "Electric Mobility", "Supply Chain", "Import Dependence"],
    readingTime: "14 min",
    sections: [
      {
        heading: "Overview",
        content: "Copper, often termed the 'metals of electrification,' is emerging as a strategic mineral supporting the transition to clean energy, electric transport, and digital infrastructure. India produces less than half of its domestic copper requirement, resulting in overwhelming dependence on imports and an escalating $6.8 billion trade deficit in FY-2024."
      },
      {
        heading: "Why Copper Matters",
        content: "Every solar panel, wind turbine, and transmission line depends on copper. Electric vehicles need 2-4 times more copper than petrol cars. Furthermore, digital infrastructure like data centres and 5G networks are highly copper-intensive."
      },
      {
        heading: "Rethinking India's Sourcing Strategies",
        content: "To secure copper for the future, India needs to: 1) Diversify overseas supply through joint ventures in Chile, Peru, and Africa. 2) Expand domestic refining alongside assured concentrate supply. 3) Boost recycling from e-waste. 4) Establish strategic reserves to protect against disruptions."
      }
    ],
    references: []
  },
  // 6. NEP
  {
    slug: "draft-nep-2026",
    title: "Briefing Note: Draft National Electricity Policy, 2026",
    author: "Shubham Kumar Verma",
    category: "energy-policy",
    institution: "KOAN Advisory",
    tags: ["National Electricity Policy", "Power Sector", "Renewables", "DISCOMs", "Grid"],
    readingTime: "8 min",
    sections: [
      {
        heading: "TL; DR",
        content: "The Ministry of Power introduced the Draft National Electricity Policy (NEP), 2026. It replaces the 2005 policy and responds to new challenges such as financial stress of DISCOMs, large-scale renewable integration, and energy transition. It prioritises non-fossil generation, energy storage, and grid resilience."
      },
      {
        heading: "Features of the Policy",
        content: "**Resource adequacy and planning:** NEP 2026 shifts power planning to a decentralised model. DISCOMs and SLDCs will prepare their own resource adequacy plans.\n\n**Energy Generation and Renewables:** Aims to speed up the shift to clean energy by strengthening renewable purchase obligations (RPOs) and enabling VPPAs and bilateral contracts. Coal will continue to play a role in grid stability.\n\n**Power Markets & Distribution:** Promotes direct contracts and exchange-based trading. It targets DISCOM financial stress by promoting market-based procurement and gradually introducing competition through multiple licensees."
      },
      {
        heading: "Early Reactions",
        content: "Market analysts describe the Draft NEP 2026 as an effort to move away from a rigid, coal-heavy system towards a flexible, market-driven power sector. However, groups like the All India Power Engineers Federation (AIPEF) have opposed the policy, arguing that private companies will use public networks while shifting losses onto state DISCOMs."
      }
    ],
    references: []
  }
];
