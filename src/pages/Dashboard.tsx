import { Link } from "react-router-dom";
import { Search, FileText, Download, FlaskConical, Brain } from "lucide-react";

const stats = [
  { label: "Total Drug Searches", value: "12", icon: Search },
  { label: "Remaining Free", value: "3", icon: FlaskConical },
  { label: "Methods Saved", value: "8", icon: FileText },
  { label: "Reports Exported", value: "5", icon: Download },
];

const recentSearches = [
  { drug: "Amlodipine", technique: "HPLC", date: "2026-03-05", status: "Complete" },
  { drug: "Metformin", technique: "LC-MS", date: "2026-03-04", status: "Complete" },
  { drug: "Atorvastatin", technique: "HPLC", date: "2026-03-03", status: "Complete" },
  { drug: "Omeprazole", technique: "LC-MS/MS", date: "2026-03-02", status: "Processing" },
  { drug: "Losartan", technique: "HPLC", date: "2026-03-01", status: "Complete" },
];

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Researcher Dashboard</h1>
      <p className="text-muted-foreground mb-8">Welcome back, Dr. Sharma. Here's your activity overview.</p>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="card-science p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <s.icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-2xl font-bold">{s.value}</span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent activity */}
        <div className="lg:col-span-2 card-science p-6">
          <h2 className="font-bold text-lg mb-4">Recent Searches</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Drug</th>
                  <th className="px-4 py-2 text-left font-semibold">Technique</th>
                  <th className="px-4 py-2 text-left font-semibold">Date</th>
                  <th className="px-4 py-2 text-left font-semibold">Status</th>
                  <th className="px-4 py-2 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {recentSearches.map((r) => (
                  <tr key={r.drug} className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-2.5 font-medium">{r.drug}</td>
                    <td className="px-4 py-2.5">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{r.technique}</span>
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">{r.date}</td>
                    <td className="px-4 py-2.5">
                      <span className={`text-xs font-medium ${r.status === "Complete" ? "text-accent" : "text-muted-foreground"}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex gap-2">
                        <Link to="/method" className="text-xs text-primary hover:underline">Method</Link>
                        <Link to="/literature" className="text-xs text-primary hover:underline">Literature</Link>
                        <Link to="/properties" className="text-xs text-primary hover:underline">Properties</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Optimization */}
        <div className="card-science p-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" /> AI Method Optimizer
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Fine-tune chromatographic parameters using AI-driven optimization.
          </p>
          <div className="space-y-3 text-sm">
            <div>
              <label className="font-medium block mb-1">logP</label>
              <input type="text" placeholder="3.0" className="w-full px-3 py-2 rounded-md border bg-background" />
            </div>
            <div>
              <label className="font-medium block mb-1">pKa</label>
              <input type="text" placeholder="8.6" className="w-full px-3 py-2 rounded-md border bg-background" />
            </div>
            <div>
              <label className="font-medium block mb-1">Polarity</label>
              <select className="w-full px-3 py-2 rounded-md border bg-background">
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
              </select>
            </div>
            <div>
              <label className="font-medium block mb-1">Target Resolution</label>
              <input type="text" placeholder="> 2.0" className="w-full px-3 py-2 rounded-md border bg-background" />
            </div>
            <button disabled className="w-full py-2.5 rounded-md bg-muted text-muted-foreground font-medium cursor-not-allowed">
              Optimize (Demo Only)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
