import { Sparkles, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface HeaderProps {
  onBookNowClick: () => void;
}

export default function Header({ onBookNowClick }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Sparkles className="w-8 h-8 text-sky-400" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">{COMPANY_INFO.name.split(' ')[0]}</span>
              <span className="text-xs text-gray-500 hidden sm:block">{COMPANY_INFO.tagline}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sky-400 transition">Services</button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-sky-400 transition">Reviews</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-sky-400 transition">FAQ</button>
          </nav>

          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY_INFO.phone}`} className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-sky-400 transition">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={onBookNowClick}
              className="bg-[#FF8C00] hover:bg-[#FF7A00] text-white px-6 py-2.5 rounded-xl font-bold transition shadow-md hover:shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
