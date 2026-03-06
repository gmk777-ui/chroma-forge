import { useState } from "react";
import { Users, Search, CreditCard, FlaskConical, AlertTriangle } from "lucide-react";

const metrics = [
  { label: "Users", value: "0", icon: Users },
  { label: "Drug Searches", value: "0", icon: Search },
  { label: "Revenue (USD)", value: "$0", icon: CreditCard },
  { label: "Revenue (INR)", value: "₹0", icon: CreditCard },
];

const tabs = ["Users", "Searches", "Payments", "Curated Methods"];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("Users");

  const tabContent: Record<string, { heading: string; desc: string; columns: string[] }> = {
    Users: { heading: "User Monitoring", desc: "Track users, plans, and usage.", columns: ["Name", "Email", "Plan", "Searches", "Joined"] },
    Searches: { heading: "Search Analytics", desc: "Monitor all drug search activity.", columns: ["User", "Drug", "Technique", "Date", "Status"] },
    Payments: { heading: "Payment Records", desc: "Track revenue and subscriptions.", columns: ["User", "Plan", "Amount", "Currency", "Date", "Status"] },
    "Curated Methods": { heading: "Curated Method Library", desc: "Manage pre-validated methods.", columns: ["Drug", "Technique", "Version", "Author", "Status"] },
  };

  const content = tabContent[activeTab];

  return (
    <div className="container py-10">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">Demo</span>
      </div>

      <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 text-sm mb-8 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-accent shrink-0" />
        Admin demo view — in production this would be protected and backed by a database.
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m) => (
          <div key={m.label} className="card-science p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{m.label}</span>
              <m.icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-2xl font-bold">{m.value}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b mb-6 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === t
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="card-science p-6">
        <h2 className="font-bold text-lg mb-1">{content.heading}</h2>
        <p className="text-sm text-muted-foreground mb-4">{content.desc}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                {content.columns.map((c) => (
                  <th key={c} className="px-4 py-2 text-left font-semibold">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={content.columns.length} className="px-4 py-8 text-center text-muted-foreground">
                  No data available — this is a static demo.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
