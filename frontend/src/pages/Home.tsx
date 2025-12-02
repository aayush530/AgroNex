import React, { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [form, setForm] = useState({ crop: "", area: "", soilType: "", ph: "" });
  const [result, setResult] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder logic — later replace with API call
    setResult(`For ${form.crop || "your crop"}, recommended fertilizer: Urea 50kg/ha (sample).`);
  }

  return (
    <div>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Crop Analysis</h2>
        <p className="text-slate-600 mt-2">Fill the crop details to get recommendations.</p>

        <form onSubmit={submit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 border rounded" placeholder="Crop (e.g. Wheat)" value={form.crop} onChange={e => setForm({...form, crop: e.target.value})} />
          <input className="p-3 border rounded" placeholder="Area (acre)" value={form.area} onChange={e => setForm({...form, area: e.target.value})} />
          <select className="p-3 border rounded" value={form.soilType} onChange={e => setForm({...form, soilType: e.target.value})}>
            <option value="">Select soil type</option>
            <option value="loam">Loam</option>
            <option value="clay">Clay</option>
            <option value="sandy">Sandy</option>
          </select>
          <input className="p-3 border rounded" placeholder="Soil pH" value={form.ph} onChange={e => setForm({...form, ph: e.target.value})} />

          <div className="md:col-span-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Get Recommendation</button>
          </div>
        </form>

        {result && (
          <div className="mt-6 bg-white p-4 rounded shadow">
            <h4 className="font-semibold">Recommendation</h4>
            <p className="mt-2 text-slate-700">{result}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
