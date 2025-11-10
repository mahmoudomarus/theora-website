import { Check } from "lucide-react";
import gradientProduct from "figma:asset/cff5880faa201a1e07728dac528c0e71a1692f38.png";

const specs = [
  "Titanium frame with premium finish",
  "Photochromic lenses that adapt to light",
  "IPX7 water resistance",
  "Wireless charging case included",
  "Prescription lens compatible",
  "Available in 5 colors",
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div>
                <div className="inline-block px-3 py-1 bg-gray-900 text-white rounded-full text-sm mb-4">
                  Premium Design
                </div>
                <h2 className="text-5xl md:text-6xl mb-6 text-gray-900">
                  Technology Meets Style
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Crafted with precision engineering and elegant design. Our smart glasses look and feel like premium eyewear, with cutting-edge health sensors seamlessly integrated into the frame.
                </p>
              </div>
              
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <div className="text-sm text-gray-500 mb-2">Starting at</div>
                <div className="text-5xl text-gray-900">$399</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={gradientProduct} 
                  alt="Product showcase with gradient design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-sm text-gray-500 mb-1">Customer Rating</div>
                <div className="flex items-center gap-2">
                  <div className="text-3xl text-gray-900">4.9</div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
