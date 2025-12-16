import { Calendar, Sparkles, Coffee } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-10 h-10 text-sky-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Book Online</h3>
            <p className="text-gray-600 leading-relaxed">
              Select your date and time in 60 seconds. No phone calls needed.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-10 h-10 text-sky-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">We Clean</h3>
            <p className="text-gray-600 leading-relaxed">
              Our vetted pro comes over and makes your home shine with eco-friendly products.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                <Coffee className="w-10 h-10 text-sky-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">You Relax</h3>
            <p className="text-gray-600 leading-relaxed">
              Enjoy your free time. Pay automatically after the service is complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
