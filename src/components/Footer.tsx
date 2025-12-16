import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-sky-400" />
              <span className="text-xl font-bold text-white">{COMPANY_INFO.name.split(' ')[0]}</span>
            </div>
            <p className="text-sm mb-4">{COMPANY_INFO.tagline}</p>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>{COMPANY_INFO.address}</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-sky-400 transition">
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-sky-400 transition">
                <Mail className="w-4 h-4" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <p className="text-gray-400">{COMPANY_INFO.hours}</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-sky-400 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
              </a>
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-sky-400 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-sky-400 transition">Privacy Policy</a>
              <a href="#" className="block hover:text-sky-400 transition">Terms of Service</a>
              <a href="#" className="block hover:text-sky-400 transition">Refund Policy</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
