import { useState, useEffect } from 'react';
import { Home, Bath, Plus, Minus, Sparkles } from 'lucide-react';
import { SERVICES, EXTRAS, FREQUENCY_DISCOUNTS } from '../data';

interface CalculatorProps {
  onBookNow: (price: number) => void;
}

export default function Calculator({ onBookNow }: CalculatorProps) {
  const [selectedService, setSelectedService] = useState(1);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [selectedExtras, setSelectedExtras] = useState<number[]>([]);
  const [frequency, setFrequency] = useState(2);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const service = SERVICES[selectedService];
    const roomMultiplier = (bedrooms * 0.15) + (bathrooms * 0.10);
    const baseWithRooms = service.basePrice * (1 + roomMultiplier);

    const extrasTotal = selectedExtras.reduce((sum, index) => sum + EXTRAS[index].price, 0);

    const subtotal = baseWithRooms + extrasTotal;
    const discount = FREQUENCY_DISCOUNTS[frequency].discount / 100;
    const final = Math.round(subtotal * (1 - discount));

    setTotalPrice(final);
  }, [selectedService, bedrooms, bathrooms, selectedExtras, frequency]);

  const toggleExtra = (index: number) => {
    setSelectedExtras(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const estimatedHours = selectedService === 0 ? '2-3' : selectedService === 1 ? '3-4' : '4-6';

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Your Instant Quote
          </h2>
          <p className="text-lg text-gray-600">
            Customize your cleaning service and see the price in real-time
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-10">
          <div className="space-y-8">
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-4">
                Step 1: Choose Service
              </label>
              <div className="grid sm:grid-cols-3 gap-4">
                {SERVICES.map((service, index) => (
                  <button
                    key={service.name}
                    onClick={() => setSelectedService(index)}
                    className={`relative p-4 rounded-xl border-2 transition ${
                      selectedService === index
                        ? 'border-sky-400 bg-sky-50'
                        : 'border-gray-200 hover:border-sky-200'
                    }`}
                  >
                    {service.popular && (
                      <span className="absolute -top-2 -right-2 bg-[#FF8C00] text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                    <div className="text-left">
                      <div className="font-bold text-gray-900">{service.name}</div>
                      <div className="text-sm text-gray-600 mt-1">${service.basePrice}+</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-4">
                  <Home className="inline w-5 h-5 mr-2" />
                  Bedrooms
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-12 text-center">{bedrooms}</span>
                  <button
                    onClick={() => setBedrooms(Math.min(10, bedrooms + 1))}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-900 mb-4">
                  <Bath className="inline w-5 h-5 mr-2" />
                  Bathrooms
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-12 text-center">{bathrooms}</span>
                  <button
                    onClick={() => setBathrooms(Math.min(10, bathrooms + 1))}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-900 mb-4">
                Step 3: Add Extras
              </label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {EXTRAS.map((extra, index) => (
                  <button
                    key={extra.name}
                    onClick={() => toggleExtra(index)}
                    className={`p-3 rounded-lg border-2 text-left transition ${
                      selectedExtras.includes(index)
                        ? 'border-sky-400 bg-sky-50'
                        : 'border-gray-200 hover:border-sky-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{extra.name}</span>
                      <span className="text-sm font-bold text-sky-400">+${extra.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-900 mb-4">
                Step 4: Frequency
              </label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {FREQUENCY_DISCOUNTS.map((freq, index) => (
                  <button
                    key={freq.name}
                    onClick={() => setFrequency(index)}
                    className={`relative p-4 rounded-xl border-2 transition ${
                      frequency === index
                        ? 'border-sky-400 bg-sky-50'
                        : 'border-gray-200 hover:border-sky-200'
                    }`}
                  >
                    {freq.badge && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#FF8C00] text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                        {freq.badge}
                      </span>
                    )}
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{freq.name}</div>
                      {freq.discount > 0 && (
                        <div className="text-sm text-green-600 mt-1">Save {freq.discount}%</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-4xl font-bold text-gray-900">
                  ${totalPrice}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Est. time: {estimatedHours} hours
                </div>
                {FREQUENCY_DISCOUNTS[frequency].discount > 0 && (
                  <div className="text-sm text-green-600 font-semibold mt-1">
                    You're saving {FREQUENCY_DISCOUNTS[frequency].discount}% with {FREQUENCY_DISCOUNTS[frequency].name.toLowerCase()} cleaning!
                  </div>
                )}
              </div>
              <button
                onClick={() => onBookNow(totalPrice)}
                className="bg-[#FF8C00] hover:bg-[#FF7A00] text-white px-10 py-5 rounded-xl font-bold text-xl transition shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Sparkles className="w-6 h-6" />
                Book Now for ${totalPrice}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
