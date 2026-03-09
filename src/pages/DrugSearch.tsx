import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, CheckCircle2 } from "lucide-react";

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
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Drug Search</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Enter your drug details below to generate a complete chromatographic method. In production, our AI engine processes your input against literature databases and QbD models.
      </p>

      <div className="max-w-2xl">
        <div className="card-science p-6 space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">Drug Name *</label>
            <input type="text" placeholder="e.g. Amlodipine" className="w-full px-3 py-2 rounded-md border bg-background text-sm" />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">Sample Type *</label>
            <div className="flex flex-wrap gap-4">
              {["API", "Pharmaceutical Formulation", "Plasma / Biological"].map((t) => (
                <label key={t} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="sampleType" defaultChecked={t === "API"} className="accent-primary" /> {t}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Analytical Technique *</label>
            <select className="w-full px-3 py-2 rounded-md border bg-background text-sm">
              <option>HPLC</option>
              <option>LC-MS</option>
              <option>LC-MS/MS</option>
            </select>
          </div>

          <div className="gradient-bar rounded-full my-2" />

          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Optional Parameters (for AI optimization)</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">logP</label>
              <input type="text" placeholder="e.g. 2.96" className="w-full px-3 py-2 rounded-md border bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">pKa</label>
              <input type="text" placeholder="e.g. 8.6" className="w-full px-3 py-2 rounded-md border bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Polarity</label>
              <input type="text" placeholder="e.g. Moderate" className="w-full px-3 py-2 rounded-md border bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Molecular Weight</label>
              <input type="text" placeholder="e.g. 408.88" className="w-full px-3 py-2 rounded-md border bg-background text-sm" />
            </div>
          </div>

          <button
            onClick={() => setResult(exampleResult)}
            className="w-full py-2.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" /> Generate Method
          </button>
        </div>

        {result && (
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="card-science p-6">
              <h3 className="font-semibold mb-3 text-primary">Proposed LC Method</h3>
              <dl className="space-y-2 text-sm">
                <div><dt className="text-muted-foreground">Column</dt><dd className="font-medium">{result.method.column}</dd></div>
                <div><dt className="text-muted-foreground">Mobile Phase</dt><dd className="font-medium">{result.method.mobilePhase}</dd></div>
                <div><dt className="text-muted-foreground">Flow Rate</dt><dd className="font-medium">{result.method.flowRate}</dd></div>
                <div><dt className="text-muted-foreground">Detection</dt><dd className="font-medium">{result.method.detection}</dd></div>
                <div><dt className="text-muted-foreground">Runtime</dt><dd className="font-medium">{result.method.runtime}</dd></div>
              </dl>
              <p className="text-xs text-muted-foreground mt-3 italic">{result.method.notes}</p>
            </div>

            <div className="card-science p-6">
              <h3 className="font-semibold mb-3 text-primary">Key Literature (demo)</h3>
              <ul className="space-y-3">
                {result.literature.map((lit, i) => (
                  <li key={i} className="text-sm">
                    <p className="font-medium">{lit.title}</p>
                    <p className="text-muted-foreground">{lit.journal}, {lit.year}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-science p-6">
              <h3 className="font-semibold mb-3 text-primary">Drug Properties (demo)</h3>
              <dl className="space-y-2 text-sm">
                <div><dt className="text-muted-foreground">logP</dt><dd className="font-medium">{result.properties.logP}</dd></div>
                <div><dt className="text-muted-foreground">pKa</dt><dd className="font-medium">{result.properties.pKa}</dd></div>
                <div><dt className="text-muted-foreground">Solubility</dt><dd className="font-medium">{result.properties.solubility}</dd></div>
              </dl>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
