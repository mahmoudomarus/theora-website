import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const featuredPost = {
  title: "The Science Behind Smart Glasses Health Monitoring",
  excerpt: "How we achieved medical-grade accuracy in a stylish eyewear format. Explore the breakthrough technology that makes Vision Pro Health possible.",
  date: "November 8, 2025",
  readTime: "8 min read",
  category: "Technology"
};

const blogPosts = [
  {
    title: "Why Wrist-Based Fitness Trackers Are Becoming Obsolete",
    excerpt: "Exploring the limitations of smartwatches and fitness bands, and why the future of health monitoring is moving beyond the wrist.",
    date: "November 5, 2025",
    readTime: "6 min read",
    category: "Industry Insights"
  },
  {
    title: "Understanding Your Recovery Score: A Complete Guide",
    excerpt: "Learn how to interpret your daily recovery metrics and make smarter decisions about training, rest, and performance.",
    date: "November 1, 2025",
    readTime: "10 min read",
    category: "Health & Wellness"
  },
  {
    title: "The Future of Preventive Healthcare",
    excerpt: "How continuous health monitoring is revolutionizing preventive medicine and helping people catch health issues before they become serious.",
    date: "October 28, 2025",
    readTime: "7 min read",
    category: "Healthcare"
  },
  {
    title: "Sleep Tracking 101: What Your Sleep Data Really Means",
    excerpt: "A deep dive into sleep stages, recovery, and how to use your sleep data to improve your overall health and performance.",
    date: "October 25, 2025",
    readTime: "9 min read",
    category: "Health & Wellness"
  },
  {
    title: "Behind the Design: Creating Premium Smart Eyewear",
    excerpt: "Our design team shares the process of merging cutting-edge technology with timeless eyewear aesthetics.",
    date: "October 22, 2025",
    readTime: "5 min read",
    category: "Design"
  },
  {
    title: "HRV Monitoring: The Key to Understanding Stress",
    excerpt: "Heart Rate Variability explained: what it is, why it matters, and how Vision Pro Health uses it to help you manage stress.",
    date: "October 18, 2025",
    readTime: "8 min read",
    category: "Health & Wellness"
  }
];

const categories = [
  "All Posts",
  "Technology",
  "Health & Wellness",
  "Industry Insights",
  "Design",
  "Healthcare"
];

export function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-6xl md:text-7xl text-gray-900">
              Vision Pro Health Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Insights on health monitoring, wellness technology, and the future of wearable devices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden text-white">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-12 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4 w-fit">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-4xl md:text-5xl mb-6">{featuredPost.title}</h2>
                  <p className="text-xl text-white/90 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-white/80 mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 w-fit">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 lg:min-h-[500px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    index === 0
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-br from-purple-200 via-blue-200 to-pink-200" />
                    <div className="p-6 space-y-4">
                      <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {post.category}
                      </div>
                      <h3 className="text-xl text-gray-900 leading-snug">{post.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full mt-4">
                        Read More
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

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl text-gray-900">Stay Updated</h2>
            <p className="text-xl text-gray-600">
              Subscribe to our newsletter for the latest insights on health technology and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
