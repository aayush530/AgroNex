import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Grow smarter with AgroNex</h2>
          <p className="mt-4 text-slate-600">Precision farming tools, product marketplace and a friendly chatbot to answer crop & pest queries.</p>

          <div className="mt-8 flex gap-4">
            <Link to="/products" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Shop Products</Link>
            <Link to="/chatbot" className="px-6 py-3 border border-green-600 text-green-600 rounded-lg">Ask the chatbot</Link>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src="/assets/hero.jpg" alt="Farming" className="w-full object-cover h-80 md:h-96" />
        </div>
      </div>
    </section>
  );
}
