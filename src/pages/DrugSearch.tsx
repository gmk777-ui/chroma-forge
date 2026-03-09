import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const exampleResult = {
  method: {
    title: "Proposed LC method (demo)",
    column: "C18, 150 × 4.6 mm, 5 µm",
    mobilePhase: "Acetonitrile : 0.1% formic acid (60:40, v/v)",
    flowRate: "1.0 mL/min",
    detection: "UV at 240 nm",
    runtime: "10 min",
    notes: "Static demo only – for illustration, not for real validation."
  },
  literature: [
    { title: "RP‑HPLC method for Amlodipine in tablets (demo)", journal: "Journal of Pharmaceutical Analysis", year: 2019 },
    { title: "Stability‑indicating LC method for Amlodipine (demo)", journal: "International Journal of Pharm Sci", year: 2021 }
  ],
  properties: {
    logP: "≈ 3.0 (approximate, demo)",
    pKa: "≈ 8.6 (basic, demo)",
    solubility: "Sparingly soluble in water (demo)"
  }
};

export default function DrugSearchPage() {
  const [result, setResult] = useState<null | typeof exampleResult>(null);

  return (
    <div className="container py-12">
      <div className="grid lg:grid-cols-[1fr_380px] gap-10">
        {/* Left: Search form */}
        <div>
          <h1 className="text-3xl font-bold mb-1">Drug Method Search</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Enter drug name, sample type, and analytical technique to generate HPLC or LC-MS method recommendations.
          </p>

          <div className="card-science p-6 space-y-5">
            <div>
              <label className="text-sm font-medium block mb-1.5">Drug name</label>
              <input type="text" placeholder="Example: Metformin" className="w-full px-4 py-3 rounded-lg border bg-background text-sm" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1.5">Sample type</label>
                <select className="w-full px-4 py-3 rounded-lg border bg-background text-sm">
                  <option>API</option>
                  <option>Pharmaceutical Formulation</option>
                  <option>Plasma / Biological</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Analytical technique</label>
                <select className="w-full px-4 py-3 rounded-lg border bg-background text-sm">
                  <option>HPLC</option>
                  <option>LC-MS</option>
                  <option>LC-MS/MS</option>
                </select>
              </div>
            </div>

            <div className="card-science p-4 bg-muted/30 border-dashed">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Optional AI optimization input</p>
              <div className="grid grid-cols-3 gap-3">
                <input type="text" placeholder="pKa" className="px-3 py-2.5 rounded-lg border bg-background text-sm" />
                <input type="text" placeholder="logP" className="px-3 py-2.5 rounded-lg border bg-background text-sm" />
                <input type="text" placeholder="polarity" className="px-3 py-2.5 rounded-lg border bg-background text-sm" />
              </div>
            </div>

            <button
              onClick={() => setResult(exampleResult)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Search className="w-4 h-4" /> Generate Chromatographic Method
            </button>
          </div>
        </div>

        {/* Right: Usage sidebar */}
        <div className="space-y-4">
          <div className="card-science p-6">
            <h3 className="font-semibold text-base mb-1">Usage and Plan</h3>
            <p className="text-xs text-muted-foreground mb-4">Freemium access with secure metered upgrades</p>
            <dl className="space-y-4">
              <div className="card-science p-4 bg-muted/20">
                <dt className="text-xs text-muted-foreground">Current plan</dt>
                <dd className="font-bold text-lg">Free</dd>
              </div>
              <div className="card-science p-4 bg-muted/20">
                <dt className="text-xs text-muted-foreground">Remaining free searches</dt>
                <dd className="font-bold text-lg">0</dd>
              </div>
              <div className="card-science p-4 bg-muted/20">
                <dt className="text-xs text-muted-foreground">Paid search credits</dt>
                <dd className="font-bold text-lg">0</dd>
              </div>
            </dl>
            <Link to="/payment" className="inline-flex items-center mt-4 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors">
              Buy More Searches / Upgrade
            </Link>
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="card-science p-6">
            <h3 className="font-semibold mb-3 text-primary text-base">Proposed LC Method</h3>
            <dl className="space-y-2 text-sm">
              <div><dt className="text-muted-foreground text-xs">Column</dt><dd className="font-medium">{result.method.column}</dd></div>
              <div><dt className="text-muted-foreground text-xs">Mobile Phase</dt><dd className="font-medium">{result.method.mobilePhase}</dd></div>
              <div><dt className="text-muted-foreground text-xs">Flow Rate</dt><dd className="font-medium">{result.method.flowRate}</dd></div>
              <div><dt className="text-muted-foreground text-xs">Detection</dt><dd className="font-medium">{result.method.detection}</dd></div>
              <div><dt className="text-muted-foreground text-xs">Runtime</dt><dd className="font-medium">{result.method.runtime}</dd></div>
            </dl>
            <p className="text-xs text-muted-foreground mt-3 italic">{result.method.notes}</p>
          </div>
          <div className="card-science p-6">
            <h3 className="font-semibold mb-3 text-primary text-base">Key Literature (demo)</h3>
            <ul className="space-y-3">
              {result.literature.map((lit, i) => (
                <li key={i} className="text-sm">
                  <p className="font-medium">{lit.title}</p>
                  <p className="text-muted-foreground text-xs">{lit.journal}, {lit.year}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-science p-6">
            <h3 className="font-semibold mb-3 text-primary text-base">Drug Properties (demo)</h3>
            <dl className="space-y-2 text-sm">
              <div><dt className="text-muted-foreground text-xs">logP</dt><dd className="font-medium">{result.properties.logP}</dd></div>
              <div><dt className="text-muted-foreground text-xs">pKa</dt><dd className="font-medium">{result.properties.pKa}</dd></div>
              <div><dt className="text-muted-foreground text-xs">Solubility</dt><dd className="font-medium">{result.properties.solubility}</dd></div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
