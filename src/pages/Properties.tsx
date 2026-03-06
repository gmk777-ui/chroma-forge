import { Atom } from "lucide-react";

export default function PropertiesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Drug Properties</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Displaying properties for <strong>Amlodipine Besylate</strong>. In production, properties and structures would be fetched via chemical APIs (PubChem, ChemSpider, DrugBank).
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-science p-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Atom className="w-5 h-5 text-primary" /> Physicochemical Properties
          </h2>
          <table className="w-full text-sm">
            <tbody className="divide-y">
              {[
                ["Chemical Name", "3-Ethyl 5-methyl 2-[(2-aminoethoxy)methyl]-4-(2-chlorophenyl)-6-methyl-1,4-dihydropyridine-3,5-dicarboxylate benzenesulfonate"],
                ["Molecular Formula", "C₂₀H₂₅ClN₂O₅ · C₆H₆O₃S"],
                ["Molecular Weight", "567.05 g/mol"],
                ["logP", "3.0"],
                ["pKa", "8.6 (basic)"],
                ["Solubility", "Slightly soluble in water; freely soluble in methanol"],
                ["CAS Number", "111470-99-6"],
                ["SMILES", "CCOC(=O)C1=C(NC(=C1C(=O)OC)C)COCC[NH3+]..."],
                ["Drug Class", "Calcium Channel Blocker (Dihydropyridine)"],
                ["BCS Classification", "Class I (High Solubility, High Permeability)"],
                ["Appearance", "White to off-white crystalline powder"],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td className="py-2.5 font-medium text-muted-foreground w-48 align-top">{k}</td>
                  <td className="py-2.5 font-mono text-sm">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          <div className="card-science p-6">
            <h3 className="font-semibold mb-3">2D Structure</h3>
            <div className="w-full aspect-square rounded-lg border-2 border-dashed border-border flex items-center justify-center bg-muted/50">
              <div className="text-center text-muted-foreground">
                <Atom className="w-10 h-10 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">2D Structure Placeholder</p>
                <p className="text-xs mt-1">Would render via RDKit / PubChem API</p>
              </div>
            </div>
          </div>

          <div className="card-science p-6">
            <h3 className="font-semibold mb-3">Chromatographic Relevance</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• <strong>logP 3.0</strong> → Moderate lipophilicity, good RP-HPLC retention</li>
              <li>• <strong>pKa 8.6</strong> → Basic; pH control critical for peak shape</li>
              <li>• <strong>UV absorption</strong> at 237 nm and 360 nm</li>
              <li>• Multiple degradation pathways under stress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
