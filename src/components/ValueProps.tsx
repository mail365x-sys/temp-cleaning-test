import { Shield, DollarSign, Award } from 'lucide-react';

export default function ValueProps() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose SparkleNest?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full">
              <Shield className="w-8 h-8 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Safety First</h3>
            <p className="text-gray-600 leading-relaxed">
              We don't just hire anyone. Every cleaner undergoes a strict background check and in-person interview. We are fully bonded and insured.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full">
              <DollarSign className="w-8 h-8 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Transparent Pricing</h3>
            <p className="text-gray-600 leading-relaxed">
              No hidden fees, no contracts, no surprises. Pay securely online only after the cleaning is done.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full">
              <Award className="w-8 h-8 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">The Sparkle Guarantee</h3>
            <p className="text-gray-600 leading-relaxed">
              Not happy? Let us know within 24 hours and we'll re-clean for free. Zero risk, 100% satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
