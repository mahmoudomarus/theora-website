import { Check, X } from "lucide-react";

const features = [
  { name: "24/7 Heart Rate Monitoring", visionPro: true, smartwatch: true, whoop: true },
  { name: "Hands-Free Experience", visionPro: true, smartwatch: false, whoop: false },
  { name: "Discreet & Stylish", visionPro: true, smartwatch: false, whoop: false },
  { name: "Prescription Lens Compatible", visionPro: true, smartwatch: false, whoop: false },
  { name: "Sleep Tracking", visionPro: true, smartwatch: true, whoop: true },
  { name: "No Charging During Day", visionPro: true, smartwatch: false, whoop: true },
  { name: "Recovery Score", visionPro: true, smartwatch: false, whoop: true },
  { name: "Professional Look", visionPro: true, smartwatch: false, whoop: false },
];

export function Comparison() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Why Choose Vision Pro Health?
            </h2>
            <p className="text-xl text-gray-600">
              The only health monitor that fits seamlessly into your professional and active lifestyle
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left p-6 text-gray-900">Feature</th>
                    <th className="p-6 text-center">
                      <div className="px-4 py-2 bg-gray-900 text-white rounded-full inline-block">
                        Vision Pro Health
                      </div>
                    </th>
                    <th className="p-6 text-center text-gray-600">Smartwatch</th>
                    <th className="p-6 text-center text-gray-600">Fitness Band</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-6 text-gray-900">{feature.name}</td>
                      <td className="p-6 text-center">
                        {feature.visionPro ? (
                          <div className="inline-flex h-8 w-8 rounded-full bg-green-100 items-center justify-center">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                        ) : (
                          <div className="inline-flex h-8 w-8 rounded-full bg-gray-100 items-center justify-center">
                            <X className="h-5 w-5 text-gray-400" />
                          </div>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {feature.smartwatch ? (
                          <div className="inline-flex h-8 w-8 rounded-full bg-gray-100 items-center justify-center">
                            <Check className="h-5 w-5 text-gray-400" />
                          </div>
                        ) : (
                          <div className="inline-flex h-8 w-8 rounded-full bg-gray-100 items-center justify-center">
                            <X className="h-5 w-5 text-gray-400" />
                          </div>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {feature.whoop ? (
                          <div className="inline-flex h-8 w-8 rounded-full bg-gray-100 items-center justify-center">
                            <Check className="h-5 w-5 text-gray-400" />
                          </div>
                        ) : (
                          <div className="inline-flex h-8 w-8 rounded-full bg-gray-100 items-center justify-center">
                            <X className="h-5 w-5 text-gray-400" />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
