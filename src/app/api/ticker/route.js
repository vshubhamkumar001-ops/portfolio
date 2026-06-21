import yahooFinance from "yahoo-finance2";
import { NextResponse } from "next/server";

export async function GET() {
  const symbols = [
    { symbol: "HG=F", label: "COPPER" },
    { symbol: "ALI=F", label: "ALUMINUM" },
    { symbol: "GC=F", label: "GOLD" },
    { symbol: "CL=F", label: "CRUDE OIL" },
    { symbol: "REMX", label: "RARE EARTH ETF" },
    { symbol: "LIT", label: "LITHIUM ETF" },
    { symbol: "TSLA", label: "TESLA" },
    { symbol: "RELIANCE.NS", label: "RELIANCE NEW ENERGY" },
    { symbol: "NTPC.NS", label: "NTPC INDIA" },
  ];

  try {
    const results = await Promise.all(
      symbols.map(async (s) => {
        try {
          const quote = await yahooFinance.quote(s.symbol);
          return {
            label: s.label,
            price: quote.regularMarketPrice,
            change: quote.regularMarketChangePercent,
            dir: quote.regularMarketChange >= 0 ? "up" : "down",
          };
        } catch (e) {
          console.error(`Error fetching ${s.symbol}:`, e);
          return null;
        }
      })
    );

    const validResults = results.filter(Boolean);

    // Add back the core portfolio stats too so the ticker is a mix of live market and research stats
    const mixedData = [
      ...validResults.map((r) => ({
        label: r.label,
        value: r.price ? r.price.toFixed(2) : "N/A",
        changeStr: r.change
          ? `${r.change > 0 ? "+" : ""}${r.change.toFixed(2)}%`
          : "",
        dir: r.dir,
      })),
      { label: "CU TRADE DEFICIT", value: "$6.8B", dir: "down", changeStr: "FY24" },
      { label: "INDIA RE TARGET", value: "500 GW", dir: "up", changeStr: "2030" },
      { label: "EV TARGET", value: "30%", dir: "up", changeStr: "BY 2030" },
    ];

    // Set cache headers so we don't spam Yahoo Finance, cache for 60 seconds
    return NextResponse.json(mixedData, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
