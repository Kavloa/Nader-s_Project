import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContentPage/ContactPage"; // Ensure this path is correct
import Header from "./components/Header/Header"; // Ensure this path is correct
import Footer from "./components/Footer/Footer"; // Ensure this path is correct

function App() {
  return (
    <Router>
      {/* The Header (including the navbar) appears on all pages */}
      <Header />

      <div className="content">
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* Add more routes if necessary */}
        </Routes>
      </div>

      {/* Footer remains consistent on every page */}
      <Footer />
    </Router>
  );
}

export default App;
