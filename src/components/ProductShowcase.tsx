import image_8b6f63812a6294b18cfcf8f5ee2ccab3acc1c156 from 'figma:asset/8b6f63812a6294b18cfcf8f5ee2ccab3acc1c156.png';
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
                  src={image_8b6f63812a6294b18cfcf8f5ee2ccab3acc1c156} 
                  alt="Product showcase with gradient design"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* removed customer rating card */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}