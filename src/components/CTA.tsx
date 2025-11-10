import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    // In a real app, this would send to a backend/database
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    
    // Show success message
    alert(`Thank you for joining the waitlist! We've added ${email} and will notify you when pre-orders are available.`);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl">
            Pre-Order Today
          </h2>
          <p className="text-xl text-white/90">
            Join the waitlist and be among the first to experience the future of health monitoring. Limited units available for early adopters.
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white text-gray-900 border-0 h-14 text-lg flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="h-14 px-8 bg-white text-gray-900 hover:bg-gray-100"
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Added!' : 'Join Waitlist'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            
            <div className="flex items-center justify-center gap-8 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>30-day money back</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Free shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>2-year warranty</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-white/70">
            Expected delivery: Q2 2026 • Reserve yours now for $50
          </p>
        </div>
      </div>
    </section>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}