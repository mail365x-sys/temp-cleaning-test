import { Star, Award, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function Hero() {
  const handleZipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 lg:pt-32 pb-0 bg-gradient-to-br from-sky-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch relative">
          <div className="lg:w-1/2 space-y-8 pb-16 lg:pb-24 flex flex-col justify-center relative z-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Top-Rated House Cleaning in Eugene. <span className="text-sky-400">Book in 60 Seconds.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Vetted cleaners. Bonded & Insured. 100% Satisfaction Guarantee. Come home to a sparkling clean house today.
              </p>
            </div>

            <div className="space-y-2 mb-8">
              <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-900">
                Enter your Zip Code
              </label>
              <form onSubmit={handleZipSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  id="zipCode"
                  type="text"
                  placeholder="78701"
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 text-lg bg-white shadow-sm"
                  pattern="[0-9]{5}"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#FF8C00] hover:bg-[#FF7A00] text-white px-10 py-4 rounded-xl font-bold text-lg transition shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  See Pricing
                </button>
              </form>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-700 font-semibold ml-2">
                  {COMPANY_INFO.rating} Stars on Google & Yelp ({COMPANY_INFO.reviewCount} reviews)
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-sky-400" />
                  <span>BBB Accredited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-sky-400" />
                  <span>Pet Friendly</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative lg:absolute lg:right-0 lg:bottom-0 lg:h-[600px] lg:top-auto">
            <img
              src="/dsc06293.jpg"
              alt="Professional cleaner at work"
              className="rounded-t-2xl shadow-2xl w-full h-auto object-cover lg:object-contain lg:absolute lg:bottom-0 lg:right-0 lg:h-auto lg:max-h-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
