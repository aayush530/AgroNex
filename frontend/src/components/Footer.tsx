import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {/* Company Info */}
        <div>
          <h4 className="font-bold text-lg">AgroNex</h4>
          <p className="text-sm text-slate-300 mt-2">
            Smart Farming Solutions — products, services, and advice for modern
            farmers.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm text-slate-300 mt-2">
            Email: agronex@gmail.com
          </p>
          <p className="text-sm text-slate-300">Phone: +91 9517005438</p>
        </div>

        {/* Subscribe Section */}
        <div>
          <h5 className="font-semibold">Subscribe</h5>
          <p className="text-sm text-slate-300 mt-2">
            Get updates on new products and farming tips.
          </p>
          <div className="mt-3">
            <input
              className="w-full p-2 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email address"
              type="email"
            />
            <button className="mt-2 w-full bg-green-600 p-2 rounded-md text-white hover:bg-green-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} AgroNex — All rights reserved.
      </div>
    </footer>
  );
}
