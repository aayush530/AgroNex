import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function Products() {
  const [query, setQuery] = useState("");
  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Products</h2>

          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search products..."
              className="p-2 border rounded"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} img={p.img} name={p.name} price={p.price} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
