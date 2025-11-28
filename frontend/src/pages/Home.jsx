import React from "react";

// Components
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Showcase from "../components/showcase";
import Collection from "../components/collection";
import CategorySelector from "../components/CategorySelector";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Showcase Section */}
      <Showcase />

      {/* Collection Section */}
      <Collection />

      {/* Category Selector */}
      <CategorySelector />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

