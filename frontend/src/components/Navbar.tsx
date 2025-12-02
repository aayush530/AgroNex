import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <img src="/assets/logo.png" alt="AgroNex" className="w-10 h-10" />
          <h1 className="font-bold text-lg">AgroNex</h1>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-slate-700">
          {isLoggedIn && (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/products">Products</Link>
              <Link to="/chatbot">Chatbot</Link>
              <Link to="/home">Crop Form</Link>
            </>
          )}

          {!isLoggedIn ? (
            <>
              <Link 
                to="/login"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Login
              </Link>
              <Link 
                to="/register"
                className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
