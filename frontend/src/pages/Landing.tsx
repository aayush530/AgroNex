import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ChatbotPreview from "../components/ChatbotPreview";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function Landing() {
  return (
    <div>
      <Hero />

      <main className="max-w-7xl mx-auto px-6">
        {/* PRODUCTS */}
        <section id="products" className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Featured Products</h3>
            <div className="text-sm text-slate-500">View all products →</div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} img={p.img} name={p.name} price={p.price} />
            ))}
          </div>
        </section>

        {/* CHATBOT PREVIEW */}
        <section id="chatbot" className="mt-16 bg-green-50 py-12 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">Farm Helper — Ask anything</h3>
              <p className="text-slate-600 mt-2">Our chatbot answers crop, pest and dosage queries. Integrated with knowledge base and product recommender.</p>

              <ChatbotPreview />
            </div>

            <div>
              <img src="/assets/chatbot.jpg" alt="chatbot" className="w-full rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold">What Farmers Say</h3>
            <p className="text-slate-600 mt-2">Stories from our community</p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-slate-600">"AgroNex helped increase my yield by 20% — the soil sensor is a game changer."</p>
              <p className="mt-4 font-semibold">— Ram, Bihar</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-slate-600">"Quick recommendations from the chatbot saved my crop during pest outbreak."</p>
              <p className="mt-4 font-semibold">— Priya, Punjab</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-slate-600">"Good product quality and timely delivery."</p>
              <p className="mt-4 font-semibold">— Ahmed, UP</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
