import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Cleaning Services
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SERVICES.map((service, index) => (
            <button
              key={service.name}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === index
                  ? 'bg-sky-400 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {service.name}
              {service.popular && (
                <span className="absolute -top-2 -right-2 bg-[#FF8C00] text-white text-xs px-2 py-1 rounded-full">
                  Popular
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {SERVICES[activeTab].name}
            </h3>
            <p className="text-lg text-gray-600">{SERVICES[activeTab].description}</p>
            <p className="text-3xl font-bold text-sky-400 mt-4">
              Starting at ${SERVICES[activeTab].basePrice}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES[activeTab].includes.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-sky-400 mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">We bring our own supplies & eco-friendly products</span>
            </div>
            <div className="text-center">
              <button
                onClick={scrollToCalculator}
                className="bg-[#FF8C00] hover:bg-[#FF7A00] text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-md hover:shadow-lg"
              >
                Compare Services & Prices
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
