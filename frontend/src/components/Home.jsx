import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import Collection from "../components/Collection";
import CategorySelector from "../components/CategorySelector";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f7efe6]">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Collection />
      <CategorySelector />
      <Footer />
    </div>
  );
}

