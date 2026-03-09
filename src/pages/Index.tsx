import { useState } from "react";
import { Link } from "react-router-dom";
import { FlaskConical, Search, FileText, BarChart3, BookOpen, Atom, Brain, FileOutput, Building2, GraduationCap, Microscope, ShieldCheck, Beaker } from "lucide-react";

const capabilities = [
  { icon: FlaskConical, title: "Method Generation", desc: "Auto-generate HPLC/LC-MS methods from drug name and sample type using AI." },
  { icon: ShieldCheck, title: "QbD & WAC", desc: "Quality by Design and White Analytical Chemistry principles built in." },
  { icon: BookOpen, title: "Literature Mining", desc: "Automated literature survey from PubMed, DrugBank, and chemical databases." },
  { icon: Atom, title: "Drug Properties", desc: "Instant access to logP, pKa, solubility, molecular weight, and structures." },
  { icon: Brain, title: "AI Optimization", desc: "Optimize methods using AI-driven parameter selection and robustness analysis." },
  { icon: FileOutput, title: "Reporting", desc: "Export methods as PDF/Excel reports ready for regulatory submission." },
];

const audiences = [
  { icon: Building2, label: "Pharma Companies" },
  { icon: Microscope, label: "CROs" },
  { icon: GraduationCap, label: "Academic Labs" },
  { icon: ShieldCheck, label: "Regulated Labs" },
  { icon: Beaker, label: "Biotech Startups" },
  { icon: BarChart3, label: "Analytical R&D" },
];

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
    {
      title: "RP‑HPLC method for Amlodipine in tablets (demo)",
      journal: "Journal of Pharmaceutical Analysis",
      year: 2019
    },
    {
      title: "Stability‑indicating LC method for Amlodipine (demo)",
      journal: "International Journal of Pharm Sci",
      year: 2021
    }
  ],
  properties: {
    logP: "≈ 3.0 (approximate, demo)",
    pKa: "≈ 8.6 (basic, demo)",
    solubility: "Sparingly soluble in water (demo)"
  }
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient chromatogram-wave">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                <span className="gradient-text">Forge Robust Chromatography</span> with AI
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg">
                LCForge AI helps pharmaceutical scientists auto-generate HPLC/LC-MS methods under QbD and White Analytical Chemistry principles — from drug name to validated method in minutes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/drug-search" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Search className="w-4 h-4" /> Start Searching
                </Link>
                <Link to="/payment" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border font-semibold hover:bg-muted transition-colors">
                  View Plans
                </Link>
              </div>
            </div>

            <div className="card-science p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Search className="w-4 h-4 text-primary" /> Quick Drug Search
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium block mb-1">Drug Name</label>
                  <input type="text" placeholder="e.g. Metformin" className="w-full px-3 py-2 rounded-md border bg-background text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Sample Type</label>
                  <select className="w-full px-3 py-2 rounded-md border bg-background text-sm">
                    <option>API</option>
                    <option>Pharmaceutical Formulation</option>
                    <option>Plasma / Biological</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Technique</label>
                  <select className="w-full px-3 py-2 rounded-md border bg-background text-sm">
                    <option>HPLC</option>
                    <option>LC-MS</option>
                    <option>LC-MS/MS</option>
                  </select>
                </div>
                <button disabled className="w-full py-2.5 rounded-md bg-muted text-muted-foreground text-sm font-medium cursor-not-allowed">
                  Generate Method (Demo Only)
                </button>
                <p className="text-xs text-muted-foreground text-center">No backend — this is a static demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Enter Drug & Sample", desc: "Provide drug name, sample type, and analytical technique." },
            { step: "2", title: "AI Generates Method", desc: "Platform creates chromatographic method, properties, and literature review." },
            { step: "3", title: "Export & Refine", desc: "Download reports, optimize parameters, and refine with AI." },
          ].map((s) => (
            <div key={s.step} className="card-science p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                {s.step}
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Bento */}
      <section className="bg-muted/50">
        <div className="container py-16">
          <h2 className="text-2xl font-bold text-center mb-10">Platform Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <div key={c.title} className="card-science p-6">
                <c.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Who It's For</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {audiences.map((a) => (
            <div key={a.label} className="card-science p-4 text-center">
              <a.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium">{a.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Plans teaser */}
      <section className="bg-muted/50">
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-5">Explore our flexible pricing plans designed for every lab size.</p>
          <Link to="/payment" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            View Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
