import { Globe } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "hi", label: "हिन्दी" },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-muted transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{languages.find((l) => l.code === selected)?.label}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-50 w-40 rounded-md border bg-card shadow-lg py-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setSelected(l.code); setOpen(false); }}
                className={`w-full text-left px-3 py-1.5 text-sm hover:bg-muted transition-colors ${
                  selected === l.code ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
