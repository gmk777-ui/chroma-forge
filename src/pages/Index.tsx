import { useState } from "react";
import { Link } from "react-router-dom";
import { FlaskConical, Search, FileText, BarChart3, BookOpen, Atom, Brain, FileOutput, Building2, GraduationCap, Microscope, ShieldCheck, Beaker, ArrowRight, ChevronRight } from "lucide-react";

const capabilities = [
  { icon: FlaskConical, title: "Automated Method Generation", desc: "Generate complete HPLC/LC-MS methods with parameters for column, mobile phases, gradient, detector and ionization strategy." },
  { icon: ShieldCheck, title: "QbD Guided Quality", desc: "Automatically includes CMP, CQA, risk analysis, robustness suggestions, and system suitability guidance." },
  { icon: BookOpen, title: "Literature Survey", desc: "Pull method context from indexed publications with DOI and PubMed links." },
  { icon: Atom, title: "Drug Properties + Structure", desc: "View molecular profile, formula, weight, logP and 2D structure from scientific APIs." },
  { icon: Brain, title: "AI Optimization", desc: "Optimize methods using AI-driven parameter selection and robustness analysis." },
  { icon: Building2, title: "Enterprise-grade Workflow", desc: "Role-aware access, metered usage, payment integration, and admin observability." },
];

const badges = [
  "HPLC + LC-MS method generator",
  "QbD and White Analytical Chemistry aligned",
  "PubChem and PubMed powered insights",
];

const buildExampleResult = (drugName: string) => ({
  method: {
    title: `Proposed LC method for ${drugName} (demo)`,
    column: "C18, 150 × 4.6 mm, 5 µm",
    mobilePhase: "Acetonitrile : 0.1% formic acid (60:40, v/v)",
    flowRate: "1.0 mL/min",
    detection: "UV at 240 nm",
    runtime: "10 min",
    notes: `Static demo only – illustrative method for ${drugName}, not for real validation.`
  },
  literature: [
    { title: `RP‑HPLC method for ${drugName} in tablets (demo)`, journal: "Journal of Pharmaceutical Analysis", year: 2019 },
    { title: `Stability‑indicating LC method for ${drugName} (demo)`, journal: "International Journal of Pharm Sci", year: 2021 }
  ],
  properties: {
    logP: `≈ 3.0 (approximate, demo for ${drugName})`,
    pKa: `≈ 8.6 (basic, demo for ${drugName})`,
    solubility: `Sparingly soluble in water (demo for ${drugName})`
  }
});

export default function HomePage() {
  const [result, setResult] = useState<null | typeof exampleResult>(null);

  return (
    <>
      {/* Hero */}
      <section className="hero-dark">
        <div className="container py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6 border border-primary/20">
                Enterprise-grade analytical intelligence for pharma R&D
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground">
                Forge Robust Chromatography with AI
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                LCForge AI helps pharmaceutical scientists generate reliable HPLC and LC-MS methods with QbD-first logic, literature-backed recommendations, and enterprise-ready scientific documentation.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {badges.map((b) => (
                  <span key={b} className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border">
                    {b}
                  </span>
                ))}
              </div>
              <Link to="/drug-search" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity">
                Start Method Development <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card-science p-6 bg-card">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">Quick Drug Search</p>
              <p className="text-sm text-muted-foreground mb-4">Jump directly into method generation workflow.</p>
              <div className="space-y-3">
                <input type="text" placeholder="Enter drug name (e.g., Metformin)" className="w-full px-4 py-3 rounded-lg border bg-background text-sm" />
                <select className="w-full px-4 py-3 rounded-lg border bg-background text-sm">
                  <option>API</option>
                  <option>Pharmaceutical Formulation</option>
                  <option>Plasma / Biological</option>
                </select>
                <select className="w-full px-4 py-3 rounded-lg border bg-background text-sm">
                  <option>HPLC</option>
                  <option>LC-MS</option>
                  <option>LC-MS/MS</option>
                </select>
                <button
                  onClick={() => setResult(exampleResult)}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Analyze in LCForge AI <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {result && (
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="card-science p-6 bg-card">
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
              <div className="card-science p-6 bg-card">
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
              <div className="card-science p-6 bg-card">
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
      </section>

      {/* Capabilities */}
      <section className="bg-muted/30">
        <div className="container py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="card-science p-6">
                <c.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-base mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold mb-3">Trusted by Analytical Teams Across Pharma Workflows</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">Built for scientists working in discovery, formulation development, bioanalysis, and quality control.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: Building2, label: "Pharma Companies" },
            { icon: Microscope, label: "CROs" },
            { icon: GraduationCap, label: "Academic Labs" },
            { icon: ShieldCheck, label: "Regulated Labs" },
            { icon: Beaker, label: "Biotech Startups" },
            { icon: BarChart3, label: "Analytical R&D" },
          ].map((a) => (
            <div key={a.label} className="card-science p-4 text-center">
              <a.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium">{a.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30">
        <div className="container py-12">
          <div className="card-science p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold mb-1">LCForge AI — Forge Robust Chromatography with AI</h2>
              <p className="text-muted-foreground text-sm">Move from drug name to scientifically structured method recommendation in one guided workflow.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link to="/drug-search" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                Launch Method Builder <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/dashboard" className="inline-flex items-center px-5 py-2.5 rounded-lg border border-border font-semibold hover:bg-muted transition-colors">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
