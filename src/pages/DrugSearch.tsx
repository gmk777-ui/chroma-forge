import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, CheckCircle2 } from "lucide-react";

export default function DrugSearchPage() {
  const [submitted, setSubmitted] = useState(false);

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
            onClick={() => setSubmitted(true)}
            className="w-full py-2.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" /> Generate Method
          </button>
        </div>

        {submitted && (
          <div className="card-science p-6 mt-6 border-primary/30">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Method Generated Successfully (Demo)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  In production, this would trigger AI analysis. For now, view our example generated method:
                </p>
                <Link to="/method" className="text-sm font-medium text-primary hover:underline">
                  View Example Generated Method →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
