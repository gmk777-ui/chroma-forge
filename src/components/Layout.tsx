import { Link, useLocation } from "react-router-dom";
import { FlaskConical, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/drug-search", label: "Drug Search" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/payment", label: "Pricing" },
  { path: "/admin", label: "Admin" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Chromatogram gradient bar */}
      <div className="gradient-bar w-full animate-flow" style={{ backgroundSize: "200% 100%" }} />

      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
              <FlaskConical className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-lg tracking-tight">LCForge AI</span>
              <span className="hidden sm:block text-[10px] text-muted-foreground leading-none">Forge Robust Chromatography</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            <button className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              Login
            </button>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t bg-card p-4 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === l.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <button className="w-full mt-2 px-3 py-2 rounded-md text-sm font-medium border border-primary text-primary">
              Login
            </button>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-card">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FlaskConical className="w-5 h-5 text-primary" />
                <span className="font-bold">LCForge AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered chromatographic method development for pharmaceutical analysis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Platform</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/drug-search" className="block hover:text-foreground">Drug Search</Link>
                <Link to="/method" className="block hover:text-foreground">Method Generation</Link>
                <Link to="/literature" className="block hover:text-foreground">Literature Survey</Link>
                <Link to="/properties" className="block hover:text-foreground">Drug Properties</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <span className="block">About</span>
                <span className="block">Contact</span>
                <span className="block">Careers</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Legal</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <span className="block">Privacy Policy</span>
                <span className="block">Terms of Service</span>
                <span className="block">GDPR</span>
              </div>
            </div>
          </div>
          <div className="gradient-bar mt-8 mb-4 rounded-full" />
          <p className="text-center text-xs text-muted-foreground">
            © 2026 LCForge AI. Demo front-end only – this is a static prototype.
          </p>
        </div>
      </footer>
    </div>
  );
}
