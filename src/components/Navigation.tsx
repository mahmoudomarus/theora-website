import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-xl text-gray-900">Vision Pro Health</div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#product" className="text-gray-700 hover:text-gray-900 transition-colors">
              Product
            </a>
            <a href="#comparison" className="text-gray-700 hover:text-gray-900 transition-colors">
              Compare
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </a>
            <Button>Pre-Order</Button>
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
            <a href="#features" className="block text-gray-700 hover:text-gray-900">
              Features
            </a>
            <a href="#product" className="block text-gray-700 hover:text-gray-900">
              Product
            </a>
            <a href="#comparison" className="block text-gray-700 hover:text-gray-900">
              Compare
            </a>
            <a href="#about" className="block text-gray-700 hover:text-gray-900">
              About
            </a>
            <Button className="w-full">Pre-Order</Button>
          </div>
        )}
      </div>
    </nav>
  );
}
