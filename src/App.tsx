import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { Comparison } from "./components/Comparison";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { Blog } from "./components/Blog";
import { Careers } from "./components/Careers";
import { Contact } from "./components/Contact";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />;
      case 'blog':
        return <Blog />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <main className="pt-20">
            <Hero />
            <div id="features">
              <Features />
            </div>
            <div id="product">
              <ProductShowcase />
            </div>
            <HowItWorks />
            <div id="comparison">
              <Comparison />
            </div>
            <div id="cta">
              <CTA />
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {renderPage()}
      <Footer />
    </div>
  );
}