import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage"; // Assuming you have a contact page
import Header from "./components/Header"; // Import the updated Header component
import Footer from "./components/Footer"; // Assuming you have a Footer component

function App() {
  return (
    <Router>
      {/* Header is now included with the Products dropdown */}
      <Header />

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more routes if necessary */}
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
