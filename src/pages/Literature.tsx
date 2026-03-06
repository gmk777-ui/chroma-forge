import { BookOpen, Search, Filter } from "lucide-react";

const articles = [
  { title: "Development and Validation of RP-HPLC Method for Amlodipine Besylate in Tablets", journal: "J. Pharm. Biomed. Anal.", year: 2021, technique: "HPLC", doi: "10.1016/j.jpba.2021.xxxxx" },
  { title: "Simultaneous Determination of Amlodipine and Atorvastatin by LC-MS/MS in Human Plasma", journal: "J. Chromatogr. B", year: 2020, technique: "LC-MS/MS", doi: "10.1016/j.jchromb.2020.xxxxx" },
  { title: "Quality by Design Approach for HPLC Method Development of Amlodipine", journal: "Anal. Methods", year: 2022, technique: "HPLC", doi: "10.1039/d2ay00xxx" },
  { title: "Stability-Indicating HPLC Method for Amlodipine and Its Degradation Products", journal: "J. Liq. Chromatogr.", year: 2019, technique: "HPLC", doi: "10.1080/10826076.2019.xxxxx" },
  { title: "Bioanalytical Method Validation for Amlodipine Using LC-MS", journal: "Biomed. Chromatogr.", year: 2023, technique: "LC-MS", doi: "10.1002/bmc.xxxx" },
  { title: "Green Analytical Chemistry Approaches for Antihypertensive Drug Analysis", journal: "Microchemical J.", year: 2022, technique: "HPLC", doi: "10.1016/j.microc.2022.xxxxx" },
];

export default function LiteraturePage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Literature Survey</h1>
      <p className="text-muted-foreground mb-6 max-w-2xl">
        In production, LCForge AI would automatically pull and curate relevant literature from PubMed, DrugBank, PubChem, and ChemSpider via APIs. Below is a simulated result for <strong>Amlodipine</strong>.
      </p>

      {/* Filters UI */}
      <div className="card-science p-4 mb-6 flex flex-wrap items-center gap-3">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <input type="text" placeholder="Search articles..." className="px-3 py-1.5 rounded-md border bg-background text-sm flex-1 min-w-[200px]" />
        <select className="px-3 py-1.5 rounded-md border bg-background text-sm">
          <option>All Techniques</option>
          <option>HPLC</option>
          <option>LC-MS</option>
          <option>LC-MS/MS</option>
        </select>
        <select className="px-3 py-1.5 rounded-md border bg-background text-sm">
          <option>All Years</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
        <button className="px-4 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium">
          <Search className="w-3.5 h-3.5 inline mr-1" /> Filter
        </button>
      </div>

      {/* Articles table */}
      <div className="card-science overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">#</th>
              <th className="px-4 py-3 text-left font-semibold">Title</th>
              <th className="px-4 py-3 text-left font-semibold">Journal</th>
              <th className="px-4 py-3 text-left font-semibold">Year</th>
              <th className="px-4 py-3 text-left font-semibold">Technique</th>
              <th className="px-4 py-3 text-left font-semibold">DOI</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {articles.map((a, i) => (
              <tr key={i} className="hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                <td className="px-4 py-3 font-medium max-w-md">
                  <BookOpen className="w-3.5 h-3.5 inline mr-1.5 text-primary" />
                  {a.title}
                </td>
                <td className="px-4 py-3 text-muted-foreground italic">{a.journal}</td>
                <td className="px-4 py-3">{a.year}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{a.technique}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-primary hover:underline cursor-pointer text-xs font-mono">{a.doi}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
