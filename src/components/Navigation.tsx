import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // First navigate to home if not already there
    if (window.location.hash && window.location.hash !== '#home') {
      window.location.hash = 'home';
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  const navigateToPage = (page: string) => {
    window.location.hash = page;
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#home" 
            className="text-xl text-gray-900 cursor-pointer"
            onClick={() => navigateToPage('home')}
          >
            Vision Pro Health
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
              Features
            </a>
            <a href="#product" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }}>
              Product
            </a>
            <a href="#comparison" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('comparison'); }}>
              Compare
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); navigateToPage('about'); }}>
              About
            </a>
            <Button onClick={() => scrollToSection('cta')}>Pre-Order</Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-900" />
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-gray-900" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
              Features
            </a>
            <a href="#product" className="block text-gray-700 hover:text-gray-900" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }}>
              Product
            </a>
            <a href="#comparison" className="block text-gray-700 hover:text-gray-900" onClick={(e) => { e.preventDefault(); scrollToSection('comparison'); }}>
              Compare
            </a>
            <a href="#about" className="block text-gray-700 hover:text-gray-900" onClick={(e) => { e.preventDefault(); navigateToPage('about'); }}>
              About
            </a>
            <Button className="w-full" onClick={() => scrollToSection('cta')}>Pre-Order</Button>
          </div>
        )}
      </div>
    </nav>
  );
}