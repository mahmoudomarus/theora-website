import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import gradientHero from "figma:asset/24f0c203e4f07b6cbb68ba19fbb4c287daf9f623.png";

export function Hero() {
  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    // In a real app, this would open a video modal or redirect to a demo video
    alert('Demo video coming soon! Our revolutionary smart glasses will be showcased with a full product demonstration.');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${gradientHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-0" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4">
            <span className="text-sm">Introducing Vision Pro Health</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight text-gray-900">
            See Your Health
            <br />
            <span className="text-gray-600">Clearly</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Revolutionary smart glasses that monitor your heart rate, recovery, sleep, and strain — all day, every day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToCTA}>
              Pre-Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/80 backdrop-blur-sm" onClick={handleWatchDemo}>
              Watch Demo
            </Button>
          </div>
          
          <div className="pt-12 flex items-center justify-center gap-8 text-sm text-gray-600">
            <div>
              <div className="text-2xl text-gray-900">24/7</div>
              <div>Monitoring</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <div className="text-2xl text-gray-900">7 Days</div>
              <div>Battery Life</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <div className="text-2xl text-gray-900">Medical</div>
              <div>Grade Sensors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}