import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/loginPage/Login";

// Component to handle external redirection
const RedirectToExternal = ({ url }) => {
  useEffect(() => {
    window.location.href = url; // Redirect to external URL
  }, []);
  return null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Landing Page Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<Login />} />

        {/* Redirect Dashboard-Related Routes to the Dashboard Project */}
        <Route path="/dashboard/*" element={<RedirectToExternal url="http://localhost:3003/" />} />
        <Route path="/orders/*" element={<RedirectToExternal url="http://localhost:3003/orders" />} />
        <Route path="/holdings/*" element={<RedirectToExternal url="http://localhost:3003/holdings" />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
