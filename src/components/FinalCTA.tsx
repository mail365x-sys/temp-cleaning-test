import { Sparkles, CreditCard } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface FinalCTAProps {
  onBookNow: () => void;
}

export default function FinalCTA({ onBookNow }: FinalCTAProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles className="w-16 h-16 text-sky-400 mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Ready for a sparkling clean home?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join {COMPANY_INFO.clientCount} neighbors in Austin and reclaim your weekends
        </p>
        <button
          onClick={onBookNow}
          className="bg-[#FF8C00] hover:bg-[#FF7A00] text-white px-12 py-6 rounded-xl font-bold text-2xl transition shadow-md hover:shadow-lg inline-flex items-center gap-3"
        >
          <Sparkles className="w-7 h-7" />
          Book Your Cleaning Now
        </button>
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <CreditCard className="w-4 h-4" />
          <span>No credit card charged until service is complete</span>
        </div>
      </div>
    </section>
  );
}
