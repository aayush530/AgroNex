import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Chatbot from "./pages/Chatbot";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
  <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
  <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
  <Route path="/chatbot" element={<ProtectedRoute><Chatbot /></ProtectedRoute>} />
  <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
</Routes>
    </BrowserRouter>
  );
}
