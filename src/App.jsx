import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/mailexp"; // Adjust the path if needed
import BlogPage from "./pages/BlogPage/BlogPage";
import AboutUSPage from "./pages/AboutPage/AboutUS"; // Adjust the path if needed
import ContactPage from "./pages/ContactPage/ContactPage" ; // Ensure this path is correct
import ServicesPage from "./pages/Services/Services"; // Ensure this path is correct
import Header from "./components/Header/Header"; // Ensure this path is correct
import Footer from "./components/Footer/Footer"; // Ensure this path is correct
import ScrollToTop from "./components/Scrolltop"; // Ensure this path is correct
import Signup from "./pages/Sign/Signup";
import Signin from "./pages/Sign/Signin";
import "./pages/Sign/Auth.css"; // Ensure this is included for styling

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <div className="content">
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/AboutUS" element={<AboutUSPage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
