import { Target, Users, Lightbulb, Award } from "lucide-react";
import { Button } from "./ui/button";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To revolutionize health monitoring by seamlessly integrating cutting-edge technology into everyday eyewear, making wellness tracking effortless and accessible."
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "We design with real people in mind. Every feature, every sensor, every design choice is made to enhance your daily life without compromise."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Combining optical expertise with health tech innovation, we push boundaries to create products that didn't exist before."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest materials and manufacturing processes to ensure our glasses meet the highest standards of quality and durability."
  }
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former head of wearables at a leading tech company. PhD in Biomedical Engineering from MIT."
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "15 years experience in optical design. Previously led engineering at premium eyewear brands."
  },
  {
    name: "Dr. Aisha Patel",
    role: "Chief Medical Officer",
    bio: "Board-certified cardiologist and health tech advisor. Harvard Medical School graduate."
  },
  {
    name: "James Liu",
    role: "VP of Design",
    bio: "Award-winning industrial designer. Former design lead at Apple and Tesla."
  }
];

export function AboutUs() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-6xl md:text-7xl text-gray-900">
              About Vision Pro Health
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              We're on a mission to make health monitoring invisible, effortless, and stylish.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl text-gray-900">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Vision Pro Health was founded in 2023 by a team of optical engineers, medical professionals, and tech innovators who shared a common frustration: health monitoring devices were either too intrusive, too uncomfortable, or simply didn't fit into a professional lifestyle.
              </p>
              <p>
                We asked ourselves: "What if your health tracker could be something you already wear every day?" That question led us on a three-year journey to create the world's first truly smart glasses designed for comprehensive health monitoring.
              </p>
              <p>
                Today, we're proud to introduce Vision Pro Health glasses — a perfect fusion of premium eyewear and medical-grade health technology. No wrist bands, no charging anxiety, no compromises on style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-gray-900 text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-6">
                    <value.icon className="h-6 w-6 text-gray-900" />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600">
                Meet the experts behind Vision Pro Health
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {team.map((member, index) => (
                <div key={index} className="space-y-4">
                  <div className="h-64 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 rounded-2xl" />
                  <h3 className="text-2xl text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl">Join Our Journey</h2>
            <p className="text-xl text-white/90">
              Be part of the future of health monitoring. Pre-order today or explore career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100"
                onClick={() => scrollToSection('cta')}
              >
                Pre-Order Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => window.location.hash = 'careers'}
              >
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
