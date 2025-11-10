import { Heart, Moon, Activity, Zap, Brain, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Heart,
    title: "Heart Rate Monitoring",
    description: "Continuous heart rate tracking with medical-grade accuracy. Get real-time insights into your cardiovascular health throughout the day.",
  },
  {
    icon: Moon,
    title: "Sleep Analysis",
    description: "Comprehensive sleep tracking including REM, light, and deep sleep stages. Wake up understanding your recovery better.",
  },
  {
    icon: Activity,
    title: "Strain Tracking",
    description: "Measure your daily cardiovascular and muscular load. Optimize your training and avoid overexertion.",
  },
  {
    icon: Zap,
    title: "Recovery Score",
    description: "Get a personalized recovery score each morning. Know when to push hard and when to take it easy.",
  },
  {
    icon: Brain,
    title: "Stress Detection",
    description: "Advanced HRV monitoring to detect stress levels. Receive alerts and breathing exercises to help you manage stress.",
  },
  {
    icon: TrendingUp,
    title: "Performance Insights",
    description: "AI-powered analytics that learn your patterns and provide actionable recommendations to improve your health.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6 text-gray-900">
            All Your Metrics, <br />At A Glance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Packed with advanced sensors and AI, our glasses deliver comprehensive health insights without compromising on style.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-gray-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-gray-900" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
