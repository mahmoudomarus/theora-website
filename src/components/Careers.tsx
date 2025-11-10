import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Industry-leading salaries plus equity options for all full-time employees."
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, vision, and free Vision Pro Health glasses for all team members."
  },
  {
    title: "Flexible Work",
    description: "Hybrid work model with flexible hours. Work from our SF headquarters or remotely."
  },
  {
    title: "Unlimited PTO",
    description: "Take the time you need to rest and recharge. We trust our team to manage their time."
  },
  {
    title: "Learning Budget",
    description: "$3,000 annual budget for courses, conferences, and professional development."
  },
  {
    title: "Equipment Budget",
    description: "Top-of-the-line laptop, monitor, and any equipment you need to do your best work."
  }
];

const openPositions = [
  {
    title: "Senior Hardware Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead the development of next-generation sensor technology for our smart glasses platform."
  },
  {
    title: "iOS Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful, performant mobile experiences for our health monitoring companion app."
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Shape the future of wearable health tech through thoughtful, user-centered design."
  },
  {
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Develop AI algorithms for health insights, anomaly detection, and personalized recommendations."
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Drive brand awareness and lead our go-to-market strategy for product launches."
  },
  {
    title: "Clinical Research Specialist",
    department: "Medical",
    location: "Remote",
    type: "Full-time",
    description: "Lead clinical validation studies and ensure our products meet medical-grade standards."
  }
];

export function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-6xl md:text-7xl text-gray-900">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Help us build the future of health monitoring. We're looking for passionate, talented people to join our mission.
            </p>
            <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl text-gray-900">Why Vision Pro Health?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a fast-growing startup at the intersection of fashion, technology, and healthcare. Our team is small but mighty—every person makes a real impact. If you want to work on groundbreaking technology that will improve millions of lives, this is the place.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-gray-900 text-center mb-16">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-6">
                      <div className="h-6 w-6 bg-gray-900 rounded" />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">
                {openPositions.length} positions currently available
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="space-y-3 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl text-gray-900">{position.title}</h3>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {position.department}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{position.description}</p>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 lg:w-auto w-full">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl">Our Culture</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              We're building a company where the best work of your career happens. We value curiosity, ownership, and collaboration. We move fast, iterate quickly, and aren't afraid to take risks. Most importantly, we support each other and celebrate wins together.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl mb-2">🚀</div>
                <h3 className="text-xl mb-2">Move Fast</h3>
                <p className="text-white/80">Ship early, learn quickly, iterate constantly.</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="text-xl mb-2">Own It</h3>
                <p className="text-white/80">Take ownership and see projects through.</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🤝</div>
                <h3 className="text-xl mb-2">Collaborate</h3>
                <p className="text-white/80">Best ideas come from diverse perspectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl text-gray-900">Don't See Your Role?</h2>
            <p className="text-xl text-gray-600">
              We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute.
            </p>
            <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
              Send Us Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
