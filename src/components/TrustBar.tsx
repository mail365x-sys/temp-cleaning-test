import { Star, Shield, Award, Heart, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function TrustBar() {
  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Trusted by <span className="font-bold text-gray-900">{COMPANY_INFO.clientCount} {COMPANY_INFO.location} homeowners</span>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
          <div className="flex items-center gap-2 text-gray-500">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">Yelp 4.8★</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">Google Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Thumbtack Top Pro</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium">Pet Friendly</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Background Checked</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">BBB A+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
