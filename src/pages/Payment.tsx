import { Check, AlertTriangle, CreditCard } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["5 drug searches/month", "Basic HPLC methods", "Limited literature results", "Community support"],
    cta: "Current Plan",
    disabled: true,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    features: ["Unlimited searches", "HPLC + LC-MS methods", "Full literature mining", "Drug properties & structures", "AI optimization", "PDF/Excel export", "Priority support"],
    cta: "Choose Professional",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$499",
    period: "/month",
    features: ["Everything in Professional", "Unlimited team members", "API access", "Regulatory compliance tools", "Custom method templates", "Dedicated account manager", "SLA guarantee"],
    cta: "Contact Sales",
  },
];

export default function PaymentPage() {
  return (
    <div className="container py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Pricing Plans</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Choose the plan that fits your lab's needs. Scale from individual researcher to enterprise team.
        </p>
      </div>

      <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 text-sm text-center mb-8 flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 text-accent" />
        Demo front-end only — payments are not processed on this static site.
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {plans.map((p) => (
          <div key={p.name} className={`card-science p-6 flex flex-col ${p.highlight ? "ring-2 ring-primary" : ""}`}>
            {p.highlight && (
              <span className="self-start px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-3">Most Popular</span>
            )}
            <h3 className="text-xl font-bold">{p.name}</h3>
            <div className="mt-2 mb-4">
              <span className="text-3xl font-extrabold">{p.price}</span>
              <span className="text-muted-foreground text-sm">{p.period}</span>
            </div>
            <ul className="space-y-2 flex-1 mb-6">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
            <button
              disabled={p.disabled}
              className={`w-full py-2.5 rounded-md text-sm font-semibold transition-colors ${
                p.highlight
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : p.disabled
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Stubbed payment */}
      <div className="max-w-md mx-auto card-science p-6">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" /> Billing (Demo)
        </h3>
        <div className="space-y-3 text-sm">
          <div>
            <label className="font-medium block mb-1">Card Number</label>
            <input disabled placeholder="4242 4242 4242 4242" className="w-full px-3 py-2 rounded-md border bg-muted text-muted-foreground cursor-not-allowed" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-medium block mb-1">Expiry</label>
              <input disabled placeholder="MM/YY" className="w-full px-3 py-2 rounded-md border bg-muted text-muted-foreground cursor-not-allowed" />
            </div>
            <div>
              <label className="font-medium block mb-1">CVC</label>
              <input disabled placeholder="123" className="w-full px-3 py-2 rounded-md border bg-muted text-muted-foreground cursor-not-allowed" />
            </div>
          </div>
          <div className="gradient-bar rounded-full my-1" />
          <div>
            <label className="font-medium block mb-1">UPI ID (Razorpay – India)</label>
            <input disabled placeholder="user@upi" className="w-full px-3 py-2 rounded-md border bg-muted text-muted-foreground cursor-not-allowed" />
          </div>
          <button disabled className="w-full py-2.5 rounded-md bg-muted text-muted-foreground cursor-not-allowed font-medium">
            Pay Now (Demo Only)
          </button>
        </div>
      </div>
    </div>
  );
}
