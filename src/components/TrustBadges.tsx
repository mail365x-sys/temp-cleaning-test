import { Shield, UserCheck, CreditCard, Sparkles } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="py-16 lg:py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Your peace of mind is our priority
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="font-bold text-gray-900">Fully Bonded & Insured</h3>
            <p className="text-sm text-gray-600">
              Liability coverage up to $1M for your complete protection
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="font-bold text-gray-900">Background Checked</h3>
            <p className="text-sm text-gray-600">
              Criminal record checks on all staff members
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="font-bold text-gray-900">Secure Cashless Payment</h3>
            <p className="text-sm text-gray-600">
              Powered by Stripe for secure transactions
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="font-bold text-gray-900">200% Sparkle Guarantee</h3>
            <p className="text-sm text-gray-600">
              We return if it's not perfect - no questions asked
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
