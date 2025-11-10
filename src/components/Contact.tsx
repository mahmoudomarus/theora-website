import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@visionprohealth.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (415) 555-0123",
    description: "Mon-Fri, 9am-6pm PST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Market Street, San Francisco, CA 94103",
    description: "Headquarters & Showroom"
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Monday - Friday: 9am - 6pm PST",
    description: "Closed on weekends and holidays"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    alert(`Thank you for contacting us, ${formData.name}! We'll get back to you at ${formData.email} within 24 hours.`);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-6xl md:text-7xl text-gray-900">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Have questions about Vision Pro Health? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mx-auto">
                      <info.icon className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-900 mb-1">{info.detail}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-4xl text-gray-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gray-900 text-white hover:bg-gray-800"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? 'Message Sent!' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl text-gray-900 mb-6">Visit Our Showroom</h2>
                  <p className="text-gray-600 mb-6">
                    Experience Vision Pro Health glasses in person. Visit our San Francisco showroom to try on different styles and speak with our product specialists.
                  </p>
                  <div className="bg-gradient-to-br from-purple-200 via-blue-200 to-pink-200 rounded-2xl h-64 flex items-center justify-center">
                    <div className="text-center text-gray-700">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Map View</p>
                      <p className="text-sm">123 Market Street, San Francisco</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Preview */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <h3 className="text-2xl text-gray-900 mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <p className="text-gray-900 mb-1">When will Vision Pro Health be available?</p>
                        <p className="text-sm">Expected delivery is Q2 2026 for pre-order customers.</p>
                      </div>
                      <div>
                        <p className="text-gray-900 mb-1">Do you offer prescription lenses?</p>
                        <p className="text-sm">Yes! All frames are compatible with prescription lenses.</p>
                      </div>
                      <div>
                        <p className="text-gray-900 mb-1">What's the battery life?</p>
                        <p className="text-sm">Up to 7 days with typical use.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl text-gray-900 text-center mb-12">How Can We Help?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mx-auto">
                    <div className="h-6 w-6 bg-gray-900 rounded" />
                  </div>
                  <h3 className="text-xl text-gray-900">Pre-Order Support</h3>
                  <p className="text-gray-600">Questions about pricing, availability, or placing an order?</p>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mx-auto">
                    <div className="h-6 w-6 bg-gray-900 rounded" />
                  </div>
                  <h3 className="text-xl text-gray-900">Technical Support</h3>
                  <p className="text-gray-600">Need help with setup, troubleshooting, or features?</p>
                  <Button variant="outline" className="w-full">
                    Get Help
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mx-auto">
                    <div className="h-6 w-6 bg-gray-900 rounded" />
                  </div>
                  <h3 className="text-xl text-gray-900">Press & Media</h3>
                  <p className="text-gray-600">Media inquiries, press kits, or partnership opportunities?</p>
                  <Button variant="outline" className="w-full">
                    Media Contact
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
