import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { Comparison } from "./components/Comparison";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
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
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
