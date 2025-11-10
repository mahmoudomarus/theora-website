import gradientSteps from "figma:asset/3d8dbcb0e33a5e2ff8a262545b52de38cb9851f2.png";

const steps = [
  {
    number: "01",
    title: "Wear Your Glasses",
    description: "Put on your Vision Pro Health glasses just like regular eyewear. The sensors automatically begin collecting data.",
  },
  {
    number: "02",
    title: "Live Your Life",
    description: "Go about your day naturally. The glasses monitor your health metrics continuously and discreetly.",
  },
  {
    number: "03",
    title: "Get Insights",
    description: "Review your daily health report through the companion app. Track trends and optimize your wellness journey.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div 
        className="absolute right-0 top-0 w-1/3 h-full opacity-30"
        style={{
          backgroundImage: `url(${gradientSteps})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Simple To Use
            </h2>
            <p className="text-xl text-gray-600">
              Health monitoring has never been this effortless
            </p>
          </div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="text-6xl text-gray-200 flex-shrink-0 w-24">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-3xl mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
